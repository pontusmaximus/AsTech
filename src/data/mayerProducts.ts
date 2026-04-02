import type { Language } from '../i18n';

/* ------------------------------------------------------------------ */
/*  Mayer category slugs – per-category localized URL segments         */
/* ------------------------------------------------------------------ */

export type MayerCategory = 'kappa' | 'advanced' | 'industrial';

const MAYER_CATEGORY_SLUGS: Record<MayerCategory, Record<Language, string>> = {
  kappa: {
    de: 'horizontale-plattensaegen',
    en: 'horizontal-panel-saws',
    cz: 'horizontalni-formatovaci-pily',
    sk: 'horizontalne-formatovacie-pilyy',
    hu: 'horizontalis-lapszabo-furesz',
  },
  advanced: {
    de: 'plattensaegen-aluminium-kunststoff',
    en: 'panel-saws-aluminium-plastics',
    cz: 'formatovaci-pily-hlinik-plasty',
    sk: 'formatovacie-pily-hlinik-plasty',
    hu: 'lapszabo-furesz-aluminium-manyag',
  },
  industrial: {
    de: 'industrieloesungen',
    en: 'industrial-solutions',
    cz: 'prumyslova-reseni',
    sk: 'priemyselne-riesenia',
    hu: 'ipari-megoldasok',
  },
};

// Collect every unique category slug value for route registration
export const MAYER_CATEGORY_SLUG_VARIANTS = [
  ...new Set(
    (Object.values(MAYER_CATEGORY_SLUGS) as Record<Language, string>[]).flatMap((m) =>
      Object.values(m),
    ),
  ),
];

/** Localized category slug for a given category + language. */
export const getMayerCategorySlug = (cat: MayerCategory, lang: Language): string =>
  MAYER_CATEGORY_SLUGS[cat][lang];

/** Reverse-lookup: given any category slug string, find the MayerCategory key. */
export const findMayerCategoryBySlug = (slug: string): MayerCategory | undefined => {
  for (const [cat, langMap] of Object.entries(MAYER_CATEGORY_SLUGS)) {
    if (Object.values(langMap).includes(slug)) return cat as MayerCategory;
  }
  return undefined;
};

/** Build full product path: /mayer/{localized-category}/{model} */
export const buildMayerProductPath = (lang: Language, product: MayerProduct): string =>
  `/mayer/${MAYER_CATEGORY_SLUGS[product.category][lang]}/${product.slug}`;

/** Build product path from raw category + model slug. */
export const buildMayerProductPathRaw = (
  lang: Language,
  category: MayerCategory,
  modelSlug: string,
): string => `/mayer/${MAYER_CATEGORY_SLUGS[category][lang]}/${modelSlug}`;

/* ------------------------------------------------------------------ */
/*  Category labels (section headings)                                 */
/* ------------------------------------------------------------------ */

export const MAYER_CATEGORY_LABELS: Record<MayerCategory, Record<Language, string>> = {
  kappa: {
    de: 'Horizontale Plattensägen – kappa automatic',
    en: 'Horizontal Panel Saws – kappa automatic',
    cz: 'Velkoplošné formátovací pily',
    sk: 'Horizontálne formátovacie píly – kappa automatic',
    hu: 'Horizontális lapszabó fűrészek – kappa automatic',
  },
  advanced: {
    de: 'Plattensägen für Aluminium & Kunststoff – advanced line',
    en: 'Panel Saws for Aluminium & Plastics – advanced line',
    cz: 'Formátovací pily pro hliník a plasty – advanced line',
    sk: 'Formátovacie píly pre hliník a plasty – advanced line',
    hu: 'Lapszabó fűrészek alumíniumhoz és műanyaghoz – advanced line',
  },
  industrial: {
    de: 'Industrielösungen',
    en: 'Industrial Solutions',
    cz: 'Průmyslová řešení',
    sk: 'Priemyselné riešenia',
    hu: 'Ipari megoldások',
  },
};

export const MAYER_CATEGORY_SHORT: Record<MayerCategory, Record<Language, string>> = {
  kappa: {
    de: 'Horizontale Plattensäge',
    en: 'Horizontal Panel Saw',
    cz: 'Horizontální formátovací pila',
    sk: 'Horizontálna formátovacia píla',
    hu: 'Horizontális lapszabó fűrész',
  },
  advanced: {
    de: 'Plattensäge Aluminium & Kunststoff',
    en: 'Panel Saw Aluminium & Plastics',
    cz: 'Formátovací pila hliník & plasty',
    sk: 'Formátovacia píla hliník & plasty',
    hu: 'Lapszabó fűrész alumínium & műanyag',
  },
  industrial: {
    de: 'Industrielösung',
    en: 'Industrial Solution',
    cz: 'Průmyslové řešení',
    sk: 'Priemyselné riešenie',
    hu: 'Ipari megoldás',
  },
};

/* ------------------------------------------------------------------ */
/*  Product type                                                       */
/* ------------------------------------------------------------------ */

export interface MayerProduct {
  slug: string;
  name: string;
  category: MayerCategory;
  tagline: Record<Language, string>;
  image: string;
  description: Record<Language, string>;
  materials: string[];
  specs: {
    cuttingLength?: string;
    cuttingHeight?: string;
    feedSpeed?: string;
    motor?: string;
    bladeProjection?: string;
    bladeDiameter?: string;
    notes?: Record<Language, string>;
  };
  seoTitle: Record<Language, string>;
  seoDescription: Record<Language, string>;
}

/* ------------------------------------------------------------------ */
/*  Full product catalog                                               */
/* ------------------------------------------------------------------ */

export const MAYER_PRODUCTS: MayerProduct[] = [
  /* ==================== KAPPA AUTOMATIC ==================== */
  {
    slug: 'kappa-automatic-80',
    name: 'kappa automatic 80',
    category: 'kappa',
    image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__64214__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/plattensaege-kappaautomatic80-mayer-feldergroup.png',
    materials: ['wood'],
    tagline: {
      de: 'Einstiegsmodell – neue Maßstäbe in der Kompaktklasse',
      en: 'Entry-level model – setting new standards in the compact class',
      cz: 'Vstupní model – nové standardy v kompaktní třídě',
      sk: 'Vstupný model – nové štandardy v kompaktnej triede',
      hu: 'Belépő modell – új mércét állít a kompakt kategóriában',
    },
    description: {
      de: 'Die kappa automatic 80 ist das Einstiegsmodell der kappa-Serie und setzt neue Maßstäbe in der Kompaktklasse. Schwere Stahlkonstruktion, Druckbalken und Materialvorschub aus Stahl ermöglichen Ein-Mann-Bedienung bei höchster Wiederholgenauigkeit. Die 80 mm Schnitthöhe eignet sich ideal für handwerkliche und mittelgroße Betriebe.',
      en: 'The kappa automatic 80 is the entry-level model of the kappa series, setting new standards in the compact class. Heavy steel construction, steel pressure beam and material pusher enable single-operator use with highest repeat accuracy. The 80 mm cutting height is ideal for craft workshops and medium-sized operations.',
      cz: 'kappa automatic 80 je vstupní model řady kappa a stanovuje nové standardy v kompaktní třídě. Těžká ocelová konstrukce, přítlačný trám a posuv materiálu z oceli umožňují obsluhu jedním operátorem s nejvyšší opakovatelnou přesností. Výška řezu 80 mm je ideální pro řemeslné a středně velké provozy.',
      sk: 'kappa automatic 80 je vstupný model radu kappa a stanovuje nové štandardy v kompaktnej triede. Ťažká oceľová konštrukcia, prítlačný trám a posuv materiálu z ocele umožňujú obsluhu jedným operátorom s najvyššou opakovateľnou presnosťou.',
      hu: 'A kappa automatic 80 a kappa sorozat belépő modellje, amely új mércét állít a kompakt kategóriában. Nehéz acélszerkezet, acél nyomógerenda és anyagtolóval egyszemélyes kezelést tesz lehetővé a legmagasabb ismétlési pontossággal.',
    },
    specs: {
      cuttingLength: '3.200 mm',
      cuttingHeight: '80 mm',
      feedSpeed: '100 m/min',
    },
    seoTitle: {
      de: 'Mayer kappa automatic 80 Plattensäge kaufen – Asamer Händler CZ/SK/HU',
      en: 'Mayer kappa automatic 80 Panel Saw – Buy via Asamer dealer CZ/SK/HU',
      cz: 'Mayer kappa automatic 80 formátovací pila – koupit přes Asamer',
      sk: 'Mayer kappa automatic 80 formátovacia píla – kúpiť cez Asamer',
      hu: 'Mayer kappa automatic 80 lapszabó fűrész – vásárlás Asamer-en keresztül',
    },
    seoDescription: {
      de: 'kappa automatic 80 – horizontale Plattensäge, Einstiegsmodell. 80 mm Schnitthöhe bei 3.200 mm Schnittlänge. Asamer: autorisierter Mayer-Händler für CZ, SK & HU.',
      en: 'kappa automatic 80 – horizontal panel saw, entry-level model. 80 mm cutting height with 3,200 mm cutting length. Asamer: authorized Mayer dealer for CZ, SK & HU.',
      cz: 'kappa automatic 80 – horizontální formátovací pila, vstupní model. Výška řezu 80 mm, délka 3 200 mm. Asamer: autorizovaný prodejce Mayer pro CZ, SK a HU.',
      sk: 'kappa automatic 80 – horizontálna formátovacia píla, vstupný model. Výška rezu 80 mm, dĺžka 3 200 mm. Asamer: autorizovaný predajca Mayer pre CZ, SK a HU.',
      hu: 'kappa automatic 80 – horizontális lapszabó fűrész, belépő modell. 80 mm vágási magasság, 3 200 mm hossz. Asamer: hivatalos Mayer viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'kappa-automatic-100',
    name: 'kappa automatic 100',
    category: 'kappa',
    image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__64216__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/plattensaege-kappaautomatic100-mayer-feldergroup.png',
    materials: ['wood'],
    tagline: {
      de: 'Mehr Kraft, mehr Leistung, mehr Komfort',
      en: 'More power, more performance, more comfort',
      cz: 'Více síly, více výkonu, více komfortu',
      sk: 'Viac sily, viac výkonu, viac komfortu',
      hu: 'Több erő, több teljesítmény, több komfort',
    },
    description: {
      de: 'Die kappa automatic 100 ist die Plattensäge mit gehobener Ausstattung: mehr Kraft, mehr Leistung, mehr Komfort. Mit 100 mm Schnitthöhe und 3.200 mm Schnittlänge bietet sie professionellen Plattenzuschnitt mit schwerer Stahlkonstruktion und modularem Schnittoptimierer für höchste Effizienz im Dauerbetrieb.',
      en: 'The kappa automatic 100 is the panel saw with premium equipment: more power, more performance, more comfort. With 100 mm cutting height and 3,200 mm cutting length, it provides professional panel cutting with heavy steel construction and modular cut optimizer for maximum efficiency in continuous operation.',
      cz: 'kappa automatic 100 je formátovací pila s vyšší výbavou: více síly, více výkonu, více komfortu. S výškou řezu 100 mm a délkou řezu 3 200 mm nabízí profesionální řezání desek s těžkou ocelovou konstrukcí a modulárním optimalizátorem řezu pro maximální efektivitu v nepřetržitém provozu.',
      sk: 'kappa automatic 100 je formátovacia píla s vyššou výbavou: viac sily, viac výkonu, viac komfortu. S výškou rezu 100 mm a dĺžkou rezu 3 200 mm ponúka profesionálne rezanie dosiek s ťažkou oceľovou konštrukciou.',
      hu: 'A kappa automatic 100 az emelt felszereltségű lapszabó fűrész: több erő, több teljesítmény, több komfort. 100 mm-es vágási magassággal és 3 200 mm-es vágási hosszal professzionális lapvágást biztosít.',
    },
    specs: {
      cuttingLength: '3.200 mm',
      cuttingHeight: '100 mm',
      feedSpeed: '100 m/min',
    },
    seoTitle: {
      de: 'Mayer kappa automatic 100 Plattensäge kaufen – Asamer Händler CZ/SK/HU',
      en: 'Mayer kappa automatic 100 Panel Saw – Buy via Asamer dealer CZ/SK/HU',
      cz: 'Mayer kappa automatic 100 formátovací pila – koupit přes Asamer',
      sk: 'Mayer kappa automatic 100 formátovacia píla – kúpiť cez Asamer',
      hu: 'Mayer kappa automatic 100 lapszabó fűrész – vásárlás Asamer-en keresztül',
    },
    seoDescription: {
      de: 'kappa automatic 100 – horizontale Plattensäge, professioneller Zuschnitt. 100 mm Schnitthöhe, 3.200 mm. Asamer: autorisierter Mayer-Händler für CZ, SK & HU.',
      en: 'kappa automatic 100 – horizontal panel saw, professional cutting. 100 mm cutting height, 3,200 mm. Asamer: authorized Mayer dealer for CZ, SK & HU.',
      cz: 'kappa automatic 100 – horizontální formátovací pila pro profesionální řezání. Výška řezu 100 mm. Asamer: autorizovaný prodejce Mayer pro CZ, SK a HU.',
      sk: 'kappa automatic 100 – horizontálna formátovacia píla pre profesionálne rezanie. Výška rezu 100 mm. Asamer: autorizovaný predajca Mayer pre CZ, SK a HU.',
      hu: 'kappa automatic 100 – horizontális lapszabó fűrész professzionális vágáshoz. 100 mm magasság. Asamer: hivatalos Mayer viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'kappa-automatic-120',
    name: 'kappa automatic 120',
    category: 'kappa',
    image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__64217__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/plattensaege-kappaautomatic120-mayer-feldergroup.png',
    materials: ['wood'],
    tagline: {
      de: 'Schnelles und maßgenaues Zuschneiden von Einzelplatten und Paketen',
      en: 'Fast and precise cutting of single panels and panel stacks',
      cz: 'Rychlé a přesné řezání jednotlivých desek i balíků',
      sk: 'Rýchle a presné rezanie jednotlivých dosiek aj balíkov',
      hu: 'Gyors és pontos vágás egyedi lapokhoz és lapkötegekhez',
    },
    description: {
      de: 'Die kappa automatic 120 ist die ideale Plattensäge für das schnelle und maßgenaue Zuschneiden von Einzelplatten und Plattenpaketen. Mit 120 mm Schnitthöhe und 3.800 mm Schnittlänge bietet sie erweiterte Kapazität für mittlere Produktionsvolumen bei höchster Wiederholgenauigkeit.',
      en: 'The kappa automatic 120 is the ideal panel saw for fast and dimensionally accurate cutting of single panels and panel stacks. With 120 mm cutting height and 3,800 mm cutting length, it offers extended capacity for medium production volumes with highest repeat accuracy.',
      cz: 'kappa automatic 120 je ideální formátovací pila pro rychlé a rozměrově přesné řezání jednotlivých desek i balíků desek. S výškou řezu 120 mm a délkou řezu 3 800 mm nabízí rozšířenou kapacitu pro střední objemy výroby s nejvyšší opakovatelnou přesností.',
      sk: 'kappa automatic 120 je ideálna formátovacia píla pre rýchle a rozmerovo presné rezanie jednotlivých dosiek aj balíkov. S výškou rezu 120 mm a dĺžkou rezu 3 800 mm ponúka rozšírenú kapacitu pre stredné objemy výroby.',
      hu: 'A kappa automatic 120 az ideális lapszabó fűrész egyedi lapok és lapkötegek gyors és méretpontos vágásához. 120 mm-es vágási magassággal és 3 800 mm-es vágási hosszal bővített kapacitást biztosít közepes gyártási volumenekhez.',
    },
    specs: {
      cuttingLength: '3.800 mm',
      cuttingHeight: '120 mm',
      feedSpeed: '120 m/min',
    },
    seoTitle: {
      de: 'Mayer kappa automatic 120 Plattensäge kaufen – Asamer Händler CZ/SK/HU',
      en: 'Mayer kappa automatic 120 Panel Saw – Buy via Asamer dealer CZ/SK/HU',
      cz: 'Mayer kappa automatic 120 formátovací pila – koupit přes Asamer',
      sk: 'Mayer kappa automatic 120 formátovacia píla – kúpiť cez Asamer',
      hu: 'Mayer kappa automatic 120 lapszabó fűrész – vásárlás Asamer-en keresztül',
    },
    seoDescription: {
      de: 'kappa automatic 120 – horizontale Plattensäge für mittlere Volumes. 120 mm Schnitthöhe, 3.800 mm. Asamer: autorisierter Mayer-Händler für CZ, SK & HU.',
      en: 'kappa automatic 120 – horizontal panel saw for medium volumes. 120 mm cutting height, 3,800 mm. Asamer: authorized Mayer dealer for CZ, SK & HU.',
      cz: 'kappa automatic 120 – horizontální formátovací pila pro střední objemy. Výška řezu 120 mm, délka 3 800 mm. Asamer: autorizovaný prodejce Mayer pro CZ, SK a HU.',
      sk: 'kappa automatic 120 – horizontálna formátovacia píla pre stredné objemy. Výška rezu 120 mm, dĺžka 3 800 mm. Asamer: autorizovaný predajca Mayer pre CZ, SK a HU.',
      hu: 'kappa automatic 120 – horizontális lapszabó fűrész közepes gyártáshoz. 120 mm magasság, 3 800 mm hossz. Asamer: hivatalos Mayer viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'kappa-automatic-140',
    name: 'kappa automatic 140',
    category: 'kappa',
    image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__64218__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/plattensaege-kappaautomatic140-mayer-feldergroup.png',
    materials: ['wood'],
    tagline: {
      de: 'Maximale Leistung – Kraft, Schnelligkeit, Flexibilität',
      en: 'Maximum performance – power, speed, flexibility',
      cz: 'Maximální výkon – síla, rychlost, flexibilita',
      sk: 'Maximálny výkon – sila, rýchlosť, flexibilita',
      hu: 'Maximális teljesítmény – erő, sebesség, rugalmasság',
    },
    description: {
      de: 'Die kappa automatic 140 ist das Flaggschiff der kappa-Serie und bietet maximale Leistung für schnelles und maßgenaues Zuschneiden. Mit 140 mm Schnitthöhe, 4.300 mm Schnittlänge und bis zu 150 m/min Vorschubgeschwindigkeit vereint sie maximale Kraft, Schnelligkeit und Flexibilität – die erste Wahl für die industrielle Serienfertigung.',
      en: 'The kappa automatic 140 is the flagship of the kappa series, delivering maximum performance for fast and dimensionally accurate cutting. With 140 mm cutting height, 4,300 mm cutting length and up to 150 m/min feed speed, it combines maximum power, speed and flexibility – the first choice for industrial series production.',
      cz: 'kappa automatic 140 je vlajkovou lodí řady kappa a nabízí maximální výkon pro rychlé a rozměrově přesné řezání. S výškou řezu 140 mm, délkou řezu 4 300 mm a rychlostí posuvu až 150 m/min spojuje maximální sílu, rychlost a flexibilitu – první volba pro průmyslovou sériovou výrobu.',
      sk: 'kappa automatic 140 je vlajkovou loďou radu kappa a ponúka maximálny výkon pre rýchle a rozmerovo presné rezanie. S výškou rezu 140 mm, dĺžkou rezu 4 300 mm a rýchlosťou posuvu až 150 m/min spája maximálnu silu, rýchlosť a flexibilitu.',
      hu: 'A kappa automatic 140 a kappa sorozat zászlóshajója, maximális teljesítményt nyújtva a gyors és méretpontos vágáshoz. 140 mm-es vágási magassággal, 4 300 mm-es vágási hosszal és akár 150 m/perc előtolási sebességgel az ipari sorozatgyártás első számú választása.',
    },
    specs: {
      cuttingLength: '4.300 mm',
      cuttingHeight: '140 mm',
      feedSpeed: '150 m/min',
    },
    seoTitle: {
      de: 'Mayer kappa automatic 140 Plattensäge kaufen – Asamer Händler CZ/SK/HU',
      en: 'Mayer kappa automatic 140 Panel Saw – Buy via Asamer dealer CZ/SK/HU',
      cz: 'Mayer kappa automatic 140 formátovací pila – koupit přes Asamer',
      sk: 'Mayer kappa automatic 140 formátovacia píla – kúpiť cez Asamer',
      hu: 'Mayer kappa automatic 140 lapszabó fűrész – vásárlás Asamer-en keresztül',
    },
    seoDescription: {
      de: 'kappa automatic 140 – Flaggschiff-Plattensäge. 140 mm, 4.300 mm, 150 m/min Vorschub. Asamer: autorisierter Mayer-Händler für CZ, SK & HU.',
      en: 'kappa automatic 140 – flagship panel saw. 140 mm, 4,300 mm length, 150 m/min feed speed. Asamer: authorized Mayer dealer for CZ, SK & HU.',
      cz: 'kappa automatic 140 – vlajková formátovací pila. 140 mm, 4 300 mm, posuv 150 m/min. Asamer: autorizovaný prodejce Mayer pro CZ, SK a HU.',
      sk: 'kappa automatic 140 – vlajková formátovacia píla. 140 mm, 4 300 mm, posuv 150 m/min. Asamer: autorizovaný predajca Mayer pre CZ, SK a HU.',
      hu: 'kappa automatic 140 – zászlóshajó lapszabó fűrész. 140 mm, 4 300 mm, 150 m/perc előtolás. Asamer: hivatalos Mayer viszonteladó CZ, SK és HU.',
    },
  },

  /* ==================== ADVANCED LINE ==================== */
  {
    slug: 'advanced-line-100',
    name: 'advanced line 100',
    category: 'advanced',
    image: 'https://www.mayersaws.com/_default_upload_bucket/image-thumb__65802__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/65801_plattensaege-advanced-line-100-mayer-feldergroup.png',
    materials: ['aluminium', 'plastics', 'non-ferrous'],
    tagline: {
      de: 'Der Klassiker – Schnitte bis 100 mm',
      en: 'The classic – cuts up to 100 mm',
      cz: 'Klasika – řezy do 100 mm',
      sk: 'Klasika – rezy do 100 mm',
      hu: 'A klasszikus – vágások 100 mm-ig',
    },
    description: {
      de: 'Die advanced line 100 ist der Klassiker für die Bearbeitung von Aluminium, NE-Metallen und Kunststoffen. Mit 18/24 kW Motorleistung und 100 mm Schnitthöhe bietet sie vibrationsfrei präzise Schnitte bei stabiler Konstruktion und exzellenter Sägewagenführung.',
      en: 'The advanced line 100 is the classic for processing aluminium, non-ferrous metals and plastics. With 18/24 kW motor power and 100 mm cutting height, it delivers vibration-free precision cuts with stable construction and excellent saw carriage guidance.',
      cz: 'advanced line 100 je klasika pro zpracování hliníku, neželezných kovů a plastů. S motorem 18/24 kW a výškou řezu 100 mm nabízí precizní řezy bez vibrací při stabilní konstrukci a vynikajícím vedení pilového vozíku.',
      sk: 'advanced line 100 je klasika pre spracovanie hliníka, neželezných kovov a plastov. S motorom 18/24 kW a výškou rezu 100 mm ponúka presné rezy bez vibrácií.',
      hu: 'Az advanced line 100 a klasszikus megoldás alumínium, színesfémek és műanyagok megmunkálásához. 18/24 kW motorteljesítménnyel és 100 mm-es vágási magassággal rezgésmentes precíz vágásokat biztosít.',
    },
    specs: {
      cuttingHeight: '100 mm',
      motor: '18/24 kW',
    },
    seoTitle: {
      de: 'Mayer advanced line 100 Plattensäge kaufen – Asamer Händler CZ/SK/HU',
      en: 'Mayer advanced line 100 Panel Saw – Buy via Asamer dealer CZ/SK/HU',
      cz: 'Mayer advanced line 100 formátovací pila – koupit přes Asamer',
      sk: 'Mayer advanced line 100 formátovacia píla – kúpiť cez Asamer',
      hu: 'Mayer advanced line 100 lapszabó fűrész – vásárlás Asamer-en keresztül',
    },
    seoDescription: {
      de: 'advanced line 100 – Plattensäge für Alu & Kunststoff. 100 mm Schnitthöhe, 18/24 kW Motor. Asamer: autorisierter Mayer-Händler für CZ, SK & HU.',
      en: 'advanced line 100 – panel saw for aluminium & plastics. 100 mm cutting height, 18/24 kW motor. Asamer: authorized Mayer dealer for CZ, SK & HU.',
      cz: 'advanced line 100 – formátovací pila pro hliník a plasty. Výška řezu 100 mm, motor 18/24 kW. Asamer: autorizovaný prodejce Mayer pro CZ, SK a HU.',
      sk: 'advanced line 100 – formátovacia píla pre hliník a plasty. Výška rezu 100 mm, motor 18/24 kW. Asamer: autorizovaný predajca Mayer pre CZ, SK a HU.',
      hu: 'advanced line 100 – lapszabó fűrész alumíniumhoz és műanyaghoz. 100 mm magasság, 18/24 kW motor. Asamer: hivatalos Mayer viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'advanced-line-130',
    name: 'advanced line 130',
    category: 'advanced',
    image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__49294__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/64926-plattensaege-al130-mayer-feldergroup.png',
    materials: ['aluminium', 'plastics', 'non-ferrous'],
    tagline: {
      de: 'Vielseitige Lösung für 130 mm Schnitthöhe',
      en: 'Versatile solution with 130 mm cutting height',
      cz: 'Všestranné řešení s výškou řezu 130 mm',
      sk: 'Všestranné riešenie s výškou rezu 130 mm',
      hu: 'Sokoldalú megoldás 130 mm-es vágási magassággal',
    },
    description: {
      de: 'Die advanced line 130 bietet 130 mm Schnitthöhe und integrierte Absaugung. Stabile Konstruktion und vibrationsfrei arbeitende Präzisionslager gewährleisten exakte Ergebnisse bei der Bearbeitung von Aluminium, NE-Metallen und Kunststoffen.',
      en: 'The advanced line 130 offers 130 mm cutting height and integrated extraction. Stable construction and vibration-free precision bearings ensure exact results when processing aluminium, non-ferrous metals and plastics.',
      cz: 'advanced line 130 nabízí výšku řezu 130 mm a integrované odsávání. Stabilní konstrukce a vibrací prosté precizní ložiska zajišťují přesné výsledky při zpracování hliníku, neželezných kovů a plastů.',
      sk: 'advanced line 130 ponúka výšku rezu 130 mm a integrované odsávanie. Stabilná konštrukcia a bezvibrračné precízne ložiská zabezpečujú presné výsledky.',
      hu: 'Az advanced line 130 130 mm-es vágási magasságot és integrált elszívást kínál. Stabil szerkezet és rezgésmentes precíziós csapágyak biztosítják a pontos eredményeket.',
    },
    specs: {
      cuttingHeight: '130 mm',
    },
    seoTitle: {
      de: 'Mayer advanced line 130 Plattensäge kaufen – Asamer Händler CZ/SK/HU',
      en: 'Mayer advanced line 130 Panel Saw – Buy via Asamer dealer CZ/SK/HU',
      cz: 'Mayer advanced line 130 formátovací pila – koupit přes Asamer',
      sk: 'Mayer advanced line 130 formátovacia píla – kúpiť cez Asamer',
      hu: 'Mayer advanced line 130 lapszabó fűrész – vásárlás Asamer-en keresztül',
    },
    seoDescription: {
      de: 'advanced line 130 – Plattensäge für Alu & Kunststoff. 130 mm Schnitthöhe, integrierte Absaugung. Asamer: autorisierter Mayer-Händler für CZ, SK & HU.',
      en: 'advanced line 130 – panel saw for aluminium & plastics. 130 mm cutting height, integrated extraction. Asamer: authorized Mayer dealer for CZ, SK & HU.',
      cz: 'advanced line 130 – formátovací pila pro hliník a plasty. Výška řezu 130 mm, integrované odsávání. Asamer: autorizovaný prodejce Mayer pro CZ, SK a HU.',
      sk: 'advanced line 130 – formátovacia píla pre hliník a plasty. Výška rezu 130 mm, integrované odsávanie. Asamer: autorizovaný predajca Mayer pre CZ, SK a HU.',
      hu: 'advanced line 130 – lapszabó fűrész alumíniumhoz és műanyaghoz. 130 mm magasság, integrált elszívás. Asamer: hivatalos Mayer viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'advanced-line-160',
    name: 'advanced line 160',
    category: 'advanced',
    image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__65807__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/plattensaege-advanced-line-160-mayer-feldergroup-01.png',
    materials: ['aluminium', 'plastics', 'non-ferrous'],
    tagline: {
      de: 'Hochleistungssäge mit PC-Steuerung',
      en: 'High-performance saw with PC control',
      cz: 'Vysokovýkonná pila s PC řízením',
      sk: 'Vysokovýkonná píla s PC riadením',
      hu: 'Nagyteljesítményű fűrész PC-vezérléssel',
    },
    description: {
      de: 'Die advanced line 160 verbindet 160 mm Schnitthöhe mit einer PC-Steuerung per Touchscreen – mehrfach für innovative Lösungen und Patente ausgezeichnet. Sie eignet sich für industrielle Anwendungen, bei denen hoher Durchsatz und höchste Schnittgenauigkeit gefragt sind.',
      en: 'The advanced line 160 combines 160 mm cutting height with PC control via touchscreen – multiple times awarded for innovative solutions and patents. It is suited for industrial applications requiring high throughput and maximum cutting accuracy.',
      cz: 'advanced line 160 spojuje výšku řezu 160 mm s PC řízením přes dotykový displej – mnohonásobně oceněná za inovativní řešení a patenty. Je vhodná pro průmyslové aplikace vyžadující vysokou propustnost a nejvyšší přesnost řezu.',
      sk: 'advanced line 160 spája výšku rezu 160 mm s PC riadením cez dotykový displej – niekoľkonásobne ocenená za inovatívne riešenia a patenty. Je vhodná pre priemyselné aplikácie vyžadujúce vysokú priepustnosť.',
      hu: 'Az advanced line 160 160 mm-es vágási magasságot egyesít érintőképernyős PC-vezérléssel – többszörösen díjazott innovatív megoldásokért és szabadalmakért. Ipari alkalmazásokhoz alkalmas, ahol magas áteresztőképesség és maximális vágási pontosság szükséges.',
    },
    specs: {
      cuttingHeight: '160 mm',
      notes: {
        de: 'PC-Steuerung mit Touchscreen',
        en: 'PC control with touchscreen',
        cz: 'PC řízení s dotykovým displejem',
        sk: 'PC riadenie s dotykovým displejom',
        hu: 'PC-vezérlés érintőképernyővel',
      },
    },
    seoTitle: {
      de: 'Mayer advanced line 160 Plattensäge kaufen – Asamer Händler CZ/SK/HU',
      en: 'Mayer advanced line 160 Panel Saw – Buy via Asamer dealer CZ/SK/HU',
      cz: 'Mayer advanced line 160 formátovací pila – koupit přes Asamer',
      sk: 'Mayer advanced line 160 formátovacia píla – kúpiť cez Asamer',
      hu: 'Mayer advanced line 160 lapszabó fűrész – vásárlás Asamer-en keresztül',
    },
    seoDescription: {
      de: 'advanced line 160 – Hochleistungs-Plattensäge mit PC-Touchscreen. 160 mm Schnitthöhe. Asamer: autorisierter Mayer-Händler für CZ, SK & HU.',
      en: 'advanced line 160 – high-performance panel saw with PC touchscreen. 160 mm cutting height. Asamer: authorized Mayer dealer for CZ, SK & HU.',
      cz: 'advanced line 160 – vysokovýkonná formátovací pila s PC dotykovým displejem. Výška řezu 160 mm. Asamer: autorizovaný prodejce Mayer pro CZ, SK a HU.',
      sk: 'advanced line 160 – vysokovýkonná formátovacia píla s PC dotykovým displejom. Výška rezu 160 mm. Asamer: autorizovaný predajca Mayer pre CZ, SK a HU.',
      hu: 'advanced line 160 – nagyteljesítményű lapszabó fűrész PC érintőképernyővel. 160 mm magasság. Asamer: hivatalos Mayer viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'advanced-line-160-turn',
    name: 'advanced line 160 turn',
    category: 'advanced',
    image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__49296__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/122778-plattensaege-al160turn-mayer-feldergroup.png',
    materials: ['aluminium', 'plastics', 'non-ferrous'],
    tagline: {
      de: 'Mit automatischer 90°-Wendeinheit',
      en: 'With automatic 90° turning unit',
      cz: 'S automatickou 90° otočnou jednotkou',
      sk: 'S automatickou 90° otočnou jednotkou',
      hu: 'Automatikus 90°-os forgató egységgel',
    },
    description: {
      de: 'Die advanced line 160 turn erweitert die 160er-Plattform um eine automatische 90°-Wendeinheit für beidseitige Bearbeitung. Komfortable Bedienbarkeit ermöglicht einfaches Materialhandling, selbst bei großformatigen Platten. Ideal für Produktionslinien mit Längs- und Querschnitten in einem Durchgang.',
      en: 'The advanced line 160 turn extends the 160 platform with an automatic 90° turning unit for double-sided processing. Comfortable operability enables easy material handling, even with large-format panels. Ideal for production lines with longitudinal and cross cuts in a single pass.',
      cz: 'advanced line 160 turn rozšiřuje platformu 160 o automatickou 90° otočnou jednotku pro oboustranné zpracování. Komfortní ovládání umožňuje snadnou manipulaci s materiálem, i s velkoformátovými deskami. Ideální pro výrobní linky s podélnými i příčnými řezy v jednom průchodu.',
      sk: 'advanced line 160 turn rozširuje platformu 160 o automatickú 90° otočnú jednotku pre obojstranné spracovanie. Komfortná obsluha umožňuje jednoduché zaobchádzanie s materiálom, aj s veľkoformátovými doskami.',
      hu: 'Az advanced line 160 turn a 160-as platformot automatikus 90°-os forgató egységgel bővíti. Kényelmes kezelhetőség könnyű anyagmozgatást tesz lehetővé, még nagyformátumú lapoknál is.',
    },
    specs: {
      cuttingHeight: '160 mm',
      notes: {
        de: 'Automatische 90°-Wendeinheit',
        en: 'Automatic 90° turning unit',
        cz: 'Automatická 90° otočná jednotka',
        sk: 'Automatická 90° otočná jednotka',
        hu: 'Automatikus 90°-os forgató egység',
      },
    },
    seoTitle: {
      de: 'Mayer advanced line 160 turn Plattensäge kaufen – Asamer Händler CZ/SK/HU',
      en: 'Mayer advanced line 160 turn Panel Saw – Buy via Asamer dealer CZ/SK/HU',
      cz: 'Mayer advanced line 160 turn formátovací pila – koupit přes Asamer',
      sk: 'Mayer advanced line 160 turn formátovacia píla – kúpiť cez Asamer',
      hu: 'Mayer advanced line 160 turn lapszabó fűrész – vásárlás Asamer-en keresztül',
    },
    seoDescription: {
      de: 'advanced line 160 turn – Plattensäge mit 90°-Wendeinheit. Beidseitige Bearbeitung, 160 mm. Asamer: autorisierter Mayer-Händler für CZ, SK & HU.',
      en: 'advanced line 160 turn – panel saw with 90° turning unit. Double-sided processing, 160 mm. Asamer: authorized Mayer dealer for CZ, SK & HU.',
      cz: 'advanced line 160 turn – formátovací pila s 90° otočnou jednotkou. Oboustranné zpracování. Asamer: autorizovaný prodejce Mayer pro CZ, SK a HU.',
      sk: 'advanced line 160 turn – formátovacia píla s 90° otočnou jednotkou. Obojstranné spracovanie. Asamer: autorizovaný predajca Mayer pre CZ, SK a HU.',
      hu: 'advanced line 160 turn – lapszabó fűrész 90°-os forgató egységgel. Kétoldalas megmunkálás. Asamer: hivatalos Mayer viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'advanced-line-200',
    name: 'advanced line 200',
    category: 'advanced',
    image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__49297__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/53826-plattensaege-al200-mayer-feldergroup.png',
    materials: ['aluminium', 'plastics', 'non-ferrous'],
    tagline: {
      de: 'Maximale Leistung für Großformate',
      en: 'Maximum performance for large formats',
      cz: 'Maximální výkon pro velké formáty',
      sk: 'Maximálny výkon pre veľké formáty',
      hu: 'Maximális teljesítmény nagy formátumokhoz',
    },
    description: {
      de: 'Die advanced line 200 bietet 200 mm Schnitthöhe und 5.600 mm Schnittlänge für großformatige Werkstücke. Doppelte Vorschubgeschwindigkeit und robuste Bauweise machen sie zum Arbeitstier in anspruchsvollen Industrieumgebungen.',
      en: 'The advanced line 200 offers 200 mm cutting height and 5,600 mm cutting length for large-format workpieces. Double feed speed and robust construction make it the workhorse in demanding industrial environments.',
      cz: 'advanced line 200 nabízí výšku řezu 200 mm a délku řezu 5 600 mm pro velkoformátové obrobky. Dvojnásobná rychlost posuvu a robustní konstrukce ji činí tahounem v náročných průmyslových prostředích.',
      sk: 'advanced line 200 ponúka výšku rezu 200 mm a dĺžku rezu 5 600 mm pre veľkoformátové obrobky.',
      hu: 'Az advanced line 200 200 mm-es vágási magasságot és 5 600 mm-es vágási hosszat kínál nagyformátumú munkadarabokhoz.',
    },
    specs: {
      cuttingLength: '5.600 mm',
      cuttingHeight: '200 mm',
    },
    seoTitle: {
      de: 'Mayer advanced line 200 Plattensäge kaufen – Asamer Händler CZ/SK/HU',
      en: 'Mayer advanced line 200 Panel Saw – Buy via Asamer dealer CZ/SK/HU',
      cz: 'Mayer advanced line 200 formátovací pila – koupit přes Asamer',
      sk: 'Mayer advanced line 200 formátovacia píla – kúpiť cez Asamer',
      hu: 'Mayer advanced line 200 lapszabó fűrész – vásárlás Asamer-en keresztül',
    },
    seoDescription: {
      de: 'advanced line 200 – Plattensäge für Großformate. 200 mm Schnitthöhe, 5.600 mm Schnittlänge. Asamer: autorisierter Mayer-Händler für CZ, SK & HU.',
      en: 'advanced line 200 – panel saw for large formats. 200 mm cutting height, 5,600 mm length. Asamer: authorized Mayer dealer for CZ, SK & HU.',
      cz: 'advanced line 200 – formátovací pila pro velké formáty. Výška řezu 200 mm, délka 5 600 mm. Asamer: autorizovaný prodejce Mayer pro CZ, SK a HU.',
      sk: 'advanced line 200 – formátovacia píla pre veľké formáty. Výška rezu 200 mm, dĺžka 5 600 mm. Asamer: autorizovaný predajca Mayer pre CZ, SK a HU.',
      hu: 'advanced line 200 – lapszabó fűrész nagy formátumokhoz. 200 mm magasság, 5 600 mm hossz. Asamer: hivatalos Mayer viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'advanced-line-250',
    name: 'advanced line 250',
    category: 'advanced',
    image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__49298__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/53827-plattensaege-al250-mayer-feldergroup.png',
    materials: ['aluminium', 'plastics', 'non-ferrous'],
    tagline: {
      de: 'Die stärkste Plattenaufteilsäge ihrer Klasse',
      en: 'The strongest panel dividing saw in its class',
      cz: 'Nejsilnější formátovací pila ve své třídě',
      sk: 'Najsilnejšia formátovacia píla vo svojej triede',
      hu: 'A kategória legerősebb lapszabó fűrésze',
    },
    description: {
      de: 'Die advanced line 250 ist die stärkste Plattenaufteilsäge ihrer Klasse: 55/75 kW Motor, 3.200–4.200 mm Schnittlänge, 860 mm Sägeblattdurchmesser und 270 mm Projektion. Für industrielle Fertigung ohne Kompromisse konzipiert – dort, wo maximale Schneidleistung zählt.',
      en: 'The advanced line 250 is the strongest panel dividing saw in its class: 55/75 kW motor, 3,200–4,200 mm cutting length, 860 mm blade diameter and 270 mm projection. Designed for industrial production without compromise – where maximum cutting performance matters.',
      cz: 'advanced line 250 je nejsilnější formátovací pila ve své třídě: motor 55/75 kW, délka řezu 3 200–4 200 mm, průměr kotouče 860 mm a projekce 270 mm. Navržena pro průmyslovou výrobu bez kompromisů – tam, kde záleží na maximálním řezném výkonu.',
      sk: 'advanced line 250 je najsilnejšia formátovacia píla vo svojej triede: motor 55/75 kW, dĺžka rezu 3 200–4 200 mm, priemer kotúča 860 mm a projekcia 270 mm. Navrhnutá pre priemyselnú výrobu bez kompromisov.',
      hu: 'Az advanced line 250 a kategória legerősebb lapszabó fűrésze: 55/75 kW motor, 3 200–4 200 mm vágási hossz, 860 mm fűrészlap átmérő és 270 mm projekció. Kompromisszumok nélküli ipari gyártáshoz tervezve.',
    },
    specs: {
      cuttingLength: '3.200–4.200 mm',
      motor: '55/75 kW',
      bladeDiameter: '860 mm',
      bladeProjection: '270 mm',
    },
    seoTitle: {
      de: 'Mayer advanced line 250 Plattensäge kaufen – Asamer Händler CZ/SK/HU',
      en: 'Mayer advanced line 250 Panel Saw – Buy via Asamer dealer CZ/SK/HU',
      cz: 'Mayer advanced line 250 formátovací pila – koupit přes Asamer',
      sk: 'Mayer advanced line 250 formátovacia píla – kúpiť cez Asamer',
      hu: 'Mayer advanced line 250 lapszabó fűrész – vásárlás Asamer-en keresztül',
    },
    seoDescription: {
      de: 'advanced line 250 – stärkste Plattensäge ihrer Klasse. 55/75 kW Motor, 860 mm Sägeblatt. Asamer: autorisierter Mayer-Händler für CZ, SK & HU.',
      en: 'advanced line 250 – strongest panel saw in its class. 55/75 kW motor, 860 mm blade. Asamer: authorized Mayer dealer for CZ, SK & HU.',
      cz: 'advanced line 250 – nejsilnější formátovací pila ve své třídě. Motor 55/75 kW, kotouč 860 mm. Asamer: autorizovaný prodejce Mayer pro CZ, SK a HU.',
      sk: 'advanced line 250 – najsilnejšia formátovacia píla vo svojej triede. Motor 55/75 kW, kotúč 860 mm. Asamer: autorizovaný predajca Mayer pre CZ, SK a HU.',
      hu: 'advanced line 250 – a kategória legerősebb lapszabó fűrésze. 55/75 kW motor, 860 mm lap. Asamer: hivatalos Mayer viszonteladó CZ, SK és HU.',
    },
  },

  /* ==================== INDUSTRIAL ==================== */
  {
    slug: 'winkelanlagen',
    name: 'Winkelanlagen',
    category: 'industrial',
    image: 'https://www.mayersaws.com/_default_upload_bucket/image-thumb__36173__auto_88f8b0d4a7f0eb5ed8ac6b67f6f79577/P_M_MA_Winkelanlagen_1140x743_1.png',
    materials: ['aluminium', 'plastics', 'non-ferrous', 'wood'],
    tagline: {
      de: 'Winkelschneid-Anlagen für die industrielle Produktion',
      en: 'Angle cutting systems for industrial production',
      cz: 'Úhlové řezací systémy pro průmyslovou výrobu',
      sk: 'Uhlové rezacie systémy pre priemyselnú výrobu',
      hu: 'Szögvágó rendszerek ipari gyártáshoz',
    },
    description: {
      de: 'Mayer Winkelanlagen sind maßgeschneiderte Schneidlösungen für industrielle Produktionslinien. Automatisierte Längs- und Querschnitte in einem System – konfiguierbar nach Ihren spezifischen Anforderungen an Materialart, Format und Durchsatz.',
      en: 'Mayer angle cutting systems are custom cutting solutions for industrial production lines. Automated longitudinal and cross cuts in one system – configurable to your specific requirements for material type, format and throughput.',
      cz: 'Úhlové řezací systémy Mayer jsou zakázková řešení pro průmyslové výrobní linky. Automatizované podélné a příčné řezy v jednom systému – konfigurovatelné podle vašich specifických požadavků na druh materiálu, formát a průchodnost.',
      sk: 'Uhlové rezacie systémy Mayer sú zákazkové riešenia pre priemyselné výrobné linky. Automatizované pozdĺžne a priečne rezy v jednom systéme.',
      hu: 'A Mayer szögvágó rendszerek egyedi vágási megoldások ipari gyártósorokhoz. Automatizált hossz- és keresztvágások egy rendszerben – konfigurálható az Ön specifikus anyag-, formátum- és áteresztőképesség-igényeihez.',
    },
    specs: {
      notes: {
        de: 'Individuelle Konfiguration nach Kundenbedarf',
        en: 'Custom configuration per customer requirements',
        cz: 'Individuální konfigurace dle požadavků zákazníka',
        sk: 'Individuálna konfigurácia podľa požiadaviek zákazníka',
        hu: 'Egyedi konfiguráció a vevői igények szerint',
      },
    },
    seoTitle: {
      de: 'Mayer Winkelanlagen – Industrielle Schneidlösungen | Asamer CZ/SK/HU',
      en: 'Mayer Angle Cutting Systems – Industrial Solutions | Asamer CZ/SK/HU',
      cz: 'Mayer úhlové řezací systémy – průmyslová řešení | Asamer CZ/SK/HU',
      sk: 'Mayer uhlové rezacie systémy – priemyselné riešenia | Asamer CZ/SK/HU',
      hu: 'Mayer szögvágó rendszerek – ipari megoldások | Asamer CZ/SK/HU',
    },
    seoDescription: {
      de: 'Winkelanlagen – industrielle Schneidlösungen für Längs- und Querschnitte. Maßgeschneidert. Asamer: autorisierter Mayer-Händler für CZ, SK & HU.',
      en: 'Angle cutting systems – industrial solutions for longitudinal and cross cuts. Custom-built. Asamer: authorized Mayer dealer for CZ, SK & HU.',
      cz: 'Úhlové řezací systémy – průmyslová řešení pro podélné a příčné řezy. Na míru. Asamer: autorizovaný prodejce Mayer pro CZ, SK a HU.',
      sk: 'Uhlové rezacie systémy – priemyselné riešenia pre pozdĺžne a priečne rezy. Na mieru. Asamer: autorizovaný predajca Mayer pre CZ, SK a HU.',
      hu: 'Szögvágó rendszerek – ipari megoldások hossz- és keresztvágásokhoz. Egyedi. Asamer: hivatalos Mayer viszonteladó CZ, SK és HU.',
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Lookup helpers                                                     */
/* ------------------------------------------------------------------ */

const productsBySlug = new Map(MAYER_PRODUCTS.map((p) => [p.slug, p]));

export const getMayerProductBySlug = (slug: string): MayerProduct | undefined =>
  productsBySlug.get(slug);

export const getMayerProductsByCategory = (cat: MayerCategory): MayerProduct[] =>
  MAYER_PRODUCTS.filter((p) => p.category === cat);

export const ALL_MAYER_MODEL_SLUGS = MAYER_PRODUCTS.map((p) => p.slug);
