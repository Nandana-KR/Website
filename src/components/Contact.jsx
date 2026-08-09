import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917306674866?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment.";

const INFO = [
  { icon: MapPin, title: "Address", content: "123, MG Road, 2nd Floor\nCity Centre, Near Metro Station\nYour City, State 560001" },
  { icon: Phone, title: "Phone", content: "+91 73066 74866", href: "tel:+917306674866" },
  { icon: Clock, title: "Hours", content: "Mon – Sat: 9:00 AM – 8:00 PM\nSunday: 10:00 AM – 2:00 PM" },
  { icon: MessageCircle, title: "WhatsApp", content: "Quick appointment booking", href: WHATSAPP_LINK },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-20 lg:py-28">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-primary-500" />
            <span className="text-sm font-semibold text-primary-600">Location</span>
            <span className="h-1 w-8 rounded-full bg-primary-500" />
          </div>
          <h2 className="section-title mt-4">Visit our <span className="text-primary-600">clinic</span></h2>
          <p className="section-subtitle mt-3">Conveniently located and easy to reach. Walk in or book ahead.</p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Info cards */}
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid gap-4 sm:grid-cols-2">
            {INFO.map(({ icon: Icon, title, content, href }) => (
              <motion.div key={title} variants={item} className="card">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <p className="mt-3 text-sm font-semibold text-neutral-900">{title}</p>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-1 block text-sm text-primary-600 hover:underline">{content}</a>
                ) : (
                  <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-neutral-500">{content}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-100 shadow-soft"
          >
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#a8a29e" strokeWidth="0.5" /></pattern></defs>
                <rect width="100%" height="100%" fill="url(#mapgrid)" />
              </svg>
            </div>
            <div className="relative z-10 text-center px-6">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white shadow-soft">
                <MapPin className="h-6 w-6 text-primary-600" strokeWidth={2} />
              </span>
              <p className="mt-3 font-display text-sm font-bold text-neutral-700">Map Integration</p>
              <p className="mt-1 text-xs text-neutral-500">Google Maps will be added with actual clinic location.</p>
              <a href="#" className="mt-3 inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary-600 shadow-sm ring-1 ring-neutral-100 hover:ring-primary-200">
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
