# Spec de marca: Yasmani Viñamagua

Estado: **Ajuste v1.1 **completado** (fases 0, 0b, 1, 5, 6, 8, 9, 10 y 10b aprobadas; pendientes de validación física y legal abiertos)** · Última actualización: 2026-10-21 · Versión anterior: v1.0 (Fase 10, manual generado)

## 0. Preparación
- **Tipo de proyecto:** rediseño conservando la esencia de la marca personal "AY" (2023).
- **Material previo:** `D:\Users\yasma\YAS\Mi Marca\` (Manual_Identidad, logos PNG, `.ai`) y el análisis `analisis-yasmani-vinamagua.md` (17/32).
- **Carpeta de salida:** `marca-yasmani-vinamagua/`.

### Qué conservar de la marca actual (equidad de marca)
- Idea de monograma **A + Y** (iniciales de Angel Yasmani), girada y reflejada.
- Trazo **monolínea con terminales redondeados**.
- Paleta base **azul marino + rosa** (#223367 / #FF1563) con naranja de apoyo.
- Familia tipográfica **Montserrat** (a confirmar en la fase 7).

### Qué corregir (del análisis)
- Falta versión **a una tinta** y el logo depende del degradado (P0).
- Lectura ambigua del símbolo ("V", "K", "t").
- Terminales distintos entre versiones; variantes circulares fuera de paleta.
- Sin lockup con nombre; título inconsistente (Mgtr. / Ing.).
- Tipografía y aplicaciones incoherentes; sin Pantone, tamaño mínimo ni usos incorrectos.

## 0b. Evaluación inicial para el ajuste v1.1 (2026-10-21)

- **Tipo de encargo:** rebranding con alcance **ajuste** (propuesto, pendiente de aprobación), partiendo de la auditoría [.yas/audits/2026-10-21-marca.md](.yas/audits/2026-10-21-marca.md) (12/16, Bueno). Copia de seguridad del spec anterior: `marca-spec.v1.0.bak.md`.
- **Inventario revisado:** 15 SVG de `elementos-manual-identidad/logo/` y 14 PNG; `elementos-manual-identidad/aplicaciones/aplicaciones.html` (7 aplicaciones) y sus 2 recursos de flujo; `elementos-manual-identidad/manual/` (MD y HTML); `videos/logo-animacion/`. No verificable: web y redes reales (no existen o no se aportaron), archivos originales `.ai` (en `D:\Users\yasma\YAS\Mi Marca\`, fuera del proyecto).
- **Activos reconocibles a conservar:** la Y (entrada 60°, tallo, rama 45° rosa por debajo), navy `#223367` + rosa `#FF1563`, Nunito en el nombre, el nombre sin título delante.
- **Problemas de ejecución visual:** SVG poligonales sin maestro Bézier (P2); lockup horizontal sin equilibrio (P2); recurso de flujo que supera al logo y se solapa con texto en la portada del manual (P2); mínimos de impresión sin prueba (P2); neutros fuera de paleta, contrastes sin documentar y `alt` vacíos (P3).
- **Problemas de posicionamiento:** falta una línea de apoyo aprobada; el banner, la tarjeta y la firma no dicen qué hace la marca (P1). No cambia el concepto ni la estrategia.
- **Alcance del cambio:** *ajuste*, aprobado en la selección del usuario del 2026-10-21 (hallazgos P1, P2 y P3). **Fases que se recorren:** 0, 0b, 1 (solo la línea de apoyo), 5 (Bézier y lockup), 6 (neutros y contraste), 8 (reexportar y mínimos), 9 (recurso de flujo y piezas afectadas), 10 (manual v1.1) y 10b (transición breve). **Se omiten:** 2 (la investigación competitiva es la hipótesis B y no entra), 3 y 4 (sin cambio de concepto ni de símbolo) y 7 (tipografía sin cambios).
- **Decisión por elemento:**
  | Elemento | Decisión | Justificación |
  |---|---|---|
  | Símbolo Y (geometría y colores) | Conservar | Es la equidad de marca; la auditoría lo aprueba |
  | Símbolo Y (archivo) | Evolucionar la ejecución | Redibujar en Bézier con la misma geometría y crear `logo-master.svg` |
  | Paleta (6 colores) | Conservar | Contrastes verificados; solo se declaran los tintes de apoyo y se amplía la tabla |
  | Nombre en Nunito SemiBold | Conservar | Revisar el kerning manual al redibujar |
  | Lockup vertical | Conservar | Sin hallazgos |
  | Lockup horizontal | Evolucionar | Equilibrio: decidir H1 frente a H4 con piezas reales |
  | Recurso de flujo | Evolucionar | Reducir, dar un límite de tamaño medible y quitar el solape con texto |
  | Línea de apoyo | Crear (fuera del logo) | Respeta «sin descriptor» y cubre el posicionamiento |
  | Mínimos de impresión | Conservar como provisionales | Hasta una prueba física |
  | Descriptor «Ingeniería · Automatización» (§7) | Eliminar | Descartado en las fases 7 y 8 |
  | Aplicaciones, manual, vídeo | Actualizar | Reflejar el ajuste |
- **Aprobación del alcance:** aprobada por el usuario el 2026-10-21. **Carpeta de salida:** se actualiza en su sitio (`elementos-manual-identidad/logo/`, `elementos-manual-identidad/aplicaciones/`, `elementos-manual-identidad/manual/`), por decisión del usuario; antes se guardó una copia de v1.0 en `.yas/backup-v1.0/` y del spec en `marca-spec.v1.0.bak.md`.

## 1. Brief
- **Qué hace:** ingeniero que se posiciona en **innovación y automatización de procesos mediante tecnología**; el material previo indica redes y telecomunicaciones (GPON/FTTH, CCNA). *(Sector exacto: supuesto, a confirmar.)*
- **Público:** clientes y empresas (principal) y empleadores y reclutadores (secundario).
- **Meta (propuesta):** posicionar a Yasmani Viñamagua como un ingeniero **confiable e innovador**, reconocible de inmediato y coherente en todos sus canales.
- **Objetivos (propuestos):**
  1. Transmitir **responsabilidad, honestidad y lealtad** con un tono sobrio y sólido.
  2. Comunicar **innovación y automatización** con un lenguaje visual tecnológico y preciso.
  3. Tener un **sistema completo y coherente**: logo (con una tinta y lockup), color, tipografía y plantillas.
  4. Funcionar en **LinkedIn y redes, documentos y memorias técnicas, presentaciones y charlas, tarjeta, firma de correo y web**.
  5. Poder reproducirse en cualquier soporte (pantalla pequeña, impresión a una tinta, bordado o grabado).
- **Valores:** responsabilidad, honestidad, lealtad.
- **Personalidad:** innovadora y tecnológica + confiable y sobria.
- **Adjetivos que sí (propuestos):** preciso, sólido, moderno, fiable, claro.
- **Adjetivos que no (propuestos):** frívolo, recargado, de moda pasajera, genérico "tech", frío o distante.
- **Marca previa a respetar:** sí (ver arriba).
- **Aplicaciones previstas:** LinkedIn y redes, documentos y memorias técnicas, presentaciones y charlas, tarjeta, firma de correo y web.
- **Plazos y presupuesto:** no indicados.

### Criterios a largo plazo
Debe funcionar dentro de 10-20 años: formas simples, sin depender de modas (el degradado pasa a ser un recurso opcional), reducible a 16 px, reproducible en una tinta.

### Fase 1 (v1.1): línea de apoyo (2026-10-21)
- **Línea aprobada:** «Automatización de procesos con tecnología» (opción A; alternativas descartadas: B «Procesos que fluyen, resultados que se sostienen» y C «Ingeniería para automatizar procesos»).
- **Uso:** siempre **fuera del logotipo** (el lockup sigue sin descriptor), en Manrope Medium. Se aplica en el **banner de LinkedIn** y en la **cabecera/portada de la web**. No se aplica a la tarjeta ni a la firma (decisión del usuario).
- **Efecto en la web:** el titular «Automatización de procesos, con responsabilidad.» deja de competir con la línea de apoyo; se revisa en la Fase 9.
- **Estado:** aprobada por el usuario.

## 2. Investigación

> **Límite de la investigación:** las búsquedas web devolvieron fuentes poco fiables (valores en conflicto) y varias páginas de marcas bloquearon la consulta. Por eso la tabla recoge **familias de color dominantes según conocimiento general, no verificadas en esta sesión**, sin HEX. Sirve para decidir dirección, no como dato exacto. Conviene confirmarlas con los manuales oficiales antes de citarlas.

### Competencia y referentes (sector: automatización, redes y tecnología)
| Marca | Rubro | Color dominante (aprox.) | Estilo de logo |
|---|---|---|---|
| Cisco | Redes | Azul / cian | Logotipo + símbolo de barras |
| Siemens | Automatización industrial | Azul-turquesa (a verificar) | Logotipo tipográfico |
| ABB | Automatización | Rojo | Logotipo tipográfico |
| Rockwell Automation | Automatización industrial | Rojo | Logotipo tipográfico |
| Schneider Electric | Energía y automatización | Verde | Logotipo tipográfico |
| UiPath | Automatización de procesos (RPA) | Naranja | Logotipo tipográfico |
| Zapier | Automatización de flujos | Naranja | Logotipo tipográfico |
| Ubiquiti | Redes | Azul | Logotipo tipográfico |
| Deutsche Telekom / T-Mobile | Telecomunicaciones | Magenta | Símbolo + color propio |

**Hallazgos:**
- El **azul** es el color por defecto de redes y tecnología; el **rojo** domina la automatización industrial y el **naranja** el software de automatización.
- Casi todos son **logotipos tipográficos**; los monogramas personales con símbolo propio son poco comunes en este nicho.
- Las marcas personales de ingeniería suelen usar azul, gris y negro, con estética corporativa genérica.

### Círculo cromático (huecos)
| Zona | Ocupación | Lectura |
|---|---|---|
| Azul | Alta | No diferencia por sí solo; sirve como ancla de confianza. |
| Rojo | Alta | Saturado (automatización industrial). |
| Naranja | Media | Asociado a automatización de software; evitar como color principal. |
| Verde | Media | Asociado a energía. |
| **Violeta / magenta / rosa** | **Baja** | **Hueco** en automatización y redes; el rosa de la marca actual (#FF1563) está en este hueco. |
| Turquesa / cian | Media | Asociado a redes (Cisco y similares). |

**Riesgo:** en **telecomunicaciones** el magenta está muy asociado a Deutsche Telekom/T-Mobile. El rosa actual es más frambuesa que magenta, pero conviene mantener una distancia cromática y no usarlo como color dominante en contextos de telecom.

### Dirección visual (moodboard en palabras)
- **Precisión técnica:** geometría limpia, cuadrículas, líneas de circuito o red tratadas con sobriedad, sin clichés de "matrix" o placas electrónicas.
- **Flujo y conexión:** trazos continuos, nodos y rutas que sugieren automatización y redes.
- **Contraste sobrio + acento vivo:** fondo azul marino profundo con un acento rosa pequeño y preciso; mucho espacio en blanco.
- **Humano:** terminales redondeados y trazo amable, para equilibrar lo tecnológico con la lealtad y la honestidad.
- **Evitar:** degradados como único recurso, estética genérica de startup, circuitos literales, azul corporativo sin matiz.

### Decisión propuesta
Mantener **azul marino como ancla** y el **rosa como acento firma**; quedaría el **naranja** como color de apoyo muy puntual o se elimina para no caer en el naranja de la automatización de software. La diferenciación vendrá de **símbolo propio + paleta navy/rosa**, no del color por sí solo.

## 3. Concepto

### Universos
1. **Nombre e identidad** (Yasmani Viñamagua)
2. **Automatización e innovación** (procesos, tecnología)
3. **Valores** (responsabilidad, honestidad, lealtad)

### Diagrama radial 1 — Nombre e identidad
- **Yasmani** → Y (bifurcación, confluencia, brazos), Yas, nombre propio, cercanía
- **Viñamagua** → V (vértice, punta, dirección), **ñ (tilde, onda, rasgo único del idioma)**, viña, agua → flujo
- **Iniciales** → **YV**, AY (Angel Yasmani, la marca actual), monograma, sello
- **Agua → flujo** → corriente, canal, ruta, cauce, fluir

### Diagrama radial 2 — Automatización e innovación
- **Proceso** → flujo, secuencia, pipeline, entrada → salida, bucle
- **Automatización** → nodo, conexión, ruta, disparador, repetición, orden
- **Tecnología** → circuito, señal, red, datos, precisión
- **Innovación** → futuro, flecha, ascenso, chispa, primer paso

### Diagrama radial 3 — Valores
- **Responsabilidad** → base, peso, ancla, cimiento, cumplimiento, constancia
- **Honestidad** → línea recta, transparencia, claridad, sin ornamento, espacio abierto
- **Lealtad** → vínculo, unión, conexión constante, par, firma, sello

### Cruces (frase por cruce)
| Cruce | Frase |
|---|---|
| Y × flujo | La **Y es una confluencia**: dos procesos que se unen en uno solo. |
| Viñamagua (agua) × automatización | **El agua fluye por un cauce**: un proceso automatizado es un flujo que no se detiene. |
| ñ × señal | **La tilde es una onda**: una señal, una ruta; el detalle que solo tiene este nombre. |
| Lealtad × conexión | Dos trazos unidos por un **nodo**: un vínculo que no se rompe. |
| Honestidad × línea recta | Trazo **simple y continuo**, sin trucos ni adornos. |
| Responsabilidad × base | Un **vértice inferior firme** (la V) sobre el que se apoya todo. |
| AY × YV | La marca actual dice **AY** (Angel Yasmani), pero el nombre público es **Yasmani Viñamagua → YV**. |

> **Hallazgo importante:** el monograma actual representa las iniciales **AY**, mientras que el nombre que se quiere posicionar es **Yasmani Viñamagua**. Además, el símbolo actual ya se lee como una **"V"**; esa lectura, que era un fallo si se esperaba "AY", puede ser una ventaja si el símbolo pasa a ser **YV**.

### Tres conceptos
| | Concepto A: "Conexión AY" (evolución) | Concepto B: "Y que confluye" (YV de flujo) | Concepto C: "Tilde ñ" (wordmark con firma) |
|---|---|---|---|
| **Idea** | Evolución del actual: A e Y como dos trazos que se unen en un nodo visible. | Una **Y construida como confluencia de dos flujos** que baja por un vértice en V; trazo continuo con un nodo final. | Logotipo "yasmani viñamagua" donde la **tilde de la ñ** es una onda o ruta en rosa, y se reutiliza como recurso gráfico. |
| **Símbolo** | Monograma AY | Monograma YV | Sin símbolo; la tilde como mini-símbolo (ñ) |
| **Valores** | Lealtad (unión) | Honestidad (línea simple) + lealtad (confluencia) + innovación (flujo) | Identidad única + detalle memorable |
| **Ventajas** | Máxima equidad de marca | Coherente con el nombre real; mantiene la geometría actual; símbolo propio | Muy distintivo y sencillo; funciona sin símbolo |
| **Riesgos** | Sigue diciendo AY (no el nombre); lectura ambigua | Pierde la "A" de la marca actual; la Y puede parecer un símbolo de "merge" genérico | Depende de la tipografía; la ñ puede no ser legible fuera del mundo hispano; símbolo de icono débil |
| **Uso pequeño** | Medio | Alto | Bajo (hace falta un icono aparte) |

**Recomendación: Concepto B**, con la **tilde de la ñ (concepto C)** como recurso gráfico secundario (el "detalle memorable"). Motivo: el símbolo pasa a decir **YV**, que coincide con el nombre público, conserva el trazo redondeado y la geometría actual, y se explica en una frase: "dos flujos que confluyen en uno".

## 4. Bocetos

**Archivos:** `elementos-manual-identidad/logo/exploracion/bocetos.svg` (vectorial) y `bocetos.png` (vista rápida, renderizada con Chrome). Todos en **una tinta negra**, trazo monolínea con terminales redondeados (conserva la esencia del logo actual) y sin tipografía final.

**Idea guía:** *una Y que contiene una V*: dos flujos (la V) que confluyen en uno (el tallo). La V es el vértice de la responsabilidad; el tallo es el proceso ya automatizado.

### Evaluación
| # | Boceto | Mensaje | Simplicidad | Distinción | Tamaño pequeño | Potencial | Comentario |
|---|---|---|---|---|---|---|---|
| 1 | Y recta | Medio | Alta | **Baja** | Alta | Bajo | Es una Y genérica; se confunde con muchas marcas y con el símbolo de "merge". |
| 2 | Y con nodo | Medio | Alta | Media | Alta | Medio | El nodo añade idea (resultado/conexión), pero parece un signo de interrogación invertido. |
| 3 | Confluencia curva | **Alto** | Alta | Media-alta | Alta | **Alto** | La curva comunica flujo y es amable; conecta con el trazo redondeado actual. |
| 4 | Entrada + rama | Alto | Alta | **Alta** | Alta | Alto | La asimetría da dirección y avance; recuerda al "branch" de control de versiones, que es coherente con tecnología. |
| 5 | Y + tilde ñ | Medio | Media | Alta | Media | Medio | La tilde sobre una Y se lee como "Ỹ" y confunde; la tilde funciona mejor junto al nombre (ñ) que sobre el símbolo. |
| 6 | Tallo bifurcado | Bajo | Media | Media | Media | Bajo | Se lee como una "X". Descartado. |
| 7 | Brazos desiguales | Medio | Alta | Media | Alta | Medio | Variante simple del 4, menos intencionada. |
| 8 | Avatar con círculo | Medio | Alta | Baja | Media | Medio | Solo sirve como variante de avatar, no como logo. |

**Advertencia:** una Y pura es un símbolo muy común. La diferenciación tendrá que venir de **cómo se construye** (curvatura, asimetría, nodo, terminales) y del **color**, no de la letra en sí. Por eso los tres candidatos combinan esas decisiones.

### Candidatos
| | Candidato | Qué lo hace propio | Riesgo |
|---|---|---|---|
| **A** | **Confluencia curva** (boceto 3) | Flujo continuo y amable; la curva dibuja el "cauce" de Viñamagua (agua). | Puede parecer una horquilla o un tirachinas. |
| **B** | **Entrada + rama** (boceto 4, refinado con unión curva) | Asimetría = dirección e innovación; un brazo largo (el origen) y uno corto (la ramificación). | Similitud con el icono de rama de Git. |
| **C** | **Confluencia curva + nodo final** (3 + 2) | El nodo da cierre al flujo (resultado, lealtad/conexión) y un punto reconocible en tamaño pequeño. | El nodo debe estar bien integrado para no parecer una gota o un signo. |

**Recomendación:** **C** (curva + nodo), con la asimetría suave de **B** si se ve mejor al construirlo. Motivo: el nodo da un detalle memorable (consejo "ofrezca un detalle que recordar"), y la curva mantiene la herencia redondeada de la marca actual.

## 5. Logotipo

### Revisión 2 (vigente) — vuelta al boceto 4: entrada + rama
**Cambio pedido por el usuario:** abandonar la Y curva con nodo (C4) y construir el **boceto 4, "entrada + rama"**: líneas rectas, sin nodo.

**Archivos:** `elementos-manual-identidad/logo/exploracion/candidato-b1-1tinta.svg`, `candidato-b2-1tinta.svg`, sus versiones `-color.svg` y `pruebas-b1-vs-b2.png`.

**Construcción:** trazo de 12 (3u, u = 4) con terminales redondos, sobre un lienzo de 100 × 100. Tres capsulas rectas que se encuentran en el punto de unión **J = (46, 56)**:
| Pieza | B1 | B2 |
|---|---|---|
| **Entrada** (brazo largo) | 60° respecto a la horizontal, hacia arriba a la izquierda; longitud 54 | igual |
| **Rama** (brazo corto) | 30° hacia arriba a la derecha; longitud 42 | 45° hacia arriba a la derecha; longitud 36 |
| **Tallo** | vertical hacia abajo; longitud 32 | igual |

**Idea:** la **entrada** es el flujo que llega, el **tallo** es el proceso que continúa y la **rama** es la derivación (automatización, innovación, nueva vía). Asimetría = dirección.

**Aplicación del color (propuesta):** entrada y tallo en **azul marino**, **rama en rosa**: el acento firma se convierte en la rama.

**Pruebas (Chrome, `pruebas-b1-vs-b2.png`):**
| Prueba | B1 | B2 |
|---|---|---|
| Negro 100 % y negativo | Pasa | Pasa |
| 64 px y 32 px | Pasa | Pasa |
| 16 px | Pasa con reservas: la rama es corta y fina | Pasa con reservas: igual |
| Lectura como "Y" | Media: parece una Y inclinada | **Mejor**: se reconoce antes como Y |
| Dinamismo | **Mejor** | Media |
| Dos colores (rama rosa) | Pasa | Pasa |

**Observaciones:** (1) con la rama en rosa, el terminal redondo de la rama se superpone a la entrada en la unión y deja un pequeño abultamiento; hay que resolverlo en la versión final (recorte limpio o rama que arranca por detrás); (2) como en la revisión 1, el SVG usa contornos poligonales superpuestos, no curvas Bézier; (3) la comparación con otras marcas **no está verificada**.

**Recomendación:** **B2** por legibilidad (la Y se lee mejor y a tamaño pequeño es más clara); **B1** si se prefiere más dinamismo.

**DECISIÓN (aprobada por el usuario): B2** (rama a 45°), con la **rama rosa por debajo de la azul**. Esto elimina el abultamiento en la unión que aparecía con la rama rosa por encima. Maestro: `elementos-manual-identidad/logo/logo-1tinta-negro.svg`. Los candidatos C2, C4, B1 y la versión curva quedan en `elementos-manual-identidad/logo/exploracion/` como histórico.

**Prueba final (Chrome, `elementos-manual-identidad/logo/exploracion/logo-final-previa.png`):** color, una tinta y negativo a 150, 64, 32 y 16 px. A 16 px la Y sigue legible en las tres versiones y la rama rosa es visible, aunque muy fina; para favicon conviene una variante con más grosor (fase 8).

---

### Revisión 1 (descartada por el usuario) — Y curva con nodo
**Archivos:** `elementos-manual-identidad/logo/logo-1tinta-negro.svg` (maestro propuesto, candidato C4) · `elementos-manual-identidad/logo/exploracion/candidato-c2-simetrico.svg` · `candidato-c4-asimetrico.svg` · `pruebas-c2-vs-c4.png` (pruebas visuales).

### Qué cambió respecto al boceto
- **Nodo separado descartado:** la Y con un punto debajo se leía como "Y!" (signo de exclamación). Se **une el nodo al tallo** como terminal de bola.
- Se compararon dos construcciones con nodo unido: **C2 simétrica** y **C4 asimétrica**.

### Decisión propuesta: C4 (asimétrica + nodo unido)
- **Brazo izquierdo largo** (el origen del flujo) y **brazo derecho más corto y bajo** (la ramificación), que se unen en un tallo y terminan en un **nodo**.
- Da **dirección** (avance, innovación) y evita la simetría genérica de una Y.
- **La V** aparece en la unión de los brazos; el tallo y el nodo son el proceso ya automatizado.

### Construcción (retícula)
| Parámetro | Valor |
|---|---|
| Unidad `u` | 4 (lienzo de 100 × 100) |
| Grosor de trazo | 12 = 3u |
| Terminales | Redondos (radio 6 = 1,5u) |
| Brazo izquierdo | Curva Bézier cúbica de (20,10) a (50,58); controles (20,40) y (50,34) |
| Brazo derecho | Curva Bézier cúbica de (80,26) a (50,58); controles (80,46) y (50,42) |
| Tallo | Recta de (50,54) a (50,76) |
| Nodo | Círculo de radio 10 (2,5u) centrado en (50,85) |
| Margen | 8u alrededor del símbolo en el `viewBox` |

### Pruebas (renderizado en Chrome, ver `pruebas-c2-vs-c4.png`)
| Prueba | C4 | Observación |
|---|---|---|
| Negro 100 % | **Pasa** | Silueta limpia, sin grises ni degradado. |
| Negativo (blanco sobre negro) | **Pasa** | Legible a 80 px y a 32 px. |
| 64 px y 32 px | **Pasa** | Se reconoce la Y con el nodo. |
| 16 px | Pasa con reservas | Se reconoce la silueta, pero el hueco entre los brazos es pequeño y el nodo se acerca al tallo. Para uso en favicon conviene una variante con más grosor. |
| Desenfoque / distancia | Pasa | Se reconoce una "Y" con bola. |
| Descripción en una frase | Pasa | "Dos flujos que confluyen en uno, con un nodo final." |
| Giro / espejo | No probado | Pendiente. |
| Confundible con otra marca | **No verificado** | La Y con terminal de bola puede recordar a símbolos de red o biología; no pude comparar con registros de marcas. Conviene una búsqueda en la oficina de propiedad intelectual antes de usarla comercialmente. |
| Bordado / grabado | Pasa en principio | Una tinta y formas gruesas; pendiente de prueba real. |

### Limitaciones del archivo
- El SVG es de **contornos rellenos** (sin `stroke`), pero están formados por **polilíneas densas**, no por curvas Bézier limpias, y las formas se **superponen** en la unión (se rellenan con `nonzero`). Para producción, **rehacer o simplificar en Illustrator o Figma** con `Unir` del Buscatrazos.
- La **Y sola** sigue siendo una forma común; la diferenciación viene de la asimetría, el nodo y el color (fases 6 y 8).
- El **símbolo no incluye el nombre**; el lockup se hará en la fase 8, con la tipografía de la fase 7.

### Fase 5 (v1.1): construcción en curvas (2026-10-21) — aprobada y aplicada
- **Qué cambia:** solo la ejecución del archivo. Geometría idéntica a v1.0 (unidad u = 4, trazo 12 = 3u, J = (46, 56), entrada 60° L54, rama 45° L36, tallo L32). Entrada y tallo pasan a **un único contorno con arcos exactos** (3 arcos) y la rama, a otro (2 arcos); desaparecen las polilíneas superpuestas.
- **Nombre:** «Yasmani Viñamagua» reconstruido con las curvas de **Nunito SemiBold 600 a 44 u** (fuente variable de Google Fonts, licencia SIL OFL; archivo descargado para la extracción, sin copiarlo al proyecto). Cada letra se coloca en la misma posición horizontal que en v1.0, por lo que el kerning manual se conserva; el texto sigue a trazados (sin `<text>`).
- **Archivos:** las 14 versiones se regeneraron en [logo/](elementos-manual-identidad/logo/) (sustituyen a v1.0, copia en `.yas/backup-v1.0/`), más el maestro `elementos-manual-identidad/logo/logo-master.svg` y los 14 PNG de `elementos-manual-identidad/logo/png/`. Vistas de apoyo en [logo/exploracion/v1.1/](elementos-manual-identidad/logo/exploracion/v1.1/): `lockup-opciones.html` y `pruebas-minimos.png`.
- **Pruebas:**
  | Prueba | Estado | Cómo |
  |---|---|---|
  | Integridad del SVG | verificada | XML válido en 17 archivos; sin `<text>`, imágenes, estilos, filtros, degradados ni referencias externas |
  | Trazados en curvas | verificada | Símbolo: 2 trazados con arcos; nombre: curvas cuadráticas de la fuente; sin polilíneas |
  | Fidelidad frente a v1.0 | verificada | Render en Chrome y diferencia de silueta: símbolo 0,14 %; lockup horizontal 3,7 % y vertical 5,3 % de la tinta, solo en bordes (diferencia de 0,05 u en el `viewBox`) |
  | Negro al 100 %, negativa, 24 px y 16 px | verificada | `pruebas-minimos.png`; el símbolo y el favicon reforzado se leen a 16 px |
  | Lockup a 140 px (horizontal) y 110 px (vertical) | verificada | `pruebas-minimos.png` |
  | Giro / espejo, producción física, diferenciación | no verificada | Sin cambios respecto a v1.0 |
- **Diferencia conocida:** el símbolo exacto mide 64,46 × 90,77 (antes 64,44 × 90,75) porque los arcos llegan al borde exacto que las polilíneas redondeaban hacia dentro; el área de respeto (25 % de la altura) no cambia en la práctica.
- **Decisión del lockup horizontal: H5** (símbolo al 78 %, nombre centrado respecto al símbolo, separación 28 u × 0,78). El lockup vertical no cambia. Aprobado por el usuario. Efecto: los tamaños mínimos del lockup horizontal se reevalúan en la Fase 8 (el lockup es más bajo, 335 en vez de 405 px a 1600 de ancho).

## 6. Color

**Archivo:** `elementos-manual-identidad/logo/exploracion/color-previa.png` (A: navy + nodo rosa · B: degradado · C: negativo).

### Cambios respecto a la marca actual
- **Se elimina el naranja** (decisión de la Fase 2): evita el naranja de la automatización de software y simplifica la paleta.
- **Se mantienen** el azul marino y el rosa (equidad de marca) y se añade un **navy profundo** para fondos y neutros fríos.
- **El degradado deja de ser el logo.** El logo principal es **plano**; el degradado queda como recurso gráfico opcional.

### Paleta
| Color | Función | HEX | RGB | CMYK* | Pantone aproximado** |
|---|---|---|---|---|---|
| **Azul marino** | Principal (símbolo, títulos) | `#223367` | 34 / 51 / 103 | 67 / 50 / 0 / 60 | Entorno de 2767 C o 281 C |
| **Rosa** | Acento firma (nodo, resaltes) | `#FF1563` | 255 / 21 / 99 | 0 / 92 / 61 / 0 | Entorno de 192 C o 1925 C (el RGB es más vivo que cualquier tinta) |
| **Medianoche** | Fondos oscuros, portadas | `#0D1530` | 13 / 21 / 48 | 73 / 56 / 0 / 81 | Entorno de 2767 C o negro 6 C |
| **Pizarra** | Texto secundario | `#5B6478` | 91 / 100 / 120 | 24 / 17 / 0 / 53 | Entorno de 431 C |
| **Niebla** | Fondos claros | `#F2F4F8` | 242 / 244 / 248 | 2 / 2 / 0 / 3 | Entorno de Cool Gray 1 C |
| **Blanco** | Fondo y negativo | `#FFFFFF` | 255 / 255 / 255 | 0 / 0 / 0 / 0 | — |

\* Navy y rosa: valores del manual anterior. Medianoche, Pizarra y Niebla: **conversión matemática simple, no perfil ICC**; validar con prueba impresa.
\** **Pantone: aproximación por cercanía visual, no verificada.** Confirmar con guía física (*Solid Uncoated* si se imprime en papel natural) antes de producir.

### Contraste (calculado, WCAG 2.x)
| Combinación | Ratio | Uso permitido |
|---|---|---|
| Azul marino sobre blanco | 12,09 | Texto y logo, sin restricción |
| Azul marino sobre Niebla | 10,98 | Texto y logo |
| Blanco sobre Azul marino | 12,09 | Texto y logo en negativo |
| Blanco sobre Medianoche | 17,99 | Texto y logo en negativo |
| Rosa sobre Medianoche | 4,75 | Texto normal y acentos |
| Pizarra sobre blanco | 5,93 | Texto secundario |
| **Rosa sobre blanco** | **3,79** | **Solo gráficos y texto grande (≥ 24 px o 18,5 px en negrita)**; no para párrafos |
| Blanco sobre Rosa | 3,79 | Solo texto grande o botones con texto grande |
| **Rosa sobre Azul marino** | **3,19** | **Solo gráficos grandes**; para texto, usar Medianoche como fondo |

### Aplicación del color en el logo (VIGENTE tras la revisión 2)
**Decisión del usuario:** el logo es el **boceto 4 (entrada + rama, B2 a 45°)**, **entrada y tallo en azul marino** y **rama en rosa, dibujada por debajo del azul** (la capa azul se superpone a la rosa en la unión). La paleta se mantiene (el usuario eligió ajustar la actual y no pidió cambios de color).

| Versión | Entrada y tallo | Rama | Fondo |
|---|---|---|---|
| Color | `#223367` | `#FF1563` | Blanco / Niebla |
| Negativo | `#FFFFFF` | `#FF1563` | Medianoche |
| Una tinta negra | `#000000` | `#000000` | Cualquiera claro |
| Una tinta blanca | `#FFFFFF` | `#FFFFFF` | Cualquiera oscuro |

**Archivos:** `elementos-manual-identidad/logo/logo-color.svg`, `logo-negativo.svg`, `logo-1tinta-negro.svg`, `logo-1tinta-blanco.svg` · vista previa en `elementos-manual-identidad/logo/exploracion/logo-final-previa.png`.

*(La tabla siguiente, con el nodo rosa, corresponde a la revisión 1 y queda como histórico.)*

### Histórico: aplicación del color con el nodo (revisión 1)
| Opción | Descripción | Evaluación |
|---|---|---|
| **A. Navy + nodo rosa (propuesta)** | Brazos y tallo en azul marino; el **nodo en rosa**. | Claro, plano, reproducible; el nodo se convierte en la firma. A 16 px el punto rosa sigue visible. |
| B. Degradado navy → rosa | Conserva la herencia del logo actual. | El centro del símbolo queda oscuro y el nodo pierde el rosa; depende de gradiente. Solo como recurso gráfico. |
| C. Negativo | Brazos blancos y nodo rosa sobre Medianoche. | Funciona; es la versión para fondos oscuros. |

### Reglas de uso
- **Proporción sugerida:** 60 % neutros (blanco/Niebla/Medianoche), 30 % azul marino, **10 % rosa o menos**.
- **Rosa** solo como acento: nodo, subrayados, iconos y botones; nunca como fondo grande ni en párrafos.
- **Degradado (opcional):** `#223367` en el 31 % → `#FF1563` en el 91 %, horizontal; solo en fondos, barras y portadas, **con color sólido de reserva**.
- **Prohibido:** añadir colores nuevos (naranja, amarillo, morado), aros o contornos de color, o usar el rosa sobre azul marino para texto.

### Fase 6 (v1.1): neutros y contraste (2026-10-21)  — aprobada (2026-10-21)
- **Entregable:** [paleta/paleta.md](elementos-manual-identidad/paleta/paleta.md) (contrato de `/yas-figma colors`) y [.yas/brand-source.json](.yas/brand-source.json) (ruta del manual y la paleta, porque la marca está en la raíz).
- **Los seis colores de v1.0 no cambian.** Se declaran dos tintes decorativos que ya se usaban: **Línea** `#E3E7F0` y **Bruma** `#C9D0E6` (solo pantalla, Pantone *pendiente de definir*). Se prohíben los demás grises sueltos de las maquetas y del vídeo.
- **Contraste añadido (calculado, WCAG):** Pizarra sobre Medianoche 3,03 (no para texto normal), Rosa sobre Niebla 3,44 (solo gráficos y texto grande), Niebla sobre Medianoche 16,34 y los tintes sobre blanco/Niebla (1,12–1,54: solo decorativos).
- **Pendiente:** aplicar la regla en aplicaciones, manual y vídeo (Fases 9 y 10).

## 7. Tipografía

**Archivo:** `elementos-manual-identidad/logo/exploracion/tipografias.png` (renderizado en Chrome con Google Fonts: "Yasmani Viñamagua", descriptor en versalitas y una muestra con mayúscula, descendente y ascendente: *Aygh*).

### Candidatas (todas con licencia abierta en Google Fonts; verificar la licencia OFL en cada ficha)
| Fuente | Terminales | Carácter | Ancho | Lectura pequeña | Coherencia con el símbolo |
|---|---|---|---|---|---|
| **Montserrat** (actual) | Planos | Geométrica, corporativa | Ancha | Buena | **Baja**: el símbolo tiene terminales redondos |
| **Nunito** | **Redondos** | Amable, humanista | Media | Muy buena | **Alta**: repite los terminales redondos del símbolo |
| **Sora** | Planos | Técnica, futurista | Ancha | Media | Media |
| **Outfit** | Planos | Geométrica, compacta, moderna | Estrecha-media | Buena | Media |
| **Manrope** | Casi planos | Neutra, precisa, moderna | Media | **Muy buena** | Media |

**Observaciones del renderizado:**
- **Montserrat** funciona, pero es ancha y de terminales rectos, lo que contradice el trazo redondeado del símbolo (hallazgo del análisis anterior).
- **Nunito** es la que mejor enlaza con el símbolo; es algo más cálida, por lo que conviene usarla en peso medio-alto para mantener la sobriedad.
- **Sora** da el tono más tecnológico, pero su anchura ocupa mucho espacio y compite con un símbolo delgado.
- **Outfit** es limpia y tecnológica, con letras compactas, pero sus terminales son planos.
- **Manrope** es la más neutra y legible en párrafos y cifras; ideal como fuente de texto.

### Finalistas
**Nunito**, **Manrope** y **Outfit**.

### Opciones de sistema
| | Títulos y logotipo | Texto | Evaluación |
|---|---|---|---|
| **A (recomendada)** | **Nunito** (SemiBold 600 y ExtraBold 800) | **Manrope** (Regular 400, Medium 500, Bold 700) | Terminales redondos en el nombre, coherentes con el símbolo, y texto muy legible. Sobria y tecnológica. |
| B | Outfit (SemiBold y Bold) | Manrope | Más tecnológica y compacta, pero sin la coherencia de terminales. |
| C | Montserrat (actual) | Montserrat | Máxima continuidad, pero mantiene la incoherencia con el símbolo. |

### Sistema propuesto (opción A)
| Uso | Fuente y peso | Tamaño / interlineado (web) | Color |
|---|---|---|---|
| Nombre en logotipo | Nunito SemiBold 600 | Según lockup | Azul marino |
| Título 1 | Nunito ExtraBold 800 | 40 / 48 px | Azul marino |
| Título 2 | Nunito Bold 700 | 28 / 36 px | Azul marino |
| Subtítulo | Nunito SemiBold 600 | 20 / 28 px | Azul marino |
| Párrafo | Manrope Regular 400 | 16 / 26 px | Medianoche |
| Texto secundario | Manrope Medium 500 | 14 / 22 px | Pizarra |
| Descriptor / etiqueta | Manrope Medium 500, versalitas, interletraje +0,14 em | 13 / 18 px | Pizarra |
| Cifras y datos técnicos | Manrope Bold 700 (cifras tabulares) | 16 px | Azul marino |

**Alternativas de sistema (cuando no esté instalada la fuente):** `Nunito → "Segoe UI", system-ui, sans-serif` y `Manrope → "Segoe UI", system-ui, sans-serif`.

### Reglas
- Máximo **dos familias** y **cuatro pesos** por documento.
- Nombre escrito siempre **"Yasmani Viñamagua"** (con ñ y mayúscula inicial en ambas palabras); el título profesional va en el descriptor, no delante del nombre.
- **Prohibido** estirar, deformar o aplicar efectos al texto del logotipo.
- ~~Descriptor propuesto bajo el nombre: "Ingeniería · Automatización"~~ **Descartado** en las fases 7 y 8 (decisión del usuario: sin descriptor). La línea de apoyo «Automatización de procesos con tecnología» va fuera del logotipo (v1.1, fase 1).

## 8. Versiones

**Vista previa:** `elementos-manual-identidad/logo/exploracion/versiones-previa.png` (renderizado en Chrome). Todos los archivos están en `elementos-manual-identidad/logo/`.

### Archivos generados (14)
| Versión | Archivo | Uso |
|---|---|---|
| Símbolo, color | `logo-color.svg` | Avatar de apps, iconos, fondos claros |
| Símbolo, negativo | `logo-negativo.svg` (transparente) | Sobre Medianoche o fotografía oscura |
| Símbolo, una tinta negra / blanca | `logo-1tinta-negro.svg`, `logo-1tinta-blanco.svg` | Sellos, prensa, grabado, bordado, vinilo |
| Lockup horizontal | `logo-horizontal-color.svg`, `-negativo.svg`, `-1tinta-negro.svg`, `-1tinta-blanco.svg` | Cabeceras, firma de correo, web, documentos |
| Lockup vertical | `logo-vertical-color.svg`, `-negativo.svg`, `-1tinta-negro.svg`, `-1tinta-blanco.svg` | Portadas, carteles, formatos cuadrados |
| Avatar | `icono-avatar.svg` | LinkedIn y redes (círculo Medianoche con símbolo en negativo y rama rosa) |
| Favicon | `icono-favicon.svg` | Pestaña del navegador y tamaños ≤ 32 px (**trazo reforzado**: grosor 18 en lugar de 12) |

- Los lockups **negativos** llevan **fondo Medianoche** incluido; el símbolo negativo suelto es transparente.
- **No hay versión con descriptor** (decisión del usuario: "sin descriptor").
- En todas las versiones en color, la **rama rosa va por debajo** de la entrada azul.

### Lockups
| Parámetro | Valor |
|---|---|
| Fuente del nombre | Nunito SemiBold 600, **convertida a trazados** (no depende de la fuente instalada) |
| Texto | "Yasmani Viñamagua" |
| Horizontal | Símbolo a la izquierda; separación = 28 unidades del lienzo (≈ 2,3 × el grosor de trazo); mayúscula del nombre centrada en vertical respecto al símbolo |
| Vertical | Símbolo centrado sobre el nombre; separación = 26 unidades |
| Proporciones | Símbolo ≈ 64 × 91; nombre ≈ 400 de ancho, altura de mayúscula ≈ 31 |
| Color del nombre | Azul marino (color), blanco (negativo y una tinta blanca), negro (una tinta negra) |

### Área de respeto y tamaño mínimo
- **Área de respeto:** **25 % de la altura del símbolo** (≈ 23 unidades) por todos los lados; ya está incluida en el `viewBox` de los lockups.
- **Tamaño mínimo (estimado en pantalla; no probado en impresión):**
| Versión | Pantalla | Impresión (orientativo) |
|---|---|---|
| Símbolo solo | 24 px de alto | 6 mm de alto |
| Favicon reforzado | 16 px | — |
| Lockup horizontal | 140 px de ancho | 35 mm de ancho |
| Lockup vertical | 110 px de ancho | 28 mm de ancho |
- Por debajo de esos tamaños, usar el **símbolo solo** o el **favicon reforzado**.

### Pruebas realizadas (Chrome)
| Prueba | Resultado |
|---|---|
| Lockups horizontal y vertical a 340, 200 y 140 px | Pasan |
| Vertical a 90 y 60 px | **Falla** (el nombre pierde legibilidad); de ahí el mínimo de 110 px |
| Favicon a 64 / 32 / 16 px | Pasa; el trazo reforzado mejora la lectura a 16 px |
| Negativo sobre Medianoche | Pasa |
| Una tinta negra / blanca | Pasa |

### Limitaciones
- El **espaciado entre letras** se aplicó con ajustes manuales (pares "Ya" y "Vi"); no se usó el kerning completo de la fuente. Revisar visualmente al ampliar.
- Los SVG del símbolo son **contornos poligonales** (no curvas Bézier) con formas superpuestas; para producción profesional conviene **redibujarlos en Illustrator o Figma**.
- No se probaron los mínimos en **impresión real** ni el bordado o grabado.
- No se verificó que el conjunto **no se parezca a otras marcas** (conviene una búsqueda en propiedad intelectual antes de registrarla).

### Fase 8 (v1.1): versiones y mínimos (2026-10-21)  — aprobada (2026-10-21)
- **Versiones:** las 14 de v1.0 regeneradas desde la nueva construcción (misma lista y mismos nombres) y el maestro [logo/logo-master.svg](elementos-manual-identidad/logo/logo-master.svg) (lockup horizontal en color, con grupos `simbolo` y `nombre`). **Desviaciones de nombre respecto a `construccion-logo.md` §4**, mantenidas a propósito porque el manual, las aplicaciones y el vídeo las enlazan: `logo-horizontal-*.svg` y `logo-vertical-*.svg` en vez de `logo-horizontal.svg` y `logo-vertical.svg` (una por versión de color), `icono-avatar.svg` en vez de `icono-circulo.svg`, `icono-favicon.svg` en vez de `icono.svg`. **Omitidas:** `logo-con-tagline.svg` (la línea de apoyo va fuera del logo) y `logo-reducido.svg` (el favicon de trazo reforzado cubre el tamaño pequeño).
- **Área de respeto:** 25 % de la altura del símbolo tal como aparece en cada versión (en el lockup horizontal H5, el símbolo mide el 78 %, así que el margen es ≈ 17,7 u en vez de ≈ 22,7 u). Ya está incluida en el `viewBox`.
- **Tamaños mínimos (pantalla, probados en [pruebas-minimos-v1.1.png](elementos-manual-identidad/logo/exploracion/v1.1/pruebas-minimos-v1.1.png); render de Chrome a 1×):**
  | Versión | Probado | Mínimo en pantalla | Impresión (provisional, sin prueba física) |
  |---|---|---|---|
  | Símbolo solo | 32, 24, 20, 16 y 12 px de alto | **24 px** (a 16 px se lee, la rama es muy fina; a 12 px no) | 6 mm de alto |
  | Favicon reforzado | 24 y 16 px | **16 px** | — |
  | Lockup horizontal (H5) | 160, 140, 120, 100 y 90 px de ancho | **120 px** (a 100 px se lee con reservas; a 90 px el nombre se degrada) | 30 mm de ancho |
  | Lockup vertical | 130, 110, 100, 90 y 80 px de ancho | **110 px** (sin cambios; a 100 px se lee con reservas) | 28 mm de ancho |
- **Cambio:** el mínimo del lockup horizontal baja de 140 a 120 px porque en H5 el nombre es relativamente mayor para el mismo ancho. Los valores de impresión de los tres lockups y del símbolo siguen siendo *provisionales* hasta imprimir una prueba (hallazgo P2 de la auditoría, que queda abierto).
- **No verificada:** impresión real, bordado y grabado.

## 9. Aplicaciones

> **Nota sobre la Fase 8:** el usuario observó que en el lockup horizontal el símbolo pesaba hacia abajo. Se compararon cuatro alternativas (`elementos-manual-identidad/logo/exploracion/horizontal-opciones.png`: símbolo al 100, 78 y 62 %, con el nombre centrado o apoyado en la base del tallo) y el usuario decidió **mantener el lockup original (H1)**. Se registra como observación: el tallo cuelga bajo la línea base del nombre; si más adelante molesta, la opción H4 (símbolo al 62 %) es la alternativa evaluada.

**Archivos:** `elementos-manual-identidad/aplicaciones/aplicaciones.html` (composiciones) · `elementos-manual-identidad/aplicaciones/aplicaciones-previa.png` (vista rápida, renderizada con Chrome y Google Fonts) · `recurso-flujo.svg` y `recurso-flujo-oscuro.svg` (recurso gráfico).

### Aplicaciones (7)
| # | Aplicación | Qué muestra | Por qué se resuelve así |
|---|---|---|---|
| 1 | **LinkedIn** | Banner 1584 × 396 y avatar circular (96, 48 y 32 px) | Fondo Medianoche con el lockup negativo; el avatar usa el símbolo en negativo con rama rosa. |
| 2 | **Tarjeta de visita** (90 × 50 mm) | Frente oscuro con símbolo y dorso claro con lockup | La barra rosa corta funciona como firma. |
| 3 | **Firma de correo** | Símbolo a 62 px, separador rosa, nombre en Nunito | Sin título académico delante del nombre (regla de la Fase 7). |
| 4 | **Portada de memoria técnica** (A4) | Fondo Medianoche, título en Nunito, recurso de líneas de flujo | Sustituye los triángulos decorativos de la plantilla anterior. |
| 5 | **Documento interior** (A4) | Cabecera con logo, títulos con acento rosa, tabla navy, pie con nombre | Corrige el fallo del análisis: el documento Word llevaba la marca casi invisible. |
| 6 | **Presentación** (16:9) | Portada oscura y diapositiva de contenido clara | Poco texto, viñetas rosa y franja superior navy + rosa. |
| 7 | **Sitio web** | Cabecera con lockup, portada con titular y botones | Resaltado rosa bajo la palabra clave; botones navy con texto blanco (contraste 12,09). |

### Recurso gráfico propio: "líneas de flujo"
Derivado de la geometría del símbolo: **líneas a 60° que convergen** (la entrada, en tres tonos de azul o blanco con transparencia) y **una rama rosa a 45°**. Se usa recortado en esquinas de banners, portadas y diapositivas, y reducido en diapositivas de contenido. **Reglas:** un solo recurso por pieza, siempre dentro de la paleta, sin añadir otros colores, y nunca más grande que el logotipo en una composición de identidad.

### Pruebas y observaciones
- **Contraste:** todos los textos usan navy o blanco sobre Medianoche; el rosa solo en acentos, barras, viñetas y subrayado (ningún párrafo en rosa).
- **Tamaños:** la firma de correo y el avatar (32 px) están por encima de los mínimos definidos.
- **Ajuste durante la revisión:** el recurso de flujo era demasiado grande y competía con el logotipo; se redujo en banner, portada y diapositiva oscura.
- **Limitaciones:**
  - Los textos, el cargo y los datos de contacto son **de ejemplo** (marcados entre corchetes).
  - Son **composiciones HTML**, no archivos editables de Word ni PowerPoint; para usarlas en esos programas habría que reconstruirlas en cada herramienta.
  - La vista previa depende de Google Fonts (Nunito y Manrope).
  - No se probaron impresiones reales (tarjeta ni portada).

### Fase 9 (v1.1): aplicaciones y recurso de flujo (2026-10-21)  — aprobada (2026-10-21)
- **Archivos actualizados:** [aplicaciones/aplicaciones.html](elementos-manual-identidad/aplicaciones/aplicaciones.html) y su vista [aplicaciones/aplicaciones-previa.png](elementos-manual-identidad/aplicaciones/aplicaciones-previa.png) (copia de la vista v1.0 en `.yas/backup-v1.0/aplicaciones/`).
- **Línea de apoyo** «Automatización de procesos con tecnología»: añadida en el banner de LinkedIn (Manrope Medium, Niebla sobre Medianoche, 16,34) y en la portada web (Pizarra sobre Niebla, 5,39). El titular web pasa a «Procesos que funcionan mejor, con responsabilidad.» para no repetir la línea. Tarjeta y firma, sin cambios (decisión del usuario).
- **Recurso de flujo, regla medible:** un solo recurso por pieza, anclado a una esquina, de como máximo el 60 % de la altura de la pieza, sin tocar texto ni el área de respeto del logotipo. Aplicado en banner, portada de memoria, portada de presentación y portada web.
- **Lockup horizontal H5** aplicado en las piezas. En el documento interior la cabecera sube de 22 a 26 px de alto (ancho ≈ 124 px, por encima del mínimo de 120 px).
- **Neutros:** todos los HEX de las maquetas pertenecen ya a la paleta (comprobado por búsqueda: `#0D1530`, `#223367`, `#5B6478`, `#C9D0E6`, `#E3E7F0`, `#F2F4F8`, `#FF1563`).
- **Antes y después:** la vista v1.0 está en `.yas/backup-v1.0/aplicaciones/aplicaciones-previa.v1.0.png`.
- **Limitaciones:** composiciones HTML con datos de ejemplo (sin plantillas Word ni PowerPoint); no se probaron impresiones; la vista renderizada necesita conexión para cargar Nunito y Manrope.

## 10. Manual

**Archivos:** `elementos-manual-identidad/manual/manual-identidad.md` y `elementos-manual-identidad/manual/manual-identidad.html` (autocontenido salvo las rutas relativas a `../logo/` y `../aplicaciones/`; usa Nunito y Manrope desde Google Fonts; se imprime a PDF con saltos de página por sección).

**Secciones (11):** Introducción · El logotipo · Construcción · Versiones · Área de respeto y tamaño mínimo · Usos incorrectos · Color · Tipografía · Aplicaciones · Estructura gráfica y recursos · Entregables y contacto.

**Archivos añadidos en esta fase:** `elementos-manual-identidad/logo/construccion.svg` (diagrama de construcción con retícula de 4 unidades, ejes a 60° y 45°, trazo de 12), `elementos-manual-identidad/logo/png/` (14 PNG de 1600 px de ancho con fondo transparente, salvo los negativos con fondo Medianoche y el avatar y el favicon con su fondo).

### Lista de comprobación final
| Comprobación | Estado |
|---|---|
| Versión a una tinta incluida (negro y blanco) | Sí |
| Lockup con el nombre (horizontal y vertical) | Sí |
| Paleta con HEX, RGB, CMYK y Pantone aproximado | Sí (Pantone **no verificado**) |
| Tamaño mínimo y área de respeto | Sí (estimados, **sin prueba en impresión**) |
| Usos incorrectos | Sí (con ejemplos visuales) |
| Licencias de fuentes anotadas | Sí (SIL OFL en Google Fonts; **verificar en cada ficha**) |
| Aplicaciones con la paleta y tipografía oficiales | Sí |
| Nombre y título en un solo formato ("Yasmani Viñamagua", sin título delante) | Sí |
| Valores de color idénticos en spec, manual y archivos | Sí |
| Documento con la marca visible (no solo portada) | Sí |

### Pendientes y limitaciones (a vista del usuario)
1. **Redibujar el símbolo con curvas Bézier** en Illustrator o Figma (los SVG son polilíneas con formas superpuestas).
2. **Verificar los Pantone** con guía física y probar los mínimos en impresión real.
3. **Búsqueda de anterioridades** en propiedad intelectual antes de registrar o publicar la marca.
4. **Kerning** del nombre: ajustes manuales en "Ya" y "Vi".
5. **Plantillas editables** de Word y PowerPoint: no generadas (solo composiciones HTML).
6. **Datos de contacto** del manual y de las aplicaciones: pendientes.
7. **Observación abierta:** en el lockup horizontal el usuario percibió el símbolo con más peso hacia abajo; se mantuvo la versión original (H1) y la alternativa H4 queda documentada.

### Fase 10 (v1.1): manual (2026-10-21)  — aprobada (2026-10-21)
- **Archivos:** [manual/manual-identidad.md](elementos-manual-identidad/manual/manual-identidad.md) y [manual/manual-identidad.html](elementos-manual-identidad/manual/manual-identidad.html), versión 1.1, más la vista [manual/manual-previa.png](elementos-manual-identidad/manual/manual-previa.png). Copia de v1.0 en `.yas/backup-v1.0/manual/`.
- **Cambios frente a v1.0:** línea de apoyo (§1, §8); símbolo y nombre en curvas, maestro y lockup H5 (§2–§4); mínimos y área de respeto reevaluados, impresión provisional (§5); usos incorrectos ampliados (§6); tintes Línea y Bruma y filas de contraste nuevas (§7); regla medible del recurso de flujo (§10); pendientes y registro de cambios actualizados (§11). Cubre los hallazgos P1 y P2 y los P3 (spec, neutros, tabla de contraste, `alt`).
- **Validaciones ejecutadas:** todos los `src` y `href` locales del HTML y los enlaces del Markdown existen; los HEX del HTML están todos en la paleta; solo queda un `alt=""` (el recurso decorativo de la portada); la portada ya no solapa texto (vista renderizada en Chrome); HTML y Markdown coinciden en versión, mínimos, contrastes y reglas.
- **Pendiente de validación humana o física:** impresión (mínimos y Pantone), anterioridades, plantillas de Word/PowerPoint y datos de contacto. La vista renderizada necesita conexión para cargar Nunito y Manrope.

## 10b. Plan de transición (v1.1, 2026-10-21)  — aprobada (2026-10-21)
- **Archivo:** [manual/transicion.md](elementos-manual-identidad/manual/transicion.md).
- **Orden:** web y LinkedIn → firma y plantillas de documentos → tarjeta (tras la prueba física) → revisar el vídeo. Fechas: *pendiente de definir*.
- **Coexistencia:** v1.0 y v1.1 pueden convivir (mismo símbolo, color y nombre); solo se evita mezclar los dos lockups horizontales en una pieza.
- **Retirar o agotar:** agotar lo impreso con v1.0; los SVG y PNG antiguos quedan en `.yas/backup-v1.0/`.
- **Comunicación:** no requiere anuncio (ajuste de ejecución).
- **Riesgos:** piezas con el lockup antiguo, banner en móvil, mínimo de 120 px, producción impresa sin prueba.

## Registro de decisiones
| Fase | Decisión | Motivo | Aprobada |
|---|---|---|---|
| 0 | Rediseño conservando la esencia de "AY" | Hay equidad de marca (logo, paleta, uso en documentos) y los fallos son de sistema, no de idea | Sí |
| 1 | Público: clientes y empresas + empleadores | Respuesta del usuario | Sí |
| 1 | Personalidad: innovadora/tecnológica + confiable/sobria | Respuesta del usuario | Sí |
| 1 | Meta, objetivos y adjetivos | Redactados a partir del brief | Sí |
| 2 | Dirección: navy ancla + rosa acento; **se elimina el naranja** | El rosa ocupa un hueco; el naranja es el color de la automatización de software | Sí |
| 3 | Concepto B: una Y que confluye (YV) + tilde ñ como recurso secundario | El nombre público es Yasmani Viñamagua, no "AY" | Sí |
| 4 | Candidato C (curva + nodo) | Recomendado en bocetos | Sí (luego sustituido) |
| 5 | Revisión 1 (Y curva con nodo) | — | Descartada por el usuario |
| 5 | **Revisión 2: boceto 4 (entrada + rama), B2 a 45°, rama rosa por debajo de la azul** | Pedido del usuario; se lee mejor como Y y no da lectura de "Y!" | Sí |
| 6 | Paleta navy, rosa, medianoche, pizarra, niebla (sin naranja) | El usuario pidió ajustar la actual | Sí |
| 7 | Nunito + Manrope, **sin descriptor** | Terminales redondos como el símbolo | Sí |
| 8 | Lockup horizontal H1 sin cambios | El usuario prefirió dejarlo como estaba | Sí |
| 9 | 7 aplicaciones y recurso de líneas de flujo | — | Sí |
| 10 | Manual en Markdown y HTML | — | Sí (v1.0 aprobada implícitamente; v1.1 aprobada el 2026-10-21) |
| 0b (v1.1, 2026-10-21) | Rebranding con alcance **ajuste** a partir de la auditoría (P1, P2 y P3); fases 0, 0b, 1 (línea de apoyo), 5, 6, 8, 9, 10 y 10b | Los hallazgos son de ejecución y de mensaje; el concepto y el símbolo se conservan | Aprobado por el usuario (2026-10-21). Salida: se actualiza en su sitio; copia de v1.0 en `.yas/backup-v1.0/` |
| 1 (v1.1, 2026-10-21) | Línea de apoyo «Automatización de procesos con tecnología», fuera del logotipo; solo en banner de LinkedIn y web | Cubre el posicionamiento (P1) sin romper «sin descriptor»; el usuario descartó tarjeta y firma | Aprobada por el usuario |
| 5 (v1.1, 2026-10-21) | Símbolo y nombre en curvas (misma geometría); lockup horizontal **H5** (78 %); se sustituyen los SVG y PNG de `elementos-manual-identidad/logo/` y se añade `logo-master.svg` | Resuelve los hallazgos de trazados poligonales y de equilibrio del lockup | Aprobada por el usuario |
| 6, 8, 9 (v1.1, 2026-10-21) | Tintes Línea y Bruma (solo decorativos); mínimos: símbolo 24 px, favicon 16 px, horizontal 120 px, vertical 110 px (impresión provisional); aplicaciones con línea de apoyo, recurso ≤ 60 % de la altura y neutros en paleta | Cierran los hallazgos de color, mínimos y recurso de la auditoría | Aprobadas por el usuario |
| 10, 10b (v1.1, 2026-10-21) | Manual v1.1 (MD y HTML) y plan de transición (`elementos-manual-identidad/manual/transicion.md`); fechas pendientes de definir | Recoge el ajuste y los hallazgos de la auditoría | Aprobadas por el usuario |
