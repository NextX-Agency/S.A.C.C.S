'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative">

      {/* ─── Mobile ─── */}
      <div className="lg:hidden bg-white">
        {/* Text content */}
        <div className="px-6 pt-24 pb-8">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Professionele Schoonmaakdiensten · Paramaribo
          </p>
          <h1 className="font-heading text-[2rem] font-extrabold leading-[1.1] tracking-tight text-on-surface mb-5">
            Uw partner in{' '}
            <span className="text-primary">professionele</span>{' '}
            schoonmaakdiensten
          </h1>
          <p className="text-on-surface-variant text-base leading-relaxed mb-8">
            Kwaliteit die zichtbaar en voelbaar is. Wij creëren de perfecte
            omgeving voor uw bedrijf of woning.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-primary text-white px-7 py-3.5 rounded-lg font-semibold text-base inline-flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
            >
              Start Nu een Aanvraag
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="border border-outline-variant text-on-surface px-7 py-3.5 rounded-lg font-medium text-base text-center hover:border-primary hover:text-primary transition-colors"
            >
              Ontdek Onze Diensten
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/beeld/hero.jpeg"
            alt="S.A.C.C.S. professional cleaning service"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
          {/* Testimonial over image */}
          <div className="absolute bottom-5 left-5 right-5 bg-white/95 rounded-lg p-4 border-l-4 border-primary">
            <p className="text-on-surface-variant text-sm italic leading-snug">
              &ldquo;Onze ruimtes zijn nog nooit zo schoon geweest. S.A.C.C.S. is simpelweg de beste.&rdquo;
            </p>
            <p className="mt-1.5 text-xs text-primary font-semibold">— Radisson Team</p>
          </div>
        </div>

        {/* Stats strip */}
        <div className="bg-navy flex justify-around items-center px-6 py-5">
          <div className="text-center">
            <div className="text-primary font-black text-2xl">13+</div>
            <div className="text-white/50 text-[10px] font-medium mt-0.5 uppercase tracking-wider">Jaar ervaring</div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <div className="text-primary font-black text-2xl">50+</div>
            <div className="text-white/50 text-[10px] font-medium mt-0.5 uppercase tracking-wider">Tevreden klanten</div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <div className="text-primary font-black text-2xl">100%</div>
            <div className="text-white/50 text-[10px] font-medium mt-0.5 uppercase tracking-wider">Tevredenheid</div>
          </div>
        </div>
      </div>

      {/* ─── Desktop: clean geometric split ─── */}
      <div className="hidden lg:flex min-h-[680px]">
        {/* Left: Text column */}
        <div className="flex-1 bg-white flex items-center">
          <div className="w-full max-w-[600px] ml-auto px-16 py-28 pr-14">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-5">
              Professionele Schoonmaakdiensten · Paramaribo, Suriname
            </p>
            <h1 className="font-heading text-5xl xl:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight text-on-surface mb-6">
              Uw partner in{' '}
              <span className="text-primary">professionele</span>{' '}
              schoonmaak&shy;diensten
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-lg">
              Kwaliteit die zichtbaar en voelbaar is. Wij creëren de perfecte
              omgeving voor uw bedrijf of woning met klinische precisie.
            </p>

            <div className="flex gap-3 mb-10">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-primary text-white px-7 py-3.5 rounded-lg font-semibold text-base inline-flex items-center gap-2 hover:bg-primary/90 transition-colors"
              >
                Start Nu een Aanvraag
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, '#services')}
                className="border border-outline-variant text-on-surface px-7 py-3.5 rounded-lg font-medium text-base hover:border-primary hover:text-primary transition-colors"
              >
                Ontdek Onze Diensten
              </a>
            </div>

            {/* Testimonial — clean left-border style */}
            <div className="border-l-4 border-primary pl-5 py-1">
              <p className="text-on-surface-variant text-sm italic leading-relaxed">
                &ldquo;Onze ruimtes zijn nog nooit zo schoon geweest.
                S.A.C.C.S. is simpelweg de beste.&rdquo;
              </p>
              <p className="mt-2 text-sm text-primary font-semibold">— Radisson Team</p>
            </div>
          </div>
        </div>

        {/* Right: Full-bleed image */}
        <div className="w-[45%] relative flex-shrink-0">
          <Image
            src="/beeld/hero.jpeg"
            alt="S.A.C.C.S. professional cleaning service"
            fill
            className="object-cover object-center"
            sizes="45vw"
            priority
          />
          {/* Subtle green bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
        </div>
      </div>

      {/* Desktop stats strip */}
      <div className="hidden lg:block bg-navy">
        <div className="max-w-7xl mx-auto px-16 py-6 flex items-center gap-12">
          <div>
            <div className="text-2xl font-black text-primary">13+</div>
            <div className="text-white/50 text-[11px] uppercase tracking-wider mt-0.5">Jaar ervaring</div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div>
            <div className="text-2xl font-black text-primary">50+</div>
            <div className="text-white/50 text-[11px] uppercase tracking-wider mt-0.5">Tevreden klanten</div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div>
            <div className="text-2xl font-black text-primary">100%</div>
            <div className="text-white/50 text-[11px] uppercase tracking-wider mt-0.5">Tevredenheid</div>
          </div>
          {/* Right-aligned tagline */}
          <div className="ml-auto">
            <p className="text-white/40 text-xs italic">Actief in Suriname sinds 2012</p>
          </div>
        </div>
      </div>
    </section>
  );
}
