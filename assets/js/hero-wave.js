// Home hero: the wing-flap sine displacement, drawn live.
// Dashed ink line = the authored wave; solid prussian line = the animated
// instance; red-pencil dot = one sampled vertex. 2D canvas for now — the
// WebGL vertex-shader version lands in a later pass, same visual contract.
(function () {
  var canvas = document.getElementById("hero-wave");
  if (!canvas) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ctx, w, h;

  function setup() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
  }

  function wave(amp, freq, phase, step) {
    ctx.beginPath();
    for (var x = 0; x <= w; x += step) {
      var y =
        h / 2 +
        Math.sin((x / w) * Math.PI * 2 * freq + phase) *
          amp *
          Math.sin(Math.PI * (x / w));
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  function draw(t) {
    ctx.clearRect(0, 0, w, h);

    // baseline with measurement ticks
    ctx.strokeStyle = "rgba(41, 80, 109, 0.18)";
    ctx.lineWidth = 1;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();
    for (var x = 0; x <= w; x += 28) {
      ctx.beginPath();
      ctx.moveTo(x, h / 2 - 3);
      ctx.lineTo(x, h / 2 + 3);
      ctx.stroke();
    }

    // authored wave — dashed ink
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = "rgba(33, 30, 24, 0.5)";
    ctx.lineWidth = 1.2;
    wave(26, 2.5, 0, 4);

    // animated instance — prussian
    ctx.setLineDash([]);
    ctx.strokeStyle = "#29506D";
    ctx.lineWidth = 1.8;
    wave(26, 2.5, t, 4);

    // sampled vertex — red pencil
    ctx.fillStyle = "#A6402A";
    var mx = w * 0.72;
    var my =
      h / 2 +
      Math.sin((mx / w) * Math.PI * 2 * 2.5 + t) *
        26 *
        Math.sin(Math.PI * (mx / w));
    ctx.beginPath();
    ctx.arc(mx, my, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  setup();
  if (reduced) {
    draw(1.2);
  } else {
    var t = 0;
    (function loop() {
      t += 0.022;
      draw(t);
      requestAnimationFrame(loop);
    })();
  }
  window.addEventListener("resize", function () {
    setup();
    if (reduced) draw(1.2);
  });
})();
