import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import EligibilityResult from '../features/financing/EligibilityResult';
import EligibilityWizard from '../features/financing/EligibilityWizard';
import FinancingDetailsAccordion from '../features/financing/FinancingDetailsAccordion';
import { rankPrograms } from '../features/financing/eligibility';
import { getFlowSessionId, trackEvent } from '../lib/analytics';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import type {
  BudgetRange,
  CompanyType,
  EligibilityCriteria,
  FundingProgramDefinition,
  InvestmentGoal,
  ProgramMatchResult,
} from '../features/financing/types';
import { isCriteriaComplete } from '../features/financing/types';

const companyTypeValues: CompanyType[] = ['wood_secondary', 'primary_wood', 'other_industry'];
const goalValues: InvestmentGoal[] = ['digitalization', 'innovation', 'primary_upgrade'];
const budgetValues: BudgetRange[] = ['lt_2_5', 'btw_2_5_20', 'btw_20_100', 'gt_100'];

const isCompanyType = (value: string | null): value is CompanyType =>
  value !== null && companyTypeValues.includes(value as CompanyType);

const isInvestmentGoal = (value: string | null): value is InvestmentGoal =>
  value !== null && goalValues.includes(value as InvestmentGoal);

const isBudgetRange = (value: string | null): value is BudgetRange =>
  value !== null && budgetValues.includes(value as BudgetRange);

const FINANCING_FLOW_NAME = 'financing_compass';

const parseCriteriaFromParams = (searchParams: URLSearchParams): EligibilityCriteria => {
  const companyTypeParam = searchParams.get('companyType');
  const goalParam = searchParams.get('goal');
  const budgetParam = searchParams.get('budget');

  return {
    companyType: isCompanyType(companyTypeParam) ? companyTypeParam : null,
    goal: isInvestmentGoal(goalParam) ? goalParam : null,
    budget: isBudgetRange(budgetParam) ? budgetParam : null,
  };
};

const FinancingPage = () => {
  const { lang, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const resultRef = useRef<HTMLDivElement>(null);
  const resultsVisibleRef = useRef(false);

  const locale =
    lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu'
      ? lang
      : 'en';

  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') {
      return translatePageText(locale, en, cz);
    }
    return en;
  };

  const criteria = useMemo(() => parseCriteriaFromParams(searchParams), [searchParams]);
  const detailsOpen = searchParams.get('details') === 'open';
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(() => isCriteriaComplete(criteria));
  const flowSessionId = useMemo(() => getFlowSessionId(FINANCING_FLOW_NAME), []);

  const currentStep = !criteria.companyType ? 1 : !criteria.goal ? 2 : 3;
  const canSubmit = isCriteriaComplete(criteria);

  const fundingImage = 'https://cdn.pixabay.com/photo/2019/03/22/21/27/saw-4074239_1280.jpg';
  const fundingInquiryPrefix = tr('Förderungsanfrage', 'Funding inquiry', 'Dotační poptávka');

  const qaLabels = {
    criteria: tr('Was sind die Kriterien?', 'What are the criteria?', 'Jaká jsou kritéria?'),
    funding: tr('Was genau wird gefördert?', 'What exactly is funded?', 'Co přesně je podporováno?'),
    savings: tr('Wie viel Geld spare ich?', 'How much can I save?', 'Kolik mohu ušetřit?'),
    advantage: tr('Der Asamer-Vorteil', 'The Asamer advantage', 'Výhoda Asamer'),
  };

  const sections: FundingProgramDefinition[] = [
    {
      id: 'digital_enterprise_op_tak',
      title: tr(
        'Digitales Unternehmen (OP TAK)',
        'Digital Enterprise (OP TAK)',
        'Digitální podnik (OP TAK)'
      ),
      program: 'OP TAK',
      savingsHighlight: tr('15 % bis 45 %', '15% to 45%', '15 % až 45 %'),
      criteria: tr(
        'KMU in Tschechien außerhalb Prags. Das Projekt muss die digitale Reife des Betriebs messbar erhöhen.',
        'SMEs in the Czech Republic outside Prague. The project must measurably increase the company’s digital maturity.',
        'MSP v České republice mimo Prahu. Projekt musí měřitelně zvýšit digitální vyspělost podniku.'
      ),
      funding: tr(
        'Gefördert werden Maschinenvernetzung, ERP-Systeme, Robotik, Automatisierung und die Integration aktueller Technik in den digitalen Workflow. Reine Ersatzinvestitionen sind ausgeschlossen.',
        'Funding covers machine connectivity, ERP systems, robotics, automation, and integration of modern technology into digital workflows. Pure replacement investments are excluded.',
        'Podporováno je propojení strojů, ERP systémy, robotika, automatizace a integrace moderních technologií do digitálního workflow. Pouhé náhradní investice jsou vyloučeny.'
      ),
      savings: tr(
        '15 % bis 45 % Zuschuss. Förderfähiges Projektvolumen: 2,5 Mio. CZK bis 100 Mio. CZK.',
        '15% to 45% grant. Eligible project size: CZK 2.5 million to CZK 100 million.',
        'Dotace 15 % až 45 %. Způsobilý objem projektu: 2,5 mil. CZK až 100 mil. CZK.'
      ),
      advantage: tr(
        'Unsere Anlagen sind Industry 4.0 ready. Asamer liefert die nötigen Schnittstellen und Datenprotokolle, damit Ihre Investition als digitale Transformation anerkannt wird.',
        'Our systems are Industry 4.0 ready. Asamer provides the required interfaces and data protocols so your investment is recognized as digital transformation.',
        'Naše zařízení jsou připravena na Industry 4.0. Asamer dodává potřebná rozhraní a datové protokoly, aby byla investice uznána jako digitální transformace.'
      ),
      importantCheck: tr(
        'Projektstandort außerhalb Prags und klarer Digitalisierungsnachweis erforderlich.',
        'Project location outside Prague and clear digitalization evidence are required.',
        'Nutné je umístění projektu mimo Prahu a jasný důkaz digitalizace.'
      ),
      companyTypes: ['wood_secondary', 'primary_wood', 'other_industry'],
      goals: ['digitalization'],
      budgetRanges: ['btw_2_5_20', 'btw_20_100'],
    },
    {
      id: 'innovation_op_tak',
      title: tr('Innovation (OP TAK)', 'Innovation (OP TAK)', 'Inovace (OP TAK)'),
      program: 'OP TAK',
      savingsHighlight: tr('Bis zu 45 %', 'Up to 45%', 'Až 45 %'),
      criteria: tr(
        'Für Unternehmen, die neue Produkte einführen oder Produktionsprozesse grundlegend innovieren, etwa mit neuen Materialien oder höherer Präzision.',
        'For companies introducing new products or fundamentally innovating production processes, for example with new materials or higher precision.',
        'Pro podniky, které zavádějí nové produkty nebo zásadně inovují výrobní procesy, například pomocí nových materiálů nebo vyšší přesnosti.'
      ),
      funding: tr(
        'Gefördert werden High-End-Produktionstechnologien für innovative Produkte, Prototypenbau und die Implementierung von Design in die Fertigung.',
        'Funding supports high-end production technologies for innovative products, prototyping, and design implementation in manufacturing.',
        'Podporovány jsou špičkové výrobní technologie pro inovativní produkty, prototypování a implementace designu do výroby.'
      ),
      savings: tr(
        'Bis zu 45 % Förderung der förderfähigen Kosten.',
        'Up to 45% funding of eligible costs.',
        'Až 45 % podpory způsobilých nákladů.'
      ),
      advantage: tr(
        'Asamer bietet modernste Technologiepartner für technologische Sprünge über Marktstandard hinaus. Genau dieser Innovationsgehalt ist ein Kernkriterium für starke Anträge.',
        'Asamer provides cutting-edge technology partners for leaps beyond market standards. This level of innovation is a core criterion for strong applications.',
        'Asamer nabízí špičkové technologické partnery pro technologické skoky nad rámec tržního standardu. Právě tato míra inovace je klíčovým kritériem silné žádosti.'
      ),
      importantCheck: tr(
        'Der Innovationssprung muss im Antrag konkret und messbar belegt werden.',
        'The innovation leap must be described concretely and measurably in the application.',
        'Inovační posun musí být v žádosti konkrétně a měřitelně doložen.'
      ),
      companyTypes: ['wood_secondary', 'primary_wood', 'other_industry'],
      goals: ['innovation'],
      budgetRanges: ['lt_2_5', 'btw_2_5_20', 'btw_20_100', 'gt_100'],
    },
    {
      id: 'mze_szp',
      title: tr(
        'Technologische Investitionen (MZe)',
        'Technological Investments (MZe)',
        'Technologické investice (MZe)'
      ),
      program: 'MZe / SZP',
      savingsHighlight: tr('Sätze gemäß SZP', 'Rates per SZP', 'Sazby dle SZP'),
      criteria: tr(
        'Für Primärverarbeiter von Holz (Sägewerke, Rundholzplätze) und Forstbetriebe in Tschechien.',
        'For primary wood processors (sawmills, log yards) and forestry businesses in the Czech Republic.',
        'Pro prvotní zpracovatele dřeva (pily, sklady kulatiny) a lesnické podniky v České republice.'
      ),
      funding: tr(
        'Gefördert werden Maschinen für Einschnitt, Sortierung und Primärverarbeitung von Holz zur Steigerung der regionalen Wertschöpfung.',
        'Funding includes machinery for sawing, sorting, and primary wood processing to increase regional value creation.',
        'Podporovány jsou stroje pro pořez, třídění a prvotní zpracování dřeva za účelem zvýšení regionální přidané hodnoty.'
      ),
      savings: tr(
        'Spezifische Fördersätze gemäß Strategischem Plan 2023-2027 (SZP).',
        'Specific funding rates according to the Strategic Plan 2023-2027 (SZP).',
        'Specifické sazby podpory dle Strategického plánu 2023-2027 (SZP).'
      ),
      advantage: tr(
        'Asamer kennt die rauen Bedingungen in der Primärverarbeitung und liefert robuste, hocheffiziente Systemlösungen, die exakt zu den Förderrichtlinien des Landwirtschaftsministeriums passen.',
        'Asamer understands the harsh conditions of primary processing and delivers robust, high-efficiency system solutions that match Ministry of Agriculture guidelines.',
        'Asamer rozumí náročným podmínkám prvotního zpracování a dodává robustní, vysoce efektivní systémová řešení, která přesně odpovídají pravidlům ministerstva zemědělství.'
      ),
      importantCheck: tr(
        'Regeln und Fördersätze richten sich nach aktueller SZP-Richtlinie für Primärverarbeitung.',
        'Rules and funding rates follow the current SZP guideline for primary processing.',
        'Pravidla a sazby podpory se řídí aktuálními pravidly SZP pro prvotní zpracování.'
      ),
      companyTypes: ['primary_wood'],
      goals: ['primary_upgrade'],
      budgetRanges: ['lt_2_5', 'btw_2_5_20', 'btw_20_100', 'gt_100'],
    },
  ];

  const matrixRows = [
    { label: qaLabels.criteria, values: sections.map((section) => section.criteria) },
    { label: qaLabels.funding, values: sections.map((section) => section.funding) },
    { label: qaLabels.savings, values: sections.map((section) => section.savings) },
    { label: qaLabels.advantage, values: sections.map((section) => section.advantage) },
  ];

  const matches = useMemo(() => rankPrograms(criteria, sections), [criteria, sections]);
  const showResults = hasSubmitted && isCriteriaComplete(criteria);

  useEffect(() => {
    trackEvent('flow_start', {
      flow_name: FINANCING_FLOW_NAME,
      flow_session_id: flowSessionId,
      flow_step: 'landing',
      page_path: '/finanzierung',
    });
  }, [flowSessionId]);

  useEffect(() => {
    if (showResults && !resultsVisibleRef.current) {
      trackEvent('flow_result_view', {
        flow_name: FINANCING_FLOW_NAME,
        flow_session_id: flowSessionId,
        matches_count: matches.length,
        top_program_id: matches[0]?.program.id ?? 'none',
        company_type: criteria.companyType ?? 'none',
        goal: criteria.goal ?? 'none',
        budget: criteria.budget ?? 'none',
      });
    }
    resultsVisibleRef.current = showResults;
  }, [showResults, flowSessionId, matches, criteria.companyType, criteria.goal, criteria.budget]);

  const updateSearchParams = (updater: (next: URLSearchParams) => void) => {
    const next = new URLSearchParams(searchParams);
    updater(next);
    setSearchParams(next, { replace: true });
  };

  const setCompanyType = (value: CompanyType) => {
    trackEvent('flow_step', {
      flow_name: FINANCING_FLOW_NAME,
      flow_session_id: flowSessionId,
      step_name: 'company_type',
      step_index: 1,
      value,
    });
    updateSearchParams((next) => {
      next.set('companyType', value);
    });
  };

  const setGoal = (value: InvestmentGoal) => {
    trackEvent('flow_step', {
      flow_name: FINANCING_FLOW_NAME,
      flow_session_id: flowSessionId,
      step_name: 'goal',
      step_index: 2,
      value,
    });
    updateSearchParams((next) => {
      next.set('goal', value);
    });
  };

  const setBudget = (value: BudgetRange) => {
    trackEvent('flow_step', {
      flow_name: FINANCING_FLOW_NAME,
      flow_session_id: flowSessionId,
      step_name: 'budget',
      step_index: 3,
      value,
    });
    updateSearchParams((next) => {
      next.set('budget', value);
    });
  };

  const toggleDetails = () => {
    trackEvent('financing_details_toggle', {
      flow_name: FINANCING_FLOW_NAME,
      flow_session_id: flowSessionId,
      open: !detailsOpen,
    });
    updateSearchParams((next) => {
      if (detailsOpen) {
        next.delete('details');
      } else {
        next.set('details', 'open');
      }
    });
  };

  const resetWizard = () => {
    trackEvent('flow_reset', {
      flow_name: FINANCING_FLOW_NAME,
      flow_session_id: flowSessionId,
    });
    updateSearchParams((next) => {
      next.delete('companyType');
      next.delete('goal');
      next.delete('budget');
    });
    setHasSubmitted(false);
  };

  const handleShowResults = () => {
    if (!canSubmit) return;
    trackEvent('flow_submit', {
      flow_name: FINANCING_FLOW_NAME,
      flow_session_id: flowSessionId,
      company_type: criteria.companyType ?? 'none',
      goal: criteria.goal ?? 'none',
      budget: criteria.budget ?? 'none',
      predicted_top_program_id: matches[0]?.program.id ?? 'none',
    });
    setHasSubmitted(true);
    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const buildInquiryHref = (subjectSuffix: string) =>
    buildMailto('max@asamer.net', `${fundingInquiryPrefix}: ${subjectSuffix}`);

  const fallbackInquiryHref = buildInquiryHref(
    tr('Manueller Eligibility-Check', 'Manual eligibility check', 'Manuální kontrola způsobilosti')
  );

  const getMatchInquiryHref = (match: ProgramMatchResult) => buildInquiryHref(match.program.title);
  const handleFallbackCtaClick = () => {
    trackEvent('flow_cta_click', {
      flow_name: FINANCING_FLOW_NAME,
      flow_session_id: flowSessionId,
      cta_type: 'fallback',
    });
  };

  const handleMatchCtaClick = (match: ProgramMatchResult, position: 'top' | 'alternative') => {
    trackEvent('flow_cta_click', {
      flow_name: FINANCING_FLOW_NAME,
      flow_session_id: flowSessionId,
      cta_type: 'program',
      program_id: match.program.id,
      position,
    });
  };

  const eligibilityCtaLabel = tr(
    'Prüfen Sie Ihre Förderfähigkeit mit Asamer',
    'Check your funding eligibility with Asamer',
    'Ověřte svou způsobilost k dotaci s Asamer'
  );
  const eligibilityCtaHint = tr(
    'Kurzer Eligibility-Check für Ihr Projekt inkl. nächster Schritte.',
    'Short eligibility check for your project including next steps.',
    'Rychlá kontrola způsobilosti vašeho projektu včetně dalších kroků.'
  );

  return (
    <>
      <SeoHead routeKey="financing" />
      <div className="bg-dark min-h-screen">
      <section className="pt-28 md:pt-36 pb-8 financing-hero">
        <div className="container-wide">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 min-h-[280px]">
            <img
              src={fundingImage}
              alt={tr('EU-Förderbudget', 'EU funding budget', 'Rozpočet EU na dotace')}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,15,0.92)] via-[rgba(10,10,15,0.78)] to-[rgba(10,10,15,0.45)]" />
            <div className="relative p-8 md:p-12 max-w-4xl">
              <div className="accent-line mb-6" />
              <h1 className="text-section font-display font-light text-white mb-6">
                {tr(
                  'Förderkompass für tschechische Holzbetriebe',
                  'Funding guide for Czech woodworking companies',
                  'Dotační průvodce pro české dřevozpracující podniky'
                )}
              </h1>
              <p className="text-white/75 text-lg leading-relaxed">
                {tr(
                  'Starten Sie mit einem geführten 3‑Schritt‑Check und sehen Sie zuerst die wirklich relevanten Programme.',
                  'Start with a guided 3-step check and see only the truly relevant programs first.',
                  'Začněte vedeným 3krokovým checkem a nejprve uvidíte jen skutečně relevantní programy.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <EligibilityWizard
        criteria={criteria}
        currentStep={currentStep}
        canSubmit={canSubmit}
        texts={t.financingWizard}
        onSelectCompanyType={setCompanyType}
        onSelectGoal={setGoal}
        onSelectBudget={setBudget}
        onSubmit={handleShowResults}
        onReset={resetWizard}
      />

      {showResults && (
        <div ref={resultRef}>
          <EligibilityResult
            matches={matches}
            texts={t.financingWizard}
            fallbackCtaHref={fallbackInquiryHref}
            getCtaHref={getMatchInquiryHref}
            onFallbackCtaClick={handleFallbackCtaClick}
            onMatchCtaClick={handleMatchCtaClick}
          />
        </div>
      )}

      <FinancingDetailsAccordion
        sections={sections}
        matrixRows={matrixRows}
        qaLabels={qaLabels}
        detailsOpen={detailsOpen}
        onToggleDetails={toggleDetails}
        texts={t.financingWizard.detailsToggle}
        fundingInquiryPrefix={fundingInquiryPrefix}
        eligibilityCtaLabel={eligibilityCtaLabel}
        eligibilityCtaHint={eligibilityCtaHint}
        fundingLabel={tr('Förderung', 'Funding', 'Dotace')}
        questionLabel={tr('Frage', 'Question', 'Otázka')}
      />

      <section className="pb-24">
        <div className="container-wide">
          <div className="rounded-2xl border border-white/10 bg-dark-elevated p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4">
              {tr('Finanzierung durch Leasing', 'Financing through leasing', 'Financování prostřednictvím leasingu')}
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              {tr(
                'Durch unseren Partner Raiffeisen Leasing garantieren wir Ihnen eine faire Finanzierung für Ihre Maschineninvestition.',
                'Through our partner Raiffeisen Leasing, we provide fair financing for your machine investment.',
                'Díky našemu partnerovi Raiffeisen Leasing vám zajistíme férové financování vaší investice do strojů.'
              )}
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                tr('Planbare Monatsraten', 'Predictable monthly rates', 'Předvídatelné měsíční splátky'),
                tr('Schonung Ihrer Liquidität', 'Preserves your liquidity', 'Šetří vaši likviditu'),
                tr('Schnelle und transparente Abwicklung', 'Fast and transparent processing', 'Rychlé a transparentní vyřízení'),
              ].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-dark-card px-4 py-3 text-sm text-white/75">
                  {item}
                </div>
              ))}
            </div>
            <a
              href={buildMailto('max@asamer.net', tr('Leasinganfrage', 'Leasing inquiry', 'Poptávka leasingu'))}
              onClick={() =>
                trackEvent('financing_leasing_cta_click', {
                  flow_name: FINANCING_FLOW_NAME,
                  flow_session_id: flowSessionId,
                  cta_type: 'leasing_mailto',
                })
              }
              className="btn-primary-dark inline-flex"
            >
              {tr('Leasing anfragen', 'Request leasing', 'Poptat leasing')}
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default FinancingPage;
