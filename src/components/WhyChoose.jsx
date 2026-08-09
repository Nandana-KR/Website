import { motion } from "framer-motion";
import { CalendarCheck, HeartHandshake, Scan, Smile } from "lucide-react";

const POINTS = [
  [CalendarCheck, "Easy appointments", "Book through WhatsApp or call the clinic directly."],
  [HeartHandshake, "Personal attention", "Your questions and comfort stay at the centre of every visit."],
  [Scan, "Modern treatment", "A contemporary care environment for confident decisions."],
  [Smile, "Complete care", "From prevention and cleaning to restorative and cosmetic treatments."],
];

export default function WhyChoose() {
  return (
    <section className="bg-ink-950 py-20 text-white lg:py-24">
      <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-kicker text-aqua-300">The Ever Smile difference</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">Better dental care begins with a better <span className="text-aqua-300">experience.</span></h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-200">We make the journey feel clear and comfortable, so you can focus on the result: a healthier smile you feel proud to share.</p>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2">
          {POINTS.map(([Icon, title, text], index) => <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="rounded-2xl border border-white/10 bg-white/[.06] p-5 backdrop-blur-sm"><span className="grid h-10 w-10 place-items-center rounded-xl bg-aqua-300/15 text-aqua-200"><Icon className="h-5 w-5" /></span><p className="mt-4 font-display font-extrabold">{title}</p><p className="mt-1 text-sm leading-relaxed text-ink-200">{text}</p></motion.div>)}
        </div>
      </div>
    </section>
  );
}
