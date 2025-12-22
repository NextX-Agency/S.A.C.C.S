'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const heroImages = [
  { src: '/beeld/exterior.jpeg', alt: 'Professionele schoonmaakdiensten' },
  { src: '/beeld/stallatie.jpeg', alt: 'Installatie en onderhoud' },
  { src: '/beeld/steam.jpeg', alt: 'Stoomreiniging' },
  { src: '/beeld/was.jpeg', alt: 'Wasservices' },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center overflow-hidden pt-20 min-h-[115dvh] pb-24 sm:pb-32"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slider - Optimized for performance */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 will-change-opacity ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              quality={85}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Enhanced Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 sm:mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-white/90 text-xs sm:text-sm font-medium">Sinds 2012 actief in Suriname</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Uw partner in{' '}
            <span className="text-primary-light">professionele</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            schoonmaakdiensten
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 italic font-light mb-8 sm:mb-10">
            &ldquo;Wij doen wat wij zeggen&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn btn-primary w-full sm:w-auto min-h-[48px] touch-manipulation"
            >
              <span>Vraag een offerte aan</span>
              <svg
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#diensten"
              onClick={(e) => handleNavClick(e, '#diensten')}
              className="btn btn-secondary w-full sm:w-auto min-h-[48px] touch-manipulation"
            >
              Bekijk onze diensten
            </a>
          </div>
        </div>

        {/* Stats - Improved mobile layout */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-2">
          {[
            { number: '13+', label: 'Jaar ervaring' },
            { number: '50+', label: 'Tevreden klanten' },
            { number: '100%', label: 'Kwaliteitsgarantie' },
            { number: '24/7', label: 'Ondersteuning' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-light mb-1">{stat.number}</div>
              <div className="text-white/70 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <div className="absolute bottom-28 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce" />
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L60 55C120 50 240 40 360 45C480 50 600 70 720 75C840 80 960 70 1080 60C1200 50 1320 40 1380 35L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V60Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Slide Indicators - Better positioned for mobile */}
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 min-w-[32px] touch-manipulation ${
              index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ga naar slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
