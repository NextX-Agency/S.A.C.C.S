'use client';

import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHeader({ 
  title, 
  subtitle, 
  backgroundImage = '/beeld/beeld1.jpg',
  breadcrumbs 
}: PageHeaderProps) {
  return (
    <section className="relative h-[30vh] min-h-[220px] max-h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-3">
            <ol className="flex items-center justify-center gap-2 text-sm text-white/70">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {index > 0 && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-white">{crumb.label}</span>
                  ) : (
                    <a href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
