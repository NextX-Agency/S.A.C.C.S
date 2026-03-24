'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const features = [
  {
    icon: 'verified',
    title: 'Professioneel',
    description: 'Gecertificeerd personeel en professionele apparatuur voor het beste resultaat.',
  },
  {
    icon: 'groups',
    title: 'Ervaren Team',
    description: 'Onze medewerkers zijn getraind in de fijne kneepjes van specialistische reiniging.',
  },
  {
    icon: 'schedule',
    title: 'Snel & Flexibel',
    description: 'Wij passen ons aan uw agenda aan voor minimale verstoring van uw processen.',
  },
];

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Image with floating badge */}
        <div
          className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative">
            <Image
              src="/beeld/stallatie.jpeg"
              alt="Cleaning crew at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div className="absolute -top-10 -right-10 bg-primary p-12 rounded-full hidden md:flex flex-col items-center justify-center">
            <span className="text-white text-3xl font-black leading-none">13+</span>
            <span className="text-white text-sm font-normal">Jaar</span>
          </div>
        </div>

        {/* Right: Content */}
        <div
          className={`space-y-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-black tracking-tighter text-on-surface">
              Kwaliteit door Ervaring
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              S.A.C.C.S. Schoonmaakdiensten is sinds 2012 een begrip in de sector. Wij combineren jarenlange expertise met de modernste technieken.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex gap-6"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-primary">{feature.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
