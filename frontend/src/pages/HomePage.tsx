import { Link } from 'react-router-dom'
import { ctas } from '../data/ctas.ts'

export function HomePage() {
  return (
    <section className="home-hero">
      <div className="hero-copy">
        <p className="eyebrow">Fabimar 2026</p>
        <h1>Productos y servicios con proposito.</h1>
        <p className="lede">
          Una vidriera digital premium para elegir con criterio, confianza y
          calma.
        </p>
        <div className="hero-actions" aria-label="Caminos principales">
          <Link className="door-card" to="/productos">
            <span>Productos</span>
            <small>Curados por calidad, diseno y confianza.</small>
          </Link>
          <Link className="door-card" to="/servicios">
            <span>Servicios</span>
            <small>Movimiento, precision y compromiso.</small>
          </Link>
        </div>
        <a className="text-link" href={ctas.general.whatsappUrl}>
          Hablar con asesor
        </a>
      </div>
      <div className="hero-image" aria-label="Imagen protagonista placeholder" />
    </section>
  )
}
