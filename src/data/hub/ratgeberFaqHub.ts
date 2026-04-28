/**
 * Inhalt fuer den zentralen Wissens-Hub "Ratgeber & FAQ" auf /faq.
 *
 * - 5 Guide-Cards (verlinken auf die bestehenden Deep-Dive-Ratgeber)
 * - 18 FAQ-Items in 5 thematischen Kategorien
 *
 * Wird sowohl von FaqPage.tsx als auch vom Build-Time-Prerender konsumiert.
 * CZ ist Leit-Sprache. SK ist nah an CZ, HU faellt auf EN zurueck (ausser
 * fuer die 5 Edgebander-Items, die bereits voll uebersetzt sind und per
 * Re-Export aus EDGEBANDER_GUIDE bereitgestellt werden).
 */

import type { MultiLangText } from '../seo/types';
import type { Language } from '../../i18n';
import { EDGEBANDER_GUIDE } from '../guides/edgebanderGuide';

export interface HubFaqItem {
  question: MultiLangText;
  answer: MultiLangText;
}

export interface HubFaqCategory {
  /** Stable id for #fragment anchors and JSON-LD grouping. */
  id: string;
  name: MultiLangText;
  items: HubFaqItem[];
}

export interface HubGuideCard {
  /** Slug map per language (no /lang prefix). */
  slugByLang: Record<Language, string>;
  title: MultiLangText;
  blurb: MultiLangText;
  /** Reading time in minutes (rough). */
  readingTimeMin: number;
}

/* ------------------------------------------------------------------ */
/*  Guide-Cards                                                        */
/* ------------------------------------------------------------------ */

export const HUB_GUIDES: HubGuideCard[] = [
  {
    slugByLang: {
      cz: '/pruvodce/vyber-olepovacky-hran',
      sk: '/sprievodca/vyber-olepovacky-hran',
      de: '/ratgeber/kantenanleimmaschine-waehlen',
      en: '/guide/choose-edgebander',
      hu: '/utmutato/elzarogep-valasztas',
    },
    title: {
      cz: 'Jakou olepovačku hran koupit?',
      sk: 'Akú olepovačku hrán kúpiť?',
      de: 'Welche Kantenanleimmaschine kaufen?',
      en: 'Which edgebander to buy?',
      hu: 'Milyen élzárógépet vegyek?',
    },
    blurb: {
      cz: 'Průvodce výběrem podle velikosti provozu, materiálů, objemu výroby a rozpočtu. Modely OTT, použité vs nové, FAQ.',
      sk: 'Sprievodca výberom podľa veľkosti prevádzky, materiálov, objemu výroby a rozpočtu. Modely OTT, použité vs nové, FAQ.',
      de: 'Auswahl nach Betriebsgröße, Materialien, Produktionsvolumen und Budget. OTT-Modelle, gebraucht vs neu, FAQ.',
      en: 'A buying guide by operation size, materials, production volume and budget. OTT models, used vs new, FAQ.',
      hu: 'Vásárlási útmutató üzemméret, anyagok, gyártási volumen és költségvetés szerint. OTT modellek, használt vs új, GYIK.',
    },
    readingTimeMin: 8,
  },
  {
    slugByLang: {
      cz: '/pruvodce/pur-vs-eva',
      sk: '/sprievodca/pur-vs-eva',
      de: '/ratgeber/pur-vs-eva',
      en: '/guide/pur-vs-eva',
      hu: '/utmutato/pur-vs-eva',
    },
    title: {
      cz: 'PUR vs EVA – jaké lepidlo zvolit?',
      sk: 'PUR vs EVA – aké lepidlo zvoliť?',
      de: 'PUR vs EVA – welcher Klebstoff?',
      en: 'PUR vs EVA – which glue?',
      hu: 'PUR vs EVA – melyik ragasztót válasszam?',
    },
    blurb: {
      cz: 'Srovnání PUR a EVA lepidla pro olepování hran: kvalita spoje, vodotěsnost, provozní náklady, vhodné aplikace.',
      sk: 'Porovnanie PUR a EVA lepidla pre olepovanie hrán: kvalita spoja, vodotesnosť, prevádzkové náklady, vhodné aplikácie.',
      de: 'PUR und EVA-Klebstoff im Vergleich: Klebefugen-Qualität, Wasserdichtigkeit, Betriebskosten, Anwendungen.',
      en: 'PUR vs EVA glue compared: bond quality, waterproofing, operating cost, applications.',
      hu: 'PUR és EVA ragasztó összehasonlítása: kötés minősége, vízállóság, üzemeltetési költség, alkalmazások.',
    },
    readingTimeMin: 5,
  },
  {
    slugByLang: {
      cz: '/pruvodce/formatovaci-pila-hlinik-vs-drevo',
      sk: '/sprievodca/formatovacia-pila-hlinik-vs-drevo',
      de: '/ratgeber/formatsaege-aluminium-vs-holz',
      en: '/guide/panel-saw-aluminium-vs-wood',
      hu: '/utmutato/formatumfuresz-aluminium-vs-fa',
    },
    title: {
      cz: 'Formátovací pila: hliník vs dřevo',
      sk: 'Formátovacia píla: hliník vs drevo',
      de: 'Plattenaufteilsäge: Aluminium vs Holz',
      en: 'Panel saw: aluminium vs wood',
      hu: 'Formátumfűrész: alumínium vs fa',
    },
    blurb: {
      cz: 'Když řezat hliník a kompozity místo dřeva: rozdíly v technologii, posuvech, nástrojích a Mayer Advanced Line.',
      sk: 'Kedy rezať hliník a kompozity namiesto dreva: rozdiely v technológii, posuvoch, nástrojoch a Mayer Advanced Line.',
      de: 'Wann Aluminium und Komposite statt Holz schneiden: Unterschiede in Technologie, Vorschub, Werkzeugen und Mayer Advanced Line.',
      en: 'When to cut aluminium and composites instead of wood: differences in technology, feed speeds, tooling and Mayer Advanced Line.',
      hu: 'Mikor érdemes alumíniumot és kompozitokat vágni fa helyett: különbségek a technológiában, előtolásban, szerszámozásban és a Mayer Advanced Line-ban.',
    },
    readingTimeMin: 6,
  },
  {
    slugByLang: {
      cz: '/pruvodce/automatizace-skladu',
      sk: '/sprievodca/automatizacia-skladu',
      de: '/ratgeber/lagerautomatisierung',
      en: '/guide/warehouse-automation',
      hu: '/utmutato/raktarautomatizalas',
    },
    title: {
      cz: 'Automatizace skladu – kdy se vyplatí?',
      sk: 'Automatizácia skladu – kedy sa oplatí?',
      de: 'Lagerautomatisierung – wann lohnt sie sich?',
      en: 'Warehouse automation – when does it pay off?',
      hu: 'Raktárautomatizálás – mikor térül meg?',
    },
    blurb: {
      cz: 'Automatizace skladu deskových materiálů s BARBARIC: úspora místa, 99,9% přesnost zásob, ROI 2–4 roky.',
      sk: 'Automatizácia skladu doskových materiálov s BARBARIC: úspora miesta, 99,9% presnosť zásob, ROI 2–4 roky.',
      de: 'Lagerautomatisierung für Plattenmaterial mit BARBARIC: Platzersparnis, 99,9 % Bestandsgenauigkeit, ROI 2–4 Jahre.',
      en: 'Panel-material warehouse automation with BARBARIC: space savings, 99.9 % inventory accuracy, ROI 2–4 years.',
      hu: 'Lapanyag-raktár automatizálása BARBARIC-kal: helymegtakarítás, 99,9 %-os készletpontosság, 2–4 év ROI.',
    },
    readingTimeMin: 6,
  },
  {
    slugByLang: {
      cz: '/pruvodce/dotace-drevoobrabeni-cz-2026',
      sk: '/sprievodca/dotacie-drevoobrabanie-2026',
      de: '/ratgeber/foerderung-holzbearbeitung-cz-2026',
      en: '/guide/funding-woodworking-cz-2026',
      hu: '/utmutato/tamogatas-faipari-2026',
    },
    title: {
      cz: 'Dotace na stroje 2026 (ČR)',
      sk: 'Dotácie na stroje 2026',
      de: 'Förderung Holzbearbeitung CZ 2026',
      en: 'Woodworking funding CZ 2026',
      hu: 'Faipari támogatás 2026',
    },
    blurb: {
      cz: 'Přehled dotací 2026: OP TAK Digitální podnik, OP TAK Inovace, NRB Úvěr Expanze – sazby, kombinace s leasingem.',
      sk: 'Prehľad dotácií 2026: OP TAK Digitálny podnik, OP TAK Inovácie, NRB Úver Expanze – sadzby, kombinácia s leasingom.',
      de: 'Übersicht Förderprogramme 2026: OP TAK Digitální podnik, OP TAK Inovace, NRB Úvěr Expanze – Sätze und Kombination mit Leasing.',
      en: '2026 funding overview: OP TAK Digitální podnik, OP TAK Inovace, NRB Úvěr Expanze – rates and leasing combinations.',
      hu: '2026-os támogatások áttekintése: OP TAK Digitální podnik, OP TAK Inovace, NRB Úvěr Expanze – arányok és lízinggel kombinálás.',
    },
    readingTimeMin: 7,
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ-Items (CZ-fuehrend)                                            */
/* ------------------------------------------------------------------ */

// Re-use 5 voll-uebersetzte Items aus dem Edgebander-Guide (DE/EN/CZ/SK).
const edgebanderItem = (slugMatch: string): HubFaqItem => {
  const found = EDGEBANDER_GUIDE.faq.find((f) => f.question.cz.toLowerCase().includes(slugMatch));
  if (!found) throw new Error(`edgebanderItem: no match for "${slugMatch}"`);
  return { question: found.question, answer: found.answer };
};

// Bestehende 13 generische FAQ-Items aus FaqPage.tsx — 1:1 in MultiLangText umgewandelt.
const FAQ_EDGEBANDER_ENTRY: HubFaqItem = {
  question: {
    de: 'Welche Kantenanleimmaschine für den Einstieg?',
    en: 'Which edgebander for beginners?',
    cz: 'Která olepovačka hran pro začátek?',
  },
  answer: {
    de: 'Für den Einstieg empfehlen wir die OTT Pacific+. Sie bietet 18 m/min Vorschub inklusive Eckenbearbeitung auf nur 5,7 m Baulänge. Die Maschine verarbeitet Kantenstärken von 0,3–15 mm und Werkstückstärken bis 60 mm. Mit CombiMelt ist sie zudem PUR-nachrüstbar, sodass Sie zukunftssicher investieren.',
    en: 'For beginners we recommend the OTT Pacific+. It offers 18 m/min feed speed including corner processing in just 5.7 m length. The machine handles edge thicknesses from 0.3–15 mm and board thicknesses up to 60 mm. With CombiMelt it is also PUR-retrofittable, making it a future-proof investment.',
    cz: 'Pro začátek doporučujeme OTT Pacific+. Nabízí posuv 18 m/min včetně zpracování rohů na pouhých 5,7 m délky. Stroj zvládne tloušťku hran 0,3–15 mm a tloušťku desek do 60 mm. Díky CombiMelt je navíc dodatečně vybavitelná PUR, takže investujete do budoucnosti.',
  },
};

const FAQ_WAREHOUSE_ROI: HubFaqItem = {
  question: {
    de: 'Ab wann lohnt sich eine Lagerautomatisierung?',
    en: 'When does warehouse automation pay off?',
    cz: 'Kdy se vyplatí automatizace skladu?',
  },
  answer: {
    de: 'Eine Lagerautomatisierung lohnt sich ab einem täglichen Plattendurchsatz von ca. 50 Platten oder wenn Suchzeiten und Fehler bei der Kommissionierung die Produktivität bremsen. BARBARIC-Systeme reduzieren Lagerkosten um bis zu 40 % und erreichen 99,9 % Bestandsgenauigkeit. Der typische ROI liegt bei 2–4 Jahren, abhängig von Betriebsgröße und Materialdurchsatz.',
    en: 'Warehouse automation pays off from a daily panel throughput of approx. 50 panels, or when search times and picking errors slow down productivity. BARBARIC systems reduce storage costs by up to 40% and achieve 99.9% inventory accuracy. Typical ROI is 2–4 years depending on operation size and material throughput.',
    cz: 'Automatizace skladu se vyplatí od denního průchodu přibližně 50 desek nebo když časy hledání a chyby při kompletaci brzdí produktivitu. Systémy BARBARIC snižují skladové náklady až o 40 % a dosahují 99,9% přesnosti zásob. Typická návratnost investice je 2–4 roky v závislosti na velikosti provozu a objemu materiálu.',
  },
};

const FAQ_PUR_VS_EVA: HubFaqItem = {
  question: {
    de: 'Was ist der Unterschied zwischen PUR und EVA Leimtechnologie?',
    en: 'What is the difference between PUR and EVA glue technology?',
    cz: 'Jaký je rozdíl mezi PUR a EVA technologií lepení?',
  },
  answer: {
    de: 'EVA (Ethylenvinylacetat) ist ein thermoplastischer Schmelzkleber, der schnell aushärtet und einfach zu verarbeiten ist. PUR (Polyurethan-Reaktivklebstoff) reagiert mit Feuchtigkeit und bildet eine wasserfeste, hitzebeständige Verbindung. PUR liefert dünnere Leimfugen und höhere Beständigkeit gegen Hitze und Feuchtigkeit. Für Küchenmöbel und feuchte Umgebungen ist PUR die bessere Wahl, für Standardmöbel reicht EVA vollkommen aus.',
    en: 'EVA (ethylene vinyl acetate) is a thermoplastic hot-melt adhesive that cures quickly and is easy to process. PUR (polyurethane reactive adhesive) reacts with moisture and forms a waterproof, heat-resistant bond. PUR delivers thinner glue lines and higher resistance to heat and moisture. For kitchen furniture and humid environments PUR is the better choice; for standard furniture EVA is perfectly sufficient.',
    cz: 'EVA (etylenvinylacetát) je termoplastické tavné lepidlo, které rychle tuhne a snadno se zpracovává. PUR (polyuretanové reaktivní lepidlo) reaguje s vlhkostí a vytváří vodotěsný, tepelně odolný spoj. PUR poskytuje tenčí lepené spáry a vyšší odolnost vůči teplu a vlhkosti. Pro kuchyňský nábytek a vlhké prostředí je PUR lepší volbou; pro standardní nábytek EVA plně dostačuje.',
  },
};

const FAQ_ZERO_GAP: HubFaqItem = {
  question: {
    de: 'Was bedeutet Zero-Gap? Was ist bluEdge HyFuse?',
    en: 'What does Zero-Gap mean? What is bluEdge HyFuse?',
    cz: 'Co znamená Zero-Gap? Co je bluEdge HyFuse?',
  },
  answer: {
    de: 'Zero-Gap bezeichnet eine Kantenverklebung, bei der die Leimfuge optisch unsichtbar ist – die Kante und das Plattenmaterial verschmelzen nahtlos. bluEdge HyFuse ist die OTT-eigene Lasertechnologie, die Kanten mittels Diodenlaser aktiviert und ohne separaten Klebstoff verbindet. Das Ergebnis ist eine fugenlose, wasserdichte Kante mit höchster optischer Qualität.',
    en: 'Zero-Gap refers to edge bonding where the glue line is visually invisible – the edge and panel material merge seamlessly. bluEdge HyFuse is OTT\'s proprietary laser technology that activates edges using a diode laser and bonds them without separate adhesive. The result is a seamless, waterproof edge with the highest visual quality.',
    cz: 'Zero-Gap označuje olepení hrany, kde je lepená spára opticky neviditelná – hrana a deskový materiál splývají bezešvě. bluEdge HyFuse je vlastní laserová technologie OTT, která aktivuje hrany diodovým laserem a spojuje je bez samostatného lepidla. Výsledkem je bezešvá, vodotěsná hrana s nejvyšší optickou kvalitou.',
  },
};

const FAQ_OPC_UA: HubFaqItem = {
  question: {
    de: 'Was ist OPC-UA und warum ist es wichtig für ERP-Integration?',
    en: 'What is OPC-UA and why is it important for ERP integration?',
    cz: 'Co je OPC-UA a proč je důležité pro integraci ERP?',
  },
  answer: {
    de: 'OPC-UA (Open Platform Communications – Unified Architecture) ist ein offener Industriestandard für den sicheren Datenaustausch zwischen Maschinen und IT-Systemen. Alle OTT-Maschinen mit Beckhoff-Steuerung nutzen OPC-UA, sodass sie direkt mit ERP- und MES-Systemen kommunizieren können. Das ermöglicht Echtzeit-Produktionsüberwachung, automatische Auftragssteuerung und vorausschauende Wartung – ohne proprietäre Software oder Vendor-Lock-in.',
    en: 'OPC-UA (Open Platform Communications – Unified Architecture) is an open industrial standard for secure data exchange between machines and IT systems. All OTT machines with Beckhoff controls use OPC-UA, enabling direct communication with ERP and MES systems. This allows real-time production monitoring, automatic order control and predictive maintenance – without proprietary software or vendor lock-in.',
    cz: 'OPC-UA (Open Platform Communications – Unified Architecture) je otevřený průmyslový standard pro bezpečnou výměnu dat mezi stroji a IT systémy. Všechny stroje OTT s řízením Beckhoff využívají OPC-UA, takže mohou přímo komunikovat s ERP a MES systémy. To umožňuje sledování výroby v reálném čase, automatické řízení zakázek a prediktivní údržbu – bez proprietárního softwaru nebo vendor lock-in.',
  },
};

const FAQ_SOFTWARE_INTEGRATION: HubFaqItem = {
  question: {
    de: 'Kann Asamer bei der Software-Integration meiner neuen Maschine helfen?',
    en: 'Can Asamer help with software integration of my new machine?',
    cz: 'Může Asamer pomoci s integrací softwaru do nového stroje?',
  },
  answer: {
    de: 'Ja, unser Software-Team verbindet Ihre Maschine über die offene OPC-UA-Schnittstelle direkt mit Ihrem ERP- oder MES-System. Die Integration umfasst Echtzeit-Produktionsdaten, automatische Auftragssteuerung und Zustandsüberwachung. Es wird keine proprietäre Software benötigt – Sie behalten die volle Kontrolle über Ihre Daten. Die Softwareanbindung ist zudem Voraussetzung für viele Förderprogramme wie OP TAK Digitální podnik.',
    en: 'Yes, our software team connects your machine via the open OPC-UA interface directly to your ERP or MES system. Integration includes real-time production data, automatic order control and condition monitoring. No proprietary software is needed – you retain full control over your data. Software integration is also a prerequisite for many funding programs such as OP TAK Digitální podnik.',
    cz: 'Ano, náš softwarový tým propojí váš stroj přes otevřené rozhraní OPC-UA přímo s vaším ERP nebo MES systémem. Integrace zahrnuje výrobní data v reálném čase, automatické řízení zakázek a monitorování stavu. Není potřeba proprietární software – máte plnou kontrolu nad svými daty. Softwarová integrace je navíc předpokladem pro mnoho dotačních programů jako OP TAK Digitální podnik.',
  },
};

const FAQ_SERVICE_RESPONSE: HubFaqItem = {
  question: {
    de: 'Wie schnell kommt ein Techniker bei Maschinenausfall?',
    en: 'How quickly does a technician arrive during machine failure?',
    cz: 'Jak rychle přijede technik při poruše stroje?',
  },
  answer: {
    de: 'Im Notfall priorisiert unser Serviceteam Ihre Störung sofort. In der Regel beginnen wir innerhalb von 2–4 Stunden mit einer telefonischen oder Ferndiagnose. Ist ein Vor-Ort-Einsatz nötig, planen wir den Techniker innerhalb von 24–48 Stunden ein. Für Kunden mit Wartungsvertrag gelten verkürzte Reaktionszeiten.',
    en: 'In an emergency our service team prioritizes your incident immediately. Typically we start a phone or remote diagnosis within 2–4 hours. If an on-site visit is needed, we schedule a technician within 24–48 hours. Customers with maintenance contracts benefit from shorter response times.',
    cz: 'V případě poruchy náš servisní tým okamžitě priorizuje váš incident. Obvykle zahájíme telefonickou nebo vzdálenou diagnostiku do 2–4 hodin. Pokud je nutný zásah na místě, naplánujeme technika do 24–48 hodin. Zákazníci s servisní smlouvou mají zkrácené reakční doby.',
  },
};

const FAQ_SERVICED_BRANDS: HubFaqItem = {
  question: {
    de: 'Welche Maschinen werden von Asamer gewartet?',
    en: 'Which machines does Asamer service?',
    cz: 'Které stroje Asamer servisuje?',
  },
  answer: {
    de: 'Wir warten alle Maschinen aus unserem aktuellen Portfolio: OTT Kantenanleimmaschinen, Mayer Plattenaufteilsägen, BARBARIC Handling- und Lagersysteme sowie Gannomat Bohr- und Dübelmaschinen. Darüber hinaus bieten wir Service für Bestandsmaschinen von IMA Schelling, Mühlböck und weiteren Herstellern, mit denen wir seit 30 Jahren Erfahrung haben.',
    en: 'We service all machines from our current portfolio: OTT edgebanding machines, Mayer panel saws, BARBARIC handling and storage systems, and Gannomat drilling and dowel machines. Additionally we offer service for existing machines from IMA Schelling, Mühlböck and other manufacturers we have worked with for 30 years.',
    cz: 'Servisujeme všechny stroje z našeho aktuálního portfolia: olepovačky hran OTT, formátovací pily Mayer, manipulační a skladové systémy BARBARIC a vrtací a kolkovací stroje Gannomat. Navíc nabízíme servis pro stávající stroje od IMA Schelling, Mühlböck a dalších výrobců, se kterými máme 30 let zkušeností.',
  },
};

const FAQ_DOTACE_2026: HubFaqItem = {
  question: {
    de: 'Welche Förderprogramme gibt es 2026 für Holzmaschinen in CZ?',
    en: 'What funding programs exist in 2026 for woodworking machines in CZ?',
    cz: 'Jaké dotační programy existují v roce 2026 pro dřevoobráběcí stroje v ČR?',
  },
  answer: {
    de: 'In der Tschechischen Republik stehen 2026 mehrere Programme zur Verfügung: OP TAK – Digitální podnik fördert mit 25–45 % (max. 45 Mio. CZK) bei ERP/MES-Anbindung der Maschinen. OP TAK – Inovace bietet 15–60 % für F&E-basierte Technologien. Der NRB Úvěr Expanze gewährt zinslosen Kredit bis 50 % der Kosten mit 15 Jahren Laufzeit. Asamer berät kostenlos zur optimalen Kombination von Förderung und Leasing.',
    en: 'In the Czech Republic several programs are available in 2026: OP TAK – Digitální podnik supports 25–45% (max. CZK 45M) with ERP/MES integration of machines. OP TAK – Inovace offers 15–60% for R&D-based technologies. NRB Úvěr Expanze provides interest-free credit for up to 50% of costs with a 15-year term. Asamer offers free consulting on optimal combination of grants and leasing.',
    cz: 'V České republice je v roce 2026 k dispozici několik programů: OP TAK – Digitální podnik podporuje 25–45 % (max. 45 mil. Kč) při integraci strojů s ERP/MES. OP TAK – Inovace nabízí 15–60 % pro technologie založené na VaV. NRB Úvěr Expanze poskytuje bezúročný úvěr až do 50 % nákladů se splatností 15 let. Asamer poradí zdarma s optimální kombinací dotace a leasingu.',
  },
};

const FAQ_LEASING: HubFaqItem = {
  question: {
    de: 'Wie funktioniert Leasing über Raiffeisen für Maschinen?',
    en: 'How does leasing through Raiffeisen work for machines?',
    cz: 'Jak funguje leasing přes Raiffeisen pro stroje?',
  },
  answer: {
    de: 'Raiffeisen Leasing finanziert neue und gebrauchte Maschinen mit Laufzeiten von 36–72 Monaten. Sie wählen zwischen Finanzierungsleasing (Eigentumsübergang nach letzter Rate) und operativem Leasing (Rückgabe oder Verlängerung). Die Anzahlung beginnt ab 10 %, Versicherung ist direkt in der Rate enthalten. Asamer übernimmt die komplette Abwicklung – vom Angebot bis zur Vertragsunterschrift.',
    en: 'Raiffeisen Leasing finances new and used machines with terms of 36–72 months. You choose between finance leasing (ownership after final installment) and operating leasing (return or extension). Down payment starts from 10%, insurance is included in the rate. Asamer handles the complete process – from quote to contract signing.',
    cz: 'Raiffeisen Leasing financuje nové i použité stroje s dobou trvání 36–72 měsíců. Volíte mezi finančním leasingem (přechod vlastnictví po poslední splátce) a operativním leasingem (vrácení nebo prodloužení). Akontace začíná od 10 %, pojištění je přímo v splátce. Asamer zajistí kompletní vyřízení – od nabídky po podpis smlouvy.',
  },
};

const FAQ_USED_CHECKS: HubFaqItem = {
  question: {
    de: 'Worauf achten beim Kauf gebrauchter Kantenanleimmaschinen?',
    en: 'What to look for when buying used edgebanders?',
    cz: 'Na co si dát pozor při nákupu použitých olepovaček hran?',
  },
  answer: {
    de: 'Prüfen Sie den Zustand der Leimeinheit, Fräsaggregate und Vorschubkette – das sind die kritischen Verschleißteile. Fragen Sie nach dem Maschinenpass mit Wartungshistorie und Betriebsstunden. Asamer prüft jede Gebrauchtmaschine technisch, bevor sie angeboten wird. Achten Sie auf die Verfügbarkeit von Ersatzteilen und darauf, ob der Hersteller noch Support bietet.',
    en: 'Check the condition of the glue unit, milling aggregates and feed chain – these are the critical wear parts. Ask for the machine passport with maintenance history and operating hours. Asamer technically inspects every used machine before listing it. Verify spare parts availability and whether the manufacturer still provides support.',
    cz: 'Zkontrolujte stav lepicí jednotky, frézovacích agregátů a posuvného řetězu – to jsou kritické opotřebitelné díly. Požádejte o strojní pas s historií údržby a provozními hodinami. Asamer každý použitý stroj technicky prověří, než ho nabídne. Ověřte si dostupnost náhradních dílů a zda výrobce stále poskytuje podporu.',
  },
};

const FAQ_USED_WARRANTY: HubFaqItem = {
  question: {
    de: 'Bietet Asamer Garantie auf gebrauchte Maschinen?',
    en: 'Does Asamer offer warranty on used machines?',
    cz: 'Poskytuje Asamer záruku na použité stroje?',
  },
  answer: {
    de: 'Ja, jede Gebrauchtmaschine von Asamer wird vor dem Verkauf technisch geprüft und ggf. aufbereitet. Je nach Zustand und Umfang der Aufbereitung bieten wir Gewährleistung auf die geprüften Komponenten. Zusätzlich steht unser Serviceteam für Wartung und Ersatzteillieferung zur Verfügung. Für die Finanzierung von Gebrauchtmaschinen arbeiten wir mit Raiffeisen Leasing zusammen.',
    en: 'Yes, every used machine from Asamer is technically inspected and refurbished if needed before sale. Depending on condition and scope of refurbishment we provide warranty on inspected components. Additionally our service team is available for maintenance and spare parts delivery. For used machine financing we partner with Raiffeisen Leasing.',
    cz: 'Ano, každý použitý stroj od Asamer je před prodejem technicky prověřen a případně repasován. V závislosti na stavu a rozsahu repase poskytujeme záruku na prověřené komponenty. Navíc je k dispozici náš servisní tým pro údržbu a dodávky náhradních dílů. Pro financování použitých strojů spolupracujeme s Raiffeisen Leasing.',
  },
};

const FAQ_DELIVERY_HU_SK: HubFaqItem = {
  question: {
    de: 'Liefert Asamer auch nach Ungarn und in die Slowakei?',
    en: 'Does Asamer deliver to Hungary and Slovakia?',
    cz: 'Dodává Asamer i do Maďarska a na Slovensko?',
  },
  answer: {
    de: 'Ja, Asamer liefert in die gesamte Region CZ, SK und HU. Für OTT Kantenanleimmaschinen sind wir exklusiver Vertriebspartner. Mayer, BARBARIC und Gannomat vertreiben wir als autorisierter Händler. Wir liefern, installieren und warten Maschinen in allen drei Ländern. Die Zentrale befindet sich in Brno, von wo aus wir die Region abdecken.',
    en: 'Yes, Asamer delivers across the entire CZ, SK and HU region. We are the exclusive distribution partner for OTT edgebanding machines. Mayer, BARBARIC and Gannomat are sold as an authorized dealer. We deliver, install and service machines in all three countries. Our headquarters are in Brno, from where we cover the region.',
    cz: 'Ano, Asamer dodává do celého regionu CZ, SK a HU. Pro olepovačky hran OTT jsme exkluzivním distribučním partnerem. Mayer, BARBARIC a Gannomat prodáváme jako autorizovaný prodejce. Dodáváme, instalujeme a servisujeme stroje ve všech třech zemích. Centrála se nachází v Brně, odkud pokrýváme celý region.',
  },
};

/* ------------------------------------------------------------------ */
/*  Kategorisierung — 18 Items in 5 Kategorien                         */
/* ------------------------------------------------------------------ */

export const HUB_FAQ_CATEGORIES: HubFaqCategory[] = [
  {
    id: 'vyber-stroje',
    name: {
      cz: 'Výběr stroje a materiálů',
      sk: 'Výber stroja a materiálov',
      de: 'Maschinenwahl und Materialien',
      en: 'Choosing the machine and materials',
      hu: 'Gépválasztás és anyagok',
    },
    items: [
      FAQ_EDGEBANDER_ENTRY,
      FAQ_WAREHOUSE_ROI,
      edgebanderItem('hrany dokáže'),     // Welche Kanten zpracovat
      FAQ_PUR_VS_EVA,
      FAQ_ZERO_GAP,
    ],
  },
  {
    id: 'technologie',
    name: {
      cz: 'Technologie a integrace',
      sk: 'Technológie a integrácia',
      de: 'Technologie und Integration',
      en: 'Technology and integration',
      hu: 'Technológia és integráció',
    },
    items: [
      FAQ_OPC_UA,
      edgebanderItem('vratný systém'),    // Vratný systém — return
      FAQ_SOFTWARE_INTEGRATION,
    ],
  },
  {
    id: 'servis',
    name: {
      cz: 'Servis, údržba a životnost',
      sk: 'Servis, údržba a životnosť',
      de: 'Service, Wartung und Lebensdauer',
      en: 'Service, maintenance and lifetime',
      hu: 'Szerviz, karbantartás és élettartam',
    },
    items: [
      FAQ_SERVICE_RESPONSE,
      FAQ_SERVICED_BRANDS,
      edgebanderItem('životnost'),        // Lebensdauer
      edgebanderItem('instalace'),        // Installation timeline
    ],
  },
  {
    id: 'cena-financovani',
    name: {
      cz: 'Cena a financování',
      sk: 'Cena a financovanie',
      de: 'Preis und Finanzierung',
      en: 'Price and financing',
      hu: 'Ár és finanszírozás',
    },
    items: [
      edgebanderItem('kolik stojí'),      // Cena
      FAQ_DOTACE_2026,
      FAQ_LEASING,
    ],
  },
  {
    id: 'pouzite-dostupnost',
    name: {
      cz: 'Použité stroje a dostupnost',
      sk: 'Použité stroje a dostupnosť',
      de: 'Gebrauchtmaschinen und Verfügbarkeit',
      en: 'Used machines and availability',
      hu: 'Használt gépek és elérhetőség',
    },
    items: [
      FAQ_USED_CHECKS,
      FAQ_USED_WARRANTY,
      FAQ_DELIVERY_HU_SK,
    ],
  },
];

/** Flache Liste aller Hub-FAQ-Items (fuer FAQPage-JSON-LD). */
export const HUB_FAQ_FLAT: HubFaqItem[] = HUB_FAQ_CATEGORIES.flatMap((c) => c.items);
