const primaryPhone = "+919492790807";
const secondaryPhone = "+919000572766";
const whatsapp = "https://wa.me/919492790807?text=Hello%20YeNetra%2C%20I%20would%20like%20to%20enquire%20about%20CCTV%20products%20or%20installation.";
const address = "ARG Complex, Badangpet Main Road, Badangpet, Balapur, Hyderabad, Telangana";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <p className="uppercase tracking-[3px] text-xs text-cyan-400">Get in touch</p>
        <h2 className="mt-5 text-4xl md:text-6xl font-[var(--font-orbitron)] font-semibold tracking-tight">Let&apos;s Secure Your Space</h2>
        <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto">From site inspection and security planning to professional installation, remote viewing setup, AMC and technical support.</p>
        <div className="mt-12 grid md:grid-cols-2 gap-6 text-left">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h3 className="text-xl font-semibold text-white">Visit our location</h3>
            <p className="mt-4 text-gray-300 leading-relaxed">{address}</p>
            <a className="inline-block mt-5 text-cyan-300 hover:text-cyan-200 underline underline-offset-4" href="https://www.google.com/maps/search/?api=1&query=ARG+Complex+Badangpet+Main+Road+Badangpet+Balapur+Hyderabad" target="_blank" rel="noopener noreferrer">Get directions</a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h3 className="text-xl font-semibold text-white">Call or message us</h3>
            <a className="block mt-4 text-gray-300 hover:text-cyan-300" href={`tel:${primaryPhone}`}>9492790807</a>
            <a className="block mt-2 text-gray-300 hover:text-cyan-300" href={`tel:${secondaryPhone}`}>9000572766</a>
            <a className="inline-flex mt-6 rounded-lg bg-green-600 hover:bg-green-500 px-5 py-3 text-sm font-semibold text-white transition" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
          </div>
        </div>
        <p className="mt-10 text-sm text-gray-500">YeNetra CCTV Dealers · Har Pal Pe Nazar</p>
      </div>
    </section>
  );
}
