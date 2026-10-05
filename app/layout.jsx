import { Outfit } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import JsonLd from '../components/JsonLd';
import LayoutClient from "../components/LayoutClient";
import ScrollPageNavigation from "../components/ScrollPageNavigation";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

const BASE_URL = 'https://sisros.com';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Sisro\'s Makeup Studio | Luxury Bridal Makeup in Hyderabad',
    template: '%s | Sisro\'s Makeup Studio',
  },
  description:
    "Sisro\'s is Hyderabad's premier luxury bridal makeup studio and beauty academy. Expert makeup artists for weddings, receptions, and all special occasions.",
  keywords: [
    'bridal makeup Hyderabad',
    'luxury makeup studio Hyderabad',
    'wedding makeup artist Hyderabad',
    'makeup academy Hyderabad',
    'Sisro\'s makeup',
    'bridal beauty Hyderabad',
    'professional makeup artist',
  ],
  authors: [{ name: 'Sisro\'s Makeup Studio', url: BASE_URL }],
  creator: 'Sisro\'s Makeup Studio',
  publisher: 'Sisro\'s Makeup Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo/Sisiro_logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'Sisro\'s Makeup Studio',
    title: 'Sisro\'s Makeup Studio | Luxury Bridal Makeup in Hyderabad',
    description:
      "Sisro\'s is Hyderabad's premier luxury bridal makeup studio and beauty academy. Expert makeup artists for weddings, receptions, and all special occasions.",
    images: [
      {
        url: '/images/Bridal.jpg',
        width: 1200,
        height: 630,
        alt: 'Sisro\'s Makeup Studio — Luxury Bridal Makeup Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sisiro_makeup',
    creator: '@sisiro_makeup',
    title: 'Sisro\'s Makeup Studio | Luxury Bridal Makeup in Hyderabad',
    description:
      "Sisro\'s is Hyderabad's premier luxury bridal makeup studio and beauty academy.",
    images: ['/images/Bridal.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: 'google56827e20951fe5d4',
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sisro\'s Makeup Studio',
    url: BASE_URL,
    logo: `${BASE_URL}/logo/Sisiro_logo.png`,
    sameAs: [
      'https://www.instagram.com/sisiro_makeup/',
      'https://www.facebook.com/sisiromakeup/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Telugu', 'Hindi'],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sisro\'s Makeup Studio',
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en">
      <body className={`${outfit.className} bg-[#3F090C] antialiased`}>
        <JsonLd schema={organizationSchema} />
        <JsonLd schema={websiteSchema} />
          <ScrollPageNavigation />

        <Header />

        <LayoutClient>
          <main>{children}</main>
        </LayoutClient>
      </body>
    </html>
  );
}
