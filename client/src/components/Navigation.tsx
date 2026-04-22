import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { ServicesDropdown } from "./ServicesDropdown";
import { Linkedin, Menu, X, Mail, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/2025-Logo-Cropped-BP - Copy_1760951178028.png";

const LINKEDIN_URL = "https://www.linkedin.com/in/rysward";
const WHATSAPP_URL = "https://wa.me/447917666267";
const EMAIL_URL = "mailto:ryan@cygnetsecurity.co.uk";

const LOGO_FILTER =
  "brightness(0) saturate(100%) invert(56%) sepia(77%) saturate(435%) hue-rotate(123deg) brightness(95%) contrast(90%)";

const navItems = [
  { label: "Engagements", href: "#work" },
  { label: "About", href: "#about" },
  // { label: "Blog", href: "/blog", isRoute: true }, // Hidden for first release - restore for v2
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

  const handleNavClick = (href: string, isRoute?: boolean) => {
    if (isRoute) return;
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      if (location !== "/") {
        window.location.href = "/" + href;
      } else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    if (location !== "/") {
      window.location.href = "/#contact";
    } else {
      const element = document.querySelector("#contact");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                  onClick={() => handleNavClick(item.href)}
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
                  <SiWhatsapp className="h-5 w-5" />
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
                <a href={EMAIL_URL}>
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
              onClick={() => setMobileMenuOpen(false)}
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
                  onClick={() => setMobileMenuOpen(false)}
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
                      onClick={() => handleNavClick(item.href)}
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
                        onClick={() => setMobileMenuOpen(false)}
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
                  onClick={handleContactClick}
                  data-testid="button-mobile-cta"
                >
                  Request a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Panel footer — contact links */}
              <div className="px-6 py-6 border-t border-card-border shrink-0 space-y-3">
                <a
                  href={EMAIL_URL}
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
                  <SiWhatsapp className="h-4 w-4 shrink-0 text-primary" />
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
