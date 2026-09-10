import Image from 'next/image';
import Link from 'next/link';

export default function HeroBanner({
  image,
  subtitle,
  title,
  description,
  buttonText = 'Book Appointment',
}) {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <p className="text-[#2B2522] uppercase tracking-[4px] text-sm mb-5">
            {subtitle}
          </p>

          <h1 className="text-[#2B2522] text-5xl lg:text-7xl font-bold leading-tight">
            {title}
          </h1>

          <p className="text-[#E8E1D8] text-lg mt-6 leading-8">{description}</p>

          <Link
            href="/form"
            className="inline-block mt-10 px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-md hover:bg-[#c49b2d] transition"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
