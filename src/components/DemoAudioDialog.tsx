import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Play, Pause, Volume2, FileText } from "lucide-react";

interface DemoAudioDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DemoAudioDialog = ({ open, onOpenChange }: DemoAudioDialogProps) => {
  const [mode, setMode] = useState<'choice' | 'voice' | 'text'>('choice');
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  const demoScript = "Hello! I'm your AI voice assistant, ready to transform how you handle customer calls. I can answer questions, book appointments, and provide information 24/7. Would you like me to help you schedule a demo of our voice bot system?";

  const generateAndPlayDemo = async () => {
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase.functions.invoke('generate-demo-audio');
      
      if (error) throw error;
      
      if (!data?.audioContent) {
        throw new Error('No audio content received');
      }

      // Convert base64 to blob
      const binaryString = atob(data.audioContent);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: 'audio/mp3' });
      const url = URL.createObjectURL(blob);
      
      setAudioUrl(url);
      
      // Create and play audio
      const newAudio = new Audio(url);
      newAudio.onended = () => setIsPlaying(false);
      newAudio.onpause = () => setIsPlaying(false);
      newAudio.onplay = () => setIsPlaying(true);
      
      setAudio(newAudio);
      await newAudio.play();
      setIsPlaying(true);
      
    } catch (error) {
      console.error('Error playing demo:', error);
      toast({
        title: "Error",
        description: "Failed to play demo audio. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePlayPause = () => {
    if (!audio) {
      generateAndPlayDemo();
      return;
    }
    
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const handleClose = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
    setMode('choice');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md bg-background border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {mode === 'choice' ? '🎧 Voice Bot Demo' : mode === 'voice' ? '🎧 Voice Demo' : '📝 Text Demo'}
          </DialogTitle>
          <DialogDescription className="text-base">
            {mode === 'choice' 
              ? 'Choose how you want to experience our AI Voice Bot' 
              : mode === 'voice' 
              ? 'Listen to how our AI Voice Bot sounds in action'
              : 'Read what our AI Voice Bot would say'}
          </DialogDescription>
        </DialogHeader>
        
        {mode === 'choice' ? (
          <div className="py-8 flex flex-col gap-4">
            <Button
              onClick={() => setMode('voice')}
              size="lg"
              className="w-full"
            >
              <Volume2 className="mr-2 w-5 h-5" />
              Voice Demo
            </Button>
            <Button
              onClick={() => setMode('text')}
              size="lg"
              variant="outline"
              className="w-full"
            >
              <FileText className="mr-2 w-5 h-5" />
              Text Demo
            </Button>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Perfect for when you can't listen or prefer to read
            </p>
          </div>
        ) : mode === 'text' ? (
          <div className="py-6 flex flex-col gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <p className="text-base leading-relaxed">
                {demoScript}
              </p>
            </div>
            <Button
              onClick={() => setMode('choice')}
              variant="outline"
              className="w-full"
            >
              Back to Options
            </Button>
          </div>
        ) : (
          <div className="py-8 flex flex-col items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center animate-glow-pulse">
              <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center">
                {isLoading ? (
                  <Loader2 className="w-10 h-10 text-primary animate-spin" />
                ) : isPlaying ? (
                  <div className="flex gap-1">
                    <div className="w-1 h-8 bg-primary animate-pulse" />
                    <div className="w-1 h-10 bg-primary animate-pulse delay-75" />
                    <div className="w-1 h-6 bg-primary animate-pulse delay-150" />
                    <div className="w-1 h-10 bg-primary animate-pulse" />
                  </div>
                ) : (
                  <Play className="w-10 h-10 text-primary" />
                )}
              </div>
            </div>
            
            <Button
              onClick={togglePlayPause}
              disabled={isLoading}
              size="lg"
              className="w-full"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  Generating Demo...
                </>
              ) : isPlaying ? (
                <>
                  <Pause className="mr-2 w-5 h-5" />
                  Pause Demo
                </>
              ) : (
                <>
                  <Play className="mr-2 w-5 h-5" />
                  {audioUrl ? 'Play Again' : 'Play Demo'}
                </>
              )}
            </Button>
            
            <Button
              onClick={() => setMode('choice')}
              variant="ghost"
              size="sm"
              className="w-full"
            >
              Back to Options
            </Button>
            
            <p className="text-sm text-muted-foreground text-center">
              Experience the natural, professional voice that will represent your business 24/7
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
