import type { Language } from '../i18n';
import { DEFAULT_LANGUAGE } from '../lib/language';

export const DEFAULT_OG_IMAGE = '/images/automation-robot.jpg';

export type SeoRouteKey =
  | 'home'
  | 'mayer'
  | 'ott'
  | 'barbaric'
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
  image?: string;
  meta: Record<Language, RouteMeta>;
}

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
          'Asamer Technologie – Maschinen, Automatisierung und Service für Holz-, Kunststoff- und Metallbetriebe in Mitteleuropa. Über 30 Jahre Erfahrung.',
        keywords: ['Asamer', 'Technologie', 'Automation', 'Holzbearbeitung', 'Maschinen'],
      },
      en: {
        title: 'Asamer Technology | Machinery, Automation & Service',
        description:
          'Asamer Technologie – machines, automation and service for wood, plastic and metal industries in Central Europe. 30+ years of experience.',
        keywords: ['Asamer', 'Technology', 'Automation', 'Machinery', 'Service'],
      },
      cz: {
        title: 'Asamer Technologie | Stroje, automatizace a servis',
        description:
          'Asamer Technologie – stroje, automatizace a servis pro zpracování dřeva, plastů a kovů ve střední Evropě. Přes 30 let zkušeností.',
        keywords: ['Asamer', 'Technologie', 'Automatizace', 'Stroje', 'Servis'],
      },
      sk: {
        title: 'Asamer Technologie | Stroje, automatizácia a servis',
        description:
          'Asamer Technologie – stroje, automatizácia a servis pre spracovanie dreva, plastov a kovov v strednej Európe. Viac ako 30 rokov skúseností.',
        keywords: ['Asamer', 'Technologie', 'Automatizácia', 'Stroje', 'Servis'],
      },
      hu: {
        title: 'Asamer Technologie | Gépek, automatizálás és szerviz',
        description:
          'Asamer Technologie – gépek, automatizálás és szerviz fa-, műanyag- és fémipar számára Közép-Európában. Több mint 30 éves tapasztalat.',
        keywords: ['Asamer', 'Technologie', 'Automatizálás', 'Gépek', 'Szerviz'],
      },
    }),
  },
  mayer: {
    slug: '/mayer',
    image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__64214__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/plattensaege-kappaautomatic80-mayer-feldergroup.png',
    meta: createMeta({
      de: {
        title: 'Mayer Plattenaufteiltechnik | Asamer Technologie',
        description:
          'Mayer Plattenaufteilsägen – Kappa Automatic & Advanced Line für Holz, Kunststoff und Metall. Präzision für die Serienproduktion.',
        keywords: ['Mayer', 'Kappa Automatic', 'Plattensäge', 'CNC Sägen', 'Asamer'],
      },
      en: {
        title: 'Mayer Panel Cutting Technology | Asamer Technology',
        description:
          'Mayer panel saws – Kappa Automatic & Advanced Line for wood, plastic and metal. Precision cutting for serial production.',
        keywords: ['Mayer', 'Panel saw', 'Kappa Automatic', 'Advanced Line', 'Automation'],
      },
      cz: {
        title: 'Mayer technologie dělení desek | Asamer Technologie',
        description:
          'Mayer pily na desky – řady Kappa Automatic & Advanced Line pro dřevo, plast a kov. Přesnost pro sériovou výrobu.',
        keywords: ['Mayer', 'Pily na desky', 'Kappa Automatic', 'Advanced Line', 'Automatizace'],
      },
      sk: {
        title: 'Mayer technológia delenia dosiek | Asamer Technologie',
        description:
          'Mayer pily na dosky – rady Kappa Automatic & Advanced Line pre drevo, plast a kov. Presnosť pre sériovú výrobu.',
        keywords: ['Mayer', 'Píly na dosky', 'Kappa Automatic', 'Advanced Line', 'Automatizácia'],
      },
      hu: {
        title: 'Mayer lapszabász technológia | Asamer Technologie',
        description:
          'Mayer lapszabász gépek – Kappa Automatic & Advanced Line fához, műanyaghoz és fémhez. Precizitás sorozatgyártáshoz.',
        keywords: ['Mayer', 'Lapszabász', 'Kappa Automatic', 'Advanced Line', 'Automatizálás'],
      },
    }),
  },
  ott: {
    slug: '/ott',
    image: 'https://www.ottpaul.com/fileadmin/_processed_/c/7/csm_pacific-plus_4a95031bd4.png',
    meta: createMeta({
      de: {
        title: 'OTT Kantenleimer & LASER Hydrofuse | Asamer',
        description:
          'OTT Kantenleimmaschinen mit PUR und LASER Hydrofuse Technologie – fugenlose Kantenverbindungen für die Möbelindustrie. Jetzt anfragen.',
        keywords: ['OTT', 'Kantenleimer', 'PUR', 'Laser', 'Hydrofuse'],
      },
      en: {
        title: 'OTT Edgebanders & LASER Hydrofuse | Asamer',
        description:
          'OTT edge banding machines with PUR and LASER Hydrofuse technology – seamless edges for furniture manufacturers. Request a quote.',
        keywords: ['OTT', 'Edgebander', 'PUR', 'Laser', 'Furniture'],
      },
      cz: {
        title: 'OTT olepovačky hran & LASER Hydrofuse | Asamer',
        description:
          'OTT olepovačky hran s technologií PUR a LASER Hydrofuse – bezešvé spoje pro nábytkářský průmysl. Kontaktujte nás.',
        keywords: ['OTT', 'Olepovačka hran', 'PUR', 'Laser', 'Nábytek'],
      },
      sk: {
        title: 'OTT olepovačky hrán & LASER Hydrofuse | Asamer',
        description:
          'OTT olepovačky hrán s technológiou PUR a LASER Hydrofuse – bezšvíkové spoje pre nábytkársky priemysel.',
        keywords: ['OTT', 'Olepovačka hrán', 'PUR', 'Laser', 'Nábytok'],
      },
      hu: {
        title: 'OTT élzárógépek & LASER Hydrofuse | Asamer',
        description:
          'OTT élzárógépek PUR és LASER Hydrofuse technológiával – varratnélküli élek a bútoripar számára.',
        keywords: ['OTT', 'Élzárógép', 'PUR', 'Laser', 'Bútor'],
      },
    }),
  },
  barbaric: {
    slug: '/barbaric',
    image: 'https://www.barbaric.at/fileadmin/_processed_/1/1/csm_CSF_Multilevel-Wegerer-7837_web_9285d8be71.png',
    meta: createMeta({
      de: {
        title: 'BARBARIC Handling & Lagertechnik | Asamer',
        description:
          'BARBARIC Handlingsysteme – von Vakuumhebern bis zu vollautomatischen Flächenlagern für die Plattenverarbeitung.',
        keywords: ['BARBARIC', 'Handling', 'Lagersystem', 'Automation', 'Kran'],
      },
      en: {
        title: 'BARBARIC Handling & Storage Systems | Asamer',
        description:
          'BARBARIC handling systems – from vacuum lifters to fully automated flat storage systems for panel processing.',
        keywords: ['BARBARIC', 'Handling', 'Storage system', 'Vacuum lifter', 'Automation'],
      },
      cz: {
        title: 'BARBARIC manipulace a skladování | Asamer',
        description:
          'BARBARIC manipulační systémy – od vakuových zdviháků po plně automatické plošné sklady pro zpracování desek.',
        keywords: ['BARBARIC', 'Manipulace', 'Sklad', 'Vakuový manipulátor', 'Automatizace'],
      },
      sk: {
        title: 'BARBARIC manipulácia a skladovanie | Asamer',
        description:
          'BARBARIC manipulačné systémy – od vákuových zdvíhačov po plne automatické plošné sklady pre spracovanie dosiek.',
        keywords: ['BARBARIC', 'Manipulácia', 'Sklad', 'Vákuový zdvíhač', 'Automatizácia'],
      },
      hu: {
        title: 'BARBARIC kezelés és raktározás | Asamer',
        description:
          'BARBARIC kezelőrendszerek – vákuumos emelőktől a teljesen automatizált síktárakig lapfeldolgozáshoz.',
        keywords: ['BARBARIC', 'Kezelés', 'Raktár', 'Vákuumos emelő', 'Automatizálás'],
      },
    }),
  },
  financing: {
    slug: '/financovani',
    meta: createMeta({
      de: {
        title: 'Finanzierung & Förderkompass | Asamer Technologie',
        description:
          'Finanzierung, Leasing und Förderprogramme für Maschinen und Automatisierung in Mitteleuropa – interaktiver Förderkompass von Asamer.',
        keywords: ['Finanzierung', 'Förderung', 'Leasing', 'Automation', 'Maschinen'],
      },
      en: {
        title: 'Financing & Funding Compass | Asamer Technology',
        description:
          'Financing, leasing and grant programs for machines and automation in Central Europe – interactive funding compass by Asamer.',
        keywords: ['Financing', 'Funding', 'Leasing', 'Automation', 'Machinery'],
      },
      cz: {
        title: 'Financování a dotační kompas | Asamer Technologie',
        description:
          'Financování, leasing a dotační programy pro stroje a automatizaci ve střední Evropě – interaktivní průvodce od Asamer.',
        keywords: ['Financování', 'Dotace', 'Leasing', 'Automatizace', 'Stroje'],
      },
      sk: {
        title: 'Financovanie a dotačný kompas | Asamer Technologie',
        description:
          'Financovanie, leasing a dotačné programy pre stroje a automatizáciu v strednej Európe – interaktívny sprievodca od Asamer.',
        keywords: ['Financovanie', 'Dotácie', 'Leasing', 'Automatizácia', 'Stroje'],
      },
      hu: {
        title: 'Finanszírozás és pályázati iránytű | Asamer Technologie',
        description:
          'Finanszírozás, lízing és pályázati programok gépekhez és automatizáláshoz Közép-Európában – interaktív útmutató az Asamertől.',
        keywords: ['Finanszírozás', 'Pályázat', 'Lízing', 'Automatizálás', 'Gépek'],
      },
    }),
  },
  solutions: {
    slug: '/reseni',
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
    meta: createMeta({
      de: {
        title: 'Service & Lifecycle Support | Asamer Technologie',
        description:
          'Asamer Service – Montage, Notfallservice und Ersatzteillieferung für OTT, Mayer, BARBARIC und weitere Hersteller in CZ, SK, HU.',
        keywords: ['Service', 'Support', 'Ersatzteile', 'Training', 'Automation'],
      },
      en: {
        title: 'Service & Lifecycle Support | Asamer Technology',
        description:
          'Asamer Service – installation, emergency service and spare parts for OTT, Mayer, BARBARIC and other manufacturers in CZ, SK, HU.',
        keywords: ['Service', 'Support', 'Spare parts', 'Training', 'Automation'],
      },
      cz: {
        title: 'Servis a lifecycle podpora | Asamer Technologie',
        description:
          'Servis Asamer – montáž, nouzový servis a dodávka náhradních dílů pro OTT, Mayer, BARBARIC a další výrobce v CZ, SK, HU.',
        keywords: ['Servis', 'Podpora', 'Náhradní díly', 'Školení', 'Automatizace'],
      },
      sk: {
        title: 'Servis a podpora | Asamer Technologie',
        description:
          'Servis Asamer – montáž, núdzový servis a dodávka náhradných dielov pre OTT, Mayer, BARBARIC a ďalších výrobcov.',
        keywords: ['Servis', 'Podpora', 'Náhradné diely', 'Školenie', 'Automatizácia'],
      },
      hu: {
        title: 'Szerviz és támogatás | Asamer Technologie',
        description:
          'Asamer Szerviz – szerelés, sürgősségi szerviz és alkatrész-szállítás OTT, Mayer, BARBARIC és más gyártókhoz.',
        keywords: ['Szerviz', 'Támogatás', 'Alkatrészek', 'Képzés', 'Automatizálás'],
      },
    }),
  },
  usedMachines: {
    slug: '/pouzite-stroje',
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
