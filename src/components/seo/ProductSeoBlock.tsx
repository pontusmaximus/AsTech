import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { ProductSeoContent, MultiLangText } from '../../data/seo/types';
import type { Language } from '../../i18n';
import { faqPageSchema } from '../../seo/structuredData';

interface Props {
  content: ProductSeoContent;
  lang: Language;
  tr: (de: string, en: string, cz: string) => string;
}

const ml = (obj: MultiLangText, lang: Language): string => {
  if (lang === 'sk') return obj.sk ?? obj.cz;
  if (lang === 'hu') return obj.hu ?? obj.en;
  if (lang === 'de') return obj.de;
  if (lang === 'cz') return obj.cz;
  return obj.en;
};

const ProductSeoBlock = ({ content, lang, tr }: Props) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqSchema = content.faq.length > 0
    ? faqPageSchema(content.faq.map((f) => ({ question: ml(f.question, lang), answer: ml(f.answer, lang) })))
    : null;

  return (
    <div className="product-item mb-16 space-y-10">
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      {/* Long Description */}
      <div>
        <div className="flex items-baseline gap-3 mb-4 pb-2.5 border-b border-white/8">
          <h2 className="text-[11px] uppercase tracking-widest font-medium text-white/55">
            {tr('Im Detail', 'In Detail', 'Podrobnosti')}
          </h2>
        </div>
        <p className="text-sm text-white/55 leading-relaxed whitespace-pre-line">
          {ml(content.longDescription, lang)}
        </p>
      </div>

      {/* Application Sections */}
      {content.applicationSections.length > 0 && (
        <div>
          <div className="flex items-baseline gap-3 mb-4 pb-2.5 border-b border-white/8">
            <h2 className="text-[11px] uppercase tracking-widest font-medium text-white/55">
              {tr('Einsatzbereiche', 'Applications', 'Oblasti nasazení')}
            </h2>
          </div>
          <div className="space-y-6">
            {content.applicationSections.map((section, i) => (
              <div key={i}>
                <h3 className="text-sm font-medium text-white/80 mb-2">
                  {ml(section.heading, lang)}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {ml(section.body, lang)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Buying Advice */}
      <div>
        <div className="flex items-baseline gap-3 mb-4 pb-2.5 border-b border-white/8">
          <h2 className="text-[11px] uppercase tracking-widest font-medium text-white/55">
            {tr('Kaufberatung', 'Buying Guide', 'Nákupní poradce')}
          </h2>
        </div>
        <div className="border-l-2 border-primary/40 pl-4">
          <p className="text-sm text-white/55 leading-relaxed">
            {ml(content.buyingAdvice, lang)}
          </p>
        </div>
      </div>

      {/* FAQ */}
      {content.faq.length > 0 && (
        <div>
          <div className="flex items-baseline gap-3 mb-4 pb-2.5 border-b border-white/8">
            <h2 className="text-[11px] uppercase tracking-widest font-medium text-white/55">
              {tr('Häufige Fragen', 'FAQ', 'Časté dotazy')}
            </h2>
          </div>
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
                    <span className="text-sm text-white/70">{ml(item.question, lang)}</span>
                    <ChevronDown className={`w-4 h-4 text-white/30 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-white/45 leading-relaxed">
                        {ml(item.answer, lang)}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSeoBlock;
