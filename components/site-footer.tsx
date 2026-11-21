'use client'

import Link from 'next/link'
import {
  ArrowUp,
  ArrowUpRight,
  Clock,
  Globe,
  Mail,
  Moon,
  Phone,
  ShieldCheck,
  Sun,
  CheckCircle2,
} from 'lucide-react'
import { SperaLogo } from './spera-logo'
import { buildWhatsAppUrl, SITE_EMAIL, SITE_PHONE_LOCAL } from '@/app/site-config'

interface SiteFooterProps {
  rtl: boolean
  dark?: boolean
  onToggleDark?: () => void
  onToggleLocale?: () => void
  homeHref?: string
  projectsHref?: string
  contactHref?: string
  servicesHref?: string
  aboutHref?: string
}

export function SiteFooter({
  rtl,
  dark = false,
  onToggleDark,
  onToggleLocale,
  homeHref,
  projectsHref,
  contactHref,
  servicesHref,
  aboutHref,
}: SiteFooterProps) {
  const defaultHome = homeHref || (rtl ? '/' : '/en')
  const defaultProjects = projectsHref || (rtl ? '/projects' : '/en/projects')
  const defaultContact = contactHref || (rtl ? '/contact' : '/en/contact')
  const defaultServices = servicesHref || (rtl ? '/services' : '/en/services')
  const defaultAbout = aboutHref || (rtl ? '/about' : '/en/about')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const navLinks = [
    { ar: 'الرئيسية', en: 'Home', href: defaultHome },
    { ar: 'خدماتنا التقنية', en: 'Services', href: defaultServices },
    { ar: 'سابقة أعمالنا', en: 'Portfolio', href: defaultProjects },
    { ar: 'من نحن وقصتنا', en: 'About Us', href: defaultAbout },
    { ar: 'تواصل معنا الآن', en: 'Contact Us', href: defaultContact },
  ]

  const guarantees = [
    { ar: 'ملكية الكود والتصميم بنسبة 100%', en: '100% Full IP & Code Ownership' },
    { ar: 'تسليم في الموعد بدون تأخير', en: 'Strict On-Time Delivery' },
    { ar: 'فترة ضمان ودعم فني مجانية', en: 'Free Post-Launch Warranty' },
    { ar: 'استشارة فنية وعرض سعر مجاني', en: 'Free Consultation & Quote' },
  ]

  const whatsappDirect = buildWhatsAppUrl(
    rtl
      ? 'مرحبًا SperaCode، أود الاستفسار عن خدماتكم وبدء مشروع جديد.'
      : 'Hello SperaCode, I would like to inquire about your software engineering services.'
  )

  return (
    <footer className="footer-elite" dir={rtl ? 'rtl' : 'ltr'}>
      {/* Live Ops & Quick Connect Bar */}
      <div className="container">
        <div className="footer-ops-bar">
          <div className="footer-ops-left">
            <div className="footer-status-pill">
              <span className="status-dot-pulse" aria-hidden="true" />
              <span className="status-text">
                {rtl ? 'جميع الأنظمة تعمل بكفاءة 99.9%' : 'All Systems Operational • 99.9%'}
              </span>
            </div>
            <div className="footer-response-pill">
              <Clock size={12} aria-hidden="true" />
              <span>{rtl ? 'متوسط الرد: أقل من 15 دقيقة • متاحون 24/7' : 'Avg Response: <15 mins • 24/7'}</span>
            </div>
          </div>

          <div className="footer-ops-right">
            <a
              href={whatsappDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-chip"
              title={rtl ? `واتساب: ${SITE_PHONE_LOCAL}` : `WhatsApp: ${SITE_PHONE_LOCAL}`}
            >
              <Phone size={13} aria-hidden="true" />
              <span>{rtl ? `واتساب (${SITE_PHONE_LOCAL})` : `WhatsApp (${SITE_PHONE_LOCAL})`}</span>
            </a>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="footer-contact-chip"
              title={SITE_EMAIL}
            >
              <Mail size={13} aria-hidden="true" />
              <span>{SITE_EMAIL}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Directory */}
      <div className="container footer-main-content">
        <div className="footer-elite-grid footer-compact-grid">
          {/* Brand Column */}
          <div className="footer-col-brand">
            <SperaLogo footer rtl={rtl} homeHref={defaultHome} />

            <p className="footer-brand-desc">
              {rtl
                ? 'سبيرا كود (SperaCode) شركة برمجيات متخصصة في تطوير المواقع السريعة، تطبيقات الموبايل، والمنيو الإلكتروني الذكي لمساعدتك على تكبير عملك وجلب عملاء أكثر.'
                : 'SperaCode engineers fast websites, intuitive mobile apps, and interactive QR menus designed to grow your business and delight your customers.'}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-col-nav">
            <h4>{rtl ? 'روابط سريعة' : 'Quick Navigation'}</h4>
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.en}>
                  <Link href={link.href}>{rtl ? link.ar : link.en}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guarantees & Values */}
          <div className="footer-col-company">
            <h4>{rtl ? 'التزامنا وضماناتنا' : 'Our Guarantees'}</h4>
            <ul className="footer-links-list footer-guarantees-list">
              {guarantees.map((g) => (
                <li key={g.en}>
                  <CheckCircle2 size={14} className="footer-check-icon" aria-hidden="true" />
                  <span>{rtl ? g.ar : g.en}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal & Preferences Bottom Bar */}
        <div className="footer-elite-bottom">
          <div className="footer-copyright-group">
            <span>
              © {currentYear} {rtl ? 'سبيرا كود (SperaCode)' : 'SperaCode'}.{' '}
              {rtl ? 'كافة الحقوق محفوظة.' : 'All rights reserved.'}
            </span>
            <span className="footer-guarantee-pill">
              <ShieldCheck size={13} aria-hidden="true" />
              {rtl ? 'ملكية فكرية وكود بنسبة 100% للعميل' : '100% Full IP & Code Ownership'}
            </span>
          </div>

          <div className="footer-controls-group">
            {onToggleLocale && (
              <button
                type="button"
                className="footer-pill-btn"
                onClick={onToggleLocale}
                aria-label={rtl ? 'Switch to English' : 'التبديل إلى العربية'}
              >
                <Globe size={13} aria-hidden="true" />
                <span>{rtl ? 'English' : 'العربية'}</span>
              </button>
            )}

            {onToggleDark && (
              <button
                type="button"
                className="footer-pill-btn"
                onClick={onToggleDark}
                aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {dark ? <Sun size={14} /> : <Moon size={14} />}
                <span>{dark ? (rtl ? 'الوضع الفاتح' : 'Light Mode') : (rtl ? 'الوضع الداكن' : 'Dark Mode')}</span>
              </button>
            )}

            <button
              type="button"
              className="footer-back-to-top"
              onClick={scrollToTop}
              aria-label={rtl ? 'العودة إلى أعلى الصفحة' : 'Back to top'}
            >
              <span>{rtl ? 'الأعلى' : 'Top'}</span>
              <ArrowUp size={14} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
