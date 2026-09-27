import useReveal from '../hooks/useReveal'
import { IconSwirlDivider } from './Icons'
import storefrontImg from '../assets/storefront.jpg'

const STATS = [
  { value: '10+', label: 'Years in Kuttikkol' },
  { value: '180+', label: 'Google reviews' },
  { value: '100%', label: 'Fresh fruit & dairy' },
]

export default function About() {
  const photoRef = useReveal()
  const copyRef = useReveal()

  return (
    <section id="story" className="bg-cream-deep py-24">
      <div className="max-w-[1180px] mx-auto px-7 grid md:grid-cols-[1fr_1fr] gap-12 lg:gap-14 items-center">
        {/* Real Storefront Photography from Reference Image */}
        <div ref={photoRef} className="reveal relative">
          <div className="rounded-xl2 overflow-hidden shadow-soft border-4 border-white/90 bg-[#1F1713] group shadow-[0_20px_50px_-15px_rgba(58,32,20,0.3)]">
            <div className="relative aspect-[3/2] w-full overflow-hidden">
              <img
                src={storefrontImg}
                alt="Sugar Lips Bakes & Cool Storefront in Kuttikkol, Taliparamba"
                onError={(e) => {
                  e.currentTarget.src = '/images/storefront.jpg'
                }}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                loading="eager"
              />
              <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white border border-white/20 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                📍 Our Shop in Kuttikkol
              </span>
            </div>
          </div>

          {/* Google Rating Badge */}
          <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-4 bg-cream rounded-full w-[105px] h-[105px] sm:w-[118px] sm:h-[118px] shadow-soft border border-black/10 flex flex-col items-center justify-center text-center z-10">
            <strong className="font-serif text-[24px] sm:text-[26px] text-gold-deep leading-none">
              4.3★
            </strong>
            <span className="text-[9.5px] sm:text-[10px] font-bold text-ink-soft mt-0.5 leading-tight">
              GOOGLE
              <br />
              RATING
            </span>
          </div>
        </div>

        {/* Story Copy: Juices, Shakes & Snacks */}
        <div ref={copyRef} className="reveal">
          <IconSwirlDivider className="w-16 h-7 text-gold mb-4.5" />
          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.1]">Our Story</h2>
          <p className="mt-4 text-[19px] text-cocoa-light font-semibold">
            Sugar Lips started in Kuttikkol, where a passion for fresh flavours grew into
            Taliparamba's favourite corner for cold juices, thick shakes and hot snacks.
          </p>
          <p className="mt-4 text-[16.5px] text-ink-soft">
            Every juice, shake and snack we serve is made fresh to order — no shortcuts, no
            artificial powders. Fruit is cut fresh through the day, shakes are blended with real
            dairy and ice cream, and savoury snacks are fried crisp to order.
          </p>
          <p className="mt-4 text-[16.5px] text-ink-soft">
            Today we blend energizing juices and signature shakes for the daily crowd, fry up
            golden puffs and cutlets for anyone stopping by, and welcome families and friends from
            all across Kannur.
          </p>

          <div className="grid grid-cols-3 gap-4.5 mt-8">
            {STATS.map((s) => (
              <div key={s.label} className="border-l-2 border-gold pl-3.5">
                <strong className="block font-serif text-[26px] text-cocoa">{s.value}</strong>
                <span className="text-[12.5px] text-ink-soft">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
