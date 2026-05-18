import type { Brand } from './types.ts'

export const brands: Brand[] = [
  {
    id: 'samsung',
    name: 'Samsung',
    description:
      'Tecnologia clara, confiable y preparada para integrarse a espacios modernos.',
    logoLabel: 'Samsung',
    visualTone: 'cool',
  },
  {
    id: 'lg',
    name: 'LG',
    description:
      'Productos seleccionados por rendimiento, sobriedad visual y soporte.',
    logoLabel: 'LG',
    visualTone: 'neutral',
  },
  {
    id: 'whirlpool',
    name: 'Whirlpool',
    description:
      'Soluciones durables para hogares que necesitan criterio y continuidad.',
    logoLabel: 'Whirlpool',
    visualTone: 'warm',
  },
]

export function getBrandName(brandId: string): string {
  return brands.find((brand) => brand.id === brandId)?.name ?? brandId
}
