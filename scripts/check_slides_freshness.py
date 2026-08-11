#!/usr/bin/env python3
"""
check_slides_freshness.py — Per-slide freshness check based on declarative manifest.

Reads decks/.freshness-manifest.generated.yml, computes git diff for each slide's
source, and creates/updates individual GitHub issues per stale slide_id.

State file: decks/.freshness-state.json (state_version: 1)
  - Entries indexed by slide_id
  - Fields: source, source_headings, last_checked_docs_commit, last_decision,
            issue_number, last_pr_number, updated_at

last_decision transitions:
  ok     -> stale   : source changed since last recorded commit
  stale  -> pending : issue created/updated, assigned to Copilot agent
  pending -> ok     : PR merged, or comment without change, or manual close (external)
  pending -> stale  : PR closed without merge (external)

Exit codes:
  0 -> all slides up to date (or pending/stale already tracked)
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

KNOWN_STATE_VERSION = 1


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
        return {"state_version": 1, "slides": {}}
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    version = data.get("state_version")
    if version != KNOWN_STATE_VERSION:
        print(
            f"[erro] state_version desconhecida: {version!r}. "
            f"Esperado: {KNOWN_STATE_VERSION}",
            file=sys.stderr,
        )
        sys.exit(1)
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
    if data.get("manifest_version") != 1:
        raise ValueError(
            f"manifest_version desconhecida: {data.get('manifest_version')!r}. Esperado: 1"
        )
    if not isinstance(data.get("slides"), list):
        raise ValueError("Manifesto inválido: 'slides' deve ser uma lista.")
    return data


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
    content_md: str,
    diff_text: str,
    issue_number: int | None,
    copilot_assignee: str | None,
) -> int:
    title = f"Slide desatualizado: {slide_id}"
    body = build_issue_body(slide_id, content_md, diff_text)

    if issue_number is None:
        # Try to find by title first
        issue_number = find_issue_by_title(repo, title)

    if issue_number is not None:
        gh("issue", "comment", str(issue_number), "--repo", repo, "--body", body)
        return issue_number

    # Create new issue
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
        return int(m.group(1))
    # Fallback: search by title
    num = find_issue_by_title(repo, title)
    return num or 0


def build_issue_body(slide_id: str, content_md: str, diff_text: str) -> str:
    return f"""## Slide desatualizado: `{slide_id}`

**Arquivo de conteúdo:** `{content_md}`
**Slide ID:** `{slide_id}`

### Alterações detectadas na fonte

```
{diff_text[:4000]}
```

---

**Instrução para o GitHub Copilot coding agent:**

Por favor, avalie se as alterações acima afetam o conteúdo do slide `{slide_id}` em `{content_md}`.

- Se o conteúdo do slide precisar ser atualizado, edite **apenas** `{content_md}` (não edite `index.html` diretamente) e abra um Pull Request.
- Se as alterações **não** afetarem o slide, comente nesta issue explicando o motivo e feche-a.
- Após qualquer alteração, execute `node build.js --deck {os.path.dirname(content_md)}` para regenerar o `index.html`.
"""


# ─────────────────────────────────────────────────────────────────────────────
# Source change detection
# ─────────────────────────────────────────────────────────────────────────────

def sources_changed(
    sources: list[str],
    source_headings: list[str] | None,
    last_commit: str | None,
    current_commit: str,
) -> tuple[bool, str]:
    """
    Returns (changed, diff_text).
    If last_commit is None, returns (True, current_full_text) as baseline.
    """
    if last_commit is None:
        # No baseline — record current state as baseline (not stale)
        return False, ""

    if last_commit == current_commit:
        return False, ""

    changed_any = False
    diff_parts = []

    for src_path in sources:
        if not os.path.isfile(src_path):
            changed_any = True
            diff_parts.append(f"[AVISO] Arquivo não encontrado: {src_path}")
            continue

        diff = git_diff_file(last_commit, current_commit, src_path)
        if not diff:
            continue  # No change for this source

        # Check if relevant section changed
        diff_content, is_fallback = compute_diff_content(
            last_commit, current_commit, src_path, source_headings
        )
        if diff_content:
            changed_any = True
            diff_parts.append(f"Fonte: {src_path}\n{diff_content}")

    return changed_any, "\n\n".join(diff_parts)


# ─────────────────────────────────────────────────────────────────────────────
# Main
# ─────────────────────────────────────────────────────────────────────────────

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
    errors: list[str] = []
    checked = 0

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

        raw_source = slide_entry.get("source")
        if not raw_source:
            continue  # No source — skip freshness check

        sources = [raw_source] if isinstance(raw_source, str) else list(raw_source)
        raw_headings = slide_entry.get("source_headings")
        source_headings = (
            [raw_headings] if isinstance(raw_headings, str) else list(raw_headings)
        ) if raw_headings else None
        content_md = slide_entry.get("content_md", "")

        # Get current state for this slide
        prev = state_slides.get(slide_id, {})
        last_decision = prev.get("last_decision", "ok")
        last_commit = prev.get("last_checked_docs_commit")
        issue_number = prev.get("issue_number")

        checked += 1

        # Check if source changed
        changed, diff_text = sources_changed(
            sources, source_headings, last_commit, current_commit
        )

        new_state = dict(prev)
        new_state.update({
            "source": sources[0] if len(sources) == 1 else sources,
            "last_checked_docs_commit": current_commit,
            "updated_at": now_iso,
        })
        if source_headings:
            new_state["source_headings"] = source_headings

        if not changed:
            # No change — keep current decision (unless pending, which is managed externally)
            if last_decision == "ok":
                new_state["last_decision"] = "ok"
            # pending stays pending until resolved externally
            next_state_slides[slide_id] = new_state
            continue

        # Source changed
        stale_found.append({
            "slide_id": slide_id,
            "diff_text": diff_text,
            "content_md": content_md,
        })

        new_state["last_decision"] = "stale"

        # Create/update issue if gh-repo is configured
        if args.gh_repo:
            try:
                new_issue_number = create_or_update_issue(
                    repo=args.gh_repo,
                    slide_id=slide_id,
                    content_md=content_md,
                    diff_text=diff_text,
                    issue_number=issue_number,
                    copilot_assignee=args.copilot_assignee or None,
                )
                new_state["issue_number"] = new_issue_number
                new_state["last_decision"] = "pending"
            except Exception as exc:
                errors.append(f"Erro ao criar issue para {slide_id}: {exc}")

        next_state_slides[slide_id] = new_state

    # Build report
    report = {
        "checked_count": checked,
        "stale_count": len(stale_found),
        "stale_slides": [{"slide_id": s["slide_id"]} for s in stale_found],
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
        next_state = {"state_version": 1, "slides": next_state_slides}
        save_state(args.state, next_state)

    if errors:
        for err in errors:
            print(f"[erro] {err}", file=sys.stderr)

    if stale_found:
        print(f"{len(stale_found)} slide(s) desatualizado(s) detectado(s).")
        return 2

    print(f"{checked} slide(s) verificado(s). Todos atualizados.")
    return 0


def render_summary(report: dict[str, Any]) -> str:
    stale = report.get("stale_slides", [])
    checked = report.get("checked_count", 0)
    lines = [
        "# Relatório de desatualização dos slides",
        "",
        f"- Slides verificados: **{checked}**",
        f"- Slides desatualizados: **{len(stale)}**",
        "",
    ]
    if not stale:
        lines.append("Nenhum slide desatualizado foi detectado.")
    else:
        lines.append("## Slides desatualizados")
        lines.append("")
        for item in stale:
            lines.append(f"- `{item['slide_id']}`")
    errors = report.get("errors", [])
    if errors:
        lines.append("")
        lines.append("## Erros")
        for e in errors:
            lines.append(f"- {e}")
    return "\n".join(lines) + "\n"


if __name__ == "__main__":
    sys.exit(main())
