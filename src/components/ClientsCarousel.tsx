'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const clients = [
  { src: '/carousel/hardrock.png', alt: 'Hard Rock Cafe' },
  { src: '/carousel/radisson.png', alt: 'Radisson Hotel', fallback: '/carousel/radisson.png' },
  { src: '/carousel/azplogo.jpg', alt: 'AZP Suriname' },
  { src: '/carousel/torarica.jpg', alt: 'Torarica Hotel' },
];

function LogoItem({ client, fallbacks, setFallbacks }: {
  client: typeof clients[number];
  fallbacks: Record<string, string>;
  setFallbacks: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}) {
  return (
    <div className="relative w-20 h-14 sm:w-28 sm:h-20 lg:w-36 lg:h-24 flex-shrink-0 mx-6 sm:mx-10 lg:mx-16">
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
  );
}

export default function ClientsCarousel() {
  const [fallbacks, setFallbacks] = useState<Record<string, string>>({});
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Pause animation when off-screen to save GPU
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsPaused(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Duplicate the list so the second copy seamlessly follows the first
  const doubled = [...clients, ...clients];

  return (
    <section ref={sectionRef} className="py-10 lg:py-16 bg-surface-container-lowest overflow-hidden border-b border-primary/8">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 lg:mb-10">
          <div className="flex items-center" aria-hidden="true">
            <div className="w-2 h-2 rounded-full bg-on-primary-container/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/70 -ml-0.5" />
            <div className="w-2 h-2 rounded-full bg-primary-container -ml-0.5" />
          </div>
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-outline">
            Vertrouwd door marktleiders
          </p>
        </div>
      </div>
      <div className="relative opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        <div
          className="flex animate-scroll-infinite w-max"
          style={isPaused ? { animationPlayState: 'paused' } : undefined}
        >
          {doubled.map((client, i) => (
            <LogoItem key={`${client.alt}-${i}`} client={client} fallbacks={fallbacks} setFallbacks={setFallbacks} />
          ))}
        </div>
      </div>
    </section>
  );
}
