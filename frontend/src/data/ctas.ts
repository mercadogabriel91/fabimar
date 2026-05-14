import type { Cta } from './types.ts'

const fabimarWhatsApp = '5491100000000'

export function createWhatsAppUrl(message: string) {
  const encodedMessage = encodeURIComponent(message)

  return `https://wa.me/${fabimarWhatsApp}?text=${encodedMessage}`
}

export const ctas: Record<string, Cta> = {
  general: {
    label: 'Hablar con asesor',
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero conversar sobre productos y servicios.',
    ),
  },
}
