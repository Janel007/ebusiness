import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronRight, Share2, Heart, ArrowLeft } from 'lucide-react'
import SEO from '../components/SEO'
import ProductCard from '../components/ProductCard'
import WhatsAppButton from '../components/WhatsAppButton'
import { getProductBySlug, getRelatedProducts, getAvailabilityLabel, CATEGORIES } from '../data/products'
import { formatPrice } from '../data/config'
import { buildProductJsonLd, buildProductMeta } from '../utils/seo'
import { useFavorites } from '../context/FavoritesContext'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { isFavorite, toggleFavorite } = useFavorites()
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-editorial text-3xl font-semibold">Produit introuvable</h1>
        <p className="text-[var(--color-mid)]">Ce produit n&apos;existe pas ou a été retiré du catalogue.</p>
        <Link to="/catalogue" className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4">
          <ArrowLeft size={14} /> Retour au catalogue
        </Link>
      </div>
    )
  }

  const images = product.images?.length ? product.images : [product.image]
  const related = getRelatedProducts(product)
  const category = CATEGORIES.find((c) => c.id === product.category)
  const available = product.availability !== 'OutOfStock'
  const favorite = isFavorite(product.id)

  const meta = buildProductMeta(product)
  const jsonLd = buildProductJsonLd(product)

  const handleShare = async () => {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title: product.name, text: product.description.slice(0, 100), url })
      } catch {
        // cancelled
      }
    } else {
      await navigator.clipboard.writeText(url)
      alert('Lien copié dans le presse-papiers')
    }
  }

  return (
    <>
      <SEO meta={meta} jsonLd={jsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <nav className="flex items-center gap-1.5 text-xs text-[var(--color-mid)] mb-8 flex-wrap">
          <Link to="/" className="hover:text-[var(--color-deep)] dark:hover:text-[var(--color-off)]">Accueil</Link>
          <ChevronRight size={12} />
          <Link to="/catalogue" className="hover:text-[var(--color-deep)] dark:hover:text-[var(--color-off)]">Catalogue</Link>
          {category && (
            <>
              <ChevronRight size={12} />
              <Link
                to={category.slug === 'fournitures-scolaires' ? '/fournitures-scolaires' : `/catalogue?cat=${category.id}`}
                className="hover:text-[var(--color-deep)] dark:hover:text-[var(--color-off)]"
              >
                {category.name}
              </Link>
            </>
          )}
          <ChevronRight size={12} />
          <span className="text-[var(--color-deep)] dark:text-[var(--color-off)] truncate max-w-[200px]">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4">
            <div className="aspect-square rounded-sm overflow-hidden bg-[var(--color-light)] dark:bg-[#222] shadow-soft">
              <img
                src={images[activeImage]}
                alt={`${product.name} — vue ${activeImage + 1}`}
                className="w-full h-full object-cover"
                width={800}
                height={800}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1456513080800-b6bbe2f2a5c5?w=800&q=60'
                }}
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-20 h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                      i === activeImage
                        ? 'border-[var(--color-accent)]'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--color-mid)] mb-2">
                Réf. {product.reference}
              </p>
              <h1 className="font-editorial text-3xl lg:text-4xl font-semibold leading-tight mb-3">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold">
                {formatPrice(product.price)}{' '}
                <span className="text-sm font-normal text-[var(--color-mid)]">FCFA</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm ${
                  available
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                    : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                }`}
              >
                {getAvailabilityLabel(product.availability)}
              </span>
              {product.brand && (
                <span className="text-xs text-[var(--color-mid)]">Marque : {product.brand}</span>
              )}
            </div>

            <p className="text-[var(--color-mid)] leading-relaxed text-sm lg:text-base">
              {product.description}
            </p>

            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="border-t border-[var(--color-light)] dark:border-[#333] pt-5">
                <h3 className="text-sm font-semibold mb-3">Caractéristiques</h3>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-[var(--color-mid)]">{key}</dt>
                      <dd className="font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-2">
              {available ? (
                <WhatsAppButton product={product} size="lg" />
              ) : (
                <span className="inline-flex items-center px-5 py-3 text-sm font-medium bg-[var(--color-light)] dark:bg-[#292929] text-[var(--color-mid)] rounded-sm cursor-not-allowed">
                  Indisponible
                </span>
              )}
              <button
                onClick={() => toggleFavorite(product.id)}
                className="inline-flex items-center gap-2 px-4 py-3 border border-[var(--color-light)] dark:border-[#333] rounded-sm text-sm hover:border-[var(--color-accent)] transition-colors"
                aria-label={favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
              >
                <Heart size={16} className={favorite ? 'fill-[var(--color-accent)] text-[var(--color-accent)]' : ''} />
                {favorite ? 'Favori' : 'Favoris'}
              </button>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-4 py-3 border border-[var(--color-light)] dark:border-[#333] rounded-sm text-sm hover:border-[var(--color-accent)] transition-colors"
              >
                <Share2 size={16} />
                Partager
              </button>
            </div>

            <Link
              to="/catalogue"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-mid)] hover:text-[var(--color-deep)] dark:hover:text-[var(--color-off)] transition-colors"
            >
              <ArrowLeft size={14} />
              Retour au catalogue
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20 lg:mt-28">
            <h2 className="font-editorial text-2xl lg:text-3xl font-semibold mb-8">
              Produits similaires
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
