# Phase 5 — Inhaltliche Hebel

**Branch:** `claude/seo-masterplan-asamer-eb0d37` · **Stand:** 21.08.2026

Der Masterplan stellt diese Phase unter eine klare Arbeitsteilung: *„Diese Phase ist
Marketing-Arbeit. Claude Code liefert die Analyse und die technische Umsetzung, nicht die Texte."*
Und für 6.1 setzt er eine ausdrückliche Reihenfolge: *„Miss den Effekt von Phase 2 auf diesen
Cluster, bevor du weitere Arbeit hineinsteckst."*

Beides ist hier eingehalten. Was gebaut wurde, ist der **Messapparat** — und die Feststellung, was
Phase 2 und 4 bereits geliefert haben.

---

## Was Phase 2 an dieser Phase schon erledigt hat

### 6.1 Der Lagerautomatisierungs-Cluster

28 Suchanfragen, 972 Impressionen, **null Klicks**. Die beiden zuständigen Seiten existierten und
rankten — sie wurden Google nur praktisch leer ausgeliefert:

| Seite | Impressionen | Position | Wörter vorher | Wörter nachher |
|---|---:|---:|---:|---:|
| `/cz/pruvodce/automatizace-skladu` | 479 | 10,3 | **24** | **597** |
| `/cz/barbaric/podavaci-systemy/lcv-performance` | 210 | 9,8 | 323 | 553 |

Die Ratgeberseite hatte 24 Wörter im ausgelieferten HTML und null `<h2>`. Eine Seite, die auf
Position 10 für einen Begriff mit 151 Impressionen im Monat rankt und Google nichts liefert,
woraus sich ein Snippet bauen ließe, bekommt keine Klicks — unabhängig davon, wie gut der Inhalt
im Browser ist.

Das ist behoben. Ob es reicht, entscheiden die nächsten Wochen, nicht eine Vermutung.

### 6.2 Null Klicks bei guter Position

Acht Suchanfragen auf Position 3,6 bis 7,6 mit zusammen 161 Impressionen und null Klicks.
Der Masterplan ordnet das richtig ein: *„Bei Position 3 bis 6 und null Klicks ist die Ursache fast
immer Title oder Description."* Zwei Dinge, die seither passiert sind:

- **Phase 2** — die Seiten liefern jetzt Inhalt aus, aus dem Google ein Snippet bauen kann,
  statt nur Titel und H1.
- **Phase 4** — alle 465 Katalog-Produktseiten tragen jetzt ein `Product`-Schema, die Ratgeber
  ein `Article`-Schema. Beides verändert, wie Google das Snippet zusammensetzt.

Der Masterplan sagt für diesen Punkt: *„Nach Phase 2 und 4 neu messen — dann sollten die Snippets
automatisch besser werden. Was dann noch übrig bleibt, gezielt umschreiben."* Genau dort stehen wir.

### 6.3 Ungarn

Blockiert, und zwar in der Reihenfolge, die der Masterplan vorgibt: *„Voraussetzung ist deshalb
Phase 3 plus Phase 2, in dieser Reihenfolge. Erst übersetzen, dann prerendern."*

Phase 2 ist fertig, Phase 3 nicht. Der aktuelle Zustand ist damit **genau der, vor dem der
Masterplan warnt**: die HU-Seiten liefern jetzt statisches HTML aus — mit englischem Text unter
ungarischem `hreflang`. 15 HU-Seiten sind davon betroffen, gemessen vom Audit.

Das ist keine Verschlechterung — dieselben Seiten haben denselben englischen Text schon immer im
Browser angezeigt, und die Wörterbücher hatten schon vorher 5 % Abdeckung. Aber es ist jetzt für
Google sichtbar, und damit zählt es. **Die HU-Übersetzungen aus Phase 3 sind deshalb der nächste
Schritt, nicht die ungarische Keyword-Recherche.**

### 6.4 Das Ratgeberformat

`/cz/pruvodce/pur-vs-eva` ist mit 553 Impressionen und 24 Klicks die stärkste Nicht-Startseite der
gesamten Domain — ein einzelner Ratgeberartikel schlägt sämtliche Produktseiten. Der Befund steht,
und er ist das stärkste inhaltliche Argument im ganzen Plan.

Bemerkenswert dabei: `/cz/pruvodce/vyber-olepovacky-hran` war einer der wenigen Ratgeber, für die
der alte Prerenderer einen Body-Builder hatte. Die anderen fünf hatten keinen. Ob das Format so gut
ist oder ob es nur der einzige Ratgeber war, den Google vollständig sehen konnte, lässt sich jetzt
zum ersten Mal beantworten — alle sechs sind ab sofort gleich sichtbar.

---

## Was gebaut wurde: die Messung

`config/keyword-cluster.json` definiert vier Cluster, `scripts/gsc-report.ts` weist sie
wöchentlich aus — Impressionen, Klicks und Position je Cluster, Woche gegen Vorwoche, plus die
Einzeltreffer.

| Cluster | Ausgangswert (3 Monate) | Wofür er steht |
|---|---:|---|
| Lagerautomatisierung Tschechien | 600 Impr. / 0 Klicks | der größte ungenutzte Hebel der Domain |
| Null Klicks trotz guter Position | 161 Impr. / 0 Klicks | Snippet-Problem, kein Ranking-Problem |
| Finanzierung Tschechien | 58 Impr. / 0 Klicks | brachliegender Cluster für einen weiteren Ratgeber |
| Ungarische Kategoriebegriffe | 3 Impr. / 0 Klicks | der Zielzustand nach Phase 3 |

Die Cluster fangen exakte Suchanfragen **und** Präfixe ab (`automatizace sklad`, `élzár`, …), damit
Varianten aus dem Long Tail mitgezählt werden, statt still durchzufallen.

Die Ausgangswerte stammen aus dem GSC-Zeitraum 19.05.–18.08.2026 und dienen der Einordnung. Der
Wochenreport vergleicht **Woche gegen Vorwoche** — drei Monate und sieben Tage sind nicht
vergleichbar, und ein Report, der so tut, führt in die Irre.

---

## Was bewusst nicht gemacht wurde

**Keine Textänderungen.** Masterplan 0.3: *„Keine Änderung an Texten ohne Rückfrage, außer sie steht
ausdrücklich in diesem Dokument. Inhalte sind Marketing-Hoheit."* Für Phase 5 steht keine einzige
konkrete Textänderung im Dokument — es stehen Empfehlungen.

**Keine Titel- und Description-Optimierung.** Der Audit meldet 75 Titel außerhalb von 30–65 Zeichen,
43 Descriptions außerhalb von 70–165 und 8 doppelt vergebene Titel. Alle als **Warnung**, nicht als
Fehler. Das ist die Arbeitsliste für 6.2 — aber erst nach der Neumessung, wie der Masterplan sagt,
und dann als Marketing-Arbeit.

**Kein Ausbau der Ratgeberseite zur Hub-Seite.** Masterplan 6.1 schlägt vor, die
Lagerautomatisierungs-Seite zur Hub-Seite auszubauen, die CSF, LCV und RTS bündelt — aber
ausdrücklich mit „Danach", nach der Messung. Der begleitende Zweck (interne Verlinkung für die 244
nicht gecrawlten Seiten) ist durch Phase 2 ohnehin schon erreicht: jede Seite liefert jetzt
mindestens 25 interne Links im rohen HTML aus, vorher waren es auf den meisten null.

---

## Nächste Schritte, in dieser Reihenfolge

1. **Deployen.** Phase 1, 2, 4 und 6 wirken erst live.
2. **Search-Console-Validierungen anstoßen** (Masterplan 7.4) — die 134 noindex-Seiten sofort,
   der Rest nach dem Deploy.
3. **Service-Account einrichten**, damit der Wochenreport läuft (Masterplan 7.3, Anleitung in
   [`06-search-console.md`](06-search-console.md)).
4. **Zwei bis vier Wochen messen.** Der Cluster-Abschnitt des Wochenreports beantwortet die Frage,
   die der Masterplan stellt: hat Phase 2 den Lagerautomatisierungs-Cluster in Klicks verwandelt?
5. **Parallel: HU- und SK-Übersetzungen** (Phase 3). Sie blockieren 6.3 vollständig und sind
   unabhängig von der Messung.
6. **Erst dann** inhaltlich nachlegen: Snippet-Texte für die Null-Klick-Suchanfragen, der
   Leasing-Ratgeber, der Lagerautomatisierungs-Hub, die ungarische Keyword-Recherche.

## Für Max

- Nach zwei bis vier Wochen Messung entscheiden, wo inhaltlich nachgelegt wird
- Die Empfehlung aus 6.4 bleibt bestehen: zwei bis drei weitere Ratgeber im Format von
  `pur-vs-eva` (Leasing vs. Kauf, Kantenanleimmaschine auswählen, Lagerautomatisierung ab welcher
  Betriebsgröße), jeweils in allen fünf Sprachen, jeweils mit Verlinkung auf die passenden
  Produktseiten
- **Händler-Links bei OTT, Mayer, Barbaric, Gannomat und IMA Schelling anfragen.** Der Masterplan
  nennt das den einzigen Punkt im gesamten Dokument, den keine technische Maßnahme ersetzt — die
  Domain hat für 605 URLs schlicht zu wenig externe Autorität. Nichts in diesem Branch ändert daran
  etwas.
