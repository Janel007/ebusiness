import SEO from '../components/SEO'
import WhatsAppButton from '../components/WhatsAppButton'
import { buildPageMeta } from '../utils/seo'
import { SITE_CONFIG } from '../data/config'
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const meta = buildPageMeta({
    title: 'Contact',
    description: 'Contactez SchoolMarket via WhatsApp Business pour vos commandes de fournitures scolaires et de bureau.',
    path: '/contact',
  })

  return (
    <>
      <SEO meta={meta} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium mb-2">
            Échangez avec nous
          </p>
          <h1 className="font-editorial text-4xl lg:text-5xl font-semibold mb-4">
            Contact
          </h1>
          <p className="text-[var(--color-mid)] max-w-md mx-auto">
            Pour toute question ou demande de commande, contactez-nous directement
            via WhatsApp Business. Nous vous répondrons dans les meilleurs délais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div className="flex items-start gap-3 p-5 bg-white dark:bg-[#1a1a1a] border border-[var(--color-light)] dark:border-[#333] rounded-sm">
            <MapPin size={20} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
            <div>
              <h3 className="text-sm font-semibold mb-1">Adresse</h3>
              <p className="text-sm text-[var(--color-mid)]">{SITE_CONFIG.contact.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-5 bg-white dark:bg-[#1a1a1a] border border-[var(--color-light)] dark:border-[#333] rounded-sm">
            <Clock size={20} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
            <div>
              <h3 className="text-sm font-semibold mb-1">Horaires</h3>
              <p className="text-sm text-[var(--color-mid)]">{SITE_CONFIG.contact.hours}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-5 bg-white dark:bg-[#1a1a1a] border border-[var(--color-light)] dark:border-[#333] rounded-sm">
            <Mail size={20} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
            <div>
              <h3 className="text-sm font-semibold mb-1">Email</h3>
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-sm text-[var(--color-mid)] hover:underline">
                {SITE_CONFIG.contact.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3 p-5 bg-white dark:bg-[#1a1a1a] border border-[var(--color-light)] dark:border-[#333] rounded-sm">
            <MessageCircle size={20} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
            <div>
              <h3 className="text-sm font-semibold mb-1">WhatsApp Business</h3>
              <p className="text-sm text-[var(--color-mid)]">Réponse rapide pour vos commandes</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <WhatsAppButton size="lg" />
          <p className="mt-4 text-xs text-[var(--color-mid)]">
            Aucune commande n&apos;est confirmée tant que le vendeur n&apos;a pas validé la disponibilité.
          </p>
        </div>
      </div>
    </>
  )
}
