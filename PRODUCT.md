# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Clientes potenciales de un freelance: dueños de pymes y negocios locales sin equipo técnico, y startups o equipos de producto que necesitan diseño y desarrollo sin contratar a tiempo completo. Llegan a la web para decidir si confían en Yasmani y, si es así, escribirle por WhatsApp. Contactar es la única acción principal.

## Product Purpose

Portafolio y landing personal de Yasmani Viñamagua, ingeniero especializado en innovación y automatización de procesos mediante tecnología. Muestra proyectos personales y comerciales (UX/UI, Front, Backend) para que un cliente confíe y contacte. Éxito: un mensaje de WhatsApp con una propuesta de proyecto.

## Positioning

Convierte procesos manuales y lentos en herramientas que funcionan solas: la automatización de procesos reales, apoyada en una formación de ingeniero, es el eje. Cubre además el ciclo completo, del diseño en Figma al servidor, y es transparente sobre el uso de IA (qué hizo la IA y qué hizo él en cada proyecto).

## Operating Context

- Landing de una página con scroll (`web/index.html`: Inicio, Proyectos, Sobre mí, Recursos, Contacto) más `proyectos.html` (cuadrícula con filtros) y `proyecto.html` (detalle). Estructura y reglas en `docs/user-flow.md`.
- Sin servidor: el formulario abre WhatsApp (`wa.me`) con el mensaje escrito. El número está configurado en `data-wa` del formulario.
- HTML, CSS y JS planos, sin dependencias; tema claro y oscuro con interruptor.
- Idioma de la web: español.

## Capabilities and Constraints

- UX/UI, Front y Backend no son páginas: son filtros en Proyectos y Recursos y bloques en Servicios.
- Servicios: UX/UI (prototipo y sistema de diseño en Figma), Front (HTML y CSS accesibles), Backend (automatizaciones, bases de datos y servicios en Python, Java y SQL).
- Cada proyecto declara su uso de IA (Sin IA, Asistido por IA, Generado con IA); el filtro de IA se activa con 8 o más proyectos.
- Uso de Claude Code para acelerar el desarrollo, con revisión humana de cada entrega.
- Ya resueltos: número de WhatsApp y enlaces de redes (LinkedIn, GitHub, Figma, Instagram).
- Pendientes de producto: descargas y vídeos reales, y retirar o marcar como provisional el contenido de ejemplo (resultados, clientes y plantillas) antes de publicar. Cada tarjeta del carrusel debe abrir su propio caso.

## Brand Commitments

Marca personal v1.1 (manual en `manual/`, spec en `marca-spec.md`): monograma A + Y, valores responsabilidad, honestidad y lealtad; personalidad innovadora y tecnológica, confiable y sobria. Paleta: azul marino `#223367`, rosa `#FF1563`, medianoche `#0D1530`, pizarra `#5B6478`, niebla `#F2F4F8`, blanco. Tipografías Nunito (títulos) y Manrope (texto). Recurso gráfico de líneas de flujo según `aplicaciones/recurso-flujo.svg`.

## Evidence on Hand

Aún no hay proyectos reales. Los proyectos A–F, las guías, los vídeos, los recomendados, la foto y los textos de caso son provisionales; no inventar clientes, cifras, testimonios ni resultados. Existen el logotipo, el manual, la paleta y los vídeos de animación del logo en este repositorio.

## Product Principles

1. Contactar es la única acción principal; todo lo demás la apoya.
2. La automatización de procesos reales es el eje del mensaje.
3. Honestidad ante todo: nada de pruebas inventadas y el uso de IA siempre declarado.
4. Sobrio y confiable antes que llamativo; la marca vive en los detalles.
5. Funciona igual en móvil y en escritorio, y en tema claro y oscuro.

## Accessibility & Inclusion

Contraste mínimo 4,5:1 en texto, objetivos táctiles de al menos 44 px, foco visible, navegación por teclado y `prefers-reduced-motion` respetado.
