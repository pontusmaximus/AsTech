import type { Language } from '../i18n';

/* ------------------------------------------------------------------ */
/*  Gannomat category slugs – 10 categories                            */
/* ------------------------------------------------------------------ */

export type GannomatCategory =
  | 'insertion'
  | 'insertion_door'
  | 'machining'
  | 'fitting'
  | 'carcass'
  | 'boring'
  | 'rowboring'
  | 'gluing'
  | 'frame'
  | 'cornerhinge';

const GANNOMAT_CATEGORY_SLUGS: Record<GannomatCategory, Record<Language, string>> = {
  insertion: {
    de: 'bohr-beleim-duebeleintreibmaschinen',
    en: 'drill-glue-dowel-inserting-machines',
    cz: 'vrtaci-lepici-kolkovaci-stroje',
    sk: 'vrtacie-lepiace-kolkovacie-stroje',
    hu: 'furo-ragaszto-csapozo-gepek',
  },
  insertion_door: {
    de: 'duebeleintreibmaschinen-tueren-fenster',
    en: 'dowel-inserters-doors-windows',
    cz: 'kolkovaci-stroje-dvere-okna',
    sk: 'kolkovacie-stroje-dvere-okna',
    hu: 'csapozo-gepek-ajto-ablak',
  },
  machining: {
    de: 'bearbeitungszentren',
    en: 'machining-centers',
    cz: 'obrabeci-centra',
    sk: 'obrabacie-centra',
    hu: 'megmunkalo-kozpontok',
  },
  fitting: {
    de: 'beschlaege-bohrmaschinen',
    en: 'fitting-boring-machines',
    cz: 'vrtacky-na-kovani',
    sk: 'vrtacky-na-kovanie',
    hu: 'vasalatfuro-gepek',
  },
  carcass: {
    de: 'korpuspressen',
    en: 'carcass-presses',
    cz: 'korpusove-lisy',
    sk: 'korpusove-lisy',
    hu: 'korpusz-presek',
  },
  boring: {
    de: 'duebelbohrmaschinen',
    en: 'dowel-boring-machines',
    cz: 'kolkovaci-vrtacky',
    sk: 'kolkovacie-vrtacky',
    hu: 'csap-furo-gepek',
  },
  rowboring: {
    de: 'lochreihenbohrmaschinen',
    en: 'row-boring-machines',
    cz: 'radove-vrtacky',
    sk: 'radove-vrtacky',
    hu: 'soros-furo-gepek',
  },
  gluing: {
    de: 'beleimmaschinen',
    en: 'gluing-systems',
    cz: 'lepici-systemy',
    sk: 'lepiace-systemy',
    hu: 'ragaszto-rendszer',
  },
  frame: {
    de: 'rahmenduebel-maschinen',
    en: 'frame-dowel-machines',
    cz: 'ramove-vrtacky',
    sk: 'ramove-vrtacky',
    hu: 'keret-csapozo-gepek',
  },
  cornerhinge: {
    de: 'ecklager-bohrmaschinen',
    en: 'corner-hinge-machines',
    cz: 'vrtacky-na-zavesy',
    sk: 'vrtacky-na-zavesy',
    hu: 'sarokpant-furo-gepek',
  },
};

export const GANNOMAT_CATEGORY_SLUG_VARIANTS = [
  ...new Set(
    (Object.values(GANNOMAT_CATEGORY_SLUGS) as Record<Language, string>[]).flatMap((m) =>
      Object.values(m),
    ),
  ),
];

export const getGannomatCategorySlug = (cat: GannomatCategory, lang: Language): string =>
  GANNOMAT_CATEGORY_SLUGS[cat][lang];

export const findGannomatCategoryBySlug = (slug: string): GannomatCategory | undefined => {
  for (const [cat, langMap] of Object.entries(GANNOMAT_CATEGORY_SLUGS)) {
    if (Object.values(langMap).includes(slug)) return cat as GannomatCategory;
  }
  return undefined;
};

export const buildGannomatProductPath = (lang: Language, product: GannomatProduct): string =>
  `/gannomat/${GANNOMAT_CATEGORY_SLUGS[product.category][lang]}/${product.slug}`;

export const buildGannomatProductPathRaw = (
  lang: Language,
  category: GannomatCategory,
  modelSlug: string,
): string => `/gannomat/${GANNOMAT_CATEGORY_SLUGS[category][lang]}/${modelSlug}`;

/* ------------------------------------------------------------------ */
/*  Category labels                                                    */
/* ------------------------------------------------------------------ */

export const GANNOMAT_CATEGORY_LABELS: Record<GannomatCategory, Record<Language, string>> = {
  insertion: {
    de: 'Bohr-, Beleim- & Dübeleintreibmaschinen',
    en: 'Drill, Glue & Dowel Inserting Machines',
    cz: 'Vrtací, lepicí a kolkovací stroje',
    sk: 'Vŕtacie, lepiace a kolkovacie stroje',
    hu: 'Fúró-, ragasztó- és csapozógépek',
  },
  insertion_door: {
    de: 'Dübeleintreibmaschinen für Türen & Fenster',
    en: 'Dowel Inserters for Doors & Windows',
    cz: 'Kolkovací stroje pro dveře a okna',
    sk: 'Kolkovacie stroje pre dvere a okná',
    hu: 'Csapozógépek ajtókhoz és ablakokhoz',
  },
  machining: {
    de: 'Bearbeitungszentren',
    en: 'Machining Centers',
    cz: 'Obráběcí centra',
    sk: 'Obrábacie centrá',
    hu: 'Megmunkáló központok',
  },
  fitting: {
    de: 'Beschlägebohr- & Einpressmaschinen',
    en: 'Fitting Boring & Insertion Machines',
    cz: 'Vrtačky a lisy na kování',
    sk: 'Vŕtačky a lisy na kovanie',
    hu: 'Vasalatfúró és -bepréselo gépek',
  },
  carcass: {
    de: 'Korpuspressen & Montagesysteme',
    en: 'Carcass Presses & Assembly Systems',
    cz: 'Korpusové lisy a montážní systémy',
    sk: 'Korpusové lisy a montážne systémy',
    hu: 'Korpuszprések és szerelőrendszerek',
  },
  boring: {
    de: 'Universal-Dübellochbohrmaschinen',
    en: 'Universal Dowel Boring Machines',
    cz: 'Univerzální kolkovací vrtačky',
    sk: 'Univerzálne kolkovacie vŕtačky',
    hu: 'Univerzális csapfúró gépek',
  },
  rowboring: {
    de: 'Doppel-Lochreihenbohrmaschinen',
    en: 'Double Row Boring Machines',
    cz: 'Řadové vrtačky',
    sk: 'Radové vŕtačky',
    hu: 'Sorosfúró gépek',
  },
  gluing: {
    de: 'Beleimmaschinen',
    en: 'Gluing Systems',
    cz: 'Lepicí systémy',
    sk: 'Lepiace systémy',
    hu: 'Ragasztórendszerek',
  },
  frame: {
    de: 'Rahmendübel- & Langlochbohrmaschinen',
    en: 'Frame Dowel & Slot Boring Machines',
    cz: 'Rámové a drážkové vrtačky',
    sk: 'Rámové a drážkové vŕtačky',
    hu: 'Keretcsap- és horony fúrógépek',
  },
  cornerhinge: {
    de: 'Ecklager- & Olivenbohrmaschinen',
    en: 'Corner Hinge & Olive Boring Machines',
    cz: 'Vrtačky na závěsy a olivy',
    sk: 'Vŕtačky na závesy a olivy',
    hu: 'Sarokpánt- és olívafúró gépek',
  },
};

/* ------------------------------------------------------------------ */
/*  Product type                                                       */
/* ------------------------------------------------------------------ */

export interface GannomatProduct {
  slug: string;
  name: string;
  category: GannomatCategory;
  flagship?: boolean;
  tagline: Record<Language, string>;
  image: string;
  description: Record<Language, string>;
  seoTitle: Record<Language, string>;
  seoDescription: Record<Language, string>;
}

/* ------------------------------------------------------------------ */
/*  Helper: generate seoTitle/seoDescription from product name         */
/* ------------------------------------------------------------------ */

const IMG_SELEKTA = 'https://www.gannomat.at/Bilder_0253/Gannomat_Duebeleintreibgeraet_Selekta_pic01.jpg';
const IMG_INDEX = 'https://www.gannomat.at/Bilder_0471/Gannomat_Bohr-Leim-Duebeleintreib-Maschine_Index_pic01.jpg';
const IMG_ELITE = 'https://www.gannomat.at/Bilder_0410/Gannomat_Bohr-Leim-Duebeleintreib-Maschine_Elite_pic01.jpg';
const IMG_SPECTRUM = 'https://www.gannomat.at/Bilder_0430/Gannomat_Durchlauf-Bohr-Leim-Duebeleintreib-Maschine_Spectrum_pic01.jpg';
const IMG_SELEKTA_HD = 'https://www.gannomat.at/Bilder_0253HD/Gannomat_Duebeleintreibgeraet_Selekta_HD_pic01.jpg';
const IMG_INJECTA_HD = 'https://www.gannomat.at/Bilder_1511HD/Gannomat_Leimauftraggeraet_Injecta_HD_pic01.jpg';
const IMG_INDEX_DW = 'https://www.gannomat.at/Bilder_0471DW/Gannomat_Fenster-Bohr-Leim-Duebeleintreib-Maschine_Index_DW2_pic01.jpg';
const IMG_PROTEC = 'https://www.gannomat.at/Bilder_0571/Gannomat_Bearbeitungszentrum_ProTec_pic01.jpg';
const IMG_RED_BARON = 'https://www.gannomat.at/Bilder_0204/Gannomat_Beschlaege-Bohr-Einpress-Maschine_Red_Baron_P_pic01.jpg';
const IMG_BASICA = 'https://www.gannomat.at/Bilder_0194/Gannomat_Beschlaege-Bohr-Einpress-Maschine_Basica_Variabel_pic01.jpg';
const IMG_EXPRESS_S1 = 'https://www.gannomat.at/Bilder_0801/Gannomat_Beschlaege-Bohr-Einpress-Maschine_Express_S1_pic01.jpg';
const IMG_EXPRESS_S2 = 'https://www.gannomat.at/Bilder_0802/Gannomat_Beschlaege-Bohr-Einpress-Maschine_Express_S2_pic01.jpg';
const IMG_EXPRESS_S1_CNC = 'https://www.gannomat.at/Bilder_0820/Gannomat_CNC_Beschlaege-Bohr-Einpress-Maschine_Express_S1_CNC_pic01.jpg';
const IMG_EXPRESS_807 = 'https://www.gannomat.at/Bilder_0807/Gannomat_Beschlaege-Bohr-Einpress-Maschine_Express_807_pic01.jpg';
const IMG_VECTOR = 'https://www.gannomat.at/Bilder_0810/Gannomat_Fronten-CNC-Bearbeitungszentrum_Vector_pic01.jpg';
const IMG_EXPRESS_S1_RTA = 'https://www.gannomat.at/Bilder_0801rta/Gannomat_Verbinder-Bohr-Einpress-Maschine_Express_S1_RTA_pic01.jpg';
const IMG_EXPRESS_S2_RTA = 'https://www.gannomat.at/Bilder_0802rta/Gannomat_Verbinder-Bohr-Einpress-Maschine_Express_S2_RTA_pic01.jpg';
const IMG_CONCEPT_EASY = 'https://www.gannomat.at/Bilder_0750/Gannomat_Korpuspresse_Schubkastenpresse_Concept-Easy_pic01.jpg';
const IMG_CONCEPT_ECO = 'https://www.gannomat.at/Bilder_0730/Gannomat_Korpuspresse_Concept_Eco_pic01.jpg';
const IMG_CONCEPT_PRIMUS = 'https://www.gannomat.at/Bilder_0721/Gannomat_Korpuspresse_Concept_Primus_pic01.jpg';
const IMG_LIFT_JUMPER = 'https://www.gannomat.at/Bilder_0700_LJ/Gannomat_Hubtisch_Lift-Jumper_pic01_X2.jpg';
const IMG_LIFT = 'https://www.gannomat.at/Bilder_0700_L/Gannomat_Hubtisch_Lift_pic01.jpg';
const IMG_DB21 = 'https://www.gannomat.at/Bilder_0530/Gannomat_Duebelbohrmaschine_DB21_pic01.jpg';
const IMG_DB27WA = 'https://www.gannomat.at/Bilder_0530/Gannomat_Duebelbohrmaschine_DB27WA_pic01.jpg';
const IMG_PROLINE = 'https://www.gannomat.at/Bilder_0600/Gannomat_Lochreihenbohrmaschine_ProLine_pic01.jpg';
const IMG_VANTAGE = 'https://www.gannomat.at/Bilder_0610/Gannomat_Lochreihenbohrmaschine_Vantage_pic01.jpg';
const IMG_LEIMFIX = 'https://www.gannomat.at/Bilder_1500/Gannomat_Leimauftraggeraet_Leimfix_pic01.jpg';
const IMG_INJECTA = 'https://www.gannomat.at/Bilder_1511/Gannomat_Leimauftraggeraet_Injecta_pic01.jpg';
const IMG_JUNIOR = 'https://www.gannomat.at/Bilder_0323/Gannomat_Rahmenduebelbohrmaschine_Junior_pic01.jpg';
const IMG_MASTER = 'https://www.gannomat.at/Bilder_0325/Gannomat_Treppenbohrmaschine_Master_pic01.jpg';
const IMG_MOD160 = 'https://www.gannomat.at/Bilder_0160/Gannomat_Rahmenduebelbohrmaschine_Mod160_pic01.jpg';
const IMG_EXPERT = 'https://www.gannomat.at/Bilder_0194f/Gannomat_Ecklager_Olivenbohrmaschine_Expert_pic01.jpg';
const IMG_TWIN = 'https://www.gannomat.at/Bilder_0380/Gannomat_Ecklager_Olivenbohrmaschine_Twin_pic01.jpg';

const seoT = (name: string): Record<Language, string> => ({
  de: `Gannomat ${name} – Asamer Händler CZ/SK/HU`,
  en: `Gannomat ${name} – Asamer dealer CZ/SK/HU`,
  cz: `Gannomat ${name} – koupit přes Asamer`,
  sk: `Gannomat ${name} – kúpiť cez Asamer`,
  hu: `Gannomat ${name} – Asamer viszonteladó CZ/SK/HU`,
});

const seoD = (name: string, de: string, en: string, cz: string): Record<Language, string> => ({
  de: `${name} – ${de} Asamer: autorisierter Gannomat-Händler für CZ, SK & HU.`,
  en: `${name} – ${en} Asamer: authorized Gannomat dealer for CZ, SK & HU.`,
  cz: `${name} – ${cz} Asamer: autorizovaný prodejce Gannomat pro CZ, SK a HU.`,
  sk: `${name} – ${cz.replace(/č/g, 'č').replace(/ž/g, 'ž')} Asamer: autorizovaný predajca Gannomat pre CZ, SK a HU.`,
  hu: `${name} – ${en} Asamer: hivatalos Gannomat viszonteladó CZ, SK és HU.`,
});

/* ------------------------------------------------------------------ */
/*  Full product catalog                                               */
/* ------------------------------------------------------------------ */

export const GANNOMAT_PRODUCTS: GannomatProduct[] = [

  /* ============ INSERTION (Platten / Massivholz) ============ */
  {
    slug: 'selekta',
    name: 'Selekta',
    category: 'insertion',
    flagship: true,
    image: IMG_SELEKTA,
    tagline: { de: 'Die perfekte Lösung für den Handwerker – seit 1956', en: 'The perfect solution for the craftsman – since 1956', cz: 'Perfektní řešení pro řemeslníka – od roku 1956', sk: 'Perfektné riešenie pre remeselníka – od roku 1956', hu: 'A tökéletes megoldás kézművesek számára – 1956 óta' },
    description: { de: 'Die Gannomat Selekta ist eine pistolenförmige Dübeleintreibmaschine für gleichzeitiges Beleimen und Dübeleintreiben – ein österreichisches Qualitätsprodukt seit 1956. Als meistverkauftes Gannomat-Produkt bei Asamer überzeugt sie durch kompakte Bauweise, einfache Handhabung und höchste Zuverlässigkeit in der täglichen Möbelproduktion.', en: 'The Gannomat Selekta is a pistol-type dowel insertion machine for simultaneous gluing and dowel insertion – an Austrian quality product since 1956. As the best-selling Gannomat product at Asamer, it excels through compact design, easy handling and highest reliability in daily furniture production.', cz: 'Gannomat Selekta je pistolový kolkovací stroj pro současné lepení a zatlačování kolíků – rakouský kvalitní produkt od roku 1956. Jako nejprodávanější produkt Gannomat u Asamer přesvědčuje kompaktním provedením, snadnou obsluhou a nejvyšší spolehlivostí v každodenní výrobě nábytku.', sk: 'Gannomat Selekta je pištoľový kolkovací stroj pre súčasné lepenie a zatlačovanie kolíkov – rakúsky kvalitný produkt od roku 1956.', hu: 'A Gannomat Selekta pisztolyformájú csapozógép az egyidejű ragasztáshoz és csapbeveréshez – osztrák minőségi termék 1956 óta.' },
    seoTitle: seoT('Selekta'),
    seoDescription: { de: 'Selekta – pistolenförmige Dübeleintreibmaschine. Gleichzeitiges Beleimen und Eintreiben. Asamer: autorisierter Gannomat-Händler für CZ, SK & HU.', en: 'Selekta – pistol-type dowel inserter. Simultaneous gluing and insertion. Asamer: authorized Gannomat dealer for CZ, SK & HU.', cz: 'Selekta – pistolový kolkovací stroj. Současné lepení a zatlačování kolíků. Asamer: autorizovaný prodejce Gannomat pro CZ, SK a HU.', sk: 'Selekta – pištoľový kolkovací stroj. Súčasné lepenie a zatlačovanie kolíkov. Asamer: autorizovaný predajca Gannomat pre CZ, SK a HU.', hu: 'Selekta – pisztolyformájú csapozógép. Egyidejű ragasztás és beverés. Asamer: hivatalos Gannomat viszonteladó CZ, SK és HU.' },
  },
  {
    slug: 'index-reihe-cnc',
    name: 'Index Reihe CNC',
    category: 'insertion',
    flagship: true,
    image: IMG_INDEX,
    tagline: { de: 'CNC-Bearbeitungszentrum für Bohren, Beleimen und Dübeleintreiben', en: 'CNC machining center for drilling, gluing and dowel insertion', cz: 'CNC obráběcí centrum pro vrtání, lepení a kolkování', sk: 'CNC obrábacie centrum pre vŕtanie, lepenie a kolkovanie', hu: 'CNC megmunkáló központ fúráshoz, ragasztáshoz és csapozáshoz' },
    description: { de: 'Das Gannomat Index Reihe CNC ist ein CNC-gesteuertes Bearbeitungszentrum für Bohren, Beleimen und Dübeleintreiben in einem Arbeitsgang. Hohe Automatisierung und Präzision machen es zur idealen Lösung für die industrielle Möbelproduktion mit hohem Durchsatz.', en: 'The Gannomat Index Series CNC is a CNC-controlled machining center for drilling, gluing and dowel insertion in a single operation. High automation and precision make it the ideal solution for industrial furniture production with high throughput.', cz: 'Gannomat Index Reihe CNC je CNC řízené obráběcí centrum pro vrtání, lepení a kolkování v jedné operaci. Vysoká automatizace a přesnost jej činí ideálním řešením pro průmyslovou výrobu nábytku s vysokou propustností.', sk: 'Gannomat Index Reihe CNC je CNC riadené obrábacie centrum pre vŕtanie, lepenie a kolkovanie v jednej operácii.', hu: 'A Gannomat Index Reihe CNC CNC-vezérelt megmunkáló központ fúráshoz, ragasztáshoz és csapozáshoz egyetlen műveletben.' },
    seoTitle: seoT('Index Reihe CNC'),
    seoDescription: { de: 'Index Reihe CNC – CNC-Bearbeitungszentrum für Bohren, Beleimen und Eintreiben. Ein Arbeitsgang. Asamer: autorisierter Gannomat-Händler für CZ, SK & HU.', en: 'Index Series CNC – CNC machining center for drilling, gluing and dowel insertion. Single operation. Asamer: authorized Gannomat dealer for CZ, SK & HU.', cz: 'Index Reihe CNC – CNC obráběcí centrum pro vrtání, lepení a kolkování. Jedna operace. Asamer: autorizovaný prodejce Gannomat pro CZ, SK a HU.', sk: 'Index Reihe CNC – CNC obrábacie centrum pre vŕtanie, lepenie a kolkovanie. Jedna operácia. Asamer: autorizovaný predajca Gannomat pre CZ, SK a HU.', hu: 'Index Reihe CNC – CNC megmunkáló központ fúráshoz, ragasztáshoz és csapozáshoz. Egy művelet. Asamer: hivatalos Gannomat viszonteladó CZ, SK és HU.' },
  },
  {
    slug: 'elite', name: 'Elite', category: 'insertion', image: IMG_ELITE,
    tagline: { de: 'Stationärmaschine mit Mehrspindelkopf', en: 'Stationary machine with multi-spindle head', cz: 'Stacionární stroj s vícevřetenovým hlavou', sk: 'Stacionárny stroj s viacvretenovým hlavou', hu: 'Álló gép többorsós fejjel' },
    description: { de: 'Die Gannomat Elite ist eine stationäre Bohr-, Beleim- und Dübeleintreibmaschine mit Mehrspindelkopf und verstellbaren Dübelstationen. Hohe Flexibilität bei mittleren bis großen Produktionsmengen.', en: 'The Gannomat Elite is a stationary drilling, gluing and dowel insertion machine with multi-spindle head and adjustable dowel stations. High flexibility for medium to large production volumes.', cz: 'Gannomat Elite je stacionární vrtací, lepicí a kolkovací stroj s vícevřetenovým hlavou a nastavitelnými kolkovacími stanicemi.', sk: 'Gannomat Elite je stacionárny vrtací, lepiaci a kolkovací stroj s viacvretenovým hlavou a nastaviteľnými kolkovacími stanicami.', hu: 'A Gannomat Elite álló fúró-, ragasztó- és csapozógép többorsós fejjel és állítható csapozó állomásokkal.' },
    seoTitle: seoT('Elite'),
    seoDescription: seoD('Elite', 'stationäre Dübeleintreibmaschine mit Mehrspindelkopf.', 'stationary dowel inserter with multi-spindle head.', 'stacionární kolkovací stroj s vícevřetenovým hlavou.'),
  },
  {
    slug: 'spectrum', name: 'Spectrum', category: 'insertion', image: IMG_SPECTRUM,
    tagline: { de: 'Durchlaufmaschine – beidseitig', en: 'Throughfeed machine – double-sided', cz: 'Průchozí stroj – oboustranný', sk: 'Priechodný stroj – obojstranný', hu: 'Átmenő gép – kétoldalas' },
    description: { de: 'Die Gannomat Spectrum ist eine Durchlaufmaschine für beidseitiges Bohren, Beleimen und Dübeleintreiben mit Mehrspindelköpfen. Konzipiert für hohe Durchsatzraten in der industriellen Möbelproduktion.', en: 'The Gannomat Spectrum is a throughfeed machine for double-sided drilling, gluing and dowel insertion with multi-spindle heads. Designed for high throughput rates in industrial furniture production.', cz: 'Gannomat Spectrum je průchozí stroj pro oboustranné vrtání, lepení a kolkování s vícevřetenovými hlavami.', sk: 'Gannomat Spectrum je priechodný stroj pre obojstranné vŕtanie, lepenie a kolkovanie s viacvretenovými hlavami.', hu: 'A Gannomat Spectrum átmenő gép kétoldalas fúráshoz, ragasztáshoz és csapozáshoz többorsós fejekkel.' },
    seoTitle: seoT('Spectrum'),
    seoDescription: seoD('Spectrum', 'beidseitige Durchlaufmaschine mit Mehrspindelköpfen.', 'double-sided throughfeed machine with multi-spindle heads.', 'oboustranný průchozí stroj s vícevřetenovými hlavami.'),
  },

  /* ============ INSERTION DOOR/WINDOW ============ */
  {
    slug: 'selekta-hd', name: 'Selekta HD', category: 'insertion_door', image: IMG_SELEKTA_HD,
    tagline: { de: 'Dübeleintreiben für Türen und Fenster', en: 'Dowel insertion for doors and windows', cz: 'Kolkování pro dveře a okna', sk: 'Kolkovanie pre dvere a okná', hu: 'Csapozás ajtókhoz és ablakokhoz' },
    description: { de: 'Die Selekta HD ist die Heavy-Duty-Variante der bewährten Selekta, speziell für die Anforderungen der Türen- und Fensterproduktion ausgelegt. Robustere Konstruktion für schwere Werkstücke.', en: 'The Selekta HD is the heavy-duty variant of the proven Selekta, specifically designed for the requirements of door and window production. More robust construction for heavy workpieces.', cz: 'Selekta HD je robustní varianta osvědčené Selekty, speciálně navržená pro požadavky výroby dveří a oken.', sk: 'Selekta HD je robustná varianta osvedčenej Selekty, špeciálne navrhnutá pre požiadavky výroby dverí a okien.', hu: 'A Selekta HD a bevált Selekta nagy teherbírású változata, kifejezetten ajtó- és ablakgyártáshoz.' },
    seoTitle: seoT('Selekta HD'),
    seoDescription: seoD('Selekta HD', 'Heavy-Duty-Dübeleintreibmaschine für Türen und Fenster.', 'heavy-duty dowel inserter for doors and windows.', 'robustní kolkovací stroj pro dveře a okna.'),
  },
  {
    slug: 'injecta-hd', name: 'Injecta HD', category: 'insertion_door', image: IMG_INJECTA_HD,
    tagline: { de: 'Elektronische Leimeinspritzung für schwere Werkstücke', en: 'Electronic glue injection for heavy workpieces', cz: 'Elektronické vstřikování lepidla pro těžké obrobky', sk: 'Elektronické vstrekovanie lepidla pre ťažké obrobky', hu: 'Elektronikus ragasztóbefecskendezés nehéz munkadarabokhoz' },
    description: { de: 'Die Injecta HD ist die Heavy-Duty-Version des Injecta-Leimeinspritzsystems, optimiert für die Verarbeitung von Türen- und Fensterelementen mit größeren Dübellochdurchmessern und höheren Leimmengen.', en: 'The Injecta HD is the heavy-duty version of the Injecta glue injection system, optimized for processing door and window elements with larger dowel hole diameters and higher glue volumes.', cz: 'Injecta HD je robustní verze systému vstřikování lepidla Injecta, optimalizovaná pro zpracování dveřních a okenních prvků.', sk: 'Injecta HD je robustná verzia systému vstrekovania lepidla Injecta, optimalizovaná pre spracovanie dverných a okenných prvkov.', hu: 'Az Injecta HD az Injecta ragasztóbefecskendező rendszer nagy teherbírású változata ajtó- és ablakelemekhez.' },
    seoTitle: seoT('Injecta HD'),
    seoDescription: seoD('Injecta HD', 'Heavy-Duty-Leimeinspritzung für Türen und Fenster.', 'heavy-duty glue injection for doors and windows.', 'robustní vstřikování lepidla pro dveře a okna.'),
  },
  {
    slug: 'index-dw-reihe-cnc', name: 'Index DW Reihe CNC', category: 'insertion_door', image: IMG_INDEX_DW,
    tagline: { de: 'CNC-Bearbeitungszentrum für Türen und Fenster', en: 'CNC machining center for doors and windows', cz: 'CNC obráběcí centrum pro dveře a okna', sk: 'CNC obrábacie centrum pre dvere a okná', hu: 'CNC megmunkáló központ ajtókhoz és ablakokhoz' },
    description: { de: 'Das Index DW Reihe CNC ist ein spezialisiertes CNC-Bearbeitungszentrum für die Türen- und Fensterproduktion. CNC-gesteuertes Bohren, Beleimen und Dübeleintreiben in einem Arbeitsgang – optimiert für die spezifischen Anforderungen der DW-Industrie.', en: 'The Index DW Series CNC is a specialized CNC machining center for door and window production. CNC-controlled drilling, gluing and dowel insertion in a single operation – optimized for the specific requirements of the DW industry.', cz: 'Index DW Reihe CNC je specializované CNC obráběcí centrum pro výrobu dveří a oken. CNC řízené vrtání, lepení a kolkování v jedné operaci.', sk: 'Index DW Reihe CNC je špecializované CNC obrábacie centrum pre výrobu dverí a okien.', hu: 'Az Index DW Reihe CNC speciális CNC megmunkáló központ ajtó- és ablakgyártáshoz.' },
    seoTitle: seoT('Index DW Reihe CNC'),
    seoDescription: seoD('Index DW Reihe CNC', 'CNC-Bearbeitungszentrum für Türen- und Fensterproduktion.', 'CNC machining center for door and window production.', 'CNC obráběcí centrum pro výrobu dveří a oken.'),
  },

  /* ============ MACHINING CENTERS ============ */
  {
    slug: 'protec', name: 'ProTec', category: 'machining', image: IMG_PROTEC,
    tagline: { de: 'CNC-Bearbeitungszentrum für flexible Fertigung', en: 'CNC machining center for flexible production', cz: 'CNC obráběcí centrum pro flexibilní výrobu', sk: 'CNC obrábacie centrum pre flexibilnú výrobu', hu: 'CNC megmunkáló központ rugalmas gyártáshoz' },
    description: { de: 'Das Gannomat ProTec ist ein eigenständiges CNC-Bearbeitungszentrum für Bohren, Fräsen und Dübeleintreiben. Flexible Fertigung mit hoher Präzision für anspruchsvolle Anwendungen in der Möbelproduktion.', en: 'The Gannomat ProTec is a standalone CNC machining center for drilling, routing and dowel insertion. Flexible production with high precision for demanding applications in furniture manufacturing.', cz: 'Gannomat ProTec je samostatné CNC obráběcí centrum pro vrtání, frézování a kolkování. Flexibilní výroba s vysokou přesností.', sk: 'Gannomat ProTec je samostatné CNC obrábacie centrum pre vŕtanie, frézovanie a kolkovanie.', hu: 'A Gannomat ProTec önálló CNC megmunkáló központ fúráshoz, maráshoz és csapozáshoz.' },
    seoTitle: seoT('ProTec'),
    seoDescription: seoD('ProTec', 'CNC-Bearbeitungszentrum für Bohren, Fräsen und Dübeleintreiben.', 'CNC machining center for drilling, routing and dowel insertion.', 'CNC obráběcí centrum pro vrtání, frézování a kolkování.'),
  },
  {
    slug: 'profit', name: 'Profit', category: 'machining', image: IMG_PROTEC,
    tagline: { de: 'Kompaktes CNC-Bearbeitungszentrum', en: 'Compact CNC machining center', cz: 'Kompaktní CNC obráběcí centrum', sk: 'Kompaktné CNC obrábacie centrum', hu: 'Kompakt CNC megmunkáló központ' },
    description: { de: 'Das Gannomat Profit ist ein kompaktes CNC-Bearbeitungszentrum, das auf kleinstem Raum Bohren, Beleimen und Dübeleintreiben vereint. Ideal für Betriebe mit begrenztem Platzangebot und hohem Qualitätsanspruch.', en: 'The Gannomat Profit is a compact CNC machining center combining drilling, gluing and dowel insertion in the smallest footprint. Ideal for operations with limited space and high quality requirements.', cz: 'Gannomat Profit je kompaktní CNC obráběcí centrum spojující vrtání, lepení a kolkování na nejmenším prostoru.', sk: 'Gannomat Profit je kompaktné CNC obrábacie centrum spájajúce vŕtanie, lepenie a kolkovanie na najmenšom priestore.', hu: 'A Gannomat Profit kompakt CNC megmunkáló központ, amely a legkisebb helyen egyesíti a fúrást, ragasztást és csapozást.' },
    seoTitle: seoT('Profit'),
    seoDescription: seoD('Profit', 'kompaktes CNC-Bearbeitungszentrum für kleinen Platzbedarf.', 'compact CNC machining center for small footprint.', 'kompaktní CNC obráběcí centrum pro malý prostor.'),
  },

  /* ============ FITTING (Beschlägebohr- & Einpressmaschinen) ============ */
  {
    slug: 'red-baron-p', name: 'Red Baron P', category: 'fitting', image: IMG_RED_BARON,
    tagline: { de: 'Beschlageinpressmaschine', en: 'Fitting insertion machine', cz: 'Lis na kování', sk: 'Lis na kovanie', hu: 'Vasalat-bepréselo gép' },
    description: { de: 'Die Red Baron P ist eine pneumatische Beschlageinpressmaschine für das schnelle und präzise Einpressen von Beschlägen in Möbelteile.', en: 'The Red Baron P is a pneumatic fitting insertion machine for fast and precise pressing of fittings into furniture parts.', cz: 'Red Baron P je pneumatický lis na kování pro rychlé a přesné zalisování kování do nábytkových dílů.', sk: 'Red Baron P je pneumatický lis na kovanie pre rýchle a presné zalisovanie kovaní do nábytkových dielov.', hu: 'A Red Baron P pneumatikus vasalat-bepréselo gép a vasalatok gyors és precíz bepréseléséhez.' },
    seoTitle: seoT('Red Baron P'), seoDescription: seoD('Red Baron P', 'pneumatische Beschlageinpressmaschine.', 'pneumatic fitting insertion machine.', 'pneumatický lis na kování.'),
  },
  {
    slug: 'basica', name: 'Basica', category: 'fitting', image: IMG_BASICA,
    tagline: { de: 'Einstiegsmodell für Beschlagbearbeitung', en: 'Entry-level model for fitting processing', cz: 'Vstupní model pro zpracování kování', sk: 'Vstupný model pre spracovanie kovaní', hu: 'Belépő modell vasalat-megmunkáláshoz' },
    description: { de: 'Die Basica ist das Einstiegsmodell für die Beschlagbearbeitung – zuverlässig, kompakt und einfach zu bedienen.', en: 'The Basica is the entry-level model for fitting processing – reliable, compact and easy to operate.', cz: 'Basica je vstupní model pro zpracování kování – spolehlivý, kompaktní a snadno ovladatelný.', sk: 'Basica je vstupný model pre spracovanie kovaní – spoľahlivý, kompaktný a jednoducho ovládateľný.', hu: 'A Basica a vasalat-megmunkálás belépő modellje – megbízható, kompakt és könnyen kezelhető.' },
    seoTitle: seoT('Basica'), seoDescription: seoD('Basica', 'Einstiegsmodell für Beschlagbearbeitung.', 'entry-level model for fitting processing.', 'vstupní model pro zpracování kování.'),
  },
  {
    slug: 'variabel', name: 'Variabel', category: 'fitting', image: IMG_BASICA,
    tagline: { de: 'Flexible Beschlagbohrmaschine', en: 'Flexible fitting boring machine', cz: 'Flexibilní vrtačka na kování', sk: 'Flexibilná vŕtačka na kovanie', hu: 'Rugalmas vasalatfúró gép' },
    description: { de: 'Die Variabel ist eine flexible Beschlagbohrmaschine für unterschiedliche Beschlagtypen und Werkstückgrößen. Anpassbar an verschiedene Produktionsanforderungen.', en: 'The Variabel is a flexible fitting boring machine for different fitting types and workpiece sizes. Adaptable to various production requirements.', cz: 'Variabel je flexibilní vrtačka na kování pro různé typy kování a velikosti obrobků.', sk: 'Variabel je flexibilná vŕtačka na kovanie pre rôzne typy kovaní a veľkosti obrobkov.', hu: 'A Variabel rugalmas vasalatfúró gép különböző vasalattípusokhoz és munkadarab-méretekhez.' },
    seoTitle: seoT('Variabel'), seoDescription: seoD('Variabel', 'flexible Beschlagbohrmaschine für verschiedene Beschlagtypen.', 'flexible fitting boring machine for various fitting types.', 'flexibilní vrtačka na kování pro různé typy.'),
  },
  {
    slug: 'express-s1', name: 'Express S1', category: 'fitting', image: IMG_EXPRESS_S1,
    tagline: { de: 'Einspindlige Beschlagbohrmaschine', en: 'Single-spindle fitting boring machine', cz: 'Jednovřetenová vrtačka na kování', sk: 'Jednovretenová vŕtačka na kovanie', hu: 'Egyorsós vasalatfúró gép' },
    description: { de: 'Die Express S1 ist eine einspindlige Beschlagbohrmaschine für schnelles Bohren und Einpressen von Topfscharnieren und Verbindungsbeschlägen.', en: 'The Express S1 is a single-spindle fitting boring machine for fast drilling and pressing of cup hinges and connecting fittings.', cz: 'Express S1 je jednovřetenová vrtačka na kování pro rychlé vrtání a zalisování nábytkových závěsů a spojovacího kování.', sk: 'Express S1 je jednovretenová vŕtačka na kovanie pre rýchle vŕtanie a zalisovanie nábytkových závesov.', hu: 'Az Express S1 egyorsós vasalatfúró gép csészés pántok és összekötő vasalatok gyors fúrásához és bepréseléséhez.' },
    seoTitle: seoT('Express S1'), seoDescription: seoD('Express S1', 'einspindlige Beschlagbohrmaschine.', 'single-spindle fitting boring machine.', 'jednovřetenová vrtačka na kování.'),
  },
  {
    slug: 'express-s2', name: 'Express S2', category: 'fitting', image: IMG_EXPRESS_S2,
    tagline: { de: 'Zweispindlige Beschlagbohrmaschine', en: 'Two-spindle fitting boring machine', cz: 'Dvouvřetenová vrtačka na kování', sk: 'Dvojvretenová vŕtačka na kovanie', hu: 'Kétorsós vasalatfúró gép' },
    description: { de: 'Die Express S2 bietet mit zwei Spindeln höhere Produktivität beim Bohren und Einpressen von Beschlägen. Ideal für mittlere bis hohe Stückzahlen.', en: 'The Express S2 offers higher productivity with two spindles for drilling and pressing fittings. Ideal for medium to high volumes.', cz: 'Express S2 nabízí s dvěma vřeteny vyšší produktivitu při vrtání a zalisování kování.', sk: 'Express S2 ponúka s dvoma vretenami vyššiu produktivitu pri vŕtaní a zalisovaní kovaní.', hu: 'Az Express S2 két orsóval magasabb termelékenységet biztosít a vasalatok fúrásánál és bepréselésénél.' },
    seoTitle: seoT('Express S2'), seoDescription: seoD('Express S2', 'zweispindlige Beschlagbohrmaschine.', 'two-spindle fitting boring machine.', 'dvouvřetenová vrtačka na kování.'),
  },
  {
    slug: 'express-s3', name: 'Express S3', category: 'fitting', image: IMG_EXPRESS_S2,
    tagline: { de: 'Dreispindlige Beschlagbohrmaschine', en: 'Three-spindle fitting boring machine', cz: 'Třívřetenová vrtačka na kování', sk: 'Trojvretenová vŕtačka na kovanie', hu: 'Háromorsós vasalatfúró gép' },
    description: { de: 'Die Express S3 verarbeitet mit drei Spindeln mehrere Beschlagtypen gleichzeitig. Optimiert für hohe Stückzahlen in der Serienproduktion.', en: 'The Express S3 processes multiple fitting types simultaneously with three spindles. Optimized for high volumes in series production.', cz: 'Express S3 zpracovává se třemi vřeteny více typů kování současně. Optimalizovaná pro velké série.', sk: 'Express S3 spracováva s troma vretenami viac typov kovaní súčasne.', hu: 'Az Express S3 három orsóval egyszerre több vasalattípust dolgoz fel.' },
    seoTitle: seoT('Express S3'), seoDescription: seoD('Express S3', 'dreispindlige Beschlagbohrmaschine für Serienproduktion.', 'three-spindle fitting boring machine for series production.', 'třívřetenová vrtačka na kování pro sériovou výrobu.'),
  },
  {
    slug: 'express-s4', name: 'Express S4', category: 'fitting', image: IMG_EXPRESS_S2,
    tagline: { de: 'Vierspindlige Beschlagbohrmaschine', en: 'Four-spindle fitting boring machine', cz: 'Čtyřvřetenová vrtačka na kování', sk: 'Štvrvretenová vŕtačka na kovanie', hu: 'Négyorsós vasalatfúró gép' },
    description: { de: 'Die Express S4 bietet mit vier Spindeln maximale Flexibilität und Durchsatz bei der Beschlagbearbeitung.', en: 'The Express S4 offers maximum flexibility and throughput for fitting processing with four spindles.', cz: 'Express S4 nabízí se čtyřmi vřeteny maximální flexibilitu a propustnost při zpracování kování.', sk: 'Express S4 ponúka so štyrmi vretenami maximálnu flexibilitu a priepustnosť.', hu: 'Az Express S4 négy orsóval maximális rugalmasságot és áteresztőképességet biztosít.' },
    seoTitle: seoT('Express S4'), seoDescription: seoD('Express S4', 'vierspindlige Beschlagbohrmaschine.', 'four-spindle fitting boring machine.', 'čtyřvřetenová vrtačka na kování.'),
  },
  {
    slug: 'express-s5', name: 'Express S5', category: 'fitting', image: IMG_EXPRESS_S2,
    tagline: { de: 'Fünfspindlige Hochleistungs-Beschlagmaschine', en: 'Five-spindle high-performance fitting machine', cz: 'Pětivřetenový vysokovýkonný stroj na kování', sk: 'Päťvretenový vysokovýkonný stroj na kovanie', hu: 'Ötorsós nagyteljesítményű vasalatgép' },
    description: { de: 'Die Express S5 ist die leistungsstärkste der Express-Serie mit fünf Spindeln. Für die industrielle Großserienproduktion konzipiert.', en: 'The Express S5 is the most powerful in the Express series with five spindles. Designed for industrial high-volume production.', cz: 'Express S5 je nejvýkonnější z řady Express s pěti vřeteny. Navržen pro průmyslovou velkosériovou výrobu.', sk: 'Express S5 je najvýkonnejší z radu Express s piatimi vretenami.', hu: 'Az Express S5 az Express sorozat legerősebbjei öt orsóval. Ipari nagysorozatú gyártáshoz.' },
    seoTitle: seoT('Express S5'), seoDescription: seoD('Express S5', 'fünfspindlige Hochleistungs-Beschlagmaschine.', 'five-spindle high-performance fitting machine.', 'pětivřetenový vysokovýkonný stroj na kování.'),
  },
  {
    slug: 'express-s1-cnc', name: 'Express S1 CNC', category: 'fitting', image: IMG_EXPRESS_S1_CNC,
    tagline: { de: 'CNC-gesteuerte Beschlagbohrmaschine', en: 'CNC-controlled fitting boring machine', cz: 'CNC řízená vrtačka na kování', sk: 'CNC riadená vŕtačka na kovanie', hu: 'CNC-vezérelt vasalatfúró gép' },
    description: { de: 'Die Express S1 CNC kombiniert die bewährte Express-Plattform mit CNC-Steuerung für automatisierte Beschlagbearbeitung und Werkzeugwechsel.', en: 'The Express S1 CNC combines the proven Express platform with CNC control for automated fitting processing and tool changes.', cz: 'Express S1 CNC kombinuje osvědčenou platformu Express s CNC řízením pro automatizované zpracování kování.', sk: 'Express S1 CNC kombinuje osvedčenú platformu Express s CNC riadením.', hu: 'Az Express S1 CNC a bevált Express platformot CNC vezérléssel kombinálja az automatizált vasalatfeldolgozáshoz.' },
    seoTitle: seoT('Express S1 CNC'), seoDescription: seoD('Express S1 CNC', 'CNC-gesteuerte Beschlagbohrmaschine.', 'CNC-controlled fitting boring machine.', 'CNC řízená vrtačka na kování.'),
  },
  {
    slug: 'express-807', name: 'Express 807', category: 'fitting', image: IMG_EXPRESS_807,
    tagline: { de: 'Beschlagbohrmaschine für Spezialanwendungen', en: 'Fitting boring machine for special applications', cz: 'Vrtačka na kování pro speciální aplikace', sk: 'Vŕtačka na kovanie pre špeciálne aplikácie', hu: 'Vasalatfúró gép speciális alkalmazásokhoz' },
    description: { de: 'Die Express 807 ist eine Beschlagbohrmaschine für spezielle Beschlagtypen und Sonderanwendungen, die über das Standard-Express-Portfolio hinausgehen.', en: 'The Express 807 is a fitting boring machine for special fitting types and applications beyond the standard Express portfolio.', cz: 'Express 807 je vrtačka na kování pro speciální typy kování a aplikace přesahující standardní portfolio Express.', sk: 'Express 807 je vŕtačka na kovanie pre špeciálne typy kovaní a aplikácie.', hu: 'Az Express 807 vasalatfúró gép speciális vasalattípusokhoz és alkalmazásokhoz.' },
    seoTitle: seoT('Express 807'), seoDescription: seoD('Express 807', 'Beschlagbohrmaschine für Spezialanwendungen.', 'fitting boring machine for special applications.', 'vrtačka na kování pro speciální aplikace.'),
  },
  {
    slug: 'vector-cnc', name: 'Vector CNC', category: 'fitting', image: IMG_VECTOR,
    tagline: { de: 'CNC-Hochleistungs-Beschlagmaschine', en: 'CNC high-performance fitting machine', cz: 'CNC vysokovýkonný stroj na kování', sk: 'CNC vysokovýkonný stroj na kovanie', hu: 'CNC nagyteljesítményű vasalatgép' },
    description: { de: 'Die Vector CNC ist das Flaggschiff der Beschlagmaschinen-Familie: CNC-gesteuert, vollautomatisch und für die anspruchsvollsten industriellen Anforderungen konzipiert.', en: 'The Vector CNC is the flagship of the fitting machine family: CNC-controlled, fully automatic and designed for the most demanding industrial requirements.', cz: 'Vector CNC je vlajková loď rodiny strojů na kování: CNC řízený, plně automatický, navržený pro nejnáročnější průmyslové požadavky.', sk: 'Vector CNC je vlajková loď rodiny strojov na kovanie: CNC riadený, plne automatický.', hu: 'A Vector CNC a vasalatgépek zászlóshajója: CNC-vezérelt, teljesen automatikus, a legigényesebb ipari követelményekhez.' },
    seoTitle: seoT('Vector CNC'), seoDescription: seoD('Vector CNC', 'CNC-Flaggschiff für Beschlagbearbeitung.', 'CNC flagship for fitting processing.', 'CNC vlajková loď pro zpracování kování.'),
  },
  {
    slug: 'express-s1-rta', name: 'Express S1 RTA', category: 'fitting', image: IMG_EXPRESS_S1_RTA,
    tagline: { de: 'Für RTA-Beschläge (Ready-to-Assemble)', en: 'For RTA fittings (Ready-to-Assemble)', cz: 'Pro RTA kování (Ready-to-Assemble)', sk: 'Pre RTA kovanie (Ready-to-Assemble)', hu: 'RTA vasalatokhoz (Ready-to-Assemble)' },
    description: { de: 'Die Express S1 RTA ist speziell für die Verarbeitung von RTA-Beschlägen (Ready-to-Assemble) optimiert – Dübel und Verbindungsbeschläge für zerlegbare Möbel.', en: 'The Express S1 RTA is specifically optimized for processing RTA fittings (Ready-to-Assemble) – dowels and connecting fittings for flat-pack furniture.', cz: 'Express S1 RTA je speciálně optimalizovaná pro zpracování RTA kování – kolíky a spojovací kování pro rozložitelný nábytek.', sk: 'Express S1 RTA je špeciálne optimalizovaná pre spracovanie RTA kovaní.', hu: 'Az Express S1 RTA kifejezetten RTA vasalatok feldolgozására van optimalizálva.' },
    seoTitle: seoT('Express S1 RTA'), seoDescription: seoD('Express S1 RTA', 'für RTA-Beschläge und zerlegbare Möbel.', 'for RTA fittings and flat-pack furniture.', 'pro RTA kování a rozložitelný nábytek.'),
  },
  {
    slug: 'express-s2-rta', name: 'Express S2 RTA', category: 'fitting', image: IMG_EXPRESS_S2_RTA,
    tagline: { de: 'Zweispindlig für RTA-Beschläge', en: 'Two-spindle for RTA fittings', cz: 'Dvouvřetenová pro RTA kování', sk: 'Dvojvretenová pre RTA kovanie', hu: 'Kétorsós RTA vasalatokhoz' },
    description: { de: 'Die Express S2 RTA kombiniert zwei Spindeln mit RTA-Spezialisierung für höhere Durchsatzraten bei der Verarbeitung von Ready-to-Assemble-Beschlägen.', en: 'The Express S2 RTA combines two spindles with RTA specialization for higher throughput rates when processing Ready-to-Assemble fittings.', cz: 'Express S2 RTA kombinuje dvě vřetena se specializací na RTA pro vyšší propustnost při zpracování RTA kování.', sk: 'Express S2 RTA kombinuje dve vretená so špecializáciou na RTA.', hu: 'Az Express S2 RTA két orsót kombinál RTA specializációval a magasabb áteresztőképességhez.' },
    seoTitle: seoT('Express S2 RTA'), seoDescription: seoD('Express S2 RTA', 'zweispindlig für RTA-Beschläge.', 'two-spindle for RTA fittings.', 'dvouvřetenová pro RTA kování.'),
  },

  /* ============ CARCASS (Korpuspressen) ============ */
  {
    slug: 'concept-easy', name: 'Concept Easy', category: 'carcass', image: IMG_CONCEPT_EASY,
    tagline: { de: 'Einstiegs-Korpuspresse', en: 'Entry-level carcass press', cz: 'Vstupní korpusový lis', sk: 'Vstupný korpusový lis', hu: 'Belépő szintű korpuszprés' },
    description: { de: 'Die Concept Easy ist die Einstiegslösung in der Gannomat Korpuspressenfamilie. Einfache Bedienung und kompakte Bauweise für Handwerksbetriebe und kleinere Möbelproduzenten.', en: 'The Concept Easy is the entry-level solution in the Gannomat carcass press family. Simple operation and compact design for craft workshops and smaller furniture producers.', cz: 'Concept Easy je vstupní řešení v rodině korpusových lisů Gannomat. Jednoduchá obsluha a kompaktní provedení pro řemeslné dílny.', sk: 'Concept Easy je vstupné riešenie v rodine korpusových lisov Gannomat.', hu: 'A Concept Easy a Gannomat korpuszprés család belépő megoldása.' },
    seoTitle: seoT('Concept Easy'), seoDescription: seoD('Concept Easy', 'Einstiegs-Korpuspresse für Handwerk und Kleinserien.', 'entry-level carcass press for craft and small series.', 'vstupní korpusový lis pro řemeslo a malé série.'),
  },
  {
    slug: 'concept-eco', name: 'Concept Eco', category: 'carcass', image: IMG_CONCEPT_ECO,
    tagline: { de: 'Wirtschaftliche Korpuspresse', en: 'Economical carcass press', cz: 'Ekonomický korpusový lis', sk: 'Ekonomický korpusový lis', hu: 'Gazdaságos korpuszprés' },
    description: { de: 'Die Concept Eco bietet ein optimales Preis-Leistungs-Verhältnis für die Korpusmontage. Solide Verarbeitung bei wirtschaftlichem Betrieb.', en: 'The Concept Eco offers an optimal price-performance ratio for carcass assembly. Solid build quality with economical operation.', cz: 'Concept Eco nabízí optimální poměr ceny a výkonu pro montáž korpusů.', sk: 'Concept Eco ponúka optimálny pomer ceny a výkonu pre montáž korpusov.', hu: 'A Concept Eco optimális ár-teljesítmény arányt kínál a korpuszszereléshez.' },
    seoTitle: seoT('Concept Eco'), seoDescription: seoD('Concept Eco', 'wirtschaftliche Korpuspresse.', 'economical carcass press.', 'ekonomický korpusový lis.'),
  },
  {
    slug: 'concept-primus', name: 'Concept Primus', category: 'carcass', image: IMG_CONCEPT_PRIMUS,
    tagline: { de: 'Premium-Korpuspresse für Serienfertigung', en: 'Premium carcass press for series production', cz: 'Prémiový korpusový lis pro sériovou výrobu', sk: 'Prémiový korpusový lis pre sériovú výrobu', hu: 'Prémium korpuszprés sorozatgyártáshoz' },
    description: { de: 'Die Concept Primus ist die Premium-Lösung der Gannomat Korpuspressen – konzipiert für die industrielle Serienfertigung mit höchstem Durchsatz und Automatisierungsgrad.', en: 'The Concept Primus is the premium solution of the Gannomat carcass presses – designed for industrial series production with highest throughput and automation level.', cz: 'Concept Primus je prémiové řešení korpusových lisů Gannomat – navržen pro průmyslovou sériovou výrobu s nejvyšší propustností.', sk: 'Concept Primus je prémiové riešenie korpusových lisov Gannomat.', hu: 'A Concept Primus a Gannomat korpuszprések prémium megoldása.' },
    seoTitle: seoT('Concept Primus'), seoDescription: seoD('Concept Primus', 'Premium-Korpuspresse für industrielle Serienfertigung.', 'premium carcass press for industrial series production.', 'prémiový korpusový lis pro průmyslovou sériovou výrobu.'),
  },
  {
    slug: 'lift-jumper', name: 'Lift Jumper', category: 'carcass', image: IMG_LIFT_JUMPER,
    tagline: { de: 'Handlingsystem für die Korpusmontage', en: 'Handling system for carcass assembly', cz: 'Manipulační systém pro montáž korpusů', sk: 'Manipulačný systém pre montáž korpusov', hu: 'Kezelőrendszer korpuszszereléshez' },
    description: { de: 'Der Lift Jumper ist ein ergonomisches Handlingsystem, das den Korpus während der Montage automatisch positioniert und wendet – für effizienten Workflow in der Möbelmontage.', en: 'The Lift Jumper is an ergonomic handling system that automatically positions and turns the carcass during assembly – for efficient workflow in furniture assembly.', cz: 'Lift Jumper je ergonomický manipulační systém, který automaticky polohuje a otáčí korpus během montáže.', sk: 'Lift Jumper je ergonomický manipulačný systém, ktorý automaticky polohuje a otáča korpus počas montáže.', hu: 'A Lift Jumper ergonómikus kezelőrendszer, amely automatikusan pozicionálja és fordítja a korpuszt szerelés közben.' },
    seoTitle: seoT('Lift Jumper'), seoDescription: seoD('Lift Jumper', 'ergonomisches Handlingsystem für Korpusmontage.', 'ergonomic handling system for carcass assembly.', 'ergonomický manipulační systém pro montáž korpusů.'),
  },
  {
    slug: 'lift', name: 'Lift', category: 'carcass', image: IMG_LIFT,
    tagline: { de: 'Höhenverstellbare Montagestation', en: 'Height-adjustable assembly station', cz: 'Výškově nastavitelná montážní stanice', sk: 'Výškovo nastaviteľná montážna stanica', hu: 'Magasságban állítható szerelőállomás' },
    description: { de: 'Der Gannomat Lift ist eine höhenverstellbare Montagestation für die ergonomische Korpusmontage. Stufenlose Höhenverstellung für unterschiedliche Werkstückgrößen.', en: 'The Gannomat Lift is a height-adjustable assembly station for ergonomic carcass assembly. Stepless height adjustment for different workpiece sizes.', cz: 'Gannomat Lift je výškově nastavitelná montážní stanice pro ergonomickou montáž korpusů.', sk: 'Gannomat Lift je výškovo nastaviteľná montážna stanica pre ergonomickú montáž korpusov.', hu: 'A Gannomat Lift magasságban állítható szerelőállomás az ergonómikus korpuszszereléshez.' },
    seoTitle: seoT('Lift'), seoDescription: seoD('Lift', 'höhenverstellbare Montagestation für Korpusmontage.', 'height-adjustable assembly station for carcass assembly.', 'výškově nastavitelná montážní stanice pro montáž korpusů.'),
  },

  /* ============ BORING (Universal-Dübelbohr) ============ */
  {
    slug: 'db-21-27-35', name: 'DB 21-27-35', category: 'boring', image: IMG_DB21,
    tagline: { de: 'Universal-Dübellochbohrmaschine', en: 'Universal dowel boring machine', cz: 'Univerzální kolkovací vrtačka', sk: 'Univerzálna kolkovacia vŕtačka', hu: 'Univerzális csapfúró gép' },
    description: { de: 'Die Gannomat DB 21-27-35 ist eine universelle Dübellochbohrmaschine, erhältlich mit 21, 27 oder 35 Spindeln. Robuste Bauweise und präzise Bohrergebnisse – ein österreichisches Qualitätsprodukt für den täglichen Einsatz in der Möbelproduktion.', en: 'The Gannomat DB 21-27-35 is a universal dowel boring machine available with 21, 27 or 35 spindles. Robust construction and precise drilling results – an Austrian quality product for daily use in furniture production.', cz: 'Gannomat DB 21-27-35 je univerzální kolkovací vrtačka dostupná s 21, 27 nebo 35 vřeteny. Robustní konstrukce a přesné výsledky vrtání – rakouský kvalitní produkt pro každodenní použití.', sk: 'Gannomat DB 21-27-35 je univerzálna kolkovacia vŕtačka dostupná s 21, 27 alebo 35 vretenami.', hu: 'A Gannomat DB 21-27-35 univerzális csapfúró gép 21, 27 vagy 35 orsóval.' },
    seoTitle: seoT('DB 21-27-35'),
    seoDescription: seoD('DB 21-27-35', 'universelle Dübelbohrmaschine mit 21/27/35 Spindeln.', 'universal dowel boring machine with 21/27/35 spindles.', 'univerzální kolkovací vrtačka s 21/27/35 vřeteny.'),
  },
  {
    slug: 'db-21-27-35-wa', name: 'DB 21-27-35 WA', category: 'boring', image: IMG_DB27WA,
    tagline: { de: 'Mit Werkstückanschlag', en: 'With workpiece stop', cz: 'S dorazem obrobku', sk: 'S dorazom obrobku', hu: 'Munkadarab-ütközővel' },
    description: { de: 'Die DB 21-27-35 WA ergänzt die Standard-Version um einen Werkstückanschlag für reproduzierbare Positionierung. Gleiche Spindeloptionen (21/27/35) bei erhöhter Wiederholgenauigkeit.', en: 'The DB 21-27-35 WA adds a workpiece stop for reproducible positioning to the standard version. Same spindle options (21/27/35) with increased repeat accuracy.', cz: 'DB 21-27-35 WA doplňuje standardní verzi o doraz obrobku pro reprodukovatelné polohování.', sk: 'DB 21-27-35 WA dopĺňa štandardnú verziu o doraz obrobku pre reprodukovateľné polohovanie.', hu: 'A DB 21-27-35 WA munkadarab-ütközővel egészíti ki a standard változatot.' },
    seoTitle: seoT('DB 21-27-35 WA'),
    seoDescription: seoD('DB 21-27-35 WA', 'Dübelbohrmaschine mit Werkstückanschlag.', 'dowel boring machine with workpiece stop.', 'kolkovací vrtačka s dorazem obrobku.'),
  },

  /* ============ ROW BORING ============ */
  {
    slug: 'proline-50', name: 'ProLine 50', category: 'rowboring', image: IMG_PROLINE,
    tagline: { de: 'Doppel-Lochreihenbohrmaschine', en: 'Double row boring machine', cz: 'Řadová vrtačka', sk: 'Radová vŕtačka', hu: 'Sorosfúró gép' },
    description: { de: 'Die Gannomat ProLine 50 ist eine kompakte Doppel-Lochreihenbohrmaschine für die schnelle und präzise Systembohrung in der Möbelproduktion.', en: 'The Gannomat ProLine 50 is a compact double row boring machine for fast and precise system boring in furniture production.', cz: 'Gannomat ProLine 50 je kompaktní řadová vrtačka pro rychlé a přesné systémové vrtání ve výrobě nábytku.', sk: 'Gannomat ProLine 50 je kompaktná radová vŕtačka pre rýchle a presné systémové vŕtanie.', hu: 'A Gannomat ProLine 50 kompakt sorosfúró gép gyors és precíz rendszerfúráshoz.' },
    seoTitle: seoT('ProLine 50'),
    seoDescription: seoD('ProLine 50', 'kompakte Doppel-Lochreihenbohrmaschine.', 'compact double row boring machine.', 'kompaktní řadová vrtačka.'),
  },
  {
    slug: 'vantage', name: 'Vantage 76-152', category: 'rowboring', image: IMG_VANTAGE,
    tagline: { de: 'Doppel-Lochreihenbohrmaschine – erweiterter Bereich', en: 'Double row boring machine – wider range', cz: 'Řadová vrtačka – rozšířený rozsah', sk: 'Radová vŕtačka – rozšírený rozsah', hu: 'Sorosfúró gép – kiterjesztett tartomány' },
    description: { de: 'Die Gannomat Vantage 76-152 bietet einen erweiterten Bohrbereich für größere Werkstücke. Doppel-Lochreihenbohrung mit höherer Flexibilität bei der Positionierung.', en: 'The Gannomat Vantage 76-152 offers an extended boring range for larger workpieces. Double row boring with greater flexibility in positioning.', cz: 'Gannomat Vantage 76-152 nabízí rozšířený vrtací rozsah pro větší obrobky.', sk: 'Gannomat Vantage 76-152 ponúka rozšírený vrtací rozsah pre väčšie obrobky.', hu: 'A Gannomat Vantage 76-152 kiterjesztett fúrási tartományt kínál nagyobb munkadarabokhoz.' },
    seoTitle: seoT('Vantage 76-152'),
    seoDescription: seoD('Vantage 76-152', 'Doppel-Lochreihenbohrmaschine mit erweitertem Bereich.', 'double row boring machine with extended range.', 'řadová vrtačka s rozšířeným rozsahem.'),
  },

  /* ============ GLUING ============ */
  {
    slug: 'leimfix', name: 'Leimfix', category: 'gluing', image: IMG_LEIMFIX,
    tagline: { de: 'Pneumatisch gesteuerter Leimgeber', en: 'Pneumatically controlled glue dispenser', cz: 'Pneumaticky řízený dávkovač lepidla', sk: 'Pneumaticky riadený dávkovač lepidla', hu: 'Pneumatikusan vezérelt ragasztóadagoló' },
    description: { de: 'Der Gannomat Leimfix ist ein pneumatisch gesteuerter Leimgeber für die präzise Beleimung von Dübellöchern und Schlitzen – kompakt, zuverlässig und einfach zu bedienen. Ein österreichisches Qualitätsprodukt für Handwerk und Industrie.', en: 'The Gannomat Leimfix is a pneumatically controlled glue dispenser for precise gluing of dowel holes and slots – compact, reliable and easy to operate. An Austrian quality product for craft and industry.', cz: 'Gannomat Leimfix je pneumaticky řízený dávkovač lepidla pro přesné lepení kolíkových otvorů a drážek – kompaktní, spolehlivý a snadno ovladatelný.', sk: 'Gannomat Leimfix je pneumaticky riadený dávkovač lepidla pre presné lepenie kolíkových otvorov a drážok.', hu: 'A Gannomat Leimfix pneumatikusan vezérelt ragasztóadagoló csapfuratok és hornyok precíz ragasztásához.' },
    seoTitle: seoT('Leimfix'),
    seoDescription: seoD('Leimfix', 'pneumatischer Leimgeber für Dübellöcher und Schlitze.', 'pneumatic glue dispenser for dowel holes and slots.', 'pneumatický dávkovač lepidla pro kolíkové otvory a drážky.'),
  },
  {
    slug: 'injecta', name: 'Injecta', category: 'gluing', image: IMG_INJECTA,
    tagline: { de: 'Elektronisch gesteuerte Leimeinspritzung', en: 'Electronically controlled glue injection', cz: 'Elektronicky řízené vstřikování lepidla', sk: 'Elektronicky riadené vstrekovanie lepidla', hu: 'Elektronikusan vezérelt ragasztóbefecskendezés' },
    description: { de: 'Die Gannomat Injecta ist ein elektronisch gesteuertes Leimeinspritzsystem für Dübellöcher und Schlitze. Höchste Dosiergenauigkeit und saubere Leimführung für anspruchsvolle Produktionsumgebungen.', en: 'The Gannomat Injecta is an electronically controlled glue injection system for dowel holes and slots. Highest dosing accuracy and clean glue delivery for demanding production environments.', cz: 'Gannomat Injecta je elektronicky řízený systém vstřikování lepidla pro kolíkové otvory a drážky. Nejvyšší přesnost dávkování.', sk: 'Gannomat Injecta je elektronicky riadený systém vstrekovania lepidla pre kolíkové otvory a drážky.', hu: 'A Gannomat Injecta elektronikusan vezérelt ragasztóbefecskendező rendszer csapfuratokhoz és hornyokhoz.' },
    seoTitle: seoT('Injecta'),
    seoDescription: seoD('Injecta', 'elektronische Leimeinspritzung mit höchster Dosiergenauigkeit.', 'electronic glue injection with highest dosing accuracy.', 'elektronické vstřikování lepidla s nejvyšší přesností dávkování.'),
  },

  /* ============ FRAME (Rahmendübel/Langloch) ============ */
  {
    slug: 'junior-323', name: 'Junior 323', category: 'frame', image: IMG_JUNIOR,
    tagline: { de: 'Rahmendübelbohrmaschine', en: 'Frame dowel boring machine', cz: 'Rámová kolkovací vrtačka', sk: 'Rámová kolkovacia vŕtačka', hu: 'Keretcsap fúrógép' },
    description: { de: 'Die Junior 323 ist eine Rahmendübelbohrmaschine für die Bearbeitung von Rahmen und Massivholzteilen – kompakt und zuverlässig.', en: 'The Junior 323 is a frame dowel boring machine for processing frames and solid wood parts – compact and reliable.', cz: 'Junior 323 je rámová kolkovací vrtačka pro zpracování rámů a masivních dřevěných dílů.', sk: 'Junior 323 je rámová kolkovacia vŕtačka pre spracovanie rámov a masívnych drevených dielov.', hu: 'A Junior 323 keretcsap-fúrógép keretek és tömörfa alkatrészek megmunkálásához.' },
    seoTitle: seoT('Junior 323'), seoDescription: seoD('Junior 323', 'Rahmendübelbohrmaschine für Massivholz.', 'frame dowel boring machine for solid wood.', 'rámová kolkovací vrtačka pro masivní dřevo.'),
  },
  {
    slug: 'master-325', name: 'Master 325', category: 'frame', image: IMG_MASTER,
    tagline: { de: 'Professionelle Rahmendübelbohrmaschine', en: 'Professional frame dowel boring machine', cz: 'Profesionální rámová kolkovací vrtačka', sk: 'Profesionálna rámová kolkovacia vŕtačka', hu: 'Professzionális keretcsap fúrógép' },
    description: { de: 'Die Master 325 ist die professionelle Version der Rahmendübelbohrmaschinen-Familie mit erweiterten Funktionen und höherer Leistung.', en: 'The Master 325 is the professional version of the frame dowel boring machine family with extended features and higher performance.', cz: 'Master 325 je profesionální verze rodiny rámových kolkovacích vrtaček s rozšířenými funkcemi.', sk: 'Master 325 je profesionálna verzia rodiny rámových kolkovacích vŕtačiek s rozšírenými funkciami.', hu: 'A Master 325 a keretcsap-fúrógépek professzionális változata bővített funkciókkal.' },
    seoTitle: seoT('Master 325'), seoDescription: seoD('Master 325', 'professionelle Rahmendübelbohrmaschine.', 'professional frame dowel boring machine.', 'profesionální rámová kolkovací vrtačka.'),
  },
  {
    slug: 'mod-160', name: 'Mod 160', category: 'frame', image: IMG_MOD160,
    tagline: { de: 'Langlochbohrmaschine', en: 'Slot boring machine', cz: 'Drážková vrtačka', sk: 'Drážková vŕtačka', hu: 'Horony fúrógép' },
    description: { de: 'Die Mod 160 ist eine Langlochbohrmaschine für Schlitze und Langlöcher in Massivholz, Treppen und Rahmenteilen.', en: 'The Mod 160 is a slot boring machine for slots and elongated holes in solid wood, stairs and frame parts.', cz: 'Mod 160 je drážková vrtačka pro drážky a podélné otvory v masivním dřevu, schodech a rámových dílech.', sk: 'Mod 160 je drážková vŕtačka pre drážky a pozdĺžne otvory v masívnom dreve, schodoch a rámových dieloch.', hu: 'A Mod 160 horony fúrógép hornyokhoz és hosszúkás furatokhoz tömörfában, lépcsőkben és keretelemekben.' },
    seoTitle: seoT('Mod 160'), seoDescription: seoD('Mod 160', 'Langlochbohrmaschine für Massivholz und Treppen.', 'slot boring machine for solid wood and stairs.', 'drážková vrtačka pro masivní dřevo a schody.'),
  },

  /* ============ CORNER HINGE ============ */
  {
    slug: 'expert', name: 'Expert', category: 'cornerhinge', image: IMG_EXPERT,
    tagline: { de: 'Ecklagerbohrmaschine', en: 'Corner hinge boring machine', cz: 'Vrtačka na závěsy', sk: 'Vŕtačka na závesy', hu: 'Sarokpánt fúrógép' },
    description: { de: 'Die Expert ist eine Ecklagerbohrmaschine für das präzise Bohren von Ecklagern und Scharnieren in Fenster- und Türrahmen.', en: 'The Expert is a corner hinge boring machine for precise boring of corner hinges in window and door frames.', cz: 'Expert je vrtačka na závěsy pro přesné vrtání eckových závěsů v okenních a dveřních rámech.', sk: 'Expert je vŕtačka na závesy pre presné vŕtanie eckových závesov v okenných a dverných rámoch.', hu: 'Az Expert sarokpánt-fúrógép ablak- és ajtókeretek sarokpántjainak precíz fúrásához.' },
    seoTitle: seoT('Expert'), seoDescription: seoD('Expert', 'Ecklagerbohrmaschine für Fenster und Türen.', 'corner hinge boring machine for windows and doors.', 'vrtačka na závěsy pro okna a dveře.'),
  },
  {
    slug: 'twin', name: 'Twin', category: 'cornerhinge', image: IMG_TWIN,
    tagline: { de: 'Doppelseitige Ecklager- & Olivenbohrmaschine', en: 'Double-sided corner hinge & olive boring machine', cz: 'Oboustranná vrtačka na závěsy a olivy', sk: 'Obojstranná vŕtačka na závesy a olivy', hu: 'Kétoldalas sarokpánt- és olívafúró gép' },
    description: { de: 'Die Twin ist eine doppelseitige Ecklager- und Olivenbohrmaschine für die gleichzeitige Bearbeitung beider Werkstückseiten – maximale Effizienz in der Fensterproduktion.', en: 'The Twin is a double-sided corner hinge and olive boring machine for simultaneous processing of both workpiece sides – maximum efficiency in window production.', cz: 'Twin je oboustranná vrtačka na závěsy a olivy pro současné zpracování obou stran obrobku – maximální efektivita ve výrobě oken.', sk: 'Twin je obojstranná vŕtačka na závesy a olivy pre súčasné spracovanie oboch strán obrobku.', hu: 'A Twin kétoldalas sarokpánt- és olívafúró gép mindkét munkadarab-oldal egyidejű megmunkálásához.' },
    seoTitle: seoT('Twin'), seoDescription: seoD('Twin', 'doppelseitige Ecklager- und Olivenbohrmaschine.', 'double-sided corner hinge and olive boring machine.', 'oboustranná vrtačka na závěsy a olivy.'),
  },
];

/* ------------------------------------------------------------------ */
/*  Lookup helpers                                                     */
/* ------------------------------------------------------------------ */

const productsBySlug = new Map(GANNOMAT_PRODUCTS.map((p) => [p.slug, p]));

export const getGannomatProductBySlug = (slug: string): GannomatProduct | undefined =>
  productsBySlug.get(slug);

export const getGannomatProductsByCategory = (cat: GannomatCategory): GannomatProduct[] =>
  GANNOMAT_PRODUCTS.filter((p) => p.category === cat);

export const getGannomatFlagshipProducts = (): GannomatProduct[] =>
  GANNOMAT_PRODUCTS.filter((p) => p.flagship);
