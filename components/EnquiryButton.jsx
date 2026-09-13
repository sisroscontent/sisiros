"use client";

import SocialButtons from "./SocialButtons";

export default function EnquiryButton({ onClick }) {
  return (
    <div
      className="
        fixed
        bottom-5
        right-4
        z-50
        flex
        items-center
        gap-2
      "
    >
      {/* Instagram + Facebook */}
      <SocialButtons />

      {/* Enquiry */}
      <button
        onClick={onClick}
        aria-label="Enquire"
        className="
          w-12
          h-12
          flex
          flex-col
          items-center
          justify-center
          text-[#F5F1EA]
          hover:scale-105
          transition-all
          duration-300
        "
      >
        <span
          className="
            text-[34px]
            font-serif
            font-bold
            leading-[28px]
          "
        >
          I
        </span>

        <span
          className="
            text-[11px]
            tracking-[1px]
            font-semibold
            leading-none
            mt-1
          "
        >
          ENQUIRE
        </span>
      </button>
    </div>
  );
}