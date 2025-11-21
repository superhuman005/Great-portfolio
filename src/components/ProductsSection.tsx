import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Calendar, Target, Brain, ArrowRight } from "lucide-react";

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Products That Power{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Intelligent tools designed to enhance human performance and enable ownership culture.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto shadow-strong border-primary/30 bg-gradient-to-br from-card to-primary/5">
          <CardHeader className="text-center pb-8">
            <div className="w-20 h-20 bg-gradient-hero rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-medium">
              <Brain className="text-primary-foreground" size={40} />
            </div>
            <CardTitle className="text-4xl mb-4">Reflect+Goal OS</CardTitle>
            <CardDescription className="text-lg">
              Your daily AI-powered personal assistant to help you reflect, stay accountable, 
              and lead with clarity.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mic className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Voice & Text Interaction</h3>
                    <p className="text-muted-foreground">
                      Communicate naturally through voice or text. Your AI companion adapts to your 
                      preferred style.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Calendar Integration</h3>
                    <p className="text-muted-foreground">
                      Seamlessly integrates with Outlook and Google Calendar to optimize your schedule 
                      and priorities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Distraction Management</h3>
                    <p className="text-muted-foreground">
                      Tracks distractions and helps you refocus on what matters, boosting execution 
                      and productivity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Intelligent Companion</h3>
                    <p className="text-muted-foreground">
                      More than a tool—a non-judgmental partner that helps you think clearly and 
                      make better decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background/60 backdrop-blur-sm p-8 rounded-xl border border-primary/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ready to Transform Your Daily Performance?</h3>
                  <p className="text-muted-foreground">
                    Join thousands of professionals using Reflect+Goal to lead with clarity and purpose.
                  </p>
                </div>
                <Button size="lg" className="bg-gradient-hero hover:opacity-90 text-lg px-8 whitespace-nowrap">
                  Try Reflect+Goal
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductsSection;
