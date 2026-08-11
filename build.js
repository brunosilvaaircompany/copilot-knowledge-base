#!/usr/bin/env node
/**
 * build.js — Gera novos decks a partir do template base ou de content.md
 *
 * Modos:
 *   node build.js --deck decks/meu-deck
 *       Compila decks/meu-deck/content.md → index.html + manifesto de freshness.
 *
 *   node build.js --title "Seu Título" --output decks/seu-topico
 *       Cria um deck vazio a partir do template (modo legado).
 *
 * Opções do modo --deck:
 *   --deck PATH          Caminho do diretório do deck com content.md (obrigatório)
 *   --check-only         Verifica drift sem reescrever; sai com código 1 se houver divergência
 *
 * Opções do modo legado (--title / --output):
 *   --title TEXT         Título do deck (obrigatório)
 *   --output PATH        Caminho de saída (obrigatório), ex: decks/copilot-101
 *   --standalone         Gera arquivo único com CSS+JS embutidos
 *   --force              Sobrescreve arquivo existente
 *   --source PATH        Fonte Markdown (pode repetir)
 *   --register-freshness Registra fontes no freshness check (legado)
 *   --help               Mostra esta mensagem
 */

"use strict";

const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Detecção de modo --deck (novo pipeline declarativo)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const rawArgs = process.argv.slice(2);
if (rawArgs.includes("--deck") || rawArgs.includes("--check-only")) {
  runDeckBuild(rawArgs);
  process.exit(0);
}

/**
 * Build pipeline para decks declarativos (content.md → index.html + manifesto).
 */
function runDeckBuild(args) {
  const yaml = require("js-yaml");
  const { parseContentMd, groupByStack } = require("./scripts/parse_content");
  const { renderSlides } = require("./scripts/render_slides");

  let deckDir = null;
  let checkOnly = false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--deck") { deckDir = args[++i]; }
    else if (args[i] === "--check-only") { checkOnly = true; }
  }

  if (!deckDir) {
    console.error("❌ Erro: --deck PATH é obrigatório no modo declarativo.");
    process.exit(1);
  }

  const contentPath = path.join(deckDir, "content.md");
  const outputPath = path.join(deckDir, "index.html");
  const manifestPath = path.join(__dirname, "decks", ".freshness-manifest.generated.yml");

  if (!fs.existsSync(contentPath)) {
    console.error(`❌ Erro: ${contentPath} não encontrado.`);
    process.exit(1);
  }

  // 1. Parse content.md
  let blocks;
  try {
    const text = fs.readFileSync(contentPath, "utf-8");
    blocks = parseContentMd(text, contentPath);
  } catch (e) {
    console.error(`❌ Erro ao parsear ${contentPath}: ${e.message}`);
    process.exit(1);
  }

  // 2. Derive deck title from cover slide (or first slide)
  const coverBlock = blocks.find(b => b.template === "cover") || blocks[0];
  const deckTitle = (coverBlock && coverBlock.fields && coverBlock.fields.title)
    ? coverBlock.fields.title
    : path.basename(deckDir);

  // 3. Group by stack and render slides HTML
  const groups = groupByStack(blocks);
  let slidesHtml;
  try {
    slidesHtml = renderSlides(groups);
  } catch (e) {
    console.error(`❌ Erro ao renderizar slides: ${e.message}`);
    process.exit(1);
  }

  // 4. Load base template and build final HTML
  const basePath = path.join(__dirname, "_templates", "base.html");
  if (!fs.existsSync(basePath)) {
    console.error(`❌ Erro: template base não encontrado: ${basePath}`);
    process.exit(1);
  }
  let html = fs.readFileSync(basePath, "utf-8");

  // Replace title
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(deckTitle)}</title>`);

  // Replace slides section content
  // Pattern: <div class="slides">\n(content)\n</div>\n</div>
  html = html.replace(
    /(<div class="slides">)[\s\S]*?(<\/div>\s*<\/div>\s*\n*<script)/,
    `$1\n\n${slidesHtml}\n\n</div>\n</div>\n\n<script`
  );

  // Prepend generated-file comment
  const generatedComment =
    `<!-- GENERATED FILE — do not edit manually.\n` +
    `     Source: ${path.relative(__dirname, contentPath)}\n` +
    `     Rebuild: node build.js --deck ${deckDir}\n` +
    `     Any manual edits will be overwritten. -->\n`;
  html = generatedComment + html;

  // 5. Handle --check-only (CI drift check)
  if (checkOnly) {
    if (!fs.existsSync(outputPath)) {
      console.error(`❌ Drift: ${outputPath} não existe mas content.md está presente.`);
      process.exit(1);
    }
    const existing = fs.readFileSync(outputPath, "utf-8");
    if (existing !== html) {
      console.error(`❌ Drift: ${outputPath} diverge do HTML que o build geraria a partir de content.md.`);
      console.error(`   Corrija executando: node build.js --deck ${deckDir}`);
      process.exit(1);
    }
    console.log(`✓ ${outputPath} está sincronizado com content.md.`);
    return;
  }

  // 6. Write index.html
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html, "utf-8");
  console.log(`✓ Gerado: ${outputPath}`);

  // 7. Update freshness manifest
  updateFreshnessManifest(manifestPath, contentPath, blocks, yaml);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Generate/update decks/.freshness-manifest.generated.yml from parsed blocks.
 */
function updateFreshnessManifest(manifestPath, contentPath, blocks, yaml) {
  // Load existing manifest to preserve other decks' entries
  let existing = { manifest_version: 1, slides: [] };
  if (fs.existsSync(manifestPath)) {
    try {
      existing = yaml.load(fs.readFileSync(manifestPath, "utf-8")) || existing;
    } catch (_) { /* ignore parse errors; rebuild */ }
  }

  const relContent = path.relative(path.dirname(path.dirname(manifestPath)), contentPath);

  // Remove entries for this deck (slide_ids starting with the deck prefix)
  const deckName = path.basename(path.dirname(contentPath));
  const existingSlides = (existing.slides || []).filter(s => {
    const id = s.slide_id || "";
    return !id.startsWith(deckName + "/");
  });

  // Build new entries for slides with source
  const newEntries = blocks
    .filter(b => b.source && b.source.length > 0)
    .map(b => {
      const entry = {
        slide_id: b.slide_id,
        content_md: relContent,
      };
      if (b.source.length === 1) {
        entry.source = b.source[0];
      } else {
        entry.source = b.source;
      }
      if (b.source_headings && b.source_headings.length > 0) {
        if (b.source_headings.length === 1) {
          entry.source_headings = b.source_headings[0];
        } else {
          entry.source_headings = b.source_headings;
        }
      }
      return entry;
    });

  const manifest = {
    manifest_version: 1,
    generated_at: new Date().toISOString(),
    slides: [...existingSlides, ...newEntries],
  };

  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  const manifestText = yaml.dump(manifest, { lineWidth: 120, quotingType: '"', forceQuotes: false });
  fs.writeFileSync(manifestPath, manifestText, "utf-8");
  console.log(`✓ Manifesto atualizado: ${manifestPath}`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Argumentos
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const args = process.argv.slice(2);
const options = {
  title: null,
  output: null,
  standalone: false,
  force: false,
  sources: [],
  registerFreshness: false
};

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--title") {
    options.title = args[i + 1];
    i++;
  } else if (args[i] === "--output") {
    options.output = args[i + 1];
    i++;
  } else if (args[i] === "--standalone") {
    options.standalone = true;
  } else if (args[i] === "--force") {
    options.force = true;
  } else if (args[i] === "--source") {
    options.sources.push(args[i + 1]);
    i++;
  } else if (args[i] === "--register-freshness") {
    options.registerFreshness = true;
  } else if (args[i] === "--help") {
    console.log(`
Uso: node build.js [opções]

Opções:
  --title TEXT        Título do deck (obrigatório)
  --output PATH       Caminho de saída (obrigatório)
                      Exemplo: decks/copilot-101
  --standalone        Gera arquivo único (CSS+JS embutidos)
  --force             Sobrescreve arquivo existente
  --source PATH       Fonte Markdown do deck (pode repetir)
  --register-freshness Registra fontes e baseline no freshness check
  --help              Mostra esta mensagem

Exemplos:
  node build.js --title "Copilot 101" --output decks/copilot-101
  node build.js --title "Advanced" --output decks/advanced --standalone
  node build.js --title "Advanced" --output decks/advanced --source github-docs/content/copilot/features.md --register-freshness
    `);
    process.exit(0);
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Validação
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

if (!options.title) {
  console.error("❌ Erro: --title é obrigatório");
  process.exit(1);
}
if (!options.output) {
  console.error("❌ Erro: --output é obrigatório");
  process.exit(1);
}
if (options.registerFreshness && options.sources.length === 0) {
  console.error("❌ Erro: --register-freshness exige ao menos um --source");
  process.exit(1);
}

const deckDir = options.output;
const deckPath = path.join(deckDir, "index.html");
const standaloneDir = deckDir;
const standalonePath = path.join(standaloneDir, "slides.html");
const outputFilePath = options.standalone ? standalonePath : deckPath;

// Verificar se arquivo existe e não é --force
if (fs.existsSync(outputFilePath) && !options.force) {
  console.error(`❌ Erro: ${outputFilePath} já existe. Use --force para sobrescrever.`);
  process.exit(1);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Ler template base
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const basePath = path.join(__dirname, "_templates", "base.html");
if (!fs.existsSync(basePath)) {
  console.error(`❌ Erro: arquivo template não encontrado: ${basePath}`);
  process.exit(1);
}

let html = fs.readFileSync(basePath, "utf-8");

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Substituições básicas
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

html = html
  .replace(/<title>.*?<\/title>/i, `<title>${options.title}</title>`)
  .replace(/Seu Título de Apresentação/g, options.title);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Se --standalone: embutir CSS + JS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

if (options.standalone) {
  console.log("📦 Modo standalone — embutindo CSS + JS...");

  const sharedDir = path.join(__dirname, "_shared");
  const vendorDir = path.join(sharedDir, "vendor");
  let resetCss, revealCss, css, js, templatesJs, editorJs, revealJs, highlightJs, notesJs;
  try {
    resetCss = fs.readFileSync(path.join(vendorDir, "reveal.js", "dist", "reset.css"), "utf-8");
    revealCss = fs.readFileSync(path.join(vendorDir, "reveal.js", "dist", "reveal.css"), "utf-8");
    css = fs.readFileSync(path.join(sharedDir, "slides-anchored.css"), "utf-8");
    js = fs.readFileSync(path.join(sharedDir, "core.js"), "utf-8");
    templatesJs = fs.readFileSync(path.join(sharedDir, "slide-templates.js"), "utf-8");
    editorJs = fs.readFileSync(path.join(sharedDir, "slide-editor.js"), "utf-8");
    revealJs = fs.readFileSync(path.join(vendorDir, "reveal.js", "dist", "reveal.js"), "utf-8");
    highlightJs = fs.readFileSync(path.join(vendorDir, "reveal.js", "plugin", "highlight", "highlight.js"), "utf-8");
    notesJs = fs.readFileSync(path.join(vendorDir, "reveal.js", "plugin", "notes", "notes.js"), "utf-8");
  } catch (err) {
    console.error(`❌ Erro ao ler arquivo compartilhado: ${err.message}`);
    process.exit(1);
  }

  const fontFiles = [
    "mona-sans/mona-sans-latin-wght-normal.woff2",
    "hubot-sans/hubot-sans-latin-wght-normal.woff2",
    "monaspace-neon/monaspace-neon-latin-400-normal.woff2",
    "monaspace-neon/monaspace-neon-latin-700-normal.woff2"
  ];
  try {
    for (const relativeFontPath of fontFiles) {
      const fontPath = path.join(vendorDir, "fonts", relativeFontPath);
      const fontData = fs.readFileSync(fontPath).toString("base64");
      css = css.replaceAll(`vendor/fonts/${relativeFontPath}`, `data:font/woff2;base64,${fontData}`);
    }
  } catch (err) {
    console.error(`❌ Erro ao ler fonte vendorizada: ${err.message}`);
    process.exit(1);
  }

  // Remover links ao CSS externo (reset/reveal vendorizados + slides-anchored)
  html = html.replace(
    /<link rel="stylesheet" href="\.\.\/\.\.\/_shared\/vendor\/reveal\.js\/dist\/(reset|reveal)\.css"\s*\/>\n?/g,
    ""
  );
  html = html.replace(
    /<link rel="stylesheet" href="\.\.\/\.\.\/_shared\/slides-anchored\.css"\s*\/>\n?/g,
    ""
  );

  // Remover scripts aos JS externos (core, templates, editor)
  html = html.replace(
    /<script src="\.\.\/\.\.\/_shared\/(core|slide-templates|slide-editor)\.js"><\/script>\n?/g,
    ""
  );

  // Remover chamada a SlideLayouts.initTheme() se estiver em <script> vazio
  html = html.replace(
    /<script>\s*SlideLayouts\.initTheme\(\);\s*<\/script>\n?/g,
    ""
  );

  // Injetar <style> antes de </head> (reset + reveal.css antes do tema local,
  // para preservar a ordem de cascata do modo linkado)
  const styleBlock = `\n  <style>\n${resetCss}\n${revealCss}\n${css}\n  </style>`;
  html = html.replace("</head>", styleBlock + "\n</head>");

  // Injetar <script> core + templates + editor ANTES dos scripts do Reveal,
  // para que window.SlideEditor/SlideLayouts existam quando o script de
  // inicializa\u00e7\u00e3o (Reveal.initialize + SlideEditor.init) rodar.
  const jsBlock = `<script>\n${js}\n${templatesJs}\n${editorJs}\nSlideLayouts.initTheme();\n</script>\n`;
  const revealTags = [
    '<script src="../../_shared/vendor/reveal.js/dist/reveal.js"></script>',
    '<script src="../../_shared/vendor/reveal.js/plugin/highlight/highlight.js"></script>',
    '<script src="../../_shared/vendor/reveal.js/plugin/notes/notes.js"></script>'
  ];
  const revealBlock = `<script>\n${revealJs}\n${highlightJs}\n${notesJs}\n</script>\n`;
  if (html.indexOf(revealTags[0]) >= 0) {
    html = html.replace(revealTags[0] + "\n" + revealTags[1] + "\n" + revealTags[2], revealBlock.trimEnd());
    html = html.replace(revealBlock.trimEnd(), jsBlock + revealBlock.trimEnd());
  } else {
    html = html.replace("</body>", jsBlock + revealBlock + "</body>");
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Criar diretório e escrever arquivo
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

try {
  if (!fs.existsSync(deckDir)) {
    fs.mkdirSync(deckDir, { recursive: true });
    console.log(`✓ Criado diretório: ${deckDir}`);
  }

  fs.writeFileSync(outputFilePath, html, "utf-8");
  const sizeKB = (html.length / 1024).toFixed(1);
  console.log(`✓ Deck criado: ${outputFilePath} (${sizeKB}KB)`);

  if (options.standalone) {
    console.log(`\n💡 Arquivo standalone pronto para compartilhar ou exportar como PDF.`);
  } else {
    console.log(`\n💡 CSS compartilhado: ../../_shared/slides-anchored.css`);
    console.log(`💡 JS compartilhado: ../../_shared/core.js`);
    console.log(`\n📝 Edite as <section> e personalize o conteúdo.`);
  }

  console.log(`\n🌐 Para visualizar, sirva por HTTP:`);
  console.log(`   python3 -m http.server 8000`);
  console.log(`   Depois abra: http://localhost:8000/${deckDir}/`);

  if (options.registerFreshness) {
    const registerArgs = [
      path.join(__dirname, "scripts", "register_deck_freshness.py"),
      "--slide",
      outputFilePath
    ];
    for (const source of options.sources) registerArgs.push("--source", source);

    let pythonCommands = ["python3"];
    if (process.platform === "win32") pythonCommands = ["python3", "python"];
    if (process.env.PYTHON) pythonCommands = [process.env.PYTHON];
    let result = null;
    for (const command of pythonCommands) {
      result = childProcess.spawnSync(command, registerArgs, { stdio: "inherit" });
      if (!result.error) break;
    }
    if (!result || result.error || result.status !== 0) {
      console.error("❌ Erro: não foi possível registrar o freshness do deck.");
      process.exit(1);
    }
  }
} catch (err) {
  console.error(`❌ Erro ao criar arquivo: ${err.message}`);
  process.exit(1);
}
