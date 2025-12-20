'use client';

import { useEffect, useRef, useState } from 'react';

const references = [
  {
    name: 'Marriott Hotel',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
    category: 'Hospitality',
  },
  {
    name: 'Torarica Hotel',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
    category: 'Hospitality',
  },
  {
    name: 'Hard Rock Cafe',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    category: 'Horeca',
  },
  {
    name: 'Radisson Hotel',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
    category: 'Hospitality',
  },
  {
    name: 'AZP Suriname',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    category: 'Gezondheidszorg',
  },
];

export default function ReferencesSection() {
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
    <section ref={sectionRef} id="referenties" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Onze Referenties</h2>
          <div className="title-underline" />
          <p className="section-subtitle">
            Vertrouwd door toonaangevende organisaties in Suriname
          </p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {references.map((ref, index) => (
            <div
              key={ref.name}
              className={`bg-white p-6 rounded-2xl shadow-saccs-sm text-center group hover:shadow-saccs-lg transition-all duration-500 border border-gray-100 hover:border-primary/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-saccs-md">
                {ref.icon}
              </div>
              <h3 className="font-heading text-sm lg:text-base font-bold text-saccs-text mb-1">{ref.name}</h3>
              <p className="text-xs text-saccs-grey">{ref.category}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Waarom klanten voor SACCS kiezen
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                Onze toewijding aan kwaliteit en betrouwbaarheid heeft ons het vertrouwen van vele
                vooraanstaande organisaties in Suriname opgeleverd.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: '✓', title: 'Betrouwbaar', desc: 'Altijd op tijd' },
                { icon: '★', title: 'Kwaliteit', desc: 'Gegarandeerd resultaat' },
                { icon: '♻', title: 'Duurzaam', desc: 'Milieuvriendelijk' },
                { icon: '⚡', title: 'Flexibel', desc: 'Op maat gemaakt' },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-heading font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
