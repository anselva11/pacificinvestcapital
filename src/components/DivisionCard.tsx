import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Layers, ShieldAlert, X } from "lucide-react";
import { BusinessDivision } from "../data/firmData";

interface DivisionModalProps {
  division: BusinessDivision | null;
  isOpen: boolean;
  onClose: () => void;
}

function DivisionModal({ division, isOpen, onClose }: DivisionModalProps) {
  if (!isOpen || !division) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-text/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white border border-brand-border shadow-2xl rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10"
        >
          <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-brand-text">
            <img
              src={division.image}
              alt={division.name}
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-6 right-6">
              <span className="inline-block px-2.5 py-0.5 mb-2 bg-forest text-white text-[11px] font-semibold tracking-wider uppercase rounded-sm">
                {division.categoryLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                {division.name}
              </h3>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-brand-mutedBg border border-brand-border rounded-sm text-xs">
              <div>
                <span className="text-brand-subtext block mb-1">Division Focus</span>
                <span className="font-semibold text-brand-text">{division.scopeLabel}</span>
              </div>
              <div>
                <span className="text-brand-subtext block mb-1">Operational &amp; Regulatory Status</span>
                <span className="font-semibold text-forest">{division.availabilityStatus}</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-forest mb-2">
                Division Overview
              </h4>
              <p className="text-sm text-brand-text leading-relaxed">{division.description}</p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-forest mb-2">
                Analytical Mandate
              </h4>
              <p className="text-sm text-brand-subtext leading-relaxed bg-brand-mutedBg/60 p-4 border-l-2 border-forest rounded-r-sm">
                &ldquo;{division.thesis}&rdquo;
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-forest mb-3">
                Core Activities
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5 text-xs">
                {division.activities.map((activity) => (
                  <div
                    key={activity}
                    className="p-3 border border-brand-border rounded-sm flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0" />
                    <span className="font-medium text-brand-text">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {division.isOjkGated && division.regulatoryNote && (
              <div className="p-4 border border-emerald-200 bg-emerald-50/70 rounded-sm text-xs text-emerald-950 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-1">Indonesian OJK Authorization Notice</span>
                  <p className="text-emerald-900 leading-relaxed">{division.regulatoryNote}</p>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-brand-border flex items-center justify-between gap-4">
              <span className="text-xs text-brand-subtext">
                Scope: <strong className="text-forest font-semibold">{division.availabilityStatus}</strong>
              </span>
              <button
                onClick={onClose}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-brand-text hover:bg-forest text-white rounded-sm transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default function DivisionCard({ division }: { division: BusinessDivision }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="group bg-white border border-brand-border hover:border-forest transition-all duration-300 flex flex-col h-full rounded-sm overflow-hidden shadow-subtle hover:shadow-card">
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-brand-mutedBg">
          <img
            src={division.image}
            alt={division.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-65 group-hover:opacity-80 transition-opacity" />

          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-forest font-semibold text-[10px] tracking-wider uppercase rounded-sm border border-brand-border/60">
              {division.categoryLabel}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 opacity-95">
              <Layers className="w-3.5 h-3.5" />
              <span className="truncate max-w-[210px]">{division.scopeLabel}</span>
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6 flex flex-col flex-grow">
          <div className="mb-2">
            <span className="text-[11px] font-medium text-brand-subtext uppercase tracking-wider block">
              {division.isOjkGated ? "Subject to OJK Authorization" : "Active Firm Division"}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-brand-text group-hover:text-forest transition-colors font-heading line-clamp-1">
              {division.name}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-brand-subtext leading-relaxed mb-4">
            {division.description}
          </p>

          <ul className="space-y-1.5 text-xs text-brand-text mb-5 flex-grow">
            {division.activities.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-brand-border/80 flex items-center justify-between mt-auto gap-2">
            <span className="text-[10px] text-forest font-semibold bg-forest/5 px-2.5 py-0.5 rounded border border-forest/20 uppercase tracking-wider truncate">
              {division.isOjkGated ? "OJK-Regulated" : "Active Mandate"}
            </span>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-forest group-hover:text-darkgreen hover:underline shrink-0"
            >
              <span>Explore</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      <DivisionModal
        division={division}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
