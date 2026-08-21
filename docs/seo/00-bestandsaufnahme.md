# 00 — Bestandsaufnahme (Repo-Diagnose)

**Stand:** 21.08.2026 · **Branch:** `claude/seo-masterplan-asamer-eb0d37`
**Grundlage:** Abschnitt 0.2 des SEO-Masterplans. Alle Antworten sind aus dem Repo gelesen, nicht geraten.
Reproduzierbar mit `npm ci && npm run build` — der Build lief für diese Aufnahme sauber durch (Exit 0, 605 prerenderte Seiten).

---

## 1. Welches Prerender-Verfahren läuft?

**Kein Headless-Browser, kein `vite-plugin-ssr`, kein `react-snap`, kein Puppeteer.**
Es gibt weder `renderToString` noch irgendeine Form von echtem React-Rendering im Build.

Stattdessen: `scripts/prerender.ts` (33 KB, eigene Entwicklung) ist ein **String-Template-Injektor**.
Er läuft als letzter Schritt von `npm run build`:

```
build = generate:sitemap → tsc -b → vite build → prerender
```

Ablauf pro Route:

1. `dist/index.html` als Template einlesen
2. `<title>`, `<meta>`, `<link rel=canonical>`, hreflang, OG/Twitter in den `<head>` injizieren
3. Einen **von Hand gebauten HTML-Body-String** in `<div id="root">` schreiben
4. Nach `dist/{pfad}/index.html` schreiben

Das ist die zentrale Erkenntnis dieser Diagnose und sie **widerlegt die Arbeitshypothese aus Abschnitt 2.3 des Masterplans**:

> *„Die Inhaltssektionen dieser Seiten sind in scroll-abhängige Wrapper verpackt (`whileInView`, `IntersectionObserver`, `useInView`). Der Prerenderer nimmt den DOM-Snapshot im Viewport-Zustand …"*

Es gibt keinen DOM-Snapshot. `framer-motion` ist nicht installiert (Animation läuft über `gsap`), `whileInView` kommt im gesamten `src/` **null Mal** vor, `IntersectionObserver` nur in zwei Navigations-Hilfskomponenten (`CategoryNav.tsx`, `CategorySidebar.tsx`) — beides Scrollspy-Logik, kein Content-Mount.

Gegenprobe:

```bash
grep -rn "whileInView" src/            # 0 Treffer
grep -rn "framer-motion" src/ package.json  # 0 Treffer
grep -n "snap\|puppeteer\|playwright" package.json  # 0 Treffer
```

**Der tatsächliche Grund für die dünnen Seiten** ist damit ein anderer — und ein einfacherer:
Der Prerenderer hat pro Seitentyp einen eigenen Body-Builder, und für die Hub-/Ratgeber-/Rechtsseiten existiert schlicht keiner. `staticPageBody()` (Zeile ~305) gibt für die meisten Route-Keys nur aus:

```
<nav>Breadcrumb</nav>
<h1>{title}</h1>
<p>{description}</p>
<script type="application/ld+json">BreadcrumbList</script>
```

Ausgebaute Bodies gibt es nur für:

| Seitentyp | Body-Builder | Quelle |
|---|---|---|
| Produktdetailseiten | `productPageBody()` | `src/data/seo/{ott,mayer,barbaric,gannomat}SeoContent.ts` (1,5 MB Content) |
| Marken-Hubs `/ott` `/mayer` `/barbaric` `/gannomat` | `staticPageBody()` + `HUB_CATEGORY_SEO` | `*_CATEGORY_SEO` |
| `/pruvodce/vyber-olepovacky-hran` | `guideEdgebanderBody()` | `src/data/guides/edgebanderGuide.ts` |
| `/faq` | `ratgeberFaqHubBody()` | `src/data/hub/ratgeberFaqHub.ts` |
| Gebrauchtmaschinen-Detail | inline | `src/data/usedMachines.ts` |

Alle **anderen** Routen — Startseite, `/reseni`, `/servis`, `/financovani`, `/kontakt`, `/pouzite-stroje`, `/ima-schelling`, die fünf übrigen Ratgeber, Impressum/AGB/Datenschutz — haben keinen Builder.

Der Inhalt dieser Seiten existiert, aber **fest verdrahtet als JSX in den React-Komponenten** (`src/pages/GuideWarehouseAutomationPage.tsx` = 26 KB, `GuidePurVsEvaPage.tsx` = 30 KB, `GuidePanelSawComparisonPage.tsx` = 34 KB, …). Der Prerenderer kann darauf nicht zugreifen, weil er kein React ausführt.

---

## 2. Wo kommt die Routenliste für den Prerender her?

Aus denselben Modulen wie die Sitemap, aber über **zwei getrennt gepflegte Schleifen**:

| | `scripts/generate-sitemap.ts` | `scripts/prerender.ts` |
|---|---|---|
| Statische Seiten | `Object.values(SEO_ROUTES)` × `INDEXABLE_LANGUAGES` | `Object.entries(SEO_ROUTES)` × `SUPPORTED_LANGUAGES` |
| Produkte | `OTT/MAYER/BARBARIC/GANNOMAT_PRODUCTS` | dieselben |
| Gebrauchtmaschinen | `USED_MACHINES` | dieselben |

Die Datenquelle ist identisch, der Code ist es nicht. Aktuell ist `INDEXABLE_LANGUAGES === SUPPORTED_LANGUAGES` (beide fünf Sprachen, `NON_INDEXABLE_LANGUAGES` ist leer), deshalb stimmen die Zahlen zufällig überein:

```
Sitemap:     605 <loc>
Prerender:   605 Dateien
```

**Das ist eine Übereinstimmung ohne Garantie.** Sobald die beiden Konstanten wieder auseinanderlaufen — was sie historisch schon getan haben, siehe Kommentar in `src/lib/language.ts` zu SK — driftet die Abdeckung stillschweigend. Für Phase 1.1 (Catch-all entfernen) brauchen wir eine harte Garantie, kein Zufallsgleichstand. → Guard aus Abschnitt 2.3/7 ist nötig.

---

## 3. Wie entsteht `sitemap.xml`?

Build-Skript `scripts/generate-sitemap.ts`, läuft als **erster** Build-Schritt und schreibt nach `public/sitemap.xml` (eingecheckt, 537 KB). Vite kopiert `public/` nach `dist/`.

Der Stand im Repo ist **besser als der Live-Befund im Masterplan**. Abschnitt 1.5 stellt fest, die Sitemap habe kein `<lastmod>` und keine `xhtml:link`-Alternates. Beides ist im Repo vorhanden:

- `<lastmod>` ✔ vorhanden
- `<changefreq>` / `<priority>` ✔ vorhanden
- `<xhtml:link rel="alternate" hreflang="…">` inkl. `x-default` ✔ vorhanden

**Aber `<lastmod>` ist wertlos**, und zwar genau so, wie es der Masterplan beschreibt:

```ts
const today = new Date().toISOString();   // Zeile 25
…
<lastmod>${today}</lastmod>               // für alle 605 URLs identisch
```

Alle 605 URLs tragen den Zeitstempel des Builds. Google ignoriert ein `lastmod`, das sich bei jedem Deploy für die gesamte Site ändert. Der Befund im Masterplan ist also im Ergebnis richtig, nur die Ursache ist eine andere: nicht *fehlend*, sondern *nicht aussagekräftig*. → Aufgabe 1.5 bleibt, aber als „echtes Änderungsdatum pro Inhalt" statt „lastmod ergänzen".

Ein Sitemap-Index / eine Aufteilung nach Sprachen existiert nicht (eine Datei, 605 URLs).

---

## 4. Gibt es `vercel.json` / `now.json`?

`vercel.json` existiert (21 KB), `now.json` nicht.

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "trailingSlash": false,          // ✔ Aufgabe 1.3 Punkt 4 bereits erledigt
  "redirects": [ … 152 Einträge … ],
  "rewrites": [ { "source": "/(.*)", "destination": "/index.html" } ]
}
```

**Der Catch-all-Rewrite ist bestätigt** — er ist die Ursache für den teuersten Befund des Masterplans (Abschnitt 1.1: jeder beliebige Pfad liefert 200 statt 404). Vercel prüft zuerst statische Dateien, dann Rewrites; da der Rewrite jeden Rest auf `/index.html` legt, gibt es keine 404-Antwort mehr.

`cleanUrls` ist **nicht** gesetzt. Das ist unkritisch, weil der Prerenderer ohnehin Verzeichnisse mit `index.html` schreibt, die Vercel unter dem Pfad ohne Endung ausliefert.

Die 152 Redirects decken bereits ab:
- Sprach-Slug-Kreuzungen (`/de/reseni` → `/de/loesungen` usw.)
- Kategorie-Slugs in falscher Sprache (`/de/ott/olepovacky-hran/:model` → `/de/ott/kantenanleimmaschinen/:model`)
- Alte Relaunch-Struktur (`/products/:slug*`, `/second-hand/:slug*`, `/servis/:slug*`, `/about/:slug*`, Messe-Seiten)
- Fremddomains `asamer.net` und `www.asamer.net` → `asamer.cz`

**Nicht abgedeckt** (Lücken für Phase 1):
- Doppelte Sprachpräfixe `/cz/cz/…` → Aufgabe 1.2, keine einzige Regel dafür
- Sprachlose Legacy-Slugs `/mayer`, `/ott`, `/faq`, `/kontakt`, … — die werden **nur clientseitig** von `LEGACY_SLUGS` in `App.tsx` (37 Einträge) per `<Navigate>` abgefangen. Ohne Catch-all-Rewrite werden das echte 404. **Das ist der kritische Punkt für 1.1** und muss vorher als 301 nach `vercel.json`.
- www → non-www taucht in `vercel.json` **nicht** auf. Die Weiterleitung läuft laut Masterplan bereits (vermutlich Vercel-Domain-Konfiguration im Dashboard). Im Repo gibt es dafür keine Regel und keine hartkodierte www-URL:
  ```bash
  grep -rn "www\.asamer\.cz" src/ public/ scripts/ vercel.json index.html   # 0 Treffer
  ```
  → **Akzeptanzkriterium 1.4 Punkt 1 ist damit bereits erfüllt.** Offen bleiben die beiden Punkte, die nur Max erledigen kann (Sitemap in der GSC entfernen) bzw. die live geprüft werden müssen.

---

## 5. Wie ist i18n gelöst?

**Eigenbau, keine Bibliothek.** Weder `react-i18next` noch `LinguiJS` noch `i18next` sind installiert.

Es gibt **drei parallele Übersetzungsmechanismen**:

### a) `src/i18n/index.ts` — typisiertes Wörterbuch (35 KB)
Ein `Translations`-Interface plus fünf vollständige Objekte (`de`, `en`, `cz`, `sk`, `hu`). Weil TypeScript vollständige Objekte erzwingt, kann hier **kein Schlüssel fehlen** — dieser Teil ist strukturell abgesichert. Genutzt für Navigation, Hero, Footer-Labels usw.

### b) `src/seo/routes.ts` — Route-Metadaten (827 Zeilen)
`createMeta({de, en, cz, sk, hu})` erzwingt ebenfalls alle fünf Sprachen. Deshalb sind Titel, Description und hreflang auf allen HU-/SK-Seiten korrekt lokalisiert — genau wie im Masterplan beobachtet.

### c) `src/i18n/pageTextTranslations.ts` — **hier sitzt der Fehler aus Phase 3**

```ts
export const translatePageText = (locale: 'sk' | 'hu', en: string, cz: string): string => {
  if (locale === 'sk') {
    return pageSkTranslations[cz] ?? cz;   // SK fällt still auf CZ zurück
  }
  return pageHuTranslations[en] ?? en;     // HU fällt still auf EN zurück
};
```

Ein **Wörterbuch, das auf den Quelltext selbst schlüsselt** — nicht auf einen Schlüsselnamen. Fehlt ein Satz im Wörterbuch, wird stillschweigend der Ausgangstext zurückgegeben. Genau das produziert die beiden Befunde:

- **3.1 (HU → EN):** `pageHuTranslations` hat **260 Einträge**. Die Guide-Seiten enthalten ein Vielfaches davon.
- **3.2 (SK → CZ):** `pageSkTranslations` hat **260 Einträge**, Fallback ist der tschechische Quelltext — deshalb fällt es niemandem auf.

Dieselbe Fallback-Kette existiert ein zweites Mal im Prerenderer, dort auf den langen SEO-Content-Blöcken:

```ts
// scripts/prerender.ts, ml() und mlGuide() und mlText()
if (lang === 'sk') return obj.sk ?? obj.cz;
if (lang === 'hu') return obj.hu ?? obj.en;
```

Es gibt also **fünf Fallback-Stellen** (`ml`, `mlGuide`, `mlText` im Prerenderer, `translatePageText` und die Inline-Kopien in 20+ Page-Komponenten), alle mit derselben stillen Semantik. Ein Coverage-Report muss beide Ebenen abdecken: die `MultiLangText`-Objekte in `src/data/**` und die Wörterbücher in `pageTextTranslations.ts`.

Der Kommentar in `src/lib/language.ts` benennt das Problem übrigens bereits selbst:

> *„Offen (Qualitäts-Follow-up): die langen SEO-Content-Blöcke in `data/seo/*SeoContent.ts` fallen noch teils auf CZ zurück → schrittweise auf SK übersetzen."*

---

## 6. Welche Komponenten rendern erst beim Scrollen?

**Für das SEO-Problem: keine.** Siehe Frage 1.

Vollständiger Befund:
- `whileInView` — 0 Treffer
- `useInView` / `react-intersection-observer` — nicht installiert
- `IntersectionObserver` — 2 Treffer, beide Scrollspy für die Kategorie-Navigation auf Marken-Hubs (`CategoryNav.tsx`, `CategorySidebar.tsx`). Sie markieren den aktiven Menüpunkt, sie mounten keinen Inhalt.
- Animation: `gsap` + `@studio-freight/lenis` (Smooth Scroll) + `split-type`
- `React.lazy` in `App.tsx` für 23 Seitenkomponenten — relevant fürs Bundle, nicht für den Prerender (der Prerenderer führt kein JS aus)

Der **Gegenbeweis-Fall** aus Abschnitt 2.3 („Inhalte per `useEffect`-Fetch nachgeladen") trifft ebenfalls nicht zu: es gibt keinen Laufzeit-Datenfetch für Seiteninhalte, alle Inhalte sind statisch im Bundle.

---

## 7. Gibt es bereits Tests oder CI?

**Nein. Nichts.**

- `.github/` existiert nicht → keine GitHub Actions
- Kein Vitest, kein Jest, kein Playwright, kein Testing-Library
- Kein `test`-Skript in `package.json`
- Einziger Qualitäts-Gate: `eslint.config.js` + `npm run lint`, nicht automatisiert ausgeführt
- Vercel-Checks: nicht im Repo konfigurierbar sichtbar

Damit gibt es aktuell **keinen einzigen automatischen Schutz** gegen die Rückkehr eines der Befunde aus dem Masterplan. Abschnitt 7.1 (`scripts/seo-audit.ts` als CI-Test) ist folglich nicht nur wertvoll, sondern der einzige Mechanismus, der die späteren Phasen absichert. → Wird als Erstes gebaut, im Report-Modus, wie in Abschnitt 8 empfohlen.

---

## 8. Baseline-Messung (Ausgangswert vor jeder Änderung)

`npm run build` erzeugt 605 Dateien in `dist/`. Wortzahl im ausgelieferten Body (ohne JSON-LD, ohne Tags):

| Schwelle | Anzahl Seiten |
|---|---:|
| < 50 Wörter | **76** |
| < 100 Wörter | **80** |
| < 250 Wörter (= Zielwert Masterplan 2.4) | **146** |
| < 500 Wörter | 543 |

Die dünnsten Seiten decken sich exakt mit der Liste aus Abschnitt 2.1 des Masterplans — plus zwei Gruppen, die dort nicht aufgeführt sind:

| Gruppe | dünne Seiten | Anmerkung |
|---|---:|---|
| Gannomat-Produktseiten | 35 | kein `GANNOMAT_PRODUCT_SEO`-Eintrag → Builder läuft, findet aber keinen Content |
| Gebrauchtmaschinen (Übersicht + Detail) | 40 | Übersichtsseite ohne Builder, Details oft ohne `longDescription` |
| Ratgeberseiten (5 × 5 Sprachen) | 25 | kein Builder |
| Hub-/Rechts-/Service-Seiten | ~40 | kein Builder |
| `/` (Wurzel, `dist/index.html`) | 1 | reine App-Hülle, 0 Wörter |

**`/` ist ein bisher unbenannter Befund:** `https://asamer.cz/` liefert die leere Vite-Hülle aus. Die Weiterleitung auf `/cz` passiert ausschließlich clientseitig über `<Route path="/" element={<Navigate to="/cz" />} />`. Für Google ist die Wurzel der Domain damit eine inhaltslose Seite. → gehört nach Phase 1.

Reproduktion der Messung: `scripts/seo-audit.ts` (Phase 6.1), Modus `--dist`.

---

## 9. Konsequenzen für den Umsetzungsplan

| Masterplan-Annahme | Befund | Folge |
|---|---|---|
| 2.3 Scroll-abhängiger Mount | **falsch** | Kein Build-Flag für Intersection-Wrapper nötig, kein Scroll-vor-Snapshot. Stattdessen: Body-Builder bzw. echtes SSR. |
| 1.5 Sitemap ohne `lastmod` | **teilweise falsch** | `lastmod` ist da, aber build-basiert → auf Inhalts-Zeitstempel umstellen. |
| 1.3 Punkt 4 `trailingSlash` | **bereits erledigt** | `"trailingSlash": false` steht in `vercel.json`. |
| 1.4 Punkt 2 hartkodierte www-URLs | **bereits erfüllt** | 0 Treffer im Repo. |
| 1.1 Catch-all-Rewrite als Ursache | **bestätigt** | Entfernen — aber erst nachdem die 37 `LEGACY_SLUGS` aus `App.tsx` als 301 in `vercel.json` stehen. |
| 3.1/3.2 stiller i18n-Fallback | **bestätigt, Ursache lokalisiert** | `translatePageText` + `ml`/`mlGuide`/`mlText`. Zwei Ebenen, ein Report. |
| 7.1 kein CI-Schutz | **bestätigt** | `seo-audit.ts` zuerst. |

**Zwei zusätzliche Abhängigkeiten**, die im Masterplan-Diagramm (Abschnitt 8) fehlen:

1. **`LEGACY_SLUGS` → 1.1.** Ohne 301-Regeln für die 37 sprachlosen Slugs erzeugt das Entfernen des Catch-all 37 neue 404 auf real verlinkten Pfaden.
2. **Wurzelpfad `/` → 1.1.** Ohne serverseitige 301 auf `/cz` bleibt die Domainwurzel eine leere Hülle.

