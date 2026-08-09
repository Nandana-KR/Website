import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";

const LINKS = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Doctors", "#doctors"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header initial={{ y: -60 }} animate={{ y: 0 }} transition={{ duration: .55 }} className="fixed inset-x-0 top-0 z-50">
      <nav className={`transition-all duration-300 ${scrolled ? "border-b border-ink-100/70 bg-white/90 shadow-soft backdrop-blur-xl" : "bg-white/70 backdrop-blur-sm"}`}>
        <div className="site-container flex h-[76px] items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5" aria-label="Ever Smile home">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ink-950 text-white shadow-soft">
              <span className="font-display text-lg font-extrabold">d</span>
            </span>
            <span className="font-display text-xl font-extrabold tracking-tight text-ink-950">Ever<span className="text-aqua-600">Smile</span></span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {LINKS.map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold text-ink-600 transition-colors hover:text-aqua-700">{label}</a>)}
          </div>

          <a href="tel:+918593019901" className="btn-primary hidden px-5 py-2.5 text-sm lg:inline-flex"><Phone className="h-4 w-4" />Book a visit</a>
          <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"} className="grid h-10 w-10 place-items-center rounded-xl bg-ink-50 text-ink-800 lg:hidden">
            <AnimatePresence mode="wait" initial={false}>
              {open ? <motion.span key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }}><X className="h-5 w-5" /></motion.span> : <motion.span key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }}><Menu className="h-5 w-5" /></motion.span>}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {open && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-ink-100 bg-white lg:hidden">
            <div className="site-container space-y-1 py-4">
              <a href="#home" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold text-ink-700 hover:bg-aqua-50">Home</a>
              {LINKS.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold text-ink-700 hover:bg-aqua-50">{label}</a>)}
              <a href="tel:+918593019901" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full"> <Phone className="h-4 w-4" />Book a visit</a>
            </div>
          </motion.div>}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
