const fs = require("fs");
const path = require("path");
const https = require("https");

const root = path.join(__dirname, "..");
const assets = [
  ["https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reset.css", "_shared/vendor/reveal.js/dist/reset.css"],
  ["https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.css", "_shared/vendor/reveal.js/dist/reveal.css"],
  ["https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.js", "_shared/vendor/reveal.js/dist/reveal.js"],
  ["https://cdn.jsdelivr.net/npm/reveal.js@5/plugin/highlight/highlight.js", "_shared/vendor/reveal.js/plugin/highlight/highlight.js"],
  ["https://cdn.jsdelivr.net/npm/reveal.js@5/plugin/notes/notes.js", "_shared/vendor/reveal.js/plugin/notes/notes.js"],
  ["https://cdn.jsdelivr.net/npm/@fontsource-variable/mona-sans/files/mona-sans-latin-wght-normal.woff2", "_shared/vendor/fonts/mona-sans/mona-sans-latin-wght-normal.woff2"],
  ["https://cdn.jsdelivr.net/npm/@fontsource-variable/hubot-sans/files/hubot-sans-latin-wght-normal.woff2", "_shared/vendor/fonts/hubot-sans/hubot-sans-latin-wght-normal.woff2"],
  ["https://cdn.jsdelivr.net/npm/@fontsource/monaspace-neon/files/monaspace-neon-latin-400-normal.woff2", "_shared/vendor/fonts/monaspace-neon/monaspace-neon-latin-400-normal.woff2"],
  ["https://cdn.jsdelivr.net/npm/@fontsource/monaspace-neon/files/monaspace-neon-latin-700-normal.woff2", "_shared/vendor/fonts/monaspace-neon/monaspace-neon-latin-700-normal.woff2"]
  , ["https://cdn.jsdelivr.net/npm/marked@15.0.7/marked.min.js", "_shared/vendor/marked/marked.min.js"]
  , ["https://cdn.jsdelivr.net/npm/dompurify@3.2.4/dist/purify.min.js", "_shared/vendor/dompurify/purify.min.js"]
];

function download(url, destination) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        response.resume();
        download(response.headers.location, destination).then(resolve, reject);
        return;
      }
      if (response.statusCode !== 200) {
        response.resume();
        reject(new Error(`${response.statusCode} ${url}`));
        return;
      }
      fs.mkdirSync(path.dirname(destination), { recursive: true });
      const output = fs.createWriteStream(destination);
      response.pipe(output);
      output.on("finish", () => output.close(resolve));
      output.on("error", reject);
    }).on("error", reject);
  });
}

(async () => {
  for (const [url, relativePath] of assets) {
    const destination = path.join(root, relativePath);
    process.stdout.write(`Baixando ${relativePath}\n`);
    await download(url, destination);
  }
  console.log("Assets locais atualizados.");
})().catch((error) => {
  console.error(`Falha ao vendorizar assets: ${error.message}`);
  process.exitCode = 1;
});