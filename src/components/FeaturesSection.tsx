import { motion } from "framer-motion";
import {
  Car,
  Pill,
  UtensilsCrossed,
  MapPin,
  Store,
  Megaphone,
  // Using available icons
  Navigation,
  Bus,
  CalendarDays,
} from "lucide-react";

const modules = [
  { icon: Car, label: "Otopark", desc: "Yakındaki otopark alanlarını anında bulun" },
  { icon: Pill, label: "Nöbetçi Eczane", desc: "7/24 açık eczanelere ulaşın" },
  { icon: UtensilsCrossed, label: "Ne Yenir?", desc: "En iyi restoranları keşfedin" },
  { icon: MapPin, label: "Gezilecek Yerler", desc: "İzmir'in turistik noktaları" },
  { icon: Store, label: "Esnaf", desc: "Yerel işletmeleri destekleyin" },
  { icon: Megaphone, label: "Reklam", desc: "İşletmenizi tanıtın" },
  { icon: Navigation, label: "Taksi", desc: "Hızlıca taksi çağırın" },
  { icon: Bus, label: "Ulaşım", desc: "Toplu taşıma rotalarını görün" },
  { icon: CalendarDays, label: "Etkinlik", desc: "Şehirdeki etkinlikleri takip edin" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Modüller
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
            Tek Uygulamada Her Şey
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base md:text-lg">
            İzmir'de ihtiyacınız olan tüm hizmetlere tek bir dokunuşla erişin.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {modules.map((mod) => (
            <motion.div
              key={mod.label}
              variants={item}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-card cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover border border-transparent hover:border-primary/20"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 border-primary/20 gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow duration-300">
                  <mod.icon className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-1">
                  {mod.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
