import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from "lucide-react";

const WA = "https://wa.me/917306674866?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment.";
const INFO = [
  { icon: MapPin, title: "Address", text: "123, MG Road, 2nd Floor\nCity Centre, Near Metro Station\nYour City, State 560001" },
  { icon: Phone, title: "Phone", text: "+91 73066 74866", href: "tel:+917306674866" },
  { icon: Clock, title: "Hours", text: "Mon – Sat: 9:00 AM – 8:00 PM\nSunday: 10:00 AM – 2:00 PM" },
  { icon: MessageCircle, title: "WhatsApp", text: "Quick appointment booking", href: WA },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="container-site">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }} className="text-center">
          <p className="section-label justify-center">Location</p>
          <h2 className="section-title mt-4">Find <span className="text-coral-500">Us</span></h2>
          <p className="section-desc mx-auto mt-3">Conveniently located and easy to reach.</p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Info */}
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid gap-4 sm:grid-cols-2">
            {INFO.map(({ icon: Icon, title, text, href }) => (
              <motion.div key={title} variants={item} className="card">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-900 text-white">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="mt-3 text-sm font-bold text-navy-900">{title}</p>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-1 block text-sm text-coral-500 hover:underline">{text}</a>
                ) : (
                  <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-navy-500">{text}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Map placeholder */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }} className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-2xl border border-navy-100/50 bg-navy-50 shadow-soft">
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0L0 0 0 48" fill="none" stroke="#627d98" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>
            </div>
            <div className="relative z-10 text-center px-6">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white shadow-card">
                <MapPin className="h-6 w-6 text-coral-500" strokeWidth={2} />
              </span>
              <p className="mt-3 font-display text-sm font-bold text-navy-800">Map Integration</p>
              <p className="mt-1 text-xs text-navy-500">Google Maps will be integrated here with<br/>the actual clinic location.</p>
              <a href="#" className="mt-3 inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-semibold text-coral-500 shadow-sm ring-1 ring-navy-100/60 hover:ring-coral-200">
                <ExternalLink className="h-3 w-3" />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
