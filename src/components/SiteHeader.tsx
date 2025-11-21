import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const target = document.querySelector(href);
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="container mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <a href="#hero" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-emerald-400 text-lg font-bold text-background">
            TT
          </span>
          <div className="text-left">
            <p className="text-base font-semibold text-foreground">Talkie Talk</p>
            <p className="text-xs text-muted-foreground">By Synelium</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {navigation.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="transition-colors hover:text-primary"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="lg" onClick={() => handleNavClick("#pricing")}>
            Get Started
          </Button>
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open ? (
        <div className="border-t border-border/60 bg-background/95 shadow-lg md:hidden">
          <nav className="container mx-auto flex max-w-6xl flex-col px-4 py-6 text-base font-medium text-foreground">
            {navigation.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="rounded-lg px-4 py-3 text-left transition-colors hover:bg-muted"
              >
                {item.name}
              </button>
            ))}
            <Button
              size="lg"
              className="mt-4"
              onClick={() => handleNavClick("#pricing")}
            >
              Get Started
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
};


