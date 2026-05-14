import { Link } from 'react-router-dom'

type PagePlaceholderProps = {
  eyebrow: string
  title: string
  description: string
  primaryLabel?: string
  primaryTo?: string
}

export function PagePlaceholder({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
}: PagePlaceholderProps) {
  return (
    <section className="page-section placeholder-section">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lede">{description}</p>
      {primaryLabel && primaryTo ? (
        <Link className="text-link" to={primaryTo}>
          {primaryLabel}
        </Link>
      ) : null}
    </section>
  )
}
