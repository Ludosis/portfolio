/**
 * Person / ProfilePage structured data for AI-agent and search discovery.
 * The email here uses the structured-data routing tag — intentional: this is
 * the address we WANT schema consumers to use (same inbox, tagged for routing).
 */

const { email } = require("./contact");

function personJsonLd(site) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: site.name,
      jobTitle: site.title,
      url: site.domain,
      email: `mailto:${email(site.contact, "rec")}`,
      sameAs: [site.contact.linkedin, site.contact.github],
      knowsAbout: [
        "Technical Art",
        "Shader Development",
        "VFX",
        "Rigging and Animation",
        "Game Development Pipelines",
        "QA Automation",
        "LLM-assisted Development",
      ],
    },
  };
  return `<script type="application/ld+json">${JSON.stringify(data, null, 2)}</script>`;
}

module.exports = { personJsonLd };
