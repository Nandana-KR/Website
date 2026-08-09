import { motion } from "framer-motion";
import { Heart, ShieldCheck, Clock, Users } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Heart, title: "Gentle Approach", desc: "Comfort-first treatments with minimal discomfort." },
  { icon: ShieldCheck, title: "Strict Hygiene", desc: "International-grade sterilization protocols." },
  { icon: Clock, title: "Convenient Hours", desc: "Flexible scheduling to fit your lifestyle." },
  { icon: Users, title: "All Ages Welcome", desc: "Dental care for the whole family." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-50/50 py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-teal-50/50 blur-3xl" />

      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-card ring-1 ring-slate-100">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80"
                alt="Dental specialists providing care in a modern clinic"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700"
            >
              About the Clinic
            </motion.span>

            <motion.h2
              variants={item}
              className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
            >
              A dental experience{" "}
              <span className="bg-gradient-to-r from-brand-600 to-teal-500 bg-clip-text text-transparent">
                you can trust
              </span>
            </motion.h2>

            <motion.p variants={item} className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              SmileCare is a multi-speciality dental clinic offering comprehensive
              oral healthcare in a welcoming, modern environment. We combine
              experienced specialists with the latest technology to provide
              treatments that are effective, comfortable, and long-lasting.
            </motion.p>

            {/* Highlights */}
            <motion.div variants={item} className="mt-8 grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon className="h-4 w-4" strokeWidth={2.4} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
