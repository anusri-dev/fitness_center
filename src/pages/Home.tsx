import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Clock,
  MapPin,
  Gift,
  CheckCircle2,
  Dumbbell,
  Salad,
  HeartPulse,
  Users,
  Calendar,
  Sparkles,
  Quote,
  TrendingUp,
  Target,
  MessageCircle,
} from "lucide-react";
import SEO from "@/components/SEO";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { siteConfig, GOOGLE_FORM_URL } from "@/config/site";
import { services } from "@/data/services";

const heroImage =
  "https://images.pexels.com/photos/4944980/pexels-photo-4944980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

const parallaxImage =
  "https://images.pexels.com/photos/40371849/pexels-photo-40371849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

const communityImage =
  "https://images.pexels.com/photos/6339446/pexels-photo-6339446.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

const highlights = [
  {
    icon: Dumbbell,
    title: "Personal Fitness Coaching",
    text: "Train one-on-one with a coach who adapts to your goals and pace.",
  },
  {
    icon: Salad,
    title: "Nutrition Guidance",
    text: "Balanced, whole-food nutrition plans for lasting wellbeing.",
  },
  {
    icon: HeartPulse,
    title: "Healthy Lifestyle",
    text: "Build sustainable habits for a healthier, happier everyday life.",
  },
];

const processSteps = [
  {
    icon: Calendar,
    title: "Book Your Free Trial",
    text: "Register through our simple Google Form and pick your preferred branch and session time.",
  },
  {
    icon: Users,
    title: "Meet Your Coach",
    text: "Get to know your wellness coach and discuss your goals, lifestyle and challenges.",
  },
  {
    icon: Target,
    title: "Get Your Plan",
    text: "Receive a personalised coaching approach built around your fitness level and nutrition needs.",
  },
  {
    icon: TrendingUp,
    title: "Grow With Us",
    text: "Build healthy habits with ongoing guidance, support and accountability at every step.",
  },
];

const faqs = [
  {
    q: "Is the 3-day trial really free?",
    a: "Yes. The free 3-day trial lets you experience our coaching style with no cost and no commitment. You only continue if it feels right for you.",
  },
  {
    q: "Do I need to be fit already to join?",
    a: "Not at all. Our coaching is designed for all fitness levels — whether you're just starting out or looking to take your wellness further.",
  },
  {
    q: "Which locations are available?",
    a: "We have two branches in Thiruppur — one in Malligai Nagar and one near SAP Sivaguru Super Store. Both offer morning and evening sessions.",
  },
  {
    q: "What should I bring to my trial?",
    a: "Just comfortable workout clothes and a water bottle. Your coach will guide you through everything else on the day.",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="GT FitCouple – GT Wellness | Healthy Life, Happy Life"
        description="Personal wellness coaching in Thiruppur since 2018. Fitness, nutrition and healthy lifestyle guidance. Start your free 3-day trial today."
      />

      {/* ===== Hero ===== */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={heroImage}
          alt="A fit couple exercising together in a gym."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/90 via-forest-900/75 to-brand-800/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />

        {/* Floating decorative orbs */}
        <div className="absolute right-10 top-20 h-72 w-72 animate-float rounded-full bg-brand-500/15 blur-3xl" />
        <div className="absolute left-10 bottom-20 h-64 w-64 animate-float rounded-full bg-accent-400/10 blur-3xl [animation-delay:3s]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex animate-fade-up items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-brand-200 ring-1 ring-white/20 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-accent-300" />
              Personal Wellness Coaching · Est. {siteConfig.establishedYear}
            </span>

            <h1
              className="mt-6 animate-fade-up text-5xl font-extrabold leading-[1.1] text-white sm:text-6xl md:text-7xl [animation-delay:0.1s] opacity-0"
              style={{ animationFillMode: "forwards" }}
            >
              {siteConfig.businessName}
              <span className="block mt-2 text-2xl font-bold text-brand-300 sm:text-3xl md:text-4xl">
                {siteConfig.businessSuffix}
              </span>
            </h1>

            <p
              className="mt-5 animate-fade-up text-2xl font-semibold shimmer-text [animation-delay:0.2s] opacity-0"
              style={{ animationFillMode: "forwards" }}
            >
              {siteConfig.tagline}
            </p>

            <p
              className="mt-5 max-w-xl animate-fade-up text-base leading-relaxed text-green-50/85 [animation-delay:0.3s] opacity-0"
              style={{ animationFillMode: "forwards" }}
            >
              Personal wellness coaching that brings together fitness,
              nutrition and healthy lifestyle habits — guided by a coach who
              helps you build a healthier, happier life at your own pace.
            </p>

            {/* Free trial highlight */}
            <div
              className="mt-8 inline-flex animate-fade-up items-center gap-3 rounded-2xl bg-white/10 px-5 py-3.5 ring-1 ring-white/20 backdrop-blur-md [animation-delay:0.4s] opacity-0"
              style={{ animationFillMode: "forwards" }}
            >
              <Gift className="h-6 w-6 text-accent-300" />
              <span className="text-sm font-bold text-white">
                Free 3 Days Trial — no commitment to start
              </span>
            </div>

            <div
              className="mt-8 flex animate-fade-up flex-col gap-4 sm:flex-row [animation-delay:0.5s] opacity-0"
              style={{ animationFillMode: "forwards" }}
            >
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-brand-500/40 transition-all duration-300 hover:scale-105 hover:shadow-brand-400/50"
              >
                Join Free Trial
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-4 text-base font-bold text-white ring-1 ring-white/25 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                Explore Services
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* ===== Stats band ===== */}
      <section className="relative -mt-px bg-gradient-to-r from-forest-800 via-forest-900 to-brand-950 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "2018", label: "Established" },
              { value: "2", label: "Branches in Thiruppur" },
              { value: "8+", label: "Wellness Services" },
              { value: "3 Days", label: "Free Trial" },
            ].map((stat, i) => (
              <Reveal
                key={stat.label}
                className="text-center"
                alwaysVisible={i < 2}
              >
                <div className="text-3xl font-extrabold text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-300 sm:text-sm">
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Highlights ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white py-24">
        <div className="absolute inset-0 bg-mesh-1" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
              <Sparkles className="h-4 w-4" />
              What We Offer
            </span>
            <h2 className="mt-5 text-4xl font-extrabold text-forest-800 sm:text-5xl">
              A Complete Approach to Wellness
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Combining personal training, nutrition guidance and lifestyle
              coaching — all under one roof.
            </p>
          </Reveal>

          <Reveal stagger className="mt-14 grid gap-8 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl bg-white p-8 text-center shadow-lg ring-1 ring-brand-100/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/10"
                >
                  {/* hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 text-brand-600 shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:from-brand-500 group-hover:to-forest-600 group-hover:text-white">
                      <Icon className="h-8 w-8" />
                    </span>
                    <h3 className="mt-6 text-xl font-bold text-forest-800">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* ===== Parallax quote band ===== */}
      <section
        className="relative flex items-center justify-center overflow-hidden bg-fixed py-32"
        style={{
          backgroundImage: `url(${parallaxImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/90 to-brand-950/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <Reveal>
            <Quote className="mx-auto h-12 w-12 text-brand-400/60" />
            <p className="mt-6 text-2xl font-bold leading-relaxed text-white sm:text-3xl md:text-4xl">
              "A healthy life leads to a happy life. We don't believe in quick
              fixes — we believe in habits you can keep for life."
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-brand-300">
              — {siteConfig.fullName}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== Service preview ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
                Our Services
              </span>
              <h2 className="mt-4 text-4xl font-extrabold text-forest-800 sm:text-5xl">
                Coaching for Every Goal
              </h2>
              <p className="mt-3 text-gray-500">
                From personal fitness to specialised nutrition — for every age
                and stage of life.
              </p>
            </div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-brand-500 px-6 py-3 text-sm font-bold text-brand-600 transition-all duration-300 hover:scale-105 hover:bg-brand-500 hover:text-white"
            >
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== Process / How it works ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-forest-50 to-brand-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm">
              How It Works
            </span>
            <h2 className="mt-5 text-4xl font-extrabold text-forest-800 sm:text-5xl">
              Your Journey Starts Here
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Four simple steps from your first trial to lasting healthy
              habits.
            </p>
          </Reveal>

          <div className="relative mt-16">
            {/* connecting line */}
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />

            <Reveal stagger className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative text-center">
                    <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-lg ring-1 ring-brand-100 transition-transform duration-300 hover:scale-110">
                      <Icon className="h-7 w-7" />
                      <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-forest-600 text-xs font-bold text-white shadow-md">
                        {i + 1}
                      </span>
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-forest-800">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">{step.text}</p>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Community / lifestyle image split ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-2 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-brand-100/60 lg:order-1">
              <img
                src={communityImage}
                alt="A group of people exercising together on mats in a gym."
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </Reveal>

            <Reveal className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
                <Users className="h-4 w-4" />
                More Than Just a Gym
              </span>
              <h2 className="mt-5 text-4xl font-extrabold text-forest-800 sm:text-5xl">
                Join a Wellness Community
              </h2>
              <p className="mt-5 text-gray-500 leading-relaxed">
                At {siteConfig.fullName}, coaching goes beyond workouts. We
                guide you through fitness, nutrition and lifestyle changes in
                a supportive, friendly environment — helping you build habits
                that truly last.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Personalised coaching for all fitness levels",
                  "Morning and evening sessions at two branches",
                  "Nutrition guidance tailored to your lifestyle",
                  "A friendly, welcoming community in Thiruppur",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                    <span className="text-forest-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-forest-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:scale-105"
              >
                Learn More About Us
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Free trial CTA band ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-800 via-brand-700 to-forest-600 py-24">
        {/* animated gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-accent-400/10 bg-[length:200%_auto] animate-gradient-shift" />
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent-400/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 ring-1 ring-white/20 backdrop-blur-md">
              <Gift className="h-8 w-8 text-accent-300" />
            </div>
            <h2 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
              Start Your Free 3-Day Trial
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
              Experience personal wellness coaching with no commitment.
              Register through our simple form and we'll reach out to schedule
              your trial.
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 text-base font-bold text-brand-700 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-brand-50"
            >
              Join Free Trial
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-gradient-to-b from-white to-brand-50 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
              Questions &amp; Answers
            </span>
            <h2 className="mt-5 text-4xl font-extrabold text-forest-800 sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <Reveal stagger className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== Locations & contact ===== */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
              <MapPin className="h-4 w-4" />
              Visit Us
            </span>
            <h2 className="mt-5 text-4xl font-extrabold text-forest-800 sm:text-5xl">
              Two Branches in Thiruppur
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Morning and evening sessions at both locations.
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
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-r from-forest-800 to-brand-700 p-8 text-center shadow-xl sm:flex-row sm:justify-between sm:text-left">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-md">
                  <Phone className="h-7 w-7 text-brand-300" />
                </span>
                <div>
                  <p className="text-sm text-brand-200">Call us</p>
                  <a
                    href={siteConfig.phoneLink}
                    className="text-xl font-bold text-white transition hover:text-brand-300"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-forest-700 shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/25 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20"
                >
                  Contact Page
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ---- Inline FAQ accordion item ---- */
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-100/60 transition-all duration-300 hover:shadow-md">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-bold text-forest-800">{q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open
              ? "bg-brand-500 text-white rotate-180"
              : "bg-brand-100 text-brand-600"
          }`}
        >
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-400 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-gray-500">{a}</p>
        </div>
      </div>
    </div>
  );
}
