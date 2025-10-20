import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Shield, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Proactive Threat Response at Scale",
    industry: "UK Government Department (19,000+ staff)",
    icon: Shield,
    problem:
      "Critical vulnerability crisis (Log4J) threatening hundreds of locations. Fragmented vulnerability visibility across departments with no centralized management.",
    approach:
      "Led rapid response identifying affected applications, assessing attack vectors, and coordinating remediation. Implemented a federated response model balancing central oversight with departmental autonomy.",
    outcome:
      "Secured executive funding for systemic remediation. Established scalable vulnerability governance model. Transformed reactive firefighting into proactive risk management across entire department.",
  },
  {
    id: 2,
    title: "Global VM Service Transformation",
    industry: "Marketing Data & Analytics (60,000 endpoints, 90+ countries)",
    icon: TrendingUp,
    problem:
      "Vulnerability management service covering 60,000 endpoints lacked strategic direction. Poor vendor alignment, unclear metrics, and inefficient remediation workflows.",
    approach:
      "Led complete strategic overhaul: defined KPIs/KRIs aligned to business risk, optimized tooling deployment, and restructured vendor delivery model. Implemented risk-based prioritization framework.",
    outcome:
      "Measurably improved remediation workflows and risk visibility across global operations. Enhanced vendor accountability through clear success metrics. Established sustainable, scalable VM capability.",
  },
  {
    id: 3,
    title: "Cultural Shift in Vulnerability Management",
    industry: "Global Engineering Consultancy (36,000+ employees, 30+ countries)",
    icon: Building2,
    problem:
      "Traditional vulnerability management failing to reduce exposure. Leadership skeptical of security value. No integration of modern risk-based methodologies.",
    approach:
      "Drove cultural transformation integrating EPSS and SSVC into triage processes. Improved asset tagging and inventory accuracy. Built executive dashboards showing business impact of vulnerability reduction.",
    outcome:
      "Measurable reduction in vulnerability exposure. Successfully influenced leadership decisions through data-driven insights. Shifted perception of security from cost center to risk management enabler.",
  },
  {
    id: 4,
    title: "Security Transformation & ISO27001 Accreditation",
    industry: "Energy Sector Data Services (Critical Infrastructure)",
    icon: Shield,
    problem:
      "Organization lacked mature security practices and ISO27001 compliance. No formal ISMS, unclear SOC requirements, and regulatory compliance gaps in critical infrastructure provider.",
    approach:
      "Acted as strategic advisor embedding ISO27001-aligned practices. Led ISMS improvements, defined SOC procurement requirements, and implemented unified controls framework. Delivered regulatory risk insights.",
    outcome:
      "Achieved ISO27001 accreditation. Significantly improved security maturity. Established sustainable compliance framework for critical national infrastructure protection.",
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
            challenges. Addressing root causes behind vulnerabilities, using
            proactive observations to enhance risk management, drive
            transformation, and reduce risk while protecting revenue.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
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
