import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { FIRM_INFO, NAV_ITEMS } from "../data/firmData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname, location.hash]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-200 border-b border-brand-border ${
        scrolled ? "shadow-sm py-0" : "py-0"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3.5 shrink-0 group py-2">
            <img
              src="/logo.png"
              alt={FIRM_INFO.name}
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
            />
            <div className="flex flex-col justify-center">
              <span className="font-heading font-extrabold text-[14px] sm:text-[15px] tracking-[-0.02em] text-brand-text uppercase leading-tight group-hover:text-forest transition-colors whitespace-nowrap">
                {FIRM_INFO.shortLine1}
              </span>
              <span className="text-[9.5px] sm:text-[10px] font-semibold tracking-[0.22em] text-forest uppercase leading-tight mt-0.5 whitespace-nowrap">
                {FIRM_INFO.shortLine2}
              </span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center h-full space-x-1 2xl:space-x-2">
            {NAV_ITEMS.map((item) => {
              const current = isActive(item.path);
              const hasDropdown = !!item.dropdown;
              const isOpen = activeDropdown === item.name;

              return (
                <div
                  key={item.name}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`h-full flex items-center gap-1.5 px-2.5 lg:px-3 text-[13px] 2xl:text-[13.5px] font-medium transition-colors whitespace-nowrap relative ${
                      current ? "text-forest font-semibold" : "text-brand-text hover:text-forest"
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-brand-subtext transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-forest" : ""
                        }`}
                      />
                    )}
                    {current && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-forest rounded-t-sm"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {hasDropdown && isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                        className="absolute top-full left-0 min-w-[230px] bg-white border border-brand-border shadow-dropdown rounded-sm py-2 z-50"
                      >
                        <div className="px-3.5 py-1 text-[10px] uppercase font-bold tracking-wider text-forest border-b border-brand-border/60 mb-1">
                          {item.name}
                        </div>
                        {item.dropdown!.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-3.5 py-2 text-xs text-brand-text hover:bg-forest/5 hover:text-forest transition-colors font-medium whitespace-nowrap"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="flex xl:hidden items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-brand-text hover:text-forest hover:bg-forest/5 rounded-sm focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-white border-t border-brand-border overflow-hidden shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 pb-8 space-y-1">
              {NAV_ITEMS.map((item) => {
                const current = isActive(item.path);
                return (
                  <div key={item.name} className="py-1">
                    <Link
                      to={item.path}
                      className={`block px-3 py-2.5 text-sm rounded-sm font-medium ${
                        current
                          ? "text-forest font-semibold bg-forest/5"
                          : "text-brand-text hover:bg-brand-mutedBg"
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-6 pt-1 space-y-1 border-l-2 border-brand-border ml-3 mt-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block py-1.5 text-xs text-brand-subtext hover:text-forest"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-5 border-t border-brand-border mt-4">
                <Link
                  to="/contact"
                  className="w-full text-center block py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-forest hover:bg-darkgreen rounded-sm shadow-sm transition-colors"
                >
                  Contact Our Team
                </Link>
                <div className="mt-3 text-center text-[11px] text-brand-subtext">
                  {FIRM_INFO.positioning} • {FIRM_INFO.tagline}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
