#!/usr/bin/env python3
"""
fetch_changelog.py

Busca o feed RSS do GitHub Changelog (https://github.blog/changelog/feed/)
e salva as entradas em arquivos Markdown por tema.

USO:
    python3 scripts/fetch_changelog.py
    python3 scripts/fetch_changelog.py --output ./github-changelog
    python3 scripts/fetch_changelog.py --max-entries 50

DEPENDENCIAS:
    pip install requests
"""

import argparse
import os
import re
import sys
import xml.etree.ElementTree as ET
from datetime import datetime, timezone

try:
    import requests
except ImportError:
    sys.exit("Falta a dependencia 'requests'. Rode: pip install requests")


RSS_URL = "https://github.blog/changelog/feed/"
STATUS_TAGS = {
    "release",
    "improvement",
    "retired",
    "beta",
    "deprecated",
    "generally available",
    "public preview",
    "private preview",
}


def fetch_feed(url: str) -> bytes:
    print(f"Buscando feed RSS de {url} ...")
    resp = requests.get(url, timeout=30, headers={"User-Agent": "Mozilla/5.0"})
    resp.raise_for_status()
    return resp.content


def parse_feed(data: bytes) -> list[dict]:
    root = ET.fromstring(data)

    # Suporte a namespace Atom ({http://www.w3.org/2005/Atom}) e RSS padrao
    ns = {}
    for prefix, uri in ET.iterparse.__module__ and []:  # type: ignore[attr-defined]
        pass

    channel = root.find("channel")
    if channel is None:
        # Tenta formato Atom
        atom_ns = "http://www.w3.org/2005/Atom"
        entries = root.findall(f"{{{atom_ns}}}entry")
        if entries:
            return _parse_atom(root, entries, atom_ns)
        raise ValueError("Formato de feed nao reconhecido (sem <channel> nem <entry> Atom)")

    items = channel.findall("item")
    result = []
    for item in items:
        title = _text(item, "title")
        link = _text(item, "link")
        pub_date = _text(item, "pubDate")
        description = _text(item, "description")
        categories = [c.text for c in item.findall("category") if c.text]

        result.append({
            "title": title or "",
            "link": link or "",
            "date": _parse_rss_date(pub_date),
            "description": _strip_html(description or ""),
            "categories": categories,
        })
    return result


def _parse_atom(root, entries, ns: str) -> list[dict]:
    result = []
    for entry in entries:
        title = entry.findtext(f"{{{ns}}}title", "")
        link_el = entry.find(f"{{{ns}}}link")
        link = link_el.get("href", "") if link_el is not None else ""
        updated = entry.findtext(f"{{{ns}}}updated", "")
        summary = entry.findtext(f"{{{ns}}}summary", "") or entry.findtext(f"{{{ns}}}content", "")
        categories = [
            c.get("term", "") for c in entry.findall(f"{{{ns}}}category") if c.get("term")
        ]
        result.append({
            "title": title,
            "link": link,
            "date": _parse_iso_date(updated),
            "description": _strip_html(summary or ""),
            "categories": categories,
        })
    return result


def _text(el, tag: str) -> str | None:
    child = el.find(tag)
    return child.text if child is not None else None


def _parse_rss_date(date_str: str | None) -> str:
    if not date_str:
        return ""
    try:
        from email.utils import parsedate_to_datetime
        dt = parsedate_to_datetime(date_str)
        return dt.strftime("%Y-%m-%d")
    except Exception:
        return date_str


def _parse_iso_date(date_str: str) -> str:
    if not date_str:
        return ""
    try:
        dt = datetime.fromisoformat(date_str.replace("Z", "+00:00"))
        return dt.strftime("%Y-%m-%d")
    except Exception:
        return date_str[:10]


def _strip_html(text: str) -> str:
    # Remove tags HTML mantendo o conteudo textual
    text = re.sub(r"<br\s*/?>", "\n", text, flags=re.IGNORECASE)
    text = re.sub(r"<p[^>]*>", "\n", text, flags=re.IGNORECASE)
    text = re.sub(r"</p>", "", text, flags=re.IGNORECASE)
    text = re.sub(r"<li[^>]*>", "\n- ", text, flags=re.IGNORECASE)
    text = re.sub(r"<h[1-6][^>]*>(.*?)</h[1-6]>", r"\n### \1\n", text, flags=re.IGNORECASE | re.DOTALL)
    text = re.sub(r"<a[^>]+href=['\"]([^'\"]+)['\"][^>]*>(.*?)</a>", r"[\2](\1)", text, flags=re.IGNORECASE | re.DOTALL)
    text = re.sub(r"<[^>]+>", "", text)
    text = re.sub(r"&amp;", "&", text)
    text = re.sub(r"&lt;", "<", text)
    text = re.sub(r"&gt;", ">", text)
    text = re.sub(r"&quot;", '"', text)
    text = re.sub(r"&#39;", "'", text)
    text = re.sub(r"&nbsp;", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def entries_to_markdown(entries: list[dict]) -> str:
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    lines = [
        "# GitHub Changelog",
        "",
        f"> Atualizado em: {now}  ",
        f"> Fonte: <{RSS_URL}>",
        "",
        "---",
        "",
    ]

    for entry in entries:
        title = entry["title"]
        link = entry["link"]
        date = entry["date"]
        description = entry["description"]
        categories = entry["categories"]

        heading = f"## [{title}]({link})" if link else f"## {title}"
        lines.append(heading)
        lines.append("")

        meta_parts = []
        if date:
            meta_parts.append(f"**Data:** {date}")
        if categories:
            cats = ", ".join(f"`{c}`" for c in categories)
            meta_parts.append(f"**Categorias:** {cats}")
        if meta_parts:
            lines.append("  ".join(meta_parts))
            lines.append("")

        if description:
            lines.append(description)
            lines.append("")

        lines.append("---")
        lines.append("")

    return "\n".join(lines)


def _slugify(text: str) -> str:
    slug = text.lower().replace("&", "and")
    slug = re.sub(r"[^a-z0-9]+", "-", slug)
    slug = re.sub(r"-{2,}", "-", slug).strip("-")
    return slug


def _topic_slug(entry: dict) -> str:
    for category in entry.get("categories", []):
        normalized = category.lower().strip()
        if normalized in STATUS_TAGS:
            continue
        slug = _slugify(normalized)
        if slug:
            return slug
    return "outros"


def write_category_files(entries: list[dict], output_dir: str) -> dict[str, int]:
    grouped: dict[str, list[dict]] = {}
    for entry in entries:
        slug = _topic_slug(entry)
        grouped.setdefault(slug, []).append(entry)

    os.makedirs(output_dir, exist_ok=True)
    counts: dict[str, int] = {}
    for slug, group_entries in grouped.items():
        output_path = os.path.join(output_dir, f"{slug}.md")
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(entries_to_markdown(group_entries))
        counts[slug] = len(group_entries)

    index_lines = [
        "# GitHub Changelog por tema",
        "",
        "## Indice",
        "",
    ]
    for slug, count in sorted(counts.items()):
        label = "entrada" if count == 1 else "entradas"
        index_lines.append(f"- [{slug}]({slug}.md): {count} {label}")
    index_lines.append("")

    with open(os.path.join(output_dir, "_index.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(index_lines))

    return counts


def run(output_dir: str, max_entries: int | None):
    data = fetch_feed(RSS_URL)
    entries = parse_feed(data)

    if max_entries:
        entries = entries[:max_entries]

    print(f"Encontradas {len(entries)} entradas no feed")

    counts = write_category_files(entries, output_dir)
    print(f"Arquivos gerados em: {output_dir}")
    print(f"Temas gerados: {len(counts)}")
    for slug, count in sorted(counts.items()):
        print(f"- {slug}: {count}")


def main():
    parser = argparse.ArgumentParser(description="Baixa o GitHub Changelog via RSS e salva por tema em Markdown")
    parser.add_argument(
        "--output",
        default="./github-changelog",
        help="Diretorio de saida dos arquivos Markdown (padrao: ./github-changelog)",
    )
    parser.add_argument(
        "--max-entries",
        type=int,
        default=None,
        help="Limite de entradas a salvar (padrao: todas)",
    )
    args = parser.parse_args()
    run(args.output, args.max_entries)


if __name__ == "__main__":
    main()
