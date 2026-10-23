import { Helmet } from 'react-helmet-async'

/**
 * Composant SEO réutilisable.
 * Gère title, description, canonical, Open Graph, Twitter Cards
 * et injecte le JSON-LD Schema.org lorsqu'il est fourni.
 */
export default function SEO({ meta, jsonLd }) {
  if (!meta) return null

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.canonical && <link rel="canonical" href={meta.canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={meta.og?.title || meta.title} />
      <meta property="og:description" content={meta.og?.description || meta.description} />
      <meta property="og:image" content={meta.og?.image} />
      <meta property="og:url" content={meta.og?.url || meta.canonical} />
      <meta property="og:type" content={meta.og?.type || 'website'} />
      <meta property="og:site_name" content={meta.og?.site_name} />
      <meta property="og:locale" content={meta.og?.locale || 'fr_FR'} />

      {/* Twitter */}
      <meta name="twitter:card" content={meta.twitter?.card || 'summary_large_image'} />
      <meta name="twitter:title" content={meta.twitter?.title || meta.title} />
      <meta name="twitter:description" content={meta.twitter?.description || meta.description} />
      <meta name="twitter:image" content={meta.twitter?.image || meta.og?.image} />

      {/* JSON-LD Schema.org */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  )
}
