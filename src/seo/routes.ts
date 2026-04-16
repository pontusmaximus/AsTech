import type { Language } from '../i18n';
import { DEFAULT_LANGUAGE } from '../lib/language';
import { SLUG_TRANSLATIONS } from '../lib/slugs';

export const DEFAULT_OG_IMAGE = 'https://asamer.cz/images/automation-robot.jpg';

export type SeoRouteKey =
  | 'home'
  | 'mayer'
  | 'ott'
  | 'barbaric'
  | 'gannomat'
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
  | 'guideFundingCz';

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
        title: 'Barbaric Automatisierung & Plattenhandling – Händler CZ, SK, HU | Asamer',
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
  financing: {
    slug: '/financovani',
    slugByLang: SLUG_TRANSLATIONS['/financovani'],
    meta: createMeta({
      de: {
        title: 'Maschinenfinanzierung – Raiffeisen Leasing, Förderung & Ratenkauf | Asamer',
        description:
          'Maschinen finanzieren mit Raiffeisen Leasing: Finanzierungsleasing, Ratenkauf und EU-Förderung. Asamer Technologie – kostenlose Beratung für CZ, SK, HU.',
        keywords: ['Finanzierung', 'Raiffeisen Leasing', 'Förderung', 'Leasing', 'Maschinen'],
      },
      en: {
        title: 'Machine Financing – Raiffeisen Leasing, EU Grants & Installments | Asamer',
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
      de: {
        title: 'FAQ – Häufige Fragen zu Holzbearbeitungsmaschinen | Asamer',
        description:
          'Antworten auf häufige Fragen zu Kantenanleimmaschinen, Lagerautomatisierung, PUR vs EVA, Service, Finanzierung und Gebrauchtmaschinen. Asamer Technologie.',
        keywords: ['FAQ', 'Kantenanleimmaschine', 'PUR EVA', 'Service', 'Finanzierung', 'Gebrauchtmaschinen'],
      },
      en: {
        title: 'FAQ – Frequently Asked Questions about Woodworking Machines | Asamer',
        description:
          'Answers to common questions about edgebanding machines, warehouse automation, PUR vs EVA, service, financing and used machines. Asamer Technology.',
        keywords: ['FAQ', 'Edgebander', 'PUR EVA', 'Service', 'Financing', 'Used machines'],
      },
      cz: {
        title: 'FAQ – Časté dotazy k dřevoobráběcím strojům | Asamer',
        description:
          'Odpovědi na časté dotazy k olepovačkám hran, automatizaci skladu, PUR vs EVA, servisu, financování a použitým strojům. Asamer Technologie.',
        keywords: ['FAQ', 'Olepovačka hran', 'PUR EVA', 'Servis', 'Financování', 'Použité stroje'],
      },
      sk: {
        title: 'FAQ – Časté otázky k drevoobrábacím strojom | Asamer',
        description:
          'Odpovede na časté otázky k olepovačkám hrán, automatizácii skladu, PUR vs EVA, servisu, financovaniu a použitým strojom. Asamer Technologie.',
        keywords: ['FAQ', 'Olepovačka hrán', 'PUR EVA', 'Servis', 'Financovanie', 'Použité stroje'],
      },
      hu: {
        title: 'FAQ – Gyakran ismételt kérdések famegmunkáló gépekről | Asamer',
        description:
          'Válaszok a gyakori kérdésekre élzárógépekről, raktárautomatizálásról, PUR vs EVA, szervizről, finanszírozásról és használt gépekről. Asamer Technologie.',
        keywords: ['FAQ', 'Élzárógép', 'PUR EVA', 'Szerviz', 'Finanszírozás', 'Használt gépek'],
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
      de: {
        title: 'Kantenanleimmaschine nach Betriebsgröße wählen | Asamer',
        description:
          'Welche Kantenanleimmaschine passt zu Ihrem Betrieb? Empfehlung für kleine Tischlereien, Mittelbetriebe und industrielle Fertigung. OTT-Modelle im Vergleich.',
        keywords: ['Kantenanleimmaschine', 'Betriebsgröße', 'OTT', 'Tischlerei', 'Vergleich'],
      },
      en: {
        title: 'Choose an Edgebander by Operation Size | Asamer',
        description:
          'Which edgebanding machine fits your workshop? Recommendations for small joineries, mid-size operations and industrial production. OTT models compared.',
        keywords: ['Edgebander', 'Operation size', 'OTT', 'Joinery', 'Comparison'],
      },
      cz: {
        title: 'Výběr olepovačky hran podle velikosti provozu | Asamer',
        description:
          'Která olepovačka hran se hodí pro váš provoz? Doporučení pro malé truhlárny, střední provozy a průmyslovou výrobu. Srovnání modelů OTT.',
        keywords: ['Olepovačka hran', 'Velikost provozu', 'OTT', 'Truhlárna', 'Srovnání'],
      },
      sk: {
        title: 'Výber olepovačky hrán podľa veľkosti prevádzky | Asamer',
        description:
          'Ktorá olepovačka hrán sa hodí pre vašu prevádzku? Odporúčanie pre malé stolárne, stredné prevádzky a priemyselnú výrobu. Porovnanie modelov OTT.',
        keywords: ['Olepovačka hrán', 'Veľkosť prevádzky', 'OTT', 'Stolárňa', 'Porovnanie'],
      },
      hu: {
        title: 'Élzárógép választása üzemméret szerint | Asamer',
        description:
          'Melyik élzárógép illik az Ön üzeméhez? Javaslat kis asztalosmühelyek, középüzemek és ipari gyártás számára. OTT modellek összehasonlítása.',
        keywords: ['Élzárógép', 'Üzemméret', 'OTT', 'Asztalosmühely', 'Összehasonlítás'],
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
        title: 'Plattensäge für Holz oder Alu? Mayer Kappa vs Advanced Line | Asamer',
        description:
          'Plattensäge für Holz oder Aluminium – welche Formatsäge passt? Vergleich Mayer Kappa Automatic vs Advanced Line: Sägeblatt, Vorschub, Toleranzen, Kühlung.',
        keywords: ['Plattensäge', 'Formatsäge', 'Aluminium', 'Holz', 'Mayer Kappa', 'Mayer Advanced Line', 'Asamer'],
      },
      en: {
        title: 'Panel Saw for Wood vs Aluminium – Mayer Kappa vs Advanced Line | Asamer',
        description:
          'Panel saw for wood or aluminium – which one fits? Comparison of Mayer Kappa Automatic and Advanced Line: blade, feed, tolerances, coolant, pressure beam.',
        keywords: ['Panel saw', 'Aluminium', 'Wood', 'Mayer Kappa', 'Mayer Advanced Line', 'Sizing saw', 'Asamer'],
      },
      cz: {
        title: 'Formátovací pila na hliník nebo dřevo? Mayer Kappa vs Advanced Line | Asamer',
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
        title: 'Förderung Holzbearbeitung CZ 2026 – OP TAK, NRB, InvestEU | Asamer',
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
