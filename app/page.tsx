import Navbar from "./components/Navbar";
import WhatsApp from "./components/WhatsApp";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import Transformation from "./components/Transformation";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <WhatsApp />
      <Hero />
      <Collections />
      <Transformation />
      <WhyChooseUs />
      <Process />
      <About />
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}