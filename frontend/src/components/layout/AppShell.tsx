import type { ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

type AppShellProps = {
  children: ReactNode
}

const navigationItems = [
  { label: 'Productos', to: '/productos' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Proposito', to: '/proposito' },
  { label: 'Wishlist', to: '/wishlist' },
]

export function AppShell({ children }: AppShellProps) {
  const location = useLocation()

  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink className="brand-mark" to="/" aria-label="Ir al inicio">
          FABIMAR
        </NavLink>
        <nav className="site-nav" aria-label="Principal">
          {navigationItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="route-stage" key={location.pathname}>
        {children}
      </main>

      <footer className="site-footer">
        <p>Productos y servicios con proposito.</p>
        <a href="https://wa.me/" aria-label="Contactar a Fabimar por WhatsApp">
          Hablar con asesor
        </a>
      </footer>
    </div>
  )
}
