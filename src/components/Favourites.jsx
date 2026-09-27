import useReveal from '../hooks/useReveal'
import { IconSwirlDivider } from './Icons'

const DISHES = [
  {
    name: 'Chocolate Truffle Cake',
    desc: 'Dark cocoa sponge, ganache filling, chocolate shavings',
    tag: 'Bestseller',
    art: (
      <svg viewBox="0 0 120 120">
        <ellipse cx="60" cy="98" rx="38" ry="7" fill="#3A2A20" opacity=".15" />
        <rect x="26" y="60" width="68" height="34" rx="8" fill="#5C4436" />
        <path d="M26 62c5-6 11-6 16 0s11 6 16 0 11-6 16 0 11 6 16 0" stroke="#3A2A20" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="42" cy="76" r="3.4" fill="#C6912E" />
        <circle cx="60" cy="70" r="3.4" fill="#C6912E" />
        <circle cx="78" cy="76" r="3.4" fill="#C6912E" />
        <rect x="55" y="40" width="10" height="22" rx="4" fill="#5C4436" />
      </svg>
    ),
  },
  {
    name: 'Mango Milkshake',
    desc: 'Thick shake blended with real mango and fresh milk',
    tag: 'Customer pick',
    art: (
      <svg viewBox="0 0 120 120">
        <ellipse cx="60" cy="104" rx="26" ry="5" fill="#3A2A20" opacity=".15" />
        <path d="M42 34h36l-8 62a8 8 0 0 1-8 7H58a8 8 0 0 1-8-7l-8-62Z" fill="#C6912E" />
        <path d="M42 34h36l-3 22H45l-3-22Z" fill="#FBF4E7" />
        <rect x="56" y="16" width="8" height="20" rx="3" fill="#5C4436" />
        <circle cx="60" cy="12" r="4" fill="#A6585E" />
      </svg>
    ),
  },
  {
    name: 'Mixed Fruit Juice',
    desc: 'Seasonal fruit, squeezed fresh with no added syrup',
    tag: 'Light & fresh',
    art: (
      <svg viewBox="0 0 120 120">
        <ellipse cx="60" cy="104" rx="24" ry="5" fill="#3A2A20" opacity=".15" />
        <path d="M44 30h32l-6 66a6 6 0 0 1-6 5.5H56a6 6 0 0 1-6-5.5L44 30Z" fill="#A6585E" />
        <path d="M44 30h32l-2.5 18H46.5L44 30Z" fill="#FBF4E7" />
        <circle cx="52" cy="20" r="6" fill="#C6912E" />
        <circle cx="66" cy="16" r="7" fill="#A6585E" />
        <circle cx="72" cy="26" r="5" fill="#C67B80" />
      </svg>
    ),
  },
  {
    name: 'Veg Puffs & Cutlets',
    desc: 'Golden-fried snacks, made fresh through the day',
    tag: 'Grab & go',
    art: (
      <svg viewBox="0 0 120 120">
        <ellipse cx="60" cy="94" rx="34" ry="6" fill="#3A2A20" opacity=".15" />
        <path d="M32 88c0-2 2-4 6-4h44c4 0 6 2 6 4v2H32v-2Z" fill="#7A4630" />
        <path d="M38 84c2-20 8-34 22-34s20 14 22 34" fill="#C6912E" />
        <path d="M38 84c2-20 8-34 22-34s20 14 22 34" stroke="#7A4630" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    name: 'French Fries',
    desc: 'Crisp salted fries, a favourite with the after-school crowd',
    tag: 'Great snack',
    art: (
      <svg viewBox="0 0 120 120">
        <ellipse cx="60" cy="98" rx="30" ry="6" fill="#3A2A20" opacity=".15" />
        <path d="M38 92l6-40 44 0 6 40a6 6 0 0 1-6 8H44a6 6 0 0 1-6-8Z" fill="#A6585E" />
        <rect x="46" y="34" width="6" height="46" rx="2" fill="#C6912E" />
        <rect x="56" y="30" width="6" height="50" rx="2" fill="#C6912E" />
        <rect x="66" y="36" width="6" height="44" rx="2" fill="#C6912E" />
        <rect x="76" y="32" width="6" height="48" rx="2" fill="#C6912E" />
      </svg>
    ),
  },
  {
    name: 'Fresh Lime Cooler',
    desc: 'Sweet, salt or soda — a cold glass to beat the Kerala heat',
    tag: 'Seasonal',
    art: (
      <svg viewBox="0 0 120 120">
        <ellipse cx="60" cy="104" rx="26" ry="5" fill="#3A2A20" opacity=".15" />
        <path d="M40 34h40l-6 64a6 6 0 0 1-6 5.5H52a6 6 0 0 1-6-5.5L40 34Z" fill="#FBF4E7" stroke="#C6912E" strokeWidth="2.2" />
        <path d="M40 34h40l-2 12H42l-2-12Z" fill="#C6912E" opacity=".4" />
        <circle cx="52" cy="56" r="6" fill="#C6912E" opacity=".7" />
        <circle cx="70" cy="66" r="5" fill="#C6912E" opacity=".5" />
        <rect x="66" y="16" width="4" height="20" rx="2" fill="#C6912E" />
      </svg>
    ),
  },
]

export default function Favourites() {
  const headRef = useReveal()
  const scrollerRef = useReveal()

  return (
    <section id="favourites" className="bg-cocoa text-cream py-24">
      <div className="max-w-[1180px] mx-auto px-7">
        <div ref={headRef} className="reveal max-w-[640px] mb-14">
          <IconSwirlDivider className="w-16 h-7 text-gold mb-4.5" />
          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.1] text-cream">
            Local favourites
          </h2>
          <p className="mt-4 text-[16.5px] text-cream/70">
            The six things customers reorder the most — cakes, cool drinks and snacks alike.
          </p>
        </div>

        <div
          ref={scrollerRef}
          className="reveal grid grid-flow-col auto-cols-[78%] sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-3 lg:grid-cols-6 gap-5 overflow-x-auto pb-3.5"
          style={{ scrollSnapType: 'x proximity' }}
        >
          {DISHES.map((d) => (
            <div
              key={d.name}
              className="bg-white/[0.06] border border-white/[0.14] rounded-xl2 p-5.5 transition-all hover:-translate-y-1.5 hover:bg-white/10"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="rounded-2xl overflow-hidden bg-cream-deep aspect-square flex items-center justify-center">
                <div className="w-[78%] h-[78%]">{d.art}</div>
              </div>
              <h3 className="font-serif font-normal text-[19px] mt-4.5 text-cream">{d.name}</h3>
              <p className="text-[13px] text-cream/65 mt-1.5">{d.desc}</p>
              <span className="inline-block mt-3 text-[11px] font-bold tracking-wide text-gold bg-gold/[0.16] px-2.5 py-1.5 rounded-full">
                {d.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
