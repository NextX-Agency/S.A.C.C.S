import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'SACCS - Professionele Schoonmaakdiensten Suriname',
  description: 'S.A. Cleaning Consultancy Suriname - Uw partner in professionele schoonmaakdiensten voor bedrijven en particulieren in Suriname sinds 2012. Wij doen wat wij zeggen.',
  keywords: 'schoonmaak, cleaning, Suriname, professioneel, B2B, B2C, evenementen, hotel cleaning, zakelijke schoonmaak',
  authors: [{ name: 'SACCS' }],
  creator: 'SACCS',
  openGraph: {
    title: 'SACCS - Professionele Schoonmaakdiensten Suriname',
    description: 'Uw partner in professionele schoonmaakdiensten voor bedrijven en particulieren in Suriname sinds 2012.',
    url: 'https://saccs.sr',
    siteName: 'SACCS',
    locale: 'nl_NL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo/barelogo-removebg-preview.png',
    apple: '/logo/barelogo-removebg-preview.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${montserrat.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
