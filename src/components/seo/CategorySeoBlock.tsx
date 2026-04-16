import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { CategorySeoContent } from '../../data/seo/types';
import type { Language } from '../../i18n';
import { faqPageSchema } from '../../seo/structuredData';

interface Props {
  content: CategorySeoContent;
  lang: Language;
  tr: (de: string, en: string, cz: string) => string;
}

const ml = (obj: { de: string; en: string; cz: string }, lang: Language, tr: Props['tr']) =>
  tr(obj.de, obj.en, obj.cz);

const CategorySeoBlock = ({ content, lang, tr }: Props) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqSchema = content.faq.length > 0
    ? faqPageSchema(content.faq.map((f) => ({ question: ml(f.question, lang, tr), answer: ml(f.answer, lang, tr) })))
    : null;

  return (
    <section className="container-wide py-12 border-t border-white/5">
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      {/* Expanded Intro */}
      <div className="max-w-3xl mb-10">
        <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
          {ml(content.introExpanded, lang, tr)}
        </p>
      </div>

      {/* Content Sections */}
      {content.sections.length > 0 && (
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mb-10">
          {content.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-sm font-display font-medium text-white/80 mb-2">
                {ml(section.heading, lang, tr)}
              </h2>
              <p className="text-xs text-white/45 leading-relaxed">
                {ml(section.body, lang, tr)}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* FAQ */}
      {content.faq.length > 0 && (
        <div className="max-w-3xl">
          <h2 className="text-sm font-display text-white/40 mb-4">
            {tr('Häufige Fragen', 'FAQ', 'Časté dotazy')}
          </h2>
          <div className="space-y-2">
            {content.faq.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="rounded-lg border border-white/8 bg-white/[0.02]">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
                  >
                    <span className="text-sm text-white/60">{ml(item.question, lang, tr)}</span>
                    <ChevronDown className={`w-4 h-4 text-white/30 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-white/40 leading-relaxed">
                        {ml(item.answer, lang, tr)}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default CategorySeoBlock;
