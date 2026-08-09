import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import CtaBanner from "./components/CtaBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Gallery />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
