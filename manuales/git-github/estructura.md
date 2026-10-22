# Estructura — Manual «Git y GitHub»

**Público:** estudiantes y profesionales que inician en control de versiones o buscan una guía de consulta.
**Requisitos previos:** uso básico de terminal y editor de texto.
**Resultado de aprendizaje:** versionar un proyecto localmente, recuperar estados anteriores, trabajar con ramas, sincronizar con remotos y colaborar mediante pull requests.
**Fuentes:** Notion «Git - GitHub» (1), Notion «Git-GitHub Básico» (2), PDF DevTalles (3). Ver `fuentes/00-fuentes.md`.

| # | Capítulo | Tipo | Fuente | Complemento añadido |
|---|---|---|---|---|
| 01 | Introducción | Guía | — | Convenciones y fuentes del documento |
| 02 | Fundamentos del control de versiones | Concepto | 3 (glosario) | Tres estados y tres áreas (Chacon y Straub, 2014); figura 1 propia |
| 03 | Configuración inicial | Procedimiento | 1, 3 | Aviso sobre comillas rectas; `init.defaultBranch` |
| 04 | Flujo básico de trabajo | Procedimiento | 1, 2, 3 | Aclaración de `git rm --cached`; salida de Vim |
| 05 | Inspección del historial | Referencia | 1, 3 | — |
| 06 | Deshacer cambios y recuperar versiones | Procedimiento | 1, 3 | Criterio reset vs revert |
| 07 | Ramas y fusión | Procedimiento | 1, 2, 3 | — |
| 08 | Repositorios remotos y GitHub | Procedimiento | 1, 2, 3 | Ed25519 (GitHub, s. f.-b); Pages desde rama o Actions (GitHub, s. f.-a) |
| 09 | Colaboración en GitHub | Procedimiento | 1, 3 | — |
| 10 | Etiquetas | Referencia | 1, 2, 3 | — |
| 11 | Buenas prácticas y mensajes de commit | Concepto | 1, 3 | Conventional Commits y SemVer (Conventional Commits, s. f.) |
| 12 | Productividad: alias y GitHub CLI | Referencia | 1, 3 | — |
| 13 | Markdown para documentación | Referencia | 3 | — |
| — | Glosario · Referencias | Apoyo | 3 | Referencias APA 7 |

## Observaciones sobre el contenido original
- Notion 1: `git rm --cached` se describe como «tenerlo en la memoria RAM»; en realidad solo deja de rastrear el archivo y lo conserva en disco. Se redactó la versión correcta.
- Notion 1: «`git commit -a` … Esc + Shift + z + z» corresponde a salir de Vim, no a un comando de Git. Se explicó en un recuadro.
- Notion 1: `git log -S "palabra"` se describe como «cuántas veces escribí la palabra»; en realidad encuentra los commits que añadieron o quitaron esa cadena.
- Notion 1: comillas tipográficas “ ” en los comandos; se sustituyeron por comillas rectas (las tipográficas rompen los comandos).
- Notion 1 usa `master`; el PDF y los repositorios actuales usan `main`. Se unificó a `main` con aviso.
- Notion 1: «cambiamos el source de none a master branch» (GitHub Pages) está desactualizado; se actualizó con la ruta actual y se citó la fuente.
- Notion 1 recomienda `ssh-keygen -t rsa -b 4096`; GitHub recomienda Ed25519. Se mantuvo RSA como alternativa y se citó la recomendación.
- Notion 1: sobre `rebase`, «primero se hace rebase … aunque no es recomendado»; se reformuló con la regla de no reescribir commits ya publicados (DevTalles).
- Notion 1 no incluía los comandos `restore`, `switch`, `worktree`, `gh` ni los atajos; provienen del PDF (3).


## Decisión del autor (revisión del HTML)
No se incluyen secciones de «Propósito del manual», «Público y conocimientos previos» ni «Objetivos de aprendizaje» (el análisis del público se mantiene arriba solo como referencia interna).
