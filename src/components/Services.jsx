import { motion } from "framer-motion";
import { Stethoscope, Sparkles, ScanLine, SmilePlus, Crown, Syringe } from "lucide-react";

const SERVICES = [
  { icon: Stethoscope, title: "Dental Cleaning", desc: "Professional cleaning and preventive care for optimal oral health." },
  { icon: ScanLine, title: "Root Canal", desc: "Precise, comfortable therapy to save and restore natural teeth." },
  { icon: SmilePlus, title: "Dental Implants", desc: "Permanent, natural-looking tooth replacement with modern implants." },
  { icon: Syringe, title: "Orthodontics", desc: "Braces and aligners for beautifully aligned teeth at any age." },
  { icon: Sparkles, title: "Teeth Whitening", desc: "Professional whitening for a noticeably brighter, confident smile." },
  { icon: Crown, title: "Smile Makeover", desc: "Comprehensive cosmetic dentistry for a complete transformation." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="section-label justify-center">Treatments</p>
          <h2 className="section-title mt-4">
            Experience Unparalleled Dental Care
          </h2>
          <p className="section-desc mx-auto mt-3">
            Cutting-edge treatments delivered with precision and compassion, all under one roof.
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
            <motion.div key={title} variants={item} className="card card-hover group text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-white transition-colors duration-300 group-hover:bg-coral-500">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
