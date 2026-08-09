import { motion } from "framer-motion";
import { Clock } from "lucide-react";

// Dentacre-style demo profiles. Replace names, portraits, and schedules with the
// clinic's approved information before production use.
const DOCTORS = [
  {
    name: "Drg. Jonathan",
    qualification: "BDS, MDS — Prosthodontics",
    specialization: "General Dentist",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&h=620&q=85",
    schedule: [
      { day: "Monday", time: "09:00 – 15:00" },
      { day: "Wednesday", time: "09:00 – 15:00" },
      { day: "Thursday", time: "09:00 – 15:00" },
    ],
  },
  {
    name: "Drg. Marcell",
    qualification: "BDS, MDS — Orthodontics",
    specialization: "General Dentist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&h=620&q=85",
    schedule: [
      { day: "Monday", time: "09:00 – 15:00" },
      { day: "Wednesday", time: "09:00 – 15:00" },
      { day: "Thursday", time: "09:00 – 15:00" },
    ],
  },
  {
    name: "Drg. Sofia",
    qualification: "BDS, MDS — Oral Surgery",
    specialization: "General Dentist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&h=620&q=85",
    schedule: [
      { day: "Monday", time: "09:00 – 15:00" },
      { day: "Wednesday", time: "09:00 – 15:00" },
      { day: "Thursday", time: "09:00 – 15:00" },
    ],
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

export default function Doctors() {
  return (
    <section id="doctors" className="bg-cream py-20 lg:py-28">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="section-label justify-center">Our Team</p>
          <h2 className="section-title mt-4">Meet the <span className="text-coral-500">Experts</span></h2>
          <p className="section-desc mx-auto mt-3">
            A dedicated team bringing expertise, innovation, and compassionate care to every appointment.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3"
        >
          {DOCTORS.map((doc) => (
            <motion.div
              key={doc.name}
              variants={item}
              className="group overflow-hidden rounded-2xl border border-navy-100/60 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-navy-50">
                <img
                  src={doc.image}
                  alt={`${doc.name} — ${doc.specialization} (demo placeholder)`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-navy-900">{doc.name}</h3>
                <p className="mt-0.5 text-sm font-semibold text-coral-500">{doc.specialization}</p>
                <p className="mt-0.5 text-xs text-navy-400">{doc.qualification}</p>

                <div className="mt-4 rounded-xl bg-navy-50/60 p-3">
                  <div className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-navy-700">
                    <Clock className="h-3 w-3 text-coral-500" strokeWidth={2.5} />
                    Schedule
                  </div>
                  {doc.schedule.map(({ day, time }) => (
                    <div key={day} className="flex justify-between border-b border-navy-100/50 py-1 text-xs last:border-0">
                      <span className="text-navy-500">{day}</span>
                      <span className="font-semibold text-navy-800">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-xs italic text-navy-400">
          * Doctor profiles and portraits are demo placeholders for presentation only.
        </p>
      </div>
    </section>
  );
}
