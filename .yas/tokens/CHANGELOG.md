# Registro de cambios de tokens

## 2026-10-21 · `/yas-figma mini` (creación)
- **Fuente:** `paleta/paleta.md` y `manual/manual-identidad.md` v1.1.
- **extracted:** 8 colores primitivos, familias, pesos, tamaños y interlineados de la escala tipográfica, interletraje de etiqueta.
- **inferred (aprobado por el usuario el 2026-10-21):** espaciado base 4, radios, sombras, cuadrículas y breakpoints, roles semánticos de color (superficie, texto, borde, acción primaria), interlineado de cifras.
- **missing (pendiente de definir):** `text.disabled`, `action.primary.{hover,pressed,disabled}`, `action.secondary`, `feedback.*`, set de iconos, tamaño de la línea de apoyo.

## 2026-10-21 · `/yas-figma colors` (derivación de roles pendientes)
- **inferred (propuesta aprobada por el usuario el 2026-10-21), reglas de `tokens-spec.md`:** `text.disabled`; `action.primary.{hover,pressed,disabled}`; `action.secondary.{bg,fg,border,hover,pressed}`; `icon.{default,strong,subtle,disabled,inverse,brand}`; `feedback.{success,warning,error,info}.{bg,fg,border}`.
- **Primitivas nuevas:** `azul-marino-oscuro-1/2`, `azul-marino-claro`, `rosa-claro-1/2`, `pizarra-60` y 24 tonos de feedback (`success|warning|error|info` × 50, 100, 400, 600, 900, 950). Solo varía la luminosidad de los matices de la paleta, salvo feedback (excepción de matiz).
- **Sin cambios** en las 8 primitivas ni en los tokens aprobados antes.
- **Contraste:** `.yas/tokens/contraste.md` regenerado con los pares nuevos.
- **Pendiente:** set de iconos (dibujos) y tamaño de la línea de apoyo; `design-system.html` no se ha regenerado.
- **Corrección sobre la propuesta aprobada:** `action.secondary.fg` en oscuro usa `text.primary` (Niebla) en lugar de Rosa, porque Rosa sobre el hover (Azul marino) daba 3,19 y sobre el pressed 2,65, por debajo de 4,5. El borde sigue en Rosa.
