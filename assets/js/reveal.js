// Contact reveal.
// Email: assembled client-side from data attributes (never a plain string in
// the HTML source), injected on load — invisible to non-JS scrapers, zero
// friction for humans.
// Phone: XOR+base64 payload injected at build from a secret held outside the
// repo; decoded only on click. Format: base64(keyByte + cipherBytes).
(function () {
  document.querySelectorAll("[data-eu]").forEach(function (el) {
    var addr = el.getAttribute("data-eu") + "@" + el.getAttribute("data-ed");
    var a = document.createElement("a");
    a.href = "mailto:" + addr;
    a.textContent = addr;
    el.replaceWith(a);
  });

  document.querySelectorAll("[data-ph]").forEach(function (el) {
    var btn = el.querySelector("button");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var bytes = atob(el.getAttribute("data-ph"));
      var key = bytes.charCodeAt(0);
      var phone = "";
      for (var i = 1; i < bytes.length; i++) {
        phone += String.fromCharCode(bytes.charCodeAt(i) ^ key);
      }
      var a = document.createElement("a");
      a.href = "tel:" + phone.replace(/[^+\d]/g, "");
      a.textContent = phone;
      el.replaceWith(a);
    });
  });
})();
