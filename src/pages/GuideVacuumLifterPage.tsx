import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Phone, HeartPulse, TrendingUp, Hand, Layers, Scissors, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { breadcrumbSchema, faqPageSchema } from '../seo/structuredData';
import { buildLocalizedPath, CANONICAL_DOMAIN } from '../lib/language';
import { localizeSlug } from '../lib/slugs';
import { HERO_FUNDING } from '../data/heroFunding';

const VACUUM_IMAGE =
  'https://www.barbaric.at/fileadmin/_processed_/2/9/csm_UWL3-0364_web_7eeaa62d8e.png';

const GuideVacuumLifterPage = () => {
  const { lang, buildPath } = useLanguage();
  const locale =
    lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu'
      ? lang
      : 'en';
  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  const inquiryMail = buildMailto(
    'office@asamer.net',
    tr('Beratung Vakuumheber Barbaric', 'Vacuum lifter consultation', 'Konzultace vakuový zvedák Barbaric')
  );
  const phone = '+436642633132';
  const funding = HERO_FUNDING[lang];
  const vacuumPath = buildLocalizedPath(lang, localizeSlug('/pruvodce/vakuovy-zvedak-holz', lang));

  const breadcrumbs = breadcrumbSchema([
    { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: 'BARBARIC', url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/barbaric')}` },
    { name: tr('Vakuumheber', 'Vacuum lifters', 'Vakuové zvedáky'), url: `${CANONICAL_DOMAIN}${vacuumPath}` },
  ]);

  const faqItems = [
    {
      q: tr('Welcher Vakuumheber für welches Plattengewicht?', 'Which vacuum lifter for which panel weight?', 'Jaký vakuový zvedák pro jakou hmotnost desky?'),
      a: tr(
        'Die BARBARIC UniWood-Serie deckt von leichten Platten bis ca. 250 kg (UWL 3) und bis 300 kg – optional 500 kg (UWL 3J) ab. Wir empfehlen das passende Modell anhand Ihrer Plattenformate, Gewichte und Maschinen.',
        'The BARBARIC UniWood series covers light panels up to approx. 250 kg (UWL 3) and up to 300 kg – optionally 500 kg (UWL 3J). We recommend the right model based on your panel formats, weights and machines.',
        'Řada BARBARIC UniWood pokrývá lehké desky až do cca 250 kg (UWL 3) a do 300 kg – volitelně 500 kg (UWL 3J). Vhodný model doporučíme podle vašich formátů, hmotností a strojů.'
      ),
    },
    {
      q: tr('Lässt sich ein Vakuumheber fördern?', 'Can a vacuum lifter be funded?', 'Lze vakuový zvedák dotovat?'),
      a: tr(
        'Ja. In CZ, SK und HU ist die Investition oft förderfähig – je nach Markt bis zu 50 %. Wir prüfen die Förderfähigkeit gemeinsam mit Ihnen und kombinieren auf Wunsch mit Leasing.',
        'Yes. In CZ, SK and HU the investment is often eligible for funding – up to 50% depending on the market. We check eligibility together with you and combine with leasing on request.',
        'Ano. V ČR, SR a Maďarsku je investice často dotovatelná – podle trhu až 50 %. Způsobilost ověříme společně s vámi a na přání zkombinujeme s leasingem.'
      ),
    },
    {
      q: tr('An welchen Maschinen funktioniert das?', 'Which machines does it work with?', 'S jakými stroji to funguje?'),
      a: tr(
        'An praktisch allen: Kantenanleimmaschine, Plattenaufteilsäge, CNC, Pressen sowie beim Ein- und Auslagern. Der Heber übernimmt das schwere Heben, Kippen und Wenden der Platte.',
        'With practically all of them: edge banders, panel saws, CNC, presses as well as loading and unloading. The lifter handles the heavy lifting, tilting and turning of the panel.',
        'Prakticky se všemi: olepovačka hran, formátovací pila, CNC, lisy i při naskladnění a vyskladnění. Zvedák převezme těžké zvedání, klopení a otáčení desky.'
      ),
    },
  ];
  const faqLd = faqPageSchema(faqItems.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <>
      <SeoHead routeKey="guideVacuumLifter" structuredData={[breadcrumbs, faqLd]} />
      <div className="bg-dark min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20">

        {/* Hero / H1 + Lead */}
        <section className="pb-10">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="max-w-2xl">
                <div className="accent-line mb-6" />
                <h1 className="text-section font-display font-light text-white mb-6">
                  {tr(
                    "Wir unterstützen Ihre Arbeitsprozesse. Barbaric Vakuumheber für die Holzbearbeitung.",
                    "We support your work processes. Barbaric vacuum lifters for wood processing.",
                    "Podporujeme vaše pracovní procesy. Vakuové zvedáky Barbaric pro zpracování dřeva."
                  )}
                </h1>
                <p className="text-white/70 text-lg leading-relaxed">
                  {tr(
                    "Mit einem Vakuumheber bewegt eine einzige Person schwere Platten sicher und ergonomisch – statt schwerem Heben zu zweit oder zu dritt. So halten Sie Ihr eingespieltes Team gesund und produktiv. Wir helfen Ihnen gerne, das passende System zu finden.",
                    "With a vacuum lifter, a single person moves heavy panels safely and ergonomically – instead of two or three people lifting together. You keep your experienced team healthy and productive. We are glad to help you find the right system.",
                    "S vakuovým zvedákem přesune těžké desky bezpečně a ergonomicky jediný člověk – místo zvedání ve dvou či třech. Udržíte si sehraný tým zdravý a produktivní. Rádi vám pomůžeme najít vhodné řešení."
                  )}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <img
                  src={VACUUM_IMAGE}
                  alt={tr('Barbaric UniWood UWL Vakuumheber', 'Barbaric UniWood UWL vacuum lifter', 'Vakuový zvedák Barbaric UniWood UWL')}
                  className="w-full h-auto object-contain max-h-[360px] mx-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt-zuerst (Hauptaussage) */}
        <section className="pb-12">
          <div className="container-wide">
            <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-2">
                  {tr('Wir helfen Ihnen gerne weiter.', 'We’re glad to help.', 'Rádi vám pomůžeme.')}
                </h2>
                <p className="text-white/75 text-sm leading-relaxed max-w-2xl">
                  {tr(
                    'Sagen Sie uns, welche Platten und Maschinen Sie haben – wir empfehlen den passenden Heber und prüfen die Förderung. Melden Sie sich, oder hinterlassen Sie Ihre Nummer und wir melden uns bei Ihnen.',
                    'Tell us which panels and machines you work with – we’ll recommend the right lifter and check funding. Get in touch, or leave your number and we’ll call you back.',
                    'Řekněte nám, jaké desky a stroje máte – doporučíme vhodný zvedák a ověříme dotaci. Ozvěte se, nebo nám nechte své číslo a my se vám ozveme.'
                  )}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a href={inquiryMail} className="btn-primary-dark sm:whitespace-nowrap justify-center">
                  {tr('Beratung anfragen', 'Request consultation', 'Požádat o konzultaci')}
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <a href={`tel:${phone}`} className="btn-outline-dark sm:whitespace-nowrap justify-center">
                  <Phone className="w-4 h-4" />
                  {tr('Anrufen', 'Call us', 'Zavolat')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* So funktioniert's an den Maschinen */}
        <section className="pb-12">
          <div className="container-wide">
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-6">
              {tr('So funktioniert’s an Ihren Maschinen', 'How it works on your machines', 'Jak to funguje na vašich strojích')}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {/* KAM */}
              <div className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">
                  {tr('Kantenanleimmaschine (KAM)', 'Edge banding machine', 'Olepovačka hran')}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {tr(
                    'Eine Person hebt die Platte vom Stapel, kippt sie um 90° für die Zuführung und übernimmt die fertige Platte am Rücktransport – ganz ohne zweiten Mann, der das Werkstück um die Maschine trägt.',
                    'One person lifts the panel from the stack, tilts it 90° for infeed and takes the finished part on the return – without a second person carrying the workpiece around the machine.',
                    'Jeden člověk zvedne desku ze stohu, naklopí ji o 90° pro podání a převezme hotovou desku při vrácení – bez druhého člověka, který obchází stroj s obrobkem.'
                  )}
                </p>
                <Link to={buildPath('/ott')} className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline">
                  {tr('OTT Kantenanleimmaschinen', 'OTT edge banders', 'Olepovačky hran OTT')}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Plattensäge */}
              <div className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  <Scissors className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">
                  {tr('Plattenaufteilsäge', 'Panel dividing saw', 'Formátovací pila')}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {tr(
                    'Großformatige Rohplatten werden ergonomisch auf die Säge aufgelegt – auch schwere Vollplatten bis 250 kg bewegt eine Person mühelos und beschädigungsfrei.',
                    'Large-format raw panels are loaded onto the saw ergonomically – even heavy full-size boards up to 250 kg are moved effortlessly and damage-free by one person.',
                    'Velkoformátové surové desky se ergonomicky pokládají na pilu – i těžké plné desky do 250 kg přesune jeden člověk snadno a bez poškození.'
                  )}
                </p>
                <Link to={buildPath('/mayer')} className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline">
                  {tr('Mayer Plattensägen', 'Mayer panel saws', 'Pily Mayer')}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Andere Maschinen */}
              <div className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  <Hand className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">
                  {tr('CNC, Pressen & Lager', 'CNC, presses & storage', 'CNC, lisy a sklad')}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {tr(
                    'Auch beim Beschicken von CNC und Pressen sowie beim Ein- und Auslagern: stufenloses Heben (0–10 m/min), 90°-Kippen und Einhand-Bediengriff – sicher für beschichtete, strukturierte und Hochglanz-Oberflächen.',
                    'Also when feeding CNC machines and presses, and for loading/unloading: stepless lifting (0–10 m/min), 90° tilting and single-hand handle – safe for coated, textured and high-gloss surfaces.',
                    'I při zakládání do CNC a lisů a při naskladnění/vyskladnění: plynulé zvedání (0–10 m/min), klopení o 90° a jednoruční ovládání – bezpečné pro lakované, strukturované i vysoce lesklé povrchy.'
                  )}
                </p>
                <Link to={buildPath('/barbaric')} className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline">
                  {tr('Alle Barbaric Vakuumheber', 'All Barbaric vacuum lifters', 'Všechny vakuové zvedáky Barbaric')}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Arbeitsschutz / Ergonomie + ROI */}
        <section className="pb-12">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-dark-card p-6 md:p-8">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  <HeartPulse className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-display font-light text-white mb-4">
                  {tr('Arbeitnehmer schützen', 'Protect your workers', 'Chraňte své zaměstnance')}
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {tr(
                    'Schweres, wiederholtes Heben ist die häufigste Ursache für Rücken- und Schulterverletzungen. Der Vakuumheber nimmt die Last ab – das senkt Krankenstände und hält Ihre erfahrenen Fachkräfte langfristig im Betrieb.',
                    'Heavy, repetitive lifting is the most common cause of back and shoulder injuries. The vacuum lifter takes the load off – reducing sick leave and keeping your experienced staff on the team long-term.',
                    'Těžké, opakované zvedání je nejčastější příčinou poranění zad a ramen. Vakuový zvedák převezme zátěž – snižuje nemocnost a udrží vaše zkušené odborníky dlouhodobě v provozu.'
                  )}
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2"><ShieldCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />{tr('Einhaltung von Lastgrenzen beim manuellen Handling', 'Compliance with manual handling load limits', 'Dodržení hmotnostních limitů při ruční manipulaci')}</li>
                  <li className="flex items-start gap-2"><ShieldCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />{tr('Weniger Ausfälle, gleichbleibende Qualität', 'Fewer absences, consistent quality', 'Méně absencí, stálá kvalita')}</li>
                  <li className="flex items-start gap-2"><ShieldCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />{tr('Team ergonomisch entlasten und langfristig binden', 'Ergonomic relief and long-term team retention', 'Ergonomické odlehčení a dlouhodobé udržení týmu')}</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-dark-card p-6 md:p-8">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-display font-light text-white mb-4">
                  {tr('Schneller ROI, hohe Wirtschaftlichkeit', 'Fast ROI, highly economical', 'Rychlá návratnost, vysoká hospodárnost')}
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {tr(
                    'Ein Bediener leistet die Arbeit von zwei bis drei Personen – schneller, beschädigungsfrei und ohne Wartezeiten. Die Investition amortisiert sich dadurch rasch und ist hoch wirtschaftlich.',
                    'One operator does the work of two to three people – faster, damage-free and without waiting times. The investment pays for itself quickly and is highly economical.',
                    'Jeden obsluha zvládne práci dvou až tří lidí – rychleji, bez poškození a bez čekání. Investice se tak rychle vrátí a je vysoce hospodárná.'
                  )}
                </p>
                <div className="border-l-2 border-primary/40 pl-4 py-2 bg-primary/5 rounded-r-lg">
                  <p className="text-white/80 text-sm leading-relaxed">
                    {funding.sentencePre}
                    <Link to={buildPath('/financovani')} className="text-primary font-medium hover:underline">{funding.program}</Link>
                    {funding.sentencePost}
                  </p>
                </div>
                <Link to={buildPath('/financovani')} className="mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline">
                  {tr('Förderung & Finanzierung prüfen', 'Check funding & financing', 'Ověřit dotaci a financování')}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-12">
          <div className="container-wide">
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-6">
              {tr('Häufige Fragen', 'Frequently asked questions', 'Časté dotazy')}
            </h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details key={item.q} className="rounded-xl border border-white/10 bg-dark-card p-5 group">
                  <summary className="cursor-pointer text-white font-medium text-base list-none flex items-start justify-between gap-4">
                    <span>{item.q}</span>
                    <span className="text-primary mt-1 transition-transform group-open:rotate-45 shrink-0">+</span>
                  </summary>
                  <p className="text-white/70 text-sm leading-relaxed mt-3">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Abschluss-CTA */}
        <section>
          <div className="container-wide">
            <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h2 className="text-2xl font-display font-light text-white mb-2">
                  {tr('Produktionsteam gesund halten – wir beraten Sie gerne.', 'Keep your production team healthy – we’re glad to advise.', 'Udržte výrobní tým zdravý – rádi poradíme.')}
                </h2>
                <p className="text-white/75 text-sm leading-relaxed">
                  {tr(
                    'Kostenlose Beratung zum passenden Vakuumheber und zur Förderung – persönlich und unverbindlich.',
                    'Free consultation on the right vacuum lifter and funding – personal and without obligation.',
                    'Bezplatná konzultace ke vhodnému vakuovému zvedáku a dotaci – osobně a nezávazně.'
                  )}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a href={inquiryMail} className="btn-primary-dark sm:whitespace-nowrap justify-center">
                  {tr('Beratung anfragen', 'Request consultation', 'Požádat o konzultaci')}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link to={buildPath('/barbaric')} className="btn-outline-dark sm:whitespace-nowrap justify-center">
                  {tr('Alle Barbaric Vakuumheber', 'All Barbaric vacuum lifters', 'Všechny vakuové zvedáky Barbaric')}
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default GuideVacuumLifterPage;
