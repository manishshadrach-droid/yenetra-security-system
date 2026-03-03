"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="py-40 bg-gray-50 text-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left Image */}
          <Reveal>
            <div className="relative overflow-hidden">
              <div
                className="h-[500px] bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/about.jpg')",
                }}
              />
            </div>
          </Reveal>

          {/* Right Content */}
          <Reveal>
            <div>
              <p className="uppercase tracking-[4px] text-sm text-gray-500 font-[var(--font-inter)]">
                About Us
              </p>

              <h2 className="mt-6 text-4xl md:text-5xl font-[var(--font-playfair)] leading-tight">
                Crafting Interiors That Reflect Timeless Luxury
              </h2>

              <p className="mt-8 text-gray-600 text-lg font-[var(--font-inter)] leading-relaxed">
                At The Inside Home Furnishing, we believe interiors are not
                just spaces — they are experiences. From bespoke curtains and
                designer wallpapers to elegant sofas and precision-crafted
                blinds, every detail is thoughtfully curated.
              </p>

              <p className="mt-6 text-gray-600 text-lg font-[var(--font-inter)] leading-relaxed">
                Our commitment to craftsmanship, premium materials, and expert
                installation ensures that every project reflects sophistication,
                comfort, and enduring beauty.
              </p>

              {/* Signature Style CTA */}
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition duration-300 font-[var(--font-inter)] tracking-wide"
                >
                  Schedule Consultation
                </a>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}