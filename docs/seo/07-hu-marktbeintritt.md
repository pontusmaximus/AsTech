# 07 — HU-Markteintritt: Keyword-Recherche und Umsetzungsplan

Analyse von `KeywordPlan_asamer_hu_2026.xlsx` (Stand 24.08.2026, sieben Blätter,
120 gecrawlte `/hu/`-URLs, 72 kuratierte Keywords, adversariale Gegenprüfung von
acht Kernbefunden). Die Datei liegt unverändert unter
[`keyword-research/KeywordPlan_asamer_hu_2026.xlsx`](keyword-research/KeywordPlan_asamer_hu_2026.xlsx).

Dieses Dokument prüft die Befunde gegen den tatsächlichen Code- und Repo-Stand —
nicht nur gegen sich selbst — und leitet daraus eine Reihenfolge ab. Wo die Datei
und der Code sich widersprechen oder die Datei den Umfang eines Problems
unterschätzt, steht das hier ausdrücklich.

## Wichtig vorab: was diese Datei ist und was nicht

Die Datei selbst sagt es im Blatt „0 Lies mich": **keine absoluten Suchvolumina**.
Ohne HU-Zugang zum Google Ads Keyword Planner ist die Spalte „Nachfrage" (A–D)
eine Rangordnung aus Suggest-Tiefe, keine Messung. Gegenprüfung im Keyword
Planner ist mit Frist **07.09.2026** im Projektplan vermerkt (Sofortmassnahme
#12). Bis dahin gilt für alles Folgende: die Reihenfolge der Maßnahmen ist
belastbar, die genaue Traffic-Erwartung nicht.

Die adversariale Gegenprüfung in der Datei hat bereits vier eigene Fehleinschätzungen
korrigiert (csap/tipli-Begründung, Schelling-Wettbewerbslage, Service-Cluster-Dichte,
Vakuumheber-Schreibweise) — das Dokument ist selbstkritisch entstanden, das erhöht
die Verlässlichkeit der verbleibenden Befunde.

## 1. Gegen den Code geprüft: was stimmt, was fehlt, was größer ist als gedacht

### 1.1 Die 9 fehlenden Kategorieseiten — bestätigt, und es ist kein HU-Problem

Sofortmassnahme #1 behauptet, alle Kategorie-URLs seien 404 (`/hu/gannomat/korpusz-presek`,
`/hu/ott/elzarogepek`, `/hu/barbaric/lapraktarozas`, `/hu/mayer/horizontalis-lapszabo-furesz`
u. a.) — Hub → Produktseite, keine Ebene dazwischen.

**Gegen `src/App.tsx` geprüft: korrekt, und zwar für alle vier Marken und alle
fünf Sprachen**, nicht nur Ungarisch:

```
<Route path="gannomat" element={<GannomatPage />} />
<Route path="gannomat/:category/:model" element={<LocalizedGannomatProductRoute />} />
```

Es gibt keine `gannomat/:category`-Route (ebenso für `ott`, `mayer`, `barbaric`).
Jede Kategorie-URL ohne Modell fällt auf den Catch-all. Das ist eine
**sitewide Architekturlücke**, die die HU-Recherche als erste systematisch
aufgedeckt hat, weil sie als einzige alle 120 URLs plus die theoretisch nötigen
durchgecrawlt hat.

**Der Fund, der die Datei nicht erwähnt, weil er außerhalb ihres Scopes lag:**
Die Inhalte für diese Seiten existieren bereits. `GannomatPage.tsx` rendert
`GANNOMAT_CATEGORY_SEO` aus `src/data/seo/gannomatSeoContent.ts` — ein
SEO-Textblock pro Kategorie, mehrsprachig, aktuell inline auf der Hub-Seite
untergebracht (`CategorySeoBlock`-Komponente). Dasselbe Muster existiert für
alle vier Marken (`ottSeoContent.ts`, `mayerSeoContent.ts`, `barbaricSeoContent.ts`).

Das ändert den Charakter der Aufgabe: **nicht neun Seiten neu texten, sondern
bestehende Bausteine auf eigene, prerenderbare Routen heben** — Route,
Seitenkomponente (Produktgrid gefiltert nach Kategorie + vorhandener SEO-Block),
eigener Title/H1/Description pro Kategorie, Eintrag in Sitemap und Prerender-Liste
(`SEO_ROUTES`). Der Aufwand sinkt dadurch von „hoch" auf „mittel", und der Nutzen
gilt für **alle fünf Sprachen gleichzeitig**, nicht nur HU — eine einzige
Implementierung hebt automatisch auch CZ/EN/DE/SK.

### 1.2 Der HU-Seitentext-Fallback ist zehnmal größer als die Datei zeigt

Sofortmassnahme #2 und #3 sprechen von „26 nicht-ungarische H1" und drei
Ratgeberseiten mit englischem Fließtext. Beides stimmt als Beispiel — aber es ist
nur die Spitze eines bereits vermessenen, viel größeren Problems.

`npm run seo:i18n` (aktueller Lauf, siehe [`i18n-luecken.md`](i18n-luecken.md)):

```
Seitentexte  HU     5,4 %  (689 von 728 fehlen)
```

**689 von 728 `tr()`-Aufrufen liefern auf Ungarisch englischen Text aus**, nicht
26. Ursache, verifiziert in `src/i18n/pageTextTranslations.ts`:

```ts
export const translatePageText = (locale: 'sk' | 'hu', en: string, cz: string): string => {
  ...
  const hit = pageHuTranslations[en];      // HU haengt an EN, nicht an CZ/DE
  if (hit === undefined) reportMiss('hu', en);
  return hit ?? en;                        // Fallback: rohes Englisch
};
```

Die H1-Beispiele aus der Datei (`OTT Edgebanding Machines`, `What is EVA?`) sind
also keine Einzelfälle, sondern die sichtbarsten von 689 fehlenden Einträgen in
genau diesem Wörterbuch. `pageHuTranslations` existiert bereits (als Gegenstück
zu `pageSkTranslations`, das für SK dieselbe Rolle spielt) — es ist nur zu 5,4 %
gefüllt.

**Das war bereits ein offener Punkt aus [`03-sprachversionen.md`](03-sprachversionen.md)**
(„Für Max: Übersetzungen beauftragen … Umfang: 1.371 Seitentext-Schlüssel und 867
Datenmodul-Einträge"). Diese Keyword-Datei liefert dafür keine Vollständigkeit,
aber etwas, das vorher fehlte: **die Fachterminologie** (Blatt „6 Terminologie",
24 Begriffe mit Beleg) und **fertige Formulierungen für die 21 wichtigsten Seiten**
(Blatt „4 Titles und Descriptions"). Das entsperrt einen Teil der Übersetzung,
nicht die gesamten 689 Strings.

### 1.3 Slug-Korrekturen — zwei Kategorien, ein Produkt, 14 Fremdsprachen-Slugs

Gegen `src/data/gannomatProducts.ts` geprüft:

| Kategorie (intern) | Aktueller `hu`-Slug | Befund | Zielslug laut Datei |
|---|---|---|---|
| `rowboring` | `soros-furo-gepek` | **Bestätigt fehlerhaft** — „soros fúró" liefert George Soros + Metallbau. Marktbegriff ist „sorozatfúró gép". | `sorozatfuro-gepek` |
| `boring` | `csap-furo-gepek` | Nicht falsch (csap/facsap ist belegtes Synonym), aber nicht der gesuchte Begriff. Zielbegriff „tiplifúró gép". | `tiplifuro-gepek` |

Beide Umbenennungen brauchen eine 301-Regel vom alten Slug — das Fundament dafür
steht seit Phase 1 in `scripts/generate-vercel-config.ts` /
`config/redirects.manual.json`, exakt das Muster, das `03-sprachversionen.md`
für die 14 deutschen Slugs bereits vorbereitet beschreibt.

**Eine Behauptung, die ich nicht bestätigen kann, ohne den Produkttext zu lesen:**
Sofortmassnahme 5b sagt, `/hu/gannomat/csap-furo-gepek/db-21-27-35` beschreibe im
eigenen Fließtext eine Reihenbohrmaschine und gehöre daher in `rowboring` statt
`boring`. Ich habe verifiziert, dass das Produkt `db-21-27-35` (und `-wa`) aktuell
unter `category: 'boring'` einsortiert ist — die inhaltliche Behauptung selbst ist
eine Prüfaufgabe für die Redaktion, keine automatisch auszuführende Verschiebung.

**14 deutsche Slugs (Sofortmassnahme #8)** — deckt sich mit der bereits in
`03-sprachversionen.md` dokumentierten Liste aus Phase 3, dort seit Wochen als
„fehlt nur die Terminologie" offen. Diese Datei liefert HU-Begriffe für einen Teil
davon; die Liste in 03 verlangt Begriffe in **allen fünf Sprachen**. HU-Erledigung
hier schließt also nicht automatisch den Punkt in 03 ab.

**Tippfehler, unabhängig von Nachfrage-Fragen, einfach falsch:**
`aluminium-manyag` statt `aluminium-muanyag` (fehlendes ű). Isoliert korrigierbar,
niedrigstes Risiko im ganzen Katalog.

### 1.4 Was die Datei bewusst NICHT empfiehlt

Wert liegt nicht nur in dem, was besetzt werden soll, sondern in den markierten
Fallen — Begriffe mit hoher Nachfrage, aber falscher Käuferabsicht:

- `élzárás` / `abs élzárás` / `élfólia` — Verbrauchsmaterial- und Zuschnittdienst-Suche
- `lapszabászat + Stadt` (30+ Varianten) — Zuschnitt-Dienstleistersuche, kein Maschinenkauf
- `táblafelosztó program` — Software, nicht Maschine
- `szabászgép` — Textilindustrie
- `kivetőpánt fúró` / `fatipli` — Werkzeug- bzw. Materialkauf, kein Maschinenkäufer
- `raktárautomatizálás` als Hauptziel — kollidiert mit Palettenlogistik-Anbietern (Jungheinrich, SSI Schäfer)

Diese Liste ist genauso wichtig wie die Zielbegriffe: Sie verhindert, dass Budget
oder Content auf Suchvolumen geht, das nie zu einem Käufer führt.

## 2. Was sofort und risikolos umsetzbar ist

Ohne Rückfrage, weil rein technisch bzw. objektiv falsch (kein Ermessen, keine
Terminologie-Entscheidung):

1. **Tippfehler `aluminium-manyag` → `aluminium-muanyag`**
2. **Tschechische Förderseite** `/hu/utmutato/tamogatasok-csehorszag-2026` — 301 auf
   eine passende HU-Seite (`/hu/finanszirozas`, sobald angelegt) oder Entfernung
3. **Produktseiten:** `Product`-Schema ergänzen (Sofortmassnahme #11) — Mechanik
   existiert bereits aus Phase 4 (`src/seo/productLd.ts`), reine Erweiterung

## 3. Was Terminologie-Entscheidung ist — Rückfrage nötig

Laut Projektregel „Keine Änderung an Texten ohne Rückfrage, außer sie steht
ausdrücklich in diesem Dokument. Inhalte sind Marketing-Hoheit." Diese
Keyword-Datei ist eine fundierte *Empfehlung*, kein Auftrag — sie wurde nicht von
Marketing/Max abgesegnet. Vor Umsetzung braucht es ein Ja zu:

- den zwei Kategorie-Slug-Umbenennungen (1.3)
- den 21 Title/Description-Vorschlägen (Blatt 4 — alle bereits fertig formuliert,
  reine Freigabe)
- den 24 Terminologie-Festlegungen (Blatt 6) als Grundlage für die HU-Übersetzung
- der Produkt-Fehlzuordnung db-21-27-35 (1.3, Prüfaufgabe)

## 4. Phasenplan

Reihenfolge nach Abhängigkeit, nicht nach Wirkung — Phase A blockiert nichts,
kann parallel zu B/C laufen.

### Phase A — Architektur (Entwicklung, sprachunabhängig)

9 Kategorieseiten pro Marke als eigene Route, aus bestehenden Bausteinen
(`*SeoContent.ts` + Produktgrid), in Prerender/Sitemap aufgenommen. Betrifft
alle 5 Sprachen. Sauber isoliert testbar mit dem bestehenden Audit
(`seo:404-safety`, `seo:audit`).

### Phase B — Slugs und Redirects (Entwicklung, nach Freigabe Abschnitt 3)

Zwei Kategorie-Slugs (1.3) + 14 deutsche Slugs, sobald Terminologie in allen
Sprachen steht. Ein Durchlauf `generate:vercel`, ein Durchlauf `seo:audit`.

### Phase C — HU-Seitentext (Übersetzung, größter Aufwand)

689 fehlende `pageHuTranslations`-Einträge. Diese Datei liefert die Terminologie
für die wichtigsten 14–20 P1/P2-Seiten vorab (Blatt 6) — der Rest bleibt
Fließarbeit nach `i18n-luecken.md`. Titles/Descriptions aus Blatt 4 sind
eigenständig einsetzbar, sobald freigegeben — sie hängen nicht an Phase A oder B.

### Phase D — Neue Ratgeberseiten (Redaktion, gewellt)

10 Content-Gaps in drei Wellen (Blatt 5). Welle 1 zuerst: PUR-vs-EVA-Vergleich
und Kaufberatung Élzárógép — beide auf bereits existierenden Ratgeberseiten
(`/hu/utmutato/pur-vs-eva`, `/hu/utmutato/elzarogep-valasztas`), also reine
Übersetzung+Ausbau, keine neue Route.

### Phase E — Service-Silo (Redaktion + Entwicklung, mit Vorbehalt)

Sofortmassnahme #9: `/hu/szerviz` plus vier Unterseiten. Die Datei selbst setzt
einen Vorbehalt — Wettbewerb dichter als angenommen (woodservice.hu 3 Treffer auf
Seite 1), „erst ranken lassen, wenn eine ungarische Reaktionszeit belegbar ist".
Das ist eine Geschäftsentscheidung (reale HU-Reaktionsfähigkeit im Service), keine
SEO-Frage — gehört vor Umsetzung zu Max.

## 5. Umsetzungsstand (24.08.2026)

Freigabe für Abschnitt 3 lag vor. Umgesetzt sind Phase A, Phase B, die
Titles/Descriptions und der terminologische Teil von Phase C.

### Erledigt

| Was | Ergebnis |
|---|---|
| **Phase A** — Kategorieseiten | 27 Kategorien × 5 Sprachen = **135 neue Seiten**. Route `<marke>/:category` für alle vier Marken, Inhalte aus den vorhandenen `*SeoContent.ts`. Sitemap 604 → 739. |
| **Phase B** — Slugs | 6 Kategorie-Slugs umbenannt, alle alten URLs mit 301 in **allen fünf** Sprachen. 514 → 575 Weiterleitungen. |
| Titles/Descriptions | 12 Seiten mit den recherchierten HU-Werten aus Blatt 4 (10 SEO-Routen + SSK/SSY). |
| Terminologie | 10 falsche HU-Einträge korrigiert, 8 ergänzt. HU-Seitentext-Abdeckung 5,4 % → 6,6 %. |
| Tschechische Förderseite | `/hu/utmutato/tamogatasok-csehorszag-2026` → 301 auf `/hu/finanszirozas`. Dafür kann eine Route jetzt Sprachen ausschließen (`excludeLangs`). |

### Akzeptanzkriterien

- [x] `npm run seo:404-safety -- --fail` — **3.284 Pfade, 0 Lücken** (615 neue Kategorie-Slug-Varianten)
- [x] `npm run seo:i18n` — HU-Seitentext-Abdeckung **5,4 % → 6,6 %**
- [x] Alle 301-Regeln aus Phase B im generierten `vercel.json` nachweisbar
- [ ] **`npm run seo:audit` — `language`-Fehler sinkt** — steigt stattdessen von 64 auf 87.
      Kein Rückschritt: die 135 neuen Seiten haben denselben Wörterbuch-Rückfall wie alle
      anderen. Der Nenner ist gewachsen, die Ursache unverändert.
- [ ] **Keine H1 auf einer `/hu/`-Seite enthält deutsche oder englische Wörter** — für die
      Kategorieseiten erfüllt (H1 = ungarische Kategoriebezeichnung), für die übrigen offen,
      solange die 683 Seitentext-Schlüssel fehlen.

### Zwei Befunde, die die Recherche nicht hatte

1. **Das HU-Wörterbuch sagt an mehreren Stellen das Falsche**, nicht nur nichts.
   `"Completely invisible joint"` stand als `"Teljesen láthatatlan ízület"` — `ízület` ist
   ein anatomisches Gelenk. `"OTT Edgebanders"` als `"OTT Élszalagok"` — das Kantenband,
   nicht die Maschine. Beides Spuren der einmaligen maschinellen Erzeugung. Zehn solcher
   Einträge korrigiert; die Datei trug außerdem einen `Auto-generated`-Kopf, obwohl kein
   Skript sie schreibt.

2. **40 Vorkommen von `lapszabó` in laufendem ungarischem Text**, 34 davon in
   `mayerProducts.ts`. Das Terminologieblatt nennt den Begriff DIY-konnotiert und schlägt
   `táblafelosztó` vor. **Nicht umgesetzt**: Ungarisch ist agglutinierend —
   `lapszabó fűrészekhez` braucht `táblafelosztó gépekhez`, nicht bloß einen Wortaustausch.
   Das gehört zu einem Muttersprachler, nicht in eine Regex.

### Nicht umgesetzt, bewusst

- **Phase C, der große Teil** — 683 fehlende HU-Seitentexte. Übersetzungsarbeit, keine Mechanik.
- **Phase D** — die 10 Ratgeberthemen aus Blatt 5. Redaktion.
- **Phase E** — Service-Silo. Die Recherche selbst setzt einen Vorbehalt (ungarische
  Reaktionszeit muss belegbar sein) — das ist eine Geschäftsentscheidung.
- **`gannomat/insertion`-Slug** — die Recherche nennt die Umbenennung ausdrücklich „optional"
  und empfiehlt stattdessen, Title und H1 auf `tipli` zu drehen.
- **`barbaric/labeling`** — Blatt 6 führt `címkenyomtatás` unter „vermeiden" (SERP zu 100 %
  Zebra-/Brother-Shops). Ein besserer Begriff steht dort nicht; das braucht eine Entscheidung.

## Für Max

- **Übersetzung beauftragen** — 683 HU-Seitentexte. Das ist jetzt der einzige Grund, warum
  die ungarischen Seiten noch englischen Fließtext zeigen. Vorlage: `i18n-luecken.md`,
  Terminologie: Blatt 6 der Recherche.
- **`lapszabó` in 40 Textstellen** (34 in `mayerProducts.ts`) — braucht einen ungarischen
  Muttersprachler, siehe oben.
- **Entscheidung Service-Silo** (Phase E): ungarische Reaktionszeit intern klären, bevor
  Redaktionsaufwand hineingeht.
- **Keyword-Planner-Gegenprüfung** bis 07.09.2026 (Sofortmassnahme #12) — diese Datei liefert
  Rang, nicht Volumen.
- **Terminologie für die 14 deutschen Slugs in allen fünf Sprachen** — HU ist mit dieser
  Datei abgedeckt, CZ/EN/DE/SK weiterhin offen (aus `03-sprachversionen.md`).
