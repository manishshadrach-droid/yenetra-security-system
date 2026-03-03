export default function Parallax() {
  return (
    <section
      id="about"
      className="relative h-[70vh] overflow-hidden"
    >

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/parallax.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] tracking-tight">
            Redefining Interior Luxury
          </h2>
          <p className="mt-6 text-lg font-[var(--font-inter)] text-gray-200 max-w-2xl mx-auto">
            Where craftsmanship meets contemporary design to elevate every space.
          </p>
        </div>
      </div>

    </section>
  );
}