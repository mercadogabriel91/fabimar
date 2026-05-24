export const routes = {
  home: '/',
  products: '/products',
  productDetail: (productId: string) => `/products/${productId}`,
  brand: (brandId: string) => `/brands/${brandId}`,
  services: '/services',
  serviceDetail: (serviceId: string) => `/services/${serviceId}`,
  purpose: '/purpose',
  wishlist: '/wishlist',
} as const
