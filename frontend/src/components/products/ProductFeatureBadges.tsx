import type { Product } from '../../data/types.ts'

type ProductFeatureBadgesProps = {
  product: Pick<Product, 'supports360' | 'supports3d'>
}

export function ProductFeatureBadges({ product }: ProductFeatureBadgesProps) {
  if (!product.supports360 && !product.supports3d) {
    return null
  }

  return (
    <ul className="product-feature-badges" aria-label="Experiencias visuales futuras">
      {product.supports360 ? (
        <li>
          <span className="product-feature-badge">
            Vista 360°
            <span className="product-feature-badge__soon">Próximamente</span>
          </span>
        </li>
      ) : null}
      {product.supports3d ? (
        <li>
          <span className="product-feature-badge">
            Modelo 3D
            <span className="product-feature-badge__soon">Próximamente</span>
          </span>
        </li>
      ) : null}
    </ul>
  )
}
