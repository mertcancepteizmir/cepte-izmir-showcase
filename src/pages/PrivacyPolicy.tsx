import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8 py-12 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Ana Sayfaya Dön
        </Link>

        <article className="max-w-none text-foreground space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
            GİZLİLİK VE KİŞİSEL VERİLERİN KORUNMASI POLİTİKASI
          </h1>
          <p className="text-muted-foreground text-sm">Son Güncelleme Tarihi: 21 Şubat 2026</p>
          <p className="text-muted-foreground text-sm">Veri Sorumlusu: Cepte Teknoloji A.Ş.</p>

          <p className="leading-relaxed">
            Cepte Teknoloji A.Ş. olarak, Cepte İzmir ("Uygulama") kullanıcılarının gizliliğine ve kişisel verilerinin korunmasına büyük önem veriyoruz. İşbu Gizlilik Politikası ve Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, uygulamamızı kullandığınızda verilerinizin nasıl toplandığını, kullanıldığını, işlendiğini ve paylaşıldığını açıklamaktadır.
          </p>
          <p className="leading-relaxed">
            Cepte İzmir uygulamasını indirerek ve kullanarak bu politikada belirtilen şartları okumuş ve anlamış olursunuz.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">1. Topladığımız Bilgiler, Kullanım Amaçları ve Hukuki Sebepler</h2>
          <p className="leading-relaxed">
            Uygulamamız, size daha iyi ve kişiselleştirilmiş bir hizmet verebilmek için cihazınızdan bazı izinler ve bilgiler talep edebilir. Bu veriler, KVKK Madde 5'te belirtilen "Sözleşmenin kurulması veya ifası", "Veri sorumlusunun meşru menfaati" ve gerekli durumlarda "Açık Rıza" hukuki sebeplerine dayanarak toplanmaktadır.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6">A. Kişisel ve İletişim Verileri (Ad, Soyad, E-posta, Telefon vb.)</h3>
          <p className="leading-relaxed">
            Tarafınıza daha kişiselleştirilebilir bir hizmet sunmak, kullanıcı deneyiminizi geliştirmek, uygulama içi iletişim süreçlerini sağlamak ve (açık rızanız dahilinde) size özel fırsatlar, kampanyalar ve indirimler hakkında bilgilendirme yapmak amacıyla toplanmaktadır.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6">B. Konum Bilgileri (Location Data)</h3>
          <p className="leading-relaxed">
            Uygulamamız, size en yakın Nöbetçi Eczaneleri, Otoparkları, Toplu Ulaşım noktalarını, Taksi Duraklarını ve Restoranları gösterebilmek için "Hassas Konum" (Fine Location) izni talep eder. Bu veriler, anlık olarak size en yakın noktaları listelemek için kullanılır. Konum verileriniz sunucularımızda anlık işlevsellik sağlamak amacıyla işlenir, geriye dönük rotanız takip edilmez.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6">C. Cihaz ve Kullanım Bilgileri</h3>
          <p className="leading-relaxed">
            Hataları tespit etmek ve uygulama performansını iyileştirmek amacıyla cihaz modeli, işletim sistemi sürümü ve çökme raporları (Crash Logs) gibi teknik veriler toplanabilir.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">2. Üçüncü Taraf Hizmetleri ve Reklamlar</h2>
          <p className="leading-relaxed">
            Uygulamamız, hizmetlerimizi ücretsiz sunabilmek için üçüncü taraf reklam sağlayıcılarını kullanabilir. Bu sağlayıcılar, size ilgi alanlarınıza uygun reklamlar göstermek için cihazınızdan bazı anonim verileri (Reklam Kimliği - Advertising ID gibi) toplayabilir.
          </p>
          <p className="font-semibold mt-4">Uygulamada kullanılan servisler:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Google AdMob:</strong> Reklam gösterimi için kullanılır. (
              <a href="https://policies.google.com/u/7/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Gizlilik Politikası</a>)
            </li>
            <li><strong>Google Maps API:</strong> Harita ve konum hizmetleri için kullanılır.</li>
            <li>
              <strong>Google Play Services:</strong> Uygulama altyapısı için kullanılır. (
              <a href="https://policies.google.com/u/7/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Gizlilik Politikası</a>)
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-10">3. Uygulama İçi Modüller ve Veri İşleme</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Taksi:</strong> Taksi çağırma özelliği, sizi cihazınızın telefon arama ekranına yönlendirir. Uygulama, telefon görüşmelerinizi dinlemez veya kaydetmez.</li>
            <li><strong>Nöbetçi Eczane & Esnaf:</strong> İlgili işletmelerin iletişim bilgileri halka açık kaynaklardan derlenmiştir.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-10">4. Veri Güvenliği ve Yurt Dışına Aktarım (KVKK Madde 9)</h2>
          <p className="leading-relaxed">
            Kişisel verilerinizin güvenliğini sağlamak için endüstri standardı güvenlik önlemleri uyguluyoruz. Verileriniz, daha yüksek güvenlikli bulut altyapılarından (örn. AWS veya benzeri) faydalanabilmek amacıyla, KVKK Madde 9 uyarınca gerekli güvenlik önlemleri alınarak yurt dışında bulunan güvenilir sunucularda depolanabilir. Verileriniz kesinlikle izniniz olmaksızın 3. şahıs veya kurumlarla pazarlama amacıyla paylaşılmaz ve satılmaz.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">5. Veri Sahibinin Hakları (KVKK Madde 11)</h2>
          <p className="leading-relaxed">KVKK'nın 11. maddesi uyarınca veri sahibi olarak;</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
            <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
            <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme ve silinmesini/yok edilmesini talep etme haklarına sahipsiniz.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-10">6. Çocukların Gizliliği</h2>
          <p className="leading-relaxed">Cepte İzmir, 18 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamaz. Uygulamamız genel izleyici kitlesine hitap etmektedir.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">7. Değişiklikler</h2>
          <p className="leading-relaxed">Bu Gizlilik Politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada yayınlandığı tarihte yürürlüğe girer. Politikamızı periyodik olarak gözden geçirmenizi öneririz.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">8. İletişim</h2>
          <p className="leading-relaxed">Bu Gizlilik Politikası ve KVKK kapsamındaki haklarınız ile ilgili talepleriniz için bizimle iletişime geçebilirsiniz:</p>
          <ul className="list-none pl-0 space-y-1">
            <li><strong>E-posta:</strong> <a href="mailto:destek@cepteizmir.com" className="text-primary hover:underline">destek@cepteizmir.com</a></li>
            <li><strong>Web Sitesi:</strong> <a href="https://www.cepteizmir.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cepteizmir.com</a></li>
          </ul>

          {/* SEPARATOR */}
          <hr className="my-12 border-border" />

          {/* COOKIE POLICY */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
            ÇEREZ POLİTİKASI (COOKIE POLICY)
          </h1>
          <p className="text-muted-foreground text-sm">Son Güncelleme: 21 Şubat 2026</p>
          <p className="text-muted-foreground text-sm">Veri Sorumlusu: Cepte Teknoloji A.Ş.</p>
          <p className="text-muted-foreground text-sm">İnternet Sitesi: www.cepteizmir.com</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">1. GİRİŞ</h2>
          <p className="leading-relaxed">
            Cepte Teknoloji A.Ş. ("Cepte Teknoloji" veya "Cepte İzmir") olarak, www.cepteizmir.com alan adlı internet sitemizi ("Site") ziyaretleriniz sırasında deneyiminizi geliştirmek, site trafiğini analiz etmek, sizinle daha sağlıklı iletişim kurmak ve size özel kişiselleştirilmiş fırsatlar/reklamlar sunmak amacıyla çerezler (cookies) ve benzeri teknolojiler kullanmaktayız. İşbu Çerez Politikası, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili mevzuata uygun olarak hazırlanmıştır.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">2. ÇEREZ (COOKIE) NEDİR?</h2>
          <p className="leading-relaxed">
            Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcılar (Google Chrome, Safari, Edge vb.) aracılığıyla cihazınıza veya ağ sunucusuna depolanan küçük metin dosyalarıdır. Çerezler, cihazınızın siteyi tekrar ziyaret ettiğinde tanınmasını sağlar.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">3. HANGİ TÜR ÇEREZLERİ KULLANIYORUZ?</h2>
          <p className="leading-relaxed">Sitemizde kullanım amaçlarına göre dört tür çerez kullanılmaktadır:</p>

          <h3 className="text-xl font-semibold text-foreground mt-6">A. Zorunlu (Teknik) Çerezler</h3>
          <p className="leading-relaxed">Sitenin düzgün çalışması için mutlak gerekli olan çerezlerdir. Oturum güvenliği, sayfa geçişleri ve form doldurma işlemleri için kullanılır.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Hukuki Sebebi:</strong> KVKK Madde 5/2-f uyarınca veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması.</li>
            <li><strong>Onay Durumu:</strong> Bu çerezler için açık rızanız alınmaz, kapatılamazlar.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6">B. Performans ve Analitik Çerezleri</h3>
          <p className="leading-relaxed">Sitemizi kaç kişinin ziyaret ettiğini, hangi sayfaların popüler olduğunu ve ziyaretçilerin sitede nasıl hareket ettiğini anlamamıza yarar (Örn: Google Analytics). Bu veriler anonim olarak toplanır.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Amacı:</strong> Uygulama indirme sayılarını ölçmek, site hızını artırmak.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6">C. İşlevsellik Çerezleri</h3>
          <p className="leading-relaxed">Sitedeki tercihlerinizi (dil seçimi, bölge vb.) hatırlamamızı ve size daha kişiselleştirilmiş bir hizmet sunmamızı sağlar.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6">D. Reklam ve Pazarlama Çerezleri (Targeting)</h3>
          <p className="leading-relaxed">Sizi ilgi alanlarınıza göre profillemek, kullanıcıya özel fırsatları karşınıza çıkarmak ve size özel reklamlar göstermek için kullanılır (Örn: Facebook Pixel, Google Ads). Sitemizi ziyaret ettikten sonra sosyal medyada "Cepte İzmir" reklamlarını görmenizi sağlayan teknoloji budur.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Onay Durumu:</strong> Sadece "Kabul Et" butonuna basarak açık rıza vermeniz halinde aktif olur.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-10">4. KULLANILAN ÜÇÜNCÜ TARAF ÇEREZLERİ</h2>
          <p className="leading-relaxed">Sitemizde, uygulama indirme dönüşümlerini takip etmek ve pazarlama yapmak amacıyla aşağıdaki sağlayıcıların çerezleri bulunabilir:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Google Analytics & Google Ads:</strong> Site trafiği analizi ve kişiselleştirilmiş reklam hedefleme.</li>
            <li><strong>Meta (Facebook/Instagram) Pixel:</strong> Sosyal medya reklam dönüşüm takibi ve özel kampanya sunumu.</li>
            <li><strong>Apple App Store & Google Play Store Yönlendirmeleri:</strong> Uygulama marketlerine yapılan tıklamaları ölçmek için kullanılan izleyiciler.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-10">5. ÇEREZLERİ NASIL KONTROL EDEBİLİRSİNİZ?</h2>
          <p className="leading-relaxed">Ziyaretçilerimiz, tarayıcı ayarlarını değiştirerek çerezlere ilişkin tercihlerini kişiselleştirme imkanına sahiptir. Ancak, zorunlu çerezlerin engellenmesi durumunda Sitenin bazı özellikleri (örn: başvuru formları) çalışmayabilir.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Google Chrome:</strong> Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler</li>
            <li><strong>Safari:</strong> Tercihler &gt; Gizlilik &gt; Tüm Çerezleri Engelle</li>
            <li><strong>Mozilla Firefox:</strong> Seçenekler &gt; Gizlilik ve Güvenlik</li>
            <li><strong>Internet Explorer / Edge:</strong> Ayarlar &gt; Çerezler ve Site İzinleri</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-10">6. VERİ SAHİBİNİN HAKLARI</h2>
          <p className="leading-relaxed">
            KVKK'nın 11. maddesi uyarınca, çerezler aracılığıyla işlenen kişisel verileriniz hakkında bilgi talep etme, düzeltme veya silinmesini isteme hakkına sahipsiniz. Taleplerinizi{" "}
            <a href="mailto:destek@cepteizmir.com" className="text-primary hover:underline">destek@cepteizmir.com</a>{" "}
            üzerinden bize iletebilirsiniz. Cepte İzmir, işbu Çerez Politikası hükümlerini dilediği zaman değiştirme hakkını saklı tutar.
          </p>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
