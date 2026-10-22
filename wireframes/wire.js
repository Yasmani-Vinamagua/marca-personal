/* Shell compartido (menú vertical, tema, notas, scrollspy) + cover flow + filtros. Sin dependencias. */
(function () {
  var root = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  // Tema: preferencia guardada, si no la del sistema.
  var saved = store.get("wf-theme");
  var system = window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  root.setAttribute("data-theme", saved || system);

  var SECTIONS = [
    ["inicio", "Inicio"],
    ["proyectos", "Proyectos"],
    ["sobre-mi", "Sobre mí"],
    ["recursos", "Recursos"],
    ["contacto", "Contacto"]
  ];
  var SOCIALS = [
    ["LinkedIn", "in"],
    ["GitHub", "Gh"],
    ["Figma Community", "Fg"],
    ["Instagram", "Ig"]
  ];
  var ICON_SUN = '<svg class="i-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var ICON_MOON = '<svg class="i-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

  function socials(cls) {
    return '<ul class="socials ' + (cls || "") + '" aria-label="Redes">' + SOCIALS.map(function (s) {
      return '<li><a class="soc" href="#" target="_blank" rel="noopener" aria-label="' + s[0] + ' de Yasmani">' + s[1] + "</a></li>";
    }).join("") + "</ul>";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var landing = document.body.getAttribute("data-page") === "inicio";
    if (!landing) document.body.classList.add("subpage");
    var main = document.querySelector("main");
    if (main) main.id = "main";

    // Menú vertical centrado
    var nav = document.createElement("nav");
    nav.className = "nav";
    nav.setAttribute("aria-label", "Principal");
    nav.innerHTML = SECTIONS.map(function (s) {
      var href = (landing ? "" : "index.html") + "#" + s[0];
      var cur = !landing && s[0] === "proyectos" ? ' aria-current="page"' : "";
      return '<a href="' + href + '"' + cur + ">" + s[1] + "</a>";
    }).join("");
    document.body.insertBefore(nav, document.body.firstChild);

    var skip = document.createElement("a");
    skip.className = "skip"; skip.href = "#main"; skip.textContent = "Saltar al contenido";
    document.body.insertBefore(skip, document.body.firstChild);

    // Botón de tema (sol / luna): en la esquina superior derecha del hero, o de la página
    var themeBtn = document.createElement("button");
    themeBtn.className = "theme-btn";
    themeBtn.type = "button";
    themeBtn.innerHTML = ICON_SUN + ICON_MOON;
    function paintTheme() {
      var dark = root.getAttribute("data-theme") === "dark";
      themeBtn.setAttribute("aria-label", dark ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
    }
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store.set("wf-theme", next);
      paintTheme();
    });
    paintTheme();
    (document.querySelector(".hero-sec") || document.body).appendChild(themeBtn);

    // Redes fijas: acompañan el scroll (escritorio)
    var fixed = document.createElement("div");
    fixed.innerHTML = socials("socials-fixed");
    document.body.appendChild(fixed.firstChild);

    // Pie
    var foot = document.createElement("footer");
    foot.className = "foot";
    foot.innerHTML = "<span>© Yasmani Viñamagua · Wireframe de baja fidelidad</span>" + socials();
    document.body.appendChild(foot);

    // Anotaciones
    var notesBtn = document.createElement("button");
    notesBtn.className = "notes-btn";
    notesBtn.type = "button";
    document.body.appendChild(notesBtn);
    function paintNotes(on) {
      document.body.classList.toggle("notes-off", !on);
      notesBtn.textContent = "Anotaciones: " + (on ? "sí" : "no");
      notesBtn.setAttribute("aria-pressed", String(on));
    }
    paintNotes(store.get("wf-notes") !== "off");
    notesBtn.addEventListener("click", function () {
      var on = document.body.classList.contains("notes-off");
      store.set("wf-notes", on ? "on" : "off");
      paintNotes(on);
    });

    if (landing) initScrollspy(nav);
    initFlow();
    initFilters();
    initTabs();
  });

  /* ---------- El color del menú sigue al scroll ---------- */
  function initScrollspy(nav) {
    var links = [].slice.call(nav.querySelectorAll("a"));
    var secs = SECTIONS.map(function (s) { return document.getElementById(s[0]); });
    var ticking = false;

    function update() {
      ticking = false;
      var line = window.innerHeight * 0.35;
      var idx = 0;
      secs.forEach(function (el, n) {
        if (el && el.getBoundingClientRect().top <= line) idx = n;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) idx = secs.length - 1;
      links.forEach(function (a, n) {
        if (n === idx) a.setAttribute("aria-current", "location");
        else a.removeAttribute("aria-current");
      });
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }

  /* ---------- Cover flow ---------- */
  function initFlow() {
    var stage = document.querySelector(".flow-stage");
    if (!stage) return;
    var cards = [].slice.call(stage.querySelectorAll(".flow-card"));
    var info = document.querySelector(".flow-info");
    var count = document.querySelector(".flow-count");
    var i = Math.floor(cards.length / 2); // empieza en el centro

    function render() {
      cards.forEach(function (c, idx) {
        var o = idx - i;
        var a = Math.abs(o);
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
        return '<span class="tag' + (t.indexOf("IA") > -1 ? " ia" : "") + '">' + t + "</span>";
      }).join("");
      info.querySelector("[data-f=link]").setAttribute("href", d.href || "proyecto.html");
      count.textContent = (i + 1) + " / " + cards.length;
    }
    function go(n) { i = Math.max(0, Math.min(cards.length - 1, n)); render(); }

    cards.forEach(function (c, idx) {
      c.addEventListener("click", function () { if (idx !== i) go(idx); else location.href = c.dataset.href || "proyecto.html"; });
    });
    document.querySelector("[data-flow=prev]").addEventListener("click", function () { go(i - 1); });
    document.querySelector("[data-flow=next]").addEventListener("click", function () { go(i + 1); });
    stage.parentElement.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { go(i - 1); e.preventDefault(); }
      if (e.key === "ArrowRight") { go(i + 1); e.preventDefault(); }
    });

    // Deslizamiento
    var x0 = null;
    stage.addEventListener("pointerdown", function (e) { x0 = e.clientX; });
    stage.addEventListener("pointerup", function (e) {
      if (x0 === null) return;
      var dx = e.clientX - x0; x0 = null;
      if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1));
    });
    render();
  }

  /* ---------- Filtros de la página Proyectos ---------- */
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
      [].forEach.call(box.querySelectorAll('.chip[data-group="' + group + '"]'), function (c) {
        c.setAttribute("aria-pressed", String(c === chip));
      });
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

  /* ---------- Filtro por disciplina en Recursos ---------- */
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
})();
