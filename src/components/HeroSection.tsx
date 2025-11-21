import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-innovation.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <Sparkles className="text-primary" size={24} />
            <span className="text-primary font-medium">Transformation Starts Here</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up leading-tight">
            We Build People Who{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Build Companies
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-up">
            From intrapreneurship to team ownership, we help organizations turn people into 
            builders—of products, solutions, systems, and futures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button
              size="lg"
              onClick={() => scrollToSection("offerings")}
              className="bg-gradient-hero hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-medium group"
            >
              Explore Our Programs
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("cta")}
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
            >
              Request a Strategy Session
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Teams Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
