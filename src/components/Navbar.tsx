import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Heart, Activity } from "lucide-react";
import { navLinks, siteConfig } from "@/config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300",
      isActive
        ? "text-brand-600"
        : "text-forest-700 hover:text-brand-600 hover:bg-brand-50",
    ].join(" ");

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-brand-100 shadow-[0_4px_30px_rgba(22,101,52,0.08)]"
          : "bg-white/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Brand */}
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-forest-700 text-white shadow-lg shadow-brand-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Heart className="h-5 w-5" fill="white" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent-400 ring-2 ring-white">
                <Activity className="h-2.5 w-2.5 text-forest-900" />
              </span>
            </span>
            <span className="leading-tight">
              <span className="block text-base font-extrabold text-forest-800">
                {siteConfig.businessName}
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-brand-500">
                {siteConfig.businessSuffix}
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={linkClass}
                  end={link.to === "/"}
                >
                  {({ isActive }) => (
                    <span className="relative">
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-brand-500 to-forest-600" />
                      )}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA (desktop) */}
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-brand-500 to-forest-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-500/30"
          >
            WhatsApp Us
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-forest-800 transition hover:bg-brand-50"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative h-6 w-6">
              <Menu
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="border-t border-brand-100 bg-white/95 backdrop-blur-xl px-4 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    [
                      "block rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200",
                      isActive
                        ? "bg-gradient-to-r from-brand-500 to-forest-600 text-white shadow-md"
                        : "text-forest-700 hover:bg-brand-50 hover:text-brand-600",
                    ].join(" ")
                  }
                  end={link.to === "/"}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-500 to-forest-600 px-4 py-3 text-sm font-bold text-white shadow-md"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
