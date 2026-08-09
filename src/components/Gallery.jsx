import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

const IMAGES = [
  ["https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=90", "Reception"],
  ["https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=90", "Treatment room"],
  ["https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=90", "Patient care"],
  ["https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=90", "Clinic details"],
  ["https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=900&q=90", "Modern equipment"],
];

export default function Gallery() {
  const [active, setActive] = useState(null);
  const move = (direction) => setActive((current) => (current + direction + IMAGES.length) % IMAGES.length);
  return (
    <section id="gallery" className="bg-white py-20 lg:py-28"><div className="site-container"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-kicker">Inside the clinic</p><h2 className="section-heading mt-4">A space made for <span className="text-aqua-600">ease.</span></h2></div><p className="section-copy max-w-sm md:text-right">Clean lines, modern treatment spaces, and a calm environment for every visit.</p></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2"><ImageTile image={IMAGES[0]} index={0} active={active} setActive={setActive} className="sm:col-span-2 lg:col-span-7 lg:row-span-2" /><ImageTile image={IMAGES[1]} index={1} active={active} setActive={setActive} className="lg:col-span-5" /><ImageTile image={IMAGES[2]} index={2} active={active} setActive={setActive} className="lg:col-span-5" /></div></div>
      <AnimatePresence>{active !== null && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-sm" onClick={() => setActive(null)}><button onClick={() => setActive(null)} aria-label="Close gallery" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"><X /></button><button onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="Previous image" className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-8"><ChevronLeft /></button><motion.img key={active} initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} src={IMAGES[active][0]} alt={IMAGES[active][1]} className="max-h-[82vh] max-w-full rounded-3xl object-contain" onClick={(e) => e.stopPropagation()} /><button onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="Next image" className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-8"><ChevronRight /></button><p className="absolute bottom-6 rounded-full bg-white/10 px-4 py-2 text-sm text-white">{IMAGES[active][1]}</p></motion.div>}</AnimatePresence>
    </section>
  );
}

function ImageTile({ image, index, setActive, className }) { return <motion.button initial={{ opacity: 0, scale: .97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .08 }} onClick={() => setActive(index)} className={`group relative min-h-[190px] overflow-hidden rounded-3xl bg-aqua-50 text-left ${className}`}><img src={image[0]} alt={image[1]} loading="lazy" className="h-full min-h-[190px] w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent" /><span className="absolute bottom-5 left-5 text-sm font-bold text-white">{image[1]}</span><span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100"><Expand className="h-4 w-4" /></span></motion.button>; }
