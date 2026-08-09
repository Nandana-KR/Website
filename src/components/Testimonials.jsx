import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ramesh K.",
    text: "I have been to several dental clinics over the years, but none have compared to the care I received here. The staff made me feel welcomed from the moment I walked in, and the procedure was comfortable. I left feeling confident about my smile.",
  },
  {
    name: "Sneha M.",
    text: "As someone who has always been anxious about visiting the dentist, I am grateful to have found SmileCare. The team was patient, answered all my questions, and made me feel completely at ease. I no longer dread dental visits.",
  },
  {
    name: "Vijay R.",
    text: "The team is always friendly, professional, and genuinely cares about oral health. Whether it is a routine cleaning or a complex procedure, I know I am in good hands. The modern facility gives me confidence in the care I receive.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container-px">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-primary-500" />
            <span className="text-sm font-semibold text-primary-600">Testimonials</span>
            <span className="h-1 w-8 rounded-full bg-primary-500" />
          </div>
          <h2 className="section-title mt-4">
            Hear What <span className="text-primary-600">They Say</span>
          </h2>
          <p className="section-subtitle mt-3">
            What our patients have shared about their experience with us.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={item} className="card relative">
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary-100" strokeWidth={1.5} />
              <p className="text-sm leading-relaxed text-neutral-600">
                "{t.text}"
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-neutral-100 pt-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-100 font-display text-sm font-bold text-primary-700">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{t.name}</p>
                  <p className="text-xs text-neutral-400">Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-xs italic text-neutral-400">
          * Testimonials shown above are sample content for demonstration purposes.
        </p>
      </div>
    </section>
  );
}
