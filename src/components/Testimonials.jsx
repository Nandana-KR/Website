import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const REVIEWS = [
  { name: "Ramesh K.", text: "The team made me feel comfortable from the moment I walked in. Everything was explained clearly and the experience felt calm and professional." },
  { name: "Sneha M.", text: "I used to feel anxious about dental visits, but the gentle approach here completely changed that. I felt listened to and cared for." },
  { name: "Vijay R.", text: "A welcoming clinic, a thoughtful team, and modern care. The entire experience felt much easier than I expected." },
];

export default function Testimonials() {
  return (
    <section className="bg-aqua-50/70 py-20 lg:py-28">
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center"><p className="section-kicker">Patient stories</p><h2 className="section-heading mt-4">Care people remember for the <span className="text-aqua-600">right reasons.</span></h2><p className="section-copy mx-auto mt-4">Sample testimonials shown for this demo presentation.</p></div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {REVIEWS.map((review, index) => <motion.article key={review.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="relative rounded-[2rem] border border-aqua-100 bg-white p-7 shadow-soft"><Quote className="absolute right-6 top-6 h-9 w-9 text-aqua-100" strokeWidth={1.4} /><div className="flex gap-1 text-gold-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}</div><p className="relative mt-5 text-base leading-relaxed text-ink-700">“{review.text}”</p><div className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5"><span className="grid h-10 w-10 place-items-center rounded-full bg-ink-950 font-display font-extrabold text-white">{review.name[0]}</span><div><p className="text-sm font-bold text-ink-950">{review.name}</p><p className="text-xs text-ink-500">Sample patient profile</p></div></div></motion.article>)}
        </div>
      </div>
    </section>
  );
}
