import type { ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ctas } from '../../data/ctas.ts'
import { routes } from '../../routes.ts'

type AppShellProps = {
  children: ReactNode
}

const navigationItems = [
  { label: 'Productos', to: routes.products },
  { label: 'Servicios', to: routes.services },
  { label: 'Proposito', to: routes.purpose },
  { label: 'Wishlist', to: routes.wishlist },
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
        <a
          href={ctas.general.whatsappUrl}
          aria-label="Contactar a Fabimar por WhatsApp"
        >
          {ctas.general.label}
        </a>
      </footer>
    </div>
  )
}
