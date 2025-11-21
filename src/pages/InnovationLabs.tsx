import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Rocket, Users, TrendingUp, Award } from "lucide-react";

const InnovationLabs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Culture & Innovation Labs
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Embed Long-Term Transformation in Your Organization
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our labs don't just train—they rewire how your teams think, collaborate, and create value. From discovery to deployment, we work alongside you to build lasting change.
            </p>
            <Button size="lg" className="text-lg px-8">
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </section>

      {/* How Labs Work */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How the Lab Works</h2>
            <p className="text-xl text-muted-foreground">A structured journey from discovery to sustainable innovation</p>
          </div>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4">Discovery Phase</h3>
              <p className="text-muted-foreground mb-4">
                We immerse ourselves in your organization to understand culture, challenges, and opportunities.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>• Stakeholder interviews</li>
                <li>• Process mapping</li>
                <li>• Culture assessment</li>
                <li>• Opportunity identification</li>
              </ul>
            </Card>

            <Card className="p-8 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-primary">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4">Design Phase</h3>
              <p className="text-muted-foreground mb-4">
                Co-create solutions with your teams through workshops, sprints, and prototyping sessions.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>• Innovation sprints</li>
                <li>• Ownership workshops</li>
                <li>• Prototype development</li>
                <li>• Pilot program design</li>
              </ul>
            </Card>

            <Card className="p-8 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4">Deploy Phase</h3>
              <p className="text-muted-foreground mb-4">
                Implement, measure, and scale the solutions with ongoing support and iteration.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>• Implementation support</li>
                <li>• Change management</li>
                <li>• Impact measurement</li>
                <li>• Scale & sustainability</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Lab Offerings */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Lab Offerings</h2>
            <p className="text-xl text-muted-foreground">Tailored programs for every transformation need</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-medium transition-all duration-300">
              <Lightbulb className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Culture Sprints</h3>
              <p className="text-muted-foreground mb-4">
                Intensive 2-week programs to diagnose culture gaps and co-create transformation roadmaps
              </p>
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold mb-2">Ideal for:</p>
                <p>Organizations seeking rapid culture insights and actionable strategies</p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-medium transition-all duration-300">
              <Rocket className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Innovation Jams</h3>
              <p className="text-muted-foreground mb-4">
                High-energy sessions where teams solve real business problems and prototype solutions in 3-5 days
              </p>
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold mb-2">Ideal for:</p>
                <p>Companies wanting to generate breakthrough ideas fast</p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-medium transition-all duration-300">
              <Users className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Ownership Activation Weeks</h3>
              <p className="text-muted-foreground mb-4">
                Immersive week-long programs to shift teams from task-takers to problem-solvers
              </p>
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold mb-2">Ideal for:</p>
                <p>Teams needing accountability mindset transformation</p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-medium transition-all duration-300">
              <Target className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Embedded Labs</h3>
              <p className="text-muted-foreground mb-4">
                3-6 month engagements where our team works inside yours to build internal ventures
              </p>
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold mb-2">Ideal for:</p>
                <p>Organizations building new business units or products</p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-medium transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Process Reinvention Labs</h3>
              <p className="text-muted-foreground mb-4">
                Redesign critical workflows with the people who do the work, ensuring buy-in and execution
              </p>
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold mb-2">Ideal for:</p>
                <p>Teams facing inefficiency or legacy process challenges</p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-medium transition-all duration-300">
              <Award className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Culture Reinvention</h3>
              <p className="text-muted-foreground mb-4">
                Full organizational transformation programs spanning 6-12 months with measurable culture shifts
              </p>
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold mb-2">Ideal for:</p>
                <p>Companies undergoing major change or growth phases</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Business Challenges Solved */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real Business Challenges We've Solved</h2>
            <p className="text-xl text-muted-foreground">Impact stories from our innovation labs</p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                challenge: "Stagnant innovation pipeline in a 500-person company",
                solution: "Embedded 3-month Innovation Lab",
                outcome: "Launched 2 internal ventures, trained 50 intrapreneurs, established ongoing innovation process"
              },
              {
                challenge: "High turnover among mid-level managers",
                solution: "Ownership Activation Week + MentorMap integration",
                outcome: "Retention improved 45% in 6 months, manager engagement scores up 60%"
              },
              {
                challenge: "Siloed departments blocking cross-functional collaboration",
                solution: "Culture Sprint + Process Reinvention Lab",
                outcome: "New collaboration framework adopted, project delivery time reduced 30%"
              }
            ].map((story, index) => (
              <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">CHALLENGE</p>
                    <p className="text-muted-foreground">{story.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">SOLUTION</p>
                    <p className="text-muted-foreground">{story.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">OUTCOME</p>
                    <p className="text-foreground font-semibold">{story.outcome}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Leaders Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <p className="text-lg italic text-muted-foreground mb-6">
                "The Innovation Lab didn't just solve our immediate problem—it taught us how to solve problems ourselves. That's the real transformation."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10" />
                <div>
                  <p className="font-semibold">Chief Innovation Officer</p>
                  <p className="text-sm text-muted-foreground">Financial Services Company</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <p className="text-lg italic text-muted-foreground mb-6">
                "Beingsphere embedded themselves in our culture and helped us build something sustainable. They don't just consult—they transform."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10" />
                <div>
                  <p className="font-semibold">VP of People & Culture</p>
                  <p className="text-sm text-muted-foreground">Tech Startup</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Build Your Innovation Lab?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's design a transformation program that fits your organization's unique challenges and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book a Discovery Call
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-primary-foreground border-white/30">
              Download Lab Overview
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InnovationLabs;
