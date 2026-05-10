'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const homeNavItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Over Ons' },
  { href: '#services', label: 'Diensten' },
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
  const [activeSection, setActiveSection] = useState('#home');
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const navItems = isHomePage ? homeNavItems : siteNavItems;

  // Scroll-based active section tracking for homepage
  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = homeNavItems.map((item) => item.href);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    const elements = sectionIds
      .map((id) => document.querySelector(id))
      .filter(Boolean) as Element[];
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isHomePage]);

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
    <nav className="fixed top-0 w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <div className="flex justify-between items-center bg-white/70 backdrop-blur-xl shadow-lg rounded-full px-6 h-16">
        {/* Logo */}
        {isHomePage ? (
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex-shrink-0 flex items-center gap-2"
          >
            <Image
              src="/logo/barelogo-removebg-preview.png"
              alt="S.A.C.C.S."
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <div>
              <div className="text-sm font-black tracking-tight leading-tight text-on-surface">S.A.C.C.S</div>
              <p className="text-[10px] text-primary italic leading-tight font-semibold">Wij doen wat wij zeggen</p>
            </div>
          </a>
        ) : (
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <Image
              src="/logo/barelogo-removebg-preview.png"
              alt="S.A.C.C.S."
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <div>
              <div className="text-sm font-black tracking-tight leading-tight text-on-surface">S.A.C.C.S</div>
              <p className="text-[10px] text-primary italic leading-tight font-semibold">Wij doen wat wij zeggen</p>
            </div>
          </Link>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 tracking-tight text-sm font-medium">
          {navItems.map((item) => {
            const isActive = (!isHomePage && pathname === item.href) || (isHomePage && activeSection === item.href);
            return isHomePage && item.href.startsWith('#') ? (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={
                  isActive
                    ? 'text-primary font-bold border-b-2 border-primary'
                    : 'text-slate-600 hover:text-primary transition-all'
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
                    ? 'text-primary font-bold border-b-2 border-primary'
                    : 'text-slate-600 hover:text-primary transition-all'
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
            className="hidden md:block bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg shadow-md shadow-primary/30 transition-all active:scale-95 duration-200"
          >
            Offerte Aanvragen
          </a>
        ) : (
          <Link
            href="/#contact"
            className="hidden md:block bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg shadow-md shadow-primary/30 transition-all active:scale-95 duration-200"
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
      <div className={`md:hidden overflow-hidden transition-all duration-200 mx-4 mt-2 bg-white/90 backdrop-blur-xl rounded-3xl shadow-lg ${isMobileMenuOpen ? 'max-h-[500px] pb-4' : 'max-h-0 shadow-none'}`}>
        <div className="flex flex-col space-y-1 pt-4 px-4">
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
              className="mx-4 mt-2 px-6 py-3 bg-primary text-white font-bold rounded-full text-center transition-all duration-200 touch-manipulation min-h-[48px] flex items-center justify-center"
            >
              Offerte Aanvragen
            </a>
          ) : (
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mx-4 mt-2 px-6 py-3 bg-primary text-white font-bold rounded-full text-center transition-all duration-200 touch-manipulation min-h-[48px] flex items-center justify-center"
            >
              Offerte Aanvragen
            </Link>
          )}
        </div>
      </div>
      </div>
    </nav>
  );
}
