import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Wrench, Lightbulb, ArrowRight, CheckCircle2, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const OfferingsSection = () => {
  return (
    <section id="offerings" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Core{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Offerings
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive programs and tools designed to transform your organization from the inside out.
          </p>
        </div>

        <Tabs defaultValue="training" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto mb-12">
            <TabsTrigger value="training" className="py-4">
              <Rocket className="mr-2" size={20} />
              Intrapreneurship Training
            </TabsTrigger>
            <TabsTrigger value="tools" className="py-4">
              <Wrench className="mr-2" size={20} />
              Digital Tools & Platforms
            </TabsTrigger>
            <TabsTrigger value="facilitation" className="py-4">
              <Lightbulb className="mr-2" size={20} />
              Strategic Facilitation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="training" className="animate-fade-in">
            <Card className="shadow-medium border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl">Intrapreneurship Training</CardTitle>
                <CardDescription className="text-lg">
                  Empower teams to build ideas, solve problems, and create value—within the organization.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-bold text-xl mb-3">Intrapreneurship Accelerator</h3>
                    <p className="text-muted-foreground mb-4">6–8 week intensive program</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Mindset activation workshops</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Idea generation & validation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Business model development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Pitch preparation & funding</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-bold text-xl mb-3">Executive Track</h3>
                    <p className="text-muted-foreground mb-4">2-Day Intensive</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Strategic ownership leadership</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Business impact alignment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Modeling ownership behaviors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Culture transformation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-bold text-xl mb-3">Team Bootcamps</h3>
                    <p className="text-muted-foreground mb-4">Customizable modules</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Role ownership activation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Strategic execution training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Problem-solving frameworks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Performance optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <Link to="/intrapreneurship-training">
                  <Button className="bg-gradient-hero hover:opacity-90">
                    
                    Learn More About Training
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools" className="animate-fade-in">
            <Card className="shadow-medium border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl">Digital Tools & Platforms</CardTitle>
                <CardDescription className="text-lg">
                  Innovative digital solutions that enhance productivity and enable ownership.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                    <h3 className="font-bold text-2xl mb-3">Reflect+Goal OS</h3>
                    <p className="text-muted-foreground mb-4">
                      Your daily personal clarity assistant & accountability system
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">AI-powered reflection & goal tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Voice and text interaction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Calendar integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Distraction management</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                      {/* Try Reflect+Goal */}
                       Coming Soon
                    </Button>
                  </div>

                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-bold text-xl mb-3">Ownership Canvas</h3>
                    <p className="text-muted-foreground mb-4">
                      Frameworks for solving real business problems
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Problem framing tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Solution mapping</span>
                      </li>
                      </ul>

                      <Link to="ownership-canvas">
                      <Button
                      variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary/10"
                    >
              
                       See more
                    </Button>
                    </Link>

                  </div>

                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-bold text-xl mb-3">MentorMap</h3>
                    <p className="text-muted-foreground mb-4">
                      Peer-learning and internal mentorship matchmaking
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Smart mentor matching</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Progress tracking</span>
                      </li>
                    </ul>

                    {/* <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10"> */}
                       <Link to="mentor-map">
                      <Button
                      variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary/10"
                    >
                       See more
                    </Button>
                    </Link>
                  </div>

                  <div className="p-6 bg-gradient-secondary rounded-lg text-secondary-foreground">
                    <h3 className="font-bold text-xl mb-3">TeamOS</h3>
                    <p className="opacity-90 mb-4">
                      Dashboard for team self-management & reporting
                    </p>
                    <div className="inline-block bg-accent/20 px-3 py-1 rounded-full text-sm">
                      Coming Soon
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="facilitation" className="animate-fade-in">
            <Card className="shadow-medium border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl">Strategic Facilitation & Innovation Design</CardTitle>
                <CardDescription className="text-lg">
                  Expert-led initiatives to embed innovation and transformation into your organization.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-muted rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Lightbulb className="text-primary" size={24} />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Design Sprints</h3>
                    <p className="text-muted-foreground">
                      Rapid prototyping and validation for internal solutions through structured 
                      5-day innovation sprints.
                    </p>
                  </div>

                  <div className="p-6 bg-muted rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Rocket className="text-primary" size={24} />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Embedded Innovation Labs</h3>
                    <p className="text-muted-foreground">
                      Long-term partnership to build and sustain internal innovation capabilities 
                      and processes.
                    </p>
                  </div>

                  <div className="p-6 bg-muted rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Users className="text-primary" size={24} />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Culture Reinvention</h3>
                    <p className="text-muted-foreground">
                      Comprehensive organizational culture transformation programs that embed ownership 
                      at every level.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-soft p-8 rounded-lg border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4">Custom Solutions for Your Organization</h3>
                  <p className="text-muted-foreground mb-6">
                    Every organization is unique. We work with you to design bespoke interventions that 
                    align with your strategic goals, culture, and innovation ambitions.
                  </p>
                   <Link to="/#">
                  <Button className="bg-gradient-hero hover:opacity-90">
                    Schedule a Consultation
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default OfferingsSection;
