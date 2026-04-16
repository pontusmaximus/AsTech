import { useState } from 'react';
import { ChevronDown, BookOpen, Target, Lightbulb, HelpCircle } from 'lucide-react';
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

const SectionHeading = ({
  icon,
  label,
  tag = 'h2',
}: {
  icon: React.ReactNode;
  label: string;
  tag?: 'h2' | 'h3';
}) => {
  const Tag = tag;
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <Tag className="text-lg sm:text-xl font-display font-medium text-white tracking-tight">
        {label}
      </Tag>
    </div>
  );
};

const ProductSeoBlock = ({ content, lang, tr }: Props) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqSchema = content.faq.length > 0
    ? faqPageSchema(content.faq.map((f) => ({ question: ml(f.question, lang), answer: ml(f.answer, lang) })))
    : null;

  return (
    <div className="product-item mb-16 mt-4 space-y-12 pt-10 border-t border-white/8">
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Long Description */}
      <section>
        <SectionHeading
          icon={<BookOpen className="w-4 h-4" />}
          label={tr('Im Detail', 'In Detail', 'Podrobnosti')}
        />
        <div className="max-w-3xl text-[15px] sm:text-base text-white/75 leading-[1.75] space-y-4 whitespace-pre-line">
          {ml(content.longDescription, lang)
            .split(/\n{2,}/)
            .map((para, i) => (
              <p key={i}>{para}</p>
            ))}
        </div>
      </section>

      {/* Application Sections */}
      {content.applicationSections.length > 0 && (
        <section>
          <SectionHeading
            icon={<Target className="w-4 h-4" />}
            label={tr('Einsatzbereiche', 'Applications', 'Oblasti nasazení')}
          />
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            {content.applicationSections.map((section, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/8 bg-white/[0.02] p-5 hover:bg-white/[0.03] transition-colors"
              >
                <h3 className="text-base font-medium text-white mb-2.5 tracking-tight">
                  {ml(section.heading, lang)}
                </h3>
                <p className="text-[14px] text-white/65 leading-[1.7]">
                  {ml(section.body, lang)}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Buying Advice */}
      <section>
        <SectionHeading
          icon={<Lightbulb className="w-4 h-4" />}
          label={tr('Kaufberatung', 'Buying Guide', 'Nákupní poradce')}
        />
        <div className="max-w-3xl rounded-xl border-l-4 border-primary bg-primary/[0.06] px-5 py-4">
          <p className="text-[15px] text-white/80 leading-[1.7]">
            {ml(content.buyingAdvice, lang)}
          </p>
        </div>
      </section>

      {/* FAQ */}
      {content.faq.length > 0 && (
        <section>
          <SectionHeading
            icon={<HelpCircle className="w-4 h-4" />}
            label={tr('Häufige Fragen', 'FAQ', 'Časté dotazy')}
          />
          <div className="max-w-3xl space-y-2.5">
            {content.faq.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`rounded-xl border transition-colors ${
                    isOpen
                      ? 'border-primary/30 bg-primary/[0.04]'
                      : 'border-white/8 bg-white/[0.02] hover:border-white/15'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-medium text-white/90">
                      {ml(item.question, lang)}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-white/40 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-primary' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="text-[14px] text-white/70 leading-[1.75]">
                        {ml(item.answer, lang)}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductSeoBlock;
