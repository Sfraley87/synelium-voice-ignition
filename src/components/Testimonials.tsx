import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Martinez",
    title: "Managing Partner",
    business: "Martinez Law Group",
    quote:
      "Talkie Talk feels like an extension of our client care team. Our intake calendar fills itself and our paralegals finally have breathing room.",
  },
  {
    name: "James Chen",
    title: "Founder",
    business: "Elite Auto Repair",
    quote:
      "We capture after-hours repairs automatically, collect deposits with Stripe, and keep customers updated via SMS without lifting a finger.",
  },
  {
    name: "Lisa Rodriguez",
    title: "COO",
    business: "Wellness Dental Collective",
    quote:
      "The onboarding playbook was effortless. In the first week our no-show rate dropped 18% thanks to Talkie Talk’s reminder flows.",
  },
];

const logos = ["Brightline Clinics", "Red Cedar Hospitality", "Northwind Logistics", "Summit Wellness", "Novo Retail"];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-card/40 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.12),_transparent_60%)]" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Teams that rave about Talkie Talk
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Customer-facing teams across legal, home services, healthcare, and retail lift conversions with our AI voice specialists.
          </p>
        </div>

        <div className="mt-12 grid gap-6 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-xl shadow-primary/10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative flex h-full flex-col rounded-2xl border border-border/40 bg-card/80 p-6 shadow-inner shadow-primary/5 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <Quote className="absolute -right-2 -top-2 h-10 w-10 text-primary/15" />
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-5 flex-1 text-base text-foreground">
                “{testimonial.quote}”
              </p>
              <footer className="mt-6 border-t border-border/30 pt-4 text-sm">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground">
                  {testimonial.title}, {testimonial.business}
                </p>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border/60 bg-background/80 px-6 py-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Trusted by service-driven teams
          </p>
          <div className="mt-6 grid gap-6 text-center text-base text-muted-foreground sm:grid-cols-3 lg:grid-cols-5">
            {logos.map((logo) => (
              <div key={logo} className="rounded-xl border border-border/30 bg-card/60 px-4 py-3">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
