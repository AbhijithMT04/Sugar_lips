import { IconStar, IconClock, IconPin, IconBag } from './Icons'

export default function Hero() {
  return (
    <>
      <div id="top" />
      <section className="relative overflow-hidden min-h-screen flex items-center pt-[140px] pb-[70px] isolate">
        {/* Real Cafe / Bakery Atmosphere Background */}
        <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
          <img
            src="/images/bakery-bg.jpg"
            alt=""
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80'
            }}
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#20130B]/95 via-[#2C1A10]/90 to-[#20130B]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#20130B] via-transparent to-[#20130B]/70" />
        </div>

        <div className="max-w-[1180px] mx-auto px-6 sm:px-7 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Story & Call to Actions */}
            <div className="lg:col-span-7 relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 text-white font-bold text-[12.5px] pl-2.5 pr-4 py-1.5 backdrop-blur-sm shadow-sm">
                <IconPin className="w-[15px] h-[15px] text-gold" />
                Kuttikkol · Taliparamba · Kerala
              </span>

              <h1 className="text-[38px] sm:text-[48px] lg:text-[54px] xl:text-[58px] leading-[1.08] mt-5 -tracking-[0.01em] text-white">
                Baked fresh,{' '}
                <em className="not-italic italic text-rose">
                  made
                  <br />
                  with love.
                </em>
                <span className="block font-mal text-[0.36em] text-white/80 mt-3 font-medium not-italic">
                  ഷുഗർ ലിപ്സ് — ബേക്സ് &amp; കൂൾസ്
                </span>
              </h1>

              <p className="mt-5 text-[16.5px] sm:text-[17.5px] text-white/90 max-w-[52ch] leading-relaxed font-sans">
                Sugar Lips is a small family bakery and juice corner in Kuttikkol, Taliparamba —
                handcrafting cakes and fresh bakes, and serving up cold juices, shakes and snacks
                for the people of Kannur district. Real fruit, real cream, made fresh to order.
              </p>

              <div className="flex flex-wrap gap-3.5 mt-8">
                <a
                  href="#order"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gold hover:bg-gold-deep transition-all hover:-translate-y-0.5 text-[#2A1B08] font-bold text-[15px] px-7 py-[15px] shadow-[0_12px_24px_-10px_rgba(166,116,31,0.65)]"
                >
                  <IconBag className="w-[18px] h-[18px]" />
                  Order Now
                </a>
                <a
                  href="#favourites"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black/40 border border-white/50 text-white font-bold text-[15px] px-7 py-[15px] backdrop-blur-sm hover:bg-black/60 transition-colors"
                >
                  See Our Favourites
                </a>
              </div>

              <div className="flex flex-wrap gap-5 sm:gap-7 mt-10 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <IconStar className="w-[18px] h-[18px] text-gold" />
                  <span className="text-[13px] sm:text-[13.5px] text-white/85 font-semibold">
                    4.3 on Google
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IconClock className="w-[18px] h-[18px] text-gold" />
                  <span className="text-[13px] sm:text-[13.5px] text-white/85 font-semibold">
                    Open daily from 9 AM
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IconPin className="w-[18px] h-[18px] text-gold" />
                  <span className="text-[13px] sm:text-[13.5px] text-white/85 font-semibold">
                    Kuttikkol, Taliparamba
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Real Images of Juices, Shakes & Snacks */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              {/* Subtle ambient warm glow behind cards */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-gold/20 via-rose/20 to-transparent rounded-3xl blur-2xl -z-10" />

              {/* Counter status badge */}
              <div className="flex items-center justify-between mb-3.5 bg-black/50 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs uppercase tracking-wider text-white font-bold">
                    Fresh At Our Counter
                  </span>
                </div>
                <span className="text-xs text-gold font-semibold">Juices · Shakes · Snacks</span>
              </div>

              {/* Real Food Photography Showcase */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 1. Real Juice Image Card */}
                <a
                  href="#favourites"
                  className="group relative h-[195px] rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:border-gold/60 transition-all duration-300 block"
                >
                  <img
                    src="/images/fresh-juice.jpg"
                    alt="Fresh cold-pressed fruit juices and citrus coolers"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80'
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:from-black/95 transition-colors" />
                  <span className="absolute top-2.5 left-2.5 bg-black/65 backdrop-blur-md text-gold border border-gold/40 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    🍹 Fresh Juices
                  </span>
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <h3 className="font-bold text-white text-[15px] sm:text-[16px] leading-snug group-hover:text-gold transition-colors font-sans">
                      Fruit Juices &amp; Coolers
                    </h3>
                    <p className="text-[11.5px] text-white/80 line-clamp-1 mt-0.5">
                      Cold-pressed orange, mango &amp; fresh lime
                    </p>
                  </div>
                </a>

                {/* 2. Real Shake Image Card */}
                <a
                  href="#favourites"
                  className="group relative h-[195px] rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:border-gold/60 transition-all duration-300 block"
                >
                  <img
                    src="/images/creamy-shake.jpg"
                    alt="Thick creamy milkshakes and smoothies"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80'
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:from-black/95 transition-colors" />
                  <span className="absolute top-2.5 left-2.5 bg-black/65 backdrop-blur-md text-gold border border-gold/40 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    🥤 Creamy Shakes
                  </span>
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <h3 className="font-bold text-white text-[15px] sm:text-[16px] leading-snug group-hover:text-gold transition-colors font-sans">
                      Thick Milkshakes
                    </h3>
                    <p className="text-[11.5px] text-white/80 line-clamp-1 mt-0.5">
                      Rich chocolate, fruit &amp; ice cream shakes
                    </p>
                  </div>
                </a>

                {/* 3. Real Snacks Image Card */}
                <a
                  href="#favourites"
                  className="group relative h-[165px] sm:col-span-2 rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:border-gold/60 transition-all duration-300 block"
                >
                  <img
                    src="/images/crisp-snacks.jpg"
                    alt="Hot bakery snacks, puffs and cutlets"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/15 group-hover:from-black/95 transition-colors" />
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-2">
                    <span className="bg-black/65 backdrop-blur-md text-gold border border-gold/40 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      🥐 Hot Bakery Snacks
                    </span>
                    <span className="bg-rose-deep/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider hidden sm:inline-block">
                      Fried Fresh
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-3 right-3 text-white flex items-end justify-between">
                    <div>
                      <h3 className="font-bold text-white text-[15px] sm:text-[16px] leading-snug group-hover:text-gold transition-colors font-sans">
                        Crisp Puffs, Cutlets &amp; Samosas
                      </h3>
                      <p className="text-[11.5px] text-white/80 line-clamp-1 mt-0.5">
                        Freshly fried golden savouries ready at the counter
                      </p>
                    </div>
                    <span className="text-gold text-xs font-semibold underline underline-offset-2 hidden sm:block shrink-0 pl-2">
                      See menu →
                    </span>
                  </div>
                </a>
              </div>

              {/* Quality highlight banner */}
              <div className="mt-3.5 bg-black/45 backdrop-blur-md border border-white/15 rounded-2xl p-3 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gold/25 flex items-center justify-center text-gold font-bold text-base shrink-0">
                    ✨
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">
                      100% Real Fruit &amp; Dairy
                    </p>
                    <p className="text-[11px] text-white/70 leading-tight">
                      No synthetic concentrates or shortcuts
                    </p>
                  </div>
                </div>
                <a
                  href="#favourites"
                  className="text-gold hover:text-gold-deep text-xs font-bold transition-colors whitespace-nowrap pl-2"
                >
                  Explore →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
