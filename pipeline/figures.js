/**
 * Drafting Table plate figures with automatic per-page numbering.
 * {% fig "https://…/wing-demo.gif", "shader-driven wing flap", "Unity · Shader Graph", true %}
 * renders a bordered plate with a mono caption: "FIG. 01: shader-driven wing flap".
 * Counters reset per page per build, so figures can never be misnumbered.
 * An .mp4 src renders as a muted looping video (the old GIFs, converted).
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

// <img>, or a muted looping <video> for .mp4. Used by figures and by the card and
// hero templates through the "media" filter.
function mediaTag(src, alt = "") {
  const s = escapeHtml(src);
  const a = escapeHtml(alt);
  if (/\.mp4$/i.test(src)) {
    return `<video src="${s}" aria-label="${a}" autoplay muted loop playsinline preload="metadata"></video>`;
  }
  return `<img src="${s}" alt="${a}" loading="lazy">`;
}

function register(eleventyConfig) {
  eleventyConfig.addFilter("media", (src, alt) => mediaTag(src, alt));

  eleventyConfig.on("eleventy.before", () => counters.clear());

  eleventyConfig.addShortcode("fig", function (src, caption, meta = "", draft = false) {
    const num = nextNumber(this.page.inputPath);
    const cap = escapeHtml(caption);
    return `<figure class="plate">
  <div class="plate-media">${mediaTag(src, caption)}</div>
  <figcaption class="plate-caption">
    <span><b>FIG. ${num}</b>: ${cap}</span>
    <span>${escapeHtml(meta)}</span>
  </figcaption>
</figure>`;
  });

  // Paired variant for non-image plates (embeds).
  eleventyConfig.addPairedShortcode("figblock", function (content, caption, meta = "") {
    const num = nextNumber(this.page.inputPath);
    const cap = escapeHtml(caption);
    return `<figure class="plate">
  <div class="plate-media plate-media--pending">${content}</div>
  <figcaption class="plate-caption">
    <span><b>FIG. ${num}</b>: ${cap}</span>
    <span>${escapeHtml(meta)}</span>
  </figcaption>
</figure>`;
  });
}

module.exports = { register };
