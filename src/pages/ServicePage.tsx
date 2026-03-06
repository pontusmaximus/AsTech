import { AlertTriangle, ArrowRight, Award, ShieldCheck, Wrench } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';

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
      icon: Award,
      title: tr('30 Jahre Erfahrung mit führenden Herstellern', '30 years of experience with leading manufacturers', '30 let zkušeností s předními výrobci'),
      description: tr(
        'Praxis aus Projekten mit OTT, IMA Schelling, Mühlböck und weiteren Partnern.',
        'Hands-on project experience with OTT, IMA Schelling, Muehlboeck, and other partners.',
        'Praktické zkušenosti z projektů s OTT, IMA Schelling, Muehlboeck a dalšími partnery.'
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

  const serviceInquiryMail = buildMailto(
    'office@asamer.net',
    tr('Serviceanfrage Asamer', 'Service inquiry Asamer', 'Servisní poptávka Asamer')
  );

  return (
    <>
      <SeoHead routeKey="service" />
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
                'Unser Montage- und Serviceteam sorgt dafür, dass Ihre Produktion läuft. Mit 30 Jahren Erfahrung mit OTT, IMA Schelling, Mühlböck und weiteren Herstellern reagieren wir bei Stillstand mit Notfallservice und Expresslösungen.',
                'Our assembly and service team keeps your production running. With 30 years of experience with OTT, IMA Schelling, Muehlboeck, and other manufacturers, we respond to downtime with emergency service and express solutions.',
                'Náš montážní a servisní tým zajišťuje plynulý chod vaší výroby. S 30 lety zkušeností s OTT, IMA Schelling, Muehlboeck a dalšími výrobci reagujeme při odstávce nouzovým servisem a expresními řešeními.'
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
                  'Serviceanfrage für geplante Einsätze oder schnelle Unterstützung im Störungsfall.',
                  'Service inquiry for planned interventions or fast support in case of incidents.',
                  'Servisní poptávka pro plánované zásahy nebo rychlá podpora při poruše.'
                )}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={serviceInquiryMail} className="btn-primary-dark justify-center">
                {tr('Serviceanfrage senden', 'Send service inquiry', 'Odeslat servisní poptávku')}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ServicePage;
