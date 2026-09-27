import useReveal from '../hooks/useReveal'
import { IconSwirlDivider, IconStar } from './Icons'

const REVIEWS = [
  {
    stars: 5,
    quote:
      "Ordered a two-tier cake for my daughter's birthday with barely two days' notice — they still managed it, and it looked better than the reference photo I sent.",
    initials: 'AR',
    name: 'Anjali R.',
    place: 'Taliparamba',
  },
  {
    stars: 4,
    quote:
      "Stopped by for a mango shake and ended up taking home a box of cutlets too. Everything's made fresh right in front of you — you can smell it.",
    initials: 'TJ',
    name: 'Thomas J.',
    place: 'Kuttikkol',
  },
  {
    stars: 5,
    quote:
      "Needed 40 pastry boxes for an office event with one day's notice. They said yes on WhatsApp within minutes and delivered on time. Reliable people.",
    initials: 'SK',
    name: 'Sana K.',
    place: 'Payyanur',
  },
]

function Stars({ count, size = 'w-4 h-4' }) {
  return (
    <div className="flex gap-0.5 text-gold" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className={size} style={{ opacity: i < count ? 1 : 0.35 }} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="reviews" className="py-24">
      <div className="max-w-[1180px] mx-auto px-7">
        <div ref={headRef} className="reveal max-w-[640px] mx-auto text-center mb-14">
          <IconSwirlDivider className="w-16 h-7 text-gold mb-4.5 mx-auto" />
          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.1]">
            What Kuttikkol says
          </h2>
          <p className="mt-4 text-[16.5px] text-ink-soft">
            A few words from customers who've ordered with us, straight from our Google reviews.
          </p>
        </div>

        <div ref={gridRef} className="reveal grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-cream border border-black/10 rounded-xl2 p-7 shadow-[0_20px_40px_-30px_rgba(58,32,20,0.4)]"
            >
              <Stars count={r.stars} />
              <p className="font-serif italic text-[18px] leading-relaxed text-cocoa-light mt-4">
                "{r.quote}"
              </p>
              <div className="flex items-center gap-3 mt-5.5">
                <div className="w-[42px] h-[42px] rounded-full bg-rose text-white flex items-center justify-center font-extrabold text-sm">
                  {r.initials}
                </div>
                <div>
                  <strong className="block text-[14.5px] text-cocoa">{r.name}</strong>
                  <span className="text-[12.5px] text-ink-soft">{r.place}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-11 text-center flex items-center justify-center gap-3 flex-wrap">
          <Stars count={4} size="w-[18px] h-[18px]" />
          <strong className="font-serif text-xl text-cocoa">4.3 out of 5</strong>
          <span className="text-ink-soft text-sm">— from 180+ Google reviews</span>
        </div>
      </div>
    </section>
  )
}
