'use client'

import Image from 'next/image'
import { MessageCircle, Mail, Clock } from 'lucide-react'

interface ContactHeroVisualProps {
  dark: boolean
  rtl: boolean
}

export function ContactHeroVisual({ dark, rtl }: ContactHeroVisualProps) {
  return (
    <div className="contact-showcase-container">
      <div className="art-ambient-glow" aria-hidden="true" />

      {/* Main floating device showcase with scan beam */}
      <div className="contact-device-frame animated-hero-float">
        <Image
          src="/illustrations/hero-contact-3d.jpg"
          alt={
            rtl
              ? 'مستشار تقني ثلاثي الأبعاد يرحب بك مع رسائل واتساب تفاعلية'
              : 'Friendly 3D cartoon technical specialist waving hello with interactive WhatsApp chat bubbles'
          }
          width={720}
          height={480}
          className="contact-device-img"
          priority
        />
        <div className="hero-scan-beam" aria-hidden="true" />
        <div className="art-glass-overlay" />

        {/* Live Active Chat Bubble Simulation */}
        <div className="contact-live-chat-bubble animated-chip-float">
          <div className="live-chat-header">
            <span className="live-dot" />
            <span className="live-chat-sender">
              {rtl ? 'فريق SperaCode الهندسي' : 'SperaCode Engineers'}
            </span>
            <span className="live-chat-time">{rtl ? 'نشط الآن' : 'online'}</span>
          </div>
          <p className="live-chat-msg">
            {rtl
              ? 'أهلاً بك! جاهزون لدراسة فكرتك وتقديم عرض سعر تفصيلي 🚀'
              : 'Hello! Ready to analyze your project scope & send a detailed proposal 🚀'}
          </p>
          <div className="live-typing-indicator" aria-label="Typing">
            <span className="typing-dot" />
            <span className="typing-dot" />
            <span className="typing-dot" />
          </div>
        </div>
      </div>

      {/* Direct Contact Cards Strip Underneath */}
      <div className="contact-features-strip">
        <a
          href="https://wa.me/201515327087"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-direct-card"
        >
          <div className="contact-direct-icon icon-whatsapp">
            <MessageCircle size={18} />
          </div>
          <div className="contact-direct-info">
            <div className="contact-direct-title">
              <span className="live-dot" />
              <strong>{rtl ? 'واتساب مباشر' : 'Direct WhatsApp'}</strong>
            </div>
            <span dir="ltr">01515327087</span>
          </div>
        </a>

        <a
          href="mailto:info.speracode@gmail.com"
          className="contact-direct-card"
        >
          <div className="contact-direct-icon icon-blue">
            <Mail size={18} />
          </div>
          <div className="contact-direct-info">
            <strong>{rtl ? 'البريد الرسمي' : 'Official Email'}</strong>
            <span dir="ltr">info.speracode@gmail.com</span>
          </div>
        </a>

        <div className="contact-direct-card contact-direct-card-static">
          <div className="contact-direct-icon icon-emerald">
            <Clock size={18} />
          </div>
          <div className="contact-direct-info">
            <strong>{rtl ? 'رد فوري 24/7' : 'Rapid Response'}</strong>
            <span>{rtl ? 'دراسة فنية خلال ساعات' : 'Technical proposal in hours'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
