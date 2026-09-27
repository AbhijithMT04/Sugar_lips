import useReveal from '../hooks/useReveal'
import { IconSwirlDivider, IconPin, IconPhone, IconClock, IconWhatsApp, IconBag } from './Icons'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, DIRECTIONS_URL, MAP_EMBED_URL, ADDRESS } from '../constants'

export default function Contact() {
  const headRef = useReveal()
  const cardRef = useReveal()
  const mapRef = useReveal()
  const ctaRef = useReveal()

  return (
    <>
      <section id="visit" className="bg-cream-deep py-24">
        <div className="max-w-[1180px] mx-auto px-7">
          <div ref={headRef} className="reveal max-w-[640px] mb-14">
            <IconSwirlDivider className="w-16 h-7 text-gold mb-4.5" />
            <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.1]">Visit or order</h2>
            <p className="mt-4 text-[16.5px] text-ink-soft">
              Stop by the shop, call ahead, or place your order on WhatsApp — whichever's easiest
              for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div id="order" ref={cardRef} className="reveal bg-cream rounded-xl2 border border-black/10 p-9 shadow-soft">
              <div className="flex gap-4 py-4.5 border-b border-black/10">
                <IconPin className="w-6 h-6 text-gold-deep flex-none mt-0.5" />
                <div>
                  <strong className="block text-[15px] text-cocoa mb-0.5">Address</strong>
                  <span className="text-[14.5px] text-ink-soft">{ADDRESS}</span>
                </div>
              </div>
              <div className="flex gap-4 py-4.5 border-b border-black/10">
                <IconPhone className="w-6 h-6 text-gold-deep flex-none mt-0.5" />
                <div>
                  <strong className="block text-[15px] text-cocoa mb-0.5">Phone</strong>
                  <a href={PHONE_TEL} className="text-[14.5px] text-ink-soft hover:text-gold-deep">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex gap-4 py-4.5">
                <IconClock className="w-6 h-6 text-gold-deep flex-none mt-0.5" />
                <div>
                  <strong className="block text-[15px] text-cocoa mb-1">Opening hours</strong>
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="text-cocoa font-bold text-sm w-32 py-0.5">Mon – Sat</td>
                        <td className="text-ink-soft text-sm py-0.5">9:00 AM – 9:00 PM</td>
                      </tr>
                      <tr>
                        <td className="text-cocoa font-bold text-sm w-32 py-0.5">Sunday</td>
                        <td className="text-ink-soft text-sm py-0.5">9:00 AM – 8:00 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gold hover:bg-gold-deep transition-all hover:-translate-y-0.5 text-[#2A1B08] font-bold text-[15px] px-7 py-[15px] shadow-[0_12px_24px_-10px_rgba(166,116,31,0.65)]"
                >
                  <IconWhatsApp className="w-[18px] h-[18px]" />
                  Order on WhatsApp
                </a>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-2.5 rounded-full bg-cocoa hover:bg-[#2a1d15] transition-all hover:-translate-y-0.5 text-cream font-bold text-[15px] px-7 py-[15px]"
                >
                  Call to Order
                </a>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-cocoa text-cocoa hover:bg-cocoa hover:text-cream transition-all font-bold text-[15px] px-7 py-[15px]"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div ref={mapRef} className="reveal rounded-xl2 overflow-hidden border border-black/10 shadow-soft h-full min-h-[420px]">
              <iframe
                src={MAP_EMBED_URL}
                className="w-full h-full min-h-[420px] border-0 block"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map to Sugar Lips Bakery, Kuttikkol, Taliparamba"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-24">
        <div ref={ctaRef} className="reveal max-w-[1180px] mx-auto px-7">
          <IconSwirlDivider className="w-16 h-7 text-gold mb-4.5 mx-auto" />
          <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.1]">
            Ready to order?
          </h2>
          <p className="mt-4 text-[17px] text-ink-soft">
            Cake, juice, shake or a snack platter — tell us what you need and we'll take it from
            there.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5 mt-7.5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-gold hover:bg-gold-deep transition-all hover:-translate-y-0.5 text-[#2A1B08] font-bold text-[15px] px-7 py-[15px] shadow-[0_12px_24px_-10px_rgba(166,116,31,0.65)]"
            >
              <IconWhatsApp className="w-[18px] h-[18px]" />
              WhatsApp Us
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2.5 rounded-full border border-cocoa text-cocoa hover:bg-cocoa hover:text-cream transition-all font-bold text-[15px] px-7 py-[15px]"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
