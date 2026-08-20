import BridalHero from '../../components/BridalHero/BridalHero';
import JsonLd from '../../components/JsonLd';

const BASE_URL = 'https://makeupstudio-nextjs.vercel.app';

export const metadata = {
  title: 'Bridal Makeup in Hyderabad | Sisro\'s Makeup Studio',
  description:
    'Book your dream bridal makeup with Sisro\'s in Hyderabad. Personalised skin analysis, HD and airbrush techniques, and flawless long-lasting looks crafted for your wedding day.',
  keywords: ['bridal makeup Hyderabad', 'wedding makeup artist Hyderabad', 'HD bridal makeup', 'airbrush bridal makeup', 'Sisro\'s bridal', 'luxury bridal beauty Hyderabad'],
  alternates: { canonical: `${BASE_URL}/bridal` },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/bridal`,
    title: 'Bridal Makeup in Hyderabad | Sisro\'s Makeup Studio',
    description:
      'Book your dream bridal makeup with Sisro\'s in Hyderabad. Personalised skin analysis, HD and airbrush techniques, and flawless long-lasting looks for your wedding day.',
    images: [{ url: '/images/Bridal.jpg', width: 1200, height: 630, alt: 'Bridal Makeup by Sisro\'s — Hyderabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bridal Makeup in Hyderabad | Sisro\'s Makeup Studio',
    description: 'Book your dream bridal makeup with Sisro\'s in Hyderabad. HD and airbrush techniques for your perfect day.',
    images: ['/images/Bridal.jpg'],
  },
};

const bridalSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bridal Makeup',
  serviceType: 'Bridal Makeup & Beauty',
  description:
    'Luxury bridal makeup service in Hyderabad. Personalised skin analysis, HD and airbrush makeup techniques for a flawless, long-lasting look on your wedding day.',
  url: `${BASE_URL}/bridal`,
  image: `${BASE_URL}/images/Bridal.jpg`,
  provider: {
    '@type': 'BeautySalon',
    name: 'Sisro\'s Makeup Studio',
    url: BASE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Madhapur',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500081',
      addressCountry: 'IN',
    },
  },
  areaServed: { '@type': 'City', name: 'Hyderabad' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Bridal Makeup Packages',
    itemListElement: [
      { '@type': 'Offer', name: 'HD Bridal Makeup', description: 'High-definition bridal makeup for a flawless on-camera finish.', priceCurrency: 'INR' },
      { '@type': 'Offer', name: 'Airbrush Bridal Makeup', description: 'Lightweight, long-lasting airbrush makeup for the perfect wedding look.', priceCurrency: 'INR' },
      { '@type': 'Offer', name: 'Engagement & Reception Makeup', description: 'Personalised makeup looks for engagement ceremonies and receptions.', priceCurrency: 'INR' },
    ],
  },
};

export default function Bridal() {
  return (
    <>
      <JsonLd schema={bridalSchema} />
      <BridalHero />
    </>
  );
}

