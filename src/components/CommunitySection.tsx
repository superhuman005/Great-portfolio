import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Award, Linkedin, ArrowRight } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join The{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Movement
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Beingsphere isn't just a company. It's a new way of building businesses. 
            Join a network of intrapreneurs, thinkers, builders, and transformation architects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-all hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
              <Award className="text-primary-foreground" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Get Certified</h3>
            <p className="text-muted-foreground mb-6">
              Become a certified Intrapreneur Coach and lead transformation initiatives in organizations.
            </p>
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
              Learn About Certification
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </Card>

          <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-all hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="text-secondary-foreground" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Builder's Community</h3>
            <p className="text-muted-foreground mb-6">
              Connect with fellow intrapreneurs, share insights, and collaborate on building better organizations.
            </p>
            <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10">
              Join the Community
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </Card>

          <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-all hover:-translate-y-2">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Linkedin className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Follow on LinkedIn</h3>
            <p className="text-muted-foreground mb-6">
              Stay updated with insights, case studies, and thought leadership on intrapreneurship and ownership.
            </p>
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
              Follow Us
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </Card>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-gradient-soft p-12 text-center shadow-medium">
            <h3 className="text-3xl font-bold mb-4">Get the Weekly Spark</h3>
            <p className="text-muted-foreground mb-8">
              Join 10,000+ professionals receiving weekly insights on intrapreneurship, 
              ownership, and organizational transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-hero hover:opacity-90 px-8 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
