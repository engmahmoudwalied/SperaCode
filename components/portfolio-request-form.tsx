'use client'

import { useState, type FormEvent } from 'react'
import {
  User,
  Phone,
  Mail,
  FileText,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  RotateCcw,
  Globe2,
  ShoppingBag,
  Smartphone,
  QrCode,
  Code2,
} from 'lucide-react'
import { buildWhatsAppUrl, SITE_PHONE_LOCAL } from '@/app/site-config'
import { sendViaEmailJS } from '@/app/contact/emailjs-client'
import { CustomSelect, type SelectOption } from '@/components/custom-select'

interface PortfolioRequestFormProps {
  rtl: boolean
}

export function PortfolioRequestForm({ rtl }: PortfolioRequestFormProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [projectType, setProjectType] = useState(rtl ? 'موقع إلكتروني أو منصة' : 'Website or Platform')
  const [details, setDetails] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const projectTypes = rtl
    ? [
        'موقع إلكتروني أو منصة',
        'متجر إلكتروني متكامل',
        'تطبيق جوال (iOS & Android)',
        'المنيو الرقمي QR',
        'نظام إداري مخصص (ERP)',
        'فكرة أخرى',
      ]
    : [
        'Website or Platform',
        'E-Commerce Store',
        'Mobile App (iOS & Android)',
        'Interactive QR Menu',
        'Custom ERP / Business System',
        'Other Vision',
      ]

  const projectTypeOptions: SelectOption[] = rtl
    ? [
        {
          value: 'موقع إلكتروني أو منصة',
          label: 'موقع إلكتروني أو منصة',
          icon: Globe2,
          hint: 'مواقع فائقة السرعة، بوابات رقمية، وتطبيقات ويب سحابية',
        },
        {
          value: 'متجر إلكتروني متكامل',
          label: 'متجر إلكتروني متكامل',
          icon: ShoppingBag,
          hint: 'كتالوج منتجات، سلة شراء، ودفع إلكتروني',
        },
        {
          value: 'تطبيق جوال (iOS & Android)',
          label: 'تطبيق جوال (iOS & Android)',
          icon: Smartphone,
          hint: 'تطبيقات هجينة وأصيلة للأجهزة الذكية',
        },
        {
          value: 'المنيو الرقمي QR',
          label: 'المنيو الرقمي QR',
          icon: QrCode,
          hint: 'منيو ذكي للمطاعم مع طلب مباشر على واتساب',
        },
        {
          value: 'نظام إداري مخصص (ERP)',
          label: 'نظام إداري مخصص (ERP)',
          icon: Code2,
          hint: 'إدارة الفواتير، المخازن، والعمليات بدقة',
        },
        {
          value: 'فكرة أخرى',
          label: 'فكرة أخرى',
          icon: Sparkles,
          hint: 'حل برمجي أو فكرة رقمية جديدة مفصلة لطلبك',
        },
      ]
    : [
        {
          value: 'Website or Platform',
          label: 'Website or Platform',
          icon: Globe2,
          hint: 'High-speed cloud platforms & web applications',
        },
        {
          value: 'E-Commerce Store',
          label: 'E-Commerce Store',
          icon: ShoppingBag,
          hint: 'Full checkout, payments, and product catalog',
        },
        {
          value: 'Mobile App (iOS & Android)',
          label: 'Mobile App (iOS & Android)',
          icon: Smartphone,
          hint: 'Seamless cross-platform apps for iPhone & Android',
        },
        {
          value: 'Interactive QR Menu',
          label: 'Interactive QR Menu',
          icon: QrCode,
          hint: 'Smart restaurant menu with direct WhatsApp ordering',
        },
        {
          value: 'Custom ERP / Business System',
          label: 'Custom ERP / Business System',
          icon: Code2,
          hint: 'Tailored invoicing, inventory, HR, and ops suite',
        },
        {
          value: 'Other Vision',
          label: 'Other Vision',
          icon: Sparkles,
          hint: 'Custom software architecture tailored to your goals',
        },
      ]

  const formattedWhatsAppBrief = rtl
    ? `طلب ديمو وعرض فني من سابقة الأعمال (SperaCode):
━━━━━━━━━━━━━━━━━━━━
👤 الاسم: ${name || '—'}
📱 الهاتف / واتساب: ${phone || '—'}
✉️ البريد الإلكتروني: ${email || '—'}
🎯 نوع المشروع: ${projectType}
📝 تفاصيل المتطلبات:
${details || '—'}
━━━━━━━━━━━━━━━━━━━━
⚡ مطلوب إرسال الديمو المبدئي على الإيميل والمتابعة هنا عبر الواتساب.`
    : `Portfolio Demo & Quote Request (SperaCode):
━━━━━━━━━━━━━━━━━━━━
👤 Name: ${name || '—'}
📱 Phone / WhatsApp: ${phone || '—'}
✉️ Email: ${email || '—'}
🎯 Project Type: ${projectType}
📝 Project Scope:
${details || '—'}
━━━━━━━━━━━━━━━━━━━━
⚡ Please send the initial demo to my email & follow up via WhatsApp.`

  const whatsappUrl = buildWhatsAppUrl(formattedWhatsAppBrief)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name.trim() || !phone.trim() || !email.trim()) return

    setIsSending(true)

    try {
      await sendViaEmailJS({
        name,
        phone,
        email,
        service: projectType,
        message: details || 'طلب ديمو تجريبي وعرض سعر من سابقة الأعمال',
        summaryText: formattedWhatsAppBrief,
        sourcePage: 'صفحة سابقة الأعمال (Portfolio Demo Request)',
      })
    } catch (err) {
      console.warn('[Portfolio Form EmailJS Submit]', err)
    } finally {
      setIsSending(false)
      setSubmitted(true)
    }
  }

  function handleReset() {
    setName('')
    setPhone('')
    setEmail('')
    setDetails('')
    setSubmitted(false)
  }

  return (
    <section className="portfolio-request-section" id="request-demo">
      <div className="container">
        <div className="portfolio-request-card" data-reveal>
          {/* Header */}
          <div className="portfolio-request-header">
            <span className="section-kicker">
              <Sparkles size={14} aria-hidden="true" />
              {rtl ? 'طلب ديمو تجريبي وعرض فني' : 'Request Demo & Proposal'}
            </span>
            <h2>
              {rtl
                ? 'أعجبتك سابقة أعمالنا؟ اطلب ديمو تجريبي لمشروعك الآن'
                : 'Inspired by Our Work? Request a Tailored Demo Now'}
            </h2>
            <p>
              {rtl
                ? 'املأ بياناتك ونبذة عن فكرتك بالأسفل، وسيتولى مهندسونا إعداد تصور عملي ونموذج تجريبي (Demo) يُرسل مباشرة إلى إيميلك للمعاينة والتقييم.'
                : 'Share your project vision below. Our engineering team will prepare an interactive demo preview and proposal delivered directly to your email.'}
            </p>
          </div>

          {submitted ? (
            /* Success State */
            <div className="portfolio-request-success">
              <div className="success-icon-badge">
                <CheckCircle2 size={42} />
              </div>
              <h3>
                {rtl
                  ? 'تم استلام تفاصيل مشروعك بنجاح! 🚀'
                  : 'Your Demo Request Has Been Received! 🚀'}
              </h3>
              <p className="success-main-text">
                {rtl ? (
                  <>
                    شكراً لك أستاذ <strong>{name}</strong>. تم تسجيل طلبك وتوجيهه للفريق الهندسي،
                    وسيصلك الديمو والعرض الفني المبدئي على بريدك الإلكتروني:{' '}
                    <span className="success-email-highlight" dir="ltr">
                      {email}
                    </span>{' '}
                    خلال <strong>يوم عمل واحد (24 ساعة)</strong>.
                  </>
                ) : (
                  <>
                    Thank you, <strong>{name}</strong>! Your scope has been queued with our engineers.
                    The prototype demo and detailed proposal will be sent to:{' '}
                    <span className="success-email-highlight" dir="ltr">
                      {email}
                    </span>{' '}
                    within <strong>1 business day (24 hours)</strong>.
                  </>
                )}
              </p>

              {/* Action Buttons */}
              <div className="success-actions-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary success-wa-btn"
                >
                  <MessageCircle size={18} />
                  <span>
                    {rtl
                      ? 'متابعة فورية مع المهندس المسؤول عبر واتساب'
                      : 'Instant Follow-Up via WhatsApp'}
                  </span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="button button-secondary"
                >
                  <RotateCcw size={16} />
                  <span>{rtl ? 'إرسال مشروع آخر' : 'Submit Another Project'}</span>
                </button>
              </div>

              <div className="success-reassurance-chip">
                <Clock size={15} />
                <span>
                  {rtl
                    ? 'متوسط الرد الهندسي المباشر: أقل من 15 دقيقة عبر واتساب.'
                    : 'Average engineering response time: under 15 minutes on WhatsApp.'}
                </span>
              </div>
            </div>
          ) : (
            /* Interactive Request Form */
            <form onSubmit={handleSubmit} className="portfolio-request-form-body">
              <div className="portfolio-form-grid">
                {/* Name */}
                <div className="contact-field">
                  <label htmlFor="req-name" className="portfolio-field-label">
                    <User size={15} className="portfolio-label-icon" aria-hidden="true" />
                    <span>
                      {rtl ? 'الاسم الكريم' : 'Full Name'} <b className="required-star">*</b>
                    </span>
                  </label>
                  <input
                    id="req-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={rtl ? 'ما هو اسمك الكريم؟' : 'e.g. Alex Morgan'}
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div className="contact-field">
                  <label htmlFor="req-phone" className="portfolio-field-label">
                    <Phone size={15} className="portfolio-label-icon" aria-hidden="true" />
                    <span>
                      {rtl ? 'رقم الهاتف أو الواتساب' : 'Phone / WhatsApp'} <b className="required-star">*</b>
                    </span>
                  </label>
                  <input
                    id="req-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={rtl ? `مثال: ${SITE_PHONE_LOCAL} أو كود الدولة` : '+20 151 532 7087'}
                    dir="ltr"
                  />
                </div>

                {/* Email */}
                <div className="contact-field">
                  <label htmlFor="req-email" className="portfolio-field-label">
                    <Mail size={15} className="portfolio-label-icon" aria-hidden="true" />
                    <span>
                      {rtl ? 'البريد الإلكتروني لاستلام الديمو' : 'Email Address'} <b className="required-star">*</b>
                    </span>
                  </label>
                  <input
                    id="req-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    dir="ltr"
                  />
                </div>

                {/* Project Type */}
                <div className="contact-field">
                  <label htmlFor="req-type" className="portfolio-field-label">
                    <Sparkles size={15} className="portfolio-label-icon" aria-hidden="true" />
                    <span>{rtl ? 'نوع المشروع المطلوب' : 'Project Category'}</span>
                  </label>
                  <CustomSelect
                    id="req-type"
                    name="projectType"
                    value={projectType}
                    onChange={(val) => setProjectType(val)}
                    placeholder={rtl ? 'اختر نوع المشروع المطلوب...' : 'Select project category...'}
                    options={projectTypeOptions}
                    rtl={rtl}
                    required
                  />
                </div>

                {/* Project Details */}
                <div className="contact-field contact-field-full">
                  <label htmlFor="req-details" className="portfolio-field-label">
                    <FileText size={15} className="portfolio-label-icon" aria-hidden="true" />
                    <span>{rtl ? 'تفاصيل فكرة المشروع أو المميزات المطلوبة' : 'Project Scope & Features'}</span>
                  </label>
                  <textarea
                    id="req-details"
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder={
                      rtl
                        ? 'اكتب نبذة عن فكرتك، الصفحات أو الخصائص التي تريدها، أمثلة لمواقع مشابهة تعجبك، أو أي متطلبات خاصة...'
                        : 'Describe your vision, core features, target audience, reference sites, or any specific requirements...'
                    }
                  />
                </div>
              </div>

              {/* Explicit Reassurance Callout Box */}
              <div className="portfolio-demo-promise-box">
                <div className="promise-box-icon">
                  <Clock size={22} />
                </div>
                <div className="promise-box-content">
                  <strong>
                    {rtl
                      ? '⏱️ التزام SperaCode السريع للديمو التجريبي:'
                      : '⏱️ SperaCode 24h Rapid Prototype Guarantee:'}
                  </strong>
                  <p>
                    {rtl
                      ? 'خلال يوم عمل واحد (24 ساعة)، سيتم تجهيز وإرسال نموذج عملي أو نسخة تجريبية (Demo) مبدئية مع تفاصيل التكلفة مباشرة إلى بريدك الإلكتروني، مع متابعة وتنسيق مباشر وفوري عبر الواتساب للإجابة عن استفساراتك خطوة بخطوة.'
                      : 'Within 1 business day (24 hours), a tailored interactive demo preview and proposal will be sent directly to your email, followed by instant coordination via WhatsApp to answer all questions.'}
                  </p>
                </div>
              </div>

              {/* Submit Button & Trust Line */}
              <div className="portfolio-form-actions">
                <button
                  type="submit"
                  disabled={isSending}
                  className="button button-primary portfolio-submit-btn"
                >
                  {isSending ? (
                    <span>{rtl ? 'جاري الإرسال وتأكيد الطلب...' : 'Transmitting Scope...'}</span>
                  ) : (
                    <>
                      <span>{rtl ? 'إرسال التفاصيل واستلام الديمو 🚀' : 'Send Scope & Request Demo 🚀'}</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                <div className="portfolio-form-trust">
                  <ShieldCheck size={16} />
                  <span>
                    {rtl
                      ? 'استشارة أولية وديمو تجريبي مجاني 100% بدون أي التزام مالي.'
                      : '100% complimentary discovery demo with zero financial obligation.'}
                  </span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
