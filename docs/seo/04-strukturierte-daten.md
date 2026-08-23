# Phase 4 — Strukturierte Daten und Snippets

**Branch:** `claude/seo-masterplan-asamer-eb0d37` · **Stand:** 21.08.2026

Vorgezogen, weil diese Phase laut Masterplan Abschnitt 8 von keiner anderen abhängt — und weil sie
mit 465 von 659 Audit-Fehlern der mit Abstand größte Einzelposten war.

---

## 4.1 Was vorhanden war, was fehlte

Der Befund des Masterplans hat sich vollständig bestätigt. Der Audit hat ihn beziffert:

| | vor Phase 4 | nach Phase 4 |
|---|---:|---:|
| `json-ld`-Fehler über 605 URLs | **465** | **0** |

Die 465 waren fast ausschließlich *„Produktseite ohne Product-Schema"*. `productSchema()` existierte
in `src/seo/structuredData.ts` bereits und war vollständig — es wurde nur an einer einzigen Stelle
aufgerufen: für Gebrauchtmaschinen, und dort auch nur, wenn ein Preis hinterlegt war. Die 465
Katalogseiten, also der eigentliche Bestand der Website, hatten keins.

---

## 4.2 Umsetzung

### Punkt 1 — `Product` auf allen Produktdetailseiten

Neues Modul `src/seo/productLd.ts`. Eine Quelle für den Prerenderer **und** die React-Seiten, damit
Googlebot ohne JavaScript und ein JS-ausführender Crawler dasselbe sehen. Ausgegebene Felder:

```json
{
  "@type": "Product",
  "name": "BARBARIC LCV Performance",
  "model": "LCV Performance",
  "description": "…",
  "brand":        { "@type": "Brand", "name": "BARBARIC" },
  "manufacturer": { "@type": "Organization", "name": "BARBARIC GmbH" },
  "category": "Podávací systémy",
  "sku": "lcv-performance",
  "image": ["…"],
  "itemCondition": "https://schema.org/NewCondition",
  "url": "https://asamer.cz/cz/barbaric/podavaci-systemy/lcv-performance"
}
```

Die Zuordnung Handelsmarke → Hersteller (`BRAND_MANUFACTURER`) stand vorher als Literal im
Prerenderer und ist jetzt eine benannte Konstante, die beide Seiten benutzen.

Der Prerenderer gibt das Schema **vor** dem SEO-Content-Block aus. Das ist Absicht: so bekommen auch
die 35 Gannomat-Produkte ein `Product`-Schema, für die noch kein `ProductSeoContent` existiert.

Der Audit prüft das jetzt dauerhaft: jede URL, die auf `/{marke}/{kategorie}/{modell}` passt, muss
`Product` **und** `BreadcrumbList` liefern.

### Ohne `offers` — und warum das die richtige Entscheidung ist

Der Masterplan lässt zwei Wege offen: *„Wenn keine Preise veröffentlicht werden, `Offer` mit
`availability` und `priceCurrency` ohne `price` — oder `Offer` ganz weglassen. Erfinde keine Preise."*

Gewählt: **weglassen**. Grund: Google verlangt in einem `Offer` entweder `price` oder
`priceSpecification`. Ein `Offer` ohne beides ist im Rich Results Test ein **Fehler**, nicht bloß
eine Lücke — die erste Variante wäre also schlechter als gar kein `Offer`.

**Konsequenz, die offen benannt gehört:** Google wird für diese Seiten weiterhin das fehlende Feld
`offers` als **Warnung** melden, und ohne `offers` entsteht kein Produkt-Rich-Result mit Preisangabe.
Das Akzeptanzkriterium *„Keine Warnung ‚fehlendes Feld' in der Search Console"* ist damit ohne
veröffentlichte Preise nicht erreichbar. Das ist keine technische Frage mehr, sondern eine
Vertriebsentscheidung:

> **Für Max:** Sollen Listenpreise oder Preisspannen veröffentlicht werden? Wenn ja, wird `offers`
> in `catalogProductSchema()` ergänzt und die Warnung verschwindet. Wenn nein, bleibt sie bestehen —
> das ist bei Investitionsgütern der Normalfall und kostet keine Sichtbarkeit, nur das Preis-Snippet.

### Punkt 2 — `sameAs` und Entitätssignale

`sameAs` steht jetzt in `config/organization-profiles.json` statt im Code. Eine geprüfte URL lässt
sich damit ohne Code-Änderung nachtragen, und die Datei dokumentiert, welche noch fehlen.

**Nicht ergänzt wurden URLs, die ich nicht verifizieren konnte.** Der Zugriff auf `ares.gov.cz` ist
aus dieser Umgebung durch den Netzwerk-Proxy blockiert, die Händlerprofile der Hersteller ließen
sich ebenfalls nicht prüfen. Eine geratene URL in `sameAs` ist schädlicher als ein fehlender
Eintrag: Google nutzt das Feld zur Entitätszuordnung, und ein toter Link stützt sie nicht.

Offen, in der Config-Datei als Liste hinterlegt:

- Tschechisches Handelsregister (justice.cz bzw. ARES), IČO 60699761
- Österreichisches Firmenbuch, FN 481620 s, Landesgericht Wels
- Händlerprofile bei OTT, Mayer, BARBARIC, Gannomat, IMA Schelling
- Google-Unternehmensprofil des CZ-Standorts, sobald angelegt

**Was stattdessen ergänzt wurde und sofort wirkt:** die Register-Identifikatoren aus dem eigenen
Impressum (`src/pages/ImprintPage.tsx`) — nachprüfbare Daten aus dem Repo, nicht recherchiert:

| Entität | Felder |
|---|---|
| `Organization` (Asamer Technologie GmbH, AT) | `vatID: ATU72811406`, `taxID`, `identifier` FN 481620 s / Landesgericht Wels, `address` Lambach |
| `LocalBusiness` Brno (ASAMER spol. s r.o.) | `legalName`, `vatID: CZ60699761`, `taxID: 60699761`, `identifier` IČO + Krajský soud v Brně, oddíl C, vložka 14536 |

Das zahlt direkt auf den Befund aus 4.3 ein. Die Suche nach „asamer" bringt 674 Impressionen bei
9,6 % CTR auf Position 4,4, während „asamer technologie gmbh" auf 2,9 mit 48 % CTR steht — der
eigene Name ist von anderen Asamer-Unternehmen belegt. Eindeutige Register-IDs sind das stärkste
maschinenlesbare Signal zur Entitätsunterscheidung, das eine Website von sich aus setzen kann.

### Punkt 3 — `Article` auf den Ratgeberseiten

Alle sechs Ratgeber tragen jetzt zusätzlich zur bestehenden `FAQPage` ein `Article`-Schema mit
`headline`, `description`, `mainEntityOfPage`, `inLanguage`, `author`, `publisher`, `image` und
`dateModified`.

`author` und `publisher` sind als **vollständige** `Organization`-Objekte ausgeschrieben, nicht als
reine `@id`-Referenz. Das `Organization`-Schema steht nur auf Start- und Kontaktseite im Head; auf
einer Ratgeberseite liefe eine bloße Referenz ins Leere und Google meldete ein fehlendes
`author.name`. Die `@id` bleibt für die Graph-Verknüpfung erhalten.

Eingehängt zentral in `src/seo/SeoHead.tsx` und in `scripts/prerender.ts` — nicht in den sechs
Seitenkomponenten einzeln, damit keine vergessen wird.

### Die Datumsfrage — und warum `datePublished` meist fehlt

`datePublished` und `dateModified` kommen aus der Git-Historie der Seitenkomponenten, generiert nach
`src/seo/generated/contentDates.ts` (Skript `scripts/generate-content-dates.ts`, läuft im Build).

`dateModified` ist für alle 21 Routen belastbar. `datePublished` steht nur bei **einer** Route —
`guideVacuumLifter`, angelegt am 22.06.2026. Der Grund ist wichtig genug, um ihn hier festzuhalten:

Dieses Repo ist ein **flacher Klon**. `git log --reverse` liefert für jede Datei, die schon vor der
Historiengrenze existierte, genau das Datum dieser Grenze — hier der 24.04.2026. Ein
`datePublished` daraus wäre für die meisten Seiten schlicht falsch. Das Skript erkennt den Fall
(Vergleich mit dem ältesten verfügbaren Commit) und **lässt das Feld dann weg**, statt ein Datum zu
behaupten. Ein fehlendes optionales Feld kostet nichts; ein falsches Veröffentlichungsdatum in
einem Article-Schema ist ein Fehler, den man später mühsam korrigiert.

> **Für Max:** Ein einmaliges `npm run generate:dates` in einem Klon mit vollständiger Historie
> füllt alle `datePublished` korrekt auf. Die erzeugte Datei muss dann mitcommittet werden.

### Punkt 4 — Validierung

Der Rich Results Test ist ein Google-Dienst und aus dieser Umgebung nicht erreichbar. Ersatzweise
prüft der Audit alle 605 Seiten offline:

- jeder JSON-LD-Block ist parsebar (`JSON.parse`)
- Produktseiten tragen `Product` **und** `BreadcrumbList`
- Sprachstartseiten tragen `Organization` **und** `WebSite`
- Ratgeberseiten tragen `Article`

Ergebnis: **0 Fehler**. Der Rich Results Test bleibt als manueller Schritt für je eine Produkt-,
Ratgeber- und Startseite pro Sprache offen — siehe Akzeptanzkriterien.

---

## 4.4 Akzeptanzkriterien

- [x] `Product`-Schema auf allen Produktdetailseiten, ohne erfundene Preise
- [x] `Article` auf allen Ratgeberseiten, `FAQPage` bleibt daneben bestehen
- [x] `sameAs` wartbar ausgelagert, Register-IDs als Entitätssignal ergänzt
- [x] JSON-LD aller 605 Seiten parsebar, erwarteter `@type` je Seitentyp — als Audit-Prüfung verankert
- [ ] **Rich Results Test** für je eine Produkt-, Ratgeber- und Startseite pro Sprache — für Max,
      nach dem Deploy
- [ ] **Search Console → Produkt-Snippets** meldet nach zwei Wochen gültige Elemente — für Max
- [ ] **Keine Warnung „fehlendes Feld"** — ohne veröffentlichte Preise nicht erreichbar, siehe oben.
      Entscheidung liegt bei Max.

## Für Max

- Entscheidung: Preise veröffentlichen (dann `offers`) oder die `offers`-Warnung akzeptieren?
- Geprüfte URLs für `config/organization-profiles.json` liefern — Handelsregister CZ und AT,
  Händlerprofile der fünf Hersteller
- Google-Unternehmensprofil für den CZ-Standort anlegen und verifizieren (Masterplan 4.3)
- Einmalig `npm run generate:dates` in einem Klon mit voller Historie und das Ergebnis committen
