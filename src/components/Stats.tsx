export default function Stats() {
  const stats = [
    { number: '13+', label: 'Jaren Ervaring' },
    { number: '50+', label: 'Blije Klanten' },
    { number: '100%', label: 'Kwaliteitsgarantie' },
    { number: '6/7', label: 'Dagen Beschikbaar' },
  ];

  return (
    <section className="py-12 lg:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-primary-container/10 p-4 lg:p-8 rounded-xl text-center space-y-1 lg:space-y-2 group hover:bg-primary-container/20 transition-colors"
            >
              <div className="text-2xl lg:text-4xl font-black text-primary">{stat.number}</div>
              <div className="text-xs lg:text-sm font-bold uppercase tracking-wider lg:tracking-widest text-on-surface-variant">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
