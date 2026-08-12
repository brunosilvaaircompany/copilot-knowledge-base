#!/usr/bin/env python3
"""
deck_content.py — Leitor Python dos blocos de decks/{deck}/content.md.

Espelha a divisão de blocos de scripts/parse_content.js (mesma máquina de
estados, mesmos delimitadores `---`), mas sem validação: aqui só interessa
localizar o bloco de um `slide_id` e extrair o texto humano do slide para a
checagem de freshness.

Motivo de existir uma segunda implementação: o job de freshness
(.github/workflows/check-slides-freshness.yml) instala apenas Python, sem
Node. A divergência entre os dois parsers é barrada por um passo de CI em
.github/workflows/build-decks.yml, que compara a lista de `slide_id` vista
por cada um.

Uso como biblioteca:
    from deck_content import find_slide_block, slide_text

Uso como CLI (usado pelo guard-rail de CI):
    python3 scripts/deck_content.py --list decks/copilot-training/content.md
"""

from __future__ import annotations

import argparse
import os
import sys
from typing import Any

import yaml

# Chaves de front matter que são estruturais (não fazem parte do texto visível
# do slide) e por isso não entram na comparação semântica.
STRUCTURAL_KEYS = frozenset({
    "slide_id", "template", "stack", "source", "source_headings", "sources",
})


class ContentError(Exception):
    """Erro de leitura/parse de um content.md."""


def parse_raw_blocks(text: str) -> list[dict[str, str]]:
    """
    Divide o texto de um content.md em blocos {raw_yaml, body}.

    Equivalente a parseRawBlocks() de scripts/parse_content.js.
    """
    lines = text.replace("\r\n", "\n").replace("\r", "\n").split("\n")

    blocks: list[dict[str, str]] = []
    state = "seeking"  # seeking | in_frontmatter | in_body
    fm_lines: list[str] = []
    body_lines: list[str] = []

    for line in lines:
        if state == "seeking":
            if line.strip() == "---":
                state = "in_frontmatter"
                fm_lines = []
                body_lines = []
        elif state == "in_frontmatter":
            if line.strip() == "---":
                state = "in_body"
            else:
                fm_lines.append(line)
        elif state == "in_body":
            if line.strip() == "---":
                blocks.append({
                    "raw_yaml": "\n".join(fm_lines),
                    "body": "\n".join(body_lines).strip(),
                })
                fm_lines = []
                body_lines = []
                state = "in_frontmatter"
            else:
                body_lines.append(line)

    if state == "in_body" and fm_lines:
        blocks.append({
            "raw_yaml": "\n".join(fm_lines),
            "body": "\n".join(body_lines).strip(),
        })
    elif state == "in_frontmatter" and fm_lines:
        raise ContentError("Bloco com front matter não fechado (falta '---' de fechamento).")

    return blocks


def parse_content_blocks(text: str) -> list[dict[str, Any]]:
    """Devolve blocos com o front matter já convertido em dict."""
    parsed: list[dict[str, Any]] = []
    for index, raw in enumerate(parse_raw_blocks(text)):
        try:
            front_matter = yaml.safe_load(raw["raw_yaml"]) or {}
        except yaml.YAMLError as exc:
            raise ContentError(f"Bloco {index + 1}: YAML inválido — {exc}") from exc
        if not isinstance(front_matter, dict):
            raise ContentError(f"Bloco {index + 1}: front matter deve ser um objeto YAML.")
        parsed.append({
            "slide_id": front_matter.get("slide_id"),
            "front_matter": front_matter,
            "body": raw["body"],
        })
    return parsed


def read_content_blocks(path: str) -> list[dict[str, Any]]:
    """Lê e parseia um content.md do disco."""
    if not path:
        raise ContentError("Caminho de content.md vazio.")
    if not os.path.isfile(path):
        raise ContentError(f"content.md não encontrado: {path}")
    with open(path, "r", encoding="utf-8") as file:
        return parse_content_blocks(file.read())


def slide_ids(path: str) -> list[str]:
    """Lista os slide_id declarados em um content.md, na ordem do arquivo."""
    return [
        block["slide_id"]
        for block in read_content_blocks(path)
        if block.get("slide_id")
    ]


def find_slide_block(path: str, slide_id: str) -> dict[str, Any]:
    """
    Localiza o bloco de um slide_id.

    Levanta ContentError se o arquivo não existir, o YAML for inválido ou o
    slide_id não estiver presente.
    """
    for block in read_content_blocks(path):
        if block.get("slide_id") == slide_id:
            return block
    raise ContentError(f"slide_id '{slide_id}' não encontrado em {path}.")


def _render_value(value: Any) -> str:
    """Serializa um valor de front matter como texto legível."""
    if isinstance(value, str):
        return value
    return yaml.safe_dump(
        value, allow_unicode=True, default_flow_style=False, sort_keys=False
    ).strip()


def slide_text(block: dict[str, Any]) -> str:
    """
    Texto humano do slide: campos não estruturais do front matter + corpo.

    Independente de template — qualquer campo textual novo entra
    automaticamente, sem precisar acompanhar scripts/render_slides.js.
    """
    parts: list[str] = []
    for key, value in (block.get("front_matter") or {}).items():
        if key in STRUCTURAL_KEYS or value is None:
            continue
        rendered = _render_value(value)
        if not rendered:
            continue
        if "\n" in rendered:
            parts.append(f"{key}:\n{rendered}")
        else:
            parts.append(f"{key}: {rendered}")
    body = (block.get("body") or "").strip()
    if body:
        parts.append(body)
    return "\n".join(parts).strip()


def read_slide_text(content_md: str, slide_id: str) -> str:
    """Atalho: texto humano do slide identificado por slide_id."""
    return slide_text(find_slide_block(content_md, slide_id))


def main() -> int:
    parser = argparse.ArgumentParser(description="Leitor de blocos de content.md.")
    parser.add_argument("--list", metavar="CONTENT_MD", help="Lista os slide_id do arquivo.")
    parser.add_argument("--slide", metavar="SLIDE_ID", help="Imprime o texto de um slide.")
    parser.add_argument("--content", metavar="CONTENT_MD", help="content.md usado com --slide.")
    args = parser.parse_args()

    try:
        if args.list:
            for slide in slide_ids(args.list):
                print(slide)
            return 0
        if args.slide:
            if not args.content:
                print("[erro] --slide exige --content.", file=sys.stderr)
                return 1
            print(read_slide_text(args.content, args.slide))
            return 0
    except ContentError as exc:
        print(f"[erro] {exc}", file=sys.stderr)
        return 1

    parser.print_help()
    return 1


if __name__ == "__main__":
    sys.exit(main())
