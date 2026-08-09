import { motion } from "framer-motion";
import { Calendar, Phone, ShieldCheck, HeartPulse, Zap } from "lucide-react";

const WHATSAPP =
  "https://wa.me/917306674866?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Dentacre.";

const TRUST = [
  { icon: HeartPulse, label: "Experienced Care" },
  { icon: Zap, label: "Modern Technology" },
  { icon: ShieldCheck, label: "Patient Comfort" },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="container-site relative flex min-h-[92vh] items-center py-32 lg:py-40">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          {/* Label */}
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.25em] text-coral-400">
            Premium Dental Care
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="mt-5 font-serif text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-[3.5rem]"
          >
            Your Beautiful Smile<br />
            is What Makes This<br className="hidden sm:block" />
            World <span className="text-coral-400">Beautiful</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-base leading-relaxed text-navy-200 sm:text-lg"
          >
            With experienced dentists and state-of-the-art equipment, we deliver
            personalized care that protects your confidence and your happiness.
            Schedule your appointment today.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-3.5 text-[15px]">
              <Calendar className="h-4 w-4" strokeWidth={2.2} />
              Book Appointment
            </a>
            <a href="tel:+917306674866" className="btn-outline-light px-7 py-3.5 text-[15px]">
              <Phone className="h-4 w-4" strokeWidth={2.2} />
              Call Clinic
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            {TRUST.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Icon className="h-4 w-4 text-coral-400" strokeWidth={2.2} />
                <span className="text-xs font-semibold text-white/90">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60h1440V30C1200 55 960 10 720 30S240 55 0 30v30z" fill="#faf9f6" />
        </svg>
      </div>
    </section>
  );
}
