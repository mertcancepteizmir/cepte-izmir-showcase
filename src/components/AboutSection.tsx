import { motion } from "framer-motion";
import izmirCityscape from "@/assets/izmir-cityscape.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-card"
          >
            <img
              src={izmirCityscape}
              alt="İzmir manzarası"
              className="w-full h-72 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Hakkımızda
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3 mb-6">
              İzmir'i Cebinize Taşıyoruz
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Cepte İzmir, şehrin ritmini yakalamanızı sağlayan kapsamlı bir dijital ekosistemdir. Amacımız; İzmir'in yerel esnafından ulaşım ağına, anlık ihtiyaçlardan turistik keşiflere kadar her şeyi tek bir yenilikçi platformda birleştirerek hayatı kolaylaştırmaktır.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-4">
              Teknolojiyi yerel dinamiklerle harmanlayarak, kullanıcılarımıza zaman kazandıran yepyeni bir dijital deneyim inşa ediyoruz.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { number: "9+", label: "Modül" },
                { number: "1M+", label: "Hedef Kullanıcı" },
                { number: "7/24", label: "Erişim" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-extrabold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
