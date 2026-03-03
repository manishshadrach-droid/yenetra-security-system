"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-black/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center text-white">

        <a
  href="#home"
  className="font-[var(--font-playfair)] text-3xl md:text-4xl font-semibold tracking-wide relative group"
>
  The Inside
  <span className="block h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full mt-1" />
</a>

        <div className="hidden md:flex space-x-10 text-sm font-[var(--font-inter)] tracking-wider uppercase">
          <a href="#home" className="hover:text-gray-300 transition">
            Home
          </a>
          <a href="#collections" className="hover:text-gray-300 transition">
            Collections
          </a>
          <a href="#about" className="hover:text-gray-300 transition">
            About
          </a>
          <a href="#contact" className="hover:text-gray-300 transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}