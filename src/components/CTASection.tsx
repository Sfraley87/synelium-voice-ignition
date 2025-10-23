import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

interface CTASectionProps {
  isFormVisible?: boolean;
}

export const CTASection = ({ isFormVisible = true }: CTASectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Demo request received! We'll contact you within 24 hours.");
    setFormData({ name: "", business: "", phone: "", email: "" });
  };

  return (
    <section className="py-20 px-4 bg-gradient-glow border-y border-primary/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">10x Your Bookings?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Book your free demo and see the AI Voice Bot in action
          </p>
        </div>

        {isFormVisible && (
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-glow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Your Name *</Label>
                <Input
                  id="name"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="business" className="text-foreground">Business Name *</Label>
                <Input
                  id="business"
                  placeholder="Smith & Co."
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@business.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>
            </div>

            <Button type="submit" variant="hero" size="xl" className="w-full text-xl">
              🚀 Schedule My Free Demo
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-6">
              We respect your privacy. Your information is 100% secure.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
