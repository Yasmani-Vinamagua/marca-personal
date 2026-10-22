# Paleta de marca: Yasmani Viñamagua

Generado el 2026-10-21 por `/yas-design rebrand` (ajuste v1.1, fase 6), a partir de `marca-spec.md` §6 y `manual/manual-identidad.md` §7. Los seis colores de v1.0 no cambian; v1.1 añade dos tintes de apoyo (Línea y Bruma) que ya se usaban sin declarar en las aplicaciones, el manual y el vídeo.

## Colores

| Nombre | Rol | HEX | RGB | CMYK (referencia) | Pantone (aproximado) |
|---|---|---|---|---|---|
| Azul marino | principal | `#223367` | 34 / 51 / 103 | 67 / 50 / 0 / 60 | Entorno de 2767 C o 281 C (no verificado) |
| Rosa | apoyo (acento firma) | `#FF1563` | 255 / 21 / 99 | 0 / 92 / 61 / 0 | Entorno de 192 C o 1925 C (no verificado) |
| Medianoche | neutro (fondos oscuros) | `#0D1530` | 13 / 21 / 48 | 73 / 56 / 0 / 81 | Entorno de 2767 C o negro 6 C (no verificado) |
| Pizarra | neutro (texto secundario) | `#5B6478` | 91 / 100 / 120 | 24 / 17 / 0 / 53 | Entorno de 431 C (no verificado) |
| Niebla | neutro (fondos claros) | `#F2F4F8` | 242 / 244 / 248 | 2 / 2 / 0 / 3 | Entorno de Cool Gray 1 C (no verificado) |
| Blanco | neutro (fondo y negativo) | `#FFFFFF` | 255 / 255 / 255 | 0 / 0 / 0 / 0 | — |
| Línea (nuevo en v1.1) | neutro (decorativo: divisores y bordes finos) | `#E3E7F0` | 227 / 231 / 240 | 5 / 4 / 0 / 6 | pendiente de definir |
| Bruma (nuevo en v1.1) | neutro (decorativo: tonos del recurso de flujo, trazos de apoyo) | `#C9D0E6` | 201 / 208 / 230 | 13 / 10 / 0 / 10 | pendiente de definir |

CMYK: Navy y Rosa vienen del manual anterior; el resto es conversión matemática simple, no perfil ICC; validar con prueba impresa. Pantone: aproximación por cercanía visual, provisional; confirmar con guía física (*Solid Uncoated* para papel natural). Línea y Bruma son solo de pantalla.

## Reglas de los tintes (v1.1)
- **Solo decorativos.** No transmiten información ni se usan para texto, iconos ni bordes de componentes interactivos. Por eso no se les aplica el umbral de 3:1 de componentes.
- **Prohibido** añadir otros neutros: los grises sueltos que usaban las maquetas (`#DFE3EE`, `#EEF0F6`, `#E7EAF1`, `#E1E5EE`, `#D6DBEA`, `#D6DBE8`, `#C9CFE0`, `#B8C0D8`, `#B8C0D4`, `#C3C9D8`, `#DFE3EC`, `#111111`) se sustituyen por Línea, Bruma, Niebla, Pizarra o Medianoche.
- **Recurso de flujo:** puede usar azul marino, blanco o Bruma con transparencia (no cuenta como color nuevo).

## Contraste (calculado, WCAG 2.x)

Fórmula de `criterios-calidad.md`: luminancia relativa de cada color y ratio `(L claro + 0,05) / (L oscuro + 0,05)`.

| Combinación | Ratio | Uso permitido |
|---|---|---|
| Azul marino sobre blanco | 12,09 | Texto y logo |
| Azul marino sobre Niebla | 10,98 | Texto y logo |
| Blanco sobre azul marino | 12,09 | Texto y logo en negativo |
| Blanco sobre Medianoche | 17,99 | Texto y logo en negativo |
| Niebla sobre Medianoche | 16,34 | Texto sobre fondo oscuro |
| Medianoche sobre Niebla | 16,34 | Texto |
| Rosa sobre Medianoche | 4,75 | Texto normal y acentos |
| Pizarra sobre blanco | 5,93 | Texto secundario |
| Pizarra sobre Niebla | 5,39 | Texto secundario |
| Rosa sobre blanco | 3,79 | Solo gráficos y texto grande (≥ 24 px, o ≥ 18,66 px en negrita) |
| Blanco sobre rosa | 3,79 | Solo texto grande o botones con texto grande |
| **Rosa sobre Niebla** (nuevo) | **3,44** | **Solo gráficos y texto grande; no para párrafos** |
| Rosa sobre azul marino | 3,19 | Solo gráficos grandes; para texto, usar Medianoche como fondo |
| **Pizarra sobre Medianoche** (nuevo) | **3,03** | **No usar para texto normal; solo gráficos o texto grande** |
| Bruma sobre Medianoche | 11,69 | Decorativo |
| Línea sobre blanco / Niebla | 1,24 / 1,12 | **Solo decorativo (no accesible como texto ni borde de componente)** |
| Bruma sobre blanco / Niebla | 1,54 / 1,40 | **Solo decorativo** |

## Proporción de uso
**60 %** neutros (blanco, Niebla, Medianoche) · **30 %** azul marino · **10 % o menos** rosa.

## Degradado (opcional, recurso gráfico)
De `#223367` al 31 % a `#FF1563` al 91 %, horizontal. Solo en fondos y barras, siempre con un color sólido de reserva. **No se usa en el logotipo.**

## Roles semánticos previstos (para el sistema de diseño)
Sin cambios respecto a v1.0: no se han definido colores de acción, éxito, aviso, error o información; quedan como *pendiente de definir* hasta que `/yas-figma` los necesite. No se inventan.
