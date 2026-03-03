"use client";

import Reveal from "./Reveal";
import { FaRulerCombined, FaCouch, FaPaintRoller, FaTools } from "react-icons/fa";

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: <FaRulerCombined />,
      title: "Consultation",
      text: "Understanding your space, lighting and lifestyle to define the right furnishing direction.",
    },
    {
      number: "02",
      icon: <FaPaintRoller />,
      title: "Measurement & Selection",
      text: "Precise site measurements and curated material selection for seamless execution.",
    },
    {
      number: "03",
      icon: <FaCouch />,
      title: "Customization",
      text: "Tailored production of blinds, curtains, wallpapers or sofas crafted to perfection.",
    },
    {
      number: "04",
      icon: <FaTools />,
      title: "Professional Installation",
      text: "Flawless finishing by trained installers ensuring long-lasting elegance.",
    },
  ];

  return (
    <section className="relative py-48 bg-gray-50 text-black overflow-hidden">

      {/* Luxury Background Texture Effect */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] bg-[length:30px_30px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        <Reveal>
          <div className="text-center mb-28">
            <h2 className="text-3xl md:text-6xl font-[var(--font-playfair)] font-semibold tracking-tight">
              Our Process
            </h2>
            <p className="mt-6 text-gray-600 font-[var(--font-inter)] max-w-2xl mx-auto">
              A structured approach ensuring precision, elegance and seamless execution.
            </p>
          </div>
        </Reveal>

        <div className="relative space-y-28">

          {/* Vertical Animated Line */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-gray-200 hidden md:block animate-pulse" />

          {steps.map((step, index) => (
            <Reveal key={index}>
              <div className="relative grid md:grid-cols-[80px_1fr] gap-10 items-start">

                {/* Icon + Number */}
                <div className="relative flex flex-col items-center">

                  <div className="text-3xl text-gray-700 mb-4">
                    {step.icon}
                  </div>

                  <div className="text-5xl font-[var(--font-playfair)] text-gray-200">
                    {step.number}
                  </div>

                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-[var(--font-playfair)] mb-6">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 font-[var(--font-inter)] leading-relaxed text-lg">
                    {step.text}
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