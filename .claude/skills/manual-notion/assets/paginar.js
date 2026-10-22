/*
  paginar.js — reparte el contenido de #flujo en hojas A4, genera el índice con sus números
  de página y numera las hojas. Se inyecta en manual.html; no se edita a mano.

  Entrada (en el HTML):
    elemento #cfg (JSON): { "numerar": true, "logo": "data:…" }
    <div id="flujo">  …bloques: h1 (capítulo), h2, h3, p, ul/ol.lista, .foco, .tabla, .figura, blockquote.bloque, pre, .refs…  </div>
    <div id="paginas"></div>   ← aquí se insertan las hojas del índice y del cuerpo
  Atributos de <h1>:  data-sin-numero (p. ej. Referencias, Glosario) · data-anexo="A" (anexos).
  Comportamiento: cada <h1> abre hoja nueva; un <h2>/<h3> nunca queda solo al final de una hoja;
  las listas de más de 4 elementos y los bloques de código (<pre>) largos se parten entre hojas (las listas cortas pasan enteras); las tablas, figuras, focalizadores y párrafos no se parten
  (si uno es más alto que una hoja se marca con data-aviso="desborda").
  Vista de una sola hoja: manual.html?p=N (lo usa scripts/exportar_pdf.py para las capturas).
*/
(async function () {
  if (document.fonts && document.fonts.ready) await document.fonts.ready;

  const cfg = JSON.parse(document.getElementById('cfg').textContent);
  const flujo = document.getElementById('flujo');
  const destino = document.getElementById('paginas');
  const avisos = [];

  const desborda = (h) => h.contenido.scrollHeight > h.contenido.clientHeight + 1;
  const esLista = (el) => el.tagName === 'UL' || el.tagName === 'OL';

  function nuevaHoja(extra) {
    const hoja = document.createElement('section');
    hoja.className = 'hoja hoja-pagina';
    hoja.innerHTML =
      '<span class="num"></span><div class="contenido"></div>' +
      '<footer class="pie"><img src="' + cfg.logo + '" alt="Autor"></footer>';
    destino.appendChild(hoja);
    const contenido = hoja.querySelector('.contenido');
    const h = { hoja, contenido, dest: contenido };
    if (extra) extra(h);
    return h;
  }

  /* Reparte `items` en hojas. opciones: saltoEn(b) → true fuerza hoja nueva; preparar(h) → configura cada hoja. */
  function llenar(items, opciones) {
    opciones = opciones || {};
    const cola = items.slice();
    let h = nuevaHoja(opciones.preparar);
    const vacia = () => h.dest.children.length === 0;

    while (cola.length) {
      const b = cola.shift();
      if (opciones.saltoEn && opciones.saltoEn(b) && !vacia()) h = nuevaHoja(opciones.preparar);
      h.dest.appendChild(b);
      if (!desborda(h)) continue;

      // 1) listas largas: se parten por elementos (las de 4 o menos pasan enteras, para no dejar huérfanos)
      if (esLista(b) && b.children.length > 4) {
        const resto = dividir(b, h);
        if (resto) cola.unshift(resto);
        if (!desborda(h)) continue;
      }
      // 1b) bloques de código largos: se parten por líneas
      if (b.tagName === 'PRE') {
        const resto = dividirPre(b, h);
        if (resto) cola.unshift(resto);
        if (!desborda(h)) continue;
      }

      // 2) pasa a la hoja siguiente, junto con los encabezados que quedarían colgados
      h.dest.removeChild(b);
      const colgados = [];
      while (h.dest.lastElementChild && /^H[23]$/.test(h.dest.lastElementChild.tagName)) {
        colgados.unshift(h.dest.removeChild(h.dest.lastElementChild));
      }
      if (vacia() && colgados.length === 0) {         // ya estaba sola y no cabe: se deja y se avisa
        h.dest.appendChild(b);
        b.dataset.aviso = 'desborda';
        avisos.push('Bloque más alto que una hoja: ' + (b.textContent || '').trim().slice(0, 60));
        continue;
      }
      h = nuevaHoja(opciones.preparar);
      colgados.forEach((c) => h.dest.appendChild(c));
      h.dest.appendChild(b);
      if (desborda(h) && esLista(b) && b.children.length > 4) {
        const resto = dividir(b, h);
        if (resto) cola.unshift(resto);
      }
      if (desborda(h) && b.tagName === 'PRE') {
        const resto = dividirPre(b, h);
        if (resto) cola.unshift(resto);
      }
      if (desborda(h) && !esLista(b) && b.tagName !== 'PRE') {
        b.dataset.aviso = 'desborda';
        avisos.push('Bloque más alto que una hoja: ' + (b.textContent || '').trim().slice(0, 60));
      }
    }
  }

  /* Parte un <pre> por líneas hasta que quepa; deja al menos 4 líneas en cada parte (si no, devuelve null y el bloque pasa entero a la hoja siguiente). */
  function dividirPre(pre, h) {
    const code = pre.querySelector('code') || pre;
    const lineas = code.textContent.split('\n');
    if (lineas.length < 8) return null;
    let n = lineas.length;
    while (n > 1) {
      code.textContent = lineas.slice(0, n).join('\n');
      if (!desborda(h)) break;
      n -= 1;
    }
    if (n >= lineas.length) return null;
    if (n < 4) { code.textContent = lineas.join('\n'); return null; }
    if (lineas.length - n < 4) {
      n = lineas.length - 4;
      code.textContent = lineas.slice(0, n).join('\n');
    }
    const resto = pre.cloneNode(true);
    (resto.querySelector('code') || resto).textContent = lineas.slice(n).join('\n');
    return resto;
  }

  function dividir(lista, h) {
    const resto = lista.cloneNode(false);
    while (lista.children.length > 2 && desborda(h)) {
      resto.insertBefore(lista.lastElementChild, resto.firstChild);
    }
    if (!resto.children.length) return null;
    if (lista.tagName === 'OL') resto.start = (parseInt(lista.getAttribute('start'), 10) || 1) + lista.children.length;
    return resto;
  }

  /* ───── Numeración de títulos y entradas del índice ───── */
  const bloques = Array.from(flujo.children);
  const entradas = [];
  let cap = 0, sec = 0, base = null;
  bloques.forEach((b) => {
    if (b.tagName !== 'H1' && b.tagName !== 'H2') return;
    const texto = b.textContent.trim();
    let etiqueta = '';
    if (b.tagName === 'H1') {
      sec = 0;
      if (b.hasAttribute('data-sin-numero')) { base = null; }
      else if (b.hasAttribute('data-anexo')) { base = b.getAttribute('data-anexo'); etiqueta = base; }
      else { cap += 1; base = String(cap); etiqueta = String(cap).padStart(2, '0'); }
    } else if (base !== null) {
      sec += 1; etiqueta = base + '.' + sec;
    }
    if (cfg.numerar && etiqueta) {
      const n = document.createElement('span');
      n.className = 'n'; n.textContent = etiqueta;
      b.insertBefore(n, b.firstChild);
    }
    entradas.push({ nivel: b.tagName === 'H1' ? 'cap' : 'sec', etiqueta: cfg.numerar ? etiqueta : '', texto, el: b });
  });

  /* ───── Índice (se pagina primero para conocer cuántas hojas ocupa) ───── */
  const lis = entradas.map((e, i) => {
    const li = document.createElement('li');
    li.className = e.nivel + (i === 0 ? ' primero' : '');
    li.innerHTML =
      (e.etiqueta ? '<span class="n">' + e.etiqueta + '</span>' : '') +
      '<span class="t"></span><i class="guia"></i><span class="p">00</span>';
    li.querySelector('.t').textContent = e.texto;
    e.li = li;
    return li;
  });
  if (lis.length) {
    let primera = true;
    llenar(lis, {
      preparar: (h) => {
        if (primera) {
          const t = document.createElement('h1');
          t.className = 'titulo-indice'; t.textContent = cfg.titulo_indice || 'Índice';
          h.contenido.appendChild(t);
          primera = false;
        }
        const ol = document.createElement('ol');
        ol.className = 'indice';
        h.contenido.appendChild(ol);
        h.dest = ol;
      },
    });
  }

  /* ───── Cuerpo ───── */
  llenar(bloques, { saltoEn: (b) => b.tagName === 'H1' });
  flujo.remove();

  /* ───── Numeración de hojas y números del índice ───── */
  const hojas = Array.from(document.querySelectorAll('.hoja'));
  hojas.forEach((hoja, i) => {
    const n = hoja.querySelector('.num');
    if (n) n.textContent = String(i + 1);
  });
  entradas.forEach((e) => {
    const hoja = e.el.closest('.hoja');
    e.li.querySelector('.p').textContent = String(hojas.indexOf(hoja) + 1);
  });

  /* ───── Vista de una sola hoja (capturas) ───── */
  const p = parseInt(new URLSearchParams(location.search).get('p'), 10);
  if (p) {
    hojas.forEach((h, i) => { if (i + 1 !== p) h.style.display = 'none'; });
    const barra = document.querySelector('.barra');
    if (barra) barra.style.display = 'none';
    document.querySelector('.hoja:not([style*="none"])').style.margin = '0 auto';
  }

  const meta = document.createElement('meta');
  meta.name = 'manual-resumen';
  meta.content = JSON.stringify({ hojas: hojas.length, avisos });
  document.head.appendChild(meta);
  document.documentElement.dataset.listo = '1';
})();
