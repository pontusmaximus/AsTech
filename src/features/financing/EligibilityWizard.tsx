import { ArrowRight } from 'lucide-react';
import type { Translations } from '../../i18n';
import type {
  BudgetRange,
  CompanyType,
  EligibilityCriteria,
  InvestmentGoal,
} from './types';

type WizardTexts = Translations['financingWizard'];

type EligibilityWizardProps = {
  criteria: EligibilityCriteria;
  currentStep: number;
  canSubmit: boolean;
  texts: WizardTexts;
  onSelectCompanyType: (value: CompanyType) => void;
  onSelectGoal: (value: InvestmentGoal) => void;
  onSelectBudget: (value: BudgetRange) => void;
  onSubmit: () => void;
  onReset: () => void;
};

type OptionButtonProps = {
  isActive: boolean;
  label: string;
  onClick: () => void;
};

const OptionButton = ({ isActive, label, onClick }: OptionButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`w-full text-left rounded-xl border px-4 py-3 text-sm transition-all ${
        isActive
          ? 'border-primary bg-primary/10 text-white shadow-[0_8px_20px_rgba(0,72,153,0.2)]'
          : 'border-white/10 bg-dark-card text-white/70 hover:text-white hover:border-white/30'
      }`}
    >
      {label}
    </button>
  );
};

const EligibilityWizard = ({
  criteria,
  currentStep,
  canSubmit,
  texts,
  onSelectCompanyType,
  onSelectGoal,
  onSelectBudget,
  onSubmit,
  onReset,
}: EligibilityWizardProps) => {
  return (
    <section className="pb-10">
      <div className="container-wide">
        <div className="rounded-3xl border border-white/10 bg-dark-elevated p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-light text-white">
                {texts.title}
              </h2>
              <p className="text-white/60 mt-2 max-w-3xl">{texts.subtitle}</p>
            </div>
            <div className="px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm self-start">
              {texts.stepProgressLabel} {Math.min(currentStep, 3)}/3
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-dark-card p-4 md:p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-primary mb-2">
                01 · {texts.stepLabels.companyType}
              </div>
              <p className="text-white/80 mb-4">{texts.questions.companyType}</p>
              <div className="grid md:grid-cols-3 gap-3">
                <OptionButton
                  isActive={criteria.companyType === 'wood_secondary'}
                  label={texts.options.companyType.woodSecondary}
                  onClick={() => onSelectCompanyType('wood_secondary')}
                />
                <OptionButton
                  isActive={criteria.companyType === 'primary_wood'}
                  label={texts.options.companyType.primaryWood}
                  onClick={() => onSelectCompanyType('primary_wood')}
                />
                <OptionButton
                  isActive={criteria.companyType === 'other_industry'}
                  label={texts.options.companyType.otherIndustry}
                  onClick={() => onSelectCompanyType('other_industry')}
                />
              </div>
            </div>

            {criteria.companyType && (
              <div className="rounded-2xl border border-white/10 bg-dark-card p-4 md:p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-primary mb-2">
                  02 · {texts.stepLabels.goal}
                </div>
                <p className="text-white/80 mb-4">{texts.questions.goal}</p>
                <div className="grid md:grid-cols-3 gap-3">
                  <OptionButton
                    isActive={criteria.goal === 'digitalization'}
                    label={texts.options.goal.digitalization}
                    onClick={() => onSelectGoal('digitalization')}
                  />
                  <OptionButton
                    isActive={criteria.goal === 'innovation'}
                    label={texts.options.goal.innovation}
                    onClick={() => onSelectGoal('innovation')}
                  />
                  <OptionButton
                    isActive={criteria.goal === 'primary_upgrade'}
                    label={texts.options.goal.primaryUpgrade}
                    onClick={() => onSelectGoal('primary_upgrade')}
                  />
                </div>
              </div>
            )}

            {criteria.companyType && criteria.goal && (
              <div className="rounded-2xl border border-white/10 bg-dark-card p-4 md:p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-primary mb-2">
                  03 · {texts.stepLabels.budget}
                </div>
                <p className="text-white/80 mb-4">{texts.questions.budget}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                  <OptionButton
                    isActive={criteria.budget === 'lt_2_5'}
                    label={texts.options.budget.lt2_5}
                    onClick={() => onSelectBudget('lt_2_5')}
                  />
                  <OptionButton
                    isActive={criteria.budget === 'btw_2_5_20'}
                    label={texts.options.budget.btw2_5And20}
                    onClick={() => onSelectBudget('btw_2_5_20')}
                  />
                  <OptionButton
                    isActive={criteria.budget === 'btw_20_100'}
                    label={texts.options.budget.btw20And100}
                    onClick={() => onSelectBudget('btw_20_100')}
                  />
                  <OptionButton
                    isActive={criteria.budget === 'gt_100'}
                    label={texts.options.budget.gt100}
                    onClick={() => onSelectBudget('gt_100')}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-between">
            <button type="button" onClick={onReset} className="btn-outline-dark justify-center">
              {texts.buttons.reset}
            </button>
            <button
              type="button"
              onClick={onSubmit}
              disabled={!canSubmit}
              className="btn-primary-dark justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
            >
              {texts.buttons.showResults}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityWizard;
