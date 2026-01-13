import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Network, Users, TrendingUp, UserPlus, BarChart, Settings } from "lucide-react";

const MentorMap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              MentorMap
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Build Internal Mentorship at Scale
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect your people, transfer knowledge, and strengthen culture through intelligent mentor-mentee matching and relationship management.
            </p>
            <Button size="lg" className="text-lg px-8">
              Bring MentorMap to Your Company <br></br>
              JOIN THE WAITLIST
            </Button>
          </div>
        </div>
      </section>

      {/* Visual Matching Logic */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Smart Matching, Better Relationships</h2>
            <p className="text-xl text-muted-foreground">AI-powered mentor-mentee pairing based on goals, skills, and culture fit</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-gradient-soft rounded-lg flex items-center justify-center mb-12 border border-border">
              <div className="text-center">
                <Network className="w-20 h-20 mx-auto mb-4 text-primary animate-pulse-slow" />
                <p className="text-muted-foreground text-lg">Interactive Matching Map Visualization</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Profile Analysis",
                  desc: "Analyze skills, experience, goals, and personality traits"
                },
                {
                  icon: <Network className="w-8 h-8" />,
                  title: "Intelligent Pairing",
                  desc: "Match mentors and mentees based on compatibility and growth potential"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Relationship Tracking",
                  desc: "Monitor engagement, progress, and impact over time"
                }
              ].map((feature, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300">
                  <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need for Mentorship Success</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <UserPlus className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Seamless Onboarding</h3>
              <p className="text-muted-foreground mb-4">
                Integrate MentorMap into your onboarding process to connect new hires with experienced team members from day one.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Automated matching for new employees</li>
                <li>• Structured 90-day mentorship plans</li>
                <li>• Progress tracking and check-ins</li>
              </ul>
            </Card>

            <Card className="p-8">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Performance Integration</h3>
              <p className="text-muted-foreground mb-4">
                Connect mentorship outcomes with performance reviews and promotion decisions.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Skills development tracking</li>
                <li>• Goal alignment with career paths</li>
                <li>• Mentor contribution recognition</li>
              </ul>
            </Card>

            <Card className="p-8">
              <Settings className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Admin Dashboard</h3>
              <p className="text-muted-foreground mb-4">
                HR teams get full visibility and control over the mentorship program.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Program health metrics</li>
                <li>• Participation rates and engagement</li>
                <li>• Custom matching criteria</li>
              </ul>
            </Card>

            <Card className="p-8">
              <BarChart className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Impact Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Measure the real impact of mentorship on retention, growth, and performance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Retention rate improvements</li>
                <li>• Skill development velocity</li>
                <li>• Promotion correlation data</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Organizations Use MentorMap</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "Fast-Growing Startups",
                desc: "Preserve culture and transfer knowledge as teams scale rapidly",
                impact: "60% reduction in onboarding time"
              },
              {
                title: "Enterprise Companies",
                desc: "Break down silos and enable cross-functional knowledge sharing",
                impact: "35% increase in internal mobility"
              },
              {
                title: "Leadership Development Programs",
                desc: "Pair emerging leaders with executives for strategic growth",
                impact: "2x faster leadership pipeline"
              }
            ].map((useCase, index) => (
              <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.desc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="bg-primary/10 text-primary px-4 py-2 rounded-md font-semibold whitespace-nowrap">
                      {useCase.impact}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Integrates With Your Existing Tools</h2>
            <p className="text-xl text-muted-foreground mb-12">
              MentorMap works seamlessly with your HRIS, communication tools, and performance management systems
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Slack", "Microsoft Teams", "BambooHR", "Workday", "Lattice", "15Five", "SAP", "Oracle"].map((tool, index) => (
                <Card key={index} className="p-6 flex items-center justify-center hover:shadow-medium transition-all duration-300">
                  <p className="font-semibold text-muted-foreground">{tool}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Transform Your Culture Through Mentorship
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Build stronger teams, retain top talent, and accelerate growth with intelligent mentorship at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Request a Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-primary-foreground border-white/30">
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentorMap;
