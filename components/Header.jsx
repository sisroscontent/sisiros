"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Bridal", path: "/bridal" },
  { name: "Courses", path: "/courses" },
  { name: "Gallery", path: "/gallery" },
  { name: "Testimonials", path: "/testimonials" },
  // { name: 'About', path: '/about' },
  // { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#20283B] border-b border-[#30384B]">
        <div className="max-w-7xl mx-auto h-20 px-4 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo/Sisiro_logo.png"
                alt="Sisro's Logo"
                width={280}
                height={120}
                priority
                className="h-[68px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`uppercase text-[16px] font-semibold tracking-wide transition duration-300 ${
                  pathname === item.path
                    ? "text-white"
                    : "text-[#B48A66] hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Book Appointment */}
          <div className="hidden lg:block">
            {/* <Link
              href="/form"
              className="px-6 py-3 border border-[#D4AF37] rounded-md text-[#2B2522] uppercase text-sm font-semibold tracking-wider hover:bg-[#D4AF37] hover:text-black transition duration-300"
            >
              Enquire
            </Link> */}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-[#F5F1EA]"
            aria-label="Open menu"
          >
            <HiOutlineBars3 size={30} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[#111111] border-l border-[#2d2d2d] z-50 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-end p-5 border-b border-[#2d2d2d]">
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <HiOutlineXMark
              size={30}
              className="text-[#F5F1EA] hover:text-[#2B2522]"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex flex-col mt-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className={`px-6 py-4 uppercase transition ${
                pathname === item.path
                  ? "text-[#B48A66]"
                  : "text-[#B48A66] hover:text-[#B48A66]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        
        
      </div>
    </>
  );
}
