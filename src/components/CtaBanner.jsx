import { motion } from "framer-motion";
import { Phone, MessageCircle, Calendar } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/917306674866?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20SmileCare%20Dental.";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-teal-600 py-16 lg:py-20">
      {/* Subtle decorative shapes */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="container-px relative text-center"
      >
        <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
          Ready to Take the Next Step Toward<br className="hidden sm:block" />
          a Healthier Smile?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-white/80 sm:text-lg">
          Book a convenient appointment today. We are here to help you
          feel confident about your dental health.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white px-6 py-3 text-[15px] font-semibold text-brand-700 shadow-card hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Calendar className="h-[18px] w-[18px]" strokeWidth={2.4} />
            Book an Appointment
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-white/25 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/20"
          >
            <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2.4} />
            WhatsApp
          </a>
          <a
            href="tel:+917306674866"
            className="btn border border-white/25 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/20"
          >
            <Phone className="h-[18px] w-[18px]" strokeWidth={2.4} />
            Call Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}
