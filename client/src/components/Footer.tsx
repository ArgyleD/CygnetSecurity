import logoImage from "@assets/20250909_2149_Swan Security Silhouette_remix_01k4qf4f93f81sbgc70ssh6f61 copy_1760935041316.png";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Work with me", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      className="bg-card border-t border-card-border py-12"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImage} alt="Cygnet Security" className="h-7 w-7" />
              <span className="font-heading font-semibold text-lg">
                Cygnet Security
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Bespoke cybersecurity consulting delivering outcome-driven
              security solutions. Reduce risk, protect revenue, and move
              faster—securely.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("#") ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li data-testid="text-contact-email">
                Email:{" "}
                <a
                  href="mailto:contact@cygnetsecurity.co.uk"
                  className="hover:text-primary transition-colors"
                >
                  contact@cygnetsecurity.co.uk
                </a>
              </li>
              <li data-testid="text-contact-location">London, UK</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-card-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Cygnet Security. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-privacy"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
