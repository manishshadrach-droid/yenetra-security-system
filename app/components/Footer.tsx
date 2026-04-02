"use client";

import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 py-32 overflow-hidden">

      {/* subtle tech background */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16">

        {/* Brand */}
        <div>
          <h3 className="text-4xl font-[var(--font-orbitron)] text-white tracking-tight">
            YENETRA
          </h3>

          <p className="mt-6 font-[var(--font-inter)] text-gray-400 leading-relaxed">
            Intelligent surveillance infrastructure designed for modern
            homes, enterprises, and critical environments.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 text-lg">

            <a
              href="#"
              className="text-gray-500 hover:text-cyan-400 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-cyan-400 transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-cyan-400 transition duration-300"
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-sm uppercase tracking-[3px] text-white font-[var(--font-inter)]">
            Solutions
          </h4>

          <ul className="mt-6 space-y-3 font-[var(--font-inter)]">

            <li className="hover:text-white transition cursor-pointer">
              AI Surveillance Cameras
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Enterprise Monitoring
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Access Control Systems
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Alarm & Detection Systems
            </li>

          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm uppercase tracking-[3px] text-white font-[var(--font-inter)]">
            Company
          </h4>

          <ul className="mt-6 space-y-3 font-[var(--font-inter)]">

            <li className="hover:text-white transition cursor-pointer">
              About Yenetra
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Installations
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Technology
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm uppercase tracking-[3px] text-white font-[var(--font-inter)]">
            Contact
          </h4>

          <div className="mt-6 space-y-4 font-[var(--font-inter)]">

            <p className="hover:text-white transition">
              +91 XXXXX XXXXX
            </p>

            <p className="hover:text-white transition">
              security@yenetra.com
            </p>

            <p className="text-gray-500">
              Hyderabad, Telangana
            </p>

          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="mt-24 border-t border-white/10" />

      {/* Copyright */}
      <div className="text-center mt-10 text-sm font-[var(--font-inter)] text-gray-500">
        © 2026 Yenetra Security Systems. All rights reserved.
      </div>

    </footer>
  );
}