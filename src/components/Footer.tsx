import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Status", href: "#" },
  { label: "Security", href: "#" },
];

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@synelium.com",
    href: "mailto:hello@synelium.com",
  },
  {
    icon: Phone,
    label: "Sales",
    value: "+1 (415) 555-0199",
    href: "tel:+14155550199",
  },
  {
    icon: MapPin,
    label: "HQ",
    value: "Remote-first across North America",
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/90 py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-emerald-500 text-lg font-bold text-primary-foreground">
                TT
              </span>
              <div>
                <p className="text-lg font-semibold text-foreground">Talkie Talk</p>
                <p className="text-sm text-muted-foreground">By Synelium</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm text-muted-foreground">
              Talkie Talk pairs delightful voice automation with the reliability of Synelium’s automation platform. Stripe-secured and built for teams who never want to miss a customer moment again.
            </p>
            <div className="mt-6 flex gap-3 text-xs uppercase tracking-wider text-muted-foreground">
              <span>synelium.com</span>
              <span>·</span>
              <span>Built with love in 2025</span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Company</h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Contact</h3>
              <ul className="mt-4 space-y-4 text-sm text-foreground/80">
                {contactDetails.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-3">
                    <detail.icon className="mt-0.5 h-4 w-4 text-primary" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">{detail.label}</p>
                      {detail.href ? (
                        <a href={detail.href} className="transition-colors hover:text-primary">
                          {detail.value}
                        </a>
                      ) : (
                        <p>{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Synelium, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
