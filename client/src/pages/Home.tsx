import { useEffect } from "react";
import { useLocation } from "wouter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Standards } from "@/components/Standards";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-card"
      data-testid="section-contact"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-reveal>
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            data-testid="heading-contact"
          >
            Contact
          </h2>
          <p
            className="text-lg text-muted-foreground"
            data-testid="text-contact-intro"
          >
            To discuss an engagement or request a proposal, contact Cygnet Security directly. All enquiries are responded to within one business day.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2" data-reveal-stagger>
          <Card className="p-8 overflow-visible" data-testid="card-contact-email" data-reveal-item>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-md shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:ryan@cygnetsecurity.co.uk"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-contact-email"
                >
                  ryan[@]cygnetsecurity.co.uk
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-8 overflow-visible" data-testid="card-contact-phone" data-reveal-item>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-md shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a
                  href="tel:+447917666267"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-contact-phone"
                >
                  +44 (0) 7917 666267
                </a>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
}

export default function Home() {
  const [location] = useLocation();
  useScrollReveal();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Standards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
