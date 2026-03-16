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

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center overflow-hidden pt-20 min-h-[90vh] md:min-h-[95vh] pb-24 md:pb-32"
    >
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
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

      {/* Lighter Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="animate-fade-in-up space-y-6 sm:space-y-8">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Uw partner in professionele
            <br />
            schoonmaakdiensten
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light">
            Kwaliteit die zichtbaar en voelbaar is
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn btn-primary w-full sm:w-auto"
            >
              Vraag een offerte aan
            </a>
            <a
              href="#diensten"
              onClick={(e) => handleNavClick(e, '#diensten')}
              className="btn btn-secondary w-full sm:w-auto"
            >
              Bekijk onze diensten
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
