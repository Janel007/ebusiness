import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { buildPageMeta } from '../utils/seo'

export default function NotFound() {
  const meta = buildPageMeta({
    title: 'Page introuvable',
    description: 'La page demandée n\'existe pas.',
    path: '/404',
  })

  return (
    <>
      <SEO meta={meta} />
      <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-6">
        <p className="text-6xl font-editorial font-semibold text-[var(--color-accent)]">404</p>
        <h1 className="font-editorial text-3xl font-semibold">Page introuvable</h1>
        <p className="text-[var(--color-mid)]">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="inline-flex px-6 py-3 bg-[var(--color-deep)] dark:bg-[var(--color-off)] text-[var(--color-off)] dark:text-[var(--color-deep)] text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </>
  )
}
