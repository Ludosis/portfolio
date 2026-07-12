const yaml = require("js-yaml");
const { buildSkillSections } = require("./pipeline/skills-inversion");
const figures = require("./pipeline/figures");
const { personJsonLd } = require("./pipeline/json-ld");
const { buildLlmsTxt } = require("./pipeline/llms-txt");
const contact = require("./pipeline/contact");

module.exports = function (eleventyConfig) {
  // Source material and repo docs — content, not templates.
  // (resume/Resume.html IS processed — it's the print resume template.)
  [
    "_source/**",
    "README.md",
    "CLAUDE.md",
    "EDITING.md",
    "jovian-nordgren-resume.md",
  ].forEach((p) => eleventyConfig.ignores.add(p));

  eleventyConfig.addDataExtension("yaml,yml", (contents) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("CNAME");
  // Resume MD stays fetchable at the site root for external consumers.
  eleventyConfig.addPassthroughCopy("jovian-nordgren-resume.md");

  // Resume page renders the MD at build time — no client-side fetch.
  eleventyConfig.addGlobalData("resumeHtml", () => {
    const md = require("markdown-it")({ html: true });
    const src = require("fs").readFileSync("jovian-nordgren-resume.md", "utf8");
    return md.render(src);
  });

  figures.register(eleventyConfig);

  eleventyConfig.addCollection("projects", (api) =>
    api
      .getFilteredByTag("project")
      .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
  );

  // Skills page is generated: project front matter is the single source of truth.
  eleventyConfig.addFilter("invertSkills", (projects, taxonomy) =>
    buildSkillSections(projects, taxonomy)
  );

  // Unique taxonomy names for a project's declared skills (hero tag list).
  eleventyConfig.addFilter("skillNames", (entries, taxonomy) => {
    const names = (entries || [])
      .map((e) => taxonomy.find((t) => t.id === e.id)?.name)
      .filter(Boolean);
    return [...new Set(names)];
  });

  eleventyConfig.addFilter("personJsonLd", personJsonLd);
  eleventyConfig.addFilter("llmsTxt", buildLlmsTxt);

  // Click-to-reveal payload for the email — the address never appears in
  // served HTML in any greppable form; reveal.js decodes on click.
  eleventyConfig.addFilter("emailPayload", (c) => contact.payload(contact.email(c)));

  eleventyConfig.addFilter("pad2", (n) => String(n).padStart(2, "0"));

  // Phone number: injected from CONTACT_PHONE (Actions secret / local .env),
  // never present in the repo. Null when unset — templates degrade gracefully.
  eleventyConfig.addGlobalData("phonePayload", () => contact.phonePayload());

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "content/_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
