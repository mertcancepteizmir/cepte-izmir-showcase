import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mesajınız Alındı!",
      description: "En kısa sürede size dönüş yapacağız.",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            İletişim
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
            Birlikte Çalışalım
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base md:text-lg">
            Projeleriniz, yatırımlarınız veya iş birlikleriniz için bizimle iletişime geçin.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-6 md:p-10 shadow-card border border-border/50 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Ad Soyad</label>
                <Input
                  placeholder="Adınız"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="rounded-xl h-12"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">E-posta</label>
                <Input
                  type="email"
                  placeholder="ornek@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="rounded-xl h-12"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Konu</label>
              <Input
                placeholder="Mesajınızın konusu"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
                className="rounded-xl h-12"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Mesaj</label>
              <Textarea
                placeholder="Mesajınızı buraya yazın..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="rounded-xl resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button type="submit" variant="gradient" size="lg" className="flex-1 rounded-xl text-base py-6">
                <Send className="w-4 h-4 mr-2" />
                Gönder
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="rounded-xl text-base py-6 border-primary text-primary hover:bg-primary/5"
                asChild
              >
                <a href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
