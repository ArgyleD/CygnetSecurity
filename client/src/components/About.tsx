import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, LineChart, Wrench, Download } from "lucide-react";
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
            Ryan Ward-McConville, Director — Cygnet Security
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
              alt="Ryan Ward-McConville, Director of Cygnet Security"
              className="w-full object-cover object-top"
              style={{ aspectRatio: "3/4" }}
              data-testid="img-headshot"
            />
            <div className="px-4 py-3 border-t border-border text-center">
              <p className="font-heading text-sm font-semibold">Ryan Ward-McConville</p>
              <p className="text-xs text-primary font-medium mt-0.5">Director, Cygnet Security</p>
            </div>
          </div>

          {/* Bio content */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3"
              data-testid="eyebrow-about"
            >
              Who you&rsquo;re working with
            </p>
            <h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              data-testid="heading-about"
            >
              About Cygnet Security
            </h2>

            <p className="text-muted-foreground mb-5">
              I&rsquo;m Ryan Ward-McConville. I&rsquo;ve spent over a decade advising executive and senior leadership on risk across government, financial services, and global enterprise &mdash; combining deep technical expertise with the business context leadership teams need, and translating complex risk into decisions they can actually make.
            </p>

            <p className="text-muted-foreground mb-8">
              I founded Cygnet Security in 2018 to do consulting that addresses the root causes of security exposure rather than surface-level fixes. My engagements span vulnerability management, threat modelling, security transformation, and strategic advisory, with outcomes measured against business risk rather than technical metrics alone.
            </p>

            <div className="border-l-2 border-primary pl-4 mb-8 py-1">
              <p className="text-sm font-semibold leading-relaxed">
                Every engagement is delivered by me personally. No account managers. No handoffs. No junior resources. You work directly with a senior practitioner from initial scoping through to delivery. For continuity of service, I maintain relationships with a trusted network of vetted associate practitioners and documented handover procedures &mdash; so engagements stay on track when surge capacity or specialist cover is required.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="secondary" data-testid="badge-cert-1">Penetration Testing</Badge>
              <Badge variant="secondary" data-testid="badge-cert-3">Red Teaming</Badge>
              <Badge variant="secondary" data-testid="badge-cert-4">ISO27001</Badge>
              <Badge variant="secondary" data-testid="badge-cert-5">Security Operations</Badge>
              <Badge variant="secondary" data-testid="badge-cert-6">Risk Assessment</Badge>
              <Badge variant="secondary" data-testid="badge-cert-7">Threat Modelling</Badge>
            </div>

            <a href="/Cygnet-Security-Capability-Statement.pdf" download>
              <Button
                variant="outline"
                className="hover-elevate active-elevate-2"
                data-testid="link-download-capability-statement"
              >
                Download Capability Statement
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </a>
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
