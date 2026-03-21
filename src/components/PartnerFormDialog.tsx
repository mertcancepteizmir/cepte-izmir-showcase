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

const PartnerFormDialog = ({ children }: PartnerFormDialogProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    district: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.firstName.trim() || !form.lastName.trim() || !form.phone.trim() || !form.city.trim() || !form.district.trim()) {
      toast.error("Lütfen tüm zorunlu alanları doldurun.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-partner-email", {
        body: {
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          phone: form.phone.trim(),
          city: form.city.trim(),
          district: form.district.trim(),
          description: form.description.trim(),
        },
      });

      if (error) throw error;

      toast.success("Başvurunuz başarıyla gönderildi!");
      setForm({ firstName: "", lastName: "", phone: "", city: "", district: "", description: "" });
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
          <div className="space-y-2">
            <Label htmlFor="phone">Numara *</Label>
            <Input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="05XX XXX XX XX" maxLength={20} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">Şehir *</Label>
              <Input id="city" name="city" value={form.city} onChange={handleChange} placeholder="Şehir" maxLength={100} />
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
