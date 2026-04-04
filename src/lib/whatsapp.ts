/** Dígitos apenas (DDI + DDD + número), ex.: 5519987556392 */
export const WHATSAPP_DEFAULT_PHONE_DIGITS = '5519987556392'

export const WHATSAPP_PORTFOLIO_MESSAGE =
  'Olá Marcos! Vi seu portfólio e gostaria de conversar sobre um projeto.'

/** Link wa.me usado nos CTAs do portfólio (navbar, hero, etc.). */
export function getPortfolioWhatsAppHref(): string {
  const phone =
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, '') ??
    WHATSAPP_DEFAULT_PHONE_DIGITS
  return `https://wa.me/${phone}?text=${encodeURIComponent(WHATSAPP_PORTFOLIO_MESSAGE)}`
}
