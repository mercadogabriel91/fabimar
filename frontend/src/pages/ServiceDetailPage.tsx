import { Link, useParams } from 'react-router-dom'
import { services } from '../data/services.ts'

export function ServiceDetailPage() {
  const { serviceId } = useParams()
  const service = services.find((item) => item.id === serviceId)

  if (!service) {
    return (
      <section className="page-section">
        <p className="eyebrow">Servicio</p>
        <h1>Servicio no encontrado</h1>
        <Link className="text-link" to="/servicios">
          Volver a servicios
        </Link>
      </section>
    )
  }

  return (
    <section className="page-section detail-layout services-section">
      <div className="detail-media" aria-label={`Imagen de ${service.name}`} />
      <div>
        <p className="eyebrow">Servicio Fabimar</p>
        <h1>{service.name}</h1>
        <p className="lede">{service.description}</p>
        <ul className="benefit-list">
          {service.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <p className="scope-copy">{service.geographicScope}</p>
        <a className="primary-button" href={service.whatsappUrl}>
          Solicitar presupuesto
        </a>
      </div>
    </section>
  )
}
