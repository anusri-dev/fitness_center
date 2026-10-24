import { useEffect, useRef, useState } from "react";

/**
 * Hook that adds a "reveal-visible" class when the element scrolls
 * into view. Use with the `reveal` or `reveal-stagger` CSS classes.
 *
 * @returns a ref to attach to the target element, plus a boolean
 *          indicating whether it has entered the viewport.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
