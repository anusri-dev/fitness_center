import { Phone, Clock, MapPin, MessageCircle, ArrowRight, ExternalLink, FileText, Info } from "lucide-react";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { siteConfig, GOOGLE_FORM_URL } from "@/config/site";

const headerImage =
  "https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: siteConfig.phone,
    href: siteConfig.phoneLink,
    external: false,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    href: siteConfig.whatsappLink,
    external: true,
  },
  {
    icon: FileText,
    title: "Registration Form",
    value: "Open Google Form",
    href: GOOGLE_FORM_URL,
    external: true,
  },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | GT FitCouple – GT Wellness"
        description="Contact GT FitCouple – GT Wellness in Thiruppur. Call 97873 23091, message us on WhatsApp, or visit one of our two branches."
      />

      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out any time."
        image={headerImage}
        alt="A healthy salad bowl representing wellness and nutrition."
      />

      {/* Contact cards */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 bg-mesh-1" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal stagger className="grid gap-8 md:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50 to-white p-8 text-center shadow-lg ring-1 ring-brand-100/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-100/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-forest-600 text-white shadow-lg shadow-brand-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-8 w-8" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-forest-800">
                      {card.title}
                    </h3>
                    <p className="mt-2 inline-flex items-center gap-1 text-base font-semibold text-brand-600 transition group-hover:text-brand-700">
                      {card.value}
                      {card.external && (
                        <ExternalLink className="h-4 w-4" />
                      )}
                    </p>
                  </div>
                </a>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Branches with maps */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
              <MapPin className="h-4 w-4" />
              Our Branches
            </span>
            <h2 className="mt-5 text-4xl font-extrabold text-forest-800 sm:text-5xl">
              Visit Us in Thiruppur
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Both branches follow the same morning and evening timings.
            </p>
          </Reveal>

          <Reveal stagger className="mt-12 grid gap-8 lg:grid-cols-2">
            {siteConfig.branches.map((branch) => (
              <div
                key={branch.id}
                className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-brand-100/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-forest-800">
                    {branch.name}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-2.5">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      {branch.address}
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      {branch.timings}
                    </li>
                  </ul>
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-600 transition hover:text-brand-700"
                  >
                    Open in Google Maps
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <div className="h-64 w-full bg-brand-100">
                  <iframe
                    title={`Map for ${branch.name}`}
                    src={branch.mapEmbed}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mx-auto mt-8 max-w-2xl">
            <div className="flex items-start gap-4 rounded-2xl border-l-4 border-brand-500 bg-white p-6 shadow-md">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <p className="text-sm text-gray-600">
                <strong className="text-forest-800">Note:</strong> The maps
                above show a general location placeholder for Thiruppur
                (641603). Exact map links will be added once confirmed.
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
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              Start Your Free 3-Day Trial
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
              Fill out our simple registration form and we'll get in touch.
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
          </Reveal>
        </div>
      </section>
    </>
  );
}
