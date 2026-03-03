export default function Contact() {
  return (
    <section id="contact" className="py-40 bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-6xl font-semibold tracking-tight font-[var(--font-playfair)]">
          Get In Touch
        </h2>

        <p className="mt-6 text-gray-600 font-[var(--font-inter)]">
          Schedule your consultation today.
        </p>

        <form className="mt-12 space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 px-6 py-4 focus:outline-none focus:border-black"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 px-6 py-4 focus:outline-none focus:border-black"
          />

          <textarea
            placeholder="Tell us about your space"
            rows={5}
            className="w-full border border-gray-300 px-6 py-4 focus:outline-none focus:border-black"
          />

          <button
            type="submit"
            className="bg-black text-white px-10 py-4 hover:bg-gray-800 transition"
          >
            Send Inquiry
          </button>

        </form>

      </div>
    </section>
  );
}