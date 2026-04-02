import Navbar from "./components/Navbar";
import WhatsApp from "./components/WhatsApp";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import Transformation from "./components/Transformation";
import WhyChooseUs from "./components/WhyChooseUs";
import Parallax from "./components/Parallax";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsApp />

      <main className="relative overflow-hidden">

        <section id="hero">
          <Hero />
        </section>

        <section id="products" className="py-32">
          <div className="container-premium">
            <Collections />
          </div>
        </section>

        <section id="transformation" className="py-32 bg-[#020617]">
          <div className="container-premium">
            <Transformation />
          </div>
        </section>

        <section id="why-yenetra" className="py-32">
          <div className="container-premium">
            <WhyChooseUs />
          </div>
        </section>

        <section id="security-vision" className="relative py-40">
          <Parallax />
        </section>

        <section id="about" className="py-32">
          <div className="container-premium">
            <About />
          </div>
        </section>

        <section id="installations" className="py-32 bg-[#020617]">
          <div className="container-premium">
            <Gallery />
          </div>
        </section>

        <section id="testimonials" className="py-32">
          <div className="container-premium">
            <Testimonials />
          </div>
        </section>

        <section id="cta" className="py-36">
          <CTA />
        </section>

        <section id="contact" className="py-32 bg-[#020617]">
          <div className="container-premium">
            <Contact />
          </div>
        </section>

        {/* CART (GLOBAL) */}
        <CartDrawer />

      </main>

      <Footer />
    </>
  );
}