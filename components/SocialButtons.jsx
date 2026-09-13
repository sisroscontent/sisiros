import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function SocialButtons() {
  return (
    <div className="flex items-center gap-2">
      
      {/* Instagram */}
      <a
        href="https://www.instagram.com/sisiros_hyd?igsh=dmVvbmF1bTJsMnVm"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="
          w-12
          h-12
          flex
          items-center
          justify-center
          text-[#F5F1EA]
          hover:scale-105
          transition-all
          duration-300
        "
      >
        <FaInstagram size={40} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/1968hs3crX/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="
          w-12
          h-12
          rounded-lg
          bg-[#D7EAEA]
          text-[#B48A66]
          flex
          items-center
          justify-center
          hover:scale-105
          transition-all
          duration-300
        "
      >
        <FaFacebookF size={31} />
      </a>

    </div>
  );
}