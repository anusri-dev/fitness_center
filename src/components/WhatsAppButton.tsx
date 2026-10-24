import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * Floating WhatsApp contact button with pulse ring — visible on every page.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-xl shadow-brand-500/40 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-25" />
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 opacity-0 blur-md transition-opacity group-hover:opacity-60" />
      <MessageCircle className="relative h-7 w-7" />

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-forest-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1">
        Chat with us!
      </span>
    </a>
  );
}
