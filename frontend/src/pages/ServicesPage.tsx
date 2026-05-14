import { Link } from 'react-router-dom'
import { services } from '../data/services.ts'

export function ServicesPage() {
  return (
    <section className="page-section services-section">
      <p className="eyebrow">Servicios Fabimar</p>
      <h1>Movimiento, precision y compromiso.</h1>
      <p className="lede">
        Vidriera sobria para mostrar capacidad operativa sin convertir la web
        en una pieza corporativa pesada.
      </p>
      <div className="route-grid">
        {services.map((service) => (
          <Link
            className="surface-card service-card"
            key={service.id}
            to={`/servicios/${service.id}`}
          >
            <h2>{service.name}</h2>
            <p>{service.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
