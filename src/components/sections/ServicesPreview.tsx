import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/ypiresies-data";

export function ServicesPreview() {
  const preview = SERVICES.filter((service) => !service.hidden).slice(0, 8);

  return (
    <section className="reveal bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow">Υπηρεσίες</span>
            <h2 className="mt-3 font-serif text-3xl leading-[1.1] tracking-[-0.02em] text-ink md:text-[2.5rem]">
              Ολοκληρωμένη ψυχολογική υποστήριξη για κάθε ηλικία και ανάγκη
            </h2>
          </div>
          <Link
            to="/ypiresies"
            className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Όλες οι υπηρεσίες <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((s) => (
            <Link
              key={s.id}
              to="/ypiresies/$serviceId"
              params={{ serviceId: s.id }}
              className="group flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-[1.125rem] leading-snug tracking-[-0.01em] text-ink">
                  {s.title}
                </h3>
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
