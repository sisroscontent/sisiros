import JsonLd from '../../components/JsonLd';

const BASE_URL = 'https://makeupstudio-nextjs.vercel.app';

export const metadata = {
  title: 'Book an Appointment | Sisro\'s Makeup Studio',
  description: "Book your bridal makeup appointment or enquire about Sisro\'s professional makeup academy in Hyderabad. Fill out our quick form and we'll be in touch.",
  keywords: ['book makeup appointment Hyderabad', 'bridal makeup booking', 'makeup course enquiry Hyderabad', 'Sisro\'s booking form', 'makeup studio appointment'],
  alternates: { canonical: `${BASE_URL}/form` },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/form`,
    title: 'Book an Appointment | Sisro\'s Makeup Studio',
    description: "Book your bridal makeup appointment or enquire about Sisro\'s professional makeup academy in Hyderabad.",
    images: [{ url: '/images/Contact-us.png', width: 1200, height: 630, alt: 'Book an Appointment at Sisro\'s Makeup Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book an Appointment | Sisro\'s Makeup Studio',
    description: "Book your bridal makeup appointment or enquire about Sisro\'s makeup academy in Hyderabad.",
    images: ['/images/Contact-us.png'],
  },
};

const formSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Book an Appointment — Sisro\'s Makeup Studio',
  url: `${BASE_URL}/form`,
  description: "Book your bridal makeup appointment or enquire about Sisro\'s professional makeup academy in Hyderabad.",
  image: `${BASE_URL}/images/Contact-us.png`,
  mainEntity: {
    '@type': 'BeautySalon',
    name: 'Sisro\'s Makeup Studio',
    url: BASE_URL,
    potentialAction: [
      {
        '@type': 'ReserveAction',
        name: 'Book Bridal Makeup Appointment',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE_URL}/form`,
          actionPlatform: ['https://schema.org/DesktopWebPlatform', 'https://schema.org/MobileWebPlatform'],
        },
        result: { '@type': 'Reservation', name: 'Bridal Makeup Appointment' },
      },
      {
        '@type': 'ReserveAction',
        name: 'Enquire About Makeup Courses',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE_URL}/form`,
          actionPlatform: ['https://schema.org/DesktopWebPlatform', 'https://schema.org/MobileWebPlatform'],
        },
        result: { '@type': 'Reservation', name: 'Academy Course Enquiry' },
      },
    ],
  },
};

export default function FormLayout({ children }) {
  return (
    <>
      <JsonLd schema={formSchema} />
      {children}
    </>
  );
}

