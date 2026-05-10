'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Users, Clock, type LucideIcon } from 'lucide-react';

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: 'Professioneel',
    description: 'Gecertificeerd personeel en professionele apparatuur voor het beste resultaat.',
  },
  {
    icon: Users,
    title: 'Ervaren Team',
    description: 'Onze medewerkers zijn getraind in de fijne kneepjes van specialistische reiniging.',
  },
  {
    icon: Clock,
    title: 'Snel & Flexibel',
    description: 'Wij passen ons aan uw agenda aan voor minimale verstoring van uw processen.',
  },
];

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setIsVisible(entry.isIntersecting); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-16 lg:py-32 bg-surface-container-low overflow-hidden relative">
      {/* Subtle background bubble — safe, fully inside bounds */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-primary-container/10 animate-saccs-b" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Image with badge */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 lg:-translate-x-8'
            }`}
          >
            {/* Wrapper with overflow-hidden to contain any badge overflow on mobile */}
            <div className="relative pt-6 pr-6 lg:pt-10 lg:pr-10">
              <div className="aspect-[4/3] lg:aspect-[4/5] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl relative">
                <Image
                  src="/beeld/about.jpg"
                  alt="S.A.C.C.S. medewerker reinigt meubilair"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>

              {/* 13+ badge — positioned inside the pt/pr wrapper so it stays visible */}
              <div className="absolute top-0 right-0 bg-primary w-20 h-20 lg:w-28 lg:h-28 rounded-full flex flex-col items-center justify-center shadow-lg z-10">
                <span className="text-white text-xl lg:text-3xl font-black leading-none">13+</span>
                <span className="text-white text-[10px] lg:text-sm font-normal">Jaar</span>
              </div>

              {/* Companion bubble decorations — desktop only to avoid mobile overflow */}
              <div className="hidden lg:block absolute top-0 right-0 pointer-events-none" aria-hidden="true">
                <div className="w-10 h-10 rounded-full bg-primary-container/40 absolute -top-3 -left-4 animate-saccs-c" />
                <div className="w-7 h-7 rounded-full bg-primary/20 absolute top-1 -left-8 animate-saccs-a" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-8 lg:space-y-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 lg:translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="space-y-3 lg:space-y-4">
              {/* Bubble trio decoration */}
              <div className="flex items-center" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-on-primary-container" />
                <div className="w-4 h-4 rounded-full bg-primary -ml-1.5" />
                <div className="w-3 h-3 rounded-full bg-primary-container -ml-1.5" />
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-on-surface">
                Kwaliteit door Ervaring
              </h2>
              <p className="text-on-surface-variant text-sm lg:text-lg leading-relaxed">
                S.A.C.C.S. Schoonmaakdiensten is sinds 2012 een begrip in de sector. Wij combineren jarenlange expertise met de modernste technieken.
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex gap-4 items-start bg-surface-container-lowest p-4 lg:p-5 rounded-2xl transition-all duration-700 hover:shadow-md ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-bold mb-1 text-primary">{feature.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
