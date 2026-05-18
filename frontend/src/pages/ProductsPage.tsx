import { useState } from 'react'
import { BrandCard } from '../components/products/BrandCard.tsx'
import { ProductFilters, type StateFilter } from '../components/products/ProductFilters.tsx'
import { ProductGrid } from '../components/products/ProductGrid.tsx'
import { ProductPreviewPanel } from '../components/products/ProductPreviewPanel.tsx'
import { DetailPanel } from '../components/ui/DetailPanel.tsx'
import { ResponsiveGrid } from '../components/ui/ResponsiveGrid.tsx'
import { Section } from '../components/ui/Section.tsx'
import { brands } from '../data/brands.ts'
import { categories } from '../data/categories.ts'
import { products } from '../data/products.ts'
import { usePageMeta } from '../hooks/usePageMeta.ts'
import { useShowroomPanel } from '../hooks/useShowroomPanel.ts'

type BrowseMode = 'entry' | 'by-product' | 'by-brand'
type ProductBrowseStep = 'categories' | 'products'

export function ProductsPage() {
  usePageMeta({
    title: 'Productos | Fabimar',
    description:
      'Explorá productos por categoría o marca. Nuevos y usados seleccionados con criterio Fabimar.',
  })

  const [browseMode, setBrowseMode] = useState<BrowseMode>('entry')
  const [productStep, setProductStep] = useState<ProductBrowseStep>('categories')
  const [categoryId, setCategoryId] = useState<string | null>(null)
  const [stateFilter, setStateFilter] = useState<StateFilter>('all')
  const [brandFilter, setBrandFilter] = useState<string | 'all'>('all')
  const { selectedProduct, openProduct, closePanel, isOpen } = useShowroomPanel()

  const activeCategory = categories.find((category) => category.id === categoryId)

  const resetToEntry = () => {
    setBrowseMode('entry')
    setProductStep('categories')
    setCategoryId(null)
    setStateFilter('all')
    setBrandFilter('all')
    closePanel()
  }

  const openCategory = (id: string) => {
    setCategoryId(id)
    setProductStep('products')
    setStateFilter('all')
    setBrandFilter('all')
    closePanel()
  }

  return (
    <>
      <Section className="showroom-page">
        <p className="eyebrow">Productos Fabimar</p>
        <h1>Curados por calidad, diseño y confianza.</h1>
        <p className="lede">
          Explorá por categoría o por universo de marca. Cada pieza está seleccionada
          como nueva o usada con criterio Fabimar.
        </p>

        {browseMode === 'entry' ? (
          <ResponsiveGrid className="showroom-entry-grid" aria-label="Formas de explorar">
            <button
              type="button"
              className="door-card door-card--products showroom-entry-card"
              onClick={() => setBrowseMode('by-product')}
            >
              <span>Explorar por Productos</span>
              <small>Categorías, filtros por estado y marca.</small>
            </button>
            <button
              type="button"
              className="door-card door-card--services showroom-entry-card"
              onClick={() => setBrowseMode('by-brand')}
            >
              <span>Explorar por Marcas</span>
              <small>Universo Samsung, LG, Whirlpool y más.</small>
            </button>
          </ResponsiveGrid>
        ) : null}

        {browseMode === 'by-product' && productStep === 'categories' ? (
          <>
            <div className="showroom-toolbar">
              <button type="button" className="text-link" onClick={resetToEntry}>
                Volver al inicio de productos
              </button>
            </div>
            <ResponsiveGrid columns={3} aria-label="Categorías de productos">
              {categories.map((category) => {
                const count = products.filter(
                  (product) => product.categoryId === category.id,
                ).length

                return (
                  <button
                    key={category.id}
                    type="button"
                    className="showroom-category-card surface-card"
                    onClick={() => openCategory(category.id)}
                  >
                    <span className="status-pill">{category.highlight}</span>
                    <h2>{category.name}</h2>
                    <p>{category.description}</p>
                    <span className="showroom-category-card__count">
                      {count} {count === 1 ? 'producto' : 'productos'}
                    </span>
                  </button>
                )
              })}
            </ResponsiveGrid>
          </>
        ) : null}

        {browseMode === 'by-product' && productStep === 'products' && activeCategory ? (
          <>
            <div className="showroom-toolbar">
              <button
                type="button"
                className="text-link"
                onClick={() => {
                  setProductStep('categories')
                  setCategoryId(null)
                  closePanel()
                }}
              >
                Volver a categorías
              </button>
              <p className="eyebrow">{activeCategory.highlight}</p>
              <h2>{activeCategory.name}</h2>
              <p className="lede">{activeCategory.description}</p>
            </div>
            <ProductFilters
              stateFilter={stateFilter}
              brandFilter={brandFilter}
              onStateChange={setStateFilter}
              onBrandChange={setBrandFilter}
            />
            <ProductGrid
              categoryId={categoryId}
              stateFilter={stateFilter}
              brandFilter={brandFilter}
              onSelect={openProduct}
            />
          </>
        ) : null}

        {browseMode === 'by-brand' ? (
          <>
            <div className="showroom-toolbar">
              <button type="button" className="text-link" onClick={resetToEntry}>
                Volver al inicio de productos
              </button>
            </div>
            <ResponsiveGrid columns={3} aria-label="Marcas Fabimar">
              {brands.map((brand) => (
                <BrandCard
                  key={brand.id}
                  brand={brand}
                  productCount={products.filter((product) => product.brandId === brand.id).length}
                />
              ))}
            </ResponsiveGrid>
          </>
        ) : null}
      </Section>

      <DetailPanel
        open={isOpen && Boolean(selectedProduct)}
        onClose={closePanel}
        title={selectedProduct?.name ?? ''}
        eyebrow={selectedProduct?.state}
      >
        {selectedProduct ? <ProductPreviewPanel product={selectedProduct} /> : null}
      </DetailPanel>
    </>
  )
}
