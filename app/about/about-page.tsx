'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  Clock,
  Code2,
  Compass,
  FileCheck2,
  Globe2,
  HeartHandshake,
  Home,
  Layers,
  MapPin,
  Menu,
  Milestone,
  Moon,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  Users2,
  Wrench,
  X,
  Zap,
} from 'lucide-react'
import { SperaLogo } from '@/components/spera-logo'
import { SiteFooter } from '@/components/site-footer'
import { CustomerReviews } from '@/components/customer-reviews'
import { WhatsAppFloatingButton } from '@/components/whatsapp-floating-button'
import { AboutHeroVisual } from '@/components/hero-visuals/about-hero-visual'
import { buildWhatsAppUrl } from '@/app/site-config'

type Locale = 'ar' | 'en'

interface AboutPageProps {
  initialLocale?: Locale
}

export default function AboutPage({ initialLocale = 'ar' }: AboutPageProps) {
  const [locale] = useState<Locale>(initialLocale)
  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const rtl = locale === 'ar'
  const basePath = rtl ? '' : '/en'
  const homeHref = basePath || '/'
  const servicesHref = `${basePath}/services`
  const projectsHref = `${basePath}/projects`
  const aboutHref = `${basePath}/about`
  const contactHref = `${basePath}/contact`

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('speracode-theme')
    const nextDark = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(nextDark)
    document.documentElement.lang = initialLocale
    document.documentElement.dir = initialLocale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.classList.toggle('dark', nextDark)

    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)
      setShowBackToTop(scrollY > 400)

      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolledPct = height > 0 ? (winScroll / height) * 100 : 0
      setScrollProgress(scrolledPct)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [initialLocale])

  function toggleLocale() {
    window.location.assign(rtl ? '/en/about' : '/about')
  }

  function toggleTheme() {
    const next = !dark
    setDark(next)
    localStorage.setItem('speracode-theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
  }

  const navItems = [
    { label: rtl ? 'الرئيسية' : 'Home', href: homeHref },
    { label: rtl ? 'خدماتنا' : 'Services', href: servicesHref },
    { label: rtl ? 'أعمالنا' : 'Portfolio', href: projectsHref },
    { label: rtl ? 'من نحن' : 'About', href: aboutHref, isCurrent: true },
    { label: rtl ? 'اتصل بنا' : 'Contact', href: contactHref },
  ]

  const stats = rtl
    ? [
        { num: '+24', label: 'مشروعًا تم تسليمه بنجاح', sub: 'في مصر، السعودية، الإمارات، والكويت' },
        { num: '99.8%', label: 'نسبة رضا عملائنا', sub: 'تقييمات موثقة وعلاقات عمل مستمرة' },
        { num: '100%', label: 'ملكية الكود والشيفرة للعميل', sub: 'بدون أي اشتراكات أو قيود خفية' },
        { num: '5+', label: 'سنوات من التميز الهندسي', sub: 'فريق متخصص بأحدث التقنيات السحابية' },
      ]
    : [
        { num: '+24', label: 'Delivered Projects', sub: 'Across Egypt, Saudi Arabia, UAE, and Kuwait' },
        { num: '99.8%', label: 'Client Satisfaction Rate', sub: 'Verified reviews and ongoing partnerships' },
        { num: '100%', label: 'IP & Code Ownership', sub: 'Full intellectual property transferred to client' },
        { num: '5+', label: 'Years Engineering Excellence', sub: 'Specialized in modern cloud & AI architectures' },
      ]

  const methodology = rtl
    ? [
        {
          step: '01',
          title: 'فهم فكرتك والتخطيط المالي والزمني',
          desc: 'بنسمع منك تفاصيل فكرتك واحتياجات شغلك، ونقدملك خطة عمل واضحة وتكلفة دقيقة تناسب ميزانيتك وبدون أي التزام.',
          deliverable: 'خطة عمل وجدول زمني محدد وواضح للتسليم',
        },
        {
          step: '02',
          title: 'تصميم الشاشات وتجربة الاستخدام',
          desc: 'بنصمملك شكل الشاشات ونوريك شكل موقعك أو تطبيقك وتجربه بنفسك كأنك زبون قبل ما نبدأ كتابة سطر كود واحد.',
          deliverable: 'نسخة تفاعلية حية لمعاينة الشاشات وتجربتها واعتمادها',
        },
        {
          step: '03',
          title: 'البرمجة والتنفيذ العملي خطوة بخطوة',
          desc: 'بنبرمج المشروع بأعلى كفاءة وسرعة، ونشاركك التطور دورياً عشان تشوف شغلك وهو بيكبر قدام عينك خطوة بخطوة.',
          deliverable: 'رابط تجريبي تتابع منه مراحل المشروع أولاً بأول',
        },
        {
          step: '04',
          title: 'التجربة الشاملة والفحص الدقيق',
          desc: 'بنجرب كل زرار وكل صفحة على مختلف أجهزة الموبايل ونتأكد من السرعة والأمان التام قبل الإطلاق الرسمي للجمهور.',
          deliverable: 'فحص كامل للتأكد من خلو المشروع من أي أخطاء أو بطء',
        },
        {
          step: '05',
          title: 'الإطلاق الرسمي والضمان وتدريب فريقك',
          desc: 'بنطلق مشروعك للجمهور، ونسلمك كل الكود والحسابات باسمك 100%، وندربك أنت وفريقك على إدارته بكل سهولة مع ضمان فني كامل.',
          deliverable: 'التدشين الرسمي، تسليم الكود 100%، وبدء الضمان والدعم الفني المجاني',
        },
      ]
    : [
        {
          step: '01',
          title: 'Discovery & Clear Scoping',
          desc: 'We listen to your ideas and business goals, crafting a clear, realistic roadmap with upfront pricing that fits your budget.',
          deliverable: 'Clear Milestone Roadmap & Transparent Project Plan',
        },
        {
          step: '02',
          title: 'UI/UX & Interactive Preview',
          desc: 'We design every screen and build an interactive prototype so you can test the full experience as a user before coding starts.',
          deliverable: 'Clickable Prototype for Early Validation & Signoff',
        },
        {
          step: '03',
          title: 'Agile Development Step by Step',
          desc: 'We build your application with clean, high-performance code, updating you regularly so you can see progress in real time.',
          deliverable: 'Private Staging Link to Test Progress Continually',
        },
        {
          step: '04',
          title: 'Quality Testing & Verification',
          desc: 'We rigorously test every button, flow, and screen across various phones to ensure rock-solid speed, usability, and security.',
          deliverable: 'Complete Cross-Device Usability & Security Verification',
        },
        {
          step: '05',
          title: 'Launch, Onboarding & Warranty',
          desc: 'We officially launch your project, transfer 100% ownership to your name, train your team, and stand by you with our warranty.',
          deliverable: 'Official Deployment, 100% Ownership Handover & Free Warranty',
        },
      ]

  const values = rtl
    ? [
        {
          icon: Code2,
          title: 'برمجة متقنة وسهلة التطوير',
          desc: 'بنبرمج مشروعك بطريقة حديثة ومنظمة، عشان يفضل سريع وسلس وتقدر تضيف عليه أي ميزات جديدة في المستقبل بكل سهولة وبدون تعقيد.',
        },
        {
          icon: Clock,
          title: 'التزام تعاقدي صارم بالمواعيد',
          desc: 'ميعاد التسليم عندنا عهد؛ بنحدد تاريخ واضح ومكتوب في العقد، ونلتزم بيه تماماً بدون أي تأخير أو مماطلة.',
        },
        {
          icon: ShieldCheck,
          title: 'المشروع ملكك أنت بالكامل 100%',
          desc: 'أنت المالك الوحيد لكامل الكود المصدري، والتصاميم، وقواعد البيانات بدون أي اشتراكات إجبارية أو قيود خفية.',
        },
        {
          icon: HeartHandshake,
          title: 'شراكة مستمرة ودعم لا يتوقف',
          desc: 'مش بنسلّمك المشروع ونختفي؛ بنكون في ضهرك دايماً، بنجاوب على كل أسئلتك وبنساعدك تاخد أفضل القرارات لنجاح وتكبير شغلك.',
        },
      ]
    : [
        {
          icon: Code2,
          title: 'Clean & Scalable Code',
          desc: 'We build your solution with modern, modular code so it stays fast and allows you to add new features effortlessly down the road.',
        },
        {
          icon: Clock,
          title: 'Strict Delivery Timelines',
          desc: 'Timelines are commitments. We establish milestone dates and deliver every phase on schedule without excuses or delays.',
        },
        {
          icon: ShieldCheck,
          title: '100% Full Client Ownership',
          desc: 'You own every line of code, design file, and database schema from day one. Zero proprietary vendor lock-in or recurring fees.',
        },
        {
          icon: HeartHandshake,
          title: 'Long-Term Partnership & Care',
          desc: 'We stand by your side long after launch, providing guidance, rapid answers, and proactive support to ensure your product succeeds.',
        },
      ]

  const countries = [
    { name: rtl ? 'مصر' : 'Egypt', flag: '🇪🇬', role: rtl ? 'المقر الإقليمي وفريق الهندسة' : 'Regional HQ & Engineering Team' },
    { name: rtl ? 'المملكة العربية السعودية' : 'Saudi Arabia', flag: '🇸🇦', role: rtl ? 'مشاريع حكومية وتجارية ومنصات' : 'Enterprise & E-Commerce Platforms' },
    { name: rtl ? 'الإمارات العربية المتحدة' : 'United Arab Emirates', flag: '🇦🇪', role: rtl ? 'منصات ذكاء اصطناعي وحلول مبتكرة' : 'AI Agents & Innovative Portals' },
    { name: rtl ? 'الكويت' : 'Kuwait', flag: '🇰🇼', role: rtl ? 'منصات تعليمية وأنظمة أعمال' : 'Educational & Business Systems' },
    { name: rtl ? 'الشرق الأوسط والعالم' : 'MENA & Global Remote', flag: '🌍', role: rtl ? 'إدارة مشاريع وسير عمل سحابي' : 'Cloud Delivery & Modern Tooling' },
  ]

  return (
    <div className={`site about-page ${dark ? 'theme-dark' : ''}`} dir={rtl ? 'rtl' : 'ltr'}>
      {/* Top Reading Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      <a className="skip-link" href="#about-main">
        {rtl ? 'انتقل إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>

      {/* Header */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <SperaLogo rtl={rtl} homeHref={homeHref} />

          <nav className="desktop-nav" aria-label={rtl ? 'التنقل الرئيسي' : 'Main navigation'}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={item.isCurrent ? 'page' : undefined}
                className={item.isCurrent ? 'nav-active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="icon-button locale-button"
              onClick={toggleLocale}
              aria-label={rtl ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              {rtl ? 'EN' : 'عربي'}
            </button>
            <button
              type="button"
              className="icon-button"
              onClick={toggleTheme}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            </button>
            <Link className="button button-primary nav-cta" href={contactHref}>
              {rtl ? 'ابدأ مشروعك' : 'Start Project'}
              <ArrowUpRight aria-hidden="true" />
            </Link>
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

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                onClick={() => setMenuOpen(false)}
                href={item.href}
                className={item.isCurrent ? 'mobile-nav-active' : ''}
              >
                {item.label}
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
            <button
              type="button"
              className="button button-secondary"
              style={{ marginTop: '14px' }}
              onClick={toggleLocale}
            >
              {rtl ? 'Switch to English' : 'التبديل إلى العربية'}
            </button>
            <Link
              onClick={() => setMenuOpen(false)}
              className="button button-primary"
              href={contactHref}
            >
              {rtl ? 'ابدأ مشروعك معنا' : 'Start Your Project'}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </nav>
        )}
      </header>

      <main id="about-main">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="about-hero-grid">
              <div className="about-hero-content">
                <div className="hero-kicker-stack">
                  <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href={homeHref} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <Home size={14} />
                      <span>{rtl ? 'الرئيسية' : 'Home'}</span>
                    </Link>
                    <span aria-hidden="true">/</span>
                    <span>{rtl ? 'من نحن وعن الشركة' : 'About SperaCode'}</span>
                  </nav>

                  <div className="eyebrow">
                    <span className="live-dot" />
                    {rtl ? 'عن سبيرا كود (SperaCode)' : 'ABOUT SPERACODE'}
                  </div>
                </div>

                <h1>
                  {rtl ? (
                    <>
                      نبني برمجيات تصنع الفارق
                      <br />
                      <em>وتنقل أعمالك نحو الريادة والمستقبل</em>
                    </>
                  ) : (
                    <>
                      Engineering world-class software
                      <br />
                      <em>that accelerates ambitious companies</em>
                    </>
                  )}
                </h1>

                <p className="about-hero-lead">
                  {rtl
                    ? 'سبيرا كود (SperaCode) شركة برمجيات متخصصة في مساعدة الشركات وأصحاب الأعمال على تحويل أفكارهم لمواقع سريعة، تطبيقات موبايل سهلة، ومنيو إلكتروني ذكي يخدم زباينهم.. بنسلّمك شغلك في ميعاده وبأعلى جودة تفيدك في شغلك وتكبّر مبيعاتك.'
                    : 'SperaCode turns ideas into high-speed websites, intuitive mobile apps, digital QR menus, and tailored software solutions—delivered on time with zero hassle and full long-term support across Egypt, the Gulf, and globally.'}
                </p>
              </div>

              <div className="about-hero-visual">
                <AboutHeroVisual dark={dark} rtl={rtl} />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="about-stats-grid">
              {stats.map((s, idx) => (
                <div key={idx} className="about-stat-card" data-reveal>
                  <b className="stat-number">{s.num}</b>
                  <span className="stat-label">{s.label}</span>
                  <p className="stat-sub">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="section vision-mission-section">
          <div className="container">
            <div className="vision-mission-grid">
              <div className="vision-card" data-reveal>
                <div className="vision-icon">
                  <Compass size={28} />
                </div>
                <h2>{rtl ? 'رؤيتنا' : 'Our Vision'}</h2>
                <p>
                  {rtl
                    ? 'أن نكون الشريك التقني وبيت الخبرة البرمجية الأول للشركات والمؤسسات الطموحة في العالم العربي، ونقود التحول الرقمي ببرمجيات تنافس عالمياً في جودتها، سرعتها، وسهولة استخدامها.'
                    : 'To stand as the foremost engineering partner for visionary organizations across the MENA region, crafting world-class digital products that compete on the global stage.'}
                </p>
              </div>

              <div className="vision-card" data-reveal>
                <div className="vision-icon">
                  <Target size={28} />
                </div>
                <h2>{rtl ? 'رسالتنا' : 'Our Mission'}</h2>
                <p>
                  {rtl
                    ? 'تحويل الأفكار المعقدة والتحديات التشغيلية إلى منتجات رقمية سهلة الاستخدام ومربحة تجارياً، مع الالتزام الصارم بنظافة الكود، وشفافية المواعيد، وضمان ملكية العميل الكاملة لكافة أصول مشروعه.'
                    : 'To translate ambitious business challenges into resilient, beautifully crafted software that delivers measurable ROI, backed by clean architecture, contractual transparency, and 100% client ownership.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5-Phase Methodology Section */}
        <section className="section methodology-section" id="methodology">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                <Milestone size={16} />
                {rtl ? 'منهجية العمل والإنتاج' : 'HOW WE DELIVER'}
              </div>
              <h2 className="section-title">
                {rtl ? 'خريطة العمل: 5 مراحل لانطلاق مشروعك' : 'Our 5-Phase Engineering Framework'}
              </h2>
              <p className="section-subtitle">
                {rtl
                  ? 'نتبع مساراً هندسياً واضحاً ومدروساً يضمن الانتقال من الفكرة إلى الإطلاق السلس دون مفاجآت أو هدر للوقت والميزانية.'
                  : 'A disciplined, transparent delivery framework designed to eliminate guesswork, mitigate risks, and guarantee successful launches.'}
              </p>
            </div>

            <div className="methodology-steps">
              {methodology.map((m, mi) => (
                <div key={mi} className="methodology-step-card" data-reveal>
                  <div className="methodology-step-badge">{m.step}</div>
                  <div className="methodology-step-body">
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                    <div className="methodology-deliverable">
                      <FileCheck2 size={15} />
                      <span>
                        <b>{rtl ? 'المخرج المستلم: ' : 'Deliverable: '}</b>
                        {m.deliverable}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="section values-section" id="guarantees">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                <ShieldCheck size={16} />
                {rtl ? 'قيمنا الهندسية' : 'OUR CORE PILLARS'}
              </div>
              <h2 className="section-title">
                {rtl ? 'مبادئ هندسية لا نساوم عليها' : 'Engineering Principles We Stand By'}
              </h2>
            </div>

            <div className="values-grid">
              {values.map((v, vi) => {
                const VIcon = v.icon
                return (
                  <div key={vi} className="value-card" data-reveal>
                    <div className="value-icon">
                      <VIcon size={24} />
                    </div>
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Regional Coverage */}
        <section className="section regional-section">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                <MapPin size={16} />
                {rtl ? 'التواجد والانتشار' : 'REGIONAL FOOTPRINT'}
              </div>
              <h2 className="section-title">
                {rtl ? 'نخدم عملاءنا في مصر والخليج والعالم' : 'Serving Leading Clients Across MENA & Beyond'}
              </h2>
              <p className="section-subtitle">
                {rtl
                  ? 'نعتمد منظومة عمل سحابية متقدمة؛ مما يتيح لنا إدارة المشاريع والتواصل اللحظي مع شركائنا في مختلف الدول بسلاسة تامة واحترافية عالية.'
                  : 'Modern cloud collaboration infrastructure allows us to conduct sprint reviews and coordinate with clients seamlessly worldwide.'}
              </p>
            </div>

            <div className="regional-grid">
              {countries.map((c, ci) => (
                <div key={ci} className="regional-card" data-reveal>
                  <span className="regional-flag">{c.flag}</span>
                  <h3>{c.name}</h3>
                  <p>{c.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <CustomerReviews rtl={rtl} />

        {/* Ready to start CTA Banner */}
        <section className="section about-cta-section">
          <div className="container">
            <div className="about-cta-box" data-reveal>
              <div className="about-cta-glow" aria-hidden="true" />
              <h2>{rtl ? 'هل أنت مستعد لبدء مشروعك القادم؟' : 'Ready to Build Your Next Milestone?'}</h2>
              <p>
                {rtl
                  ? 'شاركنا تفاصيل مشروعك اليوم وسيقوم مهندسونا بتقديم استشارة فنية وخطة عمل مخصصة مجاناً.'
                  : 'Connect with our solution architects today for a complimentary discovery session and tailored technical proposal.'}
              </p>
              <div className="about-cta-actions">
                <a
                  className="button button-primary"
                  href={buildWhatsAppUrl(
                    rtl
                      ? 'مرحبًا SperaCode، قرأت عن رؤيتكم وأود استشارتكم لبدء مشروع جديد.'
                      : 'Hello SperaCode, I would like to consult with your engineering team.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {rtl ? 'تحدث معنا عبر واتساب فوراً' : 'Chat on WhatsApp'}
                  <ArrowUpRight size={16} />
                </a>
                <Link className="button button-secondary" href={projectsHref}>
                  {rtl ? 'استعرض سابقة الأعمال' : 'View Portfolio'}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
