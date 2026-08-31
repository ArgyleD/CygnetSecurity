import markInk from "@assets/brand/cygnet-mark-ink.svg";
import markTeal from "@assets/brand/cygnet-mark-teal.svg";

interface BrandMarkProps {
  /** Tailwind size classes for the mark, e.g. "h-9 w-9". */
  className?: string;
  alt?: string;
}

/**
 * The Cygnet swan-and-lock mark, swapped by theme so each variant is the
 * artwork drawn in that colour rather than a filtered recolour of one file.
 * Only one image is ever displayed, so only one is exposed to screen readers.
 */
export function BrandMark({
  className = "h-9 w-9",
  alt = "Cygnet Security",
}: BrandMarkProps) {
  return (
    <>
      <img src={markInk} alt={alt} className={`${className} dark:hidden`} />
      <img src={markTeal} alt={alt} className={`${className} hidden dark:block`} />
    </>
  );
}
