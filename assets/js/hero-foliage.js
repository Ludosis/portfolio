// Home hero: a sketch of the Alien Age foliage generator, drawn top-down.
// Eight authored tileset layouts (arrangements of three trees and three rocks)
// are picked and rotated per hex tile while the generator steps through the
// tiles. Ground tint is seeded by world position, like the tile color shader,
// so it stays put between runs. Gameplay tiles keep their foliage off. The
// foliage clears and regenerates with a new seed on a timer or on click.
// Reduced motion: draws the finished layout at once and never auto-regenerates.
(function () {
  var canvas = document.getElementById("hero-foliage");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  if (!ctx) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var INK = "#211E18", PRUSSIAN = "#29506D", RED = "#A6402A", ROCK = "#EAE3D2";
  var SQ3 = Math.sqrt(3);
  var WORLD_SEED = 7; // island shape and gameplay tiles: the level, not the generator
  var STEP_MS = 14;   // per tile while generating
  var HOLD_MS = 7000; // finished layout stays up this long before regenerating

  // Asset types: 0-2 trees, 3-5 rocks. Entries are [type, x, y] in tile radii.
  var LAYOUTS = [
    [[0, -0.3, -0.2], [1, 0.3, 0.15], [3, -0.15, 0.42]],
    [[2, 0, 0], [4, 0.45, -0.2]],
    [[0, -0.35, 0.1], [0, 0.1, -0.4], [1, 0.32, 0.3], [5, -0.12, 0.45]],
    [[3, -0.3, -0.25], [5, 0.25, -0.1], [4, 0, 0.4]],
    [[1, 0, -0.15], [2, -0.4, 0.3], [3, 0.4, 0.35]],
    [[0, -0.4, -0.1], [0, 0, 0.35], [0, 0.4, -0.15], [5, 0.05, -0.45]],
    [[2, 0.2, 0.1], [4, -0.35, -0.25], [3, -0.3, 0.4]],
    [[1, -0.2, 0.1], [0, 0.35, -0.3], [5, 0.45, 0.35], [3, -0.45, -0.35]],
  ];

  // Deterministic hash of (seed, a, b) to [0, 1).
  function rand(seed, a, b) {
    var h = (seed * 374761393 + a * 668265263 + b * 2147483647) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  }

  var size, cols, rows, tiles, seed, placed, timer, raf;
  var hudSeed = document.querySelector("[data-hud=seed]");
  var hudSkip = document.querySelector("[data-hud=skipped]");

  function layout() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = canvas.clientWidth, h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    size = Math.max(13, Math.min(18, w / 56));
    cols = Math.ceil(w / (SQ3 * size)) + 1;
    rows = Math.ceil(h / (1.5 * size)) + 1;

    tiles = [];
    var skipped = 0;
    // Column-major order, so the generator visibly sweeps left to right.
    for (var c = 0; c < cols; c++) {
      for (var r = 0; r < rows; r++) {
        var x = c * SQ3 * size + (r & 1 ? SQ3 * size / 2 : 0);
        var y = r * 1.5 * size + size * 0.25;
        // Island mask from a few world-space sines.
        var land = Math.sin(c * 0.33 + 1.3) + Math.sin(r * 0.9 + c * 0.12 + 0.4) +
                   0.8 * Math.sin((c - r) * 0.21 + 2.1);
        if (land < -0.55) continue;
        var gameplay = rand(WORLD_SEED, c, r) < 0.07;
        if (gameplay) skipped++;
        tiles.push({ c: c, r: r, x: x, y: y, gameplay: gameplay, tint: rand(WORLD_SEED + 1, c, r) });
      }
    }
    if (hudSkip) hudSkip.textContent = "gameplay tiles skipped: " + skipped;
  }

  function hexPath(x, y, s) {
    ctx.beginPath();
    for (var i = 0; i < 6; i++) {
      var a = Math.PI / 3 * i + Math.PI / 6;
      var px = x + s * Math.cos(a), py = y + s * Math.sin(a);
      i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
    }
    ctx.closePath();
  }

  function poly(n, r, spin) {
    ctx.beginPath();
    for (var i = 0; i < n; i++) {
      var a = spin + Math.PI * 2 * i / n;
      i ? ctx.lineTo(r * Math.cos(a), r * Math.sin(a)) : ctx.moveTo(r * Math.cos(a), r * Math.sin(a));
    }
    ctx.closePath();
    ctx.fillStyle = ROCK; ctx.fill();
    ctx.strokeStyle = INK; ctx.stroke();
  }

  function circle(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke();
  }

  function asset(type, s) {
    ctx.lineWidth = 1;
    if (type < 3) ctx.strokeStyle = PRUSSIAN;
    if (type === 0) { circle(0, 0, 0.18 * s); ctx.fillStyle = PRUSSIAN; ctx.fillRect(-0.7, -0.7, 1.4, 1.4); }
    else if (type === 1) { circle(0, 0, 0.27 * s); circle(0, 0, 0.11 * s); }
    else if (type === 2) { for (var i = 0; i < 3; i++) { var a = Math.PI * 2 * i / 3; circle(0.14 * s * Math.cos(a), 0.14 * s * Math.sin(a), 0.13 * s); } }
    else if (type === 3) poly(3, 0.17 * s, -Math.PI / 2);
    else if (type === 4) poly(5, 0.19 * s, 0.3);
    else poly(4, 0.12 * s, 0);
  }

  function foliage(t) {
    var pick = Math.floor(rand(seed, t.c, t.r) * LAYOUTS.length);
    var turn = Math.floor(rand(seed + 101, t.c, t.r) * 6);
    var items = LAYOUTS[pick];
    ctx.save();
    ctx.translate(t.x, t.y);
    ctx.rotate(turn * Math.PI / 3);
    for (var i = 0; i < items.length; i++) {
      ctx.save();
      ctx.translate(items[i][1] * size, items[i][2] * size);
      asset(items[i][0], size);
      ctx.restore();
    }
    ctx.restore();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    var s = size * 0.94;
    for (var i = 0; i < tiles.length; i++) {
      var t = tiles[i];
      hexPath(t.x, t.y, s);
      ctx.fillStyle = "rgba(41, 80, 109, " + (0.03 + t.tint * 0.09).toFixed(3) + ")";
      ctx.fill();
      ctx.lineWidth = 1;
      if (t.gameplay) {
        ctx.setLineDash([3, 3]);
        ctx.strokeStyle = RED;
        ctx.stroke();
        ctx.setLineDash([]);
      } else {
        ctx.strokeStyle = "rgba(33, 30, 24, 0.22)";
        ctx.stroke();
        if (i < placed) foliage(t);
      }
    }
    // The tile the generator is working on.
    if (placed < tiles.length) {
      var cur = tiles[placed];
      hexPath(cur.x, cur.y, s);
      ctx.lineWidth = 2;
      ctx.strokeStyle = RED;
      ctx.stroke();
    }
  }

  function generate(newSeed) {
    clearTimeout(timer);
    cancelAnimationFrame(raf);
    seed = newSeed;
    if (hudSeed) hudSeed.textContent = "seed " + seed.toString(16).padStart(4, "0");
    if (reduced) { placed = tiles.length; draw(); return; }
    placed = 0;
    var start = performance.now();
    (function step(now) {
      // rAF timestamps can land slightly before start, hence the clamp at 0.
      placed = Math.max(0, Math.min(tiles.length, Math.floor((now - start) / STEP_MS)));
      draw();
      if (placed < tiles.length) raf = requestAnimationFrame(step);
      else timer = setTimeout(function () { generate(nextSeed()); }, HOLD_MS);
    })(start);
  }

  function nextSeed() { return Math.floor(Math.random() * 0xffff); }

  layout();
  generate(0x4a1e);

  var button = document.getElementById("hero-regenerate");
  if (button) button.addEventListener("click", function () { generate(nextSeed()); });

  var lastWidth = canvas.clientWidth;
  window.addEventListener("resize", function () {
    if (canvas.clientWidth === lastWidth) return;
    lastWidth = canvas.clientWidth;
    layout();
    if (placed > tiles.length) placed = tiles.length;
    draw();
  });
})();
