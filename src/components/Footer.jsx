import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { SITE_CONFIG, buildGeneralWhatsAppUrl } from '../data/config'
import { CATEGORIES } from '../data/products'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-deep)] text-[var(--color-off)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="font-editorial text-2xl font-semibold tracking-tight">
              SchoolMarket
            </Link>
            <p className="text-sm text-[var(--color-light)]/70 leading-relaxed max-w-xs">
              {SITE_CONFIG.description}
            </p>
            <a
              href={buildGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:opacity-80 transition-opacity"
            >
              <MessageCircle size={16} />
              WhatsApp Business
            </a>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[var(--color-light)] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[var(--color-light)]/70">
              <li><Link to="/" className="hover:text-[var(--color-off)] transition-colors">Accueil</Link></li>
              <li><Link to="/catalogue" className="hover:text-[var(--color-off)] transition-colors">Catalogue</Link></li>
              <li><Link to="/fournitures-scolaires" className="hover:text-[var(--color-off)] transition-colors">Fournitures scolaires</Link></li>
              <li><Link to="/a-propos" className="hover:text-[var(--color-off)] transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--color-off)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Catégories */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[var(--color-light)] mb-4">
              Catégories
            </h4>
            <ul className="space-y-2.5 text-sm text-[var(--color-light)]/70">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={cat.slug === 'fournitures-scolaires' ? '/fournitures-scolaires' : `/catalogue?cat=${cat.id}`}
                    className="hover:text-[var(--color-off)] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[var(--color-light)] mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-[var(--color-light)]/70">
              <li>{SITE_CONFIG.contact.address}</li>
              <li>{SITE_CONFIG.contact.hours}</li>
              <li>
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-[var(--color-off)] transition-colors">
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-light)]/50">
          <p>
            © {year} SchoolMarket — by KMJ Services
          </p>
          <div className="flex gap-6">
            <Link to="/a-propos" className="hover:text-[var(--color-light)] transition-colors">
              Mentions légales
            </Link>
            <Link to="/a-propos" className="hover:text-[var(--color-light)] transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
