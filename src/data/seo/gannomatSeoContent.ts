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
