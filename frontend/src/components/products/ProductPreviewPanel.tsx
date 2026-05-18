import { getBrandName } from '../../data/brands.ts'
import type { Product } from '../../data/types.ts'
import { CtaLink } from '../ui/CtaLink.tsx'
import { PrimaryButton } from '../ui/PrimaryButton.tsx'

type ProductPreviewPanelProps = {
  product: Product
}

export function ProductPreviewPanel({ product }: ProductPreviewPanelProps) {
  const isUsed = product.state === 'Usado Seleccionado'

  return (
    <div className="product-preview">
      <div
        className={`product-preview__media product-preview__media--${product.visualTone}${isUsed ? ' product-preview__media--used' : ''}`}
        role="img"
        aria-label={product.name}
      >
        <img
          className="product-preview__image"
          src={product.images[0]}
          alt=""
          loading="lazy"
          decoding="async"
          onError={(event) => {
            event.currentTarget.classList.add('product-preview__image--fallback')
          }}
        />
      </div>
      <p className="lede">{product.benefit}</p>
      <dl className="detail-list">
        <div>
          <dt>Marca</dt>
          <dd>{getBrandName(product.brandId)}</dd>
        </div>
        <div>
          <dt>Estado</dt>
          <dd>{product.state}</dd>
        </div>
        <div>
          <dt>Condicion</dt>
          <dd>{product.condition}</dd>
        </div>
      </dl>
      <div className="product-preview__actions">
        <PrimaryButton href={product.whatsappUrl} external>
          Hablar con asesor
        </PrimaryButton>
        <CtaLink to={`/productos/${product.id}`}>Ver ficha completa</CtaLink>
      </div>
    </div>
  )
}
