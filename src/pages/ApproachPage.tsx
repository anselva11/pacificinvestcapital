import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { RevealSection } from "../components/Motion";
import { FIRM_INFO, PHILOSOPHY_PRINCIPLES } from "../data/firmData";

const RESEARCH_STAGES = [
  {
    step: "01",
    title: "Industry & Macro Context",
    desc: "Mapping industry structure, competitive intensity, unit economics, and regulatory dynamics before evaluating individual issuers.",
  },
  {
    step: "02",
    title: "Financial Statement Analysis",
    desc: "Auditing multi-year income statements, cash flow conversion, working capital trends, and balance sheet obligations.",
  },
  {
    step: "03",
    title: "Fundamental Quality Assessment",
    desc: "Evaluating durability of competitive advantages, pricing power, capital intensity, and management capital allocation history.",
  },
  {
    step: "04",
    title: "Company Valuation Modeling",
    desc: "Constructing conservative discounted cash flow, return on invested capital, and replacement-value valuation ranges.",
  },
  {
    step: "05",
    title: "Downside & Stress Analysis",
    desc: "Testing cash flow resilience and debt serviceability across adverse revenue, margin, and interest-rate scenarios.",
  },
  {
    step: "06",
    title: "Ongoing Monitoring & Review",
    desc: "Continuous tracking of operational milestones, industry shifts, and valuation discipline against original thesis assumptions.",
  },
];

const RISK_FRAMEWORK = [
  {
    category: "Valuation & Permanent Loss Risk",
    mitigation:
      "Conservative base-case valuation assumptions, explicit margin-of-safety thresholds, and avoidance of speculative multiple expansion reliance.",
  },
  {
    category: "Balance Sheet & Credit Risk",
    mitigation:
      "Detailed debt maturity mapping, interest coverage verification, and preference for resilient capital structures across economic cycles.",
  },
  {
    category: "Business & Industry Disruption Risk",
    mitigation:
      "Continuous industry research, competitive moat re-validation, and objective reassessment when underlying fundamentals deteriorate.",
  },
  {
    category: "Regulatory & Compliance Risk",
    mitigation:
      "Strict operational separation ensuring regulated investment advisory and portfolio management are offered only once required Indonesian OJK authorization is obtained.",
  },
];

export default function ApproachPage() {
  return (
    <div className="bg-white">
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              <span className="w-5 h-[1.5px] bg-forest" />
              <span>INVESTMENT &amp; RESEARCH METHODOLOGY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text font-heading leading-tight tracking-tight">
              A Disciplined, Research-First Framework for Long-Term Value.
            </h1>
            <p className="text-base sm:text-lg text-brand-subtext leading-relaxed max-w-3xl">
              Pacific Investment Capital integrates fundamental research, financial statement
              analysis, and conservative valuation discipline across proprietary investments and
              analytical services.
            </p>
          </div>
        </div>
      </section>

      <section id="philosophy" className="py-20 sm:py-24 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <SectionHeader
              badge="FOUNDATIONAL PHILOSOPHY"
              title="Four Core Principles of Our Approach"
              subtitle="Every analytical study and proprietary capital allocation is guided by rigorous fundamental discipline."
            />
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY_PRINCIPLES.map((item) => (
              <div
                key={item.number}
                className="p-7 bg-white border border-brand-border hover:border-forest transition-colors rounded-sm shadow-subtle space-y-4"
              >
                <span className="text-xs font-bold text-forest font-mono tracking-widest">
                  {item.number}
                </span>
                <h3 className="text-lg font-bold text-brand-text font-heading">{item.title}</h3>
                <p className="text-xs sm:text-sm text-brand-subtext leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="allocation" className="py-20 sm:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <SectionHeader
                  badge="PROPRIETARY ALLOCATION"
                  title="Selective Capital Allocation Across Asset Classes"
                  subtitle="Pacific Investment Capital deploys proprietary firm capital across public equities, private businesses, and fixed income instruments."
                />
                <div className="space-y-3 text-sm text-brand-subtext leading-relaxed">
                  <p>
                    Capital is allocated only where thorough fundamental analysis demonstrates both
                    durable business economics and a compelling price relative to intrinsic value.
                  </p>
                  <p>
                    Patient proprietary capital allows the firm to evaluate opportunities over
                    multi-year horizons without forced short-term liquidity constraints.
                  </p>
                </div>
                <div className="p-4 bg-white border border-brand-border rounded-sm">
                  <span className="text-xs font-bold text-forest uppercase tracking-wider block mb-1">
                    Regulatory Distinction
                  </span>
                  <p className="text-xs text-brand-subtext">{FIRM_INFO.ojkNotice}</p>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-brand-border rounded-sm shadow-card space-y-6">
                <div className="flex items-center justify-between border-b border-brand-border pb-4">
                  <h3 className="font-bold text-base text-brand-text font-heading">
                    Proprietary Investment Scope
                  </h3>
                  <span className="text-xs font-medium text-forest uppercase tracking-wider">
                    Principal Focus
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 border border-forest/30 bg-forest/5 rounded-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-forest">Public Equity Investment</span>
                      <span className="text-xs font-medium text-brand-subtext">
                        Fundamental Conviction
                      </span>
                    </div>
                    <p className="text-xs text-brand-subtext">
                      Selective listed equity investments underpinned by bottom-up company valuation
                      and durable competitive positioning.
                    </p>
                  </div>

                  <div className="p-4 border border-darkgreen/30 bg-darkgreen/5 rounded-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-darkgreen">
                        Private Business Investment
                      </span>
                      <span className="text-xs font-medium text-brand-subtext">
                        Long-Term Partnership
                      </span>
                    </div>
                    <p className="text-xs text-brand-subtext">
                      Direct proprietary evaluation of operating businesses with resilient cash flows
                      and disciplined governance.
                    </p>
                  </div>

                  <div className="p-4 border border-emeraldAccent/30 bg-emeraldAccent/5 rounded-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-forest">Fixed Income Investment</span>
                      <span className="text-xs font-medium text-brand-subtext">
                        Capital Preservation
                      </span>
                    </div>
                    <p className="text-xs text-brand-subtext">
                      Credit-focused instruments evaluated on debt serviceability, balance sheet
                      strength, and downside protection.
                    </p>
                  </div>

                  <div className="p-4 border border-brand-border bg-white rounded-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-slate-700">
                        Strategic Capital Allocation
                      </span>
                      <span className="text-xs font-medium text-brand-subtext">
                        Cross-Cycle Discipline
                      </span>
                    </div>
                    <p className="text-xs text-brand-subtext">
                      Thoughtful allocation of proprietary capital balanced across opportunity cost,
                      liquidity, and risk-adjusted value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <section id="process" className="py-20 sm:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <SectionHeader
              badge="ANALYTICAL FUNNEL"
              title="Six-Stage Research &amp; Valuation Process"
              subtitle="Every investment study and valuation assessment follows a structured, repeatable analytical sequence."
              align="center"
            />
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {RESEARCH_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="p-6 bg-white border border-brand-border hover:border-forest transition-colors rounded-sm space-y-3"
              >
                <span className="text-xs font-mono font-bold text-forest bg-forest/10 px-2 py-0.5 rounded">
                  STAGE {stage.step}
                </span>
                <h4 className="text-base font-bold text-brand-text font-heading">{stage.title}</h4>
                <p className="text-xs sm:text-sm text-brand-subtext leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="risk" className="py-20 sm:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="max-w-3xl mb-12">
              <SectionHeader
                badge="RISK GOVERNANCE"
                title="Structured Risk Assessment Framework"
                subtitle="Capital preservation and regulatory discipline underpin every stage of research and proprietary deployment."
              />
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-6">
            {RISK_FRAMEWORK.map((item) => (
              <div
                key={item.category}
                className="p-6 sm:p-7 bg-white border border-brand-border rounded-sm shadow-subtle space-y-3"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-forest" />
                  <h4 className="text-base font-bold text-brand-text font-heading">
                    {item.category}
                  </h4>
                </div>
                <div className="pt-2 border-t border-brand-border/60">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-forest block mb-1">
                    Analytical Control
                  </span>
                  <p className="text-xs sm:text-sm text-brand-subtext leading-relaxed">
                    {item.mitigation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                badge="CORE DIVISIONS"
                title="Connecting Research to Long-Term Capital Stewardship"
                subtitle="Explore how our proprietary investment, independent financial research, and OJK-aligned divisions work together."
              />
              <p className="text-sm text-brand-subtext leading-relaxed">
                Pacific Investment Capital keeps analytical integrity at the center of every
                activity—ensuring clear regulatory demarcation while building long-term value.
              </p>
              <div className="pt-2">
                <Link
                  to="/divisions"
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-forest hover:bg-darkgreen rounded-sm transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore Business Divisions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-8 border border-brand-border rounded-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-forest">
                Analytical Standards
              </span>
              <ul className="space-y-3 text-xs sm:text-sm text-brand-subtext">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span>
                    Evidence-driven equity research, fundamental analysis, and financial statement
                    forensics.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span>
                    Conservative intrinsic valuation and stress-tested downside modeling.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span>
                    Strict compliance with Indonesian OJK authorization requirements for regulated
                    advisory and portfolio management services.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
