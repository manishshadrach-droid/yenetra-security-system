
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 py-24 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

        <div>
          <h3 className="text-4xl font-[var(--font-orbitron)] text-white tracking-tight">
            YENETRA
          </h3>
          <p className="mt-6 font-[var(--font-inter)] leading-relaxed">
            Har Pal Pe Nazar. CCTV cameras and surveillance solutions
            for homes, businesses and commercial properties.
          </p>
          <div className="flex gap-6 mt-8 text-lg">
            <a href="#" aria-label="Instagram" className="hover:text-cyan-400 transition">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-cyan-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-cyan-400 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[3px] text-white">Products</h4>
          <ul className="mt-6 space-y-4">
            <li><Link href="/products" className="hover:text-cyan-400">CCTV Cameras</Link></li>
            <li><Link href="/products" className="hover:text-cyan-400">DVR & NVR Systems</Link></li>
            <li><Link href="/products" className="hover:text-cyan-400">Networking Equipment</Link></li>
            <li><Link href="/products" className="hover:text-cyan-400">Accessories</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[3px] text-white">Company</h4>
          <ul className="mt-6 space-y-4">
            <li><Link href="/about" className="hover:text-cyan-400">About YeNetra</Link></li>
            <li><Link href="/services" className="hover:text-cyan-400">Our Services</Link></li>
            <li><Link href="/products" className="hover:text-cyan-400">Product Catalogue</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[3px] text-white">Contact</h4>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-cyan-400 text-xs uppercase tracking-wider mb-2">Call Us</p>
              <a href="tel:+919492790807" className="block hover:text-cyan-400">
                +91 94927 90807
              </a>
              <a href="tel:+919000572766" className="block mt-2 hover:text-cyan-400">
                +91 90005 72766
              </a>
            </div>

            <div>
              <p className="text-cyan-400 text-xs uppercase tracking-wider mb-2">Address</p>
              <p className="leading-7">
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
              className="inline-block text-cyan-400 hover:text-cyan-300"
            >
              WhatsApp Enquiry →
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-white/10" />

      <div className="text-center mt-8 px-6 text-sm text-gray-500">
        © 2026 YeNetra CCTV Dealers. All rights reserved.
      </div>
    </footer>
  );
}
