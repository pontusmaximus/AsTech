/**
 * Used (pre-owned) machines inventory for asamer.cz.
 * Each machine has its own detail page at /pouzite-stroje/:slug (and language variants).
 */

import type { Language } from '../i18n';
import type { MultiLangText, SeoFaqItem } from './seo/types';

export type UsedMachineStatus = 'available' | 'sold';

export interface UsedMachine {
  /** URL slug (always lowercase, hyphens, no diacritics). Used as part of detail URL. */
  slug: string;
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
    slug: 'ott-tornado-top',
    manufacturer: 'OTT',
    name: 'Tornado Top',
    year: 2011,
    condition: { de: 'gut', en: 'good', cz: 'dobrý', sk: 'dobrý', hu: 'jó' },
    status: 'available',
    images: [
      '/images/used-machines/ott-tornado-top-1.jpg',
      '/images/used-machines/ott-tornado-top-2.jpg',
    ],
    price: 18000,
    listPrice: 18500,
    priceCurrency: 'EUR',
    shortDescription: {
      de: 'Kantenleimmaschine mit 330.000 lfm Laufleistung.',
      en: 'Edgebanding machine with 330,000 lfm of usage.',
      cz: 'Olepovačka hran s nájezdem 330 000 lfm.',
      sk: 'Olepovačka hrán s nájazdom 330 000 lfm.',
      hu: 'Élzárógép 330 000 lfm futásteljesítménnyel.',
    },
    longDescription: {
      de: `Die OTT Tornado Top aus Baujahr 2011 ist eine industrielle Kantenanleimmaschine, die sich durch hohe Durchsatzleistung und Zuverlässigkeit im Dauerbetrieb auszeichnet. Mit einer dokumentierten Laufleistung von 330.000 laufenden Metern hat die Maschine nur einen Bruchteil ihrer Lebenszeit hinter sich — typische OTT-Maschinen erreichen problemlos 2–3 Millionen lfm. Die Tornado Top war zu ihrer Zeit das Flaggschiff für anspruchsvolle Tischlereien und mittelständische Möbelbetriebe. Sie verarbeitet Kantenstärken bis 3 mm und Plattenstärken im üblichen Möbelbereich. Die Maschine kommt aus einem gepflegten Besitz und wurde vor Auslieferung technisch geprüft. Für Betriebe, die eine wirtschaftliche Alternative zum Neukauf der aktuellen OTT-Pacific+ oder Storm+ suchen, ist diese Tornado Top eine solide Wahl mit deutlichem Preisvorteil.`,
      en: `The OTT Tornado Top from 2011 is an industrial edgebanding machine known for high throughput and reliability in continuous operation. With documented usage of 330,000 linear metres, the machine has used only a fraction of its service life — typical OTT machines easily reach 2–3 million lfm. The Tornado Top was, in its time, the flagship for demanding joinery shops and mid-sized furniture operations. It processes edge thicknesses up to 3 mm and panel thicknesses in the usual furniture range. The machine comes from well-maintained ownership and has been technically inspected before release. For operations seeking an economical alternative to buying a new OTT Pacific+ or Storm+, this Tornado Top is a solid choice with significant price advantage.`,
      cz: `OTT Tornado Top z roku 2011 je průmyslová olepovačka hran, která vyniká vysokou průchodností a spolehlivostí v nepřetržitém provozu. S doloženým nájezdem 330 000 metrů běhu má stroj za sebou jen zlomek své životnosti — typické stroje OTT snadno dosahují 2–3 milionů lfm. Tornado Top byla ve své době vlajkovou lodí pro náročné truhlárny a středně velké nábytkářské provozy. Zpracovává hrany do tloušťky 3 mm a desky v běžném nábytkářském rozmezí. Stroj pochází z pečlivě udržovaného vlastnictví a byl před vydáním technicky zkontrolován. Pro provozy hledající ekonomickou alternativu k nákupu nové OTT Pacific+ nebo Storm+ je tato Tornado Top solidní volba s výrazným cenovým zvýhodněním.`,
      sk: `OTT Tornado Top z roku 2011 je priemyselná olepovačka hrán, ktorá vyniká vysokou priechodnosťou a spoľahlivosťou v nepretržitej prevádzke. S doloženým nájazdom 330 000 metrov behu má stroj za sebou len zlomok svojej životnosti — typické stroje OTT ľahko dosahujú 2–3 milióny lfm. Tornado Top bola vo svojej dobe vlajkovou loďou pre náročné stolárstva a stredne veľké nábytkárske prevádzky. Pre prevádzky hľadajúce ekonomickú alternatívu k nákupu novej OTT Pacific+ alebo Storm+ je táto Tornado Top solídna voľba s výrazným cenovým zvýhodnením.`,
      hu: `Az OTT Tornado Top 2011-es évjáratú ipari élzárógép, amely magas áteresztőképességgel és folyamatos üzemi megbízhatóságával tűnik ki. A dokumentált 330 000 folyóméteres használat a gép élettartamának töredéke — a tipikus OTT gépek könnyedén elérik a 2–3 millió folyómétert. A Tornado Top a maga idejében az igényes asztalosüzemek és közepes méretű bútorgyártók zászlóshajója volt. Élvastagságokat 3 mm-ig és a szokásos bútoripari laptartományt dolgozza fel. A gép gondosan karbantartott tulajdonosi körből származik, és átadás előtt műszaki ellenőrzésen esett át. Azoknak az üzemeknek, akik gazdaságos alternatívát keresnek új OTT Pacific+ vagy Storm+ vásárlása helyett, ez a Tornado Top megbízható választás jelentős árkedvezménnyel.`,
    },
    specs: [
      { label: { de: 'Baujahr', en: 'Year', cz: 'Rok výroby', sk: 'Rok výroby', hu: 'Évjárat' }, value: '2011' },
      { label: { de: 'Laufleistung', en: 'Usage', cz: 'Nájezd', sk: 'Nájazd', hu: 'Futásteljesítmény' }, value: '330.000 lfm' },
      { label: { de: 'Typ', en: 'Type', cz: 'Typ', sk: 'Typ', hu: 'Típus' }, value: 'Industrielle Kantenleimmaschine' },
      { label: { de: 'Zustand', en: 'Condition', cz: 'Stav', sk: 'Stav', hu: 'Állapot' }, value: 'Gut / Good' },
    ],
    buyingAdvice: {
      de: 'Empfehlenswert für Betriebe, die einen bewährten Industriestandard suchen und die Budget-Ersparnis gegenüber einer neuen Pacific+ bevorzugen. Asamer prüft die Maschine vor Übergabe technisch und stellt gegen Aufpreis eine Transport- und Montageorganisation bereit.',
      en: 'Recommended for operations seeking a proven industrial standard and prioritising budget savings over a new Pacific+. Asamer technically inspects the machine before handover and can organise transport and installation for an additional fee.',
      cz: 'Doporučujeme pro provozy hledající osvědčený průmyslový standard, kteří dávají přednost úspoře rozpočtu před nákupem nové Pacific+. Asamer stroj před předáním technicky zkontroluje a za příplatek zajistí dopravu a montáž.',
      sk: 'Odporúčame pre prevádzky hľadajúce osvedčený priemyselný štandard, ktorí uprednostňujú úsporu rozpočtu pred kúpou novej Pacific+. Asamer stroj pred odovzdaním technicky skontroluje a za príplatok zabezpečí dopravu a montáž.',
      hu: 'Ajánlott olyan üzemeknek, amelyek megbízható ipari megoldást keresnek, és a költségvetés-megtakarítást részesítik előnyben egy új Pacific+ vásárlásával szemben. Az Asamer átadás előtt műszakilag ellenőrzi a gépet, és felár ellenében biztosítja a szállítást és telepítést.',
    },
    faq: [
      {
        question: { de: 'Was bedeutet 330.000 lfm Laufleistung?', en: 'What does 330,000 lfm usage mean?', cz: 'Co znamená nájezd 330 000 lfm?', sk: 'Čo znamená nájazd 330 000 lfm?', hu: 'Mit jelent a 330 000 lfm futásteljesítmény?' },
        answer: {
          de: 'lfm steht für "laufende Meter" und bezeichnet die Summe aller Kanten, die der Maschine durchlaufen sind. 330.000 lfm entspricht etwa einer durchschnittlichen Tagesnutzung von 2–3 Jahren — für eine Maschine von 2011 ist das ein sehr niedriger Wert.',
          en: 'lfm stands for "linear metres" and represents the sum of all edges that have passed through the machine. 330,000 lfm corresponds to about 2–3 years of average daily use — a very low figure for a machine from 2011.',
          cz: 'lfm znamená "běžné metry" a označuje součet všech hran, které strojem prošly. 330 000 lfm odpovídá zhruba 2–3 letům průměrného denního používání — pro stroj z roku 2011 velmi nízká hodnota.',
          sk: 'lfm znamená "bežné metre" a označuje súčet všetkých hrán, ktoré strojom prešli. 330 000 lfm zodpovedá zhruba 2–3 rokom priemerného denného používania — pre stroj z roku 2011 veľmi nízka hodnota.',
          hu: 'Az lfm rövidítés a "folyóméter" jelentéssel bír, és az összes élt jelöli, ami a gépen áthaladt. 330 000 lfm körülbelül 2–3 év átlagos napi használatnak felel meg — egy 2011-es gép esetén nagyon alacsony érték.',
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
  {
    slug: 'schelling-fh4-330-220-automatic',
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
    slug: 'scm-stefani-solution-md',
    manufacturer: 'SCM Stefani',
    name: 'Solution MD',
    year: 2016,
    condition: { de: 'gut', en: 'good', cz: 'dobrý', sk: 'dobrý', hu: 'jó' },
    status: 'available',
    imageFit: 'cover',
    images: [
      '/images/used-machines/scm-stefani-solution-md-1.jpg',
      '/images/used-machines/scm-stefani-solution-md-2.jpg',
    ],
    price: 23000,
    listPrice: 23500,
    priceCurrency: 'EUR',
    shortDescription: {
      de: 'Kantenleimmaschine, automatische Beschickung, 450.000 lfm.',
      en: 'Edgebanding machine, automatic feeding, 450,000 lfm.',
      cz: 'Olepovačka hran, automatické podávání, 450 000 lfm.',
      sk: 'Olepovačka hrán, automatické podávanie, 450 000 lfm.',
      hu: 'Élzárógép automatikus adagolóval, 450 000 lfm.',
    },
    longDescription: {
      de: `Die SCM Stefani Solution MD ist eine industrielle Kantenanleimmaschine der italienischen SCM-Gruppe mit integrierter automatischer Werkstück-Beschickung. Das Modell MD (Medium Duty) ist für mittelständische Möbelwerke und anspruchsvolle Tischlereien konzipiert. Die Maschine aus 2016 hat eine dokumentierte Laufleistung von 450.000 lfm — ein moderater Wert für eine Maschine dieser Baureihe. SCM Stefani zählt zu den führenden europäischen Kantenleimmaschinenherstellern; die Solution-Reihe ist speziell für variantenreiche Fertigung und schnelle Programmwechsel optimiert. Die automatische Beschickung reduziert Personalbedarf an der Maschine und erhöht den Durchsatz in Mehrschichtbetrieb deutlich. Für Betriebe mit Ansprüchen an Qualität und Automatisierungsgrad ist diese Solution MD eine wirtschaftliche Alternative zum Neukauf.`,
      en: `The SCM Stefani Solution MD is an industrial edgebanding machine from the Italian SCM group with integrated automatic workpiece feeding. The MD (Medium Duty) model is designed for mid-sized furniture factories and demanding joinery shops. The machine from 2016 has a documented usage of 450,000 lfm — a moderate figure for a machine of this series. SCM Stefani is among the leading European edgebander manufacturers; the Solution series is specifically optimised for variant-rich production and fast program changes. Automatic feeding reduces personnel needs at the machine and significantly increases throughput in multi-shift operation.`,
      cz: `SCM Stefani Solution MD je průmyslová olepovačka hran italské skupiny SCM s integrovaným automatickým podáváním obrobku. Model MD (Medium Duty) je koncipován pro středně velké nábytkářské závody a náročné truhlárny. Stroj z roku 2016 má doložený nájezd 450 000 lfm — mírná hodnota pro stroj této řady. SCM Stefani patří mezi přední evropské výrobce olepovaček hran; řada Solution je speciálně optimalizována pro variantně bohatou výrobu a rychlé změny programu.`,
      sk: `SCM Stefani Solution MD je priemyselná olepovačka hrán talianskej skupiny SCM s integrovaným automatickým podávaním obrobku. Model MD (Medium Duty) je koncipovaný pre stredne veľké nábytkárske závody a náročné stolárstva.`,
      hu: `A SCM Stefani Solution MD ipari élzárógép az olasz SCM csoporttól, integrált automatikus munkadarab-adagolóval. Az MD (Medium Duty) modell közepes bútorgyárak és igényes asztalosüzemek számára készült. A 2016-os gép dokumentált 450 000 lfm futásteljesítménnyel rendelkezik — mérsékelt érték ennek a sorozatnak a gépei esetén. A SCM Stefani a vezető európai élzárógép-gyártók egyike.`,
    },
    specs: [
      { label: { de: 'Baujahr', en: 'Year', cz: 'Rok výroby', sk: 'Rok výroby', hu: 'Évjárat' }, value: '2016' },
      { label: { de: 'Laufleistung', en: 'Usage', cz: 'Nájezd', sk: 'Nájazd', hu: 'Futásteljesítmény' }, value: '450.000 lfm' },
      { label: { de: 'Beschickung', en: 'Feeding', cz: 'Podávání', sk: 'Podávanie', hu: 'Adagolás' }, value: 'Automatisch / Automatic' },
      { label: { de: 'Typ', en: 'Type', cz: 'Typ', sk: 'Typ', hu: 'Típus' }, value: 'Industrial edgebander' },
      { label: { de: 'Zustand', en: 'Condition', cz: 'Stav', sk: 'Stav', hu: 'Állapot' }, value: 'Gut / Good' },
    ],
    buyingAdvice: {
      de: 'Die Solution MD ist wirtschaftlich sinnvoll für Betriebe, die eine automatisierte Kantenbearbeitungslinie zu einem fairen Preis suchen. Im Vergleich zu einem Neumodell sparen Sie typischerweise 40–55 % — bei vergleichbarer Produktivität.',
      en: 'The Solution MD is economically sensible for operations seeking an automated edgebanding line at a fair price. Compared to a new model, you typically save 40–55 % with comparable productivity.',
      cz: 'Solution MD má ekonomický smysl pro provozy hledající automatizovanou linku olepování hran za férovou cenu. Ve srovnání s novým modelem typicky ušetříte 40–55 % při srovnatelné produktivitě.',
      sk: 'Solution MD má ekonomický zmysel pre prevádzky hľadajúce automatizovanú linku olepovania hrán za férovú cenu. V porovnaní s novým modelom typicky ušetríte 40–55 % pri porovnateľnej produktivite.',
      hu: 'A Solution MD gazdaságilag indokolt olyan üzemek számára, amelyek automatizált élzáró sort keresnek tisztességes áron. Új modellhez képest általában 40–55 %-ot takarít meg hasonló termelékenység mellett.',
    },
    faq: [
      {
        question: { de: 'Wie lange hält eine Industrie-Kantenleimmaschine?', en: 'How long does an industrial edgebander last?', cz: 'Jak dlouho vydrží průmyslová olepovačka hran?', sk: 'Ako dlho vydrží priemyselná olepovačka hrán?', hu: 'Meddig tart egy ipari élzárógép?' },
        answer: {
          de: 'Industriemaschinen wie die Solution MD erreichen typischerweise 2–3 Millionen lfm bei regelmäßiger Wartung — bei 450.000 lfm hat die Maschine also 75–85 % ihrer Lebenszeit noch vor sich.',
          en: 'Industrial machines like the Solution MD typically reach 2–3 million lfm with regular maintenance — at 450,000 lfm the machine still has 75–85 % of its service life ahead.',
          cz: 'Průmyslové stroje jako Solution MD typicky dosahují 2–3 milionů lfm při pravidelné údržbě — při 450 000 lfm má stroj před sebou stále 75–85 % své životnosti.',
          sk: 'Priemyselné stroje ako Solution MD typicky dosahujú 2–3 milióny lfm pri pravidelnej údržbe — pri 450 000 lfm má stroj pred sebou stále 75–85 % svojej životnosti.',
          hu: 'Az ipari gépek, mint a Solution MD, rendszeres karbantartással jellemzően 2–3 millió lfm-et érnek el — 450 000 lfm-nél a gépnek még 75–85 % élettartama van hátra.',
        },
      },
    ],
  },
  {
    slug: 'homag-s-200',
    manufacturer: 'HOMAG',
    name: 'S 200',
    year: 2022,
    condition: { de: 'sehr gut', en: 'very good', cz: 'velmi dobrý', sk: 'veľmi dobrý', hu: 'nagyon jó' },
    status: 'available',
    images: ['/images/used-machines/homag-s-200-1.jpg', '/images/used-machines/homag-s-200-2.jpg'],
    price: 19000,
    listPrice: 19500,
    priceCurrency: 'EUR',
    shortDescription: {
      de: 'Kantenleimmaschine mit 93.000 lfm Laufleistung.',
      en: 'Edgebanding machine with 93,000 lfm of usage.',
      cz: 'Olepovačka hran s nájezdem 93 000 lfm.',
      sk: 'Olepovačka hrán s nájazdom 93 000 lfm.',
      hu: 'Élzárógép 93 000 lfm futásteljesítménnyel.',
    },
    longDescription: {
      de: `Die HOMAG S 200 ist eine kompakte Kantenanleimmaschine der deutschen HOMAG-Gruppe, dem Weltmarktführer für Holzbearbeitungstechnik. Das Baujahr 2022 macht sie zu einer nahezu neuwertigen Maschine — mit einer Laufleistung von nur 93.000 lfm ist die S 200 praktisch in der Einlaufphase. HOMAG-Maschinen zählen zu den zuverlässigsten Kantenleimmaschinen am Markt und sind in der CZ/SK/HU-Region weit verbreitet, was die Ersatzteilversorgung und den Service vereinfacht. Die S 200 ist das Einsteiger- bis Mittelklasse-Modell der aktuellen HOMAG-Palette und ist ideal für Tischlereien und kleinere Möbelbetriebe. Die Kombination aus Baujahr 2022 und niedriger Laufleistung macht diese Maschine wirtschaftlich besonders attraktiv — Sie erhalten praktisch den Neuwert zu deutlich reduziertem Preis.`,
      en: `The HOMAG S 200 is a compact edgebanding machine from the German HOMAG group, the world market leader in wood processing technology. The 2022 build year makes it a nearly-new machine — with usage of only 93,000 lfm, the S 200 is practically in the break-in phase. HOMAG machines are among the most reliable edgebanders on the market and are widely distributed in the CZ/SK/HU region, which simplifies spare parts supply and service. The S 200 is the entry- to mid-level model of the current HOMAG range and is ideal for joinery shops and smaller furniture operations. The combination of 2022 build year and low usage makes this machine economically particularly attractive.`,
      cz: `HOMAG S 200 je kompaktní olepovačka hran německé skupiny HOMAG, světového lídra v oblasti technologií zpracování dřeva. Rok výroby 2022 z ní dělá téměř novou mašinu — s nájezdem pouhých 93 000 lfm je S 200 prakticky v záběhové fázi. Stroje HOMAG patří k nejspolehlivějším olepovačkám hran na trhu a jsou v regionu CZ/SK/HU široce rozšířené, což zjednodušuje dodávky náhradních dílů a servis. S 200 je vstupní až střední model aktuální řady HOMAG a je ideální pro truhlárny a menší nábytkářské provozy.`,
      sk: `HOMAG S 200 je kompaktná olepovačka hrán nemeckej skupiny HOMAG, svetového lídra v oblasti technológií spracovania dreva. Rok výroby 2022 z nej robí takmer novú mašinu — s nájazdom iba 93 000 lfm je S 200 prakticky v zábehovej fáze.`,
      hu: `A HOMAG S 200 kompakt élzárógép a német HOMAG csoporttól, a faipari technológia világvezetőjétől. A 2022-es gyártási év szinte új géppé teszi — a mindössze 93 000 lfm futásteljesítménnyel az S 200 gyakorlatilag a bejáratási szakaszban van. A HOMAG gépek a piac legmegbízhatóbb élzárógépei közé tartoznak és a CZ/SK/HU régióban széles körben elterjedtek, ami leegyszerűsíti az alkatrészellátást és a szervizt. Az S 200 a jelenlegi HOMAG kínálat belépő- és középszintű modellje, ideális asztalosüzemek és kisebb bútorgyártók számára.`,
    },
    specs: [
      { label: { de: 'Baujahr', en: 'Year', cz: 'Rok výroby', sk: 'Rok výroby', hu: 'Évjárat' }, value: '2022' },
      { label: { de: 'Laufleistung', en: 'Usage', cz: 'Nájezd', sk: 'Nájazd', hu: 'Futásteljesítmény' }, value: '93.000 lfm' },
      { label: { de: 'Typ', en: 'Type', cz: 'Typ', sk: 'Typ', hu: 'Típus' }, value: 'Compact edgebander' },
      { label: { de: 'Zustand', en: 'Condition', cz: 'Stav', sk: 'Stav', hu: 'Állapot' }, value: 'Sehr gut / Very good' },
    ],
    buyingAdvice: {
      de: 'Die HOMAG S 200 ist für Betriebe ideal, die den Qualitätsstandard von HOMAG zu einem deutlich reduzierten Preis suchen. Bei nur 93.000 lfm und Baujahr 2022 erhalten Sie praktisch eine Neumaschine mit minimaler Abnutzung.',
      en: 'The HOMAG S 200 is ideal for operations seeking HOMAG quality at a significantly reduced price. At only 93,000 lfm and 2022 build year, you practically get a new machine with minimal wear.',
      cz: 'HOMAG S 200 je ideální pro provozy hledající kvalitní standard HOMAG za výrazně sníženou cenu. Při pouhých 93 000 lfm a roce výroby 2022 získáte prakticky nový stroj s minimálním opotřebením.',
      sk: 'HOMAG S 200 je ideálna pre prevádzky hľadajúce kvalitný štandard HOMAG za výrazne zníženú cenu.',
      hu: 'A HOMAG S 200 ideális olyan üzemek számára, akik a HOMAG minőséget jelentősen csökkentett áron keresik. Mindössze 93 000 lfm és 2022-es évjárat mellett gyakorlatilag új gépet kap minimális kopással.',
    },
    faq: [
      {
        question: { de: 'Ist HOMAG-Service in CZ verfügbar?', en: 'Is HOMAG service available in CZ?', cz: 'Je servis HOMAG dostupný v ČR?', sk: 'Je servis HOMAG dostupný v SR?', hu: 'Elérhető a HOMAG szerviz Csehországban?' },
        answer: {
          de: 'Ja — HOMAG hat ein ausgebautes Service-Netzwerk in CZ, SK und HU. Asamer kann Kontakte vermitteln oder eigene Service-Techniker koordinieren.',
          en: 'Yes — HOMAG has an established service network in CZ, SK and HU. Asamer can provide contacts or coordinate its own service technicians.',
          cz: 'Ano — HOMAG má rozvinutou servisní síť v CZ, SK a HU. Asamer může zprostředkovat kontakty nebo koordinovat vlastní servisní techniky.',
          sk: 'Áno — HOMAG má rozvinutú servisnú sieť v CZ, SK a HU. Asamer môže sprostredkovať kontakty alebo koordinovať vlastných servisných technikov.',
          hu: 'Igen — a HOMAG fejlett szervizhálózattal rendelkezik CZ-ben, SK-ban és HU-ban. Az Asamer kapcsolatokat közvetít vagy saját szerviztechnikusokat koordinál.',
        },
      },
    ],
  },
  {
    slug: 'holz-her-1308xl-power',
    manufacturer: 'HOLZ-HER',
    name: '1308XL Power',
    condition: { de: 'sehr gut', en: 'very good', cz: 'velmi dobrý', sk: 'veľmi dobrý', hu: 'nagyon jó' },
    status: 'sold',
    images: ['/images/used-machines/holz-her-1308xl-power.jpg'],
    shortDescription: {
      de: 'Kantenleimmaschine für präzise Kantenbearbeitung.',
      en: 'Edgebanding machine for precise edge finishing.',
      cz: 'Olepovačka hran pro přesné dokončení hran.',
      sk: 'Olepovačka hrán pre presné dokončenie hrán.',
      hu: 'Élzárógép pontos élkikészítéshez.',
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const machinesBySlug = new Map(USED_MACHINES.map((m) => [m.slug, m]));

export const getUsedMachineBySlug = (slug: string | undefined): UsedMachine | undefined =>
  slug ? machinesBySlug.get(slug) : undefined;

export const ALL_USED_MACHINE_SLUGS = USED_MACHINES.map((m) => m.slug);
