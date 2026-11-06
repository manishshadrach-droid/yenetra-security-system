
const services = [
  {
    number: "01",
    title: "CCTV Installation",
    description:
      "Professional CCTV camera installation for homes, shops, offices and commercial properties.",
  },
  {
    number: "02",
    title: "CCTV Maintenance",
    description:
      "Inspection, troubleshooting and maintenance to keep your surveillance system working reliably.",
  },
  {
    number: "03",
    title: "IP Camera Solutions",
    description:
      "Network-based camera solutions for monitoring and managing your property.",
  },
  {
    number: "04",
    title: "Access Control Systems",
    description:
      "Security solutions designed to help manage and monitor access to your premises.",
  },
  {
    number: "05",
    title: "Networking & Cabling",
    description:
      "CCTV networking, cabling and connectivity setup for new and existing installations.",
  },
  {
    number: "06",
    title: "Security System Upgrades",
    description:
      "Upgrade your existing surveillance setup with suitable cameras, recording systems and accessories.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
            What We Do
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Security Solutions & Services
          </h1>
          <p className="text-white/60 leading-8">
            From selecting the right surveillance equipment to
            installation and ongoing support, YeNetra helps you
            build a security system suited to your property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 hover:border-cyan-400/50 transition"
            >
              <span className="text-cyan-400 text-sm tracking-widest">
                {service.number}
              </span>
              <h2 className="text-xl font-semibold mt-6 mb-4">
                {service.title}
              </h2>
              <p className="text-white/60 leading-7 text-sm mb-7">
                {service.description}
              </p>
              <a
                href={`https://wa.me/919492790807?text=${encodeURIComponent(
                  `Hello YeNetra, I would like to enquire about ${service.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 text-sm font-semibold hover:text-cyan-300"
              >
                Enquire about this service →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
