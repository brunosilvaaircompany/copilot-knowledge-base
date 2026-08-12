#!/usr/bin/env python3
"""
semantic_freshness.py — Camada semântica da checagem de freshness.

Roda **depois** da camada determinística (git diff + source_headings + regra
de fallback 200 linhas / 40%), nunca no lugar dela. Recebe o texto real do
slide e a alteração da fonte e devolve um veredito estruturado:

    divergent      → o slide ficou factualmente errado; abre issue
    not_divergent  → a mudança não afeta o slide; suprime a issue
    unknown        → não foi possível decidir; abre issue (fail-open)

Regras de segurança:
  - Qualquer falha (provedor ausente, timeout, saída inválida, orçamento
    estourado) vira `unknown`, que **abre** a issue. Indisponibilidade de IA
    nunca pode virar silêncio.
  - Um veredito sem os dois trechos citados (slide e fonte) é rebaixado para
    `unknown`: sem citação não há como auditar a decisão.

Provedores (`--semantic-provider`):
  none     — padrão; devolve sempre `unknown` sem chamar nada
  command  — executa um programa local, payload JSON no stdin, veredito JSON
             no stdout (usado para testes e para plugar um agente/CLI)
  http     — endpoint compatível com Chat Completions; chave lida de uma
             variável de ambiente (`--semantic-api-key-env`)
"""

from __future__ import annotations

import hashlib
import json
import os
import re
import shlex
import subprocess
from typing import Any

PROVIDER_NONE = "none"
PROVIDER_COMMAND = "command"
PROVIDER_HTTP = "http"
PROVIDERS = (PROVIDER_NONE, PROVIDER_COMMAND, PROVIDER_HTTP)

VERDICT_DIVERGENT = "divergent"
VERDICT_NOT_DIVERGENT = "not_divergent"
VERDICT_UNKNOWN = "unknown"
VERDICTS = (VERDICT_DIVERGENT, VERDICT_NOT_DIVERGENT, VERDICT_UNKNOWN)

# Trecho citado precisa ser longo o bastante para ser verificável.
MIN_EXCERPT_CHARS = 12

# Limites do payload enviado ao provedor (mantém a chamada barata e previsível).
MAX_PAYLOAD_SLIDE_CHARS = 4000
MAX_PAYLOAD_DIFF_CHARS = 6000
MAX_PAYLOAD_SOURCE_CHARS = 4000

PROMPT = """Você compara um slide de treinamento com a documentação que o originou.

Responda **apenas** com um objeto JSON, sem texto ao redor, com as chaves:
  "verdict": "divergent" se o slide ficou factualmente errado por causa da
             mudança na documentação, ou "not_divergent" se o slide continua
             correto (mesmo que incompleto);
  "confidence": número entre 0 e 1;
  "slide_excerpt": trecho citado literalmente do slide que embasa a decisão;
  "source_excerpt": trecho citado literalmente da documentação que embasa a
             decisão;
  "rationale": uma frase curta explicando a comparação.

Regras: cite trechos reais dos textos recebidos (nunca invente); prefira
"divergent" quando houver dúvida real sobre um fato afirmado no slide.
"""


class SemanticError(Exception):
    """Falha ao obter um veredito do provedor."""


def pair_cache_key(slide_id: str, slide_text: str, source_path: str, source_payload: str) -> str:
    """Chave de cache do par (slide, fonte): muda se o slide ou a fonte mudar."""
    digest = hashlib.sha256()
    for part in (slide_id, slide_text or "", source_path, source_payload or ""):
        digest.update(part.encode("utf-8"))
        digest.update(b"\x00")
    return digest.hexdigest()


def unknown_verdict(reason: str, provider: str = PROVIDER_NONE) -> dict[str, Any]:
    return {
        "verdict": VERDICT_UNKNOWN,
        "confidence": 0.0,
        "slide_excerpt": "",
        "source_excerpt": "",
        "rationale": reason,
        "provider": provider,
        "model": "",
    }


def build_payload(
    slide_id: str,
    slide_text: str,
    source_path: str,
    source_diff: str,
    source_excerpt: str,
) -> dict[str, Any]:
    return {
        "slide_id": slide_id,
        "slide_text": (slide_text or "")[:MAX_PAYLOAD_SLIDE_CHARS],
        "source_path": source_path,
        "source_diff": (source_diff or "")[:MAX_PAYLOAD_DIFF_CHARS],
        "source_text": (source_excerpt or "")[:MAX_PAYLOAD_SOURCE_CHARS],
        "instructions": PROMPT,
    }


def normalize_verdict(raw: Any, provider: str, model: str = "") -> dict[str, Any]:
    """
    Valida a resposta do provedor.

    Rebaixa para `unknown` (portanto, abre issue) quando o veredito é
    desconhecido ou quando falta um dos trechos citados.
    """
    if not isinstance(raw, dict):
        return unknown_verdict("Resposta do provedor não é um objeto JSON.", provider)

    verdict = str(raw.get("verdict", "")).strip().lower()
    if verdict not in (VERDICT_DIVERGENT, VERDICT_NOT_DIVERGENT):
        return unknown_verdict(
            f"Veredito desconhecido: {raw.get('verdict')!r}.", provider
        )

    slide_excerpt = str(raw.get("slide_excerpt") or "").strip()
    source_excerpt = str(raw.get("source_excerpt") or "").strip()
    if len(slide_excerpt) < MIN_EXCERPT_CHARS or len(source_excerpt) < MIN_EXCERPT_CHARS:
        return unknown_verdict(
            "Veredito sem os dois trechos citados — rebaixado para unknown.", provider
        )

    try:
        confidence = float(raw.get("confidence", 0.0))
    except (TypeError, ValueError):
        confidence = 0.0

    return {
        "verdict": verdict,
        "confidence": max(0.0, min(1.0, confidence)),
        "slide_excerpt": slide_excerpt,
        "source_excerpt": source_excerpt,
        "rationale": str(raw.get("rationale") or "").strip(),
        "provider": provider,
        "model": model or str(raw.get("model") or ""),
    }


def _extract_json(text: str) -> Any:
    """Aceita JSON puro ou embrulhado em cerca de código."""
    text = (text or "").strip()
    if not text:
        raise SemanticError("Saída vazia do provedor.")
    fenced = re.search(r"```(?:json)?\s*(.+?)```", text, re.S)
    if fenced:
        text = fenced.group(1).strip()
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        start, end = text.find("{"), text.rfind("}")
        if start == -1 or end <= start:
            raise SemanticError("Saída do provedor não contém JSON.")
        try:
            return json.loads(text[start:end + 1])
        except json.JSONDecodeError as exc:
            raise SemanticError(f"JSON inválido na saída do provedor: {exc}") from exc


def _run_command(command: str, payload: dict[str, Any], timeout: int) -> Any:
    argv = shlex.split(command)
    if not argv:
        raise SemanticError("--semantic-command vazio.")
    try:
        result = subprocess.run(
            argv,
            input=json.dumps(payload, ensure_ascii=False),
            capture_output=True,
            text=True,
            timeout=timeout,
        )
    except subprocess.TimeoutExpired as exc:
        raise SemanticError(f"Timeout de {timeout}s no comando semântico.") from exc
    except OSError as exc:
        raise SemanticError(f"Falha ao executar o comando semântico: {exc}") from exc

    if result.returncode != 0:
        raise SemanticError(
            f"Comando semântico saiu com código {result.returncode}: "
            f"{(result.stderr or '').strip()[:300]}"
        )
    return _extract_json(result.stdout)


def _run_http(
    endpoint: str,
    model: str,
    api_key_env: str,
    payload: dict[str, Any],
    timeout: int,
) -> Any:
    import requests  # dependência já declarada em requirements.txt

    api_key = os.environ.get(api_key_env, "").strip()
    if not api_key:
        raise SemanticError(f"Variável de ambiente {api_key_env} não definida.")
    if not endpoint:
        raise SemanticError("--semantic-endpoint é obrigatório no provedor http.")

    user_content = (
        f"SLIDE ({payload['slide_id']}):\n{payload['slide_text']}\n\n"
        f"FONTE ({payload['source_path']}) — DIFF:\n{payload['source_diff']}\n\n"
        f"FONTE — TRECHO ATUAL:\n{payload['source_text']}"
    )
    body = {
        "model": model,
        "temperature": 0,
        "messages": [
            {"role": "system", "content": PROMPT},
            {"role": "user", "content": user_content},
        ],
    }
    auth_scheme = "Bearer"
    try:
        response = requests.post(
            endpoint,
            headers={
                "Authorization": auth_scheme + " " + api_key,
                "Content-Type": "application/json",
            },
            json=body,
            timeout=timeout,
        )
    except requests.RequestException as exc:
        raise SemanticError(f"Falha HTTP no provedor semântico: {exc}") from exc

    if response.status_code >= 400:
        raise SemanticError(
            f"Provedor semântico respondeu {response.status_code}: "
            f"{response.text[:300]}"
        )

    try:
        content = response.json()["choices"][0]["message"]["content"]
    except (ValueError, KeyError, IndexError, TypeError) as exc:
        raise SemanticError(f"Resposta HTTP em formato inesperado: {exc}") from exc

    return _extract_json(content)


def evaluate(
    payload: dict[str, Any],
    provider: str,
    command: str | None = None,
    endpoint: str | None = None,
    model: str = "",
    api_key_env: str = "LLM_API_KEY",
    timeout: int = 60,
) -> dict[str, Any]:
    """
    Avalia um par (slide, fonte). Nunca levanta exceção: qualquer falha vira
    um veredito `unknown`, que faz o chamador abrir a issue.
    """
    if provider == PROVIDER_NONE:
        return unknown_verdict(
            "Provedor semântico desativado (--semantic-provider none).", provider
        )

    try:
        if provider == PROVIDER_COMMAND:
            raw = _run_command(command or "", payload, timeout)
        elif provider == PROVIDER_HTTP:
            raw = _run_http(endpoint or "", model, api_key_env, payload, timeout)
        else:
            return unknown_verdict(f"Provedor desconhecido: {provider!r}.", provider)
    except SemanticError as exc:
        return unknown_verdict(str(exc), provider)
    except Exception as exc:  # rede/SDK/parse — fail-open é obrigatório aqui
        return unknown_verdict(f"Falha inesperada no provedor: {exc}", provider)

    return normalize_verdict(raw, provider, model)


def combine_verdicts(verdicts: list[dict[str, Any]]) -> str:
    """
    Veredito do slide a partir dos vereditos por fonte.

    `unknown` domina (abre issue), depois `divergent`; só é `not_divergent`
    quando **todas** as fontes concordam que não há divergência.
    """
    if not verdicts:
        return VERDICT_UNKNOWN
    values = {v.get("verdict", VERDICT_UNKNOWN) for v in verdicts}
    if VERDICT_UNKNOWN in values:
        return VERDICT_UNKNOWN
    if VERDICT_DIVERGENT in values:
        return VERDICT_DIVERGENT
    return VERDICT_NOT_DIVERGENT
