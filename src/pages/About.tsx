import { Link } from "react-router-dom";
import { ArrowRight, Heart, Target, Leaf, Users, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/config/site";

const headerImage =
  "https://images.pexels.com/photos/4854275/pexels-photo-4854275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
const approachImage =
  "https://images.pexels.com/photos/7444444/pexels-photo-7444444.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
const wellnessImage =
  "https://images.pexels.com/photos/10222726/pexels-photo-10222726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

const values = [
  {
    icon: Target,
    title: "Personalised Approach",
    text: "Every plan is built around your unique goals, fitness level and lifestyle — not a one-size-fits-all template.",
  },
  {
    icon: Leaf,
    title: "Nutrition First",
    text: "We believe lasting wellness starts with how you nourish your body — balanced, whole-food choices for everyday health.",
  },
  {
    icon: Users,
    title: "Supportive Coaching",
    text: "Guidance that meets you where you are, with encouragement and accountability to help you stay on track.",
  },
];

const pillars = [
  {
    title: "Fitness",
    text: "Regular physical activity builds strength, improves energy and supports overall physical and mental wellbeing.",
  },
  {
    title: "Nutrition",
    text: "Balanced, whole-food choices fuel your body and mind — supporting energy, recovery and long-term health.",
  },
  {
    title: "Lifestyle",
    text: "Healthy daily habits — from sleep to stress management — tie fitness and nutrition together for lasting results.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us | GT FitCouple – GT Wellness"
        description="Learn about GT FitCouple – GT Wellness, a personal wellness coaching business in Thiruppur helping people build healthier lives since 2018."
      />

      <PageHeader
        title="About Us"
        subtitle="Helping you build a healthier, happier life since 2018."
        image={headerImage}
        alt="A couple stretching together at an indoor gym."
      />

      {/* Story */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 bg-mesh-1" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
                <Heart className="h-4 w-4" fill="currentColor" />
                Our Story
              </span>
              <h2 className="mt-5 text-4xl font-extrabold text-forest-800 sm:text-5xl">
                Wellness coaching built on real experience
              </h2>
              <p className="mt-5 text-gray-500 leading-relaxed">
                {siteConfig.fullName} was established in{" "}
                {siteConfig.establishedYear} with a simple belief: a healthy
                life leads to a happy life. We provide personal wellness
                coaching that brings together fitness, nutrition and healthy
                lifestyle habits under one roof.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Rather than quick fixes, we focus on sustainable habits you can
                maintain for life. Whether your goal is to get active, eat
                better, manage your weight or simply feel healthier day to day,
                our coaching adapts to where you are right now.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                We work with individuals and families across Thiruppur, with
                morning and evening sessions at two convenient locations.
              </p>
            </Reveal>
            <Reveal className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-brand-100/60">
              <img
                src={approachImage}
                alt="A personal trainer guiding clients during a gym session."
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Our Approach
            </span>
            <h2 className="mt-5 text-4xl font-extrabold text-forest-800 sm:text-5xl">
              Three Principles We Live By
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              These values guide every coaching session and every plan we
              create.
            </p>
          </Reveal>

          <Reveal stagger className="mt-14 grid gap-8 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-brand-100/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 text-brand-600 transition-all duration-500 group-hover:scale-110 group-hover:from-brand-500 group-hover:to-forest-600 group-hover:text-white">
                      <Icon className="h-8 w-8" />
                    </span>
                    <h3 className="mt-6 text-xl font-bold text-forest-800">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">{value.text}</p>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Coach note */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-2 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-brand-100/60 lg:order-1">
              <img
                src={wellnessImage}
                alt="A person performing stretching exercises in a sunlit room."
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
                Your Coach
              </span>
              <h2 className="mt-5 text-4xl font-extrabold text-forest-800 sm:text-5xl">
                One step at a time
              </h2>
              <p className="mt-5 text-gray-500 leading-relaxed">
                Our personal wellness coach works directly with you to
                understand your goals, lifestyle and challenges — then builds a
                practical plan you can actually follow. Sessions are held at
                both branches during morning and evening hours.
              </p>
              <div className="mt-6 rounded-2xl border-l-4 border-brand-500 bg-brand-50 p-5">
                <p className="text-sm text-forest-700">
                  <strong>Note:</strong> Coach profile details shown here use
                  only verified information provided by the business. Please
                  contact us directly for any specific credentials or
                  qualifications.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-800 to-brand-900 py-24">
        <div className="absolute -left-20 top-10 h-72 w-72 animate-float rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 animate-float rounded-full bg-accent-400/10 blur-3xl [animation-delay:2s]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              Why Fitness, Nutrition &amp; Lifestyle Matter
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-100">
              These three pillars work together — and our coaching helps you
              bring all of them into balance.
            </p>
          </Reveal>

          <Reveal stagger className="mt-14 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="glass rounded-3xl p-8 text-center transition-all duration-500 hover:scale-105"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl font-extrabold text-brand-300 ring-1 ring-white/15">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-brand-100/80">{pillar.text}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-12 text-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-2xl transition-all duration-300 hover:scale-105"
            >
              See Our Services
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
