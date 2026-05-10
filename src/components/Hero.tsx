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
    <section id="home" className="relative overflow-hidden">

      {/* ─── Mobile ─── */}
      <div className="lg:hidden bg-white">
        {/* Subtle logo-circle accents — top right corner */}
        <div className="absolute top-16 right-0 pointer-events-none select-none" aria-hidden>
          <div className="relative w-32 h-28">
            <div className="absolute top-0 left-2 w-20 h-20 rounded-full bg-primary/10" />
            <div className="absolute top-0 right-0 w-18 h-18 rounded-full bg-primary-container/20" style={{ width: '4.5rem', height: '4.5rem' }} />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary/6" />
          </div>
        </div>

        <div className="relative z-10 px-6 pt-24 pb-8">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Schoonmaakdiensten · Paramaribo, Suriname
          </p>
          <h1 className="font-heading text-[2rem] font-extrabold leading-[1.1] tracking-tight text-on-surface mb-5">
            Uw partner in{' '}
            <span className="text-primary">professionele</span>{' '}
            schoonmaakdiensten
          </h1>
          <p className="text-on-surface-variant text-base leading-relaxed mb-7">
            Kwaliteit die zichtbaar en voelbaar is. Wij creëren de perfecte
            omgeving voor uw bedrijf of woning.
          </p>

          {/* Stats */}
          <div className="flex gap-6 mb-7 pb-7 border-b border-outline-variant/30">
            <div>
              <div className="text-2xl font-black text-primary">13+</div>
              <div className="text-on-surface-variant text-[11px] mt-0.5">Jaar ervaring</div>
            </div>
            <div className="w-px bg-outline-variant/40" />
            <div>
              <div className="text-2xl font-black text-primary">50+</div>
              <div className="text-on-surface-variant text-[11px] mt-0.5">Klanten</div>
            </div>
            <div className="w-px bg-outline-variant/40" />
            <div>
              <div className="text-2xl font-black text-primary">100%</div>
              <div className="text-on-surface-variant text-[11px] mt-0.5">Tevredenheid</div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-primary text-white px-7 py-3.5 rounded-full font-semibold text-base inline-flex items-center justify-center gap-2 shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors"
            >
              Start Nu een Aanvraag
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="border-2 border-primary text-primary px-7 py-3.5 rounded-full font-semibold text-base text-center hover:bg-primary hover:text-white transition-colors"
            >
              Ontdek Onze Diensten
            </a>
          </div>
        </div>

        {/* Image + testimonial */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/beeld/hero.jpeg"
            alt="S.A.C.C.S. professional cleaning service"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 bg-white/95 rounded-2xl p-4 border-l-4 border-primary shadow-lg">
            <p className="text-on-surface-variant text-sm italic leading-snug">
              &ldquo;Onze ruimtes zijn nog nooit zo schoon geweest.&rdquo;
            </p>
            <p className="mt-1.5 text-xs text-primary font-semibold">— Radisson Team</p>
          </div>
        </div>
      </div>

      {/* ─── Desktop ─── */}
      <div className="hidden lg:flex min-h-[700px]">
        {/* Left: Text */}
        <div className="flex-1 bg-white flex items-center relative overflow-hidden">
          {/* Logo-circle echo — decorative, positioned top-right of text col */}
          <div className="absolute -top-12 -right-12 pointer-events-none select-none" aria-hidden>
            <div className="relative w-64 h-56">
              <div className="absolute top-0 left-4 w-36 h-36 rounded-full bg-primary/8" />
              <div className="absolute top-4 right-0 w-32 h-32 rounded-full bg-primary-container/15" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/3 w-28 h-28 rounded-full bg-primary/6" />
            </div>
          </div>

          <div className="relative z-10 w-full max-w-[580px] ml-auto px-12 py-28 pr-14">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-5">
              Schoonmaakdiensten · Paramaribo, Suriname
            </p>
            <h1 className="font-heading text-5xl xl:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight text-on-surface mb-6">
              Uw partner in{' '}
              <span className="text-primary">professionele</span>{' '}
              schoonmaakdiensten
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-lg">
              Kwaliteit die zichtbaar en voelbaar is. Wij creëren de perfecte
              omgeving voor uw bedrijf of woning met klinische precisie.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8 pb-8 border-b border-outline-variant/25">
              <div>
                <div className="text-3xl font-black text-primary">13+</div>
                <div className="text-on-surface-variant text-xs mt-0.5">Jaar ervaring</div>
              </div>
              <div className="w-px bg-outline-variant/40" />
              <div>
                <div className="text-3xl font-black text-primary">50+</div>
                <div className="text-on-surface-variant text-xs mt-0.5">Tevreden klanten</div>
              </div>
              <div className="w-px bg-outline-variant/40" />
              <div>
                <div className="text-3xl font-black text-primary">100%</div>
                <div className="text-on-surface-variant text-xs mt-0.5">Tevredenheid</div>
              </div>
            </div>

            <div className="flex gap-3 mb-10">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold text-base inline-flex items-center gap-2 shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors"
              >
                Start Nu een Aanvraag
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, '#services')}
                className="border-2 border-primary text-primary px-8 py-3.5 rounded-full font-semibold text-base hover:bg-primary hover:text-white transition-colors"
              >
                Ontdek Onze Diensten
              </a>
            </div>

            {/* Testimonial */}
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
          <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
