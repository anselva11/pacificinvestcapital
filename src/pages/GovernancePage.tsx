import { CheckCircle2, Scale, ShieldCheck } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { RevealSection } from "../components/Motion";
import { FIRM_INFO } from "../data/firmData";

const COMPLIANCE_PILLARS = [
  {
    title: "Analytical Independence",
    description:
      "Research conclusions and valuation models are produced independently, free from external product distribution or brokerage pressures.",
  },
  {
    title: "Regulatory Boundaries",
    description:
      "Strict separation between proprietary investment and research activities versus regulated services requiring Indonesian OJK authorization.",
  },
  {
    title: "Conflict Management",
    description:
      "Clear internal controls governing proprietary positions, research objectivity, and confidential corporate or analytical information.",
  },
  {
    title: "Ethical Conduct",
    description:
      "Zero-tolerance commitment regarding market integrity, anti-corruption standards, and transparent communication.",
  },
];

export default function GovernancePage() {
  return (
    <div className="bg-white">
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              <span className="w-5 h-[1.5px] bg-forest" />
              <span>STEWARDSHIP &amp; INTEGRITY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text font-heading leading-tight tracking-tight">
              Governance, Research Independence &amp; Regulatory Alignment.
            </h1>
            <p className="text-base sm:text-lg text-brand-subtext leading-relaxed max-w-3xl">
              Pacific Investment Capital upholds strict analytical integrity, conservative risk
              oversight, and transparent alignment with Indonesian financial services regulations.
            </p>
          </div>
        </div>
      </section>

      <section id="framework" className="py-20 sm:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 space-y-6">
                <SectionHeader
                  badge="GOVERNANCE ARCHITECTURE"
                  title="Internal Oversight &amp; Analytical Standards"
                  subtitle="Structured review processes ensuring rigorous methodology and clear regulatory accountability."
                />
                <div className="p-5 bg-white border border-brand-border rounded-sm space-y-2">
                  <span className="text-xs font-bold text-brand-text uppercase tracking-wider block">
                    Firm Positioning
                  </span>
                  <p className="text-xs text-brand-subtext leading-relaxed">
                    Pacific Investment Capital operates as an independent investment and financial
                    research firm dedicated to building long-term value.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <div className="p-6 border border-brand-border rounded-sm hover:border-forest transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-brand-text font-heading">
                      1. Research Methodology Oversight
                    </h3>
                    <span className="text-[11px] font-semibold text-forest uppercase tracking-wider bg-forest/10 px-2.5 py-0.5 rounded">
                      Core Standard
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-subtext leading-relaxed">
                    Ensures equity research, financial statement analysis, and company valuations are
                    supported by documented primary sources, verifiable accounting data, and
                    stress-tested assumptions.
                  </p>
                </div>

                <div className="p-6 border border-brand-border rounded-sm hover:border-forest transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-brand-text font-heading">
                      2. Proprietary Capital Review
                    </h3>
                    <span className="text-[11px] font-semibold text-forest uppercase tracking-wider bg-forest/10 px-2.5 py-0.5 rounded">
                      Principal Oversight
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-subtext leading-relaxed">
                    Governs public equity, private business, and fixed income allocations made with
                    firm capital, enforcing downside risk limits and ongoing monitoring.
                  </p>
                </div>

                <div className="p-6 border border-brand-border rounded-sm hover:border-forest transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-brand-text font-heading">
                      3. Regulatory Scope &amp; Licensing Governance
                    </h3>
                    <span className="text-[11px] font-semibold text-forest uppercase tracking-wider bg-forest/10 px-2.5 py-0.5 rounded">
                      OJK Alignment
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-subtext leading-relaxed">
                    Maintains strict compliance verification so that regulated investment advisory
                    and portfolio management services are offered solely once required Indonesian OJK
                    authorization is obtained.
                  </p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <section id="regulatory" className="py-20 sm:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                badge="OJK REGULATORY ALIGNMENT"
                title="Indonesian Financial Services Authorization"
                subtitle="Transparent representation of currently active operations versus OJK-authorized services."
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="p-6 border border-forest/30 bg-forest/5 rounded-sm space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-brand-text font-heading">
                  <CheckCircle2 className="w-4 h-4 text-forest" />
                  <span>Proprietary Investment &amp; Independent Research</span>
                </div>
                <p className="text-xs sm:text-sm text-brand-subtext leading-relaxed">
                  Conducted on the firm&rsquo;s own behalf and through independent financial,
                  company valuation, and industry research capabilities.
                </p>
              </div>

              <div className="p-6 border border-brand-border bg-white rounded-sm space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-brand-text font-heading">
                  <Scale className="w-4 h-4 text-forest" />
                  <span>Regulated Investment Advisory &amp; Portfolio Management</span>
                </div>
                <p className="text-xs sm:text-sm text-brand-subtext leading-relaxed">
                  {FIRM_INFO.ojkNotice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="independence" className="py-20 sm:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="ANALYTICAL INDEPENDENCE"
            title="Objectivity in Financial Research"
            subtitle="Separating research judgment from commercial conflicts."
          />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-brand-border rounded-sm space-y-2">
              <h4 className="font-bold text-base text-brand-text font-heading">
                Primary Data Discipline
              </h4>
              <p className="text-xs text-brand-subtext leading-relaxed">
                Research opinions rely on audited financial filings, primary operational metrics, and
                verifiable industry data.
              </p>
            </div>
            <div className="p-6 border border-brand-border rounded-sm space-y-2">
              <h4 className="font-bold text-base text-brand-text font-heading">
                No Fabricated Claims
              </h4>
              <p className="text-xs text-brand-subtext leading-relaxed">
                Pacific Investment Capital communicates accurately without overstated performance,
                unverified track records, or implied regulatory licenses.
              </p>
            </div>
            <div className="p-6 border border-brand-border rounded-sm space-y-2">
              <h4 className="font-bold text-base text-brand-text font-heading">
                Long-Term Alignment
              </h4>
              <p className="text-xs text-brand-subtext leading-relaxed">
                Analytical frameworks prioritize multi-year capital durability and sound corporate
                governance over short-term market volatility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="compliance" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <SectionHeader
              badge="CODE OF CONDUCT"
              title="Compliance, Ethics &amp; Transparency Principles"
              subtitle="Foundational standards guiding daily conduct across the firm."
              align="center"
            />
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {COMPLIANCE_PILLARS.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 border border-brand-border rounded-sm shadow-subtle space-y-3"
              >
                <ShieldCheck className="w-6 h-6 text-forest" />
                <h4 className="font-bold text-base text-brand-text font-heading">{item.title}</h4>
                <p className="text-xs text-brand-subtext leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
