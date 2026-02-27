import { ArrowRight } from 'lucide-react';
import type { Translations } from '../../i18n';
import type { MatchReasonCode, ProgramMatchResult } from './types';

type WizardTexts = Translations['financingWizard'];

type EligibilityResultProps = {
  matches: ProgramMatchResult[];
  texts: WizardTexts;
  fallbackCtaHref: string;
  getCtaHref: (match: ProgramMatchResult) => string;
  onFallbackCtaClick?: () => void;
  onMatchCtaClick?: (match: ProgramMatchResult, position: 'top' | 'alternative') => void;
};

const reasonLabel = (
  reasonCode: MatchReasonCode,
  texts: WizardTexts['result']['reasonLabels']
) => {
  if (reasonCode === 'goal_match') return texts.goalMatch;
  if (reasonCode === 'company_type_match') return texts.companyTypeMatch;
  return texts.budgetMatch;
};

const EligibilityResult = ({
  matches,
  texts,
  fallbackCtaHref,
  getCtaHref,
  onFallbackCtaClick,
  onMatchCtaClick,
}: EligibilityResultProps) => {
  const topMatches = matches.slice(0, 2);

  return (
    <section className="pb-12">
      <div className="container-wide">
        <div className="rounded-3xl border border-white/10 bg-dark-elevated p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-display font-light text-white">
            {texts.result.title}
          </h2>
          <p className="text-white/60 mt-2 mb-6">{texts.result.subtitle}</p>

          {topMatches.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-dark-card p-6">
              <h3 className="text-white text-xl font-display font-light mb-2">
                {texts.emptyState.title}
              </h3>
              <p className="text-white/65 mb-4">{texts.emptyState.description}</p>
              <a href={fallbackCtaHref} onClick={onFallbackCtaClick} className="btn-primary-dark inline-flex">
                {texts.emptyState.cta}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-5">
              {topMatches.map((match, index) => {
                const levelLabel =
                  index === 0 ? texts.result.topRecommendation : texts.result.alternative;
                const position: 'top' | 'alternative' = index === 0 ? 'top' : 'alternative';
                const levelClass =
                  index === 0
                    ? 'border-primary/30 bg-primary/10 text-primary'
                    : 'border-white/15 bg-dark-card text-white/80';

                return (
                  <article
                    key={match.program.id}
                    className="rounded-2xl border border-white/10 bg-dark-card p-5 md:p-6"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs border ${levelClass}`}>
                        {levelLabel}
                      </span>
                      <span className="px-3 py-1.5 rounded-full text-xs border border-white/15 text-white/75">
                        {match.program.program}
                      </span>
                      <span className="px-3 py-1.5 rounded-full text-xs border border-primary/30 bg-primary/10 text-primary">
                        {match.program.savingsHighlight}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-light text-white mb-4">
                      {match.program.title}
                    </h3>

                    <div className="mb-4">
                      <div className="text-xs uppercase tracking-[0.16em] text-primary mb-2">
                        {texts.result.whyFit}
                      </div>
                      <ul className="space-y-2">
                        {match.reasonCodes.map((reasonCode) => (
                          <li key={reasonCode} className="text-sm text-white/75 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <span>{reasonLabel(reasonCode, texts.result.reasonLabels)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4 rounded-xl border border-white/10 bg-dark-elevated p-4">
                      <div className="text-xs uppercase tracking-[0.16em] text-primary mb-2">
                        {texts.result.fundingRange}
                      </div>
                      <p className="text-white/75 text-sm leading-relaxed">{match.program.savings}</p>
                    </div>

                    <div className="mb-5 rounded-xl border border-white/10 bg-dark-elevated p-4">
                      <div className="text-xs uppercase tracking-[0.16em] text-primary mb-2">
                        {texts.result.importantCheck}
                      </div>
                      <p className="text-white/75 text-sm leading-relaxed">{match.program.importantCheck}</p>
                    </div>

                    <a
                      href={getCtaHref(match)}
                      onClick={() => onMatchCtaClick?.(match, position)}
                      className="btn-primary-dark inline-flex w-full justify-center"
                    >
                      {texts.result.cta}
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EligibilityResult;
