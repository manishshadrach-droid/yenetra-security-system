"use client";

import { motion } from "framer-motion";

export default function YenetraLogo() {
  return (
    <div className="flex items-center gap-3 hover:scale-105 transition duration-300">

      <motion.svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        className="glow-cyan-soft"
      >
        {/* Outer Eye */}
        <motion.path
          d="M10 50 Q50 15 90 50 Q50 85 10 50 Z"
          stroke="#22d3ee"
          strokeWidth="3"
          fill="none"
        />

        {/* Lens Ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="12"
          stroke="#22d3ee"
          strokeWidth="2"
          opacity="0.7"
        />

        {/* Core Pulse */}
        <motion.circle
          cx="50"
          cy="50"
          r="5"
          fill="#22d3ee"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* 👁️ BLINK (Top Lid) */}
        <motion.rect
          x="0"
          y="0"
          width="100"
          height="50"
          fill="#020617"
          initial={{ y: -60 }}
          animate={{
            y: [-60, -60, 0, -60], // blink down then up
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.7, 0.8, 1], // blink happens quickly
          }}
        />

        {/* 👁️ BLINK (Bottom Lid) */}
        <motion.rect
          x="0"
          y="50"
          width="100"
          height="50"
          fill="#020617"
          initial={{ y: 60 }}
          animate={{
            y: [60, 60, 0, 60],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.7, 0.8, 1],
          }}
        />

      </motion.svg>

      <span className="font-[var(--font-orbitron)] tracking-widest text-cyan-400 text-lg">
        YENETRA
      </span>

    </div>
  );
}