/**
 * Person / ProfilePage structured data for AI-agent and search discovery.
 * Deliberately NO email field: any plaintext plus-tagged address leaks the
 * base address via tag-stripping. Machine contact goes through llms.txt's
 * comprehension-gated channel; sameAs links carry identity discovery.
 */

function personJsonLd(site) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: site.name,
      jobTitle: site.title,
      url: site.domain,
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
