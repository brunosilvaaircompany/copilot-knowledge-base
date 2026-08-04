# Plano: 3 ajustes no Copilot Knowledge Base

Escopo definido pelo usuário: (1) isolar o editor por deck, (2) vendorizar
Reveal.js + fontes para o modo standalone funcionar offline, (3) extrair o
CSS/JS inline do index.html.

## Contexto levantado
- `_shared/slide-editor.js`: `STORAGE_KEY = "slide-editor:content"` e
  `PANEL_STATE_KEY = "slide-editor:panel-open"` são chaves fixas (linhas
  21-22), usadas em `loadSlides`/`saveSlides` (87, 99), `resetSlides` (1323)
  e `openPanel`/`closePanel`/`init` (1221, 1231, 1353). Nenhuma referência a
  `location.pathname` hoje — todo deck no mesmo domínio compartilha o mesmo
  conteúdo salvo.
- `index.html` backup (`BACKUP_KEYS`, ~linha correspondente ao IIFE de
  backup): lista fixa de 4 chaves (`deck-gallery:v1`, `slide-editor:content`,
  `slide-templates:custom`, `slide-layouts:theme`). Precisa virar
  prefix-match para acompanhar chaves por deck.
- CDN usados hoje (via `_shared/slides-anchored.css`, `_templates/base.html`,
  `decks/copilot-training/index.html`,
  `decks/copilot-training/slides.html`):
  - Reveal.js: `reset.css`, `reveal.css`, `reveal.js`,
    `plugin/highlight/highlight.js`, `plugin/notes/notes.js` — todos de
    `cdn.jsdelivr.net/npm/reveal.js@5/...`.
  - Fontes (`@font-face` em `_shared/slides-anchored.css`, linhas ~26-48,
    duplicadas nos standalones): Mona Sans, Hubot Sans, Monaspace Neon
    (400 e 700) — todas de `cdn.jsdelivr.net/npm/@fontsource*/...`.
  - Imagens do Octodex (`octodex.github.com/images/*.jpg|png`) — usadas
    como conteúdo dos slides e no seletor de imagens do editor
    (`_shared/slide-editor.js` `OFFICIAL_IMAGES`, `_shared/slide-templates.js`).
    **Fora de escopo**: são assets de marca do GitHub, não infraestrutura;
    vendorizar todos os mascotes é desproporcional ao pedido.
- `index.html` tem `<style>` (~300 linhas) e dois `<script>` IIFEs inline
  (galeria data-driven + backup em pasta local, ~470 linhas) — únicos
  arquivos do projeto que não seguem o padrão `_shared/` de separar CSS/JS.
- Projeto não tem `package.json`/dependências Node — `build.js` só usa
  `fs`/`path`. Deve continuar assim (sem adicionar npm deps).

## Ordem de execução
- **Fase 1** e **Fase 2** são independentes, podem ser feitas em paralelo.
- **Fase 3** depende da Fase 1 (evita reescrever a lógica de backup duas
  vezes — a Fase 1 corrige a lógica ainda dentro de `index.html`, a Fase 3
  só relocaliza o código já corrigido).

---

## Fase 1 — Isolamento do editor por deck

**Objetivo**: cada deck (path da página) ter seu próprio conteúdo editado e
estado de painel, sem vazar para outros decks.

1. Em `_shared/slide-editor.js`, derivar um `deckId` estável a partir de
   `window.location.pathname` (normalizar barra final, ex.:
   `/decks/copilot-training/` e `/decks/copilot-training/index.html` devem
   resolver ao mesmo id — usar o pathname sem barra final e sem
   `index.html`/`slides.html` como sufixo, ou hash simples do pathname).
2. Trocar `STORAGE_KEY`/`PANEL_STATE_KEY` fixos por chaves compostas, ex.:
   `` `slide-editor:content:${deckId}` `` e
   `` `slide-editor:panel-open:${deckId}` ``. Atualizar todos os pontos de
   leitura/escrita (`loadSlides`, `saveSlides`, `resetSlides`,
   `openPanel`/`closePanel`, `init`).
3. **Decisão de migração**: como a chave antiga (`slide-editor:content`)
   era compartilhada, não há como saber a qual deck ela pertencia. Não
   migrar automaticamente — documentar que a troca é uma quebra pontual
   (usuários com edições não salvas em backup as perdem uma vez; dados já
   incluídos em backups antigos continuam recuperáveis manualmente).
4. `slide-templates:custom` (`_shared/slide-templates.js`) **continua
   global** — templates custom são deliberadamente compartilhados entre
   decks, não é bug.
5. Em `index.html`, trocar `BACKUP_KEYS` (lista fixa) por um mecanismo de
   prefixo: `collectBackup()` passa a iterar `Object.keys(localStorage)` e
   incluir toda chave que comece com `deck-gallery:v1`, `slide-templates:custom`,
   `slide-layouts:theme`, `slide-editor:content:` ou `slide-editor:panel-open:`.
   `applyBackup()` deve: (a) gravar todas as chaves presentes no backup: (b)
   remover do localStorage atual qualquer chave com esses mesmos prefixos
   que **não** esteja presente no backup (para restaurar de fato o estado,
   inclusive remoção de decks editados depois do backup).

**Arquivos**: [_shared/slide-editor.js](_shared/slide-editor.js),
[index.html](index.html) (bloco de backup).

**Verificação**:
- Servir por HTTP (`python3 -m http.server 8000`), abrir dois decks
  diferentes, editar texto em cada um, recarregar e confirmar que as edições
  não aparecem uma na outra.
- Inspecionar DevTools → Application → Local Storage e confirmar chaves
  `slide-editor:content:<deck>` distintas por deck.
- Salvar backup com edições em 2 decks, limpar localStorage
  (`localStorage.clear()` no console), restaurar o backup e confirmar que
  as edições de ambos os decks voltam.

---

## Fase 2 — Vendorizar Reveal.js e fontes (modo standalone offline de verdade)

**Objetivo**: um deck gerado com `--standalone` deve abrir via `file://`
sem internet (exceto imagens do Octodex, que ficam de fora por decisão).

1. Criar `scripts/vendor-assets.js` (Node, só módulos nativos `https`/`fs`/
   `path`, sem npm deps — mesmo espírito de `fetch_github_docs.py`, mas em
   JS para reaproveitar o runtime do `build.js`). Baixa e grava:
   - `_shared/vendor/reveal.js/dist/reset.css`
   - `_shared/vendor/reveal.js/dist/reveal.css`
   - `_shared/vendor/reveal.js/dist/reveal.js`
   - `_shared/vendor/reveal.js/plugin/highlight/highlight.js`
   - `_shared/vendor/reveal.js/plugin/notes/notes.js`
   - `_shared/vendor/fonts/mona-sans/mona-sans-latin-wght-normal.woff2`
   - `_shared/vendor/fonts/hubot-sans/hubot-sans-latin-wght-normal.woff2`
   - `_shared/vendor/fonts/monaspace-neon/monaspace-neon-latin-400-normal.woff2`
   - `_shared/vendor/fonts/monaspace-neon/monaspace-neon-latin-700-normal.woff2`
   URLs de origem: as mesmas já usadas hoje (`cdn.jsdelivr.net/npm/reveal.js@5/...`
   e `cdn.jsdelivr.net/npm/@fontsource*/...`), fixadas na versão atual (`@5`)
   para reprodutibilidade.
2. Rodar o script uma vez e **commitar** os arquivos vendorizados (mesmo
   tratamento dado a `github-docs/`: mirror local versionado, não
   `node_modules` ignorado).
3. Atualizar `_shared/slides-anchored.css`: trocar as 4 URLs de `@font-face`
   de `cdn.jsdelivr.net/...` para os caminhos locais relativos ao próprio
   CSS (`./vendor/fonts/...`), único ponto de ajuste (herdado por todos os
   decks linkados e pela geração standalone).
4. Atualizar `_templates/base.html`: trocar os `<link>` de
   `reset.css`/`reveal.css` e os `<script src>` de `reveal.js`/`highlight.js`/
   `notes.js` para os caminhos locais vendorizados
   (`../../_shared/vendor/reveal.js/...`), removendo o
   `<link rel="preconnect" href="https://cdn.jsdelivr.net" ...>` (não é mais
   necessário para esses recursos).
5. Atualizar `build.js`: no modo `--standalone`, ler também os arquivos
   vendorizados (`reveal.js`, `highlight.js`, `notes.js`, `reset.css`,
   `reveal.css`) e:
   - embutir `reset.css`+`reveal.css` no mesmo bloco `<style>` já usado para
     `slides-anchored.css` (texto puro, sem problema de path resolution);
   - embutir `reveal.js`+`highlight.js`+`notes.js` como `<script>` de texto
     puro, na mesma posição onde hoje ficam os `<script src=".../reveal.js">`
     (os plugins do Reveal são só globais registrados via `RevealHighlight`/
     `RevealNotes`, não dependem de `document.currentScript` para carregar
     assets — seguro inlinar como texto).
   - o `@font-face` já vem correto via CSS vendorizado (passo 3), nenhum
     ajuste adicional necessário no build script para fontes.
6. Regenerar os artefatos existentes depois do fix no template/build:
   - `decks/copilot-training/index.html` via
     `node build.js --title "Copilot Training" --output decks/copilot-training --force`
     (comparar antes/depois para confirmar que não há conteúdo customizado
     sendo perdido — se houver, portar manualmente antes de sobrescrever).
   - `decks/copilot-training/slides.html` via
     `node build.js --title "Copilot Training" --output decks/copilot-training --standalone --force`.
7. Atualizar `index.html` (`@font-face` da galeria, linha ~39) para também
   apontar ao Mona Sans vendorizado (`_shared/vendor/fonts/mona-sans/...`),
   por consistência — mesmo não sendo standalone, remove outra dependência
   de CDN em runtime.
8. Documentar em `README.md` e `docs/PROJECT_STRUCTURE.md`: nova pasta
   `_shared/vendor/`, o script `scripts/vendor-assets.js` e que ele deve
   rodar de novo ao trocar a versão do Reveal.js/fontes.

**Fora de escopo**: imagens do Octodex continuam vindo de
`octodex.github.com` (assets de marca, não infraestrutura de build).

**Arquivos**: `scripts/vendor-assets.js` (novo),
[_shared/slides-anchored.css](_shared/slides-anchored.css),
[_templates/base.html](_templates/base.html), [build.js](build.js),
[decks/copilot-training/index.html](decks/copilot-training/index.html),
[decks/copilot-training/slides.html](decks/copilot-training/slides.html),
[index.html](index.html), [README.md](README.md),
[docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md).

**Verificação**:
- Rodar `node scripts/vendor-assets.js` e conferir que os arquivos aparecem
  em `_shared/vendor/`.
- Servir por HTTP, abrir um deck linkado e um standalone, bloquear
  `cdn.jsdelivr.net` (DevTools → Network → block request domain) e
  recarregar: Reveal.js e fontes devem continuar funcionando (Octodex pode
  quebrar — esperado).
- Gerar um deck de teste (`node build.js --title Teste --output decks/_tmp --standalone --force`),
  abrir via `file://` direto (sem servidor) com rede desligada, confirmar
  que renderiza; apagar `decks/_tmp` depois do teste.

---

## Fase 3 — Extrair CSS/JS inline de index.html *(depende da Fase 1)*

**Objetivo**: `index.html` deixa de concentrar ~300 linhas de `<style>` e
~470 linhas de `<script>`, seguindo o mesmo padrão de separação já usado
pelos decks (`_shared/core.js`, etc.).

1. Criar pasta `gallery/` na raiz (specífica da página `index.html`, não
   compartilhada com decks — por isso não entra em `_shared/`).
2. Mover o bloco `<style>` de `index.html` para `gallery/gallery.css`;
   substituir por `<link rel="stylesheet" href="gallery/gallery.css" />`
   no `<head>`.
3. Mover os dois IIFEs de `<script>` (galeria data-driven + backup em pasta
   local, já com a lógica de prefixo corrigida na Fase 1) para
   `gallery/gallery.js`; substituir por
   `<script src="gallery/gallery.js"></script>` antes do `</body>`, mantendo
   a chamada a `SlideLayouts.initTheme()` como está.
4. Conferir que `index.html` continua com o `<svg>` sprite de Octicons, o
   markup dos modais e o HTML estático dos cards — só CSS/JS saem do
   arquivo, não a estrutura.
5. Atualizar `docs/PROJECT_STRUCTURE.md` para listar `gallery/gallery.css`
   e `gallery/gallery.js` na árvore do projeto.

**Arquivos**: [index.html](index.html), `gallery/gallery.css` (novo),
`gallery/gallery.js` (novo), [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md).

**Verificação**:
- Servir por HTTP, abrir `index.html`, confirmar visualmente que nada
  mudou: busca, chips de tag, editar/duplicar/excluir deck, modal, e os
  botões de backup continuam funcionando.
- Checar console do navegador sem erros 404 (paths do `gallery/` corretos)
  nem erros de script.

---

## Decisões registradas
- `slide-templates:custom` permanece global entre decks (comportamento
  desejado, não é bug a corrigir na Fase 1).
- Sem migração automática da chave antiga de conteúdo do editor — troca é
  uma quebra pontual aceita em favor de corrigir o isolamento corretamente.
- Imagens do Octodex ficam de fora da vendorização (fora de escopo, assets
  de marca).
- Vendor assets (`_shared/vendor/`) são **commitados no repo** (mirror
  versionado, como `github-docs/`), não tratados como `node_modules`
  ignorado.
- Sem novas dependências npm — script de vendorização usa só `https`/`fs`/
  `path` do Node.
