
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white pt-36 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-5">
              About YeNetra
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Har Pal Pe Nazar.
              <span className="block text-cyan-400">
                Security You Can Rely On.
              </span>
            </h1>

            <p className="text-white/70 leading-8 mb-6">
              YeNetra CCTV Dealers provides surveillance equipment
              and security solutions for residential and commercial
              properties.
            </p>

            <p className="text-white/70 leading-8 mb-6">
              From CCTV cameras and recording systems to networking
              equipment and installation accessories, we help
              customers explore solutions suited to their security
              requirements.
            </p>

            <p className="text-white/70 leading-8">
              Visit us at ARG Complex, Badangpet Main Road,
              Badangpet, Balapur, Hyderabad.
            </p>

            <a
              href="https://wa.me/919492790807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              Connect With Us
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10">
            <img
              src="/images/about.jpg"
              alt="YeNetra security solutions"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
