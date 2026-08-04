#!/usr/bin/env python3
"""Register a deck and its source baseline in the freshness files."""

from __future__ import annotations

import argparse
import os
import sys
from datetime import datetime, timezone

import yaml

from check_slides_freshness import combined_hash, digest_sources, load_state, save_json


def load_manifest(path: str) -> dict:
    if not os.path.isfile(path):
        raise ValueError(f"Manifesto nao encontrado: {path}")
    with open(path, "r", encoding="utf-8") as file:
        data = yaml.safe_load(file) or {}
    if not isinstance(data.get("slides"), list):
        raise ValueError("Manifesto invalido: 'slides' deve ser uma lista.")
    return data


def manifest_entry(slide: str, sources: list[str]) -> str:
    lines = [f"  - slide: {slide}", "    sources:"]
    lines.extend(f"      - path: {source}" for source in sources)
    return "\n".join(lines) + "\n"


def append_manifest(path: str, slide: str, sources: list[str]) -> None:
    with open(path, "r", encoding="utf-8") as file:
        content = file.read()

    parsed = load_manifest(path)
    existing = [item.get("slide") for item in parsed["slides"] if isinstance(item, dict)]
    if slide in existing:
        raise ValueError(f"Slide ja registrado no manifesto: {slide}")

    separator = "" if content.endswith("\n\n") else "\n"
    with open(path, "a", encoding="utf-8") as file:
        file.write(separator + manifest_entry(slide, sources))


def main() -> int:
    parser = argparse.ArgumentParser(description="Register a deck in the freshness manifest.")
    parser.add_argument("--slide", required=True, help="Path to the generated deck HTML")
    parser.add_argument("--source", action="append", required=True, help="Source Markdown path; repeatable")
    parser.add_argument("--manifest", default="decks/deck-sources.yml")
    parser.add_argument("--state", default="decks/.freshness-state.json")
    args = parser.parse_args()

    slide = args.slide.replace("\\", "/")
    sources = [source.replace("\\", "/") for source in args.source]
    try:
        manifest = load_manifest(args.manifest)
        existing = [item.get("slide") for item in manifest["slides"] if isinstance(item, dict)]
        if slide in existing:
            raise ValueError(f"Slide ja registrado no manifesto: {slide}")

        source_defs = [{"path": source} for source in sources]
        source_hashes, errors = digest_sources(source_defs)
        if errors:
            raise ValueError("; ".join(errors))

        append_manifest(args.manifest, slide, sources)
        state = load_state(args.state)
        state.setdefault("slides", {})[slide] = {
            "source_hash": combined_hash(source_hashes),
            "source_hashes": source_hashes,
            "checked_at": datetime.now(timezone.utc).isoformat(),
        }
        save_json(args.state, state)
        print(f"✓ Freshness registrado: {slide}")
        return 0
    except Exception as exc:
        print(f"[erro] {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())