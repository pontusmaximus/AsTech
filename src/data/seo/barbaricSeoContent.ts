/**
 * Keyword-rich SEO content for Barbaric automation, handling and storage products.
 * Used on product detail pages and category overview pages at asamer.cz.
 *
 * Covers: panel storage, vacuum handling, return systems, nesting pickers, cranes
 * Target: B2B wood industry customers in CZ, SK and HU searching for automation solutions.
 */

import type { ProductSeoContent, CategorySeoContent } from './types';
import type { BarbaricCategory } from '../barbaricProducts';

/* ====================================================================== */
/*  PRODUCT SEO CONTENT (flagships per category)                          */
/* ====================================================================== */

export const BARBARIC_PRODUCT_SEO: Record<string, ProductSeoContent> = {
  /* ------------------------------------------------------------------ */
  /*  STORAGE — csf-professional                                         */
  /* ------------------------------------------------------------------ */
  'csf-professional': {
    longDescription: {
      de: `Das Barbaric CSF Professional ist ein vollautomatisches Flächenlager für Tischlereien, Möbelhersteller und mittelgroße Holzverarbeiter. Es übernimmt das komplette Plattenmaterial-Handling: vom Wareneingang über die sortenreine oder chaotische Einlagerung bis zur bedarfsgerechten Beschickung von Plattenaufteilsäge oder CNC. Durch die integrierte 90°-Dreheinheit (optional 180°) entfallen aufwändige Umschlagvorgänge; der seitliche Abstand von nur 100 mm macht die Anlage besonders platzsparend. Die typische Amortisationszeit liegt bei ein bis zwei Jahren — durch Wegfall manueller Transportwege, bessere Materialkontrolle und die Möglichkeit, im Pickbetrieb auch ohne Säge zu arbeiten. Asamer liefert das CSF Professional als autorisierter Barbaric-Händler für Tschechien, die Slowakei und Ungarn inklusive Layout-Planung, ERP-Anbindung, Installation und lokalem Service.`,
      en: `The Barbaric CSF Professional is a fully automatic panel storage system for joinery shops, furniture manufacturers and mid-sized wood processors. It takes over the entire panel handling process: from goods receipt through sorted or chaotic storage to on-demand feeding of panel saws or CNC machines. The integrated 90° rotation unit (optional 180°) eliminates complex repositioning, while the lateral clearance of only 100 mm makes the system exceptionally space-saving. Typical payback is one to two years thanks to eliminated manual transport, improved material tracking and the option to run in picking mode without a saw. Asamer delivers the CSF Professional as authorized Barbaric dealer for Czech Republic, Slovakia and Hungary — including layout planning, ERP integration, installation and local service.`,
      cz: `Barbaric CSF Professional je plně automatický sklad desek pro truhlářství, výrobce nábytku a středně velké zpracovatele dřeva. Zajišťuje celkové řízení deskového materiálu: od příjmu zboží přes třídění nebo chaotické skladování až po dodávku na formátovací pilu nebo CNC dle potřeby. Integrovaná otočná jednotka 90° (volitelně 180°) eliminuje náročné překládání, boční vzdálenost pouhých 100 mm činí zařízení mimořádně úsporným na prostor. Typická návratnost je jeden až dva roky díky odstranění manuální přepravy, lepšímu přehledu o materiálu a možnosti pracovat v pickovacím režimu i bez pily. Asamer dodává CSF Professional jako autorizovaný prodejce Barbaric pro Českou republiku, Slovensko a Maďarsko — včetně projektování rozvržení, propojení s ERP, instalace a místního servisu.`,
      hu: `A Barbaric CSF Professional teljesen automatikus lapraktár asztalosműhelyek, bútorgyártók és közepes méretű fafeldolgozók számára. Átveszi a teljes lapanyag-kezelést: az áruátvételtől a fajtatiszta vagy kaotikus tárolásig, egészen a lapszabászgép vagy CNC igény szerinti kiszolgálásáig. Az integrált 90°-os forgatóegység (opcionálisan 180°) kiküszöböli a bonyolult átrakási folyamatokat, az oldalsó mindössze 100 mm-es távolság pedig rendkívül helytakarékossá teszi a rendszert. A tipikus megtérülés egy-két év a manuális szállítás elhagyása, a jobb anyagkövetés és a pick üzemmódban fűrész nélküli üzemeltetés lehetősége révén. Az Asamer hivatalos Barbaric viszonteladóként szállítja a CSF Professional rendszert Csehország, Szlovákia és Magyarország számára — elrendezéstervezéssel, ERP integrációval, telepítéssel és helyi szervizzel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Tischlereien mit begrenzter Hallenfläche', en: 'For joinery shops with limited floor space', cz: 'Pro truhlárny s omezenou plochou haly', hu: 'Korlátozott csarnokterületű asztalosműhelyek számára' },
        body: {
          de: 'Der seitliche Freiraum von nur 100 mm erlaubt die Platzierung direkt an Wänden und in schmale Hallenabschnitte. Damit ist das CSF Professional auch für Bestandsgebäude geeignet, wo eine Erweiterung der Produktionsfläche nicht möglich ist. Zudem lässt sich das Lager Schritt für Schritt erweitern, wenn das Materialvolumen wächst.',
          en: 'The lateral clearance of just 100 mm allows placement directly against walls and in narrow hall sections. This makes the CSF Professional suitable for existing buildings where expansion is not possible. The storage area can be expanded incrementally as material volumes grow.',
          cz: 'Boční vzdálenost pouhých 100 mm umožňuje umístění přímo u stěn a v úzkých halových úsecích. Tím je CSF Professional vhodný i pro stávající budovy, kde rozšíření výrobní plochy není možné. Sklad lze postupně rozšiřovat, jak objem materiálu roste.',
          hu: 'A mindössze 100 mm-es oldalsó szabad tér lehetővé teszi a közvetlenül a falak melletti, illetve szűk csarnokszakaszokba történő elhelyezést. Ezáltal a CSF Professional olyan meglévő épületekben is alkalmas, ahol a termelőterület bővítése nem lehetséges. A raktár lépésről lépésre bővíthető, ahogy az anyagmennyiség növekszik.',
        },
      },
      {
        heading: { de: 'Für Pickbetrieb ohne Säge', en: 'For picking operation without saw', cz: 'Pro pickovací provoz bez pily', hu: 'Fűrész nélküli pick üzemmódhoz' },
        body: {
          de: 'Das CSF Professional arbeitet auch ohne angeschlossene Plattenaufteilsäge als reiner Kommissionierlager. Platten werden aus dem Lager entnommen und für den Versand bereitgestellt — ideal für Plattenhandel oder Zulieferbetriebe, die Halbfabrikate just-in-time ausliefern müssen.',
          en: 'The CSF Professional operates as a pure picking warehouse even without a connected panel saw. Panels are retrieved from storage and prepared for dispatch — ideal for panel traders or suppliers who must deliver semi-finished products just-in-time.',
          cz: 'CSF Professional funguje jako čistě pickovací sklad i bez napojené formátovací pily. Desky se vyjímají ze skladu a připravují k expedici — ideální pro obchodníky s deskami nebo dodavatele, kteří musí dodávat polotovary just-in-time.',
          hu: 'A CSF Professional csatlakoztatott lapszabászgép nélkül is tiszta komissiózó raktárként működik. A lapokat kiveszik a raktárból és előkészítik a kiszállításra — ideális lapkereskedők vagy beszállítók számára, akiknek félkész termékeket kell just-in-time szállítaniuk.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Wählen Sie das CSF Professional, wenn Sie ein kompaktes, wirtschaftliches Flächenlager für Handwerk oder Mittelbetrieb suchen. Für hochindustriellen Dauerbetrieb mit Taktzeiten unter einer Minute ist das CSF Industrial die bessere Wahl; für sehr hohe Bestände mehrere Ebenen benötigen Sie das CSF Multilevel.',
      en: 'Choose the CSF Professional if you need a compact, economical panel storage for trade or mid-sized operations. For high-industrial continuous operation with cycle times below one minute, the CSF Industrial is the better choice; for very high inventories across multiple levels, the CSF Multilevel is the right system.',
      cz: 'Zvolte CSF Professional, pokud hledáte kompaktní a ekonomický sklad desek pro řemesla nebo středně velké provozy. Pro průmyslový nepřetržitý provoz s dobou cyklu pod jednu minutu je vhodnější CSF Industrial; pro velmi vysoké zásoby ve více úrovních potřebujete CSF Multilevel.',
      hu: 'Válassza a CSF Professional rendszert, ha kompakt, gazdaságos lapraktárt keres kézműves vagy középvállalati üzemeihez. Egy percnél rövidebb ciklusidővel folyamatos, magas ipari üzemhez a CSF Industrial a jobb választás; nagyon nagy, több szintes készletekhez a CSF Multilevel szükséges.',
    },
    faq: [
      {
        question: { de: 'Welche Flächen und Kapazitäten sind möglich?', en: 'What storage sizes and capacities are possible?', cz: 'Jaké plochy a kapacity jsou možné?', hu: 'Milyen területek és kapacitások lehetségesek?' },
        answer: {
          de: 'Das CSF Professional ist modular skalierbar. Typische Hallengrößen liegen zwischen 8 × 15 m und 15 × 40 m, die Anzahl der Lagerplätze richtet sich nach Plattenformat und Stapelhöhe. Eine individuelle Planung erstellen wir nach Besichtigung Ihrer Halle.',
          en: 'The CSF Professional is modularly scalable. Typical hall sizes range from 8 × 15 m to 15 × 40 m; the number of storage slots depends on panel format and stack height. We prepare an individual layout after inspecting your facility.',
          cz: 'CSF Professional je modulárně škálovatelný. Typické rozměry haly se pohybují od 8 × 15 m do 15 × 40 m, počet skladových míst závisí na formátu desek a výšce stohu. Individuální projekt zpracujeme po prohlídce vaší haly.',
          hu: 'A CSF Professional modulárisan skálázható. A tipikus csarnokméretek 8 × 15 m és 15 × 40 m között mozognak; a tárolóhelyek száma a lap formátumától és a köteg magasságától függ. Egyedi tervet a csarnok megtekintése után készítünk.',
        },
      },
      {
        question: { de: 'Wie wird das Flächenlager an unsere Säge angebunden?', en: 'How is the panel storage connected to our saw?', cz: 'Jak se sklad napojí na naši pilu?', hu: 'Hogyan csatlakozik a lapraktár a fűrészünkhöz?' },
        answer: {
          de: 'Die Anbindung erfolgt über eine Übergabestation mit Einzugsrollen oder Quertisch. Bei Mayer-, Schelling- oder Holzma-Sägen nutzen wir standardisierte Protokolle; bei älteren Maschinen realisieren wir die Kopplung über SPS-Signale. Die Programmierung übernimmt unser Softwareteam.',
          en: 'Connection is made via a transfer station with infeed rollers or a cross table. For Mayer, Schelling or Holzma saws we use standardised protocols; for older machines we implement the coupling via PLC signals. Our software team handles the programming.',
          cz: 'Napojení se realizuje předávací stanicí s nájezdovými válečky nebo příčným stolem. U pil Mayer, Schelling nebo Holzma používáme standardizované protokoly; u starších strojů řešíme propojení přes signály PLC. Programování zajišťuje náš softwarový tým.',
          hu: 'A csatlakoztatás behúzógörgőkkel vagy keresztasztallal ellátott átadóállomáson keresztül történik. Mayer, Schelling vagy Holzma fűrészek esetében szabványosított protokollokat használunk; régebbi gépeknél a csatolást PLC jeleken keresztül valósítjuk meg. A programozást szoftvercsapatunk végzi.',
        },
      },
      {
        question: { de: 'Wie schnell rechnet sich die Investition?', en: 'How quickly does the investment pay off?', cz: 'Za jak dlouho se investice vrátí?', hu: 'Milyen gyorsan térül meg a beruházás?' },
        answer: {
          de: 'Die typische Amortisationszeit liegt bei ein bis zwei Jahren. Haupteinsparungen: Wegfall manueller Transportwege, weniger Mitarbeiterbindung im Lager, Reduktion von Plattenbruch und bessere Materialübersicht durch digitalen Bestand. Eine ROI-Berechnung erstellen wir auf Basis Ihrer aktuellen Produktionszahlen.',
          en: 'Typical payback is one to two years. Main savings: eliminated manual transport, reduced warehouse staff, less panel damage and better inventory overview through digital stock management. We calculate an ROI based on your current production figures.',
          cz: 'Typická návratnost je jeden až dva roky. Hlavní úspory: odstranění manuální přepravy, méně pracovníků ve skladu, méně poškození desek a lepší přehled o materiálu díky digitální evidenci. Výpočet ROI připravíme na základě vašich současných výrobních čísel.',
          hu: 'A tipikus megtérülési idő egy-két év. A fő megtakarítások: a manuális szállítási útvonalak elmaradása, kevesebb raktári munkaerő, a laptörés csökkenése és jobb anyag-áttekintés a digitális készletnyilvántartás révén. A ROI-számítást jelenlegi termelési adatai alapján készítjük el.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  STORAGE — csf-industrial                                           */
  /* ------------------------------------------------------------------ */
  'csf-industrial': {
    longDescription: {
      de: `Das Barbaric CSF Industrial ist ein hochindustrielles Flächenlager für Plattenmaterial, ausgelegt auf Dauerbetrieb in großen Möbelwerken, Zulieferbetrieben und Plattenveredlern. Fahrgeschwindigkeiten bis 150 m/min und Zykluszeiten unter einer Minute ermöglichen einen kontinuierlichen Materialfluss zu mehreren Plattenaufteilsägen oder CNC-Zentren gleichzeitig. Die Kranbrücke kann Spannweiten bis zu 25 Metern abdecken, die Lagerfläche reicht bis zu 25 × 70 Meter — bei mehreren tausend Lagerplätzen je nach Platten-Stapelhöhe. Ketten- und Bandförderer lassen sich direkt integrieren, ebenso chaotische Einlagerung, Mehrplattenhandling und sortenreine Stapelbildung. Das CSF Industrial wird weltweit von namhaften Industrieunternehmen eingesetzt. Asamer realisiert Industrieprojekte für Kunden in CZ, SK und HU inklusive Generalplanung, Anbindung an ERP/MES und langfristigem Wartungsvertrag.`,
      en: `The Barbaric CSF Industrial is a high-industrial panel storage system designed for continuous operation in large furniture plants, supplier operations and panel finishing facilities. Movement speeds up to 150 m/min and cycle times below one minute enable continuous material flow to several panel saws or CNC centres simultaneously. The crane bridge spans up to 25 metres, storage area up to 25 × 70 metres — with several thousand storage slots depending on stack height. Chain and belt conveyors can be integrated directly, as can chaotic storage, multi-panel handling and sorted stacking. The CSF Industrial is deployed worldwide by renowned industrial enterprises. Asamer realises industrial projects for customers in CZ, SK and HU including general planning, ERP/MES connection and long-term maintenance contracts.`,
      cz: `Barbaric CSF Industrial je vysoce průmyslový sklad desek pro nepřetržitý provoz ve velkých nábytkářských závodech, dodavatelských provozech a zpracovatelích desek. Rychlosti pojezdu do 150 m/min a doby cyklu pod jednu minutu umožňují souvislý tok materiálu k několika formátovacím pilám nebo CNC centrům současně. Jeřábový most dosahuje rozpětí až 25 metrů, skladovací plocha až 25 × 70 metrů — s několika tisíci skladovými místy podle výšky stohu. Řetězové a pásové dopravníky lze přímo integrovat, stejně jako chaotické skladování, vícenásobnou manipulaci s deskami a třídění podle druhu. CSF Industrial nasazují renomované průmyslové podniky po celém světě. Asamer realizuje průmyslové projekty pro zákazníky v CZ, SK a HU včetně generálního projektování, napojení na ERP/MES a dlouhodobých servisních smluv.`,
      hu: `A Barbaric CSF Industrial egy magas színvonalú ipari lapraktár-rendszer, amelyet folyamatos üzemre terveztek nagy bútorgyárakban, beszállítói üzemekben és laplemez-feldolgozókban. A akár 150 m/perces mozgási sebesség és az egy perc alatti ciklusidők folyamatos anyagáramlást tesznek lehetővé több lapszabászgép vagy CNC központ felé egyidejűleg. A daru híd fesztávja akár 25 méter, a raktárterület akár 25 × 70 méter — a kötegmagasságtól függően több ezer tárolóhellyel. Közvetlenül integrálhatók a lánc- és szalagszállítók, valamint a kaotikus tárolás, a többlapos kezelés és a fajtatiszta kötegelés is. A CSF Industrial rendszert neves ipari vállalatok alkalmazzák világszerte. Az Asamer ipari projekteket valósít meg csehországi, szlovákiai és magyarországi ügyfelek számára — generáltervezéssel, ERP/MES csatlakozással és hosszú távú karbantartási szerződésekkel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für industrielle Möbelproduktion', en: 'For industrial furniture production', cz: 'Pro průmyslovou výrobu nábytku', hu: 'Ipari bútorgyártáshoz' },
        body: {
          de: 'Das CSF Industrial versorgt Mehrschicht-Produktionslinien mit Plattenmaterial. Mehrere Entnahmepunkte können parallel bedient werden; die Priorisierung erfolgt über den ERP-gesteuerten Auftragsbestand. Ideal für Kücken-, Büromöbel- oder Matratzenhersteller mit mehreren Tausend Plattenbewegungen pro Schicht.',
          en: 'The CSF Industrial feeds multi-shift production lines with panel material. Multiple retrieval points can be served in parallel; prioritisation is driven by the ERP order backlog. Ideal for kitchen, office furniture or mattress manufacturers with several thousand panel movements per shift.',
          cz: 'CSF Industrial zásobuje vícesmenné výrobní linky deskovým materiálem. Několik výdejních míst lze obsluhovat paralelně; priorizace probíhá podle ERP řízeného pořadí zakázek. Ideální pro výrobce kuchyní, kancelářského nábytku nebo matrací s několika tisíci pohyby desek za směnu.',
          hu: 'A CSF Industrial többműszakos gyártósorokat lát el lapanyaggal. Több kiadási pont párhuzamosan szolgálható ki; a priorizálást az ERP által vezérelt rendelésállomány irányítja. Ideális konyha-, irodabútor- vagy matracgyártóknak, akik műszakonként több ezer laplemezt mozgatnak.',
        },
      },
      {
        heading: { de: 'Für Plattenveredler und Lohnfertiger', en: 'For panel finishers and contract manufacturers', cz: 'Pro zpracovatele desek a zakázkové výrobce', hu: 'Laplemezfeldolgozók és bérgyártók számára' },
        body: {
          de: 'Lohnfertiger mit heterogenen Platten-Artikeln profitieren besonders vom chaotischen Einlagerungsprinzip: Jede Platte bekommt einen digitalen Platz, unabhängig von Artikel oder Dekor. Dadurch lässt sich die Lagerfläche optimal ausnutzen und Materialverwechslungen werden ausgeschlossen.',
          en: 'Contract manufacturers with heterogeneous panel items benefit particularly from the chaotic storage principle: every panel receives a digital slot, independent of article or décor. This optimises use of storage space and eliminates material mix-ups.',
          cz: 'Zakázkoví výrobci s různorodými deskovými položkami mají obzvlášť prospěch z principu chaotického skladování: každá deska dostane digitální místo nezávislé na druhu nebo dekoru. Tím se optimálně využije skladová plocha a vylučují se záměny materiálu.',
          hu: 'A heterogén lapcikkekkel dolgozó bérgyártók különösen profitálnak a kaotikus tárolás elvéből: minden lap digitális helyet kap, a cikktől vagy dekortól függetlenül. Ezáltal a raktárterület optimálisan kihasználható, és az anyagcserék kizárhatók.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Das CSF Industrial ist die erste Wahl für industrielle Dauerbetriebe mit hohem Materialumschlag und ERP-Integration. Wenn Ihr Materialvolumen über mehrere tausend Plattenbewegungen pro Woche hinausgeht, führt an dieser Systemklasse kaum ein Weg vorbei. Für kleinere Betriebe ist das CSF Professional wirtschaftlicher.',
      en: 'The CSF Industrial is the first choice for industrial continuous operations with high material throughput and ERP integration. If your material volume exceeds several thousand panel movements per week, this system class is essentially unavoidable. For smaller operations, the CSF Professional is more economical.',
      cz: 'CSF Industrial je první volbou pro průmyslové nepřetržité provozy s vysokým obratem materiálu a ERP integrací. Pokud váš objem materiálu přesahuje několik tisíc pohybů desek týdně, této systémové třídě se prakticky nelze vyhnout. Pro menší provozy je ekonomičtější CSF Professional.',
      hu: 'A CSF Industrial az első választás magas anyagforgalmú, ERP-integrációval rendelkező folyamatos ipari üzemek számára. Ha anyagmennyisége heti több ezer lapmozgást meghalad, e rendszerosztály gyakorlatilag megkerülhetetlen. Kisebb üzemeknek a CSF Professional gazdaságosabb.',
    },
    faq: [
      {
        question: { de: 'Wie viele Plattenaufteilsägen kann das CSF Industrial gleichzeitig versorgen?', en: 'How many panel saws can the CSF Industrial supply simultaneously?', cz: 'Kolik formátovacích pil může CSF Industrial zásobovat současně?', hu: 'Hány lapszabászgépet tud a CSF Industrial egyszerre kiszolgálni?' },
        answer: {
          de: 'Je nach Hallenlayout und Taktzeit-Anforderung kann das CSF Industrial zwei bis vier Plattenaufteilsägen parallel versorgen. Die Anbindung erfolgt über Ketten- oder Bandförderer mit intelligenter Steuerung, die Prioritäten je nach Auftragslage vergibt.',
          en: 'Depending on hall layout and cycle time requirements, the CSF Industrial can supply two to four panel saws in parallel. Connection is made via chain or belt conveyors with intelligent control that assigns priorities based on order status.',
          cz: 'Podle rozvržení haly a požadavků na dobu taktu může CSF Industrial zásobovat dvě až čtyři formátovací pily paralelně. Napojení probíhá řetězovými nebo pásovými dopravníky s inteligentním řízením, které přiděluje priority dle stavu zakázek.',
          hu: 'A csarnok elrendezésétől és a ciklusidő-követelményektől függően a CSF Industrial kettő-négy lapszabászgépet tud párhuzamosan kiszolgálni. A csatlakoztatás lánc- vagy szalagszállítókkal történik, intelligens vezérléssel, amely a rendelések állása szerint osztja ki a prioritásokat.',
        },
      },
      {
        question: { de: 'Wird chaotische Lagerhaltung unterstützt?', en: 'Is chaotic storage supported?', cz: 'Je podporováno chaotické skladování?', hu: 'Támogatott a kaotikus tárolás?' },
        answer: {
          de: 'Ja — chaotische Einlagerung ist das Kernprinzip des CSF Industrial. Jede Platte wird beim Einlagern vermessen und erhält einen digitalen Stellplatz ohne Sortenzwang. Das erhöht die Raumausnutzung um bis zu 30 % gegenüber sortenreiner Lagerung.',
          en: 'Yes — chaotic storage is the core principle of the CSF Industrial. Every panel is measured during storage and receives a digital slot without sort constraints. This increases space utilisation by up to 30 % compared to sorted storage.',
          cz: 'Ano — chaotické skladování je základním principem CSF Industrial. Každá deska se při zaskladnění změří a získá digitální místo bez omezení druhu. Tím se zvyšuje využití prostoru až o 30 % oproti třídění dle druhu.',
          hu: 'Igen — a kaotikus tárolás a CSF Industrial alapelve. Minden lapot betároláskor lemérünk, és fajtakényszer nélküli digitális helyet kap. Ez akár 30 %-kal növeli a helykihasználást a fajtatiszta tároláshoz képest.',
        },
      },
      {
        question: { de: 'Wie wird eine ERP-Anbindung realisiert?', en: 'How is the ERP connection realised?', cz: 'Jak se realizuje napojení na ERP?', hu: 'Hogyan valósul meg az ERP integráció?' },
        answer: {
          de: 'Die Anbindung an SAP, Navision, Infor oder individuelle ERP-Systeme erfolgt über standardisierte Schnittstellen (OPC-UA, REST-API, XML-Austausch). Asamer-Softwareteam programmiert die Integration und übernimmt auch die Wartung bei Updates Ihres ERP-Systems.',
          en: 'Connection to SAP, Navision, Infor or custom ERP systems is made via standardised interfaces (OPC-UA, REST API, XML exchange). The Asamer software team programs the integration and also handles maintenance during ERP updates.',
          cz: 'Napojení na SAP, Navision, Infor nebo individuální ERP systémy se realizuje přes standardizovaná rozhraní (OPC-UA, REST API, XML výměna). Softwarový tým Asamer programuje integraci a zajišťuje i údržbu při aktualizacích vašeho ERP systému.',
          hu: 'A csatlakoztatás SAP, Navision, Infor vagy egyedi ERP rendszerekhez szabványosított felületeken keresztül történik (OPC-UA, REST API, XML csere). Az Asamer szoftvercsapata programozza az integrációt, és az ERP rendszer frissítései során is ellátja a karbantartást.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  NESTING — lcv-performance                                          */
  /* ------------------------------------------------------------------ */
  'lcv-performance': {
    longDescription: {
      de: `Der Barbaric LCV Performance ist ein Nesting-Picker, der fertig zugeschnittene Teile von einer Nesting-CNC aufnimmt, vereinzelt und auftragsweise stapelt. Das System eliminiert die manuelle Entnahme aus dem Plattenverbund, reduziert den Personalbedarf an der CNC und sorgt für einen fehlerfreien Materialfluss zur Kantenleimmaschine oder Lackierlinie. Der LCV Performance erkennt die Teile über Kamerasystem und CNC-Datenübergabe, greift sie mit Vakuumsaugern millimetergenau und legt sie auf die richtige Palette oder den Folgetransport. Für Möbelbetriebe mit Nesting-Produktion ist der LCV Performance der Schlüssel zur durchgängigen Teilefertigung ohne manuelle Zwischenschritte. Asamer realisiert Nesting-Automatisierungsprojekte für CZ, SK und HU inklusive Abstimmung mit Ihrer bestehenden CNC.`,
      en: `The Barbaric LCV Performance is a nesting picker that takes finished cut parts from a nesting CNC, separates them and stacks them by order. The system eliminates manual removal from the panel composite, reduces staffing at the CNC and ensures error-free material flow to the edgebander or paint line. The LCV Performance detects parts via camera system and CNC data exchange, picks them with vacuum suction cups to the millimetre and places them on the correct pallet or follow-up transport. For furniture operations with nesting production, the LCV Performance is the key to continuous part production without manual intermediate steps. Asamer realises nesting automation projects for CZ, SK and HU including coordination with your existing CNC.`,
      cz: `Barbaric LCV Performance je nesting picker, který odebírá hotové vyřezané díly z nesting CNC, separuje je a stohuje podle zakázek. Systém odstraňuje manuální odběr ze sestavy desek, snižuje personální nároky u CNC a zajišťuje bezchybný tok materiálu k olepovačce hran nebo lakovací lince. LCV Performance rozpoznává díly kamerovým systémem a přenosem dat z CNC, uchopuje je vakuovými přísavkami s milimetrovou přesností a ukládá je na správnou paletu nebo navazující dopravu. Pro nábytkářské provozy s nesting výrobou je LCV Performance klíčem k průběžné výrobě dílů bez manuálních mezikroků. Asamer realizuje projekty nesting automatizace pro CZ, SK a HU včetně koordinace s vaším stávajícím CNC.`,
      hu: `A Barbaric LCV Performance egy nesting-válogató, amely a nesting CNC-ről átveszi a kész kivágott darabokat, szétválogatja és rendelésenként kötegeli őket. A rendszer kiküszöböli a lapcsoportból való manuális kiemelést, csökkenti a CNC személyzeti igényét, és hibamentes anyagáramlást biztosít az élzárógép vagy a festősor felé. Az LCV Performance kamerarendszer és CNC adatátvitel révén ismeri fel a darabokat, vákuumos szívótárcsákkal milliméter pontosan fogja meg és helyezi őket a megfelelő raklapra vagy továbbító szállítóra. Nesting-termelésű bútorüzemek számára az LCV Performance a manuális köztes lépések nélküli folyamatos alkatrészgyártás kulcsa. Az Asamer nesting-automatizálási projekteket valósít meg Csehország, Szlovákia és Magyarország területén — a meglévő CNC-vel való egyeztetéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für automatisierte Nesting-Zellen', en: 'For automated nesting cells', cz: 'Pro automatizované nesting buňky', hu: 'Automatizált nesting cellákhoz' },
        body: {
          de: 'In einer Nesting-Zelle wird Plattenmaterial direkt auf der CNC in alle benötigten Teile zerlegt. Der LCV Performance nimmt die ausgeschnittenen Teile sofort ab, sodass die CNC bereits den nächsten Schnittplan starten kann. Das erhöht die Nettoausbringung erheblich gegenüber manueller Teilentnahme.',
          en: 'In a nesting cell, panel material is cut directly on the CNC into all required parts. The LCV Performance removes the cut parts immediately so the CNC can start the next cutting plan. This significantly increases net output compared to manual part removal.',
          cz: 'V nesting buňce se deskový materiál řeže přímo na CNC na všechny potřebné díly. LCV Performance odebírá vyřezané díly ihned, takže CNC může začít další řezný plán. To výrazně zvyšuje čistou produkci oproti manuálnímu odběru dílů.',
          hu: 'Nesting cellában a lapanyagot közvetlenül a CNC-n vágják az összes szükséges darabra. Az LCV Performance azonnal kiveszi a kivágott darabokat, így a CNC már elindíthatja a következő vágási tervet. Ez jelentősen növeli a nettó kibocsátást a manuális kivétellel szemben.',
        },
      },
      {
        heading: { de: 'Für Losgröße-1-Fertigung', en: 'For batch-size-1 production', cz: 'Pro výrobu dávky 1', hu: '1-es darabszámú gyártáshoz' },
        body: {
          de: 'Bei Losgröße-1-Produktion (jedes Teil ein Unikat) ist die manuelle Teilesortierung besonders fehleranfällig. Der LCV Performance ordnet jedes Teil automatisch dem richtigen Auftrag zu und stapelt auftragsweise — die Ware kommt vorsortiert an der Kantenleimmaschine oder Lackierlinie an.',
          en: 'In batch-size-1 production (every part unique), manual part sorting is particularly error-prone. The LCV Performance automatically assigns every part to the correct order and stacks by order — goods arrive pre-sorted at the edgebander or paint line.',
          cz: 'Při výrobě dávky 1 (každý díl unikát) je manuální třídění dílů obzvlášť chybové. LCV Performance automaticky přiřadí každý díl správné zakázce a stohuje podle zakázek — zboží přichází předtříděné k olepovačce hran nebo lakovací lince.',
          hu: '1-es darabszámú gyártásnál (minden darab egyedi) a manuális válogatás különösen hibaérzékeny. Az LCV Performance automatikusan minden darabot a megfelelő rendeléshez rendel, és rendelésenként kötegel — az áru előválogatva érkezik az élzárógéphez vagy a festősorra.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Der LCV Performance rechnet sich, sobald Sie eine Nesting-CNC im Dauerbetrieb fahren und dort mindestens eine Person für Teilentnahme und -sortierung binden müssen. Amortisation typischerweise 18–30 Monate durch Personaleinsparung und höheren CNC-Durchsatz.',
      en: 'The LCV Performance pays off as soon as you run a nesting CNC continuously and must tie up at least one person for part removal and sorting. Payback typically 18–30 months through personnel savings and higher CNC throughput.',
      cz: 'LCV Performance se vyplatí, jakmile provozujete nesting CNC v nepřetržitém režimu a musíte tam vázat alespoň jednu osobu pro odběr a třídění dílů. Návratnost typicky 18–30 měsíců díky úspoře personálu a vyšší průchodnosti CNC.',
      hu: 'Az LCV Performance akkor térül meg, amint egy nesting CNC-t folyamatos üzemben működtet, és ott legalább egy embert köt le a darabok kivételére és válogatására. A megtérülés tipikusan 18–30 hónap a személyi megtakarítás és a magasabb CNC-áteresztőképesség révén.',
    },
    faq: [
      {
        question: { de: 'Welche Nesting-CNCs unterstützt der LCV Performance?', en: 'Which nesting CNCs does the LCV Performance support?', cz: 'Jaké nesting CNC LCV Performance podporuje?', hu: 'Milyen nesting CNC-ket támogat az LCV Performance?' },
        answer: {
          de: 'Der LCV Performance lässt sich mit gängigen Nesting-CNCs von Homag, Biesse, SCM, IMA oder Felder koppeln. Die Datenübergabe erfolgt über XML-Export oder direkte SPS-Schnittstelle. Asamer prüft die Kompatibilität mit Ihrer bestehenden Maschine im Vorgespräch.',
          en: 'The LCV Performance can be coupled with common nesting CNCs from Homag, Biesse, SCM, IMA or Felder. Data exchange is done via XML export or direct PLC interface. Asamer verifies compatibility with your existing machine during the preliminary consultation.',
          cz: 'LCV Performance lze propojit s běžnými nesting CNC od Homag, Biesse, SCM, IMA nebo Felder. Přenos dat probíhá přes XML export nebo přímé PLC rozhraní. Asamer ověří kompatibilitu s vaším stávajícím strojem v předběžné konzultaci.',
          hu: 'Az LCV Performance csatlakoztatható a Homag, Biesse, SCM, IMA vagy Felder gyakori nesting CNC-ihez. Az adatátvitel XML exporton vagy közvetlen PLC interfészen keresztül történik. Az Asamer a meglévő gépével való kompatibilitást az előzetes egyeztetésen vizsgálja.',
        },
      },
      {
        question: { de: 'Wie klein können Teile sein?', en: 'How small can parts be?', cz: 'Jak malé mohou být díly?', hu: 'Milyen kicsik lehetnek a darabok?' },
        answer: {
          de: 'Typische Mindestgröße für Teilaufnahme liegt bei 80 × 80 mm. Kleinere Teile lassen sich über Sonderanwendungen mit angepassten Sauggreifern realisieren — Asamer spricht das im Rahmen der Projektierung mit Barbaric ab.',
          en: 'Typical minimum size for part pickup is 80 × 80 mm. Smaller parts can be realised via special applications with adapted suction grippers — Asamer coordinates this during project planning with Barbaric.',
          cz: 'Typická minimální velikost pro odběr dílů je 80 × 80 mm. Menší díly lze realizovat přes speciální aplikace s přizpůsobenými přísavkovými úchopy — Asamer to koordinuje při projektování s Barbaric.',
          hu: 'A darabfelvétel tipikus minimális mérete 80 × 80 mm. Kisebb darabok egyedi alkalmazásokon keresztül, testreszabott vákuumos megfogókkal valósíthatók meg — az Asamer ezt a projektezés keretében Barbaric-kal egyezteti.',
        },
      },
      {
        question: { de: 'Wie viele Aufträge kann der LCV parallel stapeln?', en: 'How many orders can the LCV stack in parallel?', cz: 'Kolik zakázek může LCV stohovat paralelně?', hu: 'Hány rendelést tud az LCV párhuzamosan kötegelni?' },
        answer: {
          de: 'Je nach Konfiguration bis zu 20 parallele Auftragsstapel. Reicht das nicht aus, lässt sich ein Pufferförderer vorschalten, der fertige Stapel abtransportiert und Platz für weitere Aufträge schafft.',
          en: 'Depending on configuration, up to 20 parallel order stacks. If this is not enough, a buffer conveyor can be added that transports finished stacks away and creates space for further orders.',
          cz: 'Podle konfigurace až 20 paralelních stohů zakázek. Pokud to nestačí, lze předřadit pufrovací dopravník, který odváží hotové stohy a vytváří místo pro další zakázky.',
          hu: 'A konfigurációtól függően akár 20 párhuzamos rendeléskupac. Ha ez nem elég, elé szerelhető egy puffer szállító, amely elszállítja a kész kupacokat, és helyet teremt további rendeléseknek.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  RETURN — rts-professional                                          */
  /* ------------------------------------------------------------------ */
  'rts-professional': {
    longDescription: {
      de: `Das Barbaric RTS Professional ist ein Rückführsystem für Kantenanleimmaschinen und sorgt dafür, dass fertig bearbeitete Werkstücke automatisch zum Maschinenbediener zurücklaufen. Statt die Teile um die Maschine herum zu tragen, übernimmt das RTS den kompletten Rückführweg — der Bediener kann Zeit, die er sonst mit Laufwegen verbringt, in die nächste Auftragsvorbereitung investieren. Das RTS Professional verarbeitet Werkstücke üblicher Möbelgrößen bei Vorschubgeschwindigkeiten passend zur Kantenanleimmaschine. Für Tischlereien und mittelständische Möbelhersteller, die aus einer bestehenden Kantenleimmaschine mehr herausholen wollen, ist das RTS Professional eine wirtschaftliche Nachrüstung. Asamer plant, liefert und montiert das RTS als autorisierter Barbaric-Händler für CZ, SK und HU.`,
      en: `The Barbaric RTS Professional is a return system for edgebanding machines that automatically returns finished workpieces to the operator. Instead of carrying parts around the machine, the RTS takes over the entire return path — the operator can invest time otherwise spent walking into preparing the next job. The RTS Professional handles workpieces of common furniture sizes at feed speeds matched to the edgebander. For joinery shops and mid-sized furniture manufacturers who want to get more out of an existing edgebanding machine, the RTS Professional is an economical retrofit. Asamer plans, delivers and installs the RTS as authorized Barbaric dealer for CZ, SK and HU.`,
      cz: `Barbaric RTS Professional je návratový systém pro olepovačky hran, který automaticky vrací hotové obrobky k obsluze stroje. Místo aby se díly obnášely kolem stroje, RTS přebírá celou návratovou trasu — obsluha může čas, který by jinak strávila chůzí, investovat do přípravy další zakázky. RTS Professional zpracovává obrobky běžných nábytkových rozměrů při rychlostech posuvu odpovídajících olepovačce hran. Pro truhlářství a středně velké výrobce nábytku, kteří chtějí vytěžit více ze stávající olepovačky hran, je RTS Professional ekonomické dovybavení. Asamer plánuje, dodává a montuje RTS jako autorizovaný prodejce Barbaric pro CZ, SK a HU.`,
      hu: `A Barbaric RTS Professional egy visszavezető rendszer élzárógépekhez, amely automatikusan visszaszállítja a kész munkadarabokat a gép kezelőjéhez. Ahelyett, hogy a darabokat körbehordanák a gép körül, az RTS átveszi a teljes visszavezető útvonalat — a kezelő az egyébként gyaloglásra fordított időt a következő munka előkészítésébe fektetheti. Az RTS Professional szokásos bútorméretű munkadarabokat kezel az élzárógéphez illesztett előtolási sebességgel. Asztalosműhelyek és közepes méretű bútorgyártók számára, akik egy meglévő élzárógépből többet akarnak kihozni, az RTS Professional gazdaságos utólagos felszerelés. Az Asamer hivatalos Barbaric viszonteladóként tervezi, szállítja és szereli az RTS rendszert Csehország, Szlovákia és Magyarország számára.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Einmannbedienung der Kantenleimmaschine', en: 'For one-man operation of the edgebander', cz: 'Pro jednoho pracovníka u olepovačky', hu: 'Élzárógép egyszemélyes kezeléséhez' },
        body: {
          de: 'Ohne Rückführung braucht eine Kantenleimmaschine üblicherweise zwei Bediener — einer legt auf, einer nimmt ab. Mit dem RTS Professional läuft das Werkstück automatisch zurück, sodass ein Bediener den gesamten Prozess übernehmen kann. Die freigesetzte Arbeitskraft kann andere Aufgaben übernehmen.',
          en: 'Without a return system, an edgebander typically needs two operators — one to load, one to unload. With the RTS Professional the workpiece runs back automatically, so a single operator can handle the entire process. The freed labour can take on other tasks.',
          cz: 'Bez návratu potřebuje olepovačka hran obvykle dva pracovníky — jeden zakládá, druhý odebírá. S RTS Professional se obrobek vrací automaticky, takže jeden pracovník zvládne celý proces. Uvolněná pracovní síla může převzít jiné úkoly.',
          hu: 'Visszavezető rendszer nélkül egy élzárógéphez általában két kezelő kell — egy betöltéshez, egy kivételhez. Az RTS Professional segítségével a munkadarab automatikusan visszatér, így egyetlen kezelő elvégezheti a teljes folyamatot. A felszabadult munkaerő más feladatokat vállalhat.',
        },
      },
      {
        heading: { de: 'Für mittlere Serien mit wenigen Umrüstungen', en: 'For medium series with few changeovers', cz: 'Pro střední série s málo přestaveními', hu: 'Kevés átállással dolgozó közepes sorozatokhoz' },
        body: {
          de: 'Das RTS Professional ist wirtschaftlich ab mittleren Tagesdurchsätzen von einigen hundert Teilen. In dieser Betriebsgröße zahlt sich die Automatisierung durch Personalentlastung schnell aus. Für sehr kleine Stückzahlen oder häufige Umrüstungen ist die manuelle Arbeitsweise ausreichend.',
          en: 'The RTS Professional is economical from medium daily throughputs of several hundred parts. At this operation size, automation quickly pays off through personnel relief. For very small quantities or frequent changeovers, manual operation is sufficient.',
          cz: 'RTS Professional je ekonomický od středních denních průtoků několika set dílů. Při této velikosti provozu se automatizace rychle vyplatí díky odlehčení personálu. Pro velmi malé kusy nebo časté přestavování stačí manuální provoz.',
          hu: 'Az RTS Professional már néhány száz darabos közepes napi áteresztőképességtől gazdaságos. Ilyen üzemméretben az automatizálás a személyzeti tehermentesítés révén gyorsan megtérül. Nagyon kis darabszámok vagy gyakori átállások esetén a manuális munkavégzés is elegendő.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Wählen Sie RTS Professional für typische Tischlerei- und Mittelbetriebs-Anforderungen. Für industriellen Dauerbetrieb mit hohen Taktzeiten ist RTS Industrial die bessere Wahl. Sehr kompakte Betriebe oder mobile Anwendungen sind mit RTS Compact bedient.',
      en: 'Choose RTS Professional for typical joinery and mid-sized operation requirements. For industrial continuous operation with high cycle times, RTS Industrial is the better choice. Very compact operations or mobile applications are served by RTS Compact.',
      cz: 'Zvolte RTS Professional pro typické požadavky truhlářství a středně velkých provozů. Pro průmyslový nepřetržitý provoz s vysokými takty je vhodnější RTS Industrial. Velmi kompaktní provozy nebo mobilní aplikace pokrývá RTS Compact.',
      hu: 'Válassza az RTS Professional rendszert jellemző asztalos- és középvállalati igényekre. Magas ciklusidőkkel működő ipari folyamatos üzemhez az RTS Industrial a jobb választás. Nagyon kompakt üzemeket vagy mobil alkalmazásokat az RTS Compact szolgál ki.',
    },
    faq: [
      {
        question: { de: 'Passt das RTS zu meiner bestehenden Kantenleimmaschine?', en: 'Does the RTS fit my existing edgebander?', cz: 'Hodí se RTS k mé stávající olepovačce?', hu: 'Illik az RTS a meglévő élzárógépemhez?' },
        answer: {
          de: 'Das RTS Professional passt zu Kantenleimmaschinen verschiedener Hersteller (OTT, Homag, Felder, Biesse, SCM etc.). Die Schnittstelle wird bei der Projektierung individuell ausgelegt. Asamer prüft die Kompatibilität vorab.',
          en: 'The RTS Professional fits edgebanders from various manufacturers (OTT, Homag, Felder, Biesse, SCM etc.). The interface is designed individually during project planning. Asamer verifies compatibility in advance.',
          cz: 'RTS Professional se hodí k olepovačkám hran různých výrobců (OTT, Homag, Felder, Biesse, SCM atd.). Rozhraní se navrhuje individuálně při projektování. Asamer ověřuje kompatibilitu předem.',
          hu: 'Az RTS Professional különböző gyártók (OTT, Homag, Felder, Biesse, SCM stb.) élzárógépeihez illik. A csatlakozási felületet a projektezés során egyedileg tervezzük. Az Asamer a kompatibilitást előzetesen ellenőrzi.',
        },
      },
      {
        question: { de: 'Wie groß ist der Platzbedarf?', en: 'How much space is required?', cz: 'Jaké jsou prostorové nároky?', hu: 'Mekkora a helyigény?' },
        answer: {
          de: 'Typisch 2–3 m Rückführlänge plus die eigene Länge der Kantenleimmaschine. In L- oder U-Anordnung lässt sich der Platzbedarf optimieren. Die exakten Maße ergeben sich aus dem Hallenlayout.',
          en: 'Typically 2–3 m return length plus the edgebander\'s own length. In an L- or U-arrangement, space requirements can be optimised. Exact dimensions result from the hall layout.',
          cz: 'Typicky 2–3 m délky návratu plus vlastní délka olepovačky hran. Při uspořádání do L nebo U lze prostorové nároky optimalizovat. Přesné rozměry vyplývají z rozvržení haly.',
          hu: 'Tipikusan 2–3 m visszavezető hossz plus az élzárógép saját hossza. L vagy U elrendezésben a helyigény optimalizálható. A pontos méretek a csarnok elrendezéséből adódnak.',
        },
      },
      {
        question: { de: 'Rechnet sich das RTS für mein Betrieb?', en: 'Does the RTS pay off for my operation?', cz: 'Vyplatí se mi RTS?', hu: 'Megtérül-e az RTS az üzememben?' },
        answer: {
          de: 'Bei mittlerem Durchsatz und Zweischichtbetrieb amortisiert sich das RTS in 12–24 Monaten durch Personalentlastung. Asamer rechnet den ROI gerne mit Ihren Produktionszahlen durch.',
          en: 'At medium throughput and two-shift operation, the RTS pays off in 12–24 months through personnel relief. Asamer is happy to calculate the ROI with your production figures.',
          cz: 'Při středním průtoku a dvousmenném provozu se RTS vrátí za 12–24 měsíců díky odlehčení personálu. Asamer rád spočítá ROI s vašimi výrobními čísly.',
          hu: 'Közepes áteresztőképességnél és kétműszakos üzemben az RTS 12–24 hónap alatt megtérül a személyzeti tehermentesítés révén. Az Asamer szívesen kiszámítja a ROI-t az Ön termelési adatai alapján.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  VACUUM-LIFTERS — uwl-3                                             */
  /* ------------------------------------------------------------------ */
  'uwl-3': {
    longDescription: {
      de: `Der Barbaric UWL-3 ist ein Vakuumheber für die ergonomische Handhabung großer Plattenmaterialien im Holz- und Möbelbau. Er nimmt Platten, Türen oder Arbeitsplatten sicher über Vakuum auf und ermöglicht die millimetergenaue Positionierung — ohne dass Bediener das Werkstück von Hand bewegen müssen. Das schützt Mitarbeiter vor Rückenbelastung, reduziert Krankheitstage und beugt Plattenbruch durch Fallenlassen vor. Der UWL-3 arbeitet mit integrierter Vakuumpumpe, sodass keine externe Druckluftversorgung notwendig ist. Für Tischlereien, Möbelwerke und Lagerlogistik ist der UWL-3 die bewährte Standardlösung im Vakuumhandling. Asamer liefert und wartet Barbaric-Vakuumheber für CZ, SK und HU inklusive Sicherheitsprüfung nach DGUV.`,
      en: `The Barbaric UWL-3 is a vacuum lifter for ergonomic handling of large panel materials in wood and furniture production. It picks up panels, doors or worktops securely via vacuum and enables millimetre-precise positioning — without operators needing to move the workpiece by hand. This protects employees from back strain, reduces sick days and prevents panel damage from dropping. The UWL-3 works with an integrated vacuum pump, so no external compressed air supply is required. For joinery shops, furniture factories and warehouse logistics, the UWL-3 is the proven standard solution in vacuum handling. Asamer supplies and services Barbaric vacuum lifters for CZ, SK and HU including safety inspection per DGUV.`,
      cz: `Barbaric UWL-3 je vakuový zvedák pro ergonomickou manipulaci s velkými deskovými materiály ve výrobě dřeva a nábytku. Bere desky, dveře nebo pracovní desky bezpečně vakuem a umožňuje milimetrovou polohovací přesnost — bez nutnosti, aby obsluha přesouvala obrobek rukou. To chrání zaměstnance před přetížením zad, snižuje počet nemocenských dnů a předchází poškození desek pádem. UWL-3 pracuje s integrovaným vakuovým čerpadlem, takže není nutné externí zásobování stlačeným vzduchem. Pro truhlářství, nábytkářské závody a skladovou logistiku je UWL-3 osvědčeným standardním řešením ve vakuové manipulaci. Asamer dodává a servisuje Barbaric vakuové zvedáky pro CZ, SK a HU včetně bezpečnostních kontrol dle DGUV.`,
      hu: `A Barbaric UWL-3 vákuumemelő nagy méretű lapanyagok ergonomikus kezelésére szolgál fa- és bútoriparban. Vákuumon keresztül biztonságosan felveszi a lapokat, ajtókat vagy munkalapokat, és milliméter pontos pozicionálást tesz lehetővé — anélkül, hogy a kezelőknek kézzel kellene mozgatniuk a munkadarabot. Ez megóvja a dolgozókat a hátfájástól, csökkenti a betegszabadságot, és megelőzi a lapok leejtésből származó törését. Az UWL-3 integrált vákuumszivattyúval működik, így nincs szükség külső sűrített levegős ellátásra. Asztalosműhelyek, bútorgyárak és raktárlogisztika számára az UWL-3 a vákuumos anyagmozgatás bevált szabványos megoldása. Az Asamer a Barbaric vákuumemelőket Csehország, Szlovákia és Magyarország részére szállítja és szervizeli, beleértve a DGUV szerinti biztonsági felülvizsgálatot.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Wareneingang und Lagerlogistik', en: 'For goods receipt and warehouse logistics', cz: 'Pro příjem zboží a skladovou logistiku', hu: 'Áruátvételhez és raktárlogisztikához' },
        body: {
          de: 'Beim Entladen von LKW oder Stapeln von Plattenmaterial ersetzt der UWL-3 das manuelle Heben durch einen sicheren, kontrollierten Vakuumgriff. Große Formate und schwere Platten lassen sich von einer Person bewegen, die sonst zwei oder drei Mitarbeiter benötigt.',
          en: 'When unloading trucks or stacking panel material, the UWL-3 replaces manual lifting with a secure, controlled vacuum grip. Large formats and heavy panels can be moved by one person that otherwise requires two or three workers.',
          cz: 'Při vykládání nákladních vozidel nebo stohování deskového materiálu nahrazuje UWL-3 manuální zvedání bezpečným, kontrolovaným vakuovým úchopem. Velké formáty a těžké desky může přesouvat jedna osoba, která jinak vyžaduje dva nebo tři pracovníky.',
          hu: 'Kamionok lerakodásánál vagy lapanyag kötegelésénél az UWL-3 a manuális emelést biztonságos, ellenőrzött vákuumos fogással helyettesíti. A nagy méretű és nehéz lapokat egy ember mozgathatja, amelyhez egyébként két-három munkás szükséges.',
        },
      },
      {
        heading: { de: 'Für Bestückung von Plattenaufteilsäge und CNC', en: 'For loading panel saw and CNC', cz: 'Pro zakládání formátovací pily a CNC', hu: 'Lapszabászgép és CNC betöltéséhez' },
        body: {
          de: 'An der Plattenaufteilsäge oder am CNC-Arbeitstisch beschleunigt der UWL-3 die Plattenbestückung und sorgt für exaktes Anlegen. Das Werkstück kann ohne manuelles Schieben positioniert werden — entscheidend bei großen Formaten oder beschichteten Oberflächen, die nicht verkratzt werden dürfen.',
          en: 'At the panel saw or CNC worktable, the UWL-3 speeds up panel loading and ensures exact positioning. The workpiece can be positioned without manual sliding — crucial for large formats or coated surfaces that must not be scratched.',
          cz: 'U formátovací pily nebo CNC pracovního stolu zrychluje UWL-3 zakládání desek a zajišťuje přesné polohování. Obrobek lze umístit bez manuálního posouvání — zásadní u velkých formátů nebo potažených povrchů, které se nesmí poškrábat.',
          hu: 'A lapszabászgépnél vagy a CNC munkaasztalnál az UWL-3 felgyorsítja a lap betöltését és pontos illesztést biztosít. A munkadarab manuális tolás nélkül is pozicionálható — döntő nagy formátumoknál vagy bevont felületeknél, amelyek nem karcolódhatnak.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Der UWL-3 ist das bewährte Standardmodell — passend für die meisten Tischlerei- und Möbelbetriebe mit klassischer Plattenhandhabung. Für besonders dünne oder poröse Platten brauchen Sie Sondersauger (UWL-3S), für sehr große Lasten den UWL-5. Bei beschichteten Platten mit Ölfinish klärt Asamer die Saugtechnik individuell.',
      en: 'The UWL-3 is the proven standard model — suitable for most joinery and furniture operations with classic panel handling. For especially thin or porous panels you need special suction cups (UWL-3S); for very heavy loads, the UWL-5. For coated panels with oil finish, Asamer clarifies suction technology individually.',
      cz: 'UWL-3 je osvědčený standardní model — vhodný pro většinu truhlárenských a nábytkářských provozů s klasickou manipulací s deskami. Pro obzvlášť tenké nebo porézní desky potřebujete speciální přísavky (UWL-3S), pro velmi těžká břemena UWL-5. U potažených desek s olejovým finishem Asamer řeší sací techniku individuálně.',
      hu: 'Az UWL-3 a bevált szabványmodell — a klasszikus lapkezeléssel rendelkező asztalos- és bútorüzemek többségéhez illik. Különösen vékony vagy porózus lapokhoz speciális szívótárcsák (UWL-3S) szükségesek, nagyon nagy terhelésekhez UWL-5. Olajos kikészítésű bevont lapoknál az Asamer egyedileg tisztázza a szívótechnikát.',
    },
    faq: [
      {
        question: { de: 'Welche Lasten kann der UWL-3 heben?', en: 'What loads can the UWL-3 lift?', cz: 'Jaká břemena UWL-3 uzdvihne?', hu: 'Milyen terheket tud az UWL-3 emelni?' },
        answer: {
          de: 'Der UWL-3 ist für typische Plattenlasten von bis zu einigen hundert Kilogramm ausgelegt. Die exakte Traglast hängt von der Plattenoberfläche und der Sauggreifer-Konfiguration ab. Asamer berechnet die passende Konfiguration im Vorgespräch.',
          en: 'The UWL-3 is designed for typical panel loads up to several hundred kilograms. The exact load capacity depends on the panel surface and suction cup configuration. Asamer calculates the suitable configuration in the preliminary consultation.',
          cz: 'UWL-3 je dimenzován na typická zatížení desek do několika set kilogramů. Přesná nosnost závisí na povrchu desky a konfiguraci přísavkových úchopů. Asamer spočítá vhodnou konfiguraci v předběžné konzultaci.',
          hu: 'Az UWL-3 tipikus, néhány száz kilogrammig terjedő lapterhelésekre méretezett. A pontos teherbírás a lap felületétől és a szívótárcsák konfigurációjától függ. Az Asamer az előzetes egyeztetésen kiszámítja a megfelelő konfigurációt.',
        },
      },
      {
        question: { de: 'Wie hoch ist die Sicherheit bei Stromausfall?', en: 'How safe is the UWL-3 in case of power failure?', cz: 'Jak bezpečný je UWL-3 při výpadku proudu?', hu: 'Mennyire biztonságos az UWL-3 áramkimaradás esetén?' },
        answer: {
          de: 'Der UWL-3 hält das Vakuum nach Stromausfall mehrere Minuten über Pufferspeicher — ausreichend, um die Last sicher abzusetzen. Zusätzlich gibt es optische und akustische Warnung bei Vakuumverlust.',
          en: 'The UWL-3 holds vacuum for several minutes after power failure via buffer storage — sufficient to safely set down the load. Additionally, there are optical and acoustic warnings on vacuum loss.',
          cz: 'UWL-3 drží vakuum po výpadku proudu několik minut přes pufr — dostatečně dlouho k bezpečnému odložení břemena. Navíc jsou k dispozici optická a akustická upozornění při ztrátě vakua.',
          hu: 'Az UWL-3 áramkimaradás után puffertartályon keresztül több percig tartja a vákuumot — elegendő ahhoz, hogy a terhet biztonságosan letegye. Ezenkívül vákuumveszteség esetén optikai és akusztikus figyelmeztetés is van.',
        },
      },
      {
        question: { de: 'Gibt es eine Sicherheitsprüfung?', en: 'Is a safety inspection required?', cz: 'Je nutná bezpečnostní kontrola?', hu: 'Szükséges-e biztonsági felülvizsgálat?' },
        answer: {
          de: 'Ja — Vakuumheber unterliegen in Deutschland/Österreich/Tschechien der jährlichen Sicherheitsprüfung nach DGUV. Asamer bietet den Prüfservice als Wartungspaket mit an.',
          en: 'Yes — vacuum lifters are subject to annual safety inspection in Germany/Austria/Czech Republic per DGUV. Asamer offers the inspection service as part of a maintenance package.',
          cz: 'Ano — vakuové zvedáky podléhají v Německu/Rakousku/České republice každoroční bezpečnostní kontrole dle DGUV. Asamer nabízí tuto kontrolu jako součást údržbového balíčku.',
          hu: 'Igen — a vákuumemelők Németországban, Ausztriában, Csehországban a DGUV szerinti éves biztonsági felülvizsgálat alá tartoznak. Az Asamer a felülvizsgálati szolgáltatást karbantartási csomag részeként is kínálja.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  VACUUM-CRANES — ssk-saeulenschwenkkran                              */
  /* ------------------------------------------------------------------ */
  'ssk-saeulenschwenkkran': {
    longDescription: {
      de: `Der Barbaric SSK Säulenschwenkkran ist ein stationärer Vakuumkran für die regelmäßige Handhabung schwerer Plattenmaterialien im Holz- und Möbelbau. Er kombiniert einen Schwenkarm mit dem bewährten Barbaric-Vakuumsystem und deckt typischerweise einen Halbkreis von mehreren Metern Radius ab — ideal zur Bestückung einer Plattenaufteilsäge, eines CNC-Arbeitstisches oder einer Lagerfläche. Der Bediener führt die Last berührungslos und kann schwere Platten einhändig präzise positionieren. Säulenschwenkkräne sind eine kostengünstige Alternative zu vollautomatischen Flächenlagern, wenn regelmäßige Einzelbewegungen anstehen statt kontinuierlicher Materialversorgung. Asamer plant SSK-Systeme für Tischlereien in CZ, SK und HU inklusive Fundamentauslegung und Sicherheitsabnahme.`,
      en: `The Barbaric SSK column slewing crane is a stationary vacuum crane for regular handling of heavy panel materials in wood and furniture production. It combines a slewing arm with the proven Barbaric vacuum system and typically covers a semicircle of several metres radius — ideal for loading a panel saw, CNC worktable or storage area. The operator guides the load contact-free and can position heavy panels precisely with one hand. Column slewing cranes are a cost-effective alternative to fully automatic panel storage when regular individual movements are required rather than continuous material supply. Asamer plans SSK systems for joinery shops in CZ, SK and HU including foundation design and safety acceptance.`,
      cz: `Barbaric SSK sloupový otočný jeřáb je stacionární vakuový jeřáb pro pravidelnou manipulaci s těžkými deskovými materiály ve výrobě dřeva a nábytku. Kombinuje otočné rameno s osvědčeným vakuovým systémem Barbaric a obvykle pokrývá půlkruh o poloměru několika metrů — ideální pro zakládání formátovací pily, CNC pracovního stolu nebo skladové plochy. Obsluha vede břemeno bezkontaktně a může přesně polohovat těžké desky jednou rukou. Sloupové otočné jeřáby jsou cenově dostupná alternativa k plně automatickým skladům desek, pokud jsou potřebné pravidelné jednotlivé pohyby místo souvislého zásobování materiálem. Asamer projektuje systémy SSK pro truhlářství v CZ, SK a HU včetně návrhu základů a bezpečnostního schválení.`,
      hu: `A Barbaric SSK oszlopos forgódaru egy stacionárius vákuumdaru nehéz lapanyagok rendszeres kezelésére fa- és bútoriparban. Egyesíti a forgókart a bevált Barbaric vákuumrendszerrel, és jellemzően néhány méter sugarú félkört fed le — ideális lapszabászgép, CNC munkaasztal vagy raktárterület kiszolgálására. A kezelő érintésmentesen vezeti a terhet, és egy kézzel pontosan pozicionálhatja a nehéz lapokat. Az oszlopos forgódaruk költséghatékony alternatívát jelentenek a teljesen automatikus lapraktárakhoz képest, ha rendszeres egyedi mozgásokra van szükség a folyamatos anyagellátás helyett. Az Asamer Csehország, Szlovákia és Magyarország területén tervezi az SSK rendszereket asztalosműhelyek számára — az alaptervezéssel és a biztonsági átvétellel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Tischlereien mit wechselnden Formaten', en: 'For joinery shops with varying formats', cz: 'Pro truhlárny s různými formáty', hu: 'Változó formátumokkal dolgozó asztalosműhelyeknek' },
        body: {
          de: 'In Tischlereien, die mit unterschiedlichsten Plattenformaten arbeiten, ist der SSK die ideale Lösung: Jede Platte lässt sich flexibel aus dem Lager entnehmen und zum Arbeitsplatz bringen. Für feste Materialflüsse lohnt sich eher ein Förderer-System.',
          en: 'In joinery shops working with various panel formats, the SSK is the ideal solution: every panel can be flexibly retrieved from storage and brought to the workstation. For fixed material flows, a conveyor system is more suitable.',
          cz: 'V truhlářstvích pracujících s různými formáty desek je SSK ideálním řešením: každou desku lze pružně odebrat ze skladu a přenést na pracoviště. Pro pevné toky materiálu se spíše vyplatí dopravníkový systém.',
          hu: 'Változatos lapformátumokkal dolgozó asztalosműhelyekben az SSK ideális megoldás: minden lap rugalmasan kivehető a raktárból és a munkaállomáshoz vihető. Rögzített anyagáramok esetén inkább egy szállítószalag rendszer éri meg.',
        },
      },
      {
        heading: { de: 'Für Zuschnitt- und Formatierungsarbeitsplätze', en: 'For cutting and formatting workstations', cz: 'Pro pracoviště řezání a formátování', hu: 'Szabászati és formázó munkaállomásokhoz' },
        body: {
          de: 'An Plattenaufteilsäge, CNC oder Fräse positioniert der SSK auch große Formate millimetergenau auf dem Arbeitstisch. Damit entfallen Hebevorgänge, die bei manueller Handhabung regelmäßig zu Rückenbeschwerden führen.',
          en: 'At panel saw, CNC or mill, the SSK positions even large formats with millimetre precision on the worktable. This eliminates lifting operations that regularly cause back problems in manual handling.',
          cz: 'U formátovací pily, CNC nebo frézy polohuje SSK i velké formáty s milimetrovou přesností na pracovním stole. Tím odpadají zvedací operace, které při manuální manipulaci pravidelně způsobují bolesti zad.',
          hu: 'Lapszabászgépnél, CNC-nél vagy marógépnél az SSK a nagy formátumokat is milliméter pontosan pozícionálja a munkaasztalon. Ezáltal elmaradnak az emelési műveletek, amelyek a manuális kezelésnél rendszeresen hátfájást okoznak.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Wählen Sie den SSK, wenn Sie an einem festen Arbeitsplatz regelmäßig große oder schwere Platten handhaben müssen. Für die Abdeckung ganzer Hallen sind Fachwerkbrücken (2D/3D) oder Schienensysteme (SSY) die richtige Lösung.',
      en: 'Choose the SSK if you need to regularly handle large or heavy panels at a fixed workstation. For covering entire halls, truss bridges (2D/3D) or rail systems (SSY) are the right solution.',
      cz: 'Zvolte SSK, pokud na pevném pracovišti pravidelně manipulujete s velkými nebo těžkými deskami. Pro pokrytí celých hal jsou sloupcové mosty (2D/3D) nebo kolejnicové systémy (SSY) správným řešením.',
      hu: 'Válassza az SSK-t, ha egy rögzített munkaállomáson rendszeresen nagy vagy nehéz lapokat kell kezelnie. Teljes csarnokok lefedésére rácsos hidak (2D/3D) vagy sínrendszerek (SSY) a megfelelő megoldás.',
    },
    faq: [
      {
        question: { de: 'Welcher Radius ist möglich?', en: 'What radius is possible?', cz: 'Jaký poloměr je možný?', hu: 'Milyen sugár lehetséges?' },
        answer: {
          de: 'Typische Schwenkradien liegen zwischen 3 und 6 Metern. Größere Ausführungen sind auf Anfrage möglich, benötigen aber entsprechend dimensionierte Fundamente.',
          en: 'Typical slewing radii are between 3 and 6 metres. Larger versions are available on request but require correspondingly dimensioned foundations.',
          cz: 'Typické otočné poloměry jsou mezi 3 a 6 metry. Větší provedení jsou k dispozici na vyžádání, ale vyžadují odpovídajícím způsobem dimenzované základy.',
          hu: 'A tipikus forgássugarak 3 és 6 méter között mozognak. Nagyobb kivitelek igény esetén elérhetők, de ezekhez megfelelően méretezett alapok szükségesek.',
        },
      },
      {
        question: { de: 'Brauchen wir ein Sonderfundament?', en: 'Do we need a special foundation?', cz: 'Potřebujeme speciální základ?', hu: 'Szükséges-e speciális alap?' },
        answer: {
          de: 'Ja — der Kranständer benötigt ein Stahlbetonfundament entsprechend der Trag- und Biegebeanspruchung. Asamer erstellt die Fundamentplanung und koordiniert mit Ihrem Bauplaner.',
          en: 'Yes — the crane post requires a reinforced concrete foundation according to load and bending stress. Asamer prepares the foundation plan and coordinates with your building planner.',
          cz: 'Ano — sloup jeřábu potřebuje železobetonový základ odpovídající nosnému a ohybovému namáhání. Asamer vypracuje projekt základu a koordinuje s vaším stavebním projektantem.',
          hu: 'Igen — a daruoszlop vasbeton alapot igényel a teher- és hajlítóigénybevételnek megfelelően. Az Asamer elkészíti az alaptervet, és egyeztet az építési tervezővel.',
        },
      },
      {
        question: { de: 'Kann der SSK elektrisch geschwenkt werden?', en: 'Can the SSK be electrically slewed?', cz: 'Lze SSK otáčet elektricky?', hu: 'Elektromosan forgatható az SSK?' },
        answer: {
          de: 'Der Standard-SSK wird von Hand geschwenkt — die Last ist dabei gewichtsentlastet. Elektromotorische Schwenkung ist als Option verfügbar und empfiehlt sich bei sehr großen Radien oder schweren Lasten.',
          en: 'The standard SSK is slewed by hand — the load is weight-relieved. Electric slewing is available as an option and is recommended for very large radii or heavy loads.',
          cz: 'Standardní SSK se otáčí ručně — břemeno je přitom odlehčeno. Elektromotorické otáčení je dostupné jako volba a doporučuje se u velmi velkých poloměrů nebo těžkých břemen.',
          hu: 'A szabvány SSK-t kézzel forgatják — a teher eközben súlymentesített. Elektromotoros forgatás opcióként elérhető, és nagyon nagy sugaraknál vagy nehéz terheknél ajánlott.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  STORAGE — csf-multilevel                                           */
  /* ------------------------------------------------------------------ */
  'csf-multilevel': {
    longDescription: {
      de: `Das Barbaric CSF Multilevel ist ein mehrstöckiges Plattenlager für Betriebe mit sehr hohen Materialbeständen auf begrenzter Grundfläche. Statt die Lagerfläche horizontal zu vergrößern, werden bis zu mehrere tausend Lagerplätze auf zwei oder drei übereinanderliegenden Ebenen realisiert. Eine vollautomatische Mehrstockanlage mit vertikalem Materialtransport versorgt die Plattenaufteilsäge oder CNC genauso zuverlässig wie ein klassisches Flächenlager — nutzt aber den Luftraum Ihrer Halle vollständig aus. Das CSF Multilevel ist die richtige Lösung für Industriebetriebe und Plattenhandel mit breitem Dekorsortiment, die zehn- bis zwanzigtausend Platten auf kleinem Fußabdruck lagern müssen. Asamer projektiert Mehrstockanlagen für Tschechien, Slowakei und Ungarn inklusive Statikprüfung, ERP-Anbindung, Installation und langfristigem Servicevertrag.`,
      en: `The Barbaric CSF Multilevel is a multi-level panel storage system for operations with very high material inventories on limited floor area. Instead of expanding the storage footprint horizontally, up to several thousand storage slots are realised on two or three stacked levels. A fully automatic multi-level system with vertical material transport feeds the panel saw or CNC as reliably as a classic flat-layout storage — but fully utilises the air space of your hall. The CSF Multilevel is the right solution for industrial operations and panel traders with a broad décor range that must store ten to twenty thousand panels on a small footprint. Asamer engineers multi-level systems for Czech Republic, Slovakia and Hungary — including structural verification, ERP integration, installation and long-term service contract.`,
      cz: `Barbaric CSF Multilevel je vícepodlažní sklad desek pro provozy s velmi vysokými zásobami materiálu na omezené ploše. Místo horizontálního rozšiřování skladové plochy se realizuje až několik tisíc skladových míst ve dvou nebo třech úrovních nad sebou. Plně automatický vícepodlažní systém s vertikálním transportem materiálu zásobuje formátovací pilu nebo CNC stejně spolehlivě jako klasický plošný sklad — plně však využívá vzdušný prostor vaší haly. CSF Multilevel je správným řešením pro průmyslové provozy a obchodníky s deskami s širokým sortimentem dekorů, kteří musí skladovat deset až dvacet tisíc desek na malém půdorysu. Asamer projektuje vícepodlažní systémy pro Českou republiku, Slovensko a Maďarsko — včetně statického ověření, napojení na ERP, instalace a dlouhodobé servisní smlouvy.`,
      sk: `Barbaric CSF Multilevel je viacpodlažný sklad dosiek pre prevádzky s veľmi vysokými zásobami materiálu na obmedzenej ploche. Namiesto horizontálneho rozširovania skladovej plochy sa realizuje až niekoľko tisíc skladových miest v dvoch alebo troch úrovniach nad sebou. Plne automatický viacpodlažný systém s vertikálnou prepravou materiálu zásobuje formátovaciu pílu alebo CNC rovnako spoľahlivo ako klasický plošný sklad — plne však využíva vzdušný priestor vašej haly. CSF Multilevel je správnym riešením pre priemyselné prevádzky a obchodníkov s doskami so širokým sortimentom dekorov, ktorí musia skladovať desať až dvadsať tisíc dosiek na malom pôdoryse. Asamer projektuje viacpodlažné systémy pre Českú republiku, Slovensko a Maďarsko — vrátane statického overenia, napojenia na ERP, inštalácie a dlhodobej servisnej zmluvy.`,
      hu: `A Barbaric CSF Multilevel egy többszintes rendszer nagyon magas anyagkészletű, korlátozott alapterületű üzemek számára. Ahelyett, hogy a raktárterületet vízszintesen növelnék, akár több ezer tárolóhely valósul meg két vagy három, egymás fölötti szinten. A teljesen automatikus többszintes rendszer függőleges anyagszállítással ugyanolyan megbízhatóan látja el a lapszabászgépet vagy a CNC-t, mint egy klasszikus lapraktár — közben viszont teljesen kihasználja a csarnok légterét. A CSF Multilevel ipari üzemek és széles dekorválasztékkal dolgozó lapkereskedők számára a megfelelő megoldás, akiknek tíz-húszezer lapot kell kis alapterületen tárolniuk. Az Asamer többszintes rendszereket tervez Csehország, Szlovákia és Magyarország részére — statikai ellenőrzéssel, ERP integrációval, telepítéssel és hosszú távú szervizszerződéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Plattenhandel mit großem Dekorsortiment', en: 'For panel traders with broad décor range', cz: 'Pro obchodníky s deskami se širokým sortimentem dekorů', sk: 'Pre obchodníkov s doskami so širokým sortimentom dekorov', hu: 'Széles dekorválasztékú lapkereskedőknek' },
        body: {
          de: 'Plattenhändler mit mehreren hundert Dekoren benötigen eine hohe Anzahl an Lagerplätzen bei geringer Tiefe pro Artikel. Das CSF Multilevel skaliert über zusätzliche Etagen — ohne die Hallenfläche zu vergrößern. Die chaotische Einlagerung sorgt trotz breitem Sortiment für optimale Flächennutzung.',
          en: 'Panel traders with several hundred décors require a high number of storage slots at low depth per article. The CSF Multilevel scales via additional levels — without increasing hall area. Chaotic storage ensures optimal area use despite a broad range.',
          cz: 'Obchodníci s deskami s několika stovkami dekorů vyžadují vysoký počet skladových míst při malé hloubce na položku. CSF Multilevel se rozšiřuje přidáním pater — bez zvětšení plochy haly. Chaotické skladování zajišťuje optimální využití plochy i při širokém sortimentu.',
          sk: 'Obchodníci s doskami s niekoľkými stovkami dekorov vyžadujú vysoký počet skladových miest pri malej hĺbke na položku. CSF Multilevel sa rozširuje pridaním poschodí — bez zväčšenia plochy haly. Chaotické skladovanie zaisťuje optimálne využitie plochy aj pri širokom sortimente.',
          hu: 'A több száz dekorral dolgozó lapkereskedők nagy számú tárolóhelyet igényelnek, cikkenként alacsony mélységgel. A CSF Multilevel további szintekkel skálázódik — a csarnokterület növelése nélkül. A kaotikus tárolás a széles választék ellenére is optimális területkihasználást biztosít.',
        },
      },
      {
        heading: { de: 'Für Industriebetriebe mit Flächenbeschränkung', en: 'For industrial operations with limited footprint', cz: 'Pro průmyslové provozy s omezenou plochou', sk: 'Pre priemyselné prevádzky s obmedzenou plochou', hu: 'Területkorlátos ipari üzemek számára' },
        body: {
          de: 'Wenn eine Hallenerweiterung aus baurechtlichen oder Grundstücksgründen nicht möglich ist, bietet das CSF Multilevel die zweite oder dritte Lager-Ebene in die Höhe. Das verdoppelt oder verdreifacht die Kapazität bei gleicher Grundfläche — die typische Amortisation bleibt bei ein bis zwei Jahren, da die Einsparungen entsprechend größer ausfallen.',
          en: 'If a hall expansion is not possible due to building restrictions or property constraints, the CSF Multilevel provides the second or third storage level in height. This doubles or triples capacity on the same footprint — typical payback remains at one to two years since savings scale accordingly.',
          cz: 'Pokud rozšíření haly není možné z důvodů stavebního práva nebo pozemků, CSF Multilevel nabízí druhé nebo třetí skladové patro do výšky. To zdvojnásobí nebo ztrojnásobí kapacitu na stejném půdorysu — typická návratnost zůstává jeden až dva roky, úspory totiž odpovídajícím způsobem narůstají.',
          sk: 'Ak rozšírenie haly nie je možné z dôvodov stavebného práva alebo pozemkov, CSF Multilevel ponúka druhé alebo tretie skladové poschodie do výšky. To zdvojnásobí alebo strojnásobí kapacitu na rovnakom pôdoryse — typická návratnosť zostáva jeden až dva roky, úspory totiž zodpovedajúcim spôsobom narastajú.',
          hu: 'Ha a csarnok bővítése építészjogi vagy telekadottsági okokból nem lehetséges, a CSF Multilevel a második vagy harmadik tárolószintet a magasságba helyezi. Ez megduplázza vagy megháromszorozza a kapacitást ugyanazon alapterületen — a tipikus megtérülés egy-két év marad, mivel a megtakarítások is megfelelően nőnek.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Wählen Sie das CSF Multilevel, wenn Sie mehr als mehrere tausend Plattenlagerplätze benötigen und keine horizontale Fläche mehr zur Verfügung haben. Für kleinere Bestände reicht das CSF Professional, für industrielle Dauerbetriebe auf bestehender Grundfläche das CSF Industrial. Asamer empfiehlt Ihnen nach Besichtigung die wirtschaftlich beste Systemklasse.',
      en: 'Choose the CSF Multilevel if you need more than several thousand panel storage slots and have no horizontal area left. For smaller inventories, the CSF Professional is sufficient; for industrial continuous operations on existing footprint, the CSF Industrial. Asamer recommends the most economical system class after an on-site inspection.',
      cz: 'Zvolte CSF Multilevel, pokud potřebujete více než několik tisíc skladových míst pro desky a již nemáte k dispozici horizontální plochu. Pro menší zásoby stačí CSF Professional, pro průmyslové nepřetržité provozy na stávajícím půdorysu CSF Industrial. Asamer vám po prohlídce doporučí ekonomicky nejvhodnější systémovou třídu.',
      sk: 'Zvoľte CSF Multilevel, ak potrebujete viac ako niekoľko tisíc skladových miest pre dosky a už nemáte k dispozícii horizontálnu plochu. Pre menšie zásoby stačí CSF Professional, pre priemyselné nepretržité prevádzky na existujúcom pôdoryse CSF Industrial. Asamer vám po obhliadke odporučí ekonomicky najvhodnejšiu systémovú triedu.',
      hu: 'Válassza a CSF Multilevel rendszert, ha több ezer lap tárolóhelyre van szüksége, és nincs több vízszintes területe. Kisebb készletekhez a CSF Professional elegendő, meglévő alapterületen működő ipari folyamatos üzemekhez a CSF Industrial. Az Asamer a helyszíni szemle után a gazdaságilag legkedvezőbb rendszerosztályt javasolja.',
    },
    faq: [
      {
        question: { de: 'Wie viele Ebenen sind möglich?', en: 'How many levels are possible?', cz: 'Kolik úrovní je možné?', sk: 'Koľko úrovní je možné?', hu: 'Hány szint lehetséges?' },
        answer: {
          de: 'Typisch werden zwei oder drei Ebenen realisiert. Mehr Ebenen sind technisch möglich, hängen aber von Deckenhöhe und statischen Randbedingungen ab. Asamer erstellt die Machbarkeitsstudie nach Besichtigung Ihrer Halle.',
          en: 'Typically two or three levels are realised. More levels are technically possible but depend on ceiling height and structural constraints. Asamer prepares a feasibility study after inspecting your hall.',
          cz: 'Typicky se realizují dvě nebo tři úrovně. Více úrovní je technicky možné, ale závisí na výšce stropu a statických podmínkách. Asamer vypracuje studii proveditelnosti po prohlídce vaší haly.',
          sk: 'Typicky sa realizujú dve alebo tri úrovne. Viac úrovní je technicky možné, ale závisí od výšky stropu a statických podmienok. Asamer vypracuje štúdiu realizovateľnosti po obhliadke vašej haly.',
          hu: 'Tipikusan két vagy három szint valósul meg. További szintek technikailag lehetségesek, de a mennyezetmagasságtól és a statikai feltételektől függnek. Az Asamer a csarnok megtekintése után készít megvalósíthatósági tanulmányt.',
        },
      },
      {
        question: { de: 'Braucht das CSF Multilevel ein Sonderfundament?', en: 'Does the CSF Multilevel require a special foundation?', cz: 'Vyžaduje CSF Multilevel speciální základ?', sk: 'Vyžaduje CSF Multilevel špeciálny základ?', hu: 'Szükséges-e speciális alap a CSF Multilevelhez?' },
        answer: {
          de: 'In der Regel reicht die vorhandene Industriehallen-Bodenplatte; die zusätzlichen Etagen stehen auf Stahlkonstruktionen, deren Lasten punktuell in den Boden eingeleitet werden. Asamer prüft die Statik und koordiniert bei Bedarf mit Ihrem Bauplaner.',
          en: 'Typically the existing industrial hall floor slab is sufficient; the additional levels stand on steel structures whose loads are introduced punctually into the floor. Asamer verifies the statics and coordinates with your building planner if needed.',
          cz: 'Zpravidla stačí stávající podlahová deska průmyslové haly; další patra stojí na ocelových konstrukcích, jejichž zatížení se bodově zavádí do podlahy. Asamer prověří statiku a v případě potřeby se spojí s vaším stavebním projektantem.',
          sk: 'Spravidla stačí existujúca podlahová doska priemyselnej haly; ďalšie poschodia stoja na oceľových konštrukciách, ktorých zaťaženie sa bodovo zavádza do podlahy. Asamer preverí statiku a v prípade potreby sa spojí s vaším stavebným projektantom.',
          hu: 'Általában a meglévő ipari csarnok padlólemeze elegendő; a további szintek acélszerkezeteken állnak, amelyek terhelései pontszerűen kerülnek be a padlóba. Az Asamer ellenőrzi a statikát, és szükség esetén egyeztet az építési tervezővel.',
        },
      },
      {
        question: { de: 'Wie schnell ist der vertikale Transport?', en: 'How fast is the vertical transport?', cz: 'Jak rychlý je vertikální transport?', sk: 'Aký rýchly je vertikálny transport?', hu: 'Milyen gyors a függőleges szállítás?' },
        answer: {
          de: 'Der vertikale Plattentransport zwischen den Ebenen erfolgt über Liftsystem mit Taktzeiten im Sekundenbereich — ausreichend, um auch anspruchsvolle Taktzeiten der angeschlossenen Säge oder CNC zu bedienen. Die Durchsatzraten entsprechen denen eines klassischen Flächenlagers.',
          en: 'Vertical panel transport between levels is handled by a lift system with cycle times in the seconds range — sufficient to serve demanding cycle times of the connected saw or CNC. Throughput rates match those of a classic flat-layout storage.',
          cz: 'Vertikální přeprava desek mezi úrovněmi probíhá výtahovým systémem s dobou cyklu v řádu sekund — dostatečně k obsluze i náročných dob taktu připojené pily nebo CNC. Průchodnosti odpovídají klasickému plošnému skladu.',
          sk: 'Vertikálna preprava dosiek medzi úrovňami prebieha výťahovým systémom s časom cyklu v sekundách — dostatočne na obsluhu aj náročných časov taktu pripojenej píly alebo CNC. Priepustnosti zodpovedajú klasickému plošnému skladu.',
          hu: 'A lapok függőleges szállítását a szintek között liftrendszer végzi, másodperces nagyságrendű ciklusidőkkel — elegendő a csatlakoztatott fűrész vagy CNC igényes ciklusidejének kiszolgálásához. Az áteresztőképesség megegyezik a klasszikus lapraktáréval.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  STORAGE — sonderanwendungen                                        */
  /* ------------------------------------------------------------------ */
  'sonderanwendungen': {
    longDescription: {
      de: `Die Barbaric Sonderanwendungen im Bereich Plattenlager umfassen individuell konzipierte Lageranlagen für spezielle Materialien, außergewöhnliche Formate oder nicht standardmäßige Layouts. Wo Serienlösungen wie CSF Professional oder CSF Industrial an ihre Grenzen stoßen — etwa bei überlangen Platten, besonders schweren oder dünnen Materialien, Arbeitsplatten mit Ölfinish oder bei beengten Platzverhältnissen mit vielen Säulen — entwickelt Barbaric gemeinsam mit dem Kunden eine maßgeschneiderte Lösung. Typische Sonderanwendungen sind Lager für Massivholzplatten, Mineralwerkstoff, HPL-Schichtstoff, Glas oder Verbundmaterialien. Auch hybride Kombinationen aus Flächenlager und Schwenkkran oder mehrere kleine Lagerzonen mit gemeinsamem Handlingsystem werden realisiert. Asamer koordiniert Sonderprojekte zwischen Kunde, Barbaric-Engineering und Zulieferern — für Tschechien, Slowakei und Ungarn inklusive Projektleitung, Installation und Serviceanschluss.`,
      en: `Barbaric special applications in the panel storage area cover individually designed storage installations for special materials, unusual formats or non-standard layouts. Where series solutions like CSF Professional or CSF Industrial reach their limits — for example with extra-long panels, especially heavy or thin materials, worktops with oil finish, or in cramped spaces with many columns — Barbaric develops a tailored solution together with the customer. Typical special applications are storage systems for solid wood panels, mineral material, HPL laminate, glass or composite materials. Hybrid combinations of panel storage and slewing crane, or several small storage zones with a shared handling system, are also realised. Asamer coordinates special projects between customer, Barbaric engineering and suppliers — for Czech Republic, Slovakia and Hungary including project management, installation and service connection.`,
      cz: `Barbaric speciální aplikace v oblasti skladů desek zahrnují individuálně navržené skladovací zařízení pro speciální materiály, neobvyklé formáty nebo nestandardní uspořádání. Tam, kde sériová řešení jako CSF Professional nebo CSF Industrial narážejí na své hranice — například u zvlášť dlouhých desek, obzvlášť těžkých nebo tenkých materiálů, pracovních desek s olejovým finishem nebo v úzkých prostorech s mnoha sloupy — vyvíjí Barbaric s klientem řešení na míru. Typické speciální aplikace jsou sklady pro masivní dřevěné desky, minerální materiál, HPL lamináty, sklo nebo kompozitní materiály. Realizují se také hybridní kombinace plošného skladu a otočného jeřábu nebo několik malých skladových zón se společným manipulačním systémem. Asamer koordinuje speciální projekty mezi zákazníkem, Barbaric engineeringem a dodavateli — pro Českou republiku, Slovensko a Maďarsko včetně projektového vedení, instalace a servisního napojení.`,
      sk: `Barbaric špeciálne aplikácie v oblasti skladov dosiek zahŕňajú individuálne navrhnuté skladovacie zariadenia pre špeciálne materiály, nezvyčajné formáty alebo neštandardné usporiadania. Tam, kde sériové riešenia ako CSF Professional alebo CSF Industrial narážajú na svoje hranice — napríklad pri obzvlášť dlhých doskách, obzvlášť ťažkých alebo tenkých materiáloch, pracovných doskách s olejovým finishom alebo v stiesnených priestoroch s mnohými stĺpmi — Barbaric vyvíja s klientom riešenie na mieru. Typické špeciálne aplikácie sú sklady pre masívne drevené dosky, minerálny materiál, HPL lamináty, sklo alebo kompozitné materiály. Realizujú sa aj hybridné kombinácie plošného skladu a otočného žeriavu alebo niekoľko malých skladových zón so spoločným manipulačným systémom. Asamer koordinuje špeciálne projekty medzi zákazníkom, Barbaric engineeringom a dodávateľmi — pre Českú republiku, Slovensko a Maďarsko vrátane projektového vedenia, inštalácie a servisného pripojenia.`,
      hu: `A Barbaric egyedi alkalmazásai a lapraktár területen egyedileg tervezett tárolóberendezéseket foglalnak magukban speciális anyagokhoz, szokatlan formátumokhoz vagy nem szabványos elrendezésekhez. Ahol az olyan sorozatmegoldások, mint a CSF Professional vagy a CSF Industrial elérik határaikat — például extra hosszú lapoknál, különösen nehéz vagy vékony anyagoknál, olajos kikészítésű munkalapoknál vagy sok oszlopot tartalmazó szűk terekben —, a Barbaric az ügyféllel közösen fejleszti ki a testreszabott megoldást. Tipikus egyedi alkalmazások a tömör fa lapok, ásványi anyagok, HPL laminátumok, üveg vagy kompozit anyagok tárolói. Lapraktár és forgódaru hibrid kombinációi, illetve több kis tárolózóna közös anyagmozgató rendszerrel szintén megvalósíthatók. Az Asamer a Csehország, Szlovákia és Magyarország területén megvalósuló különleges projekteket koordinálja az ügyfél, a Barbaric engineering és a beszállítók között — projektvezetéssel, telepítéssel és szervizcsatlakozással együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für nicht standardmäßige Materialien', en: 'For non-standard materials', cz: 'Pro nestandardní materiály', sk: 'Pre neštandardné materiály', hu: 'Nem szabványos anyagokhoz' },
        body: {
          de: 'Glas, Natursteinplatten, Mineralwerkstoff oder besonders dünne Platten benötigen angepasste Sauggreifer und individuelle Steuerungsparameter. Barbaric entwickelt dazu eigens ausgelegte Vakuumsysteme und prüft im Testbetrieb die sichere Handhabung jedes Materialtyps.',
          en: 'Glass, stone panels, mineral material or especially thin panels require adapted suction grippers and individual control parameters. Barbaric develops custom-designed vacuum systems and verifies safe handling of each material type in test operation.',
          cz: 'Sklo, kamenné desky, minerální materiál nebo obzvlášť tenké desky vyžadují upravené přísavkové úchopy a individuální parametry řízení. Barbaric pro ně vyvíjí speciálně navržené vakuové systémy a ve zkušebním provozu ověřuje bezpečnou manipulaci s každým typem materiálu.',
          sk: 'Sklo, kamenné dosky, minerálny materiál alebo obzvlášť tenké dosky vyžadujú upravené prísavkové úchopy a individuálne parametre riadenia. Barbaric pre ne vyvíja špeciálne navrhnuté vákuové systémy a v skúšobnej prevádzke overuje bezpečnú manipuláciu s každým typom materiálu.',
          hu: 'Az üveg, a kőlapok, az ásványi anyagok vagy a különösen vékony lapok testreszabott vákuumos megfogókat és egyedi vezérlési paramétereket igényelnek. A Barbaric ezekhez egyedileg tervezett vákuumrendszereket fejleszt, és próbaüzemben ellenőrzi minden anyagtípus biztonságos kezelését.',
        },
      },
      {
        heading: { de: 'Für komplexe Hallenlayouts', en: 'For complex hall layouts', cz: 'Pro složitá rozvržení haly', sk: 'Pre zložité rozvrhnutia haly', hu: 'Összetett csarnok-elrendezésekhez' },
        body: {
          de: 'Hallen mit vielen Stützen, Höhenunterschieden, angrenzenden Produktionsinseln oder nicht rechteckigen Grundrissen erfordern individuelle Kran-Geometrien. Barbaric konstruiert Fachwerk-Tragwerke und Schienenverläufe passgenau — Standardmaße gelten hier nicht. Asamer-Projektingenieure stimmen das Layout mit Ihren Prozessen und Ihrem Baukörper ab.',
          en: 'Halls with many columns, height differences, adjacent production islands or non-rectangular floor plans require individual crane geometries. Barbaric constructs truss structures and rail routes to fit — standard dimensions do not apply here. Asamer project engineers align the layout with your processes and building structure.',
          cz: 'Haly s mnoha sloupy, výškovými rozdíly, navazujícími výrobními ostrovy nebo neobdélníkovými půdorysy vyžadují individuální geometrie jeřábů. Barbaric konstruuje příhradové nosníky a kolejnicové průběhy přesně — standardní rozměry zde neplatí. Projektoví inženýři Asamer sladí rozvržení s vašimi procesy a stavební konstrukcí.',
          sk: 'Haly s mnohými stĺpmi, výškovými rozdielmi, nadväzujúcimi výrobnými ostrovmi alebo neobdĺžnikovými pôdorysmi vyžadujú individuálne geometrie žeriavov. Barbaric konštruuje priehradové nosníky a koľajnicové priebehy presne — štandardné rozmery tu neplatia. Projektoví inžinieri Asamer zladia rozvrhnutie s vašimi procesmi a stavebnou konštrukciou.',
          hu: 'A sok oszlopot, szintkülönbséget, csatlakozó gyártási szigetet vagy nem téglalap alakú alaprajzot tartalmazó csarnokok egyedi daru-geometriát igényelnek. A Barbaric a rácsos tartószerkezeteket és a sínvezetéket pontosan tervezi — a szabványméretek itt nem érvényesek. Az Asamer projektmérnökei az elrendezést a folyamatokkal és az épületszerkezettel egyeztetik.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Sonderanwendungen sind immer dann der richtige Weg, wenn Sie atypische Materialien handhaben oder Ihre Halle keine Standardlösung zulässt. Rechnen Sie mit einer längeren Planungsphase (drei bis sechs Monate) und einer individuellen Preiskalkulation. Asamer begleitet Sie mit Projektleitung und erfahrenen Barbaric-Ingenieuren durch den gesamten Prozess — von der Machbarkeitsstudie bis zur Inbetriebnahme.',
      en: 'Special applications are the right path whenever you handle atypical materials or your hall does not allow a standard solution. Expect a longer planning phase (three to six months) and individual price calculation. Asamer guides you with project management and experienced Barbaric engineers through the entire process — from feasibility study to commissioning.',
      cz: 'Speciální aplikace jsou správnou cestou vždy, když manipulujete s atypickými materiály nebo vaše hala neumožňuje standardní řešení. Počítejte s delší fází plánování (tři až šest měsíců) a individuální cenovou kalkulací. Asamer vás s projektovým vedením a zkušenými Barbaric inženýry provede celým procesem — od studie proveditelnosti po uvedení do provozu.',
      sk: 'Špeciálne aplikácie sú správnou cestou vždy, keď manipulujete s atypickými materiálmi alebo vaša hala neumožňuje štandardné riešenie. Počítajte s dlhšou fázou plánovania (tri až šesť mesiacov) a individuálnou cenovou kalkuláciou. Asamer vás s projektovým vedením a skúsenými Barbaric inžiniermi prevedie celým procesom — od štúdie realizovateľnosti po uvedenie do prevádzky.',
      hu: 'Az egyedi alkalmazások mindig akkor jelentik a megfelelő utat, ha atipikus anyagokat kezel, vagy csarnoka nem teszi lehetővé a szabványos megoldást. Számoljon hosszabb tervezési fázissal (három-hat hónap) és egyedi árkalkulációval. Az Asamer projektvezetéssel és tapasztalt Barbaric mérnökökkel vezeti végig a teljes folyamaton — a megvalósíthatósági tanulmánytól az üzembe helyezésig.',
    },
    faq: [
      {
        question: { de: 'Wie läuft ein Sonderprojekt ab?', en: 'How does a special project proceed?', cz: 'Jak probíhá speciální projekt?', sk: 'Ako prebieha špeciálny projekt?', hu: 'Hogyan zajlik egy egyedi projekt?' },
        answer: {
          de: 'Start mit Besichtigung und Anforderungsanalyse; dann Grobkonzept mit Kostenschätzung. Nach Auftragsvergabe folgt die Detailplanung (3–6 Monate), Fertigung und Vormontage im Barbaric-Werk, anschließend Installation vor Ort. Asamer übernimmt die Projektkoordination für CZ/SK/HU-Kunden.',
          en: 'Starts with on-site inspection and requirement analysis, followed by a rough concept with cost estimate. After order placement, detailed engineering (3–6 months), manufacturing and pre-assembly in the Barbaric plant, then on-site installation. Asamer handles project coordination for CZ/SK/HU customers.',
          cz: 'Start prohlídkou a analýzou požadavků; pak hrubý koncept s odhadem nákladů. Po zadání zakázky následuje detailní projektování (3–6 měsíců), výroba a předmontáž v závodu Barbaric, poté instalace na místě. Asamer přebírá koordinaci projektu pro zákazníky v CZ/SK/HU.',
          sk: 'Štart obhliadkou a analýzou požiadaviek; potom hrubý koncept s odhadom nákladov. Po zadaní zákazky nasleduje detailné projektovanie (3–6 mesiacov), výroba a predmontáž v závode Barbaric, potom inštalácia na mieste. Asamer preberá koordináciu projektu pre zákazníkov v CZ/SK/HU.',
          hu: 'Kezdés helyszíni szemlével és igényelemzéssel; majd durva koncepció költségbecsléssel. A megrendelést követi a részletes tervezés (3–6 hónap), gyártás és előszerelés a Barbaric gyárban, majd helyszíni telepítés. Az Asamer végzi a projektkoordinációt a CZ/SK/HU ügyfelek számára.',
        },
      },
      {
        question: { de: 'Ist eine Sonderanwendung deutlich teurer?', en: 'Is a special application significantly more expensive?', cz: 'Je speciální aplikace výrazně dražší?', sk: 'Je špeciálna aplikácia výrazne drahšia?', hu: 'Jelentősen drágább egy egyedi alkalmazás?' },
        answer: {
          de: 'Sonderanwendungen liegen üblicherweise 15–30 % über vergleichbaren Serienlösungen, da Konstruktion und Teile individuell gefertigt werden. Dafür passt die Anlage exakt zu Ihrem Prozess — was bei Standardlösungen oft Kompromisse nach sich zieht.',
          en: 'Special applications typically cost 15–30 % more than comparable series solutions because design and parts are manufactured individually. In return, the system fits your process precisely — whereas standard solutions often entail compromises.',
          cz: 'Speciální aplikace obvykle stojí o 15–30 % více než srovnatelná sériová řešení, protože konstrukce a díly se vyrábějí individuálně. Zato zařízení přesně odpovídá vašemu procesu — standardní řešení často přinášejí kompromisy.',
          sk: 'Špeciálne aplikácie zvyčajne stoja o 15–30 % viac ako porovnateľné sériové riešenia, pretože konštrukcia a diely sa vyrábajú individuálne. Zato zariadenie presne zodpovedá vášmu procesu — štandardné riešenia často prinášajú kompromisy.',
          hu: 'Az egyedi alkalmazások általában 15–30 %-kal kerülnek többe a hasonló sorozatmegoldásoknál, mivel a tervezés és az alkatrészek egyedileg készülnek. Cserébe a rendszer pontosan illeszkedik a folyamatához — a szabványos megoldásoknál gyakran kompromisszumokra van szükség.',
        },
      },
      {
        question: { de: 'Welche Referenzen für Sonderanwendungen gibt es?', en: 'What references are there for special applications?', cz: 'Jaké reference pro speciální aplikace existují?', sk: 'Aké referencie pre špeciálne aplikácie existujú?', hu: 'Milyen referenciák vannak egyedi alkalmazásokra?' },
        answer: {
          de: 'Barbaric hat weltweit über 100 Sonderanwendungen umgesetzt — von Glasplatten-Lagern für Fassadenbauer bis zu Hybridsystemen für Küchenhersteller. Asamer vermittelt auf Anfrage Referenzbesuche bei Bestandskunden in Mitteleuropa.',
          en: 'Barbaric has realised over 100 special applications worldwide — from glass panel storage for façade builders to hybrid systems for kitchen manufacturers. On request, Asamer arranges reference visits with existing customers in Central Europe.',
          cz: 'Barbaric realizoval po celém světě přes 100 speciálních aplikací — od skladů skleněných desek pro fasádní stavitele po hybridní systémy pro výrobce kuchyní. Na vyžádání Asamer zprostředkuje referenční návštěvy u stávajících zákazníků ve střední Evropě.',
          sk: 'Barbaric realizoval po celom svete cez 100 špeciálnych aplikácií — od skladov sklenených dosiek pre fasádnych staviteľov po hybridné systémy pre výrobcov kuchýň. Na vyžiadanie Asamer sprostredkuje referenčné návštevy u existujúcich zákazníkov v strednej Európe.',
          hu: 'A Barbaric világszerte több mint 100 egyedi alkalmazást valósított meg — üveglap-raktáraktól homlokzatépítőknek egészen hibrid rendszerekig konyhagyártóknak. Kérésre az Asamer közép-európai meglévő ügyfelekhez szervez referencialátogatásokat.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  NESTING — nst                                                      */
  /* ------------------------------------------------------------------ */
  'nst': {
    longDescription: {
      de: `Der Barbaric NST Nesting-Picker ist eine kompakte Automatisierungslösung für die Teileentnahme aus Nesting-CNCs. Er richtet sich an Tischlereien und kleinere Möbelbetriebe, die bereits mit Nesting arbeiten, aber nicht die Investitionssumme für einen großen LCV Performance aufbringen wollen. Der NST nimmt die fertig ausgeschnittenen Teile direkt von der CNC-Nesting-Platte ab, vereinzelt sie und legt sie auf einen Stapel- oder Pufferplatz. Die kompakte Bauform passt neben praktisch jede Nesting-CNC — auch in Hallen mit begrenztem Platz. Vakuumsauger, Kamerasystem und CNC-Datenkopplung sind identisch zum größeren Nesting-Picker, nur die Durchsatzrate ist geringer. Asamer bietet den NST als Einstiegsautomatisierung für Nesting-Zellen in CZ, SK und HU inklusive Anbindung an Ihre bestehende CNC.`,
      en: `The Barbaric NST nesting picker is a compact automation solution for part removal from nesting CNCs. It targets joinery shops and smaller furniture operations that already work with nesting but do not want to invest in a larger LCV Performance. The NST picks finished cut parts directly from the CNC nesting panel, separates them and places them on a stacking or buffer area. The compact footprint fits next to practically any nesting CNC — even in halls with limited space. Vacuum suction, camera system and CNC data coupling are identical to the larger nesting picker; only throughput is lower. Asamer offers the NST as entry-level automation for nesting cells in CZ, SK and HU including connection to your existing CNC.`,
      cz: `Barbaric NST nesting picker je kompaktní automatizační řešení pro odběr dílů z nesting CNC. Je určen truhlářstvím a menším nábytkářským provozům, které již pracují s nestingem, ale nechtějí investovat do většího LCV Performance. NST odebírá hotové vyřezané díly přímo z desky nesting CNC, separuje je a ukládá na stohovací nebo pufrovací plochu. Kompaktní konstrukce se vejde vedle prakticky jakékoliv nesting CNC — i v halách s omezeným prostorem. Vakuové přísavky, kamerový systém a datové propojení s CNC jsou totožné s větším nesting pickerem, pouze průchodnost je nižší. Asamer nabízí NST jako vstupní automatizaci pro nesting buňky v CZ, SK a HU včetně napojení na vaše stávající CNC.`,
      sk: `Barbaric NST nesting-picker je kompaktné automatizačné riešenie pre odber dielov z nesting CNC. Je určený pre stolárstvo a menšie nábytkárske prevádzky, ktoré už pracujú s nestingom, ale nechcú investovať do väčšieho LCV Performance. NST odoberá hotové vyrezané diely priamo z dosky nesting CNC, separuje ich a ukladá na stohovaciu alebo pufrovaciu plochu. Kompaktná konštrukcia sa zmestí vedľa prakticky akejkoľvek nesting CNC — aj v halách s obmedzeným priestorom. Vákuové prísavky, kamerový systém a dátové prepojenie s CNC sú zhodné s väčším nesting-pickerom, iba priepustnosť je nižšia. Asamer ponúka NST ako vstupnú automatizáciu pre nesting bunky v CZ, SK a HU vrátane napojenia na vaše existujúce CNC.`,
      hu: `A Barbaric NST nesting-válogató kompakt automatizálási megoldás a nesting CNC-kből történő darabkivételhez. Asztalosműhelyek és kisebb bútorüzemek számára készült, amelyek már nesting technológiával dolgoznak, de nem akarnak nagyobb LCV Performance-ba beruházni. Az NST a kész kivágott darabokat közvetlenül a CNC nesting lapról emeli le, szétválogatja és kötegelő vagy puffer területre helyezi őket. A kompakt felépítés gyakorlatilag bármilyen nesting CNC mellé elfér — még korlátozott helyű csarnokokban is. A vákuumos szívás, kamerarendszer és CNC adatcsatolás megegyezik a nagyobb nesting-válogatóéval, csak az áteresztőképesség alacsonyabb. Az Asamer belépőszintű nesting cella automatizálásként kínálja az NST-t Csehország, Szlovákia és Magyarország számára — a meglévő CNC-hez történő csatlakoztatással együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Tischlereien mit Einstiegsautomatisierung', en: 'For joinery shops starting with automation', cz: 'Pro truhlárny se vstupní automatizací', sk: 'Pre stolárstva so vstupnou automatizáciou', hu: 'Automatizálást kezdő asztalosműhelyeknek' },
        body: {
          de: 'Wer zum ersten Mal über die Teilentnahme aus einer Nesting-CNC automatisieren will, startet am besten mit dem NST. Die Investition ist überschaubar, die Integration einfach — und die Lernkurve für Bediener kurz. Bei steigendem Durchsatz ist später ein Upgrade auf LCV Performance möglich.',
          en: 'Anyone automating part removal from a nesting CNC for the first time starts best with the NST. The investment is manageable, integration is straightforward — and the learning curve for operators is short. As throughput grows, an upgrade to LCV Performance is possible later.',
          cz: 'Kdo poprvé chce automatizovat odběr dílů z nesting CNC, nejlépe začne s NST. Investice je zvládnutelná, integrace jednoduchá — a křivka učení obsluhy krátká. Při rostoucím průtoku je později možný upgrade na LCV Performance.',
          sk: 'Kto prvýkrát chce automatizovať odber dielov z nesting CNC, najlepšie začne s NST. Investícia je zvládnuteľná, integrácia jednoduchá — a krivka učenia obsluhy krátka. Pri rastúcom priepustnosti je neskôr možný upgrade na LCV Performance.',
          hu: 'Aki először automatizálja a darabok kivételét egy nesting CNC-ből, annak az NST a legjobb kezdés. A beruházás kezelhető, az integráció egyszerű — és a kezelők tanulási görbéje rövid. Növekvő áteresztőképesség esetén később lehetséges az LCV Performance-ra váltás.',
        },
      },
      {
        heading: { de: 'Für begrenzte Hallenflächen', en: 'For limited hall footprints', cz: 'Pro omezené plochy haly', sk: 'Pre obmedzené plochy haly', hu: 'Korlátozott csarnokterületekhez' },
        body: {
          de: 'In kleinen oder bereits dicht belegten Hallen ist der NST oft die einzig machbare Nesting-Automatisierung. Der Footprint liegt deutlich unter dem des LCV Performance, eine L-Anordnung neben der CNC ist in den meisten Betrieben ohne Umbau möglich.',
          en: 'In small or already crowded halls, the NST is often the only feasible nesting automation. The footprint is significantly smaller than the LCV Performance; an L-shape arrangement next to the CNC is possible in most operations without rebuild.',
          cz: 'V malých nebo již hustě obsazených halách je NST často jedinou proveditelnou nesting automatizací. Plocha je výrazně menší než u LCV Performance, uspořádání do L vedle CNC je ve většině provozů možné bez přestavby.',
          sk: 'V malých alebo už husto obsadených halách je NST často jedinou uskutočniteľnou nesting automatizáciou. Plocha je výrazne menšia ako pri LCV Performance, usporiadanie do L vedľa CNC je vo väčšine prevádzok možné bez prestavby.',
          hu: 'Kis vagy már zsúfolt csarnokokban az NST gyakran az egyetlen megvalósítható nesting automatizálás. Az alapterület lényegesen kisebb, mint az LCV Performance esetében; az L-alakú elrendezés a CNC mellett a legtöbb üzemben átalakítás nélkül megvalósítható.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Der NST ist die wirtschaftliche Wahl, wenn Sie Ihre Nesting-CNC bislang manuell entladen und mit einer Tagesleistung unter 200 Nesting-Durchgängen arbeiten. Bei höherem Durchsatz oder Mehrschichtbetrieb ist LCV Performance langfristig die bessere Investition. Asamer berät Sie, welches System zu Ihrer Produktionsgröße passt.',
      en: 'The NST is the economical choice if you still unload your nesting CNC manually and operate with daily output below 200 nesting cycles. At higher throughput or multi-shift operation, the LCV Performance is the better long-term investment. Asamer advises which system suits your production size.',
      cz: 'NST je ekonomickou volbou, pokud svou nesting CNC dosud vykládáte ručně a pracujete s denním výkonem pod 200 nesting cyklů. Při vyšším průtoku nebo vícesmenném provozu je LCV Performance dlouhodobě lepší investicí. Asamer vám poradí, který systém odpovídá velikosti vaší výroby.',
      sk: 'NST je ekonomickou voľbou, ak svoju nesting CNC doteraz vykladáte ručne a pracujete s denným výkonom pod 200 nesting cyklov. Pri vyššej priepustnosti alebo viaczmennej prevádzke je LCV Performance dlhodobo lepšou investíciou. Asamer vám poradí, ktorý systém zodpovedá veľkosti vašej výroby.',
      hu: 'Az NST a gazdaságos választás, ha a nesting CNC-t eddig manuálisan rakodta ki, és napi 200 nesting ciklus alatti teljesítménnyel dolgozik. Magasabb áteresztőképesség vagy többműszakos üzem esetén az LCV Performance hosszú távon jobb beruházás. Az Asamer tanácsot ad, hogy melyik rendszer illik az Ön gyártási méretéhez.',
    },
    faq: [
      {
        question: { de: 'Wie groß ist der Unterschied zum LCV Performance?', en: 'How big is the difference to the LCV Performance?', cz: 'Jak velký je rozdíl oproti LCV Performance?', sk: 'Aký veľký je rozdiel oproti LCV Performance?', hu: 'Mekkora a különbség az LCV Performance-hoz képest?' },
        answer: {
          de: 'Der NST hat etwa 40–60 % des Durchsatzes eines LCV Performance und einen deutlich kleineren Footprint. Dafür kostet er nur rund die Hälfte. Funktional-technisch sind beide Systeme vergleichbar.',
          en: 'The NST reaches about 40–60 % of LCV Performance throughput and has a significantly smaller footprint. In return, it costs only roughly half. Functionally and technically, the two systems are comparable.',
          cz: 'NST má zhruba 40–60 % průchodnosti LCV Performance a výrazně menší plochu. Stojí však pouze přibližně polovinu. Funkčně a technicky jsou oba systémy srovnatelné.',
          sk: 'NST má zhruba 40–60 % priepustnosti LCV Performance a výrazne menšiu plochu. Stojí však iba približne polovicu. Funkčne a technicky sú oba systémy porovnateľné.',
          hu: 'Az NST az LCV Performance áteresztőképességének mintegy 40–60 %-át éri el, és lényegesen kisebb alapterületű. Cserébe csak nagyjából a feléért. Funkcionálisan és technikailag a két rendszer összehasonlítható.',
        },
      },
      {
        question: { de: 'Kann der NST später zum LCV aufgerüstet werden?', en: 'Can the NST be upgraded to an LCV later?', cz: 'Lze NST později upgradovat na LCV?', sk: 'Dá sa NST neskôr upgradovať na LCV?', hu: 'Lehet később az NST-t LCV-re fejleszteni?' },
        answer: {
          de: 'Nicht als direkter Umbau — der NST bleibt in seiner Klasse. Wer später mehr Durchsatz braucht, kauft zusätzlich einen LCV und nutzt den NST weiter für eine zweite CNC oder Pufferzwecke. Bestehende Softwareintegration lässt sich übernehmen.',
          en: 'Not as a direct conversion — the NST stays in its class. If you later need more throughput, you add an LCV and keep using the NST for a second CNC or buffer tasks. Existing software integration can be reused.',
          cz: 'Ne jako přímá přestavba — NST zůstává ve své třídě. Kdo později potřebuje vyšší průtok, dokoupí LCV a NST dále využívá pro druhou CNC nebo pufrovací účely. Stávající softwarovou integraci lze přenést.',
          sk: 'Nie ako priama prestavba — NST zostáva vo svojej triede. Kto neskôr potrebuje vyšší priepustnosť, dokúpi LCV a NST ďalej využíva pre druhú CNC alebo pufrovacie účely. Existujúca softvérová integrácia sa dá prevziať.',
          hu: 'Közvetlen átalakításként nem — az NST a saját osztályában marad. Aki később nagyobb áteresztőképességet igényel, egy LCV-t vásárol hozzá, és az NST-t egy másik CNC-hez vagy puffer feladatokhoz használja tovább. A meglévő szoftverintegráció átvehető.',
        },
      },
      {
        question: { de: 'Wie kompakt ist der NST wirklich?', en: 'How compact is the NST really?', cz: 'Jak je NST skutečně kompaktní?', sk: 'Aký je NST skutočne kompaktný?', hu: 'Mennyire kompakt valójában az NST?' },
        answer: {
          de: 'Typische Stellfläche liegt bei etwa 4 × 3 m — ausreichend für Teile bis zu üblichen Möbelformaten. Das passt in jede Tischlerei-Halle mit einer Nesting-CNC. Die exakte Auslegung richtet sich nach Ihren Maximalformaten.',
          en: 'Typical footprint is around 4 × 3 m — sufficient for parts up to common furniture formats. This fits into any joinery hall with a nesting CNC. Exact dimensioning depends on your maximum formats.',
          cz: 'Typická plocha je zhruba 4 × 3 m — dostatečná pro díly do běžných nábytkových formátů. To se vejde do jakékoliv truhlářské haly s nesting CNC. Přesné dimenzování se řídí vašimi maximálními formáty.',
          sk: 'Typická plocha je zhruba 4 × 3 m — dostatočná pre diely do bežných nábytkárskych formátov. To sa zmestí do akejkoľvek stolárskej haly s nesting CNC. Presné dimenzovanie sa riadi vašimi maximálnymi formátmi.',
          hu: 'A tipikus alapterület körülbelül 4 × 3 m — elegendő a szokásos bútorformátumokig terjedő darabokhoz. Ez bármelyik asztalosműhely-csarnokba befér nesting CNC-vel. A pontos méretezés az Ön maximális formátumaitól függ.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  RETURN — rts-compact                                               */
  /* ------------------------------------------------------------------ */
  'rts-compact': {
    longDescription: {
      de: `Das Barbaric RTS Compact ist ein platzsparendes Rückführsystem für Kantenanleimmaschinen in kleinen Tischlereien und Handwerksbetrieben. Es übernimmt die gleiche Aufgabe wie das größere RTS Professional — automatische Rückführung bearbeiteter Werkstücke zum Bediener — passt aber in Hallen mit sehr wenig freiem Platz. Die kompakte Bauweise verkürzt die Rückführlänge deutlich; optional lässt sich das System in U-Form um die Kantenleimmaschine legen. Für Tischlereien mit ein- bis zweihundert Teilen pro Tag und einer Fachkraft an der Maschine ist das RTS Compact die wirtschaftliche Einstiegsautomatisierung: Es befreit den Bediener von Wegezeiten und erlaubt die Einmannbedienung der Kantenleimmaschine. Asamer liefert das RTS Compact als autorisierter Barbaric-Händler für CZ, SK und HU inklusive Einmessung, Anschluss und Schulung.`,
      en: `The Barbaric RTS Compact is a space-saving return system for edgebanders in small joinery shops and trade operations. It performs the same task as the larger RTS Professional — automatic return of processed workpieces to the operator — but fits into halls with very little free space. The compact construction significantly shortens return length; optionally the system can be arranged in a U-shape around the edgebander. For joinery shops with one to two hundred parts per day and a single skilled worker at the machine, the RTS Compact is the economical entry-level automation: it relieves the operator from walking and allows one-man operation of the edgebander. Asamer supplies the RTS Compact as authorized Barbaric dealer for CZ, SK and HU — including alignment, connection and training.`,
      cz: `Barbaric RTS Compact je prostorově úsporný návratový systém pro olepovačky hran v malých truhlářstvích a řemeslných provozech. Plní stejný úkol jako větší RTS Professional — automatický návrat zpracovaných obrobků k obsluze — ale vejde se i do hal s velmi malým volným prostorem. Kompaktní konstrukce výrazně zkracuje délku návratu; volitelně lze systém uspořádat do tvaru U kolem olepovačky. Pro truhlářství se sto až dvěma sty díly denně a jednou kvalifikovanou silou u stroje je RTS Compact ekonomickou vstupní automatizací: osvobozuje obsluhu od chůze a umožňuje jednomužnou obsluhu olepovačky. Asamer dodává RTS Compact jako autorizovaný prodejce Barbaric pro CZ, SK a HU — včetně vyměření, připojení a školení.`,
      sk: `Barbaric RTS Compact je priestorovo úsporný návratový systém pre olepovačky hrán v malých stolárstvach a remeselných prevádzkach. Plní rovnakú úlohu ako väčší RTS Professional — automatický návrat spracovaných obrobkov k obsluhe — ale zmestí sa aj do hál s veľmi malým voľným priestorom. Kompaktná konštrukcia výrazne skracuje dĺžku návratu; voliteľne je možné systém usporiadať do tvaru U okolo olepovačky. Pre stolárstva so sto až dvomi sto dielmi denne a jednou kvalifikovanou silou pri stroji je RTS Compact ekonomickou vstupnou automatizáciou: oslobodzuje obsluhu od chôdze a umožňuje jednomužnú obsluhu olepovačky. Asamer dodáva RTS Compact ako autorizovaný predajca Barbaric pre CZ, SK a HU — vrátane vymerania, pripojenia a školenia.`,
      hu: `A Barbaric RTS Compact egy helytakarékos visszavezető rendszer élzárógépekhez kis asztalosműhelyekben és kézműves üzemekben. Ugyanazt a feladatot látja el, mint a nagyobb RTS Professional — a megmunkált munkadarabok automatikus visszavezetését a kezelőhöz —, de olyan csarnokokba is befér, ahol nagyon kevés a szabad hely. A kompakt kialakítás jelentősen lerövidíti a visszavezető hosszt; a rendszer opcionálisan U-alakban helyezhető el az élzárógép körül. Napi száz-kétszáz darabbal és egyetlen szakképzett kezelővel dolgozó asztalosműhelyek számára az RTS Compact gazdaságos belépőszintű automatizálás: tehermentesíti a kezelőt a gyaloglástól, és lehetővé teszi az élzárógép egyszemélyes kezelését. Az Asamer hivatalos Barbaric viszonteladóként szállítja az RTS Compact-ot Csehország, Szlovákia és Magyarország számára — beméréssel, csatlakoztatással és képzéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für kleine Tischlereien', en: 'For small joinery shops', cz: 'Pro malé truhlárny', sk: 'Pre malé stolárstva', hu: 'Kis asztalosműhelyeknek' },
        body: {
          de: 'Tischlereien mit drei bis zehn Mitarbeitern profitieren besonders vom RTS Compact: Die eine Fachkraft an der Kantenleimmaschine wird spürbar entlastet, gleichzeitig bleibt die Anschaffung überschaubar. Amortisation typischerweise innerhalb von 18 Monaten durch eingesparte Arbeitszeit.',
          en: 'Joinery shops with three to ten employees benefit particularly from the RTS Compact: the single skilled worker at the edgebander is noticeably relieved while the investment stays manageable. Payback typically within 18 months through saved working time.',
          cz: 'Truhlárny se třemi až deseti zaměstnanci mají obzvlášť prospěch z RTS Compact: jediná kvalifikovaná síla u olepovačky je viditelně odlehčena, zatímco investice zůstává zvládnutelná. Návratnost obvykle do 18 měsíců díky ušetřenému pracovnímu času.',
          sk: 'Stolárstva s tromi až desiatimi zamestnancami majú obzvlášť prospech z RTS Compact: jediná kvalifikovaná sila pri olepovačke je viditeľne odľahčená, zatiaľ čo investícia zostáva zvládnuteľná. Návratnosť zvyčajne do 18 mesiacov vďaka ušetrenému pracovnému času.',
          hu: 'A három-tíz munkavállalóval dolgozó asztalosműhelyek különösen profitálnak az RTS Compact-ból: az élzárógépnél dolgozó egyetlen szakember érezhetően tehermentesítve van, miközben a beruházás kezelhető marad. A megtérülés tipikusan 18 hónapon belül következik be a megtakarított munkaidő révén.',
        },
      },
      {
        heading: { de: 'Für Hallen mit eingeschränkter Stellfläche', en: 'For halls with limited footprint', cz: 'Pro haly s omezenou plochou', sk: 'Pre haly s obmedzenou plochou', hu: 'Korlátozott területű csarnokokhoz' },
        body: {
          de: 'Wo für eine klassische lineare Rückführung der Platz fehlt, bietet das RTS Compact eine U- oder L-Anordnung auf wenigen Quadratmetern. Der Footprint liegt typischerweise bei 1,5–2 Metern Rückführlänge. Damit bleibt ausreichend Freifläche für Material und Arbeitstisch.',
          en: 'Where there is no space for a classic linear return, the RTS Compact offers a U- or L-shape arrangement on just a few square metres. Footprint is typically 1.5–2 metres return length. This leaves sufficient free space for material and worktable.',
          cz: 'Kde chybí místo pro klasický lineární návrat, nabízí RTS Compact uspořádání do U nebo L na pár čtverečních metrech. Plocha je obvykle 1,5–2 metry délky návratu. To ponechá dostatek volné plochy pro materiál a pracovní stůl.',
          sk: 'Kde chýba miesto pre klasický lineárny návrat, ponúka RTS Compact usporiadanie do U alebo L na pár štvorcových metroch. Plocha je zvyčajne 1,5–2 metre dĺžky návratu. To ponechá dostatok voľnej plochy pre materiál a pracovný stôl.',
          hu: 'Ahol nincs hely a klasszikus lineáris visszavezetőhöz, az RTS Compact U- vagy L-alakú elrendezést kínál néhány négyzetméteren. A helyigény jellemzően 1,5–2 méter visszavezető hossz. Így elegendő szabad terület marad az anyagnak és a munkaasztalnak.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Wählen Sie das RTS Compact, wenn Sie in einem kleinen Betrieb bis etwa 200 Teile pro Tag fahren oder sehr wenig Platz in Ihrer Halle haben. Für mittleren Durchsatz ist das RTS Professional die richtige Wahl; für industrielle Kantenleimer im Mehrschichtbetrieb das RTS Industrial. Asamer zeigt Ihnen vor Ort, welche Ausführung zu Ihren Gegebenheiten passt.',
      en: 'Choose the RTS Compact if you run a small shop with up to about 200 parts per day or have very limited floor space. For medium throughput, the RTS Professional is the right choice; for industrial edgebanders in multi-shift operation, the RTS Industrial. Asamer shows you on-site which version suits your conditions.',
      cz: 'Zvolte RTS Compact, pokud provozujete malý provoz do přibližně 200 dílů denně nebo máte velmi málo místa v hale. Pro střední průtok je správnou volbou RTS Professional; pro průmyslové olepovačky ve vícesmenném provozu RTS Industrial. Asamer vám na místě ukáže, která varianta odpovídá vašim podmínkám.',
      sk: 'Zvoľte RTS Compact, ak prevádzkujete malú prevádzku do približne 200 dielov denne alebo máte veľmi málo miesta v hale. Pre stredný priepustnosti je správnou voľbou RTS Professional; pre priemyselné olepovačky vo viaczmennej prevádzke RTS Industrial. Asamer vám na mieste ukáže, ktorá verzia zodpovedá vašim podmienkam.',
      hu: 'Válassza az RTS Compact-ot, ha kis üzemet működtet napi 200 darab körüli mennyiséggel, vagy nagyon kevés hely van a csarnokban. Közepes áteresztőképességhez az RTS Professional a megfelelő választás; többműszakos üzemű ipari élzárógépekhez az RTS Industrial. Az Asamer helyben mutatja meg, hogy melyik változat illik az Ön körülményeihez.',
    },
    faq: [
      {
        question: { de: 'Passt das RTS Compact zu meiner Kantenleimmaschine?', en: 'Does the RTS Compact fit my edgebander?', cz: 'Hodí se RTS Compact k mé olepovačce?', sk: 'Hodí sa RTS Compact k mojej olepovačke?', hu: 'Illik az RTS Compact az élzárógépemhez?' },
        answer: {
          de: 'Das RTS Compact ist mit Kantenleimmaschinen von OTT, Homag, Felder und den meisten anderen Herstellern kompatibel. Asamer prüft die Schnittstelle anhand Ihrer Maschinendaten vorab — meist ist eine Standardintegration möglich.',
          en: 'The RTS Compact is compatible with edgebanders from OTT, Homag, Felder and most other manufacturers. Asamer verifies the interface based on your machine data in advance — standard integration is usually possible.',
          cz: 'RTS Compact je kompatibilní s olepovačkami hran od OTT, Homag, Felder a většiny dalších výrobců. Asamer ověří rozhraní podle dat vašeho stroje předem — obvykle je možná standardní integrace.',
          sk: 'RTS Compact je kompatibilný s olepovačkami hrán od OTT, Homag, Felder a väčšiny ostatných výrobcov. Asamer overí rozhranie podľa dát vášho stroja vopred — zvyčajne je možná štandardná integrácia.',
          hu: 'Az RTS Compact kompatibilis OTT, Homag, Felder és a legtöbb más gyártó élzárógépeivel. Az Asamer az Ön gépadatai alapján előzetesen ellenőrzi a csatlakozási felületet — általában szabványos integráció lehetséges.',
        },
      },
      {
        question: { de: 'Kann das RTS Compact später erweitert werden?', en: 'Can the RTS Compact be expanded later?', cz: 'Lze RTS Compact později rozšířit?', sk: 'Dá sa RTS Compact neskôr rozšíriť?', hu: 'Bővíthető később az RTS Compact?' },
        answer: {
          de: 'Die Rückführlänge lässt sich bis zu einem gewissen Grad verlängern. Wenn Sie mittelfristig auf deutlich höheren Durchsatz gehen, empfehlen wir direkt das RTS Professional — ein Umbau vom Compact ist möglich, aber nicht immer wirtschaftlich.',
          en: 'The return length can be extended to a certain extent. If you plan for significantly higher throughput in the medium term, we recommend the RTS Professional directly — conversion from the Compact is possible but not always economical.',
          cz: 'Délka návratu se dá do určité míry prodloužit. Pokud střednědobě plánujete výrazně vyšší průtok, doporučujeme rovnou RTS Professional — přestavba z Compactu je možná, ale ne vždy ekonomická.',
          sk: 'Dĺžka návratu sa dá do určitej miery predĺžiť. Ak strednodobo plánujete výrazne vyšší priepustnosti, odporúčame rovno RTS Professional — prestavba z Compactu je možná, ale nie vždy ekonomická.',
          hu: 'A visszavezető hossz bizonyos mértékig meghosszabbítható. Ha középtávon lényegesen nagyobb áteresztőképességet tervez, közvetlenül az RTS Professional-t ajánljuk — a Compact átalakítása lehetséges, de nem mindig gazdaságos.',
        },
      },
      {
        question: { de: 'Wie lange dauert die Installation?', en: 'How long does installation take?', cz: 'Jak dlouho trvá instalace?', sk: 'Ako dlho trvá inštalácia?', hu: 'Meddig tart a telepítés?' },
        answer: {
          de: 'Typische Montage- und Einmesszeit liegt bei 2–4 Tagen — inklusive Anschluss an die Kantenleimmaschine und Bedienerschulung. Die laufende Produktion wird dabei nur an einem bis zwei Tagen pausiert.',
          en: 'Typical assembly and alignment time is 2–4 days — including connection to the edgebander and operator training. Ongoing production is paused for only one or two days.',
          cz: 'Typická doba montáže a vyměření je 2–4 dny — včetně napojení na olepovačku a školení obsluhy. Běžná výroba je přitom pozastavena pouze jeden až dva dny.',
          sk: 'Typická doba montáže a vymerania je 2–4 dni — vrátane napojenia na olepovačku a školenia obsluhy. Bežná výroba je pritom pozastavená iba jeden až dva dni.',
          hu: 'A tipikus szerelési és beállítási idő 2–4 nap — az élzárógéphez történő csatlakoztatással és a kezelői képzéssel együtt. A folyamatos termelés eközben csak egy-két napig szünetel.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  RETURN — rts-industrial                                            */
  /* ------------------------------------------------------------------ */
  'rts-industrial': {
    longDescription: {
      de: `Das Barbaric RTS Industrial ist ein Hochleistungs-Rückführsystem für den industriellen Dauerbetrieb an schnellen Kantenleimmaschinen. Es ist für mehrschichtige Produktionen in Möbelwerken, Bauelementefertigung oder bei großen Zulieferern konzipiert — mit Vorschubgeschwindigkeiten bis 60 m/min und Taktzeiten, die auch anspruchsvollsten Kantenleimern gewachsen sind. Das RTS Industrial transportiert Werkstücke nicht nur zurück, sondern sortiert sie optional auftragsweise, legt sie auf Puffer ab oder übergibt direkt an nachfolgende Maschinen wie Bohrautomaten oder Lackierlinien. Die robuste Konstruktion ist auf Jahre unterbrechungsfreier Produktion ausgelegt; Wartungsintervalle liegen bei 2000 Betriebsstunden. Für industrielle Möbelfertiger ist das RTS Industrial Standard; Asamer realisiert Projekte in CZ, SK und HU inklusive SPS-Anbindung, ERP-Kopplung und Servicevertrag mit Reaktionszeiten unter 24 Stunden.`,
      en: `The Barbaric RTS Industrial is a high-performance return system for industrial continuous operation at fast edgebanders. It is designed for multi-shift production in furniture plants, building element manufacturing or at large suppliers — with feed speeds up to 60 m/min and cycle times capable of keeping up with the most demanding edgebanders. The RTS Industrial not only transports workpieces back but optionally sorts them by order, places them on buffers or hands them directly to downstream machines such as drilling automats or paint lines. The robust construction is designed for years of uninterrupted production; maintenance intervals are 2000 operating hours. For industrial furniture manufacturers, the RTS Industrial is standard; Asamer realises projects in CZ, SK and HU — including PLC integration, ERP coupling and service contract with response times under 24 hours.`,
      cz: `Barbaric RTS Industrial je vysoce výkonný návratový systém pro průmyslový nepřetržitý provoz u rychlých olepovaček hran. Je navržen pro vícesmenné výroby v nábytkářských závodech, výrobě stavebních prvků nebo u velkých dodavatelů — s rychlostmi posuvu do 60 m/min a dobami cyklu schopnými držet krok s nejnáročnějšími olepovačkami. RTS Industrial nejen vrací obrobky zpět, ale volitelně je třídí podle zakázek, ukládá na pufry nebo předává přímo navazujícím strojům, jako jsou vrtací automaty nebo lakovací linky. Robustní konstrukce je navržena na roky nepřetržité výroby; intervaly údržby jsou 2000 provozních hodin. Pro průmyslové výrobce nábytku je RTS Industrial standardem; Asamer realizuje projekty v CZ, SK a HU — včetně PLC integrace, ERP propojení a servisní smlouvy s reakčními dobami pod 24 hodin.`,
      sk: `Barbaric RTS Industrial je vysoko výkonný návratový systém pre priemyselnú nepretržitú prevádzku pri rýchlych olepovačkách hrán. Je navrhnutý pre viaczmennú výrobu v nábytkárskych závodoch, výrobe stavebných prvkov alebo u veľkých dodávateľov — s rýchlosťami posuvu do 60 m/min a časmi cyklu schopnými držať krok s najnáročnejšími olepovačkami. RTS Industrial nielen vracia obrobky späť, ale voliteľne ich triedi podľa zákaziek, ukladá na puffre alebo odovzdáva priamo nadväzujúcim strojom, ako sú vŕtacie automaty alebo lakovacie linky. Robustná konštrukcia je navrhnutá na roky nepretržitej výroby; intervaly údržby sú 2000 prevádzkových hodín. Pre priemyselných výrobcov nábytku je RTS Industrial štandardom; Asamer realizuje projekty v CZ, SK a HU — vrátane PLC integrácie, ERP prepojenia a servisnej zmluvy s reakčnými časmi pod 24 hodín.`,
      hu: `A Barbaric RTS Industrial nagy teljesítményű visszavezető rendszer gyors élzárógépekhez, ipari folyamatos üzemhez. Többműszakos gyártáshoz tervezték bútorgyárakban, építőelem-gyártásban vagy nagy beszállítóknál — akár 60 m/perces előtolási sebességgel és a legigényesebb élzárógépekkel is lépést tartó ciklusidőkkel. Az RTS Industrial nemcsak visszaszállítja a munkadarabokat, hanem opcionálisan rendelésenként szétválogatja, puffereken helyezi el vagy közvetlenül átadja a következő gépeknek, mint például fúróautomatáknak vagy festősoroknak. A robusztus konstrukció évek megszakítás nélküli gyártására tervezett; a karbantartási intervallumok 2000 üzemóra. Ipari bútorgyártók számára az RTS Industrial szabvány; az Asamer Csehországban, Szlovákiában és Magyarországon valósít meg projekteket — PLC integrációval, ERP csatolással és 24 órán belüli reakcióidejű szervizszerződéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für industrielle Möbelwerke', en: 'For industrial furniture plants', cz: 'Pro průmyslové nábytkářské závody', sk: 'Pre priemyselné nábytkárske závody', hu: 'Ipari bútorgyárakhoz' },
        body: {
          de: 'Im Dauerbetrieb einer industriellen Kantenleimmaschine liefert das RTS Industrial verlässlich — Tag und Nacht, 300 Tage im Jahr. Die Rückführgeschwindigkeit wird dynamisch an die Kantenleim-Taktzeit angepasst, sodass kein Rückstau entsteht. Über eine optionale Sortiereinheit können Teile direkt auftragsrein abgelegt werden.',
          en: 'In continuous operation of an industrial edgebander, the RTS Industrial delivers reliably — day and night, 300 days a year. Return speed is dynamically matched to the edgebander cycle time so no back-up occurs. An optional sorting unit places parts directly by order.',
          cz: 'V nepřetržitém provozu průmyslové olepovačky hran dodává RTS Industrial spolehlivě — ve dne i v noci, 300 dní v roce. Rychlost návratu se dynamicky přizpůsobuje době taktu olepovačky, takže nevzniká zácpa. Přes volitelnou třídicí jednotku lze díly přímo odkládat podle zakázek.',
          sk: 'V nepretržitej prevádzke priemyselnej olepovačky hrán dodáva RTS Industrial spoľahlivo — vo dne i v noci, 300 dní v roku. Rýchlosť návratu sa dynamicky prispôsobuje času taktu olepovačky, takže nevzniká zápcha. Cez voliteľnú triediacu jednotku je možné diely priamo odkladať podľa zákaziek.',
          hu: 'Ipari élzárógép folyamatos üzemében az RTS Industrial megbízhatóan szállít — éjjel-nappal, évi 300 napon át. A visszavezető sebesség dinamikusan igazodik az élzárógép ciklusidejéhez, így nem keletkezik torlódás. Opcionális válogatóegységgel a darabok közvetlenül rendelésenként helyezhetők el.',
        },
      },
      {
        heading: { de: 'Für verkettete Produktionslinien', en: 'For linked production lines', cz: 'Pro řetězené výrobní linky', sk: 'Pre zreťazené výrobné linky', hu: 'Láncolt gyártósorokhoz' },
        body: {
          de: 'Das RTS Industrial übergibt Werkstücke direkt an nachfolgende Bohrautomaten, Flächenschleifer oder Lackierlinien — ohne manuelle Zwischenschritte. So entsteht eine durchgängige Produktionskette vom Rohteil bis zum fertigen Möbelteil, ideal für Großserien-Fertigung mit konstanten Formaten.',
          en: 'The RTS Industrial hands workpieces directly to downstream drilling automats, surface sanders or paint lines — without manual intermediate steps. This creates a continuous production chain from raw part to finished furniture component, ideal for large series production with constant formats.',
          cz: 'RTS Industrial předává obrobky přímo navazujícím vrtacím automatům, plošným bruskám nebo lakovacím linkám — bez manuálních mezikroků. Tím vzniká souvislý výrobní řetězec od polotovaru k hotovému nábytkovému dílu, ideální pro velkosériovou výrobu s konstantními formáty.',
          sk: 'RTS Industrial odovzdáva obrobky priamo nadväzujúcim vŕtacím automatom, plošným brúskam alebo lakovacím linkám — bez manuálnych medzikrokov. Tým vzniká súvislý výrobný reťazec od polotovaru k hotovému nábytkovému dielu, ideálny pre veľkosériovú výrobu s konštantnými formátmi.',
          hu: 'Az RTS Industrial a munkadarabokat közvetlenül átadja a nyomában következő fúróautomatáknak, felületcsiszolóknak vagy festősoroknak — manuális köztes lépések nélkül. Így folyamatos gyártási lánc alakul ki a nyerstől a kész bútoralkatrészig, ideális állandó formátumú nagysorozatú gyártáshoz.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Das RTS Industrial ist für alle Betriebe mit mehrschichtiger Fertigung und schnellen Kantenleimmaschinen die richtige Wahl. Wenn Sie pro Tag einige tausend Teile kanten und Ausfallzeiten wirtschaftlich schmerzen, lohnt die robuste Industrieausführung gegenüber dem Professional. Für kleinere Betriebe unter 500 Teilen pro Tag ist das RTS Professional ausreichend.',
      en: 'The RTS Industrial is the right choice for all operations with multi-shift production and fast edgebanders. If you process several thousand parts per day and downtime hurts economically, the robust industrial version pays off compared to the Professional. For smaller operations under 500 parts per day, the RTS Professional is sufficient.',
      cz: 'RTS Industrial je správnou volbou pro všechny provozy s vícesmennou výrobou a rychlými olepovačkami. Pokud denně olepujete několik tisíc dílů a prostoje vás ekonomicky bolí, vyplatí se robustní průmyslové provedení oproti Professional. Pro menší provozy pod 500 dílů denně stačí RTS Professional.',
      sk: 'RTS Industrial je správnou voľbou pre všetky prevádzky s viaczmennou výrobou a rýchlymi olepovačkami. Ak denne olepujete niekoľko tisíc dielov a prestoje vás ekonomicky bolia, vyplatí sa robustné priemyselné prevedenie oproti Professional. Pre menšie prevádzky pod 500 dielov denne stačí RTS Professional.',
      hu: 'Az RTS Industrial a megfelelő választás minden többműszakos gyártású, gyors élzárógéppel dolgozó üzem számára. Ha naponta több ezer darabot élfóliáz, és a leállás gazdaságilag fájdalmas, a robusztus ipari kivitel megéri a Professional-hoz képest. Napi 500 darab alatti kisebb üzemek számára az RTS Professional elegendő.',
    },
    faq: [
      {
        question: { de: 'Welche Taktzeit erreicht das RTS Industrial?', en: 'What cycle time does the RTS Industrial achieve?', cz: 'Jakou dobu taktu dosahuje RTS Industrial?', sk: 'Aký čas taktu dosahuje RTS Industrial?', hu: 'Milyen ciklusidőt ér el az RTS Industrial?' },
        answer: {
          de: 'Das System ist auf Vorschübe bis 60 m/min ausgelegt und kann damit auch hochwertige Kantenleimer im Dauerbetrieb verlustfrei bedienen. Die exakte Taktrate hängt vom Werkstücklayout und der Sortierlogik ab.',
          en: 'The system is designed for feed speeds up to 60 m/min and can serve even high-quality edgebanders in continuous operation without loss. Exact cycle rate depends on workpiece layout and sorting logic.',
          cz: 'Systém je dimenzován na posuvy do 60 m/min a dokáže tak i kvalitní olepovačky v nepřetržitém provozu obsluhovat bez ztrát. Přesná frekvence cyklů závisí na rozvržení obrobků a logice třídění.',
          sk: 'Systém je dimenzovaný na posuvy do 60 m/min a dokáže tak aj kvalitné olepovačky v nepretržitej prevádzke obsluhovať bez strát. Presná frekvencia cyklov závisí od rozvrhnutia obrobkov a logiky triedenia.',
          hu: 'A rendszer akár 60 m/perces előtolási sebességre méretezett, és így a kiváló minőségű élzárógépeket is veszteség nélkül képes kiszolgálni folyamatos üzemben. A pontos ciklussebesség a munkadarab-elrendezéstől és a válogatási logikától függ.',
        },
      },
      {
        question: { de: 'Wie hoch sind die Wartungskosten?', en: 'What are the maintenance costs?', cz: 'Jaké jsou náklady na údržbu?', sk: 'Aké sú náklady na údržbu?', hu: 'Mekkorák a karbantartási költségek?' },
        answer: {
          de: 'Planmäßige Wartung ist alle 2000 Betriebsstunden fällig — in etwa einmal pro Jahr bei Einschichtbetrieb. Wartungskosten bewegen sich im einstelligen Tausender-Bereich pro Jahr inklusive Servicevertrag und Ersatzteilen.',
          en: 'Scheduled maintenance is due every 2000 operating hours — about once a year in single-shift operation. Maintenance costs are in the low single-digit thousands per year including service contract and spare parts.',
          cz: 'Plánovaná údržba je nutná každých 2000 provozních hodin — přibližně jednou ročně při jednosměnném provozu. Náklady na údržbu se pohybují v nízkých jednotkách tisíc ročně včetně servisní smlouvy a náhradních dílů.',
          sk: 'Plánovaná údržba je potrebná každých 2000 prevádzkových hodín — približne raz ročne pri jednozmennej prevádzke. Náklady na údržbu sa pohybujú v nízkych jednotkách tisíc ročne vrátane servisnej zmluvy a náhradných dielov.',
          hu: 'A tervezett karbantartás 2000 üzemóránként esedékes — egyműszakos üzemben nagyjából évente egyszer. A karbantartási költségek évente alacsony, néhány ezres tartományban mozognak a szervizszerződéssel és pótalkatrészekkel együtt.',
        },
      },
      {
        question: { de: 'Gibt es Reaktionszeiten bei Störungen?', en: 'Are there response times for faults?', cz: 'Jsou reakční doby při poruchách?', sk: 'Sú reakčné časy pri poruchách?', hu: 'Van reakcióidő meghibásodás esetén?' },
        answer: {
          de: 'Asamer bietet Serviceverträge mit Reaktionszeiten von 24 oder sogar 4 Stunden an — für industrielle Kunden empfehlen wir den 24-Stunden-Vertrag als Mindeststandard. Remote-Diagnose ist Teil jedes Vertrags.',
          en: 'Asamer offers service contracts with response times of 24 or even 4 hours — for industrial customers we recommend the 24-hour contract as minimum standard. Remote diagnostics are part of every contract.',
          cz: 'Asamer nabízí servisní smlouvy s reakčními dobami 24 nebo dokonce 4 hodiny — pro průmyslové zákazníky doporučujeme 24hodinovou smlouvu jako minimální standard. Vzdálená diagnostika je součástí každé smlouvy.',
          sk: 'Asamer ponúka servisné zmluvy s reakčnými časmi 24 alebo dokonca 4 hodiny — pre priemyselných zákazníkov odporúčame 24-hodinovú zmluvu ako minimálny štandard. Vzdialená diagnostika je súčasťou každej zmluvy.',
          hu: 'Az Asamer 24 vagy akár 4 órás reakcióidejű szervizszerződéseket kínál — ipari ügyfeleinknek a 24 órás szerződést ajánljuk minimális standardként. A távdiagnosztika minden szerződés része.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  RETURN — teilehandling                                             */
  /* ------------------------------------------------------------------ */
  'teilehandling': {
    longDescription: {
      de: `Das Barbaric Teilehandling-System übernimmt die automatische Sortierung und Stapelung fertig bearbeiteter Teile nach der Kantenleimmaschine, dem Bohrautomaten oder der CNC-Nesting-Zelle. Statt dass ein Mitarbeiter Teile manuell aufnimmt, erkennt und dem richtigen Auftragsstapel zuordnet, übernimmt ein Handling-Roboter mit Vakuumgreifer diesen Prozess vollständig. Die Teilerkennung erfolgt über Kamerasystem und Barcode-Scan; die Sortierlogik kommt aus dem ERP-gesteuerten Auftragsbestand. Das System ist besonders wertvoll bei Losgröße-1-Fertigung, wo manuelle Sortierung fehleranfällig und zeitaufwändig ist. Für Möbelwerke und Zulieferer mit hohem Durchsatz und heterogenen Produkten ist das Teilehandling der Schlüssel zur durchgängigen Automatisierung. Asamer realisiert Teilehandling-Projekte für CZ, SK und HU inklusive Anbindung an Kantenleimer, CNC und Versandbereitstellung.`,
      en: `The Barbaric parts handling system takes over automatic sorting and stacking of finished processed parts after the edgebander, drilling automat or CNC nesting cell. Instead of an employee manually picking up, identifying and assigning parts to the correct order stack, a handling robot with vacuum gripper handles this process entirely. Part detection runs via camera system and barcode scan; sorting logic comes from the ERP-driven order backlog. The system is especially valuable in batch-size-1 production, where manual sorting is error-prone and time-consuming. For furniture plants and suppliers with high throughput and heterogeneous products, parts handling is the key to continuous automation. Asamer realises parts handling projects for CZ, SK and HU — including connection to edgebander, CNC and dispatch preparation.`,
      cz: `Barbaric systém manipulace s díly přebírá automatické třídění a stohování hotových zpracovaných dílů za olepovačkou hran, vrtacím automatem nebo nesting CNC buňkou. Místo aby pracovník ručně bral, rozpoznával a přiřazoval díly správné stohové zakázce, přebírá tento proces plně manipulační robot s vakuovým úchopem. Rozpoznávání dílů probíhá kamerovým systémem a skenováním čárových kódů; třídicí logika vychází z ERP řízeného pořadí zakázek. Systém je obzvlášť cenný při výrobě dávky 1, kde je manuální třídění chybové a časově náročné. Pro nábytkářské závody a dodavatele s vysokým průtokem a různorodými produkty je manipulace s díly klíčem k průběžné automatizaci. Asamer realizuje projekty manipulace s díly pro CZ, SK a HU — včetně napojení na olepovačku, CNC a přípravu expedice.`,
      sk: `Barbaric systém manipulácie s dielmi preberá automatické triedenie a stohovanie hotových spracovaných dielov za olepovačkou hrán, vŕtacím automatom alebo nesting CNC bunkou. Namiesto toho, aby pracovník ručne bral, rozpoznával a priraďoval diely správnej stohovacej zákazke, preberá tento proces plne manipulačný robot s vákuovým úchopom. Rozpoznávanie dielov prebieha kamerovým systémom a skenovaním čiarových kódov; triediaca logika vychádza z ERP riadeného poradia zákaziek. Systém je obzvlášť cenný pri výrobe dávky 1, kde je manuálne triedenie chybové a časovo náročné. Pre nábytkárske závody a dodávateľov s vysokou priepustnosťou a rôznorodými produktmi je manipulácia s dielmi kľúčom k priebežnej automatizácii. Asamer realizuje projekty manipulácie s dielmi pre CZ, SK a HU — vrátane napojenia na olepovačku, CNC a prípravu expedície.`,
      hu: `A Barbaric alkatrész-anyagmozgató rendszer átveszi az élzárógép, fúróautomata vagy CNC nesting cella utáni kész, megmunkált darabok automatikus válogatását és kötegelését. Ahelyett, hogy egy munkavállaló manuálisan felvenné, azonosítaná és a megfelelő rendeléskötegbe rendezné a darabokat, ezt a folyamatot teljesen vákuumos megfogóval ellátott anyagmozgató robot veszi át. A darabfelismerés kamerarendszerrel és vonalkód-olvasással történik; a válogatási logika az ERP által vezérelt rendelésállományból származik. A rendszer különösen értékes az 1-es darabszámú gyártásban, ahol a manuális válogatás hibalehetőségekkel teli és időigényes. Nagy áteresztőképességű és heterogén termékkel dolgozó bútorgyárak és beszállítók számára az alkatrész-anyagmozgatás a folyamatos automatizálás kulcsa. Az Asamer alkatrész-anyagmozgató projekteket valósít meg Csehország, Szlovákia és Magyarország számára — élzárógéphez, CNC-hez és szállításelőkészítéshez történő csatlakoztatással együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Losgröße-1-Fertigung', en: 'For batch-size-1 production', cz: 'Pro výrobu dávky 1', sk: 'Pre výrobu dávky 1', hu: '1-es darabszámú gyártáshoz' },
        body: {
          de: 'In der Möbelindustrie ist Losgröße-1 Standard: Jedes Teil ein Unikat, jeder Auftrag anders. Das Teilehandling erkennt über Barcode oder Kamera jedes Teil einzeln und sortiert es auf den richtigen Auftragsstapel. Kein Mitarbeiter muss die Teilnummern mehr prüfen — der Stapel ist versandfertig, sobald er voll ist.',
          en: 'In the furniture industry, batch-size-1 is standard: every part unique, every order different. Parts handling identifies every part individually via barcode or camera and sorts it onto the correct order stack. No employee has to check part numbers anymore — the stack is ready for dispatch as soon as it is full.',
          cz: 'V nábytkářském průmyslu je dávka 1 standardem: každý díl unikát, každá zakázka jiná. Manipulace s díly rozpoznává přes čárový kód nebo kameru každý díl samostatně a třídí jej na správný stohový zakázku. Žádný pracovník již nemusí kontrolovat čísla dílů — stoh je připraven k expedici, jakmile je plný.',
          sk: 'V nábytkárskom priemysle je dávka 1 štandardom: každý diel unikát, každá zákazka iná. Manipulácia s dielmi rozpoznáva cez čiarový kód alebo kameru každý diel samostatne a triedi ho na správnu stohovaciu zákazku. Žiadny pracovník už nemusí kontrolovať čísla dielov — stoh je pripravený na expedíciu, akonáhle je plný.',
          hu: 'A bútoriparban az 1-es darabszám szabvány: minden darab egyedi, minden rendelés más. Az alkatrész-anyagmozgatás vonalkóddal vagy kamerával egyedileg azonosít minden darabot, és a megfelelő rendelésköteghez rendeli. Egyetlen munkavállalónak sem kell többé alkatrészszámot ellenőriznie — a köteg kiszállításra kész, amint megtelik.',
        },
      },
      {
        heading: { de: 'Für durchgängige Produktionskette', en: 'For continuous production chain', cz: 'Pro souvislý výrobní řetězec', sk: 'Pre súvislý výrobný reťazec', hu: 'Folyamatos gyártási lánchoz' },
        body: {
          de: 'Das Teilehandling schließt die letzte Lücke in der durchgängigen Möbelteilfertigung: Von der Nesting-CNC über Kantenleimmaschine und Bohrautomat bis zur versandfertigen Palette läuft der Prozess ohne manuelle Eingriffe. Das erhöht nicht nur die Produktivität, sondern reduziert auch Fehler durch Verwechslung oder Beschädigung.',
          en: 'Parts handling closes the last gap in continuous furniture part manufacturing: from nesting CNC through edgebander and drilling automat to dispatch-ready pallet, the process runs without manual interventions. This not only increases productivity but also reduces errors from mix-ups or damage.',
          cz: 'Manipulace s díly uzavírá poslední mezeru v průběžné výrobě nábytkových dílů: od nesting CNC přes olepovačku a vrtací automat až po paletu připravenou k expedici běží proces bez manuálních zásahů. To nejen zvyšuje produktivitu, ale i snižuje chyby ze záměny nebo poškození.',
          sk: 'Manipulácia s dielmi uzatvára poslednú medzeru v priebežnej výrobe nábytkárskych dielov: od nesting CNC cez olepovačku a vŕtací automat až po paletu pripravenú na expedíciu beží proces bez manuálnych zásahov. To nielen zvyšuje produktivitu, ale aj znižuje chyby zo zámeny alebo poškodenia.',
          hu: 'Az alkatrész-anyagmozgatás bezárja a folyamatos bútoralkatrész-gyártás utolsó hézagját: a nesting CNC-től az élzárógépen és fúróautomatán át a szállításra kész raklapig a folyamat manuális beavatkozás nélkül fut. Ez nemcsak a termelékenységet növeli, hanem csökkenti a keveredésből vagy sérülésből eredő hibákat is.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Das Teilehandling lohnt sich in Möbelwerken mit mehreren tausend unterschiedlichen Teilen pro Tag und hoher Auftragsvielfalt. Für Serienfertigung mit wenigen Artikeln reicht oft eine einfache Stapelstation. Asamer erstellt ein Grobkonzept mit Mengenanalyse auf Basis Ihrer aktuellen Auftragsstruktur und berechnet den ROI.',
      en: 'Parts handling pays off in furniture plants with several thousand different parts per day and high order variety. For series production with few articles, a simple stacking station is often sufficient. Asamer prepares a rough concept with quantity analysis based on your current order structure and calculates ROI.',
      cz: 'Manipulace s díly se vyplatí v nábytkářských závodech s několika tisíci různými díly denně a vysokou rozmanitostí zakázek. Pro sériovou výrobu s málo položkami často stačí jednoduchá stohová stanice. Asamer vypracuje hrubý koncept s analýzou množství na základě vaší aktuální struktury zakázek a spočítá ROI.',
      sk: 'Manipulácia s dielmi sa vyplatí v nábytkárskych závodoch s niekoľkými tisícmi rôznych dielov denne a vysokou rôznorodosťou zákaziek. Pre sériovú výrobu s málom položiek často stačí jednoduchá stohovacia stanica. Asamer vypracuje hrubý koncept s analýzou množstva na základe vašej aktuálnej štruktúry zákaziek a spočíta ROI.',
      hu: 'Az alkatrész-anyagmozgatás napi több ezer különböző alkatrésszel és nagy rendelés-változatossággal dolgozó bútorgyárakban térül meg. Kevés cikkes sorozatgyártáshoz gyakran elegendő egy egyszerű kötegelő állomás. Az Asamer az aktuális rendelésszerkezete alapján mennyiségelemzéssel készít durva koncepciót, és kiszámítja a ROI-t.',
    },
    faq: [
      {
        question: { de: 'Welche Teileformate kann das System verarbeiten?', en: 'What part formats can the system handle?', cz: 'Jaké formáty dílů systém zpracuje?', sk: 'Aké formáty dielov systém spracuje?', hu: 'Milyen darabformátumokat kezel a rendszer?' },
        answer: {
          de: 'Typisch von 100 × 100 mm bis zu üblichen Möbelteil-Formaten (2000 × 800 mm). Sonderformate sind über angepasste Greifer realisierbar. Gewicht bis etwa 25 kg pro Teil.',
          en: 'Typically from 100 × 100 mm up to common furniture part formats (2000 × 800 mm). Special formats can be realised with adapted grippers. Weight up to about 25 kg per part.',
          cz: 'Typicky od 100 × 100 mm až do běžných nábytkových dílových formátů (2000 × 800 mm). Speciální formáty lze realizovat přes upravené úchopy. Hmotnost do cca 25 kg na díl.',
          sk: 'Typicky od 100 × 100 mm až do bežných nábytkárskych dielových formátov (2000 × 800 mm). Špeciálne formáty je možné realizovať cez upravené úchopy. Hmotnosť do cca 25 kg na diel.',
          hu: 'Tipikusan 100 × 100 mm-től a szokásos bútoralkatrész-formátumokig (2000 × 800 mm). Különleges formátumok testreszabott megfogókkal valósíthatók meg. Darabonként akár 25 kg súlyig.',
        },
      },
      {
        question: { de: 'Wie wird das Teilehandling in bestehende ERP-Systeme integriert?', en: 'How is parts handling integrated with existing ERP systems?', cz: 'Jak se manipulace s díly integruje s existujícím ERP?', sk: 'Ako sa manipulácia s dielmi integruje s existujúcim ERP?', hu: 'Hogyan integrálható az anyagmozgatás a meglévő ERP rendszerekhez?' },
        answer: {
          de: 'Die Anbindung erfolgt über standardisierte Schnittstellen (OPC-UA, REST-API, XML) an SAP, Navision, proAlpha oder individuelle ERP-Systeme. Der Auftragsbestand aus dem ERP steuert die Sortierlogik automatisch.',
          en: 'Connection runs via standardised interfaces (OPC-UA, REST API, XML) to SAP, Navision, proAlpha or custom ERP systems. The order backlog from ERP automatically controls sorting logic.',
          cz: 'Napojení probíhá přes standardizovaná rozhraní (OPC-UA, REST API, XML) k SAP, Navision, proAlpha nebo individuálním ERP systémům. Pořadí zakázek z ERP automaticky řídí třídicí logiku.',
          sk: 'Napojenie prebieha cez štandardizované rozhrania (OPC-UA, REST API, XML) k SAP, Navision, proAlpha alebo individuálnym ERP systémom. Poradie zákaziek z ERP automaticky riadi triediacu logiku.',
          hu: 'A csatlakozás szabványosított felületeken keresztül (OPC-UA, REST API, XML) történik SAP, Navision, proAlpha vagy egyedi ERP rendszerekhez. Az ERP rendelésállománya automatikusan vezérli a válogatási logikát.',
        },
      },
      {
        question: { de: 'Wie zuverlässig ist die Teilerkennung?', en: 'How reliable is part detection?', cz: 'Jak spolehlivé je rozpoznávání dílů?', sk: 'Aké spoľahlivé je rozpoznávanie dielov?', hu: 'Mennyire megbízható a darabfelismerés?' },
        answer: {
          de: 'Bei Barcode-basierter Erkennung liegt die Zuverlässigkeit bei über 99,9 %. Bei rein kamerabasierter Erkennung hängt die Rate von Beleuchtung und Dekorqualität ab — typischerweise 98–99 %. Die kombinierte Lösung (Kamera + Barcode) wird in industriellen Projekten empfohlen.',
          en: 'With barcode-based detection, reliability exceeds 99.9 %. With pure camera detection, the rate depends on lighting and décor quality — typically 98–99 %. The combined solution (camera + barcode) is recommended for industrial projects.',
          cz: 'Při rozpoznávání čárovým kódem přesahuje spolehlivost 99,9 %. Při čistě kamerovém rozpoznávání závisí na osvětlení a kvalitě dekoru — obvykle 98–99 %. Kombinované řešení (kamera + čárový kód) se doporučuje pro průmyslové projekty.',
          sk: 'Pri rozpoznávaní čiarovým kódom presahuje spoľahlivosť 99,9 %. Pri čisto kamerovom rozpoznávaní závisí od osvetlenia a kvality dekoru — zvyčajne 98–99 %. Kombinované riešenie (kamera + čiarový kód) sa odporúča pre priemyselné projekty.',
          hu: 'Vonalkód-alapú felismerés esetén a megbízhatóság 99,9 % feletti. Tisztán kamerás felismerésnél a megbízhatóság a megvilágítástól és a dekor minőségétől függ — tipikusan 98–99 %. A kombinált megoldás (kamera + vonalkód) ipari projektekhez ajánlott.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  RETURN — pbx                                                       */
  /* ------------------------------------------------------------------ */
  'pbx': {
    longDescription: {
      de: `Das Barbaric PBX Positioniersystem richtet Werkstücke nach der Kantenleimmaschine oder vor dem Bohrautomaten exakt aus — ein Muss für alle nachfolgenden Prozesse, die auf millimetergenaues Anlegen angewiesen sind. Das PBX dreht, schiebt und orientiert die Teile automatisch auf die vorgeschriebene Lage, sodass keine manuelle Ausrichtung mehr notwendig ist. Eingesetzt wird das PBX typischerweise zwischen Kantenleimmaschine und Bohrautomat oder vor Lackierlinien. Die Steuerung erhält die benötigte Orientierung aus den Teile-Daten (z. B. Bohrbild, Dekorseite); das System überträgt die Information optional direkt an die nachgelagerte Maschine. Für Möbelwerke mit vollautomatischer Teilefertigung ist das PBX eine Schlüsselkomponente. Asamer liefert und integriert das PBX Positioniersystem für Kunden in CZ, SK und HU inklusive Abstimmung mit Ihren Maschinen.`,
      en: `The Barbaric PBX positioning system aligns workpieces precisely after the edgebander or before the drilling automat — a must for all downstream processes that depend on millimetre-precise positioning. The PBX automatically turns, pushes and orients parts into the prescribed position so that no manual alignment is needed. The PBX is typically deployed between edgebander and drilling automat or before paint lines. The controller receives the required orientation from part data (e.g. drilling pattern, décor side); the system optionally transfers this information directly to the downstream machine. For furniture plants with fully automatic part production, the PBX is a key component. Asamer supplies and integrates the PBX positioning system for customers in CZ, SK and HU — including coordination with your machines.`,
      cz: `Barbaric PBX polohovací systém přesně vyrovnává obrobky za olepovačkou hran nebo před vrtacím automatem — nutnost pro všechny navazující procesy, které závisí na milimetrově přesném zakládání. PBX automaticky otáčí, posouvá a orientuje díly do předepsané polohy, takže již není nutné manuální vyrovnávání. PBX se typicky nasazuje mezi olepovačku hran a vrtací automat nebo před lakovací linky. Řízení získává požadovanou orientaci z dat dílů (např. vrtací vzor, strana dekoru); systém volitelně přenáší informaci přímo na navazující stroj. Pro nábytkářské závody s plně automatickou výrobou dílů je PBX klíčovou komponentou. Asamer dodává a integruje PBX polohovací systém pro zákazníky v CZ, SK a HU — včetně koordinace s vašimi stroji.`,
      sk: `Barbaric PBX polohovací systém presne vyrovnáva obrobky za olepovačkou hrán alebo pred vŕtacím automatom — nevyhnutnosť pre všetky nadväzujúce procesy, ktoré závisia od milimetrovo presného zakladania. PBX automaticky otáča, posúva a orientuje diely do predpísanej polohy, takže už nie je potrebné manuálne vyrovnávanie. PBX sa typicky nasadzuje medzi olepovačku hrán a vŕtací automat alebo pred lakovacie linky. Riadenie získava požadovanú orientáciu z dát dielov (napr. vŕtací vzor, strana dekoru); systém voliteľne prenáša informáciu priamo na nadväzujúci stroj. Pre nábytkárske závody s plne automatickou výrobou dielov je PBX kľúčovou komponentou. Asamer dodáva a integruje PBX polohovací systém pre zákazníkov v CZ, SK a HU — vrátane koordinácie s vašimi strojmi.`,
      hu: `A Barbaric PBX pozicionáló rendszer az élzárógép után vagy a fúróautomata előtt pontosan beállítja a munkadarabokat — elengedhetetlen minden olyan utólagos folyamathoz, amely milliméter pontos illesztésre támaszkodik. A PBX automatikusan forgatja, tolja és a darabokat az előírt helyzetbe orientálja, így nincs szükség manuális igazításra. A PBX-et jellemzően az élzárógép és a fúróautomata közé vagy festősorok elé telepítik. A vezérlés a szükséges orientációt a darabadatokból kapja (pl. fúrási minta, dekoroldal); a rendszer opcionálisan közvetlenül továbbítja ezt az információt a következő gépnek. Teljesen automatikus alkatrészgyártással működő bútorgyárak számára a PBX kulcsfontosságú komponens. Az Asamer a Csehország, Szlovákia és Magyarország területén lévő ügyfelek számára szállítja és integrálja a PBX pozicionáló rendszert — a gépekkel való egyeztetéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Zwischen Kantenleimmaschine und Bohrautomat', en: 'Between edgebander and drilling automat', cz: 'Mezi olepovačkou a vrtacím automatem', sk: 'Medzi olepovačkou a vŕtacím automatom', hu: 'Élzárógép és fúróautomata között' },
        body: {
          de: 'Kantenleimmaschine und Bohrautomat benötigen unterschiedliche Teilausrichtungen — ohne Positioniersystem muss der Bediener jedes Teil manuell drehen. Das PBX automatisiert diesen Schritt vollständig: Das aus der Kantenleimmaschine ausgelaufene Teil kommt exakt auf die richtige Bohrposition zum Automat.',
          en: 'Edgebander and drilling automat require different part orientations — without a positioning system, the operator must manually turn every part. The PBX fully automates this step: the part leaving the edgebander arrives at the drilling automat in exactly the right orientation.',
          cz: 'Olepovačka hran a vrtací automat vyžadují různé orientace dílů — bez polohovacího systému musí obsluha každý díl ručně otočit. PBX tento krok plně automatizuje: díl vyjíždějící z olepovačky přichází na vrtací automat přesně ve správné poloze.',
          sk: 'Olepovačka hrán a vŕtací automat vyžadujú rôzne orientácie dielov — bez polohovacieho systému musí obsluha každý diel ručne otočiť. PBX tento krok plne automatizuje: diel vychádzajúci z olepovačky prichádza na vŕtací automat presne v správnej polohe.',
          hu: 'Az élzárógép és a fúróautomata eltérő darabhelyzetet igényel — pozicionáló rendszer nélkül a kezelőnek minden darabot manuálisan el kell forgatnia. A PBX teljesen automatizálja ezt a lépést: az élzárógépből kilépő darab pontosan a megfelelő helyzetben érkezik a fúróautomatához.',
        },
      },
      {
        heading: { de: 'Vor Lackier- und Beschichtungslinien', en: 'Before paint and coating lines', cz: 'Před lakovací a nanášecí linkou', sk: 'Pred lakovacími a nanášacími linkami', hu: 'Festő- és bevonósorok előtt' },
        body: {
          de: 'Bei Lackier- und Beschichtungsprozessen muss die Sichtseite des Werkstücks nach oben zeigen. Das PBX erkennt die Dekorseite über Sensorik und dreht das Teil automatisch in die richtige Lage. So bleibt der Lackier-Prozess ohne manuelle Eingriffe durchgängig.',
          en: 'In painting and coating processes, the workpiece\'s visible side must face up. The PBX detects the décor side via sensors and automatically turns the part into the correct position. The paint process thus stays continuous without manual intervention.',
          cz: 'Při lakovacích a nanášecích procesech musí pohledová strana obrobku směřovat nahoru. PBX rozpozná stranu dekoru přes senzoriku a díl automaticky otočí do správné polohy. Lakovací proces tak zůstává průběžný bez manuálních zásahů.',
          sk: 'Pri lakovacích a nanášacích procesoch musí pohľadová strana obrobku smerovať nahor. PBX rozpozná stranu dekoru cez senzoriku a diel automaticky otočí do správnej polohy. Lakovací proces tak zostáva priebežný bez manuálnych zásahov.',
          hu: 'Festési és bevonási folyamatoknál a munkadarab látszó oldalának felfelé kell néznie. A PBX érzékelőkkel ismeri fel a dekoroldalt, és automatikusan a megfelelő helyzetbe forgatja a darabot. A festési folyamat így manuális beavatkozás nélkül folyamatos marad.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Das PBX lohnt sich ab dem Punkt, an dem Sie die Kantenleimmaschine mit einem Bohrautomaten, Lackierer oder einer vollautomatischen Folgemaschine verketten. Für manuelle Nachbearbeitung ist keine Positionierung nötig. Asamer klärt die konkrete Auslegung mit Ihren Folgemaschinen ab.',
      en: 'The PBX is worthwhile from the point at which you link the edgebander to a drilling automat, paint line or fully automatic downstream machine. No positioning is needed for manual post-processing. Asamer clarifies the specific design with your downstream machines.',
      cz: 'PBX se vyplatí od okamžiku, kdy olepovačku hran propojíte s vrtacím automatem, lakovnou nebo plně automatickým navazujícím strojem. Pro ruční dokončování polohování není potřebné. Asamer upřesní konkrétní návrh s vašimi navazujícími stroji.',
      sk: 'PBX sa vyplatí od okamihu, keď olepovačku hrán prepojíte s vŕtacím automatom, lakovňou alebo plne automatickým nadväzujúcim strojom. Pre ručné dokončovanie polohovanie nie je potrebné. Asamer upresní konkrétny návrh s vašimi nadväzujúcimi strojmi.',
      hu: 'A PBX attól a ponttól éri meg, amikor az élzárógépet fúróautomatához, festősorhoz vagy teljesen automatikus utángépezéshez köti. Manuális utómunkához nincs szükség pozicionálásra. Az Asamer tisztázza a konkrét kialakítást az Ön utángépeivel.',
    },
    faq: [
      {
        question: { de: 'Welche Genauigkeit erreicht das PBX?', en: 'What precision does the PBX achieve?', cz: 'Jakou přesnost dosahuje PBX?', sk: 'Akú presnosť dosahuje PBX?', hu: 'Milyen pontosságot ér el a PBX?' },
        answer: {
          de: 'Typische Positioniergenauigkeit liegt bei ±0,5 mm — ausreichend für nahezu alle Möbelteil-Prozesse. Für spezielle Anforderungen (z. B. Präzisions-CNC) lässt sich die Genauigkeit über zusätzliche Sensorik auf ±0,2 mm verfeinern.',
          en: 'Typical positioning accuracy is ±0.5 mm — sufficient for virtually all furniture part processes. For special requirements (e.g. precision CNC), accuracy can be refined to ±0.2 mm via additional sensors.',
          cz: 'Typická přesnost polohování je ±0,5 mm — dostatečná pro prakticky všechny procesy nábytkových dílů. Pro speciální požadavky (např. přesnostní CNC) lze přesnost přes doplňkovou senzoriku zjemnit na ±0,2 mm.',
          sk: 'Typická presnosť polohovania je ±0,5 mm — dostatočná pre prakticky všetky procesy nábytkárskych dielov. Pre špeciálne požiadavky (napr. presné CNC) je možné presnosť cez doplnkovú senzoriku zjemniť na ±0,2 mm.',
          hu: 'A tipikus pozícionálási pontosság ±0,5 mm — gyakorlatilag minden bútoralkatrész-folyamathoz elegendő. Különleges igényekre (pl. precíziós CNC) a pontosság további érzékelőkkel ±0,2 mm-re finomítható.',
        },
      },
      {
        question: { de: 'Wie schnell positioniert das PBX?', en: 'How fast does the PBX position?', cz: 'Jak rychle PBX polohuje?', sk: 'Ako rýchlo PBX polohuje?', hu: 'Milyen gyorsan pozícionál a PBX?' },
        answer: {
          de: 'Taktzeiten je nach Teilgröße zwischen 2 und 6 Sekunden — ausreichend für die meisten Kantenleim- und Folgemaschinen-Kombinationen. Hochdynamische Versionen sind für industrielle Hochleistungslinien verfügbar.',
          en: 'Cycle times between 2 and 6 seconds depending on part size — sufficient for most edgebander and downstream machine combinations. Highly dynamic versions are available for industrial high-performance lines.',
          cz: 'Doby cyklu 2 až 6 sekund podle velikosti dílu — dostatečné pro většinu kombinací olepovačky a navazujícího stroje. Vysoce dynamické verze jsou k dispozici pro průmyslové vysoce výkonné linky.',
          sk: 'Časy cyklu 2 až 6 sekúnd podľa veľkosti dielu — dostatočné pre väčšinu kombinácií olepovačky a nadväzujúceho stroja. Vysoko dynamické verzie sú k dispozícii pre priemyselné vysoko výkonné linky.',
          hu: 'A ciklusidők darabmérettől függően 2–6 másodperc között — elegendő a legtöbb élzárógép-utángép kombinációhoz. Nagy dinamikájú változatok ipari nagy teljesítményű sorokhoz elérhetők.',
        },
      },
      {
        question: { de: 'Wie wird die richtige Ausrichtung bestimmt?', en: 'How is the correct orientation determined?', cz: 'Jak se určuje správná orientace?', sk: 'Ako sa určuje správna orientácia?', hu: 'Hogyan határozzák meg a helyes orientációt?' },
        answer: {
          de: 'Über Sensorik (Kamera, Barcode oder Laser) erkennt das PBX die aktuelle Lage und vergleicht sie mit der Soll-Orientierung aus dem Auftragsdatensatz. Die erforderliche Drehung oder Verschiebung wird automatisch berechnet.',
          en: 'Via sensors (camera, barcode or laser), the PBX detects the current position and compares it with the target orientation from the order data set. The required rotation or shift is automatically calculated.',
          cz: 'Přes senzoriku (kamera, čárový kód nebo laser) PBX rozpozná aktuální polohu a porovná ji s požadovanou orientací ze záznamu zakázky. Požadované otočení nebo posunutí se automaticky vypočítá.',
          sk: 'Cez senzoriku (kamera, čiarový kód alebo laser) PBX rozpozná aktuálnu polohu a porovná ju s požadovanou orientáciou zo záznamu zákazky. Požadované otočenie alebo posunutie sa automaticky vypočíta.',
          hu: 'Érzékelőkön keresztül (kamera, vonalkód vagy lézer) a PBX felismeri az aktuális helyzetet, és összehasonlítja a rendelési adatrekordból származó céllal. A szükséges forgatás vagy eltolás automatikusan kiszámításra kerül.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  BUFFER — tmp                                                       */
  /* ------------------------------------------------------------------ */
  'tmp': {
    longDescription: {
      de: `Der Barbaric TMP Pufferförderer entkoppelt Stationen in einer Produktionslinie — damit kurze Stillstände an einer Maschine nicht den gesamten Materialfluss blockieren. Der TMP nimmt fertige Werkstücke aus einer vorgelagerten Station (z. B. Kantenleimmaschine oder Bohrautomat) auf, puffert sie zwischen und übergibt sie nach Bedarf an die nachgelagerte Station. Das erhöht die Gesamtverfügbarkeit der Linie signifikant: Statt dass alle Maschinen gemeinsam stillstehen, sobald eine stoppt, arbeiten die übrigen weiter, solange der Puffer Material enthält oder Platz bietet. Typische Pufferkapazitäten liegen bei 20–50 Werkstücken je nach Bauform und Werkstückgröße. Für industrielle Möbelfertigungslinien und Zulieferer mit verketteten Prozessen ist der TMP ein wirtschaftliches Element zur Verfügbarkeitssteigerung. Asamer plant und liefert TMP-Pufferförderer für CZ, SK und HU inklusive Steuerungsintegration.`,
      en: `The Barbaric TMP buffer conveyor decouples stations in a production line — so that short stoppages at one machine do not block the entire material flow. The TMP picks up finished workpieces from an upstream station (e.g. edgebander or drilling automat), buffers them in between and hands them over to the downstream station as needed. This significantly increases overall line availability: instead of all machines standing still when one stops, the others continue working as long as the buffer contains material or has space. Typical buffer capacities are 20–50 workpieces depending on configuration and workpiece size. For industrial furniture production lines and suppliers with linked processes, the TMP is an economical element for increasing availability. Asamer plans and supplies TMP buffer conveyors for CZ, SK and HU — including control integration.`,
      cz: `Barbaric TMP pufrovací dopravník odděluje stanice ve výrobní lince — aby krátké zastávky na jednom stroji neblokovaly celý tok materiálu. TMP přijímá hotové obrobky z předcházející stanice (např. olepovačky hran nebo vrtacího automatu), pufruje je mezitím a podle potřeby je předává následující stanici. Tím se významně zvyšuje celková dostupnost linky: místo aby všechny stroje stály, jakmile jeden zastaví, pokračují ostatní v práci, dokud pufr obsahuje materiál nebo nabízí místo. Typické kapacity pufru se pohybují mezi 20–50 obrobky podle provedení a velikosti obrobku. Pro průmyslové výrobní linky nábytku a dodavatele se zřetězenými procesy je TMP ekonomickým prvkem pro zvýšení dostupnosti. Asamer projektuje a dodává TMP pufrovací dopravníky pro CZ, SK a HU — včetně integrace řízení.`,
      sk: `Barbaric TMP pufrovací dopravník oddeľuje stanice vo výrobnej linke — aby krátke zastávky na jednom stroji neblokovali celý tok materiálu. TMP prijíma hotové obrobky z predchádzajúcej stanice (napr. olepovačky hrán alebo vŕtacieho automatu), pufruje ich medzitým a podľa potreby ich odovzdáva nasledujúcej stanici. Tým sa významne zvyšuje celková dostupnosť linky: namiesto toho, aby všetky stroje stáli, akonáhle jeden zastaví, pokračujú ostatné v práci, pokiaľ pufor obsahuje materiál alebo ponúka miesto. Typické kapacity pufra sa pohybujú medzi 20–50 obrobkami podľa prevedenia a veľkosti obrobku. Pre priemyselné výrobné linky nábytku a dodávateľov so zreťazenými procesmi je TMP ekonomickým prvkom na zvýšenie dostupnosti. Asamer projektuje a dodáva TMP pufrovacie dopravníky pre CZ, SK a HU — vrátane integrácie riadenia.`,
      hu: `A Barbaric TMP puffer szállító szétválasztja a gyártósor állomásait — így egy gépnél bekövetkező rövid leállás nem blokkolja a teljes anyagáramlást. A TMP felveszi a kész munkadarabokat egy megelőző állomásról (pl. élzárógép vagy fúróautomata), közben pufferolja őket, és szükség szerint átadja a következő állomásnak. Ez jelentősen növeli a sor teljes rendelkezésre állását: ahelyett, hogy minden gép leállna, amikor az egyik megáll, a többiek tovább dolgoznak, amíg a puffer tartalmaz anyagot vagy van benne hely. A tipikus pufferkapacitás 20–50 munkadarab, a kivitel és a munkadarab méretétől függően. Láncolt folyamatokkal működő ipari bútorgyártó sorok és beszállítók számára a TMP gazdaságos elem a rendelkezésre állás növelésére. Az Asamer TMP puffer szállítókat tervez és szállít Csehország, Szlovákia és Magyarország számára — vezérlésintegrációval együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für verkettete Fertigungslinien', en: 'For linked production lines', cz: 'Pro řetězené výrobní linky', sk: 'Pre zreťazené výrobné linky', hu: 'Láncolt gyártósorokhoz' },
        body: {
          de: 'In einer Kette aus Kantenleimmaschine, Bohrautomat und Lackierlinie ist die Verfügbarkeit des Gesamtsystems das Produkt der Einzelverfügbarkeiten — ein TMP Pufferförderer zwischen den Stationen hebt diese Rechnung auf und steigert die Linienverfügbarkeit von typisch 85 % auf über 95 %.',
          en: 'In a chain of edgebander, drilling automat and paint line, the availability of the overall system is the product of individual availabilities — a TMP buffer conveyor between stations cancels this calculation and raises line availability from typically 85 % to over 95 %.',
          cz: 'V řetězci olepovačky hran, vrtacího automatu a lakovací linky je dostupnost celkového systému součinem jednotlivých dostupností — pufrovací dopravník TMP mezi stanicemi tuto kalkulaci ruší a zvyšuje dostupnost linky typicky z 85 % na přes 95 %.',
          sk: 'V reťazci olepovačky hrán, vŕtacieho automatu a lakovacej linky je dostupnosť celkového systému súčinom jednotlivých dostupností — pufrovací dopravník TMP medzi stanicami túto kalkuláciu ruší a zvyšuje dostupnosť linky typicky z 85 % na cez 95 %.',
          hu: 'Élzárógép, fúróautomata és festősor láncában a teljes rendszer rendelkezésre állása az egyedi rendelkezésre állások szorzata — egy TMP puffer szállító az állomások között ezt a számítást eltörli, és a sor rendelkezésre állását a tipikus 85 %-ról 95 % fölé emeli.',
        },
      },
      {
        heading: { de: 'Zur Entkopplung unterschiedlicher Taktzeiten', en: 'To decouple different cycle times', cz: 'K oddělení různých dob taktu', sk: 'Na oddelenie rôznych časov taktu', hu: 'Eltérő ciklusidők szétválasztásához' },
        body: {
          de: 'Häufig arbeiten benachbarte Maschinen mit unterschiedlichen Taktzeiten: Die Kantenleimmaschine ist schneller als der folgende Bohrautomat, oder umgekehrt. Der TMP puffert diese Differenz und erlaubt es jeder Maschine, in ihrem optimalen Betriebspunkt zu laufen — ohne gegenseitige Blockade.',
          en: 'Adjacent machines often work at different cycle times: the edgebander is faster than the downstream drilling automat, or vice versa. The TMP buffers this difference and allows each machine to run at its optimal operating point — without mutual blockage.',
          cz: 'Často sousední stroje pracují s různými dobami taktu: olepovačka je rychlejší než následující vrtací automat, nebo naopak. TMP tento rozdíl pufruje a umožňuje každému stroji běžet v jeho optimálním provozním bodě — bez vzájemné blokády.',
          sk: 'Často susedné stroje pracujú s rôznymi časmi taktu: olepovačka je rýchlejšia ako nasledujúci vŕtací automat, alebo naopak. TMP tento rozdiel pufruje a umožňuje každému stroju bežať v jeho optimálnom prevádzkovom bode — bez vzájomnej blokády.',
          hu: 'A szomszédos gépek gyakran eltérő ciklusidőkkel dolgoznak: az élzárógép gyorsabb, mint a következő fúróautomata, vagy fordítva. A TMP pufferolja ezt a különbséget, és lehetővé teszi, hogy minden gép a saját optimális működési pontján járjon — kölcsönös blokkolás nélkül.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Der TMP ist immer dann wirtschaftlich, wenn zwei oder mehr Maschinen verkettet sind und eine Maschine regelmäßig kurze Stopps hat (Werkzeugwechsel, Nachfüllen, Bedienereingriff). Bei mehrschichtiger Fertigung amortisiert sich der TMP meist innerhalb eines Jahres durch höhere Linienverfügbarkeit. Asamer berechnet den ROI auf Basis Ihrer Verfügbarkeitsdaten.',
      en: 'The TMP is always economical when two or more machines are linked and one machine regularly has short stops (tool change, refilling, operator intervention). In multi-shift production, the TMP typically pays off within one year through higher line availability. Asamer calculates ROI based on your availability data.',
      cz: 'TMP je ekonomický vždy, když jsou dva nebo více strojů propojeny a jeden stroj má pravidelně krátké zastávky (výměna nástroje, doplňování, zásah obsluhy). Při vícesmenné výrobě se TMP obvykle vrátí během jednoho roku díky vyšší dostupnosti linky. Asamer vypočítá ROI na základě vašich dat o dostupnosti.',
      sk: 'TMP je ekonomický vždy, keď sú dva alebo viac strojov prepojené a jeden stroj má pravidelne krátke zastávky (výmena nástroja, dopĺňanie, zásah obsluhy). Pri viaczmennej výrobe sa TMP zvyčajne vráti počas jedného roka vďaka vyššej dostupnosti linky. Asamer vypočíta ROI na základe vašich dát o dostupnosti.',
      hu: 'A TMP mindig akkor gazdaságos, ha kettő vagy több gép láncolva van, és egy gépnek rendszeresen rövid leállásai vannak (szerszámcsere, utántöltés, kezelői beavatkozás). Többműszakos gyártásban a TMP általában egy éven belül megtérül a magasabb sorrendelkezésre állás révén. Az Asamer az Ön rendelkezésre állási adatai alapján számítja ki a ROI-t.',
    },
    faq: [
      {
        question: { de: 'Wie groß kann die Pufferkapazität ausgelegt werden?', en: 'How large can buffer capacity be designed?', cz: 'Jak velká může být kapacita pufru?', sk: 'Aká veľká môže byť kapacita pufra?', hu: 'Mekkora pufferkapacitás tervezhető?' },
        answer: {
          de: 'Typisch zwischen 20 und 50 Werkstücken; bei Sonderausführungen auch deutlich mehr. Die Kapazität richtet sich nach erwarteter Stillstandsdauer der kritischen Maschine und dem Taktunterschied — typische Faustregel: 10 Minuten Puffer bei Regelbetrieb.',
          en: 'Typically between 20 and 50 workpieces; with special versions significantly more. Capacity depends on expected downtime of the critical machine and the cycle difference — typical rule of thumb: 10 minutes buffer in regular operation.',
          cz: 'Typicky mezi 20 a 50 obrobky; u speciálních provedení výrazně více. Kapacita se řídí očekávanou dobou prostoje kritického stroje a rozdílem taktů — typické pravidlo: 10 minut pufru v běžném provozu.',
          sk: 'Typicky medzi 20 a 50 obrobkami; pri špeciálnych prevedeniach výrazne viac. Kapacita sa riadi očakávanou dobou prestoja kritického stroja a rozdielom taktov — typické pravidlo: 10 minút pufra pri bežnej prevádzke.',
          hu: 'Tipikusan 20 és 50 munkadarab között; különleges kivitelnél jelentősen több. A kapacitás a kritikus gép várható leállási idejétől és a ciklusidő-különbségtől függ — tipikus hüvelykujjszabály: 10 percnyi puffer normál üzemben.',
        },
      },
      {
        question: { de: 'Werden Teile im Puffer sortiert gelagert?', en: 'Are parts stored sorted in the buffer?', cz: 'Jsou díly v pufru uloženy tříděně?', sk: 'Sú diely v pufri uložené triedene?', hu: 'Válogatva tárolódnak a darabok a pufferben?' },
        answer: {
          de: 'Der TMP puffert FIFO-basiert (First in, First out) — die Teile verlassen den Puffer in der Reihenfolge, in der sie eingetreten sind. Auf Wunsch lassen sich auch Multi-Pfad-Puffer realisieren, die Teile je nach Zielmaschine auf unterschiedliche Bahnen sortieren.',
          en: 'The TMP buffers on a FIFO (first in, first out) basis — parts leave the buffer in the order in which they entered. On request, multi-path buffers can also be realised that sort parts onto different tracks depending on target machine.',
          cz: 'TMP pufruje FIFO (první dovnitř, první ven) — díly opouštějí pufr v pořadí, ve kterém vstoupily. Na přání lze realizovat i vícecestné pufry, které třídí díly na různé dráhy podle cílového stroje.',
          sk: 'TMP pufruje FIFO (prvý dnu, prvý von) — diely opúšťajú pufor v poradí, v ktorom vstúpili. Na želanie je možné realizovať aj viaccestné puffre, ktoré triedia diely na rôzne dráhy podľa cieľového stroja.',
          hu: 'A TMP FIFO (elsőként be, elsőként ki) alapon pufferolja — a darabok abban a sorrendben hagyják el a puffert, amelyben beléptek. Kérésre több útvonalú pufferek is kivitelezhetők, amelyek a darabokat a célgéptől függően különböző sávokra válogatják.',
        },
      },
      {
        question: { de: 'Wird der TMP in die Linien-Steuerung integriert?', en: 'Is the TMP integrated into the line control?', cz: 'Integruje se TMP do řízení linky?', sk: 'Integruje sa TMP do riadenia linky?', hu: 'Integrálódik a TMP a sorvezérlésbe?' },
        answer: {
          de: 'Ja — der TMP wird über SPS-Schnittstelle in die übergeordnete Linien-Steuerung eingebunden. So weiß das System jederzeit, wie voll der Puffer ist, und kann entsprechend die Anforderungen an vor- und nachgelagerte Stationen priorisieren.',
          en: 'Yes — the TMP is integrated via PLC interface into the overarching line control. Thus the system knows at all times how full the buffer is and can prioritise requests to upstream and downstream stations accordingly.',
          cz: 'Ano — TMP se integruje přes PLC rozhraní do nadřazeného řízení linky. Systém tak ví v každém okamžiku, jak je pufr naplněn, a může odpovídajícím způsobem priorizovat požadavky na předcházející a navazující stanice.',
          sk: 'Áno — TMP sa integruje cez PLC rozhranie do nadradeného riadenia linky. Systém tak vie v každom okamihu, ako je pufor naplnený, a môže zodpovedajúcim spôsobom priorizovať požiadavky na predchádzajúce a nadväzujúce stanice.',
          hu: 'Igen — a TMP PLC interfészen keresztül integrálódik a felettes sorvezérlésbe. A rendszer így bármikor tudja, mennyire van tele a puffer, és ennek megfelelően rangsorolhatja a megelőző és követő állomások iránti kéréseket.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  DOOR — drx                                                         */
  /* ------------------------------------------------------------------ */
  'drx': {
    longDescription: {
      de: `Der Barbaric DRX ist ein spezialisierter Vakuumheber für das Handling einzelner Türen in Tür- und Möbelfertigung. Im Gegensatz zu Standard-Plattenhebern ist der DRX auf die besonderen Anforderungen bei der Türmanipulation ausgelegt: asymmetrische Gewichtsverteilung, empfindliche Oberflächen und präzise Positionierung beim Bestücken von Lackier-, Montage- oder Verpackungsstationen. Die Sauggreifer-Konfiguration ist auf Türformate abgestimmt, das Steuerungssystem erlaubt millimetergenaues Ablegen ohne Kippmomente. Typische Einsatzbereiche sind Türhersteller (Innen-, Haus-, Schiebe- und Spezialtüren), Türzargenfertiger sowie Möbelwerke mit integrierter Türfertigung. Der DRX entlastet Mitarbeiter von schweren Hebevorgängen, schützt empfindliche Lack- oder Folienoberflächen vor Beschädigung und steigert die Produktivität im Türhandling. Asamer liefert den DRX für Tür- und Möbelhersteller in CZ, SK und HU inklusive Sicherheitsabnahme.`,
      en: `The Barbaric DRX is a specialised vacuum lifter for handling individual doors in door and furniture manufacturing. Unlike standard panel lifters, the DRX is designed for the specific requirements of door handling: asymmetric weight distribution, delicate surfaces and precise positioning when loading paint, assembly or packaging stations. The suction gripper configuration is matched to door formats; the control system allows millimetre-precise placement without tilting moments. Typical applications are door manufacturers (interior, entrance, sliding and special doors), door frame producers and furniture plants with integrated door production. The DRX relieves employees from heavy lifting, protects sensitive paint or foil surfaces from damage and increases productivity in door handling. Asamer supplies the DRX to door and furniture manufacturers in CZ, SK and HU — including safety acceptance.`,
      cz: `Barbaric DRX je specializovaný vakuový zvedák pro manipulaci s jednotlivými dveřmi ve výrobě dveří a nábytku. Na rozdíl od standardních deskových zvedáků je DRX navržen pro specifické požadavky manipulace s dveřmi: asymetrické rozložení hmotnosti, citlivé povrchy a přesné polohování při zakládání lakovacích, montážních nebo balicích stanic. Konfigurace přísavkových úchopů je sladěna s formáty dveří, řídicí systém umožňuje milimetrové polohování bez klopných momentů. Typické oblasti použití jsou výrobci dveří (vnitřní, domovní, posuvné a speciální dveře), výrobci zárubní a nábytkářské závody s integrovanou výrobou dveří. DRX odlehčuje pracovníky od těžkých zvedání, chrání citlivé lakové nebo fóliové povrchy před poškozením a zvyšuje produktivitu při manipulaci s dveřmi. Asamer dodává DRX výrobcům dveří a nábytku v CZ, SK a HU — včetně bezpečnostního schválení.`,
      sk: `Barbaric DRX je špecializovaný vákuový zdvihák pre manipuláciu s jednotlivými dverami vo výrobe dverí a nábytku. Na rozdiel od štandardných doskových zdvihákov je DRX navrhnutý pre špecifické požiadavky manipulácie s dverami: asymetrické rozloženie hmotnosti, citlivé povrchy a presné polohovanie pri zakladaní lakovacích, montážnych alebo baliacich staníc. Konfigurácia prísavkových úchopov je zladená s formátmi dverí, riadiaci systém umožňuje milimetrové polohovanie bez klopných momentov. Typické oblasti použitia sú výrobcovia dverí (vnútorné, domové, posuvné a špeciálne dvere), výrobcovia zárubní a nábytkárske závody s integrovanou výrobou dverí. DRX odľahčuje pracovníkov od ťažkých zdvíhaní, chráni citlivé lakové alebo fóliové povrchy pred poškodením a zvyšuje produktivitu pri manipulácii s dverami. Asamer dodáva DRX výrobcom dverí a nábytku v CZ, SK a HU — vrátane bezpečnostného schválenia.`,
      hu: `A Barbaric DRX egyedi ajtók kezelésére szolgáló speciális vákuumemelő ajtó- és bútorgyártásban. A szabvány lapemelőkkel ellentétben a DRX-et az ajtókezelés különleges igényeire tervezték: aszimmetrikus súlyelosztás, érzékeny felületek és precíz pozicionálás festő-, szerelő- vagy csomagoló állomások betöltésekor. A szívótárcsák konfigurációja az ajtóformátumokhoz igazodik, a vezérlőrendszer billentőnyomatékok nélküli milliméter pontos lerakást tesz lehetővé. Tipikus alkalmazási területek az ajtógyártók (beltéri, bejárati, toló és különleges ajtók), ajtótok-gyártók és integrált ajtógyártással rendelkező bútorgyárak. A DRX tehermentesíti a munkavállalókat a nehéz emelésektől, megóvja az érzékeny lakk- vagy fóliafelületeket a sérüléstől, és növeli az ajtókezelés termelékenységét. Az Asamer ajtó- és bútorgyártóknak szállítja a DRX-et Csehország, Szlovákia és Magyarország területén — biztonsági átvétellel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Tür-Lackierlinien', en: 'For door paint lines', cz: 'Pro lakovací linky dveří', sk: 'Pre lakovacie linky dverí', hu: 'Ajtó-festősorokhoz' },
        body: {
          de: 'Beim Bestücken einer Tür-Lackierlinie muss jedes Türblatt exakt auf die Förderkette gelegt werden — ohne Kontakt zur bereits lackierten Seite. Der DRX greift die Tür an der Unterseite mit Vakuum und setzt sie präzise ab, ohne dass die Oberseite berührt wird.',
          en: 'When loading a door paint line, every door leaf must be placed exactly on the conveyor chain — without contact to the already-painted side. The DRX grips the door from below with vacuum and sets it down precisely without touching the top surface.',
          cz: 'Při zakládání tür lakovací linky musí být každé dveřní křídlo přesně položeno na dopravníkový řetěz — bez kontaktu s již lakovanou stranou. DRX uchopí dveře vakuově zespodu a přesně je odloží, aniž by došlo k dotyku horní strany.',
          sk: 'Pri zakladaní dverovej lakovacej linky musí byť každé dverové krídlo presne položené na dopravníkovú reťaz — bez kontaktu s už lakovanou stranou. DRX uchopí dvere vákuovo zospodu a presne ich odloží bez toho, aby došlo k dotyku hornej strany.',
          hu: 'Egy ajtó-festősor betöltésekor minden ajtószárnyat pontosan kell a szállítóláncra helyezni — a már festett oldal érintése nélkül. A DRX alulról vákuummal fogja meg az ajtót, és pontosan leteszi, anélkül hogy a felső felületet érintené.',
        },
      },
      {
        heading: { de: 'Für Tür-Montage und Verpackung', en: 'For door assembly and packaging', cz: 'Pro montáž a balení dveří', sk: 'Pre montáž a balenie dverí', hu: 'Ajtó-szereléshez és csomagoláshoz' },
        body: {
          de: 'In der Tür-Endmontage und an der Verpackungsstation bringt der DRX fertige Türblätter berührungslos in die richtige Position. Das schützt die empfindlichen Oberflächen (Lack, Folie, HPL) vor Kratzern und Druckstellen, die bei manuellem Handling häufig auftreten.',
          en: 'In final door assembly and at the packaging station, the DRX brings finished door leaves contact-free into the correct position. This protects sensitive surfaces (paint, foil, HPL) from scratches and pressure marks that frequently occur with manual handling.',
          cz: 'V koncové montáži dveří a na baliční stanici DRX přivádí hotová dveřní křídla bezkontaktně do správné polohy. Tím chrání citlivé povrchy (lak, fólie, HPL) před škrábanci a tlakovými otlaky, které se při manuální manipulaci často objevují.',
          sk: 'Pri koncovej montáži dverí a na baliacej stanici DRX privádza hotové dverové krídla bezkontaktne do správnej polohy. Tým chráni citlivé povrchy (lak, fólia, HPL) pred škrabancami a tlakovými odtlačkami, ktoré sa pri manuálnej manipulácii často objavujú.',
          hu: 'Az ajtó végszerelésénél és a csomagoló állomáson a DRX érintésmentesen viszi a kész ajtószárnyakat a megfelelő pozícióba. Ez megóvja az érzékeny felületeket (lakk, fólia, HPL) a karcolódástól és a nyomódásoktól, amelyek manuális kezelésnél gyakran előfordulnak.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Wählen Sie den DRX, wenn Sie in Ihrer Produktion täglich Dutzende oder Hunderte von Türen handhaben und die Oberflächenqualität entscheidend ist. Für klassisches Plattenhandling reicht der UWL-3 aus; für sehr große oder schwere Lasten ist der UWL-5 die richtige Wahl. Asamer klärt die geeignete Ausführung mit Ihnen vor Ort.',
      en: 'Choose the DRX if you handle dozens or hundreds of doors daily in your production and surface quality is crucial. For classic panel handling, the UWL-3 is sufficient; for very large or heavy loads, the UWL-5 is the right choice. Asamer clarifies the suitable version with you on-site.',
      cz: 'Zvolte DRX, pokud denně ve vaší výrobě manipulujete s desítkami nebo stovkami dveří a kvalita povrchu je rozhodující. Pro klasickou manipulaci s deskami stačí UWL-3; pro velmi velká nebo těžká břemena je správnou volbou UWL-5. Asamer vám vhodné provedení upřesní na místě.',
      sk: 'Zvoľte DRX, ak denne vo vašej výrobe manipulujete s desiatkami alebo stovkami dverí a kvalita povrchu je rozhodujúca. Pre klasickú manipuláciu s doskami stačí UWL-3; pre veľmi veľké alebo ťažké bremená je správnou voľbou UWL-5. Asamer vám vhodné prevedenie upresní na mieste.',
      hu: 'Válassza a DRX-et, ha gyártásában naponta tucatnyi vagy több száz ajtót kezel, és a felületminőség döntő jelentőségű. Klasszikus lapkezeléshez az UWL-3 elegendő; nagyon nagy vagy nehéz terhelésekhez az UWL-5 a megfelelő választás. Az Asamer helyben tisztázza Önnel a megfelelő kivitelt.',
    },
    faq: [
      {
        question: { de: 'Welche Türgewichte kann der DRX heben?', en: 'What door weights can the DRX lift?', cz: 'Jaké hmotnosti dveří DRX uzdvihne?', sk: 'Aké hmotnosti dverí DRX zdvihne?', hu: 'Milyen ajtósúlyokat tud a DRX emelni?' },
        answer: {
          de: 'Typische Traglasten liegen zwischen 40 und 150 kg — abdeckend vom Zimmertürblatt bis zur Haustür mit Stahlkern. Die exakte Auslegung hängt vom Türmaterial und der Sauggreifer-Konfiguration ab.',
          en: 'Typical load capacities are between 40 and 150 kg — covering from interior door leaves to front doors with steel cores. Exact dimensioning depends on door material and suction gripper configuration.',
          cz: 'Typické nosnosti se pohybují mezi 40 a 150 kg — pokrývající od vnitřních dveřních křídel po vchodové dveře s ocelovým jádrem. Přesné dimenzování závisí na materiálu dveří a konfiguraci přísavkových úchopů.',
          sk: 'Typické nosnosti sa pohybujú medzi 40 a 150 kg — pokrývajúce od vnútorných dverových krídel po vchodové dvere s oceľovým jadrom. Presné dimenzovanie závisí od materiálu dverí a konfigurácie prísavkových úchopov.',
          hu: 'A tipikus teherbírás 40 és 150 kg között mozog — a beltéri ajtószárnyaktól egészen az acélmagos bejárati ajtókig lefedve. A pontos méretezés az ajtó anyagától és a szívótárcsák konfigurációjától függ.',
        },
      },
      {
        question: { de: 'Funktioniert der DRX auch bei lackierten oder folierten Oberflächen?', en: 'Does the DRX work with painted or foiled surfaces?', cz: 'Funguje DRX i na lakovaných nebo foliovaných površích?', sk: 'Funguje DRX aj na lakovaných alebo fóliovaných povrchoch?', hu: 'Működik a DRX lakkozott vagy fóliázott felületeken is?' },
        answer: {
          de: 'Ja — mit angepassten Sauggreifern (weiche Saugscheiben oder Unterdruck-Saugflächen) lassen sich auch hochglänzende Lacke oder empfindliche Folien ohne Abdruck handhaben. Asamer stimmt die Saugertechnik mit Ihrem Oberflächenmaterial ab.',
          en: 'Yes — with adapted suction grippers (soft suction cups or vacuum suction surfaces), even high-gloss paints or sensitive foils can be handled without leaving marks. Asamer matches suction technology to your surface material.',
          cz: 'Ano — s upravenými přísavkovými úchopy (měkké přísavky nebo vakuové sací plochy) lze manipulovat i s vysoce lesklými laky nebo citlivými fóliemi bez otisku. Asamer sací techniku sladí s vaším povrchovým materiálem.',
          sk: 'Áno — s upravenými prísavkovými úchopmi (mäkké prísavky alebo vákuové sacie plochy) je možné manipulovať aj s vysoko lesklými lakmi alebo citlivými fóliami bez odtlačku. Asamer saciu techniku zladí s vaším povrchovým materiálom.',
          hu: 'Igen — testreszabott szívótárcsákkal (puha szívókorongok vagy vákuumos szívófelületek) a magas fényű lakkok vagy érzékeny fóliák is nyommentesen kezelhetők. Az Asamer a szívótechnikát az Ön felületi anyagához igazítja.',
        },
      },
      {
        question: { de: 'Braucht der DRX eine externe Druckluftversorgung?', en: 'Does the DRX need an external compressed air supply?', cz: 'Potřebuje DRX externí zásobování stlačeným vzduchem?', sk: 'Potrebuje DRX externé zásobovanie stlačeným vzduchom?', hu: 'Szükséges a DRX-hez külső sűrített levegős ellátás?' },
        answer: {
          de: 'Die Standard-Ausführung arbeitet mit integrierter Vakuumpumpe und benötigt nur einen Stromanschluss. Für Hochleistungs-Varianten mit schnellen Taktzeiten ist eine Druckluftanbindung optional verfügbar.',
          en: 'The standard version works with an integrated vacuum pump and only needs a power connection. For high-performance variants with fast cycle times, a compressed air connection is optionally available.',
          cz: 'Standardní provedení pracuje s integrovaným vakuovým čerpadlem a potřebuje pouze elektrické připojení. Pro vysoce výkonné varianty s rychlými dobami taktu je volitelně k dispozici napojení na stlačený vzduch.',
          sk: 'Štandardné prevedenie pracuje s integrovaným vákuovým čerpadlom a potrebuje iba elektrické pripojenie. Pre vysoko výkonné varianty s rýchlymi časmi taktu je voliteľne k dispozícii napojenie na stlačený vzduch.',
          hu: 'A szabvány kivitel integrált vákuumszivattyúval dolgozik, és csak elektromos csatlakozást igényel. Gyors ciklusidejű, nagy teljesítményű változatokhoz opcionálisan elérhető sűrített levegős csatlakozás.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  DOOR — csf-industrial-turen                                        */
  /* ------------------------------------------------------------------ */
  'csf-industrial-turen': {
    longDescription: {
      de: `Das Barbaric CSF Industrial für Türen ist ein vollautomatisches Türenlager für die industrielle Türenproduktion. Anders als beim klassischen Plattenlager werden hier fertig bearbeitete Türen mit bereits montierten Beschlägen, Dichtungen oder Griffen sicher eingelagert und kommissioniert — ohne Beschädigung empfindlicher Oberflächen oder anmontierter Teile. Der Vakuumkran nimmt jede Tür einzeln auf, bewegt sie mit geringer Beschleunigung zum Ziellagerplatz und legt sie exakt positioniert ab. Chaotische Einlagerung nach Auftragsnummer kombiniert mit sortenreiner Kommissionierung ermöglicht auftragsgerechte Versandbildung. Typische Anwendungen sind Haustürenhersteller, Innentürenwerke und Industrietore mit hohem Variantenreichtum. Asamer plant Türenlager für Hersteller in Tschechien, Slowakei und Ungarn — inklusive ERP-Anbindung an Auftrags- und Versandsystem, Schutzmaßnahmen für Beschläge und lokalem Service.`,
      en: `The Barbaric CSF Industrial for doors is a fully automatic door storage system for industrial door production. Unlike classic panel storage, fully machined doors with mounted fittings, seals or handles are stored and picked safely — without damaging sensitive surfaces or attached parts. The vacuum crane picks up each door individually, moves it with low acceleration to the target storage location and sets it down precisely positioned. Chaotic storage by order number combined with sorted picking enables order-specific dispatch grouping. Typical applications are entrance door manufacturers, interior door plants and industrial door producers with a wide variant mix. Asamer plans door storage systems for manufacturers in Czech Republic, Slovakia and Hungary — including ERP connection to order and dispatch systems, fitting protection measures and local service.`,
      cz: `Barbaric CSF Industrial pro dveře je plně automatický sklad dveří pro průmyslovou výrobu dveří. Na rozdíl od klasického skladu desek zde dochází k bezpečnému uskladnění a vychystávání hotově opracovaných dveří s již namontovaným kováním, těsněním nebo klikami — bez poškození citlivých povrchů či připevněných dílů. Vakuový jeřáb bere každé dveře samostatně, přemisťuje je s nízkým zrychlením na cílové skladové místo a přesně je ukládá. Chaotické skladování podle čísla zakázky v kombinaci s třídícím vychystáváním umožňuje sestavování expedice dle zakázek. Typické aplikace jsou výrobci vchodových dveří, výrobny interiérových dveří a průmyslové vrata se širokým sortimentem variant. Asamer projektuje sklady dveří pro výrobce v České republice, na Slovensku a v Maďarsku — včetně napojení ERP na systém zakázek a expedice, opatření na ochranu kování a místního servisu.`,
      sk: `Barbaric CSF Industrial pre dvere je plne automatický sklad dverí pre priemyselnú výrobu dverí. Na rozdiel od klasického skladu dosiek tu dochádza k bezpečnému uskladneniu a vychystávaniu hotovo opracovaných dverí s už namontovaným kovaním, tesnením alebo kľučkami — bez poškodenia citlivých povrchov či pripevnených dielov. Vákuový žeriav berie každé dvere samostatne, presúva ich s nízkym zrýchlením na cieľové skladové miesto a presne ich ukladá. Chaotické skladovanie podľa čísla zákazky v kombinácii s triediacim vychystávaním umožňuje zostavovanie expedície podľa zákaziek. Typické aplikácie sú výrobcovia vchodových dverí, výrobne interiérových dverí a priemyselné brány so širokým sortimentom variantov. Asamer projektuje sklady dverí pre výrobcov v Českej republike, na Slovensku a v Maďarsku — vrátane napojenia ERP na systém zákaziek a expedície, opatrení na ochranu kovania a miestneho servisu.`,
      hu: `A Barbaric CSF Industrial ajtókhoz egy teljesen automatikus ajtóraktár az ipari ajtógyártás számára. A klasszikus lapraktártól eltérően itt a készre megmunkált, már felszerelt vasalattal, tömítéssel vagy kilincsekkel ellátott ajtók tárolása és kikomissiózása történik — az érzékeny felületek vagy felszerelt alkatrészek sérülése nélkül. A vákuumdaru minden ajtót egyenként felvesz, alacsony gyorsulással mozgat a céltárolóhelyre, és pontosan pozicionálva lerakja. A rendelésszám szerinti kaotikus tárolás a fajtatiszta komissiózással kombinálva lehetővé teszi a megrendelésre szabott szállítmányképzést. Tipikus alkalmazások a bejárati ajtógyártók, beltéri ajtóüzemek és a széles variációs kínálatú ipari kapugyártók. Az Asamer ajtóraktárakat tervez csehországi, szlovákiai és magyarországi gyártók számára — a rendelés- és expedíciós rendszerek ERP csatlakoztatásával, vasalatvédő intézkedésekkel és helyi szervizzel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Haustüren- und Innentürenhersteller', en: 'For entrance and interior door manufacturers', cz: 'Pro výrobce vchodových a interiérových dveří', sk: 'Pre výrobcov vchodových a interiérových dverí', hu: 'Bejárati és beltéri ajtógyártók számára' },
        body: {
          de: 'Komplett gefertigte Türen mit Beschlägen, Dichtprofilen oder Zylinderschlössern müssen bis zur Verladung beschädigungsfrei gelagert werden. Das CSF Industrial für Türen nimmt jede Tür mit einem beschlagschonenden Saugsystem auf und lagert auftragsweise ein — so steht bei Abruf die komplette Bestellung versandfertig bereit.',
          en: 'Fully manufactured doors with fittings, sealing profiles or cylinder locks must be stored damage-free until dispatch. The CSF Industrial for doors picks up each door with a fitting-safe suction system and stores by order — so when called off, the complete order is ready for shipment.',
          cz: 'Kompletně vyrobené dveře s kováním, těsnicími profily nebo vložkovými zámky musí být skladovány bez poškození až do naložení. CSF Industrial pro dveře bere každé dveře kováním šetrným sacím systémem a skladuje dle zakázky — při výzvě je celá objednávka připravena k expedici.',
          sk: 'Kompletne vyrobené dvere s kovaním, tesniacimi profilmi alebo vložkovými zámkami musia byť skladované bez poškodenia až do naloženia. CSF Industrial pre dvere berie každé dvere kovanie šetriacim sacím systémom a skladuje podľa zákazky — pri výzve je celá objednávka pripravená na expedíciu.',
          hu: 'A vasalattal, tömítőprofillal vagy hengerzárral ellátott, teljesen legyártott ajtókat sérülésmentesen kell tárolni a berakodásig. A CSF Industrial ajtókhoz minden ajtót vasalatkímélő szívórendszerrel vesz fel és rendelésenként tárol — lehívásra a teljes megrendelés szállításra készen áll.',
        },
      },
      {
        heading: { de: 'Für auftragsbezogene Versandkommissionierung', en: 'For order-based dispatch picking', cz: 'Pro vychystávání expedice podle zakázek', sk: 'Pre vychystávanie expedície podľa zákaziek', hu: 'Rendelésalapú szállítási komissiózáshoz' },
        body: {
          de: 'Über die ERP-Anbindung erkennt das Lager, welche Türen zu welcher Sendung gehören. Der Vakuumkran holt die benötigten Türen in richtiger Reihenfolge zur Verladestation — ohne manuelle Suche oder Verwechslungsgefahr. Das reduziert Falschlieferungen und beschleunigt den Versand erheblich.',
          en: 'Via ERP integration, the storage system knows which doors belong to which shipment. The vacuum crane retrieves the needed doors in correct order to the loading station — without manual search or mix-up risk. This reduces misdeliveries and significantly accelerates dispatch.',
          cz: 'Přes napojení na ERP sklad rozpozná, které dveře patří k jaké zásilce. Vakuový jeřáb přináší potřebné dveře ve správném pořadí na nakládací stanici — bez manuálního hledání a rizika záměny. To snižuje chybné dodávky a výrazně zrychluje expedici.',
          sk: 'Cez napojenie na ERP sklad rozpozná, ktoré dvere patria ku ktorej zásielke. Vákuový žeriav prináša potrebné dvere v správnom poradí na nakladaciu stanicu — bez manuálneho hľadania a rizika zámeny. To znižuje chybné dodávky a výrazne zrýchľuje expedíciu.',
          hu: 'Az ERP integráción keresztül a raktár felismeri, melyik ajtó melyik szállítmányhoz tartozik. A vákuumdaru a szükséges ajtókat helyes sorrendben hozza a rakodóállomásra — manuális keresés és összetévesztési kockázat nélkül. Ez csökkenti a hibás szállításokat és jelentősen gyorsítja az expedíciót.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Das CSF Industrial für Türen ist die richtige Wahl, wenn Sie fertig konfektionierte Türen mit Beschlägen lagern und auftragsbezogen versenden müssen. Für reines Plattenmaterial ohne Anbauteile nutzen Sie das Standard-CSF Industrial; für kleinere Betriebe mit überschaubarem Türenaufkommen ist ein Säulenschwenkkran mit angepassten Saugern eine kostengünstigere Einstiegsvariante. Asamer berät zur passenden Lagerkapazität, zum Saugsystem für Ihr Türenprogramm und zur ERP-Kopplung.',
      en: 'The CSF Industrial for doors is the right choice when fully assembled doors with fittings need to be stored and dispatched order-specifically. For pure panel material without attachments, use the standard CSF Industrial; for smaller operations with moderate door volume, a column slewing crane with adapted suction is a more cost-effective entry option. Asamer advises on suitable storage capacity, suction system for your door programme and ERP coupling.',
      cz: 'CSF Industrial pro dveře je správnou volbou, pokud musíte skladovat a expedovat hotově zkompletované dveře s kováním podle zakázek. Pro čistě deskový materiál bez nadstavby využijete standardní CSF Industrial; pro menší provozy s mírným objemem dveří je sloupový otočný jeřáb s upravenými přísavkami cenově dostupnější vstupní variantou. Asamer poradí s vhodnou skladovací kapacitou, sacím systémem pro váš sortiment dveří a propojením s ERP.',
      sk: 'CSF Industrial pre dvere je správnou voľbou, ak musíte skladovať a expedovať hotovo skompletované dvere s kovaním podľa zákaziek. Pre čisto doskový materiál bez nadstavby využijete štandardný CSF Industrial; pre menšie prevádzky s miernym objemom dverí je stĺpový otočný žeriav s upravenými prísavkami cenovo dostupnejšou vstupnou variantou. Asamer poradí s vhodnou skladovacou kapacitou, sacím systémom pre váš sortiment dverí a prepojením s ERP.',
      hu: 'A CSF Industrial ajtókhoz a megfelelő választás, ha vasalattal ellátott, készre szerelt ajtókat kell rendelésspecifikusan tárolni és expediálni. Tiszta lapanyaghoz szerelvények nélkül a szabvány CSF Industrial rendszert használja; kisebb, mérsékelt ajtómennyiséggel dolgozó üzemek számára egy oszlopos forgódaru testreszabott szívótárcsákkal költséghatékonyabb belépő változat. Az Asamer a megfelelő tárolókapacitás, az ajtóprogramjához illő szívórendszer és az ERP-csatlakoztatás tekintetében nyújt tanácsadást.',
    },
    faq: [
      {
        question: { de: 'Werden Beschläge beim Lagern beschädigt?', en: 'Are fittings damaged during storage?', cz: 'Poškozuje se kování při skladování?', sk: 'Poškodzuje sa kovanie pri skladovaní?', hu: 'Sérülnek a vasalatok tárolás közben?' },
        answer: {
          de: 'Nein — das CSF Industrial für Türen arbeitet mit reduzierten Beschleunigungen und einem speziell ausgelegten Sauggreifer, der Beschläge, Dichtungen und Griffe aussparen kann. Die Ablageplätze sind mit weichen Auflagen versehen, sodass Oberflächen und Anbauteile geschützt bleiben.',
          en: 'No — the CSF Industrial for doors operates with reduced accelerations and a specially designed suction gripper that can avoid fittings, seals and handles. Storage positions feature soft supports so surfaces and attachments remain protected.',
          cz: 'Ne — CSF Industrial pro dveře pracuje se sníženými zrychleními a speciálně navrženým sacím úchopem, který dokáže obejít kování, těsnění a kliky. Odkládací místa jsou opatřena měkkými podložkami, takže povrchy a nadstavbové díly zůstávají chráněny.',
          sk: 'Nie — CSF Industrial pre dvere pracuje so zníženými zrýchleniami a špeciálne navrhnutým sacím úchopom, ktorý dokáže obísť kovanie, tesnenia a kľučky. Odkladacie miesta sú opatrené mäkkými podložkami, takže povrchy a nadstavbové diely zostávajú chránené.',
          hu: 'Nem — a CSF Industrial ajtókhoz csökkentett gyorsulásokkal és speciálisan tervezett vákuumos megfogóval dolgozik, amely képes kikerülni a vasalatokat, tömítéseket és kilincseket. A tárolóhelyek puha alátétekkel rendelkeznek, így a felületek és a felszerelt alkatrészek védettek maradnak.',
        },
      },
      {
        question: { de: 'Welche Türformate und Gewichte sind möglich?', en: 'Which door formats and weights are possible?', cz: 'Jaké formáty a hmotnosti dveří jsou možné?', sk: 'Aké formáty a hmotnosti dverí sú možné?', hu: 'Milyen ajtóformátumok és tömegek lehetségesek?' },
        answer: {
          de: 'Das System wird auf Ihr Türenprogramm ausgelegt — typisch von Innentüren ab 40 kg bis zu großen Haustüren oder Industrietoren mit mehreren hundert Kilogramm. Sondertüren wie Schallschutz- oder Sicherheitstüren prüft Asamer gemeinsam mit Barbaric individuell.',
          en: 'The system is engineered for your door programme — typically from interior doors from 40 kg up to large entrance doors or industrial doors with several hundred kilograms. Special doors such as acoustic or security doors are reviewed individually by Asamer together with Barbaric.',
          cz: 'Systém se dimenzuje pro váš sortiment dveří — typicky od interiérových dveří od 40 kg až po velké vchodové dveře nebo průmyslová vrata s několika sty kilogramy. Speciální dveře jako protihlukové nebo bezpečnostní Asamer individuálně posoudí společně s Barbaric.',
          sk: 'Systém sa dimenzuje pre váš sortiment dverí — typicky od interiérových dverí od 40 kg až po veľké vchodové dvere alebo priemyselné brány s niekoľkými stovkami kilogramov. Špeciálne dvere ako protihlukové alebo bezpečnostné Asamer individuálne posúdi spoločne s Barbaric.',
          hu: 'A rendszer az ajtóprogramjára méretezett — jellemzően 40 kg-tól beltéri ajtóktól a több száz kilogrammos nagy bejárati ajtókig vagy ipari kapukig. A különleges ajtókat, mint a hangszigetelő vagy biztonsági ajtók, az Asamer a Barbaric-kal közösen egyedileg bírálja el.',
        },
      },
      {
        question: { de: 'Können auch verpackte oder folierte Türen gelagert werden?', en: 'Can packaged or foil-wrapped doors also be stored?', cz: 'Lze skladovat i zabalené nebo fóliované dveře?', sk: 'Dajú sa skladovať aj zabalené alebo fóliované dvere?', hu: 'Tárolhatók csomagolt vagy fóliázott ajtók is?' },
        answer: {
          de: 'Ja — das Saugsystem wird auf die Oberfläche abgestimmt. Für folierte Türen kommen Sauger mit angepasster Saugkraft und größerer Auflagefläche zum Einsatz; für kartonverpackte Versandgruppen werden hybride Greifer-Konzepte eingeplant. Asamer klärt im Vorprojekt die konkrete Konfiguration.',
          en: 'Yes — the suction system is tuned to the surface. For foil-wrapped doors, suction cups with adapted suction force and larger contact surface are used; for carton-packaged shipping groups, hybrid gripper concepts are planned. Asamer clarifies the specific configuration in the pre-project phase.',
          cz: 'Ano — sací systém je přizpůsoben povrchu. U fóliovaných dveří se používají přísavky s upravenou sací silou a větší dosedací plochou; u kartonem balených expedičních skupin se plánují hybridní úchopové koncepty. Asamer upřesní konkrétní konfiguraci v předprojektové fázi.',
          sk: 'Áno — sací systém je prispôsobený povrchu. Pri fóliovaných dverách sa používajú prísavky s upravenou saciou silou a väčšou dosadacou plochou; pri kartónom balených expedičných skupinách sa plánujú hybridné úchopové koncepty. Asamer upresní konkrétnu konfiguráciu v predprojektovej fáze.',
          hu: 'Igen — a szívórendszer a felülethez van hangolva. Fóliázott ajtókhoz módosított szívóerejű és nagyobb felfekvési felületű szívótárcsákat használnak; kartonba csomagolt szállítási csoportokhoz hibrid megfogó koncepciókat terveznek. Az Asamer a konkrét konfigurációt az előprojekt szakaszban tisztázza.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  DOOR — lps                                                         */
  /* ------------------------------------------------------------------ */
  'lps': {
    longDescription: {
      de: `Das Barbaric LPS ist ein automatisches Türen-Etikettiersystem für Produktionslinien in der industriellen Türenfertigung. Das System druckt und appliziert Versand-, Artikel- oder Transportetiketten mit Barcode und optional RFID direkt auf Türen oder deren Verpackung — vollautomatisch und mit einer Leistung von bis zu 1.000 Etiketten pro Stunde. Die Datenübernahme erfolgt aus dem ERP- oder MES-System, sodass jede Tür eindeutig der Auftragsposition, dem Kunden und der Versandcharge zugeordnet ist. Das LPS integriert sich nahtlos in Barbaric-Türenlager, Plattenaufteillinien oder Kommissionierstationen. Fehletikettierung, manuelle Schreibfehler und aufwändiges Nachsortieren entfallen. Asamer liefert das LPS als autorisierter Barbaric-Händler für Türenhersteller in Tschechien, Slowakei und Ungarn — inklusive ERP-Anbindung, Barcode/RFID-Integration und Inbetriebnahme.`,
      en: `The Barbaric LPS is an automatic door labeling system for production lines in industrial door manufacturing. The system prints and applies shipping, article or transport labels with barcode and optional RFID directly on doors or their packaging — fully automatically and at up to 1,000 labels per hour. Data is imported from the ERP or MES system, so each door is uniquely assigned to order item, customer and dispatch batch. The LPS integrates seamlessly into Barbaric door storage, panel cutting lines or picking stations. Mislabeling, manual typing errors and labor-intensive re-sorting are eliminated. Asamer supplies the LPS as authorized Barbaric dealer for door manufacturers in Czech Republic, Slovakia and Hungary — including ERP integration, barcode/RFID setup and commissioning.`,
      cz: `Barbaric LPS je automatický etiketovací systém dveří pro výrobní linky v průmyslové výrobě dveří. Systém tiskne a aplikuje expediční, artiklové nebo přepravní etikety s čárovým kódem a volitelně RFID přímo na dveře nebo jejich obal — plně automaticky a s výkonem až 1 000 etiket za hodinu. Přenos dat probíhá z ERP nebo MES systému, takže každé dveře jsou jednoznačně přiřazeny k položce zakázky, zákazníkovi a expediční dávce. LPS se bezproblémově integruje do Barbaric skladů dveří, linek na dělení desek nebo vychystávacích stanic. Odpadá chybné etiketování, ruční překlepy a zdlouhavé přetříďování. Asamer dodává LPS jako autorizovaný prodejce Barbaric pro výrobce dveří v České republice, na Slovensku a v Maďarsku — včetně napojení na ERP, integrace čárového kódu/RFID a uvedení do provozu.`,
      sk: `Barbaric LPS je automatický etiketovací systém dverí pre výrobné linky v priemyselnej výrobe dverí. Systém tlačí a aplikuje expedičné, artiklové alebo prepravné etikety s čiarovým kódom a voliteľne RFID priamo na dvere alebo ich obal — plne automaticky a s výkonom až 1 000 etikiet za hodinu. Prenos dát prebieha z ERP alebo MES systému, takže každé dvere sú jednoznačne priradené k položke zákazky, zákazníkovi a expedičnej dávke. LPS sa bezproblémovo integruje do Barbaric skladov dverí, liniek na delenie dosiek alebo vychystávacích staníc. Odpadá chybné etiketovanie, ručné preklepy a zdĺhavé pretrieďovanie. Asamer dodáva LPS ako autorizovaný predajca Barbaric pre výrobcov dverí v Českej republike, na Slovensku a v Maďarsku — vrátane napojenia na ERP, integrácie čiarového kódu/RFID a uvedenia do prevádzky.`,
      hu: `A Barbaric LPS egy automatikus ajtócímkéző rendszer az ipari ajtógyártás termelési soraihoz. A rendszer szállítási, cikk- vagy szállítmánycímkéket nyomtat és helyez fel vonalkóddal és opcionálisan RFID-del közvetlenül az ajtókra vagy azok csomagolására — teljesen automatikusan, akár óránként 1000 címke teljesítménnyel. Az adatátvitel ERP- vagy MES-rendszerből történik, így minden ajtó egyértelműen hozzárendelhető a rendelési tételhez, az ügyfélhez és a szállítási tételhez. Az LPS zökkenőmentesen integrálódik a Barbaric ajtóraktárakba, lapszabászati vonalakba vagy komissiózó állomásokba. Megszűnik a hibás címkézés, a kézi elírás és az idő-igényes átrendezés. Az Asamer az LPS-t hivatalos Barbaric viszonteladóként szállítja csehországi, szlovákiai és magyarországi ajtógyártók számára — ERP-csatlakoztatással, vonalkód/RFID beállítással és üzembe helyezéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Versand- und Chargenetikettierung', en: 'For shipping and batch labeling', cz: 'Pro expediční a dávkové etiketování', sk: 'Pre expedičné a dávkové etiketovanie', hu: 'Szállítási és tételcímkézéshez' },
        body: {
          de: 'Jede produzierte Tür erhält direkt nach der Fertigung oder beim Verpacken ein Etikett mit Auftragsnummer, Kundenadresse und Versandinformation. Die Zuordnung zur ERP-Position ist eindeutig — beim Scannen an der Laderampe bestätigt das System die richtige Tür für die richtige Ladung. Fehler in der Auslieferung sinken dadurch nachweislich.',
          en: 'Every produced door receives a label with order number, customer address and shipping information directly after manufacturing or during packaging. Assignment to the ERP item is unambiguous — when scanning at the loading dock, the system confirms the correct door for the correct shipment. Delivery errors measurably decrease.',
          cz: 'Každé vyrobené dveře dostanou etiketu s číslem zakázky, adresou zákazníka a expedičními informacemi přímo po výrobě nebo při balení. Přiřazení k ERP položce je jednoznačné — při skenování u nakládací rampy systém potvrdí správné dveře pro správnou zásilku. Chyby v dodávkách tak prokazatelně klesají.',
          sk: 'Každé vyrobené dvere dostanú etiketu s číslom zákazky, adresou zákazníka a expedičnými informáciami priamo po výrobe alebo pri balení. Priradenie k ERP položke je jednoznačné — pri skenovaní pri nakladacej rampe systém potvrdí správne dvere pre správnu zásielku. Chyby v dodávkach tak preukázateľne klesajú.',
          hu: 'Minden gyártott ajtó közvetlenül a gyártás után vagy csomagoláskor rendelésszámmal, ügyfélcímmel és szállítási információval ellátott címkét kap. Az ERP tételhez való hozzárendelés egyértelmű — a rakodónál történő szkenneléskor a rendszer megerősíti a helyes ajtót a helyes szállítmányhoz. A szállítási hibák igazolhatóan csökkennek.',
        },
      },
      {
        heading: { de: 'Für RFID-basierte Rückverfolgbarkeit', en: 'For RFID-based traceability', cz: 'Pro sledovatelnost na bázi RFID', sk: 'Pre sledovateľnosť na báze RFID', hu: 'RFID-alapú nyomon követhetőséghez' },
        body: {
          de: 'Mit der optionalen RFID-Ausstattung erhält jede Tür einen eindeutigen Transponder, der entlang der gesamten Wertschöpfungskette ausgelesen werden kann — vom Wareneingang über Montage und Lager bis zur Baustelle. Für Hersteller von Brandschutz- oder Objekttüren ist dies ein wichtiges Argument gegenüber Planern und Generalunternehmern.',
          en: 'With the optional RFID equipment, every door receives a unique transponder that can be read along the entire value chain — from goods receipt through assembly and storage to the construction site. For manufacturers of fire protection or project doors, this is an important argument vis-à-vis planners and general contractors.',
          cz: 'S volitelným RFID vybavením dostane každé dveře jedinečný transpondér, který lze číst v celém hodnotovém řetězci — od příjmu zboží přes montáž a sklad až po stavbu. Pro výrobce protipožárních nebo objektových dveří je to důležitý argument vůči projektantům a generálním dodavatelům.',
          sk: 'S voliteľným RFID vybavením dostane každé dvere jedinečný transpondér, ktorý je možné čítať v celom hodnotovom reťazci — od príjmu tovaru cez montáž a sklad až po stavbu. Pre výrobcov protipožiarnych alebo objektových dverí je to dôležitý argument voči projektantom a generálnym dodávateľom.',
          hu: 'Az opcionális RFID-felszereléssel minden ajtó egyedi transzpondert kap, amely a teljes értékláncban olvasható — az áruátvételtől a szerelésen és raktározáson át az építkezésig. Tűzgátló vagy objektumajtókat gyártóknak ez fontos érv a tervezők és fővállalkozók felé.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Das LPS lohnt sich für Türenhersteller mit mehr als ein paar hundert Türen pro Tag, die auftragsbezogen etikettieren und versenden müssen. Bei kleineren Serien oder reiner Handfertigung ist ein manueller Etikettendrucker ausreichend. Wenn Sie zusätzlich Rückverfolgbarkeit für Brandschutz- oder Objekttüren brauchen, wählen Sie die RFID-Variante. Asamer berät zur Integration in Ihre bestehende Produktionslinie und stimmt die ERP-Anbindung mit Ihrem IT-Verantwortlichen ab.',
      en: 'The LPS is worthwhile for door manufacturers with more than a few hundred doors per day that must label and ship order-specifically. For smaller series or purely manual production, a manual label printer is sufficient. If you additionally need traceability for fire protection or project doors, choose the RFID variant. Asamer advises on integration into your existing production line and coordinates ERP connection with your IT manager.',
      cz: 'LPS se vyplatí výrobcům dveří s více než několika sty dveří denně, kteří musí etiketovat a expedovat podle zakázek. U menších sérií nebo čistě ruční výroby postačuje manuální tiskárna etiket. Pokud navíc potřebujete sledovatelnost pro protipožární nebo objektové dveře, volte variantu RFID. Asamer poradí s integrací do vaší stávající výrobní linky a koordinuje napojení na ERP s vaším IT specialistou.',
      sk: 'LPS sa vyplatí výrobcom dverí s viac ako niekoľkými stovkami dverí denne, ktorí musia etiketovať a expedovať podľa zákaziek. Pri menších sériách alebo čisto ručnej výrobe postačuje manuálna tlačiareň etikiet. Ak navyše potrebujete sledovateľnosť pre protipožiarne alebo objektové dvere, zvoľte variant RFID. Asamer poradí s integráciou do vašej existujúcej výrobnej linky a koordinuje napojenie na ERP s vaším IT špecialistom.',
      hu: 'Az LPS napi néhány száz ajtó feletti gyártóknak éri meg, akiknek rendelésspecifikusan kell címkézniük és szállítaniuk. Kisebb sorozatoknál vagy tisztán kézi gyártásnál a kézi címkenyomtató elegendő. Ha emellett tűzgátló- vagy objektumajtókhoz nyomon követhetőségre is szüksége van, válassza az RFID-változatot. Az Asamer a meglévő gyártósorba történő integrációban nyújt tanácsadást, és az ERP-csatlakoztatást az IT-felelősével egyeztetve hangolja össze.',
    },
    faq: [
      {
        question: { de: 'Welche Etikettenformate und Drucktechniken sind möglich?', en: 'Which label formats and printing technologies are possible?', cz: 'Jaké formáty etiket a tiskové technologie jsou možné?', sk: 'Aké formáty etikiet a tlačové technológie sú možné?', hu: 'Milyen címkeformátumok és nyomtatási technológiák lehetségesek?' },
        answer: {
          de: 'Das LPS arbeitet mit Thermotransfer- oder Thermodirekt-Druck und unterstützt gängige Etikettengrößen von klein (DIN A7) bis groß (DIN A5). Spezialetiketten wie Witterungsbeständig oder Sicherheitsfolie werden auf Anfrage qualifiziert. Asamer stimmt die Auslegung auf Ihre Anwendung ab.',
          en: 'The LPS operates with thermal transfer or direct thermal printing and supports common label sizes from small (DIN A7) to large (DIN A5). Special labels such as weather-resistant or security film are qualified on request. Asamer aligns the configuration to your application.',
          cz: 'LPS pracuje s termotransferovým nebo přímotermálním tiskem a podporuje běžné velikosti etiket od malých (DIN A7) po velké (DIN A5). Speciální etikety jako povětrnostně odolné nebo bezpečnostní fólie se kvalifikují na vyžádání. Asamer sladí konfiguraci s vaší aplikací.',
          sk: 'LPS pracuje s termotransferovou alebo priamotermálnou tlačou a podporuje bežné veľkosti etikiet od malých (DIN A7) po veľké (DIN A5). Špeciálne etikety ako poveternostne odolné alebo bezpečnostné fólie sa kvalifikujú na požiadanie. Asamer zladí konfiguráciu s vašou aplikáciou.',
          hu: 'Az LPS termotranszfer vagy közvetlen termonyomtatással dolgozik, és a szokásos címkeméreteket támogatja a kicsitől (DIN A7) a nagyokig (DIN A5). A speciális címkék, mint az időjárásálló vagy biztonsági fóliák, igény szerint minősíthetők. Az Asamer a konfigurációt az Ön alkalmazásához igazítja.',
        },
      },
      {
        question: { de: 'Wie wird das LPS an unser ERP-System angebunden?', en: 'How is the LPS connected to our ERP system?', cz: 'Jak se LPS napojuje na náš ERP systém?', sk: 'Ako sa LPS napája na náš ERP systém?', hu: 'Hogyan csatlakozik az LPS az ERP rendszerünkhöz?' },
        answer: {
          de: 'Die Anbindung erfolgt über Standard-Schnittstellen wie REST, OPC-UA oder CSV-Import je nach ERP. Für SAP, Microsoft Dynamics, proAlpha oder branchenspezifische Systeme wie KlaussnerPRO nutzen wir erprobte Konnektoren. Die Programmierung koordiniert Asamer mit Ihrem IT-Team.',
          en: 'Connection is via standard interfaces such as REST, OPC-UA or CSV import depending on the ERP. For SAP, Microsoft Dynamics, proAlpha or industry-specific systems such as KlaussnerPRO we use proven connectors. Asamer coordinates programming with your IT team.',
          cz: 'Napojení se realizuje přes standardní rozhraní jako REST, OPC-UA nebo CSV import podle ERP. Pro SAP, Microsoft Dynamics, proAlpha nebo odvětvově specifické systémy jako KlaussnerPRO využíváme osvědčené konektory. Programování koordinuje Asamer s vaším IT týmem.',
          sk: 'Napojenie sa realizuje cez štandardné rozhrania ako REST, OPC-UA alebo CSV import podľa ERP. Pre SAP, Microsoft Dynamics, proAlpha alebo odvetvovo špecifické systémy ako KlaussnerPRO využívame osvedčené konektory. Programovanie koordinuje Asamer s vaším IT tímom.',
          hu: 'A csatlakoztatás szabvány interfészeken keresztül történik, mint a REST, OPC-UA vagy CSV-import, az ERP-től függően. SAP, Microsoft Dynamics, proAlpha vagy iparág-specifikus rendszerekhez, mint a KlaussnerPRO, bevált konnektorokat használunk. A programozást az Asamer az Ön IT-csapatával egyeztetve koordinálja.',
        },
      },
      {
        question: { de: 'Wie hoch ist die Verfügbarkeit im Produktionsbetrieb?', en: 'How high is availability in production operation?', cz: 'Jak vysoká je dostupnost v provozu?', sk: 'Aká vysoká je dostupnosť v prevádzke?', hu: 'Mennyire magas a rendelkezésre állás termelési üzemben?' },
        answer: {
          de: 'Das LPS ist für Mehrschichtbetrieb ausgelegt und erreicht typische Verfügbarkeiten über 99 %. Standard-Etikettenrollen reichen für mehrere Stunden, der Wechsel erfolgt ohne Unterbrechung der Linie. Asamer bietet Wartungsverträge mit Reaktionszeiten ab 24 h in Tschechien, der Slowakei und Ungarn.',
          en: 'The LPS is designed for multi-shift operation and achieves typical availability above 99%. Standard label rolls last several hours, and changeover happens without stopping the line. Asamer offers maintenance contracts with response times from 24 h in Czech Republic, Slovakia and Hungary.',
          cz: 'LPS je dimenzován pro vícesmenný provoz a dosahuje typické dostupnosti nad 99 %. Standardní role etiket vystačí na několik hodin, výměna probíhá bez přerušení linky. Asamer nabízí servisní smlouvy s reakční dobou od 24 h v České republice, na Slovensku a v Maďarsku.',
          sk: 'LPS je dimenzovaný pre viaczmennú prevádzku a dosahuje typické dostupnosti nad 99 %. Štandardné rolky etikiet vystačia na niekoľko hodín, výmena prebieha bez prerušenia linky. Asamer ponúka servisné zmluvy s reakčnými časmi od 24 h v Českej republike, na Slovensku a v Maďarsku.',
          hu: 'Az LPS többműszakos üzemre tervezett, és tipikusan 99% feletti rendelkezésre állást ér el. A szabvány címketekercsek több órára elegendők, a csere a sor leállítása nélkül történik. Az Asamer 24 órától kezdődő reakcióidejű karbantartási szerződéseket kínál Csehországban, Szlovákiában és Magyarországon.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  VACUUM-LIFTERS — uwl-1                                             */
  /* ------------------------------------------------------------------ */
  'uwl-1': {
    longDescription: {
      de: `Der Barbaric UWL-1 ist der Einstiegs-Vakuumheber für kleinere Werkstätten, Einzelfertiger und mittelständische Schreinereien, die Plattenmaterial ergonomisch handhaben wollen, aber kein großes Investitionsbudget aufbringen möchten. Das kompakte Gerät bewältigt typische Plattenformate und überschaubare Lasten zuverlässig und entlastet einen einzelnen Bediener sofort spürbar von schweren Hebevorgängen. Der UWL-1 arbeitet mit integrierter Vakuumpumpe ohne Druckluftanschluss und lässt sich unkompliziert an vorhandene Schwenkkräne oder einfache Schienensysteme koppeln. Für Tischlereien, die gerade von reinem Handbetrieb auf unterstützte Plattenhandhabung umsteigen, ist der UWL-1 die wirtschaftlich günstige Wahl mit kurzer Amortisation. Asamer berät als autorisierter Barbaric-Händler zur Auslegung, übernimmt die Inbetriebnahme und bietet DGUV-konforme Sicherheitsprüfung in Tschechien, der Slowakei und Ungarn.`,
      en: `The Barbaric UWL-1 is the entry-level vacuum lifter for smaller workshops, custom joiners and mid-sized carpentry operations that want ergonomic panel handling without a large capital investment. The compact unit reliably handles typical panel formats and moderate loads, immediately relieving a single operator from heavy lifting. The UWL-1 works with an integrated vacuum pump without compressed air connection and couples easily to existing slewing cranes or simple rail systems. For joinery shops moving from pure manual operation to assisted panel handling, the UWL-1 is the economical choice with short payback. Asamer advises as authorized Barbaric dealer on sizing, handles commissioning and provides DGUV-compliant safety inspection in Czech Republic, Slovakia and Hungary.`,
      cz: `Barbaric UWL-1 je vstupní vakuový zvedák pro menší dílny, zakázkové truhláře a středně velké truhlářské provozy, které chtějí ergonomickou manipulaci s deskovým materiálem bez velké investice. Kompaktní zařízení spolehlivě zvládá typické formáty desek a přiměřená zatížení a okamžitě citelně odlehčuje jednomu obsluhujícímu od těžkého zvedání. UWL-1 pracuje s integrovaným vakuovým čerpadlem bez napojení na stlačený vzduch a snadno se spojuje se stávajícími otočnými jeřáby nebo jednoduchými kolejnicovými systémy. Pro truhlárny, které přecházejí z čistě ručního provozu na podporovanou manipulaci s deskami, je UWL-1 ekonomicky výhodnou volbou s krátkou návratností. Asamer jako autorizovaný prodejce Barbaric poradí s dimenzováním, zajistí uvedení do provozu a nabízí bezpečnostní kontrolu dle DGUV v České republice, na Slovensku a v Maďarsku.`,
      sk: `Barbaric UWL-1 je vstupný vákuový zdvíhač pre menšie dielne, zákazkových stolárov a stredne veľké stolárske prevádzky, ktoré chcú ergonomickú manipuláciu s doskovým materiálom bez veľkej investície. Kompaktné zariadenie spoľahlivo zvláda typické formáty dosiek a primerané zaťaženia a okamžite citeľne odľahčuje jednému obsluhujúcemu od ťažkého zdvíhania. UWL-1 pracuje s integrovaným vákuovým čerpadlom bez napojenia na stlačený vzduch a ľahko sa spája s existujúcimi otočnými žeriavmi alebo jednoduchými koľajnicovými systémami. Pre stolárstva, ktoré prechádzajú z čisto ručnej prevádzky na podporovanú manipuláciu s doskami, je UWL-1 ekonomicky výhodnou voľbou s krátkou návratnosťou. Asamer ako autorizovaný predajca Barbaric poradí s dimenzovaním, zabezpečí uvedenie do prevádzky a ponúka bezpečnostnú kontrolu podľa DGUV v Českej republike, na Slovensku a v Maďarsku.`,
      hu: `A Barbaric UWL-1 a belépőszintű vákuumemelő kisebb műhelyek, egyedi asztalosok és középméretű asztalosüzemek számára, akik nagyobb beruházás nélkül szeretnének ergonomikus lapkezelést. A kompakt készülék megbízhatóan kezeli a tipikus lapformátumokat és mérsékelt terheléseket, és egyetlen kezelőt azonnal érezhetően tehermentesít a nehéz emelésektől. Az UWL-1 integrált vákuumszivattyúval, sűrített levegős csatlakozás nélkül dolgozik, és könnyen csatlakoztatható meglévő forgódarukhoz vagy egyszerű sínrendszerekhez. A tisztán kézi üzemelésről támogatott lapkezelésre átállni kívánó asztalosműhelyek számára az UWL-1 gazdaságos választás rövid megtérülési idővel. Az Asamer hivatalos Barbaric viszonteladóként tanácsot ad a méretezéshez, elvégzi az üzembe helyezést és DGUV-nak megfelelő biztonsági felülvizsgálatot kínál Csehországban, Szlovákiában és Magyarországon.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für kleine Tischlereien mit moderatem Plattenaufkommen', en: 'For small joinery shops with moderate panel volume', cz: 'Pro malé truhlárny s mírným objemem desek', sk: 'Pre malé stolárstva s miernym objemom dosiek', hu: 'Kis asztalosműhelyeknek, mérsékelt lapmennyiséggel' },
        body: {
          de: 'Wenn täglich Dutzende — nicht Hunderte — Platten bewegt werden, reicht der UWL-1 aus. Typische Anwender sind Einzelfertiger, Möbelmanufakturen und Handwerkbetriebe mit zwei bis fünf Mitarbeitern, bei denen sich ein schwererer Vakuumheber nicht rechnet. Die Investition amortisiert sich durch eingesparte Arbeitszeit und verhinderte Rückenbeschwerden bereits im ersten Jahr.',
          en: 'When dozens — not hundreds — of panels are moved daily, the UWL-1 is sufficient. Typical users are custom makers, furniture manufactories and trade operations with two to five employees where a larger vacuum lifter does not pay off. The investment pays back through saved working time and prevented back problems already in the first year.',
          cz: 'Pokud se denně pohybují desítky — nikoli stovky — desek, UWL-1 dostačuje. Typickými uživateli jsou zakázkoví výrobci, nábytkové manufaktury a řemeslné provozy s dvěma až pěti zaměstnanci, kde se větší vakuový zvedák nevyplatí. Investice se vrátí prostřednictvím ušetřeného pracovního času a předejitím zdravotním problémům již v prvním roce.',
          sk: 'Ak sa denne pohybujú desiatky — nie stovky — dosiek, UWL-1 postačuje. Typickými používateľmi sú zákazkoví výrobcovia, nábytkárske manufaktúry a remeselné prevádzky s dvomi až piatimi zamestnancami, kde sa väčší vákuový zdvíhač nevyplatí. Investícia sa vráti prostredníctvom ušetreného pracovného času a predídenia zdravotným problémom už v prvom roku.',
          hu: 'Ha naponta tucatnyi — nem pedig több száz — lapot mozgatnak, az UWL-1 elegendő. Tipikus felhasználók az egyedi gyártók, bútormanufaktúrák és két-öt fős kézműves üzemek, ahol egy nagyobb vákuumemelő nem térül meg. A beruházás már az első évben megtérül a megspórolt munkaidő és a megelőzött egészségügyi problémák révén.',
        },
      },
      {
        heading: { de: 'Für Einsatz an bestehenden Schwenkkränen', en: 'For use with existing slewing cranes', cz: 'Pro nasazení na stávajících otočných jeřábech', sk: 'Pre nasadenie na existujúcich otočných žeriavoch', hu: 'Meglévő forgódarukon történő használathoz' },
        body: {
          de: 'Der UWL-1 lässt sich an vorhandene Säulenschwenkkräne, Wandschwenkkräne oder einfache Deckenschienen anbauen. Die Nachrüstung ist in wenigen Stunden erledigt, ohne größere Umbauten in der Halle. So wird aus einer bestehenden Handhebevorrichtung ein vakuumunterstützter Arbeitsplatz.',
          en: 'The UWL-1 can be attached to existing column slewing cranes, wall slewing cranes or simple ceiling rails. Retrofitting is completed in a few hours without major conversions in the hall. An existing manual lifting device becomes a vacuum-assisted workstation.',
          cz: 'UWL-1 lze připojit ke stávajícím sloupovým otočným jeřábům, nástěnným otočným jeřábům nebo jednoduchým stropním kolejnicím. Dovybavení je hotové za několik hodin bez větších přestaveb v hale. Ze stávajícího ručního zvedacího zařízení se tak stane pracoviště podporované vakuem.',
          sk: 'UWL-1 je možné pripojiť k existujúcim stĺpovým otočným žeriavom, nástenným otočným žeriavom alebo jednoduchým stropným koľajniciam. Dovybavenie je hotové za niekoľko hodín bez väčších prestavieb v hale. Z existujúceho ručného zdvíhacieho zariadenia sa tak stane pracovisko podporované vákuom.',
          hu: 'Az UWL-1 csatlakoztatható meglévő oszlopos forgódarukra, fali forgódarukra vagy egyszerű mennyezeti sínekre. Az utólagos beépítés néhány óra alatt elkészül, nagyobb átépítések nélkül a csarnokban. A meglévő kézi emelőeszközből így vákuummal támogatott munkaállomás lesz.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Der UWL-1 ist die richtige Wahl, wenn Sie mit begrenztem Budget in die Vakuumhandhabung einsteigen und vor allem kleinere bis mittlere Lasten bewegen. Für typische Möbelbetriebe mit regelmäßigem großformatigem Plattenhandling ist der UWL-3 das bewährte Standardmodell. Für dünne oder poröse Platten greifen Sie zum UWL-1S, für sehr schwere Türen und Industrieplatten zum UWL-5. Asamer berechnet gern im Vorgespräch, welches Modell wirtschaftlich zu Ihrem Plattenaufkommen passt.',
      en: 'The UWL-1 is the right choice if you want to enter vacuum handling on a limited budget and primarily move smaller to medium loads. For typical furniture operations with regular large-format panel handling, the UWL-3 is the proven standard model. For thin or porous panels, choose the UWL-1S; for very heavy doors and industrial panels, the UWL-5. Asamer gladly calculates in advance which model economically fits your panel volume.',
      cz: 'UWL-1 je správnou volbou, pokud chcete s omezeným rozpočtem vstoupit do vakuové manipulace a pohybovat převážně menšími až středními zatíženími. Pro typické nábytkářské provozy s pravidelnou manipulací velkoformátových desek je osvědčeným standardním modelem UWL-3. Pro tenké nebo porézní desky zvolte UWL-1S, pro velmi těžké dveře a průmyslové desky UWL-5. Asamer rád v předběžné konzultaci spočítá, který model ekonomicky odpovídá vašemu objemu desek.',
      sk: 'UWL-1 je správnou voľbou, ak chcete s obmedzeným rozpočtom vstúpiť do vákuovej manipulácie a pohybovať prevažne menšími až strednými zaťaženiami. Pre typické nábytkárske prevádzky s pravidelnou manipuláciou veľkoformátových dosiek je osvedčeným štandardným modelom UWL-3. Pre tenké alebo porézne dosky zvoľte UWL-1S, pre veľmi ťažké dvere a priemyselné dosky UWL-5. Asamer rád v predbežnej konzultácii spočíta, ktorý model ekonomicky zodpovedá vášmu objemu dosiek.',
      hu: 'Az UWL-1 a megfelelő választás, ha korlátozott költségvetéssel szeretne belépni a vákuumos anyagmozgatásba, és főként kisebb-közepes terheléseket kell mozgatnia. Tipikus bútorüzemek rendszeres nagy formátumú lapkezeléséhez az UWL-3 a bevált szabványmodell. Vékony vagy porózus lapokhoz válassza az UWL-1S-t, nagyon nehéz ajtókhoz és ipari lapokhoz az UWL-5-öt. Az Asamer az előzetes egyeztetésen szívesen kiszámítja, melyik modell illik gazdaságilag az Ön lapmennyiségéhez.',
    },
    faq: [
      {
        question: { de: 'Welche maximale Traglast hat der UWL-1?', en: 'What is the maximum load capacity of the UWL-1?', cz: 'Jakou má UWL-1 maximální nosnost?', sk: 'Akú má UWL-1 maximálnu nosnosť?', hu: 'Mi az UWL-1 maximális teherbírása?' },
        answer: {
          de: 'Der UWL-1 ist für Einsteiger-Lasten ausgelegt und deckt die meisten Plattenformate ab, die in kleinen Tischlereien vorkommen. Die exakte Traglast hängt von der Saugfläche und Plattenoberfläche ab — Asamer berechnet die für Sie passende Konfiguration vor der Bestellung.',
          en: 'The UWL-1 is designed for entry-level loads and covers most panel formats encountered in small joinery shops. The exact load capacity depends on suction area and panel surface — Asamer calculates the right configuration for you before ordering.',
          cz: 'UWL-1 je dimenzován na vstupní zatížení a pokrývá většinu formátů desek vyskytujících se v malých truhlárnách. Přesná nosnost závisí na sací ploše a povrchu desky — Asamer spočítá vhodnou konfiguraci před objednávkou.',
          sk: 'UWL-1 je dimenzovaný na vstupné zaťaženia a pokrýva väčšinu formátov dosiek, ktoré sa vyskytujú v malých stolárstvach. Presná nosnosť závisí od sacej plochy a povrchu dosky — Asamer spočíta vhodnú konfiguráciu pred objednávkou.',
          hu: 'Az UWL-1 belépőszintű terhelésekre tervezett, és lefedi a kis asztalosműhelyekben előforduló lapformátumok többségét. A pontos teherbírás a szívófelülettől és a lap felületétől függ — az Asamer megrendelés előtt kiszámítja az Önnek megfelelő konfigurációt.',
        },
      },
      {
        question: { de: 'Benötige ich Druckluft für den UWL-1?', en: 'Do I need compressed air for the UWL-1?', cz: 'Potřebuji pro UWL-1 stlačený vzduch?', sk: 'Potrebujem pre UWL-1 stlačený vzduch?', hu: 'Szükség van-e sűrített levegőre az UWL-1-hez?' },
        answer: {
          de: 'Nein — der UWL-1 arbeitet mit integrierter elektrischer Vakuumpumpe und benötigt lediglich einen Stromanschluss. Das macht ihn gerade für kleine Werkstätten attraktiv, die keine zentrale Druckluftversorgung haben. Die Pumpe ist wartungsarm und leise im Betrieb.',
          en: 'No — the UWL-1 works with an integrated electric vacuum pump and only requires a power connection. This makes it particularly attractive for small workshops without central compressed air supply. The pump is low-maintenance and quiet in operation.',
          cz: 'Ne — UWL-1 pracuje s integrovaným elektrickým vakuovým čerpadlem a potřebuje pouze elektrické připojení. To jej činí atraktivním zejména pro malé dílny bez centrálního rozvodu stlačeného vzduchu. Čerpadlo je nenáročné na údržbu a tiché v provozu.',
          sk: 'Nie — UWL-1 pracuje s integrovaným elektrickým vákuovým čerpadlom a potrebuje iba elektrické pripojenie. To ho robí atraktívnym najmä pre malé dielne bez centrálneho rozvodu stlačeného vzduchu. Čerpadlo je nenáročné na údržbu a tiché v prevádzke.',
          hu: 'Nem — az UWL-1 integrált elektromos vákuumszivattyúval dolgozik, és csak elektromos csatlakozást igényel. Ez különösen vonzóvá teszi kis műhelyek számára, ahol nincs központi sűrített levegős ellátás. A szivattyú karbantartásigénye alacsony, és csendesen működik.',
        },
      },
      {
        question: { de: 'Kann ich später auf den UWL-3 oder UWL-5 umsteigen?', en: 'Can I later upgrade to the UWL-3 or UWL-5?', cz: 'Mohu později přejít na UWL-3 nebo UWL-5?', sk: 'Môžem neskôr prejsť na UWL-3 alebo UWL-5?', hu: 'Átválthatok-e később az UWL-3-ra vagy UWL-5-re?' },
        answer: {
          de: 'Ja — wenn das Plattenaufkommen wächst, ist der Umstieg auf eine größere Version problemlos möglich. Schwenkkran und Deckenschienen bleiben in der Regel bestehen, nur der Vakuumheber wird getauscht. Asamer kauft gebrauchte UWL-1 unter Umständen zurück oder vermittelt sie an kleinere Betriebe weiter.',
          en: 'Yes — as panel volume grows, upgrading to a larger version is straightforward. Slewing crane and ceiling rails typically remain in place, only the vacuum lifter is exchanged. Asamer may buy back used UWL-1 units or resell them to smaller operations.',
          cz: 'Ano — pokud objem desek roste, přechod na větší verzi je bezproblémový. Otočný jeřáb a stropní kolejnice zpravidla zůstávají, vymění se pouze vakuový zvedák. Asamer za určitých podmínek vykupuje použité UWL-1 nebo je zprostředkovává menším provozům.',
          sk: 'Áno — ak objem dosiek rastie, prechod na väčšiu verziu je bezproblémový. Otočný žeriav a stropné koľajnice spravidla zostávajú, vymení sa iba vákuový zdvíhač. Asamer za určitých podmienok vykupuje použité UWL-1 alebo ich sprostredkúva menším prevádzkam.',
          hu: 'Igen — ha a lapmennyiség növekszik, nagyobb verzióra történő váltás problémamentes. A forgódaru és a mennyezeti sínek jellemzően a helyükön maradnak, csak a vákuumemelőt kell cserélni. Az Asamer bizonyos feltételekkel használt UWL-1 egységeket visszavásárol, vagy kisebb üzemeknek továbbértékesít.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  VACUUM-LIFTERS — uwl-1s                                            */
  /* ------------------------------------------------------------------ */
  'uwl-1s': {
    longDescription: {
      de: `Der Barbaric UWL-1S ist eine Sonderausführung des Einstiegs-Vakuumhebers UWL-1, speziell ausgelegt für die Handhabung dünner oder poröser Plattenmaterialien. Während klassische Sauggreifer bei geringen Plattenstärken oder offenporigen Oberflächen an ihre Grenzen stoßen, nutzt der UWL-1S eine angepasste Saugplatten-Geometrie und erhöhte Vakuumreserven, um auch schwierige Materialien sicher aufzunehmen. Typische Einsatzgebiete sind Dämmplatten, MDF-Rohplatten vor dem Beschichten, Akustikpaneele, Lochplatten oder dünne HPL-Schichtstoffe ab wenigen Millimetern Plattenstärke. Der UWL-1S behält die kompakte Bauform und die einfache Installation des UWL-1 — geeignet für kleinere bis mittlere Betriebe, die überwiegend mit anspruchsvollen Materialien arbeiten. Asamer liefert den UWL-1S als autorisierter Barbaric-Partner für CZ, SK und HU inklusive Materialtests vor der Auslieferung.`,
      en: `The Barbaric UWL-1S is a special version of the UWL-1 entry vacuum lifter, specifically designed for handling thin or porous panel materials. While classic suction cups reach their limits on low panel thicknesses or open-pored surfaces, the UWL-1S uses adapted suction plate geometry and increased vacuum reserves to securely pick up difficult materials. Typical applications are insulation panels, MDF raw boards before coating, acoustic panels, perforated boards or thin HPL laminates from a few millimetres panel thickness. The UWL-1S retains the compact form factor and easy installation of the UWL-1 — suitable for small to mid-sized operations that predominantly handle challenging materials. Asamer supplies the UWL-1S as authorized Barbaric partner for CZ, SK and HU including material tests prior to delivery.`,
      cz: `Barbaric UWL-1S je speciální provedení vstupního vakuového zvedáku UWL-1, navržené speciálně pro manipulaci s tenkými nebo porézními deskovými materiály. Zatímco klasické přísavky narážejí při malých tloušťkách desek nebo otevřených pórech povrchu na své hranice, UWL-1S využívá upravenou geometrii sací desky a zvýšené vakuové rezervy pro bezpečné zvedání i náročných materiálů. Typickými oblastmi nasazení jsou izolační desky, MDF surové desky před povrstvením, akustické panely, perforované desky nebo tenké HPL lamináty od několika milimetrů tloušťky. UWL-1S si zachovává kompaktní konstrukci a jednoduchou instalaci UWL-1 — vhodné pro menší až střední provozy, které převážně pracují s náročnými materiály. Asamer dodává UWL-1S jako autorizovaný partner Barbaric pro CZ, SK a HU včetně materiálových testů před dodáním.`,
      sk: `Barbaric UWL-1S je špeciálne prevedenie vstupného vákuového zdvíhača UWL-1, navrhnuté špeciálne pre manipuláciu s tenkými alebo poréznymi doskovými materiálmi. Zatiaľ čo klasické prísavky narážajú pri malých hrúbkach dosiek alebo otvorených póroch povrchu na svoje hranice, UWL-1S využíva upravenú geometriu sacej dosky a zvýšené vákuové rezervy pre bezpečné zdvíhanie aj náročných materiálov. Typickými oblasťami nasadenia sú izolačné dosky, MDF surové dosky pred povrstvením, akustické panely, perforované dosky alebo tenké HPL lamináty od niekoľkých milimetrov hrúbky. UWL-1S si zachováva kompaktnú konštrukciu a jednoduchú inštaláciu UWL-1 — vhodné pre menšie až stredné prevádzky, ktoré prevažne pracujú s náročnými materiálmi. Asamer dodáva UWL-1S ako autorizovaný partner Barbaric pre CZ, SK a HU vrátane materiálových testov pred dodaním.`,
      hu: `A Barbaric UWL-1S az UWL-1 belépőszintű vákuumemelő speciális kivitele, kifejezetten vékony vagy porózus lapanyagok kezelésére tervezve. Míg a klasszikus szívótárcsák kis lapvastagságok vagy nyitott pórusú felületek esetén határaikba ütköznek, az UWL-1S módosított szívótárcsa-geometriát és megnövelt vákuumtartalékokat használ a nehéz anyagok biztonságos felvételéhez. Tipikus alkalmazási területek a szigetelőlapok, a bevonás előtti MDF-nyerslapok, az akusztikus panelek, a perforált lapok vagy a néhány milliméter vastagságtól kezdődő vékony HPL laminátumok. Az UWL-1S megtartja az UWL-1 kompakt kialakítását és egyszerű telepítését — alkalmas kis- és középüzemek számára, amelyek túlnyomórészt igényes anyagokkal dolgoznak. Az Asamer az UWL-1S-t hivatalos Barbaric partnerként szállítja Csehország, Szlovákia és Magyarország részére — szállítás előtti anyagtesztekkel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Dämmplatten und Akustikpaneele', en: 'For insulation boards and acoustic panels', cz: 'Pro izolační desky a akustické panely', sk: 'Pre izolačné dosky a akustické panely', hu: 'Szigetelőlapokhoz és akusztikus panelekhez' },
        body: {
          de: 'Offenporige Dämmplatten oder gelochte Akustikpaneele lassen sich mit Standardsaugern nicht zuverlässig heben, weil das Vakuum durch die Poren entweicht. Die angepasste Saugplatte des UWL-1S kompensiert Leckverluste und hält die Platte auch bei hoher Luftdurchlässigkeit sicher. Das ist entscheidend im Trockenbau oder bei Akustikmöbel-Herstellern.',
          en: 'Open-pored insulation boards or perforated acoustic panels cannot be reliably lifted with standard suction cups because vacuum escapes through the pores. The adapted suction plate of the UWL-1S compensates leakage losses and holds the panel securely even at high air permeability. This is crucial in dry construction or for acoustic furniture manufacturers.',
          cz: 'Otevřeně porézní izolační desky nebo perforované akustické panely nelze spolehlivě zvedat standardními přísavkami, protože vakuum uniká póry. Upravená sací deska UWL-1S kompenzuje úniky a drží desku bezpečně i při vysoké vzduchové propustnosti. To je rozhodující v suché výstavbě nebo u výrobců akustického nábytku.',
          sk: 'Otvorene porézne izolačné dosky alebo perforované akustické panely nemožno spoľahlivo zdvíhať štandardnými prísavkami, pretože vákuum uniká pórmi. Upravená sacia doska UWL-1S kompenzuje úniky a drží dosku bezpečne aj pri vysokej vzduchovej priepustnosti. To je rozhodujúce v suchej výstavbe alebo u výrobcov akustického nábytku.',
          hu: 'A nyitott pórusú szigetelőlapok vagy perforált akusztikus panelek szabványos szívótárcsákkal nem emelhetők megbízhatóan, mert a vákuum a pórusokon keresztül eltávozik. Az UWL-1S módosított szívótárcsája kompenzálja a szivárgási veszteségeket, és nagy légáteresztő képesség mellett is biztonságosan tartja a lapot. Ez döntő jelentőségű a szárazépítészetben vagy az akusztikus bútorgyártóknál.',
        },
      },
      {
        heading: { de: 'Für dünne MDF- und HPL-Schichtplatten', en: 'For thin MDF and HPL laminate sheets', cz: 'Pro tenké MDF a HPL laminátové desky', sk: 'Pre tenké MDF a HPL laminátové dosky', hu: 'Vékony MDF és HPL laminátlapokhoz' },
        body: {
          de: 'Bei Plattenstärken unter 10 mm drohen Durchbiegung und Bruch, wenn Saugkräfte zu punktuell wirken. Der UWL-1S verteilt die Ansaugkraft auf eine größere Fläche und verhindert so Materialschäden. Ideal für Möbelwerke, die mit Melaminbeschichtungen oder HPL-Oberflächen arbeiten.',
          en: 'At panel thicknesses below 10 mm, deflection and breakage threaten if suction forces act too locally. The UWL-1S distributes suction over a larger area and thus prevents material damage. Ideal for furniture plants working with melamine coatings or HPL surfaces.',
          cz: 'Při tloušťkách desek pod 10 mm hrozí průhyb a prasknutí, pokud sací síly působí příliš bodově. UWL-1S rozkládá sací sílu na větší plochu a tím předchází poškození materiálu. Ideální pro nábytkářské závody pracující s melaminovými povlaky nebo HPL povrchy.',
          sk: 'Pri hrúbkach dosiek pod 10 mm hrozí priehyb a prasknutie, ak sacie sily pôsobia príliš bodovo. UWL-1S rozkladá saciu silu na väčšiu plochu a tým predchádza poškodeniu materiálu. Ideálne pre nábytkárske závody pracujúce s melamínovými povlakmi alebo HPL povrchmi.',
          hu: '10 mm alatti lapvastagságoknál a lap meghajlása és törése fenyeget, ha a szívóerők túl pontszerűen hatnak. Az UWL-1S a szívóerőt nagyobb felületre osztja el, így megelőzi az anyagsérülést. Ideális melamin bevonatokkal vagy HPL felületekkel dolgozó bútorgyárak számára.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Wählen Sie den UWL-1S, wenn Ihr typisches Plattenmaterial dünn (unter 10 mm) oder porös ist und ein Standard-UWL-1 nicht sicher greift. Für klassisches beschichtetes Spanmaterial oder dickere Platten ist der UWL-1 oder UWL-3 ausreichend. Bei sehr großen Formaten oder schweren Industrieplatten empfehlen wir parallel den UWL-5. Asamer testet Ihr konkretes Material vor der Lieferung und sichert so die passende Sauger-Konfiguration.',
      en: 'Choose the UWL-1S if your typical panel material is thin (below 10 mm) or porous and a standard UWL-1 does not grip securely. For classic coated chipboard or thicker panels, the UWL-1 or UWL-3 is sufficient. For very large formats or heavy industrial panels, we recommend the UWL-5 in parallel. Asamer tests your specific material before delivery to ensure the right suction configuration.',
      cz: 'Zvolte UWL-1S, pokud je váš typický deskový materiál tenký (pod 10 mm) nebo porézní a standardní UWL-1 jej bezpečně neuchopí. Pro klasický potahovaný třískový materiál nebo tlustší desky postačí UWL-1 nebo UWL-3. U velmi velkých formátů nebo těžkých průmyslových desek doporučujeme souběžně UWL-5. Asamer otestuje váš konkrétní materiál před dodáním a zajistí tak vhodnou konfiguraci přísavek.',
      sk: 'Zvoľte UWL-1S, ak je váš typický doskový materiál tenký (pod 10 mm) alebo porézny a štandardný UWL-1 ho bezpečne neuchopí. Pre klasický potahovaný trieskový materiál alebo hrubšie dosky postačuje UWL-1 alebo UWL-3. Pri veľmi veľkých formátoch alebo ťažkých priemyselných doskách odporúčame súbežne UWL-5. Asamer otestuje váš konkrétny materiál pred dodaním a zabezpečí tak vhodnú konfiguráciu prísaviek.',
      hu: 'Válassza az UWL-1S-t, ha tipikus lapanyaga vékony (10 mm alatt) vagy porózus, és a szabvány UWL-1 nem fogja meg biztonságosan. Klasszikus bevont forgácslaphoz vagy vastagabb lapokhoz az UWL-1 vagy UWL-3 elegendő. Nagyon nagy formátumokhoz vagy nehéz ipari lapokhoz párhuzamosan az UWL-5-öt ajánljuk. Az Asamer szállítás előtt teszteli konkrét anyagát, és így biztosítja a megfelelő szívótárcsa-konfigurációt.',
    },
    faq: [
      {
        question: { de: 'Ab welcher Plattenstärke kann der UWL-1S eingesetzt werden?', en: 'From what panel thickness can the UWL-1S be used?', cz: 'Od jaké tloušťky desky lze UWL-1S nasadit?', sk: 'Od akej hrúbky dosky je možné UWL-1S nasadiť?', hu: 'Milyen lapvastagságtól alkalmazható az UWL-1S?' },
        answer: {
          de: 'Der UWL-1S ist bereits ab wenigen Millimetern Plattenstärke einsetzbar, sofern das Material eine ausreichende Eigensteifigkeit besitzt. Für extrem dünne Furniere oder flexible Folien sind zusätzliche Stützauflagen erforderlich. Asamer prüft die Einsatzgrenzen im Vortest.',
          en: 'The UWL-1S can be used from just a few millimetres panel thickness, provided the material has sufficient inherent stiffness. For extremely thin veneers or flexible foils, additional supports are required. Asamer verifies application limits in preliminary tests.',
          cz: 'UWL-1S lze nasadit již od několika milimetrů tloušťky desky, pokud má materiál dostatečnou vlastní tuhost. Pro extrémně tenké dýhy nebo pružné fólie jsou potřeba dodatečné podpěry. Asamer ověří mezní podmínky v předběžném testu.',
          sk: 'UWL-1S je možné nasadiť už od niekoľkých milimetrov hrúbky dosky, ak má materiál dostatočnú vlastnú tuhosť. Pre extrémne tenké dyhy alebo pružné fólie sú potrebné dodatočné podpery. Asamer overí hraničné podmienky v predbežnom teste.',
          hu: 'Az UWL-1S már néhány milliméter lapvastagságtól alkalmazható, amennyiben az anyag megfelelő saját merevséggel rendelkezik. Rendkívül vékony furnérokhoz vagy rugalmas fóliákhoz további támasztékok szükségesek. Az Asamer előzetes teszttel ellenőrzi az alkalmazási határokat.',
        },
      },
      {
        question: { de: 'Funktioniert der UWL-1S auch für offenporige Lochplatten?', en: 'Does the UWL-1S also work for open-pored perforated boards?', cz: 'Funguje UWL-1S i pro otevřeně porézní děrované desky?', sk: 'Funguje UWL-1S aj pre otvorene porézne perforované dosky?', hu: 'Működik-e az UWL-1S nyitott pórusú perforált lapokhoz is?' },
        answer: {
          de: 'Ja — in den meisten Fällen, wenn die Lochanteil unter einem kritischen Prozentsatz liegt. Bei sehr hoher Perforation können zusätzliche Schaumauflagen oder ein größerer Saugplattenumfang eingesetzt werden. Asamer stellt auf Wunsch einen Musterträger zur Vorprüfung bereit.',
          en: 'Yes — in most cases, as long as the perforation share is below a critical percentage. For very high perforation, additional foam layers or a larger suction plate circumference can be used. Asamer can provide a sample carrier for pre-testing on request.',
          cz: 'Ano — ve většině případů, pokud je podíl děr pod kritickým procentem. Při velmi vysoké perforaci lze použít dodatečné pěnové vložky nebo větší obvod sací desky. Asamer na přání poskytne vzorový nosič k předběžnému otestování.',
          sk: 'Áno — vo väčšine prípadov, ak je podiel dier pod kritickým percentom. Pri veľmi vysokej perforácii je možné použiť dodatočné penové vložky alebo väčší obvod sacej dosky. Asamer na požiadanie poskytne vzorový nosič na predbežné otestovanie.',
          hu: 'Igen — a legtöbb esetben, ha a lyukak aránya egy kritikus százalék alatt marad. Nagyon magas perforáció esetén további habbetétek vagy nagyobb szívótárcsa-kerület alkalmazható. Az Asamer kérésre mintahordozót biztosít előzetes teszteléshez.',
        },
      },
      {
        question: { de: 'Lässt sich der UWL-1S auf andere Materialien umrüsten?', en: 'Can the UWL-1S be converted to other materials?', cz: 'Lze UWL-1S přestavět pro jiné materiály?', sk: 'Dá sa UWL-1S prestavať pre iné materiály?', hu: 'Átalakítható-e az UWL-1S más anyagokhoz?' },
        answer: {
          de: 'Ja — die Saugplatten sind wechselbar. Wenn sich Ihr Materialmix ändert, tauschen Sie die Saugeinheit gegen eine andere Konfiguration. Asamer hält die gängigen Saugplatten-Varianten auf Lager und kann Umrüstungen kurzfristig durchführen.',
          en: 'Yes — the suction plates are interchangeable. If your material mix changes, you can exchange the suction unit for a different configuration. Asamer stocks common suction plate variants and can carry out conversions at short notice.',
          cz: 'Ano — sací desky jsou vyměnitelné. Pokud se váš materiálový mix změní, vyměníte sací jednotku za jinou konfiguraci. Asamer drží běžné varianty sacích desek skladem a dokáže přestavbu provést v krátké době.',
          sk: 'Áno — sacie dosky sú vymeniteľné. Ak sa váš materiálový mix zmení, vymeníte saciu jednotku za inú konfiguráciu. Asamer drží bežné varianty sacích dosiek skladom a dokáže prestavbu vykonať v krátkom čase.',
          hu: 'Igen — a szívótárcsák cserélhetők. Ha anyagkombinációja megváltozik, a szívóegységet más konfigurációra cserélheti. Az Asamer a szokásos szívótárcsa-változatokat raktáron tartja, és rövid időn belül elvégzi az átalakítást.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  VACUUM-LIFTERS — uwl-3j                                            */
  /* ------------------------------------------------------------------ */
  'uwl-3j': {
    longDescription: {
      de: `Der Barbaric UWL-3J ist die schnelle Ausführung des bewährten UWL-3 Vakuumhebers — ausgelegt auf kurze Zykluszeiten und hohen Durchsatz bei gleichbleibend hoher Sicherheit. Mit stärkerer Vakuumpumpe, optimierten Steuerzeiten und reduzierter Auf- und Entlüftungsdauer erreicht der UWL-3J eine deutlich höhere Taktleistung als das Standardmodell. Das macht ihn zur ersten Wahl an Zuschnittlinien, automatisierten CNC-Beschickungsplätzen oder in der industriellen Serienfertigung, wo jede gewonnene Sekunde pro Platte die Gesamtausbringung spürbar erhöht. Trotz höherer Leistung bleiben Bedienkomfort und Ergonomie des UWL-3 erhalten. Der UWL-3J arbeitet nach Kundenwahl mit integrierter Pumpe oder zentralem Druckluftanschluss. Asamer liefert, installiert und wartet Barbaric-Vakuumheber für Kunden in CZ, SK und HU inklusive DGUV-Sicherheitsprüfung.`,
      en: `The Barbaric UWL-3J is the fast variant of the proven UWL-3 vacuum lifter — designed for short cycle times and high throughput with consistently high safety. With a stronger vacuum pump, optimized control timing and reduced inflate/deflate durations, the UWL-3J achieves significantly higher cycle performance than the standard model. This makes it the first choice at cutting lines, automated CNC loading stations or in industrial series production where every second gained per panel measurably increases total output. Despite higher performance, the operating comfort and ergonomics of the UWL-3 are preserved. The UWL-3J operates with integrated pump or central compressed air connection at customer choice. Asamer supplies, installs and services Barbaric vacuum lifters for customers in CZ, SK and HU including DGUV safety inspection.`,
      cz: `Barbaric UWL-3J je rychlé provedení osvědčeného vakuového zvedáku UWL-3 — dimenzované na krátké doby cyklu a vysokou propustnost při stejně vysoké bezpečnosti. Se silnějším vakuovým čerpadlem, optimalizovanými časy řízení a zkrácenou dobou nasátí a odvětrání dosahuje UWL-3J výrazně vyšší taktovací výkon než standardní model. To jej činí první volbou u řezacích linek, automatizovaných zakládacích míst CNC nebo v průmyslové sériové výrobě, kde každá ušetřená vteřina na desku citelně zvyšuje celkovou výrobu. Přes vyšší výkon zůstávají zachovány komfort obsluhy a ergonomie UWL-3. UWL-3J pracuje dle volby zákazníka s integrovaným čerpadlem nebo centrálním napojením na stlačený vzduch. Asamer dodává, instaluje a servisuje Barbaric vakuové zvedáky pro zákazníky v CZ, SK a HU včetně bezpečnostní kontroly dle DGUV.`,
      sk: `Barbaric UWL-3J je rýchle prevedenie osvedčeného vákuového zdvíhača UWL-3 — dimenzované na krátke časy cyklu a vysokú priepustnosť pri rovnako vysokej bezpečnosti. So silnejším vákuovým čerpadlom, optimalizovanými časmi riadenia a skráteným časom nasatia a odvetrania dosahuje UWL-3J výrazne vyšší taktovací výkon ako štandardný model. To ho robí prvou voľbou pri rezacích linkách, automatizovaných zakladacích miestach CNC alebo v priemyselnej sériovej výrobe, kde každá ušetrená sekunda na dosku citeľne zvyšuje celkovú výrobu. Napriek vyššiemu výkonu zostávajú zachované komfort obsluhy a ergonómia UWL-3. UWL-3J pracuje podľa voľby zákazníka s integrovaným čerpadlom alebo centrálnym napojením na stlačený vzduch. Asamer dodáva, inštaluje a servisuje Barbaric vákuové zdvíhače pre zákazníkov v CZ, SK a HU vrátane bezpečnostnej kontroly podľa DGUV.`,
      hu: `A Barbaric UWL-3J a bevált UWL-3 vákuumemelő gyors változata — rövid ciklusidőkre és magas áteresztőképességre tervezve, egyenletesen magas biztonsági szint mellett. Erősebb vákuumszivattyúval, optimalizált vezérlési időzítéssel és lerövidített fel- és leszívási idővel az UWL-3J jelentősen magasabb ütemteljesítményt ér el, mint a szabványmodell. Ez első választássá teszi szabászati vonalakon, automatizált CNC betöltőhelyeken vagy ipari sorozatgyártásban, ahol minden laponként nyert másodperc érezhetően növeli az összes kihozatalt. A magasabb teljesítmény ellenére az UWL-3 kezelőkomfortja és ergonómiája megmarad. Az UWL-3J a vevő választása szerint integrált szivattyúval vagy központi sűrített levegős csatlakozással üzemel. Az Asamer csehországi, szlovákiai és magyarországi ügyfelei számára szállítja, telepíti és szervizeli a Barbaric vákuumemelőket — a DGUV szerinti biztonsági felülvizsgálattal együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für getaktete CNC-Beschickung', en: 'For timed CNC loading', cz: 'Pro taktované zakládání CNC', sk: 'Pre taktované zakladanie CNC', hu: 'Ütemezett CNC betöltéshez' },
        body: {
          de: 'An modernen CNC-Bearbeitungszentren entscheidet die Takttreue über die Rentabilität der Maschine. Der UWL-3J legt die nächste Platte schneller auf, sodass Stillstandszeiten zwischen zwei Bearbeitungszyklen minimal bleiben. Bei mehreren hundert Teilen pro Schicht summieren sich die Zeitgewinne zu deutlich mehr Ausbringung.',
          en: 'At modern CNC machining centres, cycle reliability determines machine profitability. The UWL-3J places the next panel faster, so idle times between processing cycles remain minimal. With several hundred parts per shift, time gains accumulate into significantly higher output.',
          cz: 'U moderních CNC obráběcích center rozhoduje spolehlivost taktu o rentabilitě stroje. UWL-3J pokládá další desku rychleji, takže prostoje mezi dvěma cykly obrábění zůstávají minimální. Při několika stech dílů za směnu se úspory času sčítají do výrazně vyšší výroby.',
          sk: 'Pri moderných CNC obrábacích centrách rozhoduje spoľahlivosť taktu o rentabilite stroja. UWL-3J pokladá ďalšiu dosku rýchlejšie, takže prestoje medzi dvoma cyklami obrábania zostávajú minimálne. Pri niekoľkých stovkách dielov za zmenu sa úspory času sčítavajú do výrazne vyššej výroby.',
          hu: 'Modern CNC megmunkálóközpontokon az ütemstabilitás dönti el a gép jövedelmezőségét. Az UWL-3J gyorsabban fekteti fel a következő lapot, így a két megmunkálási ciklus közti állásidő minimális marad. Műszakonként több száz alkatrész esetén az időnyereségek érezhetően magasabb kihozatallá halmozódnak.',
        },
      },
      {
        heading: { de: 'Für industrielle Zuschnittlinien', en: 'For industrial cutting lines', cz: 'Pro průmyslové řezací linky', sk: 'Pre priemyselné rezacie linky', hu: 'Ipari szabászati vonalakhoz' },
        body: {
          de: 'Kettentakt-Zuschnittlinien, Doppel- oder Winkelsägen fordern vom Bediener hohes Tempo beim Plattennachschub. Der UWL-3J hält die Taktzeit der Säge ein, ohne dass der Mitarbeiter hetzen muss — das verhindert Fehler, entlastet körperlich und sichert konstante Qualität über die ganze Schicht.',
          en: 'Chain-beat cutting lines, double or angle saws demand high panel-feed pace from operators. The UWL-3J keeps up with the saw cycle time without the operator needing to rush — preventing errors, reducing physical strain and ensuring consistent quality throughout the shift.',
          cz: 'Řetězově taktované řezací linky, dvojité nebo úhlové pily vyžadují od obsluhy vysoké tempo přísunu desek. UWL-3J drží dobu cyklu pily, aniž by pracovník musel pospíchat — to předchází chybám, fyzicky odlehčuje a zajišťuje stálou kvalitu po celou směnu.',
          sk: 'Reťazovo taktované rezacie linky, dvojité alebo uhlové píly vyžadujú od obsluhy vysoké tempo prísunu dosiek. UWL-3J drží čas cyklu píly, bez toho aby pracovník musel ponáhľať — to predchádza chybám, fyzicky odľahčuje a zabezpečuje stálu kvalitu počas celej zmeny.',
          hu: 'A láncütemű szabászati vonalak, kettős- vagy szögfűrészek magas lapbetöltési tempót követelnek a kezelőtől. Az UWL-3J tartja a fűrész ciklusidejét anélkül, hogy a dolgozónak sietnie kellene — ez megelőzi a hibákat, fizikailag tehermentesít és végig állandó minőséget biztosít a műszak során.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Entscheiden Sie sich für den UWL-3J, wenn Zykluszeit und Durchsatz die wirtschaftlichen Schlüsselgrößen Ihrer Fertigung sind. Für klassische Tischlereibetriebe mit gemischter Auftragsstruktur reicht der UWL-3. Bei besonders dünnen oder porösen Platten brauchen Sie zusätzlich die UWL-3S Saugtechnik; für sehr große Formate und schwere Industrieplatten ist der UWL-5 die bessere Wahl. Asamer rechnet mit Ihnen im Vorgespräch durch, ab welcher Stückzahl pro Schicht sich der Aufpreis auf den UWL-3J amortisiert.',
      en: 'Choose the UWL-3J when cycle time and throughput are the key economic parameters of your production. For classic joinery operations with mixed order structure, the UWL-3 is sufficient. For especially thin or porous panels, you additionally need UWL-3S suction technology; for very large formats and heavy industrial panels, the UWL-5 is the better choice. Asamer calculates with you in advance from which unit count per shift the surcharge for the UWL-3J pays off.',
      cz: 'Rozhodněte se pro UWL-3J, pokud jsou doba cyklu a propustnost klíčovými ekonomickými veličinami vaší výroby. Pro klasické truhlárenské provozy se smíšenou strukturou zakázek postačuje UWL-3. U obzvlášť tenkých nebo porézních desek potřebujete navíc sací techniku UWL-3S; pro velmi velké formáty a těžké průmyslové desky je lepší volbou UWL-5. Asamer s vámi v předběžné konzultaci propočítá, od jakého počtu kusů za směnu se příplatek za UWL-3J vyplatí.',
      sk: 'Rozhodnite sa pre UWL-3J, ak sú čas cyklu a priepustnosť kľúčovými ekonomickými veličinami vašej výroby. Pre klasické stolárske prevádzky so zmiešanou štruktúrou zákaziek postačuje UWL-3. Pri obzvlášť tenkých alebo poréznych doskách potrebujete navyše sací systém UWL-3S; pre veľmi veľké formáty a ťažké priemyselné dosky je lepšou voľbou UWL-5. Asamer s vami v predbežnej konzultácii prepočíta, od akého počtu kusov za zmenu sa príplatok za UWL-3J vyplatí.',
      hu: 'Döntsön az UWL-3J mellett, ha a ciklusidő és az áteresztőképesség termelésének kulcsfontosságú gazdasági mutatói. Vegyes megrendelési struktúrájú klasszikus asztalosüzemeknek az UWL-3 elegendő. Különösen vékony vagy porózus lapokhoz emellett UWL-3S szívótechnikára van szüksége; nagyon nagy formátumokhoz és nehéz ipari lapokhoz az UWL-5 a jobb választás. Az Asamer az előzetes egyeztetésen kiszámítja Önnel, hogy műszakonként hány darabtól térül meg az UWL-3J felára.',
    },
    faq: [
      {
        question: { de: 'Wie groß ist der Zeitgewinn gegenüber dem UWL-3?', en: 'How large is the time gain compared to the UWL-3?', cz: 'Jak velký je časový zisk oproti UWL-3?', sk: 'Aký veľký je časový zisk oproti UWL-3?', hu: 'Mekkora az időnyereség az UWL-3-hoz képest?' },
        answer: {
          de: 'Je nach Plattenmaterial und Saugerkonfiguration spart der UWL-3J mehrere Sekunden pro Hebezyklus. In Produktionsumgebungen mit hunderten Zyklen pro Schicht summiert sich das auf spürbare Mehrausbringung. Die exakten Werte klärt Asamer anhand Ihrer Plattenarten.',
          en: 'Depending on panel material and suction configuration, the UWL-3J saves several seconds per lifting cycle. In production environments with hundreds of cycles per shift this accumulates to noticeable additional output. Asamer clarifies exact values based on your panel types.',
          cz: 'Podle deskového materiálu a konfigurace přísavek šetří UWL-3J několik vteřin na jeden cyklus zvedání. V provozech se stovkami cyklů za směnu se to sčítá do citelně vyšší výroby. Přesné hodnoty Asamer upřesní podle vašich druhů desek.',
          sk: 'Podľa doskového materiálu a konfigurácie prísaviek šetrí UWL-3J niekoľko sekúnd na jeden cyklus zdvíhania. V prevádzkach so stovkami cyklov za zmenu sa to sčítava do citeľne vyššej výroby. Presné hodnoty Asamer upresní podľa vašich druhov dosiek.',
          hu: 'A lapanyagtól és a szívótárcsa-konfigurációtól függően az UWL-3J emelési ciklusonként több másodpercet takarít meg. Műszakonként több száz ciklussal rendelkező termelési környezetben ez érezhető többletkihozatallá összegződik. A pontos értékeket az Asamer az Ön laptípusai alapján tisztázza.',
        },
      },
      {
        question: { de: 'Ist der UWL-3J mit bestehenden Kranen kompatibel?', en: 'Is the UWL-3J compatible with existing cranes?', cz: 'Je UWL-3J kompatibilní se stávajícími jeřáby?', sk: 'Je UWL-3J kompatibilný s existujúcimi žeriavmi?', hu: 'Kompatibilis-e az UWL-3J a meglévő darukkal?' },
        answer: {
          de: 'In den meisten Fällen ja — die Anschlussmaße entsprechen dem UWL-3. Bei höherem Gewicht durch die verstärkte Pumpe kann eine Prüfung der Kranstatik notwendig sein. Asamer übernimmt die Bewertung Ihrer vorhandenen Installation.',
          en: 'In most cases yes — the connection dimensions correspond to the UWL-3. Higher weight from the reinforced pump may require a crane load review. Asamer handles the assessment of your existing installation.',
          cz: 'Ve většině případů ano — připojovací rozměry odpovídají UWL-3. Při vyšší hmotnosti způsobené výkonnějším čerpadlem může být nutné ověření statiky jeřábu. Asamer převezme vyhodnocení vaší stávající instalace.',
          sk: 'Vo väčšine prípadov áno — pripojovacie rozmery zodpovedajú UWL-3. Pri vyššej hmotnosti spôsobenej výkonnejším čerpadlom môže byť potrebné overenie statiky žeriavu. Asamer prevezme vyhodnotenie vašej existujúcej inštalácie.',
          hu: 'A legtöbb esetben igen — a csatlakozási méretek megegyeznek az UWL-3-éval. A megerősített szivattyú miatti nagyobb tömeg szükségessé teheti a daru statikai ellenőrzését. Az Asamer elvégzi a meglévő beépítés értékelését.',
        },
      },
      {
        question: { de: 'Wie wartungsintensiv ist die stärkere Vakuumpumpe?', en: 'How maintenance-intensive is the stronger vacuum pump?', cz: 'Jak náročná je údržba silnějšího vakuového čerpadla?', sk: 'Aká náročná je údržba silnejšieho vákuového čerpadla?', hu: 'Milyen karbantartás-igényes az erősebb vákuumszivattyú?' },
        answer: {
          de: 'Die Pumpe des UWL-3J ist auf Dauerbetrieb ausgelegt und hat gegenüber dem Standard UWL-3 vergleichbare Wartungsintervalle. Filter und Dichtungen werden einmal pro Jahr getauscht. Asamer bietet Wartungsverträge mit Ersatzteilvorhaltung vor Ort an.',
          en: 'The UWL-3J pump is designed for continuous operation and has comparable maintenance intervals to the standard UWL-3. Filters and seals are replaced once a year. Asamer offers maintenance contracts with on-site spare parts stock.',
          cz: 'Čerpadlo UWL-3J je dimenzováno pro nepřetržitý provoz a má srovnatelné servisní intervaly jako standardní UWL-3. Filtry a těsnění se vyměňují jednou ročně. Asamer nabízí servisní smlouvy s místním skladem náhradních dílů.',
          sk: 'Čerpadlo UWL-3J je dimenzované pre nepretržitú prevádzku a má porovnateľné servisné intervaly ako štandardný UWL-3. Filtre a tesnenia sa vymieňajú raz ročne. Asamer ponúka servisné zmluvy s miestnym skladom náhradných dielov.',
          hu: 'Az UWL-3J szivattyúja folyamatos üzemre tervezett, és szabvány UWL-3-mal összehasonlítható karbantartási intervallumokkal rendelkezik. A szűrőket és tömítéseket évente egyszer cserélik. Az Asamer helyszíni alkatrészkészlettel rendelkező karbantartási szerződéseket kínál.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  VACUUM-LIFTERS — uwl-3s                                            */
  /* ------------------------------------------------------------------ */
  'uwl-3s': {
    longDescription: {
      de: `Der Barbaric UWL-3S ist die Sonderausführung des UWL-3 für Betriebe, die im mittleren bis großen Lastbereich regelmäßig dünne, weiche oder poröse Plattenmaterialien handhaben. Er vereint die bewährte Traglastklasse des UWL-3 mit einer speziell entwickelten Saugplatten-Technologie, die auf empfindlichen und offenporigen Oberflächen zuverlässig hält. Einsatzbeispiele sind Arbeitsplatten mit Ölfinish, Furniere auf MDF-Trägern, dünne Verbundplatten, Akustikplatten oder sandwichartige Leichtbauelemente. Im Unterschied zum UWL-1S — der für kleinere Lasten ausgelegt ist — deckt der UWL-3S die volle Größen- und Gewichtsklasse großer Möbel- und Türenbetriebe ab. Die integrierte Überwachung erkennt Leckagen schneller und warnt den Bediener zuverlässig. Asamer liefert, passt und wartet den UWL-3S als autorisierter Barbaric-Händler für Kunden in Tschechien, der Slowakei und Ungarn.`,
      en: `The Barbaric UWL-3S is the special version of the UWL-3 for operations that regularly handle thin, soft or porous panel materials in the medium to large load class. It combines the proven load class of the UWL-3 with specially developed suction plate technology that reliably holds on sensitive and open-pored surfaces. Typical applications include oil-finished worktops, veneers on MDF carriers, thin composite panels, acoustic panels or sandwich-style lightweight elements. Unlike the UWL-1S — which is designed for smaller loads — the UWL-3S covers the full size and weight class of large furniture and door manufacturers. Integrated monitoring detects leakage faster and reliably warns the operator. Asamer delivers, fits and services the UWL-3S as authorized Barbaric dealer for customers in Czech Republic, Slovakia and Hungary.`,
      cz: `Barbaric UWL-3S je speciální provedení UWL-3 pro provozy, které ve středním až velkém rozsahu zatížení pravidelně manipulují s tenkými, měkkými nebo porézními deskovými materiály. Kombinuje osvědčenou třídu nosnosti UWL-3 se speciálně vyvinutou technologií sací desky, která spolehlivě drží i na citlivých a otevřeně porézních površích. Příklady použití jsou pracovní desky s olejovým finishem, dýhy na nosičích MDF, tenké kompozitní desky, akustické desky nebo sendvičové lehké stavební prvky. Na rozdíl od UWL-1S — který je dimenzován na menší zatížení — pokrývá UWL-3S plnou třídu velikosti a hmotnosti velkých nábytkářských a dveřních provozů. Integrovaný monitoring rozpozná netěsnosti rychleji a spolehlivě upozorní obsluhu. Asamer dodává, upravuje a servisuje UWL-3S jako autorizovaný prodejce Barbaric pro zákazníky v České republice, na Slovensku a v Maďarsku.`,
      sk: `Barbaric UWL-3S je špeciálne prevedenie UWL-3 pre prevádzky, ktoré v strednom až veľkom rozsahu zaťaženia pravidelne manipulujú s tenkými, mäkkými alebo poréznymi doskovými materiálmi. Kombinuje osvedčenú triedu nosnosti UWL-3 so špeciálne vyvinutou technológiou sacej dosky, ktorá spoľahlivo drží aj na citlivých a otvorene porézných povrchoch. Príklady použitia sú pracovné dosky s olejovým finishom, dyhy na nosičoch MDF, tenké kompozitné dosky, akustické dosky alebo sendvičové ľahké stavebné prvky. Na rozdiel od UWL-1S — ktorý je dimenzovaný na menšie zaťaženia — pokrýva UWL-3S plnú triedu veľkosti a hmotnosti veľkých nábytkárskych a dverných prevádzok. Integrovaný monitoring rozpozná netesnosti rýchlejšie a spoľahlivo upozorní obsluhu. Asamer dodáva, upravuje a servisuje UWL-3S ako autorizovaný predajca Barbaric pre zákazníkov v Českej republike, na Slovensku a v Maďarsku.`,
      hu: `A Barbaric UWL-3S az UWL-3 speciális kivitele olyan üzemek számára, amelyek a közepes-nagy teherbírási tartományban rendszeresen vékony, puha vagy porózus lapanyagokat kezelnek. Egyesíti az UWL-3 bevált teherbírási osztályát a kifejezetten erre fejlesztett szívótárcsa-technológiával, amely érzékeny és nyitott pórusú felületeken is megbízhatóan tart. Alkalmazási példák: olajos kikészítésű munkalapok, MDF hordozón lévő furnérok, vékony kompozitlapok, akusztikus lapok vagy szendvicsszerű könnyűszerkezetes elemek. Az UWL-1S-sel ellentétben — amely kisebb terhelésekre van tervezve — az UWL-3S nagy bútor- és ajtóüzemek teljes méret- és tömegosztályát lefedi. Az integrált monitoring gyorsabban észleli a szivárgásokat és megbízhatóan figyelmezteti a kezelőt. Az Asamer hivatalos Barbaric viszonteladóként szállítja, igazítja és szervizeli az UWL-3S-t csehországi, szlovákiai és magyarországi ügyfelek számára.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für ölfinishierte Arbeitsplatten und Massivholz', en: 'For oil-finished worktops and solid wood', cz: 'Pro pracovní desky s olejovým finishem a masivní dřevo', sk: 'Pre pracovné dosky s olejovým finishom a masívne drevo', hu: 'Olajos kikészítésű munkalapokhoz és tömörfához' },
        body: {
          de: 'Ölimprägnierte Oberflächen bilden eine leichte Porenstruktur, die Standardsaugern Luft abzieht. Der UWL-3S hält trotzdem sicher, weil die Saugplatte die Leckage über ein Reservoir kompensiert. So werden auch wertvolle Massivholz-Arbeitsplatten ohne Rutschen positioniert.',
          en: 'Oil-impregnated surfaces form a slight pore structure that draws air from standard suction cups. The UWL-3S still holds securely because the suction plate compensates leakage via a reservoir. This positions even high-value solid wood worktops without slipping.',
          cz: 'Olejem impregnované povrchy vytvářejí jemnou pórovitou strukturu, která odsává vzduch ze standardních přísavek. UWL-3S přesto drží bezpečně, protože sací deska kompenzuje únik přes rezervoár. Tak lze bez klouzání pozicovat i cenné masivní dřevěné pracovní desky.',
          sk: 'Olejom impregnované povrchy vytvárajú jemnú pórovitú štruktúru, ktorá odsáva vzduch zo štandardných prísaviek. UWL-3S napriek tomu drží bezpečne, pretože sacia doska kompenzuje únik cez rezervoár. Tak možno bez kĺzania polohovať aj cenné masívne drevené pracovné dosky.',
          hu: 'Az olajimpregnált felületek finom pórusstruktúrát alkotnak, amely a szabvány szívótárcsákból levegőt szív el. Az UWL-3S ennek ellenére biztonságosan tart, mert a szívótárcsa a szivárgást tartályon keresztül kompenzálja. Így értékes tömörfa munkalapok is csúszás nélkül pozicionálhatók.',
        },
      },
      {
        heading: { de: 'Für große Sandwich- und Leichtbauplatten', en: 'For large sandwich and lightweight panels', cz: 'Pro velké sendvičové a lehké desky', sk: 'Pre veľké sendvičové a ľahké dosky', hu: 'Nagy szendvics- és könnyűszerkezetes lapokhoz' },
        body: {
          de: 'Leichtbauplatten mit Wabenkern und dünnen Deckschichten reagieren empfindlich auf punktuelle Saugkräfte — sie beulen oder brechen. Der UWL-3S verteilt die Kraft auf eine ausreichend große Fläche und behält dabei die volle Traglast des UWL-3, sodass auch sehr große Platten sicher bewegt werden.',
          en: 'Lightweight panels with honeycomb core and thin face layers react sensitively to point suction forces — they dent or break. The UWL-3S distributes force over a sufficiently large area while retaining the full UWL-3 load capacity, so even very large panels are moved safely.',
          cz: 'Lehké desky s voštinovým jádrem a tenkými krycími vrstvami reagují citlivě na bodové sací síly — prohýbají se nebo praskají. UWL-3S rozkládá sílu na dostatečně velkou plochu a zachovává plnou nosnost UWL-3, takže lze bezpečně pohybovat i velmi velkými deskami.',
          sk: 'Ľahké dosky s voštinovým jadrom a tenkými krycími vrstvami reagujú citlivo na bodové sacie sily — prehýbajú sa alebo praskajú. UWL-3S rozkladá silu na dostatočne veľkú plochu a zachováva plnú nosnosť UWL-3, takže je možné bezpečne pohybovať aj veľmi veľkými doskami.',
          hu: 'A méhsejt magos és vékony fedőrétegű könnyűszerkezetes lapok érzékenyen reagálnak a pontszerű szívóerőkre — behorpadnak vagy eltörnek. Az UWL-3S az erőt kellően nagy felületre osztja el, miközben megtartja az UWL-3 teljes teherbírását, így nagyon nagy lapok is biztonságosan mozgathatók.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Der UWL-3S ist die Wahl, wenn Sie empfindliche oder offenporige Materialien in der Gewichtsklasse eines UWL-3 handhaben müssen. Für massive, beschichtete Standardplatten reicht der UWL-3 aus. Haben Sie ein kleineres Betrieb mit nur gelegentlicher Nutzung dünner Platten, ist der UWL-1S kostengünstiger. Für sehr große Industrieplatten oder schwere Türen wählen Sie den UWL-5. Asamer testet Ihr konkretes Material vor der Auswahl und sorgt so für die sichere Kombination aus Last und Saugsystem.',
      en: 'The UWL-3S is the choice when you need to handle sensitive or open-pored materials in the weight class of a UWL-3. For solid, coated standard panels, the UWL-3 is sufficient. If you have a smaller operation with only occasional thin-panel handling, the UWL-1S is more cost-effective. For very large industrial panels or heavy doors, choose the UWL-5. Asamer tests your specific material before selection and thus ensures the safe combination of load and suction system.',
      cz: 'UWL-3S je volbou, pokud musíte manipulovat s citlivými nebo otevřeně porézními materiály ve váhové třídě UWL-3. Pro masivní, potažené standardní desky postačuje UWL-3. Máte-li menší provoz s pouze občasným použitím tenkých desek, je UWL-1S cenově výhodnější. Pro velmi velké průmyslové desky nebo těžké dveře volte UWL-5. Asamer váš konkrétní materiál před výběrem otestuje a zajistí tak bezpečnou kombinaci zatížení a sacího systému.',
      sk: 'UWL-3S je voľbou, ak musíte manipulovať s citlivými alebo otvorene poréznymi materiálmi vo váhovej triede UWL-3. Pre masívne, potiahnuté štandardné dosky postačuje UWL-3. Ak máte menšiu prevádzku s iba občasným použitím tenkých dosiek, je UWL-1S cenovo výhodnejší. Pre veľmi veľké priemyselné dosky alebo ťažké dvere zvoľte UWL-5. Asamer váš konkrétny materiál pred výberom otestuje a zabezpečí tak bezpečnú kombináciu zaťaženia a sacieho systému.',
      hu: 'Az UWL-3S akkor a választás, ha UWL-3 teherosztályában érzékeny vagy nyitott pórusú anyagokat kell kezelnie. Tömör, bevont szabvány lapokhoz az UWL-3 elegendő. Kisebb üzem, csak alkalmi vékonylap-kezeléssel, költséghatékonyabb az UWL-1S-sel. Nagyon nagy ipari lapokhoz vagy nehéz ajtókhoz válassza az UWL-5-öt. Az Asamer a kiválasztás előtt teszteli konkrét anyagát, és így biztosítja a terhelés és a szívórendszer biztonságos kombinációját.',
    },
    faq: [
      {
        question: { de: 'Worin unterscheidet sich der UWL-3S vom Standard UWL-3?', en: 'How does the UWL-3S differ from the standard UWL-3?', cz: 'V čem se UWL-3S liší od standardního UWL-3?', sk: 'V čom sa UWL-3S líši od štandardného UWL-3?', hu: 'Miben különbözik az UWL-3S a szabvány UWL-3-tól?' },
        answer: {
          de: 'Der UWL-3S nutzt eine andere Saugplatten-Konstruktion mit erhöhtem Vakuumreservoir und feiner abgestimmter Dichtungsgeometrie. Die Basislast-Klasse entspricht dem UWL-3, aber der UWL-3S kann Platten aufnehmen, die an einem Standardgerät abreißen würden.',
          en: 'The UWL-3S uses a different suction plate design with increased vacuum reservoir and finer-tuned sealing geometry. The base load class matches the UWL-3, but the UWL-3S can pick up panels that would tear off a standard device.',
          cz: 'UWL-3S používá jinou konstrukci sací desky se zvýšeným vakuovým rezervoárem a přesněji vyladěnou geometrií těsnění. Základní nosnostní třída odpovídá UWL-3, ale UWL-3S dokáže zvednout desky, které by se od standardního zařízení odtrhly.',
          sk: 'UWL-3S používa inú konštrukciu sacej dosky so zvýšeným vákuovým rezervoárom a presnejšie vyladenou geometriou tesnenia. Základná nosnostná trieda zodpovedá UWL-3, ale UWL-3S dokáže zdvihnúť dosky, ktoré by sa od štandardného zariadenia odtrhli.',
          hu: 'Az UWL-3S más szívótárcsa-konstrukciót használ megnövelt vákuumtartállyal és finomabban hangolt tömítési geometriával. Az alap teherbírási osztály megegyezik az UWL-3-éval, de az UWL-3S olyan lapokat is képes felvenni, amelyek szabvány készülékről leszakadnának.',
        },
      },
      {
        question: { de: 'Lässt sich mein bestehender UWL-3 auf UWL-3S umrüsten?', en: 'Can my existing UWL-3 be converted to UWL-3S?', cz: 'Lze můj stávající UWL-3 přestavět na UWL-3S?', sk: 'Dá sa môj existujúci UWL-3 prestavať na UWL-3S?', hu: 'Átalakítható-e a meglévő UWL-3-am UWL-3S-re?' },
        answer: {
          de: 'In vielen Fällen ja — die Saugplatten-Einheit ist im Feld austauschbar. Asamer prüft den Zustand Ihres Geräts und liefert passende Spezial-Saugplatten. Steuerung und Rahmen bleiben unverändert.',
          en: 'In many cases yes — the suction plate unit can be exchanged in the field. Asamer checks the condition of your device and supplies matching special suction plates. Control and frame remain unchanged.',
          cz: 'V mnoha případech ano — jednotka sací desky je vyměnitelná v terénu. Asamer prověří stav vašeho zařízení a dodá odpovídající speciální sací desky. Řízení a rám zůstávají nezměněny.',
          sk: 'V mnohých prípadoch áno — jednotka sacej dosky je vymeniteľná v teréne. Asamer preverí stav vášho zariadenia a dodá zodpovedajúce špeciálne sacie dosky. Riadenie a rám zostávajú nezmenené.',
          hu: 'Sok esetben igen — a szívótárcsa-egység a helyszínen cserélhető. Az Asamer ellenőrzi készülékének állapotát, és megfelelő speciális szívótárcsákat szállít. A vezérlés és a keret változatlan marad.',
        },
      },
      {
        question: { de: 'Brauche ich für den UWL-3S eine andere Schulung?', en: 'Do I need different training for the UWL-3S?', cz: 'Potřebuji pro UWL-3S jiné školení?', sk: 'Potrebujem pre UWL-3S iné školenie?', hu: 'Más képzésre van szükségem az UWL-3S-hez?' },
        answer: {
          de: 'Die Bedienung entspricht dem UWL-3 — eine kurze Einweisung durch Asamer zum speziellen Saugverhalten und zu den neuen Warnmeldungen reicht aus. Bestehende Bediener können das Gerät ohne vollständige Neuschulung übernehmen.',
          en: 'Operation is identical to the UWL-3 — a short instruction from Asamer on the special suction behavior and new warnings is sufficient. Existing operators can take over the device without full retraining.',
          cz: 'Obsluha odpovídá UWL-3 — stačí krátké zaškolení od Asamer ke specifickému sacímu chování a novým výstrahám. Stávající obsluha může zařízení převzít bez úplného přeškolení.',
          sk: 'Obsluha zodpovedá UWL-3 — stačí krátke zaškolenie od Asamer k špecifickému saciemu správaniu a novým výstrahám. Existujúca obsluha môže zariadenie prevziať bez úplného preškolenia.',
          hu: 'A kezelés megegyezik az UWL-3-éval — az Asamer rövid tájékoztatása a speciális szívóviselkedésről és az új figyelmeztetésekről elegendő. A meglévő kezelők teljes átképzés nélkül átvehetik a készüléket.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  VACUUM-LIFTERS — uwl-5                                             */
  /* ------------------------------------------------------------------ */
  'uwl-5': {
    longDescription: {
      de: `Der Barbaric UWL-5 ist der Schwerlast-Vakuumheber für industrielle Plattenhandhabung und große Türen. Er handhabt überformatige Platten, gepresste Massivholz-Arbeitsplatten, schwere Haustüren oder Industrietore, bei denen kleinere Vakuumheber wie UWL-1 oder UWL-3 an ihre Lastgrenze stoßen. Die verstärkte Rahmenkonstruktion, mehrere parallel arbeitende Saugplatten und eine leistungsstarke Vakuumpumpe mit Pufferspeicher gewährleisten Traglasten, die weit über denen der Einstiegs- und Standardmodelle liegen. Typische Einsatzbereiche sind Türenwerke, Verpackungsmöbel-Hersteller, Küchenbauer mit Großformatplatten und Plattenhandel mit XXL-Formaten. Dank redundantem Sicherheitskonzept bleibt die Last auch bei Teilausfall eines Saugkreises sicher gehalten. Asamer plant, liefert und wartet den UWL-5 als autorisierter Barbaric-Händler in CZ, SK und HU — inklusive Statikprüfung des Tragkrans und DGUV-Sicherheitsabnahme.`,
      en: `The Barbaric UWL-5 is the heavy-duty vacuum lifter for industrial panel handling and large doors. It handles oversized panels, pressed solid wood worktops, heavy entrance doors or industrial gates where smaller vacuum lifters such as UWL-1 or UWL-3 reach their load limit. The reinforced frame construction, multiple parallel-working suction plates and a powerful vacuum pump with buffer reservoir deliver load capacities well beyond entry and standard models. Typical applications are door plants, packaging furniture manufacturers, kitchen builders with large-format panels and panel traders with XXL formats. Thanks to a redundant safety concept, the load remains securely held even in case of partial failure of a suction circuit. Asamer plans, supplies and services the UWL-5 as authorized Barbaric dealer in CZ, SK and HU — including structural verification of the supporting crane and DGUV safety acceptance.`,
      cz: `Barbaric UWL-5 je těžký vakuový zvedák pro průmyslovou manipulaci s deskami a velké dveře. Zvládá nadměrné desky, lisované masivní dřevěné pracovní desky, těžké vchodové dveře nebo průmyslová vrata, u nichž menší vakuové zvedáky jako UWL-1 nebo UWL-3 narážejí na své zatížitelné hranice. Zesílená rámová konstrukce, několik paralelně pracujících sacích desek a výkonné vakuové čerpadlo s pufrem zajišťují nosnosti daleko přesahující vstupní a standardní modely. Typickými oblastmi nasazení jsou výrobny dveří, výrobci balicího nábytku, výrobci kuchyní s velkoformátovými deskami a obchodníci s deskami v XXL formátech. Díky redundantnímu bezpečnostnímu konceptu zůstává břemeno bezpečně drženo i při částečném výpadku jednoho sacího okruhu. Asamer projektuje, dodává a servisuje UWL-5 jako autorizovaný prodejce Barbaric v CZ, SK a HU — včetně statického ověření nosného jeřábu a bezpečnostního schválení dle DGUV.`,
      sk: `Barbaric UWL-5 je ťažký vákuový zdvíhač pre priemyselnú manipuláciu s doskami a veľké dvere. Zvláda nadmerné dosky, lisované masívne drevené pracovné dosky, ťažké vchodové dvere alebo priemyselné brány, pri ktorých menšie vákuové zdvíhače ako UWL-1 alebo UWL-3 narážajú na svoje hranice zaťaženia. Zosilnená rámová konštrukcia, niekoľko paralelne pracujúcich sacích dosiek a výkonné vákuové čerpadlo s pufrom zabezpečujú nosnosti ďaleko presahujúce vstupné a štandardné modely. Typickými oblasťami nasadenia sú výrobne dverí, výrobcovia baliaceho nábytku, výrobcovia kuchýň s veľkoformátovými doskami a obchodníci s doskami v XXL formátoch. Vďaka redundantnému bezpečnostnému konceptu zostáva bremeno bezpečne držané aj pri čiastočnom výpadku jedného sacieho okruhu. Asamer projektuje, dodáva a servisuje UWL-5 ako autorizovaný predajca Barbaric v CZ, SK a HU — vrátane statického overenia nosného žeriavu a bezpečnostného schválenia podľa DGUV.`,
      hu: `A Barbaric UWL-5 a nehézipari vákuumemelő ipari lapkezelésre és nagy ajtókhoz. Túlméretes lapokat, préselt tömörfa munkalapokat, nehéz bejárati ajtókat vagy ipari kapukat kezel, amelyeknél a kisebb vákuumemelők, mint az UWL-1 vagy UWL-3, elérik terhelési határukat. A megerősített keretszerkezet, a több párhuzamosan dolgozó szívótárcsa és a puffertartállyal ellátott nagy teljesítményű vákuumszivattyú a belépő- és szabványmodelleken messze túlmutató teherbírást biztosít. Tipikus alkalmazási területek: ajtógyárak, csomagolóbútor-gyártók, nagyformátumú lapokat használó konyhagyártók és XXL formátumú lapkereskedők. A redundáns biztonsági koncepciónak köszönhetően a teher egy szívókör részleges kiesése esetén is biztonságosan megtartva marad. Az Asamer hivatalos Barbaric viszonteladóként tervezi, szállítja és szervizeli az UWL-5-öt csehországi, szlovákiai és magyarországi ügyfelek számára — a tartódaru statikai ellenőrzésével és a DGUV szerinti biztonsági átvétellel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Türenfertigung und Objekttüren', en: 'For door manufacturing and project doors', cz: 'Pro výrobu dveří a objektové dveře', sk: 'Pre výrobu dverí a objektové dvere', hu: 'Ajtógyártáshoz és objektumajtókhoz' },
        body: {
          de: 'Schwere Haustüren, Brandschutz- oder Sicherheitstüren erreichen schnell mehrere hundert Kilogramm Gewicht. Der UWL-5 nimmt diese Türen sicher auf und positioniert sie auf der Montagelinie oder im Versandpuffer millimetergenau — ohne zusätzliche Helfer, ohne Rutschgefahr und ohne Beschädigungen an Oberfläche oder Beschlag.',
          en: 'Heavy entrance doors, fire protection or security doors quickly reach several hundred kilograms. The UWL-5 picks up these doors safely and positions them on the assembly line or in the dispatch buffer with millimetre precision — without additional helpers, without slipping risk and without damage to surface or fittings.',
          cz: 'Těžké vchodové dveře, protipožární nebo bezpečnostní dveře rychle dosahují několika set kilogramů hmotnosti. UWL-5 bere tyto dveře bezpečně a na montážní lince nebo v expedičním bufferu je milimetrově přesně polohuje — bez dalších pomocníků, bez nebezpečí sklouznutí a bez poškození povrchu nebo kování.',
          sk: 'Ťažké vchodové dvere, protipožiarne alebo bezpečnostné dvere rýchlo dosahujú niekoľko sto kilogramov hmotnosti. UWL-5 berie tieto dvere bezpečne a na montážnej linke alebo v expedičnom bufferi ich milimetrovo presne polohuje — bez ďalších pomocníkov, bez nebezpečenstva pošmyknutia a bez poškodenia povrchu alebo kovania.',
          hu: 'A nehéz bejárati ajtók, tűzgátló vagy biztonsági ajtók gyorsan elérhetik a több száz kilogrammos tömeget. Az UWL-5 biztonságosan felveszi ezeket az ajtókat, és a szerelősoron vagy a szállítási pufferben milliméter pontosan pozícionálja — további segítők nélkül, csúszásveszély és a felület vagy a vasalat sérülése nélkül.',
        },
      },
      {
        heading: { de: 'Für XXL-Platten und Industrie-Halbzeug', en: 'For XXL panels and industrial semi-finished products', cz: 'Pro XXL desky a průmyslové polotovary', sk: 'Pre XXL dosky a priemyselné polotovary', hu: 'XXL lapokhoz és ipari félkész termékekhez' },
        body: {
          de: 'Großformatige Platten, gepresste Massivholz-Arbeitsplatten oder industrielle Sandwichelemente mit Deckschichten aus Stahl oder Aluminium können leicht mehrere hundert Kilogramm pro Platte wiegen. Der UWL-5 handhabt solche Formate zuverlässig und vermeidet Quetschverletzungen, die bei manueller Handhabung regelmäßig auftreten.',
          en: 'Large-format panels, pressed solid wood worktops or industrial sandwich elements with steel or aluminium face layers can easily weigh several hundred kilograms per panel. The UWL-5 reliably handles such formats and prevents crush injuries that regularly occur in manual handling.',
          cz: 'Velkoformátové desky, lisované masivní dřevěné pracovní desky nebo průmyslové sendvičové prvky s krycími vrstvami z oceli nebo hliníku mohou snadno vážit několik set kilogramů na desku. UWL-5 takové formáty spolehlivě zvládá a brání drtivým poraněním, která při manuální manipulaci pravidelně vznikají.',
          sk: 'Veľkoformátové dosky, lisované masívne drevené pracovné dosky alebo priemyselné sendvičové prvky s krycími vrstvami z ocele alebo hliníka môžu ľahko vážiť niekoľko sto kilogramov na dosku. UWL-5 takéto formáty spoľahlivo zvláda a bráni drvivým poraneniam, ktoré pri manuálnej manipulácii pravidelne vznikajú.',
          hu: 'A nagyformátumú lapok, a préselt tömörfa munkalapok vagy az acél vagy alumínium fedőrétegű ipari szendvicselemek lapként könnyen több száz kilogramm tömegűek lehetnek. Az UWL-5 az ilyen formátumokat megbízhatóan kezeli, és megelőzi a manuális anyagmozgatás során rendszeresen előforduló zúzódásos sérüléseket.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Der UWL-5 ist die richtige Wahl, wenn Ihre Lasten oberhalb der Tragfähigkeit von UWL-3 oder UWL-3J liegen — typisch bei Türenwerken, XXL-Plattenhandel oder schwerem Industrie-Halbzeug. Für mittlere Lasten im klassischen Möbelbau reicht der UWL-3 oder die schnellere UWL-3J Variante. Bei sehr dünnen oder porösen Materialien in dieser Gewichtsklasse kombiniert Asamer den UWL-5 mit UWL-3S-Saugtechnik. Wir prüfen vor Lieferung Ihre Kranstatik und passen die Saugplatten-Anordnung an Ihre konkreten Plattenformate an.',
      en: 'The UWL-5 is the right choice when your loads exceed the capacity of UWL-3 or UWL-3J — typical for door plants, XXL panel trade or heavy industrial semi-finished products. For medium loads in classic furniture construction, the UWL-3 or the faster UWL-3J variant is sufficient. For very thin or porous materials in this weight class, Asamer combines the UWL-5 with UWL-3S suction technology. We verify your crane statics before delivery and adapt the suction plate arrangement to your specific panel formats.',
      cz: 'UWL-5 je správnou volbou, pokud vaše zatížení překračují nosnost UWL-3 nebo UWL-3J — typicky u výroben dveří, obchodu s XXL deskami nebo těžkých průmyslových polotovarů. Pro střední zatížení v klasické výrobě nábytku postačuje UWL-3 nebo rychlejší varianta UWL-3J. U velmi tenkých nebo porézních materiálů v této hmotnostní třídě Asamer kombinuje UWL-5 se sací technikou UWL-3S. Před dodáním ověříme statiku vašeho jeřábu a přizpůsobíme uspořádání sacích desek vašim konkrétním formátům desek.',
      sk: 'UWL-5 je správnou voľbou, ak vaše zaťaženia prekračujú nosnosť UWL-3 alebo UWL-3J — typicky pri výrobniach dverí, obchode s XXL doskami alebo ťažkých priemyselných polotovaroch. Pre stredné zaťaženia v klasickej výrobe nábytku postačuje UWL-3 alebo rýchlejší variant UWL-3J. Pri veľmi tenkých alebo poréznych materiáloch v tejto hmotnostnej triede Asamer kombinuje UWL-5 so sacou technikou UWL-3S. Pred dodaním overíme statiku vášho žeriavu a prispôsobíme usporiadanie sacích dosiek vašim konkrétnym formátom dosiek.',
      hu: 'Az UWL-5 a megfelelő választás, ha terhelései meghaladják az UWL-3 vagy UWL-3J teherbírását — jellemzően ajtógyárakban, XXL lapkereskedelemben vagy nehéz ipari félkész termékeknél. Klasszikus bútorgyártásban közepes terhelésekhez az UWL-3 vagy a gyorsabb UWL-3J változat elegendő. Ebben a tömegkategóriában nagyon vékony vagy porózus anyagok esetén az Asamer az UWL-5-öt UWL-3S szívótechnikával kombinálja. Szállítás előtt ellenőrizzük a darujának statikáját, és a szívótárcsák elrendezését az Ön konkrét lapformátumaihoz igazítjuk.',
    },
    faq: [
      {
        question: { de: 'Welche maximalen Lasten sind mit dem UWL-5 möglich?', en: 'What are the maximum loads possible with the UWL-5?', cz: 'Jaká jsou maximální zatížení možná s UWL-5?', sk: 'Aké sú maximálne zaťaženia možné s UWL-5?', hu: 'Milyen maximális terhelések lehetségesek az UWL-5-tel?' },
        answer: {
          de: 'Der UWL-5 deckt Lasten deutlich über der Standardklasse des UWL-3 ab und ist für schwere Türen und Industrieplatten ausgelegt. Die exakte Traglast hängt von Saugfläche und Plattenoberfläche ab. Asamer erstellt die Konfiguration auf Grundlage Ihrer konkreten Plattentypen.',
          en: 'The UWL-5 covers loads significantly above the standard class of the UWL-3 and is designed for heavy doors and industrial panels. Exact load capacity depends on suction area and panel surface. Asamer prepares the configuration based on your specific panel types.',
          cz: 'UWL-5 pokrývá zatížení výrazně nad standardní třídou UWL-3 a je dimenzován na těžké dveře a průmyslové desky. Přesná nosnost závisí na sací ploše a povrchu desky. Asamer vytvoří konfiguraci na základě vašich konkrétních typů desek.',
          sk: 'UWL-5 pokrýva zaťaženia výrazne nad štandardnou triedou UWL-3 a je dimenzovaný na ťažké dvere a priemyselné dosky. Presná nosnosť závisí od sacej plochy a povrchu dosky. Asamer vytvorí konfiguráciu na základe vašich konkrétnych typov dosiek.',
          hu: 'Az UWL-5 az UWL-3 szabványosztályát jelentősen meghaladó terheléseket fed le, és nehéz ajtókhoz és ipari lapokhoz van méretezve. A pontos teherbírás a szívófelülettől és a lap felületétől függ. Az Asamer a konfigurációt az Ön konkrét laptípusai alapján állítja össze.',
        },
      },
      {
        question: { de: 'Braucht der UWL-5 eine verstärkte Kranstruktur?', en: 'Does the UWL-5 require a reinforced crane structure?', cz: 'Vyžaduje UWL-5 zesílenou konstrukci jeřábu?', sk: 'Vyžaduje UWL-5 zosilnenú konštrukciu žeriavu?', hu: 'Szüksége van-e az UWL-5-nek megerősített darukonstrukcióra?' },
        answer: {
          de: 'In der Regel ja — der UWL-5 wiegt zusammen mit seiner Last deutlich mehr als ein UWL-3. Asamer überprüft die Tragfähigkeit Ihres vorhandenen Schwenkkrans oder Schienensystems und stellt bei Bedarf eine stärkere Konstruktion zusammen mit Barbaric zur Verfügung.',
          en: 'Typically yes — the UWL-5 together with its load weighs significantly more than a UWL-3. Asamer verifies the load capacity of your existing slewing crane or rail system and, if necessary, provides a stronger structure together with Barbaric.',
          cz: 'Zpravidla ano — UWL-5 spolu s břemenem váží výrazně více než UWL-3. Asamer prověří nosnost vašeho stávajícího otočného jeřábu nebo kolejnicového systému a v případě potřeby poskytne silnější konstrukci společně s Barbaric.',
          sk: 'Spravidla áno — UWL-5 spolu s bremenom váži výrazne viac ako UWL-3. Asamer preverí nosnosť vášho existujúceho otočného žeriavu alebo koľajnicového systému a v prípade potreby poskytne silnejšiu konštrukciu spoločne s Barbaric.',
          hu: 'Általában igen — az UWL-5 a terhével együtt jelentősen nehezebb egy UWL-3-nál. Az Asamer ellenőrzi meglévő forgódarujának vagy sínrendszerének teherbírását, és szükség esetén a Barbaric-kal közösen erősebb szerkezetet biztosít.',
        },
      },
      {
        question: { de: 'Wie viele Saugkreise arbeiten im UWL-5 parallel?', en: 'How many suction circuits work in parallel in the UWL-5?', cz: 'Kolik sacích okruhů pracuje v UWL-5 paralelně?', sk: 'Koľko sacích okruhov pracuje v UWL-5 paralelne?', hu: 'Hány szívókör dolgozik párhuzamosan az UWL-5-ben?' },
        answer: {
          de: 'Der UWL-5 arbeitet mit mehreren voneinander unabhängigen Saugkreisen — fällt einer aus, übernehmen die anderen die Last mit ausreichender Sicherheitsreserve. Die konkrete Anzahl richtet sich nach Plattenformat und Traglastklasse; Asamer legt die Konfiguration projektbezogen aus.',
          en: 'The UWL-5 works with multiple independent suction circuits — if one fails, the others take over the load with sufficient safety reserve. The actual number depends on panel format and load class; Asamer designs the configuration per project.',
          cz: 'UWL-5 pracuje s několika navzájem nezávislými sacími okruhy — při výpadku jednoho převezmou ostatní břemeno s dostatečnou bezpečnostní rezervou. Konkrétní počet závisí na formátu desky a třídě nosnosti; Asamer konfiguruje projekčně.',
          sk: 'UWL-5 pracuje s viacerými navzájom nezávislými sacími okruhmi — pri výpadku jedného prevezmú ostatné bremeno s dostatočnou bezpečnostnou rezervou. Konkrétny počet závisí od formátu dosky a triedy nosnosti; Asamer konfiguruje projektovo.',
          hu: 'Az UWL-5 több, egymástól független szívókörrel dolgozik — ha az egyik meghibásodik, a többi megfelelő biztonsági tartalékkal átveszi a terhet. A konkrét szám a lapformátumtól és a teherbírási osztálytól függ; az Asamer a konfigurációt projektfüggően alakítja ki.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  VACUUM-SPECIAL — swl-griplifter                                    */
  /* ------------------------------------------------------------------ */
  'swl-griplifter': {
    longDescription: {
      de: `Der Barbaric SWL Grip-Lifter ist ein Sonderheber, der Vakuumtechnik mit mechanischem Greifen kombiniert. Er kommt dort zum Einsatz, wo reines Vakuumhandling an Grenzen stößt — etwa bei Werkstücken mit unregelmäßiger Geometrie, stark profilierten Oberflächen oder Materialien, die kein ausreichendes Vakuum aufbauen. Die ansaugende Vakuumfläche bringt die Last in Position; ein mechanischer Unterklemmer oder Kantengreifer sichert sie anschließend formschlüssig. So lassen sich auch komplexe Bauteile wie Treppenstufen, Rahmenprofile oder vorkonfektionierte Möbelteile prozesssicher heben. Der SWL Grip-Lifter ist in mehreren Tragkraftklassen und mit unterschiedlichen Greifergeometrien erhältlich. Asamer projektiert den Grip-Lifter für Tischlereien, Treppenbauer und Sonderanwendungen in Tschechien, Slowakei und Ungarn — inklusive Greiferanpassung, Sicherheitsabnahme und DGUV-Prüfservice.`,
      en: `The Barbaric SWL Grip-Lifter is a special lifter combining vacuum technology with mechanical gripping. It is used where pure vacuum handling reaches its limits — for workpieces with irregular geometry, strongly profiled surfaces or materials that cannot build sufficient vacuum. The vacuum face positions the load; a mechanical underclamp or edge gripper then secures it with a positive-fit hold. This enables reliable lifting of complex parts such as stair treads, frame profiles or pre-assembled furniture components. The SWL Grip-Lifter is available in several load capacity classes and with different gripper geometries. Asamer engineers the Grip-Lifter for joinery shops, stair builders and special applications in Czech Republic, Slovakia and Hungary — including gripper adaptation, safety acceptance and DGUV inspection service.`,
      cz: `Barbaric SWL Grip-Lifter je speciální zvedák, který kombinuje vakuovou techniku s mechanickým úchopem. Používá se tam, kde čistě vakuová manipulace naráží na hranice — například u obrobků s nepravidelnou geometrií, silně profilovanými povrchy nebo materiály, které nedokážou vytvořit dostatečné vakuum. Sací vakuová plocha uvede břemeno do polohy; mechanický podchyt nebo hranový úchop ho následně tvarově zajistí. Lze tak bezpečně zvedat i složité díly jako schody, rámové profily nebo přednastavené nábytkové části. SWL Grip-Lifter je dostupný ve více třídách nosnosti a s různými geometriemi úchopu. Asamer projektuje Grip-Lifter pro truhlářství, výrobce schodů a speciální aplikace v České republice, na Slovensku a v Maďarsku — včetně přizpůsobení úchopu, bezpečnostního schválení a servisu kontroly DGUV.`,
      sk: `Barbaric SWL Grip-Lifter je špeciálny zdvíhač, ktorý kombinuje vákuovú techniku s mechanickým úchopom. Používa sa tam, kde čisto vákuová manipulácia naráža na hranice — napríklad pri obrobkoch s nepravidelnou geometriou, silne profilovanými povrchmi alebo materiálmi, ktoré nedokážu vytvoriť dostatočné vákuum. Sacia vákuová plocha uvedie bremeno do polohy; mechanický podchyt alebo hranový úchop ho následne tvarovo zaistí. Takto možno bezpečne zdvíhať aj zložité diely ako schody, rámové profily alebo prednastavené nábytkové časti. SWL Grip-Lifter je dostupný vo viacerých triedach nosnosti a s rôznymi geometriami úchopu. Asamer projektuje Grip-Lifter pre stolárstvo, výrobcov schodov a špeciálne aplikácie v Českej republike, na Slovensku a v Maďarsku — vrátane prispôsobenia úchopu, bezpečnostného schválenia a servisu kontroly DGUV.`,
      hu: `A Barbaric SWL Grip-Lifter egy speciális emelő, amely a vákuumtechnikát mechanikus megfogással ötvözi. Ott alkalmazzák, ahol a tiszta vákuumos anyagmozgatás korlátokba ütközik — például szabálytalan geometriájú, erősen profilozott felületű vagy olyan anyagból készült munkadarabok esetén, amelyek nem képesek kellő vákuumot létrehozni. A szívó vákuumfelület pozícióba hozza a terhet; egy mechanikus alábilincselő vagy élmegfogó azután alakzárással rögzíti. Így biztonságosan emelhetők az olyan összetett alkatrészek is, mint a lépcsőfokok, keretprofilok vagy előszerelt bútorelemek. Az SWL Grip-Lifter több teherbírási osztályban és eltérő megfogó-geometriákkal érhető el. Az Asamer asztalosműhelyek, lépcsőgyártók és egyedi alkalmazások számára tervezi a Grip-Liftert Csehországban, Szlovákiában és Magyarországon — a megfogó testreszabásával, biztonsági átvétellel és DGUV felülvizsgálati szolgáltatással együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Treppenbau und Profilhandling', en: 'For stair construction and profile handling', cz: 'Pro schody a manipulaci s profily', sk: 'Pre schody a manipuláciu s profilmi', hu: 'Lépcsőgyártáshoz és profilkezeléshez' },
        body: {
          de: 'Treppenstufen mit angefrästen Kanten oder Profilleisten lassen sich mit reinem Vakuum nur schwer sichern. Der mechanische Greifer des SWL umschließt die Kante zusätzlich und verhindert das Abrutschen auch bei höherem Gewicht oder schrägem Transportwinkel.',
          en: 'Stair treads with shaped edges or profiled battens are hard to secure with vacuum alone. The SWL mechanical gripper additionally encloses the edge and prevents slipping even at higher weight or inclined transport angle.',
          cz: 'Schody s frézovanými hranami nebo profilové lišty lze čistě vakuem zajistit jen obtížně. Mechanický úchop SWL navíc obepíná hranu a zabraňuje sklouznutí i při vyšší hmotnosti nebo šikmém úhlu přepravy.',
          sk: 'Schody s frézovanými hranami alebo profilové lišty možno čisto vákuom zaistiť len s ťažkosťami. Mechanický úchop SWL navyše obopína hranu a zabraňuje skĺznutiu aj pri vyššej hmotnosti alebo šikmom uhle prepravy.',
          hu: 'A formázott élű lépcsőfokokat vagy profilozott léceket önmagában vákuummal nehéz megfogni. Az SWL mechanikus megfogója emellett átöleli az élet, és megakadályozza a lecsúszást magasabb súlynál vagy ferde szállítási szögnél is.',
        },
      },
      {
        heading: { de: 'Für nicht saugbare Oberflächen', en: 'For non-suctionable surfaces', cz: 'Pro nepřisávatelné povrchy', sk: 'Pre neprisávateľné povrchy', hu: 'Nem szívható felületekhez' },
        body: {
          de: 'Bei rauen, gelochten oder stark strukturierten Oberflächen baut Vakuum nicht sicher auf. Der Grip-Lifter kompensiert dies durch den mechanischen Formschluss und übernimmt auch Werkstücke, die sonst zwei Mitarbeiter manuell bewegen müssten.',
          en: 'On rough, perforated or heavily textured surfaces, vacuum cannot build safely. The Grip-Lifter compensates via positive-fit mechanical hold and handles workpieces that would otherwise require two workers to move manually.',
          cz: 'U drsných, děrovaných nebo silně strukturovaných povrchů se vakuum bezpečně nevytvoří. Grip-Lifter to kompenzuje mechanickým tvarovým spojem a přebírá i obrobky, které by jinak museli ručně přesouvat dva pracovníci.',
          sk: 'Pri drsných, dierovaných alebo silne štruktúrovaných povrchoch sa vákuum bezpečne nevytvorí. Grip-Lifter to kompenzuje mechanickým tvarovým spojom a preberá aj obrobky, ktoré by inak museli ručne presúvať dvaja pracovníci.',
          hu: 'Érdes, lyukasztott vagy erősen strukturált felületeken a vákuum nem épül fel biztonságosan. A Grip-Lifter ezt mechanikus alakzárással kompenzálja, és olyan munkadarabokat is kezel, amelyeket egyébként két dolgozónak kellene manuálisan mozgatnia.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Wählen Sie den SWL Grip-Lifter, wenn Ihre Werkstücke regelmäßig vom Standard-Vakuumheber abweichen — wegen Geometrie, Oberfläche oder Materialeigenschaften. Für klassische Plattenhandhabung reicht der UWL-3. Asamer klärt vor dem Angebot die Greifergeometrie anhand Ihrer typischen Bauteile und empfiehlt die passende Tragkraftklasse.',
      en: 'Choose the SWL Grip-Lifter when your workpieces regularly deviate from the standard vacuum lifter profile — due to geometry, surface or material properties. For classic panel handling, the UWL-3 is sufficient. Before quoting, Asamer clarifies gripper geometry based on your typical parts and recommends the right load capacity class.',
      cz: 'Zvolte SWL Grip-Lifter, pokud se vaše obrobky pravidelně odchylují od profilu standardního vakuového zvedáku — kvůli geometrii, povrchu nebo vlastnostem materiálu. Pro klasickou manipulaci s deskami stačí UWL-3. Před nabídkou Asamer vyjasní geometrii úchopu podle vašich typických dílů a doporučí vhodnou třídu nosnosti.',
      sk: 'Zvoľte SWL Grip-Lifter, ak sa vaše obrobky pravidelne odchyľujú od profilu štandardného vákuového zdvíhača — pre geometriu, povrch alebo vlastnosti materiálu. Pre klasickú manipuláciu s doskami stačí UWL-3. Pred ponukou Asamer vyjasní geometriu úchopu podľa vašich typických dielov a odporučí vhodnú triedu nosnosti.',
      hu: 'Válassza az SWL Grip-Liftert, ha munkadarabjai geometria, felület vagy anyagtulajdonságok miatt rendszeresen eltérnek a szabványos vákuumemelő profiljától. A klasszikus lapkezeléshez elegendő az UWL-3. Az ajánlat előtt az Asamer a tipikus darabok alapján tisztázza a megfogó-geometriát, és a megfelelő teherbírási osztályt javasolja.',
    },
    faq: [
      {
        question: { de: 'Welche Werkstücke profitieren am meisten?', en: 'Which workpieces benefit most?', cz: 'Které obrobky profitují nejvíce?', sk: 'Ktoré obrobky profitujú najviac?', hu: 'Mely munkadarabok profitálnak a legjobban?' },
        answer: {
          de: 'Treppenstufen, gefräste Rahmen, Massivholzbalken, schwere Arbeitsplatten mit Randprofil und vorkonfektionierte Möbelkorpusse. Überall dort, wo die reine Vakuum-Haftkraft bei schrägem Transport oder beim Beschleunigen/Abbremsen als unsicher gilt.',
          en: 'Stair treads, milled frames, solid wood beams, heavy worktops with edge profile and pre-assembled furniture bodies. Wherever pure vacuum adhesion is considered unreliable at inclined transport or during acceleration/braking.',
          cz: 'Schody, frézované rámy, masivní dřevěné trámy, těžké pracovní desky s hranovým profilem a přednastavené nábytkové korpusy. Všude, kde se čistá vakuová přilnavost při šikmé přepravě nebo při zrychlování/brzdění považuje za nespolehlivou.',
          sk: 'Schody, frézované rámy, masívne drevené trámy, ťažké pracovné dosky s hranovým profilom a prednastavené nábytkové korpusy. Všade tam, kde sa čistá vákuová priľnavosť pri šikmej preprave alebo pri zrýchľovaní/brzdení považuje za nespoľahlivú.',
          hu: 'Lépcsőfokok, mart keretek, tömör fa gerendák, élprofilos nehéz munkalapok és előszerelt bútorkorpuszok. Mindenhol, ahol a tiszta vákuumos tapadás ferde szállításnál vagy gyorsításnál/fékezésnél nem tekinthető megbízhatónak.',
        },
      },
      {
        question: { de: 'Wie wird der Greifer angepasst?', en: 'How is the gripper adapted?', cz: 'Jak se úchop přizpůsobuje?', sk: 'Ako sa úchop prispôsobuje?', hu: 'Hogyan igazítják a megfogót?' },
        answer: {
          de: 'Barbaric fertigt den mechanischen Greifer nach den typischen Bauteilgeometrien — üblich sind verstellbare Klemmbereiche für einen Formatbereich, nicht für genau ein Maß. Asamer nimmt vor der Auslegung typische Werkstückproben auf und stimmt das Design ab.',
          en: 'Barbaric manufactures the mechanical gripper based on typical part geometries — adjustable clamping ranges for a format range are common, not for one exact size. Asamer takes typical workpiece samples before dimensioning and coordinates the design.',
          cz: 'Barbaric vyrábí mechanický úchop podle typických geometrií dílů — obvyklé jsou nastavitelné upínací rozsahy pro rozsah formátů, nikoliv pro přesně jeden rozměr. Asamer před návrhem odebere typické vzorky obrobků a sladí design.',
          sk: 'Barbaric vyrába mechanický úchop podľa typických geometrií dielov — obvyklé sú nastaviteľné upínacie rozsahy pre rozsah formátov, nie pre presne jeden rozmer. Asamer pred návrhom odoberie typické vzorky obrobkov a zladí dizajn.',
          hu: 'A Barbaric a mechanikus megfogót a tipikus alkatrész-geometriák alapján gyártja — szabályozható szorítási tartomány jellemző egy formátumtartományra, nem pontosan egy méretre. Az Asamer a méretezés előtt tipikus munkadarab-mintákat vesz fel, és egyezteti a kialakítást.',
        },
      },
      {
        question: { de: 'Ist der Grip-Lifter langsamer als UWL-3?', en: 'Is the Grip-Lifter slower than the UWL-3?', cz: 'Je Grip-Lifter pomalejší než UWL-3?', sk: 'Je Grip-Lifter pomalší ako UWL-3?', hu: 'Lassabb a Grip-Lifter az UWL-3-nál?' },
        answer: {
          de: 'Das Klemmen und Lösen des mechanischen Greifers verlängert den Takt geringfügig. Bei typischen Stückzahlen im Treppen- oder Sonderteilbau fällt das nicht ins Gewicht, da die Bauteile deutlich länger in Bearbeitung sind als im Transport.',
          en: 'Clamping and releasing the mechanical gripper slightly extends cycle time. For typical quantities in stair or special part production, this is negligible, since parts spend much more time in machining than in transport.',
          cz: 'Sevření a uvolnění mechanického úchopu mírně prodlouží takt. Při typických kusových počtech ve výrobě schodů nebo speciálních dílů to nepadá na váhu, protože díly jsou výrazně déle v obrábění než v přepravě.',
          sk: 'Zovretie a uvoľnenie mechanického úchopu mierne predĺži takt. Pri typických kusových počtoch vo výrobe schodov alebo špeciálnych dielov to nepadá na váhu, pretože diely sú výrazne dlhšie v obrábaní než v preprave.',
          hu: 'A mechanikus megfogó rögzítése és oldása kissé megnöveli a ciklusidőt. A lépcső- vagy egyedi alkatrészgyártás tipikus darabszámainál ez nem meghatározó, mivel az alkatrészek lényegesen hosszabb ideig vannak megmunkálás alatt, mint szállítás közben.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  VACUUM-SPECIAL — swl-planklifter                                   */
  /* ------------------------------------------------------------------ */
  'swl-planklifter': {
    longDescription: {
      de: `Der Barbaric SWL Plank-Lifter ist ein Sonderheber speziell für lange, schmale Werkstücke wie Bohlen, Leimholz-Stäbe, Kantholz oder Langprofile. Während Standard-Vakuumheber für flächige Platten ausgelegt sind, verteilt der Plank-Lifter seine Sauger über eine Traverse mit großer Länge — typisch fünf bis acht Meter — bei vergleichsweise schmaler Breite. Dadurch hebt er lange Bohlen prozesssicher, ohne dass sich das Werkstück durchbiegt oder seitlich abkippt. Typische Einsatzbereiche sind Sägewerke, Leimholzproduktionen, Holzbauzimmereien und Palettenwerke. Der Plank-Lifter kann an Säulenschwenkkränen, Fachwerkbrücken oder stationären Hebeeinrichtungen montiert werden. Asamer plant Plank-Lifter-Lösungen für Sägebetriebe und Zimmereien in Tschechien, Slowakei und Ungarn — inklusive Auslegung der Saugerverteilung, Anbindung an vorhandene Krananlagen und Serviceanbindung.`,
      en: `The Barbaric SWL Plank-Lifter is a special lifter dedicated to long, narrow workpieces such as planks, glulam sticks, squared timber or long profiles. While standard vacuum lifters are designed for flat panels, the Plank-Lifter distributes its suction cups across a traverse of significant length — typically five to eight metres — at comparatively narrow width. This lifts long planks reliably without the workpiece bending through or tipping sideways. Typical applications are sawmills, glulam production, timber framing carpentry and pallet plants. The Plank-Lifter can be mounted on column slewing cranes, truss bridges or stationary lifting devices. Asamer plans Plank-Lifter solutions for sawmill operations and carpentries in Czech Republic, Slovakia and Hungary — including suction cup distribution layout, integration with existing crane systems and service connection.`,
      cz: `Barbaric SWL Plank-Lifter je speciální zvedák určený pro dlouhé, úzké obrobky jako fošny, lepené hranoly, hranolové řezivo nebo dlouhé profily. Zatímco standardní vakuové zvedáky jsou navrženy pro plošné desky, Plank-Lifter rozděluje své přísavky po traverze významné délky — obvykle pět až osm metrů — při poměrně úzké šířce. Tím zvedá dlouhé fošny spolehlivě, aniž by se obrobek prohnul nebo se boční převrátil. Typickými oblastmi použití jsou pily, výroby lepeného dřeva, tesařské dílny dřevostaveb a paletárny. Plank-Lifter lze namontovat na sloupové otočné jeřáby, příhradové mosty nebo stacionární zdvíhací zařízení. Asamer projektuje řešení Plank-Lifter pro pilařské provozy a tesařství v České republice, na Slovensku a v Maďarsku — včetně návrhu rozmístění přísavek, napojení na stávající jeřábová zařízení a servisního napojení.`,
      sk: `Barbaric SWL Plank-Lifter je špeciálny zdvíhač určený pre dlhé, úzke obrobky ako fošne, lepené hranoly, hranolové rezivo alebo dlhé profily. Zatiaľ čo štandardné vákuové zdvíhače sú navrhnuté pre plošné dosky, Plank-Lifter rozdeľuje svoje prísavky po traverze významnej dĺžky — obvykle päť až osem metrov — pri pomerne úzkej šírke. Tým zdvíha dlhé fošne spoľahlivo, bez toho, aby sa obrobok prehol alebo bočne prevrátil. Typickými oblasťami použitia sú píly, výroby lepeného dreva, tesárske dielne drevostavieb a paletárne. Plank-Lifter možno namontovať na stĺpové otočné žeriavy, priehradové mosty alebo stacionárne zdvíhacie zariadenia. Asamer projektuje riešenia Plank-Lifter pre píly a tesárstva v Českej republike, na Slovensku a v Maďarsku — vrátane návrhu rozloženia prísaviek, napojenia na existujúce žeriavové zariadenia a servisného napojenia.`,
      hu: `A Barbaric SWL Plank-Lifter hosszú, keskeny munkadarabokhoz — pallókhoz, rétegragasztott gerendákhoz, négyzetfára vágott fához vagy hosszú profilokhoz — készült speciális emelő. Míg a szabványos vákuumemelőket lapos táblákra tervezték, a Plank-Lifter szívótárcsáit jelentős hosszúságú — jellemzően öt-nyolc méteres — traverzen osztja szét, viszonylag keskeny szélességgel. Ezzel a hosszú pallókat megbízhatóan emeli anélkül, hogy a munkadarab meghajlana vagy oldalra billenne. Tipikus alkalmazási területek a fűrészüzemek, a rétegragasztott fa gyártása, az ácsszerkezetek és a raklapgyárak. A Plank-Lifter felszerelhető oszlopos forgódarukra, rácsos hidakra vagy stacionárius emelőberendezésekre. Az Asamer fűrészüzemek és ácsszerkezeti üzemek számára tervezi a Plank-Lifter megoldásokat Csehországban, Szlovákiában és Magyarországon — a szívótárcsa-elrendezés tervezésével, a meglévő daruberendezésekhez való csatlakoztatással és szervizbekötéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Sägewerke und Leimholzproduktion', en: 'For sawmills and glulam production', cz: 'Pro pily a výrobu lepeného dřeva', sk: 'Pre píly a výrobu lepeného dreva', hu: 'Fűrészüzemekhez és rétegragasztott fa gyártásához' },
        body: {
          de: 'An der Trockenkammer, am Hobelstand oder an der Leimhölzer-Presse fallen regelmäßig lange Bohlen an, die manuell nur zu zweit getragen werden können. Der Plank-Lifter ermöglicht Ein-Personen-Bedienung und beschleunigt die Pufferung zwischen Prozessschritten deutlich.',
          en: 'At the drying kiln, planing station or glulam press, long planks regularly arise that can only be carried by two people manually. The Plank-Lifter enables one-person operation and significantly speeds up buffering between process steps.',
          cz: 'U sušárny, hoblovací stanice nebo lisu na lepené dřevo pravidelně vznikají dlouhé fošny, které mohou ručně nést pouze dva lidé. Plank-Lifter umožňuje obsluhu jednou osobou a výrazně urychluje pufrování mezi procesními kroky.',
          sk: 'Pri sušiarni, hobľovacej stanici alebo lise na lepené drevo pravidelne vznikajú dlhé fošne, ktoré môžu ručne niesť iba dvaja ľudia. Plank-Lifter umožňuje obsluhu jednou osobou a výrazne urýchľuje pufrovanie medzi procesnými krokmi.',
          hu: 'A szárítókamránál, gyalulóállomásnál vagy rétegragasztó présnél rendszeresen keletkeznek hosszú pallók, amelyeket csak ketten tudnak kézzel szállítani. A Plank-Lifter lehetővé teszi az egyszemélyes kezelést, és jelentősen felgyorsítja a folyamatlépések közötti pufferelést.',
        },
      },
      {
        heading: { de: 'Für Holzbauzimmereien und Palettenwerke', en: 'For timber framing carpentries and pallet plants', cz: 'Pro tesárny dřevostaveb a paletárny', sk: 'Pre tesárstva drevostavieb a paletárne', hu: 'Ácsszerkezeti üzemekhez és raklapgyárakhoz' },
        body: {
          de: 'Zimmereien mit Abbundanlagen benötigen für den Transport langer Kanthölzer eine stabile, durchgängige Hebelösung. Der Plank-Lifter bedient Längen bis etwa acht Meter, was in den meisten Produktionsketten den Bereich zwischen Lager, Abbundmaschine und Verladung abdeckt.',
          en: 'Carpentries with timber cutting stations need a stable, continuous lifting solution for transporting long squared timber. The Plank-Lifter handles lengths up to around eight metres, covering the area between storage, cutting station and dispatch in most production chains.',
          cz: 'Tesárny s obráběcími linkami na dřevo potřebují pro přepravu dlouhého hranolového řeziva stabilní, průchozí řešení zdvihu. Plank-Lifter zvládá délky zhruba do osmi metrů, což ve většině výrobních řetězců pokrývá prostor mezi skladem, obráběcí linkou a expedicí.',
          sk: 'Tesárstva s obrábacími linkami na drevo potrebujú na prepravu dlhého hranolového reziva stabilné, priechodné riešenie zdvihu. Plank-Lifter zvláda dĺžky zhruba do ôsmich metrov, čo vo väčšine výrobných reťazcov pokrýva priestor medzi skladom, obrábacou linkou a expedíciou.',
          hu: 'A favágó állomásokkal rendelkező ácsüzemek stabil, folyamatos emelési megoldást igényelnek a hosszú négyzetfára vágott fa szállításához. A Plank-Lifter mintegy nyolc méterig terjedő hosszakat kezel, ami a legtöbb gyártási láncban lefedi a raktár, a vágóállomás és a kiszállítás közötti területet.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Wählen Sie den Plank-Lifter, wenn Ihre Werkstücke regelmäßig länger als drei Meter und deutlich schmaler als breit sind. Für klassische Plattenformate reichen UWL-3 oder UWL-5. Die maximale Traglast und Länge klärt Asamer vor dem Angebot anhand Ihrer typischen Produktprofile — bei sehr schmalen Profilen können mechanische Unterstützer zusätzlich notwendig werden.',
      en: 'Choose the Plank-Lifter if your workpieces are regularly longer than three metres and much narrower than they are wide. For classic panel formats, UWL-3 or UWL-5 are sufficient. Maximum load capacity and length is clarified by Asamer before quoting, based on your typical product profiles — for very narrow profiles, mechanical supports may additionally be required.',
      cz: 'Zvolte Plank-Lifter, pokud jsou vaše obrobky pravidelně delší než tři metry a výrazně užší než širší. Pro klasické formáty desek stačí UWL-3 nebo UWL-5. Maximální nosnost a délku Asamer vyjasní před nabídkou na základě vašich typických produktových profilů — u velmi úzkých profilů mohou být navíc nutné mechanické podpěry.',
      sk: 'Zvoľte Plank-Lifter, ak sú vaše obrobky pravidelne dlhšie ako tri metre a výrazne užšie než širšie. Pre klasické formáty dosiek stačí UWL-3 alebo UWL-5. Maximálnu nosnosť a dĺžku Asamer vyjasní pred ponukou na základe vašich typických produktových profilov — pri veľmi úzkych profiloch môžu byť navyše nutné mechanické podpery.',
      hu: 'Válassza a Plank-Liftert, ha munkadarabjai rendszeresen három méternél hosszabbak és szélességüknél lényegesen keskenyebbek. A klasszikus lapformátumokhoz elegendő az UWL-3 vagy UWL-5. A maximális teherbírást és hosszat az Asamer az ajánlat előtt tisztázza az Ön tipikus termékprofiljai alapján — nagyon keskeny profiloknál ezen felül mechanikus alátámasztók is szükségessé válhatnak.',
    },
    faq: [
      {
        question: { de: 'Welche maximale Länge ist möglich?', en: 'What maximum length is possible?', cz: 'Jaká maximální délka je možná?', sk: 'Aká maximálna dĺžka je možná?', hu: 'Milyen maximális hossz lehetséges?' },
        answer: {
          de: 'Standardausführungen decken fünf bis acht Meter ab. Größere Längen sind als Sonderbau möglich, erfordern aber eine statische Auslegung der Traverse sowie eine angepasste Krananlage.',
          en: 'Standard versions cover five to eight metres. Larger lengths are possible as custom builds but require structural dimensioning of the traverse and an adapted crane system.',
          cz: 'Standardní provedení pokrývají pět až osm metrů. Větší délky jsou možné jako zvláštní provedení, vyžadují však statickou dimenzaci traverzy a přizpůsobené jeřábové zařízení.',
          sk: 'Štandardné prevedenia pokrývajú päť až osem metrov. Väčšie dĺžky sú možné ako zvláštne prevedenia, vyžadujú však statickú dimenzáciu traverzy a prispôsobené žeriavové zariadenie.',
          hu: 'A szabványos kivitelek öt-nyolc métert fednek le. Nagyobb hosszak egyedi kivitelben lehetségesek, de a traverz statikai méretezését és testreszabott daruberendezést igényelnek.',
        },
      },
      {
        question: { de: 'Geht das auch bei feuchtem Schnittholz?', en: 'Does it work on damp timber?', cz: 'Funguje to i na vlhkém řezivu?', sk: 'Funguje to aj na vlhkom rezive?', hu: 'Működik nedves fűrészárun is?' },
        answer: {
          de: 'Bei feuchtem Holz ist die Vakuumhaftung reduziert — hier arbeitet der Plank-Lifter mit zusätzlichen mechanischen Stützen, die die Bohle von unten abfangen. Für Sägewerke mit Rohholz ist diese Konfiguration der Standard.',
          en: 'On damp wood, vacuum adhesion is reduced — here the Plank-Lifter uses additional mechanical supports that catch the plank from below. For sawmills with raw timber, this configuration is standard.',
          cz: 'U vlhkého dřeva je vakuová přilnavost snížená — Plank-Lifter zde pracuje s dodatečnými mechanickými podpěrami, které zachytávají fošnu zdola. Pro pily s neopracovaným řezivem je tato konfigurace standardem.',
          sk: 'Pri vlhkom dreve je vákuová priľnavosť znížená — Plank-Lifter tu pracuje s dodatočnými mechanickými podperami, ktoré zachytávajú fošňu zdola. Pre píly s neopracovaným rezivom je táto konfigurácia štandardom.',
          hu: 'Nedves fán a vákuumos tapadás csökkent — a Plank-Lifter itt további mechanikus alátámasztókkal dolgozik, amelyek alulról fogják meg a pallót. Nyersfűrészáruval dolgozó fűrészüzemekben ez a konfiguráció a szabvány.',
        },
      },
      {
        question: { de: 'Passt der Plank-Lifter an meinen vorhandenen Kran?', en: 'Will the Plank-Lifter fit my existing crane?', cz: 'Hodí se Plank-Lifter na můj stávající jeřáb?', sk: 'Hodí sa Plank-Lifter na môj existujúci žeriav?', hu: 'Illeszkedik a Plank-Lifter a meglévő darumhoz?' },
        answer: {
          de: 'Meistens ja — der Plank-Lifter ist als Anbaugerät an gängige Säulenschwenkkräne, Fachwerkbrücken oder Kettenzüge konzipiert. Vor der Bestellung prüft Asamer die Tragfähigkeit des vorhandenen Krans und die elektrische Schnittstelle.',
          en: 'Usually yes — the Plank-Lifter is designed as an attachment for common column slewing cranes, truss bridges or chain hoists. Before ordering, Asamer checks the load capacity of the existing crane and the electrical interface.',
          cz: 'Většinou ano — Plank-Lifter je koncipován jako nástavba na běžné sloupové otočné jeřáby, příhradové mosty nebo řetězové kladkostroje. Před objednávkou Asamer prověří nosnost stávajícího jeřábu a elektrické rozhraní.',
          sk: 'Väčšinou áno — Plank-Lifter je koncipovaný ako nadstavba na bežné stĺpové otočné žeriavy, priehradové mosty alebo reťazové kladkostroje. Pred objednávkou Asamer preverí nosnosť existujúceho žeriava a elektrické rozhranie.',
          hu: 'Többnyire igen — a Plank-Liftert a szokásos oszlopos forgódarukhoz, rácsos hidakhoz vagy láncos emelőkhöz tartozó felszerelésként tervezték. A rendelés előtt az Asamer ellenőrzi a meglévő daru teherbírását és az elektromos csatlakozási felületet.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  VACUUM-SPECIAL — ngr-needlegripper                                 */
  /* ------------------------------------------------------------------ */
  'ngr-needlegripper': {
    longDescription: {
      de: `Der Barbaric NGR Nadelgreifer ist ein Spezialheber für poröse, weiche oder nicht vakuumfähige Materialien. Statt über Saugkraft arbeitet er mit feinen Nadeln, die sich wenige Millimeter in das Werkstück einfahren und es formschlüssig fixieren. Typische Einsatzmaterialien sind Dämmplatten aus Mineralwolle, Holzfaser oder Polystyrol, MDF-Rohlinge, OSB, offenzellige Schaumstoffe sowie Filz- und Vliesmaterialien. Der Eintauchweg der Nadeln ist so dimensioniert, dass das Werkstück nicht sichtbar beschädigt wird — nach dem Ablegen sind die Einstichstellen praktisch unsichtbar. Der NGR ist eine Nischenlösung, aber für Hersteller von Dämmplatten, Verpackungsmaterial oder Akustikelementen oft die einzig wirtschaftliche Möglichkeit der Automatisierung. Asamer konzipiert Nadelgreifer-Anlagen in Tschechien, Slowakei und Ungarn — inklusive Materialtest, Nadelauslegung und Integration in bestehende Fertigungslinien.`,
      en: `The Barbaric NGR needle gripper is a special lifter for porous, soft or non-vacuum-compatible materials. Instead of suction, it works with fine needles that enter the workpiece a few millimetres deep and secure it in a positive-fit hold. Typical materials are insulation boards made from mineral wool, wood fibre or polystyrene, MDF blanks, OSB, open-cell foams and felt or non-woven materials. The needle penetration depth is dimensioned so that the workpiece is not visibly damaged — after release, the insertion points are practically invisible. The NGR is a niche solution but often the only economical automation option for manufacturers of insulation boards, packaging material or acoustic elements. Asamer engineers needle gripper systems in Czech Republic, Slovakia and Hungary — including material testing, needle design and integration into existing production lines.`,
      cz: `Barbaric NGR jehlový úchop je speciální zvedák pro porézní, měkké nebo vakuově nevhodné materiály. Místo sací síly pracuje s jemnými jehlami, které zajedou několik milimetrů do obrobku a tvarově jej fixují. Typickými použitými materiály jsou izolační desky z minerální vlny, dřevovlákna nebo polystyrenu, MDF polotovary, OSB, otevřenobuněčné pěny a plstěné či netkané materiály. Hloubka zápichu jehel je dimenzována tak, aby obrobek nebyl viditelně poškozen — po odložení jsou vpichy prakticky neviditelné. NGR je nišové řešení, ale pro výrobce izolačních desek, obalových materiálů nebo akustických prvků je často jedinou ekonomickou možností automatizace. Asamer navrhuje systémy jehlových úchopů v České republice, na Slovensku a v Maďarsku — včetně testu materiálu, návrhu jehel a integrace do stávajících výrobních linek.`,
      sk: `Barbaric NGR ihlový úchop je špeciálny zdvíhač pre porézne, mäkké alebo vákuovo nevhodné materiály. Namiesto sacej sily pracuje s jemnými ihlami, ktoré zájdu niekoľko milimetrov do obrobku a tvarovo ho fixujú. Typickými použitými materiálmi sú izolačné dosky z minerálnej vlny, drevovlákna alebo polystyrénu, MDF polotovary, OSB, otvorenobunkové peny a plstené či netkané materiály. Hĺbka vpichu ihiel je dimenzovaná tak, aby obrobok nebol viditeľne poškodený — po odložení sú vpichy prakticky neviditeľné. NGR je nišové riešenie, ale pre výrobcov izolačných dosiek, obalových materiálov alebo akustických prvkov je často jedinou ekonomickou možnosťou automatizácie. Asamer navrhuje systémy ihlových úchopov v Českej republike, na Slovensku a v Maďarsku — vrátane testu materiálu, návrhu ihiel a integrácie do existujúcich výrobných liniek.`,
      hu: `A Barbaric NGR tűs megfogó speciális emelő porózus, puha vagy vákuummal nem kezelhető anyagokhoz. Szívóerő helyett finom tűkkel dolgozik, amelyek néhány milliméternyire a munkadarabba hatolnak, és alakzárással rögzítik. Tipikus anyagok az ásványgyapotból, fafarostból vagy polisztirolból készült hőszigetelő lapok, MDF előgyártmányok, OSB, nyitott cellás habok, valamint nemez- és nemszőtt anyagok. A tűk behatolási mélysége úgy van méretezve, hogy a munkadarab láthatóan ne sérüljön — a letételt követően a szúrási pontok gyakorlatilag nem észlelhetők. Az NGR rétegmegoldás, de hőszigetelő lap-, csomagolóanyag- vagy akusztikai elemgyártók számára gyakran az egyetlen gazdaságos automatizálási lehetőség. Az Asamer tűs megfogó rendszereket tervez Csehországban, Szlovákiában és Magyarországon — anyagvizsgálattal, tűkialakítással és a meglévő gyártósorokba történő integrációval együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Dämmstoffhersteller', en: 'For insulation material manufacturers', cz: 'Pro výrobce izolačních materiálů', sk: 'Pre výrobcov izolačných materiálov', hu: 'Hőszigetelőanyag-gyártóknak' },
        body: {
          de: 'Mineralwolle- und Holzfaserdämmplatten lassen sich nicht über Vakuum greifen — ihre offenzellige Struktur lässt die Luft durch. Der NGR übernimmt die automatisierte Handhabung am Bandende, beim Stapeln oder beim Beladen der Verpackungslinie und ersetzt körperlich schwere manuelle Arbeit.',
          en: 'Mineral wool and wood fibre insulation boards cannot be handled by vacuum — their open-cell structure lets air pass through. The NGR handles automated handling at the line end, during stacking or when loading the packaging line, replacing physically heavy manual work.',
          cz: 'Izolační desky z minerální vlny a dřevovlákna nelze uchopit vakuem — jejich otevřenobuněčná struktura propouští vzduch. NGR přebírá automatizovanou manipulaci na konci linky, při stohování nebo při zakládání balicí linky a nahrazuje fyzicky namáhavou manuální práci.',
          sk: 'Izolačné dosky z minerálnej vlny a drevovlákna nemožno uchopiť vákuom — ich otvorenobunková štruktúra prepúšťa vzduch. NGR preberá automatizovanú manipuláciu na konci linky, pri stohovaní alebo pri zakladaní baliacej linky a nahrádza fyzicky namáhavú manuálnu prácu.',
          hu: 'Az ásványgyapot és fafarost hőszigetelő lapokat vákuummal nem lehet megfogni — nyitott cellás szerkezetük átengedi a levegőt. Az NGR a gyártósor végén, kötegelésnél vagy a csomagolósor betöltésénél végez automatizált anyagmozgatást, és kiváltja a fizikailag megterhelő kézi munkát.',
        },
      },
      {
        heading: { de: 'Für OSB, MDF-Rohlinge und Verpackung', en: 'For OSB, MDF blanks and packaging', cz: 'Pro OSB, MDF polotovary a obaly', sk: 'Pre OSB, MDF polotovary a obaly', hu: 'OSB-hez, MDF előgyártmányokhoz és csomagoláshoz' },
        body: {
          de: 'Rohzustand-Platten (vor Beschichtung oder Schliff) bieten keine glatte Saugfläche. Auch offenporiger Karton oder strukturierte Wellpappe entziehen sich dem klassischen Vakuumgriff. Hier sichert der Nadelgreifer die Handhabung — wichtig etwa beim Beladen eines Kaschierstands oder beim Pressen-Abstapeln.',
          en: 'Raw-state panels (before coating or sanding) offer no smooth suction surface. Open-pore cardboard or textured corrugated board also escape classic vacuum handling. Here the needle gripper secures handling — important for example when loading a laminating station or stacking from a press.',
          cz: 'Desky v surovém stavu (před lakováním nebo broušením) nenabízejí hladkou sací plochu. Také otevřený lepenkový karton nebo strukturovaná vlnitá lepenka se vymykají klasickému vakuovému úchopu. Zde jehlový úchop zajišťuje manipulaci — důležité například při zakládání kašírovacího stanoviště nebo odstohování z lisu.',
          sk: 'Dosky v surovom stave (pred lakovaním alebo brúsením) neponúkajú hladkú saciu plochu. Tiež otvorený lepenkový kartón alebo štruktúrovaná vlnitá lepenka sa vymykajú klasickému vákuovému úchopu. Tu ihlový úchop zaisťuje manipuláciu — dôležité napríklad pri zakladaní kašírovacieho stanovišťa alebo odstohovaní z lisu.',
          hu: 'A nyers állapotú lapok (bevonatolás vagy csiszolás előtt) nem kínálnak sima szívófelületet. A nyitott pórusú karton vagy a strukturált hullámkarton szintén kikerül a klasszikus vákuumos fogásból. Itt a tűs megfogó biztosítja az anyagmozgatást — fontos például kasírozóállomás betöltésekor vagy présről történő kötegelésnél.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Der NGR ist die richtige Wahl, wenn reguläre Vakuumheber an Ihrem Material scheitern. Bevor eine Anschaffung erfolgt, führt Asamer einen Materialtest durch — Probe-Werkstücke werden mit dem Nadelgreifer getestet, um Eintauchtiefe, Haltekraft und Oberflächenbild zu verifizieren. Für übliches Plattenmaterial ist der UWL-3 die wirtschaftlichere Alternative.',
      en: 'The NGR is the right choice when regular vacuum lifters fail on your material. Before purchase, Asamer conducts a material test — sample workpieces are tested with the needle gripper to verify penetration depth, holding force and surface appearance. For standard panel material, the UWL-3 is the more economical alternative.',
      cz: 'NGR je správnou volbou, pokud běžné vakuové zvedáky na vašem materiálu selhávají. Před pořízením Asamer provede test materiálu — zkušební obrobky se testují s jehlovým úchopem, aby se ověřila hloubka vniknutí, přídržná síla a vzhled povrchu. Pro běžný deskový materiál je UWL-3 ekonomičtější alternativou.',
      sk: 'NGR je správnou voľbou, ak bežné vákuové zdvíhače na vašom materiáli zlyhávajú. Pred obstaraním Asamer vykoná test materiálu — skúšobné obrobky sa testujú s ihlovým úchopom, aby sa overila hĺbka vniknutia, prídržná sila a vzhľad povrchu. Pre bežný doskový materiál je UWL-3 ekonomickejšou alternatívou.',
      hu: 'Az NGR akkor a megfelelő választás, ha a szokásos vákuumemelők az Ön anyagán csődöt mondanak. A beszerzés előtt az Asamer anyagvizsgálatot végez — mintadarabokat tesztelnek a tűs megfogóval, hogy ellenőrizzék a behatolási mélységet, a tartóerőt és a felületi megjelenést. Szabványos lapanyagra az UWL-3 a gazdaságosabb alternatíva.',
    },
    faq: [
      {
        question: { de: 'Bleiben sichtbare Spuren am Werkstück?', en: 'Do visible marks remain on the workpiece?', cz: 'Zůstávají na obrobku viditelné stopy?', sk: 'Zostávajú na obrobku viditeľné stopy?', hu: 'Maradnak látható nyomok a munkadarabon?' },
        answer: {
          de: 'Bei den typischen Dämmstoffen sind die Nadeleinstiche nach dem Ablegen praktisch unsichtbar, weil die Fasern zurückfedern. Bei glatteren Materialien wie MDF hinterlassen die Nadeln feine Punkte, die bei späterem Schliff oder bei beschichteter Oberfläche nicht mehr sichtbar sind.',
          en: 'For typical insulation materials, needle marks are practically invisible after release because the fibres spring back. On smoother materials such as MDF, the needles leave fine points that are no longer visible after later sanding or on a coated surface.',
          cz: 'U typických izolačních materiálů jsou vpichy jehel po odložení prakticky neviditelné, protože vlákna pružně vracejí. U hladších materiálů jako MDF zanechávají jehly jemné body, které nejsou po pozdějším broušení nebo u potaženého povrchu již viditelné.',
          sk: 'Pri typických izolačných materiáloch sú vpichy ihiel po odložení prakticky neviditeľné, pretože vlákna pružne vracajú. Pri hladších materiáloch ako MDF zanechávajú ihly jemné body, ktoré nie sú po neskoršom brúsení alebo pri potiahnutom povrchu už viditeľné.',
          hu: 'Tipikus szigetelőanyagoknál a tűszúrások a letétel után gyakorlatilag nem láthatók, mert a szálak visszarugóznak. Simább anyagoknál, mint az MDF, a tűk finom pontokat hagynak, amelyek a későbbi csiszolás után vagy bevont felületen már nem láthatók.',
        },
      },
      {
        question: { de: 'Wie oft müssen die Nadeln gewechselt werden?', en: 'How often do the needles need to be replaced?', cz: 'Jak často je nutné měnit jehly?', sk: 'Ako často je nutné meniť ihly?', hu: 'Milyen gyakran kell cserélni a tűket?' },
        answer: {
          de: 'Die Lebensdauer hängt vom Material ab — bei Mineralwolle sind mehrere hunderttausend Hübe üblich. Asamer bietet Wartungspakete mit regelmäßigem Nadeltausch, Prüfung der Eintauchtiefe und Kontrolle der Rückstellmechanik.',
          en: 'Service life depends on the material — several hundred thousand strokes are common on mineral wool. Asamer offers maintenance packages with regular needle replacement, inspection of penetration depth and control of the retraction mechanism.',
          cz: 'Životnost závisí na materiálu — u minerální vlny je obvyklých několik set tisíc zdvihů. Asamer nabízí servisní balíčky s pravidelnou výměnou jehel, kontrolou hloubky vniknutí a kontrolou vratného mechanizmu.',
          sk: 'Životnosť závisí od materiálu — pri minerálnej vlne je obvyklých niekoľko stotisíc zdvihov. Asamer ponúka servisné balíčky s pravidelnou výmenou ihiel, kontrolou hĺbky vniknutia a kontrolou vratného mechanizmu.',
          hu: 'Az élettartam az anyagtól függ — ásványgyapot esetén több százezer löket a megszokott. Az Asamer karbantartási csomagokat kínál rendszeres tűcserével, a behatolási mélység és a visszahúzó mechanika ellenőrzésével.',
        },
      },
      {
        question: { de: 'Kann der NGR auch zerbrechliches Material heben?', en: 'Can the NGR also lift fragile material?', cz: 'Může NGR zvedat i křehký materiál?', sk: 'Môže NGR zdvíhať aj krehký materiál?', hu: 'Tud-e az NGR törékeny anyagot is emelni?' },
        answer: {
          de: 'Sprödes Material wie Glas oder harte Schaumstoffe sind nicht für Nadelgreifer geeignet — hier droht Rissbildung. Für zerbrechliches Flachmaterial sind spezielle Vakuumlösungen mit feineren Saugern und reduzierter Beschleunigung die bessere Wahl.',
          en: 'Brittle material such as glass or hard foams is not suitable for needle grippers — there is a risk of cracking. For fragile flat material, special vacuum solutions with finer suction cups and reduced acceleration are the better choice.',
          cz: 'Křehký materiál jako sklo nebo tvrdé pěny není vhodný pro jehlové úchopy — hrozí praskání. Pro křehký plochý materiál jsou lepší volbou speciální vakuová řešení s jemnějšími přísavkami a sníženým zrychlením.',
          sk: 'Krehký materiál ako sklo alebo tvrdé peny nie je vhodný pre ihlové úchopy — hrozí praskanie. Pre krehký plochý materiál sú lepšou voľbou špeciálne vákuové riešenia s jemnejšími prísavkami a zníženým zrýchlením.',
          hu: 'A rideg anyagok, mint az üveg vagy a kemény habok, nem alkalmasak tűs megfogóhoz — repedésveszély áll fenn. Törékeny lapos anyagokhoz finomabb szívótárcsákkal és csökkentett gyorsítással rendelkező speciális vákuumos megoldások a jobb választás.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  VACUUM-SPECIAL — rwl-racklifter                                    */
  /* ------------------------------------------------------------------ */
  'rwl-racklifter': {
    longDescription: {
      de: `Der Barbaric RWL Rack-Lifter ist ein Vakuumheber, der gezielt für die Entnahme und Einlagerung von Teilen aus Regalen konzipiert ist. Während klassische Vakuumheber Plattenmaterial aus Stapeln greifen, manövriert der RWL in Regalfächern und entnimmt einzelne Platten oder Kleinteile aus definierten Ebenen. Typisch ist er bei Kantenanleimmaschinen-Zuführung, Kommissionierung im Plattenhandel oder zur Bestückung von Lackieranlagen. Der RWL kombiniert einen tief ausfahrbaren Teleskopgreifer mit präziser Positionsführung — das Regalfach wird millimetergenau angefahren, das Teil aufgenommen und herausgezogen. So entfallen Regalleitern, Suchzeiten und falsch entnommene Platten. Der RWL ist die Lösung für Betriebe, deren Materialfluss regal-basiert organisiert ist. Asamer liefert und integriert Rack-Lifter-Anlagen in Tschechien, Slowakei und Ungarn — inklusive Regallayout-Planung, SPS-Anbindung und Sicherheitsprüfung.`,
      en: `The Barbaric RWL Rack-Lifter is a vacuum lifter designed specifically for removing and placing parts in racks. While classic vacuum lifters grip panel material from stacks, the RWL manoeuvres inside rack compartments and removes individual panels or small parts from defined levels. It is typical in edgebander feeding, commissioning at panel traders or loading coating lines. The RWL combines a deep-reach telescopic gripper with precise position guidance — the rack slot is approached to the millimetre, the part is picked up and pulled out. This eliminates rack ladders, search times and wrongly removed panels. The RWL is the solution for operations whose material flow is organised rack-based. Asamer supplies and integrates Rack-Lifter systems in Czech Republic, Slovakia and Hungary — including rack layout planning, PLC integration and safety inspection.`,
      cz: `Barbaric RWL Rack-Lifter je vakuový zvedák cíleně navržený pro odběr a zakládání dílů z regálů. Zatímco klasické vakuové zvedáky uchopují deskový materiál ze stohů, RWL manévruje v regálových přihrádkách a odebírá jednotlivé desky nebo malé díly z definovaných úrovní. Typický je při zásobování olepovačky hran, komisionování v obchodu s deskami nebo při zakládání lakovacích linek. RWL kombinuje hluboko vysunovatelný teleskopický úchop s přesným vedením polohy — regálová přihrádka se najíždí s milimetrovou přesností, díl se zvedne a vytáhne. Tím odpadají regálové žebříky, doby hledání a špatně vybrané desky. RWL je řešením pro provozy, jejichž tok materiálu je organizován na bázi regálů. Asamer dodává a integruje systémy Rack-Lifter v České republice, na Slovensku a v Maďarsku — včetně plánování rozvržení regálů, napojení na PLC a bezpečnostní kontroly.`,
      sk: `Barbaric RWL Rack-Lifter je vákuový zdvíhač cielene navrhnutý pre odber a zakladanie dielov z regálov. Zatiaľ čo klasické vákuové zdvíhače uchopujú doskový materiál zo stohov, RWL manévruje v regálových priehradkách a odoberá jednotlivé dosky alebo malé diely z definovaných úrovní. Typický je pri zásobovaní olepovačky hrán, komisionovaní v obchode s doskami alebo pri zakladaní lakovacích liniek. RWL kombinuje hlboko vysúvateľný teleskopický úchop s presným vedením polohy — regálová priehradka sa najíža s milimetrovou presnosťou, diel sa zdvihne a vytiahne. Tým odpadajú regálové rebríky, časy hľadania a zle vybrané dosky. RWL je riešením pre prevádzky, ktorých tok materiálu je organizovaný na báze regálov. Asamer dodáva a integruje systémy Rack-Lifter v Českej republike, na Slovensku a v Maďarsku — vrátane plánovania rozloženia regálov, napojenia na PLC a bezpečnostnej kontroly.`,
      hu: `A Barbaric RWL Rack-Lifter olyan vákuumemelő, amelyet célzottan polcokból történő alkatrészek kivételére és behelyezésére terveztek. Míg a klasszikus vákuumemelők lapanyagot emelnek ki kötegekből, az RWL a polcrekeszekben manőverezik, és meghatározott szintekről emel ki egyedi lapokat vagy kisalkatrészeket. Tipikusan élzárógép-adagolásnál, lapkereskedői komissiózásnál vagy lakkozósorok betöltésénél használják. Az RWL mélyen kitolható teleszkópos megfogót ötvöz pontos pozícióvezetéssel — a polcrekeszt milliméter pontosan közelíti meg, az alkatrészt felveszi és kihúzza. Ez kiküszöböli a polclétrákat, a keresési időket és a tévesen kivett lapokat. Az RWL olyan üzemek számára készült megoldás, amelyek anyagáramlása polc-alapú. Az Asamer Rack-Lifter rendszereket szállít és integrál Csehországban, Szlovákiában és Magyarországon — a polcelrendezés tervezésével, PLC csatlakoztatással és biztonsági felülvizsgálattal együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Kommissionierung im Plattenhandel', en: 'For commissioning at panel traders', cz: 'Pro komisionování v obchodu s deskami', sk: 'Pre komisionovanie v obchode s doskami', hu: 'Lapkereskedői komissiózáshoz' },
        body: {
          de: 'Plattenhändler mit breitem Dekorsortiment lagern einzelne Platten typischerweise in Senkrecht- oder Schrägregalen. Der RWL entnimmt beauftragte Platten vollautomatisch und legt sie auf Kommissionierwagen oder Verladefläche — ohne Gabelstapler und ohne Suchaufwand.',
          en: 'Panel traders with a broad décor range typically store individual panels in vertical or slanted racks. The RWL removes ordered panels fully automatically and places them on picking carts or loading areas — without forklifts and without search effort.',
          cz: 'Obchodníci s deskami se širokým sortimentem dekorů skladují jednotlivé desky typicky ve svislých nebo šikmých regálech. RWL odebírá objednané desky plně automaticky a ukládá je na komisionovací vozíky nebo nakládací plochu — bez vysokozdvižných vozíků a bez hledání.',
          sk: 'Obchodníci s doskami so širokým sortimentom dekorov skladujú jednotlivé dosky typicky vo zvislých alebo šikmých regáloch. RWL odoberá objednané dosky plne automaticky a ukladá ich na komisionovacie vozíky alebo nakladaciu plochu — bez vysokozdvižných vozíkov a bez hľadania.',
          hu: 'A széles dekorválasztékú lapkereskedők jellemzően függőleges vagy ferde polcokon tárolják az egyedi lapokat. Az RWL teljesen automatikusan emeli ki a megrendelt lapokat, és komissiózó kocsikra vagy rakodóterületre helyezi őket — targonca és keresés nélkül.',
        },
      },
      {
        heading: { de: 'Für Kantenanleimer- und Lackieranlagen-Zuführung', en: 'For edgebander and coating line feeding', cz: 'Pro zásobování olepovačky hran a lakovacích linek', sk: 'Pre zásobovanie olepovačky hrán a lakovacích liniek', hu: 'Élzárógép és lakkozósor adagoláshoz' },
        body: {
          de: 'An der Kantenanleimmaschine oder der Lackierstraße werden Werkstücke häufig aus Zwischenlagern im Regal nachgeliefert. Der RWL automatisiert diese Zuführung, hält den Takt konstant und entlastet den Maschinenbediener — besonders wertvoll bei Mehrschichtbetrieb.',
          en: 'At the edgebander or coating line, workpieces are often supplied from intermediate rack storage. The RWL automates this feed, keeps the cycle constant and relieves the machine operator — particularly valuable in multi-shift operation.',
          cz: 'U olepovačky hran nebo lakovací linky se obrobky často doplňují z meziskladů v regálu. RWL tuto dopravu automatizuje, udržuje takt konstantní a odlehčuje obsluze stroje — obzvlášť cenné při vícesměnném provozu.',
          sk: 'Pri olepovačke hrán alebo lakovacej linke sa obrobky často dopĺňajú z medziskladov v regáli. RWL túto dopravu automatizuje, udržiava takt konštantný a odľahčuje obsluhe stroja — obzvlášť cenné pri viaczmennom prevádzke.',
          hu: 'Az élzárógépnél vagy a lakkozósornál a munkadarabokat gyakran polcos közbülső raktárakból pótolják. Az RWL ezt az adagolást automatizálja, a ciklust állandó szinten tartja, és tehermentesíti a gépkezelőt — különösen értékes többműszakos üzemben.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Der RWL ist die richtige Wahl, wenn Ihr Material regalbasiert organisiert ist und Sie die Entnahme automatisieren wollen. Für Stapel-basierte Lagerung ist der UWL-3 oder ein Flächenlager (CSF) besser geeignet. Asamer prüft Ihr Regalkonzept vor dem Angebot und kalkuliert mögliche Taktzeiten.',
      en: 'The RWL is the right choice when your material is organised rack-based and you want to automate retrieval. For stack-based storage, the UWL-3 or a flat-layout storage (CSF) is more suitable. Before quoting, Asamer reviews your rack concept and calculates achievable cycle times.',
      cz: 'RWL je správnou volbou, pokud je váš materiál organizován na bázi regálů a chcete automatizovat odběr. Pro skladování na bázi stohů je vhodnější UWL-3 nebo plošný sklad (CSF). Asamer před nabídkou prověří váš koncept regálů a vypočítá dosažitelné doby cyklu.',
      sk: 'RWL je správnou voľbou, ak je váš materiál organizovaný na báze regálov a chcete automatizovať odber. Pre skladovanie na báze stohov je vhodnejší UWL-3 alebo plošný sklad (CSF). Asamer pred ponukou preverí váš koncept regálov a vypočíta dosiahnuteľné časy cyklu.',
      hu: 'Az RWL akkor a megfelelő választás, ha anyaga polcalapúan szervezett, és automatizálni szeretné a kivételt. Köteg-alapú tárolásra az UWL-3 vagy egy lapraktár (CSF) alkalmasabb. Az ajánlat előtt az Asamer áttekinti a polckoncepciót, és kiszámítja az elérhető ciklusidőket.',
    },
    faq: [
      {
        question: { de: 'Wie tief kann der RWL in ein Regal hineingreifen?', en: 'How deep can the RWL reach into a rack?', cz: 'Jak hluboko může RWL zasáhnout do regálu?', sk: 'Ako hlboko môže RWL zasiahnuť do regála?', hu: 'Milyen mélyen képes az RWL a polcba benyúlni?' },
        answer: {
          de: 'Standard-Teleskopgreifer decken Regalfachtiefen bis etwa 1,2 Meter ab, Sonderausführungen auch mehr. Die Auslegung erfolgt nach Ihrem konkreten Regalsystem und den gelagerten Formaten.',
          en: 'Standard telescopic grippers cover rack depths up to about 1.2 metres; special designs go further. Dimensioning is based on your specific rack system and stored formats.',
          cz: 'Standardní teleskopické úchopy pokrývají hloubky regálových přihrádek do zhruba 1,2 metru, speciální provedení i více. Dimenzování se provádí podle vašeho konkrétního regálového systému a skladovaných formátů.',
          sk: 'Štandardné teleskopické úchopy pokrývajú hĺbky regálových priehradiek do zhruba 1,2 metra, špeciálne prevedenia aj viac. Dimenzovanie sa vykonáva podľa vášho konkrétneho regálového systému a skladovaných formátov.',
          hu: 'A szabványos teleszkópos megfogók körülbelül 1,2 méter mélységű polcrekeszeket fednek le, speciális kivitelek többet is. A méretezés az Ön konkrét polcrendszere és tárolt formátumai alapján történik.',
        },
      },
      {
        question: { de: 'Muss ich das Regal umbauen?', en: 'Do I need to rebuild the rack?', cz: 'Musím regál přestavět?', sk: 'Musím regál prestavať?', hu: 'Át kell építenem a polcot?' },
        answer: {
          de: 'Meist genügen Anpassungen — etwa definierte Auflagepunkte, klare Fachtrennungen und Referenzmarken. Bestehende Regale lassen sich in 70 – 80 % der Fälle weiterverwenden. Asamer dokumentiert die notwendigen Anpassungen im Projektkonzept.',
          en: 'In most cases, adaptations suffice — defined support points, clear slot separation and reference marks. Existing racks can be reused in 70 – 80 % of cases. Asamer documents the necessary adaptations in the project concept.',
          cz: 'Ve většině případů stačí úpravy — například definované opěrné body, jasné oddělení přihrádek a referenční značky. Stávající regály lze v 70 – 80 % případů použít dál. Asamer dokumentuje potřebné úpravy v projektovém konceptu.',
          sk: 'Vo väčšine prípadov stačia úpravy — napríklad definované oporné body, jasné oddelenie priehradiek a referenčné značky. Existujúce regály možno v 70 – 80 % prípadov použiť ďalej. Asamer dokumentuje potrebné úpravy v projektovom koncepte.',
          hu: 'A legtöbb esetben módosítások elegendők — például meghatározott támaszpontok, egyértelmű rekeszelválasztások és referenciajelek. A meglévő polcok 70 – 80 % esetben tovább használhatók. Az Asamer a projektkoncepcióban dokumentálja a szükséges módosításokat.',
        },
      },
      {
        question: { de: 'Kann der RWL mit meinem ERP/WMS kommunizieren?', en: 'Can the RWL communicate with my ERP/WMS?', cz: 'Může RWL komunikovat s mým ERP/WMS?', sk: 'Môže RWL komunikovať s mojím ERP/WMS?', hu: 'Tud kommunikálni az RWL az ERP/WMS rendszeremmel?' },
        answer: {
          de: 'Ja — die SPS-Steuerung bietet Standard-Schnittstellen für gängige ERP- und Lagerverwaltungssysteme. Die Aufträge werden digital übergeben, Rückmeldungen fließen automatisch ins ERP zurück. Asamer koordiniert die Integration mit Ihrem IT-Team.',
          en: 'Yes — the PLC controller offers standard interfaces for common ERP and warehouse management systems. Orders are handed over digitally, confirmations flow back automatically into the ERP. Asamer coordinates integration with your IT team.',
          cz: 'Ano — PLC řízení nabízí standardní rozhraní pro běžné ERP a systémy správy skladu. Zakázky se předávají digitálně, potvrzení se automaticky vrací do ERP. Asamer koordinuje integraci s vaším IT týmem.',
          sk: 'Áno — PLC riadenie ponúka štandardné rozhrania pre bežné ERP a systémy správy skladu. Zákazky sa odovzdávajú digitálne, potvrdenia sa automaticky vracajú do ERP. Asamer koordinuje integráciu s vaším IT tímom.',
          hu: 'Igen — a PLC vezérlés szabványos interfészeket kínál a bevett ERP és raktárkezelő rendszerekhez. A megbízások digitálisan kerülnek átadásra, a visszaigazolások automatikusan visszakerülnek az ERP-be. Az Asamer az IT csapatával egyeztetve koordinálja az integrációt.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  VACUUM-TRAVERSES — duennplattentraverse                            */
  /* ------------------------------------------------------------------ */
  'duennplattentraverse': {
    longDescription: {
      de: `Die Barbaric Dünnplattentraverse ist eine Vakuumtraverse speziell für dünne Platten zwischen zwei und fünfzehn Millimetern Stärke — etwa dünne Spanplatten, MDF-Rückwände, HPL-Schichtstoffe oder Rigipsplatten. Dünne Platten neigen bei zentralem Vakuumgriff zum Durchbiegen; im Extremfall bricht das Material unter Eigengewicht. Die Dünnplattentraverse verteilt die Sauger über eine längere Auflagebasis und stützt die Platte zusätzlich mechanisch ab. Damit lassen sich auch 2–3 mm dünne Materialien prozesssicher heben — ein Szenario, in dem Standard-Vakuumheber regelmäßig scheitern. Typische Einsatzbereiche sind die Rückwandmontage im Möbelbau, die Beschichtungsindustrie und der Trockenbau. Asamer konfiguriert die Dünnplattentraverse passend zu Ihren typischen Formaten und Stärken — für Tischlereien und Möbelwerke in Tschechien, Slowakei und Ungarn inklusive Integration an bestehenden Krananlagen und Sicherheitsabnahme.`,
      en: `The Barbaric thin panel traverse is a vacuum traverse specifically for thin panels between two and fifteen millimetres — such as thin chipboard, MDF backs, HPL laminates or gypsum boards. Thin panels tend to sag under central vacuum grip; in extreme cases, the material breaks under its own weight. The thin panel traverse distributes suction cups across a longer support base and additionally supports the panel mechanically. This enables reliable lifting of even 2–3 mm thin material — a scenario in which standard vacuum lifters regularly fail. Typical applications are back panel assembly in furniture making, the coating industry and drywall construction. Asamer configures the thin panel traverse to suit your typical formats and thicknesses — for joinery and furniture plants in Czech Republic, Slovakia and Hungary including integration with existing crane systems and safety acceptance.`,
      cz: `Barbaric traverza na tenké desky je vakuová traverza speciálně pro tenké desky mezi dvěma a patnácti milimetry — jako tenké dřevotřískové desky, MDF zadní stěny, HPL lamináty nebo sádrokartonové desky. Tenké desky mají tendenci se při centrálním vakuovém úchopu prohýbat; v extrémních případech se materiál láme pod vlastní vahou. Traverza na tenké desky rozděluje přísavky po delší opěrné základně a desku navíc mechanicky podpírá. Tím lze bezpečně zvedat i materiály o tloušťce 2–3 mm — scénář, ve kterém standardní vakuové zvedáky pravidelně selhávají. Typickými oblastmi použití jsou montáž zadních stěn ve výrobě nábytku, potahovací průmysl a suchá výstavba. Asamer konfiguruje traverzu na tenké desky podle vašich typických formátů a tlouštěk — pro truhlářství a nábytkářské závody v České republice, na Slovensku a v Maďarsku včetně integrace do stávajících jeřábových zařízení a bezpečnostního schválení.`,
      sk: `Barbaric traverza na tenké dosky je vákuová traverza špeciálne pre tenké dosky medzi dvomi a pätnástimi milimetrami — ako tenké drevotrieskové dosky, MDF zadné steny, HPL lamináty alebo sadrokartónové dosky. Tenké dosky majú tendenciu sa pri centrálnom vákuovom úchope prehýbať; v extrémnych prípadoch sa materiál láme pod vlastnou váhou. Traverza na tenké dosky rozdeľuje prísavky po dlhšej opornej základni a dosku navyše mechanicky podopiera. Tým možno bezpečne zdvíhať aj materiály s hrúbkou 2–3 mm — scenár, v ktorom štandardné vákuové zdvíhače pravidelne zlyhávajú. Typickými oblasťami použitia sú montáž zadných stien vo výrobe nábytku, potiahovací priemysel a suchá výstavba. Asamer konfiguruje traverzu na tenké dosky podľa vašich typických formátov a hrúbok — pre stolárstva a nábytkárske závody v Českej republike, na Slovensku a v Maďarsku vrátane integrácie do existujúcich žeriavových zariadení a bezpečnostného schválenia.`,
      hu: `A Barbaric vékonylap-traverz vákuumtraverz kifejezetten két és tizenöt milliméter közötti vastagságú vékony lapokhoz — például vékony forgácslapokhoz, MDF hátlapokhoz, HPL laminátumokhoz vagy gipszkarton lapokhoz. A vékony lapok központi vákuumos fogásnál hajlamosak meghajlani; szélsőséges esetben a saját súlyuk alatt megtörnek. A vékonylap-traverz a szívótárcsákat hosszabb támasztóbázison osztja el, és a lapot további mechanikus alátámasztással rögzíti. Ezzel 2–3 mm vastag anyagok is megbízhatóan emelhetők — olyan helyzet, amelyben a szabványos vákuumemelők rendszeresen csődöt mondanak. Tipikus alkalmazási területek a bútorgyártásban a hátlapszerelés, a bevonatipar és a szárazépítészet. Az Asamer az Ön tipikus formátumaihoz és vastagságaihoz illeszti a vékonylap-traverzt — asztalosműhelyek és bútorgyárak számára Csehországban, Szlovákiában és Magyarországon, a meglévő daruberendezésekbe történő integrációval és biztonsági átvétellel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Rückwand- und Einlegeboden-Handhabung', en: 'For back panel and shelf handling', cz: 'Pro manipulaci se zadními stěnami a policemi', sk: 'Pre manipuláciu so zadnými stenami a policami', hu: 'Hátlap- és polckezeléshez' },
        body: {
          de: 'Möbelhersteller verarbeiten tausende dünner Rückwände oder Einlegeböden pro Woche. Ohne Traverse sind diese Teile nur manuell sinnvoll zu handeln — mit dem Risiko, dass Platten durchbiegen oder reißen. Die Dünnplattentraverse automatisiert den Transport und reduziert Ausschuss.',
          en: 'Furniture manufacturers process thousands of thin back panels or shelves per week. Without a traverse, these parts can only sensibly be handled manually — with the risk of panels bending or tearing. The thin panel traverse automates transport and reduces waste.',
          cz: 'Výrobci nábytku zpracovávají tisíce tenkých zadních stěn nebo polic týdně. Bez traverzy lze tyto díly rozumně manipulovat jen ručně — s rizikem, že se desky prohnou nebo prasknou. Traverza na tenké desky automatizuje přepravu a snižuje zmetkovitost.',
          sk: 'Výrobcovia nábytku spracovávajú tisíce tenkých zadných stien alebo políc týždenne. Bez traverzy možno tieto diely rozumne manipulovať iba ručne — s rizikom, že sa dosky prehnú alebo prasknú. Traverza na tenké dosky automatizuje prepravu a znižuje zmetkovitosť.',
          hu: 'A bútorgyártók hetente több ezer vékony hátlapot vagy polcot dolgoznak fel. Traverz nélkül ezek a darabok csak manuálisan kezelhetők észszerűen — azzal a kockázattal, hogy a lapok meghajlanak vagy megrepednek. A vékonylap-traverz automatizálja a szállítást és csökkenti a selejtet.',
        },
      },
      {
        heading: { de: 'Für Beschichter und Trockenbau', en: 'For coaters and drywall construction', cz: 'Pro potahovače a suchou výstavbu', sk: 'Pre potiahovateľov a suchú výstavbu', hu: 'Bevonatolóknak és szárazépítésnek' },
        body: {
          de: 'An der Kaschieranlage oder beim Zuschnitt von Rigipsplatten sind große, flexible Formate typisch. Die Dünnplattentraverse sichert hier die flächige Haltung, ohne dass lokale Saugerkräfte Druckstellen erzeugen — entscheidend bei empfindlichen Deckschichten.',
          en: 'At laminating lines or when cutting drywall boards, large, flexible formats are typical. The thin panel traverse secures even area support without local suction forces creating pressure marks — crucial on sensitive top layers.',
          cz: 'U kašírovací linky nebo při řezání sádrokartonových desek jsou typické velké, pružné formáty. Traverza na tenké desky zde zajišťuje plošné uložení, aniž by místní síly přísavek vytvářely tlakové stopy — rozhodující u citlivých povrchových vrstev.',
          sk: 'Pri kašírovacej linke alebo pri rezaní sadrokartónových dosiek sú typické veľké, pružné formáty. Traverza na tenké dosky tu zaisťuje plošné uloženie, bez toho, aby miestne sily prísaviek vytvárali tlakové stopy — rozhodujúce pri citlivých povrchových vrstvách.',
          hu: 'Kasírozósoroknál vagy gipszkarton lapok szabásánál a nagy, hajlékony formátumok jellemzők. A vékonylap-traverz itt a felületi támasztást biztosítja anélkül, hogy a helyi szívóerők nyomódásokat okoznának — döntő az érzékeny fedőrétegeknél.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Wählen Sie die Dünnplattentraverse, wenn Sie regelmäßig Platten unter 15 mm Stärke handhaben und dabei Durchbiegung oder Bruchverlust vermeiden wollen. Für Standard-Plattenstärken ab 16 mm genügt der UWL-3. Die Länge der Traverse wird nach Ihren Maximalformaten ausgelegt — eine zu kurze Traverse bringt keinen Nutzen, eine unnötig große kostet Investition.',
      en: 'Choose the thin panel traverse if you regularly handle panels below 15 mm and want to avoid sagging or breakage. For standard panel thicknesses from 16 mm upwards, the UWL-3 is sufficient. Traverse length is dimensioned to your maximum formats — a too-short traverse provides no benefit, an unnecessarily long one wastes investment.',
      cz: 'Zvolte traverzu na tenké desky, pokud pravidelně manipulujete s deskami pod 15 mm tloušťky a chcete zabránit prohnutí nebo ztrátě lomu. Pro standardní tloušťky desek od 16 mm nahoru stačí UWL-3. Délka traverzy se dimenzuje podle vašich maximálních formátů — příliš krátká traverza nepřináší užitek, zbytečně dlouhá stojí investici.',
      sk: 'Zvoľte traverzu na tenké dosky, ak pravidelne manipulujete s doskami pod 15 mm hrúbky a chcete zabrániť prehnutiu alebo strate lomu. Pre štandardné hrúbky dosiek od 16 mm nahor stačí UWL-3. Dĺžka traverzy sa dimenzuje podľa vašich maximálnych formátov — príliš krátka traverza neprináša úžitok, zbytočne dlhá stojí investíciu.',
      hu: 'Válassza a vékonylap-traverzt, ha rendszeresen 15 mm alatti lapokat kezel, és el szeretné kerülni a megereszkedést vagy a törést. 16 mm-től felfelé haladó szabványos vastagságokhoz elegendő az UWL-3. A traverz hosszát a maximális formátumokhoz méretezik — a túl rövid traverz nem hoz hasznot, a szükségtelenül hosszú beruházásba kerül.',
    },
    faq: [
      {
        question: { de: 'Wie dünn kann ich die Platten wählen?', en: 'How thin can I choose the panels?', cz: 'Jak tenké desky mohu zvolit?', sk: 'Aké tenké dosky môžem zvoliť?', hu: 'Milyen vékony lapot választhatok?' },
        answer: {
          de: 'Mit der richtigen Konfiguration sind Stärken ab etwa 2 mm bei kleineren Formaten möglich. Je dünner das Material, desto mehr Auflagepunkte braucht die Traverse. Asamer berechnet die optimale Saugerverteilung für Ihre Materialmischung.',
          en: 'With the right configuration, thicknesses from about 2 mm are possible on smaller formats. The thinner the material, the more support points the traverse requires. Asamer calculates the optimal suction cup distribution for your material mix.',
          cz: 'Se správnou konfigurací jsou tloušťky zhruba od 2 mm u menších formátů možné. Čím tenčí je materiál, tím více opěrných bodů traverza potřebuje. Asamer vypočítá optimální rozmístění přísavek pro vaši směs materiálů.',
          sk: 'So správnou konfiguráciou sú hrúbky zhruba od 2 mm pri menších formátoch možné. Čím tenší je materiál, tým viac oporných bodov traverza potrebuje. Asamer vypočíta optimálne rozloženie prísaviek pre vašu zmes materiálov.',
          hu: 'A megfelelő konfigurációval kisebb formátumokon körülbelül 2 mm-től kezdődő vastagságok lehetségesek. Minél vékonyabb az anyag, annál több támaszpontra van szüksége a traverznek. Az Asamer az Ön anyagösszetételéhez számítja ki az optimális szívótárcsa-elrendezést.',
        },
      },
      {
        question: { de: 'Hinterlassen die Sauger Abdrücke?', en: 'Do the suction cups leave marks?', cz: 'Zanechávají přísavky stopy?', sk: 'Zanechávajú prísavky stopy?', hu: 'Hagynak nyomot a szívótárcsák?' },
        answer: {
          de: 'Bei beschichteten Oberflächen und kurzen Haltezeiten nicht — die Sauger sind auf niedrige Kontaktdrücke ausgelegt. Bei sehr weichen Deckschichten oder längerem Vakuum empfiehlt Asamer einen Test mit Ihrer Materialcharge.',
          en: 'On coated surfaces and short hold times, no — the suction cups are designed for low contact pressure. On very soft top layers or with longer vacuum dwell, Asamer recommends a test with your material batch.',
          cz: 'U potažených povrchů a krátkých dob držení ne — přísavky jsou dimenzovány na nízké kontaktní tlaky. U velmi měkkých povrchových vrstev nebo při delším vakuu Asamer doporučuje test s vaší várkou materiálu.',
          sk: 'Pri potiahnutých povrchoch a krátkych časoch držania nie — prísavky sú dimenzované na nízke kontaktné tlaky. Pri veľmi mäkkých povrchových vrstvách alebo pri dlhšom vákuu Asamer odporúča test s vašou várkou materiálu.',
          hu: 'Bevont felületeken és rövid tartási időknél nem — a szívótárcsák alacsony érintkezési nyomásra vannak méretezve. Nagyon puha fedőrétegeknél vagy hosszabb vákuumtartásnál az Asamer az Ön anyagtételével végzett tesztet javasol.',
        },
      },
      {
        question: { de: 'Braucht die Traverse eine eigene Vakuumpumpe?', en: 'Does the traverse need its own vacuum pump?', cz: 'Potřebuje traverza vlastní vakuovou pumpu?', sk: 'Potrebuje traverza vlastnú vákuovú pumpu?', hu: 'Szükséges-e saját vákuumszivattyú a traverzhez?' },
        answer: {
          de: 'Typischerweise ja — die Traverse ist für eigene Pumpenleistung ausgelegt, um ausreichendes Vakuum über die gesamte Saugerfläche sicherzustellen. Bei Anbindung an bestehende Zentralvakuum prüft Asamer die Anschlussparameter.',
          en: 'Typically yes — the traverse is designed for its own pump capacity to ensure sufficient vacuum across the entire suction area. When connecting to existing central vacuum, Asamer checks the connection parameters.',
          cz: 'Typicky ano — traverza je dimenzována na vlastní výkon pumpy, aby zajistila dostatečné vakuum na celé sací ploše. Při napojení na stávající centrální vakuum Asamer prověří připojovací parametry.',
          sk: 'Typicky áno — traverza je dimenzovaná na vlastný výkon pumpy, aby zaistila dostatočné vákuum na celej sacej ploche. Pri napojení na existujúce centrálne vákuum Asamer preverí pripájacie parametre.',
          hu: 'Jellemzően igen — a traverz saját szivattyúteljesítményre méretezett, hogy elegendő vákuumot biztosítson a teljes szívófelületen. Meglévő központi vákuumra történő csatlakoztatásnál az Asamer ellenőrzi a csatlakozási paramétereket.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  VACUUM-TRAVERSES — tuerentraverse                                  */
  /* ------------------------------------------------------------------ */
  'tuerentraverse': {
    longDescription: {
      de: `Die Barbaric Türentraverse ist eine Vakuumtraverse speziell für Türelemente — Innentüren, Zimmertüren, Schiebetürblätter oder beschichtete Türrohlinge. Türen haben gegenüber klassischer Plattenware besondere Anforderungen: Sie sind länglich, oft mit Beschlägen, Falzen oder Ausfräsungen versehen, und ihre Oberflächen sind meist hochwertig beschichtet. Die Türentraverse ist auf typische Türformate bis 2,2 × 1,2 Meter ausgelegt und verteilt die Sauger so, dass weder Beschläge noch Schlossausfräsungen berührt werden. Sonderweiche Saugerauflagen verhindern Druckstellen auf der Dekoroberfläche. Typische Einsatzbereiche sind Türenhersteller, Schreinereien mit Türenfertigung, Tür-Beschichtungsanlagen und Lagerlogistik für Türenhändler. Asamer plant Türentraversen für Türenhersteller in Tschechien, Slowakei und Ungarn — inklusive Auslegung zu Ihren Türformaten, Anbindung an Säulenschwenkkran oder Fachwerkbrücke sowie Sicherheitsabnahme.`,
      en: `The Barbaric door traverse is a vacuum traverse specifically for door elements — interior doors, room doors, sliding door leaves or coated door blanks. Doors have special requirements compared to classic panel goods: they are elongated, often fitted with hardware, rebates or cutouts, and their surfaces are usually high-quality coated. The door traverse is designed for typical door formats up to 2.2 × 1.2 metres and distributes suction cups so that neither hardware nor lock cutouts are touched. Extra-soft suction cup pads prevent pressure marks on the decor surface. Typical applications are door manufacturers, joinery shops with door production, door coating lines and warehouse logistics for door traders. Asamer plans door traverses for door manufacturers in Czech Republic, Slovakia and Hungary — including dimensioning to your door formats, integration with column slewing crane or truss bridge, as well as safety acceptance.`,
      cz: `Barbaric traverza na dveře je vakuová traverza specificky pro dveřní prvky — vnitřní dveře, pokojové dveře, posuvné dveřní křídla nebo potažené dveřní polotovary. Dveře mají oproti klasickým deskovým produktům zvláštní požadavky: jsou podlouhlé, často opatřené kováním, polodrážkami nebo výřezy, a jejich povrchy jsou většinou vysoce kvalitně potahované. Traverza na dveře je dimenzována na typické formáty dveří do 2,2 × 1,2 metru a rozděluje přísavky tak, aby se nedotýkaly ani kování, ani výřezů pro zámek. Extra měkké podložky přísavek zabraňují tlakovým stopám na dekorativním povrchu. Typickými oblastmi použití jsou výrobci dveří, truhlářství s výrobou dveří, potahovací linky dveří a skladová logistika pro obchodníky s dveřmi. Asamer projektuje traverzy na dveře pro výrobce dveří v České republice, na Slovensku a v Maďarsku — včetně dimenzování podle vašich formátů dveří, napojení na sloupový otočný jeřáb nebo příhradový most a bezpečnostního schválení.`,
      sk: `Barbaric traverza na dvere je vákuová traverza špecificky pre dverné prvky — vnútorné dvere, izbové dvere, posuvné dverné krídla alebo potiahnuté dverné polotovary. Dvere majú oproti klasickým doskovým produktom zvláštne požiadavky: sú podlhovasté, často opatrené kovaním, poldrážkami alebo výrezmi, a ich povrchy sú väčšinou vysoko kvalitne potiahnuté. Traverza na dvere je dimenzovaná na typické formáty dverí do 2,2 × 1,2 metra a rozdeľuje prísavky tak, aby sa nedotýkali ani kovania, ani výrezov pre zámok. Extra mäkké podložky prísaviek zabraňujú tlakovým stopám na dekoratívnom povrchu. Typickými oblasťami použitia sú výrobcovia dverí, stolárstva s výrobou dverí, potiahovacie linky dverí a skladová logistika pre obchodníkov s dverami. Asamer projektuje traverzy na dvere pre výrobcov dverí v Českej republike, na Slovensku a v Maďarsku — vrátane dimenzovania podľa vašich formátov dverí, napojenia na stĺpový otočný žeriav alebo priehradový most a bezpečnostného schválenia.`,
      hu: `A Barbaric ajtótraverz vákuumtraverz kifejezetten ajtóelemekhez — beltéri ajtókhoz, szobaajtókhoz, tolóajtó-lapokhoz vagy bevont ajtó-előgyártmányokhoz. Az ajtók sajátos követelményeket támasztanak a klasszikus lapárukhoz képest: hosszúkásak, gyakran vasalattal, falcolással vagy kimarásokkal ellátottak, és felületük rendszerint kiváló minőségben bevont. Az ajtótraverz tipikus, 2,2 × 1,2 méterig terjedő ajtóformátumokhoz méretezett, és úgy osztja el a szívótárcsákat, hogy sem a vasalatokat, sem a zárkimarásokat ne érintsék. Extra puha szívótárcsa-betétek megakadályozzák a nyomódást a dekoratív felületen. Tipikus alkalmazási területek az ajtógyártók, ajtókészítéssel foglalkozó asztalosműhelyek, ajtó-bevonatoló sorok és az ajtókereskedők raktárlogisztikája. Az Asamer az Ön ajtóformátumaihoz igazítva tervezi az ajtótraverzeket ajtógyártók számára Csehországban, Szlovákiában és Magyarországon — oszlopos forgódaruhoz vagy rácsos hídhoz való csatlakoztatással és biztonsági átvétellel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Türenhersteller und Türenmontage', en: 'For door manufacturers and door assembly', cz: 'Pro výrobce dveří a montáž dveří', sk: 'Pre výrobcov dverí a montáž dverí', hu: 'Ajtógyártóknak és ajtószereléshez' },
        body: {
          de: 'In Türenwerken fallen auf jeder Fertigungsstufe Handlingaufgaben an — vom Zuschnitt über die Beschichtung bis zur Endmontage. Die Türentraverse übernimmt alle Transporte, ohne dass Beschlagsöffnungen oder Kantenprofile beschädigt werden. Das reduziert Ausschussquoten bei Dekor-Hochglanz-Türen spürbar.',
          en: 'In door plants, handling tasks arise at every production stage — from cutting through coating to final assembly. The door traverse handles all transports without damaging hardware openings or edge profiles. This noticeably reduces scrap rates on high-gloss decor doors.',
          cz: 'V dveřních závodech vznikají manipulační úkoly na každém stupni výroby — od řezání přes potahování až po konečnou montáž. Traverza na dveře přebírá veškeré přepravy, aniž by došlo k poškození otvorů kování nebo hranových profilů. To znatelně snižuje podíl zmetků u dekorativních vysoko lesklých dveří.',
          sk: 'V dverných závodoch vznikajú manipulačné úlohy na každom stupni výroby — od rezania cez potiahovanie až po konečnú montáž. Traverza na dvere preberá všetky prepravy, bez toho, aby došlo k poškodeniu otvorov kovania alebo hranových profilov. To znateľne znižuje podiel zmetkov pri dekoratívnych vysoko lesklých dverách.',
          hu: 'Az ajtógyárakban minden gyártási fokozaton keletkeznek anyagmozgatási feladatok — a szabásnál, a bevonatolásnál és a végszerelésnél. Az ajtótraverz minden szállítást elvégez anélkül, hogy a vasalatfészkek vagy élprofilok sérülnének. Ez érezhetően csökkenti a magas fényű dekoratív ajtóknál jelentkező selejtarányt.',
        },
      },
      {
        heading: { de: 'Für Lagerlogistik und Verladung', en: 'For warehouse logistics and loading', cz: 'Pro skladovou logistiku a nakládku', sk: 'Pre skladovú logistiku a nakládku', hu: 'Raktárlogisztikához és rakodáshoz' },
        body: {
          de: 'Beim Ein- und Auslagern von Türen oder bei der Verladung auf Spezialwagen ist beschlagschonendes Handling entscheidend. Die Türentraverse erlaubt Ein-Personen-Bedienung auch bei großen Türformaten — ein Bereich, in dem Standardgreifer regelmäßig beschädigungsbedingte Reklamationen verursachen.',
          en: 'When storing and retrieving doors or loading onto special carts, hardware-friendly handling is crucial. The door traverse allows one-person operation even with large door formats — an area where standard grippers regularly cause damage-related complaints.',
          cz: 'Při zakládání a odebírání dveří nebo při nakládce na speciální vozíky je šetrné zacházení s kováním rozhodující. Traverza na dveře umožňuje obsluhu jednou osobou i u velkých formátů dveří — oblast, kde standardní úchopy pravidelně způsobují reklamace z důvodu poškození.',
          sk: 'Pri zakladaní a odoberaní dverí alebo pri nakládke na špeciálne vozíky je šetrné zaobchádzanie s kovaním rozhodujúce. Traverza na dvere umožňuje obsluhu jednou osobou aj pri veľkých formátoch dverí — oblasť, kde štandardné úchopy pravidelne spôsobujú reklamácie z dôvodu poškodenia.',
          hu: 'Ajtók raktárba helyezésénél és kivételénél, valamint speciális kocsikra történő rakodásnál a vasalatkímélő kezelés döntő. Az ajtótraverz egyszemélyes kezelést tesz lehetővé nagy ajtóformátumoknál is — olyan terület, ahol a szabványos megfogók rendszeresen okoznak sérüléssel kapcsolatos reklamációkat.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Wählen Sie die Türentraverse, wenn Sie regelmäßig vorkonfektionierte Türelemente mit Beschlägen, Hochglanz-Dekor oder Schlossausfräsungen transportieren. Für rohe, unbearbeitete Türrohlinge reichen oft ein UWL-3 oder die Dünnplattentraverse. Asamer dokumentiert Ihre Türformate und Beschlaggeometrien und konfiguriert die Traverse passend — inklusive austauschbarer Saugerblöcke für Format-Varianten.',
      en: 'Choose the door traverse if you regularly transport pre-assembled door elements with hardware, high-gloss decor or lock cutouts. For raw, unprocessed door blanks, a UWL-3 or the thin panel traverse is often sufficient. Asamer documents your door formats and hardware geometries and configures the traverse accordingly — including interchangeable suction cup blocks for format variants.',
      cz: 'Zvolte traverzu na dveře, pokud pravidelně přepravujete přednastavené dveřní prvky s kováním, vysokým leskem dekoru nebo výřezy pro zámek. Pro surové, neopracované dveřní polotovary často stačí UWL-3 nebo traverza na tenké desky. Asamer dokumentuje vaše formáty dveří a geometrie kování a konfiguruje traverzu odpovídajícím způsobem — včetně vyměnitelných přísavkových bloků pro varianty formátů.',
      sk: 'Zvoľte traverzu na dvere, ak pravidelne prepravujete prednastavené dverné prvky s kovaním, vysokým leskom dekoru alebo výrezmi pre zámok. Pre surové, neopracované dverné polotovary často stačí UWL-3 alebo traverza na tenké dosky. Asamer dokumentuje vaše formáty dverí a geometrie kovania a konfiguruje traverzu zodpovedajúcim spôsobom — vrátane vymeniteľných prísavkových blokov pre varianty formátov.',
      hu: 'Válassza az ajtótraverzt, ha rendszeresen szállít előszerelt, vasalattal, magas fényű dekorral vagy zárkimarásokkal ellátott ajtóelemeket. Nyers, megmunkálatlan ajtó-előgyártmányokhoz gyakran elegendő egy UWL-3 vagy a vékonylap-traverz. Az Asamer dokumentálja az Ön ajtóformátumait és vasalatgeometriáit, és ennek megfelelően konfigurálja a traverzt — a formátumváltozatokhoz tartozó cserélhető szívótárcsa-blokkokkal együtt.',
    },
    faq: [
      {
        question: { de: 'Was ist das maximale Türformat?', en: 'What is the maximum door format?', cz: 'Jaký je maximální formát dveří?', sk: 'Aký je maximálny formát dverí?', hu: 'Mi a maximális ajtóformátum?' },
        answer: {
          de: 'Standard ist 2,2 × 1,2 Meter. Für überhöhte Haustüren oder Sondertüren bis 2,5 Meter Höhe gibt es Sonderausführungen, die entsprechend kalkuliert werden. Asamer prüft Ihre Maximalformate vor der Auslegung.',
          en: 'Standard is 2.2 × 1.2 metres. For oversized entrance doors or special doors up to 2.5 metres in height, special versions are available and priced accordingly. Asamer checks your maximum formats before dimensioning.',
          cz: 'Standard je 2,2 × 1,2 metru. Pro zvýšené vchodové dveře nebo speciální dveře do výšky 2,5 metru jsou k dispozici zvláštní provedení, která se odpovídajícím způsobem kalkulují. Asamer před dimenzováním prověří vaše maximální formáty.',
          sk: 'Štandard je 2,2 × 1,2 metra. Pre zvýšené vchodové dvere alebo špeciálne dvere do výšky 2,5 metra sú k dispozícii zvláštne prevedenia, ktoré sa zodpovedajúcim spôsobom kalkulujú. Asamer pred dimenzovaním preverí vaše maximálne formáty.',
          hu: 'A szabvány 2,2 × 1,2 méter. Túlméretes bejárati ajtókhoz vagy 2,5 méter magasságig terjedő különleges ajtókhoz egyedi kivitelek érhetők el, ezek árazása ennek megfelelő. Az Asamer a méretezés előtt ellenőrzi az Ön maximális formátumait.',
        },
      },
      {
        question: { de: 'Wie werden Beschläge erkannt und umgangen?', en: 'How are hardware items detected and avoided?', cz: 'Jak se kování detekuje a obchází?', sk: 'Ako sa kovanie deteguje a obchádza?', hu: 'Hogyan ismerik fel és kerülik el a vasalatokat?' },
        answer: {
          de: 'Die Sauger sind fest nach typischen Beschlag-Rastermaßen angeordnet. Bei Türen mit variabler Beschlagsposition kommen verstellbare Saugerbalken zum Einsatz. Für vollautomatische Prozesse ist eine Kameraerkennung als Option verfügbar.',
          en: 'Suction cups are fixed according to typical hardware grid dimensions. For doors with variable hardware position, adjustable suction bars are used. For fully automatic processes, camera detection is available as an option.',
          cz: 'Přísavky jsou pevně uspořádány podle typických rastrů kování. U dveří s proměnnou polohou kování se používají nastavitelné přísavkové lišty. Pro plně automatické procesy je kamerová detekce dostupná jako volba.',
          sk: 'Prísavky sú pevne usporiadané podľa typických rastrov kovania. Pri dverách s premennou polohou kovania sa používajú nastaviteľné prísavkové lišty. Pre plne automatické procesy je kamerová detekcia dostupná ako voľba.',
          hu: 'A szívótárcsák fixen elrendezettek a tipikus vasalat-rasztermérések szerint. Változó vasalatpozíciójú ajtóknál szabályozható szívótárcsa-léceket használnak. Teljesen automatikus folyamatokhoz opcióként kameraérzékelés is elérhető.',
        },
      },
      {
        question: { de: 'Darf die Traverse Hochglanz-Oberflächen berühren?', en: 'Can the traverse touch high-gloss surfaces?', cz: 'Smí se traverza dotýkat vysoce lesklých povrchů?', sk: 'Smie sa traverza dotýkať vysoko lesklých povrchov?', hu: 'Érintkezhet a traverz magas fényű felületekkel?' },
        answer: {
          de: 'Die Standard-Saugerauflagen sind für Hochglanz geeignet und hinterlassen bei kurzen Haltezeiten keine Abdrücke. Bei Lagerung oder langen Standzeiten mit anliegendem Vakuum empfiehlt sich eine Zwischenlage — das klärt Asamer im Vorgespräch je nach Prozess.',
          en: 'Standard suction cup pads are suitable for high-gloss and leave no marks on short hold times. For storage or long dwell times with vacuum applied, an intermediate pad is recommended — Asamer clarifies this in the preliminary consultation based on your process.',
          cz: 'Standardní podložky přísavek jsou vhodné pro vysoký lesk a na krátkých dobách držení nezanechávají stopy. U skladování nebo dlouhých dob s přiloženým vakuem se doporučuje mezivrstva — to Asamer vyjasní v předběžné konzultaci podle procesu.',
          sk: 'Štandardné podložky prísaviek sú vhodné pre vysoký lesk a na krátkych časoch držania nezanechávajú stopy. Pri skladovaní alebo dlhých časoch s priloženým vákuom sa odporúča medzivrstva — to Asamer vyjasní v predbežnej konzultácii podľa procesu.',
          hu: 'A szabványos szívótárcsa-betétek alkalmasak magas fényhez és rövid tartási időknél nem hagynak nyomot. Tárolásnál vagy hosszabb, vákuum alatt tartott időknél közbülső betét ajánlott — ezt az Asamer az előzetes egyeztetésen tisztázza a folyamat alapján.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  VACUUM-TRAVERSES — blech-plexiglas-traverse                        */
  /* ------------------------------------------------------------------ */
  'blech-plexiglas-traverse': {
    longDescription: {
      de: `Die Barbaric Blech- und Plexiglas-Traverse ist eine Vakuumtraverse für Metallbleche und Kunststoff-Flachmaterialien — Stahlbleche, Aluminiumtafeln, Edelstahlplatten, Plexiglas (Acrylglas), Polycarbonat, PVC-Hartplatten und ähnliche Kunststoffe. Diese Materialien unterscheiden sich deutlich von Holzwerkstoffen: Bleche sind biegesteif, aber schwer; Plexiglas ist empfindlich gegen Kratzer und statische Aufladung. Die Traverse arbeitet mit speziell beschichteten Saugern, die weder auf Metall rutschen noch auf Kunststoff Abdrücke hinterlassen. Die Saugerverteilung ist auf Längsformate bis 6 Meter abgestimmt. Typische Einsatzbereiche sind Metallverarbeitung, Laserschneid-Betriebe, Kunststoffverarbeitung, Werbetechnik (Schilder und Displays) und Fassadenbau. Asamer projektiert Blech- und Plexiglas-Traversen für Metallbau- und Kunststoffbetriebe in Tschechien, Slowakei und Ungarn — inklusive Materialtest, Tragkraftauslegung und Sicherheitsabnahme.`,
      en: `The Barbaric sheet metal and plexiglass traverse is a vacuum traverse for metal sheets and plastic flat materials — steel sheets, aluminium panels, stainless steel plates, plexiglass (acrylic), polycarbonate, rigid PVC and similar plastics. These materials differ significantly from wood: sheets are rigid but heavy; plexiglass is sensitive to scratches and static charge. The traverse works with specially coated suction cups that neither slip on metal nor leave marks on plastic. Suction cup distribution is matched to longitudinal formats up to 6 metres. Typical applications are metal processing, laser cutting operations, plastic processing, signage and display production and façade construction. Asamer engineers sheet metal and plexiglass traverses for metal and plastic operations in Czech Republic, Slovakia and Hungary — including material testing, load capacity dimensioning and safety acceptance.`,
      cz: `Barbaric traverza na plech a plexisklo je vakuová traverza pro kovové plechy a plastové ploché materiály — ocelové plechy, hliníkové tabule, nerezové desky, plexisklo (akrylát), polykarbonát, tvrdé PVC a podobné plasty. Tyto materiály se výrazně liší od dřevěných kompozitů: plechy jsou tuhé, ale těžké; plexisklo je citlivé na poškrábání a statický náboj. Traverza pracuje se speciálně potaženými přísavkami, které ani neklouzají po kovu, ani nezanechávají stopy na plastu. Rozmístění přísavek je přizpůsobeno podélným formátům do 6 metrů. Typickými oblastmi použití jsou zpracování kovů, laserové řezací provozy, zpracování plastů, reklamní technika (cedule a displeje) a výstavba fasád. Asamer projektuje traverzy na plech a plexisklo pro kovovýrobní a plastové provozy v České republice, na Slovensku a v Maďarsku — včetně testu materiálu, dimenzování nosnosti a bezpečnostního schválení.`,
      sk: `Barbaric traverza na plech a plexisklo je vákuová traverza pre kovové plechy a plastové ploché materiály — oceľové plechy, hliníkové tabule, nerezové dosky, plexisklo (akrylát), polykarbonát, tvrdé PVC a podobné plasty. Tieto materiály sa výrazne líšia od drevených kompozitov: plechy sú tuhé, ale ťažké; plexisklo je citlivé na poškriabanie a statický náboj. Traverza pracuje so špeciálne potiahnutými prísavkami, ktoré ani nekĺžu po kove, ani nezanechávajú stopy na plaste. Rozloženie prísaviek je prispôsobené pozdĺžnym formátom do 6 metrov. Typickými oblasťami použitia sú spracovanie kovov, laserové rezacie prevádzky, spracovanie plastov, reklamná technika (tabule a displeje) a výstavba fasád. Asamer projektuje traverzy na plech a plexisklo pre kovovýrobné a plastové prevádzky v Českej republike, na Slovensku a v Maďarsku — vrátane testu materiálu, dimenzovania nosnosti a bezpečnostného schválenia.`,
      hu: `A Barbaric lemez- és plexiüveg-traverz vákuumtraverz fémlemezekhez és műanyag lapanyagokhoz — acéllemezekhez, alumínium táblákhoz, rozsdamentes acéllemezekhez, plexihez (akril), polikarbonáthoz, kemény PVC-hez és hasonló műanyagokhoz. Ezek az anyagok jelentősen eltérnek a fakompozitoktól: a lemezek merevek, de nehezek; a plexi érzékeny a karcolódásra és a statikus feltöltődésre. A traverz speciális bevonatú szívótárcsákkal dolgozik, amelyek sem fémen nem csúsznak, sem műanyagon nem hagynak nyomot. A szívótárcsák elrendezése 6 méterig terjedő hosszformátumokhoz illeszkedik. Tipikus alkalmazási területek a fémmegmunkálás, lézervágó üzemek, műanyagfeldolgozás, reklámtechnika (táblák és kijelzők) és homlokzatépítés. Az Asamer lemez- és plexiüveg-traverzeket tervez fém- és műanyagüzemek számára Csehországban, Szlovákiában és Magyarországon — anyagvizsgálattal, teherbírás-méretezéssel és biztonsági átvétellel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Laserschneiden und Metallverarbeitung', en: 'For laser cutting and metal processing', cz: 'Pro laserové řezání a zpracování kovů', sk: 'Pre laserové rezanie a spracovanie kovov', hu: 'Lézervágáshoz és fémmegmunkáláshoz' },
        body: {
          de: 'An der Laserschneidanlage müssen große Blechtafeln bestückt und ausgeschnittene Teile abtransportiert werden. Die Blech-Traverse hebt Tafeln bis zu üblichen Laserformaten (3 × 1,5 m oder 4 × 2 m) prozesssicher an — schneller als Gabelstapler, schonender als Kranhaken.',
          en: 'At the laser cutting machine, large sheet panels must be loaded and cut parts removed. The sheet metal traverse lifts panels up to typical laser formats (3 × 1.5 m or 4 × 2 m) reliably — faster than forklifts, gentler than crane hooks.',
          cz: 'U laserové řezačky je třeba zakládat velké plechové tabule a odvážet vyřezané díly. Traverza na plech zvedá tabule do běžných laserových formátů (3 × 1,5 m nebo 4 × 2 m) spolehlivě — rychleji než vysokozdvižné vozíky, šetrněji než jeřábové háky.',
          sk: 'Pri laserovej rezačke je potrebné zakladať veľké plechové tabule a odvážať vyrezané diely. Traverza na plech zdvíha tabule do bežných laserových formátov (3 × 1,5 m alebo 4 × 2 m) spoľahlivo — rýchlejšie než vysokozdvižné vozíky, šetrnejšie než žeriavové háky.',
          hu: 'A lézervágó gépnél nagy lemeztáblákat kell betölteni és a kivágott darabokat elszállítani. A lemeztraverz megbízhatóan emeli a tipikus lézerformátumok (3 × 1,5 m vagy 4 × 2 m) méretéig terjedő lapokat — gyorsabban, mint a targonca, kíméletesebben, mint a darukampó.',
        },
      },
      {
        heading: { de: 'Für Werbetechnik und Fassadenbau', en: 'For signage and façade construction', cz: 'Pro reklamní techniku a výstavbu fasád', sk: 'Pre reklamnú techniku a výstavbu fasád', hu: 'Reklámtechnikához és homlokzatépítéshez' },
        body: {
          de: 'Plexiglasplatten für Beschilderungen, Vitrinen oder Fassadenelemente sind empfindlich gegen Kratzer — jeder manuelle Handgriff ist ein Risiko. Die Plexiglas-Traverse sichert verkratzungsfreie Handhabung und reduziert Ausschuss bei hochpreisigen Acrylplatten spürbar.',
          en: 'Plexiglass panels for signage, display cases or façade elements are sensitive to scratches — every manual handling is a risk. The plexiglass traverse ensures scratch-free handling and noticeably reduces scrap on high-priced acrylic panels.',
          cz: 'Desky z plexiskla pro cedule, vitríny nebo fasádní prvky jsou citlivé na poškrábání — každá ruční manipulace je riziko. Traverza na plexisklo zajišťuje bezškrábavou manipulaci a znatelně snižuje zmetkovitost u cenově vysokých akrylových desek.',
          sk: 'Dosky z plexiskla pre tabule, vitríny alebo fasádne prvky sú citlivé na poškriabanie — každá ručná manipulácia je riziko. Traverza na plexisklo zaisťuje bezškrabavú manipuláciu a znateľne znižuje zmetkovitosť pri cenovo vysokých akrylových doskách.',
          hu: 'A feliratozáshoz, vitrinekhez vagy homlokzati elemekhez használt plexi lapok karcolásra érzékenyek — minden kézi mozgatás kockázat. A plexitraverz karcolódásmentes kezelést biztosít, és érezhetően csökkenti a magas árú akriltáblák selejtarányát.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Blech- und Plexiglas-Traverse ist die richtige Wahl, wenn Ihre primären Werkstoffe Metall oder Kunststoff sind. Für Holzwerkstoffe nehmen Sie den UWL-3 oder die Dünnplattentraverse. Vor dem Angebot führt Asamer einen Materialtest mit typischen Proben durch, um die Saugerkonfiguration und die Oberflächenverträglichkeit zu sichern.',
      en: 'The sheet metal and plexiglass traverse is the right choice when your primary materials are metal or plastic. For wood materials, the UWL-3 or thin panel traverse is suitable. Before quoting, Asamer performs a material test with typical samples to secure suction configuration and surface compatibility.',
      cz: 'Traverza na plech a plexisklo je správnou volbou, pokud jsou vaše hlavní materiály kov nebo plast. Pro dřevěné kompozity zvolte UWL-3 nebo traverzu na tenké desky. Před nabídkou Asamer provede test materiálu s typickými vzorky, aby zajistil konfiguraci přísavek a kompatibilitu povrchu.',
      sk: 'Traverza na plech a plexisklo je správnou voľbou, ak sú vaše hlavné materiály kov alebo plast. Pre drevené kompozity zvoľte UWL-3 alebo traverzu na tenké dosky. Pred ponukou Asamer vykoná test materiálu s typickými vzorkami, aby zaistil konfiguráciu prísaviek a kompatibilitu povrchu.',
      hu: 'A lemez- és plexitraverz akkor a helyes választás, ha elsődleges anyagai fém vagy műanyag. Fa alapanyagokhoz az UWL-3 vagy a vékonylap-traverz alkalmas. Az ajánlat előtt az Asamer tipikus mintákkal végez anyagvizsgálatot, hogy biztosítsa a szívótárcsák konfigurációját és a felületi összeférhetőséget.',
    },
    faq: [
      {
        question: { de: 'Gibt es spezielle Sauger für Metall?', en: 'Are there special suction cups for metal?', cz: 'Existují speciální přísavky pro kov?', sk: 'Existujú špeciálne prísavky pre kov?', hu: 'Vannak speciális szívótárcsák fémhez?' },
        answer: {
          de: 'Ja — für Bleche werden Sauger mit härterem Material und höherem Unterdruck verwendet. Sie kompensieren die geringere Oberflächenreibung von glatten Metallen und verhindern Abrutschen bei seitlicher Beschleunigung.',
          en: 'Yes — for sheet metal, suction cups with harder material and higher vacuum are used. They compensate for the lower surface friction of smooth metals and prevent slipping under lateral acceleration.',
          cz: 'Ano — pro plechy se používají přísavky s tvrdším materiálem a vyšším podtlakem. Kompenzují nižší povrchové tření hladkých kovů a zabraňují sklouznutí při bočním zrychlení.',
          sk: 'Áno — pre plechy sa používajú prísavky s tvrdším materiálom a vyšším podtlakom. Kompenzujú nižšie povrchové trenie hladkých kovov a zabraňujú skĺznutiu pri bočnom zrýchlení.',
          hu: 'Igen — lemezekhez keményebb anyagú és nagyobb vákuumú szívótárcsákat használnak. Ezek kompenzálják a sima fémek alacsonyabb felületi súrlódását, és megakadályozzák a megcsúszást oldalirányú gyorsítás során.',
        },
      },
      {
        question: { de: 'Wie wird statische Aufladung bei Plexiglas vermieden?', en: 'How is static charge on plexiglass avoided?', cz: 'Jak se předchází statickému náboji u plexiskla?', sk: 'Ako sa predchádza statickému náboju pri plexiskle?', hu: 'Hogyan kerülhető el a plexi statikus feltöltődése?' },
        answer: {
          de: 'Für Plexiglas-Traversen gibt es antistatisch ausgeführte Sauger und Erdungskonzepte. Bei Reinraum- oder Sauberbereich-Anforderungen plant Asamer zusätzliche Ionisatoren oder Ableitschienen mit ein.',
          en: 'For plexiglass traverses, antistatic suction cups and grounding concepts are available. For clean-room or clean-area requirements, Asamer plans additional ionisers or discharge rails.',
          cz: 'Pro traverzy na plexisklo existují antistaticky provedené přísavky a uzemňovací koncepty. Při požadavcích na čisté prostory nebo čisté zóny Asamer plánuje dodatečné ionizátory nebo vybíjecí lišty.',
          sk: 'Pre traverzy na plexisklo existujú antistaticky prevedené prísavky a uzemňovacie koncepty. Pri požiadavkách na čisté priestory alebo čisté zóny Asamer plánuje dodatočné ionizátory alebo vybíjacie lišty.',
          hu: 'A plexitraverzekhez antisztatikus kialakítású szívótárcsák és földelési koncepciók érhetők el. Tisztatéri vagy tiszta zónás követelmények esetén az Asamer további ionizátorokat vagy levezetősíneket tervez be.',
        },
      },
      {
        question: { de: 'Kann dieselbe Traverse Blech und Plexiglas bedienen?', en: 'Can the same traverse handle both sheet metal and plexiglass?', cz: 'Může stejná traverza obsluhovat plech i plexisklo?', sk: 'Môže tá istá traverza obsluhovať plech aj plexisklo?', hu: 'Tudja ugyanaz a traverz kezelni a lemezt és a plexit?' },
        answer: {
          de: 'Ja — mit umsteckbaren Saugersätzen. Bei häufigem Wechsel lohnt sich ein Doppelsatz, der in wenigen Minuten umgebaut werden kann. Asamer dokumentiert den typischen Materialmix und dimensioniert die Traverse entsprechend.',
          en: 'Yes — with interchangeable suction cup sets. For frequent changeovers, a double set that can be swapped in a few minutes pays off. Asamer documents your typical material mix and dimensions the traverse accordingly.',
          cz: 'Ano — s vyměnitelnými sadami přísavek. Při častém střídání se vyplatí dvojitá sada, která se dá v několika minutách přestavět. Asamer dokumentuje typickou směs materiálů a dimenzuje traverzu odpovídajícím způsobem.',
          sk: 'Áno — s vymeniteľnými sadami prísaviek. Pri častom striedaní sa vypláca dvojitá sada, ktorú možno za niekoľko minút prestavať. Asamer dokumentuje typickú zmes materiálov a dimenzuje traverzu zodpovedajúcim spôsobom.',
          hu: 'Igen — cserélhető szívótárcsa-készletekkel. Gyakori váltás esetén megéri egy dupla készlet, amely percek alatt átszerelhető. Az Asamer dokumentálja a tipikus anyagösszetételt, és ennek megfelelően méretezi a traverzt.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  VACUUM-CRANES — ssy-schienensystem                                 */
  /* ------------------------------------------------------------------ */
  'ssy-schienensystem': {
    longDescription: {
      de: `Das Barbaric SSY Schienensystem ist ein lineares Vakuumkran-System für gerade Materialflüsse in Produktionslinien und Durchgangslagern. Statt einen Arbeitsbereich flächig abzudecken (wie Säulenschwenkkran oder Fachwerkbrücke), bewegt sich der Vakuumheber entlang einer einzigen, an der Hallendecke montierten Schienenachse zwischen zwei oder mehreren fest definierten Stationen. Das ist ideal, wenn Material von einer Quelle zu einem Ziel transportiert wird — etwa von der Plattenaufteilsäge zum Kantenanleimer, vom Lager zur Verpackung oder zwischen zwei Bearbeitungsstationen. Das SSY ist günstiger als eine Fachwerkbrücke, lässt sich einfacher installieren und benötigt weniger Hallenhöhe. Schienenlängen bis deutlich über 30 Meter sind möglich. Asamer projektiert Schienensysteme für Produktionslinien und Durchgangslager in Tschechien, Slowakei und Ungarn — inklusive Tragwerk-Statik, elektrischer Versorgung und Sicherheitsabnahme.`,
      en: `The Barbaric SSY rail system is a linear vacuum crane system for straight material flows in production lines and pass-through storage. Instead of covering a work area across its surface (like a column slewing crane or truss bridge), the vacuum lifter moves along a single ceiling-mounted rail axis between two or more fixed stations. This is ideal when material is transported from a source to a destination — for example, from panel saw to edgebander, from storage to packaging, or between two machining stations. The SSY is cheaper than a truss bridge, easier to install and requires less hall height. Rail lengths well beyond 30 metres are possible. Asamer engineers rail systems for production lines and pass-through storage in Czech Republic, Slovakia and Hungary — including structural statics, electrical supply and safety acceptance.`,
      cz: `Barbaric SSY kolejnicový systém je lineární vakuový jeřábový systém pro přímé toky materiálu ve výrobních linkách a průchozích skladech. Místo plošného pokrytí pracovní oblasti (jako sloupový otočný jeřáb nebo příhradový most) se vakuový zvedák pohybuje podél jediné kolejnicové osy namontované na stropě haly mezi dvěma nebo více pevně definovanými stanicemi. To je ideální, když se materiál přepravuje ze zdroje do cíle — například z formátovací pily k olepovačce hran, ze skladu k balení nebo mezi dvěma obráběcími stanicemi. SSY je levnější než příhradový most, jednodušeji se instaluje a vyžaduje menší výšku haly. Jsou možné délky kolejnice výrazně nad 30 metrů. Asamer projektuje kolejnicové systémy pro výrobní linky a průchozí sklady v České republice, na Slovensku a v Maďarsku — včetně nosné statiky, elektrického napájení a bezpečnostního schválení.`,
      sk: `Barbaric SSY koľajnicový systém je lineárny vákuový žeriavový systém pre priame toky materiálu vo výrobných linkách a priechodných skladoch. Namiesto plošného pokrytia pracovnej oblasti (ako stĺpový otočný žeriav alebo priehradový most) sa vákuový zdvíhač pohybuje pozdĺž jedinej koľajnicovej osi namontovanej na strope haly medzi dvomi alebo viacerými pevne definovanými stanicami. To je ideálne, keď sa materiál prepravuje zo zdroja do cieľa — napríklad z formátovacej píly k olepovačke hrán, zo skladu k baleniu alebo medzi dvomi obrábacími stanicami. SSY je lacnejší ako priehradový most, jednoduchšie sa inštaluje a vyžaduje menšiu výšku haly. Sú možné dĺžky koľajnice výrazne nad 30 metrov. Asamer projektuje koľajnicové systémy pre výrobné linky a priechodné sklady v Českej republike, na Slovensku a v Maďarsku — vrátane nosnej statiky, elektrického napájania a bezpečnostného schválenia.`,
      hu: `A Barbaric SSY sínrendszer egyenes anyagáramlásokhoz készült lineáris vákuumdaru-rendszer gyártósorok és áthaladó raktárak számára. Ahelyett, hogy egy munkaterületet felületileg fedne le (mint az oszlopos forgódaru vagy a rácsos híd), a vákuumemelő egyetlen, csarnokmennyezetre szerelt síntengely mentén mozog két vagy több rögzített állomás között. Ez ideális, ha az anyagot forrásról célig szállítják — például lapszabászgéptől élzárógépig, raktárból csomagolásig vagy két megmunkáló állomás között. Az SSY olcsóbb a rácsos hídnál, könnyebben telepíthető és kevesebb csarnokmagasságot igényel. 30 méter feletti sínhosszak is lehetségesek. Az Asamer sínrendszereket tervez gyártósorokhoz és áthaladó raktárakhoz Csehországban, Szlovákiában és Magyarországon — a tartószerkezet statikájával, elektromos ellátással és biztonsági átvétellel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für Produktionslinien mit definierten Stationen', en: 'For production lines with defined stations', cz: 'Pro výrobní linky s definovanými stanicemi', sk: 'Pre výrobné linky s definovanými stanicami', hu: 'Meghatározott állomásokkal rendelkező gyártósorokhoz' },
        body: {
          de: 'Typische Anwendung: Die Plattenaufteilsäge liegt am Anfang der Halle, der Kantenanleimer am anderen Ende. Das SSY verbindet beide und übernimmt den Transport — präzise, schnell und ohne Stapler. Das reduziert Personalbedarf und macht die Materialzufuhr taktfähig.',
          en: 'Typical application: the panel saw is at one end of the hall, the edgebander at the other. The SSY connects both and handles transport — precisely, quickly and without forklifts. This reduces personnel needs and makes material supply takt-ready.',
          cz: 'Typická aplikace: formátovací pila stojí na začátku haly, olepovačka hran na druhém konci. SSY propojuje oba stroje a přebírá přepravu — přesně, rychle a bez vysokozdvižných vozíků. To snižuje potřebu personálu a činí přísun materiálu taktovatelným.',
          sk: 'Typická aplikácia: formátovacia píla stojí na začiatku haly, olepovačka hrán na druhom konci. SSY prepája oba stroje a preberá prepravu — presne, rýchlo a bez vysokozdvižných vozíkov. To znižuje potrebu personálu a robí prísun materiálu taktovateľným.',
          hu: 'Tipikus alkalmazás: a lapszabászgép a csarnok egyik végén van, az élzárógép a másikon. Az SSY összeköti mindkettőt és végzi a szállítást — pontosan, gyorsan és targonca nélkül. Ez csökkenti a személyzeti igényt, és ütemezhetővé teszi az anyagellátást.',
        },
      },
      {
        heading: { de: 'Für Durchgangslager und Verladung', en: 'For pass-through storage and dispatch', cz: 'Pro průchozí sklady a nakládku', sk: 'Pre priechodné sklady a nakládku', hu: 'Áthaladó raktárakhoz és kiszállításhoz' },
        body: {
          de: 'In Durchgangslagern mit klarer Material-Flussrichtung (Wareneingang → Lagerfläche → Versand) bildet die SSY-Schiene die logische Mitte des Prozesses. Platten werden direkt aus dem Eingang entnommen, geordnet im Lager abgelegt und später zur Verladerampe transportiert — ohne Lagerübergaben.',
          en: 'In pass-through storage with clear material flow direction (goods receipt → storage area → dispatch), the SSY rail forms the logical centre of the process. Panels are picked directly from goods receipt, placed sorted in storage and later transported to the loading ramp — without storage handovers.',
          cz: 'V průchozích skladech s jasným směrem toku materiálu (příjem zboží → skladová plocha → expedice) tvoří SSY kolejnice logické centrum procesu. Desky se odebírají přímo z příjmu, ukládají se tříděně do skladu a později se přepravují k nakládací rampě — bez předávacích míst.',
          sk: 'V priechodných skladoch s jasným smerom toku materiálu (príjem tovaru → skladová plocha → expedícia) tvorí SSY koľajnica logické centrum procesu. Dosky sa odoberajú priamo z príjmu, ukladajú sa triedene do skladu a neskôr sa prepravujú k nakladacej rampe — bez odovzdávacích miest.',
          hu: 'Az egyértelmű anyagáramlási irányú áthaladó raktárakban (áruátvétel → tárolóterület → kiszállítás) az SSY sín a folyamat logikai központja. A lapokat közvetlenül az áruátvételről veszik le, rendezetten helyezik el a raktárban, majd később a rakodórámpához szállítják — átadópontok nélkül.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Wählen Sie das SSY Schienensystem, wenn Ihr Materialfluss primär linear verläuft. Soll eine größere Fläche flexibel abgedeckt werden, ist eine Fachwerkbrücke (2D oder 3D) besser geeignet. Das SSY lässt sich später auch um Abzweigungen oder Übergabestellen erweitern — aber mit reduzierter Flexibilität gegenüber einer echten Flächen-Lösung.',
      en: 'Choose the SSY rail system when your material flow is primarily linear. If a larger area needs to be flexibly covered, a truss bridge (2D or 3D) is more suitable. The SSY can later be extended with branches or handover points — but with reduced flexibility compared to a true area solution.',
      cz: 'Zvolte SSY kolejnicový systém, pokud váš tok materiálu probíhá primárně lineárně. Má-li být flexibilně pokryta větší plocha, je vhodnější příhradový most (2D nebo 3D). SSY lze později rozšířit o odbočky nebo předávací místa — ale se sníženou flexibilitou oproti skutečnému plošnému řešení.',
      sk: 'Zvoľte SSY koľajnicový systém, ak váš tok materiálu prebieha primárne lineárne. Ak má byť flexibilne pokrytá väčšia plocha, je vhodnejší priehradový most (2D alebo 3D). SSY možno neskôr rozšíriť o odbočky alebo odovzdávacie miesta — ale so zníženou flexibilitou oproti skutočnému plošnému riešeniu.',
      hu: 'Válassza az SSY sínrendszert, ha anyagáramlása elsősorban lineáris. Ha egy nagyobb területet kell rugalmasan lefedni, egy rácsos híd (2D vagy 3D) a megfelelőbb. Az SSY később elágazásokkal vagy átadási pontokkal bővíthető — de kisebb rugalmassággal, mint egy valódi területi megoldás.',
    },
    faq: [
      {
        question: { de: 'Wie lang kann die Schiene maximal sein?', en: 'What is the maximum rail length?', cz: 'Jak dlouhá může být kolejnice maximálně?', sk: 'Aká dlhá môže byť koľajnica maximálne?', hu: 'Milyen hosszú lehet maximálisan a sín?' },
        answer: {
          de: 'Typische Ausführungen decken 10 bis 30 Meter ab. Für längere Strecken sind gekoppelte Schienenabschnitte mit Segment-Übergaben möglich — Asamer plant die mechanischen und elektrischen Übergänge individuell.',
          en: 'Typical versions cover 10 to 30 metres. For longer runs, coupled rail sections with segment handovers are possible — Asamer plans mechanical and electrical transitions individually.',
          cz: 'Typická provedení pokrývají 10 až 30 metrů. Pro delší vzdálenosti jsou možné spojené kolejnicové úseky se segmentovým předáváním — Asamer plánuje mechanické a elektrické přechody individuálně.',
          sk: 'Typické prevedenia pokrývajú 10 až 30 metrov. Pre dlhšie vzdialenosti sú možné spojené koľajnicové úseky so segmentovým odovzdávaním — Asamer plánuje mechanické a elektrické prechody individuálne.',
          hu: 'A tipikus kivitelek 10 és 30 méter közötti tartományt fednek le. Hosszabb távolságokhoz összekapcsolt sínszakaszok lehetségesek szegmens-átadással — az Asamer egyedileg tervezi a mechanikus és elektromos átmeneteket.',
        },
      },
      {
        question: { de: 'Braucht das SSY eine Stromschiene?', en: 'Does the SSY need a conductor bar?', cz: 'Potřebuje SSY proudovou lištu?', sk: 'Potrebuje SSY prúdovú lištu?', hu: 'Szükséges-e áramvezetősín az SSY-hez?' },
        answer: {
          de: 'Ja — Strom und Steuersignale werden über eine Schleifleitung oder Energiekette entlang der Schiene geführt. Die Auslegung richtet sich nach Nennstrom, Signalart und Hallen-IP-Schutzklasse.',
          en: 'Yes — power and control signals are carried along the rail via a conductor line or cable chain. Dimensioning depends on rated current, signal type and hall IP protection class.',
          cz: 'Ano — proud a řídicí signály jsou vedeny podél kolejnice kluzným vedením nebo energetickým řetězem. Dimenzování se řídí podle jmenovitého proudu, typu signálu a třídy ochrany IP haly.',
          sk: 'Áno — prúd a riadiace signály sú vedené pozdĺž koľajnice klzným vedením alebo energetickým reťazom. Dimenzovanie sa riadi podľa menovitého prúdu, typu signálu a triedy ochrany IP haly.',
          hu: 'Igen — az áramot és a vezérlőjeleket a sín mentén csúszóvezeték vagy energialánc vezeti. A méretezés a névleges áramtól, a jel típusától és a csarnok IP védettségi osztályától függ.',
        },
      },
      {
        question: { de: 'Kann das SSY später zu einer 2D-Brücke erweitert werden?', en: 'Can the SSY later be extended to a 2D bridge?', cz: 'Lze SSY později rozšířit na 2D most?', sk: 'Dá sa SSY neskôr rozšíriť na 2D most?', hu: 'Bővíthető-e az SSY később 2D híddá?' },
        answer: {
          de: 'Nicht als direkter Umbau — die Tragwerke unterscheiden sich deutlich. In der Praxis bleibt das SSY als Linear-Transport bestehen, und eine zusätzliche Fachwerkbrücke wird im Bedarfsfall ergänzt. Die Steuerungssoftware kann beide Systeme verwalten.',
          en: 'Not as a direct conversion — the structures differ significantly. In practice, the SSY remains as linear transport, and an additional truss bridge is added if needed. The control software can manage both systems.',
          cz: 'Ne jako přímá přestavba — nosné konstrukce se výrazně liší. V praxi zůstává SSY jako lineární přeprava a v případě potřeby se doplňuje příhradový most. Řídicí software umí spravovat oba systémy.',
          sk: 'Nie ako priama prestavba — nosné konštrukcie sa výrazne líšia. V praxi zostáva SSY ako lineárna preprava a v prípade potreby sa dopĺňa priehradový most. Riadiaci softvér vie spravovať oba systémy.',
          hu: 'Közvetlen átalakításként nem — a tartószerkezetek jelentősen eltérnek. A gyakorlatban az SSY lineáris szállításként megmarad, és szükség esetén egy további rácsos híd egészíti ki. A vezérlőszoftver mindkét rendszert képes kezelni.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  VACUUM-CRANES — fachwerksbruecke-2d                                */
  /* ------------------------------------------------------------------ */
  'fachwerksbruecke-2d': {
    longDescription: {
      de: `Die Barbaric Fachwerkbrücke 2D ist ein deckenmontierter Vakuumkran mit zwei Fahrachsen (X und Y), der eine rechteckige Hallenfläche vollflächig abdeckt. Er besteht aus zwei parallelen Kranbahnen entlang der Hallenlängsseiten und einer quer dazu verfahrenden Fachwerkbrücke, an der der Vakuumgreifer montiert ist. Dadurch lässt sich jeder Punkt der Rechteckfläche direkt anfahren — ideal für flächige Materialflüsse, CNC-Bestückung, Plattenaufteilsäge und chaotische Lagerbereiche. Im Gegensatz zum SSY Schienensystem ist die Fachwerkbrücke 2D nicht auf lineare Bewegung beschränkt, sondern bedient eine ganze Hallenfläche. Typische Einsatzbereiche sind mittlere und große Möbelbetriebe, Tischlereien mit mehreren CNC-Arbeitsplätzen und Industriebetriebe mit Plattenlagerung. Asamer plant Fachwerkbrücken 2D für Produktionsbetriebe in Tschechien, Slowakei und Ungarn — inklusive Statik, Hallenabdeckung, ERP-Anbindung und Sicherheitsabnahme.`,
      en: `The Barbaric 2D truss bridge is a ceiling-mounted vacuum crane with two travel axes (X and Y) that covers a rectangular hall area completely. It consists of two parallel crane runways along the long sides of the hall and a truss bridge moving transversely across them, with the vacuum gripper mounted on it. This allows any point of the rectangular area to be approached directly — ideal for flat material flows, CNC loading, panel saw and chaotic storage zones. Unlike the SSY rail system, the 2D truss bridge is not restricted to linear movement but serves an entire hall floor area. Typical applications are medium and large furniture operations, joinery shops with several CNC workstations and industrial plants with panel storage. Asamer plans 2D truss bridges for production plants in Czech Republic, Slovakia and Hungary — including statics, hall coverage, ERP integration and safety acceptance.`,
      cz: `Barbaric rámová konstrukce 2D je strop montovaný vakuový jeřáb se dvěma pojezdovými osami (X a Y), který plošně pokrývá obdélníkovou plochu haly. Skládá se ze dvou paralelních jeřábových drah podél podélných stran haly a kolmo k nim pojíždějícího příhradového mostu, na kterém je namontován vakuový úchop. Tím lze přímo najet do každého bodu obdélníkové plochy — ideální pro plošné toky materiálu, zakládání CNC, formátovací pilu a chaotické skladové zóny. Na rozdíl od SSY kolejnicového systému není rámová konstrukce 2D omezena na lineární pohyb, ale obsluhuje celou podlahovou plochu haly. Typickými oblastmi použití jsou střední a velké nábytkářské provozy, truhlářství s několika CNC pracovišti a průmyslové provozy se skladováním desek. Asamer projektuje rámové konstrukce 2D pro výrobní provozy v České republice, na Slovensku a v Maďarsku — včetně statiky, pokrytí haly, napojení na ERP a bezpečnostního schválení.`,
      sk: `Barbaric rámová konštrukcia 2D je na strop montovaný vákuový žeriav s dvomi pojazdovými osami (X a Y), ktorý plošne pokrýva obdĺžnikovú plochu haly. Skladá sa z dvoch paralelných žeriavových dráh pozdĺž pozdĺžnych strán haly a kolmo k nim pojazdného priehradového mosta, na ktorom je namontovaný vákuový úchop. Tým možno priamo najsť do každého bodu obdĺžnikovej plochy — ideálne pre plošné toky materiálu, zakladanie CNC, formátovaciu pílu a chaotické skladové zóny. Na rozdiel od SSY koľajnicového systému nie je rámová konštrukcia 2D obmedzená na lineárny pohyb, ale obsluhuje celú podlahovú plochu haly. Typickými oblasťami použitia sú stredné a veľké nábytkárske prevádzky, stolárstva s niekoľkými CNC pracoviskami a priemyselné prevádzky so skladovaním dosiek. Asamer projektuje rámové konštrukcie 2D pre výrobné prevádzky v Českej republike, na Slovensku a v Maďarsku — vrátane statiky, pokrytia haly, napojenia na ERP a bezpečnostného schválenia.`,
      hu: `A Barbaric 2D rácsos szerkezet mennyezetre szerelt vákuumdaru két mozgatási tengellyel (X és Y), amely egy téglalap alakú csarnokterületet teljes egészében lefed. Két, a csarnok hosszanti oldalai mentén futó párhuzamos daruvágányból és egy rájuk merőlegesen mozgó rácsos hídból áll, amelyre a vákuumos megfogó van szerelve. Ezáltal a téglalap alakú terület minden pontja közvetlenül megközelíthető — ideális felületi anyagáramlásokhoz, CNC betöltéshez, lapszabászgéphez és kaotikus tárolóterületekhez. Az SSY sínrendszerrel ellentétben a 2D rácsos szerkezet nem korlátozódik lineáris mozgásra, hanem egy teljes csarnoki padlófelületet szolgál ki. Tipikus alkalmazási területek a közepes és nagy bútorüzemek, több CNC munkaállomással rendelkező asztalosműhelyek és lapraktározással működő ipari üzemek. Az Asamer 2D rácsos szerkezeteket tervez gyártóüzemekhez Csehországban, Szlovákiában és Magyarországon — statikával, csarnoklefedettséggel, ERP csatlakoztatással és biztonsági átvétellel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für mittlere und große Möbelbetriebe', en: 'For medium and large furniture operations', cz: 'Pro střední a velké nábytkářské provozy', sk: 'Pre stredné a veľké nábytkárske prevádzky', hu: 'Közepes és nagy bútorüzemeknek' },
        body: {
          de: 'In einer mittelgroßen Möbelproduktion kommen häufig mehrere CNCs, Plattenaufteilsäge und Plattenlagerflächen zusammen. Die Fachwerkbrücke 2D verbindet alle Stationen flexibel — jede Station kann aus jeder Plattenstapel-Position beliefert werden, unabhängig von festen Transportwegen.',
          en: 'In a medium-sized furniture production, several CNCs, panel saws and panel storage areas often come together. The 2D truss bridge connects all stations flexibly — each station can be supplied from any panel stack position, independent of fixed transport routes.',
          cz: 'Ve střední nábytkářské výrobě se často sbíhají několik CNC, formátovací pily a skladové plochy desek. Rámová konstrukce 2D propojuje všechny stanice pružně — každá stanice může být zásobována z libovolné polohy stohu desek, nezávisle na pevných přepravních trasách.',
          sk: 'V strednej nábytkárskej výrobe sa často schádzajú niekoľko CNC, formátovacie píly a skladové plochy dosiek. Rámová konštrukcia 2D prepája všetky stanice pružne — každá stanica môže byť zásobovaná z ľubovoľnej polohy stohu dosiek, nezávisle od pevných prepravných trás.',
          hu: 'Egy közepes méretű bútorgyártásban gyakran több CNC, lapszabászgép és lapraktárterület találkozik. A 2D rácsos szerkezet rugalmasan összeköti az összes állomást — minden állomás ellátható bármely lapköteg-pozícióból, rögzített szállítási útvonalaktól függetlenül.',
        },
      },
      {
        heading: { de: 'Für chaotische Lagerbereiche', en: 'For chaotic storage areas', cz: 'Pro chaotické skladové zóny', sk: 'Pre chaotické skladové zóny', hu: 'Kaotikus tárolóterületekhez' },
        body: {
          de: 'Wenn Platten aus Platzgründen nicht nach festen Dekoren geordnet sind, sondern chaotisch eingelagert werden, braucht der Kran Zugriff auf jede Stapelposition. Die Fachwerkbrücke 2D ist hier die Basis für ein vollautomatisches Flächenlager nach dem CSF-Prinzip — oder arbeitet manuell-teilautomatisch für kleinere Betriebe.',
          en: 'When panels are stored chaotically for space reasons rather than sorted by fixed decors, the crane needs access to every stacking position. The 2D truss bridge is the basis for a fully automated flat-layout storage according to the CSF principle — or operates manually and semi-automatically for smaller operations.',
          cz: 'Pokud desky nejsou z prostorových důvodů tříděny podle pevných dekorů, ale skladovány chaoticky, jeřáb potřebuje přístup do každé stohovací polohy. Rámová konstrukce 2D je zde základem pro plně automatický plošný sklad podle principu CSF — nebo pracuje ručně či částečně automaticky pro menší provozy.',
          sk: 'Ak dosky nie sú z priestorových dôvodov triedené podľa pevných dekorov, ale skladované chaoticky, žeriav potrebuje prístup do každej stohovacej polohy. Rámová konštrukcia 2D je tu základom pre plne automatický plošný sklad podľa princípu CSF — alebo pracuje ručne či čiastočne automaticky pre menšie prevádzky.',
          hu: 'Ha a lapokat hely szűke miatt nem rögzített dekorok szerint, hanem kaotikusan tárolják, a darunak minden kötegelési pozícióhoz hozzáféréssel kell rendelkeznie. A 2D rácsos szerkezet itt a CSF elven működő, teljesen automatikus lapraktár alapja — vagy kisebb üzemekben kézi, illetve félautomata módon dolgozik.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die Fachwerkbrücke 2D ist die Standardwahl, wenn Sie eine ganze Hallenfläche abdecken müssen. Für reine Linear-Bewegungen reicht ein SSY Schienensystem und kostet weniger. Wenn Sie darüber hinaus mehrstufige Bewegungen brauchen (z. B. über Regalebenen hinweg), ist die Fachwerkbrücke 3D die richtige Wahl. Asamer berät welche Klasse zu Ihrem Layout passt.',
      en: 'The 2D truss bridge is the standard choice when you need to cover an entire hall area. For pure linear movements, an SSY rail system suffices and costs less. If you additionally need multi-level movements (e.g. across rack levels), the 3D truss bridge is the right choice. Asamer advises which class suits your layout.',
      cz: 'Rámová konstrukce 2D je standardní volbou, pokud potřebujete pokrýt celou plochu haly. Pro čistě lineární pohyby stačí SSY kolejnicový systém a stojí méně. Pokud navíc potřebujete víceúrovňové pohyby (např. přes regálové úrovně), je správnou volbou rámová konstrukce 3D. Asamer poradí, která třída odpovídá vašemu rozvržení.',
      sk: 'Rámová konštrukcia 2D je štandardnou voľbou, ak potrebujete pokryť celú plochu haly. Pre čisto lineárne pohyby stačí SSY koľajnicový systém a stojí menej. Ak navyše potrebujete viacúrovňové pohyby (napr. cez regálové úrovne), je správnou voľbou rámová konštrukcia 3D. Asamer poradí, ktorá trieda zodpovedá vášmu rozloženiu.',
      hu: 'A 2D rácsos szerkezet a szokásos választás, ha egy teljes csarnokterületet kell lefedni. Tisztán lineáris mozgásokhoz elegendő egy SSY sínrendszer, és kevesebbe kerül. Ha ezen felül több szintű mozgásokra van szüksége (pl. polcszintek között), a 3D rácsos szerkezet a megfelelő választás. Az Asamer tanácsot ad, hogy melyik osztály illik az Ön elrendezéséhez.',
    },
    faq: [
      {
        question: { de: 'Welche Hallengrößen deckt die 2D-Brücke ab?', en: 'What hall sizes does the 2D bridge cover?', cz: 'Jaké velikosti haly pokrývá 2D most?', sk: 'Aké veľkosti haly pokrýva 2D most?', hu: 'Milyen csarnokméreteket fed le a 2D híd?' },
        answer: {
          de: 'Typische Spannweiten liegen zwischen 8 und 25 Metern, die Längsbewegung kann deutlich mehr abdecken. Für sehr große Hallen werden bei Bedarf mehrere Brücken parallel betrieben.',
          en: 'Typical spans are between 8 and 25 metres; longitudinal travel can cover much more. For very large halls, several bridges are operated in parallel if required.',
          cz: 'Typická rozpětí jsou mezi 8 a 25 metry, podélný pohyb může pokrývat výrazně více. Pro velmi velké haly se v případě potřeby provozuje několik mostů paralelně.',
          sk: 'Typické rozpätia sú medzi 8 a 25 metrami, pozdĺžny pohyb môže pokrývať výrazne viac. Pre veľmi veľké haly sa v prípade potreby prevádzkuje niekoľko mostov paralelne.',
          hu: 'A tipikus fesztávok 8 és 25 méter között vannak, a hosszirányú mozgás jelentősen többet tud lefedni. Nagyon nagy csarnokokhoz szükség esetén több híd működik párhuzamosan.',
        },
      },
      {
        question: { de: 'Welche Hallenhöhe wird benötigt?', en: 'What hall height is required?', cz: 'Jaká výška haly je potřeba?', sk: 'Aká výška haly je potrebná?', hu: 'Milyen csarnokmagasság szükséges?' },
        answer: {
          de: 'Die 2D-Brücke benötigt etwa 5 bis 6 Meter freie Hallenhöhe über der obersten Arbeitsposition. In Hallen mit geringerer Höhe empfiehlt sich ein SSY Schienensystem oder eine niedriger bauende Sonderausführung.',
          en: 'The 2D bridge requires about 5 to 6 metres of clear hall height above the highest working position. In lower halls, an SSY rail system or a lower-profile special version is recommended.',
          cz: 'Rámová konstrukce 2D potřebuje asi 5 až 6 metrů volné výšky haly nad nejvyšší pracovní polohou. V nižších halách se doporučuje SSY kolejnicový systém nebo zvláštní provedení s menší konstrukční výškou.',
          sk: 'Rámová konštrukcia 2D potrebuje asi 5 až 6 metrov voľnej výšky haly nad najvyššou pracovnou polohou. V nižších halách sa odporúča SSY koľajnicový systém alebo zvláštne prevedenie s menšou konštrukčnou výškou.',
          hu: 'A 2D rácsos szerkezethez körülbelül 5-6 méter szabad csarnokmagasság szükséges a legmagasabb munkapozíció felett. Alacsonyabb csarnokokban az SSY sínrendszer vagy alacsonyabb kivitelű speciális változat ajánlott.',
        },
      },
      {
        question: { de: 'Kann die 2D-Brücke automatisch mit ERP kommunizieren?', en: 'Can the 2D bridge communicate automatically with ERP?', cz: 'Může 2D most automaticky komunikovat s ERP?', sk: 'Môže 2D most automaticky komunikovať s ERP?', hu: 'Tud automatikusan kommunikálni a 2D híd az ERP-vel?' },
        answer: {
          de: 'Ja — die Steuerung bietet Standard-Schnittstellen zu gängigen ERP- und MES-Systemen. Aufträge werden digital übergeben, Lager- und Fortschrittsdaten automatisch zurückgemeldet. Asamer koordiniert die IT-Anbindung.',
          en: 'Yes — the controller offers standard interfaces to common ERP and MES systems. Orders are handed over digitally, storage and progress data are automatically reported back. Asamer coordinates IT integration.',
          cz: 'Ano — řízení nabízí standardní rozhraní na běžné ERP a MES systémy. Zakázky se předávají digitálně, skladová a pokroková data se automaticky vrací. Asamer koordinuje IT napojení.',
          sk: 'Áno — riadenie ponúka štandardné rozhrania na bežné ERP a MES systémy. Zákazky sa odovzdávajú digitálne, skladové a pokrokové dáta sa automaticky vracajú. Asamer koordinuje IT napojenie.',
          hu: 'Igen — a vezérlés szabványos interfészeket kínál a bevett ERP és MES rendszerekhez. A megbízások digitálisan kerülnek átadásra, a raktári és haladási adatok automatikusan visszacsatolódnak. Az Asamer koordinálja az IT integrációt.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  VACUUM-CRANES — fachwerksbruecke-3d                                */
  /* ------------------------------------------------------------------ */
  'fachwerksbruecke-3d': {
    longDescription: {
      de: `Die Barbaric Fachwerkbrücke 3D ist die leistungsfähigste Vakuumkran-Variante — sie erweitert die 2D-Brücke um eine Z-Achse und ermöglicht so mehrstufige Bewegungen zwischen übereinanderliegenden Lagerebenen oder Arbeitshöhen. Typisch ist der Einsatz in vollautomatischen mehrstöckigen Flächenlagern (CSF Multilevel), in Hallen mit mehreren Arbeits-Plateaus oder bei Prozessen, die gleichzeitig die Plattenaufteilsäge und einen tieferliegenden Lackieranlagen-Einlauf bedienen sollen. Die Z-Achse bietet mehrere Hundert Millimeter bis mehrere Meter Hub, je nach Hallenauslegung. Der Kran ist präziser positionierbar als eine 2D-Brücke, dafür aber mechanisch komplexer, entsprechend höher im Anschaffungspreis und bedarf größerer Hallenhöhe. Asamer plant Fachwerkbrücken 3D für Industriebetriebe und mehrstöckige Plattenlager in Tschechien, Slowakei und Ungarn — inklusive statischer Auslegung, Software-Integration, ERP-Anbindung und Inbetriebnahme.`,
      en: `The Barbaric 3D truss bridge is the most capable vacuum crane variant — it extends the 2D bridge with a Z-axis, enabling multi-level movements between stacked storage levels or working heights. Typical applications are fully automatic multi-level flat-layout storage (CSF Multilevel), halls with multiple work plateaus or processes that must simultaneously serve the panel saw and a lower-positioned coating line infeed. The Z-axis offers several hundred millimetres up to several metres of stroke, depending on hall layout. The crane can be positioned more precisely than a 2D bridge but is mechanically more complex, accordingly higher in acquisition cost and requires more hall height. Asamer plans 3D truss bridges for industrial plants and multi-level panel storage in Czech Republic, Slovakia and Hungary — including structural dimensioning, software integration, ERP integration and commissioning.`,
      cz: `Barbaric rámová konstrukce 3D je nejvýkonnější variantou vakuového jeřábu — rozšiřuje 2D most o osu Z a umožňuje tak víceúrovňové pohyby mezi skladovými úrovněmi nebo pracovními výškami nad sebou. Typickým nasazením je plně automatický vícepodlažní plošný sklad (CSF Multilevel), haly s několika pracovními plošinami nebo procesy, které mají současně obsluhovat formátovací pilu a níže položený vstup do lakovací linky. Osa Z nabízí několik set milimetrů až několik metrů zdvihu podle rozvržení haly. Jeřáb lze polohovat přesněji než 2D most, je ale mechanicky složitější, odpovídajícím způsobem dražší v pořízení a vyžaduje větší výšku haly. Asamer projektuje rámové konstrukce 3D pro průmyslové provozy a vícepodlažní sklady desek v České republice, na Slovensku a v Maďarsku — včetně statického dimenzování, softwarové integrace, napojení na ERP a uvedení do provozu.`,
      sk: `Barbaric rámová konštrukcia 3D je najvýkonnejšou variantou vákuového žeriavu — rozširuje 2D most o os Z a umožňuje tak viacúrovňové pohyby medzi skladovými úrovňami alebo pracovnými výškami nad sebou. Typickým nasadením je plne automatický viacpodlažný plošný sklad (CSF Multilevel), haly s niekoľkými pracovnými plošinami alebo procesy, ktoré majú súčasne obsluhovať formátovaciu pílu a nižšie položený vstup do lakovacej linky. Os Z ponúka niekoľko stoviek milimetrov až niekoľko metrov zdvihu podľa rozloženia haly. Žeriav možno polohovať presnejšie než 2D most, je ale mechanicky zložitejší, zodpovedajúcim spôsobom drahší v obstarávaní a vyžaduje väčšiu výšku haly. Asamer projektuje rámové konštrukcie 3D pre priemyselné prevádzky a viacpodlažné sklady dosiek v Českej republike, na Slovensku a v Maďarsku — vrátane statického dimenzovania, softvérovej integrácie, napojenia na ERP a uvedenia do prevádzky.`,
      hu: `A Barbaric 3D rácsos szerkezet a legnagyobb teljesítményű vákuumdaru-változat — a 2D hidat Z-tengellyel egészíti ki, így többszintű mozgásokat tesz lehetővé az egymás feletti tárolószintek vagy munkamagasságok között. Tipikus alkalmazása a teljesen automatikus többszintes lapraktár (CSF Multilevel), a több munkaszinttel rendelkező csarnokok, illetve azok a folyamatok, amelyeknek egyszerre kell kiszolgálniuk a lapszabászgépet és egy alacsonyabban elhelyezett lakkozósor-bemenetet. A Z-tengely néhány száz millimétertől néhány méteres löketig terjed a csarnok elrendezésétől függően. A daru pontosabban pozicionálható, mint egy 2D híd, viszont mechanikusan összetettebb, ennek megfelelően magasabb beszerzési árú, és nagyobb csarnokmagasságot igényel. Az Asamer 3D rácsos szerkezeteket tervez ipari üzemek és többszintes lapraktárak számára Csehországban, Szlovákiában és Magyarországon — statikai méretezéssel, szoftverintegrációval, ERP csatlakoztatással és üzembe helyezéssel együtt.`,
    },
    applicationSections: [
      {
        heading: { de: 'Für mehrstöckige Lager (CSF Multilevel)', en: 'For multi-level storage (CSF Multilevel)', cz: 'Pro vícepodlažní sklady (CSF Multilevel)', sk: 'Pre viacpodlažné sklady (CSF Multilevel)', hu: 'Többszintes raktárakhoz (CSF Multilevel)' },
        body: {
          de: 'Ein mehrstöckiges Flächenlager nach dem CSF-Multilevel-Prinzip setzt die Fachwerkbrücke 3D voraus: Platten müssen von Ebene 1 zu Ebene 2 oder 3 transportiert werden, teilweise innerhalb einer Bewegung. Die Z-Achse übernimmt das vertikale Segment und übergibt an die eigentliche Lagerebene.',
          en: 'A multi-level flat-layout storage per the CSF Multilevel principle requires the 3D truss bridge: panels must be moved from level 1 to level 2 or 3, sometimes within one motion. The Z-axis handles the vertical segment and hands over to the actual storage level.',
          cz: 'Vícepodlažní plošný sklad podle principu CSF Multilevel předpokládá rámovou konstrukci 3D: desky musí být přepravovány z úrovně 1 na úroveň 2 nebo 3, částečně v rámci jednoho pohybu. Osa Z přebírá vertikální segment a předává do vlastní skladové úrovně.',
          sk: 'Viacpodlažný plošný sklad podľa princípu CSF Multilevel predpokladá rámovú konštrukciu 3D: dosky musia byť prepravované z úrovne 1 na úroveň 2 alebo 3, čiastočne v rámci jedného pohybu. Os Z preberá vertikálny segment a odovzdáva do vlastnej skladovej úrovne.',
          hu: 'A CSF Multilevel elv szerinti többszintes lapraktár feltételezi a 3D rácsos szerkezetet: a lapokat az 1. szintről a 2. vagy 3. szintre kell szállítani, részben egy mozgáson belül. A Z-tengely végzi a függőleges szakaszt, és átadja a tényleges tárolószintnek.',
        },
      },
      {
        heading: { de: 'Für komplexe Mehrprozess-Fertigung', en: 'For complex multi-process manufacturing', cz: 'Pro komplexní víceprocesní výrobu', sk: 'Pre komplexnú viacprocesnú výrobu', hu: 'Összetett, többfolyamatos gyártáshoz' },
        body: {
          de: 'Wenn Ihr Prozess mehrere Arbeitshöhen hat — etwa eine hochliegende Plattenaufteilsäge und einen tiefer gelegenen CNC-Arbeitstisch oder Lackiereinlauf — überbrückt die 3D-Brücke die Höhendifferenz prozesssicher. Das erspart zusätzliche Übergabeeinrichtungen oder Förderer.',
          en: 'If your process has multiple working heights — for example a high-positioned panel saw and a lower-positioned CNC worktable or coating infeed — the 3D bridge safely bridges the height difference. This saves additional handover equipment or conveyors.',
          cz: 'Pokud má váš proces více pracovních výšek — například výše položenou formátovací pilu a níže položený CNC pracovní stůl nebo vstup do lakování — rámová konstrukce 3D bezpečně překonává výškový rozdíl. To ušetří další předávací zařízení nebo dopravníky.',
          sk: 'Ak má váš proces viac pracovných výšok — napríklad vyššie položenú formátovaciu pílu a nižšie položený CNC pracovný stôl alebo vstup do lakovania — rámová konštrukcia 3D bezpečne prekonáva výškový rozdiel. To ušetrí ďalšie odovzdávacie zariadenia alebo dopravníky.',
          hu: 'Ha folyamatában több munkamagasság van — például egy magasabban elhelyezett lapszabászgép és egy alacsonyabb CNC munkaasztal vagy lakkozóbemenet —, a 3D híd biztonságosan áthidalja a magasságkülönbséget. Ez megkímél a további átadóegységektől vagy szállítószalagoktól.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Wählen Sie die Fachwerkbrücke 3D nur dann, wenn Sie tatsächlich mehrstufige Bewegungen benötigen — typisch für CSF Multilevel oder Prozesse mit deutlich unterschiedlichen Arbeitshöhen. Für einstufige Flächenabdeckung ist die 2D-Brücke rund 30 % günstiger und genügt in den meisten Anwendungen. Asamer klärt Z-Achsen-Anforderungen und Hallengeometrie vor dem Angebot im Detail ab.',
      en: 'Choose the 3D truss bridge only if you actually need multi-level movements — typical for CSF Multilevel or processes with significantly different working heights. For single-level area coverage, the 2D bridge costs around 30 % less and is sufficient in most applications. Before quoting, Asamer clarifies Z-axis requirements and hall geometry in detail.',
      cz: 'Zvolte rámovou konstrukci 3D pouze tehdy, pokud skutečně potřebujete víceúrovňové pohyby — typické pro CSF Multilevel nebo procesy s výrazně odlišnými pracovními výškami. Pro jednoúrovňové pokrytí plochy je 2D most zhruba o 30 % levnější a ve většině aplikací postačuje. Asamer před nabídkou detailně vyjasní požadavky osy Z a geometrii haly.',
      sk: 'Zvoľte rámovú konštrukciu 3D iba vtedy, ak skutočne potrebujete viacúrovňové pohyby — typické pre CSF Multilevel alebo procesy s výrazne odlišnými pracovnými výškami. Pre jednoúrovňové pokrytie plochy je 2D most zhruba o 30 % lacnejší a vo väčšine aplikácií postačuje. Asamer pred ponukou detailne vyjasní požiadavky osi Z a geometriu haly.',
      hu: 'A 3D rácsos szerkezetet csak akkor válassza, ha ténylegesen többszintű mozgásokra van szüksége — tipikusan CSF Multilevel esetén vagy jelentősen eltérő munkamagasságú folyamatoknál. Egyszintű területlefedéshez a 2D híd mintegy 30 %-kal olcsóbb és a legtöbb alkalmazásban elegendő. Az ajánlat előtt az Asamer részletesen tisztázza a Z-tengely követelményeit és a csarnokgeometriát.',
    },
    faq: [
      {
        question: { de: 'Wie groß kann der Z-Hub sein?', en: 'How large can the Z stroke be?', cz: 'Jak velký může být zdvih Z?', sk: 'Aký veľký môže byť zdvih Z?', hu: 'Mekkora lehet a Z-löket?' },
        answer: {
          de: 'Typisch zwischen 500 mm und 3 Metern. Größere Hübe sind möglich, erfordern aber eine entsprechende Hallenhöhe und verlängern die Taktzeit. Asamer legt den Hub nach Ihrer konkreten Anwendung aus.',
          en: 'Typically between 500 mm and 3 metres. Larger strokes are possible but require corresponding hall height and extend cycle time. Asamer dimensions the stroke based on your specific application.',
          cz: 'Typicky mezi 500 mm a 3 metry. Větší zdvihy jsou možné, ale vyžadují odpovídající výšku haly a prodlužují dobu cyklu. Asamer dimenzuje zdvih podle vaší konkrétní aplikace.',
          sk: 'Typicky medzi 500 mm a 3 metrami. Väčšie zdvihy sú možné, ale vyžadujú zodpovedajúcu výšku haly a predlžujú čas cyklu. Asamer dimenzuje zdvih podľa vašej konkrétnej aplikácie.',
          hu: 'Jellemzően 500 mm és 3 méter között. Nagyobb löketek lehetségesek, de megfelelő csarnokmagasságot igényelnek, és növelik a ciklusidőt. Az Asamer az Ön konkrét alkalmazása alapján méretezi a löketet.',
        },
      },
      {
        question: { de: 'Ist die 3D-Brücke langsamer als 2D?', en: 'Is the 3D bridge slower than 2D?', cz: 'Je 3D most pomalejší než 2D?', sk: 'Je 3D most pomalší než 2D?', hu: 'Lassabb a 3D híd, mint a 2D?' },
        answer: {
          de: 'In der horizontalen Bewegung ist die Geschwindigkeit vergleichbar. Die zusätzliche Z-Bewegung verlängert den Gesamttakt je nach Hub um wenige Sekunden — im Betrieb meist nicht kritisch, da die Z-Bewegung nur bei Etagenwechsel ausgeführt wird.',
          en: 'In horizontal motion, speed is comparable. The additional Z motion extends overall cycle by a few seconds depending on stroke — rarely critical in operation, as Z motion only occurs on level changes.',
          cz: 'V horizontálním pohybu je rychlost srovnatelná. Dodatečný pohyb Z prodlužuje celkový takt o několik sekund podle zdvihu — v provozu většinou není kritický, protože pohyb Z se provádí pouze při změně úrovně.',
          sk: 'V horizontálnom pohybe je rýchlosť porovnateľná. Dodatočný pohyb Z predlžuje celkový takt o niekoľko sekúnd podľa zdvihu — v prevádzke väčšinou nie je kritický, pretože pohyb Z sa vykonáva iba pri zmene úrovne.',
          hu: 'Vízszintes mozgásban a sebesség összehasonlítható. A kiegészítő Z mozgás a löket függvényében néhány másodperccel nyújtja meg a teljes ciklust — üzemben általában nem kritikus, mivel a Z mozgást csak szintváltáskor hajtják végre.',
        },
      },
      {
        question: { de: 'Lohnt sich 3D auch für kleine Betriebe?', en: 'Is 3D worthwhile for small operations too?', cz: 'Vyplatí se 3D i pro malé provozy?', sk: 'Oplatí sa 3D aj pre malé prevádzky?', hu: 'Megéri a 3D kis üzemek számára is?' },
        answer: {
          de: 'Selten — die Mehrinvestition gegenüber der 2D-Brücke rentiert sich erst ab mehrstufigen Lagerkonzepten oder echten Mehrhöhen-Prozessen. Kleine Tischlereien fahren mit einer 2D-Brücke oder einem SSY-System wirtschaftlicher.',
          en: 'Rarely — the additional investment over the 2D bridge pays off only with multi-level storage concepts or genuine multi-height processes. Small joineries operate more economically with a 2D bridge or an SSY system.',
          cz: 'Zřídka — přídavná investice oproti 2D mostu se vyplatí až u víceúrovňových skladových konceptů nebo skutečných procesů s více výškami. Malá truhlářství jezdí ekonomičtěji s 2D mostem nebo SSY systémem.',
          sk: 'Zriedka — prídavná investícia oproti 2D mostu sa oplatí až pri viacúrovňových skladových koncepciách alebo skutočných procesoch s viacerými výškami. Malé stolárstva jazdia ekonomickejšie s 2D mostom alebo SSY systémom.',
          hu: 'Ritkán — a 2D hídhoz képest többletberuházás csak többszintes tárolási koncepciók vagy valódi többmagasságú folyamatok esetén térül meg. A kis asztalosműhelyek gazdaságosabban működnek 2D híddal vagy SSY rendszerrel.',
        },
      },
    ],
  },
};

/* ====================================================================== */
/*  CATEGORY SEO CONTENT                                                  */
/* ====================================================================== */

export const BARBARIC_CATEGORY_SEO: Record<BarbaricCategory, CategorySeoContent> = {
  storage: {
    introExpanded: {
      de: `Barbaric Flächenlager automatisieren die Plattenlagerung in der Holz- und Möbelindustrie. Das Prinzip: Statt Platten manuell zu stapeln, zu suchen und zur Säge zu tragen, übernimmt ein deckenmontierter Kran mit Vakuumsaugern den gesamten Materialfluss. Platten werden chaotisch oder sortenrein eingelagert, digital verwaltet und just-in-time an Plattenaufteilsäge oder CNC-Bearbeitungszentrum geliefert. Das spart Personal, reduziert Plattenbruch und erhöht die Materialausnutzung. Für Tischlereien mit begrenztem Budget ist das CSF Professional die kompakte Einstiegslösung, das CSF Industrial bedient Hochleistungsbetriebe mit Zykluszeiten unter einer Minute, das CSF Multilevel bietet mehrstöckige Kapazitäten. Asamer plant und liefert Barbaric-Flächenlager für Tschechien, Slowakei und Ungarn — von der Layout-Konzeption über die ERP-Anbindung bis zur Inbetriebnahme und dem Wartungsvertrag. Eine wirtschaftliche Betrachtung zeigt: Bei mittleren bis großen Plattenumsätzen amortisiert sich das System typischerweise in 12 bis 24 Monaten.`,
      en: `Barbaric panel storage systems automate panel storage in wood and furniture industries. The principle: instead of stacking, searching and carrying panels manually, a ceiling-mounted crane with vacuum suction cups takes over the entire material flow. Panels are stored chaotically or by type, digitally managed and delivered just-in-time to panel saws or CNC machining centres. This saves labour, reduces panel damage and increases material utilisation. For joinery shops with limited budget, the CSF Professional is the compact entry solution, the CSF Industrial serves high-performance operations with cycle times below one minute, and the CSF Multilevel offers multi-storey capacities. Asamer plans and supplies Barbaric panel storage for Czech Republic, Slovakia and Hungary — from layout design through ERP integration to commissioning and maintenance contract. Economic analysis shows: at medium to large panel volumes, the system typically pays off in 12 to 24 months.`,
      cz: `Barbaric sklady desek automatizují skladování desek v dřevozpracujícím a nábytkářském průmyslu. Princip: místo manuálního stohování, hledání a přenášení desek k pile přebírá strop montovaný jeřáb s vakuovými přísavkami celý tok materiálu. Desky se skladují chaoticky nebo dle druhu, digitálně se spravují a dodávají just-in-time k formátovací pile nebo CNC obráběcímu centru. To šetří personál, snižuje poškození desek a zvyšuje využití materiálu. Pro truhlářství s omezeným rozpočtem je CSF Professional kompaktním vstupním řešením, CSF Industrial obsluhuje vysoce výkonné provozy s dobou cyklu pod jednu minutu, CSF Multilevel nabízí vícepodlažní kapacity. Asamer projektuje a dodává Barbaric sklady desek pro Českou republiku, Slovensko a Maďarsko — od návrhu rozvržení přes napojení na ERP až po zprovoznění a servisní smlouvu. Ekonomická analýza ukazuje: při středních až velkých objemech desek se systém obvykle vyplatí za 12 až 24 měsíců.`,
      hu: `A Barbaric lapraktár-rendszerek automatizálják a lapok tárolását a fa- és bútoriparban. Az elv: ahelyett, hogy a lapokat manuálisan kötegelnék, keresnék és a fűrészhez hordanák, egy mennyezetre szerelt daru vákuumos szívótárcsákkal átveszi a teljes anyagáramlást. A lapokat kaotikusan vagy fajtatisztán tárolják, digitálisan kezelik, és just-in-time szállítják a lapszabászgéphez vagy a CNC megmunkáló központhoz. Ez munkaerőt takarít meg, csökkenti a laptörést és növeli az anyagkihasználást. Korlátozott költségvetéssel rendelkező asztalosműhelyeknek a CSF Professional a kompakt belépő megoldás, a CSF Industrial az egy percnél rövidebb ciklusidejű, nagy teljesítményű üzemeket szolgálja ki, a CSF Multilevel többszintes kapacitásokat kínál. Az Asamer Barbaric lapraktárokat tervez és szállít Csehország, Szlovákia és Magyarország részére — az elrendezés tervezésétől az ERP integráción át az üzembe helyezésig és a karbantartási szerződésig. Gazdasági elemzés mutatja: közepes-nagy lapmennyiségnél a rendszer tipikusan 12-24 hónap alatt megtérül.`,
    },
    sections: [
      {
        heading: { de: 'Chaotische vs. sortenreine Lagerung', en: 'Chaotic vs. sorted storage', cz: 'Chaotické vs. třídění dle druhu', hu: 'Kaotikus vs. fajtatiszta tárolás' },
        body: {
          de: 'Chaotische Lagerung nutzt Flächen um bis zu 30 % besser aus als sortenreine Stapel: Jede Platte bekommt beim Einlagern einen digitalen Platz, unabhängig von Dekor oder Artikelnummer. Beim Abruf wird die gewünschte Platte über das Verwaltungssystem gezielt herausgeholt — keine Such- oder Umschichtvorgänge nötig.',
          en: 'Chaotic storage uses floor space up to 30 % better than sorted stacks: every panel receives a digital slot during storage, independent of décor or article number. On retrieval, the desired panel is retrieved specifically via the management system — no search or re-stacking necessary.',
          cz: 'Chaotické skladování využívá plochy až o 30 % lépe než třídění dle druhu: každá deska dostane při zaskladnění digitální místo nezávislé na dekoru nebo čísle položky. Při výběru se požadovaná deska cíleně vyhledá v řídicím systému — žádné hledání ani překládání.',
          hu: 'A kaotikus tárolás akár 30 %-kal jobban kihasználja a területeket, mint a fajtatiszta köteg: minden lap digitális helyet kap a tároláskor, a dekortól vagy cikkszámtól függetlenül. Kiadáskor a kívánt lap célzottan kerül ki a kezelőrendszeren keresztül — nincs keresés vagy átrendezés.',
        },
      },
      {
        heading: { de: 'ERP-Integration und Materialfluss', en: 'ERP integration and material flow', cz: 'Integrace ERP a tok materiálu', hu: 'ERP integráció és anyagáramlás' },
        body: {
          de: 'Barbaric-Flächenlager integrieren sich über OPC-UA, REST-API oder XML-Austausch nahtlos in SAP, Navision, proAlpha oder individuelle ERP-Systeme. Der Auftragsbestand aus dem ERP steuert die Materialbereitstellung automatisch; die Säge oder CNC bekommt exakt die richtige Platte zur richtigen Zeit.',
          en: 'Barbaric panel storage integrates seamlessly with SAP, Navision, proAlpha or custom ERP systems via OPC-UA, REST API or XML exchange. Order backlog from the ERP automatically controls material provision; the saw or CNC gets exactly the right panel at the right time.',
          cz: 'Barbaric sklady desek se bezproblémově integrují s SAP, Navision, proAlpha nebo individuálními ERP systémy přes OPC-UA, REST API nebo XML výměnu. Pořadí zakázek z ERP automaticky řídí přípravu materiálu; pila nebo CNC dostane přesně tu správnou desku ve správný čas.',
          hu: 'A Barbaric lapraktár-rendszerek zökkenőmentesen integrálódnak SAP, Navision, proAlpha vagy egyedi ERP rendszerekkel OPC-UA, REST API vagy XML csere révén. Az ERP rendelésállománya automatikusan vezérli az anyag-előkészítést; a fűrész vagy CNC pontosan a megfelelő lapot kapja a megfelelő időben.',
        },
      },
      {
        heading: { de: 'Welches CSF-Modell passt?', en: 'Which CSF model fits?', cz: 'Který model CSF je vhodný?', hu: 'Melyik CSF modell illik?' },
        body: {
          de: 'CSF Professional: kompakt, wirtschaftlich, für Tischlereien und Mittelbetriebe. CSF Industrial: Hochleistung, ERP-integriert, für industrielle Dauerbetriebe. CSF Multilevel: mehrstöckig, für sehr große Bestände auf begrenzter Grundfläche. Sonderanwendungen: individuelle Auslegungen für spezielle Materialien oder Layouts.',
          en: 'CSF Professional: compact, economical, for joinery shops and mid-sized operations. CSF Industrial: high-performance, ERP-integrated, for industrial continuous operations. CSF Multilevel: multi-storey, for very large inventories on limited floor space. Sonderanwendungen: individual designs for special materials or layouts.',
          cz: 'CSF Professional: kompaktní, ekonomický, pro truhlárny a středně velké provozy. CSF Industrial: vysoce výkonný, integrovaný s ERP, pro průmyslové nepřetržité provozy. CSF Multilevel: vícepodlažní, pro velmi velké zásoby na omezené ploše. Sonderanwendungen: individuální řešení pro speciální materiály nebo rozvržení.',
          hu: 'CSF Professional: kompakt, gazdaságos, asztalosműhelyeknek és középvállalatoknak. CSF Industrial: nagy teljesítményű, ERP-integrált, ipari folyamatos üzemekhez. CSF Multilevel: többszintes, nagyon nagy készletekhez korlátozott alapterületen. Sonderanwendungen: egyedi kivitelek speciális anyagokhoz vagy elrendezésekhez.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Was kostet ein automatisches Flächenlager?', en: 'What does an automatic panel storage system cost?', cz: 'Kolik stojí automatický sklad desek?', hu: 'Mennyibe kerül egy automatikus lapraktár?' },
        answer: {
          de: 'Der Preis hängt stark vom Layout, der Lagerkapazität und der Anbindung ab. Typische Investitionsrahmen liegen zwischen 150.000 und 500.000 Euro für CSF Professional, höher für Industrial und Multilevel. Asamer erstellt ein konkretes Angebot nach Hallenbesichtigung.',
          en: 'The price depends heavily on layout, storage capacity and connection. Typical investment ranges are between EUR 150,000 and 500,000 for CSF Professional, higher for Industrial and Multilevel. Asamer prepares a concrete quote after facility inspection.',
          cz: 'Cena silně závisí na rozvržení, skladové kapacitě a napojení. Typické investiční rozmezí je mezi 150.000 a 500.000 EUR pro CSF Professional, vyšší pro Industrial a Multilevel. Asamer zpracuje konkrétní nabídku po prohlídce zařízení.',
          hu: 'Az ár erősen függ az elrendezéstől, a tárolási kapacitástól és a csatlakoztatástól. Tipikus beruházási tartomány a CSF Professional esetében 150 000 és 500 000 EUR között van, az Industrial és Multilevel esetén magasabb. Az Asamer a csarnok megtekintése után készít konkrét ajánlatot.',
        },
      },
      {
        question: { de: 'Wie lange dauert die Installation?', en: 'How long does installation take?', cz: 'Jak dlouho trvá instalace?', hu: 'Mennyi ideig tart a telepítés?' },
        answer: {
          de: 'Je nach Größe: CSF Professional typischerweise 2–4 Wochen, CSF Industrial 6–12 Wochen. Die Produktionsumstellung wird phasenweise durchgeführt, sodass der laufende Betrieb nur minimal beeinträchtigt wird.',
          en: 'Depending on size: CSF Professional typically 2–4 weeks, CSF Industrial 6–12 weeks. Production changeover is done in phases so that ongoing operations are only minimally disrupted.',
          cz: 'Podle velikosti: CSF Professional obvykle 2–4 týdny, CSF Industrial 6–12 týdnů. Přestavba výroby se provádí ve fázích, takže běžný provoz je narušen jen minimálně.',
          hu: 'Mérettől függően: a CSF Professional tipikusan 2-4 hét, a CSF Industrial 6-12 hét. A termelés átállítását szakaszosan végzik, így a folyamatos üzemet csak minimálisan érinti.',
        },
      },
      {
        question: { de: 'Welcher Wartungsaufwand ist nötig?', en: 'What maintenance effort is required?', cz: 'Jaká je údržba?', hu: 'Milyen karbantartási igény van?' },
        answer: {
          de: 'Barbaric-Flächenlager sind wartungsarm. Typischer Aufwand: eine halbjährliche Inspektion (Schienen, Vakuumsauger, Steuerung) und eine jährliche Sicherheitsprüfung. Asamer bietet Wartungsverträge mit garantierten Reaktionszeiten für CZ, SK und HU.',
          en: 'Barbaric panel storage is low-maintenance. Typical effort: a semi-annual inspection (rails, vacuum cups, control) and an annual safety inspection. Asamer offers maintenance contracts with guaranteed response times for CZ, SK and HU.',
          cz: 'Barbaric sklady desek vyžadují málo údržby. Typická zátěž: pololetní kontrola (kolejnice, přísavky, řízení) a roční bezpečnostní kontrola. Asamer nabízí servisní smlouvy s garantovanými reakčními časy pro CZ, SK a HU.',
          hu: 'A Barbaric lapraktárak karbantartásigénye alacsony. Tipikus ráfordítás: félévenkénti ellenőrzés (sínek, szívótárcsák, vezérlés) és évenkénti biztonsági felülvizsgálat. Az Asamer karbantartási szerződéseket kínál garantált reakcióidőkkel Csehország, Szlovákia és Magyarország számára.',
        },
      },
    ],
  },

  feeding: {
    introExpanded: {
      de: `Barbaric Zuführsysteme beschicken Plattenaufteilsägen automatisiert mit dem richtigen Plattenmaterial zur richtigen Zeit. Statt dass ein Bediener jede Platte von Hand zur Säge trägt und einlegt, übernimmt das Zuführsystem diese Aufgabe — meist in Kombination mit einem Flächenlager und einer ERP-gesteuerten Auftragsverwaltung. Das spart Personal am Sägentisch, verhindert Materialverwechslungen und erhöht den Nettodurchsatz der Säge. Für industrielle Zuschnittbetriebe, die ihre Plattenaufteilsäge maximal ausnutzen wollen, sind Barbaric-Zuführsysteme die Schlüsseltechnologie. Asamer plant die Integration in Bestands- oder Neuanlagen für Tschechien, Slowakei und Ungarn — abgestimmt auf Sägen von Mayer, Holzma, Schelling oder anderer Hersteller.`,
      en: `Barbaric feeding systems automatically supply panel saws with the correct panel material at the right time. Instead of an operator manually carrying and loading every panel, the feeding system takes over this task — usually in combination with a panel storage and ERP-controlled order management. This saves personnel at the saw table, prevents material mix-ups and increases net saw throughput. For industrial cutting operations seeking maximum saw utilisation, Barbaric feeding systems are key technology. Asamer plans integration into existing or new installations for Czech Republic, Slovakia and Hungary — coordinated with saws from Mayer, Holzma, Schelling or other manufacturers.`,
      cz: `Barbaric podávací systémy automaticky dodávají formátovacím pilám správný deskový materiál ve správný čas. Místo aby obsluha ručně nosila každou desku k pile a vkládala ji, přebírá tuto úlohu podávací systém — obvykle v kombinaci se skladem desek a správou zakázek řízenou ERP. To šetří personál u stolu pily, zabraňuje záměnám materiálu a zvyšuje čistou průchodnost pily. Pro průmyslové řezací provozy, které chtějí maximálně využít svou formátovací pilu, jsou Barbaric podávací systémy klíčovou technologií. Asamer plánuje integraci do stávajících nebo nových zařízení pro Českou republiku, Slovensko a Maďarsko — sladěno s pilami od Mayer, Holzma, Schelling nebo jiných výrobců.`,
      hu: `A Barbaric betápláló rendszerek automatikusan látják el a lapszabászgépeket a megfelelő lapanyaggal a megfelelő időben. Ahelyett, hogy a kezelő minden lapot kézzel vinne a fűrészhez és rakna be, a betápláló rendszer veszi át ezt a feladatot — általában lapraktárral és ERP-vezérelt rendeléskezeléssel kombinálva. Ez munkaerőt takarít meg a fűrészasztalnál, megakadályozza az anyagcserét és növeli a fűrész nettó áteresztőképességét. A lapszabászgépük maximális kihasználására törekvő ipari szabászati üzemek számára a Barbaric betápláló rendszerek kulcstechnológiát jelentenek. Az Asamer tervezi a meglévő vagy új berendezésekbe történő integrációt Csehország, Szlovákia és Magyarország részére — Mayer, Holzma, Schelling vagy más gyártók fűrészeihez illeszkedve.`,
    },
    sections: [
      {
        heading: { de: 'Kombination mit Flächenlager', en: 'Combination with panel storage', cz: 'Kombinace se skladem desek', hu: 'Kombináció lapraktárral' },
        body: {
          de: 'Zuführsysteme arbeiten am wirtschaftlichsten im Verbund mit einem Barbaric-Flächenlager (CSF-Serie). Das Lager hält den Plattenbestand vor, das Zuführsystem realisiert die sortierte Übergabe an die Säge. Bei ERP-Integration erhält der Sägenbediener nur noch Sichtkontrolle und Ausschuss-Sortierung als manuelle Aufgaben.',
          en: 'Feeding systems work most economically in combination with a Barbaric panel storage (CSF series). The storage holds the panel inventory; the feeding system handles sorted transfer to the saw. With ERP integration, the saw operator only performs visual inspection and reject sorting as manual tasks.',
          cz: 'Podávací systémy pracují nejekonomičtěji v kombinaci se skladem desek Barbaric (řada CSF). Sklad drží zásobu desek, podávací systém realizuje tříděnou dodávku k pile. Při integraci ERP obsluha pily provádí jen vizuální kontrolu a třídění odpadu jako manuální úkoly.',
          hu: 'A betápláló rendszerek leggazdaságosabban Barbaric lapraktárral (CSF sorozat) együtt működnek. A raktár előtartja a lapkészletet, a betápláló rendszer valósítja meg a válogatott átadást a fűrészhez. ERP integrációval a fűrészkezelő már csak vizuális ellenőrzést és selejtválogatást végez manuális feladatként.',
        },
      },
      {
        heading: { de: 'Durchsatz-Gewinn durch automatische Beschickung', en: 'Throughput gain through automatic feeding', cz: 'Zvýšení průchodnosti automatickým podáváním', hu: 'Áteresztőképesség-nyereség automatikus betáplálással' },
        body: {
          de: 'Manuelle Beschickung einer Plattenaufteilsäge dauert je nach Plattenformat 30–90 Sekunden — Zeit, in der die Säge steht. Mit Zuführsystem verkürzt sich diese Zeit auf wenige Sekunden, der Nettodurchsatz steigt typischerweise um 15–30 %. Bei Zweischichtbetrieb macht sich der Durchsatz-Gewinn schnell in Hunderten Euro täglich bemerkbar.',
          en: 'Manual loading of a panel saw takes 30–90 seconds depending on panel format — time during which the saw is idle. With a feeding system, this time shortens to a few seconds; net throughput typically increases by 15–30 %. In two-shift operation, the throughput gain quickly shows up in hundreds of euros per day.',
          cz: 'Ruční zakládání formátovací pily trvá podle formátu desky 30–90 sekund — dobu, kdy pila stojí. S podávacím systémem se tento čas zkrátí na několik sekund, čistá průchodnost obvykle vzroste o 15–30 %. Při dvousmenném provozu se zisk průchodnosti rychle projeví ve stovkách eur denně.',
          hu: 'Egy lapszabászgép manuális betöltése a lap formátumától függően 30-90 másodpercig tart — ez idő alatt a fűrész áll. Betápláló rendszerrel ez az idő néhány másodpercre rövidül, a nettó áteresztőképesség jellemzően 15-30 %-kal nő. Kétműszakos üzemben az áteresztőképesség-nyereség gyorsan napi több száz euróban mutatkozik meg.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Welche Plattenaufteilsägen lassen sich anbinden?', en: 'Which panel saws can be connected?', cz: 'Jaké formátovací pily lze připojit?', hu: 'Milyen lapszabászgépek csatlakoztathatók?' },
        answer: {
          de: 'Alle marktrelevanten Hersteller: Mayer Kappa, Holzma HPP/HPS, Schelling FM/FH, Biesse Selco, SCM Sigma. Bei Bestandsmaschinen prüft Asamer die Schnittstelle im Vorfeld.',
          en: 'All market-relevant manufacturers: Mayer Kappa, Holzma HPP/HPS, Schelling FM/FH, Biesse Selco, SCM Sigma. For existing machines, Asamer checks the interface in advance.',
          cz: 'Všichni významní výrobci: Mayer Kappa, Holzma HPP/HPS, Schelling FM/FH, Biesse Selco, SCM Sigma. U stávajících strojů Asamer zkontroluje rozhraní předem.',
          hu: 'Minden piaci szempontból releváns gyártó: Mayer Kappa, Holzma HPP/HPS, Schelling FM/FH, Biesse Selco, SCM Sigma. Meglévő gépeknél az Asamer előzetesen ellenőrzi a csatlakozási felületet.',
        },
      },
      {
        question: { de: 'Welche Platten-Formate werden unterstützt?', en: 'Which panel formats are supported?', cz: 'Jaké formáty desek jsou podporovány?', hu: 'Milyen lapformátumok támogatottak?' },
        answer: {
          de: 'Standardformate bis 2,5 × 5,6 m werden von allen Barbaric-Zuführsystemen abgedeckt. Überformate erfordern Sonderauslegungen.',
          en: 'Standard formats up to 2.5 × 5.6 m are covered by all Barbaric feeding systems. Oversized formats require special designs.',
          cz: 'Standardní formáty do 2,5 × 5,6 m pokrývají všechny podávací systémy Barbaric. Nadměrné formáty vyžadují speciální návrhy.',
          hu: 'A 2,5 × 5,6 m-ig terjedő standard formátumokat az összes Barbaric betápláló rendszer lefedi. A túlméretes formátumok egyedi kiviteleket igényelnek.',
        },
      },
      {
        question: { de: 'Rechnet sich ein Zuführsystem ohne Flächenlager?', en: 'Does a feeding system pay off without panel storage?', cz: 'Vyplatí se podávací systém bez skladu desek?', hu: 'Megtérül-e a betápláló rendszer lapraktár nélkül?' },
        answer: {
          de: 'Ja, wenn Sie ein vorhandenes Zwischenlager mit LKW-Anlieferung und Bediener-Entnahme haben. Das Zuführsystem beschickt die Säge dann aus dem Zwischenlager. Wirtschaftlich ist das ab mittleren Tagesdurchsätzen von 50+ Platten.',
          en: 'Yes, if you have an existing intermediate storage with truck delivery and operator retrieval. The feeding system then supplies the saw from the intermediate storage. This is economical from medium daily throughputs of 50+ panels.',
          cz: 'Ano, pokud máte stávající mezisklad s dodávkou kamionem a odběrem obsluhou. Podávací systém pak zásobuje pilu z meziskladu. Ekonomické to je od středních denních průtoků 50+ desek.',
          hu: 'Igen, ha van meglévő közbenső raktáruk kamionos beszállítással és kezelői kivétellel. A betápláló rendszer ekkor a közbenső raktárból látja el a fűrészt. Ez legalább napi 50 lap közepes áteresztőképességtől gazdaságos.',
        },
      },
    ],
  },

  nesting: {
    introExpanded: {
      de: `Barbaric Nesting-Picker entnehmen fertig zugeschnittene Teile automatisiert aus der Nesting-CNC, sortieren sie und stapeln auftragsweise. Damit wird die Nesting-Zelle vollautomatisch: Die CNC zerschneidet das Plattenmaterial in alle benötigten Teile, der Nesting-Picker hebt sie ab und ordnet sie dem richtigen Auftrag zu. Der Vorteil: Keine manuelle Teilentnahme, keine Sortierfehler, kürzere CNC-Stillstandszeiten. Der LCV Performance ist Barbaric-Standardmodell für Möbelhersteller; der NST-Nesting-Picker ist die Kompaktlösung. Asamer integriert Barbaric-Nesting-Picker für CZ, SK und HU in Bestandsanlagen von Homag, Biesse, SCM oder anderen Nesting-Herstellern — inklusive Softwareanbindung und Kameraprogrammierung.`,
      en: `Barbaric nesting pickers automatically retrieve finished cut parts from the nesting CNC, sort them and stack them by order. This makes the nesting cell fully automatic: the CNC cuts the panel material into all required parts, the nesting picker lifts them off and assigns them to the correct order. The advantage: no manual part removal, no sorting errors, shorter CNC downtimes. The LCV Performance is the Barbaric standard model for furniture manufacturers; the NST nesting picker is the compact solution. Asamer integrates Barbaric nesting pickers for CZ, SK and HU into existing installations from Homag, Biesse, SCM or other nesting manufacturers — including software integration and camera programming.`,
      cz: `Barbaric nesting pickery automaticky odebírají hotové vyřezané díly z nesting CNC, třídí je a stohují podle zakázek. Tím se nesting buňka stává plně automatickou: CNC rozřeže deskový materiál na všechny potřebné díly, nesting picker je odebírá a přiřazuje správné zakázce. Výhoda: žádný ruční odběr dílů, žádné chyby třídění, kratší prostoje CNC. LCV Performance je standardní model Barbaric pro výrobce nábytku; NST nesting picker je kompaktní řešení. Asamer integruje Barbaric nesting pickery pro CZ, SK a HU do stávajících zařízení od Homag, Biesse, SCM nebo jiných výrobců nesting strojů — včetně softwarové integrace a programování kamer.`,
      hu: `A Barbaric nesting-válogatók automatikusan kiveszik a kész kivágott darabokat a nesting CNC-ről, szétválogatják és rendelésenként kötegelik. Ezzel a nesting cella teljesen automatikussá válik: a CNC minden szükséges darabra vágja a lapanyagot, a nesting szedő kiemeli őket és a megfelelő rendeléshez rendeli. Az előny: nincs manuális darabkivétel, nincsenek válogatási hibák, rövidebbek a CNC leállási idők. Az LCV Performance a Barbaric szabványmodellje bútorgyártóknak; az NST nesting-válogató a kompakt megoldás. Az Asamer Barbaric nesting-válogatókat integrál Csehország, Szlovákia és Magyarország területén a Homag, Biesse, SCM vagy más nesting-gyártók meglévő berendezéseibe — szoftveres integrációval és kameraprogramozással együtt.`,
    },
    sections: [
      {
        heading: { de: 'Nesting-Picker vs. manuelle Teilentnahme', en: 'Nesting picker vs. manual part removal', cz: 'Nesting picker vs. manuální odběr dílů', hu: 'Nesting-válogató vs. manuális darabkivétel' },
        body: {
          de: 'Manuelle Teilentnahme aus der Nesting-CNC kostet 2–5 Minuten pro Plattenzyklus — plus Fehler beim Sortieren. Ein Nesting-Picker erledigt die Aufgabe in Sekunden, sortiert fehlerfrei und entlastet den Operator für Vorbereitungsaufgaben. Die Amortisation liegt typischerweise bei 1,5 bis 2,5 Jahren.',
          en: 'Manual part removal from the nesting CNC costs 2–5 minutes per panel cycle — plus sorting errors. A nesting picker handles the task in seconds, sorts error-free and relieves the operator for preparation tasks. Payback is typically 1.5 to 2.5 years.',
          cz: 'Manuální odběr dílů z nesting CNC stojí 2–5 minut na cyklus desky — plus chyby při třídění. Nesting picker provede úlohu za sekundy, třídí bezchybně a uvolní operátora pro přípravné úkoly. Návratnost je obvykle 1,5 až 2,5 roku.',
          hu: 'A nesting CNC-ről történő manuális darabkivétel lapciklusonként 2-5 percbe kerül — plus válogatási hibák. Egy nesting-válogató másodpercek alatt végzi el a feladatot, hibamentesen válogat és felszabadítja az operátort az előkészítő feladatokhoz. A megtérülés tipikusan 1,5-2,5 év.',
        },
      },
      {
        heading: { de: 'Kamerasystem und CNC-Datenübergabe', en: 'Camera system and CNC data exchange', cz: 'Kamerový systém a přenos dat CNC', hu: 'Kamerarendszer és CNC adatátvitel' },
        body: {
          de: 'Barbaric-Nesting-Picker erkennen Teile auf zwei Wegen: per Kamerasystem (Bildverarbeitung erkennt Kontur und Position) oder per direkter Datenübergabe aus der Nesting-CNC (Teilenummern und Koordinaten). Asamer stimmt die richtige Methode individuell mit Ihrer Nesting-Software ab.',
          en: 'Barbaric nesting pickers detect parts in two ways: via camera system (image processing recognises contour and position) or via direct data exchange from the nesting CNC (part numbers and coordinates). Asamer coordinates the right method individually with your nesting software.',
          cz: 'Barbaric nesting pickery rozpoznávají díly dvěma způsoby: kamerovým systémem (zpracování obrazu rozpozná obrys a polohu) nebo přímým přenosem dat z nesting CNC (čísla dílů a souřadnice). Asamer koordinuje správnou metodu individuálně s vaším nesting softwarem.',
          hu: 'A Barbaric nesting-válogatók kétféleképpen ismerik fel a darabokat: kamerarendszerrel (képfeldolgozás ismeri fel a kontúrt és pozíciót) vagy közvetlen adatátvitellel a nesting CNC-ről (darabszámok és koordináták). Az Asamer a megfelelő módszert egyedileg egyezteti az Ön nesting szoftverével.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Welche Teilegrößen lassen sich picken?', en: 'What part sizes can be picked?', cz: 'Jaké velikosti dílů lze pickovat?', hu: 'Milyen darabméretek válogathatók?' },
        answer: {
          de: 'Standardbereich 80 × 80 mm bis 2500 × 1500 mm. Kleinere Teile sind mit Sonderanwendungen möglich.',
          en: 'Standard range 80 × 80 mm to 2500 × 1500 mm. Smaller parts are possible with special applications.',
          cz: 'Standardní rozsah 80 × 80 mm až 2500 × 1500 mm. Menší díly jsou možné se speciálními aplikacemi.',
          hu: 'Szabványos tartomány 80 × 80 mm-től 2500 × 1500 mm-ig. Kisebb darabok egyedi alkalmazásokkal lehetségesek.',
        },
      },
      {
        question: { de: 'Wie viele Aufträge parallel?', en: 'How many parallel orders?', cz: 'Kolik zakázek paralelně?', hu: 'Hány rendelés párhuzamosan?' },
        answer: {
          de: 'Typisch 10–20 parallele Aufträge, mit Puffer deutlich mehr.',
          en: 'Typically 10–20 parallel orders, significantly more with buffer.',
          cz: 'Obvykle 10–20 paralelních zakázek, s pufrem výrazně více.',
          hu: 'Tipikusan 10-20 párhuzamos rendelés, pufferrel jelentősen több.',
        },
      },
      {
        question: { de: 'Geht das auch retro an bestehender CNC?', en: 'Can this be retrofitted to existing CNC?', cz: 'Lze to dovybavit ke stávajícímu CNC?', hu: 'Utólag felszerelhető meglévő CNC-re?' },
        answer: {
          de: 'Ja — Barbaric-Nesting-Picker lassen sich an gängige CNC-Hersteller (Homag, Biesse, SCM, IMA) nachrüsten. Asamer prüft die Schnittstelle in der Vorplanung.',
          en: 'Yes — Barbaric nesting pickers can be retrofitted to common CNC manufacturers (Homag, Biesse, SCM, IMA). Asamer checks the interface during pre-planning.',
          cz: 'Ano — Barbaric nesting pickery lze dovybavit u běžných výrobců CNC (Homag, Biesse, SCM, IMA). Asamer zkontroluje rozhraní v předběžném plánování.',
          hu: 'Igen — a Barbaric nesting-válogatók utólag felszerelhetők a gyakori CNC gyártókhoz (Homag, Biesse, SCM, IMA). Az Asamer az előzetes tervezés során ellenőrzi a csatlakozási felületet.',
        },
      },
    ],
  },

  return: {
    introExpanded: {
      de: `Barbaric Rückführsysteme (RTS) transportieren fertig bearbeitete Werkstücke automatisch zum Maschinenbediener zurück. Typische Anwendung: Kantenanleimmaschinen, wo der Bediener nach jedem Durchlauf das Werkstück um die Maschine herum tragen müsste. Mit dem RTS übernimmt ein Förderer diese Aufgabe — der Bediener kann Ein- und Ausgabe von derselben Position aus bedienen, was Einmannbetrieb ermöglicht und Personalressourcen für andere Aufgaben freisetzt. RTS Compact ist die platzsparende Einstiegslösung, RTS Professional der bewährte Tischlerei-Standard, RTS Industrial die Hochleistungsvariante für Dauerbetrieb. Asamer plant, liefert und montiert Barbaric-Rückführsysteme für Kantenanleimmaschinen aller Hersteller — OTT, Homag, Felder, Biesse, SCM — in CZ, SK und HU.`,
      en: `Barbaric return systems (RTS) automatically transport finished workpieces back to the machine operator. Typical application: edgebanding machines where the operator would otherwise need to carry the workpiece around the machine after each pass. With the RTS, a conveyor takes over this task — the operator can handle input and output from the same position, enabling one-man operation and freeing personnel resources for other tasks. RTS Compact is the space-saving entry solution, RTS Professional the proven joinery standard, RTS Industrial the high-performance variant for continuous operation. Asamer plans, delivers and installs Barbaric return systems for edgebanders of all manufacturers — OTT, Homag, Felder, Biesse, SCM — in CZ, SK and HU.`,
      cz: `Barbaric návratové systémy (RTS) automaticky přepravují hotové obrobky zpět k obsluze stroje. Typická aplikace: olepovačky hran, kde by obsluha musela po každém průchodu obrobek přenést kolem stroje. S RTS přebírá tuto úlohu dopravník — obsluha může vstup a výstup obsluhovat ze stejné pozice, což umožňuje provoz jednoho pracovníka a uvolňuje personální kapacity pro jiné úkoly. RTS Compact je úsporné vstupní řešení, RTS Professional osvědčený truhlářský standard, RTS Industrial vysoce výkonná varianta pro nepřetržitý provoz. Asamer plánuje, dodává a montuje Barbaric návratové systémy pro olepovačky hran všech výrobců — OTT, Homag, Felder, Biesse, SCM — v CZ, SK a HU.`,
      hu: `A Barbaric visszavezető rendszerek (RTS) automatikusan visszaszállítják a kész munkadarabokat a gép kezelőjéhez. Tipikus alkalmazás: élzárógépek, ahol a kezelőnek minden áthaladás után a gép körül kellene vinnie a munkadarabot. Az RTS esetében egy szállítószalag veszi át ezt a feladatot — a kezelő ugyanazon helyzetből kezelheti a be- és kimenetet, ami egyszemélyes üzemet tesz lehetővé és személyzeti kapacitást szabadít fel más feladatokra. Az RTS Compact helytakarékos belépő megoldás, az RTS Professional a bevált asztalos szabvány, az RTS Industrial a folyamatos üzemhez való nagy teljesítményű változat. Az Asamer Barbaric visszavezető rendszereket tervez, szállít és szerel az összes gyártó — OTT, Homag, Felder, Biesse, SCM — élzárógépeihez Csehország, Szlovákia és Magyarország területén.`,
    },
    sections: [
      {
        heading: { de: 'Wann rechnet sich ein RTS?', en: 'When does an RTS pay off?', cz: 'Kdy se vyplatí RTS?', hu: 'Mikor térül meg egy RTS?' },
        body: {
          de: 'Ab mittlerem Tagesdurchsatz von 100–200 Teilen amortisiert sich das RTS in 12–24 Monaten durch Personalentlastung. Entscheidend ist, dass der freigesetzte Mitarbeiter eine produktive Folgeaufgabe übernimmt, nicht nur daneben steht.',
          en: 'From medium daily throughput of 100–200 parts, the RTS pays off in 12–24 months through personnel relief. Crucial: the freed employee must take on a productive follow-up task, not just stand idle.',
          cz: 'Od středního denního průtoku 100–200 dílů se RTS vyplatí za 12–24 měsíců díky odlehčení personálu. Zásadní je, aby uvolněný pracovník převzal produktivní následnou úlohu, ne jen stál vedle.',
          hu: '100-200 darabos közepes napi áteresztőképességtől az RTS 12-24 hónap alatt megtérül a személyzeti tehermentesítés révén. Döntő: a felszabadult munkavállalónak produktív követő feladatot kell átvennie, nem csak tétlenül állnia.',
        },
      },
      {
        heading: { de: 'RTS Compact vs. Professional vs. Industrial', en: 'RTS Compact vs. Professional vs. Industrial', cz: 'RTS Compact vs. Professional vs. Industrial', hu: 'RTS Compact vs. Professional vs. Industrial' },
        body: {
          de: 'RTS Compact (platzsparend, Einstieg) — RTS Professional (mittlerer Durchsatz, flexibel) — RTS Industrial (Hochleistung, Dauerbetrieb). Teilehandling-Systeme ergänzen das RTS um Drehen, Wenden oder Stapeln.',
          en: 'RTS Compact (space-saving, entry) — RTS Professional (medium throughput, flexible) — RTS Industrial (high-performance, continuous). Teilehandling systems supplement the RTS with turning, flipping or stacking.',
          cz: 'RTS Compact (úsporné, vstup) — RTS Professional (střední průtok, flexibilní) — RTS Industrial (vysoký výkon, nepřetržitý provoz). Systémy Teilehandling doplňují RTS o otáčení, překlápění nebo stohování.',
          hu: 'RTS Compact (helytakarékos, belépő) — RTS Professional (közepes áteresztőképesség, rugalmas) — RTS Industrial (nagy teljesítmény, folyamatos üzem). A darabkezelési rendszerek forgatással, átfordítással vagy kötegeléssel egészítik ki az RTS-t.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Passt das RTS zu meiner Kantenleimmaschine?', en: 'Does the RTS fit my edgebander?', cz: 'Hodí se RTS k mé olepovačce?', hu: 'Illik az RTS az élzárógépemhez?' },
        answer: {
          de: 'Ja — RTS-Systeme sind mit allen gängigen Kantenleimmaschinen kompatibel. Asamer prüft die Schnittstelle vorab.',
          en: 'Yes — RTS systems are compatible with all common edgebanders. Asamer verifies the interface in advance.',
          cz: 'Ano — systémy RTS jsou kompatibilní se všemi běžnými olepovačkami hran. Asamer ověří rozhraní předem.',
          hu: 'Igen — az RTS rendszerek az összes gyakori élzárógéppel kompatibilisek. Az Asamer előzetesen ellenőrzi a csatlakozási felületet.',
        },
      },
      {
        question: { de: 'Welchen Platzbedarf hat das RTS?', en: 'What is the space requirement for the RTS?', cz: 'Jaký je prostorový nárok RTS?', hu: 'Mekkora az RTS helyigénye?' },
        answer: {
          de: 'Typischer Platzbedarf: 2–3 m Rückführlänge plus Maschinenlänge. Mit L- oder U-Anordnung lässt sich der Footprint optimieren.',
          en: 'Typical space requirement: 2–3 m return length plus machine length. With L- or U-arrangement, footprint can be optimised.',
          cz: 'Typický prostorový nárok: 2–3 m délky návratu plus délka stroje. S uspořádáním do L nebo U lze stopu optimalizovat.',
          hu: 'Tipikus helyigény: 2-3 m visszavezető hossz plus gép hossza. L vagy U elrendezéssel a lábnyom optimalizálható.',
        },
      },
      {
        question: { de: 'Gibt es Wartungsverträge?', en: 'Are maintenance contracts available?', cz: 'Jsou k dispozici servisní smlouvy?', hu: 'Vannak karbantartási szerződések?' },
        answer: {
          de: 'Ja — Asamer bietet Wartungsverträge mit jährlicher Inspektion und definierten Reaktionszeiten.',
          en: 'Yes — Asamer offers maintenance contracts with annual inspection and defined response times.',
          cz: 'Ano — Asamer nabízí servisní smlouvy s roční inspekcí a definovanými reakčními časy.',
          hu: 'Igen — az Asamer karbantartási szerződéseket kínál évenkénti ellenőrzéssel és meghatározott reakcióidőkkel.',
        },
      },
    ],
  },

  buffer: {
    introExpanded: {
      de: `Barbaric Pufferförderer (TMP) entkoppeln aufeinanderfolgende Bearbeitungsstationen und ermöglichen einen kontinuierlichen Materialfluss auch bei unterschiedlichen Taktzeiten. Zwischen Plattenaufteilsäge und Kantenanleimmaschine, zwischen Nesting-CNC und Lackierlinie oder zwischen Montagezellen sorgt ein TMP-Pufferförderer dafür, dass nachgelagerte Stationen nicht auf Nachschub warten — und vorgelagerte Stationen nicht durch volle Bänder blockiert werden. Für Möbelhersteller und Zuschnittbetriebe ist der TMP die Schlüsseltechnik zur Fertigungsstabilität. Asamer plant Pufferförderer für Kunden in CZ, SK und HU als integralen Bestandteil durchgängiger Produktionslinien.`,
      en: `Barbaric buffer conveyors (TMP) decouple consecutive processing stations and enable continuous material flow even with different cycle times. Between panel saw and edgebander, between nesting CNC and paint line or between assembly cells, a TMP buffer conveyor ensures that downstream stations don't wait for supply — and upstream stations aren't blocked by full belts. For furniture manufacturers and cutting operations, the TMP is key technology for production stability. Asamer plans buffer conveyors for customers in CZ, SK and HU as an integral part of continuous production lines.`,
      cz: `Barbaric pufrovací dopravníky (TMP) oddělují navazující zpracovatelské stanice a umožňují souvislý tok materiálu i při různých dobách taktu. Mezi formátovací pilou a olepovačkou hran, mezi nesting CNC a lakovací linkou nebo mezi montážními buňkami zajišťuje TMP pufrovací dopravník, aby následné stanice nečekaly na dodávku — a předcházející stanice nebyly blokovány plnými pásy. Pro výrobce nábytku a řezací provozy je TMP klíčovou technologií výrobní stability. Asamer projektuje pufrovací dopravníky pro zákazníky v CZ, SK a HU jako nedílnou součást průběžných výrobních linek.`,
      hu: `A Barbaric puffer szállítók (TMP) szétválasztják az egymást követő feldolgozóállomásokat, és folyamatos anyagáramlást tesznek lehetővé eltérő ciklusidők esetén is. Lapszabászgép és élzárógép között, nesting CNC és festősor között, vagy szerelőcellák között egy TMP puffer szállító biztosítja, hogy az utánaláncolt állomások ne várjanak ellátásra — és az előttük álló állomásokat ne blokkolják teli szalagok. Bútorgyártók és szabászati üzemek számára a TMP a gyártási stabilitás kulcstechnológiája. Az Asamer puffer szállítókat tervez csehországi, szlovákiai és magyarországi ügyfelek számára folyamatos gyártósorok szerves részeként.`,
    },
    sections: [
      {
        heading: { de: 'Wann braucht man einen Pufferförderer?', en: 'When do you need a buffer conveyor?', cz: 'Kdy potřebujete pufrovací dopravník?' },
        body: {
          de: 'Sobald zwei Bearbeitungsstationen unterschiedliche Taktzeiten haben, entstehen Stillstände: Die schnellere Station wartet, die langsamere staut zurück. Ein TMP puffert Werkstücke zwischen den Stationen und lässt beide in ihrem eigenen Takt arbeiten.',
          en: 'As soon as two processing stations have different cycle times, downtimes occur: the faster station waits, the slower one backs up. A TMP buffers workpieces between stations and lets both work at their own pace.',
          cz: 'Jakmile mají dvě zpracovatelské stanice různé doby taktu, vznikají prostoje: rychlejší stanice čeká, pomalejší se zasekává. TMP pufruje obrobky mezi stanicemi a nechává obě pracovat vlastním tempem.',
          hu: 'Amint két feldolgozóállomás eltérő ciklusidőkkel dolgozik, állásidők keletkeznek: a gyorsabb állomás vár, a lassabb feltorlódik. A TMP a munkadarabokat az állomások között puffereli, így mindkettő saját ütemében dolgozhat.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Wie viele Werkstücke kann ein TMP puffern?', en: 'How many workpieces can a TMP buffer?', cz: 'Kolik obrobků může TMP pufrovat?' },
        answer: {
          de: 'Je nach Länge 5–50 Werkstücke. Die Auslegung richtet sich nach Taktzeit-Unterschied und gewünschter Ausfall-Toleranz.',
          en: 'Depending on length, 5–50 workpieces. Sizing depends on cycle time difference and desired failure tolerance.',
          cz: 'Podle délky 5–50 obrobků. Návrh závisí na rozdílu doby taktu a požadované toleranci výpadku.',
          hu: 'Hossztól függően 5–50 munkadarab. A méretezés a ciklusidő-különbségtől és a kívánt kiesés-toleranciától függ.',
        },
      },
      {
        question: { de: 'Ist ein TMP an jeder Maschinenkombination sinnvoll?', en: 'Does a TMP make sense for every machine combination?', cz: 'Má smysl TMP u každé kombinace strojů?' },
        answer: {
          de: 'Bei nahezu identischen Taktzeiten eher nicht. Sobald die Taktzeit-Differenz 20 % übersteigt oder eine Station häufigere Stillstände hat, ist ein Puffer wirtschaftlich sinnvoll.',
          en: 'With nearly identical cycle times, rather not. As soon as cycle time difference exceeds 20 % or one station has frequent downtimes, a buffer makes economic sense.',
          cz: 'Při téměř stejných dobách taktu spíše ne. Jakmile rozdíl doby taktu překročí 20 % nebo má jedna stanice časté prostoje, má pufr ekonomický smysl.',
          hu: 'Szinte azonos ciklusidőknél inkább nem. Amint a ciklusidő-különbség meghaladja a 20%-ot, vagy az egyik állomáson gyakori leállások vannak, a puffer gazdaságilag indokolt.',
        },
      },
      {
        question: { de: 'Kann der TMP mit einer bestehenden Linie kombiniert werden?', en: 'Can the TMP be combined with an existing line?', cz: 'Lze TMP kombinovat se stávající linkou?' },
        answer: {
          de: 'Ja — Barbaric-Pufferförderer sind modular und lassen sich in Bestandslinien integrieren. Asamer plant die Schnittstellen.',
          en: 'Yes — Barbaric buffer conveyors are modular and can be integrated into existing lines. Asamer plans the interfaces.',
          cz: 'Ano — Barbaric pufrovací dopravníky jsou modulární a lze je integrovat do stávajících linek. Asamer projektuje rozhraní.',
          hu: 'Igen — a Barbaric puffer szállítók moduláris kialakításúak és meglévő sorokba integrálhatók. Az Asamer tervezi a csatlakozási felületeket.',
        },
      },
    ],
  },

  door: {
    introExpanded: {
      de: `Barbaric Handling-Systeme für Türen (DRX, CSF Industrial Türen, LPS) automatisieren die spezielle Handhabung von Wohnungs-, Zimmer- und Industrietüren in der Fertigung. Türen sind große, schwere und empfindliche Werkstücke: Oberflächen dürfen nicht verkratzen, Beschläge müssen präzise eingelassen sein, Kanten müssen sauber bearbeitet sein. Barbaric bietet sowohl Vakuumhandling (DRX für einzelne Türen) als auch vollautomatische Lagersysteme (CSF Industrial Türen) und Etikettierlösungen (LPS). Für Türenhersteller und Möbelwerke, die Türen in Serie fertigen, sind diese Systeme die wirtschaftlichste Lösung zur Prozessabsicherung. Asamer liefert Türen-Handling-Anlagen für CZ, SK und HU inklusive Layout-Planung.`,
      en: `Barbaric handling systems for doors (DRX, CSF Industrial Türen, LPS) automate the special handling of residential, room and industrial doors in production. Doors are large, heavy and delicate workpieces: surfaces must not scratch, fittings must be precisely recessed, edges must be cleanly processed. Barbaric offers both vacuum handling (DRX for individual doors) and fully automatic storage systems (CSF Industrial Türen) and labelling solutions (LPS). For door manufacturers and furniture factories producing doors in series, these systems are the most economical solution for process reliability. Asamer supplies door handling systems for CZ, SK and HU including layout planning.`,
      cz: `Barbaric systémy manipulace s dveřmi (DRX, CSF Industrial Türen, LPS) automatizují speciální manipulaci s bytovými, pokojovými a průmyslovými dveřmi ve výrobě. Dveře jsou velké, těžké a citlivé obrobky: povrchy se nesmí poškrábat, kování musí být přesně zapuštěné, hrany musí být čistě opracované. Barbaric nabízí jak vakuovou manipulaci (DRX pro jednotlivé dveře), tak plně automatické skladovací systémy (CSF Industrial Türen) a etiketovací řešení (LPS). Pro výrobce dveří a nábytkářské závody vyrábějící dveře sériově jsou tyto systémy nejekonomičtějším řešením zajištění procesu. Asamer dodává zařízení pro manipulaci s dveřmi pro CZ, SK a HU včetně návrhu rozvržení.`,
      hu: `A Barbaric ajtókezelő rendszerek (DRX, CSF Industrial Türen, LPS) automatizálják a lakás-, szoba- és ipari ajtók speciális kezelését a gyártásban. Az ajtók nagy, nehéz és érzékeny munkadarabok: a felületek nem sérülhetnek meg, a vasalatokat pontosan kell elhelyezni, az éleket tisztán kell megmunkálni. A Barbaric egyaránt kínál vákuumos kezelést (DRX egyedi ajtókhoz), teljesen automatikus raktárrendszereket (CSF Industrial Türen) és címkézési megoldásokat (LPS). Sorozatban ajtót gyártó ajtógyártók és bútorüzemek számára ezek a rendszerek a legkgazdaságosabb megoldást jelentik a folyamatbiztonság szempontjából. Az Asamer ajtókezelő berendezéseket szállít Csehország, Szlovákia és Magyarország részére az elrendezéstervezéssel együtt.`,
    },
    sections: [
      {
        heading: { de: 'Vakuumhandling für Einzeltüren', en: 'Vacuum handling for individual doors', cz: 'Vakuová manipulace pro jednotlivé dveře' },
        body: {
          de: 'Der DRX-Vakuumheber handhabt einzelne Türen sicher und oberflächenschonend. Ideal für Tischlereien oder kleinere Türenhersteller, die keine vollautomatische Linie brauchen, aber manuelle Hebearbeit vermeiden wollen.',
          en: 'The DRX vacuum lifter handles individual doors safely and gently on the surface. Ideal for joinery shops or smaller door manufacturers who don\'t need a fully automated line but want to avoid manual lifting.',
          cz: 'Vakuový zvedák DRX bezpečně a šetrně k povrchu manipuluje s jednotlivými dveřmi. Ideální pro truhlářství nebo menší výrobce dveří, kteří nepotřebují plně automatickou linku, ale chtějí se vyhnout ruční manipulaci.',
          hu: 'A DRX vákuumemelő biztonságosan és felületkímélő módon kezeli az egyedi ajtókat. Ideális olyan asztalosműhelyek vagy kisebb ajtógyártók számára, akiknek nincs szükségük teljesen automatizált sorra, de el akarják kerülni a manuális emelőmunkát.',
        },
      },
      {
        heading: { de: 'Automatisches Türenlager', en: 'Automatic door storage', cz: 'Automatický sklad dveří' },
        body: {
          de: 'Das CSF Industrial für Türen ist ein vollautomatisches Lager speziell für Türelemente mit automatischer Ein- und Auslagerung, Kommissionierung und ERP-Integration. Für Türenhersteller mit Losgröße-1-Produktion unverzichtbar.',
          en: 'The CSF Industrial for doors is a fully automatic storage specifically for door elements with automatic storage and retrieval, picking and ERP integration. Essential for door manufacturers with batch-size-1 production.',
          cz: 'CSF Industrial pro dveře je plně automatický sklad speciálně pro dveřní prvky s automatickým zaskladněním a vyskladněním, komisionováním a integrací ERP. Nezbytný pro výrobce dveří s výrobou dávky 1.',
          hu: 'A CSF Industrial ajtókhoz teljesen automatikus raktár kifejezetten ajtóelemekhez, automatikus be- és kitárolással, komissiózással és ERP integrációval. Nélkülözhetetlen az 1-es sorozatnagyságú gyártással dolgozó ajtógyártók számára.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Welche Türgrößen werden verarbeitet?', en: 'What door sizes are processed?', cz: 'Jaké velikosti dveří se zpracovávají?' },
        answer: {
          de: 'Standardgrößen bis 2,2 × 1,2 m. Überformate nach Absprache.',
          en: 'Standard sizes up to 2.2 × 1.2 m. Oversized formats by arrangement.',
          cz: 'Standardní velikosti do 2,2 × 1,2 m. Nadměrné formáty po dohodě.',
          hu: 'Szabványos méretek 2,2 × 1,2 m-ig. Túlméretes formátumok egyeztetés alapján.',
        },
      },
      {
        question: { de: 'Werden Türen mit Beschlägen verarbeitet?', en: 'Are doors with fittings processed?', cz: 'Zpracovávají se dveře s kováním?' },
        answer: {
          de: 'Ja — die Vakuumgreifer sind so ausgelegt, dass sie an Flächen ohne Beschläge greifen. Die Lagerung erfolgt beschlagschonend.',
          en: 'Yes — the vacuum grippers are designed to grip surfaces without fittings. Storage is fitting-safe.',
          cz: 'Ano — vakuové úchopy jsou navrženy tak, aby uchopily plochy bez kování. Skladování je šetrné ke kování.',
          hu: 'Igen — a vákuumos megfogók úgy vannak kialakítva, hogy a vasalat nélküli felületeket fogják meg. A tárolás vasalatkímélő.',
        },
      },
      {
        question: { de: 'Gibt es Etikettierlösungen?', en: 'Are there labelling solutions?', cz: 'Jsou k dispozici etiketovací řešení?' },
        answer: {
          de: 'Ja — das LPS ist ein automatisches Etikettiersystem für Türen mit Barcode oder RFID-Tag.',
          en: 'Yes — the LPS is an automatic labelling system for doors with barcode or RFID tag.',
          cz: 'Ano — LPS je automatický etiketovací systém pro dveře s čárovým kódem nebo RFID tagem.',
          hu: 'Igen — az LPS egy automatikus címkéző rendszer ajtókhoz vonalkóddal vagy RFID címkével.',
        },
      },
    ],
  },

  labeling: {
    introExpanded: {
      de: `Barbaric Etikettiersysteme (LPS) bringen automatisch Barcodes, QR-Codes oder RFID-Tags auf Werkstücke an — für lückenlose Rückverfolgbarkeit und fehlerfreie Zuordnung von Aufträgen. In der Möbel- und Türenfertigung ist die digitale Etikettierung der Schlüssel zur Losgröße-1-Produktion: Jedes Teil bekommt eine eindeutige ID, die über alle Bearbeitungsstationen erhalten bleibt und mit dem ERP-Auftrag verknüpft ist. Asamer integriert LPS-Systeme in Produktionslinien für CZ, SK und HU — sowohl als Einzelstation als auch als Teil durchgängiger Automatisierungsprojekte.`,
      en: `Barbaric labelling systems (LPS) automatically apply barcodes, QR codes or RFID tags to workpieces — for seamless traceability and error-free order assignment. In furniture and door production, digital labelling is the key to batch-size-1 production: every part receives a unique ID that is preserved through all processing stations and linked to the ERP order. Asamer integrates LPS systems into production lines for CZ, SK and HU — both as a standalone station and as part of comprehensive automation projects.`,
      cz: `Barbaric etiketovací systémy (LPS) automaticky nanášejí čárové kódy, QR kódy nebo RFID tagy na obrobky — pro nepřerušenou sledovatelnost a bezchybné přiřazení zakázek. Ve výrobě nábytku a dveří je digitální etiketování klíčem k výrobě dávky 1: každý díl dostane jedinečné ID, které se uchovává přes všechny zpracovatelské stanice a je propojeno se zakázkou ERP. Asamer integruje LPS systémy do výrobních linek pro CZ, SK a HU — jako samostatnou stanici i jako součást komplexních automatizačních projektů.`,
      hu: `A Barbaric címkéző rendszerek (LPS) automatikusan helyeznek el vonalkódokat, QR-kódokat vagy RFID-címkéket a munkadarabokon — a zökkenőmentes nyomon követhetőség és a hibamentes rendeléshez rendelés érdekében. A bútor- és ajtógyártásban a digitális címkézés az 1-es sorozatnagyságú gyártás kulcsa: minden darab egyedi azonosítót kap, amely minden feldolgozási állomáson megmarad és az ERP rendelésbe kapcsolódik. Az Asamer LPS rendszereket integrál gyártósorokba Csehország, Szlovákia és Magyarország részére — önálló állomásként és átfogó automatizálási projektek részeként is.`,
    },
    sections: [
      {
        heading: { de: 'Warum digitale Etikettierung?', en: 'Why digital labelling?', cz: 'Proč digitální etiketování?' },
        body: {
          de: 'Manuelle Etikettierung ist zeitraubend und fehleranfällig. Bei Losgröße-1-Produktion mit vielen verschiedenen Teilen sind Verwechslungen praktisch unvermeidbar. Die automatische Etikettierung eliminiert diesen Fehlerfaktor komplett.',
          en: 'Manual labelling is time-consuming and error-prone. In batch-size-1 production with many different parts, mix-ups are practically unavoidable. Automatic labelling eliminates this error factor completely.',
          cz: 'Ruční etiketování je časově náročné a chybové. Při výrobě dávky 1 s mnoha různými díly jsou záměny prakticky nevyhnutelné. Automatické etiketování zcela odstraňuje tento chybový faktor.',
          hu: 'A manuális címkézés időigényes és hibára hajlamos. Sok különböző darabot tartalmazó 1-es sorozatnagyságú gyártásnál az összecserélések gyakorlatilag elkerülhetetlenek. Az automatikus címkézés teljes mértékben kiküszöböli ezt a hibatényezőt.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Barcode oder RFID?', en: 'Barcode or RFID?', cz: 'Čárový kód nebo RFID?' },
        answer: {
          de: 'Barcode ist günstiger und reicht für die meisten Anwendungen. RFID lohnt sich, wenn die Etiketten durch viele Oberflächenbearbeitungen (Lackierung, Kantenleimen) geschützt werden müssen.',
          en: 'Barcode is cheaper and sufficient for most applications. RFID pays off when labels must be protected through many surface treatments (painting, edgebanding).',
          cz: 'Čárový kód je levnější a stačí pro většinu aplikací. RFID se vyplatí, když musí být etikety chráněny přes mnoho povrchových úprav (lakování, olepování hran).',
          hu: 'A vonalkód olcsóbb és a legtöbb alkalmazáshoz elegendő. Az RFID akkor éri meg, ha a címkéket sok felületkezelésen át (lakkozás, élzárás) védeni kell.',
        },
      },
      {
        question: { de: 'Integration mit ERP?', en: 'ERP integration?', cz: 'Integrace s ERP?' },
        answer: {
          de: 'Das LPS wird mit SAP, Navision oder individuellen ERP-Systemen verknüpft. Die ID jedes Teils wird dort erzeugt und mit den Auftragsdaten verknüpft.',
          en: 'The LPS is linked to SAP, Navision or custom ERP systems. The ID of each part is generated there and linked to order data.',
          cz: 'LPS se propojuje s SAP, Navision nebo individuálními ERP systémy. ID každého dílu se tam generuje a propojuje s daty zakázek.',
          hu: 'Az LPS SAP, Navision vagy egyedi ERP rendszerekhez kapcsolódik. Minden darab azonosítója ott generálódik és a rendelési adatokhoz rendelődik.',
        },
      },
      {
        question: { de: 'Welche Druckleistung?', en: 'What printing performance?', cz: 'Jaký tiskový výkon?' },
        answer: {
          de: 'Bis zu 1.000 Etiketten pro Stunde, je nach Werkstückwechsel und Druckformat.',
          en: 'Up to 1,000 labels per hour, depending on workpiece change and label format.',
          cz: 'Až 1.000 etiket za hodinu v závislosti na výměně obrobku a formátu etikety.',
          hu: 'Óránként akár 1.000 címke, a munkadarabcsere és a címkeformátum függvényében.',
        },
      },
    ],
  },

  'vacuum-lifters': {
    introExpanded: {
      de: `Barbaric Vakuumheber (UWL-Serie) ermöglichen die ergonomische, sichere und präzise Handhabung großer und schwerer Platten, Türen oder Arbeitsplatten. Statt von Hand zu heben — was Rückenprobleme, Plattenbrüche und Kratzer an beschichteten Oberflächen verursachen kann — wird das Werkstück berührungslos über Vakuum angehoben, schwebend positioniert und kontrolliert abgesetzt. Die UWL-Serie deckt alle typischen Anwendungen ab: UWL-3 als Standard, UWL-3S für dünnere Platten, UWL-3J für schnellere Zyklen, UWL-1 als Einstieg, UWL-5 für schwere Lasten. Asamer liefert, wartet und zertifiziert Barbaric-Vakuumheber für CZ, SK und HU — inklusive jährlicher Sicherheitsprüfung.`,
      en: `Barbaric vacuum lifters (UWL series) enable ergonomic, safe and precise handling of large and heavy panels, doors or worktops. Instead of lifting by hand — which can cause back problems, panel damage and scratches on coated surfaces — the workpiece is lifted contact-free via vacuum, positioned floating and set down in a controlled manner. The UWL series covers all typical applications: UWL-3 as standard, UWL-3S for thinner panels, UWL-3J for faster cycles, UWL-1 as entry, UWL-5 for heavy loads. Asamer supplies, services and certifies Barbaric vacuum lifters for CZ, SK and HU — including annual safety inspection.`,
      cz: `Barbaric vakuové zvedáky (řada UWL) umožňují ergonomickou, bezpečnou a přesnou manipulaci s velkými a těžkými deskami, dveřmi nebo pracovními deskami. Místo ručního zvedání — které může způsobit bolesti zad, poškození desek a škrábance na potažených površích — se obrobek bezkontaktně zvedá vakuem, polohuje v zavěšené poloze a kontrolovaně odkládá. Řada UWL pokrývá všechny typické aplikace: UWL-3 jako standard, UWL-3S pro tenčí desky, UWL-3J pro rychlejší cykly, UWL-1 jako vstup, UWL-5 pro těžká břemena. Asamer dodává, servisuje a certifikuje Barbaric vakuové zvedáky pro CZ, SK a HU — včetně roční bezpečnostní kontroly.`,
      hu: `A Barbaric vákuumemelők (UWL-sorozat) nagy és nehéz lapok, ajtók vagy munkalapok ergonomikus, biztonságos és pontos kezelését teszik lehetővé. A kézi emelés helyett — amely hátproblémákat, laptörést és karcolásokat okozhat a bevont felületeken — a munkadarabot érintésmentesen vákuummal emelik fel, lebegve pozicionálják és ellenőrzött módon teszik le. Az UWL-sorozat minden tipikus alkalmazást lefed: UWL-3 szabványként, UWL-3S vékonyabb lapokhoz, UWL-3J gyorsabb ciklusokhoz, UWL-1 belépő szintként, UWL-5 nehéz terhelésekhez. Az Asamer szállítja, szervizeli és tanúsítja a Barbaric vákuumemelőket Csehország, Szlovákia és Magyarország részére — az éves biztonsági felülvizsgálattal együtt.`,
    },
    sections: [
      {
        heading: { de: 'Ergonomie und Arbeitsschutz', en: 'Ergonomics and occupational safety', cz: 'Ergonomie a bezpečnost práce' },
        body: {
          de: 'Rückenbelastung durch wiederholtes Heben ist einer der häufigsten Gründe für Arbeitsausfall in der Holzindustrie. Vakuumheber entfernen diesen Risikofaktor komplett und machen die Arbeit auch für ältere Mitarbeiter oder Frauen zugänglich.',
          en: 'Back strain from repetitive lifting is one of the most common reasons for work absence in the wood industry. Vacuum lifters completely remove this risk factor and make work accessible to older employees or women.',
          cz: 'Zatížení zad opakovaným zvedáním je jedním z nejčastějších důvodů pracovní neschopnosti v dřevařském průmyslu. Vakuové zvedáky tento rizikový faktor zcela odstraňují a zpřístupňují práci i starším pracovníkům nebo ženám.',
          hu: 'Az ismétlődő emelésből eredő hátterhelés a fafeldolgozó iparban a munkából való kiesés egyik leggyakoribb oka. A vákuumemelők teljesen kiküszöbölik ezt a kockázati tényezőt, és a munkát idősebb dolgozók vagy nők számára is elérhetővé teszik.',
        },
      },
      {
        heading: { de: 'Welcher UWL ist der richtige?', en: 'Which UWL is the right one?', cz: 'Který UWL je správný?' },
        body: {
          de: 'UWL-1: Einstieg, kleinere Lasten. UWL-3: Standardmodell für die meisten Holz-Anwendungen. UWL-3S: Sonderausführung für dünne oder poröse Platten. UWL-3J: schnellere Zykluszeiten. UWL-5: Schwerlast-Variante bis große Türen und Platten.',
          en: 'UWL-1: entry, smaller loads. UWL-3: standard model for most wood applications. UWL-3S: special version for thin or porous panels. UWL-3J: faster cycle times. UWL-5: heavy-duty variant up to large doors and panels.',
          cz: 'UWL-1: vstup, menší zatížení. UWL-3: standardní model pro většinu aplikací se dřevem. UWL-3S: speciální provedení pro tenké nebo porézní desky. UWL-3J: rychlejší doby cyklu. UWL-5: varianta pro těžké břemena až po velké dveře a desky.',
          hu: 'UWL-1: belépő, kisebb terhelések. UWL-3: szabványmodell a legtöbb fa-alkalmazáshoz. UWL-3S: speciális kivitel vékony vagy porózus lapokhoz. UWL-3J: gyorsabb ciklusidők. UWL-5: nehézterhelésű változat egészen nagy ajtókig és lapokig.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Können auch gebogene Oberflächen gehoben werden?', en: 'Can curved surfaces also be lifted?', cz: 'Lze zvedat i zakřivené povrchy?' },
        answer: {
          de: 'Standard-Sauger sind für ebene Flächen ausgelegt. Für gebogene Oberflächen gibt es Sonderausführungen mit angepassten Saugern.',
          en: 'Standard cups are designed for flat surfaces. For curved surfaces, special versions with adapted cups are available.',
          cz: 'Standardní přísavky jsou navrženy pro rovné plochy. Pro zakřivené povrchy jsou k dispozici speciální provedení s přizpůsobenými přísavkami.',
          hu: 'A szabvány szívótárcsákat sík felületekhez tervezték. Ívelt felületekhez speciális kivitelek állnak rendelkezésre testreszabott szívótárcsákkal.',
        },
      },
      {
        question: { de: 'Brauchen wir Druckluft?', en: 'Do we need compressed air?', cz: 'Potřebujeme stlačený vzduch?' },
        answer: {
          de: 'Die meisten UWL arbeiten mit integrierter Vakuumpumpe — keine externe Druckluft nötig. Sonderausführungen mit externer Pumpe gibt es für spezielle Anwendungen.',
          en: 'Most UWLs work with an integrated vacuum pump — no external compressed air required. Special versions with external pump are available for specific applications.',
          cz: 'Většina UWL pracuje s integrovaným vakuovým čerpadlem — žádný externí stlačený vzduch není nutný. Speciální provedení s externím čerpadlem jsou k dispozici pro specifické aplikace.',
          hu: 'A legtöbb UWL integrált vákuumszivattyúval működik — nincs szükség külső sűrített levegőre. Specifikus alkalmazásokhoz külső szivattyús speciális kivitelek is rendelkezésre állnak.',
        },
      },
      {
        question: { de: 'Wie oft muss geprüft werden?', en: 'How often must they be inspected?', cz: 'Jak často se musí kontrolovat?' },
        answer: {
          de: 'Jährliche Sicherheitsprüfung nach DGUV ist Pflicht. Asamer bietet diese Prüfung im Wartungspaket an.',
          en: 'Annual safety inspection per DGUV is mandatory. Asamer offers this inspection in the maintenance package.',
          cz: 'Roční bezpečnostní kontrola dle DGUV je povinná. Asamer nabízí tuto kontrolu v servisním balíčku.',
          hu: 'A DGUV szerinti éves biztonsági felülvizsgálat kötelező. Az Asamer ezt a felülvizsgálatot a karbantartási csomagban kínálja.',
        },
      },
    ],
  },

  'vacuum-special': {
    introExpanded: {
      de: `Barbaric Sondervakuumheber (SWL-Serie, NGR) kommen zum Einsatz, wenn Standard-Sauger nicht ausreichen: Für Bohlen (Plank-Lifter), empfindliche Oberflächen (Nadelgreifer), lange Profile oder nicht-plane Werkstücke gibt es spezialisierte Greiftechniken. SWL-Griplifter kombinieren Vakuum mit mechanischem Greifen für schwierige Geometrien; NGR-Nadelgreifer durchdringen porösen Materialien wie Dämmplatten; RWL-Racklifter heben Teile aus Regalen. Für Möbelwerke, Plattenveredler und Spezialfertigungen sind diese Sonderwerkzeuge die einzige Möglichkeit, bestimmte Handhabungsaufgaben zu automatisieren. Asamer projektiert Sondervakuumtechnik für CZ, SK und HU individuell.`,
      en: `Barbaric special vacuum lifters (SWL series, NGR) come into play when standard suction cups are not sufficient: specialised gripping techniques exist for planks (Plank-Lifter), sensitive surfaces (needle gripper), long profiles or non-flat workpieces. SWL Grip-Lifters combine vacuum with mechanical gripping for difficult geometries; NGR needle grippers penetrate porous materials like insulation panels; RWL Rack-Lifters lift parts from racks. For furniture factories, panel finishers and special manufacturing, these special tools are the only way to automate certain handling tasks. Asamer designs special vacuum technology for CZ, SK and HU individually.`,
      cz: `Barbaric speciální vakuové zvedáky (řada SWL, NGR) se nasazují tam, kde standardní přísavky nestačí: pro fošny (Plank-Lifter), citlivé povrchy (jehlový úchop), dlouhé profily nebo nerovné obrobky existují specializované úchopové techniky. SWL Grip-Lifter kombinují vakuum s mechanickým úchopem pro obtížné geometrie; NGR jehlové úchopy pronikají porézními materiály jako izolační desky; RWL Rack-Lifter zvedají díly z regálů. Pro nábytkářské závody, zpracovatele desek a speciální výroby jsou tyto speciální nástroje jedinou možností, jak automatizovat určité manipulační úlohy. Asamer projektuje speciální vakuovou techniku pro CZ, SK a HU individuálně.`,
      hu: `A Barbaric speciális vákuumemelők (SWL-sorozat, NGR) ott kerülnek bevetésre, ahol a szabvány szívótárcsák nem elegendőek: pallókhoz (Plank-Lifter), érzékeny felületekhez (tűs megfogó), hosszú profilokhoz vagy nem sík munkadarabokhoz speciális megfogási technikák állnak rendelkezésre. Az SWL Grip-Lifter vákuumot kombinál mechanikus megfogással a nehéz geometriákhoz; az NGR tűs megfogó porózus anyagokon is áthatol, mint például szigetelőlapok; az RWL Rack-Lifter polcokból emeli ki a darabokat. Bútorüzemek, laplemez-feldolgozók és különleges gyártás számára ezek a speciális eszközök jelentik az egyetlen lehetőséget bizonyos anyagmozgatási feladatok automatizálására. Az Asamer egyedileg tervezi a speciális vákuumtechnikát Csehország, Szlovákia és Magyarország részére.`,
    },
    sections: [
      {
        heading: { de: 'Wann lohnt sich Sondervakuumtechnik?', en: 'When is special vacuum technology worthwhile?', cz: 'Kdy se vyplatí speciální vakuová technika?' },
        body: {
          de: 'Sobald Standard-Vakuumtechnik an der Werkstück-Geometrie oder Oberfläche scheitert — etwa bei gebogenen Flächen, extrem dünnen Platten, porösem Material oder komplexen Formen — sind Sondervakuumheber die Lösung. Asamer klärt die Machbarkeit in der Vorplanung.',
          en: 'As soon as standard vacuum technology fails due to workpiece geometry or surface — such as curved surfaces, extremely thin panels, porous material or complex shapes — special vacuum lifters are the solution. Asamer clarifies feasibility during pre-planning.',
          cz: 'Jakmile standardní vakuová technika selhává kvůli geometrii obrobku nebo povrchu — například u zakřivených ploch, extrémně tenkých desek, porézního materiálu nebo složitých tvarů — jsou speciální vakuové zvedáky řešením. Asamer objasní proveditelnost v předběžném plánování.',
          hu: 'Amint a szabvány vákuumtechnika a munkadarab geometriája vagy felülete miatt kudarcot vall — például ívelt felületeknél, rendkívül vékony lapoknál, porózus anyagnál vagy összetett formáknál — a speciális vákuumemelők jelentik a megoldást. Az Asamer az előtervezés során tisztázza a megvalósíthatóságot.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Gibt es eine Sonderlösung für unsere Geometrie?', en: 'Is there a special solution for our geometry?', cz: 'Existuje speciální řešení pro naši geometrii?' },
        answer: {
          de: 'Asamer und Barbaric prüfen gerne Machbarkeit und Wirtschaftlichkeit. Senden Sie uns ein Foto oder Zeichnung Ihres Werkstücks.',
          en: 'Asamer and Barbaric are happy to check feasibility and economics. Send us a photo or drawing of your workpiece.',
          cz: 'Asamer a Barbaric rádi posoudí proveditelnost a ekonomiku. Pošlete nám fotografii nebo nákres vašeho obrobku.',
          hu: 'Az Asamer és a Barbaric szívesen megvizsgálja a megvalósíthatóságot és a gazdaságosságot. Küldjön nekünk fényképet vagy rajzot a munkadarabról.',
        },
      },
      {
        question: { de: 'Wie lange dauert die Entwicklung einer Sonderlösung?', en: 'How long does development of a special solution take?', cz: 'Jak dlouho trvá vývoj speciálního řešení?' },
        answer: {
          de: 'Typisch 8–16 Wochen von der Konzeption bis zur Auslieferung — je nach Komplexität.',
          en: 'Typically 8–16 weeks from concept to delivery — depending on complexity.',
          cz: 'Obvykle 8–16 týdnů od konceptu po dodání — v závislosti na složitosti.',
          hu: 'Tipikusan 8–16 hét a koncepciótól a szállításig — a komplexitástól függően.',
        },
      },
      {
        question: { de: 'Ist ein Standard-Vakuumheber nachrüstbar?', en: 'Can a standard vacuum lifter be retrofitted?', cz: 'Lze dovybavit standardní vakuový zvedák?' },
        answer: {
          de: 'In vielen Fällen ja — Asamer prüft die Umrüstbarkeit vorhandener UWL auf Sondersauger oder Nadelgreifer.',
          en: 'In many cases yes — Asamer checks the retrofittability of existing UWL to special cups or needle grippers.',
          cz: 'V mnoha případech ano — Asamer kontroluje možnost dovybavení stávajících UWL speciálními přísavkami nebo jehlovými úchopy.',
          hu: 'Sok esetben igen — az Asamer ellenőrzi a meglévő UWL-ek átalakíthatóságát speciális szívótárcsákra vagy tűs megfogókra.',
        },
      },
    ],
  },

  'vacuum-traverses': {
    introExpanded: {
      de: `Barbaric Vakuumtraversen sind lange Greifer-Systeme für die Handhabung großformatiger, langer oder leichter Werkstücke — etwa Dünnplatten, Türen, Bleche oder Plexiglas. Die Traverse verteilt Sauggreifer auf der gesamten Werkstückfläche und sorgt für stabile, verzugsarme Handhabung auch bei biegsamem Material. Typische Modelle: Dünnplattentraverse für dünne Spanplatten oder MDF, Türentraverse für Türelemente und Blech-Plexiglas-Traverse für Metall oder Kunststoffplatten. Für Werkstoffe, die beim konventionellen Heben durchhängen oder brechen würden, sind Traversen unverzichtbar. Asamer liefert Vakuumtraversen für CZ, SK und HU inklusive Sicherheitsabnahme.`,
      en: `Barbaric vacuum traverses are long gripper systems for handling large-format, long or lightweight workpieces — such as thin panels, doors, sheet metal or Plexiglas. The traverse distributes suction cups across the entire workpiece area and provides stable, low-warp handling even for flexible material. Typical models: thin panel traverse for thin chipboard or MDF, door traverse for door elements, and sheet-metal-Plexiglas traverse for metal or plastic panels. For materials that would sag or break during conventional lifting, traverses are indispensable. Asamer supplies vacuum traverses for CZ, SK and HU including safety acceptance.`,
      cz: `Barbaric vakuové traverzy jsou dlouhé úchopové systémy pro manipulaci s velkoformátovými, dlouhými nebo lehkými obrobky — například tenkými deskami, dveřmi, plechem nebo plexisklem. Traverza rozmísťuje přísavky po celé ploše obrobku a zajišťuje stabilní manipulaci s minimálním deformováním i u ohebného materiálu. Typické modely: traverza pro tenké desky (dřevotříska nebo MDF), dveřní traverza pro dveřní prvky a traverza plech-plexisklo pro kovové nebo plastové desky. Pro materiály, které by při běžném zvedání prohýbaly nebo praskaly, jsou traverzy nepostradatelné. Asamer dodává vakuové traverzy pro CZ, SK a HU včetně bezpečnostního schválení.`,
      hu: `A Barbaric vákuumos traverzek hosszú megfogórendszerek nagyméretű, hosszú vagy könnyű munkadarabok — például vékony lapok, ajtók, lemezek vagy plexiüveg — kezeléséhez. A traverz a szívótárcsákat a munkadarab teljes felületén elosztja, és stabil, alacsony vetemedésű kezelést biztosít rugalmas anyagoknál is. Tipikus modellek: vékony laphoz való traverz vékony forgácslaphoz vagy MDF-hez, ajtótraverz ajtóelemekhez, valamint lemez-plexiüveg traverz fém- vagy műanyag lapokhoz. Olyan anyagoknál, amelyek hagyományos emelésnél megereszkednének vagy eltörnének, a traverzek nélkülözhetetlenek. Az Asamer vákuumos traverzeket szállít Csehország, Szlovákia és Magyarország részére a biztonsági átvétellel együtt.`,
    },
    sections: [
      {
        heading: { de: 'Dünnplattentraverse vs. Standardheber', en: 'Thin panel traverse vs. standard lifter', cz: 'Traverza pro tenké desky vs. standardní zvedák' },
        body: {
          de: 'Dünne Platten (< 10 mm) biegen sich beim klassischen Mittelgriff-Heben durch und reißen an den Rändern. Eine Dünnplattentraverse verteilt die Last über die gesamte Fläche, sodass die Platte planar bleibt. Ein Muss in der Feinmöbel- oder Akustikplattenfertigung.',
          en: 'Thin panels (< 10 mm) sag during classic centre-grip lifting and tear at the edges. A thin panel traverse distributes the load across the entire surface so the panel remains planar. A must in fine furniture or acoustic panel production.',
          cz: 'Tenké desky (< 10 mm) se při klasickém zvedání středovým úchopem prohýbají a trhají na okrajích. Traverza pro tenké desky rozkládá zatížení po celé ploše, takže deska zůstává rovná. Nutnost ve výrobě jemného nábytku nebo akustických desek.',
          hu: 'A vékony lapok (< 10 mm) klasszikus középpontos emelésnél megereszkednek és elszakadnak a szélükön. A vékony laphoz való traverz eloszlatja a terhelést a teljes felületen, így a lap sík marad. Kötelező a finom bútoriparban vagy az akusztikai lapok gyártásában.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Welche Werkstücklängen sind möglich?', en: 'What workpiece lengths are possible?', cz: 'Jaké délky obrobků jsou možné?' },
        answer: {
          de: 'Standardtraversen bis 3 m, Sonderausführungen bis 6 m.',
          en: 'Standard traverses up to 3 m, special versions up to 6 m.',
          cz: 'Standardní traverzy do 3 m, speciální provedení do 6 m.',
          hu: 'Szabvány traverzek 3 m-ig, speciális kivitelek 6 m-ig.',
        },
      },
      {
        question: { de: 'Für welche Plattenstärken eignet sich die Dünnplattentraverse?', en: 'What panel thicknesses is the thin panel traverse suitable for?', cz: 'Pro jaké tloušťky desek je vhodná traverza pro tenké desky?' },
        answer: {
          de: 'Ab 2 mm bis 15 mm typischerweise. Für HPL oder Folien braucht es spezielle Saugeroberflächen.',
          en: 'Typically from 2 mm to 15 mm. For HPL or foils, special cup surfaces are required.',
          cz: 'Obvykle od 2 mm do 15 mm. Pro HPL nebo fólie jsou nutné speciální povrchy přísavek.',
          hu: 'Tipikusan 2 mm-től 15 mm-ig. HPL-hez vagy fóliákhoz speciális szívótárcsa-felületek szükségesek.',
        },
      },
      {
        question: { de: 'Gibt es auch eine Blech-Traverse?', en: 'Is there a sheet metal traverse?', cz: 'Existuje i plechová traverza?' },
        answer: {
          de: 'Ja — Blech-Plexiglas-Traverse für Metalle und Kunststoff-Flachmaterial.',
          en: 'Yes — sheet-metal-Plexiglas traverse for metals and plastic flat material.',
          cz: 'Ano — traverza plech-plexisklo pro kovy a ploché plastové materiály.',
          hu: 'Igen — lemez-plexiüveg traverz fémekhez és lapos műanyag anyagokhoz.',
        },
      },
    ],
  },

  'vacuum-cranes': {
    introExpanded: {
      de: `Barbaric Vakuumkräne sind die stationären oder flächendeckenden Handhabungssysteme, wenn regelmäßige Plattenbewegungen über definierte Wege nötig sind — aber ohne vollautomatisches Flächenlager. Sie reichen von Säulenschwenkkränen (SSK) über Schienensysteme (SSY) bis zu Fachwerkbrücken (2D und 3D) für große Hallenflächen. Das gemeinsame Prinzip: Ein Kran fährt oder schwenkt über das Arbeitsfeld, nimmt Lasten über Vakuum auf und setzt sie präzise ab — gesteuert durch den Bediener oder automatisch per SPS. Für Tischlereien, Lagerbetriebe und Produktionslinien mit schweren Werkstücken sind Vakuumkräne eine wirtschaftliche Handhabungslösung. Asamer plant die passende Kran-Klasse je nach Layout und Einsatzprofil für Kunden in CZ, SK und HU.`,
      en: `Barbaric vacuum cranes are the stationary or area-covering handling systems when regular panel movements over defined paths are required — but without a fully automatic panel storage. They range from column slewing cranes (SSK) through rail systems (SSY) to truss bridges (2D and 3D) for large hall areas. The common principle: a crane travels or slews over the work area, picks up loads via vacuum and sets them down precisely — controlled by the operator or automatically via PLC. For joinery shops, warehousing operations and production lines with heavy workpieces, vacuum cranes are an economical handling solution. Asamer plans the right crane class depending on layout and operational profile for customers in CZ, SK and HU.`,
      cz: `Barbaric vakuové jeřáby jsou stacionární nebo plošné manipulační systémy, pokud jsou potřebné pravidelné pohyby desek po definovaných trasách — ale bez plně automatického skladu desek. Sahají od sloupových otočných jeřábů (SSK) přes kolejnicové systémy (SSY) až po sloupcové mosty (2D a 3D) pro velké halové plochy. Společný princip: jeřáb jede nebo se otáčí nad pracovní plochou, přijímá břemena přes vakuum a přesně je odkládá — řízené obsluhou nebo automaticky přes PLC. Pro truhlářství, skladové provozy a výrobní linky s těžkými obrobky jsou vakuové jeřáby ekonomickým manipulačním řešením. Asamer projektuje vhodnou třídu jeřábu podle rozvržení a provozního profilu pro zákazníky v CZ, SK a HU.`,
      hu: `A Barbaric vákuumdaruk stacionárius vagy területi lefedést biztosító anyagmozgató rendszerek, ha rendszeres lapmozgásokra van szükség meghatározott útvonalakon — de teljesen automatikus lapraktár nélkül. Az oszlopos forgódaruktól (SSK) a sínrendszereken (SSY) át a rácsos hidakig (2D és 3D) terjednek, amelyek nagy csarnokterületeket fednek le. A közös alapelv: a daru a munkaterület felett halad vagy forog, vákuummal felveszi a terheket és pontosan leteszi őket — a kezelő által vezérelve vagy automatikusan PLC-n keresztül. Asztalosműhelyek, raktárüzemek és nehéz munkadarabokkal dolgozó gyártósorok számára a vákuumdaruk gazdaságos anyagmozgatási megoldást jelentenek. Az Asamer az elrendezés és az üzemeltetési profil alapján tervezi meg a megfelelő daruosztályt csehországi, szlovákiai és magyarországi ügyfelek számára.`,
    },
    sections: [
      {
        heading: { de: 'SSK vs. SSY vs. Fachwerkbrücke', en: 'SSK vs. SSY vs. truss bridge', cz: 'SSK vs. SSY vs. sloupcový most' },
        body: {
          de: 'SSK Säulenschwenkkran: feste Position, Halbkreis-Abdeckung — ideal für einen Arbeitsplatz. SSY Schienensystem: lineare Fahrbahn — ideal für Linien oder Durchgangslager. Fachwerkbrücke 2D: rechteckige Flächenabdeckung — für mittlere Hallen. Fachwerkbrücke 3D: zusätzliche Z-Achse — für mehrstufige Bewegungen.',
          en: 'SSK column slewing crane: fixed position, semi-circle coverage — ideal for a single workstation. SSY rail system: linear path — ideal for lines or pass-through storage. Truss bridge 2D: rectangular area coverage — for medium halls. Truss bridge 3D: additional Z-axis — for multi-level movements.',
          cz: 'SSK sloupový otočný jeřáb: pevná pozice, půlkruh pokrytí — ideální pro jedno pracoviště. SSY kolejnicový systém: lineární dráha — ideální pro linky nebo průchozí sklady. Sloupcový most 2D: obdélníkové pokrytí plochy — pro střední haly. Sloupcový most 3D: další osa Z — pro víceúrovňové pohyby.',
          hu: 'SSK oszlopos forgódaru: rögzített pozíció, félköríves lefedés — ideális egy munkaállomáshoz. SSY sínrendszer: lineáris pálya — ideális sorokhoz vagy átjárható raktárakhoz. Rácsos híd 2D: téglalap alakú területlefedés — közepes csarnokokhoz. Rácsos híd 3D: további Z-tengely — többszintű mozgásokhoz.',
        },
      },
    ],
    faq: [
      {
        question: { de: 'Ist ein Vakuumkran günstiger als ein Flächenlager?', en: 'Is a vacuum crane cheaper than a panel storage?', cz: 'Je vakuový jeřáb levnější než sklad desek?' },
        answer: {
          de: 'Deutlich günstiger — ein SSK startet bei einem Bruchteil der Kosten eines automatischen Lagers. Wirtschaftlich sinnvoll, wenn manuelles Handling durch Kranführung ersetzt wird, nicht durch Automatisierung.',
          en: 'Significantly cheaper — an SSK starts at a fraction of the cost of an automatic storage. Economically sensible when manual handling is replaced by crane operation, not by automation.',
          cz: 'Výrazně levnější — SSK začíná na zlomku nákladů automatického skladu. Ekonomicky smysluplné, když se manuální manipulace nahradí ovládáním jeřábu, ne automatizací.',
          hu: 'Lényegesen olcsóbb — egy SSK az automatikus raktár költségeinek töredékén indul. Gazdaságilag akkor indokolt, ha a manuális anyagmozgatást darus üzemeltetéssel, nem pedig automatizálással váltják ki.',
        },
      },
      {
        question: { de: 'Brauchen wir Fundament?', en: 'Do we need a foundation?', cz: 'Potřebujeme základ?' },
        answer: {
          de: 'SSK und Fachwerkbrücke benötigen Fundamente, SSY wird an bestehender Deckenkonstruktion montiert. Asamer koordiniert die Bauausführung.',
          en: 'SSK and truss bridge require foundations; SSY is mounted on existing ceiling structure. Asamer coordinates construction work.',
          cz: 'SSK a sloupcový most vyžadují základy; SSY se montuje na stávající stropní konstrukci. Asamer koordinuje stavební práce.',
          hu: 'Az SSK és a rácsos híd alapokat igényel; az SSY a meglévő mennyezeti szerkezetre van szerelve. Az Asamer koordinálja a kivitelezési munkákat.',
        },
      },
      {
        question: { de: 'Automatisch oder manuell?', en: 'Automatic or manual?', cz: 'Automaticky nebo ručně?' },
        answer: {
          de: 'Beides möglich. Kleinere Kräne werden meist manuell geführt, größere können automatisch fahren (SPS-Steuerung, Lichtschranken, ERP-Kopplung).',
          en: 'Both possible. Smaller cranes are usually operated manually, larger ones can run automatically (PLC control, light barriers, ERP coupling).',
          cz: 'Obojí možné. Menší jeřáby se obvykle ovládají ručně, větší mohou jezdit automaticky (řízení PLC, světelné závory, napojení na ERP).',
          hu: 'Mindkettő lehetséges. A kisebb darukat általában kézzel vezetik, a nagyobbak automatikusan is haladhatnak (PLC-vezérlés, fénysorompók, ERP-csatlakozás).',
        },
      },
    ],
  },
};
