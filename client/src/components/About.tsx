import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, LineChart, Wrench } from "lucide-react";
import headshotImage from "@assets/generated_images/Professional_consultant_headshot_placeholder_dfcbbaa6.png";

const pillars = [
  {
    icon: Target,
    title: "Business-aligned",
    description:
      "Security decisions driven by business outcomes, not just technical metrics.",
  },
  {
    icon: LineChart,
    title: "Evidence-driven",
    description:
      "Data-backed recommendations with measurable impact on risk and revenue.",
  },
  {
    icon: Wrench,
    title: "Builder's mindset",
    description:
      "Hands-on approach to designing and implementing sustainable security processes.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-background"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              data-testid="heading-about"
            >
              About Ryan Ward-McConville
            </h2>

            <blockquote className="border-l-4 border-primary pl-6 mb-8">
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "I blend business acumen with deep security expertise to design
                and operate assurance processes that connect risk to business
                outcomes. I address root causes behind vulnerabilities, using
                proactive observations to enhance risk management, drive
                transformation, and reduce risk while protecting revenue."
              </p>
            </blockquote>

            <p className="text-muted-foreground mb-6">
              With over a decade advising executive and senior leadership on
              risk, I've delivered transformative security outcomes for organizations ranging from 
              UK government departments to Fortune 500 multinationals. From leading proactive responses 
              to critical threats (Log4J) to driving ISO27001 accreditations and managing vulnerability 
              programs across 60,000+ endpoints globally—I translate complex security challenges into 
              actionable business strategies.
            </p>

            <p className="text-muted-foreground mb-6">
              Founded Cygnet Security in 2018 to deliver bespoke consulting that moves beyond
              compliance checkboxes. My work spans vulnerability management, threat modeling, security 
              transformation, and strategic advisory—always connecting technical security to measurable 
              business outcomes.
            </p>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" data-testid="badge-cert-1">
                CREST Certified
              </Badge>
              <Badge variant="secondary" data-testid="badge-cert-2">
                Penetration Testing
              </Badge>
              <Badge variant="secondary" data-testid="badge-cert-3">
                AWS & Azure
              </Badge>
              <Badge variant="secondary" data-testid="badge-cert-4">
                ISO27001
              </Badge>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={headshotImage}
                alt="Ryan Ward-McConville"
                className="rounded-md w-full max-w-md mx-auto shadow-xl"
                data-testid="img-headshot"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={idx}
                className="p-6 text-center overflow-visible"
                data-testid={`card-pillar-${idx + 1}`}
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-md mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {pillar.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
