import type { Language } from '../i18n';

export type OttCategory = 'edgebanding' | 'gluing' | 'return';

/* ------------------------------------------------------------------ */
/*  OTT category slugs – per-category localized URL segments           */
/* ------------------------------------------------------------------ */

const OTT_CATEGORY_SLUGS: Record<OttCategory, Record<Language, string>> = {
  edgebanding: {
    de: 'kantenanleimmaschinen',
    en: 'edgebanding-machines',
    cz: 'olepovacky-hran',
    sk: 'olepovacky-hran',
    hu: 'elzarogepek',
  },
  gluing: {
    de: 'klebetechnologie',
    en: 'gluing-technology',
    cz: 'lepici-technologie',
    sk: 'lepiaca-technologia',
    hu: 'ragasztasi-technologia',
  },
  return: {
    de: 'ruecktransportsysteme',
    en: 'return-systems',
    cz: 'zpetne-dopravnikove-systemy',
    sk: 'spetne-dopravnikove-systemy',
    hu: 'visszafutoszalagok',
  },
};

export const OTT_CATEGORY_SLUG_VARIANTS = [
  ...new Set(
    (Object.values(OTT_CATEGORY_SLUGS) as Record<Language, string>[]).flatMap((m) =>
      Object.values(m),
    ),
  ),
];

export const getOttCategorySlug = (cat: OttCategory, lang: Language): string =>
  OTT_CATEGORY_SLUGS[cat][lang];

export const findOttCategoryBySlug = (slug: string): OttCategory | undefined => {
  for (const [cat, langMap] of Object.entries(OTT_CATEGORY_SLUGS)) {
    if (Object.values(langMap).includes(slug)) return cat as OttCategory;
  }
  return undefined;
};

/** Build the full path for a product: /ott/{localized-category}/{model} */
export const buildOttProductPath = (lang: Language, product: OttProduct): string =>
  `/ott/${OTT_CATEGORY_SLUGS[product.category][lang]}/${product.slug}`;

/** Build product path from raw category + model slug. */
export const buildOttProductPathRaw = (
  lang: Language,
  category: OttCategory,
  modelSlug: string,
): string => `/ott/${OTT_CATEGORY_SLUGS[category][lang]}/${modelSlug}`;

/* ------------------------------------------------------------------ */
/*  Product types                                                      */
/* ------------------------------------------------------------------ */

export interface OttProduct {
  slug: string;
  name: string;
  category: OttCategory;
  tagline: Record<Language, string>;
  image: string;
  description: Record<Language, string>;
  specs: {
    length?: string;
    edgeThickness?: string;
    boardThickness?: string;
    feedSpeed?: string;
    notes?: Record<Language, string>;
  };
  /** Positioning badge: EINSTIEG | MITTEL | PROFI | FLAGGSCHIFF | ADDON | SYSTEM */
  badge?: string;
  /** Short USP line shown on hub product card */
  usp?: Record<Language, string>;
  /** Equipment list for detail page */
  equipment?: string[];
  /** Recommended companion product slugs */
  recommended?: string[];
  /** 3 short highlight bullets for detail page hero */
  highlights?: Record<Language, string[]>;
  seoTitle: Record<Language, string>;
  seoDescription: Record<Language, string>;
}

/* ------------------------------------------------------------------ */
/*  Category labels (for section headings)                             */
/* ------------------------------------------------------------------ */

export const OTT_CATEGORY_LABELS: Record<OttCategory, Record<Language, string>> = {
  edgebanding: {
    de: 'Kantenanleimmaschinen',
    en: 'Edgebanding Machines',
    cz: 'Olepovačky hran',
    sk: 'Olepovačky hrán',
    hu: 'Élzárógépek',
  },
  gluing: {
    de: 'Klebetechnologie',
    en: 'Gluing Technology',
    cz: 'Lepicí technologie',
    sk: 'Lepiaca technológia',
    hu: 'Ragasztási technológia',
  },
  return: {
    de: 'Rückführ- & Handlingsysteme',
    en: 'Return & Handling Systems',
    cz: 'Vratné a manipulační systémy',
    sk: 'Vratné a manipulačné systémy',
    hu: 'Visszaszállító és kezelőrendszerek',
  },
};

/* ------------------------------------------------------------------ */
/*  Full product catalog                                               */
/* ------------------------------------------------------------------ */

export const OTT_PRODUCTS: OttProduct[] = [
  /* ======================== EDGEBANDING ======================== */
  {
    slug: 'pacific-plus',
    name: 'Pacific+',
    category: 'edgebanding',
    image: 'https://www.ottpaul.com/fileadmin/_processed_/c/7/csm_pacific-plus_4a95031bd4.png',
    tagline: {
      de: 'Die perfekte Lösung für den Handwerker',
      en: 'The perfect solution for the craftsman',
      cz: 'Perfektní řešení pro řemeslníka',
      sk: 'Perfektné riešenie pre remeselníka',
      hu: 'A tökéletes megoldás kézművesek számára',
    },
    description: {
      de: 'Die Pacific+ ist die perfekte Lösung für den Handwerker und Tischlereibetrieb. Mit 5,7 m Baulänge, Kantenstärken von 0,3–15 mm und Plattenstärken bis 60 mm bietet sie flexible Kantenbearbeitung auf kleinstem Raum – kompakt, zuverlässig und sofort einsatzbereit.',
      en: 'The Pacific+ is the perfect solution for craftsmen and joinery workshops. With 5.7 m length, edge thicknesses from 0.3–15 mm and board thicknesses up to 60 mm, it delivers flexible edgebanding in the smallest footprint – compact, reliable and ready to use.',
      cz: 'Pacific+ je perfektní řešení pro řemeslníka a truhlářskou dílnu. S délkou 5,7 m, tloušťkou hran 0,3–15 mm a tloušťkou desek do 60 mm nabízí flexibilní olepování hran na nejmenším prostoru – kompaktní, spolehlivý a okamžitě připravený k použití.',
      sk: 'Pacific+ je perfektné riešenie pre remeselníka a stolársku dielňu. S dĺžkou 5,7 m, hrúbkou hrán 0,3–15 mm a hrúbkou dosiek do 60 mm ponúka flexibilné olepovanie hrán na najmenšom priestore.',
      hu: 'A Pacific+ a tökéletes megoldás kézművesek és asztalosműhelyek számára. 5,7 m hosszával, 0,3–15 mm élvastagságával és akár 60 mm lapvastagságával rugalmas élzárást biztosít a legkisebb helyen.',
    },
    badge: 'EINSTIEG',
    usp: { de: '18 m/min inkl. Eckenbearbeitung', en: '18 m/min incl. corner processing', cz: '18 m/min vč. zpracování rohů', sk: '18 m/min vrátane spracovania rohov', hu: '18 m/perc sarokmegmunkálással' },
    equipment: ['Fügebearbeitung', 'Kantenmagazin', 'CombiMelt', 'Kappgerät K12', 'Fräsaggregat', 'Radiusziehklinge', 'Eckenrunden AKF'],
    recommended: ['transcompact'],
    highlights: {
      de: ['Kompakte 5,7 m Bauform für Handwerk', 'Eckenbearbeitung bis 18 m/min', 'CombiMelt PUR nachrüstbar'],
      en: ['Compact 5.7 m footprint for workshops', 'Corner processing at 18 m/min', 'CombiMelt PUR retrofittable'],
      cz: ['Kompaktní 5,7 m pro řemeslníky', 'Zpracování rohů do 18 m/min', 'CombiMelt PUR dodatečně montovatelný'],
      sk: ['Kompaktná 5,7 m pre remeselníkov', 'Spracovanie rohov do 18 m/min', 'CombiMelt PUR dodatočne montovateľný'],
      hu: ['Kompakt 5,7 m kézműveseknek', 'Sarokmegmunkálás 18 m/perc', 'CombiMelt PUR utólag felszerelhető'],
    },
    specs: {
      length: '5.7 m',
      edgeThickness: '0.3–15 mm',
      boardThickness: '60 mm',
      feedSpeed: '18 m/min',
      notes: {
        de: 'Einstiegsmodell für Handwerksbetriebe',
        en: 'Entry-level for craft workshops',
        cz: 'Vstupní model pro řemeslné dílny',
        sk: 'Vstupný model pre remeselné dielne',
        hu: 'Belépő szintű modell kézműves műhelyekhez',
      },
    },
    seoTitle: {
      de: 'Kantenanleimmaschine Pacific+ OTT kaufen – Asamer Händler CZ/SK/HU',
      en: 'Edgebander Pacific+ OTT – Buy via Asamer, dealer for CZ/SK/HU',
      cz: 'Olepovačka hran Pacific+ OTT – koupit přes Asamer',
      sk: 'Olepovačka hrán Pacific+ OTT – kúpiť cez Asamer',
      hu: 'Élzárógép Pacific+ OTT – vásárlás Asamer-en keresztül',
    },
    seoDescription: {
      de: 'Pacific+ – kompakte Kantenanleimmaschine für Einsteiger. 5,7 m Baulänge, Kantenstärke 0,3–15 mm. Asamer: autorisierter OTT-Händler für CZ, SK & HU.',
      en: 'Pacific+ – compact entry-level edgebander. 5.7 m length, edge thickness 0.3–15 mm. Asamer: authorized OTT dealer for CZ, SK & HU.',
      cz: 'Pacific+ – kompaktní olepovačka hran pro začátečníky. Délka 5,7 m, tloušťka hrany 0,3–15 mm. Asamer: autorizovaný prodejce OTT pro CZ, SK a HU.',
      sk: 'Pacific+ – kompaktná olepovačka hrán pre začiatočníkov. Dĺžka 5,7 m, hrúbka hrany 0,3–15 mm. Asamer: autorizovaný predajca OTT pre CZ, SK a HU.',
      hu: 'Pacific+ – kompakt belépő szintű élzárógép. 5,7 m hossz, élvastagság 0,3–15 mm. Asamer: hivatalos OTT viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'tornado-plus',
    name: 'Tornado+',
    category: 'edgebanding',
    image: 'https://www.ottpaul.com/fileadmin/_processed_/b/a/csm_tornado-plus-ansicht-re_207e512b4f.png',
    tagline: {
      de: 'Kompakt und vielseitig',
      en: 'Compact and versatile',
      cz: 'Kompaktní a všestranný',
      sk: 'Kompaktný a všestranný',
      hu: 'Kompakt és sokoldalú',
    },
    description: {
      de: 'Die Tornado+ überzeugt mit 6,2 m Baulänge, Kantenstärken von 0,3–15 mm und Plattenstärken bis 60 mm. Ihre vielseitige Ausstattung macht sie zur perfekten Wahl für mittelgroße Betriebe mit wechselnden Anforderungen.',
      en: 'The Tornado+ impresses with 6.2 m length, edge thicknesses from 0.3–15 mm and board thicknesses up to 60 mm. Its versatile equipment makes it the perfect choice for medium-sized operations with varying requirements.',
      cz: 'Tornado+ přesvědčí délkou 6,2 m, tloušťkou hran 0,3–15 mm a tloušťkou desek do 60 mm. Díky všestranné výbavě je ideální volbou pro střední provozy s měnícími se požadavky.',
      sk: 'Tornado+ presvedčí dĺžkou 6,2 m, hrúbkou hrán 0,3–15 mm a hrúbkou dosiek do 60 mm. Vďaka všestrannej výbave je ideálnou voľbou pre stredné prevádzky.',
      hu: 'A Tornado+ 6,2 m-es hosszával, 0,3–15 mm élvastagságával és akár 60 mm lapvastagságával győz meg. Sokoldalú felszereltsége tökéletes választás változó igényű középüzemek számára.',
    },
    badge: 'MITTEL',
    usp: { de: 'Bewährtestes Modell der OTT-Serie', en: 'Most proven model in the OTT range', cz: 'Nejověřenější model řady OTT', sk: 'Najoveriteľnejší model radu OTT', hu: 'Az OTT sorozat legbevált modellje' },
    equipment: ['Fügebearbeitung', 'Kantenmagazin', 'CombiMelt', 'Kappgerät', 'Fräsaggregat', 'Ziehklinge'],
    recommended: ['transcompact'],
    highlights: {
      de: ['Bewährtestes Modell der OTT-Reihe', 'Vielseitige Ausstattung für variantenreiche Fertigung', 'Kantenstärke 0,3–15 mm'],
      en: ['Most proven model in the OTT range', 'Versatile setup for mixed production', 'Edge thickness 0.3–15 mm'],
      cz: ['Nejprověřenější model řady OTT', 'Všestranné vybavení pro různorodou výrobu', 'Tloušťka hrany 0,3–15 mm'],
      sk: ['Najoveriteľnejší model radu OTT', 'Všestranné vybavenie pre rôznorodú výrobu', 'Hrúbka hrany 0,3–15 mm'],
      hu: ['Az OTT sorozat legbevált modellje', 'Sokoldalú felszerelés vegyes gyártáshoz', 'Élvastagság 0,3–15 mm'],
    },
    specs: {
      length: '6.2 m',
      edgeThickness: '0.3–15 mm',
      boardThickness: '60 mm',
      feedSpeed: '12–18 m/min',
    },
    seoTitle: {
      de: 'Kantenanleimmaschine Tornado+ OTT kaufen – Asamer Händler CZ/SK/HU',
      en: 'Edgebander Tornado+ OTT – Buy via Asamer, dealer for CZ/SK/HU',
      cz: 'Olepovačka hran Tornado+ OTT – koupit přes Asamer',
      sk: 'Olepovačka hrán Tornado+ OTT – kúpiť cez Asamer',
      hu: 'Élzárógép Tornado+ OTT – vásárlás Asamer-en keresztül',
    },
    seoDescription: {
      de: 'Tornado+ – vielseitige Kantenanleimmaschine für mittlere Betriebe. 6,2 m Baulänge, 0,3–15 mm Kantenstärke. Asamer: autorisierter OTT-Händler für CZ, SK & HU.',
      en: 'Tornado+ – versatile edgebander for mid-sized workshops. 6.2 m length, 0.3–15 mm edge thickness. Asamer: authorized OTT dealer for CZ, SK & HU.',
      cz: 'Tornado+ – všestranná olepovačka hran pro střední provozy. Délka 6,2 m, tloušťka hrany 0,3–15 mm. Asamer: autorizovaný prodejce OTT pro CZ, SK a HU.',
      sk: 'Tornado+ – všestranná olepovačka hrán pre stredné prevádzky. Dĺžka 6,2 m, hrúbka hrany 0,3–15 mm. Asamer: autorizovaný predajca OTT pre CZ, SK a HU.',
      hu: 'Tornado+ – sokoldalú élzárógép közepes üzemekhez. 6,2 m hossz, 0,3–15 mm élvastagság. Asamer: hivatalos OTT viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'flexedge',
    name: 'FlexEdge',
    category: 'edgebanding',
    image: 'https://www.ottpaul.com/fileadmin/_processed_/b/e/csm_flex-edge-01-spiegel_f344a91e0b.png',
    tagline: {
      de: 'Flexibel und professionell',
      en: 'Flexible and professional',
      cz: 'Flexibilní a profesionální',
      sk: 'Flexibilný a profesionálny',
      hu: 'Rugalmas és professzionális',
    },
    description: {
      de: 'Die FlexEdge bietet professionelle Kantenbearbeitung mit 7,1 m Baulänge und Vorschubgeschwindigkeiten von 12–20 m/min. Ausgestattet mit Beckhoff 18,5"-Steuerung für maximale Flexibilität und Industrie-4.0-Anbindung.',
      en: 'The FlexEdge offers professional edgebanding with 7.1 m length and feed speeds of 12–20 m/min. Equipped with a Beckhoff 18.5" control for maximum flexibility and Industry 4.0 connectivity.',
      cz: 'FlexEdge nabízí profesionální olepování hran s délkou 7,1 m a rychlostí posuvu 12–20 m/min. Vybavena řídicím systémem Beckhoff 18,5" pro maximální flexibilitu a připojení k Průmyslu 4.0.',
      sk: 'FlexEdge ponúka profesionálne olepovanie hrán s dĺžkou 7,1 m a rýchlosťou posuvu 12–20 m/min. Vybavená riadiacim systémom Beckhoff 18,5" pre maximálnu flexibilitu a pripojenie k Priemyslu 4.0.',
      hu: 'A FlexEdge professzionális élzárást kínál 7,1 m-es hosszával és 12–20 m/perc előtolási sebességgel. Beckhoff 18,5"-os vezérléssel van felszerelve a maximális rugalmasság és Ipar 4.0 csatlakoztathatóság érdekében.',
    },
    badge: 'NEU',
    usp: { de: 'Neueste Maschine – schließt Lücke zwischen Tornado+ und Storm+', en: 'Newest machine – bridges gap between Tornado+ and Storm+', cz: 'Nejnovější stroj – překlenuje mezeru mezi Tornado+ a Storm+', sk: 'Najnovší stroj – preklenuje medzeru medzi Tornado+ a Storm+', hu: 'Legújabb gép – áthidalja a Tornado+ és Storm+ közötti rést' },
    equipment: ['Beckhoff 18,5" Steuerung', 'Fügebearbeitung', 'CombiMelt', 'Fräsaggregat', 'Ziehklinge', 'Eckenrunden'],
    recommended: ['transcompact', 'translift'],
    highlights: {
      de: ['Beckhoff 18,5" OPC-UA Steuerung serienmäßig', 'Schließt Lücke zwischen Tornado+ und Storm+', 'NEU: Vorschub 12–20 m/min'],
      en: ['Beckhoff 18.5" OPC-UA control as standard', 'Bridges gap between Tornado+ and Storm+', 'NEW: Feed speed 12–20 m/min'],
      cz: ['Beckhoff 18,5" OPC-UA řízení standardně', 'Překlenuje mezeru Tornado+ a Storm+', 'NOVÝ: posuv 12–20 m/min'],
      sk: ['Beckhoff 18,5" OPC-UA riadenie štandardne', 'Preklenuje medzeru Tornado+ a Storm+', 'NOVÝ: posuv 12–20 m/min'],
      hu: ['Beckhoff 18,5" OPC-UA vezérlés alapfelszerelés', 'Tornado+ és Storm+ közötti rés áthidalása', 'ÚJ: előtolás 12–20 m/perc'],
    },
    specs: {
      length: '7.1 m',
      edgeThickness: '0.3–15 mm',
      feedSpeed: '12–20 m/min',
      notes: {
        de: 'Beckhoff 18,5" Steuerung',
        en: 'Beckhoff 18.5" control',
        cz: 'Řídicí systém Beckhoff 18,5"',
        sk: 'Riadiaci systém Beckhoff 18,5"',
        hu: 'Beckhoff 18,5" vezérlés',
      },
    },
    seoTitle: {
      de: 'Kantenanleimmaschine FlexEdge OTT kaufen – Asamer Händler CZ/SK/HU',
      en: 'Edgebander FlexEdge OTT – Buy via Asamer, dealer for CZ/SK/HU',
      cz: 'Olepovačka hran FlexEdge OTT – koupit přes Asamer',
      sk: 'Olepovačka hrán FlexEdge OTT – kúpiť cez Asamer',
      hu: 'Élzárógép FlexEdge OTT – vásárlás Asamer-en keresztül',
    },
    seoDescription: {
      de: 'FlexEdge – professionelle Kantenanleimmaschine mit Beckhoff-Steuerung. 7,1 m, 12–20 m/min Vorschub. Asamer: autorisierter OTT-Händler für CZ, SK & HU.',
      en: 'FlexEdge – professional edgebander with Beckhoff 18.5" control. 7.1 m, 12–20 m/min feed speed. Asamer: authorized OTT dealer for CZ, SK & HU.',
      cz: 'FlexEdge – profesionální olepovačka hran s řízením Beckhoff. 7,1 m, posuv 12–20 m/min. Asamer: autorizovaný prodejce OTT pro CZ, SK a HU.',
      sk: 'FlexEdge – profesionálna olepovačka hrán s riadením Beckhoff. 7,1 m, posuv 12–20 m/min. Asamer: autorizovaný predajca OTT pre CZ, SK a HU.',
      hu: 'FlexEdge – professzionális élzárógép Beckhoff vezérléssel. 7,1 m, 12–20 m/perc előtolás. Asamer: hivatalos OTT viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'storm-plus',
    name: 'Storm+',
    category: 'edgebanding',
    image: 'https://www.ottpaul.com/fileadmin/_processed_/2/9/csm_storm2020-spiegel-001_4baf02d446.png',
    tagline: {
      de: 'Schnell und verlässlich',
      en: 'Fast and reliable',
      cz: 'Rychlý a spolehlivý',
      sk: 'Rýchly a spoľahlivý',
      hu: 'Gyors és megbízható',
    },
    description: {
      de: 'Die Storm+ verbindet Geschwindigkeit und Verlässlichkeit in einer 7,8 m langen Hochleistungsmaschine. Kantenstärken bis 15 mm, Plattenstärken bis 60 mm und eine robuste Bauweise machen sie zur ersten Wahl für den industriellen Dauerbetrieb.',
      en: 'The Storm+ combines speed and reliability in a 7.8 m high-performance machine. Edge thicknesses up to 15 mm, board thicknesses up to 60 mm and robust construction make it the first choice for continuous industrial operation.',
      cz: 'Storm+ spojuje rychlost a spolehlivost v 7,8 m dlouhém vysokovýkonném stroji. Tloušťka hran až 15 mm, tloušťka desek do 60 mm a robustní konstrukce ji činí první volbou pro průmyslový nepřetržitý provoz.',
      sk: 'Storm+ spája rýchlosť a spoľahlivosť v 7,8 m dlhom vysokovýkonnom stroji. Hrúbka hrán až 15 mm, hrúbka dosiek do 60 mm a robustná konštrukcia ju robia prvou voľbou pre priemyselnú nepretržitú prevádzku.',
      hu: 'A Storm+ 7,8 m-es nagyteljesítményű gépben egyesíti a sebességet és a megbízhatóságot. A 15 mm-ig terjedő élvastagság, 60 mm-ig terjedő lapvastagság és a robusztus kialakítás az ipari folyamatos üzemeltetés első számú választása.',
    },
    badge: 'PROFI',
    usp: { de: 'Plattenstärke bis 60 mm – industrieller Dauerbetrieb', en: 'Board thickness up to 60 mm – continuous industrial operation', cz: 'Tloušťka desek do 60 mm – průmyslový nepřetržitý provoz', sk: 'Hrúbka dosiek do 60 mm – priemyselná nepretržitá prevádzka', hu: 'Lapvastagság 60 mm-ig – folyamatos ipari üzem' },
    equipment: ['CombiMelt PUR', 'Fräsaggregat', 'Kappgerät', 'Ziehklinge', 'Eckenrunden AKF', 'Druckzone'],
    recommended: ['translift', 'transedge'],
    highlights: {
      de: ['Industrieller Dauerbetrieb bis 60 mm Platte', 'Robuste Bauweise für hohe Stückzahlen', 'Vorschub bis 22 m/min'],
      en: ['Industrial continuous operation up to 60 mm', 'Robust build for high-volume production', 'Feed speed up to 22 m/min'],
      cz: ['Průmyslový nepřetržitý provoz do 60 mm', 'Robustní konstrukce pro velké série', 'Posuv do 22 m/min'],
      sk: ['Priemyselná nepretržitá prevádzka do 60 mm', 'Robustná konštrukcia pre veľké série', 'Posuv do 22 m/min'],
      hu: ['Ipari folyamatos üzem 60 mm-ig', 'Robusztus kialakítás nagy sorozatokhoz', 'Előtolás 22 m/perc-ig'],
    },
    specs: {
      length: '7.8 m',
      edgeThickness: '0.3–15 mm',
      boardThickness: '60 mm',
      feedSpeed: '12–22 m/min',
    },
    seoTitle: {
      de: 'Kantenanleimmaschine Storm+ OTT kaufen – Asamer Händler CZ/SK/HU',
      en: 'Edgebander Storm+ OTT – Buy via Asamer, dealer for CZ/SK/HU',
      cz: 'Olepovačka hran Storm+ OTT – koupit přes Asamer',
      sk: 'Olepovačka hrán Storm+ OTT – kúpiť cez Asamer',
      hu: 'Élzárógép Storm+ OTT – vásárlás Asamer-en keresztül',
    },
    seoDescription: {
      de: 'Storm+ – schnelle Kantenanleimmaschine für Dauerbetrieb. 7,8 m, Kantenstärke 0,3–15 mm. Asamer: autorisierter OTT-Händler für CZ, SK & HU.',
      en: 'Storm+ – fast edgebander for continuous industrial operation. 7.8 m, edge thickness 0.3–15 mm. Asamer: authorized OTT dealer for CZ, SK & HU.',
      cz: 'Storm+ – rychlá olepovačka hran pro nepřetržitý provoz. 7,8 m, tloušťka hrany 0,3–15 mm. Asamer: autorizovaný prodejce OTT pro CZ, SK a HU.',
      sk: 'Storm+ – rýchla olepovačka hrán pre nepretržitú prevádzku. 7,8 m, hrúbka hrany 0,3–15 mm. Asamer: autorizovaný predajca OTT pre CZ, SK a HU.',
      hu: 'Storm+ – gyors élzárógép folyamatos ipari üzemeltetéshez. 7,8 m, élvastagság 0,3–15 mm. Asamer: hivatalos OTT viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'strongedge',
    name: 'StrongEdge',
    category: 'edgebanding',
    image: 'https://www.ottpaul.com/fileadmin/_processed_/1/0/csm_strongedge_a4f3c0a00e.png',
    tagline: {
      de: 'Stark und professionell',
      en: 'Strong and professional',
      cz: 'Silný a profesionální',
      sk: 'Silný a profesionálny',
      hu: 'Erős és professzionális',
    },
    description: {
      de: 'Die StrongEdge ist auf schwere Kanten bis 25 mm ausgelegt. Mit einer Baulänge von 8,6 m und Vorschubgeschwindigkeiten von 12–20 m/min eignet sie sich besonders für den professionellen Möbel- und Innenausbau.',
      en: 'The StrongEdge is designed for heavy edges up to 25 mm. With a length of 8.6 m and feed speeds of 12–20 m/min, it is particularly suited for professional furniture and interior construction.',
      cz: 'StrongEdge je navržena pro silné hrany až 25 mm. S délkou 8,6 m a rychlostí posuvu 12–20 m/min je obzvláště vhodná pro profesionální nábytkářství a interiérovou výstavbu.',
      sk: 'StrongEdge je navrhnutá pre silné hrany až 25 mm. S dĺžkou 8,6 m a rýchlosťou posuvu 12–20 m/min je obzvlášť vhodná pre profesionálne nábytkárstvo a interiérovú výstavbu.',
      hu: 'A StrongEdge akár 25 mm-es vastag élekhez lett tervezve. 8,6 m-es hosszával és 12–20 m/perc előtolási sebességgel különösen alkalmas professzionális bútor- és belsőépítészeti munkákhoz.',
    },
    badge: 'PROFI',
    usp: { de: 'Für Kanten bis 25 mm – ideal für Massivholzprodukte', en: 'For edges up to 25 mm – ideal for solid wood products', cz: 'Pro hrany do 25 mm – ideální pro masivní dřevo', sk: 'Pre hrany do 25 mm – ideálne pre masívne drevo', hu: 'Élekhez 25 mm-ig – ideális tömörfa termékekhez' },
    equipment: ['CombiMelt PUR', 'Schwere Fräsaggregate', 'Kappgerät', 'Ziehklinge', 'Eckenrunden', 'Druckzone'],
    recommended: ['translift', 'transedge'],
    highlights: {
      de: ['Einzige OTT-Maschine für Kanten bis 25 mm', 'Ideal für Massivholz und Türfronten', 'Vorschub 12–20 m/min'],
      en: ['Only OTT machine for edges up to 25 mm', 'Ideal for solid wood and door fronts', 'Feed speed 12–20 m/min'],
      cz: ['Jediný stroj OTT pro hrany do 25 mm', 'Ideální pro masiv a dveřní čela', 'Posuv 12–20 m/min'],
      sk: ['Jediný stroj OTT pre hrany do 25 mm', 'Ideálne pre masív a dverné čelá', 'Posuv 12–20 m/min'],
      hu: ['Az egyetlen OTT gép 25 mm-es élekhez', 'Ideális tömörfához és ajtófrontokhoz', 'Előtolás 12–20 m/perc'],
    },
    specs: {
      length: '8.6 m',
      edgeThickness: '0.3–25 mm',
      feedSpeed: '12–20 m/min',
    },
    seoTitle: {
      de: 'Kantenanleimmaschine StrongEdge OTT kaufen – Asamer Händler CZ/SK/HU',
      en: 'Edgebander StrongEdge OTT – Buy via Asamer, dealer for CZ/SK/HU',
      cz: 'Olepovačka hran StrongEdge OTT – koupit přes Asamer',
      sk: 'Olepovačka hrán StrongEdge OTT – kúpiť cez Asamer',
      hu: 'Élzárógép StrongEdge OTT – vásárlás Asamer-en keresztül',
    },
    seoDescription: {
      de: 'StrongEdge – Kantenanleimmaschine für schwere Kanten bis 25 mm. 8,6 m, 12–20 m/min Vorschub. Asamer: autorisierter OTT-Händler für CZ, SK & HU.',
      en: 'StrongEdge – edgebander for heavy edges up to 25 mm. 8.6 m, 12–20 m/min feed speed. Asamer: authorized OTT dealer for CZ, SK & HU.',
      cz: 'StrongEdge – olepovačka hran pro silné hrany do 25 mm. 8,6 m, posuv 12–20 m/min. Asamer: autorizovaný prodejce OTT pro CZ, SK a HU.',
      sk: 'StrongEdge – olepovačka hrán pre silné hrany do 25 mm. 8,6 m, posuv 12–20 m/min. Asamer: autorizovaný predajca OTT pre CZ, SK a HU.',
      hu: 'StrongEdge – élzárógép nehéz élekhez 25 mm-ig. 8,6 m, 12–20 m/perc előtolás. Asamer: hivatalos OTT viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'topedge',
    name: 'TopEdge',
    category: 'edgebanding',
    image: 'https://www.ottpaul.com/fileadmin/_processed_/e/5/csm_topedge_4c89d6967e.jpg',
    tagline: {
      de: 'Kantenleimen auf höchstem Niveau',
      en: 'Edgebanding at the highest level',
      cz: 'Olepování hran na nejvyšší úrovni',
      sk: 'Olepovanie hrán na najvyššej úrovni',
      hu: 'Élzárás a legmagasabb szinten',
    },
    description: {
      de: 'Die TopEdge ist das Flaggschiff der OTT-Produktreihe. In S- und L-Varianten mit 9,2–10,2 m Baulänge verfügbar, verarbeitet sie Kanten bis 20/25 mm und Werkstücke bis 60/80 mm Stärke – höchste Präzision für anspruchsvollste Anforderungen.',
      en: 'The TopEdge is the flagship of the OTT product range. Available in S and L variants with 9.2–10.2 m length, it processes edges up to 20/25 mm and workpieces up to 60/80 mm thickness – the highest precision for the most demanding requirements.',
      cz: 'TopEdge je vlajková loď produktové řady OTT. K dispozici ve variantách S a L s délkou 9,2–10,2 m zpracovává hrany až 20/25 mm a obrobky do tloušťky 60/80 mm – nejvyšší přesnost pro nejnáročnější požadavky.',
      sk: 'TopEdge je vlajková loď produktového radu OTT. K dispozícii vo variantoch S a L s dĺžkou 9,2–10,2 m spracováva hrany až 20/25 mm a obrobky do hrúbky 60/80 mm – najvyššia presnosť pre najnáročnejšie požiadavky.',
      hu: 'A TopEdge az OTT termékcsalád zászlóshajója. S és L változatban, 9,2–10,2 m hosszal kapható, akár 20/25 mm-es éleket és 60/80 mm vastag munkadarabokat dolgoz fel – a legmagasabb precizitás a legigényesebb követelményekhez.',
    },
    badge: 'FLAGGSCHIFF',
    usp: { de: 'S (9,2 m) oder L (10,2 m) – Plattenstärke bis 80 mm', en: 'S (9.2 m) or L (10.2 m) – board thickness up to 80 mm', cz: 'S (9,2 m) nebo L (10,2 m) – tloušťka desek do 80 mm', sk: 'S (9,2 m) alebo L (10,2 m) – hrúbka dosiek do 80 mm', hu: 'S (9,2 m) vagy L (10,2 m) – lapvastagság 80 mm-ig' },
    equipment: ['CombiMelt PUR', 'Beckhoff Steuerung', 'Fräsaggregat', 'Kappgerät', 'Ziehklinge', 'Eckenrunden AKF', 'Druckzone', 'Profilziehklinge'],
    recommended: ['translift', 'transedge'],
    highlights: {
      de: ['Flaggschiff — S (9,2 m) oder L (10,2 m)', 'Plattenstärke bis 80 mm, Kante bis 25 mm', 'Höchste Präzision für Industrie-Linienbetrieb'],
      en: ['Flagship — S (9.2 m) or L (10.2 m)', 'Board thickness up to 80 mm, edge up to 25 mm', 'Highest precision for industrial line operation'],
      cz: ['Vlajková loď — S (9,2 m) nebo L (10,2 m)', 'Tloušťka desky do 80 mm, hrana do 25 mm', 'Nejvyšší přesnost pro průmyslový provoz'],
      sk: ['Vlajková loď — S (9,2 m) alebo L (10,2 m)', 'Hrúbka dosky do 80 mm, hrana do 25 mm', 'Najvyššia presnosť pre priemyselnú prevádzku'],
      hu: ['Zászlóshajó — S (9,2 m) vagy L (10,2 m)', 'Lapvastagság 80 mm-ig, él 25 mm-ig', 'Legmagasabb precizitás ipari vonalüzemhez'],
    },
    specs: {
      length: '9.2–10.2 m',
      edgeThickness: '0.3–20/25 mm',
      boardThickness: '60/80 mm',
      feedSpeed: '12–22 m/min',
      notes: {
        de: 'S-Variante: bis 60 mm / 20 mm Kante · L-Variante: bis 80 mm / 25 mm Kante',
        en: 'S variant: up to 60 mm / 20 mm edge · L variant: up to 80 mm / 25 mm edge',
        cz: 'Varianta S: do 60 mm / 20 mm hrana · Varianta L: do 80 mm / 25 mm hrana',
        sk: 'Variant S: do 60 mm / 20 mm hrana · Variant L: do 80 mm / 25 mm hrana',
        hu: 'S változat: 60 mm / 20 mm élig · L változat: 80 mm / 25 mm élig',
      },
    },
    seoTitle: {
      de: 'Kantenanleimmaschine TopEdge OTT kaufen – Asamer Händler CZ/SK/HU',
      en: 'Edgebander TopEdge OTT – Buy via Asamer, dealer for CZ/SK/HU',
      cz: 'Olepovačka hran TopEdge OTT – koupit přes Asamer',
      sk: 'Olepovačka hrán TopEdge OTT – kúpiť cez Asamer',
      hu: 'Élzárógép TopEdge OTT – vásárlás Asamer-en keresztül',
    },
    seoDescription: {
      de: 'TopEdge – Flaggschiff-Kantenanleimmaschine in S/L-Varianten. 9,2–10,2 m, Kanten bis 25 mm. Asamer: autorisierter OTT-Händler für CZ, SK & HU.',
      en: 'TopEdge – flagship edgebander in S/L variants. 9.2–10.2 m, edges up to 25 mm. Asamer: authorized OTT dealer for CZ, SK & HU.',
      cz: 'TopEdge – vlajková olepovačka hran ve variantách S/L. 9,2–10,2 m, hrany do 25 mm. Asamer: autorizovaný prodejce OTT pro CZ, SK a HU.',
      sk: 'TopEdge – vlajková olepovačka hrán vo variantoch S/L. 9,2–10,2 m, hrany do 25 mm. Asamer: autorizovaný predajca OTT pre CZ, SK a HU.',
      hu: 'TopEdge – zászlóshajó élzárógép S/L változatban. 9,2–10,2 m, élek 25 mm-ig. Asamer: hivatalos OTT viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'door-edition',
    name: 'DoorEdition',
    category: 'edgebanding',
    image: 'https://www.ottpaul.com/fileadmin/_processed_/6/0/csm_Titelseite_Door_MINI__78df2f3ba3.jpg',
    tagline: {
      de: 'Für Türenproduktion',
      en: 'For door production',
      cz: 'Pro výrobu dveří',
      sk: 'Pre výrobu dverí',
      hu: 'Ajtógyártáshoz',
    },
    description: {
      de: 'Die DoorEdition ist eine maßgeschneiderte OTT-Lösung für die Türenproduktion. Ab 8 m Baulänge mit spezieller Tür- und Faltleimtechnik ist sie auf die spezifischen Anforderungen der Türenfertigung optimiert.',
      en: 'The DoorEdition is a custom OTT solution for door production. From 8 m in length with specialized door and fold-gluing technology, it is optimized for the specific requirements of door manufacturing.',
      cz: 'DoorEdition je zakázkové řešení OTT pro výrobu dveří. Od 8 m délky se specializovanou technologií lepení dveří a skládacích hran je optimalizována pro specifické požadavky výroby dveří.',
      sk: 'DoorEdition je zákazkové riešenie OTT pre výrobu dverí. Od 8 m dĺžky so špecializovanou technológiou lepenia dverí a skladacích hrán je optimalizovaná pre špecifické požiadavky výroby dverí.',
      hu: 'A DoorEdition egyedi OTT megoldás ajtógyártáshoz. 8 m-es hosszúságtól, speciális ajtó- és hajtogatóragasztási technológiával, az ajtógyártás specifikus követelményeire van optimalizálva.',
    },
    badge: 'SPEZIAL',
    usp: { de: 'Einzige OTT-Maschine für Türproduktion – kein HOMAG-Pendant in dieser Preisklasse', en: 'Only OTT machine for door production – no HOMAG equivalent at this price point', cz: 'Jediný stroj OTT pro výrobu dveří – bez ekvivalentu HOMAG v této cenové kategorii', sk: 'Jediný stroj OTT pre výrobu dverí – bez ekvivalentu HOMAG v tejto cenovej kategórii', hu: 'Az egyetlen OTT gép ajtógyártáshoz – nincs HOMAG megfelelője ebben az árkategóriában' },
    equipment: ['Tür-Faltleimtechnik', 'CombiMelt PUR', 'Spezial-Fräsaggregat', 'Individuelle Konfiguration'],
    recommended: ['translift'],
    highlights: {
      de: ['Einzige OTT-Lösung für Türenproduktion', 'Spezielle Türfalt- und Umleimtechnik', 'Kein HOMAG-Äquivalent in dieser Preisklasse'],
      en: ['Only OTT solution for door manufacturing', 'Specialized door fold and edgebanding tech', 'No HOMAG equivalent at this price point'],
      cz: ['Jediné řešení OTT pro výrobu dveří', 'Speciální technika lepení a olemování dveří', 'Bez ekvivalentu HOMAG v této cenové třídě'],
      sk: ['Jediné riešenie OTT pre výrobu dverí', 'Špeciálna technika lepenia a olemovania dverí', 'Bez ekvivalentu HOMAG v tejto cenovej triede'],
      hu: ['Az egyetlen OTT megoldás ajtógyártáshoz', 'Speciális ajtóhajtogató és élzáró technika', 'Nincs HOMAG megfelelő ebben az árkategóriában'],
    },
    specs: {
      length: '8 m+',
      edgeThickness: 'door/fold glue',
      notes: {
        de: 'Individuelle Lösung von OTT',
        en: 'Custom solution from OTT',
        cz: 'Individuální řešení od OTT',
        sk: 'Individuálne riešenie od OTT',
        hu: 'Egyedi megoldás az OTT-tól',
      },
    },
    seoTitle: {
      de: 'Kantenanleimmaschine DoorEdition OTT kaufen – Asamer Händler CZ/SK/HU',
      en: 'Edgebander DoorEdition OTT – Buy via Asamer, dealer for CZ/SK/HU',
      cz: 'Olepovačka hran DoorEdition OTT – koupit přes Asamer',
      sk: 'Olepovačka hrán DoorEdition OTT – kúpiť cez Asamer',
      hu: 'Élzárógép DoorEdition OTT – vásárlás Asamer-en keresztül',
    },
    seoDescription: {
      de: 'DoorEdition – Kantenanleimmaschine für Türenproduktion. Ab 8 m, Spezial-Faltleimtechnik. Asamer: autorisierter OTT-Händler für CZ, SK & HU.',
      en: 'DoorEdition – edgebander for door production. From 8 m, specialized fold-gluing technology. Asamer: authorized OTT dealer for CZ, SK & HU.',
      cz: 'DoorEdition – olepovačka hran pro výrobu dveří. Od 8 m, speciální skládací lepení. Asamer: autorizovaný prodejce OTT pro CZ, SK a HU.',
      sk: 'DoorEdition – olepovačka hrán pre výrobu dverí. Od 8 m, špeciálne skladacie lepenie. Asamer: autorizovaný predajca OTT pre CZ, SK a HU.',
      hu: 'DoorEdition – élzárógép ajtógyártáshoz. 8 m-től, speciális hajtogatóragasztás. Asamer: hivatalos OTT viszonteladó CZ, SK és HU.',
    },
  },

  /* ======================== GLUING TECHNOLOGY ======================== */
  {
    slug: 'combimelt',
    name: 'CombiMelt',
    category: 'gluing',
    image: 'https://www.ottpaul.com/fileadmin/_processed_/5/6/csm_ott-130319-0628-2_f3762079d4.jpg',
    tagline: {
      de: 'Servicestation für EVA- und PUR-Leimverarbeitung',
      en: 'Service station for EVA and PUR glue processing',
      cz: 'Servisní stanice pro zpracování EVA a PUR lepidel',
      sk: 'Servisná stanica pre spracovanie EVA a PUR lepidiel',
      hu: 'Szervizállomás EVA és PUR ragasztó feldolgozáshoz',
    },
    description: {
      de: 'Das CombiMelt ist eine komplette Servicestation für die Verarbeitung von EVA- und PUR-Klebstoffen. Mit zwei Behältern ermöglicht es den schnellen Wechsel zwischen Leimtypen für wasserfeste, saubere Leimfugen. Als externes Aufschmelzsystem lässt es sich an verschiedene OTT-Kantenanleimmaschinen anbinden.',
      en: 'The CombiMelt is a complete service station for processing EVA and PUR adhesives. With two containers, it enables quick switching between adhesive types for waterproof, clean glue lines. As an external melting system, it can be connected to various OTT edgebanders.',
      cz: 'CombiMelt je kompletní servisní stanice pro zpracování EVA a PUR lepidel. Se dvěma nádobami umožňuje rychlý přechod mezi typy lepidel pro vodotěsné, čisté lepicí spáry. Jako externí tavicí systém ho lze připojit k různým olepovačkám OTT.',
      sk: 'CombiMelt je kompletná servisná stanica pre spracovanie EVA a PUR lepidiel. S dvoma nádobami umožňuje rýchly prechod medzi typmi lepidiel pre vodotesné, čisté lepiace škáry. Ako externý taviaci systém ho možno pripojiť k rôznym olepovačkám OTT.',
      hu: 'A CombiMelt komplett szervizállomás EVA és PUR ragasztók feldolgozásához. Két tartályával lehetővé teszi a gyors váltást ragasztótípusok között vízálló, tiszta ragasztási vonalakhoz. Külső olvasztórendszerként különböző OTT élzárógépekhez csatlakoztatható.',
    },
    badge: 'ADDON',
    usp: { de: 'Für EVA + PUR – komplette Servicestation erhältlich', en: 'For EVA + PUR – complete service station available', cz: 'Pro EVA + PUR – kompletní servisní stanice', sk: 'Pre EVA + PUR – kompletná servisná stanica', hu: 'EVA + PUR-hoz – komplett szervizállomás' },
    equipment: ['Top-Driven-Roller (patentiert)', 'EVA-Behälter', 'PUR-Behälter', 'Schnellwechselsystem', 'Servicestation'],
    specs: {
      notes: {
        de: 'Komplette Servicestation · EVA- und PUR-Leimverarbeitung · zwei Behälter',
        en: 'Complete service station · EVA and PUR adhesive processing · two containers',
        cz: 'Kompletní servisní stanice · zpracování EVA a PUR · dvě nádoby',
        sk: 'Kompletná servisná stanica · spracovanie EVA a PUR · dve nádoby',
        hu: 'Komplett szervizállomás · EVA és PUR feldolgozás · két tartály',
      },
    },
    seoTitle: {
      de: 'PUR-Leimsystem CombiMelt OTT – Asamer Händler CZ/SK/HU',
      en: 'PUR Glue System CombiMelt OTT – Asamer dealer CZ/SK/HU',
      cz: 'Lepicí systém PUR CombiMelt OTT – Asamer prodejce CZ/SK/HU',
      sk: 'Lepiaci systém PUR CombiMelt OTT – Asamer predajca CZ/SK/HU',
      hu: 'PUR ragasztórendszer CombiMelt OTT – Asamer viszonteladó CZ/SK/HU',
    },
    seoDescription: {
      de: 'CombiMelt – PUR-Aufschmelzsystem für wasserfeste Leimfugen. Nachrüstbar für alle OTT-Modelle. Asamer: autorisierter OTT-Händler für CZ, SK & HU.',
      en: 'CombiMelt – PUR melting system for waterproof glue lines. Retrofittable to all OTT models. Asamer: authorized OTT dealer for CZ, SK & HU.',
      cz: 'CombiMelt – PUR tavicí systém pro vodotěsné spáry. Montovatelný na všechny modely OTT. Asamer: autorizovaný prodejce OTT pro CZ, SK a HU.',
      sk: 'CombiMelt – PUR taviaci systém pre vodotesné škáry. Montovateľný na všetky modely OTT. Asamer: autorizovaný predajca OTT pre CZ, SK a HU.',
      hu: 'CombiMelt – PUR olvasztórendszer vízálló ragasztáshoz. Minden OTT modellhez illeszthető. Asamer: hivatalos OTT viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'bluedge',
    name: 'bluEdge',
    category: 'gluing',
    image: 'https://www.ottpaul.com/fileadmin/_processed_/9/7/csm_blu_edge_hyfuse_on_pacific_in_showroom__1__a1a1e7262f.jpg',
    tagline: {
      de: 'bluEdge featuring HyFuse – Nullfugentechnologie',
      en: 'bluEdge featuring HyFuse – zero glue line technology',
      cz: 'bluEdge featuring HyFuse – technologie nulové spáry',
      sk: 'bluEdge featuring HyFuse – technológia nulovej škáry',
      hu: 'bluEdge featuring HyFuse – nulla ragasztóvonal technológia',
    },
    description: {
      de: 'bluEdge featuring HyFuse ist OTTs Nullfugentechnologie. Die Funktionsschicht der Kante wird per Laser aktiviert – ohne Klebstoff, ohne sichtbare Fuge. Das Ergebnis: Premium-Möbeloptik, die höchsten ästhetischen Ansprüchen genügt. Nachrüstbar für alle OTT-Kantenanleimmaschinen.',
      en: 'bluEdge featuring HyFuse is OTT\'s zero glue line technology. The functional layer of the edge is activated by laser – no adhesive, no visible joint. The result: premium furniture aesthetics meeting the highest standards. Retrofittable to all OTT edgebanders.',
      cz: 'bluEdge featuring HyFuse je technologie nulové spáry od OTT. Funkční vrstva hrany se aktivuje laserem – bez lepidla, bez viditelné spáry. Výsledek: prémiový vzhled nábytku splňující nejvyšší estetické nároky. Dodatečně montovatelná na všechny olepovačky OTT.',
      sk: 'bluEdge featuring HyFuse je technológia nulovej škáry od OTT. Funkčná vrstva hrany sa aktivuje laserom – bez lepidla, bez viditeľnej škáry. Výsledok: prémiový vzhľad nábytku spĺňajúci najvyššie estetické nároky. Dodatočne montovateľná na všetky olepovačky OTT.',
      hu: 'A bluEdge featuring HyFuse az OTT nulla ragasztóvonal technológiája. Az él funkcionális rétege lézerrel aktiválódik – ragasztó nélkül, látható fuga nélkül. Az eredmény: prémium bútor-esztétika a legmagasabb igényeknek megfelelően. Minden OTT élzárógéphez utólagosan felszerelhető.',
    },
    specs: {
      notes: {
        de: 'bluEdge featuring HyFuse · Laser-Kantenaktivierung · nachrüstbar für alle OTT-Modelle',
        en: 'bluEdge featuring HyFuse · laser edge activation · retrofittable to all OTT models',
        cz: 'bluEdge featuring HyFuse · laserová aktivace hrany · montovatelná na všechny modely OTT',
        sk: 'bluEdge featuring HyFuse · laserová aktivácia hrany · montovateľná na všetky modely OTT',
        hu: 'bluEdge featuring HyFuse · lézeres élaktiválás · minden OTT modellhez felszerelhető',
      },
    },
    badge: 'ADDON',
    usp: { de: 'Zero-Gap-Technologie via HyFuse – keine Klebefuge sichtbar', en: 'Zero-gap technology via HyFuse – no glue line visible', cz: 'Zero-gap technologie přes HyFuse – žádná viditelná spára', sk: 'Zero-gap technológia cez HyFuse – žiadna viditeľná škára', hu: 'Zero-gap technológia HyFuse-szal – nincs látható ragasztóvonal' },
    equipment: ['HyFuse Lasereinheit', 'Funktionsschicht-Aktivierung', 'Nachrüstbar für alle OTT-Modelle'],
    seoTitle: {
      de: 'Nullfuge HyFuse bluEdge OTT – Asamer Händler CZ/SK/HU',
      en: 'Zero Glue Line HyFuse bluEdge OTT – Asamer dealer CZ/SK/HU',
      cz: 'Nulová spára HyFuse bluEdge OTT – Asamer prodejce CZ/SK/HU',
      sk: 'Nulová škára HyFuse bluEdge OTT – Asamer predajca CZ/SK/HU',
      hu: 'Nulla ragasztóvonal HyFuse bluEdge OTT – Asamer viszonteladó CZ/SK/HU',
    },
    seoDescription: {
      de: 'bluEdge – Nullfugen-Technologie via HyFuse. Unsichtbare Kanten, nachrüstbar für alle OTT-Modelle. Asamer: autorisierter OTT-Händler für CZ, SK & HU.',
      en: 'bluEdge – zero glue line technology via HyFuse. Invisible edges, retrofittable to all OTT models. Asamer: authorized OTT dealer for CZ, SK & HU.',
      cz: 'bluEdge – technologie nulové spáry přes HyFuse. Neviditelné hrany, montovatelná na všechny OTT. Asamer: autorizovaný prodejce OTT pro CZ, SK a HU.',
      sk: 'bluEdge – technológia nulovej škáry cez HyFuse. Neviditeľné hrany, montovateľná na všetky OTT. Asamer: autorizovaný predajca OTT pre CZ, SK a HU.',
      hu: 'bluEdge – nulla ragasztóvonal technológia HyFuse-szal. Láthatatlan élek, minden OTT-hez. Asamer: hivatalos OTT viszonteladó CZ, SK és HU.',
    },
  },

  /* ======================== RETURN & HANDLING ======================== */
  {
    slug: 'transcompact',
    name: 'TRANScompact',
    category: 'return',
    image: 'https://www.ottpaul.com/fileadmin/content/images/maschinen/transcompact.jpg',
    tagline: {
      de: 'Kompakte Rückführung',
      en: 'Compact return conveyor',
      cz: 'Kompaktní vratný dopravník',
      sk: 'Kompaktný vratný dopravník',
      hu: 'Kompakt visszaszállító szalag',
    },
    description: {
      de: 'Das TRANScompact ist ein kompaktes Rückführsystem mit integrierter Drehfunktion. Es ermöglicht kurze Rücklaufwege und eignet sich ideal für kleinere Produktionslinien, wo der Platz begrenzt ist.',
      en: 'The TRANScompact is a compact return conveyor with integrated rotation capability. It enables short return paths and is ideal for smaller production lines where space is limited.',
      cz: 'TRANScompact je kompaktní vratný dopravník s integrovanou funkcí otočení. Umožňuje krátké vratné dráhy a je ideální pro menší výrobní linky s omezeným prostorem.',
      sk: 'TRANScompact je kompaktný vratný dopravník s integrovanou funkciou otočenia. Umožňuje krátke vratné dráhy a je ideálny pre menšie výrobné linky s obmedzeným priestorom.',
      hu: 'A TRANScompact kompakt visszaszállító rendszer integrált forgató funkcióval. Rövid visszafutási útvonalakat tesz lehetővé, és ideális kisebb gyártósorokhoz, ahol a hely korlátozott.',
    },
    badge: 'SYSTEM',
    usp: { de: 'Kompakt mit Drehfunktion – ideal für Pacific+ und Tornado+', en: 'Compact with rotation – ideal for Pacific+ and Tornado+', cz: 'Kompaktní s otočením – ideální pro Pacific+ a Tornado+', sk: 'Kompaktný s otočením – ideálny pre Pacific+ a Tornado+', hu: 'Kompakt forgatóval – ideális Pacific+ és Tornado+ mellé' },
    specs: {
      notes: {
        de: 'Kompaktes Rückführsystem mit Drehfunktion',
        en: 'Compact return conveyor with rotation',
        cz: 'Kompaktní vratný systém s funkcí otočení',
        sk: 'Kompaktný vratný systém s funkciou otočenia',
        hu: 'Kompakt visszaszállító rendszer forgató funkcióval',
      },
    },
    seoTitle: {
      de: 'Rückführsystem TRANScompact OTT – Asamer Händler CZ/SK/HU',
      en: 'Return Conveyor TRANScompact OTT – Asamer dealer CZ/SK/HU',
      cz: 'Vratný dopravník TRANScompact OTT – Asamer prodejce CZ/SK/HU',
      sk: 'Vratný dopravník TRANScompact OTT – Asamer predajca CZ/SK/HU',
      hu: 'Visszaszállító TRANScompact OTT – Asamer viszonteladó CZ/SK/HU',
    },
    seoDescription: {
      de: 'TRANScompact – kompaktes Rückführsystem mit Drehfunktion. Für Kantenanleimlinien. Asamer: autorisierter OTT-Händler für CZ, SK & HU.',
      en: 'TRANScompact – compact return conveyor with rotation. For edgebanding lines. Asamer: authorized OTT dealer for CZ, SK & HU.',
      cz: 'TRANScompact – kompaktní vratný systém s otočením. Pro olepovací linky. Asamer: autorizovaný prodejce OTT pro CZ, SK a HU.',
      sk: 'TRANScompact – kompaktný vratný systém s otočením. Pre olepovacie linky. Asamer: autorizovaný predajca OTT pre CZ, SK a HU.',
      hu: 'TRANScompact – kompakt visszaszállító forgató funkcióval. Élzáró sorokhoz. Asamer: hivatalos OTT viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'translift',
    name: 'TRANSlift',
    category: 'return',
    image: 'https://www.ottpaul.com/fileadmin/_processed_/9/9/csm_translift1_8ef261da52.jpg',
    tagline: {
      de: 'Hebe-Rückführsystem',
      en: 'Lifting return system',
      cz: 'Zvedací vratný systém',
      sk: 'Zdvíhací vratný systém',
      hu: 'Emelő visszaszállító rendszer',
    },
    description: {
      de: 'Das TRANSlift ist ein Hebe-Rückführsystem, das Werkstücke vertikal transportiert. Es optimiert den Materialfluss in mehrstöckigen Produktionslinien und reduziert den Platzbedarf erheblich.',
      en: 'The TRANSlift is a lifting return system that transports workpieces vertically. It optimizes material flow in multi-level production lines and significantly reduces the space required.',
      cz: 'TRANSlift je zvedací vratný systém, který přepravuje obrobky vertikálně. Optimalizuje tok materiálu ve víceúrovňových výrobních linkách a výrazně snižuje nároky na prostor.',
      sk: 'TRANSlift je zdvíhací vratný systém, ktorý prepravuje obrobky vertikálne. Optimalizuje tok materiálu vo viacúrovňových výrobných linkách a výrazne znižuje nároky na priestor.',
      hu: 'A TRANSlift emelő visszaszállító rendszer, amely függőlegesen szállítja a munkadarabokat. Optimalizálja az anyagáramlást többszintű gyártósorokban, és jelentősen csökkenti a helyigényt.',
    },
    badge: 'SYSTEM',
    usp: { de: 'Vertikale Rückführung – spart Hallenfläche', en: 'Vertical return – saves floor space', cz: 'Vertikální vracení – šetří podlahovou plochu', sk: 'Vertikálne vracenie – šetrí podlahovú plochu', hu: 'Függőleges visszaszállítás – helytakarékos' },
    specs: {
      notes: {
        de: 'Vertikale Rückführung zur Platzoptimierung',
        en: 'Vertical return for space optimization',
        cz: 'Vertikální vracení pro optimalizaci prostoru',
        sk: 'Vertikálne vracenie pre optimalizáciu priestoru',
        hu: 'Függőleges visszaszállítás a helykihasználás optimalizálásához',
      },
    },
    seoTitle: {
      de: 'Hebe-Rückführung TRANSlift OTT – Asamer Händler CZ/SK/HU',
      en: 'Lifting Return System TRANSlift OTT – Asamer dealer CZ/SK/HU',
      cz: 'Zvedací vratný systém TRANSlift OTT – Asamer prodejce CZ/SK/HU',
      sk: 'Zdvíhací vratný systém TRANSlift OTT – Asamer predajca CZ/SK/HU',
      hu: 'Emelő visszaszállító TRANSlift OTT – Asamer viszonteladó CZ/SK/HU',
    },
    seoDescription: {
      de: 'TRANSlift – Hebe-Rückführsystem für vertikalen Transport. Platzsparend für Kantenanleimlinien. Asamer: autorisierter OTT-Händler für CZ, SK & HU.',
      en: 'TRANSlift – lifting return system for vertical transport. Space-saving for edgebanding lines. Asamer: authorized OTT dealer for CZ, SK & HU.',
      cz: 'TRANSlift – zvedací vratný systém pro vertikální transport. Prostorově úsporný. Asamer: autorizovaný prodejce OTT pro CZ, SK a HU.',
      sk: 'TRANSlift – zdvíhací vratný systém pre vertikálny transport. Priestorovo úsporný. Asamer: autorizovaný predajca OTT pre CZ, SK a HU.',
      hu: 'TRANSlift – emelő visszaszállító rendszer függőleges szállításhoz. Helytakarékos. Asamer: hivatalos OTT viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'transedge',
    name: 'TRANSedge',
    category: 'return',
    image: 'https://www.ottpaul.com/fileadmin/_processed_/2/4/csm_3D_TRANSedge_02_5c1f6f1fd8.jpg',
    tagline: {
      de: 'Für Kantenanleimlinien optimiert',
      en: 'Optimized for edgebanding lines',
      cz: 'Optimalizováno pro olepovací linky',
      sk: 'Optimalizované pre olepovacie linky',
      hu: 'Élzáró sorokra optimalizálva',
    },
    description: {
      de: 'Das TRANSedge ist speziell für Kantenanleimlinien optimiert. Es bietet automatische Werkstückrückführung mit hoher Taktrate und nahtloser Integration in bestehende Produktionsabläufe.',
      en: 'The TRANSedge is specifically optimized for edgebanding lines. It provides automatic workpiece return with high cycle rates and seamless integration into existing production workflows.',
      cz: 'TRANSedge je speciálně optimalizován pro olepovací linky. Nabízí automatické vracení obrobků s vysokou taktovací frekvencí a bezproblémovou integraci do stávajících výrobních procesů.',
      sk: 'TRANSedge je špeciálne optimalizovaný pre olepovacie linky. Ponúka automatické vracenie obrobkov s vysokou taktovacou frekvenciou a bezproblémovú integráciu do existujúcich výrobných procesov.',
      hu: 'A TRANSedge kifejezetten élzáró sorokra van optimalizálva. Automatikus munkadarab-visszaszállítást biztosít magas ütemszámmal és zökkenőmentes integrációt a meglévő gyártási folyamatokba.',
    },
    badge: 'SYSTEM',
    usp: { de: 'Für Storm+/TopEdge-Linien – hohe Taktrate', en: 'For Storm+/TopEdge lines – high cycle rate', cz: 'Pro linky Storm+/TopEdge – vysoká taktovací frekvence', sk: 'Pre linky Storm+/TopEdge – vysoká taktovacia frekvencia', hu: 'Storm+/TopEdge sorokhoz – magas ütemszám' },
    specs: {
      notes: {
        de: 'Speziell für Kantenanleimlinien konzipiert',
        en: 'Specifically designed for edgebanding lines',
        cz: 'Speciálně navrženo pro olepovací linky',
        sk: 'Špeciálne navrhnuté pre olepovacie linky',
        hu: 'Kifejezetten élzáró sorokhoz tervezve',
      },
    },
    seoTitle: {
      de: 'Rückführung für Kantenanleimlinien TRANSedge OTT – Asamer Händler CZ/SK/HU',
      en: 'Return System for Edgebanding TRANSedge OTT – Asamer dealer CZ/SK/HU',
      cz: 'Vratný systém pro olepovačky TRANSedge OTT – Asamer prodejce CZ/SK/HU',
      sk: 'Vratný systém pre olepovačky TRANSedge OTT – Asamer predajca CZ/SK/HU',
      hu: 'Visszaszállító élzáró sorokhoz TRANSedge OTT – Asamer viszonteladó CZ/SK/HU',
    },
    seoDescription: {
      de: 'TRANSedge – Rückführsystem für Kantenanleimlinien. Hohe Taktrate, nahtlose Integration. Asamer: autorisierter OTT-Händler für CZ, SK & HU.',
      en: 'TRANSedge – return system for edgebanding lines. High cycle rate, seamless integration. Asamer: authorized OTT dealer for CZ, SK & HU.',
      cz: 'TRANSedge – vratný systém pro olepovací linky. Vysoká taktovací frekvence. Asamer: autorizovaný prodejce OTT pro CZ, SK a HU.',
      sk: 'TRANSedge – vratný systém pre olepovacie linky. Vysoká taktovacia frekvencia. Asamer: autorizovaný predajca OTT pre CZ, SK a HU.',
      hu: 'TRANSedge – visszaszállító rendszer élzáró sorokhoz. Magas ütemszám. Asamer: hivatalos OTT viszonteladó CZ, SK és HU.',
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Lookup helpers                                                     */
/* ------------------------------------------------------------------ */

const productsBySlug = new Map(OTT_PRODUCTS.map((p) => [p.slug, p]));

export const getOttProductBySlug = (slug: string): OttProduct | undefined =>
  productsBySlug.get(slug);

export const getOttProductsByCategory = (cat: OttCategory): OttProduct[] =>
  OTT_PRODUCTS.filter((p) => p.category === cat);

export const ALL_OTT_MODEL_SLUGS = OTT_PRODUCTS.map((p) => p.slug);
