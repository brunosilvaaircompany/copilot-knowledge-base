#!/usr/bin/env python3
"""
fetch_vscode_docs.py

Automatiza o download de secoes da documentacao do VS Code
(code.visualstudio.com/docs), a partir do repositorio publico
microsoft/vscode-docs, removendo front matter, convertendo tabs e
callouts proprietarios, e entregando arquivos .md limpos prontos
para leitura.

USO:
    python3 scripts/fetch_vscode_docs.py --list
    python3 scripts/fetch_vscode_docs.py --search agents
    python3 scripts/fetch_vscode_docs.py --section docs/agents
    python3 scripts/fetch_vscode_docs.py \\
        --section docs/agents,docs/agent-customization,docs/chat \\
        --output ./vscode-docs

DEPENDENCIAS:
    pip install pyyaml requests

NOTAS v1:
    - Imagens nao sao baixadas (apenas texto).
    - Links internos /docs/... sao resolvidos contra os arquivos
      realmente extraidos no lote; quando o alvo nao esta no lote,
      cai para a URL canonica https://code.visualstudio.com/docs/...
    - Anchors sao preservados no fallback.
"""

import argparse
import io
import os
import re
import sys
import tarfile

try:
    import requests
except ImportError:
    sys.exit("Falta a dependencia 'requests'. Rode: pip install requests")

# (pyyaml nao e necessario neste script; outros scripts do repo usam essa dependencia.)


REPO_TARBALL_URL = (
    "https://codeload.github.com/microsoft/vscode-docs/tar.gz/refs/heads/main"
)
VSCODE_DOCS_BASE_URL = "https://code.visualstudio.com/docs"
DEFAULT_SECTION = "docs"


# --------------------------------------------------------------------------
# Download do tarball
# --------------------------------------------------------------------------


def download_repo_tarball(url: str) -> bytes:
    print(f"Baixando tarball de {url} ...")
    resp = requests.get(url, timeout=120, stream=True)
    resp.raise_for_status()
    chunks = []
    total = 0
    for chunk in resp.iter_content(chunk_size=65536):
        chunks.append(chunk)
        total += len(chunk)
        print(f"\r  {total // 1024} KB baixados", end="", flush=True)
    print()
    return b"".join(chunks)


# --------------------------------------------------------------------------
# Descoberta de secoes (--list / --search)
# --------------------------------------------------------------------------


def _iter_tarball_paths(tar_bytes: bytes):
    with tarfile.open(fileobj=io.BytesIO(tar_bytes), mode="r:gz") as tar:
        names = tar.getnames()
        if not names:
            return
        root_dir = names[0].split("/")[0] + "/"
        for m in tar.getmembers():
            if not m.name.startswith(root_dir):
                continue
            rel = m.name[len(root_dir):]
            if rel:
                yield rel, m.isdir()


def list_top_level_sections(tar_bytes: bytes):
    seen = set()
    for path, is_dir in _iter_tarball_paths(tar_bytes):
        parts = path.split("/")
        if parts[0] == DEFAULT_SECTION and len(parts) >= 2 and parts[1]:
            key = f"{DEFAULT_SECTION}/{parts[1]}"
            if key not in seen:
                seen.add(key)
    for s in sorted(seen):
        print(s)


def search_sections(tar_bytes: bytes, keyword: str):
    keyword_lower = keyword.lower()
    seen = set()
    for path, is_dir in _iter_tarball_paths(tar_bytes):
        if keyword_lower in path.lower():
            parts = path.split("/")
            if len(parts) >= 2:
                key = "/".join(parts[:2])
                if key not in seen:
                    seen.add(key)
                    print(key)


# --------------------------------------------------------------------------
# Extracao do tarball
# --------------------------------------------------------------------------


def extract_sections(tar_bytes: bytes, sections: list[str], workdir: str) -> dict[str, str]:
    """
    Extrai os arquivos .md das secoes solicitadas para workdir.
    Retorna um indice mapeando (caminho relativo dentro do repo, ex
    'docs/agents/overview') -> caminho absoluto no sistema de arquivos.
    """
    prefixes = tuple(s.rstrip("/") + "/" for s in sections)
    index: dict[str, str] = {}

    with tarfile.open(fileobj=io.BytesIO(tar_bytes), mode="r:gz") as tar:
        names = tar.getnames()
        if not names:
            return index
        root_dir = names[0].split("/")[0] + "/"

        for member in tar.getmembers():
            if not member.name.startswith(root_dir):
                continue
            rel = member.name[len(root_dir):]
            if not rel:
                continue
            if not any(rel.startswith(p) for p in prefixes):
                continue
            if member.isdir():
                continue
            if not rel.endswith(".md"):
                continue

            dest = os.path.join(workdir, rel)
            os.makedirs(os.path.dirname(dest), exist_ok=True)
            f = tar.extractfile(member)
            if f is None:
                continue
            content = f.read()
            with open(dest, "wb") as out:
                out.write(content)

            # Registra no indice sem extensao (chave de resolucao de links)
            key = rel[: -len(".md")] if rel.endswith(".md") else rel
            index[key] = dest

    return index


# --------------------------------------------------------------------------
# Transformacoes de conteudo
# --------------------------------------------------------------------------


def strip_front_matter(text: str) -> str:
    """Remove front matter YAML sem promover titulo para H1."""
    m = re.match(r"^---\n.*?\n---\n?", text, re.DOTALL)
    if m:
        text = text[m.end():]
    return text.lstrip("\n")


# --- mascaramento de blocos de codigo ---

_FENCED_CODE_RE = re.compile(r"(```[^\n]*\n.*?```)", re.DOTALL)
_PLACEHOLDER_TMPL = "\x00CODE_BLOCK_{idx}\x00"
_PLACEHOLDER_RE = re.compile(r"\x00CODE_BLOCK_(\d+)\x00")


def mask_code_blocks(text: str) -> tuple[str, list[str]]:
    blocks: list[str] = []

    def replace(m):
        idx = len(blocks)
        blocks.append(m.group(1))
        return _PLACEHOLDER_TMPL.format(idx=idx)

    masked = _FENCED_CODE_RE.sub(replace, text)
    return masked, blocks


def unmask_code_blocks(text: str, blocks: list[str]) -> str:
    def replace(m):
        return blocks[int(m.group(1))]

    return _PLACEHOLDER_RE.sub(replace, text)


# --- conversao de tabs do VS Code Docs ---
#
# Formato fonte:
#   {% tabs id="..." %}
#   {% tab label="Label" %}
#   ... conteudo ...
#   {% /tab %}
#   {% tab label="Label 2" %}
#   ... conteudo ...
#   {% /tab %}
#   {% /tabs %}
#
# Saida alvo: secoes em negrito com o label, seguidas do conteudo.


_TABS_OPEN_RE = re.compile(r'\{%\s*tabs\s+[^%]*%\}', re.IGNORECASE)
_TABS_CLOSE_RE = re.compile(r'\{%\s*/tabs\s*%\}', re.IGNORECASE)
_TAB_OPEN_RE = re.compile(r'\{%\s*tab\s+label="([^"]+)"\s*%\}', re.IGNORECASE)
_TAB_CLOSE_RE = re.compile(r'\{%\s*/tab\s*%\}', re.IGNORECASE)


def convert_tabs(text: str) -> str:
    text = _TABS_OPEN_RE.sub("", text)
    text = _TABS_CLOSE_RE.sub("", text)
    text = _TAB_OPEN_RE.sub(r"\n**\1**\n", text)
    text = _TAB_CLOSE_RE.sub("", text)
    return text


# --- conversao de callouts ---
#
# Formato fonte (admonitions do GitHub-flavored MD):
#   > [!NOTE]
#   > texto
#
# Saida alvo: bold + dois-pontos (compativel com MD simples).

_CALLOUT_RE = re.compile(
    r'^>\s*\[!(NOTE|TIP|WARNING|IMPORTANT)\]\s*\n((?:>.*\n?)*)',
    re.MULTILINE | re.IGNORECASE,
)


def _callout_replacement(m: re.Match) -> str:
    kind = m.group(1).upper()
    body_lines = m.group(2)
    body = re.sub(r'^>\s?', '', body_lines, flags=re.MULTILINE).strip()
    return f"**{kind}:** {body}\n"


def convert_callouts(text: str) -> str:
    return _CALLOUT_RE.sub(_callout_replacement, text)


# --- resolucao de links internos ---

_INTERNAL_LINK_RE = re.compile(r'\]\((/docs/[^)]+)\)')


def _normalize_docs_path(path: str) -> tuple[str, str]:
    """Normaliza /docs/foo/bar para ('docs/foo/bar', '#ancora') preservando a ancora."""
    anchor = ""
    if "#" in path:
        path, anchor = path.split("#", 1)
        anchor = "#" + anchor
    path = path.lstrip("/").rstrip("/")
    return path, anchor


def resolve_links(text: str, index: dict[str, str], _output_dir: str, file_output_path: str) -> str:
    """
    Substitui links internos /docs/... por:
    - Caminho relativo se o alvo estiver no indice do lote.
    - URL absoluta em code.visualstudio.com/docs/... caso contrario.
    """

    def replace(m):
        raw = m.group(1)
        norm_path, anchor = _normalize_docs_path(raw)

        if norm_path in index:
            # Calcula caminho relativo entre o arquivo atual e o destino
            target_abs = index[norm_path]
            current_dir = os.path.dirname(file_output_path)
            rel = os.path.relpath(target_abs, current_dir)
            return f"]({rel}{anchor})"

        # Fallback para URL absoluta
        # norm_path ja e 'docs/foo/bar'; remove prefixo 'docs/'
        url_path = norm_path[len("docs/"):] if norm_path.startswith("docs/") else norm_path
        fallback_url = f"{VSCODE_DOCS_BASE_URL}/{url_path}{anchor}"
        return f"]({fallback_url})"

    return _INTERNAL_LINK_RE.sub(replace, text)


# --------------------------------------------------------------------------
# Redacao de segredos
# --------------------------------------------------------------------------

_SECRET_PATTERNS = [
    re.compile(r"\bgithub_pat_[A-Za-z0-9_]{36,}\b"),
    re.compile(r"\bghp_[A-Za-z0-9]{36,}\b"),
    re.compile(r"\bghs_[A-Za-z0-9]{36,}\b"),
    re.compile(r"\bghr_[A-Za-z0-9]{36,}\b"),
    re.compile(r"\bsecret_scanning_[A-Za-z0-9_]{20,}\b"),
]


def redact_secrets(text: str) -> str:
    for pattern in _SECRET_PATTERNS:
        text = pattern.sub("<TOKEN_REDACTED>", text)
    return text


# --------------------------------------------------------------------------
# Pipeline de transformacao
# --------------------------------------------------------------------------


def transform(content: str, index: dict[str, str], output_dir: str, file_output_path: str) -> str:
    text = strip_front_matter(content)

    # Pipeline na ordem correta:
    # 1. mascarar blocos de codigo
    text, blocks = mask_code_blocks(text)
    # 2. converter tabs
    text = convert_tabs(text)
    # 3. converter callouts
    text = convert_callouts(text)
    # 4. desmascarar blocos de codigo
    text = unmask_code_blocks(text, blocks)
    # 5. resolver links internos
    text = resolve_links(text, index, output_dir, file_output_path)

    text = redact_secrets(text)
    return text.strip() + "\n"


# --------------------------------------------------------------------------
# Execucao principal
# --------------------------------------------------------------------------


def run(sections: list[str], output_dir: str):
    workdir = os.path.join(os.getcwd(), ".vscode_docs_cache")
    os.makedirs(workdir, exist_ok=True)

    tar_bytes = download_repo_tarball(REPO_TARBALL_URL)
    index = extract_sections(tar_bytes, sections, workdir)

    os.makedirs(output_dir, exist_ok=True)
    if not index:
        print("[aviso] Nenhum arquivo extraido. Verifique as secoes informadas.")
        return

    # Mapeia chave do indice -> caminho de saida final
    output_index: dict[str, str] = {}
    for key in index:
        # key: 'docs/agents/overview'
        # determina secao de origem
        for sec in sections:
            sec_norm = sec.rstrip("/")
            if key.startswith(sec_norm + "/") or key == sec_norm:
                rel_to_section = key[len(sec_norm):].lstrip("/")
                section_basename = os.path.basename(sec_norm)
                output_index[key] = os.path.join(output_dir, section_basename, rel_to_section + ".md")
                break

    total_processed = 0
    for key, src_path in sorted(index.items()):
        out_path = output_index.get(key)
        if not out_path:
            continue

        with open(src_path, encoding="utf-8") as f:
            content = f.read()

        transformed = transform(content, output_index, output_dir, out_path)

        # Pula paginas vazias apos H1
        body_check = re.sub(r"^#[^\n]*\n*", "", transformed).strip()
        if not body_check:
            print(f"[pulado] {key} (pagina vazia apos H1)")
            continue

        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(transformed)
        total_processed += 1
        print(f"[ok] {key}")

    print(f"\nConcluido: {total_processed} arquivos salvos em '{output_dir}'")

    import shutil
    shutil.rmtree(workdir, ignore_errors=True)


def main():
    parser = argparse.ArgumentParser(
        description="Baixa e limpa documentacao do microsoft/vscode-docs"
    )
    parser.add_argument(
        "--section",
        help=(
            "Caminho(s) da secao dentro de vscode-docs, separados por virgula "
            "(ex: docs/agents,docs/chat). "
            "Use --list ou --search para descobrir caminhos disponiveis."
        ),
    )
    parser.add_argument(
        "--output",
        default="./vscode-docs",
        help="Pasta de saida para os arquivos .md limpos (padrao: ./vscode-docs)",
    )
    parser.add_argument(
        "--list",
        action="store_true",
        help=f"Lista as subsecoes de nivel superior disponíveis em {DEFAULT_SECTION}/ e sai",
    )
    parser.add_argument(
        "--search",
        metavar="PALAVRA-CHAVE",
        help="Busca secoes cujo caminho contenha a palavra-chave, e sai",
    )
    args = parser.parse_args()

    if args.list or args.search:
        tar_bytes = download_repo_tarball(REPO_TARBALL_URL)
        if args.list:
            list_top_level_sections(tar_bytes)
        else:
            search_sections(tar_bytes, args.search)
        return

    if not args.section:
        parser.error(
            "--section e obrigatorio (ex: --section docs/agents,docs/chat). "
            "Use --list ou --search PALAVRA-CHAVE para descobrir caminhos disponiveis."
        )

    sections = [s.strip() for s in args.section.split(",") if s.strip()]
    run(sections, args.output)


if __name__ == "__main__":
    main()
