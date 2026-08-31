import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Navigate to a hash section, on this page or another one.
 *
 * Accepts a bare "#section" (the home page) or "/path#section". When already
 * on the target page it scrolls directly and syncs the URL; otherwise it does
 * a real navigation, which lands with the hash set and scrolls on load.
 *
 * Deliberately not a wouter <Link>: wouter pushes the hash without scrolling,
 * and its location is the pathname only, so a same-page hash change does not
 * re-run effects keyed on it.
 */
export function navigateToSection(href: string, currentPath: string, closeFn?: () => void) {
  closeFn?.();

  const [rawPath, hash] = href.split("#");
  const path = rawPath || "/";

  if (hash && currentPath === path) {
    const url = `${path === "/" ? "" : path}#${hash}`;
    window.history.replaceState(null, "", url);
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  window.location.href = hash ? `${path}#${hash}` : path;
}
