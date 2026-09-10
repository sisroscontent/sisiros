"use client";

import { FaHeart } from "react-icons/fa";
import SocialButtons from "./SocialButtons";

export default function EnquiryButton({ onClick }) {
  return (
<div
      className="
        fixed
        bottom-8
        right-10
        z-50
        flex
        flex-col
        items-center
        gap-3
      "
    >

      {/* Desktop Social Buttons */}
       <div className="hidden lg:block fixed bottom-[140px] right-9 z-50">
        <SocialButtons />
      </div>

    <button
      onClick={onClick}
      className="
   fixed
    bottom-8
    right-9
    z-50

    w-24
    h-24
    rounded-3xl
    bg-[#1A1A1A]
    border-2
    border-[#D4AF37]
    flex
    flex-col
    items-center
    justify-center
    text-[#D4AF37]
    shadow-[0_0_18px_rgba(212,175,55,.25)]
    hover:scale-105
    transition-all
    duration-300
      "
    >
    <div className="relative flex items-center justify-center w-10 h-10 mb-2">

  <FaHeart className="heart back" size={35} />

  <FaHeart className="heart middle" size={35} />

  <FaHeart className="heart front" size={35} />

</div>

      <span className="text-[#2B2522] text-xs tracking-[2px] font-semibold">
        ENQUIRE
      </span>
    </button>
    </div>
  );
}
