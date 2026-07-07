const yaml = require("js-yaml");
const { buildSkillSections } = require("./pipeline/skills-inversion");
const figures = require("./pipeline/figures");
const { personJsonLd } = require("./pipeline/json-ld");
const { buildLlmsTxt } = require("./pipeline/llms-txt");
const contact = require("./pipeline/contact");

module.exports = function (eleventyConfig) {
  // Legacy plain-HTML site + source material — content, not templates.
  // Removed at cutover (Phase 5); until then Eleventy must not process them.
  [
    "index.html",
    "about/**",
    "portfolio/**",
    "resume/**",
    "skills/**",
    "how-i-work/**",
    "css/**",
    "js/**",
    "_source/**",
    "README.md",
    "CLAUDE.md",
    "jovian-nordgren-resume.md",
  ].forEach((p) => eleventyConfig.ignores.add(p));

  eleventyConfig.addDataExtension("yaml,yml", (contents) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("CNAME");
  // Resume MD stays fetchable at the site root for external consumers.
  eleventyConfig.addPassthroughCopy("jovian-nordgren-resume.md");

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

  eleventyConfig.addFilter("email", (c, tag) => contact.email(c, tag));

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
