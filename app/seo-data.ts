import { projects } from './projects/project-data'
import { SITE_NAME, SITE_NAME_AR, SITE_URL, SITE_EMAIL, SITE_PHONE_INTL } from './site-config'

export const homeFaqs = [
  {
    questionEn: 'What services does SperaCode provide?',
    answerEn: 'SperaCode provides full-cycle software solutions: custom website development, mobile apps for iOS and Android, digital QR menus for restaurants and cafés, AI solutions and chatbots, UI/UX product design, and continuous technical support.',
    questionAr: 'ما هي الخدمات التي تقدمها شركة SperaCode؟',
    answerAr: 'تقدّم سبيرا كود (SperaCode) حلولًا رقمية متكاملة تشمل: تطوير المواقع الإلكترونية والمنصات، تطبيقات الجوال لـ iOS وAndroid، المنيو الرقمي التفاعلي QR للمطاعم والكافيهات، حلول الذكاء الاصطناعي وروبوتات المحادثة، تصميم واجهات وتجربة المستخدم UI/UX، والصيانة والدعم الفني المستمر.',
  },
  {
    questionEn: 'How long does a typical project take to deliver?',
    answerEn: 'Standard corporate websites typically take 1–3 weeks. Custom web applications, e-commerce platforms, and mobile apps typically range between 4–10 weeks based on requirements. We provide an exact delivery timeline following our discovery consultation.',
    questionAr: 'كم تستغرق مدة تنفيذ المشروع؟',
    answerAr: 'تستغرق المواقع التعريفية البسيطة عادةً من أسبوع إلى 3 أسابيع. أما التطبيقات والمنصات المخصصة والمتاجر الإلكترونية فتتراوح بين 4 إلى 10 أسابيع وفقًا لحجم المتطلبات، ونقدّم جدولًا زمنيًا تفصيليًا ودقيقًا بعد جلسة الاستكشاف المبدئية.',
  },
  {
    questionEn: 'How is project pricing determined?',
    answerEn: 'Pricing is transparent and based on defined functional scope and project complexity. You receive a fixed, written quotation with no hidden costs before any contract or work begins.',
    questionAr: 'كيف يتم تحديد أسعار المشاريع؟',
    answerAr: 'نعتمد تسعيرًا شفافًا ومدروسًا يعتمد على نطاق العمل والمميزات المطلوبة. يحصل العميل على عرض سعر مفصل وثابت ومكتوب قبل بدء أي خطوة في التنفيذ دون أي تكاليف خفية.',
  },
  {
    questionEn: 'Do you offer post-launch support and maintenance?',
    answerEn: 'Yes. Every project delivered includes an initial complimentary warranty and support period. We also offer monthly and annual SLA maintenance plans covering security updates, performance monitoring, backups, and feature improvements.',
    questionAr: 'هل تقدمون دعمًا فنيًا وصيانة بعد التسليم؟',
    answerAr: 'نعم بالتأكيد. يتضمن كل مشروع فترة ضمان ودعم فني مجانية بعد الإطلاق، كما نوفّر باقات صيانة شهرية وسنوية تضمن التحديثات الأمنية، ومتابعة الأداء، والنسخ الاحتياطي، وإضافة تحسينات مستمرة.',
  },
  {
    questionEn: 'How does your Digital QR Menu solution work?',
    answerEn: 'Our Digital QR Menu lets restaurant and café guests scan a QR code with any smartphone to browse an interactive bilingual (Arabic/English) menu with photos and prices, and send orders directly via WhatsApp without needing to download an app or pay for re-printing.',
    questionAr: 'كيف يعمل المنيو الرقمي التفاعلي QR؟',
    answerAr: 'يُمكّن المنيو الرقمي زوار المطعم أو الكافيه من مسح رمز QR بكاميرا الهاتف لتصفح قائمة طعام تفاعلية ثنائية اللغة (عربي وإنجليزي) بصور جذابة وتحديث فوري للأسعار، مع إمكانية إرسال الطلبات مباشرة عبر واتساب دون الحاجة لتحميل أي تطبيق ودون تكاليف طباعة متكررة.',
  },
  {
    questionEn: 'Do you work with clients outside Egypt?',
    answerEn: 'Yes. SperaCode works remotely with clients across Saudi Arabia, the United Arab Emirates, Kuwait, Qatar, the wider MENA region, and globally. All discovery, sprint reviews, communication, and delivery occur smoothly online via video calls and dedicated channels.',
    questionAr: 'هل تعملون مع عملاء خارج مصر والخليج؟',
    answerAr: 'نعم، نعمل عن بُعد مع عملاء في مصر، والسعودية، والإمارات، والكويت، وقطر، ومختلف دول العالم. تجري كافة الاجتماعات والمراجعات والتسليمات عبر الإنترنت عبر قنوات عمل وتواصل مخصصة بكفاءة وسلاسة.',
  },
  {
    questionEn: 'Who retains the intellectual property and code ownership?',
    answerEn: 'You do. Full source code, graphic assets, and intellectual property transfer 100% to you upon final settlement.',
    questionAr: 'لمن تعود ملكية الكود والتصميم بعد التسليم؟',
    answerAr: 'تعود الملكية الفكرية وحقوق الشيفرة البرمجية (Source Code) والتصاميم كاملة بنسبة 100% إلى العميل فور الانتهاء من السداد النهائي.',
  },
  {
    questionEn: 'Can you upgrade or optimize an existing website or application?',
    answerEn: 'Yes. We conduct an in-depth technical audit covering performance, UX, SEO, and codebase health, then propose strategic refactoring, optimization, or re-architecture as best fits your business goals.',
    questionAr: 'هل يمكنكم تطوير أو تحسين موقع أو تطبيق قائم بالفعل؟',
    answerAr: 'نعم، نبدأ بإجراء فحص فني شامل (Audit) للأداء وتجربة المستخدم والسيو ونظافة الكود، ثم نضع خطة للتحسين وإعادة الهيكلة أو التطوير بما يحقق أعلى عائد استثماري لأعمالك.',
  },
]

export function createFaqPageSchema(locale: 'ar' | 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}${locale === 'ar' ? '/' : '/en'}#faq`,
    inLanguage: locale === 'ar' ? 'ar-EG' : 'en',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: locale === 'ar' ? faq.questionAr : faq.questionEn,
      acceptedAnswer: {
        '@type': 'Answer',
        text: locale === 'ar' ? faq.answerAr : faq.answerEn,
      },
    })),
  }
}

export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: [SITE_NAME_AR, 'SperaCode Software', 'سبيرا كود للبرمجيات'],
    url: SITE_URL,
    logo: `${SITE_URL}/speracode-mark.png`,
    image: `${SITE_URL}/home-hero-dark.png`,
    description: 'SperaCode (سبيرا كود) is a premier software development house in Egypt providing custom websites, iOS & Android mobile apps, digital QR menus, AI integrations, and UI/UX design across MENA and globally.',
    priceRange: '$$',
    telephone: SITE_PHONE_INTL,
    email: SITE_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EG',
      addressRegion: 'Egypt',
    },
    areaServed: [
      { '@type': 'Country', name: 'Egypt' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Kuwait' },
      { '@type': 'Country', name: 'Qatar' },
      { '@type': 'Place', name: 'Worldwide (Remote)' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support and sales',
      url: `${SITE_URL}/contact`,
      availableLanguage: ['Arabic', 'English'],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '45',
      bestRating: '5',
      worstRating: '1',
    },
    knowsAbout: [
      'Web development',
      'Mobile applications (iOS & Android)',
      'Digital QR menus',
      'Artificial intelligence & LLM chatbots',
      'UI/UX design',
      'Next.js & React',
      'Flutter & React Native',
      'Custom ERP & management systems',
      'SEO & Generative Engine Optimization (GEO)',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software and Digital Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web development',
            description: 'Corporate websites, e-commerce platforms, and scalable web apps built with Next.js and modern technologies.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile application development',
            description: 'Native-grade iOS and Android mobile apps designed for seamless user experience and performance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital QR menus',
            description: 'Interactive restaurant and café digital menus with live updates and direct WhatsApp ordering.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI solutions & Chatbots',
            description: 'Custom AI assistants, workflow automation, and smart chatbot integrations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UI/UX design',
            description: 'User-centered interface design, wireframing, prototyping, and design systems.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Maintenance & Technical Support',
            description: 'Continuous monitoring, security updates, bug fixes, and SLA technical support.',
          },
        },
      ],
    },
  }
}

export function createContactPageSchema(locale: 'ar' | 'en') {
  const path = locale === 'ar' ? '/contact' : '/en/contact'

  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name: locale === 'ar' ? 'تواصل مع SperaCode | ابدأ مشروعك البرمجي' : 'Contact SperaCode | Start Your Software Project',
    description: locale === 'ar' ? 'تواصل مع فريق سبيرا كود لمناقشة مشروعك والحصول على استشارة وعرض سعر مجاني.' : 'Get in touch with SperaCode team to discuss your project and receive a tailored quote.',
    inLanguage: locale === 'ar' ? 'ar-EG' : 'en',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: { '@id': `${SITE_URL}/#organization` },
  }
}

export function createPortfolioPageSchema(locale: 'ar' | 'en') {
  const path = locale === 'ar' ? '/projects' : '/en/projects'

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name: locale === 'ar' ? 'أعمال ومشاريع SperaCode' : 'SperaCode Selected Work & Portfolio',
    description: locale === 'ar' ? 'استعرض أبرز أعمال ومشاريع سبيرا كود من مواقع إلكترونية، ومنصات تعليمية وتجارية، وأنظمة إدارة أعمال.' : 'Explore SperaCode portfolio of websites, digital platforms, and business systems.',
    inLanguage: locale === 'ar' ? 'ar-EG' : 'en',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          description: locale === 'ar' ? project.arDescription : project.description,
          url: project.demoUrl,
          image: `${SITE_URL}${project.image}`,
        },
      })),
    },
  }
}

export function createServicesPageSchema(locale: 'ar' | 'en') {
  const path = locale === 'ar' ? '/services' : '/en/services'

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    '@id': `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name: locale === 'ar' ? 'خدماتنا التقنية والهندسية | SperaCode' : 'Software Engineering & AI Services | SperaCode',
    description: locale === 'ar'
      ? 'استكشف خدمات سبيرا كود الشاملة: تطوير المواقع، تطبيقات الجوال، المنيو الرقمي QR، أنظمة ERP، الذكاء الاصطناعي، وتصميم UI/UX.'
      : 'Explore SperaCode software engineering services: web platforms, mobile apps, QR menus, custom ERP, AI automation, and UI/UX design.',
    inLanguage: locale === 'ar' ? 'ar-EG' : 'en',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: { '@id': `${SITE_URL}/#organization` },
  }
}

export function createAboutPageSchema(locale: 'ar' | 'en') {
  const path = locale === 'ar' ? '/about' : '/en/about'

  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name: locale === 'ar' ? 'من نحن | قصة ومنهجية شركة SperaCode' : 'About SperaCode | Software Engineering House & AI Lab',
    description: locale === 'ar'
      ? 'تعرف على سبيرا كود (SperaCode)، رؤيتنا، منهجيتنا في تطوير البرمجيات، وضمانات الملكية 100% والتسليم في الموعد.'
      : 'Learn about SperaCode, our software development methodology, core engineering values, and 100% IP ownership guarantee.',
    inLanguage: locale === 'ar' ? 'ar-EG' : 'en',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: { '@id': `${SITE_URL}/#organization` },
  }
}

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  }
}

export function serializeStructuredData(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  alternateName: SITE_NAME_AR,
  inLanguage: ['ar-EG', 'en'],
  publisher: { '@id': `${SITE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/projects?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}
