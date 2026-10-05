"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonialData = [
  {
    id: 1,
    category: "Bridal",
    name: "Ananya Reddy",
    role: "Bride • December 2025",
    img: "/images/Gallery/Gallery-1.webp",
    rating: 5,
    review:
      "Sisro's made my wedding day absolutely magical. The bridal makeup was flawless — every photograph looks like a dream. Dr. Preethi understood exactly what I wanted and exceeded my expectations.",
  },
  {
    id: 2,
    category: "Bridal",
    name: "Priyanka Sen",
    role: "Bride & Creative Director",
    img: "/images/Gallery/Gallery-2.webp",
    rating: 5,
    review:
      "The bridal makeup experience at Sisro's is truly elite. From the consultation to the final touch-up, everything was handled with such precision and care.",
  },
  {
    id: 3,
    category: "Academy",
    name: "Ramya Rao",
    role: "Bride",
    img: "/images/Gallery/Gallery-3.webp",
    rating: 5,
    review:
      "Choosing Sisro's was the best decision for my wedding day. My makeup looked flawless from the ceremony until the reception, and I received countless compliments. The team perfectly understood my vision and made me feel confident and beautiful.",
  },
  {
    id: 4,
    category: "Academy",
    name: "Subhashini",
    role: "Student",
    img: "/images/Gallery/Gallery-9.webp",
    rating: 5,
    review:
      "Sisro\'s doesn't just teach you the basics; they prepare you for the working world as well. The practical internship gave me valuable real-world experience.",
  },
  {
    id: 5,
    category: "Academy",
    name: "Rakhee Mishra",
    role: "Student",
    img: "/images/Gallery/Gallery-7.webp",
    rating: 5,
    review:
      "Sisro\'s program was thorough and well-organized. The instructors made learning engaging and rewarding.",
  },
  {
    id: 6,
    category: "Academy",
    name: "Divya Krishnamurthy",
    role: "Academy Graduate",
    img: "/images/Gallery/Galleryy-6.png",
    rating: 5,
    review:
      "Sisro's Academy gave me the skills and confidence to pursue my passion professionally. The mentors truly care about your growth.",
  },
];

export default function Testimonials() {
  const [loadedImages, setLoadedImages] = useState({});

  return (
    <section className="py-16 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="uppercase tracking-[4px] text-white text-sm font-semibold">
          OUR TESTIMONIALS
        </span>
        <h2 className="text-4xl lg:text-4xl font-bold text-white mt-4">
          Stories That Inspire Confidence
        </h2>
      </div>

      {/* Desktop */}
      <div className="hidden md:block max-w-5xl mx-auto mt-16 space-y-6">
        {testimonialData.map((item) => (
          <div
            key={item.id}
            className="grid md:grid-cols-2 border border-[#4A4A4A] rounded-lg overflow-hidden"
          >
            <div className="relative w-[520px] h-[550px]">
              {!loadedImages[item.id] && (
                <div className="absolute inset-0 animate-pulse bg-gray-700" />
              )}
              <Image
                src={item.img}
                alt={item.name}
                fill
                loading="lazy"
                className={`object-cover transition-opacity duration-500 ${
                  loadedImages[item.id] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() =>
                  setLoadedImages((prev) => ({
                    ...prev,
                    [item.id]: true,
                  }))
                }
              />
            </div>
            <ReviewCard item={item} />
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden mt-12 space-y-6">
        {testimonialData.map((item) => (
          <div
            key={item.id}
            className="border border-[#4A4A4A] rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-[350px]">
              {!loadedImages[item.id] && (
                <div className="absolute inset-0 animate-pulse bg-gray-700" />
              )}
              <Image
                src={item.img}
                alt={item.name}
                fill
                loading="lazy"
                className={`object-cover transition-opacity duration-500 ${
                  loadedImages[item.id] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() =>
                  setLoadedImages((prev) => ({ ...prev, [item.id]: true }))
                }
              />
            </div>
            <ReviewCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ReviewCard({ item }) {
  return (
    <div className="border border-[#4A4A4A] bg-[#20283B] md:h-[550px] flex flex-col justify-center p-5 md:p-10">
      <div className="flex gap-1 mb-5">
        {[...Array(item.rating)].map((_, i) => (
          <Star key={i} size={20} className="fill-[#D4AF37] text-[#D4AF37]" />
        ))}
      </div>
      <h2 className="text-3xl font-bold text-white">{item.name}</h2>
      <p className="text-white md:mt-2">{item.role}</p>
      <p className="text-white italic md:mt-8 leading-8">
        &quot;{item.review}&quot;
      </p>
    </div>
  );
}
