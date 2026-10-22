/* Tema, scrollspy, cover flow, filtros, entradas y formulario. Sin dependencias. */
(function () {
  var root = document.documentElement;
  root.classList.add("js");
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
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
    initTitles();
    initProcess();
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
  /* Resaltado de los títulos (inicio y secciones): se activa al entrar y se reinicia al salir */
  function initTitles() {
    var els = [].slice.call(document.querySelectorAll(".hl, .hl-t"));
    if (!els.length) return;
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("is-on"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.target.classList.toggle("is-on", en.isIntersecting); });
    }, { rootMargin: "-8% 0px -30% 0px", threshold: 0 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* Cómo trabajo: el proceso se construye paso a paso cada vez que entra en pantalla */
  function initProcess() {
    var el = document.querySelector(".process");
    if (!el) return;
    if (reduce || !("IntersectionObserver" in window)) { el.classList.add("is-run"); return; }
    new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.target.classList.toggle("is-run", en.isIntersecting); });
    }, { rootMargin: "0px 0px -20% 0px", threshold: 0 }).observe(el);
  }

  function initReveal() {
    var els = [].slice.call(document.querySelectorAll("[data-reveal]"));
    if (!els.length) return;
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* Desplegable propio sobre un <select> (patrón "select-only combobox"). Sin JS queda el select nativo. */
  function initSelect(sel) {
    var label = document.querySelector('label[for="' + sel.id + '"]');
    var wrap = document.createElement("div");
    wrap.className = "dd";
    sel.parentNode.insertBefore(wrap, sel);
    wrap.appendChild(sel);
    sel.classList.add("dd-native");
    sel.tabIndex = -1;
    sel.setAttribute("aria-hidden", "true");

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "dd-btn";
    btn.id = sel.id + "-btn";
    btn.setAttribute("role", "combobox");
    btn.setAttribute("aria-haspopup", "listbox");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", sel.id + "-list");
    var txt = document.createElement("span");
    txt.className = "dd-text";
    var chev = document.createElement("span");
    chev.className = "dd-chev";
    chev.setAttribute("aria-hidden", "true");
    chev.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>';
    btn.appendChild(txt);
    btn.appendChild(chev);

    var list = document.createElement("ul");
    list.className = "dd-list";
    list.id = sel.id + "-list";
    list.setAttribute("role", "listbox");
    list.hidden = true;

    if (label) {
      label.id = label.id || sel.id + "-label";
      label.removeAttribute("for");
      label.addEventListener("click", function () { btn.focus(); });
      btn.setAttribute("aria-labelledby", label.id + " " + btn.id);
      list.setAttribute("aria-labelledby", label.id);
    }

    var opts = [].map.call(sel.options, function (o, i) {
      var li = document.createElement("li");
      li.id = sel.id + "-opt-" + i;
      li.className = "dd-opt";
      li.setAttribute("role", "option");
      li.textContent = o.text;
      list.appendChild(li);
      return li;
    });
    wrap.appendChild(btn);
    wrap.appendChild(list);

    var open = false, active = sel.selectedIndex, typed = "", typedTimer = null;

    function paint() {
      txt.textContent = opts[sel.selectedIndex].textContent;
      opts.forEach(function (li, n) { li.setAttribute("aria-selected", String(n === sel.selectedIndex)); });
    }
    function setActive(i) {
      active = Math.max(0, Math.min(opts.length - 1, i));
      opts.forEach(function (li, n) { li.classList.toggle("is-active", n === active); });
      btn.setAttribute("aria-activedescendant", opts[active].id);
      opts[active].scrollIntoView({ block: "nearest" });
    }
    function show() {
      if (open) return;
      open = true;
      list.hidden = false;
      btn.setAttribute("aria-expanded", "true");
      var r = btn.getBoundingClientRect(), h = list.offsetHeight + 16;
      wrap.classList.toggle("dd-up", window.innerHeight - r.bottom < h && r.top > h);
      setActive(sel.selectedIndex);
    }
    function hide() {
      if (!open) return;
      open = false;
      list.hidden = true;
      btn.setAttribute("aria-expanded", "false");
      btn.removeAttribute("aria-activedescendant");
    }
    function choose(i) {
      if (i === sel.selectedIndex) return;
      sel.selectedIndex = i;
      paint();
      sel.dispatchEvent(new Event("change", { bubbles: true }));
    }

    btn.addEventListener("click", function () { if (open) hide(); else show(); });
    btn.addEventListener("blur", hide);
    btn.addEventListener("keydown", function (e) {
      var k = e.key;
      if (!open) {
        if (k === "ArrowDown" || k === "ArrowUp" || k === "Enter" || k === " ") { e.preventDefault(); show(); }
        else if (k === "Home" || k === "End") { e.preventDefault(); show(); setActive(k === "Home" ? 0 : opts.length - 1); }
        return;
      }
      if (k === "ArrowDown") { e.preventDefault(); setActive(active + 1); }
      else if (k === "ArrowUp") { e.preventDefault(); setActive(active - 1); }
      else if (k === "Home") { e.preventDefault(); setActive(0); }
      else if (k === "End") { e.preventDefault(); setActive(opts.length - 1); }
      else if (k === "Enter" || k === " ") { e.preventDefault(); choose(active); hide(); }
      else if (k === "Escape") { e.preventDefault(); hide(); }
      else if (k === "Tab") { choose(active); hide(); }
      else if (k.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        typed += k.toLowerCase();
        clearTimeout(typedTimer);
        typedTimer = setTimeout(function () { typed = ""; }, 600);
        for (var n = 0; n < opts.length; n++) {
          var i = (active + n + (typed.length > 1 ? 0 : 1)) % opts.length;
          if (opts[i].textContent.toLowerCase().indexOf(typed) === 0) { setActive(i); break; }
        }
      }
    });
    // el foco se queda en el botón mientras se elige con el ratón o con el dedo
    list.addEventListener("mousedown", function (e) { e.preventDefault(); });
    list.addEventListener("click", function (e) {
      var i = opts.indexOf(e.target.closest(".dd-opt"));
      if (i < 0) return;
      choose(i);
      hide();
      btn.focus();
    });
    list.addEventListener("mousemove", function (e) {
      var i = opts.indexOf(e.target.closest(".dd-opt"));
      if (i >= 0 && i !== active) setActive(i);
    });
    document.addEventListener("pointerdown", function (e) { if (open && !wrap.contains(e.target)) hide(); });
    paint();
  }

  /* Formulario: sin servidor. El tipo de proyecto carga una plantilla en el mensaje y se envía por WhatsApp (wa.me) */
  function initForm() {
    var form = document.querySelector(".form");
    if (!form) return;
    var status = form.querySelector(".form-status");
    var submitBtn = form.querySelector("[type=submit]");
    var select = form.elements.tipo;
    initSelect(select);
    var area = form.elements.mensaje;
    var field = area.closest(".field");
    var err = field.querySelector(".field-error");

    var templates = {
      "UX/UI": "Hola Yasmani, necesito diseño UX/UI para mi proyecto.\n\nMi negocio o proyecto: \nQué quiero lograr: \nQuiénes lo van a usar: \nPantallas o flujos que imagino: \nPlazo que tengo en mente: \nPresupuesto aproximado: ",
      "Front": "Hola Yasmani, necesito desarrollar la parte visual (front) de un sitio o aplicación.\n\nMi negocio o proyecto: \n¿Ya tengo diseño? (sí / no / en Figma): \nQué debe hacer el sitio: \nDispositivos principales (móvil, escritorio): \nPlazo que tengo en mente: \nPresupuesto aproximado: ",
      "Backend": "Hola Yasmani, necesito automatizar un proceso o construir un servicio.\n\nQué proceso hago hoy a mano: \nCuánto tiempo me toma cada semana: \nHerramientas que uso ahora (Excel, correo, etc.): \nQué resultado espero: \nPlazo que tengo en mente: \nPresupuesto aproximado: ",
      "Producto completo": "Hola Yasmani, quiero un producto digital completo, del diseño al backend.\n\nQué problema quiero resolver: \nQuiénes lo van a usar: \nFunciones imprescindibles: \nSi ya existe algo que lo reemplace o complemente: \nPlazo que tengo en mente: \nPresupuesto aproximado: ",
      "Otro": "Hola Yasmani, tengo una consulta sobre un proyecto.\n\nQué necesito: \nPara qué lo necesito: \nPlazo que tengo en mente: "
    };
    var current = "";
    function load() {
      current = templates[select.value] || "";
      area.value = current;
    }
    load();
    form.addEventListener("change", function (e) {
      if (e.target.name !== "tipo") return;
      var untouched = !area.value.trim() || area.value === current;
      if (untouched) {
        load();
        status.textContent = ""; delete status.dataset.state;
      } else {
        status.dataset.state = "";
        status.textContent = "Conservé lo que ya escribiste. Si quieres la plantilla del nuevo tipo, borra el mensaje y vuelve a elegirlo.";
      }
    });

    function clean(str) {
      return Array.prototype.filter.call(str, function (c) { var n = c.charCodeAt(0); return n > 31 || n === 9 || n === 10 || n === 13; }).join("").trim();
    }
    // el mensaje debe aportar algo más que la plantilla tal cual
    function check() {
      var text = clean(area.value);
      var msg = !text ? "Escribe tu mensaje." : text === clean(current) ? "Completa la plantilla con los datos de tu proyecto antes de enviarla." : "";
      field.classList.toggle("has-error", !!msg);
      area.setAttribute("aria-invalid", String(!!msg));
      err.textContent = msg;
      return !msg;
    }
    err.id = "err-mensaje";
    area.setAttribute("aria-describedby", err.id);
    area.addEventListener("blur", function () { if (clean(area.value) !== clean(current)) check(); });
    area.addEventListener("input", function () { if (field.classList.contains("has-error")) check(); });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (submitBtn.disabled) return;
      if (!check()) { area.focus(); status.dataset.state = "error"; status.textContent = "Revisa el mensaje."; return; }
      var number = (form.dataset.wa || "").replace(/\D/g, "");
      if (!number) { status.dataset.state = "error"; status.textContent = "Falta configurar el número de WhatsApp del sitio."; return; }
      if (navigator.onLine === false) { status.dataset.state = "error"; status.textContent = "Parece que no tienes conexión. Tu mensaje sigue escrito: vuelve a intentarlo cuando se restablezca."; return; }
      status.dataset.state = "sending"; status.textContent = "Abriendo WhatsApp…";
      submitBtn.disabled = true;
      setTimeout(function () { submitBtn.disabled = false; }, 3000);
      var href = "https://wa.me/" + number + "?text=" + encodeURIComponent(clean(area.value));
      // Se abre en el mismo gesto del clic: con retardo, los navegadores lo bloquean como popup
      var win = window.open(href, "_blank");
      if (win) win.opener = null;
      status.dataset.state = "sent";
      status.textContent = win ? "Listo: se abrió WhatsApp con tu mensaje. Envíalo desde ahí y te respondo con una propuesta clara. ¿No se abrió? " : "El navegador bloqueó la ventana. ";
      var again = document.createElement("a");
      again.href = href; again.target = "_blank"; again.rel = "noopener"; again.textContent = "Abrir WhatsApp";
      status.appendChild(again);
    });
  }

})();
