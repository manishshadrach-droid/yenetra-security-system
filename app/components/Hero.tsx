"use client";

import { motion } from "framer-motion";


export default function HeroSecurity() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white bg-[#020617]">

      {/* Subtle Tech Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#22d3ee_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

      {/* Motion Eye Logo */}
      <div className="absolute top-28 flex justify-center w-full">
        <div className="relative w-40 h-24">

          {/* Eye Outline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 border border-cyan-400 rounded-full"
          />

          {/* Lens */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1, 0.8], opacity: [0, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 m-auto w-10 h-10 rounded-full border border-cyan-400"
          />

          {/* Scan Line */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-0 w-full h-[2px] bg-cyan-400 opacity-40"
          />

          {/* Pulse */}
          <motion.div
            initial={{ scale: 1, opacity: 0.3 }}
            animate={{ scale: [1, 1.6], opacity: [0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-cyan-400 blur-xl"
          />

        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-32">

        {/* Brand */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="uppercase tracking-[4px] text-xs text-cyan-400 font-[var(--font-inter)]"
        >
          Yenetra Security Systems
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.02em" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 font-[var(--font-orbitron)] text-5xl md:text-7xl font-semibold leading-tight"
        >
          Intelligent
          <br />
          Surveillance Systems
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1 }}
          className="mt-6 text-lg max-w-2xl mx-auto text-gray-400 font-[var(--font-inter)]"
        >
          Engineered security infrastructure combining precision hardware,
          intelligent monitoring, and real-time system visibility.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-wrap justify-center gap-6"
        >
          <a href="#products" className="btn-primary glow-cyan-soft">
            Explore Systems
          </a>

          <a href="#contact" className="btn-outline">
            Request Consultation
          </a>
        </motion.div>

      </div>
    </section>
  );
}