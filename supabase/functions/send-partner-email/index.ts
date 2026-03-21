import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, phone, city, district, description } = await req.json();

    if (!firstName || !lastName || !phone || !city || !district) {
      return new Response(
        JSON.stringify({ error: "Zorunlu alanlar eksik." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate input lengths
    if (firstName.length > 100 || lastName.length > 100 || phone.length > 20 || city.length > 100 || district.length > 100 || (description && description.length > 1000)) {
      return new Response(
        JSON.stringify({ error: "Alan uzunluk limitleri aşıldı." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "E-posta servisi yapılandırılmamış." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #3B98F5; border-bottom: 2px solid #3B98F5; padding-bottom: 10px;">Yeni Partner Başvurusu</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr><td style="padding: 10px; font-weight: bold; color: #333; width: 120px;">İsim:</td><td style="padding: 10px; color: #555;">${escapeHtml(firstName)}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 10px; font-weight: bold; color: #333;">Soyisim:</td><td style="padding: 10px; color: #555;">${escapeHtml(lastName)}</td></tr>
          <tr><td style="padding: 10px; font-weight: bold; color: #333;">Numara:</td><td style="padding: 10px; color: #555;">${escapeHtml(phone)}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 10px; font-weight: bold; color: #333;">Şehir:</td><td style="padding: 10px; color: #555;">${escapeHtml(city)}</td></tr>
          <tr><td style="padding: 10px; font-weight: bold; color: #333;">İlçe:</td><td style="padding: 10px; color: #555;">${escapeHtml(district)}</td></tr>
          ${description ? `<tr style="background: #f9f9f9;"><td style="padding: 10px; font-weight: bold; color: #333; vertical-align: top;">Açıklama:</td><td style="padding: 10px; color: #555;">${escapeHtml(description)}</td></tr>` : ""}
        </table>
        <p style="color: #999; font-size: 12px; margin-top: 30px;">Bu e-posta Cepte İzmir web sitesi partner başvuru formu aracılığıyla gönderilmiştir.</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Cepte İzmir <onboarding@resend.dev>",
        to: ["destek@cepteizmir.com"],
        subject: `Yeni Partner Başvurusu: ${escapeHtml(firstName)} ${escapeHtml(lastName)}`,
        html: emailHtml,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend API error:", data);
      return new Response(
        JSON.stringify({ error: "E-posta gönderilemedi." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Sunucu hatası." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
