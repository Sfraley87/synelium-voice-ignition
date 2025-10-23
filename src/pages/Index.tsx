import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ValueStack } from "@/components/ValueStack";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ChatBubble } from "@/components/ChatBubble";
import { BookDemoDialog } from "@/components/BookDemoDialog";

const Index = () => {
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);

  const handleBookDemo = () => {
    setIsDemoDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onBookDemo={handleBookDemo} />
      <ProblemSection />
      <SolutionSection />
      <ValueStack onBookDemo={handleBookDemo} />
      <Testimonials />
      <CTASection />
      <Footer />
      <ChatBubble />
      <BookDemoDialog open={isDemoDialogOpen} onOpenChange={setIsDemoDialogOpen} />
    </div>
  );
};

export default Index;
