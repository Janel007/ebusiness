import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Search, Heart, MessageCircle, Sun, Moon } from 'lucide-react'
import { SITE_CONFIG, buildGeneralWhatsAppUrl } from '../data/config'
import { useTheme } from '../context/ThemeContext'
import { useFavorites } from '../context/FavoritesContext'

const NAV_LINKS = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/catalogue', label: 'Catalogue' },
  { to: '/fournitures-scolaires', label: 'Fournitures scolaires' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { theme, toggleTheme } = useTheme()
  const { favorites } = useFavorites()
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/catalogue?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-off)]/95 dark:bg-[var(--color-deep)]/95 backdrop-blur-md border-b border-[var(--color-light)] dark:border-[#333]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-editorial text-2xl lg:text-3xl font-semibold tracking-tight text-[var(--color-deep)] dark:text-[var(--color-off)] hover:opacity-80 transition-opacity"
          >
            SchoolMarket
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-[var(--color-deep)] dark:text-[var(--color-off)] border-b border-[var(--color-accent)]'
                      : 'text-[var(--color-mid)] hover:text-[var(--color-deep)] dark:hover:text-[var(--color-off)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-md text-[var(--color-mid)] hover:text-[var(--color-deep)] dark:hover:text-[var(--color-off)] hover:bg-[var(--color-light)]/50 dark:hover:bg-[#292929] transition-colors"
              aria-label="Rechercher"
            >
              <Search size={20} />
            </button>

            {/* Favorites indicator */}
            <Link
              to="/catalogue?featured=1"
              className="relative p-2 rounded-md text-[var(--color-mid)] hover:text-[var(--color-deep)] dark:hover:text-[var(--color-off)] hover:bg-[var(--color-light)]/50 dark:hover:bg-[#292929] transition-colors"
              aria-label="Favoris"
            >
              <Heart size={20} />
              {favorites.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[var(--color-accent)] text-[var(--color-deep)] text-[10px] font-bold rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-[var(--color-mid)] hover:text-[var(--color-deep)] dark:hover:text-[var(--color-off)] hover:bg-[var(--color-light)]/50 dark:hover:bg-[#292929] transition-colors"
              aria-label={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* WhatsApp */}
            <a
              href={buildGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-deep)] dark:bg-[var(--color-off)] text-[var(--color-off)] dark:text-[var(--color-deep)] text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
              aria-label="Contacter sur WhatsApp"
            >
              <MessageCircle size={16} />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-[var(--color-mid)] hover:text-[var(--color-deep)] dark:hover:text-[var(--color-off)]"
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <form onSubmit={handleSearch} className="pb-4">
            <div className="relative max-w-md mx-auto">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-mid)]" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un produit, une référence…"
                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#1a1a1a] border border-[var(--color-light)] dark:border-[#333] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
                autoFocus
              />
            </div>
          </form>
        )}
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--color-light)] dark:border-[#333] bg-[var(--color-off)] dark:bg-[var(--color-deep)]">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-[var(--color-light)] dark:bg-[#292929] text-[var(--color-deep)] dark:text-[var(--color-off)]'
                      : 'text-[var(--color-mid)] hover:bg-[var(--color-light)]/50 dark:hover:bg-[#292929]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={buildGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-[var(--color-deep)] dark:text-[var(--color-off)]"
            >
              <MessageCircle size={18} />
              Contacter sur WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
