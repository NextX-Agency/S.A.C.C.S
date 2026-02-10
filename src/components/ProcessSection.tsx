'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Inventarisatie',
    description:
      'We beginnen met een grondige inventarisatie van uw ruimte en behoeften.',
  },
  {
    number: '02',
    title: 'Op Maat Gemaakt Plan',
    description:
      'Op basis van de inventarisatie maken we een schoonmaakplan afgestemd op uw wensen.',
  },
  {
    number: '03',
    title: 'Uitvoering',
    description:
      'Ons professioneel team voert het plan uit met aandacht voor detail.',
  },
  {
    number: '04',
    title: 'Kwaliteitscontrole',
    description:
      'We voeren regelmatige kwaliteitscontroles uit volgens de hoogste standaarden.',
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="werkwijze" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-saccs-text mb-4">
            Onze Werkwijze
          </h2>
          <p className="text-saccs-grey text-base md:text-lg max-w-2xl mx-auto">
            Vier stappen naar een schone en professionele omgeving
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-3xl mx-auto space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex gap-4 md:gap-6 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Number */}
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-lg flex items-center justify-center text-white font-heading font-bold text-lg md:text-xl flex-shrink-0">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                <h3 className="font-heading text-lg md:text-xl font-bold text-saccs-text mb-2">
                  {step.title}
                </h3>
                <p className="text-saccs-grey text-sm md:text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            onClick={handleNavClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200"
          >
            <span>Neem contact op</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
