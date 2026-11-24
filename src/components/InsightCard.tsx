import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { InsightArticle } from "../data/firmData";

interface InsightCardProps {
  article: InsightArticle;
  featured?: boolean;
}

export default function InsightCard({ article, featured = false }: InsightCardProps) {
  if (featured) {
    return (
      <div className="group bg-white border border-brand-border hover:border-forest transition-all duration-300 rounded-sm overflow-hidden shadow-subtle hover:shadow-card grid md:grid-cols-12 gap-0">
        <div className="md:col-span-7 relative h-64 md:h-full min-h-[300px] overflow-hidden bg-brand-mutedBg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-forest text-white font-semibold text-[10px] tracking-[0.15em] uppercase rounded-sm">
              Featured Insight
            </span>
          </div>
        </div>

        <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs text-brand-subtext mb-3">
              <span className="font-semibold text-forest uppercase tracking-wider text-[11px]">
                {article.categoryLabel}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.date}</span>
              </span>
            </div>

            <Link to={`/insights/${article.id}`}>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-text group-hover:text-forest transition-colors font-heading leading-snug mb-3">
                {article.title}
              </h3>
            </Link>

            <p className="text-sm text-brand-subtext leading-relaxed line-clamp-3 mb-6">
              {article.summary}
            </p>
          </div>

          <div className="pt-4 border-t border-brand-border flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-brand-subtext">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
            <Link
              to={`/insights/${article.id}`}
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-forest group-hover:text-darkgreen hover:underline"
            >
              <span>Read Full Perspective</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white border border-brand-border hover:border-forest transition-all duration-300 flex flex-col h-full rounded-sm overflow-hidden shadow-subtle hover:shadow-card">
      <div className="relative h-48 w-full overflow-hidden bg-brand-mutedBg">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-0.5 bg-white/95 backdrop-blur-sm text-forest font-semibold text-[10px] tracking-wider uppercase rounded-sm border border-brand-border/60">
            {article.categoryLabel}
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-[11px] text-brand-subtext mb-2">
          <span>{article.date}</span>
          <span>&bull;</span>
          <span>{article.readTime}</span>
        </div>

        <Link to={`/insights/${article.id}`} className="mb-2.5">
          <h3 className="text-base sm:text-lg font-bold text-brand-text group-hover:text-forest transition-colors font-heading line-clamp-2 leading-snug">
            {article.title}
          </h3>
        </Link>

        <p className="text-xs sm:text-sm text-brand-subtext leading-relaxed line-clamp-2 mb-4 flex-grow">
          {article.summary}
        </p>

        <div className="pt-3 border-t border-brand-border/80 flex items-center justify-between mt-auto">
          <span className="text-[11px] text-brand-subtext truncate max-w-[160px]">
            {article.author}
          </span>
          <Link
            to={`/insights/${article.id}`}
            className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-forest group-hover:text-darkgreen hover:underline"
          >
            <span>Read Article</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
