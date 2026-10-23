import { createContext, useContext, useEffect, useState } from 'react'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem('schoolmarket-favorites')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('schoolmarket-favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    )
  }

  const isFavorite = (productId) => favorites.includes(productId)

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider')
  return ctx
}
