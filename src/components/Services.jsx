import useReveal from '../hooks/useReveal'
import { IconSwirlDivider } from './Icons'

const SERVICES = [
  {
    num: '01',
    title: 'Custom Celebration Cakes',
    desc: 'Hand-piped designs built around your theme, colours and flavours — sketch it or send a photo and we\'ll match it.',
    icon: (
      <>
        <path
          d="M24 6c6 0 10 4 10 8.5S30.5 22 26 22c2 2 3 4.5 3 7.5 0 6-5 9.5-11 9.5-4 0-7-2-7-4.8 0-1.8 1.3-3.2 3.2-3.2 1.6 0 2.7 1 2.7 2.4"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path d="M15 14.5C15 9.8 19 6 24 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </>
    ),
  },
  {
    num: '02',
    title: 'Fresh Fruit Juices',
    desc: 'Squeezed to order from seasonal fruit — no concentrates, no pre-mixed syrups, just the fruit and a little ice.',
    icon: (
      <>
        <path d="M15 8h18l-3 30a4 4 0 0 1-4 3.5h-4a4 4 0 0 1-4-3.5L15 8Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M16 16h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M20 4c2 2 2 3 0 5M28 4c2 2 2 3 0 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    num: '03',
    title: 'Milkshakes & Smoothies',
    desc: 'Thick shakes and fruit smoothies blended fresh with real milk, ice cream and whole fruit — no shortcuts.',
    icon: (
      <>
        <path d="M14 10h20l-4 30a4 4 0 0 1-4 3.5H22a4 4 0 0 1-4-3.5L14 10Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M15.5 18h17" stroke="currentColor" strokeWidth="2.2" />
        <path d="M27 6l4 4M31 6l-4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </>
    ),
  },
  {
    num: '04',
    title: 'Fresh Baked Goods',
    desc: 'Breads, buns and loaves baked fresh every morning — nothing sits on the shelf overnight.',
    icon: (
      <>
        <path d="M10 22c0-8 6.3-14 14-14s14 6 14 14c0 1.5-.5 3.2-1.5 4.6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M9 22h30l-2.5 13a3 3 0 0 1-3 2.5h-19a3 3 0 0 1-3-2.5L9 22Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M18 22c0-4 2.7-7 6-7s6 3 6 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    num: '05',
    title: 'Snacks & Savouries',
    desc: 'Puffs, cutlets, samosas and fries — fried fresh to order, ready for a quick bite or a full snack platter.',
    icon: (
      <>
        <path d="M10 34c0-14 6-24 14-24s14 10 14 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M8 34h32" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M16 34c0-8 3.5-14 8-14s8 6 8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6" />
      </>
    ),
  },
  {
    num: '06',
    title: 'Small Party & Bulk Orders',
    desc: 'Cakes, snack platters and drink jars for office parties, functions and family gatherings — advance orders welcome.',
    icon: (
      <>
        <rect x="8" y="18" width="32" height="20" rx="3" stroke="currentColor" strokeWidth="2.2" />
        <path d="M8 26h32M24 18v20" stroke="currentColor" strokeWidth="2.2" />
        <path d="M17 18c0-4 3-7 7-7s7 3 7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </>
    ),
  },
]

export default function Services() {
  const headRef = useReveal()
  const listRef = useReveal()

  return (
    <section id="menu" className="py-24">
      <div className="max-w-[1180px] mx-auto px-7">
        <div ref={headRef} className="reveal max-w-[640px] mb-14">
          <IconSwirlDivider className="w-16 h-7 text-gold mb-4.5" />
          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.1]">What we make</h2>
          <p className="mt-4 text-[16.5px] text-ink-soft">
            Cakes, fresh bakes, juices, shakes and snacks — here's what leaves our counter every
            week.
          </p>
        </div>

        <div ref={listRef} className="reveal flex flex-col border-t border-black/10">
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className="grid grid-cols-[44px_1fr] sm:grid-cols-[56px_1fr_auto] gap-4 sm:gap-6 items-center py-7 px-2 border-b border-black/10 transition-all hover:pl-4 hover:bg-cream-deep"
            >
              <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11 sm:w-[52px] sm:h-[52px] text-gold-deep">
                {s.icon}
              </svg>
              <div>
                <h3 className="font-serif text-[19px] sm:text-[23px] font-normal text-cocoa">{s.title}</h3>
                <p className="text-[13.5px] sm:text-[14.5px] text-ink-soft mt-1.5 max-w-[52ch]">{s.desc}</p>
              </div>
              <span className="hidden sm:block font-serif italic text-xl text-rose-deep opacity-70">
                {s.num}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
