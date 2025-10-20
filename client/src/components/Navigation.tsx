import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Linkedin, Menu, X } from "lucide-react";
import logoImage from "@assets/2025-Logo-Cropped-BP_1760935178589.png";

const LINKEDIN_URL = "https://www.linkedin.com/in/rysward";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work with me", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, isRoute?: boolean) => {
    if (isRoute) return;
    
    setMobileMenuOpen(false);
    
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-card/95 backdrop-blur-sm border-b border-card-border" : "bg-card"
      }`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            data-testid="link-home"
          >
            <img src={logoImage} alt="Cygnet Security" className="h-8 w-8" />
            <span className="font-heading font-semibold text-xl">
              Cygnet Security
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link key={item.label} href={item.href}>
                  <Button
                    variant="ghost"
                    className="hover-elevate active-elevate-2"
                    data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ) : (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => handleNavClick(item.href)}
                  className="hover-elevate active-elevate-2"
                  data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Button>
              )
            ))}
          </div>

          <div className="flex items-center gap-2">
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
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover-elevate active-elevate-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-card-border py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link key={item.label} href={item.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover-elevate active-elevate-2"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className="w-full justify-start hover-elevate active-elevate-2"
                    onClick={() => handleNavClick(item.href)}
                    data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </Button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
