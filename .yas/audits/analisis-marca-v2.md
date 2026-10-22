# Análisis de marca: Yasmani Viñamagua (rediseño v1.0)

**Fecha:** 2026-10-16 · **Sector:** ingeniería, redes y automatización de procesos · **Material analizado:** los SVG y PNG de `logo/`, `aplicaciones/aplicaciones.html`, `manual/manual-identidad.html` y `marca-spec.md`. Las pruebas visuales se hicieron renderizando en Chrome.

> **Límite de este análisis:** lo hace la misma sesión que creó la marca, por lo que **no es una auditoría independiente**. Se aplicaron los mismos criterios que a la marca anterior (17/32), pero conviene contrastarlo con la opinión de terceros.

## Resumen ejecutivo
Rediseño coherente y completo: símbolo plano de una tinta (una Y con entrada y rama), paleta de dos colores con contrastes calculados, tipografía con terminales redondos como el símbolo y un manual con versiones, mínimos, usos incorrectos y aplicaciones. Resuelve la mayoría de los fallos de la marca anterior (una tinta, lockup con nombre, coherencia, manual completo). Sus riesgos son **originalidad** (una Y es una forma muy común y no se pudo verificar), **calidad técnica del archivo** (polilíneas superpuestas, no Bézier) y que **el logotipo no comunica por sí solo el posicionamiento** (decisión de no llevar descriptor). **Nota global: 22/32 (69 %, sólida)**, frente a 17/32 de la marca anterior.

## Contexto
- **Qué hace:** ingeniero en innovación y automatización de procesos mediante tecnología.
- **Público:** clientes y empresas (principal), empleadores y reclutadores.
- **Competencia:** referentes de automatización y redes (Cisco, Siemens, ABB, Rockwell, Schneider, UiPath, Zapier, Ubiquiti, Deutsche Telekom). **Colores dominantes por conocimiento general, no verificados en esta sesión.**
- **Objetivo del análisis:** auditar el rediseño y compararlo con la marca anterior.

## Puntuación
| # | Dimensión | Nota | Anterior | Evidencia |
|---|---|---|---|---|
| 1 | Estrategia y durabilidad | 3/4 | 2 | Símbolo plano, dos colores y sin dependencia del degradado; pero una Y de trazo redondeado sigue una línea estética muy extendida. |
| 2 | Posicionamiento y diferenciación | 2/4 | 2 | El rosa ocupa un hueco frente a azul, rojo y naranja; la comparación no está verificada y una Y es común. |
| 3 | Concepto | 2/4 | 2 | "Flujos que confluyen y una rama" se explica en una frase, pero es genérico y recuerda al icono de rama del control de versiones. |
| 4 | Construcción formal | 3/4 | 3 | Retícula de 4 unidades, trazo de 12, ángulos de 60° y 45° y terminales coherentes; el archivo es poligonal y la unión es algo angulosa. |
| 5 | Color | 3/4 | 3 | Paleta con HEX, RGB, CMYK y contrastes calculados; el rosa solo sirve para gráficos y texto grande sobre blanco; Pantone no verificado. |
| 6 | Tipografía | 3/4 | 2 | Nunito repite los terminales redondos del símbolo y Manrope aporta legibilidad; el kerning es manual. |
| 7 | Versiones y responsive | 3/4 | 1 | Color, negativo, una tinta, horizontal, vertical, avatar y favicon reforzado; mínimos sin prueba en impresión. |
| 8 | Aplicaciones y coherencia | 3/4 | 2 | Siete aplicaciones coherentes con la paleta y fuentes oficiales; son composiciones HTML con datos de ejemplo. |
| | **Total** | **22/32** | **17/32** | |

## Pruebas
| Prueba | Resultado | Observación |
|---|---|---|
| Blanco y negro / una tinta | **Pasa** | `logo-1tinta-negro.svg` y `-blanco.svg` renderizados; la silueta es limpia. |
| 2 cm y 16 px | Pasa con reservas | Se reconoce a 16 px, pero la rama es fina; por eso existe el favicon reforzado. Sin prueba de impresión a 2 cm. |
| Negativo / invertido | **Pasa** | Sobre Medianoche funciona en símbolo y lockups. |
| Desenfoque / distancia | Pasa | Se reconoce una Y inclinada con rama. |
| Giro / espejo | No verificado | No se probó. |
| Descripción en una frase | **Pasa** | "Una Y donde una rama rosa sale de la unión." |
| Dibujo de memoria | **Pasa** | Tres trazos rectos y un ángulo. |
| Confundible con otra marca | **No verificable** | Una Y simple es muy común; no hay búsqueda de anterioridades. |
| Procesos complejos (bordado, grabado) | Pasa en principio | Una tinta y trazo grueso; no se probó el bordado real. |

## Mejoras respecto a la marca anterior
| Fallo anterior | Estado |
|---|---|
| Sin versión a una tinta (P0) | **Resuelto** |
| Lectura ambigua ("V", "K", "t") | **Resuelto** (ahora se lee como una Y) |
| Terminales distintos entre versiones | **Resuelto** (todas derivan de un único generador) |
| Variantes circulares fuera de paleta | **Resuelto** (avatar solo con colores oficiales) |
| Sin lockup con nombre | **Resuelto** |
| Título inconsistente (Mgtr. / Ing.) | **Resuelto** (solo "Yasmani Viñamagua") |
| Tipografía incoherente | **Resuelto** (Nunito + Manrope en todas las piezas) |
| Aplicaciones desviadas de la paleta | **Resuelto** |
| Manual sin mínimos ni usos incorrectos | **Resuelto** |
| Documento Word sin marca | **Resuelto** (en la composición de ejemplo) |
| Sin Pantone | Parcial: aproximación **no verificada** |

## Lo que funciona (conservar)
- **Símbolo plano:** tres trazos y una rama en rosa; reproducible en una tinta.
- **Rama rosa por debajo de la azul:** resuelve el abultamiento y da una firma reconocible.
- **Nunito en el nombre:** coherencia directa con los terminales del símbolo.
- **Paleta con reglas de contraste calculadas:** evita el rosa en párrafos.
- **Sistema completo y documentado:** versiones, mínimos, usos incorrectos, aplicaciones y decisiones justificadas.

## Hallazgos

### P0 Crítico
Ninguno.

### P1 Importante
1. **Originalidad no verificada.**
   - *Qué:* una Y de trazos rectos y rama a 45° es una forma muy común.
   - *Por qué importa:* puede coincidir con marcas existentes y dificultar su registro.
   - *Cómo mejorar:* hacer una búsqueda de anterioridades (propiedad intelectual y búsqueda de imágenes) antes de publicar y, si hace falta, acentuar un rasgo propio (por ejemplo, curvar la unión o la rama).
2. **El archivo del símbolo no es apto para producción profesional.**
   - *Qué:* los SVG son polilíneas con formas superpuestas y la unión de entrada y tallo queda algo angulosa al ampliar.
   - *Por qué importa:* en formatos grandes (rótulos, vinilos) se pueden ver facetas y no se puede editar bien.
   - *Cómo mejorar:* redibujar con curvas Bézier en Illustrator o Figma y unir las formas con el Buscatrazos.
3. **El logotipo no comunica por sí solo el posicionamiento.**
   - *Qué:* sin descriptor (decisión del usuario), el lockup solo dice el nombre.
   - *Por qué importa:* el objetivo es posicionarse en automatización e innovación; en el primer contacto, el nombre solo no lo dice.
   - *Cómo mejorar:* mantener el lockup limpio y usar siempre una línea de apoyo en cada pieza ("Automatización de procesos con tecnología"), sin acoplarla al logotipo.
4. **Equilibrio visual del lockup horizontal sin resolver.**
   - *Qué:* el usuario percibió el símbolo con más peso hacia abajo y se mantuvo la versión original; el tallo cuelga bajo la línea base del nombre.
   - *Por qué importa:* si se nota en el uso real, resta calidad a la versión más utilizada.
   - *Cómo mejorar:* probar la alternativa H4 (símbolo al 62 %) en contexto, o acortar el tallo; decidir con las aplicaciones reales.
5. **Mínimos y color sin pruebas físicas.**
   - *Qué:* tamaños mínimos estimados en pantalla; Pantone aproximado.
   - *Por qué importa:* en impresión el color y la rama fina pueden variar.
   - *Cómo mejorar:* imprimir una prueba (tarjeta y portada) con guía Pantone física y ajustar.

### P2 Mejora
6. **Investigación de competencia débil:** los colores de los competidores vienen de conocimiento general; contrastar con sus manuales oficiales.
7. **Transición desde "AY":** se pierde la equidad del monograma anterior; planificar un periodo de convivencia y avisar en redes.
8. **El rosa tiene contraste limitado** sobre blanco (3,79) y sobre azul marino (3,19); mantenerlo solo como acento.
9. **Recurso de líneas de flujo:** es grande y puede competir con el logotipo; vigilar su tamaño en nuevas piezas.
10. **Aplicaciones como HTML:** crear plantillas editables de Word y PowerPoint para el uso diario.
11. **Kerning manual** en "Ya" y "Vi"; revisar al ampliar.

### P3 Opcional
12. **Legibilidad de la ñ** fuera del mundo hispano; no afecta al logotipo (que se lee igual) pero sí a la búsqueda del nombre.
13. **Avatar:** probar a 32 px en LinkedIn real.

## Plan de mejora (por impacto)
1. **Búsqueda de anterioridades** y, si hace falta, personalizar la unión o la rama.
2. **Redibujar el símbolo en Bézier** y reexportar todas las versiones.
3. **Definir la línea de apoyo** (claim) para las piezas y probarla junto al lockup.
4. **Decidir el equilibrio del lockup horizontal** con aplicaciones reales (H1 frente a H4).
5. **Prueba de impresión** (tarjeta y portada) con guía Pantone y ajuste de los mínimos.

## No verificado / preguntas abiertas
- ¿Existe una marca registrada con una Y similar en el sector?
- ¿Cómo se lee el símbolo para terceros que no conocen la marca? (conviene probar con 5 personas)
- ¿Qué tal funciona el lockup horizontal en las aplicaciones reales?
- ¿Los Pantone propuestos son los correctos?
- Competencia: colores y estilos de los referentes por confirmar en sus manuales.
