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
import { DemoAudioDialog } from "@/components/DemoAudioDialog";
import { GHLForm } from "@/components/GHLForm";

const Index = () => {
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const [isAudioDemoOpen, setIsAudioDemoOpen] = useState(false);

  const handleBookDemo = () => {
    setIsDemoDialogOpen(true);
  };

  const handlePlayDemo = () => {
    setIsAudioDemoOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onBookDemo={handleBookDemo} onPlayDemo={handlePlayDemo} />
      <ProblemSection />
      <SolutionSection />
      <ValueStack onBookDemo={handleBookDemo} />
      <Testimonials />
      <CTASection />
      <GHLForm title="Join the waitlist" />
      <Footer />
      <ChatBubble onPlayDemo={handlePlayDemo} />
      <BookDemoDialog open={isDemoDialogOpen} onOpenChange={setIsDemoDialogOpen} />
      <DemoAudioDialog open={isAudioDemoOpen} onOpenChange={setIsAudioDemoOpen} />
    </div>
  );
};

export default Index;
