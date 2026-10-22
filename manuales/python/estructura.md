# Estructura — Manual «Python: de lo básico a lo avanzado»

**Público:** estudiantes y profesionales que aprenden Python o necesitan una guía de consulta. **Requisitos previos:** manejo básico de terminal y editor. **Resultado de aprendizaje:** escribir programas en Python con estructuras de datos, funciones y clases, manejar archivos y errores, organizar proyectos con módulos y entornos virtuales, y construir aplicaciones (juego, interfaz gráfica, asistente de voz, reconocimiento facial, sitio Django).
**Alcance (decidido por el autor):** todas las secciones de «Python - Udemy», incluidos los ejemplos aplicados y las lecturas, más «Curso Python». Ver `fuentes/00-fuentes.md`.

| # | Capítulo | Fuente | Complemento añadido |
|---|---|---|---|
| 01 | Introducción | — | Convenciones |
| 02 | Fundamentos del lenguaje | Udemy: Input, Print, Obtener datos, Transformar datos, Operadores; Curso Básico/Intermedio | PEP 8 (van Rossum et al., 2001); f-strings (PSF, s. f.-b) |
| 03 | Cadenas de texto | Udemy: Obtener e imprimir datos; PDF métodos de strings; imagen slicing | — |
| 04 | Estructuras de datos | Udemy: Listas, Tuplas, Diccionarios; PDF sets; imágenes | Métodos in-place devuelven None; tupla con objetos mutables; claves inmutables (PSF, s. f.-a); tabla comparativa |
| 05 | Control de flujo | Udemy: For, While, Pass/Break/Return | Aviso de bucle infinito |
| 06 | Funciones | Udemy: *arg y **kwarg; Curso Intermedio/Avanzando (lambda, scope, nested, closures) | Ejemplos propios de lambda y clausura |
| 07 | Decoradores, iteradores y generadores | Udemy: Decoradores, Generadores; Curso Avanzando | Sintaxis `@` equivalente; expresión generadora |
| 08 | Programación orientada a objetos | Udemy: Clases, Herencias, Polimorfismo, Métodos especiales, Pilares | Aclaración atributo de instancia vs clase (shadowing) |
| 09 | Manejo de archivos | Udemy: Manipulación de archivos, OS/Shutil, Zipfile; Curso Intermedio (modos) | `with` y codificación (PSF, s. f.-b) |
| 10 | Manejo de errores y calidad del código | Udemy: Manejo de errores, Buscar errores; Curso Intermedio/Avanzando (assert, debug, typing, mypy) | unittest (PSF, s. f.-e); consejo except específico |
| 11 | Módulos, paquetes y entornos virtuales | Udemy: Módulos y paquetes, collections, datetime, time/timeit, math, re, venv; Curso Intermedio (pip, Anaconda) | venv (PSF, s. f.-f); tabla de activación por terminal |
| 12 | Proyectos aplicados | Udemy: Invasión Espacial, Tkinter, Asistente de voz, Reconocimiento facial, Sitio Web | tkinter (PSF, s. f.-d); Django (Django Software Foundation, s. f.); PyAudio (PyPI, s. f.); avisos de seguridad y privacidad |
| 13 | Lecturas y herramientas complementarias | Udemy: Web Scraping, Análisis de datos | Aviso sobre robots.txt y términos de uso |
| — | Glosario · Referencias · Anexo A (código del videojuego) | — | Referencias APA 7 |

## Observaciones sobre el contenido original
- **Diccionarios:** el ejemplo `persona = {` no cerraba la llave y `persona.pop("edad"` no cerraba el paréntesis; se corrigieron.
- **Curso Básico:** el ejemplo de la función `run()` tenía la indentación rota; se corrigió.
- **Curso Intermedio, archivos:** `with open("./ruta/del/archivo.txt, "r") as f: encoding="utf-8"` era sintácticamente incorrecto; se reescribió como `open(ruta, "r", encoding="utf-8")`.
- **Curso Intermedio:** `pip install -r requirements.txr` (errata); se corrigió a `.txt`. «KryboardInterrupt» y «KayError» eran erratas de `KeyboardInterrupt` y `KeyError`.
- **Entornos virtuales:** `.nombre_entorno\Scripts\activate` (punto inicial) no es la ruta correcta; se usó `nombre\Scripts\activate`.
- **Pylint:** los comandos incluían rutas personales (`D:\Users\yasma\...`); se sustituyeron por `pip install pylint` y `pylint archivo.py`.
- **Decoradores:** el texto decía `args y *kwargs`; se corrigió a `*args` y `**kwargs`. El ejemplo aplicaba el decorador de forma manual; se añadió la sintaxis `@`.
- **Herencias:** el ejemplo hacía que `Leon` heredara de `Pajaro` (poco coherente); se renombró a `Aguila` conservando la estructura.
- **Clases:** «Chihuagua» → «Chihuahua»; la indentación del ejemplo estaba mezclada.
- **Sets (PDF):** el ejemplo de `pop()` mostraba `{2}` como resultado; `pop()` devuelve un elemento (p. ej. `2`), no un conjunto.
- **Asistente de voz:** la palabra clave `"repoducir"` (errata) nunca coincidiría con el comando «reproducir»; se corrigió. Las rutas de voz de Windows con `\S`, `\M`… generan secuencias de escape inválidas; se pasaron a cadenas crudas (`r"..."`). Textos «salifo» y «Míercoles» corregidos.
- **Django:** `cd proyecto` no coincidía con `nombre_proyecto`; se corrigió.
- **Bloques de código de Notion:** contenían restos de copiado («python / CopiarEditar»); se eliminaron.
- **Tkinter:** la calculadora usa `eval()`; se añadió un aviso.
- **Autoría del curso:** inferida (ver `fuentes/00-fuentes.md`).

## Decisiones del autor (revisión del HTML)
- Alcance: todo, incluidos los ejemplos aplicados. Título: «Python: de lo básico a lo avanzado».
- Sin secciones de propósito, público ni objetivos de aprendizaje (preferencia general).
