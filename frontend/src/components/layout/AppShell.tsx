import type { ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ctas } from '../../data/ctas.ts'
import { useWishlist } from '../../hooks/useWishlist.ts'
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
  const { count: wishlistCount } = useWishlist()

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Saltar al contenido principal
      </a>
      <header className="site-header">
        <NavLink className="brand-mark" to="/" aria-label="Ir al inicio">
          FABIMAR
        </NavLink>
        <nav className="site-nav" aria-label="Principal">
          {navigationItems.map((item) => {
            const showWishlistCount = item.to === routes.wishlist && wishlistCount > 0

            return (
              <NavLink
                key={item.to}
                to={item.to}
                aria-label={
                  showWishlistCount
                    ? `${item.label}, ${wishlistCount} productos`
                    : undefined
                }
              >
                {item.label}
                {showWishlistCount ? (
                  <span className="nav-count" aria-hidden="true">
                    {wishlistCount}
                  </span>
                ) : null}
              </NavLink>
            )
          })}
        </nav>
      </header>

      <main id="main-content" className="route-stage" key={location.pathname} tabIndex={-1}>
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
