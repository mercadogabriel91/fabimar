import { Link } from 'react-router-dom'
import type { Brand } from '../../data/types.ts'
import { routes } from '../../routes.ts'

type BrandCardProps = {
  brand: Brand
  productCount: number
}

export function BrandCard({ brand, productCount }: BrandCardProps) {
  return (
    <Link
      className={`showroom-brand-card showroom-brand-card--${brand.visualTone}`}
      to={routes.brand(brand.id)}
      aria-label={`Explorar universo ${brand.name}, ${productCount} productos`}
    >
      <span className="showroom-brand-card__mark">{brand.logoLabel}</span>
      <h2>{brand.name}</h2>
      <p>{brand.description}</p>
      <span className="showroom-brand-card__meta">
        {productCount} {productCount === 1 ? 'producto' : 'productos'}
      </span>
    </Link>
  )
}
