'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const clients = [
  { src: '/carousel/torarica.jpg', alt: 'Torarica Hotel' },
  { src: '/carousel/hardrock.jpg', alt: 'Hard Rock Cafe' },
  { src: '/carousel/azplogo.jpg', alt: 'AZP Suriname' },
  { src: '/carousel/radisson.png', alt: 'Radisson Hotel' },
];

export default function ClientsCarousel() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Duplicate clients for infinite scroll effect
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  useEffect(() => {
    // Delay animation start for better performance
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-saccs-text mb-4">
            Onze klanten
          </h2>
          <p className="text-saccs-grey text-base sm:text-lg px-4">
            Vertrouwd door toonaangevende organisaties in Suriname
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div 
          className={`flex ${isLoaded ? 'animate-scroll-infinite' : ''}`}
          style={{ willChange: 'transform' }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.alt}-${index}`}
              className="flex-shrink-0 mx-4 sm:mx-8 flex items-center justify-center"
            >
              <div className="w-28 h-20 sm:w-40 sm:h-24 relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="(max-width: 640px) 112px, 160px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
