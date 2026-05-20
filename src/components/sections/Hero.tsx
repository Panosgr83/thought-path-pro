import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Star, ShieldCheck, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import heroPortrait from "@/assets/hero-portrait.png";

export function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-background md:min-h-screen md:bg-ink">
      <div className="relative z-0 w-full overflow-hidden bg-background md:absolute md:inset-0 md:h-full">
        <img
          src={heroPortrait}
          alt="Ευδοκία Τίντζη-Σαββιδάκη — Κοινωνική Ψυχολόγος, Παιδοψυχολόγος"
          className="block aspect-[16/9] w-full object-cover object-center md:aspect-auto md:h-full md:object-cover md:object-[66%_center] lg:object-[60%_center] xl:object-[center_top]"
          loading="eager"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 z-10 hidden bg-[linear-gradient(90deg,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.5)_42%,rgba(0,0,0,0.18)_72%,rgba(0,0,0,0.08)_100%)] md:block"
      />

      <div className="relative z-20 bg-background md:bg-transparent">
        <div className="mx-auto flex max-w-7xl items-start px-6 pb-16 pt-10 sm:pt-12 md:min-h-screen md:items-center md:px-20 md:py-24">
          <div className="fade-up flex max-w-[700px] flex-col text-ink md:text-white">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-accent-foreground md:border-white/30 md:bg-white/10 md:text-white md:backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {SITE.tagline}
            </span>

            <h1 className="mt-6 font-serif text-[2.9rem] leading-[1.08] tracking-normal text-ink sm:text-[3.75rem] md:mt-7 md:text-[4.5rem] md:leading-[1.02] md:text-white">
              Κατανόηση.
              <br />
              Αποδοχή.
              <br />
              <span className="text-primary">Αλλαγή.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:mt-7 md:text-lg md:text-white/85">
              Επαγγελματική ψυχολογική στήριξη σε έναν ζεστό, φιλόξενο χώρο — για να αντιμετωπίσετε
              τις δυσκολίες, να γνωρίσετε καλύτερα τον εαυτό σας και να προχωρήσετε μπροστά.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-9">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                Κλείστε γνωριμία
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/ypiresies"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent md:border-white/40 md:bg-white/10 md:text-white md:backdrop-blur md:hover:bg-white/20"
              >
                Δείτε τις υπηρεσίες
              </Link>
              <a
                href={`tel:${SITE.phonesTel[0]}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent sm:hidden md:border-white/30 md:bg-white/10 md:text-white md:backdrop-blur md:hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                Καλέστε τώρα
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground md:border-white/20 md:text-white/80">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warm text-warm" />
                ))}
                <span className="ml-1 font-medium text-ink md:text-white">5.0</span>
                <span>(120+ κριτικές)</span>
              </div>
              <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block md:bg-white/40" />
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-muted-foreground md:text-white/80" />
                7+ χρόνια εμπειρίας
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block md:bg-white/40" />
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-muted-foreground md:text-white/80" />
                Μέλος Ε.Ε.Σ.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
