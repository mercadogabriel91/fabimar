import { PagePlaceholder } from '../components/ui/PagePlaceholder.tsx'

export function WishlistPage() {
  return (
    <PagePlaceholder
      eyebrow="Wishlist local"
      title="Un primer paso hacia la conversacion."
      description="Ruta reservada para simular una lista local de productos y convertirla en una consulta por WhatsApp en SPEC-008."
      primaryLabel="Volver a productos"
      primaryTo="/productos"
    />
  )
}
