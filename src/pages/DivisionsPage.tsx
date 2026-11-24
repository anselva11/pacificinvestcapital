import { useState } from "react";
import { CheckCircle2, Search, ShieldAlert } from "lucide-react";
import DivisionCard from "../components/DivisionCard";
import SectionHeader from "../components/SectionHeader";
import { RevealSection } from "../components/Motion";
import { BUSINESS_DIVISIONS, DIVISION_CATEGORIES, FIRM_INFO } from "../data/firmData";

export default function DivisionsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = BUSINESS_DIVISIONS.filter((division) => {
    const matchesCat = activeCategory === "all" || division.category === activeCategory;
    const q = query.toLowerCase();
    const matchesQuery =
      division.name.toLowerCase().includes(q) ||
      division.description.toLowerCase().includes(q) ||
      division.activities.some((act) => act.toLowerCase().includes(q));
    return matchesCat && matchesQuery;
  });

  return (
    <div className="bg-white">
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              <span className="w-5 h-[1.5px] bg-forest" />
              <span>BUSINESS ACTIVITIES</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text font-heading leading-tight tracking-tight">
              Business Divisions &amp; Core Capabilities.
            </h1>
            <p className="text-base sm:text-lg text-brand-subtext leading-relaxed max-w-3xl">
              Pacific Investment Capital structures its activities across proprietary investment,
              independent financial research, and OJK-governed advisory and portfolio frameworks.
            </p>
          </div>
        </div>
      </section>

      <section id="overview" className="py-16 sm:py-20 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-text font-heading">
                  Division Directory
                </h2>
                <p className="text-xs sm:text-sm text-brand-subtext mt-1">
                  Showing {filtered.length} of {BUSINESS_DIVISIONS.length} business divisions
                </p>
              </div>

              <div className="relative max-w-xs w-full">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-brand-subtext" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search division or activity..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-brand-border focus:border-forest focus:outline-none rounded-sm"
                />
              </div>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-brand-border/60 scrollbar-none">
              {DIVISION_CATEGORIES.map((cat) => {
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all whitespace-nowrap ${
                      active
                        ? "bg-forest text-white shadow-sm"
                        : "bg-brand-mutedBg text-brand-subtext hover:text-brand-text hover:bg-brand-border/60 border border-brand-border/60"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((division) => (
                <DivisionCard key={division.id} division={division} />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center border border-dashed border-brand-border rounded-sm">
              <p className="text-sm text-brand-subtext">
                No divisions or activities matched your search criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setQuery("");
                }}
                className="mt-3 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-forest underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <SectionHeader
              badge="DETAILED ACTIVITIES"
              title="Scope of Each Business Division"
              subtitle="Structured capabilities across proprietary deployment, fundamental research, and regulated service prerequisites."
            />
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-8">
            {BUSINESS_DIVISIONS.map((division) => (
              <div
                key={division.id}
                id={division.category}
                className="p-6 sm:p-8 bg-white border border-brand-border rounded-sm shadow-subtle space-y-5 flex flex-col justify-between scroll-mt-24"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-brand-border/70">
                    <h3 className="text-xl font-bold text-brand-text font-heading">
                      {division.name}
                    </h3>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-forest bg-forest/10 px-2.5 py-0.5 rounded">
                      {division.isOjkGated ? "OJK Authorization Required" : "Active Division"}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-subtext leading-relaxed">
                    {division.description}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-2.5 pt-1">
                    {division.activities.map((activity) => (
                      <li
                        key={activity}
                        className="flex items-center gap-2 text-xs text-brand-text font-medium p-2.5 border border-brand-border/80 rounded-sm"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {division.isOjkGated && division.regulatoryNote && (
                  <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-sm text-xs text-emerald-950 flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <span>{division.regulatoryNote}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-forest">
            INDONESIAN OJK COMPLIANCE
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-text font-heading">
            Clear Regulatory Authorization Standards
          </h3>
          <p className="text-xs sm:text-sm text-brand-subtext leading-relaxed max-w-2xl mx-auto">
            {FIRM_INFO.ojkNotice}
          </p>
        </div>
      </section>
    </div>
  );
}
