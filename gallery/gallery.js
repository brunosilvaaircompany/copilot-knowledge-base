SlideLayouts.initTheme();

  /* ── Galeria data-driven ──────────────────────────────────────────
     Catálogo base (builtin) + overlay em localStorage: edições de
     nome/descrição/tags, duplicações e exclusões feitas na página.
     Regras de filtro: OU entre tags selecionadas, E com a busca. */
  (function () {
    const STORAGE_KEY = "deck-gallery:v1";

    // href de decks gerados pelo build.js deve apontar para o index.html (não o diretório)
    const BUILTIN_DECKS = [
      {
        id: "copilot-training",
        title: "Copilot Training",
        desc: "Deck de exemplo gerado pelo build.js, consumindo o CSS e o editor da pasta _shared/ — o ponto de partida para os decks do time.",
        href: "decks/copilot-training/index.html",
        hrefStandalone: "decks/copilot-training/slides.html",
        icon: "oc-workflow",
        tags: ["build", "shared", "exemplo", "editor"],
        accentTag: "build"
      },
      {
        id: "teste1",
        title: "Meu Treinamento",
        desc: "Deck gerado pelo build.js, consumindo o CSS e o editor da pasta _shared/.",
        href: "decks/teste1/index.html",
        icon: "oc-workflow",
        tags: ["build", "shared"],
        accentTag: "build"
      }
    ];

    const TAG_LABELS = {
      editor: "Editor integrado",
      standalone: "Standalone",
      offline: "Offline",
      "60min": "60 min",
      "hands-on": "Hands-on",
      exemplo: "Exemplo",
      build: "build.js",
      shared: "_shared/",
      tema: "Claro/escuro"
    };

    function loadRegistry() {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        const data = raw ? JSON.parse(raw) : null;
        if (data && typeof data === "object") {
          return { overrides: data.overrides || {}, custom: Array.isArray(data.custom) ? data.custom : [] };
        }
      } catch (e) { /* registro corrompido — recomeça */ }
      return { overrides: {}, custom: [] };
    }
    function saveRegistry() {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(registry));
      } catch (e) { /* sem storage — segue sem persistir */ }
      window.dispatchEvent(new CustomEvent("gallery:changed"));
    }
    let registry = loadRegistry();

    function mergedDecks() {
      const result = [];
      for (const deck of BUILTIN_DECKS) {
        const over = registry.overrides[deck.id] || {};
        if (over.deleted) continue;
        result.push(Object.assign({}, deck, over, { builtin: true }));
      }
      for (const deck of registry.custom) {
        result.push(Object.assign({ icon: "oc-copy", tags: [] }, deck, { builtin: false }));
      }
      return result;
    }

    const input = document.getElementById("filter");
    const tagbar = document.getElementById("tagbar");
    const empty = document.getElementById("empty");
    const grid = document.getElementById("decks");
    const createCard = document.getElementById("create-card");
    const active = new Set();

    function slugTag(text) {
      return text.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9_-]/g, "");
    }

    function renderDecks() {
      grid.querySelectorAll(".deck[data-id]").forEach((el) => el.remove());
      for (const deck of mergedDecks()) {
        const card = document.createElement("article");
        card.className = "deck";
        card.dataset.id = deck.id;
        card.dataset.title = (deck.title || "").toLowerCase();
        card.dataset.desc = (deck.desc || "").toLowerCase();

        const pills = (deck.tags || []).map((tag) => {
          const accent = deck.accentTag === tag ? " tag--accent" : "";
          const label = TAG_LABELS[tag] || tag;
          return '<span class="tag' + accent + '" data-tag="' + tag + '">' + label + "</span>";
        }).join("");

        const extra = deck.hrefStandalone
          ? '<span class="deck-extra">Também disponível em <a href="' + deck.hrefStandalone + '">versão standalone</a>.</span>'
          : "";
        const href = deck.builtin
          ? deck.href
          : "local-deck.html?deck=" + encodeURIComponent(deck.id);

        card.innerHTML =
          '<div class="deck-top">' +
            '<span class="deck-icon"><svg class="oc" viewBox="0 0 16 16"><use href="#' + (deck.icon || "oc-copy") + '"></use></svg></span>' +
            '<h2><a class="deck-link" href="' + href + '"></a></h2>' +
          "</div>" +
          "<p></p>" +
          '<div class="tags">' + pills + "</div>" +
          extra +
          '<div class="deck-actions">' +
            '<button type="button" class="act act-edit"><svg class="oc" viewBox="0 0 16 16" width="12" height="12"><use href="#oc-pencil"></use></svg> Editar</button>' +
            '<button type="button" class="act act-dup"><svg class="oc" viewBox="0 0 16 16" width="12" height="12"><use href="#oc-copy"></use></svg> Duplicar</button>' +
            '<button type="button" class="act act--danger act-del">Excluir</button>' +
          "</div>";

        card.querySelector(".deck-link").textContent = deck.title || "(sem nome)";
        card.querySelector("p").textContent = deck.desc || "";

        card.querySelector(".act-edit").addEventListener("click", () => openModal(deck));
        card.querySelector(".act-dup").addEventListener("click", () => duplicateDeck(deck));
        card.querySelector(".act-del").addEventListener("click", () => deleteDeck(deck));

        grid.insertBefore(card, createCard);
      }
      buildChips();
      applyFilters();
      updateRestore();
    }

    function buildChips() {
      tagbar.querySelectorAll(".chip, .chip-clear").forEach((el) => el.remove());
      const seen = [];
      grid.querySelectorAll(".deck .tag[data-tag]").forEach((pill) => {
        if (seen.indexOf(pill.dataset.tag) < 0) seen.push(pill.dataset.tag);
      });
      for (const tag of Array.from(active)) {
        if (seen.indexOf(tag) < 0) active.delete(tag);
      }
      for (const tag of seen) {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "chip";
        chip.dataset.tag = tag;
        chip.setAttribute("aria-pressed", active.has(tag) ? "true" : "false");
        chip.textContent = TAG_LABELS[tag] || tag;
        chip.addEventListener("click", () => {
          if (active.has(tag)) { active.delete(tag); chip.setAttribute("aria-pressed", "false"); }
          else { active.add(tag); chip.setAttribute("aria-pressed", "true"); }
          applyFilters();
        });
        tagbar.appendChild(chip);
      }
      const clear = document.createElement("button");
      clear.type = "button";
      clear.className = "chip-clear";
      clear.textContent = "Limpar filtros";
      clear.addEventListener("click", () => {
        active.clear();
        input.value = "";
        tagbar.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", "false"));
        applyFilters();
        input.focus();
      });
      tagbar.appendChild(clear);
    }

    function cardTagSet(card) {
      const tags = new Set();
      card.querySelectorAll(".tag[data-tag]").forEach((pill) => tags.add(pill.dataset.tag));
      return tags;
    }

    function applyFilters() {
      const q = input.value.trim().toLowerCase();
      const cards = Array.from(grid.querySelectorAll(".deck"));
      let visible = 0;
      for (const card of cards) {
        const haystack = (card.dataset.title || "") + " " + (card.dataset.desc || "") + " " + card.textContent.toLowerCase();
        const matchesQuery = !q || haystack.includes(q);
        let matchesTags = true;
        if (active.size > 0) {
          matchesTags = false;
          const tags = cardTagSet(card);
          for (const tag of active) {
            if (tags.has(tag)) { matchesTags = true; break; }
          }
        }
        const show = matchesQuery && matchesTags;
        card.style.display = show ? "" : "none";
        if (show) visible++;
      }
      empty.style.display = visible === 0 ? "block" : "none";
      const clear = tagbar.querySelector(".chip-clear");
      if (clear) clear.classList.toggle("show", active.size > 0 || input.value.trim().length > 0);
    }
    input.addEventListener("input", applyFilters);

    function duplicateDeck(deck) {
      const copy = {
        id: "custom-" + Date.now().toString(36),
        title: "Cópia de " + (deck.title || "deck"),
        desc: deck.desc || "",
        icon: deck.icon || "oc-copy",
        tags: (deck.tags || []).slice(),
        accentTag: deck.accentTag
      };
      registry.custom.push(copy);
      saveRegistry();
      renderDecks();
      openModal(Object.assign({}, copy, { builtin: false }));
    }

    function deleteDeck(deck) {
      const msg = deck.builtin
        ? 'Excluir "' + deck.title + '" da galeria?\n(É um deck padrão — dá para restaurar depois em "Restaurar decks padrão".)'
        : 'Excluir "' + deck.title + '" da galeria?';
      if (!window.confirm(msg)) return;
      if (deck.builtin) {
        registry.overrides[deck.id] = Object.assign({}, registry.overrides[deck.id], { deleted: true });
      } else {
        registry.custom = registry.custom.filter((d) => d.id !== deck.id);
      }
      saveRegistry();
      renderDecks();
    }

    const restore = document.createElement("button");
    restore.type = "button";
    restore.className = "restore";
    restore.textContent = "Restaurar decks padrão";
    restore.addEventListener("click", () => {
      for (const deck of BUILTIN_DECKS) {
        if (registry.overrides[deck.id]) delete registry.overrides[deck.id].deleted;
      }
      saveRegistry();
      renderDecks();
    });
    empty.insertAdjacentElement("afterend", restore);

    function updateRestore() {
      const hidden = BUILTIN_DECKS.some((d) => registry.overrides[d.id] && registry.overrides[d.id].deleted);
      restore.classList.toggle("show", hidden);
    }

    const modal = document.getElementById("deck-modal");
    const fTitle = document.getElementById("f-title");
    const fDesc = document.getElementById("f-desc");
    const fTags = document.getElementById("f-tags");
    const modalSaveBtn = document.getElementById("modal-save");
    let editing = null;
    let creating = false;
    let lastFocus = null;

    function openModal(deck, opts) {
      creating = !!(opts && opts.isNew);
      editing = deck;
      lastFocus = document.activeElement;
      document.getElementById("deck-modal-title").textContent = creating
        ? "Novo deck"
        : 'Editar "' + (deck.title || "deck") + '"';
      modalSaveBtn.textContent = creating ? "Criar" : "Salvar";
      fTitle.value = deck.title || "";
      fDesc.value = deck.desc || "";
      fTags.value = (deck.tags || []).join(", ");
      modal.hidden = false;
      fTitle.focus();
      fTitle.select();
    }

    function closeModal() {
      modal.hidden = true;
      editing = null;
      creating = false;
      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    }

    function saveModal() {
      if (!editing) return;
      const title = fTitle.value.trim();
      if (creating && !title) {
        window.alert("Informe o nome do deck.");
        return;
      }
      const patch = {
        title: title || editing.title,
        desc: fDesc.value.trim(),
        tags: fTags.value.split(",").map(slugTag).filter(Boolean)
      };
      if (creating) {
        const custom = Object.assign({
          id: "custom-" + Date.now().toString(36),
          icon: "oc-copy"
        }, patch);
        registry.custom.push(custom);
      } else if (editing.builtin) {
        registry.overrides[editing.id] = Object.assign({}, registry.overrides[editing.id], patch);
      } else {
        const target = registry.custom.find((d) => d.id === editing.id);
        if (target) Object.assign(target, patch);
      }
      saveRegistry();
      closeModal();
      renderDecks();
    }

    modal.querySelector(".modal-close").addEventListener("click", closeModal);
    document.getElementById("modal-cancel").addEventListener("click", closeModal);
    modalSaveBtn.addEventListener("click", saveModal);
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.hidden) closeModal();
    });

    const createCardBtn = document.getElementById("create-card-btn");
    if (createCardBtn) {
      createCardBtn.addEventListener("click", () => {
        openModal({ title: "", desc: "", tags: [] }, { isNew: true });
      });
    }

    renderDecks();
  })();

  /* ── Backup em pasta local ─────────────────────────────────────────
     Preferencial: File System Access API (Chrome/Edge, contexto seguro)
     — escolhe a pasta uma vez, o handle fica no IndexedDB e os saves
     seguintes (inclusive automáticos) são um clique ou nenhum.
     Fallback universal: download/upload de um JSON. */
  (function () {
    const BACKUP_KEY_PREFIXES = [
      "deck-gallery:v1",
      "slide-editor:content:",
      "slide-editor:panel-open:",
      "slide-templates:custom",
      "slide-layouts:theme"
    ];
    const FILE_NAME = "copilot-decks-backup.json";
    const hasFS = typeof window.showDirectoryPicker === "function";

    const btnSave = document.getElementById("bk-save");
    const btnRestore = document.getElementById("bk-restore");
    const btnDisconnect = document.getElementById("bk-disconnect");
    const fileInput = document.getElementById("bk-file");
    const status = document.getElementById("bk-status");

    let dirHandle = null;
    let saveTimer = null;

    function setStatus(text, ok) {
      status.textContent = text || "";
      status.classList.toggle("ok", !!ok);
    }
    function now() {
      const d = new Date();
      return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
    }

    function collectBackup() {
      const data = {};
      for (let index = 0; index < window.localStorage.length; index++) {
        const key = window.localStorage.key(index);
        if (!key || !BACKUP_KEY_PREFIXES.some((prefix) => key.startsWith(prefix))) continue;
        const value = window.localStorage.getItem(key);
        if (value !== null) data[key] = value;
      }
      return {
        format: "copilot-decks-backup",
        version: 1,
        savedAt: new Date().toISOString(),
        data: data
      };
    }

    function applyBackup(obj) {
      if (!obj || obj.format !== "copilot-decks-backup" || !obj.data || typeof obj.data !== "object") {
        setStatus("Arquivo inválido — esperado um backup gerado por esta página.");
        return false;
      }
      if (!window.confirm("Restaurar o backup substitui os dados atuais deste navegador (galeria, slides editados, templates e tema). Continuar?")) {
        return false;
      }
      const backupKeys = new Set(Object.keys(obj.data));
      for (let index = window.localStorage.length - 1; index >= 0; index--) {
        const key = window.localStorage.key(index);
        if (key && BACKUP_KEY_PREFIXES.some((prefix) => key.startsWith(prefix)) && !backupKeys.has(key)) {
          window.localStorage.removeItem(key);
        }
      }
      for (const [key, value] of Object.entries(obj.data)) {
        if (BACKUP_KEY_PREFIXES.some((prefix) => key.startsWith(prefix))) {
          window.localStorage.setItem(key, value);
        }
      }
      setStatus("Backup restaurado — recarregando…", true);
      try { window.location.reload(); } catch (e) { /* ambientes sem navegação (testes) */ }
      return true;
    }

    function handleDB() {
      return new Promise((resolve, reject) => {
        const req = window.indexedDB.open("copilot-decks-backup", 1);
        req.onupgradeneeded = () => req.result.createObjectStore("handles");
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    }
    async function storeHandle(handle) {
      try {
        const db = await handleDB();
        await new Promise((resolve, reject) => {
          const tx = db.transaction("handles", "readwrite");
          tx.objectStore("handles").put(handle, "dir");
          tx.oncomplete = resolve;
          tx.onerror = () => reject(tx.error);
        });
      } catch (e) { /* sem IndexedDB — a pasta vale só nesta sessão */ }
    }
    async function loadHandle() {
      try {
        const db = await handleDB();
        return await new Promise((resolve) => {
          const tx = db.transaction("handles", "readonly");
          const get = tx.objectStore("handles").get("dir");
          get.onsuccess = () => resolve(get.result || null);
          get.onerror = () => resolve(null);
        });
      } catch (e) { return null; }
    }
    async function dropHandle() {
      try {
        const db = await handleDB();
        await new Promise((resolve) => {
          const tx = db.transaction("handles", "readwrite");
          tx.objectStore("handles").delete("dir");
          tx.oncomplete = resolve;
          tx.onerror = resolve;
        });
      } catch (e) { /* ok */ }
    }

    async function ensurePermission(handle, ask) {
      if (!handle) return false;
      try {
        const opts = { mode: "readwrite" };
        if ((await handle.queryPermission(opts)) === "granted") return true;
        if (ask && (await handle.requestPermission(opts)) === "granted") return true;
      } catch (e) { /* handle inválido (pasta movida/apagada) */ }
      return false;
    }

    async function writeToDirectory(handle) {
      const fileHandle = await handle.getFileHandle(FILE_NAME, { create: true });
      const writable = await fileHandle.createWritable();
      await writable.write(JSON.stringify(collectBackup(), null, 2));
      await writable.close();
    }

    function updateDisconnect() {
      btnDisconnect.hidden = !dirHandle;
    }

    async function saveBackup() {
      if (hasFS) {
        try {
          if (!dirHandle) {
            dirHandle = await window.showDirectoryPicker({ mode: "readwrite" });
            await storeHandle(dirHandle);
          }
          if (!(await ensurePermission(dirHandle, true))) {
            setStatus("Permissão de escrita negada para a pasta.");
            return;
          }
          await writeToDirectory(dirHandle);
          setStatus('Backup salvo em "' + dirHandle.name + "/" + FILE_NAME + '" às ' + now() + ". Alterações da galeria serão salvas automaticamente.", true);
          updateDisconnect();
          return;
        } catch (e) {
          if (e && e.name === "AbortError") return;
        }
      }
      try {
        const blob = new Blob([JSON.stringify(collectBackup(), null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = FILE_NAME;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        setStatus("Backup baixado (" + FILE_NAME + ") às " + now() + ".", true);
      } catch (e) {
        setStatus("Não foi possível gerar o backup neste navegador.");
      }
    }

    window.addEventListener("gallery:changed", () => {
      if (!hasFS || !dirHandle) return;
      if (saveTimer) clearTimeout(saveTimer);
      saveTimer = setTimeout(async () => {
        if (await ensurePermission(dirHandle, false)) {
          try {
            await writeToDirectory(dirHandle);
            setStatus('Backup automático em "' + dirHandle.name + '" às ' + now() + ".", true);
          } catch (e) {
            setStatus("Falha no backup automático — clique em Salvar backup.");
          }
        } else {
          setStatus("Pasta conectada, mas sem permissão nesta sessão — clique em Salvar backup para reautorizar.");
        }
      }, 800);
    });

    async function restoreBackup() {
      if (hasFS && typeof window.showOpenFilePicker === "function") {
        try {
          const [fileHandle] = await window.showOpenFilePicker({
            types: [{ description: "Backup JSON", accept: { "application/json": [".json"] } }]
          });
          const file = await fileHandle.getFile();
          applyBackup(JSON.parse(await file.text()));
          return;
        } catch (e) {
          if (e && e.name === "AbortError") return;
        }
      }
      fileInput.click();
    }
    fileInput.addEventListener("change", () => {
      const file = fileInput.files && fileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          applyBackup(JSON.parse(String(reader.result)));
        } catch (e) {
          setStatus("Arquivo inválido — não é um JSON de backup.");
        }
        fileInput.value = "";
      };
      reader.readAsText(file);
    });

    btnDisconnect.addEventListener("click", async () => {
      dirHandle = null;
      await dropHandle();
      updateDisconnect();
      setStatus("Pasta desconectada — backups voltam a ser manuais (download).");
    });

    btnSave.addEventListener("click", saveBackup);
    btnRestore.addEventListener("click", restoreBackup);

    (async function initBackup() {
      if (!hasFS) {
        setStatus("Este navegador não suporta salvar direto em pasta — o backup será baixado como arquivo (Chrome/Edge suportam pasta).");
        return;
      }
      dirHandle = await loadHandle();
      updateDisconnect();
      if (dirHandle) {
        if (await ensurePermission(dirHandle, false)) {
          setStatus('Pasta "' + dirHandle.name + '" conectada — alterações da galeria são salvas automaticamente.', true);
        } else {
          setStatus('Pasta "' + dirHandle.name + '" lembrada — clique em Salvar backup para reautorizar o acesso.');
        }
      }
    })();
  })();
