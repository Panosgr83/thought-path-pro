import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SERVICES, TONE_BG } from "@/lib/ypiresies-data";

const TITLE = `Υπηρεσίες Ψυχολόγου στο Γαλάτσι — ${SITE.name}`;
const DESCRIPTION =
  "12 υπηρεσίες ψυχικής υγείας στο Γαλάτσι: συμβουλευτική, ψυχοθεραπεία, ζευγάρι, παιδική & εφηβική ψυχολογία, ΔΕΠΥ, coaching, γονεϊκή καθοδήγηση και άλλα.";

export const Route = createFileRoute("/ypiresies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE.url}/ypiresies` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/ypiresies` }],
  }),
  component: YpiresiesPage,
});

function YpiresiesPage() {
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
            και οικογένειες — προσαρμοσμένες στις δικές σας ανάγκες.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article
                key={s.id}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl ${TONE_BG[s.tone]}`}
                  aria-hidden
                >
                  {s.emoji}
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl leading-snug text-ink">{s.title}</h2>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {s.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                </div>
                <Link
                  to="/ypiresies/$serviceId"
                  params={{ serviceId: s.id }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Μάθετε περισσότερα <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">
            Δεν ξέρετε από πού να ξεκινήσετε;
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Επικοινωνήστε μαζί μας και θα σας βοηθήσουμε να βρείτε την υπηρεσία
            που ταιριάζει στις δικές σας ανάγκες.
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

      <FinalCTA />
    </>
  );
}
