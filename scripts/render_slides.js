#!/usr/bin/env node
/**
 * render_slides.js — HTML renderer for content.md slide blocks.
 *
 * Converts parsed slide blocks into HTML <section> elements
 * matching the anchored CSS component system.
 *
 * Usage:
 *   const { renderSlide, renderSlides } = require('./render_slides');
 *   const html = renderSlides(groupedBlocks);
 */

"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// Minimal Markdown → HTML converter (restricted subset)
// Allowed: paragraphs, lists (-), **bold**, [text](url), fenced code blocks
// ─────────────────────────────────────────────────────────────────────────────

function escHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderInline(text) {
  if (!text) return "";
  // Escape HTML first, then apply bold/link patterns on the escaped string.
  // Since **bold** and [text](url) only use chars not escaped by escHtml,
  // the patterns still match. The captured groups are already HTML-safe.
  const escaped = escHtml(text);
  return escaped
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, u) => `<a href="${u}">${t}</a>`);
}

/**
 * Render restricted Markdown body to HTML string.
 * Supports: paragraphs, lists (-), **bold**, [text](url), fenced code blocks.
 */
function renderMarkdown(md) {
  if (!md || !md.trim()) return "";

  const lines = md.split("\n");
  const output = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      const codeHtml = escHtml(codeLines.join("\n"));
      const langAttr = lang ? ` class="language-${escHtml(lang)}"` : "";
      output.push(`<pre class="code-wrapper"><code${langAttr}>${codeHtml}</code></pre>`);
      continue;
    }

    // List item (starts with `- `)
    if (line.match(/^- .+/)) {
      const listItems = [];
      while (i < lines.length && lines[i].match(/^- .+/)) {
        const content = lines[i].slice(2);
        // Check if "**title**: desc" pattern
        const m = content.match(/^\*\*(.+?)\*\*[:\s]+(.+)$/);
        if (m) {
          listItems.push(`<li><strong>${escHtml(m[1])}</strong>: ${renderInline(m[2])}</li>`);
        } else {
          listItems.push(`<li>${renderInline(content)}</li>`);
        }
        i++;
      }
      output.push(`<ul>\n${listItems.join("\n")}\n</ul>`);
      continue;
    }

    // Blank line
    if (!line.trim()) {
      i++;
      continue;
    }

    // Paragraph
    const paraLines = [];
    while (i < lines.length && lines[i].trim() && !lines[i].startsWith("- ") && !lines[i].startsWith("```")) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      output.push(`<p>${renderInline(paraLines.join(" "))}</p>`);
    }
  }

  return output.join("\n");
}

// ─────────────────────────────────────────────────────────────────────────────
// Common slide structure helpers
// ─────────────────────────────────────────────────────────────────────────────

const MARK = `<div class="slide-mark"><svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg><span>GitHub Copilot</span></div>`;

function slideHead(f) {
  const kicker = f.kicker ? `\n  <p class="kicker">${escHtml(f.kicker)}</p>` : "";
  const title = f.title ? `\n  <h2>${escHtml(f.title)}</h2>` : "";
  const subtitle = f.subtitle ? `\n  <p class="subtitle">${escHtml(f.subtitle)}</p>` : "";
  return `<div class="slide-head">${kicker}${title}${subtitle}\n</div>`;
}

function ocIcon(name) {
  return `<svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-${escHtml(name)}"></use></svg>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Template renderers
// ─────────────────────────────────────────────────────────────────────────────

const TEMPLATES = {

  cover(f) {
    const eyebrow = f.eyebrow ? `\n  <p class="cover-eyebrow">${escHtml(f.eyebrow)}</p>` : "";
    const title = f.title ? `\n  <h1>${escHtml(f.title)}</h1>` : "";
    const subtitle = f.subtitle ? `\n  <p class="cover-sub">${escHtml(f.subtitle)}</p>` : "";
    const meta = f.meta
      ? `\n  <div class="cover-meta">\n    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>\n    <span>${escHtml(f.meta)}</span>\n  </div>`
      : "";
    return `<section class="anchored-cover">${eyebrow}${title}${subtitle}${meta}\n</section>`;
  },

  header_body(f, body) {
    const bodyHtml = renderMarkdown(body);
    return `<section>
  ${slideHead(f)}
  <div class="slide-body">
${bodyHtml}
  </div>
  ${MARK}
</section>`;
  },

  cards_2col(f) {
    const cards = Array.isArray(f.cards) ? f.cards : [];
    const cardHtml = cards.map(c => {
      const icon = c.icon ? `\n    <span class="card-ic">${ocIcon(c.icon)}</span>` : "";
      const title = c.title ? `\n    <h3>${escHtml(c.title)}</h3>` : "";
      const desc = c.desc ? `\n    <p>${escHtml(c.desc)}</p>` : "";
      return `  <div class="anchored-card">${icon}${title}${desc}\n  </div>`;
    }).join("\n");
    return `<section>
  ${slideHead(f)}
  <div class="slide-body">
    <div class="anchored-grid">
${cardHtml}
    </div>
  </div>
  ${MARK}
</section>`;
  },

  list_numbered(f, body) {
    // Items can come from front-matter 'items' array or from Markdown body list
    let listHtml = "";
    if (Array.isArray(f.items)) {
      listHtml = f.items.map((it, idx) => {
        const num = String(idx + 1).padStart(2, "0");
        const title = it.title ? `<strong>${escHtml(it.title)}</strong>` : "";
        const desc = it.desc ? `<span>${escHtml(it.desc)}</span>` : "";
        return `    <div class="anchored-list-item">\n      <span class="num">${num}</span>\n      <span class="txt">${title}${desc}</span>\n    </div>`;
      }).join("\n");
    } else if (body) {
      // Parse Markdown list from body and generate numbered list
      const lines = body.split("\n").filter(l => l.startsWith("- "));
      listHtml = lines.map((l, idx) => {
        const num = String(idx + 1).padStart(2, "0");
        const content = l.slice(2);
        const m = content.match(/^\*\*(.+?)\*\*[:\s]+(.+)$/);
        let inner;
        if (m) {
          inner = `<strong>${escHtml(m[1])}</strong><span>${escHtml(m[2].trim())}</span>`;
        } else {
          inner = renderInline(content);
        }
        return `    <div class="anchored-list-item">\n      <span class="num">${num}</span>\n      <span class="txt">${inner}</span>\n    </div>`;
      }).join("\n");
    }
    return `<section>
  ${slideHead(f)}
  <div class="slide-body">
    <div class="anchored-list">
${listHtml}
    </div>
  </div>
  ${MARK}
</section>`;
  },

  icon_list(f, body) {
    let itemsHtml = "";
    if (Array.isArray(f.items)) {
      itemsHtml = f.items.map(it => {
        const icon = it.icon ? ocIcon(it.icon) : "";
        return `<li>${icon}<span>${escHtml(it.text || it.title || "")}</span></li>`;
      }).join("\n");
    } else if (body) {
      // Parse markdown list
      const lines = body.split("\n").filter(l => l.startsWith("- "));
      itemsHtml = lines.map(l => `<li>${renderInline(l.slice(2))}</li>`).join("\n");
    }
    return `<section>
  ${slideHead(f)}
  <div class="slide-body">
    <ul class="icon-list">
${itemsHtml}
    </ul>
  </div>
  ${MARK}
</section>`;
  },

  code_demo(f, body) {
    const lang = f.language || f.lang || "";
    const code = f.code || (body ? body.replace(/^```[^\n]*\n?/, "").replace(/```$/, "").trim() : "");
    const langAttr = lang ? ` class="language-${escHtml(lang)}"` : "";
    const codeHtml = escHtml(code);
    return `<section>
  ${slideHead(f)}
  <div class="slide-body">
    <pre class="code-wrapper"><code${langAttr}>${codeHtml}</code></pre>
  </div>
  ${MARK}
</section>`;
  },

  terminal_demo(f, body) {
    const code = f.code || (body || "").trim();
    return `<section>
  ${slideHead(f)}
  <div class="slide-body">
    <pre class="code-wrapper"><code class="language-bash">${escHtml(code)}</code></pre>
  </div>
  ${MARK}
</section>`;
  },

  comparison(f, body) {
    const badLabel = f.bad_label || "Genérico";
    const goodLabel = f.good_label || "Específico";
    const badCode = f.bad_code || "";
    const goodCode = f.good_code || "";
    return `<section>
  ${slideHead(f)}
  <div class="slide-body">
    <div class="anchored-split">
      <div>
        <p class="split-label bad">${ocIcon("x")}${escHtml(badLabel)}</p>
        <pre class="code-wrapper"><code>${escHtml(badCode)}</code></pre>
      </div>
      <div>
        <p class="split-label good">${ocIcon("check")}${escHtml(goodLabel)}</p>
        <pre class="code-wrapper"><code>${escHtml(goodCode)}</code></pre>
      </div>
    </div>
  </div>
  ${MARK}
</section>`;
  },

  quote(f, body) {
    const quoteText = f.quote || body || "";
    const cite = f.cite || "";
    return `<section>
  ${slideHead(f)}
  <div class="slide-body">
    <p class="anchored-quote">${escHtml(quoteText)}</p>
    ${cite ? `<p class="anchored-quote-cite">${escHtml(cite)}</p>` : ""}
  </div>
  ${MARK}
</section>`;
  },

  faq(f, body) {
    const items = Array.isArray(f.items) ? f.items : [];
    const itemsHtml = items.map(it => `    <div class="faq-item">
      <p class="faq-q">${escHtml(it.question || it.q || "")}</p>
      <p class="faq-a">${escHtml(it.answer || it.a || "")}</p>
    </div>`).join("\n");
    return `<section>
  ${slideHead(f)}
  <div class="slide-body">
    <div class="anchored-faq">
${itemsHtml}
    </div>
  </div>
  ${MARK}
</section>`;
  },

  figure(f, body) {
    const imgSrc = f.image || f.image_url || "";
    const imgAlt = f.image_alt || f.alt || "";
    const imgHtml = imgSrc
      ? `<img src="${escHtml(imgSrc)}" alt="${escHtml(imgAlt)}" loading="lazy" />`
      : "";

    // figure-text can be icon_list items or body
    let figTextHtml = "";
    if (Array.isArray(f.items)) {
      const listItems = f.items.map(it => {
        const icon = it.icon ? ocIcon(it.icon) : "";
        return `<li>${icon}<span>${escHtml(it.text || it.title || "")}</span></li>`;
      }).join("\n");
      figTextHtml = `<ul class="icon-list">\n${listItems}\n</ul>`;
    } else if (body) {
      figTextHtml = renderMarkdown(body);
    }

    return `<section>
  ${slideHead(f)}
  <div class="slide-body">
    <div class="anchored-figure">
      ${imgHtml}
      <div class="figure-text">
        ${figTextHtml}
      </div>
    </div>
  </div>
  ${MARK}
</section>`;
  },

  architecture(f, body) {
    const bodyHtml = renderMarkdown(body);
    return `<section>
  ${slideHead(f)}
  <div class="slide-body">
${bodyHtml}
  </div>
  ${MARK}
</section>`;
  },

  stats(f) {
    const stats = Array.isArray(f.stats) ? f.stats : [];
    const statsHtml = stats.map(s =>
      `    <div class="stat-item">
      <span class="stat-value">${escHtml(String(s.value || ""))}</span>
      <span class="stat-label">${escHtml(s.label || "")}</span>
    </div>`
    ).join("\n");
    return `<section>
  ${slideHead(f)}
  <div class="slide-body">
    <div class="anchored-stats">
${statsHtml}
    </div>
  </div>
  ${MARK}
</section>`;
  },

  timeline(f) {
    const items = Array.isArray(f.items) ? f.items : [];
    const itemsHtml = items.map(it =>
      `    <div class="timeline-item">
      <span class="timeline-date">${escHtml(it.date || "")}</span>
      <span class="timeline-title">${escHtml(it.title || "")}</span>
      ${it.desc ? `<span class="timeline-desc">${escHtml(it.desc)}</span>` : ""}
    </div>`
    ).join("\n");
    return `<section>
  ${slideHead(f)}
  <div class="slide-body">
    <div class="anchored-timeline">
${itemsHtml}
    </div>
  </div>
  ${MARK}
</section>`;
  },

  divider(f) {
    const index = f.index || f.divider_index || "";
    const title = f.title || "";
    const note = f.note || f.divider_note || "";
    return `<section class="anchored-divider">
  ${index ? `<p class="divider-index">${escHtml(index)}</p>` : ""}
  <h2>${escHtml(title)}</h2>
  ${note ? `<p class="divider-note">${escHtml(note)}</p>` : ""}
</section>`;
  },

  closing(f, body) {
    const imgSrc = f.image || f.image_url || "";
    const imgAlt = f.image_alt || f.alt || "";
    const imgHtml = imgSrc
      ? `<img src="${escHtml(imgSrc)}" alt="${escHtml(imgAlt)}" loading="lazy" />`
      : "";
    const bodyHtml = renderMarkdown(body);
    return `<section>
  ${slideHead(f)}
  <div class="slide-body">
    <div class="anchored-figure">
      ${imgHtml}
      <div class="figure-text">
        ${bodyHtml}
      </div>
    </div>
  </div>
  ${MARK}
</section>`;
  },

  exercise(f, body) {
    const bodyHtml = renderMarkdown(body);
    return `<section>
  ${slideHead(f)}
  <div class="slide-body">
${bodyHtml}
  </div>
  ${MARK}
</section>`;
  },

  resources(f, body) {
    const bodyHtml = renderMarkdown(body);
    return `<section>
  ${slideHead(f)}
  <div class="slide-body">
${bodyHtml}
  </div>
  ${MARK}
</section>`;
  },

  raw(f, body) {
    // body is literal HTML (escape hatch)
    return body || "";
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Public API
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Render a single slide block to HTML.
 */
function renderSlide(block) {
  const renderer = TEMPLATES[block.template];
  if (!renderer) {
    throw new Error(`Template desconhecido: ${block.template}`);
  }
  return renderer(block.fields, block.body);
}

/**
 * Render grouped blocks (output of groupByStack) to HTML string.
 */
function renderSlides(groups) {
  const parts = [];
  for (const g of groups) {
    if (g.type === "slide") {
      parts.push(renderSlide(g.block));
    } else if (g.type === "stack") {
      const inner = g.blocks.map(b => renderSlide(b)).join("\n\n  ");
      parts.push(`<section class="stack">\n  ${inner}\n</section>`);
    }
  }
  return parts.join("\n\n");
}

module.exports = { renderSlide, renderSlides, renderMarkdown, escHtml };
