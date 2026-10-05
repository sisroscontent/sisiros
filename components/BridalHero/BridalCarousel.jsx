"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  // { src: "/images/photo-collage.png", alt: "Bridal collage" },
  { src: "/images/Bridal-Image2.webp", alt: "Bridal look 2" },
  // { src: "/images/photo-collage.png", alt: "Bridal collage" },
  // { src: "/images/Bridal-new2.webp", alt: "Bridal look 4" },
  // { src: "/images/photo-collage.png", alt: "Bridal collage" },
  { src: "/images/Bridal-Image3.webp", alt: "Bridal look 3" },
  // { src: "/images/photo-collage.png", alt: "Bridal collage" },
  { src: "/images/Bridal-new1.webp", alt: "Bridal look 1" },
  // { src: "/images/photo-collage.png", alt: "Bridal collage" },
  // { src: "/images/Bridal-Image5.webp", alt: "Bridal look 5" },
  // { src: "/images/photo-collage.png", alt: "Bridal collage" },
  // { src: "/images/Bridal-new3.webp", alt: "Bridal look 6" },
];

export default function BridalCarousel() {
  const [loadedImages, setLoadedImages] = useState({});

  return (
    <div className="w-full max-w-[520px] h-[400px] lg:h-[620px] my-3 md:my-6 rounded-[5px] overflow-hidden shadow-xl border-[4px] border-[#464444]">
      {" "}
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        speed={900}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {!loadedImages[index] && (
                <div className="absolute inset-0 animate-pulse bg-gray-700" />
              )}
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className={`object-cover transition-opacity duration-500 ${
                  loadedImages[index] ? "opacity-100" : "opacity-0"
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
