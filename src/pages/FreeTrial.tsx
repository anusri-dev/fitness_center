import { ArrowRight, Gift, CheckCircle2, Phone, MapPin, Clock, Info, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { siteConfig, GOOGLE_FORM_URL } from "@/config/site";

const headerImage =
  "https://images.pexels.com/photos/4853896/pexels-photo-4853896.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

const trialBenefits = [
  "Experience our coaching approach with no commitment",
  "Sessions available in both morning and evening slots",
  "Available at both Thiruppur branches",
  "Get to know our coach and training style before you decide",
];

const formFields = [
  "Full Name",
  "Phone Number",
  "Email Address",
  "City / Place",
  "Preferred Branch",
  "Preferred Morning or Evening Session",
  "Fitness Goal",
  "Consent to be contacted regarding the trial",
];

export default function FreeTrial() {
  return (
    <>
      <SEO
        title="Free 3-Day Trial | GT FitCouple – GT Wellness"
        description="Register for a free 3-day trial at GT FitCouple – GT Wellness in Thiruppur. Experience personal fitness and nutrition coaching with no commitment."
      />

      <PageHeader
        title="Free 3-Day Trial"
        subtitle="Experience personal wellness coaching — no commitment to start."
        image={headerImage}
        alt="A couple sharing a moment in a gym with medicine balls."
      />

      {/* Trial intro */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 bg-mesh-1" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
                <Gift className="h-4 w-4" />
                No Cost, No Commitment
              </span>
              <h2 className="mt-5 text-4xl font-extrabold text-forest-800 sm:text-5xl">
                Try Our Coaching for 3 Days — Free
              </h2>
              <p className="mt-5 text-gray-500 leading-relaxed">
                We want you to feel confident before you commit. That's why we
                offer a free 3-day trial so you can experience our coaching
                style, meet our coach and see if our approach is the right fit
                for you.
              </p>

              <ul className="mt-6 space-y-3">
                {trialBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                    <span className="text-forest-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-forest-600 px-9 py-4 text-base font-bold text-white shadow-xl shadow-brand-500/25 transition-all duration-300 hover:scale-105"
              >
                Register Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>

            {/* Form preview card */}
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50 to-white p-8 shadow-xl ring-1 ring-brand-100/60">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-200/40 blur-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-brand-500" />
                    <h3 className="text-lg font-bold text-forest-800">
                      What the Form Collects
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    The "Register Now" button opens a Google Form in a new tab.
                    Here's what we'll ask:
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {formFields.map((field, i) => (
                      <li
                        key={field}
                        className="flex items-center gap-3 text-sm text-forest-700"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        {field}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-brand-100">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                    <p className="text-sm text-gray-600">
                      Please submit accurate contact details so we can reach out
                      to schedule your trial sessions.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Branch details */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
              <MapPin className="h-4 w-4" />
              Where to Find Us
            </span>
            <h2 className="mt-5 text-4xl font-extrabold text-forest-800 sm:text-5xl">
              Our Branches
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Two branches in Thiruppur with morning and evening sessions.
            </p>
          </Reveal>

          <Reveal stagger className="mt-12 grid gap-8 md:grid-cols-2">
            {siteConfig.branches.map((branch) => (
              <div
                key={branch.id}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-brand-100/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-100/50 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
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
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-10">
            <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-r from-forest-800 to-brand-700 p-8 text-center shadow-xl sm:flex-row sm:justify-center">
              <Phone className="h-7 w-7 text-brand-300" />
              <a
                href={siteConfig.phoneLink}
                className="text-xl font-bold text-white transition hover:text-brand-300"
              >
                {siteConfig.phone}
              </a>
              <span className="hidden sm:inline text-white/30">|</span>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-forest-700 shadow-lg transition-all duration-300 hover:scale-105"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
