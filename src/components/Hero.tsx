import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Shield } from "lucide-react";
import { FIRM_INFO } from "../data/firmData";
import { fadeIn, fadeInUp } from "./Motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-brand-text font-heading leading-[1.12] tracking-tight">
                {FIRM_INFO.heroHeadline}
              </h1>
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-brand-subtext font-normal leading-relaxed max-w-2xl">
                {FIRM_INFO.heroSupporting}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
            >
              <Link
                to="/approach"
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-forest hover:bg-darkgreen transition-all duration-200 rounded-sm shadow-sm inline-flex items-center justify-center gap-2 text-center"
              >
                <span>{FIRM_INFO.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-brand-text bg-white hover:bg-brand-mutedBg border border-brand-border hover:border-forest transition-all duration-200 rounded-sm inline-flex items-center justify-center gap-2 text-center"
              >
                <span>{FIRM_INFO.secondaryCta}</span>
                <ChevronRight className="w-4 h-4 text-forest" />
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-8 border-t border-brand-border/80 grid grid-cols-3 gap-4 max-w-xl"
            >
              <div>
                <span className="block text-xl sm:text-2xl font-extrabold text-brand-text font-heading">
                  Proprietary
                </span>
                <span className="text-[11px] text-brand-subtext uppercase tracking-wider font-medium">
                  Capital Focus
                </span>
              </div>
              <div className="border-l border-brand-border pl-4">
                <span className="block text-xl sm:text-2xl font-extrabold text-brand-text font-heading">
                  Fundamental
                </span>
                <span className="text-[11px] text-brand-subtext uppercase tracking-wider font-medium">
                  Financial Research
                </span>
              </div>
              <div className="border-l border-brand-border pl-4">
                <span className="block text-xl sm:text-2xl font-extrabold text-brand-text font-heading">
                  Long-Term
                </span>
                <span className="text-[11px] text-brand-subtext uppercase tracking-wider font-medium">
                  Value Orientation
                </span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-sm overflow-hidden border border-brand-border shadow-card bg-brand-mutedBg"
            >
              <div className="relative h-[380px] sm:h-[460px] lg:h-[500px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85"
                  alt="Pacific Investment Capital Architectural Presence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-brand-border shadow-sm">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-brand-text">
                    <Shield className="w-3.5 h-3.5 text-forest" />
                    <span>Independent Research Standard</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-emerald-300">
                    {FIRM_INFO.tagline.toUpperCase()}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-heading leading-snug">
                    Fundamental analysis and disciplined capital allocation built on analytical rigor.
                  </h3>
                  <div className="pt-2 flex items-center justify-between text-xs text-white/80 border-t border-white/20">
                    <span>{FIRM_INFO.positioning}</span>
                    <span className="text-emerald-300 text-[10px] font-semibold tracking-wider uppercase">
                      Pacific
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
