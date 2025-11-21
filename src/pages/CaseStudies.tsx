import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, TrendingUp, Users, Target, Award, Play } from "lucide-react";
import { useState } from "react";

const CaseStudies = () => {
  const [selectedSector, setSelectedSector] = useState("all");

  const caseStudies = [
    {
      sector: "tech",
      company: "FastGrowth SaaS Company",
      challenge: "Rapid scaling led to culture dilution and siloed teams. Innovation stalled as teams waited for direction from founders.",
      intervention: "6-month Innovation Lab + Intrapreneurship Accelerator for 50 team members",
      outcomes: [
        "3 internal products launched",
        "Employee engagement increased 65%",
        "Retention improved 40%",
        "Time-to-market reduced 30%"
      ],
      quote: "Beingsphere helped us preserve our startup DNA while scaling like an enterprise. Our teams now own problems instead of escalating them.",
      metrics: {
        innovation: "+200%",
        retention: "+40%",
        productivity: "+35%"
      }
    },
    {
      sector: "finance",
      company: "Regional Commercial Bank",
      challenge: "Legacy hierarchical culture stifled employee initiative. High turnover among mid-level managers. Slow adaptation to digital banking.",
      intervention: "Executive Leadership Intensive + MentorMap + Ownership Bootcamps for 200 employees",
      outcomes: [
        "Manager retention up 45%",
        "Digital product adoption increased 80%",
        "Internal innovation program established",
        "Cross-departmental collaboration improved"
      ],
      quote: "We went from a 'wait for approval' culture to a 'test and learn' culture. The transformation has been remarkable.",
      metrics: {
        innovation: "+180%",
        retention: "+45%",
        productivity: "+50%"
      }
    },
    {
      sector: "fmcg",
      company: "Consumer Goods Manufacturer",
      challenge: "Inefficient processes and low employee engagement. Teams operated in silos with minimal knowledge sharing.",
      intervention: "Culture Sprint + Process Reinvention Lab + Reflect+Goal deployment",
      outcomes: [
        "Manufacturing efficiency up 25%",
        "Employee productivity increased 40%",
        "Cross-functional projects doubled",
        "Quality improvements across product lines"
      ],
      quote: "Our teams now see themselves as problem-solvers, not just task-executors. The mindset shift has been transformative.",
      metrics: {
        innovation: "+120%",
        retention: "+30%",
        productivity: "+40%"
      }
    },
    {
      sector: "public",
      company: "Government Innovation Agency",
      challenge: "Bureaucratic processes limiting innovation. Public servants felt disempowered and disconnected from mission impact.",
      intervention: "Custom Intrapreneurship Program + Ownership Canvas + Leadership Training",
      outcomes: [
        "5 citizen-facing initiatives launched",
        "Process efficiency improved 35%",
        "Staff satisfaction increased significantly",
        "New service delivery model adopted"
      ],
      quote: "Beingsphere showed us that public sector innovation is possible. We're now a model for other agencies.",
      metrics: {
        innovation: "+250%",
        retention: "+28%",
        productivity: "+35%"
      }
    }
  ];

  const filteredStudies = selectedSector === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.sector === selectedSector);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Client Results & Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Real Transformations. Measurable Impact.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              See how organizations across sectors have unlocked innovation, improved retention, and built ownership cultures with Beingsphere.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Building2 className="w-8 h-8" />, stat: "50+", label: "Organizations Transformed" },
              { icon: <Users className="w-8 h-8" />, stat: "5,000+", label: "People Trained" },
              { icon: <Target className="w-8 h-8" />, stat: "100+", label: "Internal Ventures Launched" },
              { icon: <Award className="w-8 h-8" />, stat: "85%", label: "Client Satisfaction Rate" }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300">
                <div className="text-primary mb-4 flex justify-center">{item.icon}</div>
                <div className="text-4xl font-bold mb-2">{item.stat}</div>
                <div className="text-muted-foreground">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <h2 className="text-2xl font-bold">Case Studies</h2>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Filter by sector:</span>
              <Select value={selectedSector} onValueChange={setSelectedSector}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="All Sectors" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sectors</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="fmcg">FMCG</SelectItem>
                  <SelectItem value="public">Public Sector</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto space-y-12">
            {filteredStudies.map((study, index) => (
              <Card key={index} className="p-8 md:p-12 hover:shadow-strong transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="md:col-span-2">
                    <div className="text-sm font-semibold text-primary mb-2">
                      {study.sector.toUpperCase()} SECTOR
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{study.company}</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                          The Challenge
                        </h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          The Intervention
                        </h4>
                        <p className="text-muted-foreground">{study.intervention}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          The Outcomes
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {study.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Card className="p-6 bg-muted/50">
                      <h4 className="font-semibold mb-4">Key Metrics</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Innovation Rate</div>
                          <div className="text-2xl font-bold text-primary">{study.metrics.innovation}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Retention</div>
                          <div className="text-2xl font-bold text-primary">{study.metrics.retention}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Productivity</div>
                          <div className="text-2xl font-bold text-primary">{study.metrics.productivity}</div>
                        </div>
                      </div>
                    </Card>

                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <Play className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                </div>

                <Card className="p-6 bg-primary/5 border-primary/20">
                  <p className="text-lg italic text-foreground">"{study.quote}"</p>
                  <p className="text-sm text-muted-foreground mt-2">— {study.company} Leadership Team</p>
                </Card>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Hear From Our Clients</h2>
            <p className="text-xl text-muted-foreground">Video testimonials coming soon</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Play className="w-12 h-12 text-primary" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            See What's Possible in Your Organization
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join organizations that are transforming their people, culture, and performance with Beingsphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Request Your Custom Case Study
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

export default CaseStudies;
