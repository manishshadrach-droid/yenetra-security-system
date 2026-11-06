export default function Parallax() {
  return (
    <section
      id="solutions"
      className="relative h-[80vh] overflow-hidden flex items-center justify-center text-white"
    >

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed scale-105"
        style={{ backgroundImage: "url('/images/security-parallax.jpg')" }}
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      {/* Subtle Tech Grid */}
      <div className="absolute inset-0 tech-grid opacity-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Section Label */}
        <p className="uppercase tracking-[3px] text-xs text-cyan-400 font-[var(--font-inter)]">
          Yenetra Infrastructure
        </p>

        {/* Heading */}
        <h2 className="mt-6 text-5xl md:text-6xl font-[var(--font-orbitron)] tracking-tight leading-tight">
          Intelligent Security
          <br />
          <span className="text-cyan-400">
            For Critical Environments
          </span>
        </h2>

        {/* Description */}
        <p className="mt-8 text-lg font-[var(--font-inter)] text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Yenetra designs surveillance infrastructure that protects
          modern homes, enterprise facilities, and mission-critical
          environments through intelligent monitoring, precision
          hardware, and advanced security analytics.
        </p>

      </div>

    </section>
  );
}