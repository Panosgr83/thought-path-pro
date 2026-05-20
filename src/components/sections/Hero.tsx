import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Star } from "lucide-react";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 via-background to-background"
      />
      <div
        aria-hidden
        className="absolute -top-32 right-[-10%] -z-10 h-[480px] w-[480px] rounded-full bg-primary-soft/30 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-12 md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-8 md:pb-28 md:pt-20">
        <div className="fade-up flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {SITE.tagline}
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-6xl">
            Διά… <span className="text-primary">Λόγου</span> Νόησις
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Ένα ασφαλές και υποστηρικτικό περιβάλλον όπου κάθε άτομο μπορεί να
            εκφραστεί, να αναπτυχθεί και να βρει τις δικές του λύσεις.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {/* Desktop primary → /contact, mobile primary → tel */}
            <Link
              to="/contact"
              className="hidden items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md sm:inline-flex"
            >
              Κλείστε γνωριμία
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${SITE.phonesTel[0]}`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 sm:hidden"
            >
              <Phone className="h-4 w-4" />
              Καλέστε τώρα
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Δείτε τις υπηρεσίες
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-warm text-warm" />
              ))}
              <span className="ml-1 font-medium text-foreground">5.0</span>
              <span>Google Reviews</span>
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span>Μέλος Ε.Ε.Σ.</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span>Η 1η συνεδρία είναι γνωριμίας</span>
          </div>
        </div>

        <div className="fade-up relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-primary-soft/40 via-secondary to-primary/20 shadow-[0_20px_60px_-20px_rgba(15,95,92,0.25)]">
            {/* Decorative composition — no stock photo for v4. */}
            <svg
              viewBox="0 0 400 500"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="oklch(0.42 0.055 180)" stopOpacity="0.15" />
                  <stop offset="1" stopColor="oklch(0.78 0.045 175)" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <circle cx="280" cy="140" r="120" fill="url(#g1)" />
              <circle cx="120" cy="380" r="160" fill="url(#g1)" />
              <path
                d="M50,250 Q200,180 350,260 T350,400"
                stroke="oklch(0.42 0.055 180)"
                strokeWidth="1"
                fill="none"
                opacity="0.25"
              />
              <path
                d="M50,300 Q200,230 350,310"
                stroke="oklch(0.42 0.055 180)"
                strokeWidth="1"
                fill="none"
                opacity="0.18"
              />
            </svg>
            <div className="relative flex h-full flex-col justify-end p-8">
              <blockquote className="rounded-2xl bg-background/90 p-6 backdrop-blur-sm shadow-sm">
                <p className="font-serif text-base leading-relaxed text-ink md:text-lg">
                  «Η ψυχική υγεία βρίσκεται στο επίκεντρο κάθε μας ενέργειας.»
                </p>
                <footer className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Ευδοκία Τίντζη-Σαββιδάκη
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}