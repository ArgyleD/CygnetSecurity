import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
          <Shield className="h-16 w-16 text-primary" />
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
