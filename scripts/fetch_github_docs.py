#!/usr/bin/env python3
"""
fetch_github_docs.py

Automatiza o download de qualquer secao da documentacao do GitHub
(docs.github.com), a partir do repositorio publico github/docs,
resolvendo as tags de template (Liquid) usadas internamente pela
GitHub para gerar o site, e entrega arquivos .md limpos e prontos
para leitura (ex: upload no GitHub Copilot Spaces, NotebookLM, etc).

USO:
    python3 scripts/fetch_github_docs.py --list
    python3 scripts/fetch_github_docs.py --search webhooks
    python3 scripts/fetch_github_docs.py --section content/github-cli/github-cli
    python3 scripts/fetch_github_docs.py --section content/webhooks --output ./minha-pasta

DEPENDENCIAS:
    pip install pyyaml requests

O QUE O SCRIPT FAZ:
    1. Baixa o tarball do repo github/docs (branch main) via codeload.github.com
    2. Extrai apenas a(s) pasta(s) informada(s) em --section
    3. Extrai as pastas data/reusables e data/variables (necessarias para
       resolver as tags {% data ... %})
    4. Resolve recursivamente:
       - {% data variables.x.y %}
       - {% data reusables.x.y %}
       - {% ifversion ... %} ... {% else %} ... {% endif %}  (mantem o
         primeiro branch, que corresponde ao GitHub.com / fpt)
       - [AUTOTITLE](/caminho) -> vira um link markdown de verdade
    5. Remove o front matter YAML, promovendo o "title" para um cabecalho H1
    6. Salva os arquivos finais na pasta de saida

Para automatizar (ex: rodar 1x por semana e commitar as mudancas),
use o workflow de GitHub Actions incluso (fetch-docs.yml).
"""

import argparse
import io
import os
import re
import sys
import tarfile
import glob

try:
    import requests
except ImportError:
    sys.exit("Falta a dependencia 'requests'. Rode: pip install requests")

try:
    import yaml
except ImportError:
    sys.exit("Falta a dependencia 'pyyaml'. Rode: pip install pyyaml")


REPO_TARBALL_URL = "https://codeload.github.com/github/docs/tar.gz/refs/heads/main"
REPO_TREE_API_URL = "https://api.github.com/repos/github/docs/git/trees/main?recursive=1"


# --------------------------------------------------------------------------
# Descoberta de secoes (--list / --search)
# --------------------------------------------------------------------------

def fetch_repo_tree() -> list[dict]:
    print("Consultando a arvore de arquivos do repositorio github/docs ...")
    resp = requests.get(REPO_TREE_API_URL, timeout=60)
    if resp.status_code != 200:
        print(
            f"[aviso] API do GitHub respondeu {resp.status_code} (provavelmente limite de "
            "requisicoes sem autenticacao). Usando o tarball do repositorio como alternativa "
            "(mais lento, mas nao depende da API)..."
        )
        return fetch_repo_tree_via_tarball()
    data = resp.json()
    if "tree" not in data:
        print(f"[aviso] Resposta inesperada da API: {data.get('message', data)}")
        return fetch_repo_tree_via_tarball()
    return data["tree"]


def fetch_repo_tree_via_tarball() -> list[dict]:
    tar_bytes = download_repo_tarball(REPO_TARBALL_URL)
    entries = []
    with tarfile.open(fileobj=io.BytesIO(tar_bytes), mode="r:gz") as tar:
        names = tar.getnames()
        root_dir = names[0].split("/")[0] + "/"
        for m in tar.getmembers():
            if not m.name.startswith(root_dir):
                continue
            rel_path = m.name[len(root_dir):]
            if not rel_path:
                continue
            entries.append({
                "path": rel_path,
                "type": "tree" if m.isdir() else "blob",
            })
    return entries


def list_top_level_categories():
    tree = fetch_repo_tree()
    categories = sorted(
        entry["path"] for entry in tree
        if entry["type"] == "tree" and entry["path"].count("/") == 1
        and entry["path"].startswith("content/")
    )
    print(f"\n{len(categories)} categorias encontradas em content/:\n")
    for c in categories:
        print(f"  - {c}")
    print("\nUse '--search PALAVRA-CHAVE' para achar uma subpasta especifica dentro delas.")


def search_sections(keyword: str):
    tree = fetch_repo_tree()
    keyword_low = keyword.lower()
    matched_dirs = sorted({
        os.path.dirname(entry["path"])
        for entry in tree
        if entry["type"] == "blob"
        and entry["path"].startswith("content/")
        and entry["path"].endswith(".md")
        and keyword_low in entry["path"].lower()
    })
    if not matched_dirs:
        print(f"Nenhuma secao encontrada contendo '{keyword}'.")
        return
    print(f"\n{len(matched_dirs)} pasta(s) encontrada(s) contendo '{keyword}':\n")
    for d in matched_dirs:
        print(f"  --section {d}")
    print("\nCopie um dos caminhos acima e use com: python3 scripts/fetch_github_docs.py --section <caminho>")


# --------------------------------------------------------------------------
# Download e extracao
# --------------------------------------------------------------------------

def download_repo_tarball(url: str) -> bytes:
    print(f"Baixando repositorio github/docs de {url} ...")
    resp = requests.get(url, timeout=120)
    resp.raise_for_status()
    print(f"Download concluido ({len(resp.content) / 1_000_000:.1f} MB)")
    return resp.content


def extract_paths(tar_bytes: bytes, prefixes: list[str], dest_root: str) -> None:
    """Extrai do tarball apenas os membros cujo caminho comeca com algum dos prefixos."""
    with tarfile.open(fileobj=io.BytesIO(tar_bytes), mode="r:gz") as tar:
        members = tar.getmembers()
        # O primeiro componente do path e algo como 'docs-main/'
        root_dir = members[0].name.split("/")[0]

        for prefix in prefixes:
            full_prefix = f"{root_dir}/{prefix}"
            matched = [m for m in members if m.name.startswith(full_prefix)]
            if not matched:
                print(f"[aviso] nenhum arquivo encontrado para '{prefix}'")
                continue
            for m in matched:
                if m.isdir():
                    continue
                rel_path = os.path.relpath(m.name, full_prefix)
                if rel_path == ".":
                    continue
                out_path = os.path.join(dest_root, prefix, rel_path)
                os.makedirs(os.path.dirname(out_path), exist_ok=True)
                with tar.extractfile(m) as src, open(out_path, "wb") as dst:
                    dst.write(src.read())
            print(f"Extraido '{prefix}' ({len(matched)} arquivos)")


# --------------------------------------------------------------------------
# Resolucao das tags Liquid
# --------------------------------------------------------------------------

class LiquidResolver:
    TAG_RE = re.compile(r"\{%\-?\s*data\s+([\w.\-]+)\s*\-?%\}")
    IFVERSION_RE = re.compile(
        r"\{%-?\s*ifversion\s+.*?-?%\}(.*?)\{%-?\s*endif\s*-?%\}", re.DOTALL
    )
    ELSE_SPLIT_RE = re.compile(r"\{%-?\s*else\s*-?%\}")
    AUTOTITLE_RE = re.compile(r"\[AUTOTITLE\]\((/[^\)]+)\)")
    CALLOUT_START_RE = re.compile(r"\{%-?\s*(tip|note|warning|important)\s*-?%\}")
    CALLOUT_END_RE = re.compile(r"\{%-?\s*end(tip|note|warning|important)\s*-?%\}")
    CODETABS_WRAP_RE = re.compile(r"\{%-?\s*codetabs\s*-?%\}|\{%-?\s*endcodetabs\s*-?%\}")
    CODETAB_START_RE = re.compile(r"\{%-?\s*codetab\s+([\w.\-]+)\s*-?%\}")
    CODETAB_END_RE = re.compile(r"\{%-?\s*endcodetab\s*-?%\}")

    def __init__(self, workdir: str):
        self.reusables_dir = os.path.join(workdir, "data/reusables")
        self.variables_dir = os.path.join(workdir, "data/variables")
        self._var_cache: dict = {}
        self._reusable_cache: dict = {}
        self._load_variables()

    def _load_variables(self):
        for path in glob.glob(os.path.join(self.variables_dir, "**/*.yml"), recursive=True):
            name = os.path.relpath(path, self.variables_dir)[:-4].replace(os.sep, ".")
            try:
                with open(path, encoding="utf-8") as f:
                    self._var_cache[name] = yaml.safe_load(f)
            except Exception:
                pass

    def _get_variable(self, dotted_path: str):
        parts = dotted_path.split(".")
        for i in range(len(parts), 0, -1):
            fname = ".".join(parts[:i])
            if fname in self._var_cache:
                node = self._var_cache[fname]
                for key in parts[i:]:
                    if isinstance(node, dict) and key in node:
                        node = node[key]
                    else:
                        node = None
                        break
                if isinstance(node, str):
                    return node
        return None

    def _get_reusable(self, dotted_path: str):
        if dotted_path in self._reusable_cache:
            return self._reusable_cache[dotted_path]
        fpath = os.path.join(self.reusables_dir, dotted_path.replace(".", os.sep) + ".md")
        if os.path.exists(fpath):
            with open(fpath, encoding="utf-8") as f:
                content = f.read()
            content = self.resolve(content)
            self._reusable_cache[dotted_path] = content
            return content
        return None

    def resolve(self, text: str, _depth: int = 0) -> str:
        if _depth > 6:
            return text

        def repl(m):
            path = m.group(1)
            if path.startswith("variables."):
                val = self._get_variable(path[len("variables."):])
                return val if val else m.group(0)
            if path.startswith("reusables."):
                val = self._get_reusable(path[len("reusables."):])
                return val if val else m.group(0)
            return m.group(0)

        out = text
        prev = None
        for _ in range(4):
            out = self.TAG_RE.sub(repl, out)
            if out == prev:
                break
            prev = out

        def ifversion_repl(m):
            inner = m.group(1)
            return self.ELSE_SPLIT_RE.split(inner)[0]

        out = self.IFVERSION_RE.sub(ifversion_repl, out)
        out = self.CALLOUT_START_RE.sub("> **Nota:**", out)
        out = self.CALLOUT_END_RE.sub("", out)

        out = self.CODETABS_WRAP_RE.sub("", out)
        out = self.CODETAB_START_RE.sub(
            lambda m: f"\n#### {self._humanize_lang(m.group(1))}\n", out
        )
        out = self.CODETAB_END_RE.sub("", out)
        return out

    _LANG_NAMES = {
        "typescript": "TypeScript",
        "javascript": "JavaScript",
        "python": "Python",
        "go": "Go",
        "dotnet": ".NET",
        "csharp": "C#",
        "java": "Java",
        "ruby": "Ruby",
        "shell": "Shell",
        "bash": "Bash",
        "curl": "cURL",
        "cli": "CLI",
    }

    @classmethod
    def _humanize_lang(cls, lang: str) -> str:
        return cls._LANG_NAMES.get(lang.lower(), lang.replace("-", " ").title())

    ACRONYMS = {"cli", "sdk", "api", "mcp", "id", "url", "ssh", "ssl", "oauth", "jwt", "ui", "ux"}
    BRAND_WORDS = {"github": "GitHub", "graphql": "GraphQL", "javascript": "JavaScript",
                   "typescript": "TypeScript", "openai": "OpenAI", "devops": "DevOps"}

    def resolve_autotitles(self, text: str) -> str:
        def repl(m):
            path = m.group(1)
            seg = path.split("#")[0].rstrip("/").split("/")[-1]
            words = seg.split("-")
            title = " ".join(self._title_word(w) for w in words)
            url = f"https://docs.github.com/en{path}"
            return f"[{title}]({url})"

        return self.AUTOTITLE_RE.sub(repl, text)

    @classmethod
    def _title_word(cls, w: str) -> str:
        low = w.lower()
        if low in cls.BRAND_WORDS:
            return cls.BRAND_WORDS[low]
        if low in cls.ACRONYMS:
            return w.upper()
        return w.title()

    @staticmethod
    def strip_html_comments(text: str) -> str:
        return re.sub(r"<!--.*?-->", "", text, flags=re.DOTALL)

    @staticmethod
    def strip_front_matter(text: str) -> str:
        m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.DOTALL)
        if not m:
            return text
        front, body = m.group(1), m.group(2)
        try:
            meta = yaml.safe_load(front) or {}
            title = meta.get("title", "")
        except Exception:
            title = ""
        body = body.lstrip("\n")
        return f"# {title}\n\n{body}" if title else body


# --------------------------------------------------------------------------
# Redacao de segredos de exemplo
# --------------------------------------------------------------------------

# Padrao: tokens do GitHub (ghp_, ghs_, github_pat_, secret_scanning_, etc.)
# que aparecem em documentacao de exemplo e disparam o push protection.
_SECRET_PATTERNS = [
    # GitHub fine-grained PAT
    re.compile(r"\bgithub_pat_[A-Za-z0-9_]{36,}\b"),
    # GitHub classic PAT / OAuth token
    re.compile(r"\bghp_[A-Za-z0-9]{36,}\b"),
    # GitHub Actions token
    re.compile(r"\bghs_[A-Za-z0-9]{36,}\b"),
    # GitHub refresh token
    re.compile(r"\bghr_[A-Za-z0-9]{36,}\b"),
    # Secret scanning example token (used in learner exercises)
    re.compile(r"\bsecret_scanning_[A-Za-z0-9_]{20,}\b"),
]


def redact_secrets(text: str) -> str:
    """Remove padroes de tokens que acionariam o push protection do GitHub."""
    for pattern in _SECRET_PATTERNS:
        text = pattern.sub("<TOKEN_REDACTED>", text)
    return text


# --------------------------------------------------------------------------
# Pipeline principal
# --------------------------------------------------------------------------

def run(sections: list[str], output_dir: str, keep_raw: bool):
    workdir = os.path.join(os.getcwd(), ".gh_docs_cache")
    os.makedirs(workdir, exist_ok=True)

    tar_bytes = download_repo_tarball(REPO_TARBALL_URL)
    extract_paths(tar_bytes, sections + ["data/reusables", "data/variables"], workdir)

    resolver = LiquidResolver(workdir)

    total_processed = 0
    used_output_dirs = []
    for section in sections:
        src_dir = os.path.join(workdir, section)
        if not os.path.isdir(src_dir):
            print(f"[aviso] secao '{section}' nao encontrada, pulando")
            continue

        section_output = os.path.join(output_dir, os.path.basename(section))
        os.makedirs(section_output, exist_ok=True)
        used_output_dirs.append(section_output)

        for root, _dirs, files in os.walk(src_dir):
            rel_dir = os.path.relpath(root, src_dir)
            for fname in sorted(files):
                if not fname.endswith(".md"):
                    continue
                fpath = os.path.join(root, fname)
                rel_path = fname if rel_dir == "." else os.path.join(rel_dir, fname)
                with open(fpath, encoding="utf-8") as f:
                    content = f.read()

                resolved = resolver.resolve(content)
                resolved = resolver.resolve_autotitles(resolved)
                resolved = resolver.strip_front_matter(resolved)
                resolved = resolver.strip_html_comments(resolved)
                resolved = redact_secrets(resolved)
                resolved = resolved.strip() + "\n"

                # Pula paginas de indice sem conteudo real (so titulo/navegacao/comentarios)
                body_check = re.sub(r"^#[^\n]*\n*", "", resolved).strip()
                if not body_check:
                    print(f"[pulado] {section}/{rel_path} (pagina de indice sem conteudo)")
                    continue

                out_path = os.path.join(section_output, rel_path)
                os.makedirs(os.path.dirname(out_path), exist_ok=True)
                with open(out_path, "w", encoding="utf-8") as f:
                    f.write(resolved)
                total_processed += 1
                print(f"[ok] {section}/{rel_path}")

    print(f"\nConcluido: {total_processed} arquivos salvos em:")
    for d in used_output_dirs:
        print(f"  - {d}")

    if not keep_raw:
        import shutil
        shutil.rmtree(workdir, ignore_errors=True)


def main():
    parser = argparse.ArgumentParser(description="Baixa e limpa documentacao do github/docs")
    parser.add_argument(
        "--section",
        help=(
            "Caminho(s) da secao dentro de github/docs, separados por virgula "
            "se quiser mais de uma (ex: content/github-cli/github-cli). "
            "Obrigatorio, a menos que voce use --list ou --search. "
            "Use --list ou --search para descobrir o caminho certo."
        ),
    )
    parser.add_argument(
        "--output",
        default="./github-docs",
        help="Pasta de saida para os arquivos .md limpos",
    )
    parser.add_argument(
        "--keep-raw",
        action="store_true",
        help="Mantem os arquivos brutos baixados em .gh_docs_cache (util para debug)",
    )
    parser.add_argument(
        "--list",
        action="store_true",
        help="Lista as categorias de nivel superior disponiveis em content/ e sai",
    )
    parser.add_argument(
        "--search",
        metavar="PALAVRA-CHAVE",
        help="Busca secoes cujo caminho contenha a palavra-chave, e sai",
    )
    args = parser.parse_args()

    if args.list:
        list_top_level_categories()
        return
    if args.search:
        search_sections(args.search)
        return

    if not args.section:
        parser.error(
            "--section e obrigatorio (ex: --section content/github-cli/github-cli). "
            "Use --list ou --search PALAVRA-CHAVE para descobrir o caminho certo."
        )

    sections = [s.strip() for s in args.section.split(",") if s.strip()]
    run(sections, args.output, args.keep_raw)


if __name__ == "__main__":
    main()
