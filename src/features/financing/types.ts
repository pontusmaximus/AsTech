export type CompanyType = 'wood_secondary' | 'primary_wood' | 'other_industry';

export type InvestmentGoal = 'digitalization' | 'innovation' | 'primary_upgrade';

export type BudgetRange = 'lt_2_5' | 'btw_2_5_20' | 'btw_20_100' | 'gt_100';

export type FundingProgramId =
  | 'digital_enterprise_op_tak'
  | 'innovation_op_tak'
  | 'mze_szp';

export type MatchReasonCode = 'goal_match' | 'company_type_match' | 'budget_match';

export interface EligibilityCriteria {
  companyType: CompanyType | null;
  goal: InvestmentGoal | null;
  budget: BudgetRange | null;
}

export interface CompleteEligibilityCriteria {
  companyType: CompanyType;
  goal: InvestmentGoal;
  budget: BudgetRange;
}

export interface FundingProgramDefinition {
  id: FundingProgramId;
  title: string;
  program: string;
  savingsHighlight: string;
  criteria: string;
  funding: string;
  savings: string;
  advantage: string;
  importantCheck: string;
  companyTypes: CompanyType[];
  goals: InvestmentGoal[];
  budgetRanges: BudgetRange[];
}

export interface ProgramMatchResult {
  program: FundingProgramDefinition;
  score: number;
  reasonCodes: MatchReasonCode[];
}

export const isCriteriaComplete = (
  criteria: EligibilityCriteria
): criteria is CompleteEligibilityCriteria => {
  return Boolean(criteria.companyType && criteria.goal && criteria.budget);
};
