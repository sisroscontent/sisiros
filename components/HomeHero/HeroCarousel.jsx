// 'use client';

// import { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade } from 'swiper/modules';
// import Image from 'next/image';

// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/pagination';

// const images = [
//   {
//     src: '/images/Hero/Gallery-2-desktop.webp',
//     tabletSrc: '/images/Hero/Gallery-2-tablet.webp',
//     mobileSrc: '/images/Hero/Gallery-2-mobile.webp',
//     alt: 'Gallery slide 1',
//   },
//   {
//     src: '/images/Hero/Hero-Home-mkup-desktop.webp',
//     tabletSrc: '/images/Hero/Hero-Home-mkup-tablet.webp',
//     mobileSrc: '/images/Hero/Hero-Home-mkup-mobile.webp',
//     alt: 'Hero slide 2',
//   },
//   {
//     src: '/images/Hero/Makeup-room-desktop.webp',
//     tabletSrc: '/images/Hero/Makeup-room-tablet.webp',
//     mobileSrc: '/images/Hero/Makeup-room-mobile.webp',
//     alt: 'Makeup room slide 3',
//   },
// ];

// export default function HeroCarousel() {
//   const [loadedImages, setLoadedImages] = useState({});

//   return (
//     <div className="w-[400px] h-[480px] my-3 md:my-6 sm:h-[400px] lg:h-[580px] rounded-[5px] overflow-hidden shadow-xl border-[4px] border-[#464444]">
//       <Swiper
//         modules={[Autoplay, EffectFade, Pagination]}
//         slidesPerView={1}
//         loop={true}
//         effect="fade"
//         autoplay={{ delay: 1000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         className="w-full h-full"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-full">
//               {!loadedImages[index] && (
//                 <div className="absolute inset-0 animate-pulse bg-gray-700" />
//               )}
//               <picture>
//                 <source media="(max-width: 767px)" srcSet={image.mobileSrc} />
//                 <source media="(max-width: 1199px)" srcSet={image.tabletSrc} />
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   className={`object-cover transition-opacity duration-500 ${
//                     loadedImages[index] ? 'opacity-100' : 'opacity-0'
//                   }`}
//                   priority={index === 0}
//                   onLoad={() =>
//                     setLoadedImages((prev) => ({ ...prev, [index]: true }))
//                   }
//                 />
//               </picture>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


import Image from 'next/image';

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[580px] overflow-hidden">
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet="/images/Gallery/Gallery-8.webp"
        />

        <source
          media="(max-width: 1199px)"
          srcSet="/images/Gallery/Gallery-8.webp"
        />

        <Image
          src="/images/Gallery/Gallery-8.webp"
          alt="Sisro Makeup"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </picture>
    </div>
  );
}
