/**
 * Verkaufs- und Lieferbedingungen der Asamer Technologie GmbH, Fassung vom 01.07.2023.
 * Basis ist die Fassung vom 15.03.2019 ("AGBs OGS 2019 deutsch.pdf"); Ziffer 7 b) ist an die
 * tschechische Fassung „Podmínky prodeje a dodání" vom 1. 7. 2023 angeglichen (2/3 bei
 * Versandbereitschaft statt 1/3 + Rest nach einem Monat). Beide PDFs liegen unter public/downloads/.
 *
 * Rechtsverbindlich ist ausschließlich der deutsche Wortlaut (Ziffer 13: Vertragssprache
 * Deutsch) — er ist 1:1 aus dem PDF übernommen, alte Rechtschreibung inklusive.
 * `en` und `cz` sind unverbindliche Lesefassungen.
 */

export type TermsVersion = 'de' | 'en' | 'cz';

export type TermsText = Record<TermsVersion, string>;

export type TermsClause = {
  label?: string;
  paragraphs: TermsText[];
};

export type TermsSection = {
  num: string;
  title: TermsText;
  clauses: TermsClause[];
};

export const TERMS_VERSION_DATE = '01.07.2023';

/** Verbindliche deutsche Fassung und tschechische Fassung als PDF. */
export const TERMS_PDF_PATHS: Partial<Record<TermsVersion, string>> = {
  de: '/downloads/asamer-verkaufs-und-lieferbedingungen-2023.pdf',
  cz: '/downloads/asamer-podminky-prodeje-a-dodani-2023.pdf',
};

const t = (de: string, en: string, cz: string): TermsText => ({ de, en, cz });

export const TERMS_OF_SALE: TermsSection[] = [
  {
    num: '1.',
    title: t('Allgemeines', 'General', 'Obecná ustanovení'),
    clauses: [
      {
        paragraphs: [
          t(
            'Allen Angeboten und Vereinbarungen über unsere Lieferungen und Leistungen liegen ausschließlich diese allgemeinen Verkaufs- und Lieferbedingungen zugrunde. Sie gelten durch Auftragserteilung oder Annahme der Lieferung als anerkannt. Abweichende Bedingungen des Bestellers, die wir nicht ausdrücklich schriftlich anerkennen, sind für uns unverbindlich. Die Aufhebung oder Änderung einzelner Bedingungen berührt die Gültigkeit unserer übrigen Verkaufs- und Lieferbedingungen nicht. Mündliche oder fernmündliche Vereinbarungen bedürfen zu ihrer Verbindlichkeit unserer schriftlichen Bestätigung, ebenso Vereinbarungen mit unseren Vertretern oder Mitarbeitern.',
            'All offers and agreements concerning our deliveries and services are based exclusively on these general terms of sale and delivery. They are deemed accepted upon placing an order or accepting the delivery. Deviating terms of the Purchaser which we have not expressly acknowledged in writing are not binding on us. The cancellation or amendment of individual terms does not affect the validity of our remaining terms of sale and delivery. Oral or telephone agreements require our written confirmation to be binding; the same applies to agreements with our representatives or employees.',
            'Všechny nabídky a ujednání o našich dodávkách a službách se řídí výhradně těmito všeobecnými prodejními a dodacími podmínkami. Považují se za uznané zadáním objednávky nebo převzetím dodávky. Odchylné podmínky objednatele, které jsme výslovně písemně neuznali, pro nás nejsou závazné. Zrušení nebo změna jednotlivých podmínek nemá vliv na platnost našich ostatních prodejních a dodacích podmínek. Ústní nebo telefonická ujednání vyžadují ke své závaznosti naše písemné potvrzení; totéž platí pro ujednání s našimi zástupci nebo zaměstnanci.',
          ),
        ],
      },
    ],
  },
  {
    num: '2.',
    title: t('Angebote, Auftragsbestätigung', 'Offers, Order Confirmation', 'Nabídky, potvrzení objednávky'),
    clauses: [
      {
        paragraphs: [
          t(
            'Sämtliche Angebote verstehen sich freibleibend. Ein Auftrag gilt erst dann als erteilt, wenn er vom Lieferer schriftlich bestätigt ist. Änderungen, Abänderungen oder mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung des Lieferers. Zwischenverkauf bleibt vorbehalten.',
            'All offers are subject to change and non-binding. An order is only deemed placed once it has been confirmed in writing by the Supplier. Changes, amendments or oral collateral agreements require the Supplier’s written confirmation to be effective. Prior sale reserved.',
            'Všechny nabídky jsou nezávazné. Objednávka se považuje za zadanou teprve tehdy, když ji dodavatel písemně potvrdí. Změny, úpravy nebo ústní vedlejší ujednání vyžadují ke své účinnosti písemné potvrzení dodavatele. Mezitímní prodej vyhrazen.',
          ),
          t(
            'Die ersten Angebote werden in der Regel kostenlos abgegeben. Weitere Angebote und Entwurfsarbeiten werden nur unentgeltlich ausgeführt, wenn der Liefervertrag rechtswirksam zustande kommt und bleibt.',
            'Initial offers are generally provided free of charge. Further offers and design work are only carried out free of charge if the supply contract is validly concluded and remains in force.',
            'První nabídky se zpravidla poskytují bezplatně. Další nabídky a projekční práce se provádějí bezplatně pouze tehdy, pokud je dodací smlouva právně účinně uzavřena a zůstane v platnosti.',
          ),
          t(
            'Die zu dem Angebot gehörigen Unterlagen wie Abbildungen, Zeichnungen, Gewichts- und Maßangaben sind nur annähernd maßgebend, soweit sie nicht ausdrücklich als verbindlich bezeichnet sind. An Kostenvoranschlägen, Zeichnungen und anderen Unterlagen behält sich der Lieferer Eigentums- und Urheberrecht vor: sie dürfen Dritten nicht zugänglich gemacht werden. Der Lieferer ist verpflichtet, vom Abnehmer als vertraulich bezeichnete Pläne nur mit dessen Zustimmung Dritten zugänglich zu machen.',
            'The documents belonging to the offer, such as illustrations, drawings, weights and dimensions, are only approximately authoritative unless they are expressly designated as binding. The Supplier reserves ownership and copyright in cost estimates, drawings and other documents; they may not be made accessible to third parties. The Supplier undertakes to make plans designated as confidential by the customer accessible to third parties only with the customer’s consent.',
            'Podklady náležející k nabídce, jako jsou vyobrazení, výkresy, údaje o hmotnosti a rozměrech, jsou směrodatné pouze přibližně, pokud nejsou výslovně označeny jako závazné. K rozpočtům, výkresům a jiným podkladům si dodavatel vyhrazuje vlastnické a autorské právo; nesmějí být zpřístupněny třetím osobám. Dodavatel se zavazuje zpřístupnit plány, které odběratel označil jako důvěrné, třetím osobám pouze s jeho souhlasem.',
          ),
          t(
            'Für den Umfang der Lieferung ist die schriftliche Auftragsbestätigung des Lieferers maßgebend. Nebenabreden und Änderungen bedürfen der schriftlichen Bestätigung des Lieferers. In der Auftragsbestätigung etwaig enthaltene Abbildungen stellen den zur Ausführung gelangenden Auftrag nur annähernd dar. Diese Abbildungen kennzeichnen lediglich den Vertragsgegenstand und stellen keine Eigenschaftszusicherung dar.',
            'The Supplier’s written order confirmation is authoritative for the scope of delivery. Collateral agreements and changes require the Supplier’s written confirmation. Any illustrations contained in the order confirmation represent the order to be executed only approximately. These illustrations merely identify the subject matter of the contract and do not constitute a warranty of characteristics.',
            'Pro rozsah dodávky je rozhodující písemné potvrzení objednávky dodavatelem. Vedlejší ujednání a změny vyžadují písemné potvrzení dodavatele. Vyobrazení případně obsažená v potvrzení objednávky znázorňují prováděnou zakázku pouze přibližně. Tato vyobrazení pouze označují předmět smlouvy a nepředstavují ujištění o vlastnostech.',
          ),
        ],
      },
    ],
  },
  {
    num: '3.',
    title: t('Lieferzeit', 'Delivery Time', 'Dodací lhůta'),
    clauses: [
      {
        label: 'a)',
        paragraphs: [
          t(
            'Die Lieferfrist beginnt mit der Absendung der Auftragsbestätigung, jedoch nicht vor der Beibringung sämtlicher vom Besteller zu beschaffenden Unterlagen, Genehmigungen, Freigaben sowie vor Eingang einer vereinbarten Anzahlung. Sofern der Besteller nicht binnen 4 Wochen nach deren Fälligkeit eine vereinbarte Anzahlung leistet, so sind wir berechtigt, durch einseitige Erklärung vom Vertrag zurückzutreten. Diesfalls hat uns der Besteller 10 % der Auftragssumme als Vertragsstrafe binnen 14 Tagen ab Rücktritt zu bezahlen, jedenfalls aber den tatsächlich entstandenen Schaden binnen gleicher Frist zu ersetzen.',
            'The delivery period begins upon dispatch of the order confirmation, but not before the Purchaser has provided all documents, permits and approvals it is required to obtain, and not before receipt of an agreed down payment. If the Purchaser fails to make an agreed down payment within 4 weeks of its due date, we are entitled to withdraw from the contract by unilateral declaration. In this case, the Purchaser shall pay us 10 % of the order value as a contractual penalty within 14 days of the withdrawal, but shall in any event compensate the damage actually incurred within the same period.',
            'Dodací lhůta začíná odesláním potvrzení objednávky, nikoli však dříve, než objednatel předá veškeré podklady, povolení a schválení, které je povinen opatřit, a než obdržíme sjednanou zálohu. Pokud objednatel neuhradí sjednanou zálohu do 4 týdnů od její splatnosti, jsme oprávněni od smlouvy jednostranným prohlášením odstoupit. V takovém případě je objednatel povinen nám do 14 dnů od odstoupení zaplatit smluvní pokutu ve výši 10 % hodnoty zakázky, v každém případě však ve stejné lhůtě nahradit skutečně vzniklou škodu.',
          ),
          t(
            'Bei Bestellungen auf Abruf gilt mangels anderweitiger Vereinbarung, daß der Abruf innerhalb von 12 Monaten ab Auftragsbestätigung zu erfolgen hat.',
            'For call-off orders, unless otherwise agreed, the call-off must take place within 12 months of the order confirmation.',
            'U objednávek na odvolávku platí, není-li sjednáno jinak, že odvolávka musí proběhnout do 12 měsíců od potvrzení objednávky.',
          ),
        ],
      },
      {
        label: 'b)',
        paragraphs: [
          t(
            'Die Lieferfrist ist eingehalten, wenn bis zu ihrem Ablauf der Liefergegenstand das Werk verlassen hat oder die Versandbereitschaft mitgeteilt ist.',
            'The delivery period is deemed to have been met if, by its expiry, the delivery item has left the works or readiness for dispatch has been notified.',
            'Dodací lhůta je dodržena, pokud do jejího uplynutí předmět dodávky opustil závod nebo byla oznámena připravenost k expedici.',
          ),
        ],
      },
      {
        label: 'c)',
        paragraphs: [
          t(
            'Die Lieferfrist verlängert sich angemessen bei Eintritt unvorhergesehener Hindernisse, die außerhalb des Willens des Lieferers liegen – gleichviel ob im Werk des Lieferers oder bei seinen Unterlieferern eingetreten – zum Beispiel Betriebsstörungen, Ausschusswerden, Verzögerungen in der Anlieferung wesentlicher Roh- und Baustoffe, Ausfall eines in einer Schlüsselposition tätigen Mitarbeiters, Streik und Aussperrung soweit solche Hindernisse nachweislich auf die Fertigstellung oder Ablieferung des Liefergegenstandes von erheblichem Einfluß sind.',
            'The delivery period shall be extended appropriately in the event of unforeseen obstacles beyond the Supplier’s control – irrespective of whether they occur at the Supplier’s works or at its subcontractors – for example operational disruptions, production rejects, delays in the delivery of essential raw and building materials, the absence of an employee in a key position, strikes and lockouts, insofar as such obstacles demonstrably have a significant influence on the completion or delivery of the delivery item.',
            'Dodací lhůta se přiměřeně prodlužuje při vzniku nepředvídaných překážek, které leží mimo vůli dodavatele – bez ohledu na to, zda nastaly v závodě dodavatele nebo u jeho subdodavatelů – například provozní poruchy, vznik zmetků, zpoždění v dodávkách podstatných surovin a stavebních materiálů, výpadek pracovníka na klíčové pozici, stávka a výluka, pokud tyto překážky prokazatelně podstatně ovlivňují dokončení nebo dodání předmětu dodávky.',
          ),
          t(
            'Die vorbezeichneten Umstände sind auch dann vom Lieferer nicht zu vertreten, wenn sie während eines bereits vorliegenden Verzugs entstehen. Beginn und Ende derartiger Hindernisse wird in wichtigen Fällen der Lieferer dem Besteller baldmöglichst mitteilen.',
            'The Supplier is not responsible for the aforementioned circumstances even if they arise during an existing delay. In important cases, the Supplier will notify the Purchaser of the beginning and end of such obstacles as soon as possible.',
            'Dodavatel neodpovídá za výše uvedené okolnosti ani tehdy, pokud nastanou během již existujícího prodlení. Začátek a konec takových překážek dodavatel v důležitých případech co nejdříve oznámí objednateli.',
          ),
        ],
      },
      {
        label: 'd)',
        paragraphs: [
          t(
            'Wenn dem Besteller wegen einer Verzögerung, die infolge eigenen Verschuldens des Lieferers entstanden ist, Schaden erwächst, so ist er unter Ausschluß weiterer Ansprüche berechtigt, eine Verzugsentschädigung zu fordern. Sie beträgt für jeden vollen Monat der Verspätung nach Ablauf einer vom Besteller gesetzten Nachfrist gemäß Ziffer 10b dieser Bedingungen 0,5 %, im ganzen aber höchstens 3 % vom Werte desjenigen Teiles der Gesamtlieferung, der infolge der Verspätung nicht rechtzeitig oder nicht zweckdienlich benutzt werden kann.',
            'If the Purchaser suffers damage as a result of a delay caused by the Supplier’s own fault, the Purchaser is entitled, to the exclusion of further claims, to demand compensation for delay. For each full month of delay after expiry of a grace period set by the Purchaser pursuant to clause 10(b) of these terms, it amounts to 0.5 %, but in total no more than 3 %, of the value of that part of the total delivery which cannot be used in time or as intended as a result of the delay.',
            'Vznikne-li objednateli škoda v důsledku zpoždění, které vzniklo vlastním zaviněním dodavatele, je objednatel s vyloučením dalších nároků oprávněn požadovat odškodnění za prodlení. To činí za každý celý měsíc prodlení po uplynutí dodatečné lhůty stanovené objednatelem podle bodu 10b těchto podmínek 0,5 %, celkem však nejvýše 3 % z hodnoty té části celkové dodávky, kterou v důsledku zpoždění nelze včas nebo účelně používat.',
          ),
        ],
      },
      {
        label: 'e)',
        paragraphs: [
          t(
            'Wird der Versand auf Wunsch des Bestellers verzögert, so werden ihm, beginnend einen Monat nach Anzeige der Versandbereitschaft, die durch die Lagerung entstandenen Kosten, bei Lagerung im Werk des Lieferers mindestens jedoch 0,5 % des Rechnungsbetrages für jeden Monat berechnet. Der Lieferer ist jedoch berechtigt, nach Setzung und fruchtlosem Verlauf einer angemessenen Frist anderweitig über den Liefergegenstand zu verfügen und den Besteller mit angemessen verlängerter Frist zu beliefern.',
            'If dispatch is delayed at the Purchaser’s request, the Purchaser shall be charged, beginning one month after notification of readiness for dispatch, the costs incurred by storage, but in the case of storage at the Supplier’s works at least 0.5 % of the invoice amount for each month. However, after setting a reasonable deadline which expires without result, the Supplier is entitled to dispose of the delivery item otherwise and to supply the Purchaser within an appropriately extended period.',
            'Je-li expedice zdržena na přání objednatele, budou mu počínaje jedním měsícem po oznámení připravenosti k expedici účtovány náklady vzniklé skladováním, při skladování v závodě dodavatele však nejméně 0,5 % fakturované částky za každý měsíc. Dodavatel je však oprávněn po stanovení přiměřené lhůty a jejím marném uplynutí s předmětem dodávky naložit jinak a dodat objednateli v přiměřeně prodloužené lhůtě.',
          ),
        ],
      },
      {
        label: 'f)',
        paragraphs: [
          t(
            'Der Lieferer ist berechtigt, nach seinem Ermessen Teillieferungen zu erbringen und in Rechnung zu stellen, so daß der, der Teillieferung entsprechende Teil des Preises, fällig wird. Anzahlungen werden anteilig auf die einzelnen Teillieferungen verrechnet.',
            'The Supplier is entitled, at its discretion, to make partial deliveries and to invoice them, so that the part of the price corresponding to the partial delivery becomes due. Down payments are offset proportionately against the individual partial deliveries.',
            'Dodavatel je oprávněn podle svého uvážení uskutečňovat dílčí dodávky a fakturovat je, takže se stává splatnou část ceny odpovídající dílčí dodávce. Zálohy se poměrně započítávají na jednotlivé dílčí dodávky.',
          ),
        ],
      },
      {
        label: 'g)',
        paragraphs: [
          t(
            'Die Einhaltung der Lieferfrist setzt die Erfüllung der Vertragspflichten des Bestellers voraus.',
            'Compliance with the delivery period presupposes that the Purchaser fulfils its contractual obligations.',
            'Dodržení dodací lhůty předpokládá splnění smluvních povinností objednatele.',
          ),
        ],
      },
    ],
  },
  {
    num: '4.',
    title: t('Gefahrübergang und Entgegennahme', 'Passing of Risk and Acceptance', 'Přechod nebezpečí a převzetí'),
    clauses: [
      {
        label: 'a)',
        paragraphs: [
          t(
            'Die Gefahr geht spätestens mit der Absendung der Lieferteile auf den Besteller über, und zwar auch dann, wenn Teillieferungen erfolgen oder der Lieferer noch andere Leistungen, zum Beispiel die Versendungskosten oder Anfuhr und Aufstellung übernommen hat.',
            'Risk passes to the Purchaser no later than upon dispatch of the delivery parts, even if partial deliveries are made or the Supplier has assumed other services, for example the shipping costs or transport and installation.',
            'Nebezpečí přechází na objednatele nejpozději odesláním dodávaných dílů, a to i tehdy, pokud se uskutečňují dílčí dodávky nebo pokud dodavatel převzal ještě jiná plnění, například náklady na dopravu nebo dovoz a instalaci.',
          ),
        ],
      },
      {
        label: 'b)',
        paragraphs: [
          t(
            'Verzögert sich der Versand infolge von Umständen, die der Lieferer nicht zu vertreten hat, so geht die Gefahr, vom Tage der Versandbereitschaft ab, auf den Besteller über, jedoch ist der Lieferer verpflichtet, auf Wunsch und Kosten des Bestellers die Versicherungen zu bewirken, die dieser verlangt.',
            'If dispatch is delayed due to circumstances for which the Supplier is not responsible, risk passes to the Purchaser from the day of readiness for dispatch; however, the Supplier is obliged, at the Purchaser’s request and expense, to take out the insurance the Purchaser requires.',
            'Zdrží-li se expedice v důsledku okolností, za které dodavatel neodpovídá, přechází nebezpečí na objednatele dnem připravenosti k expedici; dodavatel je však povinen na přání a náklady objednatele sjednat pojištění, které objednatel požaduje.',
          ),
        ],
      },
      {
        label: 'c)',
        paragraphs: [
          t(
            'Angelieferte Gegenstände sind, auch wenn sie unwesentliche Mängel aufweisen, vom Besteller unbeschadet der Rechte aus der Haftung für Mängel der Lieferung entgegenzunehmen.',
            'Delivered items must be accepted by the Purchaser even if they show insignificant defects, without prejudice to the rights arising from liability for defects of the delivery.',
            'Dodané předměty je objednatel povinen převzít i tehdy, vykazují-li nepodstatné vady, aniž by tím byla dotčena práva z odpovědnosti za vady dodávky.',
          ),
        ],
      },
      {
        label: 'd)',
        paragraphs: [
          t(
            'Abweichungen von der Rechnung oder vom Lieferschein sind unverzüglich nach Empfang der Ware schriftlich zu melden.',
            'Discrepancies with the invoice or the delivery note must be reported in writing immediately after receipt of the goods.',
            'Odchylky od faktury nebo dodacího listu je nutné písemně oznámit neprodleně po obdržení zboží.',
          ),
        ],
      },
    ],
  },
  {
    num: '5.',
    title: t('Vorbehalte', 'Reservations', 'Výhrady'),
    clauses: [
      {
        paragraphs: [
          t(
            'Infolge Modell- und Konstruktionsänderungen kann für die genaue Übereinstimmung mit der Abbildung keine Gewähr übernommen werden. Dasselbe gilt auch für Gewichtsangaben und Maße.',
            'Due to changes in models and design, no guarantee can be given for exact conformity with the illustration. The same applies to weights and dimensions.',
            'Vzhledem ke změnám modelů a konstrukce nelze ručit za přesnou shodu s vyobrazením. Totéž platí i pro údaje o hmotnosti a rozměrech.',
          ),
          t(
            'Nach Auftragserteilung vom Besteller gewünschte Änderungen sind schriftlich mitzuteilen und bedürfen zu ihrer Annahme der schriftlichen Bestätigung durch den Lieferer.',
            'Changes requested by the Purchaser after the order has been placed must be communicated in writing and require the Supplier’s written confirmation to be accepted.',
            'Změny požadované objednatelem po zadání objednávky je nutné sdělit písemně a k jejich přijetí je třeba písemného potvrzení dodavatele.',
          ),
        ],
      },
    ],
  },
  {
    num: '6.',
    title: t('Sonderanfertigungen', 'Special Designs', 'Zakázková provedení'),
    clauses: [
      {
        paragraphs: [
          t(
            'Werden von der üblichen Serie abweichende Sonder- bzw. Spezialausführungen bestellt, so ist eine anteilmäßige Vorauszahlung zu leisten. Eine Stornierung des Auftrages ist nicht möglich, zumal das betreffende Objekt anderweitig nicht verwertet werden kann. Die von dem Lieferer vorgelegten Projektzeichnungen für Sonder- bzw. Spezialausführungen sind von dem Besteller zu prüfen und schriftlich zu bestätigen.',
            'If special or custom designs deviating from the standard series are ordered, a proportionate advance payment must be made. Cancellation of the order is not possible, since the item in question cannot be used otherwise. Project drawings submitted by the Supplier for special or custom designs must be checked by the Purchaser and confirmed in writing.',
            'Jsou-li objednána speciální nebo zvláštní provedení odchylná od běžné série, je nutné uhradit poměrnou zálohu. Stornování objednávky není možné, neboť dotyčný předmět nelze jinak zhodnotit. Projektové výkresy předložené dodavatelem pro speciální nebo zvláštní provedení je objednatel povinen zkontrolovat a písemně potvrdit.',
          ),
        ],
      },
    ],
  },
  {
    num: '7.',
    title: t('Preis und Zahlung', 'Price and Payment', 'Cena a platba'),
    clauses: [
      {
        label: 'a)',
        paragraphs: [
          t(
            'Die Preise gelten mangels besonderer Vereinbarung ab Werk einschließlich Verladung im Werk, jedoch ausschließlich Verpackung.',
            'Unless otherwise specifically agreed, prices apply ex works including loading at the works, but excluding packaging.',
            'Není-li zvlášť sjednáno jinak, platí ceny ze závodu včetně naložení v závodě, avšak bez obalu.',
          ),
        ],
      },
      {
        label: 'b)',
        paragraphs: [
          t(
            'Mangels besonderer Vereinbarung ist die Zahlung bar ohne jeden Abzug frei Zahlstelle des Lieferers zu leisten und zwar\n1/3 Anzahlung nach Eingang der Auftragsbestätigung,\n2/3 sofort, sobald dem Besteller mitgeteilt ist, daß die Hauptteile versandbereit sind.',
            'Unless otherwise specifically agreed, payment shall be made in cash without any deduction, free to the Supplier’s paying office, as follows:\n1/3 down payment upon receipt of the order confirmation,\n2/3 immediately as soon as the Purchaser has been notified that the main parts are ready for dispatch.',
            'Není-li zvlášť sjednáno jinak, je platba splatná v hotovosti bez jakýchkoli srážek na platební místo dodavatele, a to:\n1/3 jako záloha po obdržení potvrzení objednávky,\n2/3 ihned, jakmile bylo objednateli oznámeno, že hlavní díly jsou připraveny k expedici.',
          ),
        ],
      },
      {
        label: 'c)',
        paragraphs: [
          t(
            'Bei Überschreitung der Zahlungsfristen werden als Jahreszinsen 2 % über dem jeweiligen Basiszinssatz, mindestens aber 5 % berechnet, ohne daß es einer Mahnung bedarf. Im Falle des Verzuges ist der Lieferer auch berechtigt, die ihm von seiner Bank jeweils berechneten Sätze für Kontokorrentkredite in Anrechnung zu bringen. Der Besteller ist im Falle des Verzuges weiters verpflichtet, sämtliche Mahn- und insbesondere Inkassospesen zu bezahlen. Die Geltendmachung weiterer Ansprüche oder Forderungen wird hierdurch nicht ausgeschlossen.',
            'If payment deadlines are exceeded, annual interest of 2 % above the applicable base interest rate, but at least 5 %, will be charged without the need for a reminder. In the event of default, the Supplier is also entitled to charge the rates charged to it by its bank for overdraft facilities. In the event of default, the Purchaser is further obliged to pay all reminder and, in particular, collection charges. This does not preclude the assertion of further claims or demands.',
            'Při překročení platebních lhůt se účtují roční úroky ve výši 2 % nad příslušnou základní úrokovou sazbou, nejméně však 5 %, aniž by bylo třeba upomínky. V případě prodlení je dodavatel rovněž oprávněn účtovat sazby, které mu jeho banka účtuje za kontokorentní úvěry. Objednatel je v případě prodlení dále povinen uhradit veškeré náklady na upomínky a zejména na vymáhání. Uplatnění dalších nároků nebo pohledávek tím není vyloučeno.',
          ),
          t(
            'Im Falle von Ratenzahlung werden bei Überschreitung einer Ratenfälligkeit sofort, ohne daß es einer weiteren Mahnung bedarf, die gesamten restlichen jeweils noch ausstehenden Beträge zur Zahlung fällig. (Terminverlust)',
            'In the case of payment by instalments, if an instalment is not paid when due, all remaining outstanding amounts become due for payment immediately, without the need for a further reminder. (Loss of the instalment benefit)',
            'V případě placení ve splátkách se při nedodržení splatnosti některé splátky okamžitě, aniž by bylo třeba další upomínky, stávají splatnými veškeré zbývající dosud neuhrazené částky. (Ztráta výhody splátek)',
          ),
        ],
      },
      {
        label: 'd)',
        paragraphs: [
          t(
            'Die Zurückhaltung von Zahlungen oder die Aufrechnung wegen etwaiger vom Lieferer bestrittener Gegenansprüche des Bestellers sind nicht statthaft, auch nicht im Falle der Geltendmachung von Gewährleistungsansprüchen.',
            'Withholding payments or offsetting them against any counterclaims of the Purchaser disputed by the Supplier is not permitted, even if warranty claims are asserted.',
            'Zadržování plateb nebo započtení z důvodu případných protinároků objednatele, které dodavatel popírá, není přípustné, a to ani v případě uplatnění nároků z odpovědnosti za vady.',
          ),
        ],
      },
      {
        label: 'e)',
        paragraphs: [
          t(
            'Sämtliche angegebenen Preise lauten in Euro und verstehen sich zuzüglich gesetzlicher Umsatzsteuer und sonstigen Abgaben. Im Falle der Abholung des Liefergegenstandes durch den Besteller verpflichtet sich der Besteller, sofern der Liefergegenstand im Rahmen einer steuerfreien innergemeinschaftlichen Lieferung in das Gemeinschaftsgebiet der Europäischen Union transportiert wird, zur Übermittlung geeigneter Nachweise, mit denen die tatsächliche Steuerfreiheit der Lieferung nachgewiesen werden kann. Die Nachweise werden als Originaldokumente innerhalb von 30 Tagen nach Abholung des Liefergegenstandes beim Lieferer dem Lieferer zur Verfügung gestellt, widrigenfalls der Lieferer zur (Nach-)Verrechnung der gesetzlichen österreichischen Umsatzsteuer berechtigt ist. Es gelten für alle Kaufgegenstände die am Tage der Lieferung jeweils gültigen Preise. Falls sich die Gestehungskosten durch Preiserhöhung in den Rohmaterialien, Konstruktionsänderung infolge Verwendung anderer Werkstoffe, Löhne etc. ändern, erfahren auch die Preise eine entsprechende Änderung.',
            'All prices stated are in euros and are exclusive of statutory value added tax and other charges. If the delivery item is collected by the Purchaser, the Purchaser undertakes, insofar as the delivery item is transported into the territory of the European Union as part of a tax-exempt intra-Community supply, to provide suitable evidence proving the actual tax exemption of the supply. The evidence shall be made available to the Supplier as original documents within 30 days of collection of the delivery item from the Supplier, failing which the Supplier is entitled to (subsequently) charge the statutory Austrian value added tax. The prices valid on the day of delivery apply to all items of sale. If production costs change due to price increases for raw materials, design changes resulting from the use of other materials, wages etc., the prices will change accordingly.',
            'Všechny uvedené ceny jsou v eurech a rozumějí se bez zákonné daně z přidané hodnoty a dalších poplatků. V případě vyzvednutí předmětu dodávky objednatelem se objednatel zavazuje, pokud je předmět dodávky přepravován v rámci od daně osvobozeného dodání uvnitř Společenství na území Evropské unie, předložit vhodné doklady, kterými lze prokázat skutečné osvobození dodávky od daně. Doklady budou dodavateli poskytnuty jako originály do 30 dnů od vyzvednutí předmětu dodávky u dodavatele, jinak je dodavatel oprávněn (dodatečně) vyúčtovat zákonnou rakouskou daň z přidané hodnoty. Pro všechny předměty koupě platí ceny platné v den dodání. Pokud se výrobní náklady změní v důsledku zvýšení cen surovin, konstrukčních změn z důvodu použití jiných materiálů, mezd apod., změní se odpovídajícím způsobem i ceny.',
          ),
        ],
      },
      {
        label: 'f)',
        paragraphs: [
          t(
            'Bei Wechsel- und Scheckzahlungen wird seitens des Lieferers keine Verbindlichkeit für rechtzeitiges Vorzeigen und Protest übernommen. Die Annahme von Wechseln und Schecks erfolgt nur zahlungshalber. Sämtliche Diskont oder sonstige Spesen werden an den Besteller weiterverrechnet. Verzugszinsen, Kursverluste und dergleichen fallen dem Einsender zur Last.',
            'In the case of payment by bill of exchange or cheque, the Supplier accepts no liability for timely presentation and protest. Bills of exchange and cheques are accepted only on account of payment, not in lieu of payment. All discount or other charges will be passed on to the Purchaser. Default interest, exchange losses and the like shall be borne by the sender.',
            'Při platbách směnkou a šekem nepřebírá dodavatel žádnou odpovědnost za včasné předložení a protest. Směnky a šeky se přijímají pouze jako prostředek k zaplacení, nikoli místo placení. Veškeré diskontní nebo jiné výlohy budou přeúčtovány objednateli. Úroky z prodlení, kurzové ztráty a podobně jdou k tíži odesílatele.',
          ),
        ],
      },
      {
        label: 'g)',
        paragraphs: [
          t(
            'Eine Verschlechterung der Zahlungsfähigkeit des Käufers oder die Nichteinhaltung der vereinbarten Zahlungsbedingungen berechtigen den Lieferer zu deren Abänderung.',
            'A deterioration in the buyer’s solvency or non-compliance with the agreed terms of payment entitles the Supplier to amend them.',
            'Zhoršení platební schopnosti kupujícího nebo nedodržení sjednaných platebních podmínek opravňuje dodavatele k jejich změně.',
          ),
          t(
            'Bei Zahlungseinstellung, Ausgleich oder Konkurs des Käufers ist die Kaufpreisforderung sofort fällig.',
            'In the event of suspension of payments, composition proceedings or bankruptcy of the buyer, the purchase price claim becomes due immediately.',
            'V případě zastavení plateb, vyrovnání nebo konkursu kupujícího je pohledávka z kupní ceny okamžitě splatná.',
          ),
        ],
      },
    ],
  },
  {
    num: '8a)',
    title: t('Eigentumsvorbehalt', 'Retention of Title', 'Výhrada vlastnického práva'),
    clauses: [
      {
        paragraphs: [
          t(
            'Der Lieferer behält sich das Eigentum an dem Liefergegenstand vor, bis sämtliche Forderungen des Lieferers gegen den Besteller aus der bestehenden Geschäftsverbindung einschließlich der künftig entstehenden Forderungen auch aus gleichzeitig oder später abgeschlossenen Verträgen wie auch sämtliche infolge eines Zahlungsverzuges aufgelaufenen Forderungen einschließlich Anwaltskosten beglichen sind. Dies gilt auch dann, wenn einzelne oder sämtliche Forderungen des Lieferers in eine laufende Rechnung aufgenommen wurden und der Saldo gezogen ist. Handelt es sich bei der Lieferung um Maschinenteile, so geht im Falle des Einbaues der Teile das vorbehaltene Eigentum an der gelieferten Ware nicht unter. Bei vertragswidrigem Verhalten des Bestellers, insbesondere bei Zahlungsverzug, ist der Lieferer zur Rücknahme des Liefergegenstandes berechtigt. In der Zurücknahme sowie in der Pfändung des Gegenstandes durch den Lieferer liegt ein Rücktritt vom Vertrag nur dann, wenn dies der Lieferer ausdrücklich schriftlich erklärt. Bei Pfändungen oder sonstigen Eingriffen Dritter hat der Besteller den Lieferer unverzüglich schriftlich zu benachrichtigen. Der Besteller haftet gegenüber dem Lieferer für aus der Unterlassung der Benachrichtigung entstehende Vermögensnachteile.',
            'The Supplier retains title to the delivery item until all claims of the Supplier against the Purchaser arising from the existing business relationship – including future claims, also from contracts concluded at the same time or later, as well as all claims accrued as a result of default in payment, including legal fees – have been settled. This also applies if individual or all claims of the Supplier have been included in a current account and the balance has been struck. If the delivery consists of machine parts, the retained title to the delivered goods is not extinguished if the parts are installed. In the event of conduct by the Purchaser in breach of contract, in particular default in payment, the Supplier is entitled to take back the delivery item. Taking back or seizure of the item by the Supplier constitutes a withdrawal from the contract only if the Supplier expressly declares this in writing. In the event of seizures or other interventions by third parties, the Purchaser must notify the Supplier in writing without delay. The Purchaser is liable to the Supplier for financial losses resulting from failure to give such notification.',
            'Dodavatel si vyhrazuje vlastnické právo k předmětu dodávky, dokud nebudou uhrazeny veškeré pohledávky dodavatele vůči objednateli z existujícího obchodního vztahu, včetně budoucích pohledávek i ze smluv uzavřených současně nebo později, jakož i veškeré pohledávky vzniklé v důsledku prodlení s platbou včetně nákladů na právní zastoupení. To platí i tehdy, pokud byly jednotlivé nebo všechny pohledávky dodavatele zahrnuty do běžného účtu a byl stanoven zůstatek. Jedná-li se při dodávce o strojní díly, výhrada vlastnického práva k dodanému zboží nezaniká ani v případě zabudování dílů. Při jednání objednatele v rozporu se smlouvou, zejména při prodlení s platbou, je dodavatel oprávněn vzít předmět dodávky zpět. Zpětné převzetí ani zabavení předmětu dodavatelem nepředstavuje odstoupení od smlouvy, ledaže to dodavatel výslovně písemně prohlásí. Při zabavení nebo jiných zásazích třetích osob je objednatel povinen dodavatele neprodleně písemně vyrozumět. Objednatel odpovídá dodavateli za majetkovou újmu vzniklou opomenutím tohoto vyrozumění.',
          ),
        ],
      },
    ],
  },
  {
    num: '8b)',
    title: t('Verlängerter Eigentumsvorbehalt', 'Extended Retention of Title', 'Prodloužená výhrada vlastnického práva'),
    clauses: [
      {
        paragraphs: [
          t(
            'Der Besteller ist berechtigt, den Liefergegenstand im Rahmen seines Handelsgewerbes weiterzuverkaufen, jedoch nur unter der Bedingung, daß er seinen Kunden unwiderruflich anweist, die noch offene Forderung des Lieferers in der vom Lieferer selbst bekanntgegebenen Höhe an diesen direkt und für Rechnung des Bestellers zu bezahlen. Andere Verfügungen, insbesondere die Verpfändung oder Sicherungsübereignung, sind dem Besteller nicht gestattet. Sofern der Besteller die Vorbehaltssache an einen Dritterwerber weiter veräußert, der die Vorbehaltssache nicht sofort bezahlt, hat der Besteller den Dritterwerber schriftlich anzuweisen, daß dieser die Vorbehaltssache im Namen des Lieferers als Vorbehaltseigentümer innehat und daß der Dritterwerber sämtliche Zahlungen für Rechnung des Bestellers an den Lieferer direkt zu leisten hat, bis die Forderungen des Lieferers in der von diesem bekanntgegebenen Höhe abgedeckt sind; der Besteller hat den Lieferer hievon zu verständigen. Die Berechtigung zur Weiterveräußerung entfällt bei Zahlungseinstellung des Bestellers.',
            'The Purchaser is entitled to resell the delivery item in the ordinary course of its business, but only on condition that it irrevocably instructs its customer to pay the Supplier’s outstanding claim, in the amount notified by the Supplier itself, directly to the Supplier for the account of the Purchaser. Other dispositions, in particular pledging or transfer by way of security, are not permitted to the Purchaser. If the Purchaser resells the goods subject to retention of title to a third-party purchaser who does not pay for them immediately, the Purchaser must instruct the third-party purchaser in writing that the latter holds the goods on behalf of the Supplier as owner under retention of title and must make all payments directly to the Supplier for the account of the Purchaser until the Supplier’s claims have been covered in the amount notified by the Supplier; the Purchaser must inform the Supplier thereof. The right to resell lapses if the Purchaser suspends payments.',
            'Objednatel je oprávněn předmět dodávky v rámci své obchodní činnosti dále prodat, avšak pouze za podmínky, že svého zákazníka neodvolatelně pokyne, aby dosud neuhrazenou pohledávku dodavatele ve výši oznámené samotným dodavatelem zaplatil přímo dodavateli na účet objednatele. Jiné dispozice, zejména zastavení nebo zajišťovací převod vlastnického práva, nejsou objednateli dovoleny. Pokud objednatel zboží s výhradou vlastnictví dále prodá třetímu nabyvateli, který je okamžitě nezaplatí, je objednatel povinen třetího nabyvatele písemně poučit, že zboží drží jménem dodavatele jako vlastníka s výhradou vlastnictví a že veškeré platby na účet objednatele musí hradit přímo dodavateli, dokud nebudou pohledávky dodavatele uhrazeny ve výši jím oznámené; objednatel o tom musí dodavatele vyrozumět. Oprávnění k dalšímu prodeji zaniká zastavením plateb objednatelem.',
          ),
          t(
            'Der Besteller tritt dem Lieferer bereits jetzt alle Forderungen ab, die ihm aus der Weiterveräußerung gegen den Dritterwerber oder gegen Dritte erwachsen, und zwar gleichgültig ob die Vorbehaltsware ohne oder nach Verarbeitung weiterverkauft wird. Es ist dem Besteller untersagt, mit dem Dritterwerber Abreden zu treffen, welche die Rechte des Lieferers in irgendeiner Weise ausschließen oder beeinträchtigen können.',
            'The Purchaser hereby assigns to the Supplier, already now, all claims accruing to it from the resale against the third-party purchaser or against third parties, irrespective of whether the goods subject to retention of title are resold without or after processing. The Purchaser is prohibited from making agreements with the third-party purchaser which could in any way exclude or impair the Supplier’s rights.',
            'Objednatel tímto již nyní postupuje dodavateli veškeré pohledávky, které mu z dalšího prodeje vzniknou vůči třetímu nabyvateli nebo vůči třetím osobám, a to bez ohledu na to, zda je zboží s výhradou vlastnictví dále prodáno bez zpracování nebo po zpracování. Objednateli je zakázáno uzavírat s třetím nabyvatelem ujednání, která by mohla jakýmkoli způsobem vyloučit nebo omezit práva dodavatele.',
          ),
          t(
            'Der Besteller darf insbesondere keine Vereinbarung eingehen, welche die Vorausabtretung der Forderungen an den Lieferer zunichte macht oder beeinträchtigt. Zur Einziehung der an den Lieferer abgetretenen Forderungen bleibt der Besteller auch nach der Abtretung ermächtigt. Die Befugnis des Lieferers, die Forderungen selbst einzuziehen, bleibt hievon unberührt; jedoch verpflichtet sich der Lieferer, die Forderungen nicht einzuziehen, solange der Besteller seinen Zahlungsverpflichtungen ordnungsgemäß nachkommt. Der Lieferer kann verlangen, daß der Besteller ihm alle zum Einzug erforderlichen Angaben macht, die dazugehörenden Unterlagen aushändigt und den Schuldnern die Abtretung mitteilt. Wird der Liefergegenstand mit anderen Waren, die dem Lieferer nicht gehören, weiterverkauft, so gilt die Forderung des Bestellers gegen den Dritterwerber in Höhe des zwischen Lieferer und Besteller vereinbarten Lieferpreises als abgetreten.',
            'In particular, the Purchaser may not enter into any agreement which nullifies or impairs the advance assignment of the claims to the Supplier. The Purchaser remains authorised to collect the claims assigned to the Supplier even after the assignment. The Supplier’s right to collect the claims itself remains unaffected; however, the Supplier undertakes not to collect the claims as long as the Purchaser duly meets its payment obligations. The Supplier may demand that the Purchaser provide it with all information required for collection, hand over the related documents and notify the debtors of the assignment. If the delivery item is resold together with other goods not belonging to the Supplier, the Purchaser’s claim against the third-party purchaser is deemed assigned in the amount of the delivery price agreed between the Supplier and the Purchaser.',
            'Objednatel nesmí zejména uzavřít žádné ujednání, které by zmařilo nebo omezilo předem provedené postoupení pohledávek dodavateli. Objednatel zůstává oprávněn k inkasu pohledávek postoupených dodavateli i po jejich postoupení. Oprávnění dodavatele inkasovat pohledávky sám tím zůstává nedotčeno; dodavatel se však zavazuje pohledávky neinkasovat, dokud objednatel řádně plní své platební povinnosti. Dodavatel může požadovat, aby mu objednatel sdělil veškeré údaje potřebné k inkasu, vydal příslušné podklady a dlužníkům oznámil postoupení. Je-li předmět dodávky dále prodán spolu s jiným zbožím, které dodavateli nepatří, považuje se pohledávka objednatele vůči třetímu nabyvateli za postoupenou ve výši dodací ceny sjednané mezi dodavatelem a objednatelem.',
          ),
          t(
            'Die Verarbeitung oder Umbildung von Vorbehaltssachen wird durch den Besteller stets für den Lieferer vorgenommen. Wird die Vorbehaltssache mit anderen, nicht dem Lieferer gehörenden Gegenständen verarbeitet oder untrennbar vermischt, so erwirbt der Lieferer das Miteigentum an der neuen Sache im Verhältnis des Wertes der Vorbehaltssache zu den anderen verarbeiteten oder vermischten Gegenständen zur Zeit der Verarbeitung oder Vermischung. Werden Waren des Lieferers mit anderen beweglichen Gegenständen zu einer einheitlichen Sache verbunden oder untrennbar vermischt und ist die andere Sache als Hauptsache anzusehen, so gilt als vereinbart, daß der Besteller dem Lieferer anteilsmäßig Miteigentum überträgt, soweit die Hauptsache ihm gehört.',
            'The processing or transformation of goods subject to retention of title by the Purchaser is always carried out on behalf of the Supplier. If the goods subject to retention of title are processed or inseparably mixed with other items not belonging to the Supplier, the Supplier acquires co-ownership of the new item in the ratio of the value of the goods subject to retention of title to the other processed or mixed items at the time of processing or mixing. If goods of the Supplier are combined or inseparably mixed with other movable items to form a single item and the other item is to be regarded as the main item, it is deemed agreed that the Purchaser transfers proportionate co-ownership to the Supplier insofar as the main item belongs to the Purchaser.',
            'Zpracování nebo přetvoření zboží s výhradou vlastnictví provádí objednatel vždy pro dodavatele. Je-li zboží s výhradou vlastnictví zpracováno nebo neoddělitelně smíseno s jinými předměty, které dodavateli nepatří, nabývá dodavatel spoluvlastnické právo k nové věci v poměru hodnoty zboží s výhradou vlastnictví k ostatním zpracovaným nebo smíseným předmětům v době zpracování nebo smísení. Je-li zboží dodavatele spojeno nebo neoddělitelně smíseno s jinými movitými věcmi v jednu věc a je-li jiná věc považována za věc hlavní, platí za sjednané, že objednatel převádí na dodavatele poměrný spoluvlastnický podíl, pokud mu hlavní věc patří.',
          ),
          t(
            'Der Besteller verwahrt das Eigentum oder Miteigentum für den Lieferer. Für die durch die Verarbeitung oder Verbindung sowie Vermischung entstehende Sache gilt im übrigen das gleiche wie für die Vorbehaltsware.',
            'The Purchaser holds the property or co-property in safe custody for the Supplier. In all other respects, the same applies to the item created by processing, combination or mixing as to the goods subject to retention of title.',
            'Objednatel opatruje vlastnictví nebo spoluvlastnictví pro dodavatele. Pro věc vzniklou zpracováním, spojením nebo smísením platí ostatně totéž co pro zboží s výhradou vlastnictví.',
          ),
          t(
            'Der Lieferer verpflichtet sich, die ihm zustehenden Sicherungen insoweit freizugeben, als ihr Wert die zu sichernden Forderungen, soweit diese noch nicht beglichen sind, um mehr als 50 % übersteigt.',
            'The Supplier undertakes to release the securities to which it is entitled insofar as their value exceeds the claims to be secured, to the extent these have not yet been settled, by more than 50 %.',
            'Dodavatel se zavazuje uvolnit zajištění, která mu náležejí, v rozsahu, v jakém jejich hodnota převyšuje zajišťované pohledávky, pokud dosud nebyly uhrazeny, o více než 50 %.',
          ),
          t(
            'Der Eigentumsvorbehalt des Lieferers ist in der Weise bedingt, daß mit der vollen Bezahlung seiner Forderungen samt Anhang das Eigentum an der Vorbehaltssache ohne weiteres auf den Besteller übergeht und die abgetretenen Forderungen ihm zustehen.',
            'The Supplier’s retention of title is conditional in such a way that upon full payment of its claims including ancillary amounts, title to the goods subject to retention of title passes automatically to the Purchaser and the assigned claims accrue to the Purchaser.',
            'Výhrada vlastnického práva dodavatele je podmíněna tak, že úplným zaplacením jeho pohledávek včetně příslušenství přechází vlastnictví ke zboží s výhradou vlastnictví bez dalšího na objednatele a postoupené pohledávky náležejí jemu.',
          ),
          t(
            'Der Eigentumsvorbehalt und die dem Lieferer zustehenden Sicherungen gelten bis zur vollständigen Freistellung aus Eventual-Verbindlichkeiten, die der Lieferer im Interesse des Bestellers eingegangen ist.',
            'The retention of title and the securities to which the Supplier is entitled remain in force until the Supplier has been fully released from contingent liabilities which it has entered into in the interest of the Purchaser.',
            'Výhrada vlastnického práva a zajištění náležející dodavateli platí až do úplného zproštění podmíněných závazků, které dodavatel převzal v zájmu objednatele.',
          ),
          t(
            'Der Lieferer ist berechtigt, den Liefergegenstand auf Kosten des Bestellers gegen Diebstahl, Maschinen-, Feuer-, Wasser- und sonstige Schäden zu versichern, sofern nicht der Besteller selbst die Versicherung nachweislich abgeschlossen hat. Die Kosten, die bei Rücknahme der Vorbehaltsware anfallen, gehen zu Lasten des Bestellers.',
            'The Supplier is entitled to insure the delivery item at the Purchaser’s expense against theft, machinery breakdown, fire, water and other damage, unless the Purchaser has demonstrably taken out such insurance itself. The costs incurred in taking back the goods subject to retention of title shall be borne by the Purchaser.',
            'Dodavatel je oprávněn pojistit předmět dodávky na náklady objednatele proti krádeži, strojním škodám, požáru, vodě a jiným škodám, pokud objednatel sám prokazatelně takové pojištění neuzavřel. Náklady vzniklé při zpětném převzetí zboží s výhradou vlastnictví jdou k tíži objednatele.',
          ),
        ],
      },
    ],
  },
  {
    num: '9.',
    title: t('Mängelhaftung, Gewährleistung', 'Liability for Defects, Warranty', 'Odpovědnost za vady, záruka'),
    clauses: [
      {
        paragraphs: [
          t(
            'Für Mängel der Lieferung, zu denen auch das Fehlen ausdrücklich zugesicherter Eigenschaften gehört, haftet der Lieferer unter Ausschluß weiterer Ansprüche wie folgt:',
            'For defects in the delivery, which also include the absence of expressly warranted characteristics, the Supplier is liable, to the exclusion of further claims, as follows:',
            'Za vady dodávky, k nimž patří i absence výslovně ujištěných vlastností, odpovídá dodavatel s vyloučením dalších nároků takto:',
          ),
        ],
      },
      {
        label: 'a)',
        paragraphs: [
          t(
            'Alle diejenigen Teile sind unentgeltlich nach billigem Ermessen unterliegender Wahl des Lieferers auszubessern oder neu zu liefern, die innerhalb von 12 Monaten (bei Mehrschichtenbetrieb innerhalb von 6 Monaten) seit Ablieferung nachweisbar infolge eines vor dem Gefahrübergang liegenden Umstandes – insbesondere wegen fehlerhafter Bauart, schlechter Baustoffe oder mangelhafter Ausführung – unbrauchbar oder in ihrer Brauchbarkeit erheblich beeinträchtigt werden. Die Feststellung solcher Mängel ist dem Lieferer unverzüglich schriftlich zu melden. Die Vermutungsregel des § 924 ABGB und die Umkehrung der Beweislast zulasten des Lieferers für Mängel, die innerhalb von 6 Monaten nach Übergabe des Liefergegenstandes hervorkommen, wird ausgeschlossen.',
            'All parts which, within 12 months (in the case of multi-shift operation within 6 months) of delivery, demonstrably become unusable or significantly impaired in their usability as a result of a circumstance prior to the passing of risk – in particular due to faulty design, poor materials or defective workmanship – shall be repaired or replaced free of charge at the Supplier’s option, exercised at its reasonable discretion. The discovery of such defects must be reported to the Supplier in writing without delay. The presumption rule of § 924 ABGB (Austrian Civil Code) and the reversal of the burden of proof to the detriment of the Supplier for defects that become apparent within 6 months of handover of the delivery item are excluded.',
            'Všechny díly, které se do 12 měsíců (při vícesměnném provozu do 6 měsíců) od dodání prokazatelně v důsledku okolnosti nastalé před přechodem nebezpečí – zejména z důvodu vadné konstrukce, špatných materiálů nebo vadného provedení – stanou nepoužitelnými nebo jejich použitelnost bude podstatně omezena, je třeba bezplatně opravit nebo dodat nově, a to podle volby dodavatele učiněné dle spravedlivého uvážení. Zjištění takových vad je nutné dodavateli neprodleně písemně oznámit. Domněnka podle § 924 ABGB (rakouský občanský zákoník) a přenesení důkazního břemene k tíži dodavatele u vad, které se projeví do 6 měsíců od předání předmětu dodávky, se vylučují.',
          ),
          t(
            'Ersetzte Teile werden Eigentum des Lieferers. Verzögern sich der Versand, die Aufstellung oder Inbetriebnahme ohne Verschulden des Lieferers, so erlischt die Haftung spätestens 12 Monate nach Gefahrenübergang.',
            'Replaced parts become the property of the Supplier. If dispatch, installation or commissioning is delayed through no fault of the Supplier, liability expires no later than 12 months after the passing of risk.',
            'Vyměněné díly se stávají majetkem dodavatele. Zdrží-li se expedice, instalace nebo uvedení do provozu bez zavinění dodavatele, zaniká odpovědnost nejpozději 12 měsíců po přechodu nebezpečí.',
          ),
          t(
            'Für Fremderzeugnisse beschränkt sich die Haftung des Lieferers auf die Abtretung der Haftungsansprüche die ihm gegen die Lieferer des Fremderzeugnisses zustehen. Das gleiche gilt für Transportleistungen. Die Abtretung der Haftungsansprüche erfolgt ohne Haftung für die Einbringlichkeit.',
            'For third-party products, the Supplier’s liability is limited to the assignment of the liability claims to which it is entitled against the suppliers of the third-party product. The same applies to transport services. The liability claims are assigned without liability for their recoverability.',
            'U výrobků jiných výrobců se odpovědnost dodavatele omezuje na postoupení nároků z odpovědnosti, které mu náležejí vůči dodavatelům takového výrobku. Totéž platí pro přepravní služby. Postoupení nároků z odpovědnosti se uskutečňuje bez ručení za jejich vymahatelnost.',
          ),
        ],
      },
      {
        label: 'b)',
        paragraphs: [
          t(
            'Das Recht des Bestellers, Ansprüche aus Mängel geltend zu machen, verjährt in allen Fällen vom Zeitpunkt der Ablieferung an in 12 Monaten.',
            'The Purchaser’s right to assert claims for defects becomes time-barred in all cases 12 months from the time of delivery.',
            'Právo objednatele uplatnit nároky z vad se ve všech případech promlčuje za 12 měsíců od okamžiku dodání.',
          ),
        ],
      },
      {
        label: 'c)',
        paragraphs: [
          t(
            'Es wird keine Haftung übernommen für Schäden, die aus nachfolgenden Gründen entstanden sind.',
            'No liability is assumed for damage that has arisen for the following reasons.',
            'Nepřebírá se žádná odpovědnost za škody, které vznikly z následujících důvodů.',
          ),
          t(
            'Ungeeignete oder unsachgemäße Verwendung, fehlerhafte Montage bzw. Inbetriebsetzung durch den Besteller oder Dritte, natürliche Abnutzung, fehlerhafte oder nachlässige Behandlung – insbesondere übermäßige Beanspruchung – ungeeignete Betriebsmittel, Austauschwerkstoffe, mangelhafte Bauarbeiten, ungeeigneter Baugrund, chemische, elektrochemische oder elektrische Einflüsse, sofern sie nicht auf ein Verschulden des Lieferers zurückzuführen sind, sowie Schäden, die durch die Weiterverwendung des Liefergegenstandes bei Vorliegen eines Mangels im Sinne der Ziffer 9 lit a entstanden sind.',
            'Unsuitable or improper use, faulty assembly or commissioning by the Purchaser or third parties, natural wear and tear, faulty or negligent handling – in particular excessive stress – unsuitable operating materials, substitute materials, defective construction work, unsuitable building ground, chemical, electrochemical or electrical influences, unless they are attributable to the Supplier’s fault, as well as damage caused by continued use of the delivery item when a defect within the meaning of clause 9(a) is present.',
            'Nevhodné nebo neodborné použití, vadná montáž nebo uvedení do provozu objednatelem nebo třetími osobami, přirozené opotřebení, vadné nebo nedbalé zacházení – zejména nadměrné namáhání – nevhodné provozní prostředky, náhradní materiály, vadné stavební práce, nevhodné podloží, chemické, elektrochemické nebo elektrické vlivy, pokud je nelze přičíst zavinění dodavatele, jakož i škody vzniklé dalším používáním předmětu dodávky při existenci vady ve smyslu bodu 9 písm. a.',
          ),
        ],
      },
      {
        label: 'd)',
        paragraphs: [
          t(
            'Zur Vornahme aller dem Lieferer nach billigem Ermessen notwendig erscheinenden Ausbesserungen und Ersatzteillieferungen hat der Besteller nach Verständigung mit dem Lieferer die erforderliche Zeit und Gelegenheit zu geben, sonst ist der Lieferer von der Mängelhaftung befreit. Nur in dringenden Fällen der Gefährdung der Betriebssicherheit, von denen der Lieferer sofort zu verständigen ist, oder wenn der Lieferer mit der Beseitigung des Mangels im Verzug ist, hat der Besteller das Recht, den Mangel selbst oder durch Dritte beseitigen zu lassen und vom Lieferer angemessenen Ersatz seiner Kosten zu verlangen.',
            'The Purchaser must, after consultation with the Supplier, give the Supplier the necessary time and opportunity to carry out all repairs and replacement deliveries which the Supplier considers necessary at its reasonable discretion; otherwise the Supplier is released from liability for defects. Only in urgent cases of danger to operational safety, of which the Supplier must be notified immediately, or if the Supplier is in default with remedying the defect, does the Purchaser have the right to remedy the defect itself or have it remedied by third parties and to demand reasonable reimbursement of its costs from the Supplier.',
            'K provedení všech oprav a dodávek náhradních dílů, které se dodavateli podle spravedlivého uvážení jeví jako nutné, je objednatel povinen po dohodě s dodavatelem poskytnout potřebný čas a příležitost, jinak je dodavatel zproštěn odpovědnosti za vady. Pouze v naléhavých případech ohrožení provozní bezpečnosti, o nichž je nutné dodavatele okamžitě vyrozumět, nebo pokud je dodavatel v prodlení s odstraněním vady, má objednatel právo vadu odstranit sám nebo prostřednictvím třetích osob a požadovat od dodavatele přiměřenou náhradu svých nákladů.',
          ),
        ],
      },
      {
        label: 'e)',
        paragraphs: [
          t(
            'Von den durch die Ausbesserung bzw. Ersatzlieferung entstehenden Kosten trägt der Lieferer – insoweit als sich die Beanstandung als berechtigt herausstellt – die Kosten des Ersatzstückes einschließlich des Versandes. Die Kosten des Aus- und Einbaues – Fahrtkosten, Reise und Arbeitszeit, Auslösung – sowie alle übrigen Kosten trägt der Besteller.',
            'Of the costs arising from the repair or replacement delivery, the Supplier bears – insofar as the complaint proves to be justified – the costs of the replacement part including shipping. The costs of removal and installation – travel costs, travel and working time, subsistence allowances – as well as all other costs shall be borne by the Purchaser.',
            'Z nákladů vzniklých opravou nebo náhradní dodávkou nese dodavatel – pokud se reklamace ukáže jako oprávněná – náklady na náhradní díl včetně dopravy. Náklady na demontáž a montáž – cestovní náklady, čas na cestu a práci, diety – jakož i veškeré ostatní náklady nese objednatel.',
          ),
        ],
      },
      {
        label: 'f)',
        paragraphs: [
          t(
            'Für das Ersatzstück und die Ausbesserung wird nur bis zum Ablauf der Gewährleistungsfrist des Liefergegenstandes gem. Ziffer 9a und b dieser Bedingungen gehaftet.',
            'Liability for the replacement part and the repair only applies until expiry of the warranty period for the delivery item pursuant to clause 9(a) and (b) of these terms.',
            'Za náhradní díl a opravu se odpovídá pouze do uplynutí záruční doby předmětu dodávky podle bodu 9a a 9b těchto podmínek.',
          ),
        ],
      },
      {
        label: 'g)',
        paragraphs: [
          t(
            'Der Lieferer kann die Beseitigung von Mängeln verweigern, solange der Besteller seine Verpflichtungen nicht erfüllt.',
            'The Supplier may refuse to remedy defects as long as the Purchaser does not fulfil its obligations.',
            'Dodavatel může odmítnout odstranění vad, dokud objednatel neplní své povinnosti.',
          ),
        ],
      },
      {
        label: 'h)',
        paragraphs: [
          t(
            'Durch etwa seitens des Bestellers oder Dritter ohne vorherige schriftliche Genehmigung des Lieferers vorgenommene Änderungen oder Instandsetzungsarbeiten wird die Haftung für die daraus entstehenden Folgen aufgehoben.',
            'Any modifications or repair work carried out by the Purchaser or third parties without the Supplier’s prior written approval shall cancel liability for the resulting consequences.',
            'Změnami nebo opravami provedenými objednatelem nebo třetími osobami bez předchozího písemného souhlasu dodavatele zaniká odpovědnost za následky z nich vzniklé.',
          ),
        ],
      },
      {
        label: 'i)',
        paragraphs: [
          t(
            'Weitere Ansprüche des Bestellers, insbesondere ein Anspruch auf Ersatz von Schäden, die nicht an dem Liefergegenstand selbst entstanden sind, bestehen nicht.',
            'The Purchaser has no further claims, in particular no claim to compensation for damage that has not occurred to the delivery item itself.',
            'Další nároky objednatele, zejména nárok na náhradu škod, které nevznikly na samotném předmětu dodávky, nejsou dány.',
          ),
        ],
      },
      {
        label: 'j)',
        paragraphs: [
          t(
            'Der Besteller verzichtet ausdrücklich auf die Anwendung des § 933b ABGB (Besonderer Rückgriff) und wird dieser Verzicht vom Lieferer ausdrücklich angenommen.',
            'The Purchaser expressly waives the application of § 933b ABGB (special right of recourse), and this waiver is expressly accepted by the Supplier.',
            'Objednatel se výslovně vzdává použití § 933b ABGB (zvláštní regres) a dodavatel toto vzdání se výslovně přijímá.',
          ),
        ],
      },
    ],
  },
  {
    num: '10.',
    title: t('Recht des Bestellers auf Rücktritt', 'Purchaser’s Right of Withdrawal', 'Právo objednatele na odstoupení od smlouvy'),
    clauses: [
      {
        label: 'a)',
        paragraphs: [
          t(
            'Der Besteller kann vom Vertrag zurücktreten, wenn dem Lieferer die gesamte Leistung vor Gefahrübergang endgültig unmöglich wird. Er kann auch dann vom Vertrag zurücktreten, wenn bei einer Bestellung gleichartiger Gegenstände die Ausführung eines Teils der Anzahl nach unmöglich wird und er ein berechtigtes und nachweisbares Interesse an der Ablehnung einer Teillieferung hat; ist dies nicht der Fall, so kann der Besteller die Gegenleistung entsprechend mindern.',
            'The Purchaser may withdraw from the contract if the entire performance becomes finally impossible for the Supplier before the passing of risk. The Purchaser may also withdraw from the contract if, in an order for items of the same kind, the execution of part of the quantity becomes impossible and the Purchaser has a legitimate and demonstrable interest in rejecting a partial delivery; if this is not the case, the Purchaser may reduce the consideration accordingly.',
            'Objednatel může od smlouvy odstoupit, pokud se dodavateli celé plnění před přechodem nebezpečí stane definitivně nemožným. Může od smlouvy odstoupit i tehdy, pokud se u objednávky stejnorodých předmětů stane nemožným provedení části jejich počtu a objednatel má oprávněný a prokazatelný zájem na odmítnutí dílčí dodávky; není-li tomu tak, může objednatel přiměřeně snížit protiplnění.',
          ),
        ],
      },
      {
        label: 'b)',
        paragraphs: [
          t(
            'Liegt Lieferverzug im Sinne von Ziffer 3 der Lieferbedingungen vor, und gewährt der Besteller dem im Verzuge befindlichen Lieferer eine angemessene Nachfrist, welche bei Serienfertigung mindestens 1 Monat, bei Sonderanfertigung mindestens 3 Monate betragen muß, mit der ausdrücklichen Erklärung, daß er nach Ablauf dieser Frist die Annahme dieser Leistung ablehnt, und wird diese Nachfrist durch Verschulden des Lieferers nicht eingehalten, so ist der Besteller zum Rücktritt berechtigt.',
            'If there is a delay in delivery within the meaning of clause 3 of the terms of delivery and the Purchaser grants the Supplier in default a reasonable grace period – which must be at least 1 month for series production and at least 3 months for special designs – with the express declaration that it will refuse to accept this performance after expiry of this period, and if this grace period is not met through the Supplier’s fault, the Purchaser is entitled to withdraw.',
            'Nastane-li prodlení s dodávkou ve smyslu bodu 3 dodacích podmínek a poskytne-li objednatel dodavateli, který je v prodlení, přiměřenou dodatečnou lhůtu, která musí u sériové výroby činit nejméně 1 měsíc a u zakázkové výroby nejméně 3 měsíce, s výslovným prohlášením, že po uplynutí této lhůty převzetí tohoto plnění odmítne, a není-li tato dodatečná lhůta dodržena zaviněním dodavatele, je objednatel oprávněn odstoupit od smlouvy.',
          ),
        ],
      },
      {
        label: 'c)',
        paragraphs: [
          t(
            'Tritt die Unmöglichkeit während des Abnahmeverzuges oder durch Verschulden des Bestellers ein, so bleibt dieser zur Gegenleistung verpflichtet.',
            'If the impossibility occurs during default of acceptance or through the fault of the Purchaser, the Purchaser remains obliged to render consideration.',
            'Nastane-li nemožnost plnění během prodlení s převzetím nebo zaviněním objednatele, zůstává objednatel povinen poskytnout protiplnění.',
          ),
        ],
      },
      {
        label: 'd)',
        paragraphs: [
          t(
            'Ausgeschlossen sind alle anderen weitergehenden Ansprüche des Bestellers, insbesondere solche auf Wandlung, Kündigung oder Minderung sowie auf Ersatz von Schäden irgendwelcher Art und zwar auch von solchem Schaden, der nicht an dem Liefergegenstand selbst entstanden ist.',
            'All other further claims of the Purchaser are excluded, in particular claims for rescission, termination or price reduction, as well as for compensation for damage of any kind, including damage that has not occurred to the delivery item itself.',
            'Vyloučeny jsou veškeré další nároky objednatele, zejména nároky na zrušení smlouvy, výpověď nebo slevu z ceny, jakož i na náhradu škod jakéhokoli druhu, a to i škod, které nevznikly na samotném předmětu dodávky.',
          ),
        ],
      },
    ],
  },
  {
    num: '11.',
    title: t('Recht des Lieferers auf Rücktritt', 'Supplier’s Right of Withdrawal', 'Právo dodavatele na odstoupení od smlouvy'),
    clauses: [
      {
        paragraphs: [
          t(
            'Für den Fall unvorhergesehener Ereignisse im Sinne von Ziffer 3 vorstehender Lieferbedingungen, sofern sie die wirtschaftliche Bedeutung oder den Inhalt der Leistung erheblich verändern oder auf dem Betrieb des Lieferers erheblich einwirken, und für den Fall nachträglich sich herausstellender Unmöglichkeit der Ausführung als auch bei Nicht-Bereitstellung der Daten durch den Besteller gemäß Ziffer 12 a und b dieser Bedingungen steht dem Lieferer das Recht zu, ganz oder teilweise vom Vertrag zurückzutreten. Schadenersatzansprüche des Bestellers wegen eines solchen Rücktrittes bestehen nicht. Will der Lieferer vom Rücktrittsrecht Gebrauch machen, so hat er dies nach Erkenntnis der Tragweite des Ereignisses unverzüglich dem Besteller mitzuteilen, und zwar auch dann, wenn zunächst mit dem Besteller eine Verlängerung der Lieferfrist vereinbart war.',
            'In the event of unforeseen events within the meaning of clause 3 of the above terms of delivery, insofar as they significantly change the economic significance or the content of the performance or have a significant effect on the Supplier’s operations, and in the event of subsequently arising impossibility of performance, as well as if the Purchaser fails to provide the data pursuant to clause 12(a) and (b) of these terms, the Supplier has the right to withdraw from the contract in whole or in part. The Purchaser has no claims for damages on account of such a withdrawal. If the Supplier wishes to exercise its right of withdrawal, it must notify the Purchaser without delay after recognising the implications of the event, even if an extension of the delivery period had initially been agreed with the Purchaser.',
            'V případě nepředvídaných událostí ve smyslu bodu 3 výše uvedených dodacích podmínek, pokud podstatně mění hospodářský význam nebo obsah plnění nebo pokud podstatně ovlivňují provoz dodavatele, dále v případě dodatečně zjištěné nemožnosti provedení a rovněž při neposkytnutí údajů objednatelem podle bodu 12 písm. a a b těchto podmínek má dodavatel právo od smlouvy zcela nebo zčásti odstoupit. Nároky objednatele na náhradu škody z důvodu takového odstoupení nevznikají. Chce-li dodavatel svého práva na odstoupení využít, je povinen to objednateli neprodleně oznámit poté, co rozpozná dosah události, a to i tehdy, pokud bylo s objednatelem nejprve sjednáno prodloužení dodací lhůty.',
          ),
        ],
      },
    ],
  },
  {
    num: '12.',
    title: t(
      'Verhinderung der Geldwäscherei und Terrorismusfinanzierung',
      'Prevention of Money Laundering and Terrorist Financing',
      'Předcházení praní peněz a financování terorismu',
    ),
    clauses: [
      {
        label: 'a)',
        paragraphs: [
          t(
            'Um dem Lieferer die Einhaltung der ihn treffenden geldwäscherechtlichen Sorgfaltspflichten zu ermöglichen, verpflichtet sich der Besteller, dem Lieferer spätestens bei Auftragserteilung den/die wirtschaftlichen Eigentümer des Bestellers, sowie die Bankverbindung(en), von der/denen aus der Besteller im Rahmen der Erfüllung des Liefervertrages voraussichtlich Zahlungen an den Lieferer tätigen wird, bekannt zu geben.',
            'To enable the Supplier to comply with its due diligence obligations under anti-money laundering law, the Purchaser undertakes to disclose to the Supplier, at the latest when placing the order, the beneficial owner(s) of the Purchaser as well as the bank account(s) from which the Purchaser is expected to make payments to the Supplier in the course of performing the supply contract.',
            'Aby mohl dodavatel dodržet povinnosti náležité péče, které mu ukládají předpisy proti praní peněz, zavazuje se objednatel sdělit dodavateli nejpozději při zadání objednávky skutečného majitele (skutečné majitele) objednatele, jakož i bankovní spojení, z něhož (z nichž) bude objednatel v rámci plnění dodací smlouvy pravděpodobně provádět platby dodavateli.',
          ),
        ],
      },
      {
        label: 'b)',
        paragraphs: [
          t(
            'Zum Zwecke der Einhaltung der geldwäscherechtlichen Auskunftspflichten des Lieferers gegenüber Kreditinstituten kann es erforderlich sein, Daten des Bestellers (Angaben zum wirtschaftlichen Eigentümer, Zahlungsdaten sowie Daten zum zugrundeliegenden Liefervertrag) an Kreditinstitute zu übermitteln. Für diesen Zweck bleiben die Daten für die Dauer der geldwäscherechtlichen Aufbewahrungspflichten gespeichert. Der Besteller hat das Recht auf Auskunft (soweit nicht geldwäscherechtlich eingeschränkt), Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Beschwerde an die Datenschutzbehörde.',
            'In order to comply with the Supplier’s disclosure obligations towards credit institutions under anti-money laundering law, it may be necessary to transmit data of the Purchaser (information on the beneficial owner, payment data and data on the underlying supply contract) to credit institutions. For this purpose, the data will be stored for the duration of the retention obligations under anti-money laundering law. The Purchaser has the right of access (unless restricted under anti-money laundering law), rectification, erasure, restriction, data portability and to lodge a complaint with the data protection authority.',
            'Za účelem plnění informačních povinností dodavatele vůči úvěrovým institucím podle předpisů proti praní peněz může být nutné předat údaje objednatele (údaje o skutečném majiteli, platební údaje a údaje o příslušné dodací smlouvě) úvěrovým institucím. Pro tento účel zůstávají údaje uloženy po dobu povinné archivace podle předpisů proti praní peněz. Objednatel má právo na přístup (pokud není omezeno předpisy proti praní peněz), opravu, výmaz, omezení zpracování, přenositelnost údajů a právo podat stížnost u úřadu pro ochranu osobních údajů.',
          ),
          t(
            'Die Bereitstellung der Daten ist vorgeschrieben; eine Nicht-Bereitstellung kann zur Unmöglichkeit des Vertragsabschlusses führen.',
            'The provision of the data is mandatory; failure to provide it may make it impossible to conclude the contract.',
            'Poskytnutí údajů je povinné; jejich neposkytnutí může vést k nemožnosti uzavřít smlouvu.',
          ),
        ],
      },
    ],
  },
  {
    num: '13.',
    title: t('Rechtswahl und Gerichtsstand', 'Choice of Law and Place of Jurisdiction', 'Volba práva a příslušnost soudu'),
    clauses: [
      {
        paragraphs: [
          t(
            'Für Rechtsstreitigkeiten gilt ausschließlich österreichisches Recht. Die Anwendung des UN-Kaufrechts, der Verweisungsnormen des IPRG und der VO (EG) Nr. 593/2008 des Europäischen Parlaments und des Rates vom 17. Juni 2008 über das auf vertragliche Schuldverhältnisse anzuwendende Recht (Rom I-Verordnung) ist ausgeschlossen.',
            'Austrian law applies exclusively to legal disputes. The application of the UN Convention on Contracts for the International Sale of Goods (CISG), the conflict-of-law rules of the Austrian Private International Law Act (IPRG) and Regulation (EC) No 593/2008 of the European Parliament and of the Council of 17 June 2008 on the law applicable to contractual obligations (Rome I Regulation) is excluded.',
            'Pro právní spory platí výhradně rakouské právo. Použití Úmluvy OSN o smlouvách o mezinárodní koupi zboží, kolizních norem rakouského zákona o mezinárodním právu soukromém (IPRG) a nařízení Evropského parlamentu a Rady (ES) č. 593/2008 ze dne 17. června 2008 o právu rozhodném pro smluvní závazkové vztahy (nařízení Řím I) je vyloučeno.',
          ),
          t('Die Vertragssprache ist Deutsch.', 'The contract language is German.', 'Smluvním jazykem je němčina.'),
          t(
            'Die Vertragsparteien vereinbaren österreichische, inländische Gerichtsbarkeit. Zur Entscheidung aller aus dem Vertrag entstehenden Rechtsstreitigkeiten ist das am Sitz des Lieferers sachlich zuständige Gericht ausschließlich örtlich zuständig.',
            'The contracting parties agree on Austrian domestic jurisdiction. The court with subject-matter jurisdiction at the Supplier’s registered office shall have exclusive local jurisdiction to decide all legal disputes arising from the contract.',
            'Smluvní strany sjednávají příslušnost rakouských tuzemských soudů. K rozhodování všech právních sporů vzniklých ze smlouvy je výlučně místně příslušný věcně příslušný soud v místě sídla dodavatele.',
          ),
        ],
      },
    ],
  },
  {
    num: '14.',
    title: t(
      'Haftung/Produkthaftung/Haftungsbegrenzung',
      'Liability/Product Liability/Limitation of Liability',
      'Odpovědnost/odpovědnost za výrobek/omezení odpovědnosti',
    ),
    clauses: [
      {
        paragraphs: [
          t(
            'Zum Schadenersatz ist der Lieferer in allen in Betracht kommenden Fällen nur dann verpflichtet, wenn den Lieferer Vorsatz und grobe Fahrlässigkeit trifft: Bei leichter Fahrlässigkeit haftet der Lieferer ausschließlich für Personenschäden.',
            'In all cases under consideration, the Supplier is only obliged to pay damages if the Supplier is guilty of intent and gross negligence; in the case of slight negligence, the Supplier is liable exclusively for personal injury.',
            'K náhradě škody je dodavatel ve všech v úvahu připadajících případech povinen pouze tehdy, pokud se dodavatel dopustil úmyslu a hrubé nedbalosti; při lehké nedbalosti odpovídá dodavatel výhradně za újmu na zdraví osob.',
          ),
          t(
            'Das Verschulden des Lieferers ist in allen Fällen durch den Besteller nachzuweisen.',
            'In all cases, the Supplier’s fault must be proven by the Purchaser.',
            'Zavinění dodavatele musí ve všech případech prokázat objednatel.',
          ),
          t(
            'Die Haftung des Lieferers ist pro Schadensfall mit € 500,00 begrenzt.',
            'The Supplier’s liability is limited to € 500.00 per claim.',
            'Odpovědnost dodavatele je omezena částkou 500,00 € na jednu škodní událost.',
          ),
          t(
            'Für mittelbare Schäden, entgangenen Gewinn oder Vertragseinbußen, Zinsverluste, unterbliebene Einsparungen, Folge- und Vermögensschäden, Schäden aus Ansprüchen Dritter, Schäden durch Betriebsunterbrechungen, Nutzungsausfall, Verlusten von Daten und Programmen und deren Wiederherstellung haftet der Lieferer nicht.',
            'The Supplier is not liable for indirect damage, loss of profit or contractual losses, loss of interest, lost savings, consequential and financial losses, damage from third-party claims, damage due to business interruptions, loss of use, loss of data and programs and their recovery.',
            'Dodavatel neodpovídá za nepřímé škody, ušlý zisk nebo smluvní ztráty, ztráty na úrocích, neuskutečněné úspory, následné a majetkové škody, škody z nároků třetích osob, škody způsobené přerušením provozu, výpadek užívání, ztrátu dat a programů a jejich obnovu.',
          ),
          t(
            'Allfällige Regressforderungen, die der Besteller oder Dritte aus dem Titel „Produkthaftung“ im Sinne des Produkthaftungsgesetzes gegen den Lieferer richten, sind ausgeschlossen, es sei denn, der Regressberechtigte weist nach, dass der Fehler in der Sphäre des Lieferers verursacht und zumindest grob fahrlässig verschuldet worden ist.',
            'Any recourse claims asserted against the Supplier by the Purchaser or third parties under the title of “product liability” within the meaning of the Austrian Product Liability Act are excluded, unless the party entitled to recourse proves that the defect was caused within the Supplier’s sphere and was at least grossly negligent.',
            'Případné regresní nároky, které objednatel nebo třetí osoby uplatňují vůči dodavateli z titulu „odpovědnosti za výrobek“ ve smyslu rakouského zákona o odpovědnosti za výrobek, jsou vyloučeny, ledaže oprávněný z regresu prokáže, že vada byla způsobena ve sféře dodavatele a zaviněna přinejmenším hrubou nedbalostí.',
          ),
        ],
      },
    ],
  },
  {
    num: '15.',
    title: t('Salvatorische Klausel', 'Severability Clause', 'Salvátorská klauzule'),
    clauses: [
      {
        paragraphs: [
          t(
            'Sollten einzelne Bestimmungen dieser Verkaufs- und Lieferbedingungen ganz oder teilweise unwirksam oder undurchführbar sein oder werden, so berührt dies die Gültigkeit der Bedingungen im übrigen nicht. Die ganze oder teilweise unwirksame Bestimmung wird durch eine solche wirksame Bestimmung ersetzt, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.',
            'Should individual provisions of these terms of sale and delivery be or become invalid or unenforceable in whole or in part, this shall not affect the validity of the remaining terms. The wholly or partially invalid provision shall be replaced by a valid provision that comes closest to the economic purpose of the invalid provision.',
            'Pokud by jednotlivá ustanovení těchto prodejních a dodacích podmínek byla nebo se stala zcela nebo zčásti neplatnými nebo neproveditelnými, nemá to vliv na platnost ostatních podmínek. Zcela nebo zčásti neplatné ustanovení bude nahrazeno takovým platným ustanovením, které se nejvíce blíží hospodářskému účelu neplatného ustanovení.',
          ),
        ],
      },
    ],
  },
];
