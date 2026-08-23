import JsonLd from '../../components/JsonLd';

const BASE_URL = 'https://sisros.com';

export const metadata = {
  title: 'Client Reviews & Testimonials | Sisro\'s Makeup Studio',
  description: 'Read what brides and students say about Sisro\'s Makeup Studio in Hyderabad. Real reviews from weddings, special occasions, and our professional makeup academy.',
  keywords: ['Sisro\'s reviews', 'bridal makeup reviews Hyderabad', 'makeup studio testimonials', 'Sisro\'s client feedback', 'wedding makeup Hyderabad reviews'],
  alternates: { canonical: `${BASE_URL}/testimonials` },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/testimonials`,
    title: 'Client Reviews & Testimonials | Sisro\'s Makeup Studio',
    description: 'Read what brides and students say about Sisro\'s Makeup Studio in Hyderabad. Real reviews from weddings, special occasions, and our professional makeup academy.',
    images: [{ url: '/images/Bridal.jpg', width: 1200, height: 630, alt: 'Sisro\'s Makeup Studio Client Testimonials' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Reviews & Testimonials | Sisro\'s Makeup Studio',
    description: 'Read what brides and students say about Sisro\'s Makeup Studio in Hyderabad.',
    images: ['/images/Bridal.jpg'],
  },
};

const testimonialsSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sisro\'s Makeup Studio',
  url: BASE_URL,
  image: `${BASE_URL}/images/Bridal.jpg`,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '6',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ananya Reddy' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Sisro\'s made my wedding day absolutely magical. The bridal makeup was flawless — every photograph looks like a dream. Dr. Preethi understood exactly what I wanted and exceeded my expectations.',
      datePublished: '2025-12-01',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Priyanka Sen' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'The bridal makeup experience at Sisro\'s is truly elite. From the consultation to the final touch-up, everything was handled with such precision and care.',
      datePublished: '2025-11-15',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ramya Rao' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Choosing Sisro\'s was the best decision for my wedding day. My makeup looked flawless from the ceremony until the reception, and I received countless compliments.',
      datePublished: '2025-10-20',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Subhashini' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: "Sisro\'s doesn't just teach you the basics; they prepare you for the working world as well. The practical internship gave me valuable real-world experience.",
      datePublished: '2025-09-10',
    },
  ],
};

export default function TestimonialsLayout({ children }) {
  return (
    <>
      <JsonLd schema={testimonialsSchema} />
      {children}
    </>
  );
}

