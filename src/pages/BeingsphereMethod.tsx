import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Workflow, FileText, Brain } from "lucide-react";

const BeingsphereMethod = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              The Beingsphere Method
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Our Proprietary Framework for Transforming People & Performance
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The Beingsphere Method is a proven system that transforms how individuals, teams, and organizations think, operate, and create value—at scale.
            </p>
            <Button size="lg" className="text-lg px-8">
              See The Method in Action
            </Button>
          </div>
        </div>
      </section>

      {/* The 3 Pillars */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The 3 Pillars of Transformation</h2>
            <p className="text-xl text-muted-foreground">People. Process. Policy. Together, they create lasting change.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="p-8 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">People</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Transform mindsets, behaviors, and capabilities through training, coaching, and ownership enablement.
              </p>
              <div className="text-left space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">Intrapreneurship mindset development</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">Leadership & accountability training</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">Self-led growth & reflection practices</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-primary">
              <Workflow className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Process</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Design systems, workflows, and tools that enable ownership, innovation, and efficiency.
              </p>
              <div className="text-left space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">Innovation frameworks & canvases</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">Digital tools (Reflect+Goal, MentorMap)</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">Streamlined workflows & automation</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
              <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Policy</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Embed structural changes that sustain culture, reward ownership, and enable long-term success.
              </p>
              <div className="text-left space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">Ownership-based performance systems</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">Innovation incentive structures</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">Culture governance & sustainability</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Visual Diagram */}
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-soft rounded-lg flex items-center justify-center border border-border">
              <div className="text-center">
                <Brain className="w-20 h-20 mx-auto mb-4 text-primary animate-pulse-slow" />
                <p className="text-muted-foreground text-lg">Interactive Transformation Journey Map</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Journey */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Transformation Journey</h2>
            <p className="text-xl text-muted-foreground">How we move organizations from status quo to breakthrough performance</p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                phase: "Phase 1: Assess",
                duration: "2-4 weeks",
                desc: "Deep-dive into current state—culture, processes, pain points, opportunities",
                deliverable: "Transformation roadmap & prioritized action plan"
              },
              {
                phase: "Phase 2: Activate",
                duration: "6-12 weeks",
                desc: "Train teams, deploy tools, and pilot new ways of working in targeted areas",
                deliverable: "Ownership-enabled teams & measurable behavior shifts"
              },
              {
                phase: "Phase 3: Embed",
                duration: "3-6 months",
                desc: "Scale successful pilots, institutionalize new processes, and reinforce through policy",
                deliverable: "Sustainable systems & culture that drives ongoing innovation"
              },
              {
                phase: "Phase 4: Evolve",
                duration: "Ongoing",
                desc: "Continuous improvement through feedback loops, coaching, and adaptation",
                deliverable: "Self-sustaining ownership culture with measurable business impact"
              }
            ].map((stage, index) => (
              <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-2xl font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-semibold">{stage.phase}</h3>
                      <span className="text-sm font-semibold text-primary">{stage.duration}</span>
                    </div>
                    <p className="text-muted-foreground mb-3">{stage.desc}</p>
                    <div className="bg-primary/10 text-primary px-4 py-2 rounded-md inline-block text-sm font-semibold">
                      ✓ {stage.deliverable}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules & Tools */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What's Inside The Method</h2>
            <p className="text-xl text-muted-foreground">Training modules and tools that power the transformation</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Training Modules</h3>
              <ul className="space-y-4">
                {[
                  "Intrapreneurship Fundamentals",
                  "Ownership Mindset Development",
                  "Innovation Frameworks & Methodologies",
                  "Strategic Problem-Solving",
                  "Leadership & Accountability",
                  "Design Thinking & Experimentation",
                  "Stakeholder Management & Pitching",
                  "Culture Building & Change Management"
                ].map((module, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{module}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Digital Tools</h3>
              <ul className="space-y-4">
                {[
                  "Reflect+Goal OS (Personal efficiency)",
                  "Ownership Canvas (Problem mapping)",
                  "MentorMap (Internal mentorship)",
                  "TeamOS (Team self-management)",
                  "Innovation Dashboard (Tracking)",
                  "Culture Health Metrics",
                  "Performance Alignment Tools",
                  "Knowledge Transfer Systems"
                ].map((tool, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{tool}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary-foreground">Our Philosophy</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card className="p-8 bg-white/10 border-white/20">
                <h3 className="text-xl font-semibold mb-3 text-primary-foreground">Self-Led Growth</h3>
                <p className="text-primary-foreground/90">
                  We believe people grow best when they own their journey. Our method empowers individuals to lead their own development.
                </p>
              </Card>
              <Card className="p-8 bg-white/10 border-white/20">
                <h3 className="text-xl font-semibold mb-3 text-primary-foreground">Ownership Mindset</h3>
                <p className="text-primary-foreground/90">
                  Ownership isn't just accountability—it's about thinking like a builder, solving problems proactively, and creating value.
                </p>
              </Card>
              <Card className="p-8 bg-white/10 border-white/20">
                <h3 className="text-xl font-semibold mb-3 text-primary-foreground">AI-Enhanced Efficiency</h3>
                <p className="text-primary-foreground/90">
                  We leverage AI to augment human capability—not replace it. Our tools help people think better and execute faster.
                </p>
              </Card>
              <Card className="p-8 bg-white/10 border-white/20">
                <h3 className="text-xl font-semibold mb-3 text-primary-foreground">Sustainable Change</h3>
                <p className="text-primary-foreground/90">
                  Real transformation isn't a one-time event. We build systems that evolve with your organization.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience The Beingsphere Method
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            See how our framework can transform your people, processes, and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Request a Method Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Download Framework Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BeingsphereMethod;
