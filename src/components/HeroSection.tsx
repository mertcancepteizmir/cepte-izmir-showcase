import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import phoneMockup from "@/assets/phone-mockup.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-hero-bg overflow-hidden pt-20">
      {/* Decorative circles */}
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
            >
              🚀 Yakında Sizlerle
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground mb-6">
              İzmir'in Yeni{" "}
              <span className="gradient-text">Süper Uygulaması</span>{" "}
              Geliyor
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Eczaneden ulaşıma, etkinliklerden esnafa kadar şehrin tüm dinamiklerini tek bir ekranda toplayan akıllı şehir rehberiniz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="outline-hero" size="lg" className="text-base px-8 py-6 rounded-xl">
                📱 Yakında App Store ve Google Play'de
              </Button>
              <Button variant="gradient" size="lg" className="text-base px-8 py-6 rounded-xl" asChild>
                <a href="#contact">Partnerimiz Olun</a>
              </Button>
            </div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full blur-[80px] opacity-20 scale-75" />
              <motion.img
                src={phoneMockup}
                alt="Cepte İzmir Uygulama Arayüzü"
                className="relative z-10 w-72 md:w-80 lg:w-96 drop-shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
