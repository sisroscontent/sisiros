import JsonLd from '../../components/JsonLd';

const BASE_URL = 'https://sisros.com';

export const metadata = {
  title: 'Makeup Gallery | Sisro\'s Makeup Studio',
  description: 'Explore the Sisro\'s portfolio — stunning bridal, reception, engagement, celebrity, and HD makeup looks created by our expert artists in Hyderabad.',
  keywords: ['makeup gallery Hyderabad', 'bridal makeup portfolio', 'Sisro\'s gallery', 'wedding makeup photos', 'HD makeup Hyderabad', 'celebrity makeup Hyderabad'],
  alternates: { canonical: `${BASE_URL}/gallery` },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/gallery`,
    title: 'Makeup Gallery | Sisro\'s Makeup Studio',
    description: 'Explore the Sisro\'s portfolio — stunning bridal, reception, engagement, celebrity, and HD makeup looks created by our expert artists in Hyderabad.',
    images: [{ url: '/images/Gallery/Gallery-1.png', width: 1200, height: 630, alt: 'Sisro\'s Makeup Gallery — Bridal & Special Occasion Looks' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Makeup Gallery | Sisro\'s Makeup Studio',
    description: 'Explore stunning bridal, reception, and HD makeup looks by Sisro\'s in Hyderabad.',
    images: ['/images/Gallery/Gallery-1.png'],
  },
};

const gallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Sisro\'s Makeup Studio — Portfolio Gallery',
  description: 'A curated portfolio of bridal, reception, engagement, celebrity, and HD makeup looks by Sisro\'s Makeup Studio in Hyderabad.',
  url: `${BASE_URL}/gallery`,
  image: [
    `${BASE_URL}/images/Gallery/Gallery-1.png`,
    `${BASE_URL}/images/Gallery/Gallery-2.png`,
    `${BASE_URL}/images/Gallery/Gallery-3.png`,
    `${BASE_URL}/images/Gallery/Gallery-4.png`,
    `${BASE_URL}/images/Gallery/Gallery-5.png`,
    `${BASE_URL}/images/Bridal-Image1.jpg`,
    `${BASE_URL}/images/Bridal-Image2.jpg`,
    `${BASE_URL}/images/Bridal-Image3.jpg`,
  ],
  author: { '@type': 'BeautySalon', name: 'Sisro\'s Makeup Studio', url: BASE_URL },
};

export default function GalleryLayout({ children }) {
  return (
    <>
      <JsonLd schema={gallerySchema} />
      {children}
    </>
  );
}

