import { IconPhone, IconWhatsApp, IconDirections, IconBag } from './Icons'
import { PHONE_TEL, WHATSAPP_URL, DIRECTIONS_URL } from '../constants'

export default function MobileBar() {
  return (
    <nav
      className="md:hidden fixed left-0 right-0 bottom-0 z-[70] bg-cream border-t border-black/10 shadow-[0_-12px_30px_-16px_rgba(58,32,20,0.4)] px-3.5 pt-2.5"
      style={{ paddingBottom: 'calc(10px + env(safe-area-inset-bottom))' }}
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-4 gap-2">
        <a href={PHONE_TEL} className="flex flex-col items-center gap-1 text-[10.5px] font-bold text-cocoa-light py-1.5 rounded-xl">
          <IconPhone className="w-5 h-5 text-gold-deep" />
          Call
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-[10.5px] font-bold text-cocoa-light py-1.5 rounded-xl"
        >
          <IconWhatsApp className="w-5 h-5 text-gold-deep" />
          WhatsApp
        </a>
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-[10.5px] font-bold text-cocoa-light py-1.5 rounded-xl"
        >
          <IconDirections className="w-5 h-5 text-gold-deep" />
          Directions
        </a>
        <a href="#order" className="flex flex-col items-center gap-1 text-[10.5px] font-bold py-1.5 rounded-xl bg-gold text-[#2A1B08]">
          <IconBag className="w-5 h-5" />
          Order
        </a>
      </div>
    </nav>
  )
}
