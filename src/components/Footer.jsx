import { Clock3, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="site-container grid gap-10 py-14 lg:grid-cols-4 lg:py-16">
        <div>
          <a href="#home" className="font-display text-2xl font-extrabold text-white">Smile<span className="text-aqua-300">Care</span></a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">Multi-speciality dental clinic delivering thoughtful care with modern technology.</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.16em] text-aqua-200">Explore</p>
          <div className="mt-4 grid gap-2.5 text-sm">
            {[["About", "#about"], ["Services", "#services"], ["Doctors", "#doctors"], ["Gallery", "#gallery"], ["Contact", "#contact"]].map(([label, href]) => <a key={href} href={href} className="text-ink-300 hover:text-white">{label}</a>)}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.16em] text-aqua-200">Contact</p>
          <div className="mt-4 space-y-3 text-sm">
            <a href="tel:+917306674866" className="flex gap-2 text-ink-300 hover:text-white"><Phone className="h-4 w-4 text-aqua-300" />+91 73066 74866</a>
            <p className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua-300" /><span>123, MG Road, 2nd Floor<br />City Centre, Your City 560001</span></p>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.16em] text-aqua-200">Hours</p>
          <div className="mt-4 flex gap-2 text-sm"><Clock3 className="mt-0.5 h-4 w-4 text-aqua-300" /><span>Mon – Sat: 9 AM – 8 PM<br />Sunday: 10 AM – 2 PM</span></div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-container flex flex-col justify-between gap-2 py-5 text-xs text-ink-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.</p>
          <p>Demo website for presentation purposes.</p>
        </div>
      </div>
    </footer>
  );
}
