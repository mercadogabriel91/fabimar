import { createWhatsAppUrl } from './ctas.ts'
import type { Product } from './types.ts'

export const products: Product[] = [
  {
    id: 'samsung-family-hub',
    name: 'Family Hub Premium',
    categoryId: 'heladeras',
    brandId: 'samsung',
    state: 'Nuevo',
    condition: 'Equipo nuevo en caja cerrada.',
    warranty: '24 meses de asistencia Fabimar post compra.',
    benefit: 'Una heladera protagonista, pensada para ordenar y elevar la cocina.',
    description:
      'Pantalla central, organización visual y una presencia que ordena la cocina sin gritar.',
    images: [
      '/fixtures/products/samsung-family-hub-01.jpg',
      '/fixtures/products/samsung-family-hub-02.jpg',
      '/fixtures/products/samsung-family-hub-03.jpg',
    ],
    visualTone: 'cool',
    supports360: true,
    supports3d: false,
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero consultar por la Family Hub Premium.',
    ),
  },
  {
    id: 'samsung-bespoke-cool',
    name: 'Bespoke Cool Select',
    categoryId: 'heladeras',
    brandId: 'samsung',
    state: 'Usado Seleccionado',
    condition: 'Inspeccionado, sanitizado y certificado por Fabimar.',
    warranty: 'Garantia Fabimar sobre funcionamiento inicial.',
    benefit: 'Diseno modular con una segunda vida impecable.',
    description:
      'Modularidad Bespoke con una segunda vida revisada, lista para integrarse a tu cocina.',
    images: [
      '/fixtures/products/samsung-bespoke-cool-01.jpg',
      '/fixtures/products/samsung-bespoke-cool-02.jpg',
    ],
    visualTone: 'cool',
    supports360: false,
    supports3d: false,
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero consultar por el Samsung Bespoke Cool Select.',
    ),
  },
  {
    id: 'lg-dual-inverter',
    name: 'Dual Inverter Select',
    categoryId: 'climatizacion',
    brandId: 'lg',
    state: 'Usado Seleccionado',
    condition: 'Revisado, reacondicionado y listo para una nueva etapa.',
    warranty: 'Garantia Fabimar sobre funcionamiento inicial.',
    benefit: 'Confort eficiente con una segunda vida cuidada.',
    description:
      'Climatización eficiente y silenciosa, seleccionada para rendir sin comprometer el ambiente.',
    images: [
      '/fixtures/products/lg-dual-inverter-01.jpg',
      '/fixtures/products/lg-dual-inverter-02.jpg',
    ],
    visualTone: 'neutral',
    supports360: false,
    supports3d: false,
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero consultar por el LG Dual Inverter Select.',
    ),
  },
  {
    id: 'lg-artcool-mirror',
    name: 'Artcool Mirror',
    categoryId: 'climatizacion',
    brandId: 'lg',
    state: 'Nuevo',
    condition: 'Equipo nuevo con documentacion completa.',
    warranty: '24 meses de asistencia Fabimar post compra.',
    benefit: 'Presencia espejada y climatizacion silenciosa para living.',
    description:
      'Frente espejado y flujo suave para living premium donde el equipo desaparece en la arquitectura.',
    images: [
      '/fixtures/products/lg-artcool-mirror-01.jpg',
      '/fixtures/products/lg-artcool-mirror-02.jpg',
      '/fixtures/products/lg-artcool-mirror-01.jpg',
    ],
    visualTone: 'neutral',
    supports360: true,
    supports3d: false,
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero consultar por el LG Artcool Mirror.',
    ),
  },
  {
    id: 'whirlpool-silent-care',
    name: 'Silent Care Series',
    categoryId: 'tecnologia',
    brandId: 'whirlpool',
    state: 'Nuevo',
    condition: 'Equipo nuevo con documentacion completa.',
    warranty: '24 meses de asistencia Fabimar post compra.',
    benefit: 'Funcion silenciosa, presencia calma y uso cotidiano simple.',
    description:
      'Tecnología cotidiana con operación silenciosa y una estética cálida que invita al uso diario.',
    images: [
      '/fixtures/products/whirlpool-silent-care-01.jpg',
      '/fixtures/products/whirlpool-silent-care-02.jpg',
      '/fixtures/products/whirlpool-silent-care-01.jpg',
    ],
    visualTone: 'warm',
    supports360: false,
    supports3d: true,
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero consultar por la Silent Care Series.',
    ),
  },
  {
    id: 'whirlpool-6th-sense',
    name: '6th Sense Pro',
    categoryId: 'heladeras',
    brandId: 'whirlpool',
    state: 'Usado Seleccionado',
    condition: 'Seleccionado por rendimiento y estetica conservada.',
    warranty: 'Garantia Fabimar sobre funcionamiento inicial.',
    benefit: 'Control intuitivo y capacidad para familias activas.',
    description:
      'Control intuitivo y capacidad generosa, curado para hogares que necesitan orden y respuesta rápida.',
    images: [
      '/fixtures/products/whirlpool-6th-sense-01.jpg',
      '/fixtures/products/whirlpool-6th-sense-02.jpg',
    ],
    visualTone: 'warm',
    supports360: false,
    supports3d: false,
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero consultar por el Whirlpool 6th Sense Pro.',
    ),
  },
  {
    id: 'samsung-windfree',
    name: 'WindFree Elite',
    categoryId: 'climatizacion',
    brandId: 'samsung',
    state: 'Nuevo',
    condition: 'Equipo nuevo en caja cerrada.',
    warranty: '24 meses de asistencia Fabimar post compra.',
    benefit: 'Flujo suave sin corrientes directas, ideal para descanso.',
    description:
      'Microorificios WindFree para dormir sin corrientes directas, con presencia sobria en el ambiente.',
    images: [
      '/fixtures/products/samsung-windfree-01.jpg',
      '/fixtures/products/samsung-windfree-02.jpg',
      '/fixtures/products/samsung-windfree-01.jpg',
    ],
    visualTone: 'cool',
    supports360: false,
    supports3d: true,
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero consultar por el Samsung WindFree Elite.',
    ),
  },
  {
    id: 'lg-instaview',
    name: 'InstaView Door-in-Door',
    categoryId: 'tecnologia',
    brandId: 'lg',
    state: 'Usado Seleccionado',
    condition: 'Panel tactil verificado y sellos revisados por Fabimar.',
    warranty: 'Garantia Fabimar sobre funcionamiento inicial.',
    benefit: 'Acceso rapido con una pieza usada de alto criterio.',
    description:
      'Dos golpes en el panel InstaView y acceso inmediato, con una pieza usada certificada por Fabimar.',
    images: [
      '/fixtures/products/lg-instaview-01.jpg',
      '/fixtures/products/lg-instaview-02.jpg',
      '/fixtures/products/lg-instaview-01.jpg',
    ],
    visualTone: 'neutral',
    supports360: true,
    supports3d: false,
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero consultar por el LG InstaView Door-in-Door.',
    ),
  },
]

export function getProductById(productId: string): Product | undefined {
  return products.find((product) => product.id === productId)
}
