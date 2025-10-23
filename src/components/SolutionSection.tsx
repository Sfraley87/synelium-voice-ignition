import { CheckCircle2, Clock, Brain, Zap } from "lucide-react";

export const SolutionSection = () => {
  const features = [
    {
      icon: Clock,
      stat: "24/7",
      title: "Always Available",
      description: "Never miss a call again - your AI answers instantly, day or night",
    },
    {
      icon: Brain,
      stat: "100%",
      title: "Personalized Responses",
      description: "Trained on your business - sounds like your best employee",
    },
    {
      icon: Zap,
      stat: "<3s",
      title: "Lightning Fast",
      description: "Answers in under 3 seconds - before customers hang up",
    },
    {
      icon: CheckCircle2,
      stat: "90%",
      title: "Booking Rate",
      description: "Converts more calls to appointments than human receptionists",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Your New <span className="bg-gradient-primary bg-clip-text text-transparent">AI Team Member</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The always-on voice bot that answers, books, and closes leads while you focus on what matters
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-glow group"
            >
              <div className="mb-4 flex items-center justify-between">
                <feature.icon className="w-8 h-8 text-primary" />
                <span className="text-3xl font-black bg-gradient-primary bg-clip-text text-transparent">
                  {feature.stat}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key stat callout */}
        <div className="bg-gradient-glow border border-primary/30 rounded-2xl p-8 text-center">
          <p className="text-6xl font-black bg-gradient-primary bg-clip-text text-transparent mb-4">
            90%
          </p>
          <p className="text-xl font-semibold mb-2">
            of customers call competitors after one missed call
          </p>
          <p className="text-muted-foreground">
            Don't let another lead slip away
          </p>
        </div>
      </div>
    </section>
  );
};
