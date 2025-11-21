import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.2),_transparent_55%)]" />
      <div className="container relative z-10 mx-auto max-w-4xl rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/15 via-primary/10 to-emerald-500/10 px-6 py-16 text-center shadow-2xl shadow-primary/20">
        <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
          Ready to give customers a five-star experience?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80 sm:text-xl">
          Launch Talkie Talk in days and keep every conversation on-brand, on-time, and on-point. Our team will guide you from first script to the
          first Stripe payment.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="px-8 text-base font-semibold">
            <a href="https://checkout.stripe.com/c/pay/talkie-tier-2" target="_blank" rel="noreferrer">
              Start with Growth
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-primary/60 text-primary hover:bg-primary/10">
            <a href="https://synelium.com/contact">
              Book a strategy call
            </a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-primary-foreground/70">
          Need a custom deployment? Email{" "}
          <a href="mailto:hello@synelium.com" className="font-semibold underline underline-offset-4">
            hello@synelium.com
          </a>{" "}
          and we’ll map out the perfect rollout.
        </p>
      </div>
    </section>
  );
};
