import { CheckCircle2, Clock, Brain, Zap } from "lucide-react";

export const SolutionSection = () => {
  const workflow = [
    {
      icon: Clock,
      stat: "24/7",
      title: "Instant answer routing",
      description:
        "Talkie Talk answers or texts back within seconds, triages intent, and captures the information your team needs to wow the customer.",
    },
    {
      icon: Brain,
      stat: "On-brand",
      title: "Voice that feels familiar",
      description:
        "Upload scripts, FAQs, and brand notes to fine-tune the personality. Responses stay consistent whether it’s 2 PM or 2 AM.",
    },
    {
      icon: Zap,
      stat: "<3s",
      title: "Automations that close loops",
      description:
        "Stripe payment links, appointment confirmations, and CRM updates happen automatically while customers are still engaged.",
    },
    {
      icon: CheckCircle2,
      stat: "98%",
      title: "Quality you can trust",
      description:
        "Monitor every interaction with transcripts, sentiment tracking, and customizable guardrails before rollout.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08),_transparent_65%)]" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-200">
              How Talkie Talk works
            </div>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Automate the grunt work, keep the human magic.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
              We combine natural conversation, smart workflows, and real-time analytics so customer-facing teams stay focused on high-value work.
            </p>
            <div className="mt-8 grid gap-3 rounded-2xl border border-border/50 bg-card/70 p-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 text-foreground">
                <span className="font-semibold text-primary">01</span> Sync your calendars, CRM, and Stripe account.
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <span className="font-semibold text-primary">02</span> Train Talkie Talk using guided scripts and sample calls.
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <span className="font-semibold text-primary">03</span> Launch, monitor, and tweak inside your analytics dashboard.
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {workflow.map((item) => (
              <div
                key={item.title}
                className="h-full rounded-3xl border border-border/40 bg-card/80 p-6 shadow-lg shadow-primary/5 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex items-center justify-between text-primary">
                  <item.icon className="h-7 w-7" />
                  <span className="text-sm font-semibold uppercase tracking-widest text-primary/80">{item.stat}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
