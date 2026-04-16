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
        },
      },
      {
        question: { de: 'Ist ein TMP an jeder Maschinenkombination sinnvoll?', en: 'Does a TMP make sense for every machine combination?', cz: 'Má smysl TMP u každé kombinace strojů?' },
        answer: {
          de: 'Bei nahezu identischen Taktzeiten eher nicht. Sobald die Taktzeit-Differenz 20 % übersteigt oder eine Station häufigere Stillstände hat, ist ein Puffer wirtschaftlich sinnvoll.',
          en: 'With nearly identical cycle times, rather not. As soon as cycle time difference exceeds 20 % or one station has frequent downtimes, a buffer makes economic sense.',
          cz: 'Při téměř stejných dobách taktu spíše ne. Jakmile rozdíl doby taktu překročí 20 % nebo má jedna stanice časté prostoje, má pufr ekonomický smysl.',
        },
      },
      {
        question: { de: 'Kann der TMP mit einer bestehenden Linie kombiniert werden?', en: 'Can the TMP be combined with an existing line?', cz: 'Lze TMP kombinovat se stávající linkou?' },
        answer: {
          de: 'Ja — Barbaric-Pufferförderer sind modular und lassen sich in Bestandslinien integrieren. Asamer plant die Schnittstellen.',
          en: 'Yes — Barbaric buffer conveyors are modular and can be integrated into existing lines. Asamer plans the interfaces.',
          cz: 'Ano — Barbaric pufrovací dopravníky jsou modulární a lze je integrovat do stávajících linek. Asamer projektuje rozhraní.',
        },
      },
    ],
  },

  door: {
    introExpanded: {
      de: `Barbaric Handling-Systeme für Türen (DRX, CSF Industrial Türen, LPS) automatisieren die spezielle Handhabung von Wohnungs-, Zimmer- und Industrietüren in der Fertigung. Türen sind große, schwere und empfindliche Werkstücke: Oberflächen dürfen nicht verkratzen, Beschläge müssen präzise eingelassen sein, Kanten müssen sauber bearbeitet sein. Barbaric bietet sowohl Vakuumhandling (DRX für einzelne Türen) als auch vollautomatische Lagersysteme (CSF Industrial Türen) und Etikettierlösungen (LPS). Für Türenhersteller und Möbelwerke, die Türen in Serie fertigen, sind diese Systeme die wirtschaftlichste Lösung zur Prozessabsicherung. Asamer liefert Türen-Handling-Anlagen für CZ, SK und HU inklusive Layout-Planung.`,
      en: `Barbaric handling systems for doors (DRX, CSF Industrial Türen, LPS) automate the special handling of residential, room and industrial doors in production. Doors are large, heavy and delicate workpieces: surfaces must not scratch, fittings must be precisely recessed, edges must be cleanly processed. Barbaric offers both vacuum handling (DRX for individual doors) and fully automatic storage systems (CSF Industrial Türen) and labelling solutions (LPS). For door manufacturers and furniture factories producing doors in series, these systems are the most economical solution for process reliability. Asamer supplies door handling systems for CZ, SK and HU including layout planning.`,
      cz: `Barbaric systémy manipulace s dveřmi (DRX, CSF Industrial Türen, LPS) automatizují speciální manipulaci s bytovými, pokojovými a průmyslovými dveřmi ve výrobě. Dveře jsou velké, těžké a citlivé obrobky: povrchy se nesmí poškrábat, kování musí být přesně zapuštěné, hrany musí být čistě opracované. Barbaric nabízí jak vakuovou manipulaci (DRX pro jednotlivé dveře), tak plně automatické skladovací systémy (CSF Industrial Türen) a etiketovací řešení (LPS). Pro výrobce dveří a nábytkářské závody vyrábějící dveře sériově jsou tyto systémy nejekonomičtějším řešením zajištění procesu. Asamer dodává zařízení pro manipulaci s dveřmi pro CZ, SK a HU včetně návrhu rozvržení.`,
    },
    sections: [
      {
        heading: { de: 'Vakuumhandling für Einzeltüren', en: 'Vacuum handling for individual doors', cz: 'Vakuová manipulace pro jednotlivé dveře' },
        body: {
          de: 'Der DRX-Vakuumheber handhabt einzelne Türen sicher und oberflächenschonend. Ideal für Tischlereien oder kleinere Türenhersteller, die keine vollautomatische Linie brauchen, aber manuelle Hebearbeit vermeiden wollen.',
          en: 'The DRX vacuum lifter handles individual doors safely and gently on the surface. Ideal for joinery shops or smaller door manufacturers who don\'t need a fully automated line but want to avoid manual lifting.',
          cz: 'Vakuový zvedák DRX bezpečně a šetrně k povrchu manipuluje s jednotlivými dveřmi. Ideální pro truhlářství nebo menší výrobce dveří, kteří nepotřebují plně automatickou linku, ale chtějí se vyhnout ruční manipulaci.',
        },
      },
      {
        heading: { de: 'Automatisches Türenlager', en: 'Automatic door storage', cz: 'Automatický sklad dveří' },
        body: {
          de: 'Das CSF Industrial für Türen ist ein vollautomatisches Lager speziell für Türelemente mit automatischer Ein- und Auslagerung, Kommissionierung und ERP-Integration. Für Türenhersteller mit Losgröße-1-Produktion unverzichtbar.',
          en: 'The CSF Industrial for doors is a fully automatic storage specifically for door elements with automatic storage and retrieval, picking and ERP integration. Essential for door manufacturers with batch-size-1 production.',
          cz: 'CSF Industrial pro dveře je plně automatický sklad speciálně pro dveřní prvky s automatickým zaskladněním a vyskladněním, komisionováním a integrací ERP. Nezbytný pro výrobce dveří s výrobou dávky 1.',
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
        },
      },
      {
        question: { de: 'Werden Türen mit Beschlägen verarbeitet?', en: 'Are doors with fittings processed?', cz: 'Zpracovávají se dveře s kováním?' },
        answer: {
          de: 'Ja — die Vakuumgreifer sind so ausgelegt, dass sie an Flächen ohne Beschläge greifen. Die Lagerung erfolgt beschlagschonend.',
          en: 'Yes — the vacuum grippers are designed to grip surfaces without fittings. Storage is fitting-safe.',
          cz: 'Ano — vakuové úchopy jsou navrženy tak, aby uchopily plochy bez kování. Skladování je šetrné ke kování.',
        },
      },
      {
        question: { de: 'Gibt es Etikettierlösungen?', en: 'Are there labelling solutions?', cz: 'Jsou k dispozici etiketovací řešení?' },
        answer: {
          de: 'Ja — das LPS ist ein automatisches Etikettiersystem für Türen mit Barcode oder RFID-Tag.',
          en: 'Yes — the LPS is an automatic labelling system for doors with barcode or RFID tag.',
          cz: 'Ano — LPS je automatický etiketovací systém pro dveře s čárovým kódem nebo RFID tagem.',
        },
      },
    ],
  },

  labeling: {
    introExpanded: {
      de: `Barbaric Etikettiersysteme (LPS) bringen automatisch Barcodes, QR-Codes oder RFID-Tags auf Werkstücke an — für lückenlose Rückverfolgbarkeit und fehlerfreie Zuordnung von Aufträgen. In der Möbel- und Türenfertigung ist die digitale Etikettierung der Schlüssel zur Losgröße-1-Produktion: Jedes Teil bekommt eine eindeutige ID, die über alle Bearbeitungsstationen erhalten bleibt und mit dem ERP-Auftrag verknüpft ist. Asamer integriert LPS-Systeme in Produktionslinien für CZ, SK und HU — sowohl als Einzelstation als auch als Teil durchgängiger Automatisierungsprojekte.`,
      en: `Barbaric labelling systems (LPS) automatically apply barcodes, QR codes or RFID tags to workpieces — for seamless traceability and error-free order assignment. In furniture and door production, digital labelling is the key to batch-size-1 production: every part receives a unique ID that is preserved through all processing stations and linked to the ERP order. Asamer integrates LPS systems into production lines for CZ, SK and HU — both as a standalone station and as part of comprehensive automation projects.`,
      cz: `Barbaric etiketovací systémy (LPS) automaticky nanášejí čárové kódy, QR kódy nebo RFID tagy na obrobky — pro nepřerušenou sledovatelnost a bezchybné přiřazení zakázek. Ve výrobě nábytku a dveří je digitální etiketování klíčem k výrobě dávky 1: každý díl dostane jedinečné ID, které se uchovává přes všechny zpracovatelské stanice a je propojeno se zakázkou ERP. Asamer integruje LPS systémy do výrobních linek pro CZ, SK a HU — jako samostatnou stanici i jako součást komplexních automatizačních projektů.`,
    },
    sections: [
      {
        heading: { de: 'Warum digitale Etikettierung?', en: 'Why digital labelling?', cz: 'Proč digitální etiketování?' },
        body: {
          de: 'Manuelle Etikettierung ist zeitraubend und fehleranfällig. Bei Losgröße-1-Produktion mit vielen verschiedenen Teilen sind Verwechslungen praktisch unvermeidbar. Die automatische Etikettierung eliminiert diesen Fehlerfaktor komplett.',
          en: 'Manual labelling is time-consuming and error-prone. In batch-size-1 production with many different parts, mix-ups are practically unavoidable. Automatic labelling eliminates this error factor completely.',
          cz: 'Ruční etiketování je časově náročné a chybové. Při výrobě dávky 1 s mnoha různými díly jsou záměny prakticky nevyhnutelné. Automatické etiketování zcela odstraňuje tento chybový faktor.',
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
        },
      },
      {
        question: { de: 'Integration mit ERP?', en: 'ERP integration?', cz: 'Integrace s ERP?' },
        answer: {
          de: 'Das LPS wird mit SAP, Navision oder individuellen ERP-Systemen verknüpft. Die ID jedes Teils wird dort erzeugt und mit den Auftragsdaten verknüpft.',
          en: 'The LPS is linked to SAP, Navision or custom ERP systems. The ID of each part is generated there and linked to order data.',
          cz: 'LPS se propojuje s SAP, Navision nebo individuálními ERP systémy. ID každého dílu se tam generuje a propojuje s daty zakázek.',
        },
      },
      {
        question: { de: 'Welche Druckleistung?', en: 'What printing performance?', cz: 'Jaký tiskový výkon?' },
        answer: {
          de: 'Bis zu 1.000 Etiketten pro Stunde, je nach Werkstückwechsel und Druckformat.',
          en: 'Up to 1,000 labels per hour, depending on workpiece change and label format.',
          cz: 'Až 1.000 etiket za hodinu v závislosti na výměně obrobku a formátu etikety.',
        },
      },
    ],
  },

  'vacuum-lifters': {
    introExpanded: {
      de: `Barbaric Vakuumheber (UWL-Serie) ermöglichen die ergonomische, sichere und präzise Handhabung großer und schwerer Platten, Türen oder Arbeitsplatten. Statt von Hand zu heben — was Rückenprobleme, Plattenbrüche und Kratzer an beschichteten Oberflächen verursachen kann — wird das Werkstück berührungslos über Vakuum angehoben, schwebend positioniert und kontrolliert abgesetzt. Die UWL-Serie deckt alle typischen Anwendungen ab: UWL-3 als Standard, UWL-3S für dünnere Platten, UWL-3J für schnellere Zyklen, UWL-1 als Einstieg, UWL-5 für schwere Lasten. Asamer liefert, wartet und zertifiziert Barbaric-Vakuumheber für CZ, SK und HU — inklusive jährlicher Sicherheitsprüfung.`,
      en: `Barbaric vacuum lifters (UWL series) enable ergonomic, safe and precise handling of large and heavy panels, doors or worktops. Instead of lifting by hand — which can cause back problems, panel damage and scratches on coated surfaces — the workpiece is lifted contact-free via vacuum, positioned floating and set down in a controlled manner. The UWL series covers all typical applications: UWL-3 as standard, UWL-3S for thinner panels, UWL-3J for faster cycles, UWL-1 as entry, UWL-5 for heavy loads. Asamer supplies, services and certifies Barbaric vacuum lifters for CZ, SK and HU — including annual safety inspection.`,
      cz: `Barbaric vakuové zvedáky (řada UWL) umožňují ergonomickou, bezpečnou a přesnou manipulaci s velkými a těžkými deskami, dveřmi nebo pracovními deskami. Místo ručního zvedání — které může způsobit bolesti zad, poškození desek a škrábance na potažených površích — se obrobek bezkontaktně zvedá vakuem, polohuje v zavěšené poloze a kontrolovaně odkládá. Řada UWL pokrývá všechny typické aplikace: UWL-3 jako standard, UWL-3S pro tenčí desky, UWL-3J pro rychlejší cykly, UWL-1 jako vstup, UWL-5 pro těžká břemena. Asamer dodává, servisuje a certifikuje Barbaric vakuové zvedáky pro CZ, SK a HU — včetně roční bezpečnostní kontroly.`,
    },
    sections: [
      {
        heading: { de: 'Ergonomie und Arbeitsschutz', en: 'Ergonomics and occupational safety', cz: 'Ergonomie a bezpečnost práce' },
        body: {
          de: 'Rückenbelastung durch wiederholtes Heben ist einer der häufigsten Gründe für Arbeitsausfall in der Holzindustrie. Vakuumheber entfernen diesen Risikofaktor komplett und machen die Arbeit auch für ältere Mitarbeiter oder Frauen zugänglich.',
          en: 'Back strain from repetitive lifting is one of the most common reasons for work absence in the wood industry. Vacuum lifters completely remove this risk factor and make work accessible to older employees or women.',
          cz: 'Zatížení zad opakovaným zvedáním je jedním z nejčastějších důvodů pracovní neschopnosti v dřevařském průmyslu. Vakuové zvedáky tento rizikový faktor zcela odstraňují a zpřístupňují práci i starším pracovníkům nebo ženám.',
        },
      },
      {
        heading: { de: 'Welcher UWL ist der richtige?', en: 'Which UWL is the right one?', cz: 'Který UWL je správný?' },
        body: {
          de: 'UWL-1: Einstieg, kleinere Lasten. UWL-3: Standardmodell für die meisten Holz-Anwendungen. UWL-3S: Sonderausführung für dünne oder poröse Platten. UWL-3J: schnellere Zykluszeiten. UWL-5: Schwerlast-Variante bis große Türen und Platten.',
          en: 'UWL-1: entry, smaller loads. UWL-3: standard model for most wood applications. UWL-3S: special version for thin or porous panels. UWL-3J: faster cycle times. UWL-5: heavy-duty variant up to large doors and panels.',
          cz: 'UWL-1: vstup, menší zatížení. UWL-3: standardní model pro většinu aplikací se dřevem. UWL-3S: speciální provedení pro tenké nebo porézní desky. UWL-3J: rychlejší doby cyklu. UWL-5: varianta pro těžké břemena až po velké dveře a desky.',
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
        },
      },
      {
        question: { de: 'Brauchen wir Druckluft?', en: 'Do we need compressed air?', cz: 'Potřebujeme stlačený vzduch?' },
        answer: {
          de: 'Die meisten UWL arbeiten mit integrierter Vakuumpumpe — keine externe Druckluft nötig. Sonderausführungen mit externer Pumpe gibt es für spezielle Anwendungen.',
          en: 'Most UWLs work with an integrated vacuum pump — no external compressed air required. Special versions with external pump are available for specific applications.',
          cz: 'Většina UWL pracuje s integrovaným vakuovým čerpadlem — žádný externí stlačený vzduch není nutný. Speciální provedení s externím čerpadlem jsou k dispozici pro specifické aplikace.',
        },
      },
      {
        question: { de: 'Wie oft muss geprüft werden?', en: 'How often must they be inspected?', cz: 'Jak často se musí kontrolovat?' },
        answer: {
          de: 'Jährliche Sicherheitsprüfung nach DGUV ist Pflicht. Asamer bietet diese Prüfung im Wartungspaket an.',
          en: 'Annual safety inspection per DGUV is mandatory. Asamer offers this inspection in the maintenance package.',
          cz: 'Roční bezpečnostní kontrola dle DGUV je povinná. Asamer nabízí tuto kontrolu v servisním balíčku.',
        },
      },
    ],
  },

  'vacuum-special': {
    introExpanded: {
      de: `Barbaric Sondervakuumheber (SWL-Serie, NGR) kommen zum Einsatz, wenn Standard-Sauger nicht ausreichen: Für Bohlen (Plank-Lifter), empfindliche Oberflächen (Nadelgreifer), lange Profile oder nicht-plane Werkstücke gibt es spezialisierte Greiftechniken. SWL-Griplifter kombinieren Vakuum mit mechanischem Greifen für schwierige Geometrien; NGR-Nadelgreifer durchdringen porösen Materialien wie Dämmplatten; RWL-Racklifter heben Teile aus Regalen. Für Möbelwerke, Plattenveredler und Spezialfertigungen sind diese Sonderwerkzeuge die einzige Möglichkeit, bestimmte Handhabungsaufgaben zu automatisieren. Asamer projektiert Sondervakuumtechnik für CZ, SK und HU individuell.`,
      en: `Barbaric special vacuum lifters (SWL series, NGR) come into play when standard suction cups are not sufficient: specialised gripping techniques exist for planks (Plank-Lifter), sensitive surfaces (needle gripper), long profiles or non-flat workpieces. SWL Grip-Lifters combine vacuum with mechanical gripping for difficult geometries; NGR needle grippers penetrate porous materials like insulation panels; RWL Rack-Lifters lift parts from racks. For furniture factories, panel finishers and special manufacturing, these special tools are the only way to automate certain handling tasks. Asamer designs special vacuum technology for CZ, SK and HU individually.`,
      cz: `Barbaric speciální vakuové zvedáky (řada SWL, NGR) se nasazují tam, kde standardní přísavky nestačí: pro fošny (Plank-Lifter), citlivé povrchy (jehlový úchop), dlouhé profily nebo nerovné obrobky existují specializované úchopové techniky. SWL Grip-Lifter kombinují vakuum s mechanickým úchopem pro obtížné geometrie; NGR jehlové úchopy pronikají porézními materiály jako izolační desky; RWL Rack-Lifter zvedají díly z regálů. Pro nábytkářské závody, zpracovatele desek a speciální výroby jsou tyto speciální nástroje jedinou možností, jak automatizovat určité manipulační úlohy. Asamer projektuje speciální vakuovou techniku pro CZ, SK a HU individuálně.`,
    },
    sections: [
      {
        heading: { de: 'Wann lohnt sich Sondervakuumtechnik?', en: 'When is special vacuum technology worthwhile?', cz: 'Kdy se vyplatí speciální vakuová technika?' },
        body: {
          de: 'Sobald Standard-Vakuumtechnik an der Werkstück-Geometrie oder Oberfläche scheitert — etwa bei gebogenen Flächen, extrem dünnen Platten, porösem Material oder komplexen Formen — sind Sondervakuumheber die Lösung. Asamer klärt die Machbarkeit in der Vorplanung.',
          en: 'As soon as standard vacuum technology fails due to workpiece geometry or surface — such as curved surfaces, extremely thin panels, porous material or complex shapes — special vacuum lifters are the solution. Asamer clarifies feasibility during pre-planning.',
          cz: 'Jakmile standardní vakuová technika selhává kvůli geometrii obrobku nebo povrchu — například u zakřivených ploch, extrémně tenkých desek, porézního materiálu nebo složitých tvarů — jsou speciální vakuové zvedáky řešením. Asamer objasní proveditelnost v předběžném plánování.',
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
        },
      },
      {
        question: { de: 'Wie lange dauert die Entwicklung einer Sonderlösung?', en: 'How long does development of a special solution take?', cz: 'Jak dlouho trvá vývoj speciálního řešení?' },
        answer: {
          de: 'Typisch 8–16 Wochen von der Konzeption bis zur Auslieferung — je nach Komplexität.',
          en: 'Typically 8–16 weeks from concept to delivery — depending on complexity.',
          cz: 'Obvykle 8–16 týdnů od konceptu po dodání — v závislosti na složitosti.',
        },
      },
      {
        question: { de: 'Ist ein Standard-Vakuumheber nachrüstbar?', en: 'Can a standard vacuum lifter be retrofitted?', cz: 'Lze dovybavit standardní vakuový zvedák?' },
        answer: {
          de: 'In vielen Fällen ja — Asamer prüft die Umrüstbarkeit vorhandener UWL auf Sondersauger oder Nadelgreifer.',
          en: 'In many cases yes — Asamer checks the retrofittability of existing UWL to special cups or needle grippers.',
          cz: 'V mnoha případech ano — Asamer kontroluje možnost dovybavení stávajících UWL speciálními přísavkami nebo jehlovými úchopy.',
        },
      },
    ],
  },

  'vacuum-traverses': {
    introExpanded: {
      de: `Barbaric Vakuumtraversen sind lange Greifer-Systeme für die Handhabung großformatiger, langer oder leichter Werkstücke — etwa Dünnplatten, Türen, Bleche oder Plexiglas. Die Traverse verteilt Sauggreifer auf der gesamten Werkstückfläche und sorgt für stabile, verzugsarme Handhabung auch bei biegsamem Material. Typische Modelle: Dünnplattentraverse für dünne Spanplatten oder MDF, Türentraverse für Türelemente und Blech-Plexiglas-Traverse für Metall oder Kunststoffplatten. Für Werkstoffe, die beim konventionellen Heben durchhängen oder brechen würden, sind Traversen unverzichtbar. Asamer liefert Vakuumtraversen für CZ, SK und HU inklusive Sicherheitsabnahme.`,
      en: `Barbaric vacuum traverses are long gripper systems for handling large-format, long or lightweight workpieces — such as thin panels, doors, sheet metal or Plexiglas. The traverse distributes suction cups across the entire workpiece area and provides stable, low-warp handling even for flexible material. Typical models: thin panel traverse for thin chipboard or MDF, door traverse for door elements, and sheet-metal-Plexiglas traverse for metal or plastic panels. For materials that would sag or break during conventional lifting, traverses are indispensable. Asamer supplies vacuum traverses for CZ, SK and HU including safety acceptance.`,
      cz: `Barbaric vakuové traverzy jsou dlouhé úchopové systémy pro manipulaci s velkoformátovými, dlouhými nebo lehkými obrobky — například tenkými deskami, dveřmi, plechem nebo plexisklem. Traverza rozmísťuje přísavky po celé ploše obrobku a zajišťuje stabilní manipulaci s minimálním deformováním i u ohebného materiálu. Typické modely: traverza pro tenké desky (dřevotříska nebo MDF), dveřní traverza pro dveřní prvky a traverza plech-plexisklo pro kovové nebo plastové desky. Pro materiály, které by při běžném zvedání prohýbaly nebo praskaly, jsou traverzy nepostradatelné. Asamer dodává vakuové traverzy pro CZ, SK a HU včetně bezpečnostního schválení.`,
    },
    sections: [
      {
        heading: { de: 'Dünnplattentraverse vs. Standardheber', en: 'Thin panel traverse vs. standard lifter', cz: 'Traverza pro tenké desky vs. standardní zvedák' },
        body: {
          de: 'Dünne Platten (< 10 mm) biegen sich beim klassischen Mittelgriff-Heben durch und reißen an den Rändern. Eine Dünnplattentraverse verteilt die Last über die gesamte Fläche, sodass die Platte planar bleibt. Ein Muss in der Feinmöbel- oder Akustikplattenfertigung.',
          en: 'Thin panels (< 10 mm) sag during classic centre-grip lifting and tear at the edges. A thin panel traverse distributes the load across the entire surface so the panel remains planar. A must in fine furniture or acoustic panel production.',
          cz: 'Tenké desky (< 10 mm) se při klasickém zvedání středovým úchopem prohýbají a trhají na okrajích. Traverza pro tenké desky rozkládá zatížení po celé ploše, takže deska zůstává rovná. Nutnost ve výrobě jemného nábytku nebo akustických desek.',
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
        },
      },
      {
        question: { de: 'Für welche Plattenstärken eignet sich die Dünnplattentraverse?', en: 'What panel thicknesses is the thin panel traverse suitable for?', cz: 'Pro jaké tloušťky desek je vhodná traverza pro tenké desky?' },
        answer: {
          de: 'Ab 2 mm bis 15 mm typischerweise. Für HPL oder Folien braucht es spezielle Saugeroberflächen.',
          en: 'Typically from 2 mm to 15 mm. For HPL or foils, special cup surfaces are required.',
          cz: 'Obvykle od 2 mm do 15 mm. Pro HPL nebo fólie jsou nutné speciální povrchy přísavek.',
        },
      },
      {
        question: { de: 'Gibt es auch eine Blech-Traverse?', en: 'Is there a sheet metal traverse?', cz: 'Existuje i plechová traverza?' },
        answer: {
          de: 'Ja — Blech-Plexiglas-Traverse für Metalle und Kunststoff-Flachmaterial.',
          en: 'Yes — sheet-metal-Plexiglas traverse for metals and plastic flat material.',
          cz: 'Ano — traverza plech-plexisklo pro kovy a ploché plastové materiály.',
        },
      },
    ],
  },

  'vacuum-cranes': {
    introExpanded: {
      de: `Barbaric Vakuumkräne sind die stationären oder flächendeckenden Handhabungssysteme, wenn regelmäßige Plattenbewegungen über definierte Wege nötig sind — aber ohne vollautomatisches Flächenlager. Sie reichen von Säulenschwenkkränen (SSK) über Schienensysteme (SSY) bis zu Fachwerkbrücken (2D und 3D) für große Hallenflächen. Das gemeinsame Prinzip: Ein Kran fährt oder schwenkt über das Arbeitsfeld, nimmt Lasten über Vakuum auf und setzt sie präzise ab — gesteuert durch den Bediener oder automatisch per SPS. Für Tischlereien, Lagerbetriebe und Produktionslinien mit schweren Werkstücken sind Vakuumkräne eine wirtschaftliche Handhabungslösung. Asamer plant die passende Kran-Klasse je nach Layout und Einsatzprofil für Kunden in CZ, SK und HU.`,
      en: `Barbaric vacuum cranes are the stationary or area-covering handling systems when regular panel movements over defined paths are required — but without a fully automatic panel storage. They range from column slewing cranes (SSK) through rail systems (SSY) to truss bridges (2D and 3D) for large hall areas. The common principle: a crane travels or slews over the work area, picks up loads via vacuum and sets them down precisely — controlled by the operator or automatically via PLC. For joinery shops, warehousing operations and production lines with heavy workpieces, vacuum cranes are an economical handling solution. Asamer plans the right crane class depending on layout and operational profile for customers in CZ, SK and HU.`,
      cz: `Barbaric vakuové jeřáby jsou stacionární nebo plošné manipulační systémy, pokud jsou potřebné pravidelné pohyby desek po definovaných trasách — ale bez plně automatického skladu desek. Sahají od sloupových otočných jeřábů (SSK) přes kolejnicové systémy (SSY) až po sloupcové mosty (2D a 3D) pro velké halové plochy. Společný princip: jeřáb jede nebo se otáčí nad pracovní plochou, přijímá břemena přes vakuum a přesně je odkládá — řízené obsluhou nebo automaticky přes PLC. Pro truhlářství, skladové provozy a výrobní linky s těžkými obrobky jsou vakuové jeřáby ekonomickým manipulačním řešením. Asamer projektuje vhodnou třídu jeřábu podle rozvržení a provozního profilu pro zákazníky v CZ, SK a HU.`,
    },
    sections: [
      {
        heading: { de: 'SSK vs. SSY vs. Fachwerkbrücke', en: 'SSK vs. SSY vs. truss bridge', cz: 'SSK vs. SSY vs. sloupcový most' },
        body: {
          de: 'SSK Säulenschwenkkran: feste Position, Halbkreis-Abdeckung — ideal für einen Arbeitsplatz. SSY Schienensystem: lineare Fahrbahn — ideal für Linien oder Durchgangslager. Fachwerkbrücke 2D: rechteckige Flächenabdeckung — für mittlere Hallen. Fachwerkbrücke 3D: zusätzliche Z-Achse — für mehrstufige Bewegungen.',
          en: 'SSK column slewing crane: fixed position, semi-circle coverage — ideal for a single workstation. SSY rail system: linear path — ideal for lines or pass-through storage. Truss bridge 2D: rectangular area coverage — for medium halls. Truss bridge 3D: additional Z-axis — for multi-level movements.',
          cz: 'SSK sloupový otočný jeřáb: pevná pozice, půlkruh pokrytí — ideální pro jedno pracoviště. SSY kolejnicový systém: lineární dráha — ideální pro linky nebo průchozí sklady. Sloupcový most 2D: obdélníkové pokrytí plochy — pro střední haly. Sloupcový most 3D: další osa Z — pro víceúrovňové pohyby.',
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
        },
      },
      {
        question: { de: 'Brauchen wir Fundament?', en: 'Do we need a foundation?', cz: 'Potřebujeme základ?' },
        answer: {
          de: 'SSK und Fachwerkbrücke benötigen Fundamente, SSY wird an bestehender Deckenkonstruktion montiert. Asamer koordiniert die Bauausführung.',
          en: 'SSK and truss bridge require foundations; SSY is mounted on existing ceiling structure. Asamer coordinates construction work.',
          cz: 'SSK a sloupcový most vyžadují základy; SSY se montuje na stávající stropní konstrukci. Asamer koordinuje stavební práce.',
        },
      },
      {
        question: { de: 'Automatisch oder manuell?', en: 'Automatic or manual?', cz: 'Automaticky nebo ručně?' },
        answer: {
          de: 'Beides möglich. Kleinere Kräne werden meist manuell geführt, größere können automatisch fahren (SPS-Steuerung, Lichtschranken, ERP-Kopplung).',
          en: 'Both possible. Smaller cranes are usually operated manually, larger ones can run automatically (PLC control, light barriers, ERP coupling).',
          cz: 'Obojí možné. Menší jeřáby se obvykle ovládají ručně, větší mohou jezdit automaticky (řízení PLC, světelné závory, napojení na ERP).',
        },
      },
    ],
  },
};
