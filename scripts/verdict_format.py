#!/usr/bin/env python3
"""
verdict_format.py — Contrato do veredito semântico registrado na issue.

Antes, o corpo da issue pedia em prosa que o agente avaliasse o impacto e,
"se não afetar, comente e feche". Não havia formato, então não havia como
verificar. Este módulo define o formato exigido e o validador usado por
scripts/freshness_verdict.py para aceitar (ou recusar) o fechamento de uma
issue `slide-stale`.

Formato exigido no comentário:

    Veredito: não afeta
    Trecho do slide: "<texto citado do slide>"
    Trecho da fonte: "<texto citado da documentação>"

É compartilhado por check_slides_freshness.py (que imprime o formato na
issue) e por freshness_verdict.py (que o valida) para que os dois lados não
possam divergir.
"""

from __future__ import annotations

import re
import unicodedata

VERDICT_AFFECTS = "afeta"
VERDICT_NOT_AFFECTS = "nao afeta"

LABEL_VERDICT = "Veredito"
LABEL_SLIDE_EXCERPT = "Trecho do slide"
LABEL_SOURCE_EXCERPT = "Trecho da fonte"

# Tamanho mínimo de um trecho citado. Evita aceitar "n/a", "-" ou aspas vazias
# como se fossem uma comparação real.
MIN_EXCERPT_CHARS = 12

RESPONSE_TEMPLATE = f"""{LABEL_VERDICT}: não afeta
{LABEL_SLIDE_EXCERPT}: "<frase citada literalmente do slide>"
{LABEL_SOURCE_EXCERPT}: "<frase citada literalmente da documentação>"
"""


def _normalize(text: str) -> str:
    """Minúsculas sem acento, para comparar rótulos e vereditos."""
    decomposed = unicodedata.normalize("NFD", text.lower())
    return "".join(ch for ch in decomposed if unicodedata.category(ch) != "Mn").strip()


def _field(text: str, label: str) -> str | None:
    """Extrai o valor de um rótulo `Label: valor` (uma linha, sem acento/caixa)."""
    wanted = _normalize(label)
    for line in text.splitlines():
        stripped = line.strip().lstrip("*-> ").strip()
        if ":" not in stripped:
            continue
        raw_label, _, value = stripped.partition(":")
        if _normalize(raw_label.replace("*", "").replace("`", "")) != wanted:
            continue
        cleaned = value.strip().strip("*").strip().strip("`").strip()
        cleaned = re.sub(r'^["“”\']|["“”\']$', "", cleaned).strip()
        if cleaned:
            return cleaned
    return None


def _is_placeholder(text: str) -> bool:
    """Detecta o texto de exemplo do próprio template (`<frase citada...>`)."""
    stripped = text.strip()
    return stripped.startswith("<") and stripped.endswith(">")


def parse_verdict(text: str) -> dict[str, str] | None:
    """
    Interpreta um comentário no formato exigido.

    Devolve {"verdict": "afeta"|"nao afeta", "slide_excerpt", "source_excerpt"}
    ou None se o comentário não seguir o contrato (rótulo ausente, veredito
    desconhecido, trecho curto demais ou o placeholder do próprio template).
    """
    if not text:
        return None

    raw_verdict = _field(text, LABEL_VERDICT)
    if not raw_verdict:
        return None

    normalized = _normalize(raw_verdict)
    if normalized in {VERDICT_NOT_AFFECTS, "not affected", "does not affect"}:
        verdict = VERDICT_NOT_AFFECTS
    elif normalized in {VERDICT_AFFECTS, "affects"}:
        verdict = VERDICT_AFFECTS
    else:
        return None

    slide_excerpt = _field(text, LABEL_SLIDE_EXCERPT)
    source_excerpt = _field(text, LABEL_SOURCE_EXCERPT)
    if not slide_excerpt or not source_excerpt:
        return None
    if len(slide_excerpt) < MIN_EXCERPT_CHARS or len(source_excerpt) < MIN_EXCERPT_CHARS:
        return None
    if _is_placeholder(slide_excerpt) or _is_placeholder(source_excerpt):
        return None

    return {
        "verdict": verdict,
        "slide_excerpt": slide_excerpt,
        "source_excerpt": source_excerpt,
    }


def rejection_message(slide_id: str) -> str:
    """Comentário postado quando uma issue é fechada sem o veredito exigido."""
    return (
        f"Reabrindo automaticamente: o slide `{slide_id}` continua marcado como "
        "pendente porque o fechamento não trouxe o veredito no formato exigido.\n\n"
        "Para fechar esta issue sem alterar o slide, comente citando os dois "
        "trechos comparados e feche novamente:\n\n"
        f"```\n{RESPONSE_TEMPLATE}```\n"
        "Se o slide **precisa** mudar, edite o `content.md`, rode o build e abra "
        "um Pull Request que referencie esta issue — nesse caso o merge fecha o "
        "ciclo automaticamente."
    )
