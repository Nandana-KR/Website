import { motion } from "framer-motion";
import { UserRound, Clock } from "lucide-react";

const DOCTORS = [
  {
    name: "Dr. Arun Menon",
    qualification: "BDS, MDS — Prosthodontics",
    specialization: "Implants & Cosmetic Dentistry",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=500&q=80",
    schedule: [
      { day: "Monday", time: "09:00 - 15:00" },
      { day: "Wednesday", time: "09:00 - 15:00" },
      { day: "Friday", time: "09:00 - 15:00" },
    ],
  },
  {
    name: "Dr. Priya Sharma",
    qualification: "BDS, MDS — Orthodontics",
    specialization: "Braces & Aligners",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=500&q=80",
    schedule: [
      { day: "Tuesday", time: "10:00 - 16:00" },
      { day: "Thursday", time: "10:00 - 16:00" },
      { day: "Saturday", time: "09:00 - 13:00" },
    ],
  },
  {
    name: "Dr. Rahul Nair",
    qualification: "BDS, MDS — Endodontics",
    specialization: "Root Canal & Restorations",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&h=500&q=80",
    schedule: [
      { day: "Monday", time: "14:00 - 20:00" },
      { day: "Wednesday", time: "14:00 - 20:00" },
      { day: "Saturday", time: "09:00 - 15:00" },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Doctors() {
  return (
    <section id="doctors" className="bg-ivory py-20 lg:py-28">
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
            <span className="text-sm font-semibold text-primary-600">Our Team</span>
            <span className="h-1 w-8 rounded-full bg-primary-500" />
          </div>
          <h2 className="section-title mt-4">
            Meet the <span className="text-primary-600">Experts</span>
          </h2>
          <p className="section-subtitle mt-3">
            Experienced dental professionals committed to delivering the highest
            standard of care with a personal touch.
          </p>
        </motion.div>

        {/* Doctor cards */}
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
              className="group overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              {/* Portrait */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                <img
                  src={doc.image}
                  alt={`${doc.name} — ${doc.specialization} (demo placeholder)`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-neutral-900">{doc.name}</h3>
                <p className="mt-0.5 text-sm font-medium text-primary-600">{doc.specialization}</p>
                <p className="mt-0.5 text-xs text-neutral-400">{doc.qualification}</p>

                {/* Schedule */}
                <div className="mt-4 border-t border-neutral-100 pt-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700">
                    <Clock className="h-3 w-3 text-primary-500" strokeWidth={2.5} />
                    Schedule
                  </div>
                  <ul className="mt-2 space-y-1">
                    {doc.schedule.map(({ day, time }) => (
                      <li key={day} className="flex justify-between text-xs">
                        <span className="text-neutral-500">{day}</span>
                        <span className="font-medium text-neutral-700">{time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-xs italic text-neutral-400">
          * Doctor profiles shown are demo placeholders. Actual team details
          will be updated upon confirmation.
        </p>
      </div>
    </section>
  );
}
