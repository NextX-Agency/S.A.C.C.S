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
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-16 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Image column — logo-inspired three-circle badge */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl relative">
              <Image
                src="/beeld/about.jpg"
                alt="S.A.C.C.S. medewerker reinigt meubilair"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                loading="lazy"
              />
            </div>

            {/* Three-circle badge — echoes the logo mark */}
            <div className="absolute -top-5 -right-3 lg:-top-8 lg:-right-8" aria-hidden>
              <div className="relative w-24 h-20 lg:w-32 lg:h-28">
                {/* Three overlapping circles, logo-inspired */}
                <div className="absolute top-0 left-0 w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-forest opacity-90" />
                <div className="absolute top-0 right-0 w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-primary opacity-80" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-primary-container opacity-70" />
                {/* Text centered on the badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-xl lg:text-2xl font-black leading-none drop-shadow-sm">13+</div>
                    <div className="text-[10px] lg:text-xs font-semibold drop-shadow-sm">Jaar</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founding year strip */}
            <div className="mt-5 flex items-center gap-4">
              <div className="h-px flex-1 bg-primary" />
              <span className="text-xs text-on-surface-variant font-medium whitespace-nowrap uppercase tracking-wider">
                Opgericht 2012 · 13+ jaar in dienst
              </span>
            </div>
          </div>

          {/* Content column */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '180ms' }}
          >
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Over ons</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-on-surface mb-4">
                Kwaliteit door Ervaring
              </h2>
              <p className="text-on-surface-variant text-sm lg:text-base leading-relaxed">
                S.A.C.C.S. Schoonmaakdiensten is sinds 2012 een begrip in de sector.
                Wij combineren jarenlange expertise met de modernste technieken om
                uw ruimte altijd op zijn best te presenteren.
              </p>
            </div>

            {/* Feature list — circle icons */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex gap-4 items-start transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${280 + index * 130}ms` }}
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm lg:text-base text-primary mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {feature.description}
                    </p>
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
