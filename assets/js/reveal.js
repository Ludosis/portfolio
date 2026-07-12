// Contact reveal — email and phone both decode on click, never on load.
// Payloads are XOR+base64, injected at build from values that live outside
// the repo (phone) or are assembled from parts (email). The raw strings
// exist nowhere in the served HTML, so crawlers — including ones that
// execute JS — get nothing without simulating the click.
// Payload format: base64(keyByte + xorCipherBytes).
(function () {
  function decode(b64) {
    var bytes = atob(b64);
    var key = bytes.charCodeAt(0);
    var out = "";
    for (var i = 1; i < bytes.length; i++) {
      out += String.fromCharCode(bytes.charCodeAt(i) ^ key);
    }
    return out;
  }

  function wire(attr, hrefFor) {
    document.querySelectorAll("[" + attr + "]").forEach(function (el) {
      var btn = el.querySelector("button");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var value = decode(el.getAttribute(attr));
        var a = document.createElement("a");
        a.href = hrefFor(value);
        a.textContent = value;
        el.replaceWith(a);
      });
    });
  }

  wire("data-em", function (v) { return "mailto:" + v; });
  wire("data-ph", function (v) { return "tel:" + v.replace(/[^+\d]/g, ""); });
})();
