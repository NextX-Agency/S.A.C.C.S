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
    <section id="home" className="relative min-h-[870px] flex items-center overflow-hidden bg-surface-container-lowest">
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

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-24">
        {/* Left Column: Text Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold tracking-widest uppercase">
            Schoonmaak Expertise
          </div>

          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-on-surface">
            Uw partner in{' '}
            <span className="text-primary">professionele</span>{' '}
            schoonmaakdiensten
          </h1>

          <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
            Kwaliteit die zichtbaar en voelbaar is. Wij creëren de perfecte omgeving voor uw bedrijf of woning met onze klinische precisie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-full font-bold text-center hover:scale-105 transition-transform shadow-xl"
            >
              Start Nu een Aanvraag
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="bg-surface-container-highest text-primary px-8 py-4 rounded-full font-bold text-center hover:bg-primary-fixed transition-colors"
            >
              Ontdek Onze Diensten
            </a>
          </div>
        </div>

        {/* Right Column: Image + Quote */}
        <div className="hidden lg:block relative">
          <div className="aspect-square rounded-xl overflow-hidden shadow-2xl rotate-3">
            <Image
              src="/beeld/stallatie.jpeg"
              alt="Professional cleaning service"
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
