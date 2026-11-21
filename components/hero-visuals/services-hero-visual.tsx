'use client'

import Image from 'next/image'
import { Globe2, Smartphone, QrCode } from 'lucide-react'

interface ServicesHeroVisualProps {
  dark: boolean
  rtl: boolean
}

export function ServicesHeroVisual({ dark, rtl }: ServicesHeroVisualProps) {
  return (
    <div className="services-showcase-container">
      <div className="art-ambient-glow" aria-hidden="true" />

      {/* Main floating device showcase with SperaCode devices */}
      <div className="services-device-frame animated-hero-float">
        <Image
          src="/illustrations/hero-services-3d.jpg"
          alt={
            rtl
              ? 'مساعد رقمي ثلاثي الأبعاد وتطبيقات ذكية ومنيو تفاعلي'
              : '3D cartoon AI robot, interactive digital store, and QR menu solution'
          }
          width={720}
          height={480}
          className="services-device-img"
          priority
        />
        <div className="hero-scan-beam" aria-hidden="true" />
        <div className="art-glass-overlay" />
      </div>

      {/* 3 Core Services Featured Strip Directly Underneath */}
      <div className="services-features-strip" role="list">
        {/* Service 1: Web & E-Commerce */}
        <div className="service-mini-card" role="listitem">
          <div className="service-mini-icon icon-blue">
            <Globe2 size={18} />
          </div>
          <div className="service-mini-info">
            <strong>{rtl ? 'مواقع سريعة ومتاجر' : 'Fast Websites & Stores'}</strong>
            <p>{rtl ? 'تفتح في ثانية وتجلب عملاء' : 'Sub-second load & SEO ready'}</p>
          </div>
        </div>

        {/* Service 2: Mobile Apps */}
        <div className="service-mini-card" role="listitem">
          <div className="service-mini-icon icon-cyan">
            <Smartphone size={18} />
          </div>
          <div className="service-mini-info">
            <strong>{rtl ? 'تطبيقات iOS & Android' : 'iOS & Android Apps'}</strong>
            <p>{rtl ? 'خفيفة وسهلة للزبون' : 'Fluid native experience'}</p>
          </div>
        </div>

        {/* Service 3: QR Menu & AI */}
        <div className="service-mini-card" role="listitem">
          <div className="service-mini-icon icon-emerald">
            <QrCode size={18} />
          </div>
          <div className="service-mini-info">
            <strong>{rtl ? 'منيو QR ورد آلي ذكي' : 'QR Menu & AI Chatbots'}</strong>
            <p>{rtl ? 'يوفر مصاريف الطباعة ويسرع الطلب' : 'Direct WhatsApp orders'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
