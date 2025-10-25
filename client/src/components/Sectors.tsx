import { Card } from "@/components/ui/card";
import {
  Building2,
  Landmark,
  Zap,
  Plane,
  Factory,
  Server,
  ShieldCheck,
  Globe,
} from "lucide-react";

const sectors = [
  {
    id: 1,
    name: "Government & Public Sector",
    icon: Landmark,
    description:
      "UK government departments, national security, justice services, and public institutions",
    experience: "Multiple departments, 19,000+ staff organizations",
  },
  {
    id: 2,
    name: "Financial Services",
    icon: Building2,
    description:
      "Banks, financial institutions, student loan providers, and fintech",
    experience: "£70B+ assets, multi-billion portfolios, PCI-DSS compliance",
  },
  {
    id: 3,
    name: "Energy & Critical Infrastructure",
    icon: Zap,
    description:
      "Energy sector data services, utilities, and critical national infrastructure",
    experience: "23M+ meter points, regulatory compliance, ISO27001",
  },
  {
    id: 4,
    name: "Aviation & Transportation",
    icon: Plane,
    description:
      "Airlines, logistics, and transportation infrastructure",
    experience: "17,000+ employees, operations in 38 countries",
  },
  {
    id: 5,
    name: "Engineering & Consultancy",
    icon: Factory,
    description:
      "Global design, engineering, and professional services firms",
    experience: "36,000+ employees across 30+ countries",
  },
  {
    id: 6,
    name: "Technology & Data Services",
    icon: Server,
    description:
      "Marketing analytics, cloud services, digital transformation, and managed services",
    experience: "60,000+ endpoints, 90+ countries, Fortune 500 clients",
  },
  {
    id: 7,
    name: "Multinational Corporations",
    icon: Globe,
    description:
      "Fortune 500 companies across tobacco, consumer goods, and global industries",
    experience: "80,000+ employees, operations in 170+ markets",
  },
  {
    id: 8,
    name: "Cybersecurity Services",
    icon: ShieldCheck,
    description:
      "Offensive security, penetration testing, and security consultancy firms",
    experience: "CREST-certified testing, compliance (PCI DSS, Cyber Essentials+)",
  },
];

export function Sectors() {
  return (
    <section
      id="sectors"
      className="py-20 md:py-32 bg-card"
      data-testid="section-sectors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            data-testid="heading-sectors"
          >
            Sectors Served
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-sectors-intro"
          >
            Trusted by organizations across critical sectors—from UK government
            departments to Fortune 500 multinationals. Deep expertise in
            regulated industries where security, compliance, and business
            continuity are non-negotiable.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <Card
                key={sector.id}
                className="p-6 overflow-visible hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-sector-${sector.id}`}
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-primary/10 rounded-md">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3
                  className="font-heading font-semibold text-lg mb-2"
                  data-testid={`heading-sector-${sector.id}`}
                >
                  {sector.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {sector.description}
                </p>
                <p className="text-xs text-muted-foreground/80 font-medium">
                  {sector.experience}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
