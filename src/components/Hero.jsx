import { motion } from "framer-motion";
import {
  Calendar,
  Phone,
  HeartPulse,
  Cpu,
  UserCheck,
} from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/917306674866?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20SmileCare%20Dental.";

const TRUST_ITEMS = [
  { icon: HeartPulse, label: "Experienced Care" },
  { icon: Cpu, label: "Modern Technology" },
  { icon: UserCheck, label: "Patient-Centered" },
];

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
    <section
      id="home"
      className="relative overflow-hidden bg-white bg-hero-radial pt-24 lg:pt-32"
    >
      {/* Subtle decorative elements */}
      <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-brand-50/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-teal-50/60 blur-3xl" />

      <div className="container-px relative grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-16 lg:pb-28">
        {/* Left: Copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="font-display text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]"
          >
            Confident Smiles{" "}
            <span className="bg-gradient-to-r from-brand-600 to-teal-500 bg-clip-text text-transparent">
              Begin Here
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Advanced dental care in a comfortable, modern setting. Our team of
            specialists is committed to helping you achieve and maintain a
            healthy, beautiful smile — with treatments tailored to you.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3 text-[15px]"
            >
              <Calendar className="h-[18px] w-[18px]" strokeWidth={2.4} />
              Book an Appointment
            </a>
            <a
              href="tel:+917306674866"
              className="btn-secondary px-6 py-3 text-[15px]"
            >
              <Phone className="h-[18px] w-[18px]" strokeWidth={2.4} />
              Contact Clinic
            </a>
          </motion.div>

          {/* Trust indicators — no fake numbers */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon className="h-4 w-4" strokeWidth={2.4} />
                </span>
                <span className="text-sm font-medium text-slate-700">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-card ring-1 ring-slate-100">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
              alt="A patient receiving dental care in a modern, well-lit clinic"
              className="aspect-[4/5] w-full object-cover sm:aspect-square"
              loading="eager"
            />
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
          </div>

          {/* Floating accent card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-4 -left-4 hidden items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-5 py-3.5 shadow-card backdrop-blur-sm sm:flex"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-teal-500 text-white">
              <HeartPulse className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <div className="leading-tight">
              <p className="font-display text-sm font-bold text-slate-900">Gentle & Precise</p>
              <p className="text-xs text-slate-500">Patient-first approach</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
