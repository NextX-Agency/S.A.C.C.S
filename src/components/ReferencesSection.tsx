'use client';

import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    title: 'Betrouwbaar',
    description:
      'Wij komen onze afspraken na en behandelen uw eigendommen met het grootste respect. Altijd op tijd, altijd correct.',
  },
  {
    title: 'Kwaliteitsgarantie',
    description:
      'Niet tevreden? Wij lossen het direct op. Onze kwaliteitscontrole is ongeëvenaard — uw tevredenheid is onze norm.',
  },
  {
    title: 'Flexibel',
    description:
      'Aanpassingen in planning of extra diensten zijn bij ons snel geregeld. Wij werken op uw schema, niet andersom.',
  },
];

export default function ReferencesSection() {
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
    <section ref={sectionRef} id="references" className="py-16 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="mb-12 lg:mb-20">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Onze beloften</p>
          <h2 className="font-heading text-3xl lg:text-5xl font-extrabold tracking-tight text-white">
            Waarom S.A.C.C.S.?
          </h2>
        </div>

        {/* Three pillars — divider grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`lg:pr-12 lg:pl-12 first:lg:pl-0 last:lg:pr-0 py-8 lg:py-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 130}ms` }}
            >
              <span className="block text-4xl lg:text-5xl font-black text-primary mb-5 leading-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-white/55 leading-relaxed text-sm lg:text-base">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
