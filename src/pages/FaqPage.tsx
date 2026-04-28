import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronDown, Clock } from 'lucide-react';
import { useLanguage } from '../App';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { faqPageSchema, itemListSchema } from '../seo/structuredData';
import { buildLocalizedPath, CANONICAL_DOMAIN } from '../lib/language';
import { HUB_GUIDES, HUB_FAQ_CATEGORIES, HUB_FAQ_FLAT } from '../data/hub/ratgeberFaqHub';
import type { MultiLangText } from '../data/seo/types';
import type { Language } from '../i18n';

const ml = (txt: MultiLangText, lang: Language): string => {
  if (lang === 'sk') return txt.sk ?? txt.cz;
  if (lang === 'hu') return txt.hu ?? txt.en;
  return txt[lang];
};

const FaqPage = () => {
  const { lang, buildPath } = useLanguage();

  const tr = (de: string, en: string, cz: string, sk?: string, hu?: string) => {
    if (lang === 'de') return de;
    if (lang === 'cz') return cz;
    if (lang === 'sk') return sk ?? cz;
    if (lang === 'hu') return hu ?? en;
    return en;
  };

  const [open, setOpen] = useState<string | null>(null);
  const toggle = (key: string) => setOpen((prev) => (prev === key ? null : key));

  const ctaHref = buildMailto(
    'office@asamer.net',
    tr('Anfrage Asamer', 'Inquiry Asamer', 'Poptávka Asamer'),
  );

  const faqLd = faqPageSchema(
    HUB_FAQ_FLAT.map((f) => ({ question: ml(f.question, lang), answer: ml(f.answer, lang) })),
  );

  const guideListLd = itemListSchema(
    tr('Ratgeber', 'Guides', 'Průvodci', 'Sprievodcovia', 'Útmutatók'),
    HUB_GUIDES.map((g) => ({
      name: ml(g.title, lang),
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, g.slugByLang[lang])}`,
      description: ml(g.blurb, lang),
    })),
  );

  return (
    <>
      <SeoHead routeKey="faq" structuredData={[guideListLd, faqLd]} />
      <div className="bg-dark min-h-screen">
        {/* ── Header ── */}
        <section className="pt-28 md:pt-36 pb-12">
          <div className="container-wide">
            <div className="max-w-5xl">
              <div className="accent-line mb-6" />
              <h1 className="text-section font-display font-light text-white mb-6">
                {tr(
                  'Ratgeber & FAQ',
                  'Guides & FAQ',
                  'Průvodci a časté dotazy',
                  'Sprievodcovia a časté otázky',
                  'Útmutatók és GYIK',
                )}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-4xl">
                {tr(
                  'Wissensbasis für Holzbearbeitung: ausführliche Ratgeber zu Maschinenwahl, Materialien, Förderung und Automatisierung – plus Antworten auf die häufigsten Fragen aus 30 Jahren Praxis bei Asamer.',
                  'Knowledge base for wood processing: in-depth guides on machine selection, materials, funding and automation – plus answers to the most common questions from 30 years of Asamer experience.',
                  'Znalostní báze pro zpracování dřeva: podrobní průvodci výběrem stroje, materiály, dotacemi a automatizací – plus odpovědi na nejčastější otázky z 30 let praxe Asamer.',
                  'Vedomostná báza pre spracovanie dreva: podrobní sprievodcovia výberom stroja, materiálmi, dotáciami a automatizáciou – plus odpovede na najčastejšie otázky z 30 rokov praxe Asamer.',
                  'Faipari tudásbázis: részletes útmutatók a gépválasztáshoz, anyagokhoz, támogatásokhoz és automatizáláshoz – valamint válaszok az Asamer 30 éves tapasztalatából származó leggyakoribb kérdésekre.',
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ── Ratgeber Cards ── */}
        <section className="pb-16">
          <div className="container-wide">
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-6">
              {tr('Ratgeber', 'Guides', 'Průvodci', 'Sprievodcovia', 'Útmutatók')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {HUB_GUIDES.map((g) => (
                <Link
                  key={g.slugByLang.cz}
                  to={buildPath(g.slugByLang[lang])}
                  className="group rounded-2xl border border-white/10 bg-dark-card p-6 hover:border-primary/40 hover:bg-dark-elevated transition-colors flex flex-col"
                >
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-primary transition-colors">
                    {ml(g.title, lang)}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5 flex-1">
                    {ml(g.blurb, lang)}
                  </p>
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-widest">
                    <span className="text-white/35 inline-flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {g.readingTimeMin} {tr('Min. Lesezeit', 'min read', 'min čtení', 'min čítania', 'perc olvasás')}
                    </span>
                    <span className="text-primary inline-flex items-center gap-1">
                      {tr('Lesen', 'Read', 'Číst', 'Čítať', 'Olvasás')}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ — categorized ── */}
        <section className="pb-16">
          <div className="container-wide">
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-6">
              {tr('Häufige Fragen', 'Frequently asked questions', 'Časté dotazy', 'Časté otázky', 'Gyakori kérdések')}
            </h2>
            <div className="max-w-4xl space-y-12">
              {HUB_FAQ_CATEGORIES.map((cat) => (
                <div key={cat.id} id={cat.id}>
                  <h3 className="text-xs uppercase tracking-widest text-white/40 mb-4 pb-2 border-b border-white/8">
                    {ml(cat.name, lang)}
                  </h3>
                  <div className="space-y-3">
                    {cat.items.map((item, idx) => {
                      const key = `${cat.id}-${idx}`;
                      const isOpen = open === key;
                      return (
                        <div key={key} className="rounded-2xl border border-white/10 bg-dark-card overflow-hidden">
                          <button onClick={() => toggle(key)} className="w-full flex items-center justify-between p-5 text-left">
                            <h4 className="text-white font-medium text-base pr-4">{ml(item.question, lang)}</h4>
                            <ChevronDown className={`w-5 h-5 text-white/40 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 text-white/70 text-sm leading-relaxed">
                              {ml(item.answer, lang)}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="pb-24">
          <div className="container-wide">
            <div className="rounded-2xl border border-white/10 bg-dark-elevated p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h3 className="text-2xl font-display font-light text-white mb-2">
                  {tr(
                    'Ihre Frage nicht dabei?',
                    "Didn't find your question?",
                    'Nenašli jste svou otázku?',
                    'Nenašli ste svoju otázku?',
                    'Nem találja a kérdését?',
                  )}
                </h3>
                <p className="text-white/70 text-sm">
                  {tr(
                    'Kontaktieren Sie uns direkt – wir beraten Sie gerne persönlich.',
                    'Contact us directly – we are happy to advise you personally.',
                    'Kontaktujte nás přímo – rádi vám osobně poradíme.',
                    'Kontaktujte nás priamo – radi vám osobne poradíme.',
                    'Vegye fel velünk a kapcsolatot közvetlenül – szívesen tanácsot adunk személyesen.',
                  )}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={ctaHref} className="btn-primary-dark justify-center">
                  {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku', 'Odoslať dopyt', 'Ajánlatkérés')}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link to={buildPath('/kontakt')} className="btn-outline-dark justify-center">
                  {tr('Kontaktseite', 'Contact page', 'Kontaktní stránka', 'Kontaktná stránka', 'Kapcsolat')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FaqPage;
