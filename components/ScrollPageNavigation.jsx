"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const pages = [
  "/",
  "/bridal",
  "/courses",
  "/gallery",
  "/testimonials",
];

export default function ScrollPageNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const isNavigating = useRef(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const currentIndex = pages.indexOf(pathname);

    if (currentIndex === -1) return;

    // Page has finished loading
    setIsTransitioning(false);

    const handleWheel = (event) => {
      if (isNavigating.current) return;

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      const atTop = window.scrollY <= 5;

      // -----------------------------
      // SCROLL DOWN
      // -----------------------------
      if (
        event.deltaY > 0 &&
        atBottom &&
        currentIndex < pages.length - 1
      ) {
        event.preventDefault();

        isNavigating.current = true;
        setIsTransitioning(true);

        router.push(pages[currentIndex + 1]);

        // Navigation lock
        setTimeout(() => {
          isNavigating.current = false;
        }, 1200);

        return;
      }

      // -----------------------------
      // SCROLL UP
      // -----------------------------
      if (
        event.deltaY < 0 &&
        atTop &&
        currentIndex > 0
      ) {
        event.preventDefault();

        isNavigating.current = true;
        setIsTransitioning(true);

        router.push(pages[currentIndex - 1]);

        // Navigation lock
        setTimeout(() => {
          isNavigating.current = false;
        }, 1200);
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [pathname, router]);

  return (
    <>
      {/* Page transition overlay */}
      <div
        className={`
          fixed
          inset-0
          z-[9999]
          pointer-events-none
          bg-[#272626]
          transition-opacity
          duration-700
          ease-in-out
          ${
            isTransitioning
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      />
    </>
  );
}