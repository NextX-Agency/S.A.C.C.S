'use client';

import { useState } from 'react';
import Image from 'next/image';

const clients = [
  { src: '/carousel/torarica.jpg', alt: 'Torarica Hotel' },
  { src: '/carousel/hardrock.png', alt: 'Hard Rock Cafe', fallback: '/carousel/hardrock.jpg' },
  { src: '/carousel/azplogo.jpg', alt: 'AZP Suriname' },
  { src: '/carousel/radisson.png', alt: 'Radisson Hotel' },
  { src: '/carousel/torarica.jpg', alt: 'Torarica Hotel 2' },
  { src: '/carousel/azplogo.jpg', alt: 'AZP Suriname 2' },
];

export default function ClientsCarousel() {
  const [fallbacks, setFallbacks] = useState<Record<string, string>>({});

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-saccs-text">
            Onze klanten
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={`${client.alt}-${index}`}
              className="w-full flex items-center justify-center"
            >
              <div className="w-28 h-20 sm:w-32 sm:h-22 md:w-36 md:h-24 relative grayscale opacity-60">
                <Image
                  src={fallbacks[client.alt] ?? client.src}
                  alt={client.alt}
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 144px"
                  onError={() => {
                    if (client.fallback && !fallbacks[client.alt]) {
                      setFallbacks((prev) => ({ ...prev, [client.alt]: client.fallback! }));
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
