import homeImg from "../Assets/home.jpeg";
import researchImg from "../Assets/research.jpeg";

export interface NavDropdownItem {
  name: string;
  path: string;
}

export interface NavItem {
  name: string;
  path: string;
  dropdown?: NavDropdownItem[];
}

export interface PhilosophyPrinciple {
  number: string;
  title: string;
  description: string;
  standard: string;
  icon: "Briefcase" | "Clock" | "BarChart3" | "Leaf";
}

export interface ApproachStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface BusinessDivision {
  id: string;
  category: "proprietary" | "research" | "advisory" | "portfolio";
  categoryLabel: string;
  name: string;
  scopeLabel: string;
  availabilityStatus: string;
  isOjkGated: boolean;
  regulatoryNote?: string;
  description: string;
  thesis: string;
  activities: string[];
  image: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: "research" | "valuation" | "strategy" | "governance";
  categoryLabel: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  summary: string;
  featured: boolean;
  content: string;
  tags: string[];
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: "ShieldCheck" | "Scale" | "TrendingUp" | "Globe";
}

export const FIRM_INFO = {
  name: "PACIFIC INVESTMENT CAPITAL",
  shortLine1: "PACIFIC INVESTMENT",
  shortLine2: "CAPITAL",
  positioning: "Independent Investment & Financial Research Firm",
  tagline: "Building Long-Term Value.",
  heroHeadline: "Independent Thinking. Disciplined Investing. Long-Term Value.",
  heroSupporting:
    "Pacific Investment Capital is an independent investment and financial research firm focused on proprietary investments, fundamental research, and strategic financial analysis.",
  primaryCta: "Explore Our Approach",
  secondaryCta: "Discover Pacific",
  vision:
    "To be a trusted independent investment and financial research firm recognized for analytical rigor, intellectual independence, and disciplined long-term value creation.",
  mission:
    "To conduct rigorous fundamental research, deploy proprietary capital with discipline, and build institutional-grade analytical frameworks aligned with enduring economic value.",
  ojkNotice:
    "Regulated investment advisory and portfolio management services are offered strictly when and to the extent that the required Indonesian Financial Services Authority (Otoritas Jasa Keuangan / OJK) authorization has been obtained.",
  contact: {
    city: "Jakarta",
    country: "Indonesia",
    address: "Jakarta Financial District",
    email: "inquiries@pacificinvestmentcapital.com",
    researchEmail: "research@pacificinvestmentcapital.com",
    complianceEmail: "compliance@pacificinvestmentcapital.com",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    path: "/about",
    dropdown: [
      { name: "Firm Overview", path: "/about#overview" },
      { name: "Vision & Mission", path: "/about#vision-mission" },
      { name: "Core Values", path: "/about#core-values" },
      { name: "Analytical Principles", path: "/about#principles" },
    ],
  },
  {
    name: "Our Approach",
    path: "/approach",
    dropdown: [
      { name: "Investment Philosophy", path: "/approach#philosophy" },
      { name: "Proprietary Allocation", path: "/approach#allocation" },
      { name: "Research & Valuation Process", path: "/approach#process" },
      { name: "Risk Framework", path: "/approach#risk" },
    ],
  },
  {
    name: "Business Divisions",
    path: "/divisions",
    dropdown: [
      { name: "All Divisions", path: "/divisions" },
      { name: "Proprietary Investment", path: "/divisions#proprietary" },
      { name: "Investment Research", path: "/divisions#research" },
      { name: "Investment Advisory", path: "/divisions#advisory" },
      { name: "Portfolio Management", path: "/divisions#portfolio" },
    ],
  },
  {
    name: "Governance",
    path: "/governance",
    dropdown: [
      { name: "Governance Framework", path: "/governance#framework" },
      { name: "OJK Regulatory Alignment", path: "/governance#regulatory" },
      { name: "Research Independence", path: "/governance#independence" },
      { name: "Ethics & Compliance", path: "/governance#compliance" },
    ],
  },
  { name: "Research & Insights", path: "/insights" },
  { name: "Contact", path: "/contact" },
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    number: "01",
    title: "Independent Research",
    description:
      "Every decision begins with independent, first-principles fundamental analysis free from short-term market consensus or external product distribution pressures.",
    standard: "Analytical Independence",
    icon: "BarChart3",
  },
  {
    number: "02",
    title: "Disciplined Investing",
    description:
      "Capital allocation follows strict valuation discipline, conservative balance sheet assessment, and clearly defined margin-of-safety requirements.",
    standard: "Valuation Rigor",
    icon: "Briefcase",
  },
  {
    number: "03",
    title: "Long-Term Horizon",
    description:
      "We focus on multi-year business fundamentals, durable competitive advantages, and intrinsic value compounding rather than short-term price fluctuations.",
    standard: "Patient Capital",
    icon: "Clock",
  },
  {
    number: "04",
    title: "Risk & Governance Focus",
    description:
      "Downside preservation, accounting quality verification, and regulatory compliance form the bedrock of our investment and research standards.",
    standard: "Capital Preservation",
    icon: "Leaf",
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    id: "fundamental-research",
    title: "Fundamental & Financial Statement Analysis",
    subtitle: "Accounting quality, cash conversion, and capital efficiency",
    description:
      "We examine multi-year financial statements, working capital dynamics, free cash flow sustainability, and footnotes to understand true economic earnings beyond headline figures.",
  },
  {
    id: "company-valuation",
    title: "Intrinsic Company Valuation",
    subtitle: "Discounted cash flow, replacement cost, and scenario modeling",
    description:
      "Businesses are valued using conservative cash flow projections, return on invested capital (ROIC) analysis, and sensitivity testing across adverse macroeconomic scenarios.",
  },
  {
    id: "industry-analysis",
    title: "Industry Structure & Competitive Moat Research",
    subtitle: "Unit economics, barriers to entry, and pricing power",
    description:
      "Our research assesses industry supply-demand balance, regulatory structure, supplier-customer bargaining dynamics, and sustainability of competitive positioning.",
  },
  {
    id: "capital-allocation",
    title: "Proprietary Capital Allocation",
    subtitle: "Public equity, private business, and fixed income deployment",
    description:
      "Pacific Investment Capital allocates its own capital selectively across public equities, private businesses, and fixed income instruments only when risk-reward asymmetry is compelling.",
  },
  {
    id: "risk-oversight",
    title: "Risk & Regulatory Alignment",
    subtitle: "Downside protection and strict Indonesian OJK compliance",
    description:
      "Risk management emphasizes balance sheet resilience and liquidity awareness, while any regulated advisory or portfolio management activity remains strictly contingent upon obtaining Indonesian OJK authorization.",
  },
];

export const BUSINESS_DIVISIONS: BusinessDivision[] = [
  {
    id: "proprietary-investment",
    category: "proprietary",
    categoryLabel: "Core Division",
    name: "Proprietary Investment",
    scopeLabel: "Principal Capital Deployment",
    availabilityStatus: "Active Principal Activity",
    isOjkGated: false,
    description:
      "Deployment of firm proprietary capital across public equities, private businesses, fixed income securities, and strategic long-term capital allocations.",
    thesis:
      "Investing the firm's own capital with patience, concentrated fundamental conviction, and strict attention to downside protection and intrinsic value.",
    activities: [
      "Public Equity Investment",
      "Private Business Investment",
      "Fixed Income Investment",
      "Strategic Capital Allocation",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "investment-research",
    category: "research",
    categoryLabel: "Core Division",
    name: "Investment Research",
    scopeLabel: "Independent Financial Analysis",
    availabilityStatus: "Active Research Practice",
    isOjkGated: false,
    description:
      "In-depth, independent equity research, fundamental business analysis, financial statement forensics, company valuation, industry studies, and market insights.",
    thesis:
      "Objective, bottom-up analytical research designed to uncover business quality, financial resilience, and long-term industry drivers.",
    activities: [
      "Equity Research",
      "Fundamental Analysis",
      "Financial Statement Analysis",
      "Company Valuation",
      "Industry Research",
      "Market Insights",
    ],
    image: researchImg,
  },
  {
    id: "investment-advisory",
    category: "advisory",
    categoryLabel: "Advisory & Research",
    name: "Investment Advisory",
    scopeLabel: "Analytical & Corporate Research",
    availabilityStatus: "Regulated Services Subject to OJK Authorization",
    isOjkGated: true,
    regulatoryNote:
      "Non-regulated financial and corporate research services are supported by our analytical capability; regulated investment advisory services are only offered once required Indonesian OJK authorization has been obtained.",
    description:
      "Structured investment research services, financial analysis, portfolio research, and corporate investment research aligned with regulatory scope.",
    thesis:
      "Delivering rigorous analytical frameworks and corporate financial research while strictly adhering to Indonesian OJK regulatory boundaries.",
    activities: [
      "Investment Research Services",
      "Financial Analysis",
      "Portfolio Research",
      "Corporate Investment Research",
    ],
    image: homeImg,
  },
  {
    id: "portfolio-management",
    category: "portfolio",
    categoryLabel: "OJK-Gated Division",
    name: "Portfolio Management",
    scopeLabel: "Structured Portfolio Framework",
    availabilityStatus: "Available Upon OJK Authorization",
    isOjkGated: true,
    regulatoryNote:
      "Portfolio management services are only presented as available and conducted once the required authorization from Indonesia's Financial Services Authority (OJK) has been formally obtained.",
    description:
      "Disciplined frameworks for portfolio strategy, asset allocation, risk management, and ongoing portfolio monitoring subject to regulatory licensing.",
    thesis:
      "Constructing resilient, risk-aware portfolio architectures grounded in asset allocation discipline and continuous fundamental monitoring.",
    activities: [
      "Portfolio Strategy",
      "Asset Allocation",
      "Risk Management",
      "Portfolio Monitoring",
    ],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    id: "independence",
    title: "Intellectual Independence",
    description:
      "Forming independent, evidence-based investment conclusions anchored in primary financial data rather than market consensus.",
    icon: "ShieldCheck",
  },
  {
    id: "discipline",
    title: "Analytical Discipline",
    description:
      "Applying consistent valuation standards, accounting scrutiny, and margin-of-safety thresholds across every research and investment decision.",
    icon: "Scale",
  },
  {
    id: "horizon",
    title: "Long-Term Orientation",
    description:
      "Evaluating businesses and capital allocations over multi-year economic cycles to support durable long-term value creation.",
    icon: "TrendingUp",
  },
  {
    id: "compliance",
    title: "Regulatory Integrity",
    description:
      "Operating transparently within applicable legal boundaries, including strict adherence to Indonesian OJK authorization requirements for regulated activities.",
    icon: "Globe",
  },
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: "fundamental-valuation-cash-flow-quality",
    slug: "fundamental-valuation-and-cash-flow-quality",
    title: "Fundamental Valuation & Cash Flow Quality in Long-Term Equity Research",
    category: "valuation",
    categoryLabel: "Valuation & Research",
    date: "Research Perspective",
    author: "Pacific Investment Capital Research",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Examining why sustainable free cash flow conversion, capital intensity, and balance sheet conservatism remain central to intrinsic company valuation.",
    featured: true,
    content: `### Evaluating Intrinsic Value Beyond Headline Earnings

In fundamental equity research, reported net income is only the starting point of analysis. Differences in revenue recognition, depreciation schedules, and working capital requirements can cause accounting earnings to diverge materially from economic cash generation.

At Pacific Investment Capital, our valuation framework prioritizes free cash flow conversion, maintenance versus growth capital expenditure, and return on incremental invested capital.

#### Core Pillars of Financial Statement Analysis
- **Earnings Quality Verification:** Reconciling operating cash flow against net profit over full multi-year cycles to identify non-recurring accruals or working capital strain.
- **Capital Efficiency & ROIC:** Measuring how effectively management reinvests retained capital relative to the firm's long-term cost of capital.
- **Balance Sheet Resilience:** Assessing debt maturity profiles, interest coverage ratios, and off-balance-sheet obligations before establishing intrinsic value estimates.

#### Discipline Over Market Sentiment
Market multiples fluctuate with macro liquidity and investor sentiment, whereas long-term business value is anchored in durable cash flow compounding. Maintaining analytical independence ensures valuation discipline across changing market environments.`,
    tags: ["Equity Research", "Company Valuation", "Financial Statement Analysis", "Fundamental Analysis"],
  },
  {
    id: "balance-sheet-strength-fixed-income",
    slug: "balance-sheet-resilience-and-fixed-income-analysis",
    title: "Credit Structure & Capital Preservation in Fixed Income Evaluation",
    category: "research",
    categoryLabel: "Fundamental Analysis",
    date: "Research Perspective",
    author: "Pacific Investment Capital Research",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A framework for evaluating debt serviceability, covenant strength, and downside protection across corporate fixed income instruments.",
    featured: false,
    content: `### Prioritizing Principal Protection in Credit Research

Fixed income investing is fundamentally an exercise in downside protection. Unlike equity ownership, upside in debt instruments is contractually capped, making credit impairment prevention the primary determinant of long-term outcomes.

#### Key Analytical Dimensions
- **Interest & Debt Service Coverage:** Stress-testing operating cash flow under conservative revenue and margin assumptions.
- **Capital Structure Seniority:** Evaluating asset backing, structural subordination, and protective covenant terms.
- **Refinancing & Liquidity Buffers:** Reviewing cash balances, committed facilities, and maturity walls well ahead of redemption dates.

Through disciplined financial statement analysis, fixed income evaluation complements broader proprietary capital allocation.`,
    tags: ["Fixed Income Investment", "Risk Management", "Financial Analysis", "Capital Allocation"],
  },
  {
    id: "industry-structure-competitive-moats",
    slug: "industry-structure-and-competitive-durability",
    title: "Industry Structure, Competitive Moats & Strategic Capital Allocation",
    category: "strategy",
    categoryLabel: "Market Insights",
    date: "Research Perspective",
    author: "Pacific Investment Capital Research",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Understanding how industry concentration, switching costs, and management capital allocation determine durable enterprise value.",
    featured: false,
    content: `### Connecting Industry Economics to Long-Term Value

Even capable operating teams struggle to compound capital in structurally disadvantaged industries characterized by commodity pricing and low barriers to entry. Industry research provides essential context before evaluating any individual company.

#### Analytical Framework
- **Competitive Positioning:** Assessing customer switching costs, scale advantages, distribution control, and regulatory barriers.
- **Unit Economics:** Isolating underlying customer acquisition, retention, and operating leverage trends.
- **Management Capital Allocation:** Evaluating historical discipline across reinvestment, debt reduction, and strategic acquisitions.

Integrating industry research with bottom-up valuation forms the foundation of Pacific Investment Capital's long-term approach.`,
    tags: ["Industry Research", "Market Insights", "Strategic Capital Allocation", "Long-Term Value"],
  },
  {
    id: "regulatory-integrity-ojk-alignment",
    slug: "regulatory-alignment-and-analytical-governance",
    title: "Governance, Research Independence & Indonesian Regulatory Alignment",
    category: "governance",
    categoryLabel: "Governance & Compliance",
    date: "Firm Notice",
    author: "Pacific Investment Capital Compliance",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    summary:
      "How Pacific Investment Capital separates proprietary investment and independent research from regulated activities subject to Indonesian OJK authorization.",
    featured: false,
    content: `### Clear Regulatory Boundaries and Institutional Standards

Transparency regarding corporate scope and regulatory authorization is fundamental to trust in financial research and investment practice.

#### Scope & Regulatory Distinction
- **Active Firm Focus:** Pacific Investment Capital conducts proprietary investment using firm capital alongside independent financial and equity research.
- **OJK-Regulated Activities:** Portfolio management and regulated investment advisory services are presented as available strictly when the required Indonesian Financial Services Authority (OJK) authorization has been obtained.

This clear separation preserves analytical objectivity while upholding full compliance with Indonesian financial services regulations.`,
    tags: ["Governance", "OJK Alignment", "Research Independence", "Compliance"],
  },
];

export const INSIGHT_CATEGORIES = [
  { id: "all", label: "All Insights" },
  { id: "valuation", label: "Valuation & Research" },
  { id: "research", label: "Fundamental Analysis" },
  { id: "strategy", label: "Market Insights" },
  { id: "governance", label: "Governance & Compliance" },
];

export const DIVISION_CATEGORIES = [
  { id: "all", label: "All Divisions" },
  { id: "proprietary", label: "Proprietary Investment" },
  { id: "research", label: "Investment Research" },
  { id: "advisory", label: "Investment Advisory" },
  { id: "portfolio", label: "Portfolio Management" },
];
