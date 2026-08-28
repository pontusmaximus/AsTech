# i18n-Lücken — Übersetzungsvorlage für SK und HU

Erzeugt von `scripts/i18n-coverage.ts` (`npm run seo:i18n`). Nicht von Hand bearbeiten —
der Report wird bei jedem Lauf neu geschrieben.

## Wie die Lücken entstehen

Beide Übersetzungswege fallen bei fehlendem Text **still** auf eine andere Sprache zurück:

```ts
// src/i18n/pageTextTranslations.ts
if (locale === 'sk') return pageSkTranslations[cz] ?? cz;   // SK → CZ
return pageHuTranslations[en] ?? en;                        // HU → EN

// scripts/prerender.ts, ml() / mlGuide() / mlText()
if (lang === 'sk') return obj.sk ?? obj.cz;
if (lang === 'hu') return obj.hu ?? obj.en;
```

Ein slowakischer Leser versteht den tschechischen Text — deshalb fällt SK niemandem auf.
Für Google ist eine SK-Seite mit tschechischem Inhalt und `hreflang="sk"` dagegen ein
Widerspruch, der im günstigsten Fall ignoriert und im ungünstigsten als Duplikat gewertet wird.

## Abdeckung

| Ebene | Sprache | vorhanden | fehlt | Abdeckung |
|---|---|---:|---:|---:|
| A · Datenmodule (`MultiLangText`) | SK | 2006 | 0 | **100.0 %** |
| A · Datenmodule (`MultiLangText`) | HU | 1891 | 115 | **94.3 %** |
| B · Seitentexte (`tr()`) | SK | 735 | 0 | **100.0 %** |
| B · Seitentexte (`tr()`) | HU | 742 | 0 | **100.0 %** |

## Eigener Befund: `tr()`-Aufrufe mit dynamischem Text

11 `tr()`-Aufrufe setzen ihren Text zur Laufzeit zusammen (Template-Literale mit
`${…}`). Für sie kann es **grundsätzlich keinen** Wörterbucheintrag geben: der Schlüssel entsteht
erst im Browser und trifft nie auf einen statischen Eintrag. Diese Stellen bleiben auf SK und HU
dauerhaft im Fallback, egal wie vollständig die Wörterbücher werden.

| Datei | Zeile | Aufruf |
|---|---:|---|
| `src/pages/BarbaricProductPage.tsx` | 158 | `tr(`Anfrage Barbaric ${product.name}`, `Inquiry Barbaric ${product.name}`, `Poptávka Barbaric ${product.name}`)` |
| `src/pages/BarbaricProductPage.tsx` | 286 | `tr( `BARBARIC-Systeme wie das ${product.name} verfügen über offene Schnittstellen zu Maschinenherstell` |
| `src/pages/GannomatProductPage.tsx` | 59 | `tr(`Anfrage Gannomat ${product.name}`, `Inquiry Gannomat ${product.name}`, `Poptávka Gannomat ${product.name}`)` |
| `src/pages/GannomatProductPage.tsx` | 119 | `tr( `Gannomat ${product.name} ist eine ${categoryLabel}${product.category === 'insertion' ? ' – sie bo` |
| `src/pages/GannomatProductPage.tsx` | 181 | `tr( `Unser hauseigenes Software-Team verbindet Ihre Gannomat ${product.name} nahtlos mit Ihrem ERP-, M` |
| `src/pages/MayerProductPage.tsx` | 66 | `tr(`Anfrage Mayer ${product.name}`, `Inquiry Mayer ${product.name}`, `Poptávka Mayer ${product.name}`)` |
| `src/pages/MayerProductPage.tsx` | 133 | `tr( `Die Mayer ${product.name} ist eine ${categoryLabel} für ${product.materials.includes('aluminium')` |
| `src/pages/MayerProductPage.tsx` | 209 | `tr( `Unser hauseigenes Software-Team verbindet Ihre Mayer ${product.name} nahtlos mit Ihrem ERP-, MES-` |
| `src/pages/OttProductPage.tsx` | 91 | `tr(`Anfrage OTT ${product.name}`, `Inquiry OTT ${product.name}`, `Poptávka OTT ${product.name}`)` |
| `src/pages/OttProductPage.tsx` | 173 | `tr( `Die OTT ${product.name} ist eine ${categoryLabel} für ${audience.de}${product.usp?.[lang] ? ` – $` |
| `src/pages/OttProductPage.tsx` | 264 | `tr( `Unser Software-Team verbindet die ${product.name} via OPC-UA direkt mit Ihrem ERP/MES – keine` |

---

# Ebene B — Seitentexte je Datei

Der Schlüssel ist gleichzeitig die Übersetzungsvorlage: SK wird über den **tschechischen**,
HU über den **englischen** Quelltext nachgeschlagen. Ein neuer Eintrag in
`src/i18n/pageTextTranslations.ts` besteht aus genau diesem Schlüssel und der Übersetzung.

---

# Ebene A — Datenmodule

Hier fehlt der Schlüssel `sk` bzw. `hu` im `MultiLangText`-Objekt selbst. Der angezeigte Text
ist das, was heute stattdessen ausgeliefert wird — also die Vorlage.

## edgebanderGuide (49)

### HU — 49 fehlend

| Pfad im Modul | ausgelieferter Text |
|---|---|
| `lead` | Which edgebander to buy depends on your operation size, the materials processed and your target production volume. For small joineries up to 5 employees we reco … |
| `decisionCriteria[0].question` | 1. How big is your operation? |
| `decisionCriteria[0].body` | The first criterion is headcount and daily throughput. A small joinery (1–5 people) processes 20–80 workpieces per day, a mid-size operation (5–20 people) 80–30 … |
| `decisionCriteria[1].question` | 2. Which materials and edges will you process? |
| `decisionCriteria[1].body` | The second criterion is materials: chipboard, MDF, solid wood, plastic, aluminium. For standard ABS and PVC edges up to 3 mm in dry environments, EVA glue is su … |
| `decisionCriteria[2].question` | 3. What is your production volume? |
| `decisionCriteria[2].body` | The third criterion is the number of shifts and operating hours. Single-shift operation works with feed speeds of 18–20 m/min. Multi-shift production with 300+  … |
| `decisionCriteria[3].question` | 4. What is your budget and TCO? |
| `decisionCriteria[3].body` | The fourth criterion is total cost of ownership (TCO): purchase price, energy use, glue, maintenance, lifetime and resale value. OTT edgebanders typically last  … |
| `usedVsNew.heading` | Used vs new edgebander |
| `usedVsNew.body` | A used edgebander is a smart choice when it combines savings with quality. Vetted OTT used machines from a reputable source — with complete service history, tec … |
| `purVsEva.heading` | PUR or EVA glue? Quick comparison |
| `purVsEva.body` | The choice between PUR and EVA glue affects bond quality and durability. EVA is the thermoplastic standard: cheap, fast, suitable for dry interiors. PUR (polyur … |
| `service.heading` | Service and availability in CZ, SK and HU |
| `service.body` | Asamer has been the authorized OTT dealer for the Czech Republic, Slovakia and Hungary since 1991. Our scope: consulting, project planning, delivery, installati … |
| `faq[0].question` | Which edgebander for a small joinery? |
| `faq[0].answer` | For small joineries we recommend the OTT Pacific+ (5.7 m, 18 m/min) as a compact entry model or the OTT Tornado+ (6.2 m, 18–20 m/min) for greater flexibility wi … |
| `faq[1].question` | What is the difference between a PUR and an EVA edgebander? |
| `faq[1].answer` | EVA is a thermoplastic glue: fast, cheap, fine for standard edges in dry environments. PUR (polyurethane) makes a waterproof, heat-resistant bond — mandatory fo … |
| `faq[2].question` | Is it worth buying a used edgebander? |
| `faq[2].answer` | A used edgebander from a vetted source with technical inspection and service history can save 30–60 % over new. Key checks: complete history, spare-parts availa … |
| `faq[3].question` | How much does an edgebander cost? |
| `faq[3].answer` | The price of an edgebander depends on the model, configuration and equipment. Entry models (Pacific+) start in the low six-figure EUR range, professional models … |
| `faq[4].question` | How long does an edgebander installation take? |
| `faq[4].answer` | A standard OTT edgebander installation takes 2–5 working days, including commissioning and operator training. Industrial models with ERP integration and multipl … |
| `faq[5].question` | How long does an edgebander last? |
| `faq[5].answer` | With proper preventive maintenance OTT edgebanders last 15–25 years. Key drivers: glue quality, regular cleaning of the glue system, replacing worn tooling (cut … |
| `faq[6].question` | What is bluEdge featuring HyFuse and when do I need it? |
| `faq[6].answer` | bluEdge featuring HyFuse is a zero glue line technology: the edge's functional layer is activated by a hydrogen-oxygen flame and thermally bonded to the panel w … |
| `faq[7].question` | Can I integrate an edgebander with my ERP? |
| `faq[7].answer` | Yes. OTT machines run Beckhoff controllers with OPC-UA — the open standard for ERP/MES integration without vendor lock-in. Asamer has an in-house software team  … |
| `faq[8].question` | Which edges can an OTT edgebander process? |
| `faq[8].answer` | OTT edgebanders handle edges from 0.3 to 25 mm — ABS, PVC, melamine, paper edges, solid wood, aluminium. Maximum thickness depends on the model: Pacific+ and To … |
| `faq[9].question` | Do I need a return system for the edgebander? |
| `faq[9].answer` | A return system saves a second operator and lifts productivity significantly. For Pacific+ and Tornado+ we recommend TRANScompact; for Storm+ and StrongEdge, TR … |
| `faq[10].question` | Is there OTT service in CZ, SK and HU? |
| `faq[10].answer` | Yes. Asamer runs a branch in Brno with a service team and spare-parts stock covering CZ, SK and HU. Key components are available within 24 hours. Remote service … |
| `faq[11].question` | Who manufactures OTT edgebanders? |
| `faq[11].answer` | OTT edgebanders are made by Paul OTT GmbH, headquartered in Lambach (Austria) — a family business since 1963. OTT is among the leading edgebander brands, focuse … |
| `howTo[0].name` | Define your operation size and daily throughput |
| `howTo[0].text` | Count your employees and the workpieces processed per day. This number drives the model class (entry / pro / industrial). |
| `howTo[1].name` | Assess materials and edge types |
| `howTo[1].text` | Identify edge thickness (0.3–25 mm) and material (ABS, PVC, solid wood). For wet environments choose PUR or bluEdge featuring HyFuse. |
| `howTo[2].name` | Set the operating mode and shifts |
| `howTo[2].text` | Single-shift: 18–20 m/min is enough. Multi-shift: 22–25 m/min, automatic magazines and OPC-UA for ERP integration. |
| `howTo[3].name` | Calculate budget and TCO |
| `howTo[3].text` | Include purchase price, glue, energy, maintenance and lifetime (15–25 years). On a smaller budget, consider a vetted used machine. |
| `howTo[4].name` | Request a consultation with Asamer |
| `howTo[4].text` | Asamer prepares an individual offer based on your operation, materials and budget. Consultation in CZ, SK and HU in the local language. |

## ratgeberFaqHub · FAQ (36)

### HU — 36 fehlend

| Pfad im Modul | ausgelieferter Text |
|---|---|
| `[0].items[0].question` | Which edgebander for beginners? |
| `[0].items[0].answer` | For beginners we recommend the OTT Pacific+. It offers 18 m/min feed speed including corner processing in just 5.7 m length. The machine handles edge thicknesse … |
| `[0].items[1].question` | When does warehouse automation pay off? |
| `[0].items[1].answer` | Warehouse automation pays off from a daily panel throughput of approx. 50 panels, or when search times and picking errors slow down productivity. BARBARIC syste … |
| `[0].items[2].question` | Which edges can an OTT edgebander process? |
| `[0].items[2].answer` | OTT edgebanders handle edges from 0.3 to 25 mm — ABS, PVC, melamine, paper edges, solid wood, aluminium. Maximum thickness depends on the model: Pacific+ and To … |
| `[0].items[3].question` | What is the difference between PUR and EVA glue technology? |
| `[0].items[3].answer` | EVA (ethylene vinyl acetate) is a thermoplastic hot-melt adhesive that cures quickly and is easy to process. PUR (polyurethane reactive adhesive) reacts with mo … |
| `[0].items[4].question` | What does Zero-Gap mean? What is bluEdge HyFuse? |
| `[0].items[4].answer` | Zero-Gap refers to edge bonding where the glue line is visually invisible – the edge and panel material merge seamlessly. bluEdge featuring HyFuse is OTT's prop … |
| `[1].items[0].question` | What is OPC-UA and why is it important for ERP integration? |
| `[1].items[0].answer` | OPC-UA (Open Platform Communications – Unified Architecture) is an open industrial standard for secure data exchange between machines and IT systems. All OTT ma … |
| `[1].items[1].question` | Do I need a return system for the edgebander? |
| `[1].items[1].answer` | A return system saves a second operator and lifts productivity significantly. For Pacific+ and Tornado+ we recommend TRANScompact; for Storm+ and StrongEdge, TR … |
| `[1].items[2].question` | Can Asamer help with software integration of my new machine? |
| `[1].items[2].answer` | Yes, our software team connects your machine via the open OPC-UA interface directly to your ERP or MES system. Integration includes real-time production data, a … |
| `[2].items[0].question` | How quickly does a technician arrive during machine failure? |
| `[2].items[0].answer` | In an emergency our service team prioritizes your incident immediately. Typically we start a phone or remote diagnosis within 2–4 hours. If an on-site visit is  … |
| `[2].items[1].question` | Which machines does Asamer service? |
| `[2].items[1].answer` | We service all machines from our current portfolio: OTT edgebanding machines, Mayer panel saws, BARBARIC handling and storage systems, and Gannomat drilling and … |
| `[2].items[2].question` | How long does an edgebander last? |
| `[2].items[2].answer` | With proper preventive maintenance OTT edgebanders last 15–25 years. Key drivers: glue quality, regular cleaning of the glue system, replacing worn tooling (cut … |
| `[2].items[3].question` | How long does an edgebander installation take? |
| `[2].items[3].answer` | A standard OTT edgebander installation takes 2–5 working days, including commissioning and operator training. Industrial models with ERP integration and multipl … |
| `[3].items[0].question` | How much does an edgebander cost? |
| `[3].items[0].answer` | The price of an edgebander depends on the model, configuration and equipment. Entry models (Pacific+) start in the low six-figure EUR range, professional models … |
| `[3].items[1].question` | What funding programs exist in 2026 for woodworking machines in CZ? |
| `[3].items[1].answer` | In the Czech Republic several programs are available in 2026: OP TAK – Digitální podnik supports 25–45% (max. CZK 45M) with ERP/MES integration of machines. OP  … |
| `[3].items[2].question` | How does leasing through Raiffeisen work for machines? |
| `[3].items[2].answer` | Raiffeisen Leasing finances new and used machines with terms of 36–72 months. You choose between finance leasing (ownership after final installment) and operati … |
| `[4].items[0].question` | What to look for when buying used edgebanders? |
| `[4].items[0].answer` | Check the condition of the glue unit, milling aggregates and feed chain – these are the critical wear parts. Ask for the machine passport with maintenance histo … |
| `[4].items[1].question` | Does Asamer offer warranty on used machines? |
| `[4].items[1].answer` | Yes, every used machine from Asamer is technically inspected and refurbished if needed before sale. Depending on condition and scope of refurbishment we provide … |
| `[4].items[2].question` | Does Asamer deliver to Hungary and Slovakia? |
| `[4].items[2].answer` | Yes, Asamer delivers across the entire CZ, SK and HU region. We are the exclusive distribution partner for OTT edgebanding machines. Mayer, BARBARIC and Gannoma … |

## barbaricSeoContent · Kategorien (30)

### HU — 30 fehlend

| Pfad im Modul | ausgelieferter Text |
|---|---|
| `buffer.sections[0].heading` | When do you need a buffer conveyor? |
| `buffer.faq[0].question` | How many workpieces can a TMP buffer? |
| `buffer.faq[1].question` | Does a TMP make sense for every machine combination? |
| `buffer.faq[2].question` | Can the TMP be combined with an existing line? |
| `door.sections[0].heading` | Vacuum handling for individual doors |
| `door.sections[1].heading` | Automatic door storage |
| `door.faq[0].question` | What door sizes are processed? |
| `door.faq[1].question` | Are doors with fittings processed? |
| `door.faq[2].question` | Are there labelling solutions? |
| `labeling.sections[0].heading` | Why digital labelling? |
| `labeling.faq[0].question` | Barcode or RFID? |
| `labeling.faq[1].question` | ERP integration? |
| `labeling.faq[2].question` | What printing performance? |
| `vacuum-lifters.sections[0].heading` | Ergonomics and occupational safety |
| `vacuum-lifters.sections[1].heading` | Which UWL is the right one? |
| `vacuum-lifters.faq[0].question` | Can curved surfaces also be lifted? |
| `vacuum-lifters.faq[1].question` | Do we need compressed air? |
| `vacuum-lifters.faq[2].question` | How often must they be inspected? |
| `vacuum-special.sections[0].heading` | When is special vacuum technology worthwhile? |
| `vacuum-special.faq[0].question` | Is there a special solution for our geometry? |
| `vacuum-special.faq[1].question` | How long does development of a special solution take? |
| `vacuum-special.faq[2].question` | Can a standard vacuum lifter be retrofitted? |
| `vacuum-traverses.sections[0].heading` | Thin panel traverse vs. standard lifter |
| `vacuum-traverses.faq[0].question` | What workpiece lengths are possible? |
| `vacuum-traverses.faq[1].question` | What panel thicknesses is the thin panel traverse suitable for? |
| `vacuum-traverses.faq[2].question` | Is there a sheet metal traverse? |
| `vacuum-cranes.sections[0].heading` | SSK vs. SSY vs. truss bridge |
| `vacuum-cranes.faq[0].question` | Is a vacuum crane cheaper than a panel storage? |
| `vacuum-cranes.faq[1].question` | Do we need a foundation? |
| `vacuum-cranes.faq[2].question` | Automatic or manual? |
