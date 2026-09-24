import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooterNew from "@/components/SiteFooterNew";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "S.A.C.C.S - S.A. Cleaning Consultancy Suriname",
    template: "%s | S.A.C.C.S",
  },
  description:
    "S.A. Cleaning Consultancy Suriname - Uw partner in professionele schoonmaakdiensten voor bedrijven en particulieren in Suriname sinds 2012. Wij doen wat wij zeggen.",
  keywords:
    "schoonmaak, cleaning, Suriname, professioneel, B2B, B2C, evenementen, hotel cleaning, zakelijke schoonmaak, S.A.C.C.S, Paramaribo",
  authors: [{ name: "S.A.C.C.S" }],
  creator: "S.A.C.C.S",
  metadataBase: new URL("https://saccs.sr"),
  openGraph: {
    title: "S.A.C.C.S - Professionele Schoonmaakdiensten Suriname",
    description:
      "Uw partner in professionele schoonmaakdiensten voor bedrijven en particulieren in Suriname sinds 2012.",
    url: "https://saccs.sr",
    siteName: "S.A.C.C.S",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/beeld/saccs-commercial-interior-hero.webp",
        width: 1672,
        height: 941,
        alt: "S.A.C.C.S Professionele Schoonmaakdiensten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S.A.C.C.S - Professionele Schoonmaakdiensten Suriname",
    description:
      "Uw partner in professionele schoonmaakdiensten voor bedrijven en particulieren in Suriname sinds 2012.",
    images: ["/beeld/saccs-commercial-interior-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo/barelogo-removebg-preview.png",
    apple: "/logo/barelogo-removebg-preview.png",
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "S.A.C.C.S - S.A. Cleaning Consultancy Suriname",
  image: "https://saccs.sr/logo/noslogan.png",
  "@id": "https://saccs.sr",
  url: "https://saccs.sr",
  telephone: "+597 8517364",
  email: "jahangier_s@hotmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Paramaribo",
    addressCountry: "SR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  description:
    "Professionele schoonmaakdiensten voor bedrijven en particulieren in Suriname sinds 2012.",
  foundingDate: "2012",
  areaServed: {
    "@type": "Country",
    name: "Suriname",
  },
  serviceType: [
    "Zakelijke Schoonmaak",
    "Particuliere Schoonmaak",
    "Evenementenservice",
    "Specialistische Diensten",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${dmSans.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Ga naar inhoud
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooterNew />
      </body>
    </html>
  );
}
