import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Shield, MessageCircle, Search } from 'lucide-react'
import SEO from '../components/SEO'
import ProductCard from '../components/ProductCard'
import WhatsAppButton from '../components/WhatsAppButton'
import { buildPageMeta } from '../utils/seo'
import { getFeaturedProducts, CATEGORIES } from '../data/products'
import { SITE_CONFIG } from '../data/config'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Home() {
  const featured = getFeaturedProducts().slice(0, 8)
  const meta = buildPageMeta({
    title: null,
    description: SITE_CONFIG.description,
    path: '/',
  })

  return (
    <>
      <SEO meta={meta} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 halo pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.p
                custom={0}
                variants={fadeUp}
                className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium"
              >
                SchoolMarket
              </motion.p>
              <motion.h1
                custom={1}
                variants={fadeUp}
                className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-balance"
              >
                Le nécessaire.<br />
                L&apos;essentiel.<br />
                L&apos;excellence.
              </motion.h1>
              <motion.p
                custom={2}
                variants={fadeUp}
                className="text-[var(--color-mid)] text-base lg:text-lg max-w-md leading-relaxed"
              >
                Découvrez un catalogue élégant de fournitures scolaires et de bureau.
                Commandez simplement via WhatsApp Business.
              </motion.p>
              <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/catalogue"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-deep)] dark:bg-[var(--color-off)] text-[var(--color-off)] dark:text-[var(--color-deep)] text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
                >
                  Explorer le catalogue
                  <ArrowRight size={16} />
                </Link>
                <WhatsAppButton size="md" label="Nous contacter" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] lg:aspect-[3/4] rounded-sm overflow-hidden shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1456513080800-b6bbe2f2a5c5?w=900&q=80"
                  alt="Fournitures scolaires et papeterie élégantes"
                  className="w-full h-full object-cover"
                  width={900}
                  height={1125}
                  fetchPriority="high"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 halo rounded-full opacity-60 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Catégorie principale */}
      <section className="py-16 lg:py-20 border-t border-[var(--color-light)] dark:border-[#333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={cat.slug === 'fournitures-scolaires' ? '/fournitures-scolaires' : `/catalogue?cat=${cat.id}`}
                className="group relative aspect-[16/9] rounded-sm overflow-hidden shadow-soft"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h2 className="font-editorial text-2xl lg:text-3xl font-semibold text-white mb-1">
                    {cat.name}
                  </h2>
                  <p className="text-white/70 text-sm max-w-sm">{cat.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-[var(--color-accent)] uppercase tracking-wider">
                    Découvrir <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Produits populaires */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium mb-2">
                Sélection
              </p>
              <h2 className="font-editorial text-3xl lg:text-4xl font-semibold">
                Produits populaires
              </h2>
            </div>
            <Link
              to="/catalogue"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[var(--color-mid)] hover:text-[var(--color-deep)] dark:hover:text-[var(--color-off)] transition-colors"
            >
              Voir tout <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Réassurance */}
      <section className="py-16 lg:py-20 bg-white dark:bg-[#1a1a1a] border-y border-[var(--color-light)] dark:border-[#333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Search, title: 'Catalogue clair', text: 'Parcourez facilement nos fournitures avec filtres et recherche.' },
              { icon: BookOpen, title: 'Infos transparentes', text: 'Descriptions, références et prix affichés clairement.' },
              { icon: MessageCircle, title: 'Contact direct', text: 'Échangez avec le vendeur via WhatsApp Business.' },
              { icon: Shield, title: 'Commande simplifiée', text: 'Un clic pour transmettre votre demande de commande.' },
            ].map((item) => (
              <div key={item.title} className="text-center sm:text-left space-y-3">
                <div className="inline-flex p-2.5 rounded-sm bg-[var(--color-off)] dark:bg-[#222] text-[var(--color-accent)]">
                  <item.icon size={22} />
                </div>
                <h3 className="font-medium text-sm tracking-wide">{item.title}</h3>
                <p className="text-sm text-[var(--color-mid)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bannière contact */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-editorial text-3xl lg:text-4xl font-semibold text-balance">
            Prêt à commander ?
          </h2>
          <p className="text-[var(--color-mid)] max-w-lg mx-auto">
            Parcourez le catalogue, choisissez vos produits et contactez-nous directement
            sur WhatsApp pour confirmer disponibilité et modalités.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              to="/catalogue"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-deep)] dark:border-[var(--color-off)] text-sm font-medium rounded-sm hover:bg-[var(--color-deep)] hover:text-[var(--color-off)] dark:hover:bg-[var(--color-off)] dark:hover:text-[var(--color-deep)] transition-colors"
            >
              Voir le catalogue
            </Link>
            <WhatsAppButton size="md" />
          </div>
        </div>
      </section>
    </>
  )
}
