
const phoneNumbers = ["9492790807", "9000572766"];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white pt-36 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Let's Talk Security
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto leading-7">
            Looking for CCTV cameras, security equipment or installation
            assistance? Contact YeNetra and discuss your requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-2xl font-semibold mb-8">Contact Details</h2>

            <div className="mb-8">
              <p className="text-cyan-400 text-sm mb-2">Visit Our Store</p>
              <p className="text-white/80 leading-7">
                ARG Complex,<br />
                Badangpet Main Road,<br />
                Badangpet, Balapur,<br />
                Hyderabad, Telangana.
              </p>
            </div>

            <div className="mb-8">
              <p className="text-cyan-400 text-sm mb-3">Call Us</p>
              {phoneNumbers.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="block text-white/80 hover:text-cyan-400 mb-3"
                >
                  +91 {phone}
                </a>
              ))}
            </div>

            <div>
              <p className="text-cyan-400 text-sm mb-3">WhatsApp Enquiries</p>
              <a
                href="https://wa.me/919492790807"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-2xl font-semibold mb-5">Find Us</h2>
            <div className="rounded-xl overflow-hidden h-[320px]">
              <iframe
                title="YeNetra CCTV Dealers location"
                src="https://www.google.com/maps?q=ARG+Complex+Badangpet+Main+Road+Badangpet+Hyderabad&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
              />
            </div>
            <p className="text-white/50 text-sm mt-4">
              ARG Complex, Badangpet Main Road, Hyderabad.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
