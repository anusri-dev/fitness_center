import { Link } from "react-router-dom";
import { Heart, Phone, Clock, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { navLinks, siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-forest-950 via-forest-900 to-brand-950 text-green-50">
      {/* decorative glow */}
      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-brand-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-lg">
                <Heart className="h-5 w-5" fill="white" />
              </span>
              <span className="text-lg font-extrabold leading-tight">
                {siteConfig.businessName}
                <span className="block text-xs font-semibold uppercase tracking-wider text-brand-300">
                  {siteConfig.businessSuffix}
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-green-200/80">
              {siteConfig.tagline} Personal wellness coaching in Thiruppur
              since {siteConfig.establishedYear}.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-300">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1 text-green-100/90 transition hover:text-brand-300"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.phoneLink}
                  className="group flex items-start gap-2.5 text-green-100/90 transition hover:text-brand-300"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400 transition group-hover:scale-110" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2.5 text-green-100/90 transition hover:text-brand-300"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-400 transition group-hover:scale-110" />
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-green-100/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {siteConfig.branches[0].address}
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-300">
              Operating Hours
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-green-100/80">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>
                  <span className="block font-semibold text-green-100">Morning</span>
                  {siteConfig.hours.morning}
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-green-100/80">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>
                  <span className="block font-semibold text-green-100">Evening</span>
                  {siteConfig.hours.evening}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-green-300/70 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.fullName}. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Crafted with
            <Heart className="h-3 w-3 text-brand-400" fill="currentColor" />
            for a healthier you
          </p>
        </div>
      </div>
    </footer>
  );
}
