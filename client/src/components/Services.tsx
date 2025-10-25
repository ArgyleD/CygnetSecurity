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
  const handleViewAllServices = () => {
    window.location.href = "/services";
  };

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-background"
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            data-testid="heading-services"
          >
            Security Services
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
            data-testid="text-services-intro"
          >
            From bespoke consulting to structured work packages, choose the approach that best fits your security challenges. All engagements deliver measurable outcomes aligned to business objectives.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <Card className="p-6 overflow-visible text-center" data-testid="card-service-overview-1">
            <h3 className="font-heading text-xl font-semibold mb-3">
              Bespoke Consulting
            </h3>
            <p className="text-sm text-muted-foreground">
              Tailored engagements for unique security challenges with proven outcomes across government, enterprise, and critical infrastructure.
            </p>
          </Card>

          <Card className="p-6 overflow-visible text-center" data-testid="card-service-overview-2">
            <h3 className="font-heading text-xl font-semibold mb-3">
              Pre-defined Work Packages
            </h3>
            <p className="text-sm text-muted-foreground">
              Transparent, predictable engagements with clear scope, timelines, and deliverables for rapid exposure review, vulnerability management, and more.
            </p>
          </Card>

          <Card className="p-6 overflow-visible text-center" data-testid="card-service-overview-3">
            <h3 className="font-heading text-xl font-semibold mb-3">
              Security Metrics Toolkit
            </h3>
            <p className="text-sm text-muted-foreground">
              Professional PowerBI dashboard implementation aligned to NIST SP 800-55 for visualizing and tracking security metrics programs.
            </p>
          </Card>

          <Card className="p-6 overflow-visible text-center" data-testid="card-service-overview-4">
            <h3 className="font-heading text-xl font-semibold mb-3">
              Cyber Essentials
            </h3>
            <p className="text-sm text-muted-foreground">
              Expert implementation services to prepare your organisation for UK Government-backed Cyber Essentials accreditation — pass first time.
            </p>
          </Card>

          <Card className="p-6 overflow-visible text-center" data-testid="card-service-overview-5">
            <h3 className="font-heading text-xl font-semibold mb-3">
              Pen Test Support
            </h3>
            <p className="text-sm text-muted-foreground">
              End-to-end penetration testing support covering assessment scoping, procurement, finding triage, and converting technical findings into actionable business changes.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={handleViewAllServices}
            className="hover-elevate active-elevate-2"
            data-testid="button-view-all-services"
          >
            View all services
            <CheckCircle2 className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
