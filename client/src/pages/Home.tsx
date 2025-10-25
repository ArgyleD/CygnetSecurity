import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { WorkWithMe } from "@/components/WorkWithMe";
import { Sectors } from "@/components/Sectors";
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
        <div className="text-center mb-12">
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            data-testid="heading-contact"
          >
            Get in Touch
          </h2>
          <p
            className="text-lg text-muted-foreground"
            data-testid="text-contact-intro"
          >
            Ready to enhance your security posture? Let's discuss how I can help
            your organization reduce risk and protect revenue.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-8 overflow-visible" data-testid="card-contact-email">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-md shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:contact@cygnetsecurity.co.uk"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-contact-email"
                >
                  contact@cygnetsecurity.co.uk
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-8 overflow-visible" data-testid="card-contact-phone">
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

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Typically respond within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Impact />
        <WorkWithMe />
        <Sectors />
        <Services />
        <Standards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
