"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919492790807";

const products = [
  { id: "dvr-4", name: "4 Channel DVR", model: "CP-UVR-0401E1V-I", category: "DVR & NVR", image: "/images/products/dvr.webp", description: "A compact recording solution for small CCTV installations." },
  { id: "dvr-8", name: "8 Channel DVR", model: "CP-UVR-0801E1V-I", category: "DVR & NVR", image: "/images/products/dvr.webp", description: "Multi-channel video recording for expanding surveillance setups." },
  { id: "nvr-4", name: "4 Channel NVR", model: "CP-UNR-104F1", category: "DVR & NVR", image: "/images/products/nvr.webp", description: "Network video recording for compatible IP camera systems." },
  { id: "nvr-8", name: "8 Channel NVR", model: "CP-UNR-108F1", category: "DVR & NVR", image: "/images/products/nvr.webp", description: "Centralised network recording for multi-camera installations." },
  { id: "nvr-16", name: "16 Channel NVR", model: "CP-UNR-4K2161-V4", category: "DVR & NVR", image: "/images/products/nvr.webp", description: "Higher-capacity network recording for larger surveillance systems." },
  { id: "bullet-ip", name: "IP Bullet Camera", model: "CP-URC-TC24PL3C-L-V2-0360", category: "CCTV Cameras", image: "/images/products/bullet-ip.jpg", description: "Outdoor-style bullet camera for monitoring entry points and open areas." },
  { id: "dome-ip", name: "IP Dome Camera", model: "CP-URC-DC24PL3C-L-V2-0360", category: "CCTV Cameras", image: "/images/products/ip-dome.jpg", description: "Dome-form IP camera suited to indoor and covered installations." },
  { id: "bullet-hd", name: "2.4MP HD Bullet Camera", model: "CP-UMC-TA24L3-L", category: "CCTV Cameras", image: "/images/products/bullet-ip.jpg", description: "HD bullet camera option for everyday CCTV monitoring." },
  { id: "dome-hd", name: "2.4MP HD Dome Camera", model: "CP-UMC-DA24L4-L", category: "CCTV Cameras", image: "/images/products/hd-dome.jpg", description: "Compact dome camera for indoor surveillance coverage." },
  { id: "poe-8", name: "8-Port PoE Network Switch", model: "CP-ANW-HPU8H2-N12 / CP-ANW-GPU8G2-N12", category: "Networking", image: "/images/products/poe-switch.webp", description: "PoE networking options for connecting compatible IP cameras." },
  { id: "poe-4", name: "4-Port PoE Network Switch", model: "CP-ANW-HP4H2-N65", category: "Networking", image: "/images/products/poe-switch.webp", description: "Compact PoE switching for smaller IP camera installations." },
  { id: "rj45", name: "RJ45 Connectors", model: "Model not specified", category: "Cables & Connectors", image: "/images/products/rj45-connectors.webp", description: "Network cable connectors for structured cabling work." },
  { id: "hdmi", name: "HDMI Cable", model: "Model not specified", category: "Cables & Connectors", image: "/images/products/hdmi-cable.jpg", description: "Display connectivity cable for compatible monitors and recording systems." },
  { id: "vga", name: "VGA Cable", model: "Model not specified", category: "Cables & Connectors", image: "/images/products/vga-cable.webp", description: "Display cable for compatible VGA monitors and equipment." },
  { id: "bnc", name: "BNC & DC Connectors", model: "Model not specified", category: "Cables & Connectors", image: "/images/products/bnc-dc-connectors.jpg", description: "CCTV video and power connection accessories." },
  { id: "smps-4", name: "4 Channel CCTV Power Supply", model: "CP-DPS-PD04V3-12D", category: "Power & Accessories", image: "/images/products/power-supply.webp", description: "Power supply unit for compatible multi-camera CCTV setups." },
  { id: "smps-8", name: "8 Channel CCTV Power Supply", model: "CP-DPS-PD08V2-12D", category: "Power & Accessories", image: "/images/products/power-supply.webp", description: "Power distribution option for compatible 8-channel CCTV installations." },
  { id: "hdd", name: "Surveillance Hard Disk", model: "Model not specified", category: "Power & Accessories", image: "/images/products/surveillance-hard-disk.jpg", description: "Storage component intended for continuous CCTV recording workloads." },
  { id: "mouse", name: "USB Mouse", model: "Model not specified", category: "Power & Accessories", image: "/images/products/mouse.png", description: "Basic control accessory for compatible DVR and NVR systems." },
  { id: "junction", name: "PVC Junction Box", model: "Model not specified", category: "Installation Accessories", image: "/images/products/pvc-junction-boxes.webp", description: "Protective enclosure for CCTV cable connections and terminations." },
  { id: "wall-stand", name: "Camera Wall Mount Stand", model: "Model not specified", category: "Installation Accessories", image: "/images/products/wall-mount-stand.jpg", description: "Mounting accessory for positioning compatible cameras." },
  { id: "pole-stand", name: "Camera Pole Stand", model: "Model not specified", category: "Installation Accessories", image: "/images/products/pole-stand.jpg", description: "Pole mounting accessory for suitable camera installations." },
  { id: "pvc-rack", name: "PVC Rack with Extension", model: "Model not specified", category: "Installation Accessories", image: "/images/products/pvc-rack.webp", description: "Equipment enclosure for organising CCTV installation components." },
  { id: "rack-2u", name: "2U Surveillance Rack", model: "Model not specified", category: "Installation Accessories", image: "/images/products/2u-rack.jpg", description: "Rack enclosure for organising compatible surveillance equipment." },
];

const categories = ["All Products", "DVR & NVR", "CCTV Cameras", "Networking", "Cables & Connectors", "Power & Accessories", "Installation Accessories"];

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const filteredProducts = useMemo(
    () => activeCategory === "All Products" ? products : products.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const enquire = (name: string, model: string) => {
    const message = encodeURIComponent(`Hello Yenetra, I would like to enquire about ${name} (${model}). Please share more details.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative py-28 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="uppercase tracking-[3px] text-xs text-cyan-400">Yenetra Product Catalogue</p>
            <h2 className="mt-6 text-4xl md:text-6xl font-[var(--font-orbitron)] font-semibold">Security Products</h2>
            <p className="mt-6 text-gray-400 text-base md:text-lg">
              Explore surveillance systems, networking equipment and installation accessories. Contact our team for product details and recommendations.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-3 mb-12" aria-label="Filter products by category">
          {categories.map((category) => (
            <button key={category} onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs md:text-sm transition ${activeCategory === category ? "border-cyan-400 bg-cyan-400/10 text-cyan-300" : "border-white/15 text-gray-400 hover:border-cyan-400/60 hover:text-white"}`}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <article key={item.id} className="card-tech group overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] bg-white p-5">
                <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-slate-950/90 px-3 py-1 text-[10px] uppercase tracking-wider text-cyan-300">{item.category}</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold leading-snug">{item.name}</h3>
                <p className="mt-2 text-xs text-cyan-300/80 break-words">Model: {item.model}</p>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed flex-1">{item.description}</p>
                <button onClick={() => enquire(item.name, item.model)}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-400/60 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition">
                  <FaWhatsapp className="text-base" /> Enquire on WhatsApp
                </button>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-gray-500">Product availability and specifications are subject to confirmation. Contact Yenetra for assistance.</p>
      </div>
    </section>
  );
}
