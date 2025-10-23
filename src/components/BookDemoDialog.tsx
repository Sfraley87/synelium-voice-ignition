import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CTASection } from "./CTASection";

interface BookDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookDemoDialog = ({ open, onOpenChange }: BookDemoDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Book Your Free Voice Bot Demo
          </DialogTitle>
          <DialogDescription className="text-base">
            Fill out the form below and we'll reach out within 24 hours to schedule your personalized demo
          </DialogDescription>
        </DialogHeader>
        <CTASection isFormVisible={true} />
      </DialogContent>
    </Dialog>
  );
};
