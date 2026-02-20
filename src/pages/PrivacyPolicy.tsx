import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8 py-12 max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Ana Sayfaya Dön
            </Link>
          </Button>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8">
          Gizlilik Politikası
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground/70">Son güncelleme: 20 Şubat 2026</p>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">1. Giriş</h2>
            <p>
              Cepte Teknoloji A.Ş. ("Şirket", "biz") olarak, Cepte İzmir uygulamasını kullanan kullanıcılarımızın 
              ("siz", "kullanıcı") gizliliğine büyük önem veriyoruz. Bu Gizlilik Politikası, kişisel verilerinizin 
              nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">2. Toplanan Veriler</h2>
            <p>Uygulamamızı kullanırken aşağıdaki bilgileri toplayabiliriz:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ad, soyad, e-posta adresi ve telefon numarası gibi kimlik bilgileri</li>
              <li>Konum bilgileri (yalnızca izin verildiğinde)</li>
              <li>Cihaz bilgileri (model, işletim sistemi, uygulama sürümü)</li>
              <li>Uygulama kullanım verileri ve tercihler</li>
              <li>İletişim formları aracılığıyla ilettiğiniz bilgiler</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">3. Verilerin Kullanımı</h2>
            <p>Toplanan veriler aşağıdaki amaçlarla kullanılmaktadır:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hizmetlerimizi sunmak ve iyileştirmek</li>
              <li>Kullanıcı deneyimini kişiselleştirmek</li>
              <li>Konum tabanlı hizmetler sağlamak (nöbetçi eczane, otopark vb.)</li>
              <li>Teknik destek ve müşteri hizmetleri sunmak</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">4. Verilerin Paylaşımı</h2>
            <p>
              Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz. 
              Hizmet sağlayıcılarımızla yalnızca hizmetin sunulması için gerekli olan minimum 
              düzeyde veri paylaşımı yapılabilir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">5. Veri Güvenliği</h2>
            <p>
              Verilerinizin güvenliği için endüstri standardı şifreleme teknolojileri ve güvenlik 
              önlemleri kullanılmaktadır. Tüm veri transferleri SSL/TLS ile korunmaktadır.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">6. Kullanıcı Hakları</h2>
            <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenen verileriniz hakkında bilgi talep etme</li>
              <li>Verilerinizin düzeltilmesini veya silinmesini isteme</li>
              <li>Verilerinizin üçüncü kişilere aktarılıp aktarılmadığını öğrenme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">7. Çerezler (Cookies)</h2>
            <p>
              Uygulamamız ve web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler 
              kullanabilir. Çerez tercihlerinizi tarayıcı ayarlarınızdan yönetebilirsiniz.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">8. İletişim</h2>
            <p>
              Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
            </p>
            <p className="font-medium text-foreground">
              Cepte Teknoloji A.Ş.<br />
              E-posta: info@cepteizmir.com<br />
              İzmir, Türkiye
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">9. Değişiklikler</h2>
            <p>
              Bu gizlilik politikası zaman zaman güncellenebilir. Önemli değişiklikler 
              yapıldığında kullanıcılarımız bilgilendirilecektir. Uygulamayı kullanmaya devam 
              etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
