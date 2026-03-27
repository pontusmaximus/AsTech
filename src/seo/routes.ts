import type { Language } from '../i18n';
import { translatePageText } from '../i18n/pageTextTranslations';
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

type BaseMetaInput = {
  de: RouteMeta;
  en: RouteMeta;
  cz: RouteMeta;
};

const duplicateKeywords = (source?: string[]) => (source ? [...source] : undefined);

const createMeta = ({ de, en, cz }: BaseMetaInput): Record<Language, RouteMeta> => ({
  de,
  en,
  cz,
  sk: {
    title: translatePageText('sk', en.title, cz.title),
    description: translatePageText('sk', en.description, cz.description),
    keywords: duplicateKeywords(en.keywords ?? cz.keywords),
  },
  hu: {
    title: translatePageText('hu', en.title, cz.title),
    description: translatePageText('hu', en.description, cz.description),
    keywords: duplicateKeywords(en.keywords ?? cz.keywords),
  },
});

export const SEO_ROUTES: Record<SeoRouteKey, SeoRouteConfig> = {
  home: {
    slug: '/',
    image: '/images/hero-bg.jpg',
    meta: createMeta({
      de: {
        title: 'Asamer Technologie | Maschinen, Automation & Service',
        description:
          'Asamer Technologie GmbH liefert Maschinen, Automatisierung und Service für Holz-, Kunststoff- und Metallbearbeitung in Mitteleuropa.',
        keywords: ['Asamer', 'Technologie', 'Automation', 'Holzbearbeitung', 'Maschinen'],
      },
      en: {
        title: 'Asamer Technology | Machinery, Automation & Service',
        description:
          'Asamer Technology delivers industrial machinery, automation projects and service for wood, plastic and metal manufacturing across Central Europe.',
        keywords: ['Asamer', 'Technology', 'Automation', 'Machinery', 'Service'],
      },
      cz: {
        title: 'Asamer Technologie | Stroje, automatizace a servis',
        description:
          'Asamer Technologie dodává stroje, automatizační řešení a servis pro zpracování dřeva, plastu i kovu ve střední Evropě.',
        keywords: ['Asamer', 'Technologie', 'Automatizace', 'Stroje', 'Servis'],
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
          'Kappa Automatic & Advanced Line Sägen von Mayer: Präzision, österreichische Fertigung und vollautomatische Zuschnittlinien für Industrie und Handwerk.',
        keywords: ['Mayer', 'Kappa Automatic', 'Plattensäge', 'CNC Sägen', 'Asamer'],
      },
      en: {
        title: 'Mayer Panel Cutting Technology | Asamer Technology',
        description:
          'Discover Mayer Kappa Automatic and Advanced Line panel saws with Austrian engineering, automatic material handling and Industry 4.0 interfaces.',
        keywords: ['Mayer', 'Panel saw', 'Kappa Automatic', 'Advanced Line', 'Automation'],
      },
      cz: {
        title: 'Mayer technologie dělení desek | Asamer Technologie',
        description:
          'Pily Mayer Kappa Automatic a Advanced Line zajišťují přesné formátování, integraci do skladů i automatizované napojení na software.',
        keywords: ['Mayer', 'Pily na desky', 'Kappa Automatic', 'Advanced Line', 'Automatizace'],
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
          'OTT Edgebander mit PUR, EVA und LASER Hydrofuse für fugenlose Kanten, flexible Fertigung und Premium-Möbelproduktion.',
        keywords: ['OTT', 'Kantenleimer', 'PUR', 'Laser', 'Hydrofuse'],
      },
      en: {
        title: 'OTT Edgebanders & LASER Hydrofuse | Asamer',
        description:
          'OTT edgebanding technology with PUR, EVA and LASER Hydrofuse delivers seamless edges and automated return systems for premium furniture.',
        keywords: ['OTT', 'Edgebander', 'PUR', 'Laser', 'Furniture'],
      },
      cz: {
        title: 'OTT olepovačky hran & LASER Hydrofuse | Asamer',
        description:
          'Technologie OTT s PUR, EVA a LASER Hydrofuse zajišťuje bezešvé hrany, automatické vracení a flexibilní výrobu nábytku.',
        keywords: ['OTT', 'Olepovačka hran', 'PUR', 'Laser', 'Nábytek'],
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
          'BARBARIC Kransysteme, Flächenlager und Manipulationstechnik automatisieren den Plattenfluss von der Wareneingabe bis zum Zuschnitt.',
        keywords: ['BARBARIC', 'Handling', 'Lagersystem', 'Automation', 'Kran'],
      },
      en: {
        title: 'BARBARIC Handling & Storage Systems | Asamer',
        description:
          'BARBARIC vacuum lifters, crane systems and chaotic storage automate panel logistics between warehouses, saws and edgebanders.',
        keywords: ['BARBARIC', 'Handling', 'Storage system', 'Vacuum lifter', 'Automation'],
      },
      cz: {
        title: 'BARBARIC manipulace a skladování | Asamer',
        description:
          'BARBARIC dodává vakuové manipulátory, mostové jeřáby a inteligentní sklady s chaotickým řízením pro desky a lamely.',
        keywords: ['BARBARIC', 'Manipulace', 'Sklad', 'Vakuový manipulátor', 'Automatizace'],
      },
    }),
  },
  financing: {
    slug: '/finanzierung',
    meta: createMeta({
      de: {
        title: 'Finanzierung & Förderkompass | Asamer Technologie',
        description:
          'Guided Funnel für Förderprogramme, Leasing und Finanzierung von Automatisierung, Maschinen und Digitalisierung in Mitteleuropa.',
        keywords: ['Finanzierung', 'Förderung', 'Leasing', 'Automation', 'Maschinen'],
      },
      en: {
        title: 'Financing & Funding Compass | Asamer Technology',
        description:
          'Interactive funding wizard covering grants, leasing and financing options for automation, robotics and machinery projects.',
        keywords: ['Financing', 'Funding', 'Leasing', 'Automation', 'Machinery'],
      },
      cz: {
        title: 'Financování a dotační kompas | Asamer Technologie',
        description:
          'Interaktivní průvodce dotacemi, leasingem a financováním investic do automatizace, robotiky a strojů v regionu CEE.',
        keywords: ['Financování', 'Dotace', 'Leasing', 'Automatizace', 'Stroje'],
      },
    }),
  },
  solutions: {
    slug: '/loesungen',
    meta: createMeta({
      de: {
        title: 'Lösungen für Digitalisierung & Produktionssoftware | Asamer',
        description:
          'Integrationen von ERP, MES und Produktionssoftware verbinden Maschinen, Lager und Datenströme für Smart Factory Konzepte.',
        keywords: ['Lösungen', 'Digitalisierung', 'ERP', 'MES', 'Smart Factory'],
      },
      en: {
        title: 'Solutions for Digital Production & Software | Asamer',
        description:
          'ERP, MES and production software integrations that connect machines, storage and analytics for smart manufacturing.',
        keywords: ['Solutions', 'Digitalization', 'ERP', 'MES', 'Smart Factory'],
      },
      cz: {
        title: 'Řešení pro digitální výrobu a software | Asamer',
        description:
          'Propojujeme ERP, MES a výrobní software so stroji i sklady pro chytré továrny a sledování výroby v reálném čase.',
        keywords: ['Řešení', 'Digitalizace', 'ERP', 'MES', 'Chytrá výroba'],
      },
    }),
  },
  service: {
    slug: '/service',
    meta: createMeta({
      de: {
        title: 'Service & Lifecycle Support | Asamer Technologie',
        description:
          'Servicenetzwerke, Ersatzteile, Schulungen und 24/7 Support sorgen für hohe Verfügbarkeit von Maschinen und Automationslinien.',
        keywords: ['Service', 'Support', 'Ersatzteile', 'Training', 'Automation'],
      },
      en: {
        title: 'Service & Lifecycle Support | Asamer Technology',
        description:
          'Spare parts, maintenance, training and lifecycle services keep machinery and automation cells productive.',
        keywords: ['Service', 'Support', 'Spare parts', 'Training', 'Automation'],
      },
      cz: {
        title: 'Servis a lifecycle podpora | Asamer Technologie',
        description:
          'Servisní síť, náhradní díly, školení i vzdálená podpora udržují stroje a automatizaci v maximální produktivitě.',
        keywords: ['Servis', 'Podpora', 'Náhradní díly', 'Školení', 'Automatizace'],
      },
    }),
  },
  usedMachines: {
    slug: '/gebrauchtmaschinen',
    image: '/images/used-machines/holz-her-1308xl-power.jpg',
    meta: createMeta({
      de: {
        title: 'Gebrauchtmaschinen & Refurbishment | Asamer',
        description:
          'Ausgewählte gebrauchte Holz- und Kunststoffmaschinen inklusive Beratung, Zustandsgutachten und Inbetriebnahme.',
        keywords: ['Gebrauchtmaschinen', 'Refurbished', 'Holzbearbeitung', 'Asamer'],
      },
      en: {
        title: 'Used Machines & Refurbishment | Asamer',
        description:
          'Handpicked used wood- and plastic-processing machines with consulting, inspection and commissioning.',
        keywords: ['Used machines', 'Refurbished', 'Woodworking', 'Asamer'],
      },
      cz: {
        title: 'Použité stroje a repase | Asamer',
        description:
          'Vybrané použité stroje pro zpracování dřeva a plastu včetně poradenství, inspekce a uvedení do provozu.',
        keywords: ['Použité stroje', 'Repase', 'Dřevoobrábění', 'Asamer'],
      },
    }),
  },
  contact: {
    slug: '/kontakt',
    meta: createMeta({
      de: {
        title: 'Kontakt & Standorte | Asamer Technologie',
        description:
          'Kontaktdaten, Ansprechpartner und Standorte der Asamer Technologie GmbH in Österreich und Tschechien.',
        keywords: ['Kontakt', 'Standort', 'Asamer', 'Service', 'Österreich'],
      },
      en: {
        title: 'Contact & Locations | Asamer Technology',
        description:
          'Contact information, offices and key people at Asamer Technology in Austria and Czech Republic.',
        keywords: ['Contact', 'Locations', 'Asamer', 'Austria', 'Czech Republic'],
      },
      cz: {
        title: 'Kontakt a pobočky | Asamer Technologie',
        description:
          'Kontakty, odpovědné osoby a adresy společnosti Asamer Technologie v Rakousku a České republice.',
        keywords: ['Kontakt', 'Pobočka', 'Asamer', 'Rakousko', 'Česká republika'],
      },
    }),
  },
  imprint: {
    slug: '/impressum',
    meta: createMeta({
      de: {
        title: 'Impressum & Rechtliches | Asamer Technologie',
        description:
          'Firmenbuchdaten, UID und rechtliche Hinweise der Asamer Technologie GmbH.',
        keywords: ['Impressum', 'UID', 'Asamer', 'Rechtliche Hinweise'],
      },
      en: {
        title: 'Imprint & Legal | Asamer Technology',
        description:
          'Company registration, VAT ID and legal disclosure for Asamer Technology GmbH.',
        keywords: ['Imprint', 'Legal', 'VAT', 'Asamer'],
      },
      cz: {
        title: 'Impressum a právní informace | Asamer Technologie',
        description:
          'Firemní údaje, IČ a právní informace společnosti Asamer Technologie GmbH.',
        keywords: ['Impressum', 'Právní informace', 'Asamer'],
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
