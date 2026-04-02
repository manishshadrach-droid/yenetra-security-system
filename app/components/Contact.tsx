export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-48 bg-black text-white overflow-hidden"
    >

      {/* subtle tech background */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Section Label */}
        <p className="uppercase tracking-[3px] text-xs text-cyan-400 font-[var(--font-inter)]">
          Consultation
        </p>

        {/* Heading */}
        <h2 className="mt-6 text-5xl md:text-6xl font-[var(--font-orbitron)] font-semibold tracking-tight">
          Request Security Assessment
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-400 text-lg font-[var(--font-inter)] max-w-2xl mx-auto leading-relaxed">
          Our security engineers analyze your environment and recommend
          intelligent surveillance systems tailored for your infrastructure.
        </p>

        {/* Form */}
        <form className="mt-16 space-y-8 text-left">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-400 transition"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-400 transition"
            />

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-transparent border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-400 transition"
            />

            <select
              className="w-full bg-transparent border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-400 transition"
            >
              <option className="text-black">Security Requirement</option>
              <option className="text-black">AI CCTV Deployment</option>
              <option className="text-black">Enterprise Surveillance</option>
              <option className="text-black">Residential Security</option>
              <option className="text-black">Access Control Systems</option>
              <option className="text-black">Alarm & Detection Systems</option>
            </select>

          </div>

          <textarea
            placeholder="Describe your security environment or project"
            rows={5}
            className="w-full bg-transparent border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-400 transition"
          />

          {/* CTA */}
          <div className="pt-4 text-center">

            <button
              type="submit"
              className="btn-primary glow-cyan"
            >
              Request Consultation
            </button>

          </div>

        </form>

      </div>
    </section>
  );
}