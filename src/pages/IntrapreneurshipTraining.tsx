import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Lightbulb, Users, TrendingUp, Award, Rocket, Target } from "lucide-react";

const IntrapreneurshipTraining = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Intrapreneurship Training
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Turn Your Employees Into Internal Innovators
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unlock creativity, drive ownership, and build a culture where every team member thinks like a founder—without leaving your organization.
            </p>
            <Button size="lg" className="text-lg px-8">
              Request Custom Training
            </Button>
          </div>
        </div>
      </section>

      {/* What is Intrapreneurship */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">What Is Intrapreneurship?</h2>
              <p className="text-xl text-muted-foreground">
                Intrapreneurship is entrepreneurship inside an organization. It's about empowering employees to act like owners—identifying opportunities, solving problems, and creating value as if the company were theirs.
              </p>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Lightbulb className="w-16 h-16 mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">Explainer Video Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Companies Need Intrapreneurship</h2>
            <p className="text-xl text-muted-foreground">Drive innovation from within. Retain top talent. Build competitive advantage.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "Increased Innovation",
                desc: "New products, processes, and solutions emerge from empowered teams"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Higher Retention",
                desc: "Employees who own their work are more engaged and less likely to leave"
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Boosted Productivity",
                desc: "Ownership mindset drives execution, accountability, and results"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-medium transition-all duration-300">
                <div className="text-primary mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Tracks */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Training Programs</h2>
            <p className="text-xl text-muted-foreground">Choose the track that fits your organization's needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
              <Award className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">6-Week Intrapreneurship Accelerator</h3>
              <p className="text-muted-foreground mb-6">
                Full transformation program for teams ready to build internal ventures and take ownership of innovation.
              </p>
              <ul className="space-y-3 mb-6 text-sm">
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Idea generation & validation frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Ownership mindset development</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Pitch training & stakeholder alignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Real business problem execution</span>
                </li>
              </ul>
              <Button className="w-full">Learn More</Button>
            </Card>

            <Card className="p-8 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-primary">
              <Award className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">2-Day Leadership Intensive</h3>
              <p className="text-muted-foreground mb-6">
                Executive track designed for C-suite and senior leaders who want to embed ownership culture from the top.
              </p>
              <ul className="space-y-3 mb-6 text-sm">
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Strategic ownership frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Innovation ecosystem design</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Culture transformation strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Leadership accountability systems</span>
                </li>
              </ul>
              <Button className="w-full">Learn More</Button>
            </Card>

            <Card className="p-8 hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
              <Award className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Team Ownership Bootcamps</h3>
              <p className="text-muted-foreground mb-6">
                Fast-track training for teams who need to execute with clarity, responsibility, and strategic thinking.
              </p>
              <ul className="space-y-3 mb-6 text-sm">
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Role ownership & accountability</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Problem-solving methodologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Cross-functional collaboration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Strategic execution planning</span>
                </li>
              </ul>
              <Button className="w-full">Learn More</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Real results from real organizations</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                company: "Tech Startup",
                result: "3 new internal products launched within 6 months",
                quote: "The training transformed how our teams think about their roles. We're now solving problems we didn't even know existed."
              },
              {
                company: "Financial Services",
                result: "40% increase in employee engagement scores",
                quote: "Intrapreneurship became the language of our culture. People finally feel like owners, not just workers."
              },
              {
                company: "FMCG Company",
                result: "Reduced time-to-market by 30% through internal innovation",
                quote: "Our teams went from waiting for direction to creating their own roadmaps. The shift was remarkable."
              }
            ].map((story, index) => (
              <Card key={index} className="p-8">
                <p className="text-lg font-semibold text-primary mb-2">{story.company}</p>
                <p className="text-2xl font-bold mb-4">{story.result}</p>
                <p className="text-muted-foreground italic">"{story.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does intrapreneurship integrate with our existing HR strategy?</AccordionTrigger>
              <AccordionContent>
                Intrapreneurship training complements talent development, performance management, and retention programs. It provides a framework for employees to take ownership of their growth while solving real business problems.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What's the time commitment for participants?</AccordionTrigger>
              <AccordionContent>
                The 6-week accelerator requires 4-6 hours per week. The 2-day intensive is fully immersive. Bootcamps typically run 3-5 days depending on scope and objectives.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can we customize the program for our industry?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We tailor frameworks, case studies, and exercises to your sector—whether tech, finance, FMCG, or public sector. Every program is customized to your organizational goals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What's the ROI of intrapreneurship training?</AccordionTrigger>
              <AccordionContent>
                Organizations typically see measurable improvements in innovation output, employee retention, and team productivity within 6-12 months. Many also report new internal ventures and process improvements that generate significant cost savings.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Build a Culture of Ownership?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's design a training program that transforms your people and your organization.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Request Custom Training
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntrapreneurshipTraining;
