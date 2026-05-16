import type { ReactNode } from 'react'

type PrimaryButtonProps = {
  children: ReactNode
  href: string
  className?: string
  external?: boolean
}

export function PrimaryButton({
  children,
  href,
  className = '',
  external = false,
}: PrimaryButtonProps) {
  const classes = ['primary-button', className].filter(Boolean).join(' ')

  return (
    <a
      className={classes}
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
