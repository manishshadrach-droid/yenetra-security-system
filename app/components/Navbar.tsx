"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import YenetraLogo from "./YenetraLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { cart, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-black/70 border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between text-white">

        {/* LOGO */}
        <a href="#home">
          <YenetraLogo />
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[2px]">

          <NavItem href="#products">Systems</NavItem>
          <NavItem href="#installations">Installations</NavItem>
          <NavItem href="#about">Company</NavItem>
          <NavItem href="#contact">Contact</NavItem>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Cart */}
          <button
            onClick={toggleCart}
            className="relative text-cyan-400 hover:text-cyan-300 transition"
          >
            Setup

            {cart.length > 0 && (
              <motion.span
                key={cart.length}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-3 bg-cyan-400 text-black text-xs px-2 py-[2px] rounded-full"
              >
                {cart.length}
              </motion.span>
            )}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 text-xs rounded-full 
            bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:from-cyan-400 hover:to-blue-400
            shadow-lg shadow-cyan-500/20
            transition-all duration-300 hover:scale-105"
          >
            Consultation
          </a>

        </div>

      </div>
    </nav>
  );
}

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="relative text-white/70 hover:text-white transition group"
    >
      {children}
      <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}