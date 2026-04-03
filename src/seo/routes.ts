import type { Language } from '../i18n';
import { DEFAULT_LANGUAGE } from '../lib/language';
import { SLUG_TRANSLATIONS } from '../lib/slugs';

export const DEFAULT_OG_IMAGE = '/images/automation-robot.jpg';

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
  | 'imprint';

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
};

export const getSeoConfig = (key: SeoRouteKey): SeoRouteConfig =>
  SEO_ROUTES[key] ?? SEO_ROUTES.home;

export const getFallbackMeta = (lang: Language): RouteMeta => {
  const fallback = SEO_ROUTES.home.meta[lang] ?? SEO_ROUTES.home.meta[DEFAULT_LANGUAGE];
  return fallback;
};
