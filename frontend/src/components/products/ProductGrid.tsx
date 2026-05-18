import { products } from '../../data/products.ts'
import { filterProducts } from '../../lib/productFilters.ts'
import type { Product } from '../../data/types.ts'
import { ProductCard } from './ProductCard.tsx'
import type { StateFilter } from './ProductFilters.tsx'
import { ResponsiveGrid } from '../ui/ResponsiveGrid.tsx'

type ProductGridProps = {
  categoryId?: string | null
  brandId?: string | null
  stateFilter: StateFilter
  brandFilter: string | 'all'
  onSelect: (productId: string) => void
  emptyMessage?: string
}

export function ProductGrid({
  categoryId,
  brandId,
  stateFilter,
  brandFilter,
  onSelect,
  emptyMessage = 'No hay productos con estos filtros. Probá ampliar la búsqueda.',
}: ProductGridProps) {
  const filtered = filterProducts(products, {
    categoryId,
    brandId,
    state: stateFilter,
  }).filter((product) => brandFilter === 'all' || product.brandId === brandFilter)

  if (filtered.length === 0) {
    return (
      <div className="showroom-empty" role="status">
        <p className="lede">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <ResponsiveGrid columns={3} aria-label="Productos">
      {filtered.map((product: Product) => (
        <ProductCard key={product.id} product={product} onSelect={onSelect} />
      ))}
    </ResponsiveGrid>
  )
}
