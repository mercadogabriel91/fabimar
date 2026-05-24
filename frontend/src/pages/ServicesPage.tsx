import { ServiceCard } from '../components/services/ServiceCard.tsx'
import { PrimaryButton } from '../components/ui/PrimaryButton.tsx'
import { ResponsiveGrid } from '../components/ui/ResponsiveGrid.tsx'
import { Section } from '../components/ui/Section.tsx'
import { ctas } from '../data/ctas.ts'
import { services } from '../data/services.ts'
import { usePageMeta } from '../hooks/usePageMeta.ts'

export function ServicesPage() {
  usePageMeta({
    title: 'Servicios | Fabimar',
    description:
      'Mudanzas, distribucion B2B, logistica integral y transporte especializado con criterio operativo Fabimar.',
  })

  return (
    <Section className="services-section services-showroom">
      <p className="eyebrow">Servicios Fabimar</p>
      <h1>Movimiento, precision y compromiso.</h1>
      <p className="lede">
        Operaciones sobrias para empresas y hogares que necesitan confianza, claridad
        y seguimiento humano en cada etapa.
      </p>
      <ResponsiveGrid columns={2} aria-label="Servicios Fabimar">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </ResponsiveGrid>
      <div className="services-showroom__cta">
        <PrimaryButton href={ctas.general.whatsappUrl} external>
          {ctas.general.label}
        </PrimaryButton>
      </div>
    </Section>
  )
}
