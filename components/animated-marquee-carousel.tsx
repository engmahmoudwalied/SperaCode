'use client'

import {
  Code2,
  Cpu,
  Database,
  Globe2,
  Layers,
  Lock,
  Server,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react'

interface AnimatedMarqueeCarouselProps {
  rtl: boolean
}

export function AnimatedMarqueeCarousel({ rtl }: AnimatedMarqueeCarouselProps) {
  const partnerProjects = [
    {
      name: rtl ? 'منصة GradHub السعودية' : 'Saudi GradHub',
      country: '🇸🇦',
      category: rtl ? 'منصة سحابية متكاملة' : 'Cloud Platform',
      highlight: rtl ? 'تسليم للجامعات والشركات' : 'Universities & Incubators',
    },
    {
      name: rtl ? 'شركة HZ للمقاولات' : 'HZ Construction KSA',
      country: '🇸🇦',
      category: rtl ? 'بوابة هندسية كبرى' : 'Corporate Portal',
      highlight: rtl ? 'كود البناء السعودي' : 'Saudi Building Code',
    },
    {
      name: rtl ? 'منصة النوخذة للذكاء الاصطناعي' : 'Al Nowkhaza AI UAE',
      country: '🇦🇪',
      category: rtl ? 'وكيل ذكاء اصطناعي' : 'AI Classroom Agent',
      highlight: rtl ? 'رؤية إمارات 2071' : 'UAE Centennial 2071',
    },
    {
      name: rtl ? 'مدرستنا الكويتية (SchoolQ8)' : 'SchoolQ8 Platform',
      country: '🇰🇼',
      category: rtl ? 'بوابة تعليمية ذكية' : 'Educational EdTech',
      highlight: rtl ? 'آلاف الطلاب يومياً' : 'High Traffic Portal',
    },
    {
      name: rtl ? 'منظومة Titan Trade ERP' : 'Titan Trade ERP',
      country: '🇪🇬',
      category: rtl ? 'نظام موارد مؤسسات ERP' : 'Supply Chain & POS',
      highlight: rtl ? 'فواتير إلكترونية متوافقة' : 'E-Invoicing & Multi-Warehouse',
    },
    {
      name: rtl ? 'أنظمة الرصد والسلامة الميدانية' : 'Field Safety Monitor',
      country: '🛡️',
      category: rtl ? 'لوحة تحكم فورية IoT' : 'Real-Time Safety IoT',
      highlight: rtl ? 'مؤشرات خطر فورية' : 'Live Incident Tracking',
    },
    {
      name: rtl ? 'نظام PharmaSync لإدارة الصيدليات' : 'PharmaSync POS & Cloud',
      country: '💊',
      category: rtl ? 'نقاط بيع ومخازن أدوية' : 'POS & Inventory Cloud',
      highlight: rtl ? 'تزامن لحظي متعدد الفروع' : 'Multi-Branch Sync',
    },
    {
      name: rtl ? 'منظومة تشفير الرسائل CryptoGuard' : 'CryptoGuard Security',
      country: '🔐',
      category: rtl ? 'أمن سيبراني وتشفير' : 'Data Privacy & Cipher',
      highlight: rtl ? 'تشفير عسكري من طرف لطرف' : 'End-to-End Encryption',
    },
  ]

  const technologies = [
    { name: 'Next.js 16', label: 'Turbopack Core', icon: Zap },
    { name: 'React 19', label: 'Server Actions', icon: Layers },
    { name: 'TypeScript', label: 'Strict Typing', icon: Code2 },
    { name: 'Python AI', label: 'LLMs & Agents', icon: Cpu },
    { name: 'Tailwind CSS', label: 'Modern UI Engine', icon: Sparkles },
    { name: 'PostgreSQL', label: 'ACID Relational', icon: Database },
    { name: 'Edge Cloud', label: 'Global CDN & Vercel', icon: Globe2 },
    { name: 'Flutter & Native', label: 'iOS & Android', icon: Smartphone },
    { name: 'Cloudflare', label: 'DDoS & WAF Armor', icon: Lock },
    { name: 'Node.js & Nest', label: 'Microservices', icon: Server },
  ]

  return (
    <section className="marquee-carousel-section" aria-label={rtl ? 'شركاء النجاح والتقنيات' : 'Partners and Tech Stack'}>
      <div className="container">
        <div className="marquee-carousel-header">
          <span className="marquee-kicker">
            <Sparkles size={13} aria-hidden="true" />
            {rtl ? 'ثقة المؤسسات الرائدة • أحدث التقنيات العالمية' : 'ENTERPRISE TRUST • GLOBAL TECH STACK'}
          </span>
          <h2 className="marquee-title">
            {rtl
              ? 'حلول برمجية موثوقة تعمل بأحدث التقنيات العالمية'
              : 'Resilient Software Engineered on Modern Infrastructure'}
          </h2>
        </div>
      </div>

      <div className="marquee-carousel-container" dir={rtl ? 'rtl' : 'ltr'}>
        {/* Track 1: Client Projects & Enterprise Partners */}
        <div className="marquee-track-wrap">
          <div className="marquee-track animate-marquee">
            {partnerProjects.map((p, idx) => (
              <div key={`p1-${p.name}-${idx}`} className="marquee-card client-card">
                <span className="marquee-flag" aria-hidden="true">{p.country}</span>
                <div className="marquee-card-info">
                  <div className="marquee-card-title-row">
                    <strong className="marquee-name">{p.name}</strong>
                    <span className="marquee-badge">{p.category}</span>
                  </div>
                  <span className="marquee-highlight">{p.highlight}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="marquee-track animate-marquee" aria-hidden="true">
            {partnerProjects.map((p, idx) => (
              <div key={`p2-${p.name}-${idx}`} className="marquee-card client-card">
                <span className="marquee-flag" aria-hidden="true">{p.country}</span>
                <div className="marquee-card-info">
                  <div className="marquee-card-title-row">
                    <strong className="marquee-name">{p.name}</strong>
                    <span className="marquee-badge">{p.category}</span>
                  </div>
                  <span className="marquee-highlight">{p.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Core Engineering Stack */}
        <div className="marquee-track-wrap">
          <div className="marquee-track animate-marquee animate-marquee-delay">
            {technologies.map((t, idx) => {
              const IconComp = t.icon
              return (
                <div key={`t1-${t.name}-${idx}`} className="marquee-card tech-card">
                  <span className="marquee-tech-icon" aria-hidden="true">
                    <IconComp size={15} />
                  </span>
                  <div className="marquee-tech-info">
                    <strong className="marquee-tech-name">{t.name}</strong>
                    <span className="marquee-tech-label">{t.label}</span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="marquee-track animate-marquee animate-marquee-delay" aria-hidden="true">
            {technologies.map((t, idx) => {
              const IconComp = t.icon
              return (
                <div key={`t2-${t.name}-${idx}`} className="marquee-card tech-card">
                  <span className="marquee-tech-icon" aria-hidden="true">
                    <IconComp size={15} />
                  </span>
                  <div className="marquee-tech-info">
                    <strong className="marquee-tech-name">{t.name}</strong>
                    <span className="marquee-tech-label">{t.label}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
