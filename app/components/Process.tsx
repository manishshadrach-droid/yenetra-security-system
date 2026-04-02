"use client";

import Reveal from "./Reveal";
import { FaSearch, FaDraftingCompass, FaShieldAlt, FaTools } from "react-icons/fa";

export default function InstallationProcess() {
  const steps = [
    {
      number: "01",
      icon: <FaSearch />,
      title: "Security Assessment",
      text: "We evaluate your property layout, entry points, and risk areas to determine the most effective surveillance strategy.",
    },
    {
      number: "02",
      icon: <FaDraftingCompass />,
      title: "System Design",
      text: "Our experts design a tailored security plan including camera placement, access control points, and monitoring systems.",
    },
    {
      number: "03",
      icon: <FaShieldAlt />,
      title: "Equipment Selection",
      text: "We select high-performance CCTV cameras, NVR systems, alarms, and access control solutions suited to your environment.",
    },
    {
      number: "04",
      icon: <FaTools />,
      title: "Professional Installation",
      text: "Certified technicians install, configure, and test your surveillance system for reliable long-term protection.",
    },
  ];

  return (
    <section className="relative py-48 bg-black text-white overflow-hidden">

      {/* Subtle Tech Grid */}
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="relative max-w-6xl mx-auto px-6">

        <Reveal>
          <div className="text-center mb-32 max-w-3xl mx-auto">

            {/* Section Label */}
            <p className="uppercase tracking-[3px] text-xs text-cyan-400 font-[var(--font-inter)]">
              Deployment Process
            </p>

            <h2 className="mt-6 text-5xl md:text-6xl font-[var(--font-orbitron)] font-semibold tracking-tight">
              Security Deployment Workflow
            </h2>

            <p className="mt-6 text-gray-400 text-lg font-[var(--font-inter)] leading-relaxed">
              A structured process ensuring precise surveillance deployment,
              intelligent monitoring coverage, and long-term operational reliability.
            </p>

          </div>
        </Reveal>

        <div className="relative space-y-32">

          {/* Vertical Timeline */}
          <div className="absolute left-7 top-0 h-full w-[1px] bg-white/10 hidden md:block" />

          {steps.map((step, index) => (
            <Reveal key={index}>
              <div className="relative grid md:grid-cols-[90px_1fr] gap-12 items-start">

                {/* Icon + Step */}
                <div className="flex flex-col items-center relative">

                  <div className="w-14 h-14 flex items-center justify-center rounded-full border border-cyan-400/40 text-cyan-400 text-xl bg-black">
                    {step.icon}
                  </div>

                  <div className="mt-6 text-4xl font-[var(--font-orbitron)] text-white/20">
                    {step.number}
                  </div>

                </div>

                {/* Content */}
                <div>

                  <h3 className="text-2xl md:text-3xl font-[var(--font-orbitron)] mb-6 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 font-[var(--font-inter)] leading-relaxed text-lg max-w-xl">
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