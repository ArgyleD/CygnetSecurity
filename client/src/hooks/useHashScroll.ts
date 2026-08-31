import { useEffect } from "react";

/**
 * Scroll to the element named by the URL hash once that element exists.
 *
 * Routes are lazily loaded, so on arrival the target is usually not mounted
 * yet and the browser's own hash scroll finds nothing. Retry across frames
 * until it appears rather than guessing at a fixed delay.
 *
 * Landing on a deep link is not a movement the reader initiated, so this
 * jumps rather than animating; in-page navigation still scrolls smoothly via
 * navigateToSection.
 */
export function useHashScroll(location: string) {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    let frames = 0;
    let cancelled = false;

    const attempt = () => {
      if (cancelled) return;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "auto" });
        return;
      }
      // ~1s at 60fps, then give up rather than spin forever.
      if (frames++ < 60) requestAnimationFrame(attempt);
    };

    attempt();
    return () => {
      cancelled = true;
    };
  }, [location]);
}
