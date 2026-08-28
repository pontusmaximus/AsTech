import type { Language } from '../i18n';
import type { OttCategory } from './ottProducts';

/**
 * Meta- und Kopfdaten der OTT-Kategorieseiten (/ott/{kategorie-slug}).
 *
 * Die Kategorieseite ist die Antwort auf generische Kategorie-Suchanfragen
 * („olepovačky hran", „Kantenanleimmaschinen") — der Marken-Hub /ott bleibt
 * die Antwort auf Marken-Suchanfragen („ott", „ott olepovačky hran").
 * Deshalb steht hier das Kategorie-Keyword vorn im Title, die Marke dahinter.
 */

export interface OttCategoryMeta {
  seoTitle: Record<Language, string>;
  seoDescription: Record<Language, string>;
  h1: Record<Language, string>;
  eyebrow: Record<Language, string>;
  /** Definition-Lead (AEO): beantwortet „Was ist …?" im ersten Absatz. */
  lead: Record<Language, string>;
}

export const OTT_CATEGORY_META: Record<OttCategory, OttCategoryMeta> = {
  edgebanding: {
    seoTitle: {
      de: 'Kantenanleimmaschinen – OTT Maschinen kaufen | Asamer',
      en: 'Edgebanding Machines – Industrial OTT Range | Asamer',
      cz: 'Olepovačky hran – průmyslové stroje OTT | Asamer',
      sk: 'Olepovačky hrán – priemyselné stroje OTT | Asamer',
      hu: 'Élzárógépek – ipari OTT gépek | Asamer',
    },
    seoDescription: {
      de: 'Kantenanleimmaschinen von OTT: 7 Modelle von Pacific+ bis TopEdge, EVA & PUR, Nullfuge bluEdge, Fügefräsen. Verkauf, Service und Finanzierung vom autorisierten Händler.',
      en: 'OTT edgebanding machines: 7 models from Pacific+ to TopEdge, EVA & PUR, bluEdge zero glue line, pre-milling. Sales, service and financing from the authorized dealer.',
      cz: 'Olepovačky hran OTT pro truhlárny i průmysl: 7 modelů, lepidla EVA i PUR, nulová spára bluEdge, předfrézování. Prodej, servis a financování od autorizovaného prodejce.',
      sk: 'Olepovačky hrán OTT pre stolárne aj priemysel: 7 modelov, lepidlá EVA aj PUR, nulová škára bluEdge, predfrézovanie. Predaj, servis a financovanie od autorizovaného predajcu.',
      hu: 'OTT élzárógépek asztalosműhelyeknek és iparnak: 7 modell, EVA és PUR ragasztó, bluEdge fugamentes technológia. Értékesítés, szerviz és finanszírozás a hivatalos viszonteladótól.',
    },
    h1: {
      de: 'OTT Kantenanleimmaschinen',
      en: 'OTT Edgebanding Machines',
      cz: 'Olepovačky hran OTT',
      sk: 'Olepovačky hrán OTT',
      hu: 'OTT élzárógépek',
    },
    eyebrow: {
      de: 'OTT Paul · Made in Austria',
      en: 'OTT Paul · Made in Austria',
      cz: 'OTT Paul · Made in Austria',
      sk: 'OTT Paul · Made in Austria',
      hu: 'OTT Paul · Made in Austria',
    },
    lead: {
      de: 'Eine Kantenanleimmaschine beklebt und besäumt die Kanten von Möbel- und Plattenteilen – sie schützt die Platte vor Feuchtigkeit und vollendet das Möbeldesign. Die industriellen Kantenanleimmaschinen von OTT Paul verarbeiten Kanten von 0,3 bis 25 mm bei 18–25 m/min Vorschub, mit EVA, PUR und der Nullfugentechnologie bluEdge featuring HyFuse. Asamer ist autorisierter OTT-Händler für Tschechien, die Slowakei und Ungarn – mit Beratung, Montage, Service und Finanzierung.',
      en: 'An edgebanding machine applies and flush-trims edge material on furniture and board parts – it seals the board against moisture and completes the furniture design. Industrial OTT Paul edgebanders process edges from 0.3 to 25 mm at feed speeds of 18–25 m/min, with EVA, PUR and the bluEdge featuring HyFuse zero glue line technology. Asamer is the authorized OTT dealer for the Czech Republic, Slovakia and Hungary – with consulting, installation, service and financing.',
      cz: 'Olepovačka hran je stroj, který nalepí a začistí hranu na nábytkovém dílci – chrání desku před vlhkostí a dotváří design nábytku. Průmyslové olepovačky hran OTT Paul zpracují hrany 0,3 až 25 mm při posuvu 18–25 m/min, s lepidly EVA a PUR i s technologií nulové spáry bluEdge featuring HyFuse. Asamer je autorizovaný prodejce OTT pro Českou republiku, Slovensko a Maďarsko – zajišťuje poradenství, montáž, servis i financování.',
      sk: 'Olepovačka hrán je stroj, ktorý nalepí a začistí hranu na nábytkovom dielci – chráni dosku pred vlhkosťou a dotvára dizajn nábytku. Priemyselné olepovačky hrán OTT Paul spracujú hrany 0,3 až 25 mm pri posuve 18 – 25 m/min, s lepidlami EVA a PUR aj s technológiou nulovej škáry bluEdge featuring HyFuse. Asamer je autorizovaný predajca OTT pre Českú republiku, Slovensko a Maďarsko – zabezpečuje poradenstvo, montáž, servis aj financovanie.',
      hu: 'Az élzárógép a bútor- és lapelemek éleire ragasztja és dolgozza le az élanyagot – védi a lapot a nedvességtől, és teljessé teszi a bútor dizájnját. Az ipari OTT Paul élzárógépek 0,3–25 mm-es éleket dolgoznak fel 18–25 m/perc előtolással, EVA-, PUR-ragasztóval és a bluEdge featuring HyFuse fugamentes technológiával. Az Asamer az OTT hivatalos viszonteladója Csehországban, Szlovákiában és Magyarországon – tanácsadással, telepítéssel, szervizzel és finanszírozással.',
    },
  },

  gluing: {
    seoTitle: {
      de: 'OTT Klebetechnologie – CombiMelt PUR/EVA, bluEdge | Asamer',
      en: 'OTT Gluing Technology – CombiMelt PUR/EVA, bluEdge | Asamer',
      cz: 'Lepicí technologie OTT – CombiMelt PUR/EVA, bluEdge | Asamer',
      sk: 'Lepiaca technológia OTT – CombiMelt PUR/EVA, bluEdge | Asamer',
      hu: 'OTT ragasztási technológia – CombiMelt PUR/EVA | Asamer',
    },
    seoDescription: {
      de: 'OTT Klebetechnologie: CombiMelt für EVA und PUR, bluEdge featuring HyFuse für die Nullfuge. Nachrüstbar für alle OTT Kantenanleimmaschinen. Beratung durch Asamer.',
      en: 'OTT gluing technology: CombiMelt for EVA and PUR, bluEdge featuring HyFuse for a zero glue line. Retrofittable on all OTT edgebanders. Consulting by Asamer.',
      cz: 'Lepicí technologie OTT: CombiMelt pro EVA a PUR, bluEdge featuring HyFuse pro nulovou spáru. Dodatečná montáž na všechny olepovačky hran OTT. Poradenství Asamer.',
      sk: 'Lepiaca technológia OTT: CombiMelt pre EVA a PUR, bluEdge featuring HyFuse pre nulovú škáru. Dodatočná montáž na všetky olepovačky hrán OTT. Poradenstvo Asamer.',
      hu: 'OTT ragasztási technológia: CombiMelt EVA-hoz és PUR-hoz, bluEdge featuring HyFuse a fugamentes élekhez. Minden OTT élzárógépre utólag felszerelhető. Asamer tanácsadás.',
    },
    h1: {
      de: 'OTT Klebetechnologie',
      en: 'OTT Gluing Technology',
      cz: 'Lepicí technologie OTT',
      sk: 'Lepiaca technológia OTT',
      hu: 'OTT ragasztási technológia',
    },
    eyebrow: {
      de: 'CombiMelt · bluEdge featuring HyFuse',
      en: 'CombiMelt · bluEdge featuring HyFuse',
      cz: 'CombiMelt · bluEdge featuring HyFuse',
      sk: 'CombiMelt · bluEdge featuring HyFuse',
      hu: 'CombiMelt · bluEdge featuring HyFuse',
    },
    lead: {
      de: 'Die Klebetechnologie entscheidet über die Qualität der Leimfuge: EVA ist der wirtschaftliche Standard, PUR liefert wasserfeste, nahezu unsichtbare Fugen, und bluEdge featuring HyFuse erzeugt die komplett klebstofffreie Nullfuge. OTT bietet alle drei Stufen – nachrüstbar für jede OTT Kantenanleimmaschine.',
      en: 'Adhesive technology determines the quality of the glue joint: EVA is the economical standard, PUR delivers waterproof, nearly invisible joints, and bluEdge featuring HyFuse creates a completely adhesive-free zero glue line. OTT offers all three tiers – retrofittable on every OTT edgebander.',
      cz: 'Lepicí technologie rozhoduje o kvalitě lepené spáry: EVA je ekonomický standard, PUR vytváří voděodolné, téměř neviditelné spoje a bluEdge featuring HyFuse dosahuje zcela nulové spáry bez lepidla. OTT nabízí všechny tři úrovně – s možností dodatečné montáže na každou olepovačku hran OTT.',
      sk: 'Lepiaca technológia rozhoduje o kvalite lepenej škáry: EVA je ekonomický štandard, PUR vytvára vodeodolné, takmer neviditeľné spoje a bluEdge featuring HyFuse dosahuje úplne nulovú škáru bez lepidla. OTT ponúka všetky tri úrovne – s možnosťou dodatočnej montáže na každú olepovačku hrán OTT.',
      hu: 'A ragasztási technológia dönti el a ragasztási fuga minőségét: az EVA a gazdaságos standard, a PUR vízálló, szinte láthatatlan kötést ad, a bluEdge featuring HyFuse pedig teljesen ragasztómentes, fugamentes élt készít. Az OTT mindhárom szintet kínálja – minden OTT élzárógépre utólag is felszerelhető.',
    },
  },

  return: {
    seoTitle: {
      de: 'OTT Rücktransportsysteme – TransLift & TransEdge | Asamer',
      en: 'OTT Return Conveyor Systems – TransLift, TransEdge | Asamer',
      cz: 'Vratné dopravníkové systémy OTT – TransLift, TransEdge | Asamer',
      sk: 'Spätné dopravníkové systémy OTT – TransLift, TransEdge | Asamer',
      hu: 'OTT visszafutó szalagok – TransLift, TransEdge | Asamer',
    },
    seoDescription: {
      de: 'OTT Rücktransportsysteme für die Kantenanleimmaschine: TransLift, TransEdge und TransCompact machen aus einer Maschine eine Einmann-Fertigungszelle. Beratung von Asamer.',
      en: 'OTT return conveyor systems for edgebanders: TransLift, TransEdge and TransCompact turn one machine into a one-operator production cell. Consulting by Asamer.',
      cz: 'Vratné dopravníkové systémy OTT k olepovačce hran: TransLift, TransEdge a TransCompact promění stroj v jednoobslužnou výrobní buňku. Poradenství Asamer.',
      sk: 'Spätné dopravníkové systémy OTT k olepovačke hrán: TransLift, TransEdge a TransCompact premenia stroj na jednoobslužnú výrobnú bunku. Poradenstvo Asamer.',
      hu: 'OTT visszafutó rendszerek élzárógépekhez: a TransLift, TransEdge és TransCompact egykezelős gyártócellává alakítja a gépet. Asamer tanácsadás.',
    },
    h1: {
      de: 'OTT Rücktransportsysteme',
      en: 'OTT Return Conveyor Systems',
      cz: 'Vratné dopravníkové systémy OTT',
      sk: 'Spätné dopravníkové systémy OTT',
      hu: 'OTT visszafutó szalagok',
    },
    eyebrow: {
      de: 'Einmann-Bedienung · Automatisierung',
      en: 'One-operator workflow · Automation',
      cz: 'Jednoobslužný provoz · Automatizace',
      sk: 'Jednoobslužná prevádzka · Automatizácia',
      hu: 'Egykezelős üzem · Automatizálás',
    },
    lead: {
      de: 'Rücktransportsysteme führen Werkstücke automatisch zur Kantenanleimmaschine zurück – ein einzelner Bediener fährt die komplette Zelle. OTT bietet mit TransLift, TransEdge und TransCompact drei Systeme für unterschiedliche Teilegrößen und Taktzeiten.',
      en: 'Return systems automatically bring workpieces back to the edgebander – a single operator runs the entire cell. With TransLift, TransEdge and TransCompact, OTT offers three systems for different part sizes and cycle times.',
      cz: 'Vratné dopravníkové systémy automaticky vracejí dílce zpět k olepovačce hran – celou buňku tak obsluhuje jediný pracovník. OTT nabízí tři systémy TransLift, TransEdge a TransCompact pro různé velikosti dílců a takty výroby.',
      sk: 'Spätné dopravníkové systémy automaticky vracajú dielce späť k olepovačke hrán – celú bunku tak obsluhuje jediný pracovník. OTT ponúka tri systémy TransLift, TransEdge a TransCompact pre rôzne veľkosti dielcov a takty výroby.',
      hu: 'A visszafutó rendszerek automatikusan visszajuttatják a munkadarabokat az élzárógéphez – a teljes cellát egyetlen kezelő működteti. Az OTT három rendszert kínál: TransLift, TransEdge és TransCompact, különböző alkatrészméretekhez és ütemidőkhöz.',
    },
  },
};
