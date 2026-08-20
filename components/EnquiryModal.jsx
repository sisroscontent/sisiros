"use client";

import FormContent from "./FormContent";
export default function EnquiryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div
        className="
    relative
    w-[95%]
    sm:w-[90%]
    md:w-[85%]
    lg:max-w-5xl
    max-h-[90vh]
    overflow-y-auto
    bg-[#2B2929]
    rounded-2xl
    p-4
    sm:p-6
  "
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-2xl sm:text-3xl text-white z-10"
        >
          ✕
        </button>

        <FormContent />
      </div>
    </div>
  );
}
