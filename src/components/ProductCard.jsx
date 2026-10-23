import { Link } from 'react-router-dom'
import { Heart, MessageCircle, Eye } from 'lucide-react'
import { formatPrice, buildWhatsAppUrl } from '../data/config'
import { getAvailabilityLabel } from '../data/products'
import { useFavorites } from '../context/FavoritesContext'

export default function ProductCard({ product }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorite = isFavorite(product.id)
  const available = product.availability !== 'OutOfStock'

  return (
    <article className="group relative bg-white dark:bg-[#1a1a1a] border border-[var(--color-light)] dark:border-[#333] rounded-sm overflow-hidden shadow-soft hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-light)] dark:bg-[#222]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={400}
          height={500}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1456513080800-b6bbe2f2a5c5?w=400&q=60'
          }}
        />
        {/* Badge disponibilité */}
        <span
          className={`absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-sm ${
            available
              ? 'bg-white/90 text-[var(--color-deep)]'
              : 'bg-[var(--color-deep)]/80 text-white'
          }`}
        >
          {getAvailabilityLabel(product.availability)}
        </span>
        {/* Favori */}
        <button
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-3 right-3 p-1.5 bg-white/90 dark:bg-[#1a1a1a]/90 rounded-full hover:scale-110 transition-transform"
          aria-label={favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          <Heart
            size={16}
            className={favorite ? 'fill-[var(--color-accent)] text-[var(--color-accent)]' : 'text-[var(--color-mid)]'}
          />
        </button>
      </div>

      {/* Infos */}
      <div className="p-4 space-y-2">
        <p className="text-[10px] uppercase tracking-widest text-[var(--color-mid)]">
          {product.category === 'fournitures-scolaires' ? 'Fournitures scolaires' : 'Papeterie'}
        </p>
        <h3 className="font-medium text-sm leading-snug text-[var(--color-deep)] dark:text-[var(--color-off)] line-clamp-2">
          {product.name}
        </h3>
        <p className="text-base font-semibold text-[var(--color-deep)] dark:text-[var(--color-off)]">
          {formatPrice(product.price)} <span className="text-xs font-normal text-[var(--color-mid)]">FCFA</span>
        </p>

        <div className="flex gap-2 pt-2">
          <Link
            to={`/produits/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium border border-[var(--color-deep)] dark:border-[var(--color-off)] text-[var(--color-deep)] dark:text-[var(--color-off)] rounded-sm hover:bg-[var(--color-deep)] hover:text-[var(--color-off)] dark:hover:bg-[var(--color-off)] dark:hover:text-[var(--color-deep)] transition-colors"
          >
            <Eye size={14} />
            Voir
          </Link>
          {available && (
            <a
              href={buildWhatsAppUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium bg-[var(--color-deep)] dark:bg-[var(--color-off)] text-[var(--color-off)] dark:text-[var(--color-deep)] rounded-sm hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={14} />
              Commander
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
