import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  Clock,
  Leaf,
  ShieldCheck,
} from "lucide-react";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import DivisionCard from "../components/DivisionCard";
import InsightCard from "../components/InsightCard";
import { RevealSection, staggerContainer, staggerItem } from "../components/Motion";
import {
  APPROACH_STEPS,
  BUSINESS_DIVISIONS,
  FIRM_INFO,
  INSIGHT_ARTICLES,
  PHILOSOPHY_PRINCIPLES,
} from "../data/firmData";

function renderPrincipleIcon(icon: string) {
  switch (icon) {
    case "Briefcase":
      return <Briefcase className="w-6 h-6 text-forest" />;
    case "Clock":
      return <Clock className="w-6 h-6 text-forest" />;
    case "BarChart3":
      return <BarChart3 className="w-6 h-6 text-forest" />;
    case "Leaf":
      return <Leaf className="w-6 h-6 text-forest" />;
    default:
      return <Briefcase className="w-6 h-6 text-forest" />;
  }
}

export default function HomePage() {
  const featuredInsight = INSIGHT_ARTICLES[0];
  const secondaryInsights = INSIGHT_ARTICLES.slice(1, 3);

  return (
    <div className="space-y-0">
      <Hero />

      {/* Section 2: Firm Overview */}
      <section className="py-20 sm:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                  <span className="w-6 h-[1.5px] bg-forest" />
                  <span>ABOUT THE FIRM</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-brand-text font-heading leading-[1.15] tracking-tight">
                  Independent Thinking. <br className="hidden sm:inline" />
                  Building Long-Term Value.
                </h2>
                <div className="pt-2">
                  <p className="text-sm font-medium text-forest uppercase tracking-wider">
                    {FIRM_INFO.positioning.toUpperCase()}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 text-brand-subtext text-base sm:text-lg leading-relaxed">
                <p className="text-brand-text font-normal">
                  <strong>Pacific Investment Capital</strong> is an independent investment and
                  financial research firm focused on proprietary investments, fundamental research,
                  and strategic financial analysis.
                </p>
                <p>
                  Our work centers on bottom-up fundamental analysis, rigorous financial statement
                  review, company valuation, and industry research. By anchoring every decision in
                  objective evidence rather than short-term market sentiment, we evaluate
                  opportunities across public equities, private businesses, and fixed income
                  instruments.
                </p>
                <p>
                  Alongside our active proprietary investment and independent research practices,
                  our investment advisory and portfolio management capabilities are structured in
                  strict accordance with Indonesian regulatory requirements under OJK.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-6">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest hover:text-darkgreen underline underline-offset-4"
                  >
                    <span>Read Firm Overview</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/divisions"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-text hover:text-forest underline underline-offset-4"
                  >
                    <span>Business Divisions</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/governance"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-text hover:text-forest underline underline-offset-4"
                  >
                    <span>Governance &amp; OJK Alignment</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Section 3: Guiding Principles */}
      <section className="py-20 sm:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <SectionHeader
              badge="GUIDING PRINCIPLES"
              title="Our Investment Philosophy"
              subtitle="Four foundational tenets govern every fundamental research engagement and proprietary capital allocation decision across Pacific Investment Capital."
            />
          </RevealSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {PHILOSOPHY_PRINCIPLES.map((item) => (
              <motion.div
                key={item.number}
                variants={staggerItem}
                className="bg-white p-7 sm:p-8 border border-brand-border hover:border-forest transition-all duration-300 rounded-sm shadow-subtle hover:shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-forest/70 font-mono tracking-widest">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-forest/5 flex items-center justify-center">
                      {renderPrincipleIcon(item.icon)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-text font-heading mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-subtext leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-border/60">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-forest">
                    {item.standard}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 4: Disciplined Process */}
      <section className="py-20 sm:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                <SectionHeader
                  badge="DISCIPLINED PROCESS"
                  title="Our Investment Approach"
                  subtitle="How we analyze, value, allocate, and monitor capital through independent research."
                />
                <div className="p-5 bg-brand-mutedBg border border-brand-border rounded-sm space-y-3">
                  <span className="text-xs font-semibold text-brand-text uppercase tracking-wider block">
                    Analytical Mandate
                  </span>
                  <p className="text-xs text-brand-subtext leading-relaxed">
                    Every research evaluation examines accounting quality, balance sheet durability,
                    competitive position, and valuation margin of safety prior to capital
                    commitment.
                  </p>
                  <Link
                    to="/approach"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-forest hover:underline pt-1"
                  >
                    <span>Full Research Methodology</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                {APPROACH_STEPS.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="p-6 sm:p-7 border border-brand-border hover:border-forest/80 bg-white transition-all duration-200 rounded-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-brand-text font-heading">
                        {step.title}
                      </h3>
                      <span className="text-xs font-medium text-forest uppercase tracking-wider">
                        {step.subtitle}
                      </span>
                    </div>
                    <p className="text-sm text-brand-subtext leading-relaxed mt-2">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Section 5: Business Divisions */}
      <section className="py-20 sm:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <SectionHeader
                  badge="BUSINESS ACTIVITIES"
                  title="Core Divisions &amp; Capabilities"
                  subtitle="Focused across proprietary investment, independent financial research, and OJK-aligned advisory and portfolio frameworks."
                  className="mb-0"
                />
              </div>
              <Link
                to="/divisions"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-forest hover:bg-darkgreen transition-colors rounded-sm shadow-sm shrink-0 self-start md:self-auto"
              >
                <span>View All Divisions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_DIVISIONS.map((division) => (
              <DivisionCard key={division.id} division={division} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Division Scope & Regulatory Framework (replaces fabricated metrics/charts without inventing data) */}
      <section className="py-20 sm:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                <span className="w-5 h-[1.5px] bg-forest" />
                <span>SCOPE &amp; REGULATORY ALIGNMENT</span>
                <span className="w-5 h-[1.5px] bg-forest" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-text font-heading tracking-tight">
                Operational Scope &amp; Regulatory Governance
              </h2>
              <p className="mt-3 text-sm sm:text-base text-brand-subtext">
                Clear delineation between active proprietary investment and research operations and
                activities subject to Indonesian OJK authorization.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {BUSINESS_DIVISIONS.map((division) => (
              <div
                key={division.id}
                className="p-6 bg-white border border-brand-border rounded-sm"
              >
                <span className="text-xs uppercase tracking-wider text-brand-subtext font-semibold block mb-1">
                  {division.name}
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-forest font-heading">
                  {division.isOjkGated ? "OJK-Gated" : "Active"}
                </div>
                <span className="text-[11px] text-brand-subtext mt-1 block">
                  {division.isOjkGated
                    ? "Subject to OJK authorization"
                    : division.scopeLabel}
                </span>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white border border-brand-border p-6 rounded-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-brand-border">
                <div>
                  <h3 className="font-bold text-lg text-brand-text font-heading">
                    Core Research &amp; Investment Disciplines
                  </h3>
                  <p className="text-xs text-brand-subtext mt-0.5">
                    Structured analytical capabilities across asset classes and financial research
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {BUSINESS_DIVISIONS.map((division) => (
                  <div key={division.id} className="space-y-1.5 pb-3 border-b border-brand-border/50 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-brand-text">{division.name}</span>
                      <span className="text-forest font-medium">{division.activities.length} Focus Areas</span>
                    </div>
                    <p className="text-xs text-brand-subtext">
                      {division.activities.join(" • ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-brand-border p-6 rounded-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-brand-border">
                  <div>
                    <h3 className="font-bold text-lg text-brand-text font-heading">
                      Indonesian OJK Regulatory Alignment
                    </h3>
                    <p className="text-xs text-brand-subtext mt-0.5">
                      Mandatory licensing boundary for advisory and portfolio management
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-brand-subtext leading-relaxed">
                  <div className="p-4 border border-forest/25 bg-forest/5 rounded-sm space-y-1.5">
                    <div className="flex items-center gap-2 font-semibold text-brand-text">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                      <span>Active Firm Activities</span>
                    </div>
                    <p className="text-xs text-brand-subtext">
                      Proprietary Investment (deploying firm capital across public equity, private
                      businesses, and fixed income) and Independent Financial &amp; Equity Research.
                    </p>
                  </div>

                  <div className="p-4 border border-brand-border bg-white rounded-sm space-y-1.5">
                    <div className="flex items-center gap-2 font-semibold text-brand-text">
                      <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
                      <span>OJK-Authorized Service Availability</span>
                    </div>
                    <p className="text-xs text-brand-subtext">
                      {FIRM_INFO.ojkNotice}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-subtext">
                <span>Governance &amp; Compliance Standard</span>
                <Link to="/governance" className="font-semibold text-forest hover:underline">
                  Review Framework &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Research & Insights */}
      <section className="py-20 sm:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <SectionHeader
                badge="THOUGHT LEADERSHIP"
                title="Research &amp; Market Insights"
                subtitle="Analytical notes on fundamental valuation, financial statement analysis, and disciplined capital allocation."
                className="mb-0"
              />
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest hover:text-darkgreen hover:underline shrink-0"
              >
                <span>View Research Portal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </RevealSection>

          <div className="space-y-8">
            {featuredInsight && <InsightCard article={featuredInsight} featured />}
            <div className="grid md:grid-cols-2 gap-6">
              {secondaryInsights.map((article) => (
                <InsightCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Strategic Engagement CTA */}
      <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-8 sm:p-12 lg:p-16 border border-brand-border bg-white rounded-sm overflow-hidden">
            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                <span className="w-6 h-[1.5px] bg-forest" />
                <span>STRATEGIC ENGAGEMENT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text font-heading leading-tight">
                {FIRM_INFO.tagline}
              </h2>
              <p className="text-base sm:text-lg text-brand-subtext leading-relaxed">
                Connect with Pacific Investment Capital regarding independent financial research,
                analytical perspectives, and corporate inquiries.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-forest hover:bg-darkgreen transition-colors rounded-sm shadow-sm inline-flex items-center gap-2"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/governance"
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-brand-text bg-white hover:bg-brand-mutedBg border border-brand-border rounded-sm transition-colors"
                >
                  <span>Governance &amp; Compliance</span>
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border/60 text-xs text-brand-subtext flex flex-wrap items-center justify-between gap-4">
              <span>{FIRM_INFO.name} &bull; {FIRM_INFO.positioning}</span>
              <span>{FIRM_INFO.tagline}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
