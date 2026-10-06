/**
 * Parses jovian-nordgren-resume.md (the hand-edited resume source) into the
 * data the web resume, print resume, and markdown output render from.
 *
 * Format (see EDITING.md for the human version):
 *   ### Role | Role suffix                  subtitle, right after the # name
 *   ## Profile                             one paragraph
 *   ## Experience
 *   ### Title | Company | Location         or "### Title | Location"
 *   **Month Year – Month Year**            long dates; short print dates derived
 *   *Project | Project*                    first italic line: project line
 *   *Sub-role line*                        optional second italic line
 *   Intro paragraph
 *   - Bullet                               "<!-- print: hide -->" keeps it off the print
 *   **Lead: Rest (dates)**                 optional sub-section, then its paragraph
 *   <!-- print: page 2 starts here -->     between jobs: where the printed sheet breaks
 *   ## Skills         **Label:** items
 *   ## Education      **Degree | Extra**, then the school line
 *
 * A "|" (spaces optional) inside display lines renders as " · ". Any structural surprise throws
 * with a line number, so a malformed edit fails the build instead of shipping.
 */

const MONTHS = {
  January: "Jan", February: "Feb", March: "Mar", April: "Apr", May: "May", June: "Jun",
  July: "Jul", August: "Aug", September: "Sep", October: "Oct", November: "Nov", December: "Dec",
};

const dot = (s) => s.split(/\s*\|\s*/).join(" · ");
// typed "-", "--", en dash, or em dash all become a spaced en dash
const normalizeRange = (s) => s.replace(/\s*(?:--|-|\u2013|\u2014)\s*/, " \u2013 ");
const shortDates = (s) => s.replace(/\b([A-Z][a-z]+)\b/g, (m) => MONTHS[m] || m);
const italic = (line) => line.match(/^\*([^*].*?)\*$/)?.[1];
const bold = (line) => line.match(/^\*\*(.+?)\*\*$/)?.[1];

function parseResume(source) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const fail = (i, msg) => {
    throw new Error(`jovian-nordgren-resume.md line ${i + 1}: ${msg}\n  > ${lines[i] ?? ""}`);
  };

  const out = { experience: [], skillsGrid: [], education: [] };
  let section = null;
  let job = null;
  let sheet = 1;
  let paragraph = [];
  let pendingSub = null;
  let pendingEdu = null;

  const flushParagraph = (i) => {
    if (!paragraph.length) return;
    const text = paragraph.join(" ").replace(/\s+/g, " ").trim();
    paragraph = [];
    if (section === "profile") out.profile = out.profile ? `${out.profile} ${text}` : text;
    else if (section === "experience") {
      if (!job) fail(i, "text before the first ### job heading");
      if (pendingSub) { pendingSub.text = text; job.subSections.push(pendingSub); pendingSub = null; }
      else if (job.bullets.length) fail(i, "paragraph after a job's bullets (sub-sections need a **Lead: Rest (dates)** heading first)");
      else job.intro = job.intro ? `${job.intro} ${text}` : text;
    } else fail(i, "unexpected paragraph in this section");
  };

  lines.forEach((raw, i) => {
    const line = raw.trim();

    if (/^<!--\s*print:\s*page\s*2\b.*-->$/i.test(line)) {
      if (section !== "experience") fail(i, "the page-2 marker belongs between jobs in ## Experience");
      flushParagraph(i);
      sheet = 2;
      return;
    }
    if (/^<!--.*-->$/.test(line)) return;

    if (!line || line === "---") { flushParagraph(i); return; }

    if (line.startsWith("# ")) { out.name = line.slice(2).trim(); return; }

    if (line.startsWith("## ")) {
      flushParagraph(i);
      if (pendingSub) fail(i, "sub-section heading with no paragraph under it");
      const name = line.slice(3).trim().toLowerCase();
      if (!["profile", "experience", "skills", "education"].includes(name)) fail(i, `unknown section "${line.slice(3)}"`);
      section = name;
      job = null;
      return;
    }

    if (line.startsWith("### ")) {
      flushParagraph(i);
      const parts = line.slice(4).split(/\s*\|\s*/).map((p) => p.trim());
      if (!section) {
        [out.role, out.roleSuffix] = parts;
        return;
      }
      if (section !== "experience") fail(i, "### headings are only for jobs under ## Experience");
      if (parts.length < 2 || parts.length > 3) fail(i, "job heading needs 'Title | Company | Location' or 'Title | Location'");
      if (pendingSub) fail(i, "sub-section heading with no paragraph under it");
      job = parts.length === 3
        ? { title: parts[0], company: parts[1], location: parts[2] }
        : { title: parts[0], company: null, location: parts[1] };
      Object.assign(job, { page: sheet, bullets: [], subSections: [], _expectDates: true });
      out.experience.push(job);
      return;
    }

    if (!section) return; // contact line under the name: print uses site.yaml

    if (section === "experience") {
      if (!job) fail(i, "content before the first ### job heading");
      const b = bold(line);
      if (job._expectDates) {
        if (!b) fail(i, "the line after a job heading must be the dates in **bold**");
        job.datesLong = normalizeRange(b);
        job.dates = shortDates(job.datesLong);
        delete job._expectDates;
        return;
      }
      const it = italic(line);
      if (it && !job.intro && !job.bullets.length && !paragraph.length) {
        if (!job.projectLine) job.projectLine = dot(it);
        else if (!job.subRole) job.subRole = dot(it);
        else fail(i, "only two *italic* lines (project line, sub-role) are allowed under a job heading");
        return;
      }
      if (b) {
        flushParagraph(i);
        const m = b.match(/^(.+?):\s+(.+?)\s+\((.+)\)$/);
        if (!m) fail(i, "sub-section headings look like **Lead: Rest (dates)**");
        pendingSub = { headingLead: m[1], headingRest: m[2], dates: normalizeRange(m[3]) };
        return;
      }
      if (/^[-*]\s+/.test(line)) {
        flushParagraph(i);
        if (pendingSub) fail(i, "bullets can't follow a sub-section heading directly");
        const hide = /<!--\s*print:\s*hide\s*-->/i.test(line);
        const text = line.replace(/^[-*]\s+/, "").replace(/<!--.*?-->/g, "").trim();
        job.bullets.push(hide ? { text, print: false } : text);
        return;
      }
      if (job.bullets.length && /^\s+\S/.test(raw) && !pendingSub) {
        const last = job.bullets.length - 1;
        const b0 = job.bullets[last];
        if (typeof b0 === "string") job.bullets[last] = `${b0} ${line}`;
        else b0.text = `${b0.text} ${line}`;
        return;
      }
      paragraph.push(line);
      return;
    }

    if (section === "skills") {
      const m = line.match(/^\*\*(.+?):\*\*\s+(.+)$/);
      if (!m) fail(i, "skills lines look like **Label:** item, item, item");
      out.skillsGrid.push({ label: m[1], items: m[2] });
      return;
    }

    if (section === "education") {
      const b = bold(line);
      if (b) {
        const [degree, extra] = b.split(/\s*\|\s*/);
        pendingEdu = { degree, school: null, ...(extra ? { extra } : {}) };
        out.education.push(pendingEdu);
        return;
      }
      if (!pendingEdu || pendingEdu.school) fail(i, "education entries are a **Degree** line, then one school line");
      pendingEdu.school = dot(line);
      return;
    }

    paragraph.push(line);
  });
  flushParagraph(lines.length - 1);

  // Whole-document checks
  const where = (msg) => { throw new Error(`jovian-nordgren-resume.md: ${msg}`); };
  if (!out.role) where("missing the ### role line under the # name");
  if (!out.profile) where("missing the ## Profile paragraph");
  if (!out.experience.length) where("no jobs found under ## Experience");
  for (const j of out.experience) {
    if (j._expectDates) where(`job "${j.title}" has no **dates** line`);
  }
  if (!out.experience.some((j) => j.page === 2)) where("missing the <!-- print: page 2 starts here --> marker between jobs");

  const firstYear = out.experience.at(-1).datesLong.match(/\d{4}/)?.[0];
  out.tick = `${firstYear} – Present`;
  out.markdown = source.replace(/[ \t]*<!--[\s\S]*?-->[ \t]*\n?/g, "").replace(/\n{3,}/g, "\n\n");
  return out;
}

module.exports = { parseResume };
