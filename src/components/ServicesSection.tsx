'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Zakelijke Schoonmaak (B2B)',
    description:
      'Professionele schoonmaakdiensten voor kantoren, hotels, restaurants en andere zakelijke ruimtes. Wij zorgen voor een representatieve werkomgeving.',
    features: ['Kantoorgebouwen', 'Hotels & Resorts', 'Restaurants', 'Winkels'],
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Particuliere Schoonmaak (B2C)',
    description:
      'Betrouwbare schoonmaakdiensten voor particulieren. Van regelmatige huishouding tot grote schoonmaakbeurten.',
    features: ['Huishoudelijke hulp', 'Grote schoonmaak', 'Verhuisschoonmaak', 'Regelmatig onderhoud'],
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
    title: 'Evenementenservice',
    description:
      'Schoonmaakdiensten tijdens en na evenementen. Wij zorgen ervoor dat uw locatie er perfect uitziet, voor, tijdens en na het evenement.',
    features: ['Voorbereidende reiniging', 'Onderhoud tijdens events', 'Opruimen na afloop', 'Noodservice'],
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Specialistische Diensten',
    description:
      'Gespecialiseerde schoonmaakdiensten voor specifieke behoeften, zoals dieptereiniging, ramen wassen en meer.',
    features: ['Dieptereiniging', 'Glazenwassen', 'Vloeronderhoud', 'Stoomreiniging'],
  },
];

export default function ServicesSection() {
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
    <section ref={sectionRef} id="diensten" className="py-24 bg-saccs-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Onze Diensten</h2>
          <div className="title-underline" />
          <p className="section-subtitle">
            Wij bieden een breed scala aan professionele schoonmaakdiensten voor elke behoefte
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white p-8 rounded-2xl shadow-saccs-sm border-2 border-transparent hover:border-primary transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-saccs-md">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-saccs-text mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-saccs-grey leading-relaxed mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-saccs-lg"
          >
            <span>Vraag een offerte aan</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
