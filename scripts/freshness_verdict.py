#!/usr/bin/env python3
"""
freshness_verdict.py — Fecha o ciclo de estado das issues `slide-stale`.

O checker (scripts/check_slides_freshness.py) só sabe abrir a issue e marcar
o slide como `pending`. As transições `pending → ok` e `pending → stale`
estavam documentadas mas não existiam: nenhum workflow escutava `issues` ou
`pull_request`. Este script é a metade que faltava (camada B do modelo de
duas camadas), acionado por .github/workflows/freshness-verdict.yml.

Regras implementadas:

- **Issue fechada** com um comentário no formato de verdict_format:
  - `Veredito: não afeta` + os dois trechos citados → `pending → ok`.
  - `Veredito: afeta` → só é aceito se o `content_md` do slide tiver sido
    modificado depois da abertura da issue (o slide precisava mudar e mudou);
    caso contrário a issue é reaberta.
  - sem veredito válido → a issue é **reaberta** com o critério explicado.
  Comentários do próprio bot (`github-actions`) são ignorados, para que a
  mensagem de recusa — que contém o template — não seja lida como veredito.
- **Issue reaberta** → o slide volta para `stale` (o ciclo não terminou).
- **PR fechado** que referencia uma issue `slide-stale`:
  - com merge → `pending → ok` e `last_pr_number` registrado;
  - sem merge → `pending → stale` (o slide continua desatualizado).

O script nunca escreve no estado sem ter identificado o `slide_id`; qualquer
issue fora do contrato é ignorada com aviso, para não corromper a baseline.
"""

from __future__ import annotations

import argparse
import json
import os
import subprocess
import sys
from datetime import datetime, timezone
from typing import Any

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import verdict_format  # noqa: E402

try:
    import yaml
except ImportError:  # pragma: no cover
    yaml = None

ISSUE_TITLE_PREFIX = "Slide desatualizado: "
BOT_AUTHORS = {"github-actions", "github-actions[bot]"}


def gh(*args: str, check: bool = True) -> str:
    result = subprocess.run(["gh", *args], capture_output=True, text=True)
    if check and result.returncode != 0:
        raise RuntimeError(f"gh command failed: {' '.join(args)}\n{result.stderr}")
    return result.stdout.strip()


def load_json_file(path: str) -> dict[str, Any]:
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def save_state(path: str, state: dict[str, Any]) -> None:
    with open(path, "w", encoding="utf-8") as f:
        json.dump(state, f, ensure_ascii=False, indent=2)
        f.write("\n")


def slide_id_from_title(title: str) -> str | None:
    if not title or not title.startswith(ISSUE_TITLE_PREFIX):
        return None
    slide_id = title[len(ISSUE_TITLE_PREFIX):].strip()
    return slide_id or None


def resolve_slide_id(state: dict[str, Any], issue_number: int, title: str) -> str | None:
    """Prefere o vínculo registrado no estado; cai para o título como reserva."""
    for slide_id, entry in (state.get("slides") or {}).items():
        if entry.get("issue_number") == issue_number:
            return slide_id
    return slide_id_from_title(title)


def content_md_for(manifest_path: str, slide_id: str) -> str | None:
    if yaml is None or not os.path.isfile(manifest_path):
        return None
    with open(manifest_path, encoding="utf-8") as f:
        manifest = yaml.safe_load(f) or {}
    for entry in manifest.get("slides", []) or []:
        if entry.get("slide_id") == slide_id:
            return entry.get("content_md")
    return None


def content_changed_since(content_md: str, since_iso: str) -> bool:
    """O arquivo do slide foi tocado depois da abertura da issue?"""
    if not content_md or not os.path.isfile(content_md):
        return False
    out = subprocess.run(
        ["git", "log", "--format=%H", f"--since={since_iso}", "--", content_md],
        capture_output=True, text=True,
    )
    return bool(out.stdout.strip())


def find_verdict_comment(comments: list[dict[str, Any]]) -> dict[str, str] | None:
    """Último comentário humano/agente que satisfaz o contrato."""
    for comment in reversed(comments or []):
        author = ((comment.get("author") or {}).get("login") or "").lower()
        if author in BOT_AUTHORS:
            continue
        parsed = verdict_format.parse_verdict(comment.get("body") or "")
        if parsed:
            return parsed
    return None


def update_slide(
    state: dict[str, Any],
    slide_id: str,
    decision: str,
    extra: dict[str, Any] | None = None,
) -> bool:
    slides = state.setdefault("slides", {})
    entry = slides.get(slide_id)
    if entry is None:
        print(f"[aviso] slide_id {slide_id!r} não está no estado; nada a fazer.")
        return False
    entry["last_decision"] = decision
    entry["updated_at"] = datetime.now(timezone.utc).isoformat()
    if extra:
        entry.update(extra)
    slides[slide_id] = entry
    return True


def handle_issue_closed(args: argparse.Namespace, state: dict[str, Any]) -> bool:
    raw = gh(
        "issue", "view", str(args.issue), "--repo", args.repo,
        "--json", "number,title,labels,comments,createdAt,state",
    )
    issue = json.loads(raw or "{}")
    labels = {label.get("name") for label in issue.get("labels") or []}
    if "slide-stale" not in labels:
        print(f"Issue #{args.issue} não tem o label slide-stale; ignorando.")
        return False

    slide_id = resolve_slide_id(state, issue.get("number", args.issue), issue.get("title", ""))
    if not slide_id:
        print(f"[aviso] não foi possível mapear a issue #{args.issue} para um slide_id.")
        return False

    parsed = find_verdict_comment(issue.get("comments") or [])
    rejection_reason = None

    if not parsed:
        rejection_reason = verdict_format.rejection_message(slide_id)
    elif parsed["verdict"] == verdict_format.VERDICT_AFFECTS:
        content_md = content_md_for(args.manifest, slide_id) or ""
        if not content_changed_since(content_md, issue.get("createdAt", "")):
            rejection_reason = (
                f"Reabrindo automaticamente: o veredito para `{slide_id}` foi "
                "**afeta**, mas nenhuma alteração em "
                f"`{content_md or 'content.md'}` foi encontrada depois da abertura "
                "desta issue.\n\nEdite o `content.md`, rode "
                "`node build.js --deck <deck-dir>` e abra um Pull Request que "
                "referencie esta issue — ou corrija o veredito para "
                "`não afeta` citando os trechos comparados."
            )

    if rejection_reason:
        if not args.dry_run:
            gh("issue", "reopen", str(args.issue), "--repo", args.repo, check=False)
            gh("issue", "comment", str(args.issue), "--repo", args.repo,
               "--body", rejection_reason)
        print(f"Issue #{args.issue} reaberta: veredito de fechamento não aceito.")
        update_slide(state, slide_id, "stale")
        return True

    changed = update_slide(
        state, slide_id, "ok",
        {
            "last_verdict": {
                "verdict": parsed["verdict"],
                "slide_excerpt": parsed["slide_excerpt"],
                "source_excerpt": parsed["source_excerpt"],
                "issue_number": issue.get("number", args.issue),
                "recorded_at": datetime.now(timezone.utc).isoformat(),
            },
        },
    )
    print(f"Slide {slide_id}: veredito '{parsed['verdict']}' aceito; estado → ok.")
    return changed


def handle_issue_reopened(args: argparse.Namespace, state: dict[str, Any]) -> bool:
    raw = gh(
        "issue", "view", str(args.issue), "--repo", args.repo,
        "--json", "number,title,labels",
    )
    issue = json.loads(raw or "{}")
    labels = {label.get("name") for label in issue.get("labels") or []}
    if "slide-stale" not in labels:
        return False
    slide_id = resolve_slide_id(state, issue.get("number", args.issue), issue.get("title", ""))
    if not slide_id:
        return False
    print(f"Slide {slide_id}: issue reaberta; estado → stale.")
    return update_slide(state, slide_id, "stale")


def handle_pr_closed(args: argparse.Namespace, state: dict[str, Any]) -> bool:
    raw = gh(
        "pr", "view", str(args.pr), "--repo", args.repo,
        "--json", "number,state,closingIssuesReferences",
    )
    pr = json.loads(raw or "{}")
    merged = pr.get("state") == "MERGED"
    references = pr.get("closingIssuesReferences") or []
    if not references:
        print(f"PR #{args.pr} não referencia nenhuma issue; ignorando.")
        return False

    changed = False
    for ref in references:
        issue_number = ref.get("number")
        if issue_number is None:
            continue
        issue_raw = gh(
            "issue", "view", str(issue_number), "--repo", args.repo,
            "--json", "number,title,labels", check=False,
        )
        issue = json.loads(issue_raw or "{}")
        labels = {label.get("name") for label in issue.get("labels") or []}
        if "slide-stale" not in labels:
            continue
        slide_id = resolve_slide_id(state, issue_number, issue.get("title", ""))
        if not slide_id:
            continue
        if merged:
            changed |= update_slide(
                state, slide_id, "ok", {"last_pr_number": pr.get("number", args.pr)}
            )
            print(f"Slide {slide_id}: PR #{args.pr} mergeado; estado → ok.")
        else:
            changed |= update_slide(
                state, slide_id, "stale", {"last_pr_number": pr.get("number", args.pr)}
            )
            print(f"Slide {slide_id}: PR #{args.pr} fechado sem merge; estado → stale.")
    return changed


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Aplica o veredito das issues slide-stale ao freshness state."
    )
    parser.add_argument(
        "--event", required=True,
        choices=["issue-closed", "issue-reopened", "pr-closed"],
        help="Evento que disparou a execução.",
    )
    parser.add_argument("--repo", required=True, help="owner/repo")
    parser.add_argument("--issue", type=int, help="Número da issue (eventos de issue).")
    parser.add_argument("--pr", type=int, help="Número do PR (evento de PR).")
    parser.add_argument(
        "--state", default="decks/.freshness-state.json",
        help="Caminho do .freshness-state.json",
    )
    parser.add_argument(
        "--manifest", default="decks/.freshness-manifest.generated.yml",
        help="Manifesto usado para localizar o content_md do slide.",
    )
    parser.add_argument(
        "--dry-run", action="store_true",
        help="Não chama gh para reabrir/comentar (o estado ainda é escrito).",
    )
    args = parser.parse_args()

    if args.event.startswith("issue") and args.issue is None:
        parser.error("--issue é obrigatório para eventos de issue.")
    if args.event == "pr-closed" and args.pr is None:
        parser.error("--pr é obrigatório para o evento de PR.")

    if not os.path.isfile(args.state):
        print(f"[erro] estado não encontrado: {args.state}", file=sys.stderr)
        return 1

    state = load_json_file(args.state)

    if args.event == "issue-closed":
        changed = handle_issue_closed(args, state)
    elif args.event == "issue-reopened":
        changed = handle_issue_reopened(args, state)
    else:
        changed = handle_pr_closed(args, state)

    if changed:
        save_state(args.state, state)
        print(f"Estado atualizado: {args.state}")
    else:
        print("Nenhuma alteração de estado.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
