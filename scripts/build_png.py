#!/usr/bin/env python3
"""Rendert die Logo-SVGs zu PNG via qlmanage (WebKit). qlmanage backt einen
Hintergrund ein, daher wird Transparenz per Doppel-Render (weiss + schwarz) und
Alpha-Matting verlustfrei rekonstruiert. Opake Assets werden einfach gerendert.
"""
import os, re, subprocess, tempfile
import numpy as np
from PIL import Image, ImageOps

ROOT = "/Users/maxasamer/Desktop/AsTech/public/brand"
TMP  = tempfile.mkdtemp(prefix="aspng_")

# (svg, out, render_size, mode)  -- alle Renders ueber Alpha-Matting (transparent)
#  square : Icons, eng zuschneiden -> quadratisch + Eigen-Clearspace
#  logo   : Lockups, eng zuschneiden + Clearspace ringsum
#  trim   : 1:1-Asset (App-Icon/Avatar), nur Rand-Transparenz wegschneiden
#  WxH    : eng zuschneiden, exakt auf Zielmass skalieren (Favicon/Social)
JOBS = [
    ("icon/asamer-icon.svg",                        "icon/asamer-icon",                        1024, "square"),
    ("icon/asamer-icon-white.svg",                  "icon/asamer-icon-white",                  1024, "square"),
    ("icon/asamer-icon-ink.svg",                    "icon/asamer-icon-ink",                    1024, "square"),
    ("horizontal/asamer-logo-horizontal.svg",       "horizontal/asamer-logo-horizontal",       2000, "logo"),
    ("horizontal/asamer-logo-horizontal-white.svg", "horizontal/asamer-logo-horizontal-white", 2000, "logo"),
    ("horizontal/asamer-logo-horizontal-blue.svg",  "horizontal/asamer-logo-horizontal-blue",  2000, "logo"),
    ("horizontal/asamer-logo-horizontal-ink.svg",   "horizontal/asamer-logo-horizontal-ink",   2000, "logo"),
    ("vertical/asamer-logo-vertical.svg",           "vertical/asamer-logo-vertical",           1400, "logo"),
    ("vertical/asamer-logo-vertical-white.svg",     "vertical/asamer-logo-vertical-white",     1400, "logo"),
    ("app-icon/asamer-app-icon.svg",                "app-icon/asamer-app-icon",                1024, "trim"),
    ("app-icon/asamer-app-icon-light.svg",          "app-icon/asamer-app-icon-light",          1024, "trim"),
    ("app-icon/asamer-avatar.svg",                  "app-icon/asamer-avatar",                  1024, "trim"),
    ("favicon/favicon.svg",                         "favicon/favicon-16",                       256, "16x16"),
    ("favicon/favicon.svg",                         "favicon/favicon-32",                       256, "32x32"),
    ("favicon/favicon.svg",                         "favicon/favicon-48",                       256, "48x48"),
    ("favicon/favicon.svg",                         "favicon/apple-touch-icon",                 512, "180x180"),
    ("social/asamer-og-image.svg",                  "social/asamer-og-image",                  1200, "1200x630"),
    ("social/asamer-social-square.svg",             "social/asamer-social-square",             1080, "1080x1080"),
    ("social/asamer-banner-wide.svg",               "social/asamer-banner-wide",               1500, "1500x500"),
    ("asamer-brand-sheet.svg",                      "asamer-brand-sheet",                      1400, "1400x1020"),
]

def _ql(path, size):
    subprocess.run(["qlmanage", "-t", "-s", str(size), "-o", TMP, path],
                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    return Image.open(os.path.join(TMP, os.path.basename(path) + ".png")).convert("RGBA")

def render_transparent(svg, size):
    """Zwei Renders (weiss/schwarz) -> exakter Alpha-Kanal + echte Farbe.
    Das Logo wird in eine quadratische viewBox mit vollflaechigem Hintergrund
    gewrappt, damit qlmanage kein eigenes (weisses) Padding hinzufuegt."""
    raw = open(os.path.join(ROOT, svg)).read()
    m = re.search(r'<svg[^>]*viewBox="([^"]+)"[^>]*>(.*)</svg>', raw, re.S)
    x0, y0, w, h = map(float, m.group(1).split())
    body = m.group(2)
    S = max(w, h)
    ox, oy = x0 - (S - w) / 2, y0 - (S - h) / 2     # Logo in S-Box zentrieren
    def on_bg(color, tag):
        wrap = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" '
                f'viewBox="{ox} {oy} {S} {S}">'
                f'<rect x="{ox}" y="{oy}" width="{S}" height="{S}" fill="{color}"/>'
                f'{body}</svg>')
        p = os.path.join(TMP, f"{tag}_{os.path.basename(svg)}")
        open(p, "w").write(wrap)
        return np.asarray(_ql(p, size), dtype=np.float64)[..., :3]
    W = on_bg("#FFFFFF", "w"); B = on_bg("#000000", "b")
    inv_a = np.clip((W - B) / 255.0, 0, 1).mean(axis=2)      # (1-alpha)
    a = 1.0 - inv_a
    a_safe = np.where(a < 1e-4, 1.0, a)
    C = np.clip(B / a_safe[..., None], 0, 255)               # straight color (B = a*C)
    out = np.dstack([C, a * 255.0]).round().astype(np.uint8)
    return Image.fromarray(out)  # 4 Kanaele -> RGBA

def save(img, out):
    full = os.path.join(ROOT, "png", out + ".png")
    os.makedirs(os.path.dirname(full), exist_ok=True)
    img.save(full)
    print(f"   png/{out}.png  {img.width}x{img.height}")

for svg, out, size, mode in JOBS:
    im = render_transparent(svg, size)
    bb = im.getbbox()
    if bb: im = im.crop(bb)
    if mode == "square":                          # Icon: quadratisch + Clearspace
        s = max(im.size); pad = round(s * 0.22)
        canvas = Image.new("RGBA", (s + 2*pad, s + 2*pad), (0, 0, 0, 0))
        canvas.paste(im, ((canvas.width-im.width)//2, (canvas.height-im.height)//2), im)
        im = canvas
    elif mode == "logo":                          # Lockup: Clearspace ringsum
        pad = round(im.height * 0.16)
        im = ImageOps.expand(im, border=pad, fill=(0, 0, 0, 0))
    elif mode == "trim":                           # 1:1 belassen (App-Icon/Avatar)
        pass
    else:                                          # "WxH": exakt skalieren
        w, h = map(int, mode.split("x"))
        im = im.resize((w, h), Image.LANCZOS)
    save(im, out)

# favicon.ico (16/32/48 in einer Datei) aus dem hochaufgeloesten Favicon
ico_src = Image.open(os.path.join(ROOT, "png/favicon/favicon-48.png")).convert("RGBA")
ico_path = os.path.join(ROOT, "favicon/favicon.ico")
ico_src.save(ico_path, sizes=[(16, 16), (32, 32), (48, 48)])
print(f"   favicon/favicon.ico  (16/32/48)")

print("PNG-Export fertig ->", os.path.join(ROOT, "png"))
