import { motion } from "framer-motion";
import { Phone, MessageCircle, Calendar } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/917306674866?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20SmileCare%20Dental.";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary-600 py-16 lg:py-20">
      {/* Decorative */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/5" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="container-px relative text-center"
      >
        <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
          Ready to Take the Next Step Toward<br className="hidden sm:block" /> a Healthier Smile?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-white/75">
          Schedule your appointment today. We are here to help you feel
          confident about your dental health.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn bg-white px-6 py-3 text-[15px] font-semibold text-primary-700 shadow-card hover:-translate-y-0.5">
            <Calendar className="h-4 w-4" />
            Book Appointment
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn border border-white/20 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white hover:-translate-y-0.5 hover:bg-white/20">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a href="tel:+917306674866" className="btn border border-white/20 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white hover:-translate-y-0.5 hover:bg-white/20">
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}
