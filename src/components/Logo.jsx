import { Activity } from "lucide-react";

/**
 * Clinic logo — SmileCare (generic demo branding).
 */
export default function Logo({ className = "" }) {
  return (
    <a
      href="#home"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="SmileCare Dental — home"
    >
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
        <Activity className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-slate-900">
          Smile<span className="text-brand-600">Care</span>
        </span>
        <span className="mt-0.5 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
          Dental Clinic
        </span>
      </span>
    </a>
  );
}
