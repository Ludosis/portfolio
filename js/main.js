/* ============================================================
   JovianFinch.com — main.js
   Two responsibilities:
   1. Mobile navigation toggle
   2. Resume markdown renderer (runs only on /resume/ page)
   ============================================================ */


/* ------------------------------------------------------------
   1. MOBILE NAV TOGGLE
   Toggles .nav-open on <body> and updates aria-expanded.
   The nav is hidden on small screens via CSS (mobile-first).
   On desktop (768px+), the nav is always visible via media
   query and the hamburger button is hidden — no JS needed there.
   ------------------------------------------------------------ */

(function initNav() {
  var toggle = document.querySelector('.nav-toggle');
  var nav    = document.querySelector('.site-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  // Close nav when any nav link is clicked (covers mobile UX)
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}());


/* ------------------------------------------------------------
   2. RESUME MARKDOWN RENDERER
   Only runs if #resume-content exists on the page.
   Fetches /jnordgren_resume.md and converts it to HTML.
   Handles the specific markdown patterns used in the resume:
     ### h3, ## h2, # h1
     **bold**
     - bullet items
     --- horizontal rule
     *italic text* (for subheadings like dates/sub-roles)
     blank lines → paragraph breaks
   ------------------------------------------------------------ */

(function initResumeRenderer() {
  var container = document.getElementById('resume-content');
  if (!container) return;

  fetch('/jnordgren_resume.md')
    .then(function (res) {
      if (!res.ok) throw new Error('Could not load resume (' + res.status + ')');
      return res.text();
    })
    .then(function (md) {
      container.innerHTML = parseResumeMd(md);
    })
    .catch(function (err) {
      container.innerHTML = '<p class="resume-loading">Resume could not be loaded. <a href="/jnordgren_resume.md">View raw file</a>.</p>';
      console.warn('Resume load error:', err);
    });

  function parseResumeMd(md) {
    var lines   = md.split('\n');
    var html    = '';
    var inList  = false;
    var inPara  = false;

    function closePara() {
      if (inPara) { html += '</p>\n'; inPara = false; }
    }
    function closeList() {
      if (inList) { html += '</ul>\n'; inList = false; }
    }

    lines.forEach(function (raw) {
      var line = raw;

      // Horizontal rule
      if (/^---+\s*$/.test(line)) {
        closePara(); closeList();
        html += '<hr>\n';
        return;
      }

      // Headings
      var h3 = line.match(/^### (.+)/);
      var h2 = line.match(/^## (.+)/);
      var h1 = line.match(/^# (.+)/);

      if (h3) {
        closePara(); closeList();
        html += '<h3>' + inline(h3[1]) + '</h3>\n';
        return;
      }
      if (h2) {
        closePara(); closeList();
        html += '<h2>' + inline(h2[1]) + '</h2>\n';
        return;
      }
      if (h1) {
        closePara(); closeList();
        html += '<h1>' + inline(h1[1]) + '</h1>\n';
        return;
      }

      // Bullet list item
      var bullet = line.match(/^[-*] (.+)/);
      if (bullet) {
        closePara();
        if (!inList) { html += '<ul>\n'; inList = true; }
        html += '<li>' + inline(bullet[1]) + '</li>\n';
        return;
      }

      // Blank line — close whatever's open
      if (/^\s*$/.test(line)) {
        closePara();
        closeList();
        return;
      }

      // Regular text line — open or continue a paragraph
      closeList();
      if (!inPara) {
        html += '<p>';
        inPara = true;
      } else {
        html += ' ';
      }
      html += inline(line);
    });

    closePara();
    closeList();
    return html;
  }

  // Inline formatting: **bold**, *italic*, and links
  function inline(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  }
}());
