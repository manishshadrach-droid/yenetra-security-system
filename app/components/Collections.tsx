"use client";

import Reveal from "./Reveal";

export default function Collections() {
  const items = [
    { name: "Blinds", image: "/images/blinds.jpg" },
    { name: "Curtains", image: "/images/curtains.jpg" },
    { name: "Wallpapers", image: "/images/wallpapers.jpg" },
    { name: "Sofas", image: "/images/sofa.jpg" },
  ];

  return (
    <section
      id="collections"
      className="py-40 bg-white text-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-semibold tracking-tight font-[var(--font-playfair)] tracking-tight">
              Our Collections
            </h2>
            <p className="mt-6 text-gray-600 font-[var(--font-inter)]">
              Crafted elegance for modern interiors.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {items.map((item) => (
            <Reveal key={item.name}>
              <div className="group relative overflow-hidden cursor-pointer">

                {/* Image */}
                <div className="relative h-80 overflow-hidden">

  <div
    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
    style={{ backgroundImage: `url('${item.image}')` }}
  />

  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
    <span className="text-white text-lg font-[var(--font-inter)] tracking-wide">
      Explore
    </span>
  </div>

</div>

                {/* Title */}
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-[var(--font-playfair)]">
                    {item.name}
                  </h3>
                </div>

              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}