"use client";

import Reveal from "./Reveal";

export default function Gallery() {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ];

  return (
    <section
      id="gallery"
      className="relative py-48 bg-black text-white overflow-hidden"
    >

      {/* subtle tech background */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Reveal>
          <div className="text-center mb-28 max-w-3xl mx-auto">

            <p className="uppercase tracking-[3px] text-xs text-cyan-400 font-[var(--font-inter)]">
              Installations
            </p>

            <h2 className="mt-6 text-5xl md:text-6xl font-[var(--font-orbitron)] font-semibold tracking-tight">
              Security Deployments
            </h2>

            <p className="mt-6 text-gray-400 text-lg font-[var(--font-inter)] leading-relaxed">
              A selection of Yenetra surveillance systems deployed across
              residential, commercial, and enterprise environments.
            </p>

          </div>
        </Reveal>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {images.map((img, index) => (
            <Reveal key={index}>
              <div className="group relative overflow-hidden rounded-xl border border-white/10 cursor-pointer">

                {/* Image */}
                <div
                  className="h-80 bg-cover bg-center image-hover"
                  style={{ backgroundImage: `url('${img}')` }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                  <span className="text-cyan-400 text-sm uppercase tracking-[2px] font-[var(--font-inter)]">
                    View Installation
                  </span>

                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}