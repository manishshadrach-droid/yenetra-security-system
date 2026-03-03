export default function CTA() {
  return (
    <section className="py-40 bg-black text-white text-center">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl md:text-6xl font-semibold tracking-tight font-[var(--font-playfair)] leading-tight">
          Ready to Redefine Your Interiors?
        </h2>

        <p className="mt-8 text-lg text-gray-300 font-[var(--font-inter)]">
          Book a personalized consultation and transform your space with elegance.
        </p>

        <div className="mt-12">
          <a
            href="#contact"
            className="bg-white text-black px-10 py-4 font-semibold tracking-wide hover:bg-gray-200 transition duration-300"
          >
            Get Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}