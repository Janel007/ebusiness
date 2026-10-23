import { MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl, buildGeneralWhatsAppUrl } from '../data/config'

/**
 * Bouton WhatsApp réutilisable.
 * Si un produit est fourni → message prérempli avec les infos produit.
 * Sinon → contact général.
 */
export default function WhatsAppButton({ product, label, className = '', size = 'md' }) {
  const href = product ? buildWhatsAppUrl(product) : buildGeneralWhatsAppUrl()
  const defaultLabel = product ? 'Commander sur WhatsApp' : 'Nous contacter sur WhatsApp'

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5',
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-medium rounded-sm bg-[#25D366] text-white hover:bg-[#1ebe57] transition-colors shadow-soft ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
      {label || defaultLabel}
    </a>
  )
}
