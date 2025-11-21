import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MessageSquare, FileText } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Activate the Builder{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                in Everyone
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Whether you're a startup, a scale-up, or a legacy business, Beingsphere is your 
              partner in building from the inside-out. Transform your organization with ownership-driven 
              innovation that delivers real results.
            </p>
          </div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-10 shadow-medium hover:shadow-strong transition-all hover:-translate-y-1 bg-card">
              <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center mb-6">
                <FileText className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Free Organizational Audit</h3>
              <p className="text-muted-foreground mb-6">
                Get a comprehensive assessment of your organization's innovation readiness, 
                ownership culture, and transformation opportunities. No cost, no obligation.
              </p>
              <Button size="lg" className="w-full bg-gradient-hero hover:opacity-90 text-lg">
                Request Your Free Audit
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Card>

            <Card className="p-10 shadow-medium hover:shadow-strong transition-all hover:-translate-y-1 bg-card">
              <div className="w-14 h-14 bg-gradient-secondary rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="text-secondary-foreground" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Talk to a Builder Strategist</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a consultation with one of our transformation experts to explore 
                custom solutions for your organization's unique challenges and goals.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-secondary text-secondary hover:bg-secondary/10 text-lg"
              >
                Schedule a Call
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Card>
          </div>

          {/* Bottom CTA Banner */}
          <div className="bg-gradient-hero p-12 rounded-2xl shadow-strong text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join the hundreds of organizations that have unlocked their internal innovation 
              potential with Beingsphere. The future of your business starts from within.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 text-lg px-10"
              >
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-10"
              >
                Download Our Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
