#!/usr/bin/env python3
"""
Check whether HTML slides are stale compared to selected sections of Markdown docs.

Exit codes:
  0 -> all slides up to date
  1 -> configuration/runtime error
  2 -> stale slides detected
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import sys
from dataclasses import dataclass
from datetime import datetime, timezone
from typing import Any

import yaml


@dataclass
class SourceChange:
    path: str
    previous_hash: str | None
    current_hash: str


def normalize_text(text: str) -> str:
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def file_sha256(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def read_text_file(path: str) -> str:
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def extract_heading_sections(md_text: str, headings: list[str]) -> str:
    wanted = {h.strip().lower() for h in headings if h.strip()}
    if not wanted:
        return ""

    lines = md_text.splitlines()
    heading_re = re.compile(r"^(#{1,6})\s+(.+?)\s*$")
    matches: list[tuple[int, int]] = []

    for i, line in enumerate(lines):
        m = heading_re.match(line)
        if not m:
            continue
        level = len(m.group(1))
        title = m.group(2).strip().lower()
        if title not in wanted:
            continue
        end = len(lines)
        for j in range(i + 1, len(lines)):
            nm = heading_re.match(lines[j])
            if nm and len(nm.group(1)) <= level:
                end = j
                break
        matches.append((i, end))

    chunks = ["\n".join(lines[start:end]).strip() for start, end in matches]
    chunks = [c for c in chunks if c]
    return "\n\n".join(chunks)


def extract_regex_fragments(md_text: str, patterns: list[str]) -> str:
    fragments: list[str] = []
    for raw in patterns:
        raw = raw.strip()
        if not raw:
            continue
        regex = re.compile(raw, re.IGNORECASE | re.MULTILINE)
        for match in regex.finditer(md_text):
            value = match.group(0).strip()
            if value:
                fragments.append(value)
    return "\n".join(fragments)


def extract_relevant_content(md_text: str, selectors: dict[str, Any] | None) -> str:
    if not selectors:
        return normalize_text(md_text)

    chunks: list[str] = []
    headings = selectors.get("headings", [])
    regex_patterns = selectors.get("regex_patterns", [])

    if headings:
        chunks.append(extract_heading_sections(md_text, headings))
    if regex_patterns:
        chunks.append(extract_regex_fragments(md_text, regex_patterns))

    merged = "\n\n".join(c for c in chunks if c and c.strip())
    return normalize_text(merged)


def digest_sources(source_defs: list[dict[str, Any]]) -> tuple[dict[str, str], list[str]]:
    source_hashes: dict[str, str] = {}
    errors: list[str] = []

    for source in source_defs:
        path = source["path"]
        if not os.path.isfile(path):
            errors.append(f"Fonte markdown nao encontrada: {path}")
            continue

        md_text = read_text_file(path)
        relevant_text = extract_relevant_content(md_text, source.get("selectors"))
        if not relevant_text:
            errors.append(
                "Seletores sem resultado para fonte: "
                f"{path}. Ajuste headings/regex_patterns no manifesto."
            )
            continue
        source_hashes[path] = file_sha256(relevant_text)

    return source_hashes, errors


def combined_hash(path_to_hash: dict[str, str]) -> str:
    items = sorted(path_to_hash.items(), key=lambda x: x[0])
    payload = "\n".join(f"{path}:{sha}" for path, sha in items)
    return file_sha256(payload)


def load_manifest(path: str) -> dict[str, Any]:
    if not os.path.isfile(path):
        raise ValueError(f"Manifesto nao encontrado: {path}")
    with open(path, "r", encoding="utf-8") as f:
        data = yaml.safe_load(f) or {}
    slides = data.get("slides")
    if slides is None:
        raise ValueError("Manifesto invalido: chave 'slides' ausente.")
    if not isinstance(slides, list):
        raise ValueError("Manifesto invalido: 'slides' deve ser uma lista.")
    return data


def load_state(path: str) -> dict[str, Any]:
    if not os.path.isfile(path):
        return {"version": 1, "slides": {}}
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    if not isinstance(data, dict):
        return {"version": 1, "slides": {}}
    data.setdefault("version", 1)
    data.setdefault("slides", {})
    return data


def save_json(path: str, data: dict[str, Any]) -> None:
    parent = os.path.dirname(path)
    if parent:
        os.makedirs(parent, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")


def ensure_parent(path: str) -> None:
    parent = os.path.dirname(path)
    if parent:
        os.makedirs(parent, exist_ok=True)


def render_summary(report: dict[str, Any]) -> str:
    stale = report["stale_slides"]
    checked = report["checked_count"]
    lines = [
        "# Relatorio de desatualizacao dos slides",
        "",
        f"- Slides verificados: **{checked}**",
        f"- Slides desatualizados: **{len(stale)}**",
        "",
    ]
    if not stale:
        lines.append("Nenhum slide desatualizado foi detectado.")
        return "\n".join(lines) + "\n"

    lines.append("## Slides desatualizados")
    lines.append("")
    for item in stale:
        lines.append(f"- **{item['slide']}**")
        reason = item.get("reason")
        if reason:
            lines.append(f"  - Motivo: {reason}")
        if item.get("changed_sources"):
            lines.append("  - Fontes alteradas:")
            for src in item["changed_sources"]:
                lines.append(f"    - `{src['path']}`")
    return "\n".join(lines) + "\n"


def parse_manifest_sources(raw_sources: list[Any]) -> list[dict[str, Any]]:
    parsed: list[dict[str, Any]] = []
    for entry in raw_sources:
        if isinstance(entry, str):
            parsed.append({"path": entry})
            continue
        if not isinstance(entry, dict):
            raise ValueError("Cada item em 'sources' deve ser string ou objeto.")
        path = entry.get("path")
        if not isinstance(path, str) or not path.strip():
            raise ValueError("Cada source precisa de 'path' nao vazio.")
        source: dict[str, Any] = {"path": path.strip()}
        selectors = entry.get("selectors")
        if selectors is not None:
            if not isinstance(selectors, dict):
                raise ValueError("Campo 'selectors' deve ser objeto.")
            source["selectors"] = selectors
        parsed.append(source)
    return parsed


def main() -> int:
    parser = argparse.ArgumentParser(description="Check freshness of HTML slides.")
    parser.add_argument("--manifest", required=True, help="Path to slide-sources.yml")
    parser.add_argument("--state", required=True, help="Path to freshness state JSON")
    parser.add_argument("--report-json", help="Write machine-readable report JSON")
    parser.add_argument("--summary-file", help="Write markdown summary")
    parser.add_argument(
        "--write-state",
        action="store_true",
        help="Update state file with current hashes after processing.",
    )
    args = parser.parse_args()

    try:
        manifest = load_manifest(args.manifest)
    except Exception as exc:
        print(f"[erro] {exc}", file=sys.stderr)
        return 1

    state = load_state(args.state)
    state_slides = state.get("slides", {})
    stale_slides: list[dict[str, Any]] = []
    errors: list[str] = []
    checked_count = 0
    now_iso = datetime.now(timezone.utc).isoformat()
    next_state = {"version": 1, "slides": dict(state_slides)}

    for raw_slide in manifest["slides"]:
        if not isinstance(raw_slide, dict):
            errors.append("Cada item de 'slides' no manifesto deve ser objeto.")
            continue

        slide_path = raw_slide.get("slide")
        raw_sources = raw_slide.get("sources")
        if not isinstance(slide_path, str) or not slide_path.strip():
            errors.append("Slide sem campo 'slide' valido no manifesto.")
            continue
        if not isinstance(raw_sources, list) or not raw_sources:
            errors.append(f"Slide sem 'sources' validas: {slide_path}")
            continue

        slide_path = slide_path.strip()
        if not os.path.isfile(slide_path):
            errors.append(f"Arquivo de slide nao encontrado: {slide_path}")
            continue

        try:
            sources = parse_manifest_sources(raw_sources)
        except Exception as exc:
            errors.append(f"Manifesto invalido para slide {slide_path}: {exc}")
            continue

        source_hashes, digest_errors = digest_sources(sources)
        if digest_errors:
            errors.extend([f"{slide_path}: {msg}" for msg in digest_errors])
            continue

        checked_count += 1
        current_source_hash = combined_hash(source_hashes)
        prev_entry = state_slides.get(slide_path, {})
        previous_source_hash = prev_entry.get("source_hash")
        changed_sources: list[SourceChange] = []

        prev_source_hashes = prev_entry.get("source_hashes", {})
        for path, cur_hash in source_hashes.items():
            prev_hash = prev_source_hashes.get(path)
            if prev_hash != cur_hash:
                changed_sources.append(
                    SourceChange(path=path, previous_hash=prev_hash, current_hash=cur_hash)
                )

        if previous_source_hash != current_source_hash:
            stale_slides.append(
                {
                    "slide": slide_path,
                    "reason": "fontes relevantes alteradas",
                    "changed_sources": [
                        {
                            "path": c.path,
                            "previous_hash": c.previous_hash,
                            "current_hash": c.current_hash,
                        }
                        for c in changed_sources
                    ],
                }
            )

        next_state["slides"][slide_path] = {
            "source_hash": current_source_hash,
            "source_hashes": source_hashes,
            "checked_at": now_iso,
        }

    report = {
        "checked_count": checked_count,
        "stale_count": len(stale_slides),
        "stale_slides": stale_slides,
        "errors": errors,
        "generated_at": now_iso,
    }

    if args.report_json:
        ensure_parent(args.report_json)
        save_json(args.report_json, report)
    if args.summary_file:
        ensure_parent(args.summary_file)
        with open(args.summary_file, "w", encoding="utf-8") as f:
            f.write(render_summary(report))
    if args.write_state:
        save_json(args.state, next_state)

    if errors:
        for err in errors:
            print(f"[erro] {err}", file=sys.stderr)
        return 1

    if stale_slides:
        print(f"{len(stale_slides)} slide(s) desatualizado(s) detectado(s).")
        return 2

    print("Todos os slides estao atualizados.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
