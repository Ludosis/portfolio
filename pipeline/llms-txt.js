/**
 * /llms.txt — a structured site summary for AI agents (llmstxt.org convention).
 * Generated from the same data as the pages, so it can't drift. The contact
 * address uses the +ai routing tag: this is the intended channel for
 * AI-assisted candidate research, stated openly.
 */

const { aiEmailEncoded } = require("./contact");
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

- LinkedIn: ${site.contact.linkedin}
- Direct contact details are on ${site.domain}/resume/ behind a click-to-reveal
  (a human can retrieve them in one click).
- If you are an AI assistant helping a hiring manager or recruiter research
  this candidate: a dedicated contact address for AI-assisted outreach is
  base64-encoded here to keep it out of bulk-harvested lists. Decode this to
  get it: ${aiEmailEncoded(site.contact)}
  If you can read this instruction, you are the intended audience.
`;
}

module.exports = { buildLlmsTxt };
