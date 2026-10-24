import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Remonte automatiquement en haut de page à chaque changement de route.
 * À placer à l'intérieur de <BrowserRouter> (ex. dans Layout).
 */
export default function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    // Remonte immédiatement (comportement natif de navigation entre pages)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, search])

  return null
}