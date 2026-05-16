import type { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  className?: string
  variant?: 'default' | 'centered' | 'subtle'
  as?: 'section' | 'div'
  'aria-label'?: string
}

export function Section({
  children,
  className = '',
  variant = 'default',
  as: Tag = 'section',
  'aria-label': ariaLabel,
}: SectionProps) {
  const classes = ['page-section', `page-section--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} aria-label={ariaLabel}>
      {children}
    </Tag>
  )
}
