# Variables de Figma · Mini Design System

Generado 2026-10-21 por `/yas-figma mini`; colores ampliados el mismo día por `/yas-figma colors` (estados de acción, iconos y feedback: propuesta aprobada). Crear en el panel de Variables de Figma, en este orden. Nombres con barras; los valores de las semánticas son alias.

## Colección 1 · Primitivas (sin modos)

| Variable | Tipo | Valor |
|---|---|---|
| `color/primitive/azul-marino` | Color | #223367 |
| `color/primitive/rosa` | Color | #FF1563 |
| `color/primitive/medianoche` | Color | #0D1530 |
| `color/primitive/pizarra` | Color | #5B6478 |
| `color/primitive/niebla` | Color | #F2F4F8 |
| `color/primitive/blanco` | Color | #FFFFFF |
| `color/primitive/linea` | Color | #E3E7F0 |
| `color/primitive/bruma` | Color | #C9D0E6 |
| `color/primitive/azul-marino-oscuro-1` | Color | #1A2850 |
| `color/primitive/azul-marino-oscuro-2` | Color | #152041 |
| `color/primitive/azul-marino-claro` | Color | #2A3E7E |
| `color/primitive/rosa-claro-1` | Color | #FF3477 |
| `color/primitive/rosa-claro-2` | Color | #FF4885 |
| `color/primitive/pizarra-60` | Color | #9DA2AE |
| `color/primitive/success-50` | Color | #E7F8F0 |
| `color/primitive/success-900` | Color | #145235 |
| `color/primitive/success-600` | Color | #25935F |
| `color/primitive/success-950` | Color | #153727 |
| `color/primitive/success-100` | Color | #C2F0DA |
| `color/primitive/success-400` | Color | #54D498 |
| `color/primitive/warning-50` | Color | #F8F2E7 |
| `color/primitive/warning-900` | Color | #523B14 |
| `color/primitive/warning-600` | Color | #835F21 |
| `color/primitive/warning-950` | Color | #372B15 |
| `color/primitive/warning-100` | Color | #F0DFC2 |
| `color/primitive/warning-400` | Color | #D4A554 |
| `color/primitive/error-50` | Color | #F8E8E7 |
| `color/primitive/error-900` | Color | #521814 |
| `color/primitive/error-600` | Color | #932C25 |
| `color/primitive/error-950` | Color | #371715 |
| `color/primitive/error-100` | Color | #F0C5C2 |
| `color/primitive/error-400` | Color | #D45C54 |
| `color/primitive/info-50` | Color | #E7EFF8 |
| `color/primitive/info-900` | Color | #142F52 |
| `color/primitive/info-600` | Color | #255493 |
| `color/primitive/info-950` | Color | #152437 |
| `color/primitive/info-100` | Color | #C2D6F0 |
| `color/primitive/info-400` | Color | #548BD4 |

## Colección 2 · Semánticas (modos Light y Dark)

| Variable | Tipo | Light | Dark |
|---|---|---|---|
| `color/semantic/surface/default` | Color | alias `color/primitive/blanco` | alias `color/primitive/medianoche` |
| `color/semantic/surface/subtle` | Color | alias `color/primitive/niebla` | alias `color/primitive/azul-marino` |
| `color/semantic/surface/inverse` | Color | alias `color/primitive/medianoche` | alias `color/primitive/niebla` |
| `color/semantic/surface/overlay` | Color | alias `color/primitive/medianoche` | alias `color/primitive/medianoche` |
| `color/semantic/text/primary` | Color | alias `color/primitive/medianoche` | alias `color/primitive/niebla` |
| `color/semantic/text/secondary` | Color | alias `color/primitive/pizarra` | alias `color/primitive/bruma` |
| `color/semantic/text/inverse` | Color | alias `color/primitive/blanco` | alias `color/primitive/medianoche` |
| `color/semantic/text/link` | Color | alias `color/primitive/azul-marino` | alias `color/primitive/rosa` |
| `color/semantic/border/default` | Color | alias `color/primitive/linea` | alias `color/primitive/azul-marino` |
| `color/semantic/border/strong` | Color | alias `color/primitive/pizarra` | alias `color/primitive/pizarra` |
| `color/semantic/border/focus` | Color | alias `color/primitive/rosa` | alias `color/primitive/rosa` |
| `color/semantic/action/primary/bg` | Color | alias `color/primitive/azul-marino` | alias `color/primitive/rosa` |
| `color/semantic/action/primary/fg` | Color | alias `color/primitive/blanco` | alias `color/primitive/medianoche` |
| `color/semantic/text/disabled` | Color | alias `color/primitive/pizarra-60` | alias `color/primitive/pizarra` |
| `color/semantic/action/primary/hover` | Color | alias `color/primitive/azul-marino-oscuro-1` | alias `color/primitive/rosa-claro-1` |
| `color/semantic/action/primary/pressed` | Color | alias `color/primitive/azul-marino-oscuro-2` | alias `color/primitive/rosa-claro-2` |
| `color/semantic/action/primary/disabled` | Color | alias `color/primitive/linea` | alias `color/primitive/azul-marino` |
| `color/semantic/action/secondary/bg` | Color | alias `color/semantic/surface/default` | alias `color/semantic/surface/default` |
| `color/semantic/action/secondary/fg` | Color | alias `color/primitive/azul-marino` | alias `color/semantic/text/primary` |
| `color/semantic/action/secondary/border` | Color | alias `color/primitive/azul-marino` | alias `color/primitive/rosa` |
| `color/semantic/action/secondary/hover` | Color | alias `color/primitive/niebla` | alias `color/primitive/azul-marino` |
| `color/semantic/action/secondary/pressed` | Color | alias `color/primitive/linea` | alias `color/primitive/azul-marino-claro` |
| `color/semantic/icon/default` | Color | alias `color/semantic/text/secondary` | alias `color/semantic/text/secondary` |
| `color/semantic/icon/strong` | Color | alias `color/semantic/text/primary` | alias `color/semantic/text/primary` |
| `color/semantic/icon/subtle` | Color | alias `color/primitive/pizarra` | alias `color/primitive/pizarra` |
| `color/semantic/icon/disabled` | Color | alias `color/semantic/text/disabled` | alias `color/semantic/text/disabled` |
| `color/semantic/icon/inverse` | Color | alias `color/semantic/text/inverse` | alias `color/semantic/text/inverse` |
| `color/semantic/icon/brand` | Color | alias `color/semantic/action/primary/bg` | alias `color/semantic/action/primary/bg` |
| `color/semantic/feedback/success/bg` | Color | alias `color/primitive/success-50` | alias `color/primitive/success-950` |
| `color/semantic/feedback/success/fg` | Color | alias `color/primitive/success-900` | alias `color/primitive/success-100` |
| `color/semantic/feedback/success/border` | Color | alias `color/primitive/success-600` | alias `color/primitive/success-400` |
| `color/semantic/feedback/warning/bg` | Color | alias `color/primitive/warning-50` | alias `color/primitive/warning-950` |
| `color/semantic/feedback/warning/fg` | Color | alias `color/primitive/warning-900` | alias `color/primitive/warning-100` |
| `color/semantic/feedback/warning/border` | Color | alias `color/primitive/warning-600` | alias `color/primitive/warning-400` |
| `color/semantic/feedback/error/bg` | Color | alias `color/primitive/error-50` | alias `color/primitive/error-950` |
| `color/semantic/feedback/error/fg` | Color | alias `color/primitive/error-900` | alias `color/primitive/error-100` |
| `color/semantic/feedback/error/border` | Color | alias `color/primitive/error-600` | alias `color/primitive/error-400` |
| `color/semantic/feedback/info/bg` | Color | alias `color/primitive/info-50` | alias `color/primitive/info-950` |
| `color/semantic/feedback/info/fg` | Color | alias `color/primitive/info-900` | alias `color/primitive/info-100` |
| `color/semantic/feedback/info/border` | Color | alias `color/primitive/info-600` | alias `color/primitive/info-400` |

Todas las semánticas de color del manual y las derivadas (aprobadas el 2026-10-21) están definidas; no queda ninguna pendiente.

## Colección 3 · Espaciado y forma (sin modos)

| Variable | Tipo | Valor |
|---|---|---|
| `space/1` | Número | 4 |
| `space/2` | Número | 8 |
| `space/3` | Número | 12 |
| `space/4` | Número | 16 |
| `space/6` | Número | 24 |
| `space/8` | Número | 32 |
| `space/12` | Número | 48 |
| `space/16` | Número | 64 |
| `radius/sm` | Número | 4 |
| `radius/md` | Número | 8 |
| `radius/lg` | Número | 12 |
| `radius/xl` | Número | 16 |
| `radius/full` | Número | 9999 |
| `breakpoint/tablet` | Número | 768 |
| `breakpoint/desktop` | Número | 1200 |

## Colección 4 · Tipografía (sin modos)

| Variable | Tipo | Valor |
|---|---|---|
| `font/family/heading` | Texto | Nunito |
| `font/family/body` | Texto | Manrope |
| `font/size/title-1` | Número | 40 |
| `font/line-height/title-1` | Número | 48 |
| `font/size/title-2` | Número | 28 |
| `font/line-height/title-2` | Número | 36 |
| `font/size/subtitle` | Número | 20 |
| `font/line-height/subtitle` | Número | 28 |
| `font/size/body` | Número | 16 |
| `font/line-height/body` | Número | 26 |
| `font/size/body-secondary` | Número | 14 |
| `font/line-height/body-secondary` | Número | 22 |
| `font/size/label` | Número | 13 |
| `font/line-height/label` | Número | 18 |
| `font/size/figures` | Número | 16 |
| `font/line-height/figures` | Número | 24 |
