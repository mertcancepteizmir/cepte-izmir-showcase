import { motion } from "framer-motion";
import izmirCityscape from "@/assets/izmir-cityscape.jpg";

const modules = [
  { title: "Esnaf", desc: "İhtiyacınız olan her türlü ürün ve hizmet için konumunuza en yakın, güvenilir yerel esnafı saniyeler içinde haritada bularak zaman kazanın." },
  { title: "Otopark", desc: "İzmir sokaklarında park yeri arama stresine son vererek, bulunduğunuz noktaya en yakın otopark alternatiflerini anında görüntüleyin ve yol tarifi alın." },
  { title: "Etkinlik", desc: "Şehrin dinamik ritmini yakalamak için tam o an çevrenizde gerçekleşen en yakın konser, tiyatro ve kültür-sanat etkinliklerini tek ekranda keşfedin." },
  { title: "Ne Yenir", desc: "Canınızın çektiği eşsiz lezzetleri sunan ve mevcut konumunuza en yakın olan en iyi restoran, kafe ve sokak lezzetlerini vakit kaybetmeden listeleyin." },
  { title: "Gezilecek Yerler", desc: "İzmir'in ruhunu keşfederken, rotanıza ve bulunduğunuz noktaya en yakın tarihi, kültürel ve doğal cazibe merkezlerini kolayca bularak gezinizi planlayın." },
  { title: "Nöbetçi Eczane", desc: "Beklenmedik anlardaki acil sağlık ihtiyaçlarınızda, size en yakın nöbetçi eczanenin güncel konumuna tek dokunuşla ulaşıp güvenle yola çıkın." },
  { title: "Taksi", desc: "Şehir içi ulaşım ihtiyacınız olduğunda, bulunduğunuz noktaya en yakın taksi duraklarını anında bularak saniyeler içinde güvenli bir yolculuğa başlayın." },
  { title: "Ulaşım", desc: "Şehir içi seyahatlerinizi hızlandırmak için konumunuza en yakın durakları ve en güncel otobüs, metro, tramvay, vapur sefer saatlerini tek dokunuşla öğrenerek rotanızı anında planlayın." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Hakkımızda
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
            Cepte İzmir
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-card lg:sticky lg:top-24"
          >
            <img
              src={izmirCityscape}
              alt="İzmir manzarası"
              className="w-full h-72 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Cepte Teknoloji A.Ş. çatısı altında İzmir ile buluşmaya hazırlanan Cepte İzmir, şehrin nabzını tek bir ekranda tutmayı hedefleyen kapsamlı bir dijital şehir rehberidir. İzmir'in eşsiz dinamizmine ayak uyduran yenilikçi bir "Süper App" olarak, günlük yaşamı kolaylaştırmak ve şehrin tüm olanaklarını parmaklarınızın ucuna getirmek için tasarlanmıştır. Gücünü yerel ağlardan ve akıllı konum teknolojilerinden alan uygulamamız, İzmirlilerin ve bu güzel şehri keşfetmek isteyen herkesin en güvenilir dijital yol arkadaşı olmayı amaçlamaktadır.
            </p>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Kullanıcılarımıza zaman kazandıran ve şehri yaşamayı çok daha pratik hale getiren modüllerimiz şunlardır:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {modules.map((mod, idx) => (
                  <motion.div
                    key={mod.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-muted/50 rounded-xl p-4"
                  >
                    <h4 className="font-bold text-foreground mb-2">{mod.title}</h4>
                    <p className="text-sm text-muted-foreground">{mod.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Vizyonumuz</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  İzmir'in dijital dönüşümüne liderlik eden, şehrin yerel gücünü, ulaşım ağını ve modern yaşam kültürünü akıllı teknolojilerle tek bir platformda birleştirerek, İzmir'de yaşayan ve yolu İzmir'den geçen herkes için vazgeçilmez bir "Süper App" olmak.
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Misyonumuz</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Kullanıcılarımızın şehir içindeki günlük ihtiyaçlarına anında yanıt verebilmek amacıyla; en hızlı, en güvenilir ve konuma dayalı dijital çözümleri sunmak. Şehirdeki yaşam kalitesini artırmak, yerel işletmelere dijital bir köprü olmak ve İzmir'in keşfedilmeyi bekleyen tüm güzelliklerini tek bir dokunuşla erişilebilir kılmak.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
