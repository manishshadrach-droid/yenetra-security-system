export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

        <p className="tracking-[4px] text-sm uppercase text-gray-300 mb-6 font-[var(--font-inter)]">
          Luxury Interiors
        </p>

        <h1 className="font-[var(--font-playfair)] text-4xl md:text-8xl font-semibold leading-[1.1] tracking-tight">
  Transform Your Space
  <br />
  <span className="italic">
    With Timeless Elegance
  </span>
</h1>

        <p className="mt-8 text-lg md:text-xl max-w-2xl text-gray-200 font-[var(--font-inter)]">
          Premium Blinds, Curtains, Wallpapers & Sofas crafted for refined living.
        </p>

      </div>
    </section>
  );
}