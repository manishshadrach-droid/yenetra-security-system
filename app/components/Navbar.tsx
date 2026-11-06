
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import YenetraLogo from "./YenetraLogo";

const links = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "backdrop-blur-2xl bg-black/90 border-b border-white/10 shadow-lg"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between text-white">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <YenetraLogo />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[2px]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-cyan-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center px-5 py-2 text-xs rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 shadow-lg shadow-cyan-500/20 transition"
          >
            Enquire Now
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="md:hidden text-white text-2xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-5 text-sm uppercase tracking-wider">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-cyan-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
