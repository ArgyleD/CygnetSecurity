import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Shield, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Enterprise Security Transformation",
    industry: "Financial Services",
    icon: Building2,
    problem:
      "Fragmented security tools and unclear risk visibility across 200+ applications and cloud infrastructure.",
    approach:
      "Designed unified exposure management framework, consolidated tooling, and implemented risk-based prioritization methodology.",
    outcome:
      "Reduced critical exposure backlog by 67% in 6 months. Board-level risk reporting established with clear business impact metrics.",
  },
  {
    id: 2,
    title: "Vulnerability Management Overhaul",
    industry: "Healthcare Technology",
    icon: Shield,
    problem:
      "Overwhelming vulnerability backlog (10,000+) with no clear remediation strategy or SLA framework.",
    approach:
      "Implemented risk-based triage process, tuned scanning tools, defined SLAs by criticality, and built executive KPI dashboard.",
    outcome:
      "Achieved 90% SLA compliance within 90 days. Reduced mean time to remediation by 53%. Established sustainable operating model.",
  },
  {
    id: 3,
    title: "Technical Risk Governance",
    industry: "SaaS Platform",
    icon: TrendingUp,
    problem:
      "Disconnect between technical security metrics and business outcomes. Board unable to connect security investment to revenue protection.",
    approach:
      "Developed risk taxonomy aligned to business objectives, created KRIs tied to revenue impact, and built quarterly board-ready reporting.",
    outcome:
      "Secured 40% increase in security budget. Enabled data-driven prioritization. Established security as business enabler, not blocker.",
  },
];

export function WorkWithMe() {
  const handleCTAClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="work"
      className="py-20 md:py-32 bg-background"
      data-testid="section-work"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            data-testid="heading-work"
          >
            Bespoke Consulting
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-work-intro"
          >
            Outcome-driven engagements tailored to your unique security
            challenges. I address root causes behind vulnerabilities, using
            proactive observations to enhance risk management, drive
            transformation, and reduce risk while protecting revenue.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {caseStudies.map((study) => {
            const Icon = study.icon;
            return (
              <Card
                key={study.id}
                className="p-6 hover-elevate overflow-visible"
                data-testid={`card-case-study-${study.id}`}
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-primary/10 rounded-md mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {study.industry}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Problem</h4>
                    <p className="text-sm text-muted-foreground">
                      {study.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Approach</h4>
                    <p className="text-sm text-muted-foreground">
                      {study.approach}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Outcome</h4>
                    <p className="text-sm text-primary/90">{study.outcome}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={handleCTAClick}
            className="hover-elevate active-elevate-2"
            data-testid="button-book-call"
          >
            Book an intro call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
