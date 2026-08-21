# Phase 1 — Crawling-Fundament

**Branch:** `claude/seo-masterplan-asamer-eb0d37` · **Stand:** 21.08.2026

Ziel laut Masterplan: *„Google verschwendet kein Crawl-Budget mehr und sieht genau eine kanonische Version jeder Seite."*

---

## 1.1 Unbekannte URLs liefern 404

### Was die Ursache war

Bestätigt wie vermutet: der Catch-all-Rewrite in `vercel.json`.

```json
"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
```

Vercel prüft Redirects → statische Dateien → Rewrites. Der Catch-all fing alles ab, was keine
prerenderte Datei war, und beantwortete es mit 200 und einer 1.545-Byte-Hülle.

### Warum das Entfernen Vorarbeit brauchte

Der Rewrite hat nicht nur Müll-URLs abgefangen, sondern auch alle Pfade, die der React-Router
**clientseitig** auflöst. Davon gibt es mehr, als es auf den ersten Blick wirkt.
`scripts/check-404-safety.ts` zählt sie aus — es erzeugt die vollständige Menge routerseitig
erreichbarer Pfade aus denselben Datenquellen, die App, Sitemap und Prerenderer benutzen:

| Herkunft | Pfade | vorher ohne Datei und ohne 301 |
|---|---:|---:|
| Domainwurzel `/` | 1 | 0 |
| sprachlose Legacy-Slugs (`/ott`, `/faq`, …) | 38 | **33** |
| Sprachstartseiten | 5 | 0 |
| Seiten-Slug in fremder Sprache (`/de/reseni`) | 320 | **222** |
| Produkt-Kategorie-Slug in fremder Sprache | 2.165 | **1.427** |
| Gebrauchtmaschine unter fremdem Übersichts-Slug | 140 | **105** |
| **Summe** | **2.669** | **1.787** |

Ohne Vorarbeit hätte das Entfernen des Rewrites **1.787 echte 404 auf routerseitig gültigen
Pfaden** erzeugt — darunter `/ott`, `/barbaric` und `/faq`, die aus alten Backlinks kommen.

### Umsetzung

`vercel.json` wird jetzt **generiert** statt von Hand gepflegt — genau wie es Masterplan 1.3 Punkt 3
für die Redirect-Liste vorsieht, nur konsequenter:

```
config/redirects.manual.json     23 hand-gepflegte Einträge (Relaunch-URLs, Fremddomains)
        +
scripts/generate-vercel-config.ts   erzeugt die abgeleiteten Regeln aus src/lib/slugs.ts
        =
vercel.json                      514 Weiterleitungen, kein Rewrite mehr
```

Die abgeleiteten Regeln kommen aus derselben Quelle wie die Router-Routen. Damit kann eine Route
nicht mehr existieren, ohne dass ihre Sprachvarianten serverseitig abgefangen werden — das ist die
Garantie, die 1.1 überhaupt erst sicher macht.

Aus 1.787 Einzelpfaden werden 514 Regeln, weil einsegmentige Varianten zu einer Alternation
zusammengefasst werden:

```json
{ "source": "/de/:wrong(reseni|solutions|riesenia|megoldasok)",
  "destination": "https://asamer.cz/de/loesungen", "permanent": true }
```

Mehrsegmentige Slugs (`ratgeber/pur-vs-eva`) bekommen bewusst je eine eigene Regel: ob
path-to-regexp ein Alternations-Pattern mit `/` über Segmentgrenzen hinweg matcht, lässt sich hier
nicht gegen Vercel verifizieren, und ein paar Regeln mehr sind billiger als eine Regel, die im
Deployment stillschweigend nicht greift.

```bash
npm run generate:vercel              # vercel.json neu erzeugen
npm run generate:vercel -- --check   # Exit 1, wenn nicht aktuell (für CI)
npm run seo:404-safety               # Abdeckungsnachweis
```

**Nachweis nach der Änderung:** 2.669 Pfade geprüft, **0 Lücken** — `docs/seo/reports/404-sicherheit.md`.

### Die 404-Seite

`public/404.html` — eigenständig, ohne React, ohne Bundle-Ladezeit:

- `<meta name="robots" content="noindex, follow">`
- vollständiger Text in allen fünf Sprachen; ein kleines Inline-Skript blendet anhand des
  Pfadpräfixes die passende Fassung ein. Ohne JavaScript sind alle fünf sichtbar — das ist der
  Grund, warum der Text im HTML steht und nicht per Fetch kommt.
- Links auf die fünf Marken-Hubs, ebenfalls sprachabhängig gesetzt

Vercel liefert diese Datei für Pfade ohne Treffer automatisch mit Statuscode 404 aus, sobald der
Catch-all-Rewrite weg ist.

### Akzeptanzkriterien

- [x] `/quatsch` → 404 *(im dist-Modus des Audits als `soft-404` geprüft, live nach dem Deploy)*
- [x] Alle 605 Sitemap-URLs weiterhin 200 — der Audit meldet **null** `status`-Befunde
- [x] `/404.html` enthält `noindex` — als `404-seite`-Prüfung im Audit verankert
- [x] Kein regulärer Nutzerpfad ist zu 404 geworden — 0 Lücken über 2.669 Pfade

---

## 1.2 Doppelte Sprachpräfixe

Zwei Regeln, ganz vorn in der Liste, damit keine spezifischere Regel sie überholt:

```json
{ "source": "/:l1(de|en|cz|sk|hu)/:l2(de|en|cz|sk|hu)/:l3(de|en|cz|sk|hu)/:rest*", "destination": "https://asamer.cz/:l1/:rest*", "permanent": true },
{ "source": "/:l1(de|en|cz|sk|hu)/:l2(de|en|cz|sk|hu)/:rest*",                     "destination": "https://asamer.cz/:l1/:rest*", "permanent": true }
```

Die Dreifach-Variante steht **vor** der Doppel-Variante — sonst bräuchte `/cz/cz/cz/ott` zwei
Sprünge statt einem, und das Akzeptanzkriterium „keine Redirect-Ketten" wäre verletzt.

Gefahr einer Fehlzuordnung besteht nicht: die Regeln greifen nur, wenn das *zweite* Segment ein
Sprachcode ist, und kein Seiten-Slug heißt `cz`, `sk`, `de`, `en` oder `hu`. Belegt durch den
Audit-Lauf — alle 605 Sitemap-URLs antworten weiterhin mit 200, keine wird von diesen Regeln gefangen.

### Zur Ursache im Router

Der Masterplan verlangt, die Ursache im Router zu prüfen statt nur die Symptome umzuleiten.
Befund: `handleSetLang` in `src/App.tsx` baut die Ziel-URL über `stripLanguageFromPath` +
`buildLocalizedPath`, und `stripLanguageFromPath` entfernt genau ein führendes Sprachsegment.
Ein Sprachwechsel kann damit **kein** doppeltes Präfix erzeugen. Die belegten `/cz/cz/…`-URLs
stammen deshalb nicht aus dem Frontend, sondern von außen — relative Links in fremden Quellen
oder alte Verweise. Die 301-Regel ist hier die vollständige Antwort, nicht nur Symptombehandlung.

### Akzeptanzkriterien

- [x] `/cz/cz/pruvodce/vyber-olepovacky-hran` → 301 → `/cz/pruvodce/vyber-olepovacky-hran`
- [x] `/cz/cz` → 301 → `/cz`
- [x] Sprachwechsel im Frontend erzeugt keine solchen URLs — Ursache geprüft, siehe oben

---

## 1.3 Alte URL-Struktur weiterleiten

### Was umgesetzt ist

Die 23 hand-gepflegten Regeln in `config/redirects.manual.json` decken die im Masterplan belegten
Muster ab und bleiben unverändert bestehen:

| Muster | Ziel |
|---|---|
| `/products/:slug*` sowie 9 spezifischere `/products/<kategorie>/:slug*` | passender Marken-Hub bzw. `/cz/pouzite-stroje` |
| `/second-hand/:slug*` | `/cz/pouzite-stroje` |
| `/servis/:slug*`, `/about/:slug*` | `/cz/servis`, `/cz/kontakt` |
| `/xylexpo-2024/:slug*`, `/ligna-2024/:slug*` | `/cz` |
| `asamer.net`, `www.asamer.net` (alle Pfade) | `asamer.cz` |

Keine dieser Regeln zeigt pauschal auf die Startseite, außer den beiden Messe-Seiten, für die es
kein Nachfolgeziel gibt.

Die im Masterplan genannten Beispiele `/sk/service` und `/en/used-machines/ott-tornado-top` werden
jetzt zusätzlich von den **generierten** Sprachvarianten-Regeln abgefangen — vorher liefen sie in
die 200er-Hülle.

`"trailingSlash": false` war bereits gesetzt und bleibt. `/pfad` und `/pfad/` liefern damit dasselbe.

### Was offen ist und warum

**Die vollständige Zuordnung aus den Search-Console-Exporten fehlt.** Der Masterplan verweist auf
`Downloads/asamer/Seiten.csv` (357 Zeilen) und die Kategorien „Seite mit Weiterleitung" (113) und
„Durch noindex-Tag ausgeschlossen" (134). Diese Dateien liegen nicht im Repo und sind aus dieser
Umgebung nicht erreichbar — geprüft.

Sobald die Exporte vorliegen, ist der Weg vorbereitet: jede zusätzliche Zuordnung kommt als Eintrag
in `config/redirects.manual.json`, `npm run generate:vercel` baut daraus die Regeln. Die
hand-gepflegte Datei steht bewusst **vor** den generierten Regeln, damit ein Einzelfall aus der
Search Console eine generische Regel schlagen kann.

### Akzeptanzkriterien

- [x] Trailing-Slash-Verhalten global festgelegt
- [x] Kein Redirect zeigt auf eine URL, die selbst weiterleitet — die generierten Ziele sind
      immer der kanonische Pfad, und die Dreifach-vor-Doppel-Reihenfolge verhindert die einzige
      Kettenbildung, die konstruierbar war
- [ ] **Jede URL aus dem GSC-Export antwortet mit 301** — blockiert, siehe oben. Für Max.

---

## 1.4 www abschalten

### Repo-Seite: bereits sauber

```bash
grep -rn "www\.asamer\.cz" src/ public/ scripts/ vercel.json index.html   # 0 Treffer
```

Canonical, hreflang, Sitemap, JSON-LD und OG-Tags werden alle aus `CANONICAL_DOMAIN =
'https://asamer.cz'` in `src/lib/language.ts` erzeugt — eine einzige Stelle, non-www.
Der Audit prüft das jetzt dauerhaft nach (`canonical`, `hreflang`, `sitemap-www`): null Befunde
über alle 605 URLs.

### Was nicht im Repo liegt

Die 301 www → non-www läuft laut Masterplan bereits, ist aber **nicht** in `vercel.json`
konfiguriert. Sie kommt aus der Domain-Konfiguration im Vercel-Dashboard. Der Audit prüft sie im
`--base`-Modus über vier Pfade (`/`, `/cz`, `/cz/ott`, `/cz/barbaric/buffer-dilu/pbx`) und auch
für `http://`. Dieser Teil lässt sich erst gegen ein Deployment ausführen.

### Akzeptanzkriterien

- [x] `grep -rn "www\.asamer\.cz" src/ public/` liefert keine Treffer
- [ ] `curl -I http://www.asamer.cz/cz/barbaric` → 301 — live zu prüfen: `npm run seo:audit -- --base https://asamer.cz`
- [ ] Nur noch eine Sitemap in der Search Console — **Aufgabe für Max**, siehe Abschnitt 9

---

## 1.5 Sitemap mit echtem `lastmod`

### Der Befund war präziser als gedacht

Der Masterplan sagt, die Sitemap habe kein `<lastmod>`. Im Repo war es vorhanden — aber wertlos:

```ts
const today = new Date().toISOString();   // scripts/generate-sitemap.ts, alt
…
<lastmod>${today}</lastmod>               // für alle 605 URLs identisch
```

Alle 605 URLs trugen den Build-Zeitstempel. Ein `lastmod`, das sich bei jedem Deploy für die
gesamte Domain ändert, ignoriert Google — die Wirkung ist dieselbe, als stünde es gar nicht da.
Auch `<xhtml:link rel="alternate">` war entgegen der Annahme bereits vorhanden.

### Umsetzung

`scripts/content-lastmod.ts` leitet das Datum aus dem Git-Zeitstempel der Dateien ab, die den
Inhalt einer Seite **tatsächlich** liefern. Bewusst nicht dabei: `scripts/prerender.ts` — sonst
zöge jede Formatierungsänderung am Prerenderer alle 605 Daten hoch.

| Seitentyp | beitragende Dateien |
|---|---|
| statische Seite | `src/seo/routes.ts` + Seitenkomponente + ggf. Inhaltsmodul |
| Produktdetailseite | Produktdaten + SEO-Content + Detailseiten-Komponente der Marke |
| Gebrauchtmaschine | `src/data/usedMachines.ts` + `UsedMachineDetailPage.tsx` |

**Der Deploy-Fallstrick:** Vercel klont flach. `git log` liefert dort je nach Klon-Tiefe für alle
Dateien denselben oder gar keinen Zeitstempel — also genau das, was hier abgeschafft werden soll.
Statt die Tiefe zu raten bewertet das Modul das *Ergebnis*: mindestens 80 % Abdeckung und
mindestens drei verschiedene Datumswerte, sonst greift der committete Snapshot
`config/content-lastmod.json`. Der Snapshot wird bei jedem Build mit brauchbarer Historie
mitgeschrieben und gehört in den Commit.

Ergebnis:

```
Sitemap generated with 605 entries (lastmod aus git, 4 unterschiedliche Datumswerte)

  405 × 2026-06-23   Produktkataloge OTT/Mayer/Barbaric/Gannomat
  100 × 2026-06-26   statische Seiten (Route-Metadaten)
   60 × 2026-06-24   Gannomat-Katalog
   40 × 2026-08-11   Gebrauchtmaschinen
```

**Grenze der Auflösung, offen benannt:** Produktdaten liegen je Marke in *einer* Datei von
130–560 KB. Alle Produkte einer Marke teilen sich deshalb ein Datum. Feiner ginge es nur über
`git blame` auf Zeilenbereiche — gegenüber dem Nutzen zu fragil. Sobald Inhalte in kleinere
Dateien wandern, verbessert sich die Auflösung automatisch, ohne dass am Skript etwas zu ändern wäre.
Vier ehrliche Gruppen sind allemal mehr Signal als 605 identische Zeitstempel.

Der Audit prüft beides: `<lastmod>` vorhanden **und** nicht für alle URLs identisch.

### Sitemap-Index

Bewusst **nicht** umgesetzt. Der Masterplan schlägt ihn zur Erwägung vor („Erwägen, die Sitemap
nach Sprachen zu splitten"). Der Nutzen ist Bequemlichkeit in der Search-Console-Oberfläche;
der Preis ist, dass die alte Sitemap entfernt und die neue eingereicht werden muss — ein Schritt,
den nur Max ausführen kann, und der mitten in Phase 1 unnötig Bewegung in die Indexierung bringt.
Vorschlag: nach Phase 2 gemeinsam mit den anderen Search-Console-Aufgaben aus 7.4 erledigen.

### Akzeptanzkriterien

- [x] Jede URL hat ein `<lastmod>` — und nicht alle dasselbe
- [x] Sitemap validiert gegen das Sitemap-Protokoll (`<loc>`, `<lastmod>`, `<changefreq>`,
      `<priority>`, `xhtml:link`; wohlgeformtes XML, vom Audit geparst)
- [ ] Sitemap-Index eingereicht — zurückgestellt, Begründung oben

---

## Nebenbefund aus Phase 6.1, hier mit behoben

Die Ratgeber-Hub-Seite `/{lang}/faq` verlinkte auf fünf Ratgeber-Slugs, die es nicht gibt.
Ursache: `HUB_GUIDES[].slugByLang` in `src/data/hub/ratgeberFaqHub.ts` wurde getrennt von
`SLUG_TRANSLATIONS` gepflegt und war an fünf Stellen auseinandergelaufen.

Heute fiel das nicht auf, weil der Catch-all-Rewrite jeden dieser Links mit 200 beantwortete.
**Nach 1.1 wären es fünf echte 404 auf verlinkten Pfaden gewesen** — deshalb gehört der Fix vor
das Entfernen des Rewrites.

Behoben nicht durch Korrektur der fünf Werte, sondern durch Entfernen der Duplikation:
`HubGuideCard` trägt jetzt einen `canonicalSlug`, die Sprachvarianten kommen aus `localizeSlug`.
Eine Selbstprüfung beim Modul-Laden lässt den Build scheitern, wenn ein `canonicalSlug` nicht in
`SLUG_TRANSLATIONS` steht. Die Fehlerklasse ist damit geschlossen, nicht nur der Einzelfall.

---

## Stand des Audits nach Phase 1

| Prüfung | vorher | nachher |
|---|---:|---:|
| `soft-404` | 1 | **0** |
| `doppeltes-praefix` | 3 | **0** |
| `internal-link` | 5 | **0** |
| `sitemap-lastmod` | 1 | **0** |
| `status` / `canonical` / `robots` / `h1` / `hreflang` / `prerender-coverage` | 0 | 0 |
| `json-ld` | 465 | 465 → Phase 4 |
| `body-words` | 145 | 145 → Phase 2 |
| `language` | 39 | 39 → Phase 3 |

Alles, was Phase 1 zugeordnet ist, steht auf null. Die verbleibenden Befunde gehören zu Phase 2, 3 und 4.

## Für Max

- Search Console: Sitemap `https://www.asamer.cz/sitemap.xml` entfernen
- Search Console: Exporte `Seiten.csv`, „Seite mit Weiterleitung", „Durch noindex-Tag ausgeschlossen"
  bereitstellen — dann wird 1.3 vollständig
- Nach dem Deploy: `npm run seo:audit -- --base https://asamer.cz` bestätigt 404, www-Weiterleitung
  und doppelte Präfixe gegen die Produktion
