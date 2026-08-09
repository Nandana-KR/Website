import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Check, HeartPulse, Sparkles } from "lucide-react";

const WA = "https://wa.me/917306674866?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20SmileCare%20Dental.";
const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: .65, ease: [0.22, 1, 0.36, 1] } } };

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero-wash pt-[76px]">
      <div className="site-container grid min-h-[620px] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: .1 }}>
          <motion.div variants={reveal} className="inline-flex items-center gap-2 rounded-full border border-aqua-200 bg-white/80 px-3.5 py-2 text-xs font-bold uppercase tracking-[.16em] text-aqua-700 shadow-soft">
            <Sparkles className="h-3.5 w-3.5" /> Premium Dental Care
          </motion.div>
          <motion.h1 variants={reveal} className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.5rem]">
            A healthier smile starts with feeling <span className="text-aqua-600">cared for.</span>
          </motion.h1>
          <motion.p variants={reveal} className="mt-5 max-w-lg text-base leading-relaxed text-ink-600 sm:text-lg">
            SmileCare brings modern dental expertise into a calm, welcoming experience — so every visit feels easier and every smile feels more like you.
          </motion.p>
          <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-3.5"><CalendarDays className="h-4 w-4" />Book appointment<ArrowRight className="h-4 w-4" /></a>
            <a href="#contact" className="btn-secondary px-7 py-3.5">Contact clinic</a>
          </motion.div>
          <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {["Experienced team", "Modern equipment", "Gentle approach"].map((t) => <span key={t} className="inline-flex items-center gap-2 text-sm font-semibold text-ink-600"><span className="grid h-5 w-5 place-items-center rounded-full bg-aqua-100 text-aqua-700"><Check className="h-3 w-3" /></span>{t}</span>)}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative">
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-aqua-200/50 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-lift ring-8 ring-white/70">
            <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1100&q=90" alt="Modern dental treatment room with patient receiving care" className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]" loading="eager" />
          </div>
          <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-card backdrop-blur sm:left-8">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-aqua-100 text-aqua-700"><HeartPulse className="h-5 w-5" /></span>
            <div><p className="font-display text-sm font-extrabold text-ink-950">Patient-first care</p><p className="mt-0.5 text-xs text-ink-500">Designed around your comfort</p></div>
          </motion.div>
        </motion.div>
      </div>
      <div className="h-12 bg-white [clip-path:ellipse(65%_100%_at_50%_100%)]" />
    </section>
  );
}
