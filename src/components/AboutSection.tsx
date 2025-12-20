'use client';

import { useEffect, useRef, useState } from 'react';

const aboutCards = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    title: 'Professioneel',
    description:
      'Wij leveren hoogwaardige schoonmaakdiensten met focus op kwaliteit, betrouwbaarheid en flexibiliteit voor zowel bedrijven als particulieren.',
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    <section ref={sectionRef} id="over-ons" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Over Ons</h2>
          <div className="title-underline" />
          <p className="section-subtitle">
            Ontdek waarom organisaties in Suriname kiezen voor SACCS als hun schoonmaakpartner
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <div
              key={card.title}
              className={`bg-white p-8 rounded-2xl shadow-saccs-sm border border-gray-100 card-hover text-center transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center text-white shadow-saccs-md">
                {card.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-saccs-text mb-4">{card.title}</h3>
              <p className="text-saccs-grey leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div
            className={`bg-gradient-to-br from-saccs-light to-white p-8 lg:p-10 rounded-2xl relative overflow-hidden transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light" />
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl font-bold text-saccs-text mb-4">Onze Missie</h3>
            <p className="text-saccs-grey leading-relaxed text-lg">
              Wij zorgen voor schone, hygiënische en uitnodigende omgevingen waarin organisaties en particulieren in
              Suriname optimaal kunnen functioneren en genieten. Met vakmanschap, betrouwbaarheid en maatwerk leveren
              wij schoonmaakoplossingen die meetbaar verschil maken – omdat wij doen wat wij zeggen.
            </p>
          </div>

          {/* Vision */}
          <div
            className={`bg-gradient-to-br from-saccs-light to-white p-8 lg:p-10 rounded-2xl relative overflow-hidden transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-light to-primary" />
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl font-bold text-saccs-text mb-4">Onze Visie</h3>
            <p className="text-saccs-grey leading-relaxed text-lg">
              SACCS streeft ernaar de meest vertrouwde schoonmaakpartner van Suriname te zijn, erkend voor onze
              professionaliteit, integriteit en consistente kwaliteit. Wij bouwen langdurige relaties met klanten door
              telkens opnieuw onze belofte waar te maken: excellente service die zichtbaar en voelbaar is.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
