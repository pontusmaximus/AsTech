import type { Language } from '../i18n';

/* ------------------------------------------------------------------ */
/*  Barbaric category slugs – 7 categories, localized per language     */
/* ------------------------------------------------------------------ */

export type BarbaricCategory =
  | 'storage'
  | 'feeding'
  | 'nesting'
  | 'return'
  | 'buffer'
  | 'door'
  | 'labeling'
  | 'vacuum-lifters'
  | 'vacuum-special'
  | 'vacuum-traverses'
  | 'vacuum-cranes';

const BARBARIC_CATEGORY_SLUGS: Record<BarbaricCategory, Record<Language, string>> = {
  storage: {
    de: 'flaechenlager',
    en: 'panel-storage',
    cz: 'skladovani-desek',
    sk: 'skladovanie-dosok',
    hu: 'lapraktarozas',
  },
  feeding: {
    de: 'beschickung',
    en: 'feeding-systems',
    cz: 'podavaci-systemy',
    sk: 'podavacie-systemy',
    hu: 'adagolo-rendszer',
  },
  nesting: {
    de: 'nesting-picker',
    en: 'nesting-picker',
    cz: 'nesting-picker',
    sk: 'nesting-picker',
    hu: 'nesting-picker',
  },
  return: {
    de: 'returnsysteme',
    en: 'return-systems',
    cz: 'navratove-systemy',
    sk: 'navratove-systemy',
    hu: 'visszafuto-rendszer',
  },
  buffer: {
    de: 'teilepuffer',
    en: 'parts-buffer',
    cz: 'buffer-dilu',
    sk: 'buffer-dielov',
    hu: 'reszpuffer',
  },
  door: {
    de: 'tuerenhandling',
    en: 'door-handling',
    cz: 'handling-dveri',
    sk: 'handling-dveri',
    hu: 'ajto-kezeles',
  },
  labeling: {
    de: 'labeling',
    en: 'labeling',
    cz: 'stitkovani',
    sk: 'stitkovanie',
    hu: 'cimkenyomtatas',
  },
  'vacuum-lifters': {
    de: 'vakuumheber-uniwood',
    en: 'vacuum-lifters-uniwood',
    cz: 'vakuove-zvedaky-uniwood',
    sk: 'vakuove-zdvihaky-uniwood',
    hu: 'vakuumemelok-uniwood',
  },
  'vacuum-special': {
    de: 'spezialhebegeraete',
    en: 'special-lifters',
    cz: 'specialni-zvedaky',
    sk: 'specialne-zdvihaky',
    hu: 'specialis-emelok',
  },
  'vacuum-traverses': {
    de: 'sondertraversen',
    en: 'special-traverses',
    cz: 'specialni-traverzy',
    sk: 'specialne-traverzy',
    hu: 'specialis-keresztgerendak',
  },
  'vacuum-cranes': {
    de: 'kran-schienensysteme',
    en: 'crane-rail-systems',
    cz: 'jerabove-kolejnicove-systemy',
    sk: 'zeriavove-kolajnicove-systemy',
    hu: 'daruzo-sinrendszerek',
  },
};

export const BARBARIC_CATEGORY_SLUG_VARIANTS = [
  ...new Set(
    (Object.values(BARBARIC_CATEGORY_SLUGS) as Record<Language, string>[]).flatMap((m) =>
      Object.values(m),
    ),
  ),
];

export const getBarbaricCategorySlug = (cat: BarbaricCategory, lang: Language): string =>
  BARBARIC_CATEGORY_SLUGS[cat][lang];

export const findBarbaricCategoryBySlug = (slug: string): BarbaricCategory | undefined => {
  for (const [cat, langMap] of Object.entries(BARBARIC_CATEGORY_SLUGS)) {
    if (Object.values(langMap).includes(slug)) return cat as BarbaricCategory;
  }
  return undefined;
};

export const buildBarbaricProductPath = (lang: Language, product: BarbaricProduct): string =>
  `/barbaric/${BARBARIC_CATEGORY_SLUGS[product.category][lang]}/${product.slug}`;

export const buildBarbaricProductPathRaw = (
  lang: Language,
  category: BarbaricCategory,
  modelSlug: string,
): string => `/barbaric/${BARBARIC_CATEGORY_SLUGS[category][lang]}/${modelSlug}`;

/* ------------------------------------------------------------------ */
/*  Category labels                                                    */
/* ------------------------------------------------------------------ */

export const BARBARIC_CATEGORY_LABELS: Record<BarbaricCategory, Record<Language, string>> = {
  storage: {
    de: 'Flächenlager',
    en: 'Panel Storage',
    cz: 'Skladování desek',
    sk: 'Skladovanie dosák',
    hu: 'Lapraktározás',
  },
  feeding: {
    de: 'Beschickung',
    en: 'Feeding Systems',
    cz: 'Podávací systémy',
    sk: 'Podávacie systémy',
    hu: 'Adagoló rendszerek',
  },
  nesting: {
    de: 'Nesting Picker',
    en: 'Nesting Picker',
    cz: 'Nesting Picker',
    sk: 'Nesting Picker',
    hu: 'Nesting Picker',
  },
  return: {
    de: 'Returnsysteme',
    en: 'Return Systems',
    cz: 'Návratové systémy',
    sk: 'Návratové systémy',
    hu: 'Visszafutó rendszerek',
  },
  buffer: {
    de: 'Teilepuffer',
    en: 'Parts Buffer',
    cz: 'Buffer dílů',
    sk: 'Buffer dielov',
    hu: 'Alkatrész-puffer',
  },
  door: {
    de: 'Türenhandling',
    en: 'Door Handling',
    cz: 'Handling dveří',
    sk: 'Handling dverí',
    hu: 'Ajtókezelés',
  },
  labeling: {
    de: 'Labeling Printer',
    en: 'Labeling Printer',
    cz: 'Štítkovací tiskárna',
    sk: 'Štítkovacia tlačiareň',
    hu: 'Címkenyomtató',
  },
  'vacuum-lifters': {
    de: 'Vakuumheber (UniWood)',
    en: 'Vacuum Lifters (UniWood)',
    cz: 'Vakuové zvedáky (UniWood)',
    sk: 'Vákuové zdviháky (UniWood)',
    hu: 'Vákuumemelők (UniWood)',
  },
  'vacuum-special': {
    de: 'Spezialhebegeräte',
    en: 'Special Lifters',
    cz: 'Speciální zvedáky',
    sk: 'Špeciálne zdviháky',
    hu: 'Speciális emelők',
  },
  'vacuum-traverses': {
    de: 'Sondertraversen',
    en: 'Special Traverses',
    cz: 'Speciální traverzy',
    sk: 'Špeciálne traverzy',
    hu: 'Speciális keresztgerendák',
  },
  'vacuum-cranes': {
    de: 'Kran- & Schienensysteme',
    en: 'Crane & Rail Systems',
    cz: 'Jeřábové a kolejnicové systémy',
    sk: 'Žeriavové a koľajnicové systémy',
    hu: 'Daru- és sínrendszerek',
  },
};

/* ------------------------------------------------------------------ */
/*  Product type                                                       */
/* ------------------------------------------------------------------ */

export interface BarbaricProduct {
  slug: string;
  name: string;
  category: BarbaricCategory;
  tagline: Record<Language, string>;
  image: string;
  description: Record<Language, string>;
  features?: Record<Language, string[]>;
  specs?: Record<Language, Record<string, string>>;
  highlights?: string[];
  seoTitle: Record<Language, string>;
  seoDescription: Record<Language, string>;
}

/* ------------------------------------------------------------------ */
/*  Full product catalog                                               */
/* ------------------------------------------------------------------ */

export const BARBARIC_PRODUCTS: BarbaricProduct[] = [
  /* ==================== STORAGE ==================== */
  {
    slug: 'csf-professional',
    name: 'CSF Professional',
    category: 'storage',
    image: '/images/barbaric/csf-professional.png',
    tagline: {
      de: 'Für Gewerbe und Handwerk – kompakt & kostengünstig',
      en: 'For trade and craft – compact & cost-effective',
      cz: 'Pro řemeslo a živnosti – kompaktní a cenově výhodné',
      sk: 'Pre remeslá a živnosti – kompaktné a cenovo výhodné',
      hu: 'Kereskedelemnek és kézműveseknek – kompakt és költséghatékony',
    },
    description: {
      de: 'Das CSF Professional ist ein kompaktes, vollautomatisches Flächenlager für Handwerks- und Gewerbebetriebe. Es ermöglicht die automatische Ein- und Auslagerung von Plattenmaterial und die direkte Beschickung von Sägen und CNC-Maschinen – platzsparend und kostengünstig.',
      en: 'The CSF Professional is a compact, fully automatic panel storage system for craft and trade operations. It enables automatic storage and retrieval of panel materials and direct feeding of saws and CNC machines – space-saving and cost-effective.',
      cz: 'CSF Professional je kompaktní, plně automatický sklad desek pro řemeslné a živnostenské provozy. Umožňuje automatické zaskladnění a vyskladnění deskového materiálu a přímé podávání pil a CNC strojů – úsporné a cenově výhodné.',
      sk: 'CSF Professional je kompaktný, plne automatický sklad dosiek pre remeselné a živnostenské prevádzky.',
      hu: 'A CSF Professional kompakt, teljesen automatikus lapraktározó rendszer kézműves és kereskedelmi üzemek számára.',
    },
    specs: {
      de: { 'Seitlicher Abstand': '100 mm (allseitig)', 'Dreheinheit': '90° (optional 180°)', 'Amortisation': '1–2 Jahre' },
      en: { 'Lateral clearance': '100 mm (all directions)', 'Rotation unit': '90° (optional 180°)', 'Payback period': '1–2 years' },
      cz: { 'Boční vzdálenost': '100 mm (všechny strany)', 'Otočná jednotka': '90° (volitelně 180°)', 'Návratnost': '1–2 roky' },
      sk: { 'Bočná vzdialenosť': '100 mm (všetky strany)', 'Otočná jednotka': '90° (voliteľne 180°)', 'Návratnosť': '1–2 roky' },
      hu: { 'Oldalsó távolság': '100 mm (minden irányban)', 'Forgató egység': '90° (opcionálisan 180°)', 'Megtérülés': '1–2 év' },
    },
    highlights: ['Compact design — only 100 mm lateral clearance in all directions', '90° rotation unit for all-direction storage (180° optional)', 'Automatic panel measurement and weighing in every cycle', 'Short payback period of 1–2 years', 'Order-picking operation possible — saw not required'],
    seoTitle: {
      de: 'Flächenlager CSF Professional Barbaric – Händler CZ/SK/HU | Asamer',
      en: 'Panel Storage CSF Professional Barbaric – dealer CZ/SK/HU | Asamer',
      cz: 'Skladování desek CSF Professional Barbaric – koupit přes Asamer',
      sk: 'Skladovanie dosák CSF Professional Barbaric – kúpiť cez Asamer',
      hu: 'Lapraktározás CSF Professional Barbaric – Asamer viszonteladó',
    },
    seoDescription: {
      de: 'CSF Professional – kompaktes Flächenlager für Handwerk. Vollautomatische Ein-/Auslagerung. Asamer: autorisierter Barbaric-Händler für CZ, SK & HU.',
      en: 'CSF Professional – compact panel storage for workshops. Fully automatic storage and retrieval. Asamer: authorized Barbaric dealer for CZ, SK & HU.',
      cz: 'CSF Professional – kompaktní sklad desek pro řemesla. Plně automatické zaskladnění. Asamer: autorizovaný prodejce Barbaric pro CZ, SK a HU.',
      sk: 'CSF Professional – kompaktný sklad dosiek pre remeslá. Plne automatické zaskladnenie. Asamer: autorizovaný predajca Barbaric pre CZ, SK a HU.',
      hu: 'CSF Professional – kompakt lapraktár kézműveseknek. Teljesen automatikus be-/kitárolás. Asamer: hivatalos Barbaric viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'csf-industrial',
    name: 'CSF Industrial',
    category: 'storage',
    image: '/images/barbaric/csf-industrial.jpg',
    tagline: {
      de: 'Für die Industrie – hohe Leistung',
      en: 'For industry – high performance',
      cz: 'Pro průmysl – vysoký výkon',
      sk: 'Pre priemysel – vysoký výkon',
      hu: 'Ipar számára – nagy teljesítmény',
    },
    description: {
      de: 'Das CSF Industrial ist ein leistungsstarkes Flächenlager für industrielle Produktionsumgebungen. Hohe Taktzeiten, große Lagerkapazitäten und nahtlose ERP-Anbindung ermöglichen durchgängig automatisierte Materialflüsse.',
      en: 'The CSF Industrial is a high-performance panel storage system for industrial production environments. High cycle rates, large storage capacities and seamless ERP connectivity enable fully automated material flows.',
      cz: 'CSF Industrial je výkonný sklad desek pro průmyslová výrobní prostředí. Vysoké taktovací frekvence, velké skladové kapacity a bezproblémové napojení na ERP umožňují plně automatizované toky materiálu.',
      sk: 'CSF Industrial je výkonný sklad dosiek pre priemyselné výrobné prostredia.',
      hu: 'A CSF Industrial nagyteljesítményű lapraktározó rendszer ipari gyártási környezetekhez.',
    },
    specs: {
      de: { 'Fahrgeschwindigkeit': 'bis zu 150 m/min', 'Zykluszeit': '< 1 min', 'Kranbrücke max.': 'bis zu 25 m', 'Lagerfläche max.': 'bis zu 25 × 70 m', 'Fördertechnik': 'Ketten- oder Bandförderer integrierbar' },
      en: { 'Movement speed': 'up to 150 m/min', 'Cycle time': '< 1 min', 'Max. crane bridge': 'up to 25 m', 'Max. storage area': 'up to 25 × 70 m', 'Conveyor technology': 'Chain or belt conveyors integrable' },
      cz: { 'Rychlost pojezdu': 'až 150 m/min', 'Doba cyklu': '< 1 min', 'Jeřábový most max.': 'až 25 m', 'Skladovací plocha max.': 'až 25 × 70 m', 'Dopravní technika': 'Řetězové nebo pásové dopravníky integrovatelné' },
      sk: { 'Rýchlosť pojazdu': 'až 150 m/min', 'Doba cyklu': '< 1 min', 'Žeriavový most max.': 'až 25 m', 'Skladovacia plocha max.': 'až 25 × 70 m', 'Dopravná technika': 'Reťazové alebo pásové dopravníky integrovateľné' },
      hu: { 'Haladási sebesség': 'akár 150 m/perc', 'Ciklusidő': '< 1 perc', 'Daruhíd max.': 'akár 25 m', 'Raktárterület max.': 'akár 25 × 70 m', 'Szállítástechnika': 'Lánc- vagy szalagszállítók integrálhatók' },
    },
    highlights: ['Cycle times below 1 minute for maximum throughput', 'Movement speeds up to 150 m/min', 'Crane bridge lengths up to 25 m — storage areas up to 25 × 70 m', 'Integration with chain conveyors and conveyor belts', 'Trusted by renowned industrial enterprises worldwide'],
    seoTitle: {
      de: 'Flächenlager CSF Industrial Barbaric – Händler CZ/SK/HU | Asamer',
      en: 'Panel Storage CSF Industrial Barbaric – dealer CZ/SK/HU | Asamer',
      cz: 'Skladování desek CSF Industrial Barbaric – koupit přes Asamer',
      sk: 'Skladovanie dosák CSF Industrial Barbaric – kúpiť cez Asamer',
      hu: 'Lapraktározás CSF Industrial Barbaric – Asamer viszonteladó',
    },
    seoDescription: {
      de: 'CSF Industrial – industrielles Flächenlager mit ERP-Anbindung. Hohe Taktzeiten, große Kapazität. Asamer: autorisierter Barbaric-Händler für CZ, SK & HU.',
      en: 'CSF Industrial – industrial panel storage with ERP connectivity. High cycle rates, large capacity. Asamer: authorized Barbaric dealer for CZ, SK & HU.',
      cz: 'CSF Industrial – průmyslový sklad desek s napojením na ERP. Vysoké takty, velká kapacita. Asamer: autorizovaný prodejce Barbaric pro CZ, SK a HU.',
      sk: 'CSF Industrial – priemyselný sklad dosiek s napojením na ERP. Vysoké takty, veľká kapacita. Asamer: autorizovaný predajca Barbaric pre CZ, SK a HU.',
      hu: 'CSF Industrial – ipari lapraktár ERP csatlakoztatással. Magas ütemszám, nagy kapacitás. Asamer: hivatalos Barbaric viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'csf-multilevel',
    name: 'CSF Multilevel',
    category: 'storage',
    image: '/images/barbaric/csf-multilevel.jpg',
    tagline: {
      de: 'Die platzsparende Lagerlösung – mehrstöckig',
      en: 'The space-saving storage solution – multi-level',
      cz: 'Prostorově úsporné skladové řešení – víceúrovňové',
      sk: 'Priestorovo úsporné skladové riešenie – viacúrovňové',
      hu: 'Helytakarékos raktárrendszer – többszintes',
    },
    description: {
      de: 'Das CSF Multilevel nutzt die Hallenhöhe optimal: Mehrere Lagerebenen übereinander maximieren die Kapazität bei minimalem Flächenbedarf. Ideal für Betriebe mit begrenzter Grundfläche und hohem Materialvolumen.',
      en: 'The CSF Multilevel optimally utilizes hall height: multiple storage levels stacked vertically maximize capacity with minimal floor space. Ideal for operations with limited floor area and high material volumes.',
      cz: 'CSF Multilevel optimálně využívá výšku haly: několik úrovní skladování nad sebou maximalizuje kapacitu při minimální podlahové ploše. Ideální pro provozy s omezenou podlahovou plochou a vysokým objemem materiálu.',
      sk: 'CSF Multilevel optimálne využíva výšku haly: niekoľko úrovní skladovania nad sebou maximalizuje kapacitu pri minimálnej podlahovej ploche.',
      hu: 'A CSF Multilevel optimálisan kihasználja a csarnoképület magasságot: egymásra épülő tárolási szintek maximalizálják a kapacitást minimális alapterületen.',
    },
    specs: {
      de: { 'Hubhöhe (Doppelschere)': '4.200 mm', 'Nutzhöhe Erdgeschoss': '3.200 mm' },
      en: { 'Lifting height (double-scissor)': '4,200 mm', 'Ground level usable height': '3,200 mm' },
      cz: { 'Zdvih (dvojité nůžky)': '4 200 mm', 'Užitná výška přízemí': '3 200 mm' },
      sk: { 'Zdvih (dvojité nožnice)': '4 200 mm', 'Užitná výška prízemia': '3 200 mm' },
      hu: { 'Emelési magasság (dupla olló)': '4 200 mm', 'Földszinti hasznos magasság': '3 200 mm' },
    },
    highlights: ['Double-scissor load arm — lifting height 4,200 mm', 'Adequate ground level height of 3,200 mm for comfortable operation', 'Often eliminates need for production hall expansion', 'Optimal material flow with gentle, damage-free handling', 'Camera system for surveillance from user terminal'],
    seoTitle: {
      de: 'Flächenlager CSF Multilevel Barbaric – Händler CZ/SK/HU | Asamer',
      en: 'Panel Storage CSF Multilevel Barbaric – dealer CZ/SK/HU | Asamer',
      cz: 'Skladování desek CSF Multilevel Barbaric – koupit přes Asamer',
      sk: 'Skladovanie dosák CSF Multilevel Barbaric – kúpiť cez Asamer',
      hu: 'Lapraktározás CSF Multilevel Barbaric – Asamer viszonteladó',
    },
    seoDescription: {
      de: 'CSF Multilevel – mehrstöckiges Flächenlager. Maximale Kapazität auf minimaler Fläche. Asamer: autorisierter Barbaric-Händler für CZ, SK & HU.',
      en: 'CSF Multilevel – multi-level panel storage. Maximum capacity on minimal floor space. Asamer: authorized Barbaric dealer for CZ, SK & HU.',
      cz: 'CSF Multilevel – víceúrovňový sklad desek. Maximální kapacita na minimální ploše. Asamer: autorizovaný prodejce Barbaric pro CZ, SK a HU.',
      sk: 'CSF Multilevel – viacúrovňový sklad dosiek. Maximálna kapacita na minimálnej ploche. Asamer: autorizovaný predajca Barbaric pre CZ, SK a HU.',
      hu: 'CSF Multilevel – többszintes lapraktár. Maximális kapacitás minimális alapterületen. Asamer: hivatalos Barbaric viszonteladó CZ, SK és HU.',
    },
  },
  {
    slug: 'sonderanwendungen',
    name: 'Sonderanwendungen',
    category: 'storage',
    image: '/images/barbaric/sonderanwendungen.jpg',
    tagline: {
      de: 'Individuelle Lösungen für besondere Anforderungen',
      en: 'Custom solutions for special requirements',
      cz: 'Individuální řešení pro zvláštní požadavky',
      sk: 'Individuálne riešenia pre špeciálne požiadavky',
      hu: 'Egyedi megoldások speciális igényekhez',
    },
    description: {
      de: 'Für besondere Anforderungen entwickelt Barbaric maßgeschneiderte Lagerlösungen. Von ungewöhnlichen Plattenformaten über spezielle Materialien bis hin zu individuellen Prozessanforderungen – jede Anlage wird exakt nach Ihren Vorgaben konzipiert.',
      en: 'For special requirements, Barbaric develops custom storage solutions. From unusual panel formats to special materials and individual process requirements – each system is designed precisely to your specifications.',
      cz: 'Pro zvláštní požadavky vyvíjí Barbaric zakázková skladová řešení. Od neobvyklých formátů desek přes speciální materiály až po individuální procesní požadavky – každé zařízení je navrženo přesně podle vašich specifikací.',
      sk: 'Pre špeciálne požiadavky vyvíja Barbaric zákazkové skladové riešenia.',
      hu: 'Speciális igényekhez a Barbaric egyedi raktárrendszereket fejleszt.',
    },
    highlights: ['Custom-engineered for unusual panel formats and special materials', 'Designed precisely to your process and production requirements', 'Uses proven Barbaric components and handling concepts', 'Available for both craft and industrial production environments'],
    seoTitle: {
      de: 'Sonderanwendungen Flächenlager Barbaric – Händler CZ/SK/HU | Asamer',
      en: 'Custom Panel Storage Solutions Barbaric – dealer CZ/SK/HU | Asamer',
      cz: 'Speciální skladování desek Barbaric – koupit přes Asamer',
      sk: 'Špeciálne skladovanie dosák Barbaric – kúpiť cez Asamer',
      hu: 'Egyedi lapraktározás Barbaric – Asamer viszonteladó',
    },
    seoDescription: {
      de: 'Sonderanwendungen – maßgeschneiderte Lagerlösungen für besondere Anforderungen. Individuell konzipiert. Asamer: autorisierter Barbaric-Händler für CZ, SK & HU.',
      en: 'Custom solutions – tailored storage for special requirements. Individually designed. Asamer: authorized Barbaric dealer for CZ, SK & HU.',
      cz: 'Speciální aplikace – zakázková skladová řešení pro zvláštní požadavky. Asamer: autorizovaný prodejce Barbaric pro CZ, SK a HU.',
      sk: 'Špeciálne aplikácie – zákazkové skladové riešenia pre špeciálne požiadavky. Asamer: autorizovaný predajca Barbaric pre CZ, SK a HU.',
      hu: 'Speciális alkalmazások – egyedi raktármegoldások különleges igényekhez. Asamer: hivatalos Barbaric viszonteladó CZ, SK és HU.',
    },
  },

  /* ==================== FEEDING ==================== */
  {
    slug: 'lcv-performance',
    name: 'LCV Performance',
    category: 'feeding',
    image: 'https://www.barbaric.at/fileadmin/_processed_/e/b/csm_Barbaric_LCV_Performance_Layout01_c1dad1eb46.jpg',
    tagline: {
      de: 'Schnelle, schonende Beschickung von Sägen und CNC-Maschinen',
      en: 'Fast, gentle feeding of saws and CNC machines',
      cz: 'Rychlé, šetrné podávání pil a CNC strojů',
      sk: 'Rýchle, šetrné podávanie píl a CNC strojov',
      hu: 'Gyors, kíméletes adagolás fűrészekhez és CNC-gépekhez',
    },
    description: {
      de: 'Das LCV Performance ist ein vollautomatisches Beschickungssystem für Plattenaufteilsägen und CNC-Maschinen. Steuerung über Bediener-Terminal mit 2D/3D-Visualisierung, Schnittstellen zu allen gängigen Sägeherstellern, vollautomatische Plattenanforderung von der Säge. Minimaler Platzbedarf bei reduziertem Personaleinsatz.',
      en: 'The LCV Performance is a fully automatic feeding system for panel saws and CNC machines. Controlled via operator terminal with 2D/3D visualization, interfaces to all major saw manufacturers, fully automatic panel request from the saw. Minimal footprint with reduced personnel requirements.',
      cz: 'LCV Performance je plně automatický podávací systém pro formátovací pily a CNC stroje. Řízení přes operátorský terminál s 2D/3D vizualizací, rozhraní ke všem hlavním výrobcům pil, plně automatické vyžádání desky z pily. Minimální prostorový nárok při sníženém počtu pracovníků.',
      sk: 'LCV Performance je plne automatický podávací systém pre formátovacie píly a CNC stroje.',
      hu: 'Az LCV Performance teljesen automatikus adagoló rendszer lapszabó fűrészekhez és CNC-gépekhez.',
    },
    features: {
      de: ['Bediener-Terminal mit 2D/3D-Visualisierung', 'Schnittstellen zu allen gängigen Sägeherstellern', 'Vollautomatische Plattenanforderung', 'Minimaler Platzbedarf'],
      en: ['Operator terminal with 2D/3D visualization', 'Interfaces to all major saw manufacturers', 'Fully automatic panel request', 'Minimal footprint'],
      cz: ['Operátorský terminál s 2D/3D vizualizací', 'Rozhraní ke všem hlavním výrobcům pil', 'Plně automatické vyžádání desky', 'Minimální prostorový nárok'],
      sk: ['Operátorský terminál s 2D/3D vizualizáciou', 'Rozhrania ku všetkým hlavným výrobcom píl', 'Plne automatické vyžiadanie dosky', 'Minimálny priestorový nárok'],
      hu: ['Kezelői terminál 2D/3D vizualizációval', 'Interfészek az összes fő fűrészgyártóhoz', 'Teljesen automatikus lapkérés', 'Minimális helyigény'],
    },
    highlights: ['Fully automatic panel feeding — no manual intervention required', 'Operator terminal with 2D/3D visualization of storage layout', 'Interfaces to all major saw and CNC manufacturers', 'Minimal footprint — significant reduction in personnel requirements', 'Fast ROI through elimination of physically demanding work'],
    specs: {
      de: { 'Steuerung': 'Bediener-Terminal mit 2D/3D', 'Schnittstellen': 'Alle gängigen Sägen-/CNC-Hersteller', 'Plattenanforderung': 'Vollautomatisch von der Säge', 'Amortisation': '< 1 Jahr' },
      en: { 'Control': 'Operator terminal with 2D/3D', 'Interfaces': 'All major saw/CNC manufacturers', 'Panel request': 'Fully automatic from saw', 'Payback period': '< 1 year' },
      cz: { 'Ovládání': 'Operátorský terminál s 2D/3D', 'Rozhraní': 'Všichni hlavní výrobci pil/CNC', 'Vyžádání desky': 'Plně automatické z pily', 'Návratnost': '< 1 rok' },
      sk: { 'Ovládanie': 'Operátorský terminál s 2D/3D', 'Rozhrania': 'Všetci hlavní výrobcovia píl/CNC', 'Vyžiadanie dosky': 'Plne automatické z píly', 'Návratnosť': '< 1 rok' },
      hu: { 'Vezérlés': 'Kezelői terminál 2D/3D-vel', 'Interfészek': 'Minden fő fűrész-/CNC-gyártó', 'Lapkérés': 'Teljesen automatikus a fűrésztől', 'Megtérülés': '< 1 év' },
    },
    seoTitle: {
      de: 'Beschickung LCV Performance Barbaric – Händler CZ/SK/HU | Asamer',
      en: 'Feeding System LCV Performance Barbaric – dealer CZ/SK/HU | Asamer',
      cz: 'Podávací systém LCV Performance Barbaric – koupit přes Asamer',
      sk: 'Podávací systém LCV Performance Barbaric – kúpiť cez Asamer',
      hu: 'Adagoló rendszer LCV Performance Barbaric – Asamer viszonteladó',
    },
    seoDescription: {
      de: 'LCV Performance – vollautomatische Beschickung für Sägen und CNC. Interfaces zu allen Herstellern. Asamer: autorisierter Barbaric-Händler für CZ, SK & HU.',
      en: 'LCV Performance – fully automatic feeding for saws and CNC. Interfaces to all manufacturers. Asamer: authorized Barbaric dealer for CZ, SK & HU.',
      cz: 'LCV Performance – plně automatické podávání pro pily a CNC. Rozhraní ke všem výrobcům. Asamer: autorizovaný prodejce Barbaric pro CZ, SK a HU.',
      sk: 'LCV Performance – plne automatické podávanie pre píly a CNC. Rozhrania ku všetkým výrobcom. Asamer: autorizovaný predajca Barbaric pre CZ, SK a HU.',
      hu: 'LCV Performance – teljesen automatikus adagolás fűrészekhez és CNC-hez. Interfészek minden gyártóhoz. Asamer: hivatalos Barbaric viszonteladó CZ, SK és HU.',
    },
  },

  /* ==================== NESTING ==================== */
  {
    slug: 'nst',
    name: 'NST',
    category: 'nesting',
    image: '/images/barbaric/nst.png',
    tagline: {
      de: 'Vollautomatische Abstapelung nach der Nestingbearbeitung',
      en: 'Fully automatic destacking after nesting processing',
      cz: 'Plně automatické odstapelování po nestingovém zpracování',
      sk: 'Plne automatické odstapelovanie po nestingovom spracovaní',
      hu: 'Teljesen automatikus lerakodás a nesting megmunkálás után',
    },
    description: {
      de: 'Der NST Nesting Picker erkennt per Kamera die Position und Lage jedes Bauteils nach der Nestingbearbeitung. Automatisches Sortieren, Stapeln und Entsorgen von Reststücken in Sammelbehälter – gesteuert durch Abgleich von Nesting-Plandaten mit Echtzeit-Positionsanalyse.',
      en: 'The NST Nesting Picker uses camera-based detection for position and orientation of each part after nesting processing. Automatic sorting, stacking and disposal of offcuts into collection bins – controlled by matching nesting plan data with real-time position analysis.',
      cz: 'NST Nesting Picker rozpoznává kamerou pozici a orientaci každého dílu po nestingovém zpracování. Automatické třídění, stohování a likvidace zbytků do sběrných nádob – řízeno porovnáním dat nestingového plánu s analýzou pozice v reálném čase.',
      sk: 'NST Nesting Picker rozpoznáva kamerou polohu a orientáciu každého dielu po nestingovom spracovaní.',
      hu: 'Az NST Nesting Picker kamerás érzékeléssel azonosítja minden alkatrész pozícióját és orientációját a nesting megmunkálás után.',
    },
    highlights: ['Camera-based detection of part position and orientation after nesting', 'Automatic sorting and stacking of finished parts', 'Automatic disposal of offcuts into collection bins', 'Matches nesting plan data with real-time position analysis', 'Saves valuable working time and increases nesting machine productivity'],
    specs: {
      de: { 'Traglast': '60 kg', 'Plattengröße min.': '80 × 300 mm', 'Plattengröße max.': '2.800 × 1.300 mm', 'Plattendicke': '8–60 mm', 'Durchsatz': 'bis zu 10 Teile/min', 'Hub-Antrieb': 'Elektromotor', 'Rotations-Antrieb': 'Elektromotor', 'Betriebsdruck': '6 bar', 'Spannung': '400 V / 50 Hz', 'Gesamtleistung': '5 kW', 'Luftverbrauch': '420 Nl/min' },
      en: { 'Max. load capacity': '60 kg', 'Min. panel size': '80 × 300 mm', 'Max. panel size': '2,800 × 1,300 mm', 'Panel thickness': '8–60 mm', 'Throughput': 'up to 10 parts/min', 'Lift drive': 'Electric motor', 'Rotation drive': 'Electric motor', 'Operating pressure': '6 bar', 'Voltage': '400 V / 50 Hz', 'Total power': '5 kW', 'Air consumption': '420 Nl/min' },
      cz: { 'Nosnost': '60 kg', 'Velikost desky min.': '80 × 300 mm', 'Velikost desky max.': '2 800 × 1 300 mm', 'Tloušťka desky': '8–60 mm', 'Průchodnost': 'až 10 dílů/min', 'Zdvihový pohon': 'Elektromotor', 'Rotační pohon': 'Elektromotor', 'Provozní tlak': '6 bar', 'Napětí': '400 V / 50 Hz', 'Celkový výkon': '5 kW', 'Spotřeba vzduchu': '420 Nl/min' },
      sk: { 'Nosnosť': '60 kg', 'Veľkosť dosky min.': '80 × 300 mm', 'Veľkosť dosky max.': '2 800 × 1 300 mm', 'Hrúbka dosky': '8–60 mm', 'Priepustnosť': 'až 10 dielov/min', 'Zdvihový pohon': 'Elektromotor', 'Rotačný pohon': 'Elektromotor', 'Prevádzkový tlak': '6 bar', 'Napätie': '400 V / 50 Hz', 'Celkový výkon': '5 kW', 'Spotreba vzduchu': '420 Nl/min' },
      hu: { 'Teherbírás': '60 kg', 'Lapméret min.': '80 × 300 mm', 'Lapméret max.': '2 800 × 1 300 mm', 'Lapvastagság': '8–60 mm', 'Átbocsátás': 'akár 10 darab/perc', 'Emelő meghajtás': 'Villanymotor', 'Forgató meghajtás': 'Villanymotor', 'Üzemi nyomás': '6 bar', 'Feszültség': '400 V / 50 Hz', 'Összteljesítmény': '5 kW', 'Légfogyasztás': '420 Nl/perc' },
    },
    seoTitle: {
      de: 'Nesting Picker NST Barbaric – Händler CZ/SK/HU | Asamer',
      en: 'Nesting Picker NST Barbaric – dealer CZ/SK/HU | Asamer',
      cz: 'Nesting Picker NST Barbaric – koupit přes Asamer',
      sk: 'Nesting Picker NST Barbaric – kúpiť cez Asamer',
      hu: 'Nesting Picker NST Barbaric – Asamer viszonteladó',
    },
    seoDescription: {
      de: 'NST Nesting Picker – kameragesteuerte Abstapelung nach Nesting. Automatische Sortierung und Reststückentsorgung. Asamer: Barbaric-Händler CZ, SK & HU.',
      en: 'NST Nesting Picker – camera-controlled destacking after nesting. Automatic sorting and offcut disposal. Asamer: Barbaric dealer CZ, SK & HU.',
      cz: 'NST Nesting Picker – kamerou řízené odstapelování po nestingu. Automatické třídění a likvidace zbytků. Asamer: prodejce Barbaric CZ, SK a HU.',
      sk: 'NST Nesting Picker – kamerou riadené odstapelovanie po nestingu. Automatické triedenie. Asamer: predajca Barbaric CZ, SK a HU.',
      hu: 'NST Nesting Picker – kamerás lerakodás nesting után. Automatikus válogatás és hulladékkezelés. Asamer: Barbaric viszonteladó CZ, SK és HU.',
    },
  },

  /* ==================== RETURN SYSTEMS ==================== */
  {
    slug: 'rts-compact',
    name: 'RTS Compact',
    category: 'return',
    image: '/images/barbaric/rts-compact.jpg',
    tagline: { de: 'Universell, einfach, größtmöglicher Nutzen', en: 'Universal, simple, maximum benefit', cz: 'Univerzální, jednoduché, maximální užitek', sk: 'Univerzálne, jednoduché, maximálny úžitok', hu: 'Univerzális, egyszerű, maximális haszon' },
    description: { de: 'Das RTS Compact ist ein universelles Rückführsystem für Kantenanleimmaschinen. Einfache Installation, kurze Amortisationszeit durch Eigenentwicklung aller Komponenten. Schneller, ergonomischer Workflow am Kantenleimer.', en: 'The RTS Compact is a universal return system for edgebanding machines. Simple installation, short ROI through in-house development of all components. Fast, ergonomic workflow at the edgebander.', cz: 'RTS Compact je univerzální vratný systém pro olepovačky hran. Jednoduchá instalace, krátká návratnost díky vlastnímu vývoji všech komponentů.', sk: 'RTS Compact je univerzálny vratný systém pre olepovačky hrán.', hu: 'Az RTS Compact univerzális visszafutó rendszer élzárógépekhez.' },
    highlights: ['Universal system — connects to any edgebander regardless of brand', 'Throughput speed continuously adjustable to match edgebander speed', 'In-house development of all components — short payback time', 'Simple installation, fast commissioning', 'Ergonomic single-operator workflow at the edgebander'],
    specs: {
      de: { 'Kompatibilität': 'Jede Kantenanleimmaschine', 'Geschwindigkeit': 'Stufenlos einstellbar', 'Installationszeit': 'ca. 0,5 Tage', 'Optionen': 'Verlängerungsband, Ergonomiepaket (Hubtisch + Luftkissentisch)' },
      en: { 'Compatibility': 'Any edgebander brand', 'Speed': 'Continuously adjustable', 'Installation time': '~0.5 days', 'Options': 'Extension belt, Ergonomics package (lift table + air cushion table)' },
      cz: { 'Kompatibilita': 'Jakákoli olepovačka hran', 'Rychlost': 'Plynule nastavitelná', 'Doba instalace': 'cca 0,5 dne', 'Volitelné příslušenství': 'Prodlužovací pás, Ergonomický balíček (zdvihací stůl + vzduchový stůl)' },
      sk: { 'Kompatibilita': 'Akákoľvek olepovačka hrán', 'Rýchlosť': 'Plynulo nastaviteľná', 'Doba inštalácie': 'cca 0,5 dňa', 'Voliteľné príslušenstvo': 'Predlžovací pás, Ergonomický balíček (zdvíhací stôl + vzduchový stôl)' },
      hu: { 'Kompatibilitás': 'Bármely élzárógép', 'Sebesség': 'Fokozatmentesen állítható', 'Telepítési idő': 'kb. 0,5 nap', 'Opciók': 'Hosszabbító szalag, Ergonómiai csomag (emelőasztal + légpárnás asztal)' },
    },
    seoTitle: { de: 'Returnsystem RTS Compact Barbaric – Händler CZ/SK/HU | Asamer', en: 'Return System RTS Compact Barbaric – dealer CZ/SK/HU | Asamer', cz: 'Návratový systém RTS Compact Barbaric – koupit přes Asamer', sk: 'Návratový systém RTS Compact Barbaric – kúpiť cez Asamer', hu: 'Visszafutó rendszer RTS Compact Barbaric – Asamer viszonteladó' },
    seoDescription: { de: 'RTS Compact – universelles Rückführsystem für Kantenanleimer. Kurze Amortisation. Asamer: autorisierter Barbaric-Händler für CZ, SK & HU.', en: 'RTS Compact – universal return system for edgebanders. Short ROI. Asamer: authorized Barbaric dealer for CZ, SK & HU.', cz: 'RTS Compact – univerzální vratný systém pro olepovačky. Krátká návratnost. Asamer: autorizovaný prodejce Barbaric pro CZ, SK a HU.', sk: 'RTS Compact – univerzálny vratný systém pre olepovačky. Krátka návratnosť. Asamer: autorizovaný predajca Barbaric pre CZ, SK a HU.', hu: 'RTS Compact – univerzális visszafutó élzárógépekhez. Rövid megtérülés. Asamer: hivatalos Barbaric viszonteladó CZ, SK és HU.' },
  },
  {
    slug: 'rts-professional',
    name: 'RTS Professional',
    category: 'return',
    image: '/images/barbaric/rts-professional.png',
    tagline: { de: 'Intelligent – mit und ohne Abstapelmöglichkeit', en: 'Intelligent – with and without destacking', cz: 'Inteligentní – s možností i bez možnosti odstapelování', sk: 'Inteligentný – s možnosťou i bez možnosti odstapelovania', hu: 'Intelligens – lerakodási lehetőséggel és anélkül' },
    description: { de: 'Das RTS Professional bietet intelligente Rückführung mit optionaler Abstapelung. Flexibel konfigurierbar für verschiedene Produktionsanforderungen an der Kantenanleimmaschine.', en: 'The RTS Professional offers intelligent return with optional destacking. Flexibly configurable for various production requirements at the edgebander.', cz: 'RTS Professional nabízí inteligentní vracení s volitelným odstapelováním. Flexibilně konfigurovatelný pro různé výrobní požadavky u olepovačky hran.', sk: 'RTS Professional ponúka inteligentné vracenie s voliteľným odstapelovaním.', hu: 'Az RTS Professional intelligens visszafutást kínál opcionális lerakodással.' },
    highlights: ['Pre-assembled components — quick and easy installation and start-up', 'Dual mode — picks up two parts simultaneously for maximum throughput', 'Optional destacking for sorted output', 'Optimizes material flow and machine utilization', 'Flexibly configurable for various production requirements'],
    specs: {
      de: { 'Aufnahmemodus': 'Dual (2 Teile gleichzeitig)', 'Wendefunktionen': '90° und 180°', 'Installationszeit': 'ca. 2 Tage', 'Stapelstationen': 'Mehrere möglich', 'Amortisation': '< 1 Jahr' },
      en: { 'Pickup mode': 'Dual (2 parts simultaneously)', 'Turning functions': '90° and 180°', 'Installation time': '~2 days', 'Stacking stations': 'Multiple possible', 'Payback period': '< 1 year' },
      cz: { 'Režim odběru': 'Duální (2 díly současně)', 'Funkce otáčení': '90° a 180°', 'Doba instalace': 'cca 2 dny', 'Stohovací stanice': 'Více možných', 'Návratnost': '< 1 rok' },
      sk: { 'Režim odberu': 'Duálny (2 diely súčasne)', 'Funkcie otáčania': '90° a 180°', 'Doba inštalácie': 'cca 2 dni', 'Stohovacie stanice': 'Viacero možných', 'Návratnosť': '< 1 rok' },
      hu: { 'Felvételi mód': 'Kettős (2 darab egyidejűleg)', 'Fordító funkciók': '90° és 180°', 'Telepítési idő': 'kb. 2 nap', 'Rakodóállomások': 'Több lehetséges', 'Megtérülés': '< 1 év' },
    },
    seoTitle: { de: 'Returnsystem RTS Professional Barbaric – Händler CZ/SK/HU | Asamer', en: 'Return System RTS Professional Barbaric – dealer CZ/SK/HU | Asamer', cz: 'Návratový systém RTS Professional Barbaric – koupit přes Asamer', sk: 'Návratový systém RTS Professional Barbaric – kúpiť cez Asamer', hu: 'Visszafutó rendszer RTS Professional Barbaric – Asamer viszonteladó' },
    seoDescription: { de: 'RTS Professional – intelligentes Rückführsystem mit optionaler Abstapelung. Flexibel konfigurierbar. Asamer: Barbaric-Händler CZ, SK & HU.', en: 'RTS Professional – intelligent return system with optional destacking. Flexibly configurable. Asamer: Barbaric dealer CZ, SK & HU.', cz: 'RTS Professional – inteligentní vratný systém s volitelným odstapelováním. Flexibilní. Asamer: prodejce Barbaric CZ, SK a HU.', sk: 'RTS Professional – inteligentný vratný systém s voliteľným odstapelovaním. Flexibilný. Asamer: predajca Barbaric CZ, SK a HU.', hu: 'RTS Professional – intelligens visszafutó opcionális lerakodással. Rugalmasan konfigurálható. Asamer: Barbaric viszonteladó CZ, SK és HU.' },
  },
  {
    slug: 'rts-industrial',
    name: 'RTS Industrial',
    category: 'return',
    image: '/images/barbaric/rts-industrial.png',
    tagline: { de: 'Industriell – für Traglasten bis 100 kg', en: 'Industrial – for loads up to 100 kg', cz: 'Průmyslový – pro nosnosti do 100 kg', sk: 'Priemyselný – pre nosnosti do 100 kg', hu: 'Ipari – akár 100 kg teherbírással' },
    description: { de: 'Das RTS Industrial ist für industrielle Produktionslinien mit schweren Werkstücken bis 100 kg konzipiert. Robuste Bauweise für Dauerbetrieb mit hoher Taktrate an leistungsstarken Kantenanleimmaschinen.', en: 'The RTS Industrial is designed for industrial production lines with heavy workpieces up to 100 kg. Robust construction for continuous operation with high cycle rates on powerful edgebanders.', cz: 'RTS Industrial je navržen pro průmyslové výrobní linky s těžkými obrobky do 100 kg. Robustní konstrukce pro nepřetržitý provoz s vysokou taktovací frekvencí.', sk: 'RTS Industrial je navrhnutý pre priemyselné výrobné linky s ťažkými obrobkami do 100 kg.', hu: 'Az RTS Industrial ipari gyártósorokhoz készült, akár 100 kg-os nehéz munkadarabokhoz.' },
    specs: {
      de: { 'Max. Traglast': '100 kg', 'Max. Teilelänge': '4.100 mm', 'Wendefunktionen': '90° und 180°', 'Datenschnittstelle': 'Zu Kantenanleimmaschinenherstellern', 'Amortisation': '< 1 Jahr' },
      en: { 'Max. load': '100 kg', 'Max. part length': '4,100 mm', 'Turning functions': '90° and 180°', 'Data interface': 'To edgebander manufacturers', 'Payback period': '< 1 year' },
      cz: { 'Max. nosnost': '100 kg', 'Max. délka dílu': '4 100 mm', 'Funkce otáčení': '90° a 180°', 'Datové rozhraní': 'K výrobcům olepovačů hran', 'Návratnost': '< 1 rok' },
      sk: { 'Max. nosnosť': '100 kg', 'Max. dĺžka dielu': '4 100 mm', 'Funkcie otáčania': '90° a 180°', 'Dátové rozhranie': 'K výrobcom olepovačov hrán', 'Návratnosť': '< 1 rok' },
      hu: { 'Max. teherbírás': '100 kg', 'Max. darab hossz': '4 100 mm', 'Fordító funkciók': '90° és 180°', 'Adatinterfész': 'Élzárógép-gyártókhoz', 'Megtérülés': '< 1 év' },
    },
    highlights: ['Designed for industrial environments — loads up to 100 kg', 'Parts up to 4,100 mm in length', 'Robust construction for continuous high-cycle-rate operation', 'Vacuum suction handling — gentle on all surface materials', 'Significantly increases efficiency, reduces operator strain'],
    seoTitle: { de: 'Returnsystem RTS Industrial Barbaric – Händler CZ/SK/HU | Asamer', en: 'Return System RTS Industrial Barbaric – dealer CZ/SK/HU | Asamer', cz: 'Návratový systém RTS Industrial Barbaric – koupit přes Asamer', sk: 'Návratový systém RTS Industrial Barbaric – kúpiť cez Asamer', hu: 'Visszafutó rendszer RTS Industrial Barbaric – Asamer viszonteladó' },
    seoDescription: { de: 'RTS Industrial – industrielles Rückführsystem für Lasten bis 100 kg. Robuster Dauerbetrieb. Asamer: autorisierter Barbaric-Händler für CZ, SK & HU.', en: 'RTS Industrial – industrial return system for loads up to 100 kg. Robust continuous operation. Asamer: authorized Barbaric dealer for CZ, SK & HU.', cz: 'RTS Industrial – průmyslový vratný systém pro nosnosti do 100 kg. Robustní provoz. Asamer: prodejce Barbaric CZ, SK a HU.', sk: 'RTS Industrial – priemyselný vratný systém pre nosnosti do 100 kg. Robustná prevádzka. Asamer: predajca Barbaric CZ, SK a HU.', hu: 'RTS Industrial – ipari visszafutó 100 kg-ig. Robusztus folyamatos üzem. Asamer: hivatalos Barbaric viszonteladó CZ, SK és HU.' },
  },
  {
    slug: 'teilehandling',
    name: 'Automatisches Teilehandling',
    category: 'return',
    image: '/images/barbaric/teilehandling.png',
    tagline: { de: 'Für Losgröße-1-Fertigung an Durchlaufmaschinen', en: 'For batch-size-1 production on throughfeed machines', cz: 'Pro výrobu v dávce 1 na průchozích strojích', sk: 'Pre výrobu v dávke 1 na priechodných strojoch', hu: 'Egydarabos gyártáshoz átmenő gépeken' },
    description: { de: 'Automatisches Teilehandling für die Losgröße-1-Fertigung an Durchlaufmaschinen wie Kantenanleimern. Jedes Teil wird individuell gehandhabt, sortiert und weitergeleitet – für maximale Flexibilität in der modernen Möbelproduktion.', en: 'Automatic parts handling for batch-size-1 production on throughfeed machines like edgebanders. Each part is individually handled, sorted and forwarded – for maximum flexibility in modern furniture production.', cz: 'Automatické zacházení s díly pro výrobu v dávce 1 na průchozích strojích jako olepovačky hran. Každý díl je individuálně zpracován, setříděn a přepraven.', sk: 'Automatické zaobchádzanie s dielmi pre výrobu v dávke 1 na priechodných strojoch.', hu: 'Automatikus alkatrészkezelés egydarabos gyártáshoz átmenő gépeken, mint az élzárógépek.' },
    highlights: ['Automatic individual part handling for batch-size-1 production', 'Each part individually handled, sorted and forwarded', 'Ideal for throughfeed machines like edgebanders', 'Maximum flexibility for modern furniture production', 'Eliminates manual sorting between production steps'],
    specs: {
      de: { 'Fördergeschwindigkeit': 'bis zu 70 m/min', 'Ausstoß': '1.000–1.200 Teile/Schicht', 'Maschinentyp': 'Durchlaufmaschinen (Kantenanleimer, Bohrlinien)', 'Losgröße': '1 (Einzelteile)' },
      en: { 'Conveyor speed': 'up to 70 m/min', 'Output': '1,000–1,200 parts/shift', 'Machine type': 'Throughfeed (edgebanders, drilling lines)', 'Batch size': '1 (individual parts)' },
      cz: { 'Rychlost dopravníku': 'až 70 m/min', 'Výstup': '1 000–1 200 dílů/směna', 'Typ stroje': 'Průchozí stroje (olepovačky hran, vrtací linky)', 'Velikost dávky': '1 (jednotlivé díly)' },
      sk: { 'Rýchlosť dopravníka': 'až 70 m/min', 'Výstup': '1 000–1 200 dielov/zmena', 'Typ stroja': 'Priechodné stroje (olepovačky hrán, vŕtacie linky)', 'Veľkosť dávky': '1 (jednotlivé diely)' },
      hu: { 'Szállítási sebesség': 'akár 70 m/perc', 'Kibocsátás': '1 000–1 200 darab/műszak', 'Géptípus': 'Átmenő gépek (élzárógépek, fúrósorok)', 'Tételméret': '1 (egyedi darabok)' },
    },
    seoTitle: { de: 'Automatisches Teilehandling Barbaric – Händler CZ/SK/HU | Asamer', en: 'Automatic Parts Handling Barbaric – dealer CZ/SK/HU | Asamer', cz: 'Automatické zacházení s díly Barbaric – koupit přes Asamer', sk: 'Automatické zaobchádzanie s dielmi Barbaric – kúpiť cez Asamer', hu: 'Automatikus alkatrészkezelés Barbaric – Asamer viszonteladó' },
    seoDescription: { de: 'Teilehandling – automatisches Handling für Losgröße 1 an Durchlaufmaschinen. Individuelle Sortierung. Asamer: Barbaric-Händler CZ, SK & HU.', en: 'Parts handling – automatic handling for batch-size-1 on throughfeed machines. Individual sorting. Asamer: Barbaric dealer CZ, SK & HU.', cz: 'Zacházení s díly – automatické pro dávku 1 na průchozích strojích. Individuální třídění. Asamer: prodejce Barbaric CZ, SK a HU.', sk: 'Zaobchádzanie s dielmi – automatické pre dávku 1 na priechodných strojoch. Individuálne triedenie. Asamer: predajca Barbaric CZ, SK a HU.', hu: 'Alkatrészkezelés – automatikus egydarabos gyártáshoz átmenő gépeken. Egyedi válogatás. Asamer: Barbaric viszonteladó CZ, SK és HU.' },
  },

  /* ==================== BUFFER ==================== */
  {
    slug: 'pbx',
    name: 'PBX',
    category: 'buffer',
    image: '/images/barbaric/pbx.jpg',
    tagline: { de: 'Pufferung von Möbelteilen für gleichmäßigen Teilefluss', en: 'Buffering of furniture parts for even part flow', cz: 'Pufrovací systém pro rovnoměrný tok dílů', sk: 'Pufrovací systém pre rovnomerný tok dielov', hu: 'Bútorrészek pufferelése egyenletes alkatrész-áramláshoz' },
    description: { de: 'Der PBX Teilepuffer bietet ca. 120 m² Lagerfläche auf minimalem Footprint. Mit ca. 6 Teilen/min Taktzeit, max. Panelgröße 2,8 × 1,95 m und max. 25 mm Stärke (optional 40 mm). Verfügbar in ein- und doppelseitiger Ausführung mit individuellem Antrieb pro Schublade.', en: 'The PBX parts buffer provides approx. 120 m² storage on a minimal footprint. With approx. 6 parts/min cycle time, max. panel size 2.8 × 1.95 m and max. 25 mm thickness (optional 40 mm). Available in single and double-sided versions with individual drive per drawer.', cz: 'PBX buffer dílů nabízí cca 120 m² skladovací plochy na minimálním půdorysu. S taktem cca 6 dílů/min, max. rozměr panelu 2,8 × 1,95 m a max. tloušťka 25 mm (volitelně 40 mm). K dispozici v jednostranném a oboustranném provedení.', sk: 'PBX buffer dielov ponúka cca 120 m² skladovacej plochy na minimálnom pôdoryse.', hu: 'A PBX alkatrész-puffer kb. 120 m² tárolófelületet biztosít minimális alapterületen.' },
    specs: {
      de: { 'Lagerfläche': 'ca. 120 m² auf kleinem Raum', 'Zykluszeit': 'bis zu 6 Teile/min', 'Max. Plattengröße': '2.800 × 1.950 mm', 'Max. Plattendicke': '25 mm (optional 40 mm)', 'Schubladenantrieb': 'Jede Schublade einzeln angetrieben (überlappende Öffnungs-/Schließprozesse)' },
      en: { 'Storage area': '~120 m² on minimal footprint', 'Cycle time': 'up to 6 parts/min', 'Max. panel size': '2,800 × 1,950 mm', 'Max. thickness': '25 mm (optional 40 mm)', 'Drawer drive': 'Each drawer individually driven (overlapping open/close cycles)' },
      cz: { 'Skladovací plocha': 'cca 120 m² na malém prostoru', 'Doba cyklu': 'až 6 dílů/min', 'Max. velikost desky': '2 800 × 1 950 mm', 'Max. tloušťka': '25 mm (volitelně 40 mm)', 'Pohon zásuvek': 'Každá zásuvka samostatně poháněna (překrývající se otevírací/zavírací cykly)' },
      sk: { 'Skladovacia plocha': 'cca 120 m² na malom priestore', 'Doba cyklu': 'až 6 dielov/min', 'Max. veľkosť dosky': '2 800 × 1 950 mm', 'Max. hrúbka': '25 mm (voliteľne 40 mm)', 'Pohon zásuviek': 'Každá zásuvka samostatne poháňaná (prekrývajúce sa otváracie/zatváracie cykly)' },
      hu: { 'Raktárterület': 'kb. 120 m² kis helyen', 'Ciklusidő': 'akár 6 darab/perc', 'Max. lapméret': '2 800 × 1 950 mm', 'Max. vastagság': '25 mm (opcionálisan 40 mm)', 'Fiók meghajtás': 'Minden fiók egyedileg meghajtva (átfedő nyitási/zárási ciklusok)' },
    },
    highlights: ['~120 m² storage area on a minimal footprint', 'Cycle time ~6 parts/min for consistent part flow', 'Max. panel size 2.8 × 1.95 m, max. thickness 25 mm (opt. 40 mm)', 'Available in single and double-sided versions', 'Individual drive per drawer for precise, independent control'],
    seoTitle: { de: 'Teilepuffer PBX Barbaric – Händler CZ/SK/HU | Asamer', en: 'Parts Buffer PBX Barbaric – dealer CZ/SK/HU | Asamer', cz: 'Buffer dílů PBX Barbaric – koupit přes Asamer', sk: 'Buffer dielov PBX Barbaric – kúpiť cez Asamer', hu: 'Alkatrész-puffer PBX Barbaric – Asamer viszonteladó' },
    seoDescription: { de: 'PBX – Teilepuffer für gleichmäßigen Teilefluss. ~120 m², 6 Teile/min, max. 2,8×1,95 m. Asamer: autorisierter Barbaric-Händler für CZ, SK & HU.', en: 'PBX – parts buffer for even part flow. ~120 m², 6 parts/min, max. 2.8×1.95 m. Asamer: authorized Barbaric dealer for CZ, SK & HU.', cz: 'PBX – buffer dílů pro rovnoměrný tok. ~120 m², 6 dílů/min, max. 2,8×1,95 m. Asamer: prodejce Barbaric CZ, SK a HU.', sk: 'PBX – buffer dielov pre rovnomerný tok. ~120 m², 6 dielov/min, max. 2,8×1,95 m. Asamer: predajca Barbaric CZ, SK a HU.', hu: 'PBX – alkatrész-puffer egyenletes áramláshoz. ~120 m², 6 db/perc, max. 2,8×1,95 m. Asamer: Barbaric viszonteladó CZ, SK és HU.' },
  },

  /* ==================== DOOR HANDLING ==================== */
  {
    slug: 'drx',
    name: 'DRX Türenlagersystem',
    category: 'door',
    image: 'https://www.barbaric.at/fileadmin/_processed_/f/b/csm_TMP_Akk_a3b6a50a7e.jpg',
    tagline: { de: 'NEUHEIT – Türenlagersystem', en: 'NEW – Door storage system', cz: 'NOVINKA – Skladovací systém pro dveře', sk: 'NOVINKA – Skladovací systém pre dvere', hu: 'ÚJDONSÁG – Ajtóraktározó rendszer' },
    description: { de: 'Das DRX ist Barbarics neuestes Türenlagersystem. Es kombiniert kompakte Bauweise mit hoher Kapazität für die automatische Lagerung und Bereitstellung von Türen in der industriellen Fertigung.', en: 'The DRX is Barbaric\'s newest door storage system. It combines compact design with high capacity for automatic storage and provision of doors in industrial manufacturing.', cz: 'DRX je nejnovější systém skladování dveří od Barbaric. Spojuje kompaktní provedení s vysokou kapacitou pro automatické skladování a poskytování dveří v průmyslové výrobě.', sk: 'DRX je najnovší systém skladovania dverí od Barbaric.', hu: 'A DRX a Barbaric legújabb ajtóraktározó rendszere.' },
    highlights: ['Barbaric\'s newest door storage system', 'Compact design with high capacity for industrial production', 'Automatic storage and retrieval of doors', 'Fast access times for continuous production flow'],
    specs: {
      de: { 'Geeignet für': 'Türen, Rahmen, Bodenbeläge (Vinyl/Parkett), verpackte Waren', 'Erkennung': 'Barcode + optische Teileerkennung', 'Anbindung': 'ERP-/Logistiksysteme', 'Kommissionierung': 'Vollautomatische Auftragszusammenstellung', 'Manipulator': 'Saugnäpfe + Klemmmechanismus', 'Option': 'CSF-Plattentraverse Erweiterung' },
      en: { 'Suitable for': 'Doors, frames, flooring (vinyl/parquet), packaged goods', 'Recognition': 'Barcode + optical part detection', 'Integration': 'ERP / logistics systems', 'Picking': 'Fully automatic order assembly', 'Manipulator': 'Suction cups + clamping mechanism', 'Option': 'CSF panel traverse extension' },
      cz: { 'Vhodné pro': 'Dveře, rámy, podlahoviny (vinyl/parkety), balené zboží', 'Rozpoznání': 'Čárový kód + optická detekce dílů', 'Napojení': 'ERP / logistické systémy', 'Vychystávání': 'Plně automatická kompletace zakázek', 'Manipulátor': 'Přísavky + svěrací mechanismus', 'Volitelně': 'Rozšíření CSF desková traversa' },
      sk: { 'Vhodné pre': 'Dvere, rámy, podlahoviny (vinyl/parkety), balený tovar', 'Rozpoznanie': 'Čiarový kód + optická detekcia dielov', 'Napojenie': 'ERP / logistické systémy', 'Vychystávanie': 'Plne automatická kompletácia zákaziek', 'Manipulátor': 'Prísavky + zvierací mechanizmus', 'Voliteľne': 'Rozšírenie CSF dosková traversa' },
      hu: { 'Alkalmas': 'Ajtók, keretek, padlóburkolatok (vinyl/parketta), csomagolt áruk', 'Felismerés': 'Vonalkód + optikai alkatrész-érzékelés', 'Integráció': 'ERP / logisztikai rendszerek', 'Komissiózás': 'Teljesen automatikus rendelés-összeállítás', 'Manipulátor': 'Tapadókorongok + szorítómechanizmus', 'Opció': 'CSF laptraverz bővítés' },
    },
    seoTitle: { de: 'Türenlagersystem DRX Barbaric – Händler CZ/SK/HU | Asamer', en: 'Door Storage System DRX Barbaric – dealer CZ/SK/HU | Asamer', cz: 'Skladovací systém dveří DRX Barbaric – koupit přes Asamer', sk: 'Skladovací systém dverí DRX Barbaric – kúpiť cez Asamer', hu: 'Ajtóraktározó rendszer DRX Barbaric – Asamer viszonteladó' },
    seoDescription: { de: 'DRX – neues Türenlagersystem. Kompakt, hohe Kapazität, industrielle Fertigung. Asamer: autorisierter Barbaric-Händler für CZ, SK & HU.', en: 'DRX – new door storage system. Compact, high capacity, industrial production. Asamer: authorized Barbaric dealer for CZ, SK & HU.', cz: 'DRX – nový skladovací systém dveří. Kompaktní, vysoká kapacita. Asamer: autorizovaný prodejce Barbaric pro CZ, SK a HU.', sk: 'DRX – nový skladovací systém dverí. Kompaktný, vysoká kapacita. Asamer: autorizovaný predajca Barbaric pre CZ, SK a HU.', hu: 'DRX – új ajtóraktár rendszer. Kompakt, nagy kapacitás, ipari gyártás. Asamer: hivatalos Barbaric viszonteladó CZ, SK és HU.' },
  },
  {
    slug: 'csf-industrial-turen',
    name: 'CSF Industrial Türen',
    category: 'door',
    image: 'https://www.barbaric.at/fileadmin/_processed_/f/b/csm_TMP_Akk_a3b6a50a7e.jpg',
    tagline: { de: 'Lagerlösung für Türen in der Industrie', en: 'Storage solution for doors in industry', cz: 'Skladové řešení pro dveře v průmyslu', sk: 'Skladové riešenie pre dvere v priemysle', hu: 'Raktármegoldás ajtókhoz az iparban' },
    description: { de: 'Das CSF Industrial Türen ist ein spezialisiertes Flächenlager für die automatische Lagerung und Bereitstellung von Türen in industriellen Produktionsumgebungen. Hohe Kapazität und schnelle Zugriffszeiten für den Dauerbetrieb.', en: 'The CSF Industrial Doors is a specialized panel storage for automatic storage and retrieval of doors in industrial production environments. High capacity and fast access times for continuous operation.', cz: 'CSF Industrial Dveře je specializovaný sklad pro automatické skladování a poskytování dveří v průmyslovém výrobním prostředí.', sk: 'CSF Industrial Dvere je špecializovaný sklad pre automatické skladovanie a poskytovanie dverí.', hu: 'A CSF Industrial Ajtók speciális raktárrendszer ajtók automatikus tárolására és kiadására ipari környezetben.' },
    highlights: ['Specialized panel storage for automatic door production', 'High storage capacity with fast access times', 'Designed for continuous industrial operation', 'Integrates with existing production and ERP systems'],
    specs: {
      de: { 'Typ': 'Spezialisiertes Türenlager', 'Anbindung': 'ERP + Produktionssysteme', 'Betrieb': 'Industrieller Dauerbetrieb' },
      en: { 'Type': 'Specialized door storage', 'Integration': 'ERP + production systems', 'Operation': 'Continuous industrial' },
      cz: { 'Typ': 'Specializovaný sklad dveří', 'Napojení': 'ERP + výrobní systémy', 'Provoz': 'Průmyslový nepřetržitý' },
      sk: { 'Typ': 'Špecializovaný sklad dverí', 'Napojenie': 'ERP + výrobné systémy', 'Prevádzka': 'Priemyselná nepretržitá' },
      hu: { 'Típus': 'Speciális ajtóraktár', 'Integráció': 'ERP + gyártási rendszerek', 'Üzemmód': 'Folyamatos ipari' },
    },
    seoTitle: { de: 'Türen CSF Industrial Barbaric – Händler CZ/SK/HU | Asamer', en: 'Doors CSF Industrial Barbaric – dealer CZ/SK/HU | Asamer', cz: 'Dveře CSF Industrial Barbaric – koupit přes Asamer', sk: 'Dvere CSF Industrial Barbaric – kúpiť cez Asamer', hu: 'Ajtók CSF Industrial Barbaric – Asamer viszonteladó' },
    seoDescription: { de: 'CSF Industrial Türen – spezialisiertes Flächenlager für Türenproduktion. Hohe Kapazität. Asamer: autorisierter Barbaric-Händler für CZ, SK & HU.', en: 'CSF Industrial Doors – specialized panel storage for door production. High capacity. Asamer: authorized Barbaric dealer for CZ, SK & HU.', cz: 'CSF Industrial Dveře – specializovaný sklad pro výrobu dveří. Vysoká kapacita. Asamer: prodejce Barbaric CZ, SK a HU.', sk: 'CSF Industrial Dvere – špecializovaný sklad pre výrobu dverí. Vysoká kapacita. Asamer: predajca Barbaric CZ, SK a HU.', hu: 'CSF Industrial Ajtók – speciális raktár ajtógyártáshoz. Nagy kapacitás. Asamer: hivatalos Barbaric viszonteladó CZ, SK és HU.' },
  },
  {
    slug: 'tmp',
    name: 'TMP Türenmanipulator',
    category: 'door',
    image: 'https://www.barbaric.at/fileadmin/_processed_/f/b/csm_TMP_Akk_a3b6a50a7e.jpg',
    tagline: { de: 'Beschickung CNC + Stapelung bearbeiteter Türen', en: 'CNC feeding + stacking of processed doors', cz: 'Podávání CNC + stohování zpracovaných dveří', sk: 'Podávanie CNC + stohovanie spracovaných dverí', hu: 'CNC adagolás + megmunkált ajtók rakodása' },
    description: { de: 'Der TMP Türenmanipulator automatisiert die Beschickung von CNC-Maschinen und die Stapelung bearbeiteter Türen. Schnelle und kompakte Systeme für höhere Produktivität und geringere Belastung der Mitarbeiter.', en: 'The TMP door manipulator automates CNC machine feeding and stacking of processed doors. Fast and compact systems for higher productivity and reduced operator workload.', cz: 'TMP manipulátor dveří automatizuje podávání CNC strojů a stohování zpracovaných dveří. Rychlé a kompaktní systémy pro vyšší produktivitu.', sk: 'TMP manipulátor dverí automatizuje podávanie CNC strojov a stohovanie spracovaných dverí.', hu: 'A TMP ajtómanipulátor automatizálja a CNC-gépek adagolását és a megmunkált ajtók rakodását.' },
    highlights: ['Automates CNC machine feeding and door stacking in one system', 'Fast and compact design for space-efficient production lines', 'Reduces physical operator workload significantly', 'Increases productivity in door and window manufacturing'],
    specs: {
      de: { 'Zyklen': 'bis zu 6 Zyklen/min', 'Max. Traglast': '80 kg', 'Stapelhöhe': 'bis zu 1.800 mm', 'Bauhöhe': 'Gering', 'Greifer': 'Flächensauger für strukturierte Türoberflächen', 'Vakuumerzeugung': 'Via Ejektoren' },
      en: { 'Cycles': 'up to 6 cycles/min', 'Max. load capacity': '80 kg', 'Max. stacking height': 'up to 1,800 mm', 'Overall height': 'Low', 'Gripper': 'Surface suction cups for textured door surfaces', 'Vacuum generation': 'Via ejectors' },
      cz: { 'Cykly': 'až 6 cyklů/min', 'Max. nosnost': '80 kg', 'Výška stohování': 'až 1 800 mm', 'Celková výška': 'Nízká', 'Chapadlo': 'Plošné přísavky pro strukturované povrchy dveří', 'Tvorba vakua': 'Pomocí ejektorů' },
      sk: { 'Cykly': 'až 6 cyklov/min', 'Max. nosnosť': '80 kg', 'Výška stohovania': 'až 1 800 mm', 'Celková výška': 'Nízka', 'Chápadlo': 'Plošné prísavky pre štrukturované povrchy dverí', 'Tvorba vákua': 'Pomocou ejektorov' },
      hu: { 'Ciklusok': 'akár 6 ciklus/perc', 'Max. teherbírás': '80 kg', 'Rakodási magasság': 'akár 1 800 mm', 'Beépítési magasság': 'Alacsony', 'Megfogó': 'Felületi tapadókorongok strukturált ajtófelületekhez', 'Vákuumtermelés': 'Ejektorokkal' },
    },
    seoTitle: { de: 'Türenmanipulator TMP Barbaric – Händler CZ/SK/HU | Asamer', en: 'Door Manipulator TMP Barbaric – dealer CZ/SK/HU | Asamer', cz: 'Manipulátor dveří TMP Barbaric – koupit přes Asamer', sk: 'Manipulátor dverí TMP Barbaric – kúpiť cez Asamer', hu: 'Ajtómanipulátor TMP Barbaric – Asamer viszonteladó' },
    seoDescription: { de: 'TMP – Türenmanipulator für CNC-Beschickung und Stapelung. Schnell und kompakt. Asamer: autorisierter Barbaric-Händler für CZ, SK & HU.', en: 'TMP – door manipulator for CNC feeding and stacking. Fast and compact. Asamer: authorized Barbaric dealer for CZ, SK & HU.', cz: 'TMP – manipulátor dveří pro podávání CNC a stohování. Rychlý a kompaktní. Asamer: prodejce Barbaric CZ, SK a HU.', sk: 'TMP – manipulátor dverí pre podávanie CNC a stohovanie. Rýchly a kompaktný. Asamer: predajca Barbaric CZ, SK a HU.', hu: 'TMP – ajtómanipulátor CNC adagoláshoz és rakodáshoz. Gyors és kompakt. Asamer: hivatalos Barbaric viszonteladó CZ, SK és HU.' },
  },

  /* ==================== LABELING ==================== */
  {
    slug: 'lps',
    name: 'LPS',
    category: 'labeling',
    image: '/images/barbaric/lps.jpg',
    tagline: { de: 'Etikettierung von Platten vor dem Zuschnitt', en: 'Panel labeling before cutting', cz: 'Štítkování desek před řezáním', sk: 'Štítkovanie dosiek pred rezaním', hu: 'Lapok címkézése vágás előtt' },
    description: { de: 'Der LPS Labeling Printer etikettiert Platten automatisch vor dem Zuschnitt – als Ergänzung zum Flächenlager. Jede Platte erhält ihre Identifikation für die lückenlose Nachverfolgung im Produktionsprozess.', en: 'The LPS Labeling Printer automatically labels panels before cutting – as a complement to the panel storage system. Each panel receives its identification for seamless traceability throughout the production process.', cz: 'LPS tiskárna štítků automaticky štítkuje desky před řezáním – jako doplněk ke skladu desek. Každá deska dostane svou identifikaci pro bezchybnou sledovatelnost ve výrobním procesu.', sk: 'LPS tlačiareň štítkov automaticky štítkuje dosky pred rezaním.', hu: 'Az LPS címkenyomtató automatikusan felcímkézi a lapokat vágás előtt – a lapraktározó rendszer kiegészítéseként.' },
    highlights: ['Labels each panel before cutting — no manual labelling needed', 'Seamless traceability throughout the production process', 'Optimal extension for CSF storage and LCV feeding systems', 'Eliminates part identification errors after cutting'],
    specs: {
      de: { 'Max. Zyklen': '10 Zyklen/min', 'Plattengröße min.': '2.000 × 600 mm', 'Plattengröße max.': '5.600 × 2.100 mm (modellabhängig)', 'Applikationsgenauigkeit': '±1 mm', 'Standard-Etikett': '98 × 55 mm', 'Max. Druckbreite': '104 mm', 'Achsensteuerung': 'Frequenzumrichter', 'Dateiformate': 'JPG, BMP', 'Schnittstelle': 'Standard zu Zuschnittplan-/Nesting-Software' },
      en: { 'Max. cycles': '10 cycles/min', 'Min. panel size': '2,000 × 600 mm', 'Max. panel size': '5,600 × 2,100 mm (model-dependent)', 'Application accuracy': '±1 mm', 'Standard label': '98 × 55 mm', 'Max. print width': '104 mm', 'Axis control': 'Frequency inverter', 'File formats': 'JPG, BMP', 'Interface': 'Standard to cutting plan / nesting software' },
      cz: { 'Max. cykly': '10 cyklů/min', 'Velikost desky min.': '2 000 × 600 mm', 'Velikost desky max.': '5 600 × 2 100 mm (závisí na modelu)', 'Přesnost aplikace': '±1 mm', 'Standardní štítek': '98 × 55 mm', 'Max. šířka tisku': '104 mm', 'Řízení os': 'Frekvenční měnič', 'Formáty souborů': 'JPG, BMP', 'Rozhraní': 'Standard k softwaru nářezového plánu / nestingu' },
      sk: { 'Max. cykly': '10 cyklov/min', 'Veľkosť dosky min.': '2 000 × 600 mm', 'Veľkosť dosky max.': '5 600 × 2 100 mm (závisí od modelu)', 'Presnosť aplikácie': '±1 mm', 'Štandardný štítok': '98 × 55 mm', 'Max. šírka tlače': '104 mm', 'Riadenie osí': 'Frekvenčný menič', 'Formáty súborov': 'JPG, BMP', 'Rozhranie': 'Štandard k softvéru nározového plánu / nestingu' },
      hu: { 'Max. ciklusok': '10 ciklus/perc', 'Lapméret min.': '2 000 × 600 mm', 'Lapméret max.': '5 600 × 2 100 mm (modellfüggő)', 'Applikációs pontosság': '±1 mm', 'Standard címke': '98 × 55 mm', 'Max. nyomtatási szélesség': '104 mm', 'Tengelyvezérlés': 'Frekvenciaváltó', 'Fájlformátumok': 'JPG, BMP', 'Interfész': 'Standard szabási terv / nesting szoftverhez' },
    },
    seoTitle: { de: 'Labeling Printer LPS Barbaric – Händler CZ/SK/HU | Asamer', en: 'Labeling Printer LPS Barbaric – dealer CZ/SK/HU | Asamer', cz: 'Tiskárna štítků LPS Barbaric – koupit přes Asamer', sk: 'Tlačiareň štítkov LPS Barbaric – kúpiť cez Asamer', hu: 'Címkenyomtató LPS Barbaric – Asamer viszonteladó' },
    seoDescription: { de: 'LPS – Labeling Printer für Platten-Etikettierung vor dem Zuschnitt. Lückenlose Nachverfolgung. Asamer: Barbaric-Händler CZ, SK & HU.', en: 'LPS – labeling printer for panel identification before cutting. Full traceability. Asamer: Barbaric dealer CZ, SK & HU.', cz: 'LPS – tiskárna štítků pro identifikaci desek před řezáním. Plná sledovatelnost. Asamer: prodejce Barbaric CZ, SK a HU.', sk: 'LPS – tlačiareň štítkov pre identifikáciu dosiek pred rezaním. Plná sledovateľnosť. Asamer: predajca Barbaric CZ, SK a HU.', hu: 'LPS – címkenyomtató lapok azonosításához vágás előtt. Teljes nyomonkövetés. Asamer: Barbaric viszonteladó CZ, SK és HU.' },
  },

  /* ==================== VACUUM LIFTERS (UniWood) ==================== */
  {
    slug: 'uwl-3',
    name: 'UniWood UWL 3',
    category: 'vacuum-lifters',
    image: '/images/barbaric/uwl-3.png',
    tagline: { de: 'Standardheber mit 90°-Kippwerk – universell für Platten', en: 'Standard lifter with 90° tipping – universal for panels', cz: 'Standardní zvedák s 90° sklápěním – univerzální pro desky', sk: 'Štandardný zdvihák s 90° sklápaním – univerzálny pre dosky', hu: 'Standard emelő 90°-os billentéssel – univerzális lapokhoz' },
    description: {
      de: 'Der UniWood UWL 3 ist der Standard-Vakuumheber für das manuelle Holzhandling. Mit seinem 90°-Kippwerk manipuliert er Platten sowohl stehend als auch liegend und deckt alle gängigen Holzwerkstoffe ab – von beschichteten Platten bis zu leicht strukturierten Oberflächen.',
      en: 'The UniWood UWL 3 is the standard vacuum lifter for manual wood handling. Its 90° tipping mechanism manipulates panels both vertically and horizontally and covers all common wood-based materials – from coated panels to slightly textured surfaces.',
      cz: 'UniWood UWL 3 je standardní vakuový zvedák pro manuální manipulaci se dřevem. Sklápěcí mechanismus 90° umožňuje manipulaci s deskami ve svislé i vodorovné poloze a pokrývá všechny běžné dřevěné materiály.',
      sk: 'UniWood UWL 3 je štandardný vákuový zdvihák pre manuálnu manipuláciu s drevom. Sklápací mechanizmus 90° umožňuje manipuláciu s doskami vo zvislej aj vodorovnej polohe.',
      hu: 'A UniWood UWL 3 a kézi fakezelés standard vákuumemelője. 90°-os billentő mechanizmusa lehetővé teszi a lapok függőleges és vízszintes kezelését, minden gyakori faalapú anyaghoz.',
    },
    specs: {
      de: { 'Tragkraft': '250 kg', 'Hubgeschwindigkeit': '0–10 m/min stufenlos', 'Kippwerk': '90°', 'Luftverbrauch': '11 Nl/s', 'Kettenlänge nutzbar': '3,5 m', 'Eigengewicht': '~85 kg' },
      en: { 'Load capacity': '250 kg', 'Lifting speed': '0–10 m/min stepless', 'Tipping mechanism': '90°', 'Air consumption': '11 Nl/s', 'Usable chain length': '3.5 m', 'Own weight': '~85 kg' },
      cz: { 'Nosnost': '250 kg', 'Rychlost zdvihu': '0–10 m/min plynule', 'Sklápěcí mechanismus': '90°', 'Spotřeba vzduchu': '11 Nl/s', 'Využitelná délka řetězu': '3,5 m', 'Vlastní hmotnost': '~85 kg' },
      sk: { 'Nosnosť': '250 kg', 'Rýchlosť zdvihu': '0–10 m/min plynule', 'Sklápací mechanizmus': '90°', 'Spotreba vzduchu': '11 Nl/s', 'Využiteľná dĺžka reťaze': '3,5 m', 'Vlastná hmotnosť': '~85 kg' },
      hu: { 'Teherbírás': '250 kg', 'Emelési sebesség': '0–10 m/min fokozatmentes', 'Billentő mechanizmus': '90°', 'Levegőfogyasztás': '11 Nl/s', 'Használható lánchossz': '3,5 m', 'Önsúly': '~85 kg' },
    },
    highlights: ['90° tipping — panels vertical or horizontal', 'Ergonomic adjustable operating handle', 'Low structural height', 'Single-hand operation via special grip', 'Stepless lifting up to 10 m/min'],
    seoTitle: { de: 'UniWood UWL 3 Vakuumheber Barbaric – Händler CZ/SK/HU | Asamer', en: 'UniWood UWL 3 Vacuum Lifter Barbaric – dealer CZ/SK/HU | Asamer', cz: 'UniWood UWL 3 vakuový zvedák Barbaric – prodejce | Asamer', sk: 'UniWood UWL 3 vákuový zdvihák Barbaric – predajca | Asamer', hu: 'UniWood UWL 3 vákuumemelő Barbaric – viszonteladó | Asamer' },
    seoDescription: { de: 'UniWood UWL 3 – Standard-Vakuumheber mit 90°-Kippwerk, bis 250 kg. Asamer: autorisierter Barbaric-Händler für CZ, SK & HU.', en: 'UniWood UWL 3 – standard vacuum lifter with 90° tipping, up to 250 kg. Asamer: authorised Barbaric dealer for CZ, SK & HU.', cz: 'UniWood UWL 3 – standardní vakuový zvedák s 90° sklápěním, do 250 kg. Asamer: autorizovaný prodejce Barbaric.', sk: 'UniWood UWL 3 – štandardný vákuový zdvihák s 90° sklápaním, do 250 kg. Asamer: autorizovaný predajca Barbaric.', hu: 'UniWood UWL 3 – standard vákuumemelő 90°-os billentéssel, 250 kg-ig. Asamer: hivatalos Barbaric viszonteladó.' },
  },
  {
    slug: 'uwl-3j',
    name: 'UniWood UWL 3J',
    category: 'vacuum-lifters',
    image: '/images/barbaric/uwl-3j.png',
    tagline: { de: 'Großformatplatten bis 300 kg (optional 500 kg)', en: 'Large-format panels up to 300 kg (optional 500 kg)', cz: 'Velkoformátové desky do 300 kg (volitelně 500 kg)', sk: 'Veľkoformátové dosky do 300 kg (voliteľne 500 kg)', hu: 'Nagyformátumú lapok 300 kg-ig (opcionálisan 500 kg)' },
    description: {
      de: 'Der UniWood UWL 3J handhabt Großformatplatten mit pneumatischem Kippzylinder für vertikalen und horizontalen Transport. Die individuell einstellbare Traverse passt sich flexibel an unterschiedliche Plattenformate an.',
      en: 'The UniWood UWL 3J handles large-format panels with a pneumatic tipping cylinder for vertical and horizontal transport. The individually adjustable traverse flexibly adapts to different panel formats.',
      cz: 'UniWood UWL 3J manipuluje s velkoformátovými deskami pomocí pneumatického sklápěcího válce pro svislou i vodorovnou přepravu. Individuálně nastavitelná traverza se flexibilně přizpůsobí různým formátům desek.',
      sk: 'UniWood UWL 3J manipuluje s veľkoformátovými doskami pomocou pneumatického sklápacieho valca pre zvislú aj vodorovnú prepravu.',
      hu: 'A UniWood UWL 3J nagyformátumú lapokat kezel pneumatikus billentőhengerrel, függőleges és vízszintes szállításhoz.',
    },
    specs: {
      de: { 'Tragkraft': '300 kg (optional 500 kg)', 'Hubgeschwindigkeit': '0–10 m/min', 'Kippwerk': '0–90° pneumatisch, ~5 s', 'Luftverbrauch': '11 Nl/s', 'Kettenlänge nutzbar': '3,5 m', 'Eigengewicht': '~85 kg' },
      en: { 'Load capacity': '300 kg (optional 500 kg)', 'Lifting speed': '0–10 m/min', 'Tipping mechanism': '0–90° pneumatic, ~5 s', 'Air consumption': '11 Nl/s', 'Usable chain length': '3.5 m', 'Own weight': '~85 kg' },
      cz: { 'Nosnost': '300 kg (volitelně 500 kg)', 'Rychlost zdvihu': '0–10 m/min', 'Sklápěcí mechanismus': '0–90° pneumaticky, ~5 s', 'Spotřeba vzduchu': '11 Nl/s', 'Využitelná délka řetězu': '3,5 m', 'Vlastní hmotnost': '~85 kg' },
      sk: { 'Nosnosť': '300 kg (voliteľne 500 kg)', 'Rýchlosť zdvihu': '0–10 m/min', 'Sklápací mechanizmus': '0–90° pneumaticky, ~5 s', 'Spotreba vzduchu': '11 Nl/s', 'Využiteľná dĺžka reťaze': '3,5 m', 'Vlastná hmotnosť': '~85 kg' },
      hu: { 'Teherbírás': '300 kg (opcionálisan 500 kg)', 'Emelési sebesség': '0–10 m/min', 'Billentő mechanizmus': '0–90° pneumatikus, ~5 s', 'Levegőfogyasztás': '11 Nl/s', 'Használható lánchossz': '3,5 m', 'Önsúly': '~85 kg' },
    },
    highlights: ['Pneumatic tipping cylinder 0–90° (~5 s)', 'Individually adjustable traverse', 'Up to 500 kg capacity option', 'Large-format panel handling', 'Ergonomic single-operator design'],
    seoTitle: { de: 'UniWood UWL 3J Vakuumheber Barbaric – Händler CZ/SK/HU | Asamer', en: 'UniWood UWL 3J Vacuum Lifter Barbaric – dealer CZ/SK/HU | Asamer', cz: 'UniWood UWL 3J vakuový zvedák Barbaric – prodejce | Asamer', sk: 'UniWood UWL 3J vákuový zdvihák Barbaric – predajca | Asamer', hu: 'UniWood UWL 3J vákuumemelő Barbaric – viszonteladó | Asamer' },
    seoDescription: { de: 'UniWood UWL 3J – Vakuumheber für Großformatplatten bis 300 kg (optional 500 kg), pneumatisches Kippwerk. Asamer: Barbaric-Händler CZ/SK/HU.', en: 'UniWood UWL 3J – vacuum lifter for large-format panels up to 300 kg (optional 500 kg), pneumatic tipping. Asamer: Barbaric dealer CZ/SK/HU.', cz: 'UniWood UWL 3J – vakuový zvedák pro velkoformátové desky do 300 kg, pneumatické sklápění. Asamer: prodejce Barbaric.', sk: 'UniWood UWL 3J – vákuový zdvihák pre veľkoformátové dosky do 300 kg, pneumatické sklápanie. Asamer: predajca Barbaric.', hu: 'UniWood UWL 3J – vákuumemelő nagyformátumú lapokhoz 300 kg-ig, pneumatikus billentés. Asamer: Barbaric viszonteladó.' },
  },
  {
    slug: 'uwl-3s',
    name: 'UniWood UWL 3S',
    category: 'vacuum-lifters',
    image: '/images/barbaric/uwl-3s.png',
    tagline: { de: 'Einzelsauger für Kantenanleimmaschinen – bis 150 kg', en: 'Single suction cup for edge-banding machines – up to 150 kg', cz: 'Jedna přísavka pro olepovačky hran – do 150 kg', sk: 'Jedna prísavka pre olepovačky hrán – do 150 kg', hu: 'Egy szívócsésze élzárógépekhez – 150 kg-ig' },
    description: {
      de: 'Der UniWood UWL 3S ist die perfekte Ergänzung zum Manipulieren von Platten an der Kantenanleimmaschine. Das Einzelsauger-Design erlaubt flexibles Handling variabler Plattengrößen mit 90°-Kippwerk.',
      en: 'The UniWood UWL 3S is the perfect complement for handling panels at the edge-banding machine. The single-suction design allows flexible handling of varied panel sizes with 90° tipping.',
      cz: 'UniWood UWL 3S je ideálním doplňkem pro manipulaci s deskami na olepovačce hran. Konstrukce s jednou přísavkou umožňuje flexibilní manipulaci s různými velikostmi desek se 90° sklápěním.',
      sk: 'UniWood UWL 3S je ideálnym doplnkom pre manipuláciu s doskami na olepovačke hrán. Konštrukcia s jednou prísavkou umožňuje flexibilnú manipuláciu.',
      hu: 'A UniWood UWL 3S tökéletes kiegészítő a lapok kezeléséhez az élzárógépnél. Az egyszívócsészés kialakítás rugalmas kezelést tesz lehetővé 90°-os billentéssel.',
    },
    specs: {
      de: { 'Tragkraft': '150 kg', 'Hubgeschwindigkeit': '0–10 m/min', 'Kippwerk': '90°', 'Saugerbauart': 'Einzelsauger', 'Einsatzbereich': 'Kantenanleimmaschine, Plattenaufteilsäge' },
      en: { 'Load capacity': '150 kg', 'Lifting speed': '0–10 m/min', 'Tipping mechanism': '90°', 'Suction design': 'Single suction cup', 'Application': 'Edge-banding machine, panel saw' },
      cz: { 'Nosnost': '150 kg', 'Rychlost zdvihu': '0–10 m/min', 'Sklápěcí mechanismus': '90°', 'Konstrukce přísavky': 'Jedna přísavka', 'Použití': 'Olepovačka hran, formátovací pila' },
      sk: { 'Nosnosť': '150 kg', 'Rýchlosť zdvihu': '0–10 m/min', 'Sklápací mechanizmus': '90°', 'Konštrukcia prísavky': 'Jedna prísavka', 'Použitie': 'Olepovačka hrán, formátovacia píla' },
      hu: { 'Teherbírás': '150 kg', 'Emelési sebesség': '0–10 m/min', 'Billentő mechanizmus': '90°', 'Szívócsésze': 'Egy szívócsésze', 'Alkalmazás': 'Élzárógép, formátlapozó fűrész' },
    },
    highlights: ['Ideal for edge-banding machines', 'Single suction cup — flexible panel sizes', '90° tipping', 'Compact single-operator design', 'Stepless lifting'],
    seoTitle: { de: 'UniWood UWL 3S Vakuumheber Kantenanleimmaschine – Barbaric | Asamer', en: 'UniWood UWL 3S Vacuum Lifter Edge-Bander Barbaric – dealer | Asamer', cz: 'UniWood UWL 3S vakuový zvedák olepovačka – Barbaric | Asamer', sk: 'UniWood UWL 3S vákuový zdvihák olepovačka – Barbaric | Asamer', hu: 'UniWood UWL 3S vákuumemelő élzárógép – Barbaric | Asamer' },
    seoDescription: { de: 'UniWood UWL 3S – Vakuumheber mit Einzelsauger für Kantenanleimmaschinen, bis 150 kg. Asamer: Barbaric-Händler CZ/SK/HU.', en: 'UniWood UWL 3S – vacuum lifter with single suction cup for edge-banding machines, up to 150 kg. Asamer: Barbaric dealer.', cz: 'UniWood UWL 3S – vakuový zvedák s jednou přísavkou pro olepovačky hran, do 150 kg. Asamer: prodejce Barbaric.', sk: 'UniWood UWL 3S – vákuový zdvihák s jednou prísavkou pre olepovačky hrán, do 150 kg. Asamer: predajca Barbaric.', hu: 'UniWood UWL 3S – vákuumemelő egy szívócsészével élzárógépekhez, 150 kg-ig. Asamer: Barbaric viszonteladó.' },
  },
  {
    slug: 'uwl-1',
    name: 'UniWood UWL 1',
    category: 'vacuum-lifters',
    image: '/images/barbaric/uwl-1.png',
    tagline: { de: 'Standardheber fürs Holzhandling – ohne Kippfunktion', en: 'Standard lifter for wood handling – without tipping', cz: 'Standardní zvedák pro manipulaci se dřevem – bez sklápění', sk: 'Štandardný zdvihák pre manipuláciu s drevom – bez sklápania', hu: 'Standard emelő fakezeléshez – billentés nélkül' },
    description: {
      de: 'Der UniWood UWL 1 ist der Standardheber für das universelle Holzhandling ohne Kippfunktion. Für horizontale Plattenmanipulation bei allen gängigen handelsüblichen Holzwerkstoffen.',
      en: 'The UniWood UWL 1 is the standard lifter for universal wood handling without tipping function. For horizontal panel manipulation on all common commercial wood-based materials.',
      cz: 'UniWood UWL 1 je standardní zvedák pro univerzální manipulaci se dřevem bez sklápěcí funkce. Pro vodorovnou manipulaci s deskami u všech běžných dřevěných materiálů.',
      sk: 'UniWood UWL 1 je štandardný zdvihák pre univerzálnu manipuláciu s drevom bez sklápacej funkcie.',
      hu: 'A UniWood UWL 1 standard emelő univerzális fakezeléshez billentő funkció nélkül. Vízszintes lapkezeléshez minden gyakori faalapú anyagnál.',
    },
    specs: {
      de: { 'Tragkraft': '250 kg', 'Hubgeschwindigkeit': '0–10 m/min', 'Kippwerk': 'nein', 'Bauhöhe': 'kompakt', 'Bedienung': 'verstellbarer Griff' },
      en: { 'Load capacity': '250 kg', 'Lifting speed': '0–10 m/min', 'Tipping mechanism': 'none', 'Structural height': 'compact', 'Operation': 'adjustable handle' },
      cz: { 'Nosnost': '250 kg', 'Rychlost zdvihu': '0–10 m/min', 'Sklápěcí mechanismus': 'ne', 'Konstrukční výška': 'kompaktní', 'Obsluha': 'nastavitelná rukojeť' },
      sk: { 'Nosnosť': '250 kg', 'Rýchlosť zdvihu': '0–10 m/min', 'Sklápací mechanizmus': 'nie', 'Konštrukčná výška': 'kompaktná', 'Obsluha': 'nastaviteľná rukoväť' },
      hu: { 'Teherbírás': '250 kg', 'Emelési sebesség': '0–10 m/min', 'Billentő mechanizmus': 'nincs', 'Szerkezeti magasság': 'kompakt', 'Kezelés': 'állítható fogantyú' },
    },
    highlights: ['Standard wood handling, no tipping', 'Up to 250 kg capacity', 'Compact low-profile design', 'Adjustable operating handle', 'Universal for all commercial wood panels'],
    seoTitle: { de: 'UniWood UWL 1 Vakuumheber Barbaric – Händler CZ/SK/HU | Asamer', en: 'UniWood UWL 1 Vacuum Lifter Barbaric – dealer CZ/SK/HU | Asamer', cz: 'UniWood UWL 1 vakuový zvedák Barbaric – prodejce | Asamer', sk: 'UniWood UWL 1 vákuový zdvihák Barbaric – predajca | Asamer', hu: 'UniWood UWL 1 vákuumemelő Barbaric – viszonteladó | Asamer' },
    seoDescription: { de: 'UniWood UWL 1 – Standard-Vakuumheber ohne Kippwerk, bis 250 kg. Asamer: autorisierter Barbaric-Händler für CZ, SK & HU.', en: 'UniWood UWL 1 – standard vacuum lifter without tipping, up to 250 kg. Asamer: authorised Barbaric dealer for CZ, SK & HU.', cz: 'UniWood UWL 1 – standardní vakuový zvedák bez sklápění, do 250 kg. Asamer: autorizovaný prodejce Barbaric.', sk: 'UniWood UWL 1 – štandardný vákuový zdvihák bez sklápania, do 250 kg. Asamer: autorizovaný predajca Barbaric.', hu: 'UniWood UWL 1 – standard vákuumemelő billentés nélkül, 250 kg-ig. Asamer: hivatalos Barbaric viszonteladó.' },
  },
  {
    slug: 'uwl-1s',
    name: 'UniWood UWL 1S',
    category: 'vacuum-lifters',
    image: '/images/barbaric/uwl-1s.png',
    tagline: { de: 'Kompakter Einzelsauger ohne Kippwerk', en: 'Compact single suction cup without tipping', cz: 'Kompaktní jedna přísavka bez sklápění', sk: 'Kompaktná jedna prísavka bez sklápania', hu: 'Kompakt egy szívócsésze billentés nélkül' },
    description: {
      de: 'Der UniWood UWL 1S ist die kompakte Einzelsauger-Variante ohne Kippwerk, ideal für Kantenanleimmaschinen und stehende Plattensägen. Schlank, leicht und einfach zu bedienen.',
      en: 'The UniWood UWL 1S is the compact single-suction variant without tipping mechanism, ideal for edge-banding machines and vertical panel saws. Slim, lightweight and simple to operate.',
      cz: 'UniWood UWL 1S je kompaktní varianta s jednou přísavkou bez sklápění, ideální pro olepovačky hran a stojící formátovací pily. Štíhlý, lehký a jednoduchý na obsluhu.',
      sk: 'UniWood UWL 1S je kompaktná varianta s jednou prísavkou bez sklápania, ideálna pre olepovačky hrán a stojace formátovacie píly.',
      hu: 'A UniWood UWL 1S kompakt egyszívócsészés változat billentő mechanizmus nélkül, ideális élzárógépekhez és álló lapfűrészekhez.',
    },
    specs: {
      de: { 'Tragkraft': '150 kg', 'Hubgeschwindigkeit': '0–10 m/min', 'Saugerbauart': 'Einzelsauger', 'Kippwerk': 'nein', 'Einsatzbereich': 'Kantenanleimmaschine, stehende Plattensäge' },
      en: { 'Load capacity': '150 kg', 'Lifting speed': '0–10 m/min', 'Suction design': 'Single suction cup', 'Tipping mechanism': 'none', 'Application': 'Edge-bander, vertical panel saw' },
      cz: { 'Nosnost': '150 kg', 'Rychlost zdvihu': '0–10 m/min', 'Konstrukce přísavky': 'Jedna přísavka', 'Sklápěcí mechanismus': 'ne', 'Použití': 'Olepovačka hran, svislá pila' },
      sk: { 'Nosnosť': '150 kg', 'Rýchlosť zdvihu': '0–10 m/min', 'Konštrukcia prísavky': 'Jedna prísavka', 'Sklápací mechanizmus': 'nie', 'Použitie': 'Olepovačka hrán, zvislá píla' },
      hu: { 'Teherbírás': '150 kg', 'Emelési sebesség': '0–10 m/min', 'Szívócsésze': 'Egy szívócsésze', 'Billentő mechanizmus': 'nincs', 'Alkalmazás': 'Élzárógép, álló lapfűrész' },
    },
    highlights: ['Compact single-suction design', 'Low weight', 'Simple one-hand operation', 'Ideal for edge-banders and vertical saws', 'Up to 150 kg capacity'],
    seoTitle: { de: 'UniWood UWL 1S Vakuumheber Barbaric – Händler CZ/SK/HU | Asamer', en: 'UniWood UWL 1S Vacuum Lifter Barbaric – dealer CZ/SK/HU | Asamer', cz: 'UniWood UWL 1S vakuový zvedák Barbaric – prodejce | Asamer', sk: 'UniWood UWL 1S vákuový zdvihák Barbaric – predajca | Asamer', hu: 'UniWood UWL 1S vákuumemelő Barbaric – viszonteladó | Asamer' },
    seoDescription: { de: 'UniWood UWL 1S – kompakter Einzelsauger-Vakuumheber ohne Kippwerk, bis 150 kg. Asamer: Barbaric-Händler CZ/SK/HU.', en: 'UniWood UWL 1S – compact single-suction vacuum lifter without tipping, up to 150 kg. Asamer: Barbaric dealer CZ/SK/HU.', cz: 'UniWood UWL 1S – kompaktní vakuový zvedák s jednou přísavkou bez sklápění, do 150 kg. Asamer: prodejce Barbaric.', sk: 'UniWood UWL 1S – kompaktný vákuový zdvihák s jednou prísavkou bez sklápania, do 150 kg. Asamer: predajca Barbaric.', hu: 'UniWood UWL 1S – kompakt egyszívócsészés vákuumemelő billentés nélkül, 150 kg-ig. Asamer: Barbaric viszonteladó.' },
  },

  /* ==================== VACUUM SPECIAL LIFTERS ==================== */
  {
    slug: 'uwl-5',
    name: 'UniWood UWL 5',
    category: 'vacuum-special',
    image: '/images/barbaric/uwl-5.png',
    tagline: { de: 'Spezialheber für Türblätter mit 180°-Kippwerk', en: 'Special lifter for door leaves with 180° tipping', cz: 'Speciální zvedák pro dveřní křídla s 180° sklápěním', sk: 'Špeciálny zdvihák pre dverné krídla s 180° sklápaním', hu: 'Speciális emelő ajtólapokhoz 180°-os billentéssel' },
    description: {
      de: 'Der UniWood UWL 5 ist ein Spezialhebegerät mit schmalem Grundkörper für den vertikalen und horizontalen Transport von Türblättern. Das 180°-Kippwerk ermöglicht die Umdrehung der Türblätter in beiden Richtungen.',
      en: 'The UniWood UWL 5 is a special lifting device with a slim base body for vertical and horizontal transport of door leaves. The 180° tipping mechanism allows rotation of door leaves in both directions.',
      cz: 'UniWood UWL 5 je speciální zvedací zařízení s úzkým základním tělesem pro svislou a vodorovnou přepravu dveřních křídel. Sklápěcí mechanismus 180° umožňuje otáčení dveřních křídel v obou směrech.',
      sk: 'UniWood UWL 5 je špeciálne zdvíhacie zariadenie s úzkym základným telesom pre zvislú a vodorovnú prepravu dverných krídel.',
      hu: 'A UniWood UWL 5 speciális emelőeszköz keskeny alaptesttel, ajtólapok függőleges és vízszintes szállításához. A 180°-os billentő mechanizmus lehetővé teszi az ajtólapok forgatását mindkét irányban.',
    },
    specs: {
      de: { 'Tragkraft': '220–250 kg', 'Hubgeschwindigkeit': '0–10 m/min', 'Kippwerk': '180° horizontal, ~6 s pro 90°', 'Saugnäpfe': '4× oder 6× 377×81 mm oval', 'Stromversorgung': '230 V / 50 Hz' },
      en: { 'Load capacity': '220–250 kg', 'Lifting speed': '0–10 m/min', 'Tipping mechanism': '180° horizontal, ~6 s per 90°', 'Suction cups': '4× or 6× 377×81 mm oval', 'Power supply': '230 V / 50 Hz' },
      cz: { 'Nosnost': '220–250 kg', 'Rychlost zdvihu': '0–10 m/min', 'Sklápěcí mechanismus': '180° horizontálně, ~6 s na 90°', 'Přísavky': '4× nebo 6× 377×81 mm oválné', 'Napájení': '230 V / 50 Hz' },
      sk: { 'Nosnosť': '220–250 kg', 'Rýchlosť zdvihu': '0–10 m/min', 'Sklápací mechanizmus': '180° horizontálne, ~6 s na 90°', 'Prísavky': '4× alebo 6× 377×81 mm oválne', 'Napájanie': '230 V / 50 Hz' },
      hu: { 'Teherbírás': '220–250 kg', 'Emelési sebesség': '0–10 m/min', 'Billentő mechanizmus': '180° vízszintes, ~6 s 90°-onként', 'Szívócsészék': '4× vagy 6× 377×81 mm ovális', 'Tápellátás': '230 V / 50 Hz' },
    },
    highlights: ['180° horizontal tipping — both directions', 'Slim base body for doors', '4 or 6 oval suction cups (377×81 mm)', 'Specialised for door leaf handling', 'Up to 250 kg capacity'],
    seoTitle: { de: 'UniWood UWL 5 Türblattheber Barbaric – Händler CZ/SK/HU | Asamer', en: 'UniWood UWL 5 Door-Leaf Lifter Barbaric – dealer CZ/SK/HU | Asamer', cz: 'UniWood UWL 5 zvedák dveřních křídel Barbaric – prodejce | Asamer', sk: 'UniWood UWL 5 zdvihák dverných krídel Barbaric – predajca | Asamer', hu: 'UniWood UWL 5 ajtólap-emelő Barbaric – viszonteladó | Asamer' },
    seoDescription: { de: 'UniWood UWL 5 – Spezialvakuumheber für Türblätter mit 180°-Kippwerk, bis 250 kg. Asamer: Barbaric-Händler CZ, SK & HU.', en: 'UniWood UWL 5 – special vacuum lifter for door leaves with 180° tipping, up to 250 kg. Asamer: Barbaric dealer CZ, SK & HU.', cz: 'UniWood UWL 5 – speciální vakuový zvedák pro dveřní křídla s 180° sklápěním, do 250 kg. Asamer: prodejce Barbaric.', sk: 'UniWood UWL 5 – špeciálny vákuový zdvihák pre dverné krídla s 180° sklápaním, do 250 kg. Asamer: predajca Barbaric.', hu: 'UniWood UWL 5 – speciális vákuumemelő ajtólapokhoz 180°-os billentéssel, 250 kg-ig. Asamer: Barbaric viszonteladó.' },
  },
  {
    slug: 'swl-griplifter',
    name: 'SWL gripLifter',
    category: 'vacuum-special',
    image: '/images/barbaric/swl-griplifter.png',
    tagline: { de: 'Einzigartiges Greifsystem für Rahmenwerkstücke', en: 'Unique gripping system for framed workpieces', cz: 'Jedinečný uchopovací systém pro rámové obrobky', sk: 'Jedinečný uchopovací systém pre rámové obrobky', hu: 'Egyedülálló megfogó rendszer keretes munkadarabokhoz' },
    description: {
      de: 'Der SWL gripLifter ist ein einzigartiges Greifsystem zum Handling von Werkstücken am Rahmen – speziell für Fenster, Türen und Rahmenkonstruktionen. Das klemmende Greifsystem stellt sicher, dass auch empfindliche Rahmenoberflächen schonend transportiert werden.',
      en: 'The SWL gripLifter is a unique gripping system for handling workpieces by their frame – specifically for windows, doors and frame constructions. The clamping gripper ensures that sensitive frame surfaces are transported gently.',
      cz: 'SWL gripLifter je jedinečný uchopovací systém pro manipulaci s obrobky za rám – speciálně pro okna, dveře a rámové konstrukce.',
      sk: 'SWL gripLifter je jedinečný uchopovací systém pre manipuláciu s obrobkami za rám – špeciálne pre okná, dvere a rámové konštrukcie.',
      hu: 'Az SWL gripLifter egyedülálló megfogó rendszer munkadarabok keret általi kezelésére – kifejezetten ablakokhoz, ajtókhoz és keretes szerkezetekhez.',
    },
    specs: {
      de: { 'Tragkraft': 'bis 500 kg', 'Spannbereich': '50–150 mm verstellbar', 'Hubgeschwindigkeit': 'stufenlos', 'Einsatzbereich': 'Fenster, Türen, Rahmenkonstruktionen' },
      en: { 'Load capacity': 'up to 500 kg', 'Clamp range': '50–150 mm adjustable', 'Lifting speed': 'stepless', 'Application': 'Windows, doors, frame constructions' },
      cz: { 'Nosnost': 'až 500 kg', 'Rozsah upnutí': '50–150 mm nastavitelný', 'Rychlost zdvihu': 'plynulá', 'Použití': 'Okna, dveře, rámové konstrukce' },
      sk: { 'Nosnosť': 'až 500 kg', 'Rozsah upnutia': '50–150 mm nastaviteľný', 'Rýchlosť zdvihu': 'plynulá', 'Použitie': 'Okná, dvere, rámové konštrukcie' },
      hu: { 'Teherbírás': '500 kg-ig', 'Befogási tartomány': '50–150 mm állítható', 'Emelési sebesség': 'fokozatmentes', 'Alkalmazás': 'Ablakok, ajtók, keretes szerkezetek' },
    },
    highlights: ['Unique clamping grip system', 'Up to 500 kg capacity', 'Adjustable clamp range 50–150 mm', 'Gentle on sensitive frame surfaces', 'Ideal for window and door production'],
    seoTitle: { de: 'SWL gripLifter Rahmenheber Barbaric – Händler CZ/SK/HU | Asamer', en: 'SWL gripLifter Frame Lifter Barbaric – dealer CZ/SK/HU | Asamer', cz: 'SWL gripLifter rámový zvedák Barbaric – prodejce | Asamer', sk: 'SWL gripLifter rámový zdvihák Barbaric – predajca | Asamer', hu: 'SWL gripLifter keretemelő Barbaric – viszonteladó | Asamer' },
    seoDescription: { de: 'SWL gripLifter – Rahmengreifer für Fenster & Türen, Spannbereich 50–150 mm, bis 500 kg. Asamer: Barbaric-Händler CZ/SK/HU.', en: 'SWL gripLifter – frame gripper for windows & doors, clamp range 50–150 mm, up to 500 kg. Asamer: Barbaric dealer CZ/SK/HU.', cz: 'SWL gripLifter – rámový uchopovač pro okna a dveře, rozsah upnutí 50–150 mm, do 500 kg. Asamer: prodejce Barbaric.', sk: 'SWL gripLifter – rámový uchopovač pre okná a dvere, rozsah upnutia 50–150 mm, do 500 kg. Asamer: predajca Barbaric.', hu: 'SWL gripLifter – keretes megfogó ablakokhoz és ajtókhoz, befogás 50–150 mm, 500 kg-ig. Asamer: Barbaric viszonteladó.' },
  },
  {
    slug: 'swl-planklifter',
    name: 'SWL plankLifter',
    category: 'vacuum-special',
    image: '/images/barbaric/swl-planklifter.jpg',
    tagline: { de: 'Schnittholzheber bis 1500 kg – Funkfernsteuerung optional', en: 'Sawn timber lifter up to 1500 kg – wireless remote optional', cz: 'Zvedák řeziva do 1500 kg – rádiové dálkové ovládání volitelně', sk: 'Zdvihák reziva do 1500 kg – rádiové diaľkové ovládanie voliteľne', hu: 'Fűrészáru emelő 1500 kg-ig – vezeték nélküli távirányítás opció' },
    description: {
      de: 'Der SWL plankLifter ist ein Spezialhebegerät für Schnittholz, getrocknete Bretter und Pfosten. Die Bedienung erfolgt durch einen einzigen Mitarbeiter über den integrierten Handgriff oder optional per Funkfernsteuerung.',
      en: 'The SWL plankLifter is a specialised lifting device for sawn timber, dried boards and posts. Operated by a single person via the integrated handle or optionally by wireless remote control.',
      cz: 'SWL plankLifter je speciální zvedací zařízení pro řezivo, sušené desky a sloupky. Obsluha jedním pracovníkem přes integrovanou rukojeť nebo volitelně rádiovým dálkovým ovládáním.',
      sk: 'SWL plankLifter je špeciálne zdvíhacie zariadenie pre rezivo, sušené dosky a stĺpiky. Obsluha jedným pracovníkom cez integrovanú rukoväť alebo voliteľne rádiovým diaľkovým ovládaním.',
      hu: 'Az SWL plankLifter speciális emelőeszköz fűrészáruhoz, szárított deszkákhoz és oszlopokhoz. Egy személy kezeli az integrált fogantyún vagy opcionálisan vezeték nélküli távirányítón keresztül.',
    },
    specs: {
      de: { 'Tragkraft': 'bis 1500 kg', 'Stromversorgung': '230 V / 50 Hz oder 400 V / 50 Hz (über Trafo)', 'Steuerung': 'Handgriff oder Funkfernsteuerung (optional)', 'Anzeige': 'Kontrollleuchten & Manometer', 'Option': '1000 kg mit Teleskopführung' },
      en: { 'Load capacity': 'up to 1500 kg', 'Power supply': '230 V / 50 Hz or 400 V / 50 Hz (via transformer)', 'Control': 'Handle or wireless remote (optional)', 'Display': 'Indicator lamps & manometer', 'Option': '1000 kg with telescopic guide' },
      cz: { 'Nosnost': 'až 1500 kg', 'Napájení': '230 V / 50 Hz nebo 400 V / 50 Hz (přes transformátor)', 'Ovládání': 'Rukojeť nebo rádiové dálkové ovládání (volitelně)', 'Indikace': 'Kontrolky a manometr', 'Opce': '1000 kg s teleskopickým vedením' },
      sk: { 'Nosnosť': 'až 1500 kg', 'Napájanie': '230 V / 50 Hz alebo 400 V / 50 Hz (cez transformátor)', 'Ovládanie': 'Rukoväť alebo rádiové diaľkové ovládanie', 'Indikácia': 'Kontrolky a manometer', 'Opcia': '1000 kg s teleskopickým vedením' },
      hu: { 'Teherbírás': '1500 kg-ig', 'Tápellátás': '230 V / 50 Hz vagy 400 V / 50 Hz (transzformátoron át)', 'Vezérlés': 'Fogantyú vagy vezeték nélküli távirányító', 'Kijelzés': 'Jelzőfények és manométer', 'Opció': '1000 kg teleszkópos vezetővel' },
    },
    highlights: ['Up to 1500 kg for lumber and posts', 'Single-operator control', 'Wireless remote option', 'Indicator lamps and manometer', 'Telescopic guide option at 1000 kg'],
    seoTitle: { de: 'SWL plankLifter Schnittholzheber Barbaric – Händler CZ/SK/HU | Asamer', en: 'SWL plankLifter Lumber Vacuum Lifter Barbaric – dealer CZ/SK/HU | Asamer', cz: 'SWL plankLifter zvedák řeziva Barbaric – prodejce | Asamer', sk: 'SWL plankLifter zdvihák reziva Barbaric – predajca | Asamer', hu: 'SWL plankLifter fűrészáru-emelő Barbaric – viszonteladó | Asamer' },
    seoDescription: { de: 'SWL plankLifter – Schnittholz-Vakuumheber bis 1500 kg mit Funkfernsteuerung. Asamer: Barbaric-Händler CZ, SK & HU.', en: 'SWL plankLifter – lumber vacuum lifter up to 1500 kg with wireless remote. Asamer: Barbaric dealer CZ, SK & HU.', cz: 'SWL plankLifter – vakuový zvedák řeziva do 1500 kg s rádiovým ovládáním. Asamer: prodejce Barbaric.', sk: 'SWL plankLifter – vákuový zdvihák reziva do 1500 kg s rádiovým ovládaním. Asamer: predajca Barbaric.', hu: 'SWL plankLifter – vákuumos fűrészáru-emelő 1500 kg-ig vezeték nélküli távirányítóval. Asamer: Barbaric viszonteladó.' },
  },
  {
    slug: 'ngr-needlegripper',
    name: 'NGR NeedleGripper',
    category: 'vacuum-special',
    image: '/images/barbaric/ngr-needlegripper.jpg',
    tagline: { de: 'Nadelgreifer für Holzfaser- & Leichtbaumaterialien', en: 'Needle gripper for wood-fibre & lightweight materials', cz: 'Jehlový uchopovač pro dřevovláknité a lehké materiály', sk: 'Ihlový uchopovač pre drevovláknité a ľahké materiály', hu: 'Tűs megfogó farost és könnyűszerkezetes anyagokhoz' },
    description: {
      de: 'Der NGR NeedleGripper kombiniert Nadelgreifer und Saugnäpfe für das Handling von Holzfaser-, Leichtbau- und Isolierstoffen. Ideal für luftdurchlässige Materialien, die mit klassischen Saugnäpfen nicht zuverlässig gehalten werden können.',
      en: 'The NGR NeedleGripper combines needle grippers and suction cups for handling wood-fibre, lightweight and insulation materials. Ideal for air-permeable materials that cannot be held reliably by traditional suction cups.',
      cz: 'NGR NeedleGripper kombinuje jehlové uchopovače a přísavky pro manipulaci s dřevovláknitými, lehkými a izolačními materiály. Ideální pro vzduchem propustné materiály.',
      sk: 'NGR NeedleGripper kombinuje ihlové uchopovače a prísavky pre manipuláciu s drevovláknitými, ľahkými a izolačnými materiálmi.',
      hu: 'Az NGR NeedleGripper tűs megfogókat és szívócsészéket kombinál farost, könnyűszerkezetes és szigetelőanyagok kezelésére. Ideális légáteresztő anyagokhoz.',
    },
    specs: {
      de: { 'Tragkraft Holzfaser': '65 kg', 'Tragkraft Holz': '100 kg', 'Greiferbauart': 'Nadelgreifer + Saugnäpfe', 'Rotation': '180° optional', 'Hubgeschwindigkeit': 'stufenlos' },
      en: { 'Load capacity fibre': '65 kg', 'Load capacity wood': '100 kg', 'Gripper design': 'Needle grippers + suction cups', 'Rotation': '180° optional', 'Lifting speed': 'stepless' },
      cz: { 'Nosnost vlákno': '65 kg', 'Nosnost dřevo': '100 kg', 'Konstrukce uchopovače': 'Jehly + přísavky', 'Rotace': '180° volitelně', 'Rychlost zdvihu': 'plynulá' },
      sk: { 'Nosnosť vlákno': '65 kg', 'Nosnosť drevo': '100 kg', 'Konštrukcia uchopovača': 'Ihly + prísavky', 'Rotácia': '180° voliteľne', 'Rýchlosť zdvihu': 'plynulá' },
      hu: { 'Teherbírás rost': '65 kg', 'Teherbírás fa': '100 kg', 'Megfogó kialakítása': 'Tűk + szívócsészék', 'Forgatás': '180° opcionálisan', 'Emelési sebesség': 'fokozatmentes' },
    },
    highlights: ['Needle + suction hybrid grip', 'Up to 100 kg on wood', 'Ideal for air-permeable wood fibres', 'Optional 180° rotation', 'Stepless lift control'],
    seoTitle: { de: 'NGR NeedleGripper Nadelgreifer Barbaric – Händler CZ/SK/HU | Asamer', en: 'NGR NeedleGripper Barbaric – dealer CZ/SK/HU | Asamer', cz: 'NGR NeedleGripper jehlový uchopovač Barbaric – prodejce | Asamer', sk: 'NGR NeedleGripper ihlový uchopovač Barbaric – predajca | Asamer', hu: 'NGR NeedleGripper tűs megfogó Barbaric – viszonteladó | Asamer' },
    seoDescription: { de: 'NGR NeedleGripper – Nadelgreifer für Holzfaser- und Leichtbaustoffe, bis 100 kg. Asamer: Barbaric-Händler CZ/SK/HU.', en: 'NGR NeedleGripper – needle gripper for wood-fibre and lightweight materials, up to 100 kg. Asamer: Barbaric dealer CZ/SK/HU.', cz: 'NGR NeedleGripper – jehlový uchopovač pro dřevovláknité a lehké materiály, do 100 kg. Asamer: prodejce Barbaric.', sk: 'NGR NeedleGripper – ihlový uchopovač pre drevovláknité a ľahké materiály, do 100 kg. Asamer: predajca Barbaric.', hu: 'NGR NeedleGripper – tűs megfogó farost és könnyűszerkezetes anyagokhoz, 100 kg-ig. Asamer: Barbaric viszonteladó.' },
  },
  {
    slug: 'rwl-racklifter',
    name: 'RWL rackLifter',
    category: 'vacuum-special',
    image: '/images/barbaric/rwl-racklifter.jpg',
    tagline: { de: 'Regal-Vakuumheber mit 360°-drehbarem Mast', en: 'Rack vacuum lifter with 360° rotating mast', cz: 'Regálový vakuový zvedák s 360° otočným stožárem', sk: 'Regálový vákuový zdvihák s 360° otočným stĺpom', hu: 'Polcemelő vákuum 360°-ban forgó oszloppal' },
    description: {
      de: 'Der RWL rackLifter dient dem Ein- und Auslagern von Platten im Regalbereich und dem Handling an der stehenden Plattensäge. Der 360° drehbare Mast mit Spannweiten bis 12 m und Höhen bis 8 m deckt großflächige Lagerbereiche ab.',
      en: 'The RWL rackLifter is used for rack storage and retrieval of panels and for handling at the vertical panel saw. The 360° rotating mast with spans up to 12 m and heights up to 8 m covers large-area storage zones.',
      cz: 'RWL rackLifter slouží k zaskladnění a vyskladnění desek v regálovém prostoru a k manipulaci na stojící formátovací pile. 360° otočný stožár s rozpětím až 12 m a výškou až 8 m.',
      sk: 'RWL rackLifter slúži na zaskladnenie a vyskladnenie dosiek v regálovom priestore a na manipuláciu na stojacej píle. 360° otočný stĺp s rozpätím až 12 m a výškou až 8 m.',
      hu: 'Az RWL rackLifter polcos tárolóhelyek be- és kitárolására szolgál lapokhoz, valamint álló lapfűrésznél való kezelésre. 360°-ban forgó oszlop 12 m-ig terjedő fesztávolsággal és 8 m magasságig.',
    },
    specs: {
      de: { 'Tragkraft': '100 kg (optional 250 kg)', 'Hubgeschwindigkeit': '0–10 m/min', 'Vakuumpumpe': 'elektrisch, 25 m³/h', 'Kippwerk': '90°', 'Drehung Mast': '360°', 'Spannweite': 'bis 12 m', 'Höhe': 'bis 8 m', 'Stromversorgung': '230 V / 50 Hz' },
      en: { 'Load capacity': '100 kg (optional 250 kg)', 'Lifting speed': '0–10 m/min', 'Vacuum pump': 'electric, 25 m³/h', 'Tipping': '90°', 'Mast rotation': '360°', 'Span': 'up to 12 m', 'Height': 'up to 8 m', 'Power supply': '230 V / 50 Hz' },
      cz: { 'Nosnost': '100 kg (volitelně 250 kg)', 'Rychlost zdvihu': '0–10 m/min', 'Vakuová pumpa': 'elektrická, 25 m³/h', 'Sklápění': '90°', 'Otočení stožáru': '360°', 'Rozpětí': 'až 12 m', 'Výška': 'až 8 m', 'Napájení': '230 V / 50 Hz' },
      sk: { 'Nosnosť': '100 kg (voliteľne 250 kg)', 'Rýchlosť zdvihu': '0–10 m/min', 'Vákuová pumpa': 'elektrická, 25 m³/h', 'Sklápanie': '90°', 'Otočenie stĺpa': '360°', 'Rozpätie': 'až 12 m', 'Výška': 'až 8 m', 'Napájanie': '230 V / 50 Hz' },
      hu: { 'Teherbírás': '100 kg (opcionálisan 250 kg)', 'Emelési sebesség': '0–10 m/min', 'Vákuumszivattyú': 'elektromos, 25 m³/h', 'Billentés': '90°', 'Oszlopforgatás': '360°', 'Fesztávolság': '12 m-ig', 'Magasság': '8 m-ig', 'Tápellátás': '230 V / 50 Hz' },
    },
    highlights: ['360° rotating mast', 'Span up to 12 m, height up to 8 m', 'Electric vacuum pump 25 m³/h', 'Ideal for panel rack storage', 'Optional 250 kg capacity'],
    seoTitle: { de: 'RWL rackLifter Regalheber Barbaric – Händler CZ/SK/HU | Asamer', en: 'RWL rackLifter Rack Vacuum Lifter Barbaric – dealer CZ/SK/HU | Asamer', cz: 'RWL rackLifter regálový zvedák Barbaric – prodejce | Asamer', sk: 'RWL rackLifter regálový zdvihák Barbaric – predajca | Asamer', hu: 'RWL rackLifter polcemelő Barbaric – viszonteladó | Asamer' },
    seoDescription: { de: 'RWL rackLifter – Regal-Vakuumheber mit 360°-Mast, Spannweite bis 12 m. Asamer: Barbaric-Händler CZ, SK & HU.', en: 'RWL rackLifter – rack vacuum lifter with 360° mast, span up to 12 m. Asamer: Barbaric dealer CZ, SK & HU.', cz: 'RWL rackLifter – regálový vakuový zvedák s 360° stožárem, rozpětí až 12 m. Asamer: prodejce Barbaric.', sk: 'RWL rackLifter – regálový vákuový zdvihák s 360° stĺpom, rozpätie až 12 m. Asamer: predajca Barbaric.', hu: 'RWL rackLifter – polcemelő 360°-ban forgó oszloppal, 12 m fesztávolságig. Asamer: Barbaric viszonteladó.' },
  },

  /* ==================== VACUUM TRAVERSES ==================== */
  {
    slug: 'duennplattentraverse',
    name: 'Dünnplattentraverse',
    category: 'vacuum-traverses',
    image: '/images/barbaric/duennplattentraverse.png',
    tagline: { de: 'Traverse für Dünnplatten – PVC, Aluminium, Melamin', en: 'Traverse for thin panels – PVC, aluminium, melamine', cz: 'Traverza pro tenké desky – PVC, hliník, melamin', sk: 'Traverza pre tenké dosky – PVC, hliník, melamín', hu: 'Keresztgerenda vékony lapokhoz – PVC, alumínium, melamin' },
    description: {
      de: 'Die Dünnplattentraverse mit 4 Saugnäpfen (Ø 270 mm) auf verstellbarer Traverse ist speziell für dichte Dünnplatten wie PVC, Aluminium, Metall und Melamin konzipiert. Nicht geeignet für MDF oder luftdurchlässige Spanplatten.',
      en: 'The thin-panel traverse with 4 suction cups (Ø 270 mm) on an adjustable cross-beam is specifically designed for dense thin panels such as PVC, aluminium, metal and melamine. Not suitable for MDF or air-permeable chipboard.',
      cz: 'Traverza pro tenké desky se 4 přísavkami (Ø 270 mm) na nastavitelné traverze je určena pro husté tenké desky jako PVC, hliník, kov a melamin. Nevhodná pro MDF nebo vzduchem propustné dřevotřísky.',
      sk: 'Traverza pre tenké dosky so 4 prísavkami (Ø 270 mm) na nastaviteľnej traverze je určená pre husté tenké dosky ako PVC, hliník, kov a melamín.',
      hu: 'A vékonylap-keresztgerenda 4 szívócsészével (Ø 270 mm) az állítható keresztgerendán kifejezetten sűrű vékony lapokhoz, például PVC-hez, alumíniumhoz, fémhez és melaminhoz készült.',
    },
    specs: {
      de: { 'Tragkraft': '150 kg', 'Traversengröße': '1500×800 mm', 'Saugnäpfe': '4× Ø 270 mm', 'Materialien': 'PVC, Aluminium, Metall, Melamin', 'Nicht geeignet': 'MDF, luftdurchlässige Spanplatten' },
      en: { 'Load capacity': '150 kg', 'Traverse size': '1500×800 mm', 'Suction cups': '4× Ø 270 mm', 'Materials': 'PVC, aluminium, metal, melamine', 'Not suitable': 'MDF, air-permeable chipboard' },
      cz: { 'Nosnost': '150 kg', 'Velikost traverzy': '1500×800 mm', 'Přísavky': '4× Ø 270 mm', 'Materiály': 'PVC, hliník, kov, melamin', 'Nevhodné': 'MDF, vzduchem propustné dřevotřísky' },
      sk: { 'Nosnosť': '150 kg', 'Veľkosť traverzy': '1500×800 mm', 'Prísavky': '4× Ø 270 mm', 'Materiály': 'PVC, hliník, kov, melamín', 'Nevhodné': 'MDF, vzduchom priepustné drevotriesky' },
      hu: { 'Teherbírás': '150 kg', 'Keresztgerenda mérete': '1500×800 mm', 'Szívócsészék': '4× Ø 270 mm', 'Anyagok': 'PVC, alumínium, fém, melamin', 'Nem alkalmas': 'MDF, légáteresztő forgácslap' },
    },
    highlights: ['4× Ø 270 mm suction cups', 'For dense thin panels', 'Adjustable traverse 1500×800 mm', 'Up to 150 kg', 'PVC / aluminium / metal / melamine'],
    seoTitle: { de: 'Dünnplattentraverse Barbaric – Händler CZ/SK/HU | Asamer', en: 'Thin-Panel Traverse Barbaric – dealer CZ/SK/HU | Asamer', cz: 'Traverza pro tenké desky Barbaric – prodejce | Asamer', sk: 'Traverza pre tenké dosky Barbaric – predajca | Asamer', hu: 'Vékonylap-keresztgerenda Barbaric – viszonteladó | Asamer' },
    seoDescription: { de: 'Dünnplattentraverse – 4 Saugnäpfe Ø 270 mm, 1500×800 mm, bis 150 kg. Asamer: Barbaric-Händler CZ/SK/HU.', en: 'Thin-panel traverse – 4 suction cups Ø 270 mm, 1500×800 mm, up to 150 kg. Asamer: Barbaric dealer CZ/SK/HU.', cz: 'Traverza pro tenké desky – 4 přísavky Ø 270 mm, 1500×800 mm, do 150 kg. Asamer: prodejce Barbaric.', sk: 'Traverza pre tenké dosky – 4 prísavky Ø 270 mm, 1500×800 mm, do 150 kg. Asamer: predajca Barbaric.', hu: 'Vékonylap-keresztgerenda – 4 szívócsésze Ø 270 mm, 1500×800 mm, 150 kg-ig. Asamer: Barbaric viszonteladó.' },
  },
  {
    slug: 'tuerentraverse',
    name: 'Türentraverse',
    category: 'vacuum-traverses',
    image: '/images/barbaric/tuerentraverse.png',
    tagline: { de: 'Traverse für Türen mit Glasausschnitten', en: 'Traverse for doors with glass cutouts', cz: 'Traverza pro dveře se skleněnými výřezy', sk: 'Traverza pre dvere so sklenenými výrezmi', hu: 'Keresztgerenda üvegkivágásos ajtókhoz' },
    description: {
      de: 'Die Türentraverse mit 4 ovalen Saugnäpfen (377×81 mm) ist speziell für das Handling von Türen mit Glasausschnitten ausgelegt. Die verstellbare Traverse passt sich an unterschiedliche Türformate an.',
      en: 'The door traverse with 4 oval suction cups (377×81 mm) is specifically designed for handling doors with glass cutouts. The adjustable cross-beam adapts to different door formats.',
      cz: 'Dveřní traverza se 4 oválnými přísavkami (377×81 mm) je určena pro manipulaci s dveřmi se skleněnými výřezy.',
      sk: 'Dverná traverza so 4 oválnymi prísavkami (377×81 mm) je určená na manipuláciu s dverami so sklenenými výrezmi.',
      hu: 'Az ajtó-keresztgerenda 4 ovális szívócsészével (377×81 mm) kifejezetten üvegkivágásos ajtók kezelésére készült.',
    },
    specs: {
      de: { 'Tragkraft': '150 kg', 'Traversengröße': '1500×1200 mm', 'Saugnäpfe': '4× oval 377×81 mm', 'Einsatzbereich': 'Türen mit Glasausschnitten' },
      en: { 'Load capacity': '150 kg', 'Traverse size': '1500×1200 mm', 'Suction cups': '4× oval 377×81 mm', 'Application': 'Doors with glass cutouts' },
      cz: { 'Nosnost': '150 kg', 'Velikost traverzy': '1500×1200 mm', 'Přísavky': '4× oválné 377×81 mm', 'Použití': 'Dveře se skleněnými výřezy' },
      sk: { 'Nosnosť': '150 kg', 'Veľkosť traverzy': '1500×1200 mm', 'Prísavky': '4× oválne 377×81 mm', 'Použitie': 'Dvere so sklenenými výrezmi' },
      hu: { 'Teherbírás': '150 kg', 'Keresztgerenda mérete': '1500×1200 mm', 'Szívócsészék': '4× ovális 377×81 mm', 'Alkalmazás': 'Üvegkivágásos ajtók' },
    },
    highlights: ['4× oval suction cups 377×81 mm', 'For doors with glass cutouts', 'Adjustable traverse 1500×1200 mm', 'Up to 150 kg', 'Flexible door-format handling'],
    seoTitle: { de: 'Türentraverse Barbaric – Händler CZ/SK/HU | Asamer', en: 'Door Traverse Barbaric – dealer CZ/SK/HU | Asamer', cz: 'Dveřní traverza Barbaric – prodejce | Asamer', sk: 'Dverná traverza Barbaric – predajca | Asamer', hu: 'Ajtó-keresztgerenda Barbaric – viszonteladó | Asamer' },
    seoDescription: { de: 'Türentraverse – 4 ovale Saugnäpfe 377×81 mm, 1500×1200 mm, bis 150 kg. Asamer: Barbaric-Händler CZ/SK/HU.', en: 'Door traverse – 4 oval suction cups 377×81 mm, 1500×1200 mm, up to 150 kg. Asamer: Barbaric dealer CZ/SK/HU.', cz: 'Dveřní traverza – 4 oválné přísavky 377×81 mm, 1500×1200 mm, do 150 kg. Asamer: prodejce Barbaric.', sk: 'Dverná traverza – 4 oválne prísavky 377×81 mm, 1500×1200 mm, do 150 kg. Asamer: predajca Barbaric.', hu: 'Ajtó-keresztgerenda – 4 ovális szívócsésze 377×81 mm, 1500×1200 mm, 150 kg-ig. Asamer: Barbaric viszonteladó.' },
  },
  {
    slug: 'blech-plexiglas-traverse',
    name: 'Traverse für Blech & Plexiglas',
    category: 'vacuum-traverses',
    image: '/images/barbaric/blech-plexiglas-traverse.png',
    tagline: { de: 'Traverse für Blech & Plexiglas mit 8 Balgsaugern', en: 'Traverse for sheet metal & Plexiglas with 8 bellows suction cups', cz: 'Traverza pro plech a plexisklo s 8 měchovými přísavkami', sk: 'Traverza pre plech a plexisklo s 8 mechovými prísavkami', hu: 'Keresztgerenda lemezhez és plexihez 8 harmonikás szívócsészével' },
    description: {
      de: 'Diese Sondertraverse mit 8 Balgsaugern (Ø 115 mm) auf verlängerter verstellbarer Traverse eignet sich für das Handling dünner Teile aus Blech und Plexiglas. Die äußeren Saugnäpfe können bei kürzeren Werkstücken abgeschaltet werden.',
      en: 'This special traverse with 8 bellows suction cups (Ø 115 mm) on an extended adjustable cross-beam is suitable for handling thin sheet metal and Plexiglas parts. The outer suction cups can be switched off for shorter workpieces.',
      cz: 'Tato speciální traverza s 8 měchovými přísavkami (Ø 115 mm) na prodloužené nastavitelné traverze je vhodná pro manipulaci s tenkými díly z plechu a plexiskla.',
      sk: 'Táto špeciálna traverza s 8 mechovými prísavkami (Ø 115 mm) na predĺženej nastaviteľnej traverze je vhodná na manipuláciu s tenkými dielmi z plechu a plexiskla.',
      hu: 'Ez a speciális keresztgerenda 8 harmonikás szívócsészével (Ø 115 mm) a hosszabbított állítható keresztgerendán alkalmas vékony lemez és plexi alkatrészek kezelésére.',
    },
    specs: {
      de: { 'Tragkraft': '150 kg', 'Traversengröße': '2500×1200 mm', 'Saugnäpfe': '8× Balgsauger Ø 115 mm', 'Besonderheit': 'Äußere Saugnäpfe abschaltbar', 'Materialien': 'Blech, Plexiglas, dünne Teile' },
      en: { 'Load capacity': '150 kg', 'Traverse size': '2500×1200 mm', 'Suction cups': '8× bellows Ø 115 mm', 'Feature': 'Outer cups switchable', 'Materials': 'Sheet metal, Plexiglas, thin parts' },
      cz: { 'Nosnost': '150 kg', 'Velikost traverzy': '2500×1200 mm', 'Přísavky': '8× měchové Ø 115 mm', 'Zvláštnost': 'Vnější přísavky vypínatelné', 'Materiály': 'Plech, plexisklo, tenké díly' },
      sk: { 'Nosnosť': '150 kg', 'Veľkosť traverzy': '2500×1200 mm', 'Prísavky': '8× mechové Ø 115 mm', 'Zvláštnosť': 'Vonkajšie prísavky vypínateľné', 'Materiály': 'Plech, plexisklo, tenké diely' },
      hu: { 'Teherbírás': '150 kg', 'Keresztgerenda mérete': '2500×1200 mm', 'Szívócsészék': '8× harmonikás Ø 115 mm', 'Jellemző': 'Külső csészék kikapcsolhatók', 'Anyagok': 'Lemez, plexi, vékony alkatrészek' },
    },
    highlights: ['8× bellows suction cups Ø 115 mm', 'Extended 2500×1200 mm traverse', 'Outer cups individually switchable', 'For thin sheet metal & Plexiglas', 'Up to 150 kg'],
    seoTitle: { de: 'Traverse Blech & Plexiglas Barbaric – Händler CZ/SK/HU | Asamer', en: 'Traverse Sheet Metal & Plexiglas Barbaric – dealer CZ/SK/HU | Asamer', cz: 'Traverza plech a plexisklo Barbaric – prodejce | Asamer', sk: 'Traverza plech a plexisklo Barbaric – predajca | Asamer', hu: 'Keresztgerenda lemez és plexi Barbaric – viszonteladó | Asamer' },
    seoDescription: { de: 'Traverse für Blech & Plexiglas – 8 Balgsauger Ø 115 mm, 2500×1200 mm, bis 150 kg. Asamer: Barbaric-Händler CZ/SK/HU.', en: 'Traverse for sheet metal & Plexiglas – 8 bellows Ø 115 mm, 2500×1200 mm, up to 150 kg. Asamer: Barbaric dealer CZ/SK/HU.', cz: 'Traverza plech a plexisklo – 8 měchových přísavek Ø 115 mm, 2500×1200 mm, do 150 kg. Asamer: prodejce Barbaric.', sk: 'Traverza plech a plexisklo – 8 mechových prísaviek Ø 115 mm, 2500×1200 mm, do 150 kg. Asamer: predajca Barbaric.', hu: 'Keresztgerenda lemezhez és plexihez – 8 harmonikás Ø 115 mm, 2500×1200 mm, 150 kg-ig. Asamer: Barbaric viszonteladó.' },
  },

  /* ==================== VACUUM CRANES & RAIL SYSTEMS ==================== */
  {
    slug: 'ssk-saeulenschwenkkran',
    name: 'SSK Säulenschwenkkran',
    category: 'vacuum-cranes',
    image: '/images/barbaric/ssk-saeulenschwenkkran.png',
    tagline: { de: 'Schwenkkran in Leichtbauweise – individuell konfigurierbar', en: 'Lightweight jib crane – individually configurable', cz: 'Sloupový otočný jeřáb v lehké konstrukci – individuálně konfigurovatelný', sk: 'Stĺpový otočný žeriav v ľahkej konštrukcii – individuálne konfigurovateľný', hu: 'Oszlopos forgódaru könnyűszerkezetben – egyedileg konfigurálható' },
    description: {
      de: 'Der SSK Säulenschwenkkran ist ein Schwenkkransystem in Leichtbauweise für alle Traglasten und Auslegerlängen. Ideal als Trägersystem für die UniWood-Heberserie. Optional mit vergrößerter Bodenplatte oder Wandmontage verfügbar.',
      en: 'The SSK pillar jib crane is a lightweight swing-crane system for all loads and boom lengths. Ideal as a carrier system for the UniWood lifter series. Available with enlarged base plate or wall-mounted option.',
      cz: 'SSK sloupový otočný jeřáb je otočný jeřábový systém v lehké konstrukci pro všechny nosnosti a délky vyložení. Ideální jako nosný systém pro řadu UniWood.',
      sk: 'SSK stĺpový otočný žeriav je otočný žeriavový systém v ľahkej konštrukcii pre všetky nosnosti a dĺžky vyloženia.',
      hu: 'Az SSK oszlopos forgódaru könnyűszerkezetes forgódaru-rendszer minden teherhez és gémhosszhoz. Ideális hordozórendszer a UniWood emelőkhöz.',
    },
    specs: {
      de: { 'Bauart': 'Säulenschwenkkran, Leichtbau', 'Traglast': 'kundenspezifisch', 'Auslegerlänge': 'variabel', 'Option': 'vergrößerte Bodenplatte / Wandmontage', 'Einsatz': 'Trägersystem für UWL / UniWood' },
      en: { 'Design': 'Pillar jib crane, lightweight', 'Load rating': 'customer-specific', 'Boom length': 'variable', 'Option': 'Enlarged base plate / wall mount', 'Use': 'Carrier system for UWL / UniWood' },
      cz: { 'Provedení': 'Sloupový otočný jeřáb, lehká konstrukce', 'Nosnost': 'dle zákazníka', 'Délka vyložení': 'variabilní', 'Opce': 'Zvětšená základová deska / montáž na stěnu', 'Použití': 'Nosný systém pro UWL / UniWood' },
      sk: { 'Prevedenie': 'Stĺpový otočný žeriav, ľahká konštrukcia', 'Nosnosť': 'podľa zákazníka', 'Dĺžka vyloženia': 'variabilná', 'Opcia': 'Zväčšená základová doska / montáž na stenu', 'Použitie': 'Nosný systém pre UWL / UniWood' },
      hu: { 'Kivitel': 'Oszlopos forgódaru, könnyűszerkezetes', 'Teherbírás': 'egyedi', 'Gémhossz': 'változó', 'Opció': 'Nagyobb alaplemez / falra szerelés', 'Alkalmazás': 'Hordozórendszer UWL / UniWood emelőkhöz' },
    },
    highlights: ['Lightweight pillar jib crane', 'Custom load ratings and boom lengths', 'Optional enlarged base plate', 'Wall-mount variant available', 'Ideal carrier for UniWood lifters'],
    seoTitle: { de: 'SSK Säulenschwenkkran Barbaric – Händler CZ/SK/HU | Asamer', en: 'SSK Pillar Jib Crane Barbaric – dealer CZ/SK/HU | Asamer', cz: 'SSK sloupový otočný jeřáb Barbaric – prodejce | Asamer', sk: 'SSK stĺpový otočný žeriav Barbaric – predajca | Asamer', hu: 'SSK oszlopos forgódaru Barbaric – viszonteladó | Asamer' },
    seoDescription: { de: 'SSK Säulenschwenkkran – Leichtbau-Schwenkkran für UniWood-Heber, individuell konfigurierbar. Asamer: Barbaric-Händler CZ/SK/HU.', en: 'SSK pillar jib crane – lightweight swing crane for UniWood lifters, individually configurable. Asamer: Barbaric dealer CZ/SK/HU.', cz: 'SSK sloupový otočný jeřáb – otočný jeřáb v lehké konstrukci pro zvedáky UniWood. Asamer: prodejce Barbaric.', sk: 'SSK stĺpový otočný žeriav – otočný žeriav v ľahkej konštrukcii pre zdviháky UniWood. Asamer: predajca Barbaric.', hu: 'SSK oszlopos forgódaru – könnyűszerkezetes forgódaru UniWood emelőkhöz. Asamer: Barbaric viszonteladó.' },
  },
  {
    slug: 'ssy-schienensystem',
    name: 'SSY Leichtlauf-Schienensystem',
    category: 'vacuum-cranes',
    image: '/images/barbaric/ssy-schienensystem.png',
    tagline: { de: 'Schienensystem mit Stahlbrücken – von Hand verfahrbar', en: 'Rail system with steel bridges – manually movable', cz: 'Kolejnicový systém s ocelovými mosty – ručně pojezdný', sk: 'Koľajnicový systém s oceľovými mostmi – ručne pojazdný', hu: 'Sínrendszer acélhidakkal – kézzel mozgatható' },
    description: {
      de: 'Das SSY Leichtlauf-Schienensystem mit Stahlbrücken ist mühelos von Hand verfahrbar und deckt Brückenlängen bis 8 m ab. Alle Laufwagen sind mit seitlichen Führungsrollen ausgestattet.',
      en: 'The SSY light-running rail system with steel bridges is easily movable by hand and covers bridge lengths up to 8 m. All trolleys are equipped with side guide rollers.',
      cz: 'Systém SSY Leichtlauf s ocelovými mosty je snadno pojezdný rukou a pokrývá délky mostů až 8 m. Všechny vozíky mají boční vodicí kladky.',
      sk: 'Systém SSY Leichtlauf s oceľovými mostmi je ľahko pojazdný rukou a pokrýva dĺžky mostov až 8 m.',
      hu: 'Az SSY könnyen futó sínrendszer acélhidakkal kézzel könnyedén mozgatható, 8 m-ig terjedő hídhosszal. Minden kocsi oldalsó vezetőgörgőkkel felszerelve.',
    },
    specs: {
      de: { 'Bauart': 'Leichtlauf-Schienensystem', 'Brückenart': 'Stahlbrücke', 'Brückenlänge': 'bis 8 m', 'Verfahren': 'von Hand', 'Laufwagen': 'mit seitlichen Führungsrollen' },
      en: { 'Design': 'Light-running rail system', 'Bridge type': 'Steel bridge', 'Bridge length': 'up to 8 m', 'Movement': 'manual', 'Trolley': 'with side guide rollers' },
      cz: { 'Provedení': 'Lehkoběžný kolejnicový systém', 'Typ mostu': 'Ocelový most', 'Délka mostu': 'až 8 m', 'Pojezd': 'ruční', 'Vozík': 's bočními vodicími kladkami' },
      sk: { 'Prevedenie': 'Ľahkobežný koľajnicový systém', 'Typ mosta': 'Oceľový most', 'Dĺžka mosta': 'až 8 m', 'Pojazd': 'ručný', 'Vozík': 's bočnými vodiacimi kladkami' },
      hu: { 'Kivitel': 'Könnyen futó sínrendszer', 'Híd típusa': 'Acélhíd', 'Hídhossz': '8 m-ig', 'Mozgatás': 'kézi', 'Kocsi': 'oldalsó vezetőgörgőkkel' },
    },
    highlights: ['Manually movable steel bridges', 'Bridge lengths up to 8 m', 'Side guide rollers on all trolleys', 'Power supply to bridge included', 'Flexible workspace coverage'],
    seoTitle: { de: 'SSY Leichtlauf-Schienensystem Barbaric – Händler CZ/SK/HU | Asamer', en: 'SSY Light-Running Rail System Barbaric – dealer CZ/SK/HU | Asamer', cz: 'SSY lehkoběžný kolejnicový systém Barbaric – prodejce | Asamer', sk: 'SSY ľahkobežný koľajnicový systém Barbaric – predajca | Asamer', hu: 'SSY könnyen futó sínrendszer Barbaric – viszonteladó | Asamer' },
    seoDescription: { de: 'SSY Leichtlauf-Schienensystem – Stahlbrücken bis 8 m, von Hand verfahrbar. Asamer: Barbaric-Händler CZ/SK/HU.', en: 'SSY light-running rail system – steel bridges up to 8 m, manually movable. Asamer: Barbaric dealer CZ/SK/HU.', cz: 'SSY lehkoběžný kolejnicový systém – ocelové mosty až 8 m, ručně pojezdný. Asamer: prodejce Barbaric.', sk: 'SSY ľahkobežný koľajnicový systém – oceľové mosty až 8 m, ručne pojazdný. Asamer: predajca Barbaric.', hu: 'SSY könnyen futó sínrendszer – acélhidak 8 m-ig, kézzel mozgatható. Asamer: Barbaric viszonteladó.' },
  },
  {
    slug: 'fachwerksbruecke-2d',
    name: '2D Alu-Fachwerksbrücke',
    category: 'vacuum-cranes',
    image: '/images/barbaric/fachwerksbruecke-2d.png',
    tagline: { de: 'Aluminium-Fachwerkbrücke in 2D-Ausführung', en: 'Aluminium truss bridge in 2D design', cz: 'Hliníkový příhradový most v 2D provedení', sk: 'Hliníkový priehradový most v 2D prevedení', hu: 'Alumínium rácsos híd 2D kivitelben' },
    description: {
      de: 'Die 2D Alu-Fachwerksbrücke ist eine zweidimensionale Aluminium-Fachwerkstruktur für modulare Kransysteme. Leichtgewichtig, stabil und flexibel für unterschiedliche Spannweiten einsetzbar.',
      en: 'The 2D aluminium truss bridge is a two-dimensional aluminium truss structure for modular crane systems. Lightweight, stable and flexibly usable for different spans.',
      cz: 'Hliníkový příhradový most 2D je dvourozměrná hliníková příhradová konstrukce pro modulární jeřábové systémy. Lehká, stabilní a flexibilně použitelná pro různá rozpětí.',
      sk: 'Hliníkový priehradový most 2D je dvojrozmerná hliníková priehradová konštrukcia pre modulárne žeriavové systémy.',
      hu: 'A 2D alumínium rácsos híd kétdimenziós alumínium rácsszerkezet moduláris darurendszerekhez. Könnyű, stabil és rugalmas különböző fesztávolságokhoz.',
    },
    specs: {
      de: { 'Bauart': 'Aluminium-Fachwerkbrücke 2D', 'Spannweite': 'kundenspezifisch', 'Material': 'Aluminium', 'Einsatz': 'Modulare Kransysteme' },
      en: { 'Design': 'Aluminium truss bridge 2D', 'Span': 'customer-specific', 'Material': 'Aluminium', 'Use': 'Modular crane systems' },
      cz: { 'Provedení': 'Hliníkový příhradový most 2D', 'Rozpětí': 'dle zákazníka', 'Materiál': 'Hliník', 'Použití': 'Modulární jeřábové systémy' },
      sk: { 'Prevedenie': 'Hliníkový priehradový most 2D', 'Rozpätie': 'podľa zákazníka', 'Materiál': 'Hliník', 'Použitie': 'Modulárne žeriavové systémy' },
      hu: { 'Kivitel': 'Alumínium rácsos híd 2D', 'Fesztávolság': 'egyedi', 'Anyag': 'Alumínium', 'Alkalmazás': 'Moduláris darurendszerek' },
    },
    highlights: ['Lightweight aluminium truss', '2D planar design', 'Flexible span lengths', 'Modular crane integration', 'Stable low-deflection structure'],
    seoTitle: { de: '2D Alu-Fachwerksbrücke Barbaric – Händler CZ/SK/HU | Asamer', en: '2D Aluminium Truss Bridge Barbaric – dealer CZ/SK/HU | Asamer', cz: 'Hliníkový příhradový most 2D Barbaric – prodejce | Asamer', sk: 'Hliníkový priehradový most 2D Barbaric – predajca | Asamer', hu: '2D alumínium rácsos híd Barbaric – viszonteladó | Asamer' },
    seoDescription: { de: '2D Alu-Fachwerksbrücke – modulare Aluminium-Brückenkonstruktion für Kransysteme. Asamer: Barbaric-Händler CZ/SK/HU.', en: '2D aluminium truss bridge – modular aluminium bridge for crane systems. Asamer: Barbaric dealer CZ/SK/HU.', cz: 'Hliníkový příhradový most 2D – modulární hliníková mostní konstrukce pro jeřáby. Asamer: prodejce Barbaric.', sk: 'Hliníkový priehradový most 2D – modulárna hliníková mostná konštrukcia pre žeriavy. Asamer: predajca Barbaric.', hu: '2D alumínium rácsos híd – moduláris alumínium híd darurendszerekhez. Asamer: Barbaric viszonteladó.' },
  },
  {
    slug: 'fachwerksbruecke-3d',
    name: '3D Alu-Fachwerksbrücke',
    category: 'vacuum-cranes',
    image: '/images/barbaric/fachwerksbruecke-3d.png',
    tagline: { de: 'Aluminium-Fachwerkbrücke in 3D-Ausführung – höhere Traglast', en: 'Aluminium truss bridge in 3D design – higher load capacity', cz: 'Hliníkový příhradový most v 3D provedení – vyšší nosnost', sk: 'Hliníkový priehradový most v 3D prevedení – vyššia nosnosť', hu: 'Alumínium rácsos híd 3D kivitelben – nagyobb teherbírás' },
    description: {
      de: 'Die 3D Alu-Fachwerksbrücke bietet durch ihre dreidimensionale Struktur eine deutlich höhere Steifigkeit und Traglast gegenüber der 2D-Variante. Ideal für anspruchsvolle Handling-Aufgaben mit großen Spannweiten.',
      en: 'The 3D aluminium truss bridge offers significantly higher stiffness and load capacity than the 2D variant thanks to its three-dimensional structure. Ideal for demanding handling tasks with large spans.',
      cz: 'Hliníkový příhradový most 3D nabízí díky trojrozměrné struktuře výrazně vyšší tuhost a nosnost oproti 2D variantě. Ideální pro náročné manipulační úlohy s velkými rozpětími.',
      sk: 'Hliníkový priehradový most 3D ponúka vďaka trojrozmernej štruktúre výrazne vyššiu tuhosť a nosnosť oproti 2D variante.',
      hu: 'A 3D alumínium rácsos híd háromdimenziós szerkezete révén lényegesen nagyobb merevséget és teherbírást kínál a 2D változathoz képest.',
    },
    specs: {
      de: { 'Bauart': 'Aluminium-Fachwerkbrücke 3D', 'Spannweite': 'kundenspezifisch', 'Material': 'Aluminium', 'Vorteil': 'Höhere Steifigkeit und Traglast', 'Einsatz': 'Anspruchsvolle Spannweiten' },
      en: { 'Design': 'Aluminium truss bridge 3D', 'Span': 'customer-specific', 'Material': 'Aluminium', 'Advantage': 'Higher stiffness and load capacity', 'Use': 'Demanding large-span applications' },
      cz: { 'Provedení': 'Hliníkový příhradový most 3D', 'Rozpětí': 'dle zákazníka', 'Materiál': 'Hliník', 'Výhoda': 'Vyšší tuhost a nosnost', 'Použití': 'Náročná velká rozpětí' },
      sk: { 'Prevedenie': 'Hliníkový priehradový most 3D', 'Rozpätie': 'podľa zákazníka', 'Materiál': 'Hliník', 'Výhoda': 'Vyššia tuhosť a nosnosť', 'Použitie': 'Náročné veľké rozpätia' },
      hu: { 'Kivitel': 'Alumínium rácsos híd 3D', 'Fesztávolság': 'egyedi', 'Anyag': 'Alumínium', 'Előny': 'Nagyobb merevség és teherbírás', 'Alkalmazás': 'Igényes nagy fesztávolságok' },
    },
    highlights: ['3D spatial truss geometry', 'Higher stiffness vs 2D variant', 'Larger practical spans', 'Aluminium lightweight construction', 'For demanding handling tasks'],
    seoTitle: { de: '3D Alu-Fachwerksbrücke Barbaric – Händler CZ/SK/HU | Asamer', en: '3D Aluminium Truss Bridge Barbaric – dealer CZ/SK/HU | Asamer', cz: 'Hliníkový příhradový most 3D Barbaric – prodejce | Asamer', sk: 'Hliníkový priehradový most 3D Barbaric – predajca | Asamer', hu: '3D alumínium rácsos híd Barbaric – viszonteladó | Asamer' },
    seoDescription: { de: '3D Alu-Fachwerksbrücke – höhere Traglast und Steifigkeit als 2D-Variante. Asamer: Barbaric-Händler CZ/SK/HU.', en: '3D aluminium truss bridge – higher load capacity and stiffness than 2D variant. Asamer: Barbaric dealer CZ/SK/HU.', cz: 'Hliníkový příhradový most 3D – vyšší nosnost a tuhost než 2D varianta. Asamer: prodejce Barbaric.', sk: 'Hliníkový priehradový most 3D – vyššia nosnosť a tuhosť než 2D variant. Asamer: predajca Barbaric.', hu: '3D alumínium rácsos híd – nagyobb teherbírás és merevség a 2D változathoz képest. Asamer: Barbaric viszonteladó.' },
  },
];

/* ------------------------------------------------------------------ */
/*  Lookup helpers                                                     */
/* ------------------------------------------------------------------ */

const productsBySlug = new Map(BARBARIC_PRODUCTS.map((p) => [p.slug, p]));

export const getBarbaricProductBySlug = (slug: string): BarbaricProduct | undefined =>
  productsBySlug.get(slug);

export const getBarbaricProductsByCategory = (cat: BarbaricCategory): BarbaricProduct[] =>
  BARBARIC_PRODUCTS.filter((p) => p.category === cat);
