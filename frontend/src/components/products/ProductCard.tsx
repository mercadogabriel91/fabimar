import { getBrandName } from '../../data/brands.ts'
import type { Product } from '../../data/types.ts'
import { productCardImageSizes } from '../../lib/imageSizes.ts'

type ProductCardProps = {
  product: Product
  onSelect: (productId: string) => void
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const isUsed = product.state === 'Usado Seleccionado'
  const classes = [
    'showroom-product-card',
    `showroom-product-card--${product.visualTone}`,
    isUsed ? 'showroom-product-card--used' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type="button"
      className={classes}
      onClick={() => onSelect(product.id)}
      aria-label={`Ver ${product.name}, ${product.state}`}
    >
      <div className="showroom-product-card__media">
        <img
          className="showroom-product-card__image"
          src={product.images[0]}
          alt=""
          sizes={productCardImageSizes}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            event.currentTarget.classList.add('showroom-product-card__image--fallback')
          }}
        />
        <span
          className={`status-pill${isUsed ? ' status-pill--used' : ''}`}
          aria-hidden="true"
        >
          {product.state}
        </span>
      </div>
      <span className="showroom-product-card__brand">{getBrandName(product.brandId)}</span>
      <h2>{product.name}</h2>
      <p>{product.benefit}</p>
    </button>
  )
}
