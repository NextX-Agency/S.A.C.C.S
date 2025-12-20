'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Inventarisatie',
    description:
      'We beginnen met een grondige inventarisatie van uw ruimte en behoeften om een compleet beeld te krijgen.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Op Maat Gemaakt Plan',
    description:
      'Op basis van de inventarisatie maken we een schoonmaakplan dat volledig is afgestemd op uw wensen.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Getraind Personeel',
    description:
      'Ons professioneel getrainde team voert het plan uit met de hoogste zorgvuldigheid en aandacht voor detail.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Kwaliteitscontrole',
    description:
      'We voeren regelmatig kwaliteitscontroles uit om te zorgen dat alles volgens de hoogste standaarden wordt uitgevoerd.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
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
    <section ref={sectionRef} id="werkwijze" className="py-24 bg-saccs-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Onze Werkwijze</h2>
          <div className="title-underline" />
          <p className="section-subtitle">
            Vier stappen naar een schone en professionele omgeving
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex gap-6 md:gap-8 mb-12 last:mb-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Number & Line */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center text-white font-heading font-bold text-xl md:text-2xl shadow-saccs-lg flex-shrink-0">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 flex-1 bg-gradient-to-b from-primary/50 to-transparent my-4" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl shadow-saccs-sm border border-gray-100 hover:shadow-saccs-md transition-shadow duration-300 mt-2">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex w-12 h-12 bg-primary/10 rounded-xl items-center justify-center text-primary flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-saccs-text mb-3">
                      {step.title}
                    </h3>
                    <p className="text-saccs-grey leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="inline-flex items-center gap-4 p-6 bg-white rounded-2xl shadow-saccs-md">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-saccs-grey text-sm">Klaar om te beginnen?</p>
              <a
                href="#contact"
                className="font-heading font-bold text-primary hover:text-primary-dark transition-colors"
              >
                Neem contact met ons op →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
