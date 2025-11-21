import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    value: "item-1",
    question: "How quickly can we go live with Talkie Talk?",
    answer:
      "Most teams launch in 7-10 days. We use guided templates to gather scripts, FAQs, integrations, and routing rules, then run a supervised go-live so you’re confident from day one.",
  },
  {
    value: "item-2",
    question: "Can Talkie Talk hand off to real team members?",
    answer:
      "Absolutely. Routes can transfer to a human teammate, send a Slack alert, or schedule a callback when someone needs a personal touch.",
  },
  {
    value: "item-3",
    question: "Do you support languages other than English?",
    answer:
      "Yes. We support 20+ languages and accents. Let us know your top regions during onboarding and we’ll tailor the voice model accordingly.",
  },
  {
    value: "item-4",
    question: "How is billing handled?",
    answer:
      "Stripe powers our billing. You can manage subscriptions, payment methods, and invoices from the self-serve customer portal we include with every plan.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">Frequently asked questions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to feel confident switching to AI-powered conversations.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-border/60 bg-card/60 p-6 shadow-lg shadow-primary/5">
          <Accordion type="single" collapsible>
            {questions.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

