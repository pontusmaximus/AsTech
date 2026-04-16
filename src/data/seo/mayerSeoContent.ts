/**
 * SEO content for Mayer panel saw products – keyword-rich long descriptions,
 * application sections, buying advice and FAQ for each product and category.
 *
 * Target site: asamer.cz (B2B woodworking / panel-processing machinery dealer CZ/SK/HU)
 */

import type { ProductSeoContent, CategorySeoContent } from './types';
import type { MayerCategory } from '../mayerProducts';

/* ====================================================================== */
/*  Product-level SEO content – keyed by product slug                      */
/* ====================================================================== */

export const MAYER_PRODUCT_SEO: Record<string, ProductSeoContent> = {
  /* ------------------------------------------------------------------ */
  /*  kappa automatic 80                                                 */
  /* ------------------------------------------------------------------ */
  'kappa-automatic-80': {
    longDescription: {
      de: `Die Mayer kappa automatic 80 ist eine horizontale Plattenaufteilsäge, die speziell für den Einstieg in die automatisierte Plattenzuschnitt-Technologie konzipiert wurde. Mit einer Schnitthöhe von 80 mm und einer Schnittlänge von 3.200 mm bietet diese Plattensäge eine kompakte Lösung für handwerkliche Betriebe, Tischlereien und mittelständische Holzverarbeiter. Die schwere Stahlkonstruktion sorgt für eine vibrationsarme Arbeitsweise und gewährleistet höchste Wiederholgenauigkeit bei jedem Schnitt. Dank des robusten Druckbalkens und des Materialvorschubs aus Stahl ist die Ein-Mann-Bedienung problemlos möglich, was den Personaleinsatz optimiert und die Betriebskosten senkt. Die stufenlos regelbare Vorschubgeschwindigkeit von 5 bis 100 m/min erlaubt eine flexible Anpassung an unterschiedliche Holzwerkstoffe wie Spanplatten, MDF, Sperrholz und Massivholz. Der neue Sägewagen mit Schnittrichtung gegen den Anschlag verbessert die Schnittqualität erheblich. Über das ergonomische 24-Zoll-Bedienpanel mit Windows-basierter Software lassen sich Schnittmuster bequem programmieren und verwalten. Das doppelte Messsystem garantiert maximale Maßhaltigkeit. Asamer ist Ihr autorisierter Mayer-Händler für Tschechien, die Slowakei und Ungarn und bietet umfassende Beratung, Inbetriebnahme und Service für die kappa automatic 80.`,
      en: `The Mayer kappa automatic 80 is a horizontal panel saw designed as the ideal entry point into automated panel cutting technology. Featuring an 80 mm cutting height and 3,200 mm cutting length, this beam saw delivers a compact yet powerful solution for craft workshops, joinery shops and medium-sized wood processing operations. The heavy steel construction ensures low-vibration operation and guarantees the highest repeat accuracy on every single cut. Thanks to the robust steel pressure beam and steel material pusher, single-operator use is effortless, optimising labour deployment and reducing operational costs. The continuously variable feed speed ranging from 5 to 100 m/min allows flexible adaptation to different wood-based materials such as chipboard, MDF, plywood and solid wood. The new saw carriage with cutting direction against the fence significantly improves cut quality. Via the ergonomic 24-inch control panel running Windows-based software, cutting patterns can be conveniently programmed and managed. The dual measuring system guarantees maximum dimensional accuracy. Asamer is your authorised Mayer dealer for the Czech Republic, Slovakia and Hungary, offering comprehensive consultation, commissioning and after-sales service for the kappa automatic 80.`,
      cz: `Mayer kappa automatic 80 je horizontální formátovací pila navržená jako ideální vstup do technologie automatizovaného řezání desek. S výškou řezu 80 mm a délkou řezu 3 200 mm poskytuje tato pila na desky kompaktní, ale výkonné řešení pro řemeslné dílny, truhlárny a středně velké dřevozpracující provozy. Těžká ocelová konstrukce zajišťuje provoz s minimálními vibracemi a garantuje nejvyšší opakovatelnou přesnost při každém řezu. Díky robustnímu přítlačnému trámu a posuvu materiálu z oceli je obsluha jedním operátorem bezproblémová, což optimalizuje nasazení pracovníků a snižuje provozní náklady. Plynule regulovatelná rychlost posuvu od 5 do 100 m/min umožňuje flexibilní přizpůsobení různým dřevěným materiálům, jako jsou dřevotřísky, MDF, překližky a masivní dřevo. Nový pilový vozík se směrem řezu proti dorazu výrazně zlepšuje kvalitu řezu. Prostřednictvím ergonomického 24palcového ovládacího panelu s Windows softwarem lze snadno programovat a spravovat řezné plány. Dvojitý měřicí systém zaručuje maximální rozměrovou přesnost. Asamer je váš autorizovaný prodejce Mayer pro Českou republiku, Slovensko a Maďarsko a nabízí komplexní poradenství, uvedení do provozu a servis pro kappa automatic 80.`,
    },
    applicationSections: [
      {
        heading: {
          de: 'Für den Holzwerkstoff-Zuschnitt in Tischlereien',
          en: 'For wood panel cutting in joinery shops',
          cz: 'Pro řezání dřevěných desek v truhlářských dílnách',
        },
        body: {
          de: 'Die kappa automatic 80 ist die optimale Plattensäge für Tischlereien und Möbelwerkstätten, die regelmäßig Spanplatten, MDF-Platten und Sperrholz auf Maß zuschneiden. Die kompakte Bauweise spart Stellfläche, während der automatische Materialvorschub und der Druckbalken die Ein-Mann-Bedienung ermöglichen. Die 80 mm Schnitthöhe reicht für die gängigen Plattenformate im Möbelbau und Innenausbau.',
          en: 'The kappa automatic 80 is the optimal panel saw for joinery shops and furniture workshops that regularly cut chipboard, MDF and plywood to size. The compact design saves floor space while the automatic material pusher and pressure beam enable single-operator use. The 80 mm cutting height covers the common panel formats used in furniture making and interior fit-out.',
          cz: 'kappa automatic 80 je optimální formátovací pila pro truhlárny a nábytkářské dílny, které pravidelně řežou dřevotřísky, MDF desky a překližky na míru. Kompaktní konstrukce šetří podlahovou plochu, zatímco automatický posuv materiálu a přítlačný trám umožňují obsluhu jedním operátorem. Výška řezu 80 mm pokrývá běžné formáty desek používané ve výrobě nábytku a interiérových vestaveb.',
        },
      },
      {
        heading: {
          de: 'Für die Serienfertigung im Handwerk',
          en: 'For series production in craft businesses',
          cz: 'Pro sériovou výrobu v řemeslných provozech',
        },
        body: {
          de: 'Dank der Vorschubgeschwindigkeit von bis zu 100 m/min und der Schnittoptimier-Software eignet sich die kappa automatic 80 hervorragend für die wirtschaftliche Serienfertigung im Handwerk. Materialverschnitt wird minimiert, Rüstzeiten verkürzt und der Durchsatz gesteigert. Die Windows-basierte Steuerung ermöglicht eine einfache Schnittverwaltung und digitale Auftragsverarbeitung.',
          en: 'Thanks to the feed speed of up to 100 m/min and the cut optimisation software, the kappa automatic 80 is ideally suited for economical series production in craft businesses. Material waste is minimised, setup times reduced and throughput increased. The Windows-based control system enables easy cut management and digital order processing.',
          cz: 'Díky rychlosti posuvu až 100 m/min a softwaru pro optimalizaci řezů je kappa automatic 80 ideálně vhodná pro ekonomickou sériovou výrobu v řemeslných provozech. Odpad materiálu je minimalizován, časy přípravy zkráceny a průchodnost zvýšena. Řídicí systém na bázi Windows umožňuje snadnou správu řezů a digitální zpracování zakázek.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die kappa automatic 80 ist die richtige Wahl, wenn Sie eine kompakte horizontale Plattensäge für Holzwerkstoffe suchen und hauptsächlich Platten bis 80 mm Stärke verarbeiten. Sie eignet sich ideal als Einstiegsmaschine für wachsende Tischlereien, die von manuellen Formatkreissägen auf automatisierte Plattensägen umsteigen möchten. Kontaktieren Sie Asamer für ein individuelles Angebot.',
      en: 'The kappa automatic 80 is the right choice if you are looking for a compact horizontal panel saw for wood-based materials and primarily process panels up to 80 mm thickness. It is ideal as an entry-level machine for growing joinery shops upgrading from manual sliding table saws to automated panel saws. Contact Asamer for a tailored quotation.',
      cz: 'kappa automatic 80 je správná volba, pokud hledáte kompaktní horizontální formátovací pilu pro dřevěné materiály a převážně zpracováváte desky do tloušťky 80 mm. Je ideální jako vstupní stroj pro rostoucí truhlárny, které přecházejí z manuálních formátovacích kotoučových pil na automatizované formátovací pily. Kontaktujte Asamer pro individuální nabídku.',
    },
    faq: [
      {
        question: {
          de: 'Welche Materialien kann die kappa automatic 80 schneiden?',
          en: 'What materials can the kappa automatic 80 cut?',
          cz: 'Jaké materiály dokáže kappa automatic 80 řezat?',
        },
        answer: {
          de: 'Die kappa automatic 80 ist für Holzwerkstoffe wie Spanplatten, MDF, HDF, Sperrholz, Tischlerplatten und Massivholz ausgelegt. Die Schnitthöhe von 80 mm erlaubt den Zuschnitt einzelner Platten sowie kleinerer Plattenstapel.',
          en: 'The kappa automatic 80 is designed for wood-based materials such as chipboard, MDF, HDF, plywood, blockboard and solid wood. The 80 mm cutting height allows cutting of individual panels and smaller panel stacks.',
          cz: 'kappa automatic 80 je navržena pro dřevěné materiály jako dřevotřísky, MDF, HDF, překližky, stolařské desky a masivní dřevo. Výška řezu 80 mm umožňuje řezání jednotlivých desek i menších stohu desek.',
        },
      },
      {
        question: {
          de: 'Ist die kappa automatic 80 als Ein-Mann-Maschine bedienbar?',
          en: 'Can the kappa automatic 80 be operated by a single person?',
          cz: 'Lze kappa automatic 80 obsluhovat jedním operátorem?',
        },
        answer: {
          de: 'Ja, die schwere Stahlkonstruktion mit automatischem Druckbalken und Materialvorschub ermöglicht die vollständige Ein-Mann-Bedienung. Der Bediener programmiert die Schnitte am Touchpanel, und die Maschine führt Vorschub und Sägevorgang selbstständig aus.',
          en: 'Yes, the heavy steel construction with automatic pressure beam and material pusher enables full single-operator use. The operator programs cuts on the touch panel and the machine independently executes the feed and sawing process.',
          cz: 'Ano, těžká ocelová konstrukce s automatickým přítlačným trámem a posuvem materiálu umožňuje plnou obsluhu jedním operátorem. Obsluha naprogramuje řezy na dotykovém panelu a stroj samostatně provede posuv a řezný proces.',
        },
      },
      {
        question: {
          de: 'Welche Vorschubgeschwindigkeit bietet die kappa automatic 80?',
          en: 'What feed speed does the kappa automatic 80 offer?',
          cz: 'Jakou rychlost posuvu nabízí kappa automatic 80?',
        },
        answer: {
          de: 'Die Vorschubgeschwindigkeit ist stufenlos regelbar von 5 bis 100 m/min, was eine flexible Anpassung an unterschiedliche Materialien und Anforderungen ermöglicht.',
          en: 'The feed speed is continuously variable from 5 to 100 m/min, enabling flexible adaptation to different materials and requirements.',
          cz: 'Rychlost posuvu je plynule regulovatelná od 5 do 100 m/min, což umožňuje flexibilní přizpůsobení různým materiálům a požadavkům.',
        },
      },
      {
        question: {
          de: 'Wo kann ich die Mayer kappa automatic 80 kaufen?',
          en: 'Where can I buy the Mayer kappa automatic 80?',
          cz: 'Kde mohu koupit Mayer kappa automatic 80?',
        },
        answer: {
          de: 'Asamer ist der autorisierte Mayer-Händler für Tschechien, die Slowakei und Ungarn. Wir bieten persönliche Beratung, Vorführung, Lieferung, Inbetriebnahme und After-Sales-Service aus einer Hand.',
          en: 'Asamer is the authorised Mayer dealer for the Czech Republic, Slovakia and Hungary. We provide personal consultation, demonstration, delivery, commissioning and after-sales service from a single source.',
          cz: 'Asamer je autorizovaný prodejce Mayer pro Českou republiku, Slovensko a Maďarsko. Nabízíme osobní poradenství, předvedení, dodání, uvedení do provozu a poprodejní servis z jednoho zdroje.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  kappa automatic 100                                                */
  /* ------------------------------------------------------------------ */
  'kappa-automatic-100': {
    longDescription: {
      de: `Die Mayer kappa automatic 100 ist eine horizontale Plattensäge mit gehobener Ausstattung, die mehr Kraft, mehr Leistung und mehr Komfort bietet als das Einstiegsmodell. Mit einer Schnitthöhe von 100 mm und einer Schnittlänge von 3.200 mm eignet sich diese Plattenaufteilsäge hervorragend für professionelle Holzverarbeiter, Möbelhersteller und industrielle Betriebe mit mittlerem bis hohem Durchsatz. Die schwere Stahlkonstruktion bildet die Grundlage für eine vibrationsarme, präzise Arbeitsweise und garantiert eine ausgezeichnete Wiederholgenauigkeit. Der neue Sägewagen mit Schnittrichtung gegen den Anschlag sorgt für saubere Schnittkanten an Spanplatten, MDF-Platten, Multiplex und Massivholz. Die stufenlos regelbare Vorschubgeschwindigkeit von 5 bis 100 m/min ermöglicht eine optimale Anpassung an verschiedene Holzwerkstoffe und Plattendicken. Der modulare Schnittoptimierer reduziert Verschnitt und steigert die Materialausbeute deutlich. Kompatibilität mit der Ardis-Schnittoptimier-Software erlaubt die digitale Auftragsverarbeitung, die Anbindung an ERP-Systeme und eine durchgängige Produktionsplanung. Das ergonomische Bedienkonzept und die Windows-basierte Steuerung machen die tägliche Arbeit effizient und benutzerfreundlich. Asamer liefert die kappa automatic 100 nach Tschechien, in die Slowakei und nach Ungarn und unterstützt Sie mit fachkundiger Beratung, Installation und Wartung.`,
      en: `The Mayer kappa automatic 100 is a horizontal panel saw with premium equipment, offering more power, more performance and more comfort than the entry-level model. With a cutting height of 100 mm and a cutting length of 3,200 mm, this beam saw is ideally suited for professional wood processors, furniture manufacturers and industrial operations with medium to high throughput. The heavy steel construction provides the foundation for low-vibration, precise operation and guarantees excellent repeat accuracy. The new saw carriage with cutting direction against the fence ensures clean cut edges on chipboard, MDF, multiplex and solid wood. The continuously variable feed speed from 5 to 100 m/min allows optimal adaptation to various wood-based materials and panel thicknesses. The modular cut optimiser significantly reduces waste and increases material yield. Compatibility with the Ardis cut optimisation software enables digital order processing, ERP system integration and seamless production planning. The ergonomic operating concept and Windows-based control make daily work efficient and user-friendly. Asamer delivers the kappa automatic 100 to the Czech Republic, Slovakia and Hungary and supports you with expert consultation, installation and maintenance.`,
      cz: `Mayer kappa automatic 100 je horizontální formátovací pila s vyšší výbavou, která nabízí více síly, více výkonu a více komfortu oproti vstupnímu modelu. S výškou řezu 100 mm a délkou řezu 3 200 mm je tato pila na desky ideální pro profesionální dřevozpracovatele, výrobce nábytku a průmyslové provozy se středním až vysokým průchodem. Těžká ocelová konstrukce tvoří základ pro práci s minimálními vibracemi a garantuje vynikající opakovatelnou přesnost. Nový pilový vozík se směrem řezu proti dorazu zajišťuje čisté řezné hrany na dřevotřísce, MDF, multiplexu a masivním dřevu. Plynule regulovatelná rychlost posuvu od 5 do 100 m/min umožňuje optimální přizpůsobení různým dřevěným materiálům a tloušťkám desek. Modulární optimalizátor řezů výrazně snižuje odpad a zvyšuje výtěžnost materiálu. Kompatibilita se softwarem Ardis pro optimalizaci řezů umožňuje digitální zpracování zakázek, napojení na ERP systémy a komplexní plánování výroby. Ergonomický koncept ovládání a řídicí systém na bázi Windows činí každodenní práci efektivní a uživatelsky přívětivou. Asamer dodává kappa automatic 100 do České republiky, na Slovensko a do Maďarska a podporuje vás odborným poradenstvím, instalací a údržbou.`,
    },
    applicationSections: [
      {
        heading: {
          de: 'Professioneller Plattenzuschnitt im Möbelbau',
          en: 'Professional panel cutting in furniture manufacturing',
          cz: 'Profesionální řezání desek ve výrobě nábytku',
        },
        body: {
          de: 'Die kappa automatic 100 ist für Möbelhersteller konzipiert, die hohe Stückzahlen an Korpusteilen, Fronten und Einlegeböden aus Holzwerkstoffen zuschneiden. Die 100 mm Schnitthöhe erlaubt auch dickere Plattenstapel, sodass mehrere Platten in einem Durchgang geschnitten werden können. Die Schnittoptimierer-Software minimiert Verschnitt und senkt die Materialkosten pro Werkstück.',
          en: 'The kappa automatic 100 is designed for furniture manufacturers who cut high volumes of carcass parts, fronts and shelves from wood-based panels. The 100 mm cutting height allows thicker panel stacks, so multiple panels can be cut in a single pass. The cut optimiser software minimises waste and lowers material cost per workpiece.',
          cz: 'kappa automatic 100 je navržena pro výrobce nábytku, kteří řežou vysoké objemy korpusových dílů, front a polic z dřevěných desek. Výška řezu 100 mm umožňuje řezání tlustších stohu desek, takže lze řezat více desek v jednom průchodu. Software pro optimalizaci řezů minimalizuje odpad a snižuje náklady na materiál na obrobek.',
        },
      },
      {
        heading: {
          de: 'Innenausbau und Ladenbau',
          en: 'Interior fit-out and shopfitting',
          cz: 'Interiérové vestavby a výroba prodejen',
        },
        body: {
          de: 'Im Innenausbau und Ladenbau sind präzise Zuschnitte und kurze Rüstzeiten entscheidend. Die kappa automatic 100 bietet mit ihrer Ardis-Anbindung eine durchgängige digitale Auftragsverarbeitung vom Entwurf bis zum fertigen Teil. Die schwere Stahlkonstruktion garantiert auch bei Dauerbetrieb höchste Schnittqualität und Maßhaltigkeit.',
          en: 'In interior fit-out and shopfitting, precise cuts and short setup times are decisive. The kappa automatic 100, with its Ardis connectivity, provides seamless digital order processing from design to finished part. The heavy steel construction guarantees the highest cut quality and dimensional accuracy even in continuous operation.',
          cz: 'V interiérových vestavbách a výrobě prodejen jsou rozhodující přesné řezy a krátké časy přípravy. kappa automatic 100 s připojením k Ardis poskytuje bezešvé digitální zpracování zakázek od návrhu po hotový díl. Těžká ocelová konstrukce garantuje nejvyšší kvalitu řezu a rozměrovou přesnost i při nepřetržitém provozu.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Wählen Sie die kappa automatic 100, wenn Sie über das Einstiegsmodell hinauswachsen und eine höhere Schnitthöhe, mehr Komfort und modulare Schnittoptimierung benötigen. Sie ist ideal für Betriebe, die 100 mm Plattenstärke verarbeiten und die Anbindung an Ardis-Software nutzen möchten. Asamer berät Sie persönlich vor Ort.',
      en: 'Choose the kappa automatic 100 when you are outgrowing the entry-level model and need a higher cutting height, more comfort and modular cut optimisation. It is ideal for operations processing 100 mm panel thickness and wanting Ardis software integration. Asamer provides on-site personal consultation.',
      cz: 'Zvolte kappa automatic 100, pokud přerůstáte vstupní model a potřebujete vyšší výšku řezu, více komfortu a modulární optimalizaci řezů. Je ideální pro provozy zpracovávající desky o tloušťce 100 mm a chtějí napojení na software Ardis. Asamer vám poskytne osobní poradenství na místě.',
    },
    faq: [
      {
        question: {
          de: 'Was unterscheidet die kappa automatic 100 von der 80er?',
          en: 'What differentiates the kappa automatic 100 from the 80?',
          cz: 'Čím se liší kappa automatic 100 od modelu 80?',
        },
        answer: {
          de: 'Die kappa automatic 100 bietet 100 mm statt 80 mm Schnitthöhe, einen modularen Schnittoptimierer und eine gehobene Ausstattung mit mehr Komfortfunktionen. Die Schnittlänge bleibt bei 3.200 mm.',
          en: 'The kappa automatic 100 offers 100 mm instead of 80 mm cutting height, a modular cut optimiser and premium equipment with more comfort features. The cutting length remains at 3,200 mm.',
          cz: 'kappa automatic 100 nabízí výšku řezu 100 mm místo 80 mm, modulární optimalizátor řezů a vyšší výbavu s více komfortními funkcemi. Délka řezu zůstává 3 200 mm.',
        },
      },
      {
        question: {
          de: 'Kann die kappa automatic 100 mit Schnittoptimier-Software arbeiten?',
          en: 'Can the kappa automatic 100 work with cut optimisation software?',
          cz: 'Může kappa automatic 100 pracovat se softwarem pro optimalizaci řezů?',
        },
        answer: {
          de: 'Ja, die kappa automatic 100 ist kompatibel mit der Ardis-Schnittoptimier-Software, die eine automatische Berechnung optimaler Schnittmuster, eine Reduzierung des Materialverschnitts und eine digitale Auftragsverarbeitung ermöglicht.',
          en: 'Yes, the kappa automatic 100 is compatible with Ardis cut optimisation software, which enables automatic calculation of optimal cutting patterns, reduction of material waste and digital order processing.',
          cz: 'Ano, kappa automatic 100 je kompatibilní se softwarem Ardis pro optimalizaci řezů, který umožňuje automatický výpočet optimálních řezných plánů, snížení odpadu materiálu a digitální zpracování zakázek.',
        },
      },
      {
        question: {
          de: 'Für welche Betriebsgrößen eignet sich die kappa automatic 100?',
          en: 'What business sizes is the kappa automatic 100 suitable for?',
          cz: 'Pro jaké velikosti provozů je kappa automatic 100 vhodná?',
        },
        answer: {
          de: 'Die kappa automatic 100 eignet sich für mittlere bis große Handwerksbetriebe, Möbelhersteller und Innenausbau-Unternehmen mit regelmäßigem Plattenzuschnitt und mittlerem Durchsatz.',
          en: 'The kappa automatic 100 is suitable for medium to large craft businesses, furniture manufacturers and interior fit-out companies with regular panel cutting and medium throughput.',
          cz: 'kappa automatic 100 je vhodná pro středně velké až velké řemeslné provozy, výrobce nábytku a interiérové firmy s pravidelným řezáním desek a středním průchodem.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  kappa automatic 120                                                */
  /* ------------------------------------------------------------------ */
  'kappa-automatic-120': {
    longDescription: {
      de: `Die Mayer kappa automatic 120 ist eine leistungsstarke horizontale Plattensäge für das schnelle und maßgenaue Zuschneiden von Einzelplatten und Plattenpaketen. Mit 120 mm Schnitthöhe und 3.800 mm Schnittlänge bietet sie eine deutlich erweiterte Kapazität gegenüber den kleineren kappa-Modellen und ist damit die optimale Wahl für mittlere Produktionsvolumen. Die schwere Stahlkonstruktion mit massivem Druckbalken gewährleistet auch bei der Verarbeitung dicker Plattenstapel aus Spanplatten, MDF, Multiplex oder Massivholz höchste Wiederholgenauigkeit und Schnittqualität. Der stufenlos regelbare Vorschub von 5 bis 100 m/min erlaubt eine effiziente Anpassung an unterschiedliche Materialien und Plattendicken. Die erweiterte Schnittlänge von 3.800 mm ermöglicht die Verarbeitung von Großformaten, wie sie im modernen Möbelbau und Innenausbau zunehmend gefordert werden. Kompatibel mit der Ardis-Schnittoptimierung lässt sich der Verschnitt minimieren und die Materialausbeute maximieren. Die Maschine ist mit einem ergonomischen Bedienpanel ausgestattet, das eine intuitive Programmierung der Schnittmuster ermöglicht und in bestehende Produktionsabläufe integriert werden kann. Asamer liefert die kappa automatic 120 als autorisierter Mayer-Händler in Tschechien, der Slowakei und Ungarn und steht Ihnen mit Beratung, Vorführung, Lieferung und After-Sales-Service zur Seite.`,
      en: `The Mayer kappa automatic 120 is a powerful horizontal panel saw for fast and dimensionally accurate cutting of single panels and panel stacks. With 120 mm cutting height and 3,800 mm cutting length, it offers significantly expanded capacity compared to the smaller kappa models, making it the optimal choice for medium production volumes. The heavy steel construction with massive pressure beam guarantees the highest repeat accuracy and cut quality even when processing thick panel stacks of chipboard, MDF, multiplex or solid wood. The continuously variable feed from 5 to 100 m/min allows efficient adaptation to different materials and panel thicknesses. The extended 3,800 mm cutting length enables processing of large formats that are increasingly demanded in modern furniture manufacturing and interior fit-out. Compatible with Ardis cut optimisation, material waste can be minimised and yield maximised. The machine features an ergonomic control panel that allows intuitive programming of cutting patterns and can be integrated into existing production workflows. Asamer delivers the kappa automatic 120 as an authorised Mayer dealer in the Czech Republic, Slovakia and Hungary and supports you with consultation, demonstration, delivery and after-sales service.`,
      cz: `Mayer kappa automatic 120 je výkonná horizontální formátovací pila pro rychlé a rozměrově přesné řezání jednotlivých desek i balíků desek. S výškou řezu 120 mm a délkou řezu 3 800 mm nabízí výrazně rozšířenou kapacitu oproti menším modelům kappa a je tak optimální volbou pro střední objemy výroby. Těžká ocelová konstrukce s masivním přítlačným trámem zaručuje nejvyšší opakovatelnou přesnost a kvalitu řezu i při zpracování tlustých stohu desek z dřevotřísky, MDF, multiplexu nebo masivního dřeva. Plynule regulovatelný posuv od 5 do 100 m/min umožňuje efektivní přizpůsobení různým materiálům a tloušťkám desek. Rozšířená délka řezu 3 800 mm umožňuje zpracování velkých formátů, které jsou stále více požadovány v moderní výrobě nábytku a interiérových vestavbách. Kompatibilita s optimalizací řezů Ardis umožňuje minimalizovat odpad a maximalizovat výtěžnost materiálu. Stroj je vybaven ergonomickým ovládacím panelem, který umožňuje intuitivní programování řezných plánů a lze jej integrovat do stávajících výrobních procesů. Asamer dodává kappa automatic 120 jako autorizovaný prodejce Mayer v České republice, na Slovensku a v Maďarsku a stojí vám po boku s poradenstvím, předvedením, dodáním a poprodejním servisem.`,
    },
    applicationSections: [
      {
        heading: {
          de: 'Paketschnitt für mittlere Serien',
          en: 'Stack cutting for medium-volume series',
          cz: 'Řezání balíků pro středně velké série',
        },
        body: {
          de: 'Mit 120 mm Schnitthöhe ermöglicht die kappa automatic 120 das effiziente Schneiden von Plattenpaketen. Mehrere Spanplatten oder MDF-Platten werden gleichzeitig verarbeitet, was den Durchsatz bei der Serienfertigung von Korpusteilen, Regalböden und Fronten erheblich steigert.',
          en: 'With 120 mm cutting height, the kappa automatic 120 enables efficient stack cutting. Multiple chipboard or MDF panels are processed simultaneously, significantly increasing throughput in series production of carcass parts, shelves and fronts.',
          cz: 'S výškou řezu 120 mm umožňuje kappa automatic 120 efektivní řezání balíků desek. Více dřevotřískových nebo MDF desek je zpracováno současně, což výrazně zvyšuje průchodnost při sériové výrobě korpusových dílů, polic a front.',
        },
      },
      {
        heading: {
          de: 'Großformatige Platten im Innenausbau',
          en: 'Large-format panels in interior fit-out',
          cz: 'Velkoformátové desky v interiérových vestavbách',
        },
        body: {
          de: 'Die erweiterte Schnittlänge von 3.800 mm macht die kappa automatic 120 zur idealen Lösung für den Zuschnitt großformatiger Platten, wie sie im hochwertigen Innenausbau, Ladenbau und bei Wandverkleidungen verwendet werden. Auch Türblätter und Tischplatten lassen sich präzise und wirtschaftlich zuschneiden.',
          en: 'The extended 3,800 mm cutting length makes the kappa automatic 120 the ideal solution for cutting large-format panels used in high-end interior fit-out, shopfitting and wall cladding. Door panels and table tops can also be cut precisely and economically.',
          cz: 'Rozšířená délka řezu 3 800 mm činí kappa automatic 120 ideálním řešením pro řezání velkoformátových desek používaných v kvalitních interiérových vestavbách, obchodních vestavbách a obkladech stěn. Dveřní výplně a stolní desky lze rovněž řezat přesně a ekonomicky.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die kappa automatic 120 empfiehlt sich, wenn Sie regelmäßig Plattenpakete bis 120 mm schneiden und eine erweiterte Schnittlänge von 3.800 mm benötigen. Sie ist die mittlere Variante zwischen kompakter Werkstattmaschine und industriellem Flaggschiff. Fragen Sie bei Asamer nach Ihrem individuellen Angebot.',
      en: 'The kappa automatic 120 is recommended when you regularly cut panel stacks up to 120 mm and need an extended 3,800 mm cutting length. It is the mid-range option between compact workshop machine and industrial flagship. Ask Asamer for your individual quotation.',
      cz: 'kappa automatic 120 se doporučuje, pokud pravidelně řežete balíky desek do 120 mm a potřebujete rozšířenou délku řezu 3 800 mm. Je střední variantou mezi kompaktním dílenským strojem a průmyslovou vlajkovou lodí. Požádejte Asamer o individuální nabídku.',
    },
    faq: [
      {
        question: {
          de: 'Wie groß ist die maximale Schnittlänge der kappa automatic 120?',
          en: 'What is the maximum cutting length of the kappa automatic 120?',
          cz: 'Jaká je maximální délka řezu kappa automatic 120?',
        },
        answer: {
          de: 'Die kappa automatic 120 bietet eine Schnittlänge von 3.800 mm und eignet sich damit auch für großformatige Platten.',
          en: 'The kappa automatic 120 offers a 3,800 mm cutting length, making it suitable also for large-format panels.',
          cz: 'kappa automatic 120 nabízí délku řezu 3 800 mm a je tak vhodná i pro velkoformátové desky.',
        },
      },
      {
        question: {
          de: 'Kann die kappa automatic 120 Plattenpakete schneiden?',
          en: 'Can the kappa automatic 120 cut panel stacks?',
          cz: 'Může kappa automatic 120 řezat balíky desek?',
        },
        answer: {
          de: 'Ja, mit 120 mm Schnitthöhe können mehrere Platten gleichzeitig im Paket geschnitten werden. Dies steigert den Durchsatz erheblich und eignet sich besonders für die Serienfertigung.',
          en: 'Yes, with 120 mm cutting height, multiple panels can be cut simultaneously in a stack. This significantly increases throughput and is particularly suited for series production.',
          cz: 'Ano, s výškou řezu 120 mm lze řezat více desek současně v balíku. To výrazně zvyšuje průchodnost a je to zvláště vhodné pro sériovou výrobu.',
        },
      },
      {
        question: {
          de: 'Ist die kappa automatic 120 für die Möbelindustrie geeignet?',
          en: 'Is the kappa automatic 120 suitable for the furniture industry?',
          cz: 'Je kappa automatic 120 vhodná pro nábytkářský průmysl?',
        },
        answer: {
          de: 'Ja, die Maschine ist ideal für die Möbelindustrie und den Innenausbau. Die Kombination aus 120 mm Schnitthöhe, 3.800 mm Schnittlänge und Schnittoptimierung deckt die Anforderungen moderner Möbelproduktion ab.',
          en: 'Yes, the machine is ideal for the furniture industry and interior fit-out. The combination of 120 mm cutting height, 3,800 mm cutting length and cut optimisation covers the demands of modern furniture production.',
          cz: 'Ano, stroj je ideální pro nábytkářský průmysl a interiérové vestavby. Kombinace výšky řezu 120 mm, délky řezu 3 800 mm a optimalizace řezů pokrývá požadavky moderní výroby nábytku.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  kappa automatic 140                                                */
  /* ------------------------------------------------------------------ */
  'kappa-automatic-140': {
    longDescription: {
      de: `Die Mayer kappa automatic 140 ist das Flaggschiff der kappa-Serie und bietet maximale Leistung für die industrielle Serienfertigung. Mit einer beeindruckenden Schnitthöhe von 140 mm und einer Schnittlänge von 4.300 mm vereint diese horizontale Plattenaufteilsäge Kraft, Geschwindigkeit und Flexibilität auf höchstem Niveau. Die Vorschubgeschwindigkeit reicht stufenlos von 5 bis 100 m/min und zählt damit zu den schnellsten in ihrer Klasse. Die robuste Stahlkonstruktion mit massivem Druckbalken gewährleistet auch bei der Verarbeitung schwerer Plattenstapel aus Spanplatten, MDF, HDF, Multiplex und Massivholz höchste Wiederholgenauigkeit und Schnittqualität. Die großzügige Schnittlänge von 4.300 mm ermöglicht die Verarbeitung von Überformaten und langen Werkstücken, die in der industriellen Möbelfertigung und im Objektbau benötigt werden. Kompatibel mit der Ardis-Schnittoptimier-Software lassen sich selbst komplexe Schnittmuster automatisch berechnen und Verschnitt auf ein Minimum reduzieren. Die Windows-basierte Touchscreen-Steuerung erlaubt eine schnelle und intuitive Programmierung. Die kappa automatic 140 ist die erste Wahl für Fertigungsbetriebe, die keine Kompromisse bei Leistung und Präzision eingehen. Asamer liefert die kappa automatic 140 als autorisierter Mayer-Händler in Tschechien, der Slowakei und Ungarn mit umfassendem Service von der Beratung bis zur Wartung.`,
      en: `The Mayer kappa automatic 140 is the flagship of the kappa series, delivering maximum performance for industrial series production. With an impressive 140 mm cutting height and 4,300 mm cutting length, this horizontal beam saw combines power, speed and flexibility at the highest level. The feed speed is continuously variable from 5 to 100 m/min, making it one of the fastest in its class. The robust steel construction with massive pressure beam guarantees the highest repeat accuracy and cut quality even when processing heavy panel stacks of chipboard, MDF, HDF, multiplex and solid wood. The generous 4,300 mm cutting length enables processing of oversized and long workpieces required in industrial furniture manufacturing and contract work. Compatible with Ardis cut optimisation software, even complex cutting patterns are calculated automatically and waste is reduced to a minimum. The Windows-based touchscreen control allows fast and intuitive programming. The kappa automatic 140 is the first choice for manufacturing operations that accept no compromises on performance and precision. Asamer delivers the kappa automatic 140 as an authorised Mayer dealer in the Czech Republic, Slovakia and Hungary with comprehensive service from consultation to maintenance.`,
      cz: `Mayer kappa automatic 140 je vlajkovou lodí řady kappa a nabízí maximální výkon pro průmyslovou sériovou výrobu. S impozantní výškou řezu 140 mm a délkou řezu 4 300 mm spojuje tato horizontální formátovací pila sílu, rychlost a flexibilitu na nejvyšší úrovni. Rychlost posuvu je plynule regulovatelná od 5 do 100 m/min, což ji řadí mezi nejrychlejší ve své třídě. Robustní ocelová konstrukce s masivním přítlačným trámem zaručuje nejvyšší opakovatelnou přesnost a kvalitu řezu i při zpracování těžkých stohu desek z dřevotřísky, MDF, HDF, multiplexu a masivního dřeva. Velkoryse dimenzovaná délka řezu 4 300 mm umožňuje zpracování nadrozměrných a dlouhých obrobků potřebných v průmyslové výrobě nábytku a zakázkové výrobě. Kompatibilita se softwarem Ardis pro optimalizaci řezů umožňuje automatický výpočet i složitých řezných plánů a minimalizaci odpadu. Dotyková obrazovka na bázi Windows umožňuje rychlé a intuitivní programování. kappa automatic 140 je první volbou pro výrobní podniky, které nedělají kompromisy ve výkonu a přesnosti. Asamer dodává kappa automatic 140 jako autorizovaný prodejce Mayer v České republice, na Slovensku a v Maďarsku s komplexním servisem od poradenství po údržbu.`,
    },
    applicationSections: [
      {
        heading: {
          de: 'Industrielle Serienfertigung von Möbelteilen',
          en: 'Industrial series production of furniture parts',
          cz: 'Průmyslová sériová výroba nábytkových dílů',
        },
        body: {
          de: 'Die kappa automatic 140 ist für die industrielle Großserienfertigung konzipiert. Mit 140 mm Schnitthöhe können dicke Plattenpakete effizient geschnitten werden, während die Ardis-Software den Verschnitt minimiert. Die hohe Vorschubgeschwindigkeit sorgt für maximalen Durchsatz bei gleichbleibend hoher Schnittqualität.',
          en: 'The kappa automatic 140 is designed for industrial large-scale series production. With 140 mm cutting height, thick panel stacks can be cut efficiently while Ardis software minimises waste. The high feed speed ensures maximum throughput with consistently high cut quality.',
          cz: 'kappa automatic 140 je navržena pro průmyslovou velkosériovou výrobu. S výškou řezu 140 mm lze efektivně řezat tlusté balíky desek, zatímco software Ardis minimalizuje odpad. Vysoká rychlost posuvu zajišťuje maximální průchodnost při trvale vysoké kvalitě řezu.',
        },
      },
      {
        heading: {
          de: 'Objektbau und Großprojekte',
          en: 'Contract work and large-scale projects',
          cz: 'Zakázková výroba a velké projekty',
        },
        body: {
          de: 'Die 4.300 mm Schnittlänge und die 140 mm Schnitthöhe machen die kappa automatic 140 ideal für Großprojekte im Objektbau, wo überformatige Platten und hohe Stückzahlen verarbeitet werden müssen. Wandverkleidungen, Trennwände und großflächige Möbelelemente lassen sich wirtschaftlich und maßgenau zuschneiden.',
          en: 'The 4,300 mm cutting length and 140 mm cutting height make the kappa automatic 140 ideal for large-scale contract work projects where oversized panels and high volumes need to be processed. Wall cladding, partition walls and large-scale furniture elements can be cut economically and to exact dimensions.',
          cz: 'Délka řezu 4 300 mm a výška řezu 140 mm činí kappa automatic 140 ideální pro velké zakázkové projekty, kde je třeba zpracovávat nadrozměrné desky a vysoké objemy. Obklady stěn, příčky a velkoplošné nábytkové prvky lze řezat ekonomicky a rozměrově přesně.',
        },
      },
      {
        heading: {
          de: 'Holzhandel und Plattengroßhandel',
          en: 'Timber trade and panel wholesaling',
          cz: 'Obchod se dřevem a velkoobchod s deskami',
        },
        body: {
          de: 'Im Holzhandel und Plattengroßhandel ist die kappa automatic 140 ideal für den Zuschnitt-Service: Kundenaufträge werden digital empfangen, die Schnittoptimierung berechnet die effizientesten Schnittmuster, und die Maschine schneidet mit bis zu 100 m/min Vorschubgeschwindigkeit. Das reduziert Wartezeiten und erhöht die Kundenzufriedenheit.',
          en: 'In timber trade and panel wholesaling, the kappa automatic 140 is ideal for cut-to-size services: customer orders are received digitally, the cut optimiser calculates the most efficient cutting patterns, and the machine cuts at up to 100 m/min feed speed. This reduces waiting times and increases customer satisfaction.',
          cz: 'V obchodu se dřevem a velkoobchodu s deskami je kappa automatic 140 ideální pro služby řezání na míru: objednávky zákazníků jsou přijímány digitálně, optimalizátor řezů vypočítá nejefektivnější řezné plány a stroj řeže rychlostí posuvu až 100 m/min. To snižuje čekací doby a zvyšuje spokojenost zákazníků.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die kappa automatic 140 ist die richtige Wahl für industrielle Betriebe, die maximale Schnitthöhe, maximale Schnittlänge und höchsten Durchsatz in der kappa-Serie benötigen. Als Flaggschiff ist sie für den Dauerbetrieb in der Serienfertigung ausgelegt. Kontaktieren Sie Asamer für eine Vorführung und ein maßgeschneidertes Angebot.',
      en: 'The kappa automatic 140 is the right choice for industrial operations that need maximum cutting height, maximum cutting length and highest throughput in the kappa series. As the flagship, it is designed for continuous operation in series production. Contact Asamer for a demonstration and tailored quotation.',
      cz: 'kappa automatic 140 je správná volba pro průmyslové provozy, které potřebují maximální výšku řezu, maximální délku řezu a nejvyšší průchodnost v řadě kappa. Jako vlajková loď je navržena pro nepřetržitý provoz v sériové výrobě. Kontaktujte Asamer pro předvedení a nabídku na míru.',
    },
    faq: [
      {
        question: {
          de: 'Ist die kappa automatic 140 die schnellste Plattensäge ihrer Klasse?',
          en: 'Is the kappa automatic 140 the fastest panel saw in its class?',
          cz: 'Je kappa automatic 140 nejrychlejší formátovací pilou ve své třídě?',
        },
        answer: {
          de: 'Die kappa automatic 140 gehört mit einer Vorschubgeschwindigkeit von bis zu 100 m/min zu den schnellsten Plattensägen in der Klasse der horizontalen Holzplattensägen.',
          en: 'With a feed speed of up to 100 m/min, the kappa automatic 140 is among the fastest panel saws in the horizontal wood panel saw class.',
          cz: 'S rychlostí posuvu až 100 m/min patří kappa automatic 140 k nejrychlejším formátovacím pilám ve třídě horizontálních pil na dřevěné desky.',
        },
      },
      {
        question: {
          de: 'Welche Schnittlänge bietet die kappa automatic 140?',
          en: 'What cutting length does the kappa automatic 140 offer?',
          cz: 'Jakou délku řezu nabízí kappa automatic 140?',
        },
        answer: {
          de: 'Die kappa automatic 140 bietet eine Schnittlänge von 4.300 mm und ermöglicht damit die Verarbeitung von Überformaten und besonders langen Werkstücken.',
          en: 'The kappa automatic 140 offers a 4,300 mm cutting length, enabling the processing of oversized and particularly long workpieces.',
          cz: 'kappa automatic 140 nabízí délku řezu 4 300 mm, což umožňuje zpracování nadrozměrných a obzvláště dlouhých obrobků.',
        },
      },
      {
        question: {
          de: 'Für welche Branchen ist die kappa automatic 140 geeignet?',
          en: 'Which industries is the kappa automatic 140 suitable for?',
          cz: 'Pro jaké odvětví je kappa automatic 140 vhodná?',
        },
        answer: {
          de: 'Die kappa automatic 140 eignet sich für die Möbelindustrie, den Innenausbau, den Objektbau, den Holzhandel und alle Betriebe mit industriellem Plattenzuschnitt in der Serienfertigung.',
          en: 'The kappa automatic 140 is suitable for the furniture industry, interior fit-out, contract building, timber trade and all operations with industrial panel cutting in series production.',
          cz: 'kappa automatic 140 je vhodná pro nábytkářský průmysl, interiérové vestavby, zakázkovou výrobu, obchod se dřevem a všechny provozy s průmyslovým řezáním desek v sériové výrobě.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  advanced line 100                                                  */
  /* ------------------------------------------------------------------ */
  'advanced-line-100': {
    longDescription: {
      de: `Die Mayer advanced line 100 ist der bewährte Klassiker unter den Plattensägen für die Bearbeitung von Aluminium, NE-Metallen und Kunststoffen. Mit einer Motorleistung von 18/24 kW und einer Schnitthöhe von 100 mm liefert diese Plattenaufteilsäge vibrationsfreie, präzise Schnitte auch in anspruchsvollen Materialien wie Aluminium-Verbundplatten, Acrylglas, Polycarbonat und Hart-PVC. Die stabile Maschinenkonstruktion und die exzellente Sägewagenführung sorgen für gleichbleibend hohe Schnittqualität im Dauerbetrieb. Die Schnittlänge ist zwischen 3.200 und 4.200 mm konfigurierbar, was eine flexible Anpassung an verschiedene Werkstückformate ermöglicht. Die Vorschubgeschwindigkeit von 0,2 bis 60 m/min ist stufenlos regelbar und auf die besonderen Anforderungen der Metallbearbeitung abgestimmt, insbesondere die niedrigen Vorschubgeschwindigkeiten ermöglichen gratfreie Schnitte in Aluminiumplatten und Kunststoffprofilen. Universelle Rollentische ermöglichen die Ein-Mann-Bedienung und den Transport großer Platten. Die advanced line 100 hat sich in tausenden Installationen weltweit bewährt und ist der zuverlässige Partner für den täglichen Produktionsbetrieb. Asamer ist autorisierter Mayer-Händler für Tschechien, die Slowakei und Ungarn und berät Sie umfassend zur advanced line 100, einschließlich Aufstellplanung, Inbetriebnahme und Schulung.`,
      en: `The Mayer advanced line 100 is the proven classic among panel saws for processing aluminium, non-ferrous metals and plastics. With 18/24 kW motor power and a cutting height of 100 mm, this panel dividing saw delivers vibration-free, precise cuts even in demanding materials such as aluminium composite panels, acrylic glass, polycarbonate and rigid PVC. The stable machine construction and excellent saw carriage guidance ensure consistently high cut quality in continuous operation. The cutting length is configurable between 3,200 and 4,200 mm, allowing flexible adaptation to various workpiece formats. The feed speed from 0.2 to 60 m/min is continuously variable and tuned to the special requirements of metal processing; in particular, the low feed speeds enable burr-free cuts in aluminium panels and plastic profiles. Universal roller tables enable single-operator use and the transport of large panels. The advanced line 100 has proven itself in thousands of installations worldwide and is the reliable partner for daily production operations. Asamer is the authorised Mayer dealer for the Czech Republic, Slovakia and Hungary and provides comprehensive consultation on the advanced line 100, including layout planning, commissioning and training.`,
      cz: `Mayer advanced line 100 je osvědčená klasika mezi formátovacími pilami pro zpracování hliníku, neželezných kovů a plastů. S výkonem motoru 18/24 kW a výškou řezu 100 mm dodává tato pila na desky precizní řezy bez vibrací i v náročných materiálech, jako jsou hliníkové kompozitní desky, akrylátové sklo, polykarbonát a tvrdé PVC. Stabilní konstrukce stroje a vynikající vedení pilového vozíku zajišťují trvale vysokou kvalitu řezu v nepřetržitém provozu. Délka řezu je konfigurovatelná mezi 3 200 a 4 200 mm, což umožňuje flexibilní přizpůsobení různým formátům obrobků. Rychlost posuvu od 0,2 do 60 m/min je plynule regulovatelná a přizpůsobená speciálním požadavkům zpracování kovů; zejména nízké rychlosti posuvu umožňují řezy bez otřepů v hliníkových deskách a plastových profilech. Univerzální válečkové stoly umožňují obsluhu jedním operátorem a přepravu velkých desek. advanced line 100 se osvědčila v tisících instalacích po celém světě a je spolehlivým partnerem pro každodenní výrobní provoz. Asamer je autorizovaný prodejce Mayer pro Českou republiku, Slovensko a Maďarsko a poskytuje komplexní poradenství k advanced line 100, včetně plánování rozmístění, uvedení do provozu a školení.`,
    },
    applicationSections: [
      {
        heading: {
          de: 'Zuschnitt von Aluminium-Verbundplatten',
          en: 'Cutting aluminium composite panels',
          cz: 'Řezání hliníkových kompozitních desek',
        },
        body: {
          de: 'Die advanced line 100 ist prädestiniert für den Zuschnitt von Aluminium-Verbundplatten (Alucobond, Dibond und ähnliche). Die niedrige Vorschubgeschwindigkeit ab 0,2 m/min und der 18/24 kW Motor erzeugen saubere, gratfreie Schnittkanten ohne Nachbearbeitung. Fassadenbauer und Werbetechniker profitieren von der hohen Maßhaltigkeit.',
          en: 'The advanced line 100 is predestined for cutting aluminium composite panels (Alucobond, Dibond and similar). The low feed speed from 0.2 m/min and the 18/24 kW motor produce clean, burr-free cut edges without post-processing. Facade builders and sign makers benefit from the high dimensional accuracy.',
          cz: 'advanced line 100 je přímo předurčena pro řezání hliníkových kompozitních desek (Alucobond, Dibond a podobné). Nízká rychlost posuvu od 0,2 m/min a motor 18/24 kW vytvářejí čisté řezné hrany bez otřepů a bez nutnosti následného opracování. Výrobci fasád a reklamní technici profitují z vysoké rozměrové přesnosti.',
        },
      },
      {
        heading: {
          de: 'Kunststoff-Plattenbearbeitung',
          en: 'Plastic panel processing',
          cz: 'Zpracování plastových desek',
        },
        body: {
          de: 'Acrylglas (PMMA), Polycarbonat, Hart-PVC und andere technische Kunststoffe lassen sich auf der advanced line 100 gratfrei und ohne Ausrisse schneiden. Die stufenlos regelbare Vorschubgeschwindigkeit erlaubt die optimale Anpassung an unterschiedliche Kunststoffarten und Materialstärken.',
          en: 'Acrylic glass (PMMA), polycarbonate, rigid PVC and other engineering plastics can be cut on the advanced line 100 without burrs or tear-out. The continuously variable feed speed allows optimal adaptation to different plastic types and material thicknesses.',
          cz: 'Akrylátové sklo (PMMA), polykarbonát, tvrdé PVC a další technické plasty lze na advanced line 100 řezat bez otřepů a bez vytrhávání. Plynule regulovatelná rychlost posuvu umožňuje optimální přizpůsobení různým typům plastů a tloušťkám materiálu.',
        },
      },
      {
        heading: {
          de: 'NE-Metall-Verarbeitung',
          en: 'Non-ferrous metal processing',
          cz: 'Zpracování neželezných kovů',
        },
        body: {
          de: 'Neben Aluminium verarbeitet die advanced line 100 auch Messing, Kupfer und andere NE-Metalle. Die schwingungsarme Konstruktion und die präzise Sägewagenführung garantieren exakte Ergebnisse auch bei empfindlichen Materialien.',
          en: 'In addition to aluminium, the advanced line 100 also processes brass, copper and other non-ferrous metals. The low-vibration construction and precise saw carriage guidance guarantee exact results even with sensitive materials.',
          cz: 'Kromě hliníku zpracovává advanced line 100 také mosaz, měď a další neželezné kovy. Konstrukce s nízkými vibracemi a precizní vedení pilového vozíku zaručují přesné výsledky i u citlivých materiálů.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die advanced line 100 ist Ihre Wahl, wenn Sie eine bewährte Plattensäge für Aluminium und Kunststoffe in der 100-mm-Klasse suchen. Sie überzeugt durch Zuverlässigkeit und vibrationsfreie Schnitte und ist ideal für Fassadenbauer, Werbetechniker und Kunststoffverarbeiter. Asamer berät Sie persönlich.',
      en: 'The advanced line 100 is your choice when you need a proven panel saw for aluminium and plastics in the 100 mm class. It convinces with reliability and vibration-free cuts and is ideal for facade builders, sign makers and plastics processors. Asamer offers personal consultation.',
      cz: 'advanced line 100 je vaše volba, pokud hledáte osvědčenou formátovací pilu pro hliník a plasty ve třídě 100 mm. Přesvědčí spolehlivostí a řezy bez vibrací a je ideální pro výrobce fasád, reklamní techniky a zpracovatele plastů. Asamer nabízí osobní poradenství.',
    },
    faq: [
      {
        question: {
          de: 'Kann die advanced line 100 Aluminium schneiden?',
          en: 'Can the advanced line 100 cut aluminium?',
          cz: 'Může advanced line 100 řezat hliník?',
        },
        answer: {
          de: 'Ja, die advanced line 100 ist speziell für den Zuschnitt von Aluminium, Aluminium-Verbundplatten und NE-Metallen konzipiert. Der 18/24 kW Motor liefert die nötige Leistung für saubere, gratfreie Schnitte.',
          en: 'Yes, the advanced line 100 is specifically designed for cutting aluminium, aluminium composite panels and non-ferrous metals. The 18/24 kW motor delivers the necessary power for clean, burr-free cuts.',
          cz: 'Ano, advanced line 100 je speciálně navržena pro řezání hliníku, hliníkových kompozitních desek a neželezných kovů. Motor 18/24 kW dodává potřebný výkon pro čisté řezy bez otřepů.',
        },
      },
      {
        question: {
          de: 'Welche Vorschubgeschwindigkeit hat die advanced line 100?',
          en: 'What feed speed does the advanced line 100 have?',
          cz: 'Jakou rychlost posuvu má advanced line 100?',
        },
        answer: {
          de: 'Die Vorschubgeschwindigkeit beträgt 0,2 bis 60 m/min, stufenlos regelbar. Die niedrigen Geschwindigkeiten sind entscheidend für gratfreie Schnitte in Aluminium und Kunststoffen.',
          en: 'The feed speed ranges from 0.2 to 60 m/min, continuously variable. The low speeds are crucial for burr-free cuts in aluminium and plastics.',
          cz: 'Rychlost posuvu je 0,2 až 60 m/min, plynule regulovatelná. Nízké rychlosti jsou klíčové pro řezy bez otřepů v hliníku a plastech.',
        },
      },
      {
        question: {
          de: 'Welche Kunststoffe kann die advanced line 100 verarbeiten?',
          en: 'What plastics can the advanced line 100 process?',
          cz: 'Jaké plasty může advanced line 100 zpracovávat?',
        },
        answer: {
          de: 'Die advanced line 100 verarbeitet Acrylglas (PMMA), Polycarbonat, Hart-PVC, PE, PP und weitere technische Kunststoffe gratfrei und ohne Ausrisse.',
          en: 'The advanced line 100 processes acrylic glass (PMMA), polycarbonate, rigid PVC, PE, PP and other engineering plastics without burrs or tear-out.',
          cz: 'advanced line 100 zpracovává akrylátové sklo (PMMA), polykarbonát, tvrdé PVC, PE, PP a další technické plasty bez otřepů a bez vytrhávání.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  advanced line 130                                                  */
  /* ------------------------------------------------------------------ */
  'advanced-line-130': {
    longDescription: {
      de: `Die Mayer advanced line 130 ist eine vielseitige Plattensäge für Aluminium, NE-Metalle und Kunststoffe mit 130 mm Schnitthöhe und integrierter Absaugung. Die stabile Konstruktion in Kombination mit vibrationsfreien Präzisionslagern gewährleistet exakte Ergebnisse bei jedem Schnitt. Das Dual-Servo-Drive-System mit zwei unabhängigen Servomotoren liefert absolute Positioniergenauigkeit und ermöglicht programmierbare Korrekturkurven für unterschiedliche Materialien. Der 24 kW Motor treibt ein 500 mm Sägeblatt mit 142 mm Projektion an und bietet damit die Leistungsreserve, die für den Zuschnitt von dicken Aluminium-Verbundplatten und massiven Kunststoffblöcken erforderlich ist. Die Schnittlänge ist zwischen 3.200 und 4.200 mm konfigurierbar. Der doppelte Druckbalken mit Lasermessung minimiert Besäumschnitte und optimiert den Materialverbrauch. Ein patentierter Spaltkeil verhindert das Verklemmen bei Platten mit hoher Materialspannung. Die integrierte Absaugung hält den Arbeitsbereich sauber und erfüllt Arbeitsschutz-Anforderungen. Der optionale Front-Drehtisch ermöglicht eine 90°-Neupositionierung für platzsparende Flexibilität. Die advanced line 130 ist maßgeschneidert nach Kundenbedarf konfigurierbar und verbindet das Außergewöhnliche mit dem Nützlichen. Asamer bietet als autorisierter Mayer-Händler für Tschechien, die Slowakei und Ungarn umfassende Beratung und individuelle Lösungen für die advanced line 130.`,
      en: `The Mayer advanced line 130 is a versatile panel saw for aluminium, non-ferrous metals and plastics with 130 mm cutting height and integrated extraction. The stable construction combined with vibration-free precision bearings ensures exact results on every cut. The Dual Servo Drive system with two independent servo motors delivers absolute positioning accuracy and enables programmable correction curves for different materials. The 24 kW motor drives a 500 mm saw blade with 142 mm projection, providing the power reserve required for cutting thick aluminium composite panels and solid plastic blocks. The cutting length is configurable between 3,200 and 4,200 mm. The double pressure beam with laser measurement minimises trimming cuts and optimises material consumption. A patented riving knife prevents clamping on panels with high material tension. The integrated extraction keeps the work area clean and meets occupational health and safety requirements. The optional front turntable enables 90-degree repositioning for space-saving flexibility. The advanced line 130 can be custom-configured to customer needs, combining the extraordinary with the useful. Asamer, as authorised Mayer dealer for the Czech Republic, Slovakia and Hungary, offers comprehensive consultation and individual solutions for the advanced line 130.`,
      cz: `Mayer advanced line 130 je všestranná formátovací pila pro hliník, neželezné kovy a plasty s výškou řezu 130 mm a integrovaným odsáváním. Stabilní konstrukce v kombinaci s precizními ložisky bez vibrací zajišťuje přesné výsledky při každém řezu. Systém Dual Servo Drive se dvěma nezávislými servomotory dodává absolutní přesnost polohování a umožňuje programovatelné korekční křivky pro různé materiály. Motor 24 kW pohání pilový kotouč 500 mm s projekcí 142 mm a poskytuje tak výkonovou rezervu potřebnou pro řezání tlustých hliníkových kompozitních desek a masivních plastových bloků. Délka řezu je konfigurovatelná mezi 3 200 a 4 200 mm. Dvojitý přítlačný trám s laserovým měřením minimalizuje ořezové řezy a optimalizuje spotřebu materiálu. Patentovaný rozevírací klín zabraňuje zaseknutí u desek s vysokým vnitřním pnutím materiálu. Integrované odsávání udržuje pracovní prostor čistý a splňuje požadavky na bezpečnost práce. Volitelný přední otočný stůl umožňuje 90° přepolohování pro úspornou flexibilitu. advanced line 130 je konfigurovatelná na míru podle potřeb zákazníka a spojuje výjimečné s užitečným. Asamer jako autorizovaný prodejce Mayer pro Českou republiku, Slovensko a Maďarsko nabízí komplexní poradenství a individuální řešení pro advanced line 130.`,
    },
    applicationSections: [
      {
        heading: {
          de: 'Fassadenbau mit Aluminium-Verbundplatten',
          en: 'Facade construction with aluminium composite panels',
          cz: 'Stavba fasád z hliníkových kompozitních desek',
        },
        body: {
          de: 'Die advanced line 130 ist ideal für Fassadenbauer, die Aluminium-Verbundplatten wie Alucobond oder Dibond auf Maß zuschneiden. Die 130 mm Schnitthöhe erlaubt auch dickere Verbundmaterialien und Sandwichpanels. Die Lasermessung am Druckbalken reduziert Besäumschnitte und senkt die Materialkosten.',
          en: 'The advanced line 130 is ideal for facade builders cutting aluminium composite panels such as Alucobond or Dibond to size. The 130 mm cutting height accommodates thicker composite materials and sandwich panels. The laser measurement on the pressure beam reduces trimming cuts and lowers material costs.',
          cz: 'advanced line 130 je ideální pro stavitele fasád řezající hliníkové kompozitní desky jako Alucobond nebo Dibond na míru. Výška řezu 130 mm pojme i tlustší kompozitní materiály a sendvičové panely. Laserové měření na přítlačném trámu snižuje ořezové řezy a snižuje náklady na materiál.',
        },
      },
      {
        heading: {
          de: 'Kunststoffverarbeitung im Industriemaßstab',
          en: 'Plastic processing at industrial scale',
          cz: 'Zpracování plastů v průmyslovém měřítku',
        },
        body: {
          de: 'Für Kunststoffverarbeiter bietet die advanced line 130 die Kombination aus Leistung, Präzision und integrierter Absaugung. Massive Kunststoffblöcke aus Polyethylen, Polyamid oder PTFE werden ebenso sauber geschnitten wie dünne Acrylglasplatten. Der patentierte Spaltkeil verhindert das Verklemmen bei Materialien unter Spannung.',
          en: 'For plastics processors, the advanced line 130 offers the combination of power, precision and integrated extraction. Solid plastic blocks of polyethylene, polyamide or PTFE are cut as cleanly as thin acrylic sheets. The patented riving knife prevents clamping on materials under tension.',
          cz: 'Pro zpracovatele plastů nabízí advanced line 130 kombinaci výkonu, přesnosti a integrovaného odsávání. Masivní plastové bloky z polyethylenu, polyamidu nebo PTFE jsou řezány stejně čistě jako tenké akrylátové desky. Patentovaný rozevírací klín zabraňuje zaseknutí u materiálů pod pnutím.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die advanced line 130 ist optimal, wenn Sie 130 mm Schnitthöhe, integrierte Absaugung und Dual Servo Drive benötigen. Sie bietet mehr als die 100er und ist kompakter als die 160er. Ideal für Fassadenbauer, Werbetechniker und Kunststoffverarbeiter, die eine maßgeschneiderte Lösung suchen. Kontaktieren Sie Asamer für eine individuelle Konfiguration.',
      en: 'The advanced line 130 is optimal when you need 130 mm cutting height, integrated extraction and Dual Servo Drive. It offers more than the 100 and is more compact than the 160. Ideal for facade builders, sign makers and plastics processors looking for a tailored solution. Contact Asamer for individual configuration.',
      cz: 'advanced line 130 je optimální, pokud potřebujete výšku řezu 130 mm, integrované odsávání a Dual Servo Drive. Nabízí více než model 100 a je kompaktnější než model 160. Ideální pro stavitele fasád, reklamní techniky a zpracovatele plastů hledající řešení na míru. Kontaktujte Asamer pro individuální konfiguraci.',
    },
    faq: [
      {
        question: {
          de: 'Was ist das Dual Servo Drive System der advanced line 130?',
          en: 'What is the Dual Servo Drive system of the advanced line 130?',
          cz: 'Co je systém Dual Servo Drive u advanced line 130?',
        },
        answer: {
          de: 'Das Dual Servo Drive System besteht aus zwei unabhängigen Servomotoren, die absolute Positioniergenauigkeit und programmierbare Korrekturkurven für verschiedene Materialien bieten.',
          en: 'The Dual Servo Drive system consists of two independent servo motors that provide absolute positioning accuracy and programmable correction curves for different materials.',
          cz: 'Systém Dual Servo Drive sestává ze dvou nezávislých servomotorů, které poskytují absolutní přesnost polohování a programovatelné korekční křivky pro různé materiály.',
        },
      },
      {
        question: {
          de: 'Hat die advanced line 130 eine integrierte Absaugung?',
          en: 'Does the advanced line 130 have integrated extraction?',
          cz: 'Má advanced line 130 integrované odsávání?',
        },
        answer: {
          de: 'Ja, die advanced line 130 verfügt über eine integrierte Absaugung, die den Arbeitsbereich sauber hält und die Arbeitsschutz-Anforderungen erfüllt.',
          en: 'Yes, the advanced line 130 features integrated extraction that keeps the work area clean and meets occupational health and safety requirements.',
          cz: 'Ano, advanced line 130 disponuje integrovaným odsáváním, které udržuje pracovní prostor čistý a splňuje požadavky na bezpečnost práce.',
        },
      },
      {
        question: {
          de: 'Welches Sägeblatt verwendet die advanced line 130?',
          en: 'What saw blade does the advanced line 130 use?',
          cz: 'Jaký pilový kotouč používá advanced line 130?',
        },
        answer: {
          de: 'Die advanced line 130 verwendet ein 500 mm Sägeblatt mit 142 mm Projektion, angetrieben von einem 24 kW Motor.',
          en: 'The advanced line 130 uses a 500 mm saw blade with 142 mm projection, driven by a 24 kW motor.',
          cz: 'advanced line 130 používá pilový kotouč 500 mm s projekcí 142 mm, poháněný motorem 24 kW.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  advanced line 160                                                  */
  /* ------------------------------------------------------------------ */
  'advanced-line-160': {
    longDescription: {
      de: `Die Mayer advanced line 160 ist eine mehrfach preisgekrönte Hochleistungs-Plattensäge mit PC-Steuerung per Touchscreen, die 160 mm Schnitthöhe für die industrielle Bearbeitung von Aluminium, NE-Metallen und Kunststoffen bietet. Der leistungsstarke 35 kW Motor treibt ein 600 mm Sägeblatt mit 180 mm Projektion an und liefert die Schneidleistung, die für dicke Aluminium-Verbundplatten, massive Kunststoffblöcke und NE-Metall-Werkstücke erforderlich ist. Die Schnittlänge ist zwischen 3.200 und 4.200 mm konfigurierbar, bei einer Vorschubgeschwindigkeit von 0,2 bis 60 m/min. Die advanced line 160 wurde mehrfach für innovative Lösungen und Patente ausgezeichnet und setzt Maßstäbe in ihrer Klasse. Das Dual Servo Drive System mit programmierbaren Korrekturkurven gewährleistet höchste Positioniergenauigkeit unabhängig vom Material. Die PC-Steuerung mit intuitivem Touchscreen erlaubt eine komfortable Auftragsverwaltung, die Speicherung von Schnittmustern und die Integration in übergeordnete Produktionssysteme. Der Lamellen-Screen sorgt für optimale Absaugleistung und hält den Arbeitsbereich frei von Spänen und Staub. Die advanced line 160 ist ein echter Allrounder für anspruchsvolle Industrieanwendungen, bei denen hoher Durchsatz und höchste Schnittgenauigkeit gleichermaßen gefordert sind. Asamer bietet als autorisierter Mayer-Händler für Tschechien, die Slowakei und Ungarn die komplette Betreuung von Beratung über Installation bis zum After-Sales-Service.`,
      en: `The Mayer advanced line 160 is a multiple award-winning high-performance panel saw with PC control via touchscreen, offering 160 mm cutting height for industrial processing of aluminium, non-ferrous metals and plastics. The powerful 35 kW motor drives a 600 mm saw blade with 180 mm projection, delivering the cutting performance required for thick aluminium composite panels, solid plastic blocks and non-ferrous metal workpieces. The cutting length is configurable between 3,200 and 4,200 mm with a feed speed of 0.2 to 60 m/min. The advanced line 160 has won multiple awards for innovative solutions and patents, setting benchmarks in its class. The Dual Servo Drive system with programmable correction curves ensures the highest positioning accuracy regardless of material. The PC control with intuitive touchscreen enables comfortable order management, storage of cutting patterns and integration into higher-level production systems. The Lamella Screen provides optimal extraction performance and keeps the work area free from chips and dust. The advanced line 160 is a true all-rounder for demanding industrial applications where high throughput and maximum cutting accuracy are equally required. Asamer, as the authorised Mayer dealer for the Czech Republic, Slovakia and Hungary, provides complete support from consultation through installation to after-sales service.`,
      cz: `Mayer advanced line 160 je mnohonásobně oceněná vysokovýkonná formátovací pila s PC řízením přes dotykový displej, nabízející výšku řezu 160 mm pro průmyslové zpracování hliníku, neželezných kovů a plastů. Výkonný motor 35 kW pohání pilový kotouč 600 mm s projekcí 180 mm a dodává řezný výkon potřebný pro tlusté hliníkové kompozitní desky, masivní plastové bloky a obrobky z neželezných kovů. Délka řezu je konfigurovatelná mezi 3 200 a 4 200 mm při rychlosti posuvu 0,2 až 60 m/min. advanced line 160 získala několik ocenění za inovativní řešení a patenty a stanovuje měřítka ve své třídě. Systém Dual Servo Drive s programovatelnými korekčními křivkami zajišťuje nejvyšší přesnost polohování nezávisle na materiálu. PC řízení s intuitivním dotykovým displejem umožňuje komfortní správu zakázek, ukládání řezných plánů a integraci do nadřazených výrobních systémů. Lamelový screen zajišťuje optimální výkon odsávání a udržuje pracovní prostor bez třísek a prachu. advanced line 160 je skutečný univerzál pro náročné průmyslové aplikace, kde jsou stejně vyžadovány vysoká průchodnost a maximální přesnost řezu. Asamer jako autorizovaný prodejce Mayer pro Českou republiku, Slovensko a Maďarsko poskytuje kompletní podporu od poradenství přes instalaci po poprodejní servis.`,
    },
    applicationSections: [
      {
        heading: {
          de: 'Industrielle Aluminium-Plattenbearbeitung',
          en: 'Industrial aluminium panel processing',
          cz: 'Průmyslové zpracování hliníkových desek',
        },
        body: {
          de: 'Die advanced line 160 ist die erste Wahl für industrielle Aluminium-Verarbeiter mit hohem Durchsatz. Der 35 kW Motor und das 600 mm Sägeblatt schneiden auch dicke Aluminiumplatten und Verbundwerkstoffe präzise und gratfrei. Die PC-Steuerung ermöglicht die Speicherung tausender Schnittmuster und eine nahtlose ERP-Integration.',
          en: 'The advanced line 160 is the first choice for industrial aluminium processors with high throughput. The 35 kW motor and 600 mm saw blade cut even thick aluminium panels and composite materials precisely and burr-free. The PC control enables storage of thousands of cutting patterns and seamless ERP integration.',
          cz: 'advanced line 160 je první volbou pro průmyslové zpracovatele hliníku s vysokým průchodem. Motor 35 kW a pilový kotouč 600 mm řežou i tlusté hliníkové desky a kompozitní materiály přesně a bez otřepů. PC řízení umožňuje ukládání tisíců řezných plánů a bezešvou integraci do ERP.',
        },
      },
      {
        heading: {
          de: 'Technische Kunststoffe und Composites',
          en: 'Engineering plastics and composites',
          cz: 'Technické plasty a kompozity',
        },
        body: {
          de: 'Die Kombination aus variabler Vorschubgeschwindigkeit und programmierbaren Korrekturkurven macht die advanced line 160 ideal für die Verarbeitung technischer Kunststoffe wie PTFE, PEEK, POM und glasfaserverstärkter Composites. Der Lamellen-Screen sorgt für eine effiziente Absaugung der Kunststoff-Späne.',
          en: 'The combination of variable feed speed and programmable correction curves makes the advanced line 160 ideal for processing engineering plastics like PTFE, PEEK, POM and glass-fibre reinforced composites. The Lamella Screen ensures efficient extraction of plastic chips.',
          cz: 'Kombinace variabilní rychlosti posuvu a programovatelných korekčních křivek činí advanced line 160 ideální pro zpracování technických plastů jako PTFE, PEEK, POM a skleněnými vlákny vyztužených kompozitů. Lamelový screen zajišťuje efektivní odsávání plastových třísek.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die advanced line 160 ist Ihre Wahl bei industriellen Anforderungen an Schnitthöhe (160 mm), Motorleistung (35 kW) und PC-Steuerung. Sie eignet sich für Betriebe, die Aluminium, Kunststoffe und NE-Metalle im Dauerbetrieb mit hoher Stückzahl verarbeiten. Lassen Sie sich von Asamer ein individuelles Angebot erstellen.',
      en: 'The advanced line 160 is your choice for industrial requirements in cutting height (160 mm), motor power (35 kW) and PC control. It suits operations processing aluminium, plastics and non-ferrous metals in continuous high-volume production. Let Asamer prepare a tailored quotation for you.',
      cz: 'advanced line 160 je vaše volba pro průmyslové požadavky na výšku řezu (160 mm), výkon motoru (35 kW) a PC řízení. Hodí se pro provozy zpracovávající hliník, plasty a neželezné kovy v nepřetržité velkoobjemové výrobě. Nechte si od Asamer vypracovat nabídku na míru.',
    },
    faq: [
      {
        question: {
          de: 'Welche Steuerung hat die advanced line 160?',
          en: 'What control system does the advanced line 160 have?',
          cz: 'Jaký řídicí systém má advanced line 160?',
        },
        answer: {
          de: 'Die advanced line 160 verfügt über eine PC-Steuerung mit Touchscreen, die intuitive Auftragsplanung, Speicherung von Schnittmustern und ERP-Integration ermöglicht.',
          en: 'The advanced line 160 features PC control with touchscreen, enabling intuitive order planning, storage of cutting patterns and ERP integration.',
          cz: 'advanced line 160 disponuje PC řízením s dotykovým displejem, které umožňuje intuitivní plánování zakázek, ukládání řezných plánů a integraci do ERP.',
        },
      },
      {
        question: {
          de: 'Wie stark ist der Motor der advanced line 160?',
          en: 'How powerful is the motor of the advanced line 160?',
          cz: 'Jak výkonný je motor advanced line 160?',
        },
        answer: {
          de: 'Die advanced line 160 ist mit einem 35 kW Motor ausgestattet, der ein 600 mm Sägeblatt mit 180 mm Projektion antreibt.',
          en: 'The advanced line 160 is equipped with a 35 kW motor driving a 600 mm saw blade with 180 mm projection.',
          cz: 'advanced line 160 je vybavena motorem 35 kW, který pohání pilový kotouč 600 mm s projekcí 180 mm.',
        },
      },
      {
        question: {
          de: 'Wofür wurde die advanced line 160 ausgezeichnet?',
          en: 'What awards has the advanced line 160 received?',
          cz: 'Za co byla advanced line 160 oceněna?',
        },
        answer: {
          de: 'Die advanced line 160 wurde mehrfach für innovative Lösungen und Patente ausgezeichnet, darunter das Dual Servo Drive System und die PC-Steuerung per Touchscreen.',
          en: 'The advanced line 160 has received multiple awards for innovative solutions and patents, including the Dual Servo Drive system and PC control via touchscreen.',
          cz: 'advanced line 160 získala mnohonásobná ocenění za inovativní řešení a patenty, včetně systému Dual Servo Drive a PC řízení přes dotykový displej.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  advanced line 160 turn                                             */
  /* ------------------------------------------------------------------ */
  'advanced-line-160-turn': {
    longDescription: {
      de: `Die Mayer advanced line 160 turn erweitert die bewährte 160er-Plattform um eine automatische 90°-Wendeinheit und ermöglicht damit beidseitige Bearbeitung in einem Durchgang. Diese Plattenaufteilsäge ist speziell für Produktionslinien konzipiert, bei denen Längs- und Querschnitte ohne manuelles Umsetzen der Werkstücke durchgeführt werden sollen. Die 160 mm Schnitthöhe, der 35 kW Motor und das 600 mm Sägeblatt mit 180 mm Projektion bieten die gleiche Leistungsfähigkeit wie die Standard-160er-Version. Die automatische Wendeinheit dreht die Platten um 90° und positioniert sie für den nächsten Schnitt, was den Materialfluss beschleunigt und Bedienereingriffe minimiert. Dies ist besonders wertvoll bei der Verarbeitung großformatiger Aluminium-Verbundplatten und schwerer Kunststoffplatten, die manuell nur schwer zu handhaben sind. Das Dual Servo Drive System garantiert höchste Positioniergenauigkeit auch nach dem Wendevorgang. Die komfortable Bedienbarkeit ermöglicht ein einfaches Materialhandling selbst bei übergroßen Platten. Die Schnittlänge ist zwischen 3.200 und 4.200 mm konfigurierbar. Der doppelte Druckbalken mit Lasermessung stellt sicher, dass beide Schnittrichtungen die gleiche Präzision erreichen. Die advanced line 160 turn ist die logische Wahl für Betriebe, die Produktivität und Automatisierung in der Aluminium- und Kunststoffverarbeitung auf die nächste Stufe heben möchten. Asamer ist Ihr Ansprechpartner als autorisierter Mayer-Händler für CZ, SK und HU.`,
      en: `The Mayer advanced line 160 turn extends the proven 160 platform with an automatic 90-degree turning unit, enabling double-sided processing in a single pass. This panel dividing saw is specifically designed for production lines where longitudinal and cross cuts need to be performed without manual repositioning of workpieces. The 160 mm cutting height, 35 kW motor and 600 mm saw blade with 180 mm projection deliver the same capability as the standard 160 version. The automatic turning unit rotates panels by 90 degrees and positions them for the next cut, accelerating material flow and minimising operator intervention. This is particularly valuable when processing large-format aluminium composite panels and heavy plastic sheets that are difficult to handle manually. The Dual Servo Drive system guarantees the highest positioning accuracy even after the turning operation. The comfortable operability enables easy material handling even with oversized panels. The cutting length is configurable between 3,200 and 4,200 mm. The double pressure beam with laser measurement ensures that both cutting directions achieve the same precision. The advanced line 160 turn is the logical choice for operations wanting to take productivity and automation in aluminium and plastics processing to the next level. Asamer is your contact as the authorised Mayer dealer for CZ, SK and HU.`,
      cz: `Mayer advanced line 160 turn rozšiřuje osvědčenou platformu 160 o automatickou 90° otočnou jednotku a umožňuje tak oboustranné zpracování v jednom průchodu. Tato formátovací pila je speciálně navržena pro výrobní linky, kde je třeba provádět podélné i příčné řezy bez manuálního přemisťování obrobků. Výška řezu 160 mm, motor 35 kW a pilový kotouč 600 mm s projekcí 180 mm nabízejí stejný výkon jako standardní verze 160. Automatická otočná jednotka otáčí desky o 90° a polohuje je pro další řez, čímž urychluje materiálový tok a minimalizuje zásahy obsluhy. To je zvláště cenné při zpracování velkoformátových hliníkových kompozitních desek a těžkých plastových desek, které lze manuálně jen obtížně manipulovat. Systém Dual Servo Drive zaručuje nejvyšší přesnost polohování i po otočení. Komfortní ovládání umožňuje snadnou manipulaci s materiálem i u nadrozměrných desek. Délka řezu je konfigurovatelná mezi 3 200 a 4 200 mm. Dvojitý přítlačný trám s laserovým měřením zajišťuje, že oba směry řezu dosahují stejné přesnosti. advanced line 160 turn je logická volba pro provozy, které chtějí posunout produktivitu a automatizaci ve zpracování hliníku a plastů na další úroveň. Asamer je váš kontakt jako autorizovaný prodejce Mayer pro CZ, SK a HU.`,
    },
    applicationSections: [
      {
        heading: {
          de: 'Automatisierte Längs- und Querschnitte in einem Durchgang',
          en: 'Automated longitudinal and cross cuts in a single pass',
          cz: 'Automatizované podélné a příčné řezy v jednom průchodu',
        },
        body: {
          de: 'Die 90°-Wendeinheit der advanced line 160 turn ermöglicht Längs- und Querschnitte ohne manuelles Umsetzen. Die Platten werden automatisch gedreht und für den nächsten Schnitt positioniert. Dies steigert den Durchsatz um bis zu 40 % gegenüber Maschinen ohne Wendeinheit und reduziert den Personalbedarf.',
          en: 'The 90-degree turning unit of the advanced line 160 turn enables longitudinal and cross cuts without manual repositioning. Panels are automatically rotated and positioned for the next cut. This increases throughput by up to 40% compared to machines without a turning unit and reduces staffing requirements.',
          cz: 'Otočná jednotka 90° u advanced line 160 turn umožňuje podélné a příčné řezy bez manuálního přemisťování. Desky jsou automaticky otočeny a polohovány pro další řez. To zvyšuje průchodnost až o 40 % oproti strojům bez otočné jednotky a snižuje potřebu personálu.',
        },
      },
      {
        heading: {
          de: 'Großformatige Aluminium-Verarbeitung',
          en: 'Large-format aluminium processing',
          cz: 'Zpracování velkých hliníkových formátů',
        },
        body: {
          de: 'Bei der Verarbeitung großformatiger Aluminiumplatten und Verbundwerkstoffe ist die Wendeinheit ein enormer Vorteil: Schwere Platten müssen nicht von Hand gedreht werden, was die Ergonomie verbessert, Beschädigungen verhindert und den Materialfluss optimiert.',
          en: 'When processing large-format aluminium panels and composites, the turning unit is an enormous advantage: heavy panels do not need to be turned manually, improving ergonomics, preventing damage and optimising material flow.',
          cz: 'Při zpracování velkoformátových hliníkových desek a kompozitů je otočná jednotka obrovskou výhodou: těžké desky nemusí být ručně otáčeny, což zlepšuje ergonomii, zabraňuje poškození a optimalizuje materiálový tok.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Wählen Sie die advanced line 160 turn, wenn Sie in Ihrer Produktion regelmäßig Längs- und Querschnitte an Aluminium- oder Kunststoffplatten benötigen und den Wendevorgang automatisieren möchten. Die Investition amortisiert sich durch höheren Durchsatz und geringeren Personalbedarf. Asamer berät Sie zur optimalen Konfiguration.',
      en: 'Choose the advanced line 160 turn when your production regularly requires longitudinal and cross cuts on aluminium or plastic panels and you want to automate the turning process. The investment pays off through higher throughput and lower staffing requirements. Asamer advises you on the optimal configuration.',
      cz: 'Zvolte advanced line 160 turn, pokud ve vaší výrobě pravidelně potřebujete podélné a příčné řezy na hliníkových nebo plastových deskách a chcete automatizovat otáčení. Investice se vrátí díky vyšší průchodnosti a nižší potřebě personálu. Asamer vám poradí s optimální konfigurací.',
    },
    faq: [
      {
        question: {
          de: 'Was macht die Wendeinheit der advanced line 160 turn?',
          en: 'What does the turning unit of the advanced line 160 turn do?',
          cz: 'Co dělá otočná jednotka advanced line 160 turn?',
        },
        answer: {
          de: 'Die automatische 90°-Wendeinheit dreht Werkstücke nach dem Längsschnitt um 90° und positioniert sie für den Querschnitt. So werden beide Schnittrichtungen in einem Durchgang ohne manuelles Eingreifen durchgeführt.',
          en: 'The automatic 90-degree turning unit rotates workpieces by 90 degrees after the longitudinal cut and positions them for the cross cut. Both cutting directions are performed in a single pass without manual intervention.',
          cz: 'Automatická 90° otočná jednotka otočí obrobky po podélném řezu o 90° a napolohuje je pro příčný řez. Oba směry řezu jsou provedeny v jednom průchodu bez manuálního zásahu.',
        },
      },
      {
        question: {
          de: 'Wie viel Produktivitätsgewinn bringt die Wendeinheit?',
          en: 'How much productivity gain does the turning unit provide?',
          cz: 'Jaký nárůst produktivity přináší otočná jednotka?',
        },
        answer: {
          de: 'Die Wendeinheit kann den Durchsatz um bis zu 40 % steigern, da das manuelle Drehen und Neupositionieren der Platten entfällt und der Materialfluss kontinuierlich läuft.',
          en: 'The turning unit can increase throughput by up to 40% as manual turning and repositioning of panels is eliminated and the material flow runs continuously.',
          cz: 'Otočná jednotka může zvýšit průchodnost až o 40 %, protože odpadá manuální otáčení a přepolohování desek a materiálový tok probíhá nepřetržitě.',
        },
      },
      {
        question: {
          de: 'Für welche Materialien eignet sich die advanced line 160 turn?',
          en: 'What materials is the advanced line 160 turn suitable for?',
          cz: 'Pro jaké materiály je advanced line 160 turn vhodná?',
        },
        answer: {
          de: 'Die advanced line 160 turn eignet sich für Aluminium, Aluminium-Verbundplatten, NE-Metalle und Kunststoffe aller Art, von Acrylglas über PVC bis zu technischen Hochleistungs-Kunststoffen.',
          en: 'The advanced line 160 turn is suitable for aluminium, aluminium composite panels, non-ferrous metals and all types of plastics, from acrylic glass and PVC to high-performance engineering plastics.',
          cz: 'advanced line 160 turn je vhodná pro hliník, hliníkové kompozitní desky, neželezné kovy a plasty všeho druhu, od akrylátového skla přes PVC po technické vysokovýkonné plasty.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  advanced line 200                                                  */
  /* ------------------------------------------------------------------ */
  'advanced-line-200': {
    longDescription: {
      de: `Die Mayer advanced line 200 ist eine Hochleistungs-Plattensäge für großformatige Werkstücke aus Aluminium, NE-Metallen und Kunststoffen. Mit einer eindrucksvollen Schnitthöhe von 200 mm, einer Schnittlänge bis 5.600 mm und einem 43 kW Motor ist sie das Arbeitstier für anspruchsvolle Industrieumgebungen. Das 670 mm Sägeblatt mit 215 mm Projektion liefert die Schneidleistung, die für massive Aluminiumpakete und dicke Kunststoffblöcke erforderlich ist. Der schwere Maschinenkörper ist für eine außergewöhnliche Belastbarkeit konstruiert und bleibt auch bei maximaler Beanspruchung absolut stabil. Das Dual Servo Drive System mit separaten Messsystemen garantiert höchste Positioniergenauigkeit, und der doppelte Druckbalken mit Lasermessung stellt eine gleichmäßige Klemmung über die gesamte Werkstücklänge sicher. Die Vorschubgeschwindigkeit von 0,2 bis 60 m/min erlaubt sowohl langsame, gratfreie Schnitte in Aluminium als auch schnelle Durchsätze bei weicheren Kunststoffen. Die Schnittlänge bis 5.600 mm eröffnet Möglichkeiten im Transport-, Fahrzeug- und Containerbau, wo überformatige Platten verarbeitet werden. Die advanced line 200 ist die Maschine für Betriebe, die keine Grenzen bei Werkstückgröße und Materialstärke akzeptieren. Asamer ist als autorisierter Mayer-Händler Ihr Partner für Beratung, Lieferung und Service in Tschechien, der Slowakei und Ungarn.`,
      en: `The Mayer advanced line 200 is a high-performance panel saw for large-format workpieces of aluminium, non-ferrous metals and plastics. With an impressive 200 mm cutting height, cutting length up to 5,600 mm and a 43 kW motor, it is the workhorse for demanding industrial environments. The 670 mm saw blade with 215 mm projection delivers the cutting performance required for massive aluminium stacks and thick plastic blocks. The heavy machine body is engineered for exceptional load capacity and remains absolutely stable even under maximum stress. The Dual Servo Drive system with separate measuring systems guarantees the highest positioning accuracy, and the double pressure beam with laser measurement ensures uniform clamping across the entire workpiece length. The feed speed from 0.2 to 60 m/min allows both slow, burr-free cuts in aluminium and fast throughput with softer plastics. The cutting length up to 5,600 mm opens possibilities in transport, vehicle and container construction, where oversized panels are processed. The advanced line 200 is the machine for operations that accept no limits on workpiece size and material thickness. Asamer is your partner as the authorised Mayer dealer for consultation, delivery and service in the Czech Republic, Slovakia and Hungary.`,
      cz: `Mayer advanced line 200 je vysokovýkonná formátovací pila pro velkoformátové obrobky z hliníku, neželezných kovů a plastů. S impozantní výškou řezu 200 mm, délkou řezu až 5 600 mm a motorem 43 kW je to tahoun pro náročná průmyslová prostředí. Pilový kotouč 670 mm s projekcí 215 mm dodává řezný výkon potřebný pro masivní hliníkové balíky a tlusté plastové bloky. Těžký strojní rám je zkonstruován pro výjimečnou nosnost a zůstává absolutně stabilní i při maximálním zatížení. Systém Dual Servo Drive se separátními měřicími systémy zaručuje nejvyšší přesnost polohování a dvojitý přítlačný trám s laserovým měřením zajišťuje rovnoměrné upnutí po celé délce obrobku. Rychlost posuvu od 0,2 do 60 m/min umožňuje jak pomalé řezy bez otřepů v hliníku, tak rychlé průchody u měkčích plastů. Délka řezu až 5 600 mm otevírá možnosti v dopravním, automobilovém a kontejnerovém průmyslu, kde se zpracovávají nadrozměrné desky. advanced line 200 je stroj pro provozy, které nepřijímají žádné omezení velikosti obrobku a tloušťky materiálu. Asamer je váš partner jako autorizovaný prodejce Mayer pro poradenství, dodávky a servis v České republice, na Slovensku a v Maďarsku.`,
    },
    applicationSections: [
      {
        heading: {
          de: 'Großformat-Schnitte im Transportbau',
          en: 'Large-format cuts in transport construction',
          cz: 'Velkoformátové řezy v dopravním průmyslu',
        },
        body: {
          de: 'Im Fahrzeug-, Container- und Transportbau werden Aluminiumplatten und Kunststoffpanels in Überformaten verarbeitet. Die advanced line 200 bietet mit 5.600 mm Schnittlänge und 200 mm Schnitthöhe die Kapazität, die für diese Anwendungen erforderlich ist. Der 43 kW Motor und das 670 mm Sägeblatt gewährleisten auch bei dicken Materialstapeln saubere Schnitte.',
          en: 'In vehicle, container and transport construction, aluminium panels and plastic panels are processed in oversized formats. The advanced line 200, with 5,600 mm cutting length and 200 mm cutting height, offers the capacity required for these applications. The 43 kW motor and 670 mm saw blade ensure clean cuts even on thick material stacks.',
          cz: 'V automobilovém, kontejnerovém a dopravním průmyslu se zpracovávají hliníkové desky a plastové panely v nadrozměrných formátech. advanced line 200 s délkou řezu 5 600 mm a výškou řezu 200 mm nabízí kapacitu potřebnou pro tyto aplikace. Motor 43 kW a pilový kotouč 670 mm zajišťují čisté řezy i na tlustých stohoch materiálu.',
        },
      },
      {
        heading: {
          de: 'Schwere Industrieproduktion',
          en: 'Heavy industrial production',
          cz: 'Těžká průmyslová výroba',
        },
        body: {
          de: 'Für die schwere Industrieproduktion, in der massive Aluminium- und Kunststoffblöcke auf Maß geschnitten werden, ist die advanced line 200 mit ihrem 43 kW Motor und dem schweren Maschinenkörper konstruiert. Das Dual Servo Drive mit separaten Messsystemen garantiert Maßhaltigkeit auch nach tausenden Schnitten im Dauerbetrieb.',
          en: 'For heavy industrial production where massive aluminium and plastic blocks are cut to size, the advanced line 200 is built with its 43 kW motor and heavy machine body. The Dual Servo Drive with separate measuring systems guarantees dimensional accuracy even after thousands of cuts in continuous operation.',
          cz: 'Pro těžkou průmyslovou výrobu, kde se masivní hliníkové a plastové bloky řežou na míru, je advanced line 200 zkonstruována se svým motorem 43 kW a těžkým strojním rámem. Dual Servo Drive se separátními měřicími systémy zaručuje rozměrovou přesnost i po tisících řezech v nepřetržitém provozu.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die advanced line 200 ist die richtige Maschine, wenn Sie 200 mm Schnitthöhe, 5.600 mm Schnittlänge und 43 kW Motorleistung benötigen. Sie eignet sich für Industrieproduktion mit großformatigen Aluminium- und Kunststoff-Werkstücken. Asamer erstellt Ihnen ein Angebot mit individueller Konfiguration.',
      en: 'The advanced line 200 is the right machine when you need 200 mm cutting height, 5,600 mm cutting length and 43 kW motor power. It suits industrial production with large-format aluminium and plastic workpieces. Asamer prepares a quotation with individual configuration for you.',
      cz: 'advanced line 200 je správný stroj, pokud potřebujete výšku řezu 200 mm, délku řezu 5 600 mm a výkon motoru 43 kW. Hodí se pro průmyslovou výrobu s velkoformátovými hliníkovými a plastovými obrobky. Asamer vám vypracuje nabídku s individuální konfigurací.',
    },
    faq: [
      {
        question: {
          de: 'Wie groß ist die maximale Schnittlänge der advanced line 200?',
          en: 'What is the maximum cutting length of the advanced line 200?',
          cz: 'Jaká je maximální délka řezu advanced line 200?',
        },
        answer: {
          de: 'Die advanced line 200 bietet eine Schnittlänge bis 5.600 mm, ideal für überformatige Platten im Transport- und Containerbau.',
          en: 'The advanced line 200 offers a cutting length up to 5,600 mm, ideal for oversized panels in transport and container construction.',
          cz: 'advanced line 200 nabízí délku řezu až 5 600 mm, ideální pro nadrozměrné desky v dopravním a kontejnerovém průmyslu.',
        },
      },
      {
        question: {
          de: 'Welchen Motor hat die advanced line 200?',
          en: 'What motor does the advanced line 200 have?',
          cz: 'Jaký motor má advanced line 200?',
        },
        answer: {
          de: 'Die advanced line 200 ist mit einem leistungsstarken 43 kW Motor ausgestattet, der ein 670 mm Sägeblatt mit 215 mm Projektion antreibt.',
          en: 'The advanced line 200 is equipped with a powerful 43 kW motor driving a 670 mm saw blade with 215 mm projection.',
          cz: 'advanced line 200 je vybavena výkonným motorem 43 kW, který pohání pilový kotouč 670 mm s projekcí 215 mm.',
        },
      },
      {
        question: {
          de: 'Für welche Industrien eignet sich die advanced line 200?',
          en: 'Which industries is the advanced line 200 suitable for?',
          cz: 'Pro jaká odvětví je advanced line 200 vhodná?',
        },
        answer: {
          de: 'Die advanced line 200 eignet sich für den Transportbau, Fahrzeugbau, Containerbau, Fassadenbau und alle Industrien, die großformatige Aluminium- oder Kunststoffplatten verarbeiten.',
          en: 'The advanced line 200 is suitable for transport, vehicle and container construction, facade building and all industries processing large-format aluminium or plastic panels.',
          cz: 'advanced line 200 je vhodná pro dopravní, automobilový a kontejnerový průmysl, stavbu fasád a všechna odvětví zpracovávající velkoformátové hliníkové nebo plastové desky.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  advanced line 250                                                  */
  /* ------------------------------------------------------------------ */
  'advanced-line-250': {
    longDescription: {
      de: `Die Mayer advanced line 250 ist die stärkste Plattenaufteilsäge ihrer Klasse und setzt mit einem 55/75 kW Motor, einem 860 mm Sägeblattdurchmesser und 270 mm Projektion neue Maßstäbe in der industriellen Plattenzuschnitt-Technologie. Diese Plattensäge wurde für kompromisslose Industrieproduktion konzipiert, dort wo maximale Schneidleistung und höchste Schnittqualität gleichermaßen zählen. Die Schnitthöhe von 250 mm und die konfigurierbare Schnittlänge von 3.200 bis 4.200 mm ermöglichen die Verarbeitung massiver Aluminium-, NE-Metall- und Kunststoff-Werkstücke, die andere Maschinen an ihre Grenzen bringen. Die Vorschubgeschwindigkeit von 0,2 bis 60 m/min ist auf die Anforderungen der Schwerzerspanung optimiert: langsame, vibrationskontrollierte Schnitte in dickem Aluminium und schnellere Durchgänge in Kunststoffen. Das Dual Servo Drive mit separaten Messsystemen und programmierbaren Korrekturkurven garantiert selbst bei maximaler Beanspruchung und nach tausenden Schnitten eine herausragende Schnittgenauigkeit. Der schwere Maschinenkörper absorbiert die enormen Schnittkräfte und verhindert jegliche Resonanzschwingungen. Die advanced line 250 ist die Maschine der Wahl für Aluminium-Hütten, Kunststoff-Verarbeitungszentren und anspruchsvolle Industrieunternehmen. Asamer bietet als autorisierter Mayer-Händler für Tschechien, die Slowakei und Ungarn umfassende Beratung, Projektplanung und Service für die advanced line 250.`,
      en: `The Mayer advanced line 250 is the strongest panel dividing saw in its class, setting new benchmarks in industrial panel cutting technology with a 55/75 kW motor, 860 mm saw blade diameter and 270 mm projection. This panel saw was designed for uncompromising industrial production, where maximum cutting performance and highest cut quality matter equally. The 250 mm cutting height and configurable cutting length from 3,200 to 4,200 mm enable the processing of massive aluminium, non-ferrous metal and plastic workpieces that push other machines to their limits. The feed speed from 0.2 to 60 m/min is optimised for heavy-duty cutting: slow, vibration-controlled cuts in thick aluminium and faster passes in plastics. The Dual Servo Drive with separate measuring systems and programmable correction curves guarantees outstanding cutting accuracy even under maximum stress and after thousands of cuts. The heavy machine body absorbs the enormous cutting forces and prevents any resonance vibrations. The advanced line 250 is the machine of choice for aluminium smelters, plastic processing centres and demanding industrial companies. Asamer, as authorised Mayer dealer for the Czech Republic, Slovakia and Hungary, offers comprehensive consultation, project planning and service for the advanced line 250.`,
      cz: `Mayer advanced line 250 je nejsilnější formátovací pila ve své třídě a stanovuje nová měřítka v technologii průmyslového řezání desek s motorem 55/75 kW, průměrem pilového kotouče 860 mm a projekcí 270 mm. Tato formátovací pila byla navržena pro nekompromisní průmyslovou výrobu, kde stejně záleží na maximálním řezném výkonu i nejvyšší kvalitě řezu. Výška řezu 250 mm a konfigurovatelná délka řezu od 3 200 do 4 200 mm umožňují zpracování masivních obrobků z hliníku, neželezných kovů a plastů, které tlačí jiné stroje na hranici jejich možností. Rychlost posuvu od 0,2 do 60 m/min je optimalizována pro těžké obrábění: pomalé, vibrací kontrolované řezy v tlustém hliníku a rychlejší průchody v plastech. Dual Servo Drive se separátními měřicími systémy a programovatelnými korekčními křivkami zaručuje vynikající přesnost řezu i při maximálním zatížení a po tisících řezech. Těžký strojní rám pohlcuje enormní řezné síly a zabraňuje jakýmkoli rezonančním vibracím. advanced line 250 je stroj první volby pro hliníkárny, centra zpracování plastů a náročné průmyslové podniky. Asamer jako autorizovaný prodejce Mayer pro Českou republiku, Slovensko a Maďarsko nabízí komplexní poradenství, projektové plánování a servis pro advanced line 250.`,
    },
    applicationSections: [
      {
        heading: {
          de: 'Schwerzerspanung von Aluminium',
          en: 'Heavy-duty aluminium cutting',
          cz: 'Těžké obrábění hliníku',
        },
        body: {
          de: 'Die advanced line 250 wurde für die Schwerzerspanung dicker Aluminiumplatten und -blöcke konstruiert. Der 55/75 kW Motor und das 860 mm Sägeblatt bewältigen Materialstärken bis 250 mm und liefern dabei gratfreie Schnitte höchster Qualität. Dies macht sie zur ersten Wahl für Aluminium-Hütten und Lagerhalter.',
          en: 'The advanced line 250 was built for heavy-duty cutting of thick aluminium plates and blocks. The 55/75 kW motor and 860 mm saw blade handle material thicknesses up to 250 mm while delivering burr-free cuts of the highest quality. This makes it the first choice for aluminium smelters and stockholders.',
          cz: 'advanced line 250 byla zkonstruována pro těžké obrábění tlustých hliníkových desek a bloků. Motor 55/75 kW a pilový kotouč 860 mm zvládají tloušťky materiálu až 250 mm a přitom dodávají řezy bez otřepů nejvyšší kvality. To z ní činí první volbu pro hliníkárny a velkoobchody.',
        },
      },
      {
        heading: {
          de: 'Verarbeitung massiver Kunststoffblöcke',
          en: 'Processing solid plastic blocks',
          cz: 'Zpracování masivních plastových bloků',
        },
        body: {
          de: 'Massive Kunststoffblöcke aus Polyethylen, Polyamid, PTFE und anderen technischen Kunststoffen erfordern eine Maschine mit außergewöhnlicher Leistung. Die advanced line 250 bietet mit 250 mm Schnitthöhe und der enormen Motorleistung die nötige Kapazität für diese anspruchsvollen Materialien.',
          en: 'Solid plastic blocks of polyethylene, polyamide, PTFE and other engineering plastics require a machine with exceptional power. The advanced line 250, with 250 mm cutting height and enormous motor power, provides the necessary capacity for these demanding materials.',
          cz: 'Masivní plastové bloky z polyethylenu, polyamidu, PTFE a dalších technických plastů vyžadují stroj s výjimečným výkonem. advanced line 250 s výškou řezu 250 mm a enormním výkonem motoru poskytuje potřebnou kapacitu pro tyto náročné materiály.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Die advanced line 250 ist die Investition für Betriebe, die die stärkste Plattensäge ihrer Klasse benötigen. Mit 55/75 kW Motor und 250 mm Schnitthöhe gibt es keine Limits. Sie eignet sich für schwere Industrieproduktion in Aluminium-Hütten, Kunststoff-Verarbeitungszentren und Großbetrieben. Asamer berät Sie zu Ihrer Konfiguration.',
      en: 'The advanced line 250 is the investment for operations that need the strongest panel saw in its class. With 55/75 kW motor and 250 mm cutting height, there are no limits. It suits heavy industrial production in aluminium smelters, plastic processing centres and large-scale operations. Asamer advises you on your configuration.',
      cz: 'advanced line 250 je investice pro provozy, které potřebují nejsilnější formátovací pilu ve své třídě. S motorem 55/75 kW a výškou řezu 250 mm neexistují limity. Hodí se pro těžkou průmyslovou výrobu v hliníkárnách, centrech zpracování plastů a velkoprovozech. Asamer vám poradí s konfigurací.',
    },
    faq: [
      {
        question: {
          de: 'Warum ist die advanced line 250 die stärkste in ihrer Klasse?',
          en: 'Why is the advanced line 250 the strongest in its class?',
          cz: 'Proč je advanced line 250 nejsilnější ve své třídě?',
        },
        answer: {
          de: 'Die advanced line 250 kombiniert einen 55/75 kW Motor mit einem 860 mm Sägeblatt und 270 mm Projektion, was sie zur leistungsstärksten Plattenaufteilsäge in ihrer Klasse macht.',
          en: 'The advanced line 250 combines a 55/75 kW motor with an 860 mm saw blade and 270 mm projection, making it the most powerful panel dividing saw in its class.',
          cz: 'advanced line 250 kombinuje motor 55/75 kW s pilovým kotoučem 860 mm a projekcí 270 mm, což z ní činí nejvýkonnější formátovací pilu ve své třídě.',
        },
      },
      {
        question: {
          de: 'Welche Schnitthöhe bietet die advanced line 250?',
          en: 'What cutting height does the advanced line 250 offer?',
          cz: 'Jakou výšku řezu nabízí advanced line 250?',
        },
        answer: {
          de: 'Die advanced line 250 bietet eine Schnitthöhe von 250 mm, die höchste in der Advanced-Line-Serie und ausgelegt für massive Aluminium- und Kunststoffblöcke.',
          en: 'The advanced line 250 offers a 250 mm cutting height, the highest in the Advanced Line series and designed for massive aluminium and plastic blocks.',
          cz: 'advanced line 250 nabízí výšku řezu 250 mm, nejvyšší v řadě Advanced Line a navrženou pro masivní hliníkové a plastové bloky.',
        },
      },
      {
        question: {
          de: 'Kann die advanced line 250 auch Kunststoffe schneiden?',
          en: 'Can the advanced line 250 also cut plastics?',
          cz: 'Může advanced line 250 řezat i plasty?',
        },
        answer: {
          de: 'Ja, die advanced line 250 verarbeitet neben Aluminium und NE-Metallen auch alle gängigen technischen Kunststoffe wie PE, PA, PTFE, PEEK und glasfaserverstärkte Composites.',
          en: 'Yes, in addition to aluminium and non-ferrous metals, the advanced line 250 also processes all common engineering plastics such as PE, PA, PTFE, PEEK and glass-fibre reinforced composites.',
          cz: 'Ano, advanced line 250 kromě hliníku a neželezných kovů zpracovává i všechny běžné technické plasty jako PE, PA, PTFE, PEEK a sklolamináty.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  Winkelanlagen                                                      */
  /* ------------------------------------------------------------------ */
  winkelanlagen: {
    longDescription: {
      de: `Die Mayer Winkelanlagen sind maßgeschneiderte industrielle Schneidlösungen, die automatisierte Längs- und Querschnitte in einem integrierten System vereinen. Diese Winkelschneid-Anlagen werden individuell nach den spezifischen Anforderungen des Kunden konfiguriert und bieten die höchste Stufe der Automatisierung in der Plattenzuschnitt-Technologie. Die Systeme verarbeiten Aluminium, NE-Metalle, Kunststoffe und Holzwerkstoffe und sind für die Integration in bestehende Produktionslinien und ERP-Systeme ausgelegt. Der Materialfluss ist vollständig automatisiert: Platten werden zugeführt, in Längsrichtung geschnitten, automatisch um 90° gedreht und anschließend quergeschnitten. Dies eliminiert manuelle Handhabung, reduziert den Personalbedarf auf ein Minimum und maximiert den Durchsatz. Die Konfiguration umfasst Schnittlänge, Schnitthöhe, Motorleistung, Vorschubsystem, Absaugung und Materialhandling-Komponenten, die exakt auf die zu verarbeitenden Materialien, Formate und Produktionsvolumen abgestimmt werden. Mayer Winkelanlagen finden Einsatz in der Möbelindustrie, im Fassadenbau, in der Aluminium- und Kunststoffverarbeitung sowie in der Automobilzulieferung. Die Investition in eine Winkelanlage amortisiert sich durch drastisch gesteigerte Produktivität, reduzierten Materialeinsatz und niedrigere Personalkosten. Asamer ist als autorisierter Mayer-Händler für Tschechien, die Slowakei und Ungarn Ihr Partner für die Planung, Konfiguration und Realisierung Ihrer individuellen Winkelanlage.`,
      en: `The Mayer angle cutting systems are custom-built industrial cutting solutions that combine automated longitudinal and cross cuts in a single integrated system. These angle cutting installations are individually configured to the customer's specific requirements and represent the highest level of automation in panel cutting technology. The systems process aluminium, non-ferrous metals, plastics and wood-based materials and are designed for integration into existing production lines and ERP systems. The material flow is fully automated: panels are fed in, cut longitudinally, automatically rotated by 90 degrees and then cross-cut. This eliminates manual handling, reduces staffing requirements to a minimum and maximises throughput. The configuration encompasses cutting length, cutting height, motor power, feed system, extraction and material handling components, precisely matched to the materials, formats and production volumes to be processed. Mayer angle cutting systems are used in the furniture industry, facade construction, aluminium and plastics processing, and automotive supply. The investment in an angle cutting system pays off through dramatically increased productivity, reduced material usage and lower staffing costs. Asamer, as the authorised Mayer dealer for the Czech Republic, Slovakia and Hungary, is your partner for planning, configuration and realisation of your individual angle cutting system.`,
      cz: `Mayer Winkelanlagen (úhlové řezací systémy) jsou zakázková průmyslová řezací řešení, která kombinují automatizované podélné a příčné řezy v jednom integrovaném systému. Tyto úhlové řezací instalace jsou individuálně konfigurovány podle specifických požadavků zákazníka a představují nejvyšší stupeň automatizace v technologii řezání desek. Systémy zpracovávají hliník, neželezné kovy, plasty a dřevěné materiály a jsou navrženy pro integraci do stávajících výrobních linek a ERP systémů. Materiálový tok je plně automatizovaný: desky jsou přiváděny, podélně řezány, automaticky otočeny o 90° a poté příčně řezány. To eliminuje manuální manipulaci, snižuje potřebu personálu na minimum a maximalizuje průchodnost. Konfigurace zahrnuje délku řezu, výšku řezu, výkon motoru, posuvový systém, odsávání a komponenty pro manipulaci s materiálem, přesně přizpůsobené zpracovávaným materiálům, formátům a objemům výroby. Úhlové řezací systémy Mayer nacházejí uplatnění v nábytkářském průmyslu, stavbě fasád, zpracování hliníku a plastů a automobilovém průmyslu. Investice do úhlového řezacího systému se vrátí díky dramaticky zvýšené produktivitě, sníženému materiálovému vstupu a nižším personálním nákladům. Asamer jako autorizovaný prodejce Mayer pro Českou republiku, Slovensko a Maďarsko je váš partner pro plánování, konfiguraci a realizaci vašeho individuálního úhlového řezacího systému.`,
    },
    applicationSections: [
      {
        heading: {
          de: 'Vollautomatisierte Produktionslinien',
          en: 'Fully automated production lines',
          cz: 'Plně automatizované výrobní linky',
        },
        body: {
          de: 'Mayer Winkelanlagen sind das Herzstück vollautomatisierter Produktionslinien. Der durchgängige Materialfluss von der Plattenzufuhr über Längs- und Querschnitt bis zur Ausgabe der fertigen Zuschnitte reduziert den Bedieneraufwand auf ein Minimum und maximiert den täglichen Output.',
          en: 'Mayer angle cutting systems are the core of fully automated production lines. The continuous material flow from panel feeding through longitudinal and cross cutting to output of finished cut pieces reduces operator effort to a minimum and maximises daily output.',
          cz: 'Úhlové řezací systémy Mayer jsou srdcem plně automatizovaných výrobních linek. Nepřetržitý materiálový tok od přívodu desek přes podélné a příčné řezání po výstup hotových nařezaných dílů snižuje obsluhu na minimum a maximalizuje denní výstup.',
        },
      },
      {
        heading: {
          de: 'ERP-Integration und Industrie 4.0',
          en: 'ERP integration and Industry 4.0',
          cz: 'Integrace do ERP a Průmysl 4.0',
        },
        body: {
          de: 'Die Winkelanlagen lassen sich nahtlos in bestehende ERP-Systeme integrieren, sodass Kundenaufträge digital empfangen, automatisch in optimierte Schnittmuster umgesetzt und ohne manuellen Eingriff produziert werden. Dies ist der Weg zu Industrie 4.0 im Plattenzuschnitt.',
          en: 'The angle cutting systems can be seamlessly integrated into existing ERP systems, so customer orders are received digitally, automatically converted into optimised cutting patterns and produced without manual intervention. This is the path to Industry 4.0 in panel cutting.',
          cz: 'Úhlové řezací systémy lze bezešvě integrovat do stávajících ERP systémů, takže objednávky zákazníků jsou přijímány digitálně, automaticky převáděny na optimalizované řezné plány a vyráběny bez manuálního zásahu. To je cesta k Průmyslu 4.0 v řezání desek.',
        },
      },
    ],
    buyingAdvice: {
      de: 'Mayer Winkelanlagen sind die richtige Investition, wenn Sie Ihre Plattenproduktion vollständig automatisieren und Längs- sowie Querschnitte in einem durchgängigen System vereinen möchten. Jede Anlage wird individuell konfiguriert. Kontaktieren Sie Asamer für eine unverbindliche Projektberatung.',
      en: 'Mayer angle cutting systems are the right investment when you want to fully automate your panel production and combine longitudinal and cross cuts in a continuous system. Each installation is individually configured. Contact Asamer for a non-binding project consultation.',
      cz: 'Úhlové řezací systémy Mayer jsou správná investice, pokud chcete plně automatizovat vaši výrobu desek a spojit podélné i příčné řezy v souvislém systému. Každá instalace je individuálně konfigurována. Kontaktujte Asamer pro nezávaznou projektovou konzultaci.',
    },
    faq: [
      {
        question: {
          de: 'Was sind Mayer Winkelanlagen?',
          en: 'What are Mayer angle cutting systems?',
          cz: 'Co jsou úhlové řezací systémy Mayer?',
        },
        answer: {
          de: 'Mayer Winkelanlagen sind maßgeschneiderte industrielle Schneidanlagen, die automatisierte Längs- und Querschnitte in einem integrierten System vereinen. Sie werden individuell nach Kundenanforderungen konfiguriert.',
          en: 'Mayer angle cutting systems are custom-built industrial cutting installations that combine automated longitudinal and cross cuts in a single integrated system. They are individually configured to customer requirements.',
          cz: 'Úhlové řezací systémy Mayer jsou zakázkové průmyslové řezací instalace, které kombinují automatizované podélné a příčné řezy v jednom integrovaném systému. Jsou individuálně konfigurovány podle požadavků zákazníka.',
        },
      },
      {
        question: {
          de: 'Welche Materialien verarbeiten Mayer Winkelanlagen?',
          en: 'What materials do Mayer angle cutting systems process?',
          cz: 'Jaké materiály zpracovávají úhlové řezací systémy Mayer?',
        },
        answer: {
          de: 'Mayer Winkelanlagen verarbeiten Aluminium, NE-Metalle, Kunststoffe und Holzwerkstoffe, je nach individueller Konfiguration.',
          en: 'Mayer angle cutting systems process aluminium, non-ferrous metals, plastics and wood-based materials, depending on the individual configuration.',
          cz: 'Úhlové řezací systémy Mayer zpracovávají hliník, neželezné kovy, plasty a dřevěné materiály, podle individuální konfigurace.',
        },
      },
      {
        question: {
          de: 'Lassen sich Winkelanlagen in ERP-Systeme integrieren?',
          en: 'Can angle cutting systems be integrated into ERP systems?',
          cz: 'Lze úhlové řezací systémy integrovat do ERP systémů?',
        },
        answer: {
          de: 'Ja, Mayer Winkelanlagen sind für die nahtlose Integration in bestehende ERP- und Produktionssysteme konzipiert und unterstützen die digitale Auftragsverarbeitung und automatische Schnittoptimierung.',
          en: 'Yes, Mayer angle cutting systems are designed for seamless integration into existing ERP and production systems and support digital order processing and automatic cut optimisation.',
          cz: 'Ano, úhlové řezací systémy Mayer jsou navrženy pro bezešvou integraci do stávajících ERP a výrobních systémů a podporují digitální zpracování zakázek a automatickou optimalizaci řezů.',
        },
      },
      {
        question: {
          de: 'Wie kann ich eine Winkelanlage bei Asamer anfragen?',
          en: 'How can I enquire about an angle cutting system at Asamer?',
          cz: 'Jak mohu poptávat úhlový řezací systém u Asamer?',
        },
        answer: {
          de: 'Kontaktieren Sie Asamer für eine unverbindliche Projektberatung. Wir analysieren Ihren Bedarf und konfigurieren eine individuell auf Ihre Produktionsanforderungen zugeschnittene Winkelanlage.',
          en: 'Contact Asamer for a non-binding project consultation. We analyse your needs and configure an angle cutting system individually tailored to your production requirements.',
          cz: 'Kontaktujte Asamer pro nezávaznou projektovou konzultaci. Analyzujeme vaše potřeby a nakonfigurujeme úhlový řezací systém individuálně přizpůsobený vašim výrobním požadavkům.',
        },
      },
    ],
  },
};

/* ====================================================================== */
/*  Category-level SEO content                                             */
/* ====================================================================== */

export const MAYER_CATEGORY_SEO: Record<MayerCategory, CategorySeoContent> = {
  /* ------------------------------------------------------------------ */
  /*  kappa – Holz                                                       */
  /* ------------------------------------------------------------------ */
  kappa: {
    introExpanded: {
      de: `Die Mayer kappa-Serie umfasst horizontale Plattenaufteilsägen, die speziell für den Zuschnitt von Holzwerkstoffen entwickelt wurden. Von der kompakten kappa automatic 80 als Einstiegsmodell bis zum Flaggschiff kappa automatic 140 mit 4.300 mm Schnittlänge und industriellem Leistungsniveau bietet die Serie eine Lösung für jede Betriebsgröße und jeden Durchsatzanspruch. Alle kappa-Maschinen zeichnen sich durch eine schwere Stahlkonstruktion aus, die vibrationsarmes Arbeiten und höchste Wiederholgenauigkeit gewährleistet. Der automatische Druckbalken und der Materialvorschub aus Stahl ermöglichen die Ein-Mann-Bedienung und senken die Personalkosten. Die stufenlos regelbare Vorschubgeschwindigkeit von 5 bis 100 m/min gehört zu den höchsten am Markt und sichert schnelle Zykluszeiten in der Serienfertigung. Alle Modelle sind kompatibel mit der Ardis-Schnittoptimier-Software für automatisierte Schnittberechnung, Verschnittminimierung und digitale Auftragsverarbeitung. Die kappa-Serie verarbeitet Spanplatten, MDF, HDF, Sperrholz, Multiplex, Tischlerplatten und Massivholz. Typische Einsatzgebiete sind Tischlereien, Möbelhersteller, Innenausbau-Unternehmen, Holzhandel und industrielle Fertigungsbetriebe. Asamer ist der autorisierte Mayer-Händler für Tschechien, die Slowakei und Ungarn und bietet für die gesamte kappa-Serie Beratung, Vorführung, Lieferung, Inbetriebnahme und After-Sales-Service an. Kontaktieren Sie uns für eine persönliche Beratung und ein individuelles Angebot.`,
      en: `The Mayer kappa series comprises horizontal panel saws specifically developed for cutting wood-based materials. From the compact kappa automatic 80 as the entry-level model to the flagship kappa automatic 140 with 4,300 mm cutting length and industrial performance level, the series offers a solution for every business size and throughput requirement. All kappa machines feature heavy steel construction that ensures low-vibration operation and the highest repeat accuracy. The automatic pressure beam and steel material pusher enable single-operator use and lower labour costs. The continuously variable feed speed from 5 to 100 m/min is among the highest on the market and secures fast cycle times in series production. All models are compatible with Ardis cut optimisation software for automated cut calculation, waste minimisation and digital order processing. The kappa series processes chipboard, MDF, HDF, plywood, multiplex, blockboard and solid wood. Typical application areas include joinery shops, furniture manufacturers, interior fit-out companies, timber traders and industrial manufacturing operations. Asamer is the authorised Mayer dealer for the Czech Republic, Slovakia and Hungary and offers consultation, demonstration, delivery, commissioning and after-sales service for the entire kappa series. Contact us for personal advice and a tailored quotation.`,
      cz: `Řada Mayer kappa zahrnuje horizontální formátovací pily speciálně vyvinuté pro řezání dřevěných materiálů. Od kompaktní kappa automatic 80 jako vstupního modelu po vlajkovou loď kappa automatic 140 s délkou řezu 4 300 mm a průmyslovým výkonem nabízí řada řešení pro každou velikost podniku a požadavek na průchodnost. Všechny stroje kappa se vyznačují těžkou ocelovou konstrukcí, která zajišťuje práci s minimálními vibracemi a nejvyšší opakovatelnou přesnost. Automatický přítlačný trám a posuv materiálu z oceli umožňují obsluhu jedním operátorem a snižují personální náklady. Plynule regulovatelná rychlost posuvu od 5 do 100 m/min patří k nejvyšším na trhu a zajišťuje rychlé cyklové časy v sériové výrobě. Všechny modely jsou kompatibilní se softwarem Ardis pro optimalizaci řezů pro automatický výpočet řezů, minimalizaci odpadu a digitální zpracování zakázek. Řada kappa zpracovává dřevotřísky, MDF, HDF, překližky, multiplex, stolařské desky a masivní dřevo. Typické oblasti použití zahrnují truhlárny, výrobce nábytku, interiérové firmy, obchod se dřevem a průmyslové výrobní provozy. Asamer je autorizovaný prodejce Mayer pro Českou republiku, Slovensko a Maďarsko a nabízí pro celou řadu kappa poradenství, předvedení, dodání, uvedení do provozu a poprodejní servis. Kontaktujte nás pro osobní poradenství a individuální nabídku.`,
    },
    sections: [
      {
        heading: {
          de: 'Technologie der kappa-Plattensägen',
          en: 'kappa panel saw technology',
          cz: 'Technologie formátovacích pil kappa',
        },
        body: {
          de: 'Alle kappa-Modelle teilen die gleiche Grundtechnologie: schwere Stahlkonstruktion, neuer Sägewagen mit Schnittrichtung gegen den Anschlag, doppeltes Messsystem für maximale Wiederholgenauigkeit und ergonomisches 24-Zoll-Bedienpanel mit Windows-basierter Software. Die Vorschubgeschwindigkeit von 5 bis 100 m/min ist stufenlos regelbar und erlaubt die Anpassung an unterschiedliche Holzwerkstoffe.',
          en: 'All kappa models share the same core technology: heavy steel construction, new saw carriage with cutting direction against the fence, dual measuring system for maximum repeat accuracy and ergonomic 24-inch control panel with Windows-based software. The feed speed from 5 to 100 m/min is continuously variable and allows adaptation to different wood-based materials.',
          cz: 'Všechny modely kappa sdílejí stejnou základní technologii: těžká ocelová konstrukce, nový pilový vozík se směrem řezu proti dorazu, dvojitý měřicí systém pro maximální opakovatelnou přesnost a ergonomický 24palcový ovládací panel se softwarem na bázi Windows. Rychlost posuvu od 5 do 100 m/min je plynule regulovatelná a umožňuje přizpůsobení různým dřevěným materiálům.',
        },
      },
      {
        heading: {
          de: 'Modellvergleich: kappa 80 bis kappa 140',
          en: 'Model comparison: kappa 80 to kappa 140',
          cz: 'Srovnání modelů: kappa 80 až kappa 140',
        },
        body: {
          de: 'Die kappa automatic 80 bietet 80 mm Schnitthöhe und 3.200 mm Schnittlänge als Einstieg. Die kappa automatic 100 erweitert auf 100 mm mit modularem Schnittoptimierer. Die kappa automatic 120 liefert 120 mm und 3.800 mm Schnittlänge. Die kappa automatic 140 ist das Flaggschiff mit 140 mm Schnitthöhe und 4.300 mm Schnittlänge für industrielle Serienfertigung.',
          en: 'The kappa automatic 80 offers 80 mm cutting height and 3,200 mm cutting length as the entry point. The kappa automatic 100 extends to 100 mm with modular cut optimiser. The kappa automatic 120 delivers 120 mm and 3,800 mm cutting length. The kappa automatic 140 is the flagship with 140 mm cutting height and 4,300 mm cutting length for industrial series production.',
          cz: 'kappa automatic 80 nabízí 80 mm výšku řezu a 3 200 mm délku řezu jako vstupní model. kappa automatic 100 rozšiřuje na 100 mm s modulárním optimalizátorem řezů. kappa automatic 120 dodává 120 mm a 3 800 mm délku řezu. kappa automatic 140 je vlajková loď se 140 mm výškou řezu a 4 300 mm délkou řezu pro průmyslovou sériovou výrobu.',
        },
      },
      {
        heading: {
          de: 'Software und Digitalisierung',
          en: 'Software and digitalisation',
          cz: 'Software a digitalizace',
        },
        body: {
          de: 'Die kappa-Serie unterstützt die Ardis-Schnittoptimier-Software, die automatisch die effizientesten Schnittmuster berechnet, den Verschnitt minimiert und eine nahtlose digitale Auftragsverarbeitung vom Büro bis zur Maschine ermöglicht. Dies ist ein wesentlicher Baustein für die Digitalisierung im Holzverarbeitungsbetrieb.',
          en: 'The kappa series supports Ardis cut optimisation software, which automatically calculates the most efficient cutting patterns, minimises waste and enables seamless digital order processing from office to machine. This is an essential building block for digitalisation in wood processing operations.',
          cz: 'Řada kappa podporuje software Ardis pro optimalizaci řezů, který automaticky vypočítává nejefektivnější řezné plány, minimalizuje odpad a umožňuje bezešvé digitální zpracování zakázek od kanceláře po stroj. To je zásadní stavební kámen pro digitalizaci v dřevozpracujících provozech.',
        },
      },
    ],
    faq: [
      {
        question: {
          de: 'Welche Mayer kappa-Plattensäge ist die richtige für mich?',
          en: 'Which Mayer kappa panel saw is right for me?',
          cz: 'Která formátovací pila Mayer kappa je pro mě ta pravá?',
        },
        answer: {
          de: 'Die Wahl hängt von Ihrer benötigten Schnitthöhe, Schnittlänge und Ihrem Produktionsvolumen ab. Die kappa 80 eignet sich für den Einstieg, die kappa 100 und 120 für mittlere Anforderungen und die kappa 140 für die industrielle Serienfertigung. Asamer berät Sie gerne persönlich.',
          en: 'The choice depends on your required cutting height, cutting length and production volume. The kappa 80 suits entry-level needs, the kappa 100 and 120 for medium requirements, and the kappa 140 for industrial series production. Asamer is happy to advise you personally.',
          cz: 'Volba závisí na vaší požadované výšce řezu, délce řezu a objemu výroby. kappa 80 se hodí pro vstup, kappa 100 a 120 pro střední požadavky a kappa 140 pro průmyslovou sériovou výrobu. Asamer vám rád osobně poradí.',
        },
      },
      {
        question: {
          de: 'Kann ich eine kappa-Plattensäge bei Asamer kaufen?',
          en: 'Can I buy a kappa panel saw from Asamer?',
          cz: 'Mohu si kappa formátovací pilu koupit u Asamer?',
        },
        answer: {
          de: 'Ja, Asamer ist autorisierter Mayer-Händler für Tschechien, die Slowakei und Ungarn. Wir bieten die komplette kappa-Serie mit Beratung, Lieferung, Inbetriebnahme und Service an.',
          en: 'Yes, Asamer is the authorised Mayer dealer for the Czech Republic, Slovakia and Hungary. We offer the complete kappa series with consultation, delivery, commissioning and service.',
          cz: 'Ano, Asamer je autorizovaný prodejce Mayer pro Českou republiku, Slovensko a Maďarsko. Nabízíme kompletní řadu kappa s poradenstvím, dodáním, uvedením do provozu a servisem.',
        },
      },
      {
        question: {
          de: 'Welche Holzwerkstoffe kann die kappa-Serie verarbeiten?',
          en: 'What wood-based materials can the kappa series process?',
          cz: 'Jaké dřevěné materiály může řada kappa zpracovávat?',
        },
        answer: {
          de: 'Die kappa-Serie verarbeitet Spanplatten, MDF, HDF, Sperrholz, Multiplex, Tischlerplatten, Massivholz und weitere Holzwerkstoffe.',
          en: 'The kappa series processes chipboard, MDF, HDF, plywood, multiplex, blockboard, solid wood and other wood-based materials.',
          cz: 'Řada kappa zpracovává dřevotřísky, MDF, HDF, překližky, multiplex, stolařské desky, masivní dřevo a další dřevěné materiály.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  advanced – Aluminium und Kunststoff                                */
  /* ------------------------------------------------------------------ */
  advanced: {
    introExpanded: {
      de: `Die Mayer Advanced Line ist eine Reihe horizontaler Plattensägen, die speziell für die Bearbeitung von Aluminium, NE-Metallen, Kunststoffen und Composites entwickelt wurde. Die Serie reicht von der bewährten advanced line 100 mit 18/24 kW Motor bis zur stärksten Plattenaufteilsäge ihrer Klasse, der advanced line 250 mit 55/75 kW Motor und 860 mm Sägeblatt. Jedes Modell wurde für vibrationsfreie, gratarme Schnitte in anspruchsvollen Materialien optimiert. Die niedrigen Vorschubgeschwindigkeiten ab 0,2 m/min sind entscheidend für saubere Schnittkanten in Aluminium und empfindlichen Kunststoffen, während Geschwindigkeiten bis 60 m/min schnelle Durchsätze bei weicheren Materialien ermöglichen. Alle Advanced-Line-Modelle verfügen über das Dual Servo Drive System mit zwei unabhängigen Servomotoren für absolute Positioniergenauigkeit. Höhere Modelle bieten PC-Steuerung per Touchscreen, programmierbare Korrekturkurven und den patentierten Lamellen-Screen für optimale Absaugung. Die advanced line 160 turn erweitert die Möglichkeiten um eine automatische 90°-Wendeinheit für beidseitige Bearbeitung in einem Durchgang. Typische Einsatzgebiete umfassen Fassadenbau, Werbetechnik, Kunststoffverarbeitung, Aluminium-Lager, Transportbau und industrielle Fertigung. Asamer ist der autorisierte Mayer-Händler für Tschechien, die Slowakei und Ungarn und bietet die gesamte Advanced Line mit umfassender Beratung, Projektplanung, Installation, Schulung und After-Sales-Service an.`,
      en: `The Mayer Advanced Line is a series of horizontal panel saws specifically developed for processing aluminium, non-ferrous metals, plastics and composites. The series ranges from the proven advanced line 100 with 18/24 kW motor to the strongest panel dividing saw in its class, the advanced line 250 with 55/75 kW motor and 860 mm saw blade. Every model has been optimised for vibration-free, burr-free cuts in demanding materials. The low feed speeds from 0.2 m/min are crucial for clean cut edges in aluminium and sensitive plastics, while speeds up to 60 m/min enable fast throughput with softer materials. All Advanced Line models feature the Dual Servo Drive system with two independent servo motors for absolute positioning accuracy. Higher models offer PC control via touchscreen, programmable correction curves and the patented Lamella Screen for optimal extraction. The advanced line 160 turn extends the possibilities with an automatic 90-degree turning unit for double-sided processing in a single pass. Typical application areas include facade construction, sign making, plastics processing, aluminium stockholding, transport construction and industrial manufacturing. Asamer is the authorised Mayer dealer for the Czech Republic, Slovakia and Hungary and offers the entire Advanced Line with comprehensive consultation, project planning, installation, training and after-sales service.`,
      cz: `Mayer Advanced Line je řada horizontálních formátovacích pil speciálně vyvinutých pro zpracování hliníku, neželezných kovů, plastů a kompozitů. Řada sahá od osvědčené advanced line 100 s motorem 18/24 kW po nejsilnější formátovací pilu ve své třídě, advanced line 250 s motorem 55/75 kW a pilovým kotoučem 860 mm. Každý model byl optimalizován pro řezy bez vibrací a bez otřepů v náročných materiálech. Nízké rychlosti posuvu od 0,2 m/min jsou klíčové pro čisté řezné hrany v hliníku a citlivých plastech, zatímco rychlosti do 60 m/min umožňují rychlé průchody u měkčích materiálů. Všechny modely Advanced Line disponují systémem Dual Servo Drive se dvěma nezávislými servomotory pro absolutní přesnost polohování. Vyšší modely nabízejí PC řízení přes dotykový displej, programovatelné korekční křivky a patentovaný lamelový screen pro optimální odsávání. advanced line 160 turn rozšiřuje možnosti o automatickou 90° otočnou jednotku pro oboustranné zpracování v jednom průchodu. Typické oblasti použití zahrnují stavbu fasád, reklamní techniku, zpracování plastů, hliníkové sklady, dopravní průmysl a průmyslovou výrobu. Asamer je autorizovaný prodejce Mayer pro Českou republiku, Slovensko a Maďarsko a nabízí celou řadu Advanced Line s komplexním poradenstvím, projektovým plánováním, instalací, školením a poprodejním servisem.`,
    },
    sections: [
      {
        heading: {
          de: 'Für welche Materialien ist die Advanced Line geeignet?',
          en: 'What materials is the Advanced Line suitable for?',
          cz: 'Pro jaké materiály je Advanced Line vhodná?',
        },
        body: {
          de: 'Die Advanced Line verarbeitet Aluminium in allen Legierungen und Formen (Vollmaterial, Verbundplatten, Profile), NE-Metalle wie Messing und Kupfer sowie alle gängigen Kunststoffe von Acrylglas über PVC bis zu technischen Hochleistungs-Kunststoffen wie PTFE und PEEK. Auch glasfaser- und kohlefaserverstärkte Composites werden präzise geschnitten.',
          en: 'The Advanced Line processes aluminium in all alloys and forms (solid material, composite panels, profiles), non-ferrous metals such as brass and copper, and all common plastics from acrylic glass to PVC to high-performance engineering plastics such as PTFE and PEEK. Glass-fibre and carbon-fibre reinforced composites are also cut precisely.',
          cz: 'Advanced Line zpracovává hliník ve všech slitinách a formách (plný materiál, kompozitní desky, profily), neželezné kovy jako mosaz a měď a všechny běžné plasty od akrylátového skla přes PVC po technické vysokovýkonné plasty jako PTFE a PEEK. Přesně řeže i kompozity vyztužené skleněnými a uhlíkovými vlákny.',
        },
      },
      {
        heading: {
          de: 'Modellübersicht der Advanced Line',
          en: 'Advanced Line model overview',
          cz: 'Přehled modelů Advanced Line',
        },
        body: {
          de: 'Die advanced line 100 (18/24 kW, 100 mm) ist der Klassiker. Die advanced line 130 (24 kW, 130 mm) bietet integrierte Absaugung und Dual Servo Drive. Die advanced line 160 (35 kW, 160 mm) ist die preisgekrönte Version mit PC-Steuerung. Die advanced line 160 turn ergänzt die 90°-Wendeinheit. Die advanced line 200 (43 kW, 200 mm) ist für Großformate bis 5.600 mm ausgelegt. Die advanced line 250 (55/75 kW, 250 mm) ist die stärkste ihrer Klasse.',
          en: 'The advanced line 100 (18/24 kW, 100 mm) is the classic. The advanced line 130 (24 kW, 130 mm) offers integrated extraction and Dual Servo Drive. The advanced line 160 (35 kW, 160 mm) is the award-winning version with PC control. The advanced line 160 turn adds the 90-degree turning unit. The advanced line 200 (43 kW, 200 mm) is designed for large formats up to 5,600 mm. The advanced line 250 (55/75 kW, 250 mm) is the strongest in its class.',
          cz: 'advanced line 100 (18/24 kW, 100 mm) je klasika. advanced line 130 (24 kW, 130 mm) nabízí integrované odsávání a Dual Servo Drive. advanced line 160 (35 kW, 160 mm) je oceněná verze s PC řízením. advanced line 160 turn přidává 90° otočnou jednotku. advanced line 200 (43 kW, 200 mm) je určena pro velké formáty do 5 600 mm. advanced line 250 (55/75 kW, 250 mm) je nejsilnější ve své třídě.',
        },
      },
      {
        heading: {
          de: 'Dual Servo Drive und Präzisionstechnologie',
          en: 'Dual Servo Drive and precision technology',
          cz: 'Dual Servo Drive a precizní technologie',
        },
        body: {
          de: 'Das Dual Servo Drive System ist das Herzstück der Advanced Line und verwendet zwei unabhängige Servomotoren für absolute Positioniergenauigkeit. Programmierbare Korrekturkurven erlauben die automatische Kompensation materialbedingter Abweichungen. In Kombination mit dem doppelten Druckbalken und Lasermessung erreichen die Advanced-Line-Sägen eine Schnittgenauigkeit, die in der Branche ihresgleichen sucht.',
          en: 'The Dual Servo Drive system is the heart of the Advanced Line and uses two independent servo motors for absolute positioning accuracy. Programmable correction curves allow automatic compensation of material-related deviations. In combination with the double pressure beam and laser measurement, the Advanced Line saws achieve a cutting accuracy that is unmatched in the industry.',
          cz: 'Systém Dual Servo Drive je srdcem Advanced Line a používá dva nezávislé servomotory pro absolutní přesnost polohování. Programovatelné korekční křivky umožňují automatickou kompenzaci odchylek způsobených materiálem. V kombinaci s dvojitým přítlačným trámem a laserovým měřením dosahují pily Advanced Line přesnosti řezu, která nemá v oboru obdoby.',
        },
      },
    ],
    faq: [
      {
        question: {
          de: 'Welche Advanced Line eignet sich für Aluminium-Verbundplatten?',
          en: 'Which Advanced Line is suitable for aluminium composite panels?',
          cz: 'Která Advanced Line je vhodná pro hliníkové kompozitní desky?',
        },
        answer: {
          de: 'Für Aluminium-Verbundplatten eignen sich alle Advanced-Line-Modelle. Die advanced line 100 ist ideal als Einstieg, während die 130 und 160 mit integrierter Absaugung und höherer Motorleistung für größere Volumen besser geeignet sind.',
          en: 'All Advanced Line models are suitable for aluminium composite panels. The advanced line 100 is ideal as an entry point, while the 130 and 160 with integrated extraction and higher motor power are better suited for larger volumes.',
          cz: 'Pro hliníkové kompozitní desky jsou vhodné všechny modely Advanced Line. advanced line 100 je ideální jako vstup, zatímco 130 a 160 s integrovaným odsáváním a vyšším výkonem motoru jsou vhodnější pro větší objemy.',
        },
      },
      {
        question: {
          de: 'Was ist der Unterschied zwischen kappa und Advanced Line?',
          en: 'What is the difference between kappa and Advanced Line?',
          cz: 'Jaký je rozdíl mezi kappa a Advanced Line?',
        },
        answer: {
          de: 'Die kappa-Serie ist für Holzwerkstoffe optimiert und bietet hohe Vorschubgeschwindigkeiten bis 100 m/min. Die Advanced Line ist für Aluminium, NE-Metalle und Kunststoffe konzipiert und bietet niedrigere Vorschubgeschwindigkeiten ab 0,2 m/min für gratfreie Schnitte in Metall.',
          en: 'The kappa series is optimised for wood-based materials and offers high feed speeds up to 100 m/min. The Advanced Line is designed for aluminium, non-ferrous metals and plastics and offers lower feed speeds from 0.2 m/min for burr-free cuts in metal.',
          cz: 'Řada kappa je optimalizována pro dřevěné materiály a nabízí vysoké rychlosti posuvu do 100 m/min. Advanced Line je navržena pro hliník, neželezné kovy a plasty a nabízí nižší rychlosti posuvu od 0,2 m/min pro řezy bez otřepů v kovu.',
        },
      },
      {
        question: {
          de: 'Bietet Asamer Service für die Advanced Line an?',
          en: 'Does Asamer offer service for the Advanced Line?',
          cz: 'Nabízí Asamer servis pro Advanced Line?',
        },
        answer: {
          de: 'Ja, Asamer ist autorisierter Mayer-Händler und bietet für die gesamte Advanced Line Beratung, Projektplanung, Lieferung, Inbetriebnahme, Schulung und After-Sales-Service in Tschechien, der Slowakei und Ungarn an.',
          en: 'Yes, Asamer is an authorised Mayer dealer and offers consultation, project planning, delivery, commissioning, training and after-sales service for the entire Advanced Line in the Czech Republic, Slovakia and Hungary.',
          cz: 'Ano, Asamer je autorizovaný prodejce Mayer a nabízí pro celou řadu Advanced Line poradenství, projektové plánování, dodání, uvedení do provozu, školení a poprodejní servis v České republice, na Slovensku a v Maďarsku.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  industrial – Industrielösungen                                     */
  /* ------------------------------------------------------------------ */
  industrial: {
    introExpanded: {
      de: `Die industriellen Lösungen von Mayer gehen über einzelne Plattensägen hinaus und umfassen maßgeschneiderte Winkelschneid-Anlagen für vollautomatisierte Produktionslinien. Diese Systeme werden individuell nach Kundenanforderungen konfiguriert und integrieren Längs- und Querschnitt-Kapazitäten in einem durchgängigen System mit automatischem Materialfluss. Die Platten werden zugeführt, in Längsrichtung geschnitten, automatisch um 90° gedreht und anschließend quergeschnitten, ohne dass ein manueller Eingriff erforderlich ist. Die Einsatzmöglichkeiten umfassen alle Materialien, die auch mit den Einzelmaschinen der kappa- und Advanced-Line-Serien verarbeitet werden: Holzwerkstoffe, Aluminium, NE-Metalle, Kunststoffe und Composites. Die industriellen Lösungen sind für die Integration in bestehende ERP- und Produktionssysteme ausgelegt und unterstützen die digitale Auftragsverarbeitung, automatische Schnittoptimierung und Industrie-4.0-Konzepte. Der ROI einer Winkelanlage resultiert aus drastisch gesteigerter Produktivität, reduziertem Materialverschnitt durch optimierte Schnittmuster, gesenkten Personalkosten durch Automatisierung und einer gleichbleibend hohen Schnittqualität auch bei Mehrschichtbetrieb. Mayer Winkelanlagen sind in der Möbelindustrie, im Fassadenbau, in der Aluminium- und Kunststoffverarbeitung sowie in der Automobilzulieferung weltweit im Einsatz. Asamer ist der autorisierte Mayer-Händler für Tschechien, die Slowakei und Ungarn und Ihr Ansprechpartner für die Planung, Konfiguration, Installation und den Betrieb Ihrer individuellen Industrielösung. Wir analysieren Ihren Produktionsprozess, erarbeiten ein maßgeschneidertes Konzept und begleiten Sie von der Projektplanung bis zur Inbetriebnahme und darüber hinaus.`,
      en: `Mayer's industrial solutions go beyond individual panel saws and encompass custom-built angle cutting systems for fully automated production lines. These systems are individually configured to customer requirements and integrate longitudinal and cross-cutting capacities in a continuous system with automatic material flow. Panels are fed in, cut longitudinally, automatically rotated by 90 degrees and then cross-cut without any manual intervention required. The application possibilities cover all materials also processed by the individual machines of the kappa and Advanced Line series: wood-based materials, aluminium, non-ferrous metals, plastics and composites. The industrial solutions are designed for integration into existing ERP and production systems and support digital order processing, automatic cut optimisation and Industry 4.0 concepts. The ROI of an angle cutting system results from dramatically increased productivity, reduced material waste through optimised cutting patterns, lowered staffing costs through automation and consistently high cut quality even in multi-shift operation. Mayer angle cutting systems are used worldwide in the furniture industry, facade construction, aluminium and plastics processing, and automotive supply. Asamer is the authorised Mayer dealer for the Czech Republic, Slovakia and Hungary and your contact for planning, configuration, installation and operation of your individual industrial solution. We analyse your production process, develop a tailored concept and accompany you from project planning through commissioning and beyond.`,
      cz: `Průmyslová řešení Mayer jdou nad rámec jednotlivých formátovacích pil a zahrnují zakázkové úhlové řezací systémy pro plně automatizované výrobní linky. Tyto systémy jsou individuálně konfigurovány podle požadavků zákazníka a integrují kapacity pro podélné a příčné řezání v souvislém systému s automatickým materiálovým tokem. Desky jsou přiváděny, podélně řezány, automaticky otočeny o 90° a poté příčně řezány bez jakéhokoli manuálního zásahu. Možnosti použití pokrývají všechny materiály zpracovávané i jednotlivými stroji řad kappa a Advanced Line: dřevěné materiály, hliník, neželezné kovy, plasty a kompozity. Průmyslová řešení jsou navržena pro integraci do stávajících ERP a výrobních systémů a podporují digitální zpracování zakázek, automatickou optimalizaci řezů a koncepty Průmyslu 4.0. Návratnost investice do úhlového řezacího systému vyplývá z dramaticky zvýšené produktivity, sníženého odpadu materiálu díky optimalizovaným řezným plánům, snížených personálních nákladů díky automatizaci a trvale vysoké kvality řezu i ve vícesměnném provozu. Úhlové řezací systémy Mayer jsou celosvětově používány v nábytkářském průmyslu, stavbě fasád, zpracování hliníku a plastů a automobilovém průmyslu. Asamer je autorizovaný prodejce Mayer pro Českou republiku, Slovensko a Maďarsko a váš kontakt pro plánování, konfiguraci, instalaci a provoz vašeho individuálního průmyslového řešení. Analyzujeme váš výrobní proces, vypracujeme koncept na míru a provázíme vás od projektového plánování přes uvedení do provozu a dále.`,
    },
    sections: [
      {
        heading: {
          de: 'Was sind Mayer Winkelanlagen?',
          en: 'What are Mayer angle cutting systems?',
          cz: 'Co jsou úhlové řezací systémy Mayer?',
        },
        body: {
          de: 'Mayer Winkelanlagen sind vollautomatisierte Schneidanlagen, die Längs- und Querschnitte in einem integrierten System vereinen. Die Platten werden automatisch zugeführt, geschnitten, um 90° gedreht und erneut geschnitten. Die Konfiguration erfolgt individuell nach Materialbedarf, Format und Durchsatz.',
          en: 'Mayer angle cutting systems are fully automated cutting installations that combine longitudinal and cross cuts in an integrated system. Panels are automatically fed, cut, rotated by 90 degrees and cut again. The configuration is individual based on material needs, format and throughput.',
          cz: 'Úhlové řezací systémy Mayer jsou plně automatizované řezací instalace, které kombinují podélné a příčné řezy v integrovaném systému. Desky jsou automaticky přiváděny, řezány, otáčeny o 90° a opět řezány. Konfigurace je individuální podle materiálových potřeb, formátu a průchodnosti.',
        },
      },
      {
        heading: {
          de: 'Vorteile der Automatisierung',
          en: 'Benefits of automation',
          cz: 'Výhody automatizace',
        },
        body: {
          de: 'Die vollständige Automatisierung einer Winkelanlage steigert den Durchsatz drastisch, reduziert den Personalbedarf auf ein Minimum, eliminiert Bedienfehler und senkt den Materialverschnitt durch automatische Schnittoptimierung. Die gleichbleibend hohe Schnittqualität unabhängig vom Bediener und die Möglichkeit des Mehrschichtbetriebs sind weitere entscheidende Vorteile.',
          en: 'Full automation of an angle cutting system dramatically increases throughput, reduces staffing to a minimum, eliminates operator errors and lowers material waste through automatic cut optimisation. Consistently high cut quality regardless of operator and the possibility of multi-shift operation are further decisive advantages.',
          cz: 'Plná automatizace úhlového řezacího systému dramaticky zvyšuje průchodnost, snižuje potřebu personálu na minimum, eliminuje chyby obsluhy a snižuje odpad materiálu díky automatické optimalizaci řezů. Trvale vysoká kvalita řezu nezávislá na obsluze a možnost vícesměnného provozu jsou další rozhodující výhody.',
        },
      },
      {
        heading: {
          de: 'Industrie 4.0 und Digitalisierung',
          en: 'Industry 4.0 and digitalisation',
          cz: 'Průmysl 4.0 a digitalizace',
        },
        body: {
          de: 'Mayer Winkelanlagen sind für Industrie-4.0-Konzepte vorbereitet. Die nahtlose ERP-Integration, die digitale Auftragsverarbeitung und die automatische Schnittoptimierung bilden die Grundlage für eine vernetzte, transparente und effiziente Produktion. Produktionsdaten werden in Echtzeit erfasst und ausgewertet.',
          en: 'Mayer angle cutting systems are prepared for Industry 4.0 concepts. Seamless ERP integration, digital order processing and automatic cut optimisation form the foundation for a connected, transparent and efficient production. Production data is captured and analysed in real time.',
          cz: 'Úhlové řezací systémy Mayer jsou připraveny pro koncepty Průmyslu 4.0. Bezešvá integrace do ERP, digitální zpracování zakázek a automatická optimalizace řezů tvoří základ pro propojenou, transparentní a efektivní výrobu. Výrobní data jsou zachycována a vyhodnocována v reálném čase.',
        },
      },
    ],
    faq: [
      {
        question: {
          de: 'Wie lange dauert die Planung und Installation einer Winkelanlage?',
          en: 'How long does planning and installation of an angle cutting system take?',
          cz: 'Jak dlouho trvá plánování a instalace úhlového řezacího systému?',
        },
        answer: {
          de: 'Die Projektlaufzeit hängt von der Komplexität der Anlage ab. Typischerweise umfasst die Planung 2 bis 4 Monate und die Installation 2 bis 6 Wochen. Asamer begleitet den gesamten Prozess von der Bedarfsanalyse bis zur Inbetriebnahme.',
          en: 'The project timeline depends on the complexity of the installation. Typically, planning takes 2 to 4 months and installation 2 to 6 weeks. Asamer accompanies the entire process from needs analysis to commissioning.',
          cz: 'Časový rámec projektu závisí na složitosti instalace. Typicky plánování trvá 2 až 4 měsíce a instalace 2 až 6 týdnů. Asamer provází celým procesem od analýzy potřeb po uvedení do provozu.',
        },
      },
      {
        question: {
          de: 'Welche Branchen setzen Mayer Winkelanlagen ein?',
          en: 'Which industries use Mayer angle cutting systems?',
          cz: 'Jaká odvětví používají úhlové řezací systémy Mayer?',
        },
        answer: {
          de: 'Mayer Winkelanlagen werden in der Möbelindustrie, im Fassadenbau, in der Aluminium- und Kunststoffverarbeitung, im Transportbau und in der Automobilzulieferung eingesetzt.',
          en: 'Mayer angle cutting systems are used in the furniture industry, facade construction, aluminium and plastics processing, transport construction and automotive supply.',
          cz: 'Úhlové řezací systémy Mayer se používají v nábytkářském průmyslu, stavbě fasád, zpracování hliníku a plastů, dopravním průmyslu a automobilovém průmyslu.',
        },
      },
      {
        question: {
          de: 'Kann Asamer eine Winkelanlage vor Ort planen?',
          en: 'Can Asamer plan an angle cutting system on-site?',
          cz: 'Může Asamer naplánovat úhlový řezací systém přímo na místě?',
        },
        answer: {
          de: 'Ja, Asamer bietet Vor-Ort-Beratung und Bedarfsanalyse an. Wir vermessen Ihren Produktionsbereich, analysieren Ihren Materialfluss und erarbeiten ein maßgeschneidertes Winkelanlagen-Konzept.',
          en: 'Yes, Asamer offers on-site consultation and needs analysis. We survey your production area, analyse your material flow and develop a tailored angle cutting system concept.',
          cz: 'Ano, Asamer nabízí konzultace a analýzu potřeb přímo na místě. Zaměříme váš výrobní prostor, analyzujeme materiálový tok a vypracujeme koncept úhlového řezacího systému na míru.',
        },
      },
    ],
  },
};
