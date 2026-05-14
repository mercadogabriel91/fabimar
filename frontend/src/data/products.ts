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
    images: ['/fixtures/products/samsung-family-hub-01.jpg'],
    supports360: true,
    supports3d: false,
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero consultar por la Family Hub Premium.',
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
    images: ['/fixtures/products/lg-dual-inverter-01.jpg'],
    supports360: false,
    supports3d: false,
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero consultar por el LG Dual Inverter Select.',
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
    images: ['/fixtures/products/whirlpool-silent-care-01.jpg'],
    supports360: false,
    supports3d: true,
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero consultar por la Silent Care Series.',
    ),
  },
]
