import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

/**
 * Placeholder doctor data — replace with actual doctor info when client provides it.
 * Images are licensed stock portraits from UI Faces / randomuser style placeholders.
 */
const DOCTORS = [
  {
    name: "Dr. Arun Menon",
    qualification: "BDS, MDS — Prosthodontics",
    specialization: "Implants & Cosmetic Dentistry",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=500&q=80",
    note: "Placeholder",
  },
  {
    name: "Dr. Priya Sharma",
    qualification: "BDS, MDS — Orthodontics",
    specialization: "Braces & Aligners",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=500&q=80",
    note: "Placeholder",
  },
  {
    name: "Dr. Rahul Nair",
    qualification: "BDS, MDS — Endodontics",
    specialization: "Root Canal & Restorations",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&h=500&q=80",
    note: "Placeholder",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Doctors() {
  return (
    <section id="doctors" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-50/50 blur-3xl" />

      <div className="container-px relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm">
            <UserRound className="h-4 w-4" strokeWidth={2.5} />
            Our Team
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Meet our{" "}
            <span className="bg-gradient-to-r from-brand-600 to-teal-500 bg-clip-text text-transparent">
              specialists
            </span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
            Experienced dental professionals dedicated to delivering the highest
            standard of care in a comfortable environment.
          </p>
        </motion.div>

        {/* Doctor cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
        >
          {DOCTORS.map((doc) => (
            <motion.div
              key={doc.name}
              variants={item}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              {/* Portrait */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <img
                  src={doc.image}
                  alt={`${doc.name} — ${doc.specialization} (demo placeholder)`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {doc.name}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-brand-600">
                  {doc.specialization}
                </p>
                <p className="mt-1 text-xs text-slate-500">{doc.qualification}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Demo note */}
        <p className="mt-8 text-center text-xs text-slate-400 italic">
          * Doctor profiles shown above are demo placeholders. Actual team
          details will be updated upon confirmation.
        </p>
      </div>
    </section>
  );
}
