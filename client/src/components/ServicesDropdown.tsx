import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const servicesLinks = [
  { label: "Bespoke Consulting", href: "/services#bespoke-consulting" },
  { label: "Pre-defined Work Packages", href: "/services#work-packages" },
  { label: "Security Metrics Toolkit", href: "/services#security-metrics-toolkit" },
  { label: "Cyber Essentials", href: "/services#cyber-essentials" },
];

interface ServicesDropdownProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

export function ServicesDropdown({ mobile = false, onNavigate }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate();
    }
  };

  if (mobile) {
    return (
      <div className="flex flex-col">
        <Button
          variant="ghost"
          className="w-full justify-between hover-elevate active-elevate-2"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-services-toggle"
        >
          Services
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </Button>
        {isOpen && (
          <div className="pl-4 py-2 space-y-1">
            {servicesLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-sm hover-elevate active-elevate-2"
                  onClick={handleLinkClick}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        className="hover-elevate active-elevate-2"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-services-toggle"
      >
        Services
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-card-border rounded-md shadow-lg py-2 z-50">
          {servicesLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <Button
                variant="ghost"
                className="w-full justify-start px-4 py-2 text-sm hover-elevate active-elevate-2"
                onClick={handleLinkClick}
                data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
