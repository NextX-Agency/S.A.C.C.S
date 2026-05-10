'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden">
      {/* ─── Mobile hero ─── */}
      <div className="lg:hidden relative hero-section-bg overflow-hidden">
        {/* Bubble trio — echoes the three logo circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-container/20 animate-saccs-a" />
          <div className="absolute top-1/3 -left-16 w-56 h-56 rounded-full bg-primary/10 animate-saccs-b" />
          <div className="absolute -bottom-24 left-1/2 w-48 h-48 rounded-full bg-on-primary-container/8 -translate-x-1/2 animate-saccs-c" />
        </div>

        {/* Top content area */}
        <div className="relative z-10 px-6 pt-24 pb-6">
          {/* Bubble trio badge */}
          <div className="flex items-center gap-2 mb-5">
            <div className="flex items-center" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-on-primary-container" />
              <div className="w-4 h-4 rounded-full bg-primary -ml-1.5" />
              <div className="w-3 h-3 rounded-full bg-primary-container -ml-1.5" />
            </div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Professioneel Schoonmaakbedrijf</span>
          </div>

          <h1 className="font-heading text-[1.95rem] sm:text-[2.2rem] font-extrabold leading-[1.15] tracking-tight text-on-surface mb-5">
            Uw partner in{' '}
            <span className="green-text-gradient">professionele</span>{' '}
            schoonmaakdiensten
          </h1>

          <p className="text-on-surface-variant text-base leading-relaxed mb-7">
            Kwaliteit die zichtbaar en voelbaar is. Wij creëren de perfecte omgeving voor uw bedrijf of woning.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg shadow-primary/20 active:scale-95 transition-transform text-center inline-flex items-center justify-center gap-2"
            >
              Start Nu een Aanvraag
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="border-2 border-primary text-primary bg-transparent px-8 py-4 rounded-full font-bold text-base active:scale-95 transition-all text-center hover:bg-primary hover:text-white"
            >
              Ontdek Onze Diensten
            </a>
          </div>
        </div>

        {/* Image block */}
        <div className="relative z-10 px-6 pt-2 pb-6">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <Image
              src="/beeld/hero.jpeg"
              alt="S.A.C.C.S. professional cleaning service"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            {/* Floating testimonial card — inside image to stay within bounds */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 border-l-4 border-primary z-20 max-w-[220px]">
              <p className="text-primary font-bold text-xs italic leading-snug">
                &ldquo;Onze ruimtes zijn nog nooit zo schoon geweest.&rdquo;
              </p>
              <p className="mt-1 text-[11px] text-on-surface-variant font-medium">— Radisson Team</p>
            </div>
          </div>
        </div>

      </div>

      {/* ─── Desktop: 2-column layout ─── */}
      <div className="hidden lg:flex min-h-[870px] items-center hero-section-bg relative">
        {/* Dot grid texture */}
        <div className="absolute inset-0 z-0 dot-grid opacity-20 pointer-events-none" />

        {/* Bubble trio — large, echoes logo circles */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-container/15 animate-saccs-a" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-on-primary-container/5 animate-saccs-b" />
          <div className="absolute top-1/2 left-[40%] w-[350px] h-[350px] rounded-full bg-primary/8 -translate-y-1/2 animate-saccs-c" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-12 items-center relative z-10 py-24">
          <div className="space-y-8 relative z-20 flex flex-col items-start">
            {/* Bubble trio label */}
            <div className="flex items-center gap-3">
              <div className="flex items-center" aria-hidden="true">
                <div className="w-3.5 h-3.5 rounded-full bg-on-primary-container" />
                <div className="w-5 h-5 rounded-full bg-primary -ml-2" />
                <div className="w-3.5 h-3.5 rounded-full bg-primary-container -ml-2" />
              </div>
              <span className="text-sm font-bold text-primary uppercase tracking-widest">Professioneel Schoonmaakbedrijf</span>
            </div>

            <h1 className="font-heading text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-on-surface">
              Uw partner in{' '}
              <span className="green-text-gradient">professionele</span>{' '}
              schoonmaakdiensten
            </h1>

            <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
              Kwaliteit die zichtbaar en voelbaar is. Wij creëren de perfecte omgeving voor uw bedrijf of woning met onze klinische precisie.
            </p>

            <div className="flex flex-row gap-3 pt-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg shadow-primary/20 hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                Start Nu een Aanvraag
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, '#services')}
                className="border-2 border-primary text-primary bg-transparent px-8 py-4 rounded-full font-bold text-base hover:bg-primary hover:text-white transition-all"
              >
                Ontdek Onze Diensten
              </a>
            </div>

          </div>

          <div className="relative z-10 pl-8">
            {/* Green accent behind image */}
            <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-6 max-w-md ml-auto" />
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 max-w-md ml-auto relative">
              <Image
                src="/beeld/hero.jpeg"
                alt="S.A.C.C.S. professional cleaning service"
                fill
                className="object-cover"
                sizes="50vw"
                priority
              />
            </div>
            {/* Floating testimonial */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs -rotate-3 border-l-4 border-primary">
              <p className="text-primary font-bold text-lg italic">
                &ldquo;Onze ruimtes zijn nog nooit zo schoon geweest. S.A.C.C.S. is simpelweg de beste.&rdquo;
              </p>
              <p className="mt-2 text-sm text-on-surface-variant font-medium">— Radisson Team</p>
            </div>
            {/* Small floating bubble decoration */}
            <div className="absolute -top-6 -left-4 w-16 h-16 rounded-full bg-primary-container/40 animate-saccs-c pointer-events-none" aria-hidden="true" />
            <div className="absolute -top-3 left-6 w-10 h-10 rounded-full bg-primary/20 animate-saccs-a pointer-events-none" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
