import { FormEvent, useState } from "react";
import { CheckCircle2, Mail, MapPin, Send, ShieldCheck } from "lucide-react";
import { FIRM_INFO } from "../data/firmData";

interface FormErrors {
  fullName?: string;
  company?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.company.trim()) nextErrors.company = "Company / Organization name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = "Please provide a valid email address.";
    }
    if (!form.message.trim() || form.message.trim().length < 15) {
      nextErrors.message = "Message must be at least 15 characters.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setForm({
      fullName: "",
      company: "",
      email: "",
      subject: "general",
      message: "",
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <div className="bg-white">
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              <span className="w-5 h-[1.5px] bg-forest" />
              <span>CORPORATE ENGAGEMENT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text font-heading leading-tight tracking-tight">
              Connect with Pacific Investment Capital.
            </h1>
            <p className="text-base sm:text-lg text-brand-subtext leading-relaxed max-w-3xl">
              We welcome inquiries regarding independent financial research, analytical
              collaboration, corporate investment research, and general firm communications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-forest block mb-2">
                  CORPORATE OFFICE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-text font-heading">
                  Pacific Investment Capital
                </h2>
                <div className="mt-4 p-5 bg-brand-mutedBg border border-brand-border rounded-sm space-y-3 text-xs sm:text-sm">
                  <p className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <span>
                      {FIRM_INFO.contact.address}
                      <br />
                      {FIRM_INFO.contact.city}, {FIRM_INFO.contact.country}
                    </span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-forest shrink-0" />
                    <span>{FIRM_INFO.contact.email}</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-text font-heading block border-b border-brand-border pb-2">
                  Inquiry Channels
                </span>
                <div className="space-y-3 text-xs">
                  <div className="p-4 border border-brand-border rounded-sm">
                    <span className="font-semibold text-brand-text block mb-1">
                      Investment Research &amp; Insights
                    </span>
                    <p className="text-brand-subtext mb-1.5">
                      For equity research, fundamental analysis, and corporate investment research
                      inquiries.
                    </p>
                    <span className="text-forest font-medium">
                      {FIRM_INFO.contact.researchEmail}
                    </span>
                  </div>

                  <div className="p-4 border border-brand-border rounded-sm">
                    <span className="font-semibold text-brand-text block mb-1">
                      General &amp; Proprietary Investment Inquiries
                    </span>
                    <p className="text-brand-subtext mb-1.5">
                      For business evaluation discussions and corporate correspondence.
                    </p>
                    <span className="text-forest font-medium">{FIRM_INFO.contact.email}</span>
                  </div>

                  <div className="p-4 border border-brand-border rounded-sm">
                    <span className="font-semibold text-brand-text block mb-1">
                      Governance &amp; Compliance
                    </span>
                    <p className="text-brand-subtext mb-1.5">
                      For regulatory and governance-related communications.
                    </p>
                    <span className="text-forest font-medium">
                      {FIRM_INFO.contact.complianceEmail}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-forest/5 border border-forest/20 rounded-sm text-xs text-brand-text leading-relaxed">
                <span className="font-semibold uppercase tracking-wider block mb-1 text-forest">
                  OJK Regulatory Notice
                </span>
                {FIRM_INFO.ojkNotice}
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-brand-border rounded-sm shadow-subtle">
              <div className="mb-8">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest block mb-1">
                  DIRECT INQUIRY
                </span>
                <h3 className="text-2xl font-bold text-brand-text font-heading">
                  Submit a Corporate Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-brand-subtext mt-1">
                  Please complete the form below and our team will review your correspondence.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-sm text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950 font-heading">
                    Inquiry Received
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{form.fullName}</strong>. Your inquiry has been recorded for
                    review by Pacific Investment Capital.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-forest hover:bg-darkgreen text-white rounded-sm transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-brand-text uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        placeholder="Your full name"
                        className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-sm focus:outline-none transition-colors ${
                          errors.fullName
                            ? "border-red-400 focus:border-red-500 bg-red-50/20"
                            : "border-brand-border focus:border-forest"
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-[11px] text-red-600 mt-1 block">{errors.fullName}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-text uppercase tracking-wider mb-1.5">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Organization name"
                        className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-sm focus:outline-none transition-colors ${
                          errors.company
                            ? "border-red-400 focus:border-red-500 bg-red-50/20"
                            : "border-brand-border focus:border-forest"
                        }`}
                      />
                      {errors.company && (
                        <span className="text-[11px] text-red-600 mt-1 block">{errors.company}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-brand-text uppercase tracking-wider mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="name@organization.com"
                        className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-sm focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-400 focus:border-red-500 bg-red-50/20"
                            : "border-brand-border focus:border-forest"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-600 mt-1 block">{errors.email}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-text uppercase tracking-wider mb-1.5">
                        Inquiry Subject
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-brand-border rounded-sm focus:border-forest focus:outline-none transition-colors"
                      >
                        <option value="general">General Corporate Inquiry</option>
                        <option value="research">Investment Research &amp; Financial Analysis</option>
                        <option value="proprietary">Proprietary Investment Opportunities</option>
                        <option value="governance">Governance &amp; Regulatory Matters</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-text uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Please outline the nature of your inquiry..."
                      className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-sm focus:outline-none transition-colors ${
                        errors.message
                          ? "border-red-400 focus:border-red-500 bg-red-50/20"
                          : "border-brand-border focus:border-forest"
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-brand-subtext flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-forest" />
                      <span>Confidential corporate handling</span>
                    </span>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-forest hover:bg-darkgreen rounded-sm transition-colors shadow-sm disabled:opacity-70 inline-flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{submitting ? "Sending..." : "Send Message"}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
