#!/usr/bin/env python3
"""Konvertiert die asamer-Wortmarke aus DM Sans in schriftunabhaengige SVG-Pfade.
Gibt fuer jede Textzeile den path-d, die Breite und vertikale Metriken aus."""
import json, os, urllib.request
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen

SRC = "/tmp/asbrand/DMSans.ttf"
TTF_URL = "https://github.com/google/fonts/raw/main/ofl/dmsans/DMSans%5Bopsz%2Cwght%5D.ttf"

if not os.path.exists(SRC):
    os.makedirs(os.path.dirname(SRC), exist_ok=True)
    print("Lade DM Sans Variable TTF ...")
    urllib.request.urlretrieve(TTF_URL, SRC)


def load_instance(wght, opsz):
    f = TTFont(SRC)
    instantiateVariableFont(f, {"wght": wght, "opsz": opsz}, inplace=True)
    return f


def text_to_path(font, text, font_size, tracking_em=0.0):
    """Layout linker-buendig auf baseline y=0, gibt (path_d, advance_width) zurueck.
    tracking_em: zusaetzlicher Buchstabenabstand in em (CSS letter-spacing)."""
    upm = font["head"].unitsPerEm
    scale = font_size / upm
    cmap = font.getBestCmap()
    glyphset = font.getGlyphSet()
    hmtx = font["hmtx"]
    track_units = tracking_em * upm  # in Font-Einheiten
    x_cursor = 0.0
    parts = []
    for ch in text:
        gname = cmap.get(ord(ch))
        if gname is None:
            raise SystemExit(f"Glyph fehlt: {ch!r}")
        adv, _lsb = hmtx[gname]
        pen = SVGPathPen(glyphset)
        glyphset[gname].draw(pen)
        d = pen.getCommands()
        if d:
            # Glyph an x_cursor platzieren, Y spiegeln (Font y-up -> SVG y-down)
            parts.append(
                f'<path transform="translate({x_cursor*scale:.3f} 0) '
                f'scale({scale:.6f} {-scale:.6f})" d="{d}"/>'
            )
        x_cursor += adv + track_units
    width = (x_cursor - track_units) * scale  # letztes tracking nicht zaehlen
    return "".join(parts), width


# --- Wortmarke "asamer": DM Sans Medium(500), tracking-tight (-0.02em) ---
f_word = load_instance(500, 24)
asamer_d, asamer_w = text_to_path(f_word, "asamer", 100, tracking_em=-0.02)

# --- Subline "TECHNOLOGIE": DM Sans Medium, gesperrt (tracking-widest ~0.18em) ---
f_sub = load_instance(500, 14)
sub_d, sub_w = text_to_path(f_sub, "TECHNOLOGIE", 100, tracking_em=0.18)

# Cap-/x-Height fuer vertikale Zentrierung
os2 = f_word["OS/2"]
upm = f_word["head"].unitsPerEm
cap_h = os2.sCapHeight / upm * 100
x_h = os2.sxHeight / upm * 100
asc = f_word["hhea"].ascent / upm * 100
desc = f_word["hhea"].descent / upm * 100

out = {
    "asamer": {"d": asamer_d, "width": round(asamer_w, 2), "fontSize": 100},
    "technologie": {"d": sub_d, "width": round(sub_w, 2), "fontSize": 100},
    "metrics": {"capHeight": round(cap_h, 2), "xHeight": round(x_h, 2),
                "ascent": round(asc, 2), "descent": round(desc, 2)},
}
with open("/tmp/asbrand/wordmark.json", "w") as fh:
    json.dump(out, fh)
print("asamer width @100px:", round(asamer_w, 2), "| capHeight:", round(cap_h, 2))
print("TECHNOLOGIE width @100px:", round(sub_w, 2))
print("asamer path chars:", len(asamer_d))
print("OK -> /tmp/asbrand/wordmark.json")
