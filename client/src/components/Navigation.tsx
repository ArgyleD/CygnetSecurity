import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { ServicesDropdown } from "./ServicesDropdown";
import { Linkedin, Menu, X, Mail, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
import logoImage from "@assets/2025-Logo-Cropped-BP - Copy_1760951178028.png";
import { LOGO_FILTER, CONTACT_EMAIL, LINKEDIN_URL, WHATSAPP_URL } from "@/lib/constants";
import { navigateToSection } from "@/lib/utils";

const navItems = [
  { label: "Engagements", href: "#work" },
  { label: "About", href: "#about" },
  // { label: "Blog", href: "/blog" }, // Hidden for first release - restore for v2
];

const mobileServicesLinks = [
  { label: "Bespoke Consulting", href: "/services#bespoke-consulting" },
  { label: "Pre-defined Work Packages", href: "/services#work-packages" },
  { label: "Security Metrics Toolkit", href: "/services#security-metrics-toolkit" },
  { label: "Cyber Essentials", href: "/services#cyber-essentials" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobile = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when panel is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-sm border-b border-card-border"
            : "bg-card"
        }`}
        data-testid="navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/">
              <button
                className="flex items-center gap-2 hover-elevate active-elevate-2 px-2 py-1 rounded-md"
                data-testid="link-home"
              >
                <img
                  src={logoImage}
                  alt="Cygnet Security Logo - Cybersecurity Consulting"
                  className="h-[46px] w-[46px]"
                  style={{ filter: LOGO_FILTER }}
                />
                <span className="font-heading font-semibold text-xl">
                  Cygnet Security
                </span>
              </button>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1 flex-1">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => navigateToSection(item.href, location)}
                  className="hover-elevate active-elevate-2"
                  data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </Button>
              ))}
              <ServicesDropdown />
            </div>

            {/* Desktop icons + theme toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hidden md:flex hover-elevate active-elevate-2"
                data-testid="button-whatsapp"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hidden md:flex hover-elevate active-elevate-2"
                data-testid="button-email"
              >
                <a href={CONTACT_EMAIL}>
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover-elevate active-elevate-2"
                data-testid="button-linkedin"
              >
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <ThemeToggle />

              {/* Hamburger — mobile only */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover-elevate active-elevate-2"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                data-testid="button-mobile-menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile slide-in panel ───────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobile}
              data-testid="mobile-menu-backdrop"
            />

            {/* Panel */}
            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-[min(340px,100vw)] bg-card border-l border-card-border flex flex-col shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              data-testid="mobile-menu-panel"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-card-border shrink-0">
                <div className="flex items-center gap-2">
                  <img
                    src={logoImage}
                    alt="Cygnet Security Logo"
                    className="h-8 w-8"
                    style={{ filter: LOGO_FILTER }}
                  />
                  <span className="font-heading font-semibold text-base">
                    Cygnet Security
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeMobile}
                  aria-label="Close menu"
                  data-testid="button-mobile-close"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto px-6 py-6">

                {/* Primary nav items */}
                <div className="space-y-0 mb-6">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => navigateToSection(item.href, location, closeMobile)}
                      className="w-full text-left py-4 font-heading font-semibold text-lg border-b border-card-border/50 hover:text-primary transition-colors"
                      data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Services sub-section */}
                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    Services
                  </p>
                  <div className="space-y-1">
                    {mobileServicesLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={closeMobile}
                        className="flex items-center justify-between py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors border-b border-card-border/30 last:border-0"
                        data-testid={`link-mobile-service-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {link.label}
                        <ArrowRight className="h-3.5 w-3.5 opacity-40" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Primary CTA */}
                <Button
                  className="w-full hover-elevate active-elevate-2"
                  onClick={() => navigateToSection("#contact", location, closeMobile)}
                  data-testid="button-mobile-cta"
                >
                  Request a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Panel footer — contact links */}
              <div className="px-6 py-6 border-t border-card-border shrink-0 space-y-3">
                <a
                  href={CONTACT_EMAIL}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-mobile-email"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  ryan@cygnetsecurity.co.uk
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-mobile-whatsapp"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-primary" />
                  WhatsApp
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-mobile-linkedin"
                >
                  <Linkedin className="h-4 w-4 shrink-0 text-primary" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
