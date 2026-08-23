# Phase 3 — Sprachversionen reparieren

**Branch:** `claude/seo-masterplan-asamer-eb0d37` · **Stand:** 21.08.2026

Ziel laut Masterplan: *„Jede Sprachversion enthält tatsächlich ihre Sprache."*
Diese Phase liefert die **Analyse, den Messapparat und die Übersetzungsvorlage**. Die Übersetzungen
selbst gehören laut Masterplan 3.3 Punkt 4 zu Marketing — Maschinenbau-Terminologie auf Ungarisch
und Slowakisch entsteht nicht nebenbei, und ein falscher Fachbegriff auf einer Produktseite ist
schädlicher als ein englischer.

---

## 3.1 / 3.2 Die Ursache — vollständig lokalisiert

Es gibt keine i18n-Bibliothek. Drei Mechanismen nebeneinander, zwei davon mit stillem Fallback:

| Mechanismus | Ort | Verhalten bei fehlendem Text |
|---|---|---|
| Typisiertes Wörterbuch | `src/i18n/index.ts` | **kann nicht lücken** — TypeScript erzwingt alle fünf Sprachen |
| Route-Metadaten | `src/seo/routes.ts` | **kann nicht lücken** — `createMeta({de,en,cz,sk,hu})` |
| Seitentext-Wörterbuch | `src/i18n/pageTextTranslations.ts` | **stiller Fallback** SK → CZ, HU → EN |
| `MultiLangText` in Datenmodulen | `src/data/**` | **stiller Fallback** `obj.sk ?? obj.cz`, `obj.hu ?? obj.en` |

```ts
// src/i18n/pageTextTranslations.ts
if (locale === 'sk') return pageSkTranslations[cz] ?? cz;   // SK → CZ
return pageHuTranslations[en] ?? en;                        // HU → EN

// scripts/prerender.ts — ml() / mlGuide() / mlText(), dreimal dieselbe Semantik
if (lang === 'sk') return obj.sk ?? obj.cz;
if (lang === 'hu') return obj.hu ?? obj.en;
```

Das erklärt beide Befunde exakt: Titel, Description, Navigation und Breadcrumbs sind korrekt (sie
kommen aus den typsicheren Quellen), der Fließtext fällt zurück (er kommt aus den beiden anderen).

Das Seitentext-Wörterbuch schlägt auf den **Quelltext selbst** an, nicht auf einen Schlüsselnamen.
Diese Bauart ist die eigentliche Ursache: ändert jemand ein Wort im deutschen Original, verliert der
Eintrag stillschweigend seine Wirkung. Genau das ist passiert — siehe unten.

---

## Der Messapparat

`scripts/i18n-coverage.ts` (`npm run seo:i18n`) prüft **beide** Ebenen und schreibt
[`i18n-luecken.md`](i18n-luecken.md) — 2.620 Zeilen, direkt als Übersetzungsvorlage verwendbar.

Ebene B liest die `tr(de, en, cz)`-Aufrufe über den **TypeScript-Parser** aus dem AST, nicht per
Regex. Bei 30-KB-Komponenten mit verschachtelten Anführungszeichen und Template-Literalen wäre eine
Regex nicht belastbar, und ein Report, dem man nicht trauen kann, ist schlimmer als keiner.

---

## Das Ergebnis — deutlich schlimmer als angenommen

```
Datenmodule  SK    62,5 %   (752 von 2.006 MultiLangText-Objekten ohne sk)
Datenmodule  HU    94,3 %   (115 von 2.006 ohne hu)
Seitentexte  SK     5,3 %   (682 von 720 Schlüsseln fehlen)
Seitentexte  HU     5,4 %   (689 von 728 Schlüsseln fehlen)
```

### Der wichtigste neue Befund: die Wörterbücher sind zu 85 % tot

Beide Wörterbücher haben 260 Einträge. Davon entsprechen

- **38 von 260** SK-Einträgen noch einem tatsächlich existierenden `tr()`-Aufruf
- **39 von 260** HU-Einträgen

Die übrigen ~222 Einträge je Sprache schlagen auf Quelltexte an, die es in den Seiten nicht mehr
gibt. Der Kommentar oben in der Datei sagt, woher sie stammen: *„Auto-generated from page-level
`tr(...)` strings for SK/HU locales."* Sie wurden einmal generiert und nie wieder — seither haben
sich die Seiten geändert, und mit jeder Textänderung ist ein weiterer Eintrag wirkungslos geworden,
ohne dass es auffallen konnte.

**Die tatsächliche Abdeckung der Seitentexte liegt also bei rund 5 %, nicht bei den 36 %, die die
reine Eintragszahl suggeriert.** Der Masterplan beschreibt die Symptome (`/hu/megoldasok`,
`/sk/servis`) korrekt — die Ursache reicht tiefer, als die Stichproben zeigen konnten.

### Zweiter neuer Befund: 11 Aufrufe sind grundsätzlich nicht übersetzbar

Elf `tr()`-Aufrufe setzen ihren Text zur Laufzeit zusammen:

```tsx
tr(`Die OTT ${product.name} ist eine ${categoryLabel} für …`, …)
```

Für sie kann es **keinen** Wörterbucheintrag geben — der Schlüssel entsteht erst im Browser und
trifft nie auf einen statischen Eintrag. Diese Stellen bleiben auf SK und HU dauerhaft im Fallback,
egal wie vollständig die Wörterbücher werden. Sie stehen alle auf den Produktdetailseiten und
betreffen den Beschreibungsabsatz und den Software-Integrationsblock. Vollständige Liste im Report.

Auflösbar nur durch einen Umbau auf Platzhalter (`{model}` statt Interpolation) — kein
Übersetzungsproblem, sondern ein Codeproblem. Als eigener Punkt notiert, nicht in dieser Phase gelöst.

---

## 3.3 Punkt 2 — fehlende Schlüssel sichtbar machen

`translatePageText` meldet jetzt jeden fehlenden Schlüssel **einmal** im Development-Build:

```
[i18n] Kein SK-Eintrag fuer "Montáž a uvedení do provozu" — es wird der tschechische
       Quelltext ausgeliefert. Vollstaendiger Report: npm run seo:i18n
```

Der Fallback bleibt bewusst weich. Eine Seite, die abstürzt, weil ein Wort fehlt, wäre schlimmer als
eine, die tschechisch statt slowakisch anzeigt — aber **still** darf er nicht mehr sein. Genau diese
Stille hat dazu geführt, dass 85 % der Einträge veralten konnten, ohne dass es jemand bemerkt hat.

Für den Build ist `npm run seo:i18n -- --fail` vorbereitet (Exit 1 bei Lücken). Scharf gestellt wird
er erst, wenn die Lücken geschlossen sind — sonst wäre der Build ab sofort rot und das Signal wertlos.

---

## 3.3 Punkt 4 — die Übergabe an Marketing

[`docs/seo/i18n-luecken.md`](i18n-luecken.md) ist die Vorlage. Aufbau:

**Ebene B — Seitentexte, nach Datei sortiert.** Der Schlüssel *ist* die Vorlage: SK wird über den
tschechischen, HU über den englischen Quelltext nachgeschlagen. Ein neuer Eintrag in
`src/i18n/pageTextTranslations.ts` besteht aus genau diesem Schlüssel plus Übersetzung.

**Ebene A — Datenmodule.** Pro Lücke der Pfad im Modul und der Text, der heute stattdessen
ausgeliefert wird.

**Priorisierung** — nicht alle 1.538 Lücken sind gleich viel wert. Die Reihenfolge, die dem
Masterplan folgt:

1. **SK-Seitentexte der Hub- und Ratgeberseiten** — `/sk/servis`, `/sk/riesenia` und die fünf
   Ratgeber. Das sind die Seiten mit Impressionen (`/sk/sprievodca/automatizacia-skladu`: 83
   Impressionen, 0 Klicks).
2. **HU-Seitentexte derselben Seiten** — Voraussetzung für Masterplan 6.3, den ungarischen
   Kategorie-Cluster.
3. **SK in den Datenmodulen** (752 Lücken) — betrifft die Produktdetailseiten, die laut Audit
   heute tschechisch ausgeliefert werden.
4. **HU in den Datenmodulen** (115 Lücken) — die kleinste Baustelle.

---

## 3.4 Deutsche Bezeichnungen auf Produktseiten

### Der Befund ist größer als beschrieben

Der Masterplan nennt 14 HU-Produktseiten mit deutscher H1. Die Prüfung bestätigt die Zahl — und
zeigt, dass sie **nicht nur HU betrifft**. `product.name` ist ein einzelner String ohne
Sprachvarianten. Dieselben deutschen Bezeichnungen stehen deshalb auch auf den CZ-, SK- und
EN-Seiten.

| Marke | Slug | Bezeichnung (in allen fünf Sprachen) |
|---|---|---|
| BARBARIC | `sonderanwendungen` | Sonderanwendungen |
| BARBARIC | `drx` | DRX Türenlagersystem |
| BARBARIC | `csf-industrial-turen` | CSF Industrial Türen |
| BARBARIC | `tmp` | TMP Türenmanipulator |
| BARBARIC | `duennplattentraverse` | Dünnplattentraverse |
| BARBARIC | `tuerentraverse` | Türentraverse |
| BARBARIC | `blech-plexiglas-traverse` | Traverse für Blech & Plexiglas |
| BARBARIC | `ssk-saeulenschwenkkran` | SSK Säulenschwenkkran |
| BARBARIC | `ssy-schienensystem` | SSY Leichtlauf-Schienensystem |
| BARBARIC | `fachwerksbruecke-2d` | 2D Alu-Fachwerksbrücke |
| BARBARIC | `fachwerksbruecke-3d` | 3D Alu-Fachwerksbrücke |
| Mayer | `winkelanlagen` | Winkelanlagen |
| Gannomat | `index-reihe-cnc` | Index Reihe CNC |
| Gannomat | `index-dw-reihe-cnc` | Index DW Reihe CNC |

Vier davon tragen das Deutsche zusätzlich im Slug: `sonderanwendungen`,
`ssk-saeulenschwenkkran`, `ssy-schienensystem`, `fachwerksbruecke-2d`/`-3d`,
`duennplattentraverse`, `tuerentraverse`, `csf-industrial-turen`.

### Warum das hier nicht umgesetzt wird

Bewusste Entscheidung, offen benannt:

1. **Es ist Terminologie, keine Mechanik.** „SSK Säulenschwenkkran" auf Ungarisch ist
   `SSK oszlopos forgódaru` — oder eben nicht, je nachdem, was in der ungarischen Holzbearbeitung
   üblich ist. Dieselbe Begründung, mit der Masterplan 3.3 Punkt 4 die Übersetzungen an Marketing
   gibt, gilt hier eins zu eins. Ein falscher Fachbegriff auf einer Produktseite ist schlechter als
   ein deutscher, weil er auf ein Wort optimiert, nach dem niemand sucht.
2. **Die Slug-Änderungen ziehen weitere Arbeit nach sich.** Pro geändertem Slug × 5 Sprachen eine
   301-Regel. Das Fundament dafür steht seit Phase 1 (`scripts/generate-vercel-config.ts`), aber
   ohne die Zielslugs ist nichts zu generieren.
3. **Die Reihenfolge aus Masterplan Abschnitt 8 ist eingehalten** — 1.1 ist erledigt, die
   Slug-Änderung wäre jetzt sicher. Es fehlt ausschließlich die Terminologie.

### Was vorbereitet ist

Die Tabelle oben ist die vollständige Arbeitsliste. Sobald die Bezeichnungen vorliegen:

1. `product.name` um `nameByLang?: Partial<Record<Language, string>>` erweitern (Modellkürzel bleiben,
   nur die beschreibenden Wörter werden übersetzt — CSF, SSK, DRX, RWL, TMP, SSY unverändert)
2. Slugs anpassen, alte Slugs in `config/redirects.manual.json` eintragen
3. `npm run generate:vercel && npm run build && npm run seo:audit`

---

## 3.5 Akzeptanzkriterien

- [x] Ursache im i18n-Setup gefunden und benannt — beide Ebenen, alle fünf Fallback-Stellen
- [x] Fehlende Schlüssel sichtbar gemacht (Development-Warnung + `--fail`-Modus vorbereitet)
- [x] Lückenreport erzeugt → `docs/seo/i18n-luecken.md`
- [x] Lücken an Marketing übergeben statt selbst zu übersetzen — mit Priorisierung
- [ ] **i18n-Coverage-Report zeigt 100 % für hu und sk** — blockiert durch die Übersetzungen
- [ ] **Kein fehlender Schlüssel im Build-Log** — dito
- [ ] **Stichprobe `/hu/szerviz`, `/hu/megoldasok`, `/sk/servis`, `/sk/riesenia` enthält nur HU bzw. SK** — dito.
      Der Audit prüft das inzwischen automatisch (`language`), aktuell 39 Befunde.
- [ ] **Keine H1 auf einer `/hu/`-Seite enthält deutsche Wörter** — 14 Produkte, Terminologie fehlt

## Für Max

- Übersetzungen beauftragen. Vorlage: `docs/seo/i18n-luecken.md`, Priorisierung wie oben.
  Umfang: 1.371 Seitentext-Schlüssel und 867 Datenmodul-Einträge.
- Fachbegriffe für die 14 Produktbezeichnungen aus 3.4 — in **allen fünf** Sprachen, nicht nur HU.
- Entscheidung: Sollen die elf laufzeit-zusammengesetzten `tr()`-Aufrufe auf Platzhalter umgebaut
  werden? Ohne das bleiben die Beschreibungsabsätze der Produktseiten auf SK und HU dauerhaft
  im Fallback.
