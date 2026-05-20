import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, User } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES, TONE_BG, getService, type Service } from "@/lib/ypiresies-data";

export const Route = createFileRoute("/ypiresies/$serviceId")({
  loader: ({ params }) => {
    const service = getService(params.serviceId);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} — ${SITE.name}` : SITE.name;
    const desc = s?.description[0] ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: desc.slice(0, 160) },
        { property: "og:title", content: title },
        { property: "og:description", content: desc.slice(0, 160) },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-serif text-3xl text-ink">Η υπηρεσία δεν βρέθηκε</h1>
      <Link to="/ypiresies" className="mt-6 inline-flex items-center gap-2 text-primary">
        <ArrowLeft className="h-4 w-4" /> Επιστροφή στις Υπηρεσίες
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData() as { service: Service };
  const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary/40 py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <Link
            to="/ypiresies"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Επιστροφή στις Υπηρεσίες
          </Link>
          <div className="mt-8 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div
              className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-4xl ${TONE_BG[service.tone]}`}
              aria-hidden
            >
              {service.emoji}
            </div>
            <div>
              <h1 className="font-serif text-3xl leading-tight text-ink md:text-5xl">
                {service.title}
              </h1>
              <p className="mt-3 text-base text-muted-foreground md:text-lg">
                {service.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Τι είναι */}
      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="font-serif text-2xl text-ink md:text-3xl">Τι είναι</h2>
          <div className="mt-6 space-y-4">
            {service.description.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Πώς λειτουργεί */}
      {service.process && service.process.length > 0 ? (
        <section className="bg-secondary/40 py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="font-serif text-2xl text-ink md:text-3xl">Πώς λειτουργεί</h2>
            <ol className="mt-6 space-y-4">
              {service.process.map((step, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-serif text-sm font-semibold ${TONE_BG[service.tone]}`}
                  >
                    {i + 1}
                  </span>
                  <p className="text-base leading-relaxed text-ink">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {/* Οφέλη + Σε ποιους απευθύνεται */}
      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="font-serif text-2xl text-ink md:text-3xl">Οφέλη</h2>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${TONE_BG[service.tone]}`}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base leading-relaxed text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-ink md:text-3xl">
              Σε ποιους απευθύνεται
            </h2>
            <ul className="mt-6 space-y-3">
              {service.forWhom.map((w, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${TONE_BG[service.tone]}`}
                  >
                    <User className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base leading-relaxed text-foreground">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/40 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">
            Έτοιμοι να ξεκινήσετε;
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Επικοινωνήστε μαζί μας για να κλείσετε το πρώτο σας ραντεβού ή για να
            λάβετε περισσότερες πληροφορίες.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            Επικοινωνήστε Μαζί Μας
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Σχετικές Υπηρεσίες */}
      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h2 className="font-serif text-2xl text-ink md:text-3xl">
            Σχετικές Υπηρεσίες
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.id}
                to="/ypiresies/$serviceId"
                params={{ serviceId: s.id }}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${TONE_BG[s.tone]}`}
                  aria-hidden
                >
                  {s.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Μάθετε περισσότερα <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
