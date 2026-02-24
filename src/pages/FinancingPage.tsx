import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../App';

type FundingSection = {
  id: string;
  title: string;
  program: string;
  savingsHighlight: string;
  criteria: string;
  funding: string;
  savings: string;
  advantage: string;
};

const FinancingPage = () => {
  const { lang } = useLanguage();
  const locale = lang === 'de' || lang === 'en' || lang === 'cz' ? lang : 'en';
  const tr = (de: string, en: string, cz: string) => (
    locale === 'de' ? de : locale === 'cz' ? cz : en
  );
  const fundingImage = 'https://www.zabala.eu/wp-content/uploads/2024/11/EU-budget-1200x821.jpeg';

  const qaLabels = {
    criteria: tr('Was sind die Kriterien?', 'What are the criteria?', 'Jaká jsou kritéria?'),
    funding: tr('Was genau wird gefördert?', 'What exactly is funded?', 'Co přesně je podporováno?'),
    savings: tr('Wie viel Geld spare ich?', 'How much can I save?', 'Kolik mohu ušetřit?'),
    advantage: tr('Der Asamer-Vorteil', 'The Asamer advantage', 'Výhoda Asamer'),
  };
  const fundingInquiryPrefix = tr('Förderungsanfrage', 'Funding inquiry', 'Dotační poptávka');

  const sections: FundingSection[] = [
    {
      id: 'digitales-unternehmen',
      title: tr(
        'Digitales Unternehmen (OP TAK)',
        'Digital Enterprise (OP TAK)',
        'Digitální podnik (OP TAK)'
      ),
      program: 'OP TAK',
      savingsHighlight: tr('15 % bis 45 %', '15% to 45%', '15 % až 45 %'),
      criteria: tr(
        'KMU in Tschechien außerhalb Prags. Das Projekt muss die digitale Reife des Betriebs messbar erhöhen.',
        'SMEs in the Czech Republic outside Prague. The project must measurably increase the company’s digital maturity.',
        'MSP v České republice mimo Prahu. Projekt musí měřitelně zvýšit digitální vyspělost podniku.'
      ),
      funding: tr(
        'Gefördert werden Maschinenvernetzung, ERP-Systeme, Robotik, Automatisierung und die Integration aktueller Technik in den digitalen Workflow. Reine Ersatzinvestitionen sind ausgeschlossen.',
        'Funding covers machine connectivity, ERP systems, robotics, automation, and integration of modern technology into digital workflows. Pure replacement investments are excluded.',
        'Podporováno je propojení strojů, ERP systémy, robotika, automatizace a integrace moderních technologií do digitálního workflow. Pouhé náhradní investice jsou vyloučeny.'
      ),
      savings: tr(
        '15 % bis 45 % Zuschuss. Förderfähiges Projektvolumen: 2,5 Mio. CZK bis 100 Mio. CZK.',
        '15% to 45% grant. Eligible project size: CZK 2.5 million to CZK 100 million.',
        'Dotace 15 % až 45 %. Způsobilý objem projektu: 2,5 mil. CZK až 100 mil. CZK.'
      ),
      advantage: tr(
        'Unsere Anlagen sind Industry 4.0 ready. Asamer liefert die nötigen Schnittstellen und Datenprotokolle, damit Ihre Investition als digitale Transformation anerkannt wird.',
        'Our systems are Industry 4.0 ready. Asamer provides the required interfaces and data protocols so your investment is recognized as digital transformation.',
        'Naše zařízení jsou připravena na Industry 4.0. Asamer dodává potřebná rozhraní a datové protokoly, aby byla investice uznána jako digitální transformace.'
      ),
    },
    {
      id: 'innovation',
      title: tr('Innovation (OP TAK)', 'Innovation (OP TAK)', 'Inovace (OP TAK)'),
      program: 'OP TAK',
      savingsHighlight: tr('Bis zu 45 %', 'Up to 45%', 'Až 45 %'),
      criteria: tr(
        'Für Unternehmen, die neue Produkte einführen oder Produktionsprozesse grundlegend innovieren, etwa mit neuen Materialien oder höherer Präzision.',
        'For companies introducing new products or fundamentally innovating production processes, for example with new materials or higher precision.',
        'Pro podniky, které zavádějí nové produkty nebo zásadně inovují výrobní procesy, například pomocí nových materiálů nebo vyšší přesnosti.'
      ),
      funding: tr(
        'Gefördert werden High-End-Produktionstechnologien für innovative Produkte, Prototypenbau und die Implementierung von Design in die Fertigung.',
        'Funding supports high-end production technologies for innovative products, prototyping, and design implementation in manufacturing.',
        'Podporovány jsou špičkové výrobní technologie pro inovativní produkty, prototypování a implementace designu do výroby.'
      ),
      savings: tr(
        'Bis zu 45 % Förderung der förderfähigen Kosten.',
        'Up to 45% funding of eligible costs.',
        'Až 45 % podpory způsobilých nákladů.'
      ),
      advantage: tr(
        'Asamer bietet modernste Technologiepartner für technologische Sprünge über Marktstandard hinaus. Genau dieser Innovationsgehalt ist ein Kernkriterium für starke Anträge.',
        'Asamer provides cutting-edge technology partners for leaps beyond market standards. This level of innovation is a core criterion for strong applications.',
        'Asamer nabízí špičkové technologické partnery pro technologické skoky nad rámec tržního standardu. Právě tato míra inovace je klíčovým kritériem silné žádosti.'
      ),
    },
    {
      id: 'technologische-investitionen',
      title: tr(
        'Technologische Investitionen (MZe)',
        'Technological Investments (MZe)',
        'Technologické investice (MZe)'
      ),
      program: 'MZe / SZP',
      savingsHighlight: tr('Sätze gemäß SZP', 'Rates per SZP', 'Sazby dle SZP'),
      criteria: tr(
        'Für Primärverarbeiter von Holz (Sägewerke, Rundholzplätze) und Forstbetriebe in Tschechien.',
        'For primary wood processors (sawmills, log yards) and forestry businesses in the Czech Republic.',
        'Pro prvotní zpracovatele dřeva (pily, sklady kulatiny) a lesnické podniky v České republice.'
      ),
      funding: tr(
        'Gefördert werden Maschinen für Einschnitt, Sortierung und Primärverarbeitung von Holz zur Steigerung der regionalen Wertschöpfung.',
        'Funding includes machinery for sawing, sorting, and primary wood processing to increase regional value creation.',
        'Podporovány jsou stroje pro pořez, třídění a prvotní zpracování dřeva za účelem zvýšení regionální přidané hodnoty.'
      ),
      savings: tr(
        'Spezifische Fördersätze gemäß Strategischem Plan 2023-2027 (SZP).',
        'Specific funding rates according to the Strategic Plan 2023-2027 (SZP).',
        'Specifické sazby podpory dle Strategického plánu 2023-2027 (SZP).'
      ),
      advantage: tr(
        'Asamer kennt die rauen Bedingungen in der Primärverarbeitung und liefert robuste, hocheffiziente Systemlösungen, die exakt zu den Förderrichtlinien des Landwirtschaftsministeriums passen.',
        'Asamer understands the harsh conditions of primary processing and delivers robust, high-efficiency system solutions that match Ministry of Agriculture guidelines.',
        'Asamer rozumí náročným podmínkám prvotního zpracování a dodává robustní, vysoce efektivní systémová řešení, která přesně odpovídají pravidlům ministerstva zemědělství.'
      ),
    },
  ];

  const matrixRows = [
    { label: qaLabels.criteria, values: sections.map((section) => section.criteria) },
    { label: qaLabels.funding, values: sections.map((section) => section.funding) },
    { label: qaLabels.savings, values: sections.map((section) => section.savings) },
    { label: qaLabels.advantage, values: sections.map((section) => section.advantage) },
  ];

  return (
    <div className="bg-dark min-h-screen">
      <section className="pt-36 pb-10 financing-hero">
        <div className="container-wide">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 min-h-[320px]">
            <img
              src={fundingImage}
              alt={tr('EU-Förderbudget', 'EU funding budget', 'Rozpočet EU na dotace')}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,15,0.92)] via-[rgba(10,10,15,0.78)] to-[rgba(10,10,15,0.45)]" />
            <div className="relative p-8 md:p-12 max-w-4xl">
              <div className="accent-line mb-6" />
              <h1 className="text-section font-display font-light text-white mb-6">
                {tr(
                  'Förderkompass für tschechische Holzbetriebe',
                  'Funding guide for Czech woodworking companies',
                  'Dotační průvodce pro české dřevozpracující podniky'
                )}
              </h1>
              <p className="text-white/75 text-lg leading-relaxed">
                {tr(
                  'Schneller Vergleich der wichtigsten Förderprogramme und konkrete Orientierung für Ihre nächste Maschineninvestition mit Asamer.',
                  'Quick comparison of key funding programs and concrete guidance for your next machinery investment with Asamer.',
                  'Rychlé srovnání hlavních dotačních programů a konkrétní orientace pro vaši další investici do strojů s Asamer.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-wide">
          <div className="rounded-3xl border border-white/10 bg-dark-elevated overflow-hidden">
            <div className="px-6 md:px-8 py-5 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-display font-light text-white">
                {tr('Schnellvergleich', 'Quick comparison', 'Rychlé srovnání')}
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-[920px] w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-6 md:px-8 py-4 text-white/50 text-sm font-medium w-[260px]">
                      {tr('Frage', 'Question', 'Otázka')}
                    </th>
                    {sections.map((section, index) => (
                      <th key={section.id} className="text-left px-6 py-4 text-white font-medium">
                        <div className="text-xs uppercase tracking-widest text-primary mb-1">
                          {tr('Förderung', 'Funding', 'Dotace')} 0{index + 1}
                        </div>
                        <div className="text-sm leading-snug">{section.title}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {matrixRows.map((row) => (
                    <tr key={row.label} className="align-top border-b border-white/10 last:border-b-0">
                      <th className="text-left px-6 md:px-8 py-5 text-sm text-primary font-medium uppercase tracking-wide">
                        {row.label}
                      </th>
                      {row.values.map((value, index) => (
                        <td key={`${row.label}-${index}`} className="px-6 py-5 text-white/75 text-sm leading-relaxed">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide space-y-8">
          {sections.map((section, sectionIndex) => {
            const fundingInquiryMail = `mailto:max@asamer.net?subject=${encodeURIComponent(
              `${fundingInquiryPrefix}: ${section.title}`
            )}`;

            return (
            <article id={section.id} key={section.id} className="rounded-3xl border border-white/10 overflow-hidden bg-dark-elevated">
              <div className="px-6 md:px-8 py-6 border-b border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-primary mb-2">
                    {tr('Förderung', 'Funding', 'Dotace')} 0{sectionIndex + 1}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-light text-white">
                    {section.title}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full border border-white/15 bg-dark-card text-white/80 text-sm">
                    {section.program}
                  </span>
                  <span className="px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm">
                    {section.savingsHighlight}
                  </span>
                </div>
              </div>

              <div className="px-6 md:px-8 py-6">
                <dl className="divide-y divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
                  {[
                    { label: qaLabels.criteria, value: section.criteria },
                    { label: qaLabels.funding, value: section.funding },
                    { label: qaLabels.savings, value: section.savings },
                    { label: qaLabels.advantage, value: section.advantage },
                  ].map((item) => (
                    <div key={item.label} className="grid lg:grid-cols-[260px,1fr]">
                      <dt className="px-5 py-4 text-primary text-xs uppercase tracking-[0.16em] bg-dark-card border-b lg:border-b-0 lg:border-r border-white/10">
                        {item.label}
                      </dt>
                      <dd className="px-5 py-4 text-white/75 leading-relaxed">{item.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 rounded-2xl border border-white/10 bg-dark-card px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-white/65 text-sm">
                      {tr(
                        'Kurzer Eligibility-Check für Ihr Projekt inkl. nächster Schritte.',
                        'Short eligibility check for your project including next steps.',
                        'Rychlá kontrola způsobilosti vašeho projektu včetně dalších kroků.'
                      )}
                    </p>
                  </div>
                  <a href={fundingInquiryMail} className="btn-primary-dark whitespace-nowrap justify-center">
                    {tr(
                      'Prüfen Sie Ihre Förderfähigkeit mit Asamer',
                      'Check your funding eligibility with Asamer',
                      'Ověřte svou způsobilost k dotaci s Asamer'
                    )}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FinancingPage;
