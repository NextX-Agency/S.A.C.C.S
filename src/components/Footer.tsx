'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Globe, Share2 } from 'lucide-react';
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
    <footer className="bg-surface-container-lowest w-full border-t-2 border-primary/10 relative overflow-hidden">
      {/* Subtle bubble decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-container/8 animate-saccs-a" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/5 animate-saccs-c" />
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        {/* Company Info */}
        <div className="sm:col-span-2 lg:col-span-1 space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/barelogo-removebg-preview.png"
              alt="S.A.C.C.S."
              width={40}
              height={40}
              className="h-9 lg:h-10 w-auto"
            />
            <div>
              <div className="text-base lg:text-lg font-black tracking-tight text-on-surface leading-tight">S.A.C.C.S</div>
              <p className="text-[10px] lg:text-xs text-primary italic leading-tight font-semibold">Wij doen wat wij zeggen</p>
            </div>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Uw professionele partner voor alle schoonmaakuitdagingen. Kwaliteit en betrouwbaarheid sinds 2012.
          </p>
          {/* Mini bubble trio */}
          <div className="flex items-center" aria-hidden="true">
            <div className="w-2.5 h-2.5 rounded-full bg-on-primary-container/60" />
            <div className="w-3.5 h-3.5 rounded-full bg-primary/70 -ml-1" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary-container -ml-1" />
          </div>
        </div>

        {/* Snelmenu */}
        <div className="space-y-4 lg:space-y-6">
          <h4 className="font-bold text-on-surface uppercase text-[11px] lg:text-xs tracking-widest">Snelmenu</h4>
          <ul className="space-y-2.5 lg:space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                {isHomePage && link.href.startsWith('#') ? (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className="text-on-surface-variant hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Diensten */}
        <div className="space-y-4 lg:space-y-6">
          <h4 className="font-bold text-on-surface uppercase text-[11px] lg:text-xs tracking-widest">Diensten</h4>
          <ul className="space-y-2.5 lg:space-y-3 text-sm">
            {dienstenLinks.map((link) => (
              <li key={link.label}>
                <span className="text-on-surface-variant">{link.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Juridisch */}
        <div className="space-y-4 lg:space-y-6">
          <h4 className="font-bold text-on-surface uppercase text-[11px] lg:text-xs tracking-widest">Juridisch</h4>
          <div className="flex flex-col gap-2.5 lg:gap-3 text-sm">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 lg:py-6 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-on-surface-variant text-xs leading-relaxed">
          &copy; {currentYear} {siteConfig.fullName}. Alle rechten voorbehouden.
        </p>
        <div className="flex gap-6">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#" aria-label="Website">
            <Globe className="w-5 h-5" />
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#" aria-label="Delen">
            <Share2 className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
