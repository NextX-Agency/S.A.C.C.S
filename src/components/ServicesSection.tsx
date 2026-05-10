'use client';

import { useEffect, useRef, useState } from 'react';
import { Building2, Home, CalendarDays, Sparkles, type LucideIcon } from 'lucide-react';

const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Building2,
    title: 'Zakelijke Schoonmaak',
    description: 'Complete ontzorging voor uw kantoor of bedrijfspand met oog voor elk detail.',
  },
  {
    icon: Home,
    title: 'Particuliere Schoonmaak',
    description: 'Een fris en hygiënisch thuis zonder dat u er zelf naar om hoeft te kijken.',
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
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05, rootMargin: '50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-16 lg:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10 lg:mb-16 max-w-2xl">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Wat wij doen</p>
          <h2 className="font-heading text-3xl lg:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
            Onze Specialismen
          </h2>
          <p className="text-on-surface-variant text-sm lg:text-base leading-relaxed">
            Wij bieden een breed scala aan diensten aan, afgestemd op de specifieke
            behoeften van zowel de zakelijke als de particuliere sector.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white rounded-xl p-6 lg:p-7 border border-outline-variant/30 hover:border-primary hover:shadow-lg transition-all duration-200 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionProperty: 'opacity, transform, box-shadow, border-color',
                transitionDuration: isVisible ? '600ms' : '0ms',
                transitionDelay: isVisible ? `${index * 120}ms` : '0ms',
              }}
            >
              {/* Number label */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs font-black text-primary tracking-widest">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 h-px bg-outline-variant/40" />
              </div>

              {/* Icon */}
              <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                <service.icon className="w-5 h-5" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-base lg:text-lg text-on-surface mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
