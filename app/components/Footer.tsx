
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 py-24 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-4xl font-[var(--font-orbitron)] text-white tracking-tight">
            YENETRA
          </h3>

          <p className="mt-4 text-cyan-400 text-sm font-semibold tracking-[3px] uppercase">
            Har Pal Pe Nazar.
          </p>

          <p className="mt-4 font-[var(--font-inter)] text-gray-400 leading-relaxed">
            CCTV cameras and surveillance solutions for homes,
            businesses and commercial properties.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 text-lg">
            <a href="#" aria-label="Instagram" className="hover:text-cyan-400 transition duration-300">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-cyan-400 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-cyan-400 transition duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* PRODUCTS */}
        <div>
          <h4 className="text-sm uppercase tracking-[3px] text-white font-[var(--font-inter)]">
            Products
          </h4>

          <ul className="mt-6 space-y-4 font-[var(--font-inter)]">
            <li><Link href="/products" className="hover:text-cyan-400 transition">CCTV Cameras</Link></li>
            <li><Link href="/products" className="hover:text-cyan-400 transition">DVR & NVR Systems</Link></li>
            <li><Link href="/products" className="hover:text-cyan-400 transition">Networking Equipment</Link></li>
            <li><Link href="/products" className="hover:text-cyan-400 transition">Accessories</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-sm uppercase tracking-[3px] text-white font-[var(--font-inter)]">
            Company
          </h4>

          <ul className="mt-6 space-y-4 font-[var(--font-inter)]">
            <li><Link href="/about" className="hover:text-cyan-400 transition">About YeNetra</Link></li>
            <li><Link href="/services" className="hover:text-cyan-400 transition">Our Services</Link></li>
            <li><Link href="/products" className="hover:text-cyan-400 transition">Product Catalogue</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-sm uppercase tracking-[3px] text-white font-[var(--font-inter)]">
            Contact
          </h4>

          <div className="mt-6 space-y-6 font-[var(--font-inter)]">

            <div>
              <p className="text-cyan-400 text-xs uppercase tracking-wider mb-3">
                Call Us
              </p>
              <a href="tel:+919492790807" className="block hover:text-cyan-400 transition">
                +91 94927 90807
              </a>
              <a href="tel:+919000572766" className="block mt-2 hover:text-cyan-400 transition">
                +91 90005 72766
              </a>
            </div>

            <div>
              <p className="text-cyan-400 text-xs uppercase tracking-wider mb-3">
                Visit Our Store
              </p>
              <p className="leading-7 text-gray-400">
                ARG Complex,<br />
                Badangpet Main Road,<br />
                Badangpet, Balapur,<br />
                Hyderabad, Telangana.
              </p>
            </div>

            <a
              href="https://wa.me/919492790807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-cyan-400 hover:text-cyan-300 transition font-semibold"
            >
              WhatsApp Enquiry →
            </a>
          </div>
        </div>

      </div>

      <div className="mt-20 border-t border-white/10" />

      <div className="text-center mt-8 px-6 text-sm font-[var(--font-inter)] text-gray-500">
        © 2026 YeNetra CCTV Dealers. All rights reserved.
      </div>
    </footer>
  );
}
