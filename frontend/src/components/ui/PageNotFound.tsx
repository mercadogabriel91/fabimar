import type { ReactNode } from 'react'

type PageNotFoundProps = {
  eyebrow: string
  title: string
  children: ReactNode
}

export function PageNotFound({ eyebrow, title, children }: PageNotFoundProps) {
  return (
    <section className="page-section page-not-found" role="status">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children}
    </section>
  )
}
