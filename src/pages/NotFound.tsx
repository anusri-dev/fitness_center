import { Link } from "react-router-dom";
import { ArrowLeft, HeartPulse } from "lucide-react";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | GT FitCouple – GT Wellness"
        description="The page you are looking for could not be found."
      />
      <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
        <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="relative z-10">
          <HeartPulse className="mx-auto h-16 w-16 animate-bounce-subtle text-brand-500" />
          <h1 className="mt-6 text-7xl font-extrabold text-forest-800">404</h1>
          <p className="mt-4 text-lg text-gray-500">
            Sorry, the page you are looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-forest-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition-all hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
