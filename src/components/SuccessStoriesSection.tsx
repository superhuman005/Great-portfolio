import { Card, CardContent } from "@/components/ui/card";
import { Quote, TrendingUp, Users, Rocket } from "lucide-react";

const stories = [
  {
    name: "David Okonkwo",
    role: "Product Innovation Lead",
    company: "TechCorp Africa",
    problem: "Identified a recurring customer pain point but lacked framework to develop solution",
    intervention: "Completed 8-week Intrapreneurship Accelerator program",
    result: "Now leads an internal business unit generating $2M in annual revenue",
    impact: "+300% revenue growth in new vertical",
    icon: Rocket,
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Tosin Adeyemi",
    role: "Operations Manager",
    company: "Zenith Financial Services",
    problem: "Team struggled with accountability and delivery timelines",
    intervention: "Participated in Ownership Bootcamp with team restructuring",
    result: "Boosted team delivery speed by 40% within 3 months",
    impact: "40% faster delivery cycles",
    icon: TrendingUp,
    color: "bg-accent/10 text-accent",
  },
  {
    name: "Nneka Obi",
    role: "Senior Developer → Team Lead",
    company: "Digital Innovations Ltd",
    problem: "Wanted to transition into leadership but lacked mentorship and direction",
    intervention: "Used MentorMap platform for 6 months with strategic coaching",
    result: "Promoted to Team Lead, now mentoring 12 junior developers",
    impact: "Leadership transition in 6 months",
    icon: Users,
    color: "bg-secondary/10 text-secondary",
  },
];

const SuccessStoriesSection = () => {
  return (
    <section id="stories" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real transformations from real people building real impact within their organizations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-medium transition-all hover:-translate-y-2 duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 ${story.color}`}>
                    <story.icon size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                    <p className="text-sm text-muted-foreground">{story.company}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-destructive mb-1">Problem</div>
                    <p className="text-sm text-muted-foreground">{story.problem}</p>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-primary mb-1">Intervention</div>
                    <p className="text-sm text-muted-foreground">{story.intervention}</p>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-secondary mb-1">Transformation</div>
                    <p className="text-sm text-muted-foreground">{story.result}</p>
                  </div>
                </div>

                <div className="bg-gradient-hero p-4 rounded-lg">
                  <div className="text-sm font-semibold text-primary-foreground/80 mb-1">
                    Measurable Impact
                  </div>
                  <div className="text-lg font-bold text-primary-foreground">{story.impact}</div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-start gap-2">
                    <Quote className="text-muted-foreground flex-shrink-0 mt-1" size={16} />
                    <p className="text-sm italic text-muted-foreground">
                      "Beingsphere didn't just teach me concepts—they transformed how I think about 
                      my role and my impact."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
