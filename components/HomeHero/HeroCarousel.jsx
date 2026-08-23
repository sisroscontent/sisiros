'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
  { src: '/images/Gallery/Gallery-2.webp', alt: 'Gallery slide 1' },
  { src: '/images/Hero-Home-mkup.webp', alt: 'Hero slide 2' },
  { src: '/images/Makeup-room.webp', alt: 'Makeup room slide 3' },
];

export default function HeroCarousel() {
  const [loadedImages, setLoadedImages] = useState({});

  return (
    <div className="w-[400px] h-[480px] my-3 md:my-6 sm:h-[400px] lg:h-[580px] rounded-[5px] overflow-hidden shadow-xl border-[4px] border-[#464444]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {!loadedImages[index] && (
                <div className="absolute inset-0 animate-pulse bg-gray-700" />
              )}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-opacity duration-500 ${
                  loadedImages[index] ? 'opacity-100' : 'opacity-0'
                }`}
                priority={index === 0}
                onLoad={() =>
                  setLoadedImages((prev) => ({ ...prev, [index]: true }))
                }
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
