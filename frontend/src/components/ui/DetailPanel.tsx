import { useEffect, useId, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

type DetailPanelProps = {
  open: boolean
  onClose: () => void
  title: string
  eyebrow?: string
  children: ReactNode
}

export function DetailPanel({
  open,
  onClose,
  title,
  eyebrow,
  children,
}: DetailPanelProps) {
  const titleId = useId()
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) {
      return
    }

    const scrollY = window.scrollY
    const { style } = document.body
    const previous = {
      position: style.position,
      top: style.top,
      width: style.width,
      overflow: style.overflow,
    }

    style.position = 'fixed'
    style.top = `-${scrollY}px`
    style.width = '100%'
    style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      style.position = previous.position
      style.top = previous.top
      style.width = previous.width
      style.overflow = previous.overflow
      window.scrollTo(0, scrollY)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) {
      return
    }

    bodyRef.current?.scrollTo({ top: 0 })
  }, [open, title])

  if (!open) {
    return null
  }

  return createPortal(
    <div className="detail-panel-root">
      <button
        type="button"
        className="detail-panel-backdrop"
        aria-label="Cerrar panel"
        onClick={onClose}
      />
      <aside
        className="detail-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <header className="detail-panel-header">
          <div>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 id={titleId}>{title}</h2>
          </div>
          <button
            type="button"
            className="detail-panel-close"
            aria-label="Cerrar"
            onClick={onClose}
          >
            ×
          </button>
        </header>
        <div className="detail-panel-body" ref={bodyRef}>
          {children}
        </div>
      </aside>
    </div>,
    document.body,
  )
}
