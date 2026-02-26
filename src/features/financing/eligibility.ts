import {
  type EligibilityCriteria,
  type FundingProgramDefinition,
  type ProgramMatchResult,
  isCriteriaComplete,
} from './types';

const hardFitByProgram = (
  criteria: EligibilityCriteria,
  program: FundingProgramDefinition
): boolean => {
  if (!isCriteriaComplete(criteria)) return false;

  if (program.id === 'digital_enterprise_op_tak') {
    const budgetAllowed = criteria.budget !== 'lt_2_5' && criteria.budget !== 'gt_100';
    return criteria.goal === 'digitalization' && budgetAllowed;
  }

  if (program.id === 'innovation_op_tak') {
    return criteria.goal === 'innovation';
  }

  if (program.id === 'mze_szp') {
    return criteria.companyType === 'primary_wood' || criteria.goal === 'primary_upgrade';
  }

  return false;
};

export const rankPrograms = (
  criteria: EligibilityCriteria,
  programs: FundingProgramDefinition[]
): ProgramMatchResult[] => {
  if (!isCriteriaComplete(criteria)) return [];

  const scoredPrograms = programs
    .map((program, index) => {
      if (!hardFitByProgram(criteria, program)) {
        return null;
      }

      let score = 0;
      const reasonCodes: ProgramMatchResult['reasonCodes'] = [];

      if (program.goals.includes(criteria.goal)) {
        score += 60;
        reasonCodes.push('goal_match');
      }

      if (program.companyTypes.includes(criteria.companyType)) {
        score += 25;
        reasonCodes.push('company_type_match');
      }

      if (program.budgetRanges.includes(criteria.budget)) {
        score += 15;
        reasonCodes.push('budget_match');
      }

      if (score <= 0) {
        return null;
      }

      return {
        index,
        program,
        score,
        reasonCodes,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  scoredPrograms.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.index - b.index;
  });

  return scoredPrograms.map(({ program, score, reasonCodes }) => ({
    program,
    score,
    reasonCodes,
  }));
};
