import { motion } from "framer-motion";
import { Clock3, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";

const WA = "https://wa.me/917306674866?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20SmileCare%20Dental.";
const INFO = [
  [MapPin, "Clinic address", "123, MG Road, 2nd Floor\nCity Centre, Near Metro Station\nYour City, State 560001"],
  [Phone, "Phone", "+91 73066 74866"],
  [Clock3, "Hours", "Mon – Sat: 9:00 AM – 8:00 PM\nSunday: 10:00 AM – 2:00 PM"],
  [MessageCircle, "WhatsApp", "Message us for appointments"],
];

export default function Contact() {
  return (
    <section id="contact" className="bg-sand-50 py-20 lg:py-28">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <p className="section-kicker">Find SmileCare</p>
            <h2 className="section-heading mt-4">A convenient place to begin your care.</h2>
            <p className="section-copy mt-5">Visit the clinic, call the team, or send a quick WhatsApp message.</p>
            <div className="mt-8 space-y-4">
              {INFO.map(([Icon, title, text], index) => (
                <motion.div key={title} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-aqua-700 shadow-soft"><Icon className="h-5 w-5" /></span>
                  <div>
                    <p className="text-sm font-bold text-ink-950">{title}</p>
                    {title === "Phone" ? <a href="tel:+917306674866" className="mt-1 block text-sm text-aqua-700 hover:underline">{text}</a> : title === "WhatsApp" ? <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-aqua-700 hover:underline">{text}</a> : <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-ink-600">{text}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative min-h-[360px] overflow-hidden rounded-[2.5rem] border border-ink-100 bg-aqua-50 shadow-lift">
            <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(34,123,128,.15) 39px, rgba(34,123,128,.15) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(34,123,128,.15) 39px, rgba(34,123,128,.15) 40px)" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-3xl border border-white/70 bg-white/90 p-7 text-center shadow-card backdrop-blur">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-aqua-100 text-aqua-700"><Navigation className="h-5 w-5" /></span>
                <p className="mt-4 font-display font-extrabold text-ink-950">Map placeholder</p>
                <p className="mt-1 max-w-[200px] text-xs leading-relaxed text-ink-500">Google Maps integration will be added here with the actual clinic location.</p>
                <a href="#" className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink-950 px-4 py-2 text-xs font-bold text-white hover:bg-ink-800"><MapPin className="h-3.5 w-3.5" />Get directions</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
