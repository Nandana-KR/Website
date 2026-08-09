import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="container-site py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-serif text-2xl font-bold text-white">denta<span className="text-coral-400">cre</span></p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-navy-400">
              A premium multi-speciality dental clinic providing personalized care in a comfortable, modern environment.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-200">Navigation</h4>
            <ul className="mt-4 space-y-2.5">
              {["Home", "About", "Services", "Doctors", "Gallery", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-sm text-navy-400 transition-colors hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-200">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-coral-400" strokeWidth={2} /><a href="tel:+917306674866" className="text-sm hover:text-white">+91 73066 74866</a></li>
              <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-coral-400" strokeWidth={2} /><span className="text-sm">123, MG Road, 2nd Floor<br/>City Centre, Your City 560001</span></li>
              <li className="flex items-start gap-2.5"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-coral-400" strokeWidth={2} /><span className="text-sm">Mon – Sat: 9 AM – 8 PM</span></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-200">Hours</h4>
            <ul className="mt-4 space-y-2">
              {[["Mon – Fri", "9:00 AM – 8:00 PM"], ["Saturday", "9:00 AM – 8:00 PM"], ["Sunday", "10:00 AM – 2:00 PM"]].map(([d, t]) => (
                <li key={d} className="flex justify-between text-sm"><span className="text-navy-400">{d}</span><span className="font-medium text-navy-200">{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800/60">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 sm:flex-row">
          <p className="text-xs text-navy-500">&copy; {year} Dentacre. All rights reserved.</p>
          <p className="text-xs text-navy-500">Demo Website — Content for demonstration only</p>
        </div>
      </div>
    </footer>
  );
}
