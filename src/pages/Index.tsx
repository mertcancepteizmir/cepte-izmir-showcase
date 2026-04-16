import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeroVideo from "@/components/HeroVideo";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatAssistantButton from "@/components/ChatAssistantButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HeroVideo />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <ChatAssistantButton />
    </div>
  );
};

export default Index;
