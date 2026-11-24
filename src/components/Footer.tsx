import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Mail, MapPin } from "lucide-react";
import { FIRM_INFO } from "../data/firmData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-white border-t border-brand-border text-brand-text">
      <div className="border-b border-brand-border bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest block mb-1">
                RESEARCH &amp; CORPORATE UPDATES
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-brand-text">
                Receive Research Perspectives &amp; Firm Updates
              </h3>
              <p className="text-xs sm:text-sm text-brand-subtext mt-1 max-w-xl">
                Subscribe to analytical notes, market insights, and formal announcements from Pacific
                Investment Capital.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@institution.com"
                className="px-3.5 py-2.5 text-xs bg-white border border-brand-border focus:border-forest focus:outline-none rounded-sm flex-grow"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-forest hover:bg-darkgreen text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shrink-0 shadow-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

          {subscribed && (
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Thank you. Your email address has been recorded for future research and firm updates.
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt={`${FIRM_INFO.name} Logo`}
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-sm sm:text-base tracking-[-0.03em] text-brand-text uppercase leading-tight">
                  {FIRM_INFO.shortLine1}
                </span>
                <span className="text-[10px] font-semibold tracking-[0.22em] text-forest uppercase leading-tight">
                  {FIRM_INFO.shortLine2}
                </span>
              </div>
            </Link>

            <p className="text-xs text-brand-subtext leading-relaxed max-w-sm pt-2">
              {FIRM_INFO.heroSupporting}
            </p>

            <div className="text-xs text-brand-subtext space-y-1.5 pt-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-forest shrink-0" />
                <span>
                  {FIRM_INFO.contact.city}, {FIRM_INFO.contact.country}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-forest shrink-0" />
                <span>{FIRM_INFO.contact.email}</span>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-text font-heading border-b border-brand-border/80 pb-2">
              Firm
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="text-brand-subtext hover:text-forest transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/approach" className="text-brand-subtext hover:text-forest transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link to="/divisions" className="text-brand-subtext hover:text-forest transition-colors">
                  Business Divisions
                </Link>
              </li>
              <li>
                <Link
                  to="/about#vision-mission"
                  className="text-brand-subtext hover:text-forest transition-colors"
                >
                  Vision &amp; Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/about#core-values"
                  className="text-brand-subtext hover:text-forest transition-colors"
                >
                  Core Values
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-text font-heading border-b border-brand-border/80 pb-2">
              Activities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/divisions#proprietary"
                  className="text-brand-subtext hover:text-forest transition-colors"
                >
                  Proprietary Investment
                </Link>
              </li>
              <li>
                <Link
                  to="/divisions#research"
                  className="text-brand-subtext hover:text-forest transition-colors"
                >
                  Investment Research
                </Link>
              </li>
              <li>
                <Link
                  to="/divisions#advisory"
                  className="text-brand-subtext hover:text-forest transition-colors"
                >
                  Investment Advisory
                </Link>
              </li>
              <li>
                <Link
                  to="/divisions#portfolio"
                  className="text-brand-subtext hover:text-forest transition-colors"
                >
                  Portfolio Management
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-brand-subtext hover:text-forest transition-colors">
                  Research &amp; Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-subtext hover:text-forest transition-colors">
                  Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-text font-heading border-b border-brand-border/80 pb-2">
              Legal &amp; Compliance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/governance" className="text-brand-subtext hover:text-forest transition-colors">
                  Governance &amp; OJK Notice
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-brand-subtext hover:text-forest transition-colors">
                  Regulatory Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  to="/risk-disclosure"
                  className="text-brand-subtext hover:text-forest transition-colors"
                >
                  Risk Disclosure
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-brand-subtext hover:text-forest transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-brand-subtext hover:text-forest transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 p-4 border border-brand-border rounded-sm text-[11px] text-brand-subtext leading-relaxed">
          <strong className="text-brand-text font-semibold">Regulatory Scope Notice:</strong>{" "}
          {FIRM_INFO.ojkNotice}
        </div>

        <div className="mt-8 pt-6 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-subtext gap-4">
          <p>&copy; 2026 {FIRM_INFO.name}. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span>{FIRM_INFO.positioning}</span>
            <span>&bull;</span>
            <span>{FIRM_INFO.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
