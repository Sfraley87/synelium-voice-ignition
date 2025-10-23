import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Martinez",
      business: "Martinez Law Firm",
      quote: "We went from missing 40% of calls to capturing every single lead. Our intake appointments tripled in the first month.",
      rating: 5,
    },
    {
      name: "James Chen",
      business: "Elite Auto Repair",
      quote: "The AI sounds so natural, customers don't even realize it's not human. Best ROI of any tool we've ever used.",
      rating: 5,
    },
    {
      name: "Lisa Rodriguez",
      business: "Wellness Dental Group",
      quote: "Game changer. Our front desk staff can focus on patients while the AI handles all incoming calls flawlessly.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Results From <span className="bg-gradient-primary bg-clip-text text-transparent">Real Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See why businesses choose Synelium
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-glow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
