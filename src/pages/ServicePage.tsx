import { AlertTriangle, ArrowRight, Phone, ShieldCheck, Wrench } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';

const ServicePage = () => {
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

  const pillars = [
    {
      icon: Wrench,
      title: tr('Montage & Inbetriebnahme', 'Assembly & commissioning', 'Montáž a uvedení do provozu'),
      description: tr(
        'Unser Montage- und Serviceteam begleitet Ihre Anlage von der Aufstellung bis zur stabilen Produktion im täglichen Betrieb.',
        'Our assembly and service team supports your system from installation to stable day-to-day production.',
        'Náš montážní a servisní tým doprovází vaše zařízení od instalace až po stabilní každodenní výrobu.'
      ),
    },
    {
      icon: AlertTriangle,
      title: tr('Notfallservice mit Expresslösungen', 'Emergency service with express solutions', 'Nouzový servis s expresními řešeními'),
      description: tr(
        'Wenn der Betrieb stillsteht, priorisieren wir Ihre Störung sofort und arbeiten mit klaren Sofortmaßnahmen zur schnellstmöglichen Wiederaufnahme.',
        'If production is down, we prioritize your incident immediately and apply clear immediate actions to resume operations as quickly as possible.',
        'Pokud je výroba odstavená, okamžitě priorizujeme váš incident a nasazujeme jasná okamžitá opatření pro co nejrychlejší obnovení provozu.'
      ),
    },
    {
      icon: Phone,
      title: tr('24/7 telefonische Erreichbarkeit', '24/7 phone availability', 'Telefonická dostupnost 24/7'),
      description: tr(
        'Rund um die Uhr erreichbar: direkte Abstimmung mit Technikern für Remote-Diagnose, Anleitung vor Ort und Einsatzplanung.',
        'Available around the clock: direct coordination with technicians for remote diagnostics, on-site guidance, and deployment planning.',
        'Dostupnost nepřetržitě: přímá koordinace s techniky pro vzdálenou diagnostiku, vedení na místě a plánování zásahu.'
      ),
    },
    {
      icon: ShieldCheck,
      title: tr('Präventive Wartung', 'Preventive maintenance', 'Preventivní údržba'),
      description: tr(
        'Durch planbare Wartungsfenster, Zustandskontrollen und Ersatzteilstrategie reduzieren wir ungeplante Stillstände nachhaltig.',
        'Through planned maintenance windows, condition checks, and spare-part strategy, we sustainably reduce unplanned downtime.',
        'Pomocí plánovaných servisních oken, kontrol stavu a strategie náhradních dílů dlouhodobě snižujeme neplánované odstávky.'
      ),
    },
  ];

  const emergencySteps = [
    tr('Störungsmeldung mit Sofortklassifizierung', 'Incident report with immediate classification', 'Nahlášení poruchy s okamžitou klasifikací'),
    tr('Express-Diagnose telefonisch oder per Fernzugriff', 'Express diagnostics by phone or remote access', 'Expresní diagnostika telefonicky nebo vzdáleným přístupem'),
    tr('Schnelle Vor-Ort-Lösung durch Serviceeinsatz', 'Fast on-site resolution through service deployment', 'Rychlé řešení na místě prostřednictvím servisního zásahu'),
  ];

  const serviceInquiryMail = `mailto:office@asamer.net?subject=${encodeURIComponent(
    tr('Serviceanfrage Asamer', 'Service inquiry Asamer', 'Servisní poptávka Asamer')
  )}`;

  return (
    <div className="bg-dark min-h-screen">
      <section className="pt-28 md:pt-36 pb-16">
        <div className="container-wide">
          <div className="max-w-5xl">
            <div className="accent-line mb-6" />
            <h1 className="text-section font-display font-light text-white mb-6">
              {tr(
                'Service, wenn es darauf ankommt',
                'Service when it matters most',
                'Servis, když na tom nejvíce záleží'
              )}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-4xl">
              {tr(
                'Unser Montage- und Serviceteam sorgt dafür, dass Ihre Produktion läuft. Bei Stillstand reagieren wir mit Notfallservice, Expresslösungen und 24/7 telefonischer Erreichbarkeit.',
                'Our assembly and service team keeps your production running. In case of downtime, we respond with emergency service, express solutions, and 24/7 phone availability.',
                'Náš montážní a servisní tým zajišťuje plynulý chod vaší výroby. Při odstávce reagujeme nouzovým servisem, expresními řešeními a telefonickou dostupností 24/7.'
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-wide grid md:grid-cols-2 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="bg-dark-card rounded-2xl border border-white/10 p-6">
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-display font-light text-white mb-3">{pillar.title}</h2>
                <p className="text-white/75 text-sm leading-relaxed">{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pb-20">
        <div className="container-wide">
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4">
              {tr('Notfallablauf bei Produktionsstillstand', 'Emergency flow during production downtime', 'Nouzový postup při odstávce výroby')}
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {tr(
                'Wenn jede Minute zählt, arbeiten wir mit einem klaren Eskalationsschema für schnellste Wiederanlaufzeiten.',
                'When every minute counts, we operate with a clear escalation scheme for the fastest possible restart times.',
                'Když se počítá každá minuta, pracujeme s jasným eskalačním schématem pro co nejrychlejší obnovení provozu.'
              )}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {emergencySteps.map((step, index) => (
                <div key={step} className="rounded-xl border border-white/10 bg-dark-card px-4 py-3">
                  <div className="text-red-400 text-xs uppercase tracking-widest mb-1">0{index + 1}</div>
                  <p className="text-white/80 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide">
          <div className="rounded-2xl border border-white/10 bg-dark-elevated p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="text-2xl font-display font-light text-white mb-2">
                {tr('Sofort Unterstützung anfordern', 'Request support now', 'Požádat o okamžitou podporu')}
              </h3>
              <p className="text-white/70 text-sm">
                {tr(
                  'Telefonisch 24/7 erreichbar oder per Serviceanfrage für geplante Einsätze.',
                  'Reach us by phone 24/7 or via service inquiry for planned interventions.',
                  'Jsme dostupní telefonicky 24/7 nebo přes servisní poptávku pro plánované zásahy.'
                )}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+420123456789" className="btn-outline-dark justify-center">
                {tr('24/7 anrufen', 'Call 24/7', 'Volat 24/7')}
              </a>
              <a href={serviceInquiryMail} className="btn-primary-dark justify-center">
                {tr('Serviceanfrage senden', 'Send service inquiry', 'Odeslat servisní poptávku')}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
