'use client'

import Image from 'next/image'
import { ShieldCheck, Award, Users, Sparkles, Code2 } from 'lucide-react'

interface AboutHeroVisualProps {
  dark: boolean
  rtl: boolean
}

export function AboutHeroVisual({ dark, rtl }: AboutHeroVisualProps) {
  return (
    <div className="page-hero-art-wrapper about-art-wrapper">
      <div className="art-ambient-glow" aria-hidden="true" />

      {/* Main branded hero visual */}
      <div className="art-main-device animated-hero-float">
        <Image
          src="/illustrations/hero-about-3d.jpg"
          alt={
            rtl
              ? 'فريق هندسي وتقني ثلاثي الأبعاد يتعاون حول طاولة تخطيط رقمية'
              : 'Collaborative 3D cartoon engineering team working around an interactive tech planning table'
          }
          width={720}
          height={480}
          className="art-device-img"
          priority
        />
        <div className="art-glass-overlay" />
      </div>

      {/* Floating Animated Badge 1: 100% Code Ownership */}
      <div className="floating-hero-chip chip-top-start animated-chip-float">
        <span className="chip-icon-circle chip-blue">
          <ShieldCheck size={16} />
        </span>
        <div className="chip-text-group">
          <strong>{rtl ? '100% ملكية الكود' : '100% Code Ownership'}</strong>
          <small>{rtl ? 'المشروع ملكك بالكامل بدون اشتراكات' : 'Full IP transfer to you'}</small>
        </div>
      </div>

      {/* Floating Animated Badge 2: Multi-country engineering footprint */}
      <div className="floating-hero-chip chip-top-end animated-chip-float-delay">
        <span className="chip-icon-circle chip-cyan">
          <Award size={16} />
        </span>
        <div className="chip-text-group">
          <strong>{rtl ? 'حضور إقليمي موثوق' : 'Regional Footprint'}</strong>
          <small>{rtl ? 'مصر • السعودية • الإمارات • الكويت' : 'EG • KSA • UAE • KW'}</small>
        </div>
      </div>

      {/* Floating Animated Badge 3: Engineering Team & SLA */}
      <div className="floating-hero-chip chip-bottom-center animated-chip-float-alt">
        <span className="chip-icon-circle chip-emerald">
          <Users size={16} />
        </span>
        <div className="chip-text-group">
          <strong>{rtl ? 'فريق هندسي متخصص' : 'Senior Engineering Team'}</strong>
          <small>{rtl ? 'ضمان فني ودعم مستمر بعد التسليم' : 'Ongoing warranty & support'}</small>
        </div>
      </div>
    </div>
  )
}
