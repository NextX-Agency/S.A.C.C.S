'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { references } from '@/lib/content';

export default function ReferencesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
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

  const handleImageError = (name: string) => {
    setImageErrors(prev => new Set(prev).add(name));
  };

  return (
    <section ref={sectionRef} id="referenties" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="section-title">Onze Referenties</h2>
          <div className="title-underline" />
          <p className="section-subtitle">
            Vertrouwd door toonaangevende organisaties in Suriname
          </p>
        </div>

        {/* References Grid - Improved responsive layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-10 sm:mb-12 md:mb-16">
          {references.map((ref, index) => (
            <div
              key={ref.name}
              className={`group bg-white p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl shadow-saccs-sm hover:shadow-saccs-lg transition-all duration-500 border border-gray-100 hover:border-primary/30 flex flex-col items-center justify-center ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Logo Container with fallback */}
              <div className="relative w-full aspect-[3/2] mb-2 sm:mb-3 md:mb-4 flex items-center justify-center">
                {!imageErrors.has(ref.name) ? (
                  <Image
                    src={ref.logo}
                    alt={ref.name}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 20vw"
                    loading="lazy"
                    onError={() => handleImageError(ref.name)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-saccs-light rounded-lg">
                    <span className="text-xs sm:text-sm text-saccs-grey text-center px-2">{ref.name}</span>
                  </div>
                )}
              </div>
              
              {/* Category Badge */}
              <span className="text-[10px] sm:text-xs md:text-sm text-saccs-grey font-medium px-2 sm:px-3 py-1 bg-saccs-light rounded-full text-center">
                {ref.category}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Indicators - Mobile Optimized */}
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl md:rounded-3xl p-6 md:p-12 text-white overflow-hidden relative">
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
            <div className="text-center mb-8 md:mb-12">
              <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                Waarom klanten voor SACCS kiezen
              </h3>
              <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto">
                Onze toewijding aan kwaliteit en betrouwbaarheid heeft ons het vertrouwen van vele
                vooraanstaande organisaties in Suriname opgeleverd.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
              {[
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ), 
                  title: 'Betrouwbaar', 
                  desc: 'Altijd op tijd' 
                },
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ), 
                  title: 'Kwaliteit', 
                  desc: 'Gegarandeerd resultaat' 
                },
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ), 
                  title: 'Duurzaam', 
                  desc: 'Milieuvriendelijk' 
                },
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ), 
                  title: 'Flexibel', 
                  desc: 'Op maat gemaakt' 
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`text-center p-3 md:p-4 lg:p-6 bg-white/10 rounded-xl md:rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 text-white/90">
                    {item.icon}
                  </div>
                  <h4 className="font-heading font-bold text-sm md:text-base mb-1">{item.title}</h4>
                  <p className="text-xs md:text-sm text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
