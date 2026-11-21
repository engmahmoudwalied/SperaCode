'use client'

import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpLeft,
  ArrowUpRight,
  Bot,
  Calendar,
  Check,
  Clock3,
  Code2,
  Compass,
  Copy,
  Globe2,
  Home,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  PenTool,
  Phone,
  QrCode,
  Send,
  Smartphone,
  Sparkles,
  Sun,
  X,
  Zap,
} from 'lucide-react'
import { SperaLogo } from '@/components/spera-logo'
import { SiteFooter } from '@/components/site-footer'
import { CustomSelect } from '@/components/custom-select'
import { WhatsAppFloatingButton } from '@/components/whatsapp-floating-button'
import {
  buildWhatsAppUrl,
  SITE_EMAIL,
  SITE_PHONE_LOCAL,
  SITE_PHONE_INTL,
  SITE_PHONE_DISPLAY_INTL,
} from '@/app/site-config'
import { sendViaEmailJS } from './emailjs-client'
import { ContactHeroVisual } from '@/components/hero-visuals/contact-hero-visual'

type Locale = 'ar' | 'en'

const content = {
  ar: {
    home: 'الرئيسية',
    work: 'أعمالنا',
    services: 'خدماتنا',
    page: 'تواصل معنا',
    kicker: 'ابدأ مشروعك باحترافية',
    title: 'احكِ لنا عن فكرتك ومشروعك القادم.',
    intro: 'سواء كانت لديك فكرة مفصلة أو ما زلت تستكشف الإمكانيات، شاركنا ما ترغب في إنجازه وسيقدم لك مهندسونا استشارة تقنية وعرض سعر مخصص في أسرع وقت.',
    formTitle: 'طلب استشارة وعرض سعر مجاني',
    formIntro: 'املأ النموذج بالأسفل لإنشاء رسالة متكاملة تفتح في تطبيق واتساب مباشرة للمراجعة والإرسال.',
    name: 'الاسم الكريم',
    nameHint: 'ما هو اسمك الكريم؟',
    phone: 'رقم الهاتف أو واتساب',
    phoneHint: '01515327087',
    company: 'اسم الشركة أو المشروع (اختياري)',
    companyHint: 'شركتك أو فكرة مشروعك',
    service: 'الخدمة المطلوبة',
    serviceOptions: [
      'اختر الخدمة',
      'تطوير موقع أو منصة إلكترونية',
      'تطبيق جوال (iOS & Android)',
      'المنيو الرقمي التفاعلي QR',
      'حلول الذكاء الاصطناعي والأتمتة',
      'تصميم واجهات وتجربة المستخدم UI/UX',
      'نظام إدارة أعمال أو ERP مخصص',
      'استشارة أو فحص فني شامل',
    ],
    timeline: 'الموعد المستهدف للإطلاق (اختياري)',
    timelineOptions: [
      'اختر الموعد',
      'في أقرب وقت ممكن (عاجل)',
      'خلال شهر',
      'خلال 1–3 أشهر',
      'ما زلت في مرحلة الاستكشاف والتخطيط',
    ],
    message: 'تفاصيل إضافية عن المشروع',
    messageHint: 'ما هو الهدف من المشروع؟ من هم المستخدمون؟ وما هي أهم الميزات التي ترغب بتضمينها؟',
    send: 'إرسال ومتابعة عبر واتساب',
    privacy: 'نحترم خصوصيتك؛ بياناتك تذهب مباشرة في محادثتك مع فريقنا على واتساب ولن تُشارك مع أي طرف خارجي.',
    sent: 'تم تجهيز الرسالة وفتح واتساب! راجع التفاصيل ثم أرسلها لفريق SperaCode لبدء المحادثة.',
    copied: 'تم نسخ نص الرسالة إلى الحافظة بنجاح!',
    direct: 'تواصل فوري ومباشر',
    directText: 'يمكنك محادثتنا فورًا على واتساب أو التواصل عبر البريد الرسمي.',
    whatsappLabel: 'محادثة فورية على واتساب',
    whatsappCta: `${SITE_PHONE_LOCAL} (محادثة مباشرة)`,
    emailLabel: 'البريد الإلكتروني الرسمي',
    emailCta: SITE_EMAIL,
    note: 'متوسط سرعة الرد لدينا أقل من ساعتين خلال أوقات العمل.',
    stepsTitle: 'ماذا بعد إرسال رسالتك؟',
    steps: [
      ['مراجعة وتحليل المتطلبات', 'يطلع فريقنا الهندسي على فكرة مشروعك ويدرس الحل الأنسب.'],
      ['جلسة استكشاف سريعة', 'نتواصل معك هاتفيًا أو عبر مكالمة مرئية لتأكيد الأولويات والخصائص.'],
      ['خطة عمل وعرض سعر مكتوب', 'نقدم لك جدولًا زمنيًا واضحًا وتكلفة ثابتة قبل البدء بأي خطوة.'],
    ],
    faqTitle: 'أسئلة مهمة قبل التواصل',
    faqs: [
      [
        'هل الاستشارة الأولية وعرض السعر مجانيان؟',
        'نعم تمامًا. نقدم استشارة فنية أولية وعرض سعر مفصل بدون أي التزام مالي من طرفك.',
      ],
      [
        'هل يجب أن أمتلك مواصفات فنية جاهزة للبدء؟',
        'ليس بالضرورة. يمكننا مساعدتك في صياغة الفكرة وترتيب الأولويات وتحويلها إلى متطلبات تقنية واضحة.',
      ],
      [
        'هل يمكن التعاقد والعمل عن بُعد للعملاء خارج مصر؟',
        'نعم، معظم مشاريعنا تُنفذ بنجاح مع شركائنا في السعودية والإمارات والكويت والخليج عبر قنوات عمل وإدارة مشاريع احترافية عبر الإنترنت.',
      ],
    ],
    footer: 'نحوّل الأفكار الطموحة إلى حلول برمجية استثنائية تقود السوق.',
    back: 'العودة للصفحة الرئيسية',
    themeDark: 'تفعيل الوضع الداكن',
    themeLight: 'تفعيل الوضع الفاتح',
    language: 'Switch to English',
  },
  en: {
    home: 'Home',
    work: 'Our work',
    services: 'Services',
    page: 'Contact',
    kicker: 'ENGINEERING YOUR VISION',
    title: 'Tell us about your next project.',
    intro: 'Whether you have a comprehensive RFP or are evaluating technological options, share your vision and our software architects will provide strategic recommendations and an estimate.',
    formTitle: 'Request a Free Consultation & Quote',
    formIntro: 'Fill in the project details below to generate a formatted brief that opens directly in WhatsApp for review.',
    name: 'Your Name',
    nameHint: 'What should we call you?',
    phone: 'Phone or WhatsApp Number',
    phoneHint: '+20 151 532 7087',
    company: 'Company / Organization (Optional)',
    companyHint: 'Your company or project name',
    service: 'Required Service',
    serviceOptions: [
      'Choose a service',
      'Web Application or Platform',
      'Mobile App (iOS & Android)',
      'Digital Interactive QR Menu',
      'AI & Workflow Automation',
      'UI/UX Product Design',
      'Custom ERP or Management Tool',
      'Code Audit & Re-architecture',
    ],
    timeline: 'Target Launch Timeline (Optional)',
    timelineOptions: [
      'Select a timeframe',
      'As soon as possible (Urgent)',
      'Within 1 month',
      'In 1–3 months',
      'Currently planning and budgeting',
    ],
    message: 'Project Scope & Requirements',
    messageHint: 'What are your key goals? Who will use this solution? What features are essential?',
    send: 'Send & Continue on WhatsApp',
    privacy: 'Your privacy is paramount; this form prepares a message directly on your device without storing inputs on our servers.',
    sent: 'WhatsApp has opened with your prepared brief! Review and send it to connect with our engineers.',
    copied: 'Message copied to clipboard!',
    direct: 'Direct Channels',
    directText: 'Prefer instant chat? Reach out directly via WhatsApp or email.',
    whatsappLabel: 'Instant WhatsApp Chat',
    whatsappCta: `${SITE_PHONE_LOCAL} (Direct Chat)`,
    emailLabel: 'Official Support Email',
    emailCta: SITE_EMAIL,
    note: 'Average response time is under 2 hours during active business hours.',
    stepsTitle: 'What happens after sending?',
    steps: [
      ['Engineering Review', 'Our architects assess your brief and technical requirements.'],
      ['Brief Discovery Call', 'We schedule a quick call to refine objectives and key workflows.'],
      ['Milestone Proposal', 'You receive an itemized proposal with clear milestones and pricing.'],
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      [
        'Are initial consultations and proposals complimentary?',
        'Yes, 100%. We provide discovery sessions and comprehensive technical quotes at zero cost or obligation.',
      ],
      [
        'Do I need a finalized technical brief before reaching out?',
        'Not at all. We frequently assist clients in shaping their ideas into clear engineering roadmaps.',
      ],
      [
        'Do you collaborate with clients internationally outside Egypt?',
        'Yes. We operate a seamless remote delivery model for enterprise clients across GCC (Saudi Arabia, UAE, Kuwait, Qatar) and globally.',
      ],
    ],
    footer: 'Engineering resilient, scalable digital products for forward-thinking organizations.',
    back: 'Back to home',
    themeDark: 'Switch to dark mode',
    themeLight: 'Switch to light mode',
    language: 'التبديل إلى العربية',
  },
} as const

export default function ContactPage({ initialLocale = 'ar' }: { initialLocale?: Locale }) {
  const [locale] = useState<Locale>(initialLocale)
  const [dark, setDark] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  // Form field states for live interactive preview
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [selectedTimeline, setSelectedTimeline] = useState('')
  const [messageText, setMessageText] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const t = content[locale]
  const rtl = locale === 'ar'
  const basePath = rtl ? '' : '/en'
  const homeHref = basePath || '/'
  const servicesHref = `${basePath}/services`
  const aboutHref = `${basePath}/about`
  const projectsHref = `${basePath}/projects`
  const contactHref = `${basePath}/contact`

  const whatsappDirectUrl = buildWhatsAppUrl(
    rtl
      ? 'مرحبًا SperaCode، أود مناقشة مشروع جديد معكم.'
      : 'Hello SperaCode, I would like to discuss a project with your team.'
  )

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const serviceOptionsWithIcons = [
    { value: t.serviceOptions[1], label: t.serviceOptions[1], icon: Globe2, hint: rtl ? 'منصات سحابية فائقة السرعة' : 'Next.js & Cloud' },
    { value: t.serviceOptions[2], label: t.serviceOptions[2], icon: Smartphone, hint: rtl ? 'iOS & Android هجين وأصيل' : 'Cross-Platform Apps' },
    { value: t.serviceOptions[3], label: t.serviceOptions[3], icon: QrCode, hint: rtl ? 'طلب فوري ومباشر على واتساب' : 'Interactive QR Menu' },
    { value: t.serviceOptions[4], label: t.serviceOptions[4], icon: Bot, hint: rtl ? 'أتمتة الأعمال ووكلاء AI' : 'LLMs & AI Agents' },
    { value: t.serviceOptions[5], label: t.serviceOptions[5], icon: PenTool, hint: rtl ? 'واجهات احترافية وسهلة الاستخدام' : 'Figma & Design Systems' },
    { value: t.serviceOptions[6], label: t.serviceOptions[6], icon: Code2, hint: rtl ? 'إدارة المخازن والمبيعات' : 'Custom ERP & POS' },
    { value: t.serviceOptions[7], label: t.serviceOptions[7], icon: Sparkles, hint: rtl ? 'جلسة فنية ودراسة جدوى مجانية' : 'Technical Consultation' },
  ]

  const timelineOptionsWithIcons = [
    { value: t.timelineOptions[1], label: t.timelineOptions[1], icon: Zap, hint: rtl ? 'مسار سريع ذو أولوية' : 'Fast-Track Priority' },
    { value: t.timelineOptions[2], label: t.timelineOptions[2], icon: Clock3, hint: rtl ? 'الجدول الهندسي المعتاد' : 'Standard Sprint Cycle' },
    { value: t.timelineOptions[3], label: t.timelineOptions[3], icon: Calendar, hint: rtl ? 'تطوير وتسليم مرحلي' : 'Phased Milestone Scope' },
    { value: t.timelineOptions[4], label: t.timelineOptions[4], icon: Compass, hint: rtl ? 'دراسة خيارات وتكلفة' : 'Planning & MVP Estimate' },
  ]

  useEffect(() => {
    const savedTheme = localStorage.getItem('speracode-theme')
    const nextDark = savedTheme ? savedTheme === 'dark' : document.documentElement.classList.contains('dark')
    setDark(nextDark)
    document.documentElement.classList.toggle('dark', nextDark)
    document.documentElement.lang = initialLocale
    document.documentElement.dir = initialLocale === 'ar' ? 'rtl' : 'ltr'

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-reveal], .contact-form-card, .contact-sidebar > div, .contact-faq').forEach((el) => {
      el.setAttribute('data-reveal', '')
      revealObserver.observe(el)
    })

    // Auto-select service if passed in query string (e.g. /contact?service=web)
    try {
      const paramService = new URLSearchParams(window.location.search).get('service')
      if (paramService) {
        const mapping: Record<string, number> = {
          web: 1,
          mobile: 2,
          qr: 3,
          ai: 4,
          uiux: 5,
          erp: 6,
          support: 7,
        }
        const idx = mapping[paramService.toLowerCase()]
        if (idx && t.serviceOptions[idx]) {
          setSelectedService(t.serviceOptions[idx])
        }
      }
    } catch {
      // Ignore URL parsing errors on old browsers
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      revealObserver.disconnect()
    }
  }, [initialLocale])

  function toggleLocale() {
    window.location.assign(rtl ? '/en/contact' : '/contact')
  }

  function toggleTheme() {
    const next = !dark
    setDark(next)
    localStorage.setItem('speracode-theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
  }

  const generatedBrief = `${rtl ? 'مرحبًا فريق SperaCode، أود مناقشة مشروع جديد:' : 'Hello SperaCode team, I would like to discuss a new project:'}

• ${t.name}: ${name || '—'}
• ${t.phone}: ${phone || '—'}
• ${t.company}: ${company || '—'}
• ${t.service}: ${selectedService || '—'}
• ${t.timeline}: ${selectedTimeline || '—'}

${t.message}:
${messageText || '—'}`

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSending(true)

    try {
      await sendViaEmailJS({
        name,
        phone,
        company,
        service: selectedService,
        timeline: selectedTimeline,
        message: messageText,
        summaryText: generatedBrief,
      })
    } catch (e) {
      console.warn('[EmailJS Submit Notification]', e)
    } finally {
      setIsSending(false)
      setSubmitted(true)
      window.open(buildWhatsAppUrl(generatedBrief), '_blank', 'noopener,noreferrer')
    }
  }

  function copyBrief() {
    navigator.clipboard.writeText(generatedBrief)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div className={`site contact-site ${dark ? 'theme-dark' : ''}`} dir={rtl ? 'rtl' : 'ltr'}>
      <a className="skip-link" href="#contact-main">
        {rtl ? 'انتقل إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>

      {/* Header */}
      <header className="navbar contact-navbar">
        <div className="container nav-inner">
          <SperaLogo rtl={rtl} homeHref={homeHref} />

          <nav className="desktop-nav" aria-label={rtl ? 'التنقل الرئيسي' : 'Main navigation'}>
            <Link href={homeHref}>{t.home}</Link>
            <Link href={servicesHref}>{t.services}</Link>
            <Link href={projectsHref}>{t.work}</Link>
            <Link href={aboutHref}>{rtl ? 'من نحن' : 'About'}</Link>
            <Link href={contactHref} aria-current="page">
              {t.page}
            </Link>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="icon-button locale-button"
              onClick={toggleLocale}
              aria-label={t.language}
            >
              {rtl ? 'EN' : 'عربي'}
            </button>
            <button
              type="button"
              className="icon-button"
              onClick={toggleTheme}
              aria-label={dark ? t.themeLight : t.themeDark}
            >
              {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            </button>
            <button
              type="button"
              className="icon-button mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <Link onClick={() => setMenuOpen(false)} href={homeHref}>
              {t.home}
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link onClick={() => setMenuOpen(false)} href={servicesHref}>
              {t.services}
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link onClick={() => setMenuOpen(false)} href={projectsHref}>
              {t.work}
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link onClick={() => setMenuOpen(false)} href={aboutHref}>
              {rtl ? 'من نحن' : 'About'}
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link onClick={() => setMenuOpen(false)} href={contactHref}>
              {t.page}
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <button className="button button-secondary" style={{ marginTop: '14px' }} onClick={toggleLocale}>
              {t.language}
            </button>
          </nav>
        )}
      </header>

      <main id="contact-main">
        {/* Contact Hero */}
        <section className="contact-hero container">
          <div className="contact-hero-copy">
            <div className="hero-kicker-stack">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href={homeHref} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Home size={14} />
                  <span>{t.home}</span>
                </Link>
                <span aria-hidden="true">/</span>
                <span>{t.page}</span>
              </nav>

              <div className="eyebrow">
                <span className="live-dot" />
                {t.kicker}
              </div>
            </div>
            <h1>{t.title}</h1>
            <p>{t.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact-form">
                {rtl ? 'تعبئة تفاصيل المشروع' : 'Start project brief'}
                {rtl ? <ArrowLeft aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
              </a>
              <a
                className="button button-secondary"
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {rtl ? 'محادثة فورية على واتساب' : 'Chat on WhatsApp'}
                <MessageCircle aria-hidden="true" />
              </a>
            </div>

            <div className="trust-points">
              <span>
                <Check aria-hidden="true" />
                {rtl ? 'استشارة مجانية بالكامل' : '100% free consultation'}
              </span>
              <span>
                <Check aria-hidden="true" />
                {rtl ? 'عرض سعر مفصل ومكتوب' : 'Detailed fixed quote'}
              </span>
              <span>
                <Check aria-hidden="true" />
                {rtl ? 'ضمان فني بعد التسليم' : 'Post-launch warranty'}
              </span>
            </div>
          </div>

          <div className="contact-hero-visual">
            <ContactHeroVisual dark={dark} rtl={rtl} />
          </div>
        </section>

        {/* Contact Workspace Grid */}
        <section id="contact-form" className="contact-workspace container" aria-label={t.page}>
          <div className="contact-form-card">
            <div className="contact-card-heading">
              <span className="contact-card-icon">
                <Send aria-hidden="true" />
              </span>
              <div>
                <span className="section-kicker">{rtl ? 'النموذج الذكي' : 'DIRECT BRIEF'}</span>
                <h2>{t.formTitle}</h2>
                <p>{t.formIntro}</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="contact-fields-grid">
                <label className="contact-field">
                  <span>
                    {t.name} <b style={{ color: '#ef4444' }}>*</b>
                  </span>
                  <input
                    autoComplete="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.nameHint}
                    required
                  />
                </label>

                <label className="contact-field">
                  <span>{t.company}</span>
                  <input
                    autoComplete="organization"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={t.companyHint}
                  />
                </label>

                <label className="contact-field">
                  <span>{t.phone}</span>
                  <input
                    autoComplete="tel"
                    dir="ltr"
                    inputMode="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.phoneHint}
                  />
                </label>

                <div className="contact-field contact-field-full">
                  <span>
                    {t.service} <b style={{ color: '#ef4444' }}>*</b>
                  </span>
                  <CustomSelect
                    name="service"
                    value={selectedService}
                    onChange={setSelectedService}
                    placeholder={t.serviceOptions[0]}
                    options={serviceOptionsWithIcons}
                    rtl={rtl}
                    required
                  />
                  <div className="service-selector-pills">
                    {t.serviceOptions.slice(1).map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        className={`service-pill-btn ${selectedService === opt ? 'active' : ''}`}
                        onClick={() => setSelectedService(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="contact-field contact-field-full">
                  <span>{t.timeline}</span>
                  <CustomSelect
                    name="timeline"
                    value={selectedTimeline}
                    onChange={setSelectedTimeline}
                    placeholder={t.timelineOptions[0]}
                    options={timelineOptionsWithIcons}
                    rtl={rtl}
                  />
                  <div className="service-selector-pills">
                    {t.timelineOptions.slice(1).map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        className={`service-pill-btn ${selectedTimeline === opt ? 'active' : ''}`}
                        onClick={() => setSelectedTimeline(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="contact-field contact-field-full">
                  <span>
                    {t.message} <b style={{ color: '#ef4444' }}>*</b>
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder={t.messageHint}
                    required
                  />
                </label>
              </div>

              {/* Live Preview Box */}
              {(name || selectedService || messageText) && (
                <div className="live-message-preview">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <b>{rtl ? 'معاينة الرسالة التي ستصل عبر واتساب:' : 'Live WhatsApp Message Preview:'}</b>
                    <button
                      type="button"
                      onClick={copyBrief}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '11px',
                        color: 'var(--blue)',
                        fontWeight: 700,
                      }}
                    >
                      <Copy size={13} />
                      {copied ? t.copied : (rtl ? 'نسخ النص' : 'Copy text')}
                    </button>
                  </div>
                  <pre
                    style={{
                      whiteSpace: 'pre-wrap',
                      fontFamily: 'inherit',
                      fontSize: '12px',
                      color: 'var(--muted)',
                      margin: '8px 0 0',
                    }}
                  >
                    {generatedBrief}
                  </pre>
                </div>
              )}

              <button className="contact-submit" type="submit" disabled={isSending}>
                {isSending ? (rtl ? 'جاري الإرسال عبر EmailJS...' : 'Sending via EmailJS...') : t.send}
                {rtl ? <ArrowLeft aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
              </button>

              <p className="contact-privacy">
                <Check aria-hidden="true" style={{ color: 'var(--cyan)' }} />
                {t.privacy}
              </p>

              {submitted && (
                <div className="contact-success" role="status" aria-live="polite">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <Check size={16} aria-hidden="true" style={{ color: 'var(--emerald)' }} />
                    <strong style={{ color: 'var(--emerald)' }}>
                      {rtl ? 'تم إرسال رسالتك وتفاصيل مشروعك بنجاح إلى بريدنا الرسمي:' : 'Message sent successfully to our official email:'}
                    </strong>
                  </div>
                  <code style={{ fontSize: '12px', color: 'var(--blue)', fontWeight: 700 }}>info.speracode@gmail.com</code>
                  <p style={{ margin: '6px 0 0', fontSize: '12px', color: 'var(--muted)' }}>
                    {rtl
                      ? 'تم تجهيز محادثة واتساب المباشرة أيضاً لمتابعة الرد الفوري مع فريقنا الهندسي.'
                      : 'A direct WhatsApp chat was also prepared for instant assistance.'}
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Sidebar */}
          <aside className="contact-sidebar">
            <div className="contact-direct-card">
              <span className="section-kicker">{rtl ? 'قنوات مباشرة' : 'DIRECT CONTACT'}</span>
              <h2>{t.direct}</h2>
              <p>{t.directText}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
                <a
                  className="contact-channel contact-channel-whatsapp"
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-channel-icon">
                    <MessageCircle aria-hidden="true" />
                  </span>
                  <span className="contact-channel-text">
                    <small>{t.whatsappLabel}</small>
                    <strong>{SITE_PHONE_LOCAL} • {rtl ? 'محادثة فورية' : 'Instant Chat'}</strong>
                  </span>
                  {rtl ? <ArrowUpLeft aria-hidden="true" /> : <ArrowUpRight aria-hidden="true" />}
                </a>

                <a
                  className="contact-channel"
                  href={`tel:${SITE_PHONE_INTL}`}
                  title={SITE_PHONE_DISPLAY_INTL}
                >
                  <span className="contact-channel-icon">
                    <Phone aria-hidden="true" />
                  </span>
                  <span className="contact-channel-text">
                    <small>{rtl ? 'الاتصال الهاتفي المباشر' : 'Direct Phone Call'}</small>
                    <strong dir="ltr">{SITE_PHONE_DISPLAY_INTL}</strong>
                  </span>
                  {rtl ? <ArrowUpLeft aria-hidden="true" /> : <ArrowUpRight aria-hidden="true" />}
                </a>

                <a className="contact-channel" href={`mailto:${SITE_EMAIL}`} title={SITE_EMAIL}>
                  <span className="contact-channel-icon">
                    <Mail aria-hidden="true" />
                  </span>
                  <span className="contact-channel-text">
                    <small>{t.emailLabel}</small>
                    <strong>{SITE_EMAIL}</strong>
                  </span>
                  {rtl ? <ArrowUpLeft aria-hidden="true" /> : <ArrowUpRight aria-hidden="true" />}
                </a>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '18px',
                  color: 'var(--muted)',
                  fontSize: '12px',
                }}
              >
                <Clock3 size={15} style={{ color: 'var(--blue)' }} />
                <span>{t.note}</span>
              </div>
            </div>

            <div className="contact-process-card">
              <span className="section-kicker">{rtl ? 'الخطوات القادمة' : 'NEXT MILESTONES'}</span>
              <h2>{t.stepsTitle}</h2>
              <ol style={{ padding: 0, margin: '18px 0 0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {t.steps.map(([title, description], index) => (
                  <li key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '8px',
                        background: 'var(--blue-light)',
                        color: 'var(--blue)',
                        display: 'grid',
                        placeItems: 'center',
                        fontSize: '11px',
                        fontWeight: 800,
                        flex: 'none',
                      }}
                    >
                      0{index + 1}
                    </span>
                    <div>
                      <strong style={{ display: 'block', fontSize: '13px', color: 'var(--ink)' }}>
                        {title}
                      </strong>
                      <small style={{ color: 'var(--muted)', fontSize: '12px', lineHeight: 1.6 }}>
                        {description}
                      </small>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </section>

        {/* Contact FAQ */}
        <section className="container section" style={{ paddingTop: 'clamp(36px, 6vw, 64px)' }}>
          <div className="faq-layout">
            <div>
              <span className="section-kicker">{rtl ? 'إجابات سريعة' : 'QUICK ANSWERS'}</span>
              <h2 style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 800, margin: '8px 0' }}>{t.faqTitle}</h2>
              <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
                {rtl
                  ? 'معلومات أساسية حول آلية العمل، الاستشارات المجانية، والتعاقد مع SperaCode.'
                  : 'Important facts regarding consultations, delivery terms, and international work.'}
              </p>
            </div>

            <div className="faq-list">
              {t.faqs.map(([question, answer]) => (
                <details className="faq-item" key={question}>
                  <summary>
                    {question}
                    <span className="faq-plus" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Elite Global Footer */}
      <SiteFooter
        rtl={rtl}
        dark={dark}
        onToggleDark={toggleTheme}
        onToggleLocale={toggleLocale}
        homeHref={homeHref}
        projectsHref={projectsHref}
        contactHref={contactHref}
        servicesHref={servicesHref}
        aboutHref={aboutHref}
      />

      {/* Animated Floating WhatsApp Widget */}
      <WhatsAppFloatingButton rtl={rtl} />

      {/* Floating Back To Top Button */}
      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label={rtl ? 'العودة إلى أعلى الصفحة' : 'Back to top'}
      >
        <ArrowUp />
      </button>
    </div>
  )
}
