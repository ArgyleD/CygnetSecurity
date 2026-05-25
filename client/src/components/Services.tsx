import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const caseStudyPreviews = [
  {
    sector: "UK Government Department — 19,000+ staff",
    title: "Proactive Threat Response at Scale",
    outcome:
      "Federated vulnerability governance model established. Reactive firefighting transformed into proactive risk management.",
  },
  {
    sector: "Global Marketing & Data Services — 60,000 endpoints, 90+ countries",
    title: "Global VM Service Transformation",
    outcome:
      "Remediation workflows measurably improved across global operations with enhanced vendor accountability and risk visibility.",
  },
  {
    sector: "Global Engineering Consultancy — 36,000+ employees",
    title: "Cultural Shift in Vulnerability Management",
    outcome:
      "EPSS/SSVC triage delivered quantifiable exposure reduction. Security repositioned from cost centre to risk enabler.",
  },
];

const serviceCards = [
  {
    title: "Pre-defined Work Packages",
    description:
      "Transparent, predictable engagements with clear scope, timelines, and deliverables for rapid exposure review, vulnerability management, and more.",
  },
  {
    title: "Security Metrics Toolkit",
    description:
      "Professional PowerBI dashboard implementation aligned to NIST SP 800-53 for visualising and tracking security metrics programmes.",
  },
  {
    title: "Cyber Essentials",
    description:
      "Expert implementation services to prepare your organisation for UK Government-backed Cyber Essentials accreditation. Pass first time.",
  },
  {
    title: "Pen Test Support",
    description:
      "End-to-end penetration testing support covering assessment scoping, procurement, finding triage, and converting technical findings into actionable business changes.",
  },
];

export function Services() {
  const handleViewAllServices = () => {
    window.location.href = "/services";
  };

  const handleCaseStudiesClick = () => {
    window.location.href = "/services#bespoke-consulting";
  };

  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="work"
      className="py-20 md:py-32 bg-background"
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-reveal>
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            data-testid="heading-services"
          >
            Security Services
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-services-intro"
          >
            Choose from bespoke engagements for complex, cross-functional challenges or
            pre-defined work packages for defined outcomes with transparent scope and timelines.
          </p>
        </div>

        {/* Featured: Bespoke Consulting */}
        <Card
          className="p-8 mb-10 overflow-visible border-primary/20 bg-card/60"
          data-testid="card-bespoke-featured"
          data-reveal
        >
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <Badge className="mb-4">Primary Service</Badge>
              <h3
                className="font-heading text-2xl font-bold mb-4"
                data-testid="heading-bespoke"
              >
                Bespoke Consulting
              </h3>
              <p className="text-muted-foreground mb-6">
                Tailored engagements for complex, cross-functional security challenges with
                proven outcomes across government and enterprise. Spanning vulnerability
                management, security transformation, and strategic advisory.
              </p>
              <Button
                variant="outline"
                onClick={handleCaseStudiesClick}
                className="hover-elevate active-elevate-2"
                data-testid="button-case-studies"
              >
                View case studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-5">
              {caseStudyPreviews.map((study, idx) => (
                <div
                  key={idx}
                  className="border-l-2 border-primary/40 pl-4"
                  data-testid={`preview-case-study-${idx + 1}`}
                >
                  <p className="text-xs text-primary font-medium mb-1">{study.sector}</p>
                  <p className="text-sm font-semibold mb-1">{study.title}</p>
                  <p className="text-xs text-muted-foreground">{study.outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* 4 Service Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12" data-reveal-stagger>
          {serviceCards.map((service, idx) => (
            <Card
              key={idx}
              className="p-6 overflow-visible text-center"
              data-testid={`card-service-${idx + 1}`}
              data-reveal-item
            >
              <h3 className="font-heading text-lg font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="outline"
            onClick={handleViewAllServices}
            className="hover-elevate active-elevate-2"
            data-testid="button-view-all-services"
          >
            View all services
          </Button>
          <Button
            size="lg"
            onClick={handleContactClick}
            className="hover-elevate active-elevate-2"
            data-testid="button-request-consultation-services"
          >
            Request a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
