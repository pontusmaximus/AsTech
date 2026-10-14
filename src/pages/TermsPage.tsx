import { FileDown, Info } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import SeoHead from '../seo/SeoHead';
import { organizationSchema } from '../seo/structuredData';

// Fassung der Verkaufs- und Lieferbedingungen (Quelle: "AGBs OGS 2019 deutsch.pdf").
const VERSION_DATE = '15.03.2019';
const PDF_PATH = '/downloads/asamer-verkaufs-und-lieferbedingungen-2019.pdf';

type Clause = {
  label?: string;
  paragraphs: string[];
};

type TermsSection = {
  num: string;
  title: string;
  clauses: Clause[];
};

// Wortlaut 1:1 aus dem PDF (Vertragssprache Deutsch, alte Rechtschreibung beibehalten).
const TERMS: TermsSection[] = [
  {
    num: '1.',
    title: 'Allgemeines',
    clauses: [
      {
        paragraphs: [
          'Allen Angeboten und Vereinbarungen über unsere Lieferungen und Leistungen liegen ausschließlich diese allgemeinen Verkaufs- und Lieferbedingungen zugrunde. Sie gelten durch Auftragserteilung oder Annahme der Lieferung als anerkannt. Abweichende Bedingungen des Bestellers, die wir nicht ausdrücklich schriftlich anerkennen, sind für uns unverbindlich. Die Aufhebung oder Änderung einzelner Bedingungen berührt die Gültigkeit unserer übrigen Verkaufs- und Lieferbedingungen nicht. Mündliche oder fernmündliche Vereinbarungen bedürfen zu ihrer Verbindlichkeit unserer schriftlichen Bestätigung, ebenso Vereinbarungen mit unseren Vertretern oder Mitarbeitern.',
        ],
      },
    ],
  },
  {
    num: '2.',
    title: 'Angebote, Auftragsbestätigung',
    clauses: [
      {
        paragraphs: [
          'Sämtliche Angebote verstehen sich freibleibend. Ein Auftrag gilt erst dann als erteilt, wenn er vom Lieferer schriftlich bestätigt ist. Änderungen, Abänderungen oder mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung des Lieferers. Zwischenverkauf bleibt vorbehalten.',
          'Die ersten Angebote werden in der Regel kostenlos abgegeben. Weitere Angebote und Entwurfsarbeiten werden nur unentgeltlich ausgeführt, wenn der Liefervertrag rechtswirksam zustande kommt und bleibt.',
          'Die zu dem Angebot gehörigen Unterlagen wie Abbildungen, Zeichnungen, Gewichts- und Maßangaben sind nur annähernd maßgebend, soweit sie nicht ausdrücklich als verbindlich bezeichnet sind. An Kostenvoranschlägen, Zeichnungen und anderen Unterlagen behält sich der Lieferer Eigentums- und Urheberrecht vor: sie dürfen Dritten nicht zugänglich gemacht werden. Der Lieferer ist verpflichtet, vom Abnehmer als vertraulich bezeichnete Pläne nur mit dessen Zustimmung Dritten zugänglich zu machen.',
          'Für den Umfang der Lieferung ist die schriftliche Auftragsbestätigung des Lieferers maßgebend. Nebenabreden und Änderungen bedürfen der schriftlichen Bestätigung des Lieferers. In der Auftragsbestätigung etwaig enthaltene Abbildungen stellen den zur Ausführung gelangenden Auftrag nur annähernd dar. Diese Abbildungen kennzeichnen lediglich den Vertragsgegenstand und stellen keine Eigenschaftszusicherung dar.',
        ],
      },
    ],
  },
  {
    num: '3.',
    title: 'Lieferzeit',
    clauses: [
      {
        label: 'a)',
        paragraphs: [
          'Die Lieferfrist beginnt mit der Absendung der Auftragsbestätigung, jedoch nicht vor der Beibringung sämtlicher vom Besteller zu beschaffenden Unterlagen, Genehmigungen, Freigaben sowie vor Eingang einer vereinbarten Anzahlung. Sofern der Besteller nicht binnen 4 Wochen nach deren Fälligkeit eine vereinbarte Anzahlung leistet, so sind wir berechtigt, durch einseitige Erklärung vom Vertrag zurückzutreten. Diesfalls hat uns der Besteller 10 % der Auftragssumme als Vertragsstrafe binnen 14 Tagen ab Rücktritt zu bezahlen, jedenfalls aber den tatsächlich entstandenen Schaden binnen gleicher Frist zu ersetzen.',
          'Bei Bestellungen auf Abruf gilt mangels anderweitiger Vereinbarung, daß der Abruf innerhalb von 12 Monaten ab Auftragsbestätigung zu erfolgen hat.',
        ],
      },
      {
        label: 'b)',
        paragraphs: [
          'Die Lieferfrist ist eingehalten, wenn bis zu ihrem Ablauf der Liefergegenstand das Werk verlassen hat oder die Versandbereitschaft mitgeteilt ist.',
        ],
      },
      {
        label: 'c)',
        paragraphs: [
          'Die Lieferfrist verlängert sich angemessen bei Eintritt unvorhergesehener Hindernisse, die außerhalb des Willens des Lieferers liegen – gleichviel ob im Werk des Lieferers oder bei seinen Unterlieferern eingetreten – zum Beispiel Betriebsstörungen, Ausschusswerden, Verzögerungen in der Anlieferung wesentlicher Roh- und Baustoffe, Ausfall eines in einer Schlüsselposition tätigen Mitarbeiters, Streik und Aussperrung soweit solche Hindernisse nachweislich auf die Fertigstellung oder Ablieferung des Liefergegenstandes von erheblichem Einfluß sind.',
          'Die vorbezeichneten Umstände sind auch dann vom Lieferer nicht zu vertreten, wenn sie während eines bereits vorliegenden Verzugs entstehen. Beginn und Ende derartiger Hindernisse wird in wichtigen Fällen der Lieferer dem Besteller baldmöglichst mitteilen.',
        ],
      },
      {
        label: 'd)',
        paragraphs: [
          'Wenn dem Besteller wegen einer Verzögerung, die infolge eigenen Verschuldens des Lieferers entstanden ist, Schaden erwächst, so ist er unter Ausschluß weiterer Ansprüche berechtigt, eine Verzugsentschädigung zu fordern. Sie beträgt für jeden vollen Monat der Verspätung nach Ablauf einer vom Besteller gesetzten Nachfrist gemäß Ziffer 10b dieser Bedingungen 0,5 %, im ganzen aber höchstens 3 % vom Werte desjenigen Teiles der Gesamtlieferung, der infolge der Verspätung nicht rechtzeitig oder nicht zweckdienlich benutzt werden kann.',
        ],
      },
      {
        label: 'e)',
        paragraphs: [
          'Wird der Versand auf Wunsch des Bestellers verzögert, so werden ihm, beginnend einen Monat nach Anzeige der Versandbereitschaft, die durch die Lagerung entstandenen Kosten, bei Lagerung im Werk des Lieferers mindestens jedoch 0,5 % des Rechnungsbetrages für jeden Monat berechnet. Der Lieferer ist jedoch berechtigt, nach Setzung und fruchtlosem Verlauf einer angemessenen Frist anderweitig über den Liefergegenstand zu verfügen und den Besteller mit angemessen verlängerter Frist zu beliefern.',
        ],
      },
      {
        label: 'f)',
        paragraphs: [
          'Der Lieferer ist berechtigt, nach seinem Ermessen Teillieferungen zu erbringen und in Rechnung zu stellen, so daß der, der Teillieferung entsprechende Teil des Preises, fällig wird. Anzahlungen werden anteilig auf die einzelnen Teillieferungen verrechnet.',
        ],
      },
      {
        label: 'g)',
        paragraphs: [
          'Die Einhaltung der Lieferfrist setzt die Erfüllung der Vertragspflichten des Bestellers voraus.',
        ],
      },
    ],
  },
  {
    num: '4.',
    title: 'Gefahrübergang und Entgegennahme',
    clauses: [
      {
        label: 'a)',
        paragraphs: [
          'Die Gefahr geht spätestens mit der Absendung der Lieferteile auf den Besteller über, und zwar auch dann, wenn Teillieferungen erfolgen oder der Lieferer noch andere Leistungen, zum Beispiel die Versendungskosten oder Anfuhr und Aufstellung übernommen hat.',
        ],
      },
      {
        label: 'b)',
        paragraphs: [
          'Verzögert sich der Versand infolge von Umständen, die der Lieferer nicht zu vertreten hat, so geht die Gefahr, vom Tage der Versandbereitschaft ab, auf den Besteller über, jedoch ist der Lieferer verpflichtet, auf Wunsch und Kosten des Bestellers die Versicherungen zu bewirken, die dieser verlangt.',
        ],
      },
      {
        label: 'c)',
        paragraphs: [
          'Angelieferte Gegenstände sind, auch wenn sie unwesentliche Mängel aufweisen, vom Besteller unbeschadet der Rechte aus der Haftung für Mängel der Lieferung entgegenzunehmen.',
        ],
      },
      {
        label: 'd)',
        paragraphs: [
          'Abweichungen von der Rechnung oder vom Lieferschein sind unverzüglich nach Empfang der Ware schriftlich zu melden.',
        ],
      },
    ],
  },
  {
    num: '5.',
    title: 'Vorbehalte',
    clauses: [
      {
        paragraphs: [
          'Infolge Modell- und Konstruktionsänderungen kann für die genaue Übereinstimmung mit der Abbildung keine Gewähr übernommen werden. Dasselbe gilt auch für Gewichtsangaben und Maße.',
          'Nach Auftragserteilung vom Besteller gewünschte Änderungen sind schriftlich mitzuteilen und bedürfen zu ihrer Annahme der schriftlichen Bestätigung durch den Lieferer.',
        ],
      },
    ],
  },
  {
    num: '6.',
    title: 'Sonderanfertigungen',
    clauses: [
      {
        paragraphs: [
          'Werden von der üblichen Serie abweichende Sonder- bzw. Spezialausführungen bestellt, so ist eine anteilmäßige Vorauszahlung zu leisten. Eine Stornierung des Auftrages ist nicht möglich, zumal das betreffende Objekt anderweitig nicht verwertet werden kann. Die von dem Lieferer vorgelegten Projektzeichnungen für Sonder- bzw. Spezialausführungen sind von dem Besteller zu prüfen und schriftlich zu bestätigen.',
        ],
      },
    ],
  },
  {
    num: '7.',
    title: 'Preis und Zahlung',
    clauses: [
      {
        label: 'a)',
        paragraphs: [
          'Die Preise gelten mangels besonderer Vereinbarung ab Werk einschließlich Verladung im Werk, jedoch ausschließlich Verpackung.',
        ],
      },
      {
        label: 'b)',
        paragraphs: [
          'Mangels besonderer Vereinbarung ist die Zahlung bar ohne jeden Abzug frei Zahlstelle des Lieferers zu leisten und zwar\n1/3 Anzahlung nach Eingang der Auftragsbestätigung,\n1/3 sobald dem Besteller mitgeteilt ist, daß die Hauptteile versandbereit sind, der Restbetrag innerhalb eines weiteren Monats.',
        ],
      },
      {
        label: 'c)',
        paragraphs: [
          'Bei Überschreitung der Zahlungsfristen werden als Jahreszinsen 2 % über dem jeweiligen Basiszinssatz, mindestens aber 5 % berechnet, ohne daß es einer Mahnung bedarf. Im Falle des Verzuges ist der Lieferer auch berechtigt, die ihm von seiner Bank jeweils berechneten Sätze für Kontokorrentkredite in Anrechnung zu bringen. Der Besteller ist im Falle des Verzuges weiters verpflichtet, sämtliche Mahn- und insbesondere Inkassospesen zu bezahlen. Die Geltendmachung weiterer Ansprüche oder Forderungen wird hierdurch nicht ausgeschlossen.',
          'Im Falle von Ratenzahlung werden bei Überschreitung einer Ratenfälligkeit sofort, ohne daß es einer weiteren Mahnung bedarf, die gesamten restlichen jeweils noch ausstehenden Beträge zur Zahlung fällig. (Terminverlust)',
        ],
      },
      {
        label: 'd)',
        paragraphs: [
          'Die Zurückhaltung von Zahlungen oder die Aufrechnung wegen etwaiger vom Lieferer bestrittener Gegenansprüche des Bestellers sind nicht statthaft, auch nicht im Falle der Geltendmachung von Gewährleistungsansprüchen.',
        ],
      },
      {
        label: 'e)',
        paragraphs: [
          'Sämtliche angegebenen Preise lauten in Euro und verstehen sich zuzüglich gesetzlicher Umsatzsteuer und sonstigen Abgaben. Im Falle der Abholung des Liefergegenstandes durch den Besteller verpflichtet sich der Besteller, sofern der Liefergegenstand im Rahmen einer steuerfreien innergemeinschaftlichen Lieferung in das Gemeinschaftsgebiet der Europäischen Union transportiert wird, zur Übermittlung geeigneter Nachweise, mit denen die tatsächliche Steuerfreiheit der Lieferung nachgewiesen werden kann. Die Nachweise werden als Originaldokumente innerhalb von 30 Tagen nach Abholung des Liefergegenstandes beim Lieferer dem Lieferer zur Verfügung gestellt, widrigenfalls der Lieferer zur (Nach-)Verrechnung der gesetzlichen österreichischen Umsatzsteuer berechtigt ist. Es gelten für alle Kaufgegenstände die am Tage der Lieferung jeweils gültigen Preise. Falls sich die Gestehungskosten durch Preiserhöhung in den Rohmaterialien, Konstruktionsänderung infolge Verwendung anderer Werkstoffe, Löhne etc. ändern, erfahren auch die Preise eine entsprechende Änderung.',
        ],
      },
      {
        label: 'f)',
        paragraphs: [
          'Bei Wechsel- und Scheckzahlungen wird seitens des Lieferers keine Verbindlichkeit für rechtzeitiges Vorzeigen und Protest übernommen. Die Annahme von Wechseln und Schecks erfolgt nur zahlungshalber. Sämtliche Diskont oder sonstige Spesen werden an den Besteller weiterverrechnet. Verzugszinsen, Kursverluste und dergleichen fallen dem Einsender zur Last.',
        ],
      },
      {
        label: 'g)',
        paragraphs: [
          'Eine Verschlechterung der Zahlungsfähigkeit des Käufers oder die Nichteinhaltung der vereinbarten Zahlungsbedingungen berechtigen den Lieferer zu deren Abänderung.',
          'Bei Zahlungseinstellung, Ausgleich oder Konkurs des Käufers ist die Kaufpreisforderung sofort fällig.',
        ],
      },
    ],
  },
  {
    num: '8a)',
    title: 'Eigentumsvorbehalt',
    clauses: [
      {
        paragraphs: [
          'Der Lieferer behält sich das Eigentum an dem Liefergegenstand vor, bis sämtliche Forderungen des Lieferers gegen den Besteller aus der bestehenden Geschäftsverbindung einschließlich der künftig entstehenden Forderungen auch aus gleichzeitig oder später abgeschlossenen Verträgen wie auch sämtliche infolge eines Zahlungsverzuges aufgelaufenen Forderungen einschließlich Anwaltskosten beglichen sind. Dies gilt auch dann, wenn einzelne oder sämtliche Forderungen des Lieferers in eine laufende Rechnung aufgenommen wurden und der Saldo gezogen ist. Handelt es sich bei der Lieferung um Maschinenteile, so geht im Falle des Einbaues der Teile das vorbehaltene Eigentum an der gelieferten Ware nicht unter. Bei vertragswidrigem Verhalten des Bestellers, insbesondere bei Zahlungsverzug, ist der Lieferer zur Rücknahme des Liefergegenstandes berechtigt. In der Zurücknahme sowie in der Pfändung des Gegenstandes durch den Lieferer liegt ein Rücktritt vom Vertrag nur dann, wenn dies der Lieferer ausdrücklich schriftlich erklärt. Bei Pfändungen oder sonstigen Eingriffen Dritter hat der Besteller den Lieferer unverzüglich schriftlich zu benachrichtigen. Der Besteller haftet gegenüber dem Lieferer für aus der Unterlassung der Benachrichtigung entstehende Vermögensnachteile.',
        ],
      },
    ],
  },
  {
    num: '8b)',
    title: 'Verlängerter Eigentumsvorbehalt',
    clauses: [
      {
        paragraphs: [
          'Der Besteller ist berechtigt, den Liefergegenstand im Rahmen seines Handelsgewerbes weiterzuverkaufen, jedoch nur unter der Bedingung, daß er seinen Kunden unwiderruflich anweist, die noch offene Forderung des Lieferers in der vom Lieferer selbst bekanntgegebenen Höhe an diesen direkt und für Rechnung des Bestellers zu bezahlen. Andere Verfügungen, insbesondere die Verpfändung oder Sicherungsübereignung, sind dem Besteller nicht gestattet. Sofern der Besteller die Vorbehaltssache an einen Dritterwerber weiter veräußert, der die Vorbehaltssache nicht sofort bezahlt, hat der Besteller den Dritterwerber schriftlich anzuweisen, daß dieser die Vorbehaltssache im Namen des Lieferers als Vorbehaltseigentümer innehat und daß der Dritterwerber sämtliche Zahlungen für Rechnung des Bestellers an den Lieferer direkt zu leisten hat, bis die Forderungen des Lieferers in der von diesem bekanntgegebenen Höhe abgedeckt sind; der Besteller hat den Lieferer hievon zu verständigen. Die Berechtigung zur Weiterveräußerung entfällt bei Zahlungseinstellung des Bestellers.',
          'Der Besteller tritt dem Lieferer bereits jetzt alle Forderungen ab, die ihm aus der Weiterveräußerung gegen den Dritterwerber oder gegen Dritte erwachsen, und zwar gleichgültig ob die Vorbehaltsware ohne oder nach Verarbeitung weiterverkauft wird. Es ist dem Besteller untersagt, mit dem Dritterwerber Abreden zu treffen, welche die Rechte des Lieferers in irgendeiner Weise ausschließen oder beeinträchtigen können.',
          'Der Besteller darf insbesondere keine Vereinbarung eingehen, welche die Vorausabtretung der Forderungen an den Lieferer zunichte macht oder beeinträchtigt. Zur Einziehung der an den Lieferer abgetretenen Forderungen bleibt der Besteller auch nach der Abtretung ermächtigt. Die Befugnis des Lieferers, die Forderungen selbst einzuziehen, bleibt hievon unberührt; jedoch verpflichtet sich der Lieferer, die Forderungen nicht einzuziehen, solange der Besteller seinen Zahlungsverpflichtungen ordnungsgemäß nachkommt. Der Lieferer kann verlangen, daß der Besteller ihm alle zum Einzug erforderlichen Angaben macht, die dazugehörenden Unterlagen aushändigt und den Schuldnern die Abtretung mitteilt. Wird der Liefergegenstand mit anderen Waren, die dem Lieferer nicht gehören, weiterverkauft, so gilt die Forderung des Bestellers gegen den Dritterwerber in Höhe des zwischen Lieferer und Besteller vereinbarten Lieferpreises als abgetreten.',
          'Die Verarbeitung oder Umbildung von Vorbehaltssachen wird durch den Besteller stets für den Lieferer vorgenommen. Wird die Vorbehaltssache mit anderen, nicht dem Lieferer gehörenden Gegenständen verarbeitet oder untrennbar vermischt, so erwirbt der Lieferer das Miteigentum an der neuen Sache im Verhältnis des Wertes der Vorbehaltssache zu den anderen verarbeiteten oder vermischten Gegenständen zur Zeit der Verarbeitung oder Vermischung. Werden Waren des Lieferers mit anderen beweglichen Gegenständen zu einer einheitlichen Sache verbunden oder untrennbar vermischt und ist die andere Sache als Hauptsache anzusehen, so gilt als vereinbart, daß der Besteller dem Lieferer anteilsmäßig Miteigentum überträgt, soweit die Hauptsache ihm gehört.',
          'Der Besteller verwahrt das Eigentum oder Miteigentum für den Lieferer. Für die durch die Verarbeitung oder Verbindung sowie Vermischung entstehende Sache gilt im übrigen das gleiche wie für die Vorbehaltsware.',
          'Der Lieferer verpflichtet sich, die ihm zustehenden Sicherungen insoweit freizugeben, als ihr Wert die zu sichernden Forderungen, soweit diese noch nicht beglichen sind, um mehr als 50 % übersteigt.',
          'Der Eigentumsvorbehalt des Lieferers ist in der Weise bedingt, daß mit der vollen Bezahlung seiner Forderungen samt Anhang das Eigentum an der Vorbehaltssache ohne weiteres auf den Besteller übergeht und die abgetretenen Forderungen ihm zustehen.',
          'Der Eigentumsvorbehalt und die dem Lieferer zustehenden Sicherungen gelten bis zur vollständigen Freistellung aus Eventual-Verbindlichkeiten, die der Lieferer im Interesse des Bestellers eingegangen ist.',
          'Der Lieferer ist berechtigt, den Liefergegenstand auf Kosten des Bestellers gegen Diebstahl, Maschinen-, Feuer-, Wasser- und sonstige Schäden zu versichern, sofern nicht der Besteller selbst die Versicherung nachweislich abgeschlossen hat. Die Kosten, die bei Rücknahme der Vorbehaltsware anfallen, gehen zu Lasten des Bestellers.',
        ],
      },
    ],
  },
  {
    num: '9.',
    title: 'Mängelhaftung, Gewährleistung',
    clauses: [
      {
        paragraphs: [
          'Für Mängel der Lieferung, zu denen auch das Fehlen ausdrücklich zugesicherter Eigenschaften gehört, haftet der Lieferer unter Ausschluß weiterer Ansprüche wie folgt:',
        ],
      },
      {
        label: 'a)',
        paragraphs: [
          'Alle diejenigen Teile sind unentgeltlich nach billigem Ermessen unterliegender Wahl des Lieferers auszubessern oder neu zu liefern, die innerhalb von 12 Monaten (bei Mehrschichtenbetrieb innerhalb von 6 Monaten) seit Ablieferung nachweisbar infolge eines vor dem Gefahrübergang liegenden Umstandes – insbesondere wegen fehlerhafter Bauart, schlechter Baustoffe oder mangelhafter Ausführung – unbrauchbar oder in ihrer Brauchbarkeit erheblich beeinträchtigt werden. Die Feststellung solcher Mängel ist dem Lieferer unverzüglich schriftlich zu melden. Die Vermutungsregel des § 924 ABGB und die Umkehrung der Beweislast zulasten des Lieferers für Mängel, die innerhalb von 6 Monaten nach Übergabe des Liefergegenstandes hervorkommen, wird ausgeschlossen.',
          'Ersetzte Teile werden Eigentum des Lieferers. Verzögern sich der Versand, die Aufstellung oder Inbetriebnahme ohne Verschulden des Lieferers, so erlischt die Haftung spätestens 12 Monate nach Gefahrenübergang.',
          'Für Fremderzeugnisse beschränkt sich die Haftung des Lieferers auf die Abtretung der Haftungsansprüche die ihm gegen die Lieferer des Fremderzeugnisses zustehen. Das gleiche gilt für Transportleistungen. Die Abtretung der Haftungsansprüche erfolgt ohne Haftung für die Einbringlichkeit.',
        ],
      },
      {
        label: 'b)',
        paragraphs: [
          'Das Recht des Bestellers, Ansprüche aus Mängel geltend zu machen, verjährt in allen Fällen vom Zeitpunkt der Ablieferung an in 12 Monaten.',
        ],
      },
      {
        label: 'c)',
        paragraphs: [
          'Es wird keine Haftung übernommen für Schäden, die aus nachfolgenden Gründen entstanden sind.',
          'Ungeeignete oder unsachgemäße Verwendung, fehlerhafte Montage bzw. Inbetriebsetzung durch den Besteller oder Dritte, natürliche Abnutzung, fehlerhafte oder nachlässige Behandlung – insbesondere übermäßige Beanspruchung – ungeeignete Betriebsmittel, Austauschwerkstoffe, mangelhafte Bauarbeiten, ungeeigneter Baugrund, chemische, elektrochemische oder elektrische Einflüsse, sofern sie nicht auf ein Verschulden des Lieferers zurückzuführen sind, sowie Schäden, die durch die Weiterverwendung des Liefergegenstandes bei Vorliegen eines Mangels im Sinne der Ziffer 9 lit a entstanden sind.',
        ],
      },
      {
        label: 'd)',
        paragraphs: [
          'Zur Vornahme aller dem Lieferer nach billigem Ermessen notwendig erscheinenden Ausbesserungen und Ersatzteillieferungen hat der Besteller nach Verständigung mit dem Lieferer die erforderliche Zeit und Gelegenheit zu geben, sonst ist der Lieferer von der Mängelhaftung befreit. Nur in dringenden Fällen der Gefährdung der Betriebssicherheit, von denen der Lieferer sofort zu verständigen ist, oder wenn der Lieferer mit der Beseitigung des Mangels im Verzug ist, hat der Besteller das Recht, den Mangel selbst oder durch Dritte beseitigen zu lassen und vom Lieferer angemessenen Ersatz seiner Kosten zu verlangen.',
        ],
      },
      {
        label: 'e)',
        paragraphs: [
          'Von den durch die Ausbesserung bzw. Ersatzlieferung entstehenden Kosten trägt der Lieferer – insoweit als sich die Beanstandung als berechtigt herausstellt – die Kosten des Ersatzstückes einschließlich des Versandes. Die Kosten des Aus- und Einbaues – Fahrtkosten, Reise und Arbeitszeit, Auslösung – sowie alle übrigen Kosten trägt der Besteller.',
        ],
      },
      {
        label: 'f)',
        paragraphs: [
          'Für das Ersatzstück und die Ausbesserung wird nur bis zum Ablauf der Gewährleistungsfrist des Liefergegenstandes gem. Ziffer 9a und b dieser Bedingungen gehaftet.',
        ],
      },
      {
        label: 'g)',
        paragraphs: [
          'Der Lieferer kann die Beseitigung von Mängeln verweigern, solange der Besteller seine Verpflichtungen nicht erfüllt.',
        ],
      },
      {
        label: 'h)',
        paragraphs: [
          'Durch etwa seitens des Bestellers oder Dritter ohne vorherige schriftliche Genehmigung des Lieferers vorgenommene Änderungen oder Instandsetzungsarbeiten wird die Haftung für die daraus entstehenden Folgen aufgehoben.',
        ],
      },
      {
        label: 'i)',
        paragraphs: [
          'Weitere Ansprüche des Bestellers, insbesondere ein Anspruch auf Ersatz von Schäden, die nicht an dem Liefergegenstand selbst entstanden sind, bestehen nicht.',
        ],
      },
      {
        label: 'j)',
        paragraphs: [
          'Der Besteller verzichtet ausdrücklich auf die Anwendung des § 933b ABGB (Besonderer Rückgriff) und wird dieser Verzicht vom Lieferer ausdrücklich angenommen.',
        ],
      },
    ],
  },
  {
    num: '10.',
    title: 'Recht des Bestellers auf Rücktritt',
    clauses: [
      {
        label: 'a)',
        paragraphs: [
          'Der Besteller kann vom Vertrag zurücktreten, wenn dem Lieferer die gesamte Leistung vor Gefahrübergang endgültig unmöglich wird. Er kann auch dann vom Vertrag zurücktreten, wenn bei einer Bestellung gleichartiger Gegenstände die Ausführung eines Teils der Anzahl nach unmöglich wird und er ein berechtigtes und nachweisbares Interesse an der Ablehnung einer Teillieferung hat; ist dies nicht der Fall, so kann der Besteller die Gegenleistung entsprechend mindern.',
        ],
      },
      {
        label: 'b)',
        paragraphs: [
          'Liegt Lieferverzug im Sinne von Ziffer 3 der Lieferbedingungen vor, und gewährt der Besteller dem im Verzuge befindlichen Lieferer eine angemessene Nachfrist, welche bei Serienfertigung mindestens 1 Monat, bei Sonderanfertigung mindestens 3 Monate betragen muß, mit der ausdrücklichen Erklärung, daß er nach Ablauf dieser Frist die Annahme dieser Leistung ablehnt, und wird diese Nachfrist durch Verschulden des Lieferers nicht eingehalten, so ist der Besteller zum Rücktritt berechtigt.',
        ],
      },
      {
        label: 'c)',
        paragraphs: [
          'Tritt die Unmöglichkeit während des Abnahmeverzuges oder durch Verschulden des Bestellers ein, so bleibt dieser zur Gegenleistung verpflichtet.',
        ],
      },
      {
        label: 'd)',
        paragraphs: [
          'Ausgeschlossen sind alle anderen weitergehenden Ansprüche des Bestellers, insbesondere solche auf Wandlung, Kündigung oder Minderung sowie auf Ersatz von Schäden irgendwelcher Art und zwar auch von solchem Schaden, der nicht an dem Liefergegenstand selbst entstanden ist.',
        ],
      },
    ],
  },
  {
    num: '11.',
    title: 'Recht des Lieferers auf Rücktritt',
    clauses: [
      {
        paragraphs: [
          'Für den Fall unvorhergesehener Ereignisse im Sinne von Ziffer 3 vorstehender Lieferbedingungen, sofern sie die wirtschaftliche Bedeutung oder den Inhalt der Leistung erheblich verändern oder auf dem Betrieb des Lieferers erheblich einwirken, und für den Fall nachträglich sich herausstellender Unmöglichkeit der Ausführung als auch bei Nicht-Bereitstellung der Daten durch den Besteller gemäß Ziffer 12 a und b dieser Bedingungen steht dem Lieferer das Recht zu, ganz oder teilweise vom Vertrag zurückzutreten. Schadenersatzansprüche des Bestellers wegen eines solchen Rücktrittes bestehen nicht. Will der Lieferer vom Rücktrittsrecht Gebrauch machen, so hat er dies nach Erkenntnis der Tragweite des Ereignisses unverzüglich dem Besteller mitzuteilen, und zwar auch dann, wenn zunächst mit dem Besteller eine Verlängerung der Lieferfrist vereinbart war.',
        ],
      },
    ],
  },
  {
    num: '12.',
    title: 'Verhinderung der Geldwäscherei und Terrorismusfinanzierung',
    clauses: [
      {
        label: 'a)',
        paragraphs: [
          'Um dem Lieferer die Einhaltung der ihn treffenden geldwäscherechtlichen Sorgfaltspflichten zu ermöglichen, verpflichtet sich der Besteller, dem Lieferer spätestens bei Auftragserteilung den/die wirtschaftlichen Eigentümer des Bestellers, sowie die Bankverbindung(en), von der/denen aus der Besteller im Rahmen der Erfüllung des Liefervertrages voraussichtlich Zahlungen an den Lieferer tätigen wird, bekannt zu geben.',
        ],
      },
      {
        label: 'b)',
        paragraphs: [
          'Zum Zwecke der Einhaltung der geldwäscherechtlichen Auskunftspflichten des Lieferers gegenüber Kreditinstituten kann es erforderlich sein, Daten des Bestellers (Angaben zum wirtschaftlichen Eigentümer, Zahlungsdaten sowie Daten zum zugrundeliegenden Liefervertrag) an Kreditinstitute zu übermitteln. Für diesen Zweck bleiben die Daten für die Dauer der geldwäscherechtlichen Aufbewahrungspflichten gespeichert. Der Besteller hat das Recht auf Auskunft (soweit nicht geldwäscherechtlich eingeschränkt), Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Beschwerde an die Datenschutzbehörde.',
          'Die Bereitstellung der Daten ist vorgeschrieben; eine Nicht-Bereitstellung kann zur Unmöglichkeit des Vertragsabschlusses führen.',
        ],
      },
    ],
  },
  {
    num: '13.',
    title: 'Rechtswahl und Gerichtsstand',
    clauses: [
      {
        paragraphs: [
          'Für Rechtsstreitigkeiten gilt ausschließlich österreichisches Recht. Die Anwendung des UN-Kaufrechts, der Verweisungsnormen des IPRG und der VO (EG) Nr. 593/2008 des Europäischen Parlaments und des Rates vom 17. Juni 2008 über das auf vertragliche Schuldverhältnisse anzuwendende Recht (Rom I-Verordnung) ist ausgeschlossen.',
          'Die Vertragssprache ist Deutsch.',
          'Die Vertragsparteien vereinbaren österreichische, inländische Gerichtsbarkeit. Zur Entscheidung aller aus dem Vertrag entstehenden Rechtsstreitigkeiten ist das am Sitz des Lieferers sachlich zuständige Gericht ausschließlich örtlich zuständig.',
        ],
      },
    ],
  },
  {
    num: '14.',
    title: 'Haftung/Produkthaftung/Haftungsbegrenzung',
    clauses: [
      {
        paragraphs: [
          'Zum Schadenersatz ist der Lieferer in allen in Betracht kommenden Fällen nur dann verpflichtet, wenn den Lieferer Vorsatz und grobe Fahrlässigkeit trifft: Bei leichter Fahrlässigkeit haftet der Lieferer ausschließlich für Personenschäden.',
          'Das Verschulden des Lieferers ist in allen Fällen durch den Besteller nachzuweisen.',
          'Die Haftung des Lieferers ist pro Schadensfall mit € 500,00 begrenzt.',
          'Für mittelbare Schäden, entgangenen Gewinn oder Vertragseinbußen, Zinsverluste, unterbliebene Einsparungen, Folge- und Vermögensschäden, Schäden aus Ansprüchen Dritter, Schäden durch Betriebsunterbrechungen, Nutzungsausfall, Verlusten von Daten und Programmen und deren Wiederherstellung haftet der Lieferer nicht.',
          'Allfällige Regressforderungen, die der Besteller oder Dritte aus dem Titel „Produkthaftung“ im Sinne des Produkthaftungsgesetzes gegen den Lieferer richten, sind ausgeschlossen, es sei denn, der Regressberechtigte weist nach, dass der Fehler in der Sphäre des Lieferers verursacht und zumindest grob fahrlässig verschuldet worden ist.',
        ],
      },
    ],
  },
  {
    num: '15.',
    title: 'Salvatorische Klausel',
    clauses: [
      {
        paragraphs: [
          'Sollten einzelne Bestimmungen dieser Verkaufs- und Lieferbedingungen ganz oder teilweise unwirksam oder undurchführbar sein oder werden, so berührt dies die Gültigkeit der Bedingungen im übrigen nicht. Die ganze oder teilweise unwirksame Bestimmung wird durch eine solche wirksame Bestimmung ersetzt, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.',
        ],
      },
    ],
  },
];

const TermsPage = () => {
  const { lang } = useLanguage();
  const locale =
    lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu' ? lang : 'en';

  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  return (
    <>
      <SeoHead routeKey="terms" structuredData={[organizationSchema()]} />
      <div className="bg-dark min-h-screen">
        <section className="pt-28 md:pt-36 pb-10">
          <div className="container-wide">
            <div className="max-w-4xl">
              <div className="accent-line mb-6" />
              <h1 className="text-section font-display font-light text-white mb-5">
                {tr(
                  'Allgemeine Geschäftsbedingungen',
                  'Terms & Conditions',
                  'Obchodní podmínky',
                )}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                {tr(
                  'Verkaufs- und Lieferbedingungen der Asamer Technologie GmbH, A-4650 Lambach, für alle Angebote, Lieferungen und Leistungen.',
                  'General terms of sale and delivery of Asamer Technologie GmbH, A-4650 Lambach, for all offers, deliveries and services.',
                  'Všeobecné prodejní a dodací podmínky společnosti Asamer Technologie GmbH, A-4650 Lambach, pro všechny nabídky, dodávky a služby.',
                )}
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-4">
                <p className="text-white/40 text-sm">
                  {tr('Fassung vom', 'Version dated', 'Znění ze dne')} {VERSION_DATE}
                </p>
                <a
                  href={PDF_PATH}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors"
                >
                  <FileDown className="w-4 h-4" />
                  {tr('PDF herunterladen', 'Download PDF', 'Stáhnout PDF')}
                </a>
              </div>
              {locale !== 'de' && (
                <div className="flex items-start gap-3 mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-4">
                  <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-white/70 text-sm leading-relaxed">
                    {tr(
                      '',
                      'These terms are only available in German. The German version is legally binding — the contract language is German.',
                      'Tyto podmínky jsou k dispozici pouze v němčině. Právně závazné je německé znění — smluvním jazykem je němčina.',
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-wide">
            <div className="max-w-4xl space-y-6" lang="de">
              {TERMS.map((section) => (
                <article key={section.num} className="rounded-2xl border border-white/10 bg-dark-card p-6">
                  <h2 className="text-xl font-display font-light text-white mb-4">
                    <span className="text-primary mr-2">{section.num}</span>
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.clauses.map((clause, i) => (
                      <div key={clause.label ?? i} className={clause.label ? 'flex gap-3' : undefined}>
                        {clause.label && (
                          <span className="text-primary/80 text-sm leading-relaxed w-5 shrink-0">{clause.label}</span>
                        )}
                        <div className="space-y-3">
                          {clause.paragraphs.map((p) => (
                            <p key={p} className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
              <p className="text-white/40 text-sm">Asamer Technologie GmbH, A-4650 Lambach/Austria</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsPage;
