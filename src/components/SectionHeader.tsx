import { ReactNode } from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  children?: ReactNode;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "left",
  className = "",
  titleClassName = "",
  children,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? "text-center mx-auto" : ""} ${className}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-forest ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="w-5 h-[1.5px] bg-forest" />
          <span>{badge}</span>
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-brand-text leading-[1.18] tracking-tight ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg text-brand-subtext font-normal leading-relaxed ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-3xl"
          }`}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
