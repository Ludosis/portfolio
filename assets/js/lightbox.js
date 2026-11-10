// Click (or Enter) on a project figure's image or clip to see it full size, with
// its caption. Closes on click, Esc, or the close button. Plates inside links
// (cards) are left alone.
(function () {
  var media = document.querySelectorAll(".plate .plate-media > img, .plate .plate-media > video");
  if (!media.length || !window.HTMLDialogElement) return;

  var dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.innerHTML =
    '<button type="button" class="lightbox-close mono" aria-label="Close">close &times;</button>' +
    '<div class="lightbox-media"></div><p class="lightbox-caption mono"></p>';
  document.body.appendChild(dialog);
  var slot = dialog.querySelector(".lightbox-media");
  var caption = dialog.querySelector(".lightbox-caption");

  function open(el) {
    var big = el.cloneNode(false);
    big.removeAttribute("loading");
    if (big.tagName === "VIDEO") { big.autoplay = true; big.muted = true; big.loop = true; big.playsInline = true; }
    slot.replaceChildren(big);
    var cap = el.closest(".plate").querySelector(".plate-caption span");
    caption.textContent = cap ? cap.textContent : "";
    dialog.showModal();
    if (big.tagName === "VIDEO") big.play().catch(function () {});
  }

  media.forEach(function (el) {
    if (el.closest("a")) return;
    var label = el.getAttribute("alt") || el.getAttribute("aria-label") || "figure";
    el.classList.add("zoomable");
    el.tabIndex = 0;
    el.setAttribute("role", "button");
    el.setAttribute("aria-label", "Enlarge: " + label);
    el.addEventListener("click", function () { open(el); });
    el.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(el); }
    });
  });

  // Any click closes it: on the image, the backdrop, or the button.
  dialog.addEventListener("click", function () { dialog.close(); });
  dialog.addEventListener("close", function () { slot.replaceChildren(); });
})();
