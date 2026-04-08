import { AlertTriangle, ArrowRight, Award, ShieldCheck, Wrench, Phone } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { howToSchema } from '../seo/structuredData';

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
    {
      title: tr('Störung melden', 'Report the incident', 'Nahlásit poruchu'),
      detail: tr(
        'Rufen Sie unsere Service-Hotline an (+420 724 056 965) oder senden Sie eine E-Mail an office@asamer.net. Beschreiben Sie die Störung: Maschinentyp, Fehlermeldung und ob die Produktion steht. Unser Disponent klassifiziert den Vorfall sofort nach Dringlichkeit.',
        'Call our service hotline (+420 724 056 965) or send an email to office@asamer.net. Describe the issue: machine type, error message and whether production is down. Our dispatcher classifies the incident immediately by urgency.',
        'Zavolejte na naši servisní linku (+420 724 056 965) nebo pošlete e-mail na office@asamer.net. Popište poruchu: typ stroje, chybová hláška a zda stojí výroba. Náš dispečer incident okamžitě klasifikuje podle naléhavosti.'
      ),
    },
    {
      title: tr('Express-Ferndiagnose', 'Express remote diagnosis', 'Expresní vzdálená diagnostika'),
      detail: tr(
        'Innerhalb von 2–4 Stunden beginnt unser Techniker mit der telefonischen oder Ferndiagnose. Bei OTT-Maschinen mit Beckhoff-Steuerung kann der Zugriff direkt über die OPC-UA-Schnittstelle erfolgen. In vielen Fällen lässt sich das Problem bereits remote lösen oder eingrenzen.',
        'Within 2–4 hours our technician starts phone or remote diagnostics. For OTT machines with Beckhoff controls, access can be via the OPC-UA interface directly. In many cases the issue can already be resolved or narrowed down remotely.',
        'Do 2–4 hodin náš technik zahájí telefonickou nebo vzdálenou diagnostiku. U strojů OTT s řízením Beckhoff je přístup možný přímo přes rozhraní OPC-UA. V mnoha případech lze problém vyřešit nebo zúžit již vzdáleně.'
      ),
    },
    {
      title: tr('Ersatzteile sichern', 'Secure spare parts', 'Zajistit náhradní díly'),
      detail: tr(
        'Falls Ersatzteile benötigt werden, prüfen wir die Verfügbarkeit in unserem lokalen Lager. Standardteile für OTT, Mayer, BARBARIC und Gannomat sind in der Regel ab Lager lieferbar. Bei Spezialteilen organisieren wir Expresslieferung direkt vom Hersteller.',
        'If spare parts are needed, we check availability in our local warehouse. Standard parts for OTT, Mayer, BARBARIC and Gannomat are usually available from stock. For special parts we organize express delivery directly from the manufacturer.',
        'Pokud jsou potřeba náhradní díly, ověříme dostupnost v našem lokálním skladu. Standardní díly pro OTT, Mayer, BARBARIC a Gannomat jsou obvykle skladem. U speciálních dílů zajistíme expresní dodávku přímo od výrobce.'
      ),
    },
    {
      title: tr('Vor-Ort-Einsatz planen', 'Schedule on-site visit', 'Naplánovat zásah na místě'),
      detail: tr(
        'Ist ein Vor-Ort-Einsatz nötig, planen wir den Techniker innerhalb von 24–48 Stunden ein. Bei Kunden mit Wartungsvertrag gelten verkürzte Reaktionszeiten. Der Techniker bringt die identifizierten Ersatzteile mit und arbeitet nach einem klaren Einsatzprotokoll.',
        'If an on-site visit is needed, we schedule a technician within 24–48 hours. Customers with maintenance contracts benefit from shorter response times. The technician brings the identified spare parts and follows a clear service protocol.',
        'Pokud je nutný zásah na místě, naplánujeme technika do 24–48 hodin. Zákazníci s servisní smlouvou mají zkrácené reakční doby. Technik přiveze identifikované náhradní díly a postupuje podle jasného servisního protokolu.'
      ),
    },
    {
      title: tr('Wiederanlauf und Protokoll', 'Restart and documentation', 'Obnovení provozu a dokumentace'),
      detail: tr(
        'Nach der Reparatur wird die Maschine gemeinsam mit Ihrem Bedienpersonal wieder in Betrieb genommen. Wir erstellen ein vollständiges Einsatzprotokoll mit Ursachenanalyse und Empfehlungen zur Vermeidung künftiger Ausfälle. Bei Bedarf planen wir direkt einen präventiven Wartungstermin.',
        'After repair the machine is restarted together with your operating staff. We create a complete service report with root cause analysis and recommendations to prevent future failures. If needed we schedule a preventive maintenance appointment on the spot.',
        'Po opravě je stroj společně s vaší obsluhou opětovně spuštěn. Vytvoříme kompletní servisní protokol s analýzou příčin a doporučeními k prevenci budoucích výpadků. V případě potřeby rovnou naplánujeme preventivní servisní termín.'
      ),
    },
  ];

  const howToSteps = emergencySteps.map((s) => ({ name: s.title, text: s.detail }));
  const howToData = howToSchema(
    tr('Was tun bei Produktionsausfall?', 'What to do during production downtime?', 'Co dělat při výpadku výroby?'),
    tr(
      'Schritt-für-Schritt-Anleitung für den Notfall bei Maschinenausfall. Asamer Technologie – Service-Hotline, Ferndiagnose und Vor-Ort-Einsatz.',
      'Step-by-step guide for emergencies during machine downtime. Asamer Technology – service hotline, remote diagnosis and on-site support.',
      'Krok za krokem průvodce pro případ poruchy stroje. Asamer Technologie – servisní linka, vzdálená diagnostika a zásah na místě.'
    ),
    howToSteps,
  );

  const serviceInquiryMail = buildMailto(
    'office@asamer.net',
    tr('Serviceanfrage Asamer', 'Service inquiry Asamer', 'Servisní poptávka Asamer')
  );

  return (
    <>
      <SeoHead routeKey="service" structuredData={[howToData]} />
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
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-2">
              {tr('Was tun bei Produktionsausfall?', 'What to do during production downtime?', 'Co dělat při výpadku výroby?')}
            </h2>
            <p className="text-white/55 text-sm leading-relaxed mb-8">
              {tr(
                'Wenn jede Minute zählt, arbeiten wir mit einem klaren Eskalationsschema für schnellste Wiederanlaufzeiten. Folgen Sie diesen Schritten:',
                'When every minute counts, we operate with a clear escalation scheme for the fastest possible restart times. Follow these steps:',
                'Když se počítá každá minuta, pracujeme s jasným eskalačním schématem pro co nejrychlejší obnovení provozu. Postupujte podle těchto kroků:'
              )}
            </p>
            <div className="space-y-4">
              {emergencySteps.map((step, index) => (
                <div key={step.title} className="rounded-xl border border-white/10 bg-dark-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-400 text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-2">{step.title}</h3>
                      <p className="text-white/65 text-sm leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-dark-card border border-white/10 flex flex-col sm:flex-row sm:items-center gap-3">
              <Phone className="w-5 h-5 text-red-400 shrink-0" />
              <div className="flex-1">
                <span className="text-white text-sm font-medium">
                  {tr('Service-Hotline:', 'Service hotline:', 'Servisní linka:')}
                </span>
                <a href="tel:+420724056965" className="text-primary text-sm ml-2 hover:underline">+420 724 056 965</a>
                <span className="text-white/40 text-sm ml-3">|</span>
                <a href="mailto:office@asamer.net" className="text-primary text-sm ml-3 hover:underline">office@asamer.net</a>
              </div>
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
