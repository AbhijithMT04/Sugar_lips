import useReveal from '../hooks/useReveal'
import { IconSwirlDivider } from './Icons'
import freshJuiceImg from '../assets/fresh-juice.jpg'
import creamyShakeImg from '../assets/creamy-shake.jpg'
import crispSnacksImg from '../assets/crisp-snacks.jpg'
import partyOrdersImg from '../assets/party-orders.jpg'

const SERVICES = [
  {
    num: '01',
    title: 'Fresh Fruit Juices',
    tag: 'Cold-Pressed · 100% Real Fruit',
    desc: 'Squeezed to order from seasonal fruits — orange, mango, pineapple, passion fruit, and fresh lime coolers. No artificial syrups or concentrates, just pure fruit and refreshing chill.',
    image: freshJuiceImg,
    fallback: '/images/fresh-juice.jpg',
  },
  {
    num: '02',
    title: 'Milkshakes & Smoothies',
    tag: 'Thick & Creamy · Pure Dairy',
    desc: 'Thick shakes and fruit smoothies blended fresh with whole milk, real dairy, rich ice cream, and wholesome fruits — from classic Belgian chocolate to fresh mango and strawberry.',
    image: creamyShakeImg,
    fallback: '/images/creamy-shake.jpg',
  },
  {
    num: '03',
    title: 'Snacks & Savouries',
    tag: 'Fried Hot & Fresh',
    desc: 'Golden flaky veg puffs, crispy cutlets, hot samosas, rolls, and crisp salted french fries — prepared hot through the day, perfect for your evening break or a quick on-the-go snack.',
    image: crispSnacksImg,
    fallback: '/images/crisp-snacks.jpg',
  },
  {
    num: '04',
    title: 'Small Party & Bulk Orders',
    tag: 'Snacks & Tea / Coffee Catering',
    desc: 'Specialized bulk catering focused on hot snack platters (samosas, puffs, and cutlets) paired with fresh, steaming hot tea or coffee for office meetings, family functions, and get-togethers.',
    image: partyOrdersImg,
    fallback: '/images/party-orders.jpg',
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
            Fresh fruit juices, thick milkshakes, crispy hot snacks, and hot tea or coffee party orders — here's what leaves our counter every day.
          </p>
        </div>

        <div ref={listRef} className="reveal flex flex-col border-t border-black/10">
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className="group grid grid-cols-[76px_1fr] sm:grid-cols-[96px_1fr_auto] md:grid-cols-[112px_1fr_auto] gap-4 sm:gap-6 items-center py-6 px-2 sm:px-3 border-b border-black/10 transition-all duration-300 hover:bg-cream-deep hover:pl-4 sm:hover:pl-5 rounded-2xl"
            >
              {/* Real Product Picture */}
              <div className="w-[76px] h-[76px] sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-sm border-2 border-white/80 shrink-0 bg-cocoa/10">
                <img
                  src={s.image}
                  alt={s.title}
                  onError={(e) => {
                    e.currentTarget.src = s.fallback
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Text Info */}
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-rose-deep bg-rose/10 px-2.5 py-0.5 rounded-full mb-1">
                  {s.tag}
                </span>
                <h3 className="font-serif text-[19px] sm:text-[23px] font-normal text-cocoa group-hover:text-gold-deep transition-colors">
                  {s.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14.5px] text-ink-soft mt-1 leading-relaxed max-w-[56ch]">
                  {s.desc}
                </p>
              </div>

              {/* Item Number */}
              <div className="hidden sm:flex flex-col items-end">
                <span className="font-serif italic text-2xl text-rose-deep opacity-60 group-hover:opacity-100 transition-opacity">
                  {s.num}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
