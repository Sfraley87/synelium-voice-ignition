import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY");
    const DEFAULT_PRICE_ID = Deno.env.get("STRIPE_PRICE_ID");
    const SITE_URL_ENV = Deno.env.get("SITE_URL");

    if (!STRIPE_SECRET_KEY) {
      throw new Error("Missing STRIPE_SECRET_KEY");
    }

    // Determine return URLs based on request origin or SITE_URL fallback
    const origin = req.headers.get("origin") ?? SITE_URL_ENV ?? "http://localhost:5173";
    const success_url = `${origin}/checkout?status=success`;
    const cancel_url = `${origin}/checkout?status=cancel`;

    const { priceId, quantity = 1, metadata } = await req.json().catch(() => ({}));
    const price = priceId ?? DEFAULT_PRICE_ID;
    if (!price) {
      throw new Error("Missing priceId. Pass in body or set STRIPE_PRICE_ID.");
    }

    // Use Stripe REST API directly (works well on Deno edge)
    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        mode: "payment",
        "line_items[0][price]": price,
        "line_items[0][quantity]": String(quantity),
        success_url,
        cancel_url,
        ...(metadata
          ? Object.entries(metadata).reduce((acc, [k, v], idx) => {
              acc[`metadata[${k}]`] = String(v);
              return acc;
            }, {} as Record<string, string>)
          : {}),
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("Stripe error:", data);
      throw new Error(data.error?.message ?? "Failed to create Stripe session");
    }

    return new Response(JSON.stringify({ url: data.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("create-checkout-session error:", message);
    return new Response(JSON.stringify({ error: message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});


