import BridalContent from './BridalContent';
import BridalCarousel from './BridalCarousel';

export default function BridalHero() {
  return (
    <section className="max-w-[1300px] mx-auto px-4 md:px-8 min-h-[calc(100vh-98px)] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 w-full">

        {/* Carousel — top on mobile, right on desktop */}
        <div className="order-1 lg:order-2 flex justify-center items-center lg:-translate-x-17">
          <BridalCarousel />
        </div>

        {/* Content — bottom on mobile, left on desktop */}
        <div className="order-2 lg:order-1 ">
          <BridalContent />
        </div>
      </div>
    </section>
  );
}
