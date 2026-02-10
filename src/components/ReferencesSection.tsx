'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { references } from '@/lib/content';

const whyChooseUs = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: 'Betrouwbaar',
    description: 'Wij staan voor onze afspraken en leveren altijd op tijd',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Kwaliteitsgarantie',
    description: 'Professionele service met gegarandeerd resultaat',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Flexibel',
    description: 'Diensten op maat afgestemd op uw specifieke wensen',
  },
];

export default function ReferencesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [fallbackLogos, setFallbackLogos] = useState<Record<string, string>>({});
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

  const handleImageError = (name: string, fallback?: string) => {
    if (fallback && !fallbackLogos[name]) {
      setFallbackLogos(prev => ({ ...prev, [name]: fallback }));
      return;
    }
    setImageErrors(prev => new Set(prev).add(name));
  };

  return (
    <section ref={sectionRef} id="referenties" className="py-16 md:py-20 bg-saccs-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-saccs-text mb-4">
            Onze Referenties
          </h2>
          <p className="text-saccs-grey text-base md:text-lg max-w-2xl mx-auto">
            Vertrouwd door toonaangevende organisaties in Suriname
          </p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {references.map((ref, index) => (
            <div
              key={ref.name}
              className={`corporate-card p-6 flex items-center justify-center transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {!imageErrors.has(ref.name) ? (
                <div className="relative w-full h-20">
                  <Image
                    src={fallbackLogos[ref.name] ?? ref.logo}
                    alt={ref.name}
                    fill
                    className="object-contain grayscale opacity-60"
                    sizes="(max-width: 768px) 45vw, 20vw"
                    loading="lazy"
                    onError={() => handleImageError(ref.name, ref.fallbackLogo)}
                  />
                </div>
              ) : (
                <div className="text-center">
                  <span className="text-xs text-saccs-grey">{ref.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="max-w-4xl mx-auto">
           <h3 className="font-heading text-2xl md:text-3xl font-bold text-saccs-text text-center mb-10">
            Waarom kiezen klanten voor SACCS?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className={`text-center transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-10 h-10 mx-auto mb-3 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <h4 className="font-heading font-bold text-saccs-text mb-2">{item.title}</h4>
                <p className="text-sm text-saccs-grey">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
