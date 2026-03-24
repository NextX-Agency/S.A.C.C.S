'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const homeNavItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Over Ons' },
  { href: '#services', label: 'Diensten' },
  { href: '#references', label: 'Referenties' },
  { href: '#contact', label: 'Contact' },
];

const siteNavItems = [
  { href: '/', label: 'Home' },
  { href: '/over-ons', label: 'Over Ons' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const navItems = isHomePage ? homeNavItems : siteNavItems;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        {/* Logo */}
        {isHomePage ? (
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-xl font-black tracking-tighter text-green-800"
          >
            S.A.C.C.S.
          </a>
        ) : (
          <Link href="/" className="text-xl font-black tracking-tighter text-green-800">
            S.A.C.C.S.
          </Link>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 tracking-tight text-sm font-medium">
          {navItems.map((item, index) => {
            const isActive = (!isHomePage && pathname === item.href) || (isHomePage && index === 0);
            return isHomePage && item.href.startsWith('#') ? (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={
                  isActive
                    ? 'text-green-700 font-bold border-b-2 border-green-600'
                    : 'text-slate-600 hover:text-green-600 transition-all'
                }
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? 'text-green-700 font-bold border-b-2 border-green-600'
                    : 'text-slate-600 hover:text-green-600 transition-all'
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        {isHomePage ? (
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:block bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg transition-all active:scale-95 duration-200"
          >
            Offerte Aanvragen
          </a>
        ) : (
          <Link
            href="/contact"
            className="hidden md:block bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg transition-all active:scale-95 duration-200"
          >
            Offerte Aanvragen
          </Link>
        )}

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 touch-manipulation"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`w-6 h-0.5 bg-on-surface transition-all duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-on-surface transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-on-surface transition-all duration-200 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-200 bg-white/90 backdrop-blur-md ${isMobileMenuOpen ? 'max-h-[500px] pb-4' : 'max-h-0'}`}>
        <div className="flex flex-col space-y-1 pt-4 px-6 border-t border-gray-100">
          {navItems.map((item) => {
            const isActive = !isHomePage && pathname === item.href;
            return isHomePage && item.href.startsWith('#') ? (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-3 text-on-surface font-medium hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors duration-200 touch-manipulation min-h-[48px] flex items-center"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 font-medium rounded-lg transition-colors duration-200 touch-manipulation min-h-[48px] flex items-center ${
                  isActive ? 'text-primary bg-surface-container-low' : 'text-on-surface hover:text-primary hover:bg-surface-container-low'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          {isHomePage ? (
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mx-4 mt-2 px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-full text-center transition-all duration-200 touch-manipulation min-h-[48px] flex items-center justify-center"
            >
              Offerte Aanvragen
            </a>
          ) : (
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mx-4 mt-2 px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-full text-center transition-all duration-200 touch-manipulation min-h-[48px] flex items-center justify-center"
            >
              Offerte Aanvragen
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
