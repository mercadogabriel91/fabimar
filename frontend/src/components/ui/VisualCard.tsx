import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type VisualCardProps = {
  title: string
  description?: string
  eyebrow?: string
  href?: string
  to?: string
  className?: string
  children?: ReactNode
}

export function VisualCard({
  title,
  description,
  eyebrow,
  href,
  to,
  className = '',
  children,
}: VisualCardProps) {
  const classes = ['surface-card', className].filter(Boolean).join(' ')

  const content = (
    <>
      {eyebrow ? <span className="status-pill">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
      {children}
    </>
  )

  if (to) {
    return (
      <Link className={classes} to={to}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    )
  }

  return <article className={classes}>{content}</article>
}
