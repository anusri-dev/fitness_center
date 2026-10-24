import {
  Dumbbell,
  Salad,
  Scale,
  Trophy,
  Baby,
  Flower2,
  User,
  HeartPulse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const services: Service[] = [
  {
    icon: Dumbbell,
    title: "Personal Fitness Coaching",
    description:
      "One-on-one coaching tailored to your fitness level, goals and schedule. Train with guidance that adapts as you progress.",
    image:
      "https://images.pexels.com/photos/39219673/pexels-photo-39219673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "A personal trainer guiding a client through strength training in a gym.",
  },
  {
    icon: Salad,
    title: "Cellular Nutrition Guidance",
    description:
      "Learn how to nourish your body at a cellular level with balanced, whole-food choices that support energy and wellbeing.",
    image:
      "https://images.pexels.com/photos/7788313/pexels-photo-7788313.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "A colorful bowl of fresh vegetables representing cellular nutrition.",
  },
  {
    icon: Scale,
    title: "Weight Loss, Gain & Management",
    description:
      "Sustainable plans for losing, gaining or maintaining weight — built around healthy habits you can keep for life.",
    image:
      "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "A woman lifting dumbbells in a bright gym during a weight management session.",
  },
  {
    icon: Trophy,
    title: "Sports Nutrition",
    description:
      "Fuel your performance with nutrition strategies designed for athletes and active individuals across different sports.",
    image:
      "https://images.pexels.com/photos/18408904/pexels-photo-18408904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Athletes running a marathon outdoors, representing sports nutrition.",
  },
  {
    icon: Baby,
    title: "Kids Nutrition",
    description:
      "Help children build healthy eating habits early with age-appropriate guidance that keeps growing bodies well-nourished.",
    image:
      "https://images.pexels.com/photos/8813498/pexels-photo-8813498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "A group of happy, active kids playing outdoors, representing kids nutrition.",
  },
  {
    icon: Flower2,
    title: "Women's Wellness",
    description:
      "Wellness coaching focused on women's health — supporting fitness, nutrition and balanced everyday lifestyle habits.",
    image:
      "https://images.pexels.com/photos/13849161/pexels-photo-13849161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "A woman practicing yoga in a serene natural setting, representing women's wellness.",
  },
  {
    icon: User,
    title: "Men's Wellness",
    description:
      "Coaching designed for men's fitness and health goals — strength, nutrition and lifestyle habits that fit your routine.",
    image:
      "https://images.pexels.com/photos/38010745/pexels-photo-38010745.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "A focused male runner training outdoors, representing men's wellness.",
  },
  {
    icon: HeartPulse,
    title: "General Fitness & Healthy Lifestyle",
    description:
      "Practical, everyday guidance to stay active, eat well and build a healthy lifestyle — no matter where you're starting from.",
    image:
      "https://images.pexels.com/photos/8497660/pexels-photo-8497660.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Two adults jogging outdoors on a sunny day, representing a healthy lifestyle.",
  },
];
