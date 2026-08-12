#!/usr/bin/env python3
"""
check_slides_freshness.py — Per-slide freshness check based on declarative manifest.

Duas camadas, nesta ordem:

  1. Piso determinístico (inalterado): git diff entre o commit registrado e o
     atual, restrito às fontes do slide, com extração opcional por
     source_headings e fallback para texto completo quando o diff passa de
     200 linhas ou 40% do arquivo. É o gatilho barato de "algo mudou".
  2. Camada semântica (opcional, fail-open): só roda depois de (1) disparar.
     Compara o texto real do slide (lido de content_md) com a mudança da
     fonte e pode suprimir a issue quando não há divergência factual.
     Ver scripts/semantic_freshness.py.

Reads decks/.freshness-manifest.generated.yml (manifest_version 1 ou 2),
computes git diff for each slide's source, and creates/updates individual
GitHub issues per stale slide_id.

State file: decks/.freshness-state.json (state_version: 2; lê a versão 1)
  - Entries indexed by slide_id
  - Fields: source, source_headings, last_checked_docs_commit, last_decision,
            issue_number, last_pr_number, updated_at, semantic

last_decision transitions:
  ok        -> stale      : source changed since last recorded commit
  stale     -> pending    : issue created/updated, assigned to Copilot agent
  stale     -> suppressed : avaliação semântica concluiu que não há divergência
  pending   -> ok         : veredito aceito por scripts/freshness_verdict.py
  pending   -> stale      : PR closed without merge (freshness_verdict.py)

Exit codes:
  0 -> all slides up to date (or pending/stale/suppressed already tracked)
  1 -> configuration/runtime error
  2 -> new stale slides detected this run
"""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
from datetime import datetime, timezone
from typing import Any

import yaml

import semantic_freshness
import verdict_format
from deck_content import ContentError, find_slide_block, slide_text

KNOWN_STATE_VERSION = 2
SUPPORTED_STATE_VERSIONS = (1, 2)
SUPPORTED_MANIFEST_VERSIONS = (1, 2)

# Limites de truncamento por bloco do corpo da issue. O corte é por bloco (e
# não um corte único no fim do payload) justamente para que a mudança da fonte
# não seja descartada por causa do tamanho do texto do slide, e vice-versa.
MAX_SLIDE_TEXT_CHARS = 4000
MAX_DIFF_CHARS = 6000
MAX_EXCERPT_CHARS = 4000
# Limite total dos blocos de fonte (o corpo de uma issue do GitHub para em
# 65536 caracteres; a folga cobre cabeçalhos e instruções).
MAX_SOURCE_BLOCKS_CHARS = 40000

# Orçamento padrão de chamadas semânticas por execução.
DEFAULT_SEMANTIC_MAX_CALLS = 20


# ─────────────────────────────────────────────────────────────────────────────
# Git helpers
# ─────────────────────────────────────────────────────────────────────────────

def git_current_commit() -> str | None:
    result = subprocess.run(
        ["git", "rev-parse", "HEAD"],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        return None
    return result.stdout.strip()


def git_file_at_commit(commit: str, path: str) -> str | None:
    """Return file content at a specific commit, or None if unavailable."""
    result = subprocess.run(
        ["git", "show", f"{commit}:{path}"],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        return None
    return result.stdout


def git_diff_file(old_commit: str, new_commit: str, path: str) -> str | None:
    """Return unified diff for a file between two commits."""
    result = subprocess.run(
        ["git", "diff", old_commit, new_commit, "--", path],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        return None
    return result.stdout


def count_file_lines(path: str) -> int:
    try:
        with open(path, "r", encoding="utf-8") as f:
            return sum(1 for _ in f)
    except OSError:
        return 0


# ─────────────────────────────────────────────────────────────────────────────
# Text extraction helpers
# ─────────────────────────────────────────────────────────────────────────────

def extract_heading_sections(md_text: str, headings: list[str]) -> str:
    wanted = {h.strip().lower() for h in headings if h.strip()}
    if not wanted:
        return ""
    lines = md_text.splitlines()
    heading_re = re.compile(r"^(#{1,6})\s+(.+?)\s*$")
    chunks = []
    for i, line in enumerate(lines):
        m = heading_re.match(line)
        if not m or m.group(2).strip().lower() not in wanted:
            continue
        level = len(m.group(1))
        end = len(lines)
        for j in range(i + 1, len(lines)):
            nm = heading_re.match(lines[j])
            if nm and len(nm.group(1)) <= level:
                end = j
                break
        chunk = "\n".join(lines[i:end]).strip()
        if chunk:
            chunks.append(chunk)
    return "\n\n".join(chunks)


def read_relevant_text(path: str, source_headings: list[str] | None) -> str | None:
    if not os.path.isfile(path):
        return None
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    if source_headings:
        extracted = extract_heading_sections(text, source_headings)
        if extracted:
            return extracted
        # Heading disappeared → fallback to full text
    return text


def compute_diff_content(
    old_commit: str,
    current_commit: str,
    source_path: str,
    source_headings: list[str] | None,
) -> tuple[str, bool]:
    """
    Returns (diff_or_text, is_fallback).
    Uses full text as fallback when:
    - file doesn't exist at old commit
    - diff > 200 lines or > 40% of file lines
    - selected heading disappeared
    """
    total_lines = count_file_lines(source_path)
    diff = git_diff_file(old_commit, current_commit, source_path)
    fallback = False

    if not diff:
        # No git diff output means no change — shouldn't reach here
        return "", False

    diff_lines = diff.splitlines()
    changed_lines = sum(1 for l in diff_lines if l.startswith(("+", "-")) and not l.startswith(("---", "+++")))

    if changed_lines > 200 or (total_lines > 0 and changed_lines / total_lines > 0.40):
        fallback = True

    if fallback or not source_headings:
        current_text = read_relevant_text(source_path, source_headings if not fallback else None)
        return current_text or diff, True

    # Try to extract diff limited to heading sections
    old_content = git_file_at_commit(old_commit, source_path)
    if old_content is None:
        return read_relevant_text(source_path, None) or diff, True

    old_section = extract_heading_sections(old_content, source_headings) if source_headings else old_content
    new_section = extract_heading_sections(open(source_path).read(), source_headings) if source_headings else open(source_path).read()

    if not new_section:
        # Heading disappeared
        return read_relevant_text(source_path, None) or diff, True

    if old_section == new_section:
        # No change in relevant section
        return "", False

    return f"Seção anterior:\n{old_section}\n\nSeção atual:\n{new_section}", False


# ─────────────────────────────────────────────────────────────────────────────
# State helpers
# ─────────────────────────────────────────────────────────────────────────────

def load_state(path: str) -> dict[str, Any]:
    if not os.path.isfile(path):
        return {"state_version": KNOWN_STATE_VERSION, "slides": {}}
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    version = data.get("state_version")
    if version not in SUPPORTED_STATE_VERSIONS:
        print(
            f"[erro] state_version desconhecida: {version!r}. "
            f"Suportadas: {', '.join(str(v) for v in SUPPORTED_STATE_VERSIONS)}",
            file=sys.stderr,
        )
        sys.exit(1)
    # Versão 1 é lida sem conversão: os campos novos (semantic) são opcionais e
    # o arquivo é regravado como versão 2 na primeira escrita.
    data["state_version"] = KNOWN_STATE_VERSION
    return data


def save_state(path: str, data: dict[str, Any]) -> None:
    os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")


def load_manifest(path: str) -> dict[str, Any]:
    if not os.path.isfile(path):
        raise ValueError(f"Manifesto não encontrado: {path}")
    with open(path, "r", encoding="utf-8") as f:
        data = yaml.safe_load(f) or {}
    if data.get("manifest_version") not in SUPPORTED_MANIFEST_VERSIONS:
        raise ValueError(
            f"manifest_version desconhecida: {data.get('manifest_version')!r}. "
            f"Suportadas: {', '.join(str(v) for v in SUPPORTED_MANIFEST_VERSIONS)}"
        )
    if not isinstance(data.get("slides"), list):
        raise ValueError("Manifesto inválido: 'slides' deve ser uma lista.")
    return data


def slide_sources(slide_entry: dict[str, Any]) -> list[dict[str, Any]]:
    """
    Normaliza as fontes de um slide em [{path, headings}].

    Aceita as duas formas do manifesto:
      - manifest_version 1: `source` (str ou lista) + `source_headings` global
      - manifest_version 2: `sources` (lista de {path, headings}), com headings
        próprios por fonte
    """
    raw_sources = slide_entry.get("sources")
    if raw_sources is not None:
        if not isinstance(raw_sources, list) or not raw_sources:
            raise ValueError("Entrada no manifesto com 'sources' inválido: esperado lista não vazia.")
        normalized: list[dict[str, Any]] = []
        for i, item in enumerate(raw_sources):
            if isinstance(item, str):
                path = item.strip()
                if not path:
                    raise ValueError(f"Entrada no manifesto com sources[{i}] vazio.")
                normalized.append({"path": path, "headings": None})
                continue
            if not isinstance(item, dict):
                raise ValueError(f"Entrada no manifesto com sources[{i}] inválido: esperado string ou objeto.")
            path = str(item.get("path") or "").strip()
            if not path:
                raise ValueError(f"Entrada no manifesto com sources[{i}].path vazio.")
            headings = item.get("headings")
            if isinstance(headings, str):
                headings = [headings]
            elif headings is not None:
                headings = list(headings)
            normalized.append({"path": path, "headings": list(headings) if headings else None})
        return normalized

    raw_source = slide_entry.get("source")
    if not raw_source:
        return []
    paths = [raw_source] if isinstance(raw_source, str) else list(raw_source)

    raw_headings = slide_entry.get("source_headings")
    if isinstance(raw_headings, str):
        headings = [raw_headings]
    elif raw_headings:
        headings = list(raw_headings)
    else:
        headings = None

    return [{"path": path, "headings": headings} for path in paths]


# ─────────────────────────────────────────────────────────────────────────────
# GitHub issue helpers
# ─────────────────────────────────────────────────────────────────────────────

def gh(*args: str, check: bool = True) -> str:
    result = subprocess.run(["gh", *args], capture_output=True, text=True)
    if check and result.returncode != 0:
        raise RuntimeError(f"gh command failed: {' '.join(args)}\n{result.stderr}")
    return result.stdout.strip()


def ensure_label(repo: str) -> None:
    subprocess.run(
        ["gh", "label", "create", "slide-stale",
         "--repo", repo,
         "--color", "FBCA04",
         "--description", "Slide HTML desatualizado em relação à fonte Markdown",
         "--force"],
        capture_output=True,
    )


def find_issue_by_title(repo: str, title: str) -> int | None:
    out = gh(
        "issue", "list",
        "--repo", repo,
        "--state", "open",
        "--label", "slide-stale",
        "--search", f'"{title}" in:title',
        "--json", "number,title",
    )
    items = json.loads(out or "[]")
    for item in items:
        if item.get("title") == title:
            return item["number"]
    return None


def create_or_update_issue(
    repo: str,
    slide_id: str,
    body: str,
    issue_number: int | None,
    copilot_assignee: str | None,
) -> tuple[int, str]:
    """
    Cria a issue do slide ou atualiza a existente. Devolve (número, ação).

    Em uma issue já existente não basta comentar: o agente recebe título,
    descrição e comentários **no momento da atribuição** e não vê comentários
    posteriores. Por isso a atualização reescreve o corpo (payload novo) e
    reatribui o assignee, forçando uma nova sessão do agente.
    """
    title = f"Slide desatualizado: {slide_id}"

    if issue_number is None:
        issue_number = find_issue_by_title(repo, title)

    if issue_number is not None:
        gh("issue", "edit", str(issue_number), "--repo", repo, "--body", body)
        gh(
            "issue", "comment", str(issue_number), "--repo", repo,
            "--body",
            "Nova alteração detectada na fonte. O corpo da issue foi atualizado "
            "com o payload mais recente e o agente foi reatribuído.",
        )
        if copilot_assignee:
            reassign_issue(repo, issue_number, copilot_assignee)
        return issue_number, "updated"

    create_args = [
        "issue", "create",
        "--repo", repo,
        "--title", title,
        "--label", "slide-stale",
        "--body", body,
    ]
    if copilot_assignee:
        create_args += ["--assignee", copilot_assignee]

    out = gh(*create_args)
    # Extract number from URL like https://github.com/owner/repo/issues/42
    m = re.search(r"/issues/(\d+)$", out)
    if m:
        return int(m.group(1)), "created"
    # Fallback: search by title
    num = find_issue_by_title(repo, title)
    return num or 0, "created"


def reassign_issue(repo: str, issue_number: int, assignee: str) -> None:
    """Remove e readiciona o assignee para disparar uma nova sessão do agente."""
    gh(
        "issue", "edit", str(issue_number), "--repo", repo,
        "--remove-assignee", assignee, check=False,
    )
    gh("issue", "edit", str(issue_number), "--repo", repo, "--add-assignee", assignee)


def fence_for(text: str) -> str:
    """Cerca de código maior que qualquer sequência de crases dentro do texto."""
    longest = max((len(run) for run in re.findall(r"`+", text)), default=0)
    return "`" * max(3, longest + 1)


def truncate_block(text: str, limit: int) -> str:
    """Trunca um bloco isoladamente, marcando explicitamente o que foi omitido."""
    text = text or ""
    if len(text) <= limit:
        return text
    omitted = len(text) - limit
    return f"{text[:limit]}\n[... truncado: {omitted} caractere(s) omitido(s) ...]"


def code_block(text: str, language: str = "") -> str:
    fence = fence_for(text)
    return f"{fence}{language}\n{text}\n{fence}"


def build_issue_body(
    slide_id: str,
    content_md: str,
    slide_text_value: str | None,
    slide_text_error: str | None,
    source_changes: list[dict[str, Any]],
) -> str:
    """
    Corpo da issue com três blocos rotulados: texto atual do slide, diff
    unificado real da fonte e trecho da fonte usado pela regra determinística.

    O truncamento é por bloco: antes, um corte único no fim do payload podia
    descartar justamente a alteração da fonte.
    """
    if slide_text_value:
        slide_block = code_block(
            truncate_block(slide_text_value, MAX_SLIDE_TEXT_CHARS), "markdown"
        )
    else:
        slide_block = (
            "> **Não foi possível ler o texto do slide.** "
            f"{slide_text_error or 'Motivo desconhecido.'}\n>\n"
            f"> Abra `{content_md}` e localize o bloco `slide_id: {slide_id}` manualmente."
        )

    per_source_budget = MAX_SOURCE_BLOCKS_CHARS // max(1, len(source_changes))
    diff_limit = min(MAX_DIFF_CHARS, max(1000, int(per_source_budget * 0.6)))
    excerpt_limit = min(MAX_EXCERPT_CHARS, max(800, int(per_source_budget * 0.4)))

    source_sections = []
    for change in source_changes:
        path = change.get("path", "?")
        headings = change.get("headings")
        scope = (
            f"seções `{'`, `'.join(headings)}`" if headings else "arquivo inteiro"
        )
        section = [f"#### `{path}`", "", f"Escopo declarado: {scope} · Modo: `{change.get('kind')}`", ""]

        diff = change.get("diff") or ""
        if diff.strip():
            section += [
                "**Diff unificado da fonte:**",
                "",
                code_block(truncate_block(diff, diff_limit), "diff"),
                "",
            ]

        excerpt = change.get("excerpt") or ""
        if excerpt.strip():
            section += [
                "**Trecho atual da fonte (usado pela regra determinística):**",
                "",
                code_block(truncate_block(excerpt, excerpt_limit), "markdown"),
                "",
            ]
        source_sections.append("\n".join(section))

    sources_block = "\n".join(source_sections) or "_Nenhuma alteração de fonte registrada._"
    deck_dir = os.path.dirname(content_md) or "decks/<deck>"

    return f"""## Slide desatualizado: `{slide_id}`

**Arquivo de conteúdo:** `{content_md}`
**Slide ID:** `{slide_id}`

### 1. Texto atual do slide

{slide_block}

### 2. Alterações detectadas na fonte

{sources_block}

---

**Instrução para o GitHub Copilot coding agent:**

Compare o texto do slide (bloco 1) com a alteração da fonte (bloco 2) e decida se o slide ficou factualmente errado.

- Se o conteúdo do slide precisar ser atualizado, edite **apenas** `{content_md}` (não edite `index.html` diretamente), execute `node build.js --deck {deck_dir}` para regenerar o `index.html` e abra um Pull Request que referencie esta issue.
- Se as alterações **não** afetarem o slide, comente nesta issue **no formato abaixo** e feche-a. O fechamento é validado automaticamente: sem os dois trechos citados, a issue é reaberta.

{code_block(verdict_format.RESPONSE_TEMPLATE)}
"""


# ─────────────────────────────────────────────────────────────────────────────
# Source change detection
# ─────────────────────────────────────────────────────────────────────────────

def sources_changed(
    sources: list[dict[str, Any]],
    last_commit: str | None,
    current_commit: str,
) -> list[dict[str, Any]]:
    """
    Camada determinística (inalterada nas regras): devolve um registro por
    fonte que mudou de forma relevante.

    Cada registro tem {path, headings, kind, diff, excerpt}:
      - `diff`    : diff unificado real do git (o que de fato mudou)
      - `excerpt` : saída de compute_diff_content — seção extraída por heading
                    ou texto completo, conforme as regras de fallback
      - `kind`    : `section` quando a comparação ficou restrita aos headings,
                    `fulltext` quando caiu no fallback, `missing` quando o
                    arquivo-fonte sumiu

    Lista vazia significa "nada relevante mudou".
    """
    if last_commit is None:
        # No baseline — record current state as baseline (not stale)
        return []

    if last_commit == current_commit:
        return []

    changes: list[dict[str, Any]] = []

    for source in sources:
        src_path = source["path"]
        headings = source.get("headings")

        if not os.path.isfile(src_path):
            changes.append({
                "path": src_path,
                "headings": headings,
                "kind": "missing",
                "diff": "",
                "excerpt": f"[AVISO] Arquivo não encontrado: {src_path}",
            })
            continue

        diff = git_diff_file(last_commit, current_commit, src_path)
        if not diff:
            continue  # No change for this source

        # Check if relevant section changed
        diff_content, is_fallback = compute_diff_content(
            last_commit, current_commit, src_path, headings
        )
        if diff_content:
            changes.append({
                "path": src_path,
                "headings": headings,
                "kind": "fulltext" if is_fallback else "section",
                "diff": diff,
                "excerpt": diff_content,
            })

    return changes


# ─────────────────────────────────────────────────────────────────────────────
# Main
# ─────────────────────────────────────────────────────────────────────────────

def _semantic_provider_arg(value: str) -> str:
    """Aceita valor vazio (variável de repositório não definida) como 'none'."""
    provider = (value or "").strip() or semantic_freshness.PROVIDER_NONE
    if provider not in semantic_freshness.PROVIDERS:
        raise argparse.ArgumentTypeError(
            f"provedor inválido: {value!r} "
            f"(esperado: {', '.join(semantic_freshness.PROVIDERS)})"
        )
    return provider


def _positive_int_arg(value: str) -> int:
    """Aceita valor vazio (variável de repositório não definida) como padrão."""
    text = (value or "").strip()
    if not text:
        return DEFAULT_SEMANTIC_MAX_CALLS
    try:
        number = int(text)
    except ValueError as exc:
        raise argparse.ArgumentTypeError(f"valor inteiro inválido: {value!r}") from exc
    if number < 0:
        raise argparse.ArgumentTypeError(f"valor não pode ser negativo: {value!r}")
    return number


def main() -> int:
    parser = argparse.ArgumentParser(description="Per-slide freshness check.")
    parser.add_argument(
        "--manifest", required=True,
        help="Path to .freshness-manifest.generated.yml"
    )
    parser.add_argument(
        "--state", required=True,
        help="Path to .freshness-state.json"
    )
    parser.add_argument(
        "--write-state", action="store_true",
        help="Update state file after processing."
    )
    parser.add_argument(
        "--report-json", help="Write machine-readable report JSON."
    )
    parser.add_argument(
        "--summary-file", help="Write Markdown summary."
    )
    parser.add_argument(
        "--gh-repo", help="GitHub repo (owner/repo) for issue creation."
    )
    parser.add_argument(
        "--gh-token", help="GitHub token (also read from GH_TOKEN env)."
    )
    parser.add_argument(
        "--copilot-assignee",
        default=os.environ.get("COPILOT_ASSIGNEE", ""),
        help="GitHub username for Copilot agent assignment."
    )
    parser.add_argument(
        "--current-commit",
        default=None,
        help="Current git commit SHA (default: HEAD)."
    )
    parser.add_argument(
        "--semantic-provider",
        default=os.environ.get("SEMANTIC_PROVIDER", "") or semantic_freshness.PROVIDER_NONE,
        type=_semantic_provider_arg,
        help="Avaliador semântico usado antes de abrir a issue "
             f"({'|'.join(semantic_freshness.PROVIDERS)}; padrão: none). "
             "Valor vazio é tratado como 'none'."
    )
    parser.add_argument(
        "--semantic-command",
        default=os.environ.get("SEMANTIC_COMMAND", ""),
        help="Programa executado pelo provedor 'command' (payload JSON no stdin)."
    )
    parser.add_argument(
        "--semantic-endpoint",
        default=os.environ.get("SEMANTIC_ENDPOINT", ""),
        help="Endpoint compatível com Chat Completions para o provedor 'http'."
    )
    parser.add_argument(
        "--semantic-model",
        default=os.environ.get("SEMANTIC_MODEL", ""),
        help="Modelo usado pelo provedor 'http'."
    )
    parser.add_argument(
        "--semantic-api-key-env",
        default=os.environ.get("SEMANTIC_API_KEY_ENV", "LLM_API_KEY"),
        help="Nome da variável de ambiente com a chave do provedor 'http'."
    )
    parser.add_argument(
        "--semantic-timeout", type=int, default=60,
        help="Timeout (s) por chamada semântica."
    )
    parser.add_argument(
        "--semantic-max-calls", type=_positive_int_arg,
        default=DEFAULT_SEMANTIC_MAX_CALLS,
        help="Orçamento de chamadas semânticas por execução; estourado, o "
             "restante vira 'unknown' (e portanto abre issue)."
    )
    args = parser.parse_args()

    # Set GH_TOKEN in environment if provided
    if args.gh_token:
        os.environ["GH_TOKEN"] = args.gh_token

    # Resolve current commit
    current_commit = args.current_commit or git_current_commit()
    if not current_commit:
        print("[erro] Não foi possível determinar o commit atual.", file=sys.stderr)
        return 1

    # Load manifest
    try:
        manifest = load_manifest(args.manifest)
    except Exception as exc:
        print(f"[erro] {exc}", file=sys.stderr)
        return 1

    # Load state
    state = load_state(args.state)
    state_slides = state.get("slides", {})
    next_state_slides = dict(state_slides)

    now_iso = datetime.now(timezone.utc).isoformat()
    stale_found: list[dict[str, Any]] = []
    suppressed_found: list[dict[str, Any]] = []
    errors: list[str] = []
    checked = 0
    semantic_calls = 0
    semantic_cached = 0

    # Configuração incompleta do provedor não interrompe a checagem: o gate é
    # fail-open, então o efeito prático é veredito `unknown` e issue aberta.
    # Ainda assim o fato precisa ficar visível no relatório.
    if args.semantic_provider == semantic_freshness.PROVIDER_COMMAND and not args.semantic_command:
        errors.append(
            "--semantic-provider command sem --semantic-command: "
            "todos os vereditos serão 'unknown'."
        )
    if args.semantic_provider == semantic_freshness.PROVIDER_HTTP and not args.semantic_endpoint:
        errors.append(
            "--semantic-provider http sem --semantic-endpoint: "
            "todos os vereditos serão 'unknown'."
        )

    # Ensure label exists if we have gh-repo
    if args.gh_repo:
        try:
            ensure_label(args.gh_repo)
        except Exception:
            pass

    for slide_entry in manifest.get("slides", []):
        slide_id = slide_entry.get("slide_id")
        if not slide_id:
            errors.append("Entrada no manifesto sem slide_id.")
            continue

        sources = slide_sources(slide_entry)
        if not sources:
            continue  # No source — skip freshness check

        content_md = slide_entry.get("content_md", "")

        # Get current state for this slide
        prev = state_slides.get(slide_id, {})
        last_decision = prev.get("last_decision", "ok")
        last_commit = prev.get("last_checked_docs_commit")
        issue_number = prev.get("issue_number")

        checked += 1

        # Camada 1 (determinística): a fonte mudou de forma relevante?
        source_changes = sources_changed(sources, last_commit, current_commit)

        new_state = dict(prev)
        source_paths = [s["path"] for s in sources]
        new_state.update({
            "source": source_paths[0] if len(source_paths) == 1 else source_paths,
            "last_checked_docs_commit": current_commit,
            "updated_at": now_iso,
        })
        per_source_headings = {
            s["path"]: s["headings"] for s in sources if s.get("headings")
        }
        if per_source_headings:
            new_state["source_headings"] = per_source_headings
        else:
            new_state.pop("source_headings", None)
        # Ensure issue_number and last_pr_number are always present (null if not yet set)
        new_state.setdefault("issue_number", None)
        new_state.setdefault("last_pr_number", None)

        if not source_changes:
            # No change — keep current decision (unless pending, which is managed externally)
            if last_decision == "ok":
                new_state["last_decision"] = "ok"
            # pending stays pending until resolved externally
            next_state_slides[slide_id] = new_state
            continue

        # Texto real do slide: sem ele a comparação semântica é impossível.
        slide_text_value: str | None = None
        slide_text_error: str | None = None
        try:
            slide_text_value = slide_text(find_slide_block(content_md, slide_id))
            if not slide_text_value:
                slide_text_error = f"Bloco '{slide_id}' está vazio em {content_md}."
                slide_text_value = None
        except ContentError as exc:
            slide_text_error = str(exc)
        if slide_text_error:
            errors.append(f"Texto do slide indisponível ({slide_id}): {slide_text_error}")

        # Camada 2 (semântica, fail-open): só decide depois da camada 1.
        prev_cache = (prev.get("semantic") or {}).get("sources") or {}
        verdicts: list[dict[str, Any]] = []
        cache_entries: dict[str, Any] = {}

        for change in source_changes:
            cache_key = semantic_freshness.pair_cache_key(
                slide_id, slide_text_value or "", change["path"],
                change.get("diff") or change.get("excerpt") or "",
            )
            cached = prev_cache.get(change["path"])
            if (
                args.semantic_provider != semantic_freshness.PROVIDER_NONE
                and isinstance(cached, dict)
                and cached.get("cache_key") == cache_key
                and cached.get("verdict") in semantic_freshness.VERDICTS
                and cached.get("verdict") != semantic_freshness.VERDICT_UNKNOWN
            ):
                verdict = {k: v for k, v in cached.items() if k != "cache_key"}
                verdict["cached"] = True
                semantic_cached += 1
            elif not slide_text_value:
                verdict = semantic_freshness.unknown_verdict(
                    "Texto do slide indisponível — avaliação semântica não executada.",
                    args.semantic_provider,
                )
            elif (
                args.semantic_provider != semantic_freshness.PROVIDER_NONE
                and semantic_calls >= args.semantic_max_calls
            ):
                verdict = semantic_freshness.unknown_verdict(
                    f"Orçamento de {args.semantic_max_calls} chamada(s) semântica(s) esgotado.",
                    args.semantic_provider,
                )
            else:
                if args.semantic_provider != semantic_freshness.PROVIDER_NONE:
                    semantic_calls += 1
                verdict = semantic_freshness.evaluate(
                    semantic_freshness.build_payload(
                        slide_id, slide_text_value, change["path"],
                        change.get("diff", ""), change.get("excerpt", ""),
                    ),
                    provider=args.semantic_provider,
                    command=args.semantic_command,
                    endpoint=args.semantic_endpoint,
                    model=args.semantic_model,
                    api_key_env=args.semantic_api_key_env,
                    timeout=args.semantic_timeout,
                )

            verdict["source_path"] = change["path"]
            verdicts.append(verdict)
            cache_entries[change["path"]] = {**verdict, "cache_key": cache_key}

        slide_verdict = semantic_freshness.combine_verdicts(verdicts)
        new_state["semantic"] = {
            "verdict": slide_verdict,
            "provider": args.semantic_provider,
            "evaluated_at": now_iso,
            "sources": cache_entries,
        }

        slide_report = {
            "slide_id": slide_id,
            "content_md": content_md,
            "slide_text_found": bool(slide_text_value),
            "source_change_kind": (
                "fulltext" if any(c["kind"] == "fulltext" for c in source_changes)
                else source_changes[0]["kind"]
            ),
            "sources": [
                {"path": c["path"], "kind": c["kind"]} for c in source_changes
            ],
            "semantic_verdict": slide_verdict,
            "semantic_verdicts": [
                {
                    "source_path": v.get("source_path"),
                    "verdict": v.get("verdict"),
                    "confidence": v.get("confidence"),
                    "slide_excerpt": v.get("slide_excerpt"),
                    "source_excerpt": v.get("source_excerpt"),
                    "rationale": v.get("rationale"),
                    "cached": bool(v.get("cached")),
                }
                for v in verdicts
            ],
        }

        if slide_verdict == semantic_freshness.VERDICT_NOT_DIVERGENT:
            # Suprimido: nenhuma issue, mas o veredito fica registrado no estado
            # e no resumo — supressão silenciosa não é aceitável.
            new_state["last_decision"] = "suppressed"
            suppressed_found.append(slide_report)
            next_state_slides[slide_id] = new_state
            continue

        # divergent ou unknown (fail-open) → issue
        stale_found.append(slide_report)
        new_state["last_decision"] = "stale"

        # Create/update issue if gh-repo is configured
        if args.gh_repo:
            try:
                body = build_issue_body(
                    slide_id, content_md, slide_text_value, slide_text_error,
                    source_changes,
                )
                new_issue_number, action = create_or_update_issue(
                    repo=args.gh_repo,
                    slide_id=slide_id,
                    body=body,
                    issue_number=issue_number,
                    copilot_assignee=args.copilot_assignee or None,
                )
                new_state["issue_number"] = new_issue_number
                slide_report["issue_number"] = new_issue_number
                slide_report["issue_action"] = action
                if args.copilot_assignee:
                    new_state["last_decision"] = "pending"
                else:
                    # Sem assignee não há agente para avaliar: o slide continua
                    # `stale` em vez de virar `pending` no vazio.
                    errors.append(
                        f"Issue #{new_issue_number} ({slide_id}) criada sem assignee: "
                        "defina o secret COPILOT_ASSIGNEE para acionar o coding agent."
                    )
            except Exception as exc:
                errors.append(f"Erro ao criar issue para {slide_id}: {exc}")

        next_state_slides[slide_id] = new_state

    # Build report
    report = {
        "checked_count": checked,
        "stale_count": len(stale_found),
        "stale_slides": stale_found,
        "suppressed_count": len(suppressed_found),
        "suppressed_slides": suppressed_found,
        "semantic": {
            "provider": args.semantic_provider,
            "calls": semantic_calls,
            "cache_hits": semantic_cached,
            "max_calls": args.semantic_max_calls,
        },
        "errors": errors,
        "generated_at": now_iso,
    }

    # Write report
    if args.report_json:
        os.makedirs(os.path.dirname(os.path.abspath(args.report_json)), exist_ok=True)
        with open(args.report_json, "w", encoding="utf-8") as f:
            json.dump(report, f, ensure_ascii=False, indent=2)
            f.write("\n")

    if args.summary_file:
        os.makedirs(os.path.dirname(os.path.abspath(args.summary_file)), exist_ok=True)
        with open(args.summary_file, "w", encoding="utf-8") as f:
            f.write(render_summary(report))

    if args.write_state:
        next_state = {"state_version": KNOWN_STATE_VERSION, "slides": next_state_slides}
        save_state(args.state, next_state)

    if errors:
        for err in errors:
            print(f"[erro] {err}", file=sys.stderr)

    if suppressed_found:
        print(
            f"{len(suppressed_found)} slide(s) suprimido(s) pela avaliação semântica."
        )

    if stale_found:
        print(f"{len(stale_found)} slide(s) desatualizado(s) detectado(s).")
        return 2

    print(f"{checked} slide(s) verificado(s). Todos atualizados.")
    return 0


def render_summary(report: dict[str, Any]) -> str:
    stale = report.get("stale_slides", [])
    suppressed = report.get("suppressed_slides", [])
    checked = report.get("checked_count", 0)
    semantic = report.get("semantic", {})
    lines = [
        "# Relatório de desatualização dos slides",
        "",
        f"- Slides verificados: **{checked}**",
        f"- Slides desatualizados: **{len(stale)}**",
        f"- Slides suprimidos pela avaliação semântica: **{len(suppressed)}**",
        f"- Provedor semântico: `{semantic.get('provider', 'none')}` "
        f"(chamadas: {semantic.get('calls', 0)}/{semantic.get('max_calls', 0)}, "
        f"cache: {semantic.get('cache_hits', 0)})",
        "",
    ]

    def verdict_rows(items: list[dict[str, Any]]) -> list[str]:
        rows = [
            "| Slide | Fonte | Modo | Veredito | Trecho do slide | Trecho da fonte | Cache |",
            "| --- | --- | --- | --- | --- | --- | --- |",
        ]
        for item in items:
            slide_id = item.get("slide_id", "?")
            kinds = {s["path"]: s["kind"] for s in item.get("sources", [])}
            for verdict in item.get("semantic_verdicts", []) or [{}]:
                path = verdict.get("source_path", "—")
                rows.append(
                    f"| `{slide_id}` | `{path}` | {kinds.get(path, '—')} | "
                    f"{verdict.get('verdict', '—')} | "
                    f"{_cell(verdict.get('slide_excerpt'))} | "
                    f"{_cell(verdict.get('source_excerpt'))} | "
                    f"{'sim' if verdict.get('cached') else 'não'} |"
                )
        return rows

    if not stale:
        lines.append("Nenhum slide desatualizado foi detectado.")
    else:
        lines.append("## Slides desatualizados")
        lines.append("")
        for item in stale:
            found = "com texto do slide" if item.get("slide_text_found") else "**sem texto do slide**"
            lines.append(
                f"- `{item['slide_id']}` — veredito: `{item.get('semantic_verdict')}` "
                f"({found}, modo `{item.get('source_change_kind')}`)"
            )
        lines.append("")
        lines.append("### Vereditos (desatualizados)")
        lines.append("")
        lines.extend(verdict_rows(stale))

    if suppressed:
        lines.append("")
        lines.append("## Slides suprimidos (sem divergência factual)")
        lines.append("")
        lines.extend(verdict_rows(suppressed))

    errors = report.get("errors", [])
    if errors:
        lines.append("")
        lines.append("## Erros")
        for e in errors:
            lines.append(f"- {e}")
    return "\n".join(lines) + "\n"


def _cell(text: str | None) -> str:
    """Normaliza um trecho citado para caber numa célula de tabela Markdown."""
    if not text:
        return "—"
    flat = " ".join(str(text).split()).replace("|", "\\|")
    return flat if len(flat) <= 120 else flat[:117] + "…"


if __name__ == "__main__":
    sys.exit(main())
