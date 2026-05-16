import type { ReactNode } from 'react'

type ResponsiveGridProps = {
  children: ReactNode
  columns?: 1 | 2 | 3
  className?: string
  'aria-label'?: string
}

export function ResponsiveGrid({
  children,
  columns = 2,
  className = '',
  'aria-label': ariaLabel,
}: ResponsiveGridProps) {
  const classes = ['route-grid', `route-grid--cols-${columns}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} aria-label={ariaLabel}>
      {children}
    </div>
  )
}
