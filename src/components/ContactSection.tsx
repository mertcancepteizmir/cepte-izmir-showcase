import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            İletişim
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
            Birlikte Çalışalım
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base md:text-lg mb-8">
            Projeleriniz, yatırımlarınız veya iş birlikleriniz için bizimle iletişime geçin.
          </p>
          <Button
            variant="gradient"
            size="lg"
            className="rounded-xl text-base py-6 px-8"
            asChild
          >
            <a href="https://wa.me/905354171858" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp ile İletişime Geçin
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
