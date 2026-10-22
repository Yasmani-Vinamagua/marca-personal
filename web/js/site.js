/* Tema, scrollspy, cover flow, filtros, entradas y formulario. Sin dependencias. */
(function () {
  var root = document.documentElement;
  root.classList.add("js");
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  // La refracción de bordes (backdrop-filter con filtro SVG) sólo existe en Chromium
  var uad = navigator.userAgentData;
  if (uad && uad.brands && uad.brands.some(function (b) { return /Chromium/.test(b.brand); })) root.classList.add("lg-refract");
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Tema: la elección guardada; si no hay, la del sistema.
  var saved = store.get("yv-theme");
  var system = window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  root.setAttribute("data-theme", saved || system);

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initScrollspy();
    initFlow();
    initFilters();
    initTabs();
    initReveal();
    initForm();
  });

  function initTheme() {
    var btn = document.querySelector(".theme-btn");
    if (!btn) return;
    function paint() {
      var dark = root.getAttribute("data-theme") === "dark";
      btn.setAttribute("aria-label", dark ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
    }
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store.set("yv-theme", next);
      paint();
    });
    paint();
  }

  /* El enlace de la sección visible toma el color de acento */
  function initScrollspy() {
    var nav = document.querySelector(".nav");
    if (!nav || document.body.getAttribute("data-page") !== "inicio") return;
    var links = [].slice.call(nav.querySelectorAll("a"));
    var secs = links.map(function (a) { return document.getElementById(a.getAttribute("href").replace("#", "")); });
    var ticking = false;
    function update() {
      ticking = false;
      var line = window.innerHeight * 0.4;
      var idx = 0;
      secs.forEach(function (el, n) { if (el && el.getBoundingClientRect().top <= line) idx = n; });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) idx = secs.length - 1;
      links.forEach(function (a, n) {
        if (n === idx) a.setAttribute("aria-current", "location"); else a.removeAttribute("aria-current");
      });
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }

  /* Cover flow: 5 a la vez, arranca en el central, sin autoplay */
  function initFlow() {
    var stage = document.querySelector(".flow-stage");
    if (!stage) return;
    var cards = [].slice.call(stage.querySelectorAll(".flow-card"));
    var info = document.querySelector(".flow-info");
    var count = document.querySelector(".flow-count");
    var i = Math.floor(cards.length / 2);

    function render() {
      cards.forEach(function (c, idx) {
        var o = idx - i, a = Math.abs(o);
        c.style.setProperty("--o", o);
        c.style.setProperty("--a", Math.min(a, 3));
        c.style.zIndex = 10 - a;
        c.dataset.a = a;
        c.setAttribute("aria-current", o === 0 ? "true" : "false");
        c.tabIndex = o === 0 ? 0 : -1;
      });
      var d = cards[i].dataset;
      info.querySelector("[data-f=title]").textContent = d.title;
      info.querySelector("[data-f=result]").textContent = d.result;
      info.querySelector("[data-f=tags]").innerHTML = d.tags.split("|").map(function (t) {
        return '<span class="tag' + (t.indexOf("IA") > -1 && t.indexOf("Sin") < 0 ? " ia" : "") + '">' + t + "</span>";
      }).join("");
      info.querySelector("[data-f=link]").setAttribute("href", d.href || "proyecto.html");
      count.textContent = (i + 1) + " / " + cards.length;
    }
    function go(n) { i = Math.max(0, Math.min(cards.length - 1, n)); render(); }

    var dragged = false;
    cards.forEach(function (c, idx) {
      c.addEventListener("click", function () { if (dragged) return; if (idx !== i) go(idx); else location.href = c.dataset.href || "proyecto.html"; });
    });
    document.querySelector("[data-flow=prev]").addEventListener("click", function () { go(i - 1); });
    document.querySelector("[data-flow=next]").addEventListener("click", function () { go(i + 1); });
    stage.parentElement.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { go(i - 1); e.preventDefault(); }
      if (e.key === "ArrowRight") { go(i + 1); e.preventDefault(); }
    });
    var x0 = null;
    stage.addEventListener("pointerdown", function (e) { x0 = e.clientX; });
    stage.addEventListener("pointerup", function (e) {
      if (x0 === null) return;
      var dx = e.clientX - x0; x0 = null;
      if (Math.abs(dx) > 50) { dragged = true; setTimeout(function () { dragged = false; }, 0); go(i + (dx < 0 ? 1 : -1)); }
    });
    render();
  }

  /* Filtros de proyectos.html */
  function initFilters() {
    var box = document.querySelector(".filters");
    if (!box) return;
    var cards = [].slice.call(document.querySelectorAll(".pcard"));
    var empty = document.querySelector(".empty");
    var state = { tipo: "", disc: "", tech: "" };
    box.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip || chip.disabled) return;
      var group = chip.dataset.group;
      state[group] = chip.dataset.value;
      [].forEach.call(box.querySelectorAll('.chip[data-group="' + group + '"]'), function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
      var shown = 0;
      cards.forEach(function (c) {
        var ok = (!state.tipo || c.dataset.tipo === state.tipo) &&
                 (!state.disc || c.dataset.disc.split(" ").indexOf(state.disc) > -1) &&
                 (!state.tech || c.dataset.tech.split(" ").indexOf(state.tech) > -1);
        c.parentElement.style.display = ok ? "" : "none";
        if (ok) shown++;
      });
      empty.style.display = shown ? "none" : "block";
    });
  }

  /* Filtro por disciplina en Recursos */
  function initTabs() {
    var tabs = document.querySelector(".tabs");
    if (!tabs) return;
    var items = [].slice.call(document.querySelectorAll("#recursos [data-disc]"));
    tabs.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      [].forEach.call(tabs.querySelectorAll(".chip"), function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
      items.forEach(function (it) {
        it.style.display = !chip.dataset.value || it.dataset.disc.split(" ").indexOf(chip.dataset.value) > -1 ? "" : "none";
      });
    });
  }

  /* Entrada de las partes de cada sección, una vez */
  function initReveal() {
    var els = [].slice.call(document.querySelectorAll("[data-reveal]"));
    if (!els.length) return;
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* Formulario: sin servidor, abre WhatsApp (wa.me) con lo escrito */
  function initForm() {
    var form = document.querySelector(".form");
    if (!form) return;
    var status = form.querySelector(".form-status");
    var msgs = { valueMissing: "Este campo es obligatorio.", patternMismatch: "Escribe un número válido, con código de país, como +52 55 1234 5678." };
    function check(field) {
      var input = field.querySelector("input, textarea, select");
      var ok = input.checkValidity();
      var err = field.querySelector(".field-error");
      field.classList.toggle("has-error", !ok);
      input.setAttribute("aria-invalid", String(!ok));
      if (!ok) err.textContent = input.validity.valueMissing ? msgs.valueMissing : msgs.patternMismatch;
      return ok;
    }
    [].forEach.call(form.querySelectorAll(".field"), function (f) {
      var inp = f.querySelector("input, textarea, select"), er = f.querySelector(".field-error");
      if (er) { er.id = "err-" + inp.name; inp.setAttribute("aria-describedby", er.id); }
      f.querySelector("input, textarea, select").addEventListener("blur", function () { check(f); });
      f.querySelector("input, textarea, select").addEventListener("input", function () { if (f.classList.contains("has-error")) check(f); });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fields = [].slice.call(form.querySelectorAll(".field"));
      var bad = fields.filter(function (f) { return !check(f); });
      if (bad.length) { bad[0].querySelector("input, textarea, select").focus(); status.dataset.state = "error"; status.textContent = "Revisa los campos marcados."; return; }
      var v = {};
      fields.forEach(function (f) { var el = f.querySelector("input, textarea, select"); v[el.name] = el.value; });
      var number = (form.dataset.wa || "").replace(/\D/g, "");
      if (!number) { status.dataset.state = "error"; status.textContent = "Falta configurar el número de WhatsApp del sitio."; return; }
      status.dataset.state = "sending"; status.textContent = "Abriendo WhatsApp…";
      var body = "Hola, me interesa un proyecto.\nProyecto: " + v.tipo + "\nMi WhatsApp: " + v.telefono + "\n\n" + v.mensaje;
      var href = "https://wa.me/" + number + "?text=" + encodeURIComponent(body);
      // Se abre en el mismo gesto del clic: con retardo, los navegadores lo bloquean como popup
      window.open(href, "_blank", "noopener");
      status.dataset.state = "sent";
      status.textContent = "Listo: se abrió WhatsApp con tu mensaje. Envíalo desde ahí y te respondo con una propuesta clara.";
    });
  }

})();
