// The resume's single source is jovian-nordgren-resume.md at the repo root.
const fs = require("fs");
const path = require("path");
const { parseResume } = require("../../pipeline/resume-markdown");

module.exports = () =>
  parseResume(fs.readFileSync(path.join(__dirname, "..", "..", "jovian-nordgren-resume.md"), "utf8"));
