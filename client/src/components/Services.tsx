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
    title: "Vulnerability & Exposure Management",
    href: "/services#vulnerability-exposure-management",
    description:
      "Turning an unmanageable backlog into a risk-based programme you can run and report on. EPSS and SSVC triage, SLAs by criticality, and metrics your board will read.",
    packages: [
      "Rapid Exposure Review",
      "Vulnerability Management Jumpstart",
      "Security Metrics Toolkit",
    ],
  },
  {
    title: "Technical Risk Advisory",
    href: "/services#technical-risk-advisory",
    description:
      "Connecting technical findings to business risk so leadership can act on them. Risk taxonomy, KRIs and KPIs, and remediation that outlives the pen test report.",
    packages: [
      "Technical Risk Management Accelerator",
      "Pen Test Readiness & Remediation",
    ],
  },
  {
    title: "Cyber Essentials Readiness",
    href: "/services#cyber-essentials-readiness",
    description:
      "Certification preparation with a first-time pass as the goal. Gap analysis, control implementation, evidence, and certification body liaison.",
    packages: ["Cyber Essentials Implementation"],
  },
];

export function Services() {
  const handleViewAllServices = () => {
    window.location.href = "/services";
  };

  const handleCaseStudiesClick = () => {
    window.location.href = "/services#engagements";
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
          <p
            className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4"
            data-testid="eyebrow-services"
          >
            What I do
          </p>
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
            Three areas of work, delivered personally. Each one can be scoped to your
            organisation, or run as a fixed-scope package with a stated timeline and
            defined deliverables.
          </p>
        </div>

        {/* Featured: proof of delivery */}
        <Card
          className="p-8 mb-10 overflow-visible border-primary/20 bg-card/60"
          data-testid="card-bespoke-featured"
          data-reveal
        >
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <Badge className="mb-4">Proven delivery</Badge>
              <h3
                className="font-heading text-2xl font-bold mb-4"
                data-testid="heading-bespoke"
              >
                Where this has worked
              </h3>
              <p className="text-muted-foreground mb-6">
                Engagements across UK government, critical national infrastructure, and
                global enterprise &mdash; spanning vulnerability management, security
                transformation, and strategic advisory.
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

        {/* Three areas of work */}
        <div className="grid gap-6 md:grid-cols-3 mb-12" data-reveal-stagger>
          {serviceCards.map((service, idx) => (
            <Card
              key={idx}
              className="p-6 overflow-visible flex flex-col"
              data-testid={`card-service-${idx + 1}`}
              data-reveal-item
            >
              <h3 className="font-heading text-lg font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1">
                {service.description}
              </p>
              <ul className="space-y-2 border-t border-border pt-4">
                {service.packages.map((name) => (
                  <li key={name} className="text-sm border-l-2 border-primary/40 pl-3">
                    {name}
                  </li>
                ))}
              </ul>
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
