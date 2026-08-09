import { motion } from "framer-motion";
import { Heart, ShieldCheck, Clock, Users } from "lucide-react";

const FEATURES = [
  { icon: Heart, title: "Gentle Approach", desc: "Comfort-first treatments designed around you." },
  { icon: ShieldCheck, title: "Strict Hygiene", desc: "International sterilization standards." },
  { icon: Clock, title: "Flexible Hours", desc: "Morning and evening appointments available." },
  { icon: Users, title: "Family Care", desc: "Quality dental care for all ages." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 lg:py-28">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden rounded-4xl shadow-card ring-1 ring-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80"
                alt="Dental team providing professional care"
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
            <motion.div variants={item} className="flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-primary-500" />
              <span className="text-sm font-semibold text-primary-600">About Us</span>
            </motion.div>

            <motion.h2 variants={item} className="section-title mt-4">
              A dental experience you can{" "}
              <span className="text-primary-600">trust</span>
            </motion.h2>

            <motion.p variants={item} className="section-subtitle mt-4">
              SmileCare is a multi-speciality dental clinic offering comprehensive
              oral healthcare. We combine experienced specialists with modern
              technology to provide treatments that are effective, comfortable,
              and designed to give you lasting results.
            </motion.p>

            <motion.div variants={item} className="mt-8 grid gap-3 sm:grid-cols-2">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3 rounded-xl bg-white p-4 shadow-soft ring-1 ring-neutral-100">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-50 text-primary-600">
                    <Icon className="h-4 w-4" strokeWidth={2.4} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{title}</p>
                    <p className="mt-0.5 text-xs text-neutral-500">{desc}</p>
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
