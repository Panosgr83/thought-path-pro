import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, User } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES, TONE_BG, TONE_TINT, getService, type Service } from "@/lib/ypiresies-data";
import heroBg from "@/assets/service-hero-bg.jpg";

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
  const Icon = service.icon;
  const related = SERVICES.filter((s) => s.id !== service.id && !s.hidden).slice(0, 3);

  return (
    <>
      {/* Hero — background photo + semi-transparent color wash per service */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className={`absolute inset-0 ${TONE_TINT[service.tone]}`} aria-hidden />
        <div className="absolute inset-0 bg-background/55 backdrop-blur-[2px]" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 md:px-8">
          <Link
            to="/ypiresies"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Επιστροφή στις Υπηρεσίες
          </Link>
          <div className="mt-8 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-card/90 text-primary shadow-sm backdrop-blur"
              aria-hidden
            >
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h1 className="font-serif text-3xl leading-tight text-ink md:text-5xl">
                {service.title}
              </h1>
              <p className="mt-3 text-base text-foreground/80 md:text-lg">
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
            {related.map((s) => {
              const RIcon = s.icon;
              return (
                <Link
                  key={s.id}
                  to="/ypiresies/$serviceId"
                  params={{ serviceId: s.id }}
                  className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <RIcon className="h-5 w-5" />
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
