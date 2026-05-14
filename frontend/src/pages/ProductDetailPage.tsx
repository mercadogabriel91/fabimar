import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products.ts'

export function ProductDetailPage() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)

  if (!product) {
    return (
      <section className="page-section">
        <p className="eyebrow">Producto</p>
        <h1>Producto no encontrado</h1>
        <Link className="text-link" to="/productos">
          Volver a productos
        </Link>
      </section>
    )
  }

  return (
    <section className="page-section detail-layout">
      <div className="detail-media" aria-label={`Galeria de ${product.name}`} />
      <div>
        <p className="eyebrow">{product.brandId}</p>
        <h1>{product.name}</h1>
        <p className="lede">{product.benefit}</p>
        <dl className="detail-list">
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
        <a className="primary-button" href={product.whatsappUrl}>
          Hablar con asesor
        </a>
      </div>
    </section>
  )
}
