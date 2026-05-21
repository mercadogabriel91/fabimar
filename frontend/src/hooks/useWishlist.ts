import { useCallback, useSyncExternalStore } from 'react'

let wishlistIds: string[] = []
const listeners = new Set<() => void>()

function emit() {
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return wishlistIds
}

export function addToWishlist(productId: string) {
  if (wishlistIds.includes(productId)) {
    return
  }

  wishlistIds = [...wishlistIds, productId]
  emit()
}

export function useWishlist() {
  const items = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)

  const has = useCallback(
    (productId: string) => items.includes(productId),
    [items],
  )

  const add = useCallback((productId: string) => {
    addToWishlist(productId)
  }, [])

  return { items, has, add }
}
