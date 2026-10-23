import { SITE_CONFIG } from '../data/config'
import { getSchemaAvailability } from '../data/products'

/**
 * Génère le script JSON-LD Schema.org Product + Offer
 * à partir de l'objet produit réel.
 */
export function buildProductJsonLd(product) {
  if (!product) return null

  const productUrl = `${SITE_CONFIG.domain}/produits/${product.slug}`
  const images = product.images?.length
    ? product.images
    : [product.image]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#product`,
    name: product.name,
    description: product.description,
    image: images,
    sku: product.reference,
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: product.currency || SITE_CONFIG.currency,
      price: String(product.price),
      availability: getSchemaAvailability(product.availability),
    },
  }

  if (product.brand) {
    jsonLd.brand = {
      '@type': 'Brand',
      name: product.brand,
    }
  }

  return jsonLd
}

/**
 * Métadonnées Open Graph + Twitter pour une page produit.
 */
export function buildProductMeta(product) {
  if (!product) return {}

  const productUrl = `${SITE_CONFIG.domain}/produits/${product.slug}`
  const image = product.image || SITE_CONFIG.defaultOgImage

  return {
    title: `${product.name} | ${SITE_CONFIG.name}`,
    description: product.description.slice(0, 160),
    canonical: productUrl,
    og: {
      title: `${product.name} | ${SITE_CONFIG.name}`,
      description: product.description.slice(0, 200),
      image,
      url: productUrl,
      type: 'product',
      site_name: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | ${SITE_CONFIG.name}`,
      description: product.description.slice(0, 200),
      image,
    },
  }
}

/**
 * Métadonnées génériques pour les pages non-produit.
 */
export function buildPageMeta({ title, description, path = '/' }) {
  const url = `${SITE_CONFIG.domain}${path}`
  return {
    title: title ? `${title} | ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} — ${SITE_CONFIG.slogan}`,
    description: description || SITE_CONFIG.description,
    canonical: url,
    og: {
      title: title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name,
      description: description || SITE_CONFIG.description,
      image: SITE_CONFIG.defaultOgImage,
      url,
      type: 'website',
      site_name: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name,
      description: description || SITE_CONFIG.description,
      image: SITE_CONFIG.defaultOgImage,
    },
  }
}
