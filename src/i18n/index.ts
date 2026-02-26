export type Language = 'de' | 'en' | 'cz' | 'hu' | 'sk';

export interface Translations {
  nav: {
    solutions: string;
    cutting: string;
    edgebanding: string;
    handling: string;
    automation: string;
    service: string;
    company: string;
    contact: string;
    themeDay: string;
    themeNight: string;
    activateThemeDay: string;
    activateThemeNight: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    scroll: string;
  };
  solutions: {
    title: string;
    subtitle: string;
    cutting: {
      title: string;
      description: string;
    };
    edgebanding: {
      title: string;
      description: string;
    };
    handling: {
      title: string;
      description: string;
    };
  };
  automation: {
    title: string;
    subtitle: string;
    steps: {
      materialFeed: {
        title: string;
        description: string;
      };
      roboticLoading: {
        title: string;
        description: string;
      };
      intelligentStacking: {
        title: string;
        description: string;
      };
    };
  };
  financingWizard: {
    title: string;
    subtitle: string;
    stepProgressLabel: string;
    stepLabels: {
      companyType: string;
      goal: string;
      budget: string;
    };
    questions: {
      companyType: string;
      goal: string;
      budget: string;
    };
    options: {
      companyType: {
        woodSecondary: string;
        primaryWood: string;
        otherIndustry: string;
      };
      goal: {
        digitalization: string;
        innovation: string;
        primaryUpgrade: string;
      };
      budget: {
        lt2_5: string;
        btw2_5And20: string;
        btw20And100: string;
        gt100: string;
      };
    };
    buttons: {
      showResults: string;
      reset: string;
    };
    result: {
      title: string;
      subtitle: string;
      topRecommendation: string;
      alternative: string;
      whyFit: string;
      fundingRange: string;
      importantCheck: string;
      cta: string;
      reasonLabels: {
        goalMatch: string;
        companyTypeMatch: string;
        budgetMatch: string;
      };
    };
    emptyState: {
      title: string;
      description: string;
      cta: string;
    };
    detailsToggle: {
      title: string;
      subtitle: string;
      show: string;
      hide: string;
      comparisonTitle: string;
    };
  };
  manufacturers: {
    title: string;
    subtitle: string;
  };
  service: {
    title: string;
    subtitle: string;
    items: {
      phone: {
        title: string;
        description: string;
      };
      remote: {
        title: string;
        description: string;
      };
      spareParts: {
        title: string;
        description: string;
      };
      training: {
        title: string;
        description: string;
      };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
    info: {
      phone: string;
      email: string;
      address: string;
    };
  };
  footer: {
    copyright: string;
    imprint: string;
    privacy: string;
  };
}

const translations: Record<Language, Translations> = {
  de: {
    nav: {
      solutions: 'Lösungen',
      cutting: 'Schneiden',
      edgebanding: 'Kantenbearbeitung',
      handling: 'Manipulation & Lager',
      automation: 'Finanzierung',
      service: 'Service',
      company: 'Unternehmen',
      contact: 'Kontakt',
      themeDay: 'Tagmodus',
      themeNight: 'Nachtmodus',
      activateThemeDay: 'Tagmodus aktivieren',
      activateThemeNight: 'Nachtmodus aktivieren',
    },
    hero: {
      headline: 'Automatisierung Ihrer Produktion durch Robotik und Industrie 4.0',
      subheadline: 'Seit über 30 Jahren realisiert die Asamer Technologie GmbH industrielle Lösungen für die Holz-, Kunststoff- und Metallbearbeitung in Tschechien, der Slowakei und Ungarn.',
      cta: 'Projektanfrage',
      scroll: 'Scrollen',
    },
    solutions: {
      title: 'Maßgeschneiderte Lösungen',
      subtitle: 'für Ihre Produktion',
      cutting: {
        title: 'Schneiden',
        description: 'Präzise Plattenaufteilsägen von Mayer und IMA Schelling für Holz, Kunststoff und Metall.',
      },
      edgebanding: {
        title: 'Kantenbearbeitung',
        description: 'Fugenlose Kantenverbindungen mit PUR-Anleimsystemen und LASER Hydrofuse Technologie von OTT.',
      },
      handling: {
        title: 'Manipulation & Lager',
        description: 'Automatisierte Materialflüsse mit BARBARIC Flächenlagern und Vakuumhandling-Systemen.',
      },
    },
    automation: {
      title: 'Finanzierung durch Förderungen',
      subtitle: 'Förderprogramme 2025-2027 für Digitalisierung, Innovation und Energieeffizienz',
      steps: {
        materialFeed: {
          title: 'Automatische Materialzufuhr',
          description: 'Kontinuierliche Versorgung Ihrer Produktionslinie mit intelligenten Zuführsystemen.',
        },
        roboticLoading: {
          title: 'Robotisierte Beschickung',
          description: 'Präzise Handhabung durch Kamerasysteme und softwaregesteuerte Roboterlösungen.',
        },
        intelligentStacking: {
          title: 'Intelligente Abstapelung',
          description: 'Optimale Lagerung und Organisation Ihrer Produkte durch smarte Abstapelsysteme.',
        },
      },
    },
    financingWizard: {
      title: 'Förder-Check in 3 Schritten',
      subtitle: 'Wählen Sie Unternehmensart, Ziel und Budget. Wir zeigen Ihnen die relevantesten Programme.',
      stepProgressLabel: 'Schritt',
      stepLabels: {
        companyType: 'Unternehmensart',
        goal: 'Investitionsziel',
        budget: 'Budgetrahmen',
      },
      questions: {
        companyType: 'Welche Art von Betrieb trifft auf Sie zu?',
        goal: 'Was ist das Hauptziel Ihrer Investition?',
        budget: 'Welches Gesamtbudget planen Sie?',
      },
      options: {
        companyType: {
          woodSecondary: 'Tischlerei / Möbel / Plattenverarbeitung',
          primaryWood: 'Sägewerk / Primärverarbeitung / Forst',
          otherIndustry: 'Sonstige Produktion',
        },
        goal: {
          digitalization: 'Digitalisierung und Automatisierung',
          innovation: 'Neue Produkte oder Prozessinnovation',
          primaryUpgrade: 'Modernisierung der Primärverarbeitung',
        },
        budget: {
          lt2_5: '< 2,5 Mio. CZK',
          btw2_5And20: '2,5 bis 20 Mio. CZK',
          btw20And100: '20 bis 100 Mio. CZK',
          gt100: '> 100 Mio. CZK',
        },
      },
      buttons: {
        showResults: 'Passende Förderungen anzeigen',
        reset: 'Zurücksetzen',
      },
      result: {
        title: 'Ihre Förder-Empfehlungen',
        subtitle: 'Top-Empfehlung und eine sinnvolle Alternative auf Basis Ihrer Angaben.',
        topRecommendation: 'Top-Empfehlung',
        alternative: 'Alternative',
        whyFit: 'Warum passt das?',
        fundingRange: 'Förderbereich',
        importantCheck: 'Wichtig zu prüfen',
        cta: 'Förderfähigkeit mit Asamer prüfen',
        reasonLabels: {
          goalMatch: 'Passt zu Ihrem Investitionsziel',
          companyTypeMatch: 'Passt zu Ihrer Betriebsart',
          budgetMatch: 'Passt zu Ihrem Budgetrahmen',
        },
      },
      emptyState: {
        title: 'Keine eindeutige Zuordnung',
        description: 'Für diese Kombination empfehlen wir einen kurzen manuellen Eligibility-Check mit Asamer.',
        cta: 'Manuellen Check starten',
      },
      detailsToggle: {
        title: 'Alle Programme im Detail',
        subtitle: 'Vollständiger Vergleich und Detailinhalte nur bei Bedarf einblenden.',
        show: 'Details anzeigen',
        hide: 'Details ausblenden',
        comparisonTitle: 'Schnellvergleich',
      },
    },
    manufacturers: {
      title: 'Starke Partner',
      subtitle: 'Innovative Technologien',
    },
    service: {
      title: 'Produktionssicherheit durch Service',
      subtitle: 'Wir sind für Sie da – vor, während und nach dem Kauf',
      items: {
        phone: {
          title: 'Telefonische Soforthilfe',
          description: 'Direkter Kontakt zu unseren Technikern für schnelle Lösungen.',
        },
        remote: {
          title: 'Online Fernwartung',
          description: 'Schnelle Diagnose und Problemlösung aus der Ferne.',
        },
        spareParts: {
          title: 'Ersatzteillieferung',
          description: 'Original Ersatzteile für maximale Maschinenverfügbarkeit.',
        },
        training: {
          title: 'Schulung des Bedienpersonals',
          description: 'Umfassende Einweisung Ihrer Mitarbeiter ab Tag 1.',
        },
      },
    },
    contact: {
      title: 'Lassen Sie uns über Ihr Projekt sprechen',
      subtitle: 'Kontaktieren Sie uns für eine individuelle Beratung',
      form: {
        name: 'Name',
        email: 'E-Mail',
        phone: 'Telefon',
        message: 'Ihre Nachricht',
        submit: 'Nachricht senden',
      },
      info: {
        phone: '+420 123 456 789',
        email: 'info@asamer.cz',
        address: 'Asamer Technologie GmbH\nPrag, Tschechien',
      },
    },
    footer: {
      copyright: '© 2026 Asamer Technologie GmbH und Asamer s.r.o. Alle Rechte vorbehalten.',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
    },
  },
  en: {
    nav: {
      solutions: 'Solutions',
      cutting: 'Cutting',
      edgebanding: 'Edgebanding',
      handling: 'Handling & Storage',
      automation: 'Funding',
      service: 'Service',
      company: 'Company',
      contact: 'Contact',
      themeDay: 'Day mode',
      themeNight: 'Night mode',
      activateThemeDay: 'Enable day mode',
      activateThemeNight: 'Enable night mode',
    },
    hero: {
      headline: 'Automation of Your Production through Robotics and Industry 4.0',
      subheadline: 'For over 30 years, Asamer Technologie GmbH has been implementing industrial solutions for wood, plastic and metal processing in the Czech Republic, Slovakia and Hungary.',
      cta: 'Project Inquiry',
      scroll: 'Scroll',
    },
    solutions: {
      title: 'Tailored Solutions',
      subtitle: 'for Your Production',
      cutting: {
        title: 'Cutting',
        description: 'Precise panel saws from Mayer and IMA Schelling for wood, plastic and metal.',
      },
      edgebanding: {
        title: 'Edgebanding',
        description: 'Seamless edge joints with PUR gluing systems and LASER Hydrofuse technology from OTT.',
      },
      handling: {
        title: 'Handling & Storage',
        description: 'Automated material flows with BARBARIC storage systems and vacuum handling.',
      },
    },
    automation: {
      title: 'Funding through grants',
      subtitle: '2025-2027 funding programs for digitalization, innovation, and energy efficiency',
      steps: {
        materialFeed: {
          title: 'Automatic Material Feed',
          description: 'Continuous supply of your production line with intelligent feeding systems.',
        },
        roboticLoading: {
          title: 'Robotic Loading',
          description: 'Precise handling through camera systems and software-controlled robot solutions.',
        },
        intelligentStacking: {
          title: 'Intelligent Stacking',
          description: 'Optimal storage and organization of your products through smart stacking systems.',
        },
      },
    },
    financingWizard: {
      title: 'Funding check in 3 steps',
      subtitle: 'Select company type, goal, and budget. We show the most relevant programs.',
      stepProgressLabel: 'Step',
      stepLabels: {
        companyType: 'Company type',
        goal: 'Investment goal',
        budget: 'Budget range',
      },
      questions: {
        companyType: 'Which type of business best matches you?',
        goal: 'What is the main objective of your investment?',
        budget: 'What total budget are you planning?',
      },
      options: {
        companyType: {
          woodSecondary: 'Joinery / furniture / panel processing',
          primaryWood: 'Sawmill / primary processing / forestry',
          otherIndustry: 'Other production business',
        },
        goal: {
          digitalization: 'Digitalization and automation',
          innovation: 'New products or process innovation',
          primaryUpgrade: 'Upgrade of primary processing',
        },
        budget: {
          lt2_5: '< CZK 2.5 million',
          btw2_5And20: 'CZK 2.5 to 20 million',
          btw20And100: 'CZK 20 to 100 million',
          gt100: '> CZK 100 million',
        },
      },
      buttons: {
        showResults: 'Show matching programs',
        reset: 'Reset',
      },
      result: {
        title: 'Your funding recommendations',
        subtitle: 'Top recommendation and one meaningful alternative based on your inputs.',
        topRecommendation: 'Top recommendation',
        alternative: 'Alternative',
        whyFit: 'Why it fits',
        fundingRange: 'Funding range',
        importantCheck: 'Important to verify',
        cta: 'Check eligibility with Asamer',
        reasonLabels: {
          goalMatch: 'Matches your investment goal',
          companyTypeMatch: 'Matches your business profile',
          budgetMatch: 'Matches your budget range',
        },
      },
      emptyState: {
        title: 'No clear match',
        description: 'For this combination, we recommend a short manual eligibility check with Asamer.',
        cta: 'Start manual check',
      },
      detailsToggle: {
        title: 'All programs in detail',
        subtitle: 'Show full comparison and detailed content only when needed.',
        show: 'Show details',
        hide: 'Hide details',
        comparisonTitle: 'Quick comparison',
      },
    },
    manufacturers: {
      title: 'Strong Partners',
      subtitle: 'Innovative Technologies',
    },
    service: {
      title: 'Production Security through Service',
      subtitle: 'We are here for you – before, during and after the purchase',
      items: {
        phone: {
          title: 'Phone Support',
          description: 'Direct contact with our technicians for quick solutions.',
        },
        remote: {
          title: 'Online Remote Maintenance',
          description: 'Fast diagnosis and problem solving from a distance.',
        },
        spareParts: {
          title: 'Spare Parts Delivery',
          description: 'Original spare parts for maximum machine availability.',
        },
        training: {
          title: 'Operator Training',
          description: 'Comprehensive training for your employees from day 1.',
        },
      },
    },
    contact: {
      title: 'Let us talk about your project',
      subtitle: 'Contact us for individual consultation',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Your Message',
        submit: 'Send Message',
      },
      info: {
        phone: '+420 123 456 789',
        email: 'info@asamer.cz',
        address: 'Asamer Technologie GmbH\nPrague, Czech Republic',
      },
    },
    footer: {
      copyright: '© 2026 Asamer Technologie GmbH and Asamer s.r.o. All rights reserved.',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
    },
  },
  cz: {
    nav: {
      solutions: 'Řešení',
      cutting: 'Řezání',
      edgebanding: 'Olepování hran',
      handling: 'Manipulace a skladování',
      automation: 'Financování',
      service: 'Servis',
      company: 'Společnost',
      contact: 'Kontakt',
      themeDay: 'Denní režim',
      themeNight: 'Noční režim',
      activateThemeDay: 'Zapnout denní režim',
      activateThemeNight: 'Zapnout noční režim',
    },
    hero: {
      headline: 'Automatizace vaší výroby pomocí robotiky a Průmyslu 4.0',
      subheadline: 'Společnost Asamer Technologie GmbH realizuje průmyslová řešení pro zpracování dřeva, plastů a kovů v České republice, na Slovensku a v Maďarsku již více než 30 let.',
      cta: 'Poptávka projektu',
      scroll: 'Posunout',
    },
    solutions: {
      title: 'Řešení na míru',
      subtitle: 'pro vaši výrobu',
      cutting: {
        title: 'Řezání',
        description: 'Přesné pily na desky od Mayer a IMA Schelling pro dřevo, plast a kov.',
      },
      edgebanding: {
        title: 'Olepování hran',
        description: 'Bezspárové spoje hran pomocí PUR lepicích systémů a LASER Hydrofuse technologie od OTT.',
      },
      handling: {
        title: 'Manipulace a skladování',
        description: 'Automatizované materiálové toky s plošnými sklady BARBARIC a vakuovou manipulací.',
      },
    },
    automation: {
      title: 'Financování prostřednictvím dotací',
      subtitle: 'Programy podpory 2025-2027 pro digitalizaci, inovace a energetickou účinnost',
      steps: {
        materialFeed: {
          title: 'Automatické podávání materiálu',
          description: 'Kontinuální zásobování vaší výrobní linky inteligentními podávacími systémy.',
        },
        roboticLoading: {
          title: 'Robotizované nakládání',
          description: 'Přesná manipulace pomocí kamerových systémů a softwarově řízených robotických řešení.',
        },
        intelligentStacking: {
          title: 'Inteligentní skládání',
          description: 'Optimální skladování a organizace vašich produktů pomocí chytrých skládacích systémů.',
        },
      },
    },
    financingWizard: {
      title: 'Dotační kontrola ve 3 krocích',
      subtitle: 'Zvolte typ podniku, cíl a rozpočet. Zobrazíme nejrelevantnější programy.',
      stepProgressLabel: 'Krok',
      stepLabels: {
        companyType: 'Typ podniku',
        goal: 'Cíl investice',
        budget: 'Rozpočtový rámec',
      },
      questions: {
        companyType: 'Který typ podniku vás nejlépe vystihuje?',
        goal: 'Jaký je hlavní cíl investice?',
        budget: 'Jaký celkový rozpočet plánujete?',
      },
      options: {
        companyType: {
          woodSecondary: 'Truhlářství / nábytek / zpracování desek',
          primaryWood: 'Pila / prvotní zpracování / lesnictví',
          otherIndustry: 'Jiný výrobní podnik',
        },
        goal: {
          digitalization: 'Digitalizace a automatizace',
          innovation: 'Nové produkty nebo inovace procesů',
          primaryUpgrade: 'Modernizace prvotního zpracování',
        },
        budget: {
          lt2_5: '< 2,5 mil. CZK',
          btw2_5And20: '2,5 až 20 mil. CZK',
          btw20And100: '20 až 100 mil. CZK',
          gt100: '> 100 mil. CZK',
        },
      },
      buttons: {
        showResults: 'Zobrazit vhodné programy',
        reset: 'Resetovat',
      },
      result: {
        title: 'Vaše dotační doporučení',
        subtitle: 'Hlavní doporučení a jedna smysluplná alternativa podle vašich údajů.',
        topRecommendation: 'Hlavní doporučení',
        alternative: 'Alternativa',
        whyFit: 'Proč to sedí',
        fundingRange: 'Rozsah podpory',
        importantCheck: 'Důležité ověřit',
        cta: 'Ověřit způsobilost s Asamer',
        reasonLabels: {
          goalMatch: 'Odpovídá cíli investice',
          companyTypeMatch: 'Odpovídá typu podniku',
          budgetMatch: 'Odpovídá rozpočtovému rámci',
        },
      },
      emptyState: {
        title: 'Žádná jednoznačná shoda',
        description: 'Pro tuto kombinaci doporučujeme krátké manuální posouzení způsobilosti s Asamer.',
        cta: 'Spustit manuální posouzení',
      },
      detailsToggle: {
        title: 'Všechny programy v detailu',
        subtitle: 'Kompletní srovnání a podrobnosti zobrazíme jen na vyžádání.',
        show: 'Zobrazit detaily',
        hide: 'Skrýt detaily',
        comparisonTitle: 'Rychlé srovnání',
      },
    },
    manufacturers: {
      title: 'Silní partneři',
      subtitle: 'Inovativní technologie',
    },
    service: {
      title: 'Jistota výroby díky servisu',
      subtitle: 'Jsme tu pro vás – před, během i po nákupu',
      items: {
        phone: {
          title: 'Telefonická okamžitá pomoc',
          description: 'Přímý kontakt s našimi techniky pro rychlá řešení.',
        },
        remote: {
          title: 'Online vzdálená údržba',
          description: 'Rychlá diagnostika a řešení problémů na dálku.',
        },
        spareParts: {
          title: 'Dodávka náhradních dílů',
          description: 'Originální náhradní díly pro maximální dostupnost strojů.',
        },
        training: {
          title: 'Školení obsluhy',
          description: 'Komplexní zaškolení vašich zaměstnanců od prvního dne.',
        },
      },
    },
    contact: {
      title: 'Pojďme mluvit o vašem projektu',
      subtitle: 'Kontaktujte nás pro individuální konzultaci',
      form: {
        name: 'Jméno',
        email: 'E-mail',
        phone: 'Telefon',
        message: 'Vaše zpráva',
        submit: 'Odeslat zprávu',
      },
      info: {
        phone: '+420 123 456 789',
        email: 'info@asamer.cz',
        address: 'Asamer Technologie GmbH\nPraha, Česká republika',
      },
    },
    footer: {
      copyright: '© 2026 Asamer Technologie GmbH a Asamer s.r.o. Všechna práva vyhrazena.',
      imprint: 'Tiráž',
      privacy: 'Ochrana osobních údajů',
    },
  },
  hu: {
    nav: {
      solutions: 'Megoldások',
      cutting: 'Vágás',
      edgebanding: 'Élzárás',
      handling: 'Kezelés és raktározás',
      automation: 'Finanszírozás',
      service: 'Szerviz',
      company: 'Vállalat',
      contact: 'Kapcsolat',
      themeDay: 'Nappali mód',
      themeNight: 'Éjszakai mód',
      activateThemeDay: 'Nappali mód bekapcsolása',
      activateThemeNight: 'Éjszakai mód bekapcsolása',
    },
    hero: {
      headline: 'Termelésének automatizálása robotikával és Ipar 4.0-val',
      subheadline: 'Az Asamer Technologie GmbH több mint 30 éve valósít meg ipari megoldásokat fa-, műanyag- és fémfeldolgozásra Csehországban, Szlovákiában és Magyarországon.',
      cta: 'Projektajánlatkérés',
      scroll: 'Görgessen',
    },
    solutions: {
      title: 'Egyedi megoldások',
      subtitle: 'termeléséhez',
      cutting: {
        title: 'Vágás',
        description: 'Precíz lapfűrészek Mayer és IMA Schellingtől fához, műanyaghoz és fémhez.',
      },
      edgebanding: {
        title: 'Élzárás',
        description: 'Varrat nélküli élkapcsolatok PUR ragasztórendszerekkel és LASER Hydrofuse technológiával OTT-től.',
      },
      handling: {
        title: 'Kezelés és raktározás',
        description: 'Automatizált anyagáramlás BARBARIC felületes raktárakkal és vákuumkezeléssel.',
      },
    },
    automation: {
      title: 'Finanszírozás támogatásokkal',
      subtitle: '2025-2027-es támogatási programok digitalizációra, innovációra és energiahatékonyságra',
      steps: {
        materialFeed: {
          title: 'Automatikus anyagtovábbítás',
          description: 'Folyamatos ellátás intelligens adagolórendszerekkel.',
        },
        roboticLoading: {
          title: 'Robotizált betöltés',
          description: 'Precíz kezelés kamerarendszerekkel és szoftvervezérelt robotmegoldásokkal.',
        },
        intelligentStacking: {
          title: 'Intelligens rakodás',
          description: 'Optimális tárolás és szervezés okos rakodórendszerekkel.',
        },
      },
    },
    financingWizard: {
      title: 'Támogatási ellenőrzés 3 lépésben',
      subtitle: 'Válassza ki a vállalattípust, célt és költségkeretet. Megmutatjuk a legrelevánsabb programokat.',
      stepProgressLabel: 'Lépés',
      stepLabels: {
        companyType: 'Vállalattípus',
        goal: 'Beruházási cél',
        budget: 'Költségkeret',
      },
      questions: {
        companyType: 'Melyik vállalattípus illik Önre leginkább?',
        goal: 'Mi a beruházás fő célja?',
        budget: 'Mekkora teljes költségvetést tervez?',
      },
      options: {
        companyType: {
          woodSecondary: 'Asztalos / bútor / táblafeldolgozás',
          primaryWood: 'Fűrészüzem / elsődleges feldolgozás / erdészet',
          otherIndustry: 'Egyéb termelő vállalat',
        },
        goal: {
          digitalization: 'Digitalizáció és automatizálás',
          innovation: 'Új termékek vagy folyamatinnováció',
          primaryUpgrade: 'Elsődleges feldolgozás korszerűsítése',
        },
        budget: {
          lt2_5: '< 2,5 millió CZK',
          btw2_5And20: '2,5–20 millió CZK',
          btw20And100: '20–100 millió CZK',
          gt100: '> 100 millió CZK',
        },
      },
      buttons: {
        showResults: 'Megfelelő programok megjelenítése',
        reset: 'Visszaállítás',
      },
      result: {
        title: 'Az Ön támogatási javaslatai',
        subtitle: 'Egy fő javaslat és egy releváns alternatíva az adatai alapján.',
        topRecommendation: 'Fő javaslat',
        alternative: 'Alternatíva',
        whyFit: 'Miért illik',
        fundingRange: 'Támogatási tartomány',
        importantCheck: 'Fontos ellenőrizni',
        cta: 'Támogatási jogosultság ellenőrzése az Asamerrel',
        reasonLabels: {
          goalMatch: 'Illeszkedik a beruházási célhoz',
          companyTypeMatch: 'Illeszkedik a vállalati profilhoz',
          budgetMatch: 'Illeszkedik a költségkerethez',
        },
      },
      emptyState: {
        title: 'Nincs egyértelmű találat',
        description: 'Ehhez a kombinációhoz rövid, manuális jogosultsági ellenőrzést javaslunk az Asamerrel.',
        cta: 'Manuális ellenőrzés indítása',
      },
      detailsToggle: {
        title: 'Minden program részletesen',
        subtitle: 'A teljes összehasonlítás és részletek csak igény esetén jelennek meg.',
        show: 'Részletek megjelenítése',
        hide: 'Részletek elrejtése',
        comparisonTitle: 'Gyors összehasonlítás',
      },
    },
    manufacturers: {
      title: 'Erős partnerek',
      subtitle: 'Innovatív technológiák',
    },
    service: {
      title: 'Termelési biztonság szervizzel',
      subtitle: 'Itt vagyunk Önnek – vásárlás előtt, alatt és után',
      items: {
        phone: {
          title: 'Telefonos azonnali segítség',
          description: 'Közvetlen kapcsolat technikusainkkal gyors megoldásokért.',
        },
        remote: {
          title: 'Online távkarbantartás',
          description: 'Gyors diagnózis és problémamegoldás távolról.',
        },
        spareParts: {
          title: 'Alkatrész-szállítás',
          description: 'Eredeti alkatrészek a maximális gép rendelkezésre állásért.',
        },
        training: {
          title: 'Üzemeltetői képzés',
          description: 'Átfogó betanítás munkavállalóinak az első naptól.',
        },
      },
    },
    contact: {
      title: 'Beszéljünk projektjéről',
      subtitle: 'Vegye fel velünk a kapcsolatot egyedi tanácsadásért',
      form: {
        name: 'Név',
        email: 'E-mail',
        phone: 'Telefon',
        message: 'Üzenete',
        submit: 'Üzenet küldése',
      },
      info: {
        phone: '+420 123 456 789',
        email: 'info@asamer.cz',
        address: 'Asamer Technologie GmbH\nPrága, Csehország',
      },
    },
    footer: {
      copyright: '© 2026 Asamer Technologie GmbH és Asamer s.r.o. Minden jog fenntartva.',
      imprint: 'Impresszum',
      privacy: 'Adatvédelem',
    },
  },
  sk: {
    nav: {
      solutions: 'Riešenia',
      cutting: 'Rezanie',
      edgebanding: 'Olepovanie hrán',
      handling: 'Manipulácia a skladovanie',
      automation: 'Financovanie',
      service: 'Servis',
      company: 'Spoločnosť',
      contact: 'Kontakt',
      themeDay: 'Denný režim',
      themeNight: 'Nočný režim',
      activateThemeDay: 'Zapnúť denný režim',
      activateThemeNight: 'Zapnúť nočný režim',
    },
    hero: {
      headline: 'Automatizácia vašej výroby pomocou robotiky a Priemyslu 4.0',
      subheadline: 'Spoločnosť Asamer Technologie GmbH realizuje priemyselné riešenia pre spracovanie dreva, plastov a kovov v Českej republike, na Slovensku a v Maďarsku už viac ako 30 rokov.',
      cta: 'Dopyt projektu',
      scroll: 'Posunúť',
    },
    solutions: {
      title: 'Riešenia na mieru',
      subtitle: 'pre vašu výrobu',
      cutting: {
        title: 'Rezanie',
        description: 'Presné píly na dosky od Mayer a IMA Schelling pre drevo, plast a kov.',
      },
      edgebanding: {
        title: 'Olepovanie hrán',
        description: 'Bezšvové spoje hrán pomocou PUR lepiacich systémov a LASER Hydrofuse technológie od OTT.',
      },
      handling: {
        title: 'Manipulácia a skladovanie',
        description: 'Automatizované materiálové toky s plošnými skladmi BARBARIC a vákumovou manipuláciou.',
      },
    },
    automation: {
      title: 'Financovanie prostredníctvom dotácií',
      subtitle: 'Programy podpory 2025-2027 pre digitalizáciu, inovácie a energetickú efektívnosť',
      steps: {
        materialFeed: {
          title: 'Automatické podávanie materiálu',
          description: 'Kontinuálne zásobovanie vašej výrobnej linky inteligentnými podávacími systémami.',
        },
        roboticLoading: {
          title: 'Robotizované nakladanie',
          description: 'Presná manipulácia pomocou kamerových systémov a softvérovo riadených robotických riešení.',
        },
        intelligentStacking: {
          title: 'Inteligentné skladanie',
          description: 'Optimálne skladovanie a organizácia vašich produktov pomocou inteligentných skladacích systémov.',
        },
      },
    },
    financingWizard: {
      title: 'Dotačný check v 3 krokoch',
      subtitle: 'Vyberte typ firmy, cieľ a rozpočet. Zobrazíme najrelevantnejšie programy.',
      stepProgressLabel: 'Krok',
      stepLabels: {
        companyType: 'Typ firmy',
        goal: 'Cieľ investície',
        budget: 'Rozpočtový rámec',
      },
      questions: {
        companyType: 'Ktorý typ firmy vás najlepšie vystihuje?',
        goal: 'Aký je hlavný cieľ investície?',
        budget: 'Aký celkový rozpočet plánujete?',
      },
      options: {
        companyType: {
          woodSecondary: 'Stolárstvo / nábytok / spracovanie dosiek',
          primaryWood: 'Píla / primárne spracovanie / lesníctvo',
          otherIndustry: 'Iný výrobný podnik',
        },
        goal: {
          digitalization: 'Digitalizácia a automatizácia',
          innovation: 'Nové produkty alebo inovácia procesov',
          primaryUpgrade: 'Modernizácia primárneho spracovania',
        },
        budget: {
          lt2_5: '< 2,5 mil. CZK',
          btw2_5And20: '2,5 až 20 mil. CZK',
          btw20And100: '20 až 100 mil. CZK',
          gt100: '> 100 mil. CZK',
        },
      },
      buttons: {
        showResults: 'Zobraziť vhodné programy',
        reset: 'Resetovať',
      },
      result: {
        title: 'Vaše dotačné odporúčania',
        subtitle: 'Top odporúčanie a jedna zmysluplná alternatíva na základe vašich údajov.',
        topRecommendation: 'Top odporúčanie',
        alternative: 'Alternatíva',
        whyFit: 'Prečo to sedí',
        fundingRange: 'Rozsah podpory',
        importantCheck: 'Dôležité overiť',
        cta: 'Overiť oprávnenosť s Asamer',
        reasonLabels: {
          goalMatch: 'Zodpovedá cieľu investície',
          companyTypeMatch: 'Zodpovedá typu firmy',
          budgetMatch: 'Zodpovedá rozpočtovému rámcu',
        },
      },
      emptyState: {
        title: 'Žiadna jednoznačná zhoda',
        description: 'Pre túto kombináciu odporúčame krátky manuálny eligibility check s Asamer.',
        cta: 'Spustiť manuálny check',
      },
      detailsToggle: {
        title: 'Všetky programy v detaile',
        subtitle: 'Kompletné porovnanie a detailný obsah zobrazíme len na požiadanie.',
        show: 'Zobraziť detaily',
        hide: 'Skryť detaily',
        comparisonTitle: 'Rýchle porovnanie',
      },
    },
    manufacturers: {
      title: 'Silní partneri',
      subtitle: 'Inovatívne technológie',
    },
    service: {
      title: 'Istota výroby vďaka servisu',
      subtitle: 'Sme tu pre vás – pred, počas aj po nákupe',
      items: {
        phone: {
          title: 'Telefonická okamžitá pomoc',
          description: 'Priamy kontakt s našimi technikmi pre rýchle riešenia.',
        },
        remote: {
          title: 'Online vzdialená údržba',
          description: 'Rýchla diagnostika a riešenie problémov na diaľku.',
        },
        spareParts: {
          title: 'Dodávka náhradných dielov',
          description: 'Originálne náhradné diely pre maximálnu dostupnosť strojov.',
        },
        training: {
          title: 'Školenie obsluhy',
          description: 'Komplexné zaškolenie vašich zamestnancov od prvého dňa.',
        },
      },
    },
    contact: {
      title: 'Porozprávajme sa o vašom projekte',
      subtitle: 'Kontaktujte nás pre individuálnu konzultáciu',
      form: {
        name: 'Meno',
        email: 'E-mail',
        phone: 'Telefón',
        message: 'Vaša správa',
        submit: 'Odoslať správu',
      },
      info: {
        phone: '+420 123 456 789',
        email: 'info@asamer.cz',
        address: 'Asamer Technologie GmbH\nPraha, Česká republika',
      },
    },
    footer: {
      copyright: '© 2026 Asamer Technologie GmbH a Asamer s.r.o. Všetky práva vyhradené.',
      imprint: 'Tiráž',
      privacy: 'Ochrana osobných údajov',
    },
  },
};

export default translations;
