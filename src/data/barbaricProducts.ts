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
];

/* ------------------------------------------------------------------ */
/*  Lookup helpers                                                     */
/* ------------------------------------------------------------------ */

const productsBySlug = new Map(BARBARIC_PRODUCTS.map((p) => [p.slug, p]));

export const getBarbaricProductBySlug = (slug: string): BarbaricProduct | undefined =>
  productsBySlug.get(slug);

export const getBarbaricProductsByCategory = (cat: BarbaricCategory): BarbaricProduct[] =>
  BARBARIC_PRODUCTS.filter((p) => p.category === cat);
