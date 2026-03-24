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
    <section id="home" className="relative min-h-[600px] lg:min-h-[870px] flex items-center overflow-hidden bg-surface-container-lowest">
      {/* Background Image (low opacity) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/beeld/exterior.jpeg"
          alt="Clean professional environment"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 py-16 lg:py-24">
        {/* Left Column: Text Content */}
        <div className="space-y-5 lg:space-y-8 relative z-20">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/barelogo-removebg-preview.png"
              alt="S.A.C.C.S."
              width={48}
              height={48}
              className="h-10 lg:h-12 w-auto"
            />
            <div>
              <div className="text-base lg:text-lg font-black tracking-tight text-on-surface">S.A.C.C.S</div>
              <p className="text-xs text-primary italic">Wij doen wat wij zeggen</p>
            </div>
          </div>

          <h1 className="font-heading text-3xl lg:text-5xl font-bold leading-[1.15] text-on-surface">
            Uw partner in{' '}
            <span className="text-primary">professionele</span>{' '}
            schoonmaakdiensten
          </h1>

          <p className="text-base lg:text-xl text-on-surface-variant leading-relaxed max-w-xl">
            Kwaliteit die zichtbaar en voelbaar is. Wij creëren de perfecte omgeving voor uw bedrijf of woning met onze klinische precisie.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 lg:pt-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-primary text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold text-center text-sm lg:text-base hover:scale-105 transition-transform shadow-xl"
            >
              Start Nu een Aanvraag
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="bg-surface-container-highest text-primary px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold text-center text-sm lg:text-base hover:bg-primary-fixed transition-colors"
            >
              Ontdek Onze Diensten
            </a>
          </div>
        </div>

        {/* Right Column: Image + Quote */}
        <div className="hidden lg:block relative z-10 pl-8">
          <div className="aspect-square rounded-xl overflow-hidden shadow-2xl rotate-3 max-w-md ml-auto">
            <Image
              src="/beeld/hero.jpeg"
              alt="S.A.C.C.S. professional cleaning service"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 0vw, 50vw"
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
    </section>
  );
}
