'use client';

import { useEffect, useRef, useState } from 'react';
import { Building2, Home, CalendarDays, Sparkles, type LucideIcon } from 'lucide-react';

const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Building2,
    title: 'Zakelijke Schoonmaak',
    description: 'Complete ontzorging voor uw kantoor of bedrijfspand met oog voor detail.',
  },
  {
    icon: Home,
    title: 'Particuliere Schoonmaak',
    description: 'Een fris en hygiënisch thuis zonder dat u er zelf omkijken naar heeft.',
  },
  {
    icon: CalendarDays,
    title: 'Evenementenservice',
    description: 'Professionele ondersteuning voor, tijdens en na uw grootschalige events.',
  },
  {
    icon: Sparkles,
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
    <section ref={sectionRef} id="services" className="py-16 lg:py-32 bg-surface-container-low/30 lg:bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10 lg:mb-20 space-y-3 lg:space-y-4 max-w-2xl">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-on-surface">Onze Specialismen</h2>
          <p className="text-on-surface-variant text-sm lg:text-lg leading-relaxed">
            Wij bieden een breed scala aan diensten aan, afgestemd op de specifieke behoeften van zowel de zakelijke als de particuliere sector.
          </p>
        </div>

        {/* Unified responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-surface-container-lowest p-6 lg:p-8 rounded-2xl lg:rounded-xl flex items-start gap-5 lg:flex-col lg:gap-0 hover:shadow-2xl transition-all group cursor-pointer border border-transparent hover:border-primary-fixed ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDuration: '700ms', transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="w-14 h-14 rounded-full bg-primary-container/15 lg:bg-primary-container/10 flex items-center justify-center flex-shrink-0 text-primary lg:mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 lg:w-7 lg:h-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg lg:text-xl mb-1 lg:mb-3">{service.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed lg:mb-6">{service.description}</p>
              </div>
              <div className="hidden lg:block h-1 w-0 bg-primary group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
