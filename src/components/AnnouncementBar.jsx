import { SITE_CONFIG } from '../data/config'

export default function AnnouncementBar() {
  return (
    <div className="bg-[var(--color-deep)] text-[var(--color-off)] text-center text-xs sm:text-sm py-2 px-4 tracking-wide">
      <p>{SITE_CONFIG.announcement}</p>
    </div>
  )
}
