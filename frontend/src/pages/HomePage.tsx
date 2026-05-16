import { Link } from 'react-router-dom'
import { CtaLink } from '../components/ui/CtaLink.tsx'
import { PrimaryButton } from '../components/ui/PrimaryButton.tsx'
import { Section } from '../components/ui/Section.tsx'
import { ctas } from '../data/ctas.ts'
import { usePageMeta } from '../hooks/usePageMeta.ts'

export function HomePage() {
  usePageMeta({
    title: 'Fabimar 2026 | Productos y servicios con proposito',
    description:
      'Vidriera digital premium de productos y servicios Fabimar. Elegir con criterio, confianza y calma.',
  })

  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Fabimar 2026</p>
          <h1>Productos y servicios con proposito.</h1>
          <p className="manifesto-line">Movemos materia. Despertamos conciencia.</p>
          <p className="lede lede-secondary">
            Una vidriera digital premium para elegir con criterio, confianza y
            calma.
          </p>
          <div className="hero-actions" aria-label="Caminos principales">
            <Link className="door-card door-card--products" to="/productos">
              <span>Productos</span>
              <small>Curados por calidad, diseno y confianza.</small>
            </Link>
            <Link className="door-card door-card--services" to="/servicios">
              <span>Servicios</span>
              <small>Movimiento, precision y compromiso.</small>
            </Link>
          </div>
          <div className="hero-cta-row">
            <PrimaryButton href={ctas.general.whatsappUrl}>
              {ctas.general.label}
            </PrimaryButton>
            <CtaLink to="/proposito">Conocer nuestro proposito</CtaLink>
          </div>
        </div>
        <div
          className="hero-image hero-image--home"
          role="img"
          aria-label="Espacio Fabimar: materiales, movimiento y calma visual"
        />
      </section>

      <Section variant="subtle" className="home-purpose-band">
        <p className="eyebrow">Proposito</p>
        <p className="purpose-quote">
          Elegir bien tambien es una forma de conciencia.
        </p>
        <CtaLink to="/proposito">Leer sobre nuestro proposito</CtaLink>
      </Section>
    </>
  )
}
