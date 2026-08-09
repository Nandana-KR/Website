import { motion } from "framer-motion";
import { Calendar, MessageCircle, Phone } from "lucide-react";

const WA = "https://wa.me/917306674866?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Dentacre.";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-dark-gradient py-20 lg:py-24">
      {/* Decorative */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-coral-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-coral-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="container-site relative text-center"
      >
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral-400">Book Your Visit</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-bold text-white sm:text-4xl leading-[1.2]">
          Ready to Take the Next Step<br className="hidden sm:block" />
          Toward a Healthier <span className="text-coral-400">Smile</span>?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-navy-300">
          Schedule a convenient appointment today. Our team is here to help you
          feel confident about your dental health.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-3.5 text-[15px]">
            <Calendar className="h-4 w-4" />
            Book Appointment
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-outline-light px-7 py-3.5 text-[15px]">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a href="tel:+917306674866" className="btn-outline-light px-7 py-3.5 text-[15px]">
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}
