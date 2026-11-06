"use client";

export default function CTA() {
  return (
    <section className="relative py-40 bg-[#020617] text-center overflow-hidden text-white">
      <div className="absolute inset-0 tech-grid opacity-[0.05]" />
      <div className="relative max-w-4xl mx-auto px-6">
        <p className="uppercase tracking-[3px] text-xs text-cyan-400">Yenetra Security</p>
        <h2 className="mt-6 text-5xl md:text-6xl font-[var(--font-orbitron)] font-semibold leading-tight">
          Protect What Matters Most
        </h2>
        <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto">
          Explore CCTV products and security solutions for homes, businesses and commercial environments.
        </p>
        <div className="mt-14 flex justify-center gap-6 flex-wrap">
          <a href="#products" className="btn-primary glow-cyan-soft hover-glow">Explore Products</a>
          <a href="#contact" className="btn-outline hover-glow">Request Consultation</a>
        </div>
      </div>
    </section>
  );
}
