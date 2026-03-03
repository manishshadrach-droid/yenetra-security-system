"use client";

import Reveal from "./Reveal";

export default function Transformation() {
  return (
    <section className="py-48 bg-gradient-to-b from-white to-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-6">

        <Reveal>
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-6xl font-[var(--font-playfair)] font-semibold tracking-tight">
              Transformation Story
            </h2>
            <p className="mt-6 text-gray-600 font-[var(--font-inter)] max-w-2xl mx-auto">
              Thoughtful furnishing choices that redefine space and elevate everyday living.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* BEFORE */}
          <Reveal>
            <div className="group">
              <div className="relative overflow-hidden shadow-xl">
                <div
                  className="h-[550px] bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: "url('/images/before.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <span className="text-white text-lg font-[var(--font-playfair)] tracking-wide">
                    Before
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* AFTER */}
          <Reveal>
            <div className="group">
              <div className="relative overflow-hidden shadow-2xl">
                <div
                  className="h-[550px] bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: "url('/images/after.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                  <span className="text-white text-lg font-[var(--font-playfair)] tracking-wide">
                    After
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}