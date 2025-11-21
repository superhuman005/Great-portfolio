import { Building2, Users, Lightbulb, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            At Beingsphere, We Don't Just Train People.{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              We Activate Ownership.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Beingsphere is Africa's leading intrapreneurship and ownership transformation company. 
            We equip businesses and people to unlock their creative potential, develop internal 
            ventures, and lead with autonomy and responsibility. From C-suites to early-career teams, 
            our programs are designed to scale mindsets, behaviors, and systems that drive long-term growth.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative aspect-video bg-gradient-secondary rounded-2xl shadow-strong overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-secondary-foreground">
                <div className="w-20 h-20 mx-auto mb-4 bg-background/20 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[20px] border-l-secondary-foreground border-y-[12px] border-y-transparent ml-1" />
                </div>
                <p className="text-xl font-semibold">Welcome to the Sphere</p>
                <p className="text-sm opacity-80">60-second brand video</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Corporate Scale</h3>
            <p className="text-muted-foreground">
              From startups to enterprises, we build systems that scale with your organization.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">People-Centric</h3>
            <p className="text-muted-foreground">
              We believe every person has the potential to be a builder and leader.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation-Driven</h3>
            <p className="text-muted-foreground">
              We ignite internal innovation through proven frameworks and methodologies.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Results-Oriented</h3>
            <p className="text-muted-foreground">
              Measurable transformation that delivers real business value and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
