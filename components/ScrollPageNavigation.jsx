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
  const touchStartY = useRef(0);

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const currentIndex = pages.indexOf(pathname);

    if (currentIndex === -1) return;

    setIsTransitioning(false);

    // --------------------------------
    // NAVIGATE TO NEXT/PREVIOUS PAGE
    // --------------------------------
    const navigateToPage = (index) => {
      if (isNavigating.current) return;

      if (index < 0 || index >= pages.length) return;

      isNavigating.current = true;
      setIsTransitioning(true);

      router.push(pages[index]);

      setTimeout(() => {
        isNavigating.current = false;
      }, 1200);
    };

    // --------------------------------
    // DESKTOP / TRACKPAD
    // --------------------------------
    const handleWheel = (event) => {
      if (isNavigating.current) return;

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      const atTop = window.scrollY <= 5;

      // Scroll DOWN
      if (
        event.deltaY > 0 &&
        atBottom &&
        currentIndex < pages.length - 1
      ) {
        event.preventDefault();

        navigateToPage(currentIndex + 1);
        return;
      }

      // Scroll UP
      if (
        event.deltaY < 0 &&
        atTop &&
        currentIndex > 0
      ) {
        event.preventDefault();

        navigateToPage(currentIndex - 1);
      }
    };

    // --------------------------------
    // MOBILE TOUCH START
    // --------------------------------
    const handleTouchStart = (event) => {
      touchStartY.current = event.touches[0].clientY;
    };

    // --------------------------------
    // MOBILE TOUCH END
    // --------------------------------
    const handleTouchEnd = (event) => {
      if (isNavigating.current) return;

      const touchEndY = event.changedTouches[0].clientY;

      const difference = touchStartY.current - touchEndY;

      // Ignore very small movements
      if (Math.abs(difference) < 60) return;

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      const atTop = window.scrollY <= 10;

      // --------------------------------
      // SWIPE UP → NEXT PAGE
      // --------------------------------
      if (
        difference > 0 &&
        atBottom &&
        currentIndex < pages.length - 1
      ) {
        navigateToPage(currentIndex + 1);
        return;
      }

      // --------------------------------
      // SWIPE DOWN → PREVIOUS PAGE
      // --------------------------------
      if (
        difference < 0 &&
        atTop &&
        currentIndex > 0
      ) {
        navigateToPage(currentIndex - 1);
      }
    };

    // Desktop
    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    // Mobile
    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    window.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);

      window.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      window.removeEventListener(
        "touchend",
        handleTouchEnd
      );
    };
  }, [pathname, router]);

  return (
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
  );
}