'use client'

import Image from 'next/image'
import { ShieldCheck, Globe2, Sparkles } from 'lucide-react'

interface ProjectsHeroVisualProps {
  dark: boolean
  rtl: boolean
}

export function ProjectsHeroVisual({ dark, rtl }: ProjectsHeroVisualProps) {
  return (
    <div className="projects-showcase-container">
      <div className="art-ambient-glow" aria-hidden="true" />

      {/* Main floating device showcase */}
      <div className="projects-device-frame animated-hero-float">
        <Image
          src="/illustrations/hero-projects-3d.jpg"
          alt={
            rtl
              ? 'معرض مشاريع رقمية ثلاثي الأبعاد مع ملفات مضيئة ونجوم تميز'
              : '3D isometric portfolio showcase with illuminated project blueprints and golden star awards'
          }
          width={720}
          height={480}
          className="projects-device-img"
          priority
        />
        <div className="hero-scan-beam" aria-hidden="true" />
        <div className="art-glass-overlay" />
      </div>

      {/* 3 Value Highlights Strip Directly Underneath */}
      <div className="projects-features-strip" role="list">
        {/* Highlight 1: Tailored Architecture */}
        <div className="project-highlight-card" role="listitem">
          <div className="highlight-icon icon-blue">
            <ShieldCheck size={18} />
          </div>
          <div className="highlight-info">
            <strong>{rtl ? 'ملكية الكود 100%' : 'Full IP Ownership'}</strong>
            <p>{rtl ? 'بدون أي اشتراكات متكررة' : 'Zero recurring license fees'}</p>
          </div>
        </div>

        {/* Highlight 2: Regional Reach */}
        <div className="project-highlight-card" role="listitem">
          <div className="highlight-icon icon-cyan">
            <Globe2 size={18} />
          </div>
          <div className="highlight-info">
            <strong>{rtl ? 'مصر • السعودية • الخليج' : 'Egypt • KSA • Gulf'}</strong>
            <p>{rtl ? 'ثقة واسعة من كبرى الشركات' : 'Trusted regional delivery'}</p>
          </div>
        </div>

        {/* Highlight 3: Warranty */}
        <div className="project-highlight-card" role="listitem">
          <div className="highlight-icon icon-emerald">
            <Sparkles size={18} />
          </div>
          <div className="highlight-info">
            <strong>{rtl ? 'ضمان ودعم فني' : 'Technical Warranty'}</strong>
            <p>{rtl ? 'متابعة مستمرة بعد الإطلاق' : 'Continuous post-launch care'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
