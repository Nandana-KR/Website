import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, MessageCircle, Phone } from "lucide-react";

const WA = "https://wa.me/917306674866?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20SmileCare%20Dental.";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink-gradient py-20 text-white lg:py-24">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-aqua-300/15 blur-3xl" />
      <div className="site-container relative flex flex-col justify-between gap-9 lg:flex-row lg:items-end">
        <div>
          <p className="section-kicker text-aqua-200">Your next step</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">Ready to feel better about your <span className="text-aqua-200">smile?</span></h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-200">Start with a simple conversation. Our team will help you understand the right next step for your care.</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:shrink-0">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-light"><CalendarDays className="h-4 w-4" />Book appointment<ArrowUpRight className="h-4 w-4" /></a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn border border-white/20 bg-white/10 px-6 py-3 text-white hover:-translate-y-0.5 hover:bg-white/20"><MessageCircle className="h-4 w-4" />WhatsApp</a>
          <a href="tel:+917306674866" className="btn border border-white/20 bg-white/10 px-6 py-3 text-white hover:-translate-y-0.5 hover:bg-white/20"><Phone className="h-4 w-4" />Call</a>
        </div>
      </div>
    </section>
  );
}
