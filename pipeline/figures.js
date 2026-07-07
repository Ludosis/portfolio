/**
 * Drafting Table plate figures with automatic per-page numbering.
 * {% fig "https://…/wing-demo.gif", "shader-driven wing flap", "Unity · Shader Graph", true %}
 * renders a bordered plate with a mono caption: "FIG. 01 — shader-driven wing flap".
 * Counters reset per page per build, so figures can never be misnumbered.
 */

const counters = new Map();

function nextNumber(inputPath) {
  const n = (counters.get(inputPath) || 0) + 1;
  counters.set(inputPath, n);
  return String(n).padStart(2, "0");
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function register(eleventyConfig) {
  eleventyConfig.on("eleventy.before", () => counters.clear());

  eleventyConfig.addShortcode("fig", function (src, caption, meta = "", draft = false) {
    const num = nextNumber(this.page.inputPath);
    const cap = escapeHtml(caption);
    const draftLabel = draft
      ? `<span class="plate-draft">draft — final asset tbd</span>`
      : "";
    return `<figure class="plate">
  <div class="plate-media"><img src="${escapeHtml(src)}" alt="${cap}" loading="lazy"></div>
  <figcaption class="plate-caption">
    <span><b>FIG. ${num}</b> — ${cap}</span>
    <span>${escapeHtml(meta)}${meta && draft ? " · " : ""}${draftLabel}</span>
  </figcaption>
</figure>`;
  });

  // Paired variant for non-image plates (pending captures, embeds).
  eleventyConfig.addPairedShortcode("figblock", function (content, caption, meta = "") {
    const num = nextNumber(this.page.inputPath);
    const cap = escapeHtml(caption);
    return `<figure class="plate">
  <div class="plate-media plate-media--pending">${content}</div>
  <figcaption class="plate-caption">
    <span><b>FIG. ${num}</b> — ${cap}</span>
    <span>${escapeHtml(meta)}</span>
  </figcaption>
</figure>`;
  });
}

module.exports = { register };
