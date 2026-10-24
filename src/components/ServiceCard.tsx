import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

interface Props {
  service: Service;
}

/**
 * Premium service card with image zoom, gradient overlay, floating icon,
 * and arrow reveal on hover.
 */
export default function ServiceCard({ service }: Props) {
  const Icon = service.icon;
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-brand-100/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/15 hover:ring-brand-300/60">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-forest-900/10 to-transparent" />
        {/* Floating icon badge */}
        <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-brand-600 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white">
          <Icon className="h-6 w-6" />
        </span>
        {/* Arrow that slides in on hover */}
        <span className="absolute right-4 top-4 flex h-9 w-9 translate-x-12 items-center justify-center rounded-full bg-brand-500 text-white opacity-0 shadow-lg transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-forest-800 transition-colors group-hover:text-brand-600">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">
          {service.description}
        </p>
        {/* Bottom accent line */}
        <div className="mt-4 h-0.5 w-0 rounded-full bg-gradient-to-r from-brand-400 to-forest-500 transition-all duration-500 group-hover:w-full" />
      </div>
    </article>
  );
}
