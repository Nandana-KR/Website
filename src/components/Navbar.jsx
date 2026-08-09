import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Activity } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const PHONE_NUMBER = "+917306674866";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-100/80 bg-white/85 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-px flex h-[72px] items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2" aria-label="SmileCare — home">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-600 to-teal-500 text-white transition-transform duration-300 group-hover:scale-105">
              <Activity className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[15px] font-bold tracking-tight text-slate-900">
                Smile<span className="text-brand-600">Care</span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400">
                Dental Clinic
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-[13px] font-semibold text-slate-600 transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a href={`tel:${PHONE_NUMBER}`} className="btn-primary px-5 py-2.5 text-sm">
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl bg-white/80 text-slate-700 ring-1 ring-slate-100 backdrop-blur lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl lg:hidden"
            >
              <ul className="container-px flex flex-col gap-1 py-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-2.5 text-[15px] font-semibold text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    onClick={() => setOpen(false)}
                    className="btn-primary w-full px-5 py-3 text-base"
                  >
                    <Phone className="h-4 w-4" strokeWidth={2.5} />
                    Call Now
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
