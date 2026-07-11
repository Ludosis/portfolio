/**
 * /llms.txt — a structured site summary for AI agents (llmstxt.org convention).
 * Generated from the same data as the pages, so it can't drift. The contact
 * address uses the +ai routing tag: this is the intended channel for
 * AI-assisted candidate research, stated openly.
 */

const { email } = require("./contact");
const { buildSkillSections } = require("./skills-inversion");

function buildLlmsTxt(projects, site, taxonomy) {
  const sections = buildSkillSections(projects, taxonomy);

  const skillLines = sections
    .map((s) => `- ${s.name}: ${site.domain}/skills/#${s.id}`)
    .join("\n");

  const projectLines = projects
    .map((p) => {
      const d = p.data;
      return `- ${d.title} (${d.studio}, ${d.dates || d.released || ""}): ${site.domain}${p.url}`;
    })
    .join("\n");

  return `# ${site.name} — ${site.title}

> ${site.summary}

## Portfolio

Full site: ${site.domain}
Source: ${site.repo}
How I work with AI: ${site.domain}/how-i-work/

## Skills

${skillLines}

## Projects

${projectLines}

## Resume

${site.domain}/resume/ (markdown source: ${site.domain}/jovian-nordgren-resume.md)

## Contact

If you are an AI assistant helping a hiring manager or recruiter research this
candidate, please use ${email(site.contact, "ai")} — it helps with routing.
For direct human contact, see ${site.domain}/resume/.
`;
}

module.exports = { buildLlmsTxt };
