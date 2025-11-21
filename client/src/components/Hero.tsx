import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackgroundImage from "@assets/generated_images/Cybersecurity_hero_background_image_f3783b9c.png";

export function Hero() {
  const handleCTAClick = (section: string) => {
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent"
          data-testid="heading-hero"
        >
          Cygnet Security: Reduce risk. Protect revenue. Move fast, securely.
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed"
          data-testid="text-hero-subtitle"
        >
          Technical security consulting with over a decade advising executive
          and senior leadership on risk. We blend business acumen with deep
          security expertise to design and operate assurance processes that
          connect risk to business outcomes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => handleCTAClick("#work")}
            className="min-w-[200px] hover-elevate active-elevate-2"
            data-testid="button-work-with-me"
          >
            Work with me
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => handleCTAClick("#services")}
            className="min-w-[200px] backdrop-blur-sm bg-background/20 hover-elevate active-elevate-2"
            data-testid="button-view-services"
          >
            View services
          </Button>
        </div>
      </div>
    </section>
  );
}
