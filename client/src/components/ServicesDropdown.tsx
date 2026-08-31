import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const servicesLinks = [
  { label: "Vulnerability & Exposure Management", href: "/services#vulnerability-exposure-management" },
  { label: "Technical Risk Advisory", href: "/services#technical-risk-advisory" },
  { label: "Cyber Essentials Readiness", href: "/services#cyber-essentials-readiness" },
  { label: "Selected Engagements", href: "/services#engagements" },
];

export function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

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
                onClick={() => setIsOpen(false)}
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
