import HeroBanner from '../../components/HeroBanner';
import JsonLd from '../../components/JsonLd';

const BASE_URL = 'https://sisros.com';

export const metadata = {
  title: 'Contact Us | Sisro\'s Makeup Studio',
  description:
    'Get in touch with Sisro\'s Makeup Studio in Hyderabad. Book a bridal consultation, enquire about our services, or visit us at our studio.',
  keywords: ['contact Sisro\'s', 'book makeup appointment Hyderabad', 'bridal makeup consultation', 'makeup studio Hyderabad contact'],
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/contact`,
    title: 'Contact Us | Sisro\'s Makeup Studio',
    description: 'Get in touch with Sisro\'s Makeup Studio in Hyderabad. Book a bridal consultation or enquire about our services.',
    images: [{ url: '/images/Contact-us.png', width: 1200, height: 630, alt: 'Contact Sisro\'s Makeup Studio — Hyderabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Sisro\'s Makeup Studio',
    description: 'Get in touch with Sisro\'s Makeup Studio in Hyderabad. Book a bridal consultation or enquire about our services.',
    images: ['/images/Contact-us.png'],
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Sisro\'s Makeup Studio',
  url: `${BASE_URL}/contact`,
  description: 'Get in touch with Sisro\'s Makeup Studio in Hyderabad. Book a bridal consultation, enquire about our services, or visit us at our studio.',
  image: `${BASE_URL}/images/Contact-us.png`,
  mainEntity: {
    '@type': 'BeautySalon',
    name: 'Sisro\'s Makeup Studio',
    url: BASE_URL,
    telephone: '+91-XXXXXXXXXX',
    email: 'hello@sisiro.co',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Madhapur',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500081',
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00',
      },
    ],
  },
};

export default function Contact() {
  return (
    <>
      <JsonLd schema={contactSchema} />
      <HeroBanner
        image="/images/Contact-us.png"
        subtitle="Contact Us"
        title="Let's Make Your Special Day Beautiful"
        description="Book an appointment or contact us for consultations."
        buttonText="Contact Now"
      />
    </>
  );
}

