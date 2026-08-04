/**
 * slide-editor.js
 * 
 * Editor visual de slides integrado ao Reveal.js.
 * Funcionalidades:
 *   - Adicionar slides (inserir antes/depois do atual)
 *   - Editar conteúdo (HTML bruto ou assistido)
 *   - Duplicar slide (cópia completa)
 *   - Deletar slide (com confirmação)
 *   - Persistir em localStorage
 *   - Exportar como JSON ou código
 * 
 * Uso:
 *   SlideEditor.init(Reveal);
 *   SlideEditor.togglePanel();
 */

window.SlideEditor = (() => {
  "use strict";

  function normalizeDeckId(pathname) {
    let path = pathname || "/";
    path = path.replace(/\/+$/, "");
    path = path.replace(/\/(?:index|slides)\.html$/i, "");
    return encodeURIComponent(path || "/");
  }

  const localDeckId = new URLSearchParams(window.location.search).get("deck");
  const DECK_ID = localDeckId
    ? "local-" + encodeURIComponent(localDeckId)
    : normalizeDeckId(window.location.pathname);
  const STORAGE_KEY = `slide-editor:content:${DECK_ID}`;
  const PANEL_STATE_KEY = `slide-editor:panel-open:${DECK_ID}`;
  const HISTORY_LIMIT = 50;

  /* Hist\u00f3rico de edi\u00e7\u00e3o (desfazer/refazer): snapshots serializados do
     deck. Cada pausa de digita\u00e7\u00e3o na edi\u00e7\u00e3o inline e cada opera\u00e7\u00e3o
     estrutural (novo/duplicar/deletar/salvar HTML) vira um passo. */
  const historyState = {
    undo: [],
    redo: [],
    present: null
  };

  let state = {
    reveal: null,
    panelOpen: false,
    editingSlideIndex: null,
    editingMode: "html", // "html" ou "visual"
    slides: [],
    inlineEditing: false,
    inlineSection: null,
    inlineSaveTimer: null,
    inlineRange: null,
    originalSlides: null
  };

  /* Mascotes oficiais do Octodex (octodex.github.com) \u2014 arte oficial do
     GitHub, carregada por URL absoluta (funciona no arquivo standalone). */
  const OFFICIAL_IMAGES = [
    { name: "Octocat original", url: "https://octodex.github.com/images/original.png" },
    { name: "Codercat", url: "https://octodex.github.com/images/codercat.jpg" },
    { name: "Neurocats", url: "https://octodex.github.com/images/neurocats_FULL.png" },
    { name: "Inspectocat", url: "https://octodex.github.com/images/inspectocat.jpg" },
    { name: "Labtocat", url: "https://octodex.github.com/images/labtocat.png" },
    { name: "Droidtocat", url: "https://octodex.github.com/images/droidtocat.png" },
    { name: "Octobiwan", url: "https://octodex.github.com/images/octobiwan.jpg" },
    { name: "Spocktocat", url: "https://octodex.github.com/images/spocktocat.png" }
  ];

  /* R\u00f3tulos leg\u00edveis para os Octicons do sprite */
  const ICON_LABELS = {
    "oc-mark-github": "GitHub",
    "oc-check": "Check",
    "oc-x": "X",
    "oc-plus": "Mais",
    "oc-copy": "Copiar",
    "oc-pencil": "L\u00e1pis",
    "oc-trash": "Lixeira",
    "oc-zap": "Raio",
    "oc-book": "Livro",
    "oc-verified": "Verificado",
    "oc-people": "Pessoas",
    "oc-comment-discussion": "Discuss\u00e3o",
    "oc-code": "C\u00f3digo",
    "oc-terminal": "Terminal",
    "oc-workflow": "Workflow",
    "oc-sun": "Sol",
    "oc-moon": "Lua"
  };

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Armazenamento
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  function loadSlides() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (err) {
      console.warn("Erro ao carregar slides do localStorage:", err);
    }
    return null;
  }

  function saveSlides(slides) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(slides));
    } catch (err) {
      console.warn("Erro ao salvar slides no localStorage:", err);
    }
  }

  function getCurrentSlides() {
    const container = document.querySelector(".reveal .slides");
    if (!container) return [];
    return Array.from(container.querySelectorAll(":scope > section"));
  }

  function syncSlidesFromDOM() {
    const slides = getCurrentSlides();
    state.slides = slides.map((el, idx) => ({
      index: idx,
      html: el.innerHTML,
      className: el.className,
      data: { ...el.dataset }
    }));
    return state.slides;
  }

  function applySlideChanges(slides) {
    const container = document.querySelector(".reveal .slides");
    if (!container) return;

    // Atualizar o conteúdo de cada slide existente
    const existing = getCurrentSlides();
    slides.forEach((slide, idx) => {
      if (existing[idx]) {
        existing[idx].innerHTML = slide.html;
        Object.assign(existing[idx].dataset, slide.data);
      }
    });

    // Reinicializar o Reveal para recomputar layout
    if (state.reveal && typeof state.reveal.sync === "function") {
      state.reveal.sync();
    }
  }

  function restoreSlides() {
    /* Aplica no DOM os slides persistidos em localStorage. Sem isto,
       loadSlides() nunca era usada e as edições sumiam no reload. */
    const stored = loadSlides();
    const container = document.querySelector(".reveal .slides");
    if (!stored || !Array.isArray(stored) || stored.length === 0 || !container) {
      return false;
    }
    container.innerHTML = "";
    for (const slide of stored) {
      const section = document.createElement("section");
      if (slide.className) {
        section.className = slide.className;
      }
      section.innerHTML = slide.html || "";
      if (slide.data && typeof slide.data === "object") {
        for (const [key, value] of Object.entries(slide.data)) {
          section.dataset[key] = value;
        }
      }
      container.appendChild(section);
    }
    if (state.reveal && typeof state.reveal.sync === "function") {
      state.reveal.sync();
    }
    return true;
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Operações de Slide
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  function addSlide(position = "after", templateId = "header_body") {
    if (state.inlineEditing) {
      stopInlineEditing();
    }
    const currentIdx = state.reveal?.getState().indexh || 0;
    const insertIdx = position === "after" ? currentIdx + 1 : currentIdx;

    const container = document.querySelector(".reveal .slides");
    if (!container) return false;

    // Obter template (padrão: header_body)
    const template = window.SlideTemplates && window.SlideTemplates.getTemplate(templateId);
    const html = template ? template.html : `
      <div class="slide-head">
        <p class="kicker">Novo</p>
        <h2>Sem título</h2>
        <p class="subtitle">Clique para editar</p>
      </div>
      <div class="slide-body">
        <p>Adicione conteúdo aqui</p>
      </div>
      <div class="slide-mark">
        <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true">
          <use href="#oc-mark-github"></use>
        </svg>
        <span>GitHub</span>
      </div>
    `;

    const newSlide = document.createElement("section");
    /* Templates (slide-templates.js) v\u00eam embrulhados em <section>.
       Injetar isso dentro de outra <section> criaria uma pilha vertical
       no Reveal e perderia classes como .anchored-cover/.anchored-divider,
       ent\u00e3o desembrulhamos e copiamos classe + data-* para o slide. */
    const parsed = document.createElement("div");
    parsed.innerHTML = html;
    const wrapped = parsed.querySelector(":scope > section");
    if (wrapped && parsed.children.length === 1) {
      newSlide.className = wrapped.className;
      for (const [key, value] of Object.entries(wrapped.dataset)) {
        newSlide.dataset[key] = value;
      }
      newSlide.innerHTML = wrapped.innerHTML;
    } else {
      newSlide.innerHTML = html;
    }

    const siblings = getCurrentSlides();
    if (insertIdx < siblings.length) {
      container.insertBefore(newSlide, siblings[insertIdx]);
    } else {
      container.appendChild(newSlide);
    }

    syncSlidesFromDOM();
    saveSlides(state.slides);

    if (state.reveal && typeof state.reveal.sync === "function") {
      state.reveal.sync();
    }
    commitHistory();
    // Navegar para o novo slide
    if (state.reveal) {
      state.reveal.slide(insertIdx);
    }

    return true;
  }

  function addVerticalSlide(direction = "below", templateId = "header_body") {
    /* Insere uma pilha vertical (navegável com \u2191/\u2193) acima ou abaixo do
       slide atual. Se o slide de topo atual ainda for uma folha, ele \u00e9
       promovido a pilha (.stack), preservando classe, data-* e conte\u00fado
       exatamente como estavam \u2014 s\u00f3 muda de posi\u00e7\u00e3o no DOM. */
    if (state.inlineEditing) {
      stopInlineEditing();
    }
    const container = document.querySelector(".reveal .slides");
    if (!container) return false;

    const topSlides = getCurrentSlides();
    const currentH = state.reveal?.getState().indexh || 0;
    const currentV = state.reveal?.getState().indexv || 0;
    const currentTop = topSlides[currentH];
    if (!currentTop) return false;

    // Obter template (mesma l\u00f3gica de desembrulho do addSlide)
    const template = window.SlideTemplates && window.SlideTemplates.getTemplate(templateId);
    const html = template ? template.html : `
      <div class="slide-head">
        <p class="kicker">Novo</p>
        <h2>Sem t\u00edtulo</h2>
        <p class="subtitle">Clique para editar</p>
      </div>
      <div class="slide-body">
        <p>Adicione conte\u00fado aqui</p>
      </div>
      <div class="slide-mark">
        <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true">
          <use href="#oc-mark-github"></use>
        </svg>
        <span>GitHub</span>
      </div>
    `;
    const newSlide = document.createElement("section");
    const parsed = document.createElement("div");
    parsed.innerHTML = html;
    const wrapped = parsed.querySelector(":scope > section");
    if (wrapped && parsed.children.length === 1) {
      newSlide.className = wrapped.className;
      for (const [key, value] of Object.entries(wrapped.dataset)) {
        newSlide.dataset[key] = value;
      }
      newSlide.innerHTML = wrapped.innerHTML;
    } else {
      newSlide.innerHTML = html;
    }

    const innerSlides = currentTop.querySelectorAll(":scope > section");
    let nextV;

    if (innerSlides.length > 0) {
      /* J\u00e1 \u00e9 uma pilha: insere como irm\u00e3o do slide vertical atual */
      const currentInner = innerSlides[currentV] || innerSlides[0];
      if (direction === "above") {
        currentTop.insertBefore(newSlide, currentInner);
        nextV = currentV;
      } else {
        currentInner.parentNode.insertBefore(newSlide, currentInner.nextSibling);
        nextV = currentV + 1;
      }
    } else {
      /* Slide de topo ainda \u00e9 folha: promove a pilha, preservando o
         slide atual (classe, data-*, conte\u00fado) como filho dela. */
      const wrapperSlide = document.createElement("section");
      wrapperSlide.className = "stack";
      currentTop.parentNode.insertBefore(wrapperSlide, currentTop);
      wrapperSlide.appendChild(currentTop);
      if (direction === "above") {
        wrapperSlide.insertBefore(newSlide, currentTop);
        nextV = 0;
      } else {
        wrapperSlide.appendChild(newSlide);
        nextV = 1;
      }
    }

    syncSlidesFromDOM();
    saveSlides(state.slides);

    if (state.reveal && typeof state.reveal.sync === "function") {
      state.reveal.sync();
    }
    commitHistory();

    if (state.reveal) {
      state.reveal.slide(currentH, nextV);
    }

    return true;
  }

  function duplicateSlide(index) {
    if (state.inlineEditing) {
      stopInlineEditing();
    }
    const slides = getCurrentSlides();
    if (index < 0 || index >= slides.length) return false;

    const original = slides[index];
    const clone = original.cloneNode(true);
    
    original.parentNode.insertBefore(clone, original.nextSibling);

    if (state.reveal && typeof state.reveal.sync === "function") {
      state.reveal.sync();
    }

    syncSlidesFromDOM();
    saveSlides(state.slides);
    commitHistory();

    return true;
  }

  function deleteSlide(index) {
    if (state.inlineEditing) {
      stopInlineEditing(false);
    }
    const slides = getCurrentSlides();
    if (index < 0 || index >= slides.length || slides.length <= 1) return false;

    slides[index].remove();
    syncSlidesFromDOM();
    saveSlides(state.slides);

    if (state.reveal && typeof state.reveal.sync === "function") {
      state.reveal.sync();
    }
    commitHistory();
    // Reposiciona: fica no mesmo \u00edndice (pr\u00f3ximo slide) ou no \u00faltimo
    if (state.reveal) {
      state.reveal.slide(Math.min(index, Math.max(0, state.slides.length - 1)));
    }

    return true;
  }

  function updateSlideContent(index, html) {
    const slides = getCurrentSlides();
    if (index < 0 || index >= slides.length) return false;

    try {
      slides[index].innerHTML = html;
      syncSlidesFromDOM();
      saveSlides(state.slides);
      commitHistory();
      
      if (state.reveal && typeof state.reveal.sync === "function") {
        state.reveal.sync();
      }
      return true;
    } catch (err) {
      console.error("Erro ao atualizar slide:", err);
      return false;
    }
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Hist\u00f3rico: Desfazer / Refazer
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  function serializeDeck() {
    syncSlidesFromDOM();
    return JSON.stringify(
      state.slides.map((s) => ({ html: s.html, className: s.className, data: s.data }))
    );
  }

  function commitHistory() {
    const snapshot = serializeDeck();
    if (snapshot === historyState.present) {
      return false;
    }
    if (historyState.present !== null) {
      historyState.undo.push(historyState.present);
      if (historyState.undo.length > HISTORY_LIMIT) {
        historyState.undo.shift();
      }
    }
    historyState.present = snapshot;
    historyState.redo = [];
    updateHistoryButtons();
    return true;
  }

  function applySnapshot(json) {
    const container = document.querySelector(".reveal .slides");
    if (!container) return false;
    let slides;
    try {
      slides = JSON.parse(json);
    } catch (err) {
      return false;
    }
    container.innerHTML = "";
    for (const slide of slides) {
      const section = document.createElement("section");
      if (slide.className) {
        section.className = slide.className;
      }
      section.innerHTML = slide.html || "";
      if (slide.data && typeof slide.data === "object") {
        for (const [key, value] of Object.entries(slide.data)) {
          section.dataset[key] = value;
        }
      }
      container.appendChild(section);
    }
    if (state.reveal && typeof state.reveal.sync === "function") {
      state.reveal.sync();
    }
    syncSlidesFromDOM();
    saveSlides(state.slides);
    updateSlideNumber();
    return true;
  }

  function undoEdit() {
    if (state.inlineEditing) {
      /* Fecha a edi\u00e7\u00e3o salvando \u2014 o estado digitado vira o "presente"
         e o desfazer volta ao passo anterior a ele. */
      stopInlineEditing();
    }
    if (historyState.undo.length === 0) return false;
    historyState.redo.push(historyState.present);
    historyState.present = historyState.undo.pop();
    applySnapshot(historyState.present);
    updateHistoryButtons();
    return true;
  }

  function redoEdit() {
    if (state.inlineEditing) {
      stopInlineEditing();
    }
    if (historyState.redo.length === 0) return false;
    historyState.undo.push(historyState.present);
    historyState.present = historyState.redo.pop();
    applySnapshot(historyState.present);
    updateHistoryButtons();
    return true;
  }

  function updateHistoryButtons() {
    const undoBtn = document.querySelector(".editor-btn--undo");
    const redoBtn = document.querySelector(".editor-btn--redo");
    if (undoBtn) undoBtn.disabled = historyState.undo.length === 0;
    if (redoBtn) redoBtn.disabled = historyState.redo.length === 0;
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Edi\u00e7\u00e3o Inline (direto na p\u00e1gina, sem abrir o HTML)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  function getEditableSection() {
    /* Com pilhas verticais, o slide atual pode ser um filho aninhado;
       Reveal.getCurrentSlide() devolve a <section> exata em exibi\u00e7\u00e3o. */
    if (state.reveal && typeof state.reveal.getCurrentSlide === "function") {
      const current = state.reveal.getCurrentSlide();
      if (current) return current;
    }
    const slides = getCurrentSlides();
    const idx = state.reveal?.getState().indexh || 0;
    return slides[idx] || null;
  }

  function startInlineEditing() {
    const target = getEditableSection();
    if (!target) return false;
    if (state.inlineSection) {
      stopInlineEditing();
    }
    target.setAttribute("contenteditable", "true");
    target.classList.add("editing-inline");
    target.setAttribute("spellcheck", "false");
    target.addEventListener("input", handleInlineInput);
    state.inlineSection = target;
    state.inlineEditing = true;
    /* Sem isto, digitar qualquer letra dispara atalhos do Reveal
       (espa\u00e7o avan\u00e7a, F = fullscreen, S = speaker view...). */
    if (state.reveal && typeof state.reveal.configure === "function") {
      state.reveal.configure({ keyboard: false });
    }
    target.focus();
    updateInlineButton();
    return true;
  }

  function trackInlineSelection() {
    /* Guarda a \u00faltima posi\u00e7\u00e3o do caret dentro do slide em edi\u00e7\u00e3o, para
       que "Inserir \u00edcone/imagem" saiba onde inserir mesmo depois de o
       clique no painel tirar o foco da se\u00e7\u00e3o. */
    if (!state.inlineEditing || !state.inlineSection) return;
    const selection = document.getSelection ? document.getSelection() : null;
    if (!selection || selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);
    if (state.inlineSection.contains(range.commonAncestorContainer)) {
      state.inlineRange = range.cloneRange();
    }
  }

  function stopInlineEditing(save = true) {
    const target = state.inlineSection;
    state.inlineEditing = false;
    state.inlineSection = null;
    state.inlineRange = null;
    if (state.inlineSaveTimer) {
      clearTimeout(state.inlineSaveTimer);
      state.inlineSaveTimer = null;
    }
    if (target) {
      target.removeEventListener("input", handleInlineInput);
      target.removeAttribute("contenteditable");
      target.classList.remove("editing-inline");
      target.removeAttribute("spellcheck");
    }
    if (state.reveal && typeof state.reveal.configure === "function") {
      state.reveal.configure({ keyboard: true });
    }
    if (save && target) {
      persistInline();
    }
    updateInlineButton();
    return true;
  }

  function toggleInlineEditing() {
    return state.inlineEditing ? stopInlineEditing() : startInlineEditing();
  }

  function handleInlineInput() {
    /* Salva com debounce enquanto a pessoa digita */
    if (state.inlineSaveTimer) {
      clearTimeout(state.inlineSaveTimer);
    }
    state.inlineSaveTimer = setTimeout(persistInline, 400);
  }

  function persistInline() {
    syncSlidesFromDOM();
    saveSlides(state.slides);
    commitHistory();
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // \u00cdcones e Imagens Oficiais do GitHub
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  function insertNodeIntoSlide(node) {
    /* Editando + caret conhecido dentro do slide \u2192 insere na posi\u00e7\u00e3o */
    if (
      state.inlineEditing &&
      state.inlineSection &&
      state.inlineRange &&
      state.inlineSection.contains(state.inlineRange.commonAncestorContainer)
    ) {
      const range = state.inlineRange;
      range.collapse(false);
      range.insertNode(node);
      range.setStartAfter(node);
      range.collapse(true);
      const selection = document.getSelection ? document.getSelection() : null;
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
      state.inlineRange = range.cloneRange();
      state.inlineSection.focus();
      persistInline();
      return true;
    }
    /* Fora da edi\u00e7\u00e3o (ou sem caret): anexa ao corpo do slide atual */
    const section = getEditableSection();
    if (!section) return false;
    const body = section.querySelector(".slide-body") || section;
    body.appendChild(node);
    syncSlidesFromDOM();
    saveSlides(state.slides);
    commitHistory();
    if (state.reveal && typeof state.reveal.sync === "function") {
      state.reveal.sync();
    }
    return true;
  }

  function insertOfficialIcon(symbolId) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "oc");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("aria-hidden", "true");
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#" + symbolId);
    svg.appendChild(use);
    return insertNodeIntoSlide(svg);
  }

  function insertOfficialImage(url, name) {
    const img = document.createElement("img");
    img.className = "slide-img";
    img.src = url;
    img.alt = name + " \u2014 GitHub Octodex";
    img.setAttribute("loading", "lazy");
    return insertNodeIntoSlide(img);
  }

  function openMediaModal() {
    const panel = document.querySelector(".editor-panel");
    if (!panel) return;
    const modal = panel.querySelector(".editor-modal--media");
    const body = panel.querySelector(".editor-modal-body--media");
    if (!modal || !body) return;
    body.innerHTML = "";

    /* Octicons: l\u00ea os s\u00edmbolos do sprite presente na p\u00e1gina, ent\u00e3o o
       cat\u00e1logo acompanha automaticamente o que o deck oferece. */
    const iconGroup = document.createElement("div");
    iconGroup.className = "editor-media-group";
    const iconTitle = document.createElement("h5");
    iconTitle.textContent = "Octicons oficiais";
    iconGroup.appendChild(iconTitle);
    const iconGrid = document.createElement("div");
    iconGrid.className = "editor-media-grid";
    document.querySelectorAll("svg symbol[id^='oc-']").forEach((symbol) => {
      const id = symbol.id;
      const label = ICON_LABELS[id] || id.replace(/^oc-/, "");
      const item = document.createElement("button");
      item.type = "button";
      item.className = "editor-media-item";
      item.title = "Inserir \u00edcone: " + label;
      item.innerHTML =
        '<svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#' + id + '"></use></svg>' +
        "<span>" + label + "</span>";
      item.addEventListener("click", () => {
        insertOfficialIcon(id);
        modal.style.display = "none";
      });
      iconGrid.appendChild(item);
    });
    iconGroup.appendChild(iconGrid);
    body.appendChild(iconGroup);

    /* Imagens oficiais (Octodex) */
    const imageGroup = document.createElement("div");
    imageGroup.className = "editor-media-group";
    const imageTitle = document.createElement("h5");
    imageTitle.textContent = "Imagens oficiais (Octodex)";
    imageGroup.appendChild(imageTitle);
    const imageGrid = document.createElement("div");
    imageGrid.className = "editor-media-grid editor-media-grid--images";
    OFFICIAL_IMAGES.forEach((asset) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "editor-media-item";
      item.title = "Inserir imagem: " + asset.name;
      item.innerHTML =
        '<img src="' + asset.url + '" alt="" loading="lazy" />' +
        "<span>" + asset.name + "</span>";
      item.addEventListener("click", () => {
        insertOfficialImage(asset.url, asset.name);
        modal.style.display = "none";
      });
      imageGrid.appendChild(item);
    });
    imageGroup.appendChild(imageGrid);
    body.appendChild(imageGroup);

    modal.style.display = "block";
  }

  function updateInlineButton() {
    const button = document.querySelector(".editor-btn--edit-inline");
    if (!button) return;
    button.setAttribute("aria-pressed", state.inlineEditing ? "true" : "false");
    const label = button.querySelector(".editor-btn__label");
    if (label) {
      label.textContent = state.inlineEditing ? "Parar edi\u00e7\u00e3o" : "Editar na p\u00e1gina";
    }
    button.classList.toggle("editor-btn--active", state.inlineEditing);
  }

  function ensureInlineStyles() {
    if (document.getElementById("editor-inline-styles")) return;
    const style = document.createElement("style");
    style.id = "editor-inline-styles";
    style.textContent = [
      ".reveal .slides section.editing-inline {",
      "  outline: 2px dashed var(--accent, #2f81f7);",
      "  outline-offset: 10px;",
      "  cursor: text;",
      "  caret-color: var(--accent, #2f81f7);",
      "}",
      ".reveal .slides section.editing-inline:focus {",
      "  outline-style: solid;",
      "}",
      ".editor-media-group { margin-bottom: 16px; }",
      ".editor-media-group h5 {",
      "  margin: 0 0 8px;",
      "  font-size: 12px;",
      "  text-transform: uppercase;",
      "  letter-spacing: 0.06em;",
      "  color: var(--text-muted, #8b949e);",
      "}",
      ".editor-media-grid {",
      "  display: grid;",
      "  grid-template-columns: repeat(auto-fill, minmax(76px, 1fr));",
      "  gap: 8px;",
      "}",
      ".editor-media-item {",
      "  display: flex;",
      "  flex-direction: column;",
      "  align-items: center;",
      "  gap: 6px;",
      "  padding: 10px 4px 8px;",
      "  background: transparent;",
      "  border: 1px solid var(--border, #30363d);",
      "  border-radius: 8px;",
      "  color: inherit;",
      "  font-size: 11px;",
      "  line-height: 1.2;",
      "  cursor: pointer;",
      "  text-align: center;",
      "}",
      ".editor-media-item:hover,",
      ".editor-media-item:focus-visible {",
      "  border-color: var(--accent, #2f81f7);",
      "  color: var(--accent, #2f81f7);",
      "  outline: none;",
      "}",
      ".editor-media-item .oc { width: 22px; height: 22px; }",
      ".editor-media-item img {",
      "  width: 56px;",
      "  height: 56px;",
      "  object-fit: cover;",
      "  border-radius: 6px;",
      "}",
      ".reveal .slides .slide-img {",
      "  max-height: 5em;",
      "  max-width: 45%;",
      "  border-radius: 10px;",
      "  border: 1px solid var(--border, #30363d);",
      "  vertical-align: middle;",
      "}",
      ".editor-btn--active {",
      "  color: var(--accent, #2f81f7);",
      "  border-color: var(--accent, #2f81f7);",
      "}"
    ].join("\n");
    document.head.appendChild(style);
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // UI do Editor
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  function createEditorUI() {
    // Botão de config (engrenagem)
    const configBtn = document.createElement("button");
    configBtn.type = "button";
    configBtn.className = "editor-config-btn";
    configBtn.setAttribute("aria-label", "Editar slides");
    configBtn.innerHTML = `
      <svg class="oc" viewBox="0 0 16 16" aria-hidden="true">
        <use href="#oc-pencil"></use>
      </svg>
    `;
    configBtn.addEventListener("click", togglePanel);
    document.body.appendChild(configBtn);

    // Painel de controle
    const panel = document.createElement("div");
    panel.className = "editor-panel";
    panel.setAttribute("role", "complementary");
    panel.setAttribute("aria-label", "Editor de slides");
    panel.innerHTML = `
      <div class="editor-panel-header">
        <h3>Editor de Slides</h3>
        <button class="editor-panel-close" aria-label="Fechar editor" type="button">
          <svg class="oc" viewBox="0 0 16 16" aria-hidden="true">
            <use href="#oc-x"></use>
          </svg>
        </button>
      </div>
      <div class="editor-panel-body">
        <!-- Slide atual -->
        <div class="editor-slide-info">
          <label><strong>Slide atual:</strong> <span class="editor-slide-number">—</span></label>
        </div>

        <div class="editor-group">
          <p class="editor-group-label">Editar</p>
          <button class="editor-btn editor-btn--edit-inline" type="button" title="Editar o slide diretamente na p\u00e1gina" aria-pressed="false">
                      <svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-pencil"></use></svg>
                      <span class="editor-btn__label">Editar na p\u00e1gina</span>
                    </button>
          <button class="editor-btn editor-btn--edit" type="button" title="Editar o HTML do slide atual">
                      <svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-code"></use></svg>
                      Editar HTML
                    </button>
          <button class="editor-btn editor-btn--media" type="button" title="Inserir \u00edcone ou imagem oficial do GitHub">
                      <svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
                      \u00cdcone / imagem
                    </button>
        </div>

        <div class="editor-group">
          <p class="editor-group-label">Adicionar slide</p>
          <div class="editor-btn-grid">
            <button class="editor-btn editor-btn--add-after" type="button" title="Adicionar slide após o atual (escolha template)">
                        <svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-plus"></use></svg>
                        após
                      </button>
            <button class="editor-btn editor-btn--add-before" type="button" title="Adicionar slide antes do atual (escolha template)">
                        <svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-plus"></use></svg>
                        antes
                      </button>
            <button class="editor-btn editor-btn--add-above" type="button" title="Adicionar slide acima do atual — pilha vertical, navegue com \u2191/\u2193 (escolha template)">
                        <svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-plus"></use></svg>
                        acima
                      </button>
            <button class="editor-btn editor-btn--add-below" type="button" title="Adicionar slide abaixo do atual — pilha vertical, navegue com \u2191/\u2193 (escolha template)">
                        <svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-plus"></use></svg>
                        abaixo
                      </button>
          </div>
          <button class="editor-btn editor-btn--duplicate" type="button" title="Duplicar slide atual">
                      <svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-copy"></use></svg>
                      Duplicar
                    </button>
        </div>

        <div class="editor-group">
          <p class="editor-group-label">Histórico</p>
          <div class="editor-btn-grid">
            <button class="editor-btn editor-btn--undo" type="button" title="Desfazer \u00faltima edi\u00e7\u00e3o (Ctrl+Z)" disabled>
                        <svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><path d="M4.53 1.97a.75.75 0 0 1 0 1.06L3.06 4.5H9.25a4.75 4.75 0 0 1 0 9.5H5.5a.75.75 0 0 1 0-1.5h3.75a3.25 3.25 0 0 0 0-6.5H3.06l1.47 1.47a.75.75 0 1 1-1.06 1.06L.72 5.78a.75.75 0 0 1 0-1.06l2.75-2.75a.75.75 0 0 1 1.06 0Z"/></svg>
                        Desfazer
                      </button>
            <button class="editor-btn editor-btn--redo" type="button" title="Refazer edi\u00e7\u00e3o (Ctrl+Y)" disabled>
                        <svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><g transform="translate(16 0) scale(-1 1)"><path d="M4.53 1.97a.75.75 0 0 1 0 1.06L3.06 4.5H9.25a4.75 4.75 0 0 1 0 9.5H5.5a.75.75 0 0 1 0-1.5h3.75a3.25 3.25 0 0 0 0-6.5H3.06l1.47 1.47a.75.75 0 1 1-1.06 1.06L.72 5.78a.75.75 0 0 1 0-1.06l2.75-2.75a.75.75 0 0 1 1.06 0Z"/></g></svg>
                        Refazer
                      </button>
          </div>
        </div>

        <div class="editor-group">
          <p class="editor-group-label">Templates</p>
          <button class="editor-btn editor-btn--templates" type="button" title="Gerenciar templates personalizados">
                      <span class="editor-btn__row">
                        <svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-copy"></use></svg>
                        Gerenciar templates
                      </span>
                    </button>
        </div>

        <div class="editor-group editor-group--danger">
          <p class="editor-group-label editor-group-label--danger">Zona de risco</p>
          <div class="editor-danger-zone">
            <button class="editor-btn editor-btn--delete editor-btn--danger" type="button" title="Excluir slide atual">
                        <svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-trash"></use></svg>
                        Excluir slide
                      </button>
            <button class="editor-btn editor-btn--reset editor-btn--danger" type="button" title="Resetar todos os slides para a versão original (apaga as edições deste navegador)">
                        <svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-trash"></use></svg>
                        Resetar slides
                      </button>
          </div>
        </div>

        <!-- Modal de edição de slide -->
        <div class="editor-modal editor-modal--edit" style="display: none;">
          <div class="editor-modal-content">
            <div class="editor-modal-header">
              <h4>Editar Slide</h4>
              <button class="editor-modal-close" aria-label="Fechar" type="button">
                <svg class="oc" viewBox="0 0 16 16" aria-hidden="true">
                  <use href="#oc-x"></use>
                </svg>
              </button>
            </div>
            <div class="editor-modal-body">
              <textarea class="editor-textarea" placeholder="HTML do slide" rows="20"></textarea>
            </div>
            <div class="editor-modal-footer">
              <button class="editor-btn editor-btn--primary editor-btn--save" type="button">Salvar</button>
              <button class="editor-btn editor-btn--cancel" type="button">Cancelar</button>
            </div>
          </div>
        </div>

        <!-- Modal de \u00edcones e imagens oficiais -->
        <div class="editor-modal editor-modal--media" style="display: none;">
          <div class="editor-modal-content editor-modal-content--templates">
            <div class="editor-modal-header">
              <h4>\u00cdcones e Imagens Oficiais</h4>
              <button class="editor-modal-close" aria-label="Fechar" type="button">
                <svg class="oc" viewBox="0 0 16 16" aria-hidden="true">
                  <use href="#oc-x"></use>
                </svg>
              </button>
            </div>
            <div class="editor-modal-body editor-modal-body--media">
              <!-- Preenchido dinamicamente -->
            </div>
          </div>
        </div>

        <!-- Modal de seleção de templates -->
        <div class="editor-modal editor-modal--templates" style="display: none;">
          <div class="editor-modal-content editor-modal-content--templates">
            <div class="editor-modal-header">
              <h4>Escolha um Template</h4>
              <button class="editor-modal-close" aria-label="Fechar" type="button">
                <svg class="oc" viewBox="0 0 16 16" aria-hidden="true">
                  <use href="#oc-x"></use>
                </svg>
              </button>
            </div>
            <div class="editor-modal-body editor-modal-body--templates">
              <!-- Preenchido dinamicamente -->
            </div>
          </div>
        </div>

        <!-- Modal de gerenciamento de templates personalizados -->
        <div class="editor-modal editor-modal--template-manager" style="display: none;">
          <div class="editor-modal-content editor-modal-content--templates">
            <div class="editor-modal-header">
              <h4>Gerenciar templates personalizados</h4>
              <button class="editor-modal-close" aria-label="Fechar" type="button">
                <svg class="oc" viewBox="0 0 16 16" aria-hidden="true">
                  <use href="#oc-x"></use>
                </svg>
              </button>
            </div>
            <div class="editor-modal-body editor-modal-body--template-manager">
              <div class="editor-template-manager-list-wrap">
                <div class="editor-template-manager-toolbar">
                  <p class="editor-template-manager-title">Seus templates</p>
                  <button class="editor-btn editor-btn--template-new" type="button" title="Criar novo template">
                    <svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-plus"></use></svg>
                    Novo
                  </button>
                </div>
                <div class="editor-template-manager-list" role="list"></div>
              </div>
              <form class="editor-template-manager-form" novalidate>
                <label class="editor-template-field">
                  <span>ID</span>
                  <input class="editor-template-input editor-template-input--id" name="id" type="text" placeholder="ex: meu-template" autocomplete="off" />
                </label>
                <label class="editor-template-field">
                  <span>Nome</span>
                  <input class="editor-template-input editor-template-input--name" name="name" type="text" placeholder="Nome do template" autocomplete="off" />
                </label>
                <label class="editor-template-field">
                  <span>Descrição</span>
                  <input class="editor-template-input editor-template-input--description" name="description" type="text" placeholder="Descrição breve" autocomplete="off" />
                </label>
                <label class="editor-template-field">
                  <span>HTML</span>
                  <textarea class="editor-textarea editor-template-input--html" name="html" rows="12" placeholder="<section>...</section>"></textarea>
                </label>
                <div class="editor-template-manager-actions">
                  <button class="editor-btn editor-btn--primary editor-btn--template-save" type="submit">Salvar template</button>
                  <button class="editor-btn editor-btn--template-cancel-edit" type="button" style="display: none;">Cancelar edição</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(panel);

    // Event listeners (o configBtn j\u00e1 recebeu o listener na cria\u00e7\u00e3o \u2014
    // registrar de novo aqui fazia o painel abrir e fechar no mesmo clique)
    panel.querySelector(".editor-panel-close").addEventListener("click", closePanel);
    
    // Botões de adicionar slide (abrem modal de templates)
    panel.querySelector(".editor-btn--add-after").addEventListener("click", () => {
      openTemplateSelectionModal("after");
    });
    panel.querySelector(".editor-btn--add-before").addEventListener("click", () => {
      openTemplateSelectionModal("before");
    });
    panel.querySelector(".editor-btn--add-above").addEventListener("click", () => {
      openTemplateSelectionModal("above");
    });
    panel.querySelector(".editor-btn--add-below").addEventListener("click", () => {
      openTemplateSelectionModal("below");
    });
    
    panel.querySelector(".editor-btn--duplicate").addEventListener("click", () => {
      const idx = state.reveal?.getState().indexh || 0;
      duplicateSlide(idx);
      updateSlideNumber();
    });
    panel.querySelector(".editor-btn--edit-inline").addEventListener("click", toggleInlineEditing);
    panel.querySelector(".editor-btn--edit").addEventListener("click", openEditModal);

    panel.querySelector(".editor-btn--undo").addEventListener("click", undoEdit);
    panel.querySelector(".editor-btn--redo").addEventListener("click", redoEdit);
    panel.querySelector(".editor-btn--reset").addEventListener("click", resetSlides);
    panel.querySelector(".editor-btn--media").addEventListener("click", openMediaModal);
    panel.querySelector(".editor-btn--templates").addEventListener("click", openTemplateManagerModal);

    const mediaModal = panel.querySelector(".editor-modal--media");
    mediaModal.querySelector(".editor-modal-close").addEventListener("click", () => {
      mediaModal.style.display = "none";
    });
    mediaModal.addEventListener("click", (e) => {
      if (e.target === mediaModal) {
        mediaModal.style.display = "none";
      }
    });

    document.addEventListener("selectionchange", trackInlineSelection);

    ensureInlineStyles();

    /* Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y fora de campos de texto. Dentro do
       textarea do modal e da edi\u00e7\u00e3o inline, o undo nativo do navegador
       segue valendo para a digita\u00e7\u00e3o em curso. */
    document.addEventListener("keydown", (event) => {
      const key = (event.key || "").toLowerCase();
      if (!(event.ctrlKey || event.metaKey) || (key !== "z" && key !== "y")) {
        return;
      }
      const target = event.target;
      if (
        target &&
        typeof target.closest === "function" &&
        target.closest("textarea, input, [contenteditable='true']")
      ) {
        return;
      }
      event.preventDefault();
      if (key === "y" || (key === "z" && event.shiftKey)) {
        redoEdit();
      } else {
        undoEdit();
      }
    });

    /* Escape encerra a edi\u00e7\u00e3o inline (salvando) */
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && state.inlineEditing) {
        event.stopPropagation();
        stopInlineEditing();
      }
    }, true);
    panel.querySelector(".editor-btn--delete").addEventListener("click", () => {
      if (confirm("Tem certeza? Não é possível desfazer.")) {
        const idx = state.reveal?.getState().indexh || 0;
        deleteSlide(idx);
        updateSlideNumber();
      }
    });

    // Modais de edição e templates
    const editModal = panel.querySelector(".editor-modal--edit");
    const templatesModal = panel.querySelector(".editor-modal--templates");
    const templateManagerModal = panel.querySelector(".editor-modal--template-manager");
    const templateManagerForm = panel.querySelector(".editor-template-manager-form");
    
    // Fechar modais ao clicar no X
    editModal.querySelector(".editor-modal-close").addEventListener("click", () => {
      editModal.style.display = "none";
    });
    templatesModal.querySelector(".editor-modal-close").addEventListener("click", () => {
      templatesModal.style.display = "none";
    });
    templateManagerModal.querySelector(".editor-modal-close").addEventListener("click", () => {
      templateManagerModal.style.display = "none";
    });
    
    // Botão de cancelar (só no modal de edição)
    panel.querySelector(".editor-btn--cancel").addEventListener("click", () => {
      editModal.style.display = "none";
    });
    panel.querySelector(".editor-btn--template-new").addEventListener("click", () => {
      resetTemplateManagerForm();
    });
    panel.querySelector(".editor-btn--template-cancel-edit").addEventListener("click", () => {
      resetTemplateManagerForm();
    });
    templateManagerForm.addEventListener("submit", submitTemplateManagerForm);

    // Salvar edição
    panel.querySelector(".editor-btn--save").addEventListener("click", () => {
      const textarea = panel.querySelector(".editor-textarea");
      const idx = state.reveal?.getState().indexh || 0;
      if (updateSlideContent(idx, textarea.value)) {
        editModal.style.display = "none";
        updateSlideNumber();
      } else {
        alert("Erro ao salvar. Verifique o HTML.");
      }
    });

    // Fechar modais ao clicar fora
    editModal.addEventListener("click", (e) => {
      if (e.target === editModal) {
        editModal.style.display = "none";
      }
    });
    templatesModal.addEventListener("click", (e) => {
      if (e.target === templatesModal) {
        templatesModal.style.display = "none";
      }
    });
    templateManagerModal.addEventListener("click", (e) => {
      if (e.target === templateManagerModal) {
        templateManagerModal.style.display = "none";
      }
    });
  }

  function openEditModal() {
    if (state.inlineEditing) {
      stopInlineEditing();
    }
    const panel = document.querySelector(".editor-panel");
    const modal = panel.querySelector(".editor-modal--edit");
    const textarea = panel.querySelector(".editor-textarea");
    const idx = state.reveal?.getState().indexh || 0;
    const slides = getCurrentSlides();

    if (idx < slides.length) {
      textarea.value = slides[idx].innerHTML;
      modal.style.display = "block";
      textarea.focus();
    }
  }

  function openTemplateSelectionModal(position) {
    const panel = document.querySelector(".editor-panel");
    const modal = panel.querySelector(".editor-modal--templates");
    const body = panel.querySelector(".editor-modal-body--templates");

    if (!window.SlideTemplates) {
      alert("Módulo de templates não carregado");
      return;
    }

    // Título dinâmico conforme o modo de inserção
    const modalTitle = panel.querySelector(".editor-modal--templates h4");
    const POSITION_LABELS = {
      after: "Escolha um template \u2014 inserir após",
      before: "Escolha um template \u2014 inserir antes",
      above: "Escolha um template \u2014 inserir acima (pilha vertical \u2191)",
      below: "Escolha um template \u2014 inserir abaixo (pilha vertical \u2193)"
    };
    if (modalTitle) {
      modalTitle.textContent = POSITION_LABELS[position] || "Escolha um Template";
    }

    // Limpar corpo anterior
    body.innerHTML = "";

    // Obter templates agrupados por categoria
    const templates = window.SlideTemplates.listTemplates();

    // Renderizar cada categoria
    for (const [category, items] of Object.entries(templates)) {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "editor-templates-category";
      
      const categoryTitle = document.createElement("h5");
      categoryTitle.textContent = category;
      categoryDiv.appendChild(categoryTitle);

      for (const item of items) {
        const itemBtn = document.createElement("button");
        itemBtn.type = "button";
        itemBtn.className = "editor-template-item";
        itemBtn.innerHTML = `
          <strong>${item.name}</strong>
          ${item.description ? `<p>${item.description}</p>` : ""}
          ${item.builtin ? '<small style="opacity: 0.6;">Padrão</small>' : '<small style="opacity: 0.6;">Personalizado</small>'}
        `;
        itemBtn.addEventListener("click", () => {
          if (position === "above" || position === "below") {
            addVerticalSlide(position, item.id);
          } else {
            addSlide(position, item.id);
          }
          modal.style.display = "none";
          updateSlideNumber();
        });
        categoryDiv.appendChild(itemBtn);
      }

      body.appendChild(categoryDiv);
    }

    modal.style.display = "block";
  }

  function getCustomTemplateItems() {
    if (!window.SlideTemplates || typeof window.SlideTemplates.listTemplates !== "function") {
      return [];
    }
    const templates = window.SlideTemplates.listTemplates();
    const custom = templates["Personalizados"];
    return Array.isArray(custom) ? custom : [];
  }

  function getTemplateManagerElements() {
    const panel = document.querySelector(".editor-panel");
    if (!panel) return null;
    const modal = panel.querySelector(".editor-modal--template-manager");
    const list = panel.querySelector(".editor-template-manager-list");
    const form = panel.querySelector(".editor-template-manager-form");
    const idInput = panel.querySelector(".editor-template-input--id");
    const nameInput = panel.querySelector(".editor-template-input--name");
    const descriptionInput = panel.querySelector(".editor-template-input--description");
    const htmlInput = panel.querySelector(".editor-template-input--html");
    const saveBtn = panel.querySelector(".editor-btn--template-save");
    const cancelEditBtn = panel.querySelector(".editor-btn--template-cancel-edit");
    if (
      !modal || !list || !form ||
      !idInput || !nameInput || !descriptionInput || !htmlInput ||
      !saveBtn || !cancelEditBtn
    ) {
      return null;
    }
    return {
      modal,
      list,
      form,
      idInput,
      nameInput,
      descriptionInput,
      htmlInput,
      saveBtn,
      cancelEditBtn
    };
  }

  function resetTemplateManagerForm() {
    const refs = getTemplateManagerElements();
    if (!refs) return;
    refs.form.reset();
    delete refs.form.dataset.editingId;
    refs.idInput.disabled = false;
    refs.saveBtn.textContent = "Salvar template";
    refs.cancelEditBtn.style.display = "none";
    refs.idInput.focus();
  }

  function openTemplateManagerModal() {
    if (!window.SlideTemplates) {
      alert("Módulo de templates não carregado");
      return;
    }
    const refs = getTemplateManagerElements();
    if (!refs) return;
    renderTemplateManagerList();
    resetTemplateManagerForm();
    refs.modal.style.display = "block";
  }

  function editCustomTemplate(templateId) {
    if (!window.SlideTemplates || typeof window.SlideTemplates.getTemplate !== "function") {
      return;
    }
    const template = window.SlideTemplates.getTemplate(templateId);
    const refs = getTemplateManagerElements();
    if (!refs) return;
    if (!template || template.builtin) {
      alert("Template personalizado não encontrado.");
      return;
    }
    refs.form.dataset.editingId = templateId;
    refs.idInput.value = templateId;
    refs.idInput.disabled = true;
    refs.nameInput.value = template.name || "";
    refs.descriptionInput.value = template.description || "";
    refs.htmlInput.value = template.html || "";
    refs.saveBtn.textContent = "Salvar alterações";
    refs.cancelEditBtn.style.display = "inline-flex";
    refs.nameInput.focus();
  }

  function duplicateCustomTemplate(templateId) {
    if (!window.SlideTemplates || typeof window.SlideTemplates.getTemplate !== "function") {
      return;
    }
    const source = window.SlideTemplates.getTemplate(templateId);
    if (!source || source.builtin) {
      alert("Template personalizado não encontrado.");
      return;
    }
    const suggestedId = `${templateId}-copia`;
    const newId = window.prompt("Novo ID para a cópia:", suggestedId);
    if (newId === null) return;
    const cleanId = newId.trim();
    if (!cleanId) {
      alert("ID da cópia não pode ficar vazio.");
      return;
    }
    const newName = window.prompt("Nome da cópia:", `Cópia de ${source.name}`);
    if (newName === null) return;
    try {
      window.SlideTemplates.duplicateTemplate(templateId, cleanId, newName.trim() || undefined);
      renderTemplateManagerList();
      alert("Template duplicado com sucesso.");
    } catch (err) {
      alert(`Erro ao duplicar template: ${err.message}`);
    }
  }

  function deleteCustomTemplate(templateId) {
    if (!window.SlideTemplates || typeof window.SlideTemplates.deleteCustomTemplate !== "function") {
      return;
    }
    if (!window.confirm("Excluir este template personalizado?")) {
      return;
    }
    try {
      window.SlideTemplates.deleteCustomTemplate(templateId);
      const refs = getTemplateManagerElements();
      if (refs && refs.form.dataset.editingId === templateId) {
        resetTemplateManagerForm();
      }
      renderTemplateManagerList();
    } catch (err) {
      alert(`Erro ao excluir template: ${err.message}`);
    }
  }

  function renderTemplateManagerList() {
    const refs = getTemplateManagerElements();
    if (!refs) return;
    const items = getCustomTemplateItems();
    refs.list.innerHTML = "";

    if (items.length === 0) {
      const empty = document.createElement("p");
      empty.className = "editor-template-manager-empty";
      empty.textContent = "Nenhum template personalizado ainda. Use o formulário ao lado para criar o primeiro.";
      refs.list.appendChild(empty);
      return;
    }

    for (const item of items) {
      const card = document.createElement("article");
      card.className = "editor-template-manager-item";

      const heading = document.createElement("div");
      heading.className = "editor-template-manager-item-heading";
      const title = document.createElement("strong");
      title.textContent = item.name;
      const idLabel = document.createElement("code");
      idLabel.textContent = item.id;
      heading.appendChild(title);
      heading.appendChild(idLabel);

      const description = document.createElement("p");
      description.className = "editor-template-manager-item-description";
      description.textContent = item.description || "Sem descrição.";

      const actions = document.createElement("div");
      actions.className = "editor-template-manager-item-actions";

      const editBtn = document.createElement("button");
      editBtn.type = "button";
      editBtn.className = "editor-btn";
      editBtn.textContent = "Editar";
      editBtn.addEventListener("click", () => {
        editCustomTemplate(item.id);
      });

      const duplicateBtn = document.createElement("button");
      duplicateBtn.type = "button";
      duplicateBtn.className = "editor-btn";
      duplicateBtn.textContent = "Duplicar";
      duplicateBtn.addEventListener("click", () => {
        duplicateCustomTemplate(item.id);
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "editor-btn editor-btn--danger";
      deleteBtn.textContent = "Excluir";
      deleteBtn.addEventListener("click", () => {
        deleteCustomTemplate(item.id);
      });

      actions.appendChild(editBtn);
      actions.appendChild(duplicateBtn);
      actions.appendChild(deleteBtn);

      card.appendChild(heading);
      card.appendChild(description);
      card.appendChild(actions);
      refs.list.appendChild(card);
    }
  }

  function submitTemplateManagerForm(event) {
    event.preventDefault();
    if (!window.SlideTemplates) {
      alert("Módulo de templates não carregado");
      return;
    }
    const refs = getTemplateManagerElements();
    if (!refs) return;
    const editingId = refs.form.dataset.editingId || "";
    const id = editingId || refs.idInput.value.trim();
    const name = refs.nameInput.value.trim();
    const description = refs.descriptionInput.value.trim();
    const html = refs.htmlInput.value.trim();

    if (!id || !name || !html) {
      alert("Preencha os campos obrigatórios: ID, Nome e HTML.");
      return;
    }

    try {
      if (editingId) {
        window.SlideTemplates.updateCustomTemplate(editingId, { name, description, html });
      } else {
        window.SlideTemplates.addCustomTemplate(id, name, description, html);
      }
      renderTemplateManagerList();
      resetTemplateManagerForm();
    } catch (err) {
      alert(`Erro ao salvar template: ${err.message}`);
    }
  }

  function updateSlideNumber() {
    const panel = document.querySelector(".editor-panel");
    if (!panel) return;
    const num = panel.querySelector(".editor-slide-number");
    if (!num) return;

    const reveal = state.reveal;
    let current;
    let total;
    if (
      reveal &&
      typeof reveal.getTotalSlides === "function" &&
      typeof reveal.getSlidePastCount === "function"
    ) {
      /* Conta TODOS os slides, inclusive os de dentro de pilhas verticais
         (Novo acima/abaixo), e a posi\u00e7\u00e3o sequencial exata do slide
         atual entre eles. Sem isso, navegar com \u2191/\u2193 dentro de uma
         pilha n\u00e3o mexia no contador \u2014 ele s\u00f3 olhava o \u00edndice
         horizontal, que n\u00e3o muda ao descer/subir na mesma pilha. */
      total = reveal.getTotalSlides();
      current = reveal.getSlidePastCount() + 1;
    } else {
      /* Fallback (Reveal sem essas APIs, ou ambiente de teste): conta
         s\u00f3 os slides de topo, sem refletir a posi\u00e7\u00e3o vertical. */
      const slides = getCurrentSlides();
      current = (reveal?.getState().indexh || 0) + 1;
      total = slides.length;
    }
    num.textContent = `${current} / ${total}`;
  }

  function togglePanel() {
    state.panelOpen ? closePanel() : openPanel();
  }

  function openPanel() {
    const panel = document.querySelector(".editor-panel");
    if (panel) {
      panel.classList.add("editor-panel--open");
      state.panelOpen = true;
      localStorage.setItem(PANEL_STATE_KEY, "true");
      updateSlideNumber();
    }
  }

  function closePanel() {
    const panel = document.querySelector(".editor-panel");
    if (panel) {
      panel.classList.remove("editor-panel--open");
      state.panelOpen = false;
      localStorage.setItem(PANEL_STATE_KEY, "false");
    }
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Exportar Deck
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  function exportAsJSON() {
    syncSlidesFromDOM();
    const data = {
      exportedAt: new Date().toISOString(),
      slides: state.slides.map(s => ({ html: s.html }))
    };
    const json = JSON.stringify(data, null, 2);
    downloadFile(json, "slides.json", "application/json");
  }

  function exportAsHTML() {
    syncSlidesFromDOM();
    const container = document.querySelector(".reveal .slides");
    const html = container.innerHTML;
    downloadFile(html, "slides-content.html", "text/html");
  }

  function downloadFile(content, filename, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Inicialização
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  function captureOriginalSlides() {
    /* Foto do HTML tal como foi entregue (antes de qualquer restauração
       do localStorage) — é para essa versão que "Resetar slides" volta. */
    const slides = getCurrentSlides();
    state.originalSlides = slides.map((el) => ({
      html: el.innerHTML,
      className: el.className,
      data: { ...el.dataset }
    }));
  }

  function resetSlides() {
    if (!state.originalSlides) return false;
    if (
      !window.confirm(
        "Resetar todos os slides deste deck para a versão original?\n\n" +
        "Suas edições feitas neste navegador (texto, slides adicionados, " +
        "ícones/imagens inseridos) serão perdidas. Esta ação não pode ser desfeita."
      )
    ) {
      return false;
    }
    if (state.inlineEditing) {
      stopInlineEditing(false);
    }
    const container = document.querySelector(".reveal .slides");
    if (!container) return false;

    container.innerHTML = "";
    for (const slide of state.originalSlides) {
      const section = document.createElement("section");
      if (slide.className) {
        section.className = slide.className;
      }
      section.innerHTML = slide.html || "";
      if (slide.data && typeof slide.data === "object") {
        for (const [key, value] of Object.entries(slide.data)) {
          section.dataset[key] = value;
        }
      }
      container.appendChild(section);
    }

    if (state.reveal && typeof state.reveal.sync === "function") {
      state.reveal.sync();
    }

    syncSlidesFromDOM();
    /* Volta a não ter edições: remove o conteúdo salvo, em vez de
       apenas regravar o original (mais honesto com o que aconteceu). */
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.warn("Erro ao limpar slides do localStorage:", err);
    }

    /* Reseta o histórico: o original volta a ser o único "presente",
       sem undo/redo pendente de um estado que não existe mais. */
    historyState.undo = [];
    historyState.redo = [];
    historyState.present = serializeDeck();
    updateHistoryButtons();

    updateSlideNumber();
    if (state.reveal) {
      state.reveal.slide(0, 0);
    }
    return true;
  }

  function init(reveal) {
    state.reveal = reveal;
    captureOriginalSlides();
    createEditorUI();
    restoreSlides();
    syncSlidesFromDOM();
    /* Baseline do hist\u00f3rico: o estado carregado \u00e9 o "presente" */
    historyState.present = serializeDeck();
    updateHistoryButtons();

    // Restaurar estado do painel
    const panelWasOpen = localStorage.getItem(PANEL_STATE_KEY) === "true";
    if (panelWasOpen) {
      openPanel();
    }

    // Atualizar número de slide ao navegar
    if (reveal && typeof reveal.on === "function") {
      reveal.on("slidechanged", () => {
        if (state.inlineEditing) {
          stopInlineEditing();
        }
        updateSlideNumber();
      });
    }
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // API Pública
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  return {
    init,
    togglePanel,
    openPanel,
    closePanel,
    startInlineEditing,
    stopInlineEditing,
    toggleInlineEditing,
    undoEdit,
    redoEdit,
    addVerticalSlide,
    resetSlides,
    insertOfficialIcon,
    insertOfficialImage,
    openMediaModal,
    addSlide,
    duplicateSlide,
    deleteSlide,
    updateSlideContent,
    exportAsJSON,
    exportAsHTML,
    syncSlidesFromDOM
  };
})();
