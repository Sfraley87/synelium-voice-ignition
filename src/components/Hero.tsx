import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

interface HeroProps {
  onBookDemo: () => void;
  onPlayDemo: () => void;
}

export const Hero = ({ onBookDemo, onPlayDemo }: HeroProps) => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: "voice-bot-solution",
      name: "Voice Bot Solution",
      price: 499,
      quantity: 1,
    });
    navigate("/cart");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-glow-pulse" />
      
      <div className="container max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/30 mb-8 animate-slide-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">
            Limited Beta Spots This Month
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-slide-up">
          Never Miss Another
          <span className="block bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
            Call Again
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up">
          Your AI Voice Bot answers instantly, books clients, and makes you money{" "}
          <span className="text-foreground font-semibold">while you work</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button 
            variant="hero" 
            size="xl"
            onClick={handleAddToCart}
            className="group"
          >
            <ShoppingCart className="mr-2 w-5 h-5" />
            Add to Cart
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="xl"
            onClick={onPlayDemo}
            className="group"
          >
            See How It Sounds
            <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="xl"
            onClick={onBookDemo}
            className="group"
          >
            Book Free Demo
          </Button>
        </div>

        {/* Trust indicator */}
        <p className="mt-12 text-sm text-muted-foreground animate-slide-up">
          Trusted by 500+ local and enterprise businesses
        </p>
      </div>
    </section>
  );
};
