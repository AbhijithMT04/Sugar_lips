import { IconMark } from './Icons'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, DIRECTIONS_URL } from '../constants'

export default function Footer() {
  return (
    <footer className="bg-cocoa text-cream/75 pt-14 pb-[110px] md:pb-14">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="flex justify-between flex-wrap gap-9 pb-8 border-b border-white/[0.14]">
          <div className="flex items-center gap-3">
            <IconMark className="w-[42px] h-[42px] text-gold" />
            <span className="flex flex-col leading-[1.05]">
              <span className="font-serif text-[22px] text-cream">Sugar Lips</span>
              <span className="font-mal text-[10px] tracking-[0.14em] font-bold text-cream/60">
                ഷുഗർ ലിപ്സ്
              </span>
            </span>
          </div>

          <div className="flex gap-12 flex-wrap">
            <div>
              <h4 className="text-[12.5px] tracking-wide uppercase text-gold mb-3.5 font-bold">
                Explore
              </h4>
              <a href="#story" className="block text-sm mb-2.5 hover:text-white">Our Story</a>
              <a href="#menu" className="block text-sm mb-2.5 hover:text-white">Menu</a>
              <a href="#favourites" className="block text-sm mb-2.5 hover:text-white">Favourites</a>
              <a href="#reviews" className="block text-sm hover:text-white">Reviews</a>
            </div>
            <div>
              <h4 className="text-[12.5px] tracking-wide uppercase text-gold mb-3.5 font-bold">
                Get in touch
              </h4>
              <a href={PHONE_TEL} className="block text-sm mb-2.5 hover:text-white">{PHONE_DISPLAY}</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block text-sm mb-2.5 hover:text-white">
                WhatsApp
              </a>
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-white">
                Directions
              </a>
            </div>
            <div>
              <h4 className="text-[12.5px] tracking-wide uppercase text-gold mb-3.5 font-bold">
                Hours
              </h4>
              <span className="block text-sm mb-2">Mon–Sat, 9:00 AM–9:00 PM</span>
              <span className="block text-sm">Sunday, 9:00 AM–8:00 PM</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-wrap gap-2.5 pt-6 text-[13px]">
          <span>© 2026 Sugar Lips Bakes &amp; Cools, Kuttikkol, Taliparamba, Kerala 670562</span>
          <span>Handcrafted daily, since day one</span>
        </div>
      </div>
    </footer>
  )
}
