import { motion } from "framer-motion";
import {
  Stethoscope,
  Sparkles,
  ScanLine,
  SmilePlus,
  Crown,
  Syringe,
} from "lucide-react";

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Dental Cleaning",
    desc: "Professional cleaning and preventive care to maintain optimal oral health.",
  },
  {
    icon: ScanLine,
    title: "Root Canal Treatment",
    desc: "Precise, comfortable root canal therapy to save and restore natural teeth.",
  },
  {
    icon: SmilePlus,
    title: "Dental Implants",
    desc: "Permanent tooth replacement with natural-looking, durable implants.",
  },
  {
    icon: Syringe,
    title: "Orthodontics",
    desc: "Braces and clear aligners for beautifully aligned teeth at any age.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    desc: "Professional whitening for a noticeably brighter, confident smile.",
  },
  {
    icon: Crown,
    title: "Smile Makeover",
    desc: "Comprehensive cosmetic dentistry for a complete smile transformation.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-50/50 py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand-50/40 blur-3xl" />

      <div className="container-px relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm">
            <Stethoscope className="h-4 w-4" strokeWidth={2.5} />
            Our Services
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-brand-600 to-teal-500 bg-clip-text text-transparent">
              dental care
            </span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
            From preventive care to advanced procedures, everything your smile
            needs — under one roof.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
        >
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-600 group-hover:to-teal-500 group-hover:text-white">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h3 className="mt-4 font-display text-[15px] font-bold text-slate-900">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
