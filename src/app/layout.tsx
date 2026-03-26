import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'S.A.C.C.S - S.A. Cleaning Consultancy Suriname',
    template: '%s | S.A.C.C.S',
  },
  description: 'S.A. Cleaning Consultancy Suriname - Uw partner in professionele schoonmaakdiensten voor bedrijven en particulieren in Suriname sinds 2012. Wij doen wat wij zeggen.',
  keywords: 'schoonmaak, cleaning, Suriname, professioneel, B2B, B2C, evenementen, hotel cleaning, zakelijke schoonmaak, S.A.C.C.S, Paramaribo',
  authors: [{ name: 'S.A.C.C.S' }],
  creator: 'S.A.C.C.S',
  metadataBase: new URL('https://saccs.sr'),
  openGraph: {
    title: 'S.A.C.C.S - Professionele Schoonmaakdiensten Suriname',
    description: 'Uw partner in professionele schoonmaakdiensten voor bedrijven en particulieren in Suriname sinds 2012.',
    url: 'https://saccs.sr',
    siteName: 'S.A.C.C.S',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/beeld/beeld1.jpg',
        width: 1200,
        height: 630,
        alt: 'S.A.C.C.S Professionele Schoonmaakdiensten',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S.A.C.C.S - Professionele Schoonmaakdiensten Suriname',
    description: 'Uw partner in professionele schoonmaakdiensten voor bedrijven en particulieren in Suriname sinds 2012.',
    images: ['/beeld/beeld1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo/barelogo-removebg-preview.png',
    apple: '/logo/barelogo-removebg-preview.png',
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'S.A.C.C.S - S.A. Cleaning Consultancy Suriname',
  image: 'https://saccs.sr/logo/noslogan.png',
  '@id': 'https://saccs.sr',
  url: 'https://saccs.sr',
  telephone: '+597 8517364',
  email: 'jahangier_s@hotmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paramaribo',
    addressCountry: 'SR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 5.8520,
    longitude: -55.2038,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '14:00',
    },
  ],
  sameAs: [],
  priceRange: '$$',
  description: 'Professionele schoonmaakdiensten voor bedrijven en particulieren in Suriname sinds 2012.',
  founder: {
    '@type': 'Person',
    name: 'Safiek Jahangier',
  },
  foundingDate: '2012',
  areaServed: {
    '@type': 'Country',
    name: 'Suriname',
  },
  serviceType: [
    'Zakelijke Schoonmaak',
    'Particuliere Schoonmaak',
    'Evenementenservice',
    'Specialistische Diensten',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
