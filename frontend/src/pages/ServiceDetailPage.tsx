import { Link, useParams } from 'react-router-dom'
import { ServiceMedia } from '../components/services/ServiceMedia.tsx'
import { PrimaryButton } from '../components/ui/PrimaryButton.tsx'
import { getServiceById } from '../data/services.ts'
import { usePageMeta } from '../hooks/usePageMeta.ts'

export function ServiceDetailPage() {
  const { serviceId } = useParams()
  const service = serviceId ? getServiceById(serviceId) : undefined

  usePageMeta({
    title: service ? `${service.name} | Fabimar` : 'Servicio | Fabimar',
    description: service?.summary,
  })

  if (!service) {
    return (
      <section className="page-section services-section">
        <p className="eyebrow">Servicio</p>
        <h1>Servicio no encontrado</h1>
        <Link className="text-link" to="/servicios">
          Volver a servicios
        </Link>
      </section>
    )
  }

  return (
    <section className="page-section detail-layout services-section service-detail">
      <ServiceMedia image={service.image} name={service.name} large />
      <div className="service-detail__copy">
        <Link className="text-link" to="/servicios">
          Volver a servicios
        </Link>
        <p className="eyebrow">{service.highlight}</p>
        <h1>{service.name}</h1>
        <p className="lede">{service.description}</p>
        <div className="service-detail__block">
          <h2 className="service-detail__heading">Beneficios</h2>
          <ul className="benefit-list">
            {service.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="service-detail__block">
          <h2 className="service-detail__heading">Alcance geografico</h2>
          <p className="scope-copy">{service.geographicScope}</p>
        </div>
        <PrimaryButton href={service.whatsappUrl} external>
          Solicitar presupuesto
        </PrimaryButton>
      </div>
    </section>
  )
}
