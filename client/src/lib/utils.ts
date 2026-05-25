import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Navigate to a hash section on the home page.
 * If already on "/", scrolls smoothly. Otherwise redirects to "/#section".
 */
export function navigateToSection(href: string, currentPath: string, closeFn?: () => void) {
  closeFn?.();
  if (currentPath !== "/" || !href.startsWith("#")) {
    window.location.href = href.startsWith("#") ? "/" + href : href;
  } else {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }
}
