export default function Stats() {
  const stats = [
    { number: '13+', label: 'Jaren Ervaring' },
    { number: '50+', label: 'Blije Klanten' },
    { number: '100%', label: 'Kwaliteitsgarantie' },
    { number: '6/7', label: 'Dagen Beschikbaar' },
  ];

  return (
    <section className="py-12 lg:py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Section title + horizontal scroller */}
        <div className="lg:hidden">
          <div className="px-6 mb-8">
            <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-outline">Onze Cijfers</h2>
          </div>
          <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 gap-4 pb-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="snap-center shrink-0 w-60 bg-surface-container-lowest p-8 rounded-3xl flex flex-col gap-2"
              >
                <span className="text-4xl font-bold text-primary tracking-tighter">{stat.number}</span>
                <span className="text-sm font-medium text-secondary uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden lg:block px-6">
          <div className="grid grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-primary-container/10 p-8 rounded-xl text-center space-y-2 group hover:bg-primary-container/20 transition-colors"
              >
                <div className="text-4xl font-black text-primary">{stat.number}</div>
                <div className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
