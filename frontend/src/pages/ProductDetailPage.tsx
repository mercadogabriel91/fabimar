import { Link, useParams } from 'react-router-dom'
import { ProductDetailActions } from '../components/products/ProductDetailActions.tsx'
import { ProductDetailMeta } from '../components/products/ProductDetailMeta.tsx'
import { ProductFeatureBadges } from '../components/products/ProductFeatureBadges.tsx'
import { ProductGallery } from '../components/products/ProductGallery.tsx'
import { getBrandName } from '../data/brands.ts'
import { getProductById } from '../data/products.ts'
import { usePageMeta } from '../hooks/usePageMeta.ts'
import { routes } from '../routes.ts'

export function ProductDetailPage() {
  const { productId } = useParams()
  const product = productId ? getProductById(productId) : undefined

  usePageMeta({
    title: product ? `${product.name} | Fabimar` : 'Producto | Fabimar',
    description: product?.benefit,
  })

  if (!product) {
    return (
      <section className="page-section">
        <p className="eyebrow">Producto</p>
        <h1>Producto no encontrado</h1>
        <Link className="text-link" to={routes.products}>
          Volver a productos
        </Link>
      </section>
    )
  }

  const isUsed = product.state === 'Usado Seleccionado'

  return (
    <section className="page-section detail-layout product-detail">
      <ProductGallery
        images={product.images}
        name={product.name}
        visualTone={product.visualTone}
        isUsed={isUsed}
      />
      <div className="product-detail__copy">
        <Link className="text-link" to={routes.products}>
          Volver a productos
        </Link>
        <p className="eyebrow">{getBrandName(product.brandId)}</p>
        <span className={`status-pill${isUsed ? ' status-pill--used' : ''}`}>{product.state}</span>
        <h1>{product.name}</h1>
        <p className="lede">{product.benefit}</p>
        <p className="product-detail__description">{product.description}</p>
        <ProductFeatureBadges product={product} />
        <ProductDetailMeta product={product} showBrand={false} />
        <ProductDetailActions product={product} />
      </div>
    </section>
  )
}
