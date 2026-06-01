import { Link } from 'react-router-dom'
import { purpose } from '../data/purpose.ts'
import { usePageMeta } from '../hooks/usePageMeta.ts'
import { routes } from '../routes.ts'

export function PurposePage() {
  usePageMeta({
    title: 'Proposito | Fabimar',
    description:
      'Por que Fabimar elige trabajar con criterio, confianza y vinculo humano. Referencia Human Awakening en lenguaje claro.',
  })

  return (
    <section className="home-hero purpose-page">
      <div className="hero-copy">
        <p className="eyebrow">{purpose.eyebrow}</p>
        <h1>{purpose.title}</h1>
        <p className="manifesto-line">{purpose.manifesto}</p>
        {purpose.paragraphs.map((paragraph) => (
          <p className="lede lede-secondary" key={paragraph}>
            {paragraph}
          </p>
        ))}
        <div className="purpose-block">
          <h2 className="purpose-block__label">{purpose.humanAwakening.label}</h2>
          <p className="purpose-block__body">{purpose.humanAwakening.body}</p>
        </div>
        <div className="hero-actions" aria-label="Volver a explorar Fabimar">
          <Link className="door-card door-card--products" to={routes.products}>
            <span>{purpose.paths.products.label}</span>
            <small>{purpose.paths.products.description}</small>
          </Link>
          <Link className="door-card door-card--services" to={routes.services}>
            <span>{purpose.paths.services.label}</span>
            <small>{purpose.paths.services.description}</small>
          </Link>
        </div>
      </div>
      <div
        className="hero-image hero-image--purpose"
        role="img"
        aria-label="Calma visual Fabimar: proposito, materia y conciencia"
      >
        <img
          className="hero-image__photo"
          src="/fixtures/home/purpose-hero.jpg"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onError={(event) => {
            event.currentTarget.classList.add('hero-image__photo--fallback')
          }}
        />
      </div>
    </section>
  )
}
