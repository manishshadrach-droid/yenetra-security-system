"use client";

import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-400 py-28">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-3 gap-16">

        {/* Brand Section */}
        <div>
          <h3 className="text-3xl md:text-6xl font-semibold tracking-tight(--font-playfair)] font-semibold text-white tracking-wide">
  The Inside
</h3>

          <p className="mt-6 font-[var(--font-inter)] leading-relaxed text-gray-400">
            Blinds | Curtains | Wallpapers | Sofas
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 text-lg">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-white transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-white transition duration-300"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-[var(--font-playfair)] text-white tracking-wide">
            Contact
          </h4>

          <div className="mt-6 space-y-3 font-[var(--font-inter)]">
            <p className="hover:text-white transition duration-300">
              +91 XXXXX XXXXX
            </p>

            <p className="hover:text-white transition duration-300">
              info@theinside.com
            </p>
          </div>
        </div>

        {/* Location Section */}
        <div>
          <h4 className="text-lg font-[var(--font-playfair)] text-white tracking-wide">
            Visit Us
          </h4>

          <p className="mt-6 font-[var(--font-inter)] leading-relaxed">
            Hyderabad, Telangana
          </p>
        </div>

      </div>

      {/* Divider */}
      <div className="mt-20 border-t border-gray-800" />

      {/* Bottom Copyright */}
      <div className="text-center mt-10 text-sm font-[var(--font-inter)] text-gray-500">
        © 2026 The Inside Home Furnishing. All rights reserved.
      </div>
    </footer>
  );
}