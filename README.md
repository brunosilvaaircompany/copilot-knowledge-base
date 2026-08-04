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

## Criar um novo deck

```bash
# atualizar Reveal.js e fontes locais quando necessário
node scripts/vendor-assets.js

# deck linkado ao _shared/ (recomendado para o repositório)
node build.js --title "Meu Treinamento" --output decks/meu-treinamento

# arquivo único com tudo embutido (para compartilhar/exportar PDF)
node build.js --title "Meu Treinamento" --output decks/meu-treinamento --standalone

# vincular fontes ao freshness check e registrar a baseline
node build.js --title "Meu Treinamento" --output decks/meu-treinamento \
  --source github-docs/content/copilot/get-started/features.md \
  --source github-docs/content/copilot/get-started/best-practices.md \
  --register-freshness
```

`--source` pode ser repetido. O registro é opt-in: `--register-freshness`
adiciona o deck a `decks/deck-sources.yml` e grava os hashes iniciais em
`decks/.freshness-state.json`.

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

## Estrutura

```
index.html                        # Galeria de decks (busca + filtro por tags)
build.js                          # Gerador de decks
scripts/vendor-assets.js          # Baixa Reveal.js e fontes para uso local
_shared/
├── slides-anchored.css           # Design system: tokens claro/escuro, componentes
├── core.js                       # Tema (persistido, sincronizado entre páginas)
├── slide-editor.js               # Editor visual
├── slide-templates.js             # Templates de slide
└── vendor/                        # Reveal.js, plugins e fontes versionados
gallery/
├── gallery.css                    # Estilos extraídos da galeria
└── gallery.js                     # Catálogo, filtros e backup da galeria
_templates/
└── base.html                     # Template base dos decks gerados
decks/
└── copilot-training/             # Deck de exemplo (index.html + slides.html)
docs/
├── EDITOR_GUIDE.md               # Editor: recursos e atalhos
├── TEMPLATES_GUIDE.md            # Criar e usar templates
└── PROJECT_STRUCTURE.md          # Convenções do projeto
scripts/
├── fetch_github_docs.py          # Sincroniza github-docs/ com github/docs
└── check_slides_freshness.py     # Verifica se os decks ficaram desatualizados
github-docs/                      # Espelho local da documentação (gerado)
decks/deck-sources.yml            # Manifesto: deck → fontes em github-docs/
requirements.txt                  # Dependências Python (requests, pyyaml)
.github/workflows/
├── fetch-docs.yml                # Semanal: atualiza github-docs/
└── check-slides-freshness.yml    # Semanal: alerta decks desatualizados
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

## Verificação de desatualização dos decks

**`decks/deck-sources.yml`** mapeia cada deck HTML aos arquivos de
`github-docs/` que serviram de fonte para o conteúdo. O workflow
**`.github/workflows/check-slides-freshness.yml`** compara os hashes dessas
fontes a cada atualização da documentação e abre/atualiza uma issue
(`slides-stale`) quando um deck fica desatualizado.

```bash
# rodar localmente
python3 scripts/check_slides_freshness.py \
  --manifest decks/deck-sources.yml \
  --state decks/.freshness-state.json \
  --summary-file decks/.freshness-summary.md \
  --write-state
```

Ao criar um deck novo com `build.js`, adicione uma entrada em
`decks/deck-sources.yml` apontando para as fontes usadas — sem isso o
workflow não sabe que o deck existe. `decks/.freshness-state.json` é a
baseline e **deve ser commitado**; `--write-state` a atualiza após o check.

Alertas opcionais (issue já é automática): comentário em issue existente,
GitHub Discussion e/ou e-mail via SMTP — configure os secrets
`ALERT_ISSUE_NUMBER`, `DISCUSSION_CATEGORY_ID` ou `SMTP_*`/`ALERT_EMAIL_*`
no repositório, se quiser esses canais extras.

## Créditos e licenças

- **[Octicons](https://primer.style/octicons/)** © GitHub, [licença MIT](https://github.com/primer/octicons/blob/main/LICENSE) — ícones embutidos no sprite dos decks
- **[Mona Sans](https://github.com/github/mona-sans)** © GitHub, SIL Open Font License 1.1 — carregada via CDN (Fontsource)
- **[Octodex](https://octodex.github.com/)** © GitHub — mascotes referenciados por URL, sujeitos aos [termos de uso do Octocat](https://github.com/logos)
- **[Reveal.js](https://revealjs.com/)** © Hakim El Hattab, licença MIT — via CDN

O código deste projeto está sob a [licença MIT](LICENSE).
