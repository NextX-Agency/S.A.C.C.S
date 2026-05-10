'use client';

import { useEffect, useRef, useState } from 'react';
import { Building2, Home, CalendarDays, Sparkles, type LucideIcon } from 'lucide-react';

const services: { icon: LucideIcon; title: string; description: string; tag?: string }[] = [
  {
    icon: Building2,
    title: 'Zakelijke Schoonmaak',
    description: 'Complete ontzorging voor uw kantoor of bedrijfspand met oog voor detail.',
    tag: 'Meest gevraagd',
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
    <section ref={sectionRef} id="services" className="py-16 lg:py-32 bg-surface-container-lowest relative overflow-hidden">
      {/* Background bubble decoration — large, subtle */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-primary-container/10 animate-saccs-a" />
        <div className="absolute bottom-0 -left-20 w-64 h-64 rounded-full bg-primary/5 animate-saccs-c" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <div className="mb-10 lg:mb-20 space-y-3 lg:space-y-4 max-w-2xl">
          {/* Bubble trio — echoes logo */}
          <div className="flex items-center" aria-hidden="true">
            <div className="w-3 h-3 rounded-full bg-on-primary-container" />
            <div className="w-4 h-4 rounded-full bg-primary -ml-1.5" />
            <div className="w-3 h-3 rounded-full bg-primary-container -ml-1.5" />
          </div>
          <h2 className="font-heading text-3xl lg:text-5xl font-extrabold tracking-tight text-on-surface">Onze Specialismen</h2>
          <p className="text-on-surface-variant text-sm lg:text-lg leading-relaxed">
            Wij bieden een breed scala aan diensten aan, afgestemd op de specifieke behoeften van zowel de zakelijke als de particuliere sector.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative bg-surface p-6 lg:p-8 rounded-2xl flex items-start gap-5 lg:flex-col lg:gap-0 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-transparent hover:border-primary/20 overflow-hidden ${
                index === 0 ? 'ring-1 ring-primary/30 shadow-lg' : ''
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms', transitionDuration: '700ms' }}
            >
              {/* Ghost number */}
              <span className="absolute -bottom-3 -right-1 text-8xl font-black text-primary/5 select-none pointer-events-none leading-none">
                0{index + 1}
              </span>

              {/* "Meest gevraagd" badge */}
              {service.tag && (
                <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {service.tag}
                </div>
              )}

              {/* Icon — bubble-shaped */}
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary lg:mb-6 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 lg:w-7 lg:h-7" />
              </div>

              <div>
                <h3 className="font-bold text-lg lg:text-xl mb-1 lg:mb-3 text-on-surface">{service.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed lg:mb-6">{service.description}</p>
              </div>

              {/* Animated underline */}
              <div className="hidden lg:block h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
