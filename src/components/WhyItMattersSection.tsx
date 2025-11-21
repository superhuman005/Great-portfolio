import { AlertCircle, Brain, Zap, Heart } from "lucide-react";
import patternNetwork from "@/assets/pattern-network.jpg";

const WhyItMattersSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${patternNetwork})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why It{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Matters
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The challenges facing modern organizations require transformational solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
              <AlertCircle className="text-destructive" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Lack of Ownership</h3>
            <p className="text-muted-foreground">
              Lack of ownership is costing businesses millions in lost productivity, missed 
              opportunities, and disengaged talent.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Brain className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Untapped Ideas</h3>
            <p className="text-muted-foreground">
              Most ideas from employees never leave their head. Brilliant solutions remain locked 
              away, unable to create value.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-accent" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Tool Limitations</h3>
            <p className="text-muted-foreground">
              Productivity tools ignore human behavior. Technology alone cannot drive meaningful 
              change without mindset transformation.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <Heart className="text-secondary" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Need for Growth</h3>
            <p className="text-muted-foreground">
              People want to grow, but need the right structure, systems, and support to unlock 
              their full potential.
            </p>
          </div>
        </div>

        <div className="bg-gradient-hero p-12 rounded-2xl shadow-strong text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Beingsphere Bridges This Gap
          </h3>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            By fusing training, tools, and transformation, we create ownership-driven organizations 
            where innovation thrives, people lead with autonomy, and businesses achieve sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyItMattersSection;
