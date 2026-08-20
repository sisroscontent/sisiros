import HomeHero from '../components/HomeHero/HomeHero';
import JsonLd from '../components/JsonLd';

const BASE_URL = 'https://makeupstudio-nextjs.vercel.app';

export const metadata = {
  title: 'Sisro\'s Makeup Studio | Luxury Bridal Makeup in Hyderabad',
  description:
    'Sisro\'s offers luxury bridal makeup and personalised beauty services in Hyderabad. Flawless looks for weddings, receptions, and every special occasion.',
  keywords: [
    'best makeup studio Hyderabad',
    'makeupstudio hyderabad',
    'best makeup artist',
    'bridal makeup Hyderabad',
    'luxury makeup studio',
    'wedding makeup artist',
    'Sisro\'s makeup studio',
    'beauty services Hyderabad',
  ],
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'Sisro\'s Makeup Studio | Luxury Bridal Makeup in Hyderabad',
    description:
      'Sisro\'s offers luxury bridal makeup and personalised beauty services in Hyderabad. Flawless looks for weddings, receptions, and every special occasion.',
    images: [{ url: '/images/Bridal.jpg', width: 1200, height: 630, alt: 'Sisro\'s Makeup Studio — Luxury Bridal Makeup Hyderabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sisro\'s Makeup Studio | Luxury Bridal Makeup in Hyderabad',
    description: 'Sisro\'s offers luxury bridal makeup and personalised beauty services in Hyderabad.',
    images: ['/images/Bridal.jpg'],
  },
};

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Sisro\'s Makeup Studio',
  description:
    'Luxury bridal makeup studio and professional beauty academy in Hyderabad offering personalised makeup services for weddings, receptions, and all special occasions.',
  url: BASE_URL,
  image: `${BASE_URL}/images/Bridal.jpg`,
  telephone: '+91-XXXXXXXXXX',
  priceRange: '₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Madhapur',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500081',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.4504,
    longitude: 78.3919,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/sisiro_makeup/',
    'https://www.facebook.com/sisiromakeup/',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Makeup Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bridal Makeup', url: `${BASE_URL}/bridal` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Makeup Academy', url: `${BASE_URL}/courses` } },
    ],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd schema={homeSchema} />
      <HomeHero />
    </>
  );
}

