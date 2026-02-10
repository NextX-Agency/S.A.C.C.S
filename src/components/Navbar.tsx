'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const homeNavItems = [
  { href: '#home', label: 'Home' },
  { href: '#over-ons', label: 'Over Ons' },
  { href: '#diensten', label: 'Diensten' },
  { href: '#referenties', label: 'Referenties' },
  { href: '#werkwijze', label: 'Werkwijze' },
];

const siteNavItems = [
  { href: '/', label: 'Home' },
  { href: '/over-ons', label: 'Over Ons' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const navItems = isHomePage ? homeNavItems : siteNavItems;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white ${
        isScrolled ? 'border-b border-gray-200' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href={isHomePage ? '#home' : '/'} className="flex items-center" onClick={(e) => isHomePage && handleNavClick(e, '#home')}>
            <div className="relative h-12 md:h-14 w-auto">
              <Image
                src="/logo/noslogan.png"
                alt="SACCS Logo"
                width={160}
                height={56}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = !isHomePage && pathname === item.href;
              return isHomePage && item.href.startsWith('#') ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-3 py-2 text-sm text-saccs-text font-medium hover:text-primary transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                    isActive ? 'text-primary' : 'text-saccs-text hover:text-primary'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}
            {isHomePage ? (
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="ml-4 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200"
              >
                Contact
              </a>
            ) : (
              <Link
                href="/contact"
                className="ml-4 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200"
              >
                Offerte Aanvragen
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-saccs-text transition-all duration-200 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-saccs-text transition-all duration-200 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-saccs-text transition-all duration-200 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-200 ${
            isMobileMenuOpen ? 'max-h-[500px] pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-1 pt-4 border-t border-gray-100">
            {navItems.map((item) => {
              const isActive = !isHomePage && pathname === item.href;
              return isHomePage && item.href.startsWith('#') ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 text-saccs-text font-medium hover:text-primary hover:bg-saccs-light rounded-lg transition-colors duration-200 touch-manipulation min-h-[48px] flex items-center"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 font-medium rounded-lg transition-colors duration-200 touch-manipulation min-h-[48px] flex items-center ${
                    isActive 
                      ? 'text-primary bg-saccs-light' 
                      : 'text-saccs-text hover:text-primary hover:bg-saccs-light'
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
                className="mx-4 mt-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg text-center hover:bg-primary-dark transition-all duration-200 touch-manipulation min-h-[48px] flex items-center justify-center"
              >
                Contact
              </a>
            ) : (
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-4 mt-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg text-center hover:bg-primary-dark transition-all duration-200 touch-manipulation min-h-[48px] flex items-center justify-center"
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
