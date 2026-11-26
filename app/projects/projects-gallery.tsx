'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Home,
  Menu,
  Moon,
  Search,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'
import { SperaLogo } from '@/components/spera-logo'
import { CustomerReviews } from '@/components/customer-reviews'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloatingButton } from '@/components/whatsapp-floating-button'
import { ProjectsHeroVisual } from '@/components/hero-visuals/projects-hero-visual'
import { CaseStudyModal } from '@/components/case-study-modal'
import { PortfolioRequestForm } from '@/components/portfolio-request-form'
import { projects, type PortfolioProject } from './project-data'

type Locale = 'ar' | 'en'
const categories = ['All', 'Websites', 'Platforms', 'Business systems'] as const
const categoryLabels = {
  ar: ['الكل', 'مواقع إلكترونية', 'منصات رقمية', 'أنظمة أعمال'],
  en: ['All', 'Websites', 'Platforms', 'Business systems'],
}

export default function ProjectsGallery({ initialLocale = 'ar' }: { initialLocale?: Locale }) {
  const [active, setActive] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [locale] = useState<Locale>(initialLocale)
  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [activeCaseStudy, setActiveCaseStudy] = useState<PortfolioProject | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)

  const rtl = locale === 'ar'
  const basePath = rtl ? '' : '/en'
  const homeHref = basePath || '/'
  const servicesHref = `${basePath}/services`
  const aboutHref = `${basePath}/about`
  const projectsHref = `${basePath}/projects`
  const contactHref = `${basePath}/contact`

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = active === 'All' || project.category === active
      if (!matchesCategory) return false

      if (!searchQuery.trim()) return true
      const query = searchQuery.toLowerCase().trim()
      const titleMatch = project.title.toLowerCase().includes(query)
      const descMatch = (rtl ? project.arDescription : project.description).toLowerCase().includes(query)
      const tagsMatch = project.tags.some((tag) => tag.toLowerCase().includes(query))
      return titleMatch || descMatch || tagsMatch
    })
  }, [active, searchQuery, rtl])

  const isDefaultView = active === 'All' && !searchQuery.trim()
  const displayedProjects = isDefaultView && !showAllProjects ? filtered.slice(0, 4) : filtered
  const hasMoreProjects = isDefaultView && filtered.length > 4

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
    window.location.assign(rtl ? '/en/projects' : '/projects')
  }

  function toggleTheme() {
    const next = !dark
    setDark(next)
    localStorage.setItem('speracode-theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const labels = rtl
    ? {
        home: 'الرئيسية',
        services: 'خدماتنا',
        work: 'أعمالنا',
        about: 'لماذا نحن',
        contact: 'اتصل بنا',
        start: 'ابدأ مشروعك',
        breadcrumb: 'الرئيسية',
        heroTop: 'سابقة أعمالنا',
        heroTitle: (
          <>
            أفكار تتحوّل إلى
            <br />
            <em>تجارب رقمية رائدة</em>
          </>
        ),
        heroDesc:
          'استكشف نماذج حقيقية من المواقع والمنصات وتطبيقات الويب وأنظمة إدارة الأعمال التي صممناها وطورناها لعملائنا في مصر والخليج.',
        explore: 'استعرض المشاريع',
        intro: 'سجل الأعمال',
        heading: 'مشاريع تم تنفيذها وتسليمها',
        introText: 'استعرض نماذج حقيقية من مشاريعنا، مع إمكانية تجربة المواقع النشطة واستكشاف تفاصيل الأنظمة المنفذة.',
        projectCount: 'مشروعاً في المعرض',
        open: 'زيارة الموقع الحي',
        completed: 'مشروع تم تنفيذه وتسليمه',
        searchPlaceholder: 'ابحث باسم المشروع أو المجال (مثال: مقاولات، تعليم، متجر)...',
        note: 'جميع الصور تمثل واجهات حقيقية من مشروعات قمنا بتطويرها لعملائنا في مصر والخليج.',
        next: 'مشروعك التالي معنا',
        cta: 'هل لديك فكرة أو متطلب مشابه؟',
        ctaText: 'شاركنا متطلباتك، وسنساعدك في بناء حل رقمي فائق الجودة يخدم أهدافك بدقة.',
        footer: 'نبتكر برمجيات وحلولًا رقمية متقدمة تصنع الفارق لأعمالك.',
        back: 'العودة للرئيسية',
        switch: 'English',
        themeDark: 'تفعيل الوضع الداكن',
        themeLight: 'تفعيل الوضع الفاتح',
      }
    : {
        home: 'Home',
        services: 'Services',
        work: 'Our work',
        about: 'About',
        contact: 'Contact',
        start: 'Start a project',
        breadcrumb: 'Home',
        heroTop: 'FEATURED PORTFOLIO',
        heroTitle: (
          <>
            Vision turned into
            <br />
            <em>impactful digital experiences</em>
          </>
        ),
        heroDesc:
          'Explore selected web applications, enterprise platforms, and digital products engineered by SperaCode for market-leading enterprises.',
        explore: 'Explore portfolio',
        intro: 'PORTFOLIO SHOWCASE',
        heading: 'Delivered commercial products',
        introText: 'Authentic captures from our delivered portfolio, featuring live client websites and specialized enterprise systems.',
        projectCount: 'matching projects',
        open: 'Visit live project',
        completed: 'Successfully Delivered Solution',
        searchPlaceholder: 'Search by project name or technology (e.g., e-commerce, portal, React)...',
        note: 'Screenshots depict authentic systems engineered and delivered for our clients.',
        next: 'Your Next Milestone',
        cta: 'Ready to build something exceptional?',
        ctaText: 'Tell us about your upcoming project and let our engineering team shape the optimal software solution.',
        footer: 'Engineering resilient, scalable digital products for forward-thinking organizations.',
        back: 'Back to home',
        switch: 'عربي',
        themeDark: 'Switch to dark mode',
        themeLight: 'Switch to light mode',
      }

  return (
    <div className={`site projects-page ${dark ? 'theme-dark' : ''}`} dir={rtl ? 'rtl' : 'ltr'}>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      <a className="skip-link" href="#main">
        {rtl ? 'انتقل إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>

      {/* Header */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <SperaLogo rtl={rtl} homeHref={homeHref} />

          <nav className="desktop-nav" aria-label={rtl ? 'التنقل الرئيسي' : 'Main navigation'}>
            <Link href={homeHref}>{labels.home}</Link>
            <Link href={servicesHref}>{labels.services}</Link>
            <Link href={projectsHref} aria-current="page">
              {labels.work}
            </Link>
            <Link href={aboutHref}>{labels.about}</Link>
            <Link href={contactHref}>{labels.contact}</Link>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="icon-button locale-button"
              onClick={toggleLocale}
              aria-label={rtl ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              {labels.switch}
            </button>
            <button
              type="button"
              className="icon-button"
              onClick={toggleTheme}
              aria-label={dark ? labels.themeLight : labels.themeDark}
              aria-pressed={dark}
            >
              {dark ? <Sun /> : <Moon />}
            </button>
            <Link className="button button-primary nav-cta" href={contactHref}>
              {labels.start}
              <ArrowUpRight />
            </Link>
            <button
              type="button"
              className="icon-button mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <Link onClick={() => setMenuOpen(false)} href={homeHref}>
              {labels.home}
              <ArrowUpRight />
            </Link>
            <Link onClick={() => setMenuOpen(false)} href={servicesHref}>
              {labels.services}
              <ArrowUpRight />
            </Link>
            <Link onClick={() => setMenuOpen(false)} href={projectsHref}>
              {labels.work}
              <ArrowUpRight />
            </Link>
            <Link onClick={() => setMenuOpen(false)} href={aboutHref}>
              {labels.about}
              <ArrowUpRight />
            </Link>
            <Link onClick={() => setMenuOpen(false)} href={contactHref}>
              {labels.contact}
              <ArrowUpRight />
            </Link>
            <button className="button button-secondary" style={{ marginTop: '14px' }} onClick={toggleLocale}>
              {labels.switch}
            </button>
          </nav>
        )}
      </header>

      <main id="main">
        {/* Projects Hero */}
        <section className="projects-hero">
          <div className="container projects-hero-inner">
            <div className="projects-hero-layout">
              <div className="projects-hero-copy">
                <div className="hero-kicker-stack">
                  <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href={homeHref} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <Home size={14} />
                      <span>{labels.breadcrumb}</span>
                    </Link>
                    <span aria-hidden="true">/</span>
                    <span>{labels.work}</span>
                  </nav>

                  <div className="eyebrow">
                    <span className="live-dot" />
                    {labels.heroTop}
                  </div>
                </div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 800, margin: '14px 0', lineHeight: 1.15 }}>
                  {labels.heroTitle}
                </h1>
                <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.85, maxWidth: '580px' }}>
                  {labels.heroDesc}
                </p>

                <div className="hero-actions">
                  <Link className="button button-primary" href={contactHref}>
                    {labels.start}
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                  <a className="button button-secondary" href="#gallery">
                    {labels.explore}
                    <ArrowDown aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="projects-hero-visual">
                <ProjectsHeroVisual dark={dark} rtl={rtl} />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section" id="gallery">
          <div className="container">
            <div className="portfolio-intro" data-reveal>
              <div>
                <div className="eyebrow" style={{ marginBottom: '12px' }}>
                  <span className="live-dot" />
                  {labels.intro}
                </div>
                <h2>{labels.heading}</h2>
                <p>{labels.introText}</p>
              </div>
            </div>

            {/* Search and Filters Bar */}
            <div className="portfolio-toolbar">
              <div className="portfolio-filters" role="group" aria-label="Filter categories">
                {categories.map((category, index) => {
                  const label = categoryLabels[locale][index]
                  const categoryCount =
                    category === 'All'
                      ? projects.length
                      : projects.filter((p) => p.category === category).length

                  return (
                    <button
                      type="button"
                      className={`portfolio-filter ${active === category ? 'active' : ''}`}
                      key={category}
                      onClick={() => setActive(category)}
                      aria-pressed={active === category}
                    >
                      {label} ({categoryCount})
                    </button>
                  )
                })}
              </div>

              {/* Instant Search Bar */}
              <div className="portfolio-search-box">
                <Search
                  size={16}
                  className="portfolio-search-icon"
                />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={labels.searchPlaceholder}
                  className="portfolio-search-input"
                />
              </div>
            </div>

            {/* Portfolio Grid */}
            <div className="projects-grid">
              {displayedProjects.map((project, index) => {
                const isLive = Boolean(project.isLive && project.demoUrl)
                return (
                  <article
                    className="portfolio-card"
                    data-reveal
                    key={project.title}
                    style={{ '--reveal-delay': `${(index % 3) * 80}ms` } as React.CSSProperties}
                  >
                    {isLive ? (
                      <a
                        className="portfolio-image"
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${labels.open}: ${project.title}`}
                      >
                        <Image
                          src={project.image}
                          alt={rtl ? project.imageAlt : project.imageAltEn}
                          width={1000}
                          height={650}
                          sizes="(max-width: 768px) 100vw, (max-width: 1050px) 50vw, 380px"
                          loading="lazy"
                        />
                        <span className="portfolio-image-overlay">
                          <span>
                            {labels.open}
                            <ArrowUpRight aria-hidden="true" />
                          </span>
                        </span>
                        <span className="portfolio-type">
                          {rtl ? project.arCategory : project.category}
                        </span>
                        <span className="portfolio-status-chip is-live">
                          <span className="live-dot" />
                          {rtl ? 'موقع نشط' : 'Live site'}
                        </span>
                      </a>
                    ) : (
                      <div className="portfolio-image portfolio-image-static">
                        <Image
                          src={project.image}
                          alt={rtl ? project.imageAlt : project.imageAltEn}
                          width={1000}
                          height={650}
                          sizes="(max-width: 768px) 100vw, (max-width: 1050px) 50vw, 380px"
                          loading="lazy"
                        />
                        <span className="portfolio-type">
                          {rtl ? project.arCategory : project.category}
                        </span>
                        <span className="portfolio-status-chip is-delivered">
                          <CheckCircle2 size={13} />
                          {rtl ? 'مشروع تم تنفيذه' : 'Delivered'}
                        </span>
                      </div>
                    )}

                    <div className="portfolio-card-content">
                      <div className="portfolio-card-heading">
                        <div className="portfolio-title-group">
                          <span className="portfolio-index">{String(index + 1).padStart(2, '0')}</span>
                          <h3>{project.title}</h3>
                        </div>
                        {isLive && (
                          <ArrowUpRight aria-hidden="true" className="portfolio-heading-arrow" />
                        )}
                      </div>

                      <p>{rtl ? project.arDescription : project.description}</p>

                      <div className="portfolio-tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                      {isLive ? (
                        <a
                          className="portfolio-demo-link"
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {labels.open}
                          <ArrowUpRight aria-hidden="true" />
                        </a>
                      ) : (
                        <div className="portfolio-delivered-pill">
                          <CheckCircle2 size={14} />
                          <span>{labels.completed}</span>
                        </div>
                      )}

                      <button
                        type="button"
                        className="portfolio-case-study-btn"
                        onClick={() => setActiveCaseStudy(project)}
                      >
                        <Sparkles size={14} />
                        <span>{rtl ? 'تفاصيل ودراسة حالة المشروع' : 'Case study & details'}</span>
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>

            {hasMoreProjects && (
              <div className="portfolio-load-more-wrap">
                <button
                  type="button"
                  onClick={() => setShowAllProjects((prev) => !prev)}
                  className="button button-secondary portfolio-load-more-btn"
                  aria-expanded={showAllProjects}
                >
                  {showAllProjects ? (
                    <>
                      <span>{rtl ? 'عرض أقل' : 'Show Fewer Projects'}</span>
                      <ArrowUp size={16} aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <span>
                        {rtl
                          ? `رؤية المزيد من المشاريع (${filtered.length - 4} مشاريع إضافية)`
                          : `View More Projects (${filtered.length - 4} more)`}
                      </span>
                      <ArrowDown size={16} aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            )}

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                justifyContent: 'center',
                marginTop: '36px',
                color: 'var(--muted)',
                fontSize: '13px',
              }}
            >
              <Check size={16} style={{ color: 'var(--cyan)' }} />
              <span>{labels.note}</span>
            </div>
          </div>
        </section>

        {/* Customer Reviews on Projects Page */}
        <CustomerReviews rtl={rtl} />

        {/* Interactive Demo Request Form */}
        <PortfolioRequestForm rtl={rtl} />

        {/* Case Study Modal */}
        <CaseStudyModal
          project={activeCaseStudy}
          onClose={() => setActiveCaseStudy(null)}
          rtl={rtl}
        />
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
