import { Phone, MapPin, Clock, Activity } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-400">
      <div className="container-px py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-600 text-white">
                <Activity className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <div>
                <p className="font-display text-base font-bold text-white">Smile<span className="text-primary-400">Care</span></p>
                <p className="text-[10px] text-neutral-500">Dental Clinic</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              A modern multi-speciality dental clinic providing personalized care in a comfortable environment.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300">Navigation</h4>
            <ul className="mt-4 space-y-2.5">
              {["Home", "About", "Services", "Doctors", "Gallery", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-sm transition-colors hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" strokeWidth={2.2} />
                <a href="tel:+917306674866" className="text-sm hover:text-white">+91 73066 74866</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" strokeWidth={2.2} />
                <span className="text-sm">123, MG Road, 2nd Floor<br />City Centre, Your City 560001</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" strokeWidth={2.2} />
                <span className="text-sm">Mon – Sat: 9 AM – 8 PM</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300">Hours</h4>
            <ul className="mt-4 space-y-2">
              {[["Mon – Fri", "9:00 AM – 8:00 PM"], ["Saturday", "9:00 AM – 8:00 PM"], ["Sunday", "10:00 AM – 2:00 PM"]].map(([day, time]) => (
                <li key={day} className="flex justify-between text-sm">
                  <span>{day}</span>
                  <span className="font-medium text-neutral-300">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 sm:flex-row">
          <p className="text-xs text-neutral-500">&copy; {year} SmileCare Dental Clinic. All rights reserved.</p>
          <p className="text-xs text-neutral-500">Demo Website — Content is for demonstration only</p>
        </div>
      </div>
    </footer>
  );
}
