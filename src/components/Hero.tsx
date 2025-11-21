import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

const trustedBy = ["Nova Clinics", "Brightline Ops", "Evergreen Dental", "Northwind Logistics", "Summit Retail"];

export const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    pricingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.08),_transparent_55%)]" />
      <div className="container relative z-10 mx-auto grid max-w-6xl gap-16 px-4 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-7 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Smart conversations, happier customers
          </div>
          <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Meet Talkie Talk: AI voices that sound like your best rep, 24/7.
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Capture every inbound call, follow up instantly, and close more deals without adding headcount.
            Our conversational AI handles the talking while your team focuses on delivery.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <Button size="lg" className="group" onClick={scrollToPricing}>
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" asChild className="group">
              <a href="#features">
                See Talkie Talk in action
                <PlayCircle className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-sm text-muted-foreground md:justify-start">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">2.5x</span>
              <span>faster lead response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">24/7</span>
              <span>coverage with natural voices</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">15+</span>
              <span>integrations ready to connect</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground md:justify-start">
            <span>Trusted by</span>
            <div className="flex flex-wrap justify-center gap-3 text-muted-foreground/80 md:justify-start">
              {trustedBy.map((logo) => (
                <span key={logo} className="rounded-full border border-border/40 px-3 py-1 text-[11px] text-muted-foreground">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl md:-left-16 md:top-12" />
          <div className="absolute -right-10 bottom-10 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl md:-right-16 md:bottom-12" />
          <div className="relative rounded-3xl border border-border/50 bg-card/80 p-8 shadow-xl backdrop-blur">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Live conversation</p>
                <p className="text-2xl font-semibold text-foreground">“Hi Jamie, ready to go over your order?”</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/70 p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-10 w-10 shrink-0 rounded-full bg-primary/10 text-center font-semibold leading-[2.5rem] text-primary">
                    TT
                  </span>
                  <div className="space-y-2 text-left">
                    <p className="text-sm text-muted-foreground">Talkie Talk agent</p>
                    <p className="text-base font-medium text-foreground">
                      “I can confirm delivery for tomorrow between 10am and noon. Want me to text you updates?”
                    </p>
                  </div>
                </div>
              </div>
              <div className="flow-root rounded-2xl border border-primary/40 bg-primary/10 p-4">
                <dl className="-mx-4 -mt-4 flex flex-wrap">
                  <div className="flex-1 px-4 pt-4">
                    <dt className="text-xs uppercase tracking-wider text-primary">Call completion rate</dt>
                    <dd className="text-2xl font-bold text-foreground">98%</dd>
                  </div>
                  <div className="flex-1 px-4 pt-4">
                    <dt className="text-xs uppercase tracking-wider text-primary">Customer satisfaction</dt>
                    <dd className="text-2xl font-bold text-foreground">4.9/5</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
