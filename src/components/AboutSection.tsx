'use client';

import { useEffect, useRef, useState } from 'react';

const aboutCards = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: 'Sinds 2012',
    description:
      'SACCS is opgericht in 2012 en heeft zich ontwikkeld tot een van de toonaangevende schoonmaak- en consultancybedrijven in Suriname.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    title: 'Professioneel',
    description:
      'Wij leveren hoogwaardige schoonmaakdiensten met focus op kwaliteit voor bedrijven en particulieren.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Ervaren Team',
    description:
      'Ons getrainde en ervaren personeel zorgt voor een grondige en professionele aanpak bij elk project.',
  },
];

export default function AboutSection() {
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
    <section ref={sectionRef} id="over-ons" className="py-16 md:py-20 bg-saccs-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-saccs-text mb-4">
            Over Ons
          </h2>
          <p className="text-saccs-grey text-base md:text-lg max-w-2xl mx-auto">
            Ontdek waarom organisaties in Suriname kiezen voor SACCS als hun schoonmaakpartner
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {aboutCards.map((card, index) => (
            <div
              key={card.title}
              className={`corporate-card p-6 text-center transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-icon-bg rounded-lg flex items-center justify-center text-primary">
                {card.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-saccs-text mb-3">{card.title}</h3>
              <p className="text-saccs-grey text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="border-l-4 border-primary pl-6 text-left">
            <p className="text-saccs-text text-base md:text-lg leading-relaxed">
              Wij zorgen voor schone, hygiënische en uitnodigende omgevingen waarin organisaties en 
              particulieren in Suriname optimaal kunnen functioneren. Met vakmanschap, betrouwbaarheid 
              en maatwerk leveren wij schoonmaakoplossingen die meetbaar verschil maken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
