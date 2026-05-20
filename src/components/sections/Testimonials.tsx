import { Star, Quote } from "lucide-react";
import { TESTIMONIALS, SITE } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Μαρτυρίες
          </span>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-ink md:text-4xl">
            Τι λένε άνθρωποι που εμπιστεύτηκαν τη διαδρομή τους
          </h2>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-warm text-warm" />
              ))}
            </div>
            <span className="font-semibold text-foreground">
              {SITE.rating.value.toFixed(1)}
            </span>
            <span>· {SITE.rating.count} κριτικές · {SITE.rating.source}</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(14,27,26,0.04)]"
            >
              <Quote
                className="absolute right-5 top-5 h-6 w-6 text-primary/15"
                aria-hidden
              />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-warm text-warm" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/85">
                «{t.text}»
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-ink">
                {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}