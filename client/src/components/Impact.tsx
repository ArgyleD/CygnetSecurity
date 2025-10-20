import { Card } from "@/components/ui/card";
import {
  Award,
  TrendingDown,
  Shield,
  Users,
  Globe,
  Target,
} from "lucide-react";

const impactMetrics = [
  {
    id: 1,
    icon: Globe,
    metric: "60,000+",
    label: "Endpoints Managed",
    description:
      "Led strategic overhaul of global vulnerability management service across 90+ countries",
  },
  {
    id: 2,
    icon: Shield,
    metric: "0-day",
    label: "Crisis Response Leadership",
    description:
      "Rapid deployment of enterprise-wide vulnerability management during critical zero-day threat",
  },
  {
    id: 3,
    icon: Award,
    metric: "ISO27001",
    label: "Accreditations Delivered",
    description:
      "Embedded ISO27001-aligned practices and led security transformations to successful accreditation",
  },
  {
    id: 4,
    icon: TrendingDown,
    metric: "Measurable",
    label: "Exposure Reduction",
    description:
      "Drove cultural shifts integrating EPSS/SSVC frameworks resulting in quantifiable vulnerability reduction",
  },
  {
    id: 5,
    icon: Users,
    metric: "19,000+",
    label: "Staff Organizations",
    description:
      "Implemented federated vulnerability management models for large government departments",
  },
  {
    id: 6,
    icon: Target,
    metric: "Executive",
    label: "Funding Secured",
    description:
      "Identified architectural risks and influenced leadership to secure remediation funding",
  },
];

export function Impact() {
  return (
    <section
      id="impact"
      className="py-20 md:py-32 bg-card"
      data-testid="section-impact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            data-testid="heading-impact"
          >
            Proven Impact
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-impact-intro"
          >
            Real results across critical security challenges—from rapid threat
            response to enterprise-wide transformation programs. Delivered for clients globally.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {impactMetrics.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                className="p-6 overflow-visible hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-impact-${item.id}`}
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-primary/10 rounded-md">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="mb-2">
                  <div className="font-heading text-3xl font-bold text-primary mb-1">
                    {item.metric}
                  </div>
                  <h3
                    className="font-heading font-semibold text-lg"
                    data-testid={`heading-impact-${item.id}`}
                  >
                    {item.label}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
