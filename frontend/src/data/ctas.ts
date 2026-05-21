import type { Cta } from './types.ts'

const fabimarWhatsApp = '+5555555555555'

export function createWhatsAppUrl(message: string) {
  const encodedMessage = encodeURIComponent(message)

  return `https://wa.me/${fabimarWhatsApp}?text=${encodedMessage}`
}

export function createProductWhatsAppUrl(productName: string) {
  return createWhatsAppUrl(`Hola Fabimar, quiero consultar por ${productName}.`)
}

export const ctas: Record<string, Cta> = {
  general: {
    label: 'Hablar con asesor',
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero conversar sobre productos y servicios.',
    ),
  },
}
