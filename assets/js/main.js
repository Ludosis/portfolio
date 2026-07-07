// Mobile nav toggle — nav hidden by default on small screens (CSS),
// .nav-open on <body> shows it.
(function () {
  var toggle = document.querySelector(".nav-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", function () {
    var open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
