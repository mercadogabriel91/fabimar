import { Link } from 'react-router-dom'
import { brands } from '../data/brands.ts'
import { categories } from '../data/categories.ts'
import { products } from '../data/products.ts'

export function ProductsPage() {
  return (
    <section className="page-section">
      <p className="eyebrow">Productos Fabimar</p>
      <h1>Curados por calidad, diseno y confianza.</h1>
      <p className="lede">
        Estructura inicial para explorar por productos, marcas y estado:
        nuevos o usados seleccionados.
      </p>

      <div className="route-grid" aria-label="Categorias iniciales">
        {categories.map((category) => (
          <article className="surface-card" key={category.id}>
            <p className="eyebrow">{category.highlight}</p>
            <h2>{category.name}</h2>
            <p>{category.description}</p>
          </article>
        ))}
      </div>

      <div className="route-grid" aria-label="Productos iniciales">
        {products.map((product) => (
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

      <div className="brand-strip" aria-label="Marcas iniciales">
        {brands.map((brand) => (
          <Link key={brand.id} to={`/marcas/${brand.id}`}>
            {brand.name}
          </Link>
        ))}
      </div>
    </section>
  )
}
