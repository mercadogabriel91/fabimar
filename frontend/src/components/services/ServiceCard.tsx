import { Link } from 'react-router-dom'
import type { Service } from '../../data/types.ts'
import { ServiceMedia } from './ServiceMedia.tsx'

type ServiceCardProps = {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link className="service-card" to={`/servicios/${service.id}`}>
      <ServiceMedia image={service.image} name={service.name} />
      <div className="service-card__copy">
        <span className="status-pill status-pill--service">{service.highlight}</span>
        <h2>{service.name}</h2>
        <p>{service.summary}</p>
      </div>
    </Link>
  )
}
