'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Image from 'next/image';

import HeroContent from './HeroContent';
import HeroCarousel from './HeroCarousel';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const heroImages = [
  {
    src: '/images/Hero/sisro-heroImage.png',
    tabletSrc: '/images/Hero/Gallery-2-tablet.webp',
    mobileSrc: '/images/Hero/Gallery-2-mobile.webp',
    alt: 'Sisro Makeup Gallery',
  },
  {
    src: '/images/Hero/sisro-heroimg2.png',
    tabletSrc: '/images/Hero/Hero-Home-mkup-tablet.webp',
    mobileSrc: '/images/Hero/Hero-Home-mkup-mobile.webp',
    alt: 'Sisro Bridal Makeup',
  },
  {
    src: '/images/Hero/sisro-heroimg3.png',
    tabletSrc: '/images/Hero/Makeup-room-tablet.webp',
    mobileSrc: '/images/Hero/Makeup-room-mobile.webp',
    alt: 'Sisro Makeup Studio',
  },
];

export default function HomeHero() {
  return (
    <main className="w-full">

      {/* =========================================
          1. FULL WIDTH HERO / SWIPER BANNER
          ========================================= */}
      <section className="w-full h-[calc(100vh-88px)] overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          slidesPerView={1}
          loop={true}
          effect="fade"
          speed={700}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="w-full h-full hero-swiper"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">

                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={image.mobileSrc}
                  />

                  <source
                    media="(max-width: 1199px)"
                    srcSet={image.tabletSrc}
                  />

                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                </picture>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>


      {/* =========================================
          2. HERO CONTENT + HERO CAROUSEL
          ========================================= */}
      <section className="w-full px-5 md:px-8 lg:px-14 py-10 md:py-14">

        <div
          className="
            max-w-[1400px]
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            lg:gap-12
            items-stretch
          "
        >

          {/* HERO CONTENT */}
          <div
            className="
              min-h-[400px]
              lg:min-h-[580px]
            
              p-6
              md:p-8
              lg:p-10
              overflow-hidden
            "
          >
            <HeroContent />
          </div>


          {/* HERO CAROUSEL */}
          <div
            className="
              min-h-[400px]
              lg:min-h-[580px]
              border-[4px]
              border-[#464444]
              rounded-[5px]
              overflow-hidden
              flex
              items-center
              justify-center
            "
          >
            <HeroCarousel />
          </div>

        </div>

      </section>

    </main>
  );
}