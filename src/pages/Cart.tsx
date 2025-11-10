import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, removeItem, clear, total } = useCart();
  const navigate = useNavigate();

  const tax = Math.round(total * 0.1 * 100) / 100;
  const grandTotal = Math.round((total + tax) * 100) / 100;

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Items</CardTitle>
              <CardDescription>Review and update your selection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.length === 0 ? (
                <div className="text-muted-foreground">Your cart is empty.</div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-muted-foreground">Qty {item.quantity}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                      <Button variant="ghost" onClick={() => removeItem(item.id)}>Remove</Button>
                    </div>
                  </div>
                ))
              )}
              {items.length > 0 && (
                <div className="pt-2">
                  <Button variant="outline" onClick={clear}>Clear Cart</Button>
                </div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
              <CardDescription>Complete your purchase</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold text-primary">${grandTotal.toFixed(2)}</span>
              </div>
              <Button className="w-full" size="lg" onClick={() => navigate("/checkout")} disabled={items.length === 0}>
                Proceed to Checkout
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;


