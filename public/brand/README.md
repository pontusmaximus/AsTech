# asamer — Logo- & Brand-Set

Komplettes Marken-Asset-Set für **asamer technologie**. Alle Logos sind als
**SVG** (Vektor, beliebig skalierbar) und als **PNG** (fertige Rastergrafik)
enthalten. Die Wortmarke „asamer" ist in den SVGs als **Vektorpfad** eingebettet
(aus DM Sans Medium) — die Dateien sehen damit überall identisch aus, auch ohne
installierte Schrift (Print, Office, Canva, Figma, Illustrator …).

> **SVG = Master** (für Web, Druck, Design-Tools) · **PNG = fertiger Export**
> (für E-Mail, Office, Social-Upload). PNGs mit Logo sind transparent.

---

## Marke

| Element | Wert |
|---|---|
| Primary (Blau) | `#004899` |
| Primary Light | `#0066CC` |
| Primary Dark | `#003366` |
| Ink (Text/Dunkel) | `#0F172A` |
| Slate (Subline) | `#64748B` |
| Paper (heller BG) | `#F4F6FA` |
| Display-Schrift | **Space Grotesk** (Headlines) |
| Text-Schrift | **DM Sans** (Wortmarke, Fließtext, UI) |

Motiv: **Doppelpfeil** (zwei Chevrons, der zweite mit reduzierter Deckkraft) —
steht für Vorwärtsbewegung / Technik. Die Wortmarke ist immer kleingeschrieben.

---

## Übersicht auf einen Blick

➡️ **`asamer-brand-sheet.svg`** / `png/asamer-brand-sheet.png` — Markenübersicht
(Logo, Varianten, Farben, Schrift, Schutzraum) auf einer Seite.

## Dateien

```
brand/
├─ horizontal/      Logo + Wortmarke nebeneinander  ← Standard-Logo
│   ├─ asamer-logo-horizontal.svg        Blau + dunkle Wortmarke (heller Grund)
│   ├─ asamer-logo-horizontal-white.svg  komplett weiß (dunkler/blauer Grund)
│   ├─ asamer-logo-horizontal-blue.svg   einfarbig Blau
│   └─ asamer-logo-horizontal-ink.svg    einfarbig Dunkel
├─ vertical/        Logo gestapelt (Icon oben, Text unten) — für quadratische Flächen
│   ├─ asamer-logo-vertical.svg
│   └─ asamer-logo-vertical-white.svg
├─ icon/            Nur Signet (Doppelpfeil), transparent
│   ├─ asamer-icon.svg        Blau
│   ├─ asamer-icon-white.svg  Weiß
│   ├─ asamer-icon-ink.svg    Dunkel
│   └─ asamer-icon-black.svg  reines Schwarz (Stempel/Fax/1-farbig)
├─ app-icon/        Signet in Fläche (gerundetes Quadrat / Kreis)
│   ├─ asamer-app-icon.svg        Blau-Verlauf, weißes Signet (iOS/Android, 1024)
│   ├─ asamer-app-icon-light.svg  heller Grund, blaues Signet
│   └─ asamer-avatar.svg          runder Avatar (Profilbilder Social Media)
├─ favicon/
│   ├─ favicon.svg   Browser-Favicon (skalierbar)
│   └─ favicon.ico   klassisch (16/32/48 in einer Datei)
├─ social/          Grafik-Vorlagen zum Weiterbearbeiten
│   ├─ asamer-og-image.svg      1200×630  Link-Vorschau (Open Graph / Twitter)
│   ├─ asamer-social-square.svg 1080×1080 Post-Vorlage mit Headline-Platzhalter
│   └─ asamer-banner-wide.svg   1500×500  Banner / LinkedIn-Cover
├─ pattern/         Kachelbares Doppelpfeil-Muster (Hintergründe)
│   ├─ asamer-pattern.svg
│   └─ asamer-pattern-paper.svg
├─ asamer-brand-sheet.svg
└─ png/             ← Raster-Export aller obigen Assets (gleiche Struktur)
    ├─ horizontal/  bis ~2100 px breit, transparent
    ├─ favicon/     favicon-16/32/48 + apple-touch-icon (180)
    ├─ social/      exakte Plattform-Maße
    └─ …
```

---

## Welche Variante wann?

- **Website-Header, Briefkopf, Signatur** → `horizontal/asamer-logo-horizontal`
  (auf dunklem/blauem Grund die `-white`-Variante).
- **Wenig Platz, quadratisch** → `vertical/` oder nur das `icon/`.
- **App / Favicon / Profilbild** → `app-icon/` bzw. `favicon/`.
- **Social-Media-Post / Link-Vorschau** → Vorlagen in `social/` (Text im SVG ersetzen).
- **Einfarbiger Druck** → `-blue`, `-ink` oder `icon-black`.

## Schutzraum & Mindestgröße

- **Schutzraum:** ringsum mind. die halbe Logohöhe freihalten.
- **Mindestgröße:** horizontales Logo ≥ 120 px / 32 mm Breite; Signet ≥ 24 px.

## Bitte nicht

Verzerren · Farben tauschen · Wortmarke nachbauen oder andere Schrift nutzen ·
Doppelpfeil und Wortmarke neu anordnen · auf unruhigem Untergrund ohne Kontrast
platzieren · Schlagschatten/Effekte hinzufügen.

---

## Neu erzeugen

Die Assets werden vollständig aus Skripten generiert (`/scripts`):

```bash
python3 scripts/build_wordmark.py   # lädt DM Sans, Wortmarke → Vektorpfade
python3 scripts/build_logos.py      # baut alle SVGs
python3 scripts/build_png.py        # rendert PNGs + favicon.ico (macOS qlmanage)
```

Voraussetzungen: `pip install fonttools brotli pillow numpy`. Der PNG-Export
nutzt `qlmanage` (macOS) und rekonstruiert Transparenz per Doppel-Render
(weiß/schwarz) + Alpha-Matting.
