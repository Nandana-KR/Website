import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Ramesh K.",
    text: "I have been to several dental clinics over the years, but none compared to the exceptional care I received here. The staff made me feel welcomed from the moment I walked in, and the procedure was virtually painless. I left feeling confident in my smile.",
  },
  {
    name: "Sneha M.",
    text: "As someone who has always been anxious about visiting the dentist, I cannot express how grateful I am. The team went above and beyond to ensure my comfort. They were patient, answered all my questions, and made me feel at ease. I no longer dread dental visits.",
  },
  {
    name: "Vijay R.",
    text: "The team is always friendly, professional, and genuinely cares about oral health. Whether a routine cleaning or a complex procedure, I know I am in good hands. The state-of-the-art facility gives me confidence that I am receiving the best possible care.",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

export default function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="section-label justify-center">Testimonials</p>
          <h2 className="section-title mt-4">Hear What <span className="text-coral-500">They Say</span></h2>
          <p className="section-desc mx-auto mt-3">
            Real experiences from patients who trusted us with their smiles.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3"
        >
          {REVIEWS.map((r) => (
            <motion.div key={r.name} variants={item} className="relative rounded-2xl border border-navy-100/60 bg-cream p-6 shadow-soft">
              <Quote className="absolute right-5 top-5 h-10 w-10 text-coral-100" strokeWidth={1.2} />
              <p className="relative text-sm leading-relaxed text-navy-600 italic">
                "{r.text}"
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-navy-100/50 pt-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-navy-900 font-display text-sm font-bold text-white">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-bold text-navy-900">{r.name}</p>
                  <p className="text-xs text-navy-400">Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-xs italic text-navy-400">
          * Testimonials are sample content for demonstration purposes.
        </p>
      </div>
    </section>
  );
}
