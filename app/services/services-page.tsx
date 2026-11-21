'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Bot,
  Check,
  CheckCircle2,
  Clock,
  Code2,
  Cpu,
  FileCheck2,
  Globe2,
  HelpCircle,
  Home,
  Layers,
  LayoutGrid,
  Lock,
  Mail,
  Menu,
  Moon,
  PenTool,
  Phone,
  QrCode,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  Wrench,
  X,
  Zap,
} from 'lucide-react'
import { SperaLogo } from '@/components/spera-logo'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloatingButton } from '@/components/whatsapp-floating-button'
import { ServicesHeroVisual } from '@/components/hero-visuals/services-hero-visual'
import { buildWhatsAppUrl } from '@/app/site-config'

type Locale = 'ar' | 'en'

interface ServicesPageProps {
  initialLocale?: Locale
}

export default function ServicesPage({ initialLocale = 'ar' }: ServicesPageProps) {
  const [locale] = useState<Locale>(initialLocale)
  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [selectedFilter, setSelectedFilter] = useState('all')
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
    window.location.assign(rtl ? '/en/services' : '/services')
  }

  function toggleTheme() {
    const next = !dark
    setDark(next)
    localStorage.setItem('speracode-theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
  }

  const navItems = [
    { label: rtl ? 'الرئيسية' : 'Home', href: homeHref },
    { label: rtl ? 'خدماتنا' : 'Services', href: servicesHref, isCurrent: true },
    { label: rtl ? 'أعمالنا' : 'Portfolio', href: projectsHref },
    { label: rtl ? 'من نحن' : 'About', href: aboutHref },
    { label: rtl ? 'اتصل بنا' : 'Contact', href: contactHref },
  ]

  const servicesData = [
    {
      id: 'web',
      category: 'web',
      icon: Globe2,
      badge: rtl ? 'الأكثر طلباً' : 'MOST REQUESTED',
      title: rtl ? 'تصميم وتطوير المواقع والمتاجر الإلكترونية' : 'Web Applications & Modern Websites',
      subtitle: rtl
        ? 'مواقع شركات ومتاجر إلكترونية بتصميم شيك وسرعة فائقة تجذب زوارك وتحولهم لعملاء'
        : 'Fast, responsive corporate websites and e-commerce stores designed to attract and convert customers',
      description: rtl
        ? 'نبني لك موقعاً سريعاً وسهل التصفح على أي موبايل أو كمبيوتر، مجهّز للظهور في بحث جوجل، مع لوحة تحكم بسيطة تقدر تعدل منها منتجاتك وأسعارك بنفسك بدون أي تعقيد.'
        : 'We build clean, ultra-fast websites and web applications tailored to your business, optimized for Google search and equipped with an easy admin panel to manage content without technical hassle.',
      features: rtl
        ? [
            'سرعة تصفح فائقة تفتح في ثوانٍ وتريح الزائر',
            'تهيئة كاملة للظهور في أولى نتائج بحث جوجل لجلب عملاء جدد',
            'لوحة تحكم سهلة جداً تقدر تضيف منها وتعدل الأسعار والمحتوى بكل بساطة',
            'شكل متناسق ومريح 100% على شاشات الموبايل والتابلت والكمبيوتر',
          ]
        : [
            'Sub-second load speeds providing a smooth, effortless browsing experience',
            'Built-in Google SEO optimization to attract organic customers consistently',
            'Intuitive admin dashboard so you can update prices and products easily',
            '100% responsive and tested across all smartphone and tablet screens',
          ],
      deliverables: rtl
        ? ['الموقع بالكامل وكوده ملكك أنت 100%', 'شهادة حماية وأمان SSL مجانية', 'ربط بوابات الدفع الإلكتروني والشحن', 'شرح وتدريب كامل لطريقة إدارة الموقع']
        : ['100% Full Code Ownership', 'Free SSL Security & Edge CDN', 'Payment & Shipping Gateway Integration', 'Full Video Walkthrough & Admin Training'],
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Cloud Hosting'],
      contactParam: 'web',
    },
    {
      id: 'mobile',
      category: 'mobile',
      icon: Smartphone,
      badge: rtl ? 'سهل وسريع' : 'FAST & NATIVE',
      title: rtl ? 'تطبيقات الهواتف الذكية (iOS & Android)' : 'Mobile Applications (iOS & Android)',
      subtitle: rtl
        ? 'تطبيقات سهلة وخفيفة لعملائك تخليهم يتصفحوا خدماتك ويطلبوا بلمسة واحدة'
        : 'Intuitive iOS & Android apps that make buying and booking seamless for your users',
      description: rtl
        ? 'بنبرمجلك تطبيق جوال احترافي للآيفون والأندرويد بتجربة استخدام ممتعة، مع إشعارات مباشرة على جوال العميل بأحدث عروضك، وإمكانية الدفع بسهولة وبأعلى درجات الأمان.'
        : 'We engineer intuitive mobile apps for iPhone and Android with smooth navigation, instant push notifications for your offers, and secure in-app payments.',
      features: rtl
        ? [
            'تطبيق واحد سريع يعمل بسلاسة على كل أجهزة الآيفون والأندرويد',
            'إرسال إشعارات فورية لجميع العملاء بعروضك ومنتجاتك الجديدة في أي وقت',
            'دفع إلكتروني سهل وسريع (Apple Pay، فيزا، ماستركارد، مدى)',
            'تصفح سريع يفتح بدون تهنيج حتى لو سرعة الإنترنت عند العميل ضعيفة',
          ]
        : [
            'Unified app delivering a fluid native experience on iPhone and Android',
            'Rich push notifications to broadcast your latest promotions instantly',
            'Frictionless checkout with Apple Pay, cards, and digital wallets',
            'Optimized data caching so it loads fast even on weak connections',
          ],
      deliverables: rtl
        ? ['نشر التطبيق رسمياً على App Store وGoogle Play', 'لوحة تحكم سهلة لإدارة المنتجات وإرسال الإشعارات', 'تصميم كامل وعصري لشاشات وأيقونة التطبيق', 'فترة ضمان ومتابعة فنية مجانية بعد النشر']
        : ['App Store & Google Play Publishing', 'Simple Admin Panel for Notifications', 'App Icon & Screen Artwork Assets', 'Post-Launch Warranty & Support'],
      tech: ['Flutter', 'Firebase', 'App Store', 'Google Play', 'Cloud APIs'],
      contactParam: 'mobile',
    },
    {
      id: 'qr',
      category: 'qr',
      icon: QrCode,
      badge: rtl ? 'حصري للمطاعم والكافيهات' : 'FOR RESTAURANTS & CAFÉS',
      title: rtl ? 'المنيو الرقمي التفاعلي بالباركود QR' : 'Interactive Digital QR Menu',
      subtitle: rtl
        ? 'منيو إلكتروني سريع لمطعمك أو كافيهك يوفّر مصاريف الطباعة وتوصلك الطلبات ع الواتساب'
        : 'Scannable digital menu that saves print expenses and sends orders directly to WhatsApp',
      description: rtl
        ? 'الحل الأسهل لمطعمك؛ زبونك يمسح الكود بكاميرا الموبايل فيفتح المنيو بالصور والأسعار في لحظة، يختار وجبته ويبعت الطلب برقم الطاولة مباشرة ع الواتساب بدون انتظار الويتر.'
        : 'Transform your dining experience: guests scan a table QR code with their camera to browse high-res photos and prices, then submit their order directly to your WhatsApp staff.',
      features: rtl
        ? [
            'يفتح فوراً بكاميرا الموبايل بدون تحميل أي برنامج أو تسجيل دخول',
            'تعديل فوري للأسعار والأطباق المتوفرة في ثوانٍ ومن موبايلك في أي وقت',
            'قائمة طعام ثنائية اللغة (عربي وإنجليزي) بصور واضحة وأقسام مرتبة',
            'الزبون يجمع طلبه ويبعته مباشرة على رقم واتساب المطعم مع رقم الطاولة أو التوصيل',
          ]
        : [
            'Opens instantly via phone camera with zero app download or login friction',
            'Update prices, seasonal dishes, and sold-out items in seconds from your phone',
            'Full bilingual Arabic & English interface with mouth-watering photos',
            'Direct WhatsApp ordering with table numbers, guest notes, and delivery address',
          ],
      deliverables: rtl
        ? ['رابط دائم للمنيو وتصميم ستاندات QR احترافية للطاولات', 'لوحة تحكم خفيفة وسهلة لتعديل الأصناف والأسعار في أي لحظة', 'استضافة سريعة ودعم فني مستمر بدون توقف', 'إحصائيات لعدد الزوار والأصناف الأكثر طلباً']
        : ['Permanent Menu URL & Print-Ready QR Assets', 'Ultra-Simple Mobile Admin Portal', 'Fast Cloud Hosting & SSL Included', 'Visitor & Top-Selling Dish Analytics'],
      tech: ['Instant QR', 'Mobile PWA', 'WhatsApp Business', 'Cloud Hosting'],
      contactParam: 'qr',
    },
    {
      id: 'ai',
      category: 'ai',
      icon: Bot,
      badge: rtl ? 'رد آلي ذكي' : 'SMART AI ASSISTANT',
      title: rtl ? 'المساعد الذكي والرد الآلي 24 ساعة' : 'AI Assistant & Automated Support',
      subtitle: rtl
        ? 'رد آلي ذكي يجاوب على استفسارات عملائك في الموقع والواتساب ويجمعلك طلباتهم بدون تأخير'
        : 'Smart 24/7 AI chatbot that answers inquiries on your site and WhatsApp instantly',
      description: rtl
        ? 'مساعد ذكي يشتغل مكان موظف خدمة العملاء 24 ساعة بدون انقطاع، فاهم كل خدماتك وتفاصيل أسعارك، يجاوب على العميل فوراً ويرتبلك مواعيده وطلباته عشان ما تضيعش أي فرصة بيع.'
        : 'An intelligent AI assistant trained on your products and business details, answering client inquiries 24/7 on your website and WhatsApp so you never miss a sales lead.',
      features: rtl
        ? [
            'رد فوري على أسئلة زباينك في الموقع والواتساب على مدار 24 ساعة بدون انتظار',
            'مدرب على خدمات وأسعار وتفاصيل شركتك ويجاوب بدقة وبأسلوب محترم',
            'يجمع بيانات العملاء المهتمين وينبه فريق مبيعاتك فوراً لمتابعتهم',
            'يريح موظفيك من تكرار الإجابة على نفس الأسئلة كل يوم ويوفر وقتك',
          ]
        : [
            'Instant 24/7 automated responses on your website and WhatsApp channels',
            'Trained on your company services, pricing, and FAQs for accurate replies',
            'Captures customer contact details and alerts your sales team immediately',
            'Frees your staff from answering repetitive questions daily',
          ],
      deliverables: rtl
        ? ['مساعد ذكي مربوط بموقعك أو رقم الواتساب بالكامل', 'لوحة تحكم لمراجعة سجل المحادثات وتطوير الإجابات', 'تدريب المساعد وإضافة أي معلومات جديدة في أي وقت', 'شرح كامل لطريقة إدارة وتعديل الردود']
        : ['Trained AI Assistant Connected to Site & WhatsApp', 'Conversation History & Analytics Portal', 'Ongoing Knowledge Base Updates', 'Simple Admin Controls'],
      tech: ['AI Chatbots', 'Automations', 'WhatsApp API', 'Secure Cloud'],
      contactParam: 'ai',
    },
    {
      id: 'erp',
      category: 'erp',
      icon: Code2,
      badge: rtl ? 'بدون اشتراك شهري' : 'CUSTOM & NO SUBSCRIPTION',
      title: rtl ? 'برامج إدارة وفواتير ومخازن مخصصة' : 'Custom Management & Invoicing Software',
      subtitle: rtl
        ? 'برنامج إدارة مفصّل على طريقة شغلك، ينظم فواتيرك ومخازنك بدون اشتراكات شهرية'
        : 'Tailored management tools for your inventory and invoicing without recurring user fees',
      description: rtl
        ? 'ودّع البرامج الجاهزة المعقدة اللي بتكلفك اشتراك شهري لكل موظف؛ بنبنيلك برنامج سحابي بسيط تدير بيه مبيعاتك ومخازنك وحساباتك من أي مكان وبكل أمان.'
        : 'Escape rigid off-the-shelf software with expensive per-user fees. We build a clean, custom management system tailored to your exact invoicing, inventory, and sales workflows.',
      features: rtl
        ? [
            'إدارة بسيطة للمخازن، الفواتير، المبيعات، والمشتريات ونقاط البيع السريعة',
            'تحديد صلاحيات واضحة لكل موظف عشان تحافظ على سرية أرقامك وبياناتك',
            'تقارير يومية وشهرية توضح أرباحك ومصروفاتك وحجم مبيعاتك بضغطة زر',
            'البرنامج ملكك أنت بالكامل بدون أي اشتراك شهري متكرر لكل مستخدم',
          ]
        : [
            'Simple inventory, invoicing, sales, and fast POS checkout management',
            'Granular staff permissions so your financial data remains confidential',
            'One-click daily and monthly reports for revenue, expenses, and profits',
            'Zero recurring monthly per-user fees—the entire system is 100% yours',
          ],
      deliverables: rtl
        ? ['برنامج سحابي آمن وسهل مخصص لطريقة عملك', 'تدريب كامل ومباشر لموظفيك على استخدام البرنامج', 'نسخ احتياطي يومي لحماية كل فواتيرك وبياناتك', 'دعم فني وضمان متواصل لخدمتك في أي وقت']
        : ['Tailored Cloud Software for Your Workflow', 'Hands-on Staff Training & Onboarding', 'Automated Daily Backups Protecting Invoices', 'Direct Ongoing Support & Warranty'],
      tech: ['PostgreSQL', 'Node.js', 'Next.js', 'Cloud Hosting', 'Secure Backups'],
      contactParam: 'erp',
    },
    {
      id: 'uiux',
      category: 'uiux',
      icon: PenTool,
      badge: rtl ? 'تصميم مريح وجذاب' : 'INTUITIVE DESIGN',
      title: rtl ? 'تصميم واجهات وتجربة المستخدم UI/UX' : 'UI/UX Interface & Experience Design',
      subtitle: rtl
        ? 'تصميم عصري ومريح للعين يخلي العميل يرتاح لموقعك وتطبيقك ويشتري بسهولة'
        : 'Modern, user-friendly designs that build trust and make buying effortless',
      description: rtl
        ? 'قبل ما نكتب سطر كود واحد، بنصمملك شكل الشاشات ونوريك شكل موقعك أو تطبيقك وتجربه كأنك عميل، عشان نتأكد إن كل حاجة واضحة وسهلة ومريحة في الاستخدام.'
        : 'Before writing any code, we craft interactive prototypes so you can test every screen as a user, ensuring the flow is simple, beautiful, and drives sales.',
      features: rtl
        ? [
            'ترتيب الشاشات عشان العميل يوصل للطلب والشراء بأقل خطوات ممكنة',
            'تصميم شاشات تفاعلية حية تقدر تجربها وتضغط عليها بنفسك قبل البرمجة',
            'اختيار ألوان وخطوط مريحة للعين وتليق بهوية وقيمة شركتك',
            'تصميم متناسق تماماً ومريح للقراءة على كافة أحجام شاشات الموبايل والكمبيوتر',
          ]
        : [
            'User-friendly layouts that guide visitors to purchase with minimal clicks',
            'Clickable interactive prototypes to preview and test before development',
            'Harmonious fonts and colors that elevate your brand image',
            'Clean, balanced typography optimized for mobile readability',
          ],
      deliverables: rtl
        ? ['ملفات التصميم الأصلية كاملة بجودة عالية', 'نسخة تجريبية تفاعلية تقدر تجربها بنفسك على الموبايل', 'دليل الألوان والخطوط والأيقونات الخاصة بشركتك', 'أيقونات وصور مجهزة ومحسنة للسرعة']
        : ['Complete Figma Source Design Files', 'Clickable Interactive Prototype for Testing', 'Brand Color & Typography Style Guide', 'Production-Ready Web Assets'],
      tech: ['Figma', 'Interactive Prototypes', 'Visual Identity', 'Mobile Design'],
      contactParam: 'uiux',
    },
    {
      id: 'infra',
      category: 'infra',
      icon: Wrench,
      badge: rtl ? 'أمان وسرعة دائمة' : 'HOSTING & SUPPORT',
      title: rtl ? 'الاستضافة السحابية والبريد الرسمي والدعم' : 'Cloud Hosting, Official Email & Support',
      subtitle: rtl
        ? 'استضافة سريعة لموقعك وإيميلات رسمية باسم شركتك مع حماية مستمرة من الأعطال'
        : 'Fast cloud hosting, branded company email, and ongoing support keeping your site live',
      description: rtl
        ? 'بنريّح بالك من مشاكل السيرفرات والأعطال؛ بنوفّرلك استضافة سحابية سريعة جداً ما تفصلش، وإيميلات رسمية (مثل info@yourcompany.com)، مع دعم فني سريع في ضهرك دايماً.'
        : 'Enjoy complete peace of mind. We provide high-speed cloud hosting that stays online 24/7, professional email accounts on your domain, and rapid ongoing support.',
      features: rtl
        ? [
            'استضافة سريعة وثابتة تعمل طوال الوقت بدون أي بطء أو انقطاع',
            'نسخ احتياطي أوتوماتيكي يومياً لحماية ملفاتك وقواعد بياناتك من أي ضياع',
            'إيميلات رسمية باسم موقعك (name@company.com) لبناء ثقة أكبر مع عملائك',
            'حماية متكاملة ضد الفيروسات ومحاولات الاختراق وهجمات التعطيل',
          ]
        : [
            'Rock-solid cloud hosting ensuring 24/7 uptime without slowdowns',
            'Automated daily backups safeguarding your data and files',
            'Official branded mailboxes (name@yourcompany.com) for professional trust',
            'Round-the-clock security protection and SSL certificates',
          ],
      deliverables: rtl
        ? ['متابعة شهرية مستمرة لسرعة وأمان الموقع', 'دعم فني سريع ومباشر لحل أي استفسار في نفس اليوم', 'تجديد النطاقات وشهادات الأمان مجاناً وبانتظام', 'فحص مستمر لسرعة التصفح لضمان أفضل تجربة للمستخدم']
        : ['Monthly Site Health & Speed Summary', 'Rapid Direct Support Channel', 'Automatic Domain & SSL Renewals', 'Continuous Performance Checkups'],
      tech: ['Cloud Hosting', 'SSL Security', 'Professional Email', 'Daily Backups'],
      contactParam: 'support',
    },
  ]

  const filterTabs = [
    { id: 'all', label: rtl ? 'جميع الخدمات' : 'All Services' },
    { id: 'web', label: rtl ? 'مواقع ومنصات' : 'Web & Platforms' },
    { id: 'mobile', label: rtl ? 'تطبيقات الجوال' : 'Mobile Apps' },
    { id: 'qr', label: rtl ? 'منيو QR للمطاعم' : 'QR Menu' },
    { id: 'ai', label: rtl ? 'ذكاء اصطناعي' : 'AI & Bots' },
    { id: 'erp', label: rtl ? 'أنظمة ERP' : 'Custom ERP' },
    { id: 'uiux', label: rtl ? 'تصميم UI/UX' : 'UI/UX Design' },
    { id: 'infra', label: rtl ? 'استضافة وصيانة' : 'Cloud & SLA' },
  ]

  const filteredServices =
    selectedFilter === 'all'
      ? servicesData
      : servicesData.filter((s) => s.category === selectedFilter)

  const guarantees = [
    {
      icon: ShieldCheck,
      title: rtl ? 'ملكية الكود والأصول 100%' : '100% IP & Code Ownership',
      desc: rtl
        ? 'تنتقل إليك كافة حقوق الشيفرة المصدرية والتصاميم بالكامل دون أي قيود أو اشتراكات مخفية.'
        : 'All intellectual property, source code, and design files transfer entirely to you upon completion.',
    },
    {
      icon: Clock,
      title: rtl ? 'التزام صارم بمواعيد التسليم' : 'Guaranteed Delivery Timelines',
      desc: rtl
        ? 'نعمل وفق جدول زمني دقيق ومراحل تسليم أسبوعية واضحة بدون تأخير أو مفاجآت.'
        : 'Structured agile milestones with strict launch deadlines committed in writing.',
    },
    {
      icon: Sparkles,
      title: rtl ? 'ضمان فني ودعم بعد الإطلاق' : 'Post-Launch Technical Warranty',
      desc: rtl
        ? 'فترة ضمان مجانية مشمولة مع كل مشروع لضمان استقرار الأداء وخلو الشيفرة من أي أعطال.'
        : 'Complimentary post-launch warranty included with every delivery to guarantee peak stability.',
    },
    {
      icon: FileCheck2,
      title: rtl ? 'تسعير شفاف وعقود رسمية' : 'Transparent Milestone Pricing',
      desc: rtl
        ? 'عروض أسعار مفصلة ومكتوبة بدفعات مرحلية حسب الإنجاز الفعلي ودون أي تكاليف خفية.'
        : 'Detailed itemized quotes with milestone-based installments and zero hidden fees.',
    },
  ]

  const serviceFaqs = rtl
    ? [
        {
          q: 'كيف نحدد الخدمة الأنسب لاحتياجات مشروعي؟',
          a: 'يقوم مهندسونا بعقد جلسة استكشاف فنية سريعة لدراسة أهدافك وميزانيتك والفئة المستهدفة، ثم نقترح عليك البنية التحتية والتقنيات المثالية التي تحقق أعلى عائد استثماري.',
        },
        {
          q: 'هل يمكنني البدء بنسخة أولية (MVP) ثم تطويرها لاحقاً؟',
          a: 'نعم بالتأكيد. نبني جميع مشاريعنا بمعمارية برمجية قابلة للتوسع (Scalable Architecture)، مما يتيح لك إطلاق نسخة أولية سريعة واختبار السوق ثم إضافة خصائص جديدة بسلاسة.',
        },
        {
          q: 'كيف يتم سداد تكلفة المشروع؟',
          a: 'نعتمد نظام الدفعات المرحلية المرتبط بنسب الإنجاز الفعلي (Milestone-based Payments) لضمان راحة العميل وشفافية التنفيذ.',
        },
        {
          q: 'هل تقدمون الدعم الفني بعد تسليم المشروع؟',
          a: 'نعم، يتضمن كل مشروع فترة ضمان ودعم فني مجانية بعد الإطلاق، كما نقدم خطط صيانة ودعم تشغيلي شهرية وسنوية (SLA) لضمان استمرار موقعك أو تطبيقك بأعلى كفاءة.',
        },
      ]
    : [
        {
          q: 'How do we determine the best technical stack for my project?',
          a: 'Our solution architects conduct a complimentary discovery session to analyze your operational goals, budget, and timeline, then recommend the optimal scalable architecture.',
        },
        {
          q: 'Can we start with a Minimum Viable Product (MVP) and scale later?',
          a: 'Absolutely. We design and engineer with clean modular architecture, allowing you to launch quickly, test market demand, and incrementally add features without rewrites.',
        },
        {
          q: 'How does milestone-based payment work?',
          a: 'We operate on transparent milestone installments tied directly to tangible project deliverables, giving you complete visibility and control over project progression.',
        },
        {
          q: 'What kind of support is included after product launch?',
          a: 'Every project comes with a complimentary post-launch warranty. We also offer monthly and annual SLA maintenance contracts covering proactive monitoring, backups, and security patches.',
        },
      ]

  return (
    <div className={`site services-page ${dark ? 'theme-dark' : ''}`} dir={rtl ? 'rtl' : 'ltr'}>
      {/* Top Reading Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      <a className="skip-link" href="#services-main">
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

      <main id="services-main">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="container">
            <div className="services-hero-grid">
              <div className="services-hero-content">
                <div className="hero-kicker-stack">
                  <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href={homeHref} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <Home size={14} />
                      <span>{rtl ? 'الرئيسية' : 'Home'}</span>
                    </Link>
                    <span aria-hidden="true">/</span>
                    <span>{rtl ? 'خدماتنا التقنية' : 'Services'}</span>
                  </nav>

                  <div className="eyebrow">
                    <span className="live-dot" />
                    {rtl ? 'خدمات هندسية وحلول رقمية شاملة' : 'FULL-CYCLE SOFTWARE & AI SOLUTIONS'}
                  </div>
                </div>

                <h1>
                  {rtl ? (
                    <>
                      خدمات وحلول برمجية عملية
                      <br />
                      <em>تساعدك تكبّر شغلك وتوصل لعملاء أكثر</em>
                    </>
                  ) : (
                    <>
                      Practical digital solutions
                      <br />
                      <em>crafted to grow your sales & audience</em>
                    </>
                  )}
                </h1>

                <p className="services-hero-lead">
                  {rtl
                    ? 'من المواقع السريعة وتطبيقات الموبايل إلى المنيو الذكي والرد الآلي، بنبنيلك أدوات عملية وسهلة تخدم زباينك وتكبّر مبيعاتك بكل بساطة.'
                    : 'From high-speed websites and mobile apps to smart QR menus and automated chatbots, we build simple, reliable tools that delight your clients and scale your business.'}
                </p>

                {/* Guarantees Strip */}
                <div className="services-guarantees-strip">
                  <div className="strip-item">
                    <CheckCircle2 size={18} className="strip-icon" />
                    <span>{rtl ? 'ملكية الكود 100%' : '100% Code Ownership'}</span>
                  </div>
                  <div className="strip-item">
                    <CheckCircle2 size={18} className="strip-icon" />
                    <span>{rtl ? 'ضمان فني مجاني' : 'Free Post-Launch Warranty'}</span>
                  </div>
                  <div className="strip-item">
                    <CheckCircle2 size={18} className="strip-icon" />
                    <span>{rtl ? 'التزام صارم بالمواعيد' : 'On-Time Delivery'}</span>
                  </div>
                  <div className="strip-item">
                    <CheckCircle2 size={18} className="strip-icon" />
                    <span>{rtl ? 'دعم فني مستمر SLA' : 'SLA Technical Support'}</span>
                  </div>
                </div>
              </div>

              <div className="services-hero-visual">
                <ServicesHeroVisual dark={dark} rtl={rtl} />
              </div>
            </div>
          </div>
        </section>

        {/* Services Showcase Section */}
        <section className="services-catalog-section section">
          <div className="container">
            {/* Filter Pills */}
            <div className="services-filter-bar">
              <span className="services-filter-title">
                <LayoutGrid size={16} />
                {rtl ? 'تصفية حسب المجال:' : 'Filter category:'}
              </span>
              <div className="services-filter-pills" role="tablist">
                {filterTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={selectedFilter === tab.id}
                    className={`filter-tab-pill ${selectedFilter === tab.id ? 'active' : ''}`}
                    onClick={() => setSelectedFilter(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Detailed Cards Grid */}
            <div className="services-detailed-grid">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon
                const quoteUrl = `${contactHref}?service=${service.contactParam}`
                const whatsappUrl = buildWhatsAppUrl(
                  rtl
                    ? `مرحبًا SperaCode، أود الاستفسار وطلب عرض سعر لخدمة: ${service.title}`
                    : `Hello SperaCode, I would like to inquire about: ${service.title}`
                )

                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className="service-detail-card"
                    data-reveal
                  >
                    <div className="service-card-header">
                      <div className="service-card-icon-wrap">
                        <IconComponent size={26} />
                      </div>
                      <div className="service-card-meta">
                        <span className="service-card-badge">{service.badge}</span>
                        <h2 className="service-card-title">{service.title}</h2>
                      </div>
                    </div>

                    <p className="service-card-subtitle">{service.subtitle}</p>
                    <p className="service-card-desc">{service.description}</p>

                    {/* Key Features */}
                    <div className="service-card-section">
                      <h3 className="service-section-heading">
                        <Zap size={16} />
                        {rtl ? 'أبرز المزايا الفنية:' : 'Key Technical Capabilities:'}
                      </h3>
                      <ul className="service-features-list">
                        {service.features.map((feat, fi) => (
                          <li key={fi}>
                            <Check size={16} className="feature-check" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="service-card-section">
                      <h3 className="service-section-heading">
                        <FileCheck2 size={16} />
                        {rtl ? 'مخرجات التسليم (ما الذي تحصل عليه؟):' : 'What is Included (Deliverables):'}
                      </h3>
                      <div className="service-deliverables-tags">
                        {service.deliverables.map((deliv, di) => (
                          <span key={di} className="deliverable-tag">
                            <CheckCircle2 size={13} />
                            {deliv}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="service-card-tech">
                      <span className="tech-label">{rtl ? 'التقنيات المستخدمة:' : 'Tech stack:'}</span>
                      <div className="tech-pills">
                        {service.tech.map((t, ti) => (
                          <span key={ti} className="tech-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="service-card-footer">
                      <a
                        className="button button-primary service-action-btn"
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Phone size={15} />
                        {rtl ? 'طلب واستفسار عبر واتساب' : 'Inquire on WhatsApp'}
                      </a>
                      <Link className="button button-secondary service-action-btn" href={quoteUrl}>
                        {rtl ? 'تخصيص المواصفات' : 'Custom Brief'}
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* 4 Pillars Guarantees Section */}
        <section className="section guarantees-section">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                <ShieldCheck size={16} />
                {rtl ? 'معايير الجودة والضمان' : 'THE SPERACODE GUARANTEE'}
              </div>
              <h2 className="section-title">
                {rtl ? 'لماذا تختار الشراكة مع سبيرا كود؟' : 'Engineering Integrity You Can Rely On'}
              </h2>
              <p className="section-subtitle">
                {rtl
                  ? 'نؤمن بأن البرمجيات الناجحة لا تعتمد فقط على جودة الكود، بل على الثقة، الشفافية، والالتزام الصارم بما اتفقنا عليه.'
                  : 'We believe exceptional software goes beyond clean syntax—it requires absolute transparency, client ownership, and contractual punctuality.'}
              </p>
            </div>

            <div className="guarantees-grid">
              {guarantees.map((item, gi) => {
                const ItemIcon = item.icon
                return (
                  <div key={gi} className="guarantee-card" data-reveal>
                    <div className="guarantee-icon">
                      <ItemIcon size={24} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services FAQs */}
        <section className="section services-faq-section">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', maxWidth: '680px', marginInline: 'auto' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                <HelpCircle size={16} />
                {rtl ? 'إجابات على استفساراتك' : 'COMMON QUESTIONS'}
              </div>
              <h2 className="section-title">
                {rtl ? 'الأسئلة الشائعة حول خدماتنا' : 'Frequently Asked Questions'}
              </h2>
            </div>

            <div className="faq-grid" style={{ maxWidth: '880px', marginInline: 'auto' }}>
              {serviceFaqs.map((faq, fidx) => (
                <div key={fidx} className="faq-card" data-reveal>
                  <h3 className="faq-question">
                    <span className="faq-number">0{fidx + 1}</span>
                    {faq.q}
                  </h3>
                  <p className="faq-answer">{faq.a}</p>
                </div>
              ))}
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
