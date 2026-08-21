# Phase 6.1 — SEO-Invarianten als Test + Baseline

**Branch:** `claude/seo-masterplan-asamer-eb0d37` · **Stand:** 21.08.2026

Umgesetzt zuerst, wie in Abschnitt 8 des Masterplans empfohlen: *„Phase 6.1 zuerst bauen, aber im Report-Modus statt im Fail-Modus."*
Damit gibt es eine Messlatte, bevor irgendetwas verändert wird — und einen Schutz gegen Rückschritte in allen folgenden Phasen.

## Was gebaut wurde

| Datei | Zweck |
|---|---|
| `scripts/seo-audit.ts` | Der Test. Liest die Sitemap und prüft jede URL gegen die Invarianten aus Masterplan-Tabelle 7.1. |
| `scripts/seo-lang-markers.ts` | Stoppwort-Heuristik für die Sprachprüfung — der Teil, der den HU/SK-Fallback-Bug fängt. |
| `scripts/seo-vercel-routes.ts` | Matcher für `vercel.json`. Bildet Redirects und Rewrites offline nach, damit der Test ohne Deployment läuft. |

```bash
npm run seo:audit                          # gegen dist/ — offline, CI-tauglich
npm run seo:audit -- --base https://asamer.cz   # gegen Produktion oder Preview
npm run seo:audit -- --fail                # Gate-Modus: Exit 1 bei Fehlern
```

Der dist-Modus bildet die Vercel-Auslieferungsreihenfolge nach — erst Redirects, dann statische Datei, dann Rewrite, sonst 404 —
und kann deshalb schon vor dem Deploy sagen, was live passieren wird. Er kennt insbesondere den Unterschied zwischen
*„diese URL existiert als prerenderte Datei"* und *„diese URL lebt nur vom Catch-all-Rewrite"*. Genau diese Unterscheidung
ist die Sicherheitsprüfung für Phase 1.1.

## Geprüfte Invarianten

Vollständig nach Masterplan 7.1 umgesetzt:

| Prüfung | Stufe | Kriterium |
|---|---|---|
| `status` | Fehler | 200 |
| `canonical` | Fehler | vorhanden, absolut, non-www, selbstreferenzierend |
| `robots` | Fehler | vorhanden, kein `noindex` (Allowlist in `NOINDEX_ALLOWLIST`) |
| `title` | Warnung | vorhanden, 30–65 Zeichen |
| `title-unique` | Warnung | über alle URLs eindeutig |
| `description` | Warnung | vorhanden, 70–165 Zeichen |
| `description-unique` | Warnung | über alle URLs eindeutig |
| `h1` | Fehler | genau eine |
| `body-words` | Fehler | ≥ 250 Wörter im rohen HTML |
| `hreflang` | Fehler | alle fünf Sprachen, selbstreferenzierend, genau ein `x-default`, kein www |
| `language` | Fehler | Fließtext passt zum Sprachpräfix |
| `json-ld` | Fehler | parsebar; `Product` + `BreadcrumbList` auf Produktseiten, `Organization` + `WebSite` auf Sprachstartseiten |
| `internal-link` | Fehler | kein Ziel mit 3xx/4xx — und keins, das nur der Catch-all-Rewrite rettet |
| `sitemap-lastmod` | Fehler | `<lastmod>` vorhanden **und** nicht für alle URLs identisch |
| `sitemap-www` / `sitemap-domain` | Fehler | ausschließlich `https://asamer.cz` |
| `prerender-coverage` | Fehler | jede Sitemap-URL hat eine prerenderte Datei |
| `soft-404` | Fehler | `/__seo-test-404__` liefert 404 |
| `doppeltes-praefix` | Fehler | `/cz/cz/…` liefert 301 |
| `www` | Fehler | `www.asamer.cz/…` liefert 301 auf non-www (nur im `--base`-Modus) |

### Zur Sprachprüfung

Keine allgemeine Spracherkennung, sondern absichtlich eng: pro Sprache eine Liste von Funktionswörtern,
die die *Verwechslungssprache* nicht kennt. CZ und SK teilen sich `a s v na je` — deshalb stehen dort nur
unterscheidende Formen (`pro`/`pre`, `který`/`ktorý`, `řešení`/`riešenie`, `provozu`/`prevádzky`).
Unter 80 Wörtern wird nicht geurteilt, bei Gleichstand gilt die Seite als bestanden. Das Verfahren erzeugt
im Baseline-Lauf keine erkennbaren Fehlalarme und fängt beide belegten Fehlerfälle.

## Baseline (Stand vor jeder Änderung)

`npm run build && npm run seo:audit` über 605 Sitemap-URLs:

```
659 Fehler, 126 Warnungen
  json-ld            465
  body-words         145
  title               75  (Warnung)
  description         43  (Warnung)
  language            39
  title-unique         8  (Warnung)
  internal-link        5
  doppeltes-praefix    3
  sitemap-lastmod      1
  soft-404             1
```

Vollständiger Bericht: [`reports/audit-baseline-dist.md`](reports/audit-baseline-dist.md) · Rohdaten: `reports/audit-baseline-dist.json`

### Was die Zahlen bedeuten

**`json-ld` 465** — fast ausschließlich *„Produktseite ohne Product-Schema"*. Deckt sich mit Masterplan 4.1.
Ein `Product`-Schema wird derzeit nur für Gebrauchtmaschinen mit Preis erzeugt, nicht für die Katalogprodukte.

**`body-words` 145** — die dünnen Seiten aus Masterplan 2.1, plus zwei dort nicht genannte Gruppen
(35 Gannomat-Produktseiten ohne SEO-Content-Eintrag, 40 Gebrauchtmaschinen-Seiten).

**`language` 39** — bestätigt Phase 3 und schärft sie:
- 2 HU-Seiten mit englischem Fließtext (`/hu/faq`, `/hu/utmutato/elzarogep-valasztas`), Marker `hu=24 en=169`
- 37 SK-Seiten mit tschechischem Fließtext, darunter alle Marken-Hubs und der komplette Gannomat-, Mayer- und OTT-Produktkatalog

Die übrigen HU-Ratgeberseiten tauchen hier **nicht** auf — nicht weil sie ungarisch wären, sondern weil sie
mit 24–30 Wörtern unter der Urteilsschwelle liegen. Sie werden erst nach Phase 2 sichtbar. Das ist die
Reihenfolge-Abhängigkeit aus Masterplan Abschnitt 8, jetzt messbar belegt.

**`internal-link` 5 — neuer Befund, im Masterplan nicht enthalten.**
Die Ratgeber-Hub-Seite `/{lang}/faq` verlinkt auf fünf Ratgeber-Slugs, die es nicht gibt:

| Auf Seite | Toter Link | Richtiger Slug |
|---|---|---|
| `/cz/faq` | `/cz/pruvodce/dotace-drevoobrabeni-cz-2026` | `/cz/pruvodce/dotace-drevoobrabeci-stroje-cz-2026` |
| `/en/faq` | `/en/guide/funding-woodworking-cz-2026` | `/en/guide/funding-woodworking-machines-cz-2026` |
| `/hu/faq` | `/hu/utmutato/formatumfuresz-aluminium-vs-fa` | `/hu/utmutato/formatizalo-furesz-aluminium-vs-fa` |
| `/hu/faq` | `/hu/utmutato/tamogatas-faipari-2026` | `/hu/utmutato/tamogatasok-csehorszag-2026` |
| `/sk/faq` | `/sk/sprievodca/dotacie-drevoobrabanie-2026` | `/sk/sprievodca/dotacie-stroje-cz-2026` |

Ursache: `HUB_GUIDES[].slugByLang` in `src/data/hub/ratgeberFaqHub.ts` wird getrennt von
`SLUG_TRANSLATIONS` in `src/lib/slugs.ts` gepflegt und ist an fünf Stellen auseinandergelaufen.
Heute fällt das nicht auf, weil der Catch-all-Rewrite jeden dieser Links mit 200 beantwortet und
React clientseitig auf die Startsprache umlenkt. **Nach Phase 1.1 wären das fünf echte 404 auf
verlinkten Pfaden** — deshalb gehört der Fix in Phase 1, vor das Entfernen des Rewrites.

**`title` 75 / `description` 43 / `title-unique` 8** — Warnungen, keine Fehler. Marketing-Hoheit,
nichts davon wird ohne Rückfrage angefasst. Der Masterplan sieht das in Phase 5 vor, nach der Neumessung.

## Modus-Umstellung

Aktuell läuft der Test im **Report-Modus** (Exit 0). Umstellung auf `--fail` erfolgt gemäß Masterplan
Abschnitt 8, sobald Phase 1 und 2 durch sind. Bis dahin dokumentiert jeder Lauf den Fortschritt.
