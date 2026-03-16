'use client';

import { useState } from 'react';
import Image from 'next/image';

const clients = [
  { src: '/carousel/torarica.jpg', alt: 'Torarica Hotel' },
  { src: '/carousel/hardrock.png', alt: 'Hard Rock Cafe', fallback: '/carousel/hardrock.jpg' },
  { src: '/carousel/azplogo.jpg', alt: 'AZP Suriname' },
  { src: '/carousel/radisson.png', alt: 'Radisson Hotel' },
  { src: '/carousel/torarica.jpg', alt: 'Torarica Resort' },
  { src: '/carousel/azplogo.jpg', alt: 'AZI' },
];

export default function ClientsCarousel() {
  const [fallbacks, setFallbacks] = useState<Record<string, string>>({});

  // Duplicate the list to create the seamless infinite loop
  const doubledClients = [...clients, ...clients];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-saccs-text">
            Onze klanten
          </h2>
        </div>
      </div>

      {/* Infinite scrolling carousel — full width, overflow hidden */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="animate-scroll-infinite flex items-center gap-12 md:gap-16 w-max hover:[animation-play-state:paused]">
          {doubledClients.map((client, index) => (
            <div
              key={`${client.alt}-${index}`}
              className="flex items-center justify-center flex-shrink-0"
            >
              <div className="w-28 h-20 sm:w-32 sm:h-22 md:w-36 md:h-24 relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                <Image
                  src={fallbacks[client.alt + index] ?? client.src}
                  alt={client.alt}
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 144px"
                  onError={() => {
                    const key = client.alt + index;
                    if (client.fallback && !fallbacks[key]) {
                      setFallbacks((prev) => ({ ...prev, [key]: client.fallback! }));
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
