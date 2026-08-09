import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", caption: "Reception" },
  { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80", caption: "Treatment Room" },
  { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80", caption: "Procedure" },
  { src: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=800&q=80", caption: "Implant Tech" },
  { src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80", caption: "Interior" },
  { src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80", caption: "Team" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5 } } };

export default function Gallery() {
  const [lb, setLb] = useState(null);
  const prev = () => setLb((i) => (i > 0 ? i - 1 : IMAGES.length - 1));
  const next = () => setLb((i) => (i < IMAGES.length - 1 ? i + 1 : 0));

  return (
    <section id="gallery" className="bg-cream py-20 lg:py-28">
      <div className="container-site">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }} className="text-center">
          <p className="section-label justify-center">Gallery</p>
          <h2 className="section-title mt-4">A Glimpse <span className="text-coral-500">Inside</span></h2>
          <p className="section-desc mx-auto mt-3">Modern, hygienic, and designed for your comfort.</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {IMAGES.map((img, i) => (
            <motion.button key={i} variants={item} onClick={() => setLb(i)} className="group relative overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400" aria-label={`View ${img.caption}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={img.src} alt={img.caption} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-4 text-sm font-semibold text-white">{img.caption}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lb !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm" onClick={() => setLb(null)}>
            <button onClick={() => setLb(null)} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Close"><X className="h-5 w-5" /></button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Previous"><ChevronLeft className="h-5 w-5" /></button>
            <motion.img key={lb} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} src={IMAGES[lb].src} alt={IMAGES[lb].caption} className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Next"><ChevronRight className="h-5 w-5" /></button>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur">{IMAGES[lb].caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
