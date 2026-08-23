'use client';

import { useState } from 'react';
import Image from 'next/image';

const coursesData = [
  {
    id: 1001,
    category: 'personal',
    image: '/images/Course/Coursee-1.webp',
    title: 'Self Grooming',
    location: 'Madhapur / Hyderabad',
    url: 'https://sisiro.co/makeup-course-in-madhapur/',
    duration: '1–2 Weeks',
    level: 'For Beginners & Personal Use',
  },
  {
    id: 3222,
    category: 'hair',
    image: '/images/Course/Coursee-2.webp',
    title: 'Corporate Grooming',
    location: 'Madhapur',
    url: 'https://sisiro.co/basic-hair-course-in-madhapur/',
    duration: '4 Weeks',
    level: 'Beginner',
  },
  {
    id: 3224,
    category: 'hair',
    image: '/images/Course/Course-3.webp',
    title: 'Makeup Training',
    location: 'Hyderabad',
    url: 'https://sisiro.co/advanced-hair-course-in-hyderabad/',
    duration: '8 Weeks',
    level: 'Advanced',
  },
];

export default function Academy() {
  const [activeTab, setActiveTab] = useState('all');
  const [loadedImages, setLoadedImages] = useState({});

  const filteredCourses =
    activeTab === 'all'
      ? coursesData
      : coursesData.filter((course) => course.category === activeTab);

  return (
    <div className="min-h-screen text-[#111111] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="uppercase tracking-[4px] text-[#D4AF37] text-sm font-semibold mb-3">
            Sisro&apos;s ACADEMY
          </p>
          <h1 className="text-4xl sm:text-4xl font-bold text-[#F8F8F8] leading-tight">
            Courses offered
          </h1>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-[#333333] border-2 border-[#9f9c9c] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-[#D4AF37] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-[520px]">
                {!loadedImages[course.id] && (
                  <div className="absolute inset-0 animate-pulse bg-gray-700" />
                )}
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  loading="lazy"
                  className={`object-cover transition-opacity duration-500 ${
                    loadedImages[course.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() =>
                    setLoadedImages((prev) => ({ ...prev, [course.id]: true }))
                  }
                />
              </div>

              {/* Content */}
              <div className="p-1 text-center bg-[#e2e1da]">
                <h3 className="text-2xl font-bold text-black leading-tight h-[80px] flex items-center justify-center text-center group-hover:text-[#D4AF37] transition">
                  {course.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        {/* <div className="mt-20 bg-[#111111] rounded-3xl px-8 py-10 text-center shadow-xl">
          <span className="uppercase tracking-[4px] text-[#D4AF37] text-sm font-semibold">
            Sisro&apos;s ACADEMY
          </span>
          <p className="text-gray-300 max-w-3xl mx-auto mt-6 leading-8">
            If you&apos;re looking to master these skills yourself, we help master
            beauty skills through professional training programmes that are
            exclusively tailored for you to educate and elevate the overall
            experience.
          </p>
        </div> */}
      </div>
    </div>
  );
}

