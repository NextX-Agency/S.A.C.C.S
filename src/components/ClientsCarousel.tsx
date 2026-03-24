'use client';

import { useState } from 'react';
import Image from 'next/image';

const clients = [
  { src: '/carousel/hardrock.jpg', alt: 'Hard Rock Cafe' },
  { src: '/carousel/radisson.png', alt: 'Radisson Hotel', fallback: '/carousel/radisson.png' },
  { src: '/carousel/azplogo.jpg', alt: 'AZP Suriname' },
  { src: '/carousel/torarica.jpg', alt: 'Torarica Hotel' },
];

export default function ClientsCarousel() {
  const [fallbacks, setFallbacks] = useState<Record<string, string>>({});

  return (
    <section className="py-10 lg:py-16 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-outline mb-8 lg:mb-12">
          Vertrouwd door marktleiders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {clients.map((client) => (
            <div key={client.alt} className="relative w-20 h-14 sm:w-28 sm:h-20 lg:w-36 lg:h-24">
              <Image
                src={fallbacks[client.alt] ?? client.src}
                alt={client.alt}
                fill
                className="object-contain"
                loading="lazy"
                sizes="(max-width: 640px) 112px, 144px"
                onError={() => {
                  if (client.fallback && !fallbacks[client.alt]) {
                    setFallbacks((prev) => ({ ...prev, [client.alt]: client.fallback! }));
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
