import { motion } from "framer-motion";
import { ArrowUpRight, Crown, ScanLine, Sparkles, Stethoscope, Syringe, Wrench } from "lucide-react";

const SERVICES = [
  [Stethoscope, "General dentistry", "Prevention, check-ups, fillings, and everyday oral care."],
  [Sparkles, "Dental cleaning", "A fresh, thorough clean that supports long-term oral health."],
  [ScanLine, "Root canal care", "Comfortable treatment to restore and protect natural teeth."],
  [Wrench, "Dental implants", "Stable, natural-looking solutions for missing teeth."],
  [Syringe, "Orthodontics", "Braces and aligners for a balanced, confident smile."],
  [Crown, "Smile makeover", "Thoughtful cosmetic treatments tailored to your goals."],
];

export default function Services() {
  return (
    <section id="services" className="bg-sand-50 py-20 lg:py-28">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="section-kicker">Our services</p><h2 className="section-heading mt-4 max-w-xl">Care that meets you where your smile is.</h2></div>
          <p className="section-copy max-w-sm md:text-right">From routine prevention to advanced treatments, your care plan starts with a conversation.</p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[2rem] bg-aqua-700 p-7 text-white lg:col-span-5 lg:p-9">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-aqua-300/20 blur-2xl" />
            <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/15"><Crown className="h-6 w-6 text-aqua-100" /></span>
            <p className="relative mt-16 text-xs font-bold uppercase tracking-[.18em] text-aqua-100">A complete care plan</p>
            <h3 className="relative mt-3 font-display text-3xl font-extrabold leading-tight">Everything your smile needs, in one place.</h3>
            <p className="relative mt-4 text-sm leading-relaxed text-aqua-50/80">Our multi-speciality approach helps you move from concern to clarity with the right next step.</p>
            <a href="#contact" className="relative mt-8 inline-flex items-center gap-2 text-sm font-bold text-white">Ask about treatment <ArrowUpRight className="h-4 w-4" /></a>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {SERVICES.map(([Icon, title, text], index) => <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="soft-card group p-6 hover:-translate-y-1 hover:shadow-card"><span className="grid h-11 w-11 place-items-center rounded-xl bg-aqua-50 text-aqua-700 transition-colors group-hover:bg-aqua-600 group-hover:text-white"><Icon className="h-5 w-5" /></span><h3 className="mt-5 font-display text-base font-extrabold text-ink-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-600">{text}</p></motion.div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
