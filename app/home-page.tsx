'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  ArrowDownLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Globe2,
  Mail,
  Menu,
  Moon,
  PenTool,
  QrCode,
  Smartphone,
  Sun,
  Wrench,
  X,
} from 'lucide-react'
import { SperaLogo } from '@/components/spera-logo'
import { CustomerReviews } from '@/components/customer-reviews'
import { AnimatedMarqueeCarousel } from '@/components/animated-marquee-carousel'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloatingButton } from '@/components/whatsapp-floating-button'
import { buildWhatsAppUrl } from './site-config'
import { projects } from './projects/project-data'
import { homeFaqs } from './seo-data'

type Locale = 'ar' | 'en'

const services = [
  { icon: Globe2, en: 'Web development', ar: 'تطوير المواقع والمنصات', descEn: 'Fast, secure, search-optimized web apps and platforms for ambitious businesses.', descAr: 'مواقع وتطبيقات سريعة وجذابة تفتح في ثانية، وتظهر في بحث جوجل وتجيبلك عملاء جدد.' },
  { icon: Smartphone, en: 'Mobile applications', ar: 'تطبيقات الجوال الذكية', descEn: 'High-performance iOS and Android apps built with Flutter and modern stacks.', descAr: 'تطبيقات سهلة وخفيفة لأجهزة الآيفون والأندرويد تخلّي زباينك يطلبوا منك بضغطة زر.' },
  { icon: QrCode, en: 'Digital QR menu', ar: 'المنيو الرقمي التفاعلي QR', descEn: 'Bilingual digital restaurant menus with direct WhatsApp ordering and instant updates.', descAr: 'منيو إلكتروني ذكي لمطعمك بمسحة باركود، يوفّر مصاريف الطباعة وتوصلك الطلبات ع الواتساب فوراً.', badge: true },
  { icon: Bot, en: 'AI solutions & Chatbots', ar: 'مساعد ذكي ورد آلي', descEn: 'Custom AI chatbots and business workflow automations that scale operations.', descAr: 'رد آلي ومساعد ذكي يجاوب على أسئلة زباينك في الموقع والواتساب 24 ساعة ويجمعلك بيانات المبيعات.' },
  { icon: PenTool, en: 'UI/UX design', ar: 'تصميم واجهات احترافية UI/UX', descEn: 'Data-driven, human-centered product design that maximizes engagement.', descAr: 'تصميم شيك ومريح للعين يعكس احترافية شركتك ويخلي العميل يثق فيك ويطلب بسهولة.' },
  { icon: Wrench, en: 'Maintenance & support', ar: 'المتابعة والدعم الفني', descEn: 'Proactive speed optimization, security updates, and SLA technical support.', descAr: 'متابعة دورية وصيانة مستمرة لضمان سرعة موقعك وحمايته وإصلاح أي مشكلة تظهر فوراً.' },
  { icon: Mail, en: 'Enterprise Email & Hosting', ar: 'البريد الرسمي والاستضافة', descEn: 'Reliable cloud infrastructure and corporate email accounts under your domain.', descAr: 'إيميلات رسمية باسم شركتك (مثل info@yourcompany.com) واستضافة سريعة وثابتة بدون انقطاع.' },
  { icon: Code2, en: 'Custom business software', ar: 'برامج إدارة وفواتير مخصصة', descEn: 'Bespoke ERPs, internal tools, and dashboards shaped to your exact business rules.', descAr: 'برامج إدارة ومخازن وفواتير مفصلة لطريقة شغلك، توفر وقتك وتدير حساباتك بدون اشتراكات شهرية.' },
]

const process = [
  ['Discover', 'We analyze your market, business goals, and technical requirements.', 'الاستكشاف والتخطيط', 'نسمع فكرتك ونحدد طلباتك ونعملك خطة واضحة ومناسبة لميزانيتك.'],
  ['Design', 'We design user-centric interfaces and build interactive prototypes.', 'التصميم وتجربة الاستخدام', 'بنصمم شكل الشاشات ونوريك شكل موقعك أو تطبيقك وتجربه بنفسك قبل البرمجة.'],
  ['Develop', 'We engineer robust solutions using scalable, modern frameworks.', 'التطوير والبرمجة', 'بنبرمج المشروع بأعلى كفاءة وسرعة ونتابع معاك التطور خطوة بخطوة أولاً بأول.'],
  ['Test & launch', 'We run comprehensive QA and deploy to high-availability servers.', 'التجربة والفحص', 'بنجرب كل زرار وكل شاشة ونتأكد من السرعة والأمان قبل ما نطلق المشروع للجمهور.'],
  ['Support & growth', 'We continuously monitor, maintain, and help scale your product.', 'الإطلاق والدعم المستمر', 'بنطلق مشروعك رسمياً، ونسلمك كل حاجة باسمك، ونكون معاك بالدعم والضمان وندربك على إدارته.'],
]

const copy = {
  en: {
    nav: ['Home', 'Services', 'Work', 'About', 'FAQ', 'Contact'],
    badge: 'SOFTWARE HOUSE & DIGITAL STUDIO',
    hero: <>We build websites and mobile apps that <em>grow your sales and scale your business.</em></>,
    sub: 'SperaCode turns your ideas into high-speed websites, intuitive mobile apps, digital QR menus, and smart automations—delivered on time with zero hassle and full support.',
    start: 'Start your project',
    work: 'Explore our work',
    checks: ['Strict on-time delivery', 'Complimentary post-launch warranty', '100% full code & asset ownership'],
    stats: ['Delivered projects', 'Satisfied clients', 'Years in business', 'Fast direct support'],
    services: 'Our services',
    servicesSub: 'Practical, reliable digital solutions crafted to save you time and delight your clients.',
    projects: 'Selected work',
    projectsSub: 'Curated platforms, e-commerce stores, and enterprise systems delivered to leading companies.',
    projectDemo: 'LIVE DEMO',
    case: 'Visit live project',
    qrTitle: 'Your restaurant menu, one touch away.',
    qrSub: 'Delight guests with a lightning-fast interactive menu. Update dishes and prices instantly and accept direct orders on WhatsApp without print fees.',
    benefits: ['Real-time item and price updates', 'Zero recurring printing costs', 'Bilingual Arabic & English', 'Runs instantly in any mobile browser', 'Direct WhatsApp ordering'],
    plans: 'Get started with QR',
    demo: 'Test live demo',
    why: 'Why SperaCode',
    reasons: [
      ['On-time delivery commitment', 'Clear project milestones and strict adherence to agreed launch deadlines.'],
      ['Complimentary warranty & support', 'Dedicated post-delivery technical warranty, monitoring, and guidance.'],
      ['Transparent milestone pricing', 'Detailed written quotes with milestone-based installments and zero hidden fees.'],
      ['Clean, scalable architecture', 'Well-documented, modern codebase that effortlessly scales as your company grows.'],
    ],
    process: 'How we work',
    tech: 'Modern technologies we rely on',
    faq: 'Frequently asked questions',
    final: 'Have an idea? Let’s bring it to life.',
    finalSub: 'Tell us about your project vision, and our engineering team will propose the optimal architecture and timeline.',
    whatsapp: 'Chat on WhatsApp',
    message: 'Send project brief',
    footer: 'Crafting future-ready digital experiences and software for forward-thinking enterprises.',
    more: 'Discover more',
    all: 'All projects',
    category: ['Websites', 'Platforms', 'Business systems'],
  },
  ar: {
    nav: ['الرئيسية', 'خدماتنا', 'أعمالنا', 'لماذا نحن', 'الأسئلة الشائعة', 'اتصل بنا'],
    badge: 'حلول برمجية ذكية لمشروعك',
    hero: <>نبني لك موقعك وتطبيقك باحترافية.. <em>لنوصلك لعملاء أكثر ونكبّر مشروعك.</em></>,
    sub: 'في سبيرا كود (SperaCode) بنحول فكرتك لموقع سريع، تطبيق موبايل سهل، أو منيو QR يريّح زباينك.. بنسلّمك شغلك في ميعاده وبأعلى جودة تفيدك في البيع وتكبّر علامتك التجارية.',
    start: 'ابدأ مشروعك معنا',
    work: 'استعرض سابقة أعمالنا',
    checks: ['تسليم في الميعاد المحدد بدون أي تأخير', 'ضمان ومتابعة فنية مجانية بعد التسليم', 'الموقع والكود بالكامل ملكك أنت 100%'],
    stats: ['مشروع تم تسليمه بنجاح', 'عميل سعيد بشغلنا', 'سنوات خبرة في السوق', 'دعم فني سريع ومباشر'],
    services: 'خدماتنا وحلولنا',
    servicesSub: 'حلول عملية وسهلة صممناها عشان تريّحك وتكبّر شغلك وتسهّل على عملائك.',
    projects: 'نماذج من أعمالنا',
    projectsSub: 'مجموعة مختارة من المواقع، المنصات، وتطبيقات الأعمال التي نفذناها مع روابط حية لمعاينتها.',
    projectDemo: 'موقع حي',
    case: 'فتح المشروع',
    qrTitle: 'منيو مطعمك الذكي.. بمسحة واحدة.',
    qrSub: 'وفّر لرواد مطعمك أو كافيهك تجربة مريحة وسريعة؛ حدّث الأصناف والأسعار في ثوانٍ من موبايلك، واستقبل طلبات الزبائن مباشرة على واتساب بدون أي مصاريف طباعة.',
    benefits: ['تعديل فوري للأسعار والوجبات في أي وقت', 'وفّر آلاف الجنيهات من مصاريف الطباعة والتجديد', 'قائمة ثنائية اللغة (عربي وإنجليزي) بصور واضحة', 'يفتح فوراً بكاميرا الموبايل بدون تحميل أي برنامج', 'الزبون يطلب بضغطة زر وتوصلك الطلبات ع الواتساب'],
    plans: 'احصل على منيو QR لمطعمك',
    demo: 'جرّب نسخة تجريبية',
    why: 'ليه تختار سبيرا كود؟',
    reasons: [
      ['التزام تام بالمواعيد', 'بنحدد معاك موعد تسليم واضح ومكتوب في العقد، ونلتزم بيه بدقة بدون أي مماطلة أو تأخير.'],
      ['ضمان ودعم فني حقيقي', 'بنفضل في ضهرك بعد الإطلاق؛ أي استفسار أو مشكلة بنحلها فوراً وبندربك على إدارة شغلك.'],
      ['أسعار واضحة بدون مفاجآت', 'عرض سعر تفصيلي ومكتوب من الأول، مع دفعات مريحة على مراحل الشغل وبدون أي مصاريف مخفية.'],
      ['شغل متقن يكبر معاك', 'موقعك وتطبيقك مصممين بطريقة حديثة تخليهم سريعين وتقدر تضيف عليهم أي ميزات جديدة في أي وقت.'],
    ],
    process: 'خطوات العمل بكل بساطة',
    tech: 'التقنيات الحديثة التي نعتمدها',
    faq: 'الأسئلة الأكثر تكرارًا',
    final: 'عندك فكرة مشروع وعاوز تبدأها صح؟',
    finalSub: 'تواصل معنا واشرح لنا فكرتك؛ بنقدملك استشارة فنية وخطة عمل واضحة تناسب ميزانيتك مجاناً وبدون أي التزام.',
    whatsapp: 'تحدث معنا على واتساب',
    message: 'اطلب استشارة مجانية لمشروعك',
    footer: 'نبتكر برمجيات وحلولاً رقمية بسيطة ومتقنة تصنع الفارق لعلامتك التجارية.',
    more: 'المزيد من التفاصيل',
    all: 'كافة المشاريع',
    category: ['مواقع إلكترونية', 'منصات رقمية', 'أنظمة أعمال'],
  },
}

export default function HomePage({ initialLocale = 'ar' }: { initialLocale?: Locale }) {
  const [locale] = useState<Locale>(initialLocale)
  const [dark, setDark] = useState(false)
  const [filter, setFilter] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('speracode-theme')
    const isDark = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.lang = initialLocale
    document.documentElement.dir = initialLocale === 'en' ? 'ltr' : 'rtl'

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

    document.querySelectorAll('[data-reveal], .section:not(.hero), .service-card, .project-card, .reason-card, .process-step, .tech-section, .final-section').forEach((el) => {
      el.setAttribute('data-reveal', '')
      revealObserver.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      revealObserver.disconnect()
    }
  }, [initialLocale])

  const t = copy[locale]
  const rtl = locale === 'ar'

  const changeLocale = () => {
    window.location.assign(rtl ? '/en' : '/')
  }

  const changeTheme = () => {
    const next = !dark
    setDark(next)
    localStorage.setItem('speracode-theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const featuredHomeProjects = [
    projects.find((p) => p.title.toLowerCase().includes('fun group')),
    projects.find((p) => p.title.includes('SchoolQ8') || p.title.includes('الكويتية')),
    projects.find((p) => p.title.includes('(HZ)') || p.title.includes('حسين غازي')),
  ].filter(Boolean) as typeof projects

  const basePath = locale === 'en' ? '/en' : ''
  const homeHref = basePath || '/'
  const contactHref = `${basePath}/contact`
  const projectsHref = `${basePath}/projects`
  const servicesHref = `${basePath}/services`
  const aboutHref = `${basePath}/about`

  const navItems = [
    { label: rtl ? 'الرئيسية' : 'Home', href: homeHref, isCurrent: true },
    { label: rtl ? 'خدماتنا' : 'Services', href: servicesHref },
    { label: rtl ? 'أعمالنا' : 'Portfolio', href: projectsHref },
    { label: rtl ? 'من نحن' : 'About', href: aboutHref },
    { label: rtl ? 'اتصل بنا' : 'Contact', href: contactHref },
  ]

  return (
    <div className={`site ${dark ? 'theme-dark' : ''}`} dir={rtl ? 'rtl' : 'ltr'}>
      {/* Top Reading Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <a className="skip-link" href="#main">
        {rtl ? 'انتقل إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>

      {/* Sticky Frosted Header */}
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
              className="icon-button locale-button"
              onClick={changeLocale}
              aria-label={rtl ? 'Switch to English language' : 'التبديل إلى اللغة العربية'}
            >
              {rtl ? 'EN' : 'عربي'}
            </button>

            <button
              className="icon-button"
              onClick={changeTheme}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? <Sun /> : <Moon />}
            </button>

            <Link className="button button-primary nav-cta" href={contactHref}>
              {t.start}
              <ArrowUpRight />
            </Link>

            <button
              className="icon-button mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X /> : <Menu />}
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
                <ArrowUpRight />
              </Link>
            ))}
            <button
              className="button button-secondary"
              style={{ marginTop: '14px' }}
              onClick={changeLocale}
            >
              {rtl ? 'Switch to English' : 'التبديل إلى العربية'}
            </button>
            <Link
              onClick={() => setMenuOpen(false)}
              className="button button-primary"
              href={contactHref}
            >
              {t.start}
              <ArrowUpRight />
            </Link>
          </nav>
        )}
      </header>

      <main id="main">
        {/* Hero Section */}
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="live-dot" />
                {t.badge}
              </div>

              <h1>{t.hero}</h1>

              <p className="hero-description">{t.sub}</p>

              <div className="hero-actions">
                <Link className="button button-primary" href={contactHref}>
                  {t.start}
                  {rtl ? <ArrowDownLeft /> : <ArrowDownRight />}
                </Link>

                <a className="button button-secondary" href="#work">
                  {t.work}
                  <ArrowUpRight />
                </a>
              </div>

              <div className="trust-points">
                {t.checks.map((x) => (
                  <span key={x}>
                    <Check />
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div className="home-hero-art">
              <div className="hero-radar-ripple" aria-hidden="true" />
              <Image
                className="home-hero-image"
                src="/illustrations/hero-home-3d.jpg"
                alt={
                  rtl
                    ? 'مهندس برمجيات سبيرا كود مع شاشات تفاعلية وانطلاق مشروع رقمي'
                    : 'SperaCode software engineer with futuristic interactive dashboard and rocket launch'
                }
                width={1200}
                height={800}
                priority
                sizes="(max-width: 768px) 100vw, 650px"
              />
              <div className="hero-scan-beam" aria-hidden="true" />
            </div>
          </div>

          {/* Key Figures & Social Proof Stats */}
          <div className="container stats-wrap">
            <div
              className="stats-card"
              role="group"
              aria-label={rtl ? 'أرقام وإحصائيات SperaCode' : 'SperaCode at a glance'}
            >
              {['50+', '45+', '6+', '24/7'].map((num, i) => (
                <div className="stat" key={num}>
                  <strong>{num}</strong>
                  <span>{t.stats[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Animated Tech & Enterprise Partners Marquee */}
        <AnimatedMarqueeCarousel rtl={rtl} />

        {/* Services Section */}
        <section className="section section-muted" id="services">
          <div className="container">
            <SectionHeading
              label={rtl ? '01 / خدماتنا وحلولنا' : '01 / WHAT WE DO'}
              title={t.services}
              subtitle={t.servicesSub}
            />

            <div className="services-grid">
              {services.map(({ icon: Icon, ...item }, i) => (
                <article
                  className="service-card"
                  key={item.en}
                  style={{ '--reveal-delay': `${(i % 4) * 80}ms` } as React.CSSProperties}
                >
                  <div className="service-card-top">
                    <span className="service-icon">
                      <Icon />
                    </span>
                    {item.badge && (
                      <span className="popular-badge">
                        {rtl ? 'الأكثر طلبًا' : 'MOST REQUESTED'}
                      </span>
                    )}
                  </div>

                  <h3>{rtl ? item.ar : item.en}</h3>
                  <p>{rtl ? item.descAr : item.descEn}</p>

                  <Link
                    className="text-link"
                    href={servicesHref}
                  >
                    {t.more}
                    {rtl ? <ArrowLeft /> : <ArrowRight />}
                  </Link>
                </article>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '36px' }}>
              <Link className="button button-secondary" href={servicesHref}>
                {rtl ? 'استكشف كافة الخدمات والمواصفات الفنية' : 'Explore All Services & Specifications'}
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Selected Portfolio Section */}
        <section className="section" id="work">
          <div className="container">
            <SectionHeading
              label={rtl ? '02 / أبرز أعمالنا' : '02 / SELECTED WORK'}
              title={t.projects}
              subtitle={t.projectsSub}
            />

            {/* Featured 3 Projects Grid */}
            <div className="projects-grid">
              {featuredHomeProjects.map((project, index) => (
                <article
                  className="project-card"
                  key={project.title}
                  style={{ '--reveal-delay': `${(index % 3) * 100}ms` } as React.CSSProperties}
                >
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-cover"
                    aria-label={`${t.case}: ${project.title}`}
                  >
                    <Image
                      src={project.image}
                      alt={rtl ? project.imageAlt : project.imageAltEn}
                      width={800}
                      height={500}
                      sizes="(max-width: 768px) 100vw, (max-width: 1050px) 50vw, 380px"
                      loading="lazy"
                    />
                    <span className="concept-tag">{t.projectDemo}</span>
                    <span className="project-open">
                      {t.case}
                      <ArrowUpRight />
                    </span>
                  </a>

                  <div className="project-meta">
                    <span>{rtl ? project.arCategory : project.category}</span>
                    <span className="project-dot" />
                  </div>

                  <h3>{project.title}</h3>
                  <p>{rtl ? project.arDescription : project.description}</p>

                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <small className="concept-note">
                    {rtl ? 'رابط مباشر لتصفح الموقع الحقيقي.' : 'Direct link to live deployed project.'}
                  </small>
                </article>
              ))}
            </div>

            <div className="projects-more">
              <Link className="button button-secondary" href={projectsHref}>
                {rtl ? 'استكشف كافة المشاريع والأعمال' : 'Explore all projects'}
                {rtl ? <ArrowLeft /> : <ArrowRight />}
              </Link>
            </div>
          </div>
        </section>

        {/* QR Interactive Menu Feature Section */}
        <section className="section qr-section" id="qr-menu">
          <div className="container qr-panel">
            <div className="qr-copy">
              <div className="eyebrow">
                <span className="live-dot" />
                {rtl ? 'المنيو الرقمي QR' : 'SMART QR MENU'}
              </div>

              <h2>{t.qrTitle}</h2>
              <p>{t.qrSub}</p>

              <ul className="benefit-list">
                {t.benefits.map((x) => (
                  <li key={x}>
                    <Check />
                    {x}
                  </li>
                ))}
              </ul>

              <div className="hero-actions">
                <Link href={contactHref} className="button button-primary">
                  {t.plans}
                  <ArrowUpRight />
                </Link>
                <Link href={contactHref} className="button button-secondary">
                  {t.demo}
                </Link>
              </div>
            </div>

            {/* Interactive Phone Mockup */}
            <div className="qr-visual">
              <div className="phone-shell">
                <div className="phone-notch" />
                <div className="menu-screen">
                  <div className="menu-cover">
                    <QrCode />
                    <span>{rtl ? 'منيو الكافيه والمطعم' : 'MODERN CAFÉ & RESTAURANT'}</span>
                    <b>
                      {rtl ? (
                        <>
                          أشهى المأكولات.
                          <br />
                          تجربة استثنائية.
                        </>
                      ) : (
                        <>
                          Good food.
                          <br />
                          Great moments.
                        </>
                      )}
                    </b>
                  </div>

                  <div className="menu-cats">
                    <span>{rtl ? 'الأكثر طلبًا' : 'Popular'}</span>
                    <span>{rtl ? 'مشروبات' : 'Drinks'}</span>
                    <span>{rtl ? 'وجبات رئيسية' : 'Main'}</span>
                  </div>

                  <div className="menu-item">
                    <i className="food" />
                    <span>
                      <b>{rtl ? 'توست أفوكادو بالبيض' : 'Avocado Poached Toast'}</b>
                      <small>{rtl ? 'خبز طازج، أفوكادو، بيض' : 'Fresh artisanal sourdough'}</small>
                    </span>
                    <strong>$12</strong>
                  </div>

                  <div className="menu-item">
                    <i className="food food-b" />
                    <span>
                      <b>{rtl ? 'بان كيك بالتوت العضوي' : 'Wild Berry Pancakes'}</b>
                      <small>{rtl ? 'عسل طبيعي وتوت موسمي' : 'Pure maple syrup & berries'}</small>
                    </span>
                    <strong>$14</strong>
                  </div>

                  <div className="menu-order">
                    {rtl ? 'إرسال الطلب عبر واتساب' : 'Order via WhatsApp'}
                    <ArrowUpRight />
                  </div>
                </div>
              </div>

              <div className="qr-chip">
                <QrCode />
                <span>{rtl ? 'امسح. اختر. استمتع.' : 'Scan. Browse. Enjoy.'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose SperaCode Section */}
        <section className="section section-muted" id="why">
          <div className="container">
            <SectionHeading
              label={rtl ? '03 / لماذا تختارنا' : '03 / THE SPERACODE ADVANTAGE'}
              title={t.why}
              subtitle={
                rtl
                  ? 'شراكة تقنية حقيقية قائمة على الشفافية والاحترافية ونتائج الأعمال الملموسة.'
                  : 'A strategic software partnership designed around reliability, transparency, and real growth.'
              }
            />

            <div className="reasons-grid">
              {t.reasons.map(([title, description], i) => (
                <article className="reason-card" key={title}>
                  <span className="reason-number">0{i + 1}</span>
                  <div className="reason-icon">
                    {[
                      <Check key="c" />,
                      <Mail key="m" />,
                      <Code2 key="d" />,
                      <Globe2 key="g" />,
                    ][i]}
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Verified Customer Reviews Carousel */}
        <CustomerReviews rtl={rtl} />

        {/* Work Methodology & Process */}
        <section className="section">
          <div className="container">
            <SectionHeading
              label={rtl ? '05 / منهجية العمل' : '05 / HOW WE DELIVER'}
              title={t.process}
              subtitle={
                rtl
                  ? 'خطوات عمل منظمة ومدروسة تضمن أعلى درجات الدقة والالتزام من البداية حتى الإطلاق.'
                  : 'Structured engineering phases from initial consultation to launch and continuous support.'
              }
            />

            <div className="process-grid">
              {process.map(([enTitle, enDesc, arTitle, arDesc], i) => (
                <article className="process-step" key={enTitle}>
                  <span className="step-number">0{i + 1}</span>
                  <div className="step-line" />
                  <h3>{rtl ? arTitle : enTitle}</h3>
                  <p>{rtl ? arDesc : enDesc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Tech Stack Section */}
        <section className="tech-section">
          <div className="container tech-inner">
            <div>
              <span className="section-kicker">
                {rtl ? '06 / التقنيات' : '06 / MODERN STACK'}
              </span>
              <h2>{t.tech}</h2>
            </div>
            <div className="tech-list">
              {[
                'Next.js 16',
                'React 19',
                'TypeScript',
                'Node.js',
                'Flutter',
                'Python',
                'Supabase',
                'PostgreSQL',
                'Tailwind CSS',
                'OpenAI & Gemini',
                'Docker',
                'Figma',
              ].map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Rich FAQ Section for SEO & User Experience */}
        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <div>
              <SectionHeading
                label={rtl ? '07 / الأسئلة الشائعة' : '07 / FREQUENTLY ASKED'}
                title={t.faq}
                subtitle={
                  rtl
                    ? 'إجابات واضحة وشفافة على التساؤلات الأكثر أهمية لمساعدتك في اتخاذ قرارك.'
                    : 'Clear answers to help you understand our scope, timelines, and collaboration.'
                }
              />
              <Link href={contactHref} className="text-link">
                {rtl ? 'هل لديك سؤال آخر؟ تواصل معنا' : 'Have a different question? Talk to us'}
                {rtl ? <ArrowLeft /> : <ArrowRight />}
              </Link>
            </div>

            <div className="faq-list">
              {homeFaqs.map((faq) => (
                <details className="faq-item" key={faq.questionEn}>
                  <summary>
                    {rtl ? faq.questionAr : faq.questionEn}
                    <span className="faq-plus" />
                  </summary>
                  <p>{rtl ? faq.answerAr : faq.answerEn}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* High Conversion Bottom CTA */}
        <section className="section final-section" id="contact">
          <div className="container">
            <div className="home-contact-cta">
              <span className="section-kicker">
                {rtl ? 'خطوتك القادمة' : 'TAKE THE NEXT STEP'}
              </span>
              <h2>{t.final}</h2>
              <p>{t.finalSub}</p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link className="button button-primary" href={contactHref}>
                  {rtl ? 'طلب استشارة ومقترح فني' : 'Request Technical Proposal'}
                  {rtl ? <ArrowLeft /> : <ArrowRight />}
                </Link>
                <a
                  className="button button-secondary"
                  href={buildWhatsAppUrl(
                    rtl
                      ? 'مرحبًا SperaCode، أود مناقشة مشروع جديد معكم.'
                      : 'Hello SperaCode, I would like to discuss a project with your team.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.whatsapp}
                  <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Elite Global Footer */}
      <SiteFooter
        rtl={rtl}
        dark={dark}
        onToggleDark={changeTheme}
        onToggleLocale={changeLocale}
        homeHref={homeHref}
        projectsHref={projectsHref}
        contactHref={contactHref}
        servicesHref={servicesHref}
        aboutHref={aboutHref}
      />

      {/* Animated Floating WhatsApp Widget */}
      <WhatsAppFloatingButton rtl={rtl} />

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

function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string
  title: string | React.ReactNode
  subtitle: string
}) {
  return (
    <div className="section-heading" data-reveal>
      <span className="section-kicker">{label}</span>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}
