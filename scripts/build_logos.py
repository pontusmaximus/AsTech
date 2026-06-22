#!/usr/bin/env python3
"""Generiert das komplette asamer-Logo- und Brand-Asset-Set als SVG.
Wortmarke ist als Vektorpfad eingebettet (schriftunabhaengig).
Lies /tmp/asbrand/wordmark.json (aus build_wordmark.py)."""
import json, os

ROOT = "/Users/maxasamer/Desktop/AsTech/public/brand"
WM = json.load(open("/tmp/asbrand/wordmark.json"))

# ---------------------------------------------------------------- Brand-Tokens
BLUE      = "#004899"   # primary
BLUE_LT   = "#0066CC"   # primary light (Verlauf)
BLUE_DK   = "#003366"   # primary dark
INK       = "#0F172A"   # Wortmarke dunkel (slate-900)
SLATE     = "#64748B"   # Subline gedaempft (slate-500)
PAPER     = "#F4F6FA"   # heller Marken-Hintergrund
WHITE     = "#FFFFFF"

# Wortmarken-Fragmente (bei font-size 100, baseline y=0, x-start 0, y bereits gespiegelt)
ASAMER_D   = WM["asamer"]["d"];        ASAMER_W   = WM["asamer"]["width"]      # 338.3
TECHNO_D   = WM["technologie"]["d"];   TECHNO_W   = WM["technologie"]["width"]  # 873.3
XH   = WM["metrics"]["xHeight"]        # 49.6  (asamer hat nur x-Hoehen-Buchstaben)
CAPH = WM["metrics"]["capHeight"]      # 70.0  (TECHNOLOGIE = Versalien)

# --------------------------------------------------------------------- Helpers
def f(x):  # kompakte Zahl
    return f"{x:.3f}".rstrip("0").rstrip(".")

def svg(w, h, body, vb=None, extra=""):
    vb = vb or f"0 0 {f(w)} {f(h)}"
    return (f'<?xml version="1.0" encoding="UTF-8"?>\n'
            f'<svg xmlns="http://www.w3.org/2000/svg" width="{f(w)}" height="{f(h)}" '
            f'viewBox="{vb}"{extra}>\n{body}\n</svg>\n')

# --- Doppelpfeil-Motiv -------------------------------------------------------
# native bbox inkl. stroke(3, round): x[6.5..27.5] (b21)  y[10.5..29.5] (h19)
ICON_BBOX = (6.5, 10.5, 21.0, 19.0)
def icon(x0, top, h, color, sec_op=0.5):
    """Doppelpfeil, bbox-top-left bei (x0, top), Hoehe h."""
    s = h / ICON_BBOX[3]
    tx = x0 - ICON_BBOX[0] * s
    ty = top - ICON_BBOX[1] * s
    sw = f(3 * s)
    return (f'<g transform="translate({f(tx)} {f(ty)}) scale({f(s)})" '
            f'fill="none" stroke="{color}" stroke-width="3" '
            f'stroke-linecap="round" stroke-linejoin="round">'
            f'<path d="M8 12L16 20L8 28"/>'
            f'<path d="M18 12L26 20L18 28" opacity="{sec_op}"/></g>')

def wordmark(x, baseline, fs, color, frag=ASAMER_D):
    s = fs / 100.0
    return (f'<g transform="translate({f(x)} {f(baseline)}) scale({f(s)})" '
            f'fill="{color}">{frag}</g>')

def write(path, content):
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    open(full, "w").write(content)
    print("  ", path, f"({len(content)}B)")

# ====================================================================== ICONS
def build_icons():
    # tighte quadratische Ablage: Motiv in 48er-Box, optisch zentriert
    box = 48
    h = 30  # Icon-Hoehe in der Box
    iw = h * ICON_BBOX[2] / ICON_BBOX[3]
    x0 = (box - iw) / 2
    top = (box - h) / 2
    for name, col in [("asamer-icon", BLUE), ("asamer-icon-white", WHITE),
                      ("asamer-icon-ink", INK), ("asamer-icon-black", "#000000")]:
        sec = 0.45 if name != "asamer-icon-white" else 0.55
        write(f"icon/{name}.svg",
              svg(box, box, icon(x0, top, h, col, sec),
                  extra=' role="img" aria-label="asamer"'))

# ============================================================ HORIZONTAL LOCKUP
def hlockup(x, top, fsw, icol, wcol, scol, sec=0.45):
    """Horizontales Lockup; obere Kante bei y=top, linke Kante bei x.
    Icon ist zur Hauptzeile 'asamer' optisch zentriert. -> (markup, W, H)."""
    fss    = fsw*13.0/58.0
    word_w = ASAMER_W/100*fsw
    sub_w  = TECHNO_W/100*fss
    xh     = XH/100*fsw                 # visuelle Hoehe von 'asamer'
    caph_s = CAPH/100*fss
    gap_v  = fsw*7.5/58.0               # asamer-baseline -> subline-cap-top
    ih     = 1.42*xh                    # Icon etwas hoeher als x-Hoehe
    iw     = ih*ICON_BBOX[2]/ICON_BBOX[3]
    gap_h  = fsw*20.0/58.0              # Icon -> Text
    icon_top_off = xh/2 + ih/2          # Icon zur asamer-Mitte zentriert
    top_off = max(xh, icon_top_off)
    By       = top + top_off            # asamer baseline
    icon_top = By - icon_top_off
    tx       = x + iw + gap_h
    sub_x    = tx + (word_w - sub_w)/2  # subline zentriert unter Wortmarke
    sub_base = By + gap_v + caph_s
    markup = (icon(x, icon_top, ih, icol, sec)
              + wordmark(tx, By, fsw, wcol)
              + wordmark(sub_x, sub_base, fss, scol, TECHNO_D))
    return markup, (tx + word_w - x), (sub_base - top)

def build_horizontal():
    m, W, H = hlockup(0, 0, 58, BLUE, INK, SLATE)
    aria = ' role="img" aria-label="asamer technologie"'
    write("horizontal/asamer-logo-horizontal.svg", svg(W, H, m, extra=aria))
    write("horizontal/asamer-logo-horizontal-white.svg",
          svg(W, H, hlockup(0,0,58, WHITE, WHITE, "rgba(255,255,255,0.7)", 0.55)[0], extra=aria))
    write("horizontal/asamer-logo-horizontal-blue.svg",
          svg(W, H, hlockup(0,0,58, BLUE, BLUE, BLUE, 0.5)[0], extra=aria))
    write("horizontal/asamer-logo-horizontal-ink.svg",
          svg(W, H, hlockup(0,0,58, INK, INK, INK, 0.5)[0], extra=aria))
    return W, H

# ============================================================== VERTICAL LOCKUP
def build_vertical():
    FSW, FSS = 52.0, 11.5
    word_w = ASAMER_W/100*FSW
    sub_w  = TECHNO_W/100*FSS
    xh     = XH/100*FSW
    caph_s = CAPH/100*FSS
    ih = 64.0
    iw = ih * ICON_BBOX[2] / ICON_BBOX[3]
    gap_iw = 18.0   # Icon-bottom -> asamer-top
    gap_ws = 7.0    # asamer-baseline -> subline-cap-top
    W = max(word_w, iw, sub_w)
    cx = W/2
    icon_top = 0.0
    By = ih + gap_iw + xh
    sub_base = By + gap_ws + caph_s
    H = sub_base
    def lock(icol, wcol, scol, sec=0.45):
        return (icon(cx - iw/2, icon_top, ih, icol, sec)
                + wordmark(cx - word_w/2, By, FSW, wcol)
                + wordmark(cx - sub_w/2, sub_base, FSS, scol, TECHNO_D))
    aria = ' role="img" aria-label="asamer technologie"'
    write("vertical/asamer-logo-vertical.svg",
          svg(W, H, lock(BLUE, INK, SLATE), extra=aria))
    write("vertical/asamer-logo-vertical-white.svg",
          svg(W, H, lock(WHITE, WHITE, "rgba(255,255,255,0.7)", 0.55), extra=aria))

# ============================================== APP-ICON / FAVICON / AVATAR
def build_containers():
    # App-Icon 1024, abgerundetes Quadrat, Blau-Verlauf, weisses Motiv
    S = 1024; r = 224
    h = 470; iw = h*ICON_BBOX[2]/ICON_BBOX[3]
    grad = (f'<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">'
            f'<stop offset="0" stop-color="{BLUE_LT}"/>'
            f'<stop offset="1" stop-color="{BLUE_DK}"/></linearGradient></defs>')
    body = (grad + f'<rect width="{S}" height="{S}" rx="{r}" fill="url(#g)"/>'
            + icon((S-iw)/2, (S-h)/2, h, WHITE, 0.55))
    write("app-icon/asamer-app-icon.svg",
          svg(S, S, body, extra=' role="img" aria-label="asamer"'))
    # App-Icon hell
    bodyl = (f'<rect width="{S}" height="{S}" rx="{r}" fill="{PAPER}"/>'
             + icon((S-iw)/2, (S-h)/2, h, BLUE, 0.45))
    write("app-icon/asamer-app-icon-light.svg",
          svg(S, S, bodyl, extra=' role="img" aria-label="asamer"'))
    # Runder Avatar (Social Profile)
    body_av = (grad + f'<circle cx="{S/2}" cy="{S/2}" r="{S/2}" fill="url(#g)"/>'
               + icon((S-iw)/2, (S-h)/2, h, WHITE, 0.55))
    write("app-icon/asamer-avatar.svg",
          svg(S, S, body_av, extra=' role="img" aria-label="asamer"'))
    # Favicon 32 (kraeftiger Strich, bessere Lesbarkeit klein)
    fs = 32; fr = 7; fh = 17; fiw = fh*ICON_BBOX[2]/ICON_BBOX[3]
    fav = (f'<rect width="{fs}" height="{fs}" rx="{fr}" fill="{BLUE}"/>'
           + icon((fs-fiw)/2, (fs-fh)/2, fh, WHITE, 0.6))
    write("favicon/favicon.svg", svg(fs, fs, fav, extra=' role="img" aria-label="asamer"'))

# ========================================================= PATTERN (kachelbar)
def build_pattern():
    tile = 80
    cells = pattern_cells(tile, 26, BLUE)
    body = (f'<defs><pattern id="p" width="{tile}" height="{tile}" '
            f'patternUnits="userSpaceOnUse">{cells}</pattern></defs>'
            f'<rect width="100%" height="100%" fill="url(#p)"/>')
    write("pattern/asamer-pattern.svg",
          svg(640, 640, body, extra=' opacity="0.9"'))
    # helle Variante auf Paper-BG
    body2 = (f'<defs><pattern id="p" width="{tile}" height="{tile}" '
             f'patternUnits="userSpaceOnUse">{cells}</pattern></defs>'
             f'<rect width="100%" height="100%" fill="{PAPER}"/>'
             f'<rect width="100%" height="100%" fill="url(#p)" opacity="0.12"/>')
    write("pattern/asamer-pattern-paper.svg", svg(640, 640, body2))

# =================================== SOCIAL / GRAFIK-VORLAGEN (Ausgangsdateien)
def pattern_cells(tile, h, color, op=0.5):
    iw = h*ICON_BBOX[2]/ICON_BBOX[3]
    return (icon(tile*0.25-iw/2, tile*0.25-h/2, h, color, op)
            + icon(tile*0.75-iw/2, tile*0.75-h/2, h, color, op))

def build_social():
    # --- OG-Image 1200x630 (dunkler Marken-BG, Pattern, zentriertes Logo) ---
    W, H = 1200, 630
    tile = 90
    defs = (f'<defs>'
            f'<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">'
            f'<stop offset="0" stop-color="{INK}"/>'
            f'<stop offset="1" stop-color="{BLUE_DK}"/></linearGradient>'
            f'<pattern id="p" width="{tile}" height="{tile}" patternUnits="userSpaceOnUse">'
            f'{pattern_cells(tile, 30, WHITE)}</pattern>'
            f'</defs>')
    lk, lw, lh = hlockup(0, 0, 92, WHITE, WHITE, "rgba(255,255,255,0.72)", 0.55)
    gx = (W-lw)/2; gy = (H-lh)/2
    body = (defs + f'<rect width="{W}" height="{H}" fill="url(#bg)"/>'
            f'<rect width="{W}" height="{H}" fill="url(#p)" opacity="0.06"/>'
            f'<g transform="translate({f(gx)} {f(gy)})">' + lk + '</g>'
            f'<rect x="0" y="{H-10}" width="{W}" height="10" fill="{BLUE}"/>')
    write("social/asamer-og-image.svg", svg(W, H, body))

    # --- Social Square 1080x1080 (heller BG + Headline-Platzhalter) ---
    S = 1080
    lk2, lw2, lh2 = hlockup(96, 96, 64, BLUE, INK, SLATE)
    body2 = (f'<rect width="{S}" height="{S}" fill="{WHITE}"/>'
             + lk2
             + f'<text x="96" y="560" font-family="Space Grotesk, DM Sans, sans-serif" '
             f'font-size="84" font-weight="700" fill="{INK}">Überschrift</text>'
             f'<text x="96" y="660" font-family="Space Grotesk, DM Sans, sans-serif" '
             f'font-size="84" font-weight="700" fill="{BLUE}">Platzhalter.</text>'
             f'<text x="96" y="752" font-family="DM Sans, sans-serif" font-size="34" '
             f'fill="{SLATE}">Untertitel / Claim als bearbeitbarer Text.</text>'
             f'<rect x="96" y="940" width="120" height="8" rx="4" fill="{BLUE}"/>'
             f'<rect x="0" y="{S-14}" width="{S}" height="14" fill="{BLUE}"/>')
    write("social/asamer-social-square.svg", svg(S, S, body2))

    # --- Banner 1500x500 (LinkedIn / Header Cover) ---
    BW, BH = 1500, 500
    tile2 = 100
    lk3, lw3, lh3 = hlockup(110, 0, 76, WHITE, WHITE, "rgba(255,255,255,0.7)", 0.55)
    defs2 = (f'<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="0">'
             f'<stop offset="0" stop-color="{BLUE_DK}"/>'
             f'<stop offset="1" stop-color="{BLUE}"/></linearGradient>'
             f'<pattern id="p" width="{tile2}" height="{tile2}" patternUnits="userSpaceOnUse">'
             f'{pattern_cells(tile2, 32, WHITE)}</pattern></defs>')
    body3 = (defs2 + f'<rect width="{BW}" height="{BH}" fill="url(#bg)"/>'
             f'<rect width="{BW}" height="{BH}" fill="url(#p)" opacity="0.07"/>'
             f'<g transform="translate(0 {(BH-lh3)/2})">' + lk3 + '</g>')
    write("social/asamer-banner-wide.svg", svg(BW, BH, body3))

# ================================================================ BRAND SHEET
def build_brandsheet():
    W, H = 1400, 1020
    def txt(x, y, s, size, col, w=400, ls=0, anchor="start", font="DM Sans, sans-serif"):
        return (f'<text x="{f(x)}" y="{f(y)}" font-family="{font}" font-size="{size}" '
                f'font-weight="{w}" fill="{col}" letter-spacing="{ls}" '
                f'text-anchor="{anchor}">{s}</text>')
    P = [f'<rect width="{W}" height="{H}" fill="{WHITE}"/>',
         f'<rect width="{W}" height="120" fill="{INK}"/>']
    # Header
    P.append(f'<g transform="translate(64 36)">{hlockup(0,0,46, WHITE, WHITE, "rgba(255,255,255,0.7)",0.55)[0]}</g>')
    P.append(txt(W-64, 74, "Brand &amp; Logo Guide", 26, "rgba(255,255,255,0.85)", 500, 0, "end", "Space Grotesk, sans-serif"))
    # Hauptlogo-Showcase
    P.append(f'<rect x="64" y="168" width="780" height="300" rx="16" fill="{PAPER}"/>')
    mh, wh, hh = hlockup(0,0,72, BLUE, INK, SLATE)
    P.append(f'<g transform="translate({f(64+(780-wh)/2)} {f(168+(300-hh)/2)})">{mh}</g>')
    P.append(txt(80, 200, "PRIMARY LOGO", 13, SLATE, 600, 2))
    # Varianten dunkel/blau
    P.append(f'<rect x="868" y="168" width="468" height="142" rx="16" fill="{INK}"/>')
    mw,ww,hw = hlockup(0,0,40, WHITE, WHITE, "rgba(255,255,255,0.7)",0.55)
    P.append(f'<g transform="translate({f(868+(468-ww)/2)} {f(168+(142-hw)/2)})">{mw}</g>')
    P.append(f'<rect x="868" y="326" width="468" height="142" rx="16" fill="{BLUE}"/>')
    P.append(f'<g transform="translate({f(868+(468-ww)/2)} {f(326+(142-hw)/2)})">{hlockup(0,0,40, WHITE, WHITE, "rgba(255,255,255,0.7)",0.55)[0]}</g>')
    # Icon-Reihe
    y0 = 520
    P.append(txt(64, y0, "SIGNET / APP-ICON", 13, SLATE, 600, 2))
    spots = [("#FFFFFF",BLUE,0.45,False),(INK,WHITE,0.55,False),(BLUE,WHITE,0.55,True),(PAPER,BLUE,0.45,True)]
    for i,(bg,icol,sec,rnd) in enumerate(spots):
        x = 64 + i*132
        if rnd:
            P.append(f'<rect x="{x}" y="{y0+18}" width="112" height="112" rx="26" fill="{bg}"/>')
        else:
            P.append(f'<rect x="{x}" y="{y0+18}" width="112" height="112" rx="16" fill="{bg}" stroke="#E2E8F0"/>')
        P.append(icon(x+34, y0+50, 48, icol, sec))
    # Farbpalette
    yc = 520
    P.append(txt(660, yc, "FARBEN", 13, SLATE, 600, 2))
    cols = [("Primary","#004899"),("Primary Light","#0066CC"),("Primary Dark","#003366"),
            ("Ink","#0F172A"),("Slate","#64748B"),("Paper","#F4F6FA")]
    for i,(nm,hx) in enumerate(cols):
        cx = 660 + (i%3)*228; cy = yc+18 + (i//3)*108
        stroke = ' stroke="#E2E8F0"' if hx==PAPER else ''
        P.append(f'<rect x="{cx}" y="{cy}" width="210" height="88" rx="12" fill="{hx}"{stroke}/>')
        tcol = INK if hx in (PAPER,) else WHITE
        P.append(txt(cx+16, cy+38, nm, 16, tcol, 600))
        P.append(txt(cx+16, cy+64, hx, 14, tcol if hx==PAPER else "rgba(255,255,255,0.8)", 400, 0, "start", "ui-monospace, monospace"))
    # Typo + Clearspace
    yt = 800
    P.append(f'<rect x="64" y="{yt}" width="620" height="160" rx="16" fill="{PAPER}"/>')
    P.append(txt(88, yt+34, "TYPOGRAFIE", 13, SLATE, 600, 2))
    P.append(txt(88, yt+86, "Space Grotesk", 34, INK, 700, 0, "start", "Space Grotesk, sans-serif"))
    P.append(txt(88, yt+120, "Display / Headlines", 15, SLATE, 400))
    P.append(txt(400, yt+86, "DM Sans", 34, INK, 500, 0, "start", "DM Sans, sans-serif"))
    P.append(txt(400, yt+120, "Fließtext / UI", 15, SLATE, 400))
    # Clearspace-Diagramm
    P.append(f'<rect x="716" y="{yt}" width="620" height="160" rx="16" fill="{WHITE}" stroke="#E2E8F0"/>')
    P.append(txt(740, yt+34, "SCHUTZRAUM", 13, SLATE, 600, 2))
    cm, cw, ch = hlockup(0,0,40, BLUE, INK, SLATE)
    pad = ch*0.5
    bx, by = 760, yt+60
    P.append(f'<rect x="{f(bx-pad)}" y="{f(by-pad)}" width="{f(cw+2*pad)}" height="{f(ch+2*pad)}" '
             f'fill="none" stroke="{BLUE}" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.5"/>')
    P.append(f'<g transform="translate({bx} {by})">{cm}</g>')
    P.append(txt(740, yt+150, "Mindestabstand = halbe Logohöhe (x).", 14, SLATE, 400))
    write("asamer-brand-sheet.svg", svg(W, H, "".join(P)))

if __name__ == "__main__":
    print("Generiere Logo-Set ->", ROOT)
    build_icons()
    build_horizontal()
    build_vertical()
    build_containers()
    build_pattern()
    build_social()
    build_brandsheet()
    print("Fertig.")
