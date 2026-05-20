import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Star, ShieldCheck, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import heroPortrait from "@/assets/hero-portrait.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Full-width background portrait */}
      <img
        src={heroPortrait}
        alt="Ευδοκία Τίντζη-Σαββιδάκη — Κοινωνική Ψυχολόγος, Παιδοψυχολόγος"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        loading="eager"
      />
      {/* Readability overlay — warm wash, lighter on the right where portrait sits */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background/95 via-background/80 to-background/30 md:from-background/92 md:via-background/65 md:to-background/10"
      />

      <div className="mx-auto max-w-6xl px-4 pb-24 pt-14 md:px-8 md:pb-36 md:pt-28 lg:min-h-[680px]">
        <div className="fade-up flex max-w-2xl flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {SITE.tagline}
          </span>

          <h1 className="mt-7 font-serif text-[3rem] leading-[1.02] tracking-[-0.025em] text-ink sm:text-[3.75rem] md:text-[4.5rem]">
            Κατανόηση.
            <br />
            Αποδοχή.
            <br />
            <span className="text-primary">Αλλαγή.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Επαγγελματική ψυχολογική στήριξη σε έναν ζεστό, φιλόξενο χώρο —
            για να αντιμετωπίσετε τις δυσκολίες, να γνωρίσετε καλύτερα τον
            εαυτό σας και να προχωρήσετε μπροστά.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Κλείστε γνωριμία
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-6 py-3.5 text-sm font-semibold text-brand-blue-foreground shadow-sm transition-all hover:bg-brand-blue/90"
            >
              Δείτε τις υπηρεσίες
            </Link>
            <a
              href={`tel:${SITE.phonesTel[0]}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/80 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/40 hover:text-primary sm:hidden"
            >
              <Phone className="h-4 w-4" />
              Καλέστε τώρα
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/60 pt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-warm text-warm" />
              ))}
              <span className="ml-1 font-medium text-foreground">5.0</span>
              <span>(120+ κριτικές)</span>
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary/70" />
              7+ χρόνια εμπειρίας
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary/70" />
              Μέλος Ε.Ε.Σ.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
