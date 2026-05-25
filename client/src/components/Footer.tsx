import logoImage from "@assets/2025-Logo-Cropped-BP - Copy_1760951178028.png";
import { LOGO_FILTER, CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-card border-t border-card-border py-12"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logoImage}
                alt="Cygnet Security Logo - Cybersecurity Consulting"
                className="h-9 w-9"
                style={{ filter: LOGO_FILTER }}
              />
              <span className="font-heading font-semibold text-lg">
                Cygnet Security
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Cygnet Security delivers bespoke cybersecurity consulting to government and enterprise clients. Outcome-driven engagements that connect technical risk to business results.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li data-testid="text-contact-email">
                Email:{" "}
                <a
                  href={CONTACT_EMAIL}
                  className="hover:text-primary transition-colors"
                >
                  ryan[@]cygnetsecurity.co.uk
                </a>
              </li>
              <li data-testid="text-contact-location">
                Cygnet Security Ltd
                <br />
                Aston Rd, Nuneaton, Warwickshire, CV11 5EJ
                <br />
                Company Registration: 11168915
              </li>
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
