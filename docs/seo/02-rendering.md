# Phase 2 — Rendering

**Branch:** `claude/seo-masterplan-asamer-eb0d37` · **Stand:** 21.08.2026

Ziel laut Masterplan: *„Google bekommt auf jeder Seite den vollständigen Inhalt im ersten
HTTP-Response, ohne JavaScript ausführen zu müssen."*

---

## 2.1 Die Ursache — eine andere als vermutet

Der Masterplan stellt die Arbeitshypothese auf, die Inhalte steckten in scroll-abhängigen Wrappern
und der Prerenderer nehme seinen DOM-Snapshot im Zustand „ganz oben, nichts gescrollt".

**Das trifft nicht zu.** Es gibt keinen DOM-Snapshot, weil es keinen Browser im Build gab.
`framer-motion` ist nicht installiert, `whileInView` kommt im gesamten `src/` null Mal vor, und die
zwei `IntersectionObserver`-Fundstellen sind Scrollspy-Logik für die Kategorie-Navigation.

Der alte `scripts/prerender.ts` war ein **String-Template-Injektor**: er baute den sichtbaren Text
jeder Seite von Hand nach, mit einem eigenen Builder je Seitentyp.

| Seitentyp | Builder vorhanden? |
|---|---|
| Produktdetailseiten | ja — `productPageBody()` aus `src/data/seo/*SeoContent.ts` |
| Marken-Hubs `/ott` `/mayer` `/barbaric` `/gannomat` | ja — `HUB_CATEGORY_SEO` |
| `/pruvodce/vyber-olepovacky-hran` | ja — `guideEdgebanderBody()` |
| `/faq` | ja — `ratgeberFaqHubBody()` |
| Gebrauchtmaschinen-Detail | ja — inline |
| **alles andere** | **nein** |

Für alles andere gab `staticPageBody()` genau das aus:

```html
<nav>Breadcrumb</nav>
<h1>{title}</h1>
<p>{description}</p>
```

Startseite, Lösungen, Service, Finanzierung, Kontakt, Gebrauchtmaschinen-Übersicht, IMA Schelling,
fünf der sechs Ratgeber und die drei Rechtstexte — deren Inhalt liegt als JSX in den
Seitenkomponenten (`GuidePanelSawComparisonPage.tsx` allein 34 KB) und war für einen Prerenderer,
der kein React ausführt, schlicht unerreichbar.

Die Symptome im Masterplan sind damit vollständig erklärt, und die Zahl war größer als die
Stichprobe zeigte: **145 von 605 Seiten unter 250 Wörtern, 76 davon unter 50.**

---

## 2.3 Die Lösung: echtes SSR statt Nachbau

Statt für jede fehlende Seite einen weiteren Builder zu schreiben — 150 KB JSX in Datenmodule zu
überführen, mit dem Ergebnis, dass beim nächsten neuen Abschnitt dasselbe Problem wieder entsteht —
rendert der Build jetzt **denselben React-Baum, den auch der Browser rendert**.

### `src/entry-server.tsx`

```tsx
renderToReadableStream(
  <HelmetProvider>
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>
  </HelmetProvider>
)
```

- `AppRoutes` ist aus `src/App.tsx` exportiert — derselbe Routenbaum, nur im `MemoryRouter` statt im
  `BrowserRouter`. Keine zweite Wahrheit darüber, was auf einer Seite steht.
- **`renderToReadableStream`, nicht `renderToString`:** die Seitenkomponenten werden über
  `React.lazy` geladen. `renderToString` gäbe den Suspense-Fallback aus (`RouteSkeleton`), der
  Stream wartet über `allReady` auf den echten Inhalt.
- Web-Streams statt `renderToPipeableStream`, damit das Modul ohne Node-Typen auskommt und im
  selben tsconfig wie der übrige App-Code liegen kann.

### Der Head — und eine Hürde, die den Entwurf geprägt hat

**react-helmet-async 3 füllt unter React 19 im Streaming-Rendering seinen Server-Context nicht.**
`context.helmet` bleibt `undefined`, auch mit `HelmetProvider.canUseDOM = false`. Verifiziert, nicht
vermutet. Was in `<Helmet>` steht, taucht im SSR-Output also nicht auf.

Zwei Konsequenzen, beide bewusst gewählt:

1. **Die Meta-Tags erzeugt weiterhin `scripts/prerender.ts`** — aus denselben Datenquellen, aus
   denen auch `SeoHead` liest (`SEO_ROUTES`, Produktdaten, `src/lib/language.ts`). Dieser Teil war
   nie das Problem: Titel, Description, Canonical und hreflang waren schon vorher korrekt, und der
   Audit prüft sie über alle 605 Seiten.
2. **Das JSON-LD rendert `SeoHead` jetzt außerhalb von Helmet** und kommt damit mit dem SSR-Body
   mit. JSON-LD im Body ist für Google gleichwertig zu JSON-LD im Head. Nebeneffekt: die
   sitewide-Entitäten (`Organization`, `WebSite`, `LocalBusiness`) stehen jetzt auch für
   JS-ausführende Crawler auf Start- und Kontaktseite — vorher kamen sie ausschließlich aus dem
   Prerender-Head.

### Was das am Build ändert

```
generate:sitemap → generate:dates → tsc -b → vite build → vite build --ssr → prerender
```

Ein zusätzlicher Vite-Lauf für `src/entry-server.tsx` nach `dist-ssr/`. Für diesen Lauf ist
`ssr.noExternal: true` gesetzt: Vite lässt Abhängigkeiten im SSR-Build sonst extern, und mehrere
Pakete (`react-helmet-async`, `gsap/ScrollTrigger`) liefern unter Node ihren CommonJS-Build aus —
ein `import { X } from '…'` scheitert dort mit *„does not provide an export named"*. Gebündelt
übernimmt Rollup die Interop, und es braucht keine Ausnahmeliste, die bei jeder neuen Abhängigkeit
nachgepflegt werden müsste.

Gesamtdauer des Builds: **33 Sekunden**, davon 6 für die 605 SSR-Läufe (8 parallel).

### 2.3 Punkt 4 — der Guard

`scripts/prerender.ts` bricht ab, wenn

- eine Sitemap-URL keine prerenderte Seite hat oder umgekehrt (**Deckungsgarantie**),
- ein SSR-Lauf einen Fehler meldet,
- weniger Dateien geschrieben wurden als Seiten vorgesehen sind.

Zusätzlich warnt er bei Seiten unter 120 Wörtern. Die Schwelle ist bewusst niedriger als die 250 des
Audits: 120 ist ein **struktureller** Schwellenwert — darunter hat das SSR vermutlich einen
Suspense-Fallback oder eine Weiterleitung gerendert statt der Seite. Die 250 des Audits sind ein
**redaktioneller** Wert. Zwei verschiedene Fragen, zwei verschiedene Schwellen.

Die Deckungsgarantie ist das, was Masterplan 2.3 Punkt 3 fordert — und sie ist rückwirkend die
Voraussetzung dafür, dass Phase 1.1 sicher bleibt: eine Sitemap-URL ohne Datei wäre ohne
Catch-all-Rewrite ab sofort eine 404.

---

## Das Ergebnis

| Wortzahl im ausgelieferten HTML | vor Phase 2 | nach Phase 2 |
|---|---:|---:|
| < 50 Wörter | **76** | **0** |
| < 100 Wörter | 80 | **0** |
| < 250 Wörter | **145** | **5** |
| < 500 Wörter | 543 | 240 |
| Median | — | **532 Wörter** |
| Maximum | — | 2.945 Wörter |

Die Seiten aus Masterplan 2.2, die den Befund ausgelöst haben:

| Seite | vorher | nachher | H2 vorher | H2 nachher |
|---|---:|---:|---:|---:|
| `/cz/reseni` (Position 3, 0 Klicks) | 26 | **329** | 0 | **5** |
| `/cz/pruvodce/automatizace-skladu` (479 Impressionen, 0 Klicks) | 24 | **597** | 0 | **6** |
| `/cz/servis` | 26 | **465** | 0 | **6** |
| `/hu/megoldasok` | 25 | **326** | 0 | **5** |
| `/cz/imprint` | 26 | **328** | 0 | **6** |
| `/cz/pouzite-stroje` | 27 | **365** | 0 | **8** |

### Zwei Wirkungen, die im Masterplan nicht erwartet waren

**1. Interne Verlinkung.** Der SSR-Body enthält Navigation und Footer. Jede der 605 Seiten liefert
damit jetzt **mindestens 25 interne Links** im rohen HTML aus (Median 29) — vorher waren es die
wenigen Links, die der jeweilige Builder von Hand gesetzt hat, auf den meisten Seiten null. Das ist
genau der Hebel, den Masterplan 6.1 für die **244 Seiten auf „Gefunden – zurzeit nicht indexiert"**
beschreibt: Google entdeckt sie nun über jede beliebige andere Seite.

**2. Die Seiten sind ohne JavaScript benutzbar.** Der alte Prerender injizierte rohes HTML ohne
Klassen. Der SSR-Body trägt die echten Tailwind-Klassen, und das Stylesheet ist im Template
verlinkt — die ausgelieferte Seite sieht schon vor dem Hydrieren aus wie die Seite.

### Ein Defekt, der dabei sichtbar wurde

Die Marken-Hubs `/ott`, `/mayer` und `/barbaric` hatten in allen fünf Sprachen **drei `<h1>`**:
`HeroSection` rendert die Headline zweimal (Desktop- und Mobil-Variante), `ManufacturerIntro`
setzt zusätzlich die eigentliche Seiten-H1. Vorher unsichtbar, weil der Prerenderer genau eine H1
von Hand schrieb — die echte Seite kam bei Google nie an.

Behoben: die beiden Hero-Headlines sind jetzt `<p>` mit unveränderten Klassen (Optik identisch),
die H1 kommt aus `ManufacturerIntro`. `/gannomat` war nie betroffen — dort wird keine
Hero-Headline gesetzt.

---

## 2.4 Akzeptanzkriterien

- [x] Jede der ~80 betroffenen Seiten liefert mindestens 250 Wörter Body-Text — erreicht für alle
      bis auf die fünf Kontaktseiten, siehe unten
- [x] `curl -s https://asamer.cz/cz/reseni | grep -c '<h2'` liefert > 0 — jetzt 5
- [x] Anzahl prerenderter Dateien == Anzahl Sitemap-URLs (605) — als Build-Guard verankert
- [x] Build bricht ab, wenn eine Sitemap-Route fehlt

### Die fünf verbleibenden Seiten unter 250 Wörtern

`/cz/kontakt` (206), `/de/kontakt` (196), `/en/contact` (205), `/hu/kapcsolat` (200),
`/sk/kontakt` (206).

Das sind Kontaktseiten — Adresse, Telefon, Ansprechpartner, Anfahrt. 200 Wörter sind dafür kein
Mangel, sondern das angemessene Maß. Hier wird **nicht** Text hinzugefügt, um eine Zahl zu
erreichen: das wäre Füllmaterial, und Masterplan 0.3 stellt Inhalte ohnehin unter Marketing-Hoheit.

Der Audit meldet sie weiterhin — bewusst, damit die Entscheidung sichtbar bleibt statt in einer
Allowlist zu verschwinden. Sollte Marketing die Kontaktseiten ausbauen wollen (Anfahrtsbeschreibung,
Servicegebiete, Ansprechpartner je Region), verschwindet der Befund von selbst.

---

## Stand des Audits nach Phase 2

| Prüfung | Baseline | nach Phase 1 | nach Phase 4 | nach Phase 2 |
|---|---:|---:|---:|---:|
| `json-ld` | 465 | 465 | **0** | 0 |
| `body-words` | 145 | 145 | 145 | **5** |
| `language` | 39 | 39 | 39 | **65** |
| `h1` | 0 | 0 | 0 | **0** *(15 aufgedeckt und behoben)* |
| `soft-404` / `doppeltes-praefix` / `internal-link` / `sitemap-lastmod` | 10 | **0** | 0 | 0 |
| **Fehler gesamt** | **659** | 649 | 184 | **70** |

### Warum `language` von 39 auf 65 gestiegen ist

Das ist kein Rückschritt, sondern der Messeffekt, den Masterplan Abschnitt 8 vorhergesagt hat.

Die Sprachprüfung urteilt erst ab 80 Wörtern Fließtext — darunter ist jede Heuristik Rauschen.
Vorher lagen die HU- und SK-Hub- und Ratgeberseiten mit 24–30 Wörtern unter dieser Schwelle und
**konnten gar nicht auffallen**. Jetzt liefern sie 300–1.200 Wörter aus, und der englische bzw.
tschechische Fallback wird messbar:

```
15 HU-Seiten mit englischem Fließtext   (z. B. /hu/finanszirozas: hu=14 en=151 bei 1.208 Wörtern)
50 SK-Seiten mit tschechischem Fließtext
```

Das ist exakt die Abhängigkeit aus Masterplan Abschnitt 8: *„3 vor dem finalen Prerender in 2."*
Der Inhalt wird jetzt statisch ausgeliefert — mit dem Text, der in den Wörterbüchern steht.
Solange dort nur 5 % Abdeckung ist (Phase 3), liefert das statische HTML englischen Text unter
ungarischem hreflang aus.

**Das ist der Grund, warum die Übersetzungen aus Phase 3 der nächste Schritt sein müssen.** Der
Zustand ist nicht schlechter als vorher — dieselben Seiten haben denselben Text schon immer im
Browser angezeigt — aber er ist jetzt für Google sichtbar, und damit zählt er.

## Für Max

- Übersetzungen beauftragen (Phase 3, `docs/seo/i18n-luecken.md`). Priorität: die 15 HU- und
  50 SK-Seiten aus dem `language`-Befund, Liste in `docs/seo/reports/audit-phase2-dist.md`.
- Entscheidung: Kontaktseiten inhaltlich ausbauen oder bei 200 Wörtern belassen?
- Nach dem Deploy: Search Console → „Gecrawlt – zurzeit nicht indexiert" (49) und „Gefunden –
  zurzeit nicht indexiert" (244) auf „Fehlerbehebung überprüfen" setzen (Masterplan 7.4)
