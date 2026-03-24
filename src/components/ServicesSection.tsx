'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: 'corporate_fare',
    title: 'Zakelijke Schoonmaak',
    description: 'Complete ontzorging voor uw kantoor of bedrijfspand met oog voor detail.',
  },
  {
    icon: 'home',
    title: 'Particuliere Schoonmaak',
    description: 'Een fris en hygiënisch thuis zonder dat u er zelf omkijken naar heeft.',
  },
  {
    icon: 'event',
    title: 'Evenementenservice',
    description: 'Professionele ondersteuning voor, tijdens en na uw grootschalige events.',
  },
  {
    icon: 'sanitizer',
    title: 'Specialistische Diensten',
    description: 'Dieptereiniging, glasbewassing en vloeronderhoud op topniveau.',
  },
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-16 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10 lg:mb-20 space-y-3 lg:space-y-4 max-w-2xl">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-on-surface">Onze Specialismen</h2>
          <p className="hidden lg:block text-on-surface-variant text-lg leading-relaxed">
            Wij bieden een breed scala aan diensten aan, afgestemd op de specifieke behoeften van zowel de zakelijke als de particuliere sector.
          </p>
        </div>

        {/* Mobile: Numbered list */}
        <div className="lg:hidden flex flex-col gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group border-b border-outline-variant/20 pb-10 last:border-0 transition-all ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDuration: '700ms', transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-4">
                {String(index + 1).padStart(2, '0')}.
              </span>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary font-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Desktop: Card grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-surface-container-lowest p-8 rounded-xl hover:shadow-2xl transition-all group cursor-pointer border border-transparent hover:border-primary-fixed ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDuration: '700ms', transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="w-14 h-14 bg-primary-container/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
