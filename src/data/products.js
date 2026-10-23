/**
 * Catalogue de démonstration SchoolMarket
 * Tous les produits sont définis ici — source unique de vérité.
 * Les prix et stocks sont fictifs et facilement modifiables.
 */

export const CATEGORIES = [
  {
    id: 'fournitures-scolaires',
    name: 'Fournitures scolaires',
    slug: 'fournitures-scolaires',
    description: 'Cahiers, stylos, sacs et tout le nécessaire pour la rentrée et le quotidien scolaire.',
    image: 'https://images.unsplash.com/photo-1456513080800-b6bbe2f2a5c5?w=800&q=80',
  },
  {
    id: 'papeterie',
    name: 'Papeterie & Bureau',
    slug: 'papeterie',
    description: 'Feuilles, classeurs, accessoires de bureau pour étudiants et professionnels.',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80',
  },
]

export const PRODUCTS = [
  {
    id: 'prod-001',
    slug: 'cahier-200-pages',
    reference: 'CAH200',
    name: 'Cahier 200 pages grand format',
    category: 'fournitures-scolaires',
    description:
      'Cahier à couverture rigide de 200 pages, format A4, ligné. Papier 80 g/m² de qualité, idéal pour les cours et les devoirs. Spirale résistante et couverture plastifiée.',
    price: 1500,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    ],
    availability: 'InStock',
    brand: null,
    featured: true,
    specifications: {
      Pages: '200',
      Format: 'A4',
      Papier: '80 g/m²',
      Reliure: 'Spirale',
    },
  },
  {
    id: 'prod-002',
    slug: 'cahier-300-pages',
    reference: 'CAH300',
    name: 'Cahier 300 pages grand format',
    category: 'fournitures-scolaires',
    description:
      'Cahier épais de 300 pages, format A4, couverture cartonnée renforcée. Parfait pour les matières à fort volume de notes. Papier blanc crème agréable à l’écriture.',
    price: 2200,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80',
    ],
    availability: 'InStock',
    brand: null,
    featured: true,
    specifications: {
      Pages: '300',
      Format: 'A4',
      Papier: '80 g/m²',
      Reliure: 'Collée',
    },
  },
  {
    id: 'prod-003',
    slug: 'pack-stylos-bille',
    reference: 'STY-PK10',
    name: 'Pack de 10 stylos à bille',
    category: 'fournitures-scolaires',
    description:
      'Lot de 10 stylos à bille de qualité, encre bleue fluide. Pointe 0,7 mm, corps ergonomique. Idéal pour l’école, le bureau ou les examens.',
    price: 1800,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800&q=80',
    ],
    availability: 'InStock',
    brand: null,
    featured: true,
    specifications: {
      Quantité: '10',
      Couleur: 'Bleu',
      Pointe: '0,7 mm',
    },
  },
  {
    id: 'prod-004',
    slug: 'crayons-papier-hb',
    reference: 'CRY-HB12',
    name: 'Boîte de 12 crayons à papier HB',
    category: 'fournitures-scolaires',
    description:
      'Crayons graphite HB de qualité scolaire. Mine résistante, bois certifié. Parfaits pour l’écriture et le dessin technique.',
    price: 1200,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
    ],
    availability: 'InStock',
    brand: null,
    featured: false,
    specifications: {
      Quantité: '12',
      Dureté: 'HB',
    },
  },
  {
    id: 'prod-005',
    slug: 'trousse-scolaire',
    reference: 'TRS-STD',
    name: 'Trousse scolaire triple compartiment',
    category: 'fournitures-scolaires',
    description:
      'Trousse spacieuse à trois compartiments, fermeture éclair robuste. Tissu résistant et lavable. Convient aux collégiens et lycéens.',
    price: 3500,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    ],
    availability: 'InStock',
    brand: null,
    featured: true,
    specifications: {
      Compartiments: '3',
      Matière: 'Polyester',
    },
  },
  {
    id: 'prod-006',
    slug: 'sac-a-dos-scolaire',
    reference: 'SAC-BK26',
    name: 'Sac à dos scolaire 26 L',
    category: 'fournitures-scolaires',
    description:
      'Sac à dos ergonomique 26 litres, bretelles rembourrées, compartiment ordinateur 15". Dos aéré et multipoches. Idéal collège et lycée.',
    price: 18500,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800&q=80',
    ],
    availability: 'InStock',
    brand: null,
    featured: true,
    specifications: {
      Volume: '26 L',
      'Compartiment PC': '15"',
      Bretelles: 'Rembourrées',
    },
  },
  {
    id: 'prod-007',
    slug: 'calculatrice-scientifique',
    reference: 'CALC-SCI',
    name: 'Calculatrice scientifique',
    category: 'fournitures-scolaires',
    description:
      'Calculatrice scientifique non programmable, 240 fonctions, écran 2 lignes. Autorisée aux examens. Alimentation solaire + pile.',
    price: 9500,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    ],
    availability: 'InStock',
    brand: null,
    featured: true,
    specifications: {
      Fonctions: '240+',
      Écran: '2 lignes',
      Alimentation: 'Solaire + pile',
    },
  },
  {
    id: 'prod-008',
    slug: 'pack-feuilles-a4',
    reference: 'FEU-A4-500',
    name: 'Ramette de 500 feuilles A4 80g',
    category: 'papeterie',
    description:
      'Ramette de 500 feuilles A4, papier blanc 80 g/m², compatible imprimante laser et jet d’encre. Format standard pour photocopies et impressions.',
    price: 3200,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80',
    ],
    availability: 'InStock',
    brand: null,
    featured: false,
    specifications: {
      Quantité: '500 feuilles',
      Format: 'A4',
      Grammage: '80 g/m²',
    },
  },
  {
    id: 'prod-009',
    slug: 'classeur-a4-rigide',
    reference: 'CLA-A4',
    name: 'Classeur A4 à levier',
    category: 'papeterie',
    description:
      'Classeur rigide format A4, mécanisme à levier 2 anneaux, dos 5 cm. Étiquette de identification incluse. Idéal pour classer documents et cours.',
    price: 2800,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&q=80',
    ],
    availability: 'InStock',
    brand: null,
    featured: false,
    specifications: {
      Format: 'A4',
      Anneaux: '2',
      Dos: '5 cm',
    },
  },
  {
    id: 'prod-010',
    slug: 'agenda-scolaire',
    reference: 'AGD-2026',
    name: 'Agenda scolaire 2025-2026',
    category: 'fournitures-scolaires',
    description:
      'Agenda scolaire année 2025-2026, une page par jour, couverture souple. Emploi du temps, pages de notes et repères de matières inclus.',
    price: 4500,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80',
    ],
    availability: 'InStock',
    brand: null,
    featured: true,
    specifications: {
      Année: '2025-2026',
      Format: 'A5',
      Type: '1 page / jour',
    },
  },
  {
    id: 'prod-011',
    slug: 'regle-plat-30cm',
    reference: 'REG-30',
    name: 'Règle plate 30 cm transparente',
    category: 'fournitures-scolaires',
    description:
      'Règle plate 30 cm en plastique transparent, graduations précises en cm et mm. Bords biseautés pour un tracé net.',
    price: 500,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80',
    ],
    availability: 'InStock',
    brand: null,
    featured: false,
    specifications: {
      Longueur: '30 cm',
      Matière: 'Plastique transparent',
    },
  },
  {
    id: 'prod-012',
    slug: 'compas-scolaire',
    reference: 'CMP-STD',
    name: 'Compas scolaire avec mine',
    category: 'fournitures-scolaires',
    description:
      'Compas métallique scolaire avec mine de rechange et étui. Ouverture jusqu’à 15 cm de rayon. Idéal géométrie collège et lycée.',
    price: 2200,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80',
    ],
    availability: 'LimitedAvailability',
    brand: null,
    featured: false,
    specifications: {
      Matériau: 'Métal',
      'Rayon max': '15 cm',
    },
  },
  {
    id: 'prod-013',
    slug: 'gomme-blanche',
    reference: 'GOM-BL',
    name: 'Gomme blanche douce (lot de 3)',
    category: 'fournitures-scolaires',
    description:
      'Lot de 3 gommes blanches douces, efface proprement sans abîmer le papier. Format standard, emballage individuel.',
    price: 600,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800&q=80',
    ],
    availability: 'InStock',
    brand: null,
    featured: false,
    specifications: {
      Quantité: '3',
      Type: 'Gomme douce',
    },
  },
  {
    id: 'prod-014',
    slug: 'surligneurs-pack',
    reference: 'SUR-PK4',
    name: 'Pack de 4 surligneurs fluo',
    category: 'papeterie',
    description:
      'Lot de 4 surligneurs fluo (jaune, rose, vert, orange). Pointe biseautée, encre non toxique. Parfaits pour réviser et annoter.',
    price: 1600,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80',
    ],
    availability: 'InStock',
    brand: null,
    featured: false,
    specifications: {
      Quantité: '4',
      Couleurs: 'Jaune, Rose, Vert, Orange',
    },
  },
  {
    id: 'prod-015',
    slug: 'pochette-perforee',
    reference: 'POC-A4-50',
    name: 'Pochettes perforées A4 (lot de 50)',
    category: 'papeterie',
    description:
      'Lot de 50 pochettes perforées transparentes format A4. Ouverture supérieure, compatible classeurs 2 et 4 anneaux.',
    price: 2500,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80',
    ],
    availability: 'InStock',
    brand: null,
    featured: false,
    specifications: {
      Quantité: '50',
      Format: 'A4',
      Ouverture: 'Supérieure',
    },
  },
  {
    id: 'prod-016',
    slug: 'marqueur-permanent',
    reference: 'MAR-PERM',
    name: 'Marqueurs permanents (lot de 4)',
    category: 'papeterie',
    description:
      'Lot de 4 marqueurs permanents (noir, bleu, rouge, vert). Pointe ogive, encre indélébile. Convient tableaux, cartons et surfaces non poreuses.',
    price: 2000,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800&q=80',
    ],
    availability: 'OutOfStock',
    brand: null,
    featured: false,
    specifications: {
      Quantité: '4',
      Type: 'Permanent',
    },
  },
]

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null
}

export function getProductsByCategory(categoryId) {
  return PRODUCTS.filter((p) => p.category === categoryId)
}

export function getFeaturedProducts() {
  return PRODUCTS.filter((p) => p.featured)
}

export function getRelatedProducts(product, limit = 4) {
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, limit)
}

export function getAvailabilityLabel(availability) {
  const labels = {
    InStock: 'En stock',
    OutOfStock: 'Rupture de stock',
    PreOrder: 'Précommande',
    LimitedAvailability: 'Stock limité',
  }
  return labels[availability] || availability
}

export function getSchemaAvailability(availability) {
  const map = {
    InStock: 'https://schema.org/InStock',
    OutOfStock: 'https://schema.org/OutOfStock',
    PreOrder: 'https://schema.org/PreOrder',
    LimitedAvailability: 'https://schema.org/LimitedAvailability',
  }
  return map[availability] || 'https://schema.org/InStock'
}
