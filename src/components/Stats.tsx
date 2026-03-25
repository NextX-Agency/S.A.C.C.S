export default function Stats() {
  const stats = [
    { number: '13+', label: 'Jaren Ervaring' },
    { number: '50+', label: 'Blije Klanten' },
    { number: '100%', label: 'Kwaliteitsgarantie' },
    { number: '6/7', label: 'Dagen Beschikbaar' },
  ];

  return (
    <section className="py-12 lg:py-24 bg-surface lg:bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Centered stacked stat cards */}
        <div className="lg:hidden px-6">
          <div className="max-w-md mx-auto grid grid-cols-1 gap-8 text-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-8 rounded-3xl bg-primary-container/5 relative overflow-hidden"
              >
                <div className="text-5xl font-extrabold text-on-primary-container mb-2 tracking-tighter">{stat.number}</div>
                <div className="text-sm font-bold uppercase tracking-widest text-primary">{stat.label}</div>
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
