import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Download, Play, Building2, Users, Wrench } from "lucide-react";

const OwnershipCanvas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Ownership Canvas
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Map Your Ideas. Own Your Solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              A practical framework for employees and teams to identify opportunities, take responsibility, and create real value inside your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Download the Canvas
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Use in Your Org
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">See the Canvas in Action</h2>
            <p className="text-xl text-muted-foreground">A simple tool to turn ideas into ownership</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-8">
              <div className="text-center">
                <Play className="w-16 h-16 mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">Interactive Demo Coming Soon</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Problem Definition",
                  desc: "What business challenge are you solving?"
                },
                {
                  title: "Value Creation",
                  desc: "Who benefits and how will you measure impact?"
                },
                {
                  title: "Action Plan",
                  desc: "What steps will you take to own the solution?"
                }
              ].map((step, index) => (
                <Card key={index} className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Who Uses the Ownership Canvas?</h2>
            <p className="text-xl text-muted-foreground">From innovation teams to operations leads</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-medium transition-all duration-300">
              <Building2 className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Corporate Innovation Teams</h3>
              <p className="text-muted-foreground">
                Map new venture ideas and align stakeholders before building prototypes
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-medium transition-all duration-300">
              <Wrench className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Operations Leaders</h3>
              <p className="text-muted-foreground">
                Identify process improvements and take ownership of implementation
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-medium transition-all duration-300">
              <Users className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">HR & People Teams</h3>
              <p className="text-muted-foreground">
                Empower employees to own their development and solve team challenges
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How to Use the Canvas</h2>
            <p className="text-xl text-muted-foreground">Simple steps to map your ownership journey</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: "Download or Print",
                desc: "Get the canvas template in PDF or digital format. Use it solo or in team workshops."
              },
              {
                step: "Define Your Challenge",
                desc: "Start with a clear problem statement. What are you trying to solve or improve?"
              },
              {
                step: "Map Value & Impact",
                desc: "Identify stakeholders, expected outcomes, and how you'll measure success."
              },
              {
                step: "Create Your Action Plan",
                desc: "Break down steps, assign responsibilities, and commit to timelines."
              },
              {
                step: "Integrate & Track",
                desc: "Embed the canvas into Reflect+Goal or TeamOS for ongoing accountability and progress tracking."
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-lg font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{item.step}</h3>
                    <p className="text-lg text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get Started Today</h2>
            <p className="text-xl text-muted-foreground">Templates, guides, and integration options</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-medium transition-all duration-300">
              <Download className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Printable Template</h3>
              <p className="text-muted-foreground mb-4">PDF version for workshops and team sessions</p>
              <Button variant="outline" className="w-full">Download PDF</Button>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-all duration-300">
              <FileText className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Version</h3>
              <p className="text-muted-foreground mb-4">Editable format for individual use</p>
              <Button variant="outline" className="w-full">Get Template</Button>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-all duration-300">
              <Play className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Guided Tutorial</h3>
              <p className="text-muted-foreground mb-4">Video walkthrough of the framework</p>
              <Button variant="outline" className="w-full">Watch Now</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Activate Ownership in Your Team?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Download the Ownership Canvas and start turning ideas into action today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Download the Canvas
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-primary-foreground border-white/30">
              Request Org License
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OwnershipCanvas;
