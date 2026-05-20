import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Star } from "lucide-react";
import { SITE } from "@/lib/site";
import heroPortrait from "@/assets/hero-portrait.png";

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

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-12 md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-8 md:pb-28 md:pt-16">
        <div className="fade-up flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {SITE.tagline}
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-6xl">
            Καλωσορίσατε στο <span className="text-primary">Διά… Λόγου Νόησις</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Κέντρο Ψυχικής Υγείας που προσφέρει επαγγελματική υποστήριξη για την
            ψυχική σας ευεξία — σε έναν ζεστό, φιλόξενο χώρο όπου μπορείτε να
            μιλήσετε ελεύθερα.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {/* Primary CTA (coral) → Υπηρεσίες, secondary (blue) → Επικοινωνία.
                Mobile gets click-to-call as third option for friction reduction. */}
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Οι Υπηρεσίες μας
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-6 py-3.5 text-sm font-semibold text-brand-blue-foreground shadow-sm transition-all hover:bg-brand-blue/90"
            >
              Επικοινωνία
            </Link>
            <a
              href={`tel:${SITE.phonesTel[0]}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary sm:hidden"
            >
              <Phone className="h-4 w-4" />
              Καλέστε τώρα
            </a>
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_20px_60px_-20px_rgba(239,106,59,0.25)]">
            <img
              src={heroPortrait}
              alt="Ευδοκία Τίντζη-Σαββιδάκη — Κοινωνική Ψυχολόγος, Παιδοψυχολόγος"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent p-6 md:p-8">
              <blockquote className="rounded-2xl bg-background/92 p-5 backdrop-blur-sm shadow-sm md:p-6">
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