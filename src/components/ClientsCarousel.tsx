'use client';

import Image from 'next/image';

const clients = [
  { src: '/carousel/torarica.jpg', alt: 'Torarica Hotel' },
  { src: '/carousel/hardrock.jpg', alt: 'Hard Rock Cafe' },
  { src: '/carousel/azplogo.jpg', alt: 'AZP Suriname' },
  { src: '/carousel/radisson.png', alt: 'Radisson Hotel' },
];

export default function ClientsCarousel() {
  // Duplicate clients for infinite scroll effect
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-saccs-text mb-4">
            Onze klanten
          </h2>
          <p className="text-saccs-grey text-lg">
            Vertrouwd door toonaangevende organisaties in Suriname
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Track */}
        <div className="flex animate-scroll-infinite hover:pause">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.alt}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="w-40 h-24 relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110">
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
