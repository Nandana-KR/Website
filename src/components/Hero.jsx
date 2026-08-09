import { motion } from "framer-motion";
import { Calendar, Phone, Sparkles, Shield, HeartPulse } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/917306674866?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20SmileCare%20Dental.";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero-gradient pt-[70px]">
      <div className="container-px relative grid items-center gap-10 pb-16 pt-16 lg:grid-cols-2 lg:gap-16 lg:pb-24 lg:pt-20">
        {/* Left — content */}
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl">
          <motion.div variants={item} className="flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-primary-500" />
            <span className="text-sm font-semibold text-primary-600">SmileCare Dental Clinic</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-[2.25rem] font-extrabold leading-[1.15] tracking-tight text-neutral-900 sm:text-[2.75rem] lg:text-5xl"
          >
            Your Beautiful Smile is What Makes This World{" "}
            <span className="text-primary-600">Beautiful</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 text-base leading-relaxed text-neutral-500 sm:text-[17px]"
          >
            With a team of experienced dentists and modern equipment, we provide
            comprehensive dental services to ensure your smile stays bright and
            healthy. From routine cleanings to advanced procedures, we prioritize
            your comfort and deliver personalized care tailored to your needs.
          </motion.p>

          {/* CTA */}
          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3 text-[15px]"
            >
              <Calendar className="h-4 w-4" strokeWidth={2.4} />
              Book Now
            </a>
            <a href="tel:+917306674866" className="btn-secondary px-6 py-3 text-[15px]">
              <Phone className="h-4 w-4" strokeWidth={2.4} />
              Call Clinic
            </a>
          </motion.div>

          {/* Trust pills */}
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: HeartPulse, text: "Experienced Care" },
              { icon: Sparkles, text: "Modern Technology" },
              { icon: Shield, text: "Patient-Centered" },
            ].map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-neutral-600 shadow-soft ring-1 ring-neutral-100"
              >
                <Icon className="h-3.5 w-3.5 text-primary-500" strokeWidth={2.2} />
                {text}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-4xl shadow-elevated ring-1 ring-neutral-100">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80"
              alt="Patient receiving gentle dental care in a modern clinic"
              className="aspect-[4/5] w-full object-cover sm:aspect-[3/4] lg:aspect-[4/5]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/20 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-3 left-4 hidden rounded-2xl border border-white bg-white px-4 py-3 shadow-card sm:flex sm:items-center sm:gap-3"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-50 text-primary-600">
              <HeartPulse className="h-5 w-5" strokeWidth={2} />
            </span>
            <div>
              <p className="text-sm font-bold text-neutral-900">The Best Place to Build</p>
              <p className="text-xs text-neutral-500">Your Confidence</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
