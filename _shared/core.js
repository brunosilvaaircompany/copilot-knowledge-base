/* =====================================================================
   layouts/core.js
   Utilidades compartilhadas dos templates de slide.
   SlideLayouts.initTheme(): tema claro/escuro persistido em
   localStorage, com padrão vindo de prefers-color-scheme.

   O botão .theme-toggle é acessível: rótulo dinâmico que descreve a AÇÃO
   ("Modo escuro"/"Modo claro") com aria-label equivalente. Não usamos
   aria-pressed para não conflitar com o rótulo de ação (um estado
   "pressionado" + um rótulo que descreve o oposto confunde leitores de
   tela). Ícones sol/lua (Octicons) trocam via CSS por html[data-theme].
   Também aplicamos data-color-mode para herdar o tema do Primer.
   ===================================================================== */
(() => {
  "use strict";

  const THEME_KEY = "slide-layouts:theme";

  const TOGGLE_MARKUP =
    '<svg class="oc icon-sun" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-sun"></use></svg>' +
    '<svg class="oc icon-moon" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-moon"></use></svg>' +
    '<span class="theme-toggle__label"></span>';

  function readStoredTheme() {
    try {
      const value = window.localStorage.getItem(THEME_KEY);
      return value === "light" || value === "dark" ? value : null;
    } catch (error) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch (error) {
      /* armazenamento indisponível (ex.: modo privado) — segue sem persistir */
    }
  }

  function systemTheme() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    /* data-color-mode alimenta o Primer, que resolve via
       data-light-theme / data-dark-theme declarados no <html>. */
    document.documentElement.setAttribute("data-color-mode", theme);
    updateToggle(theme);
  }

  function updateToggle(theme) {
    const toggle = document.querySelector(".theme-toggle");
    if (!toggle) {
      return;
    }
    /* rótulo descreve a ação: no escuro, o botão leva ao claro (e vice-versa) */
    const goingTo = theme === "dark" ? "claro" : "escuro";
    const label = toggle.querySelector(".theme-toggle__label");
    if (label) {
      label.textContent = `Modo ${goingTo}`;
    } else {
      toggle.textContent = `Modo ${goingTo}`;
    }
    toggle.setAttribute("aria-label", `Alternar para modo ${goingTo}`);
    /* garante que nenhum aria-pressed remanescente contradiga o rótulo */
    toggle.removeAttribute("aria-pressed");
  }

  function currentTheme() {
    return document.documentElement.dataset.theme === "light" ? "light" : "dark";
  }

  function toggleTheme() {
    const next = currentTheme() === "light" ? "dark" : "light";
    applyTheme(next);
    storeTheme(next);
    /* cor de destaque, fundo e decorações têm hex diferentes por esquema
       (claro/escuro); reaplica tudo para manter as escolhas corretas */
    applyAccentColors();
    computeAndApplyBackground();
    refreshDecorations();
    updatePanelSelection();
  }

  function ensureControlsBar() {
    let bar = document.querySelector(".slide-controls");
    if (!bar) {
      bar = document.createElement("div");
      bar.className = "slide-controls";
      document.body.appendChild(bar);
    }
    return bar;
  }

  function ensureToggleButton() {
    let toggle = document.querySelector(".theme-toggle");
    if (!toggle) {
      toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "theme-toggle";
      toggle.innerHTML = TOGGLE_MARKUP;
      ensureControlsBar().appendChild(toggle);
    } else if (!toggle.querySelector(".theme-toggle__label")) {
      /* botão veio do HTML sem estrutura interna — monta os ícones + rótulo */
      toggle.innerHTML = TOGGLE_MARKUP;
    }
    toggle.addEventListener("click", toggleTheme);
    return toggle;
  }

  /* =====================================================================
     Personalização de estilo — cor de destaque, intensidade, paleta de
     marca, fundo, fonte e detalhes decorativos.

     Tudo aqui usa apenas tokens/hex oficiais GitHub/Primer ou Brand
     Toolkit (brand.github.com), extraídos do pacote @primer/primitives
     (dist/json/colors/*.json) e do guia de marca 2026. Nada foge da
     marca. Camada opcional sobre o tema claro/escuro:

       • Cor de destaque: 8 tons semânticos do produto GitHub (accent,
         success, danger, attention, severe, done, sponsors, neutral).
       • Intensidade do tom: tinge --surface/--surface-strong com a
         escala crua (10 degraus) da cor de destaque ativa.
       • Paleta de marca: temas de Marketing (Verde GitHub / Copilot /
         Security) — substitui a cor de destaque quando ativa.
       • Fundo: 5 modos de cor oficiais do Primer (Padrão, Dark Dimmed,
         Alto Contraste, Daltonismo, Tritanopia).
       • Fonte: recombina as 3 fontes de marca já vendorizadas (Mona
         Sans, Hubot Sans, Monaspace Neon).
       • Detalhes: tira do contribution graph e textura de dithering,
         geradas por CSS/SVG (sem asset externo/proprietário).

     Persistido em localStorage (chaves independentes), reaplicado
     automaticamente ao alternar claro/escuro. Funciona em qualquer
     página que carregue este arquivo (decks locais, GitHub Pages e o
     template base).
     ===================================================================== */

  const ACCENT_KEY = "slide-layouts:accent";
  const MODE_KEY = "slide-layouts:mode";
  const FONT_KEY = "slide-layouts:font";
  const TINT_KEY = "slide-layouts:tint";
  const PALETTE_KEY = "slide-layouts:palette";
  const STRIP_KEY = "slide-layouts:strip";
  const DITHER_KEY = "slide-layouts:dither";

  /* Hex exatos = tokens fg.default de accent/success/danger/attention/
     severe/done/sponsors em @primer/primitives (dist/json/colors/
     dark.json e light.json). "azul/verde/vermelho" usam os mesmos hex
     já validados no restante do projeto (slides-anchored.css); os
     outros 5 vêm direto do pacote oficial. "cinza" é uma curadoria
     (escala neutra) já que o Primer não define um "neutral.fg" único. */
  const ACCENT_HUES = [
    { id: "azul", label: "Azul (accent)", dark: "#4493f8", light: "#0969da", scaleKey: "blue" },
    { id: "verde", label: "Verde (success)", dark: "#3fb950", light: "#1a7f37", scaleKey: "green" },
    { id: "vermelho", label: "Vermelho (danger)", dark: "#f85149", light: "#d1242f", scaleKey: "red" },
    { id: "amarelo", label: "Amarelo (attention)", dark: "#d29922", light: "#9a6700", scaleKey: "yellow" },
    { id: "laranja", label: "Laranja (severe)", dark: "#db6d28", light: "#bc4c00", scaleKey: "orange" },
    { id: "roxo", label: "Roxo (done)", dark: "#a371f7", light: "#8250df", scaleKey: "purple" },
    { id: "rosa", label: "Rosa (sponsors)", dark: "#db61a2", light: "#bf3989", scaleKey: "pink" },
    { id: "cinza", label: "Cinza (neutral)", dark: "#b1bac4", light: "#57606a", scaleKey: "gray" }
  ];

  /* Escalas cruas (10 degraus, claro→escuro) extraídas de
     @primer/primitives — usadas só para a "Intensidade do tom". */
  const SCALES = {
    gray: {
      dark: ["#f0f6fc", "#c9d1d9", "#b1bac4", "#8b949e", "#6e7681", "#484f58", "#30363d", "#21262d", "#161b22", "#0d1117"],
      light: ["#f6f8fa", "#eaeef2", "#d0d7de", "#afb8c1", "#8c959f", "#6e7781", "#57606a", "#424a53", "#32383f", "#24292f"]
    },
    blue: {
      dark: ["#cae8ff", "#a5d6ff", "#79c0ff", "#58a6ff", "#388bfd", "#1f6feb", "#1158c7", "#0d419d", "#0c2d6b", "#051d4d"],
      light: ["#ddf4ff", "#b6e3ff", "#80ccff", "#54aeff", "#218bff", "#0969da", "#0550ae", "#033d8b", "#0a3069", "#002155"]
    },
    green: {
      dark: ["#aff5b4", "#7ee787", "#56d364", "#3fb950", "#2ea043", "#238636", "#196c2e", "#0f5323", "#033a16", "#04260f"],
      light: ["#dafbe1", "#aceebb", "#6fdd8b", "#4ac26b", "#2da44e", "#1a7f37", "#116329", "#044f1e", "#003d16", "#002d11"]
    },
    yellow: {
      dark: ["#f8e3a1", "#f2cc60", "#e3b341", "#d29922", "#bb8009", "#9e6a03", "#845306", "#693e00", "#4b2900", "#341a00"],
      light: ["#fff8c5", "#fae17d", "#eac54f", "#d4a72c", "#bf8700", "#9a6700", "#7d4e00", "#633c01", "#4d2d00", "#3b2300"]
    },
    orange: {
      dark: ["#ffdfb6", "#ffc680", "#ffa657", "#f0883e", "#db6d28", "#bd561d", "#9b4215", "#762d0a", "#5a1e02", "#3d1300"],
      light: ["#fff1e5", "#ffd8b5", "#ffb77c", "#fb8f44", "#e16f24", "#bc4c00", "#953800", "#762c00", "#5c2200", "#471700"]
    },
    red: {
      dark: ["#ffdcd7", "#ffc1ba", "#ffa198", "#ff7b72", "#f85149", "#da3633", "#b62324", "#8e1519", "#67060c", "#490202"],
      light: ["#ffebe9", "#ffcecb", "#ffaba8", "#ff8182", "#fa4549", "#cf222e", "#a40e26", "#82071e", "#660018", "#4c0014"]
    },
    purple: {
      dark: ["#eddeff", "#e2c5ff", "#d2a8ff", "#bc8cff", "#a371f7", "#8957e5", "#6e40c9", "#553098", "#3c1e70", "#271052"],
      light: ["#fbefff", "#ecd8ff", "#d8b9ff", "#c297ff", "#a475f9", "#8250df", "#6639ba", "#512a97", "#3e1f79", "#2e1461"]
    },
    pink: {
      dark: ["#ffdaec", "#ffbedd", "#ff9bce", "#f778ba", "#db61a2", "#bf4b8a", "#9e3670", "#7d2457", "#5e103e", "#42062a"],
      light: ["#ffeff7", "#ffd3eb", "#ffadda", "#ff80c8", "#e85aad", "#bf3989", "#99286e", "#772057", "#611347", "#4d0336"]
    }
  };

  const TINT_LEVELS = [
    { id: "neutro", label: "Neutro", weight: 0 },
    { id: "leve", label: "Leve", weight: 0.1 },
    { id: "forte", label: "Forte", weight: 0.24 }
  ];

  /* Paleta de Marca/Marketing (brand.github.com/foundations/color,
     2026). heroDark/heroLight escolhem o degrau da própria escala da
     marca que mantém contraste adequado em cada esquema (ex.: Verde
     GitHub usa o degrau mais claro no escuro e o mais escuro no
     claro — mesma lógica que o Primer usa para accent/success). */
  const BRAND_PALETTES = [
    { id: "github-green", label: "Verde GitHub", heroDark: "#0FBF3E", heroLight: "#08872B" },
    { id: "copilot", label: "Copilot", heroDark: "#B870FF", heroLight: "#43179E" },
    { id: "security", label: "Security", heroDark: "#3094FF", heroLight: "#212183" }
  ];

  /* Hex exatos extraídos de @primer/primitives (dist/json/colors/*.json):
     dark, light, dark_dimmed, light_high_contrast, dark_high_contrast,
     light_colorblind, dark_colorblind, light_tritanopia,
     dark_tritanopia. "padrao" já era o fallback usado em
     slides-anchored.css — mantido idêntico. */
  const COLOR_MODES = [
    {
      id: "padrao", label: "Padrão", group: "padrao",
      dark: { bg: "#0d1117", surface: "#161b22", surfaceStrong: "#21262d", border: "#30363d", text: "#e6edf3", textMuted: "#8b949e" },
      light: { bg: "#ffffff", surface: "#f6f8fa", surfaceStrong: "#eaeef2", border: "#d1d9e0", text: "#1f2328", textMuted: "#59636e" }
    },
    {
      id: "dimmed", label: "Dark Dimmed", group: "padrao", forceScheme: "dark",
      dark: { bg: "#22272e", surface: "#2d333b", surfaceStrong: "#1c2128", border: "#444c56", text: "#adbac7", textMuted: "#768390" }
    },
    {
      id: "contraste", label: "Alto Contraste", group: "padrao",
      dark: { bg: "#0a0c10", surface: "#272b33", surfaceStrong: "#0a0c10", border: "#7a828e", text: "#f0f3f6", textMuted: "#9ea7b3" },
      light: { bg: "#ffffff", surface: "#e7ecf0", surfaceStrong: "#ffffff", border: "#20252c", text: "#0e1116", textMuted: "#66707b" }
    },
    {
      id: "colorblind", label: "Daltonismo (deutera./protanopia)", group: "acessibilidade",
      dark: { bg: "#0d1117", surface: "#161b22", surfaceStrong: "#010409", border: "#30363d", text: "#c9d1d9", textMuted: "#8b949e" },
      light: { bg: "#ffffff", surface: "#f6f8fa", surfaceStrong: "#ffffff", border: "#d0d7de", text: "#24292f", textMuted: "#57606a" }
    },
    {
      id: "tritanopia", label: "Tritanopia", group: "acessibilidade",
      dark: { bg: "#0d1117", surface: "#161b22", surfaceStrong: "#010409", border: "#30363d", text: "#c9d1d9", textMuted: "#8b949e" },
      light: { bg: "#ffffff", surface: "#f6f8fa", surfaceStrong: "#ffffff", border: "#d0d7de", text: "#24292f", textMuted: "#57606a" }
    }
  ];

  /* Pilhas idênticas às já usadas por padrão em slides-anchored.css
     (linhas 52-54) — só reordenamos qual fonte de marca vai em qual
     papel, nunca adicionamos fonte externa. */
  const FONT_STACK_MONA = '"Mona Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';
  const FONT_STACK_HUBOT = '"Hubot Sans", "Mona Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  const FONT_STACK_MONASPACE = '"Monaspace Neon", ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace';

  const FONT_PAIRS = [
    { id: "padrao", label: "Padrão (Mona + Hubot Sans)" },
    { id: "editorial", label: "Editorial (só Mona Sans)", fontSans: FONT_STACK_MONA, fontLabel: FONT_STACK_MONA },
    { id: "tecnico", label: "Técnico (Monaspace nos títulos)", fontSans: FONT_STACK_MONASPACE, fontLabel: FONT_STACK_HUBOT },
    { id: "rotulos-codigo", label: "Rótulos em código (Monaspace nos rótulos)", fontSans: FONT_STACK_MONA, fontLabel: FONT_STACK_MONASPACE },
    { id: "mono-total", label: "Tudo monoespaçado (Monaspace Neon)", fontSans: FONT_STACK_MONASPACE, fontLabel: FONT_STACK_MONASPACE }
  ];

  function getAccentHues() { return ACCENT_HUES.slice(); }
  function getColorModes() { return COLOR_MODES.slice(); }
  function getFontPairs() { return FONT_PAIRS.slice(); }
  function getTintLevels() { return TINT_LEVELS.slice(); }
  function getBrandPalettes() { return BRAND_PALETTES.slice(); }

  function readStored(key, isValid) {
    try {
      const value = window.localStorage.getItem(key);
      return isValid(value) ? value : null;
    } catch (error) {
      return null;
    }
  }

  function storeOrClear(key, value) {
    try {
      if (value) {
        window.localStorage.setItem(key, value);
      } else {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      /* armazenamento indisponível (ex.: modo privado) — segue sem persistir */
    }
  }

  const readStoredAccent = () => readStored(ACCENT_KEY, (v) => ACCENT_HUES.some((h) => h.id === v));
  const readStoredMode = () => readStored(MODE_KEY, (v) => COLOR_MODES.some((m) => m.id === v));
  const readStoredFont = () => readStored(FONT_KEY, (v) => FONT_PAIRS.some((f) => f.id === v));
  const readStoredTint = () => readStored(TINT_KEY, (v) => TINT_LEVELS.some((t) => t.id === v));
  const readStoredPalette = () => readStored(PALETTE_KEY, (v) => BRAND_PALETTES.some((p) => p.id === v));
  const readStoredStrip = () => readStored(STRIP_KEY, (v) => v === "on") === "on";
  const readStoredDither = () => readStored(DITHER_KEY, (v) => v === "on") === "on";

  /* ── Mistura de cores (só para "Intensidade do tom") ── */
  function hexToRgb(hex) {
    const clean = String(hex || "").replace("#", "");
    const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
    const int = parseInt(full, 16) || 0;
    return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
  }
  function rgbToHex({ r, g, b }) {
    const clamp = (v) => Math.max(0, Math.min(255, Math.round(v)));
    return "#" + [r, g, b].map((v) => clamp(v).toString(16).padStart(2, "0")).join("");
  }
  function mixHex(hexA, hexB, weightB) {
    const a = hexToRgb(hexA);
    const b = hexToRgb(hexB);
    return rgbToHex({
      r: a.r + (b.r - a.r) * weightB,
      g: a.g + (b.g - a.g) * weightB,
      b: a.b + (b.b - a.b) * weightB
    });
  }

  function getModeVars(modeId, scheme) {
    const mode = COLOR_MODES.find((m) => m.id === modeId) || COLOR_MODES[0];
    const effectiveScheme = mode.forceScheme || scheme;
    return mode[effectiveScheme] || mode.dark || COLOR_MODES[0][scheme] || COLOR_MODES[0].dark;
  }

  function computeAccentValue(scheme) {
    const paletteId = readStoredPalette();
    const palette = BRAND_PALETTES.find((p) => p.id === paletteId);
    if (palette) {
      return scheme === "light" ? palette.heroLight : palette.heroDark;
    }
    const hueId = readStoredAccent();
    const hue = ACCENT_HUES.find((h) => h.id === hueId);
    if (hue) {
      return scheme === "light" ? hue.light : hue.dark;
    }
    return null;
  }

  function applyAccentColors() {
    const root = document.documentElement.style;
    const value = computeAccentValue(currentTheme());
    if (!value) {
      root.removeProperty("--accent");
      root.removeProperty("--accent-light");
      return;
    }
    root.setProperty("--accent", value);
    root.setProperty("--accent-light", value);
  }

  function computeAndApplyBackground() {
    const scheme = currentTheme();
    const modeId = readStoredMode() || "padrao";
    let vars = getModeVars(modeId, scheme);

    const tintId = readStoredTint();
    const tint = TINT_LEVELS.find((t) => t.id === tintId);
    const hueId = readStoredAccent();
    const hue = ACCENT_HUES.find((h) => h.id === hueId);
    if (tint && tint.weight > 0 && hue && hue.scaleKey && SCALES[hue.scaleKey]) {
      const scaleArr = SCALES[hue.scaleKey][scheme];
      const tintColor = scheme === "light" ? scaleArr[1] : scaleArr[8];
      vars = {
        ...vars,
        surface: mixHex(vars.surface, tintColor, tint.weight),
        surfaceStrong: mixHex(vars.surfaceStrong, tintColor, Math.min(0.6, tint.weight + 0.1))
      };
    }

    const root = document.documentElement.style;
    root.setProperty("--bg", vars.bg);
    root.setProperty("--surface", vars.surface);
    root.setProperty("--surface-strong", vars.surfaceStrong);
    root.setProperty("--border", vars.border);
    root.setProperty("--text", vars.text);
    root.setProperty("--text-muted", vars.textMuted);
  }

  function applyFontPair(fontId) {
    const root = document.documentElement.style;
    const pair = FONT_PAIRS.find((f) => f.id === fontId);
    if (!pair || !pair.fontSans) {
      root.removeProperty("--font-sans");
      root.removeProperty("--font-label");
      return;
    }
    root.setProperty("--font-sans", pair.fontSans);
    root.setProperty("--font-label", pair.fontLabel || pair.fontSans);
  }

  function applyAccent(id, options) {
    const persist = !options || options.persist !== false;
    if (persist) {
      const valid = ACCENT_HUES.some((h) => h.id === id);
      storeOrClear(ACCENT_KEY, valid ? id : null);
      if (valid) {
        storeOrClear(PALETTE_KEY, null); /* mutuamente exclusivo com paleta de marca */
      }
    }
    applyAccentColors();
    computeAndApplyBackground(); /* a intensidade do tom depende do accent ativo */
    refreshDecorations();
    updatePanelSelection();
  }

  function applyPalette(id, options) {
    const persist = !options || options.persist !== false;
    if (persist) {
      const valid = BRAND_PALETTES.some((p) => p.id === id);
      storeOrClear(PALETTE_KEY, valid ? id : null);
      if (valid) {
        storeOrClear(ACCENT_KEY, null); /* mutuamente exclusivo com cor de destaque Primer */
      }
    }
    applyAccentColors();
    computeAndApplyBackground();
    refreshDecorations();
    updatePanelSelection();
  }

  function applyTint(id, options) {
    const persist = !options || options.persist !== false;
    if (persist) {
      storeOrClear(TINT_KEY, TINT_LEVELS.some((t) => t.id === id) && id !== "neutro" ? id : null);
    }
    computeAndApplyBackground();
    updatePanelSelection();
  }

  function applyColorMode(id, options) {
    const persist = !options || options.persist !== false;
    const mode = COLOR_MODES.find((m) => m.id === id);
    if (mode && mode.forceScheme && mode.forceScheme !== currentTheme()) {
      applyTheme(mode.forceScheme);
      storeTheme(mode.forceScheme);
    }
    if (persist) {
      storeOrClear(MODE_KEY, COLOR_MODES.some((m) => m.id === id) ? id : null);
    }
    computeAndApplyBackground();
    applyAccentColors();
    refreshDecorations();
    updatePanelSelection();
  }

  function applyFont(id, options) {
    const persist = !options || options.persist !== false;
    applyFontPair(id);
    if (persist) {
      storeOrClear(FONT_KEY, FONT_PAIRS.some((f) => f.id === id) ? id : null);
    }
    updatePanelSelection();
  }

  /* ── Fase 4: detalhes decorativos gerados por CSS/SVG (sem asset
     externo/proprietário) — tira do contribution graph e dithering ── */

  function buildStripBlocks(scheme) {
    const hueId = readStoredAccent();
    const hue = ACCENT_HUES.find((h) => h.id === hueId) || ACCENT_HUES.find((h) => h.id === "verde");
    const scaleArr = (SCALES[hue.scaleKey] || SCALES.green)[scheme];
    const idxs = scheme === "light" ? [1, 3, 5, 7, 8] : [8, 6, 4, 2, 1];
    return idxs.map((i) => scaleArr[i]);
  }

  function refreshStrip() {
    const el = document.querySelector(".slide-contribution-strip");
    if (!el) return;
    const blocks = buildStripBlocks(currentTheme());
    el.innerHTML = blocks.map((c) => '<span style="background:' + c + ';"></span>').join("");
  }

  function refreshDecorations() {
    if (readStoredStrip()) {
      refreshStrip();
    }
  }

  function applyStrip(on, options) {
    const persist = !options || options.persist !== false;
    let el = document.querySelector(".slide-contribution-strip");
    if (on) {
      if (!el) {
        el = document.createElement("div");
        el.className = "slide-contribution-strip";
        el.setAttribute("aria-hidden", "true");
        document.body.appendChild(el);
      }
      refreshStrip();
    } else if (el) {
      el.remove();
    }
    if (persist) {
      storeOrClear(STRIP_KEY, on ? "on" : null);
    }
    updatePanelSelection();
  }

  /* Camada extra de background-image, consumida por
     .reveal-viewport (slides-anchored.css) e body (gallery.css) via
     var(--dither-layer, none) — assim a textura fica DENTRO do mesmo
     background que já usa --bg, em vez de um <div> flutuante que
     poderia ficar escondido atrás do fundo opaco do Reveal. */
  const DITHER_LAYER = "radial-gradient(circle, rgba(140,149,159,.35) 1px, transparent 1.4px) 0 0/6px 6px repeat";

  function applyDither(on, options) {
    const persist = !options || options.persist !== false;
    const root = document.documentElement.style;
    if (on) {
      root.setProperty("--dither-layer", DITHER_LAYER);
    } else {
      root.removeProperty("--dither-layer");
    }
    if (persist) {
      storeOrClear(DITHER_KEY, on ? "on" : null);
    }
    updatePanelSelection();
  }

  function resetStyle() {
    storeOrClear(ACCENT_KEY, null);
    storeOrClear(MODE_KEY, null);
    storeOrClear(FONT_KEY, null);
    storeOrClear(TINT_KEY, null);
    storeOrClear(PALETTE_KEY, null);
    applyStrip(false);
    applyDither(false);
    applyAccentColors();
    computeAndApplyBackground();
    applyFontPair(null);
    updatePanelSelection();
  }

  /* =====================================================================
     Painel de estilo — UI
     ===================================================================== */

  const PANEL_CSS = `
.slide-controls { position: fixed; top: 16px; right: 16px; z-index: 1201; display: flex; gap: 8px; align-items: center; }
.slide-controls .theme-toggle, .slide-controls .style-toggle { position: static; }
.style-toggle { display: inline-flex; align-items: center; gap: 6px; min-height: 40px; padding: 0 14px; border: 1px solid var(--border, #30363d); border-radius: 999px; background: var(--surface, #161b22); color: var(--text, #e6edf3); font-family: var(--font-label, inherit); font-size: 12.5px; font-weight: 500; cursor: pointer; }
.style-toggle:hover { border-color: var(--accent-light, #58a6ff); color: var(--accent-light, #58a6ff); }
.style-toggle:focus-visible { outline: 2px solid var(--focus, #58a6ff); outline-offset: 2px; }
.style-toggle .oc { width: 15px; height: 15px; fill: currentColor; }
.style-panel { position: fixed; top: 62px; right: 16px; z-index: 1202; width: 300px; max-height: min(680px, calc(100vh - 90px)); overflow-y: auto; padding: 14px; border-radius: 12px; border: 1px solid var(--border, #30363d); background: var(--surface, #161b22); color: var(--text, #e6edf3); font-family: var(--font-sans, -apple-system, sans-serif); font-size: 13px; box-shadow: 0 12px 32px rgba(0,0,0,0.35); }
.style-panel[hidden] { display: none; }
.style-panel__head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
.style-panel__close { background: none; border: none; color: inherit; font-size: 18px; cursor: pointer; line-height: 1; padding: 2px 6px; }
.style-panel__intro { margin: 0 0 10px; font-size: 11px; color: var(--text-muted, #8b949e); }
.style-group { border: 1px solid var(--border, #30363d); border-radius: 10px; margin-bottom: 8px; overflow: hidden; }
.style-group[open] { padding-bottom: 2px; }
.style-group__summary { cursor: pointer; padding: 8px 10px; font-size: 12.5px; font-weight: 600; list-style: none; display: flex; align-items: center; justify-content: space-between; user-select: none; }
.style-group__summary::-webkit-details-marker { display: none; }
.style-group__summary::after { content: "+"; color: var(--text-muted, #8b949e); font-weight: 400; }
.style-group[open] > .style-group__summary::after { content: "–"; }
.style-group__body { padding: 4px 10px 10px; border-top: 1px solid var(--border, #30363d); }
.style-panel__section { margin: 10px 0; }
.style-panel__section:first-child { margin-top: 4px; }
.style-panel__hint { margin: 0 0 6px; font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted, #8b949e); }
.style-swatches { display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; }
.style-swatches--wide { grid-template-columns: repeat(3, 1fr); }
.style-swatch { display: flex; align-items: center; gap: 6px; padding: 6px 8px; border-radius: 8px; border: 1px solid var(--border, #30363d); background: transparent; color: inherit; font-size: 11.5px; cursor: pointer; text-align: left; }
.style-swatch:hover, .style-swatch.is-active { border-color: var(--accent-light, #58a6ff); }
.style-swatch__dot { width: 16px; height: 16px; border-radius: 50%; flex: none; border: 1px solid rgba(128,128,128,0.4); }
.style-toggle-row { display: flex; align-items: center; gap: 8px; font-size: 12px; padding: 4px 0; cursor: pointer; }
.style-panel__actions { display: flex; flex-direction: column; gap: 6px; margin-top: 4px; }
.style-panel__actions button { padding: 7px 10px; border-radius: 8px; border: 1px solid var(--border, #30363d); background: var(--surface-strong, #21262d); color: inherit; cursor: pointer; font-size: 12px; }
.style-panel__actions button:hover { border-color: var(--accent-light, #58a6ff); }
.slide-contribution-strip { position: fixed; left: 0; right: 0; bottom: 0; height: 6px; display: flex; z-index: 1150; pointer-events: none; }
.slide-contribution-strip span { flex: 1; }
@media (max-width: 480px) {
  .style-toggle span:not(.oc) { display: none; }
  .style-panel { width: calc(100vw - 32px); right: 16px; }
}
`;

  function injectPanelCss() {
    if (document.getElementById("slide-style-panel-css")) {
      return;
    }
    const style = document.createElement("style");
    style.id = "slide-style-panel-css";
    style.textContent = PANEL_CSS;
    document.head.appendChild(style);
  }

  let panelEl = null;

  function ensureStyleButton() {
    ensureControlsBar();
    let btn = document.querySelector(".style-toggle");
    if (!btn) {
      btn = document.createElement("button");
      btn.type = "button";
      btn.className = "style-toggle";
      btn.setAttribute("aria-haspopup", "dialog");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Personalizar estilo do deck (dentro da marca GitHub)");
      btn.innerHTML =
        '<svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0a8 8 0 1 0 0 16 1.5 1.5 0 0 0 1.06-2.56.87.87 0 0 1-.25-.61c0-.48.39-.87.87-.87H11a4 4 0 0 0 4-4c0-3.86-3.14-7-7-7Zm-4.5 8.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2-3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.5 2.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>' +
        "<span>Estilo</span>";
      btn.addEventListener("click", () => toggleStylePanel());
      ensureControlsBar().appendChild(btn);
    }
    return btn;
  }

  function modeSwatchColor(mode, scheme) {
    const vars = mode[scheme] || mode.dark;
    return vars.bg;
  }

  function swatchButton(attr, id, label, dotColor) {
    const dot = dotColor ? '<span class="style-swatch__dot" style="background:' + dotColor + ';"></span>' : "";
    return (
      '<button type="button" class="style-swatch" data-' + attr + '="' + id + '" title="' + label + '">' +
      dot +
      '<span class="style-swatch__label">' + label + "</span>" +
      "</button>"
    );
  }

  function buildStylePanel() {
    if (panelEl) {
      return panelEl;
    }
    const scheme = currentTheme();
    const panel = document.createElement("div");
    panel.className = "style-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Personalizar estilo do deck (dentro da marca GitHub)");
    panel.hidden = true;

    const accentCommon = ACCENT_HUES.slice(0, 4)
      .map((h) => swatchButton("accent", h.id, h.label, scheme === "light" ? h.light : h.dark))
      .join("");
    const accentExtra = ACCENT_HUES.slice(4)
      .map((h) => swatchButton("accent", h.id, h.label, scheme === "light" ? h.light : h.dark))
      .join("");

    const tintButtons = TINT_LEVELS.map((t) => swatchButton("tint", t.id, t.label)).join("");

    const paletteButtons =
      swatchButton("palette", "nenhuma", "Nenhuma (Primer)") +
      BRAND_PALETTES.map((p) => swatchButton("palette", p.id, p.label, scheme === "light" ? p.heroLight : p.heroDark)).join("");

    const modesPadrao = COLOR_MODES.filter((m) => m.group === "padrao")
      .map((m) => swatchButton("mode", m.id, m.label, modeSwatchColor(m, scheme)))
      .join("");
    const modesAcessibilidade = COLOR_MODES.filter((m) => m.group === "acessibilidade")
      .map((m) => swatchButton("mode", m.id, m.label, modeSwatchColor(m, scheme)))
      .join("");

    const fontButtons = FONT_PAIRS.map((f) => swatchButton("font", f.id, f.label)).join("");

    panel.innerHTML =
      '<div class="style-panel__head"><strong>Estilo do deck</strong>' +
      '<button type="button" class="style-panel__close" aria-label="Fechar">×</button></div>' +
      '<p class="style-panel__intro">Tudo aqui usa tokens/cores oficiais GitHub (Primer + Brand Toolkit)</p>' +

      '<details class="style-group" open><summary class="style-group__summary">Cores</summary><div class="style-group__body">' +
      '<div class="style-panel__section"><p class="style-panel__hint">Cor de destaque — comuns</p>' +
      '<div class="style-swatches">' + accentCommon + "</div></div>" +
      '<div class="style-panel__section"><p class="style-panel__hint">Cor de destaque — adicionais</p>' +
      '<div class="style-swatches">' + accentExtra + "</div></div>" +
      '<div class="style-panel__section"><p class="style-panel__hint">Intensidade do tom</p>' +
      '<div class="style-swatches style-swatches--wide">' + tintButtons + "</div></div>" +
      '<div class="style-panel__section"><p class="style-panel__hint">Paleta de marca (Marketing) — substitui a cor de destaque</p>' +
      '<div class="style-swatches">' + paletteButtons + "</div></div>" +
      "</div></details>" +

      '<details class="style-group"><summary class="style-group__summary">Fundo</summary><div class="style-group__body">' +
      '<div class="style-panel__section"><p class="style-panel__hint">Padrão</p>' +
      '<div class="style-swatches">' + modesPadrao + "</div></div>" +
      '<div class="style-panel__section"><p class="style-panel__hint">Acessibilidade</p>' +
      '<div class="style-swatches">' + modesAcessibilidade + "</div></div>" +
      "</div></details>" +

      '<details class="style-group"><summary class="style-group__summary">Tipografia</summary><div class="style-group__body">' +
      '<div class="style-panel__section"><p class="style-panel__hint">Combinação de fonte (Mona Sans / Hubot Sans / Monaspace Neon)</p>' +
      '<div class="style-swatches">' + fontButtons + "</div></div>" +
      "</div></details>" +

      '<details class="style-group"><summary class="style-group__summary">Extras</summary><div class="style-group__body">' +
      '<label class="style-toggle-row"><input type="checkbox" data-strip-toggle /> Tira do contribution graph (rodapé)</label>' +
      '<label class="style-toggle-row"><input type="checkbox" data-dither-toggle /> Textura de dithering no fundo</label>' +
      "</div></details>" +

      '<div class="style-panel__actions">' +
      '<button type="button" class="style-panel__reset">Restaurar tudo ao padrão</button>' +
      "</div>";

    document.body.appendChild(panel);
    panelEl = panel;

    panel.querySelectorAll("[data-accent]").forEach((btn) => {
      btn.addEventListener("click", () => applyAccent(btn.dataset.accent));
    });
    panel.querySelectorAll("[data-tint]").forEach((btn) => {
      btn.addEventListener("click", () => applyTint(btn.dataset.tint));
    });
    panel.querySelectorAll("[data-palette]").forEach((btn) => {
      btn.addEventListener("click", () => applyPalette(btn.dataset.palette === "nenhuma" ? null : btn.dataset.palette));
    });
    panel.querySelectorAll("[data-mode]").forEach((btn) => {
      btn.addEventListener("click", () => applyColorMode(btn.dataset.mode));
    });
    panel.querySelectorAll("[data-font]").forEach((btn) => {
      btn.addEventListener("click", () => applyFont(btn.dataset.font));
    });
    panel.querySelector("[data-strip-toggle]").addEventListener("change", (event) => applyStrip(event.target.checked));
    panel.querySelector("[data-dither-toggle]").addEventListener("change", (event) => applyDither(event.target.checked));
    panel.querySelector(".style-panel__close").addEventListener("click", () => setPanelOpen(false));
    panel.querySelector(".style-panel__reset").addEventListener("click", () => resetStyle());

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !panel.hidden) {
        setPanelOpen(false);
      }
    });
    document.addEventListener("click", (event) => {
      if (panel.hidden) return;
      const btn = document.querySelector(".style-toggle");
      if (!panel.contains(event.target) && event.target !== btn && !(btn && btn.contains(event.target))) {
        setPanelOpen(false);
      }
    });

    return panel;
  }

  function refreshSwatchColors(panel) {
    const scheme = currentTheme();
    panel.querySelectorAll("[data-accent]").forEach((btn) => {
      const hue = ACCENT_HUES.find((h) => h.id === btn.dataset.accent);
      if (!hue) return;
      const dot = btn.querySelector(".style-swatch__dot");
      if (dot) dot.style.background = scheme === "light" ? hue.light : hue.dark;
    });
    panel.querySelectorAll("[data-palette]").forEach((btn) => {
      const palette = BRAND_PALETTES.find((p) => p.id === btn.dataset.palette);
      if (!palette) return;
      const dot = btn.querySelector(".style-swatch__dot");
      if (dot) dot.style.background = scheme === "light" ? palette.heroLight : palette.heroDark;
    });
    panel.querySelectorAll("[data-mode]").forEach((btn) => {
      const mode = COLOR_MODES.find((m) => m.id === btn.dataset.mode);
      if (!mode) return;
      const dot = btn.querySelector(".style-swatch__dot");
      if (dot) dot.style.background = modeSwatchColor(mode, scheme);
    });
  }

  function setPanelOpen(open) {
    const panel = buildStylePanel();
    if (open) {
      refreshSwatchColors(panel);
    }
    panel.hidden = !open;
    const btn = document.querySelector(".style-toggle");
    if (btn) {
      btn.setAttribute("aria-expanded", String(open));
    }
    if (open) {
      const first = panel.querySelector(".style-swatch, button");
      if (first) first.focus();
    }
  }

  function toggleStylePanel() {
    const panel = buildStylePanel();
    setPanelOpen(panel.hidden);
  }

  function updatePanelSelection() {
    if (!panelEl) {
      return;
    }
    const savedAccent = readStoredAccent();
    const savedTint = readStoredTint() || "neutro";
    const savedPalette = readStoredPalette() || "nenhuma";
    const savedMode = readStoredMode() || "padrao";
    const savedFont = readStoredFont() || "padrao";
    panelEl.querySelectorAll("[data-accent]").forEach((btn) => {
      btn.classList.toggle("is-active", savedAccent === btn.dataset.accent);
    });
    panelEl.querySelectorAll("[data-tint]").forEach((btn) => {
      btn.classList.toggle("is-active", savedTint === btn.dataset.tint);
    });
    panelEl.querySelectorAll("[data-palette]").forEach((btn) => {
      btn.classList.toggle("is-active", savedPalette === btn.dataset.palette);
    });
    panelEl.querySelectorAll("[data-mode]").forEach((btn) => {
      btn.classList.toggle("is-active", savedMode === btn.dataset.mode);
    });
    panelEl.querySelectorAll("[data-font]").forEach((btn) => {
      btn.classList.toggle("is-active", savedFont === btn.dataset.font);
    });
    const stripBox = panelEl.querySelector("[data-strip-toggle]");
    if (stripBox) stripBox.checked = readStoredStrip();
    const ditherBox = panelEl.querySelector("[data-dither-toggle]");
    if (ditherBox) ditherBox.checked = readStoredDither();
  }

  function initTheme() {
    const theme = readStoredTheme() || systemTheme();
    ensureToggleButton();
    applyTheme(theme);

    /* Segue o sistema apenas enquanto o usuário não escolheu manualmente */
    if (!readStoredTheme() && window.matchMedia) {
      const media = window.matchMedia("(prefers-color-scheme: light)");
      const listener = (event) => {
        if (!readStoredTheme()) {
          applyTheme(event.matches ? "light" : "dark");
        }
      };
      if (typeof media.addEventListener === "function") {
        media.addEventListener("change", listener);
      }
    }

    injectPanelCss();
    ensureStyleButton();
    buildStylePanel();

    applyAccentColors();
    computeAndApplyBackground();
    applyFontPair(readStoredFont());
    if (readStoredStrip()) applyStrip(true, { persist: false });
    if (readStoredDither()) applyDither(true, { persist: false });
    updatePanelSelection();
  }

  window.SlideLayouts = {
    initTheme,
    toggleTheme,
    currentTheme,
    getAccentHues,
    getColorModes,
    getFontPairs,
    getTintLevels,
    getBrandPalettes,
    applyAccent,
    applyColorMode,
    applyFont,
    applyTint,
    applyPalette,
    applyStrip,
    applyDither,
    resetStyle
  };
})();
