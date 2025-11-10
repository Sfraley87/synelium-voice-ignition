import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, BadgeCheck, CreditCard, Lock } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Checkout = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const priceId = import.meta.env.VITE_STRIPE_PRICE_ID as string | undefined;

  const total = useMemo(() => ({
    subtotal: 499.0,
    tax: 49.9,
    currency: "USD",
  }), []);

  useEffect(() => {
    const status = searchParams.get("status");
    if (status === "success") {
      toast({
        title: "Payment successful",
        description: "Thanks for your purchase. We’ve emailed your receipt.",
      });
    } else if (status === "cancel") {
      toast({
        title: "Checkout canceled",
        description: "You can try again anytime.",
      });
    }
  }, [searchParams, toast]);

  const handleStripeCheckout = async () => {
    if (!priceId) {
      toast({
        title: "Missing Stripe configuration",
        description: "Set VITE_STRIPE_PRICE_ID to enable checkout.",
        variant: "destructive",
      });
      return;
    }
    setIsProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout-session", {
        body: { priceId },
      });
      if (error) {
        throw error;
      }
      if (data?.url) {
        window.location.href = data.url as string;
        return;
      }
      toast({
        title: "Unable to start checkout",
        description: "Please try again later.",
        variant: "destructive",
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      toast({
        title: "Checkout failed",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Review your purchase</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Voice Bot Solution</h3>
                  <p className="text-sm text-muted-foreground">AI-powered customer service</p>
                </div>
                <p className="font-bold">$499</p>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${total.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${total.tax.toFixed(2)}</span>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold text-primary">${(total.subtotal + total.tax).toFixed(2)}</span>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-6">
                <div className="flex items-start gap-2">
                  <Lock className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">Secure Checkout</p>
                    <p className="text-xs text-muted-foreground">Your payment information is encrypted and secure</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment */}
          <Card>
            <CardHeader>
              <CardTitle>Payment</CardTitle>
              <CardDescription>Complete your purchase with Stripe</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Pay with Stripe
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You’ll be redirected to Stripe’s secure checkout to complete your payment.
                  </p>
                </div>

                <Button
                  onClick={handleStripeCheckout}
                  className="w-full"
                  size="lg"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Redirecting..." : "Checkout with Stripe"}
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <BadgeCheck className="h-4 w-4" />
                  <span>30‑day money‑back guarantee</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
