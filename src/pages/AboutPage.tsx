import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Globe,
  Scale,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { RevealSection, staggerContainer, staggerItem } from "../components/Motion";
import { CORE_VALUES, FIRM_INFO } from "../data/firmData";

function renderValueIcon(icon: string) {
  switch (icon) {
    case "ShieldCheck":
      return <ShieldCheck className="w-6 h-6 text-forest" />;
    case "Scale":
      return <Scale className="w-6 h-6 text-forest" />;
    case "TrendingUp":
      return <TrendingUp className="w-6 h-6 text-forest" />;
    case "Globe":
      return <Globe className="w-6 h-6 text-forest" />;
    default:
      return <ShieldCheck className="w-6 h-6 text-forest" />;
  }
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              <span className="w-5 h-[1.5px] bg-forest" />
              <span>FIRM PROFILE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text font-heading leading-tight tracking-tight">
              Independent Investment &amp; Financial Research Firm.
            </h1>
            <p className="text-base sm:text-lg text-brand-subtext leading-relaxed max-w-3xl">
              {FIRM_INFO.heroSupporting}
            </p>
          </div>
        </div>
      </section>

      <section id="overview" className="py-20 sm:py-24 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                badge="OUR FOUNDATION"
                title="Disciplined Research. Long-Term Value."
                subtitle="Pacific Investment Capital combines independent fundamental financial research with disciplined proprietary investment execution."
              />
              <div className="space-y-4 text-sm sm:text-base text-brand-subtext leading-relaxed">
                <p>
                  Built on intellectual independence and rigorous analytical standards, we evaluate
                  businesses from the ground up—studying financial statements, competitive moats,
                  industry structure, and management capital allocation before forming conviction.
                </p>
                <p>
                  We operate as an independent investment and financial research firm dedicated to
                  fundamental analysis and disciplined proprietary capital allocation. Where
                  services extend into regulated investment advisory or portfolio management in
                  Indonesia, such offerings are strictly conditional upon obtaining the required
                  Indonesian Financial Services Authority (OJK) authorization.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-3 gap-3 text-xs text-brand-text">
                <div className="p-3 bg-white border border-brand-border rounded-sm">
                  <span className="font-bold text-forest block text-base font-heading">
                    Proprietary
                  </span>
                  <span className="text-brand-subtext">Principal Capital</span>
                </div>
                <div className="p-3 bg-white border border-brand-border rounded-sm">
                  <span className="font-bold text-forest block text-base font-heading">
                    Independent
                  </span>
                  <span className="text-brand-subtext">Financial Research</span>
                </div>
                <div className="p-3 bg-white border border-brand-border rounded-sm">
                  <span className="font-bold text-forest block text-base font-heading">
                    OJK-Aligned
                  </span>
                  <span className="text-brand-subtext">Regulatory Scope</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-sm overflow-hidden border border-brand-border shadow-card bg-white">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="Pacific Investment Capital Office Environment"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-emerald-300">
                    {FIRM_INFO.tagline.toUpperCase()}
                  </span>
                  <h3 className="text-lg font-bold font-heading mt-1">
                    Objective financial research and patient capital allocation grounded in
                    fundamental analysis.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vision-mission" className="py-20 sm:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <SectionHeader
              badge="PURPOSE & MANDATE"
              title="Our Vision &amp; Strategic Mission"
              subtitle="Guiding principles that anchor our research rigor and proprietary investment discipline."
              align="center"
            />
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 sm:p-10 border border-brand-border rounded-sm shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-sm bg-forest/10 border border-forest/20 flex items-center justify-center text-forest mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-forest block mb-2">
                  OUR VISION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-text font-heading leading-snug mb-4">
                  &ldquo;{FIRM_INFO.vision}&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-brand-subtext leading-relaxed">
                  We strive to exemplify independent analytical judgment, conservative financial
                  evaluation, and enduring stewardship of firm capital.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-brand-border/60 flex items-center gap-2 text-xs text-forest font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Building Long-Term Value</span>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 border border-brand-border rounded-sm shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-sm bg-forest/10 border border-forest/20 flex items-center justify-center text-forest mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-forest block mb-2">
                  OUR MISSION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-text font-heading leading-snug mb-4">
                  &ldquo;{FIRM_INFO.mission}&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-brand-subtext leading-relaxed">
                  Through primary financial statement analysis, company valuation, and industry
                  research, we convert fundamental insights into disciplined decisions.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-brand-border/60 flex items-center gap-2 text-xs text-forest font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Research-Driven Mandate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="core-values" className="py-20 sm:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <SectionHeader
              badge="CORE VALUES"
              title="Independence, Discipline &amp; Regulatory Integrity"
              subtitle="Four foundational pillars defining the analytical and ethical standards of Pacific Investment Capital."
            />
          </RevealSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CORE_VALUES.map((val) => (
              <motion.div
                key={val.id}
                variants={staggerItem}
                className="p-7 border border-brand-border hover:border-forest transition-all duration-300 rounded-sm bg-white shadow-subtle hover:shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-forest/5 flex items-center justify-center mb-6">
                    {renderValueIcon(val.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-brand-text font-heading mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-subtext leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-brand-border/60 text-[11px] font-semibold text-forest uppercase tracking-wider">
                  Guiding Standard
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="principles" className="py-20 sm:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <SectionHeader
                badge="ANALYTICAL PRINCIPLES"
                title="Long-Term Fundamental Compounding"
                subtitle="Why independent research and valuation discipline remain essential across changing market cycles."
              />
              <div className="p-4 bg-white border border-brand-border rounded-sm">
                <span className="text-xs font-bold text-forest uppercase tracking-wider block mb-1">
                  Independent Perspective
                </span>
                <p className="text-xs text-brand-subtext leading-relaxed">
                  Without short-term product-sales incentives, our analytical focus stays centered on
                  business economics, accounting integrity, and intrinsic value.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 border border-brand-border rounded-sm space-y-2">
                <h4 className="font-bold text-base text-brand-text font-heading">
                  1. Primary Financial Scrutiny
                </h4>
                <p className="text-xs text-brand-subtext leading-relaxed">
                  Evaluating multi-year cash flow statements, capital intensity, and footnotes to
                  verify economic earnings quality.
                </p>
              </div>
              <div className="bg-white p-6 border border-brand-border rounded-sm space-y-2">
                <h4 className="font-bold text-base text-brand-text font-heading">
                  2. Balance Sheet Resilience
                </h4>
                <p className="text-xs text-brand-subtext leading-relaxed">
                  Prioritizing conservative leverage, interest coverage, and liquidity buffers across
                  varying credit environments.
                </p>
              </div>
              <div className="bg-white p-6 border border-brand-border rounded-sm space-y-2">
                <h4 className="font-bold text-base text-brand-text font-heading">
                  3. Competitive Moat Validation
                </h4>
                <p className="text-xs text-brand-subtext leading-relaxed">
                  Studying industry barriers, pricing power, and customer switching costs before
                  forming long-term conviction.
                </p>
              </div>
              <div className="bg-white p-6 border border-brand-border rounded-sm space-y-2">
                <h4 className="font-bold text-base text-brand-text font-heading">
                  4. Regulatory Clarity
                </h4>
                <p className="text-xs text-brand-subtext leading-relaxed">
                  Maintaining strict boundaries between active proprietary research/investment and
                  OJK-authorized advisory or portfolio services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 sm:p-12 bg-white border border-brand-border rounded-sm">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-forest">
                INVESTMENT &amp; RESEARCH METHODOLOGY
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-text font-heading">
                Explore Our Investment &amp; Research Approach
              </h3>
              <p className="text-sm text-brand-subtext max-w-xl">
                Learn how Pacific Investment Capital conducts fundamental analysis, company
                valuation, and disciplined proprietary capital allocation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                to="/divisions"
                className="px-6 py-3 border border-brand-border hover:border-forest text-brand-text hover:text-forest text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
              >
                Business Divisions
              </Link>
              <Link
                to="/approach"
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-forest hover:bg-darkgreen rounded-sm transition-colors inline-flex items-center gap-2"
              >
                <span>Explore Our Approach</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
