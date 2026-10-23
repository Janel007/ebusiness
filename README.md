# SchoolMarket

Site vitrine e-commerce premium — fournitures scolaires et de bureau.

**Slogan :** Tout pour apprendre. Tout pour créer.

## Stack

- React 19 + Vite 6
- Tailwind CSS 4
- React Router 7
- Lucide React (icônes)
- Framer Motion (animations)
- React Helmet Async (SEO / Open Graph)

## Installation

```bash
cd schoolmarket
npm install
npm run dev
```

Build de production :

```bash
npm run build
npm run preview
```

## Configuration centrale

Tous les paramètres commerciaux sont dans `src/data/config.js` :

| Clé | Description |
|-----|-------------|
| `whatsappNumber` | Numéro international (chiffres uniquement, ex. `237600000000`) |
| `domain` | Domaine public de production (ex. `https://votredomaine.com`) |
| `currency` | Devise (`XAF` par défaut) |
| `announcement` | Message du bandeau |
| `contact` | Adresse, email, horaires |

Le catalogue produits est dans `src/data/products.js` (16 produits de démonstration).

## Fonctionnalités techniques clés

### 1. Schema.org Product + Offer (JSON-LD)

Sur chaque fiche produit (`/produits/:slug`), un script JSON-LD est injecté dynamiquement via `react-helmet-async` :

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "...",
  "sku": "CAH200",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "XAF",
    "price": "1500",
    "availability": "https://schema.org/InStock"
  }
}
```

Généré par `src/utils/seo.js` → `buildProductJsonLd(product)`.

**Vérification :**
- [Schema.org Validator](https://validator.schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

### 2. Open Graph & Twitter Cards

Chaque page produit reçoit dynamiquement :

- `og:title`, `og:description`, `og:image`, `og:url`, `og:type=product`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Balise `<link rel="canonical">`

**Limitation SPA :** Les robots de partage (Facebook, WhatsApp, Twitter) ne exécutent pas toujours le JavaScript. Pour garantir des métadonnées correctes en production, utilisez :

- **Prérendu statique** (vite-plugin-ssr, react-snap, ou prerender.io)
- **SSR** (Remix, Next.js, ou Vite SSR)
- **Edge middleware** qui injecte les balises selon l’URL

En développement (`npm run dev`), les balises sont visibles dans le DOM après hydratation (inspecteur → Elements).

### 3. Liens WhatsApp dynamiques

Fonction `buildWhatsAppUrl(product)` dans `src/data/config.js` :

```
https://wa.me/237600000000?text=Bonjour%20SchoolMarket%2C%20je%20souhaite...
```

Le message prérempli contient : nom, référence, prix, devise, lien vers la fiche produit.

## Structure des fichiers

```
src/
├── components/     # Navbar, Footer, ProductCard, SEO, WhatsAppButton…
├── context/        # Theme (clair/sombre), Favorites
├── data/           # config.js + products.js (source unique)
├── pages/          # Home, Catalog, ProductDetail, About, Contact
├── utils/          # seo.js (JSON-LD + OG)
├── App.jsx
├── main.jsx
└── index.css       # Tailwind + thème custom
```

## Personnalisation

1. Remplacez `whatsappNumber` et `domain` dans `config.js`.
2. Ajoutez / modifiez les produits dans `products.js`.
3. Les images utilisent Unsplash (URLs stables). Remplacez-les par vos propres photos.

## Licence

Démonstration pédagogique — by KMJ Services.
