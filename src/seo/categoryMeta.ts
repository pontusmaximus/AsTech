/**
 * Title und Description der Kategorieseiten.
 *
 * 27 Kategorien mal fuenf Sprachen sind 135 Seiten. Die von Hand zu texten
 * hiesse, 135 Marketingtexte zu erfinden — genau das, was der Masterplan
 * verbietet ("Inhalte sind Marketing-Hoheit"). Stattdessen zwei Quellen:
 *
 *   1. `CATEGORY_META_OVERRIDES` — recherchierte Vorschlaege, wo es sie gibt.
 *      Aktuell sieben ungarische Seiten aus der HU-Keyword-Recherche
 *      (docs/seo/keyword-research/), Blatt "4 Titles und Descriptions".
 *   2. Eine Formel aus Daten, die schon da sind: Kategoriebezeichnung,
 *      Markenname, Modellnamen. Sie erfindet nichts, sie setzt Vorhandenes
 *      zusammen — und folgt dabei dem Muster, das die Recherche selbst
 *      empfiehlt (Sofortmassnahme 10): "[Kategorie] [Marke] – [Nutzen] | Asamer".
 *
 * Die Formel ist der Platzhalter, nicht das Ziel. Jede Kategorie, fuer die
 * Marketing einen eigenen Text liefert, gehoert in die Override-Tabelle.
 */

import type { Language } from '../i18n';
import type { CategoryRef } from '../data/brandCatalogs';
import { getBrandCatalog } from '../data/brandCatalogs';
import type { RouteMeta } from './routes';

/** Schluessel der Override-Tabelle: `marke/kategorie`. */
const refKey = (ref: CategoryRef): string => `${ref.brand}/${ref.category}`;

/**
 * Von Hand gepflegte Kategorie-Metadaten.
 *
 * Die ungarischen Eintraege stammen aus der Keyword-Recherche und sind dort je
 * mit Zielkeyword und Zeichenzahl belegt. Sie ersetzen die Formel nur fuer die
 * genannte Sprache — die uebrigen vier bleiben formelbasiert, bis es auch
 * dafuer recherchierte Texte gibt.
 */
const CATEGORY_META_OVERRIDES: Record<string, Partial<Record<Language, RouteMeta>>> = {
  'ott/edgebanding': {
    hu: {
      title: 'Élzárógépek – OTT modellek és kiválasztás | Asamer',
      description:
        'Az OTT élzárógépek teljes kínálata egy oldalon: Tornado, Storm, Pacific, TopEdge, StrongEdge. Teljesítmény, előtolás és ár összehasonlítása.',
      keywords: ['élzárógép', 'élzáró gép', 'faipari élzárógép', 'ipari élzárógép', 'OTT'],
    },
  },
  'gannomat/rowboring': {
    hu: {
      title: 'Sorozatfúró gép – Gannomat faipari sorozatfúrók | Asamer',
      description:
        'Gannomat sorozatfúró gépek bútorgyártáshoz: Proline 50 és Vantage. Orsószám, fúrásmélység és CNC-vezérlés összehasonlítása.',
      keywords: ['sorozatfúró gép', 'sorozatfúró', 'faipari sorozatfúró', 'Gannomat'],
    },
  },
  'gannomat/carcass': {
    hu: {
      title: 'Korpuszprés – Gannomat bútorprések | Asamer',
      description:
        'Gannomat korpuszprések asztalosüzemtől szerelősorig: Concept Easy, Eco, Primus és Lift. Kapacitás, méretek és beüzemelés.',
      keywords: ['korpuszprés', 'korpusz prés', 'szekrényprés', 'bútorprés', 'Gannomat'],
    },
  },
  'gannomat/boring': {
    hu: {
      title: 'Tiplifúró gép – fúró és tiplibeütő gépek | Asamer',
      description:
        'Gannomat tiplifúró és tiplibeütő gépek bútorlap megmunkáláshoz. Automata ragasztóadagolás, DB sorozat. Asamer – hivatalos forgalmazó.',
      keywords: ['tiplifúró gép', 'tipliző gép', 'tiplibeütő gép', 'Gannomat'],
    },
  },
  'gannomat/fitting': {
    hu: {
      title: 'Fúró- és vasalatbepréselő gép – Gannomat Express | Asamer',
      description:
        'Gannomat Express vasalatbepréselő gépek: 13 modell összehasonlítása egy táblázatban. Pántfúrás, vasalatbeültetés, RTA és CNC változatok.',
      keywords: ['fúró- és vasalatbepréselő gép', 'vasalatfúró gép', 'bútorvasalat beültetés'],
    },
  },
  'gannomat/frame': {
    hu: {
      title: 'Keretprés – faipari hidraulikus keretprések | Asamer',
      description:
        'Gannomat keretprések ablak- és ajtógyártáshoz: Junior 323, Master 325, MOD 160. Préserő, keretméret és ciklusidő.',
      keywords: ['keretprés', 'faipari keretprés', 'hidraulikus keretprés', 'Gannomat'],
    },
  },
  'barbaric/vacuum-lifters': {
    hu: {
      title: 'Ipari vákuumos emelő bútorlaphoz – UniWood | Asamer',
      description:
        'Barbaric UniWood ipari vákuumos emelők bútorlaphoz és nagy táblákhoz, 100–500 kg. Ergonomikus anyagmozgatás daruval vagy sínrendszerrel.',
      keywords: ['vákuumemelő', 'vákuumos emelő', 'ipari vákuumos emelő', 'Barbaric'],
    },
  },
};

/** Satzbausteine der Formel je Sprache. */
const TEMPLATES: Record<Language, { lead: (label: string, brand: string) => string; tail: string }> = {
  de: {
    lead: (label, brand) => `${label} von ${brand} bei Asamer`,
    tail: 'Autorisierter Händler für CZ, SK und HU – Beratung, Montage und Service.',
  },
  en: {
    lead: (label, brand) => `${label} from ${brand} at Asamer`,
    tail: 'Authorized dealer for CZ, SK and HU – consulting, installation and service.',
  },
  cz: {
    lead: (label, brand) => `${label} ${brand} od Asamer`,
    tail: 'Autorizovaný prodejce pro CZ, SK a HU – poradenství, montáž a servis.',
  },
  sk: {
    lead: (label, brand) => `${label} ${brand} od Asamer`,
    tail: 'Autorizovaný predajca pre CZ, SK a HU – poradenstvo, montáž a servis.',
  },
  hu: {
    lead: (label, brand) => `${brand} ${label} az Asamertől`,
    tail: 'Hivatalos forgalmazó CZ, SK és HU területén – tanácsadás, telepítés és szerviz.',
  },
};

/** Obergrenze der Description; der Audit warnt ausserhalb von 70–165 Zeichen. */
const DESCRIPTION_LIMIT = 165;

/**
 * Haengt so viele Modellnamen an, wie in die Description passen.
 * Lieber drei Modelle und ein vollstaendiger Satz als sieben und ein Abschnitt.
 */
const withModels = (lead: string, models: string[], tail: string): string => {
  const budget = DESCRIPTION_LIMIT - lead.length - tail.length - 4; // ": " und ". "
  const fitting: string[] = [];
  let used = 0;
  for (const model of models) {
    const cost = used === 0 ? model.length : model.length + 2;
    if (used + cost > budget) break;
    fitting.push(model);
    used += cost;
  }
  return fitting.length > 0 ? `${lead}: ${fitting.join(', ')}. ${tail}` : `${lead}. ${tail}`;
};

/** Title und Description einer Kategorieseite. */
export const getCategoryMeta = (ref: CategoryRef, lang: Language): RouteMeta => {
  const override = CATEGORY_META_OVERRIDES[refKey(ref)]?.[lang];
  if (override) return override;

  const catalog = getBrandCatalog(ref.brand);
  const label = catalog.categoryTitleLabel(ref.category, lang);
  const models = catalog.productsIn(ref.category).map((p) => p.name);
  const template = TEMPLATES[lang];

  return {
    title: `${label} – ${catalog.label} | Asamer`,
    description: withModels(template.lead(label, catalog.label), models, template.tail),
  };
};

/** Ueberschrift der Kategorieseite. Immer die Kategoriebezeichnung, ohne Marke. */
export const getCategoryHeading = (ref: CategoryRef, lang: Language): string =>
  getBrandCatalog(ref.brand).categoryTitleLabel(ref.category, lang);
