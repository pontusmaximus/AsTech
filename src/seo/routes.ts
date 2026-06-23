import type { Language } from '../i18n';
import { DEFAULT_LANGUAGE } from '../lib/language';
import { SLUG_TRANSLATIONS } from '../lib/slugs';

export const DEFAULT_OG_IMAGE = 'https://asamer.cz/brand/png/social/asamer-og-image.png';

export type SeoRouteKey =
  | 'home'
  | 'mayer'
  | 'ott'
  | 'barbaric'
  | 'gannomat'
  | 'imaSchelling'
  | 'financing'
  | 'solutions'
  | 'service'
  | 'usedMachines'
  | 'contact'
  | 'imprint'
  | 'privacy'
  | 'terms'
  | 'faq'
  | 'guidePurVsEva'
  | 'guideEdgebander'
  | 'guideWarehouseAutomation'
  | 'guidePanelSawComparison'
  | 'guideFundingCz'
  | 'guideVacuumLifter';

export interface RouteMeta {
  title: string;
  description: string;
  keywords?: string[];
}

export interface SeoRouteConfig {
  slug: string;
  slugByLang?: Partial<Record<Language, string>>;
  image?: string;
  meta: Record<Language, RouteMeta>;
}

export const getSlugForLang = (config: SeoRouteConfig, lang: Language): string =>
  config.slugByLang?.[lang] ?? config.slug;

type FullMetaInput = {
  de: RouteMeta;
  en: RouteMeta;
  cz: RouteMeta;
  sk: RouteMeta;
  hu: RouteMeta;
};

const createMeta = ({ de, en, cz, sk, hu }: FullMetaInput): Record<Language, RouteMeta> => ({
  de,
  en,
  cz,
  sk,
  hu,
});

export const SEO_ROUTES: Record<SeoRouteKey, SeoRouteConfig> = {
  home: {
    slug: '/',
    image: '/images/hero-bg.jpg',
    meta: createMeta({
      de: {
        title: 'Asamer Technologie | Maschinen, Automation & Service',
        description:
          'Asamer Technologie – Ihr Händler für OTT, Mayer, Barbaric & Gannomat in CZ, SK und HU. Maschinen, Automatisierung & Service aus einer Hand.',
        keywords: ['Asamer', 'Technologie', 'Automation', 'Holzbearbeitung', 'Maschinen'],
      },
      en: {
        title: 'Asamer Technology | Machinery, Automation & Service',
        description:
          'Asamer Technologie – Authorized dealer for OTT, Mayer, Barbaric & Gannomat in CZ, SK and HU. Machines, automation & service.',
        keywords: ['Asamer', 'Technology', 'Automation', 'Machinery', 'Service'],
      },
      cz: {
        title: 'Asamer Technologie | Stroje, automatizace a servis',
        description:
          'Asamer Technologie – prodejce OTT, Mayer, Barbaric a Gannomat pro CZ, SK a HU. Stroje, automatizace a servis.',
        keywords: ['Asamer', 'Technologie', 'Automatizace', 'Stroje', 'Servis'],
      },
      sk: {
        title: 'Asamer Technologie | Stroje, automatizácia a servis',
        description:
          'Asamer Technologie – predajca OTT, Mayer, Barbaric a Gannomat pre CZ, SK a HU. Stroje, automatizácia a servis.',
        keywords: ['Asamer', 'Technologie', 'Automatizácia', 'Stroje', 'Servis'],
      },
      hu: {
        title: 'Asamer Technologie | Gépek, automatizálás és szerviz',
        description:
          'Asamer Technologie – az OTT, Mayer, Barbaric és Gannomat forgalmazója CZ, SK és HU területén. Gépek, automatizálás és szerviz.',
        keywords: ['Asamer', 'Technologie', 'Automatizálás', 'Gépek', 'Szerviz'],
      },
    }),
  },
  mayer: {
    slug: '/mayer',
    image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__64214__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/plattensaege-kappaautomatic80-mayer-feldergroup.png',
    meta: createMeta({
      de: {
        title: 'Mayer Plattensägen – Händler für CZ, SK, HU | Asamer',
        description:
          'Mayer Plattenaufteilsägen – Asamer Händler für CZ, SK & HU. Kappa Automatic für Holz, Advanced Line für Alu & Kunststoff. Service inklusive.',
        keywords: ['Mayer', 'Plattensäge', 'kappa automatic', 'advanced line', 'Felder Group', 'Asamer', 'Aufteilzentrum'],
      },
      en: {
        title: 'Mayer Panel Saws – Dealer for CZ, SK, HU | Asamer',
        description:
          'Mayer panel saws – Asamer authorized dealer for CZ, SK & HU. Kappa Automatic for wood, Advanced Line for aluminium & plastics. Service included.',
        keywords: ['Mayer', 'Panel saw', 'kappa automatic', 'advanced line', 'Felder Group', 'Asamer', 'cutting center'],
      },
      cz: {
        title: 'Mayer formátovací pily – autorizovaný prodejce CZ, SK, HU | Asamer',
        description:
          'Mayer formátovací pily – Asamer autorizovaný prodejce pro CZ, SK a HU. Kappa Automatic pro dřevo, Advanced Line pro hliník a plasty.',
        keywords: ['Mayer', 'Formátovací pila', 'kappa automatic', 'advanced line', 'Felder Group', 'Asamer', 'nářezové centrum'],
      },
      sk: {
        title: 'Mayer formátovacie píly – autorizovaný predajca | Asamer',
        description:
          'Mayer formátovacie píly – Asamer autorizovaný predajca pre CZ, SK a HU. Kappa Automatic pre drevo, Advanced Line pre hliník a plasty.',
        keywords: ['Mayer', 'Formátovacia píla', 'kappa automatic', 'advanced line', 'Felder Group', 'Asamer', 'nářezové centrum'],
      },
      hu: {
        title: 'Mayer lapszabó fűrészek – hivatalos viszonteladó | Asamer',
        description:
          'Mayer lapszabó fűrészek – Asamer hivatalos viszonteladó CZ, SK és HU területén. Kappa Automatic fához, Advanced Line alumíniumhoz és műanyaghoz.',
        keywords: ['Mayer', 'Lapszabó fűrész', 'kappa automatic', 'advanced line', 'Felder Group', 'Asamer', 'vágóközpont'],
      },
    }),
  },
  ott: {
    slug: '/ott',
    image: 'https://www.ottpaul.com/fileadmin/_processed_/c/7/csm_pacific-plus_4a95031bd4.png',
    meta: createMeta({
      de: {
        title: 'OTT Kantenanleimmaschinen – Händler für CZ, SK, HU | Asamer',
        description:
          'OTT Kantenanleimmaschinen – Asamer autorisierter Händler für CZ, SK & HU. PUR & LASER Hydrofuse. Beckhoff OPC-UA Schnittstelle für Software-Integration.',
        keywords: ['OTT', 'Kantenanleimmaschine', 'PUR', 'Laser', 'Hydrofuse', 'Beckhoff', 'OPC-UA'],
      },
      en: {
        title: 'OTT Edgebanding Machines – Dealer CZ, SK, HU | Asamer',
        description:
          'OTT edgebanding machines – Asamer authorized dealer for CZ, SK & HU. PUR & LASER Hydrofuse technology. Open Beckhoff OPC-UA interface for integration.',
        keywords: ['OTT', 'Edgebander', 'PUR', 'Laser', 'Hydrofuse', 'Beckhoff', 'OPC-UA'],
      },
      cz: {
        title: 'OTT olepovačky hran – autorizovaný prodejce | Asamer',
        description:
          'OTT olepovačky hran – Asamer autorizovaný prodejce pro CZ, SK a HU. Technologie PUR a LASER Hydrofuse. Otevřené rozhraní Beckhoff OPC-UA.',
        keywords: ['OTT', 'Olepovačka hran', 'PUR', 'Laser', 'Hydrofuse', 'Beckhoff', 'OPC-UA'],
      },
      sk: {
        title: 'OTT olepovačky hrán – autorizovaný predajca | Asamer',
        description:
          'OTT olepovačky hrán – Asamer autorizovaný predajca pre CZ, SK a HU. Technológia PUR a LASER Hydrofuse. Otvorené rozhranie Beckhoff OPC-UA.',
        keywords: ['OTT', 'Olepovačka hrán', 'PUR', 'Laser', 'Hydrofuse', 'Beckhoff', 'OPC-UA'],
      },
      hu: {
        title: 'OTT élzárógépek – hivatalos viszonteladó | Asamer',
        description:
          'OTT élzárógépek – Asamer hivatalos viszonteladó CZ, SK és HU területén. PUR és LASER Hydrofuse technológia. Nyílt Beckhoff OPC-UA interfész.',
        keywords: ['OTT', 'Élzárógép', 'PUR', 'Laser', 'Hydrofuse', 'Beckhoff', 'OPC-UA'],
      },
    }),
  },
  barbaric: {
    slug: '/barbaric',
    image: 'https://www.barbaric.at/fileadmin/_processed_/1/1/csm_CSF_Multilevel-Wegerer-7837_web_9285d8be71.png',
    meta: createMeta({
      de: {
        title: 'Barbaric Plattenhandling & Automatisierung | Asamer',
        description:
          'Barbaric Plattenhandling & Automatisierung – Asamer Händler für CZ, SK & HU. Flächenlager, LCV Beschickung, Nesting Picker, Returnsysteme.',
        keywords: ['BARBARIC', 'Flächenlager', 'Beschickung', 'Nesting', 'Returnsystem', 'Automatisierung', 'Asamer'],
      },
      en: {
        title: 'Barbaric Automation & Panel Handling – Dealer CZ, SK, HU | Asamer',
        description:
          'Barbaric panel handling & automation – Asamer authorized dealer for CZ, SK & HU. Panel storage, LCV feeding, nesting picker, return systems.',
        keywords: ['BARBARIC', 'Panel storage', 'Feeding', 'Nesting', 'Return system', 'Automation', 'Asamer'],
      },
      cz: {
        title: 'Barbaric automatizace a manipulace s deskami – prodejce | Asamer',
        description:
          'Barbaric manipulace s deskami a automatizace – Asamer autorizovaný prodejce pro CZ, SK a HU. Sklady, podávání, nesting picker, návratové systémy.',
        keywords: ['BARBARIC', 'Sklad desek', 'Podávání', 'Nesting', 'Návratový systém', 'Automatizace', 'Asamer'],
      },
      sk: {
        title: 'Barbaric automatizácia a manipulácia s doskami – predajca | Asamer',
        description:
          'Barbaric manipulácia s doskami a automatizácia – Asamer autorizovaný predajca pre CZ, SK a HU. Sklady, podávanie, nesting picker, návratové systémy.',
        keywords: ['BARBARIC', 'Sklad dosiek', 'Podávanie', 'Nesting', 'Návratový systém', 'Automatizácia', 'Asamer'],
      },
      hu: {
        title: 'Barbaric automatizálás és lapkezelés – viszonteladó | Asamer',
        description:
          'Barbaric lapkezelés és automatizálás – Asamer hivatalos viszonteladó CZ, SK és HU területén. Lapraktár, adagolás, nesting picker, visszafutók.',
        keywords: ['BARBARIC', 'Lapraktározás', 'Adagolás', 'Nesting', 'Visszafutó rendszer', 'Automatizálás', 'Asamer'],
      },
    }),
  },
  gannomat: {
    slug: '/gannomat',
    image: '/images/gannomat/selekta.jpg',
    meta: createMeta({
      de: {
        title: 'Gannomat Dübeleintreibmaschinen – Händler CZ, SK, HU | Asamer',
        description:
          'Gannomat Bohr- und Dübeleintreibmaschinen – Asamer Händler für CZ, SK & HU. Selekta und Index als Flaggschiff-Modelle für die Möbelindustrie.',
        keywords: ['Gannomat', 'Dübeleintreibmaschine', 'Selekta', 'Index CNC', 'Dübelbohrmaschine', 'Asamer'],
      },
      en: {
        title: 'Gannomat Dowel Inserting Machines – Dealer CZ, SK, HU | Asamer',
        description:
          'Gannomat drilling & dowel insertion machines – Asamer authorized dealer for CZ, SK & HU. Selekta and Index as flagship models for furniture industry.',
        keywords: ['Gannomat', 'Dowel inserter', 'Selekta', 'Index CNC', 'Dowel boring', 'Asamer'],
      },
      cz: {
        title: 'Gannomat kolkovací stroje – autorizovaný prodejce | Asamer',
        description:
          'Gannomat vrtací a kolkovací stroje – Asamer autorizovaný prodejce pro CZ, SK a HU. Selekta a Index jako vlajkové modely pro nábytkářský průmysl.',
        keywords: ['Gannomat', 'Kolkovací stroj', 'Selekta', 'Index CNC', 'Kolkovací vrtačka', 'Asamer'],
      },
      sk: {
        title: 'Gannomat kolkovacie stroje – autorizovaný predajca | Asamer',
        description:
          'Gannomat vŕtacie a kolkovacie stroje – Asamer autorizovaný predajca pre CZ, SK a HU. Selekta a Index ako vlajkové modely pre nábytkársky priemysel.',
        keywords: ['Gannomat', 'Kolkovací stroj', 'Selekta', 'Index CNC', 'Kolkovacia vŕtačka', 'Asamer'],
      },
      hu: {
        title: 'Gannomat csapoznyomó gépek – hivatalos viszonteladó | Asamer',
        description:
          'Gannomat fúró- és csapozógépek – Asamer hivatalos viszonteladó CZ, SK és HU területén. Selekta és Index zászlóshajó modellek a bútoripar számára.',
        keywords: ['Gannomat', 'Csapozógép', 'Selekta', 'Index CNC', 'Csapfúró', 'Asamer'],
      },
    }),
  },
  imaSchelling: {
    slug: '/ima-schelling',
    meta: createMeta({
      de: {
        title: 'IMA Schelling Plattensägen-Service | Asamer',
        description:
          'Service für IMA Schelling Plattensägen in CZ, SK & HU: Wartung, Reparatur, Ersatzteile, Schulung. Über 30 Jahre Erfahrung – HKL, FH, FK, VH, VKS.',
        keywords: ['IMA Schelling', 'Plattenaufteilsäge', 'Service', 'Wartung', 'Reparatur', 'Ersatzteile', 'HKL', 'FH', 'FK', 'VKS', 'Asamer'],
      },
      en: {
        title: 'IMA Schelling Panel Saw Service | Asamer',
        description:
          'Service for IMA Schelling panel saws in CZ, SK & HU: maintenance, repair, spare parts, training. 30+ years of experience – HKL, FH, FK, VKS.',
        keywords: ['IMA Schelling', 'Panel saw', 'Service', 'Maintenance', 'Repair', 'Spare parts', 'HKL', 'FH', 'FK', 'VKS', 'Asamer'],
      },
      cz: {
        title: 'Servis formátovacích pil IMA Schelling | Asamer',
        description:
          'Servis formátovacích pil IMA Schelling pro CZ, SK a HU: údržba, opravy, náhradní díly, školení. Tým s více než 30 lety praxe – řady HKL, FH, FK, VH, VKS.',
        keywords: ['IMA Schelling', 'Formátovací pila', 'Servis', 'Údržba', 'Opravy', 'Náhradní díly', 'HKL', 'FH', 'FK', 'VKS', 'Asamer'],
      },
      sk: {
        title: 'Servis formátovacích píl IMA Schelling – 30+ rokov skúseností | Asamer',
        description:
          'Servis formátovacích píl IMA Schelling pre SK, CZ a HU: údržba, opravy, náhradné diely, školenia. Tím s viac než 30 rokmi praxe – rady HKL, FH, FK, VH, VKS.',
        keywords: ['IMA Schelling', 'Formátovacia píla', 'Servis', 'Údržba', 'Opravy', 'Náhradné diely', 'HKL', 'FH', 'FK', 'VKS', 'Asamer'],
      },
      hu: {
        title: 'IMA Schelling lapszabó fűrész szerviz – 30+ év tapasztalat | Asamer',
        description:
          'IMA Schelling lapszabó fűrészek szervize CZ, SK és HU területén: karbantartás, javítás, alkatrészek, oktatás. 30+ év tapasztalattal – HKL, FH, FK, VH, VKS sorozatok.',
        keywords: ['IMA Schelling', 'Lapszabó fűrész', 'Szerviz', 'Karbantartás', 'Javítás', 'Alkatrészek', 'HKL', 'FH', 'FK', 'VKS', 'Asamer'],
      },
    }),
  },
  financing: {
    slug: '/financovani',
    slugByLang: SLUG_TRANSLATIONS['/financovani'],
    meta: createMeta({
      de: {
        title: 'Maschinenfinanzierung – Leasing & Förderung | Asamer',
        description:
          'Maschinen finanzieren mit Raiffeisen Leasing: Finanzierungsleasing, Ratenkauf und EU-Förderung. Asamer Technologie – kostenlose Beratung für CZ, SK, HU.',
        keywords: ['Finanzierung', 'Raiffeisen Leasing', 'Förderung', 'Leasing', 'Maschinen'],
      },
      en: {
        title: 'Machine Financing – Leasing & EU Grants | Asamer',
        description:
          'Finance new or used machines via Raiffeisen Leasing, installment purchase and EU grants. Asamer Technologie – free consultation for CZ, SK, HU.',
        keywords: ['Financing', 'Raiffeisen Leasing', 'EU Grants', 'Leasing', 'Machinery'],
      },
      cz: {
        title: 'Financování strojů – Raiffeisen leasing, dotace a splátkový prodej | Asamer',
        description:
          'Financujte nové nebo použité stroje přes Raiffeisen Leasing, splátkový prodej nebo dotace OP TAK. Asamer Technologie – poradenství zdarma pro CZ, SK a HU.',
        keywords: ['Financování', 'Raiffeisen Leasing', 'Dotace', 'Leasing', 'Stroje'],
      },
      sk: {
        title: 'Financovanie strojov – Tatra Leasing, dotácie a splátky | Asamer',
        description:
          'Financujte stroje cez Tatra Leasing (Raiffeisen), splátky alebo dotácie z Programu Slovensko. Asamer – poradenstvo zdarma pre SK, CZ a HU.',
        keywords: ['Financovanie', 'Tatra Leasing', 'Dotácie', 'Leasing', 'Stroje'],
      },
      hu: {
        title: 'Gépfinanszírozás – Raiffeisen Lízing, pályázatok és részletfizetés | Asamer',
        description:
          'Finanszírozzon gépeket Raiffeisen Lízinggel, részletfizetéssel vagy GINOP Plusz pályázattal. Asamer – ingyenes tanácsadás CZ, SK és HU területén.',
        keywords: ['Finanszírozás', 'Raiffeisen Lízing', 'Pályázat', 'Lízing', 'Gépek'],
      },
    }),
  },
  solutions: {
    slug: '/reseni',
    slugByLang: SLUG_TRANSLATIONS['/reseni'],
    meta: createMeta({
      de: {
        title: 'Lösungen für Digitalisierung & Produktionssoftware | Asamer',
        description:
          'Maßgeschneiderte Lösungen für Holz-, Kunststoff- und Metallverarbeitung – Automatisierung, Software-Integration und Industrie 4.0 von Asamer.',
        keywords: ['Lösungen', 'Digitalisierung', 'ERP', 'MES', 'Smart Factory'],
      },
      en: {
        title: 'Solutions for Digital Production & Software | Asamer',
        description:
          'Custom solutions for wood, plastic and metal processing – automation, software integration and Industry 4.0 by Asamer.',
        keywords: ['Solutions', 'Digitalization', 'ERP', 'MES', 'Smart Factory'],
      },
      cz: {
        title: 'Řešení pro digitální výrobu a software | Asamer',
        description:
          'Řešení na míru pro zpracování dřeva, plastů a kovů – automatizace, integrace softwaru a Průmysl 4.0 od Asamer.',
        keywords: ['Řešení', 'Digitalizace', 'ERP', 'MES', 'Chytrá výroba'],
      },
      sk: {
        title: 'Riešenia pre digitálnu výrobu a softvér | Asamer',
        description:
          'Riešenia na mieru pre spracovanie dreva, plastov a kovov – automatizácia, integrácia softvéru a Priemysel 4.0 od Asamer.',
        keywords: ['Riešenia', 'Digitalizácia', 'ERP', 'MES', 'Chytrá výroba'],
      },
      hu: {
        title: 'Megoldások digitális gyártáshoz és szoftverhez | Asamer',
        description:
          'Testreszabott megoldások fa-, műanyag- és fémfeldolgozáshoz – automatizálás, szoftverintegráció és Ipar 4.0 az Asamertől.',
        keywords: ['Megoldások', 'Digitalizáció', 'ERP', 'MES', 'Ipar 4.0'],
      },
    }),
  },
  service: {
    slug: '/servis',
    slugByLang: SLUG_TRANSLATIONS['/servis'],
    meta: createMeta({
      de: {
        title: 'Service & Lifecycle Support | Asamer Technologie',
        description:
          'Asamer Service – Montage, Notfallservice und Ersatzteillieferung für OTT, Mayer, BARBARIC, Gannomat und weitere Hersteller in CZ, SK, HU.',
        keywords: ['Service', 'Support', 'Ersatzteile', 'Training', 'Automation'],
      },
      en: {
        title: 'Service & Lifecycle Support | Asamer Technology',
        description:
          'Asamer Service – installation, emergency service and spare parts for OTT, Mayer, BARBARIC, Gannomat and other manufacturers in CZ, SK, HU.',
        keywords: ['Service', 'Support', 'Spare parts', 'Training', 'Automation'],
      },
      cz: {
        title: 'Servis a lifecycle podpora | Asamer Technologie',
        description:
          'Servis Asamer – montáž, nouzový servis a dodávka náhradních dílů pro OTT, Mayer, BARBARIC, Gannomat a další výrobce v CZ, SK, HU.',
        keywords: ['Servis', 'Podpora', 'Náhradní díly', 'Školení', 'Automatizace'],
      },
      sk: {
        title: 'Servis a podpora | Asamer Technologie',
        description:
          'Servis Asamer – montáž, núdzový servis a dodávka náhradných dielov pre OTT, Mayer, BARBARIC, Gannomat a ďalších výrobcov.',
        keywords: ['Servis', 'Podpora', 'Náhradné diely', 'Školenie', 'Automatizácia'],
      },
      hu: {
        title: 'Szerviz és támogatás | Asamer Technologie',
        description:
          'Asamer Szerviz – szerelés, sürgősségi szerviz és alkatrész-szállítás OTT, Mayer, BARBARIC, Gannomat és más gyártókhoz.',
        keywords: ['Szerviz', 'Támogatás', 'Alkatrészek', 'Képzés', 'Automatizálás'],
      },
    }),
  },
  usedMachines: {
    slug: '/pouzite-stroje',
    slugByLang: SLUG_TRANSLATIONS['/pouzite-stroje'],
    image: '/images/used-machines/holz-her-1308xl-power.jpg',
    meta: createMeta({
      de: {
        title: 'Gebrauchtmaschinen & Refurbishment | Asamer',
        description:
          'Gebrauchtmaschinen für die Holz- und Plattenverarbeitung – technisch geprüfte Angebote von Asamer. Jetzt anfragen.',
        keywords: ['Gebrauchtmaschinen', 'Refurbished', 'Holzbearbeitung', 'Asamer'],
      },
      en: {
        title: 'Used Machines & Refurbishment | Asamer',
        description:
          'Used machines for wood and panel processing – technically verified offers from Asamer. Request now.',
        keywords: ['Used machines', 'Refurbished', 'Woodworking', 'Asamer'],
      },
      cz: {
        title: 'Použité stroje a repase | Asamer',
        description:
          'Použité stroje pro zpracování dřeva a desek – technicky ověřené nabídky od Asamer. Poptejte nyní.',
        keywords: ['Použité stroje', 'Repase', 'Dřevoobrábění', 'Asamer'],
      },
      sk: {
        title: 'Použité stroje a repasovanie | Asamer',
        description:
          'Použité stroje pre spracovanie dreva a dosiek – technicky overené ponuky od Asamer.',
        keywords: ['Použité stroje', 'Repasovanie', 'Drevoobrábacie', 'Asamer'],
      },
      hu: {
        title: 'Használt gépek és felújítás | Asamer',
        description:
          'Használt gépek fa- és lapfeldolgozáshoz – műszakilag ellenőrzött ajánlatok az Asamertől.',
        keywords: ['Használt gépek', 'Felújított', 'Famegmunkálás', 'Asamer'],
      },
    }),
  },
  contact: {
    slug: '/kontakt',
    slugByLang: SLUG_TRANSLATIONS['/kontakt'],
    meta: createMeta({
      de: {
        title: 'Kontakt & Standorte | Asamer Technologie',
        description:
          'Kontaktieren Sie Asamer Technologie GmbH in Lambach (AT) oder ASAMER s.r.o. in Brno (CZ) für Maschinen und Service.',
        keywords: ['Kontakt', 'Standort', 'Asamer', 'Service', 'Österreich'],
      },
      en: {
        title: 'Contact & Locations | Asamer Technology',
        description:
          'Contact Asamer Technologie GmbH in Lambach (AT) or ASAMER s.r.o. in Brno (CZ) for machines and service.',
        keywords: ['Contact', 'Locations', 'Asamer', 'Austria', 'Czech Republic'],
      },
      cz: {
        title: 'Kontakt a pobočky | Asamer Technologie',
        description:
          'Kontaktujte Asamer Technologie GmbH v Lambachu (AT) nebo ASAMER s.r.o. v Brně (CZ) pro stroje a servis.',
        keywords: ['Kontakt', 'Pobočka', 'Asamer', 'Rakousko', 'Česká republika'],
      },
      sk: {
        title: 'Kontakt a pobočky | Asamer Technologie',
        description:
          'Kontaktujte Asamer Technologie GmbH v Lambachu (AT) alebo ASAMER s.r.o. v Brne (CZ) pre stroje a servis.',
        keywords: ['Kontakt', 'Pobočka', 'Asamer', 'Rakúsko', 'Česká republika'],
      },
      hu: {
        title: 'Kapcsolat és telephelyek | Asamer Technologie',
        description:
          'Vegye fel a kapcsolatot az Asamer Technologie GmbH-val (Lambach, AT) vagy az ASAMER s.r.o.-val (Brno, CZ) gépekért és szervizért.',
        keywords: ['Kapcsolat', 'Telephely', 'Asamer', 'Ausztria', 'Csehország'],
      },
    }),
  },
  imprint: {
    slug: '/imprint',
    slugByLang: SLUG_TRANSLATIONS['/imprint'],
    meta: createMeta({
      de: {
        title: 'Impressum & Rechtliches | Asamer Technologie',
        description:
          'Impressum, Firmenbuchdaten und rechtliche Hinweise der Asamer Technologie GmbH und ASAMER s.r.o.',
        keywords: ['Impressum', 'UID', 'Asamer', 'Rechtliche Hinweise'],
      },
      en: {
        title: 'Imprint & Legal | Asamer Technology',
        description:
          'Imprint, company registration and legal information for Asamer Technologie GmbH and ASAMER s.r.o.',
        keywords: ['Imprint', 'Legal', 'VAT', 'Asamer'],
      },
      cz: {
        title: 'Impressum a právní informace | Asamer Technologie',
        description:
          'Impressum, firemní údaje a právní informace společností Asamer Technologie GmbH a ASAMER s.r.o.',
        keywords: ['Impressum', 'Právní informace', 'Asamer'],
      },
      sk: {
        title: 'Impressum a právne informácie | Asamer Technologie',
        description:
          'Impressum, firemné údaje a právne informácie spoločností Asamer Technologie GmbH a ASAMER s.r.o.',
        keywords: ['Impressum', 'Právne informácie', 'Asamer'],
      },
      hu: {
        title: 'Impresszum és jogi információk | Asamer Technologie',
        description:
          'Impresszum, cégjegyzékadatok és jogi információk az Asamer Technologie GmbH és ASAMER s.r.o. vállalatokról.',
        keywords: ['Impresszum', 'Jogi információk', 'Asamer'],
      },
    }),
  },
  privacy: {
    slug: '/privacy',
    slugByLang: SLUG_TRANSLATIONS['/privacy'],
    meta: createMeta({
      de: {
        title: 'Datenschutzerklärung | Asamer Technologie',
        description:
          'Datenschutzerklärung gemäß DSGVO: Informationen zur Verarbeitung personenbezogener Daten, Cookies, Analyse und Betroffenenrechten bei Asamer Technologie.',
        keywords: ['Datenschutz', 'DSGVO', 'Privacy', 'Cookies', 'Asamer'],
      },
      en: {
        title: 'Privacy Policy | Asamer Technology',
        description:
          'Privacy policy under GDPR: how Asamer Technology processes personal data, uses cookies and analytics, and your data subject rights.',
        keywords: ['Privacy', 'GDPR', 'Data protection', 'Cookies', 'Asamer'],
      },
      cz: {
        title: 'Ochrana osobních údajů | Asamer Technologie',
        description:
          'Zásady ochrany osobních údajů podle GDPR: zpracování osobních údajů, cookies, analytika a práva subjektů údajů ve společnosti Asamer Technologie.',
        keywords: ['Ochrana osobních údajů', 'GDPR', 'Cookies', 'Asamer'],
      },
      sk: {
        title: 'Ochrana osobných údajov | Asamer Technologie',
        description:
          'Zásady ochrany osobných údajov podľa GDPR: spracovanie osobných údajov, cookies, analytika a práva dotknutých osôb v spoločnosti Asamer Technologie.',
        keywords: ['Ochrana osobných údajov', 'GDPR', 'Cookies', 'Asamer'],
      },
      hu: {
        title: 'Adatvédelmi tájékoztató | Asamer Technologie',
        description:
          'Adatvédelmi tájékoztató a GDPR szerint: személyes adatok kezelése, cookie-k, analitika és érintetti jogok az Asamer Technologie-nál.',
        keywords: ['Adatvédelem', 'GDPR', 'Cookies', 'Asamer'],
      },
    }),
  },
  terms: {
    slug: '/terms',
    slugByLang: SLUG_TRANSLATIONS['/terms'],
    meta: createMeta({
      de: {
        title: 'AGB – Allgemeine Geschäftsbedingungen | Asamer Technologie',
        description:
          'Allgemeine Geschäftsbedingungen der Asamer Technologie GmbH und ASAMER s.r.o. für den Verkauf, die Installation und den Service industrieller Maschinen.',
        keywords: ['AGB', 'Geschäftsbedingungen', 'Asamer', 'Vertragsbedingungen'],
      },
      en: {
        title: 'Terms & Conditions | Asamer Technology',
        description:
          'General terms and conditions of Asamer Technologie GmbH and ASAMER s.r.o. for the sale, installation and service of industrial machinery.',
        keywords: ['Terms', 'Conditions', 'Asamer', 'Legal'],
      },
      cz: {
        title: 'Obchodní podmínky | Asamer Technologie',
        description:
          'Obchodní podmínky společností Asamer Technologie GmbH a ASAMER s.r.o. pro prodej, instalaci a servis průmyslových strojů.',
        keywords: ['Obchodní podmínky', 'Asamer', 'Smluvní podmínky'],
      },
      sk: {
        title: 'Obchodné podmienky | Asamer Technologie',
        description:
          'Obchodné podmienky spoločností Asamer Technologie GmbH a ASAMER s.r.o. pre predaj, inštaláciu a servis priemyselných strojov.',
        keywords: ['Obchodné podmienky', 'Asamer', 'Zmluvné podmienky'],
      },
      hu: {
        title: 'Általános szerződési feltételek | Asamer Technologie',
        description:
          'Az Asamer Technologie GmbH és az ASAMER s.r.o. általános szerződési feltételei ipari gépek értékesítéséhez, telepítéséhez és szervizéhez.',
        keywords: ['ÁSZF', 'Szerződési feltételek', 'Asamer'],
      },
    }),
  },
  faq: {
    slug: '/faq',
    slugByLang: SLUG_TRANSLATIONS['/faq'],
    meta: createMeta({
      cz: {
        title: 'Ratgeber & FAQ – Znalostní báze pro zpracování dřeva | Asamer',
        description:
          'Průvodci a odpovědi na nejčastější otázky: výběr olepovačky hran, PUR vs EVA, automatizace skladu, dotace 2026, financování a použité stroje. 30 let praxe Asamer.',
        keywords: ['Ratgeber', 'FAQ', 'Olepovačka hran', 'PUR EVA', 'Automatizace', 'Dotace', 'Použité stroje'],
      },
      sk: {
        title: 'Sprievodcovia & FAQ – Vedomostná báza pre spracovanie dreva | Asamer',
        description:
          'Sprievodcovia a odpovede na najčastejšie otázky: výber olepovačky hrán, PUR vs EVA, automatizácia skladu, dotácie 2026, financovanie a použité stroje. 30 rokov praxe Asamer.',
        keywords: ['Sprievodca', 'FAQ', 'Olepovačka hrán', 'PUR EVA', 'Automatizácia', 'Dotácie', 'Použité stroje'],
      },
      de: {
        title: 'Ratgeber & FAQ – Wissensbasis für Holzbearbeitung | Asamer',
        description:
          'Ratgeber und Antworten auf die häufigsten Fragen: Kantenanleimmaschine wählen, PUR vs EVA, Lagerautomatisierung, Förderung 2026, Finanzierung und Gebrauchtmaschinen. 30 Jahre Asamer Praxis.',
        keywords: ['Ratgeber', 'FAQ', 'Kantenanleimmaschine', 'PUR EVA', 'Automatisierung', 'Förderung', 'Gebrauchtmaschinen'],
      },
      en: {
        title: 'Guides & FAQ – Knowledge Base for Wood Processing | Asamer',
        description:
          'Guides and answers to the most common questions: choosing an edgebander, PUR vs EVA, warehouse automation, 2026 funding, financing and used machines. 30 years of Asamer experience.',
        keywords: ['Guide', 'FAQ', 'Edgebander', 'PUR EVA', 'Automation', 'Funding', 'Used machines'],
      },
      hu: {
        title: 'Útmutatók & GYIK – Faipari tudásbázis | Asamer',
        description:
          'Útmutatók és válaszok a leggyakoribb kérdésekre: élzárógép-választás, PUR vs EVA, raktárautomatizálás, 2026-os támogatás, finanszírozás és használt gépek. Asamer 30 éves tapasztalat.',
        keywords: ['Útmutató', 'GYIK', 'Élzárógép', 'PUR EVA', 'Automatizálás', 'Támogatás', 'Használt gépek'],
      },
    }),
  },
  guidePurVsEva: {
    slug: '/ratgeber/pur-vs-eva',
    slugByLang: SLUG_TRANSLATIONS['/ratgeber/pur-vs-eva'],
    meta: createMeta({
      de: {
        title: 'PUR vs EVA Leim – Leitfaden zur Leimtechnologie | Asamer',
        description:
          'PUR oder EVA Leim für Kantenanleimmaschinen? Vergleich der Leimtechnologien, Vor- und Nachteile, Empfehlung nach Betriebsgröße. OTT-Maschinen von Asamer.',
        keywords: ['PUR', 'EVA', 'Leimtechnologie', 'Kantenanleimmaschine', 'OTT', 'Hotmelt'],
      },
      en: {
        title: 'PUR vs EVA Glue – Guide to Gluing Technology | Asamer',
        description:
          'PUR or EVA glue for edgebanding machines? Comparison of gluing technologies, pros and cons, recommendation by operation size. OTT machines from Asamer.',
        keywords: ['PUR', 'EVA', 'Gluing technology', 'Edgebander', 'OTT', 'Hotmelt'],
      },
      cz: {
        title: 'PUR vs EVA lepidlo – Průvodce technologií lepení | Asamer',
        description:
          'PUR nebo EVA lepidlo pro olepovačky hran? Srovnání technologií lepení, výhody a nevýhody, doporučení dle velikosti provozu. Stroje OTT od Asamer.',
        keywords: ['PUR', 'EVA', 'Technologie lepení', 'Olepovačka hran', 'OTT', 'Hotmelt'],
      },
      sk: {
        title: 'PUR vs EVA lepidlo – Sprievodca technológiou lepenia | Asamer',
        description:
          'PUR alebo EVA lepidlo pre olepovačky hrán? Porovnanie technológií lepenia, výhody a nevýhody, odporúčanie podľa veľkosti prevádzky. Stroje OTT od Asamer.',
        keywords: ['PUR', 'EVA', 'Technológia lepenia', 'Olepovačka hrán', 'OTT', 'Hotmelt'],
      },
      hu: {
        title: 'PUR vs EVA ragasztó – Ragasztási technológia útmutató | Asamer',
        description:
          'PUR vagy EVA ragasztó élzárógépekhez? Ragasztási technológiák összehasonlítása, előnyök és hátrányok, javaslat üzemméret szerint. OTT gépek az Asamertől.',
        keywords: ['PUR', 'EVA', 'Ragasztási technológia', 'Élzárógép', 'OTT', 'Hotmelt'],
      },
    }),
  },
  guideEdgebander: {
    slug: '/ratgeber/kantenanleimmaschine-waehlen',
    slugByLang: SLUG_TRANSLATIONS['/ratgeber/kantenanleimmaschine-waehlen'],
    meta: createMeta({
      cz: {
        title: 'Jakou olepovačku hran koupit? Průvodce výběrem 2026 | Asamer',
        description:
          'Jakou olepovačku hran koupit? Průvodce výběrem podle velikosti provozu, materiálů a rozpočtu. Modely OTT, použité vs nové, PUR vs EVA, FAQ. Asamer – autorizovaný prodejce OTT pro ČR, SR a Maďarsko.',
        keywords: ['Olepovačka hran', 'Jakou olepovačku koupit', 'OTT', 'Truhlárna', 'PUR', 'EVA', 'Použitá olepovačka'],
      },
      sk: {
        title: 'Akú olepovačku hrán kúpiť? Sprievodca výberom 2026 | Asamer',
        description:
          'Akú olepovačku hrán kúpiť? Sprievodca výberom podľa veľkosti prevádzky, materiálov a rozpočtu. Modely OTT, použité vs nové, PUR vs EVA, FAQ. Asamer – autorizovaný predajca OTT pre SR, ČR a Maďarsko.',
        keywords: ['Olepovačka hrán', 'Akú olepovačku kúpiť', 'OTT', 'Stolárstvo', 'PUR', 'EVA', 'Použitá olepovačka'],
      },
      de: {
        title: 'Welche Kantenanleimmaschine kaufen? Ratgeber 2026 | Asamer',
        description:
          'Welche Kantenanleimmaschine kaufen? Ratgeber für die Auswahl nach Betriebsgröße, Materialien und Budget. OTT-Modelle, gebraucht vs neu, PUR vs EVA, FAQ. Asamer – autorisierter OTT-Händler für CZ, SK und HU.',
        keywords: ['Kantenanleimmaschine', 'kaufen', 'OTT', 'Tischlerei', 'PUR', 'EVA', 'Gebrauchtmaschine'],
      },
      en: {
        title: 'Which Edgebander to Buy? Buying Guide 2026 | Asamer',
        description:
          'Which edgebander to buy? A buying guide based on operation size, materials and budget. OTT models, used vs new, PUR vs EVA, FAQ. Asamer – authorized OTT dealer for CZ, SK and HU.',
        keywords: ['Edgebander', 'Buy edgebander', 'OTT', 'Joinery', 'PUR', 'EVA', 'Used edgebander'],
      },
      hu: {
        title: 'Milyen élzárógépet vegyek? Vásárlási útmutató 2026 | Asamer',
        description:
          'Milyen élzárógépet vegyek? Vásárlási útmutató üzemméret, anyagok és költségvetés szerint. OTT modellek, használt vs új, PUR vs EVA, GYIK. Asamer – hivatalos OTT-viszonteladó CZ, SK és HU számára.',
        keywords: ['Élzárógép', 'Milyen élzárógépet', 'OTT', 'Asztalosmühely', 'PUR', 'EVA', 'Használt élzárógép'],
      },
    }),
  },
  guideVacuumLifter: {
    slug: '/pruvodce/vakuovy-zvedak-holz',
    slugByLang: SLUG_TRANSLATIONS['/pruvodce/vakuovy-zvedak-holz'],
    meta: createMeta({
      de: {
        title: 'Barbaric Vakuumheber für Holz – Mitarbeiter entlasten | Asamer',
        description:
          'Vakuumheber für Kantenanleimmaschine, Plattensäge & Co.: Eine Person bewegt schwere Platten ergonomisch und sicher. Arbeitsschutz, schneller ROI, bis 50 % Förderung. Asamer berät Sie gerne.',
        keywords: ['Vakuumheber', 'Barbaric', 'UniWood UWL', 'Plattenhandling', 'Ergonomie', 'Arbeitsschutz', 'Kantenanleimmaschine'],
      },
      en: {
        title: 'Barbaric Vacuum Lifters for Wood – Relieve Your Team | Asamer',
        description:
          'Vacuum lifters for edge banders, panel saws & more: one person moves heavy panels ergonomically and safely. Worker protection, fast ROI, up to 50% funding. Asamer is glad to advise.',
        keywords: ['Vacuum lifter', 'Barbaric', 'UniWood UWL', 'Panel handling', 'Ergonomics', 'Worker safety', 'Edge bander'],
      },
      cz: {
        title: 'Vakuové zvedáky Barbaric pro dřevo – ulevte týmu | Asamer',
        description:
          'Vakuové zvedáky pro olepovačku hran, formátovací pilu a další: jeden člověk přesune těžké desky ergonomicky a bezpečně. Ochrana zdraví, rychlá návratnost, až 50 % dotace. Asamer rád poradí.',
        keywords: ['Vakuový zvedák', 'Barbaric', 'UniWood UWL', 'Manipulace s deskami', 'Ergonomie', 'Ochrana zdraví', 'Olepovačka hran'],
      },
      sk: {
        title: 'Vákuové zdviháky Barbaric pre drevo – uľavte tímu | Asamer',
        description:
          'Vákuové zdviháky pre olepovačku hrán, formátovaciu pílu a ďalšie: jeden človek presunie ťažké dosky ergonomicky a bezpečne. Ochrana zdravia, rýchla návratnosť, až 50 % dotácia. Asamer rád poradí.',
        keywords: ['Vákuový zdvihák', 'Barbaric', 'UniWood UWL', 'Manipulácia s doskami', 'Ergonómia', 'Ochrana zdravia', 'Olepovačka hrán'],
      },
      hu: {
        title: 'Barbaric vákuumemelők fához – tehermentesítse csapatát | Asamer',
        description:
          'Vákuumemelők élzárógéphez, formátumfűrészhez és máshoz: egy ember ergonomikusan és biztonságosan mozgat nehéz lapokat. Munkavédelem, gyors megtérülés, akár 50% támogatás. Az Asamer szívesen segít.',
        keywords: ['Vákuumemelő', 'Barbaric', 'UniWood UWL', 'Lapkezelés', 'Ergonómia', 'Munkavédelem', 'Élzárógép'],
      },
    }),
  },
  guideWarehouseAutomation: {
    slug: '/ratgeber/lagerautomatisierung',
    slugByLang: SLUG_TRANSLATIONS['/ratgeber/lagerautomatisierung'],
    meta: createMeta({
      de: {
        title: 'Lagerautomatisierung – Wann lohnt sie sich? | Asamer',
        description:
          'Lagerautomatisierung mit BARBARIC: bis -40% Lagerkosten, 99,9% Bestandsgenauigkeit. ROI-Rechnung, Einsatzbereiche und Systeme für die Holzverarbeitung.',
        keywords: ['Lagerautomatisierung', 'BARBARIC', 'Flächenlager', 'ROI', 'Holzverarbeitung'],
      },
      en: {
        title: 'Warehouse Automation – When Does It Pay Off? | Asamer',
        description:
          'Warehouse automation with BARBARIC: up to -40% storage costs, 99.9% inventory accuracy. ROI calculation, use cases and systems for wood processing.',
        keywords: ['Warehouse automation', 'BARBARIC', 'Panel storage', 'ROI', 'Wood processing'],
      },
      cz: {
        title: 'Automatizace skladu – Kdy se vyplatí? | Asamer',
        description:
          'Automatizace skladu s BARBARIC: až -40 % skladových nákladů, 99,9 % přesnost zásob. ROI kalkulace, oblasti nasazení a systémy pro zpracování dřeva.',
        keywords: ['Automatizace skladu', 'BARBARIC', 'Plošný sklad', 'ROI', 'Zpracování dřeva'],
      },
      sk: {
        title: 'Automatizácia skladu – Kedy sa oplatí? | Asamer',
        description:
          'Automatizácia skladu s BARBARIC: až -40 % skladových nákladov, 99,9 % presnosť zásob. ROI kalkulácia, oblasti nasadenia a systémy pre spracovanie dreva.',
        keywords: ['Automatizácia skladu', 'BARBARIC', 'Plošný sklad', 'ROI', 'Spracovanie dreva'],
      },
      hu: {
        title: 'Raktárautomatizálás – Mikor éri meg? | Asamer',
        description:
          'Raktárautomatizálás BARBARIC rendszerekkel: akár -40% raktárköltség, 99,9% készletpontosság. ROI-számítás, alkalmazási területek és rendszerek fafeldolgozáshoz.',
        keywords: ['Raktárautomatizálás', 'BARBARIC', 'Lapraktár', 'ROI', 'Fafeldolgozás'],
      },
    }),
  },
  guidePanelSawComparison: {
    slug: '/ratgeber/formatsaege-aluminium-vs-holz',
    slugByLang: SLUG_TRANSLATIONS['/ratgeber/formatsaege-aluminium-vs-holz'],
    meta: createMeta({
      de: {
        title: 'Plattensäge Holz oder Alu? Mayer Kappa vs Advanced | Asamer',
        description:
          'Plattensäge für Holz oder Aluminium – welche Formatsäge passt? Vergleich Mayer Kappa Automatic vs Advanced Line: Sägeblatt, Vorschub, Toleranzen, Kühlung.',
        keywords: ['Plattensäge', 'Formatsäge', 'Aluminium', 'Holz', 'Mayer Kappa', 'Mayer Advanced Line', 'Asamer'],
      },
      en: {
        title: 'Panel Saw: Wood vs Aluminium – Mayer Kappa | Asamer',
        description:
          'Panel saw for wood or aluminium – which one fits? Comparison of Mayer Kappa Automatic and Advanced Line: blade, feed, tolerances, coolant, pressure beam.',
        keywords: ['Panel saw', 'Aluminium', 'Wood', 'Mayer Kappa', 'Mayer Advanced Line', 'Sizing saw', 'Asamer'],
      },
      cz: {
        title: 'Formátovací pila: hliník nebo dřevo? Mayer Kappa | Asamer',
        description:
          'Formátovací pila na hliník nebo dřevo – kterou zvolit? Srovnání Mayer Kappa Automatic a Advanced Line: pilový kotouč, posuv, tolerance, chlazení.',
        keywords: ['Formátovací pila', 'Hliník', 'Dřevo', 'Mayer Kappa', 'Mayer Advanced Line', 'Nářezové centrum', 'Asamer'],
      },
      sk: {
        title: 'Formátovacia píla na hliník alebo drevo? Mayer Kappa vs Advanced Line | Asamer',
        description:
          'Formátovacia píla na hliník alebo drevo – ktorú zvoliť? Porovnanie Mayer Kappa Automatic a Advanced Line: pílový kotúč, posuv, tolerancie, chladenie.',
        keywords: ['Formátovacia píla', 'Hliník', 'Drevo', 'Mayer Kappa', 'Mayer Advanced Line', 'Asamer'],
      },
      hu: {
        title: 'Lapszabó fűrész fához vagy alumíniumhoz? Mayer Kappa vs Advanced Line | Asamer',
        description:
          'Lapszabó fűrész fához vagy alumíniumhoz – melyik a megfelelő? Mayer Kappa Automatic és Advanced Line összehasonlítása: fűrészlap, előtolás, tűrés.',
        keywords: ['Lapszabó fűrész', 'Alumínium', 'Fa', 'Mayer Kappa', 'Mayer Advanced Line', 'Asamer'],
      },
    }),
  },
  guideFundingCz: {
    slug: '/ratgeber/foerderung-holzbearbeitung-cz-2026',
    slugByLang: SLUG_TRANSLATIONS['/ratgeber/foerderung-holzbearbeitung-cz-2026'],
    meta: createMeta({
      de: {
        title: 'Förderung Holzbearbeitung CZ 2026 – OP TAK, NRB | Asamer',
        description:
          'Förderung für Holzbearbeitungsmaschinen in Tschechien 2026: OP TAK Technologie, NRB Investitionskredite, InvestEU. Förderquoten, Timing, Dokumente.',
        keywords: ['Förderung CZ 2026', 'OP TAK', 'NRB', 'InvestEU', 'Holzbearbeitung', 'Dotace stroje', 'Asamer'],
      },
      en: {
        title: 'EU Funding for Woodworking Machines in CZ 2026 – OP TAK, NRB | Asamer',
        description:
          'Funding for woodworking machinery in the Czech Republic 2026: OP TAK Technologie, NRB loans, InvestEU. Refund rates, timing and required documentation.',
        keywords: ['EU Funding CZ', 'OP TAK', 'NRB', 'InvestEU', 'Woodworking', 'Machine grant', 'Asamer'],
      },
      cz: {
        title: 'Dotace na stroje 2026 – OP TAK, NRB, InvestEU pro dřevozpracující podniky | Asamer',
        description:
          'Dotace na dřevoobráběcí stroje v ČR 2026: OP TAK Technologie, úvěry NRB, InvestEU. Výše podpory, harmonogram a požadované dokumenty – poradenství Asamer.',
        keywords: ['Dotace stroje 2026', 'OP TAK', 'Technologie výrobní podniky', 'NRB', 'InvestEU', 'Dřevozpracující průmysl'],
      },
      sk: {
        title: 'Dotácie na stroje v ČR 2026 – OP TAK, NRB, InvestEU | Asamer',
        description:
          'Dotácie na drevoobrábacie stroje v Česku 2026: OP TAK Technologie, úvery NRB, InvestEU. Výška podpory, harmonogram a potrebné dokumenty.',
        keywords: ['Dotácie stroje', 'OP TAK', 'NRB', 'InvestEU', 'Drevoobrábacie stroje', 'Asamer'],
      },
      hu: {
        title: 'Támogatások famegmunkáló gépekre Csehországban 2026 – OP TAK, NRB | Asamer',
        description:
          'Támogatások famegmunkáló gépekre Csehországban 2026: OP TAK Technologie, NRB hitelek, InvestEU. Támogatási arányok, ütemterv és dokumentáció.',
        keywords: ['Pályázat gépekre', 'OP TAK', 'NRB', 'InvestEU', 'Famegmunkálás', 'Asamer'],
      },
    }),
  },
};

export const getSeoConfig = (key: SeoRouteKey): SeoRouteConfig =>
  SEO_ROUTES[key] ?? SEO_ROUTES.home;

export const getFallbackMeta = (lang: Language): RouteMeta => {
  const fallback = SEO_ROUTES.home.meta[lang] ?? SEO_ROUTES.home.meta[DEFAULT_LANGUAGE];
  return fallback;
};
