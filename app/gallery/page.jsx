"use client";

import { useState } from "react";
import Image from "next/image";

const galleryData = [
  { id: 1, category: "Bridal", image: "/images/Gallery/Gallery-1.webp" },
  { id: 2, category: "Bridal", image: "/images/Gallery/Gallery-2.webp" },
  { id: 3, category: "Reception", image: "/images/Gallery/Gallery-3.webp" },
  { id: 4, category: "Reception", image: "/images/Gallery/Gallery-4.webp" },
  { id: 5, category: "Engagement", image: "/images/Gallery/Gallery-5.webp" },
  { id: 6, category: "Celebrity", image: "/images/Gallery/Gallery-6.webp" },
  { id: 7, category: "HD Makeup", image: "/images/Gallery/Gallery-7.webp" },
  { id: 8, category: "Bridal", image: "/images/Gallery/Gallery-8.webp" },
  // { id: 9,  category: 'Celebrity', image: '/images/Gallery/Gallery-9.png' },
  { id: 10, category: "Bridal", image: "/images/Bridal-Image1.webp" },
  { id: 11, category: "Bridal", image: "/images/Bridal-Image2.webp" },
  { id: 12, category: "Bridal", image: "/images/Bridal-Image3.webp" },
];

const categories = [
  "All",
  "Bridal",
  "Reception",
  "Engagement",
  "HD Makeup",
  "Celebrity",
];

const IMAGES_PER_PAGE = 9;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedImages, setLoadedImages] = useState({});

  const filtered =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const currentImages = filtered.slice(
    startIndex,
    startIndex + IMAGES_PER_PAGE,
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="uppercase tracking-[4px] text-[#2B2522] text-sm font-semibold mb-3">
            OUR GALLERY
          </p>
          <h1 className="text-4xl lg:text-4xl font-bold text-[#2B2522] leading-tight">
            Snapshot Of Our Work
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentImages.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="max-w-sm mx-auto bg-[#2E2E2E] rounded-lg overflow-hidden shadow-lg transition duration-300 hover:scale-105"
            >
              <div className="relative w-full h-[550px] overflow-hidden">
                {!loadedImages[item.image] && (
                  <div className="absolute inset-0 animate-pulse bg-gray-700" />
                )}

                <Image
                  src={item.image}
                  alt={item.category}
                  width={400}
                  height={500}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    loadedImages[item.image] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() =>
                    setLoadedImages((prev) => ({
                      ...prev,
                      [item.image]: true,
                    }))
                  }
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded border border-[#D4AF37] text-[#2B2522] disabled:opacity-50"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded ${
                currentPage === index + 1
                  ? "bg-[#D4AF37] text-black"
                  : "bg-[#2E2E2E] text-[#E8E1D8]"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded border border-[#D4AF37] text-[#2B2522] disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
