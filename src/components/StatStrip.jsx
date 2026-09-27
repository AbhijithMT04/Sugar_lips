const STATS = [
  { value: '4.3★', label: 'GOOGLE RATING' },
  { value: 'Fresh', label: 'JUICES & SHAKES' },
  { value: 'Daily', label: 'FRESH FROM 9 AM' },
  { value: '100%', label: 'HANDCRAFTED' },
]

export default function StatStrip() {
  return (
    <div className="bg-cocoa py-11">
      <div className="max-w-[1180px] mx-auto px-7 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {STATS.map((s) => (
          <div key={s.label}>
            <strong className="block font-serif text-[26px] md:text-[34px] text-rose">
              {s.value}
            </strong>
            <span className="block mt-2 text-[12px] tracking-[0.1em] font-bold text-cream/65">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
