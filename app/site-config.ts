export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, '') || 'https://speracode.com'
export const SITE_NAME = 'SperaCode'
export const SITE_NAME_AR = 'سبيرا كود'

export const SITE_EMAIL = 'info.speracode@gmail.com'
export const SITE_PHONE_LOCAL = '01515327087'
export const SITE_PHONE_INTL = '+201515327087'
export const SITE_PHONE_DISPLAY = '01515327087'
export const SITE_PHONE_DISPLAY_INTL = '+20 151 532 7087'

// WhatsApp phone number in international format without plus (Egypt +20)
export const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/[^0-9]/g, '') || '201515327087'

export function buildWhatsAppUrl(message: string, phone: string = WHATSAPP_PHONE): string {
  const clean = (phone || WHATSAPP_PHONE).replace(/[^0-9]/g, '')
  const encoded = encodeURIComponent(message.trim())
  return clean ? `https://wa.me/${clean}?text=${encoded}` : `https://wa.me/?text=${encoded}`
}
