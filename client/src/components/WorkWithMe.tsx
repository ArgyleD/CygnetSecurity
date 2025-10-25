import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

export function WorkWithMe() {
  const handleCaseStudiesClick = () => {
    window.location.href = "/services#bespoke-consulting";
  };

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

        <div className="text-center mb-8">
          <Button
            size="lg"
            variant="outline"
            onClick={handleCaseStudiesClick}
            className="hover-elevate active-elevate-2"
            data-testid="button-case-studies"
          >
            <FileText className="mr-2 h-5 w-5" />
            Case studies
          </Button>
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
