import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { CtaLink } from '../components/ui/CtaLink.tsx'
import { PrimaryButton } from '../components/ui/PrimaryButton.tsx'
import { Section } from '../components/ui/Section.tsx'
import { getBrandName } from '../data/brands.ts'
import { createWishlistWhatsAppUrl } from '../data/ctas.ts'
import { getProductById } from '../data/products.ts'
import type { Product } from '../data/types.ts'
import { usePageMeta } from '../hooks/usePageMeta.ts'
import { useWishlist } from '../hooks/useWishlist.ts'
import { routes } from '../routes.ts'

function resolveWishlistProducts(productIds: string[]): Product[] {
  return productIds
    .map((productId) => getProductById(productId))
    .filter((product): product is Product => product !== undefined)
}

export function WishlistPage() {
  const { items, remove, clear } = useWishlist()
  const products = useMemo(() => resolveWishlistProducts(items), [items])
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactNotes, setContactNotes] = useState('')

  usePageMeta({
    title: 'Wishlist | Fabimar',
    description:
      'Lista local de productos seleccionados. Solicita una cotizacion por WhatsApp y un asesor humano continuara la conversacion.',
  })

  const quoteUrl = createWishlistWhatsAppUrl(
    products.map((product) => ({ id: product.id, name: product.name })),
  )

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const contactUrl = createWishlistWhatsAppUrl(
      products.map((product) => ({ id: product.id, name: product.name })),
      {
        name: contactName.trim() || 'Sin nombre',
        email: contactEmail.trim() || undefined,
        notes: contactNotes.trim() || undefined,
      },
    )

    window.open(contactUrl, '_blank', 'noopener,noreferrer')
  }

  if (products.length === 0) {
    return (
      <section className="page-section wishlist-page wishlist-page--empty">
        <p className="eyebrow">Wishlist</p>
        <h1>Tu seleccion, lista para conversar.</h1>
        <p className="lede">
          Agrega productos desde la vidriera. Tu lista se guarda en este
          dispositivo y puede convertirse en una consulta por WhatsApp cuando
          quieras.
        </p>
        <p className="wishlist-followup">
          Un asesor humano revisara tu seleccion y continuara la conversacion
          con criterio, sin formularios complejos ni cuentas.
        </p>
        <CtaLink to={routes.products}>Explorar productos</CtaLink>
      </section>
    )
  }

  return (
    <>
      <section className="page-section wishlist-page">
        <p className="eyebrow">Wishlist</p>
        <h1>Tu seleccion, lista para conversar.</h1>
        <p className="lede">
          {products.length === 1
            ? 'Un producto guardado en este dispositivo.'
            : `${products.length} productos guardados en este dispositivo.`}{' '}
          Solicita una cotizacion por WhatsApp y un asesor humano continuara la
          conversacion.
        </p>

        <ul className="wishlist-list" aria-label="Productos en wishlist">
          {products.map((product) => {
            const isUsed = product.state === 'Usado Seleccionado'

            return (
              <li key={product.id} className="wishlist-item">
                <Link
                  className="wishlist-item__media"
                  to={routes.productDetail(product.id)}
                  aria-label={`Ver ficha de ${product.name}`}
                >
                  <img
                    className="wishlist-item__image"
                    src={product.images[0]}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
                <div className="wishlist-item__copy">
                  <Link className="text-link" to={routes.productDetail(product.id)}>
                    Ver ficha
                  </Link>
                  <p className="wishlist-item__brand">{getBrandName(product.brandId)}</p>
                  <h2>{product.name}</h2>
                  <span
                    className={`status-pill${isUsed ? ' status-pill--used' : ''}`}
                  >
                    {product.state}
                  </span>
                  <p className="wishlist-item__benefit">{product.benefit}</p>
                </div>
                <button
                  type="button"
                  className="secondary-button wishlist-item__remove"
                  onClick={() => remove(product.id)}
                  aria-label={`Quitar ${product.name} de la wishlist`}
                >
                  Quitar
                </button>
              </li>
            )
          })}
        </ul>

        <div className="wishlist-actions" aria-label="Acciones de cotizacion">
          <PrimaryButton href={quoteUrl} external>
            Solicitar cotizacion por WhatsApp
          </PrimaryButton>
          <button type="button" className="secondary-button" onClick={clear}>
            Vaciar wishlist
          </button>
          <CtaLink to={routes.products}>Seguir explorando</CtaLink>
        </div>
      </section>

      <Section variant="subtle" className="wishlist-contact">
        <p className="eyebrow">Contacto orientativo</p>
        <h2>Preferis dejar tus datos antes de escribir?</h2>
        <p className="lede lede-secondary">
          Este formulario no guarda informacion. Al enviar, abriremos WhatsApp
          con tu seleccion y los datos que completes.
        </p>
        <form className="wishlist-contact-form" onSubmit={handleContactSubmit}>
          <label className="wishlist-field">
            <span>Nombre</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={contactName}
              onChange={(event) => setContactName(event.target.value)}
              placeholder="Como te llamamos"
            />
          </label>
          <label className="wishlist-field">
            <span>Email (opcional)</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={contactEmail}
              onChange={(event) => setContactEmail(event.target.value)}
              placeholder="tu@email.com"
            />
          </label>
          <label className="wishlist-field wishlist-field--wide">
            <span>Notas (opcional)</span>
            <textarea
              name="notes"
              rows={3}
              value={contactNotes}
              onChange={(event) => setContactNotes(event.target.value)}
              placeholder="Plazos, ubicacion, dudas sobre instalacion..."
            />
          </label>
          <button type="submit" className="primary-button wishlist-contact-submit">
            Enviar consulta por WhatsApp
          </button>
        </form>
      </Section>
    </>
  )
}
