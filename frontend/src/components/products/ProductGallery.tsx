import { useState } from 'react'
import type { VisualTone } from '../../data/types.ts'
import { productGalleryImageSizes } from '../../lib/imageSizes.ts'

type ProductGalleryProps = {
  images: string[]
  name: string
  visualTone: VisualTone
  isUsed?: boolean
  compact?: boolean
}

export function ProductGallery({
  images,
  name,
  visualTone,
  isUsed = false,
  compact = false,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex] ?? images[0]
  const imageAlt =
    images.length > 1
      ? `${name}, vista ${activeIndex + 1} de ${images.length}`
      : name
  const mediaClass = [
    compact ? 'product-gallery__media product-gallery__media--compact' : 'product-gallery__media',
    `product-gallery__media--${visualTone}`,
    isUsed ? 'product-gallery__media--used' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={`product-gallery${compact ? ' product-gallery--compact' : ''}`}
      aria-label={`Galeria de ${name}`}
    >
      <div className={mediaClass}>
        <img
          className="product-gallery__image"
          src={activeImage}
          alt={imageAlt}
          sizes={productGalleryImageSizes}
          loading={compact ? 'lazy' : 'eager'}
          fetchPriority={compact ? 'auto' : 'high'}
          decoding="async"
          onError={(event) => {
            event.currentTarget.classList.add('product-gallery__image--fallback')
          }}
        />
      </div>
      {images.length > 1 ? (
        <ul className="product-gallery__thumbs" aria-label="Vistas del producto">
          {images.map((image, index) => {
            const isActive = index === activeIndex

            return (
              <li key={`${image}-${index}`}>
                <button
                  type="button"
                  className={`product-gallery__thumb${isActive ? ' product-gallery__thumb--active' : ''}`}
                  aria-label={`Vista ${index + 1} de ${images.length}`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={image} alt="" loading="lazy" decoding="async" />
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
