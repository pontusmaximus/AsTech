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
    slug: 'scm-stefani-md',
    manufacturer: 'SCM Stefani',
    name: 'MD',
    year: 2022,
    condition: { de: 'sehr gut', en: 'very good', cz: 'velmi dobrý', sk: 'veľmi dobrý', hu: 'nagyon jó' },
    status: 'available',
    imageFit: 'cover',
    images: [
      '/images/used-machines/scm-stefani-md-1.jpg',
      '/images/used-machines/scm-stefani-md-2.jpg',
    ],
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
    slug: 'muehlbock-trocknungskammern-typ-1002',
    manufacturer: 'Mühlbock',
    name: 'Trocknungskammern Typ 1002',
    condition: { de: 'gebraucht', en: 'used', cz: 'použité', sk: 'použité', hu: 'használt' },
    status: 'available',
    imageFit: 'cover',
    images: [
      '/images/used-machines/muehlbock-trocknungskammern-typ-1002-1.jpg',
      '/images/used-machines/muehlbock-trocknungskammern-typ-1002-2.jpg',
      '/images/used-machines/muehlbock-trocknungskammern-typ-1002-3.jpg',
      '/images/used-machines/muehlbock-trocknungskammern-typ-1002-4.jpg',
    ],
    shortDescription: {
      de: '3 Trocknungskammern (2× 40 m³, 1× 30 m³), Baujahre 2005–2017, Warmwasserregelung.',
      en: '3 drying chambers (2× 40 m³, 1× 30 m³), built 2005–2017, hot-water control.',
      cz: '3 sušicí komory (2× 40 m³, 1× 30 m³), roky výroby 2005–2017, teplovodní regulace.',
      sk: '3 sušiace komory (2× 40 m³, 1× 30 m³), roky výroby 2005–2017, teplovodná regulácia.',
      hu: '3 szárítókamra (2× 40 m³, 1× 30 m³), gyártási évek 2005–2017, melegvizes szabályozás.',
    },
    longDescription: {
      de: `Mühlbock zählt zu den führenden österreichischen Anbietern für Schnittholz-Trocknungstechnik und beliefert Sägewerke und Hobelwerke weltweit. Das hier angebotene Paket besteht aus drei Trocknungskammern der Baureihe Typ 1002 — der kompakten Kammergröße für mittelgroße Sägewerke und holzverarbeitende Betriebe. Konkret enthalten: zwei Kammern mit je 40 m³ Füllvolumen (Baujahre 2005 und 2006) sowie eine Kammer mit 30 m³ Füllvolumen aus dem Jahr 2017. Alle drei Kammern arbeiten mit Warmwasserregelung — typischerweise versorgt aus einer betriebseigenen Biomasse-Heizanlage, die mit den Restholzanteilen aus der Produktion gespeist wird. Die isolierten Aluminium-Wandelemente und die Dachventilatoren mit Klappensteuerung entsprechen dem Mühlbock-Standard für die Baureihe 1002. Die Kammern sind primär als Komplett-Paket verfügbar; eine Aufteilung auf einzelne Kammern ist nach Absprache möglich. Aufgrund der gestaffelten Baujahre 2005, 2006 und 2017 lässt sich das Paket auch sukzessive in einen bestehenden Betrieb integrieren. Diese Kombination aus bewährter Mühlbock-Technik, drei parallel nutzbaren Kammern für unterschiedliche Holzarten oder Schnittstärken und einem deutlich reduzierten Preis gegenüber Neuanlagen macht das Angebot wirtschaftlich interessant für Sägewerke, die ihre Trocknungskapazität ausbauen oder eine ältere Anlage ersetzen möchten.`,
      en: `Mühlbock is among the leading Austrian manufacturers of sawn-timber drying technology, supplying sawmills and planing mills worldwide. The package on offer here comprises three drying chambers from the Type 1002 series — the compact chamber size for mid-sized sawmills and wood-processing operations. Specifically included: two chambers with 40 m³ load volume each (built 2005 and 2006) and one chamber with 30 m³ load volume from 2017. All three chambers run on hot-water control — typically supplied from an in-house biomass heating plant fed by residual material from production. The insulated aluminium wall elements and the roof fans with damper control correspond to the Mühlbock standard for the 1002 series. The chambers are primarily available as a complete package; splitting into individual chambers is possible on request. Due to the staggered build years 2005, 2006 and 2017, the package can also be integrated into an existing operation step by step. This combination of proven Mühlbock technology, three chambers usable in parallel for different wood species or board thicknesses, and a significantly reduced price compared with new installations makes the offer economically attractive for sawmills wishing to expand their drying capacity or replace an older installation.`,
      cz: `Mühlbock patří mezi přední rakouské výrobce sušicí techniky pro řezivo a dodává své komory pilám a hoblárnám po celém světě. Zde nabízený balíček tvoří tři sušicí komory řady Typ 1002 — kompaktní velikost komory pro středně velké pily a dřevozpracující provozy. Konkrétně: dvě komory o náplni 40 m³ (roky výroby 2005 a 2006) a jedna komora o náplni 30 m³ z roku 2017. Všechny tři komory pracují s teplovodní regulací — typicky napojené na podnikovou biomasovou kotelnu, kterou napájejí zbytky ze samotné výroby. Izolované hliníkové stěnové prvky a střešní ventilátory s klapkovým ovládáním odpovídají standardu Mühlbock pro řadu 1002. Komory jsou primárně k dispozici jako kompletní balíček; rozdělení na jednotlivé komory je možné po dohodě. Díky odstupňovaným rokům výroby 2005, 2006 a 2017 lze balíček postupně integrovat i do stávajícího provozu. Kombinace osvědčené Mühlbock techniky, tří paralelně využitelných komor pro různé dřeviny či tloušťky a výrazně nižší ceny oproti nové instalaci dělá z nabídky ekonomicky zajímavou volbu pro pily, které chtějí rozšířit sušicí kapacitu nebo nahradit starší instalaci.`,
      sk: `Mühlbock patrí medzi popredných rakúskych výrobcov sušiacej techniky pre rezivo a dodáva svoje komory pílam a hobliarňam po celom svete. Tu ponúkaný balík tvoria tri sušiace komory radu Typ 1002 — kompaktná veľkosť komory pre stredne veľké píly a drevospracujúce prevádzky. Konkrétne: dve komory s náplňou 40 m³ (roky výroby 2005 a 2006) a jedna komora s náplňou 30 m³ z roku 2017. Všetky tri komory pracujú s teplovodnou reguláciou — typicky napojené na podnikovú biomasovú kotolňu napájanú zvyškami z výroby. Izolované hliníkové stenové prvky a strešné ventilátory s klapkovým ovládaním zodpovedajú štandardu Mühlbock pre rad 1002. Komory sú primárne k dispozícii ako kompletný balík; rozdelenie na jednotlivé komory je možné po dohode. Vďaka odstupňovaným rokom výroby 2005, 2006 a 2017 sa balík dá postupne integrovať aj do existujúcej prevádzky.`,
      hu: `A Mühlbock az osztrák fűrészáru-szárítástechnika vezető gyártói közé tartozik, és világszerte szállít kamrákat fűrészüzemek és gyalulóüzemek számára. Az itt kínált csomag három, az 1002-es típussorozat szárítókamráját tartalmazza — ez a kompakt kamraméret közepes méretű fűrészüzemek és faipari üzemek számára. Konkrétan: két, egyenként 40 m³ töltőtérfogatú kamra (2005-ös és 2006-os gyártási évvel) és egy 30 m³ töltőtérfogatú kamra 2017-ből. Mindhárom kamra melegvizes szabályozással működik — jellemzően egy üzemi biomassza-fűtésről táplálva, amelyet a gyártásból származó faanyag-maradékkal etetnek. A szigetelt alumínium falelemek és a csappantyúvezérelt tetőventilátorok a Mühlbock 1002 sorozatára jellemző szabványnak felelnek meg. A kamrák elsősorban teljes csomagként érhetők el; egyedi kamrákra bontás egyeztetés szerint lehetséges. A 2005, 2006 és 2017-es eltérő gyártási éveknek köszönhetően a csomag fokozatosan is integrálható egy meglévő üzembe.`,
    },
    specs: [
      { label: { de: 'Typ', en: 'Type', cz: 'Typ', sk: 'Typ', hu: 'Típus' }, value: 'Mühlbock Typ 1002' },
      { label: { de: 'Anzahl Kammern', en: 'Number of chambers', cz: 'Počet komor', sk: 'Počet komôr', hu: 'Kamrák száma' }, value: '3' },
      { label: { de: 'Füllvolumen', en: 'Load volume', cz: 'Náplň', sk: 'Náplň', hu: 'Töltőtérfogat' }, value: '2 × 40 m³ + 1 × 30 m³ (≈ 110 m³)' },
      { label: { de: 'Stapellänge', en: 'Stack length', cz: 'Délka stohu', sk: 'Dĺžka stohu', hu: 'Rakathossz' }, value: '2 × 6,7 m + 1 × 4,7 m' },
      { label: { de: 'Baujahre', en: 'Build years', cz: 'Roky výroby', sk: 'Roky výroby', hu: 'Gyártási évek' }, value: '2005, 2006, 2017' },
      { label: { de: 'Beheizung', en: 'Heating', cz: 'Vytápění', sk: 'Vykurovanie', hu: 'Fűtés' }, value: 'Warmwasserregelung / Hot-water control' },
      { label: { de: 'Zustand', en: 'Condition', cz: 'Stav', sk: 'Stav', hu: 'Állapot' }, value: 'Gebraucht / Used' },
      { label: { de: 'Standort', en: 'Location', cz: 'Lokalita', sk: 'Lokalita', hu: 'Helyszín' }, value: 'Auf Anfrage / On request' },
    ],
    buyingAdvice: {
      de: 'Das Drei-Kammer-Paket eignet sich besonders für Sägewerke, die parallel unterschiedliche Holzarten oder Schnittstärken trocknen wollen oder ihre bestehende Trocknungskapazität sukzessive ausbauen. Bei einer betriebseigenen Biomasse-Heizung amortisiert sich die Anlage besonders schnell. Asamer organisiert auf Wunsch Demontage, Transport und Wiedermontage am Zielort.',
      en: 'The three-chamber package is particularly suitable for sawmills wishing to dry different wood species or board thicknesses in parallel, or to expand their existing drying capacity step by step. With an in-house biomass heating plant, the system pays back especially quickly. On request, Asamer organises dismantling, transport and reassembly at the destination.',
      cz: 'Třídílný balíček je vhodný zejména pro pily, které chtějí paralelně sušit různé dřeviny nebo tloušťky, případně postupně rozšiřovat stávající sušicí kapacitu. Při podnikové biomasové kotelně se zařízení obzvlášť rychle vyplatí. Asamer na přání zajistí demontáž, dopravu a opětovnou montáž v cílovém místě.',
      sk: 'Trojkomorový balík je obzvlášť vhodný pre píly, ktoré chcú paralelne sušiť rôzne dreviny alebo hrúbky reziva, prípadne postupne rozširovať existujúcu sušiacu kapacitu. Pri podnikovej biomasovej kotolni sa zariadenie obzvlášť rýchlo vyplatí.',
      hu: 'A háromkamrás csomag különösen alkalmas olyan fűrészüzemek számára, akik párhuzamosan szeretnének eltérő fafajtákat vagy vastagságokat szárítani, vagy meglévő szárítókapacitásukat lépésről lépésre bővíteni. Üzemi biomassza-fűtés esetén a rendszer különösen gyorsan megtérül. Az Asamer kérésre megszervezi a leszerelést, szállítást és újraszerelést a célhelyszínen.',
    },
    faq: [
      {
        question: { de: 'Werden alle drei Kammern als Paket verkauft?', en: 'Are all three chambers sold as a package?', cz: 'Prodávají se všechny tři komory jako balíček?', sk: 'Predávajú sa všetky tri komory ako balík?', hu: 'Mind a három kamra csomagban kerül eladásra?' },
        answer: {
          de: 'Primär als Paket — eine Aufteilung auf einzelne Kammern ist nach Absprache möglich. Sprechen Sie uns an, falls Sie nur eine oder zwei der Kammern benötigen.',
          en: 'Primarily as a package — splitting into individual chambers is possible on request. Contact us if you only need one or two of the chambers.',
          cz: 'Primárně jako balíček — rozdělení na jednotlivé komory je možné po dohodě. Kontaktujte nás, pokud potřebujete jen jednu nebo dvě komory.',
          sk: 'Primárne ako balík — rozdelenie na jednotlivé komory je možné po dohode. Kontaktujte nás, ak potrebujete iba jednu alebo dve komory.',
          hu: 'Elsősorban csomagban — egyedi kamrákra bontás egyeztetés szerint lehetséges. Vegye fel velünk a kapcsolatot, ha csak egy vagy két kamrára van szüksége.',
        },
      },
      {
        question: { de: 'Welche Heizquelle wird benötigt?', en: 'What heating source is required?', cz: 'Jaký zdroj tepla je potřebný?', sk: 'Aký zdroj tepla je potrebný?', hu: 'Milyen hőforrásra van szükség?' },
        answer: {
          de: 'Die Kammern arbeiten mit Warmwasserregelung — Sie benötigen also eine Heißwasserquelle (typischerweise Biomasse-Heizung, alternativ Gas-, Öl- oder Pellet-Kessel). Vorlauftemperaturen üblicherweise 80–95 °C.',
          en: 'The chambers operate with hot-water control — so you need a hot-water source (typically a biomass heating plant, alternatively gas, oil or pellet boilers). Flow temperatures are usually 80–95 °C.',
          cz: 'Komory pracují s teplovodní regulací — potřebujete tedy zdroj horké vody (typicky biomasová kotelna, alternativně plynový, olejový nebo peletový kotel). Vstupní teploty obvykle 80–95 °C.',
          sk: 'Komory pracujú s teplovodnou reguláciou — potrebujete teda zdroj horúcej vody (typicky biomasová kotolňa, alternatívne plynový, olejový alebo peletový kotol). Vstupné teploty obvykle 80–95 °C.',
          hu: 'A kamrák melegvizes szabályozással működnek — szükséges egy melegvíz-forrás (jellemzően biomassza-fűtés, alternatívaként gáz-, olaj- vagy pellet-kazán). Az előremenő hőmérséklet általában 80–95 °C.',
        },
      },
      {
        question: { de: 'Können Demontage und Transport organisiert werden?', en: 'Can dismantling and transport be organised?', cz: 'Lze zajistit demontáž a dopravu?', sk: 'Možno zabezpečiť demontáž a dopravu?', hu: 'Megszervezhető a leszerelés és szállítás?' },
        answer: {
          de: 'Ja — auf Anfrage organisieren wir Demontage am Standort des Vorbesitzers, Transport und Wiedermontage am Zielort. Bei Trocknungskammern ist zudem die Anbindung an die bestehende Wärmequelle und Steuerungstechnik mitzuplanen.',
          en: 'Yes — on request we organise dismantling at the previous owner\'s site, transport and reassembly at the destination. For drying chambers, connection to the existing heat source and control technology must also be planned.',
          cz: 'Ano — na vyžádání zajistíme demontáž v místě předchozího vlastníka, dopravu a opětovnou montáž na cílovém místě. U sušicích komor je nutné naplánovat i napojení na stávající zdroj tepla a řídicí techniku.',
          sk: 'Áno — na požiadanie zabezpečíme demontáž v mieste predchádzajúceho vlastníka, dopravu a opätovnú montáž na cieľovom mieste.',
          hu: 'Igen — kérésre megszervezzük a leszerelést a korábbi tulajdonos telephelyén, a szállítást és az újraszerelést a célhelyszínen. Szárítókamráknál a meglévő hőforrásra és vezérléstechnikára való rákötést is tervezni kell.',
        },
      },
      {
        question: { de: 'Was kostet ein Drei-Kammer-Paket dieser Größe?', en: 'What does a three-chamber package of this size cost?', cz: 'Kolik stojí třídílný balíček této velikosti?', sk: 'Koľko stojí trojkomorový balík tejto veľkosti?', hu: 'Mennyibe kerül ekkora háromkamrás csomag?' },
        answer: {
          de: 'Preis auf Anfrage. Maßgeblich sind Demontage- und Transportaufwand zum Zielort sowie ob alle drei Kammern oder nur einzelne übernommen werden. Eine vergleichbare neue 110-m³-Anlage liegt typischerweise im sechsstelligen Bereich.',
          en: 'Price on request. The dismantling and transport effort to the destination, and whether all three chambers or only individual ones are taken over, are the deciding factors. A comparable new 110 m³ installation is typically in the six-figure range.',
          cz: 'Cena na vyžádání. Rozhodující jsou náklady na demontáž a dopravu do cílového místa, jakož i to, zda jsou převzaty všechny tři komory nebo pouze jednotlivé. Srovnatelná nová 110 m³ instalace se typicky pohybuje v šesticiferné výši.',
          sk: 'Cena na vyžiadanie. Rozhodujúce sú náklady na demontáž a dopravu do cieľového miesta, ako aj to, či sú prevzaté všetky tri komory alebo iba jednotlivé.',
          hu: 'Ár kérésre. A leszerelés és szállítás költségei, valamint az, hogy mind a három kamrát vagy csak egyeseket vesz át, meghatározóak. Egy hasonló új 110 m³-es berendezés általában hatszámjegyű tartományban mozog.',
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
