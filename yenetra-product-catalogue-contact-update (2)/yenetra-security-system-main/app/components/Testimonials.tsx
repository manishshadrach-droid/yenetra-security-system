"use client";

import Reveal from "./Reveal";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ravi Kumar, Hyderabad",
      text: "Yenetra installed a complete surveillance system for our office. The coverage, clarity, and monitoring capabilities exceeded expectations.",
    },
    {
      name: "Sneha Patel, Jubilee Hills",
      text: "Their team designed the perfect security infrastructure for our home. The installation was precise and highly professional.",
    },
    {
      name: "Arjun Mehta, Gachibowli",
      text: "Reliable surveillance systems with excellent post-installation support. Yenetra delivers true peace of mind.",
    },
  ];

  return (
    <section className="relative py-48 bg-black text-white overflow-hidden">

      {/* Subtle Tech Grid */}
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <Reveal>
          <div className="max-w-3xl mx-auto">

            {/* Section Label */}
            <p className="uppercase tracking-[3px] text-xs text-cyan-400 font-[var(--font-inter)]">
              Client Trust
            </p>

            <h2 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight font-[var(--font-orbitron)]">
              Security Partners & Experiences
            </h2>

            <p className="mt-6 text-gray-400 text-lg font-[var(--font-inter)]">
              Organizations and homeowners rely on Yenetra surveillance
              systems to protect critical environments and ensure operational security.
            </p>

          </div>
        </Reveal>

        <div className="mt-24 grid md:grid-cols-3 gap-12">

          {testimonials.map((item, index) => (
            <Reveal key={index} delay={index * 120}>
              <div className="group bg-[#0b0f1a] p-10 border border-white/10 rounded-xl hover:border-cyan-400/40 transition duration-500">

                <p className="font-[var(--font-inter)] text-gray-300 leading-relaxed">
                  "{item.text}"
                </p>

                <h4 className="mt-8 font-[var(--font-orbitron)] text-lg text-cyan-400 tracking-wide">
                  {item.name}
                </h4>

              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}