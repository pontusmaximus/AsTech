/**
 * ABS-Abschnitt auf der OTT-Kategorieseite Kantenanleimmaschinen — CZ, SK, HU.
 *
 * Nachfrage ohne passende Seite (GSC Jul–Okt 2026): „olepovacka hran abs",
 * „olepovacka abs hran", „olepovačka abs hran" — zusammen 37 Impressionen auf
 * Position 9–14. Bewusst keine eigene ABS-Seite: die wuerde mit der
 * Kategorieseite um denselben Begriff konkurrieren.
 *
 * HU: Ueberschrift „Élzárógép ABS élekhez", nicht „ABS élzárás" — die
 * HU-Keyword-Recherche (docs/seo/keyword-research/, Blatt 3) fuehrt
 * „élzárás / abs élzárás" als Falle: Suchende nach Verbrauchsmaterial und
 * Zuschnitt-Dienstleistern. Begriffe nach Blatt 6: „élzárógép", „nullfuga"
 * (kurzes u), „PUR" nie allein (= Bauschaum), sondern mit „élzárás".
 * Fuer HU gibt es keine eigenen Suchdaten zu ABS; der Abschnitt ergaenzt die
 * Kategorieseite inhaltlich. Maschinell uebersetzt, Lektorat steht aus.
 *
 * Inhalt ausschliesslich aus dem Repo:
 *   - ABS bei allen OTT-Modellen: OTT_CATEGORY_SEO.edgebanding, Abschnitt
 *     „Kompatibilita materiálů" (src/data/seo/ottSeoContent.ts)
 *   - Kantenstaerken je Modell: OTT_PRODUCTS[].specs.edgeThickness — hier
 *     abgeleitet, nicht abgeschrieben
 *   - EVA bis 3 mm im Trockenen, PUR fuer Feuchtraum: EDGEBANDER_GUIDE,
 *     Entscheidungskriterium 2 (src/data/guides/edgebanderGuide.ts)
 *   - PUR fuer alle Modelle bestellbar/nachruestbar: OTT_CATEGORY_SEO, FAQ 2
 *   - bluEdge/Funktionsschicht, Rehau/Doellken/Ostermann: EDGEBANDER_GUIDE, FAQ bluEdge
 */

import type { Language } from '../../i18n';
import { getOttProductsByCategory } from '../ottProducts';

export interface AbsSection {
  heading: string;
  /** Absaetze in Lesereihenfolge. */
  paragraphs: string[];
  /** Zusaetzliche Eintraege fuer das FAQ der Kategorieseite (inkl. FAQPage-Schema). */
  faq: { question: string; answer: string }[];
}

/**
 * „Pacific+, Tornado+, FlexEdge a Storm+ 0,3–15 mm, …" — gruppiert nach
 * Kantenstaerke, in Katalogreihenfolge. Modelle ohne Millimeterangabe (die
 * DoorEdition fuehrt „door/fold glue") fallen heraus.
 */
const thicknessByModel = (and: string): string => {
  const groups = new Map<string, string[]>();
  for (const p of getOttProductsByCategory('edgebanding')) {
    const t = p.specs.edgeThickness;
    if (!t || !/\d\s*mm$/.test(t)) continue;
    const key = t.replace(/\./g, ',');
    groups.set(key, [...(groups.get(key) ?? []), p.name]);
  }
  return [...groups]
    .map(([t, names]) => {
      const list = names.length > 1 ? `${names.slice(0, -1).join(', ')} ${and} ${names.at(-1)}` : names[0];
      return `${list} ${t}`;
    })
    .join(', ');
};

/** Groesste Kantenstaerke im Katalog, z. B. „25". */
const maxThickness = (): string => {
  const values = getOttProductsByCategory('edgebanding')
    .flatMap((p) => (p.specs.edgeThickness ?? '').match(/\d+(?:[.,]\d+)?(?=\s*mm|\/)/g) ?? [])
    .map((v) => Number(v.replace(',', '.')));
  return String(Math.max(...values));
};

export const OTT_EDGEBANDING_ABS: Partial<Record<Language, AbsSection>> = {
  cz: {
    heading: 'Olepovačka na ABS hrany',
    paragraphs: [
      `ABS hrany zpracují všechny olepovačky hran OTT – od Pacific+ po TopEdge. Běžné ABS hrany do tloušťky 3 mm zvládne každý model. Tloušťka hrany podle modelu: ${thicknessByModel('a')}.`,
      'Lepidlo: pro standardní ABS hrany do 3 mm v suchém prostředí stačí EVA. Pro vodotěsné spoje – kuchyně, koupelny – je doporučené PUR. Systém CombiMelt zpracuje obě lepidla a PUR lze u všech modelů OTT objednat nebo dovybavit.',
      // TODO(Max): Fuer welche Modelle ist bluEdge featuring HyFuse lieferbar?
      // Die Produktdaten (bluEdge: „Nachrüstbar für alle OTT-Modelle") und die
      // fruehere Vergleichstabelle im Ratgeber (Pacific+, Tornado+, FlexEdge:
      // nicht verfuegbar) widersprechen sich. Und: gibt es ABS-Kanten mit
      // Funktionsschicht, die OTT/Asamer fuer bluEdge freigibt? Bis dahin
      // nennt der Absatz weder Modelle noch eine ABS-Freigabe.
      'Nulová spára: technologie bluEdge featuring HyFuse aktivuje funkční vrstvu hrany vodíko-kyslíkovým plamenem a spojí ji s deskou bez lepidla. Předpokladem jsou speciální hrany s funkční vrstvou, například od Rehau, Doellken nebo Ostermann.',
    ],
    faq: [
      {
        question: 'Zpracují olepovačky hran OTT ABS hrany?',
        answer: `Ano. ABS hrany zpracují všechny modely od Pacific+ po TopEdge. Běžné ABS hrany do 3 mm zvládne každý model, maximální tloušťka hrany je podle modelu až ${maxThickness()} mm.`,
      },
      {
        question: 'Jaké lepidlo zvolit pro ABS hrany – EVA nebo PUR?',
        answer: 'Pro standardní ABS hrany do 3 mm v suchém prostředí stačí EVA. Pro vodotěsné spoje v kuchyních a koupelnách je vhodnější PUR. Systém CombiMelt zpracuje obě lepidla a PUR lze u všech modelů OTT objednat nebo dovybavit.',
      },
    ],
  },
  sk: {
    heading: 'Olepovačka na ABS hrany',
    paragraphs: [
      `ABS hrany spracujú všetky olepovačky hrán OTT – od Pacific+ po TopEdge. Bežné ABS hrany do hrúbky 3 mm zvládne každý model. Hrúbka hrany podľa modelu: ${thicknessByModel('a')}.`,
      'Lepidlo: pre štandardné ABS hrany do 3 mm v suchom prostredí postačuje EVA. Pre vodotesné spoje – kuchyne, kúpeľne – sa odporúča PUR. Systém CombiMelt spracuje obe lepidlá a PUR možno pri všetkých modeloch OTT objednať alebo dovybaviť.',
      // TODO(Max): siehe CZ — bluEdge-Verfuegbarkeit je Modell und ABS-Freigabe klaeren.
      'Nulová škára: technológia bluEdge featuring HyFuse aktivuje funkčnú vrstvu hrany vodíkovo-kyslíkovým plameňom a spojí ju s doskou bez lepidla. Predpokladom sú špeciálne hrany s funkčnou vrstvou, napríklad od Rehau, Doellken alebo Ostermann.',
    ],
    faq: [
      {
        question: 'Spracujú olepovačky hrán OTT ABS hrany?',
        answer: `Áno. ABS hrany spracujú všetky modely od Pacific+ po TopEdge. Bežné ABS hrany do 3 mm zvládne každý model, maximálna hrúbka hrany je podľa modelu až ${maxThickness()} mm.`,
      },
      {
        question: 'Aké lepidlo zvoliť pre ABS hrany – EVA alebo PUR?',
        answer: 'Pre štandardné ABS hrany do 3 mm v suchom prostredí postačuje EVA. Pre vodotesné spoje v kuchyniach a kúpeľniach je vhodnejšie PUR. Systém CombiMelt spracuje obe lepidlá a PUR možno pri všetkých modeloch OTT objednať alebo dovybaviť.',
      },
    ],
  },
  hu: {
    heading: 'Élzárógép ABS élekhez',
    paragraphs: [
      `ABS éleket minden OTT élzárógép feldolgoz – a Pacific+-tól a TopEdge-ig. A szokásos, legfeljebb 3 mm vastag ABS éleket bármelyik modell megmunkálja. Élvastagság modellenként: ${thicknessByModel('és')}.`,
      'Ragasztás: szárazon használt, legfeljebb 3 mm-es standard ABS élekhez az EVA elegendő. Vízálló kötéshez – konyhába, fürdőszobába – PUR élzárás ajánlott. A CombiMelt rendszer mindkét ragasztót feldolgozza, a PUR pedig minden OTT modellhez rendelhető vagy utólag felszerelhető.',
      // TODO(Max): siehe CZ — bluEdge-Verfuegbarkeit je Modell und ABS-Freigabe klaeren.
      'Nullfuga: a bluEdge featuring HyFuse technológia hidrogén-oxigén lánggal aktiválja az él funkcionális rétegét, és ragasztó nélkül köti össze a lappal. Ehhez funkcionális réteggel ellátott speciális élek szükségesek, például a Rehau, a Doellken vagy az Ostermann kínálatából.',
    ],
    faq: [
      {
        question: 'Feldolgoznak az OTT élzárógépek ABS éleket?',
        answer: `Igen. ABS éleket minden modell feldolgoz a Pacific+-tól a TopEdge-ig. A legfeljebb 3 mm-es szokásos ABS éleket bármelyik modell megmunkálja, a maximális élvastagság modelltől függően legfeljebb ${maxThickness()} mm.`,
      },
      {
        question: 'Milyen ragasztót válasszak ABS élekhez – EVA-t vagy PUR-t?',
        answer: 'Szárazon használt, legfeljebb 3 mm-es standard ABS élekhez az EVA elegendő. Konyhában és fürdőszobában a vízálló PUR élzárás a jobb választás. A CombiMelt rendszer mindkét ragasztót feldolgozza, a PUR pedig minden OTT modellhez rendelhető vagy utólag felszerelhető.',
      },
    ],
  },
};
