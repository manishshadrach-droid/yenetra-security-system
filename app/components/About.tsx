"use client";

import Reveal from "./Reveal";

export default function AboutYentra() {
  return (
    <section
      id="about"
      className="relative py-48 bg-black text-white overflow-hidden"
    >

      {/* subtle tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-24 items-center">

          {/* Left Image */}
          <Reveal>
            <div className="relative overflow-hidden rounded-xl border border-white/10">

              <div
                className="h-[520px] bg-cover bg-center image-hover"
                style={{
                  backgroundImage: "url('/images/about.jpg')",
                }}
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            </div>
          </Reveal>

          {/* Right Content */}
          <Reveal>
            <div className="max-w-xl">

              {/* section label */}
              <p className="uppercase tracking-[3px] text-xs text-cyan-400 font-[var(--font-inter)]">
                About Yenetra
              </p>

              {/* headline */}
              <h2 className="mt-6 text-5xl md:text-6xl font-[var(--font-orbitron)] leading-tight tracking-tight">
                Engineering Intelligent
                <br />
                Security Infrastructure
              </h2>

              {/* paragraph */}
              <p className="mt-8 text-gray-300 text-lg font-[var(--font-inter)] leading-relaxed">
                Yenetra delivers enterprise-grade surveillance systems designed
                for modern infrastructure. From residential properties to
                large-scale commercial facilities, our solutions combine
                precision-engineered hardware with intelligent monitoring
                platforms to create secure, resilient environments.
              </p>

              <p className="mt-6 text-gray-400 text-lg font-[var(--font-inter)] leading-relaxed">
                Our approach integrates advanced CCTV technology, AI-powered
                monitoring, and scalable access control systems — ensuring
                every deployment is reliable, future-ready, and built to protect
                what matters most.
              </p>

              {/* CTA */}
              <div className="mt-12 flex gap-6 flex-wrap">

                <a
                  href="#contact"
                  className="btn-primary glow-cyan-soft"
                >
                  Request Security Consultation
                </a>

                <a
                  href="#installations"
                  className="btn-outline"
                >
                  View Installations
                </a>

              </div>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}