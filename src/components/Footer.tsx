export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
            <span className="text-2xl font-bold">Synelium</span>
          </div>
          
          <p className="text-muted-foreground max-w-md mx-auto">
            Built by Synelium — powering intelligent business systems
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-muted-foreground pt-6 border-t border-border mt-6">
            © {new Date().getFullYear()} Synelium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
