import { ArrowRight } from 'lucide-react';
import type { Translations } from '../../i18n';
import type { FundingProgramDefinition } from './types';
import { buildMailto } from '../../lib/email';

type WizardTexts = Translations['financingWizard'];

type MatrixRow = {
  label: string;
  values: string[];
};

type FinancingDetailsAccordionProps = {
  sections: FundingProgramDefinition[];
  matrixRows: MatrixRow[];
  qaLabels: {
    criteria: string;
    funding: string;
    savings: string;
    advantage: string;
  };
  detailsOpen: boolean;
  onToggleDetails: () => void;
  texts: WizardTexts['detailsToggle'];
  fundingInquiryPrefix: string;
  eligibilityCtaLabel: string;
  eligibilityCtaHint: string;
  fundingLabel: string;
  questionLabel: string;
};

const FinancingDetailsAccordion = ({
  sections,
  matrixRows,
  qaLabels,
  detailsOpen,
  onToggleDetails,
  texts,
  fundingInquiryPrefix,
  eligibilityCtaLabel,
  eligibilityCtaHint,
  fundingLabel,
  questionLabel,
}: FinancingDetailsAccordionProps) => {
  return (
    <section className="pb-24">
      <div className="container-wide">
        <div className="rounded-3xl border border-white/10 bg-dark-elevated p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-2">
                {texts.title}
              </h2>
              <p className="text-white/60">{texts.subtitle}</p>
            </div>
            <button type="button" onClick={onToggleDetails} className="btn-outline-dark justify-center">
              {detailsOpen ? texts.hide : texts.show}
            </button>
          </div>
        </div>

        {detailsOpen && (
          <div className="mt-8 space-y-8">
            <div className="rounded-3xl border border-white/10 bg-dark-elevated overflow-hidden">
              <div className="px-6 md:px-8 py-5 border-b border-white/10">
                <h3 className="text-2xl md:text-3xl font-display font-light text-white">
                  {texts.comparisonTitle}
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-[920px] w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left px-6 md:px-8 py-4 text-white/50 text-sm font-medium w-[260px]">
                        {questionLabel}
                      </th>
                      {sections.map((section, index) => (
                        <th key={section.id} className="text-left px-6 py-4 text-white font-medium">
                          <div className="text-xs uppercase tracking-widest text-primary mb-1">
                            {fundingLabel} 0{index + 1}
                          </div>
                          <div className="text-sm leading-snug">{section.title}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {matrixRows.map((row) => (
                      <tr key={row.label} className="align-top border-b border-white/10 last:border-b-0">
                        <th className="text-left px-6 md:px-8 py-5 text-sm text-primary font-medium uppercase tracking-wide">
                          {row.label}
                        </th>
                        {row.values.map((value, index) => (
                          <td key={`${row.label}-${index}`} className="px-6 py-5 text-white/75 text-sm leading-relaxed">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-8">
              {sections.map((section, sectionIndex) => {
                const fundingInquiryMail = buildMailto(
                  'max@asamer.net',
                  `${fundingInquiryPrefix}: ${section.title}`
                );

                return (
                  <article
                    id={section.id}
                    key={section.id}
                    className="rounded-3xl border border-white/10 overflow-hidden bg-dark-elevated"
                  >
                    <div className="px-6 md:px-8 py-6 border-b border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-primary mb-2">
                          {fundingLabel} 0{sectionIndex + 1}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-light text-white">
                          {section.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 rounded-full border border-white/15 bg-dark-card text-white/80 text-sm">
                          {section.program}
                        </span>
                        <span className="px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm">
                          {section.savingsHighlight}
                        </span>
                      </div>
                    </div>

                    <div className="px-6 md:px-8 py-6">
                      <dl className="divide-y divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
                        {[
                          { label: qaLabels.criteria, value: section.criteria },
                          { label: qaLabels.funding, value: section.funding },
                          { label: qaLabels.savings, value: section.savings },
                          { label: qaLabels.advantage, value: section.advantage },
                        ].map((item) => (
                          <div key={item.label} className="grid lg:grid-cols-[260px,1fr]">
                            <dt className="px-5 py-4 text-primary text-xs uppercase tracking-[0.16em] bg-dark-card border-b lg:border-b-0 lg:border-r border-white/10">
                              {item.label}
                            </dt>
                            <dd className="px-5 py-4 text-white/75 leading-relaxed">{item.value}</dd>
                          </div>
                        ))}
                      </dl>

                      <div className="mt-5 rounded-2xl border border-white/10 bg-dark-card px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <p className="text-white/65 text-sm">{eligibilityCtaHint}</p>
                        <a href={fundingInquiryMail} className="btn-primary-dark sm:whitespace-nowrap justify-center">
                          {eligibilityCtaLabel}
                          <ArrowRight className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FinancingDetailsAccordion;
