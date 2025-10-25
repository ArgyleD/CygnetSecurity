import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2, Building2, TrendingUp, Shield, ArrowRight, BarChart3, FileCheck } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";

const predefinedServices = [
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

const caseStudies = [
  {
    id: 1,
    title: "Proactive Threat Response at Scale",
    industry: "UK Government Department (19,000+ staff)",
    icon: Shield,
    problem:
      "Critical vulnerability affecting hundreds of locations. Fragmented visibility across departments with no centralized management.",
    approach:
      "Led rapid response identifying affected applications, assessing attack vectors, and coordinating remediation. Implemented a federated response model balancing central oversight with departmental autonomy.",
    outcome:
      "Secured management backing for systemic remediation. Established scalable vulnerability governance model. Transformed reactive firefighting into proactive risk management.",
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
      "Measurably improved remediation workflows and risk visibility across global operations. Enhanced vendor accountability through clear success metrics.",
  },
  {
    id: 3,
    title: "Cultural Shift in Vulnerability Management",
    industry: "Global Engineering Consultancy (36,000+ employees, 30+ countries)",
    icon: Building2,
    problem:
      "Traditional vulnerability management failing to reduce exposure. Leadership skeptical of security value. No integration of modern risk-based methodologies.",
    approach:
      "Drove cultural transformation integrating EPSS and SSVC into triage processes. Improved asset tagging and inventory accuracy. Built executive dashboards showing business impact.",
    outcome:
      "Measurable reduction in vulnerability exposure. Successfully influenced leadership decisions through data-driven insights. Shifted perception of security from cost centre to risk enabler.",
  },
  {
    id: 4,
    title: "Security Transformation & ISO27001 Accreditation",
    industry: "Energy Sector Data Services (Critical Infrastructure)",
    icon: Shield,
    problem:
      "Organization lacked mature security practices and ISO27001 compliance. No formal ISMS, unclear SOC requirements, and regulatory compliance gaps.",
    approach:
      "Acted as strategic advisor embedding ISO27001-aligned practices. Led ISMS improvements, defined SOC procurement requirements, and implemented unified controls framework.",
    outcome:
      "Achieved ISO27001 accreditation. Significantly improved security maturity. Established sustainable compliance framework for critical national infrastructure protection.",
  },
];

export default function ServicesPage() {
  const [location] = useLocation();

  useEffect(() => {
    // Handle hash-based navigation within the page
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const handleContactClick = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              data-testid="heading-services-page"
            >
              Security Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              From bespoke consulting to structured work packages, choose the approach that best fits your security challenges. All engagements deliver measurable outcomes aligned to your business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Bespoke Consulting */}
      <section
        id="bespoke-consulting"
        className="py-20 md:py-32 bg-background"
        data-testid="section-bespoke-consulting"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Bespoke Consulting
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Outcome-driven engagements tailored to your unique security challenges. Addressing root causes, using proactive observations to enhance risk management, drive transformation, and protect revenue.
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
              onClick={handleContactClick}
              className="hover-elevate active-elevate-2"
              data-testid="button-book-call-bespoke"
            >
              Book an intro call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pre-defined Work Packages */}
      <section
        id="work-packages"
        className="py-20 md:py-32 bg-card"
        data-testid="section-work-packages"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Pre-defined Work Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transparent, predictable engagements with clear scope, timelines, and deliverables. Get started quickly with proven methodologies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {predefinedServices.map((service) => (
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
                  onClick={handleContactClick}
                  data-testid={`button-request-proposal-${service.id}`}
                >
                  Request proposal
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Metrics Toolkit */}
      <section
        id="security-metrics-toolkit"
        className="py-20 md:py-32 bg-background"
        data-testid="section-metrics-toolkit"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex p-4 bg-primary/10 rounded-md mb-6">
              <BarChart3 className="h-12 w-12 text-primary" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Security Metrics Toolkit Implementation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional customisation and automation of PowerBI templates for security metrics programs aligned to NIST SP 800-55.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-12">
            <Card className="p-8 overflow-visible">
              <h3 className="font-heading text-2xl font-semibold mb-6">
                What You Get
              </h3>
              <ul className="space-y-4">
                {[
                  "Customised PowerBI dashboard implementation",
                  "Excel data source configuration and automation guidance",
                  "Metrics Matrix™ one-page program overview",
                  "Integration with Teams, OneDrive, or SharePoint",
                  "Training on metric tracking and target management",
                  "Alignment to NIST 800-55 metric types",
                  "Documentation and ongoing support",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 overflow-visible">
              <h3 className="font-heading text-2xl font-semibold mb-6">
                Key Benefits
              </h3>
              <ul className="space-y-4">
                {[
                  "Visualise ANY security metric with customisable templates",
                  "Track measurements over time against defined targets",
                  "Group metrics by custom categories or NIST types",
                  "Action Dots for easy identification of metrics needing attention",
                  "Metric Cards showing percent of target achieved",
                  "Target Deviation Cards for variance analysis",
                  "Maintain up-to-date inventory of all security metrics",
                  "Quick 10-minute setup with professional implementation support",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="bg-card rounded-md p-8 mb-8">
            <h3 className="font-heading text-xl font-semibold mb-4">
              Built on SecureMetrics.io Templates
            </h3>
            <p className="text-muted-foreground mb-4">
              This service provides professional customisation and deployment of the Security Metrics Toolkit by SecureMetrics.io — a proven PowerBI solution trusted by security professionals worldwide.
            </p>
            <p className="text-sm text-muted-foreground">
              Cygnet Security is an independent consultant offering implementation services. The Security Metrics Toolkit is maintained by SecureMetrics.io.
            </p>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={handleContactClick}
              className="hover-elevate active-elevate-2"
              data-testid="button-metrics-toolkit-contact"
            >
              Discuss your requirements
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Cyber Essentials Implementation */}
      <section
        id="cyber-essentials"
        className="py-20 md:py-32 bg-card"
        data-testid="section-cyber-essentials"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex p-4 bg-primary/10 rounded-md mb-6">
              <FileCheck className="h-12 w-12 text-primary" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Cyber Essentials Implementation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional consulting services to prepare your organisation for Cyber Essentials accreditation — pass first time with confidence.
            </p>
          </div>

          <div className="mb-12">
            <Card className="p-8 overflow-visible">
              <h3 className="font-heading text-2xl font-semibold mb-6">
                What is Cyber Essentials?
              </h3>
              <p className="text-muted-foreground mb-6">
                Cyber Essentials is a UK Government-backed certification scheme that protects organisations against the most common cyber attacks. It demonstrates your commitment to cyber security and is often required for government contracts and supply chain relationships.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-3">Why Get Certified?</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Required for UK Government contracts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Demonstrates commitment to suppliers and customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Protection against 80% of cyber attacks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Free cyber liability insurance (up to £25,000)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Competitive advantage in tender processes</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Two Levels Available</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-sm mb-1">Cyber Essentials</p>
                      <p className="text-sm text-muted-foreground">
                        Self-assessment questionnaire verified by certification body
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-1">Cyber Essentials Plus</p>
                      <p className="text-sm text-muted-foreground">
                        Includes hands-on technical verification and vulnerability scanning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mb-12">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-center">
              The Five Technical Controls
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Firewalls",
                  description: "Control network traffic between trusted and untrusted networks, blocking unauthorised access.",
                },
                {
                  title: "Secure Configuration",
                  description: "Remove or disable unnecessary functionality and change default passwords and settings.",
                },
                {
                  title: "Security Update Management",
                  description: "Apply security patches and updates promptly to fix known vulnerabilities.",
                },
                {
                  title: "User Access Control",
                  description: "Ensure users only have access to data and services they need for their role.",
                },
                {
                  title: "Malware Protection",
                  description: "Protect against malicious software using antivirus and application allow listing.",
                },
              ].map((control, idx) => (
                <Card key={idx} className="p-6 overflow-visible">
                  <h4 className="font-semibold mb-2">{control.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {control.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <Card className="p-8 overflow-visible">
              <h3 className="font-heading text-2xl font-semibold mb-6">
                Our Implementation Service
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-4">What We Do</h4>
                  <ul className="space-y-3">
                    {[
                      "Gap analysis against current requirements (v3.2)",
                      "Readiness assessment using NCSC Readiness Tool",
                      "Technical control implementation guidance",
                      "Asset inventory and scope definition",
                      "Documentation and evidence preparation",
                      "Self-assessment questionnaire support",
                      "Certification body liaison",
                      "Post-certification compliance support",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Why Choose Us</h4>
                  <ul className="space-y-3">
                    {[
                      "Ex-CREST certified consultant with deep technical expertise",
                      "Practical, business-focused approach",
                      "Experience across organisations from SMEs to Fortune 500",
                      "Focus on sustainable, long-term compliance",
                      "Clear communication with non-technical stakeholders",
                      "Proven track record of first-time certification success",
                      "Ongoing support after certification",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-background rounded-md p-6 mb-8">
            <p className="text-sm text-muted-foreground text-center">
              Cyber Essentials is a UK Government scheme delivered by IASME and the National Cyber Security Centre (NCSC). 
              Cygnet Security is an independent consultant providing implementation services to help organisations achieve certification.
            </p>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={handleContactClick}
              className="hover-elevate active-elevate-2"
              data-testid="button-cyber-essentials-contact"
            >
              Start your certification journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
