import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Check, ChevronRight, Clock, Share2 } from "lucide-react";
import InsightCard from "../components/InsightCard";
import { INSIGHT_ARTICLES } from "../data/firmData";

export default function InsightDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [copied, setCopied] = useState(false);

  const article = INSIGHT_ARTICLES.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold text-brand-text mb-4 font-heading">
          Publication Not Found
        </h2>
        <p className="text-sm text-brand-subtext mb-6">
          The requested research note or insight could not be located.
        </p>
        <Link
          to="/insights"
          className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-forest hover:bg-darkgreen rounded-sm transition-colors inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Research Portal</span>
        </Link>
      </div>
    );
  }

  const related = INSIGHT_ARTICLES.filter((item) => item.id !== article.id).slice(0, 2);

  const handleCopy = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <article className="bg-white">
      <div className="bg-white border-b border-brand-border py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-brand-subtext">
            <Link to="/" className="hover:text-forest">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/insights" className="hover:text-forest">
              Research &amp; Insights
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-text truncate max-w-xs">{article.categoryLabel}</span>
          </div>
        </div>
      </div>

      <header className="py-12 sm:py-16 border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-forest/10 text-forest text-xs font-semibold uppercase tracking-wider rounded-sm border border-forest/20">
              {article.categoryLabel}
            </span>
            <span className="text-xs text-brand-subtext flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
            <span className="text-xs text-brand-subtext flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-text font-heading leading-tight tracking-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-brand-subtext leading-relaxed">
            {article.summary}
          </p>

          <div className="pt-4 flex items-center justify-between border-t border-brand-border/60 text-xs">
            <span className="font-medium text-brand-text">{article.author}</span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-brand-border hover:border-forest rounded-sm text-brand-text hover:text-forest transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? "Link Copied" : "Share"}</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 my-10">
        <div className="relative h-72 sm:h-96 md:h-[460px] w-full rounded-sm overflow-hidden border border-brand-border">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <div className="space-y-6 text-brand-text text-base sm:text-lg leading-relaxed font-body">
          {article.content.split("\n\n").map((block, index) => {
            const trimmed = block.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith("### ")) {
              return (
                <h3
                  key={index}
                  className="text-2xl font-bold font-heading text-brand-text mt-8 mb-3"
                >
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }

            if (trimmed.startsWith("#### ")) {
              return (
                <h4
                  key={index}
                  className="text-xl font-bold font-heading text-brand-text mt-6 mb-2"
                >
                  {trimmed.replace("#### ", "")}
                </h4>
              );
            }

            if (trimmed.startsWith("- ")) {
              const items = trimmed.split("\n- ").map((item) => item.replace(/^- /, ""));
              return (
                <ul
                  key={index}
                  className="space-y-2 text-sm sm:text-base text-brand-subtext my-4 pl-4 border-l-2 border-forest"
                >
                  {items.map((item, i) => (
                    <li key={i}>{item.replace(/\*\*/g, "")}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={index} className="text-sm sm:text-base text-brand-text/90 leading-relaxed">
                {trimmed}
              </p>
            );
          })}
        </div>

        {article.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-brand-border">
            <span className="text-xs font-semibold uppercase tracking-wider text-forest block mb-3">
              Research Topics
            </span>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs bg-brand-mutedBg text-brand-subtext border border-brand-border rounded-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 pt-6 border-t border-brand-border flex justify-between items-center">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Insights</span>
          </Link>
        </div>
      </div>

      {related.length > 0 && (
        <section className="py-16 bg-white border-t border-brand-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-brand-text font-heading">
                Related Perspectives
              </h3>
              <Link
                to="/insights"
                className="text-xs font-semibold uppercase tracking-wider text-forest hover:underline"
              >
                View Portal
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((item) => (
                <InsightCard key={item.id} article={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
