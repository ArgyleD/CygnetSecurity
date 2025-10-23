import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Rapid Exposure Review",
    duration: "2-3 weeks",
    price: "Contact for pricing",
    description:
      "Comprehensive external footprint assessment with prioritized exposure backlog and actionable remediation roadmap.",
    deliverables: [
      "External attack surface inventory",
      "Prioritized exposure backlog by risk",
      "Executive summary with risk metrics",
      "30/60/90 day action plan",
      "Remediation guidance and support",
    ],
  },
  {
    id: 2,
    title: "Vulnerability Management Jumpstart",
    duration: "4 weeks",
    price: "Contact for pricing",
    description:
      "Transform overwhelming vulnerability backlogs into a sustainable, risk-based remediation program using modern frameworks (EPSS, SSVC, CVSS).",
    deliverables: [
      "Scanning tool tune-up and optimization",
      "EPSS/SSVC-based triage framework implementation",
      "Risk-based prioritization replacing pure CVSS scoring",
      "SLA policy by criticality level",
      "Executive KPI/KRI dashboard",
      "Operating guide and runbooks",
    ],
  },
  {
    id: 3,
    title: "Pen Test Readiness & Remediation",
    duration: "4-6 weeks",
    price: "Contact for pricing",
    description:
      "Prepare for penetration testing with pre-hardening and support high-impact remediation efforts post-test.",
    deliverables: [
      "Pre-test readiness assessment",
      "Control hardening recommendations",
      "Finding prioritization framework",
      "Remediation sprint plan",
      "Re-test coordination and support",
    ],
  },
  {
    id: 4,
    title: "Technical Risk Management Accelerator",
    duration: "6-12 weeks",
    price: "Contact for pricing",
    description:
      "Connect technical security metrics to business outcomes with executive-ready risk reporting framework aligned to CIS Controls and ISO27001.",
    deliverables: [
      "Business-aligned risk taxonomy",
      "KRIs and KPIs dashboard with trend analysis",
      "Risk-to-revenue impact methodology",
      "CIS Controls/ISO27001 gap assessment",
      "Quarterly board-level summary",
      "Executive communication templates",
    ],
  },
];

export function Services() {
  const handleRequestProposal = (serviceName: string) => {
    console.log(`Request proposal for: ${serviceName}`);
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-card"
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            data-testid="heading-services"
          >
            Fixed-Cost Packages
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-services-intro"
          >
            Transparent, predictable engagements with clear scope, timelines,
            and deliverables. Get started quickly with proven methodologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.id}
              className="p-6 flex flex-col overflow-visible"
              data-testid={`card-service-${service.id}`}
            >
              <div className="flex-1">
                <div className="mb-4">
                  <Badge
                    variant="outline"
                    className="mb-3"
                    data-testid={`badge-duration-${service.id}`}
                  >
                    <Clock className="h-3 w-3 mr-1" />
                    {service.duration}
                  </Badge>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-4">
                    {service.price}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-3">Deliverables</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button
                className="w-full hover-elevate active-elevate-2"
                onClick={() => handleRequestProposal(service.title)}
                data-testid={`button-request-proposal-${service.id}`}
              >
                Request proposal
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
