import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PageNotFound } from '../components/ui/PageNotFound.tsx'
import { ProductFilters, type StateFilter } from '../components/products/ProductFilters.tsx'
import { ProductGrid } from '../components/products/ProductGrid.tsx'
import { ProductPreviewPanel } from '../components/products/ProductPreviewPanel.tsx'
import { DetailPanel } from '../components/ui/DetailPanel.tsx'
import { Section } from '../components/ui/Section.tsx'
import { brands } from '../data/brands.ts'
import { products } from '../data/products.ts'
import { usePageMeta } from '../hooks/usePageMeta.ts'
import { useShowroomPanel } from '../hooks/useShowroomPanel.ts'
import { routes } from '../routes.ts'

export function BrandPage() {
  const { brandId } = useParams()
  const brand = brands.find((item) => item.id === brandId)
  const [stateFilter, setStateFilter] = useState<StateFilter>('all')
  const { selectedProduct, openProduct, closePanel, isOpen } = useShowroomPanel()

  usePageMeta({
    title: brand ? `${brand.name} | Fabimar` : 'Marca | Fabimar',
    description: brand?.description,
  })

  if (!brand) {
    return (
      <PageNotFound eyebrow="Marca" title="Marca no encontrada">
        <p className="lede">No encontramos este universo de marca en la demo actual.</p>
        <Link className="text-link" to={routes.products}>
          Volver a productos
        </Link>
      </PageNotFound>
    )
  }

  const brandProductCount = products.filter((product) => product.brandId === brand.id).length

  return (
    <>
      <Section className="showroom-page showroom-page--brand">
        <div className="showroom-toolbar">
          <Link className="text-link" to={routes.products}>
            Volver a productos
          </Link>
        </div>
        <p className="eyebrow">Universo de marca</p>
        <h1>{brand.name} by Fabimar</h1>
        <p className="lede">{brand.description}</p>
        <div
          className={`showroom-brand-hero showroom-brand-hero--${brand.visualTone}`}
          role="img"
          aria-label={`Espacio visual ${brand.name}`}
        >
          <span className="showroom-brand-hero__mark">{brand.logoLabel}</span>
          <span className="showroom-brand-hero__meta">
            {brandProductCount} {brandProductCount === 1 ? 'producto' : 'productos'} curados
          </span>
        </div>

        <ProductFilters
          stateFilter={stateFilter}
          brandFilter={brand.id}
          onStateChange={setStateFilter}
          onBrandChange={() => undefined}
          showBrandFilter={false}
        />
        <ProductGrid
          brandId={brand.id}
          stateFilter={stateFilter}
          brandFilter="all"
          onSelect={openProduct}
          emptyMessage="No hay productos de esta marca con los filtros seleccionados."
        />
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
