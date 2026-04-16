/**
 * Keyword-rich SEO content for OTT edgebanding products.
 * Used on product detail pages and category overview pages at asamer.cz.
 *
 * Content targets B2B woodworking professionals in CZ, SK and HU
 * searching for edgebanding machines, gluing systems and return conveyors.
 */

import type { ProductSeoContent, CategorySeoContent } from './types';
import type { OttCategory } from '../ottProducts';

/* ====================================================================== */
/*  PRODUCT SEO CONTENT                                                    */
/* ====================================================================== */

export const OTT_PRODUCT_SEO: Record<string, ProductSeoContent> = {
  /* ------------------------------------------------------------------ */
  /*  pacific-plus                                                       */
  /* ------------------------------------------------------------------ */
  'pacific-plus': {
    longDescription: {
      de: `Die OTT Pacific+ ist eine kompakte Kantenanleimmaschine, die speziell fuer Handwerksbetriebe und kleine Tischlereien entwickelt wurde. Mit nur 5,7 Metern Baulaenge passt sie auch in beengte Werkstattraeume und liefert trotzdem ein vollwertiges Kantenbearbeitungsergebnis. Die Maschine verarbeitet Kantenstaerken von 0,3 bis 15 mm auf Plattenstaerken bis 60 mm und erreicht dabei eine Vorschubgeschwindigkeit von 18 m/min inklusive Eckenbearbeitung. Damit eignet sie sich hervorragend fuer die taegliche Fertigung von Moebelfronten, Korpussen und Arbeitsplatten im Einschichtbetrieb.

Die Pacific+ ist mit einem CombiMelt-Aufschmelzsystem ausgestattet, das sowohl EVA- als auch PUR-Klebstoffe verarbeiten kann. Dadurch koennen auch feuchtigkeitsbestaendige Leimfugen realisiert werden, wie sie im Kuechenbau oder Ladenbau gefragt sind. Zur Serienausstattung gehoeren Fuegebearbeitung, Kantenmagazin, Kappgeraet K12, Fraesaggregat, Radiusziehklinge und Eckenrunden AKF. Optional laesst sich das CombiMelt-System auf PUR-Verarbeitung nachruesten.

Asamer ist autorisierter OTT-Haendler fuer Tschechien, die Slowakei und Ungarn. Wir bieten die Pacific+ inklusive Beratung, Installation und Ersatzteilservice. Fuer Handwerksbetriebe, die einen zuverlaessigen Einstieg in die maschinelle Kantenbearbeitung suchen, ist die Pacific+ die wirtschaftlichste Loesung im OTT-Programm. Ob klassische PVC-Kanten, ABS-Kanten oder Echtholzfurniere - die Maschine bewaeltigt alle gaengigen Kantenmaterialien mit gleichbleibend hoher Qualitaet und minimalen Umruestzeiten.`,

      en: `The OTT Pacific+ is a compact edgebanding machine engineered specifically for craft workshops and small joinery operations. At just 5.7 metres in length, it fits into tight workshop spaces while still delivering a complete edgebanding result. The machine processes edge thicknesses from 0.3 to 15 mm on board thicknesses up to 60 mm at a feed speed of 18 m/min including corner processing. This makes it an excellent choice for daily production of furniture fronts, carcasses and worktops in single-shift operation.

The Pacific+ is equipped with a CombiMelt glue system that handles both EVA and PUR adhesives. This enables moisture-resistant glue joints as required in kitchen furniture and shopfitting applications. Standard equipment includes joint processing, edge magazine, trimming unit K12, milling unit, radius scraper blade and corner rounding AKF. The CombiMelt system can optionally be upgraded for PUR processing.

Asamer is the authorized OTT dealer for the Czech Republic, Slovakia and Hungary. We supply the Pacific+ with full consultation, installation and spare parts service. For workshops seeking an affordable entry into machine edgebanding, the Pacific+ is the most cost-effective solution in the OTT range. Whether classic PVC edges, ABS edges or real wood veneers, the machine handles all common edge materials with consistently high quality and minimal changeover times.`,

      cz: `OTT Pacific+ je kompaktni olepovacka hran vyvinuta specialne pro remeslne dilny a male truhlarstvi. S delkou pouhych 5,7 metru se vejde i do stisnenych dilenskych prostor a presto dodava plnohodnotny vysledek olepovani hran. Stroj zpracovava hrany o tlousce 0,3 az 15 mm na deskach do tlousky 60 mm pri rychlosti posuvu 18 m/min vcetne zpracovani rohu. Tim je idealni pro denni vyrobu nabytkovich celnich ploch, korpusu a pracovnich desek v jednosmennem provozu.

Pacific+ je vybavena systemem CombiMelt, ktery zpracovava jak EVA, tak PUR lepidla. To umoznuje vytvaret vlhkosti odolne lepene spoje, ktere jsou zadany ve vyrobe kuchyni a interieru obchodu. Standardni vybava zahrnuje spojovaci obrabeni, zasobnik hran, oriznute zarizeni K12, frezovaci agregat, radiusovou skrabku a zaoblovani rohu AKF. System CombiMelt lze volitelne dovybavit pro zpracovani PUR.

Asamer je autorizovany prodejce OTT pro Ceskou republiku, Slovensko a Madarsko. Pacific+ dodavame vcetne poradenstvi, instalace a servisu nahradnich dilu. Pro remeslne dilny hledajici cenove dostupny vstup do strojniho olepovani hran je Pacific+ nejekonomictejsim resenim v nabidce OTT. At uz klasicke PVC hrany, ABS hrany nebo dyhy z praveho dreva - stroj zvladne vsechny bezne hranove materialy s trvale vysokou kvalitou a minimalnimi casy na prestaveni.`,
    },

    applicationSections: [
      {
        heading: {
          de: 'Fuer kleine Tischlereien und Einsteiger',
          en: 'For small joinery workshops and beginners',
          cz: 'Pro male truhlarske dilny a zacinajici',
        },
        body: {
          de: 'Die Pacific+ ist das Einstiegsmodell im OTT-Programm und bietet kleinen Tischlereien alles, was sie fuer die taegliche Kantenbearbeitung benoetigen. Mit 18 m/min Vorschub inklusive Eckenbearbeitung laesst sich ein praxisgerechter Durchsatz erzielen, ohne in eine groessere Maschine investieren zu muessen. Die einfache Bedienung und die kompakten Abmessungen machen sie ideal fuer Betriebe mit ein bis drei Mitarbeitern.',
          en: 'The Pacific+ is the entry-level model in the OTT range and provides small joinery workshops with everything needed for daily edgebanding. With a feed speed of 18 m/min including corner processing, it achieves practical throughput without requiring investment in a larger machine. Simple operation and compact dimensions make it ideal for workshops with one to three employees.',
          cz: 'Pacific+ je vstupni model v nabidce OTT a poskytuje malym truhlarskym dilnam vse potrebne pro denni olepovani hran. S rychlosti posuvu 18 m/min vcetne zpracovani rohu dosahuje praktickeho vystupu bez nutnosti investovat do vetsiho stroje. Jednoducha obsluha a kompaktni rozmery ji cini idealnim resenim pro provozovny s jednim az tremi zamestnanci.',
        },
      },
      {
        heading: {
          de: 'Kuechenbau und Ladenbau mit PUR-Option',
          en: 'Kitchen and shopfitting with PUR option',
          cz: 'Vyroba kuchyni a obchodni vybava s moznosti PUR',
        },
        body: {
          de: 'Dank des nachruestbaren CombiMelt-PUR-Systems koennen auch Feuchtraum- und Kuechen-Kanten mit wasserfesten PUR-Leimfugen verarbeitet werden. Das macht die Pacific+ zu einer vielseitigen Loesung fuer Tischlereien, die sowohl Standard-Moebel als auch Kuechen und Sanitaermoebel fertigen.',
          en: 'Thanks to the retrofittable CombiMelt PUR system, moisture-proof kitchen and wet-room edges can also be processed with waterproof PUR glue joints. This makes the Pacific+ a versatile solution for workshops producing both standard furniture and kitchen or bathroom cabinetry.',
          cz: 'Diky dodatecne montovitelnemu systemu CombiMelt PUR lze zpracovavat i hrany pro vlhke prostory a kuchyne s vodetesnymi PUR lepenymi sparami. To cini Pacific+ vsestrannym resenim pro dilny vyrabejici jak standardni nabytek, tak kuchynsky ci koupelnovy nabytek.',
        },
      },
    ],

    buyingAdvice: {
      de: 'Waehlen Sie die Pacific+, wenn Sie eine kompakte und bezahlbare Kantenanleimmaschine fuer Ihren Handwerksbetrieb suchen. Sie eignet sich optimal fuer Einzelstueck- und Kleinserienfertigung mit bis zu 18 m/min Vorschub. Wenn Sie hoehere Vorschubgeschwindigkeiten oder groessere Kantenstaerken benoetigen, sollten Sie die Tornado+ oder FlexEdge in Betracht ziehen.',
      en: 'Choose the Pacific+ if you need a compact, affordable edgebanding machine for your workshop. It is optimal for one-off and small-batch production at up to 18 m/min feed speed. If you require higher feed speeds or heavier edge thicknesses, consider the Tornado+ or FlexEdge.',
      cz: 'Zvolte Pacific+, pokud hledate kompaktni a cenove dostupnou olepovacku hran pro svou dilnu. Je optimalni pro kusovou a maloseriovou vyrobu s rychlosti posuvu az 18 m/min. Pokud potrebujete vyssi rychlosti posuvu nebo vetsi tlousky hran, zvazujte Tornado+ nebo FlexEdge.',
    },

    faq: [
      {
        question: {
          de: 'Welche Kantenstaerke verarbeitet die Pacific+?',
          en: 'What edge thickness can the Pacific+ process?',
          cz: 'Jakou tlousku hran zpracuje Pacific+?',
        },
        answer: {
          de: 'Die Pacific+ verarbeitet Kantenstaerken von 0,3 bis 15 mm. Sie ist damit fuer alle gaengigen duennen Kanten (ABS, PVC, Melamin) ebenso geeignet wie fuer dickere Massivholzkanten.',
          en: 'The Pacific+ processes edge thicknesses from 0.3 to 15 mm, making it suitable for all common thin edges (ABS, PVC, melamine) as well as thicker solid wood edges.',
          cz: 'Pacific+ zpracovava tlousky hran od 0,3 do 15 mm. Je tak vhodna pro vsechny bezne tenke hrany (ABS, PVC, melamin) i pro tlustsi masivni drevene hrany.',
        },
      },
      {
        question: {
          de: 'Kann die Pacific+ PUR-Klebstoff verarbeiten?',
          en: 'Can the Pacific+ process PUR adhesive?',
          cz: 'Muze Pacific+ zpracovavat PUR lepidlo?',
        },
        answer: {
          de: 'Ja, die Pacific+ kann mit dem optionalen CombiMelt-PUR-System auf PUR-Leimverarbeitung nachgeruestet werden. Im Grundausbau arbeitet sie mit EVA-Klebstoff.',
          en: 'Yes, the Pacific+ can be retrofitted for PUR adhesive processing with the optional CombiMelt PUR system. In its standard configuration, it works with EVA adhesive.',
          cz: 'Ano, Pacific+ lze dovybavit systemem CombiMelt PUR pro zpracovani PUR lepidla. V zakladni konfiguraci pracuje s EVA lepidlem.',
        },
      },
      {
        question: {
          de: 'Wie viel Platz braucht die Pacific+ in der Werkstatt?',
          en: 'How much space does the Pacific+ need in the workshop?',
          cz: 'Kolik mista zabira Pacific+ v dilne?',
        },
        answer: {
          de: 'Die Pacific+ hat eine Baulaenge von nur 5,7 Metern und ist damit die kompakteste Kantenanleimmaschine im OTT-Programm. Zusammen mit einem TRANScompact-Rueckfuehrsystem laesst sie sich auch auf kleiner Flaeche effizient betreiben.',
          en: 'The Pacific+ has a footprint of just 5.7 metres, making it the most compact edgebanding machine in the OTT range. Combined with a TRANScompact return system, it can be operated efficiently even in tight spaces.',
          cz: 'Pacific+ ma delku pouhych 5,7 metru a je tak nejkompaktnejsi olepovackou hran v nabidce OTT. V kombinaci s vratnym systemem TRANScompact ji lze efektivne provozovat i na malem prostoru.',
        },
      },
      {
        question: {
          de: 'Was kostet eine OTT Pacific+ Kantenanleimmaschine?',
          en: 'What does an OTT Pacific+ edgebanding machine cost?',
          cz: 'Kolik stoji olepovacka hran OTT Pacific+?',
        },
        answer: {
          de: 'Der Preis der Pacific+ haengt von der gewaehlten Ausstattung ab. Als autorisierter OTT-Haendler fuer CZ, SK und HU erstellt Asamer Ihnen gerne ein individuelles Angebot. Kontaktieren Sie uns fuer eine unverbindliche Beratung.',
          en: 'The price of the Pacific+ depends on the chosen equipment configuration. As the authorized OTT dealer for CZ, SK and HU, Asamer is happy to provide you with a tailored quotation. Contact us for a no-obligation consultation.',
          cz: 'Cena Pacific+ zavisi na zvolene konfiguraci vybaveni. Jako autorizovany prodejce OTT pro CZ, SK a HU vam Asamer rad pripravi individualni nabidku. Kontaktujte nas pro nezavaznou konzultaci.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  tornado-plus                                                       */
  /* ------------------------------------------------------------------ */
  'tornado-plus': {
    longDescription: {
      de: `Die OTT Tornado+ ist das meistbewaehrte Modell der OTT-Kantenanleimmaschinen-Reihe und seit Jahren ein Bestseller in mittelgrossen Tischlereien und Moebelbetrieben. Mit einer Baulaenge von 6,2 Metern bietet sie einen hervorragenden Kompromiss zwischen Kompaktheit und Leistungsfaehigkeit. Die Maschine verarbeitet Kantenstaerken von 0,3 bis 15 mm auf Plattenstaerken bis 60 mm bei Vorschubgeschwindigkeiten von 12 bis 18 m/min.

Die vielseitige Ausstattung der Tornado+ macht sie zur perfekten Wahl fuer Betriebe mit wechselnden Anforderungen. Ob duenne ABS-Kanten fuer Serienfertigung oder dicke Massivholzkanten fuer Sonderanfertigungen - die Tornado+ wechselt schnell zwischen verschiedenen Materialien und Staerken. Zur Standardausstattung gehoeren Fuegebearbeitung, Kantenmagazin, CombiMelt-Aufschmelzsystem, Kappgeraet, Fraesaggregat und Ziehklinge.

Die Tornado+ laesst sich mit dem TRANScompact-Rueckfuehrsystem zu einer effizienten Durchlaufanlage erweitern. Im Vergleich zur Pacific+ bietet sie mehr Flexibilitaet bei den Vorschubgeschwindigkeiten, waehrend sie preislich deutlich unter den Profi-Modellen Storm+ und TopEdge liegt. Asamer bietet die Tornado+ fuer den tschechischen, slowakischen und ungarischen Markt mit umfassendem Service, Ersatzteilversorgung und Schulung an. Fuer mittelgrosse Betriebe, die eine zuverlaessige Allround-Kantenanleimmaschine suchen, ist die Tornado+ eine ausgezeichnete Investition mit langfristiger Wertbestaendigkeit.`,

      en: `The OTT Tornado+ is the most proven model in the OTT edgebanding machine range and has been a bestseller among medium-sized joinery and furniture workshops for years. At 6.2 metres in length, it offers an excellent compromise between compactness and capability. The machine processes edge thicknesses from 0.3 to 15 mm on board thicknesses up to 60 mm at feed speeds of 12 to 18 m/min.

The versatile equipment of the Tornado+ makes it the ideal choice for operations with varying requirements. Whether thin ABS edges for batch production or thick solid wood edges for custom work, the Tornado+ switches quickly between different materials and thicknesses. Standard equipment includes joint processing, edge magazine, CombiMelt glue system, trimming unit, milling unit and scraper blade.

The Tornado+ can be extended with the TRANScompact return conveyor into an efficient throughfeed line. Compared to the Pacific+, it offers greater feed speed flexibility, while remaining significantly below the professional-grade Storm+ and TopEdge in price. Asamer supplies the Tornado+ for the Czech, Slovak and Hungarian markets with comprehensive service, spare parts supply and training. For medium-sized operations looking for a reliable all-round edgebanding machine, the Tornado+ is an excellent investment with long-term value retention.`,

      cz: `OTT Tornado+ je nejprovereneji model rady olepovacek hran OTT a jiz roky je bestsellerem ve strednich truhlarskych a nabytkarskych provozech. S delkou 6,2 metru nabizi vynikajici kompromis mezi kompaktnosti a vykonem. Stroj zpracovava hrany o tlousce 0,3 az 15 mm na deskach do tlousky 60 mm pri rychlostech posuvu 12 az 18 m/min.

Vsestranna vybava Tornado+ z ni cini idealnim reseni pro provozy s menicimi se pozadavky. At uz tenke ABS hrany pro seriovou vyrobu nebo tluste masivni drevene hrany pro zakazkovou praci - Tornado+ rychle prepina mezi ruznymi materialy a tlousskami. Standardni vybava zahrnuje spojovaci obrabeni, zasobnik hran, system CombiMelt, oriznute zarizeni, frezovaci agregat a skrabku.

Tornado+ lze rozsirit o vratny dopravnik TRANScompact na efektivni pruchozi linku. Ve srovnani s Pacific+ nabizi vetsi flexibilitu rychlosti posuvu, pricemz cenove zustavava vyrazne pod profesionalnimi modely Storm+ a TopEdge. Asamer dodava Tornado+ pro cesky, slovensky a madarsky trh s komplexnim servisem, zasobovanim nahradnimi dily a skolenim. Pro stredni provozy hledajici spolehlive univerzalni reseni pro olepovani hran je Tornado+ vynikajici investici s dlouhodobou hodnotou.`,
    },

    applicationSections: [
      {
        heading: {
          de: 'Fuer variantenreiche Fertigung',
          en: 'For variant-rich production',
          cz: 'Pro ruznorodou vyrobu',
        },
        body: {
          de: 'Die Tornado+ ist der Allrounder fuer Betriebe, die taeglich mit unterschiedlichen Kantenmaterialien und -staerken arbeiten. Schnelle Umruestzeiten und eine intuitive Bedienung ermoeglichen den effizienten Wechsel zwischen PVC, ABS, Melamin und Echtholzfurnier - ideal fuer Moebelwerkstaetten mit Einzel- und Kleinserienfertigung.',
          en: 'The Tornado+ is the all-rounder for operations that work daily with different edge materials and thicknesses. Quick changeover times and intuitive operation enable efficient switching between PVC, ABS, melamine and real wood veneer - ideal for furniture workshops with one-off and small-batch production.',
          cz: 'Tornado+ je univerzalni stroj pro provozy pracujici denne s ruznymi hranovymi materialy a tlousskami. Rychle prestavovaci casy a intuitivni ovladani umoznuji efektivni prepinani mezi PVC, ABS, melaminem a dyhou z praveho dreva - idealni pro nabytkarske dilny s kusovou a maloseriovou vyrobou.',
        },
      },
      {
        heading: {
          de: 'Bewaeehrtes Arbeitspferd fuer den Dauereinsatz',
          en: 'Proven workhorse for continuous use',
          cz: 'Overeny tahoun pro nepretrzity provoz',
        },
        body: {
          de: 'Seit Jahren ist die Tornado+ das meistverkaufte Modell von OTT. Die robuste Bauweise und die erprobte Technik sorgen fuer geringe Wartungskosten und hohe Verfuegbarkeit. Viele Betriebe setzen die Tornado+ im Einschicht- und Zweischichtbetrieb ein und profitieren von ihrer Zuverlaessigkeit und Langlebigkeit.',
          en: 'For years, the Tornado+ has been OTT\'s best-selling model. Its robust construction and proven technology ensure low maintenance costs and high availability. Many operations run the Tornado+ in single or double-shift production and benefit from its reliability and longevity.',
          cz: 'Jiz leta je Tornado+ nejprodavanejsim modelem OTT. Robustni konstrukce a osvedcena technika zajisuji nizke naklady na udrzbu a vysokou dostupnost. Mnoho provozu pouziva Tornado+ v jednosmennem i dvousmennem provozu a tezi z jeji spolehlivosti a zivotnosti.',
        },
      },
    ],

    buyingAdvice: {
      de: 'Die Tornado+ ist die richtige Wahl, wenn Sie eine bewaehrte Allround-Kantenanleimmaschine fuer den taeglichen Einsatz suchen. Im Vergleich zur Pacific+ bietet sie mehr Geschwindigkeitsflexibilitaet. Wenn Sie hoehere Vorschubgeschwindigkeiten oder eine Industrie-4.0-Anbindung benoetigen, empfehlen wir die FlexEdge oder Storm+.',
      en: 'The Tornado+ is the right choice if you are looking for a proven all-round edgebanding machine for daily use. Compared to the Pacific+, it offers more speed flexibility. If you need higher feed speeds or Industry 4.0 connectivity, we recommend the FlexEdge or Storm+.',
      cz: 'Tornado+ je spravna volba, pokud hledate overene univerzalni reseni pro denni olepovani hran. Ve srovnani s Pacific+ nabizi vetsi flexibilitu rychlosti. Pokud potrebujete vyssi rychlosti posuvu nebo pripojeni k Prumyslu 4.0, doporucujeme FlexEdge nebo Storm+.',
    },

    faq: [
      {
        question: {
          de: 'Worin unterscheidet sich die Tornado+ von der Pacific+?',
          en: 'What is the difference between the Tornado+ and the Pacific+?',
          cz: 'Cim se Tornado+ lisi od Pacific+?',
        },
        answer: {
          de: 'Die Tornado+ ist mit 6,2 m etwas laenger als die Pacific+ (5,7 m) und bietet einen variablen Vorschub von 12-18 m/min gegenueber den festen 18 m/min der Pacific+. Sie ist vielseitiger ausgestattet und als bewaeahrtestes Modell der OTT-Reihe besonders zuverlaessig.',
          en: 'The Tornado+ at 6.2 m is slightly longer than the Pacific+ (5.7 m) and offers a variable feed speed of 12-18 m/min compared to the fixed 18 m/min of the Pacific+. It has more versatile equipment and, as the most proven model in the OTT range, is particularly reliable.',
          cz: 'Tornado+ s 6,2 m je o neco delsi nez Pacific+ (5,7 m) a nabizi promennou rychlost posuvu 12-18 m/min oproti fixnim 18 m/min u Pacific+. Je vsestranneji vybavena a jako nejovereneji model rady OTT je obzvlaste spolehliva.',
        },
      },
      {
        question: {
          de: 'Fuer wie viele Teile pro Schicht ist die Tornado+ ausgelegt?',
          en: 'How many parts per shift is the Tornado+ designed for?',
          cz: 'Na kolik kusu za smenu je Tornado+ navrzena?',
        },
        answer: {
          de: 'Mit 12-18 m/min Vorschub ist die Tornado+ fuer mittelgrosse Produktionsmengen ausgelegt. Im praktischen Einsatz koennen je nach Teilgeometrie und Kantenmaterial mehrere hundert Teile pro Schicht bearbeitet werden.',
          en: 'With 12-18 m/min feed speed, the Tornado+ is designed for medium-sized production volumes. In practical use, depending on part geometry and edge material, several hundred parts per shift can be processed.',
          cz: 'S rychlosti posuvu 12-18 m/min je Tornado+ navrzena pro stredne velke vyrobni objemy. V praktickem provozu lze v zavislosti na geometrii dilu a hranovem materialu zpracovat nekolik set kusu za smenu.',
        },
      },
      {
        question: {
          de: 'Ist die Tornado+ fuer den Zweischichtbetrieb geeignet?',
          en: 'Is the Tornado+ suitable for two-shift operation?',
          cz: 'Je Tornado+ vhodna pro dvousmenni provoz?',
        },
        answer: {
          de: 'Ja, die robuste Bauweise der Tornado+ ist fuer den Dauerbetrieb ausgelegt. Viele Betriebe setzen sie erfolgreich im Zweischichtbetrieb ein. Fuer noch intensivere Nutzung empfehlen wir die Storm+ oder TopEdge.',
          en: 'Yes, the robust construction of the Tornado+ is designed for continuous operation. Many workshops successfully use it in two-shift production. For even more intensive use, we recommend the Storm+ or TopEdge.',
          cz: 'Ano, robustni konstrukce Tornado+ je navrzena pro nepretrzity provoz. Mnoho provozu ji uspesne pouziva ve dvousmennem provozu. Pro jeste intenzivnejsi vyuziti doporucujeme Storm+ nebo TopEdge.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  flexedge                                                           */
  /* ------------------------------------------------------------------ */
  'flexedge': {
    longDescription: {
      de: `Die OTT FlexEdge ist die neueste Ergaenzung im OTT-Maschinenportfolio und schliesst die Luecke zwischen dem bewaehrten Tornado+ und dem leistungsstarken Storm+. Mit einer Baulaenge von 7,1 Metern und Vorschubgeschwindigkeiten von 12 bis 20 m/min positioniert sie sich als professionelle Kantenanleimmaschine fuer anspruchsvolle Tischlereien und mittelgrosse Moebelhersteller, die Wert auf Zukunftssicherheit legen.

Das Highlight der FlexEdge ist die serienmaeassig verbaute Beckhoff-Steuerung mit 18,5-Zoll-Touchscreen und OPC-UA-Schnittstelle. Damit ist die Maschine vollstaendig Industrie-4.0-faehig und kann nahtlos in vernetzte Produktionsumgebungen eingebunden werden. Rezeptverwaltung, Diagnose und Fernwartung sind ueber die moderne Steuerung komfortabel moeglich. Die FlexEdge verarbeitet Kantenstaerken von 0,3 bis 15 mm und ist mit Fuegebearbeitung, CombiMelt, Fraesaggregat, Ziehklinge und Eckenrunden ausgestattet.

Als autorisierter OTT-Haendler fuer Tschechien, die Slowakei und Ungarn beraten wir Sie bei Asamer gerne zur optimalen Konfiguration der FlexEdge fuer Ihre Anforderungen. Die Maschine eignet sich besonders fuer Betriebe, die heute schon an die digitale Vernetzung ihrer Werkstatt denken, aber noch keine industrielle Hochleistungsmaschine wie die Storm+ oder TopEdge benoetigen. Mit der FlexEdge investieren Sie in eine zukunftssichere Kantenanleimmaschine, die mit Ihrem Betrieb mitwachsen kann.`,

      en: `The OTT FlexEdge is the newest addition to the OTT machine portfolio, bridging the gap between the proven Tornado+ and the high-performance Storm+. At 7.1 metres in length with feed speeds of 12 to 20 m/min, it positions itself as a professional edgebanding machine for demanding joinery workshops and medium-sized furniture manufacturers who value future-proof technology.

The highlight of the FlexEdge is the Beckhoff control with 18.5-inch touchscreen and OPC-UA interface, fitted as standard. This makes the machine fully Industry 4.0 capable, enabling seamless integration into networked production environments. Recipe management, diagnostics and remote maintenance are conveniently handled through the modern control system. The FlexEdge processes edge thicknesses from 0.3 to 15 mm and comes equipped with joint processing, CombiMelt, milling unit, scraper blade and corner rounding.

As the authorized OTT dealer for the Czech Republic, Slovakia and Hungary, Asamer is happy to advise you on the optimal FlexEdge configuration for your requirements. The machine is particularly suited for workshops that are already thinking about digitally connecting their production but do not yet need an industrial high-performance machine like the Storm+ or TopEdge. With the FlexEdge, you invest in a future-proof edgebanding machine that can grow with your business.`,

      cz: `OTT FlexEdge je nejnovejsi prirustek v portfoliu stroju OTT a preklenuji mezeru mezi osvdecenym Tornado+ a vykonnym Storm+. S delkou 7,1 metru a rychlostmi posuvu 12 az 20 m/min se profiluje jako profesionalni olepovacka hran pro narocne truhlarske dilny a stredni vyrobce nabytku, kteri kladou duraz na budouci vyuzitelnost.

Hlavnim tahakem FlexEdge je standardne osazeny ridici system Beckhoff s 18,5palcovym dotykovym displejem a rozhranim OPC-UA. Tim je stroj plne pripraven pro Prumysl 4.0 a lze ho bezproblemove zaclenit do sitovych vyrobnich prostredi. Sprava receptur, diagnostika a vzdala udrzba jsou prostrednictvim moderniho ridiciho systemu pohodlne dostupne. FlexEdge zpracovava hrany o tlousce 0,3 az 15 mm a je vybavena spojovacim obrabenim, systemem CombiMelt, frezovacim agregatem, skrabkou a zaoblovanim rohu.

Jako autorizovany prodejce OTT pro Ceskou republiku, Slovensko a Madarsko vam v Asamer rade poradime s optimalni konfiguraci FlexEdge pro vase pozadavky. Stroj je obzvlaste vhodny pro provozy, ktere jiz dnes mysli na digitalni propojeni sve dilny, ale zatim nepotrebuji prumyslovy vysokovykonny stroj jako Storm+ nebo TopEdge. S FlexEdge investujete do perspektivni olepovacky hran, ktera muze rust spolu s vasim podnikem.`,
    },

    applicationSections: [
      {
        heading: {
          de: 'Digitale Werkstatt mit Industrie-4.0-Anbindung',
          en: 'Digital workshop with Industry 4.0 connectivity',
          cz: 'Digitalni dilna s pripojenim k Prumyslu 4.0',
        },
        body: {
          de: 'Die Beckhoff-Steuerung mit OPC-UA-Schnittstelle ermoeglicht die Einbindung der FlexEdge in vernetzte Fertigungsumgebungen. Produktionsdaten koennen in Echtzeit ausgelesen, Rezepte zentral verwaltet und Fernwartung durchgefuehrt werden. Das macht die FlexEdge zur idealen Wahl fuer Betriebe auf dem Weg zur digitalen Fertigung.',
          en: 'The Beckhoff control with OPC-UA interface enables integration of the FlexEdge into networked manufacturing environments. Production data can be read in real time, recipes managed centrally and remote maintenance performed. This makes the FlexEdge the ideal choice for workshops transitioning to digital manufacturing.',
          cz: 'Ridici system Beckhoff s rozhranim OPC-UA umoznuje zaclenit FlexEdge do sitovych vyrobnich prostredi. Vyrobni data lze cist v realnem case, receptury centralne spravovat a provadet vzdalenu udrzbu. To cini FlexEdge idealnim resenim pro provozy na ceste k digitalni vyrobe.',
        },
      },
      {
        heading: {
          de: 'Aufstieg von Tornado+ zur naechsten Leistungsklasse',
          en: 'Upgrading from Tornado+ to the next performance class',
          cz: 'Prechod z Tornado+ do vyssi vykonnostni tridy',
        },
        body: {
          de: 'Fuer Betriebe, die aus dem Tornado+-Leistungsbereich herauswachsen, bietet die FlexEdge den logischen naechsten Schritt. Mit 20 m/min gegenueber 18 m/min und der modernen Beckhoff-Steuerung bietet sie deutlich mehr Leistung und Zukunftssicherheit, ohne gleich in die preislich anspruchsvollere Storm+-Klasse wechseln zu muessen.',
          en: 'For workshops outgrowing the Tornado+ performance class, the FlexEdge offers the logical next step. With 20 m/min versus 18 m/min and the modern Beckhoff control, it delivers significantly more performance and future-proofing without having to move straight into the more expensive Storm+ category.',
          cz: 'Pro provozy prerustavajici vykonnostni tridu Tornado+ nabizi FlexEdge logicky dalsi krok. S 20 m/min oproti 18 m/min a modernim rizenim Beckhoff prinasi vyrazne vyssi vykon a perspektivu, aniz byste museli rovnou prechazet do cenove narocnejsi kategorie Storm+.',
        },
      },
    ],

    buyingAdvice: {
      de: 'Die FlexEdge ist die optimale Wahl, wenn Ihnen Industrie-4.0-Faehigkeit wichtig ist und Sie mehr Leistung als die Tornado+ benoetigen, aber noch nicht in die Storm+-Klasse investieren moechten. Die Beckhoff-Steuerung mit OPC-UA macht sie besonders zukunftssicher.',
      en: 'The FlexEdge is the optimal choice if Industry 4.0 capability matters to you and you need more performance than the Tornado+ but are not yet ready to invest in the Storm+ class. The Beckhoff control with OPC-UA makes it particularly future-proof.',
      cz: 'FlexEdge je optimalni volba, pokud je pro vas dulezita schopnost Prumyslu 4.0 a potrebujete vyssi vykon nez Tornado+, ale zatim nechcete investovat do tridy Storm+. Rizeni Beckhoff s OPC-UA ji cini obzvlaste perspektivni.',
    },

    faq: [
      {
        question: {
          de: 'Was macht die FlexEdge besonders gegenueber anderen OTT-Modellen?',
          en: 'What makes the FlexEdge special compared to other OTT models?',
          cz: 'Cim je FlexEdge vyjimecna oproti ostatnim modelum OTT?',
        },
        answer: {
          de: 'Die FlexEdge ist das einzige OTT-Modell mit serienmaeassiger Beckhoff 18,5"-Steuerung und OPC-UA-Schnittstelle. Das macht sie zur idealen Wahl fuer Betriebe, die ihre Produktion digital vernetzen wollen.',
          en: 'The FlexEdge is the only OTT model with a Beckhoff 18.5" control and OPC-UA interface as standard. This makes it the ideal choice for workshops looking to digitally connect their production.',
          cz: 'FlexEdge je jediny model OTT se standardne osazonym rizenim Beckhoff 18,5" a rozhranim OPC-UA. To z ni cini idealnim resenim pro provozy chtejici digitalne propojit svou vyrobu.',
        },
      },
      {
        question: {
          de: 'Ist die FlexEdge fuer PUR-Klebstoff geeignet?',
          en: 'Is the FlexEdge suitable for PUR adhesive?',
          cz: 'Je FlexEdge vhodna pro PUR lepidlo?',
        },
        answer: {
          de: 'Ja, die FlexEdge ist mit dem CombiMelt-System ausgestattet, das sowohl EVA- als auch PUR-Klebstoffe verarbeiten kann. PUR-Leimfugen sind besonders wasserbestaendig und fuer den Kuechenbau empfehlenswert.',
          en: 'Yes, the FlexEdge comes equipped with the CombiMelt system that processes both EVA and PUR adhesives. PUR glue joints are particularly moisture-resistant and recommended for kitchen furniture production.',
          cz: 'Ano, FlexEdge je vybavena systemem CombiMelt, ktery zpracovava jak EVA, tak PUR lepidla. PUR lepene spoje jsou obzvlaste odolne vlhkosti a doporucuji se pro vyrobu kuchynskeho nabytku.',
        },
      },
      {
        question: {
          de: 'Kann die FlexEdge in eine bestehende Produktionslinie integriert werden?',
          en: 'Can the FlexEdge be integrated into an existing production line?',
          cz: 'Lze FlexEdge integrovat do stavajici vyrobni linky?',
        },
        answer: {
          de: 'Ja, dank der OPC-UA-Schnittstelle und der Beckhoff-Steuerung laesst sich die FlexEdge problemlos in bestehende Fertigungslinien einbinden. Sie kann mit TRANScompact- oder TRANSlift-Rueckfuehrsystemen kombiniert werden.',
          en: 'Yes, thanks to the OPC-UA interface and Beckhoff control, the FlexEdge can be easily integrated into existing production lines. It can be combined with TRANScompact or TRANSlift return systems.',
          cz: 'Ano, diky rozhrani OPC-UA a rizeni Beckhoff lze FlexEdge snadno integrovat do stavajicich vyrobnich linek. Lze ji kombinovat s vratnymi systemy TRANScompact nebo TRANSlift.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  storm-plus                                                         */
  /* ------------------------------------------------------------------ */
  'storm-plus': {
    longDescription: {
      de: `Die OTT Storm+ ist eine Hochleistungs-Kantenanleimmaschine fuer den industriellen Dauerbetrieb. Mit 7,8 Metern Baulaenge und Vorschubgeschwindigkeiten von 12 bis 22 m/min ist sie auf hohe Stueckzahlen und maximale Zuverlaessigkeit ausgelegt. Die Maschine verarbeitet Kantenstaerken von 0,3 bis 15 mm auf Plattenstaerken bis 60 mm und eignet sich damit fuer die gesamte Bandbreite gaengiger Kantenmaterialien in der industriellen Moebelfertigung.

Die Storm+ ist ab Werk mit CombiMelt PUR ausgestattet, was wasserfeste Leimfugen auf hoechstem Qualitaetsniveau ermoeglicht. Eine Druckzone sorgt fuer gleichmaessigen Anpressdruck ueber die gesamte Kantenlaenge, was insbesondere bei hohen Vorschubgeschwindigkeiten zu einer sauberen, blasenfreien Fugenqualitaet fuehrt. Zur Ausstattung gehoeren ausserdem Fraesaggregat, Kappgeraet, Ziehklinge und Eckenrunden AKF.

Die robuste Bauweise der Storm+ ist auf den Dreischicht- und Dauerbetrieb ausgelegt. Schwere Gusskoerper und praezise Fuehrungen gewaehrleisten auch nach Jahren intensiver Nutzung gleichbleibende Bearbeitungsqualitaet. In Kombination mit TRANSlift- oder TRANSedge-Rueckfuehrsystemen entsteht eine vollstaendige Produktionslinie. Asamer ist autorisierter OTT-Haendler fuer Tschechien, die Slowakei und Ungarn und bietet neben Beratung und Verkauf auch Inbetriebnahme, Schulung und schnelle Ersatzteilversorgung fuer die Storm+.`,

      en: `The OTT Storm+ is a high-performance edgebanding machine built for continuous industrial operation. At 7.8 metres in length with feed speeds of 12 to 22 m/min, it is designed for high volume output and maximum reliability. The machine processes edge thicknesses from 0.3 to 15 mm on board thicknesses up to 60 mm, covering the full range of common edge materials in industrial furniture production.

The Storm+ comes factory-equipped with CombiMelt PUR, enabling waterproof glue joints at the highest quality level. A pressure zone ensures consistent contact pressure across the entire edge length, which is essential for clean, bubble-free joint quality at high feed speeds. Equipment also includes milling unit, trimming unit, scraper blade and corner rounding AKF.

The robust construction of the Storm+ is designed for three-shift and continuous operation. Heavy cast bodies and precision guides ensure consistent processing quality even after years of intensive use. Combined with TRANSlift or TRANSedge return systems, a complete production line can be created. Asamer is the authorized OTT dealer for the Czech Republic, Slovakia and Hungary and offers consultation, sales, commissioning, training and fast spare parts supply for the Storm+.`,

      cz: `OTT Storm+ je vysokovykonny olepovaci stroj na hrany urceny pro prumyslovy nepretrzity provoz. S delkou 7,8 metru a rychlostmi posuvu 12 az 22 m/min je navrzena pro vysoky objem vystupu a maximalni spolehlivost. Stroj zpracovava hrany o tlousce 0,3 az 15 mm na deskach do tlousky 60 mm a pokryva tak celou skalu beznych hranovych materialu v prumyslove vyrobe nabytku.

Storm+ je z vyroby vybavena systemem CombiMelt PUR, ktery umoznuje vodetesne lepene spoje na nejvyssi urovni kvality. Tlakova zona zajisuji rovnomerny pritlak po cele delce hrany, coz je nezbytne pro cistou kvalitu spoju bez bublin pri vysokych rychlostech posuvu. Vybaveni dale zahrnuje frezovaci agregat, oriznute zarizeni, skrabku a zaoblovani rohu AKF.

Robustni konstrukce Storm+ je navrzena pro trismenni a nepretrzity provoz. Tezke litinove tela a precizni vedeni zajisuji stale stejnou kvalitu obrabeni i po letech intenzivniho pouzivani. V kombinaci s vratnymi systemy TRANSlift nebo TRANSedge vznikne kompletni vyrobni linka. Asamer je autorizovany prodejce OTT pro Ceskou republiku, Slovensko a Madarsko a nabizi krome poradenstvi a prodeje take uvedeni do provozu, skoleni a rychle zasobovani nahradnimi dily pro Storm+.`,
    },

    applicationSections: [
      {
        heading: {
          de: 'Fuer industrielle Serienfertigung',
          en: 'For industrial batch production',
          cz: 'Pro prumyslovou seriovou vyrobu',
        },
        body: {
          de: 'Mit bis zu 22 m/min Vorschub und der robusten Bauweise fuer Dauerbetrieb ist die Storm+ die erste Wahl fuer industrielle Moebelfertiger mit hohem Stueckzahlbedarf. Die Druckzone und das CombiMelt-PUR-System garantieren gleichbleibend hohe Fugenqualitaet auch bei Maximalgeschwindigkeit.',
          en: 'With up to 22 m/min feed speed and robust construction for continuous operation, the Storm+ is the first choice for industrial furniture manufacturers with high volume requirements. The pressure zone and CombiMelt PUR system guarantee consistently high joint quality even at maximum speed.',
          cz: 'S rychlosti posuvu az 22 m/min a robustni konstrukci pro nepretrzity provoz je Storm+ prvni volbou pro prumyslove vyrobce nabytku s vysokymi naroky na objem. Tlakova zona a system CombiMelt PUR zaruci trvale vysokou kvalitu spoju i pri maximalni rychlosti.',
        },
      },
      {
        heading: {
          de: 'Feuchtigkeitsbestaendige Fertigung mit PUR',
          en: 'Moisture-resistant production with PUR',
          cz: 'Vyroba odolna vlhkosti s PUR',
        },
        body: {
          de: 'Die ab Werk integrierte CombiMelt-PUR-Einheit macht die Storm+ zur idealen Maschine fuer Kuechen-, Bad- und Labormoebel. PUR-Klebstoff bildet wasserfeste Fugen, die auch in Feuchtraeumen dauerhaft halten. Im Gegensatz zu EVA-Fugen quillt die PUR-Verbindung nicht auf und bleibt ueber Jahre unsichtbar.',
          en: 'The factory-integrated CombiMelt PUR unit makes the Storm+ the ideal machine for kitchen, bathroom and laboratory furniture. PUR adhesive forms waterproof joints that hold permanently even in wet environments. Unlike EVA joints, the PUR bond does not swell and remains invisible for years.',
          cz: 'Z vyroby integrovana jednotka CombiMelt PUR cini Storm+ idealnim strojem pro kuchynsky, koupelnovy a laboratorni nabytek. PUR lepidlo vytvari vodetesne spoje, ktere drzi trvale i ve vlhkem prostredi. Na rozdil od EVA spoju PUR spoj nenaboba a zustava po leta neviditelny.',
        },
      },
      {
        heading: {
          de: 'Komplette Produktionslinie mit Rueckfuehrung',
          en: 'Complete production line with return conveyor',
          cz: 'Kompletni vyrobni linka s vratnym dopravnikem',
        },
        body: {
          de: 'In Kombination mit TRANSlift oder TRANSedge wird die Storm+ zum Herzstuck einer kompletten Kantenanleimlinie. Der automatische Werkstueckruecklauf ermoeglicht den Betrieb mit nur einem Bediener und maximiert den Durchsatz.',
          en: 'Combined with TRANSlift or TRANSedge, the Storm+ becomes the heart of a complete edgebanding line. Automatic workpiece return enables operation with just one operator and maximizes throughput.',
          cz: 'V kombinaci s TRANSlift nebo TRANSedge se Storm+ stava srdcem kompletni olepovaci linky. Automaticky navrat obrobku umoznuje provoz s jednim operatorem a maximalizuje propustnost.',
        },
      },
    ],

    buyingAdvice: {
      de: 'Waehlen Sie die Storm+, wenn Sie eine industrielle Kantenanleimmaschine fuer hohe Stueckzahlen und Dauerbetrieb benoetigen. Mit PUR-Ausstattung ab Werk und bis zu 22 m/min Vorschub bietet sie deutlich mehr Leistung als die FlexEdge. Fuer noch groessere Plattenstaerken und Kantendicken bietet die TopEdge weitere Reserven.',
      en: 'Choose the Storm+ if you need an industrial edgebanding machine for high volumes and continuous operation. With factory PUR equipment and up to 22 m/min feed speed, it offers significantly more performance than the FlexEdge. For even larger board thicknesses and edge sizes, the TopEdge provides additional reserves.',
      cz: 'Zvolte Storm+, pokud potrebujete prumyslovou olepovacku hran pro vysoke objemy a nepretrzity provoz. S PUR vybavenim z vyroby a rychlosti posuvu az 22 m/min nabizi vyrazne vyssi vykon nez FlexEdge. Pro jeste vetsi tlousky desek a hran nabizi TopEdge dalsi rezervy.',
    },

    faq: [
      {
        question: {
          de: 'Kann die Storm+ PUR-Klebstoff verarbeiten?',
          en: 'Can the Storm+ process PUR adhesive?',
          cz: 'Muze Storm+ zpracovavat PUR lepidlo?',
        },
        answer: {
          de: 'Ja, die Storm+ ist ab Werk mit dem CombiMelt-PUR-System ausgestattet. Im Gegensatz zu den Einstiegsmodellen ist PUR bei der Storm+ keine kostenpflichtige Option, sondern gehoert zur Serienausstattung.',
          en: 'Yes, the Storm+ comes factory-equipped with the CombiMelt PUR system. Unlike the entry-level models, PUR is not a paid option on the Storm+ but is included as standard equipment.',
          cz: 'Ano, Storm+ je z vyroby vybavena systemem CombiMelt PUR. Na rozdil od vstupnich modelu neni PUR u Storm+ priplatkovou volbou, ale soucasti standardniho vybaveni.',
        },
      },
      {
        question: {
          de: 'Wie schnell ist die Storm+ im Vergleich zur Tornado+?',
          en: 'How fast is the Storm+ compared to the Tornado+?',
          cz: 'Jak rychla je Storm+ ve srovnani s Tornado+?',
        },
        answer: {
          de: 'Die Storm+ erreicht bis zu 22 m/min Vorschub gegenueber maximal 18 m/min bei der Tornado+. Das bedeutet ca. 22% mehr Durchsatz bei gleicher Bedieneranzahl.',
          en: 'The Storm+ reaches up to 22 m/min feed speed compared to a maximum of 18 m/min on the Tornado+. This means approximately 22% more throughput with the same number of operators.',
          cz: 'Storm+ dosahuje rychlosti posuvu az 22 m/min oproti maximalnich 18 m/min u Tornado+. To znamena priblizne o 22 % vyssi propustnost se stejnym poctem operatoru.',
        },
      },
      {
        question: {
          de: 'Welches Rueckfuehrsystem passt zur Storm+?',
          en: 'Which return system fits the Storm+?',
          cz: 'Jaky vratny system se hodi ke Storm+?',
        },
        answer: {
          de: 'Fuer die Storm+ empfehlen wir das TRANSlift (vertikale Rueckfuehrung, platzsparend) oder das TRANSedge (speziell fuer Kantenanleimlinien mit hoher Taktrate). Beide Systeme ermoeglichen den vollautomatischen Betrieb.',
          en: 'For the Storm+, we recommend the TRANSlift (vertical return, space-saving) or the TRANSedge (specifically designed for edgebanding lines with high cycle rates). Both systems enable fully automatic operation.',
          cz: 'Pro Storm+ doporucujeme TRANSlift (vertikalni vraceni, prostorove usporne) nebo TRANSedge (specialne navrzeny pro olepovaci linky s vysokou taktovaci frekvenci). Oba systemy umoznuji plne automaticky provoz.',
        },
      },
      {
        question: {
          de: 'Ist die Storm+ fuer den Dreischichtbetrieb geeignet?',
          en: 'Is the Storm+ suitable for three-shift operation?',
          cz: 'Je Storm+ vhodna pro trismenni provoz?',
        },
        answer: {
          de: 'Ja, die Storm+ ist fuer den industriellen Dauerbetrieb einschliesslich Dreischichtbetrieb konstruiert. Schwere Gusskoerper und praezisionsgeschliffene Fuehrungen garantieren auch unter Dauerbelastung gleichbleibende Qualitaet.',
          en: 'Yes, the Storm+ is built for continuous industrial operation including three-shift production. Heavy cast bodies and precision-ground guides guarantee consistent quality even under constant load.',
          cz: 'Ano, Storm+ je konstruovana pro prumyslovy nepretrzity provoz vcetne trismenneho provozu. Tezke litinove tela a precizne brusene vedeni zaruci stale stejnou kvalitu i pri trvale zatezi.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  strongedge                                                         */
  /* ------------------------------------------------------------------ */
  'strongedge': {
    longDescription: {
      de: `Die OTT StrongEdge ist die einzige Kantenanleimmaschine im OTT-Programm, die Kantenstaerken bis 25 mm verarbeiten kann. Mit einer Baulaenge von 8,6 Metern und Vorschubgeschwindigkeiten von 12 bis 20 m/min ist sie speziell fuer die professionelle Verarbeitung schwerer und dicker Kanten konzipiert, wie sie im Massivholzmoebelbau, bei Tuer- und Fensterproduktion sowie im hochwertigen Innenausbau benoetigt werden.

Die StrongEdge ist mit schweren Fraesaggregaten ausgestattet, die fuer die Bearbeitung dicker Massivholzkanten optimiert sind. Das CombiMelt-PUR-System gehoert zur Serienausstattung und sorgt fuer wasserfeste, hochbelastbare Leimfugen. Druckzone, Kappgeraet, Ziehklinge und Eckenrunden runden das Ausstattungspaket ab. Die verstaerkte Bauweise der Fraes- und Bearbeitungsaggregate stellt sicher, dass auch harte Holzarten wie Eiche, Buche oder Nussbaum sauber und praezise bearbeitet werden.

Fuer Moebelhersteller, die neben Standard-ABS-Kanten auch Massivholzkanten und Echtholzprofile verarbeiten, bietet die StrongEdge eine einzigartige Vielseitigkeit. In Kombination mit TRANSlift- oder TRANSedge-Rueckfuehrsystemen laesst sich eine leistungsfaehige Produktionslinie aufbauen. Asamer ist autorisierter OTT-Haendler fuer CZ, SK und HU und berart Sie gerne zur optimalen Konfiguration der StrongEdge fuer Ihre spezifischen Anforderungen in der Massivholz- und Tuerenfertigung.`,

      en: `The OTT StrongEdge is the only edgebanding machine in the OTT range capable of processing edge thicknesses up to 25 mm. At 8.6 metres in length with feed speeds of 12 to 20 m/min, it is specifically designed for professional processing of heavy and thick edges as required in solid wood furniture manufacturing, door and window production, and high-end interior construction.

The StrongEdge is equipped with heavy-duty milling units optimized for processing thick solid wood edges. The CombiMelt PUR system is included as standard equipment, providing waterproof, high-load glue joints. Pressure zone, trimming unit, scraper blade and corner rounding complete the equipment package. The reinforced construction of the milling and processing units ensures that even hard wood species such as oak, beech or walnut are processed cleanly and precisely.

For furniture manufacturers who process solid wood edges and real wood profiles in addition to standard ABS edges, the StrongEdge offers unique versatility. Combined with TRANSlift or TRANSedge return systems, a powerful production line can be established. Asamer is the authorized OTT dealer for CZ, SK and HU and is happy to advise you on the optimal StrongEdge configuration for your specific requirements in solid wood and door manufacturing.`,

      cz: `OTT StrongEdge je jedina olepovacka hran v nabidce OTT schopna zpracovavat hrany o tlousce az 25 mm. S delkou 8,6 metru a rychlostmi posuvu 12 az 20 m/min je specialne navrzena pro profesionalni zpracovani tezskych a tlustych hran, jak jsou vyzadovany pri vyrobe nabytku z masivu, dvereni a okenne vyrobe a ve vysoko kvalitnim interierovem stavebnistvi.

StrongEdge je vybavena tezkymi frezovacimi agregaty optimalizovanymi pro zpracovani tlustych masivnich drevenych hran. System CombiMelt PUR je soucasti standardni vybavy a zajisuji vodetesne, vysoce zatizitelne lepene spoje. Tlakova zona, oriznute zarizeni, skrabka a zaoblovani rohu doplnuji vybaveni. Zesiena konstrukce frezovacich a obrabecich agregatu zajisuji, ze i tvrde dreviny jako dub, buk nebo orech jsou zpracovany ciste a precizne.

Pro vyrobce nabytku, kteri krome standardnich ABS hran zpracovavaji take masivni drevene hrany a profily z praveho dreva, nabizi StrongEdge jedinecnou vsestrannost. V kombinaci s vratnymi systemy TRANSlift nebo TRANSedge lze vybudovat vykonnou vyrobni linku. Asamer je autorizovany prodejce OTT pro CZ, SK a HU a rad vam poradi s optimalni konfiguraci StrongEdge pro vase specificke pozadavky ve vyrobe z masivu a dverich.`,
    },

    applicationSections: [
      {
        heading: {
          de: 'Massivholzmoebel und Echtholzkanten',
          en: 'Solid wood furniture and real wood edges',
          cz: 'Nabytek z masivu a hrany z praveho dreva',
        },
        body: {
          de: 'Die StrongEdge verarbeitet Massivholzkanten bis 25 mm Staerke und ist damit die einzige OTT-Maschine fuer schwere Echtholzprofile. Ob Eiche, Buche, Nussbaum oder Ahorn - die schweren Fraesaggregate und die verstaerkte Bauweise sorgen fuer perfekte Ergebnisse auch bei harten Holzarten.',
          en: 'The StrongEdge processes solid wood edges up to 25 mm thick, making it the only OTT machine for heavy real wood profiles. Whether oak, beech, walnut or maple, the heavy-duty milling units and reinforced construction deliver perfect results even with hard wood species.',
          cz: 'StrongEdge zpracovava masivni drevene hrany do tlousky 25 mm a je tak jediny stroj OTT pro tezke profily z praveho dreva. At uz dub, buk, orech nebo javor - tezke frezovaci agregaty a zesiena konstrukce zajisuji perfektni vysledky i u tvrdych drevin.',
        },
      },
      {
        heading: {
          de: 'Tuer- und Fensterfertigung',
          en: 'Door and window manufacturing',
          cz: 'Vyroba dveri a oken',
        },
        body: {
          de: 'Im Tuer- und Fensterbau werden haeufig dicke Kanten und Profile benoetigt. Die StrongEdge bietet mit ihrer Verarbeitungskapazitaet bis 25 mm Kantenstaerke die noetige Reserve fuer diese Anwendungen. In Kombination mit der DoorEdition-Spezialmaschine deckt OTT den gesamten Bereich der Tuerenfertigung ab.',
          en: 'Door and window manufacturing frequently requires thick edges and profiles. The StrongEdge, with its processing capacity up to 25 mm edge thickness, provides the necessary reserve for these applications. Combined with the DoorEdition special machine, OTT covers the entire range of door manufacturing.',
          cz: 'Vyroba dveri a oken casto vyzaduje tluste hrany a profily. StrongEdge se svou kapacitou zpracovani az 25 mm tlousky hrany poskytuje potrebnou rezervu pro tyto aplikace. V kombinaci se specialnim strojem DoorEdition pokryva OTT cely rozsah vyroby dveri.',
        },
      },
    ],

    buyingAdvice: {
      de: 'Die StrongEdge ist die richtige Wahl, wenn Sie regelmaessig Massivholzkanten oder dicke Kanten ueber 15 mm verarbeiten. Kein anderes OTT-Modell bietet diese Kapazitaet. Wenn Sie hauptsaechlich duenne ABS- und PVC-Kanten verarbeiten, ist die Storm+ oder FlexEdge die wirtschaftlichere Option.',
      en: 'The StrongEdge is the right choice if you regularly process solid wood edges or thick edges above 15 mm. No other OTT model offers this capacity. If you mainly process thin ABS and PVC edges, the Storm+ or FlexEdge is the more economical option.',
      cz: 'StrongEdge je spravna volba, pokud pravidelne zpracovavate masivni drevene hrany nebo tluste hrany nad 15 mm. Zadny jiny model OTT tuto kapacitu nenabizi. Pokud zpracovavate predevsim tenke ABS a PVC hrany, je Storm+ nebo FlexEdge ekonomictejsi moznosti.',
    },

    faq: [
      {
        question: {
          de: 'Welche maximale Kantenstaerke verarbeitet die StrongEdge?',
          en: 'What is the maximum edge thickness the StrongEdge can process?',
          cz: 'Jakou maximalni tlousku hran zpracuje StrongEdge?',
        },
        answer: {
          de: 'Die StrongEdge verarbeitet Kantenstaerken bis 25 mm. Sie ist damit die einzige OTT-Kantenanleimmaschine fuer schwere Massivholzkanten und Echtholzprofile.',
          en: 'The StrongEdge processes edge thicknesses up to 25 mm. This makes it the only OTT edgebanding machine for heavy solid wood edges and real wood profiles.',
          cz: 'StrongEdge zpracovava hrany do tlousky 25 mm. Je tak jedinou olepovackou hran OTT pro tezke masivni drevene hrany a profily z praveho dreva.',
        },
      },
      {
        question: {
          de: 'Kann die StrongEdge auch duenne Kanten verarbeiten?',
          en: 'Can the StrongEdge also process thin edges?',
          cz: 'Muze StrongEdge zpracovavat i tenke hrany?',
        },
        answer: {
          de: 'Ja, die StrongEdge verarbeitet Kantenstaerken ab 0,3 mm. Sie ist damit sowohl fuer duenne ABS- und PVC-Kanten als auch fuer dicke Massivholzkanten einsetzbar und bietet maximale Vielseitigkeit.',
          en: 'Yes, the StrongEdge processes edge thicknesses from 0.3 mm. It is therefore suitable for both thin ABS and PVC edges as well as thick solid wood edges, offering maximum versatility.',
          cz: 'Ano, StrongEdge zpracovava hrany od tlousky 0,3 mm. Je proto vhodna jak pro tenke ABS a PVC hrany, tak pro tluste masivni drevene hrany a nabizi tak maximalni vsestrannost.',
        },
      },
      {
        question: {
          de: 'Ist die StrongEdge fuer die Moebelfertigung mit Eiche geeignet?',
          en: 'Is the StrongEdge suitable for furniture production with oak?',
          cz: 'Je StrongEdge vhodna pro vyrobu nabytku z dubu?',
        },
        answer: {
          de: 'Ja, die schweren Fraesaggregate der StrongEdge sind speziell fuer die Verarbeitung harter Holzarten wie Eiche, Buche und Nussbaum ausgelegt. Die verstaerkte Bauweise gewaehrleistet saubere Fraesbilder auch bei harten Hoelzern.',
          en: 'Yes, the heavy-duty milling units of the StrongEdge are specifically designed for processing hard wood species such as oak, beech and walnut. The reinforced construction ensures clean milling results even with hard woods.',
          cz: 'Ano, tezke frezovaci agregaty StrongEdge jsou specialne navrzeny pro zpracovani tvrdych drevin jako dub, buk a orech. Zesiena konstrukce zajisuji cisty obraz frezovani i u tvrdych drevin.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  topedge                                                            */
  /* ------------------------------------------------------------------ */
  'topedge': {
    longDescription: {
      de: `Die OTT TopEdge ist das Flaggschiff der OTT-Kantenanleimmaschinen und repraesentiert die hoechste Leistungsstufe fuer die industrielle Moebelfertigung. Erhaeltlich in zwei Varianten - S (9,2 m) und L (10,2 m) - bietet sie maximale Flexibilitaet und Praezision. Die S-Variante verarbeitet Plattenstaerken bis 60 mm und Kantenstaerken bis 20 mm, waehrend die L-Variante sogar Platten bis 80 mm und Kanten bis 25 mm bewaeltigt.

Mit Vorschubgeschwindigkeiten von 12 bis 22 m/min und einer umfangreichen Serienausstattung ist die TopEdge fuer den industriellen Linienbetrieb konzipiert. CombiMelt PUR, Beckhoff-Steuerung, Fraesaggregat, Kappgeraet, Ziehklinge, Profilziehklinge, Eckenrunden AKF und Druckzone gehoeren zur Standardausstattung. Die Beckhoff-Steuerung ermoeglicht wie bei der FlexEdge die vollstaendige Industrie-4.0-Integration.

Die TopEdge richtet sich an grosse Moebelhersteller, Kuechenbauer und Industriebetriebe, die hoechste Ansprueche an Kantenqualitaet, Durchsatz und Zuverlaessigkeit stellen. Die L-Variante mit 80 mm Plattenstaerke ist einzigartig im OTT-Programm und bedient Nischen wie schwere Arbeitsplatten, Tresenbau und Laboreinrichtungen. Asamer berart als autorisierter OTT-Haendler fuer CZ, SK und HU zu allen Konfigurationsmoeglichkeiten der TopEdge und unterstuetzt bei Planung, Installation und Inbetriebnahme Ihrer Produktionslinie.`,

      en: `The OTT TopEdge is the flagship of the OTT edgebanding machines and represents the highest performance tier for industrial furniture production. Available in two variants - S (9.2 m) and L (10.2 m) - it offers maximum flexibility and precision. The S variant processes board thicknesses up to 60 mm and edge thicknesses up to 20 mm, while the L variant handles boards up to 80 mm and edges up to 25 mm.

With feed speeds of 12 to 22 m/min and comprehensive standard equipment, the TopEdge is designed for industrial line operation. CombiMelt PUR, Beckhoff control, milling unit, trimming unit, scraper blade, profile scraper blade, corner rounding AKF and pressure zone are all included as standard. The Beckhoff control enables full Industry 4.0 integration as with the FlexEdge.

The TopEdge is aimed at large furniture manufacturers, kitchen builders and industrial operations that demand the highest standards of edge quality, throughput and reliability. The L variant with 80 mm board thickness capacity is unique in the OTT range and serves niches such as heavy worktops, counter construction and laboratory furnishings. As the authorized OTT dealer for CZ, SK and HU, Asamer advises on all TopEdge configuration options and supports planning, installation and commissioning of your production line.`,

      cz: `OTT TopEdge je vlajkova lod olepovacek hran OTT a predstavuje nejvyssi vykonnostni stupen pro prumyslovou vyrobu nabytku. K dispozici ve dvou variantach - S (9,2 m) a L (10,2 m) - nabizi maximalni flexibilitu a preciznost. Varianta S zpracovava desky do tlousky 60 mm a hrany do 20 mm, zatimco varianta L zvlada desky az 80 mm a hrany az 25 mm.

S rychlostmi posuvu 12 az 22 m/min a rozsahlym standardnim vybavenim je TopEdge navrzena pro prumyslovy linkovy provoz. CombiMelt PUR, rizeni Beckhoff, frezovaci agregat, oriznute zarizeni, skrabka, profilova skrabka, zaoblovani rohu AKF a tlakova zona jsou vsechny soucasti standardni vybavy. Rizeni Beckhoff umoznuje plnou integraci Prumyslu 4.0 stejne jako u FlexEdge.

TopEdge je urcena pro velke vyrobce nabytku, vyrobce kuchyni a prumyslove provozy kladouci nejvyssi naroky na kvalitu hran, propustnost a spolehlivost. Varianta L s kapacitou tlousky desek 80 mm je v nabidce OTT jednicecna a obsluhuje niky jako tezke pracovni desky, stavbu baru a laboratorni zarizeni. Asamer jako autorizovany prodejce OTT pro CZ, SK a HU radi poradi se vsemi moznostmi konfigurace TopEdge a podpori planovani, instalaci a uvedeni vasi vyrobni linky do provozu.`,
    },

    applicationSections: [
      {
        heading: {
          de: 'Industrieller Linienbetrieb mit maximaler Praezision',
          en: 'Industrial line operation with maximum precision',
          cz: 'Prumyslovy linkovy provoz s maximalni preciznosti',
        },
        body: {
          de: 'Die TopEdge ist das Herzstuck industrieller Kantenanleimlinien. Mit bis zu 22 m/min Vorschub, CombiMelt PUR und Beckhoff-Steuerung liefert sie Kantenqualitaet auf hoechstem Niveau im Dauerbetrieb. Die Profilziehklinge ermoeglicht auch die Bearbeitung profilierter Kanten und Postforming-Kanten.',
          en: 'The TopEdge is the centrepiece of industrial edgebanding lines. With up to 22 m/min feed speed, CombiMelt PUR and Beckhoff control, it delivers edge quality at the highest level in continuous operation. The profile scraper blade also enables processing of profiled edges and postforming edges.',
          cz: 'TopEdge je srdcem prumyslovych olepovacich linek. S rychlosti posuvu az 22 m/min, systemem CombiMelt PUR a rizenim Beckhoff dodava kvalitu hran na nejvyssi urovni v nepretrzitem provozu. Profilova skrabka umoznuje take zpracovani profilovanych hran a postformingvych hran.',
        },
      },
      {
        heading: {
          de: 'L-Variante fuer schwere Platten bis 80 mm',
          en: 'L variant for heavy boards up to 80 mm',
          cz: 'Varianta L pro tezke desky do 80 mm',
        },
        body: {
          de: 'Die TopEdge L ist die einzige OTT-Maschine, die Plattenstaerken bis 80 mm verarbeiten kann. Das macht sie zur idealen Loesung fuer die Fertigung schwerer Arbeitsplatten, Ladentheken, Labormoebel und anderer Produkte aus dicken Traegermaterialien. Mit Kantenstaerken bis 25 mm deckt sie auch schwere Massivholzkanten ab.',
          en: 'The TopEdge L is the only OTT machine that can process board thicknesses up to 80 mm. This makes it the ideal solution for manufacturing heavy worktops, shop counters, laboratory furniture and other products from thick substrate materials. With edge thicknesses up to 25 mm, it also covers heavy solid wood edges.',
          cz: 'TopEdge L je jediny stroj OTT schopny zpracovavat desky do tlousky 80 mm. To z ni cini idealnim resenim pro vyrobu tezkych pracovnich desek, obchodnich pultu, laboratornicyh nabytku a dalsich produktu z tlustych nosnych materialu. S tlouskou hran az 25 mm pokryva i tezke masivni drevene hrany.',
        },
      },
      {
        heading: {
          de: 'Zukunftssichere Investition mit Industrie 4.0',
          en: 'Future-proof investment with Industry 4.0',
          cz: 'Perspektivni investice s Prumyslem 4.0',
        },
        body: {
          de: 'Die serienmaeassige Beckhoff-Steuerung macht die TopEdge zur zukunftssichersten Kantenanleimmaschine im OTT-Portfolio. Ueber OPC-UA koennen Produktionsdaten in Echtzeit an MES- und ERP-Systeme uebertragen werden. Rezeptverwaltung, vorausschauende Wartung und Ferndiagnose sind standardmaeassig moeglich.',
          en: 'The standard Beckhoff control makes the TopEdge the most future-proof edgebanding machine in the OTT portfolio. Via OPC-UA, production data can be transmitted in real time to MES and ERP systems. Recipe management, predictive maintenance and remote diagnostics are available as standard.',
          cz: 'Standardni rizeni Beckhoff cini TopEdge nejperspektivnejsi olepovackou hran v portfoliu OTT. Prostrednictvim OPC-UA lze vyrobni data prenastet v realnem case do systemu MES a ERP. Sprava receptur, prediktivni udrzba a vzdala diagnostika jsou standardne k dispozici.',
        },
      },
    ],

    buyingAdvice: {
      de: 'Die TopEdge ist die ultimative Wahl fuer industrielle Hochleistungsanwendungen. Waehlen Sie die S-Variante fuer Standard-Plattenstaerken bis 60 mm oder die L-Variante fuer schwere Anwendungen bis 80 mm. Die Investition lohnt sich fuer Betriebe mit hohem Durchsatzbedarf und hoechsten Qualitaetsanspruechen.',
      en: 'The TopEdge is the ultimate choice for industrial high-performance applications. Choose the S variant for standard board thicknesses up to 60 mm or the L variant for heavy applications up to 80 mm. The investment pays off for operations with high throughput requirements and the highest quality demands.',
      cz: 'TopEdge je ultimativni volba pro prumyslove vysokovykonne aplikace. Zvolte variantu S pro standardni tlousky desek do 60 mm nebo variantu L pro tezke aplikace do 80 mm. Investice se vyplati pro provozy s vysokymi naroky na propustnost a nejvyssi pozadavky na kvalitu.',
    },

    faq: [
      {
        question: {
          de: 'Was ist der Unterschied zwischen TopEdge S und TopEdge L?',
          en: 'What is the difference between TopEdge S and TopEdge L?',
          cz: 'Jaky je rozdil mezi TopEdge S a TopEdge L?',
        },
        answer: {
          de: 'Die TopEdge S (9,2 m) verarbeitet Platten bis 60 mm und Kanten bis 20 mm. Die TopEdge L (10,2 m) erweitert das Spektrum auf Platten bis 80 mm und Kanten bis 25 mm. Die L-Variante ist fuer besonders schwere Anwendungen wie Arbeitsplatten und Labormoebel gedacht.',
          en: 'The TopEdge S (9.2 m) processes boards up to 60 mm and edges up to 20 mm. The TopEdge L (10.2 m) extends the range to boards up to 80 mm and edges up to 25 mm. The L variant is intended for particularly heavy applications such as worktops and laboratory furniture.',
          cz: 'TopEdge S (9,2 m) zpracovava desky do 60 mm a hrany do 20 mm. TopEdge L (10,2 m) rozsiruje rozsah na desky do 80 mm a hrany do 25 mm. Varianta L je urcena pro obzvlaste tezke aplikace jako pracovni desky a laboratorni nabytek.',
        },
      },
      {
        question: {
          de: 'Verfuegt die TopEdge ueber eine Beckhoff-Steuerung?',
          en: 'Does the TopEdge have a Beckhoff control?',
          cz: 'Ma TopEdge rizeni Beckhoff?',
        },
        answer: {
          de: 'Ja, die TopEdge ist serienmaeassig mit der Beckhoff-Steuerung und OPC-UA-Schnittstelle ausgestattet. Das ermoeglicht vollstaendige Industrie-4.0-Integration, Fernwartung und Rezeptverwaltung.',
          en: 'Yes, the TopEdge comes standard with the Beckhoff control and OPC-UA interface. This enables full Industry 4.0 integration, remote maintenance and recipe management.',
          cz: 'Ano, TopEdge je standardne vybavena rizenim Beckhoff a rozhranim OPC-UA. To umoznuje plnou integraci Prumyslu 4.0, vzdalenu udrzbu a spravu receptur.',
        },
      },
      {
        question: {
          de: 'Kann die TopEdge Postforming-Kanten verarbeiten?',
          en: 'Can the TopEdge process postforming edges?',
          cz: 'Muze TopEdge zpracovavat postformingove hrany?',
        },
        answer: {
          de: 'Ja, die TopEdge ist mit einer Profilziehklinge ausgestattet, die auch die Bearbeitung profilierter und Postforming-Kanten ermoeglicht. Das macht sie zur vielseitigsten Flaggschiff-Maschine im OTT-Programm.',
          en: 'Yes, the TopEdge is equipped with a profile scraper blade that also enables processing of profiled and postforming edges. This makes it the most versatile flagship machine in the OTT range.',
          cz: 'Ano, TopEdge je vybavena profilovou skrabkou, ktera umoznuje take zpracovani profilovanych a postformingovych hran. To z ni cini nejvsestrannejsi vlajkovy stroj v nabidce OTT.',
        },
      },
      {
        question: {
          de: 'Wie gross muss die Produktionshalle fuer eine TopEdge sein?',
          en: 'How large does the production hall need to be for a TopEdge?',
          cz: 'Jak velka musi byt vyrobni hala pro TopEdge?',
        },
        answer: {
          de: 'Die TopEdge S benoetigt mindestens 9,2 m Laenge, die L-Variante 10,2 m. In Kombination mit einem Rueckfuehrsystem sollten Sie mindestens die doppelte Laenge plus Nebenflaechen einplanen. Asamer berart Sie gerne bei der Layoutplanung.',
          en: 'The TopEdge S requires at least 9.2 m in length, the L variant 10.2 m. Combined with a return system, you should plan for at least double the length plus ancillary areas. Asamer is happy to advise you on layout planning.',
          cz: 'TopEdge S vyzaduje delku alespon 9,2 m, varianta L 10,2 m. V kombinaci s vratnym systemem byste meli pocitat alespon s dvojnasobnou delkou plus pomocnymi plochami. Asamer vam rad poradi s planovanim dispozice.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  door-edition                                                       */
  /* ------------------------------------------------------------------ */
  'door-edition': {
    longDescription: {
      de: `Die OTT DoorEdition ist eine massgeschneiderte Kantenanleimmaschine fuer die spezialisierte Tuerenproduktion. Ab 8 Metern Baulaenge vereint sie Tuerfalt- und Umleimtechnik in einer einzigen Maschine und deckt damit die speziellen Anforderungen der Tuerenfertigung ab, die Standard-Kantenanleimmaschinen nicht erfuellen koennen. Die DoorEdition wird individuell nach den Anforderungen des Kunden konfiguriert.

Die Maschine verfuegt ueber eine spezielle Faltleimtechnik, bei der die Kante um die Schmalseite der Tuer gefaltet und verleimt wird. Das Ergebnis ist eine nahtlose, hochbelastbare Kantenverbindung, die den Anforderungen der Tuerenfertigung an Stabiliaet und Langlebigkeit gerecht wird. Das CombiMelt-PUR-System sorgt fuer wasserfeste Leimfugen, die auch bei Feuchtraumtueren und Aussentueren Bestand haben.

Im Markt fuer Tueren-Kantenanleimmaschinen gibt es in dieser Preisklasse kein vergleichbares Produkt von HOMAG oder anderen Herstellern. Damit besetzt die DoorEdition eine einzigartige Nische fuer Tuerenhersteller, die eine wirtschaftliche Alternative zu hochpreisigen Spezialmaschinen suchen. Asamer ist autorisierter OTT-Haendler fuer Tschechien, die Slowakei und Ungarn und berart Sie ausfuehrlich zur individuellen Konfiguration der DoorEdition. Von der Bedarfsanalyse ueber die Maschinenplanung bis zur Inbetriebnahme begleiten wir Sie durch den gesamten Prozess.`,

      en: `The OTT DoorEdition is a custom-built edgebanding machine designed for specialized door production. From 8 metres in length, it combines door fold and edge wrapping technology in a single machine, covering the specific requirements of door manufacturing that standard edgebanding machines cannot meet. The DoorEdition is individually configured according to customer requirements.

The machine features a specialized fold-gluing technology where the edge is folded around the narrow side of the door and bonded. The result is a seamless, highly durable edge joint that meets the door manufacturing requirements for stability and longevity. The CombiMelt PUR system ensures waterproof glue joints that hold up even on wet-room doors and exterior doors.

In the door edgebanding machine market, there is no comparable product from HOMAG or other manufacturers at this price point. This means the DoorEdition fills a unique niche for door manufacturers seeking an economical alternative to premium special-purpose machines. Asamer is the authorized OTT dealer for the Czech Republic, Slovakia and Hungary and provides comprehensive advice on individual DoorEdition configurations. From requirements analysis through machine planning to commissioning, we guide you through the entire process.`,

      cz: `OTT DoorEdition je zakazkove vyrobeny olepovaci stroj na hrany navrzeny pro specializovanou vyrobu dveri. Od delky 8 metru kombinuje technologii skladani dveri a obalovani hran v jedinem stroji a pokryva specificke pozadavky vyroby dveri, ktere standardni olepovacky hran nesplnuji. DoorEdition je individualne konfigurovana podle pozadavku zakaznika.

Stroj disponuje specializovanou technologii skladaciho lepeni, pri ktere je hrana slozena kolem uzke strany dveri a prilepena. Vysledkem je bezesvy, vysoce odolny hranovy spoj splnujici pozadavky vyroby dveri na stabilitu a zivotnost. System CombiMelt PUR zajisuji vodetesne lepene spoje, ktere odolaji i u dveri do vlhkych prostor a extierovych dveri.

Na trhu olepovacich stroju na hrany pro dvere neexistuje v teto cenove kategorii srovnatelny produkt od HOMAG ani jinych vyrobcu. DoorEdition tak vyplnuje jedinecnou niku pro vyrobce dveri hledajici ekonomickou alternativu ke vysocenovym specialnim strojum. Asamer je autorizovany prodejce OTT pro Ceskou republiku, Slovensko a Madarsko a poskytuji podrobne poradenstvi k individualni konfiguraci DoorEdition. Od analyzy potreb pres planovani stroje az po uvedeni do provozu vas provazime celym procesem.`,
    },

    applicationSections: [
      {
        heading: {
          de: 'Spezialisierte Tuerenfertigung',
          en: 'Specialized door manufacturing',
          cz: 'Specializovana vyroba dveri',
        },
        body: {
          de: 'Die DoorEdition ist speziell fuer die Anforderungen der Tuerenfertigung konzipiert. Die Faltleimtechnik erzeugt nahtlose Kantenverbindungen, die den mechanischen Belastungen von Tueren standhalten. Von Zimmerturen bis zu Schallschutztueren bietet die DoorEdition eine Loesung fuer verschiedene Tuertypen.',
          en: 'The DoorEdition is specifically designed for the requirements of door manufacturing. The fold-gluing technology creates seamless edge joints that withstand the mechanical stresses of doors. From interior doors to soundproofing doors, the DoorEdition offers solutions for various door types.',
          cz: 'DoorEdition je specialne navrzena pro pozadavky vyroby dveri. Technologie skladaciho lepeni vytvari bezesve hranove spoje odolne mechanickemu namahani dveri. Od interierovych dveri po protihlukove dvere nabizi DoorEdition reseni pro ruzne typy dveri.',
        },
      },
      {
        heading: {
          de: 'Wirtschaftliche Alternative zu Hochpreismaschinen',
          en: 'Economical alternative to premium machines',
          cz: 'Ekonomicka alternativa ke vysocenovym strojum',
        },
        body: {
          de: 'Im Markt fuer Tueren-Kantenanleimmaschinen bietet die DoorEdition eine einzigartige Preisposition. Waehrend HOMAG und andere Hersteller in dieser Nische deutlich teurere Loesungen anbieten, ermoeglicht die DoorEdition den Einstieg in die maschinelle Tuerenfertigung zu einem attraktiven Investitionsvolumen.',
          en: 'In the door edgebanding machine market, the DoorEdition occupies a unique price position. While HOMAG and other manufacturers offer significantly more expensive solutions in this niche, the DoorEdition enables entry into machine-based door production at an attractive investment level.',
          cz: 'Na trhu olepovacich stroju na hrany pro dvere zaujima DoorEdition jedinecnou cenovou pozici. Zatimco HOMAG a dalsi vyrobci nabizeji v teto nice vyrazne drazsi reseni, DoorEdition umoznuje vstup do strojni vyroby dveri pri atraktivnim objemu investice.',
        },
      },
    ],

    buyingAdvice: {
      de: 'Die DoorEdition ist die einzige Wahl im OTT-Programm fuer spezialisierte Tuerfalt- und Umleimtechnik. Wenn Sie hauptsaechlich Tueren produzieren und eine wirtschaftliche Maschine suchen, gibt es in dieser Preisklasse keine Alternative. Kontaktieren Sie Asamer fuer eine individuelle Beratung.',
      en: 'The DoorEdition is the only choice in the OTT range for specialized door fold and edge wrapping technology. If you primarily produce doors and need an economical machine, there is no alternative at this price point. Contact Asamer for individual consultation.',
      cz: 'DoorEdition je jedinou volbou v nabidce OTT pro specializovanou technologii skladani a obalovani hran dveri. Pokud prevazne vyrabite dvere a hledate ekonomicky stroj, v teto cenove kategorii neexistuje alternativa. Kontaktujte Asamer pro individualni poradenstvi.',
    },

    faq: [
      {
        question: {
          de: 'Was unterscheidet die DoorEdition von einer Standard-Kantenanleimmaschine?',
          en: 'What sets the DoorEdition apart from a standard edgebanding machine?',
          cz: 'Cim se DoorEdition lisi od standardni olepovacky hran?',
        },
        answer: {
          de: 'Die DoorEdition verfuegt ueber eine spezielle Tuerfalt- und Umleimtechnik, die Kanten um die Schmalseite der Tuer faltet und verleimt. Dieses Verfahren ist mit Standard-Kantenanleimmaschinen nicht moeglich.',
          en: 'The DoorEdition features specialized door fold and edge wrapping technology that folds edges around the narrow side of the door and bonds them. This process is not possible with standard edgebanding machines.',
          cz: 'DoorEdition disponuje specializovanou technologii skladani a obalovani hran dveri, ktera sklada hrany kolem uzke strany dveri a lepi je. Tento proces neni mozny se standardnimi olepovackami hran.',
        },
      },
      {
        question: {
          de: 'Gibt es ein vergleichbares Produkt von HOMAG?',
          en: 'Is there a comparable product from HOMAG?',
          cz: 'Existuje srovnatelny produkt od HOMAG?',
        },
        answer: {
          de: 'Nein, in der Preisklasse der DoorEdition gibt es kein vergleichbares HOMAG-Produkt fuer die Tuerenolepierung. Die DoorEdition besetzt eine einzigartige Marktnische.',
          en: 'No, there is no comparable HOMAG product for door edgebanding at the DoorEdition price point. The DoorEdition occupies a unique market niche.',
          cz: 'Ne, v cenove kategorii DoorEdition neexistuje srovnatelny produkt HOMAG pro olepovani dveri. DoorEdition zaujima jedinecnou trzni niku.',
        },
      },
      {
        question: {
          de: 'Wird die DoorEdition individuell konfiguriert?',
          en: 'Is the DoorEdition individually configured?',
          cz: 'Je DoorEdition individualne konfigurovana?',
        },
        answer: {
          de: 'Ja, jede DoorEdition wird nach den individuellen Anforderungen des Kunden konfiguriert. Asamer berart Sie zur optimalen Ausstattung fuer Ihre Tueren-Produktion und begleitet Sie von der Planung bis zur Inbetriebnahme.',
          en: 'Yes, each DoorEdition is configured according to the individual requirements of the customer. Asamer advises you on the optimal equipment for your door production and guides you from planning to commissioning.',
          cz: 'Ano, kazda DoorEdition je konfigurovana podle individualnich pozadavku zakaznika. Asamer vam poradi s optimalnim vybavenim pro vasi vyrobu dveri a provazi vas od planovani az po uvedeni do provozu.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  combimelt                                                          */
  /* ------------------------------------------------------------------ */
  'combimelt': {
    longDescription: {
      de: `Das OTT CombiMelt ist eine komplette Servicestation fuer die Verarbeitung von EVA- und PUR-Klebstoffen an Kantenanleimmaschinen. Als externes Aufschmelzsystem laesst es sich an alle OTT-Kantenanleimmaschinen anbinden und erweitert deren Faehigkeiten um die Verarbeitung hochwertiger PUR-Schmelzklebstoffe. Die patentierte Top-Driven-Roller-Technologie sorgt fuer einen gleichmaessigen, blasenfreien Leimauftrag.

Das CombiMelt verfuegt ueber zwei separate Behaelter fuer EVA- und PUR-Klebstoff. Ein Schnellwechselsystem ermoeglicht den zuegigen Wechsel zwischen beiden Leimtypen, ohne dass lange Reinigungszeiten anfallen. Der PUR-Behaelter ist hermetisch verschlossen, um den feuchtigkeitshaertenden Klebstoff vor vorzeitiger Aushaeartung zu schuetzen. Die Servicestation erleichtert Reinigung und Wartung erheblich.

PUR-Klebstoff bietet gegenueber EVA entscheidende Vorteile: Die Leimfuge ist wasserbestaendig, hitzebestaendig und nahezu unsichtbar. Das macht PUR zur bevorzugten Wahl im Kuechenbau, bei Feuchtraummoebeln und ueberall dort, wo hoechste Kantenqualitaet gefragt ist. Als autorisierter OTT-Haendler fuer CZ, SK und HU berart Asamer Sie gerne zur Nachruestung des CombiMelt-Systems an Ihrer bestehenden OTT-Kantenanleimmaschine oder zur Integration in eine neue Anlage.`,

      en: `The OTT CombiMelt is a complete service station for processing EVA and PUR adhesives on edgebanding machines. As an external melting system, it can be connected to all OTT edgebanding machines, extending their capabilities to include processing of high-quality PUR hot-melt adhesives. The patented Top-Driven-Roller technology ensures a uniform, bubble-free glue application.

The CombiMelt features two separate containers for EVA and PUR adhesive. A quick-change system enables fast switching between both adhesive types without lengthy cleaning times. The PUR container is hermetically sealed to protect the moisture-curing adhesive from premature hardening. The service station significantly simplifies cleaning and maintenance.

PUR adhesive offers decisive advantages over EVA: the glue joint is water-resistant, heat-resistant and virtually invisible. This makes PUR the preferred choice for kitchen furniture, wet-room cabinetry and anywhere the highest edge quality is required. As the authorized OTT dealer for CZ, SK and HU, Asamer is happy to advise you on retrofitting the CombiMelt system to your existing OTT edgebander or integrating it into a new installation.`,

      cz: `OTT CombiMelt je kompletni servisni stanice pro zpracovani EVA a PUR lepidel na olepovacich strojich na hrany. Jako externi tavici system jej lze pripojit ke vsem olepovackam hran OTT a rozsiruje tak jejich schopnosti o zpracovani vysokokvalitnich PUR tavnych lepidel. Patentovana technologie Top-Driven-Roller zajisuji rovnomerny nanaseni lepidla bez bublin.

CombiMelt disponuje dvema oddelenymi nadobami pro EVA a PUR lepidlo. System rychle vymeny umoznuje svizne prepinani mezi obema typy lepidel bez dlouhych casou cisteni. Nadoba PUR je hermeticky uzavrena, aby chranila vlhkostne tvrdnouci lepidlo pred predcasnym vytvrzenim. Servisni stanice vyrazne zjednodusuje cisteni a udrzbu.

PUR lepidlo nabizi oproti EVA rozhodujici vyhody: lepeny spoj je vodetesny, odolny teplu a prakticky neviditelny. To cini PUR preferovanou volbou pro kuchynsky nabytek, nabytek do vlhkych prostor a vsude tam, kde je vyzadovana nejvyssi kvalita hran. Jako autorizovany prodejce OTT pro CZ, SK a HU vam Asamer rad poradi s dovybavenim systemu CombiMelt na vasi stavajici olepovacce hran OTT nebo s jeho integraci do noveho zarizeni.`,
    },

    applicationSections: [
      {
        heading: {
          de: 'PUR-Nachruestung fuer bestehende OTT-Maschinen',
          en: 'PUR retrofit for existing OTT machines',
          cz: 'Dovybaveni PUR pro stavajici stroje OTT',
        },
        body: {
          de: 'Das CombiMelt laesst sich an alle OTT-Kantenanleimmaschinen nachruesten. Betriebe, die bisher nur mit EVA arbeiten, koennen ihr Leistungsspektrum um PUR-Verklebung erweitern, ohne eine neue Maschine kaufen zu muessen. Die Nachruestung erfolgt durch Asamer vor Ort in Tschechien, der Slowakei und Ungarn.',
          en: 'The CombiMelt can be retrofitted to all OTT edgebanding machines. Operations that have so far only worked with EVA can expand their range of services to include PUR bonding without having to buy a new machine. Retrofitting is carried out by Asamer on-site in the Czech Republic, Slovakia and Hungary.',
          cz: 'CombiMelt lze dovybavit na vsechny olepovacky hran OTT. Provozy, ktere dosud pracovaly pouze s EVA, mohou sve moznosti rozsirit o PUR lepeni, aniz by musely kupovat novy stroj. Dovybaveni provadi Asamer primo na miste v Ceske republice, na Slovensku a v Madarsku.',
        },
      },
      {
        heading: {
          de: 'Wasserfeste Leimfugen fuer Kuechenbau und Feuchtraeume',
          en: 'Waterproof glue joints for kitchen and wet-room applications',
          cz: 'Vodetesne spoje pro kuchyne a vlhke prostory',
        },
        body: {
          de: 'PUR-Klebstoff haertet durch Reaktion mit Luftfeuchtigkeit aus und bildet eine dauerhaft wasserfeste Verbindung. Im Kuechenbau und bei Feuchtraummoebeln ist PUR-Verklebung heute Standard. Das CombiMelt ermoeglicht den schnellen Wechsel zwischen EVA (fuer Standardanwendungen) und PUR (fuer feuchtigkeitsbestaendige Kanten).',
          en: 'PUR adhesive cures by reacting with atmospheric moisture, forming a permanently waterproof bond. In kitchen furniture and wet-room cabinetry, PUR bonding is now standard. The CombiMelt enables fast switching between EVA (for standard applications) and PUR (for moisture-resistant edges).',
          cz: 'PUR lepidlo tvrdne reakci se vzdusnou vlhkosti a vytvari trvale vodetesny spoj. U kuchynskeho nabytku a nabytku do vlhkych prostor je PUR lepeni dnes standardem. CombiMelt umoznuje rychle prepinani mezi EVA (pro standardni aplikace) a PUR (pro vlhkosti odolne hrany).',
        },
      },
    ],

    buyingAdvice: {
      de: 'Das CombiMelt ist die richtige Wahl, wenn Sie Ihre bestehende OTT-Kantenanleimmaschine um PUR-Faehigkeit erweitern moechten, oder wenn Sie eine neue Maschine mit maximalem Klebstoff-Spielraum konfigurieren wollen. Die Servicestation vereinfacht Reinigung und Wartung gegenueber einfachen PUR-Geraeten erheblich.',
      en: 'The CombiMelt is the right choice if you want to add PUR capability to your existing OTT edgebander, or if you are configuring a new machine with maximum adhesive flexibility. The service station significantly simplifies cleaning and maintenance compared to basic PUR units.',
      cz: 'CombiMelt je spravna volba, pokud chcete rozsirit svou stavajici olepovacku hran OTT o schopnost PUR, nebo pokud konfigurujete novy stroj s maximalnim prostorem pro lepidla. Servisni stanice vyrazne zjednodusuje cisteni a udrzbu oproti zakladnim PUR jednotkam.',
    },

    faq: [
      {
        question: {
          de: 'Kann das CombiMelt an jede OTT-Kantenanleimmaschine angeschlossen werden?',
          en: 'Can the CombiMelt be connected to any OTT edgebanding machine?',
          cz: 'Lze CombiMelt pripojit k jakekoli olepovacce hran OTT?',
        },
        answer: {
          de: 'Ja, das CombiMelt ist als externes Aufschmelzsystem fuer alle OTT-Kantenanleimmaschinen konzipiert. Es kann sowohl bei neuen Maschinen mitbestellt als auch an bestehende Maschinen nachgeruestet werden.',
          en: 'Yes, the CombiMelt is designed as an external melting system for all OTT edgebanding machines. It can be ordered with new machines or retrofitted to existing ones.',
          cz: 'Ano, CombiMelt je navrzeny jako externi tavici system pro vsechny olepovacky hran OTT. Lze jej objednat s novymi stroji nebo dovybavit na stavajici.',
        },
      },
      {
        question: {
          de: 'Was ist der Vorteil von PUR gegenueber EVA?',
          en: 'What is the advantage of PUR over EVA?',
          cz: 'Jaka je vyhoda PUR oproti EVA?',
        },
        answer: {
          de: 'PUR-Klebstoff bildet wasserbestaendige, hitzebestaendige und nahezu unsichtbare Leimfugen. Im Gegensatz zu EVA quillt PUR nicht bei Feuchtigkeit auf und bleibt ueber Jahre stabil. PUR ist daher der Standard im Kuechenbau und bei hochwertigen Moebeln.',
          en: 'PUR adhesive forms water-resistant, heat-resistant and virtually invisible glue joints. Unlike EVA, PUR does not swell with moisture and remains stable for years. PUR is therefore the standard in kitchen furniture and high-end cabinetry.',
          cz: 'PUR lepidlo vytvari vodetesne, teplotne odolne a prakticky neviditelne lepene spoje. Na rozdil od EVA PUR pri vlhkosti nenaboba a zustava stabilni po leta. PUR je proto standardem ve vyrobe kuchyni a vysokokvalitniho nabytku.',
        },
      },
      {
        question: {
          de: 'Wie lange dauert der Wechsel zwischen EVA und PUR?',
          en: 'How long does switching between EVA and PUR take?',
          cz: 'Jak dlouho trva prepnuti mezi EVA a PUR?',
        },
        answer: {
          de: 'Dank des Schnellwechselsystems mit zwei getrennten Behaeltern kann der Wechsel zwischen EVA und PUR in wenigen Minuten erfolgen. Aufwendige Reinigung oder Spuelvorgaenge entfallen weitgehend.',
          en: 'Thanks to the quick-change system with two separate containers, switching between EVA and PUR takes only a few minutes. Extensive cleaning or flushing procedures are largely eliminated.',
          cz: 'Diky systemu rychle vymeny se dvema oddelenymi nadobami trva prepnuti mezi EVA a PUR pouze nekolik minut. Narocne cisteni nebo proplachovaci procesy jsou do znacne miry eliminovany.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  bluedge                                                            */
  /* ------------------------------------------------------------------ */
  'bluedge': {
    longDescription: {
      de: `OTT bluEdge featuring HyFuse ist die Nullfugentechnologie von OTT, die Kantenbearbeitung auf ein voellig neues Qualitaetsniveau hebt. Bei diesem Verfahren wird kein herkoemmlicher Klebstoff verwendet. Stattdessen wird die Funktionsschicht der Kante durch eine Lasereinheit thermisch aktiviert und direkt mit der Platte verschmolzen. Das Ergebnis ist eine vollstaendig unsichtbare Fuge zwischen Kante und Platte - die sogenannte Nullfuge oder auch Zero-Gap-Verbindung.

Die bluEdge-Technologie ist als Nachruestoption fuer alle OTT-Kantenanleimmaschinen konzipiert. Ob Pacific+, Tornado+, FlexEdge, Storm+, StrongEdge oder TopEdge - die HyFuse-Lasereinheit kann in jedes Modell integriert werden. Damit koennen Betriebe ihre bestehende Maschine auf das Premium-Segment upgraden, ohne in eine komplett neue Anlage investieren zu muessen.

Nullfugenkanten sind der aktuelle Trend in der Moebelfertigung und werden von Endkunden zunehmend nachgefragt. Die unsichtbare Verbindung zwischen Kante und Platte verleiht Moebeln eine hochwertige Optik, die mit herkoemmlicher Klebetechnik nicht erreichbar ist. Im Gegensatz zu PUR-Fugen, die zwar duenn aber dennoch sichtbar sind, verschmilzt die bluEdge-Verbindung vollstaendig mit der Plattenoberflaeche. Asamer ist autorisierter OTT-Haendler fuer CZ, SK und HU und unterstuetzt Sie bei der Integration der bluEdge-Technologie in Ihre bestehende oder neue Kantenanleimlinie.`,

      en: `OTT bluEdge featuring HyFuse is OTT's zero glue line technology that elevates edgebanding to an entirely new quality level. This process uses no conventional adhesive. Instead, the functional layer of the edge is thermally activated by a laser unit and fused directly to the board. The result is a completely invisible joint between edge and board - the so-called zero joint or zero-gap connection.

The bluEdge technology is designed as a retrofit option for all OTT edgebanding machines. Whether Pacific+, Tornado+, FlexEdge, Storm+, StrongEdge or TopEdge - the HyFuse laser unit can be integrated into any model. This allows operations to upgrade their existing machine to the premium segment without investing in a completely new installation.

Zero glue line edges are the current trend in furniture manufacturing and are increasingly demanded by end customers. The invisible connection between edge and board gives furniture a premium appearance that is not achievable with conventional adhesive technology. Unlike PUR joints, which are thin but still visible, the bluEdge connection merges completely with the board surface. Asamer is the authorized OTT dealer for CZ, SK and HU and supports you in integrating bluEdge technology into your existing or new edgebanding line.`,

      cz: `OTT bluEdge featuring HyFuse je technologie nulove spary od OTT, ktera posouva olepovani hran na zcela novou uroven kvality. Pri tomto postupu se nepouziva zadne konvencni lepidlo. Misto toho je funkcni vrstva hrany termicky aktivovana laserovou jednotkou a primo spojena s deskou. Vysledkem je zcela neviditelna spara mezi hranou a deskou - takzvana nulova spara neboli zero-gap spojeni.

Technologie bluEdge je navrzena jako moznost dovybaveni pro vsechny olepovacky hran OTT. At uz Pacific+, Tornado+, FlexEdge, Storm+, StrongEdge nebo TopEdge - laserovou jednotku HyFuse lze integrovat do kterehokoliv modelu. To umoznuje provozum upgradovat svuj stavajici stroj na premiovy segment, aniz by musely investovat do zcela noveho zarizeni.

Hrany s nulovou sparou jsou aktualni trendem ve vyrobe nabytku a koncovi zakaznici je stale vice vyzaduji. Neviditelne spojeni mezi hranou a deskou dodava nabytku premiovy vzhled, ktery nelze dosahnout konvencni lepici technikou. Na rozdil od PUR spoju, ktere jsou sice tenke, ale stale viditelne, bluEdge spojeni zcela splyva s povrchem desky. Asamer je autorizovany prodejce OTT pro CZ, SK a HU a podpoeuji vas pri integraci technologie bluEdge do vasi stavajici nebo nove olepovaci linky.`,
    },

    applicationSections: [
      {
        heading: {
          de: 'Premium-Moebeloptik mit unsichtbarer Fuge',
          en: 'Premium furniture aesthetics with invisible joint',
          cz: 'Premiovy vzhled nabytku s neviditelnou sparou',
        },
        body: {
          de: 'Die bluEdge-Nullfugentechnologie erzeugt eine vollstaendig unsichtbare Verbindung zwischen Kante und Platte. Kein Klebstofffilm, keine Farbabweichung, keine sichtbare Trennlinie. Das Ergebnis ist ein monolithisches Erscheinungsbild, das besonders bei dunklen Dekoren und Hochglanzflaechen den entscheidenden Qualitaetsunterschied ausmacht.',
          en: 'The bluEdge zero glue line technology creates a completely invisible connection between edge and board. No adhesive film, no colour deviation, no visible separation line. The result is a monolithic appearance that makes the critical quality difference, especially with dark decors and high-gloss surfaces.',
          cz: 'Technologie nulove spary bluEdge vytvari zcela neviditelne spojeni mezi hranou a deskou. Zadny film lepidla, zadna odchylka barvy, zadna viditelna delici linie. Vysledkem je monoliticky vzhled, ktery cini rozhodujici kvalitativni rozdil zejmena u tmavych dekoru a vysokoleskych ploch.',
        },
      },
      {
        heading: {
          de: 'Nachruestbar fuer alle OTT-Modelle',
          en: 'Retrofittable to all OTT models',
          cz: 'Dodatecne montovatelna na vsechny modely OTT',
        },
        body: {
          de: 'Die HyFuse-Lasereinheit kann in jede OTT-Kantenanleimmaschine integriert werden - vom Einstiegsmodell Pacific+ bis zum Flaggschiff TopEdge. Bestehende Betriebe koennen so ihr Leistungsspektrum um die gefragte Nullfugentechnik erweitern und neue Marktsegmente erschliessen.',
          en: 'The HyFuse laser unit can be integrated into any OTT edgebanding machine - from the entry-level Pacific+ to the flagship TopEdge. Existing operations can thus expand their service range to include the sought-after zero glue line technology and open up new market segments.',
          cz: 'Laserovou jednotku HyFuse lze integrovat do jakekoli olepovacky hran OTT - od vstupniho modelu Pacific+ az po vlajkovou lod TopEdge. Stavajici provozy tak mohou rozsirit sve moznosti o zadanou technologii nulove spary a otevrit si nove trzni segmenty.',
        },
      },
    ],

    buyingAdvice: {
      de: 'bluEdge featuring HyFuse ist die Wahl fuer Betriebe, die ihren Kunden Premium-Kantenqualitaet ohne sichtbare Fuge anbieten wollen. Die Technologie laesst sich als Nachruestoption in jede bestehende OTT-Maschine integrieren. Die Investition rechnet sich besonders fuer Hersteller hochwertiger Kuechen und Designmoebel.',
      en: 'bluEdge featuring HyFuse is the choice for operations that want to offer their customers premium edge quality with no visible joint. The technology can be integrated as a retrofit option into any existing OTT machine. The investment pays off particularly for manufacturers of high-end kitchens and designer furniture.',
      cz: 'bluEdge featuring HyFuse je volba pro provozy, ktere chteji svym zakaznikum nabidnout premiovou kvalitu hran bez viditelne spary. Technologii lze integrovat jako moznost dovybaveni do jakehokoli stavajiciho stroje OTT. Investice se vyplaci zejmena pro vyrobce vysokokvalitnich kuchyni a designoveho nabytku.',
    },

    faq: [
      {
        question: {
          de: 'Was ist der Unterschied zwischen bluEdge und PUR-Verklebung?',
          en: 'What is the difference between bluEdge and PUR bonding?',
          cz: 'Jaky je rozdil mezi bluEdge a PUR lepenim?',
        },
        answer: {
          de: 'Bei PUR wird ein Klebstoff verwendet, der eine duenne, aber sichtbare Fuge bildet. Bei bluEdge wird die Funktionsschicht der Kante per Laser aktiviert und direkt mit der Platte verschmolzen - voellig ohne Klebstoff. Das Ergebnis ist eine vollstaendig unsichtbare Verbindung.',
          en: 'PUR uses an adhesive that forms a thin but visible joint. With bluEdge, the functional layer of the edge is activated by laser and fused directly to the board - entirely without adhesive. The result is a completely invisible connection.',
          cz: 'U PUR se pouziva lepidlo, ktere vytvari tenkou, ale viditelnou sparu. U bluEdge je funkcni vrstva hrany aktivovana laserem a primo spojena s deskou - zcela bez lepidla. Vysledkem je uplne neviditelne spojeni.',
        },
      },
      {
        question: {
          de: 'Kann bluEdge auch an aeltere OTT-Maschinen nachgeruestet werden?',
          en: 'Can bluEdge be retrofitted to older OTT machines?',
          cz: 'Lze bluEdge dovybavit i na starsi stroje OTT?',
        },
        answer: {
          de: 'Ja, die HyFuse-Lasereinheit ist fuer alle OTT-Kantenanleimmaschinen als Nachruestoption erhaeltlich. Asamer prueft die Kompatibilitaet und fuehrt die Nachruestung vor Ort in CZ, SK und HU durch.',
          en: 'Yes, the HyFuse laser unit is available as a retrofit option for all OTT edgebanding machines. Asamer checks compatibility and carries out the retrofit on-site in CZ, SK and HU.',
          cz: 'Ano, laserova jednotka HyFuse je k dispozici jako moznost dovybaveni pro vsechny olepovacky hran OTT. Asamer overi kompatibilitu a provede dovybaveni primo na miste v CZ, SK a HU.',
        },
      },
      {
        question: {
          de: 'Welche Kantenmaterialien sind mit bluEdge kompatibel?',
          en: 'Which edge materials are compatible with bluEdge?',
          cz: 'Ktere hranove materialy jsou kompatibilni s bluEdge?',
        },
        answer: {
          de: 'bluEdge funktioniert mit Kantenmaterialien, die ueber eine laserreaktive Funktionsschicht verfuegen. Die gaengigen Kantenhersteller wie Rehau, Doellken und Ostermann bieten entsprechende Kanten an. Asamer berart Sie gerne zur Materialauswahl.',
          en: 'bluEdge works with edge materials that feature a laser-reactive functional layer. Common edge manufacturers such as Rehau, Doellken and Ostermann offer compatible edges. Asamer is happy to advise you on material selection.',
          cz: 'bluEdge funguje s hranovymi materialy, ktere maji laserove reaktivni funkcni vrstvu. Bezni vyrobci hran jako Rehau, Doellken a Ostermann nabizeji odpovidajici hrany. Asamer vam rad poradi s vyberem materialu.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  transcompact                                                       */
  /* ------------------------------------------------------------------ */
  'transcompact': {
    longDescription: {
      de: `Das OTT TRANScompact ist ein kompaktes Rueckfuehrsystem mit integrierter Drehfunktion, das speziell fuer kleinere Produktionslinien und Werkstattraeume mit begrenztem Platzangebot entwickelt wurde. Es transportiert bearbeitete Werkstuecke zurueck zum Maschinenbediener, sodass ein Einmann-Betrieb der Kantenanleimmaschine moeglich wird. Die integrierte Drehfunktion ermoeglicht das Wenden des Werkstuecks fuer die Bearbeitung der naechsten Kante.

Das TRANScompact ist die ideale Ergaenzung fuer die OTT Pacific+ und Tornado+. Durch die kompakte Bauweise passt das System auch in enge Werkstattraeume und ermoeglicht trotzdem einen effizienten Werkstueckreuecklauf. Der Bediener legt das Werkstueck an der Einlaufseite der Kantenanleimmaschine auf, die Maschine bearbeitet die Kante, und das TRANScompact transportiert das Werkstueck automatisch zurueck zum Bediener - bei Bedarf gedreht fuer die naechste Kante.

Im Vergleich zum TRANSlift benoetigt das TRANScompact weniger Deckenhoehe und ist fuer niedrigere Stueckzahlen ausgelegt. Gegenueber dem TRANSedge ist es kompakter und preisguenstiger, bietet aber eine geringere Taktrate. Asamer ist autorisierter OTT-Haendler fuer CZ, SK und HU und berart Sie gerne zur Wahl des richtigen Rueckfuehrsystems fuer Ihre Kantenanleimlinie.`,

      en: `The OTT TRANScompact is a compact return conveyor with integrated rotation function, developed specifically for smaller production lines and workshop spaces with limited room. It transports finished workpieces back to the machine operator, enabling single-operator running of the edgebanding machine. The integrated rotation function allows turning of the workpiece for processing the next edge.

The TRANScompact is the ideal companion for the OTT Pacific+ and Tornado+. Thanks to its compact design, the system fits into tight workshop spaces while still enabling efficient workpiece return. The operator places the workpiece at the infeed side of the edgebander, the machine processes the edge, and the TRANScompact automatically returns the workpiece to the operator - rotated if needed for the next edge.

Compared to the TRANSlift, the TRANScompact requires less ceiling height and is designed for lower volumes. Compared to the TRANSedge, it is more compact and more affordable but offers a lower cycle rate. Asamer is the authorized OTT dealer for CZ, SK and HU and is happy to advise you on choosing the right return system for your edgebanding line.`,

      cz: `OTT TRANScompact je kompaktni vratny dopravnik s integrovanou funkci otaceni, vyvinuty specialne pro mensi vyrobni linky a dilenske prostory s omezenym mistem. Prepravuje opracovane obrobky zpet k obsluze stroje, coz umoznuje jednooperatorsky provoz olepovacky hran. Integrovana funkce otaceni umoznuje obraceni obrobku pro zpracovani dalsi hrany.

TRANScompact je idealnim doplnkem k OTT Pacific+ a Tornado+. Diky kompaktni konstrukci se system vejde i do stisnenych dilenskych prostor a presto umozni efektivni navrat obrobku. Operator polozi obrobek na vstupni stranu olepovacky, stroj zpracuje hranu a TRANScompact automaticky prepravi obrobek zpet k operatorovi - v pripade potreby otoceny pro dalsi hranu.

Ve srovnani s TRANSlift vyzaduje TRANScompact mensi vysku stropu a je navrzeny pro nizsi objemy. Ve srovnani s TRANSedge je kompaktnejsi a cenove dostupnejsi, ale nabizi nizsi taktovaci frekvenci. Asamer je autorizovany prodejce OTT pro CZ, SK a HU a rad vam poradi s vyberem spravneho vratneho systemu pro vasi olepovaci linku.`,
    },

    applicationSections: [
      {
        heading: {
          de: 'Einmann-Betrieb fuer kleine Werkstaetten',
          en: 'Single-operator running for small workshops',
          cz: 'Jednooperatorsky provoz pro male dilny',
        },
        body: {
          de: 'Das TRANScompact ermoeglicht den Betrieb der Kantenanleimmaschine mit nur einem Bediener. Das Werkstueck wird automatisch zurueckgefuehrt, sodass kein zweiter Mitarbeiter zum Abnehmen der Teile benoetigt wird. Die Drehfunktion eruebrigt zusaetzlich das manuelle Wenden des Werkstuecks.',
          en: 'The TRANScompact enables running the edgebanding machine with just one operator. The workpiece is automatically returned, so no second employee is needed for part removal. The rotation function also eliminates the need for manual turning of the workpiece.',
          cz: 'TRANScompact umoznuje provoz olepovacky hran s jednim operatorem. Obrobek je automaticky vracen, takze neni potreba druheho zamestnance pro odebrani dilu. Funkce otaceni navic odstranuji nutnost rucniho obraceni obrobku.',
        },
      },
      {
        heading: {
          de: 'Platzsparende Loesung fuer Pacific+ und Tornado+',
          en: 'Space-saving solution for Pacific+ and Tornado+',
          cz: 'Prostorove usporne reseni pro Pacific+ a Tornado+',
        },
        body: {
          de: 'Das TRANScompact wurde speziell als Ergaenzung zu den kompakten OTT-Modellen Pacific+ und Tornado+ konzipiert. Zusammen bilden sie eine platzsparende Produktionszelle, die auch in beengten Werkstattverhaeltnissen effizient arbeitet.',
          en: 'The TRANScompact was specifically designed as a companion to the compact OTT models Pacific+ and Tornado+. Together they form a space-saving production cell that works efficiently even in tight workshop conditions.',
          cz: 'TRANScompact byl specialne navrzeny jako doplnek ke kompaktnim modelum OTT Pacific+ a Tornado+. Dohromady tvori prostorove uspornou vyrobni bunku, ktera efektivne funguje i ve stisnenych dilenskych podminkach.',
        },
      },
    ],

    buyingAdvice: {
      de: 'Waehlen Sie das TRANScompact, wenn Sie die Pacific+ oder Tornado+ mit einem kompakten, platzsparenden Rueckfuehrsystem ergaenzen moechten. Fuer hoehere Taktraten oder groessere Maschinen wie Storm+ oder TopEdge empfehlen wir das TRANSlift oder TRANSedge.',
      en: 'Choose the TRANScompact if you want to complement the Pacific+ or Tornado+ with a compact, space-saving return system. For higher cycle rates or larger machines like Storm+ or TopEdge, we recommend the TRANSlift or TRANSedge.',
      cz: 'Zvolte TRANScompact, pokud chcete doplnit Pacific+ nebo Tornado+ kompaktnim, prostorove uspornym vratnym systemem. Pro vyssi taktovaci frekvence nebo vetsi stroje jako Storm+ nebo TopEdge doporucujeme TRANSlift nebo TRANSedge.',
    },

    faq: [
      {
        question: {
          de: 'Fuer welche OTT-Maschinen eignet sich das TRANScompact?',
          en: 'Which OTT machines is the TRANScompact suitable for?',
          cz: 'Pro ktere stroje OTT je TRANScompact vhodny?',
        },
        answer: {
          de: 'Das TRANScompact ist besonders als Ergaenzung zur Pacific+ und Tornado+ geeignet. Grundsaetzlich kann es aber auch mit anderen OTT-Modellen kombiniert werden, wenn der Platz begrenzt ist.',
          en: 'The TRANScompact is particularly suited as a companion to the Pacific+ and Tornado+. In principle, it can also be combined with other OTT models when space is limited.',
          cz: 'TRANScompact je obzvlaste vhodny jako doplnek k Pacific+ a Tornado+. V zasade ho lze kombinovat i s dalsimi modely OTT, pokud je prostor omezeny.',
        },
      },
      {
        question: {
          de: 'Kann das TRANScompact Werkstuecke drehen?',
          en: 'Can the TRANScompact rotate workpieces?',
          cz: 'Muze TRANScompact otacet obrobky?',
        },
        answer: {
          de: 'Ja, das TRANScompact verfuegt ueber eine integrierte Drehfunktion. So kann das Werkstueck automatisch gedreht werden, um die naechste Kante zu bearbeiten, ohne dass der Bediener manuell eingreifen muss.',
          en: 'Yes, the TRANScompact features an integrated rotation function. This allows the workpiece to be automatically rotated to process the next edge without manual intervention from the operator.',
          cz: 'Ano, TRANScompact disponuje integrovanou funkci otaceni. Obrobek tak muze byt automaticky otocen pro zpracovani dalsi hrany, aniz by operator musel rucne zasahovat.',
        },
      },
      {
        question: {
          de: 'Was ist der Unterschied zwischen TRANScompact und TRANSlift?',
          en: 'What is the difference between TRANScompact and TRANSlift?',
          cz: 'Jaky je rozdil mezi TRANScompact a TRANSlift?',
        },
        answer: {
          de: 'Das TRANScompact ist ein horizontales Rueckfuehrsystem mit Drehfunktion fuer kompakte Werkstaetten. Das TRANSlift transportiert Werkstuecke vertikal und spart dadurch Hallenflaeche, benoetigt aber mehr Deckenhoehe. TRANSlift eignet sich fuer groessere Maschinen und hoehere Stueckzahlen.',
          en: 'The TRANScompact is a horizontal return system with rotation for compact workshops. The TRANSlift transports workpieces vertically, saving floor space but requiring more ceiling height. TRANSlift is suited for larger machines and higher volumes.',
          cz: 'TRANScompact je horizontalni vratny system s otacenim pro kompaktni dilny. TRANSlift prepravuje obrobky vertikalne, cimz setri podlahovou plochu, ale vyzaduje vetsi vysku stropu. TRANSlift je vhodny pro vetsi stroje a vyssi objemy.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  translift                                                          */
  /* ------------------------------------------------------------------ */
  'translift': {
    longDescription: {
      de: `Das OTT TRANSlift ist ein Hebe-Rueckfuehrsystem, das Werkstuecke vertikal transportiert und dadurch wertvolle Hallenflaeche spart. Anstatt die Werkstuecke horizontal zurueckzufuehren, hebt das TRANSlift sie auf eine obere Ebene, transportiert sie oberhalb der Kantenanleimmaschine zurueck und senkt sie am Einlauf wieder ab. Dieses Prinzip reduziert den Flaechenbedarf der Produktionslinie erheblich.

Das TRANSlift ist die empfohlene Rueckfuehrloesung fuer die OTT-Modelle Storm+, StrongEdge, TopEdge und FlexEdge. Es ist auf hohe Stueckzahlen und den industriellen Dauerbetrieb ausgelegt und kann in mehrstoeckige Produktionslinien integriert werden. Die vertikale Bauweise macht es besonders attraktiv fuer Betriebe, die ihre Hallenflaeche optimal nutzen moechten, ohne auf einen effizienten Werkstueckruecklauf verzichten zu muessen.

Im Vergleich zum TRANScompact bietet das TRANSlift mehr Kapazitaet und spart Bodenflaeche auf Kosten der Deckenhoehe. Gegenueber dem TRANSedge ist es vielseitiger einsetzbar und nicht nur auf Kantenanleimlinien beschraenkt. Asamer ist autorisierter OTT-Haendler fuer Tschechien, die Slowakei und Ungarn und unterstuetzt Sie bei der Planung und Integration des TRANSlift in Ihre Produktionslinie.`,

      en: `The OTT TRANSlift is a lifting return system that transports workpieces vertically, saving valuable floor space. Instead of returning workpieces horizontally, the TRANSlift lifts them to an upper level, transports them back above the edgebanding machine and lowers them again at the infeed. This principle significantly reduces the footprint of the production line.

The TRANSlift is the recommended return solution for the OTT models Storm+, StrongEdge, TopEdge and FlexEdge. It is designed for high volumes and continuous industrial operation and can be integrated into multi-level production lines. The vertical design makes it particularly attractive for operations looking to optimize their floor space utilization without sacrificing efficient workpiece return.

Compared to the TRANScompact, the TRANSlift offers more capacity and saves floor space at the cost of ceiling height. Compared to the TRANSedge, it is more versatile and not limited to edgebanding lines only. Asamer is the authorized OTT dealer for the Czech Republic, Slovakia and Hungary and supports you in planning and integrating the TRANSlift into your production line.`,

      cz: `OTT TRANSlift je zvedaci vratny system, ktery prepravuje obrobky vertikalne a tim setri cennou podlahovou plochu. Namisto horizontalniho vraceni obrobku TRANSlift zdviha obrobky na horni uroven, prepravuje je zpet nad olepovackou hran a na vstupu je opet snizuje. Tento princip vyrazne snizuje prostorove naroky vyrobni linky.

TRANSlift je doporucene vratne reseni pro modely OTT Storm+, StrongEdge, TopEdge a FlexEdge. Je navrzeny pro vysoke objemy a prumyslovy nepretrzity provoz a lze jej integrovat do viceurovnovych vyrobnich linek. Vertikalni konstrukce jej cini obzvlaste atraktivnim pro provozy, ktere chteji optimalizovat vyuziti podlahove plochy, aniz by se musely vzdat efektivniho navratu obrobku.

Ve srovnani s TRANScompact nabizi TRANSlift vetsi kapacitu a setri podlahovou plochu na ukor vysky stropu. Ve srovnani s TRANSedge je vsestrannejsi a neni omezen pouze na olepovaci linky. Asamer je autorizovany prodejce OTT pro Ceskou republiku, Slovensko a Madarsko a podpori vas pri planovani a integraci TRANSlift do vasi vyrobni linky.`,
    },

    applicationSections: [
      {
        heading: {
          de: 'Platzoptimierung durch vertikale Rueckfuehrung',
          en: 'Space optimization through vertical return',
          cz: 'Optimalizace prostoru diky vertikalnimu vraceni',
        },
        body: {
          de: 'Das TRANSlift nutzt den Raum oberhalb der Kantenanleimmaschine fuer den Werkstuecktransport. Dadurch wird die Hallenflaeche neben der Maschine frei fuer andere Zwecke. Besonders in Produktionshallen mit begrenzter Bodenflaeche, aber ausreichender Deckhoehe, ist das TRANSlift die optimale Loesung.',
          en: 'The TRANSlift uses the space above the edgebanding machine for workpiece transport. This frees up the floor space beside the machine for other purposes. Especially in production halls with limited floor space but sufficient ceiling height, the TRANSlift is the optimal solution.',
          cz: 'TRANSlift vyuziva prostor nad olepovackou hran pro prepravu obrobku. Tim se uvolni podlahova plocha vedle stroje pro jine ucely. Zejmena ve vyrobnich halach s omezenou podlahovou plochou, ale dostatecnou vyskou stropu, je TRANSlift optimalnim resenim.',
        },
      },
      {
        heading: {
          de: 'Fuer industrielle Kantenanleimlinien',
          en: 'For industrial edgebanding lines',
          cz: 'Pro prumyslove olepovaci linky',
        },
        body: {
          de: 'Als Rueckfuehrsystem fuer die Profi- und Flaggschiff-Modelle Storm+, StrongEdge und TopEdge ist das TRANSlift auf den industriellen Dauerbetrieb mit hohen Taktraten ausgelegt. Die robuste Bauweise gewaehrleistet zuverlaessigen Betrieb auch im Dreischichtbetrieb.',
          en: 'As a return system for the professional and flagship models Storm+, StrongEdge and TopEdge, the TRANSlift is designed for continuous industrial operation at high cycle rates. Its robust construction ensures reliable operation even in three-shift production.',
          cz: 'Jako vratny system pro profesionalni a vlajkove modely Storm+, StrongEdge a TopEdge je TRANSlift navrzeny pro prumyslovy nepretrzity provoz s vysokymi taktovacimi frekvencemi. Robustni konstrukce zajisuji spolehlivy provoz i v trismennem provozu.',
        },
      },
    ],

    buyingAdvice: {
      de: 'Waehlen Sie das TRANSlift, wenn Sie Hallenflaeche sparen moechten und ausreichende Deckenhoehe haben. Es ist die empfohlene Loesung fuer Storm+, StrongEdge und TopEdge. Fuer kompakte Werkstaetten mit Pacific+ oder Tornado+ ist das TRANScompact die bessere Wahl.',
      en: 'Choose the TRANSlift if you want to save floor space and have sufficient ceiling height. It is the recommended solution for Storm+, StrongEdge and TopEdge. For compact workshops with Pacific+ or Tornado+, the TRANScompact is the better choice.',
      cz: 'Zvolte TRANSlift, pokud chcete setrit podlahovou plochu a mate dostatecnou vysku stropu. Je to doporucene reseni pro Storm+, StrongEdge a TopEdge. Pro kompaktni dilny s Pacific+ nebo Tornado+ je lepsim resenim TRANScompact.',
    },

    faq: [
      {
        question: {
          de: 'Wie viel Deckenhoehe benoetigt das TRANSlift?',
          en: 'How much ceiling height does the TRANSlift require?',
          cz: 'Jakou vysku stropu vyzaduje TRANSlift?',
        },
        answer: {
          de: 'Die benoetigte Deckenhoehe haengt von der Maschinenhoehe und dem Werkstueckformat ab. Asamer berart Sie bei der Layoutplanung und prueft die raeumlichen Voraussetzungen in Ihrer Produktionshalle.',
          en: 'The required ceiling height depends on the machine height and workpiece format. Asamer advises you during layout planning and checks the spatial requirements in your production hall.',
          cz: 'Potrebna vyska stropu zavisi na vysce stroje a formatu obrobku. Asamer vam poradi pri planovani dispozice a overi prostorove pozadavky ve vasi vyrobni hale.',
        },
      },
      {
        question: {
          de: 'Kann das TRANSlift auch mit kleineren Maschinen verwendet werden?',
          en: 'Can the TRANSlift also be used with smaller machines?',
          cz: 'Lze TRANSlift pouzivat i s mensimi stroji?',
        },
        answer: {
          de: 'Grundsaetzlich ja, aber fuer die kompakten Modelle Pacific+ und Tornado+ empfehlen wir das TRANScompact als wirtschaftlichere Loesung. Das TRANSlift ist primaer fuer Storm+, StrongEdge, TopEdge und FlexEdge konzipiert.',
          en: 'In principle yes, but for the compact models Pacific+ and Tornado+, we recommend the TRANScompact as a more economical solution. The TRANSlift is primarily designed for Storm+, StrongEdge, TopEdge and FlexEdge.',
          cz: 'V zasade ano, ale pro kompaktni modely Pacific+ a Tornado+ doporucujeme TRANScompact jako ekonomictejsi reseni. TRANSlift je primarne navrzeny pro Storm+, StrongEdge, TopEdge a FlexEdge.',
        },
      },
      {
        question: {
          de: 'Spart das TRANSlift wirklich Hallenflaeche?',
          en: 'Does the TRANSlift really save floor space?',
          cz: 'Opravdu TRANSlift setri podlahovou plochu?',
        },
        answer: {
          de: 'Ja, da die Werkstuecke vertikal ueber die Maschine zurueckgefuehrt werden, entfaellt die horizontale Rueckfuehrstrecke neben der Maschine. Je nach Hallenlayout kann das TRANSlift die benoetigte Grundflaeche der Produktionslinie um bis zu 40% reduzieren.',
          en: 'Yes, since workpieces are returned vertically above the machine, the horizontal return path beside the machine is eliminated. Depending on the hall layout, the TRANSlift can reduce the required footprint of the production line by up to 40%.',
          cz: 'Ano, protoze obrobky jsou vraceny vertikalne nad strojem, odpada horizontalni vratna draha vedle stroje. V zavislosti na dispozici haly muze TRANSlift snizit potrebnou zastavbovou plochu vyrobni linky az o 40 %.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  transedge                                                          */
  /* ------------------------------------------------------------------ */
  'transedge': {
    longDescription: {
      de: `Das OTT TRANSedge ist ein spezialisiertes Rueckfuehrsystem, das gezielt fuer den Einsatz in Kantenanleimlinien mit hoher Taktrate entwickelt wurde. Es bietet automatische Werkstueckrueckfuehrung mit nahtloser Integration in bestehende Produktionsablaeufe und ist auf maximalen Durchsatz optimiert. Das TRANSedge ist die ideale Ergaenzung zu den leistungsstarken OTT-Modellen Storm+ und TopEdge.

Anders als das universell einsetzbare TRANSlift ist das TRANSedge speziell auf die Anforderungen von Kantenanleimlinien zugeschnitten. Die Steuerung ist direkt mit der Kantenanleimmaschine synchronisiert, was praezises Timing und minimale Taktzeiten ermoeglicht. Das System erkennt automatisch die Werkstueckposition und passt die Transportgeschwindigkeit an den Produktionsrhythmus an.

In einer kompletten Kantenanleimline mit Storm+ oder TopEdge bildet das TRANSedge das Rueckgrat des Materialflusses. Der automatische Betrieb ermoeglicht es, die Linie mit nur einem Bediener zu fahren, waehrend der Durchsatz maximiert wird. Asamer ist autorisierter OTT-Haendler fuer Tschechien, die Slowakei und Ungarn und plant gemeinsam mit Ihnen die optimale Konfiguration Ihrer Kantenanleimlinie mit TRANSedge.`,

      en: `The OTT TRANSedge is a specialized return system developed specifically for use in edgebanding lines with high cycle rates. It provides automatic workpiece return with seamless integration into existing production workflows and is optimized for maximum throughput. The TRANSedge is the ideal complement to the high-performance OTT models Storm+ and TopEdge.

Unlike the universally applicable TRANSlift, the TRANSedge is specifically tailored to the requirements of edgebanding lines. The control system is directly synchronized with the edgebanding machine, enabling precise timing and minimal cycle times. The system automatically detects the workpiece position and adjusts transport speed to match the production rhythm.

In a complete edgebanding line with Storm+ or TopEdge, the TRANSedge forms the backbone of the material flow. Automatic operation enables the line to be run with just one operator while throughput is maximized. Asamer is the authorized OTT dealer for the Czech Republic, Slovakia and Hungary and works with you to plan the optimal configuration of your edgebanding line with TRANSedge.`,

      cz: `OTT TRANSedge je specializovany vratny system vyvinuty cileně pro nasazeni v olepovacich linkach s vysokou taktovaci frekvenci. Poskytuje automaticky navrat obrobku s bezproblemovou integraci do stavajicich vyrobnich procesu a je optimalizovan pro maximalni propustnost. TRANSedge je idealnim doplnkem k vykonnym modelum OTT Storm+ a TopEdge.

Na rozdil od univerzalne pouzitelneho TRANSlift je TRANSedge specialne prizpusoben pozadavkum olepovacich linek. Ridici system je primo synchronizovan s olepovackou hran, coz umoznuje precizni casovani a minimalni taktovaci casy. System automaticky detekuje polohu obrobku a prizpusobuje rychlost prepravy vyrobnimu rytmu.

V kompletni olepovaci lince se Storm+ nebo TopEdge tvori TRANSedge patyr toku materialu. Automaticky provoz umoznuje provoz linky s jednim operatorem pri maximalizaci propustnosti. Asamer je autorizovany prodejce OTT pro Ceskou republiku, Slovensko a Madarsko a spolecne s vami naplanuji optimalni konfiguraci vasi olepovaci linky s TRANSedge.`,
    },

    applicationSections: [
      {
        heading: {
          de: 'Optimiert fuer Storm+- und TopEdge-Linien',
          en: 'Optimized for Storm+ and TopEdge lines',
          cz: 'Optimalizovany pro linky Storm+ a TopEdge',
        },
        body: {
          de: 'Das TRANSedge ist als spezialisiertes Rueckfuehrsystem fuer die leistungsstarken OTT-Modelle Storm+ und TopEdge konzipiert. Die direkte Synchronisierung mit der Maschinensteuerung ermoeglicht hoechste Taktraten und nahtlosen Materialfluss in industriellen Kantenanleimlinien.',
          en: 'The TRANSedge is designed as a specialized return system for the high-performance OTT models Storm+ and TopEdge. Direct synchronization with the machine control enables the highest cycle rates and seamless material flow in industrial edgebanding lines.',
          cz: 'TRANSedge je navrzeny jako specializovany vratny system pro vysokovykonne modely OTT Storm+ a TopEdge. Prima synchronizace s rizenim stroje umoznuje nejvyssi taktovaci frekvence a bezproblemovy tok materialu v prumyslovych olepovacich linkach.',
        },
      },
      {
        heading: {
          de: 'Einmann-Betrieb bei maximaler Leistung',
          en: 'Single-operator operation at maximum performance',
          cz: 'Jednooperatorsky provoz pri maximalnim vykonu',
        },
        body: {
          de: 'Durch den vollautomatischen Werkstueckruecklauf kann die gesamte Kantenanleimlinie von einem einzelnen Bediener betrieben werden. Das TRANSedge uebernimmt den Transport, die Positionierung und bei Bedarf auch das Wenden des Werkstuecks. Die Einsparung eines zweiten Bedieners amortisiert die Investition in kurzer Zeit.',
          en: 'With fully automatic workpiece return, the entire edgebanding line can be operated by a single operator. The TRANSedge handles transport, positioning and if required also turning of the workpiece. The saving of a second operator pays back the investment in a short time.',
          cz: 'Diky plne automatickemu navratu obrobku muze celou olepovaci linku provozovat jediny operator. TRANSedge zajisuje prepravu, polohovani a v pripade potreby i otaceni obrobku. Uspora druheho operatora se vrati investici v kratkem case.',
        },
      },
    ],

    buyingAdvice: {
      de: 'Waehlen Sie das TRANSedge, wenn Sie eine Storm+- oder TopEdge-Linie mit maximalem Durchsatz und hoher Taktrate betreiben moechten. Gegenueber dem TRANSlift bietet das TRANSedge eine spezifischere Optimierung fuer Kantenanleimlinien. Fuer kompaktere Setups empfehlen wir TRANScompact oder TRANSlift.',
      en: 'Choose the TRANSedge if you want to run a Storm+ or TopEdge line with maximum throughput and high cycle rate. Compared to the TRANSlift, the TRANSedge offers more specific optimization for edgebanding lines. For more compact setups, we recommend TRANScompact or TRANSlift.',
      cz: 'Zvolte TRANSedge, pokud chcete provozovat linku Storm+ nebo TopEdge s maximalnim vykonem a vysokou taktovaci frekvenci. Ve srovnani s TRANSlift nabizi TRANSedge specifictejsi optimalizaci pro olepovaci linky. Pro kompaktnejsi sestavy doporucujeme TRANScompact nebo TRANSlift.',
    },

    faq: [
      {
        question: {
          de: 'Was unterscheidet das TRANSedge vom TRANSlift?',
          en: 'What distinguishes the TRANSedge from the TRANSlift?',
          cz: 'Cim se TRANSedge lisi od TRANSlift?',
        },
        answer: {
          de: 'Das TRANSedge ist speziell fuer Kantenanleimlinien optimiert und direkt mit der Maschinensteuerung synchronisiert. Das TRANSlift ist ein universelleres Hebe-Rueckfuehrsystem, das auch in anderen Produktionslinien eingesetzt werden kann.',
          en: 'The TRANSedge is specifically optimized for edgebanding lines and directly synchronized with the machine control. The TRANSlift is a more universal lifting return system that can also be used in other production lines.',
          cz: 'TRANSedge je specialne optimalizovan pro olepovaci linky a primo synchronizovan s rizením stroje. TRANSlift je univerzalnejsi zvedaci vratny system, ktery lze pouzivat i v jinych vyrobnich linkach.',
        },
      },
      {
        question: {
          de: 'Kann das TRANSedge auch mit dem FlexEdge verwendet werden?',
          en: 'Can the TRANSedge also be used with the FlexEdge?',
          cz: 'Lze TRANSedge pouzivat i s FlexEdge?',
        },
        answer: {
          de: 'Ja, das TRANSedge kann grundsaetzlich mit dem FlexEdge kombiniert werden. Die empfohlene Kombination ist jedoch Storm+ oder TopEdge mit TRANSedge fuer maximale Leistung. Fuer den FlexEdge empfehlen wir primaer TRANScompact oder TRANSlift.',
          en: 'Yes, the TRANSedge can in principle be combined with the FlexEdge. However, the recommended combination is Storm+ or TopEdge with TRANSedge for maximum performance. For the FlexEdge, we primarily recommend TRANScompact or TRANSlift.',
          cz: 'Ano, TRANSedge lze v zasade kombinovat s FlexEdge. Doporucena kombinace je vsak Storm+ nebo TopEdge s TRANSedge pro maximalni vykon. Pro FlexEdge primarne doporucujeme TRANScompact nebo TRANSlift.',
        },
      },
      {
        question: {
          de: 'Wie hoch ist die maximale Taktrate des TRANSedge?',
          en: 'What is the maximum cycle rate of the TRANSedge?',
          cz: 'Jaka je maximalni taktovaci frekvence TRANSedge?',
        },
        answer: {
          de: 'Die Taktrate des TRANSedge richtet sich nach der angeschlossenen Kantenanleimmaschine und dem Werkstueckformat. Bei einer TopEdge mit 22 m/min Vorschub wird die Taktrate durch die Maschinengeschwindigkeit bestimmt - das TRANSedge haelt mit. Kontaktieren Sie Asamer fuer eine Berechnung Ihres spezifischen Durchsatzes.',
          en: 'The cycle rate of the TRANSedge depends on the connected edgebanding machine and the workpiece format. With a TopEdge at 22 m/min feed speed, the cycle rate is determined by the machine speed - the TRANSedge keeps up. Contact Asamer for a calculation of your specific throughput.',
          cz: 'Taktovaci frekvence TRANSedge se ridi pripojenou olepovackou hran a formatem obrobku. Pri TopEdge s rychlosti posuvu 22 m/min je taktovaci frekvence urcena rychlosti stroje - TRANSedge drzi krok. Kontaktujte Asamer pro vypocet vaseho konkretniho vystupu.',
        },
      },
    ],
  },
};

/* ====================================================================== */
/*  CATEGORY SEO CONTENT                                                   */
/* ====================================================================== */

export const OTT_CATEGORY_SEO: Record<OttCategory, CategorySeoContent> = {
  /* ------------------------------------------------------------------ */
  /*  edgebanding                                                        */
  /* ------------------------------------------------------------------ */
  edgebanding: {
    introExpanded: {
      de: `Kantenanleimmaschinen von OTT Paul sind die erste Wahl fuer anspruchsvolle Tischlereien und Moebelhersteller in Tschechien, der Slowakei und Ungarn. Asamer ist autorisierter OTT-Haendler fuer die Region CZ/SK/HU und bietet die gesamte Palette an OTT-Kantenanleimmaschinen - vom kompakten Einstiegsmodell Pacific+ bis zum Flaggschiff TopEdge.

OTT-Kantenanleimmaschinen decken ein breites Leistungsspektrum ab: Vorschubgeschwindigkeiten von 12 bis 22 m/min, Kantenstaerken von 0,3 bis 25 mm und Plattenstaerken bis 80 mm. Ob Handwerksbetrieb mit Einzelfertigung oder Industriebetrieb mit Dreischicht-Dauerbetrieb - OTT bietet fuer jeden Bedarf die passende Maschine. Alle Modelle koennen mit dem CombiMelt-PUR-System fuer wasserfeste Leimfugen und der bluEdge-HyFuse-Nullfugentechnologie ausgestattet werden.

Ein besonderes Merkmal der OTT-Maschinenreihe ist die durchgaengige Nachruestbarkeit. Betriebe koennen mit einem Einstiegsmodell beginnen und spaeter Klebetechnologie, Steuerung und Bearbeitungsaggregate aufreusten. Modelle wie die FlexEdge und die TopEdge bieten mit der serienmaeassigen Beckhoff-Steuerung und OPC-UA-Schnittstelle volle Industrie-4.0-Faehigkeit. Asamer unterstuetzt Sie in der gesamten Region CZ, SK und HU mit Beratung, Verkauf, Installation, Schulung und Ersatzteilservice.`,

      en: `OTT Paul edgebanding machines are the first choice for demanding joinery workshops and furniture manufacturers in the Czech Republic, Slovakia and Hungary. Asamer is the authorized OTT dealer for the CZ/SK/HU region, offering the complete range of OTT edgebanding machines - from the compact entry-level Pacific+ to the flagship TopEdge.

OTT edgebanding machines cover a wide performance spectrum: feed speeds from 12 to 22 m/min, edge thicknesses from 0.3 to 25 mm and board thicknesses up to 80 mm. Whether a craft workshop with one-off production or an industrial operation with three-shift continuous production, OTT offers the right machine for every need. All models can be equipped with the CombiMelt PUR system for waterproof glue joints and the bluEdge HyFuse zero glue line technology.

A distinctive feature of the OTT machine range is the consistent upgrade path. Operations can start with an entry-level model and later upgrade adhesive technology, controls and processing units. Models such as the FlexEdge and TopEdge offer full Industry 4.0 capability with the standard Beckhoff control and OPC-UA interface. Asamer supports you across the entire CZ, SK and HU region with consultation, sales, installation, training and spare parts service.`,

      cz: `Olepovacky hran OTT Paul jsou prvni volbou pro narocne truhlarske dilny a vyrobce nabytku v Ceske republice, na Slovensku a v Madarsku. Asamer je autorizovany prodejce OTT pro region CZ/SK/HU a nabizi celou skalu olepovacek hran OTT - od kompaktniho vstupniho modelu Pacific+ az po vlajkovou lod TopEdge.

Olepovacky hran OTT pokryvaji siroke vykonove spektrum: rychlosti posuvu 12 az 22 m/min, tlousky hran 0,3 az 25 mm a tlousky desek az 80 mm. At uz remeslna dilna s kusovou vyrobou nebo prumyslovy provoz s nepretrzitym trismenniym provozem - OTT nabizi pro kazdou potrebu spravny stroj. Vsechny modely mohou byt vybaveny systemem CombiMelt PUR pro vodetesne lepene spoje a technologii nulove spary bluEdge HyFuse.

Vyraznym rysem rady stroju OTT je pruchodna moznost dovybaveni. Provozy mohou zacit se vstupnim modelem a pozdeji dovybavit lepici technologii, rizeni a obrabeci agregaty. Modely jako FlexEdge a TopEdge nabizeji se standardnim rizenim Beckhoff a rozhranim OPC-UA plnou schopnost Prumyslu 4.0. Asamer vas podpoeuji v celem regionu CZ, SK a HU poradensttvim, prodejem, instalaci, skolenim a servisem nahradnich dilu.`,
    },

    sections: [
      {
        heading: {
          de: 'OTT Kantenanleimmaschinen im Ueberblick',
          en: 'OTT edgebanding machines overview',
          cz: 'Prehled olepovacek hran OTT',
        },
        body: {
          de: 'Das OTT-Programm umfasst sieben Kantenanleimmaschinen-Modelle: Pacific+ (Einstieg, 5,7 m), Tornado+ (bewaeahrt, 6,2 m), FlexEdge (Industrie 4.0, 7,1 m), Storm+ (Profi, 7,8 m), StrongEdge (schwere Kanten, 8,6 m), TopEdge S/L (Flaggschiff, 9,2-10,2 m) und die DoorEdition (Tuerenspezialist, ab 8 m). Jedes Modell ist auf ein spezifisches Anforderungsprofil zugeschnitten.',
          en: 'The OTT programme comprises seven edgebanding machine models: Pacific+ (entry-level, 5.7 m), Tornado+ (proven, 6.2 m), FlexEdge (Industry 4.0, 7.1 m), Storm+ (professional, 7.8 m), StrongEdge (heavy edges, 8.6 m), TopEdge S/L (flagship, 9.2-10.2 m) and the DoorEdition (door specialist, from 8 m). Each model is tailored to a specific requirement profile.',
          cz: 'Program OTT zahrnuje sedm modelu olepovacek hran: Pacific+ (vstupni, 5,7 m), Tornado+ (osvedceny, 6,2 m), FlexEdge (Prumysl 4.0, 7,1 m), Storm+ (profesionalni, 7,8 m), StrongEdge (tezke hrany, 8,6 m), TopEdge S/L (vlajkova lod, 9,2-10,2 m) a DoorEdition (specialista na dvere, od 8 m). Kazdy model je prizpusoben specifickemu profilu pozadavku.',
        },
      },
      {
        heading: {
          de: 'Klebetechnologie: EVA, PUR und Nullfuge',
          en: 'Adhesive technology: EVA, PUR and zero glue line',
          cz: 'Lepici technologie: EVA, PUR a nulova spara',
        },
        body: {
          de: 'OTT bietet drei Klebetechnologie-Stufen: EVA (Standard, bewaeahrt und wirtschaftlich), PUR (wasserbestaendig, hitzebestaendig, nahezu unsichtbar) und bluEdge HyFuse (Nullfuge, kein Klebstoff, vollstaendig unsichtbar). Das CombiMelt-System ermoeglicht den schnellen Wechsel zwischen EVA und PUR. Alle Technologien sind nachruestbar.',
          en: 'OTT offers three adhesive technology tiers: EVA (standard, proven and economical), PUR (water-resistant, heat-resistant, virtually invisible) and bluEdge HyFuse (zero joint, no adhesive, completely invisible). The CombiMelt system enables fast switching between EVA and PUR. All technologies are retrofittable.',
          cz: 'OTT nabizi tri urovne lepici technologie: EVA (standard, osvedcena a ekonomicka), PUR (odolna vode, odolna teplu, prakticky neviditelna) a bluEdge HyFuse (nulova spara, zadne lepidlo, zcela neviditelna). System CombiMelt umoznuje rychle prepinani mezi EVA a PUR. Vsechny technologie jsou dodatecne montovatelne.',
        },
      },
      {
        heading: {
          de: 'Materialkompatibilitaet und Anwendungsbereiche',
          en: 'Material compatibility and application areas',
          cz: 'Kompatibilita materialu a oblasti pouziti',
        },
        body: {
          de: 'OTT-Kantenanleimmaschinen verarbeiten alle gaengigen Kantenmaterialien: ABS, PVC, PP, Melamin, Furnier, Massivholz und CPL. Die Einsatzbereiche reichen von der Moebelproduktion ueber den Kuechenbau und Ladenbau bis zur Tuerenherstellung und zum Innenausbau. Dank der Kantenstaerken bis 25 mm (StrongEdge, TopEdge L) sind auch schwere Massivholzprofile moeglich.',
          en: 'OTT edgebanding machines process all common edge materials: ABS, PVC, PP, melamine, veneer, solid wood and CPL. Application areas range from furniture production through kitchen and shopfitting to door manufacturing and interior construction. With edge thicknesses up to 25 mm (StrongEdge, TopEdge L), even heavy solid wood profiles are possible.',
          cz: 'Olepovacky hran OTT zpracovavaji vsechny bezne hranove materialy: ABS, PVC, PP, melamin, dyhu, masivni drevo a CPL. Oblasti pouziti sahaji od vyroby nabytku pres kuchynsky a obchodni zastavbu az po vyrobu dveri a interierovou vystavbu. Diky tlouskam hran az 25 mm (StrongEdge, TopEdge L) jsou mozne i tezke masivni drevene profily.',
        },
      },
      {
        heading: {
          de: 'Kaufberatung: Die richtige OTT-Maschine waehlen',
          en: 'Buying guide: choosing the right OTT machine',
          cz: 'Pruvodce nakupem: vyber spravneho stroje OTT',
        },
        body: {
          de: 'Die Wahl der richtigen Kantenanleimmaschine haengt von Ihren spezifischen Anforderungen ab: Stueckzahlbedarf, Kantenstaerken, Plattenstaerken, benoetigte Klebetechnologie und Budget. Fuer Handwerksbetriebe empfehlen wir Pacific+ oder Tornado+. Fuer mittlere Betriebe mit Digitalisierungsbedarf die FlexEdge. Fuer industrielle Fertigung Storm+ oder TopEdge. Asamer berart Sie gerne persoenlich.',
          en: 'Choosing the right edgebanding machine depends on your specific requirements: volume demand, edge thicknesses, board thicknesses, required adhesive technology and budget. For craft workshops, we recommend the Pacific+ or Tornado+. For medium operations with digitalisation needs, the FlexEdge. For industrial production, the Storm+ or TopEdge. Asamer is happy to advise you personally.',
          cz: 'Vyber spravne olepovacky hran zavisi na vasich specifickych pozadavcich: objem vyroby, tlousky hran, tlousky desek, pozadovana lepici technologie a rozpocet. Pro remeslne dilny doporucujeme Pacific+ nebo Tornado+. Pro stredni provozy s potrebou digitalizace FlexEdge. Pro prumyslovou vyrobu Storm+ nebo TopEdge. Asamer vam rad poradi osobne.',
        },
      },
    ],

    faq: [
      {
        question: {
          de: 'Welche ist die beste OTT-Kantenanleimmaschine fuer kleine Tischlereien?',
          en: 'Which is the best OTT edgebanding machine for small workshops?',
          cz: 'Ktera je nejlepsi olepovacka hran OTT pro male truhlarstvi?',
        },
        answer: {
          de: 'Fuer kleine Tischlereien empfehlen wir die Pacific+ (5,7 m, 18 m/min) als kompaktes Einstiegsmodell oder die Tornado+ (6,2 m, 12-18 m/min) als bewaehrtesten Allrounder.',
          en: 'For small workshops, we recommend the Pacific+ (5.7 m, 18 m/min) as a compact entry model or the Tornado+ (6.2 m, 12-18 m/min) as the most proven all-rounder.',
          cz: 'Pro male truhlarske dilny doporucujeme Pacific+ (5,7 m, 18 m/min) jako kompaktni vstupni model nebo Tornado+ (6,2 m, 12-18 m/min) jako nejosvedcenejsi univerzalni reseni.',
        },
      },
      {
        question: {
          de: 'Koennen OTT-Kantenanleimmaschinen PUR-Klebstoff verarbeiten?',
          en: 'Can OTT edgebanding machines process PUR adhesive?',
          cz: 'Mohou olepovacky hran OTT zpracovavat PUR lepidlo?',
        },
        answer: {
          de: 'Ja, alle OTT-Modelle sind mit dem CombiMelt-System fuer PUR-Verarbeitung erhaeltlich oder nachruestbar. Die Storm+ und TopEdge haben PUR serienmaeassig, bei den anderen Modellen ist es eine Option.',
          en: 'Yes, all OTT models are available with or can be retrofitted with the CombiMelt system for PUR processing. The Storm+ and TopEdge include PUR as standard, while on other models it is an option.',
          cz: 'Ano, vsechny modely OTT jsou k dispozici se systemem CombiMelt pro zpracovani PUR nebo je lze dovybavit. Storm+ a TopEdge maji PUR standardne, u ostatnich modelu je to volba.',
        },
      },
      {
        question: {
          de: 'Wer ist der OTT-Haendler fuer Tschechien und die Slowakei?',
          en: 'Who is the OTT dealer for the Czech Republic and Slovakia?',
          cz: 'Kdo je prodejcem OTT pro Ceskou republiku a Slovensko?',
        },
        answer: {
          de: 'Asamer ist der autorisierte OTT-Haendler fuer Tschechien (CZ), die Slowakei (SK) und Ungarn (HU). Wir bieten Beratung, Verkauf, Installation, Schulung und Ersatzteilservice fuer alle OTT-Produkte.',
          en: 'Asamer is the authorized OTT dealer for the Czech Republic (CZ), Slovakia (SK) and Hungary (HU). We provide consultation, sales, installation, training and spare parts service for all OTT products.',
          cz: 'Asamer je autorizovany prodejce OTT pro Ceskou republiku (CZ), Slovensko (SK) a Madarsko (HU). Poskytujeme poradenstvi, prodej, instalaci, skoleni a servis nahradnich dilu pro vsechny produkty OTT.',
        },
      },
      {
        question: {
          de: 'Was kostet eine OTT-Kantenanleimmaschine?',
          en: 'What does an OTT edgebanding machine cost?',
          cz: 'Kolik stoji olepovacka hran OTT?',
        },
        answer: {
          de: 'Der Preis haengt vom Modell und der Ausstattung ab. Kontaktieren Sie Asamer fuer ein individuelles Angebot. Wir erstellen Ihnen gerne eine massgeschneiderte Konfiguration fuer Ihren Bedarf.',
          en: 'The price depends on the model and equipment. Contact Asamer for an individual quotation. We are happy to create a customized configuration for your needs.',
          cz: 'Cena zavisi na modelu a vybaveni. Kontaktujte Asamer pro individualni nabidku. Radi vam pripravime konfiguraci na miru vasim potrebam.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  gluing                                                             */
  /* ------------------------------------------------------------------ */
  gluing: {
    introExpanded: {
      de: `OTT Paul bietet neben Kantenanleimmaschinen auch spezialisierte Klebetechnologie-Loesungen an, die das Leistungsspektrum jeder Kantenanleimlinie erweitern. Im Mittelpunkt stehen das CombiMelt-Aufschmelzsystem fuer EVA- und PUR-Klebstoffe sowie die revolutionaere bluEdge-HyFuse-Nullfugentechnologie. Beide Systeme sind als Nachruestoption fuer alle OTT-Kantenanleimmaschinen erhaeltlich.

Die Klebetechnologie ist ein entscheidender Faktor fuer die Kantenqualitaet. Waehrend EVA-Klebstoff fuer viele Standardanwendungen ausreicht, bietet PUR-Klebstoff eine wasserbestaendige, hitzebestaendige und deutlich dueennere Leimfuge. Fuer Anwendungen im Kuechenbau, bei Feuchtraummoebeln und hochwertigen Designmoebeln ist PUR heute der anerkannte Standard. Die OTT-bluEdge-Technologie geht noch einen Schritt weiter: Durch laserbasierte Aktivierung der Funktionsschicht entsteht eine vollstaendig unsichtbare Verbindung ohne jeden Klebstoff.

Das CombiMelt-System zeichnet sich durch seine patentierte Top-Driven-Roller-Technologie aus, die einen gleichmaessigen, blasenfreien Leimauftrag gewaehrleistet. Zwei separate Behaelter fuer EVA und PUR ermoeglichen den schnellen Wechsel zwischen beiden Leimtypen. Die komplette Servicestation vereinfacht Reinigung und Wartung erheblich. Asamer ist autorisierter OTT-Haendler fuer CZ, SK und HU und unterstuetzt Sie bei der Auswahl und Integration der optimalen Klebetechnologie fuer Ihre Kantenanleimlinie.`,

      en: `In addition to edgebanding machines, OTT Paul also offers specialized adhesive technology solutions that expand the capabilities of any edgebanding line. At the centre are the CombiMelt melting system for EVA and PUR adhesives and the revolutionary bluEdge HyFuse zero glue line technology. Both systems are available as retrofit options for all OTT edgebanding machines.

Adhesive technology is a critical factor in edge quality. While EVA adhesive is sufficient for many standard applications, PUR adhesive provides a water-resistant, heat-resistant and significantly thinner glue joint. For kitchen furniture, wet-room cabinetry and premium designer furniture applications, PUR is today's recognized standard. OTT's bluEdge technology goes one step further: through laser-based activation of the functional layer, a completely invisible connection is created without any adhesive.

The CombiMelt system features patented Top-Driven-Roller technology that ensures uniform, bubble-free glue application. Two separate containers for EVA and PUR enable fast switching between both adhesive types. The complete service station significantly simplifies cleaning and maintenance. Asamer is the authorized OTT dealer for CZ, SK and HU and supports you in selecting and integrating the optimal adhesive technology for your edgebanding line.`,

      cz: `OTT Paul nabizi krome olepovacek hran take specializovana reseni lepici technologie, ktera rozsirtuji moznosti kazde olepovaci linky. V centru pozornosti stoji tavici system CombiMelt pro EVA a PUR lepidla a revolucni technologie nulove spary bluEdge HyFuse. Oba systemy jsou k dispozici jako moznost dovybaveni pro vsechny olepovacky hran OTT.

Lepici technologie je rozhodujicim faktorem kvality hran. Zatimco EVA lepidlo postacuje pro mnoho standardnich aplikaci, PUR lepidlo poskytuje vodetesnou, teplotne odolnou a vyrazne tensi lepenou sparu. Pro kuchynsky nabytek, nabytek do vlhkych prostor a premiovy designovy nabytek je PUR dnes uznavanym standardem. Technologie bluEdge od OTT jde jeste o krok dale: laserovou aktivaci funkcni vrstvy vznikne zcela neviditelne spojeni bez jakehokoliv lepidla.

System CombiMelt se vyznacuje patentovanou technologii Top-Driven-Roller, ktera zajisuji rovnomerny nanost lepidla bez bublin. Dve oddelene nadoby pro EVA a PUR umoznuji rychle prepinani mezi obema typy lepidel. Kompletni servisni stanice vyrazne zjednodusuje cisteni a udrzbu. Asamer je autorizovany prodejce OTT pro CZ, SK a HU a podpoeuji vas pri vyberu a integraci optimalni lepici technologie pro vasi olepovaci linku.`,
    },

    sections: [
      {
        heading: {
          de: 'EVA vs. PUR vs. Nullfuge: Welche Klebetechnologie wann?',
          en: 'EVA vs. PUR vs. zero glue line: which adhesive technology when?',
          cz: 'EVA vs. PUR vs. nulova spara: ktera lepici technologie kdy?',
        },
        body: {
          de: 'EVA eignet sich fuer Standardmoebel in trockenen Umgebungen. PUR ist die Wahl fuer wasserfeste Verbindungen im Kuechenbau und bei Feuchtraummoebeln. bluEdge HyFuse liefert die hoechste aesthetische Qualitaet mit vollstaendig unsichtbarer Fuge fuer Premiummoebel. Im CombiMelt-System laesst sich schnell zwischen EVA und PUR wechseln.',
          en: 'EVA is suitable for standard furniture in dry environments. PUR is the choice for waterproof joints in kitchen furniture and wet-room cabinetry. bluEdge HyFuse delivers the highest aesthetic quality with a completely invisible joint for premium furniture. The CombiMelt system allows quick switching between EVA and PUR.',
          cz: 'EVA je vhodna pro standardni nabytek v suchych prostredich. PUR je volba pro vodetesne spoje ve vyrobe kuchyni a nabytku do vlhkych prostor. bluEdge HyFuse dodava nejvyssi estetickou kvalitu se zcela neviditelnou sparou pro premiovy nabytek. V systemu CombiMelt lze rychle prepinat mezi EVA a PUR.',
        },
      },
      {
        heading: {
          de: 'PUR-Klebstoff: Vorteile und Anwendung',
          en: 'PUR adhesive: advantages and application',
          cz: 'PUR lepidlo: vyhody a pouziti',
        },
        body: {
          de: 'PUR (Polyurethan-Reaktivklebstoff) haertet durch Reaktion mit Luftfeuchtigkeit aus und bildet eine dauerhafte, wasserbestaendige Verbindung. Die Leimfuge ist deutlich duenner als bei EVA und nahezu unsichtbar. PUR ist hitzebestaendiger als EVA und quillt nicht bei Feuchtigkeit auf. Im Kuechenbau und bei Labormoebeln ist PUR heute Standard.',
          en: 'PUR (polyurethane reactive adhesive) cures by reacting with atmospheric moisture, forming a permanent, water-resistant bond. The glue joint is significantly thinner than EVA and virtually invisible. PUR is more heat-resistant than EVA and does not swell with moisture. In kitchen and laboratory furniture, PUR is now standard.',
          cz: 'PUR (polyuretanove reaktivni lepidlo) tvrdne reakci se vzdusnou vlhkosti a vytvari trvaly, vodetesny spoj. Lepena spara je vyrazne tensi nez u EVA a prakticky neviditelna. PUR je odolnejsi vuci teplu nez EVA a pri vlhkosti nenaboba. Ve vyrobe kuchyni a laboratorniho nabytku je PUR dnes standardem.',
        },
      },
      {
        heading: {
          de: 'bluEdge HyFuse: Die Zukunft der Kantenverklebung',
          en: 'bluEdge HyFuse: the future of edge bonding',
          cz: 'bluEdge HyFuse: budoucnost lepeni hran',
        },
        body: {
          de: 'Die bluEdge-Nullfugentechnologie mit HyFuse-Laser ersetzt den Klebstoff vollstaendig. Die Funktionsschicht der Kante wird thermisch aktiviert und mit der Platte verschmolzen. Das Ergebnis ist eine monolithische Oberflaeche ohne jede sichtbare Trennlinie. Diese Technologie ist bei allen OTT-Maschinen nachruestbar und oeffnet Betrieben den Weg ins Premium-Segment.',
          en: 'The bluEdge zero joint technology with HyFuse laser completely replaces adhesive. The functional layer of the edge is thermally activated and fused to the board. The result is a monolithic surface without any visible separation line. This technology is retrofittable to all OTT machines, opening the path to the premium segment for workshops.',
          cz: 'Technologie nulove spary bluEdge s laserem HyFuse zcela nahrazuje lepidlo. Funkcni vrstva hrany je termicky aktivovana a spojena s deskou. Vysledkem je monoliticky povrch bez jakekoli viditelne delici linie. Tato technologie je dodatecne montovatelna na vsechny stroje OTT a otevira provozum cestu do premiovehpo segmentu.',
        },
      },
    ],

    faq: [
      {
        question: {
          de: 'Was ist besser fuer Kuechenmoebel: PUR oder EVA?',
          en: 'Which is better for kitchen furniture: PUR or EVA?',
          cz: 'Co je lepsi pro kuchynsky nabytek: PUR nebo EVA?',
        },
        answer: {
          de: 'Fuer Kuechenmoebel empfehlen wir PUR-Klebstoff. Er bildet wasserfeste, hitzebestaendige Fugen, die auch in der feuchten Kuechenumgebung dauerhaft halten. EVA kann bei Dampf und Feuchtigkeit aufquellen.',
          en: 'For kitchen furniture, we recommend PUR adhesive. It forms waterproof, heat-resistant joints that hold permanently even in the humid kitchen environment. EVA can swell with steam and moisture.',
          cz: 'Pro kuchynsky nabytek doporucujeme PUR lepidlo. Vytvari vodetesne, teplotne odolne spoje, ktere drzi trvale i ve vlhkem kuchynskem prostredi. EVA muze pri pare a vlhkosti nabobtnat.',
        },
      },
      {
        question: {
          de: 'Kann das CombiMelt-System nachgeruestet werden?',
          en: 'Can the CombiMelt system be retrofitted?',
          cz: 'Lze system CombiMelt dovybavit?',
        },
        answer: {
          de: 'Ja, das CombiMelt-System kann an alle OTT-Kantenanleimmaschinen nachgeruestet werden. Asamer fuehrt die Nachruestung in CZ, SK und HU durch.',
          en: 'Yes, the CombiMelt system can be retrofitted to all OTT edgebanding machines. Asamer carries out retrofitting in CZ, SK and HU.',
          cz: 'Ano, system CombiMelt lze dovybavit na vsechny olepovacky hran OTT. Asamer provadi dovybaveni v CZ, SK a HU.',
        },
      },
      {
        question: {
          de: 'Wie funktioniert die Nullfugentechnologie bluEdge?',
          en: 'How does the bluEdge zero glue line technology work?',
          cz: 'Jak funguje technologie nulove spary bluEdge?',
        },
        answer: {
          de: 'Bei bluEdge HyFuse wird die Funktionsschicht der Kante per Laser thermisch aktiviert und direkt mit der Platte verschmolzen. Es wird kein Klebstoff verwendet - die Verbindung ist vollstaendig unsichtbar.',
          en: 'With bluEdge HyFuse, the functional layer of the edge is thermally activated by laser and fused directly to the board. No adhesive is used - the connection is completely invisible.',
          cz: 'U bluEdge HyFuse je funkcni vrstva hrany termicky aktivovana laserem a primo spojena s deskou. Nepouziva se zadne lepidlo - spojeni je zcela neviditelne.',
        },
      },
      {
        question: {
          de: 'Welche Kantenhersteller liefern bluEdge-kompatible Kanten?',
          en: 'Which edge manufacturers supply bluEdge-compatible edges?',
          cz: 'Kteri vyrobci hran dodavaji hrany kompatibilni s bluEdge?',
        },
        answer: {
          de: 'Alle fuehrenden Kantenhersteller wie Rehau, Doellken und Ostermann bieten Kanten mit laserreaktiver Funktionsschicht an. Asamer berart Sie gerne zur Materialauswahl.',
          en: 'All leading edge manufacturers such as Rehau, Doellken and Ostermann offer edges with laser-reactive functional layers. Asamer is happy to advise you on material selection.',
          cz: 'Vsichni predni vyrobci hran jako Rehau, Doellken a Ostermann nabizeji hrany s laserove reaktivni funkcni vrstvou. Asamer vam rad poradi s vyberem materialu.',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  return                                                             */
  /* ------------------------------------------------------------------ */
  return: {
    introExpanded: {
      de: `Rueckfuehr- und Handlingsysteme sind ein wesentlicher Bestandteil jeder effizienten Kantenanleimlinie. OTT Paul bietet mit TRANScompact, TRANSlift und TRANSedge drei Rueckfuehrsysteme an, die auf unterschiedliche Anforderungen zugeschnitten sind. Vom kompakten Werkstattruecklauf bis zum hochgetakteten Industriesystem findet jeder Betrieb die passende Loesung.

Ein Rueckfuehrsystem ermoeglicht den Einmann-Betrieb der Kantenanleimmaschine: Der Bediener legt das Werkstueck ein, die Maschine bearbeitet die Kante, und das Rueckfuehrsystem transportiert das fertige Teil automatisch zurueck zum Bediener. Ohne Rueckfuehrsystem wird ein zweiter Mitarbeiter zum Abnehmen der Teile am Maschinenauslauf benoetigt. Die Investition in ein Rueckfuehrsystem amortisiert sich daher schnell ueber die eingesparten Personalkosten.

OTT bietet drei Systemvarianten: TRANScompact (kompakt, mit Drehfunktion, fuer Pacific+ und Tornado+), TRANSlift (vertikale Rueckfuehrung, platzsparend, fuer Storm+, StrongEdge, TopEdge) und TRANSedge (spezialisiert auf Kantenanleimlinien, hoechste Taktrate, fuer Storm+ und TopEdge). Asamer ist autorisierter OTT-Haendler fuer CZ, SK und HU und berart Sie zur optimalen Kombination aus Kantenanleimmaschine und Rueckfuehrsystem fuer Ihren Betrieb.`,

      en: `Return and handling systems are an essential component of any efficient edgebanding line. OTT Paul offers three return systems with TRANScompact, TRANSlift and TRANSedge, each tailored to different requirements. From compact workshop return to high-cycle industrial systems, every operation finds the right solution.

A return system enables single-operator running of the edgebanding machine: the operator loads the workpiece, the machine processes the edge, and the return system automatically transports the finished part back to the operator. Without a return system, a second employee is needed to remove parts at the machine outfeed. The investment in a return system therefore pays for itself quickly through saved labour costs.

OTT offers three system variants: TRANScompact (compact, with rotation function, for Pacific+ and Tornado+), TRANSlift (vertical return, space-saving, for Storm+, StrongEdge, TopEdge) and TRANSedge (specialized for edgebanding lines, highest cycle rate, for Storm+ and TopEdge). Asamer is the authorized OTT dealer for CZ, SK and HU and advises you on the optimal combination of edgebanding machine and return system for your operation.`,

      cz: `Vratne a manipulacni systemy jsou nezbytnou soucasti kazde efektivni olepovaci linky. OTT Paul nabizi se systemy TRANScompact, TRANSlift a TRANSedge tri vratne systemy prizpusobene ruznym pozadavkum. Od kompaktniho dilenskeho navratu az po vysocetaktovany prumyslovy system najde kazdy provoz spravne reseni.

Vratny system umoznuje jednooperatorsky provoz olepovacky hran: operator vlozi obrobek, stroj zpracuje hranu a vratny system automaticky prepravi hotovy dil zpet k operatorovi. Bez vratneho systemu je potreba druhy zamestnanec pro odebirani dilu na vystupu stroje. Investice do vratneho systemu se proto rychle vrati diky usporam na mzdovych nakladech.

OTT nabizi tri varianty systemu: TRANScompact (kompaktni, s funkci otaceni, pro Pacific+ a Tornado+), TRANSlift (vertikalni vraceni, prostorove usporne, pro Storm+, StrongEdge, TopEdge) a TRANSedge (specializovany na olepovaci linky, nejvyssi taktovaci frekvence, pro Storm+ a TopEdge). Asamer je autorizovany prodejce OTT pro CZ, SK a HU a radi vam poradi s optimalni kombinaci olepovacky hran a vratneho systemu pro vas provoz.`,
    },

    sections: [
      {
        heading: {
          de: 'Drei Rueckfuehrsysteme fuer drei Anforderungsprofile',
          en: 'Three return systems for three requirement profiles',
          cz: 'Tri vratne systemy pro tri profily pozadavku',
        },
        body: {
          de: 'TRANScompact ist das kompakte Einstiegssystem mit Drehfunktion fuer kleinere Werkstaetten. TRANSlift nutzt den vertikalen Raum und spart Hallenflaeche. TRANSedge ist auf maximale Taktrate in industriellen Kantenanleimlinien optimiert. Jedes System kann mit allen OTT-Kantenanleimmaschinen kombiniert werden.',
          en: 'TRANScompact is the compact entry system with rotation for smaller workshops. TRANSlift uses vertical space and saves floor area. TRANSedge is optimized for maximum cycle rate in industrial edgebanding lines. Each system can be combined with all OTT edgebanding machines.',
          cz: 'TRANScompact je kompaktni vstupni system s otacenim pro mensi dilny. TRANSlift vyuziva vertikalni prostor a setri podlahovou plochu. TRANSedge je optimalizovan pro maximalni taktovaci frekvenci v prumyslovych olepovacich linkach. Kazdy system lze kombinovat se vsemi olepovackami hran OTT.',
        },
      },
      {
        heading: {
          de: 'Einmann-Betrieb und Amortisation',
          en: 'Single-operator running and return on investment',
          cz: 'Jednooperatorsky provoz a navratnost investice',
        },
        body: {
          de: 'Der groesste wirtschaftliche Vorteil eines Rueckfuehrsystems ist die Einsparung eines zweiten Bedieners. Bei durchschnittlichen Personalkosten amortisiert sich ein TRANScompact innerhalb weniger Monate. Bei groeosseren Systemen wie TRANSlift und TRANSedge traegt die gesteigerte Produktivitaet zusaetzlich zur schnellen Amortisation bei.',
          en: 'The greatest economic advantage of a return system is the saving of a second operator. At average labour costs, a TRANScompact pays for itself within a few months. For larger systems like TRANSlift and TRANSedge, increased productivity further contributes to rapid return on investment.',
          cz: 'Nejvetsi ekonomickou vyhodou vratneho systemu je uspora druheho operatora. Při prumernych mzdovych nakladech se TRANScompact vrati behem nekolika mesicu. U vetsich systemu jako TRANSlift a TRANSedge navic zvysena produktivita prispiva k rychle navratnosti investice.',
        },
      },
      {
        heading: {
          de: 'Empfohlene Kombinationen mit OTT-Maschinen',
          en: 'Recommended combinations with OTT machines',
          cz: 'Doporucene kombinace se stroji OTT',
        },
        body: {
          de: 'Pacific+ und Tornado+ harmonieren am besten mit TRANScompact. FlexEdge kann mit TRANScompact oder TRANSlift kombiniert werden. Storm+ und StrongEdge empfehlen wir mit TRANSlift oder TRANSedge. Die TopEdge entfaltet ihr volles Potenzial in Kombination mit dem TRANSedge fuer maximale Taktrate.',
          en: 'Pacific+ and Tornado+ pair best with TRANScompact. FlexEdge can be combined with TRANScompact or TRANSlift. For Storm+ and StrongEdge, we recommend TRANSlift or TRANSedge. The TopEdge achieves its full potential in combination with TRANSedge for maximum cycle rate.',
          cz: 'Pacific+ a Tornado+ se nejlepe sladí s TRANScompact. FlexEdge lze kombinovat s TRANScompact nebo TRANSlift. Pro Storm+ a StrongEdge doporucujeme TRANSlift nebo TRANSedge. TopEdge rozvineme svuj plny potencial v kombinaci s TRANSedge pro maximalni taktovaci frekvenci.',
        },
      },
      {
        heading: {
          de: 'Planung und Integration durch Asamer',
          en: 'Planning and integration by Asamer',
          cz: 'Planovani a integrace od Asamer',
        },
        body: {
          de: 'Die Wahl des richtigen Rueckfuehrsystems haengt von vielen Faktoren ab: Hallengroesse, Deckenhoehe, Maschinenmodell, Stueckzahlbedarf und Budget. Asamer analysiert Ihre raeumlichen und produktionstechnischen Voraussetzungen und empfiehlt die optimale Loesung. Unser Service umfasst Planung, Lieferung, Installation und Inbetriebnahme in CZ, SK und HU.',
          en: 'Choosing the right return system depends on many factors: hall size, ceiling height, machine model, volume requirements and budget. Asamer analyses your spatial and production conditions and recommends the optimal solution. Our service covers planning, delivery, installation and commissioning in CZ, SK and HU.',
          cz: 'Vyber spravneho vratneho systemu zavisi na mnoha faktorech: velikost haly, vyska stropu, model stroje, objem vyroby a rozpocet. Asamer analyzuje vase prostorove a vyrobni podminky a doporuci optimalni reseni. Nas servis zahrnuje planovani, dodani, instalaci a uvedeni do provozu v CZ, SK a HU.',
        },
      },
    ],

    faq: [
      {
        question: {
          de: 'Brauche ich ein Rueckfuehrsystem fuer meine Kantenanleimmaschine?',
          en: 'Do I need a return system for my edgebanding machine?',
          cz: 'Potrebuji vratny system pro svou olepovacku hran?',
        },
        answer: {
          de: 'Ein Rueckfuehrsystem ist nicht zwingend noetig, spart aber einen zweiten Bediener und steigert die Produktivitaet erheblich. Fuer die meisten Betriebe amortisiert sich die Investition schnell durch eingesparte Personalkosten.',
          en: 'A return system is not mandatory but saves a second operator and significantly increases productivity. For most operations, the investment pays for itself quickly through saved labour costs.',
          cz: 'Vratny system neni nezbytne nutny, ale setri druheho operatora a vyrazne zvysuje produktivitu. Pro vetsinu provozu se investice rychle vrati diky usporenim mzdovym nakladum.',
        },
      },
      {
        question: {
          de: 'Welches Rueckfuehrsystem passt zu meiner OTT-Maschine?',
          en: 'Which return system fits my OTT machine?',
          cz: 'Jaky vratny system se hodi k memu stroji OTT?',
        },
        answer: {
          de: 'Fuer Pacific+ und Tornado+ empfehlen wir TRANScompact. Fuer FlexEdge, Storm+ und StrongEdge eignen sich TRANSlift oder TRANSedge. Fuer TopEdge empfehlen wir TRANSedge fuer maximale Taktrate oder TRANSlift fuer Platzersparnis.',
          en: 'For Pacific+ and Tornado+, we recommend TRANScompact. For FlexEdge, Storm+ and StrongEdge, TRANSlift or TRANSedge are suitable. For TopEdge, we recommend TRANSedge for maximum cycle rate or TRANSlift for space saving.',
          cz: 'Pro Pacific+ a Tornado+ doporucujeme TRANScompact. Pro FlexEdge, Storm+ a StrongEdge jsou vhodne TRANSlift nebo TRANSedge. Pro TopEdge doporucujeme TRANSedge pro maximalni taktovaci frekvenci nebo TRANSlift pro usporu mista.',
        },
      },
      {
        question: {
          de: 'Wie schnell amortisiert sich ein OTT-Rueckfuehrsystem?',
          en: 'How quickly does an OTT return system pay for itself?',
          cz: 'Jak rychle se OTT vratny system vrati?',
        },
        answer: {
          de: 'Die Amortisationsdauer haengt von den Personalkosten und der Auslastung ab. Bei einem TRANScompact rechnet sich die Investition typischerweise innerhalb weniger Monate durch die Einsparung eines zweiten Bedieners. Asamer erstellt Ihnen gerne eine individuelle Wirtschaftlichkeitsberechnung.',
          en: 'The payback period depends on labour costs and utilization. For a TRANScompact, the investment typically pays for itself within a few months by saving a second operator. Asamer is happy to prepare an individual profitability calculation for you.',
          cz: 'Doba navratnosti zavisi na mzdovych nakladech a vytizeni. U TRANScompact se investice typicky vrati behem nekolika mesicu diky uspore druheho operatora. Asamer vam rad pripravi individualni vypocet ekonomicnosti.',
        },
      },
    ],
  },
};
