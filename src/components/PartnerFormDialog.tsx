import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface PartnerFormDialogProps {
  children: React.ReactNode;
}

const N8N_WEBHOOK_URL = "https://n8n.cepteizmir.xyz/webhook/29f9b778-a4da-4c89-b16a-1b6f94940136";

const PartnerFormDialog = ({ children }: PartnerFormDialogProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    sector: "",
    district: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.firstName.trim() || !form.lastName.trim() || !form.phone.trim() || !form.sector.trim() || !form.district.trim()) {
      toast.error("Lütfen tüm zorunlu alanları doldurun.");
      return;
    }

    const emailTrimmed = form.email.trim();
    if (emailTrimmed && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      toast.error("Geçerli bir e-posta adresi girin.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        phone: form.phone.trim(),
        email: emailTrimmed,
        sector: form.sector.trim(),
        district: form.district.trim(),
        description: form.description.trim(),
        submittedAt: new Date().toISOString(),
      };

      // E-posta gönderimi (mevcut akış - şehir yerine sektör gönderiyoruz)
      const emailPromise = supabase.functions.invoke("send-partner-email", {
        body: {
          ...payload,
          city: payload.sector, // edge function uyumluluğu için
        },
      });

      // n8n webhook tetikleme
      const webhookPromise = fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const [emailRes, webhookRes] = await Promise.allSettled([emailPromise, webhookPromise]);

      if (emailRes.status === "rejected" || (emailRes.status === "fulfilled" && emailRes.value.error)) {
        console.error("E-posta gönderim hatası:", emailRes);
      }
      if (webhookRes.status === "rejected" || (webhookRes.status === "fulfilled" && !webhookRes.value.ok)) {
        console.error("Webhook gönderim hatası:", webhookRes);
      }

      toast.success("Başvurunuz başarıyla gönderildi!");
      setForm({ firstName: "", lastName: "", phone: "", email: "", sector: "", district: "", description: "" });
      setOpen(false);
    } catch (err) {
      console.error("Form gönderim hatası:", err);
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">Partnerimiz Olun</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">İsim *</Label>
              <Input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} placeholder="İsminiz" maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Soyisim *</Label>
              <Input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Soyisminiz" maxLength={100} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Numara *</Label>
              <Input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="05XX XXX XX XX" maxLength={20} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Mail</Label>
              <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="ornek@mail.com" maxLength={255} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sector">Sektör *</Label>
              <Input id="sector" name="sector" value={form.sector} onChange={handleChange} placeholder="Örn: Restoran, Otopark" maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="district">İlçe *</Label>
              <Input id="district" name="district" value={form.district} onChange={handleChange} placeholder="İlçe" maxLength={100} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Açıklama</Label>
            <Textarea id="description" name="description" value={form.description} onChange={handleChange} placeholder="Mesajınız..." rows={4} maxLength={1000} />
          </div>
          <Button type="submit" variant="gradient" className="w-full rounded-xl" disabled={loading}>
            {loading ? "Gönderiliyor..." : "Gönder"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PartnerFormDialog;
