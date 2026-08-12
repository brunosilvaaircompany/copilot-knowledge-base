# Estrutura do Projeto de Slides — GitHub Copilot

Organização que permite múltiplos decks reutilizando CSS, JS e layout base.

```
copilot-slides/
├── _shared/
│   ├── slides-anchored.css       ← CSS compartilhado (Primer tokens, tipografia, etc.)
│   ├── core.js                   ← JS compartilhado (tema claro/escuro, toggle)
│   ├── slide-editor.js            ← Editor visual com persistência por deck
│   ├── slide-templates.js         ← Templates de slide
│   └── vendor/                    ← Reveal.js, plugins e fontes versionados
├── gallery/
│   ├── gallery.css                ← Estilos da galeria
│   └── gallery.js                 ← Catálogo, filtros e backup
├── guide.html                     ← Viewer formatado dos guias Markdown
├── guide-viewer.js                ← Carregamento, código, cópia e download
├── _templates/
│   └── base.html                 ← Template base (sem conteúdo, só estrutura)
├── build.js                      ← Script Node que gera um novo deck a partir do template
├── scripts/
│   ├── check_slides_freshness.py ← Camada 1: diff das fontes por slide_id; abre issues
│   ├── deck_content.py           ← Leitor Python dos blocos de content.md (texto do slide)
│   ├── semantic_freshness.py     ← Camada 2: gate semântico opcional (none|command|http)
│   ├── verdict_format.py         ← Formato do veredito exigido para fechar a issue
│   ├── freshness_verdict.py      ← Aplica o veredito ao estado (pending → ok/stale)
│   ├── fetch_github_docs.py      ← Sincroniza github-docs/ a partir de github/docs
│   └── fetch_vscode_docs.py     ← Sincroniza vscode-docs/ a partir de microsoft/vscode-docs
├── .github/workflows/
│   ├── build-decks.yml           ← Verifica index.html vs content.md e os dois parsers
│   ├── check-slides-freshness.yml ← Roda a checagem e abre as issues
│   └── freshness-verdict.yml     ← Fecha o ciclo de estado a partir da issue/PR
├── github-docs/                   ← Espelho textual da documentação do GitHub
├── vscode-docs/                   ← Espelho textual da documentação do VS Code (v1: só texto, sem imagens)
├── decks/
│   ├── copilot-training/
│   │   ├── index.html            ← Deck compilado (gerado por build.js ou copiado de base.html)
│   │   └── content.yaml          ← (opcional) Slides em YAML para formato declarativo
│   ├── copilot-advanced/
│   │   └── index.html
│   └── ...
└── README.md                     ← Documentação
```

Os links da seção **Guias** usam `guide.html?file=...`. O viewer valida os
arquivos por allowlist, renderiza Markdown com os assets locais em
`_shared/vendor/` e sanitiza o resultado antes de exibi-lo.

---

## Opção 1: Simples (recomendado para começar)

1. **Copie o arquivo `base.html`** e renomeie para `decks/seu-topico/index.html`
2. **Edite só as `<section>`** — estrutura, CSS e JS vêm de `_shared/`
3. **Os caminhos são relativos**: `../../_shared/slides-anchored.css`

```html
<!-- decks/copilot-training/index.html -->
<!DOCTYPE html>
<html lang="pt-BR" data-color-mode="dark" data-dark-theme="dark" data-light-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="dark light" />
  <title>Seu Título</title>

  <link rel="stylesheet" href="../../_shared/vendor/reveal.js/dist/reset.css" />
  <link rel="stylesheet" href="../../_shared/vendor/reveal.js/dist/reveal.css" />
  
  <!-- Stylesheet compartilhado -->
  <link rel="stylesheet" href="../../_shared/slides-anchored.css" />
</head>
<body>

<!-- Sprite de Octicons (sempre igual) -->
<svg class="oc-sprite" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
  <!-- Copie o bloco inteiro de <symbol> do template -->
</svg>

<div class="reveal">
<div class="slides">

  <!-- Customize só as seções de conteúdo -->
  <section class="anchored-cover">
    <!-- ... -->
  </section>

  <!-- Seus slides aqui -->

</div>
</div>

<!-- Script compartilhado -->
<script src="../../_shared/core.js"></script>
<script>
  SlideLayouts.initTheme();
</script>

<!-- Reveal.js vendorizado -->
<script src="../../_shared/vendor/reveal.js/dist/reveal.js"></script>
<script src="../../_shared/vendor/reveal.js/plugin/highlight/highlight.js"></script>
<script src="../../_shared/vendor/reveal.js/plugin/notes/notes.js"></script>
<script>
  var prefersReduced = window.matchMedia
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  Reveal.initialize({
    hash: true,
    slideNumber: "c/t",
    progress: true,
    controls: true,
    center: false,
    transition: prefersReduced ? "none" : "fade",
    transitionSpeed: "fast",
    backgroundTransition: prefersReduced ? "none" : "fade",
    plugins: [ RevealHighlight, RevealNotes ]
  });
</script>
</body>
</html>
```

**Vantagem:** Zero dependências, funciona abrir arquivo direto no navegador (se servir por HTTP local).

---

## Opção 2: Com Build Script (mais sofisticada)

Um script Node que gera um novo deck automaticamente:

```bash
# Criar novo deck
node build.js --title "Copilot Avançado" --output decks/copilot-advanced

# Resultado:
# decks/copilot-advanced/index.html ← pronto para editar, com CSS/JS já linkados
```

**Benefício:** Não repete caminho relativo, mantém a estrutura automaticamente quando CSS/JS mudam.

Veja o arquivo `build.js` abaixo.

---

## Opção 3: Standalone para Cada Deck (máxima portabilidade)

Se você quer que cada deck seja um arquivo único (como o `copilot-slides-standalone.html`):

```bash
# Gera decks/copilot-training/slides.html com CSS+JS embutidos
node build.js --title "Copilot Training" --standalone --output decks/copilot-training
```

**Benefício:** Cada deck é autossuficiente; fácil compartilhar por email ou baixar.  
**Desvantagem:** Duplica CSS/JS em cada arquivo.

---

## Como Usar

### 1. **Estruture o projeto**
```bash
mkdir -p copilot-slides/{_shared,_templates,decks}
```

### 2. **Coloque os arquivos compartilhados**
```bash
cp slides-anchored.css copilot-slides/_shared/
cp core.js copilot-slides/_shared/
```

### 3. **Crie o template base** (veja abaixo)
```bash
# Copie o conteúdo de base.html abaixo para copilot-slides/_templates/base.html
```

### 4. **Crie um novo deck**

**Opção 2a (manual):**
```bash
cp _templates/base.html decks/seu-topico/index.html
# Abra em editor, edite as <section>
```

**Opção 2b (com build script):**
```bash
node build.js --title "Seu Tópico" --output decks/seu-topico
```

### 5. **Sirva localmente** (para testar)
```bash
# Python
python3 -m http.server 8000

# Ou Node
npx http-server -p 8000
```

Abra `http://localhost:8000/decks/seu-topico/`

---

## Mantendo CSS/JS Sincronizados

Se você corrigir um bug no `slides-anchored.css` ou `core.js`, **todos os decks que usam caminhos relativos herdam automaticamente** no próximo refresh. Nenhuma cópia manual.

Se usou `--standalone`, execute o build novamente para regenerar com a versão mais recente:
```bash
node build.js --title "Seu Tópico" --standalone --output decks/seu-topico --force
```

---

## Exemplo: Criar um Segundo Deck

Digamos que quer um deck sobre "Copilot Avançado":

```bash
# 1. Copie o template
cp _templates/base.html decks/copilot-advanced/index.html

# 2. Edite só as <section>
# (remove as seções de "Conceitos & casos de uso" e adiciona as suas)

# 3. Abra no navegador
# http://localhost:8000/decks/copilot-advanced/

# O CSS e JS da capa, toggle de tema, Octicons — tudo vem de _shared/
```

---

## Checklist para Novo Deck

- [ ] HTML criado em `decks/seu-topico/index.html`
- [ ] `<link>` ao `../../_shared/slides-anchored.css` (ou rode `build.js`)
- [ ] `<script src="../../_shared/core.js">` + `SlideLayouts.initTheme()`
- [ ] Sprite de Octicons copiado (ou use uma URL centralizada)
- [ ] Sections customizadas com seu conteúdo
- [ ] Testado em `http://localhost:PORT/decks/seu-topico/`

---

## Troubleshooting

**CSS não carrega quando abro `.html` direto?**
→ Abra por HTTP (`python3 -m http.server 8000`), não como `file://`.

**Temas não comutam ou o logo não aparece?**
→ Verifique `<script src="../../_shared/core.js">` e a posição do sprite.

**Dois decks com CSS/JS diferentes?**
→ Coloque versões customizadas em `decks/seu-topico/_local/` e ajuste os `<link>` relativos.

---

## Próximos Passos

1. Use a **Opção 1** se quer simplicidade — copie template, edite seções.
2. Considere **Opção 2** + `build.js` se vai criar 3+ decks.
3. Documente as **convenções de classe** (`.slide-head`, `.anchored-card`, etc.) para o time.
