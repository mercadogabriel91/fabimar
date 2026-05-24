export type ProductState = 'Nuevo' | 'Usado Seleccionado'

export type Category = {
  id: string
  name: string
  description: string
  highlight: string
}

export type VisualTone = 'warm' | 'cool' | 'neutral'

export type Brand = {
  id: string
  name: string
  description: string
  logoLabel: string
  visualTone: VisualTone
}

export type Product = {
  id: string
  name: string
  categoryId: string
  brandId: string
  state: ProductState
  condition: string
  warranty: string
  benefit: string
  description: string
  images: string[]
  visualTone: VisualTone
  supports360: boolean
  supports3d: boolean
  whatsappUrl: string
}

export type Service = {
  id: string
  name: string
  highlight: string
  summary: string
  description: string
  benefits: string[]
  geographicScope: string
  image: string
  whatsappUrl: string
}

export type Cta = {
  label: string
  whatsappUrl: string
}
