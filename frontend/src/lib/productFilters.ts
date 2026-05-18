import type { Product, ProductState } from '../data/types.ts'

export type ProductFilterState = {
  categoryId?: string | null
  brandId?: string | null
  state?: ProductState | 'all'
}

export function filterProducts(
  items: Product[],
  { categoryId, brandId, state = 'all' }: ProductFilterState,
): Product[] {
  return items.filter((product) => {
    if (categoryId && product.categoryId !== categoryId) {
      return false
    }

    if (brandId && product.brandId !== brandId) {
      return false
    }

    if (state !== 'all' && product.state !== state) {
      return false
    }

    return true
  })
}
