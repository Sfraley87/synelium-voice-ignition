import { XCircle, TrendingDown, AlertCircle } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: XCircle,
      title: "Missing Calls = Lost Revenue",
      description: "Every unanswered call is a customer choosing your competitor",
    },
    {
      icon: TrendingDown,
      title: "Inconsistent Customer Service",
      description: "Staff turnover, sick days, and overwhelmed teams create gaps",
    },
    {
      icon: AlertCircle,
      title: "After-Hours Opportunities Lost",
      description: "90% of customers call competitors after one missed call",
    },
  ];

  return (
    <section className="py-20 px-4 bg-card/30 border-y border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Cost of <span className="text-destructive">Missed Calls</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Your phone system is costing you thousands every month
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card border border-destructive/20 rounded-xl p-8 hover:border-destructive/50 transition-all hover:shadow-lg"
            >
              <problem.icon className="w-12 h-12 text-destructive mb-4" />
              <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
