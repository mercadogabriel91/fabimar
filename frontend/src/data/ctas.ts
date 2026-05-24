import type { Cta } from './types.ts'

const fabimarWhatsApp = '+5555555555555'

export function createWhatsAppUrl(message: string) {
  const encodedMessage = encodeURIComponent(message)

  return `https://wa.me/${fabimarWhatsApp}?text=${encodedMessage}`
}

export function createProductWhatsAppUrl(productName: string) {
  return createWhatsAppUrl(`Hola Fabimar, quiero consultar por ${productName}.`)
}

type WishlistProductRef = {
  id: string
  name: string
}

type WishlistContactDetails = {
  name: string
  email?: string
  notes?: string
}

export function createWishlistWhatsAppUrl(
  products: WishlistProductRef[],
  contact?: WishlistContactDetails,
) {
  const productLines =
    products.length > 0
      ? products.map((product) => `- ${product.name} (${product.id})`).join('\n')
      : '- (sin productos seleccionados)'

  const contactLines = contact
    ? [
        '',
        'Datos de contacto:',
        `- Nombre: ${contact.name}`,
        contact.email ? `- Email: ${contact.email}` : null,
        contact.notes ? `- Notas: ${contact.notes}` : null,
      ]
        .filter(Boolean)
        .join('\n')
    : ''

  return createWhatsAppUrl(
    `Hola Fabimar, quiero solicitar una cotizacion por los siguientes productos de mi wishlist:\n\n${productLines}${contactLines}\n\nGracias.`,
  )
}

export const ctas: Record<string, Cta> = {
  general: {
    label: 'Hablar con asesor',
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero conversar sobre productos y servicios.',
    ),
  },
}
