'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const images = [
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
    <section className="w-full h-[calc(100vh-88px)] flex justify-center overflow-hidden ">
      <div className="w-[100%] h-full">
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
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <picture>
                  <source media="(max-width: 767px)" srcSet={image.mobileSrc} />
                  <source media="(max-width: 1199px)" srcSet={image.tabletSrc} />
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    sizes="80vw"
                    className="object-cover"
                  />
                </picture>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}