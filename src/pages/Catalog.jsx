import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, X, SlidersHorizontal } from 'lucide-react'
import SEO from '../components/SEO'
import ProductCard from '../components/ProductCard'
import { buildPageMeta } from '../utils/seo'
import { PRODUCTS, CATEGORIES } from '../data/products'

export default function Catalog({ categoryFilter }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [category, setCategory] = useState(categoryFilter || searchParams.get('cat') || '')
  const [availability, setAvailability] = useState(searchParams.get('avail') || '')
  const [sort, setSort] = useState(searchParams.get('sort') || 'default')
  const [featuredOnly, setFeaturedOnly] = useState(searchParams.get('featured') === '1')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    if (categoryFilter) setCategory(categoryFilter)
  }, [categoryFilter])

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]

    const q = query.trim().toLowerCase()
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.reference.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }

    if (category) {
      list = list.filter((p) => p.category === category)
    }

    if (availability) {
      list = list.filter((p) => p.availability === availability)
    }

    if (featuredOnly) {
      list = list.filter((p) => p.featured)
    }

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'alpha':
        list.sort((a, b) => a.name.localeCompare(b.name, 'fr'))
        break
      default:
        break
    }

    return list
  }, [query, category, availability, sort, featuredOnly])

  const resetFilters = () => {
    setQuery('')
    setCategory(categoryFilter || '')
    setAvailability('')
    setSort('default')
    setFeaturedOnly(false)
    setSearchParams({})
  }

  const hasFilters = query || (category && !categoryFilter) || availability || sort !== 'default' || featuredOnly

  const pageTitle = categoryFilter
    ? CATEGORIES.find((c) => c.id === categoryFilter)?.name || 'Catalogue'
    : 'Catalogue'
  const meta = buildPageMeta({
    title: pageTitle,
    description: `Parcourez le catalogue SchoolMarket — ${PRODUCTS.length} produits de fournitures scolaires et de bureau.`,
    path: categoryFilter ? `/${categoryFilter}` : '/catalogue',
  })

  return (
    <>
      <SEO meta={meta} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium mb-2">
            Boutique
          </p>
          <h1 className="font-editorial text-3xl lg:text-5xl font-semibold mb-2">
            {pageTitle}
          </h1>
          <p className="text-[var(--color-mid)] text-sm">
            {filtered.length} produit{filtered.length !== 1 ? 's' : ''} trouvé{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Search & filters bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-mid)]" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Nom, référence ou description…"
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#1a1a1a] border border-[var(--color-light)] dark:border-[#333] rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
            />
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden inline-flex items-center gap-1.5 px-3 py-2.5 border border-[var(--color-light)] dark:border-[#333] rounded-sm text-sm"
            >
              <SlidersHorizontal size={16} />
              Filtres
            </button>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={!!categoryFilter}
              className="px-3 py-2.5 bg-white dark:bg-[#1a1a1a] border border-[var(--color-light)] dark:border-[#333] rounded-sm text-sm focus:outline-none"
            >
              <option value="">Toutes catégories</option>
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>

            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="px-3 py-2.5 bg-white dark:bg-[#1a1a1a] border border-[var(--color-light)] dark:border-[#333] rounded-sm text-sm focus:outline-none"
            >
              <option value="">Toute disponibilité</option>
              <option value="InStock">En stock</option>
              <option value="LimitedAvailability">Stock limité</option>
              <option value="OutOfStock">Rupture</option>
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-3 py-2.5 bg-white dark:bg-[#1a1a1a] border border-[var(--color-light)] dark:border-[#333] rounded-sm text-sm focus:outline-none"
            >
              <option value="default">Tri par défaut</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="alpha">Alphabétique</option>
            </select>

            <label className="inline-flex items-center gap-2 px-3 py-2.5 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={featuredOnly}
                onChange={(e) => setFeaturedOnly(e.target.checked)}
                className="rounded-sm border-[var(--color-light)]"
              />
              Mis en avant
            </label>

            {hasFilters && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1 px-3 py-2.5 text-sm text-[var(--color-mid)] hover:text-[var(--color-deep)] dark:hover:text-[var(--color-off)]"
              >
                <X size={14} /> Effacer
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 space-y-4">
            <p className="text-[var(--color-mid)]">Aucun produit ne correspond à votre recherche.</p>
            <button
              onClick={resetFilters}
              className="text-sm font-medium underline underline-offset-4 hover:text-[var(--color-accent)]"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </>
  )
}
