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
      <header className="sticky top-0 z-50 bg-[#111111] border-b border-[#2d2d2d]">
        <div className="max-w-7xl mx-auto h-20 px-4 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo/Sisiro_logo.png"
                alt="Sisro's Logo"
                width={280}
                height={100}
                priority
                className="h-[64px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`uppercase text-[15px] font-semibold tracking-wide transition duration-300 ${
                  pathname === item.path
                    ? "text-[#D4AF37]"
                    : "text-white hover:text-[#D4AF37]"
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
              className="px-6 py-3 border border-[#D4AF37] rounded-md text-[#D4AF37] uppercase text-sm font-semibold tracking-wider hover:bg-[#D4AF37] hover:text-black transition duration-300"
            >
              Enquire
            </Link> */}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white"
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
              className="text-white hover:text-[#D4AF37]"
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
                  ? "text-[#D4AF37]"
                  : "text-white hover:text-[#D4AF37]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Book Appointment */}
        <div className="p-6">
          <Link
            href="/form"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center border border-[#D4AF37] rounded-md py-3 text-[#D4AF37] uppercase font-semibold hover:bg-[#D4AF37] hover:text-black transition"
          >
            Book Appointment
          </Link>
        </div>
        <div className="px-10 mt-2">

          <div className="flex items-center justify-between">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sisiros_hyd?igsh=dmVvbmF1bTJsMnVm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                w-20
                h-14
                rounded-2xl
                bg-[#1A1A1A]
                border-2
                border-[#D4AF37]
                flex
                items-center
                justify-center
                text-[#D4AF37]
                shadow-[0_0_18px_rgba(212,175,55,.20)]
                hover:scale-105
                hover:bg-[#D4AF37]
                hover:text-black
                transition-all
                duration-300
              "
            >
              <FaInstagram size={28} />
            </a>


            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1968hs3crX/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="
                w-20
                h-14
                rounded-2xl
                bg-[#1A1A1A]
                border-2
                border-[#D4AF37]
                flex
                items-center
                justify-center
                text-[#D4AF37]
                shadow-[0_0_18px_rgba(212,175,55,.20)]
                hover:scale-105
                hover:bg-[#D4AF37]
                hover:text-black
                transition-all
                duration-300
              "
            >
              <FaFacebookF size={26} />
            </a>

          </div>

        </div>
      </div>
    </>
  );
}

