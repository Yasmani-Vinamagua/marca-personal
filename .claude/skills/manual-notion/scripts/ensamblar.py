#!/usr/bin/env python3
"""Ensambla un manual en un solo HTML autocontenido (A4, listo para exportar a PDF).

Uso:  python ensamblar.py manuales/<slug>/            (lee manual.json y cuerpo.html)
Salida: manuales/<slug>/manual.html

manual.json
  titulo, subtitulo, tipo (p. ej. "Manual de usuario"), version, fecha, autor,
  tema_portada ("oscuro"|"claro"), texto_final ("end?" por defecto), numerar (true por defecto),
  logo_oscuro / logo_claro (rutas opcionales; por defecto el logo horizontal de la marca)
cuerpo.html
  Fragmento con los bloques del manual (ver SKILL.md, "Bloques HTML"). Las imágenes con ruta relativa
  se incrustan en base64 para que el HTML sea un único archivo.

Las plantillas guias-manuales/plantilla-*.html no se tocan: el diseño vive en assets/manual.css.
"""
import base64
import html
import json
import mimetypes
import re
import sys
from pathlib import Path

SKILL = Path(__file__).resolve().parent.parent
RAIZ = SKILL.parents[2]                       # <repo>/.claude/skills/manual-notion → <repo>
FUENTES = [("Nunito", 700), ("Nunito", 800), ("Manrope", 400), ("Manrope", 500), ("Manrope", 700)]
LOGOS = RAIZ / "elementos-manual-identidad" / "logo"

RECURSO = """<svg class="recurso" viewBox="0 0 200 200" aria-hidden="true"><g fill="none" stroke-linecap="round" stroke-width="12">
<path d="M30 10 L96 110" stroke="var(--flujo)" opacity=".30"/><path d="M62 10 L128 110" stroke="var(--flujo)" opacity=".18"/>
<path d="M94 10 L160 110" stroke="var(--flujo)" opacity=".10"/><path d="M96 110 L150 56" stroke="var(--rosa)" opacity=".55"/>
<path d="M96 110 L96 190" stroke="var(--flujo)" opacity=".30"/></g></svg>"""


def data_uri(ruta: Path) -> str:
    tipo = mimetypes.guess_type(ruta.name)[0] or "application/octet-stream"
    return f"data:{tipo};base64," + base64.b64encode(ruta.read_bytes()).decode()


def font_faces() -> str:
    reglas = []
    for familia, peso in FUENTES:
        f = RAIZ / "web" / "fonts" / f"{familia.lower()}-{peso}.woff2"
        reglas.append(
            f'@font-face {{ font-family: "{familia}"; font-weight: {peso}; '
            f'src: url("data:font/woff2;base64,{base64.b64encode(f.read_bytes()).decode()}") format("woff2"); }}'
        )
    return "\n".join(reglas)


def incrustar_imagenes(cuerpo: str, carpeta: Path) -> str:
    def reemplazo(m):
        src = m.group(2)
        if src.startswith(("data:", "http://", "https://")):
            if src.startswith("http"):
                print(f"AVISO: imagen remota sin incrustar ({src[:70]}); descárgala a img/ para que el PDF no dependa de la red.")
            return m.group(0)
        ruta = (carpeta / src).resolve()
        if not ruta.exists():
            sys.exit(f"ERROR: no existe la imagen {src} (buscada en {ruta})")
        return f'{m.group(1)}{data_uri(ruta)}{m.group(3)}'

    return re.sub(r'(<img\b[^>]*?\ssrc=")([^"]+)(")', reemplazo, cuerpo)


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    carpeta = Path(sys.argv[1]).resolve()
    cfg = json.loads((carpeta / "manual.json").read_text(encoding="utf-8"))
    cuerpo = (carpeta / "cuerpo.html").read_text(encoding="utf-8")
    cuerpo = incrustar_imagenes(cuerpo, carpeta)

    esc = lambda k, d="": html.escape(str(cfg.get(k, d)))
    tema = cfg.get("tema_portada", "oscuro")
    logo_claro = Path(cfg["logo_claro"]) if cfg.get("logo_claro") else LOGOS / "logo-horizontal-color.svg"
    logo_oscuro = Path(cfg["logo_oscuro"]) if cfg.get("logo_oscuro") else LOGOS / "logo-horizontal-1tinta-blanco.svg"
    logo_portada = data_uri(logo_oscuro if tema == "oscuro" else logo_claro)
    logo_pie = data_uri(logo_claro)

    config = {"numerar": cfg.get("numerar", True), "logo": logo_pie, "titulo_indice": cfg.get("titulo_indice", "Índice")}
    etiqueta = f'Versión <b>{esc("version", "1.0")}</b>' + (f'<br>{esc("fecha")}' if cfg.get("fecha") else "")

    pagina = f"""<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc("titulo", "Manual")}</title>
<style>
{font_faces()}
{(SKILL / "assets" / "manual.css").read_text(encoding="utf-8")}
</style>
</head>
<body>

<div class="barra"><button type="button" onclick="window.print()">Exportar a PDF</button></div>

<section class="hoja hoja-portada" data-tema="{tema}" aria-label="Portada del manual">
  {RECURSO}
  <header class="cabecera">
    <img src="{logo_portada}" alt="{esc("autor")}">
    <p class="etiqueta">{etiqueta}</p>
  </header>
  <div class="centro">
    <p class="tipo">{esc("tipo", "Manual de usuario")}</p>
    <h1>{esc("titulo")}</h1>
    <p class="subtitulo">{esc("subtitulo")}</p>
  </div>
  <footer>
    <dl class="pie"><div class="dato"><dt>Autor</dt><dd>{esc("autor")}</dd></div></dl>
  </footer>
</section>

<div id="paginas"></div>

<section class="hoja hoja-final" data-tema="claro" aria-label="Página final">
  <p class="fin">{esc("texto_final", "end?")}</p>
</section>

<div id="flujo">
{cuerpo}
</div>

<script id="cfg" type="application/json">{json.dumps(config)}</script>
<script>
{(SKILL / "assets" / "paginar.js").read_text(encoding="utf-8")}
</script>
</body>
</html>
"""
    salida = carpeta / "manual.html"
    salida.write_text(pagina, encoding="utf-8")
    print(f"OK: {salida} ({salida.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
