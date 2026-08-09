import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Images, X, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", alt: "Modern clinic reception", caption: "Welcoming Reception" },
  { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80", alt: "Advanced treatment room", caption: "Treatment Suite" },
  { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80", alt: "Dental procedure", caption: "Expert Care" },
  { src: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=800&q=80", alt: "Dental implant work", caption: "Implant Technology" },
  { src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80", alt: "Hygienic interior", caption: "Clean Environment" },
  { src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80", alt: "Dental specialists", caption: "Professional Team" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const prev = () => setLightbox((i) => (i > 0 ? i - 1 : GALLERY_IMAGES.length - 1));
  const next = () => setLightbox((i) => (i < GALLERY_IMAGES.length - 1 ? i + 1 : 0));

  return (
    <section id="gallery" className="bg-ivory py-20 lg:py-28">
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
            <span className="text-sm font-semibold text-primary-600">Gallery</span>
            <span className="h-1 w-8 rounded-full bg-primary-500" />
          </div>
          <h2 className="section-title mt-4">
            Take a look <span className="text-primary-600">inside</span>
          </h2>
          <p className="section-subtitle mt-3">
            A modern, hygienic space designed for your comfort and confidence.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3"
        >
          {GALLERY_IMAGES.map((img, index) => (
            <motion.button
              key={index}
              variants={item}
              onClick={() => setLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl ring-1 ring-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              aria-label={`View ${img.caption}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="p-4 text-sm font-semibold text-white">{img.caption}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/90 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Previous">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={GALLERY_IMAGES[lightbox].src}
              alt={GALLERY_IMAGES[lightbox].alt}
              className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Next">
              <ChevronRight className="h-5 w-5" />
            </button>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur">{GALLERY_IMAGES[lightbox].caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
