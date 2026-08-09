import { motion } from "framer-motion";
import { CalendarClock, ChevronRight } from "lucide-react";

const DOCTORS = [
  { name: "Dr. Jonathan", qualification: "BDS, MDS — Prosthodontics", speciality: "General Dentist", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=700&h=820&q=90", schedule: "Mon · Wed · Thu", time: "09:00 – 15:00" },
  { name: "Dr. Marcell", qualification: "BDS, MDS — Orthodontics", speciality: "General Dentist", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&h=820&q=90", schedule: "Mon · Wed · Thu", time: "09:00 – 15:00" },
  { name: "Dr. Sofia", qualification: "BDS, MDS — Oral Surgery", speciality: "General Dentist", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&h=820&q=90", schedule: "Mon · Wed · Thu", time: "09:00 – 15:00" },
];

export default function Doctors() {
  return (
    <section id="doctors" className="bg-white py-20 lg:py-28">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-kicker">Meet the team</p><h2 className="section-heading mt-4">People behind your <span className="text-aqua-600">care.</span></h2></div><p className="section-copy max-w-md md:text-right">Professional demo profiles presented for the clinic concept. Approved team details can be added later.</p></div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {DOCTORS.map((doc, index) => <motion.article key={doc.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="group overflow-hidden rounded-[2rem] border border-ink-100/70 bg-white shadow-soft hover:-translate-y-1 hover:shadow-card">
            <div className="relative aspect-[4/4.7] overflow-hidden bg-aqua-50"><img src={doc.image} alt={`${doc.name}, ${doc.speciality} — demo placeholder`} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" /><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-600 backdrop-blur">Demo portrait</span></div>
            <div className="p-6"><p className="text-xs font-bold uppercase tracking-[.15em] text-aqua-600">{doc.speciality}</p><h3 className="mt-2 font-display text-xl font-extrabold text-ink-950">{doc.name}</h3><p className="mt-1 text-xs text-ink-500">{doc.qualification}</p><div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4"><div><p className="text-xs font-bold text-ink-800">Availability</p><p className="mt-1 text-xs text-ink-500">{doc.schedule}</p></div><div className="text-right"><CalendarClock className="ml-auto h-4 w-4 text-aqua-600" /><p className="mt-1 text-xs font-semibold text-ink-600">{doc.time}</p></div></div><a href="#contact" className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-aqua-700">Book with the team <ChevronRight className="h-3.5 w-3.5" /></a></div>
          </motion.article>)}
        </div>
      </div>
    </section>
  );
}
