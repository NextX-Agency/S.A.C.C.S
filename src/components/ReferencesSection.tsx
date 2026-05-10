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
    <section ref={sectionRef} id="references" className="py-16 lg:py-32 bg-forest relative overflow-hidden">
      {/* Bubble trio background — large, translucent, echoes logo on dark bg */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/8 animate-saccs-a" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary-container/8 animate-saccs-b" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/4 animate-saccs-c" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-20">
          {/* Centered bubble trio */}
          <div className="flex items-center justify-center mb-4" aria-hidden="true">
            <div className="w-3 h-3 rounded-full bg-primary/50" />
            <div className="w-4 h-4 rounded-full bg-primary-container/70 -ml-1.5" />
            <div className="w-3 h-3 rounded-full bg-white/30 -ml-1.5" />
          </div>
          <h2 className="font-heading text-3xl lg:text-5xl font-extrabold tracking-tight mb-3 lg:mb-4 text-white">Waarom S.A.C.C.S.?</h2>
          <p className="text-white/60 text-sm lg:text-base">Onze fundamenten rusten op drie kernbeloften.</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`p-8 lg:p-10 rounded-2xl lg:rounded-3xl space-y-4 lg:hover:-translate-y-2 transition-all duration-300 ${
                reason.accent
                  ? 'bg-white text-on-surface shadow-2xl shadow-black/30'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDuration: '500ms', transitionDelay: `${index * 150}ms` }}
            >
              {/* Circular icon — bubbly */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${reason.accent ? 'bg-primary/10' : 'bg-primary/20'}`}>
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold">{reason.title}</h3>
              <p className={`leading-relaxed text-sm lg:text-base ${reason.accent ? 'text-on-surface-variant' : 'text-white/70'}`}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
