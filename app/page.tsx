
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="CCTV security surveillance"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-40 w-full">
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-6">
            YeNetra CCTV Dealers
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl mb-8">
            Your World.
            <span className="block text-cyan-400">Under Watch.</span>
          </h1>
          <p className="text-white/70 text-lg leading-8 max-w-xl mb-10">
            CCTV cameras, surveillance systems and security solutions
            for homes, businesses and commercial spaces.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
              Explore Products
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-full border border-white/30 hover:border-cyan-400 hover:text-cyan-400 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
            Explore YeNetra
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Security Solutions Made Simple
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {[
            {
              title: "Our Products",
              description: "Explore CCTV cameras, DVRs, NVRs, networking equipment and accessories.",
              href: "/products",
            },
            {
              title: "Our Services",
              description: "Discover surveillance installation, maintenance and security solutions.",
              href: "/services",
            },
            {
              title: "About YeNetra",
              description: "Get to know our business and find the right way to reach us.",
              href: "/about",
            },
          ].map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="p-8 rounded-2xl border border-white/10 bg-white/[0.04] hover:border-cyan-400/50 transition group"
            >
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400">
                {item.title}
              </h3>
              <p className="text-white/60 leading-7 mb-6">{item.description}</p>
              <span className="text-cyan-400 text-sm">Explore more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.04] border-y border-white/10 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Har Pal Pe Nazar.
          </h2>
          <p className="text-white/60 mb-8">
            Have a security requirement? Speak with YeNetra.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
