import { ArrowRight, CheckCircle2, Factory, Layers3, ScissorsSquare } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';

const SolutionsPage = () => {
  const { lang } = useLanguage();
  const locale =
    lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu'
      ? lang
      : 'en';

  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') {
      return translatePageText(locale, en, cz);
    }
    return en;
  };

  const targetGroups = [
    {
      icon: ScissorsSquare,
      title: tr('Tischlerei & Innenausbau', 'Joinery & interior fit-out', 'Truhlářství a interiérové vybavení'),
      description: tr(
        'Für klassische Tischlereien, die präziser und schneller fertigen wollen, ohne sofort die gesamte Produktion umzubauen.',
        'For traditional joineries that want to produce faster and more precisely without rebuilding the entire production right away.',
        'Pro klasické truhlárny, které chtějí vyrábět rychleji a přesněji bez okamžité kompletní přestavby výroby.'
      ),
      points: [
        tr('Einstieg mit performanten Sägen und Kantenlösungen', 'Entry setup with high-performance saws and edge solutions', 'Vstupní sestava s výkonnými pilami a řešeními olepování hran'),
        tr('Schnelle Inbetriebnahme und kurze Schulungszeiten', 'Fast commissioning and short training times', 'Rychlé zprovoznění a krátké časy školení'),
        tr('Skalierbar für spätere Automatisierungsschritte', 'Scalable for later automation steps', 'Škálovatelné pro pozdější kroky automatizace'),
      ],
    },
    {
      icon: Layers3,
      title: tr('Automatisierter Zuschnittbetrieb', 'Automated cutting operation', 'Automatizovaný provoz řezání'),
      description: tr(
        'Für Betriebe mit hohem Durchsatz, die Materialfluss, Lagerlogik und Auslastung messbar optimieren möchten.',
        'For high-throughput operations that want to measurably optimize material flow, storage logic, and machine utilization.',
        'Pro provozy s vysokou průchodností, které chtějí měřitelně optimalizovat tok materiálu, skladovou logiku a využití strojů.'
      ),
      points: [
        tr('Anbindung von Lager, Zuschnitt und Rückführung', 'Integration of storage, cutting, and return flow', 'Propojení skladu, řezání a vracení zbytků'),
        tr('Weniger manuelle Wege, höhere Prozessstabilität', 'Fewer manual movements, higher process stability', 'Méně ručních přesunů, vyšší stabilita procesů'),
        tr('Transparente Datenbasis für Planung und Steuerung', 'Transparent data base for planning and control', 'Transparentní datová základna pro plánování a řízení'),
      ],
    },
    {
      icon: Factory,
      title: tr('Vollautomatisierte Möbelproduktion', 'Fully automated furniture production', 'Plně automatizovaná výroba nábytku'),
      description: tr(
        'Für Möbelproduzenten, die durchgängig automatisierte Linien mit reproduzierbarer Qualität und maximaler Verfügbarkeit benötigen.',
        'For furniture manufacturers that need fully automated lines with repeatable quality and maximum availability.',
        'Pro výrobce nábytku, kteří potřebují plně automatizované linky s reprodukovatelnou kvalitou a maximální dostupností.'
      ),
      points: [
        tr('End-to-end Konzept von Materialeingang bis Auslauf', 'End-to-end concept from material intake to output', 'Komplexní koncept od vstupu materiálu po výstup'),
        tr('Schnittstellen zu ERP/MES und Produktionssoftware', 'Interfaces to ERP/MES and production software', 'Rozhraní k ERP/MES a výrobnímu softwaru'),
        tr('Hohe Taktleistung bei stabilen Qualitätsstandards', 'High cycle performance with stable quality standards', 'Vysoký takt při stabilních standardech kvality'),
      ],
    },
  ];

  const implementationSteps = [
    tr('Analyse Ihrer aktuellen Produktion und Zieldefinition', 'Analysis of your current production and target definition', 'Analýza vaší aktuální výroby a definice cílů'),
    tr('Technologiekonzept inkl. Automatisierungsstufen', 'Technology concept including automation stages', 'Technologický koncept včetně stupňů automatizace'),
    tr('Umsetzung mit Montage, Inbetriebnahme und Schulung', 'Implementation with assembly, commissioning, and training', 'Realizace včetně montáže, zprovoznění a školení'),
    tr('Begleitung im Betrieb mit Service und Optimierung', 'Operational support with service and optimization', 'Podpora během provozu se servisem a optimalizací'),
  ];

  const inquiryMail = `mailto:office@asamer.net?subject=${encodeURIComponent(
    tr('Projektanfrage Lösungen', 'Project inquiry solutions', 'Projektová poptávka řešení')
  )}`;

  return (
    <div className="bg-dark min-h-screen">
      <section className="pt-36 pb-16">
        <div className="container-wide">
          <div className="max-w-5xl">
            <div className="accent-line mb-6" />
            <h1 className="text-section font-display font-light text-white mb-6">
              {tr(
                'Lösungen für Tischlerei bis vollautomatisierte Möbelproduktion',
                'Solutions from joinery to fully automated furniture production',
                'Řešení od truhlářství po plně automatizovanou výrobu nábytku'
              )}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-4xl">
              {tr(
                'Wir planen Ihre Linie so, dass sie zu Ihrem Betrieb passt: von robusten Einstiegslösungen bis zu vollständig vernetzten Produktionssystemen mit Industrie-4.0-Logik.',
                'We design your line to match your operation: from robust entry solutions to fully connected production systems with Industry 4.0 logic.',
                'Navrhujeme vaši linku tak, aby odpovídala vašemu provozu: od robustních vstupních řešení až po plně propojené výrobní systémy s logikou Průmyslu 4.0.'
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-wide grid lg:grid-cols-3 gap-6">
          {targetGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.title} className="bg-dark-card rounded-2xl border border-white/10 p-6">
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-display font-light text-white mb-3">{group.title}</h2>
                <p className="text-white/70 text-sm leading-relaxed mb-5">{group.description}</p>
                <ul className="space-y-3">
                  {group.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-white/75 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pb-20">
        <div className="container-wide">
          <div className="rounded-2xl border border-white/10 bg-dark-elevated p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-6">
              {tr('Unser Vorgehen in 4 Schritten', 'Our 4-step approach', 'Náš postup ve 4 krocích')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {implementationSteps.map((step, index) => (
                <div key={step} className="bg-dark-card rounded-xl border border-white/10 px-4 py-3">
                  <div className="text-primary text-xs tracking-widest uppercase mb-1">0{index + 1}</div>
                  <p className="text-white/75 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide">
          <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="text-2xl font-display font-light text-white mb-2">
                {tr('Sie planen den nächsten Ausbauschritt?', 'Planning your next expansion step?', 'Plánujete další krok rozvoje?')}
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">
                {tr(
                  'Wir erstellen ein konkretes Konzept für Ihren Betrieb mit klarer Priorisierung von Investition, Nutzen und Umsetzungszeit.',
                  'We create a concrete concept for your operation with clear priorities for investment, benefit, and implementation time.',
                  'Připravíme konkrétní koncept pro váš provoz s jasnou prioritizací investice, přínosu a času realizace.'
                )}
              </p>
            </div>
            <a href={inquiryMail} className="btn-primary-dark whitespace-nowrap justify-center">
              {tr('Projektgespräch starten', 'Start project call', 'Zahájit projektovou konzultaci')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
