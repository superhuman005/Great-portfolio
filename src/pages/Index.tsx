import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OfferingsSection from "@/components/OfferingsSection";
import WhyItMattersSection from "@/components/WhyItMattersSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import ClientsSection from "@/components/ClientsSection";
import CommunitySection from "@/components/CommunitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <WhyItMattersSection />
      <SuccessStoriesSection />
      <ClientsSection />
      <CommunitySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
