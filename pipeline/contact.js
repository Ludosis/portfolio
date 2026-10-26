/**
 * Contact protection.
 *
 * Email: assembled from site.yaml parts at build time and shipped only as an
 * XOR+base64 payload that assets/js/reveal.js decodes on click. No address
 * material appears in served HTML, and llms.txt only points agents to the
 * Show buttons. Plus-tagged addresses are never published in any form.
 *
 * Phone: read from CONTACT_PHONE (GitHub Actions secret in CI, .env locally;
 * both outside git). Encoded as XOR+base64 so the deployed page contains no
 * digit patterns for scrapers. This is obfuscation, not cryptography: the goal
 * is defeating pattern-matching harvesters, and the repo itself stays clean
 * because the number simply isn't in it. When the env var is absent the build
 * still succeeds and templates render an email-only fallback.
 */

const fs = require("fs");
const path = require("path");

function loadDotEnv() {
  const p = path.join(__dirname, "..", ".env");
  if (!fs.existsSync(p)) return;
  for (const line of fs.readFileSync(p, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2];
  }
}
loadDotEnv();

function email(contact, tag) {
  const suffix = tag ? `+${contact.tags[tag] ?? tag}` : "";
  return `${contact.emailUser}${suffix}@${contact.emailDomain}`;
}

/** payload format: base64(key byte + xor-ciphertext), decoded by assets/js/reveal.js */
function payload(value) {
  const key = 1 + Math.floor(Math.random() * 254);
  const bytes = [key];
  for (const ch of Buffer.from(value, "utf8")) bytes.push(ch ^ key);
  return Buffer.from(bytes).toString("base64");
}

function phonePayload() {
  const phone = process.env.CONTACT_PHONE;
  if (!phone) return null;
  return payload(phone);
}

module.exports = { email, payload, phonePayload };
