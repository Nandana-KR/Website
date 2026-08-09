import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/917306674866?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20SmileCare%20Dental.";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    title: "Clinic Address",
    content: "123, MG Road, 2nd Floor\nCity Centre, Near Metro Station\nYour City, State 560001",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 73066 74866",
    href: "tel:+917306674866",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon – Sat: 9:00 AM – 8:00 PM\nSunday: 10:00 AM – 2:00 PM",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "Quick appointment booking",
    href: WHATSAPP_LINK,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50/50 py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-50/40 blur-3xl" />

      <div className="container-px relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm">
            <Navigation className="h-4 w-4" strokeWidth={2.5} />
            Find Us
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Visit our{" "}
            <span className="bg-gradient-to-r from-brand-600 to-teal-500 bg-clip-text text-transparent">
              clinic
            </span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
            Conveniently located and easy to reach. Walk in or book ahead —
            we are happy to see you.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-2">
          {/* Info cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {CONTACT_ITEMS.map(({ icon: Icon, title, content, href }) => (
              <motion.div
                key={title}
                variants={item}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" strokeWidth={2.3} />
                </span>
                <p className="mt-3 text-sm font-semibold text-slate-900">{title}</p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-1 block text-sm text-brand-600 hover:underline"
                  >
                    {content}
                  </a>
                ) : (
                  <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-slate-500">
                    {content}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-sm lg:min-h-0"
          >
            {/* Decorative map-like pattern */}
            <div className="absolute inset-0 opacity-30">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10 text-center px-6">
              <span className="grid mx-auto h-14 w-14 place-items-center rounded-full bg-white shadow-soft">
                <MapPin className="h-6 w-6 text-brand-600" strokeWidth={2} />
              </span>
              <p className="mt-3 font-display text-sm font-bold text-slate-700">
                Map Integration
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Google Maps will be integrated here with the<br />
                actual clinic location upon confirmation.
              </p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-600 shadow-sm ring-1 ring-slate-100 hover:ring-brand-200"
              >
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
