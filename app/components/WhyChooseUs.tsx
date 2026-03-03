"use client";

import Reveal from "./Reveal";

export default function WhyChooseUs() {
  const points = [
    {
      number: "01",
      title: "Premium Materials",
      text: "Hand-selected fabrics and finishes curated for refined interiors.",
    },
    {
      number: "02",
      title: "Precision Installation",
      text: "Expert measurement and seamless execution by trained professionals.",
    },
    {
      number: "03",
      title: "Tailored Designs",
      text: "Custom solutions crafted to complement your lighting and space.",
    },
    {
      number: "04",
      title: "End-to-End Experience",
      text: "From consultation to installation, a guided and effortless journey.",
    },
  ];

  return (
    <section className="py-48 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">

        <Reveal>
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-6xl font-[var(--font-playfair)] font-semibold tracking-tight">
              Why Choose The Inside
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-20">

          {points.map((item, index) => (
            <Reveal key={index}>
              <div className="flex gap-8 group">

                <div className="text-6xl font-[var(--font-playfair)] text-gray-200 group-hover:text-black transition duration-500">
                  {item.number}
                </div>

                <div>
                  <h3 className="text-2xl font-[var(--font-playfair)] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 font-[var(--font-inter)] leading-relaxed">
                    {item.text}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}