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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const navItems = isHomePage ? homeNavItems : siteNavItems;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_1px_0_0_rgba(0,0,0,0.08)]' : 'border-b border-outline-variant/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        {isHomePage ? (
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex-shrink-0 flex items-center gap-2.5"
          >
            <Image
              src="/logo/barelogo-removebg-preview.png"
              alt="S.A.C.C.S."
              width={36}
              height={36}
              className="h-9 w-auto"
              priority
            />
            <div>
              <div className="text-sm font-black tracking-tight leading-tight text-on-surface">S.A.C.C.S</div>
              <p className="text-[10px] text-primary italic leading-tight font-semibold">Wij doen wat wij zeggen</p>
            </div>
          </a>
        ) : (
          <Link href="/" className="flex-shrink-0 flex items-center gap-2.5">
            <Image
              src="/logo/barelogo-removebg-preview.png"
              alt="S.A.C.C.S."
              width={36}
              height={36}
              className="h-9 w-auto"
              priority
            />
            <div>
              <div className="text-sm font-black tracking-tight leading-tight text-on-surface">S.A.C.C.S</div>
              <p className="text-[10px] text-primary italic leading-tight font-semibold">Wij doen wat wij zeggen</p>
            </div>
          </Link>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 tracking-tight text-sm font-medium">
          {navItems.map((item) => {
            const isActive =
              (!isHomePage && pathname === item.href) ||
              (isHomePage && activeSection === item.href);
            return isHomePage && item.href.startsWith('#') ? (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-colors duration-150 ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-150 ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
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
            className="hidden md:block bg-primary text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors duration-150"
          >
            Offerte Aanvragen
          </a>
        ) : (
          <Link
            href="/#contact"
            className="hidden md:block bg-primary text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors duration-150"
          >
            Offerte Aanvragen
          </Link>
        )}

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 touch-manipulation"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`w-5 h-0.5 bg-on-surface transition-all duration-200 origin-center ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-on-surface transition-all duration-200 ${
              isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-on-surface transition-all duration-200 origin-center ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden border-t border-outline-variant/20 bg-white overflow-hidden transition-all duration-200 ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-6 py-3 gap-1">
          {navItems.map((item) => {
            const isActive = !isHomePage && pathname === item.href;
            return isHomePage && item.href.startsWith('#') ? (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-3 text-on-surface font-medium hover:text-primary rounded-lg transition-colors touch-manipulation min-h-[48px] flex items-center"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-3 font-medium rounded-lg transition-colors touch-manipulation min-h-[48px] flex items-center ${
                  isActive ? 'text-primary' : 'text-on-surface hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2 pb-3">
            {isHomePage ? (
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg text-center touch-manipulation min-h-[48px] flex items-center justify-center"
              >
                Offerte Aanvragen
              </a>
            ) : (
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg text-center touch-manipulation min-h-[48px] flex items-center justify-center"
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
