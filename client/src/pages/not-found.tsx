import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import logoImage from "@assets/2025-Logo-Cropped-BP - Copy_1760951178028.png";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
          <img 
            src={logoImage} 
            alt="Cygnet Security Logo - Cybersecurity Consulting" 
            className="h-20 w-20"
            style={{ filter: 'brightness(0) saturate(100%) invert(56%) sepia(77%) saturate(435%) hue-rotate(123deg) brightness(95%) contrast(90%)' }}
          />
        </div>
        <h1
          className="font-heading text-6xl font-bold mb-4"
          data-testid="heading-404"
        >
          404
        </h1>
        <h2 className="font-heading text-2xl font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back to safety.
        </p>
        <Link href="/">
          <Button
            size="lg"
            className="hover-elevate active-elevate-2"
            data-testid="button-home"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
