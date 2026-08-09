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
  { icon: Stethoscope, title: "Dental Cleaning", desc: "Professional cleaning and preventive care for optimal oral health." },
  { icon: ScanLine, title: "Root Canal Treatment", desc: "Precise, comfortable therapy to save and restore natural teeth." },
  { icon: SmilePlus, title: "Dental Implants", desc: "Permanent, natural-looking tooth replacement with durable implants." },
  { icon: Syringe, title: "Orthodontics", desc: "Braces and clear aligners for beautifully aligned teeth." },
  { icon: Sparkles, title: "Teeth Whitening", desc: "Professional whitening for a noticeably brighter smile." },
  { icon: Crown, title: "Smile Makeover", desc: "Comprehensive cosmetic dentistry for a complete transformation." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="bg-ivory py-20 lg:py-28">
      <div className="container-px">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-primary-500" />
            <span className="text-sm font-semibold text-primary-600">Treatments</span>
            <span className="h-1 w-8 rounded-full bg-primary-500" />
          </div>
          <h2 className="section-title mt-4">
            Unparalleled dental care with{" "}
            <span className="text-primary-600">cutting-edge</span> treatments
          </h2>
          <p className="section-subtitle mt-3">
            Everything your smile needs — from preventive care to advanced procedures,
            all under one roof.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3"
        >
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={item} className="card card-hover group">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h3 className="mt-4 font-display text-[15px] font-bold text-neutral-900">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
