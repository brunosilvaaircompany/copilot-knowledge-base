#!/usr/bin/env node
/**
 * parse_content.js — Parser for declarative deck content.md
 *
 * Parses a content.md file into an array of slide block objects.
 * Each block has YAML front-matter + optional Markdown body.
 *
 * Format:
 *   ---
 *   slide_id: deck-name/slide-name
 *   template: cover
 *   title: Slide Title
 *   ---
 *   Optional Markdown body here.
 *
 * Blocks are delimited by `---` lines.
 * Usage:
 *   const { parseContentMd } = require('./parse_content');
 *   const blocks = parseContentMd(fs.readFileSync('content.md', 'utf-8'), 'decks/my-deck/content.md');
 */

"use strict";

const yaml = require("js-yaml");

const SLIDE_ID_RE = /^[a-z0-9][a-z0-9-]*\/[a-z0-9][a-z0-9-]*$/;

const KNOWN_TEMPLATES = new Set([
  "cover", "header_body", "cards_2col", "list_numbered", "icon_list",
  "code_demo", "terminal_demo", "comparison", "quote", "faq", "figure",
  "architecture", "stats", "timeline", "divider", "closing", "exercise",
  "resources", "raw"
]);

// Allowed inline Markdown patterns
const FORBIDDEN_MD_RE = /^#{1,6}\s|^\|.*\|.*\||<[a-zA-Z][^>]*>/m;

/**
 * Parse content.md text into an array of raw block objects.
 * @param {string} text - Full text of content.md
 * @returns {{frontmatter: object, body: string, rawYaml: string}[]}
 */
function parseRawBlocks(text) {
  // Normalize line endings
  const lines = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");

  const blocks = [];
  let state = "seeking"; // seeking | in_frontmatter | in_body
  let fmLines = [];
  let bodyLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (state === "seeking") {
      if (line.trim() === "---") {
        state = "in_frontmatter";
        fmLines = [];
        bodyLines = [];
      }
      // ignore blank lines before first block
    } else if (state === "in_frontmatter") {
      if (line.trim() === "---") {
        // End of front-matter; start body
        state = "in_body";
      } else {
        fmLines.push(line);
      }
    } else if (state === "in_body") {
      if (line.trim() === "---") {
        // End of current block, start new block
        blocks.push({ rawYaml: fmLines.join("\n"), body: bodyLines.join("\n").trim() });
        fmLines = [];
        bodyLines = [];
        state = "in_frontmatter";
      } else {
        bodyLines.push(line);
      }
    }
  }

  // Push last block
  if (state === "in_body" && fmLines.length > 0) {
    blocks.push({ rawYaml: fmLines.join("\n"), body: bodyLines.join("\n").trim() });
  } else if (state === "in_frontmatter" && fmLines.length > 0) {
    // Front-matter without closing ---
    throw new Error("Bloco com front-matter não fechado (falta '---' de fechamento).");
  }

  return blocks;
}

/**
 * Validate and parse a single slide block.
 * @param {{rawYaml: string, body: string}} raw
 * @param {Set<string>} seenIds - Tracks slide_ids seen so far (mutated)
 * @param {Map<string, string>} stackState - Maps stack_id to last slide_id (mutated)
 * @param {string} sourcePath - Path to content.md for error messages
 * @param {number} blockIndex
 * @returns {object} Validated slide block
 */
function validateBlock(raw, seenIds, stackState, sourcePath, blockIndex) {
  let fm;
  try {
    fm = yaml.load(raw.rawYaml) || {};
  } catch (e) {
    throw new Error(`Bloco ${blockIndex + 1} (${sourcePath}): YAML inválido — ${e.message}`);
  }

  if (typeof fm !== "object" || Array.isArray(fm)) {
    throw new Error(`Bloco ${blockIndex + 1} (${sourcePath}): front-matter deve ser um objeto YAML.`);
  }

  // Validate slide_id
  const slideId = fm.slide_id;
  if (!slideId || typeof slideId !== "string") {
    throw new Error(`Bloco ${blockIndex + 1} (${sourcePath}): 'slide_id' é obrigatório.`);
  }
  if (!SLIDE_ID_RE.test(slideId)) {
    throw new Error(
      `Bloco ${blockIndex + 1} (${sourcePath}): 'slide_id' inválido '${slideId}'. ` +
      `Deve ser '^[a-z0-9][a-z0-9-]*\\/[a-z0-9][a-z0-9-]*$'.`
    );
  }
  if (seenIds.has(slideId)) {
    throw new Error(
      `Bloco ${blockIndex + 1} (${sourcePath}): 'slide_id' duplicado '${slideId}'.`
    );
  }
  seenIds.add(slideId);

  // Validate template
  const template = fm.template;
  if (!template || typeof template !== "string") {
    throw new Error(`Bloco ${blockIndex + 1} (${sourcePath}): 'template' é obrigatório.`);
  }
  if (!KNOWN_TEMPLATES.has(template)) {
    throw new Error(
      `Bloco ${blockIndex + 1} (${sourcePath}): template desconhecido '${template}'. ` +
      `Templates válidos: ${[...KNOWN_TEMPLATES].join(", ")}.`
    );
  }

  // Validate source / source_headings / sources
  if (fm.source_headings !== undefined && fm.source === undefined) {
    throw new Error(
      `Bloco ${blockIndex + 1} (${sourcePath}): 'source_headings' exige 'source'.`
    );
  }
  // Forma aditiva: `sources` permite headings próprios por fonte. As duas
  // formas têm o mesmo significado, mas misturá-las tornaria ambíguo qual
  // heading vale para qual fonte.
  const normalizedSources = normalizeSources(fm, blockIndex, sourcePath);

  // Validate stack contiguity
  if (fm.stack !== undefined) {
    const stackId = fm.stack;
    if (typeof stackId !== "string") {
      throw new Error(`Bloco ${blockIndex + 1} (${sourcePath}): 'stack' deve ser string.`);
    }
    // Check contiguity: if this stack_id was used before, the previous user must be the last block
    // We track: stackState[stackId] = blockIndex of last block that used this stack
    if (stackState.has(stackId)) {
      const lastIdx = stackState.get(stackId);
      if (lastIdx !== blockIndex - 1) {
        throw new Error(
          `Bloco ${blockIndex + 1} (${sourcePath}): reutilização não contígua de stack '${stackId}'. ` +
          `Stack só pode ser usada em blocos consecutivos.`
        );
      }
    }
    stackState.set(stackId, blockIndex);
  }

  // Validate Markdown body (restricted mode, except for 'raw' template)
  if (template !== "raw" && raw.body) {
    if (FORBIDDEN_MD_RE.test(raw.body)) {
      throw new Error(
        `Bloco ${blockIndex + 1} (${sourcePath}): corpo Markdown contém elementos não permitidos ` +
        `(headings, tabelas ou HTML). Use template 'raw' para HTML literal.`
      );
    }
  }

  return {
    slide_id: slideId,
    template,
    stack: fm.stack || null,
    source: fm.source !== undefined
      ? (Array.isArray(fm.source) ? fm.source : [fm.source])
      : null,
    source_headings: fm.source_headings !== undefined
      ? (Array.isArray(fm.source_headings) ? fm.source_headings : [fm.source_headings])
      : null,
    sources: normalizedSources,
    fields: fm,
    body: raw.body,
  };
}

/**
 * Normaliza `source`/`source_headings` (forma 1) e `sources` (forma 2) em uma
 * única lista [{ path, headings }]. Headings por fonte só existem na forma 2.
 * @returns {{path: string, headings: string[]|null}[]|null}
 */
function normalizeSources(fm, blockIndex, sourcePath) {
  const where = `Bloco ${blockIndex + 1} (${sourcePath})`;

  if (fm.sources !== undefined) {
    if (fm.source !== undefined || fm.source_headings !== undefined) {
      throw new Error(
        `${where}: use 'sources' OU 'source'/'source_headings', não os dois.`
      );
    }
    if (!Array.isArray(fm.sources) || fm.sources.length === 0) {
      throw new Error(`${where}: 'sources' deve ser uma lista não vazia.`);
    }
    return fm.sources.map((item, i) => {
      if (typeof item === "string") {
        const path = item.trim();
        if (!path) throw new Error(`${where}: 'sources[${i}]' não pode ser string vazia.`);
        return { path, headings: null };
      }
      if (!item || typeof item !== "object" || typeof item.path !== "string" || !item.path.trim()) {
        throw new Error(
          `${where}: 'sources[${i}]' precisa de 'path' (string não vazia).`
        );
      }
      let headings = null;
      if (item.headings !== undefined) {
        headings = Array.isArray(item.headings) ? item.headings : [item.headings];
        if (headings.some(h => typeof h !== "string" || !h.trim())) {
          throw new Error(
            `${where}: 'sources[${i}].headings' deve conter apenas strings não vazias.`
          );
        }
      }
      return { path: item.path, headings };
    });
  }

  if (fm.source === undefined) return null;

  const rawPaths = Array.isArray(fm.source) ? fm.source : [fm.source];
  const paths = rawPaths.map((p, i) => {
    if (typeof p !== "string" || !p.trim()) {
      throw new Error(`${where}: 'source[${i}]' deve ser uma string não vazia.`);
    }
    return p.trim();
  });
  const headings = fm.source_headings === undefined
    ? null
    : (Array.isArray(fm.source_headings) ? fm.source_headings : [fm.source_headings]);
  return paths.map(p => ({ path: p, headings }));
}

/**
 * Parse and validate a content.md file.
 * @param {string} text - Full content of the file
 * @param {string} sourcePath - Path for error messages
 * @returns {object[]} Array of validated slide block objects
 */
function parseContentMd(text, sourcePath) {
  if (!text || !text.trim()) {
    throw new Error(`${sourcePath}: arquivo vazio ou sem blocos.`);
  }

  const rawBlocks = parseRawBlocks(text);
  if (rawBlocks.length === 0) {
    throw new Error(`${sourcePath}: nenhum bloco encontrado. Verifique o formato (blocos separados por ---).`);
  }

  const seenIds = new Set();
  const stackState = new Map(); // stack_id -> last block index using it

  return rawBlocks.map((raw, i) => validateBlock(raw, seenIds, stackState, sourcePath, i));
}

/**
 * Group contiguous blocks with the same stack into nested groups.
 * Returns an array of:
 *   - { type: 'slide', block } for non-stacked slides
 *   - { type: 'stack', stack_id, blocks: [...] } for stacked groups
 */
function groupByStack(blocks) {
  const result = [];
  let i = 0;

  while (i < blocks.length) {
    const b = blocks[i];
    if (!b.stack) {
      result.push({ type: "slide", block: b });
      i++;
    } else {
      // Collect all contiguous blocks with same stack
      const stackId = b.stack;
      const stackBlocks = [];
      while (i < blocks.length && blocks[i].stack === stackId) {
        stackBlocks.push(blocks[i]);
        i++;
      }
      result.push({ type: "stack", stack_id: stackId, blocks: stackBlocks });
    }
  }

  return result;
}

module.exports = { parseContentMd, groupByStack, KNOWN_TEMPLATES, SLIDE_ID_RE };
