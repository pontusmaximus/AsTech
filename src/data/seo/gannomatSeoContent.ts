/**
 * Keyword-rich SEO content for Gannomat woodworking machinery.
 * Used on product detail pages and category overview pages at asamer.cz.
 *
 * Covers: dowel insertion, hinge drilling, frame drilling, carcass presses,
 * CNC processing centres. Target: B2B furniture manufacturers in CZ, SK and HU.
 */

import type { ProductSeoContent, CategorySeoContent } from './types';
import type { GannomatCategory } from '../gannomatProducts';

/* ====================================================================== */
/*  PRODUCT SEO CONTENT (flagship products)                               */
/* ====================================================================== */

export const GANNOMAT_PRODUCT_SEO: Record<string, ProductSeoContent> = {
  /* ------------------------------------------------------------------ */
  /*  INSERTION — selekta                                                */
  /* ------------------------------------------------------------------ */
  'selekta': {
    longDescription: {
      de: `Die Gannomat Selekta ist eine vollautomatische Bohr-, Beleim- und Dübeleintreibmaschine für die industrielle Korpusfertigung. Sie erledigt alle drei Prozessschritte in einem Durchgang: präzises Bohren der Dübellöcher, kontrolliertes Aufbringen des Klebstoffs und sauberes Eintreiben der Dübel. Für Möbelhersteller, Küchen- und Büromöbelproduzenten ist die Selekta der Industriestandard für kurze Taktzeiten bei gleichbleibender Qualität. Die Maschine verarbeitet Korpus-Seitenteile, Böden und Deckel in einem breiten Formatbereich und lässt sich über CNC-Steuerung flexibel auf unterschiedliche Dübel- und Bohrmuster programmieren. Asamer ist autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn und liefert die Selekta inklusive Beratung, Installation, Mitarbeiterschulung und langfristigem Wartungsvertrag. Die Verknüpfung zu ERP- oder MES-Systemen realisiert unser Software-Team.`,
      en: `The Gannomat Selekta is a fully automatic drilling, gluing and dowel insertion machine for industrial carcass production. It performs all three process steps in one pass: precise drilling of dowel holes, controlled application of glue and clean insertion of dowels. For furniture manufacturers, kitchen and office furniture producers, the Selekta is the industry standard for short cycle times with consistent quality. The machine processes carcass side panels, bases and tops in a wide format range and can be flexibly programmed via CNC control to different dowel and drilling patterns. Asamer is the authorized Gannomat dealer for Czech Republic, Slovakia and Hungary and delivers the Selekta with consultation, installation, operator training and long-term maintenance contract. Integration with ERP or MES systems is handled by our software team.`,
      cz: `Gannomat Selekta je plně automatický vrtací, lepicí a kolíkovací stroj pro průmyslovou výrobu korpusu. Provádí všechny tři procesní kroky v jednom průchodu: přesné vrtání kolíkových otvorů, řízené nanášení lepidla a čisté zarážení kolíků. Pro výrobce nábytku, kuchyní a kancelářského nábytku je Selekta průmyslovým standardem pro krátké doby taktu při stálé kvalitě. Stroj zpracovává korpusové boční díly, dna a víka v širokém formátovém rozsahu a lze jej flexibilně programovat přes CNC řízení na různé vzory kolíků a vrtání. Asamer je autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko a dodává Selekta včetně poradenství, instalace, školení obsluhy a dlouhodobé servisní smlouvy. Propojení s ERP nebo MES systémy zajišťuje náš softwarový tým.`,
      sk: `Gannomat Selekta je plne automatický vŕtací, lepiaci a kolíkovací stroj pre priemyselnú výrobu korpusu. Vykonáva všetky tri procesné kroky v jednom prechode: presné vŕtanie kolíkových otvorov, riadené nanášanie lepidla a čisté zarážanie kolíkov. Pre výrobcov nábytku, kuchýň a kancelárskeho nábytku je Selekta priemyselným štandardom pre krátke taktové časy pri stálej kvalite. Stroj spracováva korpusové bočné diely, dná a veká v širokom formátovom rozsahu a možno ho flexibilne programovať cez CNC riadenie na rôzne vzory kolíkov a vŕtania. Asamer je autorizovaný predajca Gannomat pre Českú republiku, Slovensko a Maďarsko a dodáva Selekta vrátane poradenstva, inštalácie, školenia obsluhy a dlhodobej servisnej zmluvy. Prepojenie s ERP alebo MES systémami zabezpečuje náš softvérový tím.`,
      hu: `A Gannomat Selekta egy teljesen automatikus fúró-, ragasztó- és csapozógép ipari korpuszgyártáshoz. Mindhárom folyamatlépést egy menetben végzi el: a csaplyukak precíz fúrása, a ragasztó kontrollált felvitele és a csapok tiszta beütése. Bútorgyártók, konyha- és irodabútor-gyártók számára a Selekta az ipari szabvány a rövid ciklusidőkhöz és egyenletes minőséghez. A gép korpusz oldallapokat, aljakat és tetőket dolgoz fel széles formátumtartományban, és CNC-vezérléssel rugalmasan programozható különböző csap- és fúrásmintákra. Az Asamer a hivatalos Gannomat-forgalmazó Csehország, Szlovákia és Magyarország számára, és a Selekta gépet tanácsadással, telepítéssel, kezelői képzéssel és hosszú távú karbantartási szerződéssel együtt szállítja. Az ERP- vagy MES-rendszerek integrációját szoftvercsapatunk végzi.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Serien-Korpusfertigung', en: 'For series carcass production', cz: 'Pro sériovou výrobu korpusu', hu: 'Sorozatgyártású korpuszgyártáshoz' },
        body: {
          de: 'In der Serienfertigung von Küchen- oder Büromöbeln liefert die Selekta reproduzierbare Qualität bei hohem Durchsatz. Die CNC-Steuerung ermöglicht schnellen Programmwechsel zwischen verschiedenen Korpustypen, sodass auch variantenreiche Produktionen ohne lange Umrüstzeiten laufen.',
          en: 'In series production of kitchen or office furniture, the Selekta delivers reproducible quality at high throughput. CNC control enables quick program changes between different carcass types, so variant-rich production runs without long changeover times.',
          cz: 'V sériové výrobě kuchyní nebo kancelářského nábytku dodává Selekta reprodukovatelnou kvalitu při vysoké průchodnosti. CNC řízení umožňuje rychlou změnu programu mezi různými typy korpusu, takže i variantně bohatá výroba běží bez dlouhých přestavovacích časů.',
          hu: 'Konyha- vagy irodabútor sorozatgyártásban a Selekta reprodukálható minőséget nyújt magas áteresztőképesség mellett. A CNC-vezérlés gyors programváltást tesz lehetővé a különböző korpusztípusok között, így a változatos gyártás is hosszú átállási idők nélkül fut.',
        },
      },
      {
        heading: { de: 'Für Zulieferbetriebe mit Losgröße-1', en: 'For supplier operations with batch-size-1', cz: 'Pro dodavatelské provozy s dávkou 1', hu: '1-es tételszámú beszállító üzemekhez' },
        body: {
          de: 'Durch die direkte Anbindung an ERP-Systeme kann die Selekta auch in Losgröße-1-Produktion mit jedem Werkstück individuelles Bohr- und Dübelmuster fahren. Ideal für Zulieferbetriebe, die für unterschiedliche Möbelhersteller fertigen.',
          en: 'Through direct connection to ERP systems, the Selekta can run individual drilling and dowel patterns for every workpiece even in batch-size-1 production. Ideal for supplier operations producing for different furniture manufacturers.',
          cz: 'Přímým napojením na ERP systémy může Selekta i při výrobě dávky 1 jet individuální vrtací a kolíkovací vzor pro každý obrobek. Ideální pro dodavatelské provozy vyrábějící pro různé výrobce nábytku.',
          hu: 'Az ERP-rendszerekhez való közvetlen kapcsolódásnak köszönhetően a Selekta 1-es tételszámú gyártásban is minden munkadarabhoz egyedi fúrási és csapozási mintát futtat. Ideális olyan beszállító üzemek számára, amelyek különböző bútorgyártóknak dolgoznak.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Selekta ist die richtige Wahl für mittlere bis große Korpusfertigungsbetriebe mit Anspruch an Automatisierung und variable Produktion. Für kleinere Betriebe mit überschaubarer Variantenanzahl ist die Elite wirtschaftlicher, für höchste Industrieansprüche die Spectrum.',
      en: 'The Selekta is the right choice for medium to large carcass production operations requiring automation and variable production. For smaller operations with manageable variant counts, the Elite is more economical; for highest industrial demands, the Spectrum.',
      cz: 'Selekta je správnou volbou pro střední až velké výrobce korpusu s požadavky na automatizaci a variabilní výrobu. Pro menší provozy s přehledným počtem variant je ekonomičtější Elite, pro nejvyšší průmyslové nároky Spectrum.',
      hu: 'A Selekta a megfelelő választás közepes és nagy korpuszgyártó üzemek számára, amelyeknek automatizálásra és változtatható gyártásra van szükségük. Kisebb üzemeknek áttekinthető variánsszámmal az Elite gazdaságosabb, a legmagasabb ipari igényekhez a Spectrum.',
    },
    faq: [
      {
        question: { de: 'Welche Dübeldurchmesser verarbeitet die Selekta?', en: 'What dowel diameters does the Selekta process?', cz: 'Jaké průměry kolíků Selekta zpracovává?', hu: 'Milyen csapátmérőket dolgoz fel a Selekta?' },
        answer: {
          de: 'Standarddübel von 6 bis 10 mm Durchmesser. Sondergrößen auf Anfrage.',
          en: 'Standard dowels from 6 to 10 mm diameter. Special sizes on request.',
          cz: 'Standardní kolíky o průměru 6 až 10 mm. Speciální rozměry na vyžádání.',
          hu: 'Szabványos csapok 6-tól 10 mm átmérőig. Egyedi méretek kérésre.',
        },
      },
      {
        question: { de: 'Wie schnell ist der Formatwechsel?', en: 'How fast is format changeover?', cz: 'Jak rychlá je změna formátu?', hu: 'Milyen gyors a formátumváltás?' },
        answer: {
          de: 'Über die CNC-Programmwahl in wenigen Minuten. Mechanische Umrüstung nur bei sehr unterschiedlichen Werkstücken nötig.',
          en: 'Via CNC program selection in a few minutes. Mechanical changeover only needed for very different workpieces.',
          cz: 'Přes výběr CNC programu během několika minut. Mechanické přestavení nutné jen u velmi odlišných obrobků.',
          hu: 'CNC-programválasztással néhány perc alatt. Mechanikus átállás csak nagyon eltérő munkadaraboknál szükséges.',
        },
      },
      {
        question: { de: 'Gibt es ERP-Anbindung?', en: 'Is there ERP connection?', cz: 'Existuje napojení na ERP?', hu: 'Van ERP-kapcsolat?' },
        answer: {
          de: 'Ja — über OPC-UA oder individuelle Schnittstellen. Asamer-Softwareteam programmiert die Integration zu SAP, Navision oder Branchenlösungen.',
          en: 'Yes — via OPC-UA or custom interfaces. Asamer software team programs integration with SAP, Navision or industry solutions.',
          cz: 'Ano — přes OPC-UA nebo individuální rozhraní. Softwarový tým Asamer programuje integraci s SAP, Navision nebo oborovými řešeními.',
          hu: 'Igen — OPC-UA vagy egyedi interfészeken keresztül. Az Asamer szoftvercsapata programozza a SAP, Navision vagy ágazati megoldásokkal való integrációt.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  INSERTION — elite                                                  */
  /* ------------------------------------------------------------------ */
  'elite': {
    longDescription: {
      de: `Die Gannomat Elite ist eine kompakte halbautomatische Bohr-, Beleim- und Dübeleintreibmaschine für mittlere Tischlereien und Korpusfertiger. Sie bietet die drei zentralen Prozessschritte — Bohren, Beleimen, Dübel eintreiben — in einer einzigen Maschine und ist deutlich wirtschaftlicher als die vollautomatische Selekta, bei vergleichbarer Qualität. Die Elite eignet sich besonders für Betriebe mit mittlerem Tagesdurchsatz von einigen hundert Werkstücken, die aus der manuellen Korpusfertigung aussteigen wollen. Umrüstung und Bedienung sind einfach genug für Einsatz mit normal qualifiziertem Personal. Asamer liefert die Elite als autorisierter Gannomat-Händler für CZ, SK und HU inklusive Schulung und Ersatzteilservice.`,
      en: `The Gannomat Elite is a compact semi-automatic drilling, gluing and dowel insertion machine for mid-sized joinery shops and carcass manufacturers. It offers the three central process steps — drilling, gluing, dowel insertion — in a single machine and is significantly more economical than the fully automatic Selekta, with comparable quality. The Elite is particularly suitable for operations with medium daily throughput of several hundred workpieces that want to move away from manual carcass production. Setup and operation are simple enough for use with normally qualified personnel. Asamer supplies the Elite as authorized Gannomat dealer for CZ, SK and HU including training and spare parts service.`,
      cz: `Gannomat Elite je kompaktní poloautomatický vrtací, lepicí a kolíkovací stroj pro střední truhlárny a výrobce korpusu. Nabízí tři centrální procesní kroky — vrtání, lepení, zarážení kolíků — v jediném stroji a je výrazně ekonomičtější než plně automatická Selekta při srovnatelné kvalitě. Elite je obzvlášť vhodná pro provozy se středním denním průtokem několika set obrobků, které chtějí vystoupit z ruční výroby korpusu. Přestavba a obsluha jsou dostatečně jednoduché pro použití s běžně kvalifikovaným personálem. Asamer dodává Elite jako autorizovaný prodejce Gannomat pro CZ, SK a HU včetně školení a servisu náhradních dílů.`,
      hu: `A Gannomat Elite egy kompakt, félautomatikus fúró-, ragasztó- és csapozógép közepes asztalosüzemek és korpuszgyártók számára. A három központi folyamatlépést — fúrás, ragasztás, csapozás — egyetlen gépben kínálja, és jelentősen gazdaságosabb, mint a teljesen automatikus Selekta, összehasonlítható minőség mellett. Az Elite különösen alkalmas olyan üzemek számára, amelyek közepes napi áteresztőképességgel néhány száz munkadarabot dolgoznak fel, és ki akarnak lépni a kézi korpuszgyártásból. A beállítás és kezelés elég egyszerű ahhoz, hogy normál képzettségű személyzet használhassa. Az Asamer hivatalos Gannomat-forgalmazóként szállítja az Elite-et Csehországba, Szlovákiába és Magyarországra, képzéssel és alkatrész-szolgáltatással együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für mittlere Tischlereien', en: 'For mid-sized joinery shops', cz: 'Pro střední truhlárny', hu: 'Közepes asztalosüzemek számára' },
        body: {
          de: 'Die Elite bringt Tischlereien mit 5–20 Mitarbeitern den industriellen Qualitätsstandard bei überschaubarer Investition. Durchsatz und Bedienkomfort sind deutlich über manueller Korpusfertigung, ohne dass Sie in eine vollautomatisierte Linie investieren müssen.',
          en: 'The Elite brings the industrial quality standard to joinery shops with 5–20 employees at manageable investment. Throughput and ease of use are significantly above manual carcass production without requiring investment in a fully automated line.',
          cz: 'Elite přináší truhlárnám s 5–20 pracovníky průmyslový kvalitativní standard při přehledné investici. Průchodnost a uživatelský komfort jsou výrazně nad ruční výrobou korpusu, aniž byste museli investovat do plně automatizované linky.',
          hu: 'Az Elite 5–20 fős asztalosüzemek számára hozza el az ipari minőségi szintet áttekinthető beruházás mellett. Az áteresztőképesség és a kezelési kényelem jelentősen meghaladja a kézi korpuszgyártást, anélkül, hogy teljesen automatizált gyártósorba kellene beruháznia.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Wählen Sie die Elite bei mittleren Stückzahlen und begrenzter Variantenvielfalt. Für hohe Varianz und Losgröße-1-Produktion ist die Selekta mit CNC-Flexibilität besser; für hochindustrielle Ansprüche die Spectrum.',
      en: 'Choose the Elite for medium quantities and limited variant diversity. For high variance and batch-size-1 production, the Selekta with CNC flexibility is better; for high-industrial demands, the Spectrum.',
      cz: 'Zvolte Elite při středních počtech kusů a omezené variabilitě. Pro vysokou variabilitu a výrobu dávky 1 je lepší Selekta s CNC flexibilitou; pro vysoce průmyslové nároky Spectrum.',
      hu: 'Közepes darabszám és korlátozott variánsválasztás esetén válassza az Elite-et. Nagy variabilitás és 1-es tételszámú gyártás esetén a Selekta jobb a CNC-rugalmasság miatt; magas ipari igényekhez a Spectrum.',
    },
    faq: [
      {
        question: { de: 'Wie groß ist der Schulungsaufwand?', en: 'How much training is needed?', cz: 'Jaká je potřeba školení?', hu: 'Mekkora a képzési igény?' },
        answer: {
          de: '2–3 Tage für eine solide Grundbedienung. Asamer schult vor Ort nach Inbetriebnahme.',
          en: '2–3 days for solid basic operation. Asamer trains on-site after commissioning.',
          cz: '2–3 dny pro solidní základní obsluhu. Asamer školí na místě po zprovoznění.',
          hu: '2–3 nap a szilárd alapkezeléshez. Az Asamer az üzembe helyezés után helyszíni képzést tart.',
        },
      },
      {
        question: { de: 'Kann ich die Elite später auf die Selekta aufrüsten?', en: 'Can I upgrade the Elite to a Selekta later?', cz: 'Mohu Elite později upgradovat na Selekta?', hu: 'Fejleszthető az Elite később Selektára?' },
        answer: {
          de: 'Ein Tausch ist möglich, eine Aufrüstung technisch eingeschränkt. Bei sicherem Wachstum empfehlen wir, direkt die Selekta zu wählen.',
          en: 'A swap is possible, an upgrade technically limited. With secure growth we recommend choosing the Selekta directly.',
          cz: 'Výměna je možná, upgrade technicky omezený. Při jisté expanzi doporučujeme rovnou zvolit Selekta.',
          hu: 'Csere lehetséges, a fejlesztés műszakilag korlátozott. Biztos növekedés esetén azt javasoljuk, hogy közvetlenül a Selektát válassza.',
        },
      },
      {
        question: { de: 'Wie ist der Service?', en: 'How is the service?', cz: 'Jaký je servis?', hu: 'Milyen a szerviz?' },
        answer: {
          de: 'Asamer bietet jährliche Wartung, Fernunterstützung und garantierte Reaktionszeiten für CZ, SK und HU.',
          en: 'Asamer offers annual maintenance, remote support and guaranteed response times for CZ, SK and HU.',
          cz: 'Asamer nabízí roční údržbu, vzdálenou podporu a garantované reakční časy pro CZ, SK a HU.',
          hu: 'Az Asamer éves karbantartást, távoli támogatást és garantált reakcióidőket kínál CZ, SK és HU területére.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  INSERTION — index-reihe-cnc                                        */
  /* ------------------------------------------------------------------ */
  'index-reihe-cnc': {
    longDescription: {
      de: `Die Gannomat Index Reihe CNC ist eine hochflexible CNC-gesteuerte Bohr- und Beschlagsetzmaschine, die Bohrungen, Dübel, Beschläge und Verbinder vollautomatisch einsetzt. Sie ist speziell für hochvariable Losgrößen konzipiert und verarbeitet jedes Werkstück nach individuellem CNC-Programm. Durch die freie Programmierbarkeit der Achsen deckt die Index Reihe CNC auch komplexe Bohrbilder und gemischte Beschlagssetzungen ab — ideal für die Ready-to-Assemble-Möbelproduktion, wo jeder Korpus andere Beschläge braucht. Asamer liefert die Index Reihe CNC inklusive Programmierschulung und integriert sie bei Bedarf in Fertigungslinien mit Förderer oder Pufferstationen.`,
      en: `The Gannomat Index Reihe CNC is a highly flexible CNC-controlled drilling and fitting insertion machine that automatically drills, inserts dowels, fittings and connectors. Designed specifically for highly variable batch sizes, it processes every workpiece according to individual CNC program. Through free axis programmability, the Index Reihe CNC covers complex drilling patterns and mixed fitting insertions — ideal for ready-to-assemble furniture production where every carcass needs different fittings. Asamer supplies the Index Reihe CNC including programming training and integrates it into production lines with conveyors or buffer stations as needed.`,
      cz: `Gannomat Index Reihe CNC je vysoce flexibilní CNC řízený vrtací stroj pro vsazování kování, který automaticky vrtá a vsazuje kolíky, kování a spojovací prvky. Je speciálně navržen pro vysoce variabilní dávky a zpracovává každý obrobek podle individuálního CNC programu. Volnou programovatelností os pokrývá Index Reihe CNC i složité vrtací obrazce a smíšené vsazování kování — ideální pro výrobu ready-to-assemble nábytku, kde každý korpus potřebuje jiné kování. Asamer dodává Index Reihe CNC včetně programovacího školení a integruje jej podle potřeby do výrobních linek s dopravníky nebo pufrovacími stanicemi.`,
      hu: `A Gannomat Index Reihe CNC egy nagy rugalmasságú, CNC-vezérlésű fúró- és szerelvénybeültető gép, amely automatikusan végzi a fúrást, a csapok, szerelvények és összekötők beültetését. Kifejezetten nagy variabilitású sorozatnagyságokhoz tervezték, és minden munkadarabot egyedi CNC-program szerint dolgoz fel. A tengelyek szabad programozhatósága révén az Index Reihe CNC összetett fúrásmintákat és vegyes szerelvénybeültetéseket is lefed — ideális RTA bútorgyártáshoz, ahol minden korpusznak más szerelvényre van szüksége. Az Asamer programozási képzéssel együtt szállítja az Index Reihe CNC-t, és igény szerint integrálja szállítószalagos vagy puffer-állomásos gyártósorokba.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Ready-to-Assemble-Fertigung', en: 'For ready-to-assemble production', cz: 'Pro výrobu ready-to-assemble', hu: 'Laposcsomagolt bútor gyártásához' },
        body: {
          de: 'Bei RTA-Möbeln bekommt jeder Korpus zusätzlich zu Dübeln eine Vielzahl von Beschlägen: Exzenterbeschläge, Bolzen, Muffen. Die Index Reihe CNC setzt all diese Teile in einem Durchlauf — ein Quantensprung an Effizienz gegenüber separater Bearbeitung.',
          en: 'In RTA furniture, every carcass receives — in addition to dowels — a variety of fittings: cam fittings, bolts, sleeves. The Index Reihe CNC inserts all these parts in one pass — a quantum leap in efficiency compared to separate processing.',
          cz: 'U RTA nábytku dostává každý korpus kromě kolíků řadu kování: excentrická kování, šrouby, pouzdra. Index Reihe CNC vsazuje všechny tyto prvky v jednom průchodu — obrovský skok v efektivitě oproti oddělenému zpracování.',
          hu: 'RTA bútoroknál minden korpusz a csapokon túl számos szerelvényt kap: excenteres szerelvényeket, csavarokat, hüvelyeket. Az Index Reihe CNC mindezeket egy menetben ülteti be — hatalmas hatékonyságnövekedés a különálló feldolgozáshoz képest.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Index Reihe CNC ist die richtige Wahl für industrielle Hersteller von RTA-Möbeln oder Möbelbausätzen mit hoher Variantenzahl und Beschlagsvielfalt. Für Standardkorpusfertigung reicht die Selekta.',
      en: 'The Index Reihe CNC is the right choice for industrial manufacturers of RTA furniture or furniture kits with high variant counts and fitting diversity. For standard carcass production, the Selekta is sufficient.',
      cz: 'Index Reihe CNC je správnou volbou pro průmyslové výrobce RTA nábytku nebo nábytkových stavebnic s vysokým počtem variant a rozmanitostí kování. Pro standardní výrobu korpusu stačí Selekta.',
      hu: 'Az Index Reihe CNC a megfelelő választás RTA bútorok vagy bútorszettek ipari gyártóinak, nagy variánsszámmal és szerelvény-változatossággal. Szabványos korpuszgyártáshoz elég a Selekta.',
    },
    faq: [
      {
        question: { de: 'Welche Beschläge werden unterstützt?', en: 'Which fittings are supported?', cz: 'Jaká kování jsou podporována?', hu: 'Milyen szerelvények támogatottak?' },
        answer: {
          de: 'Alle gängigen Beschläge: Exzenter (Hettich, Blum, Grass), Bolzen, Muffen, Dübel, Universalverbinder.',
          en: 'All common fittings: cam fittings (Hettich, Blum, Grass), bolts, sleeves, dowels, universal connectors.',
          cz: 'Všechna běžná kování: excentry (Hettich, Blum, Grass), šrouby, pouzdra, kolíky, univerzální spojovací prvky.',
          hu: 'Minden szokásos szerelvény: excenterek (Hettich, Blum, Grass), csavarok, hüvelyek, csapok, univerzális összekötők.',
        },
      },
      {
        question: { de: 'Gibt es Programmiersoftware?', en: 'Is there programming software?', cz: 'Existuje programovací software?', hu: 'Van programozószoftver?' },
        answer: {
          de: 'Ja — Gannomat bietet eine grafische Programmiersoftware mit CAD-Import. Asamer schult Ihr Team.',
          en: 'Yes — Gannomat offers graphical programming software with CAD import. Asamer trains your team.',
          cz: 'Ano — Gannomat nabízí grafický programovací software s importem CAD. Asamer školí váš tým.',
          hu: 'Igen — a Gannomat grafikus programozószoftvert kínál CAD-importtal. Az Asamer betanítja a csapatát.',
        },
      },
      {
        question: { de: 'Ist die Maschine linienfähig?', en: 'Is the machine line-capable?', cz: 'Je stroj způsobilý pro linku?', hu: 'Gyártósorba integrálható a gép?' },
        answer: {
          de: 'Ja — die Index Reihe CNC lässt sich mit Förderern, Puffern und Rückführsystemen zur durchgängigen Fertigungslinie kombinieren.',
          en: 'Yes — the Index Reihe CNC can be combined with conveyors, buffers and return systems into a continuous production line.',
          cz: 'Ano — Index Reihe CNC lze kombinovat s dopravníky, pufry a návratovými systémy do průběžné výrobní linky.',
          hu: 'Igen — az Index Reihe CNC szállítószalagokkal, pufferekkel és visszavezető rendszerekkel folyamatos gyártósorrá kombinálható.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  FITTING — express-s5                                               */
  /* ------------------------------------------------------------------ */
  'express-s5': {
    longDescription: {
      de: `Die Gannomat Express S5 ist das Top-Modell der Express-Baureihe — eine halbautomatische Dübelsetzmaschine mit fünf Spindeln, die für hohe Tagesdurchsätze ausgelegt ist. Fünf Dübel gleichzeitig setzen bedeutet kürzere Taktzeiten und geringere Handhabungsaufwand pro Werkstück. Für Korpusfertiger mit serienmäßiger Produktion, aber ohne Losgröße-1-Anspruch ist die Express S5 die wirtschaftliche Alternative zur CNC-gesteuerten Spectrum oder Selekta. Die Maschine arbeitet mit pneumatischer Dübelzuführung und bewährten Gannomat-Bohraggregaten. Asamer liefert und wartet die Express-Baureihe für CZ, SK und HU inklusive Schulung und Ersatzteilservice.`,
      en: `The Gannomat Express S5 is the top model of the Express series — a semi-automatic dowel insertion machine with five spindles designed for high daily throughput. Setting five dowels simultaneously means shorter cycle times and lower handling effort per workpiece. For carcass manufacturers with series production but without batch-size-1 requirements, the Express S5 is the economical alternative to the CNC-controlled Spectrum or Selekta. The machine works with pneumatic dowel feeding and proven Gannomat drilling units. Asamer supplies and services the Express series for CZ, SK and HU including training and spare parts service.`,
      cz: `Gannomat Express S5 je vrcholný model řady Express — poloautomatický stroj pro vsazování kolíků s pěti vřeteny, navržený pro vysoké denní průtoky. Vsazování pěti kolíků současně znamená kratší doby taktu a nižší manipulační náročnost na obrobek. Pro výrobce korpusu se sériovou výrobou, ale bez požadavku na dávku 1, je Express S5 ekonomickou alternativou k CNC řízené Spectrum nebo Selekta. Stroj pracuje s pneumatickým podáváním kolíků a osvědčenými vrtacími agregáty Gannomat. Asamer dodává a servisuje řadu Express pro CZ, SK a HU včetně školení a servisu náhradních dílů.`,
      hu: `A Gannomat Express S5 az Express sorozat csúcsmodellje — egy félautomatikus csapbeültető gép öt orsóval, amelyet magas napi áteresztőképességre terveztek. Öt csap egyidejű beültetése rövidebb ciklusidőt és kevesebb munkadarabonkénti kezelést jelent. Sorozatgyártású, de 1-es tételszám igénye nélküli korpuszgyártók számára az Express S5 a CNC-vezérlésű Spectrum vagy Selekta gazdaságos alternatívája. A gép pneumatikus csapadagolással és bevált Gannomat fúróegységekkel dolgozik. Az Asamer az Express sorozatot CZ, SK és HU területén szállítja és szervizeli, képzéssel és alkatrész-szolgáltatással együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für industrielle Serienproduktion', en: 'For industrial series production', cz: 'Pro průmyslovou sériovou výrobu', hu: 'Ipari sorozatgyártáshoz' },
        body: {
          de: 'Mit fünf parallel setzenden Spindeln erzielt die Express S5 Durchsätze, die an vollautomatische Maschinen heranreichen — bei deutlich geringerer Investition. Ideal für Korpusfertigung mit begrenzter Variantenvielfalt.',
          en: 'With five simultaneously inserting spindles, the Express S5 achieves throughput approaching fully automatic machines — at significantly lower investment. Ideal for carcass production with limited variant diversity.',
          cz: 'S pěti paralelně vsazujícími vřeteny dosahuje Express S5 průchodnosti blížící se plně automatickým strojům — při výrazně nižší investici. Ideální pro výrobu korpusu s omezenou variabilitou.',
          hu: 'Az öt párhuzamosan dolgozó orsóval az Express S5 olyan áteresztőképességet ér el, amely megközelíti a teljesen automatikus gépekét — lényegesen alacsonyabb beruházás mellett. Ideális korlátozott variánsválasztékú korpuszgyártáshoz.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Express S1–S5 unterscheiden sich in der Spindelzahl: S1 für geringen Durchsatz, S5 für höchsten. Wählen Sie die Spindelzahl nach Ihrem Tagesausstoß. Für variantenreiche Produktion ist ein CNC-Modell die bessere Wahl.',
      en: 'The Express S1–S5 differ in spindle count: S1 for low throughput, S5 for highest. Choose the spindle count based on your daily output. For variant-rich production, a CNC model is the better choice.',
      cz: 'Express S1–S5 se liší počtem vřeten: S1 pro nízký průtok, S5 pro nejvyšší. Zvolte počet vřeten podle denního výstupu. Pro variantně bohatou výrobu je lepší volbou CNC model.',
      hu: 'Az Express S1–S5 orsószámban különbözik: S1 alacsony áteresztőképességhez, S5 a legmagasabbhoz. Válassza ki az orsószámot napi kibocsátása szerint. Változatos gyártáshoz a CNC-modell a jobb választás.',
    },
    faq: [
      {
        question: { de: 'Welche Dübelabstände sind möglich?', en: 'What dowel spacings are possible?', cz: 'Jaké rozteče kolíků jsou možné?', hu: 'Milyen csaptávolságok lehetségesek?' },
        answer: {
          de: 'Die Express S5 arbeitet mit standardisierten Lochabständen (typisch 32 mm Raster). Sonderabstände erfordern mechanische Umrüstung.',
          en: 'The Express S5 works with standardised hole spacings (typically 32 mm grid). Special spacings require mechanical changeover.',
          cz: 'Express S5 pracuje se standardizovanými roztečemi otvorů (obvykle 32 mm rastr). Speciální rozteče vyžadují mechanické přestavení.',
          hu: 'Az Express S5 szabványosított lyuktávolságokkal dolgozik (jellemzően 32 mm-es raszter). Különleges távolságok mechanikus átállást igényelnek.',
        },
      },
      {
        question: { de: 'Benötigt die Maschine einen Bediener?', en: 'Does the machine need an operator?', cz: 'Potřebuje stroj obsluhu?', hu: 'Szükséges a gépnek kezelő?' },
        answer: {
          de: 'Ja — die Express ist halbautomatisch und benötigt einen Bediener zur Werkstückpositionierung. Der Bediener kann parallel andere Aufgaben übernehmen.',
          en: 'Yes — the Express is semi-automatic and needs an operator for workpiece positioning. The operator can handle other tasks in parallel.',
          cz: 'Ano — Express je poloautomatický a potřebuje obsluhu k polohování obrobku. Obsluha může paralelně zvládat i jiné úkoly.',
          hu: 'Igen — az Express félautomatikus, és a munkadarab pozicionálásához kezelőre van szüksége. A kezelő párhuzamosan más feladatokat is elláthat.',
        },
      },
      {
        question: { de: 'Welche Dübelgrößen werden verarbeitet?', en: 'What dowel sizes are processed?', cz: 'Jaké velikosti kolíků se zpracovávají?', hu: 'Milyen csapméretek dolgozhatók fel?' },
        answer: {
          de: '6 mm, 8 mm und 10 mm Standard — weitere Größen auf Anfrage.',
          en: '6 mm, 8 mm and 10 mm standard — other sizes on request.',
          cz: '6 mm, 8 mm a 10 mm standard — další velikosti na vyžádání.',
          hu: '6 mm, 8 mm és 10 mm szabvány — további méretek kérésre.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  CARCASS — concept-primus                                            */
  /* ------------------------------------------------------------------ */
  'concept-primus': {
    longDescription: {
      de: `Die Gannomat Concept Primus ist eine Korpuspresse für die industrielle Verklebung und Stabilisierung von Korpussen während der Dübeltrocknung. Nach dem Bohren und Beleimen müssen Korpussteile unter Druck fixiert werden, damit der Kleber aushärtet und eine formstabile Einheit entsteht. Die Concept Primus erledigt diesen Schritt vollautomatisch: Der Korpus wird eingefahren, unter kontrolliertem Druck geklemmt und nach definierter Zeit wieder freigegeben. Das Ergebnis: geometrisch exakte Korpussen ohne manuelle Nacharbeit. Asamer liefert die Concept-Baureihe an Möbelhersteller in CZ, SK und HU inklusive Integration in bestehende Fertigungslinien.`,
      en: `The Gannomat Concept Primus is a carcass press for industrial bonding and stabilisation of carcasses during dowel drying. After drilling and gluing, carcass parts must be fixed under pressure so the glue cures and a dimensionally stable unit is formed. The Concept Primus handles this step fully automatically: the carcass is fed in, clamped under controlled pressure and released after a defined time. The result: geometrically exact carcasses without manual rework. Asamer supplies the Concept series to furniture manufacturers in CZ, SK and HU including integration into existing production lines.`,
      cz: `Gannomat Concept Primus je korpusový lis pro průmyslové lepení a stabilizaci korpusu během schnutí kolíků. Po vrtání a lepení musí být korpusové díly fixovány pod tlakem, aby lepidlo vytvrdilo a vznikla tvarově stabilní jednotka. Concept Primus provádí tento krok plně automaticky: korpus se zavede, sevře se pod kontrolovaným tlakem a po definovaném čase se uvolní. Výsledek: geometricky přesné korpusy bez ruční dodělávky. Asamer dodává řadu Concept výrobcům nábytku v CZ, SK a HU včetně integrace do stávajících výrobních linek.`,
      hu: `A Gannomat Concept Primus egy korpuszprés a korpuszok ipari ragasztásához és stabilizálásához a csapszáradás során. Fúrás és ragasztás után a korpuszelemeket nyomás alatt kell rögzíteni, hogy a ragasztó kikeményedjen és alakstabil egység jöjjön létre. A Concept Primus ezt a lépést teljesen automatikusan végzi: a korpusz bekerül, kontrollált nyomás alatt befeszül, majd meghatározott idő után elengedi. Az eredmény: geometriailag pontos korpuszok kézi utómunka nélkül. Az Asamer a Concept sorozatot CZ, SK és HU bútorgyártóinak szállítja, a meglévő gyártósorokba való integrációval együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für durchgängige Korpusfertigungslinie', en: 'For continuous carcass production line', cz: 'Pro průběžnou linku výroby korpusu', hu: 'Folyamatos korpuszgyártó sorhoz' },
        body: {
          de: 'Die Concept Primus bildet zusammen mit Selekta (Dübelsetzen), Transport und Verpackung eine durchgängige Fertigungslinie. In dieser Linie wandert der Korpus automatisch von Station zu Station — bei Taktzeiten, die sich an industriellen Ausstoßanforderungen orientieren.',
          en: 'The Concept Primus together with Selekta (dowel setting), transport and packaging forms a continuous production line. In this line, the carcass travels automatically from station to station — at cycle times oriented to industrial output requirements.',
          cz: 'Concept Primus tvoří spolu se Selekta (vsazování kolíků), dopravou a balením průběžnou výrobní linku. V této lince putuje korpus automaticky ze stanice na stanici — při dobách taktu orientovaných na průmyslové výstupní požadavky.',
          hu: 'A Concept Primus a Selektával (csapozás), szállítással és csomagolással együtt folyamatos gyártósort alkot. Ebben a sorban a korpusz automatikusan halad állomásról állomásra — az ipari kibocsátási követelményekhez igazodó ciklusidőkkel.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Concept-Baureihe hat mehrere Varianten: Concept Easy als Einstieg, Concept Eco für mittleren Durchsatz, Concept Primus für industriellen Dauerbetrieb, Korpus-Montagelinie als Komplettsystem. Wählen Sie nach Tagesausstoß und Varianz.',
      en: 'The Concept series has several variants: Concept Easy as entry, Concept Eco for medium throughput, Concept Primus for industrial continuous operation, Korpus-Montagelinie as complete system. Choose based on daily output and variance.',
      cz: 'Řada Concept má několik variant: Concept Easy jako vstup, Concept Eco pro střední průtok, Concept Primus pro průmyslový nepřetržitý provoz, Korpus-Montagelinie jako kompletní systém. Vyberte podle denního výstupu a variability.',
      hu: 'A Concept sorozatnak több változata van: Concept Easy belépő szintű, Concept Eco közepes áteresztőképességhez, Concept Primus ipari folyamatos üzemhez, Korpus-Montagelinie komplett rendszerként. Válasszon napi kibocsátás és variancia szerint.',
    },
    faq: [
      {
        question: { de: 'Welche Korpusgrößen werden gepresst?', en: 'What carcass sizes are pressed?', cz: 'Jaké velikosti korpusu se lisují?', hu: 'Milyen korpuszméreteket présel?' },
        answer: {
          de: 'Standardkorpusse von ca. 300 × 300 × 300 mm bis etwa 1.200 × 800 × 600 mm. Sondergrößen auf Anfrage.',
          en: 'Standard carcasses from approx. 300 × 300 × 300 mm up to about 1,200 × 800 × 600 mm. Special sizes on request.',
          cz: 'Standardní korpusy od cca 300 × 300 × 300 mm do cca 1.200 × 800 × 600 mm. Speciální rozměry na vyžádání.',
          hu: 'Szabványos korpuszok kb. 300 × 300 × 300 mm-től 1200 × 800 × 600 mm-ig. Egyedi méretek kérésre.',
        },
      },
      {
        question: { de: 'Wie lange ist der Pressvorgang?', en: 'How long is the pressing cycle?', cz: 'Jak dlouhý je lisovací cyklus?', hu: 'Mennyi ideig tart a présciklus?' },
        answer: {
          de: 'Je nach Klebstoff 30–90 Sekunden. Die exakte Zeit ist in der Steuerung hinterlegt.',
          en: 'Depending on glue, 30–90 seconds. The exact time is stored in the control system.',
          cz: 'Podle lepidla 30–90 sekund. Přesný čas je uložen v řídicím systému.',
          hu: 'Ragasztótól függően 30–90 másodperc. A pontos idő a vezérlésben van eltárolva.',
        },
      },
      {
        question: { de: 'Kann die Presse in eine Linie integriert werden?', en: 'Can the press be integrated into a line?', cz: 'Lze lis integrovat do linky?', hu: 'Integrálható a prés gyártósorba?' },
        answer: {
          de: 'Ja — Ein- und Auslaufförderer sowie ERP-Anbindung sind Standardoptionen. Asamer plant die Linie individuell.',
          en: 'Yes — infeed and outfeed conveyors as well as ERP connection are standard options. Asamer plans the line individually.',
          cz: 'Ano — vstupní a výstupní dopravníky i napojení na ERP jsou standardní volby. Asamer plánuje linku individuálně.',
          hu: 'Igen — a be- és kivezető szállítószalagok, valamint az ERP-kapcsolat szabványos opciók. Az Asamer egyedileg tervezi meg a sort.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  MACHINING — protec-profit                                           */
  /* ------------------------------------------------------------------ */
  'protec-profit': {
    longDescription: {
      de: `Die Gannomat ProTec Profit ist ein CNC-Bearbeitungszentrum für Möbelteile, das Fräsen, Bohren und Dübeln in einer einzigen Aufspannung erledigt. Das Werkstück wird einmalig fixiert — alle Bearbeitungsschritte erfolgen in einem Durchlauf. Das spart Rüstzeiten, minimiert Positionierfehler zwischen einzelnen Bearbeitungen und steigert die Gesamtqualität. Die ProTec Profit richtet sich an Möbelhersteller, die komplexe Werkstücke (mit Ausschnitten, Sackloch-Beschlägen, gefrästen Profilen) in einer einzigen Maschine fertigen wollen. Asamer integriert die ProTec Profit in Produktionslinien für CZ, SK und HU — von der Programmierschulung bis zur ERP-Anbindung.`,
      en: `The Gannomat ProTec Profit is a CNC machining centre for furniture parts that performs milling, drilling and doweling in a single setup. The workpiece is fixed once — all processing steps take place in one pass. This saves setup time, minimises positioning errors between individual operations and increases overall quality. The ProTec Profit is aimed at furniture manufacturers who want to produce complex workpieces (with cutouts, blind-hole fittings, milled profiles) in a single machine. Asamer integrates the ProTec Profit into production lines for CZ, SK and HU — from programming training to ERP connection.`,
      cz: `Gannomat ProTec Profit je CNC obráběcí centrum pro díly nábytku, které provádí frézování, vrtání a kolíkování v jediném upnutí. Obrobek se upne jednou — všechny obráběcí kroky probíhají v jednom průchodu. To šetří seřizovací časy, minimalizuje chyby polohování mezi jednotlivými operacemi a zvyšuje celkovou kvalitu. ProTec Profit je určen výrobcům nábytku, kteří chtějí vyrábět složité obrobky (s výřezy, slepými otvory pro kování, frézovanými profily) v jednom stroji. Asamer integruje ProTec Profit do výrobních linek pro CZ, SK a HU — od programovacího školení po napojení na ERP.`,
      hu: `A Gannomat ProTec Profit egy CNC megmunkáló központ bútorelemekhez, amely egyetlen befogásban végzi a marást, fúrást és csapozást. A munkadarabot egyszer rögzítik — minden megmunkálási lépés egy menetben zajlik. Ez beállítási időt takarít meg, minimalizálja az egyes műveletek közötti pozicionálási hibákat és növeli az összminőséget. A ProTec Profit olyan bútorgyártóknak szól, akik összetett munkadarabokat (kivágásokkal, zsákfurat-szerelvényekkel, mart profilokkal) szeretnének egyetlen gépben előállítani. Az Asamer a ProTec Profit-ot gyártósorokba integrálja CZ, SK és HU területén — a programozási képzéstől az ERP-kapcsolatig.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für komplexe Werkstücke mit Fräs- und Bohrbearbeitung', en: 'For complex workpieces with milling and drilling', cz: 'Pro složité obrobky s frézováním a vrtáním', hu: 'Összetett munkadarabokhoz marással és fúrással' },
        body: {
          de: 'Bei Werkstücken mit Kombination aus Ausschnitt, Bohrmuster und Beschlagsetzung vermeidet die ProTec Profit mehrfaches Umsetzen. Das Ergebnis ist höhere Maßgenauigkeit und geringeres Fehlerrisiko — bei gleichzeitig kürzerer Durchlaufzeit.',
          en: 'For workpieces combining cutouts, drilling patterns and fitting insertion, the ProTec Profit avoids multiple repositioning. The result is higher dimensional accuracy and lower error risk — with simultaneously shorter throughput time.',
          cz: 'U obrobků kombinujících výřezy, vrtací vzor a vsazování kování se u ProTec Profit vyhnete vícenásobnému přesazování. Výsledkem je vyšší rozměrová přesnost a nižší riziko chyb — při zároveň kratší průběžné době.',
          hu: 'Olyan munkadaraboknál, amelyek kivágások, fúrásminták és szerelvénybeültetés kombinációját tartalmazzák, a ProTec Profit elkerüli a többszöri átfogást. Az eredmény nagyobb méretpontosság és alacsonyabb hibakockázat — egyidejűleg rövidebb átfutási idővel.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die ProTec Profit ist wirtschaftlich ab mittleren Stückzahlen mit komplexen Bearbeitungen. Für reine Bohr- und Dübelbearbeitung ist die Selekta wirtschaftlicher; reine Fräsarbeiten erledigen Nesting-CNCs günstiger.',
      en: 'The ProTec Profit is economical from medium quantities with complex processing. For pure drilling and dowel work, the Selekta is more economical; pure milling is done cheaper on nesting CNCs.',
      cz: 'ProTec Profit je ekonomický od středních počtů kusů se složitým zpracováním. Pro čisté vrtání a kolíkování je ekonomičtější Selekta; čisté frézování levněji zvládají nesting CNC.',
      hu: 'A ProTec Profit közepes darabszámtól gazdaságos összetett megmunkálásokhoz. Tiszta fúráshoz és csapozáshoz a Selekta gazdaságosabb; tiszta marási munkákat a nesting CNC-k olcsóbban végeznek.',
    },
    faq: [
      {
        question: { de: 'Welche Fräswerkzeuge werden unterstützt?', en: 'What milling tools are supported?', cz: 'Jaké frézovací nástroje jsou podporovány?', hu: 'Milyen maró szerszámok támogatottak?' },
        answer: {
          de: 'HSK-Werkzeugaufnahmen für alle gängigen Fräser. Automatischer Werkzeugwechsel ist Option.',
          en: 'HSK tool holders for all common mills. Automatic tool change is optional.',
          cz: 'Nástrojové upínání HSK pro všechny běžné frézy. Automatická výměna nástrojů je volba.',
          hu: 'HSK szerszámbefogók minden szokásos maróhoz. Az automatikus szerszámcsere opcionális.',
        },
      },
      {
        question: { de: 'CAD-Import möglich?', en: 'CAD import possible?', cz: 'Lze importovat CAD?', hu: 'Lehetséges CAD-import?' },
        answer: {
          de: 'Ja — Standard DXF/DWG/STEP-Import. Postprozessor wird auf Ihre Konstruktionssoftware abgestimmt.',
          en: 'Yes — standard DXF/DWG/STEP import. Postprocessor is matched to your design software.',
          cz: 'Ano — standardní import DXF/DWG/STEP. Postprocesor se přizpůsobí vašemu konstrukčnímu softwaru.',
          hu: 'Igen — szabványos DXF/DWG/STEP import. A posztprocesszor a tervezőszoftveréhez igazodik.',
        },
      },
      {
        question: { de: 'Ist die Maschine staubfreundlich?', en: 'Is the machine dust-friendly?', cz: 'Je stroj prachově přívětivý?', hu: 'Porbarát a gép?' },
        answer: {
          de: 'Absaugung ist Standard — kompatibel mit allen gängigen Absauganlagen.',
          en: 'Extraction is standard — compatible with all common extraction systems.',
          cz: 'Odsávání je standard — kompatibilní se všemi běžnými odsávacími zařízeními.',
          hu: 'Az elszívás szabvány — kompatibilis minden szokásos elszívórendszerrel.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  BORING — db-21-27-35                                                */
  /* ------------------------------------------------------------------ */
  'db-21-27-35': {
    longDescription: {
      de: `Die Gannomat DB 21-27-35 ist eine klassische Kolkovací-Bohrmaschine (Dübelbohrmaschine) für Korpussenseiten, Rückwände und andere Möbelteile mit standardisierten Lochmustern. Die Bezeichnung 21-27-35 verweist auf die Anzahl der Spindeln in den drei Modellvarianten. Je mehr Spindeln, desto mehr Bohrungen werden in einem Hub gesetzt — entsprechend schneller die Taktzeit. Die DB-Reihe wird von vielen Tischlereien und Möbelbetrieben seit Jahrzehnten eingesetzt wegen ihrer hohen Zuverlässigkeit, guter Wartbarkeit und einfachen Bedienung. Asamer liefert die DB-Baureihe für CZ, SK und HU inklusive Einrichtung auf Ihre Lochabstände und Schulung der Bediener.`,
      en: `The Gannomat DB 21-27-35 is a classic dowel drilling machine for carcass sides, back panels and other furniture parts with standardised hole patterns. The designation 21-27-35 refers to spindle count in the three model variants. The more spindles, the more holes are drilled in one stroke — and correspondingly faster the cycle time. The DB series has been used by many joinery shops and furniture operations for decades due to its high reliability, good serviceability and simple operation. Asamer supplies the DB series for CZ, SK and HU including setup to your hole spacings and operator training.`,
      cz: `Gannomat DB 21-27-35 je klasický kolkovací vrtací stroj pro boky korpusu, záda a další díly nábytku se standardizovanými vzory otvorů. Označení 21-27-35 odkazuje na počet vřeten ve třech variantách modelu. Čím více vřeten, tím více otvorů se vrtá v jednom zdvihu — a tím rychlejší je doba taktu. Řada DB je mnoha truhlárnami a nábytkářskými provozy používána desetiletí díky své vysoké spolehlivosti, dobré servisovatelnosti a jednoduché obsluze. Asamer dodává řadu DB pro CZ, SK a HU včetně seřízení na vaše rozteče otvorů a školení obsluhy.`,
      hu: `A Gannomat DB 21-27-35 egy klasszikus csapfúró gép korpusz-oldalakhoz, hátfalakhoz és más, szabványos lyukmintás bútorelemekhez. A 21-27-35 jelölés a három modellváltozat orsószámára utal. Minél több orsó, annál több furat készül egy löketben — ennek megfelelően rövidebb a ciklusidő. A DB sorozatot sok asztalosüzem és bútorgyártó évtizedek óta használja a magas megbízhatóság, a jó szervizelhetőség és az egyszerű kezelés miatt. Az Asamer a DB sorozatot CZ, SK és HU területére szállítja, az ön lyuktávolságaira való beállítással és a kezelők képzésével együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Standard-Korpusfertigung', en: 'For standard carcass production', cz: 'Pro standardní výrobu korpusu', hu: 'Szabványos korpuszgyártáshoz' },
        body: {
          de: 'In der Standardfertigung von Küchen- oder Büromöbeln sind 32-mm-Lochraster der Industriestandard. Die DB-Baureihe ist auf dieses Raster optimiert und liefert in kurzer Taktzeit die benötigten Bohrungen. Bei größeren Stückzahlen ist der Schritt zur WA-Variante (mit Werkstückzuführung) sinnvoll.',
          en: 'In standard production of kitchen or office furniture, 32 mm hole grid is the industry standard. The DB series is optimised for this grid and delivers the required drillings in short cycle time. For larger quantities, the step to the WA variant (with workpiece feeding) makes sense.',
          cz: 'Ve standardní výrobě kuchyní nebo kancelářského nábytku je 32mm rastr otvorů průmyslovým standardem. Řada DB je optimalizována na tento rastr a dodává potřebné otvory v krátké době taktu. Při větších počtech kusů má smysl krok k variantě WA (s podáváním obrobku).',
          hu: 'A szabványos konyha- vagy irodabútor-gyártásban a 32 mm-es lyukraszter az ipari szabvány. A DB sorozat erre a raszterre optimalizált, és rövid ciklusidőben szállítja a szükséges furatokat. Nagyobb darabszámnál a WA-változatra (munkadarab-adagolással) való váltás ésszerű.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die DB 21-27-35 ist die richtige Wahl für mittlere Produktion mit Standard-Lochmustern. Für höheren Durchsatz lohnt sich die WA-Variante mit Werkstückautomatik; bei hoher Variantenzahl ein CNC-Modell.',
      en: 'The DB 21-27-35 is the right choice for medium production with standard hole patterns. For higher throughput, the WA variant with automatic workpiece feeding is worthwhile; for high variant counts, a CNC model.',
      cz: 'DB 21-27-35 je správnou volbou pro střední výrobu se standardními vzory otvorů. Pro vyšší průtok se vyplatí varianta WA s automatickým podáváním obrobku; při vysokém počtu variant CNC model.',
      hu: 'A DB 21-27-35 a megfelelő választás közepes gyártáshoz szabványos lyukmintákkal. Nagyobb áteresztőképességhez a WA-változat az automatikus munkadarab-adagolással kifizetődő; nagy variánsszám esetén CNC-modell.',
    },
    faq: [
      {
        question: { de: 'Welche Lochabstände sind möglich?', en: 'What hole spacings are possible?', cz: 'Jaké rozteče otvorů jsou možné?', hu: 'Milyen lyuktávolságok lehetségesek?' },
        answer: {
          de: '32-mm-Raster Standard, Sonderabstände nach Umrüstung.',
          en: '32 mm grid standard, special spacings after changeover.',
          cz: '32mm rastr standard, speciální rozteče po přestavení.',
          hu: '32 mm-es raszter szabvány, különleges távolságok átállás után.',
        },
      },
      {
        question: { de: 'Bohrtiefen verstellbar?', en: 'Drilling depths adjustable?', cz: 'Lze nastavit hloubku vrtání?', hu: 'Állítható a fúrásmélység?' },
        answer: {
          de: 'Ja — mechanische Tiefenanschläge pro Spindel. Typisch 10–40 mm.',
          en: 'Yes — mechanical depth stops per spindle. Typically 10–40 mm.',
          cz: 'Ano — mechanické hloubkové dorazy na vřeteno. Obvykle 10–40 mm.',
          hu: 'Igen — mechanikus mélységütközők orsónként. Jellemzően 10–40 mm.',
        },
      },
      {
        question: { de: 'Einzelspindel-Zuschaltung möglich?', en: 'Individual spindle switching possible?', cz: 'Lze zapínat jednotlivá vřetena?', hu: 'Lehetséges egyedi orsókapcsolás?' },
        answer: {
          de: 'Ja — nicht benötigte Spindeln lassen sich einzeln deaktivieren.',
          en: 'Yes — unneeded spindles can be individually deactivated.',
          cz: 'Ano — nepotřebná vřetena lze jednotlivě deaktivovat.',
          hu: 'Igen — a nem szükséges orsók egyenként kikapcsolhatók.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  ROWBORING — vantage                                                 */
  /* ------------------------------------------------------------------ */
  'vantage': {
    longDescription: {
      de: `Die Gannomat Vantage 76-152 ist eine Reihenbohrmaschine mit 76 bis 152 Spindeln für die Hochleistungs-Serienbohrung in der industriellen Möbelproduktion. Mit dieser Spindelzahl werden ganze Bohrbilder — etwa die gesamte Seitenwand eines Kleiderschranks — in einem einzigen Hub gebohrt. Das ist der schnellste Weg, Standardkorpusteile mit 32-mm-Lochraster zu bearbeiten. Die Vantage eignet sich für Hersteller mit hohem Volumenbedarf und geringer Variantenvielfalt; Losgröße-1-Produktion ist nicht ihr Einsatzgebiet. Asamer liefert die Vantage als autorisierter Gannomat-Händler für CZ, SK und HU inklusive Einrichtung und Wartungsvertrag.`,
      en: `The Gannomat Vantage 76-152 is a row drilling machine with 76 to 152 spindles for high-performance series drilling in industrial furniture production. With this spindle count, entire drilling patterns — such as the entire side wall of a wardrobe — are drilled in a single stroke. This is the fastest way to process standard carcass parts with 32 mm hole grid. The Vantage is suitable for manufacturers with high volume demand and low variant diversity; batch-size-1 production is not its field. Asamer supplies the Vantage as authorized Gannomat dealer for CZ, SK and HU including setup and maintenance contract.`,
      cz: `Gannomat Vantage 76-152 je řadový vrtací stroj se 76 až 152 vřeteny pro vysoce výkonné sériové vrtání v průmyslové výrobě nábytku. S tímto počtem vřeten se celé vrtací vzory — například celá bočnice skříně — vrtají v jediném zdvihu. Je to nejrychlejší způsob zpracování standardních korpusových dílů s 32mm rastrem otvorů. Vantage je vhodný pro výrobce s vysokou poptávkou po objemu a nízkou variabilitou; výroba dávky 1 není jeho oborem. Asamer dodává Vantage jako autorizovaný prodejce Gannomat pro CZ, SK a HU včetně seřízení a servisní smlouvy.`,
      hu: `A Gannomat Vantage 76-152 egy soros fúrógép 76-tól 152 orsóig, az ipari bútorgyártás nagy teljesítményű sorozatfúrásához. Ezzel az orsószámmal teljes fúrásminták — például egy ruhásszekrény teljes oldalfala — fúródnak egyetlen löketben. Ez a leggyorsabb mód szabványos korpuszelemek feldolgozására 32 mm-es lyukraszterrel. A Vantage olyan gyártóknak alkalmas, akiknek magas a volumenigényük és alacsony a variánsválasztékuk; az 1-es tételszámú gyártás nem az ő területük. Az Asamer hivatalos Gannomat-forgalmazóként szállítja a Vantage-t CZ, SK és HU területére, beállítással és karbantartási szerződéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für industrielle Großserienfertigung', en: 'For industrial large-series production', cz: 'Pro průmyslovou velkosériovou výrobu', hu: 'Ipari nagysorozatú gyártáshoz' },
        body: {
          de: 'In der Großserienfertigung von Standardmöbeln (Kleiderschränke, Regale, Küchenschränke) ist Taktzeit der entscheidende Faktor. Die Vantage reduziert den Bohrvorgang auf den eigentlichen Hub ohne Rüstzeiten — in Sekunden statt Minuten pro Werkstück.',
          en: 'In large-series production of standard furniture (wardrobes, shelving, kitchen cabinets), cycle time is the decisive factor. The Vantage reduces the drilling operation to the actual stroke without setup time — in seconds instead of minutes per workpiece.',
          cz: 'Ve velkosériové výrobě standardního nábytku (skříně, police, kuchyňské skříně) je doba taktu rozhodujícím faktorem. Vantage redukuje vrtací operaci na samotný zdvih bez přestavovacích časů — za sekundy místo minut na obrobek.',
          hu: 'Szabványos bútorok (ruhásszekrények, polcok, konyhabútorok) nagysorozatú gyártásában a ciklusidő a döntő tényező. A Vantage a fúrási műveletet a tényleges löketre csökkenti beállítási idő nélkül — munkadarabonként másodperceket percek helyett.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Vantage lohnt sich erst ab sehr hohen Tagesstückzahlen (500+ Korpusse). Für kleinere Mengen oder variantenreichere Produktion sind DB oder CNC-Modelle wirtschaftlicher.',
      en: 'The Vantage pays off only at very high daily quantities (500+ carcasses). For smaller volumes or more variant-rich production, DB or CNC models are more economical.',
      cz: 'Vantage se vyplatí až od velmi vysokých denních počtů (500+ korpusů). Pro menší množství nebo variantně bohatší výrobu jsou ekonomičtější DB nebo CNC modely.',
      hu: 'A Vantage csak nagyon magas napi darabszámoknál (500+ korpusz) éri meg. Kisebb mennyiségekhez vagy változatosabb gyártáshoz a DB vagy a CNC modellek gazdaságosabbak.',
    },
    faq: [
      {
        question: { de: 'Wie lange dauert die Umrüstung?', en: 'How long does changeover take?', cz: 'Jak dlouho trvá přestavení?', hu: 'Mennyi ideig tart az átállás?' },
        answer: {
          de: 'Mechanische Umrüstung auf andere Lochmuster 1–4 Stunden. Daher ist die Vantage nur bei stabilen Produktionsprogrammen wirtschaftlich.',
          en: 'Mechanical changeover to different hole patterns 1–4 hours. Therefore the Vantage is only economical with stable production programs.',
          cz: 'Mechanické přestavení na jiné vzory otvorů 1–4 hodiny. Proto je Vantage ekonomický jen při stabilních výrobních programech.',
          hu: 'Mechanikus átállás más lyukmintákra 1–4 óra. Ezért a Vantage csak stabil gyártási programoknál gazdaságos.',
        },
      },
      {
        question: { de: 'Wie viele Spindeln sind sinnvoll?', en: 'How many spindles make sense?', cz: 'Kolik vřeten má smysl?', hu: 'Hány orsónak van értelme?' },
        answer: {
          de: '76 für mittlere Werkstücke, 152 für maximale Flexibilität bei verschiedenen Längen.',
          en: '76 for medium workpieces, 152 for maximum flexibility across different lengths.',
          cz: '76 pro střední obrobky, 152 pro maximální flexibilitu u různých délek.',
          hu: '76 közepes munkadarabokhoz, 152 maximális rugalmasságért különböző hosszúságoknál.',
        },
      },
      {
        question: { de: 'Werkstückzuführung automatisch?', en: 'Automatic workpiece feeding?', cz: 'Automatické podávání obrobku?', hu: 'Automatikus munkadarab-adagolás?' },
        answer: {
          de: 'Optional — Kombination mit Förderer und Rückführsystem für vollautomatischen Betrieb möglich.',
          en: 'Optional — combination with conveyor and return system for fully automatic operation possible.',
          cz: 'Volitelně — kombinace s dopravníkem a návratovým systémem pro plně automatický provoz je možná.',
          hu: 'Opcionális — szállítószalaggal és visszavezető rendszerrel történő kombináció teljesen automatikus üzemhez lehetséges.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  CORNERHINGE — expert                                                */
  /* ------------------------------------------------------------------ */
  'expert': {
    longDescription: {
      de: `Die Gannomat Expert ist eine Scharnierbohrmaschine für die professionelle Bearbeitung von Möbelfronten und Türen. Sie setzt präzise Topfbohrungen für Scharniere aller gängigen Hersteller (Blum, Hettich, Grass) inklusive Bolzenlöchern in einem Arbeitsgang. Für Küchenhersteller, Türenfertigungen und Möbeltischlereien ist die Expert das bewährte Standardwerkzeug — schneller und präziser als manuelles Anzeichnen und Einzelbohren. Die Einrichtung auf verschiedene Scharniertypen ist in Minuten erledigt. Asamer liefert die Expert für CZ, SK und HU inklusive Beratung zu Scharnierauswahl und Einrichtung auf Ihre Standardtypen.`,
      en: `The Gannomat Expert is a hinge drilling machine for professional processing of furniture fronts and doors. It sets precise hinge cup holes for hinges of all common manufacturers (Blum, Hettich, Grass) including bolt holes in one work pass. For kitchen manufacturers, door production and furniture joinery, the Expert is the proven standard tool — faster and more precise than manual marking and individual drilling. Setup to different hinge types is done in minutes. Asamer supplies the Expert for CZ, SK and HU including consultation on hinge selection and setup to your standard types.`,
      cz: `Gannomat Expert je vrtací stroj pro závěsy pro profesionální zpracování nábytkových front a dveří. Vytváří přesné otvory pro miskové závěsy všech běžných výrobců (Blum, Hettich, Grass) včetně otvorů pro šrouby v jednom pracovním průchodu. Pro výrobce kuchyní, výrobu dveří a nábytkářská truhlářství je Expert osvědčeným standardním nástrojem — rychlejším a přesnějším než ruční označování a jednotlivé vrtání. Seřízení na různé typy závěsů se provádí za několik minut. Asamer dodává Expert pro CZ, SK a HU včetně poradenství při výběru závěsů a seřízení na vaše standardní typy.`,
      hu: `A Gannomat Expert egy pántfúró gép bútorfrontok és ajtók professzionális megmunkálásához. Precíz tányérfurat-mintákat készít minden szokásos gyártó (Blum, Hettich, Grass) pántjaihoz, csavarlyukakkal együtt egy munkamenetben. Konyhagyártóknak, ajtógyártásnak és bútorasztalosoknak az Expert a bevált szabvány szerszám — gyorsabb és pontosabb, mint a kézi jelölés és egyenkénti fúrás. A különböző pánttípusokra történő beállítás percek alatt elvégezhető. Az Asamer az Expert gépet CZ, SK és HU területére szállítja, a pántválasztási tanácsadással és az ön szabvány típusaira történő beállítással együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Küchenfertigung', en: 'For kitchen production', cz: 'Pro výrobu kuchyní', hu: 'Konyhagyártáshoz' },
        body: {
          de: 'In der Küchenfertigung kommen viele Türen mit Topfbandscharnieren vor. Die Expert bohrt alle drei Topflöcher (Topf plus zwei Bolzen) gleichzeitig in exakter Position — die Scharniermontage danach ist reine Sekundenarbeit.',
          en: 'In kitchen production, many doors use hinge cup hinges. The Expert drills all three cup holes (cup plus two bolts) simultaneously in exact position — subsequent hinge installation is a matter of seconds.',
          cz: 'Ve výrobě kuchyní se vyskytuje mnoho dveří s miskovými závěsy. Expert vrtá všechny tři otvory (misku plus dva šrouby) současně v přesné pozici — následná montáž závěsu je otázkou sekund.',
          hu: 'A konyhagyártásban sok ajtó tányéros pántokat használ. Az Expert mindhárom tányérlyukat (tányért plusz két csavart) egyszerre, pontos pozícióban fúrja — a pánt utólagos felszerelése másodpercek kérdése.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Expert ist die richtige Wahl für Betriebe mit regelmäßiger Türen- oder Frontenfertigung. Für sehr variantenreiche oder Sondermaß-Produktion ist die Twin (mit zwei Arbeitsstationen) wirtschaftlicher.',
      en: 'The Expert is the right choice for operations with regular door or front production. For very variant-rich or special-dimension production, the Twin (with two workstations) is more economical.',
      cz: 'Expert je správnou volbou pro provozy s pravidelnou výrobou dveří nebo front. Pro velmi variabilní nebo zakázkovou výrobu je ekonomičtější Twin (se dvěma pracovními stanicemi).',
      hu: 'Az Expert a megfelelő választás rendszeres ajtó- vagy frontgyártású üzemeknek. Nagyon változatos vagy egyedi méretű gyártáshoz a Twin (két munkaállomással) gazdaságosabb.',
    },
    faq: [
      {
        question: { de: 'Welche Scharniertypen werden unterstützt?', en: 'Which hinge types are supported?', cz: 'Jaké typy závěsů jsou podporovány?', hu: 'Milyen pánttípusok támogatottak?' },
        answer: {
          de: 'Alle gängigen: Blum Clip top, Hettich Sensys, Grass Nexis, Salice etc.',
          en: 'All common: Blum Clip top, Hettich Sensys, Grass Nexis, Salice etc.',
          cz: 'Všechny běžné: Blum Clip top, Hettich Sensys, Grass Nexis, Salice atd.',
          hu: 'Minden szokásos: Blum Clip top, Hettich Sensys, Grass Nexis, Salice stb.',
        },
      },
      {
        question: { de: 'Topfgrößen?', en: 'Cup sizes?', cz: 'Velikosti misek?', hu: 'Tányérméretek?' },
        answer: {
          de: '26 mm und 35 mm Standard.',
          en: '26 mm and 35 mm standard.',
          cz: '26 mm a 35 mm standard.',
          hu: '26 mm és 35 mm szabvány.',
        },
      },
      {
        question: { de: 'Ist die Maschine CNC-gesteuert?', en: 'Is the machine CNC-controlled?', cz: 'Je stroj řízen CNC?', hu: 'CNC-vezérelt a gép?' },
        answer: {
          de: 'Die Expert ist manuell bedient; für CNC-Steuerung gibt es spezielle Modelle.',
          en: 'The Expert is manually operated; for CNC control, there are special models.',
          cz: 'Expert je ovládán ručně; pro CNC řízení existují speciální modely.',
          hu: 'Az Expert kézi kezelésű; CNC-vezérléshez speciális modellek állnak rendelkezésre.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  GLUING — leimfix                                                    */
  /* ------------------------------------------------------------------ */
  'leimfix': {
    longDescription: {
      de: `Die Gannomat Leimfix ist ein automatisches Leimsystem für Dübel und Verbinder, das den exakten Leimauftrag vor der Dübelmontage automatisiert. Die Maschine arbeitet mit dosierter Leimabgabe auf den Dübel oder direkt in die Bohrung und sorgt für gleichbleibende Leimmengen unabhängig vom Bediener. Das garantiert zuverlässige Verbindungen und verhindert sowohl Leimmangel als auch Überfluss mit Austrittsrückständen. Asamer liefert die Leimfix inklusive Integration in bestehende Bohranlagen und Schulung zur optimalen Dosiereinstellung — für Tischlereien und Möbelbetriebe in CZ, SK und HU.`,
      en: `The Gannomat Leimfix is an automatic glue system for dowels and connectors that automates precise glue application before dowel installation. The machine works with metered glue delivery onto the dowel or directly into the drilling and ensures consistent glue quantities independent of the operator. This guarantees reliable connections and prevents both glue shortage and excess with residue. Asamer supplies the Leimfix including integration into existing drilling systems and training on optimal metering adjustment — for joinery shops and furniture operations in CZ, SK and HU.`,
      cz: `Gannomat Leimfix je automatický lepicí systém pro kolíky a spojovací prvky, který automatizuje přesné nanášení lepidla před montáží kolíku. Stroj pracuje s dávkovaným přívodem lepidla na kolík nebo přímo do vrtání a zajišťuje konzistentní množství lepidla nezávisle na obsluze. To zaručuje spolehlivé spoje a zabraňuje nedostatku i přebytku lepidla s pozůstatky na výstupu. Asamer dodává Leimfix včetně integrace do stávajících vrtacích zařízení a školení optimálního dávkovacího nastavení — pro truhlárny a nábytkářské provozy v CZ, SK a HU.`,
      hu: `A Gannomat Leimfix egy automatikus ragasztórendszer csapokhoz és összekötőkhöz, amely automatizálja a csapbeszerelés előtti pontos ragasztófelvitelt. A gép adagolt ragasztókiadással dolgozik a csapra vagy közvetlenül a furatba, és egyenletes ragasztómennyiséget biztosít a kezelőtől függetlenül. Ez garantálja a megbízható kötéseket, és megakadályozza mind a ragasztóhiányt, mind a kilépő maradékkal járó túlcsordulást. Az Asamer a Leimfixet a meglévő fúrógépekbe való integrálással és az optimális adagolási beállításra vonatkozó képzéssel együtt szállítja — CZ, SK és HU asztalosüzemei és bútorgyártói számára.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für konsistente Leimfugen', en: 'For consistent glue joints', cz: 'Pro konzistentní lepené spoje', hu: 'Egyenletes ragasztott kötésekhez' },
        body: {
          de: 'Manuelle Leimdosierung führt zu Schwankungen zwischen verschiedenen Bedienern. Die Leimfix eliminiert diesen Faktor — jede Verbindung erhält die exakt gleiche Leimmenge, unabhängig von Tagesverfassung oder Erfahrung des Mitarbeiters.',
          en: 'Manual glue metering leads to fluctuations between different operators. The Leimfix eliminates this factor — every joint receives the exact same glue quantity regardless of daily condition or operator experience.',
          cz: 'Ruční dávkování lepidla vede k výkyvům mezi různými obsluhami. Leimfix tento faktor eliminuje — každý spoj dostává přesně stejné množství lepidla nezávisle na denním stavu nebo zkušenosti pracovníka.',
          hu: 'A kézi ragasztóadagolás ingadozásokhoz vezet a különböző kezelők között. A Leimfix ezt a tényezőt kiküszöböli — minden kötés pontosan ugyanannyi ragasztót kap, függetlenül a napi állapottól vagy a dolgozó tapasztalatától.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Leimfix rentiert sich ab mittleren Dübelmengen pro Tag. Bei sehr kleinen Produktionen ist manuelle Dosierung noch vertretbar; ab einigen tausend Dübeln täglich ist die Automatisierung wirtschaftlich sinnvoll.',
      en: 'The Leimfix pays off from medium dowel quantities per day. For very small production, manual metering is still acceptable; from several thousand dowels daily, automation makes economic sense.',
      cz: 'Leimfix se vyplatí od středních denních množství kolíků. Při velmi malé výrobě je ruční dávkování ještě přijatelné; od několika tisíc kolíků denně má automatizace ekonomický smysl.',
      hu: 'A Leimfix közepes napi csapmennyiségtől éri meg. Nagyon kis gyártásnál a kézi adagolás még elfogadható; naponta több ezer csaptól az automatizálás gazdaságilag értelmes.',
    },
    faq: [
      {
        question: { de: 'Welche Klebstoffe werden verarbeitet?', en: 'What adhesives are processed?', cz: 'Jaká lepidla se zpracovávají?', hu: 'Milyen ragasztók dolgozhatók fel?' },
        answer: {
          de: 'Standard-D3-Weißleim sowie PUR-Klebstoffe. Andere auf Anfrage.',
          en: 'Standard D3 white glue and PUR adhesives. Others on request.',
          cz: 'Standardní D3 bílé lepidlo a PUR lepidla. Ostatní na vyžádání.',
          hu: 'Szabványos D3 fehér ragasztó és PUR ragasztók. Egyéb kérésre.',
        },
      },
      {
        question: { de: 'Dosiermenge einstellbar?', en: 'Is metering adjustable?', cz: 'Lze nastavit dávkování?', hu: 'Állítható az adagolási mennyiség?' },
        answer: {
          de: 'Ja — elektronisch über die Steuerung, auch nach Dübeldurchmesser.',
          en: 'Yes — electronically via the control, also by dowel diameter.',
          cz: 'Ano — elektronicky přes řízení, i podle průměru kolíku.',
          hu: 'Igen — elektronikusan a vezérlésen keresztül, csapátmérő szerint is.',
        },
      },
      {
        question: { de: 'Reinigungsaufwand?', en: 'Cleaning effort?', cz: 'Nároky na čištění?', hu: 'Tisztítási igény?' },
        answer: {
          de: 'Täglich kurze Reinigung der Düse — wenige Minuten. Wöchentlich gründliche Durchspülung.',
          en: 'Daily short cleaning of the nozzle — a few minutes. Weekly thorough flushing.',
          cz: 'Denně krátké čištění trysky — pár minut. Týdně důkladné propláchnutí.',
          hu: 'Naponta a fúvóka rövid tisztítása — néhány perc. Hetente alapos átöblítés.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  FRAME — master-325                                                  */
  /* ------------------------------------------------------------------ */
  'master-325': {
    longDescription: {
      de: `Die Gannomat Master 325 ist eine Rahmenbohrmaschine für Möbelrahmen, Fenster- und Türrahmen mit präziser Bohrung an allen Rahmenseiten. Sie arbeitet mit mehreren Bohrköpfen an verschiedenen Positionen, sodass komplette Rahmenbohrbilder in einem Durchlauf gesetzt werden. Typische Anwendungen: Bohrungen für Rahmenverbinder, Dübelbohrungen an Eckverbindungen oder Beschlagsetzungen an Türrahmen. Die Master 325 ist präzise genug für tragende Rahmenkonstruktionen und wird seit Jahrzehnten in europäischen Möbel- und Türenwerken eingesetzt. Asamer liefert sie für CZ, SK und HU inklusive Einstellung auf Ihre Rahmentypen.`,
      en: `The Gannomat Master 325 is a frame drilling machine for furniture frames, window and door frames with precise drilling on all frame sides. It works with multiple drilling heads at various positions so that complete frame drilling patterns are set in one pass. Typical applications: holes for frame connectors, dowel holes at corner joints or fitting insertion in door frames. The Master 325 is precise enough for load-bearing frame constructions and has been used in European furniture and door factories for decades. Asamer supplies it for CZ, SK and HU including setting to your frame types.`,
      cz: `Gannomat Master 325 je rámový vrtací stroj pro nábytkové rámy, okenní a dveřní rámy s přesným vrtáním na všech stranách rámu. Pracuje s několika vrtacími hlavami v různých pozicích, takže kompletní rámové vrtací vzory se vytváří v jednom průchodu. Typické aplikace: otvory pro rámové spojovací prvky, otvory pro kolíky u rohových spojů nebo vsazení kování u dveřních rámů. Master 325 je dostatečně přesný pro nosné rámové konstrukce a je v evropských nábytkářských a dveřních závodech používán desetiletí. Asamer jej dodává pro CZ, SK a HU včetně seřízení na vaše typy rámů.`,
      hu: `A Gannomat Master 325 egy keretfúró gép bútorkeretekhez, ablak- és ajtókeretekhez, precíz fúrással minden keretoldalon. Több fúrófejjel dolgozik különböző pozíciókban, így a teljes keretfúrási minták egy menetben készülnek el. Tipikus alkalmazások: furatok keret-összekötőkhöz, csapfuratok sarokkötéseknél vagy szerelvénybeültetés ajtókereteknél. A Master 325 elég pontos teherhordó keretszerkezetekhez, és évtizedek óta használatban van európai bútor- és ajtógyárakban. Az Asamer CZ, SK és HU területére szállítja, az ön kerettípusaira történő beállítással együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Türrahmen- und Fensterrahmenfertigung', en: 'For door and window frame production', cz: 'Pro výrobu dveřních a okenních rámů', hu: 'Ajtó- és ablakkeret gyártáshoz' },
        body: {
          de: 'Dveřní a okenní rámy vyžadují přesné otvory pro závěsy, zámky a spoje. Master 325 vrtá všechny tyto otvory v přesné pozici relativní k profilu rámu — bez nutnosti předem označovat nebo nastavovat.',
          en: 'Door and window frames require precise holes for hinges, locks and joints. The Master 325 drills all these holes in exact position relative to the frame profile — without prior marking or setting.',
          cz: 'Dveřní a okenní rámy vyžadují přesné otvory pro závěsy, zámky a spoje. Master 325 vrtá všechny tyto otvory v přesné pozici vzhledem k profilu rámu — bez nutnosti předem označovat nebo nastavovat.',
          hu: 'Az ajtó- és ablakkeretek precíz furatokat igényelnek pántokhoz, zárakhoz és kötésekhez. A Master 325 minden furatot pontos pozícióban fúr a keretprofilhoz képest — előzetes jelölés vagy beállítás nélkül.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Master-Reihe deckt den Großteil aller Rahmenbohr-Anwendungen ab. Für einfachere Anforderungen ist die Junior 323 günstiger; für komplexe Bohrbilder in Sonderrahmen empfiehlt sich die Mod-160.',
      en: 'The Master series covers most frame drilling applications. For simpler requirements, the Junior 323 is cheaper; for complex drilling patterns in special frames, the Mod 160 is recommended.',
      cz: 'Řada Master pokrývá většinu aplikací rámového vrtání. Pro jednodušší požadavky je levnější Junior 323; pro složité vrtací vzory ve speciálních rámech se doporučuje Mod 160.',
      hu: 'A Master sorozat a keretfúrási alkalmazások nagy részét lefedi. Egyszerűbb követelményekhez a Junior 323 olcsóbb; különleges keretekben összetett fúrásmintákhoz a Mod 160 ajánlott.',
    },
    faq: [
      {
        question: { de: 'Welche Rahmengrößen sind möglich?', en: 'What frame sizes are possible?', cz: 'Jaké velikosti rámů jsou možné?', hu: 'Milyen keretméretek lehetségesek?' },
        answer: {
          de: 'Typisch von ca. 300 × 300 mm bis 2.500 × 1.200 mm. Überformate nach Absprache.',
          en: 'Typically from approx. 300 × 300 mm to 2,500 × 1,200 mm. Oversized formats by arrangement.',
          cz: 'Obvykle od cca 300 × 300 mm do 2.500 × 1.200 mm. Nadměrné formáty po dohodě.',
          hu: 'Jellemzően kb. 300 × 300 mm-től 2500 × 1200 mm-ig. Túlméretes formátumok egyeztetés szerint.',
        },
      },
      {
        question: { de: 'Massive oder beschichtete Rahmen?', en: 'Solid or coated frames?', cz: 'Masivní nebo povrstvené rámy?', hu: 'Tömör vagy bevonatos keretek?' },
        answer: {
          de: 'Beides — Massivholz, MDF, Spanplatte mit Beschichtung. Werkzeuge sind standardmäßig für alle Materialien ausgelegt.',
          en: 'Both — solid wood, MDF, coated chipboard. Tools are designed for all materials as standard.',
          cz: 'Oboje — masivní dřevo, MDF, povrstvená dřevotříska. Nástroje jsou standardně navrženy pro všechny materiály.',
          hu: 'Mindkettő — tömör fa, MDF, bevonatos forgácslap. A szerszámok szabványosan minden anyaghoz készültek.',
        },
      },
      {
        question: { de: 'Bohrstellen frei programmierbar?', en: 'Drilling positions freely programmable?', cz: 'Jsou pozice vrtání volně programovatelné?', hu: 'Szabadon programozhatók a fúráshelyek?' },
        answer: {
          de: 'Mechanisch über Anschläge, Sondereinstellungen gegen Aufpreis möglich. CNC-Steuerung bei Sondermodellen.',
          en: 'Mechanically via stops, special settings possible at extra cost. CNC control in special models.',
          cz: 'Mechanicky přes dorazy, speciální nastavení za příplatek. CNC řízení u speciálních modelů.',
          hu: 'Mechanikusan ütközőkön keresztül, egyedi beállítások felárral lehetségesek. CNC-vezérlés speciális modelleknél.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  FITTING — basica                                                   */
  /* ------------------------------------------------------------------ */
  'basica': {
    longDescription: {
      de: `Die Gannomat Basica ist eine sehr kompakte, einfach bedienbare Dübelsetzmaschine für kleine Tischlereien und Einstiegsbetriebe. Als Einsteigermodell der Gannomat-Beschlagsetzreihe konzentriert sie sich auf die wesentliche Funktion: zuverlässiges Setzen von Holzdübeln in vorgebohrte Korpusteile — ohne komplexe Steuerung und ohne große Stellflächenanforderungen. Für Werkstätten bis etwa fünf Mitarbeiter oder mit Tagesdurchsatz unter 50 Korpussen ist die Basica die wirtschaftliche Lösung, um aus der rein manuellen Dübelmontage auszusteigen. Die Bedienung ist in wenigen Stunden erlernbar, die Wartung mechanisch einfach. Asamer liefert die Basica als autorisierter Gannomat-Händler nach Tschechien, in die Slowakei und nach Ungarn, inklusive Einrichtung und Schulung vor Ort.`,
      en: `The Gannomat Basica is a very compact, easy-to-operate dowel insertion machine for small joinery shops and entry-level operations. As the entry model of the Gannomat fitting insertion series, it focuses on the essential function: reliable setting of wooden dowels into pre-drilled carcass parts — without complex control and without large footprint requirements. For workshops of up to about five employees or with daily throughput below 50 carcasses, the Basica is the economical solution to step out of purely manual dowel assembly. Operation can be learned in a few hours, maintenance is mechanically simple. Asamer supplies the Basica as authorized Gannomat dealer to Czech Republic, Slovakia and Hungary, including on-site setup and training.`,
      cz: `Gannomat Basica je velmi kompaktní, jednoduše ovladatelný kolíkovací stroj pro malé truhlárny a začínající provozy. Jako vstupní model řady Gannomat pro vsazování kování se soustředí na základní funkci: spolehlivé vsazování dřevěných kolíků do předvrtaných korpusových dílů — bez složitého řízení a bez velkých nároků na plochu. Pro dílny do přibližně pěti zaměstnanců nebo s denním průtokem pod 50 korpusů je Basica ekonomickým řešením, jak vystoupit z čistě ruční montáže kolíků. Obsluhu lze zvládnout za několik hodin, údržba je mechanicky jednoduchá. Asamer dodává Basicu jako autorizovaný prodejce Gannomat do České republiky, na Slovensko a do Maďarska, včetně instalace a školení na místě.`,
      sk: `Gannomat Basica je veľmi kompaktný, jednoducho ovládateľný kolíkovací stroj pre malé stolárstva a začínajúce prevádzky. Ako vstupný model série Gannomat na vsadzovanie kovania sa sústredí na základnú funkciu: spoľahlivé vsadzovanie drevených kolíkov do predvŕtaných korpusových dielov — bez zložitého riadenia a bez veľkých nárokov na priestor. Pre dielne do približne piatich zamestnancov alebo s denným prietokom pod 50 korpusov je Basica ekonomickým riešením, ako vystúpiť z čisto ručnej montáže kolíkov. Obsluhu možno zvládnuť za niekoľko hodín, údržba je mechanicky jednoduchá. Asamer dodáva Basicu ako autorizovaný predajca Gannomat do Česka, na Slovensko a do Maďarska, vrátane inštalácie a školenia na mieste.`,
      hu: `A Gannomat Basica egy nagyon kompakt, könnyen kezelhető csapbeültető gép kis asztalosüzemeknek és induló vállalkozásoknak. A Gannomat szerelvénybeültető sorozat belépő modelljeként a lényegi funkcióra összpontosít: facsapok megbízható beültetésére előfúrt korpuszelemekbe — bonyolult vezérlés és nagy helyigény nélkül. Körülbelül ötfős műhelyekig vagy napi 50 korpusz alatti áteresztőképességhez a Basica gazdaságos megoldás a tisztán kézi csapszerelésből való kilépésre. A kezelést néhány óra alatt el lehet sajátítani, a karbantartás mechanikusan egyszerű. Az Asamer mint hivatalos Gannomat-forgalmazó szállítja a Basicát Csehországba, Szlovákiába és Magyarországra, helyszíni telepítéssel és képzéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für kleine Tischlereien und Einzelanfertigung', en: 'For small joinery shops and custom work', cz: 'Pro malé truhlárny a zakázkovou výrobu', hu: 'Kis asztalosüzemekhez és egyedi gyártáshoz' },
        body: {
          de: 'In der Einzelstück- und Kleinserienfertigung — etwa bei Einbaumöbeln oder Spezialkorpussen — lohnt sich keine große CNC-Anlage. Die Basica bietet hier die Brücke zwischen Handhammer und Industriemaschine: zuverlässige, reproduzierbare Dübelsetzung bei minimaler Investition.',
          en: 'In single-piece and small-series production — such as built-in furniture or special carcasses — a large CNC system is not worthwhile. The Basica bridges the gap between hand hammer and industrial machine: reliable, reproducible dowel insertion with minimal investment.',
          cz: 'Při výrobě jednotlivých kusů a malých sérií — například u vestavěného nábytku nebo speciálních korpusů — se velké CNC zařízení nevyplatí. Basica zde tvoří most mezi ručním kladivem a průmyslovým strojem: spolehlivé, reprodukovatelné vsazování kolíků při minimální investici.',
          hu: 'Egyedi és kissorozatú gyártásban — például beépített bútoroknál vagy speciális korpuszoknál — nem éri meg nagy CNC-berendezés. A Basica itt képezi a hidat a kézi kalapács és az ipari gép között: megbízható, reprodukálható csapbeültetés minimális beruházással.',
        },
      },
      {
        heading: { de: 'Für den Einstieg in mechanisierte Korpusfertigung', en: 'For entry into mechanised carcass production', cz: 'Pro vstup do mechanizované výroby korpusu', hu: 'Belépés a gépesített korpuszgyártásba' },
        body: {
          de: 'Wer heute von Hand dübelt und den nächsten Schritt Richtung Automatisierung machen will, findet in der Basica einen sanften Einstieg. Kein neues Bedienpersonal, keine aufwändige Programmierung — die Maschine fügt sich in bestehende Werkstattabläufe ein.',
          en: 'Anyone currently dowelling by hand and wanting to take the next step towards automation finds a gentle entry in the Basica. No new operating personnel, no complex programming — the machine fits into existing workshop processes.',
          cz: 'Kdo dnes kolíkuje ručně a chce udělat další krok směrem k automatizaci, najde v Basice mírný vstup. Žádný nový personál obsluhy, žádné náročné programování — stroj zapadá do stávajících dílenských procesů.',
          hu: 'Aki ma kézzel csapol, és következő lépést szeretne tenni az automatizálás felé, enyhe belépést talál a Basicában. Nincs új kezelő személyzet, nincs bonyolult programozás — a gép illeszkedik a meglévő műhelyfolyamatokba.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Basica ist die richtige Wahl für kleine Tischlereien bis etwa fünf Mitarbeiter und Tagesausstoß unter 50 Korpussen. Wer höheren Durchsatz oder unterschiedliche Werkstücktypen hat, sollte die Variabel oder Express S1 in Betracht ziehen; bei Serienfertigung lohnt der Schritt zu S2 oder S3.',
      en: 'The Basica is the right choice for small joinery shops up to about five employees and daily output below 50 carcasses. For higher throughput or varied workpiece types, consider the Variabel or Express S1; for series production, the step to S2 or S3 is worthwhile.',
      cz: 'Basica je správnou volbou pro malé truhlárny do přibližně pěti zaměstnanců a denní výstup pod 50 korpusů. Při vyšším průtoku nebo různých typech obrobků by měl být zvážen Variabel nebo Express S1; při sériové výrobě se vyplatí přechod na S2 nebo S3.',
      sk: 'Basica je správnou voľbou pre malé stolárstva do približne piatich zamestnancov a denný výstup pod 50 korpusov. Pri vyššom prietoku alebo rôznych typoch obrobkov by mal byť zvážený Variabel alebo Express S1; pri sériovej výrobe sa oplatí prechod na S2 alebo S3.',
      hu: 'A Basica a megfelelő választás kis asztalosüzemeknek körülbelül ötfős létszámig és napi 50 korpusz alatti kibocsátáshoz. Nagyobb áteresztőképesség vagy eltérő munkadarabtípusok esetén a Variabelt vagy Express S1-et érdemes megfontolni; sorozatgyártáshoz az S2 vagy S3 felé való lépés kifizetődő.',
    },
    faq: [
      {
        question: { de: 'Wie viel Stellfläche braucht die Basica?', en: 'How much floor space does the Basica need?', cz: 'Kolik místa Basica potřebuje?', hu: 'Mennyi helyet igényel a Basica?' },
        answer: {
          de: 'Etwa 1,5 × 1 m — sie passt in jede Werkstatt ohne Umbau.',
          en: 'About 1.5 × 1 m — it fits into any workshop without modification.',
          cz: 'Přibližně 1,5 × 1 m — vejde se do každé dílny bez úprav.',
          sk: 'Približne 1,5 × 1 m — zmestí sa do každej dielne bez úprav.',
          hu: 'Körülbelül 1,5 × 1 m — minden műhelybe belefér átalakítás nélkül.',
        },
      },
      {
        question: { de: 'Benötige ich Druckluft?', en: 'Do I need compressed air?', cz: 'Potřebuji stlačený vzduch?', hu: 'Szükséges sűrített levegő?' },
        answer: {
          de: 'Ja — ein einfacher Werkstattkompressor mit 6–8 bar genügt.',
          en: 'Yes — a simple workshop compressor with 6–8 bar is sufficient.',
          cz: 'Ano — postačí jednoduchý dílenský kompresor s 6–8 bar.',
          sk: 'Áno — postačí jednoduchý dielenský kompresor so 6–8 bar.',
          hu: 'Igen — egy egyszerű, 6–8 bar nyomású műhelykompresszor elegendő.',
        },
      },
      {
        question: { de: 'Wie lange dauert die Einschulung?', en: 'How long is operator training?', cz: 'Jak dlouho trvá školení obsluhy?', hu: 'Meddig tart a kezelő képzése?' },
        answer: {
          de: 'Einen halben Arbeitstag — die Basica ist bewusst einfach gehalten.',
          en: 'Half a working day — the Basica is deliberately kept simple.',
          cz: 'Půl pracovního dne — Basica je záměrně jednoduchá.',
          sk: 'Pol pracovného dňa — Basica je zámerne jednoduchá.',
          hu: 'Fél munkanap — a Basicát szándékosan egyszerűen tartották.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  FITTING — variabel                                                 */
  /* ------------------------------------------------------------------ */
  'variabel': {
    longDescription: {
      de: `Die Gannomat Variabel ist eine flexibel konfigurierbare Dübelsetzmaschine für Tischlereien mit wechselndem Werkstücksortiment. Der Name ist Programm: Bohr- und Setzeinheiten lassen sich auf unterschiedliche Korpusbreiten, Lochabstände und Dübeldurchmesser umstellen, ohne dass mehrere Maschinen angeschafft werden müssen. Damit richtet sich die Variabel an mittelgroße Betriebe, die zwar keine reinen Serien fahren, aber über die reine Einzelanfertigung hinaus produzieren — etwa Möbelhersteller mit wechselnden Kundenaufträgen oder Küchenbauer mit breiter Korpus-Palette. Die Umrüstung erfolgt mechanisch nach kurzer Einweisung. Asamer liefert die Variabel als autorisierter Gannomat-Händler nach Tschechien, in die Slowakei und nach Ungarn, inklusive Beratung zur optimalen Grundkonfiguration.`,
      en: `The Gannomat Variabel is a flexibly configurable dowel insertion machine for joinery shops with changing workpiece assortment. The name is the programme: drilling and setting units can be adjusted to different carcass widths, hole spacings and dowel diameters without having to purchase several machines. The Variabel is thus aimed at medium-sized operations that do not run pure series but produce beyond pure custom work — such as furniture manufacturers with changing customer orders or kitchen makers with a broad carcass range. Changeover takes place mechanically after brief instruction. Asamer supplies the Variabel as authorized Gannomat dealer to Czech Republic, Slovakia and Hungary, including advice on the optimal base configuration.`,
      cz: `Gannomat Variabel je flexibilně konfigurovatelný kolíkovací stroj pro truhlárny s měnícím se sortimentem obrobků. Název je programem: vrtací a vsazovací jednotky lze přizpůsobit různým šířkám korpusu, roztečím otvorů a průměrům kolíků, aniž by bylo nutné pořizovat několik strojů. Variabel je tak určen středním provozům, které nevyrábějí čisté série, ale produkují nad rámec čistě zakázkové výroby — například výrobcům nábytku s měnícími se zákaznickými objednávkami nebo kuchyňařům s širokou paletou korpusů. Přestavba probíhá mechanicky po krátké instruktáži. Asamer dodává Variabel jako autorizovaný prodejce Gannomat do České republiky, na Slovensko a do Maďarska, včetně poradenství k optimální základní konfiguraci.`,
      sk: `Gannomat Variabel je flexibilne konfigurovateľný kolíkovací stroj pre stolárstva s meniacim sa sortimentom obrobkov. Názov je programom: vŕtacie a vsadzovacie jednotky možno prispôsobiť rôznym šírkam korpusu, rozstupom otvorov a priemerom kolíkov, bez nutnosti zaobstarať si viacero strojov. Variabel je tak určený stredným prevádzkam, ktoré nevyrábajú čisté série, ale produkujú nad rámec čisto zákazkovej výroby — napríklad výrobcom nábytku s meniacimi sa zákazníckymi objednávkami alebo kuchynárom so širokou paletou korpusov. Prestavba prebieha mechanicky po krátkej inštruktáži. Asamer dodáva Variabel ako autorizovaný predajca Gannomat do Česka, na Slovensko a do Maďarska, vrátane poradenstva k optimálnej základnej konfigurácii.`,
      hu: `A Gannomat Variabel egy rugalmasan konfigurálható csapbeültető gép váltakozó munkadarab-választékkal dolgozó asztalosüzemeknek. A név a programot jelenti: a fúró- és beültető egységek különböző korpuszszélességekre, lyuktávolságokra és csapátmérőkre állíthatók, több gép beszerzése nélkül. A Variabel így közepes méretű üzemeknek szól, amelyek nem tiszta sorozatokat gyártanak, hanem a tisztán egyedi gyártáson túlmutatnak — például változó vevői rendeléseket kiszolgáló bútorgyártóknak vagy széles korpuszválasztékkal dolgozó konyhagyártóknak. Az átállítás mechanikusan, rövid betanítás után történik. Az Asamer a Variabelt hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra, az optimális alapkonfigurációra vonatkozó tanácsadással együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für variantenreiche Kleinserienfertigung', en: 'For variant-rich small-series production', cz: 'Pro variantně bohatou malosériovou výrobu', hu: 'Változatos kissorozatú gyártáshoz' },
        body: {
          de: 'Wer heute Wohnzimmer-Korpussen, morgen Küchenunterschränke und übermorgen Büroregale fertigt, braucht eine Maschine, die mit diesem Wechsel mitgeht. Die Variabel erlaubt es, ohne lange Umbauzeiten zwischen unterschiedlichen Werkstücktypen zu wechseln.',
          en: 'Anyone producing living-room carcasses today, kitchen base units tomorrow and office shelving the day after needs a machine that keeps pace with this change. The Variabel allows switching between different workpiece types without long rebuild times.',
          cz: 'Kdo dnes vyrábí obývákové korpusy, zítra kuchyňské spodní skříňky a pozítří kancelářské regály, potřebuje stroj, který s touto změnou jde. Variabel umožňuje přepínat mezi různými typy obrobků bez dlouhých přestavovacích časů.',
          hu: 'Aki ma nappali korpuszokat, holnap konyhai alsó elemeket, holnapután pedig irodai polcokat gyárt, olyan gépre van szüksége, amely lépést tart ezzel a váltással. A Variabel lehetővé teszi a különböző munkadarabtípusok közötti váltást hosszú átépítési idők nélkül.',
        },
      },
      {
        heading: { de: 'Als Brücke zwischen Einstieg und Serienmaschine', en: 'As bridge between entry and series machine', cz: 'Jako most mezi vstupní a sériovou mašinou', hu: 'Híd a belépő és a sorozatgép között' },
        body: {
          de: 'Für Betriebe, denen die Basica zu einfach und eine Express S3 zu spezialisiert ist, schließt die Variabel genau die Lücke. Sie verbindet mechanische Robustheit mit der Konfigurationsvielfalt, die eine breitere Produktpalette verlangt.',
          en: 'For operations that find the Basica too simple and an Express S3 too specialised, the Variabel fills exactly that gap. It combines mechanical robustness with the configuration variety that a broader product range requires.',
          cz: 'Pro provozy, jimž je Basica příliš jednoduchá a Express S3 příliš specializovaný, zaplňuje Variabel přesně tuto mezeru. Spojuje mechanickou robustnost s konfigurační variabilitou, kterou širší produktová paleta vyžaduje.',
          hu: 'Olyan üzemeknek, amelyeknek a Basica túl egyszerű, az Express S3 pedig túl specializált, a Variabel pontosan ezt a rést tölti ki. A mechanikus robusztusságot ötvözi azzal a konfigurációs változatossággal, amelyet a szélesebb termékpaletta igényel.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Variabel ist ideal für Tischlereien mit 5–15 Mitarbeitern und breitem Produktportfolio bei moderatem Durchsatz. Wer reine Standardkorpusse in Serie fertigt, fährt mit Express S2/S3 effizienter; für RTA-Beschläge ist die Express S1/S2 RTA die richtige Variante.',
      en: 'The Variabel is ideal for joinery shops with 5–15 employees and broad product portfolio at moderate throughput. Anyone producing pure standard carcasses in series runs more efficiently with Express S2/S3; for RTA fittings, the Express S1/S2 RTA is the right variant.',
      cz: 'Variabel je ideální pro truhlárny s 5–15 zaměstnanci a širokým produktovým portfoliem při středním průtoku. Kdo vyrábí čisté standardní korpusy v sériích, jezdí efektivněji s Express S2/S3; pro RTA kování je správnou variantou Express S1/S2 RTA.',
      sk: 'Variabel je ideálny pre stolárstva s 5–15 zamestnancami a širokým produktovým portfóliom pri strednom prietoku. Kto vyrába čisté štandardné korpusy v sériách, jazdí efektívnejšie s Express S2/S3; pre RTA kovanie je správnou variantou Express S1/S2 RTA.',
      hu: 'A Variabel ideális 5–15 fős asztalosüzemekhez széles termékportfólióval, közepes áteresztőképesség mellett. Aki tiszta szabványkorpuszokat gyárt sorozatban, hatékonyabban dolgozik Express S2/S3-mal; RTA-vasalatokhoz az Express S1/S2 RTA a megfelelő változat.',
    },
    faq: [
      {
        question: { de: 'Wie viele Konfigurationen sind möglich?', en: 'How many configurations are possible?', cz: 'Kolik konfigurací je možných?', hu: 'Hány konfiguráció lehetséges?' },
        answer: {
          de: 'Die gängigen Korpusbreiten und Dübelabstände lassen sich mechanisch einstellen — in der Praxis deckt das die allermeisten Möbelaufgaben ab.',
          en: 'The common carcass widths and dowel spacings can be set mechanically — in practice this covers the vast majority of furniture tasks.',
          cz: 'Běžné šířky korpusu a rozteče kolíků lze nastavit mechanicky — v praxi to pokrývá naprostou většinu nábytkových úkolů.',
          sk: 'Bežné šírky korpusu a rozstupy kolíkov možno nastaviť mechanicky — v praxi to pokrýva drvivú väčšinu nábytkárskych úloh.',
          hu: 'A szokásos korpuszszélességek és csaptávolságok mechanikusan állíthatók — a gyakorlatban ez a bútoripari feladatok túlnyomó többségét lefedi.',
        },
      },
      {
        question: { de: 'Wie lange dauert eine Umrüstung?', en: 'How long does a changeover take?', cz: 'Jak dlouho trvá přestavba?', hu: 'Mennyi ideig tart egy átállítás?' },
        answer: {
          de: 'Typisch 10–20 Minuten bei eingearbeitetem Bediener.',
          en: 'Typically 10–20 minutes for a trained operator.',
          cz: 'Obvykle 10–20 minut pro zacvičenou obsluhu.',
          sk: 'Obvykle 10–20 minút pre zacvičenú obsluhu.',
          hu: 'Betanított kezelő számára jellemzően 10–20 perc.',
        },
      },
      {
        question: { de: 'Ist die Variabel pneumatisch oder hydraulisch?', en: 'Is the Variabel pneumatic or hydraulic?', cz: 'Je Variabel pneumatický nebo hydraulický?', hu: 'A Variabel pneumatikus vagy hidraulikus?' },
        answer: {
          de: 'Pneumatisch — damit genügt Werkstattdruckluft ohne Hydraulikaggregat.',
          en: 'Pneumatic — workshop compressed air is sufficient without a hydraulic unit.',
          cz: 'Pneumatický — postačí dílenský tlakový vzduch bez hydraulického agregátu.',
          sk: 'Pneumatický — postačí dielenský tlakový vzduch bez hydraulického agregátu.',
          hu: 'Pneumatikus — műhelyi sűrített levegő elegendő hidraulikus aggregát nélkül.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  FITTING — red-baron-p                                              */
  /* ------------------------------------------------------------------ */
  'red-baron-p': {
    longDescription: {
      de: `Die Gannomat Red Baron P ist eine bewährte, rein pneumatische Dübelsetzmaschine für mittelschwere Korpusfertigung. Die Kennung P steht für die pneumatische Antriebsvariante: einfache Medien, klare Wartung, keine Hydraulik. Seit vielen Jahren läuft die Red Baron in europäischen Tischlereien und Möbelwerkstätten als robuste Arbeitsmaschine für Tagesausstöße in mittlerer Größenordnung. Ihre Stärken liegen in der Langlebigkeit, der einfachen mechanischen Konstruktion und der Serviceverträglichkeit — auch nach Jahren lassen sich Verschleißteile austauschen, ohne dass proprietäre Elektronik den Weg versperrt. Asamer liefert die Red Baron P als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn, inklusive Einbau und Mitarbeiterschulung.`,
      en: `The Gannomat Red Baron P is a proven, purely pneumatic dowel insertion machine for medium-duty carcass production. The P designation stands for the pneumatic drive variant: simple media, clear maintenance, no hydraulics. For many years the Red Baron has been running in European joinery shops and furniture workshops as a robust workhorse for mid-range daily outputs. Its strengths lie in longevity, simple mechanical construction and serviceability — even after years, wear parts can be replaced without proprietary electronics getting in the way. Asamer supplies the Red Baron P as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary, including installation and operator training.`,
      cz: `Gannomat Red Baron P je osvědčený, čistě pneumatický kolíkovací stroj pro středně náročnou výrobu korpusu. Označení P znamená pneumatickou pohonnou variantu: jednoduchá média, přehledná údržba, žádná hydraulika. Red Baron běží již mnoho let v evropských truhlárnách a nábytkářských dílnách jako robustní pracovní stroj pro střední denní výstupy. Jeho silnými stránkami jsou dlouhá životnost, jednoduchá mechanická konstrukce a servisovatelnost — i po letech lze vyměnit opotřebované díly, aniž by v cestě stála proprietární elektronika. Asamer dodává Red Baron P jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko, včetně montáže a školení pracovníků.`,
      sk: `Gannomat Red Baron P je osvedčený, čisto pneumatický kolíkovací stroj pre stredne náročnú výrobu korpusu. Označenie P znamená pneumatickú pohonnú variantu: jednoduché médiá, prehľadná údržba, žiadna hydraulika. Red Baron beží už mnoho rokov v európskych stolárstvach a nábytkárskych dielňach ako robustný pracovný stroj pre stredné denné výstupy. Jeho silnými stránkami sú dlhá životnosť, jednoduchá mechanická konštrukcia a servisovateľnosť — aj po rokoch možno vymeniť opotrebované diely bez toho, aby v ceste stála proprietárna elektronika. Asamer dodáva Red Baron P ako autorizovaný predajca Gannomat pre Českú republiku, Slovensko a Maďarsko, vrátane montáže a školenia pracovníkov.`,
      hu: `A Gannomat Red Baron P egy bevált, tisztán pneumatikus csapbeültető gép közepes igénybevételű korpuszgyártáshoz. A P jelölés a pneumatikus hajtásváltozatra utal: egyszerű közegek, áttekinthető karbantartás, nincs hidraulika. A Red Baron sok éve dolgozik európai asztalosüzemekben és bútorműhelyekben robusztus munkagépként közepes napi kibocsátásokhoz. Erősségei a hosszú élettartamban, az egyszerű mechanikai konstrukcióban és a szervizelhetőségben rejlenek — évek múltán is cserélhetők a kopó alkatrészek anélkül, hogy proprietary elektronika állna az útba. Az Asamer a Red Baron P-t hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra, beszereléssel és dolgozói képzéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für den robusten Werkstattalltag', en: 'For robust everyday workshop use', cz: 'Pro robustní dílenský provoz', hu: 'Robusztus műhelyi mindennapokhoz' },
        body: {
          de: 'In Werkstätten mit zwei bis drei Schichten, wechselndem Personal und intensivem Dauerbetrieb ist die Red Baron P ein Arbeitstier. Pneumatische Komponenten verzeihen Staub, Temperaturschwankungen und gelegentliche Bedienfehler — ideal, wenn Verfügbarkeit wichtiger ist als Höchstdurchsatz.',
          en: 'In workshops with two or three shifts, changing personnel and intensive continuous operation, the Red Baron P is a workhorse. Pneumatic components tolerate dust, temperature fluctuations and occasional operator errors — ideal where availability matters more than peak throughput.',
          cz: 'V dílnách se dvěma až třemi směnami, střídajícím se personálem a intenzivním nepřetržitým provozem je Red Baron P tažným koněm. Pneumatické komponenty odpouštějí prach, teplotní výkyvy a občasné chyby obsluhy — ideální tam, kde je důležitější dostupnost než špičkový průtok.',
          hu: 'Kétműszakos vagy háromműszakos, változó személyzetű, intenzív folyamatos üzemű műhelyekben a Red Baron P igazi igáslóként dolgozik. A pneumatikus komponensek elviselik a port, a hőmérséklet-ingadozásokat és az alkalmi kezelői hibákat — ideális ott, ahol a rendelkezésre állás fontosabb a csúcsáteresztőképességnél.',
        },
      },
      {
        heading: { de: 'Als Ersatz für ältere Dübelmaschinen', en: 'As replacement for older dowel machines', cz: 'Jako náhrada za starší kolíkovací stroje', hu: 'Régebbi csapgépek cseréjeként' },
        body: {
          de: 'Viele Tischlereien ersetzen mit der Red Baron P eine bestehende, in die Jahre gekommene Dübelmaschine. Layout, Anschlüsse und Bedienphilosophie bleiben vertraut — der Produktivitätssprung entsteht durch schnellere Taktzeiten und höhere Zuverlässigkeit.',
          en: 'Many joinery shops use the Red Baron P to replace an existing, ageing dowel machine. Layout, connections and operating philosophy remain familiar — the productivity jump comes from faster cycle times and higher reliability.',
          cz: 'Mnoho truhláren nahrazuje Red Baron P stávající, léty opotřebený kolíkovací stroj. Rozvržení, přípojky a filozofie obsluhy zůstávají známé — skok v produktivitě vzniká díky rychlejším dobám taktu a vyšší spolehlivosti.',
          hu: 'Sok asztalosüzem a Red Baron P-vel cseréli le a meglévő, évek alatt elhasználódott csapgépét. Az elrendezés, a csatlakozók és a kezelési filozófia ismerős marad — a termelékenységi ugrást a gyorsabb ciklusidők és a magasabb megbízhatóság hozzák.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Red Baron P ist die pragmatische Wahl für Betriebe, die auf bewährte Pneumatik setzen und ohne CNC oder Elektroniklast arbeiten wollen. Für höhere Stückzahlen empfehlen sich Express S2/S3; bei Bedarf an CNC-Flexibilität die Express S1 CNC oder Vector CNC.',
      en: 'The Red Baron P is the pragmatic choice for operations relying on proven pneumatics and wanting to work without CNC or electronic load. For higher quantities, Express S2/S3 are recommended; if CNC flexibility is needed, the Express S1 CNC or Vector CNC.',
      cz: 'Red Baron P je pragmatickou volbou pro provozy, které sázejí na osvědčenou pneumatiku a chtějí pracovat bez CNC nebo elektronické zátěže. Pro vyšší počty kusů se doporučuje Express S2/S3; při potřebě CNC flexibility Express S1 CNC nebo Vector CNC.',
      sk: 'Red Baron P je pragmatickou voľbou pre prevádzky, ktoré stavajú na osvedčenej pneumatike a chcú pracovať bez CNC alebo elektronickej záťaže. Pre vyššie počty kusov sa odporúča Express S2/S3; pri potrebe CNC flexibility Express S1 CNC alebo Vector CNC.',
      hu: 'A Red Baron P a pragmatikus választás olyan üzemeknek, amelyek bevált pneumatikára építenek, és CNC vagy elektronikus terhelés nélkül akarnak dolgozni. Nagyobb darabszámhoz az Express S2/S3 ajánlott; CNC-rugalmasság szükségessége esetén az Express S1 CNC vagy Vector CNC.',
    },
    faq: [
      {
        question: { de: 'Warum pneumatisch statt hydraulisch?', en: 'Why pneumatic instead of hydraulic?', cz: 'Proč pneumaticky místo hydraulicky?', hu: 'Miért pneumatikus és nem hidraulikus?' },
        answer: {
          de: 'Weniger Medien, kein Ölwechsel, schnellerer Service — und jede Werkstatt hat bereits Druckluft.',
          en: 'Fewer media, no oil change, faster service — and every workshop already has compressed air.',
          cz: 'Méně médií, žádná výměna oleje, rychlejší servis — a každá dílna již má stlačený vzduch.',
          sk: 'Menej médií, žiadna výmena oleja, rýchlejší servis — a každá dielňa už má stlačený vzduch.',
          hu: 'Kevesebb közeg, nincs olajcsere, gyorsabb szerviz — és minden műhelyben van már sűrített levegő.',
        },
      },
      {
        question: { de: 'Welcher Tagesdurchsatz ist realistisch?', en: 'What daily throughput is realistic?', cz: 'Jaký denní průtok je reálný?', hu: 'Milyen napi áteresztőképesség reális?' },
        answer: {
          de: 'Etwa 80–150 Korpussen pro Schicht bei eingespieltem Bediener.',
          en: 'About 80–150 carcasses per shift with a trained operator.',
          cz: 'Přibližně 80–150 korpusů za směnu se zacvičenou obsluhou.',
          sk: 'Približne 80–150 korpusov za smenu so zacvičenou obsluhou.',
          hu: 'Műszakonként körülbelül 80–150 korpusz betanított kezelővel.',
        },
      },
      {
        question: { de: 'Wie hoch ist der Luftverbrauch?', en: 'What is the air consumption?', cz: 'Jaká je spotřeba vzduchu?', hu: 'Mekkora a levegőfogyasztás?' },
        answer: {
          de: 'Moderat — ein Werkstattkompressor ab etwa 500 l/min deckt den Bedarf zuverlässig.',
          en: 'Moderate — a workshop compressor from about 500 l/min reliably covers demand.',
          cz: 'Střední — dílenský kompresor od přibližně 500 l/min spolehlivě pokryje potřebu.',
          sk: 'Stredná — dielenský kompresor od približne 500 l/min spoľahlivo pokryje potrebu.',
          hu: 'Mérsékelt — körülbelül 500 l/perc teljesítményű műhelykompresszor megbízhatóan fedezi az igényt.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  FITTING — express-s1                                               */
  /* ------------------------------------------------------------------ */
  'express-s1': {
    longDescription: {
      de: `Die Gannomat Express S1 ist die Einsteigerausführung der Express-Baureihe — eine halbautomatische Dübelsetzmaschine mit einer einzigen Spindel. Für Betriebe mit geringen Tagesstückzahlen (bis etwa 50 Korpusse) ist sie der wirtschaftlichste Weg in die Welt der Express-Serie, die sich in Tischlereien und Korpusfertigern in ganz Europa etabliert hat. Die Bedienung ist bewusst einfach gehalten: Werkstück anlegen, Auslöser betätigen, Dübel wird gesetzt. Durch die identische Plattform zu den größeren Express-Modellen lassen sich Ersatzteile und Know-how später leicht übertragen, wenn der Betrieb auf S2 oder S3 aufsteigt. Asamer liefert die Express S1 als autorisierter Gannomat-Händler nach Tschechien, in die Slowakei und nach Ungarn.`,
      en: `The Gannomat Express S1 is the entry-level version of the Express series — a semi-automatic dowel insertion machine with a single spindle. For operations with low daily quantities (up to about 50 carcasses), it is the most economical way into the world of the Express series, which has established itself in joinery shops and carcass producers across Europe. Operation is deliberately kept simple: place the workpiece, trigger the release, dowel is set. Thanks to the identical platform of the larger Express models, spare parts and know-how can easily be transferred later when the operation steps up to S2 or S3. Asamer supplies the Express S1 as authorized Gannomat dealer to Czech Republic, Slovakia and Hungary.`,
      cz: `Gannomat Express S1 je vstupní provedení řady Express — poloautomatický kolíkovací stroj s jedním vřetenem. Pro provozy s nízkými denními počty kusů (do přibližně 50 korpusů) je nejekonomičtější cestou do světa řady Express, která se etablovala v truhlárnách a výrobcích korpusu po celé Evropě. Obsluha je záměrně jednoduchá: přiložit obrobek, stisknout spouštěč, kolík je vsazen. Díky identické platformě větších modelů Express lze náhradní díly a know-how později snadno přenést, když provoz postoupí na S2 nebo S3. Asamer dodává Express S1 jako autorizovaný prodejce Gannomat do České republiky, na Slovensko a do Maďarska.`,
      sk: `Gannomat Express S1 je vstupné prevedenie radu Express — poloautomatický kolíkovací stroj s jedným vretenom. Pre prevádzky s nízkymi dennými počtami kusov (do približne 50 korpusov) je najekonomickejšou cestou do sveta radu Express, ktorý sa etabloval v stolárstvach a výrobcoch korpusu po celej Európe. Obsluha je zámerne jednoduchá: priložiť obrobok, stlačiť spúšťač, kolík je vsadený. Vďaka identickej platforme väčších modelov Express možno náhradné diely a know-how neskôr ľahko preniesť, keď prevádzka postúpi na S2 alebo S3. Asamer dodáva Express S1 ako autorizovaný predajca Gannomat do Česka, na Slovensko a do Maďarska.`,
      hu: `A Gannomat Express S1 az Express sorozat belépő változata — egy félautomatikus csapbeültető gép egyetlen orsóval. Alacsony napi darabszámú üzemek számára (körülbelül 50 korpuszig) ez a leggazdaságosabb út az Express sorozat világába, amely Európa-szerte bevett az asztalosüzemekben és a korpuszgyártóknál. A kezelés szándékosan egyszerű: munkadarab behelyezése, kioldó megnyomása, csap beültetve. A nagyobb Express modellekkel azonos platformnak köszönhetően az alkatrészek és a know-how később könnyen átvihetők, amikor az üzem S2-re vagy S3-ra lép. Az Asamer az Express S1-et hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für den Einstieg in die Express-Welt', en: 'For entry into the Express world', cz: 'Pro vstup do světa Express', hu: 'Belépés az Express világba' },
        body: {
          de: 'Wer mit der Express-Technik vertraut werden will, ohne gleich in ein Mehrspindel-Modell zu investieren, findet in der S1 den natürlichen Einstieg. Bedienung und Wartung sind identisch mit den größeren Schwestern — Umschulung auf S2/S3 später entfällt weitgehend.',
          en: 'Anyone wanting to become familiar with Express technology without immediately investing in a multi-spindle model finds the natural entry in the S1. Operation and maintenance are identical to the larger sisters — retraining for S2/S3 is largely unnecessary later.',
          cz: 'Kdo se chce seznámit s technikou Express, aniž by hned investoval do vícevřetenového modelu, najde v S1 přirozený vstup. Obsluha a údržba jsou identické s většími sestrami — pozdější přeškolení na S2/S3 do velké míry odpadá.',
          hu: 'Aki úgy szeretne megismerkedni az Express technológiával, hogy ne kelljen azonnal többorsós modellbe fektetnie, az S1-ben találja meg a természetes belépőt. A kezelés és a karbantartás azonos a nagyobb testvérekével — S2/S3-ra való későbbi átképzés nagyrészt felesleges.',
        },
      },
      {
        heading: { de: 'Für kleine bis mittlere Tischlereien', en: 'For small to medium joinery shops', cz: 'Pro malé až střední truhlárny', hu: 'Kis és közepes asztalosüzemekhez' },
        body: {
          de: 'Bei Tagesdurchsätzen bis etwa 50 Korpussen ist die Investition in mehrere Spindeln wirtschaftlich nicht zu rechtfertigen. Die S1 setzt Dübel in reproduzierbarer Qualität, ohne dass Kapital in überdimensionierte Technik gebunden wird.',
          en: 'At daily throughputs of up to about 50 carcasses, investing in multiple spindles is not economically justifiable. The S1 sets dowels in reproducible quality without tying up capital in oversized technology.',
          cz: 'Při denních průtocích do přibližně 50 korpusů není investice do více vřeten ekonomicky ospravedlnitelná. S1 vsazuje kolíky v reprodukovatelné kvalitě, aniž by se vázal kapitál v předimenzované technice.',
          hu: 'Körülbelül 50 korpusz napi áteresztőképességig a több orsóba történő beruházás gazdaságilag nem indokolt. Az S1 reprodukálható minőségben ültet be csapokat anélkül, hogy tőkét kötne le túlméretezett technikában.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Express S1 passt zu kleinen Tischlereien und Einzelfertigern mit stabilem, aber geringem Durchsatz. Für mehr Stückzahlen lohnen S2 oder S3; für variantenreiche oder RTA-Produktion sind Express S1 CNC bzw. Express S1 RTA die passenden Ableger.',
      en: 'The Express S1 suits small joinery shops and custom producers with stable but low throughput. For more quantities, S2 or S3 are worthwhile; for variant-rich or RTA production, Express S1 CNC or Express S1 RTA are the fitting spin-offs.',
      cz: 'Express S1 se hodí pro malé truhlárny a zakázkové výrobce se stabilním, ale nízkým průtokem. Pro více kusů se vyplatí S2 nebo S3; pro variantně bohatou nebo RTA výrobu jsou vhodnými odvozeninami Express S1 CNC, resp. Express S1 RTA.',
      sk: 'Express S1 sa hodí pre malé stolárstva a zákazkových výrobcov so stabilným, ale nízkym prietokom. Pre viac kusov sa oplatí S2 alebo S3; pre variantne bohatú alebo RTA výrobu sú vhodnými odvodeninami Express S1 CNC, resp. Express S1 RTA.',
      hu: 'Az Express S1 kis asztalosüzemekhez és egyedi gyártókhoz illik stabil, de alacsony áteresztőképességgel. Nagyobb darabszámhoz az S2 vagy S3 éri meg; változatos vagy RTA-gyártáshoz az Express S1 CNC, illetve Express S1 RTA a megfelelő leágazás.',
    },
    faq: [
      {
        question: { de: 'Wann lohnt der Umstieg auf S2?', en: 'When is stepping up to S2 worthwhile?', cz: 'Kdy se vyplatí přechod na S2?', hu: 'Mikor éri meg az S2-re váltás?' },
        answer: {
          de: 'Ab etwa 60–80 Korpussen pro Tag macht sich die zusätzliche Spindel binnen weniger Monate bezahlt.',
          en: 'From about 60–80 carcasses per day, the additional spindle pays for itself within a few months.',
          cz: 'Od přibližně 60–80 korpusů za den se druhé vřeteno vrátí během několika měsíců.',
          sk: 'Od približne 60–80 korpusov za deň sa druhé vreteno vráti počas niekoľkých mesiacov.',
          hu: 'Körülbelül napi 60–80 korpusztól a plusz orsó néhány hónap alatt megtérül.',
        },
      },
      {
        question: { de: 'Lassen sich verschiedene Dübeldurchmesser setzen?', en: 'Can different dowel diameters be set?', cz: 'Lze vsazovat různé průměry kolíků?', hu: 'Beültethetők különböző csapátmérők?' },
        answer: {
          de: 'Ja — 6, 8 und 10 mm über einfachen Werkzeugwechsel.',
          en: 'Yes — 6, 8 and 10 mm via simple tool change.',
          cz: 'Ano — 6, 8 a 10 mm přes jednoduchou výměnu nástroje.',
          sk: 'Áno — 6, 8 a 10 mm cez jednoduchú výmenu nástroja.',
          hu: 'Igen — 6, 8 és 10 mm egyszerű szerszámcserével.',
        },
      },
      {
        question: { de: 'Wie präzise ist die Setzung?', en: 'How precise is the insertion?', cz: 'Jak přesné je vsazení?', hu: 'Mennyire pontos a beültetés?' },
        answer: {
          de: 'Im Rahmen üblicher Möbeltoleranzen — ausreichend für alle gängigen Korpusverbindungen.',
          en: 'Within common furniture tolerances — sufficient for all standard carcass joints.',
          cz: 'V rámci běžných nábytkových tolerancí — dostatečné pro všechny běžné korpusové spoje.',
          sk: 'V rámci bežných nábytkárskych tolerancií — dostatočné pre všetky bežné korpusové spoje.',
          hu: 'A szokásos bútoripari tűrések keretein belül — elegendő minden szokásos korpuszkötéshez.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  FITTING — express-s2                                               */
  /* ------------------------------------------------------------------ */
  'express-s2': {
    longDescription: {
      de: `Die Gannomat Express S2 ist die zweispindelige Ausführung der Express-Baureihe und damit der logische Schritt über die Einstiegsmaschine S1 hinaus. Zwei Dübel parallel zu setzen halbiert die Taktzeit pro Korpus effektiv — ein Produktivitätsgewinn, der sich in Betrieben mit Tagesausstoß bis etwa 150 Korpussen schnell amortisiert. Typische Einsatzfelder sind mittelgroße Tischlereien, Küchenhersteller im regionalen Markt und Möbelbetriebe, die regelmäßig mehrere Aufträge pro Woche fertigen. Die S2 teilt Plattform, Wartungskonzept und Ersatzteilprogramm mit den anderen Express-Modellen, wodurch spätere Erweiterungen oder zusätzliche Maschinen nahtlos in bestehende Werkstattabläufe passen. Asamer liefert die Express S2 als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn.`,
      en: `The Gannomat Express S2 is the two-spindle version of the Express series and thus the logical step beyond the entry-level S1. Setting two dowels in parallel effectively halves the cycle time per carcass — a productivity gain that quickly pays off in operations with a daily output of up to about 150 carcasses. Typical applications are medium-sized joinery shops, kitchen manufacturers in the regional market and furniture operations producing several orders per week on a regular basis. The S2 shares platform, maintenance concept and spare parts programme with the other Express models, so that later expansions or additional machines fit seamlessly into existing workshop processes. Asamer supplies the Express S2 as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary.`,
      cz: `Gannomat Express S2 je dvouvřetenové provedení řady Express, a tím logickým krokem za vstupní strojem S1. Vsazování dvou kolíků paralelně efektivně zkracuje dobu taktu na korpus na polovinu — nárůst produktivity, který se v provozech s denním výstupem do přibližně 150 korpusů rychle amortizuje. Typickými oblastmi použití jsou středně velké truhlárny, výrobci kuchyní na regionálním trhu a nábytkářské provozy, které pravidelně vyrábějí několik zakázek týdně. S2 sdílí platformu, koncepci údržby a program náhradních dílů s ostatními modely Express, takže pozdější rozšíření nebo další stroje hladce zapadnou do stávajících dílenských procesů. Asamer dodává Express S2 jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko.`,
      sk: `Gannomat Express S2 je dvojvretenové prevedenie radu Express a tým logickým krokom za vstupným strojom S1. Vsadzovanie dvoch kolíkov paralelne efektívne skracuje dobu cyklu na korpus na polovicu — nárast produktivity, ktorý sa v prevádzkach s denným výstupom do približne 150 korpusov rýchlo amortizuje. Typickými oblasťami použitia sú stredne veľké stolárstva, výrobcovia kuchýň na regionálnom trhu a nábytkárske prevádzky, ktoré pravidelne vyrábajú niekoľko zákaziek týždenne. S2 zdieľa platformu, koncepciu údržby a program náhradných dielov s ostatnými modelmi Express, takže neskoršie rozšírenia alebo ďalšie stroje hladko zapadnú do existujúcich dielenských procesov. Asamer dodáva Express S2 ako autorizovaný predajca Gannomat pre Českú republiku, Slovensko a Maďarsko.`,
      hu: `A Gannomat Express S2 az Express sorozat kétorsós változata, és így a logikus lépés az S1 belépő gépen túl. Két csap párhuzamos beültetése gyakorlatilag felére csökkenti a korpuszonkénti ciklusidőt — ez olyan termelékenységi nyereség, amely gyorsan megtérül napi körülbelül 150 korpusz kibocsátású üzemekben. Tipikus alkalmazási területek a közepes méretű asztalosüzemek, a regionális piacon működő konyhagyártók és azok a bútorüzemek, amelyek hetente több rendelést gyártanak rendszeresen. Az S2 a többi Express modellel közös platformmal, karbantartási koncepcióval és alkatrészprogrammal rendelkezik, így a későbbi bővítések vagy további gépek zökkenőmentesen illeszkednek a meglévő műhelyfolyamatokba. Az Asamer az Express S2-t hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für regelmäßige Korpusfertigung', en: 'For regular carcass production', cz: 'Pro pravidelnou výrobu korpusu', hu: 'Rendszeres korpuszgyártáshoz' },
        body: {
          de: 'Wer Woche für Woche mehrere Dutzend Korpussen fertigt, gewinnt mit der S2 deutlich Zeit gegenüber der S1 — zwei Dübel in einem Hub bedeuten weniger Bedienvorgänge pro Werkstück und höheren Wirkungsgrad des Arbeitsplatzes.',
          en: 'Anyone producing several dozen carcasses week after week gains significant time with the S2 over the S1 — two dowels per stroke mean fewer operator actions per workpiece and higher workstation efficiency.',
          cz: 'Kdo týden co týden vyrábí několik desítek korpusů, získává se S2 oproti S1 výrazně čas — dva kolíky v jednom zdvihu znamenají méně obslužných úkonů na obrobek a vyšší účinnost pracoviště.',
          hu: 'Aki hétről hétre több tucat korpuszt gyárt, az S2-vel jelentős időt nyer az S1-hez képest — két csap egy löketben kevesebb kezelői műveletet jelent munkadarabonként és nagyobb munkaállomás-hatékonyságot.',
        },
      },
      {
        heading: { de: 'Für Küchen- und Büromöbelhersteller', en: 'For kitchen and office furniture manufacturers', cz: 'Pro výrobce kuchyní a kancelářského nábytku', hu: 'Konyha- és irodabútor-gyártóknak' },
        body: {
          de: 'Küchen- und Büromöbelhersteller mit standardisierten Korpusmaßen profitieren doppelt: Zwei-Dübel-Setzen entspricht vielen Korpusverbindungsschemata genau — die S2 ist damit für diesen Einsatzzweck quasi maßgeschneidert.',
          en: 'Kitchen and office furniture manufacturers with standardised carcass dimensions benefit twice: two-dowel insertion matches many carcass joint schemes exactly — the S2 is thus virtually tailor-made for this use case.',
          cz: 'Výrobci kuchyní a kancelářského nábytku se standardizovanými rozměry korpusu profitují dvakrát: vsazování dvou kolíků přesně odpovídá mnoha schémat korpusového spojení — S2 je tak pro tento účel takřka šita na míru.',
          hu: 'A szabványosított korpuszméretekkel dolgozó konyha- és irodabútor-gyártók kétszeresen profitálnak: a kétcsapos beültetés pontosan megfelel sok korpuszkötési sémának — az S2 így erre a célra szinte testreszabott.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Express S2 ist die richtige Wahl für mittlere Betriebe mit regelmäßigem, aber nicht industriellem Durchsatz. Wer höhere Stückzahlen plant, sollte direkt S3 oder S4 prüfen; für RTA-Möbel ist die Express S2 RTA die logische Variante.',
      en: 'The Express S2 is the right choice for medium operations with regular but not industrial throughput. Anyone planning higher quantities should look directly at S3 or S4; for RTA furniture, the Express S2 RTA is the logical variant.',
      cz: 'Express S2 je správnou volbou pro střední provozy s pravidelným, ale nikoli průmyslovým průtokem. Kdo plánuje vyšší počty kusů, měl by se rovnou podívat na S3 nebo S4; pro RTA nábytek je logickou variantou Express S2 RTA.',
      sk: 'Express S2 je správnou voľbou pre stredné prevádzky s pravidelným, ale nie priemyselným prietokom. Kto plánuje vyššie počty kusov, mal by sa rovno pozrieť na S3 alebo S4; pre RTA nábytok je logickou variantou Express S2 RTA.',
      hu: 'Az Express S2 a megfelelő választás rendszeres, de nem ipari áteresztőképességű közepes üzemeknek. Aki nagyobb darabszámot tervez, közvetlenül az S3-at vagy S4-et érdemes megvizsgálni; RTA-bútorokhoz az Express S2 RTA a logikus változat.',
    },
    faq: [
      {
        question: { de: 'Wie groß ist die Taktzeit-Ersparnis gegenüber S1?', en: 'How large is the cycle time saving versus S1?', cz: 'Jak velká je úspora doby taktu oproti S1?', hu: 'Mekkora a ciklusidő-megtakarítás az S1-hez képest?' },
        answer: {
          de: 'In der Praxis 30–45 Prozent — abhängig vom Werkstück und Bedienerrhythmus.',
          en: 'In practice 30–45 percent — depending on workpiece and operator rhythm.',
          cz: 'V praxi 30–45 procent — v závislosti na obrobku a rytmu obsluhy.',
          sk: 'V praxi 30–45 percent — v závislosti od obrobku a rytmu obsluhy.',
          hu: 'A gyakorlatban 30–45 százalék — a munkadarabtól és a kezelői ritmustól függően.',
        },
      },
      {
        question: { de: 'Sind beide Spindeln unabhängig einstellbar?', en: 'Are both spindles independently adjustable?', cz: 'Jsou obě vřetena nastavitelná nezávisle?', hu: 'Mindkét orsó függetlenül állítható?' },
        answer: {
          de: 'Ja — Abstand und Tiefe pro Spindel mechanisch justierbar.',
          en: 'Yes — spacing and depth per spindle mechanically adjustable.',
          cz: 'Ano — rozteč a hloubka na vřeteno mechanicky nastavitelné.',
          sk: 'Áno — rozstup a hĺbka na vreteno mechanicky nastaviteľné.',
          hu: 'Igen — a távolság és mélység orsónként mechanikusan állítható.',
        },
      },
      {
        question: { de: 'Eignet sich die S2 für RTA-Möbel?', en: 'Is the S2 suitable for RTA furniture?', cz: 'Hodí se S2 pro RTA nábytek?', hu: 'Alkalmas az S2 RTA-bútorokhoz?' },
        answer: {
          de: 'Für reine Dübel ja — für kombinierte Dübel- und Exzenterbeschlagsetzung empfiehlt sich die Express S2 RTA.',
          en: 'For pure dowels yes — for combined dowel and cam connector insertion the Express S2 RTA is recommended.',
          cz: 'Pro čisté kolíky ano — pro kombinované vsazování kolíků a excentrických kování se doporučuje Express S2 RTA.',
          sk: 'Pre čisté kolíky áno — pre kombinované vsadzovanie kolíkov a excentrických kovaní sa odporúča Express S2 RTA.',
          hu: 'Tiszta csapokhoz igen — kombinált csap- és excentrikus csatlakozó-beültetéshez az Express S2 RTA ajánlott.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  FITTING — express-s3                                               */
  /* ------------------------------------------------------------------ */
  'express-s3': {
    longDescription: {
      de: `Die Gannomat Express S3 ist die dreispindelige Mittelklasse der Express-Baureihe — die ausgewogene Kombination aus Durchsatz und Investitionshöhe. Drei Dübel werden in einem Hub gesetzt, was die Maschine für Tagesausstöße bis etwa 300 Korpussen prädestiniert. Typischer Nutzer ist der Korpusfertiger mit regelmäßiger Serienproduktion, der weder die Einstiegsklasse S1/S2 überfordert noch die industriell ausgerichtete S4/S5 überdimensioniert einsetzen will. Die dreifache Setzung passt besonders gut zu Standardkorpussen mit drei Dübelpositionen pro Verbindungslinie — ein in der europäischen Möbelindustrie weit verbreitetes Schema. Asamer liefert die Express S3 als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn, inklusive Einrichtung, Bedienerschulung und langfristigem Ersatzteilservice.`,
      en: `The Gannomat Express S3 is the three-spindle mid-range of the Express series — the balanced combination of throughput and investment level. Three dowels are set in one stroke, which predestines the machine for daily outputs of up to about 300 carcasses. Typical users are carcass producers with regular series production who neither overstrain the entry-class S1/S2 nor oversize the industrially oriented S4/S5. Triple insertion fits particularly well with standard carcasses featuring three dowel positions per joint line — a scheme widely used in the European furniture industry. Asamer supplies the Express S3 as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary, including setup, operator training and long-term spare parts service.`,
      cz: `Gannomat Express S3 je třívřetenová střední třída řady Express — vyvážená kombinace průtoku a výše investice. Tři kolíky se vsazují v jednom zdvihu, což stroj předurčuje pro denní výstupy do přibližně 300 korpusů. Typickým uživatelem je výrobce korpusu s pravidelnou sériovou výrobou, který nechce ani přetížit vstupní třídu S1/S2, ani předimenzovat průmyslově orientovanou S4/S5. Trojité vsazení se obzvlášť dobře hodí ke standardním korpusům se třemi polohami kolíků na spojovací linii — schéma široce rozšířené v evropském nábytkářském průmyslu. Asamer dodává Express S3 jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko, včetně instalace, školení obsluhy a dlouhodobého servisu náhradních dílů.`,
      sk: `Gannomat Express S3 je trojvretenová stredná trieda radu Express — vyvážená kombinácia prietoku a výšky investície. Tri kolíky sa vsadzujú v jednom zdvihu, čo stroj predurčuje pre denné výstupy do približne 300 korpusov. Typickým používateľom je výrobca korpusu s pravidelnou sériovou výrobou, ktorý nechce ani preťažiť vstupnú triedu S1/S2, ani predimenzovať priemyselne orientovanú S4/S5. Trojité vsadenie sa obzvlášť dobre hodí k štandardným korpusom s tromi polohami kolíkov na spojovacej línii — schéma široko rozšírená v európskom nábytkárskom priemysle. Asamer dodáva Express S3 ako autorizovaný predajca Gannomat pre Českú republiku, Slovensko a Maďarsko, vrátane inštalácie, školenia obsluhy a dlhodobého servisu náhradných dielov.`,
      hu: `A Gannomat Express S3 az Express sorozat háromorsós középkategóriája — az áteresztőképesség és a beruházási szint kiegyensúlyozott kombinációja. Három csap ültetődik be egy löketben, ami a gépet napi körülbelül 300 korpuszig terjedő kibocsátásra predesztinálja. Tipikus felhasználó a rendszeres sorozatgyártásban dolgozó korpuszgyártó, aki sem a belépő osztályú S1/S2-t nem akarja túlterhelni, sem az ipari orientációjú S4/S5-öt túlméretezni. A hármas beültetés különösen jól illik a kötésvonalanként három csappozíciójú szabványkorpuszokhoz — ez az európai bútoriparban széles körben elterjedt séma. Az Asamer az Express S3-at hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra, beállítással, kezelői képzéssel és hosszú távú alkatrész-szolgáltatással együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für mittlere Serienproduktion', en: 'For medium series production', cz: 'Pro střední sériovou výrobu', hu: 'Közepes sorozatgyártáshoz' },
        body: {
          de: 'Bei Serien von mehreren hundert Korpussen pro Tag zahlt sich die dritte Spindel deutlich aus. Die S3 bietet spürbar mehr Durchsatz als die S2, ohne in die Investitions- und Platzdimension der industriellen S4/S5 zu wechseln.',
          en: 'With series of several hundred carcasses per day, the third spindle clearly pays off. The S3 offers noticeably more throughput than the S2 without moving into the investment and footprint dimension of the industrial S4/S5.',
          cz: 'U sérií několika set korpusů za den se třetí vřeteno výrazně vyplatí. S3 nabízí citelně vyšší průtok než S2, aniž by přecházel do investiční a prostorové dimenze průmyslové S4/S5.',
          hu: 'Napi több száz korpuszos sorozatoknál a harmadik orsó egyértelműen megtérül. Az S3 érezhetően nagyobb áteresztőképességet kínál, mint az S2, anélkül hogy az ipari S4/S5 beruházási és helyigényi dimenziójába kerülne.',
        },
      },
      {
        heading: { de: 'Für Drei-Punkt-Dübelverbindungen', en: 'For three-point dowel joints', cz: 'Pro trojbodové kolíkové spoje', hu: 'Három csatlakozású csapkötésekhez' },
        body: {
          de: 'Viele Korpusverbindungen nutzen standardmäßig drei Dübel pro Seite. Mit der S3 ist ein Arbeitsschritt damit ein vollständiger Verbindungspunkt — die Anzahl der Werkstückzugriffe sinkt und die Geometrie bleibt konstant.',
          en: 'Many carcass joints use three dowels per side as standard. With the S3, one working step thus means a complete joint point — the number of workpiece handlings decreases and geometry remains consistent.',
          cz: 'Mnoho korpusových spojů standardně používá tři kolíky na stranu. Se S3 tak jedna pracovní operace znamená kompletní spojovací bod — počet manipulací s obrobkem klesá a geometrie zůstává konstantní.',
          hu: 'Sok korpuszkötés szabványosan három csapot használ oldalanként. Az S3-mal így egy munkalépés egy teljes kötéspontot jelent — a munkadarab-kezelések száma csökken és a geometria állandó marad.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Express S3 ist die pragmatische Wahl für serienfertigende Betriebe bis etwa 300 Korpusse pro Tag. Für höhere Stückzahlen ist S4 oder S5 geeigneter; für CNC-gestützte Variantenfertigung die Express S1 CNC oder Vector CNC.',
      en: 'The Express S3 is the pragmatic choice for series-producing operations up to about 300 carcasses per day. For higher quantities, S4 or S5 is more suitable; for CNC-assisted variant production, the Express S1 CNC or Vector CNC.',
      cz: 'Express S3 je pragmatickou volbou pro sériově vyrábějící provozy do přibližně 300 korpusů za den. Pro vyšší počty kusů je vhodnější S4 nebo S5; pro CNC-podporovanou variantní výrobu Express S1 CNC nebo Vector CNC.',
      sk: 'Express S3 je pragmatickou voľbou pre sériovo vyrábajúce prevádzky do približne 300 korpusov za deň. Pre vyššie počty kusov je vhodnejšia S4 alebo S5; pre CNC-podporovanú variantnú výrobu Express S1 CNC alebo Vector CNC.',
      hu: 'Az Express S3 pragmatikus választás sorozatot gyártó üzemeknek napi körülbelül 300 korpuszig. Nagyobb darabszámhoz az S4 vagy S5 alkalmasabb; CNC-támogatott variánsgyártáshoz az Express S1 CNC vagy Vector CNC.',
    },
    faq: [
      {
        question: { de: 'Welche Stückzahlen sind realistisch?', en: 'What quantities are realistic?', cz: 'Jaké počty kusů jsou reálné?', hu: 'Milyen darabszámok reálisak?' },
        answer: {
          de: 'Bis etwa 300 Korpussen pro Schicht bei eingespieltem Bediener und konstanten Werkstücken.',
          en: 'Up to about 300 carcasses per shift with a trained operator and consistent workpieces.',
          cz: 'Až přibližně 300 korpusů za směnu se zacvičenou obsluhou a konstantními obrobky.',
          sk: 'Až približne 300 korpusov za smenu so zacvičenou obsluhou a konštantnými obrobkami.',
          hu: 'Műszakonként körülbelül 300 korpuszig, betanított kezelővel és állandó munkadarabokkal.',
        },
      },
      {
        question: { de: 'Lässt sich der Abstand der Spindeln ändern?', en: 'Can the spindle spacing be changed?', cz: 'Lze změnit rozteč vřeten?', hu: 'Változtatható az orsók távolsága?' },
        answer: {
          de: 'Ja — mechanisch im typischen 32-mm-Raster der Möbelindustrie.',
          en: 'Yes — mechanically in the typical 32 mm grid of the furniture industry.',
          cz: 'Ano — mechanicky v typickém 32mm rastru nábytkářského průmyslu.',
          sk: 'Áno — mechanicky v typickom 32mm rastri nábytkárskeho priemyslu.',
          hu: 'Igen — mechanikusan a bútoripar jellemző 32 mm-es raszterében.',
        },
      },
      {
        question: { de: 'Ist ein Upgrade von S2 möglich?', en: 'Is an upgrade from S2 possible?', cz: 'Je možný upgrade z S2?', hu: 'Lehetséges S2-ről frissítés?' },
        answer: {
          de: 'Nicht als Umbau — aber Bedienkonzept und Wartung sind identisch, was den Umstieg erleichtert.',
          en: 'Not as retrofit — but operating concept and maintenance are identical, which eases the switch.',
          cz: 'Ne jako přestavba — obslužná koncepce a údržba jsou však identické, což přechod usnadňuje.',
          sk: 'Nie ako prestavba — obslužná koncepcia a údržba sú však identické, čo prechod uľahčuje.',
          hu: 'Átalakításként nem — de a kezelési koncepció és a karbantartás azonos, ami megkönnyíti a váltást.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  FITTING — express-s4                                               */
  /* ------------------------------------------------------------------ */
  'express-s4': {
    longDescription: {
      de: `Die Gannomat Express S4 ist die vierspindelige Hochleistungsvariante der Express-Baureihe und richtet sich an Korpusfertiger, die in Richtung industrieller Serienproduktion gehen. Vier Dübel parallel zu setzen bedeutet deutlich höhere Taktraten als bei der S3 — ohne die Investitions- und Platzaufwände einer vollautomatischen Anlage wie Selekta oder Spectrum. Mit der S4 sind Tagesausstöße von etwa 500 Korpussen in einer Schicht gut erreichbar, bei entsprechender Zuführung auch mehr. Die Maschine eignet sich besonders für Möbelhersteller mit stabilen Serien, Küchenbauer mit hohem Volumenanteil und Zulieferbetriebe mit wiederkehrenden Auftragsgrößen. Asamer liefert die Express S4 als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn, inklusive Planung der Arbeitsplatz-Ergonomie und Ersatzteilservice.`,
      en: `The Gannomat Express S4 is the four-spindle high-performance variant of the Express series and is aimed at carcass producers moving towards industrial series production. Setting four dowels in parallel means significantly higher cycle rates than the S3 — without the investment and footprint of a fully automatic system like Selekta or Spectrum. With the S4, daily outputs of around 500 carcasses per shift are well achievable, more with appropriate feeding. The machine is particularly suitable for furniture manufacturers with stable series, kitchen makers with a high volume share and suppliers with recurring order sizes. Asamer supplies the Express S4 as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary, including workstation ergonomics planning and spare parts service.`,
      cz: `Gannomat Express S4 je čtyřvřetenová výkonná varianta řady Express a je určen výrobcům korpusu směřujícím k průmyslové sériové výrobě. Vsazování čtyř kolíků paralelně znamená výrazně vyšší taktovací rychlosti než u S3 — bez investičních a prostorových nároků plně automatického zařízení jako Selekta nebo Spectrum. S S4 jsou denní výstupy přibližně 500 korpusů za směnu dobře dosažitelné, při vhodném podávání i více. Stroj se obzvlášť hodí pro výrobce nábytku se stabilními sériemi, kuchyňaře s vysokým objemovým podílem a dodavatelské provozy s opakujícími se velikostmi zakázek. Asamer dodává Express S4 jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko, včetně plánování ergonomie pracoviště a servisu náhradních dílů.`,
      sk: `Gannomat Express S4 je štvorvretenová výkonná variant radu Express a je určený výrobcom korpusu smerujúcim k priemyselnej sériovej výrobe. Vsadzovanie štyroch kolíkov paralelne znamená výrazne vyššie taktovacie rýchlosti než u S3 — bez investičných a priestorových nárokov plne automatického zariadenia ako Selekta alebo Spectrum. S S4 sú denné výstupy približne 500 korpusov za smenu dobre dosiahnuteľné, pri vhodnom podávaní aj viac. Stroj sa obzvlášť hodí pre výrobcov nábytku so stabilnými sériami, kuchynárov s vysokým objemovým podielom a dodávateľské prevádzky s opakujúcimi sa veľkosťami zákaziek. Asamer dodáva Express S4 ako autorizovaný predajca Gannomat pre Českú republiku, Slovensko a Maďarsko, vrátane plánovania ergonómie pracoviska a servisu náhradných dielov.`,
      hu: `A Gannomat Express S4 az Express sorozat négyorsós, nagy teljesítményű változata, és olyan korpuszgyártóknak szól, akik az ipari sorozatgyártás felé haladnak. Négy csap párhuzamos beültetése lényegesen magasabb ciklusrátát jelent, mint az S3 — a Selekta vagy Spectrum teljesen automatikus rendszereinek beruházási és helyigénye nélkül. Az S4-gyel jól elérhető a műszakonkénti körülbelül 500 korpuszos napi kibocsátás, megfelelő adagolás mellett akár több is. A gép különösen alkalmas stabil sorozatokkal dolgozó bútorgyártóknak, magas volumenhányaddal rendelkező konyhagyártóknak és visszatérő rendelésméretű beszállítóknak. Az Asamer az Express S4-et hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra, a munkaállomás ergonómiai tervezésével és alkatrész-szolgáltatással együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Serienhersteller mit hohem Volumen', en: 'For series producers with high volume', cz: 'Pro sériové výrobce s vysokým objemem', hu: 'Nagyvolumenű sorozatgyártóknak' },
        body: {
          de: 'Bei Tagesausstößen um 500 Korpusse ist die Express S4 optimal positioniert — unterhalb vollautomatischer Systeme, aber klar oberhalb der mittleren Klasse. Vier gleichzeitig setzende Spindeln reduzieren die Bedienzeit pro Werkstück signifikant.',
          en: 'At daily outputs around 500 carcasses, the Express S4 is optimally positioned — below fully automatic systems but clearly above the mid-range. Four simultaneously setting spindles significantly reduce operating time per workpiece.',
          cz: 'Při denních výstupech kolem 500 korpusů je Express S4 optimálně umístěn — pod plně automatickými systémy, ale jasně nad střední třídou. Čtyři současně vsazující vřetena významně snižují dobu obsluhy na obrobek.',
          hu: 'Körülbelül napi 500 korpuszos kibocsátásnál az Express S4 optimálisan elhelyezkedik — a teljesen automatikus rendszerek alatt, de egyértelműen a középkategória fölött. Négy egyidejűleg dolgozó orsó jelentősen csökkenti a munkadarabonkénti kezelési időt.',
        },
      },
      {
        heading: { de: 'Als Basis für eine produktive Vormontagelinie', en: 'As base for a productive pre-assembly line', cz: 'Jako základ produktivní předmontážní linky', hu: 'Termelékeny előszerelő sor alapjaként' },
        body: {
          de: 'Mit Zuführung, Ausgabe und nachgeschalteter Korpuspresse bildet die S4 das Rückgrat einer produktiven Vormontagelinie. Der Bediener konzentriert sich auf Werkstückhandling, die Maschine übernimmt den Dübelsetz-Part in hoher Taktrate.',
          en: 'With infeed, outfeed and downstream carcass press, the S4 forms the backbone of a productive pre-assembly line. The operator focuses on workpiece handling while the machine handles the dowel-setting part at a high cycle rate.',
          cz: 'S podáváním, výstupem a navazujícím korpusovým lisem tvoří S4 páteř produktivní předmontážní linky. Obsluha se soustředí na manipulaci s obrobkem, stroj přebírá část vsazování kolíků při vysoké taktovací frekvenci.',
          hu: 'Behordással, kiadással és utána kapcsolt korpuszpréssel az S4 egy termelékeny előszerelő sor gerincét alkotja. A kezelő a munkadarabkezelésre koncentrál, a gép pedig magas ciklusrátán végzi a csapbeültetést.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Express S4 ist die Wahl für Industrie- und Zulieferbetriebe mit stabilen Serien um 500 Korpusse pro Tag. Wer höhere Stückzahlen oder noch kürzere Taktzeiten braucht, sollte die S5 oder ein CNC-Industrial-Modell wie Spectrum evaluieren.',
      en: 'The Express S4 is the choice for industrial and supplier operations with stable series around 500 carcasses per day. Anyone needing higher quantities or even shorter cycle times should evaluate the S5 or a CNC industrial model like Spectrum.',
      cz: 'Express S4 je volbou pro průmyslové a dodavatelské provozy se stabilními sériemi kolem 500 korpusů za den. Kdo potřebuje vyšší počty kusů nebo ještě kratší doby taktu, by měl zvážit S5 nebo CNC průmyslový model jako Spectrum.',
      sk: 'Express S4 je voľbou pre priemyselné a dodávateľské prevádzky so stabilnými sériami okolo 500 korpusov za deň. Kto potrebuje vyššie počty kusov alebo ešte kratšie doby cyklu, by mal zvážiť S5 alebo CNC priemyselný model ako Spectrum.',
      hu: 'Az Express S4 a választás stabil, napi 500 korpusz körüli sorozatokkal dolgozó ipari és beszállító üzemeknek. Aki nagyobb darabszámot vagy még rövidebb ciklusidőt igényel, az S5-öt vagy egy ipari CNC modellt, például a Spectrumot érdemes megvizsgálnia.',
    },
    faq: [
      {
        question: { de: 'Wie groß ist der Unterschied zur S3?', en: 'How big is the difference to the S3?', cz: 'Jak velký je rozdíl oproti S3?', hu: 'Mekkora a különbség az S3-hoz képest?' },
        answer: {
          de: 'Rund 25–35 Prozent höherer Durchsatz — abhängig vom Korpustyp und der Zuführung.',
          en: 'Around 25–35 percent higher throughput — depending on carcass type and feeding.',
          cz: 'Zhruba o 25–35 procent vyšší průtok — v závislosti na typu korpusu a podávání.',
          sk: 'Zhruba o 25–35 percent vyšší prietok — v závislosti od typu korpusu a podávania.',
          hu: 'Körülbelül 25–35 százalékkal nagyobb áteresztőképesség — a korpusztípustól és az adagolástól függően.',
        },
      },
      {
        question: { de: 'Braucht die S4 spezielle Bediener?', en: 'Does the S4 need special operators?', cz: 'Potřebuje S4 speciální obsluhu?', hu: 'Speciális kezelőket igényel az S4?' },
        answer: {
          de: 'Nein — vergleichbar mit S2/S3. Die Schulung erfolgt über Asamer direkt am Arbeitsplatz.',
          en: 'No — comparable to S2/S3. Training is provided by Asamer directly at the workstation.',
          cz: 'Ne — srovnatelné s S2/S3. Školení probíhá přes Asamer přímo na pracovišti.',
          sk: 'Nie — porovnateľné s S2/S3. Školenie prebieha cez Asamer priamo na pracovisku.',
          hu: 'Nem — az S2/S3-mal összevethető. A képzést az Asamer közvetlenül a munkaállomáson biztosítja.',
        },
      },
      {
        question: { de: 'Passt die S4 in eine bestehende Linie?', en: 'Does the S4 fit into an existing line?', cz: 'Vejde se S4 do stávající linky?', hu: 'Beleillik az S4 egy meglévő sorba?' },
        answer: {
          de: 'In der Regel ja — Asamer plant die Integration inklusive Zu- und Abförderung.',
          en: 'As a rule yes — Asamer plans integration including infeed and outfeed conveying.',
          cz: 'Zpravidla ano — Asamer plánuje integraci včetně vstupního a výstupního dopravníku.',
          sk: 'Spravidla áno — Asamer plánuje integráciu vrátane vstupného a výstupného dopravníka.',
          hu: 'Általában igen — az Asamer a be- és kivezetést is tartalmazó integrációt megtervezi.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  FITTING — express-s1-rta                                           */
  /* ------------------------------------------------------------------ */
  'express-s1-rta': {
    longDescription: {
      de: `Die Gannomat Express S1 RTA kombiniert die Einspindel-Plattform der Express S1 mit einer Beschlagsetzfunktion für Ready-to-Assemble-Möbel. Neben dem Holzdübel setzt die Maschine auch Exzenterbeschläge oder ähnliche Verbinder, die beim Endkunden oder Monteur die werkzeuglose Montage erlauben. Für Hersteller von Bausatzmöbeln, die im Versandhandel oder in der Direktvermarktung tätig sind, ist die RTA-Variante der entscheidende Unterschied zur Standardmaschine — ein einziger Arbeitsplatz deckt Dübel- und Beschlagsetzung ab. Die S1 RTA richtet sich an kleinere Produzenten oder Werkstätten, die in das RTA-Segment einsteigen oder ihre bestehende Dübelmaschine um die Beschlagfunktion ergänzen wollen. Asamer liefert die Express S1 RTA als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn.`,
      en: `The Gannomat Express S1 RTA combines the single-spindle platform of the Express S1 with a fitting insertion function for ready-to-assemble furniture. In addition to the wooden dowel, the machine also sets cam connectors or similar connectors that allow the end customer or assembler to perform tool-free assembly. For manufacturers of flat-pack furniture operating in mail order or direct sales, the RTA variant is the decisive difference from the standard machine — a single workstation covers dowel and fitting insertion. The S1 RTA is aimed at smaller producers or workshops entering the RTA segment or wishing to extend their existing dowel machine with the fitting function. Asamer supplies the Express S1 RTA as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary.`,
      cz: `Gannomat Express S1 RTA kombinuje jednovřetenovou platformu Express S1 s funkcí vsazování kování pro Ready-to-Assemble nábytek. Kromě dřevěného kolíku stroj vsazuje také excentrická kování nebo podobné spojovací prvky, které u koncového zákazníka nebo montéra umožňují bezkladičkovou montáž. Pro výrobce stavebnicového nábytku působící v zásilkovém prodeji nebo přímé distribuci je RTA varianta rozhodujícím rozdílem oproti standardnímu stroji — jediné pracoviště pokrývá vsazování kolíků i kování. S1 RTA je určen menším výrobcům nebo dílnám, kteří vstupují do segmentu RTA nebo chtějí svůj stávající kolíkovací stroj doplnit o funkci vsazování kování. Asamer dodává Express S1 RTA jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko.`,
      sk: `Gannomat Express S1 RTA kombinuje jednovretenovú platformu Express S1 s funkciou vsadzovania kovania pre Ready-to-Assemble nábytok. Okrem dreveného kolíka stroj vsadzuje aj excentrické kovania alebo podobné spojovacie prvky, ktoré u koncového zákazníka alebo montéra umožňujú bezkladičkovú montáž. Pre výrobcov stavebnicového nábytku pôsobiacich v zásielkovom predaji alebo priamej distribúcii je RTA variant rozhodujúcim rozdielom oproti štandardnému stroju — jediné pracovisko pokrýva vsadzovanie kolíkov aj kovania. S1 RTA je určený menším výrobcom alebo dielňam, ktorí vstupujú do segmentu RTA alebo chcú svoj existujúci kolíkovací stroj doplniť o funkciu vsadzovania kovania. Asamer dodáva Express S1 RTA ako autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko.`,
      hu: `A Gannomat Express S1 RTA az Express S1 egyorsós platformját ötvözi egy szerelvénybeültető funkcióval lapra szerelt (Ready-to-Assemble) bútorokhoz. A facsapon kívül a gép excentrikus csatlakozókat vagy hasonló összekötőket is beültet, amelyek lehetővé teszik a végfelhasználó vagy a szerelő számára a szerszám nélküli összeszerelést. Csomagbútort gyártóknak, akik csomagküldő kereskedelemben vagy közvetlen értékesítésben tevékenykednek, az RTA-változat a döntő különbség a szabványos géphez képest — egyetlen munkaállomás lefedi a csap- és szerelvénybeültetést. Az S1 RTA kisebb gyártóknak vagy műhelyeknek szól, akik az RTA-szegmensbe lépnek be, vagy a meglévő csapgépüket szerelvénybeültető funkcióval szeretnék kiegészíteni. Az Asamer az Express S1 RTA-t hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Hersteller von Bausatzmöbeln', en: 'For flat-pack furniture manufacturers', cz: 'Pro výrobce stavebnicového nábytku', hu: 'Csomagbútort gyártóknak' },
        body: {
          de: 'RTA-Möbel leben davon, dass der Endkunde sie mit wenigen Handgriffen montieren kann. Das setzt voraus, dass Exzenterbeschläge und Dübel bereits werkseitig perfekt positioniert sind. Genau das leistet die S1 RTA — präzise und reproduzierbar.',
          en: 'RTA furniture thrives on the end customer being able to assemble it in a few steps. This requires cam connectors and dowels to be perfectly positioned at the factory. That is exactly what the S1 RTA delivers — precisely and reproducibly.',
          cz: 'RTA nábytek žije z toho, že jej koncový zákazník zvládne smontovat několika pohyby. To vyžaduje, aby excentrická kování a kolíky byly již z výroby perfektně umístěné. Přesně to S1 RTA poskytuje — přesně a reprodukovatelně.',
          hu: 'Az RTA-bútor abból él, hogy a végfelhasználó néhány mozdulattal össze tudja szerelni. Ehhez az excentrikus csatlakozókat és csapokat már gyárilag tökéletesen kell elhelyezni. Pontosan ezt nyújtja az S1 RTA — pontosan és reprodukálhatóan.',
        },
      },
      {
        heading: { de: 'Als Einstieg in die Beschlagsetzung', en: 'As entry into fitting insertion', cz: 'Jako vstup do vsazování kování', hu: 'Belépés a szerelvénybeültetésbe' },
        body: {
          de: 'Wer bisher nur Dübel gesetzt hat und mit einer ersten RTA-Linie starten will, findet in der S1 RTA eine überschaubare Investition. Eine Spindel, beide Funktionen — klarer Schritt in ein neues Produktsegment.',
          en: 'Anyone who has so far only set dowels and wants to start with a first RTA line finds a manageable investment in the S1 RTA. One spindle, both functions — a clear step into a new product segment.',
          cz: 'Kdo dosud vsazoval jen kolíky a chce začít s první RTA linkou, najde v S1 RTA přehlednou investici. Jedno vřeteno, obě funkce — jasný krok do nového produktového segmentu.',
          hu: 'Aki eddig csak csapokat ültetett be, és első RTA-vonallal szeretne indulni, áttekinthető beruházást talál az S1 RTA-ban. Egy orsó, mindkét funkció — egyértelmű lépés egy új termékszegmensbe.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Express S1 RTA ist ideal für kleine bis mittlere RTA-Produzenten. Wer mehr Stückzahlen fertigt, sollte direkt die Express S2 RTA wählen; bei variantenreicher Produktion lohnt Vector CNC oder Spectrum mit Beschlagsetzung.',
      en: 'The Express S1 RTA is ideal for small to medium RTA producers. Anyone producing higher quantities should go directly for the Express S2 RTA; for variant-rich production, Vector CNC or Spectrum with fitting insertion is worthwhile.',
      cz: 'Express S1 RTA je ideální pro malé až střední výrobce RTA. Kdo vyrábí vyšší počty kusů, by měl zvolit rovnou Express S2 RTA; při variantně bohaté výrobě se vyplatí Vector CNC nebo Spectrum se vsazováním kování.',
      sk: 'Express S1 RTA je ideálny pre malých až stredných výrobcov RTA. Kto vyrába vyššie počty kusov, by mal zvoliť rovno Express S2 RTA; pri variantne bohatej výrobe sa oplatí Vector CNC alebo Spectrum s vsadzovaním kovania.',
      hu: 'Az Express S1 RTA ideális kis és közepes RTA-gyártóknak. Aki nagyobb darabszámokat gyárt, közvetlenül az Express S2 RTA-t válassza; változatos gyártáshoz a Vector CNC vagy a szerelvénybeültetéssel ellátott Spectrum éri meg.',
    },
    faq: [
      {
        question: { de: 'Welche Beschlagsysteme werden unterstützt?', en: 'What fitting systems are supported?', cz: 'Jaké systémy kování jsou podporovány?', hu: 'Milyen szerelvényrendszerek támogatottak?' },
        answer: {
          de: 'Gängige Exzenterbeschläge der europäischen Möbelindustrie — die genaue Liste stimmt Asamer vor dem Kauf mit Ihnen ab.',
          en: 'Common cam connectors of the European furniture industry — Asamer coordinates the exact list with you before purchase.',
          cz: 'Běžná excentrická kování evropského nábytkářského průmyslu — přesný seznam Asamer upřesní před nákupem.',
          sk: 'Bežné excentrické kovania európskeho nábytkárskeho priemyslu — presný zoznam Asamer upresní pred nákupom.',
          hu: 'Az európai bútoripar szokásos excentrikus csatlakozói — a pontos listát az Asamer a vásárlás előtt egyezteti Önnel.',
        },
      },
      {
        question: { de: 'Wird zwischen Dübel und Beschlag umgerüstet?', en: 'Is changeover needed between dowel and fitting?', cz: 'Přestavuje se mezi kolíkem a kováním?', hu: 'Át kell állítani csap és szerelvény között?' },
        answer: {
          de: 'Ja — schneller Werkzeugwechsel, typisch in wenigen Minuten erledigt.',
          en: 'Yes — quick tool change, typically done in a few minutes.',
          cz: 'Ano — rychlá výměna nástroje, obvykle za několik minut.',
          sk: 'Áno — rýchla výmena nástroja, obvykle za niekoľko minút.',
          hu: 'Igen — gyors szerszámcsere, jellemzően néhány perc alatt.',
        },
      },
      {
        question: { de: 'Eignet sich die S1 RTA für OEM-Aufträge?', en: 'Is the S1 RTA suitable for OEM orders?', cz: 'Hodí se S1 RTA pro OEM zakázky?', hu: 'Alkalmas az S1 RTA OEM-rendelésekhez?' },
        answer: {
          de: 'Für kleine OEM-Aufträge ja — bei größeren Mengen empfehlen wir Express S2 RTA oder eine CNC-gestützte Lösung.',
          en: 'For small OEM orders yes — for larger quantities we recommend Express S2 RTA or a CNC-assisted solution.',
          cz: 'Pro malé OEM zakázky ano — u větších množství doporučujeme Express S2 RTA nebo CNC-podporované řešení.',
          sk: 'Pre malé OEM zákazky áno — pri väčších množstvách odporúčame Express S2 RTA alebo CNC-podporované riešenie.',
          hu: 'Kis OEM-rendelésekhez igen — nagyobb mennyiségekhez az Express S2 RTA-t vagy egy CNC-támogatott megoldást ajánljuk.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  FITTING — express-s2-rta                                           */
  /* ------------------------------------------------------------------ */
  'express-s2-rta': {
    longDescription: {
      de: `Die Gannomat Express S2 RTA erweitert die RTA-Funktionalität auf eine zweispindelige Maschine — und ist damit die erste Wahl für RTA-Produzenten mit ernsthaftem Durchsatzbedarf. Die zwei Spindeln setzen Dübel und Exzenterbeschläge gleichermaßen, was bei typischen Flatpack-Korpussen mit beidseitigen Verbinderpositionen die Taktzeit erheblich senkt. Hersteller von Küchen- und Schrankbausatzsystemen, die im E-Commerce oder Versandhandel tätig sind, nutzen die S2 RTA, um wirtschaftlich größere Mengen vorbereitet zu liefern — ohne vollautomatische Anlage, aber weit oberhalb einer Einzelspindel. Die Maschine teilt Plattform und Service mit der Express-Baureihe, was den Aufbau einer einheitlichen Werkstattumgebung erleichtert. Asamer liefert die Express S2 RTA als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn.`,
      en: `The Gannomat Express S2 RTA extends the RTA functionality to a two-spindle machine — and is thus the first choice for RTA producers with serious throughput demand. The two spindles set dowels and cam connectors alike, which significantly reduces cycle time in typical flatpack carcasses with connector positions on both sides. Manufacturers of kitchen and cupboard kit systems operating in e-commerce or mail order use the S2 RTA to deliver larger quantities economically prepared — without a fully automatic plant, but well above a single-spindle. The machine shares platform and service with the Express series, which simplifies building a uniform workshop environment. Asamer supplies the Express S2 RTA as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary.`,
      cz: `Gannomat Express S2 RTA rozšiřuje RTA funkcionalitu na dvouvřetenový stroj — a je tak první volbou pro RTA výrobce s vážným nárokem na průtok. Obě vřetena vsazují stejnou měrou kolíky i excentrická kování, což u typických flatpackových korpusů s polohami spojovacích prvků na obou stranách významně snižuje dobu taktu. Výrobci kuchyňských a skříňových stavebnicových systémů působící v e-commerce nebo zásilkovém prodeji využívají S2 RTA k ekonomicky efektivní přípravě větších množství — bez plně automatického zařízení, ale výrazně nad jednovřetenový stroj. Stroj sdílí platformu a servis s řadou Express, což usnadňuje budování jednotného dílenského prostředí. Asamer dodává Express S2 RTA jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko.`,
      sk: `Gannomat Express S2 RTA rozširuje RTA funkcionalitu na dvojvretenový stroj — a je tak prvou voľbou pre RTA výrobcov s vážnym nárokom na prietok. Obe vretená vsadzujú rovnakou mierou kolíky aj excentrické kovania, čo pri typických flatpack korpusoch s polohami spojovacích prvkov na oboch stranách významne znižuje dobu cyklu. Výrobcovia kuchynských a skriňových stavebnicových systémov pôsobiaci v e-commerce alebo zásielkovom predaji využívajú S2 RTA na ekonomicky efektívnu prípravu väčších množstiev — bez plne automatického zariadenia, ale výrazne nad jednovretenový stroj. Stroj zdieľa platformu a servis s radom Express, čo uľahčuje budovanie jednotného dielenského prostredia. Asamer dodáva Express S2 RTA ako autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko.`,
      hu: `A Gannomat Express S2 RTA az RTA-funkcionalitást kétorsós gépre terjeszti ki — és így első számú választás komoly áteresztőképesség-igényű RTA-gyártóknak. A két orsó egyaránt ültet be csapokat és excentrikus csatlakozókat, ami a kétoldali csatlakozópozíciójú tipikus csomagbútor-korpuszoknál jelentősen csökkenti a ciklusidőt. E-kereskedelemben vagy csomagküldésben tevékenykedő konyha- és szekrényrendszer-gyártók az S2 RTA-t arra használják, hogy nagyobb mennyiségeket gazdaságosan előkészítve szállítsanak — teljesen automatikus üzem nélkül, de az egyorsós gépnél jóval magasabb szinten. A gép platformja és szervize közös az Express sorozattal, ami megkönnyíti az egységes műhelykörnyezet kialakítását. Az Asamer az Express S2 RTA-t hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für E-Commerce-Möbelanbieter', en: 'For e-commerce furniture providers', cz: 'Pro e-commerce nabízející nábytek', hu: 'E-kereskedelmi bútorforgalmazóknak' },
        body: {
          de: 'Wer Möbel als Bausatz im Internet verkauft, steht unter dauerhaftem Volumendruck. Die S2 RTA liefert ausreichend Durchsatz, um E-Commerce-Stückzahlen abzubilden — bei gleichzeitig konstanter Qualität, die Reklamationen minimiert.',
          en: 'Anyone selling furniture as a kit online is under permanent volume pressure. The S2 RTA delivers enough throughput to meet e-commerce quantities — while maintaining consistent quality that minimises complaints.',
          cz: 'Kdo prodává nábytek jako stavebnici na internetu, je pod trvalým objemovým tlakem. S2 RTA poskytuje dostatečný průtok pro e-commerce počty — při zároveň konstantní kvalitě, která minimalizuje reklamace.',
          hu: 'Aki bútort csomagolt áruként árul az interneten, állandó volumennyomás alatt áll. Az S2 RTA elegendő áteresztőképességet biztosít az e-kereskedelmi mennyiségek kiszolgálásához — egyidejűleg állandó minőség mellett, amely minimalizálja a reklamációkat.',
        },
      },
      {
        heading: { de: 'Für Küchen- und Schrankbausätze', en: 'For kitchen and cabinet kits', cz: 'Pro kuchyňské a skříňové stavebnice', hu: 'Konyha- és szekrénycsomagokhoz' },
        body: {
          de: 'Küchen- und Schrankbausätze haben typisch zwei Verbindungspositionen pro Korpusseite. Die zwei Spindeln der S2 RTA decken genau dieses Schema ab und halbieren die Bearbeitungszeit gegenüber Einzelspindel-Lösungen.',
          en: 'Kitchen and cabinet kits typically have two joint positions per carcass side. The two spindles of the S2 RTA cover exactly this scheme and halve processing time compared to single-spindle solutions.',
          cz: 'Kuchyňské a skříňové stavebnice mají typicky dvě polohy spojení na stranu korpusu. Dvě vřetena S2 RTA pokrývají přesně toto schéma a zkracují dobu zpracování oproti jednovřetenovým řešením na polovinu.',
          hu: 'A konyha- és szekrénycsomagok tipikusan két kötéspozícióval rendelkeznek korpuszoldalanként. Az S2 RTA két orsója pontosan ezt a sémát fedi le, és az egyorsós megoldásokhoz képest felére csökkenti a feldolgozási időt.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Express S2 RTA ist die wirtschaftliche Mittellinie für RTA-Möbelhersteller. Wer kleine Stückzahlen fährt, kommt mit der S1 RTA günstiger; Industriekunden mit hohem Varianz- und Volumenanteil sollten Spectrum oder Vector CNC prüfen.',
      en: 'The Express S2 RTA is the economical middle line for RTA furniture manufacturers. Anyone running small quantities is cheaper off with the S1 RTA; industrial customers with high variant and volume share should evaluate Spectrum or Vector CNC.',
      cz: 'Express S2 RTA je ekonomickou středovou linií pro výrobce RTA nábytku. Kdo jede malé počty kusů, vyjde levněji s S1 RTA; průmysloví zákazníci s vysokým podílem variant a objemu by měli zvážit Spectrum nebo Vector CNC.',
      sk: 'Express S2 RTA je ekonomickou strednou líniou pre výrobcov RTA nábytku. Kto ide malé počty kusov, vyjde lacnejšie s S1 RTA; priemyselní zákazníci s vysokým podielom variantov a objemu by mali zvážiť Spectrum alebo Vector CNC.',
      hu: 'Az Express S2 RTA a gazdaságos középvonal az RTA-bútorgyártóknak. Aki kis darabszámot gyárt, olcsóbban jár az S1 RTA-val; nagy variáns- és volumenarányú ipari vásárlóknak a Spectrum vagy Vector CNC megvizsgálása javasolt.',
    },
    faq: [
      {
        question: { de: 'Wie groß ist der Durchsatzvorteil gegenüber S1 RTA?', en: 'How big is the throughput advantage over S1 RTA?', cz: 'Jak velká je výhoda průtoku oproti S1 RTA?', hu: 'Mekkora az áteresztőképesség-előny az S1 RTA-val szemben?' },
        answer: {
          de: 'In der Praxis 30–50 Prozent mehr — abhängig vom Werkstück und Anteil Beschlagsetzungen.',
          en: 'In practice 30–50 percent more — depending on workpiece and fitting insertion share.',
          cz: 'V praxi o 30–50 procent více — v závislosti na obrobku a podílu vsazování kování.',
          sk: 'V praxi o 30–50 percent viac — v závislosti od obrobku a podielu vsadzovania kovania.',
          hu: 'A gyakorlatban 30–50 százalékkal több — a munkadarabtól és a szerelvénybeültetési aránytól függően.',
        },
      },
      {
        question: { de: 'Können Dübel und Beschlag in einem Werkstück kombiniert werden?', en: 'Can dowels and fittings be combined in one workpiece?', cz: 'Lze kombinovat kolíky a kování v jednom obrobku?', hu: 'Kombinálhatók csapok és szerelvények egy munkadarabban?' },
        answer: {
          de: 'Ja — nacheinander mit schnellem Werkzeugwechsel zwischen den Spindeln.',
          en: 'Yes — consecutively with quick tool change between spindles.',
          cz: 'Ano — postupně s rychlou výměnou nástroje mezi vřeteny.',
          sk: 'Áno — postupne s rýchlou výmenou nástroja medzi vretenami.',
          hu: 'Igen — egymás után, gyors szerszámcserével az orsók között.',
        },
      },
      {
        question: { de: 'Gibt es Erfahrungen mit großen RTA-Herstellern?', en: 'Is there experience with large RTA manufacturers?', cz: 'Existují zkušenosti s velkými výrobci RTA?', hu: 'Van tapasztalat nagy RTA-gyártókkal?' },
        answer: {
          de: 'Ja — Gannomat-Referenzen in der europäischen RTA-Industrie sind umfangreich; Asamer vermittelt Kontakte zu bestehenden Anwendern.',
          en: 'Yes — Gannomat references in the European RTA industry are extensive; Asamer arranges contacts with existing users.',
          cz: 'Ano — reference Gannomat v evropském průmyslu RTA jsou rozsáhlé; Asamer zprostředkuje kontakty na stávající uživatele.',
          sk: 'Áno — referencie Gannomat v európskom priemysle RTA sú rozsiahle; Asamer sprostredkuje kontakty na existujúcich používateľov.',
          hu: 'Igen — a Gannomat referenciái az európai RTA-iparban kiterjedtek; az Asamer meglévő felhasználókkal való kapcsolatfelvételt közvetít.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  FITTING — express-s1-cnc                                           */
  /* ------------------------------------------------------------------ */
  'express-s1-cnc': {
    longDescription: {
      de: `Die Gannomat Express S1 CNC verbindet die bewährte Einspindel-Plattform der Express-Baureihe mit einer CNC-Steuerung, die variable Bohrbilder per Programmwahl statt mechanischer Umrüstung ermöglicht. Das ist der entscheidende Unterschied zur klassischen S1: Während die Standardmaschine mit festen Lochabständen arbeitet, lässt sich die CNC-Variante per Knopfdruck auf unterschiedliche Korpusmaße und Dübelpositionen umstellen. Für Tischlereien mit wechselndem Auftragsmix — etwa Einbaumöbel, Sonderkorpussen oder Mischprogrammen aus Standard und Maß — ist das ein echter Produktivitätsgewinn. Die S1 CNC bleibt eine halbautomatische Maschine: Der Bediener legt das Werkstück auf, die CNC-Steuerung positioniert. Asamer liefert die Express S1 CNC als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn.`,
      en: `The Gannomat Express S1 CNC combines the proven single-spindle platform of the Express series with a CNC control that enables variable drilling patterns via program selection instead of mechanical changeover. That is the decisive difference from the classic S1: while the standard machine works with fixed hole spacings, the CNC variant can be switched to different carcass dimensions and dowel positions at the push of a button. For joinery shops with a changing order mix — such as built-in furniture, special carcasses or mixed programmes of standard and made-to-measure — this is a genuine productivity gain. The S1 CNC remains a semi-automatic machine: the operator places the workpiece, the CNC control positions. Asamer supplies the Express S1 CNC as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary.`,
      cz: `Gannomat Express S1 CNC spojuje osvědčenou jednovřetenovou platformu řady Express s CNC řízením, které umožňuje variabilní vrtací vzory volbou programu namísto mechanické přestavby. To je rozhodující rozdíl oproti klasické S1: zatímco standardní stroj pracuje s pevnými roztečemi otvorů, CNC varianta se dá stisknutím tlačítka přepnout na různé rozměry korpusu a polohy kolíků. Pro truhlárny s měnícím se mixem zakázek — například vestavěný nábytek, speciální korpusy nebo smíšené programy ze standardu a zakázky na míru — je to skutečný nárůst produktivity. S1 CNC zůstává poloautomatickým strojem: obsluha přiloží obrobek, CNC řízení polohuje. Asamer dodává Express S1 CNC jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko.`,
      sk: `Gannomat Express S1 CNC spája osvedčenú jednovretenovú platformu radu Express s CNC riadením, ktoré umožňuje variabilné vrtacie vzory voľbou programu namiesto mechanickej prestavby. To je rozhodujúci rozdiel oproti klasickej S1: kým štandardný stroj pracuje s pevnými rozstupmi otvorov, CNC variant sa dá stlačením tlačidla prepnúť na rôzne rozmery korpusu a polohy kolíkov. Pre stolárstva s meniacim sa mixom zákaziek — napríklad vstavaný nábytok, špeciálne korpusy alebo zmiešané programy zo štandardu a zákazky na mieru — je to skutočný nárast produktivity. S1 CNC zostáva poloautomatickým strojom: obsluha priloží obrobok, CNC riadenie polohuje. Asamer dodáva Express S1 CNC ako autorizovaný predajca Gannomat pre Českú republiku, Slovensko a Maďarsko.`,
      hu: `A Gannomat Express S1 CNC az Express sorozat bevált egyorsós platformját egy CNC-vezérléssel ötvözi, amely programválasztással teszi lehetővé a változó fúrási mintákat mechanikus átállítás helyett. Ez a döntő különbség a klasszikus S1-hez képest: míg a szabványos gép rögzített lyuktávolságokkal dolgozik, a CNC-változat gombnyomásra átállítható különböző korpuszméretekre és csappozíciókra. Változó rendelésmixszel dolgozó asztalosüzemek számára — például beépített bútorok, egyedi korpuszok vagy szabvány és méretre szabott vegyes programok — ez valódi termelékenységi nyereség. Az S1 CNC félautomatikus gép marad: a kezelő behelyezi a munkadarabot, a CNC-vezérlés pozicionál. Az Asamer az Express S1 CNC-t hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für variantenreiche Tischlereien', en: 'For variant-rich joinery shops', cz: 'Pro variantně bohaté truhlárny', hu: 'Változatos asztalosüzemekhez' },
        body: {
          de: 'Wenn heute eine Küche, morgen ein Büroregal und übermorgen ein Einbauschrank ansteht, sind mechanische Umrüstungen der limitierende Faktor. Die CNC-Steuerung der S1 CNC löst dieses Problem — das Bohrbild wechselt per Programmwahl innerhalb von Sekunden.',
          en: 'When a kitchen is due today, office shelving tomorrow and a built-in cupboard the day after, mechanical changeovers are the limiting factor. The CNC control of the S1 CNC solves this problem — the drilling pattern switches via program selection within seconds.',
          cz: 'Když je dnes kuchyně, zítra kancelářský regál a pozítří vestavěná skříň, jsou mechanické přestavby limitujícím faktorem. CNC řízení S1 CNC tento problém řeší — vrtací vzor se mění volbou programu během několika sekund.',
          hu: 'Amikor ma egy konyha, holnap egy irodai polc, holnapután pedig egy beépített szekrény van soron, a mechanikus átállítások jelentik a korlátozó tényezőt. Az S1 CNC CNC-vezérlése megoldja ezt a problémát — a fúrásminta programválasztással másodperceken belül vált.',
        },
      },
      {
        heading: { de: 'Für Betriebe mit digitaler Fertigungskette', en: 'For operations with digital production chain', cz: 'Pro provozy s digitálním výrobním řetězcem', hu: 'Digitális gyártási lánccal rendelkező üzemekhez' },
        body: {
          de: 'Wer CAD/CAM und digitale Auftragsverwaltung einsetzt, kann Bohrprogramme direkt aus dem Konstruktionssystem an die S1 CNC übertragen. Das Asamer-Softwareteam unterstützt bei der Integration in gängige Möbel-CAD-Systeme.',
          en: 'Anyone using CAD/CAM and digital order management can transfer drilling programs directly from the design system to the S1 CNC. The Asamer software team supports integration with common furniture CAD systems.',
          cz: 'Kdo používá CAD/CAM a digitální správu zakázek, může přenášet vrtací programy přímo z konstrukčního systému do S1 CNC. Softwarový tým Asamer podporuje integraci s běžnými nábytkářskými CAD systémy.',
          hu: 'Aki CAD/CAM-et és digitális rendeléskezelést használ, a fúrási programokat közvetlenül a tervezőrendszerből viheti át az S1 CNC-re. Az Asamer szoftvercsapata támogatja a bevett bútor-CAD-rendszerekkel való integrációt.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Express S1 CNC ist die richtige Wahl für variantenreiche Betriebe mit moderatem Durchsatz. Wer große Serien gleicher Korpusse fertigt, fährt mit Express S2/S3 günstiger; bei sehr hoher Variantenzahl und Durchsatz lohnen Vector CNC oder Spectrum.',
      en: 'The Express S1 CNC is the right choice for variant-rich operations with moderate throughput. Anyone producing large series of identical carcasses runs more cheaply with Express S2/S3; for very high variant counts and throughput, Vector CNC or Spectrum are worthwhile.',
      cz: 'Express S1 CNC je správnou volbou pro variantně bohaté provozy se středním průtokem. Kdo vyrábí velké série stejných korpusů, jezdí levněji s Express S2/S3; při velmi vysokém počtu variant a průtoku se vyplatí Vector CNC nebo Spectrum.',
      sk: 'Express S1 CNC je správnou voľbou pre variantne bohaté prevádzky so stredným prietokom. Kto vyrába veľké série rovnakých korpusov, jazdí lacnejšie s Express S2/S3; pri veľmi vysokom počte variantov a prietoku sa oplatí Vector CNC alebo Spectrum.',
      hu: 'Az Express S1 CNC a megfelelő választás változatos, közepes áteresztőképességű üzemekhez. Aki nagy sorozatban ugyanolyan korpuszokat gyárt, olcsóbban dolgozik Express S2/S3-mal; nagyon nagy variánsszám és áteresztőképesség esetén a Vector CNC vagy Spectrum éri meg.',
    },
    faq: [
      {
        question: { de: 'Welche Programmzahl kann gespeichert werden?', en: 'How many programs can be stored?', cz: 'Kolik programů lze uložit?', hu: 'Hány program tárolható?' },
        answer: {
          de: 'In der Praxis unbegrenzt — die Steuerung erlaubt die Ablage aller üblichen Möbelprogramme inklusive Kundenvarianten.',
          en: 'In practice unlimited — the control allows storage of all common furniture programs including customer variants.',
          cz: 'V praxi neomezeně — řízení umožňuje uložení všech běžných nábytkářských programů včetně zákaznických variant.',
          sk: 'V praxi neobmedzene — riadenie umožňuje uloženie všetkých bežných nábytkárskych programov vrátane zákazníckych variantov.',
          hu: 'A gyakorlatban korlátlan — a vezérlés minden szokásos bútoripari program tárolását lehetővé teszi, beleértve a vevői változatokat is.',
        },
      },
      {
        question: { de: 'Wie anspruchsvoll ist die Bedienerschulung?', en: 'How demanding is operator training?', cz: 'Jak náročné je školení obsluhy?', hu: 'Mennyire igényes a kezelői képzés?' },
        answer: {
          de: 'Erfahrene Dübelmaschinen-Bediener sind nach ein bis zwei Tagen einsatzbereit — komplexere Programmierung wird bei Asamer vertieft.',
          en: 'Experienced dowel machine operators are ready for use after one to two days — more complex programming is deepened at Asamer.',
          cz: 'Zkušené obsluhy kolíkovacích strojů jsou nasaditelné po jednom až dvou dnech — složitější programování se prohlubuje u Asamer.',
          sk: 'Skúsené obsluhy kolíkovacích strojov sú nasaditeľné po jednom až dvoch dňoch — zložitejšie programovanie sa prehlbuje u Asamer.',
          hu: 'A tapasztalt csapgép-kezelők egy-két nap alatt bevethetők — az összetettebb programozást az Asamernél mélyítjük el.',
        },
      },
      {
        question: { de: 'Ist die S1 CNC für RTA-Produktion geeignet?', en: 'Is the S1 CNC suitable for RTA production?', cz: 'Hodí se S1 CNC pro RTA výrobu?', hu: 'Alkalmas az S1 CNC RTA-gyártáshoz?' },
        answer: {
          de: 'Für reine Dübelsetzung ja — für kombinierte Beschlag- und Dübelmontage empfehlen wir Express S1 RTA oder Vector CNC.',
          en: 'For pure dowel insertion yes — for combined fitting and dowel assembly we recommend Express S1 RTA or Vector CNC.',
          cz: 'Pro čisté vsazování kolíků ano — pro kombinovanou montáž kování a kolíků doporučujeme Express S1 RTA nebo Vector CNC.',
          sk: 'Pre čisté vsadzovanie kolíkov áno — pre kombinovanú montáž kovania a kolíkov odporúčame Express S1 RTA alebo Vector CNC.',
          hu: 'Tiszta csapbeültetéshez igen — kombinált szerelvény- és csapszereléshez az Express S1 RTA-t vagy Vector CNC-t ajánljuk.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  FITTING — express-807                                              */
  /* ------------------------------------------------------------------ */
  'express-807': {
    longDescription: {
      de: `Die Gannomat Express 807 ist eine Sonderausführung der Express-Baureihe mit besonders hoher Spindelzahl, die gezielt auf bestimmte Produktionsaufgaben zugeschnitten ist. Während die klassischen Express-Modelle S1–S5 linear mehr Spindeln entlang einer Achse ergänzen, adressiert die 807 spezifische Bohrbild-Anforderungen — etwa mehrreihige Lochmuster oder dichte Beschlagfelder, die sich mit den Standardmaschinen nur durch mehrfache Hübe realisieren lassen. Typische Anwender sind Spezial-Möbelhersteller, Laboreinrichtungsbauer oder Hersteller technischer Gehäuse, die Dübelsetzung mit erhöhter Dichte benötigen. Die 807 bleibt bei aller Sonderkonfiguration im bewährten Express-Plattform-Design — Bedienung, Wartung und Ersatzteile sind mit den Serienmodellen kompatibel. Asamer liefert die Express 807 als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn.`,
      en: `The Gannomat Express 807 is a special version of the Express series with particularly high spindle count, specifically tailored to certain production tasks. While the classic Express models S1–S5 linearly add more spindles along one axis, the 807 addresses specific drilling-pattern requirements — such as multi-row hole patterns or dense fitting fields that can only be realised with the standard machines through multiple strokes. Typical users are specialised furniture manufacturers, laboratory equipment makers or producers of technical enclosures requiring dowel insertion with increased density. Despite its special configuration, the 807 remains within the proven Express platform design — operation, maintenance and spare parts are compatible with the series models. Asamer supplies the Express 807 as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary.`,
      cz: `Gannomat Express 807 je speciální provedení řady Express se zvláště vysokým počtem vřeten, cíleně uzpůsobené určitým výrobním úkolům. Zatímco klasické modely Express S1–S5 lineárně přidávají více vřeten podél jedné osy, 807 adresuje specifické požadavky vrtacího vzoru — například víceřadé vzory otvorů nebo husté plochy kování, které lze standardními stroji realizovat jen vícenásobnými zdvihy. Typickými uživateli jsou výrobci speciálního nábytku, výrobci laboratorního vybavení nebo výrobci technických skříní vyžadující vsazování kolíků se zvýšenou hustotou. Přes veškerou zvláštní konfiguraci zůstává 807 v osvědčeném designu platformy Express — obsluha, údržba a náhradní díly jsou kompatibilní se sériovými modely. Asamer dodává Express 807 jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko.`,
      sk: `Gannomat Express 807 je špeciálne prevedenie radu Express s mimoriadne vysokým počtom vretien, cielene prispôsobené určitým výrobným úlohám. Zatiaľ čo klasické modely Express S1–S5 lineárne pridávajú viac vretien pozdĺž jednej osi, 807 adresuje špecifické požiadavky vrtacieho vzoru — napríklad viacradové vzory otvorov alebo husté plochy kovania, ktoré možno štandardnými strojmi realizovať len viacnásobnými zdvihmi. Typickými používateľmi sú výrobcovia špeciálneho nábytku, výrobcovia laboratórneho vybavenia alebo výrobcovia technických skríň vyžadujúci vsadzovanie kolíkov so zvýšenou hustotou. Napriek všetkej špeciálnej konfigurácii zostáva 807 v osvedčenom dizajne platformy Express — obsluha, údržba a náhradné diely sú kompatibilné so sériovými modelmi. Asamer dodáva Express 807 ako autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko.`,
      hu: `A Gannomat Express 807 az Express sorozat különleges kivitele, különösen magas orsószámmal, amelyet célzottan egyes gyártási feladatokhoz alakítottak ki. Míg a klasszikus Express S1–S5 modellek lineárisan egészítenek ki több orsót egyetlen tengely mentén, a 807 specifikus fúrásmintázati követelményeket szolgál ki — például többsoros lyukmintákat vagy sűrű szerelvénymezőket, amelyek a szabványos gépekkel csak többszöri löketből valósíthatók meg. Tipikus felhasználók a különleges bútorgyártók, laboreszköz-gyártók vagy megnövelt sűrűségű csapbeültetést igénylő műszaki burkolatgyártók. Minden különleges konfiguráció ellenére a 807 a bevált Express platform kialakításon belül marad — a kezelés, karbantartás és alkatrészek kompatibilisek a sorozatmodellekkel. Az Asamer az Express 807-et hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für spezialisierte Möbelfertigung', en: 'For specialised furniture production', cz: 'Pro specializovanou výrobu nábytku', hu: 'Specializált bútorgyártáshoz' },
        body: {
          de: 'Bei Werkstücken mit besonders dichter oder ungewöhnlich angeordneter Dübelsetzung scheitern Standardmaschinen an der Geometrie. Die Express 807 bringt die dafür benötigte Spindelzahl bereits ab Werk mit — ohne Kompromiss bei Taktzeit oder Bedienung.',
          en: 'For workpieces with particularly dense or unusually arranged dowel insertion, standard machines fail due to the geometry. The Express 807 brings the required spindle count from the factory — without compromise in cycle time or operation.',
          cz: 'U obrobků se zvláště hustým nebo neobvykle rozloženým vsazováním kolíků standardní stroje selhávají kvůli geometrii. Express 807 přináší požadovaný počet vřeten již z výroby — bez kompromisu v době taktu nebo obsluze.',
          hu: 'Különösen sűrű vagy szokatlan elrendezésű csapbeültetést igénylő munkadaraboknál a szabványos gépek a geometria miatt kudarcot vallanak. Az Express 807 már gyárilag magával hozza a szükséges orsószámot — a ciklusidőben vagy a kezelésben kompromisszum nélkül.',
        },
      },
      {
        heading: { de: 'Als Ergänzung zu einer bestehenden Express-Linie', en: 'As complement to an existing Express line', cz: 'Jako doplnění ke stávající lince Express', hu: 'Kiegészítésként meglévő Express-sorhoz' },
        body: {
          de: 'Betriebe mit bereits installierter Express S2 oder S3 ergänzen die 807 oft für Spezialaufgaben. Plattformgleichheit bedeutet: gleiche Bediener, gleiche Wartung, gleiche Ersatzteillagerung — die Inbetriebnahme ist erheblich schlanker als bei fremdem Fabrikat.',
          en: 'Operations with an already installed Express S2 or S3 often add the 807 for special tasks. Platform uniformity means: same operators, same maintenance, same spare parts stock — commissioning is considerably leaner than with a foreign make.',
          cz: 'Provozy s již instalovaným Express S2 nebo S3 často doplňují 807 pro speciální úkoly. Společná platforma znamená: stejné obsluhy, stejná údržba, stejné skladování náhradních dílů — uvedení do provozu je podstatně jednodušší než u cizí značky.',
          hu: 'A már telepített Express S2-vel vagy S3-mal rendelkező üzemek gyakran egészítik ki a 807-tel speciális feladatokhoz. A platform azonossága azt jelenti: ugyanazok a kezelők, ugyanaz a karbantartás, ugyanaz az alkatrészkészlet — az üzembe helyezés lényegesen egyszerűbb, mint idegen gyártmány esetén.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Express 807 ist eine Sondermaschine für spezifische Bohrbild-Anforderungen. Für Standard-Korpusfertigung sind S2–S4 günstiger; bei hoher Variantenzahl und Spezialaufgaben kombiniert empfiehlt sich Vector CNC oder Spectrum. Asamer berät vor dem Kauf zur passenden Maschine.',
      en: 'The Express 807 is a special machine for specific drilling-pattern requirements. For standard carcass production S2–S4 are cheaper; for combined high variant counts and special tasks, Vector CNC or Spectrum is recommended. Asamer advises on the right machine before purchase.',
      cz: 'Express 807 je speciální stroj pro specifické požadavky vrtacího vzoru. Pro standardní výrobu korpusu jsou levnější S2–S4; při kombinované vysoké variantnosti a speciálních úkolech se doporučuje Vector CNC nebo Spectrum. Asamer před nákupem poradí s vhodným strojem.',
      sk: 'Express 807 je špeciálny stroj pre špecifické požiadavky vrtacieho vzoru. Pre štandardnú výrobu korpusu sú lacnejšie S2–S4; pri kombinovanej vysokej variantnosti a špeciálnych úlohách sa odporúča Vector CNC alebo Spectrum. Asamer pred nákupom poradí s vhodným strojom.',
      hu: 'Az Express 807 speciális gép specifikus fúrásmintázati követelményekhez. Szabványos korpuszgyártáshoz az S2–S4 olcsóbb; magas variánsszám és speciális feladatok kombinációjához a Vector CNC vagy Spectrum ajánlott. Az Asamer a vásárlás előtt a megfelelő gép megválasztásában tanácsot ad.',
    },
    faq: [
      {
        question: { de: 'Ist die 807 frei konfigurierbar?', en: 'Is the 807 freely configurable?', cz: 'Je 807 volně konfigurovatelný?', hu: 'Szabadon konfigurálható a 807?' },
        answer: {
          de: 'Im Rahmen des Sondermaschinenprogramms ja — Asamer stimmt die Konfiguration mit Ihnen und Gannomat ab.',
          en: 'Within the special machine programme yes — Asamer coordinates the configuration with you and Gannomat.',
          cz: 'V rámci programu speciálních strojů ano — Asamer upřesní konfiguraci s vámi a Gannomat.',
          sk: 'V rámci programu špeciálnych strojov áno — Asamer upresní konfiguráciu s vami a Gannomat.',
          hu: 'A különleges gépek programján belül igen — az Asamer egyezteti a konfigurációt Önnel és a Gannomattal.',
        },
      },
      {
        question: { de: 'Wie verfügbar sind Ersatzteile?', en: 'How available are spare parts?', cz: 'Jak jsou dostupné náhradní díly?', hu: 'Mennyire elérhetők az alkatrészek?' },
        answer: {
          de: 'Durch die gemeinsame Express-Plattform sind die meisten Komponenten aus dem Standardteileprogramm lieferbar.',
          en: 'Thanks to the shared Express platform, most components are available from the standard parts programme.',
          cz: 'Díky společné platformě Express jsou většinou komponenty dostupné ze standardního programu dílů.',
          sk: 'Vďaka spoločnej platforme Express sú väčšina komponentov dostupné zo štandardného programu dielov.',
          hu: 'A közös Express platformnak köszönhetően a legtöbb komponens a szabványos alkatrészprogramból beszerezhető.',
        },
      },
      {
        question: { de: 'Braucht die 807 einen separaten Aufstellplatz?', en: 'Does the 807 need a separate floor space?', cz: 'Potřebuje 807 samostatné místo?', hu: 'Szüksége van a 807-nek külön helyre?' },
        answer: {
          de: 'Die Fläche liegt etwas über der S4/S5, ist aber mit bestehenden Express-Arbeitsplätzen grundsätzlich kompatibel.',
          en: 'The footprint is slightly above S4/S5 but fundamentally compatible with existing Express workstations.',
          cz: 'Plocha leží mírně nad S4/S5, ale je v zásadě kompatibilní se stávajícími pracovišti Express.',
          sk: 'Plocha leží mierne nad S4/S5, ale je v zásade kompatibilná s existujúcimi pracoviskami Express.',
          hu: 'A helyigény kissé meghaladja az S4/S5-öt, de alapvetően kompatibilis a meglévő Express munkaállomásokkal.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  FITTING — vector-cnc                                               */
  /* ------------------------------------------------------------------ */
  'vector-cnc': {
    longDescription: {
      de: `Die Gannomat Vector CNC ist eine vollautomatische, CNC-gesteuerte Dübel- und Beschlagsetzmaschine für variantenreiche Produktion auf Industrieniveau. Sie verbindet die Flexibilität der CNC-Programmierung mit vollautomatischer Werkstückführung — der Bediener greift nur noch für Zuführung und Abnahme ein, den eigentlichen Bearbeitungsprozess übernimmt die Maschine eigenständig. Für Möbelhersteller mit breiter Produktpalette, Losgröße-1-Anforderungen oder wechselnden OEM-Aufträgen ist die Vector CNC die Brücke zwischen halbautomatischen Express-Modellen und großindustriellen Anlagen wie Spectrum oder Selekta. Anbindung an ERP- und CAD-Systeme gehört zur Grundausstattung; das Asamer-Softwareteam programmiert die Integration zu Ihren Bestandssystemen. Asamer liefert die Vector CNC als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn.`,
      en: `The Gannomat Vector CNC is a fully automatic, CNC-controlled dowel and fitting insertion machine for variant-rich production at industrial level. It combines the flexibility of CNC programming with fully automatic workpiece feeding — the operator only intervenes for loading and unloading, the actual machining process is handled autonomously by the machine. For furniture manufacturers with a broad product range, batch-size-1 requirements or changing OEM orders, the Vector CNC is the bridge between semi-automatic Express models and large industrial plants such as Spectrum or Selekta. Connection to ERP and CAD systems is part of the basic equipment; the Asamer software team programs integration with your existing systems. Asamer supplies the Vector CNC as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary.`,
      cz: `Gannomat Vector CNC je plně automatický, CNC řízený stroj pro vsazování kolíků a kování pro variantně bohatou výrobu na průmyslové úrovni. Spojuje flexibilitu CNC programování s plně automatickým vedením obrobku — obsluha zasahuje jen při podávání a odebírání, vlastní obráběcí proces převezme stroj samostatně. Pro výrobce nábytku se širokou produktovou paletou, požadavky dávky 1 nebo měnícími se OEM zakázkami je Vector CNC mostem mezi poloautomatickými modely Express a velkoprůmyslovými zařízeními jako Spectrum nebo Selekta. Napojení na ERP a CAD systémy patří k základní výbavě; softwarový tým Asamer programuje integraci s vašimi stávajícími systémy. Asamer dodává Vector CNC jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko.`,
      sk: `Gannomat Vector CNC je plne automatický, CNC riadený stroj na vsadzovanie kolíkov a kovania pre variantne bohatú výrobu na priemyselnej úrovni. Spája flexibilitu CNC programovania s plne automatickým vedením obrobku — obsluha zasahuje len pri podávaní a odoberaní, vlastný obrábací proces prevezme stroj samostatne. Pre výrobcov nábytku so širokou produktovou paletou, požiadavkami dávky 1 alebo meniacimi sa OEM zákazkami je Vector CNC mostom medzi poloautomatickými modelmi Express a veľkopriemyselnými zariadeniami ako Spectrum alebo Selekta. Napojenie na ERP a CAD systémy patrí k základnému vybaveniu; softvérový tím Asamer programuje integráciu s vašimi existujúcimi systémami. Asamer dodáva Vector CNC ako autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko.`,
      hu: `A Gannomat Vector CNC egy teljesen automatikus, CNC-vezérlésű csap- és szerelvénybeültető gép változatos, ipari szintű gyártáshoz. A CNC-programozás rugalmasságát ötvözi a teljesen automatikus munkadarab-vezetéssel — a kezelő csak a be- és kiadagolásnál avatkozik közbe, a tényleges megmunkálási folyamatot a gép önállóan végzi. Széles termékpalettájú, 1-es tételszámú igényű vagy változó OEM-rendelésekkel dolgozó bútorgyártóknak a Vector CNC hidat képez a félautomatikus Express modellek és a nagyüzemi berendezések, például a Spectrum vagy Selekta között. Az ERP- és CAD-rendszerekhez való csatlakozás az alapfelszereltséghez tartozik; az Asamer szoftvercsapata a meglévő rendszereivel való integrációt programozza. Az Asamer a Vector CNC-t hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für variantenreiche Industrieproduktion', en: 'For variant-rich industrial production', cz: 'Pro variantně bohatou průmyslovou výrobu', hu: 'Változatos ipari gyártáshoz' },
        body: {
          de: 'Betriebe, die heute eine Küche, morgen einen Schrank, übermorgen eine Kommode fertigen — und das in industrieller Stückzahl — brauchen eine Maschine, die ohne Umrüstung zwischen Programmen wechselt. Die Vector CNC leistet genau das mit vollautomatischer Werkstückführung.',
          en: 'Operations producing a kitchen today, a cupboard tomorrow, a chest of drawers the day after — and in industrial quantities — need a machine that switches between programs without changeover. The Vector CNC does exactly that with fully automatic workpiece handling.',
          cz: 'Provozy, které dnes vyrábějí kuchyni, zítra skříň, pozítří komodu — a to v průmyslovém počtu — potřebují stroj, který bez přestavby přepíná mezi programy. Vector CNC toto dělá s plně automatickým vedením obrobku.',
          hu: 'Azok az üzemek, amelyek ma egy konyhát, holnap egy szekrényt, holnapután egy komódot gyártanak — mégpedig ipari darabszámban — olyan gépre van szükségük, amely átállítás nélkül vált programok között. A Vector CNC ezt teljes mértékben megteszi teljesen automatikus munkadarabkezeléssel.',
        },
      },
      {
        heading: { de: 'Als Herzstück einer automatisierten Fertigungszelle', en: 'As heart of an automated manufacturing cell', cz: 'Jako srdce automatizované výrobní buňky', hu: 'Automatizált gyártócella szíveként' },
        body: {
          de: 'Verbunden mit Zuführungsrobotik, Korpuspresse und nachgeschalteter Verpackung entsteht um die Vector CNC herum eine weitgehend mannlose Fertigungszelle. Damit lassen sich auch Variantenprogramme wirtschaftlich im Mehrschichtbetrieb fahren.',
          en: 'Connected to feeding robotics, carcass press and downstream packaging, a largely manless production cell is built around the Vector CNC. This allows variant programs to be run economically in multi-shift operation.',
          cz: 'V propojení s podávací robotikou, korpusovým lisem a navazujícím balením vzniká kolem Vector CNC převážně bezobslužná výrobní buňka. Tím lze variantní programy provozovat ekonomicky i ve vícesměnném provozu.',
          hu: 'Betápláló robotikával, korpuszpréssel és utána kapcsolt csomagolással a Vector CNC körül nagyrészt kezelő nélküli gyártócella alakul ki. Ezzel a változatos programok is gazdaságosan futtathatók többműszakos üzemben.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Vector CNC ist die Wahl für Industriebetriebe mit hoher Variantenzahl und Industriedurchsatz. Wer Standardserien ohne Variantendruck fertigt, ist mit Express S4/S5 günstiger bedient; bei höchsten Stückzahlen mit Beschlagsetzung empfiehlt sich Spectrum.',
      en: 'The Vector CNC is the choice for industrial operations with high variant counts and industrial throughput. Anyone producing standard series without variant pressure is served more cheaply by Express S4/S5; for highest quantities with fitting insertion, Spectrum is recommended.',
      cz: 'Vector CNC je volbou pro průmyslové provozy s vysokým počtem variant a průmyslovým průtokem. Kdo vyrábí standardní série bez variantního tlaku, je levněji obsloužen Expressem S4/S5; při nejvyšších počtech kusů se vsazováním kování se doporučuje Spectrum.',
      sk: 'Vector CNC je voľbou pre priemyselné prevádzky s vysokým počtom variantov a priemyselným prietokom. Kto vyrába štandardné série bez variantného tlaku, je lacnejšie obslúžený Expressom S4/S5; pri najvyšších počtoch kusov s vsadzovaním kovania sa odporúča Spectrum.',
      hu: 'A Vector CNC a választás magas variánsszámú és ipari áteresztőképességű ipari üzemeknek. Aki szabványsorozatokat gyárt variánsnyomás nélkül, olcsóbban jár az Express S4/S5-tel; a legnagyobb darabszámoknál szerelvénybeültetéssel a Spectrum ajánlott.',
    },
    faq: [
      {
        question: { de: 'Ist eine ERP-Anbindung vorgesehen?', en: 'Is ERP connection provided?', cz: 'Je plánováno napojení na ERP?', hu: 'Tervezve van ERP-kapcsolat?' },
        answer: {
          de: 'Ja — Standard-OPC-UA oder individuelle Schnittstellen zu SAP, Navision und Branchenlösungen, umgesetzt durch das Asamer-Softwareteam.',
          en: 'Yes — standard OPC-UA or custom interfaces to SAP, Navision and industry solutions, implemented by the Asamer software team.',
          cz: 'Ano — standardní OPC-UA nebo individuální rozhraní k SAP, Navision a oborovým řešením, realizované softwarovým týmem Asamer.',
          sk: 'Áno — štandardné OPC-UA alebo individuálne rozhrania k SAP, Navision a odvetvovým riešeniam, realizované softvérovým tímom Asamer.',
          hu: 'Igen — szabványos OPC-UA vagy egyedi interfészek SAP, Navision és ágazati megoldásokhoz, amelyeket az Asamer szoftvercsapata valósít meg.',
        },
      },
      {
        question: { de: 'Wie groß ist die Bedienmannschaft?', en: 'How large is the operating team?', cz: 'Jak velká je obsluha?', hu: 'Mekkora a kezelő csapat?' },
        answer: {
          de: 'Im Regelfall ein Bediener pro Linie — bei automatisierter Zuführung auch bedienerlose Abschnitte möglich.',
          en: 'As a rule one operator per line — with automated feeding, unmanned sections are also possible.',
          cz: 'Zpravidla jeden obsluhující na linku — při automatizovaném podávání jsou možné i bezobslužné úseky.',
          sk: 'Spravidla jeden obsluhujúci na linku — pri automatizovanom podávaní sú možné aj bezobslužné úseky.',
          hu: 'Általában egy kezelő soronként — automatizált adagolás mellett kezelő nélküli szakaszok is lehetségesek.',
        },
      },
      {
        question: { de: 'Eignet sich die Vector CNC für Losgröße 1?', en: 'Is the Vector CNC suitable for batch-size 1?', cz: 'Hodí se Vector CNC pro dávku 1?', hu: 'Alkalmas a Vector CNC 1-es tételszámhoz?' },
        answer: {
          de: 'Ja — die CNC-Steuerung lädt für jedes Werkstück das passende Programm direkt aus dem ERP-System.',
          en: 'Yes — the CNC control loads the appropriate program for each workpiece directly from the ERP system.',
          cz: 'Ano — CNC řízení načítá pro každý obrobek vhodný program přímo z ERP systému.',
          sk: 'Áno — CNC riadenie načítava pre každý obrobok vhodný program priamo z ERP systému.',
          hu: 'Igen — a CNC-vezérlés minden munkadarabhoz közvetlenül az ERP-rendszerből tölti be a megfelelő programot.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  INSERTION — spectrum                                                */
  /* ------------------------------------------------------------------ */
  'spectrum': {
    longDescription: {
      de: `Die Gannomat Spectrum ist eine industrielle CNC-Bohr- und Beschlagsetzmaschine der Spitzenklasse — ausgelegt für höchsten Durchsatz in der Serien- und Großserienfertigung von Korpusmöbeln mit Exzenterbeschlägen und Dübelverbindern. Im Vergleich zur Selekta, die auf Dübelsetzung spezialisiert ist, kombiniert die Spectrum Dübel- und Beschlagsetzung in einer einzigen Linie — ein wesentlicher Vorteil für RTA-Industriekunden mit hohem Volumen. Die CNC-Steuerung erlaubt Programmwechsel im laufenden Betrieb, integrierte Werkstückführung hält die Produktionsgeschwindigkeit auch bei Variantenwechsel konstant. Die Spectrum gilt als Premium-Lösung über der Selekta: mehr Flexibilität, mehr Funktionen, mehr Durchsatz. Asamer liefert die Spectrum als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn — mit vollständigem Inbetriebnahme-, Schulungs- und Wartungspaket.`,
      en: `The Gannomat Spectrum is a top-class industrial CNC drilling and fitting insertion machine — designed for highest throughput in series and large-series production of carcass furniture with cam connectors and dowel links. Compared with the Selekta, which is specialised in dowel insertion, the Spectrum combines dowel and fitting insertion in a single line — a key advantage for RTA industrial customers with high volume. The CNC control allows program changes during running operation; integrated workpiece feeding keeps production speed constant even when variants change. The Spectrum is considered the premium solution above the Selekta: more flexibility, more functions, more throughput. Asamer supplies the Spectrum as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary — with a complete commissioning, training and maintenance package.`,
      cz: `Gannomat Spectrum je průmyslový CNC vrtací a vsazovací stroj pro kování špičkové třídy — navržený pro nejvyšší průtok v sériové a velkosériové výrobě korpusového nábytku s excentrickým kováním a kolíkovými spojovacími prvky. Oproti Selektě, která je specializovaná na vsazování kolíků, kombinuje Spectrum vsazování kolíků a kování v jediné lince — zásadní výhoda pro průmyslové RTA zákazníky s vysokým objemem. CNC řízení umožňuje změnu programu za chodu, integrované vedení obrobku udržuje konstantní rychlost výroby i při změně variant. Spectrum je považován za prémiové řešení nad Selektou: více flexibility, více funkcí, více průtoku. Asamer dodává Spectrum jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko — s kompletním balíčkem uvedení do provozu, školení a údržby.`,
      sk: `Gannomat Spectrum je priemyselný CNC vŕtací a vsadzovací stroj pre kovania špičkovej triedy — navrhnutý pre najvyšší prietok v sériovej a veľkosériovej výrobe korpusového nábytku s excentrickým kovaním a kolíkovými spojovacími prvkami. Oproti Selekte, ktorá je špecializovaná na vsadzovanie kolíkov, kombinuje Spectrum vsadzovanie kolíkov a kovania v jedinej linke — zásadná výhoda pre priemyselných RTA zákazníkov s vysokým objemom. CNC riadenie umožňuje zmenu programu za chodu, integrované vedenie obrobku udržuje konštantnú rýchlosť výroby aj pri zmene variantov. Spectrum je považované za prémiové riešenie nad Selektou: viac flexibility, viac funkcií, viac prietoku. Asamer dodáva Spectrum ako autorizovaný predajca Gannomat pre Českú republiku, Slovensko a Maďarsko — s kompletným balíčkom uvedenia do prevádzky, školenia a údržby.`,
      hu: `A Gannomat Spectrum egy csúcskategóriás ipari CNC fúró- és szerelvénybeültető gép — amelyet a legnagyobb áteresztőképességre terveztek excentrikus csatlakozókkal és csapkötésekkel készült korpuszbútorok sorozat- és nagysorozatú gyártásában. A csapbeültetésre specializálódott Selektához képest a Spectrum egyetlen sorban ötvözi a csap- és szerelvénybeültetést — kulcsfontosságú előny a nagy volumennel dolgozó RTA ipari vásárlók számára. A CNC-vezérlés futó üzem közben is lehetővé teszi a programváltást, az integrált munkadarab-vezetés variánsváltáskor is állandóan tartja a gyártási sebességet. A Spectrum a Selekta fölötti prémium megoldásnak számít: nagyobb rugalmasság, több funkció, nagyobb áteresztőképesség. Az Asamer a Spectrumot hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra — teljes üzembe helyezési, képzési és karbantartási csomaggal.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für industrielle RTA-Möbelproduktion', en: 'For industrial RTA furniture production', cz: 'Pro průmyslovou výrobu RTA nábytku', hu: 'Ipari RTA-bútorgyártáshoz' },
        body: {
          de: 'Die Spectrum ist erste Wahl für RTA-Industriekunden mit fünfstelligen Tagesstückzahlen. Dübel und Exzenterbeschläge werden in einer Linie gesetzt — das spart eine komplette Bearbeitungsstation gegenüber getrennten Maschinen.',
          en: 'The Spectrum is first choice for RTA industrial customers with five-digit daily quantities. Dowels and cam connectors are set in one line — saving an entire processing station compared to separate machines.',
          cz: 'Spectrum je první volbou pro průmyslové RTA zákazníky s pětimístnými denními počty kusů. Kolíky a excentrická kování se vsazují v jedné lince — ušetří celou obráběcí stanici oproti oddělenému strojovému parku.',
          hu: 'A Spectrum első számú választás ötszámjegyű napi darabszámmal dolgozó RTA ipari vásárlóknak. A csapok és excentrikus csatlakozók egy vonalban kerülnek beültetésre — ez külön gépekhez képest egy teljes megmunkálóállomást takarít meg.',
        },
      },
      {
        heading: { de: 'Als Premium-Ergänzung zur Selekta-Linie', en: 'As premium complement to the Selekta line', cz: 'Jako prémiové doplnění k lince Selekta', hu: 'A Selekta-sor prémium kiegészítéseként' },
        body: {
          de: 'Betriebe, die bereits eine Selekta einsetzen, erweitern mit der Spectrum oft um einen zweiten Produktionszweig für Beschlag-intensive Programme. Die Plattformähnlichkeit erleichtert Schulung und Ersatzteilversorgung.',
          en: 'Operations already using a Selekta often extend with the Spectrum into a second production branch for fitting-intensive programmes. Platform similarity simplifies training and spare parts supply.',
          cz: 'Provozy, které již nasadily Selektu, často rozšiřují Spectrum o druhou výrobní větev pro programy s intenzivním vsazováním kování. Podobnost platforem usnadňuje školení a zásobování náhradními díly.',
          hu: 'A már Selektát üzemeltető üzemek gyakran bővítik a Spectrummal egy második gyártási ágat intenzív szerelvénybeültetéses programokhoz. A platform hasonlósága megkönnyíti a képzést és az alkatrészellátást.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Spectrum ist die Wahl für RTA-Industriekunden mit höchsten Durchsatzanforderungen und Beschlag-intensiver Fertigung. Wer nur Dübel setzt, ist mit der Selekta besser bedient; bei reiner Variantenvielfalt ohne Beschlag reicht die Vector CNC. Für kleinere Mengen siehe Express-Serie.',
      en: 'The Spectrum is the choice for RTA industrial customers with the highest throughput demands and fitting-intensive production. For pure dowel setting, the Selekta is the better fit; for pure variant diversity without fittings, the Vector CNC is sufficient. For smaller quantities, see the Express series.',
      cz: 'Spectrum je volbou pro průmyslové RTA zákazníky s nejvyššími nároky na průtok a výrobu intenzivní na vsazování kování. Kdo vsazuje jen kolíky, je lépe obsloužen Selektou; při čisté variantní rozmanitosti bez kování postačí Vector CNC. Pro menší množství viz řadu Express.',
      sk: 'Spectrum je voľbou pre priemyselných RTA zákazníkov s najvyššími nárokmi na prietok a výrobu intenzívnu na vsadzovanie kovania. Kto vsadzuje len kolíky, je lepšie obslúžený Selektou; pri čistej variantnej rozmanitosti bez kovania postačí Vector CNC. Pre menšie množstvá viď rad Express.',
      hu: 'A Spectrum az RTA-ipari vásárlók választása a legnagyobb áteresztőképesség-igényekkel és szerelvénybeültetés-intenzív gyártással. Aki csak csapokat ültet be, a Selektával jobban jár; tiszta variánsválasztékhoz szerelvények nélkül elegendő a Vector CNC. Kisebb mennyiségekhez lásd az Express sorozatot.',
    },
    faq: [
      {
        question: { de: 'Welche Beschlag- und Dübelgrößen werden verarbeitet?', en: 'What fitting and dowel sizes are processed?', cz: 'Jaké velikosti kování a kolíků se zpracovávají?', hu: 'Milyen szerelvény- és csapméreteket dolgoz fel?' },
        answer: {
          de: 'Standardgrößen der europäischen Möbelindustrie für Dübel und Exzenterbeschläge. Sonderausführungen auf Anfrage.',
          en: 'Standard sizes of the European furniture industry for dowels and cam connectors. Special versions on request.',
          cz: 'Standardní velikosti evropského nábytkářského průmyslu pro kolíky a excentrická kování. Speciální provedení na vyžádání.',
          sk: 'Štandardné veľkosti európskeho nábytkárskeho priemyslu pre kolíky a excentrické kovania. Špeciálne prevedenia na požiadanie.',
          hu: 'Az európai bútoripar szabványos méretei csapokhoz és excentrikus csatlakozókhoz. Különleges kivitelek kérésre.',
        },
      },
      {
        question: { de: 'Ist eine Losgröße-1-Produktion möglich?', en: 'Is batch-size-1 production possible?', cz: 'Je možná výroba dávky 1?', hu: 'Lehetséges 1-es tételszámú gyártás?' },
        answer: {
          de: 'Ja — durch ERP-Anbindung und CNC-Programmauswahl pro Werkstück, implementiert durch das Asamer-Softwareteam.',
          en: 'Yes — via ERP connection and CNC program selection per workpiece, implemented by the Asamer software team.',
          cz: 'Ano — přes napojení na ERP a výběr CNC programu na obrobek, implementováno softwarovým týmem Asamer.',
          sk: 'Áno — cez napojenie na ERP a výber CNC programu na obrobok, implementované softvérovým tímom Asamer.',
          hu: 'Igen — ERP-kapcsolat és munkadarabonkénti CNC-programválasztás révén, amelyet az Asamer szoftvercsapata valósít meg.',
        },
      },
      {
        question: { de: 'Wie hoch ist der Platzbedarf?', en: 'How large is the space requirement?', cz: 'Jaká je plošná náročnost?', hu: 'Mekkora a helyigény?' },
        answer: {
          de: 'Die Spectrum ist eine Industrieanlage mit entsprechender Stellfläche — Asamer plant die Halleneinordnung individuell.',
          en: 'The Spectrum is an industrial plant with corresponding footprint — Asamer plans the hall layout individually.',
          cz: 'Spectrum je průmyslové zařízení s odpovídající plochou — Asamer plánuje halové uspořádání individuálně.',
          sk: 'Spectrum je priemyselné zariadenie s príslušnou plochou — Asamer plánuje halové usporiadanie individuálne.',
          hu: 'A Spectrum ipari berendezés, megfelelő helyigénnyel — az Asamer a csarnokelrendezést egyedileg tervezi meg.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  GLUING — injecta                                                   */
  /* ------------------------------------------------------------------ */
  'injecta': {
    longDescription: {
      de: `Die Gannomat Injecta ist ein spezialisiertes Klebeinjektionssystem für Dübelverbindungen mit erhöhten Festigkeitsanforderungen. Während Standardleimsysteme wie die Leimfix den Klebstoff auf den Dübel oder in die Bohrung aufbringen, injiziert die Injecta den Klebstoff unter kontrolliertem Druck direkt in die Verbindungsstelle — nachdem der Dübel bereits gesetzt ist. Das Ergebnis: eine vollständig gefüllte Verbindung ohne Lufteinschlüsse, wie sie im Holzbau für tragende Möbelstrukturen, Laden- und Objekteinrichtungen oder Sonderkonstruktionen gefragt ist. Die Injecta ergänzt bestehende Express-, Vector- oder Spectrum-Linien um diese Spezialfunktion, wo Standard-Leimauftrag nicht ausreicht. Asamer liefert die Injecta als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn, inklusive Einbindung in vorhandene Fertigungslinien.`,
      en: `The Gannomat Injecta is a specialised glue injection system for dowel joints with increased strength requirements. While standard glue systems such as the Leimfix apply adhesive onto the dowel or into the drill hole, the Injecta injects the glue under controlled pressure directly into the joint — after the dowel has already been set. The result: a fully filled joint without air inclusions, as is required in wood construction for load-bearing furniture structures, shopfitting and contract interiors or special constructions. The Injecta complements existing Express, Vector or Spectrum lines with this special function where standard glue application is not sufficient. Asamer supplies the Injecta as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary, including integration into existing production lines.`,
      cz: `Gannomat Injecta je specializovaný systém injektáže lepidla pro kolíkové spoje se zvýšenými nároky na pevnost. Zatímco standardní lepicí systémy jako Leimfix nanášejí lepidlo na kolík nebo do vrtání, Injecta vstřikuje lepidlo pod kontrolovaným tlakem přímo do spojovacího místa — poté, co byl kolík již vsazen. Výsledek: zcela vyplněný spoj bez vzduchových inkluzí, jaký je v dřevěných konstrukcích požadován pro nosné nábytkové struktury, obchodní a interiérové vybavení nebo speciální konstrukce. Injecta doplňuje stávající linky Express, Vector nebo Spectrum o tuto speciální funkci tam, kde standardní nanášení lepidla nestačí. Asamer dodává Injecta jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko, včetně zapojení do stávajících výrobních linek.`,
      sk: `Gannomat Injecta je špecializovaný systém injektáže lepidla pre kolíkové spoje so zvýšenými nárokmi na pevnosť. Zatiaľ čo štandardné lepiace systémy ako Leimfix nanášajú lepidlo na kolík alebo do vrtania, Injecta vstrekuje lepidlo pod kontrolovaným tlakom priamo do spojovacieho miesta — po tom, čo bol kolík už vsadený. Výsledok: úplne vyplnený spoj bez vzduchových inklúzií, aký je v drevených konštrukciách požadovaný pre nosné nábytkárske štruktúry, obchodné a interiérové vybavenie alebo špeciálne konštrukcie. Injecta dopĺňa existujúce linky Express, Vector alebo Spectrum o túto špeciálnu funkciu tam, kde štandardné nanášanie lepidla nestačí. Asamer dodáva Injecta ako autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko, vrátane zapojenia do existujúcich výrobných liniek.`,
      hu: `A Gannomat Injecta egy speciális ragasztóinjektálási rendszer megnövelt szilárdsági követelményű csapkötésekhez. Míg a szabványos ragasztórendszerek, például a Leimfix a ragasztót a csapra vagy a furatba viszi fel, az Injecta a ragasztót kontrollált nyomás alatt közvetlenül a kötéshelyre injektálja — miután a csapot már beültették. Az eredmény: teljesen kitöltött kötés légzárványok nélkül, amire a faszerkezetekben a teherhordó bútorszerkezeteknél, üzletberendezéseknél és projektinteriőröknél vagy különleges konstrukcióknál van szükség. Az Injecta a meglévő Express, Vector vagy Spectrum sorokat egészíti ki ezzel a speciális funkcióval ott, ahol a szabványos ragasztófelvitel nem elegendő. Az Asamer az Injectát hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra, a meglévő gyártósorokba való bekapcsolással együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für tragende Holzkonstruktionen', en: 'For load-bearing wood constructions', cz: 'Pro nosné dřevěné konstrukce', hu: 'Teherhordó faszerkezetekhez' },
        body: {
          de: 'Bei tragenden Möbel-, Regal- oder Objektstrukturen muss die Dübelverbindung höhere Kräfte aufnehmen. Die Klebeinjektion der Injecta erzeugt eine vollflächig benetzte Klebestelle, die klassische Auftragsverfahren in der erreichbaren Festigkeit oft übertrifft.',
          en: 'In load-bearing furniture, shelving or contract structures, the dowel joint must absorb higher forces. The glue injection of the Injecta creates a fully wetted glue area that often exceeds classic application methods in achievable strength.',
          cz: 'U nosných nábytkových, regálových nebo interiérových struktur musí kolíkový spoj přenášet vyšší síly. Injektáž lepidla Injecta vytváří plošně smáčenou lepenou plochu, která v dosažitelné pevnosti často převyšuje klasické aplikační postupy.',
          hu: 'Teherhordó bútor-, polc- vagy projektstruktúráknál a csapkötésnek nagyobb erőket kell felvennie. Az Injecta ragasztóinjektálása teljes felületen nedvesített ragasztási helyet hoz létre, amely elérhető szilárdságban gyakran felülmúlja a klasszikus felviteli eljárásokat.',
        },
      },
      {
        heading: { de: 'Für spezielle Feuchteschutz- oder Lastanforderungen', en: 'For special moisture protection or load requirements', cz: 'Pro speciální požadavky na ochranu proti vlhkosti nebo zatížení', hu: 'Különleges nedvességvédelmi vagy terhelési követelményekhez' },
        body: {
          de: 'In feuchten oder wechselklimatischen Einsatzbereichen — Küchenmöbel, Sanitärmöbel, Außeneinrichtungen — ist eine hohle Dübelverbindung anfällig. Die Injecta schließt den Hohlraum komplett und erhöht so die Lebensdauer der Verbindung spürbar.',
          en: 'In moist or variable-climate application areas — kitchen furniture, sanitary furniture, outdoor fittings — a hollow dowel joint is vulnerable. The Injecta fully closes the cavity, noticeably increasing joint lifetime.',
          cz: 'Ve vlhkých nebo proměnně klimatických oblastech použití — kuchyňský nábytek, sanitární nábytek, venkovní vybavení — je dutý kolíkový spoj náchylný. Injecta dutinu zcela uzavírá a tím citelně zvyšuje životnost spoje.',
          hu: 'Nedves vagy változó klímájú alkalmazási területeken — konyhabútor, szaniter bútor, kültéri berendezés — az üreges csapkötés sérülékeny. Az Injecta teljesen lezárja az üreget, ezáltal érezhetően növelve a kötés élettartamát.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Injecta ist eine Ergänzungsmaschine für spezielle Festigkeits- und Dichtheitsanforderungen. Für Standard-Korpusverklebung reicht eine Leimfix in Kombination mit Selekta oder Express aus. Bei tragenden Strukturen, Feuchträumen oder Objekteinrichtungen empfiehlt sich die Injecta als zusätzliche Station in der Linie.',
      en: 'The Injecta is a complementary machine for special strength and tightness requirements. For standard carcass gluing, a Leimfix combined with Selekta or Express is sufficient. For load-bearing structures, moist rooms or contract interiors, the Injecta is recommended as an additional station in the line.',
      cz: 'Injecta je doplňkovým strojem pro speciální požadavky na pevnost a těsnost. Pro standardní lepení korpusu postačí Leimfix v kombinaci se Selektou nebo Express. U nosných struktur, vlhkých prostor nebo interiérových vybavení se doporučuje Injecta jako další stanice v lince.',
      sk: 'Injecta je doplnkovým strojom pre špeciálne požiadavky na pevnosť a tesnosť. Pre štandardné lepenie korpusu postačí Leimfix v kombinácii so Selektou alebo Express. Pri nosných štruktúrach, vlhkých priestoroch alebo interiérových vybaveniach sa odporúča Injecta ako ďalšia stanica v linke.',
      hu: 'Az Injecta kiegészítő gép különleges szilárdsági és tömítettségi követelményekhez. Szabványos korpuszragasztáshoz egy Leimfix Selektával vagy Express-szel kombinálva elegendő. Teherhordó szerkezeteknél, nedves helyiségeknél vagy projektinteriőröknél az Injecta ajánlott további állomásként a sorban.',
    },
    faq: [
      {
        question: { de: 'Welche Klebstoffe sind geeignet?', en: 'Which adhesives are suitable?', cz: 'Jaká lepidla jsou vhodná?', hu: 'Milyen ragasztók alkalmasak?' },
        answer: {
          de: 'Typisch PUR- und EVA-Systeme, abgestimmt auf die jeweilige Anwendung; Asamer berät zur Auswahl.',
          en: 'Typically PUR and EVA systems, matched to the respective application; Asamer advises on selection.',
          cz: 'Typicky PUR a EVA systémy, přizpůsobené dané aplikaci; Asamer poradí s výběrem.',
          sk: 'Typicky PUR a EVA systémy, prispôsobené danej aplikácii; Asamer poradí s výberom.',
          hu: 'Jellemzően PUR- és EVA-rendszerek, az adott alkalmazáshoz igazítva; az Asamer a kiválasztásban tanácsot ad.',
        },
      },
      {
        question: { de: 'Lässt sich die Injecta in bestehende Linien integrieren?', en: 'Can the Injecta be integrated into existing lines?', cz: 'Lze Injecta integrovat do stávajících linek?', hu: 'Integrálható az Injecta meglévő sorokba?' },
        answer: {
          de: 'Ja — sie fügt sich als zusätzliche Station zwischen Dübelsetzung und Korpuspresse ein.',
          en: 'Yes — it slots in as an additional station between dowel insertion and carcass press.',
          cz: 'Ano — zařazuje se jako dodatečná stanice mezi vsazování kolíků a korpusový lis.',
          sk: 'Áno — zaraďuje sa ako dodatočná stanica medzi vsadzovanie kolíkov a korpusový lis.',
          hu: 'Igen — kiegészítő állomásként illeszkedik a csapbeültetés és a korpuszprés közé.',
        },
      },
      {
        question: { de: 'Wie hoch ist der Wartungsaufwand?', en: 'What is the maintenance effort?', cz: 'Jaká je náročnost údržby?', hu: 'Mekkora a karbantartási ráfordítás?' },
        answer: {
          de: 'Regelmäßige Düsenreinigung ist wichtig — Asamer schult dazu ausführlich bei der Inbetriebnahme.',
          en: 'Regular nozzle cleaning is important — Asamer provides detailed training on this during commissioning.',
          cz: 'Důležité je pravidelné čištění trysek — Asamer v tomto směru důkladně školí při uvedení do provozu.',
          sk: 'Dôležité je pravidelné čistenie trysiek — Asamer v tomto smere dôkladne školí pri uvedení do prevádzky.',
          hu: 'A rendszeres fúvókatisztítás fontos — az Asamer erről részletes képzést tart az üzembe helyezéskor.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  INSERTION_DOOR — selekta-hd                                        */
  /* ------------------------------------------------------------------ */
  'selekta-hd': {
    longDescription: {
      de: `Die Gannomat Selekta HD ist die Heavy-Duty-Variante der bewährten Selekta, speziell ausgelegt für die Fertigung von Türen und Fensterrahmen. Wo die Standard-Selekta auf Korpuselemente der Möbelindustrie ausgerichtet ist, bearbeitet die Selekta HD die deutlich schwereren und größeren Werkstücke der Tür- und Fensterproduktion: massive Türblätter, Rahmenhölzer und Pfosten. Sie vereint Bohren, Beleimen und Dübeleintreiben in einem automatischen Durchgang — optimiert auf die höheren Bohrtiefen, Dübeldurchmesser und Werkstückmassen im Türenbau. Asamer ist autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn und liefert die Selekta HD inklusive Beratung zum Werkzeugsatz, Installation und Bedienerschulung. Ergänzungen wie Injecta HD oder Index DW binden wir in die Linie ein.`,
      en: `The Gannomat Selekta HD is the heavy-duty variant of the proven Selekta, specifically designed for the production of doors and window frames. Where the standard Selekta targets furniture industry carcass elements, the Selekta HD processes the significantly heavier and larger workpieces of door and window production: solid door leaves, frame timbers and posts. It combines drilling, gluing and dowel insertion for doors/windows in one automatic pass — optimised for the higher drilling depths, dowel diameters and workpiece masses in door construction. Asamer is authorized Gannomat dealer for Czech Republic, Slovakia and Hungary and supplies the Selekta HD including consultation on tool sets, installation and operator training. Complements such as Injecta HD or Index DW are integrated into the line.`,
      cz: `Gannomat Selekta HD je heavy-duty varianta osvědčené Selekty, speciálně konstruovaná pro výrobu dveří a okenních rámů. Zatímco standardní Selekta je zaměřena na korpusové prvky nábytkářského průmyslu, Selekta HD zpracovává výrazně těžší a větší obrobky výroby dveří a oken: masivní dveřní křídla, rámová dřeva a sloupky. Spojuje vrtání, lepení a zarážení kolíků pro dveře/okna v jednom automatickém průchodu — optimalizované pro vyšší hloubky vrtání, průměry kolíků a hmotnosti obrobků ve stavbě dveří. Asamer je autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko a dodává Selekta HD včetně poradenství k nástrojovému sortimentu, instalace a školení obsluhy. Doplňky jako Injecta HD nebo Index DW zapojujeme do linky.`,
      sk: `Gannomat Selekta HD je heavy-duty variant osvedčenej Selekty, špeciálne konštruovaná pre výrobu dverí a okenných rámov. Zatiaľ čo štandardná Selekta je zameraná na korpusové prvky nábytkárskeho priemyslu, Selekta HD spracováva výrazne ťažšie a väčšie obrobky výroby dverí a okien: masívne dverné krídla, rámové drevá a stĺpiky. Spája vŕtanie, lepenie a zarážanie kolíkov pre dvere/okná v jednom automatickom prechode — optimalizované pre vyššie hĺbky vŕtania, priemery kolíkov a hmotnosti obrobkov v stavbe dverí. Asamer je autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko a dodáva Selekta HD vrátane poradenstva k nástrojovej sade, inštalácie a školenia obsluhy. Doplnky ako Injecta HD alebo Index DW zapájame do linky.`,
      hu: `A Gannomat Selekta HD a bevált Selekta heavy-duty változata, kifejezetten ajtók és ablakkeretek gyártásához tervezve. Míg a szabványos Selekta a bútoripar korpuszelemeire irányul, a Selekta HD az ajtó- és ablakgyártás jelentősen nehezebb és nagyobb munkadarabjait dolgozza fel: tömör ajtólapokat, keretfákat és oszlopokat. A csapozógépek ajtókhoz/ablakokhoz funkcionalitást — fúrás, ragasztás és csapbeütés — egy automatikus menetben egyesíti, a nagyobb fúrásmélységekre, csapátmérőkre és munkadarabtömegekre optimalizálva az ajtóépítésben. Az Asamer a hivatalos Gannomat-forgalmazó Csehország, Szlovákia és Magyarország számára, és a Selekta HD gépet szerszámkészlet-tanácsadással, telepítéssel és kezelői képzéssel szállítja. Az Injecta HD vagy Index DW kiegészítőket bekötjük a sorba.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für industrielle Türenfertigung', en: 'For industrial door production', cz: 'Pro průmyslovou výrobu dveří', sk: 'Pre priemyselnú výrobu dverí', hu: 'Ipari ajtógyártáshoz' },
        body: {
          de: 'Türblätter mit Füllung, Rahmentüren und Haustürblätter benötigen tief sitzende Dübelbohrungen mit großem Durchmesser. Die Selekta HD ist auf diese Werkstücke ausgelegt und erreicht in Serienfertigung reproduzierbare Qualität — deutlich über dem, was mit einer Standard-Selekta möglich wäre.',
          en: 'Door leaves with panel filling, framed doors and entrance doors require deep-seated dowel drillings with large diameters. The Selekta HD is designed for these workpieces and achieves reproducible quality in series production — clearly beyond what a standard Selekta could deliver.',
          cz: 'Dveřní křídla s výplní, rámové dveře a vchodové dveře vyžadují hluboko usazené kolíkové otvory s velkým průměrem. Selekta HD je konstruována na tyto obrobky a dosahuje v sériové výrobě reprodukovatelnou kvalitu — výrazně nad rámec toho, co by zvládla standardní Selekta.',
          sk: 'Dverné krídla s výplňou, rámové dvere a vchodové dvere vyžadujú hlboko usadené kolíkové otvory s veľkým priemerom. Selekta HD je konštruovaná na tieto obrobky a dosahuje v sériovej výrobe reprodukovateľnú kvalitu — výrazne nad rámec toho, čo by zvládla štandardná Selekta.',
          hu: 'A betétes ajtólapok, keretes ajtók és bejárati ajtók mély csaplyukakat igényelnek nagy átmérővel. A Selekta HD ezekre a munkadarabokra van tervezve, és sorozatgyártásban reprodukálható minőséget ér el — jelentősen túlmutatva azon, amit egy szabványos Selekta teljesíthetne.',
        },
      },
      {
        heading: { de: 'Für Fensterrahmenhersteller', en: 'For window frame manufacturers', cz: 'Pro výrobce okenních rámů', sk: 'Pre výrobcov okenných rámov', hu: 'Ablakkeret-gyártóknak' },
        body: {
          de: 'In der Fensterproduktion laufen Pfosten, Riegel und Rahmenhölzer durch die Maschine — oft in unterschiedlichen Profilen. Die CNC-Steuerung der Selekta HD speichert alle gängigen Profiltypen und schaltet per Programmwahl schnell zwischen Serien um.',
          en: 'In window production, posts, transoms and frame timbers run through the machine — often in different profiles. The CNC control of the Selekta HD stores all common profile types and switches quickly between series via program selection.',
          cz: 'Ve výrobě oken procházejí strojem sloupky, příčníky a rámová dřeva — často v různých profilech. CNC řízení Selekty HD ukládá všechny běžné typy profilů a rychle přepíná mezi sériemi pomocí výběru programu.',
          sk: 'Vo výrobe okien prechádzajú strojom stĺpiky, priečniky a rámové drevá — často v rôznych profiloch. CNC riadenie Selekty HD ukladá všetky bežné typy profilov a rýchlo prepína medzi sériami pomocou výberu programu.',
          hu: 'Az ablakgyártásban oszlopok, keresztbordák és keretfák haladnak át a gépen — gyakran különböző profilokban. A Selekta HD CNC-vezérlése minden szokásos profiltípust tárol, és programválasztással gyorsan vált a sorozatok között.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Selekta HD ist die erste Wahl für industrielle Türen- und Fensterrahmenfertiger mit mittlerem bis hohem Durchsatz. Für spezielle Klebeverbindungen an tragenden Türkonstruktionen kombinieren Sie die Selekta HD mit der Injecta HD; für sehr variantenreiche CNC-Programme ist die Index DW Reihe CNC die passende Ergänzung.',
      en: 'The Selekta HD is the first choice for industrial door and window frame manufacturers with medium to high throughput. For special glue joints on load-bearing door constructions, combine the Selekta HD with the Injecta HD; for highly variant-rich CNC programs, the Index DW Reihe CNC is the matching complement.',
      cz: 'Selekta HD je první volbou pro průmyslové výrobce dveří a okenních rámů se středním až vysokým průtokem. Pro speciální lepené spoje u nosných konstrukcí dveří kombinujte Selekta HD s Injecta HD; pro velmi variabilní CNC programy je vhodným doplňkem Index DW Reihe CNC.',
      sk: 'Selekta HD je prvou voľbou pre priemyselných výrobcov dverí a okenných rámov so stredným až vysokým prietokom. Pre špeciálne lepené spoje pri nosných konštrukciách dverí kombinujte Selekta HD s Injecta HD; pre veľmi variabilné CNC programy je vhodným doplnkom Index DW Reihe CNC.',
      hu: 'A Selekta HD az első választás közepes és magas áteresztőképességű ipari ajtó- és ablakkeret-gyártóknak. Teherhordó ajtószerkezetek speciális ragasztott kötéseihez kombinálja a Selekta HD-t az Injecta HD-val; erősen változatos CNC-programokhoz az Index DW Reihe CNC a megfelelő kiegészítő.',
    },
    faq: [
      {
        question: { de: 'Welche Werkstückgrößen schafft die Selekta HD?', en: 'What workpiece sizes can the Selekta HD handle?', cz: 'Jaké velikosti obrobků zvládne Selekta HD?', sk: 'Aké veľkosti obrobkov zvládne Selekta HD?', hu: 'Milyen munkadarabméreteket kezel a Selekta HD?' },
        answer: {
          de: 'Türblätter bis ca. 2.400 × 1.200 mm und Rahmenhölzer mit Stärken bis 80 mm. Sondermaße auf Anfrage.',
          en: 'Door leaves up to approx. 2,400 × 1,200 mm and frame timbers with thicknesses up to 80 mm. Special dimensions on request.',
          cz: 'Dveřní křídla do cca 2.400 × 1.200 mm a rámová dřeva s tloušťkou do 80 mm. Speciální rozměry na vyžádání.',
          sk: 'Dverné krídla do cca 2.400 × 1.200 mm a rámové drevá s hrúbkou do 80 mm. Špeciálne rozmery na vyžiadanie.',
          hu: 'Ajtólapok kb. 2400 × 1200 mm-ig és keretfák 80 mm-ig terjedő vastagsággal. Egyedi méretek kérésre.',
        },
      },
      {
        question: { de: 'Was unterscheidet die Selekta HD von der Standard-Selekta?', en: 'What distinguishes the Selekta HD from the standard Selekta?', cz: 'Čím se Selekta HD liší od standardní Selekty?', sk: 'Čím sa Selekta HD líši od štandardnej Selekty?', hu: 'Miben különbözik a Selekta HD a szabványos Selektától?' },
        answer: {
          de: 'Stärkere Spindelantriebe, größere Bohrtiefen, verstärkte Spanntechnik und Klebstoffdosierung für größere Dübel.',
          en: 'Stronger spindle drives, larger drilling depths, reinforced clamping technology and glue dosing for larger dowels.',
          cz: 'Silnější pohony vřeten, větší hloubky vrtání, zesílená upínací technika a dávkování lepidla pro větší kolíky.',
          sk: 'Silnejšie pohony vretien, väčšie hĺbky vŕtania, zosilnená upínacia technika a dávkovanie lepidla pre väčšie kolíky.',
          hu: 'Erősebb orsóhajtások, nagyobb fúrási mélységek, megerősített szorítástechnika és ragasztóadagolás nagyobb csapokhoz.',
        },
      },
      {
        question: { de: 'Lässt sich die Linie mit Pressen kombinieren?', en: 'Can the line be combined with presses?', cz: 'Lze linku kombinovat s lisy?', sk: 'Dá sa linka kombinovať s lismi?', hu: 'Kombinálható a sor présekkel?' },
        answer: {
          de: 'Ja — nach der Selekta HD folgt typischerweise eine Türen- oder Rahmenpresse für die Aushärtung. Asamer plant die Gesamtlinie.',
          en: 'Yes — after the Selekta HD, a door or frame press typically follows for curing. Asamer plans the complete line.',
          cz: 'Ano — po Selekta HD typicky následuje dveřní nebo rámový lis pro vytvrzení. Asamer plánuje celou linku.',
          sk: 'Áno — po Selekta HD typicky nasleduje dverný alebo rámový lis pre vytvrdnutie. Asamer plánuje celú linku.',
          hu: 'Igen — a Selekta HD után tipikusan ajtó- vagy keretprés következik a kikeményedéshez. Az Asamer tervezi a teljes sort.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  INSERTION_DOOR — injecta-hd                                        */
  /* ------------------------------------------------------------------ */
  'injecta-hd': {
    longDescription: {
      de: `Die Gannomat Injecta HD ist die Klebeinjektions-Variante für den Türen- und Fensterbau. Sie arbeitet nach demselben Prinzip wie die Standard-Injecta — Einspritzung des Klebstoffs unter kontrolliertem Druck nach dem Dübelsetzen — ist aber auf die höheren Lasten, größeren Dübel und tieferen Bohrungen in Türrahmen, Fensterrahmen und Haustürblättern ausgelegt. Für tragende Türkonstruktionen, Brand- und Schallschutztüren oder Objektfenster, bei denen die Dübelverbindung hohe statische und dynamische Belastungen aufnehmen muss, ist die Injecta HD die passende Station in der Produktionslinie. Sie ergänzt Selekta HD oder Index DW um eine vollflächig verklebte Verbindung ohne Lufteinschlüsse. Asamer ist autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn und integriert die Injecta HD in bestehende Fertigungslinien.`,
      en: `The Gannomat Injecta HD is the glue injection variant for door and window construction. It works on the same principle as the standard Injecta — injection of glue under controlled pressure after dowel setting — but is designed for the higher loads, larger dowels and deeper drillings in door frames, window frames and entrance door leaves. For load-bearing door constructions, fire and acoustic doors or contract windows, where the dowel joint must absorb high static and dynamic loads, the Injecta HD is the right station in the production line. It complements Selekta HD or Index DW with a fully glued joint without air inclusions. Asamer is authorized Gannomat dealer for Czech Republic, Slovakia and Hungary and integrates the Injecta HD into existing production lines.`,
      cz: `Gannomat Injecta HD je varianta injektáže lepidla pro stavbu dveří a oken. Pracuje na stejném principu jako standardní Injecta — vstřikování lepidla pod kontrolovaným tlakem po vsazení kolíku — je však konstruována pro vyšší zatížení, větší kolíky a hlubší vrtání v dveřních rámech, okenních rámech a vchodových dveřních křídlech. Pro nosné konstrukce dveří, protipožární a protihlukové dveře nebo objektová okna, kde kolíkový spoj musí absorbovat vysoké statické a dynamické zatížení, je Injecta HD vhodnou stanicí ve výrobní lince. Doplňuje Selekta HD nebo Index DW o plošně lepený spoj bez vzduchových inkluzí. Asamer je autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko a integruje Injecta HD do stávajících výrobních linek.`,
      sk: `Gannomat Injecta HD je variant injektáže lepidla pre stavbu dverí a okien. Pracuje na rovnakom princípe ako štandardná Injecta — vstrekovanie lepidla pod kontrolovaným tlakom po vsadení kolíka — je však konštruovaná pre vyššie zaťaženie, väčšie kolíky a hlbšie vŕtanie v dverných rámoch, okenných rámoch a vchodových dverných krídlach. Pre nosné konštrukcie dverí, protipožiarne a protihlukové dvere alebo objektové okná, kde kolíkový spoj musí absorbovať vysoké statické a dynamické zaťaženie, je Injecta HD vhodnou stanicou vo výrobnej linke. Dopĺňa Selekta HD alebo Index DW o plošne lepený spoj bez vzduchových inklúzií. Asamer je autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko a integruje Injecta HD do existujúcich výrobných liniek.`,
      hu: `A Gannomat Injecta HD a ragasztóinjektálás ajtó- és ablakgyártási változata. Ugyanazon az elven működik, mint a szabványos Injecta — a ragasztó kontrollált nyomás alatti injektálása a csapbeültetés után —, de az ajtókeretek, ablakkeretek és bejárati ajtólapok nagyobb terheléseihez, nagyobb csapjaihoz és mélyebb furataihoz tervezték. Teherhordó ajtószerkezetekhez, tűz- és hangszigetelő ajtókhoz vagy projektablakokhoz, ahol a csapkötésnek magas statikus és dinamikus terhelést kell felvennie, az Injecta HD a megfelelő állomás a gyártósoron. Kiegészíti a Selekta HD-t vagy az Index DW-t egy teljes felületen ragasztott, légzárvány nélküli kötéssel. Az Asamer a hivatalos Gannomat-forgalmazó Csehország, Szlovákia és Magyarország számára, és az Injecta HD-t beépíti a meglévő gyártósorokba.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für tragende Türblätter', en: 'For load-bearing door leaves', cz: 'Pro nosná dveřní křídla', sk: 'Pre nosné dverné krídla', hu: 'Teherhordó ajtólapokhoz' },
        body: {
          de: 'Tragende Türblätter — etwa Haustüren, Brand- oder Schallschutztüren — müssen dauerhaft zyklische Belastungen aushalten. Die Injecta HD sichert die Dübelverbindung durch vollständige Hohlraumfüllung und erhöht so Festigkeit und Lebensdauer deutlich.',
          en: 'Load-bearing door leaves — such as entrance doors, fire or acoustic doors — must withstand cyclic loads permanently. The Injecta HD secures the dowel joint through complete cavity filling, significantly increasing strength and service life.',
          cz: 'Nosná dveřní křídla — například vchodové, protipožární nebo protihlukové dveře — musí trvale snášet cyklická zatížení. Injecta HD zajišťuje kolíkový spoj úplným vyplněním dutiny a výrazně zvyšuje pevnost a životnost.',
          sk: 'Nosné dverné krídla — napríklad vchodové, protipožiarne alebo protihlukové dvere — musia trvalo znášať cyklické zaťaženia. Injecta HD zabezpečuje kolíkový spoj úplným vyplnením dutiny a výrazne zvyšuje pevnosť a životnosť.',
          hu: 'A teherhordó ajtólapoknak — például bejárati, tűz- vagy hangszigetelő ajtóknak — tartósan el kell viselniük a ciklikus terheléseket. Az Injecta HD a csapkötést teljes üregkitöltéssel biztosítja, jelentősen növelve a szilárdságot és élettartamot.',
        },
      },
      {
        heading: { de: 'Für Fensterrahmen im Objektbau', en: 'For window frames in contract construction', cz: 'Pro okenní rámy v objektové výstavbě', sk: 'Pre okenné rámy v objektovej výstavbe', hu: 'Ablakkeretekhez projektépítésben' },
        body: {
          de: 'Objektfenster werden oft unter extremen Witterungsbedingungen verbaut. Die Klebeinjektion schützt die Verbindung vor Feuchtigkeits- und Temperatureinflüssen — eine Voraussetzung für lange Nutzungsdauer bei Passivhäusern oder Gewerbebauten.',
          en: 'Contract windows are often installed under extreme weather conditions. The glue injection protects the joint against moisture and temperature influences — a prerequisite for long service life in passive houses or commercial buildings.',
          cz: 'Objektová okna se často montují za extrémních povětrnostních podmínek. Injektáž lepidla chrání spoj před vlivem vlhkosti a teploty — předpoklad dlouhé životnosti u pasivních domů nebo komerčních staveb.',
          sk: 'Objektové okná sa často montujú za extrémnych poveternostných podmienok. Injektáž lepidla chráni spoj pred vplyvom vlhkosti a teploty — predpoklad dlhej životnosti pri pasívnych domoch alebo komerčných stavbách.',
          hu: 'A projektablakokat gyakran extrém időjárási körülmények között szerelik be. A ragasztóinjektálás védi a kötést a nedvesség- és hőmérséklethatásoktól — előfeltétel a hosszú élettartamhoz passzívházakban vagy kereskedelmi épületekben.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Injecta HD ist kein eigenständiger Einstieg, sondern die Spezialstation in Türen- oder Fensterlinien mit hohen Festigkeitsanforderungen. Für Standard-Türenfertigung ohne statische Sonderanforderungen reicht die Selekta HD allein; kommt die Injecta HD als Zusatz dazu, spricht man Markt- oder Objektkunden mit zertifizierten Anforderungen an.',
      en: 'The Injecta HD is not a standalone entry, but the special station in door or window lines with high strength requirements. For standard door production without special static requirements, the Selekta HD alone is sufficient; when the Injecta HD is added, you address market or contract customers with certified requirements.',
      cz: 'Injecta HD není samostatný vstupní stroj, ale speciální stanice v linkách dveří nebo oken s vysokými nároky na pevnost. Pro standardní výrobu dveří bez speciálních statických požadavků postačí samotná Selekta HD; pokud se Injecta HD doplní, oslovíte tržní nebo objektové zákazníky s certifikovanými požadavky.',
      sk: 'Injecta HD nie je samostatný vstupný stroj, ale špeciálna stanica v linkách dverí alebo okien s vysokými nárokmi na pevnosť. Pre štandardnú výrobu dverí bez špeciálnych statických požiadaviek postačí samotná Selekta HD; ak sa Injecta HD doplní, oslovíte trhových alebo objektových zákazníkov s certifikovanými požiadavkami.',
      hu: 'Az Injecta HD nem önálló belépő gép, hanem különleges állomás magas szilárdsági követelményű ajtó- vagy ablaksorokban. Szabványos ajtógyártáshoz különleges statikai követelmények nélkül a Selekta HD önmagában elegendő; ha az Injecta HD kiegészítésként jelen van, piaci vagy projektügyfeleket céloz meg tanúsított követelményekkel.',
    },
    faq: [
      {
        question: { de: 'Welche Klebstoffe werden bei Türen eingesetzt?', en: 'Which adhesives are used for doors?', cz: 'Jaká lepidla se používají u dveří?', sk: 'Aké lepidlá sa používajú pri dverách?', hu: 'Milyen ragasztókat használnak ajtóknál?' },
        answer: {
          de: 'Typisch PUR-Klebstoffe für hohe Festigkeit und Feuchteresistenz. Asamer berät zur normgerechten Auswahl.',
          en: 'Typically PUR adhesives for high strength and moisture resistance. Asamer advises on norm-compliant selection.',
          cz: 'Typicky PUR lepidla pro vysokou pevnost a odolnost proti vlhkosti. Asamer radí s výběrem v souladu s normami.',
          sk: 'Typicky PUR lepidlá pre vysokú pevnosť a odolnosť proti vlhkosti. Asamer radí s výberom v súlade s normami.',
          hu: 'Jellemzően PUR-ragasztók nagy szilárdsághoz és nedvességállósághoz. Az Asamer szabványkonform kiválasztáshoz ad tanácsot.',
        },
      },
      {
        question: { de: 'Benötigt die Injecta HD ein separates Steuerungssystem?', en: 'Does the Injecta HD require a separate control system?', cz: 'Vyžaduje Injecta HD samostatný řídicí systém?', sk: 'Vyžaduje Injecta HD samostatný riadiaci systém?', hu: 'Igényel az Injecta HD külön vezérlőrendszert?' },
        answer: {
          de: 'Nein — sie wird in die Steuerung der Linie integriert und synchronisiert sich mit Selekta HD oder Index DW.',
          en: 'No — it is integrated into the line control and synchronises with Selekta HD or Index DW.',
          cz: 'Ne — je integrována do řízení linky a synchronizuje se se Selekta HD nebo Index DW.',
          sk: 'Nie — je integrovaná do riadenia linky a synchronizuje sa so Selekta HD alebo Index DW.',
          hu: 'Nem — a sor vezérlésébe integrálódik, és szinkronizálódik a Selekta HD-val vagy Index DW-vel.',
        },
      },
      {
        question: { de: 'Ist die Klebstoffmenge pro Dübel einstellbar?', en: 'Is the glue quantity per dowel adjustable?', cz: 'Lze nastavit množství lepidla na kolík?', sk: 'Dá sa nastaviť množstvo lepidla na kolík?', hu: 'Állítható a ragasztómennyiség csaponként?' },
        answer: {
          de: 'Ja — digital programmierbar, abgestimmt auf Dübeldurchmesser und Bohrtiefe.',
          en: 'Yes — digitally programmable, matched to dowel diameter and drilling depth.',
          cz: 'Ano — digitálně programovatelné, přizpůsobené průměru kolíku a hloubce vrtání.',
          sk: 'Áno — digitálne programovateľné, prispôsobené priemeru kolíka a hĺbke vŕtania.',
          hu: 'Igen — digitálisan programozható, a csapátmérőhöz és fúrási mélységhez igazítva.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  INSERTION_DOOR — index-dw-reihe-cnc                                */
  /* ------------------------------------------------------------------ */
  'index-dw-reihe-cnc': {
    longDescription: {
      de: `Die Gannomat Index DW Reihe CNC ist ein CNC-gesteuerter Bohrautomat speziell für Tür- und Fensterrahmen (DW = door/window). Während die Standard-Index Reihe CNC auf Möbel- und Korpusteile abzielt, bearbeitet die Index DW Reihe CNC die besonderen Anforderungen der Tür- und Fensterproduktion: lange Rahmenhölzer, Pfosten, Riegel und Türblätter mit komplexen Bohrbildern für Beschläge, Schlösser und Dübel. Die vollständige CNC-Programmierung ermöglicht Losgröße-1-Fertigung ohne manuelle Umrüstung — ideal für Objekt- und Auftragsfertigung, bei der jede Tür oder jedes Fenster unterschiedlich ist. Asamer ist autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn und liefert die Index DW Reihe CNC inklusive Programmierung der Bohrbilder, ERP-Anbindung und Bedienerschulung.`,
      en: `The Gannomat Index DW Reihe CNC is a CNC-controlled drilling machine specifically for door and window frames (DW = door/window). While the standard Index Reihe CNC targets furniture and carcass parts, the Index DW Reihe CNC handles the special requirements of door and window production: long frame timbers, posts, transoms and door leaves with complex drilling patterns for fittings, locks and dowels. Full CNC programming enables batch-size-1 production without manual changeover — ideal for contract and order production where every door or window is different. Asamer is authorized Gannomat dealer for Czech Republic, Slovakia and Hungary and supplies the Index DW Reihe CNC including programming of drilling patterns, ERP integration and operator training.`,
      cz: `Gannomat Index DW Reihe CNC je CNC řízený vrtací automat speciálně pro dveřní a okenní rámy (DW = door/window). Zatímco standardní Index Reihe CNC cílí na nábytkové a korpusové díly, Index DW Reihe CNC zpracovává speciální požadavky výroby dveří a oken: dlouhá rámová dřeva, sloupky, příčníky a dveřní křídla s komplexními vrtacími vzory pro kování, zámky a kolíky. Plné CNC programování umožňuje výrobu dávky 1 bez ruční přestavby — ideální pro objektovou a zakázkovou výrobu, kde jsou každé dveře nebo okno jiné. Asamer je autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko a dodává Index DW Reihe CNC včetně programování vrtacích vzorů, napojení na ERP a školení obsluhy.`,
      sk: `Gannomat Index DW Reihe CNC je CNC riadený vŕtací automat špeciálne pre dverné a okenné rámy (DW = door/window). Zatiaľ čo štandardný Index Reihe CNC cieli na nábytkové a korpusové diely, Index DW Reihe CNC spracováva špeciálne požiadavky výroby dverí a okien: dlhé rámové drevá, stĺpiky, priečniky a dverné krídla s komplexnými vŕtacími vzormi pre kovanie, zámky a kolíky. Plné CNC programovanie umožňuje výrobu dávky 1 bez ručnej prestavby — ideálne pre objektovú a zákazkovú výrobu, kde sú každé dvere alebo okno iné. Asamer je autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko a dodáva Index DW Reihe CNC vrátane programovania vŕtacích vzorov, napojenia na ERP a školenia obsluhy.`,
      hu: `A Gannomat Index DW Reihe CNC egy CNC-vezérelt fúróautomata, kifejezetten ajtó- és ablakkeretekhez (DW = door/window). Míg a szabványos Index Reihe CNC bútor- és korpuszelemeket céloz, az Index DW Reihe CNC az ajtó- és ablakgyártás különleges követelményeit kezeli: hosszú keretfákat, oszlopokat, keresztbordákat és ajtólapokat komplex fúrásmintákkal szerelvényekhez, zárakhoz és csapokhoz. A teljes CNC-programozás 1-es tételszámú gyártást tesz lehetővé kézi átállás nélkül — ideális projekt- és megrendeléses gyártáshoz, ahol minden ajtó vagy ablak különböző. Az Asamer a hivatalos Gannomat-forgalmazó Csehország, Szlovákia és Magyarország számára, és az Index DW Reihe CNC-t a fúrásminták programozásával, ERP-integrációval és kezelői képzéssel szállítja.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Objekt- und Projektfertigung', en: 'For contract and project production', cz: 'Pro objektovou a projektovou výrobu', sk: 'Pre objektovú a projektovú výrobu', hu: 'Objektum- és projektgyártáshoz' },
        body: {
          de: 'Im Objektbau ist jede Tür und jedes Fenster individuell konfiguriert: unterschiedliche Beschläge, Maße, Schlosssysteme. Die Index DW Reihe CNC fährt jedes Werkstück nach eigenem CNC-Programm — ERP-Anbindung liefert die Bohrbilder direkt aus der Projektplanung.',
          en: 'In contract construction, every door and every window is individually configured: different fittings, dimensions, lock systems. The Index DW Reihe CNC runs every workpiece with its own CNC program — ERP integration delivers the drilling patterns directly from project planning.',
          cz: 'V objektové výstavbě je každé dveře a každé okno individuálně konfigurováno: různé kování, rozměry, zámkové systémy. Index DW Reihe CNC jede každý obrobek podle vlastního CNC programu — napojení na ERP dodává vrtací vzory přímo z projektového plánování.',
          sk: 'V objektovej výstavbe je každé dvere a každé okno individuálne konfigurované: rôzne kovanie, rozmery, zámkové systémy. Index DW Reihe CNC ide každý obrobok podľa vlastného CNC programu — napojenie na ERP dodáva vŕtacie vzory priamo z projektového plánovania.',
          hu: 'A projektépítésben minden ajtó és ablak egyedileg konfigurált: különböző szerelvények, méretek, zárrendszerek. Az Index DW Reihe CNC minden munkadarabot saját CNC-programmal futtat — az ERP-integráció közvetlenül a projekttervezésből szállítja a fúrásmintákat.',
        },
      },
      {
        heading: { de: 'Für variantenreiche Haustürenfertigung', en: 'For variant-rich entrance door production', cz: 'Pro variantně bohatou výrobu vchodových dveří', sk: 'Pre variantne bohatú výrobu vchodových dverí', hu: 'Variáns-gazdag bejárati ajtó gyártáshoz' },
        body: {
          de: 'Haustürenhersteller bieten hunderte Konfigurationen aus Füllungen, Griffen, Schlössern und Glaseinsätzen. Die Index DW Reihe CNC bohrt alle nötigen Öffnungen in exakter Position — egal welche Konfiguration gerade produziert wird.',
          en: 'Entrance door manufacturers offer hundreds of configurations of panels, handles, locks and glass inserts. The Index DW Reihe CNC drills all necessary openings in exact position — regardless of which configuration is currently produced.',
          cz: 'Výrobci vchodových dveří nabízejí stovky konfigurací výplní, klik, zámků a skleněných vložek. Index DW Reihe CNC vrtá všechny potřebné otvory v přesné pozici — bez ohledu na to, která konfigurace se právě vyrábí.',
          sk: 'Výrobcovia vchodových dverí ponúkajú stovky konfigurácií výplní, kľučiek, zámkov a sklenených vložiek. Index DW Reihe CNC vŕta všetky potrebné otvory v presnej pozícii — bez ohľadu na to, ktorá konfigurácia sa práve vyrába.',
          hu: 'A bejárati ajtó gyártók betétekből, kilincsekből, zárakból és üvegbetétekből több száz konfigurációt kínálnak. Az Index DW Reihe CNC minden szükséges nyílást pontos pozícióban fúr — függetlenül attól, melyik konfiguráció gyártása zajlik éppen.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Index DW Reihe CNC ist die richtige Wahl, wenn Ihre Tür- oder Fensterfertigung durch hohe Variantenzahl oder Einzelaufträge geprägt ist. Für gleichförmige Standardtüren in Großserie ist die Selekta HD wirtschaftlicher; für Speziallastfälle ergänzen Sie mit Injecta HD.',
      en: 'The Index DW Reihe CNC is the right choice when your door or window production is characterised by high variant numbers or individual orders. For uniform standard doors in large series, the Selekta HD is more economical; for special load cases, complement with Injecta HD.',
      cz: 'Index DW Reihe CNC je správnou volbou, pokud je vaše výroba dveří nebo oken charakterizována vysokým počtem variant nebo individuálními zakázkami. Pro jednotné standardní dveře ve velkosérii je ekonomičtější Selekta HD; pro speciální zatížení doplňte o Injecta HD.',
      sk: 'Index DW Reihe CNC je správnou voľbou, ak je vaša výroba dverí alebo okien charakterizovaná vysokým počtom variantov alebo individuálnymi zákazkami. Pre jednotné štandardné dvere vo veľkosérii je ekonomickejšia Selekta HD; pre špeciálne zaťaženie doplňte o Injecta HD.',
      hu: 'Az Index DW Reihe CNC a megfelelő választás, ha az ajtó- vagy ablakgyártását magas variánsszám vagy egyedi megrendelések jellemzik. Egységes szabvány ajtókhoz nagysorozatban a Selekta HD gazdaságosabb; különleges terhelési esetekhez egészítse ki Injecta HD-val.',
    },
    faq: [
      {
        question: { de: 'Welche CNC-Steuerung nutzt die Index DW Reihe CNC?', en: 'Which CNC control does the Index DW Reihe CNC use?', cz: 'Jaké CNC řízení používá Index DW Reihe CNC?', sk: 'Aké CNC riadenie používa Index DW Reihe CNC?', hu: 'Milyen CNC-vezérlést használ az Index DW Reihe CNC?' },
        answer: {
          de: 'Moderne Gannomat-CNC-Steuerung mit Touch-Bedienung, Programmspeicher und ERP-Schnittstellen über OPC-UA.',
          en: 'Modern Gannomat CNC control with touch operation, program memory and ERP interfaces via OPC-UA.',
          cz: 'Moderní Gannomat CNC řízení s dotykovým ovládáním, pamětí programů a ERP rozhraními přes OPC-UA.',
          sk: 'Moderné Gannomat CNC riadenie s dotykovým ovládaním, pamäťou programov a ERP rozhraniami cez OPC-UA.',
          hu: 'Modern Gannomat CNC-vezérlés érintéses kezeléssel, programmemóriával és OPC-UA-n keresztüli ERP-interfészekkel.',
        },
      },
      {
        question: { de: 'Kann die Maschine ohne Programmierkenntnisse bedient werden?', en: 'Can the machine be operated without programming knowledge?', cz: 'Lze stroj ovládat bez znalosti programování?', sk: 'Dá sa stroj ovládať bez znalosti programovania?', hu: 'Kezelhető a gép programozási ismeretek nélkül?' },
        answer: {
          de: 'Ja — die Programme werden einmalig eingerichtet, danach genügt Programmwahl. Asamer richtet Ihre Standardprogramme bei der Inbetriebnahme ein.',
          en: 'Yes — programs are set up once, afterwards program selection suffices. Asamer sets up your standard programs during commissioning.',
          cz: 'Ano — programy se jednorázově nastaví, poté stačí výběr programu. Asamer nastaví vaše standardní programy při uvedení do provozu.',
          sk: 'Áno — programy sa jednorazovo nastavia, potom stačí výber programu. Asamer nastaví vaše štandardné programy pri uvedení do prevádzky.',
          hu: 'Igen — a programokat egyszer beállítjuk, utána a programválasztás elegendő. Az Asamer az üzembe helyezéskor beállítja a szabvány programjait.',
        },
      },
      {
        question: { de: 'Maximale Werkstücklänge?', en: 'Maximum workpiece length?', cz: 'Maximální délka obrobku?', sk: 'Maximálna dĺžka obrobku?', hu: 'Maximális munkadarabhossz?' },
        answer: {
          de: 'Rahmenhölzer bis ca. 3.000 mm Standard; Sondermaße für Überformate auf Anfrage.',
          en: 'Frame timbers up to approx. 3,000 mm standard; special dimensions for oversized formats on request.',
          cz: 'Rámová dřeva do cca 3.000 mm standard; speciální rozměry pro nadměrné formáty na vyžádání.',
          sk: 'Rámové drevá do cca 3.000 mm štandard; špeciálne rozmery pre nadmerné formáty na vyžiadanie.',
          hu: 'Keretfák kb. 3000 mm-ig szabvány; egyedi méretek túlméretes formátumokhoz kérésre.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  CARCASS — concept-easy                                             */
  /* ------------------------------------------------------------------ */
  'concept-easy': {
    longDescription: {
      de: `Die Gannomat Concept Easy ist die Einstiegs-Korpuspresse der Concept-Baureihe, entwickelt für Tischlereien und kleinere Möbelbetriebe. Sie übernimmt die Verklebung und Stabilisierung von Korpussen nach dem Dübelsetzen: Der Korpus wird manuell eingelegt, unter kontrolliertem Druck gespannt und nach definierter Zeit wieder freigegeben. Im Vergleich zur vollautomatischen Concept Primus ist die Concept Easy auf manuelle Bestückung ausgelegt — ideal für Betriebe, die aus der rein handwerklichen Korpusverleimung in eine mechanisierte Lösung einsteigen wollen, ohne gleich in ein vollautomatisches System zu investieren. Der Bedienkomfort ist einfach genug für normal qualifiziertes Personal. Asamer liefert die Concept Easy als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn inklusive Schulung, Werkzeugeinrichtung und langfristiger Ersatzteilversorgung.`,
      en: `The Gannomat Concept Easy is the entry-level carcass press of the Concept series, developed for joinery shops and smaller furniture operations. It handles gluing and stabilisation of carcasses after dowel setting: the carcass is placed manually, clamped under controlled pressure and released after a defined time. Compared to the fully automatic Concept Primus, the Concept Easy is designed for manual loading — ideal for operations that want to move from purely manual carcass gluing to a mechanised solution without investing in a fully automated system. Operating comfort is simple enough for normally qualified personnel. Asamer supplies the Concept Easy as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary including training, tool setup and long-term spare parts supply.`,
      cz: `Gannomat Concept Easy je vstupní korpusový lis řady Concept, vyvinutý pro truhlárny a menší nábytkářské provozy. Přebírá lepení a stabilizaci korpusu po vsazení kolíků: korpus se vloží ručně, sevře se pod kontrolovaným tlakem a po definovaném čase se uvolní. Ve srovnání s plně automatickou Concept Primus je Concept Easy konstruován na ruční zakládání — ideální pro provozy, které chtějí přejít z čistě ruční lepení korpusu na mechanizované řešení, aniž by hned investovaly do plně automatizovaného systému. Komfort obsluhy je dostatečně jednoduchý pro běžně kvalifikovaný personál. Asamer dodává Concept Easy jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko včetně školení, nastavení nástrojů a dlouhodobého zásobování náhradními díly.`,
      sk: `Gannomat Concept Easy je vstupný korpusový lis radu Concept, vyvinutý pre truhlárne a menšie nábytkárske prevádzky. Preberá lepenie a stabilizáciu korpusu po vsadení kolíkov: korpus sa vloží ručne, zovrie sa pod kontrolovaným tlakom a po definovanom čase sa uvoľní. V porovnaní s plne automatickou Concept Primus je Concept Easy konštruovaný na ručné zakladanie — ideálny pre prevádzky, ktoré chcú prejsť z čisto ručného lepenia korpusu na mechanizované riešenie, bez toho aby hneď investovali do plne automatizovaného systému. Komfort obsluhy je dostatočne jednoduchý pre bežne kvalifikovaný personál. Asamer dodáva Concept Easy ako autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko vrátane školenia, nastavenia nástrojov a dlhodobého zásobovania náhradnými dielmi.`,
      hu: `A Gannomat Concept Easy a Concept sorozat belépő szintű korpuszprése, asztalosüzemek és kisebb bútoripari üzemek számára kifejlesztve. A csapbeültetés utáni ragasztást és stabilizálást végzi: a korpuszt kézzel helyezik be, kontrollált nyomás alatt befogja, majd meghatározott idő után elengedi. A teljesen automatikus Concept Primushoz képest a Concept Easy kézi bepakolásra van tervezve — ideális olyan üzemeknek, amelyek a tisztán kézi korpuszragasztásból mechanizált megoldásra akarnak áttérni anélkül, hogy azonnal teljesen automatizált rendszerbe fektetnének. A kezelési komfort elég egyszerű normál képzettségű személyzet számára. Az Asamer a Concept Easy gépet hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra, képzéssel, szerszámbeállítással és hosszú távú alkatrészellátással együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Tischlereien mit Korpusfertigung', en: 'For joinery shops with carcass production', cz: 'Pro truhlárny s výrobou korpusu', sk: 'Pre truhlárne s výrobou korpusu', hu: 'Korpuszgyártású asztalosüzemek számára' },
        body: {
          de: 'Kleine und mittlere Tischlereien fertigen Küchenkorpusse, Einbaumöbel oder Objekteinrichtungen in überschaubarer Stückzahl. Die Concept Easy ersetzt die klassische Zwingen-Methode durch reproduzierbaren Maschinendruck — mit deutlich verbesserter Winkelgenauigkeit und höherem Tagesdurchsatz.',
          en: 'Small and mid-sized joinery shops produce kitchen carcasses, built-in furniture or contract interiors in manageable quantities. The Concept Easy replaces the classic clamp method with reproducible machine pressure — with significantly improved angle accuracy and higher daily throughput.',
          cz: 'Malé a střední truhlárny vyrábějí kuchyňské korpusy, vestavěný nábytek nebo interiérové vybavení v přehledném počtu kusů. Concept Easy nahrazuje klasickou svorkovou metodu reprodukovatelným strojním tlakem — s výrazně zlepšenou úhlovou přesností a vyšším denním průtokem.',
          sk: 'Malé a stredné truhlárne vyrábajú kuchynské korpusy, vstavaný nábytok alebo interiérové vybavenie v prehľadnom počte kusov. Concept Easy nahrádza klasickú svorkovú metódu reprodukovateľným strojným tlakom — s výrazne zlepšenou uhlovou presnosťou a vyšším denným prietokom.',
          hu: 'Kis és közepes asztalosüzemek konyhakorpuszokat, beépített bútorokat vagy projektinteriőröket gyártanak áttekinthető darabszámban. A Concept Easy a klasszikus szorítós módszert reprodukálható gépi nyomással váltja fel — jelentősen javított szögpontossággal és magasabb napi áteresztőképességgel.',
        },
      },
      {
        heading: { de: 'Als Einstieg in mechanisierte Fertigung', en: 'As entry into mechanised production', cz: 'Jako vstup do mechanizované výroby', sk: 'Ako vstup do mechanizovanej výroby', hu: 'Belépésként a mechanizált gyártásba' },
        body: {
          de: 'Betriebe, die erstmals eine Korpuspresse anschaffen, schätzen die überschaubare Investition und einfache Bedienung der Concept Easy. Bei wachsendem Durchsatz lässt sich später zur Concept Eco oder Concept Primus aufrüsten.',
          en: 'Operations buying a carcass press for the first time appreciate the manageable investment and simple operation of the Concept Easy. With growing throughput, upgrade to the Concept Eco or Concept Primus is possible later.',
          cz: 'Provozy, které si poprvé pořizují korpusový lis, oceňují přehlednou investici a jednoduchou obsluhu Concept Easy. Při rostoucím průtoku lze později přejít na Concept Eco nebo Concept Primus.',
          sk: 'Prevádzky, ktoré si po prvýkrát obstarávajú korpusový lis, oceňujú prehľadnú investíciu a jednoduchú obsluhu Concept Easy. Pri rastúcom prietoku možno neskôr prejsť na Concept Eco alebo Concept Primus.',
          hu: 'Az első korpuszprést vásárló üzemek értékelik a Concept Easy áttekinthető beruházását és egyszerű kezelését. Növekvő áteresztőképesség esetén később Concept Eco-ra vagy Concept Primus-ra lehet bővíteni.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Concept Easy ist die richtige Wahl für Tischlereien mit manueller Bestückung und Tagesausstoß bis ca. 50 Korpussen. Für mittleren Durchsatz wählen Sie die halbautomatische Concept Eco, für industrielle Dauerfertigung die Concept Primus oder die Korpus-Montagelinie als Komplettsystem.',
      en: 'The Concept Easy is the right choice for joinery shops with manual loading and daily output up to approx. 50 carcasses. For medium throughput, choose the semi-automatic Concept Eco; for industrial continuous production, the Concept Primus or the Korpus-Montagelinie as complete system.',
      cz: 'Concept Easy je správnou volbou pro truhlárny s ručním zakládáním a denním výstupem do cca 50 korpusů. Pro střední průtok zvolte poloautomatickou Concept Eco, pro průmyslovou nepřetržitou výrobu Concept Primus nebo Korpus-Montagelinie jako kompletní systém.',
      sk: 'Concept Easy je správnou voľbou pre truhlárne s ručným zakladaním a denným výstupom do cca 50 korpusov. Pre stredný prietok zvoľte poloautomatickú Concept Eco, pre priemyselnú nepretržitú výrobu Concept Primus alebo Korpus-Montagelinie ako kompletný systém.',
      hu: 'A Concept Easy a megfelelő választás kézi bepakolású asztalosüzemeknek, kb. 50 korpusz napi kibocsátásig. Közepes áteresztőképességhez válassza a félautomatikus Concept Eco-t, ipari folyamatos gyártáshoz a Concept Primus-t vagy a Korpus-Montagelinie-t komplett rendszerként.',
    },
    faq: [
      {
        question: { de: 'Welche Korpusgrößen sind möglich?', en: 'What carcass sizes are possible?', cz: 'Jaké velikosti korpusu jsou možné?', sk: 'Aké veľkosti korpusu sú možné?', hu: 'Milyen korpuszméretek lehetségesek?' },
        answer: {
          de: 'Küchen- und Korpusmaße typisch von 300 × 300 × 300 mm bis ca. 1.000 × 700 × 600 mm.',
          en: 'Kitchen and carcass sizes typically from 300 × 300 × 300 mm up to approx. 1,000 × 700 × 600 mm.',
          cz: 'Kuchyňské a korpusové rozměry obvykle od 300 × 300 × 300 mm do cca 1.000 × 700 × 600 mm.',
          sk: 'Kuchynské a korpusové rozmery obvykle od 300 × 300 × 300 mm do cca 1.000 × 700 × 600 mm.',
          hu: 'Konyha- és korpuszméretek jellemzően 300 × 300 × 300 mm-től kb. 1000 × 700 × 600 mm-ig.',
        },
      },
      {
        question: { de: 'Wird ein eigener Kompressor benötigt?', en: 'Is a separate compressor needed?', cz: 'Je potřeba vlastní kompresor?', sk: 'Je potrebný vlastný kompresor?', hu: 'Szükséges külön kompresszor?' },
        answer: {
          de: 'Ein Standard-Druckluftnetz der Werkstatt reicht meist aus; Asamer prüft das bei Anfrage.',
          en: 'A standard workshop compressed air network is usually sufficient; Asamer verifies this on request.',
          cz: 'Standardní tlaková vzduchová síť dílny obvykle postačí; Asamer to ověří na vyžádání.',
          sk: 'Štandardná tlaková vzduchová sieť dielne obvykle postačí; Asamer to overí na vyžiadanie.',
          hu: 'Egy szabványos műhelyi sűrítettlevegő-hálózat általában elegendő; az Asamer ezt kérésre ellenőrzi.',
        },
      },
      {
        question: { de: 'Kann die Presse später erweitert werden?', en: 'Can the press be upgraded later?', cz: 'Lze lis později rozšířit?', sk: 'Dá sa lis neskôr rozšíriť?', hu: 'Bővíthető a prés később?' },
        answer: {
          de: 'Die Maschine bleibt wie sie ist; Umstieg auf größere Concept-Modelle ist jederzeit möglich und wird von Asamer begleitet.',
          en: 'The machine stays as it is; switch to larger Concept models is possible anytime and supported by Asamer.',
          cz: 'Stroj zůstává takový, jaký je; přechod na větší modely Concept je kdykoli možný a doprovázen Asamerem.',
          sk: 'Stroj zostáva taký, aký je; prechod na väčšie modely Concept je kedykoľvek možný a sprevádzaný Asamerom.',
          hu: 'A gép olyan marad, amilyen; a nagyobb Concept modellekre való áttérés bármikor lehetséges, és az Asamer kíséri.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  CARCASS — concept-eco                                              */
  /* ------------------------------------------------------------------ */
  'concept-eco': {
    longDescription: {
      de: `Die Gannomat Concept Eco ist die halbautomatische Korpuspresse der Concept-Baureihe für mittlere Möbel- und Küchenhersteller. Sie positioniert sich zwischen der manuell bestückten Concept Easy und der vollautomatischen Concept Primus: Zuführung und Ausrichtung des Korpus werden von der Maschine unterstützt, der Bediener überwacht und steuert den Prozess. Das Ergebnis ist ein deutlich höherer Tagesdurchsatz bei gleichbleibender Qualität — ohne die Komplexität und Investitionshöhe einer vollautomatisierten Linie. Die Concept Eco eignet sich für Betriebe, die aus der reinen Handwerksfertigung in die mechanisierte Serienproduktion wachsen. Asamer liefert die Concept Eco als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn inklusive Einrichtung auf Ihre Korpusmaße, Schulung und Wartungsvertrag.`,
      en: `The Gannomat Concept Eco is the semi-automatic carcass press of the Concept series for medium furniture and kitchen manufacturers. It positions itself between the manually loaded Concept Easy and the fully automatic Concept Primus: feeding and alignment of the carcass are machine-assisted, the operator monitors and controls the process. The result is significantly higher daily throughput at consistent quality — without the complexity and investment level of a fully automated line. The Concept Eco is suitable for operations growing from purely craft production into mechanised series production. Asamer supplies the Concept Eco as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary including setup to your carcass dimensions, training and maintenance contract.`,
      cz: `Gannomat Concept Eco je poloautomatický korpusový lis řady Concept pro střední výrobce nábytku a kuchyní. Umisťuje se mezi ručně zakládanou Concept Easy a plně automatickou Concept Primus: podávání a vyrovnání korpusu je strojně podporováno, obsluha sleduje a řídí proces. Výsledkem je výrazně vyšší denní průtok při stálé kvalitě — bez komplexity a výše investice plně automatizované linky. Concept Eco je vhodná pro provozy rostoucí z čistě řemeslné výroby do mechanizované sériové výroby. Asamer dodává Concept Eco jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko včetně seřízení na vaše rozměry korpusu, školení a servisní smlouvy.`,
      sk: `Gannomat Concept Eco je poloautomatický korpusový lis radu Concept pre stredných výrobcov nábytku a kuchýň. Umiestňuje sa medzi ručne zakladanú Concept Easy a plne automatickú Concept Primus: podávanie a vyrovnávanie korpusu je strojne podporované, obsluha sleduje a riadi proces. Výsledkom je výrazne vyšší denný prietok pri stálej kvalite — bez komplexity a výšky investície plne automatizovanej linky. Concept Eco je vhodná pre prevádzky rastúce z čisto remeselnej výroby do mechanizovanej sériovej výroby. Asamer dodáva Concept Eco ako autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko vrátane nastavenia na vaše rozmery korpusu, školenia a servisnej zmluvy.`,
      hu: `A Gannomat Concept Eco a Concept sorozat félautomatikus korpuszprése közepes bútor- és konyhagyártóknak. A kézi bepakolású Concept Easy és a teljesen automatikus Concept Primus között helyezkedik el: a korpusz adagolása és kiigazítása gépileg támogatott, a kezelő felügyeli és vezérli a folyamatot. Az eredmény jelentősen magasabb napi áteresztőképesség egyenletes minőség mellett — egy teljesen automatizált sor komplexitása és befektetési szintje nélkül. A Concept Eco alkalmas olyan üzemeknek, amelyek a tisztán kézműves gyártásból mechanizált sorozatgyártásba nőnek. Az Asamer a Concept Eco-t hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra, a korpuszméretekhez történő beállítással, képzéssel és karbantartási szerződéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für wachsende Küchenhersteller', en: 'For growing kitchen manufacturers', cz: 'Pro rostoucí výrobce kuchyní', sk: 'Pre rastúcich výrobcov kuchýň', hu: 'Növekvő konyhagyártóknak' },
        body: {
          de: 'Küchenhersteller mit 100 bis 300 Korpussen Tagesausstoß erreichen mit der Concept Eco die richtige Balance zwischen Automatisierungsgrad und Investitionshöhe. Die halbautomatische Bestückung entlastet den Bediener, während die Bedienung einfach bleibt.',
          en: 'Kitchen manufacturers with daily output of 100 to 300 carcasses achieve the right balance between automation level and investment with the Concept Eco. Semi-automatic loading relieves the operator while operation remains simple.',
          cz: 'Výrobci kuchyní s denním výstupem 100 až 300 korpusů dosahují s Concept Eco správné rovnováhy mezi stupněm automatizace a výší investice. Poloautomatické zakládání odlehčuje obsluze, zatímco obsluha zůstává jednoduchá.',
          sk: 'Výrobcovia kuchýň s denným výstupom 100 až 300 korpusov dosahujú s Concept Eco správnu rovnováhu medzi stupňom automatizácie a výškou investície. Poloautomatické zakladanie odľahčuje obsluhu, zatiaľ čo obsluha zostáva jednoduchá.',
          hu: '100-tól 300-ig terjedő napi korpuszkibocsátású konyhagyártók a Concept Eco-val a megfelelő egyensúlyt érik el az automatizáltság szintje és a beruházás mértéke között. A félautomatikus bepakolás tehermentesíti a kezelőt, miközben a kezelés egyszerű marad.',
        },
      },
      {
        heading: { de: 'Für variantenreiche Serienfertigung', en: 'For variant-rich series production', cz: 'Pro variantně bohatou sériovou výrobu', sk: 'Pre variantne bohatú sériovú výrobu', hu: 'Változatos sorozatgyártáshoz' },
        body: {
          de: 'Bei wechselnden Korpusformaten bietet die Concept Eco schnelle Umrüstung über einstellbare Anschläge. So bleibt die Linie auch bei kleineren Serien wirtschaftlich — ein Vorteil gegenüber starren Vollautomaten, die lange Einrichtzeiten haben.',
          en: 'With changing carcass formats, the Concept Eco offers quick changeover via adjustable stops. The line remains economical even with smaller series — an advantage over rigid full automatics with long setup times.',
          cz: 'Při měnících se formátech korpusu nabízí Concept Eco rychlou přestavbu přes nastavitelné dorazy. Linka zůstává ekonomická i u menších sérií — výhoda oproti rigidním plně automatickým strojům s dlouhými nastavovacími časy.',
          sk: 'Pri meniacich sa formátoch korpusu ponúka Concept Eco rýchlu prestavbu cez nastaviteľné dorazy. Linka zostáva ekonomická aj pri menších sériách — výhoda oproti rigidným plne automatickým strojom s dlhými nastavovacími časmi.',
          hu: 'Változó korpuszformátumoknál a Concept Eco gyors átállást kínál állítható ütközőkön keresztül. A sor kisebb sorozatoknál is gazdaságos marad — előny a merev, hosszú beállítási idejű teljesen automata gépekkel szemben.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Concept Eco ist die richtige Wahl für Mittelbetriebe mit wachsendem Korpusausstoß. Für kleinere Tischlereien mit manueller Bestückung ist die Concept Easy günstiger, für industrielle Dauerfertigung die Concept Primus oder die Korpus-Montagelinie als Komplettsystem.',
      en: 'The Concept Eco is the right choice for mid-sized operations with growing carcass output. For smaller joinery shops with manual loading, the Concept Easy is cheaper; for industrial continuous production, the Concept Primus or the Korpus-Montagelinie as complete system.',
      cz: 'Concept Eco je správnou volbou pro středně velké provozy s rostoucím výstupem korpusu. Pro menší truhlárny s ručním zakládáním je levnější Concept Easy, pro průmyslovou nepřetržitou výrobu Concept Primus nebo Korpus-Montagelinie jako kompletní systém.',
      sk: 'Concept Eco je správnou voľbou pre stredne veľké prevádzky s rastúcim výstupom korpusu. Pre menšie truhlárne s ručným zakladaním je lacnejšia Concept Easy, pre priemyselnú nepretržitú výrobu Concept Primus alebo Korpus-Montagelinie ako kompletný systém.',
      hu: 'A Concept Eco a megfelelő választás növekvő korpuszkibocsátású közepes üzemeknek. Kézi bepakolású kisebb asztalosüzemeknek a Concept Easy olcsóbb, ipari folyamatos gyártáshoz a Concept Primus vagy a Korpus-Montagelinie komplett rendszerként.',
    },
    faq: [
      {
        question: { de: 'Wie viele Korpusse pro Stunde?', en: 'How many carcasses per hour?', cz: 'Kolik korpusů za hodinu?', sk: 'Koľko korpusov za hodinu?', hu: 'Hány korpusz óránként?' },
        answer: {
          de: 'Typisch 20–40 Korpusse pro Stunde je nach Größe und Klebstoff.',
          en: 'Typically 20–40 carcasses per hour depending on size and glue.',
          cz: 'Typicky 20–40 korpusů za hodinu podle velikosti a lepidla.',
          sk: 'Typicky 20–40 korpusov za hodinu podľa veľkosti a lepidla.',
          hu: 'Jellemzően 20-40 korpusz óránként mérettől és ragasztótól függően.',
        },
      },
      {
        question: { de: 'Ist die Maschine für verschiedene Klebstoffe geeignet?', en: 'Is the machine suitable for different adhesives?', cz: 'Je stroj vhodný pro různá lepidla?', sk: 'Je stroj vhodný pre rôzne lepidlá?', hu: 'Alkalmas a gép különböző ragasztókhoz?' },
        answer: {
          de: 'Ja — PVA-, PUR- oder EVA-Systeme. Presszeiten werden im Steuerprogramm hinterlegt.',
          en: 'Yes — PVA, PUR or EVA systems. Pressing times are stored in the control program.',
          cz: 'Ano — PVA, PUR nebo EVA systémy. Časy lisování jsou uloženy v řídicím programu.',
          sk: 'Áno — PVA, PUR alebo EVA systémy. Časy lisovania sú uložené v riadiacom programe.',
          hu: 'Igen — PVA, PUR vagy EVA rendszerek. A préselési idők a vezérlőprogramban vannak tárolva.',
        },
      },
      {
        question: { de: 'Kann die Concept Eco in eine Linie integriert werden?', en: 'Can the Concept Eco be integrated into a line?', cz: 'Lze Concept Eco integrovat do linky?', sk: 'Dá sa Concept Eco integrovať do linky?', hu: 'Integrálható a Concept Eco gyártósorba?' },
        answer: {
          de: 'Teilweise — mit Ein- und Auslaufförderer ergibt sich eine halbautomatische Linie; für Vollautomatik wählen Sie die Concept Primus oder die Korpus-Montagelinie.',
          en: 'Partly — with infeed and outfeed conveyors, a semi-automatic line results; for full automation, choose the Concept Primus or the Korpus-Montagelinie.',
          cz: 'Částečně — se vstupním a výstupním dopravníkem vzniká poloautomatická linka; pro plnou automatizaci zvolte Concept Primus nebo Korpus-Montagelinie.',
          sk: 'Čiastočne — so vstupným a výstupným dopravníkom vzniká poloautomatická linka; pre plnú automatizáciu zvoľte Concept Primus alebo Korpus-Montagelinie.',
          hu: 'Részben — a be- és kivezető szállítószalaggal félautomatikus sor alakul ki; teljes automatizáláshoz válassza a Concept Primus-t vagy a Korpus-Montagelinie-t.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  CARCASS — lift-jumper                                              */
  /* ------------------------------------------------------------------ */
  'lift-jumper': {
    longDescription: {
      de: `Die Gannomat Lift Jumper ist die Hebetechnik für größere und schwerere Korpusse in der industriellen Möbelfertigung. Wo die Standard-Lift für übliche Küchen- und Büromöbelkorpusse konzipiert ist, bewegt die Lift Jumper auch übergroße Schrankkorpusse, Regaleinheiten oder Objektmöbel mit Gewichten weit über dem Standardbereich. Sie entlastet den Bediener, verhindert Rückenverletzungen und erhöht den Durchsatz in der Linie. Als ergänzende Station zu Selekta, Concept-Pressen oder Korpus-Montagelinie sorgt die Lift Jumper dafür, dass auch bei großen Stückgewichten ein kontinuierlicher Materialfluss möglich bleibt. Asamer liefert die Lift Jumper als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn inklusive Planung der Linieneinbindung, Sicherheitsabnahme und Schulung.`,
      en: `The Gannomat Lift Jumper is the lifting technology for larger and heavier carcasses in industrial furniture production. Where the standard Lift is designed for typical kitchen and office furniture carcasses, the Lift Jumper also moves oversized cabinet carcasses, shelving units or contract furniture with weights well above the standard range. It relieves the operator, prevents back injuries and increases throughput in the line. As a complementary station to Selekta, Concept presses or Korpus-Montagelinie, the Lift Jumper ensures that continuous material flow remains possible even with large unit weights. Asamer supplies the Lift Jumper as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary including line integration planning, safety approval and training.`,
      cz: `Gannomat Lift Jumper je zdvíhací technika pro větší a těžší korpusy v průmyslové výrobě nábytku. Zatímco standardní Lift je koncipován pro obvyklé korpusy kuchyňského a kancelářského nábytku, Lift Jumper pohybuje i nadrozměrnými skříňovými korpusy, regálovými jednotkami nebo objektovým nábytkem s hmotnostmi výrazně nad standardním rozsahem. Odlehčuje obsluze, zabraňuje zraněním zad a zvyšuje průtok v lince. Jako doplňková stanice k Selekta, Concept lisům nebo Korpus-Montagelinie zajišťuje Lift Jumper, aby i při velkých hmotnostech kusů zůstával možný kontinuální tok materiálu. Asamer dodává Lift Jumper jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko včetně plánování zapojení do linky, bezpečnostní přejímky a školení.`,
      sk: `Gannomat Lift Jumper je zdvíhacia technika pre väčšie a ťažšie korpusy v priemyselnej výrobe nábytku. Zatiaľ čo štandardný Lift je koncipovaný pre obvyklé korpusy kuchynského a kancelárskeho nábytku, Lift Jumper pohybuje aj nadrozmernými skriňovými korpusmi, regálovými jednotkami alebo objektovým nábytkom s hmotnosťami výrazne nad štandardným rozsahom. Odľahčuje obsluhe, zabraňuje zraneniam chrbta a zvyšuje prietok v linke. Ako doplnková stanica k Selekta, Concept lisom alebo Korpus-Montagelinie zabezpečuje Lift Jumper, aby aj pri veľkých hmotnostiach kusov zostal možný kontinuálny tok materiálu. Asamer dodáva Lift Jumper ako autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko vrátane plánovania zapojenia do linky, bezpečnostnej preberačky a školenia.`,
      hu: `A Gannomat Lift Jumper a nagyobb és nehezebb korpuszok emelőtechnikája az ipari bútorgyártásban. Míg a szabványos Lift a tipikus konyha- és irodabútor-korpuszokra van tervezve, a Lift Jumper a túlméretes szekrénykorpuszokat, polcegységeket vagy projektbútorokat is mozgatja, a szabvány tartomány feletti tömegekkel. Tehermentesíti a kezelőt, megelőzi a hátsérüléseket és növeli a sor áteresztőképességét. Selekta, Concept prések vagy Korpus-Montagelinie kiegészítő állomásaként a Lift Jumper biztosítja, hogy nagy darabtömegeknél is lehetséges maradjon a folyamatos anyagáramlás. Az Asamer a Lift Jumper-t hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra, sorintegrációs tervezéssel, biztonsági átvétellel és képzéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für übergroße Korpusse und Objektmöbel', en: 'For oversized carcasses and contract furniture', cz: 'Pro nadrozměrné korpusy a objektový nábytek', sk: 'Pre nadrozmerné korpusy a objektový nábytok', hu: 'Túlméretes korpuszokhoz és projektbútorokhoz' },
        body: {
          de: 'Kleiderschränke in Ganzhauselementen, Objekteinrichtungen für Hotellerie oder Büroimmobilien — hier treten Korpusgewichte auf, die mit Standard-Hebetechnik nicht mehr sicher zu bewegen sind. Die Lift Jumper schafft hier Entlastung und bewahrt den Produktionstakt.',
          en: 'Wardrobes in whole-house elements, contract interiors for hospitality or commercial property — these involve carcass weights that can no longer be safely moved with standard lifting technology. The Lift Jumper provides relief here and maintains production rhythm.',
          cz: 'Šatní skříně v celoobjektových prvcích, interiérové vybavení pro hotelnictví nebo komerční nemovitosti — zde se vyskytují hmotnosti korpusu, které již nelze bezpečně pohybovat standardní zdvíhací technikou. Lift Jumper zde přináší odlehčení a zachovává výrobní takt.',
          sk: 'Šatníkové skrine v celoobjektových prvkoch, interiérové vybavenie pre hotelierstvo alebo komerčné nehnuteľnosti — tu sa vyskytujú hmotnosti korpusu, ktoré už nemožno bezpečne pohybovať štandardnou zdvíhacou technikou. Lift Jumper tu prináša odľahčenie a zachováva výrobný takt.',
          hu: 'Ruhásszekrények teljes-ház elemekben, projektinteriőrök szállodaiparnak vagy kereskedelmi ingatlanoknak — itt olyan korpusztömegek lépnek fel, amelyek szabvány emelőtechnikával már nem mozgathatók biztonságosan. A Lift Jumper itt tehermentesítést hoz és fenntartja a gyártási ütemet.',
        },
      },
      {
        heading: { de: 'Für Arbeitsschutz und Ergonomie', en: 'For occupational safety and ergonomics', cz: 'Pro ochranu práce a ergonomii', sk: 'Pre ochranu práce a ergonómiu', hu: 'Munkavédelemhez és ergonómiához' },
        body: {
          de: 'Schwere Korpusse manuell zu heben führt auf Dauer zu Rückenproblemen und erhöhten Krankenständen. Die Lift Jumper übernimmt das Heben vollständig — ein Investment, das sich über reduzierte Ausfallzeiten und höhere Mitarbeiterzufriedenheit rechnet.',
          en: 'Lifting heavy carcasses manually leads to back problems and increased absenteeism in the long term. The Lift Jumper takes over lifting completely — an investment that pays off through reduced downtime and higher employee satisfaction.',
          cz: 'Ruční zvedání těžkých korpusů vede dlouhodobě k problémům se zády a zvýšené nemocnosti. Lift Jumper přebírá zvedání kompletně — investice, která se vyplatí sníženými výpadky a vyšší spokojeností zaměstnanců.',
          sk: 'Ručné dvíhanie ťažkých korpusov vedie dlhodobo k problémom s chrbtom a zvýšenej chorobnosti. Lift Jumper preberá dvíhanie kompletne — investícia, ktorá sa vyplatí zníženými výpadkami a vyššou spokojnosťou zamestnancov.',
          hu: 'A nehéz korpuszok kézi emelése hosszú távon hátproblémákhoz és megnövekedett betegállományhoz vezet. A Lift Jumper teljesen átveszi az emelést — egy befektetés, amely csökkentett kiesési idők és magasabb munkavállalói elégedettség révén térül meg.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Lift Jumper ist die richtige Wahl bei regelmäßiger Fertigung von Korpussen über ca. 60 kg Stückgewicht oder bei Überformaten. Für Standardkorpusse reicht die Standard-Lift aus; ergänzen Sie die Lift Jumper in industriellen Linien mit Concept Primus oder Korpus-Montagelinie.',
      en: 'The Lift Jumper is the right choice for regular production of carcasses above approx. 60 kg unit weight or oversized formats. For standard carcasses, the standard Lift is sufficient; complement the Lift Jumper in industrial lines with Concept Primus or Korpus-Montagelinie.',
      cz: 'Lift Jumper je správnou volbou při pravidelné výrobě korpusů nad cca 60 kg hmotnosti kusu nebo u nadrozměrů. Pro standardní korpusy postačí standardní Lift; doplňte Lift Jumper v průmyslových linkách s Concept Primus nebo Korpus-Montagelinie.',
      sk: 'Lift Jumper je správnou voľbou pri pravidelnej výrobe korpusov nad cca 60 kg hmotnosti kusa alebo pri nadrozmeroch. Pre štandardné korpusy postačí štandardný Lift; doplňte Lift Jumper v priemyselných linkách s Concept Primus alebo Korpus-Montagelinie.',
      hu: 'A Lift Jumper a megfelelő választás kb. 60 kg darabtömeg feletti korpuszok vagy túlméretes formátumok rendszeres gyártásához. Szabvány korpuszokhoz a szabvány Lift elegendő; a Lift Jumper-t egészítse ki ipari sorokban Concept Primus-szal vagy Korpus-Montagelinie-val.',
    },
    faq: [
      {
        question: { de: 'Welche maximale Traglast?', en: 'What maximum load capacity?', cz: 'Jaká maximální nosnost?', sk: 'Aká maximálna nosnosť?', hu: 'Milyen maximális teherbírás?' },
        answer: {
          de: 'Je nach Konfiguration bis ca. 200 kg — genauer Wert anhand Ihrer Korpusgrößen bei Anfrage.',
          en: 'Depending on configuration up to approx. 200 kg — exact value based on your carcass sizes on request.',
          cz: 'Podle konfigurace do cca 200 kg — přesná hodnota podle vašich velikostí korpusu na vyžádání.',
          sk: 'Podľa konfigurácie do cca 200 kg — presná hodnota podľa vašich veľkostí korpusu na vyžiadanie.',
          hu: 'Konfigurációtól függően kb. 200 kg-ig — pontos érték az ön korpuszméretei alapján, kérésre.',
        },
      },
      {
        question: { de: 'Lässt sich die Lift Jumper in bestehende Linien nachrüsten?', en: 'Can the Lift Jumper be retrofitted into existing lines?', cz: 'Lze Lift Jumper dodatečně zapojit do stávajících linek?', sk: 'Dá sa Lift Jumper dodatočne zapojiť do existujúcich liniek?', hu: 'Utólag beszerelhető a Lift Jumper meglévő sorokba?' },
        answer: {
          de: 'Ja — die Integration erfolgt durch Asamer mit Anpassung der Förderhöhen und Sicherheitsabnahme.',
          en: 'Yes — integration is handled by Asamer with adjustment of conveyor heights and safety approval.',
          cz: 'Ano — integrace probíhá přes Asamer s úpravou výšek dopravníků a bezpečnostní přejímkou.',
          sk: 'Áno — integrácia prebieha cez Asamer s úpravou výšok dopravníkov a bezpečnostnou preberačkou.',
          hu: 'Igen — az integrációt az Asamer végzi a szállítószalag-magasságok igazításával és a biztonsági átvétellel.',
        },
      },
      {
        question: { de: 'Welche Sicherheitsfunktionen sind integriert?', en: 'Which safety functions are integrated?', cz: 'Jaké bezpečnostní funkce jsou integrovány?', sk: 'Aké bezpečnostné funkcie sú integrované?', hu: 'Milyen biztonsági funkciók vannak integrálva?' },
        answer: {
          de: 'Zweihand-Bedienung, Lichtschranken und Not-Aus gemäß Maschinenrichtlinie. Asamer begleitet die CE-Abnahme.',
          en: 'Two-hand operation, light barriers and emergency stop according to machinery directive. Asamer accompanies CE approval.',
          cz: 'Dvouruční ovládání, světelné závory a nouzové zastavení podle strojní směrnice. Asamer doprovází CE přejímku.',
          sk: 'Dvojručné ovládanie, svetelné závory a núdzové zastavenie podľa strojovej smernice. Asamer sprevádza CE preberačku.',
          hu: 'Kétkezes kezelés, fénysorompók és vészleállás a gépekre vonatkozó irányelv szerint. Az Asamer kíséri a CE-átvételt.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  CARCASS — korpus-montagelinie                                      */
  /* ------------------------------------------------------------------ */
  'korpus-montagelinie': {
    longDescription: {
      de: `Die Gannomat Korpus-Montagelinie ist das Komplettsystem für die industrielle Korpusfertigung: eine Durchlauf-Produktionslinie, die Selekta (Bohren, Beleimen, Dübel eintreiben), Korpuspresse und Transport zu einer durchgängigen, vollautomatisierten Anlage verbindet. Werkstücke wandern ohne manuellen Eingriff von Station zu Station — Bohrung, Dübelsetzung, Verklebung, Pressen und Übergabe an die nachfolgende Bearbeitung oder Verpackung laufen in einem einzigen Takt. Für Möbelhersteller mit hohem Tagesvolumen ist die Korpus-Montagelinie der wirtschaftlichste Weg zu industrieller Serienfertigung: reproduzierbare Qualität, kürzeste Durchlaufzeiten, minimaler Personaleinsatz. Asamer plant, liefert und integriert die Linie als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn — inklusive ERP-/MES-Anbindung durch unser eigenes Software-Team.`,
      en: `The Gannomat Korpus-Montagelinie is the complete system for industrial carcass production: a continuous production line connecting Selekta (drilling, gluing, dowel insertion), carcass press and transport into a seamless, fully automated plant. Workpieces travel from station to station without manual intervention — drilling, dowel setting, gluing, pressing and handover to subsequent processing or packaging all run in a single cycle. For furniture manufacturers with high daily volumes, the Korpus-Montagelinie is the most economical path to industrial series production: reproducible quality, shortest cycle times, minimal personnel requirements. Asamer plans, supplies and integrates the line as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary — including ERP/MES integration by our own software team.`,
      cz: `Gannomat Korpus-Montagelinie je kompletní systém pro průmyslovou výrobu korpusu: průběžná výrobní linka spojující Selekta (vrtání, lepení, zarážení kolíků), korpusový lis a dopravu do plynulého, plně automatizovaného provozu. Obrobky putují ze stanice na stanici bez ručního zásahu — vrtání, vsazování kolíků, lepení, lisování a předání k následnému zpracování nebo balení probíhá v jednom taktu. Pro výrobce nábytku s vysokým denním objemem je Korpus-Montagelinie nejekonomičtější cesta k průmyslové sériové výrobě: reprodukovatelná kvalita, nejkratší průběžné časy, minimální personální nároky. Asamer plánuje, dodává a integruje linku jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko — včetně napojení na ERP/MES vlastním softwarovým týmem.`,
      sk: `Gannomat Korpus-Montagelinie je kompletný systém pre priemyselnú výrobu korpusu: priebežná výrobná linka spájajúca Selekta (vŕtanie, lepenie, zarážanie kolíkov), korpusový lis a dopravu do plynulej, plne automatizovanej prevádzky. Obrobky putujú zo stanice na stanicu bez ručného zásahu — vŕtanie, vsadzovanie kolíkov, lepenie, lisovanie a odovzdanie k následnému spracovaniu alebo baleniu prebieha v jednom takte. Pre výrobcov nábytku s vysokým denným objemom je Korpus-Montagelinie najekonomickejšia cesta k priemyselnej sériovej výrobe: reprodukovateľná kvalita, najkratšie priebežné časy, minimálne personálne nároky. Asamer plánuje, dodáva a integruje linku ako autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko — vrátane napojenia na ERP/MES vlastným softvérovým tímom.`,
      hu: `A Gannomat Korpus-Montagelinie a komplett rendszer ipari korpuszgyártáshoz: egy átfolyó gyártósor, amely a Selektát (fúrás, ragasztás, csapbeültetés), a korpuszprést és a szállítást egyetlen folyamatos, teljesen automatizált üzemmé köti össze. A munkadarabok kézi beavatkozás nélkül haladnak állomásról állomásra — a fúrás, csapbeültetés, ragasztás, préselés és átadás az utólagos megmunkálásra vagy csomagolásra egyetlen ütemben zajlik. Nagy napi mennyiségű bútorgyártók számára a Korpus-Montagelinie a leggazdaságosabb út az ipari sorozatgyártáshoz: reprodukálható minőség, legrövidebb átfutási idők, minimális személyzeti igények. Az Asamer a sort hivatalos Gannomat-forgalmazóként tervezi, szállítja és integrálja Csehországba, Szlovákiába és Magyarországra — beleértve saját szoftvercsapatunk által végzett ERP/MES-integrációt is.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für industrielle Möbelhersteller', en: 'For industrial furniture manufacturers', cz: 'Pro průmyslové výrobce nábytku', sk: 'Pre priemyselných výrobcov nábytku', hu: 'Ipari bútorgyártóknak' },
        body: {
          de: 'Hersteller mit Tagesausstoß ab 500 Korpussen profitieren von der vollautomatischen Durchlaufkonzeption. Die Linie läuft im Dreischichtbetrieb, während Einzelstationen per Knopfdruck umgerüstet werden. Die ERP-Anbindung liefert Fertigungsaufträge in Echtzeit.',
          en: 'Manufacturers with daily output from 500 carcasses benefit from the fully automatic continuous flow concept. The line runs in three-shift operation while individual stations are reconfigured at the push of a button. ERP integration delivers production orders in real time.',
          cz: 'Výrobci s denním výstupem od 500 korpusů těží z plně automatické průběžné koncepce. Linka běží v třísměnném provozu, zatímco jednotlivé stanice se přestavují na stisk tlačítka. Napojení na ERP dodává výrobní zakázky v reálném čase.',
          sk: 'Výrobcovia s denným výstupom od 500 korpusov ťažia z plne automatickej priebežnej koncepcie. Linka beží v trojsmennej prevádzke, zatiaľ čo jednotlivé stanice sa prestavujú na stlačenie tlačidla. Napojenie na ERP dodáva výrobné zákazky v reálnom čase.',
          hu: 'A napi 500 korpusz kibocsátástól felfelé a gyártók a teljesen automatikus átfolyó koncepció előnyeit élvezik. A sor háromműszakos üzemben fut, miközben az egyes állomások gombnyomásra átállíthatók. Az ERP-integráció valós időben szállítja a gyártási megrendeléseket.',
        },
      },
      {
        heading: { de: 'Für variantenreiche Serienfertigung', en: 'For variant-rich series production', cz: 'Pro variantně bohatou sériovou výrobu', sk: 'Pre variantne bohatú sériovú výrobu', hu: 'Változatos sorozatgyártáshoz' },
        body: {
          de: 'Die Durchlauflinie ist nicht auf eine einzige Korpusvariante beschränkt — CNC-Steuerung und Werkstückautomatik ermöglichen Losgröße-1-Fertigung mit individuellen Bohrbildern. Küchen-, Büromöbel- und Objektproduktion lassen sich auf derselben Linie abbilden.',
          en: 'The continuous line is not limited to a single carcass variant — CNC control and workpiece automation enable batch-size-1 production with individual drilling patterns. Kitchen, office furniture and contract production can be mapped on the same line.',
          cz: 'Průběžná linka není omezena na jedinou variantu korpusu — CNC řízení a automatika obrobku umožňují výrobu dávky 1 s individuálními vrtacími vzory. Výrobu kuchyní, kancelářského nábytku a objektů lze zobrazit na stejné lince.',
          sk: 'Priebežná linka nie je obmedzená na jediný variant korpusu — CNC riadenie a automatika obrobku umožňujú výrobu dávky 1 s individuálnymi vŕtacími vzormi. Výrobu kuchýň, kancelárskeho nábytku a objektov možno zobraziť na tej istej linke.',
          hu: 'Az átfolyó sor nem korlátozódik egyetlen korpuszváltozatra — a CNC-vezérlés és a munkadarab-automatika egyedi fúrásmintákkal lehetővé teszi az 1-es tételszámú gyártást. A konyha-, irodabútor- és projektgyártás ugyanazon a soron leképezhető.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Korpus-Montagelinie ist die Königsklasse der Gannomat-Korpusfertigung und lohnt sich ab 500 Korpussen pro Tag. Für kleinere industrielle Bedarfe reicht die Concept Primus mit Selekta und Lift; Mittelbetriebe wählen Concept Eco, Tischlereien Concept Easy. Asamer erstellt zu jedem Projekt eine individuelle Linienplanung mit ROI-Rechnung.',
      en: 'The Korpus-Montagelinie is the top class of Gannomat carcass production and pays off from 500 carcasses per day. For smaller industrial needs, the Concept Primus with Selekta and Lift suffices; mid-sized operations choose Concept Eco, joinery shops Concept Easy. Asamer creates individual line planning with ROI calculation for each project.',
      cz: 'Korpus-Montagelinie je královskou třídou Gannomat výroby korpusu a vyplatí se od 500 korpusů denně. Pro menší průmyslové potřeby postačí Concept Primus se Selektou a Lift; střední provozy volí Concept Eco, truhlárny Concept Easy. Asamer vytváří ke každému projektu individuální plán linky s ROI výpočtem.',
      sk: 'Korpus-Montagelinie je kráľovskou triedou Gannomat výroby korpusu a vyplatí sa od 500 korpusov denne. Pre menšie priemyselné potreby postačí Concept Primus so Selektou a Lift; stredné prevádzky volia Concept Eco, truhlárne Concept Easy. Asamer vytvára ku každému projektu individuálny plán linky s ROI výpočtom.',
      hu: 'A Korpus-Montagelinie a Gannomat korpuszgyártás csúcskategóriája, és napi 500 korpusztól térül meg. Kisebb ipari igényekre a Concept Primus Selektával és Lifttel elegendő; közepes üzemek a Concept Eco-t, asztalosüzemek a Concept Easy-t választják. Az Asamer minden projekthez egyedi sortervezést készít ROI-számítással.',
    },
    faq: [
      {
        question: { de: 'Wie viel Stellfläche benötigt die Linie?', en: 'How much floor space does the line need?', cz: 'Kolik plochy linka potřebuje?', sk: 'Koľko plochy linka potrebuje?', hu: 'Mennyi alapterületet igényel a sor?' },
        answer: {
          de: 'Je nach Konfiguration 30–80 Meter Länge. Layout-Planung erfolgt individuell durch Asamer.',
          en: 'Depending on configuration 30–80 meters in length. Layout planning is done individually by Asamer.',
          cz: 'Podle konfigurace 30–80 metrů délky. Plánování layoutu provádí Asamer individuálně.',
          sk: 'Podľa konfigurácie 30–80 metrov dĺžky. Plánovanie layoutu robí Asamer individuálne.',
          hu: 'Konfigurációtól függően 30-80 méter hosszú. Az elrendezés tervezését az Asamer egyedileg végzi.',
        },
      },
      {
        question: { de: 'Wie lange dauert die Inbetriebnahme?', en: 'How long does commissioning take?', cz: 'Jak dlouho trvá uvedení do provozu?', sk: 'Ako dlho trvá uvedenie do prevádzky?', hu: 'Mennyi ideig tart az üzembe helyezés?' },
        answer: {
          de: 'Typisch 2–6 Wochen vor Ort, je nach Komplexität. Die Gesamtprojektzeit ab Bestellung beträgt 6–12 Monate.',
          en: 'Typically 2–6 weeks on site, depending on complexity. Total project time from order is 6–12 months.',
          cz: 'Typicky 2–6 týdnů na místě, podle složitosti. Celková doba projektu od objednávky je 6–12 měsíců.',
          sk: 'Typicky 2–6 týždňov na mieste, podľa zložitosti. Celková doba projektu od objednávky je 6–12 mesiacov.',
          hu: 'Jellemzően 2-6 hét helyszínen, komplexitástól függően. A megrendeléstől számított teljes projektidő 6-12 hónap.',
        },
      },
      {
        question: { de: 'Welche ERP-Systeme werden unterstützt?', en: 'Which ERP systems are supported?', cz: 'Jaké ERP systémy jsou podporovány?', sk: 'Aké ERP systémy sú podporované?', hu: 'Milyen ERP-rendszereket támogat?' },
        answer: {
          de: 'SAP, Navision, Branchenlösungen der Möbelindustrie. Asamer-Softwareteam programmiert die Schnittstellen.',
          en: 'SAP, Navision, furniture industry solutions. Asamer software team programs the interfaces.',
          cz: 'SAP, Navision, oborová řešení nábytkářského průmyslu. Softwarový tým Asamer programuje rozhraní.',
          sk: 'SAP, Navision, oborové riešenia nábytkárskeho priemyslu. Softvérový tím Asamer programuje rozhrania.',
          hu: 'SAP, Navision, bútoripari ágazati megoldások. Az Asamer szoftvercsapata programozza az interfészeket.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  CARCASS — lift                                                     */
  /* ------------------------------------------------------------------ */
  'lift': {
    longDescription: {
      de: `Die Gannomat Lift ist die Standard-Hebetechnik für Korpusse in mittelgroßen Möbel- und Küchenfertigungsbetrieben. Sie hebt den Korpus nach dem Dübelsetzen oder Pressen auf die nächste Bearbeitungsstation oder auf die Verpackungshöhe — ohne dass der Bediener selbst Schweres heben muss. Damit erhöht die Lift den Tagesdurchsatz, entlastet das Personal ergonomisch und reduziert Rückenbelastungen im Produktionsalltag. Als zuverlässige Ergänzung zu Selekta, Concept Easy/Eco/Primus oder als Teil einer Korpus-Montagelinie fügt sich die Lift nahtlos in bestehende Fertigungsabläufe ein. Asamer liefert die Lift als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn inklusive Anpassung der Förderhöhen an Ihre Maschinen, CE-konformer Sicherheitsabnahme und Bedienerschulung.`,
      en: `The Gannomat Lift is the standard lifting technology for carcasses in medium-sized furniture and kitchen production operations. It lifts the carcass after dowel setting or pressing to the next processing station or to packaging height — without the operator having to lift heavy loads themselves. This increases daily throughput, relieves personnel ergonomically and reduces back strain in daily production. As a reliable complement to Selekta, Concept Easy/Eco/Primus or as part of a Korpus-Montagelinie, the Lift integrates seamlessly into existing production flows. Asamer supplies the Lift as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary including adaptation of conveyor heights to your machines, CE-compliant safety approval and operator training.`,
      cz: `Gannomat Lift je standardní zdvíhací technika pro korpusy ve středně velkých provozech výroby nábytku a kuchyní. Zvedá korpus po vsazení kolíků nebo lisování na další zpracovatelskou stanici nebo do balicí výšky — aniž by obsluha musela sama zvedat těžká břemena. Lift tak zvyšuje denní průtok, ergonomicky odlehčuje personál a snižuje zatížení zad v každodenní výrobě. Jako spolehlivý doplněk k Selekta, Concept Easy/Eco/Primus nebo jako součást Korpus-Montagelinie se Lift hladce začleňuje do stávajících výrobních postupů. Asamer dodává Lift jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko včetně přizpůsobení výšek dopravníků vašim strojům, CE kompatibilní bezpečnostní přejímky a školení obsluhy.`,
      sk: `Gannomat Lift je štandardná zdvíhacia technika pre korpusy v stredne veľkých prevádzkach výroby nábytku a kuchýň. Dvíha korpus po vsadení kolíkov alebo lisovaní na ďalšiu spracovateľskú stanicu alebo do baliacej výšky — bez toho aby obsluha musela sama dvíhať ťažké bremená. Lift tak zvyšuje denný prietok, ergonomicky odľahčuje personál a znižuje zaťaženie chrbta v každodennej výrobe. Ako spoľahlivý doplnok k Selekta, Concept Easy/Eco/Primus alebo ako súčasť Korpus-Montagelinie sa Lift hladko začleňuje do existujúcich výrobných postupov. Asamer dodáva Lift ako autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko vrátane prispôsobenia výšok dopravníkov vašim strojom, CE kompatibilnej bezpečnostnej preberačky a školenia obsluhy.`,
      hu: `A Gannomat Lift a szabvány emelőtechnika korpuszokhoz közepes méretű bútor- és konyhagyártó üzemekben. A csapbeültetés vagy préselés után a korpuszt a következő feldolgozóállomásra vagy a csomagolási magasságra emeli — anélkül, hogy a kezelőnek magának kellene nehéz terheket emelnie. Ezzel a Lift növeli a napi áteresztőképességet, ergonómiailag tehermentesíti a személyzetet és csökkenti a hátterhelést a napi gyártásban. A Selekta, Concept Easy/Eco/Primus megbízható kiegészítőjeként vagy egy Korpus-Montagelinie részeként a Lift zökkenőmentesen illeszkedik a meglévő gyártási folyamatokba. Az Asamer a Lift-et hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra, a szállítószalag-magasságok gépeihez való igazításával, CE-konform biztonsági átvétellel és kezelői képzéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für ergonomische Arbeitsplätze', en: 'For ergonomic workstations', cz: 'Pro ergonomická pracoviště', sk: 'Pre ergonomické pracoviská', hu: 'Ergonomikus munkaállomásokhoz' },
        body: {
          de: 'In der Möbelproduktion werden Korpusse typischerweise mehrfach pro Schicht bewegt. Der Hubtisch der Lift bringt das Werkstück in Arbeitshöhe und ermöglicht rückenschonende Montage, Kontrolle und Weitergabe an die nächste Station.',
          en: 'In furniture production, carcasses are typically moved several times per shift. The Lift table brings the workpiece to working height and enables back-friendly assembly, inspection and handover to the next station.',
          cz: 'Ve výrobě nábytku se korpusy obvykle pohybují několikrát za směnu. Zdvíhací stůl Lift přináší obrobek do pracovní výšky a umožňuje montáž šetrnou k zádům, kontrolu a předání na další stanici.',
          sk: 'Vo výrobe nábytku sa korpusy obvykle pohybujú niekoľkokrát za zmenu. Zdvíhací stôl Lift prináša obrobok do pracovnej výšky a umožňuje montáž šetrnú k chrbtu, kontrolu a odovzdanie na ďalšiu stanicu.',
          hu: 'A bútorgyártásban a korpuszokat jellemzően műszakonként többször mozgatják. A Lift emelőasztala munkamagasságba hozza a munkadarabot, és lehetővé teszi a hátbarát összeszerelést, ellenőrzést és a következő állomásra való átadást.',
        },
      },
      {
        heading: { de: 'Als Übergabestation zwischen Maschinen', en: 'As transfer station between machines', cz: 'Jako předávací stanice mezi stroji', sk: 'Ako odovzdávacia stanica medzi strojmi', hu: 'Átadó állomásként gépek között' },
        body: {
          de: 'Zwischen Selekta und Korpuspresse oder zwischen Presse und Verpackung überbrückt die Lift unterschiedliche Förderhöhen. Das ermöglicht eine saubere Linienintegration ohne aufwendige Umbauten an bestehenden Maschinen.',
          en: 'Between Selekta and carcass press or between press and packaging, the Lift bridges different conveyor heights. This enables clean line integration without extensive modifications to existing machines.',
          cz: 'Mezi Selekta a korpusovým lisem nebo mezi lisem a balením překlenuje Lift různé výšky dopravníků. To umožňuje čistou integraci linky bez náročných úprav na stávajících strojích.',
          sk: 'Medzi Selekta a korpusovým lisom alebo medzi lisom a balením preklenuje Lift rôzne výšky dopravníkov. To umožňuje čistú integráciu linky bez náročných úprav na existujúcich strojoch.',
          hu: 'A Selekta és a korpuszprés között vagy a prés és a csomagolás között a Lift áthidalja a különböző szállítószalag-magasságokat. Ez tiszta sorintegrációt tesz lehetővé a meglévő gépek költséges átalakítása nélkül.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Lift ist die richtige Wahl für mittelgroße Korpusse bis ca. 60 kg Stückgewicht. Für schwerere oder übergroße Werkstücke (Schrankkorpusse, Objektmöbel) wählen Sie die Lift Jumper. In vollautomatischen Linien ist die Lift Standardbestandteil der Korpus-Montagelinie.',
      en: 'The Lift is the right choice for medium-sized carcasses up to approx. 60 kg unit weight. For heavier or oversized workpieces (wardrobe carcasses, contract furniture), choose the Lift Jumper. In fully automatic lines, the Lift is a standard component of the Korpus-Montagelinie.',
      cz: 'Lift je správnou volbou pro středně velké korpusy do cca 60 kg hmotnosti kusu. Pro těžší nebo nadrozměrné obrobky (skříňové korpusy, objektový nábytek) zvolte Lift Jumper. V plně automatických linkách je Lift standardní součástí Korpus-Montagelinie.',
      sk: 'Lift je správnou voľbou pre stredne veľké korpusy do cca 60 kg hmotnosti kusa. Pre ťažšie alebo nadrozmerné obrobky (skriňové korpusy, objektový nábytok) zvoľte Lift Jumper. V plne automatických linkách je Lift štandardnou súčasťou Korpus-Montagelinie.',
      hu: 'A Lift a megfelelő választás közepes méretű korpuszokhoz kb. 60 kg darabtömegig. Nehezebb vagy túlméretes munkadarabokhoz (szekrénykorpuszok, projektbútorok) válassza a Lift Jumper-t. Teljesen automatikus sorokban a Lift a Korpus-Montagelinie szabvány alkatrésze.',
    },
    faq: [
      {
        question: { de: 'Welche Hubhöhen sind möglich?', en: 'What lifting heights are possible?', cz: 'Jaké zdvíhací výšky jsou možné?', sk: 'Aké zdvíhacie výšky sú možné?', hu: 'Milyen emelési magasságok lehetségesek?' },
        answer: {
          de: 'Typisch 400–1.200 mm, angepasst an nachfolgende Maschinen. Sonderausführungen auf Anfrage.',
          en: 'Typically 400–1,200 mm, adapted to subsequent machines. Special designs on request.',
          cz: 'Obvykle 400–1.200 mm, přizpůsobené následujícím strojům. Speciální provedení na vyžádání.',
          sk: 'Obvykle 400–1.200 mm, prispôsobené nasledujúcim strojom. Špeciálne vyhotovenia na vyžiadanie.',
          hu: 'Jellemzően 400-1200 mm, a következő gépekhez igazítva. Egyedi kivitelek kérésre.',
        },
      },
      {
        question: { de: 'Pneumatisch oder hydraulisch?', en: 'Pneumatic or hydraulic?', cz: 'Pneumaticky nebo hydraulicky?', sk: 'Pneumaticky alebo hydraulicky?', hu: 'Pneumatikus vagy hidraulikus?' },
        answer: {
          de: 'Je nach Anwendung — für Standardkorpusse meist pneumatisch, bei höheren Lasten hydraulisch.',
          en: 'Depending on application — pneumatic for most standard carcasses, hydraulic for higher loads.',
          cz: 'Podle aplikace — pro standardní korpusy většinou pneumaticky, při vyšším zatížení hydraulicky.',
          sk: 'Podľa aplikácie — pre štandardné korpusy väčšinou pneumaticky, pri vyššom zaťažení hydraulicky.',
          hu: 'Alkalmazástól függően — szabvány korpuszokhoz többnyire pneumatikusan, nagyobb terheléseknél hidraulikusan.',
        },
      },
      {
        question: { de: 'Kann die Lift in bestehende Linien nachgerüstet werden?', en: 'Can the Lift be retrofitted into existing lines?', cz: 'Lze Lift dodatečně zapojit do stávajících linek?', sk: 'Dá sa Lift dodatočne zapojiť do existujúcich liniek?', hu: 'Utólag beszerelhető a Lift meglévő sorokba?' },
        answer: {
          de: 'Ja — Asamer plant Einbau und Steuerungsanbindung an Ihre vorhandenen Maschinen.',
          en: 'Yes — Asamer plans installation and control connection to your existing machines.',
          cz: 'Ano — Asamer plánuje zabudování a připojení řízení k vašim stávajícím strojům.',
          sk: 'Áno — Asamer plánuje zabudovanie a pripojenie riadenia k vašim existujúcim strojom.',
          hu: 'Igen — az Asamer megtervezi a beszerelést és a meglévő gépekhez való vezérléscsatlakoztatást.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  BORING — db-21-27-35-wa                                            */
  /* ------------------------------------------------------------------ */
  'db-21-27-35-wa': {
    longDescription: {
      de: `Die Gannomat DB 21-27-35 WA ist die Variante der klassischen DB-Dübelbohrmaschine mit integrierter Werkstückautomatik. Ein Förderer führt Werkstücke automatisch zur Bohrposition, nach dem Bohrvorgang werden sie ausgeworfen und der nächste Teil einläuft — ohne dass der Bediener manuell einlegen muss. Das WA-System verdoppelt bis verdreifacht den Tagesdurchsatz gegenüber der manuellen DB-Variante und reduziert den Personalaufwand auf Überwachung und Beschickung des Zuführmagazins. Die WA-Variante eignet sich für Möbelbetriebe, die ihre Standard-Bohrfertigung auf höheren Ausstoß heben wollen, ohne gleich auf CNC-Bohrautomaten umzusteigen. Asamer liefert die DB 21-27-35 WA als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn inklusive Einrichtung und Schulung.`,
      en: `The Gannomat DB 21-27-35 WA is the variant of the classic DB dowel drilling machine with integrated workpiece automation. A conveyor automatically guides workpieces to the drilling position; after drilling, they are ejected and the next part runs in — without the operator having to load manually. The WA system doubles to triples daily throughput compared to the manual DB variant and reduces personnel requirements to monitoring and loading the feed magazine. The WA variant is suitable for furniture operations that want to raise their standard drilling production to higher output without immediately switching to CNC drilling machines. Asamer supplies the DB 21-27-35 WA as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary including setup and training.`,
      cz: `Gannomat DB 21-27-35 WA je varianta klasického kolkovacího stroje DB s integrovanou automatikou obrobku. Dopravník automaticky vede obrobky do vrtací pozice; po vrtání jsou vyhozeny a další díl vjíždí — aniž by obsluha musela ručně zakládat. Systém WA zdvojnásobuje až ztrojnásobuje denní průtok ve srovnání s ruční variantou DB a redukuje personální nároky na sledování a plnění podávacího zásobníku. Varianta WA je vhodná pro nábytkářské provozy, které chtějí zvýšit svou standardní vrtací výrobu na vyšší výstup, aniž by hned přecházely na CNC vrtací automaty. Asamer dodává DB 21-27-35 WA jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko včetně seřízení a školení.`,
      sk: `Gannomat DB 21-27-35 WA je variant klasického kolíkovacieho stroja DB s integrovanou automatikou obrobku. Dopravník automaticky vedie obrobky do vŕtacej pozície; po vŕtaní sú vyhodené a ďalší diel vchádza — bez toho aby obsluha musela ručne zakladať. Systém WA zdvojnásobuje až strojnásobuje denný prietok v porovnaní s ručnou variantou DB a redukuje personálne nároky na sledovanie a plnenie podávacieho zásobníka. Variant WA je vhodný pre nábytkárske prevádzky, ktoré chcú zvýšiť svoju štandardnú vŕtaciu výrobu na vyšší výstup, bez toho aby hneď prechádzali na CNC vŕtacie automaty. Asamer dodáva DB 21-27-35 WA ako autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko vrátane nastavenia a školenia.`,
      hu: `A Gannomat DB 21-27-35 WA a klasszikus DB csapfúrógép változata integrált munkadarab-automatikával. Egy szállítószalag automatikusan a fúráspozícióba vezeti a munkadarabokat; fúrás után kidobódnak és a következő darab érkezik — anélkül, hogy a kezelőnek kézzel kellene bepakolnia. A WA-rendszer a kézi DB-változathoz képest megduplázza vagy megháromszorozza a napi áteresztőképességet, és a személyzeti igényeket az adagoló magazin felügyeletére és töltésére csökkenti. A WA-változat olyan bútoripari üzemeknek alkalmas, amelyek a szabvány fúrási gyártásukat magasabb kibocsátásra akarják emelni anélkül, hogy azonnal CNC fúróautomatákra váltanának. Az Asamer a DB 21-27-35 WA-t hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra, beállítással és képzéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für mittlere Serienfertigung', en: 'For medium series production', cz: 'Pro střední sériovou výrobu', sk: 'Pre strednú sériovú výrobu', hu: 'Közepes sorozatgyártáshoz' },
        body: {
          de: 'Wenn die manuelle DB-Variante zum Engpass wird, aber der Schritt zur CNC-Automation zu groß ist, bietet die WA-Version den richtigen Kompromiss. Sie verarbeitet gleichförmige Serien mit hohem Durchsatz bei überschaubarer Investition.',
          en: 'When the manual DB variant becomes a bottleneck but the step to CNC automation is too large, the WA version offers the right compromise. It processes uniform series with high throughput at manageable investment.',
          cz: 'Když se manuální varianta DB stane úzkým místem, ale krok k CNC automatizaci je příliš velký, nabízí verze WA správný kompromis. Zpracovává jednotné série s vysokým průtokem při přehledné investici.',
          sk: 'Keď sa manuálny variant DB stane úzkym miestom, ale krok k CNC automatizácii je príliš veľký, ponúka verzia WA správny kompromis. Spracováva jednotné série s vysokým prietokom pri prehľadnej investícii.',
          hu: 'Amikor a kézi DB-változat szűk keresztmetszetté válik, de a CNC-automatizálásra lépés túl nagy, a WA-verzió kínálja a megfelelő kompromisszumot. Egységes sorozatokat dolgoz fel magas áteresztőképességgel, áttekinthető beruházás mellett.',
        },
      },
      {
        heading: { de: 'Für entlastete Bedienung', en: 'For relieved operation', cz: 'Pro odlehčenou obsluhu', sk: 'Pre odľahčenú obsluhu', hu: 'Tehermentesített kezeléshez' },
        body: {
          de: 'Durch die Werkstückautomatik entfällt das permanente Einlegen und Entnehmen. Der Bediener konzentriert sich auf Qualitätskontrolle und Nachschub — Ergonomie und Mitarbeiterzufriedenheit steigen deutlich.',
          en: 'Thanks to workpiece automation, permanent loading and removal is eliminated. The operator focuses on quality control and supply — ergonomics and employee satisfaction increase significantly.',
          cz: 'Díky automatice obrobku odpadá trvalé zakládání a vyjímání. Obsluha se soustředí na kontrolu kvality a přísun — ergonomie a spokojenost zaměstnanců výrazně roste.',
          sk: 'Vďaka automatike obrobku odpadá trvalé zakladanie a vyberanie. Obsluha sa sústredí na kontrolu kvality a prísun — ergonómia a spokojnosť zamestnancov výrazne rastie.',
          hu: 'A munkadarab-automatikának köszönhetően megszűnik az állandó bepakolás és kivétel. A kezelő a minőség-ellenőrzésre és az utánpótlásra összpontosít — az ergonómia és a munkavállalói elégedettség jelentősen növekszik.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die DB 21-27-35 WA ist die richtige Wahl, wenn Sie in Standard-Serienfertigung den Durchsatz heben wollen, ohne in CNC zu wechseln. Für kleinere Mengen genügt die manuelle DB 21-27-35; für hochvariantenreiche Fertigung ist eine CNC-Bohrmaschine die bessere Wahl. Bei sehr hohem Volumen mit stabilem Programm ist die ProLine 50 oder die Vantage wirtschaftlicher.',
      en: 'The DB 21-27-35 WA is the right choice when you want to raise throughput in standard series production without switching to CNC. For smaller quantities, the manual DB 21-27-35 is sufficient; for high-variant production, a CNC drilling machine is the better choice. At very high volumes with stable programs, the ProLine 50 or the Vantage is more economical.',
      cz: 'DB 21-27-35 WA je správnou volbou, když chcete ve standardní sériové výrobě zvýšit průtok, aniž byste přecházeli na CNC. Pro menší množství postačí manuální DB 21-27-35; pro variabilní výrobu je lepší CNC vrtací stroj. Při velmi vysokém objemu se stabilním programem je ekonomičtější ProLine 50 nebo Vantage.',
      sk: 'DB 21-27-35 WA je správnou voľbou, keď chcete v štandardnej sériovej výrobe zvýšiť prietok bez prechodu na CNC. Pre menšie množstvá postačí manuálny DB 21-27-35; pre variabilnú výrobu je lepší CNC vŕtací stroj. Pri veľmi vysokom objeme so stabilným programom je ekonomickejšia ProLine 50 alebo Vantage.',
      hu: 'A DB 21-27-35 WA a megfelelő választás, ha szabvány sorozatgyártásban emelni szeretné az áteresztőképességet CNC-re váltás nélkül. Kisebb mennyiségekhez a kézi DB 21-27-35 elegendő; változatos gyártáshoz a CNC fúrógép a jobb választás. Nagyon nagy volumen és stabil program esetén a ProLine 50 vagy a Vantage gazdaságosabb.',
    },
    faq: [
      {
        question: { de: 'Welchen Durchsatz erreicht die WA-Variante?', en: 'What throughput does the WA variant achieve?', cz: 'Jaký průtok dosahuje varianta WA?', sk: 'Aký prietok dosahuje variant WA?', hu: 'Milyen áteresztőképességet ér el a WA-változat?' },
        answer: {
          de: 'Typisch das 2- bis 3-fache der manuellen DB, je nach Lochmuster und Werkstückgröße.',
          en: 'Typically 2 to 3 times the manual DB, depending on hole pattern and workpiece size.',
          cz: 'Typicky 2- až 3-násobek manuální DB, podle vzoru otvorů a velikosti obrobku.',
          sk: 'Typicky 2- až 3-násobok manuálneho DB, podľa vzoru otvorov a veľkosti obrobku.',
          hu: 'Jellemzően a kézi DB 2-3-szorosa, lyukmintától és munkadarabmérettől függően.',
        },
      },
      {
        question: { de: 'Wie groß ist das Zuführmagazin?', en: 'How large is the feed magazine?', cz: 'Jak velký je podávací zásobník?', sk: 'Ako veľký je podávací zásobník?', hu: 'Mekkora az adagoló magazin?' },
        answer: {
          de: 'Je nach Konfiguration für 20–60 Werkstücke Pufferkapazität. Nachfüllen während des Betriebs möglich.',
          en: 'Depending on configuration for 20–60 workpieces buffer capacity. Refilling during operation possible.',
          cz: 'Podle konfigurace pro 20–60 obrobků kapacita pufru. Doplňování za provozu je možné.',
          sk: 'Podľa konfigurácie pre 20–60 obrobkov kapacita pufra. Doplňovanie počas prevádzky je možné.',
          hu: 'Konfigurációtól függően 20-60 munkadarab puffer kapacitás. Üzem közbeni utántöltés lehetséges.',
        },
      },
      {
        question: { de: 'Kann die Maschine später auf CNC umgerüstet werden?', en: 'Can the machine be converted to CNC later?', cz: 'Lze stroj později přestavět na CNC?', sk: 'Dá sa stroj neskôr prestavať na CNC?', hu: 'A gép átalakítható később CNC-re?' },
        answer: {
          de: 'Nein — der Wechsel zu CNC bedeutet ein neues Maschinenkonzept. Asamer berät zum richtigen Zeitpunkt für den Schritt.',
          en: 'No — the switch to CNC means a new machine concept. Asamer advises on the right time for this step.',
          cz: 'Ne — přechod na CNC znamená novou koncepci stroje. Asamer radí se správným načasováním tohoto kroku.',
          sk: 'Nie — prechod na CNC znamená novú koncepciu stroja. Asamer radí so správnym načasovaním tohto kroku.',
          hu: 'Nem — a CNC-re váltás új gépkoncepciót jelent. Az Asamer tanácsot ad a lépés megfelelő időzítéséhez.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  ROWBORING — proline-50                                             */
  /* ------------------------------------------------------------------ */
  'proline-50': {
    longDescription: {
      de: `Die Gannomat ProLine 50 ist eine Reihenbohrmaschine mit 50 Spindeln — der Einstieg in das industrielle Reihenbohren. Mit 50 Spindeln in einer Reihe bohrt sie ein großes Bohrbild in einem einzigen Hub und ist damit deutlich schneller als mehrspindelige Bohrmaschinen mit 21 oder 27 Spindeln. Gegenüber den Hochleistungsmodellen der Vantage-Baureihe (76-152 Spindeln) ist die ProLine 50 wirtschaftlicher in der Anschaffung und besser geeignet für mittlere Betriebe, die den Schritt vom klassischen DB-Bohren ins Reihenbohren wagen. Typische Anwendungen: 32-mm-Lochraster an Korpusseiten, Rückwände, Regalböden. Asamer liefert die ProLine 50 als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn inklusive Einrichtung auf Ihre Lochabstände und Bedienerschulung.`,
      en: `The Gannomat ProLine 50 is a row drilling machine with 50 spindles — the entry into industrial row drilling. With 50 spindles in one row, it drills a large drilling pattern in a single stroke and is thus significantly faster than multi-spindle drilling machines with 21 or 27 spindles. Compared to the high-performance models of the Vantage series (76-152 spindles), the ProLine 50 is more economical in acquisition and better suited for mid-sized operations that dare the step from classic DB drilling to row drilling. Typical applications: 32 mm hole grid on carcass sides, back panels, shelf boards. Asamer supplies the ProLine 50 as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary including setup to your hole spacings and operator training.`,
      cz: `Gannomat ProLine 50 je řadový vrtací stroj s 50 vřeteny — vstup do průmyslového řadového vrtání. S 50 vřeteny v jedné řadě vrtá velký vrtací vzor v jediném zdvihu a je tak výrazně rychlejší než vícevřetenové vrtací stroje s 21 nebo 27 vřeteny. Oproti vysoce výkonným modelům řady Vantage (76-152 vřeten) je ProLine 50 ekonomičtější v pořízení a lépe se hodí pro středně velké provozy, které se odvažují kroku z klasického DB vrtání do řadového vrtání. Typické aplikace: 32mm rastr otvorů na bokách korpusu, zadních stěnách, policích. Asamer dodává ProLine 50 jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko včetně seřízení na vaše rozteče otvorů a školení obsluhy.`,
      sk: `Gannomat ProLine 50 je radový vŕtací stroj s 50 vretenami — vstup do priemyselného radového vŕtania. S 50 vretenami v jednom rade vŕta veľký vŕtací vzor v jedinom zdvihu a je tak výrazne rýchlejší než viacvretenové vŕtacie stroje s 21 alebo 27 vretenami. Oproti vysokovýkonným modelom radu Vantage (76-152 vretien) je ProLine 50 ekonomickejšia v obstarávaní a lepšie sa hodí pre stredne veľké prevádzky, ktoré sa odvažujú kroku z klasického DB vŕtania do radového vŕtania. Typické aplikácie: 32mm raster otvorov na bokoch korpusu, zadných stenách, policiach. Asamer dodáva ProLine 50 ako autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko vrátane nastavenia na vaše rozstupy otvorov a školenia obsluhy.`,
      hu: `A Gannomat ProLine 50 egy soros fúrógép 50 orsóval — belépés az ipari soros fúrásba. 50 orsóval egy sorban nagy fúrásmintát fúr egyetlen löketben, és így jelentősen gyorsabb, mint a 21 vagy 27 orsós többorsós fúrógépek. A Vantage sorozat nagy teljesítményű modelljeihez (76-152 orsó) képest a ProLine 50 gazdaságosabb a beszerzésben és jobban alkalmas közepes méretű üzemeknek, amelyek merik megtenni a lépést a klasszikus DB-fúrásból a soros fúrásba. Tipikus alkalmazások: 32 mm-es lyukraszter korpuszoldalakon, hátfalakon, polclapokon. Az Asamer a ProLine 50-et hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra, a lyuktávolságokra történő beállítással és kezelői képzéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Als Einstieg in das Reihenbohren', en: 'As entry into row drilling', cz: 'Jako vstup do řadového vrtání', sk: 'Ako vstup do radového vŕtania', hu: 'Belépésként a soros fúrásba' },
        body: {
          de: 'Betriebe, die bisher mit DB-Bohrmaschinen arbeiten und ihren Durchsatz steigern wollen, finden in der ProLine 50 den richtigen nächsten Schritt. Die Taktzeit pro Werkstück sinkt drastisch, ohne dass die Komplexität einer Hochleistungslinie entsteht.',
          en: 'Operations previously working with DB drilling machines that want to increase throughput find in the ProLine 50 the right next step. Cycle time per workpiece drops drastically without creating the complexity of a high-performance line.',
          cz: 'Provozy, které dosud pracují s vrtacími stroji DB a chtějí zvýšit průtok, najdou v ProLine 50 správný další krok. Doba taktu na obrobek výrazně klesá, aniž by vznikala komplexnost vysoce výkonné linky.',
          sk: 'Prevádzky, ktoré doteraz pracujú s vŕtacími strojmi DB a chcú zvýšiť prietok, nájdu v ProLine 50 správny ďalší krok. Taktová doba na obrobok výrazne klesá, bez toho aby vznikala komplexnosť vysokovýkonnej linky.',
          hu: 'Azok az üzemek, amelyek eddig DB fúrógépekkel dolgoznak és növelni akarják az áteresztőképességet, a ProLine 50-ben találják meg a megfelelő következő lépést. A munkadarabonkénti ciklusidő drámaian csökken, anélkül hogy egy nagy teljesítményű sor komplexitása alakulna ki.',
        },
      },
      {
        heading: { de: 'Für standardisierte Korpusteile', en: 'For standardised carcass parts', cz: 'Pro standardizované korpusové díly', sk: 'Pre štandardizované korpusové diely', hu: 'Szabványos korpuszelemekhez' },
        body: {
          de: 'In Betrieben, die vorwiegend standardisierte Korpusseiten und -böden fertigen, spielt die ProLine 50 ihre Stärken aus: 32-mm-Lochraster werden in wenigen Sekunden komplett gebohrt, Umrüstung ist nur bei Formatwechsel nötig.',
          en: 'In operations predominantly producing standardised carcass sides and bases, the ProLine 50 plays to its strengths: 32 mm hole grid is drilled completely in a few seconds, changeover is only needed at format change.',
          cz: 'V provozech, které převážně vyrábějí standardizované boky a dna korpusu, ProLine 50 uplatňuje své silné stránky: 32mm rastr otvorů je kompletně vrtán během několika sekund, přestavba je nutná pouze při změně formátu.',
          sk: 'V prevádzkach, ktoré prevažne vyrábajú štandardizované boky a dná korpusu, ProLine 50 uplatňuje svoje silné stránky: 32mm raster otvorov je kompletne vŕtaný počas niekoľkých sekúnd, prestavba je nutná iba pri zmene formátu.',
          hu: 'Olyan üzemekben, amelyek túlnyomórészt szabványos korpuszoldalakat és -aljakat gyártanak, a ProLine 50 kihasználja erősségeit: a 32 mm-es lyukraszter néhány másodperc alatt teljesen kifúródik, átállásra csak formátumváltáskor van szükség.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die ProLine 50 ist die richtige Wahl für mittlere Möbelhersteller mit 100–500 Korpussen Tagesausstoß. Für kleinere Mengen genügt die DB-Reihe, für sehr hohe Volumen (500+ Korpusse) wählen Sie die Vantage 76-152. Bei hoher Variantenvielfalt ist ein CNC-Bohrautomat wirtschaftlicher.',
      en: 'The ProLine 50 is the right choice for mid-sized furniture manufacturers with 100–500 carcasses daily output. For smaller quantities the DB series suffices; for very high volumes (500+ carcasses), choose the Vantage 76-152. With high variant diversity, a CNC drilling machine is more economical.',
      cz: 'ProLine 50 je správnou volbou pro střední výrobce nábytku se 100–500 korpusy denního výstupu. Pro menší množství postačí řada DB, pro velmi vysoké objemy (500+ korpusů) zvolte Vantage 76-152. Při vysoké variabilitě je ekonomičtější CNC vrtací automat.',
      sk: 'ProLine 50 je správnou voľbou pre stredných výrobcov nábytku so 100–500 korpusmi denného výstupu. Pre menšie množstvá postačí rad DB, pre veľmi vysoké objemy (500+ korpusov) zvoľte Vantage 76-152. Pri vysokej variabilite je ekonomickejší CNC vŕtací automat.',
      hu: 'A ProLine 50 a megfelelő választás közepes méretű bútorgyártóknak 100-500 korpusz napi kibocsátással. Kisebb mennyiségekhez a DB sorozat elegendő, nagyon magas volumenekhez (500+ korpusz) válassza a Vantage 76-152-t. Magas variánsdiverzitás esetén a CNC fúróautomata gazdaságosabb.',
    },
    faq: [
      {
        question: { de: 'Welche Bohrabstände sind möglich?', en: 'What hole spacings are possible?', cz: 'Jaké rozteče otvorů jsou možné?', sk: 'Aké rozstupy otvorov sú možné?', hu: 'Milyen lyuktávolságok lehetségesek?' },
        answer: {
          de: '32 mm Raster Standard; Sonderabstände durch mechanische Umrüstung möglich.',
          en: '32 mm grid standard; special spacings possible through mechanical changeover.',
          cz: '32mm rastr standard; speciální rozteče možné mechanickou přestavbou.',
          sk: '32mm raster štandard; špeciálne rozstupy možné mechanickou prestavbou.',
          hu: '32 mm-es raszter szabvány; különleges távolságok mechanikus átállással lehetségesek.',
        },
      },
      {
        question: { de: 'Einzelspindel-Zuschaltung möglich?', en: 'Individual spindle switching possible?', cz: 'Lze zapínat jednotlivá vřetena?', sk: 'Dá sa zapínať jednotlivé vretená?', hu: 'Lehetséges egyedi orsókapcsolás?' },
        answer: {
          de: 'Ja — nicht benötigte Spindeln lassen sich deaktivieren. So können auch kürzere Bohrbilder gefahren werden.',
          en: 'Yes — unneeded spindles can be deactivated. This allows shorter drilling patterns too.',
          cz: 'Ano — nepotřebná vřetena lze deaktivovat. Tak lze jet i kratší vrtací vzory.',
          sk: 'Áno — nepotrebné vretená možno deaktivovať. Tak možno ísť aj kratšie vŕtacie vzory.',
          hu: 'Igen — a nem szükséges orsók kikapcsolhatók. Így rövidebb fúrásminták is futtathatók.',
        },
      },
      {
        question: { de: 'Werkstückzuführung automatisch?', en: 'Automatic workpiece feeding?', cz: 'Automatické podávání obrobku?', sk: 'Automatické podávanie obrobku?', hu: 'Automatikus munkadarab-adagolás?' },
        answer: {
          de: 'Optional — mit Förderer und Rückführung ist vollautomatischer Betrieb möglich. Asamer plant die Linienintegration.',
          en: 'Optional — with conveyor and return system, fully automatic operation is possible. Asamer plans line integration.',
          cz: 'Volitelně — s dopravníkem a návratovým systémem je možný plně automatický provoz. Asamer plánuje integraci linky.',
          sk: 'Voliteľne — s dopravníkom a návratovým systémom je možná plne automatická prevádzka. Asamer plánuje integráciu linky.',
          hu: 'Opcionális — szállítószalaggal és visszavezető rendszerrel teljesen automatikus üzem lehetséges. Az Asamer tervezi a sorintegrációt.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  FRAME — junior-323                                                 */
  /* ------------------------------------------------------------------ */
  'junior-323': {
    longDescription: {
      de: `Die Gannomat Junior 323 ist die Einstiegs-Rahmenbohrmaschine für kleinere Tischlereien und Möbelbetriebe mit überschaubarem Bedarf an Rahmenbohrung. Sie setzt präzise Bohrungen an den Rahmenseiten für Eckverbinder, Dübel oder Beschläge — in einem Arbeitsgang und mit deutlich besserer Wiederholgenauigkeit als manuelles Anzeichnen und Einzelbohren. Gegenüber der Standard-Rahmenbohrmaschine Master 325 ist die Junior 323 einfacher ausgestattet und wirtschaftlicher in der Anschaffung, dafür auf einfache Rahmenformen konzentriert: Küchenrahmen, Möbelrahmen, einfache Türrahmen. Für Sonderrahmen mit komplexen Bohrbildern ist die Mod 160 die passende Wahl. Asamer liefert die Junior 323 als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn inklusive Seřízení auf Ihre Rahmenformate und Bedienerschulung.`,
      en: `The Gannomat Junior 323 is the entry-level frame drilling machine for smaller joinery shops and furniture operations with manageable frame drilling needs. It sets precise holes on frame sides for corner connectors, dowels or fittings — in one work pass and with significantly better repeat accuracy than manual marking and individual drilling. Compared to the standard frame drilling machine Master 325, the Junior 323 is more simply equipped and more economical in acquisition, while concentrating on simple frame shapes: kitchen frames, furniture frames, simple door frames. For special frames with complex drilling patterns, the Mod 160 is the matching choice. Asamer supplies the Junior 323 as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary including setup to your frame formats and operator training.`,
      cz: `Gannomat Junior 323 je vstupní rámový vrtací stroj pro menší truhlárny a nábytkářské provozy s přehlednou potřebou rámového vrtání. Vytváří přesné otvory na stranách rámu pro rohové spojovací prvky, kolíky nebo kování — v jednom pracovním průchodu a s výrazně lepší opakovatelnou přesností než ruční označování a jednotlivé vrtání. Oproti standardnímu rámovému vrtacímu stroji Master 325 je Junior 323 jednodušeji vybaven a ekonomičtější v pořízení, zato zaměřen na jednoduché tvary rámů: kuchyňské rámy, nábytkové rámy, jednoduché dveřní rámy. Pro speciální rámy s komplexními vrtacími vzory je vhodnou volbou Mod 160. Asamer dodává Junior 323 jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko včetně seřízení na vaše rámové formáty a školení obsluhy.`,
      sk: `Gannomat Junior 323 je vstupný rámový vŕtací stroj pre menšie truhlárne a nábytkárske prevádzky s prehľadnou potrebou rámového vŕtania. Vytvára presné otvory na stranách rámu pre rohové spojovacie prvky, kolíky alebo kovanie — v jednom pracovnom prechode a s výrazne lepšou opakovateľnou presnosťou než ručné označovanie a jednotlivé vŕtanie. Oproti štandardnému rámovému vŕtaciemu stroju Master 325 je Junior 323 jednoduchšie vybavený a ekonomickejší v obstarávaní, zato zameraný na jednoduché tvary rámov: kuchynské rámy, nábytkové rámy, jednoduché dverné rámy. Pre špeciálne rámy s komplexnými vŕtacími vzormi je vhodnou voľbou Mod 160. Asamer dodáva Junior 323 ako autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko vrátane nastavenia na vaše rámové formáty a školenia obsluhy.`,
      hu: `A Gannomat Junior 323 a belépő szintű keretfúrógép kisebb asztalosüzemek és bútoripari üzemek számára, áttekinthető keretfúrási igénnyel. Precíz furatokat készít a keretoldalakon sarok-összekötőkhöz, csapokhoz vagy szerelvényekhez — egy munkamenetben és jelentősen jobb ismétlési pontossággal, mint a kézi jelölés és egyenkénti fúrás. A szabványos Master 325 keretfúrógéphez képest a Junior 323 egyszerűbben felszerelt és gazdaságosabb a beszerzésben, miközben egyszerű keretformákra koncentrál: konyhakeretek, bútorkeretek, egyszerű ajtókeretek. Különleges keretekhez komplex fúrásmintákkal a Mod 160 a megfelelő választás. Az Asamer a Junior 323-at hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra, a keretformátumaira történő beállítással és kezelői képzéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für kleine Tischlereien', en: 'For small joinery shops', cz: 'Pro malé truhlárny', sk: 'Pre malé truhlárne', hu: 'Kis asztalosüzemek számára' },
        body: {
          de: 'Tischlereien mit 3–10 Mitarbeitern, die regelmäßig Rahmen bohren, profitieren von der Einfachheit und dem geringen Platzbedarf der Junior 323. Die Maschine ist in wenigen Minuten aufgebaut und kann von normal qualifiziertem Personal bedient werden.',
          en: 'Joinery shops with 3–10 employees that regularly drill frames benefit from the simplicity and small footprint of the Junior 323. The machine is set up in a few minutes and can be operated by normally qualified personnel.',
          cz: 'Truhlárny s 3–10 zaměstnanci, které pravidelně vrtají rámy, těží z jednoduchosti a malé plochy Junior 323. Stroj je postaven během několika minut a může být obsluhován běžně kvalifikovaným personálem.',
          sk: 'Truhlárne s 3–10 zamestnancami, ktoré pravidelne vŕtajú rámy, ťažia z jednoduchosti a malej plochy Junior 323. Stroj je postavený počas niekoľkých minút a môže byť obsluhovaný bežne kvalifikovaným personálom.',
          hu: 'A 3-10 alkalmazottas asztalosüzemek, amelyek rendszeresen fúrnak kereteket, élvezik a Junior 323 egyszerűségét és kis helyigényét. A gép néhány perc alatt felállítható, és normál képzettségű személyzettel kezelhető.',
        },
      },
      {
        heading: { de: 'Für einfache Rahmenformen', en: 'For simple frame shapes', cz: 'Pro jednoduché tvary rámů', sk: 'Pre jednoduché tvary rámov', hu: 'Egyszerű keretformákhoz' },
        body: {
          de: 'Rechteckige Küchen- oder Möbelrahmen mit klassischen Eckverbindungen sind die Kernanwendung der Junior 323. Die Anschläge sind schnell einzurichten, die Wiederholgenauigkeit hoch — ideal für Tischlereien mit wiederkehrenden Rahmenformaten.',
          en: 'Rectangular kitchen or furniture frames with classic corner joints are the core application of the Junior 323. The stops are quickly set up, repeat accuracy is high — ideal for joinery shops with recurring frame formats.',
          cz: 'Obdélníkové kuchyňské nebo nábytkové rámy s klasickými rohovými spoji jsou hlavní aplikací Junior 323. Dorazy se rychle nastaví, opakovatelná přesnost je vysoká — ideální pro truhlárny s opakujícími se rámovými formáty.',
          sk: 'Obdĺžnikové kuchynské alebo nábytkové rámy s klasickými rohovými spojmi sú hlavnou aplikáciou Junior 323. Dorazy sa rýchlo nastavia, opakovateľná presnosť je vysoká — ideálne pre truhlárne s opakujúcimi sa rámovými formátmi.',
          hu: 'A klasszikus sarokkötéses téglalap alakú konyha- vagy bútorkeretek a Junior 323 fő alkalmazása. Az ütközők gyorsan beállíthatók, az ismétlési pontosság magas — ideális ismétlődő keretformátumú asztalosüzemeknek.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Junior 323 ist die richtige Wahl für Tischlereien, die ihren manuellen Rahmenbohrprozess mechanisieren wollen. Für größere Stückzahlen oder höhere Präzisionsanforderungen wählen Sie die Master 325. Bei Sonderrahmen mit komplexen Bohrbildern — Fensterrahmen, Schwenkflügel, Sonderprofile — empfiehlt sich die flexibelste Variante Mod 160.',
      en: 'The Junior 323 is the right choice for joinery shops wanting to mechanise their manual frame drilling process. For larger quantities or higher precision demands, choose the Master 325. For special frames with complex drilling patterns — window frames, pivoting wings, special profiles — the most flexible variant Mod 160 is recommended.',
      cz: 'Junior 323 je správnou volbou pro truhlárny, které chtějí mechanizovat svůj ruční proces vrtání rámů. Pro větší počty kusů nebo vyšší nároky na přesnost zvolte Master 325. U speciálních rámů s komplexními vrtacími vzory — okenní rámy, otočná křídla, speciální profily — se doporučuje nejflexibilnější varianta Mod 160.',
      sk: 'Junior 323 je správnou voľbou pre truhlárne, ktoré chcú mechanizovať svoj ručný proces vŕtania rámov. Pre väčšie počty kusov alebo vyššie nároky na presnosť zvoľte Master 325. Pri špeciálnych rámoch s komplexnými vŕtacími vzormi — okenné rámy, otočné krídla, špeciálne profily — sa odporúča najflexibilnejší variant Mod 160.',
      hu: 'A Junior 323 a megfelelő választás olyan asztalosüzemeknek, amelyek mechanizálni akarják kézi keretfúrási folyamatukat. Nagyobb darabszámokhoz vagy magasabb precíziós igényekhez válassza a Master 325-öt. Különleges keretekhez komplex fúrásmintákkal — ablakkeretek, forgószárnyak, különleges profilok — a legrugalmasabb Mod 160 változat ajánlott.',
    },
    faq: [
      {
        question: { de: 'Welche Rahmengrößen schafft die Junior 323?', en: 'What frame sizes does the Junior 323 handle?', cz: 'Jaké velikosti rámů zvládá Junior 323?', sk: 'Aké veľkosti rámov zvláda Junior 323?', hu: 'Milyen keretméreteket kezel a Junior 323?' },
        answer: {
          de: 'Typisch von ca. 300 × 300 mm bis 1.800 × 900 mm. Für Überformate ist die Master 325 die bessere Wahl.',
          en: 'Typically from approx. 300 × 300 mm to 1,800 × 900 mm. For oversized formats, the Master 325 is the better choice.',
          cz: 'Obvykle od cca 300 × 300 mm do 1.800 × 900 mm. Pro nadrozměrné formáty je lepší volbou Master 325.',
          sk: 'Obvykle od cca 300 × 300 mm do 1.800 × 900 mm. Pre nadrozmerné formáty je lepšou voľbou Master 325.',
          hu: 'Jellemzően kb. 300 × 300 mm-től 1800 × 900 mm-ig. Túlméretes formátumokhoz a Master 325 a jobb választás.',
        },
      },
      {
        question: { de: 'Ist die Bedienung für Anfänger geeignet?', en: 'Is operation suitable for beginners?', cz: 'Je obsluha vhodná pro začátečníky?', sk: 'Je obsluha vhodná pre začiatočníkov?', hu: 'Kezdőknek alkalmas a kezelés?' },
        answer: {
          de: 'Ja — mechanische Anschläge und einfacher Aufbau machen die Junior 323 ideal für Betriebe ohne CNC-Erfahrung. Asamer-Schulung vor Ort reicht meist an einem Tag.',
          en: 'Yes — mechanical stops and simple setup make the Junior 323 ideal for operations without CNC experience. Asamer on-site training usually fits in one day.',
          cz: 'Ano — mechanické dorazy a jednoduchá stavba činí Junior 323 ideální pro provozy bez CNC zkušenosti. Školení Asameru na místě obvykle stačí na jeden den.',
          sk: 'Áno — mechanické dorazy a jednoduchá stavba robia Junior 323 ideálnou pre prevádzky bez CNC skúsenosti. Školenie Asameru na mieste obvykle stačí na jeden deň.',
          hu: 'Igen — a mechanikus ütközők és az egyszerű felépítés ideálissá teszik a Junior 323-at CNC-tapasztalat nélküli üzemeknek. Az Asamer helyszíni képzése általában egy napon belül lezajlik.',
        },
      },
      {
        question: { de: 'Lässt sich die Maschine später upgraden?', en: 'Can the machine be upgraded later?', cz: 'Lze stroj později upgradovat?', sk: 'Dá sa stroj neskôr upgradovať?', hu: 'A gép később bővíthető?' },
        answer: {
          de: 'Grundsätzlich nicht — für mehr Funktion wechseln Sie zu Master 325 oder Mod 160. Asamer nimmt die Junior 323 bei Neukauf in Zahlung.',
          en: 'In principle not — for more function, switch to Master 325 or Mod 160. Asamer takes the Junior 323 in trade-in for a new purchase.',
          cz: 'V zásadě ne — pro více funkcí přejděte na Master 325 nebo Mod 160. Asamer přijímá Junior 323 na protiúčet při nákupu nového stroje.',
          sk: 'V zásade nie — pre viac funkcií prejdite na Master 325 alebo Mod 160. Asamer prijíma Junior 323 na protiúčet pri nákupe nového stroja.',
          hu: 'Alapvetően nem — több funkcióhoz váltson Master 325-re vagy Mod 160-ra. Az Asamer beszámítja a Junior 323-at új vásárláshoz.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  FRAME — mod-160                                                    */
  /* ------------------------------------------------------------------ */
  'mod-160': {
    longDescription: {
      de: `Die Gannomat Mod 160 ist die flexibelste Rahmenbohrmaschine im Gannomat-Programm — konzipiert für Sonderrahmen mit komplexen Bohrbildern. Während die Junior 323 auf einfache und die Master 325 auf Standard-Rahmenformen ausgelegt sind, verarbeitet die Mod 160 individuelle Geometrien: Schwenkflügel, Rundbögen, asymmetrische Türrahmen, Sonderprofile im Fensterbau oder Objekteinrichtungen. Der modulare Aufbau erlaubt Anpassung an nahezu jede Rahmengeometrie, die flexiblen Bohraggregate fahren komplexe Muster auch bei Losgröße 1. Für Betriebe, die auf Sondermaß-Fertigung spezialisiert sind — Schreiner im Denkmalschutz, Haustürenhersteller mit individueller Konfiguration, Fensterbauer für Passivhäuser — ist die Mod 160 die richtige Wahl. Asamer liefert die Mod 160 als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn inklusive Programmierung Ihrer Standardbohrbilder und umfassender Schulung.`,
      en: `The Gannomat Mod 160 is the most flexible frame drilling machine in the Gannomat range — designed for special frames with complex drilling patterns. While the Junior 323 is designed for simple and the Master 325 for standard frame shapes, the Mod 160 processes individual geometries: pivoting wings, round arches, asymmetric door frames, special profiles in window construction or contract interiors. The modular design allows adaptation to almost any frame geometry; the flexible drilling units run complex patterns even at batch size 1. For operations specialising in custom-dimension production — joiners in heritage protection, entrance door manufacturers with individual configuration, window builders for passive houses — the Mod 160 is the right choice. Asamer supplies the Mod 160 as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary including programming of your standard drilling patterns and comprehensive training.`,
      cz: `Gannomat Mod 160 je nejflexibilnější rámový vrtací stroj v programu Gannomat — koncipovaný pro speciální rámy s komplexními vrtacími vzory. Zatímco Junior 323 je konstruován pro jednoduché a Master 325 pro standardní tvary rámů, Mod 160 zpracovává individuální geometrie: otočná křídla, kruhové oblouky, asymetrické dveřní rámy, speciální profily ve stavbě oken nebo v interiérovém vybavení. Modulární konstrukce umožňuje přizpůsobení téměř každé geometrii rámu, flexibilní vrtací agregáty jedou komplexní vzory i při dávce 1. Pro provozy specializované na zakázkovou výrobu — truhláře v památkové péči, výrobce vchodových dveří s individuální konfigurací, výrobce oken pro pasivní domy — je Mod 160 správnou volbou. Asamer dodává Mod 160 jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko včetně programování vašich standardních vrtacích vzorů a obsáhlého školení.`,
      sk: `Gannomat Mod 160 je najflexibilnejší rámový vŕtací stroj v programe Gannomat — koncipovaný pre špeciálne rámy s komplexnými vŕtacími vzormi. Zatiaľ čo Junior 323 je konštruovaný pre jednoduché a Master 325 pre štandardné tvary rámov, Mod 160 spracováva individuálne geometrie: otočné krídla, kruhové oblúky, asymetrické dverné rámy, špeciálne profily vo výstavbe okien alebo v interiérovom vybavení. Modulárna konštrukcia umožňuje prispôsobenie takmer každej geometrii rámu, flexibilné vŕtacie agregáty idú komplexné vzory aj pri dávke 1. Pre prevádzky špecializované na zákazkovú výrobu — truhlárov v pamiatkovej starostlivosti, výrobcov vchodových dverí s individuálnou konfiguráciou, výrobcov okien pre pasívne domy — je Mod 160 správnou voľbou. Asamer dodáva Mod 160 ako autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko vrátane programovania vašich štandardných vŕtacích vzorov a rozsiahleho školenia.`,
      hu: `A Gannomat Mod 160 a Gannomat-kínálat legrugalmasabb keretfúrógépe — különleges keretekhez komplex fúrásmintákkal tervezve. Míg a Junior 323 egyszerű, a Master 325 szabványos keretformákra van tervezve, a Mod 160 egyedi geometriákat dolgoz fel: forgószárnyakat, félköríves íveket, aszimmetrikus ajtókereteket, különleges profilokat ablaképítésben vagy projektinteriőrökben. A moduláris felépítés szinte minden keretgeometriához való adaptációt lehetővé tesz; a rugalmas fúróegységek 1-es tételszámnál is komplex mintákat futtatnak. Egyedi méretű gyártásra szakosodott üzemek számára — műemlékvédelmi asztalosok, egyedi konfigurációs bejárati ajtó gyártók, passzívház-ablaképítők — a Mod 160 a megfelelő választás. Az Asamer a Mod 160-at hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra, a szabvány fúrásminták programozásával és átfogó képzéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Sondermaß-Türen und Fenster', en: 'For custom-dimension doors and windows', cz: 'Pro zakázkové dveře a okna', sk: 'Pre zákazkové dvere a okná', hu: 'Egyedi méretű ajtókhoz és ablakokhoz' },
        body: {
          de: 'Denkmalgeschützte Gebäude, Passivhäuser oder anspruchsvolle Wohnobjekte verlangen Rahmen in Sondermaßen und mit individuellen Beschlagsbohrungen. Die Mod 160 programmiert jedes Werkstück einzeln — vom ERP oder per CAD-Import bis zur fertigen Bohrung am Rahmen.',
          en: 'Heritage-protected buildings, passive houses or demanding residential projects require frames in special dimensions and with individual fitting holes. The Mod 160 programs every workpiece individually — from ERP or CAD import to finished drilling on the frame.',
          cz: 'Památkově chráněné budovy, pasivní domy nebo náročné obytné objekty vyžadují rámy ve zvláštních rozměrech a s individuálními otvory pro kování. Mod 160 programuje každý obrobek jednotlivě — od ERP nebo CAD importu až po hotový otvor na rámu.',
          sk: 'Pamiatkovo chránené budovy, pasívne domy alebo náročné obytné objekty vyžadujú rámy vo zvláštnych rozmeroch a s individuálnymi otvormi pre kovanie. Mod 160 programuje každý obrobok jednotlivo — od ERP alebo CAD importu až po hotový otvor na ráme.',
          hu: 'A műemlékvédelem alatt álló épületek, passzívházak vagy igényes lakóobjektumok különleges méretű kereteket és egyedi szerelvényfuratokat igényelnek. A Mod 160 minden munkadarabot egyedileg programoz — ERP-ből vagy CAD-importból a kereten lévő kész furatig.',
        },
      },
      {
        heading: { de: 'Für Objekt- und Spezialanwendungen', en: 'For contract and special applications', cz: 'Pro objektové a speciální aplikace', sk: 'Pre objektové a špeciálne aplikácie', hu: 'Projekt- és speciális alkalmazásokhoz' },
        body: {
          de: 'In Hotels, Bürotürmen oder Bildungseinrichtungen werden oft Sonderrahmen für Brandschutztüren, Schallschutztüren oder Sicherheitsrahmen verbaut. Die Mod 160 beherrscht die komplexen Bohrbilder aller gängigen Sondernormen — mit entsprechender Programmierung.',
          en: 'In hotels, office towers or educational facilities, special frames for fire doors, acoustic doors or security frames are often installed. The Mod 160 masters the complex drilling patterns of all common special standards — with corresponding programming.',
          cz: 'V hotelech, kancelářských věžích nebo vzdělávacích zařízeních se často montují speciální rámy pro protipožární dveře, protihlukové dveře nebo bezpečnostní rámy. Mod 160 ovládá komplexní vrtací vzory všech běžných speciálních norem — s odpovídajícím programováním.',
          sk: 'V hoteloch, kancelárskych vežiach alebo vzdelávacích zariadeniach sa často montujú špeciálne rámy pre protipožiarne dvere, protihlukové dvere alebo bezpečnostné rámy. Mod 160 ovláda komplexné vŕtacie vzory všetkých bežných špeciálnych noriem — so zodpovedajúcim programovaním.',
          hu: 'Szállodákban, irodatornyokban vagy oktatási intézményekben gyakran szerelnek be különleges kereteket tűzgátló ajtókhoz, hangszigetelő ajtókhoz vagy biztonsági keretekhez. A Mod 160 megfelelő programozással elsajátítja az összes szokásos különleges szabvány komplex fúrásmintáit.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Mod 160 ist die richtige Wahl für Spezialisten, die auf Sonderrahmen und individuelle Projekte setzen. Für klassische Möbel- und Standardrahmen ist die Master 325 wirtschaftlicher; Einsteiger greifen zur Junior 323. Bei besonders hoher Variantenzahl ist die Mod 160 gegenüber CNC-Systemen wirtschaftlicher, weil sie ohne aufwendige Programmierung auf mechanische Flexibilität setzt.',
      en: 'The Mod 160 is the right choice for specialists focusing on special frames and individual projects. For classic furniture and standard frames, the Master 325 is more economical; beginners take the Junior 323. With particularly high variant numbers, the Mod 160 is more economical than CNC systems because it relies on mechanical flexibility without extensive programming.',
      cz: 'Mod 160 je správnou volbou pro specialisty, kteří sázejí na speciální rámy a individuální projekty. Pro klasické nábytkové a standardní rámy je ekonomičtější Master 325; začátečníci volí Junior 323. Při obzvlášť vysokém počtu variant je Mod 160 ekonomičtější oproti CNC systémům, protože sází na mechanickou flexibilitu bez náročného programování.',
      sk: 'Mod 160 je správnou voľbou pre špecialistov, ktorí stavajú na špeciálne rámy a individuálne projekty. Pre klasické nábytkové a štandardné rámy je ekonomickejšia Master 325; začiatočníci volia Junior 323. Pri obzvlášť vysokom počte variantov je Mod 160 ekonomickejšia oproti CNC systémom, pretože stavia na mechanickú flexibilitu bez náročného programovania.',
      hu: 'A Mod 160 a megfelelő választás olyan specialistáknak, akik különleges keretekre és egyedi projektekre fókuszálnak. Klasszikus bútor- és szabvány keretekhez a Master 325 gazdaságosabb; kezdők a Junior 323-at választják. Különösen magas variánsszámnál a Mod 160 gazdaságosabb a CNC-rendszereknél, mert mechanikus rugalmasságra épít költséges programozás nélkül.',
    },
    faq: [
      {
        question: { de: 'Kann die Mod 160 runde Rahmen bohren?', en: 'Can the Mod 160 drill round frames?', cz: 'Umí Mod 160 vrtat kulaté rámy?', sk: 'Vie Mod 160 vŕtať okrúhle rámy?', hu: 'Tud a Mod 160 kerek kereteket fúrni?' },
        answer: {
          de: 'Rundbögen und gebogene Rahmenabschnitte ja — mit entsprechender Vorrichtung und Programmierung. Asamer berät zur Machbarkeit.',
          en: 'Round arches and curved frame sections yes — with corresponding fixture and programming. Asamer advises on feasibility.',
          cz: 'Kruhové oblouky a ohnuté rámové úseky ano — s odpovídajícím přípravkem a programováním. Asamer radí k proveditelnosti.',
          sk: 'Kruhové oblúky a ohnuté rámové úseky áno — so zodpovedajúcim prípravkom a programovaním. Asamer radí k uskutočniteľnosti.',
          hu: 'Félköríves íveket és hajlított keretszakaszokat igen — megfelelő rögzítéssel és programozással. Az Asamer megvalósíthatóság szempontjából tanácsot ad.',
        },
      },
      {
        question: { de: 'Welche Materialien verarbeitet die Mod 160?', en: 'Which materials does the Mod 160 process?', cz: 'Jaké materiály Mod 160 zpracovává?', sk: 'Aké materiály Mod 160 spracováva?', hu: 'Milyen anyagokat dolgoz fel a Mod 160?' },
        answer: {
          de: 'Massivholz, Leimholz, MDF, HPL-beschichtete Platten, Aluminium- und Kunststoffprofile im Rahmenbau.',
          en: 'Solid wood, glulam, MDF, HPL-coated panels, aluminium and plastic profiles in frame construction.',
          cz: 'Masivní dřevo, lepené dřevo, MDF, HPL povrstvené desky, hliníkové a plastové profily ve stavbě rámů.',
          sk: 'Masívne drevo, lepené drevo, MDF, HPL povrstvené dosky, hliníkové a plastové profily vo výstavbe rámov.',
          hu: 'Tömör fa, rétegelt ragasztott fa, MDF, HPL-bevonatos lapok, alumínium és műanyag profilok keretépítésben.',
        },
      },
      {
        question: { de: 'Wie lange dauert die Einrichtung auf neue Rahmengeometrie?', en: 'How long does setup for new frame geometry take?', cz: 'Jak dlouho trvá nastavení na novou geometrii rámu?', sk: 'Ako dlho trvá nastavenie na novú geometriu rámu?', hu: 'Mennyi ideig tart a beállítás új keretgeometriára?' },
        answer: {
          de: 'Einmalige Programmierung 1–4 Stunden; wiederkehrende Rahmen werden abgespeichert und per Programmwahl aufgerufen.',
          en: 'One-time programming 1–4 hours; recurring frames are stored and called up via program selection.',
          cz: 'Jednorázové programování 1–4 hodiny; opakující se rámy jsou uloženy a vyvolány výběrem programu.',
          sk: 'Jednorazové programovanie 1–4 hodiny; opakujúce sa rámy sú uložené a vyvolané výberom programu.',
          hu: 'Egyszeri programozás 1-4 óra; ismétlődő keretek tárolódnak és programválasztással hívhatók elő.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  CORNERHINGE — twin                                                 */
  /* ------------------------------------------------------------------ */
  'twin': {
    longDescription: {
      de: `Die Gannomat Twin ist eine Scharnierbohrmaschine mit zwei Arbeitsstationen für die industrielle Front- und Türenfertigung. Während der Bediener ein Werkstück an Station A bestückt, bohrt die Maschine an Station B — und umgekehrt. Das Ergebnis: doppelter Durchsatz gegenüber der Standard-Scharnierbohrmaschine Expert bei gleicher Präzision. Für Küchenfertiger, Möbelhersteller und Türenwerke mit hohem Frontenvolumen ist die Twin der wirtschaftlichste Weg, den Topfbohrprozess zu industrialisieren. Sie setzt Topfbohrungen und Bolzenlöcher für alle gängigen Scharniere (Blum, Hettich, Grass, Salice) in exakter Position, ohne dass die manuelle Bohrung durch wechselnde Anschläge den Takt bremst. Asamer liefert die Twin als autorisierter Gannomat-Händler für Tschechien, die Slowakei und Ungarn inklusive Einrichtung auf Ihre Scharnierstandards und Bedienerschulung.`,
      en: `The Gannomat Twin is a hinge drilling machine with two workstations for industrial front and door production. While the operator loads a workpiece at station A, the machine drills at station B — and vice versa. The result: double throughput compared to the standard hinge drilling machine Expert at the same precision. For kitchen manufacturers, furniture producers and door factories with high front volumes, the Twin is the most economical way to industrialise the hinge cup drilling process. It sets hinge cup holes and bolt holes for all common hinges (Blum, Hettich, Grass, Salice) in exact position without the manual drilling slowing down the cycle through changing stops. Asamer supplies the Twin as authorized Gannomat dealer for Czech Republic, Slovakia and Hungary including setup to your hinge standards and operator training.`,
      cz: `Gannomat Twin je vrtací stroj pro závěsy se dvěma pracovními stanicemi pro průmyslovou výrobu front a dveří. Zatímco obsluha osazuje obrobek na stanici A, stroj vrtá na stanici B — a naopak. Výsledek: dvojnásobný průtok oproti standardnímu vrtacímu stroji pro závěsy Expert při stejné přesnosti. Pro výrobce kuchyní, nábytku a dveřních závodů s vysokým objemem front je Twin nejekonomičtější cestou k industrializaci procesu vrtání miskových otvorů. Vytváří miskové otvory a otvory pro šrouby pro všechny běžné závěsy (Blum, Hettich, Grass, Salice) v přesné pozici, aniž by ruční vrtání zpomalovalo takt měnícími se dorazy. Asamer dodává Twin jako autorizovaný prodejce Gannomat pro Českou republiku, Slovensko a Maďarsko včetně seřízení na vaše standardy závěsů a školení obsluhy.`,
      sk: `Gannomat Twin je vŕtací stroj pre závesy s dvoma pracovnými stanicami pre priemyselnú výrobu frontov a dverí. Zatiaľ čo obsluha osadzuje obrobok na stanici A, stroj vŕta na stanici B — a naopak. Výsledok: dvojnásobný prietok oproti štandardnému vŕtaciemu stroju pre závesy Expert pri rovnakej presnosti. Pre výrobcov kuchýň, nábytku a dverných závodov s vysokým objemom frontov je Twin najekonomickejšou cestou k industrializácii procesu vŕtania miskových otvorov. Vytvára miskové otvory a otvory pre skrutky pre všetky bežné závesy (Blum, Hettich, Grass, Salice) v presnej pozícii, bez toho aby ručné vŕtanie spomaľovalo takt meniacimi sa dorazmi. Asamer dodáva Twin ako autorizovaný predajca Gannomat pre Česko, Slovensko a Maďarsko vrátane nastavenia na vaše štandardy závesov a školenia obsluhy.`,
      hu: `A Gannomat Twin egy pántfúrógép két munkaállomással ipari front- és ajtógyártáshoz. Miközben a kezelő az A állomáson munkadarabot helyez be, a gép a B állomáson fúr — és fordítva. Az eredmény: kétszeres áteresztőképesség a szabványos Expert pántfúrógéphez képest azonos pontossággal. Konyhagyártók, bútorgyártók és ajtógyárak számára nagy frontvolumennel a Twin a leggazdaságosabb út a tányérfúrási folyamat iparosításához. Tányérfuratokat és csavarlyukakat készít minden szokásos pánthoz (Blum, Hettich, Grass, Salice) pontos pozícióban, anélkül hogy a kézi fúrás változó ütközőkkel lassítaná az ütemet. Az Asamer a Twin-t hivatalos Gannomat-forgalmazóként szállítja Csehországba, Szlovákiába és Magyarországra, a pántszabványaira történő beállítással és kezelői képzéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für industrielle Frontfertigung', en: 'For industrial front production', cz: 'Pro průmyslovou výrobu front', sk: 'Pre priemyselnú výrobu frontov', hu: 'Ipari frontgyártáshoz' },
        body: {
          de: 'Küchenfertiger mit täglich mehreren hundert Fronten kommen mit einer Einzelstationsmaschine schnell an die Durchsatzgrenze. Die Zweistationen-Twin verdoppelt den Output bei gleichem Personaleinsatz — die ideale Lösung für wachsende Küchenmanufakturen und industrielle Fertiger.',
          en: 'Kitchen manufacturers with several hundred fronts daily quickly reach the throughput limit with a single-station machine. The two-station Twin doubles output at the same personnel level — the ideal solution for growing kitchen manufacturers and industrial producers.',
          cz: 'Výrobci kuchyní s několika sty fronty denně rychle narazí na hranici průtoku s jednostanicovým strojem. Dvoustanicová Twin zdvojnásobuje výstup při stejném personálním nasazení — ideální řešení pro rostoucí výrobce kuchyní a průmyslové výrobce.',
          sk: 'Výrobcovia kuchýň s niekoľkými stovkami frontov denne rýchlo narazia na hranicu prietoku s jednostanicovým strojom. Dvojstanicový Twin zdvojnásobuje výstup pri rovnakom personálnom nasadení — ideálne riešenie pre rastúcich výrobcov kuchýň a priemyselných výrobcov.',
          hu: 'A napi több száz frontot gyártó konyhagyártók egyállomásos géppel gyorsan elérik az áteresztőképesség határát. A kétállomásos Twin ugyanazon személyzeti szinten megduplázza a kibocsátást — ideális megoldás növekvő konyhagyártóknak és ipari termelőknek.',
        },
      },
      {
        heading: { de: 'Für variantenreiche Serienfertigung', en: 'For variant-rich series production', cz: 'Pro variantně bohatou sériovou výrobu', sk: 'Pre variantne bohatú sériovú výrobu', hu: 'Változatos sorozatgyártáshoz' },
        body: {
          de: 'An beiden Stationen der Twin lassen sich unterschiedliche Programme fahren — eine Station auf kleine Küchentüren, die andere auf lange Schranktüren. Umrüstzeiten werden dadurch minimiert, Personalauslastung maximiert.',
          en: 'Different programs can run at both stations of the Twin — one station for small kitchen doors, the other for long cabinet doors. Setup times are minimised and personnel utilisation maximised.',
          cz: 'Na obou stanicích Twin lze jet různé programy — jedna stanice na malé kuchyňské dveře, druhá na dlouhé skříňové dveře. Přestavovací časy se tím minimalizují, vytížení personálu maximalizuje.',
          sk: 'Na oboch staniciach Twin možno ísť rôzne programy — jedna stanica na malé kuchynské dvere, druhá na dlhé skriňové dvere. Prestavovacie časy sa tým minimalizujú, vyťaženie personálu maximalizuje.',
          hu: 'A Twin mindkét állomásán különböző programok futtathatók — az egyik állomás kis konyhaajtókra, a másik hosszú szekrényajtókra. Az átállási idők minimalizálódnak, a személyzet kihasználtsága maximalizálódik.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Twin ist die richtige Wahl für Küchenhersteller und Fronten-Fertiger mit industriellem Tagesvolumen. Für kleinere Tischlereien mit einer Einzelstation reicht die Expert aus. Bei sehr hohem Standardisierungsgrad und höchstem Volumen kann eine CNC-basierte Lösung ergänzend sinnvoll sein — Asamer analysiert Ihre Bedürfnisse und empfiehlt die passende Maschine.',
      en: 'The Twin is the right choice for kitchen manufacturers and front producers with industrial daily volume. For smaller joinery shops with a single station, the Expert is sufficient. With very high standardisation and highest volumes, a CNC-based solution can be complementary — Asamer analyses your needs and recommends the matching machine.',
      cz: 'Twin je správnou volbou pro výrobce kuchyní a front s průmyslovým denním objemem. Pro menší truhlárny s jednou stanicí postačí Expert. Při velmi vysokém stupni standardizace a nejvyšším objemu může být CNC řešení smysluplným doplňkem — Asamer analyzuje vaše potřeby a doporučí vhodný stroj.',
      sk: 'Twin je správnou voľbou pre výrobcov kuchýň a frontov s priemyselným denným objemom. Pre menšie truhlárne s jednou stanicou postačí Expert. Pri veľmi vysokom stupni štandardizácie a najvyššom objeme môže byť CNC riešenie zmysluplným doplnkom — Asamer analyzuje vaše potreby a odporučí vhodný stroj.',
      hu: 'A Twin a megfelelő választás konyhagyártóknak és frontgyártóknak ipari napi volumenekkel. Egyállomásos kisebb asztalosüzemeknek az Expert elegendő. Nagyon magas szabványosítási fokkal és legmagasabb volumenekkel egy CNC-alapú megoldás értelmes kiegészítés lehet — az Asamer elemzi az igényeket és a megfelelő gépet ajánlja.',
    },
    faq: [
      {
        question: { de: 'Welche Scharniertypen werden unterstützt?', en: 'Which hinge types are supported?', cz: 'Jaké typy závěsů jsou podporovány?', sk: 'Aké typy závesov sú podporované?', hu: 'Milyen pánttípusok támogatottak?' },
        answer: {
          de: 'Alle gängigen: Blum Clip top, Hettich Sensys, Grass Nexis, Salice und weitere Marken.',
          en: 'All common: Blum Clip top, Hettich Sensys, Grass Nexis, Salice and other brands.',
          cz: 'Všechny běžné: Blum Clip top, Hettich Sensys, Grass Nexis, Salice a další značky.',
          sk: 'Všetky bežné: Blum Clip top, Hettich Sensys, Grass Nexis, Salice a ďalšie značky.',
          hu: 'Minden szokásos: Blum Clip top, Hettich Sensys, Grass Nexis, Salice és más márkák.',
        },
      },
      {
        question: { de: 'Reicht ein Bediener für beide Stationen?', en: 'Is one operator sufficient for both stations?', cz: 'Stačí jedna obsluha pro obě stanice?', sk: 'Stačí jedna obsluha pre obe stanice?', hu: 'Egy kezelő elég mindkét állomáshoz?' },
        answer: {
          de: 'Ja — während eine Station bohrt, wird die andere bestückt. Der Bediener wechselt im Takt.',
          en: 'Yes — while one station drills, the other is loaded. The operator switches in rhythm.',
          cz: 'Ano — zatímco jedna stanice vrtá, druhá se osazuje. Obsluha se střídá v taktu.',
          sk: 'Áno — zatiaľ čo jedna stanica vŕta, druhá sa osadzuje. Obsluha sa strieda v takte.',
          hu: 'Igen — amíg az egyik állomás fúr, a másikat rakják. A kezelő ütemben váltogat.',
        },
      },
      {
        question: { de: 'Kann die Twin verschiedene Scharniertypen gleichzeitig verarbeiten?', en: 'Can the Twin process different hinge types simultaneously?', cz: 'Umí Twin zpracovávat různé typy závěsů současně?', sk: 'Vie Twin spracovávať rôzne typy závesov súčasne?', hu: 'Tudja a Twin egyszerre feldolgozni a különböző pánttípusokat?' },
        answer: {
          de: 'Ja — jede Station hat eigene Werkzeuge und kann unabhängig programmiert werden.',
          en: 'Yes — each station has its own tools and can be programmed independently.',
          cz: 'Ano — každá stanice má vlastní nástroje a lze ji programovat nezávisle.',
          sk: 'Áno — každá stanica má vlastné nástroje a možno ju programovať nezávisle.',
          hu: 'Igen — minden állomásnak saját szerszámai vannak és függetlenül programozható.',
        },
      },
    ],
  },
};

/* ====================================================================== */
/*  CATEGORY SEO CONTENT                                                  */
/* ====================================================================== */

export const GANNOMAT_CATEGORY_SEO: Record<GannomatCategory, CategorySeoContent> = {
  insertion: {
    introExpanded: {
      de: `Gannomat Bohr-Beleim-Dübeleintreibmaschinen sind das Herzstück jeder industriellen Korpusfertigung. Sie vereinen die drei kritischen Prozessschritte — Bohren der Dübellöcher, Aufbringen des Klebstoffs und Eintreiben der Dübel — in einer einzigen Maschine und in einer einzigen Aufspannung. Das Ergebnis: kürzere Taktzeiten, höhere Prozesssicherheit und reproduzierbare Qualität. Die Gannomat-Baureihe reicht von der Elite als halbautomatisches Einstiegsmodell über die Selekta als Industriestandard bis zur Spectrum und Index Reihe CNC für hochvariable Losgröße-1-Fertigung. Für Möbelhersteller in Tschechien, der Slowakei und Ungarn ist Gannomat der bewährte österreichische Lieferant, den Asamer exklusiv vertritt. Die österreichische Herkunft garantiert hohe Maschinenqualität; lokale Unterstützung durch Asamer sichert schnelle Reaktionszeiten bei Service und Ersatzteilen.`,
      en: `Gannomat drill-glue-dowel insertion machines are the heart of every industrial carcass production. They combine the three critical process steps — drilling dowel holes, applying glue and inserting dowels — in a single machine and in a single setup. The result: shorter cycle times, higher process reliability and reproducible quality. The Gannomat range spans from the Elite as semi-automatic entry model through the Selekta as industry standard to the Spectrum and Index Reihe CNC for highly variable batch-size-1 production. For furniture manufacturers in Czech Republic, Slovakia and Hungary, Gannomat is the proven Austrian supplier that Asamer represents exclusively. Austrian origin guarantees high machine quality; local support by Asamer ensures fast response times for service and spare parts.`,
      cz: `Gannomat stroje pro vrtání, lepení a zarážení kolíků jsou srdcem každé průmyslové výroby korpusu. Spojují tři kritické procesní kroky — vrtání kolíkových otvorů, nanášení lepidla a zarážení kolíků — do jediného stroje a do jediného upnutí. Výsledek: kratší doby taktu, vyšší procesní spolehlivost a reprodukovatelná kvalita. Řada Gannomat sahá od Elite jako poloautomatického vstupního modelu přes Selekta jako průmyslový standard až po Spectrum a Index Reihe CNC pro vysoce variabilní výrobu dávky 1. Pro výrobce nábytku v České republice, na Slovensku a v Maďarsku je Gannomat osvědčeným rakouským dodavatelem, kterého Asamer exkluzivně zastupuje. Rakouský původ zaručuje vysokou kvalitu strojů; místní podpora od Asamer zajišťuje rychlé reakční časy při servisu a náhradních dílech.`,
      hu: `A Gannomat fúró-ragasztó-csapozó gépek minden ipari korpuszgyártás szíve. Egyesítik a három kritikus folyamatlépést — a csaplyukak fúrását, a ragasztó felvitelét és a csapok beütését — egyetlen gépben és egyetlen befogásban. Az eredmény: rövidebb ciklusidők, nagyobb folyamatbiztonság és reprodukálható minőség. A Gannomat gépsor az Elite félautomatikus belépő modelltől a Selekta ipari szabványon át a Spectrum és az Index Reihe CNC-ig terjed, a nagy variabilitású, 1-es tételszámú gyártáshoz. Csehországi, szlovákiai és magyarországi bútorgyártók számára a Gannomat a bevált osztrák beszállító, amelyet az Asamer kizárólagosan képvisel. Az osztrák származás magas gépminőséget garantál; a helyi Asamer-támogatás gyors reakcióidőket biztosít szerviz és alkatrészek terén.`,
    },
    sections: [
      {
        heading: { de: 'Halbautomatisch vs. vollautomatisch', en: 'Semi-automatic vs. fully automatic', cz: 'Poloautomatické vs. plně automatické', hu: 'Félautomatikus vs. teljesen automatikus' },
        body: {
          de: 'Halbautomatische Maschinen (Elite, Express) benötigen einen Bediener zur Werkstückpositionierung und sind wirtschaftlich für mittleren Durchsatz. Vollautomatische Maschinen (Selekta, Spectrum, Index Reihe CNC) arbeiten mit automatischer Werkstückzuführung und CNC-Programmsteuerung — ideal für hohen Durchsatz oder komplexe Variantenproduktion.',
          en: 'Semi-automatic machines (Elite, Express) need an operator for workpiece positioning and are economical for medium throughput. Fully automatic machines (Selekta, Spectrum, Index Reihe CNC) work with automatic workpiece feeding and CNC program control — ideal for high throughput or complex variant production.',
          cz: 'Poloautomatické stroje (Elite, Express) potřebují obsluhu k polohování obrobku a jsou ekonomické pro střední průtok. Plně automatické stroje (Selekta, Spectrum, Index Reihe CNC) pracují s automatickým podáváním obrobku a CNC programovým řízením — ideální pro vysoký průtok nebo složitou variantní výrobu.',
          hu: 'A félautomatikus gépek (Elite, Express) kezelőre szorulnak a munkadarab pozicionálásához, és közepes áteresztőképességnél gazdaságosak. A teljesen automatikus gépek (Selekta, Spectrum, Index Reihe CNC) automatikus munkadarab-adagolással és CNC-programvezérléssel dolgoznak — ideálisak nagy áteresztőképességhez vagy összetett, változatos gyártáshoz.',
        },
      },
      {
        heading: { de: 'Beschlagsetzen zusätzlich zu Dübeln', en: 'Fitting insertion in addition to dowels', cz: 'Vsazování kování dodatečně ke kolíkům', hu: 'Szerelvény beültetés a csapokon túl' },
        body: {
          de: 'Die Index Reihe CNC und Spectrum setzen zusätzlich zu Dübeln auch Beschläge (Exzenter, Bolzen, Muffen) — unverzichtbar für RTA-Möbelfertigung. Die Selekta konzentriert sich auf reines Bohren, Beleimen und Dübeln; Beschlagsetzen erfolgt auf separaten Maschinen.',
          en: 'The Index Reihe CNC and Spectrum set fittings (cam fittings, bolts, sleeves) in addition to dowels — indispensable for RTA furniture production. The Selekta focuses on pure drilling, gluing and doweling; fitting insertion is done on separate machines.',
          cz: 'Index Reihe CNC a Spectrum vsazují kromě kolíků i kování (excentry, šrouby, pouzdra) — nepostradatelné pro výrobu RTA nábytku. Selekta se soustředí na čisté vrtání, lepení a kolíkování; vsazování kování probíhá na oddělených strojích.',
          hu: 'Az Index Reihe CNC és a Spectrum a csapokon túl szerelvényeket (excentereket, csavarokat, hüvelyeket) is beültetnek — nélkülözhetetlenek az RTA bútorgyártáshoz. A Selekta a tiszta fúrásra, ragasztásra és csapozásra összpontosít; a szerelvénybeültetés külön gépeken történik.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Welche Maschine passt zu welchem Betrieb?', en: 'Which machine fits which operation?', cz: 'Který stroj se hodí pro jaký provoz?', hu: 'Melyik gép illik melyik üzemhez?' },
        answer: {
          de: 'Tischlerei bis 20 MA: Elite. Mittelbetrieb 20–80 MA: Selekta. Industrie: Spectrum oder Index Reihe CNC. Asamer berät anhand konkreter Produktionsdaten.',
          en: 'Joinery up to 20 employees: Elite. Mid-sized 20–80 employees: Selekta. Industrial: Spectrum or Index Reihe CNC. Asamer advises based on concrete production data.',
          cz: 'Truhlářství do 20 pracovníků: Elite. Středně velký 20–80 pracovníků: Selekta. Průmyslový: Spectrum nebo Index Reihe CNC. Asamer poradí na základě konkrétních výrobních dat.',
          hu: '20 főig asztalosüzem: Elite. Középüzem 20–80 fő: Selekta. Ipari: Spectrum vagy Index Reihe CNC. Az Asamer konkrét termelési adatok alapján ad tanácsot.',
        },
      },
      {
        question: { de: 'Gibt es Finanzierungsmöglichkeiten?', en: 'Are there financing options?', cz: 'Existují možnosti financování?', hu: 'Vannak finanszírozási lehetőségek?' },
        answer: {
          de: 'Ja — Asamer kooperiert mit Leasingbanken für Mietkauf und Leasing. Bitte erfragen Sie Konditionen direkt.',
          en: 'Yes — Asamer cooperates with leasing banks for hire purchase and leasing. Please request terms directly.',
          cz: 'Ano — Asamer spolupracuje s leasingovými bankami pro splátkový prodej a leasing. Podmínky si prosím vyžádejte přímo.',
          hu: 'Igen — az Asamer lízingbankokkal működik együtt bérlet-vétel és lízing terén. A feltételeket kérjük, közvetlenül kérje.',
        },
      },
      {
        question: { de: 'Welche Lieferzeit ist typisch?', en: 'What is the typical delivery time?', cz: 'Jaká je typická dodací lhůta?', hu: 'Mi a jellemző szállítási idő?' },
        answer: {
          de: 'Lager-Maschinen 2–4 Wochen, Sonderausführungen 8–16 Wochen. Asamer hält gängige Modelle vor.',
          en: 'Stock machines 2–4 weeks, special versions 8–16 weeks. Asamer keeps common models in stock.',
          cz: 'Skladové stroje 2–4 týdny, speciální provedení 8–16 týdnů. Asamer drží běžné modely skladem.',
          hu: 'Raktári gépek 2–4 hét, egyedi kivitelek 8–16 hét. Az Asamer raktáron tartja a szokásos modelleket.',
        },
      },
    ],
  },

  insertion_door: {
    introExpanded: {
      de: `Gannomat Dübeleintreibmaschinen für Türen und Fenster (Selekta HD, Injecta HD, Index DW Reihe CNC) sind auf die speziellen Anforderungen der Türen- und Fensterfertigung abgestimmt. Türen- und Fensterprofile haben im Gegensatz zu Korpusseiten andere Bohrbilder, Materialdichten und Toleranzanforderungen — die HD-Varianten sind dafür optimiert. Die Maschinen verarbeiten Holz-, Aluminium- und Kunststoffrahmen mit hoher Präzision und können in Fertigungslinien mit Rahmenpressen und Verglasungsstationen integriert werden. Asamer liefert die Gannomat-HD-Baureihe an Türenhersteller und Fensterfabriken in CZ, SK und HU inklusive Abstimmung auf Ihre Rahmentypen.`,
      en: `Gannomat dowel insertion machines for doors and windows (Selekta HD, Injecta HD, Index DW Reihe CNC) are tailored to the specific requirements of door and window production. Door and window profiles, unlike carcass sides, have different drilling patterns, material densities and tolerance requirements — the HD variants are optimised for this. The machines process wood, aluminium and plastic frames with high precision and can be integrated into production lines with frame presses and glazing stations. Asamer supplies the Gannomat HD series to door manufacturers and window factories in CZ, SK and HU including matching to your frame types.`,
      cz: `Gannomat stroje pro zarážení kolíků pro dveře a okna (Selekta HD, Injecta HD, Index DW Reihe CNC) jsou přizpůsobeny specifickým požadavkům výroby dveří a oken. Dveřní a okenní profily mají na rozdíl od bočnic korpusu jiné vrtací vzory, hustotu materiálu a tolerance — HD varianty jsou pro to optimalizovány. Stroje zpracovávají dřevěné, hliníkové a plastové rámy s vysokou přesností a lze je integrovat do výrobních linek s rámovými lisy a zasklívacími stanicemi. Asamer dodává řadu Gannomat HD výrobcům dveří a okenním továrnám v CZ, SK a HU včetně přizpůsobení vašim typům rámů.`,
      hu: `A Gannomat csapbeültető gépek ajtókhoz és ablakokhoz (Selekta HD, Injecta HD, Index DW Reihe CNC) az ajtó- és ablakgyártás speciális követelményeihez igazodnak. Az ajtó- és ablakprofilok a korpuszoldalaktól eltérően más fúrásmintákat, anyagsűrűséget és tűréskövetelményeket igényelnek — a HD-változatok ezekre optimalizáltak. A gépek fa-, alumínium- és műanyagkereteket dolgoznak fel nagy pontossággal, és keretprésekkel és üvegező állomásokkal rendelkező gyártósorokba integrálhatók. Az Asamer a Gannomat HD sorozatot CZ, SK és HU ajtógyártóinak és ablakgyárainak szállítja, az ön kerettípusaira való illesztéssel együtt.`,
    },
    sections: [
      {
        heading: { de: 'Holz, Aluminium, Kunststoff', en: 'Wood, aluminium, plastic', cz: 'Dřevo, hliník, plast', hu: 'Fa, alumínium, műanyag' },
        body: {
          de: 'Die HD-Modelle verarbeiten alle gängigen Rahmenmaterialien. Die Werkzeuge werden je nach Material ausgewählt, die Bohrparameter in der CNC-Steuerung gespeichert.',
          en: 'The HD models process all common frame materials. Tools are selected by material, drilling parameters stored in the CNC control.',
          cz: 'HD modely zpracovávají všechny běžné rámové materiály. Nástroje se vybírají podle materiálu, vrtací parametry jsou uloženy v CNC řízení.',
          hu: 'A HD-modellek minden szokásos keretanyagot feldolgoznak. A szerszámok az anyag szerint választódnak ki, a fúrási paraméterek a CNC-vezérlésben tárolódnak.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Passen die HD-Maschinen zu österreichischen und deutschen Rahmenstandards?', en: 'Do HD machines fit Austrian and German frame standards?', cz: 'Odpovídají HD stroje rakouským a německým rámovým standardům?', hu: 'Megfelelnek a HD-gépek az osztrák és német keret-szabványoknak?' },
        answer: {
          de: 'Ja — die HD-Baureihe ist auf europäische Standards (Euronut, Euroschiene) ausgelegt.',
          en: 'Yes — the HD series is designed for European standards (Eurogroove, Eurotrack).',
          cz: 'Ano — řada HD je navržena pro evropské standardy (Eurodrážka, Eurokolejnice).',
          hu: 'Igen — a HD sorozat európai szabványokra (Eurohoronyra, Eurosínre) készült.',
        },
      },
      {
        question: { de: 'Kann die Selekta HD in eine Fertigungslinie eingebunden werden?', en: 'Can the Selekta HD be integrated into a production line?', cz: 'Lze Selekta HD zapojit do výrobní linky?', hu: 'Integrálható a Selekta HD gyártósorba?' },
        answer: {
          de: 'Ja — mit Ein-, Auslaufförderer und Puffer. Asamer plant die Linie.',
          en: 'Yes — with infeed, outfeed conveyor and buffer. Asamer plans the line.',
          cz: 'Ano — se vstupním, výstupním dopravníkem a pufrem. Asamer linku projektuje.',
          hu: 'Igen — be-, kivezető szállítószalaggal és pufferrel. Az Asamer tervezi meg a sort.',
        },
      },
      {
        question: { de: 'Wie hoch ist der Wartungsaufwand?', en: 'How high is the maintenance effort?', cz: 'Jaká je údržba?', hu: 'Milyen a karbantartási igény?' },
        answer: {
          de: 'Wartungsintervall 6 Monate, jährliche Hauptinspektion. Wartungsvertrag empfohlen.',
          en: 'Maintenance interval 6 months, annual main inspection. Maintenance contract recommended.',
          cz: 'Interval údržby 6 měsíců, roční hlavní kontrola. Servisní smlouva doporučena.',
          hu: 'Karbantartási intervallum 6 hónap, éves főellenőrzés. Karbantartási szerződés ajánlott.',
        },
      },
    ],
  },

  machining: {
    introExpanded: {
      de: `Gannomat CNC-Bearbeitungszentren — allen voran die ProTec Profit — vereinen Fräsen, Bohren und Dübeleintreiben in einer Maschine mit einer einzigen Aufspannung. Das ist der Schlüssel zu komplexen Möbelteilen wie Fronten mit Ausschnitten und Beschlag-Bohrbildern oder Korpussteilen mit gefrästen Profilen. Statt das Werkstück zwischen mehreren Maschinen zu bewegen — mit je eigenen Umsetzfehlern — entsteht das fertige Teil in einem Durchlauf. Für Möbelhersteller mit Mix aus Bohrungen und Fräsbearbeitung sind die Gannomat-Bearbeitungszentren oft die beste Lösung. Asamer liefert sie für CZ, SK und HU inklusive Programmierung, Postprozessor-Anpassung und ERP-Integration.`,
      en: `Gannomat CNC machining centres — foremost the ProTec Profit — combine milling, drilling and dowel insertion in one machine with a single setup. This is key to complex furniture parts like fronts with cutouts and fitting drillings or carcass parts with milled profiles. Instead of moving the workpiece between multiple machines — each with its own repositioning errors — the finished part is created in one pass. For furniture manufacturers with a mix of drilling and milling, Gannomat machining centres are often the best solution. Asamer supplies them for CZ, SK and HU including programming, postprocessor customisation and ERP integration.`,
      cz: `Gannomat CNC obráběcí centra — především ProTec Profit — spojují frézování, vrtání a zarážení kolíků v jednom stroji s jediným upnutím. Je to klíč ke složitým dílům nábytku jako čelním plochám s výřezy a vrtáním pro kování nebo korpusovým dílům s frézovanými profily. Místo přesouvání obrobku mezi několika stroji — každý s vlastními chybami přemístění — vzniká hotový díl v jednom průchodu. Pro výrobce nábytku se směsí vrtání a frézování jsou obráběcí centra Gannomat často nejlepším řešením. Asamer je dodává pro CZ, SK a HU včetně programování, úpravy postprocesoru a integrace s ERP.`,
      hu: `A Gannomat CNC megmunkáló központok — élükön a ProTec Profit — egy gépben, egyetlen befogásban egyesítik a marást, fúrást és csapozást. Ez a kulcsa az olyan összetett bútorelemeknek, mint a kivágásokat és szerelvényfuratokat tartalmazó frontok vagy mart profilú korpuszelemek. Ahelyett, hogy a munkadarabot több gép között mozgatnák — egyenként saját átfogási hibákkal — a kész alkatrész egyetlen menetben jön létre. Fúrás és marás keverékével dolgozó bútorgyártók számára a Gannomat megmunkáló központok gyakran a legjobb megoldás. Az Asamer CZ, SK és HU területére szállítja őket, programozással, posztprocesszor-testreszabással és ERP-integrációval együtt.`,
    },
    sections: [
      {
        heading: { de: 'CNC-Bearbeitungszentrum vs. Einzelmaschinen', en: 'CNC machining centre vs. individual machines', cz: 'CNC obráběcí centrum vs. jednotlivé stroje', hu: 'CNC megmunkáló központ vs. egyedi gépek' },
        body: {
          de: 'Einzelmaschinen sind bei sehr hohen Stückzahlen mit wenigen Varianten oft schneller; CNC-Bearbeitungszentren gewinnen bei komplexen Werkstücken und Losgröße-1. Die Entscheidung hängt von Ihrem Produktmix ab.',
          en: 'Individual machines are often faster at very high quantities with few variants; CNC machining centres win on complex workpieces and batch-size-1. The decision depends on your product mix.',
          cz: 'Jednotlivé stroje jsou často rychlejší u velmi vysokých počtů kusů s málo variantami; CNC obráběcí centra vítězí u složitých obrobků a dávky 1. Rozhodnutí závisí na vašem mixu produktů.',
          hu: 'Az egyedi gépek gyakran gyorsabbak nagyon magas darabszámnál kevés variánssal; a CNC megmunkáló központok összetett munkadaraboknál és 1-es tételszámnál nyernek. A döntés a termékösszetételétől függ.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Wie gestaltet sich die Programmierung?', en: 'How is programming handled?', cz: 'Jak probíhá programování?', hu: 'Hogyan történik a programozás?' },
        answer: {
          de: 'Via grafische CAD-Software mit Standard-Importformaten (DXF, DWG, STEP). Asamer schult Ihr Team.',
          en: 'Via graphical CAD software with standard import formats (DXF, DWG, STEP). Asamer trains your team.',
          cz: 'Přes grafický CAD software se standardními importními formáty (DXF, DWG, STEP). Asamer školí váš tým.',
          hu: 'Grafikus CAD-szoftveren keresztül szabványos importformátumokkal (DXF, DWG, STEP). Az Asamer betanítja a csapatát.',
        },
      },
      {
        question: { de: 'Werkzeugmanagement?', en: 'Tool management?', cz: 'Správa nástrojů?', hu: 'Szerszámkezelés?' },
        answer: {
          de: 'Automatischer Werkzeugwechsler mit bis zu 30 Plätzen, Werkzeugvermessung automatisch.',
          en: 'Automatic tool changer with up to 30 slots, automatic tool measurement.',
          cz: 'Automatický měnič nástrojů až s 30 místy, automatické měření nástrojů.',
          hu: 'Automatikus szerszámcserélő akár 30 hellyel, automatikus szerszámmérés.',
        },
      },
      {
        question: { de: 'Staubabsaugung integriert?', en: 'Dust extraction integrated?', cz: 'Je odsávání prachu integrováno?', hu: 'Integrált porelszívás?' },
        answer: {
          de: 'Ja — Anschluss an vorhandene Absauganlage Standard.',
          en: 'Yes — connection to existing extraction system standard.',
          cz: 'Ano — napojení na stávající odsávací zařízení standard.',
          hu: 'Igen — csatlakozás a meglévő elszívórendszerhez szabvány.',
        },
      },
    ],
  },

  fitting: {
    introExpanded: {
      de: `Gannomat Dübelsetzmaschinen (Express-Baureihe S1 bis S5, Basica, Variabel, Red Baron, Vector CNC) decken das breite Spektrum der Korpus-Dübelbearbeitung ab. Von der kompakten Einstiegsmaschine Basica bis zur CNC-gesteuerten Vector stehen für jeden Betriebsgröße passende Lösungen zur Verfügung. Die Express S1–S5 unterscheiden sich in der Spindelzahl: mehr Spindeln bedeuten mehr Dübel pro Hub und kürzere Taktzeiten. Vector CNC und Express CNC bieten freie Programmierbarkeit für variable Bohrbilder. RTA-Varianten (Ready-to-Assemble) setzen zusätzlich zu Dübeln auch Beschläge. Asamer berät bei der Modellwahl anhand Ihrer Stückzahlen und Produktvarianten für CZ, SK und HU.`,
      en: `Gannomat dowel insertion machines (Express series S1 to S5, Basica, Variabel, Red Baron, Vector CNC) cover the wide spectrum of carcass dowel processing. From compact entry machine Basica to CNC-controlled Vector, suitable solutions are available for every operation size. The Express S1–S5 differ in spindle count: more spindles mean more dowels per stroke and shorter cycle times. Vector CNC and Express CNC offer free programmability for variable drilling patterns. RTA (Ready-to-Assemble) variants additionally insert fittings besides dowels. Asamer advises on model selection based on your quantities and product variants for CZ, SK and HU.`,
      cz: `Gannomat stroje pro vsazování kolíků (řada Express S1 až S5, Basica, Variabel, Red Baron, Vector CNC) pokrývají široké spektrum korpusového zpracování kolíků. Od kompaktního vstupního stroje Basica po CNC řízený Vector jsou k dispozici vhodná řešení pro každou velikost provozu. Express S1–S5 se liší počtem vřeten: více vřeten znamená více kolíků na zdvih a kratší doby taktu. Vector CNC a Express CNC nabízejí volnou programovatelnost pro variabilní vrtací vzory. Varianty RTA (Ready-to-Assemble) navíc ke kolíkům vsazují i kování. Asamer poradí při výběru modelu podle vašich počtů kusů a produktových variant pro CZ, SK a HU.`,
      hu: `A Gannomat csapbeültető gépek (Express sorozat S1-től S5-ig, Basica, Variabel, Red Baron, Vector CNC) lefedik a korpusz-csapozás széles spektrumát. A kompakt belépő Basica géptől a CNC-vezérelt Vectorig minden üzemnagyságra megfelelő megoldás áll rendelkezésre. Az Express S1–S5 orsószámban különbözik: több orsó több csapot jelent löketenként és rövidebb ciklusidőt. A Vector CNC és az Express CNC szabad programozhatóságot kínál változtatható fúrásmintákhoz. Az RTA (Ready-to-Assemble) változatok a csapokon túl szerelvényeket is beültetnek. Az Asamer tanácsot ad a modellválasztásnál darabszámai és termékváltozatai alapján CZ, SK és HU számára.`,
    },
    sections: [
      {
        heading: { de: 'Welche Spindelzahl ist richtig?', en: 'Which spindle count is right?', cz: 'Který počet vřeten je správný?', hu: 'Melyik orsószám a megfelelő?' },
        body: {
          de: 'Grobe Orientierung: S1 bis 50 Werkstücke/Tag, S2 bis 150, S3 bis 300, S4 bis 500, S5 über 500. Mehr Spindeln bedeuten bessere Leistung bei konstanten Werkstücken; bei hoher Variantenvielfalt reichen weniger Spindeln oft aus.',
          en: 'Rough orientation: S1 up to 50 workpieces/day, S2 up to 150, S3 up to 300, S4 up to 500, S5 over 500. More spindles mean better performance with consistent workpieces; with high variant diversity, fewer spindles are often sufficient.',
          cz: 'Hrubá orientace: S1 do 50 obrobků/den, S2 do 150, S3 do 300, S4 do 500, S5 přes 500. Více vřeten znamená lepší výkon u konstantních obrobků; při vysoké variabilitě často stačí méně vřeten.',
          hu: 'Durva tájékozódás: S1 legfeljebb 50 munkadarab/nap, S2 legfeljebb 150, S3 legfeljebb 300, S4 legfeljebb 500, S5 500 felett. Több orsó jobb teljesítményt jelent állandó munkadarabokon; nagy variánsválasztéknál gyakran elég kevesebb orsó.',
        },
      },
      {
        heading: { de: 'RTA vs. Standard-Dübelsetzmaschine', en: 'RTA vs. standard dowel insertion machine', cz: 'RTA vs. standardní stroj pro vsazování kolíků', hu: 'RTA vs. szabványos csapbeültető gép' },
        body: {
          de: 'RTA-Varianten setzen zusätzlich zu Dübeln auch Beschläge. Für Hersteller von Möbelbausätzen oder RTA-Möbeln unverzichtbar. Für Werkbank-montierte Möbel reicht Standard-Dübel.',
          en: 'RTA variants insert fittings in addition to dowels. Indispensable for manufacturers of furniture kits or RTA furniture. For workbench-assembled furniture, standard doweling is sufficient.',
          cz: 'RTA varianty vsazují ke kolíkům i kování. Nepostradatelné pro výrobce nábytkových stavebnic nebo RTA nábytku. Pro nábytek montovaný na pracovním stole stačí standardní kolíkování.',
          hu: 'Az RTA változatok a csapokon túl szerelvényeket is beültetnek. Nélkülözhetetlenek bútorszettek vagy RTA bútorok gyártóinak. Munkapadon szerelt bútorokhoz elég a szabványos csapozás.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Welche Dübelgrößen?', en: 'Which dowel sizes?', cz: 'Jaké velikosti kolíků?', hu: 'Milyen csapméretek?' },
        answer: {
          de: '6, 8 und 10 mm Standard. Sondergrößen möglich.',
          en: '6, 8 and 10 mm standard. Special sizes possible.',
          cz: '6, 8 a 10 mm standard. Speciální rozměry možné.',
          hu: '6, 8 és 10 mm szabvány. Egyedi méretek lehetségesek.',
        },
      },
      {
        question: { de: 'Pneumatikbedarf?', en: 'Pneumatic requirements?', cz: 'Požadavky na pneumatiku?', hu: 'Pneumatikai igény?' },
        answer: {
          de: 'Standard-Werkstattdruckluft (6–8 bar) reicht aus.',
          en: 'Standard workshop compressed air (6–8 bar) is sufficient.',
          cz: 'Standardní dílenský stlačený vzduch (6–8 bar) postačuje.',
          hu: 'Szabványos műhelyi sűrített levegő (6–8 bar) elegendő.',
        },
      },
      {
        question: { de: 'Wie schnell ist der Modellwechsel?', en: 'How fast is model changeover?', cz: 'Jak rychlá je změna modelu?', hu: 'Milyen gyors a modellváltás?' },
        answer: {
          de: 'Bei S-Modellen mechanisch 30–60 min, bei CNC-Modellen Programmwahl in Sekunden.',
          en: 'For S models mechanically 30–60 min, for CNC models program selection in seconds.',
          cz: 'U S modelů mechanicky 30–60 min, u CNC modelů výběr programu za sekundy.',
          hu: 'Az S modelleknél mechanikusan 30–60 perc, a CNC modelleknél programválasztás másodpercek alatt.',
        },
      },
    ],
  },

  carcass: {
    introExpanded: {
      de: `Gannomat Korpuspressen (Concept Easy, Eco, Primus, Korpus-Montagelinie, Lift, Lift Jumper) sorgen für die formstabile Verklebung von Korpussen nach dem Dübelsetzen. Der Kleber braucht Druck während des Aushärtens — erst dadurch entsteht ein winkelgenauer, belastbarer Möbelkorpus. Die Concept-Baureihe deckt alle Betriebsgrößen ab: Concept Easy für Tischlereien, Concept Eco für mittlere Produktion, Concept Primus für Industrie, Korpus-Montagelinie als Komplettlösung. Lift und Lift Jumper sind Hebetechnik für das Einbringen großer Korpussen. Asamer liefert die Gannomat-Korpuspressen für CZ, SK und HU inklusive Beratung zur Linienintegration.`,
      en: `Gannomat carcass presses (Concept Easy, Eco, Primus, Korpus-Montagelinie, Lift, Lift Jumper) ensure dimensionally stable gluing of carcasses after dowel insertion. The glue needs pressure during curing — only this creates an angular, load-bearing furniture carcass. The Concept series covers all operation sizes: Concept Easy for joinery shops, Concept Eco for medium production, Concept Primus for industry, Korpus-Montagelinie as complete solution. Lift and Lift Jumper are lifting technology for handling large carcasses. Asamer supplies Gannomat carcass presses for CZ, SK and HU including consultation on line integration.`,
      cz: `Gannomat korpusové lisy (Concept Easy, Eco, Primus, Korpus-Montagelinie, Lift, Lift Jumper) zajišťují tvarově stabilní lepení korpusu po vsazení kolíků. Lepidlo potřebuje tlak během vytvrzování — teprve tím vzniká pravoúhlý, zátěžuschopný nábytkový korpus. Řada Concept pokrývá všechny velikosti provozu: Concept Easy pro truhlárny, Concept Eco pro střední výrobu, Concept Primus pro průmysl, Korpus-Montagelinie jako kompletní řešení. Lift a Lift Jumper jsou zdvihací technikou pro vkládání velkých korpusů. Asamer dodává korpusové lisy Gannomat pro CZ, SK a HU včetně poradenství při integraci linky.`,
      hu: `A Gannomat korpuszprések (Concept Easy, Eco, Primus, Korpus-Montagelinie, Lift, Lift Jumper) biztosítják a korpuszok alakstabil ragasztását a csapozás után. A ragasztó nyomást igényel a kikeményedés során — csak így jön létre szögpontos, teherbíró bútorkorpusz. A Concept sorozat minden üzemméretet lefed: Concept Easy asztalosüzemeknek, Concept Eco közepes gyártáshoz, Concept Primus iparnak, Korpus-Montagelinie komplett megoldásként. A Lift és Lift Jumper emelőtechnika nagy korpuszok kezeléséhez. Az Asamer CZ, SK és HU területére szállítja a Gannomat korpuszpréseket, a gyártósor-integrációval kapcsolatos tanácsadással együtt.`,
    },
    sections: [
      {
        heading: { de: 'Concept Easy / Eco / Primus — Auswahlhilfe', en: 'Concept Easy / Eco / Primus — selection guide', cz: 'Concept Easy / Eco / Primus — pomůcka při výběru', hu: 'Concept Easy / Eco / Primus — választási segédlet' },
        body: {
          de: 'Concept Easy: Tischlerei, Einstieg, manuelle Bestückung. Concept Eco: mittlere Produktion, halbautomatisch. Concept Primus: Industrie, vollautomatisch. Korpus-Montagelinie: durchgängige Fertigungslinie mit Selekta.',
          en: 'Concept Easy: joinery, entry, manual loading. Concept Eco: medium production, semi-automatic. Concept Primus: industry, fully automatic. Korpus-Montagelinie: continuous production line with Selekta.',
          cz: 'Concept Easy: truhlárna, vstup, ruční zakládání. Concept Eco: střední výroba, poloautomatický. Concept Primus: průmysl, plně automatický. Korpus-Montagelinie: průběžná výrobní linka se Selekta.',
          hu: 'Concept Easy: asztalosüzem, belépő, kézi bepakolás. Concept Eco: közepes gyártás, félautomatikus. Concept Primus: ipar, teljesen automatikus. Korpus-Montagelinie: folyamatos gyártósor Selektával.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Welche Korpusgrößen?', en: 'What carcass sizes?', cz: 'Jaké velikosti korpusu?', hu: 'Milyen korpuszméretek?' },
        answer: {
          de: 'Typisch 300 × 300 × 300 bis 1.200 × 800 × 600 mm. Überformate auf Anfrage.',
          en: 'Typically 300 × 300 × 300 to 1,200 × 800 × 600 mm. Oversized formats on request.',
          cz: 'Obvykle 300 × 300 × 300 až 1.200 × 800 × 600 mm. Nadměrné formáty na vyžádání.',
          hu: 'Jellemzően 300 × 300 × 300-tól 1200 × 800 × 600 mm-ig. Túlméretes formátumok kérésre.',
        },
      },
      {
        question: { de: 'Presszeit?', en: 'Pressing time?', cz: 'Doba lisování?', hu: 'Présidő?' },
        answer: {
          de: '30–120 Sekunden je nach Kleber und Korpusgröße.',
          en: '30–120 seconds depending on glue and carcass size.',
          cz: '30–120 sekund podle lepidla a velikosti korpusu.',
          hu: '30–120 másodperc a ragasztótól és a korpuszmérettől függően.',
        },
      },
      {
        question: { de: 'Linienintegration?', en: 'Line integration?', cz: 'Integrace do linky?', hu: 'Gyártósor-integráció?' },
        answer: {
          de: 'Ja — mit Selekta, Förderer und Auspacker als Gesamtlinie.',
          en: 'Yes — with Selekta, conveyor and unpacker as complete line.',
          cz: 'Ano — se Selekta, dopravníkem a vybalovačem jako kompletní linka.',
          hu: 'Igen — Selektával, szállítószalaggal és kicsomagolóval komplett sorként.',
        },
      },
    ],
  },

  boring: {
    introExpanded: {
      de: `Gannomat Kolkovací-Bohrmaschinen (DB 21-27-35 und DB 21-27-35 WA) sind klassische Mehrspindel-Bohrmaschinen für Korpusseiten, Rückwände und Möbelteile mit Standard-Lochmustern. Die Ziffern 21-27-35 stehen für drei Modellvarianten mit entsprechender Spindelzahl. Die WA-Variante verfügt über automatische Werkstückzuführung für höheren Durchsatz. Für Tischlereien und mittelständische Möbelhersteller sind diese Maschinen seit Jahrzehnten Industriestandard — hohe Zuverlässigkeit, einfache Bedienung, gute Wartbarkeit. Asamer liefert die DB-Baureihe für CZ, SK und HU inklusive Einrichtung auf Ihre Lochabstände.`,
      en: `Gannomat dowel drilling machines (DB 21-27-35 and DB 21-27-35 WA) are classic multi-spindle drilling machines for carcass sides, back panels and furniture parts with standard hole patterns. The digits 21-27-35 stand for three model variants with corresponding spindle counts. The WA variant features automatic workpiece feeding for higher throughput. For joinery shops and mid-sized furniture manufacturers, these machines have been industry standard for decades — high reliability, simple operation, good serviceability. Asamer supplies the DB series for CZ, SK and HU including setup to your hole spacings.`,
      cz: `Gannomat kolkovací vrtací stroje (DB 21-27-35 a DB 21-27-35 WA) jsou klasické vícevřetenové vrtací stroje pro bočnice korpusu, záda a díly nábytku se standardními vzory otvorů. Čísla 21-27-35 označují tři varianty modelu s odpovídajícím počtem vřeten. Varianta WA má automatické podávání obrobku pro vyšší průtok. Pro truhlárny a středně velké výrobce nábytku jsou tyto stroje desetiletí průmyslovým standardem — vysoká spolehlivost, jednoduchá obsluha, dobrá servisovatelnost. Asamer dodává řadu DB pro CZ, SK a HU včetně seřízení na vaše rozteče otvorů.`,
      hu: `A Gannomat csapfúró gépek (DB 21-27-35 és DB 21-27-35 WA) klasszikus, többorsós fúrógépek korpuszoldalakhoz, hátfalakhoz és szabványos lyukmintás bútorelemekhez. A 21-27-35 számjegyek három modellváltozatot jelölnek a megfelelő orsószámmal. A WA-változat automatikus munkadarab-adagolással rendelkezik a nagyobb áteresztőképesség érdekében. Asztalosüzemek és középvállalkozású bútorgyártók számára ezek a gépek évtizedek óta ipari szabványok — magas megbízhatóság, egyszerű kezelés, jó szervizelhetőség. Az Asamer a DB sorozatot CZ, SK és HU területére szállítja, az ön lyuktávolságaira való beállítással együtt.`,
    },
    sections: [
      {
        heading: { de: 'Kolkovaci-Bohrmaschine vs. CNC-Maschine', en: 'Dowel drilling machine vs. CNC machine', cz: 'Kolkovací vrtací stroj vs. CNC stroj', hu: 'Csapfúró gép vs. CNC gép' },
        body: {
          de: 'Kolkovaci-Bohrmaschinen sind für Standardlochmuster optimiert — schneller und günstiger als CNC-Maschinen. Bei hoher Variantenzahl oder ungewöhnlichen Bohrbildern ist CNC die bessere Wahl.',
          en: 'Dowel drilling machines are optimised for standard hole patterns — faster and cheaper than CNC machines. For high variant counts or unusual drilling patterns, CNC is the better choice.',
          cz: 'Kolkovací vrtací stroje jsou optimalizovány pro standardní vzory otvorů — rychlejší a levnější než CNC stroje. Při vysokém počtu variant nebo neobvyklých vrtacích vzorech je CNC lepší volbou.',
          hu: 'A csapfúró gépek szabványos lyukmintákra optimalizáltak — gyorsabbak és olcsóbbak, mint a CNC-gépek. Nagy variánsszám vagy szokatlan fúrásminták esetén a CNC a jobb választás.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Was heißt WA?', en: 'What does WA mean?', cz: 'Co znamená WA?', hu: 'Mit jelent a WA?' },
        answer: {
          de: 'Werkstückautomatik — Zuführung und Abtransport erfolgen automatisch per Förderer.',
          en: 'Workpiece automation — feeding and removal automatically via conveyor.',
          cz: 'Automatika obrobku — podávání a odběr probíhají automaticky dopravníkem.',
          hu: 'Munkadarab-automatika — az adagolás és az elszállítás automatikusan szállítószalagon történik.',
        },
      },
      {
        question: { de: 'Bohrtiefenanschläge?', en: 'Depth stops?', cz: 'Hloubkové dorazy?', hu: 'Mélységütközők?' },
        answer: {
          de: 'Pro Spindel einstellbar. Standard 10–40 mm.',
          en: 'Adjustable per spindle. Standard 10–40 mm.',
          cz: 'Nastavitelné na vřeteno. Standardně 10–40 mm.',
          hu: 'Orsónként állítható. Szabvány 10–40 mm.',
        },
      },
      {
        question: { de: 'Werkzeugwechsel?', en: 'Tool change?', cz: 'Výměna nástrojů?', hu: 'Szerszámcsere?' },
        answer: {
          de: 'Manuell, wenige Minuten pro Spindel.',
          en: 'Manual, few minutes per spindle.',
          cz: 'Ručně, několik minut na vřeteno.',
          hu: 'Kézi, néhány perc orsónként.',
        },
      },
    ],
  },

  rowboring: {
    introExpanded: {
      de: `Gannomat Reihenbohrmaschinen (ProLine 50, Vantage 76-152) sind Hochleistungs-Bohrmaschinen mit 50 bis 152 Spindeln für die Großserienfertigung. Eine einzige Maschine bohrt ganze Bohrbilder — etwa die gesamte Seitenwand eines Kleiderschranks — in einem einzigen Hub. Das ist der schnellste Weg zu Standardkorpusteilen mit 32-mm-Raster. Die Reihenbohrmaschinen eignen sich ausschließlich für Großserien mit geringer Variantenvielfalt; Losgröße-1 ist nicht ihr Einsatzgebiet. Für Möbelhersteller mit stabilen Produktionsprogrammen sind sie unschlagbar wirtschaftlich. Asamer liefert sie für CZ, SK und HU inklusive Linienintegration.`,
      en: `Gannomat row drilling machines (ProLine 50, Vantage 76-152) are high-performance drilling machines with 50 to 152 spindles for large-series production. A single machine drills entire drilling patterns — such as the entire side wall of a wardrobe — in a single stroke. This is the fastest way to standard carcass parts with 32 mm grid. Row drilling machines are exclusively suitable for large series with low variant diversity; batch-size-1 is not their field. For furniture manufacturers with stable production programs, they are unbeatably economical. Asamer supplies them for CZ, SK and HU including line integration.`,
      cz: `Gannomat řadové vrtací stroje (ProLine 50, Vantage 76-152) jsou vysoce výkonné vrtací stroje s 50 až 152 vřeteny pro velkosériovou výrobu. Jediný stroj vrtá celé vrtací vzory — například celou bočnici skříně — v jediném zdvihu. Je to nejrychlejší cesta ke standardním korpusovým dílům s 32mm rastrem. Řadové vrtací stroje jsou vhodné výlučně pro velkosériovou výrobu s nízkou variabilitou; dávka 1 není jejich oborem. Pro výrobce nábytku se stabilními výrobními programy jsou nepřekonatelně ekonomické. Asamer je dodává pro CZ, SK a HU včetně integrace do linky.`,
      hu: `A Gannomat soros fúrógépek (ProLine 50, Vantage 76-152) nagy teljesítményű fúrógépek 50-től 152 orsóig a nagysorozatú gyártáshoz. Egyetlen gép teljes fúrásmintákat — például egy ruhásszekrény teljes oldalfalát — egy löketben fúr. Ez a leggyorsabb út a 32 mm-es raszteres szabványos korpuszelemekhez. A soros fúrógépek kizárólag alacsony variánsválasztékú nagysorozatú gyártáshoz alkalmasak; az 1-es tételszám nem az ő területük. Stabil gyártási programú bútorgyártóknak verhetetlenül gazdaságosak. Az Asamer CZ, SK és HU területére szállítja őket, gyártósor-integrációval együtt.`,
    },
    sections: [
      {
        heading: { de: 'Wann lohnt sich eine Reihenbohrmaschine?', en: 'When does a row drilling machine pay off?', cz: 'Kdy se vyplatí řadový vrtací stroj?', hu: 'Mikor éri meg a soros fúrógép?' },
        body: {
          de: 'Ab ca. 500 Werkstücken pro Tag bei stabilem Produktionsprogramm. Umrüstung auf andere Bohrmuster ist mechanisch aufwendig — daher nur bei wenigen Standardtypen sinnvoll.',
          en: 'From approx. 500 workpieces per day with stable production program. Changeover to different drilling patterns is mechanically complex — therefore only sensible with few standard types.',
          cz: 'Od cca 500 obrobků denně při stabilním výrobním programu. Přestavení na jiné vrtací vzory je mechanicky náročné — proto má smysl jen u několika standardních typů.',
          hu: 'Kb. napi 500 munkadarabtól stabil gyártási program mellett. Az átállás más fúrásmintákra mechanikusan bonyolult — ezért csak néhány szabvány típusnál értelmes.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Umrüstzeit?', en: 'Changeover time?', cz: 'Doba přestavení?', hu: 'Átállási idő?' },
        answer: {
          de: '1–4 Stunden je nach Komplexität.',
          en: '1–4 hours depending on complexity.',
          cz: '1–4 hodiny podle složitosti.',
          hu: '1–4 óra a komplexitástól függően.',
        },
      },
      {
        question: { de: 'Welche Spindelzahl für meinen Betrieb?', en: 'Which spindle count for my operation?', cz: 'Jaký počet vřeten pro můj provoz?', hu: 'Milyen orsószám az üzememhez?' },
        answer: {
          de: '76 für mittlere Werkstücke, 152 für maximale Flexibilität.',
          en: '76 for medium workpieces, 152 for maximum flexibility.',
          cz: '76 pro střední obrobky, 152 pro maximální flexibilitu.',
          hu: '76 közepes munkadarabokhoz, 152 maximális rugalmassághoz.',
        },
      },
      {
        question: { de: 'Automatische Werkstückzuführung?', en: 'Automatic workpiece feeding?', cz: 'Automatické podávání obrobku?', hu: 'Automatikus munkadarab-adagolás?' },
        answer: {
          de: 'Optional, empfohlen für vollautomatischen Betrieb.',
          en: 'Optional, recommended for fully automatic operation.',
          cz: 'Volitelně, doporučeno pro plně automatický provoz.',
          hu: 'Opcionális, teljesen automatikus üzemhez ajánlott.',
        },
      },
    ],
  },

  gluing: {
    introExpanded: {
      de: `Gannomat Leimsysteme (Leimfix, Injecta) automatisieren den präzisen Leimauftrag auf Dübel oder direkt in Bohrungen — ein kritischer Prozessschritt für zuverlässige Möbelverbindungen. Manuelle Leimdosierung schwankt zwischen Bedienern und führt zu Qualitätsunterschieden; automatische Systeme wie Leimfix und Injecta garantieren konstante Leimmengen. Der Leimfix ist das Standardmodell für Dübelbeleimung, Injecta für spezielle Injektionsverfahren. Für Möbelhersteller mit größerem Tagesoutput ist die Automatisierung des Leimauftrags wirtschaftlich sinnvoll. Asamer liefert Gannomat-Leimsysteme für CZ, SK und HU inklusive Integration in bestehende Bohrmaschinen.`,
      en: `Gannomat glue systems (Leimfix, Injecta) automate precise glue application to dowels or directly into drillings — a critical process step for reliable furniture connections. Manual glue metering fluctuates between operators and leads to quality differences; automatic systems like Leimfix and Injecta guarantee constant glue quantities. The Leimfix is the standard model for dowel gluing, Injecta for special injection processes. For furniture manufacturers with larger daily output, automating glue application makes economic sense. Asamer supplies Gannomat glue systems for CZ, SK and HU including integration into existing drilling machines.`,
      cz: `Gannomat lepicí systémy (Leimfix, Injecta) automatizují přesné nanášení lepidla na kolíky nebo přímo do vrtání — kritický procesní krok pro spolehlivé spoje nábytku. Ruční dávkování lepidla kolísá mezi obsluhami a vede k rozdílům v kvalitě; automatické systémy jako Leimfix a Injecta zaručují konstantní množství lepidla. Leimfix je standardní model pro lepení kolíků, Injecta pro speciální injekční postupy. Pro výrobce nábytku s větším denním výstupem má automatizace nanášení lepidla ekonomický smysl. Asamer dodává lepicí systémy Gannomat pro CZ, SK a HU včetně integrace do stávajících vrtacích strojů.`,
      hu: `A Gannomat ragasztórendszerek (Leimfix, Injecta) automatizálják a pontos ragasztófelvitelt a csapokra vagy közvetlenül a furatokba — kritikus folyamatlépés a megbízható bútorkötésekhez. A kézi ragasztóadagolás ingadozik a kezelők között, és minőségi különbségeket eredményez; az olyan automatikus rendszerek, mint a Leimfix és az Injecta, állandó ragasztómennyiséget garantálnak. A Leimfix a csapragasztás szabványos modellje, az Injecta speciális befecskendezési eljárásokhoz. Nagyobb napi kibocsátású bútorgyártóknak a ragasztófelvitel automatizálása gazdaságilag értelmes. Az Asamer a Gannomat ragasztórendszereket CZ, SK és HU területére szállítja, a meglévő fúrógépekbe való integrációval együtt.`,
    },
    sections: [
      {
        heading: { de: 'Leimfix vs. Injecta', en: 'Leimfix vs. Injecta', cz: 'Leimfix vs. Injecta', hu: 'Leimfix vs. Injecta' },
        body: {
          de: 'Leimfix: Dosierung auf Dübel vor dem Einsetzen — der Standardfall. Injecta: Injektion direkt in die Bohrung nach Dübelsetzen — für spezielle Anwendungen mit höheren Festigkeitsanforderungen.',
          en: 'Leimfix: metering onto dowel before insertion — the standard case. Injecta: injection directly into drilling after dowel setting — for special applications with higher strength requirements.',
          cz: 'Leimfix: dávkování na kolík před vsazením — standardní případ. Injecta: vstřikování přímo do otvoru po vsazení kolíku — pro speciální aplikace s vyššími nároky na pevnost.',
          hu: 'Leimfix: adagolás a csapra beültetés előtt — a szabványos eset. Injecta: befecskendezés közvetlenül a furatba a csapozás után — speciális, nagyobb szilárdsági követelményű alkalmazásokhoz.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Welche Klebstoffe sind kompatibel?', en: 'Which adhesives are compatible?', cz: 'Jaká lepidla jsou kompatibilní?', hu: 'Mely ragasztók kompatibilisek?' },
        answer: {
          de: 'D3-Weißleim und PUR-Klebstoffe sind Standard.',
          en: 'D3 white glue and PUR adhesives are standard.',
          cz: 'D3 bílé lepidlo a PUR lepidla jsou standard.',
          hu: 'A D3 fehér ragasztó és a PUR ragasztók szabványosak.',
        },
      },
      {
        question: { de: 'Nachrüstung an bestehenden Maschinen?', en: 'Retrofit to existing machines?', cz: 'Dovybavení stávajících strojů?', hu: 'Utólagos felszerelés meglévő gépekre?' },
        answer: {
          de: 'Ja — an Gannomat-Maschinen unmittelbar, an Fremdmaschinen projektabhängig.',
          en: 'Yes — on Gannomat machines immediately, on third-party machines project-dependent.',
          cz: 'Ano — na stroje Gannomat bezprostředně, na cizí stroje podle projektu.',
          hu: 'Igen — Gannomat gépekre közvetlenül, idegen gépekre projektfüggően.',
        },
      },
      {
        question: { de: 'Reinigungsaufwand?', en: 'Cleaning effort?', cz: 'Nároky na čištění?', hu: 'Tisztítási igény?' },
        answer: {
          de: 'Täglich 2–5 Minuten. Wöchentlich gründliche Durchspülung.',
          en: 'Daily 2–5 minutes. Weekly thorough flushing.',
          cz: 'Denně 2–5 minut. Týdně důkladné propláchnutí.',
          hu: 'Naponta 2–5 perc. Hetente alapos átöblítés.',
        },
      },
    ],
  },

  frame: {
    introExpanded: {
      de: `Gannomat Rahmenbohrmaschinen (Junior 323, Master 325, Mod 160) sind auf die Bearbeitung von Möbel-, Tür- und Fensterrahmen spezialisiert. Im Gegensatz zu Korpusseiten-Bohrmaschinen arbeiten sie mit verschiedenen Bohrköpfen an allen Rahmenseiten — für Rahmenverbinder, Dübel an Eckverbindungen oder Beschlagsetzungen. Junior 323 ist das Einstiegsmodell für kleinere Tischlereien, Master 325 der bewährte Standard für mittlere Betriebe, Mod 160 die flexibelste Variante für Sonderrahmen. Asamer liefert die Rahmenbohrmaschinen für CZ, SK und HU inklusive Einrichtung auf Ihre Rahmentypen.`,
      en: `Gannomat frame drilling machines (Junior 323, Master 325, Mod 160) are specialised for processing furniture, door and window frames. Unlike carcass-side drilling machines, they work with various drilling heads on all frame sides — for frame connectors, dowels at corner joints or fitting insertions. Junior 323 is the entry model for smaller joinery shops, Master 325 the proven standard for mid-sized operations, Mod 160 the most flexible variant for special frames. Asamer supplies the frame drilling machines for CZ, SK and HU including setup to your frame types.`,
      cz: `Gannomat rámové vrtací stroje (Junior 323, Master 325, Mod 160) jsou specializované na zpracování nábytkových, dveřních a okenních rámů. Na rozdíl od bočnicových vrtacích strojů pracují s různými vrtacími hlavami na všech stranách rámu — pro rámové spojovací prvky, kolíky u rohových spojů nebo vsazování kování. Junior 323 je vstupní model pro menší truhlárny, Master 325 osvědčený standard pro středně velké provozy, Mod 160 nejflexibilnější varianta pro speciální rámy. Asamer dodává rámové vrtací stroje pro CZ, SK a HU včetně seřízení na vaše typy rámů.`,
      hu: `A Gannomat keretfúró gépek (Junior 323, Master 325, Mod 160) bútor-, ajtó- és ablakkeretek feldolgozására specializálódtak. A korpuszoldal-fúrógépekkel ellentétben különböző fúrófejekkel dolgoznak a keret minden oldalán — keret-összekötőkhöz, csapokhoz sarokkötéseknél vagy szerelvénybeültetésekhez. A Junior 323 a belépő modell kisebb asztalosüzemek számára, a Master 325 a bevált szabvány középüzemekhez, a Mod 160 a legrugalmasabb változat egyedi keretekhez. Az Asamer a keretfúró gépeket CZ, SK és HU területére szállítja, az ön kerettípusaira való beállítással együtt.`,
    },
    sections: [
      {
        heading: { de: 'Junior 323 vs. Master 325 vs. Mod 160', en: 'Junior 323 vs. Master 325 vs. Mod 160', cz: 'Junior 323 vs. Master 325 vs. Mod 160', hu: 'Junior 323 vs. Master 325 vs. Mod 160' },
        body: {
          de: 'Junior 323: Einstieg, einfache Rahmen. Master 325: Standard für Möbel-, Tür-, Fensterrahmen. Mod 160: Sonderrahmen mit komplexen Bohrbildern.',
          en: 'Junior 323: entry, simple frames. Master 325: standard for furniture, door, window frames. Mod 160: special frames with complex drilling patterns.',
          cz: 'Junior 323: vstup, jednoduché rámy. Master 325: standard pro nábytkové, dveřní, okenní rámy. Mod 160: speciální rámy se složitými vrtacími vzory.',
          hu: 'Junior 323: belépő, egyszerű keretek. Master 325: szabvány bútor-, ajtó- és ablakkeretekhez. Mod 160: egyedi keretek összetett fúrásmintákkal.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Welche Rahmenmaterialien?', en: 'Which frame materials?', cz: 'Jaké materiály rámů?', hu: 'Milyen keretanyagok?' },
        answer: {
          de: 'Massivholz, MDF, Spanplatte mit Beschichtung, teilweise Aluminium (bei Sonderwerkzeugen).',
          en: 'Solid wood, MDF, coated chipboard, partially aluminium (with special tools).',
          cz: 'Masivní dřevo, MDF, povrstvená dřevotříska, částečně hliník (se speciálními nástroji).',
          hu: 'Tömör fa, MDF, bevonatos forgácslap, részben alumínium (speciális szerszámokkal).',
        },
      },
      {
        question: { de: 'Werkstückgrößen?', en: 'Workpiece sizes?', cz: 'Velikosti obrobků?', hu: 'Munkadarabméretek?' },
        answer: {
          de: 'Typisch 300 × 300 bis 2.500 × 1.200 mm.',
          en: 'Typically 300 × 300 to 2,500 × 1,200 mm.',
          cz: 'Obvykle 300 × 300 až 2.500 × 1.200 mm.',
          hu: 'Jellemzően 300 × 300-tól 2500 × 1200 mm-ig.',
        },
      },
      {
        question: { de: 'CNC-Steuerung verfügbar?', en: 'CNC control available?', cz: 'Je k dispozici CNC řízení?', hu: 'Elérhető CNC-vezérlés?' },
        answer: {
          de: 'Bei Mod 160 und Sondermodellen.',
          en: 'On Mod 160 and special models.',
          cz: 'U Mod 160 a speciálních modelů.',
          hu: 'A Mod 160-nál és a speciális modelleknél.',
        },
      },
    ],
  },

  cornerhinge: {
    introExpanded: {
      de: `Gannomat Scharnierbohrmaschinen (Expert, Twin) setzen präzise Topfbohrungen für Möbelscharniere aller gängigen Hersteller (Blum, Hettich, Grass, Salice). Sie bohren Topf, Bolzenlöcher und Markierungen in einem einzigen Bohrvorgang — schneller und genauer als manuelles Anzeichnen und Einzelbohren. Expert ist das Standardmodell für Tischlereien und mittlere Betriebe, Twin bietet zwei Arbeitsstationen für höheren Durchsatz. Für Küchenhersteller, Türenfertigungen und Möbelbetriebe mit regelmäßiger Front-Produktion sind diese Maschinen unverzichtbar. Asamer liefert die Scharnierbohrmaschinen für CZ, SK und HU inklusive Beratung zu Scharniertypen.`,
      en: `Gannomat hinge drilling machines (Expert, Twin) set precise cup holes for furniture hinges of all common manufacturers (Blum, Hettich, Grass, Salice). They drill cup, bolt holes and markings in a single drilling operation — faster and more accurate than manual marking and individual drilling. Expert is the standard model for joinery shops and mid-sized operations, Twin offers two workstations for higher throughput. For kitchen manufacturers, door productions and furniture operations with regular front production, these machines are indispensable. Asamer supplies the hinge drilling machines for CZ, SK and HU including consultation on hinge types.`,
      cz: `Gannomat vrtací stroje pro závěsy (Expert, Twin) vytvářejí přesné otvory pro nábytkové závěsy všech běžných výrobců (Blum, Hettich, Grass, Salice). Vrtají misku, otvory pro šrouby a značky v jediné vrtací operaci — rychleji a přesněji než ruční označování a jednotlivé vrtání. Expert je standardní model pro truhlárny a střední provozy, Twin nabízí dvě pracovní stanice pro vyšší průtok. Pro výrobce kuchyní, výrobu dveří a nábytkářské provozy s pravidelnou výrobou front jsou tyto stroje nepostradatelné. Asamer dodává vrtací stroje pro závěsy pro CZ, SK a HU včetně poradenství k typům závěsů.`,
      hu: `A Gannomat pántfúró gépek (Expert, Twin) precíz tányérfuratokat készítenek minden szokásos gyártó (Blum, Hettich, Grass, Salice) bútorpántjaihoz. Tányért, csavarlyukakat és jelöléseket fúrnak egyetlen fúrási műveletben — gyorsabban és pontosabban, mint a kézi jelölés és egyenkénti fúrás. Az Expert a szabvány modell asztalosüzemekhez és középüzemekhez, a Twin két munkaállomást kínál a nagyobb áteresztőképesség érdekében. Konyhagyártók, ajtógyártások és rendszeres frontgyártású bútorüzemek számára ezek a gépek nélkülözhetetlenek. Az Asamer a pántfúró gépeket CZ, SK és HU területére szállítja, a pánttípusokra vonatkozó tanácsadással együtt.`,
    },
    sections: [
      {
        heading: { de: 'Expert vs. Twin', en: 'Expert vs. Twin', cz: 'Expert vs. Twin', hu: 'Expert vs. Twin' },
        body: {
          de: 'Expert: eine Arbeitsstation, ideal für Tischlerei und mittleren Durchsatz. Twin: zwei Arbeitsstationen parallel, doppelter Durchsatz — für industrielle Front-Fertigung.',
          en: 'Expert: one workstation, ideal for joinery and medium throughput. Twin: two workstations in parallel, double throughput — for industrial front production.',
          cz: 'Expert: jedna pracovní stanice, ideální pro truhlárnu a střední průtok. Twin: dvě pracovní stanice paralelně, dvojnásobný průtok — pro průmyslovou výrobu front.',
          hu: 'Expert: egy munkaállomás, ideális asztalosüzemhez és közepes áteresztőképességhez. Twin: két munkaállomás párhuzamosan, kétszeres áteresztőképesség — ipari frontgyártáshoz.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Welche Scharniertypen?', en: 'Which hinge types?', cz: 'Jaké typy závěsů?', hu: 'Milyen pánttípusok?' },
        answer: {
          de: 'Blum, Hettich, Grass, Salice, GTV, Häfele — alle gängigen.',
          en: 'Blum, Hettich, Grass, Salice, GTV, Häfele — all common.',
          cz: 'Blum, Hettich, Grass, Salice, GTV, Häfele — všechny běžné.',
          hu: 'Blum, Hettich, Grass, Salice, GTV, Häfele — minden szokásos.',
        },
      },
      {
        question: { de: 'Topfdurchmesser?', en: 'Cup diameters?', cz: 'Průměry misek?', hu: 'Tányérátmérők?' },
        answer: {
          de: '26 mm und 35 mm Standard, andere auf Anfrage.',
          en: '26 mm and 35 mm standard, others on request.',
          cz: '26 mm a 35 mm standard, jiné na vyžádání.',
          hu: '26 mm és 35 mm szabvány, egyéb kérésre.',
        },
      },
      {
        question: { de: 'Automatische Positionierung?', en: 'Automatic positioning?', cz: 'Automatické polohování?', hu: 'Automatikus pozicionálás?' },
        answer: {
          de: 'Mechanische Anschläge, CNC bei Sondermodellen.',
          en: 'Mechanical stops, CNC on special models.',
          cz: 'Mechanické dorazy, CNC u speciálních modelů.',
          hu: 'Mechanikus ütközők, CNC a speciális modelleknél.',
        },
      },
    ],
  },
};
