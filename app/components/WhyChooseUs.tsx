"use client";

import Reveal from "./Reveal";

export default function WhyChooseUs() {
  const points = [
    {
      number: "01",
      title: "Advanced Surveillance Technology",
      text: "Yenetra deploys high-precision cameras, intelligent monitoring systems, and modern security infrastructure for reliable protection.",
    },
    {
      number: "02",
      title: "Strategic System Design",
      text: "Our specialists design surveillance coverage based on property layout, entry points, and operational risk areas.",
    },
    {
      number: "03",
      title: "Enterprise-Grade Hardware",
      text: "We use high-performance CCTV cameras, NVR systems, and integrated access control technologies built for long-term reliability.",
    },
    {
      number: "04",
      title: "Professional Deployment",
      text: "Certified technicians install and configure every component to ensure stable monitoring and dependable security performance.",
    },
  ];

  return (
    <section className="relative py-48 bg-black text-white overflow-hidden">

      {/* subtle tech background */}
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6">

        <Reveal>
          <div className="text-center mb-32 max-w-3xl mx-auto">

            <p className="uppercase tracking-[3px] text-xs text-cyan-400 font-[var(--font-inter)]">
              Why Yenetra
            </p>

            <h2 className="mt-6 text-5xl md:text-6xl font-[var(--font-orbitron)] font-semibold tracking-tight">
              Intelligent Security
              <br />
              Built For Reliability
            </h2>

          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-20">

          {points.map((item, index) => (
            <Reveal key={index} delay={index * 120}>
              <div className="flex gap-8 group">

                {/* Step Number */}
                <div className="text-6xl font-[var(--font-orbitron)] text-white/20 group-hover:text-cyan-400 transition duration-500">
                  {item.number}
                </div>

                {/* Content */}
                <div>

                  <h3 className="text-2xl font-[var(--font-orbitron)] mb-4 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 font-[var(--font-inter)] leading-relaxed">
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