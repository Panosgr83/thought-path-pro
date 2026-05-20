import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";
import { FinalCTA } from "@/components/sections/FinalCTA";

const TITLE = `Υπηρεσίες — ${SITE.name}`;
const DESCRIPTION =
  "Όλες οι υπηρεσίες ψυχικής υγείας: συμβουλευτική, ψυχοθεραπεία, ζευγάρι, παιδική ψυχολογία, ΔΕΠΥ, life & NLP coaching, γονεϊκή καθοδήγηση και άλλα.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Υπηρεσίες
          </span>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-6xl">
            Ολοκληρωμένη ψυχολογική φροντίδα
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            12 εξειδικευμένες υπηρεσίες για παιδιά, εφήβους, ενήλικες, ζευγάρια
            και οικογένειες. Δεν είστε σίγουροι ποια σας ταιριάζει; Καλέστε μας
            — θα σας προσανατολίσουμε.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col gap-4 bg-card p-7 transition-colors hover:bg-secondary/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl leading-snug text-ink">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Δείτε αν σας ταιριάζει <ArrowUpRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}