---
name: Yasmani Viñamagua · Web personal
description: Portafolio sobrio y tecnológico en cristal translúcido sobre fondo calmado, con un único acento rosa.
colors:
  azul-marino: "#223367"
  rosa: "#FF1563"
  rosa-texto: "#C20F4F"
  rosa-texto-nocturno: "#FF4885"
  medianoche: "#0D1530"
  pizarra: "#5B6478"
  niebla: "#F2F4F8"
  blanco: "#FFFFFF"
  linea: "#E3E7F0"
  bruma: "#C9D0E6"
  negro: "#000000"
  mancha-clara-borde: "#DDE2EE"
  mancha-clara-borde-suave: "#E3E7F1"
  mancha-nocturna-centro: "#3A3A3A"
  mancha-nocturna-media: "#333333"
  mancha-nocturna-borde: "#0B0B0B"
  mancha-nocturna-negra: "#080808"
typography:
  display:
    fontFamily: "Nunito, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.85rem, 3.95vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  display-tablet:
    fontFamily: "Nunito, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.85rem, 4.4vw, 3.3rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  display-compact:
    fontFamily: "Nunito, Segoe UI, system-ui, sans-serif"
    fontSize: "1.55rem"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  page-title:
    fontFamily: "Nunito, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8vw, 7.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  case-title:
    fontFamily: "Nunito, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 5.4vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Nunito, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Nunito, Segoe UI, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  subtitle:
    fontFamily: "Nunito, Segoe UI, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Manrope, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Manrope, Segoe UI, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
  nav-compact:
    fontFamily: "Manrope, Segoe UI, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 500
    lineHeight: 1.2
rounded:
  xs: "4px"
  sm: "8px"
  md: "10px"
  card: "14px"
  field: "16px"
  panel: "28px"
  nav: "30px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2rem)"
  section: "clamp(5rem, 11vw, 9rem)"
  rail: "10rem"
components:
  button-primary:
    backgroundColor: "{colors.azul-marino}"
    textColor: "{colors.blanco}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "1rem 1.7rem"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.azul-marino}"
    textColor: "{colors.blanco}"
  button-secondary:
    backgroundColor: "{colors.linea}"
    textColor: "{colors.azul-marino}"
    rounded: "{rounded.pill}"
    padding: "1rem 1.7rem"
    height: "52px"
  chip:
    backgroundColor: "{colors.linea}"
    textColor: "{colors.medianoche}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.1rem"
    height: "44px"
  chip-selected:
    backgroundColor: "{colors.azul-marino}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.pill}"
  glass-panel:
    backgroundColor: "rgba(255,255,255,0.16)"
    rounded: "{rounded.panel}"
    padding: "clamp(1.75rem, 4vw, 3.5rem)"
  field:
    backgroundColor: "rgba(255,255,255,0.6)"
    textColor: "{colors.medianoche}"
    rounded: "{rounded.field}"
    padding: "0.85rem 1.1rem"
  dropdown-button:
    backgroundColor: "rgba(255,255,255,0.6)"
    textColor: "{colors.medianoche}"
    rounded: "{rounded.field}"
    padding: "0.85rem 1.1rem"
    height: "52px"
  dropdown-option:
    textColor: "{colors.medianoche}"
    rounded: "{rounded.md}"
    padding: "0.5rem 0.8rem"
    height: "44px"
  nav-link:
    textColor: "{colors.medianoche}"
    typography: "{typography.body}"
    height: "44px"
---

# Design System: Yasmani Viñamagua · Web personal

## Overview

**Creative North Star: "El Cristal Sobrio"**

Superficies de vidrio translúcido sobre un fondo calmado de manchas suaves, con una sola voz de acento: el rosa de la marca. Es un sistema sobrio, confiable y tecnológico: el cristal da profundidad y modernidad, pero nunca compite con el contenido. La personalidad viene del manual de identidad (innovadora y tecnológica, confiable y sobria) y se expresa en detalles precisos, no en efectos.

El tema claro y el nocturno comparten el mismo lenguaje: en claro, manchas de blanco a gris niebla sobre blanco; en nocturno, manchas de gris oscuro a casi negro sobre `#000`. El azul marino es el color de acción en claro; en nocturno la acción es rosa. El recurso de líneas de flujo del logo aparece como figura decorativa atenuada detrás del texto, solo donde hay hueco libre.

Se rechazan expresamente la plantilla SaaS genérica (degradados morados, tarjetas idénticas, iconos en círculo) y el portafolio recargado (animaciones por todas partes, efectos que compiten con el contenido).

**Key Characteristics:**
- Cristal con borde de luz interior sobre fondo calmado.
- Un solo acento (rosa), usado con escasez.
- Botones táctiles en píldora, de 44–52 px.
- Títulos en Nunito 800 con tracking negativo; texto en Manrope.
- Movimiento contenido: entradas suaves y respeto total de `prefers-reduced-motion`.

## Colors

Una paleta de azul marino y rosa sobre neutros fríos; el negro puro sustituye al azul oscuro en modo nocturno.

### Primary
- **Azul marino de marca** (#223367): títulos, botón principal y chip activo en tema claro, tinta de los logotipos.
- **Rosa de firma** (#FF1563): acento de relleno (rama del recurso de flujo, foco, punto de etiqueta, botón principal nocturno, selección de texto). Nunca como texto pequeño sobre blanco.

### Secondary
- **Rosa de texto** (#C20F4F): versión oscurecida del rosa para texto y enlaces en tema claro (unos 6:1 sobre blanco).
- **Rosa de texto nocturno** (#FF4885): rosa +10 % legible sobre vidrio oscuro.

### Neutral
- **Medianoche** (#0D1530): tinta del texto en claro; ya no es fondo del modo nocturno.
- **Pizarra** (#5B6478): texto secundario en claro.
- **Niebla** (#F2F4F8): fondo alterno claro y tinta del texto en nocturno.
- **Blanco** (#FFFFFF): fondo claro y texto sobre acciones.
- **Línea** (#E3E7F0) y **Bruma** (#C9D0E6): superficies de etiquetas y botón secundario; Bruma, además, es el trazo de las líneas de flujo en nocturno.
- **Negro** (#000000): fondo del tema nocturno; las superficies suben a blanco 6 % y 12 % sobre negro.

### Fondo ambiente
- **Manchas claras** (#FFFFFF a #DDE2EE y #E3E7F1): degradados radiales de blanco a gris niebla azulado, sobre blanco.
- **Manchas nocturnas** (#3A3A3A y #333333 en el centro, #0B0B0B y #080808 en el borde): degradados radiales de gris oscuro a casi negro, sobre negro.

### Named Rules
**The One Voice Rule.** El rosa es el único acento y se reserva para estados y foco, nunca para bloques grandes de texto.
**The Dark Pink Rule.** Sobre fondo claro el rosa de texto es `#C20F4F`; `#FF1563` queda para rellenos y trazos.
**The Neutral Glow Rule.** El fondo ambiente nunca introduce un tercer matiz: gris niebla en claro, gris carbón en nocturno.

## Typography

**Display Font:** Nunito (con Segoe UI, system-ui)
**Body Font:** Manrope (con Segoe UI, system-ui)

**Character:** Nunito redondea y humaniza los titulares; Manrope aporta una lectura limpia y técnica en los párrafos. Los pesos 800 de los títulos con tracking negativo dan firmeza sin estridencia. Ambas se sirven en WOFF2 reducido al alfabeto latino, con `font-display: swap`.

### Hierarchy
- **Display** (800, `clamp(1.85rem, 3.95vw, 3.6rem)`, 1.08): titular del hero, con un fragmento resaltado. En ≤ 900 px baja a `clamp(1.85rem, 4.4vw, 3.3rem)` y por debajo de 360 px a 1.55rem para que el fragmento resaltado no se recorte.
- **Page title** (800, `clamp(3rem, 8vw, 7.5rem)`, 0.95): título de las subpáginas, a tamaño de pantalla. En el detalle de proyecto (case title) es `clamp(2.2rem, 5.4vw, 5rem)`.
- **Headline** (800, `clamp(1.75rem, 3vw, 2.5rem)`, 1.12): títulos de sección y de servicio; también los títulos de las tarjetas de proyecto, en peso 700.
- **Title** (700, 1.75rem, 1.3): bloques como "Servicios" y "Cómo trabajo".
- **Subtitle** (600, 1.25rem, 1.4): subtítulo del hero.
- **Body** (400, 1rem, 1.625): párrafos con ancho máximo de 60ch; el menú usa Manrope 500.
- **Label** (500, 0.875rem): etiquetas, contadores y notas; el menú móvil baja a 0.85rem y en ≤ 380 px a 0.78rem.

### Named Rules
**The Balanced Headline Rule.** Todos los titulares usan `text-wrap: balance`.

## Layout

Una columna de contenido con un carril lateral de 10rem en pantallas anchas que reserva el espacio del menú fijo; en móvil el carril desaparece y el menú pasa a una píldora superior. Las secciones respiran con `clamp(5rem, 11vw, 9rem)` de padding vertical y un ancho máximo de 1440px. Las rejillas de 2 o 3 columnas colapsan a una a 900px.

La figura de flujo se coloca por sección y solo aparece donde hay hueco libre: a la derecha del texto en el hero (desde 1100 px; nunca en móvil ni tablet), a la derecha del bloque de presentación en Sobre mí (oculta entre 901 y 1279 px, donde el texto ocupa todo el ancho) y detrás del texto, a la izquierda del formulario, en Contacto (más tenue en móvil, detrás del panel). Los puntos de corte son 380, 900, 1100 y 1280 px.

## Elevation & Depth

Híbrido: el cristal está en reposo, no solo como respuesta a estados. Los controles son translúcidos y los paneles de cristal añaden desenfoque y saturación (el desenfoque se reserva a los paneles y a la píldora del menú móvil por rendimiento), todos con un borde de luz interior (resalte arriba-izquierda, sombra clara abajo-derecha) y una sombra difusa. El menú vertical de escritorio va sin fondo ni borde. El desplegable abierto es opaco, con borde fino y sombra más profunda.

### Shadow Vocabulary
- **Cristal en reposo** (`inset 2px 2px 1px -1px rim-hi, inset -2px -2px 1px -1px rim-lo, inset 0 0 0 1px rim-line, 0 12px 32px -8px glass-drop`): botones, chips, redes y paneles.
- **Cristal pulsado** (`... inset 0 0 0 1px rim-hi, 0 6px 18px -8px glass-drop`): estado `:active`, con escala 0.95.
- **Lista flotante** (`inset 0 0 0 1px rim-line, 0 0 0 1px ink 10 %, 0 18px 40px -12px glass-drop`): lista del desplegable.

### Named Rules
**The Calm Glass Rule.** El cristal nunca reduce el contraste del texto; el relleno sólido manda en las acciones principales.

## Shapes

Lenguaje de píldoras y esquinas generosas: píldora completa en botones y chips (999px), 14px en imágenes y tarjetas, 16px en campos y en la lista del desplegable, 28px en paneles de cristal y 30px en el menú de escritorio. Los círculos (50 %) se reservan a botones de tema, redes y botones del carrusel. Las esquinas pequeñas (4px en el foco y el resaltado, 8px en miniaturas de guías, 10px en opciones del desplegable y filas alternas del stack) son de apoyo. La figura de flujo usa trazos de extremos redondeados de 12 unidades sobre una malla de 200, con tres entradas paralelas, tallo y rama rosa.

## Components

### Buttons
- **Shape:** píldora (999px), 52 px de alto mínimo.
- **Primary:** azul marino sólido con texto blanco en claro; rosa con texto blanco en nocturno. Padding `1rem 1.7rem`.
- **Hover / Focus:** sube 2px y escala 1.02 (solo con puntero; en táctil no se queda pegado); foco con contorno rosa de 3px a 3px de separación.
- **Secondary:** relleno `Línea` sólido con texto azul marino; al pasar el cursor pasa a azul marino al 22 % sobre blanco en claro y a cristal tenue en nocturno.
- **Disabled:** 60 % de opacidad y cursor de progreso (envío en curso).

### Chips
- **Style:** píldora de 44 px de alto, fondo `Línea`, texto de tinta.
- **State:** el seleccionado va sólido (`aria-pressed="true"`); el desactivado baja a 55 % de opacidad.

### Cards / Containers
- **Corner Style:** 14px (imágenes y tarjetas), 28px (paneles de cristal).
- **Background:** fondo alterno translúcido en secciones; panel de cristal en el formulario.
- **Internal Padding:** `clamp(1.75rem, 4vw, 3.5rem)` en paneles.

### Inputs / Fields
- **Style:** 16px de radio, relleno translúcido (fondo al 60 %) con borde de luz interior, sin desenfoque. Etiqueta visible encima, a 0.4rem de distancia.
- **Focus:** contorno rosa de 3px; error con contorno rosa de 2px y mensaje con viñeta rosa debajo, enlazado con `aria-describedby`.
- **Mensaje:** el área de texto se rellena con una plantilla según el tipo de proyecto (máximo 1000 caracteres) y no se puede enviar sin completarla.

### Desplegable (Tipo de proyecto)
- **Botón:** mismo aspecto que un campo, con una flecha que gira 180° al abrir; 52 px de alto.
- **Lista:** panel opaco de 16px de radio con opciones de 44 px; la activa en `Línea`, la elegida en negrita con una marca rosa. Se abre hacia arriba si abajo no hay espacio.
- **Comportamiento:** patrón de lista desplegable accesible (flechas, Inicio/Fin, Enter, Esc, escribir para saltar); sin JavaScript queda el `select` nativo.

### Navigation
- Menú vertical fijo a la izquierda, centrado en altura y sin fondo en escritorio; píldora horizontal translúcida arriba en móvil, con desplazamiento horizontal como red de seguridad en pantallas muy estrechas. Enlaces Manrope 500; el activo va en negrita y color de acento. Cada enlace mide al menos 44 px de alto.

### Figura de flujo (componente firma)
- Tres líneas paralelas atenuadas, un tallo y una rama rosa, derivadas del símbolo; opacidades 0.26, 0.15 y 0.09 en las líneas y 0.22 en la rama. Solo decoración, siempre detrás del texto.

## Do's and Don'ts

### Do:
- **Do** usar el azul marino sólido para la acción principal en claro y el rosa en nocturno.
- **Do** mantener el contraste del texto en 4,5:1 o más, también sobre el cristal.
- **Do** colocar la figura de flujo detrás del contenido, atenuada y solo donde hay hueco libre.
- **Do** respetar `prefers-reduced-motion` en cada animación.
- **Do** dejar el desenfoque para los paneles de cristal.

### Don't:
- **Don't** usar degradados morados, tarjetas idénticas repetidas ni iconos dentro de círculos de color (plantilla SaaS genérica).
- **Don't** apilar animaciones ni efectos que compitan con el contenido (portafolio recargado).
- **Don't** usar `#FF1563` como color de texto pequeño sobre fondo claro.
- **Don't** volver al azul oscuro como fondo del modo nocturno: el fondo es negro.
