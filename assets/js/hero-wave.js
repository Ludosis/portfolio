// Home hero: the wing-flap displacement, running as an actual GPU vertex
// shader — the same math the Snuggles wing shader used (sine displacement
// with an envelope, phase as a parameter). Falls back to a 2D-canvas version
// when WebGL is unavailable; renders a single frame under reduced motion.
(function () {
  var canvas = document.getElementById("hero-wave");
  if (!canvas) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var AMP = 0.62; // in half-height clip units
  var FREQ = 2.5;
  var MARK_X = 0.72;

  function sizeCanvas() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
  }

  /* ---------------- WebGL path ---------------- */

  var VERT = [
    "attribute vec2 a_pos;",     // x in clip space, y = static offset (clip)
    "attribute float a_x01;",    // 0..1 along the wave, drives sine + dash
    "attribute float a_wave;",   // 1 = displace by sine, 0 = static geometry
    "uniform float u_phase;",
    "uniform float u_amp;",
    "varying float v_x01;",
    "void main() {",
    "  v_x01 = a_x01;",
    "  float env = sin(3.14159265 * a_x01);",
    "  float y = a_pos.y + a_wave * sin(a_x01 * 6.2831853 * " + FREQ.toFixed(1) + " + u_phase) * u_amp * env;",
    "  gl_Position = vec4(a_pos.x, y, 0.0, 1.0);",
    "  gl_PointSize = 7.0;",
    "}",
  ].join("\n");

  var FRAG = [
    "precision mediump float;",
    "uniform vec4 u_color;",
    "uniform float u_dash;",
    "uniform float u_point;",
    "varying float v_x01;",
    "void main() {",
    "  if (u_dash > 0.5 && fract(v_x01 * 48.0) > 0.55) discard;",
    "  if (u_point > 0.5 && distance(gl_PointCoord, vec2(0.5)) > 0.5) discard;",
    "  gl_FragColor = u_color;",
    "}",
  ].join("\n");

  function initWebGL() {
    var gl = canvas.getContext("webgl", { antialias: true, alpha: true });
    if (!gl) return null;

    function shader(type, src) {
      var s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) return null;
      return s;
    }
    var vs = shader(gl.VERTEX_SHADER, VERT);
    var fs = shader(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return null;
    var prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
    gl.useProgram(prog);

    var loc = {
      pos: gl.getAttribLocation(prog, "a_pos"),
      x01: gl.getAttribLocation(prog, "a_x01"),
      wave: gl.getAttribLocation(prog, "a_wave"),
      phase: gl.getUniformLocation(prog, "u_phase"),
      amp: gl.getUniformLocation(prog, "u_amp"),
      color: gl.getUniformLocation(prog, "u_color"),
      dash: gl.getUniformLocation(prog, "u_dash"),
      point: gl.getUniformLocation(prog, "u_point"),
    };

    // Geometry. Layout per vertex: [x_clip, y_offset, x01, wave]
    var N = 160;
    var verts = [];

    // wave ribbon: triangle strip, thin vertical thickness
    var half = 0.02;
    for (var i = 0; i <= N; i++) {
      var x01 = i / N;
      var x = x01 * 2 - 1;
      verts.push(x, +half, x01, 1);
      verts.push(x, -half, x01, 1);
    }
    var ribbonCount = (N + 1) * 2;

    // dashed reference line (drawn with u_amp same, u_phase 0, dash on)
    var dashStart = verts.length / 4;
    for (var j = 0; j <= N; j++) {
      var xr01 = j / N;
      verts.push(xr01 * 2 - 1, 0, xr01, 1);
    }

    // baseline + ticks (static)
    var baseStart = verts.length / 4;
    verts.push(-1, 0, 0, 0, 1, 0, 1, 0);
    var tickStart = verts.length / 4;
    var tickCount = 0;
    for (var t = 0; t <= 34; t++) {
      var tx = (t / 34) * 2 - 1;
      verts.push(tx, -0.045, 0.5, 0, tx, 0.045, 0.5, 0);
      tickCount += 2;
    }

    // sampled-vertex marker (red pencil dot riding the wave)
    var markStart = verts.length / 4;
    verts.push(MARK_X * 2 - 1, 0, MARK_X, 1);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(loc.pos);
    gl.vertexAttribPointer(loc.pos, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(loc.x01);
    gl.vertexAttribPointer(loc.x01, 1, gl.FLOAT, false, 16, 8);
    gl.enableVertexAttribArray(loc.wave);
    gl.vertexAttribPointer(loc.wave, 1, gl.FLOAT, false, 16, 12);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    var totalVerts = verts.length / 4;
    var hudBl = document.querySelector(".hud-bl");
    if (hudBl) hudBl.textContent = "verts " + totalVerts + " · draws 5 · webgl";

    function draw(phase) {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // baseline
      gl.uniform1f(loc.dash, 0);
      gl.uniform1f(loc.point, 0);
      gl.uniform1f(loc.amp, 0);
      gl.uniform1f(loc.phase, 0);
      gl.uniform4f(loc.color, 0.161, 0.314, 0.427, 0.18);
      gl.drawArrays(gl.LINES, baseStart, 2);
      // ticks
      gl.drawArrays(gl.LINES, tickStart, tickCount);

      // dashed authored wave — ink
      gl.uniform1f(loc.dash, 1);
      gl.uniform1f(loc.amp, AMP);
      gl.uniform4f(loc.color, 0.129, 0.118, 0.094, 0.5);
      gl.drawArrays(gl.LINE_STRIP, dashStart, N + 1);

      // animated instance — prussian ribbon (GPU-displaced)
      gl.uniform1f(loc.dash, 0);
      gl.uniform1f(loc.phase, phase);
      gl.uniform4f(loc.color, 0.161, 0.314, 0.427, 1.0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, ribbonCount);

      // sampled vertex — red pencil
      gl.uniform1f(loc.point, 1);
      gl.uniform4f(loc.color, 0.651, 0.251, 0.165, 1.0);
      gl.drawArrays(gl.POINTS, markStart, 1);
      gl.uniform1f(loc.point, 0);
    }

    return draw;
  }

  /* ---------------- 2D canvas fallback ---------------- */

  function init2D() {
    var ctx = canvas.getContext("2d");
    if (!ctx) return null;

    function draw(phase) {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      var w = canvas.clientWidth, h = canvas.clientHeight;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      var amp = h * 0.31;

      function wave(p, step) {
        ctx.beginPath();
        for (var x = 0; x <= w; x += step) {
          var y = h / 2 + Math.sin((x / w) * Math.PI * 2 * FREQ + p) * amp * Math.sin(Math.PI * (x / w));
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(41, 80, 109, 0.18)";
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      ctx.beginPath(); ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2); ctx.stroke();
      for (var x = 0; x <= w; x += 28) {
        ctx.beginPath(); ctx.moveTo(x, h / 2 - 3); ctx.lineTo(x, h / 2 + 3); ctx.stroke();
      }
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = "rgba(33, 30, 24, 0.5)";
      ctx.lineWidth = 1.2;
      wave(0, 4);
      ctx.setLineDash([]);
      ctx.strokeStyle = "#29506D";
      ctx.lineWidth = 1.8;
      wave(phase, 4);
      ctx.fillStyle = "#A6402A";
      var mx = w * MARK_X;
      var my = h / 2 + Math.sin(MARK_X * Math.PI * 2 * FREQ + phase) * amp * Math.sin(Math.PI * MARK_X);
      ctx.beginPath(); ctx.arc(mx, my, 3, 0, Math.PI * 2); ctx.fill();
    }
    return draw;
  }

  /* ---------------- run ---------------- */

  sizeCanvas();
  var draw = initWebGL() || init2D();
  if (!draw) return;

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
    sizeCanvas();
    if (reduced) draw(1.2);
  });
})();
