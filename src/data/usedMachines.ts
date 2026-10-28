/**
 * Used (pre-owned) machines inventory for asamer.cz.
 * Each machine has its own detail page at /pouzite-stroje/:slug (and language variants).
 *
 * Verkaufte Maschine entfernen — feste Regel seit Oktober 2026:
 *   1. Eintrag aus USED_MACHINES loeschen.
 *   2. Slug und Kategorie in RETIRED_USED_MACHINES (unten) eintragen.
 *   3. `npm run generate:vercel` — erzeugt fuer alle fuenf Sprachfassungen eine
 *      301 auf die passende Gebrauchtmaschinen-Seite (USED_CATEGORY_PAGES, sonst
 *      die Uebersicht /pouzite-stroje). Nie eine 404.
 * Vergessen faellt auf: `npm run seo:404-safety -- --fail` (laeuft in CI) meldet
 * jede URL der Sitemap von origin/main, die weder Datei noch Weiterleitung hat.
 */

import type { Language } from '../i18n';
import type { MultiLangText, SeoFaqItem } from './seo/types';

export type UsedMachineStatus = 'available' | 'sold';

/**
 * Maschinengattung. Bestimmt, auf welche Gebrauchtmaschinen-Seite eine
 * Maschine gehoert — und wohin ihre URL per 301 zeigt, wenn sie verkauft und
 * entfernt wird (siehe `RETIRED_USED_MACHINES` unten).
 */
export type UsedMachineCategory = 'edgebanding' | 'panel-saw' | 'drying';

export interface UsedMachine {
  /** URL slug (always lowercase, hyphens, no diacritics). Used as part of detail URL. */
  slug: string;
  category: UsedMachineCategory;
  manufacturer: string;
  name: string;
  year?: number;
  /** Human-readable condition label per language. */
  condition: MultiLangText;
  status: UsedMachineStatus;
  images?: string[];
  imageFit?: 'cover' | 'contain';
  imageDisplay?: 'slideshow' | 'grid';
  price?: number;
  listPrice?: number;
  priceCurrency?: string;
  /** Short teaser used on the list page. */
  shortDescription: MultiLangText;
  /** Rich narrative description for the detail page (200–400 words per language). */
  longDescription?: MultiLangText;
  /** Highlights shown as bullet list on detail page. */
  highlights?: Record<Language, string[]>;
  /** Technical specifications as label/value rows. */
  specs?: { label: MultiLangText; value: string }[];
  /** "Who should buy this" buying advice block. */
  buyingAdvice?: MultiLangText;
  /** FAQ items. Generates FAQPage JSON-LD on the detail page. */
  faq?: SeoFaqItem[];
}

/* ------------------------------------------------------------------ */
/*  Inventory                                                         */
/* ------------------------------------------------------------------ */

export const USED_MACHINES: UsedMachine[] = [
  {
    slug: 'schelling-fh4-330-220-automatic',
    category: 'panel-saw',
    manufacturer: 'SCHELLING',
    name: 'FH 4 330 220 automatic',
    year: 2015,
    condition: { de: 'sehr gut', en: 'very good', cz: 'velmi dobrý', sk: 'veľmi dobrý', hu: 'nagyon jó' },
    status: 'available',
    images: [
      '/images/used-machines/schelling-fh4-330-220-automatic-1.jpg',
      '/images/used-machines/schelling-fh4-330-220-automatic-2.jpg',
    ],
    shortDescription: {
      de: 'Automatisches Plattensägezentrum für effizienten Zuschnitt.',
      en: 'Automatic panel saw for efficient cutting.',
      cz: 'Automatická panelová pila pro efektivní řezání.',
      sk: 'Automatická panelová píla pre efektívne rezanie.',
      hu: 'Automatikus lapfűrészközpont hatékony szabáshoz.',
    },
    longDescription: {
      de: `Die SCHELLING FH 4 330 220 automatic ist ein Premium-Plattenaufteilsägezentrum für die industrielle Möbelfertigung. SCHELLING zählt zur Spitze der österreichischen Sägentechnik und liefert Plattensägen, die in Großbetrieben seit Jahrzehnten als Benchmark gelten. Die FH-Serie mit Schnittlänge 3.300 mm und Schnitthöhe 220 mm deckt alle gängigen Plattenformate bis zum 2,5 × 5,6 m Überformat ab. Die Maschine aus Baujahr 2015 befindet sich in sehr gutem Zustand und ist einsatzbereit für den produktiven Betrieb. Das automatische Rückführungs- und Beschickungssystem macht den Sägenbediener effizienter: Eine Person deckt Ein- und Ausgabe ab. Für Betriebe, die eine bewährte SCHELLING-Anlage zum Bruchteil des Neupreises suchen, ist dieses Angebot interessant.`,
      en: `The SCHELLING FH 4 330 220 automatic is a premium panel saw centre for industrial furniture production. SCHELLING is one of the top Austrian saw technology manufacturers, delivering panel saws that have been benchmarks in large operations for decades. The FH series with cutting length 3,300 mm and cutting height 220 mm covers all common panel formats up to the 2.5 × 5.6 m oversized format. The machine from 2015 is in very good condition and ready for productive operation. The automatic return and feeding system makes the saw operator more efficient: one person handles both input and output. For operations seeking a proven SCHELLING system at a fraction of the new price, this offer is of interest.`,
      cz: `SCHELLING FH 4 330 220 automatic je prémiové centrum formátovacích pil pro průmyslovou výrobu nábytku. SCHELLING patří ke špičce rakouské pilové techniky a dodává formátovací pily, které jsou ve velkých provozech po desetiletí považovány za měřítko. Řada FH s délkou řezu 3 300 mm a výškou řezu 220 mm pokrývá všechny běžné formáty desek až po nadměr 2,5 × 5,6 m. Stroj z roku 2015 je ve velmi dobrém stavu a připraven k produktivnímu provozu. Pro provozy, které hledají osvědčený systém SCHELLING za zlomek ceny nového, je tato nabídka zajímavá.`,
      sk: `SCHELLING FH 4 330 220 automatic je prémiové centrum formátovacích píl pre priemyselnú výrobu nábytku. SCHELLING patrí ku špičke rakúskej pílovej techniky a dodáva formátovacie píly, ktoré sú vo veľkých prevádzkach po desaťročia považované za meradlo. Rada FH s dĺžkou rezu 3 300 mm a výškou rezu 220 mm pokrýva všetky bežné formáty dosiek až po nadrozmer 2,5 × 5,6 m. Stroj z roku 2015 je vo veľmi dobrom stave a pripravený na produktívnu prevádzku.`,
      hu: `A SCHELLING FH 4 330 220 automatic prémium lapfűrészközpont ipari bútorgyártáshoz. A SCHELLING az osztrák fűrésztechnika élvonalához tartozik, és olyan lapfűrészeket szállít, amelyek nagyüzemekben évtizedek óta etalonként szolgálnak. Az FH sorozat 3 300 mm vágóhosszal és 220 mm vágásmagassággal minden szokásos laptömböt lefed egészen a 2,5 × 5,6 m-es túlméretig. A 2015-ös gyártású gép nagyon jó állapotban van és termelő üzemre kész. Azoknak az üzemeknek, akik bevált SCHELLING rendszert keresnek az új ár töredékéért, ez az ajánlat érdekes lehet.`,
    },
    specs: [
      { label: { de: 'Baujahr', en: 'Year', cz: 'Rok výroby', sk: 'Rok výroby', hu: 'Évjárat' }, value: '2015' },
      { label: { de: 'Schnittlänge', en: 'Cutting length', cz: 'Délka řezu', sk: 'Dĺžka rezu', hu: 'Vágóhossz' }, value: '3.300 mm' },
      { label: { de: 'Schnitthöhe', en: 'Cutting height', cz: 'Výška řezu', sk: 'Výška rezu', hu: 'Vágásmagasság' }, value: '220 mm' },
      { label: { de: 'Typ', en: 'Type', cz: 'Typ', sk: 'Typ', hu: 'Típus' }, value: 'Automatic panel saw' },
      { label: { de: 'Zustand', en: 'Condition', cz: 'Stav', sk: 'Stav', hu: 'Állapot' }, value: 'Sehr gut / Very good' },
    ],
    buyingAdvice: {
      de: 'Diese SCHELLING FH bietet Industriequalität zu einem deutlich reduzierten Preis gegenüber Neumaschine. Ideal für Betriebe, die ihre bestehende Plattensäge ersetzen oder eine zweite Säge für Redundanz oder Durchsatzsteigerung ergänzen möchten.',
      en: 'This SCHELLING FH offers industrial quality at a significantly reduced price compared to a new machine. Ideal for operations replacing their existing panel saw or adding a second saw for redundancy or throughput increase.',
      cz: 'Tato SCHELLING FH nabízí průmyslovou kvalitu za výrazně sníženou cenu oproti nové. Ideální pro provozy, které nahrazují stávající formátovací pilu nebo přidávají druhou pilu pro redundanci či zvýšení průchodnosti.',
      sk: 'Táto SCHELLING FH ponúka priemyselnú kvalitu za výrazne zníženú cenu oproti novej. Ideálna pre prevádzky, ktoré nahrádzajú existujúcu formátovaciu pílu alebo pridávajú druhú pílu pre redundanciu či zvýšenie priechodnosti.',
      hu: 'Ez a SCHELLING FH ipari minőséget kínál jelentősen csökkentett áron az új géphez képest. Ideális olyan üzemek számára, akik cserélik meglévő lapfűrészüket vagy második fűrészt adnak hozzá redundancia vagy kapacitásnövelés céljából.',
    },
    faq: [
      {
        question: { de: 'Was bedeutet FH 4 330 220?', en: 'What does FH 4 330 220 mean?', cz: 'Co znamená FH 4 330 220?', sk: 'Čo znamená FH 4 330 220?', hu: 'Mit jelent az FH 4 330 220?' },
        answer: {
          de: 'FH ist die Produktlinie (Frontvertical Horizontal), 4 verweist auf die Baugröße, 330 ist die Schnittlänge in cm (3.300 mm) und 220 die Schnitthöhe in mm.',
          en: 'FH is the product line (Front vertical Horizontal), 4 refers to the size class, 330 is the cutting length in cm (3,300 mm), and 220 is the cutting height in mm.',
          cz: 'FH je produktová řada (Front vertical Horizontal), 4 odkazuje na velikostní třídu, 330 je délka řezu v cm (3 300 mm) a 220 výška řezu v mm.',
          sk: 'FH je produktová rada, 4 označuje veľkostnú triedu, 330 je dĺžka rezu v cm (3 300 mm) a 220 výška rezu v mm.',
          hu: 'Az FH a terméksorozat jelölése, a 4 a méretosztályra utal, a 330 a vágóhossz cm-ben (3 300 mm), a 220 pedig a vágásmagasság mm-ben.',
        },
      },
      {
        question: { de: 'Welche Materialien können gesägt werden?', en: 'What materials can be cut?', cz: 'Jaké materiály lze řezat?', sk: 'Aké materiály možno rezať?', hu: 'Milyen anyagok vághatók?' },
        answer: {
          de: 'Die FH ist primär für Holz und Holzwerkstoffe (Spanplatte, MDF, HDF) ausgelegt. Kunststoff und dünnes Aluminium sind mit passenden Sägeblättern möglich, aber nicht die primäre Auslegung.',
          en: 'The FH is primarily designed for wood and wood-based materials (chipboard, MDF, HDF). Plastic and thin aluminium are possible with suitable saw blades but not the primary design.',
          cz: 'FH je primárně konstruována pro dřevo a dřevěné kompozity (dřevotříska, MDF, HDF). Plasty a tenký hliník jsou možné s vhodnými pilovými kotouči, ale nejsou primárním určením.',
          sk: 'FH je primárne konštruovaná pre drevo a drevené kompozity (drevotrieska, MDF, HDF). Plasty a tenký hliník sú možné s vhodnými pílovými kotúčmi, ale nie sú primárnym určením.',
          hu: 'Az FH elsődlegesen fa és faalapú anyagok (forgácslap, MDF, HDF) vágására készült. Műanyag és vékony alumínium megfelelő fűrészlapokkal lehetséges, de nem elsődleges rendeltetés.',
        },
      },
    ],
  },
  {
    slug: 'gabbiani-pt',
    category: 'panel-saw',
    manufacturer: 'Gabbiani',
    name: 'PT',
    year: 2021,
    condition: { de: 'gut', en: 'good', cz: 'dobrý', sk: 'dobrý', hu: 'jó' },
    status: 'available',
    images: ['/images/used-machines/gabbiani-pt-1.jpg', '/images/used-machines/gabbiani-pt-2.jpg'],
    shortDescription: {
      de: 'Plattenaufteilsäge mit automatischer Beschickung.',
      en: 'Panel saw with automatic feeding.',
      cz: 'Formátovací pila s automatickým podáváním.',
      sk: 'Formátovacia píla s automatickým podávaním.',
      hu: 'Lapfűrész automatikus adagolóval.',
    },
    longDescription: {
      de: `Die Gabbiani PT ist eine moderne Plattenaufteilsäge der italienischen Gabbiani-Gruppe (heute SCM-Konzern) mit integrierter automatischer Beschickung. Das Baujahr 2021 macht sie zu einer der jüngsten Gebrauchtmaschinen im Angebot — wirtschaftlich besonders attraktiv, da das Alter die Restnutzungsdauer nur minimal beeinflusst. Die automatische Plattenzuführung eliminiert manuelle Bestückung und erhöht den Sägendurchsatz deutlich. Gabbiani-Sägen sind für ihre italienische Präzisionsmechanik und die weit verbreiteten Bediensoftware bekannt. Für Betriebe mit mittelständischem Zuschnittbedarf, die in eine hochwertige Säge mit Automatikbeschickung investieren wollen, ist diese Gabbiani PT eine Top-Wahl.`,
      en: `The Gabbiani PT is a modern panel saw from the Italian Gabbiani group (today part of the SCM corporation) with integrated automatic feeding. The 2021 build year makes it one of the youngest used machines on offer — economically especially attractive because age minimally affects remaining service life. The automatic panel feeding eliminates manual loading and significantly increases saw throughput. Gabbiani saws are known for Italian precision engineering and widely-used operating software. For operations with mid-sized cutting needs seeking investment in a high-quality saw with automatic feeding, this Gabbiani PT is a top choice.`,
      cz: `Gabbiani PT je moderní formátovací pila z italské skupiny Gabbiani (dnes součást koncernu SCM) s integrovaným automatickým podáváním. Rok výroby 2021 z ní dělá jeden z nejmladších použitých strojů v nabídce — ekonomicky obzvlášť atraktivní, protože stáří minimálně ovlivňuje zbytkovou životnost. Automatické podávání desek odstraňuje ruční zakládání a výrazně zvyšuje průchodnost pily. Pro provozy se středně velkou potřebou řezání, které chtějí investovat do kvalitní pily s automatickým podáváním, je tato Gabbiani PT špičková volba.`,
      sk: `Gabbiani PT je moderná formátovacia píla z talianskej skupiny Gabbiani (dnes súčasť koncernu SCM) s integrovaným automatickým podávaním. Rok výroby 2021 z nej robí jeden z najmladších použitých strojov v ponuke — ekonomicky obzvlášť atraktívny, pretože vek minimálne ovplyvňuje zvyškovú životnosť.`,
      hu: `A Gabbiani PT egy modern lapfűrész az olasz Gabbiani csoporttól (ma az SCM vállalatcsoport része) integrált automatikus adagolóval. A 2021-es gyártási év az ajánlat egyik legújabb használt gépévé teszi — gazdaságilag különösen vonzó, mivel a kor alig befolyásolja a hátralévő élettartamot. Az automatikus lapadagolás kiküszöböli a kézi betöltést és jelentősen növeli a fűrész áteresztőképességét.`,
    },
    specs: [
      { label: { de: 'Baujahr', en: 'Year', cz: 'Rok výroby', sk: 'Rok výroby', hu: 'Évjárat' }, value: '2021' },
      { label: { de: 'Beschickung', en: 'Feeding', cz: 'Podávání', sk: 'Podávanie', hu: 'Adagolás' }, value: 'Automatisch / Automatic' },
      { label: { de: 'Typ', en: 'Type', cz: 'Typ', sk: 'Typ', hu: 'Típus' }, value: 'Panel saw' },
      { label: { de: 'Zustand', en: 'Condition', cz: 'Stav', sk: 'Stav', hu: 'Állapot' }, value: 'Gut / Good' },
    ],
    buyingAdvice: {
      de: 'Eine der jüngsten Gebrauchtmaschinen im Programm — ideal für Betriebe, die modernste Technik ohne den vollen Neupreis wünschen. Die Restlebensdauer ist praktisch identisch mit einer Neumaschine.',
      en: 'One of the youngest used machines in the program — ideal for operations wanting state-of-the-art technology without paying the full new price. Remaining service life is practically identical to a new machine.',
      cz: 'Jeden z nejmladších použitých strojů v programu — ideální pro provozy, které chtějí moderní techniku bez plné ceny nového stroje. Zbytková životnost je prakticky totožná s novým strojem.',
      sk: 'Jeden z najmladších použitých strojov v programe — ideálny pre prevádzky, ktoré chcú modernú techniku bez plnej ceny nového stroja.',
      hu: 'A programban kínált legújabb használt gépek egyike — ideális olyan üzemeknek, akik modern technológiát szeretnének az új ár kifizetése nélkül. A hátralévő élettartam gyakorlatilag megegyezik egy új gépével.',
    },
    faq: [
      {
        question: { de: 'Warum wird eine Maschine von 2021 schon verkauft?', en: 'Why is a 2021 machine already for sale?', cz: 'Proč je stroj z roku 2021 už na prodej?', sk: 'Prečo je stroj z roku 2021 už na predaj?', hu: 'Miért van már eladó egy 2021-es gép?' },
        answer: {
          de: 'Typische Gründe: Betriebsaufgabe, Produktionsumstellung, Upgrade auf größeres Modell oder Kapazitätsreduktion. Alle Maschinen werden technisch geprüft und mit Nachweisen zur Nutzungshistorie angeboten.',
          en: 'Typical reasons: business closure, production restructuring, upgrade to a larger model or capacity reduction. All machines are technically inspected and offered with documented usage history.',
          cz: 'Typické důvody: ukončení činnosti, restrukturalizace výroby, upgrade na větší model nebo snížení kapacity. Všechny stroje jsou technicky zkontrolovány a nabízeny s dokumentovanou historií používání.',
          sk: 'Typické dôvody: ukončenie činnosti, reštrukturalizácia výroby, upgrade na väčší model alebo zníženie kapacity. Všetky stroje sú technicky skontrolované a ponúkané s dokumentovanou históriou používania.',
          hu: 'Tipikus okok: üzemmegszüntetés, termelés átszervezése, nagyobb modellre váltás vagy kapacitáscsökkentés. Minden gép műszaki ellenőrzésen esik át és dokumentált használati előzményekkel kerül eladásra.',
        },
      },
    ],
  },
  {
    slug: 'scm-stefani-md',
    category: 'edgebanding',
    manufacturer: 'SCM Stefani',
    name: 'MD',
    year: 2022,
    condition: { de: 'sehr gut', en: 'very good', cz: 'velmi dobrý', sk: 'veľmi dobrý', hu: 'nagyon jó' },
    status: 'available',
    imageFit: 'cover',
    images: ['/images/used-machines/scm-stefani-md-1.jpg'],
    shortDescription: {
      de: 'Industrie-Kantenleimmaschine, Baujahr 2022, 415.000 lfm, EVA + PUR.',
      en: 'Industrial edgebanding machine, built 2022, 415,000 lfm, EVA + PUR.',
      cz: 'Průmyslová olepovačka hran, rok výroby 2022, 415 000 lfm, EVA + PUR.',
      sk: 'Priemyselná olepovačka hrán, rok výroby 2022, 415 000 lfm, EVA + PUR.',
      hu: 'Ipari élzárógép, gyártás 2022, 415 000 lfm, EVA + PUR.',
    },
    longDescription: {
      de: `Die SCM Stefani MD ist eine industrielle Kantenanleimmaschine der italienischen SCM-Gruppe für anspruchsvolle Möbel- und Plattenfertigung. Die hier angebotene Maschine stammt aus dem Baujahr 2022 und ist mit einer dokumentierten Laufleistung von 415.000 lfm noch sehr jung — ein Bruchteil der typischen Lebensdauer dieser Baureihe von 2–3 Millionen lfm. Ein entscheidendes Ausstattungsmerkmal ist das Doppel-Leimsystem für EVA- und PUR-Klebstoff: Während EVA die wirtschaftliche Standardverleimung abdeckt, ermöglicht PUR besonders feuchtigkeits- und hitzebeständige, nahezu unsichtbare Nullfugen-Verklebungen — ein klarer Qualitätsvorteil für hochwertige Küchen-, Bad- und Objektmöbel. Die Maschine befindet sich in sehr gutem, einsatzbereitem Zustand. Für Betriebe, die moderne SCM-Technik mit PUR-Fähigkeit zum Bruchteil des Neupreises suchen, ist diese Stefani MD ein attraktives Angebot.`,
      en: `The SCM Stefani MD is an industrial edgebanding machine from the Italian SCM group for demanding furniture and panel production. The machine offered here was built in 2022 and, with a documented usage of 415,000 lfm, is still very young — a fraction of the 2–3 million lfm typical service life of this series. A decisive feature is the dual glue system for EVA and PUR adhesive: while EVA covers economical standard bonding, PUR enables especially moisture- and heat-resistant, virtually invisible zero-joint bonds — a clear quality advantage for premium kitchen, bathroom and contract furniture. The machine is in very good, ready-to-run condition. For operations seeking modern SCM technology with PUR capability at a fraction of the new price, this Stefani MD is an attractive offer.`,
      cz: `SCM Stefani MD je průmyslová olepovačka hran italské skupiny SCM pro náročnou výrobu nábytku a desek. Zde nabízený stroj je z roku výroby 2022 a s doloženým nájezdem 415 000 lfm je stále velmi mladý — zlomek typické životnosti této řady 2–3 miliony lfm. Klíčovým prvkem výbavy je dvojitý systém nanášení lepidla pro EVA i PUR: zatímco EVA pokrývá ekonomické standardní lepení, PUR umožňuje obzvlášť vlhkost- a teplotně odolné, téměř neviditelné spáry s nulovou spárou — jasná kvalitativní výhoda pro špičkový kuchyňský, koupelnový a objektový nábytek. Stroj je ve velmi dobrém, provozuschopném stavu.`,
      sk: `SCM Stefani MD je priemyselná olepovačka hrán talianskej skupiny SCM pre náročnú výrobu nábytku a dosiek. Tu ponúkaný stroj je z roku výroby 2022 a s doloženým nájazdom 415 000 lfm je stále veľmi mladý — zlomok typickej životnosti tejto rady 2–3 milióny lfm. Kľúčovým prvkom výbavy je dvojitý systém nanášania lepidla pre EVA aj PUR: zatiaľ čo EVA pokrýva ekonomické štandardné lepenie, PUR umožňuje obzvlášť vlhkosti- a teplotne odolné, takmer neviditeľné spoje s nulovou škárou. Stroj je vo veľmi dobrom, prevádzkyschopnom stave.`,
      hu: `A SCM Stefani MD ipari élzárógép az olasz SCM csoporttól, igényes bútor- és lapgyártáshoz. Az itt kínált gép 2022-es gyártású, és a dokumentált 415 000 lfm futásteljesítménnyel még nagyon fiatal — töredéke a sorozat 2–3 millió lfm-es jellemző élettartamának. Meghatározó felszereltsége a kettős ragasztórendszer EVA- és PUR-ragasztóhoz: míg az EVA a gazdaságos standard ragasztást fedi le, a PUR különösen nedvesség- és hőálló, szinte láthatatlan nullfugás kötéseket tesz lehetővé — egyértelmű minőségi előny prémium konyha-, fürdő- és objektumbútorokhoz. A gép nagyon jó, üzemkész állapotban van.`,
    },
    specs: [
      { label: { de: 'Baujahr', en: 'Year', cz: 'Rok výroby', sk: 'Rok výroby', hu: 'Évjárat' }, value: '2022' },
      { label: { de: 'Laufleistung', en: 'Usage', cz: 'Nájezd', sk: 'Nájazd', hu: 'Futásteljesítmény' }, value: '415.000 lfm' },
      { label: { de: 'Leimsystem', en: 'Glue system', cz: 'Systém lepidla', sk: 'Systém lepidla', hu: 'Ragasztórendszer' }, value: 'EVA + PUR' },
      { label: { de: 'Typ', en: 'Type', cz: 'Typ', sk: 'Typ', hu: 'Típus' }, value: 'Industrial edgebander' },
      { label: { de: 'Zustand', en: 'Condition', cz: 'Stav', sk: 'Stav', hu: 'Állapot' }, value: 'Sehr gut / Very good' },
    ],
    buyingAdvice: {
      de: 'Die Stefani MD ist ideal für Betriebe, die hochwertige Kanten mit PUR-Qualität fertigen wollen, ohne den vollen Neupreis zu zahlen. Baujahr 2022 und niedrige Laufleistung bedeuten praktisch Neumaschinen-Restlebensdauer bei deutlichem Preisvorteil.',
      en: 'The Stefani MD is ideal for operations wanting to produce premium PUR-quality edges without paying the full new price. The 2022 build year and low usage mean practically new-machine remaining life at a significant price advantage.',
      cz: 'Stefani MD je ideální pro provozy, které chtějí vyrábět kvalitní hrany v PUR kvalitě bez plné ceny nového stroje. Rok výroby 2022 a nízký nájezd znamenají prakticky zbytkovou životnost nového stroje s výrazným cenovým zvýhodněním.',
      sk: 'Stefani MD je ideálna pre prevádzky, ktoré chcú vyrábať kvalitné hrany v PUR kvalite bez plnej ceny nového stroja. Rok výroby 2022 a nízky nájazd znamenajú prakticky zvyškovú životnosť nového stroja s výrazným cenovým zvýhodnením.',
      hu: 'A Stefani MD ideális olyan üzemeknek, akik prémium PUR-minőségű éleket szeretnének gyártani az új ár kifizetése nélkül. A 2022-es évjárat és az alacsony futásteljesítmény gyakorlatilag új gép hátralévő élettartamát jelenti jelentős árelőnnyel.',
    },
    faq: [
      {
        question: { de: 'Was bedeutet EVA + PUR?', en: 'What does EVA + PUR mean?', cz: 'Co znamená EVA + PUR?', sk: 'Čo znamená EVA + PUR?', hu: 'Mit jelent az EVA + PUR?' },
        answer: {
          de: 'Die Maschine kann mit zwei Klebstoffarten arbeiten: EVA (wirtschaftlich, schnell, Standard) und PUR (Polyurethan – feuchtigkeits- und hitzebeständig, nahezu unsichtbare Fuge). PUR ist die Premium-Verleimung für hochbeanspruchte Möbel.',
          en: 'The machine can work with two adhesive types: EVA (economical, fast, standard) and PUR (polyurethane – moisture- and heat-resistant, virtually invisible joint). PUR is the premium bond for heavy-duty furniture.',
          cz: 'Stroj umí pracovat se dvěma druhy lepidla: EVA (ekonomické, rychlé, standardní) a PUR (polyuretan – odolné vlhkosti a teplu, téměř neviditelná spára). PUR je prémiové lepení pro vysoce namáhaný nábytek.',
          sk: 'Stroj dokáže pracovať s dvoma druhmi lepidla: EVA (ekonomické, rýchle, štandardné) a PUR (polyuretán – odolné vlhkosti a teplu, takmer neviditeľná škára). PUR je prémiové lepenie pre vysoko namáhaný nábytok.',
          hu: 'A gép kétféle ragasztóval dolgozik: EVA (gazdaságos, gyors, standard) és PUR (poliuretán – nedvesség- és hőálló, szinte láthatatlan fuga). A PUR a prémium kötés erősen igénybe vett bútorokhoz.',
        },
      },
      {
        question: { de: 'Wie viel Lebensdauer hat die Maschine noch?', en: 'How much service life is left?', cz: 'Kolik životnosti stroji ještě zbývá?', sk: 'Koľko životnosti stroju ešte zostáva?', hu: 'Mennyi élettartam van még hátra?' },
        answer: {
          de: 'Industrie-Kantenleimmaschinen erreichen bei regelmäßiger Wartung typischerweise 2–3 Millionen lfm. Bei 415.000 lfm hat diese Stefani MD also rund 80–85 % ihrer Lebenszeit noch vor sich.',
          en: 'Industrial edgebanders typically reach 2–3 million lfm with regular maintenance. At 415,000 lfm, this Stefani MD still has roughly 80–85 % of its service life ahead.',
          cz: 'Průmyslové olepovačky hran dosahují při pravidelné údržbě typicky 2–3 milionů lfm. Při 415 000 lfm má tato Stefani MD před sebou ještě zhruba 80–85 % své životnosti.',
          sk: 'Priemyselné olepovačky hrán dosahujú pri pravidelnej údržbe typicky 2–3 milióny lfm. Pri 415 000 lfm má táto Stefani MD pred sebou ešte zhruba 80–85 % svojej životnosti.',
          hu: 'Az ipari élzárógépek rendszeres karbantartással jellemzően 2–3 millió lfm-et érnek el. 415 000 lfm-nél ennek a Stefani MD-nek még nagyjából 80–85 % élettartama van hátra.',
        },
      },
    ],
  },
  {
    slug: 'scm-stefani-kd',
    category: 'edgebanding',
    manufacturer: 'SCM Stefani',
    name: 'KD',
    year: 2024,
    condition: { de: 'sehr gut', en: 'very good', cz: 'velmi dobrý', sk: 'veľmi dobrý', hu: 'nagyon jó' },
    status: 'available',
    imageFit: 'cover',
    images: [
      '/images/used-machines/scm-stefani-kd-1.jpg',
      '/images/used-machines/scm-stefani-kd-2.jpg',
    ],
    shortDescription: {
      de: 'Kantenleimmaschine, Baujahr 2024, nur 215.000 lfm, EVA + PUR.',
      en: 'Edgebanding machine, built 2024, only 215,000 lfm, EVA + PUR.',
      cz: 'Olepovačka hran, rok výroby 2024, jen 215 000 lfm, EVA + PUR.',
      sk: 'Olepovačka hrán, rok výroby 2024, len 215 000 lfm, EVA + PUR.',
      hu: 'Élzárógép, gyártás 2024, csak 215 000 lfm, EVA + PUR.',
    },
    longDescription: {
      de: `Die SCM Stefani KD ist eine kompakte, leistungsstarke Kantenanleimmaschine der italienischen SCM-Gruppe — die jüngste Gebrauchtmaschine im Asamer-Programm. Baujahr 2024 und eine dokumentierte Laufleistung von nur 215.000 lfm machen sie praktisch zu einer fast neuwertigen Maschine: Optisch und technisch nahezu auf Neumaschinen-Niveau, jedoch zu einem deutlich attraktiveren Preis. Wie die größere MD verfügt auch die KD über ein Doppel-Leimsystem für EVA- und PUR-Klebstoff. PUR ermöglicht feuchtigkeits- und hitzebeständige, optisch nahezu fugenlose Verklebungen für höchste Ansprüche, während EVA die wirtschaftliche Standardproduktion abdeckt. Die KD-Baureihe richtet sich an Tischlereien und Möbelbetriebe, die kompakte Stellfläche mit industrieller Verarbeitungsqualität verbinden möchten. Für Käufer, die nahezu Neumaschinen-Qualität mit sofortiger Verfügbarkeit suchen, ist diese Stefani KD eine herausragende Gelegenheit.`,
      en: `The SCM Stefani KD is a compact, powerful edgebanding machine from the Italian SCM group — the youngest used machine in the Asamer program. A 2024 build year and a documented usage of only 215,000 lfm make it practically an as-new machine: visually and technically near new-machine level, but at a significantly more attractive price. Like the larger MD, the KD also features a dual glue system for EVA and PUR adhesive. PUR enables moisture- and heat-resistant, visually near-seamless bonds for the highest demands, while EVA covers economical standard production. The KD series is aimed at joinery shops and furniture operations wanting to combine a compact footprint with industrial processing quality. For buyers seeking near-new quality with immediate availability, this Stefani KD is an outstanding opportunity.`,
      cz: `SCM Stefani KD je kompaktní, výkonná olepovačka hran italské skupiny SCM — nejmladší použitý stroj v programu Asamer. Rok výroby 2024 a doložený nájezd pouhých 215 000 lfm z ní dělají prakticky téměř nový stroj: opticky i technicky takřka na úrovni nového stroje, avšak za výrazně atraktivnější cenu. Stejně jako větší MD má i KD dvojitý systém nanášení lepidla pro EVA i PUR. PUR umožňuje vlhkosti- a teplotně odolné, opticky téměř bezspárové spoje pro nejvyšší nároky, zatímco EVA pokrývá ekonomickou standardní výrobu. Pro zájemce hledající téměř novou kvalitu s okamžitou dostupností je tato Stefani KD mimořádná příležitost.`,
      sk: `SCM Stefani KD je kompaktná, výkonná olepovačka hrán talianskej skupiny SCM — najmladší použitý stroj v programe Asamer. Rok výroby 2024 a doložený nájazd iba 215 000 lfm z nej robia prakticky takmer nový stroj: opticky aj technicky takmer na úrovni nového stroja, avšak za výrazne atraktívnejšiu cenu. Rovnako ako väčšia MD má aj KD dvojitý systém nanášania lepidla pre EVA aj PUR. PUR umožňuje vlhkosti- a teplotne odolné, takmer bezškárové spoje, zatiaľ čo EVA pokrýva ekonomickú štandardnú výrobu.`,
      hu: `A SCM Stefani KD kompakt, nagy teljesítményű élzárógép az olasz SCM csoporttól — az Asamer kínálatának legújabb használt gépe. A 2024-es gyártási év és a dokumentált, mindössze 215 000 lfm futásteljesítmény gyakorlatilag szinte újszerű géppé teszi: optikailag és műszakilag is közel új gép szintjén, ám jóval vonzóbb áron. A nagyobb MD-hez hasonlóan a KD is rendelkezik kettős ragasztórendszerrel EVA- és PUR-ragasztóhoz. A PUR nedvesség- és hőálló, optikailag szinte fugamentes kötéseket tesz lehetővé a legmagasabb igényekhez, míg az EVA a gazdaságos standard gyártást fedi le. Azoknak a vásárlóknak, akik közel új minőséget keresnek azonnali elérhetőséggel, ez a Stefani KD kivételes lehetőség.`,
    },
    specs: [
      { label: { de: 'Baujahr', en: 'Year', cz: 'Rok výroby', sk: 'Rok výroby', hu: 'Évjárat' }, value: '2024' },
      { label: { de: 'Laufleistung', en: 'Usage', cz: 'Nájezd', sk: 'Nájazd', hu: 'Futásteljesítmény' }, value: '215.000 lfm' },
      { label: { de: 'Leimsystem', en: 'Glue system', cz: 'Systém lepidla', sk: 'Systém lepidla', hu: 'Ragasztórendszer' }, value: 'EVA + PUR' },
      { label: { de: 'Typ', en: 'Type', cz: 'Typ', sk: 'Typ', hu: 'Típus' }, value: 'Industrial edgebander' },
      { label: { de: 'Zustand', en: 'Condition', cz: 'Stav', sk: 'Stav', hu: 'Állapot' }, value: 'Sehr gut / Very good' },
    ],
    buyingAdvice: {
      de: 'Mit Baujahr 2024 und nur 215.000 lfm ist die Stefani KD die jüngste Maschine im Programm — fast neuwertig. Ideal für Betriebe, die Neumaschinen-Qualität mit PUR-Fähigkeit wollen, aber sofort lieferbar und ohne Neupreis.',
      en: 'With a 2024 build year and only 215,000 lfm, the Stefani KD is the youngest machine in the program — practically as new. Ideal for operations wanting new-machine quality with PUR capability, but immediately available and without the new price.',
      cz: 'S rokem výroby 2024 a pouze 215 000 lfm je Stefani KD nejmladším strojem v programu — téměř nová. Ideální pro provozy, které chtějí kvalitu nového stroje s PUR, ale ihned dostupnou a bez ceny nového.',
      sk: 'S rokom výroby 2024 a iba 215 000 lfm je Stefani KD najmladším strojom v programe — takmer nová. Ideálna pre prevádzky, ktoré chcú kvalitu nového stroja s PUR, ale ihneď dostupnú a bez ceny nového.',
      hu: 'A 2024-es évjárattal és mindössze 215 000 lfm-mel a Stefani KD a program legújabb gépe — szinte újszerű. Ideális olyan üzemeknek, akik új gép minőséget szeretnének PUR-képességgel, de azonnal elérhetően és új ár nélkül.',
    },
    faq: [
      {
        question: { de: 'Was bedeutet EVA + PUR?', en: 'What does EVA + PUR mean?', cz: 'Co znamená EVA + PUR?', sk: 'Čo znamená EVA + PUR?', hu: 'Mit jelent az EVA + PUR?' },
        answer: {
          de: 'Die Maschine kann mit zwei Klebstoffarten arbeiten: EVA (wirtschaftlich, schnell, Standard) und PUR (Polyurethan – feuchtigkeits- und hitzebeständig, nahezu unsichtbare Fuge). PUR ist die Premium-Verleimung für hochbeanspruchte Möbel.',
          en: 'The machine can work with two adhesive types: EVA (economical, fast, standard) and PUR (polyurethane – moisture- and heat-resistant, virtually invisible joint). PUR is the premium bond for heavy-duty furniture.',
          cz: 'Stroj umí pracovat se dvěma druhy lepidla: EVA (ekonomické, rychlé, standardní) a PUR (polyuretan – odolné vlhkosti a teplu, téměř neviditelná spára). PUR je prémiové lepení pro vysoce namáhaný nábytek.',
          sk: 'Stroj dokáže pracovať s dvoma druhmi lepidla: EVA (ekonomické, rýchle, štandardné) a PUR (polyuretán – odolné vlhkosti a teplu, takmer neviditeľná škára). PUR je prémiové lepenie pre vysoko namáhaný nábytok.',
          hu: 'A gép kétféle ragasztóval dolgozik: EVA (gazdaságos, gyors, standard) és PUR (poliuretán – nedvesség- és hőálló, szinte láthatatlan fuga). A PUR a prémium kötés erősen igénybe vett bútorokhoz.',
        },
      },
      {
        question: { de: 'Ist eine Maschine von 2024 wirklich gebraucht?', en: 'Is a 2024 machine really used?', cz: 'Je stroj z roku 2024 opravdu použitý?', sk: 'Je stroj z roku 2024 naozaj použitý?', hu: 'Egy 2024-es gép valóban használt?' },
        answer: {
          de: 'Ja, aber mit nur 215.000 lfm Laufleistung ist sie nahezu neuwertig — ein winziger Bruchteil der typischen Lebensdauer von 2–3 Millionen lfm. Technisch und optisch praktisch auf Neumaschinen-Niveau.',
          en: 'Yes, but with only 215,000 lfm of usage it is practically as-new — a tiny fraction of the typical 2–3 million lfm service life. Technically and visually essentially at new-machine level.',
          cz: 'Ano, ale s nájezdem pouhých 215 000 lfm je téměř nová — nepatrný zlomek typické životnosti 2–3 milionů lfm. Technicky i opticky prakticky na úrovni nového stroje.',
          sk: 'Áno, ale s nájazdom iba 215 000 lfm je takmer nová — nepatrný zlomok typickej životnosti 2–3 milióny lfm. Technicky aj opticky prakticky na úrovni nového stroja.',
          hu: 'Igen, de mindössze 215 000 lfm futásteljesítménnyel szinte újszerű — a 2–3 millió lfm-es jellemző élettartam apró töredéke. Műszakilag és optikailag gyakorlatilag új gép szintjén.',
        },
      },
    ],
  },
  {
    slug: 'holz-her-sprint-1329',
    category: 'edgebanding',
    manufacturer: 'HOLZ-HER',
    name: 'SPRINT 1329 multi',
    year: 2020,
    condition: { de: 'sehr gut', en: 'very good', cz: 'velmi dobrý', sk: 'veľmi dobrý', hu: 'nagyon jó' },
    status: 'available',
    imageFit: 'cover',
    shortDescription: {
      de: 'Einseitige Kantenleimmaschine, Baujahr 2020, mit Glu Jet Leimsystem.',
      en: 'Single-sided edgebanding machine, built 2020, with Glu Jet glue system.',
      cz: 'Jednostranná olepovačka hran, rok výroby 2020, se systémem Glu Jet.',
      sk: 'Jednostranná olepovačka hrán, rok výroby 2020, so systémom Glu Jet.',
      hu: 'Egyoldalas élzárógép, gyártás 2020, Glu Jet ragasztórendszerrel.',
    },
    longDescription: {
      de: `Die HOLZ-HER SPRINT 1329 multi ist eine einseitige Kantenanleimmaschine für Tischlereien und Möbelbetriebe, die industrielle Kantenqualität auf kompakter Stellfläche brauchen. HOLZ-HER gehört zur Weinig-Gruppe und zählt im deutschsprachigen Raum seit Jahrzehnten zu den etablierten Herstellern von Kantenanleimtechnik. Das Kernstück dieser Maschine ist das Glu Jet Leimauftragssystem: Statt einer Leimwalze trägt eine Düse den Klebstoff als dünnen Film direkt auf die Kante auf. Das ergibt eine deutlich feinere, optisch nahezu unsichtbare Fuge, einen spürbar geringeren Leimverbrauch und erheblich kürzere Aufheiz- und Reinigungszeiten — die Maschine ist in wenigen Minuten produktionsbereit statt nach langem Vorheizen. Glu Jet verarbeitet sowohl EVA- als auch PUR-Klebstoff, sodass neben der wirtschaftlichen Standardverleimung auch feuchtigkeits- und hitzebeständige Premiumkanten für Küchen-, Bad- und Objektmöbel möglich sind. Die hier angebotene Maschine stammt aus Baujahr 2020 und befindet sich in gepflegtem, einsatzbereitem Zustand. Für Betriebe, die eine moderne Kantenanleimmaschine mit Dünnschicht-Leimauftrag suchen, ohne den vollen Neupreis zu zahlen, ist diese SPRINT 1329 eine wirtschaftlich attraktive Gelegenheit. Ausstattungsdetails, Aggregatbestückung und Laufleistung teilen wir Ihnen auf Anfrage gerne mit.`,
      en: `The HOLZ-HER SPRINT 1329 multi is a single-sided edgebanding machine for joinery shops and furniture operations that need industrial edge quality on a compact footprint. HOLZ-HER is part of the Weinig group and has been an established manufacturer of edgebanding technology in the German-speaking market for decades. The core of this machine is the Glu Jet glue application system: instead of a glue roller, a nozzle applies the adhesive as a thin film directly onto the edge. This produces a noticeably finer, visually near-invisible joint, significantly lower glue consumption and much shorter heat-up and cleaning times — the machine is production-ready within minutes instead of after a long preheating phase. Glu Jet processes both EVA and PUR adhesive, so in addition to economical standard bonding, moisture- and heat-resistant premium edges for kitchen, bathroom and contract furniture are possible. The machine offered here was built in 2020 and is in well-maintained, ready-to-run condition. For operations looking for a modern edgebander with thin-film glue application without paying the full new price, this SPRINT 1329 is an economically attractive opportunity. Equipment details, unit configuration and usage figures are available on request.`,
      cz: `HOLZ-HER SPRINT 1329 multi je jednostranná olepovačka hran pro truhlárny a nábytkářské provozy, které potřebují průmyslovou kvalitu hran na kompaktní ploše. HOLZ-HER patří do skupiny Weinig a v německy mluvícím prostoru je po desetiletí jedním z etablovaných výrobců techniky pro olepování hran. Jádrem stroje je systém nanášení lepidla Glu Jet: místo lepicího válce nanáší tryska lepidlo v tenkém filmu přímo na hranu. Výsledkem je výrazně jemnější, opticky téměř neviditelná spára, znatelně nižší spotřeba lepidla a podstatně kratší doby nahřívání a čištění — stroj je připraven k výrobě během několika minut místo po dlouhém předehřevu. Glu Jet zpracovává lepidlo EVA i PUR, takže vedle ekonomického standardního lepení jsou možné i vlhkosti- a teplotně odolné prémiové hrany pro kuchyňský, koupelnový a objektový nábytek. Zde nabízený stroj je z roku výroby 2020 a je v pečovaném, provozuschopném stavu. Pro provozy, které hledají moderní olepovačku s tenkovrstvým nanášením lepidla bez plné ceny nového stroje, je tato SPRINT 1329 ekonomicky zajímavá příležitost. Detaily výbavy, osazení agregáty a nájezd rádi sdělíme na vyžádání.`,
      sk: `HOLZ-HER SPRINT 1329 multi je jednostranná olepovačka hrán pre stolárstva a nábytkárske prevádzky, ktoré potrebujú priemyselnú kvalitu hrán na kompaktnej ploche. HOLZ-HER patrí do skupiny Weinig a v nemecky hovoriacom priestore je po desaťročia jedným z etablovaných výrobcov techniky na olepovanie hrán. Jadrom stroja je systém nanášania lepidla Glu Jet: namiesto lepiaceho valca nanáša tryska lepidlo v tenkom filme priamo na hranu. Výsledkom je výrazne jemnejšia, opticky takmer neviditeľná škára, citeľne nižšia spotreba lepidla a podstatne kratšie časy nahrievania a čistenia — stroj je pripravený na výrobu v priebehu niekoľkých minút namiesto po dlhom predhreve. Glu Jet spracováva lepidlo EVA aj PUR, takže popri ekonomickom štandardnom lepení sú možné aj vlhkosti- a teplotne odolné prémiové hrany. Tu ponúkaný stroj je z roku výroby 2020 a je v udržiavanom, prevádzkyschopnom stave. Detaily výbavy, osadenie agregátmi a nájazd radi oznámime na vyžiadanie.`,
      hu: `A HOLZ-HER SPRINT 1329 multi egyoldalas élzárógép asztalosüzemek és bútorgyártók számára, akiknek ipari élminőségre van szükségük kompakt helyigény mellett. A HOLZ-HER a Weinig csoport tagja, és a német nyelvterületen évtizedek óta az élzárástechnika elismert gyártói közé tartozik. A gép magja a Glu Jet ragasztófelhordó rendszer: ragasztóhenger helyett egy fúvóka vékony filmként viszi fel a ragasztót közvetlenül az élre. Ez érezhetően finomabb, optikailag szinte láthatatlan fugát, jelentősen alacsonyabb ragasztófogyasztást és lényegesen rövidebb felfűtési és tisztítási időt eredményez — a gép néhány perc alatt üzemkész, nem pedig hosszú előmelegítés után. A Glu Jet EVA- és PUR-ragasztót egyaránt feldolgoz, így a gazdaságos standard ragasztás mellett nedvesség- és hőálló prémium élek is készíthetők konyha-, fürdő- és objektumbútorokhoz. Az itt kínált gép 2020-as gyártású, gondozott, üzemkész állapotban. Azoknak az üzemeknek, akik modern, vékonyfilmes ragasztófelhordású élzárógépet keresnek az új ár kifizetése nélkül, ez a SPRINT 1329 gazdaságilag vonzó lehetőség. A felszereltség részleteit, az aggregátok kiépítését és a futásteljesítményt kérésre szívesen megadjuk.`,
    },
    specs: [
      { label: { de: 'Baujahr', en: 'Year', cz: 'Rok výroby', sk: 'Rok výroby', hu: 'Évjárat' }, value: '2020' },
      { label: { de: 'Typ', en: 'Type', cz: 'Typ', sk: 'Typ', hu: 'Típus' }, value: 'Einseitige Kantenanleimmaschine / Single-sided edgebander' },
      { label: { de: 'Leimsystem', en: 'Glue system', cz: 'Systém lepidla', sk: 'Systém lepidla', hu: 'Ragasztórendszer' }, value: 'Glu Jet (EVA / PUR)' },
      { label: { de: 'Zustand', en: 'Condition', cz: 'Stav', sk: 'Stav', hu: 'Állapot' }, value: 'Sehr gut / Very good' },
      { label: { de: 'Ausstattung & Laufleistung', en: 'Equipment & usage', cz: 'Výbava a nájezd', sk: 'Výbava a nájazd', hu: 'Felszereltség és futásteljesítmény' }, value: 'Auf Anfrage / On request' },
      { label: { de: 'Preis', en: 'Price', cz: 'Cena', sk: 'Cena', hu: 'Ár' }, value: 'Auf Anfrage / On request' },
    ],
    buyingAdvice: {
      de: 'Empfehlenswert für Tischlereien und Möbelbetriebe, die von einer älteren Walzenauftrag-Maschine auf modernen Dünnschicht-Leimauftrag umsteigen wollen. Baujahr 2020 bedeutet aktuelle Technik mit hoher Restlebensdauer bei deutlichem Preisvorteil gegenüber der Neumaschine. Asamer prüft die Maschine vor Übergabe technisch und organisiert auf Wunsch Transport, Montage und Bedienereinweisung.',
      en: 'Recommended for joinery shops and furniture operations wanting to move from an older roller-application machine to modern thin-film glue application. The 2020 build year means current technology with high remaining service life at a clear price advantage over a new machine. Asamer technically inspects the machine before handover and, on request, organises transport, installation and operator training.',
      cz: 'Doporučujeme pro truhlárny a nábytkářské provozy, které chtějí přejít ze staršího válcového nanášení na moderní tenkovrstvý nános lepidla. Rok výroby 2020 znamená aktuální techniku s vysokou zbytkovou životností při výrazném cenovém zvýhodnění oproti novému stroji. Asamer stroj před předáním technicky zkontroluje a na přání zajistí dopravu, montáž i zaškolení obsluhy.',
      sk: 'Odporúčame pre stolárstva a nábytkárske prevádzky, ktoré chcú prejsť zo staršieho valcového nanášania na moderný tenkovrstvový nános lepidla. Rok výroby 2020 znamená aktuálnu techniku s vysokou zvyškovou životnosťou pri výraznom cenovom zvýhodnení oproti novému stroju. Asamer stroj pred odovzdaním technicky skontroluje a na želanie zabezpečí dopravu, montáž aj zaškolenie obsluhy.',
      hu: 'Ajánlott olyan asztalos- és bútorüzemeknek, akik régebbi hengeres felhordású gépről szeretnének modern vékonyfilmes ragasztófelhordásra váltani. A 2020-as évjárat aktuális technikát jelent magas hátralévő élettartammal, jelentős árelőnnyel az új géphez képest. Az Asamer átadás előtt műszakilag ellenőrzi a gépet, és kérésre megszervezi a szállítást, a telepítést és az üzemeltető betanítását.',
    },
    faq: [
      {
        question: { de: 'Was ist das Glu Jet Leimsystem?', en: 'What is the Glu Jet glue system?', cz: 'Co je systém Glu Jet?', sk: 'Čo je systém Glu Jet?', hu: 'Mi az a Glu Jet ragasztórendszer?' },
        answer: {
          de: 'Glu Jet ist das Dünnschicht-Leimauftragssystem von HOLZ-HER. Der Klebstoff wird über eine Düse als hauchdünner Film aufgetragen statt über eine Leimwalze. Vorteile: nahezu unsichtbare Fuge, geringerer Leimverbrauch, sehr kurze Aufheizzeit und deutlich einfachere Reinigung.',
          en: 'Glu Jet is HOLZ-HER\'s thin-film glue application system. The adhesive is applied through a nozzle as an ultra-thin film instead of via a glue roller. Advantages: virtually invisible joint, lower glue consumption, very short heat-up time and considerably easier cleaning.',
          cz: 'Glu Jet je systém tenkovrstvého nanášení lepidla od HOLZ-HER. Lepidlo se nanáší tryskou jako velmi tenký film namísto lepicího válce. Výhody: téměř neviditelná spára, nižší spotřeba lepidla, velmi krátká doba nahřátí a podstatně snazší čištění.',
          sk: 'Glu Jet je systém tenkovrstvového nanášania lepidla od HOLZ-HER. Lepidlo sa nanáša tryskou ako veľmi tenký film namiesto lepiaceho valca. Výhody: takmer neviditeľná škára, nižšia spotreba lepidla, veľmi krátky čas nahriatia a podstatne jednoduchšie čistenie.',
          hu: 'A Glu Jet a HOLZ-HER vékonyfilmes ragasztófelhordó rendszere. A ragasztót fúvóka viszi fel ultravékony filmként ragasztóhenger helyett. Előnyök: szinte láthatatlan fuga, alacsonyabb ragasztófogyasztás, nagyon rövid felfűtési idő és lényegesen egyszerűbb tisztítás.',
        },
      },
      {
        question: { de: 'Kann die Maschine PUR verarbeiten?', en: 'Can the machine process PUR?', cz: 'Umí stroj zpracovat PUR?', sk: 'Dokáže stroj spracovať PUR?', hu: 'Tud a gép PUR-t feldolgozni?' },
        answer: {
          de: 'Das Glu Jet System ist grundsätzlich für EVA- und PUR-Klebstoff ausgelegt. Welche Konfiguration bei dieser konkreten Maschine verbaut ist, klären wir gerne im Gespräch — sprechen Sie uns einfach an.',
          en: 'The Glu Jet system is designed for both EVA and PUR adhesive. Which configuration is fitted on this specific machine is something we are happy to clarify — simply get in touch.',
          cz: 'Systém Glu Jet je v zásadě určen pro lepidlo EVA i PUR. Jakou konfiguraci má tento konkrétní stroj, rádi upřesníme při osobním jednání — stačí se ozvat.',
          sk: 'Systém Glu Jet je v zásade určený pre lepidlo EVA aj PUR. Akú konfiguráciu má tento konkrétny stroj, radi upresníme pri osobnom jednaní — stačí sa ozvať.',
          hu: 'A Glu Jet rendszer alapvetően EVA- és PUR-ragasztóhoz készült. Hogy ezen a konkrét gépen milyen konfiguráció található, azt szívesen egyeztetjük — keressen minket bizalommal.',
        },
      },
      {
        question: { de: 'Gibt es Gewährleistung?', en: 'Is there a warranty?', cz: 'Je poskytnuta záruka?', sk: 'Je poskytnutá záruka?', hu: 'Van garancia?' },
        answer: {
          de: 'Für Gebrauchtmaschinen bieten wir 3 Monate Gewährleistung auf Funktionalität. Details werden im Kaufvertrag festgelegt.',
          en: 'For used machines we provide 3 months of functional warranty. Details are specified in the purchase contract.',
          cz: 'U použitých strojů poskytujeme 3 měsíce záruky na funkčnost. Detaily jsou stanoveny v kupní smlouvě.',
          sk: 'Pri použitých strojoch poskytujeme 3 mesiace záruky na funkčnosť. Detaily sú stanovené v kúpnej zmluve.',
          hu: 'Használt gépekre 3 hónap működési garanciát biztosítunk. A részleteket az adásvételi szerződés rögzíti.',
        },
      },
      {
        question: { de: 'Können Sie Transport und Installation übernehmen?', en: 'Can you handle transport and installation?', cz: 'Můžete zajistit dopravu a instalaci?', sk: 'Môžete zabezpečiť dopravu a inštaláciu?', hu: 'Vállalják a szállítást és telepítést?' },
        answer: {
          de: 'Ja — gegen Aufpreis organisieren wir Transport nach CZ, SK oder HU und die Maschineninstallation vor Ort. Einweisung des Bedieners inklusive.',
          en: 'Yes — for an additional fee we organise transport to CZ, SK or HU and on-site machine installation. Operator training included.',
          cz: 'Ano — za příplatek zajistíme dopravu do ČR, SK nebo HU a instalaci stroje na místě. Zaškolení obsluhy v ceně.',
          sk: 'Áno — za príplatok zabezpečíme dopravu do ČR, SK alebo HU a inštaláciu stroja na mieste. Zaškolenie obsluhy v cene.',
          hu: 'Igen — felár ellenében vállaljuk a szállítást CZ, SK vagy HU területére és a gép helyszíni telepítését. Az üzemeltető betanítása az árban.',
        },
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const machinesBySlug = new Map(USED_MACHINES.map((m) => [m.slug, m]));

export const getUsedMachineBySlug = (slug: string | undefined): UsedMachine | undefined =>
  slug ? machinesBySlug.get(slug) : undefined;

export const ALL_USED_MACHINE_SLUGS = USED_MACHINES.map((m) => m.slug);

/* ------------------------------------------------------------------ */
/*  Gebrauchtmaschinen-Seiten je Kategorie                             */
/* ------------------------------------------------------------------ */

/**
 * Kategorien mit eigener Gebrauchtmaschinen-Seite, als kanonischer Slug (wie
 * die Schluessel in `SLUG_TRANSLATIONS`). Kategorien ohne Eintrag gehoeren auf
 * die Uebersicht /pouzite-stroje.
 */
export const USED_CATEGORY_PAGES: Partial<Record<UsedMachineCategory, string>> = {
  edgebanding: '/pouzite-stroje/olepovacky-hran',
};

/** Kanonischer Slug der Gebrauchtmaschinen-Seite, auf die eine Kategorie gehoert. */
export const usedCategoryPageSlug = (category: UsedMachineCategory): string =>
  USED_CATEGORY_PAGES[category] ?? '/pouzite-stroje';

export const getUsedMachinesByCategory = (category: UsedMachineCategory): UsedMachine[] =>
  USED_MACHINES.filter((m) => m.category === category);

/* ------------------------------------------------------------------ */
/*  Verkaufte und entfernte Maschinen                                  */
/* ------------------------------------------------------------------ */

/**
 * Maschinen, deren Detailseite es nicht mehr gibt. Jede bekommt in
 * `scripts/generate-vercel-config.ts` eine 301 je Sprache auf
 * `usedCategoryPageSlug(category)`. Eintraege bleiben stehen — die alten URLs
 * haben Backlinks und stehen in Suchindizes.
 */
export interface RetiredUsedMachine {
  slug: string;
  category: UsedMachineCategory;
  /** Wann entfernt — nur zur Nachvollziehbarkeit. */
  removed: string;
}

export const RETIRED_USED_MACHINES: RetiredUsedMachine[] = [
  // Beide lieferten bis Oktober 2026 eine 404 (Search Console, Befund 14.10.2026).
  { slug: 'holz-her-1308xl-power', category: 'edgebanding', removed: 'vor 2026-10' },
  { slug: 'scm-stefani-solution-md', category: 'edgebanding', removed: 'vor 2026-10' },
  // Tornado Top verkauft, Mühlbock-Kammern aus dem Angebot genommen.
  { slug: 'ott-tornado-top', category: 'edgebanding', removed: '2026-10-28' },
  { slug: 'muehlbock-trocknungskammern-typ-1002', category: 'drying', removed: '2026-10-28' },
];

