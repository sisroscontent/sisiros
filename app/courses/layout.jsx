import JsonLd from '../../components/JsonLd';

const BASE_URL = 'https://sisros.com';

export const metadata = {
  title: 'Makeup Academy in Hyderabad | Sisro\'s',
  description:
    'Learn professional makeup artistry at Sisro\'s Academy in Hyderabad. Courses in bridal makeup, self-grooming, corporate grooming, and advanced techniques for all skill levels.',
  keywords: ['makeup academy Hyderabad', 'makeup courses Hyderabad', 'professional makeup training', 'bridal makeup course Madhapur', 'Sisro\'s academy', 'beauty school Hyderabad'],
  alternates: { canonical: `${BASE_URL}/courses` },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/courses`,
    title: 'Makeup Academy in Hyderabad | Sisro\'s',
    description: 'Learn professional makeup artistry at Sisro\'s Academy in Hyderabad. Courses in bridal makeup, self-grooming, corporate grooming, and advanced techniques for all skill levels.',
    images: [{ url: '/images/Academy.png', width: 1200, height: 630, alt: 'Sisro\'s Makeup Academy — Hyderabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Makeup Academy in Hyderabad | Sisro\'s',
    description: 'Learn professional makeup artistry at Sisro\'s Academy in Hyderabad. Courses for all skill levels.',
    images: ['/images/Academy.png'],
  },
};

const academySchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Sisro\'s Makeup Academy',
  description: 'Professional makeup academy in Hyderabad offering courses in bridal makeup, self-grooming, corporate grooming, and advanced makeup techniques for all skill levels.',
  url: `${BASE_URL}/courses`,
  image: `${BASE_URL}/images/Academy.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Madhapur',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500081',
    addressCountry: 'IN',
  },
  parentOrganization: { '@type': 'BeautySalon', name: 'Sisro\'s Makeup Studio', url: BASE_URL },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Makeup Courses',
    itemListElement: [
      {
        '@type': 'Course',
        name: 'Self Grooming',
        description: 'Beginner-friendly self-grooming and personal makeup course.',
        provider: { '@type': 'EducationalOrganization', name: 'Sisro\'s Makeup Academy' },
        timeRequired: 'P2W',
        educationalLevel: 'Beginner',
        url: `${BASE_URL}/courses`,
      },
      {
        '@type': 'Course',
        name: 'Corporate Grooming',
        description: 'Professional corporate grooming and presentation makeup course.',
        provider: { '@type': 'EducationalOrganization', name: 'Sisro\'s Makeup Academy' },
        timeRequired: 'P4W',
        educationalLevel: 'Beginner',
        url: `${BASE_URL}/courses`,
      },
      {
        '@type': 'Course',
        name: 'Makeup Training',
        description: 'Advanced professional makeup training programme in Hyderabad.',
        provider: { '@type': 'EducationalOrganization', name: 'Sisro\'s Makeup Academy' },
        timeRequired: 'P8W',
        educationalLevel: 'Advanced',
        url: `${BASE_URL}/courses`,
      },
    ],
  },
};

export default function AcademyLayout({ children }) {
  return (
    <>
      <JsonLd schema={academySchema} />
      {children}
    </>
  );
}

