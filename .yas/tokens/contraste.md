# Contraste de los tokens semánticos

Actualizado 2026-10-21 por `/yas-figma colors`. Fórmula WCAG 2.x de `criterios-calidad.md` (luminancia relativa; ratio = (L claro + 0,05) / (L oscuro + 0,05)). Umbrales: 4,5 para texto y 3 para componentes de interfaz. Estado: **calculado**; no se ha medido con perfil de pantalla.

## Modo Light

| Primer plano | Fondo | Ratio | Umbral | Resultado |
|---|---|---|---|---|
| `text.primary` #0D1530 | `surface.default` #FFFFFF | 17,99 | 4,5 (texto) | cumple |
| `text.primary` #0D1530 | `surface.subtle` #F2F4F8 | 16,34 | 4,5 (texto) | cumple |
| `text.secondary` #5B6478 | `surface.default` #FFFFFF | 5,93 | 4,5 (texto) | cumple |
| `text.secondary` #5B6478 | `surface.subtle` #F2F4F8 | 5,39 | 4,5 (texto) | cumple |
| `text.inverse` #FFFFFF | `surface.inverse` #0D1530 | 17,99 | 4,5 (texto) | cumple |
| `text.link` #223367 | `surface.default` #FFFFFF | 12,09 | 4,5 (texto) | cumple |
| `action.primary.fg` #FFFFFF | `action.primary.bg` #223367 | 12,09 | 4,5 (texto) | cumple |
| `action.primary.fg` #FFFFFF | `action.primary.hover` #1A2850 | 14,35 | 4,5 (texto) | cumple |
| `action.primary.fg` #FFFFFF | `action.primary.pressed` #152041 | 15,97 | 4,5 (texto) | cumple |
| `action.secondary.fg` #223367 | `action.secondary.bg` #FFFFFF | 12,09 | 4,5 (texto) | cumple |
| `action.secondary.fg` #223367 | `action.secondary.hover` #F2F4F8 | 10,98 | 4,5 (texto) | cumple |
| `action.secondary.fg` #223367 | `action.secondary.pressed` #E3E7F0 | 9,76 | 4,5 (texto) | cumple |
| `border.strong` #5B6478 | `surface.default` #FFFFFF | 5,93 | 3 (componente de interfaz) | cumple |
| `border.focus` #FF1563 | `surface.default` #FFFFFF | 3,79 | 3 (componente de interfaz) | cumple |
| `action.secondary.border` #223367 | `surface.default` #FFFFFF | 12,09 | 3 (componente de interfaz) | cumple |
| `icon.default` #5B6478 | `surface.default` #FFFFFF | 5,93 | 3 (componente de interfaz) | cumple |
| `icon.strong` #0D1530 | `surface.default` #FFFFFF | 17,99 | 3 (componente de interfaz) | cumple |
| `icon.subtle` #5B6478 | `surface.default` #FFFFFF | 5,93 | 3 (componente de interfaz) | cumple |
| `icon.brand` #223367 | `surface.default` #FFFFFF | 12,09 | 3 (componente de interfaz) | cumple |
| `feedback.success.fg` #145235 | `feedback.success.bg` #E7F8F0 | 8,34 | 4,5 (texto) | cumple |
| `feedback.warning.fg` #523B14 | `feedback.warning.bg` #F8F2E7 | 9,45 | 4,5 (texto) | cumple |
| `feedback.error.fg` #521814 | `feedback.error.bg` #F8E8E7 | 11,80 | 4,5 (texto) | cumple |
| `feedback.info.fg` #142F52 | `feedback.info.bg` #E7EFF8 | 11,62 | 4,5 (texto) | cumple |
| `feedback.success.border` #25935F | `surface.default` #FFFFFF | 3,88 | 3 (componente de interfaz) | cumple |
| `feedback.warning.border` #835F21 | `surface.default` #FFFFFF | 5,79 | 3 (componente de interfaz) | cumple |
| `feedback.error.border` #932C25 | `surface.default` #FFFFFF | 7,99 | 3 (componente de interfaz) | cumple |
| `feedback.info.border` #255493 | `surface.default` #FFFFFF | 7,59 | 3 (componente de interfaz) | cumple |

- Informativo, exento de AA (deshabilitado): `text.disabled` #9DA2AE sobre `surface.default` #FFFFFF = 2,56
- Informativo, exento de AA (deshabilitado): `icon.disabled` #9DA2AE sobre `surface.default` #FFFFFF = 2,56

## Modo Dark

| Primer plano | Fondo | Ratio | Umbral | Resultado |
|---|---|---|---|---|
| `text.primary` #F2F4F8 | `surface.default` #0D1530 | 16,34 | 4,5 (texto) | cumple |
| `text.primary` #F2F4F8 | `surface.subtle` #223367 | 10,98 | 4,5 (texto) | cumple |
| `text.secondary` #C9D0E6 | `surface.default` #0D1530 | 11,69 | 4,5 (texto) | cumple |
| `text.secondary` #C9D0E6 | `surface.subtle` #223367 | 7,86 | 4,5 (texto) | cumple |
| `text.inverse` #0D1530 | `surface.inverse` #F2F4F8 | 16,34 | 4,5 (texto) | cumple |
| `text.link` #FF1563 | `surface.default` #0D1530 | 4,75 | 4,5 (texto) | cumple |
| `action.primary.fg` #0D1530 | `action.primary.bg` #FF1563 | 4,75 | 4,5 (texto) | cumple |
| `action.primary.fg` #0D1530 | `action.primary.hover` #FF3477 | 5,15 | 4,5 (texto) | cumple |
| `action.primary.fg` #0D1530 | `action.primary.pressed` #FF4885 | 5,58 | 4,5 (texto) | cumple |
| `action.secondary.fg` #F2F4F8 | `action.secondary.bg` #0D1530 | 16,34 | 4,5 (texto) | cumple |
| `action.secondary.fg` #F2F4F8 | `action.secondary.hover` #223367 | 10,98 | 4,5 (texto) | cumple |
| `action.secondary.fg` #F2F4F8 | `action.secondary.pressed` #2A3E7E | 9,13 | 4,5 (texto) | cumple |
| `border.strong` #5B6478 | `surface.default` #0D1530 | 3,03 | 3 (componente de interfaz) | cumple |
| `border.focus` #FF1563 | `surface.default` #0D1530 | 4,75 | 3 (componente de interfaz) | cumple |
| `action.secondary.border` #FF1563 | `surface.default` #0D1530 | 4,75 | 3 (componente de interfaz) | cumple |
| `icon.default` #C9D0E6 | `surface.default` #0D1530 | 11,69 | 3 (componente de interfaz) | cumple |
| `icon.strong` #F2F4F8 | `surface.default` #0D1530 | 16,34 | 3 (componente de interfaz) | cumple |
| `icon.subtle` #5B6478 | `surface.default` #0D1530 | 3,03 | 3 (componente de interfaz) | cumple |
| `icon.brand` #FF1563 | `surface.default` #0D1530 | 4,75 | 3 (componente de interfaz) | cumple |
| `feedback.success.fg` #C2F0DA | `feedback.success.bg` #153727 | 10,43 | 4,5 (texto) | cumple |
| `feedback.warning.fg` #F0DFC2 | `feedback.warning.bg` #372B15 | 10,56 | 4,5 (texto) | cumple |
| `feedback.error.fg` #F0C5C2 | `feedback.error.bg` #371715 | 10,40 | 4,5 (texto) | cumple |
| `feedback.info.fg` #C2D6F0 | `feedback.info.bg` #152437 | 10,58 | 4,5 (texto) | cumple |
| `feedback.success.border` #54D498 | `surface.default` #0D1530 | 9,64 | 3 (componente de interfaz) | cumple |
| `feedback.warning.border` #D4A554 | `surface.default` #0D1530 | 7,98 | 3 (componente de interfaz) | cumple |
| `feedback.error.border` #D45C54 | `surface.default` #0D1530 | 4,68 | 3 (componente de interfaz) | cumple |
| `feedback.info.border` #548BD4 | `surface.default` #0D1530 | 5,16 | 3 (componente de interfaz) | cumple |

- Informativo, exento de AA (deshabilitado): `text.disabled` #5B6478 sobre `surface.default` #0D1530 = 3,03
- Informativo, exento de AA (deshabilitado): `icon.disabled` #5B6478 sobre `surface.default` #0D1530 = 3,03

## Notas
- `border.default` usa Línea (1,24 sobre blanco): es solo decorativo y está excluido del umbral, según `paleta.md`.
- Rosa sobre Niebla da 3,44 y Rosa sobre Azul marino 3,19: solo gráficos grandes, nunca texto normal.
- `hover` y `pressed` se derivan variando solo la luminosidad de Azul marino y Rosa; `disabled` y `text.disabled` están exentos de AA (WCAG 1.4.3).
- `feedback.*` es la única excepción al "ningún matiz ajeno" de `tokens-spec.md` (verde, ámbar, rojo, azul): propuesta aprobada el 2026-10-21. Nunca es el único canal: acompañar con texto o icono.
- `icon.default` e `icon.subtle` coinciden en modo claro (Pizarra, único neutro medio de la paleta).
