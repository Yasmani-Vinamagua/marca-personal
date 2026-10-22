# User flow y sitemap — Web de portafolio freelance

## Objetivo

Mostrar proyectos personales y comerciales para que un cliente potencial confíe y **contacte**. Contactar es la única acción principal.

## Estructura: una landing + dos páginas

La web es una **landing de una sola página con scroll** (`index.html`). Inicio, Proyectos, Sobre mí, Recursos y Contacto son **secciones** de esa página. Solo el portafolio completo sale de ella:

```
index.html  (landing)
 ├── #inicio      Hero
 ├── #proyectos   Cover flow de destacados ──► "Ver todos los proyectos"
 ├── #sobre-mi    Quién soy + servicios + cómo trabajo + en aprendizaje
 ├── #recursos    Guías, videos y recomendados
 └── #contacto    Formulario y otras vías

proyectos.html     Cuadrícula con filtros
 └── proyecto.html Detalle de un proyecto
```

UX/UI, Front y Backend **no son páginas ni secciones**: son filtros en Proyectos y Recursos, y bloques en Servicios (dentro de Sobre mí).

## Menú

- **Vertical, fijo a la izquierda y centrado en altura**, con efecto cristal (fondo translúcido con desenfoque), sin logo ni nombre. Enlaces: Inicio · Proyectos · Sobre mí · Recursos · Contacto.
- **Hover:** solo cambia el color de la letra.
- **Scroll:** el enlace de la sección visible toma el color de acento y cambia a medida que se hace scroll.
- Contacto es un enlace más (el CTA principal vive en el hero y en la sección Contacto).
- En `proyectos.html` y `proyecto.html` el menú es el mismo y sus enlaces vuelven a las secciones de `index.html`; Proyectos queda marcado.
- En móvil (no cabe un menú vertical en pantalla estrecha) pasa a una barra horizontal centrada arriba, con texto más pequeño.

## Inicio (hero)

- **Nombre:** Yasmani Viñamagua
- **Titular:** Diseño y desarrollo productos digitales **de principio a fin.** (con resaltado de marcador rosa bajo el final)
- **Subtítulo:** Del diseño UX/UI al backend, construyo soluciones que automatizan procesos y funcionan en el mundo real.
- **Botones:** Ver proyectos (principal, baja a #proyectos) · Contacto (secundario, baja a #contacto)
- **Fondo:** limpio, sin patrón.
- **Interruptor de tema:** icono de sol/luna en la esquina superior derecha del hero.
- **Redes** (LinkedIn, GitHub, Figma Community, Instagram): columna fija abajo a la derecha que acompaña el scroll en escritorio; en móvil, solo en el pie.

## Proyectos (sección de la landing)

Cover flow con **5 destacados**, comerciales primero, que **muestra los 5 a la vez**, empieza en el central y se desplaza con las flechas (no aparecen de uno en uno). En móvil se ven el central y sus dos vecinos. La card central muestra nombre, frase de resultado, etiquetas y *Ver proyecto →*. Debajo, el botón **Ver todos los proyectos** lleva a `proyectos.html`.

## Proyectos (página `proyectos.html`)

- Cuadrícula con filtros: **tipo** (Comercial / Personal), **disciplina** (UX/UI, Front, Backend), **tecnología**.
- Cada tarjeta: imagen, nombre, 3-4 etiquetas de stack y etiqueta de uso de IA.
- Estado vacío cuando ningún proyecto coincide con los filtros.

### Detalle (`proyecto.html`)

Problema → mi rol → proceso → resultado → **uso de IA** → **stack agrupado por disciplina** (con una frase de por qué se eligió cada tecnología) → CTA "¿Tienes un proyecto parecido?" → Contacto.

## Sobre mí (sección)

Patrón de "líneas de flujo" del logo (tres entradas a 60°, tallo y rama rosa a 45°) como fondo decorativo centrado en la sección (horizontal y verticalmente), detrás del texto, con tonos atenuados (el rosa también) para no restar contraste. Foto, quién soy y valores; **servicios** (UX/UI, Front, Backend); cómo trabajo (incluye la nota sobre Claude Code); y **En aprendizaje**.

## Recursos (sección)

Filtros por disciplina y tres bloques:
- **Mis guías** (PDF de descarga libre, con portada y descripción de una línea)
- **Mis videos** (incrustados desde YouTube/Vimeo)
- **Recomendados** (extensiones, videos y herramientas de otros, cada uno con una nota propia)

## Contacto (sección)

Formulario corto, correo directo y, opcionalmente, enlace para agendar llamada. El patrón de "líneas de flujo" aparece como fondo decorativo en el centro, igual que en Sobre mí.

## Flujos

```
Principal:
Inicio → #proyectos (cover flow) → proyecto.html → #contacto
                  └→ Ver todos → proyectos.html (filtros) → proyecto.html → #contacto

Cliente con prisa:      Inicio → #sobre-mi (servicios) → #contacto
Quien duda:             Inicio → #sobre-mi → #proyectos → #contacto
Curioso o colega:       #recursos → #proyectos → #contacto
```

## Reglas transversales

- Contacto accesible desde el menú, el hero y al final de cada detalle de proyecto.
- Redes fijas a la derecha (escritorio) y en el pie de todas las páginas.
- El patrón de líneas de flujo se usa solo en Sobre mí y Contacto, nunca en el hero.
- Cover flow: sin autoplay, con flechas visibles, teclado y deslizamiento. Carga de imágenes solo cercanas a la activa.
- Respetar `prefers-reduced-motion` (también en el desplazamiento suave).
- Stack por proyecto en lugar de franja de logos.
- **Idioma:** solo español, sin selector de idioma.
- **Tema:** claro y oscuro. Respeta `prefers-color-scheme` por defecto; el icono sol/luna del hero lo cambia y la elección se recuerda. Las imágenes y el logo tienen versión para ambos fondos.
- **Guías PDF:** descarga libre, sin pedir correo.

## Etiquetas de tecnología (lista cerrada, v1)

Una etiqueta solo se usa si hay un proyecto real que la respalde. La lista crece cuando se publica el primer proyecto con una tecnología nueva.

| Disciplina | Etiquetas |
|---|---|
| UX/UI | Figma |
| Front | HTML, CSS |
| Backend | Python, Java, SQL |
| Infraestructura | Docker |
| Herramientas | Claude Code |

Escritura canónica: `HTML`, `CSS`, `Python`, `Java`, `SQL`, `Docker`, `Figma`, `Claude Code`.

**En aprendizaje** (bloque dentro de Sobre mí, no son etiquetas de filtro hasta tener proyecto): se rellena con lo que se esté estudiando.

## Uso de IA (transparencia por proyecto)

Cada proyecto lleva **una** etiqueta de nivel, visible desde el lanzamiento:

| Etiqueta | Significado |
|---|---|
| **Sin IA** | Diseñado y programado sin asistentes de IA. |
| **Asistido por IA** | Yo diseño y decido; la IA ayuda a acelerar (código, revisión, documentación) y reviso todo. |
| **Generado con IA** | La IA produjo la mayor parte; yo dirijo, integro y valido. |

- **Tarjeta:** etiqueta pequeña, sin competir con el stack.
- **Detalle:** bloque "Uso de IA" con una frase de qué hizo la IA y qué hice yo, y las herramientas usadas (ej. Claude Code).
- **Filtro:** se activa como cuarto filtro cuando haya 8 o más proyectos; hasta entonces solo la etiqueta.
- **Tono:** como proceso, no como disculpa ("Asistido por IA, revisado por mí").
- **Proyectos comerciales:** confirmar con el cliente que se puede publicar el uso de IA.

## Pendientes

- Confirmar que cada etiqueta tiene al menos un proyecto que la respalde (si no, queda en "En aprendizaje").
