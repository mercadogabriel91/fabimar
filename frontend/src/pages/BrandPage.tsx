import { Link, useParams } from 'react-router-dom'
import { brands } from '../data/brands.ts'
import { products } from '../data/products.ts'

export function BrandPage() {
  const { brandId } = useParams()
  const brand = brands.find((item) => item.id === brandId)
  const brandProducts = products.filter((product) => product.brandId === brandId)

  if (!brand) {
    return (
      <section className="page-section">
        <p className="eyebrow">Marca</p>
        <h1>Marca no encontrada</h1>
        <Link className="text-link" to="/productos">
          Volver a productos
        </Link>
      </section>
    )
  }

  return (
    <section className="page-section">
      <p className="eyebrow">Universo de marca</p>
      <h1>{brand.name} by Fabimar</h1>
      <p className="lede">{brand.description}</p>
      <div className="route-grid">
        {brandProducts.map((product) => (
          <Link
            className="surface-card product-card"
            key={product.id}
            to={`/productos/${product.id}`}
          >
            <span className="status-pill">{product.state}</span>
            <h2>{product.name}</h2>
            <p>{product.benefit}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
