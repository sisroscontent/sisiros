import Image from 'next/image';

const bridalImages = [
  { src: '/images/Bridal-Image1.webp', alt: 'Bridal look 1' },
  { src: '/images/Bridal-Image2.webp', alt: 'Bridal look 2' },
  { src: '/images/Bridal-Image3.webp', alt: 'Bridal look 3' },
  { src: '/images/Bridal-Image4.webp', alt: 'Bridal look 4' },
  { src: '/images/Bridal-Image5.webp', alt: 'Bridal look 5' },
  { src: '/images/Gallery.webp', alt: 'Gallery' },
];

export default function BridalCollage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {bridalImages.map((image, index) => (
        <div
          key={index}
          className="group bg-white p-2 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <div className="relative overflow-hidden rounded-lg h-[320px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
