"use client";

import { useCart } from "@/context/CartContext"; // ✅ fixed import

export default function CTA() {
  const { openCart } = useCart();

  return (
    <section className="relative py-40 bg-[#020617] text-center overflow-hidden text-white">

      {/* Grid */}
      <div className="absolute inset-0 tech-grid opacity-[0.05]" />

      <div className="relative max-w-4xl mx-auto px-6">

        {/* Label */}
        <p className="uppercase tracking-[3px] text-xs text-cyan-400">
          Yenetra Security
        </p>

        {/* Heading */}
        <h2 className="mt-6 text-5xl md:text-6xl font-[var(--font-orbitron)] font-semibold leading-tight">
          Protect What Matters Most
        </h2>

        {/* Description */}
        <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto">
          Intelligent surveillance systems designed for homes, enterprises,
          and critical environments.
        </p>

        {/* CTA */}
        <div className="mt-14 flex justify-center gap-6 flex-wrap">

          <button
            onClick={openCart}
            className="btn-primary glow-cyan-soft hover-glow"
          >
            Build Your Setup
          </button>

          <a
            href="#contact"
            className="btn-outline hover-glow"
          >
            Request Consultation
          </a>

        </div>

      </div>
    </section>
  );
}