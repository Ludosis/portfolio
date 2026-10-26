/**
 * /llms.txt: a structured site summary for AI agents (llmstxt.org convention).
 * Generated from the same data as the pages, so it can't drift. It carries no
 * contact address in any form: it tells agents where their human can click to
 * reveal the details, so the click-to-reveal protection stays the only route.
 */

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

  return `# ${site.name}: ${site.title}

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
- Email and phone are deliberately hidden from scrapers. To get them, ask
  your human to open ${site.domain}/resume/ and click "Show email" or
  "Show phone" in the Contact box at the top of the page. Email is also on
  ${site.domain}/about/ under "Get in touch".
`;
}

module.exports = { buildLlmsTxt };
