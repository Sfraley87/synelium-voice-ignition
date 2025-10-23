import { Check, Sparkles, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ValueStackProps {
  onBookDemo: () => void;
}

export const ValueStack = ({ onBookDemo }: ValueStackProps) => {
  const offers = [
    "Complete AI Voice Bot Setup (Worth $5,000)",
    "Custom Voice & Personality Training",
    "Calendar & CRM Integration",
    "Real-Time Call Analytics Dashboard",
    "Unlimited Call Handling",
    "30-Day Money-Back Guarantee",
    "Priority Support & Updates",
  ];

  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
            <Rocket className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-accent">LIMITED BETA OFFER</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Never Miss a Lead Again
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get the complete AI Voice Bot system installed and running in under 48 hours
          </p>
        </div>

        <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 md:p-12 shadow-glow-lg">
          <div className="space-y-4 mb-8">
            {offers.map((offer, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 p-1 rounded-full bg-primary/20">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg font-medium flex-1">{offer}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-8 mb-8">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-5xl font-black bg-gradient-primary bg-clip-text text-transparent">
                $997
              </span>
              <span className="text-2xl text-muted-foreground line-through">$5,000</span>
            </div>
            <p className="text-muted-foreground mb-4">
              One-time setup + $297/month (cancel anytime)
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-destructive/20 border border-destructive/30">
              <Sparkles className="w-4 h-4 text-destructive" />
              <span className="text-sm font-bold text-destructive">
                Only 5 spots available this month
              </span>
            </div>
          </div>

          <Button 
            variant="hero" 
            size="xl" 
            className="w-full text-xl"
            onClick={onBookDemo}
          >
            🚀 Claim Your Spot Now
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-6">
            ✓ No credit card required · ✓ 15-minute setup call · ✓ Live in 48 hours
          </p>
        </div>
      </div>
    </section>
  );
};
