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
      {/* ─── Mobile Layout ─── */}
      <div className="lg:hidden px-6 py-12 hero-gradient relative">
        <div className="max-w-md mx-auto">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-on-surface leading-[1.1]">
              Uw partner in{' '}
              <span className="text-primary">professionele</span>{' '}
              schoonmaakdiensten
            </h1>
            <p className="text-on-surface-variant font-medium opacity-80 max-w-[90%] mx-auto">
              Kwaliteit die zichtbaar en voelbaar is. Wij creëren de perfecte omgeving voor uw bedrijf of woning met onze klinische precisie.
            </p>
            <div className="pt-6">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="cta-gradient text-on-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl active:scale-95 transition-transform w-full block text-center"
              >
                Start Nu een Aanvraag
              </a>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl" />
      </div>

      {/* ─── Desktop Layout ─── */}
      <div className="hidden lg:flex min-h-[870px] items-center bg-surface-container-lowest relative">
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
