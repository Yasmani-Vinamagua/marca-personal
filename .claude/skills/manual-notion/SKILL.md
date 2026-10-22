---
name: manual-notion
description: Convierte páginas de Notion (guías, manuales, tutoriales) en un manual académico en un solo HTML A4 con portada, índice, capítulos en estilo APA 7 y página final, y después lo exporta a PDF. Recibe los enlaces de las páginas, analiza el contenido, define una estructura con sentido, añade información útil que falta (verificada y marcada como complemento) y ensambla el HTML a partir de las plantillas de guias-manuales/. Pide aprobación antes de generar el PDF. Úsala cuando el usuario diga "manual-notion", "pasa estas páginas de Notion a un manual", "genera un manual desde Notion" o pegue enlaces de notion.so / notion.site para convertirlos en guía o PDF.
---

# /manual-notion — de páginas de Notion a un manual en PDF

Recibe enlaces de páginas de Notion, los analiza, define una estructura coherente, completa lo que falta con información verificada y produce **un solo HTML** basado en las plantillas de `guias-manuales/`. El PDF se genera **solo después de que el usuario apruebe** el HTML.

El público son estudiantes y profesionales que usan el manual como guía de estudio o consulta, por eso el tono es **académico** (ver "Tono").

## Reglas que no se rompen

1. **Las plantillas no se modifican.** `guias-manuales/plantilla-portada.html`, `plantilla-indice.html`, `plantilla-pagina.html` y `plantilla-final.html` solo se leen. El diseño del manual vive en `assets/manual.css` (derivado de ellas). Si el usuario cambia una plantilla, se vuelve a sincronizar `manual.css`, nunca al revés.
2. **No inventar contenido del autor.** Lo que está en Notion se conserva (pasos, definiciones, cifras, nombres); se reordena, se corrige la ortografía y se redacta con tono académico. Nada de datos, URL, DOI, cifras ni citas que no se hayan verificado.
3. **Lo añadido se marca.** Todo lo que no viene de Notion es *complemento*: va con fuente APA y se distingue del contenido del autor (ver "Información complementaria").
4. **El PDF espera aprobación.** Nunca ejecutes `exportar_pdf.py pdf` sin un "aprobado" explícito del usuario sobre el HTML.
5. **Un manual vivo por carpeta.** Todo va en `manuales/<slug>/`; un manual nuevo es una carpeta nueva, y rehacer el mismo manual sobrescribe sus archivos.

## Archivos

| Ruta | Papel |
|---|---|
| `.claude/skills/manual-notion/assets/manual.css` | Estilos unificados (portada, índice, página, final) |
| `.claude/skills/manual-notion/assets/paginar.js` | Reparte el contenido en hojas A4, genera el índice y numera |
| `.claude/skills/manual-notion/scripts/ensamblar.py` | `manual.json` + `cuerpo.html` → `manual.html` autocontenido |
| `.claude/skills/manual-notion/scripts/exportar_pdf.py` | `verificar`, `capturas` y `pdf` con Edge/Chrome sin interfaz |
| `manuales/<slug>/fuentes/` | Copia del contenido de Notion (Markdown), una página por archivo |
| `manuales/<slug>/estructura.md` | Análisis y estructura aprobada para el HTML (se sobrescribe) |
| `manuales/<slug>/manual.json` | Datos de portada |
| `manuales/<slug>/cuerpo.html` | Contenido del manual con los bloques HTML de abajo |
| `manuales/<slug>/img/` | Imágenes descargadas de Notion |
| `manuales/<slug>/manual.html` · `manual.pdf` | Resultado |

## Flujo

### 1. Pedir los enlaces
Si el usuario no los dio, pídelos (uno o varios). Además de enlaces de Notion puede pasar **rutas de PDF u otros archivos locales** (p. ej. una hoja de referencia): son fuentes igual de válidas. Pregunta solo lo que falte y no pueda deducirse: **título del manual** y **autor** (por defecto, Yasmani Viñamagua). Propón un `slug` en minúsculas con guiones.

### 2. Leer Notion
Carga las herramientas con `ToolSearch("select:mcp__notion__notion-fetch,mcp__notion__notion-search,mcp__notion__notion-query-data-sources,mcp__notion__notion-download-attachment")` y lee cada enlace con `notion-fetch`.
- **Subpáginas:** si una página contiene páginas hijas, léelas también (hasta 2 niveles) y avisa de cuáles incluiste. Si es una base de datos, lista sus páginas y pregunta cuáles entran solo si son muchas.
- **Imágenes:** las URL de archivos de Notion caducan. Descárgalas en el momento a `manuales/<slug>/img/` (con `notion-download-attachment` o `curl`) y referencia la copia local.
- Llama a `notion-fetch` con `include_file_urls: true` para obtener los archivos adjuntos (un PDF adjunto suele ser el mismo que el usuario ya pasó como ruta local: no lo dupliques).
- **PDF locales:** extrae el texto con `pdftotext -enc UTF-8 -layout archivo.pdf fuentes/NN-nombre.txt` (sin `-enc UTF-8` se corrompen las tildes). Si no hay `pdftotext`, lee el PDF con Read por páginas.
- Guarda las fuentes en `fuentes/`: un `00-fuentes.md` con el índice (enlace o ruta, fecha de edición, qué contiene, qué se repite entre fuentes) y el texto de los PDF. Las páginas de Notion pueden resumirse en ese índice si son muy largas, porque el contenido sigue disponible en Notion.
- **Páginas índice con muchas subpáginas** (decenas): lee todas en lotes de ~10 llamadas `notion-fetch` en paralelo y, **antes de escribir**, pregunta el alcance con `AskUserQuestion` (todo / sin ejemplos y lecturas / solo fundamentos) y el título del manual.
- **Imágenes y adjuntos:** pide las URL firmadas con `notion-get-file-download-urls` (hasta 25 referencias; caducan en 5 minutos) y descárgalas en la misma hora con `curl`. Las URL comparten todos los parámetros salvo la ruta y `X-Amz-Signature`: para ahorrar texto, define el resto en una variable de shell y compón cada URL con `ruta/archivo?<común>&X-Amz-Signature=<firma>&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject`. Abre cada imagen con Read: si es una **tarjeta de curso** (fondos de color, flechas, texto grande), transcribe su contenido a prosa, tablas o código y no la incrustes (rompe el estilo APA); incrusta solo diagramas que aporten (p. ej. esquemas de índices).
- Si Notion no responde o falta acceso (página no compartida con la integración), dilo y pide al usuario que la comparta; no sigas con contenido a medias sin avisar.

### 3. Analizar el contenido
Anota por página: tema, nivel (introductorio / intermedio / avanzado), tipo (concepto, procedimiento, referencia, ejercicio), conceptos que presupone, términos sin definir, pasos con saltos, repeticiones entre páginas, contradicciones y material incompleto o provisional. Deduce el **público**, los **conocimientos previos** y el **resultado de aprendizaje** global del manual.

### 4. Definir la estructura
Ordena por **dependencia conceptual** (lo que se necesita para entender lo siguiente va antes), no por el orden de los enlaces. Estructura base, adaptable:

1. **Portada** · **Índice** (automáticos).
2. **Introducción** — solo convenciones del documento (focalizadores, notación, fuentes). **No** se incluyen secciones de «Propósito del manual» ni de «Público y conocimientos previos»: el análisis del público va en `estructura.md`, no en el manual.
3. **Capítulos temáticos** — del fundamento a la práctica. Cada capítulo lleva: desarrollo, ejemplos o procedimientos, y una **síntesis** de cierre (3–5 ideas). **No** se incluyen secciones de «Objetivos de aprendizaje» (preferencia del autor, confirmada al revisar el primer manual). Añade *preguntas de comprobación* cuando el contenido sea teórico.
4. **Solución de problemas / preguntas frecuentes** — solo si el contenido lo justifica.
5. **Glosario** — si hay 6 o más términos técnicos.
6. **Referencias** (APA 7) — siempre que se haya citado algo, incluidas las fuentes de los complementos.
7. **Anexos** — material extenso de consulta (tablas largas, plantillas, comandos).
8. **Página final** (automática, "end?").

Escribe `manuales/<slug>/estructura.md` con: público y requisitos previos y resultado de aprendizaje (**solo como referencia interna; no van en el manual**), una tabla `# | Capítulo/sección | Tipo | Fuente | Complemento añadido`, y una sección **«Observaciones sobre el contenido original»** con cada error, dato desactualizado o contradicción detectados y cómo se resolvió (el texto del manual debe quedar correcto, pero el cambio se documenta ahí y se informa al usuario). Resume la estructura al usuario en pocas líneas y **continúa** con la generación del HTML (la aprobación formal se pide después, sobre el HTML).

### 5. Información complementaria (lo que no está en Notion)
Completa con lo que un estudiante o profesional necesitaría y el material no trae: definiciones previas, contexto, buenas prácticas, errores comunes, marco normativo o estándares aplicables, lecturas recomendadas, ejemplos resueltos.
- Verifica con WebSearch/WebFetch en fuentes fiables (documentación oficial, normas, libros, artículos académicos, organismos). Prefiere la fuente primaria.
- Cada dato complementario lleva su cita en el texto (Autor, año) y su entrada en **Referencias**. Si no se pudo verificar, no se escribe.
- **Cómo se marca:** en recuadros `foco ampliar` con la etiqueta «Para ampliar» o «Contexto», o en una sección claramente titulada como complementaria. Nunca mezclado en el texto del autor sin señal.
- Con medida: el complemento acompaña, no desplaza. Si añade más de ~25 % del volumen, avisa al usuario.
- No alteres el significado de lo que escribió el autor. Si encuentras un error técnico o un dato desactualizado (comandos, rutas de menús, nombres por defecto), redacta la versión **correcta** en el manual (no se publica un error), **anótalo en «Observaciones» de `estructura.md`** y menciónalo en el informe final para que el usuario decida. Cuando la corrección sea una advertencia útil para el lector, ponla en un recuadro `importante`. Ejemplos habituales: comillas tipográficas “ ” en comandos (usar comillas rectas), `master` frente a `main`, pasos de interfaces que han cambiado.

### 6. Escribir `manual.json` y `cuerpo.html`

Para manuales largos, escribe el cuerpo por partes (`manuales/<slug>/partes/01.html`, `02.html`…, un archivo por grupo de capítulos) y únelas con `cat partes/*.html > cuerpo.html`; así cada Write es manejable y puedes corregir una parte sin reescribir el resto. Mantén una sola numeración de tablas y figuras a lo largo de todas las partes. En las **referencias APA**, cuando una misma fuente (autor y año iguales) tiene varias obras, las letras `s. f.-a`, `s. f.-b`… se asignan por el **orden alfabético de los títulos** en la lista; revisa que cada cita del texto use la letra que le corresponde.

`manual.json`:
```json
{ "titulo": "…", "subtitulo": "…", "tipo": "Manual de estudio", "version": "1.0",
  "fecha": "Octubre 2026", "autor": "Yasmani Viñamagua", "tema_portada": "oscuro",
  "texto_final": "end?", "numerar": true }
```

#### Tono (académico)
- Registro formal, impersonal y preciso: «Se configura…», «El protocolo define…». Procedimientos en infinitivo o con «se» (*Abrir el panel…*, *Se selecciona…*), consistente en todo el manual. Sin segunda persona coloquial («tú»), sin exclamaciones, sin emojis, sin marketing.
- Presente atemporal para conceptos; términos técnicos definidos la primera vez, con sigla y nombre completo (*Protocolo de Control de Transmisión [TCP]*).
- Párrafos de 3–6 oraciones, una idea por párrafo; listas para pasos y enumeraciones; tablas para comparar.
- Los títulos nombran el contenido, no lo adornan («Configuración del entorno», no «¡Manos a la obra!»).
- Conserva los términos y el orden de pasos del autor; mejora la redacción, no los hechos.

#### Preferencias del autor (confirmadas al revisar el primer manual)
- **Sin** secciones de «Propósito del manual», «Público y conocimientos previos» ni «Objetivos de aprendizaje». La Introducción lleva solo las convenciones del documento y las fuentes; cada capítulo cierra con su «Síntesis».
- **Aire en la página:** el diseño usa interlineado 1,65, párrafos separados 3 mm y márgenes generosos alrededor de títulos, tablas y recuadros. Una página «saturada» se corrige con más espacio (`--interlineado` y márgenes en `manual.css`), no comprimiendo; el costo son más hojas.
- Los títulos de capítulo se numeran (`01`, `02`…) y las secciones (`1.1`…); Glosario y Referencias van sin número (`data-sin-numero`).

#### Bloques HTML (en `cuerpo.html`, solo estos, en el orden del manual)
El estilo es el de `plantilla-pagina` (APA 7: título nivel 1–3, tabla con líneas horizontales, figuras con rótulo, referencias con sangría francesa). Los números de capítulo y de sección se añaden solos.

```html
<h1>Título del capítulo</h1>                 <!-- abre hoja nueva; entra al índice -->
<h1 data-sin-numero>Referencias</h1>         <!-- sin número (Referencias, Glosario) -->
<h1 data-anexo="A">Título del anexo</h1>     <!-- anexos: A, B… -->
<h2>Sección</h2>   <h3>Subsección</h3>       <!-- h2 entra al índice -->
<p>Párrafo con cita (Autor, 2024) y <b>énfasis</b> o <i>cursiva</i>.</p>
<ul class="lista"><li>…</li></ul>   <ol class="lista"><li>…</li></ol>
<blockquote class="bloque"><p>Cita textual de 40 palabras o más (Autor, 2024, p. 5)</p></blockquote>
<pre><code>comando o código</code></pre>   y   <code>en línea</code>

<!-- Focalizadores: nota (azul) · importante (rosa) · consejo / ampliar (gris) -->
<div class="foco"><span class="et">Nota</span><p>…</p></div>
<div class="foco importante"><span class="et">Importante</span><p>…</p></div>
<div class="foco consejo"><span class="et">Consejo</span><p>…</p></div>
<div class="foco ampliar"><span class="et">Para ampliar</span><p>Complemento con fuente (Autor, año).</p></div>

<!-- Tabla APA: rótulo arriba, nota debajo. Columnas numéricas con class="n" -->
<div class="tabla">
  <p class="rotulo"><b>Tabla 1</b><i>Título de la Tabla en Cursiva</i></p>
  <table><thead><tr><th>…</th><th class="n">…</th></tr></thead><tbody><tr><td>…</td><td class="n">…</td></tr></tbody></table>
  <p class="nota"><i>Nota.</i> Fuente o aclaración.</p>
</div>

<!-- Figura APA: rótulo arriba, imagen local o <svg> en línea (diagramas propios), nota debajo -->
<div class="figura">
  <p class="rotulo"><b>Figura 1</b><i>Título de la Figura en Cursiva</i></p>
  <img src="img/figura-1.png" alt="Descripción de la imagen">
  <p class="nota"><i>Nota.</i> Fuente: Autor (año).</p>
</div>

<!-- Referencias APA 7, orden alfabético -->
<div class="refs"><p>Apellido, I. (Año). <i>Título</i>. Editorial. https://doi.org/…</p></div>
```
**Manuales con mucho código:** los bloques `<pre>` largos se parten solos entre hojas (mínimo 4 líneas por parte), así que un programa completo puede ir en el capítulo; los programas muy extensos que se construyen por pasos se presentan paso a paso (solo el código nuevo de cada paso) y su versión final va en un anexo (`<h1 data-anexo="A">`). Escapa `<`, `>` y `&` dentro de `<pre><code>` y no uses comillas tipográficas en el código.

Convenciones: numera tablas y figuras en orden y menciónalas en el texto antes de que aparezcan; toda imagen lleva `alt`; el contenido de una tabla o figura no debe superar una hoja (si es más largo, divídela en «Tabla 2 (continuación)»). Los callouts de Notion pasan a focalizadores según su intención (aviso → `importante`, idea o tip → `consejo`, otros → `foco`). Los bloques de código de Notion pasan a `<pre><code>` (escapa `<`, `>` y `&`).

### 7. Ensamblar y revisar
```
python .claude/skills/manual-notion/scripts/ensamblar.py manuales/<slug>
python .claude/skills/manual-notion/scripts/exportar_pdf.py verificar manuales/<slug>/manual.html
python .claude/skills/manual-notion/scripts/exportar_pdf.py capturas  manuales/<slug>/manual.html
```
0. `capturas` tarda ~3 s por hoja: con más de 30 hojas ejecútalo en segundo plano (`run_in_background`) y espera el aviso, o solicita solo las hojas que necesites; para mirar el conjunto, arma una hoja de contacto con Pillow (`python -I`).
1. `verificar` informa de cuántas hojas salen y de bloques que no caben en una hoja; corrige esos avisos (parte el bloque o reduce la imagen) y repite.
2. Con `capturas`, mira con Read la portada, el índice, una hoja de capítulo y una con tabla/figura. Revisa: títulos no colgados al pie, numeración del índice correcta, imágenes legibles, focalizadores bien cerrados, ninguna hoja casi vacía sin motivo.
3. **Páginas huérfanas:** revisa que no queden hojas con solo la «Síntesis» o 1–2 elementos de una lista (el paginador deja pasar enteras las listas de 4 o menos elementos, pero puede pasar). Si ocurre, acorta o reordena el capítulo; algunas hojas de final de capítulo a media página son normales porque cada `<h1>` abre hoja nueva.
4. Releva el texto como lector académico: tono consistente, términos definidos, referencias completas, sin restos de Notion (emojis, "toggle", enlaces internos rotos).

### 8. Pedir aprobación (puerta antes del PDF)
Presenta al usuario, de forma breve:
- ruta de `manuales/<slug>/manual.html` (que lo abra en el navegador) y número de hojas;
- estructura final (capítulos y hojas);
- **qué se añadió** como complemento y de dónde salió;
- cualquier duda detectada (errores técnicos del original, material incompleto, imágenes faltantes).

Pregunta con `AskUserQuestion`: *aprobar y generar el PDF* / *hacer cambios*. Con cambios, edita `cuerpo.html` o `manual.json`, vuelve a ensamblar y a verificar, y pide aprobación de nuevo. **No generes el PDF hasta recibir la aprobación.**

### 9. Generar el PDF
Solo tras la aprobación:
```
python .claude/skills/manual-notion/scripts/exportar_pdf.py pdf manuales/<slug>/manual.html
```
El script comprueba que el PDF tenga las mismas hojas que el HTML. Informa de la ruta, el tamaño y el número de páginas. No borres `manual.html`: es la fuente editable.

## Notas técnicas
- `manual.html` es autocontenido (fuentes, logos e imágenes incrustados en base64); se puede mover o enviar solo.
- El PDF se genera con Edge o Chrome sin interfaz; `exportar_pdf.py` los busca solo. Si no hay ninguno, el usuario puede abrir `manual.html` y usar Ctrl+P → Guardar como PDF (A4, márgenes «Ninguno», «Gráficos de fondo»).
- Para cambiar de portada clara u oscura: `"tema_portada": "claro"`. Para otro autor o logo: `"autor"` y `"logo_claro"`/`"logo_oscuro"` (rutas a SVG sin fondo).
- Los números del índice se calculan al abrir el HTML; no se escriben a mano.
- **Parámetros de diseño** (`assets/manual.css`, variables de `:root`): `--tam: 10.5pt`, `--interlineado: 1.65`, `--sangria: 12.7mm` (cita en bloque y referencias). Los párrafos no llevan sangría de primera línea y el título de nivel 1 va alineado a la izquierda (como `plantilla-pagina`). No hay `zoom` en pantallas estrechas: el paginador mide a escala real y las capturas se toman con ventana de 900 px.
- `exportar_pdf.py` convierte las rutas a absolutas (Edge ignora las relativas al guardar capturas y PDF). En Windows, ejecútalo con `PYTHONIOENCODING=utf-8` para ver bien las tildes. La carpeta `capturas/` es desechable: bórrala al terminar (si Windows dice «Device or resource busy», el directorio de trabajo está dentro de ella: cámbialo antes).
- Si el HTML no termina de paginarse, busca errores de JavaScript: un `</script>` dentro de `paginar.js` (incluso en un comentario) lo rompe.
