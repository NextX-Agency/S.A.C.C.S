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
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-16 lg:py-32 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Unified responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image with floating badge */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 lg:-translate-x-8'
            }`}
          >
            <div className="aspect-[4/3] lg:aspect-[4/5] rounded-2xl lg:rounded-xl overflow-hidden shadow-xl lg:shadow-2xl relative">
              <Image
                src="/beeld/about.jpg"
                alt="S.A.C.C.S. medewerker reinigt meubilair"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-5 -right-2 lg:-top-10 lg:-right-10 bg-primary p-8 lg:p-12 rounded-full flex flex-col items-center justify-center shadow-lg">
              <span className="text-white text-2xl lg:text-3xl font-black leading-none">13+</span>
              <span className="text-white text-xs lg:text-sm font-normal">Jaar</span>
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
              <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-on-surface">
                Kwaliteit door Ervaring
              </h2>
              <p className="text-on-surface-variant text-sm lg:text-lg leading-relaxed">
                S.A.C.C.S. Schoonmaakdiensten is sinds 2012 een begrip in de sector. Wij combineren jarenlange expertise met de modernste technieken.
              </p>
            </div>

            <div className="space-y-5 lg:space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex gap-4 lg:gap-6 items-start bg-surface-container-lowest lg:bg-transparent p-5 lg:p-0 rounded-2xl lg:rounded-none transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-primary-container/10 lg:bg-white rounded-2xl lg:rounded-full lg:shadow-sm flex items-center justify-center flex-shrink-0 text-primary">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-xl font-bold mb-1 text-primary">{feature.title}</h4>
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
