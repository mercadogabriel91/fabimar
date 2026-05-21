import type { Product } from '../../data/types.ts'
import { ProductDetailActions } from './ProductDetailActions.tsx'
import { ProductDetailMeta } from './ProductDetailMeta.tsx'
import { ProductFeatureBadges } from './ProductFeatureBadges.tsx'
import { ProductGallery } from './ProductGallery.tsx'

type ProductPreviewPanelProps = {
  product: Product
}

export function ProductPreviewPanel({ product }: ProductPreviewPanelProps) {
  const isUsed = product.state === 'Usado Seleccionado'

  return (
    <div className="product-preview">
      <ProductGallery
        images={product.images}
        name={product.name}
        visualTone={product.visualTone}
        isUsed={isUsed}
        compact
      />
      <p className="lede">{product.benefit}</p>
      <p className="product-detail__description">{product.description}</p>
      <ProductFeatureBadges product={product} />
      <ProductDetailMeta product={product} />
      <ProductDetailActions product={product} showFullPageLink />
    </div>
  )
}
