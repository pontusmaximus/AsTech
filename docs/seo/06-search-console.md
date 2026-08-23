# Phase 6 — Search Console auf das nächste Level

**Branch:** `claude/seo-masterplan-asamer-eb0d37` · **Stand:** 21.08.2026

Ziel laut Masterplan: *„Weg von ‚gelegentlich reinschauen' hin zu ‚Regressionen fallen automatisch
auf, bevor sie Traffic kosten'."*

Teil 7.1 (der Audit selbst) ist in [`06-audit-baseline.md`](06-audit-baseline.md) beschrieben und
wurde als Erstes gebaut. Dieses Dokument behandelt die Anbindung an CI und die übrigen Punkte.

---

## 7.1 (Fortsetzung) — Einbindung in CI

Vorher gab es **keine** Automatisierung: kein `.github/`-Verzeichnis, kein Test-Skript, keine
Actions. Jetzt drei Workflows.

### `.github/workflows/seo-audit.yml`

| Auslöser | Was läuft | Gegen was |
|---|---|---|
| Pull Request | `generate:vercel --check`, `build`, `seo:404-safety --fail`, `seo:audit --fail`, `seo:i18n` | den frisch gebauten `dist/` |
| Vercel-Deployment fertig | `seo:audit --fail --base <preview-url>` | das Preview-Deployment des PR ¹ |
| täglich 05:30 UTC | `seo:audit --fail --base https://asamer.cz` | die Produktion |
| manuell | wie beim Pull Request | |

¹ Braucht `VERCEL_AUTOMATION_BYPASS_SECRET`, solange Deployment Protection aktiv ist — siehe unten.

Der PR-Lauf braucht **kein Deployment und keine Secrets**. Der dist-Modus des Audits bildet die
Vercel-Auslieferungsreihenfolge nach (Redirects → Datei → Rewrite → 404) und kann deshalb schon
vor dem Deploy sagen, was live passieren wird.

**Der Preview-Lauf** hängt an Vercels `deployment_status`-Event und prüft, sobald das Preview
steht, genau die Dinge, die ein dist-Lauf nur nachbilden kann: echte Statuscodes, echte
Weiterleitungen, die tatsächlich entfernte Catch-all-Regel. Damit lässt sich Masterplan-Kriterium
1.1 (*„`/quatsch` gibt 404"*) vor dem Merge belegen statt erst danach.

**Aktuell läuft er allerdings nicht durch, und das ist wichtig zu wissen:** dieses Projekt hat
Vercel Deployment Protection aktiv. Das Preview antwortet auf `/sitemap.xml` mit einer **302** auf
den SSO-Login, und der Audit wird übersprungen.

> **Für Max, ein Handgriff:** Vercel → Projekt → Settings → Deployment Protection → *Protection
> Bypass for Automation* aktivieren, das erzeugte Secret als Repository-Secret
> `VERCEL_AUTOMATION_BYPASS_SECRET` hinterlegen. Danach prüft jeder PR sein eigenes Preview live.

Der Skip ist bewusst eine **Warnung**, keine stille Notiz. Ein grüner Haken, der nichts gemessen
hat, ist irreführender als gar keiner — und genau diesen Fehler hätte die erste Fassung gemacht:
der Job lief 25 Sekunden, meldete „success" und hatte keine einzige URL angefasst. Aus demselben
Grund bricht `scripts/seo-audit.ts` jetzt mit Exit 2 ab, wenn die Sitemap null URLs liefert.

Die www-Prüfung läuft **nur**, wenn der Audit gegen `asamer.cz` selbst geht: sie testet die
Vercel-Domain-Konfiguration, und ein PR darf nicht an einem Produktionsproblem scheitern, mit dem
er nichts zu tun hat.

Der Produktionslauf fängt, was auch ein Preview-Lauf nicht abdeckt: die Domain-Konfiguration und
die www-Weiterleitung. Bei Fehlschlag legt er ein Issue mit dem vollständigen Bericht an — und
**kommentiert ein bestehendes offenes Issue, statt jeden Tag ein neues anzulegen**, solange
derselbe Fehler besteht.

Zusätzlich zum Audit sind zwei Gates aus Phase 1 verankert:

- `npm run generate:vercel -- --check` — bricht ab, wenn `vercel.json` nicht mehr zu
  `config/redirects.manual.json` und den Slug-Definitionen passt. Ohne diese Prüfung könnte jemand
  einen Slug ändern und die zugehörigen Weiterleitungen stillschweigend verlieren.
- `npm run seo:404-safety -- --fail` — bricht ab, wenn eine routerseitig erreichbare Route weder
  eine Datei noch eine Weiterleitung hat. Das ist die laufende Absicherung für 1.1.

### Die `--allow`-Liste — ein Gate, das jetzt schon nützt

Ein Gate, das ab dem ersten Tag rot ist, wird abgeschaltet. Der Audit kennt deshalb
`--allow <prüfung,prüfung>`: diese Prüfungen erscheinen im Bericht, brechen den Lauf aber nicht ab.

```yaml
ALLOWED_CHECKS: language,body-words
```

- `language` — 65 HU-/SK-Seiten mit Fallback-Text. Wartet auf die Übersetzungen aus Phase 3.
- `body-words` — die fünf Kontaktseiten mit ~200 Wörtern, siehe
  [`02-rendering.md`](02-rendering.md).

**Jeder Eintrag ist eine Schuld.** Sind beide erledigt, wird `--allow` gestrichen und das Gate ist
vollständig. Bis dahin schützt es alles, was bereits repariert ist: Statuscodes, Canonicals,
Robots-Meta, H1, hreflang, JSON-LD, interne Links, Sitemap, 404, doppelte Präfixe, www.

### Nebenbei: die Build-Skripte werden jetzt typgeprüft

`tsconfig.node.json` schloss nur `vite.config.ts` ein — `scripts/` lief komplett ohne
Typprüfung, obwohl dort inzwischen der Prerenderer, der Sitemap-Generator, der
`vercel.json`-Generator und der Audit liegen. Neu: `tsconfig.scripts.json`, referenziert aus
`tsconfig.json`. `tsc -b` prüft die Skripte damit im Build mit. Läuft ohne Fehler durch.

---

## 7.3 Wöchentlicher Report aus der Search Console API

`scripts/gsc-report.ts` (`npm run seo:gsc`), automatisiert über
`.github/workflows/gsc-report.yml` (montags 06:00 UTC, Ergebnis als Commit).

Inhalt, wie in Masterplan 7.3 gefordert:

- Klicks, Impressionen, CTR, Position gesamt und je Sprachpräfix, jeweils gegen die Vorwoche
- neue Suchanfragen gegenüber der Vorwoche
- **die Arbeitsliste:** Suchanfragen mit ≥ 20 Impressionen und 0 Klicks
- Seiten, deren Position sich um mehr als 3 Plätze verändert hat
- Sitemap-Abgleich je Sprache

### Drei Entscheidungen, die Erklärung verdienen

**Ohne `googleapis`.** Für zwei API-Aufrufe wäre das eine 50-MB-Abhängigkeit. Das JWT wird mit
`node:crypto` signiert, der Rest ist `fetch`. Keine neue Abhängigkeit im Projekt.

**Der Zeitraum endet vorgestern, nicht gestern.** Die Search Console liefert die letzten zwei bis
drei Tage unvollständig nach. Ein Report bis gestern zeigt jede Woche einen Einbruch, den es nicht
gibt — und man gewöhnt sich an, den letzten Balken zu ignorieren, was den Report entwertet.

**Die Durchschnittsposition ist nach Impressionen gewichtet.** Ungewichtet zählte eine Suchanfrage
mit einer Impression genauso viel wie „lcv" mit 189. Bei der aktuellen Verteilung der Domain — ein
paar starke Begriffe, ein langer Schwanz mit je 1–3 Impressionen — verschiebt das den Wert deutlich.

### Was die API nicht kann, und was stattdessen im Report steht

Masterplan 7.3 verlangt die *„Indexierungsquote je Sprache, gegen die Sitemap gerechnet"*.
**Der Indexierungsbericht der Search Console hat keine öffentliche API.** Die Zahlen aus
„Gefunden – zurzeit nicht indexiert" & Co. sind über die API nicht erreichbar.

Der Report gibt deshalb aus, was sich automatisieren lässt: URLs mit Impressionen je Sprache gegen
Sitemap-URLs je Sprache — und benennt im Report selbst, dass das **nicht** die Indexierungsquote
ist. Eine Seite kann indexiert sein und in dieser Woche trotzdem keine Impression bekommen. Als
Trend taugt die Zahl, als Absolutwert nicht. Für die echte Quote bleibt der Blick in die Oberfläche
oder der Bulk Data Export.

### Geschützte Deployments allgemein

`scripts/seo-audit.ts` schickt Zusatz-Header, wenn sie gesetzt sind:

| Variable | Wirkung |
|---|---|
| `VERCEL_AUTOMATION_BYPASS_SECRET` | setzt `x-vercel-protection-bypass` und `x-vercel-set-bypass-cookie` |
| `SEO_AUDIT_HEADERS` | beliebige Header als JSON-Objekt, z. B. `{"Authorization":"Basic …"}` |

### Einrichtung — für Max

1. Google-Cloud-Projekt anlegen (falls nicht vorhanden), Search Console API aktivieren
2. Service-Account anlegen, JSON-Schlüssel herunterladen
3. Die E-Mail-Adresse des Service-Accounts in der Search Console unter Einstellungen → Nutzer und
   Berechtigungen als **eingeschränkter Nutzer** hinzufügen — mehr Rechte braucht der Report nicht
4. Den **Inhalt** der JSON-Datei als Repository-Secret `GSC_SERVICE_ACCOUNT_JSON` hinterlegen

Ohne das Secret bricht der Lauf mit einer Klartextmeldung ab — bewusst laut statt still, damit ein
vergessener Schlüssel nicht monatelang unbemerkt bleibt.

---

## 7.6 Lighthouse CI

`.lighthouserc.json` plus `.github/workflows/lighthouse.yml`, bei jedem Pull Request über fünf
repräsentative Seiten (Startseite, Marken-Hub, Produktdetail, Ratgeber, Gebrauchtmaschinen),
je drei Läufe.

Misst gegen den **statischen Build**, nicht gegen ein Deployment: damit ist der Lauf unabhängig von
Preview-URLs und Secrets und misst genau die Dateien, die der PR erzeugt.

Die Schwellen stehen bewusst auf `warn`, nicht auf `error`. Ein Gate, das niemand kalibriert hat,
wird beim ersten roten Lauf abgeschaltet — erst eine Weile messen, dann Schwellen setzen. Der
Masterplan begründet die Einrichtung ohnehin damit, sie zu haben, *bevor* Felddaten verfügbar sind.

---

## Was Claude Code hier nicht tun kann

### 7.2 Bulk Data Export nach BigQuery

Reine Konfiguration in der Search Console unter Einstellungen → Bulk Data Export, ein
Google-Cloud-Projekt vorausgesetzt. **Aufgabe für Max.** Nichts davon liegt im Repo.

Was es ermöglicht, was die Oberfläche nicht kann: Suchanfragen pro Seite **und** Land **und** Gerät
in einer Abfrage, die vollständige Long-Tail-Liste statt der Top 1.000, Positionsverläufe einzelner
URLs über Monate, und der Vorher-Nachher-Vergleich der Phasen dieses Plans auf Tagesbasis.
Bei diesem Datenvolumen bleiben die Kosten im Cent-Bereich.

Sobald er läuft, kann `scripts/gsc-report.ts` gegen BigQuery statt gegen die API abfragen und
bekommt damit die Zeilen, die das API-Limit heute abschneidet.

### 7.4 Validierungen anstoßen

Ein Klick pro Fehlerkategorie, den nur ein Mensch machen kann. Stand und Reihenfolge nach den
Phasen dieses Branches:

| Kategorie | Seiten | Anstoßen |
|---|---:|---|
| Durch „noindex"-Tag ausgeschlossen | 134 | **sofort** — der Fix ist längst live, es sind ausschließlich `/sk/`-URLs mit Crawls vom 17.–21.06. |
| Seite mit Weiterleitung | 113 | nach dem Deploy von Phase 1 |
| Umleitungsfehler | 1 | nach dem Deploy von Phase 1 |
| Gefunden – zurzeit nicht indexiert | 244 | nach dem Deploy von Phase 1 **und** 2 |
| Gecrawlt – zurzeit nicht indexiert | 49 | nach dem Deploy von Phase 2 |

„Alternative Seite mit richtigem kanonischen Tag" (112) bleibt unangetastet — bei fünf
Sprachversionen ist das der Normalzustand.

Für die 244 „Gefunden – zurzeit nicht indexiert" ist Phase 2 der eigentliche Hebel: jede Seite
liefert jetzt mindestens 25 interne Links im rohen HTML aus (vorher auf den meisten Seiten null),
und Google entdeckt sie damit über jede beliebige andere Seite.

### 7.5 Manuelle Indexierungsanträge

Nach dem Deploy von Phase 1 und 2, für die 20 wichtigsten Kampagnenseiten. Priorisierung nach
Masterplan: Barbaric-Lagersysteme CZ, dann die HU-Hubs, dann die Ratgeber.

**Hinweis, der im Masterplan schon steht und hier bekräftigt wird:** die Indexing API ist dafür
nicht vorgesehen — offiziell nur für `JobPosting` und `BroadcastEvent` freigegeben. IndexNow
unterstützt Google nicht, das ist ein Bing-Protokoll. Der legitime Weg zu schnellerer Indexierung
ist genau das, was in Phase 1 und 2 gebaut wurde: saubere Statuscodes, aussagekräftiges `lastmod`,
interne Verlinkung — plus die manuellen Anträge für einzelne wichtige Seiten.

---

## Befehlsübersicht

```bash
npm run build                    # Sitemap → Daten → tsc → Client → SSR → Prerender
npm run seo:audit                # SEO-Invarianten, Report-Modus
npm run seo:audit -- --fail --allow language,body-words   # Gate-Modus wie in CI
npm run seo:audit -- --base https://asamer.cz             # gegen die Produktion
npm run seo:404-safety           # 2.669 routerseitig erreichbare Pfade
npm run seo:i18n                 # Übersetzungslücken SK/HU
npm run seo:gsc                  # Search-Console-Wochenreport (braucht Secret)
npm run generate:vercel          # vercel.json neu erzeugen
npm run generate:vercel -- --check
```
