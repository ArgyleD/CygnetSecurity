import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to all elements with [data-reveal]
 * or [data-reveal-stagger] and adds the "is-visible" class when they
 * enter the viewport. Runs once on mount.
 */
export function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal], [data-reveal-stagger]");

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
