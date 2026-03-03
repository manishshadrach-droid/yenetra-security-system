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
    <section id="gallery" className="py-40 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">

        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-semibold tracking-tightfont-[var(--font-playfair)]">
              Our Projects
            </h2>
            <p className="mt-6 text-gray-600 font-[var(--font-inter)]">
              A glimpse into our completed spaces.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <Reveal key={index}>
              <div className="overflow-hidden">
                <div
                  className="h-80 bg-cover bg-center transition duration-700 hover:scale-110"
                  style={{ backgroundImage: `url('${img}')` }}
                />
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}