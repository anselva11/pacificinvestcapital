import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AlertTriangle, ArrowLeft, FileText, Lock, Scale } from "lucide-react";
import { FIRM_INFO } from "../data/firmData";

type LegalTab = "disclaimer" | "risk-disclosure" | "privacy" | "terms";

export default function LegalPage() {
  const pathTab = useLocation().pathname.replace("/", "") as LegalTab;
  const validTabs: LegalTab[] = ["privacy", "terms", "disclaimer", "risk-disclosure"];
  const [activeTab, setActiveTab] = useState<LegalTab>(
    validTabs.includes(pathTab) ? pathTab : "disclaimer"
  );

  useEffect(() => {
    if (validTabs.includes(pathTab)) {
      setActiveTab(pathTab);
    }
  }, [pathTab]);

  const tabs: { id: LegalTab; label: string; icon: JSX.Element }[] = [
    { id: "disclaimer", label: "Regulatory Disclaimer", icon: <Scale className="w-4 h-4" /> },
    {
      id: "risk-disclosure",
      label: "Risk Disclosure",
      icon: <AlertTriangle className="w-4 h-4" />,
    },
    { id: "privacy", label: "Privacy Policy", icon: <Lock className="w-4 h-4" /> },
    { id: "terms", label: "Terms of Use", icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-white">
      <section className="py-16 sm:py-20 bg-white border-b border-brand-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            <span className="w-5 h-[1.5px] bg-forest" />
            <span>STATUTORY &amp; REGULATORY NOTICES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text font-heading leading-tight">
            Legal, Regulatory &amp; Risk Disclosures
          </h1>
          <p className="text-sm sm:text-base text-brand-subtext max-w-3xl">
            Important regulatory notices, scope boundaries, and terms governing the use of the
            Pacific Investment Capital website.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 border-b border-brand-border scrollbar-none">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all whitespace-nowrap ${
                    active
                      ? "bg-forest text-white shadow-sm"
                      : "bg-brand-mutedBg text-brand-subtext hover:text-brand-text hover:bg-brand-border/60 border border-brand-border/60"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {activeTab === "disclaimer" && (
            <div className="max-w-none text-brand-subtext text-sm sm:text-base leading-relaxed space-y-6">
              <h2 className="text-2xl font-bold font-heading text-brand-text">
                General Regulatory Disclaimer
              </h2>
              <p>
                Materials published on this website are provided solely for general informational
                purposes by <strong>{FIRM_INFO.name}</strong>, an independent investment and
                financial research firm. Nothing on this website constitutes an offer to buy or
                sell, or a solicitation to purchase, any security or financial product.
              </p>
              <h3 className="text-xl font-bold font-heading text-brand-text mt-6">
                Indonesian OJK Authorization Notice
              </h3>
              <p>{FIRM_INFO.ojkNotice}</p>
              <h3 className="text-xl font-bold font-heading text-brand-text mt-6">
                Independent Research Information
              </h3>
              <p>
                Analytical research perspectives do not constitute personalized investment advice and
                do not take into account the specific financial objectives or situation of any
                reader.
              </p>
            </div>
          )}

          {activeTab === "risk-disclosure" && (
            <div className="max-w-none text-brand-subtext text-sm sm:text-base leading-relaxed space-y-6">
              <h2 className="text-2xl font-bold font-heading text-brand-text">
                Investment Risk Factors
              </h2>
              <p>
                Investing across public equities, private businesses, and fixed income instruments
                involves substantial risk, including macroeconomic uncertainty, liquidity
                constraints, credit deterioration, and the potential loss of principal.
              </p>
              <h3 className="text-xl font-bold font-heading text-brand-text mt-6">
                Analytical Assumptions
              </h3>
              <p>
                Financial statement analyses, valuations, and industry evaluations reflect reasoned
                judgments at a point in time and remain subject to changing market and economic
                conditions.
              </p>
            </div>
          )}

          {activeTab === "privacy" && (
            <div className="max-w-none text-brand-subtext text-sm sm:text-base leading-relaxed space-y-6">
              <h2 className="text-2xl font-bold font-heading text-brand-text">
                Privacy &amp; Data Protection Policy
              </h2>
              <p>
                {FIRM_INFO.name} respects the privacy and confidentiality of information submitted
                through this website, including contact inquiries and research update requests.
              </p>
              <h3 className="text-xl font-bold font-heading text-brand-text mt-6">
                Use of Information
              </h3>
              <p>
                Contact details submitted voluntarily are used strictly to respond to inquiries or
                share requested research updates and are never sold or distributed to third-party
                marketers.
              </p>
            </div>
          )}

          {activeTab === "terms" && (
            <div className="max-w-none text-brand-subtext text-sm sm:text-base leading-relaxed space-y-6">
              <h2 className="text-2xl font-bold font-heading text-brand-text">
                Terms of Website Use
              </h2>
              <p>
                By accessing this website, you agree to use its content strictly for lawful
                informational purposes and in accordance with these Terms of Use.
              </p>
              <h3 className="text-xl font-bold font-heading text-brand-text mt-6">
                Intellectual Property
              </h3>
              <p>
                All editorial copy, research notes, visual marks, and layouts on this website remain
                the property of {FIRM_INFO.name}.
              </p>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-brand-border">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
