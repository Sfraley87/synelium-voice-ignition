import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-card border border-primary/30 rounded-2xl shadow-glow-lg w-80 overflow-hidden animate-slide-up">
          <div className="bg-gradient-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-primary-foreground">Synelium AI</p>
                <p className="text-xs text-primary-foreground/80">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground/80 hover:text-primary-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-4">
            <div className="bg-secondary rounded-lg p-4 rounded-tl-none">
              <p className="text-sm">
                👋 Hi! Want to hear how our AI Voice Bot sounds?
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-4 rounded-tl-none">
              <p className="text-sm mb-3">
                Click below for a quick demo call:
              </p>
              <Button variant="outline" size="sm" className="w-full">
                🎧 Call Demo: (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group bg-gradient-primary p-4 rounded-full shadow-glow-lg hover:shadow-glow transition-all hover:scale-110 animate-float"
        >
          <MessageCircle className="w-7 h-7 text-primary-foreground" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full animate-glow-pulse" />
        </button>
      )}
    </div>
  );
};
