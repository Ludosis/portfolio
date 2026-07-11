/**
 * Contact protection.
 *
 * Email: the real address is assembled from parts at build time (the plain
 * string never sits in the repo) and injected client-side by assets/js/reveal.js.
 * Tagged variants (+ai, +rec, +web) route bot-facing channels to the same inbox
 * so inbound mail identifies its own source.
 *
 * Phone: read from CONTACT_PHONE (GitHub Actions secret in CI, .env locally —
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

/** payload format: base64(key byte + xor-ciphertext) — decoded by assets/js/reveal.js */
function phonePayload() {
  const phone = process.env.CONTACT_PHONE;
  if (!phone) return null;
  const key = 1 + Math.floor(Math.random() * 254);
  const bytes = [key];
  for (const ch of Buffer.from(phone, "utf8")) bytes.push(ch ^ key);
  return Buffer.from(bytes).toString("base64");
}

module.exports = { email, phonePayload };
