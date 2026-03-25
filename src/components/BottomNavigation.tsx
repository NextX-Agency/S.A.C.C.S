'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { icon: 'home', label: 'Home', href: '#home' },
  { icon: 'cleaning_services', label: 'Diensten', href: '#services' },
  { icon: 'verified_user', label: 'Vertrouwen', href: '#references' },
  { icon: 'mail', label: 'Contact', href: '#contact' },
];

export default function BottomNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(navItems[i].href);
        if (section && section.getBoundingClientRect().top + window.scrollY <= scrollPos) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, index: number) => {
    e.preventDefault();
    setActiveIndex(index);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 backdrop-blur-lg border-t border-slate-100 shadow-[0_-4px_20px_0_rgba(0,0,0,0.03)] z-50">
      {navItems.map((item, index) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => handleNavClick(e, item.href, index)}
          className={`flex flex-col items-center justify-center px-5 py-2 active:scale-90 transition-all touch-manipulation ${
            activeIndex === index
              ? 'bg-primary-fixed/30 text-primary rounded-2xl'
              : 'text-slate-400'
          }`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="text-[11px] font-medium uppercase tracking-wider mt-1">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
