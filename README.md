# Copilot Training Decks

Sistema completo de slides para treinamentos de **GitHub Copilot**, no layout
**anchored**: tema claro/escuro, tipografia Mona Sans, componentes oficiais
(Octicons + mascotes do Octodex) e um **editor visual integrado** — edite os
slides direto no navegador, sem tocar em código.

## Início rápido

```bash
# sirva por HTTP (necessário para os decks linkados)
python3 -m http.server 8000

# galeria de decks
open http://localhost:8000/

# ou abra o deck compilado pelo navegador
open http://localhost:8000/decks/copilot-training/
```

## Formato declarativo de decks (recomendado)

Cada deck tem um arquivo `decks/{nome}/content.md` que é a **única fonte
editável** do conteúdo. O `index.html` é gerado automaticamente pelo build e
**não deve ser editado manualmente**.

### Estrutura de `content.md`

```markdown
---
slide_id: meu-deck/capa
template: cover
title: Título do Deck
subtitle: Subtítulo descritivo.
eyebrow: Contexto
meta: "Time · Mês Ano"
---

---
slide_id: meu-deck/intro
template: header_body
kicker: Introdução
title: Título do Slide
subtitle: Breve contexto.
source: github-docs/content/copilot/get-started/features.md
source_headings:
  - Features overview
---
- Ponto principal um
- Ponto principal dois
```

Regras do formato:
- `slide_id` é obrigatório, global e único: `^[a-z0-9][a-z0-9-]*/[a-z0-9][a-z0-9-]*$`
- `template` é obrigatório (ver templates disponíveis abaixo)
- `source` e `source_headings` ficam no bloco do slide; `source_headings` sem `source` é erro
- `stack` agrupa slides contíguos em stacks do Reveal.js; reutilização não contígua do mesmo `stack` é erro
- Markdown permitido no corpo: parágrafos, listas `-`, `**negrito**`, links `[texto](url)` e fenced code blocks
- Template `raw` aceita HTML literal no corpo (sem freshness)

### Templates disponíveis

`cover`, `header_body`, `cards_2col`, `list_numbered`, `icon_list`,
`code_demo`, `terminal_demo`, `comparison`, `quote`, `faq`, `figure`,
`architecture`, `stats`, `timeline`, `divider`, `closing`, `exercise`,
`resources`, `raw`.

### Compilar um deck

```bash
# instalar dependências (primeira vez)
npm install

# compilar content.md → index.html + atualizar manifesto de freshness
node build.js --deck decks/copilot-training

# verificar se o index.html commitado está sincronizado (usado no CI)
node build.js --deck decks/copilot-training --check-only
```

O build gera automaticamente `decks/.freshness-manifest.generated.yml` com as
fontes de cada slide. O `deck-sources.yml` não é mais consumido.

## Criar um novo deck

```bash
# atualizar Reveal.js e fontes locais quando necessário
node scripts/vendor-assets.js

# criar estrutura inicial (modo legado — cria index.html vazio a partir do template)
node build.js --title "Meu Treinamento" --output decks/meu-treinamento

# arquivo único com tudo embutido (para compartilhar/exportar PDF)
node build.js --title "Meu Treinamento" --output decks/meu-treinamento --standalone
```

Para o novo fluxo declarativo, crie `decks/meu-deck/content.md` diretamente
e execute `node build.js --deck decks/meu-deck`.

## Editor visual

Todo deck carrega o editor (botão ⚙️ no canto). Recursos:

- **Editar na página** — clique e digite direto no slide; os atalhos do
  Reveal ficam suspensos durante a edição e tudo salva automaticamente
- **Desfazer / Refazer** — `Ctrl+Z` / `Ctrl+Y`, até 50 níveis, cobrindo
  digitação, novos slides, duplicação, exclusão e edições de HTML
- **Ícones e imagens oficiais** — insira Octicons do sprite e mascotes do
  Octodex na posição do cursor
- **Templates** — capa, agenda, divisor, cards, comparação ✕/✓, citação,
  figura e mais, incluindo código, terminal, métricas, linha do tempo e FAQ,
  organizados por categoria
- **Persistência** — edições ficam no `localStorage` do navegador;
  exporte como JSON ou HTML pelo painel

Guia completo: [docs/EDITOR_GUIDE.md](docs/EDITOR_GUIDE.md)

## Guias no navegador

Os guias da galeria abrem em um viewer próprio, com Markdown formatado e
alternância para **Código-fonte**. No modo de código, use **Copiar código** ou
**Baixar .md** para reutilizar o conteúdo. O viewer carrega os arquivos por
HTTP; por isso, sirva o repositório com `python3 -m http.server 8000` (ou outro
servidor estático) em vez de abrir o HTML diretamente via `file://`.

Os arquivos disponíveis ficam na allowlist de `guide-viewer.js`. Para adicionar
um novo guia à galeria, inclua o arquivo nessa lista e crie um link para
`guide.html?file=caminho/do/guia.md`.

## Gerenciar decks na galeria

Cada card da galeria tem ações de **Editar** (nome, descrição, endereço e
tags, em uma janela de edição), **Duplicar** (cria uma cópia e já abre a
edição — útil para registrar um deck novo gerado pelo `build.js`) e
**Excluir** (decks padrão podem ser restaurados em "Restaurar decks padrão").

As alterações ficam no `localStorage` do navegador — personalizam a galeria
de quem edita, sem mudar os arquivos do repositório. Para alterar o catálogo
para todos, edite `BUILTIN_DECKS` no `index.html`.

## Backup em pasta local

A seção **Backup dos dados** na galeria protege tudo que vive no navegador
(decks da galeria, slides editados, templates e tema) contra limpeza de dados:

- **Chrome/Edge** — "Salvar backup" pede uma pasta local uma única vez
  (File System Access API); a pasta fica lembrada e as alterações da galeria
  passam a ser **salvas automaticamente** em `copilot-decks-backup.json`.
- **Firefox/Safari** — o backup é baixado como arquivo JSON.
- **Restaurar backup** aceita o JSON em qualquer navegador, com confirmação
  antes de substituir os dados atuais.

## Freshness por slide

O sistema rastreia o estado de atualização de cada slide individualmente, usando
`slide_id` como chave.

### Fluxo

1. O build gera `decks/.freshness-manifest.generated.yml` com as fontes de cada slide
2. O workflow `check-slides-freshness.yml` compara as fontes com o commit anterior
3. Para cada slide desatualizado, é criada/atualizada uma issue individual:
   **"Slide desatualizado: {slide_id}"**
4. A issue instrui o GitHub Copilot coding agent a avaliar o impacto e, se
   necessário, editar `content.md` e abrir um PR
5. O estado transita: `ok → stale → pending → ok` (ou `→ stale` se o PR for fechado sem merge)

### Arquivos de estado

- `decks/.freshness-manifest.generated.yml` — gerado pelo build; lista fontes por slide
- `decks/.freshness-state.json` — mantido pelo workflow; indexado por `slide_id`
- `decks/deck-sources.yml` — **descontinuado**; não é mais consumido

```
index.html                          # Galeria de decks
build.js                            # Compilador de decks
package.json                        # Dependências Node (js-yaml)
scripts/
├── parse_content.js                # Parser de content.md
├── render_slides.js                # Renderizador HTML por template
├── vendor-assets.js                # Baixa Reveal.js e fontes
├── fetch_github_docs.py            # Sincroniza github-docs/
├── fetch_vscode_docs.py            # Sincroniza vscode-docs/
└── check_slides_freshness.py       # Freshness por slide_id; cria issues individuais
_shared/
├── slides-anchored.css             # Design system
├── core.js                         # Tema
├── slide-editor.js                 # Editor visual (localStorage)
├── slide-templates.js              # Templates do editor (localStorage)
└── vendor/                         # Reveal.js, plugins e fontes
gallery/
├── gallery.css
└── gallery.js
_templates/
└── base.html                       # Template base dos decks
decks/
├── copilot-training/
│   ├── content.md                  # ← fonte editável
│   └── index.html                  # ← gerado; não editar diretamente
├── .freshness-manifest.generated.yml  # Gerado pelo build
└── .freshness-state.json           # Estado de freshness por slide_id
docs/
├── EDITOR_GUIDE.md
├── TEMPLATES_GUIDE.md
└── PROJECT_STRUCTURE.md
.github/workflows/
├── fetch-docs.yml                  # Semanal (seg): atualiza github-docs/
├── fetch-vscode-docs.yml           # Semanal (qua): atualiza vscode-docs/
├── check-slides-freshness.yml      # Verifica freshness; cria issues por slide_id
└── build-decks.yml                 # CI: verifica que index.html não diverge
requirements.txt                    # Dependências Python (requests, pyyaml)
```

Detalhes: [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md)

## Publicar no GitHub Pages

1. **Settings → Pages → Build and deployment**
2. Source: **Deploy from a branch**
3. Branch: `main`, pasta `/ (root)` → **Save**

O `.nojekyll` na raiz garante que os HTML sejam servidos diretamente.
A galeria fica em `https://<usuario>.github.io/<repo>/`.

> Nota: os links de guias na galeria apontam para os `.md` — no GitHub
> eles renderizam formatados; via Pages abrem como texto puro.

## Tema claro/escuro

O tema é persistido em `localStorage` (`slide-layouts:theme`) e **sincroniza
entre a galeria e todos os decks** — alternar em um vale para todos. O padrão
segue o `prefers-color-scheme` do sistema até a primeira escolha manual.

## Documentação sincronizada (github-docs/)

A pasta `github-docs/` espelha trechos da documentação oficial do GitHub
(`github/docs`), já limpos de tags de template (Liquid) e prontos para leitura
— útil como fonte de conteúdo para os decks ou para subir no Copilot Spaces/NotebookLM.

```bash
pip install -r requirements.txt

# atualizar (ou baixar pela 1ª vez) uma seção
python3 scripts/fetch_github_docs.py --section content/copilot --output ./github-docs

# descobrir o caminho certo de uma seção
python3 scripts/fetch_github_docs.py --list
python3 scripts/fetch_github_docs.py --search copilot-cli
```

O workflow **`.github/workflows/fetch-docs.yml`** roda isso automaticamente
toda segunda-feira e commita se a documentação mudou — ajuste `DOCS_SECTION`
no arquivo conforme as seções que seus decks usam como fonte.

## Documentação sincronizada (vscode-docs/)

A pasta `vscode-docs/` espelha trechos da documentação oficial do VS Code
(`microsoft/vscode-docs`), com front matter removido, tabs e callouts
convertidos para Markdown padrão, e prontos para leitura.

> **v1:** imagens não são baixadas — o espelho contém apenas texto.
> Links internos para arquivos do lote extraído são resolvidos como caminhos
> relativos locais; links para páginas fora do lote caem para a URL canônica
> em `https://code.visualstudio.com/docs/...` (âncoras preservadas).

```bash
pip install -r requirements.txt

# sincronizar manualmente as seções de Agentes, Agent Customization e Chat
python3 scripts/fetch_vscode_docs.py \
    --section docs/agents,docs/agent-customization,docs/chat \
    --output ./vscode-docs

# listar subsecoes disponíveis em docs/
python3 scripts/fetch_vscode_docs.py --list

# buscar por palavra-chave
python3 scripts/fetch_vscode_docs.py --search chat
```

O workflow **`.github/workflows/fetch-vscode-docs.yml`** roda isso
automaticamente toda quarta-feira e commita se a documentação mudou.

## Verificação de desatualização dos slides

O sistema usa `decks/.freshness-manifest.generated.yml` (gerado pelo `build.js`)
para rastrear as fontes de cada slide por `slide_id`. O workflow
`check-slides-freshness.yml` compara o estado atual das fontes com o commit
anterior e cria/atualiza uma issue individual por slide desatualizado.

```bash
# rodar localmente
python3 scripts/check_slides_freshness.py \
  --manifest decks/.freshness-manifest.generated.yml \
  --state decks/.freshness-state.json \
  --summary-file decks/.freshness-summary.md \
  --write-state
```

O `decks/.freshness-state.json` é commitado automaticamente pelo workflow.
O `decks/deck-sources.yml` foi descontinuado e não é mais consumido.

## Créditos e licenças

- **[Octicons](https://primer.style/octicons/)** © GitHub, [licença MIT](https://github.com/primer/octicons/blob/main/LICENSE) — ícones embutidos no sprite dos decks
- **[Mona Sans](https://github.com/github/mona-sans)** © GitHub, SIL Open Font License 1.1 — carregada via CDN (Fontsource)
- **[Octodex](https://octodex.github.com/)** © GitHub — mascotes referenciados por URL, sujeitos aos [termos de uso do Octocat](https://github.com/logos)
- **[Reveal.js](https://revealjs.com/)** © Hakim El Hattab, licença MIT — via CDN

O código deste projeto está sob a [licença MIT](LICENSE).
