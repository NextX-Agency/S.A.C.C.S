'use client';

import Image from 'next/image';

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
      {/* ─── Mobile: Light corporate hero (matches desktop theme) ─── */}
      <div className="lg:hidden relative bg-surface overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-48 h-48 rounded-full bg-primary/5 -translate-x-1/2 pointer-events-none" />

        {/* Top content area */}
        <div className="relative z-10 px-6 pt-24 pb-6">
          {/* Heading */}
          <h1 className="font-heading text-[2rem] font-extrabold leading-[1.15] tracking-tight text-on-surface mb-5">
            Uw partner in{' '}
            <span className="text-primary">professionele</span>{' '}
            schoonmaakdiensten
          </h1>

          {/* Subtext */}
          <p className="text-on-surface-variant text-base leading-relaxed mb-7">
            Kwaliteit die zichtbaar en voelbaar is. Wij creëren de perfecte omgeving voor uw bedrijf of woning.
          </p>

          {/* CTAs — same style as desktop */}
          <div className="flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg shadow-primary/20 active:scale-95 transition-transform text-center"
            >
              Start Nu een Aanvraag
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="bg-surface-container-highest text-primary px-8 py-4 rounded-full font-bold text-base active:scale-95 transition-transform text-center"
            >
              Ontdek Onze Diensten
            </a>
          </div>
        </div>

        {/* Image block with floating testimonial — mirrors desktop */}
        <div className="relative z-10 px-6 pt-2 pb-0">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <Image
              src="/beeld/hero.jpeg"
              alt="S.A.C.C.S. professional cleaning service"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
          {/* Floating testimonial card — mirrors desktop */}
          <div className="absolute top-6 -right-1 bg-surface-container-lowest rounded-xl shadow-xl p-3.5 w-48 -rotate-2 border border-outline-variant/20 z-20">
            <p className="text-primary font-bold text-xs italic leading-snug">
              &ldquo;Onze ruimtes zijn nog nooit zo schoon geweest.&rdquo;
            </p>
            <p className="mt-1.5 text-[11px] text-on-surface-variant font-medium">— Radisson Team</p>
          </div>
        </div>

        {/* Stats row — light theme to match desktop feel */}
        <div className="relative z-10 flex justify-around items-center px-6 py-5 mt-6 border-t border-outline-variant/30">
          <div className="text-center">
            <div className="text-on-surface font-extrabold text-xl">10+</div>
            <div className="text-on-surface-variant text-[11px] font-medium mt-0.5">Jaar ervaring</div>
          </div>
          <div className="w-px h-8 bg-outline-variant/40" />
          <div className="text-center">
            <div className="text-on-surface font-extrabold text-xl">200+</div>
            <div className="text-on-surface-variant text-[11px] font-medium mt-0.5">Tevreden klanten</div>
          </div>
          <div className="w-px h-8 bg-outline-variant/40" />
          <div className="text-center">
            <div className="text-on-surface font-extrabold text-xl">100%</div>
            <div className="text-on-surface-variant text-[11px] font-medium mt-0.5">Tevredenheid</div>
          </div>
        </div>
      </div>

      {/* ─── Desktop: 2-column light layout ─── */}
      <div className="hidden lg:flex min-h-[870px] items-center bg-surface-container-lowest relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/beeld/exterior.jpeg"
            alt="Clean professional environment"
            fill
            className="object-cover"
            loading="lazy"
            sizes="100vw"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-12 items-center relative z-10 py-24">
          <div className="space-y-8 relative z-20 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <Image
                src="/logo/barelogo-removebg-preview.png"
                alt="S.A.C.C.S."
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <div>
                <div className="text-lg font-black tracking-tight text-on-surface">S.A.C.C.S</div>
                <p className="text-xs text-primary italic">Wij doen wat wij zeggen</p>
              </div>
            </div>

            <h1 className="font-heading text-5xl font-extrabold leading-[1.1] tracking-tight text-on-surface">
              Uw partner in{' '}
              <span className="text-primary">professionele</span>{' '}
              schoonmaakdiensten
            </h1>

            <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
              Kwaliteit die zichtbaar en voelbaar is. Wij creëren de perfecte omgeving voor uw bedrijf of woning met onze klinische precisie.
            </p>

            <div className="flex flex-row gap-3 pt-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg shadow-primary/10 hover:scale-105 transition-all"
              >
                Start Nu een Aanvraag
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, '#services')}
                className="bg-surface-container-highest text-primary px-8 py-4 rounded-full font-bold text-base hover:bg-primary-fixed transition-colors"
              >
                Ontdek Onze Diensten
              </a>
            </div>
          </div>

          <div className="relative z-10 pl-8">
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl rotate-3 max-w-md ml-auto relative">
              <Image
                src="/beeld/hero.jpeg"
                alt="S.A.C.C.S. professional cleaning service"
                fill
                className="object-cover"
                sizes="50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-2xl max-w-xs -rotate-3 border border-outline-variant/20">
              <p className="text-primary font-bold text-lg italic">
                &ldquo;Onze ruimtes zijn nog nooit zo schoon geweest. S.A.C.C.S. is simpelweg de beste.&rdquo;
              </p>
              <p className="mt-2 text-sm text-on-surface-variant font-medium">— Radisson Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
