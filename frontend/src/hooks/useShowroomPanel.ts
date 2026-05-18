import { useCallback, useState } from 'react'
import { getProductById } from '../data/products.ts'

export function useShowroomPanel() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null)
  const selectedProduct = selectedProductId
    ? getProductById(selectedProductId)
    : undefined

  const openProduct = useCallback((productId: string) => {
    setSelectedProductId(productId)
  }, [])

  const closePanel = useCallback(() => {
    setSelectedProductId(null)
  }, [])

  return {
    selectedProduct,
    openProduct,
    closePanel,
    isOpen: Boolean(selectedProduct),
  }
}
