import { useEffect, useState } from 'react'
import { IconMark, IconPhone, IconBag, IconMenu } from './Icons'
import { PHONE_DISPLAY, PHONE_TEL } from '../constants'

const LINKS = [
  { href: '#story', label: 'Our Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#favourites', label: 'Favourites' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#visit', label: 'Visit Us' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const textColor = scrolled ? 'text-cocoa-light' : 'text-white/90'
  const nameColor = scrolled ? 'text-cocoa' : 'text-white'
  const tagColor = scrolled ? 'text-ink-soft' : 'text-white/75'
  const markColor = scrolled ? 'text-gold-deep' : 'text-gold'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-colors duration-300 border-b ${
        scrolled
          ? 'bg-cream/95 backdrop-blur border-black/10 shadow-[0_8px_24px_-18px_rgba(58,32,20,0.4)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-[1180px] mx-auto flex items-center justify-between px-7 py-[18px]">
        <a href="#top" className="flex items-center gap-3">
          <IconMark className={`w-[42px] h-[42px] ${markColor}`} />
          <span className="flex flex-col leading-[1.05]">
            <span className={`font-serif text-[22px] ${nameColor}`}>
              Sugar <em className="not-italic text-gold">Lips</em>
            </span>
            <span className={`text-[10px] tracking-[0.14em] font-bold ${tagColor}`}>
              BAKES &amp; COOLS
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-[14.5px] font-semibold py-1 group ${textColor}`}
            >
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gold transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <a
            href={PHONE_TEL}
            className={`hidden md:flex items-center gap-2 font-bold text-sm ${nameColor}`}
          >
            <IconPhone className="w-[17px] h-[17px] text-gold" />
            {PHONE_DISPLAY}
          </a>
          <a
            href="#order"
            className="inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold-deep transition-all hover:-translate-y-0.5 text-[#2A1B08] font-bold text-[13.5px] px-5 py-2.5 shadow-[0_12px_24px_-10px_rgba(166,116,31,0.65)]"
          >
            <IconBag className="w-[18px] h-[18px]" />
            Order Now
          </a>
          <button
            className="md:hidden p-1.5"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <IconMenu className={`w-6 h-6 ${scrolled ? 'text-cocoa' : 'text-white'}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-cream border-b border-black/10 px-7 pb-5 flex flex-col shadow-lg">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 border-b border-black/10 text-cocoa-light font-semibold text-[14.5px]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
