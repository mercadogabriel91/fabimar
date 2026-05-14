import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell.tsx'
import { BrandPage } from './pages/BrandPage.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { ProductDetailPage } from './pages/ProductDetailPage.tsx'
import { ProductsPage } from './pages/ProductsPage.tsx'
import { PurposePage } from './pages/PurposePage.tsx'
import { ServiceDetailPage } from './pages/ServiceDetailPage.tsx'
import { ServicesPage } from './pages/ServicesPage.tsx'
import { WishlistPage } from './pages/WishlistPage.tsx'

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/productos/:productId" element={<ProductDetailPage />} />
        <Route path="/marcas/:brandId" element={<BrandPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/servicios/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/proposito" element={<PurposePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  )
}
