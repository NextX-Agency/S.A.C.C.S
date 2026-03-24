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
    <>
      <section id="home" className="relative min-h-[500px] lg:min-h-[870px] flex items-center overflow-hidden bg-surface-container-lowest">
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
          <div className="space-y-5 lg:space-y-8 relative z-20 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Mobile badge */}
            <div className="lg:hidden">
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-primary py-1.5 px-4 bg-primary-fixed/30 rounded-full">
                Wij doen wat wij zeggen
              </span>
            </div>

            {/* Desktop logo */}
            <div className="hidden lg:flex items-center gap-3">
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

            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-on-surface">
              Uw partner in{' '}
              <span className="text-primary">professionele</span>{' '}
              schoonmaakdiensten
            </h1>

            <p className="text-secondary lg:text-on-surface-variant max-w-xs lg:max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed font-light lg:font-normal">
              Kwaliteit die zichtbaar en voelbaar is. Wij creëren de perfecte omgeving voor uw bedrijf of woning met onze klinische precisie.
            </p>

            <div className="flex flex-col w-full max-w-xs lg:max-w-none lg:flex-row gap-3 pt-2 lg:pt-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-gradient-to-br from-primary to-primary-container lg:from-primary lg:to-primary text-white px-6 py-5 lg:px-8 lg:py-4 rounded-full font-semibold text-center text-base shadow-lg shadow-primary/10 active:scale-95 lg:hover:scale-105 transition-all"
              >
                Start Nu een Aanvraag
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, '#services')}
                className="hidden lg:block bg-surface-container-highest text-primary px-8 py-4 rounded-full font-bold text-center text-base hover:bg-primary-fixed transition-colors"
              >
                Ontdek Onze Diensten
              </a>
            </div>
          </div>

          {/* Right Column: Image + Quote - Desktop only */}
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

      {/* Mobile: Hero Image Section */}
      <section className="lg:hidden px-6 py-12 bg-surface">
        <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden bg-surface-container shadow-sm">
          <Image
            src="/beeld/hero.jpeg"
            alt="S.A.C.C.S. professional cleaning service"
            width={800}
            height={1000}
            className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-700"
            sizes="100vw"
          />
        </div>
      </section>
    </>
  );
}
