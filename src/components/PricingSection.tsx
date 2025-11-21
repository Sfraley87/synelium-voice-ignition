import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type BillingCycle = "monthly" | "annual";

const tiers = [
  {
    name: "Starter",
    headline: "Essential automation for solo and small teams.",
    price: {
      monthly: "$129",
      annual: "$109",
    },
    priceHelp: {
      monthly: "per month",
      annual: "per month when billed annually",
    },
    features: [
      "Up to 500 inbound conversations",
      "One brand voice profile",
      "Calendar + email integration",
      "Real-time notifications",
      "Email support",
    ],
    cta: "Start Starter",
    link: "https://checkout.stripe.com/c/pay/talkie-tier-1",
    recommended: false,
  },
  {
    name: "Growth",
    headline: "Most teams choose Growth for complete coverage.",
    price: {
      monthly: "$249",
      annual: "$219",
    },
    priceHelp: {
      monthly: "per month",
      annual: "per month when billed annually",
    },
    features: [
      "Unlimited conversations",
      "Three brand voice profiles",
      "Two-way CRM sync",
      "Call summary + analytics",
      "Priority chat support",
      "Stripe payment links built-in",
    ],
    cta: "Choose Growth",
    link: "https://checkout.stripe.com/c/pay/talkie-tier-2",
    recommended: true,
  },
  {
    name: "Scale",
    headline: "Advanced automations and dedicated success team.",
    price: {
      monthly: "Let’s chat",
      annual: "Let’s chat",
    },
    priceHelp: {
      monthly: "custom pricing",
      annual: "custom pricing",
    },
    features: [
      "Unlimited brand voices",
      "Dedicated onboarding specialist",
      "Custom integrations + API access",
      "Premium analytics workspace",
      "Quarterly optimization calls",
      "24/7 phone + Slack support",
    ],
    cta: "Talk to Sales",
    link: "https://synelium.com/contact",
    recommended: false,
  },
];

export const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <section id="pricing" className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background py-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_65%)]" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="text-center">
          <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary">
            Flexible pricing
          </Badge>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Plans that grow with you
          </h2>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Launch with Starter, scale with Growth, or co-create a bespoke automation stack with our Scale team.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-lg items-center justify-center gap-3 rounded-full border border-border/60 bg-card/80 p-2 shadow-inner shadow-primary/10">
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={cn(
              "flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-all",
              billingCycle === "monthly"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("annual")}
            className={cn(
              "flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-all",
              billingCycle === "annual"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Annual <span className="ml-1 rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary">Save 2 months</span>
          </button>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => {
            const isRecommended = tier.recommended;
            const showPrice = tier.price[billingCycle as keyof typeof tier.price];
            const priceHelp = tier.priceHelp[billingCycle as keyof typeof tier.priceHelp];

            return (
              <div
                key={tier.name}
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border border-border/50 bg-card/90 p-8 shadow-lg shadow-primary/5 transition-all",
                  isRecommended
                    ? "border-primary/50 bg-gradient-to-b from-primary/15 via-card to-card shadow-xl shadow-primary/20"
                    : "hover:-translate-y-1 hover:border-primary/30 hover:shadow-primary/10"
                )}
              >
                {isRecommended ? (
                  <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-gradient-to-r from-primary via-primary to-emerald-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground shadow-lg">
                    <Sparkles className="h-4 w-4" />
                    Most popular
                  </div>
                ) : null}
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">{tier.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{tier.headline}</p>
                </div>
                <div className="mt-8">
                  <p className="text-5xl font-black text-foreground">{showPrice}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{priceHelp}</p>
                </div>
                <ul className="mt-8 grid gap-3 text-sm text-muted-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-10 w-full">
                  <a href={tier.link} target="_blank" rel="noreferrer">
                    {tier.cta}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl border border-primary/40 bg-primary/10 p-8 text-center text-sm text-primary-foreground sm:text-base">
          <span className="font-semibold text-primary-foreground">Sandbox note:</span> All checkout buttons point to Stripe test-mode URLs.
          Swap in your live payment links before launch.
        </div>
      </div>
    </section>
  );
};

