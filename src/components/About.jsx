import { motion } from "framer-motion";
import { ArrowUpRight, HeartPulse, ShieldCheck } from "lucide-react";

const reveal = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: .55 } } };

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .7 }} className="relative">
          <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-3xl bg-aqua-100" />
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-lift ring-8 ring-sand-50">
            <img src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=90" alt="SmileCare clinic interior" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} transition={{ staggerChildren: .1 }}>
          <motion.p variants={reveal} className="section-kicker">About SmileCare</motion.p>
          <motion.h2 variants={reveal} className="section-heading mt-4">Thoughtful care for every kind of <span className="text-aqua-600">smile.</span></motion.h2>
          <motion.p variants={reveal} className="section-copy mt-5 max-w-xl">SmileCare is a multi-speciality dental clinic offering comprehensive oral healthcare. We combine experienced specialists with modern technology to deliver treatments that are effective, comfortable, and long-lasting.</motion.p>
          <motion.div variants={reveal} className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-aqua-50 p-5"><HeartPulse className="h-6 w-6 text-aqua-700" /><p className="mt-4 font-display font-extrabold text-ink-950">Comfort-first visits</p><p className="mt-1 text-sm leading-relaxed text-ink-600">Clear explanations and a calm experience from your first consultation.</p></div>
            <div className="rounded-2xl bg-sand-100 p-5"><ShieldCheck className="h-6 w-6 text-ink-700" /><p className="mt-4 font-display font-extrabold text-ink-950">Care you can trust</p><p className="mt-1 text-sm leading-relaxed text-ink-600">A professional environment built around safety, hygiene, and precision.</p></div>
          </motion.div>
          <motion.a variants={reveal} href="#services" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-aqua-700 hover:text-aqua-800">Explore our services <ArrowUpRight className="h-4 w-4" /></motion.a>
        </motion.div>
      </div>
    </section>
  );
}
