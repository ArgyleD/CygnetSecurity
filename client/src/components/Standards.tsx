import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Award, CheckCircle2 } from "lucide-react";

const standards = [
  {
    id: 1,
    category: "Information Security",
    icon: ShieldCheck,
    items: [
      { name: "ISO/IEC 27001", description: "ISMS implementation & accreditation" },
      { name: "CIS Controls v8", description: "Critical security controls framework" },
      { name: "NIST Cybersecurity Framework", description: "Risk management standards" },
    ],
  },
  {
    id: 2,
    category: "Compliance & Regulatory",
    icon: Award,
    items: [
      { name: "PCI-DSS", description: "Payment card industry compliance" },
      { name: "HMG Security Standards", description: "UK government security requirements" },
      { name: "Cyber Essentials Plus", description: "UK cyber security certification" },
    ],
  },
  {
    id: 3,
    category: "Testing & Assurance",
    icon: CheckCircle2,
    items: [
      { name: "CREST Certified", description: "Penetration testing certification" },
      { name: "OWASP Standards", description: "Application security testing" },
      { name: "Cloud Security (AWS/Azure)", description: "Cloud infrastructure security" },
    ],
  },
];

const methodologies = [
  "EPSS (Exploit Prediction Scoring System)",
  "SSVC (Stakeholder-Specific Vulnerability Categorization)",
  "CVSS (Common Vulnerability Scoring System)",
  "SAST & DAST",
  "Red Team Operations",
  "Threat Modeling",
  "CMMC",
];

export function Standards() {
  return (
    <section
      id="standards"
      className="py-20 md:py-32 bg-card"
      data-testid="section-standards"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            data-testid="heading-standards"
          >
            Standards & Compliance Expertise
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-standards-intro"
          >
            Deep experience implementing, auditing, and advising on industry-leading
            security standards and frameworks. From ISO27001 accreditation to
            modern vulnerability management methodologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {standards.map((standard) => {
            const Icon = standard.icon;
            return (
              <Card
                key={standard.id}
                className="p-6 overflow-visible"
                data-testid={`card-standard-${standard.id}`}
              >
                <div className="mb-6">
                  <div className="inline-flex p-3 bg-primary/10 rounded-md mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3
                    className="font-heading font-semibold text-xl mb-2"
                    data-testid={`heading-standard-${standard.id}`}
                  >
                    {standard.category}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {standard.items.map((item, idx) => (
                    <li key={idx} className="border-l-2 border-primary/30 pl-4">
                      <div className="font-semibold text-sm mb-1">{item.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {item.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-card/50 overflow-visible" data-testid="card-methodologies">
          <div className="text-center mb-6">
            <h3 className="font-heading font-semibold text-2xl mb-2">
              Advanced Methodologies
            </h3>
            <p className="text-sm text-muted-foreground">
              Practical experience with cutting-edge vulnerability management and
              security assessment techniques
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {methodologies.map((methodology, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="text-sm py-2 px-4"
                data-testid={`badge-methodology-${idx}`}
              >
                {methodology}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
