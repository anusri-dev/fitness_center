/**
 * GT FitCouple – GT Wellness
 * Central site configuration.
 *
 * Replace GOOGLE_FORM_URL with your actual published Google Form URL.
 * All "Join Free Trial" and "Register Now" buttons open this link in a new tab.
 */
export const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/PLACEHOLDER-REPLACE-WITH-ACTUAL-FORM-ID/viewform";

export const siteConfig = {
  businessName: "GT FitCouple",
  businessSuffix: "GT Wellness",
  fullName: "GT FitCouple – GT Wellness",
  tagline: "Healthy Life, Happy Life.",
  establishedYear: 2018,

  phone: "97873 23091",
  phoneLink: "tel:+919787323091",
  whatsappLink: "https://wa.me/919787323091",

  email: "contact@gtfitcouple.example", // PLACEHOLDER – replace with the actual contact email when available

  hours: {
    morning: "7:30 AM – 9:30 AM",
    evening: "6:30 PM – 8:30 PM",
  },

  branches: [
    {
      id: "branch-1",
      name: "Malligai Nagar Branch",
      address:
        "Malligai Nagar, near the ration shop, Thiruppur, 641603",
      timings: "7:30 AM – 9:30 AM & 6:30 PM – 8:30 PM",
      // PLACEHOLDER – replace with the confirmed Google Maps link for this branch.
      mapEmbed:
        "https://www.google.com/maps?q=Thiruppur+641603&output=embed",
      mapLink: "https://www.google.com/maps?q=Thiruppur+641603",
    },
    {
      id: "branch-2",
      name: "SAP Sivaguru Branch",
      address:
        "Near SAP Sivaguru Super Store, Thiruppur, 641603",
      timings: "7:30 AM – 9:30 AM & 6:30 PM – 8:30 PM",
      // PLACEHOLDER – replace with the confirmed Google Maps link for this branch.
      mapEmbed:
        "https://www.google.com/maps?q=Thiruppur+641603&output=embed",
      mapLink: "https://www.google.com/maps?q=Thiruppur+641603",
    },
  ],
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Free Trial", to: "/free-trial" },
  { label: "Contact Us", to: "/contact" },
] as const;
