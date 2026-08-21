# SEO-Masterplan asamer.cz — Umsetzung

Arbeitsstand zur Umsetzung des SEO-Masterplans vom 21.08.2026.
Property `sc-domain:asamer.cz` · Branch `claude/seo-masterplan-asamer-eb0d37`

## Dokumente

| Datei | Inhalt |
|---|---|
| [`00-bestandsaufnahme.md`](00-bestandsaufnahme.md) | Repo-Diagnose nach Masterplan 0.2. Beantwortet die sieben Fragen und korrigiert zwei Annahmen des Plans. |
| [`01-crawling-fundament.md`](01-crawling-fundament.md) | Phase 1 — 404 statt 200, generierte Weiterleitungen, doppelte Sprachpräfixe, www, echtes `lastmod`. |
| [`02-rendering.md`](02-rendering.md) | Phase 2 — Umstellung des Prerenderings auf echtes SSR. |
| [`03-sprachversionen.md`](03-sprachversionen.md) | Phase 3 — Ursache des HU/SK-Fallbacks, Messapparat, Übergabe an Marketing. |
| [`04-strukturierte-daten.md`](04-strukturierte-daten.md) | Phase 4 — `Product`, `Article`, Entitätssignale. |
| [`05-inhalt.md`](05-inhalt.md) | Phase 5 — Analyse und Cluster-Messung; Texte bleiben bei Marketing. |
| [`06-audit-baseline.md`](06-audit-baseline.md) | Phase 6.1 — der Audit-Test und die Baseline vor jeder Änderung. |
| [`06-search-console.md`](06-search-console.md) | Phase 6 — CI-Gates, Wochenreport, Lighthouse, offene Search-Console-Aufgaben. |
| [`i18n-luecken.md`](i18n-luecken.md) | Übersetzungsvorlage SK/HU, erzeugt von `npm run seo:i18n`. |
| [`reports/`](reports/) | Audit-Berichte je Phase, 404-Sicherheitsnachweis, später die Search-Console-Wochenberichte. |

## Wirkung auf den Audit

Über 605 Sitemap-URLs, gemessen mit `npm run seo:audit`:

| Prüfung | Baseline | Phase 1 | Phase 4 | Phase 2 |
|---|---:|---:|---:|---:|
| `json-ld` | 465 | 465 | **0** | 0 |
| `body-words` | 145 | 145 | 145 | **5** |
| `language` | 39 | 39 | 39 | 65 ¹ |
| `h1` | 0 | 0 | 0 | 0 ² |
| `soft-404` | 1 | **0** | 0 | 0 |
| `doppeltes-praefix` | 3 | **0** | 0 | 0 |
| `internal-link` | 5 | **0** | 0 | 0 |
| `sitemap-lastmod` | 1 | **0** | 0 | 0 |
| **Fehler gesamt** | **659** | 649 | 184 | **70** |

¹ Kein Rückschritt, sondern ein Messeffekt: die Sprachprüfung urteilt erst ab 80 Wörtern
Fließtext. Vorher lagen die HU-/SK-Seiten mit 24–30 Wörtern unter dieser Schwelle und konnten gar
nicht auffallen. Erklärung in [`02-rendering.md`](02-rendering.md).

² 15 Seiten mit dreifacher `<h1>` wurden durch die SSR-Umstellung aufgedeckt und behoben.

Drei weitere Defekte hat der erste Lighthouse-Lauf sichtbar gemacht — doppelte Head-Tags nach dem
Hydrieren, 24 % Entwickler-Metadaten in jeder ausgelieferten Seite, und eine Lighthouse-Konfiguration,
die die 404-Seite statt der echten Seiten gemessen hat. Alle behoben, Einzelheiten im Nachtrag von
[`02-rendering.md`](02-rendering.md). Lighthouse-SEO-Score auf `/cz`: **1,00**.

Die verbleibenden 70 Fehler sind 65 × `language` (wartet auf die Übersetzungen aus Phase 3) und
5 × `body-words` (Kontaktseiten mit ~200 Wörtern — eine bewusste Entscheidung, siehe
[`02-rendering.md`](02-rendering.md)).

## Befehle

```bash
npm run build                    # Sitemap → Daten → tsc → Client → SSR → Prerender
npm run seo:audit                # SEO-Invarianten, Report-Modus
npm run seo:audit -- --fail --allow language,body-words     # Gate-Modus wie in CI
npm run seo:audit -- --base https://asamer.cz               # gegen die Produktion oder ein Preview
npm run seo:404-safety           # 2.669 routerseitig erreichbare Pfade, 0 Lücken
npm run seo:i18n                 # Übersetzungslücken SK/HU
npm run seo:gsc                  # Search-Console-Wochenreport (braucht Service-Account)
npm run generate:vercel          # vercel.json aus config/redirects.manual.json + Slug-Daten
```

## Offene Aufgaben für Max

Gesammelt aus allen Phasen — nichts davon lässt sich aus dem Repo erledigen.

**Vercel**
- *Protection Bypass for Automation* aktivieren und das Secret als
  `VERCEL_AUTOMATION_BYPASS_SECRET` im Repository hinterlegen — sonst überspringt der
  Preview-Audit jeden PR, weil Deployment Protection mit 302 antwortet

**Search Console**
- Sitemap `https://www.asamer.cz/sitemap.xml` entfernen
- „Fehlerbehebung überprüfen" je Kategorie anstoßen — die 134 noindex-Seiten **sofort**, der Rest
  nach dem Deploy ([`06-search-console.md`](06-search-console.md))
- Service-Account anlegen und als Nutzer hinzufügen, Secret `GSC_SERVICE_ACCOUNT_JSON` setzen
- Bulk Data Export nach BigQuery einrichten
- Indexierungsanträge für die 20 wichtigsten Kampagnenseiten
- Exporte `Seiten.csv` und die beiden Indexierungs-Kategorien bereitstellen — dann wird 1.3 vollständig

**Inhalt**
- Übersetzungen HU und SK beauftragen ([`i18n-luecken.md`](i18n-luecken.md)) — 1.371
  Seitentext-Schlüssel, 867 Datenmodul-Einträge
- Fachbegriffe für die 14 Produkte mit deutscher Bezeichnung, in allen fünf Sprachen
  ([`03-sprachversionen.md`](03-sprachversionen.md))
- Entscheidung: Preise veröffentlichen (dann `offers` im Product-Schema) oder die
  `offers`-Warnung akzeptieren?
- Entscheidung: Kontaktseiten ausbauen oder bei 200 Wörtern belassen?

**Extern**
- Google-Unternehmensprofil für den CZ-Standort anlegen und verifizieren
- Geprüfte URLs für `config/organization-profiles.json` (Handelsregister CZ und AT,
  Händlerprofile der fünf Hersteller)
- **Händler-Links bei OTT, Mayer, Barbaric, Gannomat und IMA Schelling anfragen** — der einzige
  Punkt im gesamten Masterplan, den keine technische Maßnahme ersetzt
