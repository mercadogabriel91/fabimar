import { getBrandName } from '../../data/brands.ts'
import type { Product } from '../../data/types.ts'

type ProductDetailMetaProps = {
  product: Product
  showBrand?: boolean
}

export function ProductDetailMeta({ product, showBrand = true }: ProductDetailMetaProps) {
  return (
    <dl className="detail-list">
      {showBrand ? (
        <div>
          <dt>Marca</dt>
          <dd>{getBrandName(product.brandId)}</dd>
        </div>
      ) : null}
      <div>
        <dt>Estado</dt>
        <dd>{product.state}</dd>
      </div>
      <div>
        <dt>Condicion</dt>
        <dd>{product.condition}</dd>
      </div>
      <div>
        <dt>Garantia</dt>
        <dd>{product.warranty}</dd>
      </div>
    </dl>
  )
}
