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
  | 'labeling';

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
  specs?: Record<string, string>;
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
    seoTitle: {
      de: 'Barbaric CSF Professional Flächenlager – Händler CZ/SK/HU | Asamer',
      en: 'Barbaric CSF Professional Panel Storage – dealer CZ/SK/HU | Asamer',
      cz: 'Barbaric CSF Professional skladování desek – koupit přes Asamer',
      sk: 'Barbaric CSF Professional skladovanie dosák – kúpiť cez Asamer',
      hu: 'Barbaric CSF Professional lapraktározás – Asamer viszonteladó',
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
    seoTitle: {
      de: 'Barbaric CSF Industrial Flächenlager – Händler CZ/SK/HU | Asamer',
      en: 'Barbaric CSF Industrial Panel Storage – dealer CZ/SK/HU | Asamer',
      cz: 'Barbaric CSF Industrial skladování desek – koupit přes Asamer',
      sk: 'Barbaric CSF Industrial skladovanie dosák – kúpiť cez Asamer',
      hu: 'Barbaric CSF Industrial lapraktározás – Asamer viszonteladó',
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
    seoTitle: {
      de: 'Barbaric CSF Multilevel Flächenlager – Händler CZ/SK/HU | Asamer',
      en: 'Barbaric CSF Multilevel Panel Storage – dealer CZ/SK/HU | Asamer',
      cz: 'Barbaric CSF Multilevel skladování desek – koupit přes Asamer',
      sk: 'Barbaric CSF Multilevel skladovanie dosák – kúpiť cez Asamer',
      hu: 'Barbaric CSF Multilevel lapraktározás – Asamer viszonteladó',
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
    seoTitle: {
      de: 'Barbaric Sonderanwendungen Flächenlager – Händler CZ/SK/HU | Asamer',
      en: 'Barbaric Custom Panel Storage Solutions – dealer CZ/SK/HU | Asamer',
      cz: 'Barbaric speciální skladování desek – koupit přes Asamer',
      sk: 'Barbaric špeciálne skladovanie dosák – kúpiť cez Asamer',
      hu: 'Barbaric egyedi lapraktározás – Asamer viszonteladó',
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
    image: '/images/barbaric/lcv-performance.png',
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
    seoTitle: {
      de: 'Barbaric LCV Performance Beschickung – Händler CZ/SK/HU | Asamer',
      en: 'Barbaric LCV Performance Feeding System – dealer CZ/SK/HU | Asamer',
      cz: 'Barbaric LCV Performance podávací systém – koupit přes Asamer',
      sk: 'Barbaric LCV Performance podávací systém – kúpiť cez Asamer',
      hu: 'Barbaric LCV Performance adagoló rendszer – Asamer viszonteladó',
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
    seoTitle: {
      de: 'Barbaric NST Nesting Picker – Händler CZ/SK/HU | Asamer',
      en: 'Barbaric NST Nesting Picker – dealer CZ/SK/HU | Asamer',
      cz: 'Barbaric NST Nesting Picker – koupit přes Asamer',
      sk: 'Barbaric NST Nesting Picker – kúpiť cez Asamer',
      hu: 'Barbaric NST Nesting Picker – Asamer viszonteladó',
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
    seoTitle: { de: 'Barbaric RTS Compact Returnsystem – Händler CZ/SK/HU | Asamer', en: 'Barbaric RTS Compact Return System – dealer CZ/SK/HU | Asamer', cz: 'Barbaric RTS Compact návratový systém – koupit přes Asamer', sk: 'Barbaric RTS Compact návratový systém – kúpiť cez Asamer', hu: 'Barbaric RTS Compact visszafutó rendszer – Asamer viszonteladó' },
    seoDescription: { de: 'RTS Compact – universelles Rückführsystem für Kantenanleimer. Kurze Amortisation. Asamer: autorisierter Barbaric-Händler für CZ, SK & HU.', en: 'RTS Compact – universal return system for edgebanders. Short ROI. Asamer: authorized Barbaric dealer for CZ, SK & HU.', cz: 'RTS Compact – univerzální vratný systém pro olepovačky. Krátká návratnost. Asamer: autorizovaný prodejce Barbaric pro CZ, SK a HU.', sk: 'RTS Compact – univerzálny vratný systém pre olepovačky. Krátka návratnosť. Asamer: autorizovaný predajca Barbaric pre CZ, SK a HU.', hu: 'RTS Compact – univerzális visszafutó élzárógépekhez. Rövid megtérülés. Asamer: hivatalos Barbaric viszonteladó CZ, SK és HU.' },
  },
  {
    slug: 'rts-professional',
    name: 'RTS Professional',
    category: 'return',
    image: '/images/barbaric/rts-professional.png',
    tagline: { de: 'Intelligent – mit und ohne Abstapelmöglichkeit', en: 'Intelligent – with and without destacking', cz: 'Inteligentní – s možností i bez možnosti odstapelování', sk: 'Inteligentný – s možnosťou i bez možnosti odstapelovania', hu: 'Intelligens – lerakodási lehetőséggel és anélkül' },
    description: { de: 'Das RTS Professional bietet intelligente Rückführung mit optionaler Abstapelung. Flexibel konfigurierbar für verschiedene Produktionsanforderungen an der Kantenanleimmaschine.', en: 'The RTS Professional offers intelligent return with optional destacking. Flexibly configurable for various production requirements at the edgebander.', cz: 'RTS Professional nabízí inteligentní vracení s volitelným odstapelováním. Flexibilně konfigurovatelný pro různé výrobní požadavky u olepovačky hran.', sk: 'RTS Professional ponúka inteligentné vracenie s voliteľným odstapelovaním.', hu: 'Az RTS Professional intelligens visszafutást kínál opcionális lerakodással.' },
    seoTitle: { de: 'Barbaric RTS Professional Returnsystem – Händler CZ/SK/HU | Asamer', en: 'Barbaric RTS Professional Return System – dealer CZ/SK/HU | Asamer', cz: 'Barbaric RTS Professional návratový systém – koupit přes Asamer', sk: 'Barbaric RTS Professional návratový systém – kúpiť cez Asamer', hu: 'Barbaric RTS Professional visszafutó rendszer – Asamer viszonteladó' },
    seoDescription: { de: 'RTS Professional – intelligentes Rückführsystem mit optionaler Abstapelung. Flexibel konfigurierbar. Asamer: Barbaric-Händler CZ, SK & HU.', en: 'RTS Professional – intelligent return system with optional destacking. Flexibly configurable. Asamer: Barbaric dealer CZ, SK & HU.', cz: 'RTS Professional – inteligentní vratný systém s volitelným odstapelováním. Flexibilní. Asamer: prodejce Barbaric CZ, SK a HU.', sk: 'RTS Professional – inteligentný vratný systém s voliteľným odstapelovaním. Flexibilný. Asamer: predajca Barbaric CZ, SK a HU.', hu: 'RTS Professional – intelligens visszafutó opcionális lerakodással. Rugalmasan konfigurálható. Asamer: Barbaric viszonteladó CZ, SK és HU.' },
  },
  {
    slug: 'rts-industrial',
    name: 'RTS Industrial',
    category: 'return',
    image: '/images/barbaric/rts-industrial.png',
    tagline: { de: 'Industriell – für Traglasten bis 100 kg', en: 'Industrial – for loads up to 100 kg', cz: 'Průmyslový – pro nosnosti do 100 kg', sk: 'Priemyselný – pre nosnosti do 100 kg', hu: 'Ipari – akár 100 kg teherbírással' },
    description: { de: 'Das RTS Industrial ist für industrielle Produktionslinien mit schweren Werkstücken bis 100 kg konzipiert. Robuste Bauweise für Dauerbetrieb mit hoher Taktrate an leistungsstarken Kantenanleimmaschinen.', en: 'The RTS Industrial is designed for industrial production lines with heavy workpieces up to 100 kg. Robust construction for continuous operation with high cycle rates on powerful edgebanders.', cz: 'RTS Industrial je navržen pro průmyslové výrobní linky s těžkými obrobky do 100 kg. Robustní konstrukce pro nepřetržitý provoz s vysokou taktovací frekvencí.', sk: 'RTS Industrial je navrhnutý pre priemyselné výrobné linky s ťažkými obrobkami do 100 kg.', hu: 'Az RTS Industrial ipari gyártósorokhoz készült, akár 100 kg-os nehéz munkadarabokhoz.' },
    seoTitle: { de: 'Barbaric RTS Industrial Returnsystem – Händler CZ/SK/HU | Asamer', en: 'Barbaric RTS Industrial Return System – dealer CZ/SK/HU | Asamer', cz: 'Barbaric RTS Industrial návratový systém – koupit přes Asamer', sk: 'Barbaric RTS Industrial návratový systém – kúpiť cez Asamer', hu: 'Barbaric RTS Industrial visszafutó rendszer – Asamer viszonteladó' },
    seoDescription: { de: 'RTS Industrial – industrielles Rückführsystem für Lasten bis 100 kg. Robuster Dauerbetrieb. Asamer: autorisierter Barbaric-Händler für CZ, SK & HU.', en: 'RTS Industrial – industrial return system for loads up to 100 kg. Robust continuous operation. Asamer: authorized Barbaric dealer for CZ, SK & HU.', cz: 'RTS Industrial – průmyslový vratný systém pro nosnosti do 100 kg. Robustní provoz. Asamer: prodejce Barbaric CZ, SK a HU.', sk: 'RTS Industrial – priemyselný vratný systém pre nosnosti do 100 kg. Robustná prevádzka. Asamer: predajca Barbaric CZ, SK a HU.', hu: 'RTS Industrial – ipari visszafutó 100 kg-ig. Robusztus folyamatos üzem. Asamer: hivatalos Barbaric viszonteladó CZ, SK és HU.' },
  },
  {
    slug: 'teilehandling',
    name: 'Automatisches Teilehandling',
    category: 'return',
    image: '/images/barbaric/teilehandling.png',
    tagline: { de: 'Für Losgröße-1-Fertigung an Durchlaufmaschinen', en: 'For batch-size-1 production on throughfeed machines', cz: 'Pro výrobu v dávce 1 na průchozích strojích', sk: 'Pre výrobu v dávke 1 na priechodných strojoch', hu: 'Egydarabos gyártáshoz átmenő gépeken' },
    description: { de: 'Automatisches Teilehandling für die Losgröße-1-Fertigung an Durchlaufmaschinen wie Kantenanleimern. Jedes Teil wird individuell gehandhabt, sortiert und weitergeleitet – für maximale Flexibilität in der modernen Möbelproduktion.', en: 'Automatic parts handling for batch-size-1 production on throughfeed machines like edgebanders. Each part is individually handled, sorted and forwarded – for maximum flexibility in modern furniture production.', cz: 'Automatické zacházení s díly pro výrobu v dávce 1 na průchozích strojích jako olepovačky hran. Každý díl je individuálně zpracován, setříděn a přepraven.', sk: 'Automatické zaobchádzanie s dielmi pre výrobu v dávke 1 na priechodných strojoch.', hu: 'Automatikus alkatrészkezelés egydarabos gyártáshoz átmenő gépeken, mint az élzárógépek.' },
    seoTitle: { de: 'Barbaric Automatisches Teilehandling – Händler CZ/SK/HU | Asamer', en: 'Barbaric Automatic Parts Handling – dealer CZ/SK/HU | Asamer', cz: 'Barbaric automatické zacházení s díly – koupit přes Asamer', sk: 'Barbaric automatické zaobchádzanie s dielmi – kúpiť cez Asamer', hu: 'Barbaric automatikus alkatrészkezelés – Asamer viszonteladó' },
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
    specs: { 'storage': '~120 m²', 'cycle': '~6 parts/min', 'maxPanel': '2.8 × 1.95 m', 'maxThickness': '25 mm (opt. 40 mm)' },
    seoTitle: { de: 'Barbaric PBX Teilepuffer – Händler CZ/SK/HU | Asamer', en: 'Barbaric PBX Parts Buffer – dealer CZ/SK/HU | Asamer', cz: 'Barbaric PBX buffer dílů – koupit přes Asamer', sk: 'Barbaric PBX buffer dielov – kúpiť cez Asamer', hu: 'Barbaric PBX alkatrész-puffer – Asamer viszonteladó' },
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
    seoTitle: { de: 'Barbaric DRX Türenlagersystem – Händler CZ/SK/HU | Asamer', en: 'Barbaric DRX Door Storage System – dealer CZ/SK/HU | Asamer', cz: 'Barbaric DRX skladovací systém dveří – koupit přes Asamer', sk: 'Barbaric DRX skladovací systém dverí – kúpiť cez Asamer', hu: 'Barbaric DRX ajtóraktározó rendszer – Asamer viszonteladó' },
    seoDescription: { de: 'DRX – neues Türenlagersystem. Kompakt, hohe Kapazität, industrielle Fertigung. Asamer: autorisierter Barbaric-Händler für CZ, SK & HU.', en: 'DRX – new door storage system. Compact, high capacity, industrial production. Asamer: authorized Barbaric dealer for CZ, SK & HU.', cz: 'DRX – nový skladovací systém dveří. Kompaktní, vysoká kapacita. Asamer: autorizovaný prodejce Barbaric pro CZ, SK a HU.', sk: 'DRX – nový skladovací systém dverí. Kompaktný, vysoká kapacita. Asamer: autorizovaný predajca Barbaric pre CZ, SK a HU.', hu: 'DRX – új ajtóraktár rendszer. Kompakt, nagy kapacitás, ipari gyártás. Asamer: hivatalos Barbaric viszonteladó CZ, SK és HU.' },
  },
  {
    slug: 'csf-industrial-turen',
    name: 'CSF Industrial Türen',
    category: 'door',
    image: 'https://www.barbaric.at/fileadmin/_processed_/f/b/csm_TMP_Akk_a3b6a50a7e.jpg',
    tagline: { de: 'Lagerlösung für Türen in der Industrie', en: 'Storage solution for doors in industry', cz: 'Skladové řešení pro dveře v průmyslu', sk: 'Skladové riešenie pre dvere v priemysle', hu: 'Raktármegoldás ajtókhoz az iparban' },
    description: { de: 'Das CSF Industrial Türen ist ein spezialisiertes Flächenlager für die automatische Lagerung und Bereitstellung von Türen in industriellen Produktionsumgebungen. Hohe Kapazität und schnelle Zugriffszeiten für den Dauerbetrieb.', en: 'The CSF Industrial Doors is a specialized panel storage for automatic storage and retrieval of doors in industrial production environments. High capacity and fast access times for continuous operation.', cz: 'CSF Industrial Dveře je specializovaný sklad pro automatické skladování a poskytování dveří v průmyslovém výrobním prostředí.', sk: 'CSF Industrial Dvere je špecializovaný sklad pre automatické skladovanie a poskytovanie dverí.', hu: 'A CSF Industrial Ajtók speciális raktárrendszer ajtók automatikus tárolására és kiadására ipari környezetben.' },
    seoTitle: { de: 'Barbaric CSF Industrial Türen – Händler CZ/SK/HU | Asamer', en: 'Barbaric CSF Industrial Doors – dealer CZ/SK/HU | Asamer', cz: 'Barbaric CSF Industrial dveře – koupit přes Asamer', sk: 'Barbaric CSF Industrial dvere – kúpiť cez Asamer', hu: 'Barbaric CSF Industrial ajtók – Asamer viszonteladó' },
    seoDescription: { de: 'CSF Industrial Türen – spezialisiertes Flächenlager für Türenproduktion. Hohe Kapazität. Asamer: autorisierter Barbaric-Händler für CZ, SK & HU.', en: 'CSF Industrial Doors – specialized panel storage for door production. High capacity. Asamer: authorized Barbaric dealer for CZ, SK & HU.', cz: 'CSF Industrial Dveře – specializovaný sklad pro výrobu dveří. Vysoká kapacita. Asamer: prodejce Barbaric CZ, SK a HU.', sk: 'CSF Industrial Dvere – špecializovaný sklad pre výrobu dverí. Vysoká kapacita. Asamer: predajca Barbaric CZ, SK a HU.', hu: 'CSF Industrial Ajtók – speciális raktár ajtógyártáshoz. Nagy kapacitás. Asamer: hivatalos Barbaric viszonteladó CZ, SK és HU.' },
  },
  {
    slug: 'tmp',
    name: 'TMP Türenmanipulator',
    category: 'door',
    image: 'https://www.barbaric.at/fileadmin/_processed_/f/b/csm_TMP_Akk_a3b6a50a7e.jpg',
    tagline: { de: 'Beschickung CNC + Stapelung bearbeiteter Türen', en: 'CNC feeding + stacking of processed doors', cz: 'Podávání CNC + stohování zpracovaných dveří', sk: 'Podávanie CNC + stohovanie spracovaných dverí', hu: 'CNC adagolás + megmunkált ajtók rakodása' },
    description: { de: 'Der TMP Türenmanipulator automatisiert die Beschickung von CNC-Maschinen und die Stapelung bearbeiteter Türen. Schnelle und kompakte Systeme für höhere Produktivität und geringere Belastung der Mitarbeiter.', en: 'The TMP door manipulator automates CNC machine feeding and stacking of processed doors. Fast and compact systems for higher productivity and reduced operator workload.', cz: 'TMP manipulátor dveří automatizuje podávání CNC strojů a stohování zpracovaných dveří. Rychlé a kompaktní systémy pro vyšší produktivitu.', sk: 'TMP manipulátor dverí automatizuje podávanie CNC strojov a stohovanie spracovaných dverí.', hu: 'A TMP ajtómanipulátor automatizálja a CNC-gépek adagolását és a megmunkált ajtók rakodását.' },
    seoTitle: { de: 'Barbaric TMP Türenmanipulator – Händler CZ/SK/HU | Asamer', en: 'Barbaric TMP Door Manipulator – dealer CZ/SK/HU | Asamer', cz: 'Barbaric TMP manipulátor dveří – koupit přes Asamer', sk: 'Barbaric TMP manipulátor dverí – kúpiť cez Asamer', hu: 'Barbaric TMP ajtómanipulátor – Asamer viszonteladó' },
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
    seoTitle: { de: 'Barbaric LPS Labeling Printer – Händler CZ/SK/HU | Asamer', en: 'Barbaric LPS Labeling Printer – dealer CZ/SK/HU | Asamer', cz: 'Barbaric LPS tiskárna štítků – koupit přes Asamer', sk: 'Barbaric LPS tlačiareň štítkov – kúpiť cez Asamer', hu: 'Barbaric LPS címkenyomtató – Asamer viszonteladó' },
    seoDescription: { de: 'LPS – Labeling Printer für Platten-Etikettierung vor dem Zuschnitt. Lückenlose Nachverfolgung. Asamer: Barbaric-Händler CZ, SK & HU.', en: 'LPS – labeling printer for panel identification before cutting. Full traceability. Asamer: Barbaric dealer CZ, SK & HU.', cz: 'LPS – tiskárna štítků pro identifikaci desek před řezáním. Plná sledovatelnost. Asamer: prodejce Barbaric CZ, SK a HU.', sk: 'LPS – tlačiareň štítkov pre identifikáciu dosiek pred rezaním. Plná sledovateľnosť. Asamer: predajca Barbaric CZ, SK a HU.', hu: 'LPS – címkenyomtató lapok azonosításához vágás előtt. Teljes nyomonkövetés. Asamer: Barbaric viszonteladó CZ, SK és HU.' },
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
