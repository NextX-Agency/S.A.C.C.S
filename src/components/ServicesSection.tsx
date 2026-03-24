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
        {/* Left-aligned header */}
        <div className="mb-10 lg:mb-20 space-y-3 lg:space-y-4 max-w-2xl">
          <h2 className="font-heading text-2xl lg:text-4xl font-bold text-on-surface">Onze Specialismen</h2>
          <p className="text-on-surface-variant text-sm lg:text-lg leading-relaxed">
            Wij bieden een breed scala aan diensten aan, afgestemd op de specifieke behoeften van zowel de zakelijke als de particuliere sector.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-surface-container-lowest p-5 lg:p-8 rounded-xl hover:shadow-2xl transition-all group cursor-pointer border border-transparent hover:border-primary-fixed ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDuration: '700ms', transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary-container/10 rounded-full flex items-center justify-center mb-4 lg:mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl lg:text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3">{service.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4 lg:mb-6">
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
