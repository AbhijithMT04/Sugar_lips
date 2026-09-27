import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { IconSwirlDivider, IconWhatsApp, IconBag } from './Icons'
import { WHATSAPP_URL } from '../constants'
import mangoShakeImg from '../assets/mango-shake.jpg'
import freshJuiceImg from '../assets/fresh-juice.jpg'
import crispSnacksImg from '../assets/crisp-snacks.jpg'
import frenchFriesImg from '../assets/french-fries.jpg'
import limeCoolerImg from '../assets/lime-cooler.jpg'
import creamyShakeImg from '../assets/creamy-shake.jpg'

const CATEGORIES = ['All', 'Juices', 'Shakes', 'Snacks']

const DISHES = [
  {
    name: 'Alphonso Mango Milkshake',
    category: 'Shakes',
    desc: 'Rich, thick shake blended with real sweet mango pulp, fresh dairy & ice cream',
    tag: 'Customer Pick',
    badge: '🥤 Thick Shake',
    image: mangoShakeImg,
    fallback: '/images/mango-shake.jpg',
  },
  {
    name: 'Mixed Fruit Juice',
    category: 'Juices',
    desc: 'Seasonal tropical fruits, freshly pressed to order with pure fruit and no added syrup',
    tag: 'Light & Fresh',
    badge: '🍹 Cold Pressed',
    image: freshJuiceImg,
    fallback: '/images/fresh-juice.jpg',
  },
  {
    name: 'Golden Veg Puffs & Cutlets',
    category: 'Snacks',
    desc: 'Crisp layered puff pastry stuffed with spiced fillings, paired with hot golden cutlets',
    tag: 'Grab & Go',
    badge: '🥐 Hot & Flaky',
    image: crispSnacksImg,
    fallback: '/images/crisp-snacks.jpg',
  },
  {
    name: 'Crispy French Fries',
    category: 'Snacks',
    desc: 'Golden-fried salted potato fries, made fresh and crispy for your evening craving',
    tag: 'Crowd Favourite',
    badge: '🍟 Fried to Order',
    image: frenchFriesImg,
    fallback: '/images/french-fries.jpg',
  },
  {
    name: 'Fresh Lime Cooler',
    category: 'Juices',
    desc: 'Zesty lime cooler with fresh mint and crushed ice — available sweet, salt or soda',
    tag: 'Beat The Heat',
    badge: '🍋 Chilled Cooler',
    image: limeCoolerImg,
    fallback: '/images/lime-cooler.jpg',
  },
  {
    name: 'Belgian Chocolate Shake',
    category: 'Shakes',
    desc: 'Decadent dark cocoa ganache blended with creamy vanilla ice cream & chocolate flakes',
    tag: 'Indulgent',
    badge: '🍫 Real Ganache',
    image: creamyShakeImg,
    fallback: '/images/creamy-shake.jpg',
  },
]

export default function Favourites() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const headRef = useReveal()
  const gridRef = useReveal()

  const filteredDishes =
    selectedCategory === 'All'
      ? DISHES
      : DISHES.filter((d) => d.category === selectedCategory)

  return (
    <section id="favourites" className="bg-cocoa text-cream py-24 relative overflow-hidden isolate">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gold/10 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-rose/10 rounded-full blur-[110px] -z-10 pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-6 sm:px-7">
        {/* Section Header */}
        <div ref={headRef} className="reveal max-w-[680px] mx-auto text-center mb-10">
          <IconSwirlDivider className="w-16 h-7 text-gold mx-auto mb-4" />
          <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.1] text-cream font-serif">
            Local favourites
          </h2>
          <p className="mt-3.5 text-[16px] sm:text-[17px] text-cream/75 max-w-[48ch] mx-auto leading-relaxed font-sans">
            Customer top picks — freshly blended fruit juices, thick creamy shakes, and hot crisp snacks prepared fresh to order.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-[13px] sm:text-[13.5px] font-bold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gold text-[#2A1B08] shadow-md shadow-gold/30 -translate-y-0.5'
                  : 'bg-white/10 text-cream/80 hover:bg-white/15 hover:text-white border border-white/10'
              }`}
            >
              {cat === 'All' ? 'All Favourites' : cat}
            </button>
          ))}
        </div>

        {/* Dishes Grid with Real Photography */}
        <div
          ref={gridRef}
          className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {filteredDishes.map((d) => (
            <div
              key={d.name}
              className="group relative bg-[#2A1D16]/90 border border-white/10 hover:border-gold/60 rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(198,145,46,0.3)] transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Real Food Image */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-black/20">
                <img
                  src={d.image}
                  alt={d.name}
                  onError={(e) => {
                    e.currentTarget.src = d.fallback
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1D16] via-transparent to-black/35" />

                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white border border-white/20 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  {d.badge}
                </span>

                {/* Tag Pill */}
                <span className="absolute top-3 right-3 bg-gold text-[#2A1B08] font-bold text-[10.5px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                  {d.tag}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="font-serif font-normal text-[20px] sm:text-[22px] text-cream group-hover:text-gold transition-colors duration-300">
                  {d.name}
                </h3>
                <p className="text-[13.5px] text-cream/70 leading-relaxed mt-2 flex-1 font-sans">
                  {d.desc}
                </p>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[12px] font-medium text-cream/60">
                    Made fresh to order
                  </span>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gold hover:text-gold-deep text-[12.5px] font-bold transition-all group-hover:translate-x-1"
                  >
                    <IconWhatsApp className="w-4 h-4 text-emerald-400" />
                    Order Now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Catering / Bulk Orders Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-[20px] sm:text-[22px] text-cream">
              Planning a party or office snack break?
            </h4>
            <p className="text-[13.5px] text-cream/70 mt-1 font-sans">
              We prepare bulk hot snacks, fresh juices, and steaming tea &amp; coffee for groups and gatherings in Taliparamba.
            </p>
          </div>
          <a
            href="#order"
            className="shrink-0 inline-flex items-center gap-2 bg-gold hover:bg-gold-deep text-[#2A1B08] font-bold text-[14px] px-6 py-3 rounded-full transition-all shadow-md hover:-translate-y-0.5"
          >
            <IconBag className="w-4 h-4" />
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  )
}
