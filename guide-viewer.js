(() => {
  "use strict";

  const GUIDE_FILES = new Map([
    ["docs/EDITOR_GUIDE.md", "Guia do editor"],
    ["docs/TEMPLATES_GUIDE.md", "Guia de templates"],
    ["docs/PROJECT_STRUCTURE.md", "Estrutura do projeto"],
    ["README.md", "README do projeto"]
  ]);

  const params = new URLSearchParams(window.location.search);
  const file = params.get("file") || "docs/EDITOR_GUIDE.md";
  const title = document.getElementById("guide-title");
  const pathLabel = document.getElementById("guide-path");
  const status = document.getElementById("guide-status");
  const content = document.getElementById("guide-content");
  const source = document.getElementById("guide-source");
  const sourceCode = source.querySelector("code");
  const viewTab = document.getElementById("view-tab");
  const codeTab = document.getElementById("code-tab");
  const copyButton = document.getElementById("copy-code");
  const downloadButton = document.getElementById("download-code");
  let markdown = "";

  function setStatus(message, kind) {
    status.textContent = message || "";
    status.className = "guide-status" + (kind ? " guide-status--" + kind : "");
  }

  function setMode(mode) {
    const codeMode = mode === "code";
    content.hidden = codeMode;
    source.hidden = !codeMode;
    viewTab.className = "btn " + (codeMode ? "btn-ghost" : "btn-primary");
    codeTab.className = "btn " + (codeMode ? "btn-primary" : "btn-ghost");
    viewTab.setAttribute("aria-pressed", String(!codeMode));
    codeTab.setAttribute("aria-pressed", String(codeMode));
  }

  function downloadMarkdown() {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = file.split("/").pop() || "guia.md";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
    setStatus("Download iniciado.", "ok");
  }

  async function copyMarkdown() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(markdown);
      } else {
        setMode("code");
        setStatus("Selecione o código exibido e copie manualmente.", "error");
        return;
      }
      setStatus("Código copiado para a área de transferência.", "ok");
    } catch {
      setStatus("Não foi possível copiar automaticamente. Selecione o código e copie manualmente.", "error");
    }
  }

  function renderMarkdown(text) {
    const rendered = marked.parse(text, { gfm: true, breaks: false, headerIds: false, mangle: false });
    content.innerHTML = DOMPurify.sanitize(rendered, {
      USE_PROFILES: { html: true },
      FORBID_TAGS: ["style", "script", "iframe", "object", "embed"],
      FORBID_ATTR: ["style", "onerror", "onclick"]
    });
    content.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href");
      if (href && !/^(?:[a-z]+:|\/|#)/i.test(href)) {
        link.href = new URL(href, window.location.origin + "/" + file).href;
      }
      if (/^https?:/i.test(link.href)) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
    });
  }

  async function loadGuide() {
    if (!GUIDE_FILES.has(file)) {
      throw new Error("Este arquivo não está disponível como guia.");
    }
    title.textContent = GUIDE_FILES.get(file);
    pathLabel.textContent = file;
    document.title = GUIDE_FILES.get(file) + " — Copilot Knowledge Base";
    const response = await fetch(file, { headers: { Accept: "text/markdown,text/plain" } });
    if (!response.ok) throw new Error("Não foi possível carregar o guia (" + response.status + ").");
    markdown = await response.text();
    sourceCode.textContent = markdown;
    renderMarkdown(markdown);
    content.setAttribute("aria-busy", "false");
    setStatus("");
  }

  viewTab.addEventListener("click", () => setMode("view"));
  codeTab.addEventListener("click", () => setMode("code"));
  copyButton.addEventListener("click", copyMarkdown);
  downloadButton.addEventListener("click", downloadMarkdown);
  setMode("view");

  loadGuide().catch((error) => {
    title.textContent = "Guia indisponível";
    pathLabel.textContent = file;
    content.innerHTML = "<p>" + error.message + "</p>";
    content.setAttribute("aria-busy", "false");
    setStatus("Verifique o endereço e tente novamente.", "error");
    copyButton.disabled = true;
    downloadButton.disabled = true;
  });
})();
