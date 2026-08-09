import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Doctors from "./components/Doctors";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import CtaBanner from "./components/CtaBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-sand-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Doctors />
        <Testimonials />
        <Gallery />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
