import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return {};
    const title = `${s.title} — ${SITE.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: s.short },
        { property: "og:title", content: title },
        { property: "og:description", content: s.short },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.longIntro,
            provider: {
              "@type": "LocalBusiness",
              name: SITE.name,
              telephone: SITE.phonesTel[0],
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE.address.street,
                addressLocality: SITE.address.city,
                postalCode: SITE.address.postal,
                addressCountry: SITE.address.country,
              },
            },
            areaServed: "Αττική, Ελλάδα",
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="font-serif text-3xl text-ink">Η υπηρεσία δεν βρέθηκε</h1>
      <Link to="/services" className="mt-6 inline-flex text-primary hover:underline">
        Δείτε όλες τις υπηρεσίες
      </Link>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const idx = SERVICES.findIndex((x) => x.slug === s.slug);
  const next = SERVICES[(idx + 1) % SERVICES.length];

  return (
    <>
      <section className="border-b border-border bg-secondary/40 py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Όλες οι υπηρεσίες
          </Link>
          <div className="mt-6 flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <s.icon className="h-6 w-6" />
            </div>
            <div>
              <h1 className="font-serif text-3xl leading-tight text-ink md:text-5xl">
                {s.title}
              </h1>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {s.audience}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-4xl gap-12 px-4 md:grid-cols-[1.5fr_1fr] md:px-8">
          <div>
            <p className="font-serif text-xl leading-relaxed text-ink md:text-2xl">
              {s.longIntro}
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {s.short}
              {/* TODO(content): final long-form copy from client per service */}
            </p>

            <h2 className="mt-12 font-serif text-2xl text-ink">Τι περιλαμβάνει</h2>
            <ul className="mt-5 space-y-3">
              {s.bullets.map((b: string) => (
                <li key={b} className="flex gap-3 text-base text-foreground/85">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-sm md:sticky md:top-28">
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              Πρώτο βήμα
            </div>
            <h3 className="mt-2 font-serif text-xl text-ink">
              Κλείστε γνωριμία
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Η πρώτη συνάντηση είναι συνάντηση γνωριμίας — χωρίς δέσμευση.
            </p>
            <Link
              to="/contact"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Φόρμα επικοινωνίας
            </Link>
            <a
              href={`tel:${SITE.phonesTel[0]}`}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              {SITE.phones[0]}
            </a>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-12">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 md:px-8">
          <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">
            ← Όλες οι υπηρεσίες
          </Link>
          <Link
            to="/services/$slug"
            params={{ slug: next.slug }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Επόμενο: {next.title}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}