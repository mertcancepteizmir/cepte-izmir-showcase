import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Pill,
  UtensilsCrossed,
  MapPin,
  Store,
  Megaphone,
  Navigation,
  Bus,
  CalendarDays,
  X,
} from "lucide-react";

const modules = [
  {
    icon: Store,
    label: "Esnaf",
    desc: "Konumunuza en yakın güvenilir yerel esnafı bulun",
    detail: "İhtiyacınız olan her türlü ürün ve hizmet için konumunuza en yakın, güvenilir yerel esnafı saniyeler içinde haritada bularak zaman kazanın.",
  },
  {
    icon: Car,
    label: "Otopark",
    desc: "En yakın otopark alternatiflerini görün",
    detail: "İzmir sokaklarında park yeri arama stresine son vererek, bulunduğunuz noktaya en yakın otopark alternatiflerini anında görüntüleyin ve yol tarifi alın.",
  },
  {
    icon: CalendarDays,
    label: "Etkinlik",
    desc: "Çevrenizdeki etkinlikleri keşfedin",
    detail: "Şehrin dinamik ritmini yakalamak için tam o an çevrenizde gerçekleşen en yakın konser, tiyatro ve kültür-sanat etkinliklerini tek ekranda keşfedin.",
  },
  {
    icon: UtensilsCrossed,
    label: "Ne Yenir?",
    desc: "En yakın lezzet noktalarını listeleyin",
    detail: "Canınızın çektiği eşsiz lezzetleri sunan ve mevcut konumunuza en yakın olan en iyi restoran, kafe ve sokak lezzetlerini vakit kaybetmeden listeleyin.",
  },
  {
    icon: MapPin,
    label: "Gezilecek Yerler",
    desc: "Yakınınızdaki cazibe merkezlerini bulun",
    detail: "İzmir'in ruhunu keşfederken, rotanıza ve bulunduğunuz noktaya en yakın tarihi, kültürel ve doğal cazibe merkezlerini kolayca bularak gezinizi planlayın.",
  },
  {
    icon: Pill,
    label: "Nöbetçi Eczane",
    desc: "En yakın nöbetçi eczaneye ulaşın",
    detail: "Beklenmedik anlardaki acil sağlık ihtiyaçlarınızda, size en yakın nöbetçi eczanenin güncel konumuna tek dokunuşla ulaşıp güvenle yola çıkın.",
  },
  {
    icon: Navigation,
    label: "Taksi",
    desc: "Yakın taksi duraklarını bulun",
    detail: "Şehir içi ulaşım ihtiyacınız olduğunda, bulunduğunuz noktaya en yakın taksi duraklarını anında bularak saniyeler içinde güvenli bir yolculuğa başlayın.",
  },
  {
    icon: Bus,
    label: "Ulaşım",
    desc: "Yakın durak ve sefer bilgilerini görün",
    detail: "Şehir içi seyahatlerinizi hızlandırmak için konumunuza en yakın durakları ve en güncel otobüs, metro, tramvay, vapur sefer saatlerini tek dokunuşla öğrenerek rotanızı anında planlayın.",
  },
  {
    icon: Megaphone,
    label: "Reklam",
    desc: "İşletmenizi tanıtın",
    detail: "İşletmenizi binlerce İzmirli'ye ulaştırın! Hedef kitle belirleme, bölge bazlı reklam yayınlama ve performans raporları ile dijital reklamcılığın gücünden yararlanın. Uygun fiyatlı reklam paketleri ile yerel pazarda öne çıkın.",
  },
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
  const [activeModule, setActiveModule] = useState<string | null>(null);

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

        <AnimatePresence mode="wait">
          {activeModule ? (
            (() => {
              const mod = modules.find((m) => m.label === activeModule)!;
              return (
                <motion.div
                  key="detail"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-card rounded-3xl p-8 md:p-12 shadow-card-hover border border-primary/20 relative"
                >
                  <button
                    onClick={() => setActiveModule(null)}
                    className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/10 transition-colors"
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>

                  <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl border-2 border-primary/20 gradient-primary flex items-center justify-center mb-6 shadow-glow">
                      <mod.icon className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
                      {mod.label}
                    </h3>
                    <p className="text-base text-muted-foreground mb-6">{mod.desc}</p>
                    <div className="w-16 h-1 rounded-full gradient-primary mb-6" />
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {mod.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })()
          ) : (
            <motion.div
              key="grid"
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
                  onClick={() => setActiveModule(mod.label)}
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
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturesSection;
