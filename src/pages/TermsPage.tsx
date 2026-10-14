import { useState } from 'react';
import { FileDown, Info } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import SeoHead from '../seo/SeoHead';
import { organizationSchema } from '../seo/structuredData';
import {
  TERMS_OF_SALE,
  TERMS_PDF_PATH,
  TERMS_VERSION_DATE,
  type TermsVersion,
} from '../data/termsOfSale';

const VERSION_OPTIONS: { version: TermsVersion; label: string; htmlLang: string }[] = [
  { version: 'de', label: 'Deutsch', htmlLang: 'de' },
  { version: 'en', label: 'English', htmlLang: 'en' },
  { version: 'cz', label: 'Čeština', htmlLang: 'cs' },
];

// SK liest die tschechische, HU die englische Lesefassung (gleiche Fallbacks wie bei translatePageText).
const DEFAULT_VERSION: Record<string, TermsVersion> = { de: 'de', en: 'en', cz: 'cz', sk: 'cz', hu: 'en' };

const TermsPage = () => {
  const { lang } = useLanguage();
  const locale =
    lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu' ? lang : 'en';

  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  // Auswahl gilt nur für die Sprache, in der sie getroffen wurde — nach einem Sprachwechsel
  // greift wieder die passende Standardfassung.
  const [choice, setChoice] = useState<{ locale: string; version: TermsVersion } | null>(null);
  const version = choice?.locale === locale ? choice.version : DEFAULT_VERSION[locale];
  const htmlLang = VERSION_OPTIONS.find((o) => o.version === version)?.htmlLang ?? 'de';

  return (
    <>
      <SeoHead routeKey="terms" structuredData={[organizationSchema()]} />
      <div className="bg-dark min-h-screen">
        <section className="pt-28 md:pt-36 pb-10">
          <div className="container-wide">
            <div className="max-w-4xl">
              <div className="accent-line mb-6" />
              <h1 className="text-section font-display font-light text-white mb-5">
                {tr(
                  'Allgemeine Geschäftsbedingungen',
                  'Terms & Conditions',
                  'Obchodní podmínky',
                )}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                {tr(
                  'Verkaufs- und Lieferbedingungen der Asamer Technologie GmbH, A-4650 Lambach, für alle Angebote, Lieferungen und Leistungen.',
                  'General terms of sale and delivery of Asamer Technologie GmbH, A-4650 Lambach, for all offers, deliveries and services.',
                  'Všeobecné prodejní a dodací podmínky společnosti Asamer Technologie GmbH, A-4650 Lambach, pro všechny nabídky, dodávky a služby.',
                )}
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-4">
                <p className="text-white/40 text-sm">
                  {tr('Fassung vom', 'Version dated', 'Znění ze dne')} {TERMS_VERSION_DATE}
                </p>
                <a
                  href={TERMS_PDF_PATH}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors"
                >
                  <FileDown className="w-4 h-4" />
                  {tr('PDF herunterladen', 'Download PDF', 'Stáhnout PDF')}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-6">
                <span className="text-white/40 text-sm">
                  {tr('Sprachfassung:', 'Language version:', 'Jazyková verze:')}
                </span>
                <div className="flex flex-wrap gap-2">
                  {VERSION_OPTIONS.map((option) => {
                    const isActive = option.version === version;
                    return (
                      <button
                        key={option.version}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setChoice({ locale, version: option.version })}
                        className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                          isActive
                            ? 'border-primary bg-primary/10 text-white'
                            : 'border-white/15 text-white/60 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        <span lang={option.htmlLang}>{option.label}</span>
                        {option.version === 'de' && (
                          <span className="ml-1.5 text-xs text-primary">
                            {tr('verbindlich', 'binding', 'závazné')}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {version !== 'de' && (
                <div className="flex items-start gap-3 mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-4">
                  <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-white/70 text-sm leading-relaxed">
                    {tr(
                      'Unverbindliche Übersetzung, nur zur Information. Rechtsverbindlich ist ausschließlich die deutsche Fassung – die Vertragssprache ist Deutsch.',
                      'Non-binding translation for information only. Only the German version is legally binding — the contract language is German.',
                      'Nezávazný překlad pouze pro informaci. Právně závazné je výhradně německé znění — smluvním jazykem je němčina.',
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-wide">
            <div className="max-w-4xl space-y-6" lang={htmlLang}>
              {TERMS_OF_SALE.map((section) => (
                <article key={section.num} className="rounded-2xl border border-white/10 bg-dark-card p-6">
                  <h2 className="text-xl font-display font-light text-white mb-4">
                    <span className="text-primary mr-2">{section.num}</span>
                    {section.title[version]}
                  </h2>
                  <div className="space-y-3">
                    {section.clauses.map((clause, i) => (
                      <div key={clause.label ?? i} className={clause.label ? 'flex gap-3' : undefined}>
                        {clause.label && (
                          <span className="text-primary/80 text-sm leading-relaxed w-5 shrink-0">{clause.label}</span>
                        )}
                        <div className="space-y-3">
                          {clause.paragraphs.map((p) => (
                            <p key={p.de} className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
                              {p[version]}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
              <p className="text-white/40 text-sm">Asamer Technologie GmbH, A-4650 Lambach/Austria</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsPage;
