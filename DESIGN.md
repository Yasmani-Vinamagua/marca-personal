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
typography:
  display:
    fontFamily: "Nunito, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.85rem, 3.95vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
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
rounded:
  card: "14px"
  field: "16px"
  nav: "30px"
  panel: "28px"
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
    backgroundColor: "#E4E6EC"
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
---

# Design System: Yasmani Viñamagua · Web personal

## Overview

**Creative North Star: "El Cristal Sobrio"**

Superficies de vidrio translúcido sobre un fondo calmado de manchas suaves, con una sola voz de acento: el rosa de la marca. Es un sistema sobrio, confiable y tecnológico: el cristal da profundidad y modernidad, pero nunca compite con el contenido. La personalidad viene del manual de identidad (innovadora y tecnológica, confiable y sobria) y se expresa en detalles precisos, no en efectos.

El tema claro y el nocturno comparten el mismo lenguaje: en claro, manchas de blanco a gris niebla sobre blanco; en nocturno, manchas de gris oscuro a casi negro sobre `#000`. El azul marino es el color de acción en claro; en nocturno la acción es rosa. El recurso de líneas de flujo del logo aparece como figura decorativa atenuada detrás del texto.

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
- **Línea** (#E3E7F0) y **Bruma** (#C9D0E6): superficies de etiquetas y trazo de las líneas de flujo en nocturno.
- **Negro** (#000000): fondo del tema nocturno; las superficies suben a blanco 6 % y 12 % sobre negro.

### Named Rules
**The One Voice Rule.** El rosa es el único acento y se reserva para estados y foco, nunca para bloques grandes de texto.
**The Dark Pink Rule.** Sobre fondo claro el rosa de texto es `#C20F4F`; `#FF1563` queda para rellenos y trazos.

## Typography

**Display Font:** Nunito (con Segoe UI, system-ui)
**Body Font:** Manrope (con Segoe UI, system-ui)

**Character:** Nunito redondea y humaniza los titulares; Manrope aporta una lectura limpia y técnica en los párrafos. Los pesos 800 de los títulos con tracking negativo dan firmeza sin estridencia.

### Hierarchy
- **Display** (800, `clamp(1.85rem, 3.95vw, 3.6rem)`, 1.08): titular del hero, con un fragmento resaltado.
- **Headline** (800, `clamp(1.75rem, 3vw, 2.5rem)`, 1.12): títulos de sección y de servicio.
- **Title** (700, 1.75rem, 1.3): bloques como "Servicios" y "Cómo trabajo".
- **Subtitle** (600, 1.25rem, 1.4): subtítulo del hero y enlaces del menú.
- **Body** (400, 1rem, 1.625): párrafos con ancho máximo de 60ch.
- **Label** (500, 0.875rem): etiquetas, contadores y notas.

### Named Rules
**The Balanced Headline Rule.** Todos los titulares usan `text-wrap: balance`; los títulos de subpágina llegan a tamaño de pantalla (`clamp(3rem, 8vw, 7.5rem)`).

## Layout

Una columna de contenido con un carril lateral de 10rem en pantallas anchas que reserva el espacio del menú fijo; en móvil el carril desaparece y el menú pasa a una píldora superior. Las secciones respiran con `clamp(5rem, 11vw, 9rem)` de padding vertical y un ancho máximo de 1440px. Las rejillas de 2 o 3 columnas colapsan a una a 900px. La figura de flujo se coloca por sección: a la derecha del texto en el hero, a la derecha del bloque de presentación en Sobre mí y detrás del texto, a la izquierda del formulario, en Contacto.

## Elevation & Depth

Híbrido: el cristal está en reposo, no solo como respuesta a estados. Los controles y paneles son translúcidos con desenfoque y saturación, con un borde de luz interior (resalte arriba-izquierda, sombra clara abajo-derecha) y una sombra difusa. El menú vertical es la excepción: va sin fondo ni borde en escritorio.

### Shadow Vocabulary
- **Cristal en reposo** (`inset 2px 2px 1px -1px rim-hi, inset -2px -2px 1px -1px rim-lo, inset 0 0 0 1px rim-line, 0 12px 32px -8px glass-drop`): botones, chips, redes y paneles.
- **Cristal pulsado** (`... inset 0 0 0 1px rim-hi, 0 6px 18px -8px glass-drop`): estado `:active`, con escala 0.95.

### Named Rules
**The Calm Glass Rule.** El cristal nunca reduce el contraste del texto; el relleno sólido manda en las acciones principales.

## Shapes

Lenguaje de píldoras y esquinas generosas: píldora completa en botones y chips (999px), 14px en imágenes y tarjetas, 16px en campos, 28px en paneles de cristal y 30px en el menú. La figura de flujo usa trazos de extremos redondeados de 12 unidades sobre una malla de 200, con tres entradas paralelas, tallo y rama rosa.

## Components

### Buttons
- **Shape:** píldora (999px), 52 px de alto mínimo.
- **Primary:** azul marino sólido con texto blanco en claro; rosa con texto blanco en nocturno. Padding `1rem 1.7rem`.
- **Hover / Focus:** sube 2px y escala 1.02; foco con contorno rosa de 3px a 3px de separación.
- **Secondary:** azul marino al 12 % sobre blanco, texto azul marino; se oscurece al pasar el cursor.

### Chips
- **Style:** píldora de 44 px de alto, fondo `Línea`, texto de tinta.
- **State:** el seleccionado va sólido (`aria-pressed="true"`); el desactivado baja a 55 % de opacidad.

### Cards / Containers
- **Corner Style:** 14px (imágenes y tarjetas), 28px (paneles de cristal).
- **Background:** fondo alterno translúcido en secciones; panel de cristal en el formulario.
- **Internal Padding:** `clamp(1.75rem, 4vw, 3.5rem)` en paneles.

### Inputs / Fields
- **Style:** 16px de radio, relleno translúcido (fondo al 60 %) con desenfoque y borde de luz interior.
- **Focus:** contorno rosa de 3px; error con contorno rosa de 2px y mensaje con viñeta rosa debajo.

### Navigation
- Menú vertical fijo a la izquierda, centrado en altura y sin fondo en escritorio; píldora horizontal translúcida arriba en móvil. Enlaces Manrope 500; el activo va en negrita y color de acento. Cada enlace mide al menos 44 px de alto.

### Figura de flujo (componente firma)
- Tres líneas paralelas atenuadas, un tallo y una rama rosa, derivadas del símbolo; opacidades 0.26, 0.15 y 0.09 en las líneas y 0.22 en la rama. Solo decoración, siempre detrás del texto.

## Do's and Don'ts

### Do:
- **Do** usar el azul marino sólido para la acción principal en claro y el rosa en nocturno.
- **Do** mantener el contraste del texto en 4,5:1 o más, también sobre el cristal.
- **Do** colocar la figura de flujo detrás del contenido y atenuada.
- **Do** respetar `prefers-reduced-motion` en cada animación.

### Don't:
- **Don't** usar degradados morados, tarjetas idénticas repetidas ni iconos dentro de círculos de color (plantilla SaaS genérica).
- **Don't** apilar animaciones ni efectos que compitan con el contenido (portafolio recargado).
- **Don't** usar `#FF1563` como color de texto pequeño sobre fondo claro.
- **Don't** volver al azul oscuro como fondo del modo nocturno: el fondo es negro.
