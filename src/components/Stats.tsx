export default function Stats() {
  const stats = [
    { number: '13+', label: 'Jaar ervaring' },
    { number: '50+', label: 'Tevreden klanten' },
    { number: '100%', label: 'Kwaliteitsgarantie' },
    { number: '6/7', label: 'Dagen bereikbaar' },
  ];

  return (
    <section className="relative z-10 -mt-16 md:-mt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-2xl shadow-lg py-8 md:py-10 px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-4 md:px-6">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white/80">
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
