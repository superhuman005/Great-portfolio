import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Calendar, Target, TrendingUp, Shield, Zap, MessageCircle, BarChart3 } from "lucide-react";

const ReflectGoal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Reflect+Goal OS
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Your Daily AI-Powered Clarity & Accountability Companion
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay focused, reflect intentionally, and achieve more with an intelligent system that helps you think, plan, and execute—every single day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Try Reflect+Goal
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Stay on Track</h2>
            <p className="text-xl text-muted-foreground">Voice or text. Calendar or chat. Human-like interaction, AI-driven insights.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Voice & Text Interface",
                desc: "Reflect daily through natural conversation—speak or type, your choice"
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Calendar Integration",
                desc: "Syncs with Outlook & Google Calendar to keep you aligned"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Distraction Management",
                desc: "Smart nudges to reduce procrastination and social media overuse"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Companion AI",
                desc: "Your non-judgmental thinking partner for clarity and accountability"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Goal Setting",
                desc: "Break down big goals into daily actions with intelligent tracking"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Smart Reminders",
                desc: "Contextual prompts at the right time to keep you moving forward"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Visual Dashboards",
                desc: "Track progress with weekly and monthly performance insights"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Performance Optimization",
                desc: "AI-powered recommendations to improve your execution"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Reflect+Goal Works</h2>
            <p className="text-xl text-muted-foreground">Simple. Intelligent. Human.</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                step: "1",
                title: "Start Your Day with Reflection",
                desc: "Every morning, Reflect+Goal checks in with you. Speak or type your thoughts, priorities, and energy level."
              },
              {
                step: "2",
                title: "AI Analyzes & Suggests",
                desc: "The system reviews your calendar, tasks, and patterns—then recommends what to focus on today."
              },
              {
                step: "3",
                title: "Stay Accountable Throughout",
                desc: "Gentle nudges keep you on track. Companion AI helps you think through blockers in real-time."
              },
              {
                step: "4",
                title: "End-of-Day Review",
                desc: "Reflect on what worked, what didn't, and what to improve. Track progress visually."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-lg text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Ready to Transform Your Daily Performance?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join professionals who are achieving more with less stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Start Your Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-primary-foreground border-white/30">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReflectGoal;
