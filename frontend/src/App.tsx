import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell.tsx'
import { BrandPage } from './pages/BrandPage.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { ProductDetailPage } from './pages/ProductDetailPage.tsx'
import { ProductsPage } from './pages/ProductsPage.tsx'
import { PurposePage } from './pages/PurposePage.tsx'
import { ServiceDetailPage } from './pages/ServiceDetailPage.tsx'
import { ServicesPage } from './pages/ServicesPage.tsx'
import { WishlistPage } from './pages/WishlistPage.tsx'
import { routes } from './routes.ts'

function LegacyProductDetailRedirect() {
  const { productId } = useParams()
  return <Navigate to={routes.productDetail(productId ?? '')} replace />
}

function LegacyBrandRedirect() {
  const { brandId } = useParams()
  return <Navigate to={routes.brand(brandId ?? '')} replace />
}

function LegacyServiceDetailRedirect() {
  const { serviceId } = useParams()
  return <Navigate to={routes.serviceDetail(serviceId ?? '')} replace />
}

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.products} element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/brands/:brandId" element={<BrandPage />} />
        <Route path={routes.services} element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path={routes.purpose} element={<PurposePage />} />
        <Route path={routes.wishlist} element={<WishlistPage />} />
        <Route path="/productos" element={<Navigate to={routes.products} replace />} />
        <Route path="/productos/:productId" element={<LegacyProductDetailRedirect />} />
        <Route path="/marcas/:brandId" element={<LegacyBrandRedirect />} />
        <Route path="/servicios" element={<Navigate to={routes.services} replace />} />
        <Route path="/servicios/:serviceId" element={<LegacyServiceDetailRedirect />} />
        <Route path="/proposito" element={<Navigate to={routes.purpose} replace />} />
        <Route path="*" element={<Navigate to={routes.home} replace />} />
      </Routes>
    </AppShell>
  )
}
