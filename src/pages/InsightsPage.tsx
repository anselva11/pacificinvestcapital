import { useState } from "react";
import { Search } from "lucide-react";
import InsightCard from "../components/InsightCard";
import { INSIGHT_ARTICLES, INSIGHT_CATEGORIES } from "../data/firmData";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = INSIGHT_ARTICLES.filter((article) => {
    const matchesCat = selectedCategory === "all" || article.category === selectedCategory;
    const q = query.toLowerCase();
    const matchesQuery =
      article.title.toLowerCase().includes(q) ||
      article.summary.toLowerCase().includes(q) ||
      article.content.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  const featured = filtered.find((item) => item.featured) || filtered[0];
  const rest = filtered.filter((item) => item.id !== featured?.id);

  return (
    <div className="bg-white">
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              <span className="w-5 h-[1.5px] bg-forest" />
              <span>RESEARCH PORTAL &amp; PERSPECTIVES</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text font-heading leading-tight tracking-tight">
              Investment Research &amp; Market Insights.
            </h1>
            <p className="text-base sm:text-lg text-brand-subtext leading-relaxed max-w-3xl">
              Analytical notes on fundamental analysis, company valuation, fixed income credit
              discipline, and governance frameworks from Pacific Investment Capital.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-brand-border">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {INSIGHT_CATEGORIES.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
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

            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-brand-subtext" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search research & insights..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-brand-border focus:border-forest focus:outline-none rounded-sm"
              />
            </div>
          </div>

          {featured && selectedCategory === "all" && !query && (
            <div className="mb-14">
              <InsightCard article={featured} featured />
            </div>
          )}

          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {(selectedCategory === "all" && !query ? rest : filtered).map((article) => (
                <InsightCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center border border-dashed border-brand-border rounded-sm">
              <p className="text-sm text-brand-subtext">
                No research articles matched your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setQuery("");
                }}
                className="mt-3 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-forest underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
