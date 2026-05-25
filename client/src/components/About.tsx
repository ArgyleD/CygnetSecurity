import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, LineChart, Wrench } from "lucide-react";
import headshotImage from "@assets/mugshot.jpg";

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
    title: "Implementation-led",
    description:
      "Security strategy realised through direct delivery. Programmes are designed to be operated, not just documented.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-card"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Pull-quote lead — full width */}
        <div className="border-l-4 border-primary pl-8 mb-16 max-w-3xl" data-reveal>
          <blockquote
            className="font-heading text-xl sm:text-2xl md:text-3xl font-medium leading-snug mb-4"
            data-testid="blockquote-about"
          >
            "Cybersecurity doesn't have to be a cost centre. With the right assurance, it becomes a tool for streamlining how your business works."
          </blockquote>
          <cite className="not-italic text-sm font-medium text-primary">
            Ryan Ward-McConville, Founder — Cygnet Security
          </cite>
        </div>

        {/* Profile row — small card left, bio right */}
        <div className="grid gap-10 lg:grid-cols-[240px_1fr] items-start mb-16" data-reveal>

          {/* Profile card */}
          <div
            className="rounded-md overflow-hidden border border-border bg-card shadow-xl"
            data-testid="card-profile"
          >
            <img
              src={headshotImage}
              alt="Ryan Ward-McConville, Founder of Cygnet Security"
              className="w-full object-cover object-top"
              style={{ aspectRatio: "3/4" }}
              data-testid="img-headshot"
            />
            <div className="px-4 py-3 border-t border-border text-center">
              <p className="font-heading text-sm font-semibold">Ryan Ward-McConville</p>
              <p className="text-xs text-primary font-medium mt-0.5">Founder, Cygnet Security</p>
            </div>
          </div>

          {/* Bio content */}
          <div>
            <h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              data-testid="heading-about"
            >
              About Cygnet Security
            </h2>

            <p className="text-muted-foreground mb-5">
              Cygnet Security was founded by Ryan Ward-McConville, a cybersecurity leader with over a decade advising executive and senior leadership on risk across government, financial services, and global enterprise. Ryan combines deep technical expertise with strong business acumen to design security programmes that protect what matters, translating complex risk into clear, actionable outcomes for leadership teams.
            </p>

            <p className="text-muted-foreground mb-8">
              Founded in 2018, Cygnet Security delivers bespoke consulting that addresses the root causes of security exposure, not surface-level fixes. Engagements span vulnerability management, threat modelling, security transformation, and strategic advisory, with outcomes measured against business risk rather than technical metrics alone.
            </p>

            <div className="border-l-2 border-primary pl-4 mb-8 py-1">
              <p className="text-sm font-semibold leading-relaxed">
                Every engagement is delivered personally by Ryan. No account managers. No handoffs. No junior resources. Clients work directly with a senior practitioner from initial scoping through to delivery.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" data-testid="badge-cert-1">Penetration Testing</Badge>
              <Badge variant="secondary" data-testid="badge-cert-3">Red Teaming</Badge>
              <Badge variant="secondary" data-testid="badge-cert-4">ISO27001</Badge>
              <Badge variant="secondary" data-testid="badge-cert-5">Security Operations</Badge>
              <Badge variant="secondary" data-testid="badge-cert-6">Risk Assessment</Badge>
              <Badge variant="secondary" data-testid="badge-cert-7">Threat Modelling</Badge>
            </div>
          </div>
        </div>

        {/* Pillar cards — unchanged */}
        <div className="grid gap-8 md:grid-cols-3" data-reveal-stagger>
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={idx}
                className="p-6 text-center overflow-visible"
                data-testid={`card-pillar-${idx + 1}`}
                data-reveal-item
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
