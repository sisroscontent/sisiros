import Link from 'next/link';

export const metadata = {
  title: 'Sitemap | Sisro\'s Makeup Studio',
  description: 'All pages on Sisro\'s Makeup Studio — bridal makeup, academy, gallery, testimonials, and more.',
  alternates: {
    canonical: 'https://sisros.com/sitemap',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const pages = [
  { label: 'Home',                href: '/' },
  { label: 'Bridal Makeup',       href: '/bridal' },
  { label: 'Academy',             href: '/courses' },
  { label: 'Gallery',             href: '/gallery' },
  { label: 'Testimonials',        href: '/testimonials' },
  { label: 'About Us',            href: '/about' },
  { label: 'Contact Us',          href: '/contact' },
  { label: 'Book an Appointment', href: '/form' },
];

export default function SitemapPage() {
  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Sitemap</h1>
        <p className="text-white text-sm mb-10">sisros.com</p>

        <ul className="space-y-3">
          {pages.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center justify-between group py-3 px-4 rounded border border-[#222222] hover:border-[#D4AF37] transition-colors duration-200"
              >
                <span className="text-white group-hover:text-[#D4AF37] transition-colors duration-200">
                  {label}
                </span>
                <span className="text-white text-sm group-hover:text-[#D4AF37] transition-colors duration-200">
                  sisros.com{href}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 pt-6 border-t border-[#222222] flex gap-6">
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#D4AF37] text-sm transition-colors duration-200"
          >
            sitemap.xml
          </a>
          <a
            href="/robots.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#D4AF37] text-sm transition-colors duration-200"
          >
            robots.txt
          </a>
        </div>
      </div>
    </main>
  );
}
