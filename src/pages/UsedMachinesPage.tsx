import { ArrowRight, CheckCircle2, Mail, Tag } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';

type UsedMachine = {
  name: string;
  manufacturer: string;
  year: number;
  condition: string;
  status?: string;
  shortDescription: string;
  image?: string;
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
      name: 'Kappa 80',
      manufacturer: 'Mayer',
      year: 2018,
      condition: tr('sehr gut', 'very good', 'velmi dobry'),
      status: tr('verfugbar', 'available', 'k dispozici'),
      shortDescription: tr(
        'Kompakter Einstieg in den professionellen Plattenzuschnitt.',
        'Compact entry into professional panel cutting.',
        'Kompaktni vstup do profesionalniho rezani desek.'
      ),
    },
    {
      name: 'Tornado+',
      manufacturer: 'OTT',
      year: 2017,
      condition: tr('gut', 'good', 'dobry'),
      status: tr('verfugbar', 'available', 'k dispozici'),
      image: 'https://www.ottpaul.com/fileadmin/_processed_/b/a/csm_tornado-plus-ansicht-re_207e512b4f.png',
      shortDescription: tr(
        'Bewahrte Kantenleimtechnologie fur robuste Serienfertigung.',
        'Proven edgebanding technology for reliable serial production.',
        'Overena olepovaci technologie pro spolehlivou seriovou vyrobu.'
      ),
    },
    {
      name: 'CSF 2.0',
      manufacturer: 'BARBARIC',
      year: 2019,
      condition: tr('sehr gut', 'very good', 'velmi dobry'),
      status: tr('auf Anfrage', 'on request', 'na dotaz'),
      shortDescription: tr(
        'Effizientes Flachenlager fur stabilen Materialfluss.',
        'Efficient panel storage for stable material flow.',
        'Efektivni plosny sklad pro stabilni tok materialu.'
      ),
    },
  ];

  const generalInquiryMail = `mailto:office@asamer.net?subject=${encodeURIComponent(
    tr('Gebrauchtmaschine Anfrage', 'Used machine inquiry', 'Poptavka na pouzity stroj')
  )}`;

  return (
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
            const inquiryMail = `mailto:office@asamer.net?subject=${encodeURIComponent(
              `${tr('Gebrauchtmaschine Anfrage', 'Used machine inquiry', 'Poptavka na pouzity stroj')}: ${machine.manufacturer} ${machine.name}`
            )}`;
            return (
              <article key={`${machine.manufacturer}-${machine.name}`} className="bg-dark-card rounded-2xl border border-white/10 p-6">
                {machine.image ? (
                  <div className="mb-5 rounded-xl overflow-hidden border border-white/10 bg-black/20">
                    <img
                      src={machine.image}
                      alt={`${machine.manufacturer} ${machine.name}`}
                      className="w-full aspect-[4/3] object-contain bg-black/10"
                      loading="lazy"
                    />
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
                    <p className="text-white/50 text-sm">{tr('Baujahr', 'Year', 'Rok')}: {machine.year}</p>
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
                <a href={inquiryMail} className="btn-outline-dark w-full justify-center">
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
            <a href={generalInquiryMail} className="btn-primary-dark sm:whitespace-nowrap justify-center">
              {tr('Anfrage starten', 'Start inquiry', 'Zahajit poptavku')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsedMachinesPage;
