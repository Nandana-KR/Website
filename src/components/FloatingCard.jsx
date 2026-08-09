import { motion } from "framer-motion";

/**
 * Reusable floating info card used to highlight clinic stats over the hero image.
 */
export default function FloatingCard({
  icon: Icon,
  value,
  label,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`pointer-events-auto flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-card backdrop-blur-md ${className}`}
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-teal-50 text-brand-600 ring-1 ring-brand-100">
        <Icon className="h-5 w-5" strokeWidth={2.4} />
      </span>
      <div className="leading-tight">
        <p className="font-display text-lg font-bold text-slate-900">{value}</p>
        <p className="text-xs font-medium text-slate-500">{label}</p>
      </div>
    </motion.div>
  );
}
