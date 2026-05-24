import { useCallback, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'fabimar-wishlist'

let wishlistIds: string[] = loadFromStorage()
const listeners = new Set<() => void>()

function loadFromStorage(): string[] {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return []
    }

    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) {
      return []
    }

    return parsed.filter((id): id is string => typeof id === 'string')
  } catch {
    return []
  }
}

function persist(ids: string[]) {
  if (typeof window === 'undefined') {
    return
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
}

function emit() {
  listeners.forEach((listener) => listener())
}

function setWishlistIds(ids: string[]) {
  wishlistIds = ids
  persist(ids)
  emit()
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

  setWishlistIds([...wishlistIds, productId])
}

export function removeFromWishlist(productId: string) {
  if (!wishlistIds.includes(productId)) {
    return
  }

  setWishlistIds(wishlistIds.filter((id) => id !== productId))
}

export function clearWishlist() {
  if (wishlistIds.length === 0) {
    return
  }

  setWishlistIds([])
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

  const remove = useCallback((productId: string) => {
    removeFromWishlist(productId)
  }, [])

  const clear = useCallback(() => {
    clearWishlist()
  }, [])

  return { items, count: items.length, has, add, remove, clear }
}
