import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type CtaLinkProps = {
  children: ReactNode
  href?: string
  to?: string
  className?: string
  external?: boolean
}

export function CtaLink({
  children,
  href,
  to,
  className = '',
  external = false,
}: CtaLinkProps) {
  const classes = ['text-link', className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return <span className={classes}>{children}</span>
}
