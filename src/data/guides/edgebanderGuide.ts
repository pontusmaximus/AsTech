/**
 * Strukturierter Inhalt fuer den Anchor-Artikel
 * "Jakou olepovačku hran koupit?" / "Welche Kantenanleimmaschine kaufen?"
 *
 * Wird sowohl von der React-Page (GuideEdgebanderPage.tsx) als auch vom
 * Build-Time-Prerender (scripts/prerender.ts) konsumiert. CZ ist die
 * Leit-Sprache; SK ist nah an CZ, HU faellt auf EN zurueck.
 */

import type { MultiLangText, SeoFaqItem, SeoContentSection } from '../seo/types';

export interface DecisionCriterion {
  question: MultiLangText;
  body: MultiLangText;
}

export interface EdgebanderGuideContent {
  /** Direkt-Antwort fuer AI-Snippet (~80 Woerter). */
  lead: MultiLangText;
  /** 4 Entscheidungs-Kriterien als Frage + Antwort. */
  decisionCriteria: DecisionCriterion[];
  /** Used vs new (~150 Woerter). */
  usedVsNew: SeoContentSection;
  /** PUR vs EVA Kurz-Block (~80 Woerter, verlinkt PUR-vs-EVA-Guide). */
  purVsEva: SeoContentSection;
  /** Service- und Verfuegbarkeits-Block (Asamer Trust). */
  service: SeoContentSection;
  /** FAQ — wird zu FAQPage-JSON-LD. */
  faq: SeoFaqItem[];
  /** HowTo-Schritte fuer HowTo-JSON-LD. */
  howTo: { name: MultiLangText; text: MultiLangText }[];
}

export const EDGEBANDER_GUIDE: EdgebanderGuideContent = {
  lead: {
    cz: 'Jakou olepovačku hran koupit závisí na velikosti vašeho provozu, zpracovávaných materiálech a požadovaném objemu výroby. Pro malé truhlárny do 5 zaměstnanců doporučujeme kompaktní modely OTT Pacific+ nebo Tornado+. Střední provozy s 5–20 zaměstnanci profitují z OTT FlexEdge nebo Storm+. Pro průmyslový nepřetržitý provoz nad 20 zaměstnanců jsou určeny OTT StrongEdge nebo TopEdge. Asamer je autorizovaný prodejce OTT pro Českou republiku, Slovensko a Maďarsko – poradíme s výběrem přesně podle vašich požadavků.',
    sk: 'Akú olepovačku hrán kúpiť závisí od veľkosti vašej prevádzky, spracovávaných materiálov a požadovaného objemu výroby. Pre malé stolárstva do 5 zamestnancov odporúčame kompaktné modely OTT Pacific+ alebo Tornado+. Stredné prevádzky s 5–20 zamestnancami profitujú z OTT FlexEdge alebo Storm+. Pre priemyselnú nepretržitú prevádzku nad 20 zamestnancov sú určené OTT StrongEdge alebo TopEdge. Asamer je autorizovaný predajca OTT pre Slovensko, Českú republiku a Maďarsko – poradíme s výberom presne podľa vašich požiadaviek.',
    de: 'Welche Kantenanleimmaschine Sie kaufen sollten, hängt von Ihrer Betriebsgröße, den verarbeiteten Materialien und dem gewünschten Produktionsvolumen ab. Für kleine Tischlereien bis 5 Mitarbeiter empfehlen wir die kompakten Modelle OTT Pacific+ oder Tornado+. Mittelbetriebe mit 5–20 Mitarbeitern profitieren von OTT FlexEdge oder Storm+. Für den industriellen Dauerbetrieb über 20 Mitarbeiter sind OTT StrongEdge oder TopEdge gedacht. Asamer ist autorisierter OTT-Händler für Tschechien, die Slowakei und Ungarn – wir beraten Sie bei der Auswahl exakt nach Ihren Anforderungen.',
    en: 'Which edgebander to buy depends on your operation size, the materials processed and your target production volume. For small joineries up to 5 employees we recommend the compact OTT Pacific+ or Tornado+. Mid-size operations with 5–20 employees benefit from OTT FlexEdge or Storm+. Industrial continuous operations above 20 employees are covered by OTT StrongEdge or TopEdge. Asamer is the authorized OTT dealer for the Czech Republic, Slovakia and Hungary – we will help you choose exactly the right machine for your requirements.',
  },

  decisionCriteria: [
    {
      question: {
        cz: '1. Jakou velikost má váš provoz?',
        sk: '1. Akú veľkosť má vaša prevádzka?',
        de: '1. Wie groß ist Ihr Betrieb?',
        en: '1. How big is your operation?',
      },
      body: {
        cz: 'První kritérium je počet zaměstnanců a denní průchodnost. Malá truhlárna (1–5 lidí) zpracuje 20–80 obrobků denně, střední provoz (5–20 lidí) 80–300 obrobků a průmyslový provoz (20+) přes 300 obrobků na směnu. Velikost provozu určuje potřebnou délku stroje, posuv a stupeň automatizace.',
        sk: 'Prvým kritériom je počet zamestnancov a denná priepustnosť. Malé stolárstvo (1–5 ľudí) spracuje 20–80 obrobkov denne, stredná prevádzka (5–20 ľudí) 80–300 obrobkov a priemyselná prevádzka (20+) viac ako 300 obrobkov na smenu. Veľkosť prevádzky určuje potrebnú dĺžku stroja, posuv a stupeň automatizácie.',
        de: 'Das erste Kriterium ist die Mitarbeiterzahl und der tägliche Durchsatz. Eine kleine Tischlerei (1–5 Personen) verarbeitet 20–80 Werkstücke pro Tag, ein Mittelbetrieb (5–20 Personen) 80–300 Werkstücke und ein Industriebetrieb (20+) über 300 Werkstücke pro Schicht. Die Betriebsgröße bestimmt die benötigte Baulänge, Vorschubgeschwindigkeit und den Automatisierungsgrad.',
        en: 'The first criterion is headcount and daily throughput. A small joinery (1–5 people) processes 20–80 workpieces per day, a mid-size operation (5–20 people) 80–300 workpieces, and industrial production (20+) more than 300 workpieces per shift. The size of your operation drives the required machine length, feed speed and degree of automation.',
      },
    },
    {
      question: {
        cz: '2. Jaké materiály a hrany budete zpracovávat?',
        sk: '2. Aké materiály a hrany budete spracovávať?',
        de: '2. Welche Materialien und Kanten verarbeiten Sie?',
        en: '2. Which materials and edges will you process?',
      },
      body: {
        cz: 'Druhé kritérium jsou materiály: dřevotříska, MDF, masivní dřevo, plast, hliník. Pro standardní ABS a PVC hrany do 3 mm v suchém prostředí stačí EVA lepidlo. Pro vodotěsné spoje (kuchyně, koupelny, venkovní použití) a hrany nad 3 mm je doporučené PUR nebo bluEdge laser. Tloušťka zpracovávaných hran (od 0,3 do 25 mm) určuje vhodný model.',
        sk: 'Druhým kritériom sú materiály: drevotrieska, MDF, masívne drevo, plast, hliník. Pre štandardné ABS a PVC hrany do 3 mm v suchom prostredí postačuje EVA lepidlo. Pre vodotesné spoje (kuchyne, kúpeľne, vonkajšie použitie) a hrany nad 3 mm je odporúčané PUR alebo bluEdge laser. Hrúbka spracovávaných hrán (od 0,3 do 25 mm) určuje vhodný model.',
        de: 'Das zweite Kriterium sind die Materialien: Spanplatte, MDF, Massivholz, Kunststoff, Aluminium. Für Standard-ABS- und -PVC-Kanten bis 3 mm im trockenen Umfeld reicht EVA-Klebstoff. Für wasserdichte Verbindungen (Küche, Bad, Außeneinsatz) und Kanten über 3 mm ist PUR oder bluEdge-Laser empfohlen. Die Kantenstärke (0,3 bis 25 mm) bestimmt das passende Modell.',
        en: 'The second criterion is materials: chipboard, MDF, solid wood, plastic, aluminium. For standard ABS and PVC edges up to 3 mm in dry environments, EVA glue is sufficient. For waterproof joints (kitchens, bathrooms, outdoor use) and edges above 3 mm, PUR or bluEdge laser is recommended. Edge thickness (0.3 to 25 mm) determines the right model.',
      },
    },
    {
      question: {
        cz: '3. Jaký objem výroby máte?',
        sk: '3. Aký objem výroby máte?',
        de: '3. Welches Produktionsvolumen haben Sie?',
        en: '3. What is your production volume?',
      },
      body: {
        cz: 'Třetí kritérium je počet směn a doba provozu. Jednosměnný provoz vystačí s rychlostí posuvu 12–18 m/min. Vícesměnný provoz s 300+ obrobky na směnu vyžaduje 16–25 m/min, automatickou výměnu hran a zásobníky lepidla pro nepřetržitou produkci. Pro průmyslové zákazníky je důležitá také připravenost na ERP/MES integraci přes OPC-UA.',
        sk: 'Tretím kritériom je počet zmien a doba prevádzky. Jednozmenná prevádzka vystačí s rýchlosťou posuvu 12–18 m/min. Viaczmenná prevádzka s 300+ obrobkami na zmenu vyžaduje 16–25 m/min, automatickú výmenu hrán a zásobníky lepidla pre nepretržitú produkciu. Pre priemyselných zákazníkov je dôležitá tiež pripravenosť na ERP/MES integráciu cez OPC-UA.',
        de: 'Das dritte Kriterium ist die Schichtzahl und Betriebsdauer. Einschichtbetrieb kommt mit 12–18 m/min Vorschub aus. Mehrschichtbetrieb mit 300+ Werkstücken pro Schicht erfordert 16–25 m/min, automatische Kantenwechsel und Klebstoff-Reservoirs für durchgehende Produktion. Für Industriekunden ist zudem die Anbindung an ERP/MES über OPC-UA wesentlich.',
        en: 'The third criterion is the number of shifts and operating hours. Single-shift operation works with feed speeds of 12–18 m/min. Multi-shift production with 300+ workpieces per shift requires 16–25 m/min, automatic edge changes and glue reservoirs for continuous production. For industrial customers, ERP/MES integration via OPC-UA is also essential.',
      },
    },
    {
      question: {
        cz: '4. Jaký je váš rozpočet a TCO?',
        sk: '4. Aký je váš rozpočet a TCO?',
        de: '4. Wie sieht Ihr Budget und TCO aus?',
        en: '4. What is your budget and TCO?',
      },
      body: {
        cz: 'Čtvrté kritérium je celková cena vlastnictví (TCO): pořizovací cena, spotřeba energie, lepidla, údržba, životnost a hodnota při dalším prodeji. Olepovačky hran OTT mají typickou životnost 15–25 let při řádné údržbě. Použité stroje mohou být vhodnou volbou při menším rozpočtu – pak je klíčový technický stav, dostupnost náhradních dílů a původ.',
        sk: 'Štvrtým kritériom je celková cena vlastníctva (TCO): obstarávacia cena, spotreba energie, lepidlá, údržba, životnosť a hodnota pri ďalšom predaji. Olepovačky hrán OTT majú typickú životnosť 15–25 rokov pri riadnej údržbe. Použité stroje môžu byť vhodnou voľbou pri menšom rozpočte – kľúčový je potom technický stav, dostupnosť náhradných dielov a pôvod.',
        de: 'Das vierte Kriterium sind die Gesamtbetriebskosten (TCO): Anschaffungspreis, Energieverbrauch, Klebstoff, Wartung, Lebensdauer und Wiederverkaufswert. OTT-Kantenanleimmaschinen haben bei sachgemäßer Wartung eine Lebensdauer von 15–25 Jahren. Gebrauchtmaschinen sind bei kleinerem Budget eine sinnvolle Option – entscheidend sind dann der technische Zustand, die Ersatzteilverfügbarkeit und die Herkunft.',
        en: 'The fourth criterion is total cost of ownership (TCO): purchase price, energy use, glue, maintenance, lifetime and resale value. OTT edgebanders typically last 15–25 years with proper maintenance. Used machines can make sense on a smaller budget – the technical condition, spare-parts availability and provenance then become decisive.',
      },
    },
  ],

  usedVsNew: {
    heading: {
      cz: 'Použitá vs nová olepovačka hran',
      sk: 'Použitá vs nová olepovačka hrán',
      de: 'Gebrauchte vs neue Kantenanleimmaschine',
      en: 'Used vs new edgebander',
    },
    body: {
      cz: 'Použitá olepovačka hran je výhodnou volbou, pokud kombinuje úspory s kvalitou. Použité stroje OTT z renomovaných zdrojů s kompletním servisním záznamem, technickou kontrolou a zárukou nabízí 30–60 % úsporu oproti nové ceně. Nevýhody: omezený výběr modelů a vybavení, případná potřeba modernizace ovládání nebo lepicího systému. Nový stroj má smysl, pokud potřebujete konkrétní konfiguraci, nejnovější technologie (bluEdge laser, OPC-UA) nebo dlouhou plnou záruku. Asamer nabízí ověřené použité stroje OTT i nové instalace s instalací a školením v ČR, SR a Maďarsku.',
      sk: 'Použitá olepovačka hrán je výhodnou voľbou, ak kombinuje úspory s kvalitou. Použité stroje OTT z renomovaných zdrojov s kompletným servisným záznamom, technickou kontrolou a zárukou ponúkajú 30–60 % úsporu oproti novej cene. Nevýhody: obmedzený výber modelov a vybavenia, prípadná potreba modernizácie ovládania alebo lepiaceho systému. Nový stroj má zmysel, ak potrebujete konkrétnu konfiguráciu, najnovšie technológie (bluEdge laser, OPC-UA) alebo dlhú plnú záruku. Asamer ponúka overené použité stroje OTT aj nové inštalácie s montážou a školením v SR, ČR a Maďarsku.',
      de: 'Eine gebrauchte Kantenanleimmaschine ist eine gute Wahl, wenn sie Einsparung und Qualität verbindet. Geprüfte OTT-Gebrauchtmaschinen aus seriöser Quelle mit vollständigem Service-Nachweis, technischer Abnahme und Garantie bringen 30–60 % Einsparung gegenüber dem Neupreis. Nachteile: begrenzte Modell- und Ausstattungsauswahl, eventuell Bedarf an Steuerungs- oder Klebstoff-System-Modernisierung. Eine Neumaschine ist sinnvoll, wenn Sie eine bestimmte Konfiguration, neueste Technologien (bluEdge-Laser, OPC-UA) oder volle Garantie benötigen. Asamer bietet geprüfte OTT-Gebrauchtmaschinen ebenso wie Neuinstallationen inklusive Aufstellung und Schulung in CZ, SK und HU.',
      en: 'A used edgebander is a smart choice when it combines savings with quality. Vetted OTT used machines from a reputable source — with complete service history, technical inspection and warranty — typically save 30–60 % over new. Trade-offs: limited model and equipment choice, sometimes a need to modernise the controls or glue system. A new machine makes sense when you need a specific configuration, the latest technology (bluEdge laser, OPC-UA) or a full warranty. Asamer offers vetted used OTT machines as well as new installations with on-site setup and training in CZ, SK and HU.',
    },
  },

  purVsEva: {
    heading: {
      cz: 'PUR nebo EVA lepidlo? Krátké srovnání',
      sk: 'PUR alebo EVA lepidlo? Krátke porovnanie',
      de: 'PUR oder EVA-Klebstoff? Kurzvergleich',
      en: 'PUR or EVA glue? Quick comparison',
    },
    body: {
      cz: 'Volba mezi PUR a EVA lepidlem ovlivňuje kvalitu a trvanlivost spoje. EVA je standardní termoplastické lepidlo: levné, rychlé, vhodné pro suché interiéry. PUR (polyuretan) vytváří vodotěsný a teplotně odolný spoj, nezbytný pro kuchyně, koupelny a venkovní použití. Většina moderních olepovaček OTT umožňuje provoz obou systémů paralelně přes CombiMelt. Detailní srovnání včetně provozních nákladů a zpracovatelnosti najdete v našem samostatném průvodci PUR vs EVA.',
      sk: 'Voľba medzi PUR a EVA lepidlom ovplyvňuje kvalitu a trvanlivosť spoja. EVA je štandardné termoplastické lepidlo: lacné, rýchle, vhodné pre suché interiéry. PUR (polyuretán) vytvára vodotesný a teplotne odolný spoj, nevyhnutný pre kuchyne, kúpeľne a vonkajšie použitie. Väčšina moderných olepovačiek OTT umožňuje prevádzku oboch systémov paralelne cez CombiMelt. Detailné porovnanie vrátane prevádzkových nákladov nájdete v našom samostatnom sprievodcovi PUR vs EVA.',
      de: 'Die Wahl zwischen PUR und EVA-Klebstoff beeinflusst Qualität und Haltbarkeit der Klebefuge. EVA ist der thermoplastische Standard: günstig, schnell, geeignet für trockene Innenräume. PUR (Polyurethan) erzeugt eine wasserdichte und temperaturbeständige Verbindung, zwingend für Küche, Bad und Außeneinsatz. Die meisten modernen OTT-Maschinen erlauben Parallel-Betrieb beider Systeme via CombiMelt. Einen detaillierten Vergleich inklusive Betriebskosten finden Sie in unserem separaten PUR-vs-EVA-Ratgeber.',
      en: 'The choice between PUR and EVA glue affects bond quality and durability. EVA is the thermoplastic standard: cheap, fast, suitable for dry interiors. PUR (polyurethane) creates a waterproof, heat-resistant bond — required for kitchens, bathrooms and outdoor use. Most modern OTT edgebanders run both systems in parallel via CombiMelt. A detailed comparison, including operating costs, is in our dedicated PUR-vs-EVA guide.',
    },
  },

  service: {
    heading: {
      cz: 'Servis a dostupnost v ČR, SR a Maďarsku',
      sk: 'Servis a dostupnosť v SR, ČR a Maďarsku',
      de: 'Service und Verfügbarkeit in CZ, SK und HU',
      en: 'Service and availability in CZ, SK and HU',
    },
    body: {
      cz: 'Asamer je autorizovaným prodejcem OTT pro Českou republiku, Slovensko a Maďarsko od roku 1991. Naše činnost zahrnuje konzultace, projektování, dodání, instalaci, školení obsluhy a dlouhodobý servis. Provozujeme pobočku v Brně s technickým týmem a sklad náhradních dílů s dostupností do 24 hodin pro klíčové komponenty. Pro průmyslové zákazníky nabízíme preventivní údržbu a vzdálený servis přes OPC-UA. Hovoříme česky, slovensky, maďarsky, německy a anglicky.',
      sk: 'Asamer je autorizovaným predajcom OTT pre Slovensko, Českú republiku a Maďarsko od roku 1991. Naša činnosť zahŕňa konzultácie, projektovanie, dodanie, inštaláciu, školenie obsluhy a dlhodobý servis. Prevádzkujeme pobočku v Brne s technickým tímom a sklad náhradných dielov s dostupnosťou do 24 hodín pre kľúčové komponenty. Pre priemyselných zákazníkov ponúkame preventívnu údržbu a vzdialený servis cez OPC-UA. Hovoríme po slovensky, česky, maďarsky, nemecky a anglicky.',
      de: 'Asamer ist seit 1991 autorisierter OTT-Händler für Tschechien, die Slowakei und Ungarn. Unser Leistungsspektrum: Beratung, Projektierung, Lieferung, Aufstellung, Bedienerschulung und langfristiger Service. Eine Niederlassung in Brünn mit technischem Team und Ersatzteillager liefert Schlüsselkomponenten innerhalb von 24 Stunden. Für Industriekunden bieten wir vorbeugende Wartung und Fernservice über OPC-UA. Wir sprechen Deutsch, Englisch, Tschechisch, Slowakisch und Ungarisch.',
      en: 'Asamer has been the authorized OTT dealer for the Czech Republic, Slovakia and Hungary since 1991. Our scope: consulting, project planning, delivery, installation, operator training and long-term service. A branch in Brno with a technical team and spare-parts stock delivers key components within 24 hours. For industrial customers we offer preventive maintenance and remote service via OPC-UA. We speak Czech, Slovak, Hungarian, German and English.',
    },
  },

  faq: [
    {
      question: {
        cz: 'Jakou olepovačku hran zvolit pro malou truhlárnu?',
        sk: 'Akú olepovačku hrán zvoliť pre malé stolárstvo?',
        de: 'Welche Kantenanleimmaschine für eine kleine Tischlerei?',
        en: 'Which edgebander for a small joinery?',
      },
      answer: {
        cz: 'Pro malé truhlárny doporučujeme OTT Pacific+ (5,7 m, 18 m/min) jako kompaktní vstupní model, nebo OTT Tornado+ (6,2 m, 12–18 m/min) pro vyšší flexibilitu s možností PUR. Oba modely se vejdou do dílny do 30 m² a zvládnou 20–80 obrobků denně.',
        sk: 'Pre malé stolárstva odporúčame OTT Pacific+ (5,7 m, 18 m/min) ako kompaktný vstupný model alebo OTT Tornado+ (6,2 m, 12–18 m/min) pre vyššiu flexibilitu s možnosťou PUR. Oba modely sa zmestia do dielne do 30 m² a zvládnu 20–80 obrobkov denne.',
        de: 'Für kleine Tischlereien empfehlen wir die OTT Pacific+ (5,7 m, 18 m/min) als kompakten Einstieg oder die OTT Tornado+ (6,2 m, 12–18 m/min) für höhere Flexibilität mit PUR-Option. Beide Modelle passen in eine Werkstatt bis 30 m² und schaffen 20–80 Werkstücke pro Tag.',
        en: 'For small joineries we recommend the OTT Pacific+ (5.7 m, 18 m/min) as a compact entry model or the OTT Tornado+ (6.2 m, 12–18 m/min) for greater flexibility with a PUR option. Both fit a workshop of up to 30 m² and handle 20–80 workpieces per day.',
      },
    },
    {
      question: {
        cz: 'Jaký je rozdíl mezi olepovačkou hran s PUR a EVA?',
        sk: 'Aký je rozdiel medzi olepovačkou hrán s PUR a EVA?',
        de: 'Was ist der Unterschied zwischen PUR- und EVA-Kantenanleimmaschine?',
        en: 'What is the difference between a PUR and an EVA edgebander?',
      },
      answer: {
        cz: 'EVA je termoplastické lepidlo: rychlé, levné, vhodné pro standardní hrany v suchém prostředí. PUR (polyuretan) vytváří vodotěsný a teplotně odolný spoj — povinné pro kuchyně, koupelny a venkovní aplikace. Většina olepovaček OTT umožňuje paralelní provoz obou systémů přes CombiMelt.',
        sk: 'EVA je termoplastické lepidlo: rýchle, lacné, vhodné pre štandardné hrany v suchom prostredí. PUR (polyuretán) vytvára vodotesný a teplotne odolný spoj — povinné pre kuchyne, kúpeľne a vonkajšie aplikácie. Väčšina olepovačiek OTT umožňuje paralelnú prevádzku oboch systémov cez CombiMelt.',
        de: 'EVA ist ein thermoplastischer Klebstoff: schnell, günstig, geeignet für Standardkanten in trockener Umgebung. PUR (Polyurethan) erzeugt eine wasserdichte, temperaturfeste Verbindung — Pflicht für Küche, Bad und Außenanwendungen. Die meisten OTT-Maschinen fahren beide Systeme parallel via CombiMelt.',
        en: 'EVA is a thermoplastic glue: fast, cheap, fine for standard edges in dry environments. PUR (polyurethane) makes a waterproof, heat-resistant bond — mandatory for kitchens, bathrooms and outdoor use. Most OTT edgebanders run both in parallel via CombiMelt.',
      },
    },
    {
      question: {
        cz: 'Vyplatí se koupit použitou olepovačku hran?',
        sk: 'Oplatí sa kúpiť použitú olepovačku hrán?',
        de: 'Lohnt sich eine gebrauchte Kantenanleimmaschine?',
        en: 'Is it worth buying a used edgebander?',
      },
      answer: {
        cz: 'Použitá olepovačka hran z ověřeného zdroje s technickou kontrolou a servisním záznamem může ušetřit 30–60 % oproti nové ceně. Důležité je: kompletní historie, dostupnost náhradních dílů (u OTT minimálně 15 let zpětně), stav lepicího systému a možnost modernizace ovládání. Asamer nabízí ověřené použité stroje s instalací a zárukou.',
        sk: 'Použitá olepovačka hrán z overeného zdroja s technickou kontrolou a servisným záznamom môže ušetriť 30–60 % oproti novej cene. Dôležité je: kompletná história, dostupnosť náhradných dielov (u OTT minimálne 15 rokov spätne), stav lepiaceho systému a možnosť modernizácie ovládania. Asamer ponúka overené použité stroje s inštaláciou a zárukou.',
        de: 'Eine gebrauchte Kantenanleimmaschine aus geprüfter Quelle mit technischer Abnahme und Service-Historie kann 30–60 % gegenüber dem Neupreis sparen. Wichtig: vollständige Historie, Ersatzteilverfügbarkeit (bei OTT mindestens 15 Jahre zurück), Zustand des Klebstoff-Systems und Modernisierbarkeit der Steuerung. Asamer bietet geprüfte Gebrauchtmaschinen mit Installation und Garantie.',
        en: 'A used edgebander from a vetted source with technical inspection and service history can save 30–60 % over new. Key checks: complete history, spare-parts availability (OTT supports at least 15 years back), state of the glue system, and whether the controls can be modernised. Asamer offers vetted used machines with installation and warranty.',
      },
    },
    {
      question: {
        cz: 'Kolik stojí olepovačka hran?',
        sk: 'Koľko stojí olepovačka hrán?',
        de: 'Was kostet eine Kantenanleimmaschine?',
        en: 'How much does an edgebander cost?',
      },
      answer: {
        cz: 'Cena olepovačky hran závisí na modelu, konfiguraci a vybavení. Vstupní modely (Pacific+) začínají v nižších stovkách tisíc EUR, profesionální modely (FlexEdge, Storm+) jsou ve středním cenovém pásmu, průmyslové stroje (StrongEdge, TopEdge) v nejvyšším. Asamer připraví individuální nabídku podle vašich požadavků.',
        sk: 'Cena olepovačky hrán závisí od modelu, konfigurácie a vybavenia. Vstupné modely (Pacific+) začínajú v nižších stotisícoch EUR, profesionálne modely (FlexEdge, Storm+) sú v strednom cenovom pásme, priemyselné stroje (StrongEdge, TopEdge) v najvyššom. Asamer pripraví individuálnu ponuku podľa vašich požiadaviek.',
        de: 'Der Preis einer Kantenanleimmaschine hängt von Modell, Konfiguration und Ausstattung ab. Einstiegsmodelle (Pacific+) beginnen im unteren sechsstelligen EUR-Bereich, Profi-Modelle (FlexEdge, Storm+) liegen im mittleren Bereich, Industriemaschinen (StrongEdge, TopEdge) im oberen. Asamer erstellt ein individuelles Angebot nach Ihren Anforderungen.',
        en: 'The price of an edgebander depends on the model, configuration and equipment. Entry models (Pacific+) start in the low six-figure EUR range, professional models (FlexEdge, Storm+) are in the mid range, industrial machines (StrongEdge, TopEdge) at the top. Asamer prepares an individual quote based on your requirements.',
      },
    },
    {
      question: {
        cz: 'Jak dlouho trvá instalace olepovačky hran?',
        sk: 'Ako dlho trvá inštalácia olepovačky hrán?',
        de: 'Wie lange dauert die Aufstellung einer Kantenanleimmaschine?',
        en: 'How long does an edgebander installation take?',
      },
      answer: {
        cz: 'Standardní instalace olepovačky hran OTT trvá 2–5 pracovních dnů včetně uvedení do provozu a školení obsluhy. U průmyslových modelů s ERP integrací a vícenásobným zásobníkem se může protáhnout na 1–2 týdny. Asamer realizuje instalaci v ČR, SR a Maďarsku s týmem techniků z Lambachu nebo Brna.',
        sk: 'Štandardná inštalácia olepovačky hrán OTT trvá 2–5 pracovných dní vrátane uvedenia do prevádzky a školenia obsluhy. Pri priemyselných modeloch s ERP integráciou a viacerými zásobníkmi sa môže predĺžiť na 1–2 týždne. Asamer realizuje inštaláciu v SR, ČR a Maďarsku s tímom technikov z Lambachu alebo Brna.',
        de: 'Die Standard-Aufstellung einer OTT-Kantenanleimmaschine dauert 2–5 Werktage inklusive Inbetriebnahme und Bedienerschulung. Bei Industriemodellen mit ERP-Anbindung und Mehrfach-Magazin kann sich das auf 1–2 Wochen ausdehnen. Asamer setzt die Aufstellung in CZ, SK und HU mit Technikern aus Lambach oder Brünn um.',
        en: 'A standard OTT edgebander installation takes 2–5 working days, including commissioning and operator training. Industrial models with ERP integration and multiple magazines can extend to 1–2 weeks. Asamer handles installation in CZ, SK and HU with technicians based in Lambach or Brno.',
      },
    },
    {
      question: {
        cz: 'Jaká je životnost olepovačky hran?',
        sk: 'Aká je životnosť olepovačky hrán?',
        de: 'Wie lange hält eine Kantenanleimmaschine?',
        en: 'How long does an edgebander last?',
      },
      answer: {
        cz: 'Olepovačky hran OTT mají při řádné preventivní údržbě životnost 15–25 let. Klíčové faktory jsou: kvalita lepidla, pravidelné čištění lepicího systému, výměna opotřebovaných nástrojů (frézy, scrapery) a aktualizace softwaru ovládání.',
        sk: 'Olepovačky hrán OTT majú pri riadnej preventívnej údržbe životnosť 15–25 rokov. Kľúčové faktory sú: kvalita lepidla, pravidelné čistenie lepiaceho systému, výmena opotrebovaných nástrojov (frézy, scrapery) a aktualizácia softvéru ovládania.',
        de: 'OTT-Kantenanleimmaschinen halten bei sachgerechter Wartung 15–25 Jahre. Entscheidende Faktoren: Klebstoffqualität, regelmäßige Reinigung des Klebstoff-Systems, Tausch verschlissener Werkzeuge (Fräser, Scraper) und Software-Updates der Steuerung.',
        en: 'With proper preventive maintenance OTT edgebanders last 15–25 years. Key drivers: glue quality, regular cleaning of the glue system, replacing worn tooling (cutters, scrapers) and keeping the control software updated.',
      },
    },
    {
      question: {
        cz: 'Co je technologie bluEdge HyFuse a kdy ji potřebuji?',
        sk: 'Čo je technológia bluEdge HyFuse a kedy ju potrebujem?',
        de: 'Was ist bluEdge HyFuse und wann brauche ich es?',
        en: 'What is bluEdge HyFuse and when do I need it?',
      },
      answer: {
        cz: 'bluEdge HyFuse je laserová technologie nulové spáry: funkční vrstva hrany se aktivuje laserem a tepelně se spojí s deskou bez lepidla. Výsledek je zcela neviditelný spoj odolný proti vodě a teplotě. Volba pro: high-end nábytek, kuchyně, koupelny, exkluzivní zakázky. Vyžaduje speciální laser-reaktivní hrany od dodavatelů Rehau, Doellken nebo Ostermann.',
        sk: 'bluEdge HyFuse je laserová technológia nulovej špáry: funkčná vrstva hrany sa aktivuje laserom a tepelne sa spojí s doskou bez lepidla. Výsledkom je úplne neviditeľný spoj odolný proti vode a teplote. Voľba pre: high-end nábytok, kuchyne, kúpeľne, exkluzívne zákazky. Vyžaduje špeciálne laser-reaktívne hrany od dodávateľov Rehau, Doellken alebo Ostermann.',
        de: 'bluEdge HyFuse ist eine Null-Spalt-Lasertechnologie: Die Funktionsschicht der Kante wird per Laser aktiviert und thermisch ohne Klebstoff mit der Platte verbunden. Ergebnis ist eine vollständig unsichtbare Fuge, wasser- und temperaturbeständig. Sinnvoll für High-End-Möbel, Küche, Bad und Premium-Aufträge. Voraussetzung sind laserreaktive Kanten von Rehau, Doellken oder Ostermann.',
        en: 'bluEdge HyFuse is a zero-gap laser technology: the edge\'s functional layer is activated by laser and thermally bonded to the panel without glue. The result is a completely invisible joint, waterproof and heat-resistant. Right for high-end furniture, kitchens, bathrooms and premium orders. Requires laser-reactive edges from Rehau, Doellken or Ostermann.',
      },
    },
    {
      question: {
        cz: 'Můžu olepovačku hran integrovat do svého ERP systému?',
        sk: 'Môžem olepovačku hrán integrovať do svojho ERP systému?',
        de: 'Kann ich die Kantenanleimmaschine in mein ERP integrieren?',
        en: 'Can I integrate an edgebander with my ERP?',
      },
      answer: {
        cz: 'Ano. Olepovačky OTT používají Beckhoff řídicí systém s OPC-UA rozhraním — otevřený standard pro integraci do ERP/MES bez vendor lock-in. Asamer má vlastní softwarový tým, který provede integraci přímo na místě.',
        sk: 'Áno. Olepovačky OTT používajú riadiaci systém Beckhoff s rozhraním OPC-UA — otvorený štandard pre integráciu do ERP/MES bez vendor lock-in. Asamer má vlastný softvérový tím, ktorý vykoná integráciu priamo na mieste.',
        de: 'Ja. OTT-Maschinen nutzen Beckhoff-Steuerungen mit OPC-UA — der offene Standard für ERP/MES-Anbindung ohne Vendor-Lock-in. Asamer hat ein eigenes Software-Team, das die Integration direkt vor Ort umsetzt.',
        en: 'Yes. OTT machines run Beckhoff controllers with OPC-UA — the open standard for ERP/MES integration without vendor lock-in. Asamer has an in-house software team that implements the integration on site.',
      },
    },
    {
      question: {
        cz: 'Jaké hrany dokáže OTT olepovačka zpracovat?',
        sk: 'Aké hrany dokáže OTT olepovačka spracovať?',
        de: 'Welche Kanten verarbeitet eine OTT-Kantenanleimmaschine?',
        en: 'Which edges can an OTT edgebander process?',
      },
      answer: {
        cz: 'Olepovačky hran OTT zpracovávají hrany od 0,3 do 25 mm — ABS, PVC, melamin, papírové hrany, masivní dřevo, hliník. Maximální tloušťka závisí na modelu: Pacific+ a Tornado+ do 15 mm, StrongEdge do 25 mm pro masivní dřevěné hrany.',
        sk: 'Olepovačky hrán OTT spracúvajú hrany od 0,3 do 25 mm — ABS, PVC, melamín, papierové hrany, masívne drevo, hliník. Maximálna hrúbka závisí od modelu: Pacific+ a Tornado+ do 15 mm, StrongEdge do 25 mm pre masívne drevené hrany.',
        de: 'OTT-Maschinen verarbeiten Kanten von 0,3 bis 25 mm — ABS, PVC, Melamin, Papierkanten, Massivholz, Aluminium. Die Maximalstärke hängt vom Modell ab: Pacific+ und Tornado+ bis 15 mm, StrongEdge bis 25 mm für Massivholzkanten.',
        en: 'OTT edgebanders handle edges from 0.3 to 25 mm — ABS, PVC, melamine, paper edges, solid wood, aluminium. Maximum thickness depends on the model: Pacific+ and Tornado+ up to 15 mm, StrongEdge up to 25 mm for solid wood edges.',
      },
    },
    {
      question: {
        cz: 'Potřebuji vratný systém pro olepovačku hran?',
        sk: 'Potrebujem návratový systém pre olepovačku hrán?',
        de: 'Brauche ich ein Rücktransportsystem für die Kantenanleimmaschine?',
        en: 'Do I need a return system for the edgebander?',
      },
      answer: {
        cz: 'Vratný systém šetří druhého operátora a výrazně zvyšuje produktivitu. Pro Pacific+ a Tornado+ doporučujeme TRANScompact, pro Storm+ a StrongEdge TRANSlift nebo TRANSedge. Doba návratnosti je obvykle několik měsíců díky úspoře mzdových nákladů.',
        sk: 'Návratový systém šetrí druhého operátora a výrazne zvyšuje produktivitu. Pre Pacific+ a Tornado+ odporúčame TRANScompact, pre Storm+ a StrongEdge TRANSlift alebo TRANSedge. Doba návratnosti je obvykle niekoľko mesiacov vďaka úspore mzdových nákladov.',
        de: 'Ein Rücktransportsystem spart einen zweiten Bediener und steigert die Produktivität deutlich. Für Pacific+ und Tornado+ empfehlen wir TRANScompact, für Storm+ und StrongEdge TRANSlift oder TRANSedge. Die Amortisationszeit liegt typischerweise bei wenigen Monaten durch eingesparte Personalkosten.',
        en: 'A return system saves a second operator and lifts productivity significantly. For Pacific+ and Tornado+ we recommend TRANScompact; for Storm+ and StrongEdge, TRANSlift or TRANSedge. Payback is usually a few months thanks to saved labour cost.',
      },
    },
    {
      question: {
        cz: 'Existuje servis OTT v České republice?',
        sk: 'Existuje servis OTT na Slovensku?',
        de: 'Gibt es OTT-Service in Tschechien, der Slowakei und Ungarn?',
        en: 'Is there OTT service in CZ, SK and HU?',
      },
      answer: {
        cz: 'Ano. Asamer provozuje pobočku v Brně se servisním týmem a skladem náhradních dílů. Pro klíčové komponenty zajišťujeme dostupnost do 24 hodin. Vzdálený servis přes OPC-UA umožňuje řešit většinu problémů bez výjezdu technika.',
        sk: 'Áno. Asamer prevádzkuje pobočku v Brne so servisným tímom a skladom náhradných dielov, ktorá obsluhuje aj Slovensko. Pre kľúčové komponenty zaisťujeme dostupnosť do 24 hodín. Vzdialený servis cez OPC-UA umožňuje riešiť väčšinu problémov bez výjazdu technika.',
        de: 'Ja. Asamer betreibt eine Niederlassung in Brünn mit Servicetechnikern und Ersatzteillager für CZ, SK und HU. Schlüsselkomponenten sind innerhalb von 24 Stunden verfügbar. Fernservice über OPC-UA löst die meisten Probleme ohne Anfahrt.',
        en: 'Yes. Asamer runs a branch in Brno with a service team and spare-parts stock covering CZ, SK and HU. Key components are available within 24 hours. Remote service via OPC-UA resolves most issues without a technician visit.',
      },
    },
    {
      question: {
        cz: 'Kdo je výrobcem olepovaček OTT?',
        sk: 'Kto je výrobcom olepovačiek OTT?',
        de: 'Wer ist der Hersteller der OTT-Maschinen?',
        en: 'Who manufactures OTT edgebanders?',
      },
      answer: {
        cz: 'Olepovačky hran OTT vyrábí Paul OTT GmbH se sídlem v Lambachu (Rakousko) — rodinná firma s historií od roku 1963. OTT je jednou z předních značek v oblasti olepování hran, s důrazem na kvalitu, modulární konstrukci a otevřená rozhraní. Asamer je autorizovaným prodejcem OTT pro ČR, SR a Maďarsko od roku 1991.',
        sk: 'Olepovačky hrán OTT vyrába Paul OTT GmbH so sídlom v Lambachu (Rakúsko) — rodinná firma s históriou od roku 1963. OTT je jednou z popredných značiek v oblasti olepovania hrán, s dôrazom na kvalitu, modulárnu konštrukciu a otvorené rozhrania. Asamer je autorizovaným predajcom OTT pre SR, ČR a Maďarsko od roku 1991.',
        de: 'OTT-Kantenanleimmaschinen werden von der Paul OTT GmbH mit Sitz in Lambach (Österreich) hergestellt — ein Familienunternehmen seit 1963. OTT zählt zu den führenden Marken im Bereich Kantenanleimung, mit Fokus auf Qualität, modularer Bauweise und offenen Schnittstellen. Asamer ist seit 1991 autorisierter OTT-Händler für Tschechien, die Slowakei und Ungarn.',
        en: 'OTT edgebanders are made by Paul OTT GmbH, headquartered in Lambach (Austria) — a family business since 1963. OTT is among the leading edgebander brands, focused on quality, modular design and open interfaces. Asamer has been the authorized OTT dealer for the Czech Republic, Slovakia and Hungary since 1991.',
      },
    },
  ],

  howTo: [
    {
      name: {
        cz: 'Definujte velikost provozu a denní průchodnost',
        sk: 'Definujte veľkosť prevádzky a dennú priepustnosť',
        de: 'Betriebsgröße und täglichen Durchsatz definieren',
        en: 'Define your operation size and daily throughput',
      },
      text: {
        cz: 'Spočítejte počet zaměstnanců a kolik obrobků projde stroji denně. Tento údaj určí třídu modelu (vstupní / profi / průmyslová).',
        sk: 'Spočítajte počet zamestnancov a koľko obrobkov prejde strojom denne. Tento údaj určí triedu modelu (vstupný / profi / priemyselný).',
        de: 'Zählen Sie die Mitarbeiter und die Werkstücke pro Tag. Diese Zahl bestimmt die Modellklasse (Einstieg / Profi / Industrie).',
        en: 'Count your employees and the workpieces processed per day. This number drives the model class (entry / pro / industrial).',
      },
    },
    {
      name: {
        cz: 'Vyhodnoťte materiály a typy hran',
        sk: 'Vyhodnoťte materiály a typy hrán',
        de: 'Materialien und Kantentypen bewerten',
        en: 'Assess materials and edge types',
      },
      text: {
        cz: 'Určete tloušťku hran (0,3–25 mm) a typ materiálu (ABS, PVC, masivní dřevo). Pro vlhká prostředí volte PUR nebo bluEdge laser.',
        sk: 'Určte hrúbku hrán (0,3–25 mm) a typ materiálu (ABS, PVC, masívne drevo). Pre vlhké prostredia voľte PUR alebo bluEdge laser.',
        de: 'Bestimmen Sie Kantenstärke (0,3–25 mm) und Material (ABS, PVC, Massivholz). Für feuchte Umgebungen PUR oder bluEdge-Laser.',
        en: 'Identify edge thickness (0.3–25 mm) and material (ABS, PVC, solid wood). For wet environments choose PUR or bluEdge laser.',
      },
    },
    {
      name: {
        cz: 'Stanovte provozní režim a směny',
        sk: 'Stanovte prevádzkový režim a zmeny',
        de: 'Betriebsmodus und Schichten festlegen',
        en: 'Set the operating mode and shifts',
      },
      text: {
        cz: 'Jednosměnný provoz: 12–18 m/min stačí. Vícesměnný: 16–25 m/min, automatické zásobníky a OPC-UA pro ERP integraci.',
        sk: 'Jednozmenná prevádzka: 12–18 m/min postačuje. Viaczmenná: 16–25 m/min, automatické zásobníky a OPC-UA pre ERP integráciu.',
        de: 'Einschicht: 12–18 m/min reichen. Mehrschicht: 16–25 m/min, automatische Magazine und OPC-UA für ERP-Anbindung.',
        en: 'Single-shift: 12–18 m/min is enough. Multi-shift: 16–25 m/min, automatic magazines and OPC-UA for ERP integration.',
      },
    },
    {
      name: {
        cz: 'Spočítejte rozpočet a TCO',
        sk: 'Spočítajte rozpočet a TCO',
        de: 'Budget und TCO berechnen',
        en: 'Calculate budget and TCO',
      },
      text: {
        cz: 'Zahrňte pořizovací cenu, lepidlo, energii, údržbu a životnost (15–25 let). Při menším rozpočtu zvažte ověřený použitý stroj.',
        sk: 'Zahrňte obstarávaciu cenu, lepidlo, energiu, údržbu a životnosť (15–25 rokov). Pri menšom rozpočte zvážte overený použitý stroj.',
        de: 'Anschaffungspreis, Klebstoff, Energie, Wartung und Lebensdauer (15–25 Jahre) einrechnen. Bei kleinerem Budget eine geprüfte Gebrauchtmaschine prüfen.',
        en: 'Include purchase price, glue, energy, maintenance and lifetime (15–25 years). On a smaller budget, consider a vetted used machine.',
      },
    },
    {
      name: {
        cz: 'Vyžádejte si konzultaci u Asamer',
        sk: 'Vyžiadajte si konzultáciu u Asamer',
        de: 'Beratung bei Asamer anfragen',
        en: 'Request a consultation with Asamer',
      },
      text: {
        cz: 'Asamer připraví individuální nabídku s ohledem na váš provoz, materiály a rozpočet. Konzultace v ČR, SR a Maďarsku v rodném jazyce.',
        sk: 'Asamer pripraví individuálnu ponuku s ohľadom na vašu prevádzku, materiály a rozpočet. Konzultácia v SR, ČR a Maďarsku v rodnom jazyku.',
        de: 'Asamer erstellt ein individuelles Angebot unter Berücksichtigung von Betrieb, Materialien und Budget. Beratung in CZ, SK und HU in der Landessprache.',
        en: 'Asamer prepares an individual offer based on your operation, materials and budget. Consultation in CZ, SK and HU in the local language.',
      },
    },
  ],
};
