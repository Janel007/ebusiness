import SEO from '../components/SEO'
import { buildPageMeta } from '../utils/seo'
import { SITE_CONFIG } from '../data/config'

export default function About() {
  const meta = buildPageMeta({
    title: 'À propos',
    description: `Découvrez SchoolMarket — ${SITE_CONFIG.slogan}. Fournitures scolaires et de bureau au Cameroun.`,
    path: '/a-propos',
  })

  return (
    <>
      <SEO meta={meta} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-24 space-y-10">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium mb-2">
            Notre identité
          </p>
          <h1 className="font-editorial text-4xl lg:text-5xl font-semibold mb-6">
            À propos de SchoolMarket
          </h1>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-[var(--color-mid)] leading-relaxed">
          <p>
            <strong className="text-[var(--color-deep)] dark:text-[var(--color-off)]">SchoolMarket</strong> est
            une boutique moderne dédiée aux fournitures scolaires, à la papeterie et au matériel de bureau.
            Notre mission : faciliter la découverte de produits de qualité et simplifier la prise de contact
            pour commander via WhatsApp Business.
          </p>
          <p>
            Nous nous adressons aux élèves, étudiants, parents, enseignants, établissements scolaires
            ainsi qu&apos;aux professionnels et entreprises ayant besoin de fournitures de bureau au Cameroun.
          </p>
          <p>
            Les prix affichés sont en FCFA (XAF). Le site fonctionne comme un catalogue commercial :
            aucune commande n&apos;est confirmée tant que le vendeur n&apos;a pas validé la disponibilité
            et les modalités.
          </p>
        </div>

        <div className="border-t border-[var(--color-light)] dark:border-[#333] pt-8 space-y-4">
          <h2 className="font-editorial text-2xl font-semibold">Mentions légales</h2>
          <p className="text-sm text-[var(--color-mid)]">
            SchoolMarket — by KMJ Services. Site vitrine de démonstration. Les informations produits,
            prix et stocks sont fictifs et destinés à illustrer les fonctionnalités techniques
            (Schema.org, Open Graph, WhatsApp Business).
          </p>
        </div>

        <div className="border-t border-[var(--color-light)] dark:border-[#333] pt-8 space-y-4">
          <h2 className="font-editorial text-2xl font-semibold">Politique de confidentialité</h2>
          <p className="text-sm text-[var(--color-mid)]">
            Ce site ne collecte pas de données personnelles via formulaires. Les favoris et le choix
            de thème sont stockés localement dans votre navigateur (localStorage). Les liens WhatsApp
            redirigent vers l&apos;application ou le service WhatsApp de Meta.
          </p>
        </div>
      </div>
    </>
  )
}
