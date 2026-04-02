"use client";

import Reveal from "./Reveal";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

export default function Collections() {
  const { addToCart } = useCart();

  const items = [
    {
      id: "cctv",
      name: "AI Surveillance Cameras",
      image: "/images/cctv.jpg",
      desc: "High-precision monitoring powered by intelligent vision systems.",
      price: 2999,
    },
    {
      id: "nvr",
      name: "Enterprise Recording Systems",
      image: "/images/nvr.jpg",
      desc: "Secure video infrastructure engineered for continuous reliability.",
      price: 5999,
    },
    {
      id: "access",
      name: "Access Control Infrastructure",
      image: "/images/access-control.jpg",
      desc: "Biometric and digital entry systems designed for controlled environments.",
      price: 4999,
    },
    {
      id: "alarm",
      name: "Integrated Alarm Networks",
      image: "/images/alarm.jpg",
      desc: "Smart detection systems that respond instantly to security events.",
      price: 3999,
    },
  ];

  return (
    <section className="relative py-48 bg-black text-white overflow-hidden">

      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Reveal>
          <div className="text-center mb-28 max-w-3xl mx-auto">

            <p className="uppercase tracking-[3px] text-xs text-cyan-400">
              Security Systems
            </p>

            <h2 className="mt-6 text-5xl md:text-6xl font-[var(--font-orbitron)] font-semibold">
              Intelligent Security Platforms
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              Enterprise-grade surveillance infrastructure designed for reliability.
            </p>

          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {items.map((item) => (
            <Reveal key={item.id}>
              <div className="card-tech group relative overflow-hidden p-6">

                {/* Image */}
                <div className="relative h-56 overflow-hidden rounded-lg">

                  <div
                    className="absolute inset-0 bg-cover bg-center image-hover"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() =>
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          qty: 1,
                        })
                      }
                      className="text-cyan-400 text-sm uppercase tracking-[2px] border border-cyan-400 px-4 py-2"
                    >
                      Add to Setup
                    </motion.button>

                  </div>

                </div>

                {/* Content */}
                <div className="mt-6">

                  <h3 className="text-xl font-[var(--font-orbitron)]">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-gray-400 text-sm">
                    {item.desc}
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