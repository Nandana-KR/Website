import { motion } from "framer-motion";
import { Heart, Shield, Cpu, Users, ArrowRight } from "lucide-react";

const REASONS = [
  { icon: Heart, title: "Gentle Care", desc: "Comfort-first approach with pain-free treatments." },
  { icon: Shield, title: "Safe & Hygienic", desc: "International-standard sterilization protocols." },
  { icon: Cpu, title: "Latest Technology", desc: "Digital imaging, lasers, and modern equipment." },
  { icon: Users, title: "Expert Team", desc: "Specialists with years of advanced training." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 lg:py-28">
      <div className="container-site">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-4xl shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80"
                alt="Dentacre clinic — modern treatment environment"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Accent box */}
            <div className="absolute -bottom-4 -right-4 z-[-1] h-full w-full rounded-4xl bg-coral-100/50" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.p variants={fadeUp} className="section-label">
              Why Choose Us
            </motion.p>

            <motion.h2 variants={fadeUp} className="mt-4 font-serif text-3xl font-bold text-navy-900 sm:text-4xl leading-[1.2]">
              The Best Place to Build<br />
              Your <span className="text-coral-500">Confidence</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="section-desc mt-4">
              With experienced dentists and state-of-the-art equipment, we provide
              comprehensive services ensuring your smile stays bright and healthy.
              We prioritize patient comfort, delivering personalized care tailored
              to your needs.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 sm:grid-cols-2">
              {REASONS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3 rounded-xl bg-white p-4 shadow-soft ring-1 ring-navy-100/50">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-coral-50 text-coral-500">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy-900">{title}</p>
                    <p className="mt-0.5 text-xs text-navy-500">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <a href="#services" className="inline-flex items-center gap-2 text-sm font-bold text-coral-500 hover:text-coral-600">
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
