"use client";

import Reveal from "./Reveal";

export default function SecurityUpgrade() {
  return (
    <section className="relative py-48 bg-black text-white overflow-hidden">

      {/* Tech Grid */}
      <div className="absolute inset-0 tech-grid opacity-10" />

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Reveal>
          <div className="text-center mb-32 max-w-3xl mx-auto">

            <p className="uppercase tracking-[3px] text-xs text-cyan-400">
              Security Transformation
            </p>

            <h2 className="mt-6 text-5xl md:text-6xl font-[var(--font-orbitron)] font-semibold tracking-tight">
              From Vulnerability
              <br />
              To Intelligent Protection
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              Yenetra transforms exposed environments into monitored,
              protected, and controlled systems through intelligent security infrastructure.
            </p>

          </div>
        </Reveal>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* BEFORE */}
          <Reveal>
            <div className="group relative">

              <div className="relative overflow-hidden rounded-xl border border-white/10">

                {/* Image */}
                <div
                  className="h-[560px] bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('/images/unsecured.jpg')",
                  }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70" />

                {/* Red Glow */}
                <div className="absolute inset-0 bg-red-900/20 opacity-60" />

                {/* Text */}
                <div className="absolute bottom-8 left-8">

                  <span className="text-red-400 text-lg font-[var(--font-orbitron)] tracking-wide">
                    Unsecured Environment
                  </span>

                </div>

              </div>

            </div>
          </Reveal>

          {/* AFTER */}
          <Reveal>
            <div className="group relative">

              <div className="relative overflow-hidden rounded-xl border border-cyan-400/20">

                {/* Image */}
                <div
                  className="h-[560px] bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('/images/secured.jpg')",
                  }}
                />

                {/* Cyan Overlay */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-cyan-500/10" />

                {/* Scan Line */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="w-full h-[2px] bg-cyan-400 opacity-40 animate-scan" />
                </div>

                {/* Glow Border Effect */}
                <div className="absolute inset-0 rounded-xl border border-cyan-400/20 group-hover:border-cyan-400 transition duration-500" />

                {/* Text */}
                <div className="absolute bottom-8 left-8">

                  <span className="text-cyan-400 text-lg font-[var(--font-orbitron)] tracking-wide">
                    Yenetra Smart Surveillance
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