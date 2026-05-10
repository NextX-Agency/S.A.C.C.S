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

          {/* Image column */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg relative">
              <Image
                src="/beeld/about.jpg"
                alt="S.A.C.C.S. medewerker reinigt meubilair"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                loading="lazy"
              />
            </div>
            {/* Founding label below image */}
            <div className="mt-5 flex items-center gap-4">
              <div className="h-px flex-1 bg-primary" />
              <span className="text-xs text-on-surface-variant font-medium whitespace-nowrap uppercase tracking-wider">
                Opgericht in 2012 — 13+ jaar in dienst
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

            {/* Feature list with dividers */}
            <div className="divide-y divide-outline-variant/30">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex gap-5 items-start py-5 first:pt-0 last:pb-0 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${280 + index * 130}ms` }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm lg:text-base text-on-surface mb-1">
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
