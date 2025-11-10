interface GHLFormProps {
  title?: string;
}

export const GHLForm = ({ title = "Get in touch" }: GHLFormProps) => {
  const formUrl = import.meta.env.VITE_GHL_FORM_URL as string | undefined;

  if (!formUrl) {
    return (
      <div className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
        Set VITE_GHL_FORM_URL to embed your GoHighLevel form here.
      </div>
    );
  }

  return (
    <section className="container max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
      <p className="text-muted-foreground text-center mb-8">We’ll reach out shortly after you submit.</p>
      <div className="rounded-lg overflow-hidden border bg-card">
        <iframe
          src={formUrl}
          title="GoHighLevel Form"
          className="w-full"
          style={{ minHeight: 700, border: "0" }}
          loading="lazy"
          allow="camera; microphone; geolocation"
        />
      </div>
    </section>
  );
};


