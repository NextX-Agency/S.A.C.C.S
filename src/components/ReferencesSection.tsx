'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { references } from '@/lib/content';

const whyChooseUs = [
  {
    title: 'Betrouwbaar',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Kwaliteitsgarantie',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Flexibel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function ReferencesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  // Auto-advance testimonial
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % references.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + references.length) % references.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleImageError = (name: string, fallback?: string) => {
    if (fallback && !fallbackLogos[name]) {
      setFallbackLogos(prev => ({ ...prev, [name]: fallback }));
      return;
    }
    setImageErrors(prev => new Set(prev).add(name));
  };

  // Show 3 references at a time on desktop
  const getVisibleRefs = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % references.length;
      visible.push({ ...references[index], index });
    }
    return visible;
  };

  return (
    <section ref={sectionRef} id="referenties" className="py-16 md:py-20 bg-saccs-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial Carousel */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-saccs-text mb-4">
            Onze Referenties
          </h2>
        </div>

        <div className="relative mb-16">
          <div className="flex items-center">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors mr-4 md:mr-8"
              aria-label="Vorige referentie"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Testimonials */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
              {getVisibleRefs().map((ref) => (
                <div
                  key={`${ref.name}-${ref.index}`}
                  className={`flex flex-col items-center text-center transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Logo */}
                  <div className="w-24 h-16 relative mb-4">
                    {!imageErrors.has(ref.name) ? (
                      <Image
                        src={fallbackLogos[ref.name] ?? ref.logo}
                        alt={ref.name}
                        fill
                        className="object-contain"
                        sizes="96px"
                        loading="lazy"
                        onError={() => handleImageError(ref.name, ref.fallbackLogo)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-xs text-saccs-grey font-medium">{ref.name}</span>
                      </div>
                    )}
                  </div>
                  {/* Quote */}
                  <p className="text-saccs-grey text-sm leading-relaxed italic mb-2">
                    &ldquo;{ref.description}&rdquo;
                  </p>
                  <p className="text-xs text-primary font-semibold">— {ref.category} {ref.name}</p>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors ml-4 md:ml-8"
              aria-label="Volgende referentie"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {references.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Ga naar referentie ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-saccs-text text-center mb-10">
            Waarom kiezen klanten voor SACCS?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex-shrink-0 mt-0.5 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-saccs-text mb-1">{item.title}</h4>
                    <p className="text-sm text-saccs-grey leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
