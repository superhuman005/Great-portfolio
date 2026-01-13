import { Building2, Landmark, Factory, Globe } from "lucide-react";
import clientsImage from "@/assets/clients-collaboration.jpg";
import valueImage from "@/assets/value-created.jpg";

const clientTypes = [
  {
    icon: Building2,
    title: "Tech Startups",
    description: "Building for scale with innovation at their core",
    // stats: "50+ startups transformed",
  },
  {
    icon: Landmark,
    title: "Banks & Fintechs",
    description: "Seeking product culture and internal innovation",
    // stats: "12 financial institutions",
  },
  {
    icon: Factory,
    title: "FMCGs",
    description: "Large teams needing ownership mindsets",
    // stats: "20+ enterprise clients",
  },
  {
    icon: Globe,
    title: "Government & Public Sector",
    description: "Driving innovation in systems and processes",
    // stats: "8 government agencies",
  },
];

const ClientsSection = () => {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who We{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by organizations across sectors who are committed to building from the inside out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {clientTypes.map((client, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                <client.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-2">{client.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{client.description}</p>
              {/* <div className="text-sm font-semibold text-primary">{client.stats}</div> */}
            </div>
          ))}
        </div>

        {/* Logos Carousel Placeholder */}
        <div className="bg-card p-12 rounded-2xl shadow-medium">
          <h3 className="text-2xl font-bold text-center mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="h-16 bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground"
              >
                Partner Logo {i}
              </div>
            ))}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-2xl shadow-strong group">
            <img 
              src={clientsImage} 
              alt="Professional team collaboration" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                4+
              </div>
              <div className="text-white/90 text-lg">Countries Reached</div>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl shadow-strong p-8 flex flex-col justify-center items-center text-center hover:shadow-medium transition-all hover:-translate-y-1">
            <div className="text-5xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-3">
              95%
            </div>
            <div className="text-muted-foreground text-lg">Client Satisfaction</div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl shadow-strong group">
            <img 
              src={valueImage} 
              alt="Value creation and growth" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                $50M+
              </div>
              <div className="text-white/90 text-lg">Value Created</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
