'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/content';

const footerQuickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Over Ons' },
  { href: '#services', label: 'Diensten' },
  { href: '#contact', label: 'Contact' },
];

const siteQuickLinks = [
  { href: '/', label: 'Home' },
  { href: '/over-ons', label: 'Over Ons' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/contact', label: 'Contact' },
];

const dienstenLinks = [
  { label: 'Kantoorschoonmaak' },
  { label: 'Glasbewassing' },
  { label: 'Vloeronderhoud' },
  { label: 'Eventsupport' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacybeleid' },
  { href: '/voorwaarden', label: 'Algemene Voorwaarden' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const quickLinks = isHomePage ? footerQuickLinks : siteQuickLinks;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-50 w-full border-t border-slate-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 max-w-7xl mx-auto px-4 lg:px-8 py-10 lg:py-16">
        {/* Company Info */}
        <div className="space-y-4 col-span-2 md:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/barelogo-removebg-preview.png"
              alt="S.A.C.C.S."
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <div>
              <div className="text-lg font-black tracking-tight text-on-surface">S.A.C.C.S</div>
              <p className="text-xs text-on-surface-variant italic">Wij doen wat wij zeggen</p>
            </div>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Uw professionele partner voor alle schoonmaakuitdagingen. Kwaliteit en betrouwbaarheid sinds 2012.
          </p>
        </div>

        {/* Snelmenu */}
        <div className="space-y-6">
          <h4 className="font-bold text-on-surface uppercase text-xs tracking-widest">Snelmenu</h4>
          <ul className="space-y-3 text-sm leading-relaxed">
            {quickLinks.map((link) => (
              <li key={link.href}>
                {isHomePage && link.href.startsWith('#') ? (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-500 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className="text-slate-500 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Diensten */}
        <div className="space-y-6">
          <h4 className="font-bold text-on-surface uppercase text-xs tracking-widest">Diensten</h4>
          <ul className="space-y-3 text-sm leading-relaxed">
            {dienstenLinks.map((link) => (
              <li key={link.label}>
                <span className="text-slate-500 hover:text-primary transition-colors cursor-default">
                  {link.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Juridisch */}
        <div className="space-y-6">
          <h4 className="font-bold text-on-surface uppercase text-xs tracking-widest">Juridisch</h4>
          <div className="flex flex-col gap-3 text-sm leading-relaxed">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-xs leading-relaxed">
          &copy; {currentYear} {siteConfig.fullName}. Alle rechten voorbehouden.
        </p>
        <div className="flex gap-6">
          <a className="text-slate-400 hover:text-primary transition-colors" href="#" aria-label="Website">
            <span className="material-symbols-outlined">public</span>
          </a>
          <a className="text-slate-400 hover:text-primary transition-colors" href="#" aria-label="Delen">
            <span className="material-symbols-outlined">share</span>
          </a>
        </div>
      </div>

      {/* Scroll to Top Button - Only on homepage */}
      {isHomePage && <ScrollToTop />}
    </footer>
  );
}

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 w-11 h-11 bg-primary text-white rounded-full shadow-saccs-md flex items-center justify-center hover:shadow-lg transition-all duration-200 z-40 touch-manipulation"
      aria-label="Scroll naar boven"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}
