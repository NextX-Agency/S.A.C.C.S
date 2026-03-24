'use client';

export default function MobileFloatingCTA() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
      <a
        href="#contact"
        onClick={handleClick}
        className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 font-bold text-sm tracking-wide transition-transform active:scale-90 touch-manipulation"
      >
        <span className="material-symbols-outlined">calendar_today</span>
        Offerte Aanvragen
      </a>
    </div>
  );
}
