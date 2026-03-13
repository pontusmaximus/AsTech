import { ArrowRight, CheckCircle2, Mail, Tag } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { trackEvent } from '../lib/analytics';

type UsedMachine = {
  name: string;
  manufacturer: string;
  year?: number;
  condition: string;
  status?: string;
  shortDescription: string;
  images?: string[];
};

const UsedMachinesPage = () => {
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

  const machines: UsedMachine[] = [
    {
      name: '1308XL Power',
      manufacturer: 'HOLZ-HER',
      condition: tr('sehr gut', 'very good', 'velmi dobry'),
      status: tr('verfugbar', 'available', 'k dispozici'),
      images: ['/images/used-machines/holz-her-1308xl-power.jpg'],
      shortDescription: tr(
        'Kantenleimmaschine fur prazise Kantenbearbeitung.',
        'Edgebanding machine for precise edge finishing.',
        'Olepovacka hran pro presne dokonceni hran.'
      ),
    },
    {
      name: 'FH 4 330 220 automatic',
      manufacturer: 'SCHELLING',
      year: 2015,
      condition: tr('sehr gut', 'very good', 'velmi dobry'),
      status: tr('verfugbar', 'available', 'k dispozici'),
      images: [
        '/images/used-machines/schelling-fh4-330-220-automatic-1.jpg',
        '/images/used-machines/schelling-fh4-330-220-automatic-2.jpg',
      ],
      shortDescription: tr(
        'Automatisches Plattensagezentrum fur effizienten Zuschnitt.',
        'Automatic panel saw for efficient cutting.',
        'Automaticka panelova pila pro efektivni rezani.'
      ),
    },
    {
      name: 'S 200',
      manufacturer: 'HOMAG',
      year: 2022,
      condition: tr('sehr gut', 'very good', 'velmi dobry'),
      status: tr('verfugbar', 'available', 'k dispozici'),
      images: ['/images/used-machines/homag-s-200-1.jpg', '/images/used-machines/homag-s-200-2.jpg'],
      shortDescription: tr(
        'Kantenleimmaschine mit 93.000 lfm Laufleistung.',
        'Edgebanding machine with 93,000 lfm of usage.',
        'Olepovacka hran s najezdem 93 000 lfm.'
      ),
    },
  ];

  const generalInquiryMail = buildMailto(
    'office@asamer.net',
    tr('Gebrauchtmaschine Anfrage', 'Used machine inquiry', 'Poptavka na pouzity stroj')
  );

  const handleMachineInquiryClick = (machine: UsedMachine, placement: string) => {
    trackEvent('used_machine_inquiry_click', {
      product_name: machine.name,
      manufacturer: machine.manufacturer,
      placement,
      lang,
    });
  };

  return (
    <>
      <SeoHead routeKey="usedMachines" />
      <div className="bg-dark min-h-screen">
      <section className="pt-28 md:pt-36 pb-16">
        <div className="container-wide">
          <div className="max-w-5xl">
            <div className="accent-line mb-6" />
            <h1 className="text-section font-display font-light text-white mb-6">
              {tr('Gebrauchtmaschinen', 'Used machines', 'Pouzite stroje')}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-4xl">
              {tr(
                'Ausgewahlte Maschinen aus dem Bestand. Jedes Angebot wird technisch gepruft und mit klarem Zustand gelistet.',
                'Selected machines from stock. Each offer is technically checked and listed with a clear condition.',
                'Vybrane stroje ze skladu. Kazda nabidka je technicky overena a ma jasne uvedeny stav.'
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-wide grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {machines.map((machine) => {
            const inquiryMail = buildMailto(
              'office@asamer.net',
              `${tr('Gebrauchtmaschine Anfrage', 'Used machine inquiry', 'Poptavka na pouzity stroj')}: ${machine.manufacturer} ${machine.name}`
            );
            return (
              <article key={`${machine.manufacturer}-${machine.name}`} className="bg-dark-card rounded-2xl border border-white/10 p-6">
                {machine.images && machine.images.length > 0 ? (
                  <div
                    className={`mb-5 grid gap-3 ${machine.images.length > 1 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}
                  >
                    {machine.images.map((src, index) => (
                      <div key={`${machine.manufacturer}-${machine.name}-${index}`} className="rounded-xl overflow-hidden border border-white/10 bg-black/20">
                        <img
                          src={src}
                          alt={`${machine.manufacturer} ${machine.name} ${index + 1}`}
                          className="w-full aspect-[4/3] object-contain bg-black/10"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
                    <Tag className="w-5 h-5 text-primary" />
                  </div>
                )}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h2 className="text-2xl font-display font-light text-white">
                      {machine.manufacturer} {machine.name}
                    </h2>
                    {typeof machine.year === 'number' ? (
                      <p className="text-white/50 text-sm">
                        {tr('Baujahr', 'Year', 'Rok')}: {machine.year}
                      </p>
                    ) : null}
                  </div>
                  {machine.status ? (
                    <span className="text-xs uppercase tracking-widest text-primary">
                      {machine.status}
                    </span>
                  ) : null}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">{machine.shortDescription}</p>
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-white/75 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>{tr('Zustand', 'Condition', 'Stav')}: {machine.condition}</span>
                  </div>
                </div>
                <a
                  href={inquiryMail}
                  className="btn-outline-dark w-full justify-center"
                  onClick={() => handleMachineInquiryClick(machine, 'card')}
                >
                  <Mail className="w-4 h-4" />
                  {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptavku')}
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide">
          <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="text-2xl font-display font-light text-white mb-2">
                {tr('Gebrauchtmaschine anfragen', 'Request a used machine', 'Poptat pouzity stroj')}
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">
                {tr(
                  'Sagen Sie uns, welche Maschine Sie suchen. Wir melden uns mit verfugbaren Optionen.',
                  'Tell us which machine you are looking for. We will respond with available options.',
                  'Rekněte nam, jaky stroj hledate. Ozveme se s dostupnymi moznostmi.'
                )}
              </p>
            </div>
            <a
              href={generalInquiryMail}
              className="btn-primary-dark sm:whitespace-nowrap justify-center"
              onClick={() =>
                trackEvent('used_machine_inquiry_click', {
                  product_name: 'general',
                  manufacturer: 'general',
                  placement: 'general_cta',
                  lang,
                })
              }
            >
              {tr('Anfrage starten', 'Start inquiry', 'Zahajit poptavku')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default UsedMachinesPage;
