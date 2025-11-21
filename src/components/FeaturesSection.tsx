import { Lightbulb, Workflow, Headphones, CalendarClock, ShieldCheck, LineChart } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Conversational AI that sounds human",
    description: "Train Talkie Talk to speak in your brand’s voice and hand off to your team when it matters.",
  },
  {
    icon: CalendarClock,
    title: "Instant booking handoff",
    description: "Connect to your calendar, CRM, or booking app so new leads slot themselves in automatically.",
  },
  {
    icon: Headphones,
    title: "Always-on coverage",
    description: "Answer every call, SMS, or web chat 24/7 without hiring night staff or overtime help.",
  },
  {
    icon: ShieldCheck,
    title: "Secure and compliant",
    description: "Stripe-powered payments, encrypted data, and audit-ready logs keep finance and legal happy.",
  },
  {
    icon: LineChart,
    title: "Insights that guide growth",
    description: "See conversation summaries, sentiment, and conversion trends so you can optimize your funnel.",
  },
  {
    icon: Lightbulb,
    title: "Fast implementation",
    description: "Launch in days, not months. Our onboarding blueprint gets you live with plug-and-play templates.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_55%)]" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Why teams love Talkie Talk
          </div>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Smarter conversations. Less busywork.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Talkie Talk keeps customers delighted from the first hello to the final payment, while your team tackles the high-impact work.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-border/40 bg-card/80 p-8 shadow-lg shadow-primary/5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-primary/20"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-emerald-500/10 p-8 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="text-4xl font-black text-foreground">94%</p>
            <p className="mt-2 text-sm text-muted-foreground">of conversations answered in under five seconds</p>
          </div>
          <div>
            <p className="text-4xl font-black text-foreground">33%</p>
            <p className="mt-2 text-sm text-muted-foreground">average increase in booked appointments during month one</p>
          </div>
          <div>
            <p className="text-4xl font-black text-foreground">15+</p>
            <p className="mt-2 text-sm text-muted-foreground">native integrations plus API access for custom workflows</p>
          </div>
        </div>
      </div>
    </section>
  );
};

