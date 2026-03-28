'use client';

import { useEffect, useRef, useState } from 'react';
import { Handshake, Award, RefreshCw, type LucideIcon } from 'lucide-react';

const reasons: { icon: LucideIcon; title: string; description: string; accent: boolean }[] = [
  {
    icon: Handshake,
    title: 'Betrouwbaar',
    description: 'Wij komen onze afspraken na en behandelen uw eigendommen met het grootste respect.',
    accent: true,
  },
  {
    icon: Award,
    title: 'Kwaliteitsgarantie',
    description: 'Niet tevreden? Wij lossen het direct op. Onze kwaliteitscontrole is ongeëvenaard.',
    accent: false,
  },
  {
    icon: RefreshCw,
    title: 'Flexibel',
    description: 'Aanpassingen in planning of extra diensten zijn bij ons snel geregeld.',
    accent: false,
  },
];

export default function ReferencesSection() {
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
    <section ref={sectionRef} id="references" className="py-16 lg:py-32 bg-forest">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Mobile: Compact header */}
        <div className="text-center lg:text-center mb-10 lg:mb-20">
          <h2 className="font-heading text-3xl lg:text-5xl font-extrabold tracking-tight mb-3 lg:mb-4 text-white">Waarom S.A.C.C.S.?</h2>
          <p className="text-white/60 text-sm lg:text-base">Onze fundamenten rusten op drie kernbeloften.</p>
        </div>

        {/* Unified responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`p-8 lg:p-10 rounded-2xl lg:rounded-xl space-y-3 lg:space-y-4 lg:hover:-translate-y-2 transition-all ${
                reason.accent
                  ? 'bg-white text-on-surface shadow-xl'
                  : 'bg-forest-card border border-white/10 text-white'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDuration: '500ms', transitionDelay: `${index * 150}ms` }}
            >
              <reason.icon
                className={`w-8 h-8 lg:w-9 lg:h-9 text-primary`}
              />
              <h3 className="text-xl lg:text-2xl font-bold">{reason.title}</h3>
              <p className={`leading-relaxed ${reason.accent ? 'text-on-surface-variant' : 'text-white/70'}`}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
