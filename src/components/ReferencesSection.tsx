'use client';

import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    icon: 'handshake',
    title: 'Betrouwbaar',
    description: 'Wij komen onze afspraken na en behandelen uw eigendommen met het grootste respect.',
    accent: true,
  },
  {
    icon: 'workspace_premium',
    title: 'Kwaliteitsgarantie',
    description: 'Niet tevreden? Wij lossen het direct op. Onze kwaliteitscontrole is ongeëvenaard.',
    accent: false,
  },
  {
    icon: 'update',
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
    <section ref={sectionRef} id="references" className="py-16 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Mobile: Compact header */}
        <div className="text-center lg:text-center mb-10 lg:mb-20">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight mb-3 lg:mb-4">Waarom S.A.C.C.S.?</h2>
          <p className="text-on-surface-variant text-sm lg:text-base">Onze fundamenten rusten op drie kernbeloften.</p>
        </div>

        {/* Mobile: Stacked cards with more spacing */}
        <div className="flex flex-col gap-6 lg:hidden">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`p-8 rounded-2xl space-y-3 transition-all ${
                reason.accent
                  ? 'bg-primary text-white shadow-xl'
                  : 'bg-surface-container-lowest border border-outline-variant/30 shadow-sm'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDuration: '500ms', transitionDelay: `${index * 150}ms` }}
            >
              <span
                className={`material-symbols-outlined text-3xl ${
                  reason.accent ? '' : 'text-primary'
                }`}
              >
                {reason.icon}
              </span>
              <h3 className="text-xl font-bold">{reason.title}</h3>
              <p className={`leading-relaxed font-light ${reason.accent ? 'opacity-80' : 'text-secondary'}`}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`p-10 rounded-xl space-y-4 hover:-translate-y-2 transition-transform ${
                reason.accent
                  ? 'bg-primary text-white shadow-xl'
                  : 'bg-surface-container-lowest border border-outline-variant/30 shadow-sm'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDuration: '500ms', transitionDelay: `${index * 150}ms` }}
            >
              <span
                className={`material-symbols-outlined text-4xl ${
                  reason.accent ? '' : 'text-primary'
                }`}
              >
                {reason.icon}
              </span>
              <h3 className="text-2xl font-bold">{reason.title}</h3>
              <p className={`leading-relaxed ${reason.accent ? 'opacity-80' : 'text-on-surface-variant'}`}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
