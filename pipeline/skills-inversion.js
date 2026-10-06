/**
 * The skills page is built from data: every project declares its skills in
 * front matter against content/_data/skillsTaxonomy.yaml, and this module
 * inverts that mapping (project → skills becomes skill → projects). Entries can
 * carry the owner's own label, link, and position (label / href / rank, as
 * restored from the hand-written page); examples that aren't a project, like
 * the Claude Code entry, live in the taxonomy's extraExamples.
 */

function buildSkillSections(projects, taxonomy) {
  const byId = new Map();
  for (const skill of taxonomy) {
    byId.set(skill.id, { ...skill, examples: [] });
  }

  const unknown = [];
  for (const project of projects) {
    const data = project.data;
    for (const entry of data.skills || []) {
      const section = byId.get(entry.id);
      if (!section) {
        unknown.push(`${data.title}: ${entry.id}`);
        continue;
      }
      section.examples.push({
        label: entry.label || `${data.title} / ${entry.highlight || data.title}`,
        url: entry.href || (entry.anchor ? `${project.url}#${entry.anchor}` : project.url),
        detail: entry.detail || "",
        sort: entry.rank ?? 1000 + (data.order ?? 99),
      });
    }
  }

  // A typo'd skill id should fail the build, not silently drop content.
  if (unknown.length) {
    throw new Error(
      `Unknown skill id(s) in project front matter. Add them to skillsTaxonomy.yaml or fix the typo:\n  ${unknown.join("\n  ")}`
    );
  }

  for (const section of byId.values()) {
    for (const ex of section.extraExamples || []) {
      section.examples.push({ label: ex.label, url: ex.href, detail: ex.detail, sort: ex.rank ?? 2000 });
    }
    // Hand-set rank first (the owner's original order); unranked entries follow
    // in project order.
    section.examples.sort((a, b) => a.sort - b.sort);
  }

  // Taxonomy order is display order; skip skills with no examples yet.
  return [...byId.values()].filter((s) => s.examples.length > 0);
}

module.exports = { buildSkillSections };
