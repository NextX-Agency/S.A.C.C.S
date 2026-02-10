export default function Stats() {
  const stats = [
    { number: '13+', label: 'Jaar ervaring' },
    { number: '50+', label: 'Tevreden klanten' },
    { number: '100%', label: 'Kwaliteitsgarantie' },
    { number: '24/7', label: 'Ondersteuning' },
  ];

  return (
    <section className="bg-white py-12 md:py-16 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-4 md:px-6">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-saccs-grey">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
