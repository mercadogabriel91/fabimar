import { useWishlist } from '../../hooks/useWishlist.ts'
import type { Product } from '../../data/types.ts'
import { CtaLink } from '../ui/CtaLink.tsx'
import { PrimaryButton } from '../ui/PrimaryButton.tsx'

type ProductDetailActionsProps = {
  product: Product
  showFullPageLink?: boolean
}

export function ProductDetailActions({
  product,
  showFullPageLink = false,
}: ProductDetailActionsProps) {
  const { has, add } = useWishlist()
  const inWishlist = has(product.id)

  return (
    <div className="product-detail-actions">
      <PrimaryButton href={product.whatsappUrl} external>
        Hablar con asesor
      </PrimaryButton>
      <button
        type="button"
        className={`secondary-button${inWishlist ? ' secondary-button--active' : ''}`}
        onClick={() => add(product.id)}
        disabled={inWishlist}
        aria-pressed={inWishlist}
      >
        {inWishlist ? 'En wishlist' : 'Agregar a wishlist'}
      </button>
      {showFullPageLink ? (
        <CtaLink to={`/productos/${product.id}`}>Ver ficha completa</CtaLink>
      ) : null}
    </div>
  )
}
