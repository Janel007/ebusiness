/**
 * Configuration centrale SchoolMarket
 * Modifiez ici le numéro WhatsApp, le domaine public, la devise, etc.
 */

export const SITE_CONFIG = {
  name: 'SchoolMarket',
  slogan: 'Tout pour apprendre. Tout pour créer.',
  description:
    'Fournitures scolaires, papeterie et matériel de bureau. Catalogue élégant et commande simplifiée via WhatsApp Business.',
  // Domaine public de production (sans trailing slash)
  domain: 'https://schoolmarket.vercel.app',
  // Numéro WhatsApp Business au format international (chiffres uniquement)
  // Démonstration : 237600000000 — remplacez par votre vrai numéro
  whatsappNumber: '237693870157',
  currency: 'XAF',
  currencySymbol: 'FCFA',
  locale: 'fr_FR',
  language: 'fr',
  // Message d'annonce configurable (bandeau)
  announcement: 'Vos essentiels pour apprendre, travailler et créer.',
  // Coordonnées de contact
  contact: {
    email: 'contact@schoolmarket.example',
    address: 'Douala, Cameroun',
    hours: 'Lun – Sam : 8h – 18h',
  },
  // Image de partage par défaut (Open Graph)
  defaultOgImage: 'https://images.unsplash.com/photo-1456513080800-b6bbe2f2a5c5?w=1200&q=80',
}

/**
 * Construit l'URL WhatsApp pour un produit donné.
 * @param {object} product - Objet produit du catalogue
 * @returns {string} URL wa.me prête à l'emploi
 */
export function buildWhatsAppUrl(product) {
  const { whatsappNumber, domain, name } = SITE_CONFIG
  const productUrl = `${domain}/produits/${product.slug}`

  const message = `Bonjour ${name}, je souhaite commander le produit suivant :

Produit : ${product.name}
Référence : ${product.reference}
Prix affiché : ${formatPrice(product.price)} ${SITE_CONFIG.currency}
Fiche produit : ${productUrl}

Pouvez-vous me confirmer sa disponibilité et les modalités de commande ?
Merci.`

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

/**
 * Lien WhatsApp de contact général (sans produit).
 */
export function buildGeneralWhatsAppUrl() {
  const { whatsappNumber, name } = SITE_CONFIG
  const message = `Bonjour ${name},

Je souhaite obtenir des informations sur vos produits et services.
Merci de me contacter.`

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

/**
 * Formate un prix en FCFA (espaces pour milliers).
 */
export function formatPrice(price) {
  return new Intl.NumberFormat('fr-FR').format(price)
}
