/**
 * The skills page is never hand-written: every project declares its skills in
 * front matter against the taxonomy in content/_data/skills.yaml, and this
 * module inverts that mapping (project → skills becomes skill → projects).
 * Adding a skill entry to one project file updates the skills page, the
 * project's own tag list, and llms.txt in the same build.
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
        project: data.title,
        studio: data.studio,
        url: entry.anchor ? `${project.url}#${entry.anchor}` : project.url,
        highlight: entry.highlight || data.title,
        detail: entry.detail || "",
        order: data.order ?? 99,
      });
    }
  }

  // A typo'd skill id should fail the build, not silently drop content.
  if (unknown.length) {
    throw new Error(
      `Unknown skill id(s) in project front matter — add to skills.yaml or fix the typo:\n  ${unknown.join("\n  ")}`
    );
  }

  for (const section of byId.values()) {
    section.examples.sort((a, b) => a.order - b.order);
  }

  // Taxonomy order is display order; skip skills with no examples yet.
  return [...byId.values()].filter((s) => s.examples.length > 0);
}

module.exports = { buildSkillSections };
