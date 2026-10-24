import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  children: ReactNode;
  className?: string;
  /** Use stagger to animate children one-by-one */
  stagger?: boolean;
  /** Force reveal without scroll (e.g. above-the-fold content) */
  alwaysVisible?: boolean;
  as?: "div" | "section" | "article" | "li" | "span";
}

/**
 * Wraps children with scroll-reveal animation.
 * Add `className` for layout; the reveal class is added automatically.
 */
export default function Reveal({
  children,
  className = "",
  stagger = false,
  alwaysVisible = false,
  as: Tag = "div",
}: Props) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const base = stagger ? "reveal-stagger" : "reveal";
  const state = visible || alwaysVisible ? "reveal-visible" : "";

  return (
    // @ts-expect-error — dynamic tag is fine for our usage
    <Tag ref={ref} className={`${base} ${state} ${className}`}>
      {children}
    </Tag>
  );
}
