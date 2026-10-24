import { Link } from "react-router-dom";
import { ArrowRight, Gift, Info } from "lucide-react";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import { GOOGLE_FORM_URL } from "@/config/site";

const headerImage =
  "https://images.pexels.com/photos/19025674/pexels-photo-19025674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

export default function Services() {
  return (
    <>
      <SEO
        title="Services | GT FitCouple – GT Wellness"
        description="Personal fitness coaching, cellular nutrition, weight management, sports nutrition, kids nutrition, women's & men's wellness and general healthy lifestyle guidance in Thiruppur."
      />

      <PageHeader
        title="Our Services"
        subtitle="Wellness coaching for every age, goal and stage of life."
        image={headerImage}
        alt="Dumbbells in a modern gym setting representing fitness services."
      />

      {/* Services grid */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 bg-mesh-1" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
              What We Offer
            </span>
            <h2 className="mt-5 text-4xl font-extrabold text-forest-800 sm:text-5xl">
              Coaching That Grows With You
            </h2>
            <p className="mt-4 text-gray-500">
              From personal fitness to specialised nutrition, we offer guidance
              designed around your needs. Every plan is built on healthy,
              sustainable habits — not quick fixes.
            </p>
          </Reveal>

          <Reveal stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Important note */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <div className="flex items-start gap-4 rounded-2xl border-l-4 border-brand-500 bg-white p-6 shadow-md">
              <Info className="mt-0.5 h-6 w-6 shrink-0 text-brand-500" />
              <p className="text-sm text-gray-600">
                <strong className="text-forest-800">Please note:</strong> Our
                services focus on fitness, nutrition and healthy lifestyle
                guidance. We do not promise cures or guaranteed health results.
                Always consult a qualified medical professional for specific
                health concerns.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-800 via-brand-700 to-forest-600 py-24">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent-400/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 ring-1 ring-white/20 backdrop-blur-md">
              <Gift className="h-8 w-8 text-accent-300" />
            </div>
            <h2 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
              Ready to Begin?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
              Start with a free 3-day trial and experience our coaching
              firsthand.
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 text-base font-bold text-brand-700 shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Join Free Trial
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="mt-4">
              <Link
                to="/contact"
                className="text-sm font-medium text-brand-100 underline transition hover:text-white"
              >
                Or get in touch with us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
