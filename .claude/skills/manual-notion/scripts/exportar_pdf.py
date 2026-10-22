#!/usr/bin/env python3
"""Comprueba, fotografía y exporta a PDF un manual.html usando Edge o Chrome sin interfaz.

  python exportar_pdf.py verificar manuales/<slug>/manual.html
      → número de hojas y avisos (bloques que no caben). Código de salida 1 si hay avisos.
  python exportar_pdf.py capturas  manuales/<slug>/manual.html [carpeta]
      → una captura PNG por hoja (carpeta por defecto: <slug>/capturas/) para revisarlas con Read.
  python exportar_pdf.py pdf       manuales/<slug>/manual.html [salida.pdf]
      → PDF A4 sin cabeceras del navegador (por defecto manual.pdf junto al HTML).
"""
import json
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

CANDIDATOS = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    "/usr/bin/google-chrome", "/usr/bin/chromium", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
]


def navegador() -> str:
    for c in CANDIDATOS:
        if Path(c).exists():
            return c
    for nombre in ("msedge", "chrome", "google-chrome", "chromium"):
        r = shutil.which(nombre)
        if r:
            return r
    sys.exit("ERROR: no se encontró Edge ni Chrome.")


def ejecutar(*args, timeout=180):
    perfil = tempfile.mkdtemp(prefix="manual-pdf-")
    cmd = [navegador(), "--headless", "--disable-gpu", "--no-first-run",
           f"--user-data-dir={perfil}", "--virtual-time-budget=20000", *args]
    try:
        return subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", timeout=timeout)
    finally:
        shutil.rmtree(perfil, ignore_errors=True)


def uri(ruta: Path, extra="") -> str:
    return ruta.resolve().as_uri() + extra


def resumen(html: Path) -> dict:
    r = ejecutar("--dump-dom", uri(html))
    m = re.search(r'<meta name="manual-resumen" content="([^"]*)"', r.stdout)
    if not m:
        sys.exit("ERROR: el manual no terminó de paginarse (revisa errores de JavaScript en cuerpo.html).")
    import html as h
    return json.loads(h.unescape(m.group(1)))


def main():
    if len(sys.argv) < 3 or sys.argv[1] not in ("verificar", "capturas", "pdf"):
        sys.exit(__doc__)
    modo, html = sys.argv[1], Path(sys.argv[2]).resolve()
    if not html.exists():
        sys.exit(f"ERROR: no existe {html}")

    if modo == "verificar":
        r = resumen(html)
        print(f"Hojas: {r['hojas']}")
        for a in r["avisos"]:
            print("AVISO:", a)
        sys.exit(1 if r["avisos"] else 0)

    if modo == "capturas":
        carpeta = Path(sys.argv[3]).resolve() if len(sys.argv) > 3 else html.parent / "capturas"
        carpeta.mkdir(parents=True, exist_ok=True)
        for viejo in carpeta.glob("hoja-*.png"):
            viejo.unlink()
        n = resumen(html)["hojas"]
        for i in range(1, n + 1):
            destino = carpeta / f"hoja-{i:02d}.png"
            ejecutar(f"--screenshot={destino}", "--window-size=900,1200", uri(html, f"?p={i}"))
        print(f"{n} capturas en {carpeta}")
        return

    salida = Path(sys.argv[3]).resolve() if len(sys.argv) > 3 else html.with_suffix(".pdf")
    ejecutar("--no-pdf-header-footer", f"--print-to-pdf={salida}", uri(html))
    if not salida.exists():
        sys.exit("ERROR: no se generó el PDF.")
    esperadas = resumen(html)["hojas"]
    paginas = len(re.findall(rb"/Type\s*/Page[^s]", salida.read_bytes()))
    print(f"PDF: {salida} ({salida.stat().st_size // 1024} KB, {paginas} páginas; el HTML tiene {esperadas} hojas)")
    if paginas != esperadas:
        sys.exit("AVISO: el número de páginas del PDF no coincide con el de hojas; revisa antes de entregarlo.")


if __name__ == "__main__":
    main()
