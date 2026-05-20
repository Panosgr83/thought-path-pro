import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/site";

export function ServicesPreview() {
  // Show 8 most relevant on home, full 12 live on /services
  const preview = SERVICES.slice(0, 8);

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Υπηρεσίες
            </span>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-ink md:text-4xl">
              Ολοκληρωμένη ψυχολογική υποστήριξη για κάθε ηλικία και ανάγκη
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Και οι 12 υπηρεσίες <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Δείτε αν σας ταιριάζει <ArrowUpRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}